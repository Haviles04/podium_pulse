<template>
  <div class="max-w-screen-lg m-auto text-center rounded-lg pb-10">
    <div
      class="rounded-lg bg-zinc-700 shadow-lg shadow-gray-500/50 overflow-x-auto"
    >
      <table
        class="min-w-[600px] table-auto border-collapse rounded w-full text-left divide-y"
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

        <tbody class="divide-y">
          <tr v-if="errors?.includes(sessionType)">
            <td colspan="6" class="text-center py-10">Error Loading Data.</td>
          </tr>
          <tr v-for="driver in data">
            <driver-table-row
              :key="driver?.number"
              :driver="driver"
              :sessionType="sessionType"
            />
          </tr>
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
