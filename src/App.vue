<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  /* background: #acb6e5; */
  background: #6190e8; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #a7bfe8,
    #1e90ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #a7bfe8,
    #1e90ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
