export const useStandings = (slug) => {
  const standingsData = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchData = async () => {
    loading.value = true;
    const { data, error: standingsError } = await useFetch(
      `https://ergast.com/api/f1/current/${toValue(slug)}Standings.json`,
      {
        transform: (data) => {
          return data.MRData.StandingsTable.StandingsLists[0][`${toValue(slug)}Standings`];
        },
      },
    );
    if (standingsError.value) {
      error.value = standingsError.value;
    }
    standingsData.value = data.value;
    loading.value = false;
  };

  watchEffect(() => fetchData());

  return { standingsData, loading, error };
};
