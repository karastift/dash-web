<template>
  <div class="box">
    <Button title="&lt;" :onClick="previousSong"></Button>
    <Button :title="getSymbol()" :onClick="playPause"></Button>
    <Button title="&gt;" :onClick="nextSong"></Button>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';
import { back, forward, togglePlay } from '@/helpers/api';

export default {
  name: "PlayerControl",
  data() {
    // this is set to true when the user presses the togglePlay button
    // it has the purpose of switching between play/pause icon so the user has a immediate response and does not have to wait for the next player update per websocket
    return {
      changePlayStatusRequested: false,
    };
  },
  props: {
    isPlaying: Boolean,
  },
  methods: {
    getSymbol() {
      const isReallyPlaying = this.isPlaying;
      if (this.changePlayStatusRequested) isReallyPlaying = !isReallyPlaying;

      this.changePlayStatusRequested = false;

      return isReallyPlaying ? '||' : '▶️'
    },
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
