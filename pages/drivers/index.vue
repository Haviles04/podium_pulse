<template>
  <main>
    <section
      class="m-auto mt-10 grid max-w-[1200px] grid-cols-1 gap-2 rounded-xl bg-secondary py-8 md:grid-cols-2 md:p-8"
    >
      <b v-if="errors" class="text-center">Error loading Data</b>
      <lazy-driver-card v-for="driver in drivers" :driver="driver" />
    </section>
  </main>
</template>

<script setup>
const { drivers, errors } = await useDrivers();

useHead({
  title: 'Podium Pulse | Drivers',
  meta: 'Podium Pulse formula 1 driver information',
});
</script>
