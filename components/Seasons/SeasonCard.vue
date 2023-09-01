<template>
  <nuxt-link v-if="!futureRace" :to="`/${race.season}/round/${race.round}`">
    <div
      :class="` min-h-full rounded-xl border p-6 max-w-[275px] ${borderColor}`"
    >
      <p>Round: {{ race.round }}</p>
      <p>{{ race.date }}</p>
      <p>{{ race.raceName }}<span v-if="race.Sprint">*</span></p>
    </div>
  </nuxt-link>
</template>

<script setup>
const { race } = defineProps(["race"]);
const futureRace = Date.now() < Date.parse(race.FirstPractice?.date);
const currentWeekend =
  Date.now() >= Date.parse(race.FirstPractice?.date) &&
  Date.parse(race.date) >= Date.now();
const borderColor = currentWeekend ? "border-fastest" : "border-primary";
</script>
