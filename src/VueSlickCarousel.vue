<template>
    <div class="vue-slick__carousel">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import $ from "jquery";
import { onMounted } from "vue";
import "slick-carousel/slick/slick.min.js";
import { carouselProps } from "./carousel.props";

enum ListSlickEvents {
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

interface SlickInstance {
    on: SlickEvents;
    readonly options: SlickInstanceOptions;
}

// export enum ListSlickMethods {
//   SLICK_METHODS_CURRENT_SLIDE = "slickSlickCurrentSlide",
//   SLICK_METHODS_GO_TO = "slickGoTo",
//   SLICK_METHODS_NEXT = "slickNext",
//   SLICK_METHODS_PREV = "slickPrev",
//   SLICK_METHODS_PAUSE = "slickPause",
//   SLICK_METHODS_PLAY = "slickPlay",
//   SLICK_METHODS_ADD = "slickAdd",
//   SLICK_METHODS_REMOVE = "slickRemove",
//   SLICK_METHODS_FILTER = "slickFilter",
//   SLICK_METHODS_UNFILTER = "slickUnfilter",
//   SLICK_METHODS_GET_OPTION = "slickGetOption",
//   SLICK_METHODS_SET_OPTION = "slickSetOption",
//   SLICK_METHODS_UNSLICK = "unslick",
//   SLICK_METHODS_GET_SLICK = "getSlick",
// }

// export type SlickBaseMethod<T, R = []> = [event: T, ...rest: R];

// export interface SlickMethods {
//   (
//     ...base: SlickBaseMethod<ListSlickMethods.SLICK_METHODS_CURRENT_SLIDE>
//   ): number;
//   (...base: SlickBaseMethod<ListSlickMethods.SLICK_METHODS_NEXT>): void;
//   (...base: SlickBaseMethod<ListSlickMethods.SLICK_METHODS_PREV>): void;
//   (...base: SlickBaseMethod<ListSlickMethods.SLICK_METHODS_PAUSE>): void;
//   (...base: SlickBaseMethod<ListSlickMethods.SLICK_METHODS_PLAY>): void;
//   (
//     ...base: SlickBaseMethod<ListSlickMethods.SLICK_METHODS_GET_SLICK>
//   ): SlickInstance;
//   (...base: SlickBaseMethod<ListSlickMethods.SLICK_METHODS_UNSLICK>): void;
//   (
//     ...base: SlickBaseMethod<
//       ListSlickMethods.SLICK_METHODS_GO_TO,
//       [slideNumber: number, dotAnimate: boolean]
//     >
//   ): void;
//   (
//     ...base: SlickBaseMethod<
//       ListSlickMethods.SLICK_METHODS_ADD,
//       [html: JQuery.Selector, index: number | boolean, addBefore: boolean]
//     >
//   ): void;
//   (
//     ...base: SlickBaseMethod<
//       ListSlickMethods.SLICK_METHODS_REMOVE,
//       [index: number | boolean, removeBefore: boolean, removeAll: boolean]
//     >
//   ): void;
//   (
//     ...base: SlickBaseMethod<
//       ListSlickMethods.SLICK_METHODS_FILTER,
//       [filter: JQuery.Selector]
//     >
//   ): void;
//   (
//     ...base: SlickBaseMethod<
//       ListSlickMethods.SLICK_METHODS_UNFILTER,
//       [index: number]
//     >
//   ): void;
//   (
//     ...base: SlickBaseMethod<
//       ListSlickMethods.SLICK_METHODS_GET_OPTION,
//       [option: string]
//     >
//   ): void;
//   (
//     ...base: SlickBaseMethod<
//       ListSlickMethods.SLICK_METHODS_SET_OPTION,
//       [option: string, value: string, refresh: boolean]
//     >
//   ): void;
// }

const props = defineProps(carouselProps);
const emits = defineEmits<SlickEvents>();

onMounted(() => {
    const $slick = $(`.vue-slick__carousel`).slick(props)
    Object.keys(ListSlickEvents).forEach((key) => {
        $slick.on(ListSlickEvents[key], (...args) => {
            emits(ListSlickEvents[key], args)
        })
    })
});
</script>
