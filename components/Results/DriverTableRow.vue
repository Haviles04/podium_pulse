<template>
  <tr>
    <td>{{ driver.position }}</td>
    <td class="hidden md:inline">{{ driver.grid || driver.position }}</td>
    <td class="hidden md:inline">
      {{ driver.number }}
    </td>
    <td :class="hasFastestLap">
      <nuxt-Link :to="`/drivers/${driver.Driver.driverId}`"
        ><p class="hidden md:inline hover:text-primary">
          {{ driver.Driver.givenName + ' ' + driver.Driver.familyName }}
        </p>
        <p class="inline md:hidden">
          {{ driver.Driver.familyName.slice(0, 3) }}
        </p>
      </nuxt-Link>
      <img class="hidden md:inline ml-2" :src="`https://flagsapi.com/${countryCode}/flat/24.png`" />
    </td>

    <td class="hidden md:inline">{{ driver.Constructor.name }}</td>
    <td v-if="!showQuali">{{ driverTime }}</td>
    <td v-else-if="driver.Q3">{{ driver.Q3 }}</td>
    <td v-else-if="driver.Q2">{{ driver.Q2 }}</td>
    <td v-else-if="driver.Q1">{{ driver.Q1 }}</td>
    <td v-else>DNF</td>
    <td v-if="sessionType !== 'qualifying'">{{ driver.points }}</td>
  </tr>
</template>

<script setup>
const { driver, sessionType } = defineProps(['driver', 'sessionType']);

const hasFastestLap = driver.FastestLap?.rank === '1' ? 'text-fastest' : null;

const countryCode = getCountryCode(driver.Driver.nationality);

const showQuali = sessionType === 'qualifying';

const driverTime = driver.status === 'Finished' ? driver.Time.time : driver.status;
</script>
