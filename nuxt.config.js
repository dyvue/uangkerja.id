import getSiteMeta from './utils/getSiteMeta'
const meta = getSiteMeta()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Uang Kerja - Let money work for you',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Platform edukasi keuangan untuk Zillennials.' },
      { name:"google-site-verification", content:"m1vN0vRt6dF6DQpnxKNikjn6U-y-DwcrO0cc6D3kk1s"},
      { property: "og:site_name", content: "Uang Kerja" },
      ...meta
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css' }
    ],
    script: [
      { src: '/js/analytics/facebook.js' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/sass/app.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue/vue-plyr', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Generate 404 error page
  generate: {
    fallback: '404.html'
  },

  // Additional modules cfg
  googleFonts: {
    families: {
      'Montserrat+Alternates:wght@600': true,
      'Montserrat+Alternates:wght@700': true,
      'Poppins': true,
      'Poppins:wght@600': true,
      'Open+Sans': true,
    }
  },

  googleAnalytics: {
    id: "UA-203336253-1",
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: "UA-203336253-1"
    }
  },

  sitemap: {
    hostname: 'https://www.uangkerja.id',
    gzip: true,
    trailingSlash: true,
    routes: [
      '/',
      '/about-us',
      '/articles',
      '/classroom'
    ]
  },

  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'link'
  },

  loading: '@/components/layouts/Loading.vue',

  globals: {
    id: globalName => `__uangkerja`
  },

  build: {
    publicPath: '/__src'
  },
}
