import { ExtractPublicPropTypes } from "vue";
import { carouselProps } from "./carousel.props";

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

export enum ListSlickMethods {
  SLICK_METHODS_CURRENT_SLIDE = "slickCurrentSlide",
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

export type SlickInstanceOptions = ExtractPublicPropTypes<typeof carouselProps>;

export interface SlickBreakpoint {
  breakpoint: number;
  settings: SlickInstanceOptions | "unslick";
}

export type SlickDirection = "left" | "right" | "up" | "down" | "vertical";

export interface SlickMethods {
  (method: ListSlickMethods.SLICK_METHODS_CURRENT_SLIDE): number;
  (method: ListSlickMethods.SLICK_METHODS_NEXT): void;
  (method: ListSlickMethods.SLICK_METHODS_PREV): void;
  (method: ListSlickMethods.SLICK_METHODS_PAUSE): void;
  (method: ListSlickMethods.SLICK_METHODS_PLAY): void;
  (method: ListSlickMethods.SLICK_METHODS_GET_SLICK): SlickInstance;
  (
    method: ListSlickMethods.SLICK_METHODS_UNSLICK,
    fromBreakpoint: number
  ): void;
  (
    method: ListSlickMethods.SLICK_METHODS_GO_TO,
    slideNumber: number,
    dotAnimate: boolean
  ): void;
  (
    method: ListSlickMethods.SLICK_METHODS_ADD,
    html: JQuery.Selector,
    index: number | boolean,
    addBefore: boolean
  ): void;
  (
    method: ListSlickMethods.SLICK_METHODS_REMOVE,
    index: number | boolean,
    removeBefore: boolean,
    removeAll: boolean
  ): void;
  (
    method: ListSlickMethods.SLICK_METHODS_FILTER,
    filter: JQuery.Selector
  ): void;
  (method: ListSlickMethods.SLICK_METHODS_UNFILTER, index: number): void;
  (method: ListSlickMethods.SLICK_METHODS_GET_OPTION, option: string): void;
  (
    method: ListSlickMethods.SLICK_METHODS_SET_OPTION,
    option: string,
    value: string,
    refresh: boolean
  ): void;
}

export interface SlickEvents {
  (
    event: ListSlickEvents.SLICK_EVENTS_INIT,
    cb: (event: JQuery.Event, slickInstance: SlickInstance) => void
  ): SlickInstance;
  (
    event: ListSlickEvents.SLICK_EVENTS_REINIT,
    cb: (event: JQuery.Event, slickInstance: SlickInstance) => void
  ): SlickInstance;
  (
    event: ListSlickEvents.SLICK_EVENTS_DESTROY,
    cb: (event: JQuery.Event, slickInstance: SlickInstance) => void
  ): SlickInstance;
  (
    event: ListSlickEvents.SLICK_EVENTS_SET_POSITION,
    cb: (event: JQuery.Event, slickInstance: SlickInstance) => void
  ): SlickInstance;

  (
    event: ListSlickEvents.SLICK_EVENTS_AFTER_CHANGE,
    cb: (event: JQuery.Event, slickInstance: SlickInstance) => void
  ): SlickInstance;
  (
    event: ListSlickEvents.SLICK_EVENTS_BEFORE_CHANGE,
    cb: (
      event: JQuery.Event,
      slickInstance: SlickInstance,
      currentSlide: number,
      nextSlide: number
    ) => void
  ): SlickInstance;

