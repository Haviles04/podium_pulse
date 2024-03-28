<template>
  <section>
    <h2 className="text-primary text-3xl mt-4">Session Data</h2>
    <label for="sessions" class="block"> Session</label>
    <form>
      <select
        id="sessions"
        name="sessions"
        v-model="selectedSession"
        @change="handleSessionChange"
        class="mt-2 rounded bg-background text-xl text-primary"
      >
        <option disabled selected>Select a session</option>
        <option v-for="session in sessions" :value="session.session_key">{{ session.session_name }}</option>
      </select>

      <label for="drivers" class="block">Driver</label>
      <select
        id="drivers"
        name="drivers"
        v-model="selectedDriver"
        @change="getDriverSessionData"
        class="mt-2 rounded bg-background text-xl text-primary"
      >
        <option disabled>Select a driver</option>
        <option v-for="{ full_name, driver_number } in sessionDriverData" :value="driver_number">
          {{ full_name }}
        </option>
      </select>

      <!-- <label for="dataType" class="block">Data</label>
      <select
        id="dataType"
        name="dataType"
        v-model="selectedData"
        @change="handleDataChange"
        class="mt-2 rounded bg-background text-xl text-primary"
      >
        <option disabled selected>Select data</option>
        <option value="laps">Laps</option>
        <template v-if="isRace">
          <option value="pit">Pits</option>
          <option value="radio">Radio</option>
        </template>
      </select> -->
    </form>

    <driver-laps
      v-if="selectedDriverData"
      :driver="selectedDriverData"
      :key="`${selectedSession} ${selectedDriver}`"
    />
  </section>
</template>

<script setup>
const props = defineProps(['meetingId']);
const { data: sessions } = await useFetch(
  `https://api.openf1.org/v1/sessions?&meeting_key=${props.meetingId.value}`,
);

const selectedSession = ref('Practice 1');
const sessionDriverData = ref();
const selectedDriver = ref();
const selectedDriverData = ref();
const selectedData = ref();

const isRace = computed(() => {
  return (
    sessions.value?.find((session) => session?.session_key === selectedSession?.value)?.session_name ===
    'Race'
  );
});

const handleSessionChange = async () => {
  const data = await $fetch(`https://api.openf1.org/v1/drivers?session_key=${selectedSession.value}`);
  sessionDriverData.value = data.reduce((acc, current) => {
    if (!acc.some((driver) => driver.driver_number === current.driver_number)) {
      acc.push(current);
    }
    return acc;
  }, []);

  if (selectedDriver.value) {
    getDriverSessionData();
  }
};

const handleDataChange = () => {
  getDriverSessionData();
};

const getDriverSessionData = async () => {
  selectedDriverData.value = await $fetch(
    `https://api.openf1.org/v1/laps?session_key=${selectedSession.value}&driver_number=${selectedDriver.value}`,
  );
};
</script>
