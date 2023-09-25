<template>
  <main>
    <section class="text-center">
      <result-select />
      <div v-if="showOnlySeason">
        <h1 class="m-10 text-6xl font-racing">{{ data[0].season }}</h1>
        <season-races-table :races="data" />
      </div>
      <div v-else>
        <h1 class="mt-10 text-3xl md:text-6xl font-racing">
          {{ data.raceName }}
        </h1>
        <h2 class="mb-6 text-xl md:text-2xl">{{ data.Circuit.circuitName }}</h2>
        <race-results-table :key="data" :results="data" :sessionType="session || 'race'" />
      </div>
    </section>
  </main>
</template>

<script setup>
const route = useRoute();
const { season, round, session } = route.params;
const showOnlySeason = season && !round && !session;
const showLatest = !season && !round && !session;

const apiEndpoint = 'http://ergast.com/api/f1';
const sessionType = session === 'qualifying' ? session : 'results';
const slug = showOnlySeason
  ? season
  : showLatest
  ? `current/last/results`
  : `${season}/${round}/${sessionType}`;

const { data } = await useFetch(`${apiEndpoint}/${slug}.json`, {
  transform: (data) => {
    return showOnlySeason ? data.MRData.RaceTable.Races : data.MRData.RaceTable.Races[0];
  },
});

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found!',
    fatal: true,
  });
}
</script>
