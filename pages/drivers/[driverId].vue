<template>
  <section>
    <div class="text-center">
      <h2 class="my-6 font-racing text-6xl">Driver Profile</h2>
      <div class="m-auto h-fit max-w-[800px]">
        <img v-if="imageExist" :src="imgSource" @error="imageExist = false" />
      </div>
      <div class="m-auto max-w-[800px] bg-secondary">
        <p class="mr-4 inline-block font-racing text-4xl">
          {{ driver.permanentNumber }}
        </p>
        <p class="inline-block text-2xl">
          {{ driver.givenName + ' ' + driver.familyName }}
        </p>
        <img class="m-auto block" :src="`https://flagsapi.com/${countryCode}/flat/48.png`" />
        <p>Nationality: {{ driver.nationality }}</p>
        <p>DOB: {{ driver.dateOfBirth }}</p>
        <div class="m-auto mt-4 flex max-w-fit justify-center [&>b]:block [&>span]:p-4">
          <span
            >Points
            <b class="block">{{ standings.points }}</b>
          </span>
          <span class="border-l-2 border-r-2 border-primary">
            Position <b class="block">{{ standings.position }}</b>
          </span>
          <span>
            Wins <b class="block">{{ standings.wins }}</b>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { driverId } = useRoute().params;
const currentYear = new Date().getFullYear();
const imageExist = ref(true);

const { data: driver } = await useFetch(`http://ergast.com/api/f1/drivers/${driverId}.json`, {
  transform: (data) => {
    return data.MRData.DriverTable.Drivers[0];
  },
});
if (!driver.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
    fatal: true,
  });
}
const countryCode = getCountryCode(driver.value.nationality);
const imgSource = `/images/drivers/${driver.value.familyName.toLowerCase()}.png`;

const { data: standings } = await useFetch(`http://ergast.com/api/f1/current/driverStandings.json`, {
  transform: (data) => {
    return data.MRData.StandingsTable.StandingsLists[0].DriverStandings.filter(
      ({ Driver }) => driverId === Driver.driverId,
    )[0];
  },
});

console.log(standings);
</script>
