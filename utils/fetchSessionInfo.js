export const fetchSessionInfo = async (url) => {
  const { data, error } = await useFetch(url);

  if (error.value || !data.value) {
    throw createError({
      statusCode: error.value.statusCode,
      statusMessage: error.value.message,
      fatal: true,
    });
  }
  const [results] = data.value.MRData.RaceTable.Races;
  return results;
};
