// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt', '@nuxtjs/tailwindcss'],
  pwa: {
    manifest: {
      name: 'Podium Pulse',
      short_name: 'Podium Pulse',
      description: 'Formula 1 information app',
      start_url: 'https://podiumpulse.netlify.app/',
      id: '/',
      icons: [
        {
          src: '/icons/race-72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: '/icons/race-96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: '/icons/race-120.png',
          sizes: '120x120',
          type: 'image/png',
        },
        {
          src: '/icons/race-128.png',
          sizes: '128x128',
          type: 'image/png',
        },
        {
          src: '/icons/race-144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: '/icons/race-152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: '/icons/race-180.png',
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: '/icons/race-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/race-384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: '/icons/race-512.png',
          sizes: '512x512',
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
