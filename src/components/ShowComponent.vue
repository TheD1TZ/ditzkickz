<template>
  <div class="flex bg-gray-800 rounded-2xl">
    <h1 class="text-2xl px-4 bg-gray-800 rounded-2xl">{{ date }}</h1>
    <img class="px-4 w-20" :src="getFlag(country)" />
    <h1 class="text-2xl px-4">{{ description }}</h1>
  </div>
</template>

<script>
import getFlag from "../spotify/getFlag.js";
import { countries } from "country-flag-icons";

export default {
  name: "ShowComponent",
  methods: { getFlag },
  props: {
    date: String,
    country: String,
    description: String,
  },
};
</script>
