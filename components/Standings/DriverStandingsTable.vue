<template>
  <div class="mt-8 h-fit w-full overflow-hidden rounded-xl border-2 border-border">
    <table class="w-full table-auto divide-y divide-primary bg-card text-center">
      <thead>
        <th>Position</th>
        <th>Driver</th>
        <th>Points</th>
      </thead>
      <tbody>
        <driver-standings-row v-for="driver in driverStandings" :driver="driver" />
      </tbody>
    </table>
  </div>
</template>

<script setup>
const { data: driverStandings } = await useFetch(`https://ergast.com/api/f1/current/driverStandings.json`, {
  transform: (data) => {
    return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  },
});
</script>
