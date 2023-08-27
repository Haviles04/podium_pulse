<template>
  <div class="max-w-screen-lg m-auto text-center rounded-lg">
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
          <tr v-if="errorMessage">
            {{
              errorMessage
            }}
          </tr>
          <tr v-else-if="!data">
            No results yet
          </tr>
          <tr v-else v-for="driver in data">
            <driver-table-row :driver="driver" :sessionType="sessionType" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const { results, errorMessage } = defineProps(["results", "errorMessage"]);
const { Results, QualifyingResults } = results || {};
const sessionType = QualifyingResults ? "quali" : "race";
const data = sessionType === "race" ? Results : QualifyingResults;
</script>
