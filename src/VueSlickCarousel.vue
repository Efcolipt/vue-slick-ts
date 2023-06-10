<template>
  <div class="vue-slick__carousel">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import $ from "jquery";
import { onMounted, ref } from "vue";
import "slick-carousel";
import { carouselProps } from "./carousel.props";
import { ListSlickEvents, SlickInstance, SlickBreakpoint, SlickDirection, ListSlickMethods } from './carousel.types'

const props = defineProps(carouselProps);
const emits = defineEmits<{
  (
    emit: ListSlickEvents.SLICK_EVENTS_INIT,
    event: JQuery.Event,
    slickInstance: SlickInstance
  ): void;
  (
    emit: ListSlickEvents.SLICK_EVENTS_REINIT,
    event: JQuery.Event,
    slickInstance: SlickInstance
  ): void;
  (
    emit: ListSlickEvents.SLICK_EVENTS_DESTROY,
    event: JQuery.Event,
    slickInstance: SlickInstance
  ): void;
  (
    emit: ListSlickEvents.SLICK_EVENTS_SET_POSITION,
    event: JQuery.Event,
    slickInstance: SlickInstance
  ): void;

  (
    emit: ListSlickEvents.SLICK_EVENTS_AFTER_CHANGE,
    event: JQuery.Event,
    slickInstance: SlickInstance
  ): void;
  (
    emit: ListSlickEvents.SLICK_EVENTS_BEFORE_CHANGE,
    event: JQuery.Event,
    slickInstance: SlickInstance,
    currentSlide: number,
    nextSlide: number
  ): void;

  (
    emit: ListSlickEvents.SLICK_EVENTS_BREAKPOINT,
    event: JQuery.Event,
    slickInstance: SlickInstance,
    breakpoint: SlickBreakpoint
  ): void;
  (
    emit: ListSlickEvents.SLICK_EVENTS_EDGE,
    event: JQuery.Event,
    slickInstance: SlickInstance,
    direction: SlickDirection
  ): void;
  (
    emit: ListSlickEvents.SLICK_EVENTS_SWIPE,
    event: JQuery.Event,
    slickInstance: SlickInstance,
    direction: SlickDirection
  ): void;

  (
    emit: ListSlickEvents.SLICK_EVENTS_LAZY_LOADED,
    event: JQuery.Event,
    slickInstance: SlickInstance,
    image: JQuery<HTMLImageElement>,
    imageSource: string
  ): void;

  (
    emit: ListSlickEvents.SLICK_EVENTS_LAZY_LOAD_ERROR,
    event: JQuery.Event,
    slickInstance: SlickInstance,
    image: JQuery<HTMLImageElement>,
    imageSource: string
  ): void;
}>();

const $slick = ref<SlickInstance | null>(null);

defineExpose({
  [ListSlickMethods.SLICK_METHODS_CURRENT_SLIDE]() {
    return ($slick.value as SlickInstance)(
      ListSlickMethods.SLICK_METHODS_CURRENT_SLIDE
    );
  },

  [ListSlickMethods.SLICK_METHODS_NEXT]() {
    ($slick.value as SlickInstance)(ListSlickMethods.SLICK_METHODS_NEXT);
  },

  [ListSlickMethods.SLICK_METHODS_PREV]() {
    ($slick.value as SlickInstance)(ListSlickMethods.SLICK_METHODS_PREV);
  },

  [ListSlickMethods.SLICK_METHODS_PAUSE]() {
    ($slick.value as SlickInstance)(ListSlickMethods.SLICK_METHODS_PAUSE);
  },

  [ListSlickMethods.SLICK_METHODS_PLAY]() {
    ($slick.value as SlickInstance)(ListSlickMethods.SLICK_METHODS_PLAY);
  },

  [ListSlickMethods.SLICK_METHODS_GET_SLICK]() {
    return ($slick.value as SlickInstance)(
      ListSlickMethods.SLICK_METHODS_GET_SLICK
    );
  },

  [ListSlickMethods.SLICK_METHODS_UNSLICK](fromBreakpoint: number) {
    ($slick.value as SlickInstance)(
      ListSlickMethods.SLICK_METHODS_UNSLICK,
      fromBreakpoint
    );
  },

  [ListSlickMethods.SLICK_METHODS_GO_TO](
    slideNumber: number,
    dontAnimate: boolean
  ) {
    ($slick.value as SlickInstance)(
      ListSlickMethods.SLICK_METHODS_GO_TO,
      slideNumber,
      dontAnimate
    );
  },

  [ListSlickMethods.SLICK_METHODS_ADD](
    html: JQuery.Selector,
    index: number | boolean,
    addBefore: boolean
  ) {
    ($slick.value as SlickInstance)(
      ListSlickMethods.SLICK_METHODS_ADD,
      html,
      index,
      addBefore
    );
  },

  [ListSlickMethods.SLICK_METHODS_REMOVE](
    index: number | boolean,
    removeBefore: boolean,
    removeAll: boolean
  ) {
    ($slick.value as SlickInstance)(
      ListSlickMethods.SLICK_METHODS_REMOVE,
      index,
      removeBefore,
      removeAll
    );
  },

  [ListSlickMethods.SLICK_METHODS_FILTER](filter: JQuery.Selector) {
    ($slick.value as SlickInstance)(
      ListSlickMethods.SLICK_METHODS_FILTER,
      filter
    );
  },

  [ListSlickMethods.SLICK_METHODS_UNFILTER](index: number) {
    ($slick.value as SlickInstance)(
      ListSlickMethods.SLICK_METHODS_UNFILTER,
      index
    );
  },

  [ListSlickMethods.SLICK_METHODS_GET_OPTION](option: string) {
    return ($slick.value as SlickInstance)(
      ListSlickMethods.SLICK_METHODS_GET_OPTION,
      option
    );
  },

  [ListSlickMethods.SLICK_METHODS_SET_OPTION](
    option: string,
    value: string,
    refresh: boolean
  ) {
    ($slick.value as SlickInstance)(
      ListSlickMethods.SLICK_METHODS_SET_OPTION,
      option,
      value,
      refresh
    );
  },
});

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  $slick.value = $(`.vue-slick__carousel`).slick(props);

  for (const key in ListSlickEvents) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const event = ListSlickEvents[key];

    ($slick.value as SlickInstance).on(event, (...args) => {
      emits(event, ...args);
    });
  }
});
</script>
