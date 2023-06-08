/// <reference types="jquery" />
import type { PropType } from "vue";
export declare const carouselProps: {
  /**
   * @description Enables tabbing and arrow key navigation
   * @default true
   */
  readonly accessibility: {
    readonly type: PropType<boolean>;
    readonly default: true;
  };
  /**
   * @description Enables adaptive height for single slide horizontal carousels.
   * @default false
   */
  readonly adaptiveHeight: {
    readonly type: PropType<boolean>;
    readonly default: false;
  };
  /**
   * @description Enables Autoplay
   * @default false
   */
  readonly autoplay: {
    readonly type: PropType<boolean>;
    readonly default: false;
  };
  /**
   * @description Autoplay Speed in milliseconds
   * @default 3000
   */
  readonly autoplaySpeed: {
    readonly type: PropType<number>;
    readonly default: 3000;
  };
  /**
   * @description Enable Prev/Next Arrows
   * @default true
   */
  readonly arrows: {
    readonly type: PropType<boolean>;
    readonly default: true;
  };
  /**
   * @description Set the slider to be the navigation of other slider (Class or ID Name)
   * @default null
   */
  readonly asNavFor: {
    readonly type: PropType<string | null>;
    readonly default: null;
  };
  /**
   * @description Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
   * @default false
   */
  readonly centerMode: {
    readonly type: PropType<boolean>;
    readonly default: false;
  };
  /**
   * @description Side padding when in center mode (px or %)
   * @default '50px'
   */
  readonly centerPadding: {
    readonly type: PropType<string>;
    readonly default: "50px";
    readonly validator: (val: string) => boolean;
  };
  /**
   * @description CSS3 Animation Easing
   * @default 'ease'
   */
  readonly cssEase: {
    readonly type: PropType<string>;
    readonly default: "ease";
  };
  /**
   * @description Custom paging templates. See source for use example.
   * @default () => void 0
   */
  readonly customPaging: {
    readonly type: PropType<() => void>;
    readonly default: () => undefined;
  };
  /**
   * @description Show dot indicators
   * @default false
   */
  readonly dots: {
    readonly type: PropType<boolean>;
    readonly default: false;
  };
  /**
   * @description Class for slide indicator dots container
   * @default 'slick-dots'
   */
  readonly dotsClass: {
    readonly type: PropType<string>;
    readonly default: "slick-dots";
  };
  /**
   * @description Enable mouse dragging
   * @default false
   */
  readonly draggable: {
    readonly type: PropType<boolean>;
    readonly default: false;
  };
  /**
   * @description Enable fade
   * @default false
   */
  readonly fade: {
    readonly type: PropType<boolean>;
    readonly default: false;
  };
  /**
   * @description Enable focus on selected element (click)
   * @default false
   */
  readonly focusOnSelect: {
    readonly type: PropType<boolean>;
    readonly default: false;
  };
  /**
   * @description Add easing for jQuery animate. Use with easing libraries or default easing methods
   * @default 'linear'
   */
  readonly easing: {
    readonly type: PropType<string>;
    readonly default: "linear";
  };
  /**
   * @description Resistance when swiping edges of non-infinite carousels
   * @default 0.15
   */
  readonly edgeFriction: {
    readonly type: PropType<number>;
    readonly default: 0.15;
  };
  /**
   * @description Infinite loop sliding
   * @default true
   */
  readonly infinite: {
    readonly type: PropType<boolean>;
    readonly default: true;
  };
  /**
   * @description Slide to start on
   * @default 0
   */
  readonly initialSlide: {
    readonly type: PropType<number>;
    readonly default: 0;
  };
  /**
   * @description Set lazy loading technique. Accepts 'ondemand' or 'progressive'
   * @default 'ondemand'
   */
  readonly lazyLoad: {
    readonly type: PropType<string>;
    readonly default: "ondemand";
    readonly validator: (val: string) => boolean;
  };
  /**
   * @description Responsive settings use mobile first calculation
   * @default false
   */
  readonly mobileFirst: {
    readonly type: PropType<boolean>;
    readonly default: false;
  };
  /**
   * @description Pause Autoplay On Focus
   * @default true
   */
  readonly pauseOnFocus: {
    readonly type: PropType<boolean>;
    readonly default: true;
  };
  /**
   * @description Pause Autoplay On Hover
   * @default false
   */
  readonly pauseOnHover: {
    readonly type: PropType<boolean>;
    readonly default: false;
  };
  /**
   * @description Pause Autoplay when a dot is hovered
   * @default false
   */
  readonly pauseOnDotsHover: {
    readonly type: PropType<boolean>;
    readonly default: false;
  };
  /**
   * @description Width that responsive object responds to. Can be 'window', 'slider' or 'min' (the smaller of the two)
   * @default 'window'
   */
  readonly respondTo: {
    readonly type: PropType<string>;
    readonly default: "window";
    readonly validator: (val: string) => boolean;
  };
  /**
   * @description Object containing breakpoints and settings objects (see demo). Enables settings sets at given screen width. Set settings to "unslick" instead of an object to disable slick at a given breakpoint.
   * @default null
   */
  readonly responsive: {
    readonly type: PropType<object>;
    readonly default: null;
  };
  /**
   * @description Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row.
   * @default 1
   */
  readonly rows: {
    readonly type: PropType<number>;
    readonly default: 1;
  };
  /**
   * @description Element query to use as slide
   * @default ''
   */
  readonly slide: {
    readonly type: PropType<string | JQuery<HTMLElement>>;
    readonly default: "";
  };
  /**
   * @description With grid mode intialized via the rows option, this sets how many slides are in each grid row. dver
   * @default 1
   */
  readonly slidesPerRow: {
    readonly type: PropType<number>;
    readonly default: 1;
  };
  /**
   * @description # of slides to show
   * @default 1
   */
  readonly slidesToShow: {
    readonly type: PropType<number>;
    readonly default: 1;
  };
  /**
   * @description # of slides to scroll
   * @default 1
   */
  readonly slidesToScroll: {
    readonly type: PropType<number>;
    readonly default: 1;
  };
  /**
   * @description Slide/Fade animation speed
   * @default 300
   */
  readonly speed: {
    readonly type: PropType<number>;
    readonly default: 300;
  };
  /**
   * @description Enable swiping
   * @default true
   */
  readonly swipe: {
    readonly type: PropType<boolean>;
    readonly default: true;
  };
  /**
   * @description Allow users to drag or swipe directly to a slide irrespective of slidesToScroll
   * @default false
   */
  readonly swipeToSlide: {
    readonly type: PropType<boolean>;
    readonly default: false;
  };
  /**
   * @description Enable slide motion with touch
   * @default true
   */
  readonly touchMove: {
    readonly type: PropType<boolean>;
    readonly default: true;
  };
  /**
   * @description To advance slides, the user must swipe a length of (1/touchThreshold) * the width of the slider
   * @default 5
   */
  readonly touchThreshold: {
    readonly type: PropType<number>;
    readonly default: 5;
  };
  /**
   * @description Enable/Disable CSS Transitions
   * @default true
   */
  readonly useCSS: {
    readonly type: PropType<boolean>;
    readonly default: true;
  };
  /**
   * @description Enable/Disable CSS Transforms
   * @default true
   */
  readonly useTransform: {
    readonly type: PropType<boolean>;
    readonly default: true;
  };
  /**
   * @description Variable width slides
   * @default false
   */
  readonly variableWidth: {
    readonly type: PropType<boolean>;
    readonly default: false;
  };
  /**
   * @description Vertical slide mode
   * @default false
   */
  readonly vertical: {
    readonly type: PropType<boolean>;
    readonly default: false;
  };
  /**
   * @description Vertical swipe mode
   * @default false
   */
  readonly verticalSwiping: {
    readonly type: PropType<boolean>;
    readonly default: false;
  };
  /**
   * @description Change the slider's direction to become right-to-left
   * @default false
   */
  readonly rtl: {
    readonly type: PropType<boolean>;
    readonly default: false;
  };
  /**
   * @description Ignores requests to advance the slide while animating
   * @default true
   */
  readonly waitForAnimate: {
    readonly type: PropType<boolean>;
    readonly default: true;
  };
  /**
   * @description Set the zIndex values for slides, useful for IE9 and lower
   * @default 1000
   */
  readonly zIndex: {
    readonly type: PropType<number>;
    readonly default: 1000;
  };
};
