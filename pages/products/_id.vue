<template>
  <div class="single-product">
    <the-header-page :title="`Category Name`" />
    <div class="container">
      <div class="single-product-header" v-if="product">
        <div class="row">
          <div class="col-lg-5 mb-3">
            <div class="left-content">
              <the-gallery :photos="photos"></the-gallery>
            </div>
          </div>
          <div class="col-lg-7 mb-3">
            <div class="right-content">
              <div class="header-content">
                <p class="title" v-if="product.name">
                  {{ product.name }}
                </p>
                <div class="header-middle-content" :class="{'text-left':$i18n.locale == 'en' , 'text-right':$i18n.locale == 'ar'}">
                  <p class="price">
                    {{ selectedPrice }} <span v-if="selectedPrice">SAR</span>
                    <!-- <span class="price-discount">10 SAR</span><span class="discount-percent">33%</span> -->
                  </p>
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <p>{{$t('sizes')}}</p>
                      <b-form-select
                        v-model="selectedProductData"
                        @change="selectSize()"
                        class="mb-3 custome-input py-2 height-43 mr-2 text-left"
                      >
                        <b-form-select-option :value="null" disabled
                          >Please select an option</b-form-select-option
                        >
                        <b-form-select-option
                          v-for="(size, index) in product.sizes"
                          :key="index"
                          :value="size"
                          >{{ size.size }}</b-form-select-option
                        >
                      </b-form-select>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <p>{{$t('quantiry')}}</p>
                      <b-form-select
                        v-model="selectedQuantity"
                        class="mb-3 custome-input py-2 height-43 mr-2 text-left"
                      >
                        <b-form-select-option value="null"
                          >Please select an option</b-form-select-option
                        >
                        <b-form-select-option
                          v-for="(i, index) in 20"
                          :key="index"
                          :value="i"
                          >{{ i }}</b-form-select-option
                        >
                      </b-form-select>
                    </div>
                  </div>
                  <div
                    class="content-rates d-flex justify-content-center align-content-center"
                  >
                    <TheRate :rate="product.rate" />
                    <span class="rate-num mx-1"
                      >({{ product.num_users_rate }})</span
                    >
                  </div>
                </div>
              </div>
              <div class="middle-content">
                <div class="content-share">
                  <ul class="list-style">
                    <li class="list d-flex">
                      <button class="list-btn mr-3">
                        <img
                          src="~/assets/images/icons/share.svg"
                          alt="share"
                        />
                        {{$t('shareProduct')}}
                      </button>
                      <!-- <div class="share-social d-flex align-items-center">
                        <span>{{ $t("singleProduct.sharing") }}</span>
                        <div class="social-sharing-icons">
                          <facebook :url="url" scale="2"></facebook>
                          <twitter
                            :url="url"
                            title="Check me on Github"
                            scale="2"
                          ></twitter>
                          <whats-app
                            :url="url"
                            title="Hello"
                            scale="2"
                          ></whats-app>
                          <telegram :url="url" scale="3"></telegram>
                        </div>
                      </div> -->
                      <ShareProduct :product="product" />
                    </li>

                    <li class="list">
                      <nuxt-link
                        to="/profile/favorite"
                        class="list-btn"
                        v-if="isInWishlist(product)"
                        key="inWishlist"
                      >
                        <img
                          src="~/assets/images/icons/favorite.svg"
                          alt="share"
                        />
                        <span>{{$t('go to wishlist')}}</span>
                      </nuxt-link>
                      <a
                        href="javascript:;"
                        class="list-btn"
                        @click.prevent="addToWishlist({ product: product })"
                        v-else
                        key="notInWishlist"
                      >
                        <img
                          src="~/assets/images/icons/favorite.svg"
                          alt="share"
                        />
                        <span>add to wishlist</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="content-quantity">
                  <div class="counter" :class="{'float-left' : $i18n.locale == 'en' , 'float-right' : $i18n.locale == 'ar'}">
                    <!-- <button
                      :disabled="!selectedPrice"
                      class="add-btn"
                      type="button"
                      @click.prevent="
                        addToCart({
                          product: product,
                          qty: selectedQuantity,
                          price: selectedPrice,
                          size: selectedProductData.id,
                        })
                      "
                    >
                      ADD TO CART
                    </button> -->
                    <button
                      class="add-btn"
                      type="submit"
                      v-if="selectedPrice"
                      @click.prevent="
                        addToCart({
                          product: product,
                          qty: selectedQuantity,
                          price: selectedPrice,
                          size: selectedProductData.id,
                        })
                      "
                    >
                      {{$t('add to cart')}}
                    </button>
                    <button class="add-btn" type="submit" disabled v-else>
                      <small>{{$t('add to cart')}} ({{$t('select size first')}})</small>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="single-product-bottom"
        v-if="product && product.reviews && product.reviews.length != 0"
      >
        <tabs>
          <!-- <tab name="Descriptions" :selected="true">
            <div class="product-description">
              <p class="product-desc">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Lorem Ipsum Has Been The Industry's Standard Dummy
                Text Ever Since The 1500S, When An Unknown Printer Took A Galley
                Of Type And Scrambled It To Make A Type Specimen Book. It Has
                Survived Not Only Five Centuries, But Also The Leap Into
                Electronic Typesetting, Remaining Essentially Unchanged. It Was
                Popularised In The 1960S With The Release Of Letraset Sheets
                Containing Lorem Ipsum Passages, And More Recently With Desktop
                Publishing Software Like Aldus Pagemaker Including Versions Of
                Lorem Ipsum.
              </p>
              <ul class="list-style">
                <li class="list">
                  <p class="list-title">Product Number</p>
                  <p class="list-sub-title">2</p>
                </li>
                <li class="list">
                  <p class="list-title">Size</p>
                  <p class="list-sub-title">Large</p>
                </li>
                <li class="list">
                  <p class="list-title">Product Size</p>
                  <p class="list-sub-title">24 Cm</p>
                </li>
                <li class="list">
                  <p class="list-title">Height</p>
                  <p class="list-sub-title">24 Cm</p>
                </li>
                <li class="list">
                  <p class="list-title">Weight</p>
                  <p class="list-sub-title">0.5 Kilogram</p>
                </li>
              </ul>
            </div>
          </tab> -->
          <tab name="Ratings & Review" :selected="true">
            <div class="product-rating" v-if="product">
              <ul class="list-style">
                <li
                  class="list"
                  v-for="(review, index) in product.reviews"
                  :key="index"
                >
                  <div class="list-header" v-if="review">
                    <p class="header-title" v-if="review.user_name">
                      {{ review.user_name }}
                    </p>
                    <div class="header-rating" v-if="review">
                      <TheRate :rate="review.rate" />
                    </div>
                  </div>
                  <p class="list-desc" v-if="review.review">
                    {{ review.review }}
                  </p>
                  <p class="list-time" v-if="review.created_at">
                    {{ review.created_at }}
                  </p>
                </li>
              </ul>
            </div>
          </tab>
        </tabs>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeaderPage from "~/components/shared/TheHeaderPage.vue";
