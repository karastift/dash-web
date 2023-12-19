<template>
  <button @click="handleClick" :style="{ backgroundColor: color, width: width, height: height }">{{ title }}</button>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    title: String,
    color: String,
    height: String,
    width: String,
    onClick: Function,
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick();
      }
    },
  },
}
</script>

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
