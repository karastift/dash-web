<template>
  <div class="box">
    <input @change="changeVolume" v-model="volume" type="range" max="100" name="volume" id="volume">
  </div>
</template>

<script lang="ts">
import { volumeTo } from '@/helpers/api';

export default {
  name: 'VolumeControl',
  data() {
    return {
      volume: 100,
    };
  },
  methods: {
    changeVolume() {
      volumeTo(this.volume / 100);
    },
  },
}
</script>

<style scoped>
.box {
  border: 1px solid black;
  width: 200px;
  text-align: center;
}
</style>
