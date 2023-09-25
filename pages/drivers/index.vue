<template>
  <section
    class="m-auto mt-10 grid max-w-[1200px] grid-cols-1 gap-2 rounded-xl bg-secondary py-8 md:grid-cols-2 md:p-8"
  >
    <driver-card v-for="driver in drivers" :driver="driver" />
  </section>
</template>

<script setup>
const { drivers } = useDrivers();
</script>
