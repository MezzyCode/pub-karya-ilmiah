// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@unocss/nuxt'
  ],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'reseaVueBase',
        themes: {
          reseaVueBase: {
            dark: true,
            colors: {
              primary: '#39762e',
              secondary: '#6b2e76',
            }
          }
        },
        variations: {
          colors: ['primary', 'secondary'],
          lighten: 2,
          darken: 2,
        },
      }
    }
  },
  devtools: { enabled: true }
})
