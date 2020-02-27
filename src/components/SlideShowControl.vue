<template>
  <div class="v-slideshow-container">
    <ul class="v-slideshow-controls">
      <li v-if="autoplay && paused">
        <button @click="togglePlay">
          <IosPlayIcon :w="icon.dimension" :h="icon.dimension" :style="{fill: iconColor()}" />
        </button>
      </li>
      <li v-else-if="autoplay && !paused">
        <button @click="togglePlay">
          <IosPauseIcon :w="icon.dimension" :h="icon.dimension" :style="{fill: iconColor(true)}" />
        </button>
      </li>
      <li v-if="preview">
        <transition name="fade">
          <button @click="togglePreviewPane" v-show="paused">
            <IosPhotosIcon
              :w="icon.dimension"
              :h="icon.dimension"
              :style="{fill: iconColor(this.previewPaneOpen)}"
            />
          </button>
        </transition>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "@/styles/slideshow-control";
</style>

<script lang="ts">
import Vue from "vue";
import IosPauseIcon from "vue-ionicons/dist/ios-pause.vue";
import IosPlayIcon from "vue-ionicons/dist/ios-play.vue";
import IosPhotosIcon from "vue-ionicons/dist/md-albums.vue";

export default Vue.component("v-slideshow-control", {
  components: {
    IosPauseIcon,
    IosPlayIcon,
    IosPhotosIcon,
  },
  props: {
    autoplay: Boolean,
    preview: Boolean,
  },
  data() {
    return {
      paused: true,
      previewPaneOpen: false,
      icon: {
        dimension: "1.25rem",
        color: {
          active: "#1e90ff",
          inActive: "#1e90ff",
        },
      },
    };
  },
  methods: {
    togglePlay() {
      this.paused = !this.paused;
      this.$emit("slideShow", this.paused);
    },
    togglePreviewPane() {
      this.previewPaneOpen = !this.previewPaneOpen;
      this.$emit("previewPane", this.previewPaneOpen);
    },
    iconColor(state?: boolean) {
      const { active, inActive } = this.icon.color;
      return state ? active : inActive;
    },
  },
});
</script>

