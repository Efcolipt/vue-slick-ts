<script setup lang="ts">
import VueSlickCarousel from '../dist/vue-slick.umd'

const handleBeforeChange = (...args: any[]) => {
    console.log(args)
}
</script>

<template>
    <div>
        <VueSlickCarousel @beforeChange="handleBeforeChange">
            <div>Test 1</div>
            <div>Test 2</div>
        </VueSlickCarousel>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
