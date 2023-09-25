export const useSeasons = () => {
  const seasons = ref(null);

  if (!seasons.value) {
    const { data: seasonData } = useFetch('http://ergast.com/api/f1/seasons.json?offset=63', {
      transform: (data) => {
        return data.MRData.SeasonTable.Seasons;
      },
    });
    seasons.value = seasonData.value;
  }
  return { seasons };
};