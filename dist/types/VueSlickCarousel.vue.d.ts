/// <reference types="jquery" />
/// <reference types="jquery" />
import { ExtractPublicPropTypes } from "vue";
import "slick-carousel";
import { carouselProps } from "./carousel";
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
    SLICK_EVENTS_LAZY_LOAD_ERROR = "lazyLoadError"
}
declare enum ListSlickMethods {
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
    SLICK_METHODS_GET_SLICK = "getSlick"
}
type SlickInstanceOptions = ExtractPublicPropTypes<typeof carouselProps>;
interface SlickBreakpoint {
    breakpoint: number;
    settings: SlickInstanceOptions | "unslick";
}
type SlickDirection = "left" | "right" | "up" | "down" | "vertical";
interface SlickMethods {
    (method: ListSlickMethods.SLICK_METHODS_CURRENT_SLIDE): number;
    (method: ListSlickMethods.SLICK_METHODS_NEXT): void;
    (method: ListSlickMethods.SLICK_METHODS_PREV): void;
    (method: ListSlickMethods.SLICK_METHODS_PAUSE): void;
    (method: ListSlickMethods.SLICK_METHODS_PLAY): void;
    (method: ListSlickMethods.SLICK_METHODS_GET_SLICK): SlickInstance;
    (method: ListSlickMethods.SLICK_METHODS_UNSLICK): void;
    (method: ListSlickMethods.SLICK_METHODS_GO_TO, slideNumber: number, dotAnimate: boolean): void;
    (method: ListSlickMethods.SLICK_METHODS_ADD, html: JQuery.Selector, index: number | boolean, addBefore: boolean): void;
    (method: ListSlickMethods.SLICK_METHODS_REMOVE, index: number | boolean, removeBefore: boolean, removeAll: boolean): void;
    (method: ListSlickMethods.SLICK_METHODS_FILTER, filter: JQuery.Selector): void;
    (method: ListSlickMethods.SLICK_METHODS_UNFILTER, index: number): void;
    (method: ListSlickMethods.SLICK_METHODS_GET_OPTION, option: string): void;
    (method: ListSlickMethods.SLICK_METHODS_SET_OPTION, option: string, value: string, refresh: boolean): void;
}
interface SlickEvents {
    (event: ListSlickEvents.SLICK_EVENTS_INIT, cb: (event: JQuery.Event, slickInstance: SlickInstance) => void): SlickInstance;
    (event: ListSlickEvents.SLICK_EVENTS_REINIT, cb: (event: JQuery.Event, slickInstance: SlickInstance) => void): SlickInstance;
    (event: ListSlickEvents.SLICK_EVENTS_DESTROY, cb: (event: JQuery.Event, slickInstance: SlickInstance) => void): SlickInstance;
    (event: ListSlickEvents.SLICK_EVENTS_SET_POSITION, cb: (event: JQuery.Event, slickInstance: SlickInstance) => void): SlickInstance;
    (event: ListSlickEvents.SLICK_EVENTS_AFTER_CHANGE, cb: (event: JQuery.Event, slickInstance: SlickInstance) => void): SlickInstance;
    (event: ListSlickEvents.SLICK_EVENTS_BEFORE_CHANGE, cb: (event: JQuery.Event, slickInstance: SlickInstance, currentSlide: number, nextSlide: number) => void): SlickInstance;
    (event: ListSlickEvents.SLICK_EVENTS_BREAKPOINT, cb: (event: JQuery.Event, slickInstance: SlickInstance, breakpoint: SlickBreakpoint) => void): SlickInstance;
    (event: ListSlickEvents.SLICK_EVENTS_EDGE, cb: (event: JQuery.Event, slickInstance: SlickInstance, direction: SlickDirection) => void): SlickInstance;
    (event: ListSlickEvents.SLICK_EVENTS_SWIPE, cb: (event: JQuery.Event, slickInstance: SlickInstance, direction: SlickDirection) => void): SlickInstance;
    (event: ListSlickEvents.SLICK_EVENTS_LAZY_LOADED, cb: (event: JQuery.Event, slickInstance: SlickInstance, image: JQuery<HTMLImageElement>, imageSource: string) => void): SlickInstance;
    (event: ListSlickEvents.SLICK_EVENTS_LAZY_LOAD_ERROR, cb: (event: JQuery.Event, slickInstance: SlickInstance, image: JQuery<HTMLImageElement>, imageSource: string) => void): SlickInstance;
}
interface SlickInstance extends SlickMethods {
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
    animType: "OTransform" | "MozTransform" | "webkitTransform" | "msTransform" | "transform" | false | null;
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
    transformType: "-o-transform" | "-moz-transform" | "-webkit-transform" | "-ms-transform" | "transition" | null;
    /**
     * Default: null
     */
    transitionType: "OTransition" | "MozTransition" | "webkitTransition" | "msTransition" | "transition" | null;
    /**
     * Default: 'visibilitychange'
     */
    visibilityChange: "visibilitychange" | "mozvisibilitychange" | "webkitvisibilitychange";
    /**
     * Default: 0
     */
    windowWidth: number;
    /**
     * Default: null
     */
    windowTimer: number | null;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
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
        readonly type: import("vue").PropType<string | Element | JQuery<HTMLElement>>;
        readonly default: null;
    };
    readonly prevArrow: {
        readonly type: import("vue").PropType<string | Element | JQuery<HTMLElement>>;
        readonly default: "<button type=\"button\" class=\"slick-prev\">Previous</button>";
    };
    readonly nextArrow: {
        readonly type: import("vue").PropType<string | Element | JQuery<HTMLElement>>;
        readonly default: "<button type=\"button\" class=\"slick-next\">Next</button>";
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
        readonly type: import("vue").PropType<(slider: any, i: number) => string>;
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
        readonly type: import("vue").PropType<boolean>; /**
         * The current direction (`0` for left and down, `1` for right and up).
         * Default: 0
         */
        readonly default: false;
    };
    readonly respondTo: {
        readonly type: import("vue").PropType<string>; /**
         * The index of the current slide.
         * Default: 0
         */
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
        readonly type: import("vue").PropType<number>; /**
         * jQuery instance that contains the "slide track".
         * Default: null
         */
        readonly default: 1;
    };
    readonly speed: {
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
        readonly default: true;
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
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
    }; /**
     * Default: false
     */
    readonly waitForAnimate: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
    };
    readonly zIndex: {
        readonly type: import("vue").PropType<number>;
        /**
         * Default: null
         */
        readonly default: 1000;
    };
}, {
    slickSlickCurrentSlide(): number;
    slickNext(): void;
    slickPrev(): void;
    slickPause(): void;
    slickPlay(): void;
    getSlick(): SlickInstance;
    unslick(): void;
    slickGoTo(slideNumber: number, dotAnimate: boolean): void;
    slickAdd(html: string, index: number | boolean, addBefore: boolean): void;
    slickRemove(index: number | boolean, removeBefore: boolean, removeAll: boolean): void;
    slickFilter(filter: string): void;
    slickUnfilter(index: number): void;
    slickGetOption(option: string): void;
    slickSetOption(option: string, value: string, refresh: boolean): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    init: (event: JQuery.Event, slickInstance: SlickInstance) => void;
    reInit: (event: JQuery.Event, slickInstance: SlickInstance) => void;
    destroy: (event: JQuery.Event, slickInstance: SlickInstance) => void;
    setPosition: (event: JQuery.Event, slickInstance: SlickInstance) => void;
    afterChange: (event: JQuery.Event, slickInstance: SlickInstance) => void;
    beforeChange: (event: JQuery.Event, slickInstance: SlickInstance, currentSlide: number, nextSlide: number) => void;
    breakpoint: (event: JQuery.Event, slickInstance: SlickInstance, breakpoint: SlickBreakpoint) => void;
    edge: (event: JQuery.Event, slickInstance: SlickInstance, direction: SlickDirection) => void;
    swipe: (event: JQuery.Event, slickInstance: SlickInstance, direction: SlickDirection) => void;
    lazyLoaded: (event: JQuery.Event, slickInstance: SlickInstance, image: JQuery<HTMLImageElement>, imageSource: string) => void;
    lazyLoadError: (event: JQuery.Event, slickInstance: SlickInstance, image: JQuery<HTMLImageElement>, imageSource: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        readonly type: import("vue").PropType<string | Element | JQuery<HTMLElement>>;
        readonly default: null;
    };
    readonly prevArrow: {
        readonly type: import("vue").PropType<string | Element | JQuery<HTMLElement>>;
        readonly default: "<button type=\"button\" class=\"slick-prev\">Previous</button>";
    };
    readonly nextArrow: {
        readonly type: import("vue").PropType<string | Element | JQuery<HTMLElement>>;
        readonly default: "<button type=\"button\" class=\"slick-next\">Next</button>";
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
        readonly type: import("vue").PropType<(slider: any, i: number) => string>;
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
        readonly type: import("vue").PropType<boolean>; /**
         * The current direction (`0` for left and down, `1` for right and up).
         * Default: 0
         */
        readonly default: false;
    };
    readonly respondTo: {
        readonly type: import("vue").PropType<string>; /**
         * The index of the current slide.
         * Default: 0
         */
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
        readonly type: import("vue").PropType<number>; /**
         * jQuery instance that contains the "slide track".
         * Default: null
         */
        readonly default: 1;
    };
    readonly speed: {
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
        readonly default: true;
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
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
    }; /**
     * Default: false
     */
    readonly waitForAnimate: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
    };
    readonly zIndex: {
        readonly type: import("vue").PropType<number>;
        /**
         * Default: null
         */
        readonly default: 1000;
    };
}>> & {
    onInit?: ((event: JQuery.Event, slickInstance: SlickInstance) => any) | undefined;
    onReInit?: ((event: JQuery.Event, slickInstance: SlickInstance) => any) | undefined;
    onDestroy?: ((event: JQuery.Event, slickInstance: SlickInstance) => any) | undefined;
    onSetPosition?: ((event: JQuery.Event, slickInstance: SlickInstance) => any) | undefined;
    onAfterChange?: ((event: JQuery.Event, slickInstance: SlickInstance) => any) | undefined;
    onBeforeChange?: ((event: JQuery.Event, slickInstance: SlickInstance, currentSlide: number, nextSlide: number) => any) | undefined;
    onBreakpoint?: ((event: JQuery.Event, slickInstance: SlickInstance, breakpoint: SlickBreakpoint) => any) | undefined;
    onEdge?: ((event: JQuery.Event, slickInstance: SlickInstance, direction: SlickDirection) => any) | undefined;
    onSwipe?: ((event: JQuery.Event, slickInstance: SlickInstance, direction: SlickDirection) => any) | undefined;
    onLazyLoaded?: ((event: JQuery.Event, slickInstance: SlickInstance, image: JQuery<HTMLImageElement>, imageSource: string) => any) | undefined;
    onLazyLoadError?: ((event: JQuery.Event, slickInstance: SlickInstance, image: JQuery<HTMLImageElement>, imageSource: string) => any) | undefined;
}, {
    readonly swipe: boolean;
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
    readonly vertical: boolean;
    readonly verticalSwiping: boolean;
    readonly rtl: boolean;
    readonly waitForAnimate: boolean;
    readonly zIndex: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
