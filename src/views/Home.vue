<template>
  <div class="home">
    <v-slides>
      <img src="https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg">
      <img src="https://cdn.pixabay.com/photo/2017/09/27/12/55/tiger-2791980_960_720.jpg">
      <img src="https://cdn.pixabay.com/photo/2017/05/17/12/42/tiger-2320819_960_720.jpg">
      <img src="https://cdn.pixabay.com/photo/2016/11/29/10/07/animal-1868911_960_720.jpg">
      <img src="https://cdn.pixabay.com/photo/2017/01/11/19/50/tiger-1972731_960_720.jpg">
      <img src="https://cdn.pixabay.com/photo/2019/12/15/16/46/tiger-4697538_960_720.jpg">
    </v-slides>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    width: 1200px;
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
