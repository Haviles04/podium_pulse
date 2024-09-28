export const useSeasons = async () => {
  const seasons = ref(null);
  const errors = ref(null);

  if (!seasons.value) {
    const { data: seasonData, error } = await useFetch(
      'https://api.jolpi.ca/ergast/f1/seasons.json?offset=63',
      {
        transform: (data) => {
          return data.MRData.SeasonTable.Seasons;
        },
      },
    );
    seasons.value = seasonData.value;

    if (error.value) {
      errors.value = error.value;
    }
  }
  return { seasons, errors };
};
