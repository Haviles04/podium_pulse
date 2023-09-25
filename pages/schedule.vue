<template>
  <section
    class="m-auto min-w-[300px] max-w-[600px] scroll-auto rounded-lg bg-secondary p-10 pb-10 text-center"
  >
    <h1 class="mt-10 font-racing text-4xl">Race Schedule</h1>
    <div class="mt-10 flex flex-col items-center justify-center rounded-lg">
      <schedule-card v-for="race in data" :race="race" />
    </div>
  </section>
</template>

<script setup>
const { data, error } = await useFetch(`http://ergast.com/api/f1/current.json`, {
  transform: (data) => {
    return data.MRData.RaceTable.Races;
  },
});

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
    fatal: true,
  });
}
</script>
