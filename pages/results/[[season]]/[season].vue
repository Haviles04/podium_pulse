<template>
  <div
    v-if="loading"
    class="absolute flex justify-center items-center w-screen h-screen bg-background opacity-50"
  >
    <Loader />
  </div>
  <section class="text-center">
    <div class="flex justify-center items-start">
      <result-select
        v-model="selectedSeason"
        :items="years"
        labels="years"
        @handleResultsChange="handleSeasonChange"
      />
      <result-select
        v-model="selectedRound"
        :items="raceList"
        labels="Round"
        @handleResultsChange="handleRoundChange"
      />
    </div>
  </section>
</template>

<script setup>
const route = useRoute();
const { season } = route.params;
const selectedSeason = ref(season);
const years = getLast10Seasons();
</script>
