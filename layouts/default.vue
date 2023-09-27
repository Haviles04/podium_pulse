<template>
  <nav class="border-b-4 border-primary bg-secondary">
    <NuxtLoadingIndicator />
    <div class="m-auto flex h-full max-w-[1000px] items-center justify-between">
      <nuxt-link to="/" class="mx-6">Podium Pulse</nuxt-link>
      <desktop-nav class="hidden md:flex" />
      <mobile-nav class="block md:hidden" />
    </div>
  </nav>
  <slot />
</template>
