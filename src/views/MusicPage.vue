<template>

  <div class="flex bg-center bg-Ddarkbluegray justify-center p-24 bg-fixed bg-center bg-opacity-10 bg-fixed">
    <div class="grid grid-cols-1 text-center">
      <h1 class="font-main text-6xl p-2">LATEST RELEASES</h1>
      <div class="grid grid-cols-1 font-main text-xl">
        <a>Listen to DitzKickz his tracks, mixtapes,</a>
        <a>and make sure to check the Spotify Playlists.</a>
      </div>


      <div class="grid grid-cols-4 gap-6 py-9">
          <div v-for="album in items">
            <ReleaseComponent :title="album.name" :artists="getArtistNames(album.artists)" :streamlink="album.external_urls.spotify" :artwork="album.images[0].url"/>
          </div>
      </div>
    </div>
  </div>

  <div class="bg-fixed bg-center pb-12 bg-fixed bg-[url('/backgrounds/background2.jpg')]">
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
        <iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowfullscreen=""
                class="rounded-2xl"
                frameBorder="0" height="450" loading="lazy"
                src="https://open.spotify.com/embed/playlist/37i9dQZF1E4ysOxpNn92jH?utm_source=generator&theme=0"
                style="border-radius:12px"
                width="100%"></iframe>
      </div>
    </div>
  </div>

</template>

<script>
import ReleaseComponent from "../components/ReleaseComponent.vue";
import spotifyApi from "../spotify/loadTokens.js";

export default {
  name: "MusicPage",
  components: {ReleaseComponent},
  data() {
    return {
      items: []
    };
  },
  beforeMount() {
    spotifyApi.getArtistAlbums('02Qk9K9AJwyQWcZ5BrSgd7')
        .then(function (data) {
          // console.log('Albums information', JSON.stringify(data.body.items));
          localStorage.setItem('tracks', JSON.stringify(data.body.items));
        }, function (err) {
          console.error(err);
        })
  },
  mounted() {
    // Retrieve data from local storage
    const data = localStorage.getItem("tracks");

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