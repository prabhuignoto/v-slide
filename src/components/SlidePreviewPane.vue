<template>
  <div class="slide-preview-main">
    <button @click="handleLeft" class="left slide-preview-btn">
      <IosArrowBackIcon />
    </button>
    <ul class="slide-preview-pane-wrapper" ref="pane">
      <li
        v-for="(slide, index) in slides"
        :key="slide.id"
        :id="slide.id"
        @click="handleSelection(index)"
      >
        <div
          class="slide-preview-pane"
          v-html="slide.node.outerHTML"
          :class="{active: activeSlide === index}"
        ></div>
      </li>
    </ul>
    <button @click="handleRight" class="right slide-preview-btn">
      <IosArrowForwardIcon />
    </button>
  </div>
</template>

<style lang="scss">
.slide-preview-main {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;

  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
}

.slide-preview-pane-wrapper {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0 0.5rem;
  scroll-behavior: smooth;
  width: 100%;

  li {
    align-items: center;
    display: flex;
    flex: 1;
    height: 100%;
    margin-right: 0.5rem;
    margin: 0;
    padding: 0.25rem;

    div.slide-preview-pane {
      align-items: center;
      border-radius: 0.3rem;
      border: 2px solid transparent;
      box-shadow: 0 0 8px 4px rgba($color: #ccc, $alpha: 0.4);
      cursor: pointer;
      display: flex;
      height: 8rem;
      justify-content: center;
      overflow: hidden;
      width: 14rem;

      &.active {
        box-shadow: 0 0 8px 4px rgba($color: #000, $alpha: 0.4);
      }

      & > img {
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        position: relative;
        width: 100%;
      }
    }
  }
}

.slide-preview-btn {
  border: none;
  background: none;
  width: 3rem;
  height: 100%;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  background: #fff;
  box-shadow: 0 0 10px 4px rgba($color: #000, $alpha: 0.2);

  svg {
    width: 100%;
    height: 100%;
    fill: #1e90ff;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import IosArrowBackIcon from "vue-ionicons/dist/ios-arrow-back.vue";
import IosArrowForwardIcon from "vue-ionicons/dist/ios-arrow-forward.vue";

interface ISlide {
  id: string;
}

export default Vue.component("v-slide-preview", {
  components: {
    IosArrowBackIcon,
    IosArrowForwardIcon,
  },
  props: {
    slides: Array,
  },
  data() {
    return {
      activeSlide: 0,
    };
  },
  methods: {
    handleRight(event: any) {
      if (this.$refs.pane) {
        (this.$refs.pane as HTMLElement).scrollLeft += 550;
      }
    },
    handleLeft(event: any) {
      if (this.$refs.pane) {
        (this.$refs.pane as HTMLElement).scrollLeft -= 550;
      }
    },
    handleSelection(idx: number) {
      this.$emit("selectedSlide", idx + 1);
      this.activeSlide = idx;
    },
  },
});
</script>