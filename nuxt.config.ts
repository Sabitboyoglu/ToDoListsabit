// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-05-15',
css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',       
    '@pinia/nuxt',
  ],
  
})



