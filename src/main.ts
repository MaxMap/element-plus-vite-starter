import { createApp } from "vue";
import App from "./App.vue";
import { registerPlugins } from "./plugins";

import "@/styles/index.scss";
import "uno.css";
import "element-plus/theme-chalk/src/message.scss";

const app = createApp(App);
registerPlugins(app);
app.mount("#app");
