<template>
  <div class="slides-container">
    <div class="slots-wrapper">
      <slot></slot>
    </div>
    <div class="slides-main-container">
      <ul
        class="slides-wrapper"
        :class="{isPreviewPaneOpen: isPreviewPaneOpen, isPreviewPaneClosed: !isPreviewPaneOpen}"
        ref="slides"
        @keyup.left="handlePrevious"
        @keyup.right="handleNext"
        tabindex="0"
      >
        <li v-for="slide in slides" :key="slide.id">
          <transition name="fade">
            <div v-if="slide.isVisible">
              <v-slide :id="slide.id" :key="slide.id" v-html="slide.node.outerHTML"></v-slide>
            </div>
          </transition>
        </li>
      </ul>
      <transition name="show">
        <div class="slider-preview-pane-container" v-show="isPreviewPaneOpen">
          <v-slide-preview :slides="slides" @selectedSlide="handleSelectedSlide"></v-slide-preview>
        </div>
      </transition>
    </div>
    <div class="slide-progress-container">
      <v-slide-progress :slidesCount="slidesCount" :activeSlide="activeSlide + 1"></v-slide-progress>
    </div>
    <div class="slide-control-bar">
      <div class="slideshow-control-container">
        <v-slideshow-control @slideShow="handleSlideshow" @previewPane="handlePreviewPane"></v-slideshow-control>
      </div>
      <div class="slider-bubble-progress-container">
        <v-slider-control
          v-bind:slidesCount="slidesCount"
          v-bind:activeSlide="activeSlide"
          @selectedSlide="handleSelectedSlide"
        ></v-slider-control>
      </div>
    </div>
    <transition name="fade">
      <button v-on:click="handlePrevious" class="v-slide-btn prev" v-if="canShowPrevious">
        <IosArrowBackIcon :style="{fill: '#fff'}" class="v-slide-icon" />
      </button>
    </transition>
    <transition name="fade">
      <button v-on:click="handleNext" class="v-slide-btn next" v-if="canShowNext">
        <IosArrowForwardIcon :style="{fill: '#fff'}" class="v-slide-icon" />
      </button>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/slides.scss";
</style>

<script lang="ts">
import Vue from "vue";
import Slide from "./Slide.vue";
import SliderControl from "./SliderControl.vue";
import nanoid from "nanoid";
import BackIcon from "./icons/BackIcon.vue";
import SlideProgress from "./SlideProgress.vue";
import SlideShowControl from "./SlideShowControl.vue";
import SlidePreviewPane from "./SlidePreviewPane.vue";
import IosArrowBackIcon from "vue-ionicons/dist/ios-arrow-back.vue";
import IosArrowForwardIcon from "vue-ionicons/dist/ios-arrow-forward.vue";

interface ISlideData {
  slidesCount: number;
  slides: Array<{ id: string; node: Element; isVisible: boolean }>;
  activeSlide: number;
  isSlideshowRunning: boolean;
  intervalHandle: any;
  canShowNavControls: boolean;
  isPreviewPaneOpen: boolean;
}

interface ISlideOptions {
  title: string;
  isCircular: boolean;
}

export default Vue.component("v-slides", {
  props: {
    title: String,
    isCircular: Boolean,
  },
  components: {
    Slide,
    SliderControl,
    SlideProgress,
    SlideShowControl,
    SlidePreviewPane,
    IosArrowBackIcon,
    IosArrowForwardIcon,
  },
  data(): ISlideData {
    return {
      slidesCount: 0,
      slides: [],
      activeSlide: 0,
      isSlideshowRunning: false,
      isPreviewPaneOpen: false,
      intervalHandle: null,
      canShowNavControls: false,
    };
  },
  mounted() {
    if (this.$slots.default) {
      this.slidesCount = this.$slots.default.length as number;
      const slotsWrapper = this.$el.querySelector(".slots-wrapper");

      if (slotsWrapper) {
        const slotContents = [...slotsWrapper.children];
        this.$nextTick(() => {
          this.slides = Array.from({ length: this.slidesCount }).map(
            (val, index) => ({
              id: nanoid(),
              node: slotContents[index],
              isVisible: index === 0,
            }),
          );
          while (slotsWrapper.firstChild) {
            slotsWrapper.removeChild(slotsWrapper.firstChild);
          }
        });
      }
    }
  },
  computed: {
    canShowPrevious(): boolean {
      if (!this.isCircular) {
        return this.activeSlide > 0;
      } else {
        return true;
      }
    },
    canShowNext(): boolean {
      if (!this.isCircular) {
        return this.activeSlide < this.slidesCount - 1;
      } else {
        return true;
      }
    },
  },
  methods: {
    autoPlay() {
      this.intervalHandle = setInterval(() => {
        if (this.isSlideshowRunning) {
          this.handleNext();
        }
      }, 2000);
    },
    updateActiveSlide(idx: number) {
      this.activeSlide = this.activeSlide + idx;
      this.slides = this.slides.map((slide, index) => {
        return Object.assign({}, slide, {
          isVisible: this.activeSlide === index,
        });
      });
    },
    handleNext() {
      if (this.activeSlide < this.slidesCount - 1) {
        this.updateActiveSlide(+1);
      } else if (this.isCircular) {
        // move to the first slide
        this.updateActiveSlide(-(this.slidesCount - 1));
      }
    },
    handlePrevious() {
      if (this.activeSlide > 0) {
        this.updateActiveSlide(-1);
      } else if (this.isCircular) {
        // move to the last slide
        this.updateActiveSlide(this.slidesCount - 1);
      }
    },
    handleSelectedSlide(index: number) {
      this.activeSlide = index - 1;
      this.updateActiveSlide(0);
    },
    handleSlideshow(paused: boolean) {
      this.isSlideshowRunning = !paused;

      if (!paused) {
        this.isPreviewPaneOpen = false;
        this.autoPlay();
      } else if (this.intervalHandle) {
        clearInterval(this.intervalHandle);
      }
    },
    handlePreviewPane(open: boolean) {
      this.isPreviewPaneOpen = open;
    },
  },
});
</script>