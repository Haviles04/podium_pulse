<template>
  <div class="max-w-screen-lg m-auto text-center rounded-lg pb-10 scroll-auto">
    <div class="rounded-lg overflow-x-auto">
      <table
        class="table-auto border-2 divide-y divide-primary rounded w-full text-center"
      >
        <thead>
          <tr>
            <th>Position</th>
            <th class="hidden md:inline">Grid</th>
            <th class="hidden md:inline">Number</th>
            <th>Name</th>
            <th class="hidden md:inline">Team</th>
            <th>Time</th>
            <th v-if="sessionType !== 'qualifying'">Points</th>
          </tr>
        </thead>

        <tbody class="divide-y divide-dashed divide-primary">
          <tr v-if="errors?.includes(sessionType)">
            <td
              :colspan="sessionType === 'qualifying' ? 6 : 7"
              class="text-center py-10"
            >
              Error Loading Data.
            </td>
          </tr>
          <tr v-if="!data">
            <td
              :colspan="sessionType === 'qualifying' ? 6 : 7"
              class="text-center py-10"
            >
              No results yet.
            </td>
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
const { Results, QualifyingResults, SprintResults } = results || {};
const data =
  sessionType === "qualifying"
    ? QualifyingResults
    : sessionType === "race"
    ? Results
    : SprintResults;
</script>
