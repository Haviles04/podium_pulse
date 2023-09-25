<template>
  <section class="m-auto max-w-screen-lg scroll-auto rounded-lg pb-10 text-center">
    <h1 class="mt-10 font-racing text-6xl">Schedule</h1>
    <div class="mt-10 overflow-x-auto rounded-lg">
      <table class="m-auto w-full">
        <thead class="w-full table-auto divide-y divide-primary rounded border-2 text-center">
          <tr>
            <th class="hidden md:block">Round</th>
            <th>Date</th>
            <th>Race Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-dashed divide-primary border-2">
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
