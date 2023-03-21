<template>

  <div class="flex content-center justify-center p-24 py-44 px-56 text-white">

    <div>
      <!--Booking list-->
      <div class="w-2/3">
        <h1 class="text-6xl py-5">CONTACT ME</h1>
        <a class="text-3xl whitespace-normal">If you have any questions or enquiries, feel free to contact me.
          I can be reached directly by mail or by filling in the contact form below.</a>
      </div>

      <div class="pt-8">
        <div v-for="show in shows" class="flex justify-start py-2 ">
          <div class="flex bg-gray-800 rounded-2xl">
            <h1 class="text-2xl px-4 bg-gray-800 rounded-2xl">{{ show.date }}</h1>
            <img class="px-4 w-20" :src='getFlag(show.country)'>
            <h1 class="text-2xl px-4">{{ show.description }}</h1>
          </div>
        </div>
      </div>
    </div>

    <!--BOOK HERE-->
    <div class="w-1/4">
      <div class="grid grid-cols-2 gap-8">
        <div class="bg-gray-700 rounded-2xl">
          <img class="text-white" src="/socials/envelope-regular.svg">
        </div>
        <div>
          <h2 class="text-4xl py-5">EMAIL ME</h2>
          <a class="text-3xl whitespace-normal">ItsDitz33@icloud.com</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ContactPage"
}
</script>

<style scoped>

</style>