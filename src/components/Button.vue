<script setup lang="ts">
defineProps({
  title: String,
  color: String,
  height: String || undefined,
  width: String || undefined,
})
</script>

<template>
  <button :style="{ backgroundColor: color, width: width, height: height }">{{ title }}</button>
</template>

<style scoped>

button {
  width: 100%;
  text-align: center;
  font-size: large;
  font-family: 'Press Start 2P', cursive;
  color: white;
  border: none;
  background-color: transparent;
}
button:active {
  transform: scale(0.8);
  color: red;
}
</style>
