<template>
  <div class="orders">
    <nuxt-link
      :to="localePath({ name: 'profile-order-id', params: { id: 5 } })"
      class="orders__title"
      ><p @click="storeOrderData">Order #{{order.id}}</p></nuxt-link
    >
    <div class="d-flex justify-content-between align-items-center">
      <p class="orders__time" v-if="order.created_at">
        Date : {{ order.created_at }}
      </p>
      <p class="orders__status" v-if="order.status">{{ order.status }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["order"],
  methods: {
    storeOrderData() {
      localStorage.setItem("selectedOrder", JSON.stringify(this.order));
    },
  },
};
</script>

<style lang="scss" scoped></style>
