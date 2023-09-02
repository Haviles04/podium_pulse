<template>
  <nav
    class="min-h-[50px] flex items-center justify-between border-b-2 border-primary"
  >
    <nuxt-link to="/" class="mx-6">Podium Pulse</nuxt-link>
    <ul class="hidden md:flex items-center z-10 relative">
      <li><nuxt-link to="/schedule" class="mx-8">Schedule</nuxt-link></li>
      <li class="mx-8" @mouseenter="setSessionType('seasons')">
        <nuxt-link to="/seasons"> Seasons </nuxt-link>
        <nav-drop-down
          v-if="listTypes === 'seasons'"
          :listData="seasons"
          :listTypes="listTypes"
        />
      </li>
      <li class="mx-8" @mouseenter="setSessionType('drivers')">
        <nuxt-link to="/drivers">Drivers</nuxt-link>
        <nav-drop-down
          v-if="listTypes === 'drivers'"
          :listData="drivers"
          :listTypes="listTypes"
        />
      </li>
    </ul>
    <div class="block md:hidden">
      <button class="mx-8">Menu</button>
    </div>
  </nav>
  <slot />
</template>

<script setup>
const listTypes = ref("");
let sessionTypeTimer;

const setSessionType = (type) => {
  clearTimeout(sessionTypeTimer);
  sessionTypeTimer = setTimeout(() => {
    listTypes.value = type;
  }, 250);
};

//Get Season data
const { data: seasonData } = await useFetch(
  "http://ergast.com/api/f1/seasons.json?offset=63"
);
const seasons = seasonData.value.MRData.SeasonTable.Seasons;
//Get Driver data
const { data: driverData } = await useFetch(
  "https://ergast.com/api/f1/current/drivers.json"
);
const drivers = driverData.value.MRData.DriverTable.Drivers;
</script>
