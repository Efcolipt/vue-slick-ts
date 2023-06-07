type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export interface SlickInstance extends SlickMethods {
  on: SlickEvents;
}

export type SlickCurrentSlide = number;

export type SlickNextSlide = number;

export type SlickDirection = "left" | "right" | "up" | "down" | "vertical";

export interface SlickBreakpoint {
  breakpoint: number;
  settings: SlickInstanceOptions | "unslick";
}

export type SlickInstanceOptions = DeepPartial<{
  accessibility: boolean;
  adaptiveHeight: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
  arrows: boolean;
  asNavFor: string | null;
  appendArrows: JQuery.Node | JQuery.Selector | JQuery.htmlString;
  appendDots: JQuery.Node | JQuery.Selector | JQuery.htmlString;
  prevArrow: JQuery.Node | JQuery.Selector;
  nextArrow: JQuery.Node | JQuery.Selector;
  centerMode: boolean;
  centerPadding: string;
  cssEase: string;
  customPaging: () => void;
  dots: boolean;
  dotsClass: string;
  draggable: boolean;
  fade: boolean;
  focusOnSelect: boolean;
  easing: string;
  edgeFriction: number;
  infinite: boolean;
  initialSlide: number;
  lazyLoad: "ondemand" | "progressive";
  mobileFirst: boolean;
  pauseOnFocus: boolean;
  pauseOnHover: boolean;
  pauseOnDotsHover: boolean;
  respondTo: "window" | "slider" | "min";
  responsive: SlickBreakpoint[];
  rows: number;
  slide: JQuery<HTMLElement>;
  slidesPerRow: number;
  slidesToShow: number;
  slidesToScroll: number;
  speed: number;
  swipe: boolean;
  swipeToSlide: boolean;
  touchMove: boolean;
  touchThreshold: number;
  useCSS: boolean;
  useTransform: boolean;
  variableWidth: boolean;
  vertical: boolean;
  verticalSwiping: boolean;
  rtl: boolean;
  waitForAnimate: boolean;
  zIndex: number;
}>;

export enum ListSlickMethods {
  SLICK_METHODS_CURRENT_SLIDE = "slickSlickCurrentSlide",
  SLICK_METHODS_GO_TO = "slickGoTo",
  SLICK_METHODS_NEXT = "slickNext",
  SLICK_METHODS_PREV = "slickPrev",
  SLICK_METHODS_PAUSE = "slickPause",
  SLICK_METHODS_PLAY = "slickPlay",
  SLICK_METHODS_ADD = "slickAdd",
  SLICK_METHODS_REMOVE = "slickRemove",
  SLICK_METHODS_FILTER = "slickFilter",
  SLICK_METHODS_UNFILTER = "slickUnfilter",
  SLICK_METHODS_GET_OPTION = "slickGetOption",
  SLICK_METHODS_SET_OPTION = "slickSetOption",
  SLICK_METHODS_UNSLICK = "unslick",
  SLICK_METHODS_GET_SLICK = "getSlick",
}

export enum ListSlickEvents {
  SLICK_EVENTS_INIT = "init",
  SLICK_EVENTS_REINIT = "reInit",
  SLICK_EVENTS_DESTROY = "destroy",
  SLICK_EVENTS_SET_POSITION = "setPosition",
  SLICK_EVENTS_AFTER_CHANGE = "afterChange",
  SLICK_EVENTS_BEFORE_CHANGE = "beforeChange",
  SLICK_EVENTS_BREAKPOINT = "breakpoint",
  SLICK_EVENTS_EDGE = "edge",
  SLICK_EVENTS_SWIPE = "swipe",
  SLICK_EVENTS_LAZY_LOADED = "lazyLoaded",
  SLICK_EVENTS_LAZY_LOAD_ERROR = "lazyLoadError",
}

export type SlickBaseMethod<T, R = []> = [event: T, ...rest: R];

