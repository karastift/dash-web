<template>
  <div class="box">
    <div class="number">{{ data }}</div>
    <div>{{ description }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Gauge',
  props: {
    data: String,
    description: String,
  }
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
