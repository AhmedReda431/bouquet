<template>
  <div class="custome-page terms">
    <the-header-page :title="`Terms & Conditions`"/>
    <div class="container">
      <div class="custome-content">
        <p class="title">Terms & Conditions</p>
        <div class="content">
          <p
            class="desc"
            v-if="this.$i18n.locale == 'en'"
            v-html="termsData.terms_en"
          ></p>
          <p
            class="desc"
            v-if="this.$i18n.locale == 'ar'"
            v-html="termsData.terms_ar"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeaderPage from '~/components/shared/TheHeaderPage.vue'
  export default {
  components: { TheHeaderPage },
  methods: {
    async getTermsData() {
      await this.$axios.$get("settings/terms").then(res => {
        this.termsData  = res.body;
        console.log(res.body);
      });
    }
  },
  mounted() {
    this.getTermsData();
  },
  data() {
    return {
      termsData: []
    };
  }

  }
</script>

<style lang="scss" scoped>

</style>
