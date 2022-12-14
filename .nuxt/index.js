import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_d30ec030 from 'nuxt_plugin_plugin_d30ec030' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_ea67598c from 'nuxt_plugin_bootstrapvue_ea67598c' // Source: .\\bootstrap-vue.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_ca4e4c9a from 'nuxt_plugin_cookieuniversalnuxt_ca4e4c9a' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_pluginclient_044e9a56 from 'nuxt_plugin_pluginclient_044e9a56' // Source: .\\cloudinary\\plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_6392245d from 'nuxt_plugin_pluginserver_6392245d' // Source: .\\cloudinary\\plugin.server.js (mode: 'server')
import nuxt_plugin_pluginutils_707275c3 from 'nuxt_plugin_pluginutils_707275c3' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_58a6c364 from 'nuxt_plugin_pluginrouting_58a6c364' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_7fb8c03e from 'nuxt_plugin_pluginmain_7fb8c03e' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtvueselect_735fd074 from 'nuxt_plugin_nuxtvueselect_735fd074' // Source: .\\nuxt-vue-select.js (mode: 'client')
import nuxt_plugin_axios_09f2b00b from 'nuxt_plugin_axios_09f2b00b' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_axiosConfig_cec4b1be from 'nuxt_plugin_axiosConfig_cec4b1be' // Source: ..\\plugins\\axiosConfig (mode: 'all')
import nuxt_plugin_api_6e03a23a from 'nuxt_plugin_api_6e03a23a' // Source: ..\\plugins\\api (mode: 'all')
import nuxt_plugin_sweetAlert_d7e1713a from 'nuxt_plugin_sweetAlert_d7e1713a' // Source: ..\\plugins\\sweetAlert (mode: 'all')
import nuxt_plugin_localStorage_3e0f79e7 from 'nuxt_plugin_localStorage_3e0f79e7' // Source: ..\\plugins\\localStorage (mode: 'client')
import nuxt_plugin_socialShare_1d74c03b from 'nuxt_plugin_socialShare_1d74c03b' // Source: ..\\plugins\\socialShare (mode: 'all')
import nuxt_plugin_mixins_509ba2ae from 'nuxt_plugin_mixins_509ba2ae' // Source: ..\\plugins\\mixins (mode: 'all')
import nuxt_plugin_vueDatePicker_6048dc8c from 'nuxt_plugin_vueDatePicker_6048dc8c' // Source: ..\\plugins\\vueDatePicker.js (mode: 'client')
import nuxt_plugin_modal_640f2cc0 from 'nuxt_plugin_modal_640f2cc0' // Source: ..\\plugins\\modal.js (mode: 'client')
import nuxt_plugin_auth_67254bc5 from 'nuxt_plugin_auth_67254bc5' // Source: .\\auth.js (mode: 'all')
import nuxt_plugin_axiosConfig_123cb336 from 'nuxt_plugin_axiosConfig_123cb336' // Source: ..\\plugins\\axiosConfig.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"bouquet","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_d30ec030 === 'function') {
    await nuxt_plugin_plugin_d30ec030(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_ea67598c === 'function') {
    await nuxt_plugin_bootstrapvue_ea67598c(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_ca4e4c9a === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_ca4e4c9a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_044e9a56 === 'function') {
    await nuxt_plugin_pluginclient_044e9a56(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_6392245d === 'function') {
    await nuxt_plugin_pluginserver_6392245d(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_707275c3 === 'function') {
    await nuxt_plugin_pluginutils_707275c3(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_58a6c364 === 'function') {
    await nuxt_plugin_pluginrouting_58a6c364(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_7fb8c03e === 'function') {
    await nuxt_plugin_pluginmain_7fb8c03e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_nuxtvueselect_735fd074 === 'function') {
    await nuxt_plugin_nuxtvueselect_735fd074(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_09f2b00b === 'function') {
    await nuxt_plugin_axios_09f2b00b(app.context, inject)
  }

  if (typeof nuxt_plugin_axiosConfig_cec4b1be === 'function') {
    await nuxt_plugin_axiosConfig_cec4b1be(app.context, inject)
  }

  if (typeof nuxt_plugin_api_6e03a23a === 'function') {
    await nuxt_plugin_api_6e03a23a(app.context, inject)
  }

  if (typeof nuxt_plugin_sweetAlert_d7e1713a === 'function') {
    await nuxt_plugin_sweetAlert_d7e1713a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_localStorage_3e0f79e7 === 'function') {
    await nuxt_plugin_localStorage_3e0f79e7(app.context, inject)
  }

  if (typeof nuxt_plugin_socialShare_1d74c03b === 'function') {
    await nuxt_plugin_socialShare_1d74c03b(app.context, inject)
  }

  if (typeof nuxt_plugin_mixins_509ba2ae === 'function') {
    await nuxt_plugin_mixins_509ba2ae(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueDatePicker_6048dc8c === 'function') {
    await nuxt_plugin_vueDatePicker_6048dc8c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_modal_640f2cc0 === 'function') {
    await nuxt_plugin_modal_640f2cc0(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_67254bc5 === 'function') {
    await nuxt_plugin_auth_67254bc5(app.context, inject)
  }

  if (typeof nuxt_plugin_axiosConfig_123cb336 === 'function') {
    await nuxt_plugin_axiosConfig_123cb336(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
