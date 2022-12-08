<template>
  <div class="rate-order">
    <the-header-page :title="`Order #${item_id}`" />
    <form @submit.prevent="rateOrder">
      <div class="rate-content">
        <div class="container">
          <div class="rate-box">
            <p class="rate-title">How Would You Rate This Product *</p>
            <div class="rate">
              <p class="title">Tap On The Stars To Choose</p>
              <!-- <the-star-rating value="0" /> -->
              <div class="star-rating">
                <label for="" class="star-rating__star border-none">
                  <b-form-rating
                    v-model="rate"
                    class="border-none"
                    no-border
                    variant="warning"
                    size="lg"
                  ></b-form-rating>
                </label>
              </div>
            </div>
          </div>

          <div class="rate-box">
            <p class="rate-title">Leave A Comment</p>
            <div class="rate">
              <textarea
                v-model="review"
                cols="30"
                rows="10"
                placeholder="Tell Us More About Your Experience With The Product"
                class="rate-input"
              ></textarea>
            </div>
          </div>
          <button class="rate-btn" type="submit">submit review</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import TheStarRating from "~/components/order/TheStarRating.vue";
import TheHeaderPage from "~/components/shared/TheHeaderPage.vue";
import Swal from "sweetalert2";

export default {
  components: {
    TheHeaderPage,
    TheStarRating,
  },
  data() {
    return {
      review: "",
      item_id: this.$route.query.id,
      rate: null,
    };
  },
  methods: {
    rateOrder() {
      let payload = {
        review: this.review,
        item_id: this.item_id,
        rate: this.rate,
      };
      console.log(payload);
      this.$axios
        .$post(`orders/rateOrderProduct`, payload)
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
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
