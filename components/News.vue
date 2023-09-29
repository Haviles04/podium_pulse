<template>
  <section
    class="m-auto mt-20 grid max-w-[1000px] grid-cols-1 gap-10 rounded-xl bg-secondary md:grid-cols-2 md:p-8"
  >
    <article
      v-for="(article, i) in news"
      :class="`flex  cursor-pointer flex-col overflow-hidden rounded-xl border-2 border-border bg-card text-center ${
        i === 0 ? 'md:col-span-2' : null
      }`"
    >
      <a :href="article.link" target="_blank" class="flex flex-col justify-between">
        <img :class="`h-3/6 w-full object-cover ${i === 0 ? 'md:h-3/4' : null}`" :src="article.media" />
        <h3 class="border-b-2 border-border p-2 text-center text-xl">
          {{ article.title }}
        </h3>

        <p class="p-2 text-center">{{ article.summary }}</p></a
      >
    </article>
  </section>
</template>

<script setup>
const { news } = await useNews();
</script>
