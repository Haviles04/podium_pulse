<template>
  <main>
    <section class="text-center">
      <result-select />
      <div v-if="showOnlySeason">NEED TO MAKE SEASON TABLE</div>
      <div v-else>
        <h1 class="m-10 text-6xl font-racing">{{ raceData.raceName }}</h1>
        <race-results-table
          :results="raceData"
          :sessionType="session || 'race'"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
const route = useRoute();
const { season, round, session } = route.params;
const showOnlySeason = season && !round && !session;
let seasonData;
let raceData;

// SSR

if (showOnlySeason) {
  await useFetch(`http://ergast.com/api/f1/${season}.json`).then(
    ({ data }) => (seasonData = data.value.MRData.RaceTable.Races)
  );
} else {
  const sessionType = session === "qualifying" ? session : "results";
  await useFetch(
    `http://ergast.com/api/f1/${season}/${round}/${sessionType}.json`
  ).then(({ data }) => {
    raceData = data.value.MRData.RaceTable.Races[0];
  });
}
</script>
