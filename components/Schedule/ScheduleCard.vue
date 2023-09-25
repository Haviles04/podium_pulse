<template>
  <div class="mx-6 my-4 w-full rounded-xl border-2 bg-card">
    <div class="w-full border-b-2 px-4">
      <h2 class="text-xl">{{ race.raceName }}</h2>
      <h3>{{ race.Circuit.circuitName }}</h3>
    </div>
    <times-card v-if="futureRace" :race="race" />
    <schedule-results-card v-else :round="race.round" :season="race.season" />
  </div>
</template>

<script setup>
const { race } = defineProps(['race']);
console.log(race);
const futureRace = new Date(race.date) > new Date();
</script>
