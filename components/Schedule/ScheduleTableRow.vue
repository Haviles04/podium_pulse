<template>
  <tr>
    <td class="hidden md:block">{{ race.round }}</td>
    <td>{{ date }}</td>
    <td class="hover:text-fastest">
      <NuxtLink :to="`/results/${year}/${race.round}`">{{ race.raceName }}</NuxtLink>
    </td>
    <td>{{ time }}</td>
  </tr>
</template>

<script setup>
const { race } = defineProps(['race']);
const year = new Date(race.date).getFullYear();
const date = new Date(race.date).toLocaleDateString();
const time = getLocalTimes(race.date, race.time);
</script>
