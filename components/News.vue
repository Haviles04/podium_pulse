<template>
  <section
    class="m-auto mt-20 grid max-w-[1000px] grid-cols-1 gap-10 rounded-xl bg-secondary md:grid-cols-2 md:p-8 items-center"
  >
    <article
      v-for="(article, i) in news"
      :class="`flex cursor-pointer flex-col justify-evenly overflow-hidden rounded-xl h-full border-2 border-border bg-card text-center ${
        i === 0 ? 'md:col-span-2' : null
      }`"
    >
      <a :href="article.link" target="_blank" class="flex flex-col justify-between">
        <img
          :class="`h-3/6 w-full object-cover ${i === 0 ? 'md:h-3/4' : null}`"
          :src="article.images[0].url"
          alt="News Article Image"
        />
        <h3 class="border-b-2 border-border text-center text-xl p-2">
          {{ article.headline }}
        </h3>

        <p class="p-4 text-center">{{ article.description }}</p></a
      >
    </article>
  </section>
</template>

<script setup>
const { news } = await useNews();
</script>
