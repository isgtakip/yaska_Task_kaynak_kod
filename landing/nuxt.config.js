require('dotenv').config()
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Anrufzentrale',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv':'X-UA-Compatible'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [
      { src:"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js", integrity:"sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==", crossorigin:"anonymous", referrerpolicy:"no-referrer"},
      { src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", integrity:"sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8", crossorigin:"anonymous"},
      { src:"https://cdnjs.cloudflare.com/ajax/libs/typed.js/1.1.7/typed.min.js",body: true},
      { src: "https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js",body: true},
      { src: "./assets/js/email_cookie.js", body: true },
      { src:"https://cdn.jsdelivr.net/npm/sweetalert2@11", body:true},
      { src:"https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js",body:true},
      { src: "./assets/js/main.js", body: true },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"preconnect", href:"https://fonts.googleapis.com" },
      { rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin:"anonymous" },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;900&display=swap"},
      { rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css', integrity:"sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT", crossorigin:"anonymous" },
      { rel:'stylesheet', href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" },
      { rel:'stylesheet', href:"https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" },
    ]
  },
  
  css: [
    '@/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/dotenv'
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials:true,
  },
  router: {
    base:
      process.env.NODE_ENV === "development" ? process.env.BASE_URL : "/landing/"
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'de'
    }
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { "loose": true }]
      ]
    }
  }
}
