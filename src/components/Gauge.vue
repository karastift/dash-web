<template>
  <div class="box">
    <div class="number" :style="{ color: color }">{{ data }}</div>
    <div>{{ description }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Gauge',
  props: {
    data: Number,
    description: String,
    max: Number,
  },
  data() {
    return {
      color: 'rgb(255, 255, 255)',
    };
  },
  updated() {
    // this.updateColor()
  },
  methods: {
    updateColor() {
      if (!this.data || !this.max) return;

      const newColorValue = 255 - this.data / this.max * 255;
      this.color = `rgb(255, ${newColorValue}, ${newColorValue})`;
      console.log(this.color);
    },
  },
}
</script>

<style scoped>
.box {
  border: 1px solid black;
  width: 100px;
  text-align: center;
}
.number {
  font-size: x-large;
  margin-bottom: 5px;
}
</style>
