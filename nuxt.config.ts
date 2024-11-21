// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@nuxt/fonts',
    'nuxt-headlessui',
    '@nuxtjs/tailwindcss'
  ]
})