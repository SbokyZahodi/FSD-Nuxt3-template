// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt'],
  css: ['@/shared/global.css', '@unocss/reset/tailwind.css'],
})
