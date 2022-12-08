<template>
  <div class="content statistics-content">
    <div class="statistics-filter">
      <p class="title">Filter Your Statistics</p>
      <form @submit.prevent="filterStatistics">
        <div class="form-row">
          <div class="col-lg-8 col-md-8 col-12 mb-3">
            <client-only>
              <VueDatePicker
                v-model="date"
                placeholder="From date - To date"
                :color="color"
                :locale="locale"
                fullscreen-mobile
                range
                validate
              />
            </client-only>
          </div>
          <div class="col-lg-4 col-md-4 col-12 mb-3">
            <button type="submit" class="filter-btn">filter</button>
          </div>
        </div>
      </form>
    </div>
    <div class="statistics" v-if="statics">
      <div class="box" v-if="statics.products_count >=0">
        <p class="box__title">Products Count</p>
        <p class="box__count">{{statics.products_count}} Product</p>
      </div>
      <div class="box" v-if="statics.orders_count >=0">
        <p class="box__title">Order Count</p>
        <p class="box__count">{{statics.orders_count}} Order</p>
      </div>
      <!-- <div class="box">
        <p class="box__title">Qoutes Count</p>
        <p class="box__count">350 Qoutes</p>
      </div> -->
      <div class="box" v-if="statics.total_sales >=0">
        <p class="box__title">Total Sales</p>
        <p class="box__count">{{statics.total_sales}} {{$t('sar')}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "supplierDash",
  data() {
    return {
      date: new Date(),
      color: "#1F222B",
      locale: { lang: "en" },
      statics:null
      /* locale: {
          lang: {
            name: 'ar',
            weekdays: 'الاحد_الاتنين_الثلاثاء_الاربعاء_الخميس_الجمعة_السبت'.split('_'),
            weekdaysShort: 'الاحد_الاتنين_الثلاثاء_الاربعاء_الخميس_الجمعة_السبت'.split('_'),
            weekStart: 1,
            months: 'يناير_فبراير_مارس_ابريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_اكتوير_نوفمير_ديسمبر'.split('_'),
            monthsShort: 'يناير_فبراير_مارس_ابريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_اكتوير_نوفمير_ديسمبر'.split('_'),
            formats: {
                LT: 'HH:mm',
                LTS: 'HH:mm:ss',
                L: 'DD/MM/YYYY',
                LL: 'D MMMM YYYY',
                LLL: 'D MMMM YYYY HH:mm',
                LLLL: 'dddd D MMMM YYYY HH:mm',
              },
            ordinal: n => `${n}º`,
            buttonCancel: 'الغاء',
            buttonValidate: 'موافق',
            rangeHeaderText: 'من %d الى 13',
          }
        }, */
    };
  },
  methods: {
    filterStatistics() {
      console.log("sss");
    },
    getStatistics() {
      this.$axios
        .get("stores/getStatistics")
        .then((res) => {
          console.log(res);
          this.statics = res.data.body
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted(){
    this.getStatistics()
  }
};
</script>
<style lang="scss" scoped></style>
