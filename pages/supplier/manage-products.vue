<template>
  <div class="content manage-product-content">
    <div class="row">
      <div
        class="col-lg-6 col-md-12 col-12 mb-3"
        v-for="(product, index) in products"
        :key="index"
      >
        <the-profile-card :product="product" />
      </div>
    </div>
    <nuxt-link :to="localePath('/supplier/product/add')" class="add-product-btn"
      >add new</nuxt-link
    >
  </div>
</template>

<script>
import TheProfileCard from "~/components/profile/TheProfileCard.vue";
export default {
  layout: "supplierDash",
  components: { TheProfileCard },
  methods: {
    getAllProducts() {
      this.$axios
        .get("stores/products/getAll")
        .then((res) => {
          console.log(res);
          this.products = res.data.body.products
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted(){
    this.getAllProducts()
  },
  data(){
    return {
      products:null
    }
  }
};
</script>
<style lang="scss" scoped></style>
