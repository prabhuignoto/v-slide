<template>
  <div class="home">
    <v-slides :isCircular="true" :slideShowSpeed="5000">
      <img :src="'willian-justen.jpg'">
      <img :src="'ricardo-resende.jpg'">
      <img :src="'emre-ozturk.jpg'">
      <img :src="'asoggetti.jpg'">
      <img :src="'aleksey.jpg'">
      <img :src="'tim-mossholder.jpg'">
    </v-slides>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 850px;
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
