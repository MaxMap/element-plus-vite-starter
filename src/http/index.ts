import axios, { AxiosInstance } from "axios";
import { registerRequestInterceptors } from "./request.interceptors";
import { registerResponseInterceptors } from "./response.interceptors";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
// 创建axios实例
const strictFetch: AxiosInstance = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL:
    import.meta.env.MODE === "development"
      ? "/api"
      : "/store-saas/portal/gateway",
  // 超时
  timeout: 10000,
});

/**
 * 请求时的拦截
 */
registerRequestInterceptors(strictFetch);

/**
 * 响应时拦截
 */
registerResponseInterceptors(strictFetch);

export default strictFetch;
