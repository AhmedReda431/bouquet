(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{576:function(t,o,e){var content=e(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(56).default)("7a789d9c",content,!0,{sourceMap:!1})},590:function(t,o,e){"use strict";e(576)},591:function(t,o,e){var n=e(55)(!1);n.push([t.i,".vueGallery .activePhoto[data-v-1cae8461]{width:100%;margin-bottom:5px;padding-bottom:65%;background-size:cover;background-position:50%;background-repeat:no-repeat;border:2px solid #fff;position:relative}.vueGallery .activePhoto button[data-v-1cae8461]{border:none;background-color:transparent;color:#fff;opacity:1;position:absolute;outline:none;top:50%}.vueGallery .activePhoto button.previous[data-v-1cae8461]{padding:1em;left:0;background:linear-gradient(90deg,transparent 0,rgba(0,0,0,.9))}.vueGallery .activePhoto button.next[data-v-1cae8461]{padding:1em;right:0;background:linear-gradient(90deg,transparent 0,rgba(0,0,0,.9))}.vueGallery .thumbnails[data-v-1cae8461]{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));grid-gap:5px}.vueGallery .thumbnails div[data-v-1cae8461]{width:100%;border:2px solid #fff;outline:2px solid #fff;cursor:pointer;padding-bottom:65%;background-size:cover;background-position:50%;background-repeat:no-repeat;opacity:1}.vueGallery .thumbnails div[data-v-1cae8461]:hover{opacity:.6}.vueGallery .thumbnails div.active[data-v-1cae8461]{outline-color:#5c4084;opacity:1}",""]),t.exports=n},625:function(t,o,e){"use strict";e.r(o);var n={props:["photos"],data:function(){return{activePhoto:null}},mounted:function(){var t=this;this.activePhoto=0,document.addEventListener("keydown",(function(o){37==o.which&&t.previousPhoto(),39==o.which&&t.nextPhoto()}))},methods:{nextPhoto:function(){this.activePhoto=this.activePhoto+1<this.photos.length?this.activePhoto+1:0},previousPhoto:function(){this.activePhoto=this.activePhoto-1>=0?this.activePhoto-1:this.photos.length-1}}},r=(e(590),e(29)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"vueGallery"},[t.photos[t.activePhoto]?e("div",{staticClass:"activePhoto",style:"background-image: url("+t.photos[t.activePhoto].img+");"},[e("button",{staticClass:"previous",attrs:{type:"button","aria-label":"Previous Photo"},on:{click:function(o){return t.previousPhoto()}}},[e("svg",{staticStyle:{fill:"rgba(0, 0, 0, 1)"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"}})])]),t._v(" "),e("button",{staticClass:"next",attrs:{type:"button","aria-label":"Next Photo"},on:{click:function(o){return t.nextPhoto()}}},[e("svg",{staticStyle:{fill:"rgba(0, 0, 0, 1)"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"}})])])]):t._e(),t._v(" "),e("div",{staticClass:"thumbnails"},t._l(t.photos,(function(o,n){return e("div",{key:n,class:{active:t.activePhoto==n},style:"background-image: url("+o.img+")",attrs:{src:o.img},on:{click:function(o){t.activePhoto=n}}})})),0)])}),[],!1,null,"1cae8461",null);o.default=component.exports}}]);