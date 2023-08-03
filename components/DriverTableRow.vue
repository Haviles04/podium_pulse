<template>
  <td class="pt-2">{{ driver.position }}</td>
  <td>{{ driver.grid }}</td>
  <td>
    {{ driver.number }}
  </td>
  <td :class="hasFastestLap">
    {{ driver.Driver.givenName + " " + driver.Driver.familyName
    }}<img
      class="inline ml-2"
      :src="`https://flagsapi.com/${countryCode}/flat/24.png`"
    />
  </td>

  <td>{{ driver.Constructor.name }}</td>
  <td v-if="driver.Time">{{ driver.Time.time }}</td>
  <td v-else>DNF</td>
</template>

<script setup>
const { driver } = defineProps(["driver"]);

const hasFastestLap =
  driver.FastestLap?.rank === "1" ? "text-violet-500" : null;

const countryCode = computed(() => {
  switch (driver.Driver.nationality) {
    case "American":
      return "US";
      break;
    case "Dutch":
      return "BE";
      break;
    case "Mexican":
      return "MX";
      break;
    case "Monegasque":
      return "MC";
      break;
    case "British":
      return "GB";
      break;
    case "Spanish":
      return "ES";
      break;
    case "French":
      return "FR";
      break;
    case "Canadian":
      return "CA";
      break;
    case "Japanese":
      return "JP";
      break;
    case "Chinese":
      return "CN";
      break;
    case "Thai":
      return "TH";
      break;
    case "Danish":
      return "TH";
      break;
    case "Australian":
      return "AU";
      break;
    case "German":
      return "DE";
      break;
    case "Finnish":
      return "FI";
      break;
  }
});
</script>
