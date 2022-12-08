import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1d2bab5a = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _3ce3861f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _58655fbf = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _f929dda6 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _14a0b6c9 = () => interopDefault(import('..\\pages\\quote.vue' /* webpackChunkName: "pages/quote" */))
const _323d7758 = () => interopDefault(import('..\\pages\\terms.vue' /* webpackChunkName: "pages/terms" */))
const _3af82fd5 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _d12b1a64 = () => interopDefault(import('..\\pages\\auth\\register.vue' /* webpackChunkName: "pages/auth/register" */))
const _64270b5c = () => interopDefault(import('..\\pages\\profile\\addresses.vue' /* webpackChunkName: "pages/profile/addresses" */))
const _49b61352 = () => interopDefault(import('..\\pages\\profile\\change-password.vue' /* webpackChunkName: "pages/profile/change-password" */))
const _2daf8e8e = () => interopDefault(import('..\\pages\\profile\\chat.vue' /* webpackChunkName: "pages/profile/chat" */))
const _b1e2f85c = () => interopDefault(import('..\\pages\\profile\\favorite.vue' /* webpackChunkName: "pages/profile/favorite" */))
const _12ec4629 = () => interopDefault(import('..\\pages\\profile\\general-info.vue' /* webpackChunkName: "pages/profile/general-info" */))
const _07959e0f = () => interopDefault(import('..\\pages\\profile\\history-order.vue' /* webpackChunkName: "pages/profile/history-order" */))
const _155904a1 = () => interopDefault(import('..\\pages\\profile\\notification.vue' /* webpackChunkName: "pages/profile/notification" */))
const _45b35fce = () => interopDefault(import('..\\pages\\supplier\\change-password.vue' /* webpackChunkName: "pages/supplier/change-password" */))
const _12258827 = () => interopDefault(import('..\\pages\\supplier\\chat.vue' /* webpackChunkName: "pages/supplier/chat" */))
const _0f9e6f43 = () => interopDefault(import('..\\pages\\supplier\\delivery.vue' /* webpackChunkName: "pages/supplier/delivery" */))
const _4180d27c = () => interopDefault(import('..\\pages\\supplier\\general-info.vue' /* webpackChunkName: "pages/supplier/general-info" */))
const _74a73ed4 = () => interopDefault(import('..\\pages\\supplier\\history-order.vue' /* webpackChunkName: "pages/supplier/history-order" */))
const _45c07ecd = () => interopDefault(import('..\\pages\\supplier\\manage-products.vue' /* webpackChunkName: "pages/supplier/manage-products" */))
const _3ca7558c = () => interopDefault(import('..\\pages\\supplier\\notification.vue' /* webpackChunkName: "pages/supplier/notification" */))
const _78260332 = () => interopDefault(import('..\\pages\\supplier\\statistics.vue' /* webpackChunkName: "pages/supplier/statistics" */))
const _62e0bc6c = () => interopDefault(import('..\\pages\\supplier\\subscription.vue' /* webpackChunkName: "pages/supplier/subscription" */))
const _29580164 = () => interopDefault(import('..\\pages\\auth\\supplier\\forget.vue' /* webpackChunkName: "pages/auth/supplier/forget" */))
const _32b76654 = () => interopDefault(import('..\\pages\\auth\\supplier\\supplierLogin.vue' /* webpackChunkName: "pages/auth/supplier/supplierLogin" */))
const _46d1ee63 = () => interopDefault(import('..\\pages\\auth\\user\\forget.vue' /* webpackChunkName: "pages/auth/user/forget" */))
const _7bd92963 = () => interopDefault(import('..\\pages\\auth\\user\\login.vue' /* webpackChunkName: "pages/auth/user/login" */))
const _262dd668 = () => interopDefault(import('..\\pages\\profile\\order\\rate.vue' /* webpackChunkName: "pages/profile/order/rate" */))
const _7274ce61 = () => interopDefault(import('..\\pages\\supplier\\product\\add.vue' /* webpackChunkName: "pages/supplier/product/add" */))
const _6b24d262 = () => interopDefault(import('..\\pages\\profile\\order\\_id.vue' /* webpackChunkName: "pages/profile/order/_id" */))
const _1dd5158a = () => interopDefault(import('..\\pages\\supplier\\order\\_id.vue' /* webpackChunkName: "pages/supplier/order/_id" */))
const _909ccaaa = () => interopDefault(import('..\\pages\\categories\\_id.vue' /* webpackChunkName: "pages/categories/_id" */))
const _585e19a3 = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _08445508 = () => interopDefault(import('..\\pages\\store\\_id.vue' /* webpackChunkName: "pages/store/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1d2bab5a,
    name: "about___en"
  }, {
    path: "/ar",
    component: _3ce3861f,
    name: "index___ar"
  }, {
    path: "/cart",
    component: _58655fbf,
    name: "cart___en"
  }, {
    path: "/contact",
    component: _f929dda6,
    name: "contact___en"
  }, {
    path: "/quote",
    component: _14a0b6c9,
    name: "quote___en"
  }, {
    path: "/terms",
    component: _323d7758,
    name: "terms___en"
  }, {
    path: "/test",
    component: _3af82fd5,
    name: "test___en"
  }, {
    path: "/ar/about",
    component: _1d2bab5a,
    name: "about___ar"
  }, {
    path: "/ar/cart",
    component: _58655fbf,
    name: "cart___ar"
  }, {
    path: "/ar/contact",
    component: _f929dda6,
    name: "contact___ar"
  }, {
    path: "/ar/quote",
    component: _14a0b6c9,
    name: "quote___ar"
  }, {
    path: "/ar/terms",
    component: _323d7758,
    name: "terms___ar"
  }, {
    path: "/ar/test",
    component: _3af82fd5,
    name: "test___ar"
  }, {
    path: "/auth/register",
    component: _d12b1a64,
    name: "auth-register___en"
  }, {
    path: "/profile/addresses",
    component: _64270b5c,
    name: "profile-addresses___en"
  }, {
    path: "/profile/change-password",
    component: _49b61352,
    name: "profile-change-password___en"
  }, {
    path: "/profile/chat",
    component: _2daf8e8e,
    name: "profile-chat___en"
  }, {
    path: "/profile/favorite",
    component: _b1e2f85c,
    name: "profile-favorite___en"
  }, {
    path: "/profile/general-info",
    component: _12ec4629,
    name: "profile-general-info___en"
  }, {
    path: "/profile/history-order",
    component: _07959e0f,
    name: "profile-history-order___en"
  }, {
    path: "/profile/notification",
    component: _155904a1,
    name: "profile-notification___en"
  }, {
    path: "/supplier/change-password",
    component: _45b35fce,
    name: "supplier-change-password___en"
  }, {
    path: "/supplier/chat",
    component: _12258827,
    name: "supplier-chat___en"
  }, {
    path: "/supplier/delivery",
    component: _0f9e6f43,
    name: "supplier-delivery___en"
  }, {
    path: "/supplier/general-info",
    component: _4180d27c,
    name: "supplier-general-info___en"
  }, {
    path: "/supplier/history-order",
    component: _74a73ed4,
    name: "supplier-history-order___en"
  }, {
    path: "/supplier/manage-products",
    component: _45c07ecd,
    name: "supplier-manage-products___en"
  }, {
    path: "/supplier/notification",
    component: _3ca7558c,
    name: "supplier-notification___en"
  }, {
    path: "/supplier/statistics",
    component: _78260332,
    name: "supplier-statistics___en"
  }, {
    path: "/supplier/subscription",
    component: _62e0bc6c,
    name: "supplier-subscription___en"
  }, {
    path: "/ar/auth/register",
    component: _d12b1a64,
    name: "auth-register___ar"
  }, {
    path: "/ar/profile/addresses",
    component: _64270b5c,
    name: "profile-addresses___ar"
  }, {
    path: "/ar/profile/change-password",
    component: _49b61352,
    name: "profile-change-password___ar"
  }, {
    path: "/ar/profile/chat",
    component: _2daf8e8e,
    name: "profile-chat___ar"
  }, {
    path: "/ar/profile/favorite",
    component: _b1e2f85c,
    name: "profile-favorite___ar"
  }, {
    path: "/ar/profile/general-info",
    component: _12ec4629,
    name: "profile-general-info___ar"
  }, {
    path: "/ar/profile/history-order",
    component: _07959e0f,
    name: "profile-history-order___ar"
  }, {
    path: "/ar/profile/notification",
    component: _155904a1,
    name: "profile-notification___ar"
  }, {
    path: "/ar/supplier/change-password",
    component: _45b35fce,
    name: "supplier-change-password___ar"
  }, {
    path: "/ar/supplier/chat",
    component: _12258827,
    name: "supplier-chat___ar"
  }, {
    path: "/ar/supplier/delivery",
    component: _0f9e6f43,
    name: "supplier-delivery___ar"
  }, {
    path: "/ar/supplier/general-info",
    component: _4180d27c,
    name: "supplier-general-info___ar"
  }, {
    path: "/ar/supplier/history-order",
    component: _74a73ed4,
    name: "supplier-history-order___ar"
  }, {
    path: "/ar/supplier/manage-products",
    component: _45c07ecd,
    name: "supplier-manage-products___ar"
  }, {
    path: "/ar/supplier/notification",
    component: _3ca7558c,
    name: "supplier-notification___ar"
  }, {
    path: "/ar/supplier/statistics",
    component: _78260332,
    name: "supplier-statistics___ar"
  }, {
    path: "/ar/supplier/subscription",
    component: _62e0bc6c,
    name: "supplier-subscription___ar"
  }, {
    path: "/auth/supplier/forget",
    component: _29580164,
    name: "auth-supplier-forget___en"
  }, {
    path: "/auth/supplier/supplierLogin",
    component: _32b76654,
    name: "auth-supplier-supplierLogin___en"
  }, {
    path: "/auth/user/forget",
    component: _46d1ee63,
    name: "auth-user-forget___en"
  }, {
    path: "/auth/user/login",
    component: _7bd92963,
    name: "auth-user-login___en"
  }, {
    path: "/profile/order/rate",
    component: _262dd668,
    name: "profile-order-rate___en"
  }, {
    path: "/supplier/product/add",
    component: _7274ce61,
    name: "supplier-product-add___en"
  }, {
    path: "/ar/auth/supplier/forget",
    component: _29580164,
    name: "auth-supplier-forget___ar"
  }, {
    path: "/ar/auth/supplier/supplierLogin",
    component: _32b76654,
    name: "auth-supplier-supplierLogin___ar"
  }, {
    path: "/ar/auth/user/forget",
    component: _46d1ee63,
    name: "auth-user-forget___ar"
  }, {
    path: "/ar/auth/user/login",
    component: _7bd92963,
    name: "auth-user-login___ar"
  }, {
    path: "/ar/profile/order/rate",
    component: _262dd668,
    name: "profile-order-rate___ar"
  }, {
    path: "/ar/supplier/product/add",
    component: _7274ce61,
    name: "supplier-product-add___ar"
  }, {
    path: "/ar/profile/order/:id?",
    component: _6b24d262,
    name: "profile-order-id___ar"
  }, {
    path: "/ar/supplier/order/:id?",
    component: _1dd5158a,
    name: "supplier-order-id___ar"
  }, {
    path: "/ar/categories/:id?",
    component: _909ccaaa,
    name: "categories-id___ar"
  }, {
    path: "/ar/products/:id?",
    component: _585e19a3,
    name: "products-id___ar"
  }, {
    path: "/ar/store/:id?",
    component: _08445508,
    name: "store-id___ar"
  }, {
    path: "/profile/order/:id?",
    component: _6b24d262,
    name: "profile-order-id___en"
  }, {
    path: "/supplier/order/:id?",
    component: _1dd5158a,
    name: "supplier-order-id___en"
  }, {
    path: "/categories/:id?",
    component: _909ccaaa,
    name: "categories-id___en"
  }, {
    path: "/products/:id?",
    component: _585e19a3,
    name: "products-id___en"
  }, {
    path: "/store/:id?",
    component: _08445508,
    name: "store-id___en"
  }, {
    path: "/",
    component: _3ce3861f,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
