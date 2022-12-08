<template>
  <div class="content orders-content">
    <the-orders v-for="(order , index) in orders" :key="index" :order="order" />
  </div>
</template>

<script>
import TheOrders from "~/components/order/TheOrders.vue";
export default {
  components: { TheOrders },
  data() {
    return {
      orders: []
    };
  },
  layout: "userDash",
  methods: {
    getOrders() {
      this.$axios
        .$get("orders/getMyOrdersWithDetails")
        .then(res => {
          console.log(res);
          this.orders = res.body
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted(){
    this.getOrders()
  }
};
</script>
<style lang="scss" scoped></style>
