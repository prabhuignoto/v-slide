<template>
  <div id="app">
    <header class="app-header">
      <h2 class="header">V-Slide</h2>
    </header>
    <router-view />
  </div>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss">
.app-header {
  margin: 0;
  padding: 1rem 0;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-size: 1.75rem;

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
