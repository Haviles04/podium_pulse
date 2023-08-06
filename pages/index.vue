<template>
  <div
    class="hero flex justify-center items-center flex-col pt-20 font-racing italic h-screen bg-[url('./public/f1.jpg')]]"
  >
    <h1 class="text-8xl text-primary bg-slate-500 rounded-xl p-4">
      Podium Pulse
    </h1>
    <p class="text-4xl bg-slate-500 rounded-xl p-4">Fueling Your F1 Passion!</p>
  </div>
  <h2 class="text-7xl text-center text-bold italic font-racing mt-10">
    Last Race
  </h2>
  <race-results-table :results="lastRace" />
</template>

<script setup>
const { data } = await useFetch(
  "http://ergast.com/api/f1/current/last/results.json"
);
const lastRace = data.value.MRData.RaceTable;
</script>

<style scoped>
.hero {
  background: url("/public/f1.jpg") no-repeat center fixed;
}
</style>
