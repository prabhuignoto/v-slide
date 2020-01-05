<template>
  <div class="slide-container">
    <slot>

    </slot>
  </div>
</template>

<style lang="scss">
  .slide-container {
    width: 100%;
    height: 100%;
    & > * {
      width: 100%;
      height: 100%;
    }

    & > img {
      max-height: 100%;
      max-width: 100%;
      position: relative;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      object-fit: contain;
    }
  }
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