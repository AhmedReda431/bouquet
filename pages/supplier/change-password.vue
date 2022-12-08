<template>
<div class="content change-pass-content">
  <the-supplier-change-pass @updatePassword="updatePassword" :formErrors="formErrors"/>
  <transition appear name="slide-fade">
    <the-alert :text="errorMsg.text" :msg="errorMsg.msg" v-if="showModel" @close="showModel = false"/>
  </transition>
</div>
</template>


<script>
import TheSupplierChangePass from '~/components/form/supplier/TheSupplierChangePass.vue';
import TheAlert from '~/components/alert/TheAlert.vue';
  export default {
    layout: 'supplierDash',
    components: { TheSupplierChangePass,TheAlert },
    data() {
      return {
        showModel: false,
        errorMsg: {
          text: '',
          msg: ''
        },
        formErrors: {}
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
      formErrors: function (val) {
        if (val) {
          setTimeout(() => {
            this.formErrors = {}
          }, 4000);
        }
      },
    },
    methods: {
      updatePassword(event) {
        console.log(event);
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
