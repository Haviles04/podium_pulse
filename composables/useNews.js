export const useNews = async () => {
  const config = useRuntimeConfig();
  const yesterday = new Date(Date.now() - 86400000).toLocaleDateString();

  const { data: news } = await useFetch(
    `https://api.newscatcherapi.com/v2/search?q=formula 1 f1&from=2 days ago&lang=en&sources=formula1.com,autosport.com, espn.com, bbc.com,skysports.com`,
    {
      headers: {
        'x-api-key': config.public.newsApiKey,
      },
      transform: (data) => {
        return data.articles.filter(({ title }) => title !== '[Removed]').slice(0, 5);
      },
    },
  );
  return { news };
};
