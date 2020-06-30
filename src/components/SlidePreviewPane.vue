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
          :class="{ active: activeSlide === index }"
        ></div>
      </li>
    </ul>
    <button @click="handleRight" class="right slide-preview-btn">
      <IosArrowForwardIcon />
    </button>
  </div>
</template>

<style lang="scss">
@import "@/styles/slide-preview.scss";
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
