<template>
  <div class="single-store">
    <the-header-page :title="storeName" />
    <div class="" v-if="!loading">
      <div class="sotre-header">
        <div class="overlay">
          <div class="container">
            <div class="header-content">
              <div class="profile-img">
                <img
                  src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="profile"
                />
              </div>
              <p class="profile-name">{{storeName}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="store-products">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-3 col-md-6 col-12 mb-3"
              v-for="(product, index) in products"
              :key="index"
            >
              <the-card :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="container">
        <div
          class="d-flex justify-content-center align-items-center my-spinner"
        >
          <b-spinner
            style="width: 3rem; height: 3rem;"
            label="Large Spinner"
          ></b-spinner>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeaderPage from "~/components/shared/TheHeaderPage.vue";
import TheCard from "~/components/shared/TheCard.vue";
import Swal from "sweetalert2";
export default {
  components: {
    TheHeaderPage,
    TheCard,
  },
  data() {
    return {
      id: this.$route.params.id,
      page: 1,
      products: null,
      loading: false,
      storeName:null
    };
  },
  methods: {
    async getStoreData() {
      this.loading = true;
      await this.$axios
        .get(`stores/getProducts`, {
          params: {
            store_id: this.id,
            page: this.page,
          },
        })
        .then((res) => {
          console.log(res);
          this.products = res.data.body.products;
          this.storeName = res.data.body.products[0].store.name
          this.loading = false;
          if (res.data.code == 0) {
            new Swal({
              position: "center",
              icon: "error",
              text: res.data.msg,
              showConfirmButton: true,
            });
            
          }
        })
        .catch((err) => {
          console.log(err.response.data);
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getStoreData();
  },
};
</script>

<style lang="scss" scoped>
.my-spinner {
  min-height: 60vh;
}
</style>
