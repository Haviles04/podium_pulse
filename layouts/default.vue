<template>
  <nav
    class="min-h-[50px] flex items-center justify-between border-b-2 border-primary"
  >
    <p class="mx-6"><nuxt-link to="/">Podium Pulse</nuxt-link></p>
    <div class="hidden md:block flex items-center z-10 relative">
      <nuxt-link to="/schedule" class="mx-8">Schedule</nuxt-link>
      <span @mouseleave="listTypes = ''">
        <button class="mx-8" @mouseenter="setSessionType('seasons')">
          <nuxt-link to="/seasons"> Seasons </nuxt-link>
        </button>
        <button class="mx-8" @mouseenter="setSessionType('drivers')">
          <nuxt-link to="/drivers">Drivers</nuxt-link>
        </button>
        <div
          v-if="showList"
          class="absolute top-1 pt-10 right-6 bg-background px-8 py-2 rounded-xl min-w-[200px] text-center -z-10"
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
      </span>
    </div>
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

const showList = computed(() => {
  return listTypes.value === "drivers" || listTypes.value === "seasons";
});

const listData = computed(() => {
  return listTypes.value === "seasons" ? seasons : drivers;
});

const listLink = (data) => {
  if (listTypes.value === "seasons") {
    return { path: `/seasons/${data?.season}` };
  }
  return { path: `/drivers/${data?.driverId}` };
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
