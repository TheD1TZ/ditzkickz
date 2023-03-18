<template>
  <div class="py-4 bg-gray-800 shadow-xl rounded-lg">
    <div class="flex justify-center">
      <img :src="artwork" class="w-64 rounded-xl">
    </div>
      <div class="text-center py-3">
          <h2 class="text-white text-3xl whitespace-pre-line font-semibold font-main">{{ title }}</h2>
          <p class="text-gray-200 text-lg font-main">{{ artists }}</p>
      </div>
      <div class="flex justify-center">
        <a :href=streamlink class="text-xl bg-blue-500 py-2 px-3 rounded-xl font-main font-bold text-white">STREAM NOW</a>
      </div>
  </div>
</template>

<script>
export default {
  name: "ReleaseComponent",
  props: {
    artists: String,
    title: String,
    streamlink: String,
    artwork: String,
  }
}
</script>