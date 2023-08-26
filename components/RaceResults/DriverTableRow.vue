<template>
  <td class="pt-2">{{ driver.position }}</td>
  <td>{{ driver.grid || driver.position }}</td>
  <td>
    {{ driver.number }}
  </td>
  <td :class="hasFastestLap">
    <nuxt-Link :to="`/drivers/${driver.Driver.driverId}`">
      {{ driver.Driver.givenName + " " + driver.Driver.familyName }}
    </nuxt-Link>
    <img
      class="inline ml-2"
      :src="`https://flagsapi.com/${countryCode}/flat/24.png`"
    />
  </td>

  <td>{{ driver.Constructor.name }}</td>
  <td v-if="!showQuali">{{ driverTime }}</td>
  <td v-else-if="driver.Q3">{{ driver.Q3 }}</td>
  <td v-else-if="driver.Q2">{{ driver.Q2 }}</td>
  <td v-else-if="driver.Q1">{{ driver.Q1 }}</td>
  <td v-else>DNF</td>
</template>

<script setup>
const { driver, sessionType } = defineProps(["driver", "sessionType"]);

const hasFastestLap =
  driver.FastestLap?.rank === "1" ? "text-violet-500" : null;

const countryCode = getCountryCode(driver.Driver.nationality);

const showQuali = sessionType === "quali";

const driverTime =
  driver.status === "Finished" ? driver.Time.time : driver.status;
</script>
