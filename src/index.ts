import { App } from "vue";

import VueSlickCarousel from "./VueSlickCarousel.vue";

export function install(app: App) {
  app.component("VueSlickCarousel", VueSlickCarousel);
}

export {
  ListSlickEvents,
  ListSlickMethods,
} from './carousel.types'

export type {
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
