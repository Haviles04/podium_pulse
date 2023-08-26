<template>
  <div
    class="bg-slate-500 min-h-[50px] flex items-center justify-between"
   
  >
    <p class="mx-6"><nuxt-link to="/">Podium Pulse</nuxt-link></p>
    <div class="flex items-center z-10 relative" @mouseleave="listTypes = ''" >
      <button class="mx-8" @mouseenter="listTypes = 'seasons'">Seasons</button>
      <button class="mx-8" @mouseenter="listTypes = 'drivers'">Drivers</button>
      <div
        v-if="showList"
        class="absolute top-1 pt-10 right-6 bg-slate-500 px-8 py-2 rounded-xl min-w-[200px] text-center -z-10 "
        
      >
        <ul>
          <li
            v-for="data in listData"
            class="list-none"
            @click="listTypes = ''"
          >
            <nuxt-link :to="listLink(data)">
              {{ data.season || data.givenName + " " + data?.familyName }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <slot />
</template>

<script setup>
const listTypes = ref("");

const showList = computed(() => {
  return listTypes.value === "drivers" || listTypes.value === "seasons";
});

const listData = computed(() => {
  return listTypes.value === "seasons" ? seasons : drivers;
});

const listLink = (data) => {
  if (listTypes.value === "seasons") {
    return `/${data?.season}`;
  }
  return `/drivers/${data?.driverId}`;
};

//Get Season data
const { data: seasonData } = await useFetch(
  "http://ergast.com/api/f1/seasons.json?offset=64"
);
const { Seasons: seasons } = seasonData.value.MRData.SeasonTable;

//Get Driver data
const { data: driverData } = await useFetch(
  "https://ergast.com/api/f1/current/drivers.json"
);
const { Drivers: drivers } = driverData.value.MRData.DriverTable;
</script>
