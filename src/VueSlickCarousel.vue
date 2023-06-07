<template>
  <div class="vue-slick__carousel">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import $ from 'jquery'
import 'slick-carousel/slick/slick.js'

import type {
  SlickInstance,
  SlickEvents,
  SlickInstanceOptions,
} from '../types/slick.d.ts'
import { ListSlickEvents } from '../types/slick.d'

const props = withDefaults(
  defineProps<{
    options?: SlickInstanceOptions
  }>(),
  {
    options: () => ({}),
  }
)

const emits = defineEmits<SlickEvents>()

onMounted(() => {
  const $slick: SlickInstance = $(`.vue-slick__carousel`).slick(props.options)

  Object.keys(ListSlickEvents).forEach((key) => {
    $slick.on(ListSlickEvents[key], (...args) => {
      emits(ListSlickEvents[key], args)
    })
  })
})
</script>
