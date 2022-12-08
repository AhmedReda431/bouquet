<template>
  <div class="custome-page about">
    <the-header-page :title="`About Us`" />
    <div class="container">
      <div class="custome-content">
        <p class="title">About Us</p>
        <div class="content">
          <p
            class="desc"
            v-if="this.$i18n.locale == 'en'"
            v-html="aboutData.about_us_en"
          ></p>
          <p
            class="desc"
            v-if="this.$i18n.locale == 'ar'"
            v-html="aboutData.about_us_ar"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeaderPage from "~/components/shared/TheHeaderPage.vue";
export default {
  components: { TheHeaderPage },
  methods: {
    async getAboutData() {
      await this.$axios.$get("settings/aboutUs").then(res => {
        this.aboutData  = res.body;
        console.log(res.body);
      });
    }
  },
  mounted() {
    this.getAboutData();
  },
  data() {
    return {
      aboutData: []
    };
  }
};
</script>

<style lang="scss" scoped></style>
