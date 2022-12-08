<template>
  <div class="content profile-info-content">
    <form @submit.prevent="editProfile">
      <div class="supplier-header">
        <div
          class="supplier-cover"
          :style="
            cover_file
              ? `background-image: url('${cover_file}')`
              : 'background-color: #F6F6F7'
          "
        >
          <label for="cover-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              style="fill: #A0AEC0;"
            >
              <path
                d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-8 12c-2.71 0-5-2.29-5-5 0-2.711 2.29-5 5-5s5 2.289 5 5c0 2.71-2.29 5-5 5z"
              ></path>
              <path d="M13 9h-2v2H9v2h2v2h2v-2h2v-2h-2z"></path>
            </svg>
            <input
              type="file"
              accept="image/*"
              @change="uploadCover"
              id="cover-img"
            />
          </label>
        </div>

        <div class="supplier-profile">
          <div class="profile-img">
            <img :src="profile_file" alt="avatar" v-if="profile_file" />
            <img src="~/assets/images/icons/avatar.svg" alt="avatar" v-else />

            <label for="profile-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                style="fill: #A0AEC0;"
              >
                <path
                  d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-8 12c-2.71 0-5-2.29-5-5 0-2.711 2.29-5 5-5s5 2.289 5 5c0 2.71-2.29 5-5 5z"
                ></path>
                <path d="M13 9h-2v2H9v2h2v2h2v-2h2v-2h-2z"></path>
              </svg>
              <input
                type="file"
                accept="image/*"
                @change="uploadProfile"
                id="profile-img"
              />
            </label>
          </div>
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="form-group col-lg-6 col-md-6 col-12">
          <input
            type="text"
            placeholder="Store Name"
            v-model="form.name"
            class="custome-input"
          />
        </div>
        <div class="form-group col-lg-6 col-md-6 col-12">
          <input
            type="text"
            placeholder="Owner Name"
            v-model="form.owner_name"
            class="custome-input"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-lg-6 col-md-6 col-12">
          <input
            type="email"
            placeholder="Email Address"
            v-model="form.email"
            class="custome-input"
          />
        </div>
        <div class="form-group col-lg-6 col-md-6 col-12">
          <input
            type="number"
            placeholder="Phone Number"
            v-model="form.phone"
            class="custome-input"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-12">
          <input
            type="text"
            placeholder="Address"
            v-model="form.address"
            class="custome-input"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-lg-6 col-md-6 col-12">
          <!-- <v-select :options="options" placholder="city"></v-select> -->
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
          <!-- <v-select :options="options" placholder="nighborhod"></v-select> -->
          <b-form-select
            v-model="form.neighbourhood"
            class="mb-3 custome-input py-2 height-43"
          >
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
      <div class="form-row">
        <div class="form-group col-lg-6 col-md-6 col-12">
          <input
            type="text"
            placeholder="Shop Type"
            v-model="form.type"
            class="custome-input"
          />
        </div>
        <div class="form-group col-lg-6 col-md-6 col-12">
          <input
            type="number"
            placeholder="Id Number"
            v-model="form.numId"
            class="custome-input"
          />
        </div>
      </div>
      <!-- <div class="form-row">
        <div class="form-group col-lg-6 col-md-6 col-12">
          <input
            type="number"
            placeholder="Facebook Id"
            v-model="form.faceId"
            class="custome-input"
          />
        </div>
        <div class="form-group col-lg-6 col-md-6 col-12">
          <input
            type="number"
            placeholder="Twitter Id"
            v-model="form.twiterId"
            class="custome-input"
          />
        </div>
      </div> -->

      <button type="submit" class="info-btn" v-if="!isLoading">SAVE</button>
      <button class="info-btn" type="submit" disabled v-else>
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
  layout: "supplierDash",
  components: {},
  data() {
    return {
      options: ["Canada", "United States"],
      isLoading: false,
      profile_file: null,
      profile_img: null,
      cover_file: null,
      cover_img: null,
      form: {
        name: "",
        owner_name: "",
        email: "",
        phone: "",
        address: "",
        type: "",
        numId: "",
        city_id: null,
        neighborhood_id: null,
        // faceId: "",
        // twiterId: "",
      },
      Categories: null,
      cities: [],
      neighborhoods: [],
    };
  },
  methods: {
    uploadCover(event) {
      var input = event.target;
      if (input?.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.cover_file = e.target.result;
        };
        this.cover_img = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    uploadProfile(event) {
      var input = event.target;
      if (input?.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.profile_file = e.target.result;
        };
        this.profile_img = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    editProfile() {
      this.isLoading = true;
      let payload = new FormData();
      payload.append("name", this.form.name);
      payload.append("owner_name", this.form.owner_name);
      payload.append("phone", this.form.phone);
      payload.append("category_id", this.form.phone);
      payload.append("type", this.form.type);
      payload.append("id_number", this.form.numId);
      payload.append("cover", this.cover_img);
      payload.append("logo", this.profile_img);
      payload.append("city_id", this.form.city_id);
      payload.append("neighborhood_id", this.form.neighborhood_id);
      // payload.append('faceId' ,this.form.faceId )
      // payload.append('twiterId' ,this.form.twiterId )

      this.$axios
        .post("stores/updateProfile", payload)
        .then((res) => {
          if (res.data.code == 0) {
            new Swal({
              position: "center",
              icon: "error",
              text: res.data.msg,
              showConfirmButton: true,
            });
          } else {
            new Swal({
              position: "center",
              icon: "success",
              text: res.data.msg,
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
    getSupplierProfileData() {
      this.$axios
        .$get(`stores/getProfile`, {
          params: {
            firebase_token: "null",
            device_type: 0,
          },
        })
        .then((res) => {
          this.form = { ...res.body };
          this.cover_file = res.body.cover;
          this.profile_file = res.body.logo;
          this.form.numId = res.body.tax_number;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getCategories() {
      await this.$axios
        .$get(`home`)
        .then((res) => {
          this.options = res.body.categories;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
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
    this.getSupplierProfileData();
    this.getCategories();
    this.getAddresses();
  },
  computed: {
    // supplierData(){
    //   return this.$store.state.user
    // }
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
};
</script>
<style lang="scss" scoped></style>
