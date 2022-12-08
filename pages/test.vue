<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div
            class="col-md-3 col-sm-12"
            v-for="(product, index) in products"
            :key="index"
          >
            <p>{{ product.name }}</p>
            <b-button
              variant="success"
              @click.prevent="addToCart({ product: product })"
              >{{$t('add to cart')}}</b-button
            >
            <b-button
              variant="success"
              @click.prevent="addToWishlist({ product: product })"
              >add to wishlist</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("cart", ["addToCart"]),
    ...mapActions("wishlist", ["addToWishlist"]),
    
    ...mapActions('wishlist', ['removeFromWishlist', 'moveToCart']),
    getProducts() {
      axios
        .get(
          "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
        )
        .then((res) => {
          console.log(res);
          this.products = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
  data() {
    return {
      products: null,
    };
  },
  computed: {
    ...mapGetters("cart", ["canAddToCart"]),
    ...mapGetters("wishlist", ["isInWishlist"]),
  },
};
</script>

<style></style>
