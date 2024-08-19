import path from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vesp/nuxt-fontawesome',
    '@pinia/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    apiKey: '',
    apiBaseUrl: '',
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      {
        code: 'me',
        file: 'me.json',
      },
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: false,
  },
  fontawesome: {
    icons: {
      solid: ['dollar-sign', 'heart', 'bell', 'angle-down'],
      regular: ['user', 'message', 'bell'],
    },
  },
  alias: {
    '@/utils': path.resolve(__dirname, './utils'),
  },
})
