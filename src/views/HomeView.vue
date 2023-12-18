<script setup lang="ts">
import Rpm from '../components/Rpm.vue';
import Speed from '../components/Speed.vue'
import PlayerControl from '../components/PlayerControl.vue'
import Song from '../components/Song.vue'
import VolumeControl from '../components/VolumeControl.vue'
import BluetoothControl from '../components/BluetoothControl.vue'
import PowerButton from '../components/PowerButton.vue'
import Space from '../components/Space.vue'
</script>

<template>
  <main>
    <div class="vehicleInfo">
      <Speed />
      <Rpm />
    </div>
    <Space />

    <div class="footer">

      <div class="deviceControl">
        <PowerButton />
        <BluetoothControl />
      </div>

      <div class="player">
        <PlayerControl />
        <Song />
      </div>

      <VolumeControl class="volume"/>
    </div>

  </main>
</template>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.vehicleInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid green;
  margin-top: 200px;
}

.footer {
  display: flex;
  flex-direction: row;
}

.player, .volume, .deviceControl {
  flex: 1;
  width: 100%;
  border: 2px solid red;
}

.player {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.volume {
  display: flex;
  justify-content: flex-end;
}

.deviceControl {
  display: flex;
  flex-direction: row;
}

</style>

