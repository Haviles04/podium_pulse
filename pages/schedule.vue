<template>
  <section
    class="max-w-screen-lg m-auto text-center rounded-lg pb-10 scroll-auto"
  >
    <h1 class="font-racing text-6xl mt-10">Schedule</h1>
    <div class="rounded-lg overflow-x-auto mt-10">
      <table class="m-auto w-full">
        <thead
          class="table-auto border-2 divide-y divide-primary rounded w-full text-center"
        >
          <tr>
            <th>Round</th>
            <th>Date</th>
            <th>Race Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody class="border-2 divide-y divide-dashed divide-primary">
          <tr v-for="race in schedule">
            <td>{{ race.round }}</td>
            <td>{{ new Date(race.date).toLocaleDateString() }}</td>
            <td>{{ race.raceName }}</td>
            <td>{{ getLocalTime(race.date, race.time) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
const { data: scheduleData, error } = await useFetch(
  `http://ergast.com/api/f1/current.json`
);

if (error.value || !scheduleData.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
    fatal: true,
  });
}

const schedule = scheduleData.value.MRData.RaceTable.Races;
console.log(schedule);

const getLocalTime = (date, time) => {
  return new Date(date + " " + time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};
</script>
