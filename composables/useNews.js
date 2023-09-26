const config = useRuntimeConfig();
const yesterday = new Date(Date.now() - 86400000).toLocaleDateString();

console.log('fetching');
const { data: news } = await useFetch(
  `https://newsapi.org/v2/everything?language=en&apiKey=${config.public.newsApiKey}&q=F1 Race&from=${yesterday}&domains=autosport.com, bbc.co.uk, sbnation.com, skysports.com`,
  {
    transform: (data) => {
      return data.articles.filter(({ title }) => title !== '[Removed]').slice(0, 5);
    },
  },
);

export default () => ({
  news,
});
