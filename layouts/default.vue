<template>
  <nav class="flex h-full w-full flex-col justify-between">
    <div class="border-b-4 border-primary bg-secondary fixed w-full">
      <NuxtLoadingIndicator />
      <div class="m-auto flex h-full min-h-[60px] max-w-[1000px] items-center justify-between">
        <nuxt-link to="/" class="mx-6">Podium Pulse</nuxt-link>
        <desktop-nav class="hidden md:flex" />
        <mobile-nav class="block md:hidden" />
      </div>
    </div>
    <slot />
    <Footer />
  </nav>
</template>
