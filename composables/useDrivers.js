export const useDrivers = async () => {
  const drivers = ref(null);
  const errors = ref(null);
  if (!drivers.value) {
    const { data: driverData, error } = await useFetch('https://ergast.com/api/f1/current/drivers.json', {
      transform: (data) => {
        return data.MRData.DriverTable.Drivers;
      },
    });
    drivers.value = driverData.value;

    if (error.value) {
      errors.value = error.value;
    }
  }
  return { drivers, errors };
};
