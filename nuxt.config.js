// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '@picocss/pico/css/pico.css',
  ],
  
  modules: [
    '@pinia/nuxt',
  ]
})
