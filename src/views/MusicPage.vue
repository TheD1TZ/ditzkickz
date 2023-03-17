<template>

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
              <img :alt="track.name" :src="track.images[0].url"/>
              <span>{{ track.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-fixed bg-center bg-fixed bg-[url('/backgrounds/background2.jpg')]">
    <div class="grid grid-cols-2 gap-24 p-24 px-44 text-center">
      <div class="grid grid-cols-1 gap-6">
        <div class="py-2">
          <h1 class="font-main text-6xl p-2">ALL OF DITZKICKZ</h1>
          <h1 class="font-main text-6xl p-2">PLAYLIST</h1>
        </div>
        <iframe class="rounded-2xl"
                height="450"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1585974664&color=%232a3435&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                width="700"></iframe>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <div class="py-2">
          <h1 class="font-main text-6xl p-2">DITZKICKZ RADIO</h1>
          <h1 class="font-main text-6xl p-2">PLAYLIST</h1>
        </div>
        <iframe class="rounded-2xl"
                height="450"
                loading="lazy" src="https://open.spotify.com/embed/playlist/37i9dQZF1E4ysOxpNn92jH?utm_source=generator&theme=0" width="100%"></iframe>
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