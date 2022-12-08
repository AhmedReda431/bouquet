<template>
  <div class="notitication">
    <p class="notitication__title">{{notification.title}}</p>
    <p class="notitication__desc" v-if="$i18n.locale =='en' ? notification.body_en : notification.body_ar">
      {{$i18n.locale =='en' ? notification.body_en : notification.body_ar}}
    </p>
    <p class="notitication__time">{{notification.created_at}}</p>
  </div>
</template>

<script>
  export default {
    props:['notification']
  }
</script>

<style lang="scss" scoped>

</style>
