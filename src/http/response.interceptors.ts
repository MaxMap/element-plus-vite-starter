import { AxiosInstance } from "axios";
import { ElMessage } from "element-plus";
import errorCode from "@/units/errorCode";

export const registerResponseInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    (res) => {
      const code: any = res.data.code || 200000;
      // 获取错误信息
      const message: string = res.data.message || errorCode["default"];
      if (code !== 200000) {
        ElMessage({
          message: message,
          type: "error",
          duration: 5 * 1000,
        });
        return Promise.reject("error");
      } else {
        return res.data.data;
      }
    },
    (error) => {
      let { message } = error;
      if (message === "Network Error") {
        message = "后端接口连接异常";
      } else if (message.includes("timeout")) {
        message = "系统接口请求超时";
      } else if (message.includes("Request failed with status code")) {
        message = "系统接口" + message.substr(message.length - 3) + "异常";
      }
      ElMessage({
        message: message,
        grouping: true,
        type: "error",
        duration: 5 * 1000,
      });
      return Promise.reject(error);
    },
  );
};
