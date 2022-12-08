<template>
  <div class="content addresses-content">
    <the-addresses :userAddresses="userAddresses" />
    <the-address-form />
  </div>
</template>

<script>
import TheAddressForm from "~/components/addresses/TheAddressForm.vue";
import TheAddresses from "~/components/addresses/TheAddresses.vue";
export default {
  components: { TheAddressForm, TheAddresses },
  layout: "userDash",
  data() {
    return {
      isLoading: false,
      addresses: null,
      singleAddress: {},
      updated: null,
      en_city: ["Canada", "United States"],
      ar_city: ["كندا", "امريكا"],
      en_neighbourhood: ["Canada", "United States"],
      ar_neighbourhood: ["كندا", "امريكا"],
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
    userAddresses(){
      return this.$store.state.user.user.addresses
    }
  },
  methods: {
    editAddress(event) {
      this.singleAddress = event;
    },
    updateAddress() {
      console.log("updateAddress");
    },
    // getAddresses() {
    //   this.$axios
    //     .$get(`settings/getCitiesWithNeighborhoods`)
    //     .then(res => {
    //       console.log(res);
    //       this.addresses = res.body;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
    
  },
};
</script>
<style lang="scss" scoped></style>
