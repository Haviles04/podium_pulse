<template>
  <ul>
    <li class="h-full hover:bg-light hover:text-background">
      <nuxt-link to="/standings" class="block h-full w-full px-8 py-4" >Standings</nuxt-link>
    </li>
    <li class="h-full hover:bg-light hover:text-background">
      <nuxt-link to="/schedule" class="block h-full w-full px-8 py-4">Schedule</nuxt-link>
    </li>
    <li
      class="group/seasons h-full hover:bg-light hover:text-background"
      @mouseenter="setSessionType('seasons')"
    >
      <nuxt-link to="/results" class="block h-full w-full px-8 py-4"> Seasons </nuxt-link>
      <nav-drop-down
        v-if="listTypes === 'seasons'"
        :listData="seasons"
        :error="seasonsError"
        class="hidden group-hover/seasons:block"
      />
    </li>
    <li
      class="group/drivers h-full hover:bg-light hover:text-background"
      @mouseenter="setSessionType('drivers')"
    >
      <nuxt-link to="/drivers" class="block h-full w-full px-8 py-4">Drivers</nuxt-link>
      <nav-drop-down
        v-if="listTypes === 'drivers'"
        :listData="drivers"
        :error="driversError"
        class="hidden group-hover/drivers:block"
      />
    </li>
  </ul>
</template>

<script setup>
const listTypes = ref('');

const setSessionType = (type) => {
  listTypes.value = type;
};

const { seasons, errors: seasonsError } = await useSeasons();
const { drivers, errors: driversError } = await useDrivers();
</script>
