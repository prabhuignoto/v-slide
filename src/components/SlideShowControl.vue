<template>
  <div class="v-slideshow-container">
    <ul class="v-slideshow-controls">
      <li v-if="paused">
        <button @click="togglePlay">
          <IosPlayIcon w="2rem" h="2rem" :style="{fill: iconColor()}" />
        </button>
      </li>
      <li v-else>
        <button @click="togglePlay">
          <IosPauseIcon w="2rem" h="2rem" :style="{fill: iconColor(true)}" />
        </button>
      </li>
      <li>
        <button @click="togglePreviewPane">
          <IosPhotosIcon w="2rem" h="2rem" :style="{fill: iconColor(this.previewPaneOpen)}" />
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.v-slideshow-controls {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  button {
    border: none;
    outline: none;
    cursor: pointer;
    transform: scale(1);
    background: none;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import IosPauseIcon from "vue-ionicons/dist/ios-pause.vue";
import IosPlayIcon from "vue-ionicons/dist/ios-play.vue";
import IosPhotosIcon from "vue-ionicons/dist/ios-photos.vue";

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
        return "#ccc";
      }
    },
  },
});
</script>

