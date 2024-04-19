// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt'],
  css: ['@/app/global.css', '@unocss/reset/tailwind.css'],

  imports: {
    dirs: [
      'shared/**',
      // Auto-import all files from shared directory. You can specify only need paths | https://nuxt.com/docs/guide/directory-structure/composables
    ],
  },

  dir: {
    pages: 'app/routes',
  },

  components: [
    {
      path: '~/shared',
      pathPrefix: false,
      // Auto-import all components from shared directory.
    },
  ],

})
