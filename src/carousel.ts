import type { PropType } from "vue";

export const carouselProps = {
  /**
   * @description Enables tabbing and arrow key navigation
   * @default true
   */
  accessibility: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  /**
   * @description Enables adaptive height for single slide horizontal carousels.
   * @default false
   */
  adaptiveHeight: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Enables Autoplay
   * @default false
   */
  autoplay: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Autoplay Speed in milliseconds
   * @default 3000
   */
  autoplaySpeed: {
    type: Number as PropType<number>,
    default: 3000,
  },
  /**
   * @description Enable Prev/Next Arrows
   * @default true
   */
  arrows: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  /**
   * @description Set the slider to be the navigation of other slider
   * @default null
   */
  asNavFor: {
    type: [Object, String] as PropType<Element | JQuery | string>,
    default: null,
  },
  // /**
  //  * @description  Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object)
  //  * `false` will prevent arrows from being created/appended
  //  * @default $(element)
  //  */
  // appendArrows: {
  //   type: [Object, Array, String, Boolean] as PropType<
  //     Element | Element[] | JQuery | string | boolean
  //   >,
  //   default: null,
  // },
  // /**
  //  * @description Change where the navigation dots are attached (Selector, htmlString, Array, Element, jQuery object)
  //  * @default $(element)
  //  */
  // appendDots: {
  //   type: [String] as PropType<Element | Element[] | JQuery | string>,
  //   default: "null",
  // },
  /**
   * @description Allows you to select a node or customize the HTML for the "Previous" arrow.
   * @default '<button type="button" class="slick-prev">Previous</button>
   */
  prevArrow: {
    type: [Object, String] as PropType<Element | JQuery | string>,
    default: '<button type="button" class="slick-prev">Previous</button>',
  },
  /**
   * @description Allows you to select a node or customize the HTML for the "Next" arrow.
   * @default '<button type="button" class="slick-next">Next</button>'
   */
  nextArrow: {
    type: [Object, String] as PropType<Element | JQuery | string>,
    default: '<button type="button" class="slick-next">Next</button>',
  },
  /**
   * @description Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
   * @default false
   */
  centerMode: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Side padding when in center mode (px or %)
   * @default '50px'
   */
  centerPadding: {
    type: String as PropType<string>,
    default: "50px",
    validator(val: string) {
      return /px|%/.test(val);
    },
  },
  /**
   * @description CSS3 Animation Easing
   * @default 'ease'
   */
  cssEase: {
    type: String as PropType<string>,
    default: "ease",
  },
  /**
   * @description Custom paging templates. See source for use example.
   * @default n/a
   */
  customPaging: {
    type: Function as PropType<(slider: any, i: number) => string>,
    default: () => void 0,
  },
  /**
   * @description Show dot indicators
   * @default false
   */
  dots: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Class for slide indicator dots container
   * @default 'slick-dots'
   */
  dotsClass: {
    type: String as PropType<string>,
    default: "slick-dots",
  },
  /**
   * @description Enable mouse dragging
   * @default false
   */
  draggable: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Enable fade
   * @default false
   */
  fade: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Enable focus on selected element (click)
   * @default false
   */
  focusOnSelect: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Add easing for jQuery animate. Use with easing libraries or default easing methods
   * @default 'linear'
   */
  easing: {
    type: String as PropType<string>,
    default: "linear",
  },
  /**
   * @description Resistance when swiping edges of non-infinite carousels
   * @default 0.15
   */
  edgeFriction: {
    type: Number as PropType<number>,
    default: 0.15,
  },
  /**
   * @description Infinite loop sliding
   * @default true
   */
  infinite: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  /**
   * @description Slide to start on
   * @default 0
   */
  initialSlide: {
    type: Number as PropType<number>,
    default: 0,
  },
  /**
   * @description Set lazy loading technique. Accepts 'ondemand' or 'progressive'
   * @default 'ondemand'
   */
  lazyLoad: {
    type: String as PropType<string>,
    default: "ondemand",
    validator(val: string) {
      return ["ondemand", "progressive"].includes(val);
    },
  },
  /**
   * @description Responsive settings use mobile first calculation
   * @default false
   */
  mobileFirst: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Pause Autoplay On Focus
   * @default true
   */
  pauseOnFocus: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  /**
   * @description Pause Autoplay On Hover
   * @default false
   */
  pauseOnHover: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Pause Autoplay when a dot is hovered
   * @default false
   */
  pauseOnDotsHover: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Width that responsive object responds to. Can be 'window', 'slider' or 'min' (the smaller of the two)
   * @default 'window'
   */
  respondTo: {
    type: String as PropType<string>,
    default: "window",
    validator(val: string) {
      return ["window", "slider", "min"].includes(val);
    },
  },
  /**
   * @description Object containing breakpoints and settings objects (see demo). Enables settings sets at given screen width. Set settings to "unslick" instead of an object to disable slick at a given breakpoint.
   * @default null
   */
  responsive: {
    type: [Object] as PropType<object>,
    default: null,
  },
  /**
   * @description Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row.
   * @default 1
   */
  rows: {
    type: Number as PropType<number>,
    default: 1,
  },
  /**
   * @description Element query to use as slide
   * @default ''
   */
  slide: {
    type: [String, Object] as PropType<JQuery<HTMLElement> | string>,
    default: "",
  },
  /**
   * @description With grid mode intialized via the rows option, this sets how many slides are in each grid row. dver
   * @default 1
   */
  slidesPerRow: {
    type: Number as PropType<number>,
    default: 1,
  },
  /**
   * @description # of slides to show
   * @default 1
   */
  slidesToShow: {
    type: Number as PropType<number>,
    default: 1,
  },
  /**
   * @description # of slides to scroll
   * @default 1
   */
  slidesToScroll: {
    type: Number as PropType<number>,
    default: 1,
  },
  /**
   * @description Slide/Fade animation speed
   * @default 300
   */
  speed: {
    type: Number as PropType<number>,
    default: 300,
  },
  /**
   * @description Enable swiping
   * @default true
   */
  swipe: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  /**
   * @description Allow users to drag or swipe directly to a slide irrespective of slidesToScroll
   * @default false
   */
  swipeToSlide: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Enable slide motion with touch
   * @default true
   */
  touchMove: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  /**
   * @description To advance slides, the user must swipe a length of (1/touchThreshold) * the width of the slider
   * @default 5
   */
  touchThreshold: {
    type: Number as PropType<number>,
    default: 5,
  },
  /**
   * @description Enable/Disable CSS Transitions
   * @default true
   */
  useCSS: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  /**
   * @description Enable/Disable CSS Transforms
   * @default true
   */
  useTransform: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  /**
   * @description Variable width slides
   * @default false
   */
  variableWidth: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Vertical slide mode
   * @default false
   */
  vertical: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Vertical swipe mode
   * @default false
   */
  verticalSwiping: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Change the slider's direction to become right-to-left
   * @default false
   */
  rtl: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @description Ignores requests to advance the slide while animating
   * @default true
   */
  waitForAnimate: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  /**
   * @description Set the zIndex values for slides, useful for IE9 and lower
   * @default 1000
   */
  zIndex: {
    type: Number as PropType<number>,
    default: 1000,
  },
} as const;
