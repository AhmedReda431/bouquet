<template>
  <div>
    <div class="" v-if="rate == 0">
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
      <img
        src="~/assets/images/icons/star_lg_outline.svg"
        alt="star_lg_outline"
      />
    </div>
    <div class="" v-if="rate == 1">
      <img src="~/assets/images/icons/star_lg.svg" alt="star_lg" />
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
    </div>
    <div class="" v-if="rate == 2">
      <img src="~/assets/images/icons/star_lg.svg" alt="star_lg" />
      <img src="~/assets/images/icons/star_lg.svg" alt="star_lg" />
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
    </div>
    <div class="" v-if="rate == 3">
      <img src="~/assets/images/icons/star_lg.svg" alt="star_lg" />
      <img src="~/assets/images/icons/star_lg.svg" alt="star_lg" />
      <img src="~/assets/images/icons/star_lg.svg" alt="star_lg" />
      <img
        src="~/assets/images/icons/star_lg_outline.svg"
        alt="star_lg_outline"
      />
      <img
        src="~/assets/images/icons/star_lg_outline.svg"
        alt="star_lg_outline"
      />
    </div>
    <div class="" v-if="rate == 4">
      <img src="~/assets/images/icons/star_lg.svg" alt="star_lg" />
      <img src="~/assets/images/icons/star_lg.svg" alt="star_lg" />
      <img src="~/assets/images/icons/star_lg.svg" alt="star_lg" />
      <img src="~/assets/images/icons/star_lg.svg" alt="star_lg" />
      <img
        src="~/assets/images/icons/star_lg_outline.svg"
        alt="star_lg_outline"
      />
    </div>
    <div class="" v-if="rate == 5">
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
    </div>
  </div>
</template>

<script>
export default {
  props: ["rate"],
};
</script>

<style></style>
