(window.webpackJsonp=window.webpackJsonp||[]).push([[50,5,14],{571:function(t,o,e){"use strict";e.r(o);var r={props:{text:{type:String,required:!0},msg:{type:String,required:!0}},methods:{close:function(){this.$emit("close")}}},n=e(29),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"custome-alert",class:t.msg},[e("div",{staticClass:"content"},[e("button",{staticClass:"close-alert",attrs:{type:"button"},on:{click:function(o){return o.preventDefault(),t.close.apply(null,arguments)}}},[t._v("X")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.text))])])])}),[],!1,null,"17a75fd4",null);o.default=component.exports},614:function(t,o,e){"use strict";e.r(o);var r=e(60),n=e.n(r),c={props:{formErrors:{type:Object,required:!0}},layout:"userDash",data:function(){return{form:{oldPass:"",newPass:"",confPass:""}}},methods:{changePass:function(){var t=new FormData;t.append("old_password",this.form.oldPass),t.append("new_password",this.form.newPass),this.$emit("updatePassword",t),this.$axios.post("users/updatePassword",t).then((function(t){console.log(t),0==t.data.code?new n.a({position:"top-end",icon:"error",text:t.data.msg,showConfirmButton:!1,timer:1500}):new n.a({position:"top-end",icon:"success",text:t.data.msg,showConfirmButton:!1,timer:1500})})).catch((function(t){console.log(t)}))}}},l=e(29),component=Object(l.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"content change-pass-content"},[e("form",{on:{submit:function(o){return o.preventDefault(),t.changePass.apply(null,arguments)}}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-lg-6 col-md-6 col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.oldPass,expression:"form.oldPass"}],staticClass:"custome-input",attrs:{type:"password",placeholder:"Old Password *",autocomplete:"off"},domProps:{value:t.form.oldPass},on:{input:function(o){o.target.composing||t.$set(t.form,"oldPass",o.target.value)}}}),t._v(" "),t.formErrors&&t.formErrors.new_password?e("span",{staticClass:"error-msg"},[t._v(t._s(t.formErrors.new_password[0]))]):t._e()]),t._v(" "),e("div",{staticClass:"form-group col-lg-6 col-md-6 col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.newPass,expression:"form.newPass"}],staticClass:"custome-input",attrs:{type:"password",placeholder:"New Password *",autocomplete:"off"},domProps:{value:t.form.newPass},on:{input:function(o){o.target.composing||t.$set(t.form,"newPass",o.target.value)}}}),t._v(" "),t.formErrors&&t.formErrors.new_password?e("span",{staticClass:"error-msg"},[t._v(t._s(t.formErrors.new_password[1]))]):t._e()])]),t._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-lg-6 col-md-6 col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.confPass,expression:"form.confPass"}],staticClass:"custome-input",attrs:{type:"password",placeholder:"Confirm New Password *",autocomplete:"off"},domProps:{value:t.form.confPass},on:{input:function(o){o.target.composing||t.$set(t.form,"confPass",o.target.value)}}}),t._v(" "),t.formErrors&&t.formErrors.new_password?e("span",{staticClass:"error-msg"},[t._v(t._s(t.formErrors.new_password[0]))]):t._e()]),t._v(" "),t._m(0)])])])}),[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"form-group col-lg-6 col-md-6 col-12"},[e("button",{staticClass:"contact-btn",attrs:{type:"submit"}},[t._v("SAVE")])])}],!1,null,"0940981e",null);o.default=component.exports},660:function(t,o,e){"use strict";e.r(o);e(38);var r=e(614),n=e(571),c={layout:"userDash",components:{TheUserChangePass:r.default,TheAlert:n.default},data:function(){return{showModel:!1,errorMsg:{text:"",msg:""},formErrors:{}}},watch:{showModel:function(t){var o=this;t&&setTimeout((function(){o.showModel=!1}),4e3)},formErrors:function(t){var o=this;t&&setTimeout((function(){o.formErrors={}}),4e3)}},methods:{updatePassword:function(t){console.log(t)}}},l=e(29),component=Object(l.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"content change-pass-content"},[e("the-user-change-pass",{attrs:{formErrors:t.formErrors},on:{updatePassword:t.updatePassword}}),t._v(" "),e("transition",{attrs:{appear:"",name:"slide-fade"}},[t.showModel?e("the-alert",{attrs:{text:t.errorMsg.text,msg:t.errorMsg.msg},on:{close:function(o){t.showModel=!1}}}):t._e()],1)],1)}),[],!1,null,"e0bdb45c",null);o.default=component.exports}}]);