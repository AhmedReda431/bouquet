(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{673:function(t,c,e){"use strict";e.r(c);var o={layout:"supplierDash",data:function(){return{date:new Date,color:"#1F222B",locale:{lang:"en"},statics:null}},methods:{filterStatistics:function(){console.log("sss")},getStatistics:function(){var t=this;this.$axios.get("stores/getStatistics").then((function(c){console.log(c),t.statics=c.data.body})).catch((function(t){console.log(t)}))}},mounted:function(){this.getStatistics()}},l=e(29),component=Object(l.a)(o,(function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{staticClass:"content statistics-content"},[e("div",{staticClass:"statistics-filter"},[e("p",{staticClass:"title"},[t._v("Filter Your Statistics")]),t._v(" "),e("form",{on:{submit:function(c){return c.preventDefault(),t.filterStatistics.apply(null,arguments)}}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"col-lg-8 col-md-8 col-12 mb-3"},[e("client-only",[e("VueDatePicker",{attrs:{placeholder:"From date - To date",color:t.color,locale:t.locale,"fullscreen-mobile":"",range:"",validate:""},model:{value:t.date,callback:function(c){t.date=c},expression:"date"}})],1)],1),t._v(" "),t._m(0)])])]),t._v(" "),t.statics?e("div",{staticClass:"statistics"},[t.statics.products_count>=0?e("div",{staticClass:"box"},[e("p",{staticClass:"box__title"},[t._v("Products Count")]),t._v(" "),e("p",{staticClass:"box__count"},[t._v(t._s(t.statics.products_count)+" Product")])]):t._e(),t._v(" "),t.statics.orders_count>=0?e("div",{staticClass:"box"},[e("p",{staticClass:"box__title"},[t._v("Order Count")]),t._v(" "),e("p",{staticClass:"box__count"},[t._v(t._s(t.statics.orders_count)+" Order")])]):t._e(),t._v(" "),t.statics.total_sales>=0?e("div",{staticClass:"box"},[e("p",{staticClass:"box__title"},[t._v("Total Sales")]),t._v(" "),e("p",{staticClass:"box__count"},[t._v(t._s(t.statics.total_sales)+" "+t._s(t.$t("sar")))])]):t._e()]):t._e()])}),[function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{staticClass:"col-lg-4 col-md-4 col-12 mb-3"},[e("button",{staticClass:"filter-btn",attrs:{type:"submit"}},[t._v("filter")])])}],!1,null,"197ece52",null);c.default=component.exports}}]);