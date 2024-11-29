// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "nuxt-headlessui",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/icon"
  ],
  fonts: {
    families: [
      { name: 'afterSmile', provider: 'local' },
      { name: 'poppins', provider: 'local' },
      { name: 'parkinsans', provider: 'local' },
    ]
  }
});