// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@pinia/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  fonts: {
    defaults: {
      weights: [100,200,300,400,500,600,700,800,900],
      styles: ["normal", "italic"],
      
    },
    families: [
      { name: "Inter", provider: "google" }
    ]
  },
   
  nitro: {
    preset: "static"
  },

  ssr: false,

  
})