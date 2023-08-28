<template>
  <section>
    <div class="text-center pt-8 [&>*]:p-4 [&>h2]:text-2xl [&>h3]:text-xl">
      <h1 class="text-4xl font-racing">{{ roundInfo.raceName }}</h1>
      <h2 class="text-2xl font-racing">
        {{ roundInfo.Circuit.circuitName }}
      </h2>

      <form>
        <input
          class="hidden peer/race"
          type="radio"
          id="race"
          value="race"
          v-model="sessionType"
        />
        <label
          for="race"
          class="bg-slate-500 p-4 text-xl m-4 rounded-xl peer-checked/race:bg-white peer-checked/race:text-slate-500 peer-checked/race:shadow-inner peer-checked/race:shadow-slate-500 cursor-pointer"
        >
          Race
        </label>

        <input
          class="hidden peer/quali"
          type="radio"
          id="quali"
          value="quali"
          v-model="sessionType"
        />
        <label
          for="quali"
          class="bg-slate-500 p-4 text-xl m-4 rounded-xl peer-checked/quali:bg-white peer-checked/quali:text-slate-500 peer-checked/quali:shadow-inner peer-checked/quali:shadow-slate-500 cursor-pointer"
        >
          Qualifying</label
        >
      </form>

      <RaceResultsTable
        :results="sessionInfo"
        :key="roundInfo.raceName + sessionType"
      />
    </div>
  </section>
</template>

<script setup>
const { seasonId, roundId } = useRoute().params;
const sessionType = ref("race");
let qualiInfo;
let raceInfo;

const sessionInfo = computed(() => {
  return sessionType.value === "race" ? raceInfo : qualiInfo;
});

const roundInfo = await fetchSessionInfo(
  `http://ergast.com/api/f1/${seasonId}/${roundId}.json`
);

await useFetch(
  `http://ergast.com/api/f1/${seasonId}/${roundId}/qualifying.json`,
  {
    onResponse({ request, response }) {
      qualiInfo = response._data.MRData.RaceTable.Races[0];
    },
  }
);

await useFetch(`http://ergast.com/api/f1/${seasonId}/${roundId}/results.json`, {
  onResponse({ request, response }) {
    raceInfo = response._data.MRData.RaceTable.Races[0];
  },
});
</script>
