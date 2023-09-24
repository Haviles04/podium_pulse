<template>
  <section>
    <div class="text-center">
      <h2 class="text-6xl font-racing my-6">Driver Profile</h2>
      <div class="max-w-[800px] h-fit m-auto">
        <img v-if="imageExist" :src="imgSource" @error="imageExist = false" />
      </div>
      <div class="bg-secondary max-w-[800px] m-auto">
        <p class="font-racing text-4xl inline-block mr-4">
          {{ driver.permanentNumber }}
        </p>
        <p class="text-2xl inline-block">
          {{ driver.givenName + " " + driver.familyName }}
        </p>
        <img
          class="block m-auto"
          :src="`https://flagsapi.com/${countryCode}/flat/48.png`"
        />
        <p>Nationality: {{ driver.nationality }}</p>
        <p>DOB: {{ driver.dateOfBirth }}</p>
        <div
          class="max-w-fit flex m-auto mt-4 justify-center [&>span]:p-4 [&>b]:block"
        >
          <span
            >Points
            <b class="block">{{ standings.points }}</b>
          </span>
          <span class="border-r-2 border-l-2 border-primary">
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

const { data: driver } = await useFetch(
  `http://ergast.com/api/f1/drivers/${driverId}.json`,
  {
    transform: (data) => {
      return data.MRData.DriverTable.Drivers[0];
    },
  }
);
if (!driver.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
    fatal: true,
  });
}
const countryCode = getCountryCode(driver.value.nationality);
const imgSource = `/images/drivers/${driver.value.familyName.toLowerCase()}.png`;

const { data: standings } = await useFetch(
  `http://ergast.com/api/f1/current/driverStandings.json`,
  {
    transform: (data) => {
      return data.MRData.StandingsTable.StandingsLists[0].DriverStandings.filter(
        ({ Driver }) => driverId === Driver.driverId
      )[0];
    },
  }
);

console.log(standings);
</script>
