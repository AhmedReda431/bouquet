<template>
  <div class="categories-page">
    <the-header-page :title="`Category Name`" />
    <div class="categories-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-12 mb-3 filter-content">
            <div class="categories-filter">
              <form @submit.prevent="filterCategory">
                <div class="filter-box">
                  <p class="title">Category</p>
                  <ul class="list-style" v-if="$i18n.locale == 'en'">
                    <li
                      class="list"
                      v-for="(myCategory, index) in Categories"
                      :key="index"
                    >
                      <input
                        type="radio"
                        v-model="category.category_id"
                        name="categoriesName"
                        :id="myCategory.id"
                        :value="myCategory.id"
                      />
                      <label :for="myCategory.id">{{
                        myCategory.name_en
                      }}</label>
                    </li>
                  </ul>
                  <ul class="list-style" v-else>
                    <li
                      class="list"
                      v-for="(myCategory, index) in Categories"
                      :key="index"
                    >
                      <input
                        type="radio"
                        v-model="category.category_id"
                        name="categoriesName"
                        :id="myCategory.id"
                        :value="myCategory.id"
                      />
                      <label :for="myCategory.id">{{
                        myCategory.name_ar
                      }}</label>
                    </li>
                  </ul>
                </div>
                <!-- <div class="filter-box">
                  <p class="title">Rate</p>
                  <ul class="list-style">
                    <li class="list">
                      <input
                        type="radio"
                        v-model="category.rate"
                        name="rates"
                        id="star5"
                        value="5"
                      />
                      <label for="star5">
                        <img
                          src="~/assets/images/icons/star_lg.svg"
                          alt="star_lg"
                        />
                        <img
                          src="~/assets/images/icons/star_lg.svg"
                          alt="star_lg"
                        />
                        <img
                          src="~/assets/images/icons/star_lg.svg"
                          alt="star_lg"
                        />
                        <img
                          src="~/assets/images/icons/star_lg.svg"
                          alt="star_lg"
                        />
                        <img
                          src="~/assets/images/icons/star_lg.svg"
                          alt="star_lg"
                        />
                      </label>
                    </li>
                    <li class="list">
                      <input
                        type="radio"
                        v-model="category.rate"
                        name="rates"
                        id="star4"
                        value="4"
                      />
                      <label for="star4">
                        <img
                          src="~/assets/images/icons/star_lg.svg"
                          alt="star_lg"
                        />
                        <img
                          src="~/assets/images/icons/star_lg.svg"
                          alt="star_lg"
                        />
                        <img
                          src="~/assets/images/icons/star_lg.svg"
                          alt="star_lg"
                        />
                        <img
                          src="~/assets/images/icons/star_lg.svg"
                          alt="star_lg"
                        />
                        <img
                          src="~/assets/images/icons/star_lg_outline.svg"
                          alt="star_lg_outline"
                        />
                      </label>
                    </li>
                    <li class="list">
                      <input
                        type="radio"
                        v-model="category.rate"
                        name="rates"
                        id="star3"
                        value="3"
                      />
                      <label for="star3">
                        <img
                          src="~/assets/images/icons/star_lg.svg"
                          alt="star_lg"
                        />
                        <img
                          src="~/assets/images/icons/star_lg.svg"
                          alt="star_lg"
                        />
                        <img
                          src="~/assets/images/icons/star_lg.svg"
                          alt="star_lg"
                        />
                        <img
                          src="~/assets/images/icons/star_lg_outline.svg"
                          alt="star_lg_outline"
                        />
                        <img
                          src="~/assets/images/icons/star_lg_outline.svg"
                          alt="star_lg_outline"
                        />
                      </label>
                    </li>
                    <li class="list">
                      <input
                        type="radio"
                        v-model="category.rate"
                        name="rates"
                        id="star2"
                        value="2"
                      />
                      <label for="star2">
                        <img
                          src="~/assets/images/icons/star_lg.svg"
                          alt="star_lg"
                        />
                        <img
                          src="~/assets/images/icons/star_lg.svg"
                          alt="star_lg"
                        />
                        <img
                          src="~/assets/images/icons/star_lg_outline.svg"
                          alt="star_lg_outline"
                        />
                        <img
                          src="~/assets/images/icons/star_lg_outline.svg"
                          alt="star_lg_outline"
                        />
                        <img
                          src="~/assets/images/icons/star_lg_outline.svg"
                          alt="star_lg_outline"
                        />
                      </label>
                    </li>
                    <li class="list">
                      <input
                        type="radio"
                        v-model="category.rate"
                        name="rates"
                        id="star1"
                        value="1"
                      />
                      <label for="star1">
                        <img
                          src="~/assets/images/icons/star_lg.svg"
                          alt="star_lg"
                        />
                        <img
                          src="~/assets/images/icons/star_lg_outline.svg"
                          alt="star_lg_outline"
                        />
                        <img
                          src="~/assets/images/icons/star_lg_outline.svg"
                          alt="star_lg_outline"
                        />
                        <img
                          src="~/assets/images/icons/star_lg_outline.svg"
                          alt="star_lg_outline"
                        />
                        <img
                          src="~/assets/images/icons/star_lg_outline.svg"
                          alt="star_lg_outline"
                        />
                      </label>
                    </li>
                  </ul>
                </div> -->
                <div class="filter-box">
                  <p class="title">Sorting By</p>
                  <ul class="list-style">
                    <li class="list">
                      <input
                        type="radio"
                        v-model="category.sort_type"
                        name="sort_type"
                        id="all"
                        :value="1"
                      />
                      <label for="all">All</label>
                    </li>
                    <li class="list">
                      <input
                        type="radio"
                        v-model="category.sort_type"
                        name="sort_type"
                        id="LowToHigh"
                        :value="1"
                      />
                      <label for="LowToHigh">Price : Low To High</label>
                    </li>
                    <li class="list">
                      <input
                        type="radio"
                        v-model="category.sort_type"
                        name="sort_type"
                        id="HighToLow"
                        :value="2"
                      />
                      <label for="HighToLow">Price : High To Low</label>
                    </li>
                  </ul>
                </div>
                <!-- <div class="filter-box">
                  <p class="title">Price Range</p>
                  <div class="form-row p-3">
                    <div class="form-group col-lg-6 col-md-6 col-12">
                      <input
                        type="number"
                        placeholder="From 0 {{$t('sar')}}"
                        v-model="category.fromPrice"
                        class="custome-input"
                      />
                    </div>
                    <div class="form-group col-lg-6 col-md-6 col-12">
                      <input
                        type="number"
                        placeholder="To 100 {{$t('sar')}}"
                        v-model="category.toPrice"
                        class="custome-input"
                      />
                    </div>
                  </div>
                </div> -->
                <div class="filter-action">
                  <button class="actionBtn" type="reset">reset</button>
                  <button class="actionBtn" type="submit" v-if="!isLoading">apply</button>
                  <button class="actionBtn" type="submit" disabled v-else>
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-8 col-md-8 col-12 mb-3">
            <div class="row">
              <div
                class="col-lg-6 col-md-6 col-12 mb-3"
                v-for="(product, index) in products"
                :key="index"
              >
                <the-card :product="product" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeaderPage from "~/components/shared/TheHeaderPage.vue";
