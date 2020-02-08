<template>
  <div class="slide-container" ref="container">
    <div class="loader-wrapper" v-if="!hasLoaded">
      <loader></loader>
    </div>
    <div class="image-slot-container" v-html="htmlContent" v-show="hasLoaded">
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/slide";
</style>

<script lang="ts">
import Vue from "vue";
import nanoid from "nanoid";
import { ISlide } from "../models";
import Loader from "./Loader.vue";

export default Vue.component("v-slide", {
  data() {
    return {
      hasLoaded: false,
    };
  },
  props: {
    id: String,
    previewPaneOpen: Boolean,
    htmlContent: String,
  },
  components: {
    loader: Loader,
  },
  mounted() {
    const container: HTMLElement = this.$refs.container as HTMLElement;
    if (container) {
      const img = container.querySelector("img") as HTMLElement;
      img.onload = () => {
        this.hasLoaded = true;
      };
    }
  },
});
</script>