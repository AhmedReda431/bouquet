export default {
  head: {
    title: "bouquet",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: [
    "~assets/scss/main.scss",
    // "@fortawesome/fontawesome-svg-core/styles.css"
  ],

  plugins: [
    "~plugins/axiosConfig",
    "~plugins/api",
    "~plugins/sweetAlert",
    // "~/plugins/fontawesome.js",
    { src: "~plugins/localStorage", ssr: false },
    { src: "~plugins/socialShare" },
    "~plugins/mixins",
    { src: "~plugins/vueDatePicker.js", ssr: false },
    { src: "~/plugins/modal.js", ssr: false },
  ],

  components: true,

  buildModules: [],

  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "nuxt-vue-select",
    "@nuxtjs/i18n",
    "@nuxtjs/cloudinary",
    // 'vue-social-sharing/nuxt'
    // 'vue-socialmedia-share'
    ["cookie-universal-nuxt", { alias: "cookiz" }],
  ],

  axios: {
    baseURL: "https://klm.cdy.mybluehost.me/bouquet/api/",
  },

  auth: {
    plugins: [{ src: "~plugins/axiosConfig.js", ssr: true }],
    redirect: {
      login: "users/login",
      logout: "/",
      callback: "users/login",
      home: "/",
    },
    strategies: {
      local: {
        token: {
          property: "token",
          required: true,
          type: "Bearer",
        },
        user: {
          property: false, // here should be `false`, as you defined in user endpoint `propertyName`
          autoFetch: true,
        },
        endpoints: {
          login: { url: "users/login", method: "post" },
          logout: false,
          user: { url: "user", method: "get" },
        },
        redirect: {
          login: "/",
          logout: "/auth/user/login",
          home: "/",
        },
        // tokenRequired: true,
        // tokenType: '',
      },
    },
  },

  i18n: {
    locales: [
      {
        code: "ar",
        iso: "ar-AR",
        name: "Ar",
        file: "ar.json",
      },
      {
        code: "en",
        iso: "en-US",
        name: "En",
        file: "en.json",
      },
    ],
    langDir: "locales/",
    defaultLocale: "en",
    noPrefixDefaultLocale: true,
    vueI18n: {
      fallbackLocale: ["en", "ar"],
      // messages: {
      //   ar: require("./locales/ar.json"),
      //   en: require("./locales/en.json")
      // }
    },
  },

  styleResources: {
    scss: ["./assets/sass/*.scss"],
  },

  cloudinary: {
    cloudName: "bouquet",
    useComponent: true,
  },

  router: {
    prefetchLinks: false,
    // base:'/bouquet/'
  },

  build: {
    babel: {
      compact: true,
    },
  },
  server: {
    port: 8000, // default: 3000
  },
};
