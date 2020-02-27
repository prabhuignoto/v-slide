<template>
  <div id="app">
    <header class="app-header">
      <h2 class="header">V-Slide - v1</h2>
    </header>
    <div class="router-container">
      <router-view />
    </div>
    <site-features></site-features>
    <section class="code-previews">
      <img src="code-preview-1.svg" alt="code preview" :style="{width: '600px'}">
    </section>
    <social></social>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Social from "./views/Social.vue";
import SiteFeatures from "./views/FeatureSet.vue";

export default Vue.extend({
  components: {
    Social,
    SiteFeatures,
  },
});
</script>

<style lang="scss">
  @import "./App.scss";
</style>
