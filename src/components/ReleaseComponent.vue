<template>
  <div class="max-w-md py-4 px-8 my-20 bg-white shadow-xl rounded-lg">
    <div>
      <img src="https://i.scdn.co/image/ab67616d0000b2736e30c096cdb67d074d094342" class="w-72 rounded-xl">
    </div>
      <div class="text-center">
          <h2 class="text-gray-800 text-3xl font-semibold">${{ Title }}</h2>
          <p class="mt-2 text-gray-600">${{ Artists }}</p>
      </div>
      <div class="flex justify-center mt-4">
        <a href="" class="text-xl bg-gray-800 py-2 px-3 rounded-xl font-main font-bold text-indigo-500">STREAM NOW</a>
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
  }
}
</script>