<template>
  <div class="mt-5">
    <form @submit.prevent="supplierRegister">
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
              @input="uploadCover"
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
        <span v-if="supplierErrors && supplierErrors.image" class="error-msg">{{
          supplierErrors.image[0]
        }}</span>
      </div>

      <div class="form-group mt-3">
        <input
          type="text"
          :placeholder="$t('store_name')"
          v-model="form.name"
          class="custome-input"
        />
      </div>

      <div class="form-group">
        <input
          type="text"
          :placeholder="$t('owner_name')"
          v-model="form.owner_name"
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
        <span v-if="supplierErrors && supplierErrors.email" class="error-msg">{{
          supplierErrors.email[0]
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
        <span v-if="supplierErrors && supplierErrors.phone" class="error-msg">{{
          supplierErrors.phone[0]
        }}</span>
      </div>

      <div class="form-group" :class="{ errorBorder: formErrors.address }">
        <input
          type="text"
          :placeholder="$t('address')"
          v-model="form.address"
          class="custome-input"
        />
        <span v-if="formErrors.address" class="error-msg">{{
          formErrors.address
        }}</span>
      </div>

      <div class="form-row">
        <div class="form-group col-lg-6 col-md-6 col-12" @click="getAddresses">
          <!-- <v-select
            :options="availableLocales ? ar_city : en_city"
            v-model="form.city"
            :dir="availableLocales ? 'rtl' : 'ltr'"
            :placeholder="$t('city')"
          ></v-select>
          <span v-if="formErrors && formErrors.city" class="error-msg">{{
            formErrors.city[0]
          }}</span> -->
          <b-form-select @change="getNeighborhoods"
            v-model="form.city"
            class="mb-3 custome-input py-2 height-43"
            
            
          >
            <b-form-select-option :value="null" disabled
              >Please select an option</b-form-select-option
            >
            <b-form-select-option
              :value="city.id"
              v-for="(city, index) in cities"
              :key="index"
              >{{
                availableLocales ? city.name_ar : city.name_en
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
          ></v-select>
          <span
            v-if="formErrors && formErrors.neighbourhood"
            class="error-msg"
            >{{ formErrors.neighbourhood[0] }}</span
          > -->
          <b-form-select v-model="form.neighborhood" class="mb-3 custome-input py-2 height-43">
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
          <v-select
            :options="shopType"
            v-model="form.shop_type"
            placeholder="Shop type"
          ></v-select>
          <span
            v-if="supplierErrors && supplierErrors.shop_type"
            class="error-msg"
            >{{ supplierErrors.shop_type[0] }}</span
          >
        </div>
        <div class="form-group col-lg-6 col-md-6 col-12">
          <input
            type="number"
            :placeholder="$t('id_num')"
            v-model="form.idNum"
            class="custome-input"
          />
          <span v-if="formErrors.idNumber" class="error-msg">{{
            formErrors.idNumber
          }}</span>
          <span
            v-if="supplierErrors && supplierErrors.id_number"
            class="error-msg"
            >{{ supplierErrors.id_number[0] }}</span
          >
        </div>
      </div>

      <div class="form-group" :class="{ errorBorder: formErrors.commercial }">
        <input
          type="number"
          :placeholder="$t('crn')"
          v-model="form.commercial"
          class="custome-input"
          v-if="form.shop_type == 'offline'"
        />
        <span v-if="formErrors.commercial" class="error-msg">{{
          formErrors.commercial
        }}</span>
        <span v-if="supplierErrors && supplierErrors.CRN" class="error-msg">{{
          supplierErrors.CRN[0]
        }}</span>
      </div>

      <div class="form-row">
        <div class="form-group col-12">
          <input
            type="number"
            :placeholder="$t('known_number')"
            v-model="form.known_number"
            class="custome-input"
          />
          <span v-if="formErrors.knownNumber" class="error-msg">{{
            formErrors.knownNumber
          }}</span>
          <span
            v-if="supplierErrors && supplierErrors.known_number"
            class="error-msg"
            >{{ supplierErrors.known_number[0] }}</span
          >
        </div>
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
        {{ $t("sign_up") }}
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
    <p class="content-bottom mt-4">
      {{ $t("have_account")
      }}<nuxt-link :to="localePath('/auth/supplier/supplierLogin')">{{
        $t("sign_in")
      }}</nuxt-link>
    </p>
  </div>
</template>

<script>
import supplierReg from "~/mixins/supplierReg";
import Swal from "sweetalert2";
export default {
  props: {
    supplierErrors: {
      type: Object,
      required: true,
    },
  },
  mixins: [supplierReg],
  data() {
    return {
      options: ["Canada", "United States"],
      isloading: false,
      formErrors: [],
      profile_file: null,
      profile_img: null,
      cover_file: null,
      cover_img: null,
      shopType: ["offline", "online"],
      form: {
        name: "",
        owner_name: "",
        email: "",
        phone: "",
        city: null,
        neighborhood: null,
        address: "",
        commercial: "",
        shop_type: "",
        known_number: "",
        idNum: "",
        password: "",
        confPass: "",
        role_id: "2",
      },
      accept: false,
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

        console.log("reader", reader);
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

    supplierRegister() {
      const formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("owner_name", this.form.owner_name);
      formData.append("email", this.form.email);
      formData.append("phone", this.form.phone);
      formData.append("address", this.form.address);
      if (this.form.shop_type == "offline") {
        formData.append("CRN", this.form.commercial);
      }
      formData.append("city", this.form.city);
      formData.append("neighborhood", this.form.neighborhood);
      formData.append("shop_type", this.form.shop_type);
      formData.append("id_number", this.form.idNum);
      formData.append("known_number", this.form.known_number);
      formData.append("password", this.form.password);
      formData.append("password_confirmation", this.form.confPass);
      // formData.append("role_id", this.form.role_id);
      // formData.append("not_robot", this.accept);
      formData.append("logo", this.profile_img);
      formData.append("cover", this.cover_img);
      this.isloading = true;
      if (this.validForm) {
        // this.$emit("supplierRegister", formData);
        // setTimeout(() => {
        //   this.isloading = false;
        // }, 1000);
      } else {
        // this.$emit("wrongData");
        this.isloading = true;
        this.$axios
          .$post(`stores/register`, formData)
          .then((response) => {
            if (response.code == 0) {
              new Swal({
                position: "center",
                icon: "error",
                text: response.msg,
                showConfirmButton: true,
              });
            } else {
              new Swal({
                position: "center",
                icon: "success",
                text: response.msg,
                showConfirmButton: true,
              });
              // this.$store.dispatch("authentication/Login/Logout");
              this.$router.push("/auth/login");
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            this.isloading = false;
          });
      }
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
          console.log("neighborhoods" , res);
          this.neighborhoods = res.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    // this.getAddresses();
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
};
</script>

<style lang="scss" scoped>
.height-43{
  height: 43px;
}
</style>
