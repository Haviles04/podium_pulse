<template>
  <main>
    <div
      class="bg-[url('/f1.jpg')] bg-no-repeat bg-center bg-fixed flex justify-center items-center flex-col pt-20 font-racing italic h-[75vh] md:h-[50vh] text-center"
    >
      <h1 class="text-6xl md:text-8xl bg-secondary rounded-xl p-4">Podium Pulse</h1>
      <p class="text-2xl md:text-4xl bg-secondary border-b-2 border-primary rounded-xl p-4">
        Fueling Your F1 Passion!
      </p>
    </div>
    <h2 class="text-center text-4xl md:text-7xl font-racing italic text-bold mt-6">Recent News</h2>
    <News />
    <div class="bg-secondary mt-10 p-2">
      <h2
        class="text-4xl md:text-7xl text-center text-bold italic font-racing mt-10 border-b-2 border-primary w-fit m-auto"
      >
        Last Race
      </h2>
      <h3 class="text-2xl md:text-4xl text-center text-bold italic font-racing m-10">
        {{ lastRace.raceName }}
      </h3>
      <race-results-table :results="lastRace" sessionType="race" />
    </div>
  </main>
</template>

<script setup>
const lastRace = await fetchSessionInfo('http://ergast.com/api/f1/current/last/results.json');
</script>

<style scoped>
.hero {
  background: url('/f1.jpg') no-repeat center fixed;
}
</style>
