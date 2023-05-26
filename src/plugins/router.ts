import router from "@/router";
import { Router } from "vue-router";
import { App } from "vue";

export const registerRouter = (app: App) => {
  app.use(router);
};
