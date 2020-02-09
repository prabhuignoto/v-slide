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
    </header>
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
    Heart,
  },
});
</script>

<style lang="scss">
.router-container {
  width: 60%;
}
.feature-set {
  margin-bottom: 2rem;
}
.feature-list {
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 0 auto;

  li {
    display: flex;
    align-items: center;
    margin: 0 1.5rem;

    span {
      font-family: "Montserrat", sans-serif;
      font-size: 1.5rem;
    }

    i {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
.app-header {
  margin: 0;
  padding: 1rem 0;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;

  .header {
    white-space: nowrap;
    margin: 1rem 0;
    text-shadow: 1px 1px 1px #464646;
  }
}
.social {
  display: flex;
  font-size: 1.25rem;
  width: 100%;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: #000;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-right: 0.5rem;
    }
  }

  .github {
    margin-right: 2rem;
    fill: #0F52BA;
  }
  .copyrights {
    fill: #e31b23;
  }
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: auto;

  align-items: center;
  justify-content: flex-start;
  min-height: 1600px;

  /* background: #acb6e5; */
  background: #6190e8; /* fallback for old browsers */
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);

  display: flex;
  flex-direction: column;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  padding: 0;
  margin: 0;
}
</style>
