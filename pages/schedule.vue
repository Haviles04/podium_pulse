<template>
  <main>
    <section
      class="m-auto mt-10 min-w-[300px] max-w-[900px] scroll-auto rounded-lg bg-secondary p-10 pb-10 text-center"
    >
      <h1 class="mt-10 font-racing text-4xl">Race Schedule</h1>
      <div class="grid grid-cols-1 gap-5 rounded-lg md:grid-cols-2">
        <schedule-card v-for="race in data" :race="race" />
      </div>
    </section>
  </main>
</template>

<script setup>
const { data, error } = await useFetch(`https://ergast.com/api/f1/current.json`, {
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

useHead({
  title: 'Podium Pulse | Schedule',
  meta: 'Podium pulse formula 1 schedule information',
});
</script>
