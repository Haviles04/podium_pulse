<template>
  <div
    @click="router.push(link)"
    class="m-auto my-2 w-fit rounded-xl border-2 border-border bg-card p-4 text-center hover:cursor-pointer"
  >
    <nuxt-link :to="link"
      ><h2 class="text-2xl">{{ driver.givenName + ' ' + driver.familyName }}</h2></nuxt-link
    >
    <img v-if="imageExists" :src="imgSource" loading="lazy" @error="imageExists=false" />
  </div>
</template>

<script setup>
const router = useRouter();
const imageExists = ref(true);
const { driver } = defineProps(['driver']);
const imgSource = `/images/drivers/${driver.familyName.toLowerCase()}.png`;
const link = `/drivers/${driver.driverId}`;
</script>
