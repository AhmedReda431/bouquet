<template>
  <div class="content change-pass-content">
    <form @submit.prevent="changePass">
      <div class="form-row">
        <div class="form-group col-lg-6 col-md-6 col-12">
          <input
            type="password"
            placeholder="Old Password *"
            v-model="form.oldPass"
            class="custome-input"
            autocomplete="off"
          />
          <span
            v-if="formErrors && formErrors.new_password"
            class="error-msg"
            >{{ formErrors.new_password[0] }}</span
          >
        </div>
        <div class="form-group col-lg-6 col-md-6 col-12">
          <input
            type="password"
            placeholder="New Password *"
            v-model="form.newPass"
            class="custome-input"
            autocomplete="off"
          />
          <span
            v-if="formErrors && formErrors.new_password"
            class="error-msg"
            >{{ formErrors.new_password[1] }}</span
          >
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-lg-6 col-md-6 col-12">
          <input
            type="password"
            placeholder="Confirm New Password *"
            v-model="form.confPass"
            class="custome-input"
            autocomplete="off"
          />
          <span
            v-if="formErrors && formErrors.new_password"
            class="error-msg"
            >{{ formErrors.new_password[0] }}</span
          >
        </div>
        <div class="form-group col-lg-6 col-md-6 col-12">
          <button class="contact-btn" type="submit">SAVE</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  props: {
    formErrors: {
      type: Object,
      required: true
    }
  },
  layout: "userDash",
  data() {
    return {
      form: {
        oldPass: "",
        newPass: "",
        confPass: ""
      }
    };
  },
  methods: {
    changePass() {
      const formData = new FormData();
      formData.append("old_password", this.form.oldPass);
      formData.append("new_password", this.form.newPass);
      // formData.append("new_password_confirmation", this.form.confPass);
      this.$emit("updatePassword", formData);

      this.$axios
        .post(`stores/updatePassword`, formData)
        .then(res => {
          console.log(res);
         if(res.data.code == 0){
           new Swal({
              position: "top-end",
              icon: "error",
              text: res.data.msg,
              showConfirmButton: false,
              timer: 1500
            });
          } else {
            new Swal({
              position: "top-end",
              icon: "success",
              text: res.data.msg,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        .catch(err => {          
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped></style>
