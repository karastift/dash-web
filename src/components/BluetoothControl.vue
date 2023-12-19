<script setup lang="ts">
import Button from './Button.vue';
</script>

<template>
  <div class="box">
    <Button title="pair" height="40px"/>
    <Button title="no pair" height="40px"/>
  </div>
</template>

<style scoped>

.box {
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  text-align: center;
}
</style>
