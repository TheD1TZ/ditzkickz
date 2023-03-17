<template style="background-image: url('src/assets/images/backgrounds/background2.jpg')">

  <div class="grid-cols-4 gap-4 p-5">
    <button type="submit" v-on:click="Tracks()"> GetTracks</button>
  </div>

  <!--  <div>-->
  <!--<h1>Tracks</h1>-->
  <!--    <li v-for="(item, index) in tracks">-->
  <!--      {{ item.message }}-->
  <!--    </li>-->
  <!--  </div>-->


  <div class="flex bg-center bg-neutral-700 justify-center p-24">
    <div class="grid grid-cols-1 text-center">
      <h1 class="font-main text-6xl p-2">LATEST RELEASES</h1>
      <div class="grid grid-cols-1 font-main text-xl">
        <a>Listen to DitzKickz his tracks, mixtapes,</a>
        <a>and make sure to check the Spotify Playlists.</a>
      </div>


      <div class="grid grid-cols-4 gap-4 py-9">
<!--      <div v-for="album in tracks">-->
<!--        <ReleaseComponent :Artwork="album.images[0].url"/>-->
<!--      </div>-->

        <div>
          <ul>
            <li v-for="track in tracks" :key="track.href">
              <img :src="track.images[0].url" :alt="track.name" />
              <span>{{ track.name }}</span>
            </li>
          </ul>
        </div>
    </div>
    </div>
  </div>

</template>

<script>
import {getTracks} from "../spotify/spotifyAPI.js";
import ReleaseComponent from "../components/ReleaseComponent.vue";
import spotifyApi from "../spotify/loadTokens.js";

export default {
  name: "MusicPage",
  components: {ReleaseComponent},
  data() {
    return {
      tracks: spotifyApi.getArtistAlbums('02Qk9K9AJwyQWcZ5BrSgd7', 'US')
          .then(function(data) {
            console.log('Artist tracks', JSON.stringify(data.body.items))
            return JSON.stringify(data.body.items);
          }, function(err) {
            return err;
          }),
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