export interface SlickMethods {
  (
    ...base: SlickBaseMethod<ListSlickMethods.SLICK_METHODS_CURRENT_SLIDE>
  ): number;
  (...base: SlickBaseMethod<ListSlickMethods.SLICK_METHODS_NEXT>): void;
  (...base: SlickBaseMethod<ListSlickMethods.SLICK_METHODS_PREV>): void;
  (...base: SlickBaseMethod<ListSlickMethods.SLICK_METHODS_PAUSE>): void;
  (...base: SlickBaseMethod<ListSlickMethods.SLICK_METHODS_PLAY>): void;
  (
    ...base: SlickBaseMethod<ListSlickMethods.SLICK_METHODS_GET_SLICK>
  ): SlickInstance;
  (...base: SlickBaseMethod<ListSlickMethods.SLICK_METHODS_UNSLICK>): void;
  (
    ...base: SlickBaseMethod<
      ListSlickMethods.SLICK_METHODS_GO_TO,
      [slideNumber: number, dotAnimate: boolean]
    >
  ): void;
  (
    ...base: SlickBaseMethod<
      ListSlickMethods.SLICK_METHODS_ADD,
      [html: JQuery.Selector, index: number | boolean, addBefore: boolean]
    >
  ): void;
  (
    ...base: SlickBaseMethod<
      ListSlickMethods.SLICK_METHODS_REMOVE,
      [index: number | boolean, removeBefore: boolean, removeAll: boolean]
    >
  ): void;
  (
    ...base: SlickBaseMethod<
      ListSlickMethods.SLICK_METHODS_FILTER,
      [filter: JQuery.Selector]
    >
  ): void;
  (
    ...base: SlickBaseMethod<
      ListSlickMethods.SLICK_METHODS_UNFILTER,
      [index: number]
    >
  ): void;
  (
    ...base: SlickBaseMethod<
      ListSlickMethods.SLICK_METHODS_GET_OPTION,
      [option: string]
    >
  ): void;
  (
    ...base: SlickBaseMethod<
      ListSlickMethods.SLICK_METHODS_SET_OPTION,
      [option: string, value: string, refresh: boolean]
    >
  ): void;
}

export type SlickBaseEventCallback<Rest = []> = (
  event: JQuery.Event,
  slickInstance: SlickInstance,
  ...rest: Rest
) => void;

export type SlickBaseEvent<T, Rest = []> = [
  event: T,
  cb: SlickBaseEventCallback<Rest>
];

export interface SlickEvents {
  (...base: SlickBaseEvent<ListSlickEvents.SLICK_EVENTS_INIT>): SlickInstance;
  (...base: SlickBaseEvent<ListSlickEvents.SLICK_EVENTS_REINIT>): SlickInstance;
  (
    ...base: SlickBaseEvent<ListSlickEvents.SLICK_EVENTS_DESTROY>
  ): SlickInstance;
  (
    ...base: SlickBaseEvent<ListSlickEvents.SLICK_EVENTS_SET_POSITION>
  ): SlickInstance;
  (
    ...base: SlickBaseEvent<ListSlickEvents.SLICK_EVENTS_AFTER_CHANGE>
  ): SlickInstance;
  (
    ...base: SlickBaseEvent<
      ListSlickEvents.SLICK_EVENTS_BEFORE_CHANGE,
      [currentSlide: SlickCurrentSlide, nextSlide: SlickNextSlide]
    >
  ): SlickInstance;
  (
    ...base: SlickBaseEvent<
      ListSlickEvents.SLICK_EVENTS_BREAKPOINT,
      [breakpoint: SlickBreakpoint]
    >
  ): SlickInstance;
  (
    ...base: SlickBaseEvent<
      ListSlickEvents.SLICK_EVENTS_EDGE,
      [direction: SlickDirection]
    >
  ): SlickInstance;
  (
    ...base: SlickBaseEvent<
      ListSlickEvents.SLICK_EVENTS_SWIPE,
      [direction: SlickDirection]
    >
  ): SlickInstance;
  (
    ...base: SlickBaseEvent<
      ListSlickEvents.SLICK_EVENTS_LAZY_LOADED,
      [image: JQuery<HTMLImageElement>, imageSource: string]
    >
  ): SlickInstance;
  (
    ...base: SlickBaseEvent<
      ListSlickEvents.SLICK_EVENTS_LAZY_LOAD_ERROR,
      [image: JQuery<HTMLImageElement>, imageSource: string]
    >
  ): SlickInstance;
}
