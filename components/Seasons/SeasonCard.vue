<template>
  <nuxt-link v-if="!futureRace" :to="`/${race.season}/round/${race.round}`">
    <div
      :class="`rounded-xl border p-6 bg-zinc-700 shadow-lg shadow-zinc-500/50 ${borderColor}`"
    >
      <p>Round: {{ race.round }}</p>
      <p>{{ race.date }}</p>
      <p>{{ race.raceName }}</p>
    </div>
  </nuxt-link>
</template>

<script setup>
const { race } = defineProps(["race"]);

const futureRace = Date.now() < Date.parse(race.FirstPractice.date);
const currentWeekend =
  Date.now() > Date.parse(race.FirstPractice.date) &&
  Date.parse(race.date) > Date.now();
const borderColor = currentWeekend ? "border-purple-500" : "border-slate-500";
</script>
