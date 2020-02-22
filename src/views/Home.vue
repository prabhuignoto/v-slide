<template>
  <div class="home">
    <v-slides :isCircular="true" :slideShowSpeed="2000">
      <img
        :src="'https://images.unsplash.com/photo-1581094935665-144e76b36c25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc5NjV9&auto=format&fit=crop&w=1950&q=80'"
      />
      <img
        :src="'https://images.unsplash.com/photo-1581105511979-a8840168a1fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'"
      />
      <img
        :src="'https://images.unsplash.com/photo-1581175206076-3ba4ac62a6f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'"
      />
      <img
        :src="'https://images.unsplash.com/photo-1570470767483-286963cb60cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'"
      />
      <img
        :src="'https://images.unsplash.com/photo-1581127372434-b074c9f9a4b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'"
      />
      <img
        :src="'https://images.unsplash.com/photo-1581055926932-df1b377bedde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80'"
      />
      <img
        :src="'https://images.unsplash.com/photo-1580962423295-fc5150ac004f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'"
      />
    </v-slides>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 750px;
  margin: 0 auto;

  @media (min-width: 1281px) {
    height: 580px;
  }

  @media screen and (min-width: 1400px) {
  }

  @media screen and (min-width: 1600px) {
  }

  @media screen and (min-width: 1900px) {
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    height: 600px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 400px;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    height: 500px;
  }
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
