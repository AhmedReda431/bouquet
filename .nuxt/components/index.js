export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Stories } from '../..\\components\\Stories.vue'
export { default as AlertTheAlert } from '../..\\components\\alert\\TheAlert.vue'
export { default as AddressesTheAddresses } from '../..\\components\\addresses\\TheAddresses.vue'
export { default as AddressesTheAddressForm } from '../..\\components\\addresses\\TheAddressForm.vue'
export { default as CartCounter } from '../..\\components\\cart\\CartCounter.vue'
export { default as CartTheFirstStep } from '../..\\components\\cart\\TheFirstStep.vue'
export { default as CartTheSecondStep } from '../..\\components\\cart\\TheSecondStep.vue'
export { default as HomeTheSlider } from '../..\\components\\home\\TheSlider.vue'
export { default as OrderTheOrders } from '../..\\components\\order\\TheOrders.vue'
export { default as OrderTheStarRating } from '../..\\components\\order\\TheStarRating.vue'
export { default as OrderTheSupplierOrder } from '../..\\components\\order\\TheSupplierOrder.vue'
export { default as ProductsShareProduct } from '../..\\components\\products\\ShareProduct.vue'
export { default as ProductsTab } from '../..\\components\\products\\tab.vue'
export { default as ProductsTabs } from '../..\\components\\products\\tabs.vue'
export { default as ProductsTheGallery } from '../..\\components\\products\\TheGallery.vue'
export { default as ProfileTheProfileCard } from '../..\\components\\profile\\TheProfileCard.vue'
export { default as ProfileTheSideBar } from '../..\\components\\profile\\TheSideBar.vue'
export { default as SharedBlogData } from '../..\\components\\shared\\BlogData.vue'
export { default as SharedTheCard } from '../..\\components\\shared\\TheCard.vue'
export { default as SharedTheCategoriesCard } from '../..\\components\\shared\\TheCategoriesCard.vue'
export { default as SharedTheChat } from '../..\\components\\shared\\TheChat.vue'
export { default as SharedTheFooter } from '../..\\components\\shared\\TheFooter.vue'
export { default as SharedTheHeaderPage } from '../..\\components\\shared\\TheHeaderPage.vue'
export { default as SharedTheHeaderSection } from '../..\\components\\shared\\TheHeaderSection.vue'
export { default as SharedTheLoader } from '../..\\components\\shared\\TheLoader.vue'
export { default as SharedTheNav } from '../..\\components\\shared\\TheNav.vue'
export { default as SharedTheNotification } from '../..\\components\\shared\\TheNotification.vue'
export { default as SharedTheRate } from '../..\\components\\shared\\TheRate.vue'
export { default as SharedTheRating } from '../..\\components\\shared\\TheRating.vue'
export { default as SharedTheStoryCard } from '../..\\components\\shared\\TheStoryCard.vue'
export { default as SharedTheTopRatedCard } from '../..\\components\\shared\\TheTopRatedCard.vue'
export { default as SupplierTheSideBar } from '../..\\components\\supplier\\TheSideBar.vue'
export { default as FormSupplierTheSupplierChangePass } from '../..\\components\\form\\supplier\\TheSupplierChangePass.vue'
export { default as FormSupplierTheSupplierGeneralInfo } from '../..\\components\\form\\supplier\\TheSupplierGeneralInfo.vue'
export { default as FormSupplierTheSupplierLogin } from '../..\\components\\form\\supplier\\TheSupplierLogin.vue'
export { default as FormSupplierTheSupplierRegister } from '../..\\components\\form\\supplier\\TheSupplierRegister.vue'
export { default as FormUserTheLogin } from '../..\\components\\form\\user\\TheLogin.vue'
export { default as FormUserTheUserChangePass } from '../..\\components\\form\\user\\TheUserChangePass.vue'
export { default as FormUserTheUserGeneralInfo } from '../..\\components\\form\\user\\TheUserGeneralInfo.vue'
export { default as FormUserTheUserRegister } from '../..\\components\\form\\user\\TheUserRegister.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
