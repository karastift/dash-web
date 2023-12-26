<template>
  <main>
    <div class="vehicleInfo">
      <Gauge description="km/h" :data="kmh" :max="200" />
      <Gauge description="rpm" :data="rpm" :max="6000" />
    </div>

    <div class="middle">
      <Devices class="content" :devices="devices"/>
      <div class="content">
        <Nyan/>
      </div>
      <div class="content"></div>
    </div>

    <div class="footer">

      <div class="deviceControl">
        <PowerButton />
        <BluetoothControl />
      </div>

      <div class="player">
        <PlayerControl :isPlaying="song.isPlaying" @song-changed="handleSongChangedBySongControl" />
        <Song :interpret="song.interpret" :title="song.title"/>
      </div>

      <VolumeControl class="volume"/>
    </div>

  </main>
</template>

<script lang="ts">
import io from 'socket.io-client';

import Gauge from '../components/Gauge.vue';
import Devices from '../components/Devices.vue';
import Nyan from '../components/Nyan.vue';
import PlayerControl from '../components/PlayerControl.vue'
import Song from '../components/Song.vue'
import VolumeControl from '../components/VolumeControl.vue'
import BluetoothControl from '../components/BluetoothControl.vue'
import PowerButton from '../components/PowerButton.vue'
import { type Device } from '@/helpers/api';

export default {
  name: 'HomeView',
  data() {
    return {
      kmh: 0,
      rpm: 0,
      connection: null as any,
      song: {
        title: '',
        interpret: '',
        isPlaying: false,
        length: 0,
        volume: 0.5,
      },
      devices: Array<Device>(),
    }
  },
  methods: {
    handleSongChangedBySongControl(song: any) {
      this.song = song;
    },
  },
  created() {
    console.log('Trying to connect to websocket server');
    
    // workaround for typescript problem
    const ioModule: any = io;

    this.connection = ioModule.connect('http://localhost:3333');

    if (this.connection === null) return;

    this.connection.on('dashboard_update', (message: string) => {
      const data = JSON.parse(message);

      this.kmh = data.kmh
      this.rpm = data.rpm
    });

    this.connection.on('player_update', (message: string) => {
      const songUpdate = JSON.parse(message);

      // reset device list and add updated devices
      // i have to to that in a for loop because on the server the property is named mac_address and here its macAddress
      this.devices = [];
      for (let device of songUpdate.devices) {
      	this.devices.push({
          macAddress: device.mac_address,
          name: device.name,
	      });
      }

      this.song = songUpdate
    });
  },
  components: {
    Gauge,
    PlayerControl,
    Song,
    VolumeControl,
    BluetoothControl,
    PowerButton,
    Devices,
    Nyan,
  },
}

</script>

<style scoped>
@font-face {
  font-family: 'Press Start 2P';
  src: url('/fonts/PressStart/PressStart2P-Regular.ttf');
}

main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Press Start 2P';
  font-size: x-small;
  color: var(--text);
  background-color: var(--background);
}

.middle {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 200px;
  width: 100%;
  text-align: center;
}

.content {
  width: 100%;
  border: 1px solid white;
}

.vehicleInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 200px;
}

.footer {
  display: flex;
  flex-direction: row;
}

.player, .volume, .deviceControl {
  flex: 1;
  width: 100%;
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

