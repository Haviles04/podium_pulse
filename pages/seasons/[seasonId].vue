<template>
  <section>
    {{ seasonId }}
  </section>
</template>

<script setup>
const { seasonId } = useRoute().params;

const { data: seasonData, error } = await useFetch(
  `http://ergast.com/api/f1/${seasonId}/races.json`
);

if (error.value || !seasonData.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
    fatal: true,
  });
}

const seasons = seasonData.value.MRData.RaceTable;
console.log(seasonData.value.MRData);
</script>
