<template>
  <main>
    <div
      v-if="loading"
      class="absolute flex justify-center items-center w-screen h-screen bg-background opacity-50"
    >
      <Loader />
    </div>
    <section class="text-center">
      <form class="mt-10">
        <label for="years" class="align-text-top">Year</label>
        <select
          v-model="selectedSeason"
          name="years"
          id="yearSelect"
          size="5"
          class="bg-background text-primary"
          @change="handleChange"
        >
          <option v-for="year in years">{{ year }}</option>
        </select>

        <label for="race">Track</label>
        <select
          v-model="selectedRound"
          name="race"
          id="raceSelect"
          size="5"
          class="bg-background text-primary"
          @change="handleChange"
        >
          <option v-for="race in seasonRaces" :value="race.round">
            {{ race.raceName }}
          </option>
        </select>

        <label for="session">session</label>
        <select
          v-model="selectedSession"
          name="session"
          id="sessionSelect"
          size="2"
          class="bg-background text-primary"
          @change="handleChange"
        >
          <option value="qualifying">Qualifying</option>
          <option value="race">Race</option>
        </select>
      </form>
      <h1 class="m-10 text-6xl font-racing">{{ race.raceName }}</h1>
      <race-results-table :results="race" :sessionType="selectedSession" />
    </section>
  </main>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const { season, round, session } = route.params;
const loading = ref(false);
const selectedSeason = ref(season);
const selectedRound = ref(round);
const selectedSession = ref(session || "race");
const years = getLast10Seasons();
const race =
  !season && !round && !session
    ? await fetchSessionInfo(
        "http://ergast.com/api/f1/current/last/results.json"
      )
    : await fetchSessionInfo(
        `http://ergast.com/api/f1/${season}/${round}/${
          session === "race" ? "results" : session
        }.json`
      );
selectedSeason.value = race.season;
selectedRound.value = race.round;

const { data: seasonData } = await useFetch(
  `http://ergast.com/api/f1/${selectedSeason.value}.json`
);
const seasonRaces = seasonData.value.MRData.RaceTable.Races;

const handleChange = () => {
  loading.value = true;
  router.push({
    path: `/results/${selectedSeason.value}/${selectedRound.value}/${selectedSession.value}`,
  });
};
</script>
