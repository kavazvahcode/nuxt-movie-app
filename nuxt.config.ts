// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vesp/nuxt-fontawesome',
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
      solid: ['dollar-sign', 'heart'],
      regular: ['user', 'message'],
    },
  },
})
