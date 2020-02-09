<template>
  <div class="home">
    <v-slides :isCircular="true" :slideShowSpeed="5000">
      <img :src="'willian-justen.jpg'">
      <img :src="'ricardo-resende.jpg'">
      <img :src="'https://images.unsplash.com/photo-1580133750060-05e667fe0318?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjk5ODU1fQ&auto=format&fit=crop&w=5000&q=80'">
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
    height: 900px;
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
