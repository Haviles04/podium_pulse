export const useNews = () => {
  const news = ref(null);
  const config = useRuntimeConfig();
  const yesterday = new Date(Date.now() - 86400000).toLocaleDateString();
  if (!news.value) {
    const { data } = useFetch(
      `https://newsapi.org/v2/everything?language=en&apiKey=${config.public.newsApiKey}&q=F1 Race&from=${yesterday}&domains=autosport.com, bbc.co.uk, sbnation.com, skysports.com`,
      {
        transform: (data) => {
          return data.articles.filter(({ title }) => title !== '[Removed]').slice(0, 5);
        },
      },
    );
    news.value = data.value;
  }

  return { news };
};
