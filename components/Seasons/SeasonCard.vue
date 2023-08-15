<template>
    <nuxt-link v-if="!futureRace" :to="`/${race.season}/races/${race.round}`">
    <div class="rounded-xl border-slate-500 border p-6 bg-zinc-700 shadow-lg shadow-zinc-500/50">
        <p>Round: {{ race.round }}</p>
        <p>{{ race.date }}</p>
        <p>{{ race.raceName }}</p>
    </div>
</nuxt-link>
</template>

<script setup>
const { race } = defineProps(['race']);

const futureRace = Date.now() < Date.parse(race.date)
</script>