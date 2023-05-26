import { App } from "vue";
import { priceNum } from "./limit.directives";
export function registerDirection(app: App<Element>) {
  const instruction = [priceNum];
  instruction.forEach((item) => {
    item(app);
  });
}
