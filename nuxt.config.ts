import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    widgets: fileURLToPath(new URL("./widgets", import.meta.url)),
    shared: fileURLToPath(new URL("./shared", import.meta.url)),
    features: fileURLToPath(new URL("./features", import.meta.url)),
    entities: fileURLToPath(new URL("./entities", import.meta.url)),
  },
  modules: ["@unocss/nuxt"],
  css: ["@/shared/global.css", "@unocss/reset/tailwind.css"],
});
