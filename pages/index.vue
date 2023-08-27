<template>
  <div
    class="bg-[url('/f1.jpg')] bg-no-repeat bg-center bg-fixed flex justify-center items-center flex-col pt-20 font-racing italic h-screen text-center"
  >
    <h1 class="text-8xl text-primary bg-slate-500 rounded-xl p-4">
      Podium Pulse
    </h1>
    <p class="text-4xl bg-slate-500 rounded-xl p-4">Fueling Your F1 Passion!</p>
  </div>
  <h2 class="text-7xl text-center text-bold italic font-racing mt-10">
    Last Race
  </h2>
  <h3 class="text-4xl text-center text-bold italic font-racing m-10">
    {{ lastRace.raceName }}
  </h3>
  <race-results-table :results="lastRace" />
</template>

<script setup>
const lastRace = await fetchSessionInfo(
  "http://ergast.com/api/f1/current/last/results.json"
);
</script>

<style scoped>
.hero {
  background: url("/f1.jpg") no-repeat center fixed;
}
</style>
