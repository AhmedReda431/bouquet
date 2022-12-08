(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{680:function(t,e,o){"use strict";o.r(e);o(23),o(3),o(57),o(17),o(221);var r=o(60),n=o.n(r),l={components:{TheHeaderPage:o(127).default},data:function(){return{isDiscount:"",options:["Canada","United States"],gender:["male","female"],preview_images:[],image_list:[],form:{name:"",description:"",price:"",quantity:"",sizes:"",weight:"",width:"",height:"",type:"",discountPrecent:"",discountAmount:""},isLoading:!1}},methods:{addProduct:function(){var t=this;this.isLoading=!0;var e=new FormData;e.append("name",this.form.name),e.append("description",this.form.description),e.append("price",this.form.price),e.append("quantity",this.form.quantity),e.append("sizes",this.form.sizes),e.append("weight",this.form.weight),e.append("width",this.form.width),e.append("height",this.form.height),e.append("type",this.form.type),e.append("discountPrecent",this.form.discountPrecent),e.append("discountAmount",this.form.discountAmount),e.append("image_1",this.image_list[0]),e.append("image_2",this.image_list[1]),e.append("image_3",this.image_list[2]),e.append("image_4",this.image_list[3]),e.append("image_5",this.image_list[4]),e.append("image_6",this.image_list[5]),this.$axios.$post("stores/products/add",e).then((function(t){console.log(t),0==t.code?new n.a({position:"center",icon:"error",text:t.msg,showConfirmButton:!0}):new n.a({position:"center",icon:"success",text:t.msg,showConfirmButton:!0})})).catch((function(t){console.log(t)})).finally((function(){t.isLoading=!1}))},deleteImg:function(t){for(var e=0;e<this.preview_images.length;e++)t==this.preview_images[e]&&(this.preview_images.splice(e,1),this.image_list.splice(e,1))},uploadImages:function(t){var e=this,input=t.target,o=input.files.length,r=0;if(input.files)for(;o--;){var n=new FileReader;n.onload=function(t){e.preview_images.push(t.target.result)},this.image_list.push(input.files[r]),n.readAsDataURL(input.files[r]),r++}}}},c=o(29),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"add-product"},[o("the-header-page",{attrs:{title:"Add product"}}),t._v(" "),o("div",{staticClass:"add-product-content"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("form",{on:{submit:function(e){return e.preventDefault(),t.addProduct.apply(null,arguments)}}},[o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-lg-6 col-md-6 col-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"custome-input",attrs:{type:"text",placeholder:"Product Name *"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-lg-6 col-md-6 col-12"},[o("v-select",{attrs:{options:t.options}})],1)]),t._v(" "),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-12"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"custome-input",attrs:{cols:"30",rows:"5",placeholder:"Description Your Product / Price / Quantity / Size / Gendar / Type ........ *"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-lg-4 col-md-4 col-6"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price,expression:"form.price"}],staticClass:"custome-input",attrs:{type:"number",placeholder:"Price *"},domProps:{value:t.form.price},on:{input:function(e){e.target.composing||t.$set(t.form,"price",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-lg-4 col-md-4 col-6"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.quantity,expression:"form.quantity"}],staticClass:"custome-input",attrs:{type:"number",placeholder:"Quantity *"},domProps:{value:t.form.quantity},on:{input:function(e){e.target.composing||t.$set(t.form,"quantity",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-lg-4 col-md-4 col-6"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.sizes,expression:"form.sizes"}],staticClass:"custome-input",attrs:{type:"number",placeholder:"Size *"},domProps:{value:t.form.sizes},on:{input:function(e){e.target.composing||t.$set(t.form,"sizes",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-lg-4 col-md-4 col-6"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.weight,expression:"form.weight"}],staticClass:"custome-input",attrs:{type:"number",placeholder:"Weight *"},domProps:{value:t.form.weight},on:{input:function(e){e.target.composing||t.$set(t.form,"weight",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-lg-4 col-md-4 col-6"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.width,expression:"form.width"}],staticClass:"custome-input",attrs:{type:"number",placeholder:"Width *"},domProps:{value:t.form.width},on:{input:function(e){e.target.composing||t.$set(t.form,"width",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group col-lg-4 col-md-4 col-6"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.height,expression:"form.height"}],staticClass:"custome-input",attrs:{type:"number",placeholder:"Height *"},domProps:{value:t.form.height},on:{input:function(e){e.target.composing||t.$set(t.form,"height",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group col-lg-6 col-md-6 col-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],staticClass:"custome-input",attrs:{type:"text",placeholder:"Type *"},domProps:{value:t.form.type},on:{input:function(e){e.target.composing||t.$set(t.form,"type",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"upload-images mb-4"},[t.preview_images.length>0?o("div",{staticClass:"imgs-uploaded"},[o("ul",{staticClass:"list-style"},t._l(t.preview_images,(function(e,r){return o("li",{key:r,staticClass:"list"},[o("img",{attrs:{src:e,alt:"alt_img"}}),t._v(" "),o("button",{staticClass:"delete-btn",attrs:{type:"button"},on:{click:function(o){return o.preventDefault(),t.deleteImg(e)}}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 19.022 19.022"}},[o("defs",[o("style",[t._v("\n                        .a,\n                        .b,\n                        .c {\n                          fill: none;\n                        }\n                        .b,\n                        .c {\n                          stroke: #fff;\n                          stroke-linecap: round;\n                          stroke-linejoin: bevel;\n                          stroke-width: 2px;\n                        }\n                        .c {\n                          fill-rule: evenodd;\n                        }\n                      ")])]),t._v(" "),o("rect",{staticClass:"a",attrs:{width:"19.022",height:"19.022"}}),t._v(" "),o("g",{attrs:{transform:"translate(2.378 1.435)"}},[o("line",{staticClass:"b",attrs:{x1:"4.755",y1:"4.755",transform:"translate(4.755 7.442)"}}),t._v(" "),o("line",{staticClass:"b",attrs:{x1:"4.755",y2:"4.755",transform:"translate(4.755 7.442)"}}),t._v(" "),o("rect",{staticClass:"b",attrs:{width:"14.266",height:"3.17",rx:"1"}}),t._v(" "),o("path",{staticClass:"c",attrs:{d:"M16.1,5.81v11.4a1.585,1.585,0,0,1-1.585,1.585H6.585A1.585,1.585,0,0,1,5,17.207V5.81",transform:"translate(-3.415 -2.64)"}})])])])])})),0)]):t._e(),t._v(" "),o("label",{class:{absolute_label:t.preview_images.length>0},attrs:{for:"upload-label"}},[t._v("\n            Upload Images\n            "),o("svg",{staticStyle:{fill:"#A0AEC0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-8 12c-2.71 0-5-2.29-5-5 0-2.711 2.29-5 5-5s5 2.289 5 5c0 2.71-2.29 5-5 5z"}}),t._v(" "),o("path",{attrs:{d:"M13 9h-2v2H9v2h2v2h2v-2h2v-2h-2z"}})]),t._v(" "),o("input",{attrs:{type:"file",accept:"image/*",multiple:"multiple",id:"upload-label"},on:{change:t.uploadImages}})])]),t._v(" "),o("div",{staticClass:"form-row"},[o("div",{staticClass:"form-group discount-content col-lg-4 col-md-4 col-12"},[o("p",{staticClass:"discount-text"},[t._v("Is There A Discount?")]),t._v(" "),o("label",{staticClass:"switch",attrs:{for:"checkbox"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.isDiscount,expression:"isDiscount"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.isDiscount)?t._i(t.isDiscount,null)>-1:t.isDiscount},on:{change:function(e){var o=t.isDiscount,r=e.target,n=!!r.checked;if(Array.isArray(o)){var l=t._i(o,null);r.checked?l<0&&(t.isDiscount=o.concat([null])):l>-1&&(t.isDiscount=o.slice(0,l).concat(o.slice(l+1)))}else t.isDiscount=n}}}),t._v(" "),o("div",{staticClass:"slider round"})])]),t._v(" "),t.isDiscount?o("div",{staticClass:"form-group col-lg-4 col-md-4 col-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.discountPrecent,expression:"form.discountPrecent"}],staticClass:"custome-input",attrs:{type:"number",placeholder:"Enter The Percentage*"},domProps:{value:t.form.discountPrecent},on:{input:function(e){e.target.composing||t.$set(t.form,"discountPrecent",e.target.value)}}})]):t._e(),t._v(" "),t.isDiscount?o("div",{staticClass:"form-group col-lg-4 col-md-4 col-12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.discountAmount,expression:"form.discountAmount"}],staticClass:"custome-input",attrs:{type:"number",placeholder:"Enter The Amount*"},domProps:{value:t.form.discountAmount},on:{input:function(e){e.target.composing||t.$set(t.form,"discountAmount",e.target.value)}}})]):t._e()]),t._v(" "),t.isLoading?o("button",{staticClass:"add-product-btn",attrs:{disabled:""}},[o("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v("\n          Loading...\n        ")]):o("button",{staticClass:"add-product-btn",attrs:{type:"submit"}},[t._v("\n          add\n        ")])])])])],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("p",{staticClass:"title"},[t._v("Determine The Specifications Carefully")]),t._v(" "),o("p",{staticClass:"sub-title"},[t._v("* Indicates A Required Field")])])}],!1,null,"6a169572",null);e.default=component.exports}}]);