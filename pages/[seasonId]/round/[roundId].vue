<template>
  <section>
    <div class="text-center p-10 [&>*]:p-4 [&>h2]:text-2xl [&>h3]:text-xl">
      <h1 class="text-4xl">{{ roundInfo.raceName }}</h1>
      <h2 class="text-2xl">{{ roundInfo.Circuit.circuitName }}</h2>
      <h3>Qualifying</h3>
      <p>{{ roundInfo.Qualifying?.date }}</p>
      <RaceResultsTable v-if="qualiInfo" :results="qualiInfo" />
      <h3>Race</h3>
      <p>{{ roundInfo.date }}</p>
    </div>
    <RaceResultsTable v-if="raceInfo" :results="raceInfo" />
  </section>
</template>

<script setup>
const { seasonId, roundId } = useRoute().params;

const roundInfo = await fetchSessionInfo(
  `http://ergast.com/api/f1/${seasonId}/${roundId}.json`
);

const qualiInfo = await fetchSessionInfo(
  `http://ergast.com/api/f1/${seasonId}/${roundId}/qualifying.json`
);

const raceInfo = await fetchSessionInfo(
  `http://ergast.com/api/f1/${seasonId}/${roundId}/results.json`
);
</script>
