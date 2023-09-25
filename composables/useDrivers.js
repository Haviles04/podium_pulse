export const useDrivers = () => {
  const drivers = ref(null);
  if (!drivers.value) {
    const { data: driverData } = useFetch('https://ergast.com/api/f1/current/drivers.json', {
      transform: (data) => {
        return data.MRData.DriverTable.Drivers;
      },
    });

    drivers.value = driverData.value;
  }
  return { drivers };
};
