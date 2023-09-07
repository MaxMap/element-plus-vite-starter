/*
 * @Date: 2023-05-28 09:14:25
 * @LastEditors: “MaxMap”
 * @LastEditTime: 2023-05-28 14:23:51
 * @FilePath: \element-plus-vite-starter\src\plugins\index.ts
 */
import { registerRouter } from "./router";
import { registerPinia } from "./pinia";
import { App } from "vue";

export function registerPlugins(app: App<Element>) {
  const plugins = [registerRouter, registerPinia];
  plugins.forEach((item) => {
    item(app);
  });
}
