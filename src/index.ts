import { App } from "vue";

import VueSlickCarousel from "./VueSlickCarousel.vue";

export function install(app: App) {
  app.component("VueSlickCarousel", VueSlickCarousel);
}

export type {
  ListSlickEvents,
  ListSlickMethods,
  SlickBreakpoint,
  SlickDirection,
  SlickEvents,
  SlickInstance,
  SlickInstanceOptions,
  SlickMethods,
} from './carousel.types'

export { VueSlickCarousel };

export default {
  install,
};
