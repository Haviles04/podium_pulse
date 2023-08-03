<template>
  <div class="text-center pt-20 font-racing italic">
    <h1 class="text-5xl text-primary">Podium Pulse</h1>
    <p class="text-xl">Fueling Your F1 Passion!</p>
  </div>
  <race-results-table :results="lastRace" />
</template>

<script setup>
const { data } = await useFetch(
  "http://ergast.com/api/f1/current/last/results.json"
);
const lastRace = data.value.MRData.RaceTable;
</script>
