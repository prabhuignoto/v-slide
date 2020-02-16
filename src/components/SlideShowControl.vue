<template>
  <div class="v-slideshow-container">
    <ul class="v-slideshow-controls">
      <li v-if="paused">
        <button @click="togglePlay">
          <IosPlayIcon w="1.65rem" h="1.65rem" :style="{fill: iconColor()}" />
        </button>
      </li>
      <li v-else>
        <button @click="togglePlay">
          <IosPauseIcon w="1.65rem" h="1.65rem" :style="{fill: iconColor(true)}" />
        </button>
      </li>
      <li>
        <transition name="fade">
          <button @click="togglePreviewPane" v-show="paused">
            <IosPhotosIcon w="1.65rem" h="1.65rem" :style="{fill: iconColor(this.previewPaneOpen)}" />
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
  data() {
    return {
      paused: true,
      previewPaneOpen: false,
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
      if (state) {
        return "#1e90ff";
      } else {
        return "#fff";
      }
    },
  },
});
</script>

