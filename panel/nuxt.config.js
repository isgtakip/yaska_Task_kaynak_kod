import colors from 'vuetify/es5/util/colors'
require('dotenv').config()
/*eslint-disable*/
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Kontrol Paneli',
    title: 'Kontrol Paneli',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Prompt:wght@200;300&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/vue-progress-path'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth-next',
  ],


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials:true,
  },

  watchers: {
    webpack: {
      ignored: /node_modules/
    }
  },
  auth: {
    cookie: {
      options: {
        secure: true,
        name: 'XSRF-TOKEN',
        secure: true
      },
    },

    redirect: {
      login: "/login",
      logout: "/login",
      callback: false,
      home: "/"

    },

    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: process.env.baseURL,
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName:false,
            withCredentials: true, 
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json'
              }
          },
        
          user: { 
            url: '/api/user', 
            method: 'get', 
            propertyName: false,
            withCredentials: true, 
                    headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                    }
        }
        },
      },
    },
//Set-Cookie: widget_session=abc123; SameSite=None; Secure


    plugins: [
      '~/plugins/axios.js',      
    ]
  },
  //plugins: [{src: '~/plugins/full-calendar', ssr: false}],

  router: {
    middleware: ['auth'],
    base: process.env.NODE_ENV === "development" ? process.env.BASE_URL : "/panel/"
  },



  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'tr'
    }
  },
  components: true,

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
   },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //transpile: /@fullcalendar.*/, // always needed
  }
}