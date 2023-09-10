<template>
  <main>
    <section class="text-center">
      <result-select />
      <div v-if="showOnlySeason">Season</div>
      <div v-else>
        <h1 class="m-10 text-6xl font-racing">{{ race.raceName }}</h1>
        <race-results-table :results="race" :sessionType="session" />
      </div>
    </section>
  </main>
</template>

<script setup>
const route = useRoute();
const { season, round, session } = route.params;
const loading = ref(false);
const showOnlySeason = season && !round && !session;

// SSR
let race =
  !season && !round && !session
    ? await fetchSessionInfo(
        "http://ergast.com/api/f1/current/last/results.json"
      )
    : await fetchSessionInfo(
        `http://ergast.com/api/f1/${season}/${round}/${
          session === "race" ? "results" : "qualifying"
        }.json`
      );
</script>
