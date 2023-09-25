<template>
  <div class="m-auto my-2 w-fit rounded-xl bg-card p-4 text-center">
    <nuxt-link :to="`/drivers/${driver.driverId}`" class=""
      ><h2 class="text-2xl">{{ driver.givenName + ' ' + driver.familyName }}</h2></nuxt-link
    >
    <img :src="imgSource" />
  </div>
</template>

<script setup>
const { driver } = defineProps(['driver']);
const imgSource = `/images/drivers/${driver.familyName.toLowerCase()}.png`;
</script>
