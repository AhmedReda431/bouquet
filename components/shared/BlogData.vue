<template>
  <div>
    <div
      class="container newsletter-popup-container"
      id="newsletter-popup-form"
    >
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="row text-center bg-white newsletter-popup-content">
            <div class="col-12 banner-content-wrap p-5">
              <div class="titles">
                <h5 v-if="$i18n.locale == 'en' && blog.title_en">
                  {{ blog.title_en }}
                </h5>
                <h6 v-if="$i18n.locale == 'ar' && blog.title_ar">
                  {{ blog.title_ar }}
                </h6>
              </div>
              <div class="desc">
                <h6
                  class="text-secondary"
                  v-if="$i18n.locale == 'en' && blog.desc_en"
                >
                  {{ blog.desc_en }}
                </h6>
                <h6
                  class="text-secondary"
                  v-if="$i18n.locale == 'ar' && blog.desc_ar"
                >
                  {{ blog.desc_ar }}
                </h6>
              </div>
            </div>
            <div class="video" v-if="blog.video">
              <video :src="blog.video" controls loop></video>
            </div>
          </div>
        </div>
      </div>
      <button
        title="Close (Esc)"
        type="button"
        class="mfp-close"
        @click="closeModal"
      >
        <span>×</span>
      </button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data: function() {
    return {
      checkState: false,
    };
  },
  watch: {
    $route: function() {
      this.$emit("close");
    },
  },
  methods: {
    ...mapMutations("demo", { hideNewsletter: "HIDE_NEWSLETTER" }),
    changeCheck: function() {
      this.checkState = !this.checkState;
    },
    closeModal: function() {
      if (this.checkState) {
        this.hideNewsletter();
      }

      this.$emit("close");
    },
  },
  props: ["blog"],
};
</script>
<style lang="scss" scoped>
.video {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  object-fit: cover;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
