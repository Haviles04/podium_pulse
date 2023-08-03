<template>
  <div
    class="bg-slate-500 min-h-[50px] flex items-center justify-between relative"
  >
    <p class="mx-8">Podium Pulse</p>
    <div class="flex items-center e">
      <button class="mx-8" @mouseenter="setShowSeasons">Seasons</button>
      <button class="mx-8" @mouseenter="setShowDrivers">Drivers</button>
      <div
        v-if="showSeasons"
        class="absolute top-10 right-6 bg-slate-500 px-8 py-2 rounded-xl min-w-[200px] text-center"
        @mouseleave="showSeasons = false"
      >
        <ul>
          <li v-for="season in seasons" class="list-none">
            <nuxt-link :to="`/seasons/${season.season}`">
              {{ season.season }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div
        v-if="showDrivers"
        class="absolute top-10 right-6 bg-slate-500 px-8 py-2 rounded-xl min-w-[200px] text-center"
        @mouseleave="showDrivers = false"
      >
        <ul>
          <li v-for="driver in drivers" class="list-none">
            <nuxt-link :to="`/drivers/${driver.driverId}`">
              {{ driver.givenName + " " + driver.familyName }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <slot />
</template>

<script setup>
const showSeasons = ref(false);
const showDrivers = ref(false);

const setShowSeasons = () => {
  showSeasons.value = true;
  showDrivers.value = false;
};
const setShowDrivers = () => {
  showSeasons.value = false;
  showDrivers.value = true;
};

//Season data
const { data: seasonData } = await useFetch(
  "http://ergast.com/api/f1/seasons.json?offset=64"
);
const { Seasons: seasons } = seasonData.value.MRData.SeasonTable;

//Driver data
const { data: driverData } = await useFetch(
  "https://ergast.com/api/f1/current/drivers.json"
);
const { Drivers: drivers } = driverData.value.MRData.DriverTable;
</script>
