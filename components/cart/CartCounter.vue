<template>
  <div class="count">
    <button class="count-btn" type="button" @click.prevent="decreaseCounter()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        style="fill: #fff;"
      >
        <path d="M5 11h14v2H5z"></path>
      </svg>
    </button>
    <span class="counter-text">{{ counter }}</span>
    <button class="count-btn" type="button" @click.prevent="increaseCounter()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        style="fill: #fff;"
      >
        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
      </svg>
    </button>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      counter: 1
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
      this.changeValue();
    },
    decreaseCounter() {
      if (this.counter > 1) {
        this.counter--;
        this.changeValue();
      } else {
        return false;
      }
    },
    changeValue() {
      this.$emit("changeQuantity", this.counter);
      // this.updateCartProduct();
    },
    async updateCartProduct() {
      let CartData = {
         cart: [
            {
              product_size_id: this.product.id,
              influncer_id: 0,
              qty: this.counter
            }
          ]
      }
      await this.$axios
        .$post(`carts/createOrUpdateCart`, CartData)
        .then(resp => {
          if (resp.code == 0) {
            new Swal({
              position: "top-end",
              icon: "error",
              text: resp.msg,
              showConfirmButton: false,
              timer: 3000
            });
          } else {
            new Swal({
              position: "top-end",
              icon: "success",
              text: resp.msg,
              showConfirmButton: false,
              timer: 1500
            });
            commit(ADD_TO_CART, payload);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  props: ["product"],
  mounted(){
    this.counter = this.product.qty
  }
};
</script>

<style></style>
