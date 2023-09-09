<template>
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
        @handleResultsChange="null"
      />
    </form>
  </section>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const { season } = route.params;
const loading = ref(false);
const selectedSeason = ref(season);
const selectedRound = ref();
const selectedSession = ref("race");
const years = getLast10Seasons();

const handleSeasonChange = () => {
  loading.value = false;
  router.push({
    path: `/results/${selectedSeason.value}`,
  });
};

const handleRoundChange = () => {
  loading.value = false;
  router.push({
    path: `/results/${selectedSeason.value}/${selectedRound.value}/race`,
  });
};

//SSR
const { data: seasonData } = await useFetch(
  `http://ergast.com/api/f1/${selectedSeason.value}.json`
);
const seasonRaces = seasonData.value.MRData.RaceTable.Races;
const raceList = seasonRaces
  .filter(({ FirstPractice }) => Date.now() >= Date.parse(FirstPractice.date))
  .map(({ raceName, round }) => ({ raceName, round }));
</script>
