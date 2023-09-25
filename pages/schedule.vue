<template>
  <section class="max-w-screen-lg m-auto text-center rounded-lg pb-10 scroll-auto">
    <h1 class="font-racing text-6xl mt-10">Schedule</h1>
    <div class="rounded-lg overflow-x-auto mt-10">
      <table class="m-auto w-full">
        <thead class="table-auto border-2 divide-y divide-primary rounded w-full text-center">
          <tr>
            <th class="hidden md:block">Round</th>
            <th>Date</th>
            <th>Race Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody class="border-2 divide-y divide-dashed divide-primary">
          <schedule-table-row v-for="race in data" :race="race" />
        </tbody>
      </table>
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
