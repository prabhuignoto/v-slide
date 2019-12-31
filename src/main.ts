import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Slides from "./components/Slides.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  components: {
    Slides,
  },
}).$mount("#app");
