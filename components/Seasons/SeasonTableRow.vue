<template>
  <tr>
    <td class="hidden md:block">{{ race.round }}</td>
    <td>{{ race.date }}</td>
    <td class="hover:cursor-pointer hover:text-fastest">
      <NuxtLink :to="`/results/${race.season}/${race.round}/race`">{{ race.raceName }}</NuxtLink>
    </td>

    <td>{{ time }}</td>
  </tr>
</template>

<script setup>
const { race } = defineProps(['race']);
const time = getLocalTimes(race.date, race.time);
</script>
