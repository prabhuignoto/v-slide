<template>
  <ul class="slider-control-wrapper">
    <li v-for="index in slidesCount" :key="index" v-on:click="handleSelection(index)">
      <span class="slider-control-bubble" :class="{'active': activeSlide + 1 === index}"></span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.slider-control-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

  .slider-control-bubble {
    display: block;
    cursor: pointer;
    width: .75rem;
    height: .75rem;
    border-radius: 50%;
    margin: 1rem;
    background: #d6d6d6;
    transition: transform .2s ease-in-out;

    &.active {
      background: #1e90ff;
      transform: scale(1.25);
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.component("v-slider-control", {
  props: {
    slidesCount: Number,
    activeSlide: Number,
  },
  methods: {
    handleSelection(index: number) {
      this.$emit("selectedSlide", index);
    },
  },
});
</script>