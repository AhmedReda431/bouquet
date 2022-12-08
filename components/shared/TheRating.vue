<template>
  <div>
    <div class="wrapper" v-if="rate >=0">
      <div class="" v-if="rate == 5">
        <div class="card-stars">
          <img
            src="~/assets/images/icons/star_lg.svg"
            alt="star_lg"
            v-for="(i, index) in 5"
            :key="index"
          />
          <span class="stars-count">( {{num_users_rate}} )</span>
        </div>
      </div>
      <div class="" v-if="rate == 4">
        <div class="card-stars">
          <img
            src="~/assets/images/icons/star_lg.svg"
            alt="star_lg"
            v-for="(i, index) in 4"
            :key="index"
          />
          <img
            src="~/assets/images/icons/star_lg_outline.svg"
            alt="star_lg_outline"
          />
          <span class="stars-count">( {{num_users_rate}} )</span>
        </div>
      </div>
      <div class="" v-if="rate == 3">
        <div class="card-stars">
          <img
            src="~/assets/images/icons/star_lg.svg"
            alt="star_lg"
            v-for="(i, index) in 3"
            :key="index"
          />
          <img
            src="~/assets/images/icons/star_lg_outline.svg"
            alt="star_lg_outline"
          />
          <img
            src="~/assets/images/icons/star_lg_outline.svg"
            alt="star_lg_outline"
          />
          <span class="stars-count">( {{num_users_rate}} )</span>
        </div>
      </div>
      <div class="" v-if="rate == 2">
        <div class="card-stars">
          <img
            src="~/assets/images/icons/star_lg.svg"
            alt="star_lg"
            v-for="(i, index) in 2"
            :key="index"
          />
          <img
            v-for="(i, index) in 3"
            :key="index"
            src="~/assets/images/icons/star_lg_outline.svg"
            alt="star_lg_outline"
          />
          <span class="stars-count">( {{num_users_rate}} )</span>
        </div>
      </div>
      <div class="" v-if="rate == 1">
        <div class="card-stars">
          <img
            src="~/assets/images/icons/star_lg.svg"
            alt="star_lg"
            
          />
          <img v-for="(i, index) in 4"
            :key="index"
            src="~/assets/images/icons/star_lg_outline.svg"
            alt="star_lg_outline"
          />
          <span class="stars-count">( {{num_users_rate}} )</span>
        </div>
      </div>
      <div class="" v-if="rate == 0">
        <div class="card-stars">
          <img v-for="(i, index) in 5"
            :key="index"
            src="~/assets/images/icons/star_lg_outline.svg"
            alt="star_lg_outline"
          />
          <span class="stars-count">( {{num_users_rate}} )</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rate" , "num_users_rate"]
};
</script>

<style></style>
