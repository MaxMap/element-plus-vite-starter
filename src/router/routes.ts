/*
 * @Date: 2023-05-28 09:14:25
 * @LastEditors: “MaxMap”
 * @LastEditTime: 2023-05-28 09:27:45
 * @FilePath: \element-plus-vite-starter\src\router\routes.ts
 */
import { RouteRecordRaw } from "vue-router";
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
// RouteRecordRaw 内置类型接口
const router: Array<RouteRecordRaw> = [
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

export default router;
