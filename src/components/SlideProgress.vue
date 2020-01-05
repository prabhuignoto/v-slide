<template>
  <div class="slide-progress-container">
    <span :style="{width: `${this.progress}`}"></span>
  </div>
</template>
  
<style lang="scss" scoped>
  .slide-progress-container {
    width: 100%;
    background: #fff;
    height: .25rem;

    span {
      background: #1e90ff;
      
      display: block;
      height: 100%;
      transition: width .65s ease-in-out;
    }
  }
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
