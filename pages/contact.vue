<template>
  <div class="contact">
    <the-header-page :title="`Contact Us`" />
    <div class="container">
      <div class="contact-content">
        <form @submit.prevent="contact">
          <div class="form-row">
            <div class="form-group col-lg-6 col-md-6 col-12">
              <input
                type="text"
                placeholder="Full Name *"
                v-model="form.name"
                class="custome-input"
              />
            </div>
            <div class="form-group col-lg-6 col-md-6 col-12">
              <input
                type="email"
                placeholder="Email Address *"
                v-model="form.email"
                class="custome-input"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-lg-6 col-md-6 col-12">
              <input
                type="number"
                placeholder="Phone Number *"
                v-model="form.phone"
                class="custome-input"
              />
            </div>
            <div class="form-group col-lg-6 col-md-6 col-12">
              <input
                type="text"
                placeholder="Subject *"
                v-model="form.subject"
                class="custome-input"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-lg-12">
              <textarea
                cols="30"
                rows="5"
                class="custome-input"
                v-model="form.message"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <!-- <button class="contact-btn" type="submit">Send</button> -->
          <button class="contact-btn" type="submit" v-if="!isloading">
            Send
          </button>
          <button class="contact-btn" type="submit" disabled v-else>
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </form>
      </div>
    </div>
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
      form: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        contact_type_id: 1,
        type: 0,
      },
      isloading: false,
    };
  },
  methods: {
    contact() {
      this.isloading = true;
      this.$axios
        .$post(`settings/sendContactUs`, this.form)
        .then((res) => {
          console.log(res);
          if (res.code == 0) {
            new Swal({
              position: "top-end",
              icon: "error",
              text: res.msg,
              showConfirmButton: false,
              timer: 3000,
            });
          } else {
            new Swal({
              position: "top-end",
              icon: "success",
              text: res.msg,
              showConfirmButton: false,
              timer: 3000,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.isloading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
