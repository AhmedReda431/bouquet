(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{563:function(t,r){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNi4yMjMiIGhlaWdodD0iMjQuOTExIiB2aWV3Qm94PSIwIDAgMjYuMjIzIDI0LjkxMSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTtzdHJva2U6I2ZmZTAwMDtzdHJva2Utd2lkdGg6MC41cHg7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTUuNSwyMi4wODhsNy43MjUsNC42NjItMi4wNS04Ljc4N0wyOCwxMi4wNWwtOC45ODctLjc2M0wxNS41LDNsLTMuNTEzLDguMjg3TDMsMTIuMDVsNi44MjUsNS45MTNMNy43NzUsMjYuNzVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4zODggLTIuMzU5KSIvPjwvc3ZnPg=="},564:function(t,r){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNi4yMjMiIGhlaWdodD0iMjQuOTExIiB2aWV3Qm94PSIwIDAgMjYuMjIzIDI0LjkxMSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmZTAwMDtzdHJva2U6I2ZmZTAwMDtzdHJva2Utd2lkdGg6MC41cHg7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTUuNSwyMi4wODhsNy43MjUsNC42NjItMi4wNS04Ljc4N0wyOCwxMi4wNWwtOC45ODctLjc2M0wxNS41LDNsLTMuNTEzLDguMjg3TDMsMTIuMDVsNi44MjUsNS45MTNMNy43NzUsMjYuNzVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4zODggLTIuMzU5KSIvPjwvc3ZnPg=="},619:function(t,r,c){"use strict";c.r(r);var e={props:["product"]},l=c(29),component=Object(l.a)(e,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.product?e("div",{staticClass:"card"},[e("nuxt-link",{attrs:{to:t.localePath({name:"products-id",params:{id:t.product.id}})}},[t.product.images?e("div",{},[e("img",{staticClass:"card-img-top",attrs:{loading:"lazy",src:t.product.images[0].img,alt:"Card image cap"}})]):t._e()]),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"card-stars"},[t._l(t.product.rate,(function(i,t){return e("img",{key:t,attrs:{src:c(564),alt:"star_lg"}})})),t._v(" "),t._l(5-t.product.rate,(function(i,t){return e("img",{key:t,attrs:{src:c(563),alt:"star_lg_outline"}})})),t._v(" "),e("span",{staticClass:"stars-count"},[t._v("(52)")])],2),t._v(" "),e("h5",{staticClass:"card-title"},[e("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v(t._s(t.product.name))])],1),t._v(" "),e("div",{staticClass:"card-body-bottom cflex mt-2"},[t.product.sizes&&t.product.sizes[0]?e("div",{staticClass:"card-price"},[t.product.sizes[0].sale_price&&t.product.sizes[0].regular_price?e("p",[e("span",[t._v(t._s(t.product.sizes[0].sale_price)+" "+t._s(t.$t("sar")))]),t._v(" "),e("span",{staticClass:"card-discount"},[t._v(t._s(t.product.sizes[0].regular_price)+" "+t._s(t.$t("sar")))])]):null==t.product.sizes[0].sale_price&&t.product.sizes[0].regular_price?e("p",[e("span",[t._v(t._s(t.product.sizes[0].regular_price)+" "+t._s(t.$t("sar")))])]):t.product.sizes[0].sale_price&&null==t.product.sizes[0].regular_price?e("p",[e("span",[t._v(t._s(t.product.sizes[0].sale_price)+" "+t._s(t.$t("sar")))])]):null==t.product.sizes[0].sale_price&&null==t.product.sizes[0].regular_price?e("p",[e("span",[t._v(t._s(t.product.sizes[0].regular_price)+" "+t._s(t.$t("sar")))])]):t._e()]):t._e()])]),t._v(" "),t.product.is_favourite?e("button",{staticClass:"like-card-btn",attrs:{type:"button"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#FEAF03",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}})])]):e("button",{staticClass:"like-card-btn",attrs:{type:"button"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}})])])],1):t._e()}),[],!1,null,"1642a5a6",null);r.default=component.exports}}]);