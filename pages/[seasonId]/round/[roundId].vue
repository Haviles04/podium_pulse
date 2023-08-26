<template>
  <section>
    <div class="text-center p-10 [&>*]:p-4 [&>h2]:underline [&>h2]:text-2xl">
      <h1 class="text-4xl">{{ roundInfo.raceName }}</h1>
      <h2>Qualifying</h2>
      <p>{{ roundInfo.Qualifying.date }}</p>
      <RaceResultsTable
        v-if="qualiInfo"
        :results="qualiInfo.QualifyingResults"
      />
      <h2>Race</h2>
      <p>{{ roundInfo.date }}</p>
    </div>
    <!-- <RaceResultsTable v-if="raceResults" :results="raceResults" /> -->
  </section>
</template>

<script setup>
const { seasonId, roundId } = useRoute().params;

const { data: roundData, error: roundError } = await useFetch(
  `http://ergast.com/api/f1/${seasonId}/${roundId}.json`
);

if (roundError.value || !roundData.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
    fatal: true,
  });
}
const [roundInfo] = roundData.value.MRData.RaceTable.Races;

const { data: qualiData, error: qualiError } = await useFetch(
  `http://ergast.com/api/f1/${seasonId}/${roundId}/qualifying.json`
);

if (qualiError.value || !qualiData.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
    fatal: true,
  });
}

const [qualiInfo] = qualiData.value.MRData.RaceTable.Races;
console.log(qualiInfo);
</script>
