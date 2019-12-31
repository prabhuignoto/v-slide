<template>
  <div class="slide-container">
    <slot>

    </slot>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script lang="ts">
import Vue from "vue";
import nanoid from "nanoid";
import {ISlide} from "../models";

export default Vue.component("v-slide", {
  data() {
    return {

    };
  },
  props: {
    id: String,
  },
});
</script>