import TheCard from "~/components/shared/TheCard.vue";
export default {
  components: { TheHeaderPage, TheCard },
  data() {
    return {
      id: this.$route.params.id,
      category: {
        // name: "",
        // rate: "",
        sort_type: "",
        // fromPrice: "",
        // toPrice: "",
        category_id: null,
      },
      Categories: [],
      id: this.$route.params.id,
      page: 1,
      search_text: "",
      sort_type: 1,
      products: null,
      isLoading: false,
    };
  },
  methods: {
    async filterCategory() {
      this.isLoading = true
      // console.log(this.category);
      await this.$axios
        // .$get(
        //   `stores/getProducts?store_id=${this.id}&page=${this.page}&sort_type=${this.sort_type}&search_text=${this.search_text}`
        // )
        .$get(`home/getProductsFilter`, {
          params: {
            page: this.page,
            sort_type: this.category.sort_type,
            // search_text: this.search_text,
            category_id: this.category.category_id,
          },
        })
        .then((res) => {
          console.log(res);
          this.products = res.body.products;
        })
        .catch((err) => {
          console.log(err);
        }).finally(()=>{
          this.isLoading = false
        })
    },
    async getCategories() {
      await this.$axios
        .$get(`home`)
        .then((res) => {
          this.Categories = res.body.categories;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getProducts() {
      await this.$axios
        // .$get(
        //   `stores/getProducts?store_id=${this.id}&page=${this.page}&sort_type=${this.sort_type}&search_text=${this.search_text}`
        // )
        .$get(`home/getProductsFilter`, {
          params: {
            page: this.page,
            search_text:this.$route.query.serchText ? this.$route.query.serchText : null
          },
        })
        .then((res) => {
          console.log(res);
          this.products = res.body.products;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getCategories();
    this.getProducts();
  },
};
</script>

<style></style>
