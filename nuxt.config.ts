// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt'],
  css: ['@/shared/global.css', '@unocss/reset/tailwind.css'],

  imports: {
    dirs: [
      'shared/composables',
      'shared/utils',
      // You can specify here any folder from which you want to auto-import
    ],
  },

  components: {
    dirs: [
      {
        path: '~/shared/components',
        pathPrefix: false,
      },

    ],
  },

})
