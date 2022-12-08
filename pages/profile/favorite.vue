<template>
  <div class="content favorite-content">
    <div class="row">
      <div
        class="col-lg-6 col-md-12 col-12 mb-3"
        v-for="(product, index) in wishlistItems"
        :key="index"
      >
        <div class="card">
          <nuxt-link
            :to="
              localePath({ name: 'products-id', params: { id: product.id } })
            "
          >
            <img
              v-if="product && product.images[0]"
              class="card-img-top"
              :src="product.images[0].img"
              :alt="product.name"
            />
          </nuxt-link>
          <div class="card-body">
            <div class="card-stars">
              <img
                src="~/assets/images/icons/star_lg.svg"
                alt="star_lg"
                v-for="(i, index) in 4"
                :key="index"
              />
              <img
                src="~/assets/images/icons/star_lg_outline.svg"
                alt="star_lg_outline"
              />
              <span class="stars-count">({{ product.rate }})</span>
            </div>
            <h5 class="card-title">
              <nuxt-link
                :to="
                  localePath({
                    name: 'products-id',
                    params: { id: product.id },
                  })
                "
              >
                {{ product.name }}
              </nuxt-link>
            </h5>
            <div class="card-body-bottom cflex mt-2">
              <div class="card-price" v-if="product.sizes && product.sizes[0]">
                <p
                  v-if="
                    product.sizes[0].sale_price &&
                      product.sizes[0].regular_price
                  "
                >
                  <span>{{ product.sizes[0].sale_price }} {{$t('sar')}}</span>
                  <span class="card-discount"
                    >{{ product.sizes[0].regular_price }} {{$t('sar')}}</span
                  >
                </p>
                <p
                  v-else-if="
                    product.sizes[0].sale_price == null &&
                      product.sizes[0].regular_price
                  "
                >
                  <span>{{ product.sizes[0].regular_price }} {{$t('sar')}}</span>
                </p>
                <p
                  v-else-if="
                    product.sizes[0].sale_price &&
                      product.sizes[0].regular_price == null
                  "
                >
                  <span>{{ product.sizes[0].sale_price }} {{$t('sar')}}</span>
                </p>
                <p
                  v-else-if="
                    product.sizes[0].sale_price == null &&
                      product.sizes[0].regular_price == null
                  "
                >
                  <span>{{ product.sizes[0].regular_price }} {{$t('sar')}}</span>
                </p>
              </div>
              <!-- <button
                type="button"
                class="action-link"
                @click.prevent="moveToCart({ product: product })"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  style="fill: #fff;"
                >
                  <path
                    d="M21 4H2v2h2.3l3.521 9.683A2.004 2.004 0 0 0 9.7 17H18v-2H9.7l-.728-2H18c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 4z"
                  ></path>
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="16.5" cy="19.5" r="1.5"></circle>
                </svg>
              </button> -->
              <button
                type="button"
                class="delete-btn"
                @click.prevent="removeFromWishlist({ product: product })"
                title="remove from cart"
              >
                <img
                  src="~/assets/images/icons/delete_white.svg"
                  alt="delete_white"
                />
              </button>
            </div>
          </div>
          <button
            type="button"
            class="like-card-btn"
            v-if="isInWishlist(product)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="gold"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "userDash",
  data() {
    return {
      favourites: null,
    };
  },
  methods: {
    ...mapActions("wishlist", ["removeFromWishlist", "moveToCart"]),
  },
  computed: {
    ...mapGetters("wishlist", ["isInWishlist"]),
    wishlistItems() {
      return this.$store.state.wishlist.data;
    },
  },
};
</script>
<style lang="scss" scoped>
.delete-btn {
  background: #c33434 0% 0% no-repeat padding-box;
  border-radius: 7px 0 0 0;
  border: none;
  width: 38px;
  height: 38px;
}
</style>
