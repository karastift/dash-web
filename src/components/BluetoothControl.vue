<template>
  <div class="box">
    <Button title="pair" height="40px"/>
    <Button title="no pair" height="40px"/>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';
import { setPairable } from '@/helpers/api';

export default {
  name: "BluetoothControl",
  methods: {
    pair() {
      setPairable(true);
    },
    noPair() {
      setPairable(false);
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
</style>
