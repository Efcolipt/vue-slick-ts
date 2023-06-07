/// <reference types="jquery" />
/// <reference types="jquery" />
import 'slick-carousel/slick/slick.js';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    options?: import("../types/slick.d.ts").DeepPartial<{
        accessibility: boolean;
        adaptiveHeight: boolean;
        autoplay: boolean;
        autoplaySpeed: number;
        arrows: boolean;
        asNavFor: string | null;
        appendArrows: string | JQuery.Node;
        appendDots: string | JQuery.Node;
        prevArrow: string | JQuery.Node;
        nextArrow: string | JQuery.Node;
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
        responsive: import("../types/slick.d.ts").SlickBreakpoint[];
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
    }> | undefined;
}>, {
    options: () => {};
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    setPosition: (cb: import("../types/slick.d.ts").SlickBaseEventCallback<[]>) => void;
    afterChange: (cb: import("../types/slick.d.ts").SlickBaseEventCallback<[]>) => void;
    beforeChange: (cb: import("../types/slick.d.ts").SlickBaseEventCallback<[currentSlide: number, nextSlide: number]>) => void;
    breakpoint: (cb: import("../types/slick.d.ts").SlickBaseEventCallback<[breakpoint: import("../types/slick.d.ts").SlickBreakpoint]>) => void;
    edge: (cb: import("../types/slick.d.ts").SlickBaseEventCallback<[direction: import("../types/slick.d.ts").SlickDirection]>) => void;
    swipe: (cb: import("../types/slick.d.ts").SlickBaseEventCallback<[direction: import("../types/slick.d.ts").SlickDirection]>) => void;
    lazyLoaded: (cb: import("../types/slick.d.ts").SlickBaseEventCallback<[image: JQuery<HTMLImageElement>, imageSource: string]>) => void;
    lazyLoadError: (cb: import("../types/slick.d.ts").SlickBaseEventCallback<[image: JQuery<HTMLImageElement>, imageSource: string]>) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    options?: import("../types/slick.d.ts").DeepPartial<{
        accessibility: boolean;
        adaptiveHeight: boolean;
        autoplay: boolean;
        autoplaySpeed: number;
        arrows: boolean;
        asNavFor: string | null;
        appendArrows: string | JQuery.Node;
        appendDots: string | JQuery.Node;
        prevArrow: string | JQuery.Node;
        nextArrow: string | JQuery.Node;
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
        responsive: import("../types/slick.d.ts").SlickBreakpoint[];
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
    }> | undefined;
}>, {
    options: () => {};
}>>> & {
    onSetPosition?: ((cb: import("../types/slick.d.ts").SlickBaseEventCallback<[]>) => any) | undefined;
    onAfterChange?: ((cb: import("../types/slick.d.ts").SlickBaseEventCallback<[]>) => any) | undefined;
    onBeforeChange?: ((cb: import("../types/slick.d.ts").SlickBaseEventCallback<[currentSlide: number, nextSlide: number]>) => any) | undefined;
    onBreakpoint?: ((cb: import("../types/slick.d.ts").SlickBaseEventCallback<[breakpoint: import("../types/slick.d.ts").SlickBreakpoint]>) => any) | undefined;
    onEdge?: ((cb: import("../types/slick.d.ts").SlickBaseEventCallback<[direction: import("../types/slick.d.ts").SlickDirection]>) => any) | undefined;
    onSwipe?: ((cb: import("../types/slick.d.ts").SlickBaseEventCallback<[direction: import("../types/slick.d.ts").SlickDirection]>) => any) | undefined;
    onLazyLoaded?: ((cb: import("../types/slick.d.ts").SlickBaseEventCallback<[image: JQuery<HTMLImageElement>, imageSource: string]>) => any) | undefined;
    onLazyLoadError?: ((cb: import("../types/slick.d.ts").SlickBaseEventCallback<[image: JQuery<HTMLImageElement>, imageSource: string]>) => any) | undefined;
}, {
    options: import("../types/slick.d.ts").DeepPartial<{
        accessibility: boolean;
        adaptiveHeight: boolean;
        autoplay: boolean;
        autoplaySpeed: number;
        arrows: boolean;
        asNavFor: string | null;
        appendArrows: string | JQuery.Node;
        appendDots: string | JQuery.Node;
        prevArrow: string | JQuery.Node;
        nextArrow: string | JQuery.Node;
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
        responsive: import("../types/slick.d.ts").SlickBreakpoint[];
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
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
