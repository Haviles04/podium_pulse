<template>
  <section>
    <table
      class="table-auto border-2 min-w-[600px] divide-y divide-primary m-auto text-center"
    >
      <thead>
        <tr>
          <th>Round</th>
          <th>Race</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-dashed divide-primary">
        <season-table-row v-for="race in races" :race="race" />
      </tbody>
    </table>
  </section>
</template>

<script setup>
const { races } = defineProps(["races"]);
</script>
