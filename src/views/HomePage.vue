<template>
  <div class="flex bg-center justify-center py-32" style="background-image: url('src/assets/images/backgrounds/websitebanner.jpg');">
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

      <div class="grid grid-cols-4 gap-4">
        <ReleaseComponent />
        <ReleaseComponent />
        <ReleaseComponent />
        <ReleaseComponent />

      </div>
    </div>
  </div>
<!-- Pictures -->
<!-- questions -->
  <div class="flex bg-center justify-center py-8">
    <h1 class="font-main text-6xl py-32">CONTACT</h1>
  </div>
</template>

<script>
import ReleaseComponent from "../components/ReleaseComponent.vue";

export default {
  name: "HomePage",
  components: {ReleaseComponent}
}
</script>
