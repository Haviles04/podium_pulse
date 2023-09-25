<template>
  <main>
    <div
      class="flex h-[75vh] flex-col items-center justify-center bg-[url('/f1.jpg')] bg-fixed bg-center bg-no-repeat pt-20 text-center font-racing italic md:h-[50vh]"
    >
      <h1 class="rounded-xl bg-secondary p-4 text-6xl md:text-8xl">Podium Pulse</h1>
      <p class="rounded-xl border-b-2 border-primary bg-secondary p-4 text-2xl md:text-4xl">
        Fueling Your F1 Passion!
      </p>
    </div>
    <News />
    <div class="mt-10 bg-secondary p-2">
      <h2
        class="text-bold m-auto mt-10 w-fit border-b-2 border-primary text-center font-racing text-4xl italic md:text-7xl"
      >
        Last Race
      </h2>
      <h3 class="text-bold m-10 text-center font-racing text-2xl italic md:text-4xl">
        {{ lastRace.raceName }}
      </h3>
      <race-results-table :results="lastRace" sessionType="race" />
    </div>
  </main>
</template>

<script setup>
const lastRace = await fetchSessionInfo('https://ergast.com/api/f1/current/last/results.json');
</script>

<style scoped>
.hero {
  background: url('/f1.jpg') no-repeat center fixed;
}
</style>
