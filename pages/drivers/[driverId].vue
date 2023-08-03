<template>
  <div class="text-center">
    <p>{{ driver.givenName + " " + driver.familyName }}</p>
    <p>{{ driver.dateOfBirth }}</p>
    <p>{{ driver.permanentNumber }}</p>
    <p>{{ driver.nationality }}</p>
  </div>
</template>

<script setup>
const { driverId } = useRoute().params;

const { data: driverData } = await useFetch(
  `http://ergast.com/api/f1/drivers/${driverId}.json`
);

const [driver] = driverData.value.MRData.DriverTable.Drivers;
console.log(driver);
</script>
