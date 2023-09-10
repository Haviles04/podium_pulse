<template>
  <div
    v-if="loading"
    class="absolute flex justify-center items-center w-full h-[calc(100vh-60px)] bg-background opacity-50"
  >
    <Loader />
  </div>
  <form class="pt-10 [&>*]:m-2 flex justify-center items-start">
    <label class="text-primary" for="year"
      ><span class="text-2xl text-light">Year</span>
      <select
        v-model="selectedSeason"
        name="year"
        id="yearSelect"
        size="5"
        class="bg-background text-primary block no-scrollbar m-1 border-2 rounded-xl p-4 border-light"
        @change="handleSeasonChange"
      >
        <option v-for="year in years" :value="year">{{ year }}</option>
      </select>
    </label>
    <label class="text-primary" for="round"
      ><span class="text-2xl text-light">Round</span>
      <select
        v-model="selectedRound"
        name="round"
        id="roundSelect"
        size="5"
        class="bg-background text-primary block no-scrollbar m-1 border-2 rounded-xl p-4 border-light"
        @change="handleRoundChange"
      >
        <option v-for="race in raceList" :value="race.round">
          {{ race.raceName }}
        </option>
      </select>
    </label>
    <label class="text-primary" for="session"
      ><span class="text-2xl text-light">Session</span>
      <select
        v-model="selectedSession"
        name="session"
        id="sessionSelect"
        size="5"
        class="bg-background text-primary block no-scrollbar m-1 border-2 rounded-xl p-4 border-light"
        @change="handleRoundChange"
      >
        <option value="race">Race</option>
        <option value="qualifying">Qualifying</option>
      </select>
    </label>
  </form>
</template>

<script setup>
const router = useRouter();
const { season, round, session } = useRoute().params;
const years = getLast10Seasons();
const selectedSeason = ref(season);
const selectedRound = ref(round);
const selectedSession = ref(session);
const loading = ref(false);

const handleSeasonChange = () => {
  loading.value = true;
  router.push({
    path: `/results/${selectedSeason.value}`,
  });
};

const handleRoundChange = () => {
  loading.value = true;
  router.push({
    path: `/results/${selectedSeason.value}/${selectedRound.value}/${
      selectedSession.value || "race"
    }`,
  });
};

// SSR
const { data: seasonData } = await useFetch(
  `http://ergast.com/api/f1/${season}.json`
);
const seasonRaces = seasonData.value.MRData.RaceTable.Races;
const raceList = seasonRaces
  .filter(({ date }) => Date.now() >= Date.parse(date))
  .map(({ raceName, round }) => ({ raceName, round }));
</script>
