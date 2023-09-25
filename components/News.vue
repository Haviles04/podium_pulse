<template>
  <section
    class="grid grid-cols-1 md:grid-cols-2 m-auto gap-10 mt-20 max-w-[1000px] bg-secondary md:p-8 rounded-xl"
  >
    <article
      v-for="(article, i) in news"
      :class="`text-centerflex flex-col bg-card border-2 border-border rounded-xl overflow-hidden ${
        i === 0 ? 'md:col-span-2' : null
      }`"
    >
      <img class="w-full" :src="article.urlToImage" />
      <h3 class="text-xl text-center p-2 border-b-2 border-border">
        <a :href="article.url" target="_blank" class="flex flex-col justify-between">{{ article.title }}</a>
      </h3>

      <p class="text-center p-2">{{ article.description }}</p>
    </article>
  </section>
</template>

<script setup>
const yesterday = new Date(Date.now() - 86400000).toLocaleDateString();
const { data: news } = await useFetch(
  `https://newsapi.org/v2/everything?language=en&apiKey=061e9934238d4732bcfcd5d21402ecec&q=F1 Race&from=${yesterday}`,
  {
    transform: (data) => {
      return data.articles.filter(({ title }) => title !== '[Removed]').slice(0, 5);
    },
  },
);
</script>
