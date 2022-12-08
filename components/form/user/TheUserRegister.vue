<template>
  <div class="mt-5">
    <form @submit.prevent="register">
      <div class="form-group">
        <input
          type="text"
          :placeholder="$t('full_name')"
          v-model="form.name"
          class="custome-input"
        />
      </div>

      <div class="form-group" :class="{ errorBorder: formErrors.email }">
        <input
          type="email"
          :placeholder="$t('email')"
          v-model="form.email"
          class="custome-input"
        />
        <span v-if="formErrors.email" class="error-msg">{{
          formErrors.email
        }}</span>
        <span v-if="errors && errors.email" class="error-msg">{{
          errors.email[0]
        }}</span>
      </div>

      <div class="form-group" :class="{ errorBorder: formErrors.phone }">
        <input
          type="number"
          :placeholder="$t('phone')"
          v-model="form.phone"
          class="custome-input"
        />
        <span v-if="formErrors.phone" class="error-msg">{{
          formErrors.phone
        }}</span>
        <span v-if="errors && errors.phone" class="error-msg">{{
          errors.phone[0]
        }}</span>
      </div>

      <div class="form-group" :class="{ errorBorder: formErrors.password }">
        <input
          type="password"
          id="password"
          :placeholder="$t('password')"
          v-model="form.password"
          class="custome-input"
          autocomplete="off"
        />
        <span v-if="formErrors.password" class="error-msg">{{
          formErrors.password
        }}</span>
        <span v-if="errors && errors.password" class="error-msg">{{
          errors.password[0]
        }}</span>
      </div>

      <div
        class="form-group mb-2"
        :class="{ errorBorder: formErrors.confPass }"
      >
        <input
          type="password"
          id="confirm-password"
          :placeholder="$t('confirm_password')"
          v-model="form.confPass"
          class="custome-input"
          autocomplete="off"
        />
        <span v-if="formErrors.confPass" class="error-msg">{{
          formErrors.confPass
        }}</span>
      </div>

      <div class="mt-3 mb-3 accept-terms">
        <p>
          <input
            type="checkbox"
            class="custome-checkbox"
            id="aterms"
            v-model="accept"
            :checked="accept"
          />
          <label for="aterms">{{ $t("accept_terms") }}</label>
        </p>
        <div class="popover__content">
          <nuxt-link :to="localePath('/terms')" class="popover__message"
            >Terms & Conditions</nuxt-link
          >
        </div>
      </div>
      <button
        class="auth-btn"
        type="submit"
        v-if="!isloading"
        :disabled="!accept"
      >
        {{ $t("sign_in") }}
      </button>
      <button class="auth-btn" type="submit" disabled v-else>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </form>
    <p class="content-bottom mt-4">{{$t('have_account')}}<nuxt-link :to="localePath('/auth/user/login')">{{ $t('sign_in') }}</nuxt-link></p>
  </div>
</template>

<script>
import register from "~/mixins/register";

// import Swal from "sweetalert2";
export default {
  props: {
    errors: {
      type: Object,
      required: true
    }
  },
  mixins: [register],
  data() {
    return {
      isloading: false,
      formErrors: [],
      form: {
        name: "",
        email: "",
        phone: "",
        password: "",
        confPass: ""
      },
      accept: false
    };
  },
  methods: {
    register() {
      this.isloading = true;
      const formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("email", this.form.email);
      formData.append("phone", this.form.phone);
      formData.append("password", this.form.password);
      // formData.append("password_confirmation", this.form.confPass);
      // if (this.validForm) {
        // this.$emit("register", formData);
        this.$store
          .dispatch("authentication/Register/postRegisterUser", formData)
          .then((res) => {

            console.log("res" , res);
            if (this.$auth.user) {
              this.$router.push("/");
            }
        
          })
          .catch(err =>{
            console.log(err.response);
          })
          .finally(() => {
            this.isloading = false;
          });
      // } else {
      //   // this.$emit("wrongData");
      //   this.isloading = false;
      // }
    }
  }
};
</script>

<style lang="scss" scoped></style>
