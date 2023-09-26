<template>
  <main>
    <section class="m-auto mt-10 rounded-xl bg-secondary pb-10 md:max-w-[600px] md:p-10">
      <h2 class="font-italic pt-2 text-center font-racing text-4xl">Standings</h2>

      <driver-standings-table v-if="championship === 'WDC'" />
    </section>
  </main>
</template>

<script setup>
const championship = ref('WDC');
</script>
