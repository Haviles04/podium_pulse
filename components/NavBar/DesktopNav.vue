<template>
  <ul class="[&>*]:px-8 [&>*]:py-4">
    <li class="h-full hover:bg-light hover:text-background">
      <nuxt-link to="/schedule">Schedule</nuxt-link>
    </li>
    <li
      class="group/seasons h-full hover:bg-light hover:text-background"
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
      class="group/drivers h-full hover:bg-light hover:text-background"
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
</template>

<script setup>
const listTypes = ref('');

const setSessionType = (type) => {
  listTypes.value = type;
};

//Get Season data
const { data: seasons } = await useFetch('http://ergast.com/api/f1/seasons.json?offset=63', {
  transform: (data) => {
    return data.MRData.SeasonTable.Seasons;
  },
});

//Get Driver data
const { data: drivers } = await useFetch('https://ergast.com/api/f1/current/drivers.json', {
  transform: (data) => {
    return data.MRData.DriverTable.Drivers;
  },
});
</script>
