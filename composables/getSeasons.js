export const getSeasons = () => {
  const { data: seasons } = useFetch('http://ergast.com/api/f1/seasons.json?offset=63', {
    transform: (data) => {
      return data.MRData.SeasonTable.Seasons;
    },
  });

  return { seasons };
};
