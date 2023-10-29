// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt', '@nuxtjs/tailwindcss'],
  pwa: {
    manifest: {
      name: 'Podium Pulse',
      short_name: 'Podium Pulse',
      description: 'Formula 1 information app',
      icons: [
        {
          src: '/race.png',
          sizes: '144x144',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      title: 'Podium Pulse | F1',
      meta: [{ name: 'description', content: 'Everything about formula 1' }],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'icon', type: 'image/x-icon', href: '/race.png' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      newsApiKey: process.env.NEWS_API_KEY,
    },
  },
});
