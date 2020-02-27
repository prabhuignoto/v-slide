<template>
  <section class="feature-set">
    <ul class="feature-list">
      <li>
        <i>
          <img src="slideshow.svg" />
        </i>
        <div class="feature-content">
          <span>Slide Preview</span>
          <p>The Slide preview control allows to quickly peek through all the slides without needing to click through every slide.</p>
        </div>
      </li>
      <li>
        <i>
          <img src="play.svg" />
        </i>
        <div class="feature-content">
          <span>Auto Play</span>
          <p>The Auto play features lets you loop through the slides and lets you pause and resume slideshow's.</p>
        </div>
      </li>
      <li>
        <i>
          <img src="responsive.svg" />
        </i>
        <div class="feature-content">
          <span>Responsive</span>
          <p>Built to be responsive and Fluid, the V-Slide will honor the dimensions of the parent container and render accordingly.</p>
        </div>
      </li>
      <li>
        <i>
          <img src="progress.svg" />
        </i>
        <div class="feature-content">
          <span>Progress Tracker</span>
          <p>Progress Tracker provides a great visual indication on the overall progress of Slideshows.</p>
        </div>
      </li>
      <li>
        <i>
          <img src="touch.svg" />
        </i>
        <div class="feature-content">
          <span>Touch Enabled</span>
          <p>V-Slide comes with support for gestures. Powered by Hammer.JS, slides can be navigated by swiping left or right.</p>
        </div>
      </li>
      <li>
        <i>
          <img src="vue.svg" />
        </i>
        <div class="feature-content">
          <span>Powered by Vue</span>
          <p>V-Slide is built with Vue and meant to be used as a plugin on any existing Vue projects with ease.</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  import Vue from "vue";
  export default { name: "site-features" };
</script>

<style lang="scss" scoped>
.feature-set {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  width: 60%;
  @media (min-width: 1281px) {
    width: 90%;
  }

  @media screen and (min-width: 1600px), screen and (min-width: 1400px) {
    width: 90%;
  }

  @media screen and (min-width: 1900px) {
    width: 80%;
  }

  @media screen and (min-width: 2560px) {
    width: 65%;
  }

  @media screen and (min-width: 3840px) {
    width: 40%;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 90%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 95%;
  }
}

.feature-list {
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 220px);
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 230px);
  list-style: none;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;

  li {
    align-items: flex-start;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    border-radius: 1rem;
    /* box-shadow: 0 0 8px 4px rgba($color: #000, $alpha: 0.1); */
    display: flex;
    margin: 1rem;
    padding: 1rem;

    span {
      font-family: "Montserrat", sans-serif;
      font-size: 1.2rem;
      font-weight: 500;
      text-transform: uppercase;
      white-space: nowrap;
      color: #1e90ff;
      @media (min-width: 1025px) and (max-width: 1280px),
        (min-width: 768px) and (max-width: 1024px) {
        font-size: 1rem;
      }
    }

    i {
      align-items: center;
      display: flex;
      flex: 1;
      height: 2rem;
      margin-right: 1rem;
      width: 2rem;

      @media (min-width: 1025px) and (max-width: 1280px),
        (min-width: 768px) and (max-width: 1024px) {
        flex: 2;
        height: 1.5rem;
        width: 1.5rem;
      }

      img {
        max-height: 100%;
        max-width: 100%;
      }
    }

    .feature-content {
      align-items: flex-start;
      display: flex;
      flex: 15;
      flex-direction: column;
      justify-content: flex-start;

      p {
        font-size: 1.1rem;
        font-weight: 400;
        text-align: left;
      }
    }
  }
}
</style>