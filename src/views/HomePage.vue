<template>
  <div class="flex bg-center justify-center py-32" style="background-image: url('public/backgrounds/websitebanner.jpg');">
    <h1 class="font-logo text-8xl py-32">DITZKICKZ</h1>
  </div>

  <div>

  </div>
<!-- Partys -->
  <div class="flex bg-center justify-center py-8">
    <h1 class="font-main text-6xl py-32">UPCOMING BOOKINGS</h1>
  </div>
<!-- Music -->
  <div class="flex bg-center bg-neutral-700 justify-center">
    <div class="grid grid-cols-1 text-center">
      <h1 class="font-main text-6xl py-20">LATEST RELEASES</h1>

      <div class="grid grid-cols-4 gap-4 py-9">
        <div v-for="track in tracks" :key="tracks">
          track.name
          <div v-for="t in track">
            <ReleaseComponent :Title="t.name" />
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- Pictures -->
<!-- questions -->
  <div class="flex bg-center justify-center">
    <div class="grid grid-cols-1">
      <h1 class="font-main text-6xl py-32">DO YOU HAVE QUESTIONS OR REQUESTS?</h1>
      <button class="bg-gray-800 py-2 px-3 rounded-xl font-main font-bold text-indigo-500">CONTACT US</button>
    </div>
  </div>
</template>

<script>
import ReleaseComponent from "../components/ReleaseComponent.vue";
import spotifyApi from "../spotify/loadTokens.js";

export default {
  name: "HomePage",
  components: {ReleaseComponent},
  data() {
    return {
      tracks: spotifyApi.getArtistTopTracks('02Qk9K9AJwyQWcZ5BrSgd7', 'US')
        .then(function(data) {
          console.log('Artist top tracks', data.body.tracks)
          return JSON.stringify(data.body.tracks);
        }, function(err) {
          return err;
        }),
    }
  },
}
</script>
