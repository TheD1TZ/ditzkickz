<template>
  <div class="flex bg-center justify-center py-32 bg-fixed"
       style="background-image: url('/backgrounds/websitebanner.jpg');">
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
  <div class="flex bg-center justify-center p-24 bg-fixed bg-[url('/backgrounds/background2.jpg')]">
    <div class="grid grid-cols-1 gap-14 py-24">
      <h1 class="font-main text-6xl ">DO YOU HAVE QUESTIONS OR REQUESTS?</h1>
      <MButton :text="'CONTACT ME'" :link="'/contact'"/>
    </div>
  </div>
</template>

<script>
import ReleaseComponent from "../components/ReleaseComponent.vue";
import spotifyApi from "../spotify/loadTokens.js";
import MButton from "../components/MButton.vue";

export default {
  name: "HomePage",
  components: {MButton, ReleaseComponent},
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
