<template>
  <tr>
    <td class="p-2">{{ position }}</td>
    <td class="hover:text-primary">
      <nuxt-link :to="`/drivers/${Driver.driverId}`">{{
        Driver.givenName + ' ' + Driver.familyName
      }}</nuxt-link>
      <img
        class="ml-2 hidden md:inline"
        :src="`https://flagsapi.com/${countryCode}/flat/24.png`"
        :alt="`${driver.Driver.nationality} flag`"
      />
    </td>
    <td>{{ points }}</td>
  </tr>
</template>

<script setup>
const { driver } = defineProps(['driver']);
const { position, Driver, points } = driver;

const countryCode = getCountryCode(Driver.nationality);
</script>
