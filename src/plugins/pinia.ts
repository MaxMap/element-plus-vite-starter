import { Pinia, createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import { App } from "vue";
const store = createPinia();
store.use(piniaPluginPersist);
export const registerPinia = (app: App) => {
  app.use(store);
};
