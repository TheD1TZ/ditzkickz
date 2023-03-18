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

      <!--      shows a list of all the albums from the json-->
      <div class="grid grid-cols-4 gap-4 py-9">
        <div v-for="album in items">
          <ReleaseComponent :title="album.name" :artists="getArtistNames(album.artists)" :streamlink="album.external_urls.spotify" :artwork="album.images[0].url"/>
        </div>
      </div>
    </div>
  </div>
<!-- Pictures -->
<!-- questions -->
  <div class="flex bg-center justify-center p-24 bg-fixed bg-[url('/backgrounds/background1.jpg')]">
    <div class="grid grid-cols-1 gap-14 py-20">
      <h1 class="font-main text-6xl ">DO YOU HAVE QUESTIONS OR REQUESTS?</h1>
      <MButton :text="'CONTACT ME'" :link="'/contact'"/>
    </div>
  </div>
</template>

<script>
import ReleaseComponent from "../components/ReleaseComponent.vue";
import spotifyApi, {getTracks} from "../spotify/loadTokens.js";
import MButton from "../components/MButton.vue";

export default {
  name: "HomePage",
  components: {MButton, ReleaseComponent},
  data() {
    return {
      items: []
    };
  },
  mounted() {
    // Retrieve data from local storage
    const data = localStorage.getItem("albums:home");

    // If data exists, parse it and bind to data property
    if (data) {
      this.items = JSON.parse(data);
    }
  },
  methods: {
    getArtistNames(tracks) {
      let names = tracks.map(track => track.name);
      return names.join(", ");
    }
  }
}
</script>
