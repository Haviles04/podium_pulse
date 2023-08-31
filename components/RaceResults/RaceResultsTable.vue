<template>
  <div class="max-w-screen-lg m-auto text-center rounded-lg pb-10">
    <div class="rounded-lg overflow-x-auto">
      <table
        class="table-auto border-2 divide-y divide-primary rounded w-full text-center"
      >
        <thead>
          <tr>
            <th>Position</th>
            <th>Grid</th>
            <th>Number</th>
            <th>Name</th>
            <th>Team</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody class="divide-y divide-dashed divide-primary">
          <tr v-if="errors?.includes(sessionType)">
            <td colspan="6" class="text-center py-10">Error Loading Data.</td>
          </tr>

          <driver-table-row
            v-for="driver in data"
            :key="driver?.number"
            :driver="driver"
            :sessionType="sessionType"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const { results, sessionType, errors } = defineProps([
  "results",
  "sessionType",
  "errors",
]);
const { Results, QualifyingResults } = results || {};
const data = sessionType === "quali" ? QualifyingResults : Results;
</script>
