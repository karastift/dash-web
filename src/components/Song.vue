<template>
  <div class="box">
    <div class="song" v-if="title">{{ title }} - {{ interpret }}</div>
    <div class="song" v-else>{{ emote }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Song',
  props: {
    title: String,
    interpret: String,
  },
  data() {
    return {
      emote: ':D',
      emotes: [
        ':D',
        '( ͡° ͜ʖ ͡°)',
        '¯\\_(ツ)_/¯',
        'ಠ_ಠ',
        'ʘ‿ʘ',
        'ಠ‿↼',
        '¬_¬',
        'ツ',
        '(╯°□°）╯︵ ┻━┻',
        '(ง •_•)ง',
        '(¬‿¬)',
        '(^_^)',
        '(ಥ﹏ಥ)',
        '(>_<)',
        'ʕ•ᴥ•ʔ',
        '(•_•)',
        '(⌐■_■)',
        '(⊙_☉)',
        '(⌐⊙_⊙)',
        '(¬‿¬)',
        '(>^.^)>',
        '˚‧º·(˚ ˃̣̣̥⌓˂̣̣̥ )‧º·˚',
      ],
      interval: undefined as any,
    };
  },
  mounted() { 
    if (this.title === '' && this.interval === undefined) this.interval = setInterval(this.newRandomEmote, 2000);
  },
  updated() {
    if (this.title === '' && this.interval === undefined) this.interval = setInterval(this.newRandomEmote, 2000);
    else if (this.title !== '') clearInterval(this.interval);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    newRandomEmote() {
      // Update the data here
      this.emote = this.emotes[Math.floor(Math.random() * this.emotes.length)]
    },
  },
}
</script>

<style scoped>
.box {
  border: 1px solid black;
  width: 400px;
  text-align: center;
}
.song {
  height: 15px;
}
</style>
