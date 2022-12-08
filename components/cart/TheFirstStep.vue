<template>
  <div class="content ">
    <div class="store-box">
      <p class="title">Store Name ( 2 Items )</p>
      <div class="table-responsive text-center">
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">{{$t('quantiry')}}</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody v-for="(product, index) in cartItems" :key="index">
            <tr>
              <td class="product-info" v-if="product.images">
                <img :src="product.images[0].img" alt="img" />
                <nuxt-link :to="localePath(`/products/${product.id}`)">
                  <p class="product-title">{{product.name}}</p>
                </nuxt-link>
              </td>
              <td class="product-quntity">
                <CartCounter
                  :product="product"
                  @changeQuantity="changeQuantity(product , $event)"
                />
              </td>
              <td class="product-price">
                <p class="price">{{ product.price }}</p>
                <!-- <p class="price-discount">
                  <span class="discount">10000 {{$t('sar')}}</span>
                  <span class="percent">33%</span>
                </p> -->
              </td>
              <td class="product-delete">
                <button class="delete-btn" @click.prevent="removeFromCart({product: product})">
                  <img
                    src="~/assets/images/icons/delete_white.svg"
                    alt="delete_white"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="store-box-bottom">
        <p class="text">
          Store : 30 {{$t('sar')}}
          <span
            ><img src="~/assets/images/icons/shipping.svg" alt="shipping"
          /></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CartCounter from "./CartCounter.vue";
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    ...mapActions('cart', ['removeFromCart']),
    increaseCounter() {
      this.counter++;
       setTimeout(() => {
          alert('increase')
          // this.$store.dispatch('addToCart' , {product:product , qty:this.counter})
        }, 500);
    },
    decreaseCounter() {
      if (this.counter > 0) {
        this.counter--;
        setTimeout(() => {
          alert('decrease')
          // this.$store.dispatch('addToCart' , {product:product , qty:this.counter})
        }, 500);
      } else {
        return false;
      }
    },
    changeQuantity(product , newQty) {
      this.counter = newQty;
      this.$store.dispatch('cart/addToCart' , {product:product , qty:newQty })
    },
   
  },
  props: ["cartItems"],
  mounted() {
    console.log(this.cartItems);
  },
  components: { CartCounter },
};
</script>

<style lang="scss" scoped></style>
