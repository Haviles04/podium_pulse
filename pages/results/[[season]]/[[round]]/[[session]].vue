<template>
  <main>
    <div
      v-if="loading"
      class="absolute flex justify-center items-center w-screen h-screen bg-background opacity-50"
    >
      <Loader />
    </div>
    <section class="text-center">
      <form class="mt-10 flex justify-center items-start [&>*]:m-8">
        <label for="years"
          ><p class="text-2xl">Year</p>
          <select
            v-model="selectedSeason"
            name="years"
            id="yearSelect"
            size="5"
            class="bg-background text-primary block"
            @change="handleChange"
          >
            <option v-for="year in years">{{ year }}</option>
          </select>
        </label>
        <label for="race" class="block"
          ><p class="text-2xl">Track</p>
          <select
            v-model="selectedRound"
            name="race"
            id="raceSelect"
            size="5"
            class="bg-background text-primary block"
            @change="handleChange"
          >
            <option v-for="race in seasonRaces" :value="race.round">
              {{ race.raceName }}
            </option>
          </select>
        </label>

        <label for="session" class="block"
          ><p class="text-2xl">Session</p>
          <select
            v-model="selectedSession"
            name="session"
            id="sessionSelect"
            size="2"
            class="bg-background text-primary block"
            @change="handleChange"
          >
            <option value="qualifying">Qualifying</option>
            <option value="race">Race</option>
          </select>
        </label>
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
