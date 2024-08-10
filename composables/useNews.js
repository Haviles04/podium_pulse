export const useNews = async () => {
  const config = useRuntimeConfig();
  const { newsApiKey } = config.public;

  const { data: news } = await useFetch(`https://f1-motorsport-data.p.rapidapi.com/news`, {
    headers: {
      'x-rapidapi-key': newsApiKey,
    },
    transform: (data) => data.slice(0, 5),
  });

  return { news, key: newsApiKey };
};
