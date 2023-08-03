<template>
  {{ seasonId }}
</template>

<script setup>
const { seasonId } = useRoute().params;
const { data: seasonData } = await useFetch(
  `http://ergast.com/api/f1/${seasonId}.json`
);

console.log(seasonData.value);
</script>
