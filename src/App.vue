<template>
  <div id="app">
    <header class="app-header">
      <h2 class="header">V-Slide</h2>
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
          <span>Made with Vue</span>
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

export default Vue.extend({});
</script>

<style lang="scss">
.router-container {
  height: 100%;
  width: 100%;
}
.feature-set {
  margin-bottom: 4rem;
}
.feature-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  width: 60%;
  margin: 0 auto;

  li {
    display: flex;
    align-items: center;

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
  color: #000;
  font-size: 2rem;

  .header {
    margin-bottom: 3rem;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  align-items: center;
  justify-content: center;
  height: 100%;

  /* background: #acb6e5; */
  background: #6190e8; /* fallback for old browsers */
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
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
