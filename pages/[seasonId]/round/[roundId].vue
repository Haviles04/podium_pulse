<template>
  <section>
    <div class="text-center pt-8 [&>*]:p-4 [&>h2]:text-2xl [&>h3]:text-xl">
      <h1 class="text-4xl font-racing">{{ sessionInfo.raceName }}</h1>
      <h2 class="text-2xl font-racing">
        {{ sessionInfo.Circuit.circuitName }}
      </h2>

      <select class="text-center text-black" v-model="sessionType">
        <option disabled default value="">Select Session</option>
        <option value="Qualifying">Qualifying</option>
        <option value="Race">Race</option>
      </select>

      <h3>{{ sessionType }}</h3>
      <RaceResultsTable :results="sessionInfo" />
    </div>
  </section>
</template>

<script setup>
const { seasonId, roundId } = useRoute().params;
const sessionType = ref("Race");

const sessionInfo = computed(() => {
  return sessionType.value === "Race" ? raceInfo : qualiInfo;
});

const qualiInfo = await fetchSessionInfo(
  `http://ergast.com/api/f1/${seasonId}/${roundId}/qualifying.json`
);

const raceInfo = await fetchSessionInfo(
  `http://ergast.com/api/f1/${seasonId}/${roundId}/results.json`
);

console.log(sessionInfo.value);
</script>
