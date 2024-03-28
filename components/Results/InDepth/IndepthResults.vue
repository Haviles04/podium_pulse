<template>
  <section>
    <h2 className="text-primary text-3xl mt-4">Session Data</h2>
    <label for="session" class="block"> Session</label>
    <select name="sessions" v-model="selectedSession" class="mt-2 rounded bg-background text-xl text-primary">
      <option disabled selected>Select a session</option>
      <option v-for="session in sessions">{{ session.session_name }}</option>
    </select>

    <label for="driverSelect" class="block">Driver</label>
    <select name="drivers" v-model="selectedDriver" class="mt-2 rounded bg-background text-xl text-primary">
      <option disabled selected>Select a driver</option>
      <option v-for="driver in driverData" :value="driver">{{ driver.full_name }}</option>
    </select>

    <driver-laps
      v-if="selectedDriver"
      :driver="selectedDriver"
      :sessionId="sessionId"
      :key="selectedDriver.driver_number + sessionId"
    />
  </section>
</template>

<script setup>
const props = defineProps(['meetingId']);
const selectedSession = ref();
const selectedDriver = ref();
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
    const { data } = await useFetch(`https://api.openf1.org/v1/drivers?session_key=${sessionId.value}`, {});
    driverData.value = data.value;
  },
  { immediate: true },
);
</script>
