<template>
  <div class="slide-preview-main">
    <button @click="handleRight" class="right slide-preview-btn">
      <IosArrowForwardIcon />
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
    <button @click="handleLeft" class="left slide-preview-btn">
      <IosArrowBackIcon />
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
  height: 100%;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  overflow: hidden;
  scroll-behavior: smooth;
  padding: 0 0.5rem;

  li {
    height: 100%;
    margin: 0;
    margin-right: 0.5rem;
    flex: 1;
    padding: 0.25rem;
    display: flex;
    align-items: center;

    div.slide-preview-pane {
      height: 8rem;
      width: 14rem;
      border: 2px solid transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 0.3rem;
      box-shadow: 0 0 8px 4px rgba($color: #000, $alpha: 0.4);

      &.active {
        box-shadow: 0 0 6px 4px rgba($color: #000, $alpha: 0.6);
      }

      & > img {
        height: 100%;
        width: 100%;
        position: relative;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
}

.slide-preview-btn {
  border: none;
  background: none;
  width: 4rem;
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
    IosArrowForwardIcon
  },
  props: {
    slides: Array
  },
  data() {
    return {
      activeSlide: 0
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
    }
  }
});
</script>