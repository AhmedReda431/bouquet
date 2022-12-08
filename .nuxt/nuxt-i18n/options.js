import locale38517862 from '../..\\locales\\ar.json'
import locale9ec66352 from '../..\\locales\\en.json'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":["en","ar"]},
  vueI18nLoader: false,
  locales: [{"code":"ar","iso":"ar-AR","name":"Ar","file":"ar.json"},{"code":"en","iso":"en-US","name":"En","file":"en.json"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: "D:\\bouquet - Copy\\locales",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  noPrefixDefaultLocale: true,
  normalizedLocales: [{"code":"ar","iso":"ar-AR","name":"Ar","file":"ar.json"},{"code":"en","iso":"en-US","name":"En","file":"en.json"}],
  localeCodes: ["ar","en"],
}

export const localeMessages = {
  'ar.json': () => Promise.resolve(locale38517862),
  'en.json': () => Promise.resolve(locale9ec66352),
}
