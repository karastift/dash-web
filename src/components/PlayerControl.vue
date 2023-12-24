<template>
  <div class="box">
    <Button title="&lt;" :onClick="previousSong"></Button>
    <Button :title="isPlaying ? '||' : '▶️'" :onClick="playPause"></Button>
    <Button title="&gt;" :onClick="nextSong"></Button>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';
import { back, forward, togglePlay } from '@/helpers/api';

export default {
  name: "PlayerControl",
  props: {
    isPlaying: Boolean,
  },
  methods: {
    nextSong() {
      forward().then((song) => this.$emit('song-changed', song));
    },
    previousSong() {
      back().then((song) => this.$emit('song-changed', song));
    },
    playPause() {
      this.isPlaying = !this.isPlaying;
      togglePlay().then((song) => this.$emit('song-changed', song));
    },
  },
  components: {
    Button,
  },
}
</script>

<style scoped>
.box {
  display: flex;
  text-align: center;
  width: 50%;
  flex-direction: row;
  margin-bottom: 10px;
}
</style>
