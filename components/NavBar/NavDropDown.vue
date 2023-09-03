<template>
  <div
    class="absolute w-full left-0 top-14 bg-light text-background text-xl underline px-8 py-10 text-center rounded"
  >
    <ul class="list-none flex gap-4 justify-between flex-wrap justify-center">
      <li v-for="data in listData">
        <nuxt-link :to="listLink(data)">
          {{ data.season || data.givenName + " " + data?.familyName }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { listData, listTypes } = defineProps(["listData", "listTypes"]);
const clearListTypes = defineEmits(["clearListTypes"]);

const listLink = (data) => {
  if (data.season) {
    return { path: `/seasons/${data?.season}` };
  }
  return { path: `/drivers/${data?.driverId}` };
};
</script>
