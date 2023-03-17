<template>
  <div class="max-w-md py-4 px-4 w-11/12 bg-neutral-800 shadow-xl rounded-lg">
    <div class="flex justify-center">
      <img :src="Artwork" class="w-72 rounded-xl">
    </div>
      <div class="text-center py-3">
          <h2 class="text-white text-3xl font-semibold font-main">{{ Title }}</h2>
          <p class="text-gray-200 text-lg font-main">{{ Artists }}</p>
      </div>
      <div class="flex justify-center">
        <a :href=StreamLink class="text-xl bg-blue-500 py-2 px-3 rounded-xl font-main font-bold text-white">STREAM NOW</a>
      </div>
  </div>
</template>

<script>
export default {
  name: "ReleaseComponent",
  props: {
    Artists: String,
    Title: String,
    StreamLink: String,
    Artwork: String,
  }
}
</script>