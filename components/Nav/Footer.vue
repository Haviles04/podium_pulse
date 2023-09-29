<template>
  <footer class="mt-10 w-full bg-secondary p-8">
    <p class="mb-4 text-center">Podium Pulse</p>

    <ul class="m-auto flex max-w-[600px] justify-between text-primary">
      <li>
        <nuxt-link to="/results">Results</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/drivers">Drivers</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/schedule">Schedule</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/standings">Standings</nuxt-link>
      </li>
    </ul>
    <p class="mt-4 text-center">
      Built by
      <a href="https://henryaviles.vercel.app" target="_blank" class="text-primary">Henry Aviles</a>
    </p>
  </footer>
</template>
