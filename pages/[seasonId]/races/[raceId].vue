<template>
    <section>
        <RaceResultsTable :results="raceResults" />
    </section>
</template>

<script setup>
const { seasonId, raceId } = useRoute().params;

const { data: raceData, error } = await useFetch(
  `http://ergast.com/api/f1/${seasonId}/${raceId}/results.json`
);

const raceResults = raceData.value.MRData.RaceTable;
</script>