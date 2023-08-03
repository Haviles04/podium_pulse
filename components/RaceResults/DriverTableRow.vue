<template>
  <td class="pt-2">{{ driver.position }}</td>
  <td>{{ driver.grid }}</td>
  <td>
    {{ driver.number }}
  </td>
  <td :class="hasFastestLap">
    <NuxtLink :to="`/drivers/${driver.Driver.driverId}`">
      {{ driver.Driver.givenName + " " + driver.Driver.familyName }}
    </NuxtLink>
    <img
      class="inline ml-2"
      :src="`https://flagsapi.com/${countryCode}/flat/24.png`"
    />
  </td>

  <td>{{ driver.Constructor.name }}</td>
  <td v-if="driver.Time">{{ driver.Time.time }}</td>
  <td v-else>DNF</td>
</template>

<script setup>
const { driver } = defineProps(["driver"]);

const hasFastestLap =
  driver.FastestLap?.rank === "1" ? "text-violet-500" : null;

const countryCode = getCountryCode(driver.Driver.nationality);
</script>
