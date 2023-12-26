<template>
  <div class="devices">
    <span>known devices:</span>
      <Button
        v-for="device in devices"
        :title="device.name + ' - ' + device.macAddress"
        fontSize="smaller"
        :onClick="() => remove(device.macAddress)"
        class="device"
      />
  </div>
</template>

<script lang="ts">
import { removeDevice, type Device } from '@/helpers/api';
import Button from './Button.vue';

export default {
    name: 'Devices',
    props: {
      devices: Array<Device>,
    },
    methods: {
      remove(mac: string) {
        removeDevice(mac);
      },
    },
    components: { Button },
};
</script>

<style scoped>
.devices {
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
