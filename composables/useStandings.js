export const useStandings = async (slug) => {
  const standingsData = ref(null);

  const error = ref(null);

  const fetchData = async () => {
    const { data, error: standingsError } = await useFetch(
      `https://ergast.com/api/f1/current/${toValue(slug)}Standings.json`,
      {
        transform: (data) => {
          return data.MRData.StandingsTable.StandingsLists[0][`${toValue(slug)}Standings`];
        },
        lazy: true,
      },
    );
    if (standingsError.value) {
      error.value = standingsError.value;
    }
    standingsData.value = data.value;
    loading.value = pending.value;
  };

  watchEffect(() => fetchData());

  return { standingsData, error };
};
