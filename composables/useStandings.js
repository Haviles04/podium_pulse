export const useStandings = (slug) => {
  const standingsData = ref(null);
  const loading = ref(false);
  const error = ref(null);

  if (!slug) {
    error.value = 'No Championship selected!';
  }

  const fetchData = async () => {
    loading.value = true;

    //convert slug to value, then replace first letter with capital for difference in api call vs response
    const valuedSlug = toValue(slug);
    const formattedSlug = valuedSlug.replace(valuedSlug[0], valuedSlug[0].toUpperCase());
    const { data, error: standingsError } = await useFetch(
      `https://api.jolpi.ca/ergast/f1/current/${valuedSlug}Standings.json`,
      {
        transform: (data) => {
          return data.MRData.StandingsTable.StandingsLists[0][`${formattedSlug}Standings`];
        },
      },
    );
    if (standingsError.value) {
      console.log(standingsError.value);
      error.value = standingsError.value;
    }
    standingsData.value = data.value;
    loading.value = false;
  };

  watchEffect(() => {
    fetchData();
  });
  return { standingsData, loading, error };
};
