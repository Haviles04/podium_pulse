<template>
  <div>
    <h4>Results</h4>
    <ul>
      <label v-for="driver in data" :for="driver.code">
        <li :name="driver.code" class="flex justify-between px-6 py-2">
          <span>{{
            driver.position + ' : ' + driver.Driver.givenName + ' ' + driver.Driver.familyName
          }}</span>
          <span> {{ driver.Time.time }}</span>
        </li>
      </label>
    </ul>
    <NuxtLink
      :to="`/results/${season}/${round}/race`"
      class="flex items-center justify-center py-2 text-primary hover:text-fastest"
      :replace="true"
      >Full Standings <i class="material-icons">chevron_right</i>
    </NuxtLink>
  </div>
</template>

<script setup>
const { round, season } = defineProps(['round', 'season']);

const { data } = await useFetch(`https://api.jolpi.ca/ergast/f1/${season}/${round}/results.json`, {
  transform: (data) => {
    return data.MRData.RaceTable.Races[0].Results.splice(0, 3);
  },
});
</script>
