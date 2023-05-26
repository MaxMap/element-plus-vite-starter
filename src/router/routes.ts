import HomeRoutes from "@/views/Home/router";
import NotFound from "@/views/NotFound/router";
// 根路由
const rootRoute = {
  path: "/",
  name: "root",
  redirect: HomeRoutes[0].path,
  meta: {
    title: "首页", // 该标题勿修改，面包屑组件使用
  },
};
export default [
  rootRoute,
  ...HomeRoutes,
  ...NotFound,
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "首页",
    },
    component: () => import("@/views/Home/Home.vue"),
  },
];
