<template>
  <div class="auth-page">
    <the-header-page :title="$t('sign_up')"/>
    <div class="container">
      <div class="tabs-header">
        <button type="button" class="auth-reg-btn" :class="{ active: regType == 'user' }" @click="changeType('user')">{{ $t("user") }}</button>
        <button type="button" class="auth-reg-btn" :class="{ active: regType == 'supplier' }" @click="changeType('supplier')">{{ $t("supplier") }}</button>
      </div>
      <div class="row">
        <div class="col-lg-7 col-md-6 col-12 mb-5">
          <div class="auth-content">
            <div class="auth-header">
              <p class="title">{{ $t('auth_welcome') }}!</p>
              <p class="sub-title">{{ $t('sub_auth_welcome') }}</p>
            </div>
            <the-user-register v-if="regType == 'user'" @register="register" @wrongData="wrongData" :errors="errors"/>
            <the-supplier-register v-if="regType == 'supplier'" @supplierRegister="supplierRegister" @wrongData="wrongData" :supplierErrors="supplierErrors"/>
            
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-12 mb-5">
          <div class="auth-img">
            <img src="~/assets/images/intro2.svg" alt="img1">
          </div>
        </div>
      </div>
    </div>
    <transition appear name="slide-fade">
      <the-alert :text="errorMsg.text" :msg="errorMsg.msg" v-if="showModel" @close="showModel = false"/>
    </transition>
  </div>
</template>

<script>
import TheUserRegister from '~/components/form/user/TheUserRegister.vue'
import TheSupplierRegister from '~/components/form/supplier/TheSupplierRegister.vue'
import TheHeaderPage from '~/components/shared/TheHeaderPage.vue'
import TheAlert from '~/components/alert/TheAlert.vue';
  export default {
    components: {
      TheHeaderPage,
      TheUserRegister,
      TheSupplierRegister,
      TheAlert
    },
    data() {
      return {
        regType: 'user',
        showModel: false,
        errorMsg: {
          text: '',
          msg: ''
        },
        errors: {},
        supplierErrors: {}
      }
    },
    watch: {
      showModel: function (val) {
        if (val) {
          setTimeout(() => {
            this.showModel = false
          }, 4000);
        }
      },
      errors: function (val) {
        if (val) {
          setTimeout(() => {
            this.errors = {}
          }, 4000);
        }
      },
      supplierErrors: function (val) {
        if (val) {
          setTimeout(() => {
            this.supplierErrors = {}
          }, 4000);
        }
      },
    },
    methods: {
      changeType(e) {
        this.regType = e
      },
      wrongData() {
          this.errorMsg.text = "your data is wrong"
          this.errorMsg.msg = "error"
          this.showModel = true
      },
      supplierRegister(event) {
        console.log(event);
      },
      register(event) {
        console.log(event);
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
