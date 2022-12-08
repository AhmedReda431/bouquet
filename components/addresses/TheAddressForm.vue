<template>
  <div class="add-address-box">
    <div class="box-header">
      <p class="title">Add New Address</p>
    </div>
    <form @submit.prevent="addNewAddress">
      <div class="form-group">
        <input
          type="text"
          placeholder="Label (Gym, School, Airport, Restaurant ....) *"
          v-model="form.label"
          class="custome-input"
        />
        <span v-if="formErrors && formErrors.label" class="error-msg">{{
          formErrors.label[0]
        }}</span>
      </div>
      <div class="form-group">
        <input
          type="text"
          placeholder="Address *"
          v-model="form.address"
          class="custome-input"
        />
        <span v-if="formErrors && formErrors.address" class="error-msg">{{
          formErrors.address[0]
        }}</span>
      </div>
      <div class="form-row">
        <div class="form-group col-lg-6 col-md-6 col-12">
          <!-- <v-select
            :options="availableLocales ? ar_city : en_city"
            v-model="form.city"
            :dir="availableLocales ? 'rtl' : 'ltr'"
            :placeholder="$t('city')"
            @change="getAddresses"
          ></v-select> -->
          <span v-if="formErrors && formErrors.city" class="error-msg">{{
            formErrors.city[0]
          }}</span>
          <b-form-select
            v-model="form.city"
            class="mb-3 custome-input py-2 height-43"
            @change="getNeighborhoods"
          >
            <b-form-select-option :value="null" disabled
              >Please select an option</b-form-select-option
            >
            <b-form-select-option
              :value="address.id"
              v-for="(address, index) in cities"
              :key="index"
              >{{
                availableLocales ? address.name_ar : address.name_en
              }}</b-form-select-option
            >
          </b-form-select>
        </div>
        <div class="form-group col-lg-6 col-md-6 col-12">
          <!-- <v-select
            :options="availableLocales ? ar_neighbourhood : en_neighbourhood"
            v-model="form.neighbourhood"
            :dir="availableLocales ? 'rtl' : 'ltr'"
            :placeholder="$t('neighbourhood')"
          ></v-select> -->
          <span
            v-if="formErrors && formErrors.neighbourhood"
            class="error-msg"
            >{{ formErrors.neighbourhood[0] }}</span
          >
          <b-form-select v-model="form.neighbourhood" class="mb-3 custome-input py-2 height-43">
            <b-form-select-option :value="null"
              >Please select an option</b-form-select-option
            >
            <b-form-select-option
              :value="neighbor.id"
              v-for="(neighbor, index) in neighborhoods"
              :key="index"
              >{{
                availableLocales ? neighbor.name_ar : neighbor.name_en
              }}</b-form-select-option
            >
          </b-form-select>
        </div>
      </div>
      <button type="submit" class="new-address-btn" v-if="!isLoading">
        ADD NEW ADDRESS
      </button>
      <button class="new-address-btn" type="submit" disabled v-else>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      isLoading: false,
      en_city: ["Canada", "United States"],
      ar_city: ["كندا", "امريكا"],
      en_neighbourhood: ["Canada", "United States"],
      ar_neighbourhood: ["كندا", "امريكا"],
      cities:[],
      neighborhoods:[],
      formErrors: [],
      form: {
        label: "",
        address: "",
        city: "",
        neighbourhood: "",
      },
      addresses: [],
      selectedCity: null,
      selectedNeighbor: null,
    };
  },
  computed: {
    availableLocales() {
      let local = this.$i18n.locales.filter(
        (i) => i.code !== this.$i18n.locale
      );
      if (local[0].code == "en") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    addNewAddress() {
      // const formData = new FormData();
      // formData.append("label", this.form.label);
      // formData.append("address", this.form.address);
      // formData.append("city", this.form.city);
      // formData.append("neighbourhood", this.form.neighbourhood);
      // console.log(formData);
      this.isLoading = true;
      let data = {
        title: this.form.label,
        address: this.form.address,
        city_id: this.form.city,
        neighborhood_id: this.form.neighbourhood,
      };
      console.log(data);
      this.$axios
        .$post(`users/addresses/addAddress`, data)
        .then((res) => {
          console.log(res);
          if (res.code == 0) {
            new Swal({
              position: "center",
              icon: "error",
              text: res.msg,
              showConfirmButton: true,
            });
          } else {
            new Swal({
              position: "center",
              icon: "success",
              text: res.msg,
              showConfirmButton: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    getAddresses() {
      this.$axios
        .$get(`settings/getCitiesWithNeighborhoods`)
        .then((res) => {
          console.log(res);
          this.cities = res.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getNeighborhoods() {
      this.$axios
        .$get(`settings/getNeighborhoods?city_id=${this.form.city}`)
        .then((res) => {
          console.log("neighborhoods", res);
          this.neighborhoods = res.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getAddresses();
  },
};
</script>

<style lang="scss" scoped></style>
