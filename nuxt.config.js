export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Uang Kerja',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Kelola keuanganmu untuk masa depan yang lebih baik.' },
      { property:"og:url", content:"https://www.uangkerja.id"},
      { property:"og:type", content:"website"},
      { property:"og:title", content:"Uang Kerja | Kelola keuanganmu untuk masa depan yang lebih baik"},
      { property:"og:site_name", content:"Uang Kerja"},
      { property:"og:image", content:"/thumbnail.jpg"},
      { property:"og:description", content:"Kelola keuanganmu untuk masa depan yang lebih baik."},
      { property:"twitter:title", content:"Uang Kerja | Kelola keuanganmu untuk masa depan yang lebih baik"},
      { property:"twitter:site", content:"Uang Kerja"},
      { property:"twitter:image", content:"/thumbnail.jpg"},
      { property:"twitter:image:src", content:"/thumbnail.jpg"},
      { property:"twitter:card", content:"summary_large_image"},
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
    '@nuxtjs/google-fonts'
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
      'Open+Sans': true,
    }
  }
}
