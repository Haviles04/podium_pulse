<template>
  <div>
    <h4>Results</h4>
    <ul>
      <label v-for="driver in data">
        <li class="flex justify-between px-6 py-2">
          <span>{{
            driver.position + ' : ' + driver.Driver.givenName + ' ' + driver.Driver.familyName
          }}</span>
          <span> {{ driver.Time.time }}</span>
        </li>
      </label>
    </ul>
    <NuxtLink :to="`results/${season}/${round}/race`" class="text-primary hover:text-fastest"
      >Full Standings >>>
    </NuxtLink>
  </div>
</template>

<script setup>
const { round, season } = defineProps(['round', 'season']);

const { data } = await useFetch(`http://ergast.com/api/f1/${season}/${round}/results.json`, {
  transform: (data) => {
    return data.MRData.RaceTable.Races[0].Results.splice(0, 3);
  },
});
console.log(data.value);
</script>
