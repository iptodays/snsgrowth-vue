// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@pinia/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: false
  }

})