(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{570:function(t,n,e){"use strict";e.r(n);var r=e(10),o=(e(36),e(60)),c=e.n(o),h={data:function(){return{counter:1}},methods:{increaseCounter:function(){this.counter++,this.changeValue()},decreaseCounter:function(){if(!(this.counter>1))return!1;this.counter--,this.changeValue()},changeValue:function(){this.$emit("changeQuantity",this.counter)},updateCartProduct:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={cart:[{product_size_id:t.product.id,influncer_id:0,qty:t.counter}]},n.next=3,t.$axios.$post("carts/createOrUpdateCart",e).then((function(t){0==t.code?new c.a({position:"top-end",icon:"error",text:t.msg,showConfirmButton:!1,timer:3e3}):(new c.a({position:"top-end",icon:"success",text:t.msg,showConfirmButton:!1,timer:1500}),commit(ADD_TO_CART,payload))})).catch((function(t){console.log(t)}));case 3:case"end":return n.stop()}}),n)})))()}},props:["product"],mounted:function(){this.counter=this.product.qty}},l=e(29),component=Object(l.a)(h,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"count"},[e("button",{staticClass:"count-btn",attrs:{type:"button"},on:{click:function(n){return n.preventDefault(),t.decreaseCounter()}}},[e("svg",{staticStyle:{fill:"#fff"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M5 11h14v2H5z"}})])]),t._v(" "),e("span",{staticClass:"counter-text"},[t._v(t._s(t.counter))]),t._v(" "),e("button",{staticClass:"count-btn",attrs:{type:"button"},on:{click:function(n){return n.preventDefault(),t.increaseCounter()}}},[e("svg",{staticStyle:{fill:"#fff"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}})])])])}),[],!1,null,null,null);n.default=component.exports}}]);