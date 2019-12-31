<template>
  <div class="slides-container">
    <div class="slots-wrapper">
      <slot></slot>
    </div>
    <ul class="slides-wrapper" ref="slides">
      <li v-for="slide in slides" :key="slide.id">
        <transition name="fade">
          <div v-if="slide.isVisible">
            <v-slide :id="slide.id" :key="slide.id" v-html="slide.node.outerHTML"></v-slide>
          </div>
        </transition>
      </li>
    </ul>
    <div class="slider-control-container">
      <v-slider-control
        v-bind:slidesCount="slidesCount"
        v-bind:activeSlide="activeSlide"
        @selectedSlide="handleSelectedSlide"
      ></v-slider-control>
    </div>
    <!-- <button v-on:click="handlePrevious" class="v-slide-btn prev"></button>
    <button v-on:click="handleNext" class="v-slide-btn next"></button> -->
  </div>
</template>

<style lang="scss" scoped>
.v-slide-btn {
  position: absolute;
  width: 6rem;
  height: 100%;
  background: rgba($color: #fff, $alpha: .25);
  border: none;
  top: 50%;
  transform: translateY(-50%);
  outline: none;
  cursor: pointer;

  &.prev {
    left: 1rem;
    font-size: 3rem;
    color: rgb(46, 46, 46);
  }
  &.next {
    right: 1rem;
    font-size: 3rem;
    color: rgb(46, 46, 46);
  }
}

.slots-wrapper {
  display: none;
}
.slides-container {
  height: 100%;
  position: relative;
}
.slides-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  height: 90%;
  position: relative;
  border: 1px solid #d8d8d8;
  box-shadow: 0 0 6px 2px rgba($color: #000, $alpha: .1);
  border-radius: .25rem;

  li {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    padding: .75rem;
  }
}

.slider-control-container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 1rem;
}

.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@keyframes entering {
  0% {
  }
  100% {
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Slide from "./Slide.vue";
import SliderControl from "./SliderControl.vue";
import nanoid from "nanoid";
import BackIcon from "./icons/BackIcon.vue";

interface ISlide {
  slidesCount: number;
  slides: Array<{ id: string; node: Element; isVisible: boolean }>;
  activeSlide: number;
}

export default Vue.component("v-slides", {
  props: {
    title: String,
  },
  components: {
    Slide,
    SliderControl,
  },
  data(): ISlide {
    return {
      slidesCount: 0,
      slides: [],
      activeSlide: 0,
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
  methods: {
    autoPlay() {
      setInterval(() => {
        this.handleNext();
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
      }
    },
    handlePrevious() {
      if (this.activeSlide > 0) {
        this.updateActiveSlide(-1);
      }
    },
    handleSelectedSlide(index: number) {
      this.activeSlide = index - 1;
      this.updateActiveSlide(0);
    },
  },
});
</script>