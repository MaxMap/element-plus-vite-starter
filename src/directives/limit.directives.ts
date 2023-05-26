import { useRoute } from "vue-router";
import { App } from "vue";
// const route = useRoute;
// 按钮权限
export const priceNum = (app: App) => {
  // v-limit='"add"'
  app.directive("limit", {
    created(el: { remove: () => void }, binding: { value: any }) {
      //   const permTypes: any = route?.permTypes || []; // 获取当前路由权限
      //   if (permTypes && !permTypes.some((i: any) => i === binding.value)) {
      //     el.remove();
      //   }
    },
  });
};
