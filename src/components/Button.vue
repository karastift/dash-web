<template>
  <button @click="handleClick" :style="{ backgroundColor: color, width: width, height: height, fontSize: fontSize, transform: pressedDown ? 'scale(0.8)' : undefined, color: pressedDown ? 'red' : undefined }">{{ title }}</button>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    title: String,
    color: String,
    height: String,
    width: String,
    fontSize: String,
    onClick: Function,
  },
  data() {
    return {
      pressedDown: false,
    };
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.pressedDown = true;
        this.onClick();
        setTimeout(() => this.pressedDown = false, 150);
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
/* button:active {
  transform: scale(0.8);
  color: red;
} */
</style>
