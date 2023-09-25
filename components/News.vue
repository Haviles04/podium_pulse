<template>
  <section
    class="m-auto mt-20 grid max-w-[1000px] grid-cols-1 gap-10 rounded-xl bg-secondary md:grid-cols-2 md:p-8"
  >
    <article
      v-for="(article, i) in news"
      :class="`text-centerflex flex-col overflow-hidden rounded-xl border-2 border-border bg-card ${
        i === 0 ? 'md:col-span-2' : null
      }`"
    >
      <img class="h-3/6 w-full object-cover" :src="article.urlToImage" />
      <h3 class="border-b-2 border-border p-2 text-center text-xl">
        <a :href="article.url" target="_blank" class="flex flex-col justify-between">{{ article.title }}</a>
      </h3>

      <p class="p-2 text-center">{{ article.description }}</p>
    </article>
  </section>
</template>

<script setup>
const { news } = useNews();
</script>
