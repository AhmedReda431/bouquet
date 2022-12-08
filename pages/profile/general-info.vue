<template>
  <div class="content profile-info-content">
    <the-user-general-info  />
  </div>
</template>

<script>
import TheUserGeneralInfo from "~/components/form/user/TheUserGeneralInfo.vue";

export default {
  layout: "userDash",
  components: { TheUserGeneralInfo },
  data() {
    return {
      profileData:null
    };
  },
  methods: {
    getProfileData() {
      this.$axios.$get(`users/getProfile`, {
        params: {
          firebase_token: 'null',
          device_type: 0
        }
      }).then(res =>{
        this.profileData = res.body
      })
    }
  },
  mounted() {
    this.getProfileData();
  },
  middleware:['logAuth']
};
</script>
<style lang="scss" scoped></style>
