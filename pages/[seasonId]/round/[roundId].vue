<template>
  <section>
    <div class="text-center pt-8 [&>*]:p-4 [&>h2]:text-2xl [&>h3]:text-xl">
      <h1 class="text-4xl font-racing border-b-2 border-primary w-fit m-auto">
        {{ roundInfo.raceName }}
      </h1>
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
          class="bg-slate-500 p-4 text-xl m-4 rounded-xl peer-checked/race:bg-white peer-checked/race:text-primary peer-checked/race:shadow-inner peer-checked/race:shadow-primary cursor-pointer"
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
          class="bg-slate-500 p-4 text-xl m-4 rounded-xl peer-checked/quali:bg-white peer-checked/quali:text-primary peer-checked/quali:shadow-inner peer-checked/quali:shadow-primary cursor-pointer"
        >
          Qualifying</label
        >
      </form>

      <RaceResultsTable
        :results="sessionInfo"
        :sessionType="sessionType"
        :key="roundInfo.raceName + sessionType"
        :errors="errors"
      />
    </div>
  </section>
</template>

<script setup>
const { seasonId, roundId } = useRoute().params;
const sessionType = ref("race");
const errors = [];

const sessionInfo = computed(() => {
  return sessionType.value === "race"
    ? raceData.value?.MRData.RaceTable.Races[0]
    : qualiData.value?.MRData.RaceTable.Races[0];
});

const roundInfo = await fetchSessionInfo(
  `http://ergast.com/api/f1/${seasonId}/${roundId}.json`
);

const [
  { data: qualiData, error: qualiError },
  { data: raceData, error: raceError },
] = await Promise.all([
  useFetch(`http://ergast.com/api/f1/${seasonId}/${roundId}/qualifying.json`),
  useFetch(`http://ergast.com/api/f1/${seasonId}/${roundId}/results.json`),
]);
if (qualiError.value || raceError.value) {
  if (qualiError.value) errors.push("quali");
  if (raceError.value) errors.push("race");
}
</script>
