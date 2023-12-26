<template>
  <img :src="nyanPath" alt="nyancat" height="104px" width="236px">
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
        nyanPath: '',
      };
    },
    methods: {
      randomNyan() {
        return `nyan/${this.names[Math.floor(Math.random() * this.names.length)]}`;
      },
    },
    created() {
      this.nyanPath = this.randomNyan();
    },
};
</script>

<style scoped>
</style>
