<template>
  <div class="auth-page">
    <the-header-page :title="$t('supplier sign_in')"/>
    <div class="container pt-5 pb-5">
      <div class="row">
        <div class="col-lg-6 pt-5 mb-3">
          <div class="auth-content">
            <div class="auth-header">
              <p class="title">{{ $t('auth_welcome') }}!</p>
              <p class="sub-title">{{ $t('sub_auth_welcome') }}</p>
            </div>
            <the-login @signUp="signUp"/>
            <p class="content-bottom mt-4">{{$t('havent_account')}}<nuxt-link :to="localePath('/auth/register')">{{ $t('sign_up') }}</nuxt-link></p>
          </div>
        </div>
        <div class="col-lg-6 pt-5 mb-3">
          <div class="auth-img">
            <img src="~/assets/images/intro1.svg" alt="img2">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeaderPage from '~/components/shared/TheHeaderPage.vue'
import TheLogin from '~/components/form/supplier/TheSupplierLogin.vue'
  export default {
    components: {
      TheHeaderPage,
      TheLogin
    },
    data() {
      return {
      }
    },
    methods: {
      signUp(event) {
        console.log(event);
      },
      getUserData(event) {
        console.log(event);
      },
    }
  }
</script>

<style lang="scss" scoped>
.slide-fade-enter-from {
  transform: translateY(50px);
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 1s ease 5s;
}
.slide-fade-enter-to {
  transform: translateY(0px);
  opacity: 1;
}
.slide-fade-leave-active {
  transition: opacity 1s;
}
.slide-fade-leave-to {
  opacity: 0;
}
</style>
