<template>
  <div id="app">
    <header class="app-header">
      <h2 class="header">V-Slide</h2>
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
      <section class="feature-set">
        <ul class="feature-list">
          <li>
            <i>
              <img src="tick.svg" />
            </i>
            <span>Slide Preview</span>
          </li>
          <li>
            <i>
              <img src="tick.svg" />
            </i>
            <span>Auto Play</span>
          </li>
          <li>
            <i>
              <img src="tick.svg" />
            </i>
            <span>Responsive</span>
          </li>
          <li>
            <i>
              <img src="tick.svg" />
            </i>
            <span>Progress Track</span>
          </li>
          <li>
            <i>
              <img src="tick.svg" />
            </i>
            <span>Touch Enabled</span>
          </li>
        </ul>
      </section>
      
    </header>
    <div class="router-container">
      <router-view />
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
    Heart
  }
});
</script>

<style lang="scss">
@import "./App.scss";
</style>