  (
    event: ListSlickEvents.SLICK_EVENTS_BREAKPOINT,
    cb: (
      event: JQuery.Event,
      slickInstance: SlickInstance,
      breakpoint: SlickBreakpoint
    ) => void
  ): SlickInstance;
  (
    event: ListSlickEvents.SLICK_EVENTS_EDGE,
    cb: (
      event: JQuery.Event,
      slickInstance: SlickInstance,
      direction: SlickDirection
    ) => void
  ): SlickInstance;
  (
    event: ListSlickEvents.SLICK_EVENTS_SWIPE,
    cb: (
      event: JQuery.Event,
      slickInstance: SlickInstance,
      direction: SlickDirection
    ) => void
  ): SlickInstance;
  (
    event: ListSlickEvents.SLICK_EVENTS_LAZY_LOADED,
    cb: (
      event: JQuery.Event,
      slickInstance: SlickInstance,
      image: JQuery<HTMLImageElement>,
      imageSource: string
    ) => void
  ): SlickInstance;
  (
    event: ListSlickEvents.SLICK_EVENTS_LAZY_LOAD_ERROR,
    cb: (
      event: JQuery.Event,
      slickInstance: SlickInstance,
      image: JQuery<HTMLImageElement>,
      imageSource: string
    ) => void
  ): SlickInstance;
}

export interface SlickInstance extends SlickMethods {
  on: SlickEvents;
  readonly options: typeof carouselProps;
  readonly defaults: SlickInstanceOptions;
  readonly originalSettings: SlickInstanceOptions;
  readonly initials: {
    /**
     * When there is an animation running.
     * Default: false
     */
    animating: boolean;

    /**
     * When they user is dragging a slide.
     * Default: false
     */
    dragging: boolean;

    /**
     * Internal `setInterval` identifier.
     * Default: null
     */
    autoPlayTimer: number | null;

    /**
     * The current direction (`0` for left and down, `1` for right and up).
     * Default: 0
     */
    currentDirection: number;

    /**
     * Default: null
     */
    currentLeft: number | null;

    /**
     * The index of the current slide.
     * Default: 0
     */
    currentSlide: number;

    /**
     * The direction (`0` for left and down, `1` for right and up).
     * Default: null
     */
    direction: number;

    /**
     * jQuery instance that contains the "dots".
     * Default: null
     */
    $dots: JQuery | null;

    /**
     * The list's width in pixels.
     * Default: null
     */
    listWidth: number | null;

    /**
     * The list's height in pixels.
     * Default: null
     */
    listHeight: number | null;

    /**
     * (actually it's not used in Slick, so I don't know what it is...)
     * Default: 0
     */
    loadIndex: number;

    /**
     * jQuery instance that contains the "next arrow".
     * Default: null
     */
    $nextArrow: JQuery | null;

    /**
     * jQuery instance that contains the "prev arrow".
     * Default: null
     */
    $prevArrow: JQuery | null;

    /**
     * When they user is scrolling a slide.
     * Default: false
     */
    scrolling: boolean;

    /**
     * The number of slides.
     * Default: null
     */
    slideCount: number | null;

    /**
     * The slide's width in pixels.
     * Default: null
     */
    slideWidth: number | null;

    /**
     * jQuery instance that contains the "slide track".
     * Default: null
     */
    $slideTrack: JQuery | null;

    /**
     * jQuery instance that contains the "slides".
     * Default: null
     */
    $slides: JQuery | null;

    /**
     * When the slider is sliding.
     * Default: false
     */
    sliding: boolean;

    /**
     * Slide offset in pixels.
     * Default: 0
     */
    slideOffset: number;

    /**
     * Default: null
     */
    swipeLeft: number | null;

    /**
     * Default: false
     */
    swiping: boolean;

    /**
     * jQuery instance that contains the "list".
     * Default: null
     */
    $list: null;

    /**
     * Object that contains properties relative to "touch" behavior.
     */
    touchObject: {
      startX?: number | undefined;
      startY?: number | undefined;
      curX?: number | undefined;
      curY?: number | undefined;
      swipeLength?: number | undefined;
      edgeHit?: boolean | undefined;
      minSwipe?: number | undefined;
      fingerCount?: number | undefined;
      verticalSwiping?: boolean | undefined;
    };

    /**
     * Default: false
     */
    transformsEnabled: boolean;

    /**
     * Default: false
     */
    unslicked: boolean;
  };

  /**
   * Default: null
   */
  activeBreakpoint: number | null;

  /**
   * Default: null
   */
  animType:
    | "OTransform"
    | "MozTransform"
    | "webkitTransform"
    | "msTransform"
    | "transform"
    | false
    | null;

  /**
   * Default: null
   */
  animProp: null;

  /**
   * Default: []
   */
  breakpoints: number[];

  /**
   * Default: {}
   */
  breakpointSettings: { [breakpoint: number]: SlickInstanceOptions };

  /**
   * Default: false
   */
  cssTransitions: boolean;

  /**
   * Default: false
   */
  focussed: boolean;

  /**
   * Default: false
   */
  interrupted: boolean;

  /**
   * Default: 'hidden'
   */
  hidden: "mozHidden" | "webkitHidden" | "hidden";

  /**
   * Default: true
   */
  paused: boolean;

  /**
   * Default: null
   */
  positionProp: "top" | "left" | null;

  /**
   * Default: null
   */
  respondTo: "window" | "slider" | "min" | null;

  /**
   * Default: 1
   */
  rowCount: number;

  /**
   * Default: true
   */
  shouldClick: boolean;

  /**
   * Default: $(element)
   */
  $slider: JQuery;

  /**
   * Default: null
   */
  $slidesCache: JQuery | null;

  /**
   * Default: null
   */
  transformType:
    | "-o-transform"
    | "-moz-transform"
    | "-webkit-transform"
    | "-ms-transform"
    | "transition"
    | null;

  /**
   * Default: null
   */
  transitionType:
    | "OTransition"
    | "MozTransition"
    | "webkitTransition"
    | "msTransition"
    | "transition"
    | null;

  /**
   * Default: 'visibilitychange'
   */
  visibilityChange:
    | "visibilitychange"
    | "mozvisibilitychange"
    | "webkitvisibilitychange";

  /**
   * Default: 0
   */
  windowWidth: number;

  /**
   * Default: null
   */
  windowTimer: number | null;
}
