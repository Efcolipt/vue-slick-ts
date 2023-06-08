<script lang="ts" setup>
import { VueSlickCarousel } from '../dist/vue-slick-ts.es';
import '../../dist/css/slick.css'

const handelBeforeChange = (args: SlickEvents) => {
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