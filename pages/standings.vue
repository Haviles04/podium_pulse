<template>
  <main>
    <section class="m-auto mt-10 rounded-xl bg-secondary pb-10 md:max-w-[600px] md:p-10">
      <div v-if="loading"><Loader /></div>
      <div>
        <h2 class="font-italic pt-2 text-center font-racing text-4xl">Standings</h2>
        <div class="mt-4">
          <button :class="`w-3/6 ${wdc ? 'border-b border-primary' : null}`" @click="wdc = true">
            Drivers
          </button>
          <button :class="`w-3/6 ${!wdc ? 'border-b border-primary' : null}`" @click="wdc = false">
            Constructors
          </button>
        </div>
        <standings-table :wdc="wdc" :data="standingsData" :error="error" />
      </div>
    </section>
  </main>
</template>

<script setup>
const wdc = ref(true);
const slug = computed(() => {
  return wdc.value === true ? 'Driver' : 'Constructor';
});

const { standingsData, loading, error } = await useStandings(slug);
</script>
