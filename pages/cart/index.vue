<template>
  <div class="cart">
    <the-header-page :title="$t(`Shopping Cart`)" />
    <div class="text-center" v-if="checkoutCompleted">
      <div class="cart-content ">
        <div
          class="cart-checkout d-flex justify-content-center align-items-center flex-column"
        >
          <img src="@/assets/images/done.png" class="done-image" alt="image" />
          <div class="">
            <h4 class="mb-5">Thank you for your order.</h4>
            <h4>
              Your order has been placed successfully with eCommerce.com Order
              Number is:
              <nuxt-link to="/" role="link" class="text-success">
                {{ order_id }}
              </nuxt-link>
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="" v-else>
      <div class="cart-content" v-if="cartItemsLength > 0">
        <form>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mb-4">
                <the-first-step v-if="!stepCheckout" :cartItems="cartItems" />
                <!-- <the-second-step v-if="stepCheckout" /> -->
                <div class="" v-if="stepCheckout">
                  <div class="content">
                    <div class="store-box address-box">
                      <p class="box-title">
                        <span class="box-num">1</span> Select Address
                      </p>

                      <ul class="list-style">
                        <li
                          class="list"
                          v-for="(myAddress, index) in userAddresses"
                          :key="index"
                        >
                          <input
                            type="radio"
                            v-model="form.address_id"
                            name="address"
                            id="address1"
                            :value="myAddress.id"
                            @input="selctCheckoutData(myAddress)"
                          />
                          <label for="address1">
                            <!-- <p
                              class="title"
                              v-if="$i18n.locale == 'en' && myAddress.title_en"
                            >
                              <b>{{ myAddress.title_en }}</b>
                            </p>
                            <p
                              class="title"
                              v-if="$i18n.locale == 'ar' && myAddress.title_ar"
                            >
                              <b>{{ myAddress.title_ar }}</b>
                            </p> -->
                            <p class="title" v-if="myAddress.title">
                              <b>{{ myAddress.title }}</b>
                            </p>
                            <p>
                              {{ myAddress.full_address }}
                            </p>
                          </label>
                        </li>
                        <li class="list">
                          <input
                            type="radio"
                            v-model="form.address_id"
                            name="address"
                            id="newAddress"
                            value="newAddress"
                          />
                          <label for="newAddress">
                            <p class="title">NEW ADDRESS</p>
                          </label>
                        </li>
                      </ul>
                      <div
                        class="add-new-address mt-4"
                        v-if="form.address_id == 'newAddress'"
                      >
                        <div class="form-row">
                          <div class="form-group col-lg-6 col-md-6 col-12">
                            <input
                              type="text"
                              placeholder="Label (Gym, School, Airport, Restaurant ....) *"
                              v-model="form.title"
                              class="custome-input"
                            />
                          </div>
                          <div class="form-group col-lg-6 col-md-6 col-12">
                            <input
                              type="text"
                              placeholder="Address *"
                              v-model="form.address"
                              class="custome-input"
                            />
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-lg-6 col-md-6 col-12">
                            <b-form-select
                              v-model="form.city"
                              class="mb-3 custome-input py-2 height-43"
                              @change="getNeighborhoods"
                            >
                              <b-form-select-option :value="null" disabled
                                >Please select an option</b-form-select-option
                              >
                              <b-form-select-option
                                :value="address.id"
                                v-for="(address, index) in cities"
                                :key="index"
                                >{{
                                  availableLocales
                                    ? address.name_ar
                                    : address.name_en
                                }}</b-form-select-option
                              >
                            </b-form-select>
                          </div>
                          <div class="form-group col-lg-6 col-md-6 col-12">
                            <b-form-select
                              v-model="form.neighbourhood"
                              class="mb-3 custome-input py-2 height-43"
                            >
                              <b-form-select-option :value="null"
                                >Please select an option</b-form-select-option
                              >
                              <b-form-select-option
                                :value="neighbor.id"
                                v-for="(neighbor, index) in neighborhoods"
                                :key="index"
                                >{{
                                  availableLocales
                                    ? neighbor.name_ar
                                    : neighbor.name_en
                                }}</b-form-select-option
                              >
                            </b-form-select>
                          </div>
                        </div>
                        <button
                          type="button"
                          @click="addNewAddress"
                          class="new-address-btn"
                        >
                          ADD NEW ADDRESS
                        </button>
                      </div>
                    </div>
                    <div class="store-box payment-box">
                      <p class="box-title">
                        <span class="box-num">2</span> Select Payment Method
                      </p>
                      <ul class="list-style">
                        <li class="list">
                          <input
                            type="radio"
                            v-model="payment"
                            name="payment"
                            id="creditCard"
                            value="1"
                          />
                          <label for="creditCard">
                            <p class="title">Credit Card</p>
                          </label>
                          <div
                            class="credit-content mt-3"
                            v-if="payment == '1'"
                          >
                            <div class="form-row">
                              <div class="form-group col-12">
                                <input
                                  type="text"
                                  placeholder="Card number*"
                                  v-model="credit.cardNumber"
                                  class="custome-input"
                                />
                              </div>
                              <div
                                class="form-group col-lg-12 col-md-12 col-12"
                              >
                                <input
                                  type="text"
                                  placeholder="Card Name *"
                                  v-model="form.cardName"
                                  class="custome-input"
                                />
                              </div>
                              <div class="form-group col-lg-6 col-md-6 col-12">
                                <input
                                  type="number"
                                  placeholder="Card expiry date *"
                                  v-model="form.carExpiry"
                                  class="custome-input"
                                />
                              </div>
                              <div class="form-group col-lg-6 col-md-6 col-12">
                                <input
                                  type="number"
                                  placeholder="CVV *"
                                  v-model="form.cardCode"
                                  class="custome-input"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list">
                          <input
                            type="radio"
                            v-model="payment"
                            name="payment"
                            id="cashOnDelivery"
                            value="0"
                          />
                          <label for="cashOnDelivery">
                            <p class="title">Cash On Delivery</p>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4" v-if="stepCheckout">
                <div class="cart-checkout">
                  <div class="checkout-header ">
                    <div class="header">
                      <p class="title">Invoice Summary</p>
                    </div>
                    <div class="discount-coupon">
                      <p class="title">Have A Discount Coupon?</p>
                      <div class="coupon-content">
                        <input
                          type="text"
                          placeholder="Enter Discount Coupon"
                          class="custome-input"
                          v-model="coupon"
                        />
                        <button
                          class="apply-coupon-btn"
                          type="button"
                          @click="checkCoupon"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                    <ul class="list-style">
                      <li class="list">
                        <p class="title">Sub Total</p>
                        <p class="price">
                          {{
                            total_order_price ? total_order_price : priceTotal
                          }}
                          {{ $t("sar") }}
                        </p>
                      </li>
                      <li class="list">
                        <p class="title">Delivery Charges</p>
                        <p class="price">
                          {{
                            total_shipping_charges ? total_shipping_charges : 0
                          }}
                          {{ $t("sar") }}
                        </p>
                      </li>
                      <li class="list">
                        <p class="title">Discount</p>
                        <p class="price">
                          {{ discount_money ? discount_money : 0 }}
                          {{ $t("sar") }}
                        </p>
                      </li>
                      <li class="list">
                        <p class="title total-price">Order Total</p>
                        <p class="price total-price">
                          {{
                            (total_order_price
                              ? total_order_price
                              : priceTotal) +
                              (total_shipping_charges
                                ? total_shipping_charges
                                : 0) -
                              (discount_money ? discount_money : 0)
                          }}
                          {{ $t("sar") }}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <button
                    class="checkout-btn"
                    type="button"
                    v-if="!stepCheckout"
                    @click="sendCartData"
                  >
                    checkout
                  </button>
                  <button
                    class="checkout-btn"
                    type="button"
                    @click="checkout"
                    v-else
                  >
                    place order
                  </button>
                </div>
              </div>

              <div class="col-lg-4 mb-4" v-else>
                <div class="cart-checkout">
                  <div class="checkout-header ">
                    <div class="header">
                      <p class="title">Invoice Summary</p>
                    </div>
                    <ul class="list-style">
                      <li class="list">
                        <p class="title">Sub Total</p>
                        <p class="price">{{ priceTotal }} {{ $t("sar") }}</p>
                      </li>
                      <li class="list">
                        <p class="title">Delivery Charges</p>
                        <p class="price">
                          {{ total_shipping_charges }} {{ $t("sar") }}
                        </p>
                      </li>
                      <li class="list">
                        <p class="title">Discount</p>
                        <p class="price">
                          {{ discount_money }} {{ $t("sar") }}
                        </p>
                      </li>
                      <li class="list">
                        <p class="title total-price">Order Total</p>
                        <p class="price total-price">
                          {{
                            priceTotal + total_shipping_charges - discount_money
                          }}
                          {{ $t("sar") }}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <button
                    class="checkout-btn"
                    type="button"
                    v-if="!stepCheckout"
                    @click="sendCartData"
                  >
                    checkout
                  </button>
                  <button
                    class="checkout-btn"
                    type="button"
                    @click="checkout"
                    v-else
                  >
                    place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="cart cart-2 text-center" v-if="cartItemsLength < 1">
        <div class="cart-content ">
          <div
            class="cart-checkout d-flex justify-content-center align-items-center flex-column"
          >
            <div class="">
              <h4>your bouquet</h4>
              <h4>is Empty</h4>
            </div>
            <button class="start-shopping-cart">
              <nuxt-link to="/" class="text-white">
                start Shopping
              </nuxt-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheFirstStep from "~/components/cart/TheFirstStep.vue";
