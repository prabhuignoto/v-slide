<template>
  <ul class="slider-control-wrapper">
    <li
      v-for="index in slidesCount"
      :key="index"
      v-on:click="handleSelection(index)"
    >
      <span
        class="slider-control-bubble"
        :class="{ active: activeSlide + 1 === index }"
      ></span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/styles/slider-control";
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.component("v-slider-control", {
  props: {
    slidesCount: Number,
    activeSlide: Number
  },
  methods: {
    handleSelection(index: number) {
      this.$emit("selectedSlide", index);
    }
  }
});
</script>
