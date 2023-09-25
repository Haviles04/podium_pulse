<template>
  <div
    v-if="loading"
    class="absolute flex justify-center items-center w-full h-[calc(100vh-60px)] bg-background opacity-50"
  >
    <Loader />
  </div>
  <form class="pt-10 [&>*]:m-2 flex-column md:flex justify-center items-start">
    <label class="text-primary text-center" for="year"
      ><span class="text-2xl text-light hidden md:block">Year</span>
      <select
        v-model="selectedSeason"
        name="year"
        id="yearSelect"
        size="1"
        class="bg-background text-primary block no-scrollbar w-full md:w-fit m-auto md:m-1 border-2 rounded-xl p-4 border-light"
        @change="handleSeasonChange"
      >
        <option disabled selected>Year</option>
        <option v-for="year in years" :value="year">{{ year }}</option>
      </select>
    </label>
    <label class="text-primary" for="round"
      ><span class="text-2xl text-light hidden md:block">Round</span>
      <select
        v-model="selectedRound"
        name="round"
        id="roundSelect"
        size="1"
        class="bg-background text-primary block no-scrollbar w-full md:w-fit m-auto md:m-1 border-2 rounded-xl p-4 border-light"
        @change="handleRoundChange"
      >
        <option disabled selected>Round</option>
        <option v-for="race in data" :value="race.round">
          {{ race.raceName }}
        </option>
      </select>
    </label>
    <label class="text-primary" for="session"
      ><span class="text-2xl text-light hidden md:block">Session</span>
      <select
        v-model="selectedSession"
        name="session"
        id="sessionSelect"
        :disabled="!selectedRound"
        class="bg-background text-primary block no-scrollbar w-full md:w-fit m-auto md:m-1 border-2 rounded-xl p-4 border-light"
        @change="handleRoundChange"
      >
        <option selected disabled>Session</option>
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
const currentYear = new Date().getFullYear();
const selectedSeason = ref(season || currentYear);
const selectedRound = ref(round || 1);
const selectedSession = ref(session || 'race');
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
    path: `/results/${selectedSeason.value}/${selectedRound.value || 1}/${selectedSession.value || 'race'}`,
  });
};

// SSR
const { data } = await useFetch(`http://ergast.com/api/f1/${selectedSeason.value}.json`, {
  transform: (data) => {
    return data.MRData.RaceTable.Races.filter(({ date }) => Date.now() >= Date.parse(date)).map(
      ({ raceName, round }) => ({ raceName, round }),
    );
  },
});
</script>
