import { App } from "vue";

import VueSlickCarousel from "./VueSlickCarousel.vue";

export function install(app: App) {
  app.component("VueSlickCarousel", VueSlickCarousel);
}

export { VueSlickCarousel };

export default {
  install,
};
