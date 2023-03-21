<template>
  <div class="flex content-center justify-center p-24 py-44 px-56 text-white">
    <div>
      <!--Booking list-->
      <div class="w-2/3">
        <h1 class="text-6xl py-5">UPCOMING BOOKINGS</h1>
        <a class="text-3xl whitespace-normal"
          >Take a look at the agenda and join the madness at one of my gigs.
          Hope to see you soon!</a
        >
      </div>

      <div class="pt-8">
        <div v-for="show in shows" class="flex justify-start py-2">
          <div class="flex bg-gray-800 rounded-2xl">
            <ShowComponent
              :date="show.date"
              :country="show.country"
              :description="show.description"
            />
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
import ShowComponent from "../components/ShowComponent.vue";

export default {
  name: "BookingsPage",
  components: {ShowComponent},
  data() {
    return {
      shows: [
        {
          date: "2021-10-10",
          country: "NL",
          description: "Defqon.1 Festival",
        },
        {
          date: "2021-12-10",
          country: "BE",
          description: "Mysteryland Festival",
        },
        {
          date: "2024-10-6",
          country: "DE",
          description: "Shutdown Festival",
        },
        {
          date: "2021-10-10",
          country: "NL",
          description: "Rebirth",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
