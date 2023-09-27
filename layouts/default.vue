<template>
  <nav class="border-b-4 border-primary bg-secondary">
    <NuxtLoadingIndicator />
    <div class="m-auto flex h-full max-w-[1000px] items-center justify-between">
      <nuxt-link to="/" class="mx-6">Podium Pulse</nuxt-link>
      <desktop-nav class="hidden md:flex" />
      <mobile-nav class="block md:hidden" />
    </div>
  </nav>
  <slot />
</template>

<script setup>
const listTypes = ref('');

const setSessionType = (type) => {
  listTypes.value = type;
};

//Get Season data
const { data: seasonData } = await useFetch('http://ergast.com/api/f1/seasons.json?offset=63');
const seasons = seasonData.value.MRData.SeasonTable.Seasons;
//Get Driver data
const { data: driverData } = await useFetch('https://ergast.com/api/f1/current/drivers.json');
const drivers = driverData.value.MRData.DriverTable.Drivers;
</script>
