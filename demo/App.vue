<script lang="ts" setup>
import { VueSlickCarousel } from '../dist/vue-slick-ts.es';

const handelBeforeChange = (args) => {
    console.log(args);
}
</script>

<template>
    <div>
        <VueSlickCarousel @beforeChange="handelBeforeChange">
            <div>
                Test 1
            </div>
            <div>
                Test 2
            </div>
        </VueSlickCarousel>
    </div>
</template>