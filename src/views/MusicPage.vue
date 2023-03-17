<template>

<!-- Music Grid -->
  <div class="grid-cols-4 gap-4 p-5">
    <button type="submit" v-on:click="Tracks()"> GetTracks</button>
  </div>

  <div>
<h1>Tracks</h1>
    <li v-for="(item, index) in tracks">
      {{ item.message }}
    </li>
  </div>
</template>

<script>
import { getTracks } from "../spotify/spotifyAPI.js";
export default {
  name: "MusicPage",
  data() {
    return {
      tracks: []
    }
  },
  methods: {
    Tracks() {
      this.tracks = getTracks();
      console.log(this.tracks)
    }
  },
}
</script>