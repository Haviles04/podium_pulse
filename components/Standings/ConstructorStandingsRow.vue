<template>
  <tr>
    <td class="py-4">
      {{ position }}
    </td>
    <td>
      {{ Constructor.name }}
    </td>
    <td>
      {{ points }}
    </td>
  </tr>
</template>

<script setup>
const { team } = defineProps(['team']);
const { Constructor, points, position } = team;
</script>
