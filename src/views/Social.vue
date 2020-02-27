<template>
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
</template>

<script lang="ts">
import Vue from "vue";
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import Heart from "vue-ionicons/dist/ios-heart.vue";

export default {
  name: "social",
  components: {
    GithubIcon,
    Heart,
  },
};
</script>

<style lang="scss" scoped>
.social {
  align-items: center;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  margin: 6rem 0 2rem 0;
  width: 100%;

  a {
    color: #000;
    text-decoration: none;
  }

  div {
    align-items: center;
    display: flex;
    justify-content: center;

    span {
      margin-right: 0.5rem;
    }
  }

  .github {
    fill: #0f52ba;
    margin-right: 2rem;
  }

  .copyrights {
    fill: #e31b23;
  }
}
</style>