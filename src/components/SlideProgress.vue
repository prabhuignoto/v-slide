<template>
  <div class="slide-progress-container">
    <span :style="{width: `${this.progress}`}"></span>
  </div>
</template>
  
<style lang="scss" scoped>
  @import "@/styles/slide-progress";
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.component("v-slide-progress", {
  props: {
    slidesCount: Number,
    activeSlide: Number,
  },
  computed: {
    progress() {
      return `${Math.round((this.activeSlide / this.slidesCount) * 100)}%`;
    },
  },
});
</script>
