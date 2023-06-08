/// <reference types="jquery" />
declare enum ListSlickEvents {
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
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
type SlickInstanceOptions = DeepPartial<{
  accessibility: boolean;
  adaptiveHeight: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
  arrows: boolean;
  asNavFor: string | null;
  appendArrows: JQuery<HTMLElement> | JQuery.Selector | JQuery.htmlString;
  appendDots: JQuery<HTMLElement> | JQuery.Selector | JQuery.htmlString;
  prevArrow: JQuery<HTMLElement> | JQuery.Selector;
  nextArrow: JQuery<HTMLElement> | JQuery.Selector;
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
interface SlickBreakpoint {
  breakpoint: number;
  settings: SlickInstanceOptions | "unslick";
}
type SlickDirection = "left" | "right" | "up" | "down" | "vertical";
interface SlickEvents {
  (
    event: ListSlickEvents.SLICK_EVENTS_INIT,
    cb: (event: JQuery.Event, slickInstance: SlickInstance) => SlickInstance
  ): void;
  (
    event: ListSlickEvents.SLICK_EVENTS_REINIT,
    cb: (event: JQuery.Event, slickInstance: SlickInstance) => SlickInstance
  ): void;
  (
    event: ListSlickEvents.SLICK_EVENTS_DESTROY,
    cb: (event: JQuery.Event, slickInstance: SlickInstance) => SlickInstance
  ): void;
  (
    event: ListSlickEvents.SLICK_EVENTS_SET_POSITION,
    cb: (event: JQuery.Event, slickInstance: SlickInstance) => SlickInstance
  ): void;
  (
    event: ListSlickEvents.SLICK_EVENTS_AFTER_CHANGE,
    cb: (event: JQuery.Event, slickInstance: SlickInstance) => SlickInstance
  ): void;
  (
    event: ListSlickEvents.SLICK_EVENTS_BEFORE_CHANGE,
    cb: (
      event: JQuery.Event,
      slickInstance: SlickInstance,
      currentSlide: number,
      nextSlide: number
    ) => SlickInstance
  ): void;
  (
    event: ListSlickEvents.SLICK_EVENTS_BREAKPOINT,
    cb: (
      event: JQuery.Event,
      slickInstance: SlickInstance,
      breakpoint: SlickBreakpoint
    ) => SlickInstance
  ): void;
  (
    event: ListSlickEvents.SLICK_EVENTS_EDGE,
    cb: (
      event: JQuery.Event,
      slickInstance: SlickInstance,
      direction: SlickDirection
    ) => SlickInstance
  ): void;
  (
    event: ListSlickEvents.SLICK_EVENTS_SWIPE,
    cb: (
      event: JQuery.Event,
      slickInstance: SlickInstance,
      direction: SlickDirection
    ) => SlickInstance
  ): void;
  (
    event: ListSlickEvents.SLICK_EVENTS_LAZY_LOADED,
    cb: (
      event: JQuery.Event,
      slickInstance: SlickInstance,
      image: JQuery<HTMLImageElement>,
      imageSource: string
    ) => SlickInstance
  ): void;
  (
    event: ListSlickEvents.SLICK_EVENTS_LAZY_LOAD_ERROR,
    cb: (
      event: JQuery.Event,
      slickInstance: SlickInstance,
      image: JQuery<HTMLImageElement>,
      imageSource: string
    ) => SlickInstance
  ): void;
}
interface SlickInstanceInitials {
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
}
interface SlickInstance {
  on: SlickEvents;
  readonly options: SlickInstanceOptions;
  readonly defaults: SlickInstanceOptions;
  readonly originalSettings: SlickInstanceOptions;
  readonly initials: SlickInstanceInitials;
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
  breakpointSettings: {
    [breakpoint: number]: SlickInstanceOptions;
  };
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
declare const _default: __VLS_WithTemplateSlots<
  import("vue").DefineComponent<
    {
      readonly accessibility: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
      };
      readonly adaptiveHeight: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
      };
      readonly autoplay: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
      };
      readonly autoplaySpeed: {
        readonly type: import("vue").PropType<number>;
        readonly default: 3000;
      };
      readonly arrows: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
      };
      readonly asNavFor: {
        readonly type: import("vue").PropType<
          string | Element | JQuery<HTMLElement>
        >;
        readonly default: null;
      };
      readonly prevArrow: {
        readonly type: import("vue").PropType<
          string | Element | JQuery<HTMLElement>
        >;
        readonly default: '<button type="button" class="slick-prev">Previous</button>';
      };
      readonly nextArrow: {
        readonly type: import("vue").PropType<
          string | Element | JQuery<HTMLElement>
        >;
        readonly default: '<button type="button" class="slick-next">Next</button>';
      };
      readonly centerMode: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
      };
      readonly centerPadding: {
        readonly type: import("vue").PropType<string>;
        readonly default: "50px";
        readonly validator: (val: string) => boolean;
      };
      readonly cssEase: {
        readonly type: import("vue").PropType<string>;
        readonly default: "ease";
      };
      readonly customPaging: {
        readonly type: import("vue").PropType<
          (slider: any, i: number) => string
        >;
        readonly default: () => undefined;
      };
      readonly dots: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
      };
      readonly dotsClass: {
        readonly type: import("vue").PropType<string>;
        readonly default: "slick-dots";
      };
      readonly draggable: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
      };
      readonly fade: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
      };
      readonly focusOnSelect: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
      };
      readonly easing: {
        readonly type: import("vue").PropType<string>;
        readonly default: "linear";
      };
      readonly edgeFriction: {
        readonly type: import("vue").PropType<number>;
        readonly default: 0.15;
      };
      readonly infinite: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
      };
      readonly initialSlide: {
        readonly type: import("vue").PropType<number>;
        readonly default: 0;
      };
      readonly lazyLoad: {
        readonly type: import("vue").PropType<string>;
        readonly default: "ondemand";
        readonly validator: (val: string) => boolean;
      };
      readonly mobileFirst: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
      };
      readonly pauseOnFocus: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
      };
      readonly pauseOnHover: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
      };
      readonly pauseOnDotsHover: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
      };
      readonly respondTo: {
        readonly type: import("vue").PropType<string>;
        readonly default: "window";
        readonly validator: (val: string) => boolean;
      };
      readonly responsive: {
        readonly type: import("vue").PropType<object>;
        readonly default: null;
      };
      readonly rows: {
        readonly type: import("vue").PropType<number>;
        readonly default: 1;
      };
      readonly slide: {
        readonly type: import("vue").PropType<string | JQuery<HTMLElement>>;
        readonly default: "";
      };
      readonly slidesPerRow: {
        readonly type: import("vue").PropType<number>;
        readonly default: 1;
      };
      readonly slidesToShow: {
        readonly type: import("vue").PropType<number>;
        readonly default: 1;
      };
      readonly slidesToScroll: {
        readonly type: import("vue").PropType<number>;
        /**
         * The number of slides.
         * Default: null
         */
        readonly default: 1;
      };
      readonly speed: {
        /**
         * The slide's width in pixels.
         * Default: null
         */
        readonly type: import("vue").PropType<number>;
        readonly default: 300;
      };
      readonly swipe: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
      };
      readonly swipeToSlide: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
      };
      readonly touchMove: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true
        /**
         * Default: null
         */;
      };
      readonly touchThreshold: {
        readonly type: import("vue").PropType<number>;
        readonly default: 5;
      };
      readonly useCSS: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
      };
      readonly useTransform: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
      };
      readonly variableWidth: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
      };
      readonly vertical: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
      };
      readonly verticalSwiping: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
      };
      readonly rtl: {
        /**
         * Default: null
         */
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
      };
      readonly waitForAnimate: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
      };
      readonly zIndex: {
        readonly type: import("vue").PropType<number>;
        readonly default: 1000;
      };
    },
    {},
    unknown,
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {
      setPosition: (
        cb: (event: JQuery.Event, slickInstance: SlickInstance) => SlickInstance
      ) => void;
      afterChange: (
        cb: (event: JQuery.Event, slickInstance: SlickInstance) => SlickInstance
      ) => void;
      beforeChange: (
        cb: (
          event: JQuery.Event,
          slickInstance: SlickInstance,
          currentSlide: number,
          nextSlide: number
        ) => SlickInstance
      ) => void;
      breakpoint: (
        cb: (
          event: JQuery.Event,
          slickInstance: SlickInstance,
          breakpoint: SlickBreakpoint
        ) => SlickInstance
      ) => void;
      edge: (
        cb: (
          event: JQuery.Event,
          slickInstance: SlickInstance,
          direction: SlickDirection
        ) => SlickInstance
      ) => void;
      swipe: (
        cb: (
          event: JQuery.Event,
          slickInstance: SlickInstance,
          direction: SlickDirection
        ) => SlickInstance
      ) => void;
      lazyLoaded: (
        cb: (
          event: JQuery.Event,
          slickInstance: SlickInstance,
          image: JQuery<HTMLImageElement>,
          imageSource: string
        ) => SlickInstance
      ) => void;
      lazyLoadError: (
        cb: (
          event: JQuery.Event,
          slickInstance: SlickInstance,
          image: JQuery<HTMLImageElement>,
          imageSource: string
        ) => SlickInstance
      ) => void;
    },
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      import("vue").ExtractPropTypes<{
        readonly accessibility: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: true;
        };
        readonly adaptiveHeight: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: false;
        };
        readonly autoplay: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: false;
        };
        readonly autoplaySpeed: {
          readonly type: import("vue").PropType<number>;
          readonly default: 3000;
        };
        readonly arrows: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: true;
        };
        readonly asNavFor: {
          readonly type: import("vue").PropType<
            string | Element | JQuery<HTMLElement>
          >;
          readonly default: null;
        };
        readonly prevArrow: {
          readonly type: import("vue").PropType<
            string | Element | JQuery<HTMLElement>
          >;
          readonly default: '<button type="button" class="slick-prev">Previous</button>';
        };
        readonly nextArrow: {
          readonly type: import("vue").PropType<
            string | Element | JQuery<HTMLElement>
          >;
          readonly default: '<button type="button" class="slick-next">Next</button>';
        };
        readonly centerMode: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: false;
        };
        readonly centerPadding: {
          readonly type: import("vue").PropType<string>;
          readonly default: "50px";
          readonly validator: (val: string) => boolean;
        };
        readonly cssEase: {
          readonly type: import("vue").PropType<string>;
          readonly default: "ease";
        };
        readonly customPaging: {
          readonly type: import("vue").PropType<
            (slider: any, i: number) => string
          >;
          readonly default: () => undefined;
        };
        readonly dots: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: false;
        };
        readonly dotsClass: {
          readonly type: import("vue").PropType<string>;
          readonly default: "slick-dots";
        };
        readonly draggable: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: false;
        };
        readonly fade: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: false;
        };
        readonly focusOnSelect: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: false;
        };
        readonly easing: {
          readonly type: import("vue").PropType<string>;
          readonly default: "linear";
        };
        readonly edgeFriction: {
          readonly type: import("vue").PropType<number>;
          readonly default: 0.15;
        };
        readonly infinite: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: true;
        };
        readonly initialSlide: {
          readonly type: import("vue").PropType<number>;
          readonly default: 0;
        };
        readonly lazyLoad: {
          readonly type: import("vue").PropType<string>;
          readonly default: "ondemand";
          readonly validator: (val: string) => boolean;
        };
        readonly mobileFirst: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: false;
        };
        readonly pauseOnFocus: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: true;
        };
        readonly pauseOnHover: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: false;
        };
        readonly pauseOnDotsHover: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: false;
        };
        readonly respondTo: {
          readonly type: import("vue").PropType<string>;
          readonly default: "window";
          readonly validator: (val: string) => boolean;
        };
        readonly responsive: {
          readonly type: import("vue").PropType<object>;
          readonly default: null;
        };
        readonly rows: {
          readonly type: import("vue").PropType<number>;
          readonly default: 1;
        };
        readonly slide: {
          readonly type: import("vue").PropType<string | JQuery<HTMLElement>>;
          readonly default: "";
        };
        readonly slidesPerRow: {
          readonly type: import("vue").PropType<number>;
          readonly default: 1;
        };
        readonly slidesToShow: {
          readonly type: import("vue").PropType<number>;
          readonly default: 1;
        };
        readonly slidesToScroll: {
          readonly type: import("vue").PropType<number>;
          /**
           * The number of slides.
           * Default: null
           */
          readonly default: 1;
        };
        readonly speed: {
          /**
           * The slide's width in pixels.
           * Default: null
           */
          readonly type: import("vue").PropType<number>;
          readonly default: 300;
        };
        readonly swipe: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: true;
        };
        readonly swipeToSlide: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: false;
        };
        readonly touchMove: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: true
          /**
           * Default: null
           */;
        };
        readonly touchThreshold: {
          readonly type: import("vue").PropType<number>;
          readonly default: 5;
        };
        readonly useCSS: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: true;
        };
        readonly useTransform: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: true;
        };
        readonly variableWidth: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: false;
        };
        readonly vertical: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: false;
        };
        readonly verticalSwiping: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: false;
        };
        readonly rtl: {
          /**
           * Default: null
           */
          readonly type: import("vue").PropType<boolean>;
          readonly default: false;
        };
        readonly waitForAnimate: {
          readonly type: import("vue").PropType<boolean>;
          readonly default: true;
        };
        readonly zIndex: {
          readonly type: import("vue").PropType<number>;
          readonly default: 1000;
        };
      }>
    > & {
      onSetPosition?:
        | ((
            cb: (
              event: JQuery.Event,
              slickInstance: SlickInstance
            ) => SlickInstance
          ) => any)
        | undefined;
      onAfterChange?:
        | ((
            cb: (
              event: JQuery.Event,
              slickInstance: SlickInstance
            ) => SlickInstance
          ) => any)
        | undefined;
      onBeforeChange?:
        | ((
            cb: (
              event: JQuery.Event,
              slickInstance: SlickInstance,
              currentSlide: number,
              nextSlide: number
            ) => SlickInstance
          ) => any)
        | undefined;
      onBreakpoint?:
        | ((
            cb: (
              event: JQuery.Event,
              slickInstance: SlickInstance,
              breakpoint: SlickBreakpoint
            ) => SlickInstance
          ) => any)
        | undefined;
      onEdge?:
        | ((
            cb: (
              event: JQuery.Event,
              slickInstance: SlickInstance,
              direction: SlickDirection
            ) => SlickInstance
          ) => any)
        | undefined;
      onSwipe?:
        | ((
            cb: (
              event: JQuery.Event,
              slickInstance: SlickInstance,
              direction: SlickDirection
            ) => SlickInstance
          ) => any)
        | undefined;
      onLazyLoaded?:
        | ((
            cb: (
              event: JQuery.Event,
              slickInstance: SlickInstance,
              image: JQuery<HTMLImageElement>,
              imageSource: string
            ) => SlickInstance
          ) => any)
        | undefined;
      onLazyLoadError?:
        | ((
            cb: (
              event: JQuery.Event,
              slickInstance: SlickInstance,
              image: JQuery<HTMLImageElement>,
              imageSource: string
            ) => SlickInstance
          ) => any)
        | undefined;
    },
    {
      readonly swipe: boolean;
      readonly vertical: boolean;
      readonly accessibility: boolean;
      readonly adaptiveHeight: boolean;
      readonly autoplay: boolean;
      readonly autoplaySpeed: number;
      readonly arrows: boolean;
      readonly asNavFor: string | Element | JQuery<HTMLElement>;
      readonly prevArrow: string | Element | JQuery<HTMLElement>;
      readonly nextArrow: string | Element | JQuery<HTMLElement>;
      readonly centerMode: boolean;
      readonly centerPadding: string;
      readonly cssEase: string;
      readonly customPaging: (slider: any, i: number) => string;
      readonly dots: boolean;
      readonly dotsClass: string;
      readonly draggable: boolean;
      readonly fade: boolean;
      readonly focusOnSelect: boolean;
      readonly easing: string;
      readonly edgeFriction: number;
      readonly infinite: boolean;
      readonly initialSlide: number;
      readonly lazyLoad: string;
      readonly mobileFirst: boolean;
      readonly pauseOnFocus: boolean;
      readonly pauseOnHover: boolean;
      readonly pauseOnDotsHover: boolean;
      readonly respondTo: string;
      readonly responsive: object;
      readonly rows: number;
      readonly slide: string | JQuery<HTMLElement>;
      readonly slidesPerRow: number;
      readonly slidesToShow: number;
      readonly slidesToScroll: number;
      readonly speed: number;
      readonly swipeToSlide: boolean;
      readonly touchMove: boolean;
      readonly touchThreshold: number;
      readonly useCSS: boolean;
      readonly useTransform: boolean;
      readonly variableWidth: boolean;
      readonly verticalSwiping: boolean;
      readonly rtl: boolean;
      readonly waitForAnimate: boolean;
      readonly zIndex: number;
    },
    {}
  >,
  {
    default?(_: {}): any;
  }
>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
  new (): {
    $slots: S;
  };
};
