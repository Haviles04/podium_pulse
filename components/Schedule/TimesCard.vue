<template>
  <div>
    <h4>Upcoming</h4>
    <ul class="flex flex-col [&>label>li]:inline [&>label]:my-2">
      <label
        >FP1
        <li>: {{ getDateAndTime(race.FirstPractice.date, race.FirstPractice.time) }}</li></label
      >
      <label
        >FP2
        <li>: {{ getDateAndTime(race.SecondPractice.date, race.SecondPractice.time) }}</li></label
      >
      <label v-if="race.ThirdPractice"
        >FP3
        <li>: {{ getDateAndTime(race.ThirdPractice.date, race.ThirdPractice.time) }}</li></label
      >
      <label v-if="race.Sprint"
        >Sprint
        <li>: {{ getDateAndTime(race.Sprint.date, race.Sprint.time) }}</li></label
      >
      <label>
        Qualifying:
        <li>{{ getDateAndTime(race.Qualifying.date, race.Qualifying.time) }}</li>
      </label>
      <label>
        Race:
        <li>{{ getDateAndTime(race.date, race.time) }}</li>
      </label>
    </ul>
  </div>
</template>

<script setup>
const { race } = defineProps(['race']);

const getDateAndTime = (date, time) => {
  const dateAndTimeString = new Date(date + ' ' + time);
  const newDate = dateAndTimeString.toLocaleString('default', {
    month: 'short',
    day: 'numeric',
  });

  const newTime = dateAndTimeString.getTime();
  const displayTime = new Date(newTime).toLocaleTimeString('en-us', {
    hour: 'numeric',
    minute: '2-digit',
  });
  return newDate + ' | ' + displayTime;
};
</script>
