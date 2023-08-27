<template>
  <div class="text-center">
    <h2 class="text-6xl font-racing my-6">Driver Profile</h2>
    <p class="text-2xl">{{ driver.givenName + " " + driver.familyName }}</p>
    <img
      class="inline ml-2"
      :src="`https://flagsapi.com/${countryCode}/flat/48.png`"
    />
    <p>Nationality: {{ driver.nationality }}</p>
    <p>DOB: {{ driver.dateOfBirth }}</p>
    <p>Number: {{ driver.permanentNumber }}</p>
  </div>
</template>

<script setup>
const { driverId } = useRoute().params;
const { data: driverData, error } = await useFetch(
  `http://ergast.com/api/f1/drivers/${driverId}.json`
);

if (error.value || !driverData.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
    fatal: true,
  });
}

const [driver] = driverData.value.MRData.DriverTable.Drivers;
const countryCode = getCountryCode(driver.nationality);
const currentYear = new Date().getFullYear();
</script>
