<template>
  <tr class="[&>*]:py-4">
    <td v-if="!showQuali">{{ driver.position }}</td>
    <td>{{ driver.grid || driver.position }}</td>
    <td class="hidden md:table-cell">
      {{ driver.number }}
    </td>
    <td :class="hasFastestLap">
      <nuxt-Link :to="`/drivers/${driver.Driver.driverId}`"
        ><p class="hidden hover:text-primary md:inline">
          {{ driver.Driver.givenName + ' ' + driver.Driver.familyName }}
        </p>
        <p class="table-cell md:hidden">
          {{ driver.Driver.familyName.slice(0, 3) }}
        </p>
      </nuxt-Link>
      <img
        class="ml-2 hidden md:inline"
        :src="`https://flagsapi.com/${countryCode}/flat/24.png`"
        :alt="`${driver.Driver.nationality} flag`"
      />
    </td>

    <td class="hidden md:table-cell">{{ driver.Constructor.name }}</td>
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

const hasFastestLap =
  driver.FastestLap?.rank === '1' ? 'underline decoration-fastest decoration-2 underline-offset-4' : null;

const countryCode = getCountryCode(driver.Driver.nationality);

const showQuali = sessionType === 'qualifying';

const driverTime = driver.status === 'Finished' ? driver.Time.time : driver.status;
</script>
