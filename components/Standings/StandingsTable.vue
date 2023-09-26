<template>
  <div class="mt-8 h-fit w-full overflow-hidden rounded-xl border-2 border-border">
    <table class="w-full table-auto divide-y divide-primary bg-card text-center">
      <thead>
        <tr>
          <th>Position</th>
          <th v-if="wdc">Driver</th>
          <th v-else>Constructor</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody v-if="data">
        <driver-standings-row v-if="data[0].Driver" v-for="driver in data" :driver="driver" />
        <constructor-standings-row v-else-if="data[0].Constructor" v-for="team in data" :team="team" />
      </tbody>
      <tbody v-else-if="error">
        <td colspan="3" class="p-6">Error loading Data</td>
      </tbody>
      <tbody v-else-if="loading">
        <td colspan="3" class="p-10">
          <Loader class="inline-block" />
        </td>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const { wdc, data, error, loading } = defineProps(['wdc', 'data', 'error', 'loading']);
</script>
