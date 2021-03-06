<template>
  <div id="app">
    <header class="app-header">
      <h2 class="header">V-Slide - v1</h2>
    </header>
    <div class="router-container">
      <router-view />
    </div>
    <social></social>
    <site-features></site-features>
    <section class="app-demos">
      <h3>Basic Setup</h3>
      <p class="description">
        Wrap your elements with v-slide and you are good to go. v-slide slices
        out the HTML content and make sure they go in separate slides.
      </p>
      <div class="demo">
        <div class="demo-container">
          <div class="code-snippet">
            <v-slides
              :isCircular="false"
              :autoplay="false"
              :preview="false"
              :touchEnabled="false"
            >
              <p>Slide One</p>
              <p>Slide Two</p>
              <p>Slide Three</p>
              <p>Slide Four</p>
              <p>Slide Five</p>
            </v-slides>
          </div>
          <div class="carbon">
            <img src="demo1.svg" />
          </div>
        </div>
      </div>
    </section>
    <section class="app-demos">
      <h3>Auto Play</h3>
      <p class="description">
        V-Slide can be set to run in Autoplay mode by setting the autoplay prop.
      </p>
      <div class="demo">
        <div class="demo-container">
          <div class="code-snippet">
            <v-slides
              :isCircular="true"
              :autoplay="true"
              :preview="false"
              :touchEnabled="false"
            >
              <p>Slide One</p>
              <p>Slide Two</p>
              <p>Slide Three</p>
            </v-slides>
          </div>
          <div class="carbon">
            <img src="demo2.svg" />
          </div>
        </div>
      </div>
    </section>
    <section class="app-demos">
      <h3>Previews</h3>
      <p class="description">
        The previews allow you to quicky take a peek on all the slides. V-Slide
        is smart enough to render mixed contents. for e.g you can mix images and
        plain text content.
      </p>
      <div class="demo">
        <div class="demo-container">
          <div class="code-snippet">
            <v-slides
              :isCircular="true"
              :autoplay="false"
              :preview="true"
              :touchEnabled="false"
            >
              <img
                src="https://images.unsplash.com/photo-1582786241187-7b2cce9a1c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              />
              <p>Slide Two</p>
              <img
                src="https://images.unsplash.com/photo-1532615221816-0852e744fea4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              />
            </v-slides>
          </div>
          <div class="carbon">
            <img src="demo3.svg" />
          </div>
        </div>
      </div>
    </section>
    <section class="app-demos">
      <h3>Touch Enabled</h3>
      <p class="description">
        V-Slide comes with full touch support powered by Hammer
      </p>
      <div class="demo">
        <div class="demo-container">
          <div class="code-snippet">
            <v-slides
              :isCircular="true"
              :autoplay="true"
              :preview="false"
              :touchEnabled="true"
            >
              <p>Slide One</p>
              <p>Slide Two</p>
              <p>Slide Three</p>
            </v-slides>
          </div>
          <div class="carbon">
            <img src="demo4.svg" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Social from "./views/Social.vue";
import SiteFeatures from "./views/FeatureSet.vue";

export default Vue.extend({
  components: {
    Social,
    SiteFeatures
  }
});
</script>

<style lang="scss">
@import "./App.scss";
@import "./common.scss";

.app-demos {
  @include width;
  margin-bottom: 5rem;
}

.description {
  width: 95%;
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  text-align: left;
  margin: 0.5rem 0.5rem 1rem;
  margin-left: 1rem;
  font-size: 1rem;
}

h3 {
  width: 100%;
  text-align: left;
  margin: 0;
  height: 2rem;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  border-radius: 4px;
  font-size: 1.2rem;
  padding-left: 1rem;
  text-shadow: 2px 0px 3px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 2rem;
    justify-content: center;
    font-size: 1.3rem;
  }
}

.demo {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 2rem;
  box-shadow: inset 0 0 6px 3px rgba(0, 0, 0, 0.1);

  .demo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    @media (min-width: 768px) and (max-width: 1024px) {
      flex-direction: column;
      width: 90%;
      margin: 0 auto;
    }

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      width: 90%;
      margin: 0 auto;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
      flex-direction: column;
      width: 90%;
      margin: 0 auto;
    }

    .code-snippet {
      @media (min-width: 768px) and (max-width: 1024px) {
        width: 90%;
        max-width: 100%;
      }
      @media only screen and (max-width: 600px) {
        width: 90%;
        max-width: 100%;
      }
      @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 95%;
        max-width: 100%;
      }

      flex: 1;
      height: 350px;
      max-width: 50%;
    }
    .carbon {
      flex: 1;
      height: 100%;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
</style>
