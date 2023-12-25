<template>
  <div class="box">
    <div class="content device-container">
      <span>known devices:</span>
        <Button
          v-for="device in devices"
          :title="device.name + ' - ' + device.macAddress"
          fontSize="smaller"
          :onClick="() => remove(device.macAddress)"
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
import { listDevices, removeDevice, type Device } from '@/helpers/api';
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
        devices: Array<Device>(),
      };
    },
    methods: {
      randomNyan() {
        return `nyan/${this.names[Math.floor(Math.random() * this.names.length)]}`;
      },
      fetchDevices() {
        listDevices().then((fetchedDevices) => {
          this.devices = fetchedDevices;
        });
      },
      remove(mac: string) {
        removeDevice(mac);
        this.fetchDevices();
      }
    },
    created() {
      this.fetchDevices();
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
