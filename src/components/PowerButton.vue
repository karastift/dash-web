<template>
  <div class="box">
    <Button title="o" color="red" height="40px" :onClick="powerOff"/>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';
import { shutdown } from '@/helpers/api';

export default {
  name: "PowerButton",
  methods: {
    powerOff() {
      shutdown();
    },
  },
  components: {
    Button,
  },
}
</script>

<style scoped>
.box {
  border: 1px solid black;
  width: 50px;
  text-align: center;
}
</style>
