<template>
  <div class="flex justify-center">
    <a :href="link" class="flex w-1/4 py-3 text-2xl rounded-xl font-main bg-gray-600 hover:bg-gray-800 ease-in-out duration-300 justify-center shadow-xl text-white">
      <h1>{{ text }}</h1>
    </a>
  </div>
</template>

<script>
export default {
  name: "MButton",
  props: {
    text: {
      type: String,
      default: "Button Text"
    },
    link: {
      type: String,
      default: "#_"
    }
  }
}
</script>
