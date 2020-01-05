<template>
  <div class="home">
    <v-slides :isCircular="true" :slideShowSpeed="5000">
      <img :src="'redwood-national-park-1587301_1280.jpg'">
      <img :src="'italy-1587287_1280.jpg'">
      <img :src="'dawn-190055_1280.jpg'">
      <img :src="'tree-3822149_1280.jpg'">
      <img :src="'hintersee-3601004_1280.jpg'">
      <img :src="'mountain-landscape-2031539_1280.jpg'">
      <img :src="'mountain-1244132_1280.jpg'">
    </v-slides>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    width: 80rem;
    height: 50rem;
    margin: 0 auto;
  }
</style>

<script lang="ts">
// @ is an alias to /src
import Slides from "@/components/Slides.vue";

import Vue from "vue";

export default {
  name: "home",
  components: {
    Slides,
  },
};
</script>
