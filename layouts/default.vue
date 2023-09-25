<template>
  <nav class="min-h-[60px] border-b-4 border-primary bg-secondary">
    <div class="m-auto flex max-w-[1000px] items-center justify-between">
      <nuxt-link to="/" class="mx-6">Podium Pulse</nuxt-link>
      <ul class="hidden h-full md:block [&>*]:inline-block [&>*]:px-8 [&>*]:py-4">
        <li class="h-full hover:bg-light hover:text-background">
          <nuxt-link to="/schedule">Schedule</nuxt-link>
        </li>
        <li
          class="group/seasons hover:bg-light hover:text-background"
          @mouseenter="setSessionType('seasons')"
        >
          <nuxt-link to="/results"> Seasons </nuxt-link>
          <nav-drop-down
            v-if="listTypes === 'seasons'"
            :listData="seasons"
            class="hidden group-hover/seasons:block"
          />
        </li>
        <li
          class="group/drivers hover:bg-light hover:text-background"
          @mouseenter="setSessionType('drivers')"
        >
          <nuxt-link to="/drivers">Drivers</nuxt-link>
          <nav-drop-down
            v-if="listTypes === 'drivers'"
            :listData="drivers"
            class="hidden group-hover/drivers:block"
          />
        </li>
      </ul>
      <div class="block md:hidden">
        <button class="mx-8">Menu</button>
      </div>
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