import tabs from "~/components/products/tabs.vue";
import tab from "~/components/products/tab.vue";
import TheGallery from "~/components/products/TheGallery.vue";
import { mapGetters, mapActions } from "vuex";
import TheRate from "~/components/shared/TheRate.vue";
import ShareProduct from "~/components/products/ShareProduct.vue";

// import { Facebook, Twitter, WhatsApp, Telegram } from "vue-socialmedia-share";

export default {
  components: { TheHeaderPage, tabs, tab, TheGallery, TheRate, ShareProduct },
  data() {
    return {
      id: this.$route.params.id,
      counter: 0,
      photos: [
        "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/989962/pexels-photo-989962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3785784/pexels-photo-3785784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      product: null,
      selectedQuantity: 1,
      newSize: null,
      selectedProductData: "",
      selectedPrice: null,
    };
  },
  methods: {
    ...mapActions("cart", ["addToCart"]),
    ...mapActions("wishlist", ["addToWishlist"]),
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      if (this.counter > 0) {
        this.counter--;
      } else {
        return false;
      }
    },
    getProductDetails() {
      this.$axios
        .get(`home/getProductDetails`, {
          params: {
            product_id: this.id,
          },
        })
        .then((res) => {
          console.log(res);
          this.product = res.data.body;
          this.photos = res.data.body.images;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    selectSize() {
      this.selectedPrice = this.selectedProductData.regular_price;
    },
  },
  mounted() {
    this.getProductDetails();
  },
  computed: {
    ...mapGetters("cart", ["canAddToCart"]),
    ...mapGetters("wishlist", ["isInWishlist"]),
  },
  // components: {
  //   BIconPlus,
  //   BIconDash,
  //   Facebook,
  //   Twitter,
  //   WhatsApp,
  //   Telegram,
  // },
};
</script>

<style lang="scss" scoped></style>
