<template>
  <section>
    <div class="text-center">
      <h2 class="text-6xl font-racing my-6">Driver Profile</h2>
      <p class="text-2xl">{{ driver.givenName + " " + driver.familyName }}</p>
      <p class="font-racing text-4xl">{{ driver.permanentNumber }}</p>
      <img
        class="inline ml-2"
        :src="`https://flagsapi.com/${countryCode}/flat/48.png`"
      />
      <p>Nationality: {{ driver.nationality }}</p>
      <p>DOB: {{ driver.dateOfBirth }}</p>
    </div>
  </section>
</template>

<script setup>
const { driverId } = useRoute().params;

const currentYear = new Date().getFullYear();

const { data: driver, error } = await useFetch(
  `http://ergast.com/api/f1/drivers/${driverId}.json`, {
    transform: (data) => { return data.MRData.DriverTable.Drivers[0]; }
  }
);

if (error.value || !driver.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
    fatal: true,
  });
}

const { data: driverResults, error: driverResultsError } = await useFetch(
  `http://ergast.com/api/f1/${currentYear}/drivers/${driverId}/results.json`
);

const lastRaces = driverResults.value.MRData.RaceTable.Races.slice(-5);

const countryCode = getCountryCode(driver.value.nationality);
</script>
