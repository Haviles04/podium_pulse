<template>
  <main>
    <div
      v-if="loading"
      class="absolute flex justify-center items-center w-screen h-screen bg-background opacity-50"
    >
      <Loader />
    </div>
    <section class="text-center">
      <form class="pt-10 [&>*]:m-6 flex justify-center align-center">
        <result-select
          v-model="selectedSeason"
          :items="years"
          label="Season"
          @handleResultsChange="handleSeasonChange"
        />
        <result-select
          v-model="selectedRound"
          :items="raceList"
          label="Round"
          @handleResultsChange="handleRoundChange"
        />
        <result-select
          v-model="selectedSession"
          :items="['race', 'qualifying']"
          label="Round"
          @handleResultsChange="handleRoundChange"
        />
      </form>
      <h1 class="m-10 text-6xl font-racing">{{ race.raceName }}</h1>
      <race-results-table :results="race" :sessionType="selectedSession" />
    </section>
  </main>
</template>

<script setup>
const loading = ref(false);
const route = useRoute();
const router = useRouter();
const { season, round, session } = route.params;
const selectedSeason = ref(season);
const selectedRound = ref(round);
const selectedSession = ref(session || "race");
const years = getLast10Seasons();

const handleSeasonChange = () => {
  loading.value = true;
  router.push({
    path: `/results/${selectedSeason.value}`,
  });
};

const handleRoundChange = () => {
  loading.value = true;
  router.push({
    path: `/results/${selectedSeason.value}/${selectedRound.value}/${selectedSession.value}`,
  });
};

//SSR//
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
selectedSeason.value = race.season;
selectedRound.value = race.round;

const { data: seasonData } = await useFetch(
  `http://ergast.com/api/f1/${selectedSeason.value}.json`
);
const seasonRaces = seasonData.value.MRData.RaceTable.Races;
const raceList = seasonRaces.map(({ raceName, round }) => ({
  raceName,
  round,
}));
</script>
