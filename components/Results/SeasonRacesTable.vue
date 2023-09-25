<template>
  <div class="m-auto w-fit rounded-xl border-2">
    <table class="m-auto divide-y divide-primary rounded-xl text-center md:min-w-[600px]">
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
const { races } = defineProps(['races']);
</script>
