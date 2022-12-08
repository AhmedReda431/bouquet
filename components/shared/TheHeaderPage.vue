<template>
  <div class="page-header">
    <div class="container">
      <nuxt-link :to="localePath('/')" class="header-link">{{$t("home")}}</nuxt-link>  <span class="sub-link" v-if="title"><img src="~/assets/images/icons/next.svg" alt="next"> {{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.page-header {
  background-color: #F6F6F7;
  padding: 10px 0;
  .header-link {
    font-weight: bold;
    color: #1F222B;
    margin-right: 5px;
  }
  .sub-link {
    color: #333333;
    text-transform: capitalize;
    img {
      width: 6px;
      margin-right: 5px;
    }
  }
}
</style>
