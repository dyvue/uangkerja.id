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
      { hid: 'description', name: 'description', content: 'Let money work for you.' },
      { name:"google-site-verification", content:"m1vN0vRt6dF6DQpnxKNikjn6U-y-DwcrO0cc6D3kk1s"},
      { property:"og:locale", content:"id_ID"},
      { property:"og:url", content:"https://www.uangkerja.id"},
      { property:"og:type", content:"website"},
      { property:"og:site_name", content:"Uang Kerja"},
      { property:"og:title", content:"Uang Kerja - Let money work for you"},
      { property:"og:description", content:"Platform edukasi keuangan untuk Zillennials."},
      { property:"og:image", content:"https://www.uangkerja.id/img/logo-hr.png"},
      { property:"og:image:width", content:"786"},
      { property:"og:image:height", content:"203"},
      { name:"twitter:card", content:"summary_large_image"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/sass/app.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
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
    id: "G-ETTVT8FB4L",
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: "G-ETTVT8FB4L"
    }
  }
}
