<template>
  <form @submit.prevent="editProfile">
    <div class="form-row">
      <div class="form-group col-lg-6 col-md-6 col-12">
        <input
          type="text"
          placeholder="Full Name *"
          v-model="user.name"
          class="custome-input"
        />
      </div>
      <div class="form-group col-lg-6 col-md-6 col-12">
        <input
          type="email"
          placeholder="Email Address"
          v-model="user.email"
          class="custome-input"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-lg-6 col-md-6 col-12">
        <input
          type="number"
          placeholder="Phone Number"
          v-model="user.phone"
          class="custome-input"
        />
      </div>
      <div class="form-group col-lg-6 col-md-6 col-12">
        <button type="submit" class="info-btn" v-if="!isLoading">SAVE</button>
        <button class="info-btn" type="submit" disabled v-else>
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
        city_id: "",
        neighborhood_id: "3",
        address: "cairo",
        device_type: "0",
        firebase_token: "null",
      },
      isLoading: false,
      profileData:[]
    };
  },
  methods: {
    editProfile() {
      const formData = new FormData();
      formData.append("username", this.user.name);
      formData.append("email", this.user.email);
      formData.append("phone", this.user.phone);
      formData.append("city_id", this.user.city_id);
      formData.append("neighborhood_id", this.user.neighborhood_id);
      formData.append("address", this.user.address);
      formData.append("device_type", 0);
      formData.append("firebase_token", 'null');
      this.$axios
        .$post(`users/updateProfile`, formData)
        .then((res) => {
          console.log(res);
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
            this.getProfileData()
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProfileData() {
      this.$axios
        .$get(`users/getProfile`, {
          params: {
            firebase_token: "null",
            device_type: 0,
          },
        })
        .then((res) => {
          this.user = {...res.body}
        });
    },
  },
  mounted() {
    this.getProfileData()
  },
};
</script>

<style lang="scss" scoped></style>
