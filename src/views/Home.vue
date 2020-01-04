<template>
  <div class="home">
    <v-slides :isCircular="true">
      <img src="https://cdn.pixabay.com/photo/2019/12/28/14/00/chrome-hill-4724723_960_720.jpg">
      <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg">
      <img src="https://cdn.pixabay.com/photo/2015/01/28/23/35/landscape-615429_960_720.jpg">
      <img src="https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg">
      <img src="https://cdn.pixabay.com/photo/2017/01/19/23/46/panorama-1993645_960_720.jpg">
      <img src="https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_960_720.jpg">
      <img src="https://cdn.pixabay.com/photo/2013/11/28/10/03/autumn-219972_960_720.jpg">
    </v-slides>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    width: 1200px;
    height: 800px;
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
