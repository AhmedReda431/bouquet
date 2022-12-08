<template>
  <div class="card">
    <div class="wrapper" v-if="category">
      <nuxt-link
        :to="localePath({ name: 'products-id', params: { id: category.id } })"
      >
        <img
          class="card-img-top"
          v-if="category.images[0].img"
          :src="category.images[0].img"
          alt="category-image"
        />
      </nuxt-link>
      <div class="card-body">
        <TheRating
          :rate="category.rate"
          :num_users_rate="category.num_users_rate"
        />
        <h5 class="card-title">
          <nuxt-link
            :to="
              localePath({ name: 'products-id', params: { id: category.id } })
            "
            >{{ category.name }}</nuxt-link
          >
        </h5>
        <!--
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      -->
        <div class="card-body-bottom cflex mt-2">
          <div class="card-price" v-if="category.sizes && category.sizes[0]">
            <p
              v-if="
                category.sizes[0].sale_price && category.sizes[0].regular_price
              "
            >
              <span>{{ category.sizes[0].sale_price }} {{$t('sar')}}</span>
              <span class="card-discount"
                >{{ category.sizes[0].regular_price }} {{$t('sar')}}</span
              >
            </p>
            <p
              v-else-if="
                category.sizes[0].sale_price == null &&
                  category.sizes[0].regular_price
              "
            >
              <span>{{ category.sizes[0].regular_price }} {{$t('sar')}}</span>
            </p>
            <p
              v-else-if="
                category.sizes[0].sale_price &&
                  category.sizes[0].regular_price == null
              "
            >
              <span>{{ category.sizes[0].sale_price }} {{$t('sar')}}</span>
            </p>
            <p
              v-else-if="
                category.sizes[0].sale_price == null &&
                  category.sizes[0].regular_price == null
              "
            >
              <span>{{ category.sizes[0].regular_price }} {{$t('sar')}}</span>
            </p>
          </div>

          <button type="button" class="action-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke="#fff"
                stroke-linejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </div>
      <button type="button" class="like-card-btn" v-if="!category.is_favourite">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      </button>
      <button type="button" class="like-card-btn" v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#FEAF03"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import TheRating from "./TheRating.vue";
export default {
  props: ["product"],
  components: { TheRating },
};
</script>

<style lang="scss" scoped></style>
