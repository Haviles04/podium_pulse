<template>
  <section class="text-center">
    <h1 class="text-4xl mt-10">{{ seasonId }}</h1>
    <div  class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 m-10">

      <SeasonCard v-for="race in seasonRaces" :race="race"/>

  </div>
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

const seasonRaces = seasonData.value.MRData.RaceTable.Races;
</script>
