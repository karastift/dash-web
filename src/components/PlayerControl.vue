<template>
  <div class="box">
    <Button title="&lt;"></Button>
    <Button title="||"></Button>
    <Button title="&gt;"></Button>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';
</script>

<style scoped>
.box {
  display: flex;
  text-align: center;
  width: 50%;
  flex-direction: row;
  margin-bottom: 10px;
}
</style>
