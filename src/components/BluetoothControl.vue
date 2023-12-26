<template>
  <div class="box">
    <Button title="settings" height="40px" :onClick="() => show = !show"/>
    <div class="buttons">
      <Button v-if="show" title="pair" height="40px" :onClick="pair"/>
      <Button v-if="show" title="no pair" height="40px" :onClick="noPair"/>
      <Button v-if="show" title="toggle cursor" height="40px" :onClick="sendToggleCursor"/>
    </div>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';
import { setPairable } from '@/helpers/api';

export default {
  name: "BluetoothControl",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    pair() {
      setPairable(true);
    },
    noPair() {
      setPairable(false);
    },
    sendToggleCursor() {
      this.$emit('toggle-cursor');
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
  flex-direction: row;
  border: 1px solid black;
  text-align: center;
}
.buttons {
  position: absolute;
  transform: translate(-160px, -130px);
  text-align: left;
}
</style>
