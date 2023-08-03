<template>
  <div class="max-w-screen-lg m-auto text-center mt-10 rounded-lg scroll-auto">
    <nuxt-link :to="circuit.url" target="_blank"
      ><h2 class="text-xl mb-8">{{ circuit.circuitName }}</h2></nuxt-link
    >
    <div class="rounded-lg bg-zinc-700 shadow-lg shadow-gray-500/50">
      <table
        class="table-auto border-collapse rounded w-full text-center overflow-scroll divide-y"
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
          <tr v-for="driver in raceResults">
            <driver-table-row :driver="driver" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const { results } = defineProps(["results"]);
const { Circuit: circuit, Results: raceResults } = results.Races[0];
</script>