import TheSecondStep from "~/components/cart/TheSecondStep.vue";
import TheHeaderPage from "~/components/shared/TheHeaderPage.vue";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

export default {
  components: {
    TheHeaderPage,
    TheFirstStep,
    TheSecondStep,
  },
  data() {
    return {
      stepCheckout: false,
      coupon: null,
      options: ["Canada", "United States"],
      form: {
        title: "",
        address: null,
        address_id: null,
        city: "",
        neighbourhood: "",
      },
      credit: {
        cardNumber: "",
        cardName: "",
        carExpiry: "",
        cardCode: "",
      },
      address: "",
      payment: "",
      checkoutCompleted: false,
      cities: [],
      neighborhoods: [],
      total_order_price: 0,
      discount_money: 0,
      total_shipping_charges: 0,
      order_id: null,
    };
  },
  methods: {
    cartProducts() {
      this.$store.dispatch("cart/getCartProducts");
    },
    checkCoupon() {
      let coupon_code_data = {
        coupon_code: this.coupon,
      };
      this.$axios
        .post(`carts/checkCoupon`, coupon_code_data)
        .then((res) => {
          console.log(res);

          if (res.data.code == 0) {
            new Swal({
              position: "top-end",
              icon: "error",
              text: res.data.msg,
              showConfirmButton: true,
            });
          } else {
            new Swal({
              position: "top-end",
              icon: "success",
              text: res.data.msg,
              showConfirmButton: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkout() {
      let formData = new FormData();
      formData.append("payment_method", this.payment);
      formData.append("address", this.form.address ? this.form.address : null);
      formData.append(
        "user_address_id",
        this.form.address_id ? this.form.address_id : null
      );
      formData.append(
        "neighborhood_id",
        this.neighborhood_id ? this.neighborhood_id : null
      );
      formData.append("city_id", this.city_id ? this.city_id : null);
      console.log(this.form.address);
      // let checkoutData = {
      //   payment_method: this.payment,
      //   address: this.form.address ? this.form.address : "null",
      //   user_address_id: this.form.address_id ? this.form.address_id : null,
      //   neighborhood_id: this.neighborhood_id,
      //   city_id: this.city_id,
      // };
      this.$axios
        .$post(`carts/checkout`, formData)
        .then((res) => {
          if (res.code == 0) {
            new Swal({
              position: "top-end",
              icon: "error",
              text: res.msg,
              showConfirmButton: true,
            });
          } else {
            new Swal({
              position: "top-end",
              icon: "success",
              text: res.msg,
              showConfirmButton: true,
            });
            if (res.code == 1) {
              this.checkoutCompleted = true;
              this.order_id = res.body.order_id;
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    selctCheckoutData(myAddress) {
      console.log(myAddress);
      this.neighborhood_id = myAddress.neighborhood_id;
      this.city_id = myAddress.city_id;
      this.form.title = myAddress.title;
      this.form.address = myAddress.address;
      this.form.address_id = myAddress.id;
    },
    addNewAddress() {
      this.isLoading = true;
      let data = {
        title: this.form.title,
        address: this.form.address,
        city_id: this.form.city,
        neighborhood_id: this.form.neighbourhood,
      };
      console.log(data);
      this.$axios
        .$post(`users/addresses/addAddress`, data)
        .then((res) => {
          console.log(res);
          if (res.code == 0) {
            new Swal({
              position: "center",
              icon: "error",
              text: res.msg,
              showConfirmButton: true,
            });
          } else {
            new Swal({
              position: "center",
              icon: "success",
              text: res.msg,
              showConfirmButton: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    getAddresses() {
      this.$axios
        .$get(`settings/getCitiesWithNeighborhoods`)
        .then((res) => {
          console.log(res);
          this.cities = res.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getNeighborhoods() {
      this.$axios
        .$get(`settings/getNeighborhoods?city_id=${this.form.city}`)
        .then((res) => {
          console.log("neighborhoods", res);
          this.neighborhoods = res.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async sendCartData() {
      this.stepCheckout = true;
      var lessCart = [];
      for (let index = 0; index < this.cartItems.length; index++) {
        const element = this.cartItems[index];
        delete element.sum;
        delete element.store;
        delete element.stock;
        delete element.sizes;
        delete element.reviews;
        delete element.rate;
        delete element.num_users_rate;
        delete element.is_favourite;
        delete element.images;
        delete element.category_id;
        delete element.additions;
        delete element.name;
        delete element.price;

        lessCart.push(element);
      }

      await this.$axios
        .$post(`carts/createOrUpdateCart`, {
          cart: JSON.stringify(lessCart),
        })
        .then((resp) => {
          console.log(resp.body);
          this.total_order_price = resp.body.total_order_price;
          this.discount_money = resp.body.discount_money;
          this.total_shipping_charges = resp.body.total_shipping_charges;

          if (resp.code == 0) {
            new Swal({
              position: "top-end",
              icon: "error",
              text: resp.msg ? resp.msg : resp.errors ,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            new Swal({
              position: "top-end",
              icon: "success",
              text: resp.msg,
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
  mounted() {
    // this.cartProducts();
    this.getAddresses();
  },
  computed: {
    ...mapGetters("cart", ["cartList", "priceTotal", "qtyTotal"]),
    cartItems() {
      return this.$store.state.cart.data;
    },
    cartItemsLength() {
      return this.$store.state.cart.data.length;
    },
    userAddresses() {
      return this.$store.state.user.user.addresses;
    },
  },
  // middleware: ["logAuth"]
};
</script>

<style lang="scss" scoped>
.cart-2 {
  text-transform: capitalize;
}
.start-shopping-cart {
  background: linear-gradient(275deg, #004f15 0%, #be22bd 100%);
  border-radius: 65px;
  border: 1px solid #1f222b;
  color: #fff;
  text-transform: uppercase;
  width: 20%;
  height: 50px;
  transition: 0.3s ease-in-out;
  margin: 3% 0;
}
.done-image {
  width: 200px;
  margin: 2% 0;
}
</style>
