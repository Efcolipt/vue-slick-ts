<template>
  <div :class="['vue-slick__carousel']">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
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

const initEvents = ($slick: SlickInstance) => {
  Object.keys(ListSlickEvents).forEach((key) => {
    $slick.on(ListSlickEvents[key], (...args) => {
      emits(ListSlickEvents[key], args)
    })
  })
}

const id = ref('vue-slick__carousel')

onMounted(() => {
  const $slick: SlickInstance = $(`.${id.value}`).slick(props.options)

  initEvents($slick)
})
</script>
