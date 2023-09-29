<template>
  <div class="m-auto max-w-[1000px] overflow-hidden rounded-xl border-2 border-border">
    <table class="text-md w-full table-auto divide-y divide-primary bg-card text-center">
      <thead>
        <tr class="[&>*]:py-4">
          <th v-if="sessionType !== 'qualifying'">Position</th>
          <th class="hidden md:table-cell">Grid</th>
          <th class="hidden md:table-cell">Number</th>
          <th>Name</th>
          <th class="hidden md:table-cell">Team</th>
          <th>Time</th>
          <th v-if="sessionType !== 'qualifying'">Points</th>
        </tr>
      </thead>

      <tbody class="divide-y divide-dashed divide-primary">
        <tr v-if="errors?.includes(sessionType)">
          <td :colspan="sessionType === 'qualifying' ? 6 : 7" class="py-10 text-center">
            Error Loading Data.
          </td>
        </tr>
        <tr v-if="!data">
          <td :colspan="sessionType === 'qualifying' ? 6 : 7" class="py-10 text-center">No results yet.</td>
        </tr>
        <driver-table-row
          v-for="driver in data"
          :key="driver?.number"
          :driver="driver"
          :sessionType="sessionType"
        />
      </tbody>
    </table>
    <p class="py-2"><span class="text-2xl text-fastest"> __ </span>Denotes fastest lap of race</p>
  </div>
</template>

<script setup>
const { results, sessionType, errors } = defineProps(['results', 'sessionType', 'errors']);
const { Results, QualifyingResults, SprintResults } = results || {};
const data =
  sessionType === 'qualifying' ? QualifyingResults : sessionType === 'race' ? Results : SprintResults;
</script>
