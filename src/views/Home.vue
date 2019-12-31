<template>
  <div class="home">
    <v-slides>
      <img src="https://images.unsplash.com/photo-1517957754642-2870518e16f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
      <img src="https://images.unsplash.com/photo-1537616930345-1d330ad3e0a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
      <img src="https://images.unsplash.com/photo-1430876988766-1be68caef0e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
      <p>prabhu</p>
      <span>In this way, refs can be used just like the document.querySelector('.element') in JavaScript or the $('.element') in jQuery.
        The $refs can be accessed both inside the Vue.js instance and outside of it. However, they are not data properties, so they are not reactive.</span>
      <img src="https://images.unsplash.com/photo-1517957754642-2870518e16f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
      <img src="https://images.unsplash.com/photo-1537616930345-1d330ad3e0a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
      <img src="https://images.unsplash.com/photo-1430876988766-1be68caef0e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
    </v-slides>
  </div>
</template>

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
