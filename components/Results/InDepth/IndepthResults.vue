<template>
  <section>
    <h2 className="text-primary text-3xl mt-4">Session Data</h2>
    <label for="sessions" class="block"> Session</label>
    <select name="sessions" v-model="selectedSession" class="mt-2 rounded bg-background text-xl text-primary">
      <option disabled selected>Select a session</option>
      <option v-for="session in sessions">{{ session.session_name }}</option>
    </select>

    <label for="drivers" class="block">Driver</label>
    <select
      name="drivers"
      v-model="selectedDriverNumber"
      class="mt-2 rounded bg-background text-xl text-primary"
    >
      <option disabled>Select a driver</option>
      <option v-for="{ driver_number, full_name } in driverData" :value="driver_number">
        {{ full_name }}
      </option>
    </select>

    <driver-laps
      v-if="selectedDriverNumber"
      :driverNumber="selectedDriverNumber"
      :sessionId="sessionId"
      :key="`${selectedDriverNumber} ${sessionId}`"
    />
  </section>
</template>

<script setup>
const props = defineProps(['meetingId']);
const selectedSession = ref();
const selectedDriverNumber = ref();
const driverData = ref();

const { data: sessions } = await useFetch(
  `https://api.openf1.org/v1/sessions?&meeting_key=${props.meetingId.value}`,
);

const sessionId = computed(() => {
  return sessions.value.find(({ session_name }) => session_name === selectedSession.value)?.session_key;
});

watch(
  sessionId,
  async () => {
    if (!sessionId.value) return;
    const { data } = await useFetch(`https://api.openf1.org/v1/drivers?session_key=${sessionId.value}`, {
      transform: (data) =>
        data.reduce((acc, current) => {
          if (!acc.some((driver) => driver.driver_number === current.driver_number)) {
            acc.push(current);
          }
          return acc;
        }, []),
    });
    driverData.value = data.value;
  },
  { immediate: true },
);
</script>
