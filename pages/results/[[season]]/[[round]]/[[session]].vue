<template>
  <main>
    <section class="m-auto mt-10 max-w-[1200px] rounded-xl bg-secondary pb-10 text-center md:px-10">
      <result-select />
      <div v-if="!data"><h2>No data available yet</h2></div>
      <div v-else>
        <div v-if="showOnlySeason" class="grid md:grid-cols-2 gap-10 justify-center align-center max-w-[800px] m-auto">
          <div v-for="race in data" class="min-w-[400px] mt-4 m-auto border-2 border-border rounded-xl bg-card">
          <h1 class="m-10 font-racing text-3xl underline my-4 rounded-xl m-auto">{{ race.raceName }}</h1>
          <schedule-results-card  :round="race.round" :season="season" />
        </div>
        </div>
        <div v-else>
          <h1 class="mt-10 font-racing text-3xl md:text-6xl">
            {{ data.raceName }}
          </h1>
          <h2 class="mb-6 text-xl md:text-2xl">{{ data.Circuit.circuitName }}</h2>
          <race-results-table :key="data" :results="data" :sessionType="session || 'race'" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const route = useRoute();
const { season, round, session } = route.params;
const showOnlySeason = season && !round && !session;
const showLatest = !season && !round && !session;

const apiEndpoint = 'https://ergast.com/api/f1';
const sessionType = session === 'race' ? 'results' : session;
const slug = showOnlySeason
  ? season
  : showLatest
  ? `current/last/results`
  : `${season}/${round}/${sessionType}`;

const { data, error } = await useFetch(`${apiEndpoint}/${slug}.json`, {
  transform: (data) => {
    return showOnlySeason ? data.MRData.RaceTable.Races.filter(({date, time}) => new Date(date + " " + time) < new Date()) : data.MRData.RaceTable.Races[0];
  },
});


if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found!',
    fatal: true,
  });
}

useHead({
  title: 'Podium Pulse | Results',
  meta: `Podium pulse formula 1 ${season ?? null} season Results`,
});
</script>
