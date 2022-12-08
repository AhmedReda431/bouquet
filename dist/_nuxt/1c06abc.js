(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{575:function(t,e,o){t.exports=o.p+"img/img3.d6646c9.svg"},588:function(t,e,o){t.exports=o.p+"img/intro3.e9be2ab.svg"},675:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"auth-img"},[e("img",{attrs:{src:o(588),alt:"img3"}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"auth-header"},[o("p",{staticClass:"sub-title"},[t._v("\n                Please Enter Your code To Reset Password\n              ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"resend-code mt-4"},[o("p",{staticClass:"text"},[t._v("Did Not Receive The Code?")]),t._v(" "),o("p",{staticClass:"counter"},[t._v("00:59")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"auth-img"},[e("img",{attrs:{src:o(575),alt:"img3"}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"auth-header"},[o("p",{staticClass:"sub-title"},[t._v("\n                Please Enter Your Registered Email Address To Reset Password\n              ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"auth-img"},[e("img",{attrs:{src:o(575),alt:"img3"}})])])}],r=(o(38),o(127)),c=o(71),l=o.n(c),d=(o(220),{components:{TheHeaderPage:r.default},data:function(){return{code:"",password:"",password_confirmation:"",isloading:!1,countDown:10,step:1,token:"",form:{email:""},validMsg:!1}},computed:{validEmail:function(){return!!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.form.email)}},watch:{showModel:function(t){var e=this;t&&setTimeout((function(){e.showModel=!1}),2e3)}},methods:{addEmail:function(){var t=this;this.$axios.$post("stores/requestPasswordReset",{email:this.form.email}).then((function(e){0==e.code?new l.a({position:"top-end",icon:"error",text:e.msg,showConfirmButton:!1,timer:1500}):(new l.a({position:"top-end",icon:"success",text:e.msg,showConfirmButton:!1,timer:1500}),t.step=2)})).catch((function(t){console.log(t)}))},verify:function(){var t=this;this.$axios.$post("stores/getSupplierRelatedByResetCode",{code:this.code}).then((function(e){0==e.code?new l.a({position:"top-end",icon:"error",text:e.msg,showConfirmButton:!1,timer:1500}):(new l.a({position:"top-end",icon:"success",text:e.msg,showConfirmButton:!1,timer:1500}),t.step=3)})).catch((function(t){console.log(t)}))},resetPass:function(){this.password_confirmation===this.password?this.$axios.$post("stores/updatePassword",{new_password:this.password,old_password:this.password_confirmation}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})):new l.a({position:"top-end",icon:"success",text:"passwords dose not match",showConfirmButton:!1,timer:1500})},resendActivationCode:function(){this.$axios.$post("resendActivationCode")}}}),m=o(29),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"auth-page"},[1==t.step?[o("the-header-page",{attrs:{title:"Forget Password (Step 1 Of 3)"}}),t._v(" "),o("div",{staticClass:"container pt-5 pb-5"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("div",{staticClass:"auth-content"},[o("div",{staticClass:"auth-header"},[o("p",{staticClass:"sub-title"},[t._v(t._s(t.$t("have_account")))])]),t._v(" "),o("div",{staticClass:"mt-5"},[o("div",{staticClass:"form-group",class:{errorBorder:t.validMsg}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"custome-input",attrs:{type:"email",placeholder:t.$t("email")},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),t.validMsg?o("span",{staticClass:"error-msg"},[t._v("Please, Enter Valid email")]):t._e()]),t._v(" "),t.isloading?o("button",{staticClass:"auth-btn",attrs:{type:"button",disabled:""}},[o("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v("\n                Loading...\n              ")]):o("button",{staticClass:"auth-btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.addEmail.apply(null,arguments)}}},[t._v("\n                "+t._s(t.$t("next"))+"\n              ")])])])]),t._v(" "),t._m(0)])])]:t._e(),t._v(" "),2==t.step?[o("the-header-page",{attrs:{title:"Verification Code (Step 2 Of 3)"}}),t._v(" "),o("div",{staticClass:"container pt-5 pb-5"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("div",{staticClass:"auth-content"},[t._m(1),t._v(" "),o("div",{staticClass:"mt-5"},[o("div",{staticClass:"form-content verify-content mb-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"input-foucs",attrs:{type:"text",placeholder:t.$t("input_code")},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"email-address mb-4"},[o("p",{staticClass:"title"},[t._v(t._s(t.$t("email")))]),t._v(" "),o("p",{staticClass:"sub-title"},[t._v(t._s(t.form.email))])]),t._v(" "),t.isloading?o("button",{staticClass:"auth-btn",attrs:{type:"button",disabled:""}},[o("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v("\n                Loading...\n              ")]):o("button",{staticClass:"auth-btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.verify.apply(null,arguments)}}},[t._v("\n                "+t._s(t.$t("verify"))+"\n              ")]),t._v(" "),t._m(2)])])]),t._v(" "),t._m(3)])])]:t._e(),t._v(" "),3==t.step?[o("the-header-page",{attrs:{title:"Reset Password (Step 3Of 3)"}}),t._v(" "),o("div",{staticClass:"container pt-5 pb-5"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("div",{staticClass:"auth-content"},[t._m(4),t._v(" "),o("div",{staticClass:"mt-5"},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"custome-input",attrs:{type:"password",placeholder:t.$t("password"),autocomplete:"off"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.password_confirmation,expression:"password_confirmation"}],staticClass:"custome-input",attrs:{type:"password",placeholder:t.$t("confirm_password"),autocomplete:"off"},domProps:{value:t.password_confirmation},on:{input:function(e){e.target.composing||(t.password_confirmation=e.target.value)}}})]),t._v(" "),t.isloading?o("button",{staticClass:"auth-btn mt-4",attrs:{type:"button",disabled:""}},[o("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v("\n                Loading...\n              ")]):o("button",{staticClass:"auth-btn mt-4",attrs:{type:"submit"},on:{click:t.resetPass}},[t._v("\n                "+t._s(t.$t("reset_password"))+"\n              ")])])])]),t._v(" "),t._m(5)])])]:t._e()],2)}),n,!1,null,"0f3b4603",null);e.default=component.exports}}]);