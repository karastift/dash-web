<template>
  <div class="box">
    <img :src="randomNyan()" alt="nyancat" height="100px">
  </div>
</template>

<script lang="ts">
export default {
  name: 'Nyan',
  data() {
    return {
      names: [
        'GB.gif',
        'bday.gif',
        'dub.gif',
        'mummy.gif',
        'pumpkin.gif',
        'tacnayn.gif',
        'zombie.gif',
        'balloon.gif',
        'breakfast.gif',
        'glitch.gif',
        'nyancat.gif',
        'retro.gif',
        'vday.gif',
      ],
    };
  },
  methods: {
    randomNyan() {
      return `nyan/${this.names[Math.floor(Math.random() * this.names.length)]}`;
    },
  },
};
</script>

<style scoped>
.box {
  border: 1px solid black;
  width: 100%;
  text-align: center;
}
</style>
