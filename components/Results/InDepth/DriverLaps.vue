<template>
  <h3 class="mt-4 text-xl">Laps</h3>
  <table
    class="text-md text-center-xl min-h-[500px] w-full table-auto divide-y divide-primary rounded rounded-xl bg-card"
  >
    <thead>
      <th>Lap</th>
      <th>S1</th>
      <th>S2</th>
      <th>S3</th>
      <th>Time</th>
    </thead>
    <tbody>
      <tr
        v-for="{ lap_number, duration_sector_1, duration_sector_2, duration_sector_3, lap_duration } in data"
      >
        <td>
          {{ lap_number }}
        </td>
        <td>
          {{ duration_sector_1 }}
        </td>
        <td>
          {{ duration_sector_2 }}
        </td>
        <td>
          {{ duration_sector_3 }}
        </td>
        <td>
          {{ `${Math.floor(lap_duration / 60)}:${(lap_duration % 60).toFixed(3)}` }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps(['driverNumber', 'sessionId']);

const { data } = await useFetch(
  `https://api.openf1.org/v1/laps?session_key=${props.sessionId}&driver_number=${props.driverNumber}`,
);
</script>
