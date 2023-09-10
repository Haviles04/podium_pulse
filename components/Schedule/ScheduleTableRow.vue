<template>
  <tr>
    <td class="hidden md:block">{{ race.round }}</td>
    <td>{{ date }}</td>
    <td>{{ race.raceName }}</td>
    <td>{{ time }}</td>
  </tr>
</template>

<script setup>
const { race } = defineProps(["race"]);
const date = new Date(race.date).toLocaleDateString();
const time = getLocalTimes(race.date, race.time);
</script>
