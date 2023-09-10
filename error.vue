<template>
  <section class="text-center mt-10">
    <h1 class="text-2xl">OOPS</h1>
    <p class="text-xl">{{ error.statusCode }}</p>
    <p class="text-xl">Theres been an incident on track, go back to the pits</p>
    <button class="rounded border p-2 mt-10" @click="handleClearError">
      Go home
    </button>
  </section>
</template>

<script setup>
const { error } = defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>
