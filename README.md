<h1 align="center">Vue/Nuxt slick with Typescript</h1>

<p align="center">
  <a href="https://github.com/efcolipt/vue-slick-ts">
   <img src="https://img.shields.io/npm/v/vue-slick-ts.svg?style=flat-square" alt="">
  </a>
    <a href="https://github.com/efcolipt/vue-slick-ts">
   <img src="https://packagequality.com/shield/vue-slick-ts.svg" alt="">
  </a>
    <a href="https://github.com/efcolipt/vue-slick-ts">
   <img src="https://img.shields.io/npm/dm/vue-slick-ts.svg?style=flat-square" alt="">
  </a>
    <a href="https://github.com/efcolipt/vue-slick-ts">
   <img src="https://img.shields.io/npm/l/vue-slick-ts.svg?style=flat-square" alt="">
  </a>
</p>

## Support

Package support ESM, UMD, CJS <br />
Package can install via NPM/YARN or just add script CDN <br/>

Package support only Vue >=3.2 version<br />
For legacy support see [here](https://www.npmjs.com/package/vue-slick)

## Installation

### Installation by CDN

Just add script to your project to footer in your body tag <br/>

```html
<script src="https://unpkg.com/vue-slick-ts@latest"></script>
```

### Installation by Npm/Yarn

Prerequisite

```sh
npm install -D @types/jquery
# or
yarn add -D @types/jquery
```

```sh
npm install vue-slick-ts
# or
yarn add vue-slick-ts
```

## Example Usage

```vue
<script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { ListSlickMethods, VueSlickCarousel } from "vue-slick-ts";
  import type { SlickInstance } from "vue-slick-ts";
  import "vue-slick-ts/dist/css/slick.css";

  const carousel = ref<SlickInstance | null>(null);

  const handleInit = (e: JQuery.Event, instance: SlickInstance) => {
    console.log(e, instance);
  };

  onMounted(() => {
    carousel.value!(ListSlickMethods.SLICK_METHODS_PLAY);
  });
</script>

<template>
  <VueSlickCarousel ref="carousel" @init="handleInit" :autoplay-speed="4000">
    <div>Test 1</div>
    <div>Test 2</div>
  </VueSlickCarousel>
</template>
```
