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
          value="Race"
          v-model="sessionType"
        />
        <label
          for="race"
          class="bg-slate-500 p-4 text-xl m-4 rounded-xl peer-checked/race:bg-white peer-checked/race:text-slate-500 cursor-pointer"
        >
          Race
        </label>

        <input
          class="hidden peer/quali"
          type="radio"
          id="quali"
          value="Qualifying"
          v-model="sessionType"
        />
        <label
          for="quali"
          class="bg-slate-500 p-4 text-xl m-4 rounded-xl peer-checked/quali:bg-white peer-checked/quali:text-slate-500 cursor-pointer"
        >
          Qualifying</label
        >
      </form>

      <RaceResultsTable
        :results="sessionInfo"
        :key="roundInfo.raceName + sessionType"
        :errorMessage="errorMessage"
      />
    </div>
  </section>
</template>

<script setup>
const { seasonId, roundId } = useRoute().params;
const sessionType = ref("Race");

const sessionInfo = computed(() => {
  if (raceInfo && sessionType.value === "Race") return raceInfo;
  if (qualiInfo && sessionType.value === "Qualifying") return qualiInfo;
});

const errorMessage = computed(() => {
  return qualiError.value || raceError.value ? "Error loading data" : null;
});

const { data: roundData, error: roundError } = await useFetch(
  `http://ergast.com/api/f1/${seasonId}/${roundId}.json`,
  {
    onResponseError() {
      throw createError({
        statusCode: roundError.value.statusCode,
        statusMessage: roundError.value.message,
        fatal: true,
      });
    },
  }
);
const [roundInfo] = roundData.value.MRData.RaceTable.Races;

const { data: qualiData, error: qualiError } = await useFetch(
  `http://ergast.com/api/f1/${seasonId}/${roundId}/qualifying.json`
);
const [qualiInfo] = qualiData.value.MRData.RaceTable.Races;

const { data: raceData, error: raceError } = await useFetch(
  `http://ergast.com/api/f1/${seasonId}/${roundId}/results.json`
);
const [raceInfo] = raceData.value.MRData.RaceTable.Races;
</script>
