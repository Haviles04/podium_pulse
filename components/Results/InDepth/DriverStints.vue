<template>
  <h3 class="mt-4 text-xl">Stints</h3>
  <table class="text-md text-center-xl w-full table-auto divide-y divide-primary rounded rounded-xl bg-card">
    <thead>
      <th>Stint</th>
      <th>Lap Start</th>
      <th>Lap End</th>
      <th>Compound</th>
      <th>Tyre Age</th>
    </thead>
    <tbody>
      <tr v-for="data in props.driverData">
        <td>
          {{ data.stint_number }}
        </td>
        <td>
          {{ data.lap_start }}
        </td>
        <td>
          {{ data.lap_end }}
        </td>
        <td>
          {{ data.compound }}
        </td>
        <td>
          {{ data.tyre_age_at_start }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps(['driverData']);
</script>
