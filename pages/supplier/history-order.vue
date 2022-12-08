<template>
  <div class="content orders-content">
    <the-supplier-order v-for="(order, index) in orders" :key="index" :order="order" />
  </div>
</template>

<script>
import TheSupplierOrder from "~/components/order/TheSupplierOrder.vue";
export default {
  layout: "supplierDash",
  components: { TheSupplierOrder },
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    getOrders() {
      this.$axios
        .$get("orders/getStoreOrdersWithDetails")
        .then((res) => {
          console.log("getStoreOrdersWithDetails" , res);
          this.orders = res.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted(){
    this.getOrders()
  }
};
</script>
<style lang="scss" scoped></style>
