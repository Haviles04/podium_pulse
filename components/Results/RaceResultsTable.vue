<template>
  <div class="border-2 rounded-xl max-w-[1000px] m-auto">
    <table class="table-auto divide-y divide-primary w-full text-center">
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
          <td :colspan="sessionType === 'qualifying' ? 6 : 7" class="text-center py-10">
            Error Loading Data.
          </td>
        </tr>
        <tr v-if="!data">
          <td :colspan="sessionType === 'qualifying' ? 6 : 7" class="text-center py-10">No results yet.</td>
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
</template>

<script setup>
const { results, sessionType, errors } = defineProps(['results', 'sessionType', 'errors']);
const { Results, QualifyingResults, SprintResults } = results || {};
const data =
  sessionType === 'qualifying' ? QualifyingResults : sessionType === 'race' ? Results : SprintResults;
</script>
