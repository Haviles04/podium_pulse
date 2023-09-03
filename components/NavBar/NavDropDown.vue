<template>
  <div
    class="absolute left-0 w-full bg-background px-8 py-6 rounded-xl min-w-[200px] text-center -z-10"
  >
    <ul>
      <li v-for="data in listData" class="list-none">
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
