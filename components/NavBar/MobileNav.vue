<template>
  <div>
    <button class="px-7 py-4" @click="showLinks = !showLinks">Menu</button>
    <div
      v-if="showLinks"
      class="absolute left-0 top-14 mr-10 w-screen bg-card text-end [&>ul>li]:border-b-2 [&>ul>li]:p-4"
    >
      <ul @click="showLinks = !showLinks">
        <li>
          <nuxt-link to="/results">Results</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/drivers">Drivers</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/schedule">Schedule</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const showLinks = ref(false);
</script>
