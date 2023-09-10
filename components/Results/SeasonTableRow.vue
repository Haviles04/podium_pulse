<template>
  <tr>
    <td>{{ race.round }}</td>
    <td class="hover:text-fastest hover:cursor-pointer">
      <NuxtLink :to="`/results/${race.season}/${race.round}/race`">{{
        race.raceName
      }}</NuxtLink>
    </td>
    <td>{{ race.date }}</td>
    <td>{{ race.time }}</td>
  </tr>
</template>

<script setup>
const { race } = defineProps(["race"]);
</script>
