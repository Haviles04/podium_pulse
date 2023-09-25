export const getDrivers = () => {
  const { data: drivers } = useFetch('https://ergast.com/api/f1/current/drivers.json', {
    transform: (data) => {
      return data.MRData.DriverTable.Drivers;
    },
  });

  return { drivers };
};
