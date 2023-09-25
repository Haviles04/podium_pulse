<template>
  <div
    class="absolute left-0 right-0 mx-auto max-w-[1200px] rounded-xl bg-light px-8 py-10 text-center text-xl text-background underline"
  >
    <b v-if="error">Error Loading Data</b>
    <ul v-else class="flex list-none flex-wrap justify-center justify-between gap-4">
      <li v-for="data in listData">
        <nuxt-link :to="listLink(data)">
          {{ data.season || data.givenName + ' ' + data?.familyName }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { listData, error } = defineProps(['listData', 'error']);

const listLink = (data) => {
  if (data.season) {
    return { path: `/results/${data?.season}` };
  }
  return { path: `/drivers/${data?.driverId}` };
};
</script>
