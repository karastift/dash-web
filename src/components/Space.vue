<template>
  <div class="box">
    <div class="content device-container">
      <span>known devices:</span>
        <Button
          v-for="device in devices"
          :title="device.name + ' - ' + device.mac"
          fontSize="smaller"
          :onClick="() => removeDevice(device.mac)"
          class="device"
        />
    </div>
    <div class="content">
      <img :src="randomNyan()" alt="nyancat" height="104px" width="236px">
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';

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
        devices: [
          { name: 'Handy', mac: '19:A5:C7:BD:E6:3B' },
          { name: 'Samis IPhone', mac: '2B:A0:37:3B:C7:CA' },
          { name: 'Bennos IPhone', mac: '49:92:50:71:18:F9' },
        ]
      };
    },
    methods: {
      randomNyan() {
        return `nyan/${this.names[Math.floor(Math.random() * this.names.length)]}`;
      },
      removeDevice(mac: string) {
        console.log('I cant removeeeeeeeeeeeeee!!!!!!!!', mac)
      }
    },
    components: { Button }
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 200px;
  width: 100%;
  text-align: center;
}
.content {
  width: 100%;
}
.device-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.device {
  text-align: left;
  margin-top: 10px;
}
</style>
