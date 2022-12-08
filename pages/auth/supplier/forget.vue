<template>
  <div class="auth-page">
    <template v-if="step == 1">
      <the-header-page :title="`Forget Password (Step 1 Of 3)`" />
      <div class="container pt-5 pb-5">
        <div class="row">
          <div class="col-lg-6">
            <div class="auth-content">
              <div class="auth-header">
                <p class="sub-title">{{ $t("have_account") }}</p>
              </div>
              <div class="mt-5">
                <div class="form-group" :class="{ errorBorder: validMsg }">
                  <input
                    type="email"
                    :placeholder="$t('email')"
                    v-model="form.email"
                    class="custome-input"
                  />
                  <span v-if="validMsg" class="error-msg"
                    >Please, Enter Valid email</span
                  >
                </div>
                <button
                  class="auth-btn"
                  type="button"
                  @click.prevent="addEmail"
                  v-if="!isloading"
                >
                  {{ $t("next") }}
                </button>
                <button class="auth-btn" type="button" disabled v-else>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="auth-img">
              <img src="~/assets/images/intro3.svg" alt="img3" />
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="step == 2">
      <the-header-page :title="`Verification Code (Step 2 Of 3)`" />
      <div class="container pt-5 pb-5">
        <div class="row">
          <div class="col-lg-6">
            <div class="auth-content">
              <div class="auth-header">
                <p class="sub-title">
                  Please Enter Your code To Reset Password
                </p>
              </div>
              <div class="mt-5">
                <div class="form-content verify-content mb-4">
                  <input
                    type="text"
                    class="input-foucs"
                    :placeholder="$t('input_code')"
                    v-model="code"
                  />
                </div>

                <div class="email-address mb-4">
                  <p class="title">{{ $t("email") }}</p>
                  <p class="sub-title">{{ form.email }}</p>
                </div>
                <button
                  class="auth-btn"
                  type="button"
                  @click.prevent="verify"
                  v-if="!isloading"
                >
                  {{ $t("verify") }}
                </button>
                <button class="auth-btn" type="button" disabled v-else>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
                <div class="resend-code mt-4">
                  <p class="text">Did Not Receive The Code?</p>
                  <p class="counter">00:59</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="auth-img">
              <img src="~/assets/images/icons/img3.svg" alt="img3" />
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="step == 3">
      <the-header-page :title="`Reset Password (Step 3Of 3)`" />
      <div class="container pt-5 pb-5">
        <div class="row">
          <div class="col-lg-6">
            <div class="auth-content">
              <div class="auth-header">
                <p class="sub-title">
                  Please Enter Your Registered Email Address To Reset Password
                </p>
              </div>
              <div class="mt-5">
                <div class="form-group">
                  <input
                    type="password"
                    :placeholder="$t('password')"
                    v-model="password"
                    class="custome-input"
                    autocomplete="off"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    :placeholder="$t('confirm_password')"
                    v-model="password_confirmation"
                    class="custome-input"
                    autocomplete="off"
                  />
                </div>
                <button
                  class="auth-btn mt-4"
                  type="submit"
                  v-if="!isloading"
                  @click="resetPass"
                >
                  {{ $t("reset_password") }}
                </button>
                <button class="auth-btn mt-4" type="button" disabled v-else>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="auth-img">
              <img src="~/assets/images/icons/img3.svg" alt="img3" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import TheHeaderPage from "~/components/shared/TheHeaderPage.vue";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

export default {
  components: {
    TheHeaderPage,
  },
  data() {
    return {
      code: "",
      password: "",
      password_confirmation: "",
      isloading: false,
      countDown: 10,
      step: 1,
      token: "",
      form: {
        email: "",
      },
      validMsg: false,
    };
  },
  computed: {
    validEmail() {
      let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (emailRegex.test(this.form.email)) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    showModel: function(val) {
      if (val) {
        setTimeout(() => {
          this.showModel = false;
        }, 2000);
      }
    },
  },
  methods: {
    addEmail() {
      this.$axios
        .$post(`stores/requestPasswordReset`, { email: this.form.email })
        .then((res) => {
          // users / getUserRelatedByResetCode;
          if (res.code == 0) {
            new Swal({
              position: "top-end",
              icon: "error",
              text: res.msg,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            new Swal({
              position: "top-end",
              icon: "success",
              text: res.msg,
              showConfirmButton: false,
              timer: 1500,
            });
            this.step = 2;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    verify() {
      this.$axios
        .$post(`stores/getSupplierRelatedByResetCode`, {
          code: this.code,
        })
        .then((res) => {
          if (res.code == 0) {
            new Swal({
              position: "top-end",
              icon: "error",
              text: res.msg,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            new Swal({
              position: "top-end",
              icon: "success",
              text: res.msg,
              showConfirmButton: false,
              timer: 1500,
            });
            this.step = 3;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    resetPass() {
      if (this.password_confirmation === this.password) {
        this.$axios
          .$post(`stores/updatePassword`, {
            new_password: this.password,
            old_password:this.password_confirmation
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        new Swal({
          position: "top-end",
          icon: "success",
          text: "passwords dose not match",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      // console.log(this.password);
      // console.log(this.password_confirmation);
    },
    resendActivationCode() {
      this.$axios.$post(`resendActivationCode`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
