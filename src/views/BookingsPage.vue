<template>

  <div class="flex content-center justify-center p-24 py-44 px-56 text-white">

    <div>
      <!--Booking list-->
      <div class="w-2/3">
        <h1 class="text-6xl py-5">UPCOMING BOOKINGS</h1>
        <a class="text-3xl whitespace-normal">Take a look at our agenda and join the madness at one of our gigs.
           Hope to see you soon!</a>
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
    <div class="w-1/4 bg-gray-700 rounded-2xl">
      <div class="text-center py-12">
<!--        <img src="">-->
        <h1 class="text-white text-4xl font-logo">DITZKICKZ</h1>
        <h2 class="text-white text-3xl font-semibold">EMAIL ME FOR BOOKINGS</h2>
      </div>
    </div>

  </div>
</template>

<script>
import { countries } from 'country-flag-icons'
import getFlag from "../spotify/getFlag.js";
export default {
  name: "BookingsPage",
  methods: {getFlag},
  data() {
    return {
      shows: [
        {
          date: "2021-10-10",
          country: "NL",
          description: "Defqon.1 Festival",
        },
        {
          date: "2021-10-10",
          country: "BE",
          description: "Mysteryland Festival",
        }],
    };
  },
}
</script>

<style scoped>

</style>