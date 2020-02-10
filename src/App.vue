<template>
  <div id="app">
    <header class="app-header">
      <h2 class="header">V-Slide - v1</h2>
    </header>
    <div class="router-container">
      <router-view />
    </div>
    <section class="feature-set">
      <ul class="feature-list">
        <li>
          <i>
            <img src="tick.svg" />
          </i>
          <div class="feature-content">
            <span>Slide Preview</span>
            <p>The Slide preview control allows to quickly peek through all the slides without needing to click through every slide.</p>
          </div>
        </li>
        <li>
          <i>
            <img src="tick.svg" />
          </i>
          <div class="feature-content">
            <span>Auto Play</span>
            <p>The Auto play features lets you loop through the slides and lets you to pause and resume slideshow.</p>
          </div>
        </li>
        <li>
          <i>
            <img src="tick.svg" />
          </i>
          <div class="feature-content">
            <span>Responsive</span>
            <p>Built to be responsive and Fluid, the V-Slide will honor the dimensions of the parent container and render accordingly.</p>
          </div>
        </li>
        <li>
          <i>
            <img src="tick.svg" />
          </i>
          <div class="feature-content">
            <span>Progress Tracker</span>
            <p>Progress Tracker provides a great visual indication on the overall progress of Slideshows.</p>
          </div>
        </li>
        <li>
          <i>
            <img src="tick.svg" />
          </i>
          <div class="feature-content">
            <span>Touch Enabled</span>
            <p>V-Slide comes with support for gestures. Powered by Hammer.JS slides can be navigated by swiping left or right.</p>
          </div>
        </li>
        <li>
          <i>
            <img src="tick.svg" />
          </i>
          <div class="feature-content">
            <span>Powered by Vue</span>
            <p>V-Slide comes is built with Vue and meant to be used as a plugin on any existing Vue projects with ease.</p>
          </div>
        </li>
      </ul>
    </section>

    <div class="social">
      <div class="github">
        <span>
          <GithubIcon></GithubIcon>
        </span>
        <a href="https://github.com/prabhuignoto" target="_blank">Github</a>
      </div>
      <div class="copyrights">
        <span>
          <Heart />
        </span>
        <a href="https://prabhumurthy.netlify.com" target="_blank">prabhumurthy.com</a>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import Heart from "vue-ionicons/dist/ios-heart.vue";

export default Vue.extend({
  components: {
    GithubIcon,
    Heart,
  },
});
</script>

<style lang="scss">
@import "./App.scss";
</style>
