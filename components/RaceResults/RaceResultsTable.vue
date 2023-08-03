<template>
  <div class="max-w-screen-lg m-auto text-center my-10 rounded-lg">
    <nuxt-link :to="circuit.url" target="_blank"
      ><h2 class="text-xl">{{ circuit.circuitName }}</h2>
      <p class="mb-8">{{ circuit.Location.country }}</p></nuxt-link
    >
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
const [{ Circuit: circuit, Results: raceResults }] = results.Races;
</script>
