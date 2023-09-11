<template>
  <div class="border-2 rounded-xl w-fit m-auto">
    <table
      class="rounded-xl md:min-w-[600px] divide-y divide-primary m-auto text-center"
    >
      <thead>
        <tr>
          <th class="hidden md:block">Round</th>
          <th>Race</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-dashed divide-primary">
        <season-table-row v-for="race in races" :race="race" />
      </tbody>
    </table>
  </div>
</template>

<script setup>
const { races } = defineProps(["races"]);
</script>
