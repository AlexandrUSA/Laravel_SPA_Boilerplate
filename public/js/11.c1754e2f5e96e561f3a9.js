webpackJsonp([11],{

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(165)
/* template */
var __vue_template__ = __webpack_require__(166)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\pages\\settings\\password.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-360d0626", Component.options)
  } else {
    hotAPI.reload("data-v-360d0626", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  scrollToTop: false,

  metaInfo: function metaInfo() {
    return { title: this.$t('settings') };
  },


  data: function data() {
    return {
      valid: false,
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        password: '',
        password_confirmation: ''
      }),
      passwordRules: [function (v) {
        return !!v || "Введите значение";
      }]
    };
  },

  methods: {
    update: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.form.patch('/api/settings/password');

              case 2:

                this.form.reset();

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function update() {
        return _ref.apply(this, arguments);
      }

      return update;
    }()
  }
});

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.update($event)
        },
        keydown: function($event) {
          _vm.form.onKeydown($event)
        }
      },
      model: {
        value: _vm.valid,
        callback: function($$v) {
          _vm.valid = $$v
        },
        expression: "valid"
      }
    },
    [
      _c("v-text-field", {
        attrs: {
          label: _vm.$t("new_password"),
          rules: _vm.passwordRules,
          counter: 160,
          "prepend-icon": "vpn_key",
          type: "password",
          required: ""
        },
        model: {
          value: _vm.form.password,
          callback: function($$v) {
            _vm.$set(_vm.form, "password", $$v)
          },
          expression: "form.password"
        }
      }),
      _vm._v(" "),
      _c("has-error", { attrs: { form: _vm.form, field: "password" } }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: _vm.$t("confirm_password"),
          rules: _vm.passwordRules,
          counter: 160,
          "prepend-icon": "vpn_key",
          type: "password",
          required: ""
        },
        model: {
          value: _vm.form.password_confirmation,
          callback: function($$v) {
            _vm.$set(_vm.form, "password_confirmation", $$v)
          },
          expression: "form.password_confirmation"
        }
      }),
      _vm._v(" "),
      _c("has-error", {
        attrs: { form: _vm.form, field: "password_confirmation" }
      }),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: {
            large: "",
            block: "",
            loading: _vm.form.busy,
            type: "submit"
          }
        },
        [_vm._v(_vm._s(_vm.$t("update")))]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-360d0626", module.exports)
  }
}

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

(function(e,t){ true?module.exports=t(__webpack_require__(8)):"function"==typeof define&&define.amd?define(["axios"],t):"object"==typeof exports?exports.vform=t(require("axios")):e.vform=t(e.axios)})(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=19)}([function(e,t){e.exports=function(e,t,r,n){var o,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,s=e.default);var u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r),n){var a=u.computed||(u.computed={});Object.keys(n).forEach(function(e){var t=n[e];a[e]=function(){return t}})}return{esModule:o,exports:s,options:u}}},function(e,t,r){"use strict";t.a={props:{form:{type:Object,required:!0},dismissible:{type:Boolean,default:!0}},methods:{dismiss:function(){this.dismissible&&this.form.clear()}}}},function(e,t,r){"use strict";function n(e){if(null===e||"object"!==("undefined"==typeof e?"undefined":u(e)))return e;var t=Array.isArray(e)?[]:{};return Object.keys(e).forEach(function(r){t[r]=n(e[r])}),t}function o(e){return Object.keys(e).some(function(t){return e[t]instanceof Blob||e[t]instanceof FileList})}function s(e){var t=new FormData;return Object.keys(e).forEach(function(r){var n=e[r];if(n instanceof FileList)for(var o=0;o<n.length;o++)t.append(r+"[]",n.item(o));else t.append(r,n)}),t}function i(e){return Array.isArray(e)?e:[e]}t.a=n,t.b=o,t.c=s,t.d=i;var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),o=r(12),s=r.n(o),i=r(10),u=r.n(i),a=r(11),c=r.n(a),l=r(13),f=r.n(l);r.d(t,"Form",function(){return n.a}),r.d(t,"HasError",function(){return s.a}),r.d(t,"AlertError",function(){return u.a}),r.d(t,"AlertErrors",function(){return c.a}),r.d(t,"AlertSuccess",function(){return f.a}),r.d(t,"default",function(){return n.a})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default={extends:n.a,name:"alert-error",props:{message:{type:String,default:"There were some problems with your input."}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default={extends:n.a,name:"alert-errors",props:{message:{type:String,default:"There were some problems with your input."}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"has-error",props:{form:{type:Object,required:!0},field:{type:String,required:!0}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default={extends:n.a,name:"alert-success",props:{message:String}}},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=r(2),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=function(){function e(){o(this,e),this.errors={}}return a(e,[{key:"set",value:function(e,t){"object"===("undefined"==typeof e?"undefined":u(e))?this.errors=e:this.set(i({},this.errors,n({},e,r.i(s.d)(t))))}},{key:"all",value:function(){return this.errors}},{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"hasAny",value:function(){for(var e=this,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return r.some(function(t){return e.has(t)})}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.has(e))return this.getAll(e)[0]}},{key:"getAll",value:function(e){return r.i(s.d)(this.errors[e]||[])}},{key:"only",value:function(){for(var e=this,t=[],r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return n.forEach(function(r){var n=e.get(r);n&&t.push(n)}),t}},{key:"flatten",value:function(){return Object.values(this.errors).reduce(function(e,t){return e.concat(t)},[])}},{key:"clear",value:function(e){var t=this,r={};e&&Object.keys(this.errors).forEach(function(n){n!==e&&(r[n]=t.errors[n])}),this.set(r)}}]),e}();t.a=c},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=r(18),s=r.n(o),i=r(8),u=r(2),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,e),this.busy=!1,this.successful=!1,this.errors=new i.a,this.originalData=r.i(u.a)(t),Object.assign(this,t)}return l(e,[{key:"data",value:function e(){var t=this,e={};return this.keys().forEach(function(r){e[r]=t[r]}),e}},{key:"keys",value:function(){return Object.keys(this).filter(function(t){return!e.ignore.includes(t)})}},{key:"startProcessing",value:function(){this.errors.clear(),this.busy=!0,this.successful=!1}},{key:"finishProcessing",value:function(){this.busy=!1,this.successful=!0}},{key:"clear",value:function(){this.errors.clear(),this.successful=!1}},{key:"reset",value:function(){var t=this;Object.keys(this).filter(function(t){return!e.ignore.includes(t)}).forEach(function(e){t[e]=r.i(u.a)(t.originalData[e])})}},{key:"get",value:function(e){return this.submit("get",e)}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.startProcessing(),t=this.route(t);var i=this.data();return r.i(u.b)(i)&&(i=r.i(u.c)(i)),"get"===e&&(i={params:i}),new Promise(function(r,u){s.a.request(c({url:t,method:e,data:i},o)).then(function(e){n.finishProcessing(),r(e)}).catch(function(e){n.busy=!1,e.response&&n.errors.set(n.extractErrors(e.response)),u(e)})})}},{key:"extractErrors",value:function(t){return t.data&&"object"===a(t.data)?t.data.errors?c({},t.data.errors):t.data.message?{error:t.data.message}:c({},t.data):{error:e.errorMessage}}},{key:"route",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t;return e.routes.hasOwnProperty(t)&&(n=decodeURI(e.routes[t])),"object"!==("undefined"==typeof r?"undefined":a(r))&&(r={id:r}),Object.keys(r).forEach(function(e){n=n.replace("{"+e+"}",r[e])}),n}},{key:"onKeydown",value:function(e){e.target.name&&this.errors.clear(e.target.name)}}]),e}();f.routes={},f.errorMessage="Something went wrong. Please try again.",f.ignore=["busy","successful","errors","originalData"],t.a=f},function(e,t,r){var n=r(0)(r(4),r(17),null,null);e.exports=n.exports},function(e,t,r){var n=r(0)(r(5),r(15),null,null);e.exports=n.exports},function(e,t,r){var n=r(0)(r(6),r(14),null,null);e.exports=n.exports},function(e,t,r){var n=r(0)(r(7),r(16),null,null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.errors.has(e.field)?r("div",{staticClass:"help-block invalid-feedback",domProps:{innerHTML:e._s(e.form.errors.get(e.field))}}):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.errors.any()?r("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[e.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]):e._e(),e._v(" "),e.message?r("div",{domProps:{innerHTML:e._s(e.message)}}):e._e(),e._v(" "),r("ul",e._l(e.form.errors.flatten(),function(t){return r("li",{domProps:{innerHTML:e._s(t)}})}))]):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.successful?r("div",{staticClass:"alert alert-success alert-dismissible",attrs:{role:"alert"}},[e.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]):e._e(),e._v(" "),e._t("default",[r("div",{domProps:{innerHTML:e._s(e.message)}})])],2):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.errors.any()?r("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[e.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]):e._e(),e._v(" "),e.form.errors.has("error")?r("div",{domProps:{innerHTML:e._s(e.form.errors.get("error"))}}):r("div",{domProps:{innerHTML:e._s(e.message)}})]):e._e()},staticRenderFns:[]}},function(t,r){t.exports=e},function(e,t,r){e.exports=r(3)}])});
//# sourceMappingURL=vform.js.map

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Bhc3N3b3JkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9wYXNzd29yZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9wYXNzd29yZC52dWU/MTFiOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmZvcm0vZGlzdC92Zm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTs7QUFFQTtlQUdBOztnQ0FDQTs0QkFDQTtBQUVBOzs7OzthQUVBOztrQkFFQTsrQkFFQTtBQUhBOztzQkFRQTtPQUpBO0FBTkE7Ozs7QUFZQTtBQURBOzs7Ozs7dUNBR0E7Ozs7MEJBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeEJBLEc7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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VUFBVSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixlQUFlLFdBQVcsa0JBQWtCLDhDQUE4QyxrQ0FBa0MsMkRBQTJELGNBQWMsNEJBQTRCLDJCQUEyQixtQ0FBbUMsS0FBSyxpQkFBaUIsWUFBWSxPQUFPLHNCQUFzQiwwREFBMEQsVUFBVSwyQkFBMkIsZUFBZSxxQkFBcUIsZUFBZSxXQUFXLGtCQUFrQiw4Q0FBOEMsb0NBQW9DLDBEQUEwRCxjQUFjLDRCQUE0QiwyQkFBMkIsbUNBQW1DLEtBQUssaUJBQWlCLFlBQVksT0FBTyxzQkFBc0IscUVBQXFFLFVBQVUsNENBQTRDLFdBQVcsVUFBVSwyQkFBMkIsV0FBVyxxQkFBcUIsZUFBZSxZQUFZLGlCQUFpQixlQUFlLEdBQUc7QUFDMXlVLGlDIiwiZmlsZSI6ImpzLzExLmMxNzU0ZTJmNWU5NmU1NjFmM2E5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcGFzc3dvcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zNjBkMDYyNlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Bhc3N3b3JkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXHNldHRpbmdzXFxcXHBhc3N3b3JkLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zNjBkMDYyNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM2MGQwNjI2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Bhc3N3b3JkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCI8dGVtcGxhdGU+XG4gICAgPHYtZm9ybSB2LW1vZGVsPVwidmFsaWRcIiBAc3VibWl0LnByZXZlbnQ9XCJ1cGRhdGVcIiBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIj5cbiAgICA8di10ZXh0LWZpZWxkXG4gICAgICA6bGFiZWw9XCIkdCgnbmV3X3Bhc3N3b3JkJylcIlxuICAgICAgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIlxuICAgICAgOnJ1bGVzPVwicGFzc3dvcmRSdWxlc1wiXG4gICAgICA6Y291bnRlcj1cIjE2MFwiXG4gICAgICBwcmVwZW5kLWljb249XCJ2cG5fa2V5XCJcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICByZXF1aXJlZFxuICAgID48L3YtdGV4dC1maWVsZD5cbiAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwicGFzc3dvcmRcIi8+XG4gICAgPHYtdGV4dC1maWVsZFxuICAgICAgOmxhYmVsPVwiJHQoJ2NvbmZpcm1fcGFzc3dvcmQnKVwiXG4gICAgICB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb25cIlxuICAgICAgOnJ1bGVzPVwicGFzc3dvcmRSdWxlc1wiXG4gICAgICA6Y291bnRlcj1cIjE2MFwiXG4gICAgICBwcmVwZW5kLWljb249XCJ2cG5fa2V5XCJcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICByZXF1aXJlZFxuICAgID48L3YtdGV4dC1maWVsZD5cbiAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIgLz5cblxuICAgIDx2LWJ0biBsYXJnZSBibG9jayA6bG9hZGluZz1cImZvcm0uYnVzeVwiIHR5cGU9XCJzdWJtaXRcIj57eyAkdCgndXBkYXRlJykgfX08L3YtYnRuPlxuICA8L3YtZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzY3JvbGxUb1RvcDogZmFsc2UsXG5cbiAgbWV0YUluZm8gKCkge1xuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdzZXR0aW5ncycpIH1cbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHZhbGlkOiBmYWxzZSxcbiAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnXG4gICAgfSksXG4gICAgcGFzc3dvcmRSdWxlczogW1xuICAgICAgdiA9PiAhIXYgfHwgXCLQktCy0LXQtNC40YLQtSDQt9C90LDRh9C10L3QuNC1XCJcbiAgICBdLFxuICB9KSxcblxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgdXBkYXRlICgpIHtcbiAgICAgIGF3YWl0IHRoaXMuZm9ybS5wYXRjaCgnL2FwaS9zZXR0aW5ncy9wYXNzd29yZCcpXG5cbiAgICAgIHRoaXMuZm9ybS5yZXNldCgpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Bhc3N3b3JkLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWZvcm1cIixcbiAgICB7XG4gICAgICBvbjoge1xuICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICAgIH0sXG4gICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5mb3JtLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtb2RlbDoge1xuICAgICAgICB2YWx1ZTogX3ZtLnZhbGlkLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgX3ZtLnZhbGlkID0gJCR2XG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IFwidmFsaWRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJuZXdfcGFzc3dvcmRcIiksXG4gICAgICAgICAgcnVsZXM6IF92bS5wYXNzd29yZFJ1bGVzLFxuICAgICAgICAgIGNvdW50ZXI6IDE2MCxcbiAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInZwbl9rZXlcIixcbiAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoYXMtZXJyb3JcIiwgeyBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwicGFzc3dvcmRcIiB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiY29uZmlybV9wYXNzd29yZFwiKSxcbiAgICAgICAgICBydWxlczogX3ZtLnBhc3N3b3JkUnVsZXMsXG4gICAgICAgICAgY291bnRlcjogMTYwLFxuICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwidnBuX2tleVwiLFxuICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb24sXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb25cIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhcmdlOiBcIlwiLFxuICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICBsb2FkaW5nOiBfdm0uZm9ybS5idXN5LFxuICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwidXBkYXRlXCIpKSldXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMzYwZDA2MjZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTM2MGQwNjI2XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9wYXNzd29yZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwiKGZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dChyZXF1aXJlKFwiYXhpb3NcIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiYXhpb3NcIl0sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy52Zm9ybT10KHJlcXVpcmUoXCJheGlvc1wiKSk6ZS52Zm9ybT10KGUuYXhpb3MpfSkodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChuKXtpZihyW25dKXJldHVybiByW25dLmV4cG9ydHM7dmFyIG89cltuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbbl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsdCksby5sPSEwLG8uZXhwb3J0c312YXIgcj17fTtyZXR1cm4gdC5tPWUsdC5jPXIsdC5pPWZ1bmN0aW9uKGUpe3JldHVybiBlfSx0LmQ9ZnVuY3Rpb24oZSxyLG4pe3QubyhlLHIpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6bn0pfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIHI9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChyLFwiYVwiLHIpLHJ9LHQubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdC5wPVwiL1wiLHQodC5zPTE5KX0oW2Z1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyLG4pe3ZhciBvLHM9ZT1lfHx7fSxpPXR5cGVvZiBlLmRlZmF1bHQ7XCJvYmplY3RcIiE9PWkmJlwiZnVuY3Rpb25cIiE9PWl8fChvPWUscz1lLmRlZmF1bHQpO3ZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHM/cy5vcHRpb25zOnM7aWYodCYmKHUucmVuZGVyPXQucmVuZGVyLHUuc3RhdGljUmVuZGVyRm5zPXQuc3RhdGljUmVuZGVyRm5zKSxyJiYodS5fc2NvcGVJZD1yKSxuKXt2YXIgYT11LmNvbXB1dGVkfHwodS5jb21wdXRlZD17fSk7T2JqZWN0LmtleXMobikuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1uW2VdO2FbZV09ZnVuY3Rpb24oKXtyZXR1cm4gdH19KX1yZXR1cm57ZXNNb2R1bGU6byxleHBvcnRzOnMsb3B0aW9uczp1fX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmE9e3Byb3BzOntmb3JtOnt0eXBlOk9iamVjdCxyZXF1aXJlZDohMH0sZGlzbWlzc2libGU6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfX0sbWV0aG9kczp7ZGlzbWlzczpmdW5jdGlvbigpe3RoaXMuZGlzbWlzc2libGUmJnRoaXMuZm9ybS5jbGVhcigpfX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtpZihudWxsPT09ZXx8XCJvYmplY3RcIiE9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSkpKXJldHVybiBlO3ZhciB0PUFycmF5LmlzQXJyYXkoZSk/W106e307cmV0dXJuIE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24ocil7dFtyXT1uKGVbcl0pfSksdH1mdW5jdGlvbiBvKGUpe3JldHVybiBPYmplY3Qua2V5cyhlKS5zb21lKGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdaW5zdGFuY2VvZiBCbG9ifHxlW3RdaW5zdGFuY2VvZiBGaWxlTGlzdH0pfWZ1bmN0aW9uIHMoZSl7dmFyIHQ9bmV3IEZvcm1EYXRhO3JldHVybiBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKHIpe3ZhciBuPWVbcl07aWYobiBpbnN0YW5jZW9mIEZpbGVMaXN0KWZvcih2YXIgbz0wO288bi5sZW5ndGg7bysrKXQuYXBwZW5kKHIrXCJbXVwiLG4uaXRlbShvKSk7ZWxzZSB0LmFwcGVuZChyLG4pfSksdH1mdW5jdGlvbiBpKGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpP2U6W2VdfXQuYT1uLHQuYj1vLHQuYz1zLHQuZD1pO3ZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49cig5KSxvPXIoMTIpLHM9ci5uKG8pLGk9cigxMCksdT1yLm4oaSksYT1yKDExKSxjPXIubihhKSxsPXIoMTMpLGY9ci5uKGwpO3IuZCh0LFwiRm9ybVwiLGZ1bmN0aW9uKCl7cmV0dXJuIG4uYX0pLHIuZCh0LFwiSGFzRXJyb3JcIixmdW5jdGlvbigpe3JldHVybiBzLmF9KSxyLmQodCxcIkFsZXJ0RXJyb3JcIixmdW5jdGlvbigpe3JldHVybiB1LmF9KSxyLmQodCxcIkFsZXJ0RXJyb3JzXCIsZnVuY3Rpb24oKXtyZXR1cm4gYy5hfSksci5kKHQsXCJBbGVydFN1Y2Nlc3NcIixmdW5jdGlvbigpe3JldHVybiBmLmF9KSxyLmQodCxcImRlZmF1bHRcIixmdW5jdGlvbigpe3JldHVybiBuLmF9KX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPXIoMSk7dC5kZWZhdWx0PXtleHRlbmRzOm4uYSxuYW1lOlwiYWxlcnQtZXJyb3JcIixwcm9wczp7bWVzc2FnZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlRoZXJlIHdlcmUgc29tZSBwcm9ibGVtcyB3aXRoIHlvdXIgaW5wdXQuXCJ9fX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1yKDEpO3QuZGVmYXVsdD17ZXh0ZW5kczpuLmEsbmFtZTpcImFsZXJ0LWVycm9yc1wiLHByb3BzOnttZXNzYWdlOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiVGhlcmUgd2VyZSBzb21lIHByb2JsZW1zIHdpdGggeW91ciBpbnB1dC5cIn19fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZGVmYXVsdD17bmFtZTpcImhhcy1lcnJvclwiLHByb3BzOntmb3JtOnt0eXBlOk9iamVjdCxyZXF1aXJlZDohMH0sZmllbGQ6e3R5cGU6U3RyaW5nLHJlcXVpcmVkOiEwfX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49cigxKTt0LmRlZmF1bHQ9e2V4dGVuZHM6bi5hLG5hbWU6XCJhbGVydC1zdWNjZXNzXCIscHJvcHM6e21lc3NhZ2U6U3RyaW5nfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCxyKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1mdW5jdGlvbiBvKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgcz1yKDIpLGk9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9YXJndW1lbnRzW3RdO2Zvcih2YXIgbiBpbiByKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLG4pJiYoZVtuXT1yW25dKX1yZXR1cm4gZX0sdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgbj10W3JdO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLmtleSxuKX19cmV0dXJuIGZ1bmN0aW9uKHQscixuKXtyZXR1cm4gciYmZSh0LnByb3RvdHlwZSxyKSxuJiZlKHQsbiksdH19KCksYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtvKHRoaXMsZSksdGhpcy5lcnJvcnM9e319cmV0dXJuIGEoZSxbe2tleTpcInNldFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSkpP3RoaXMuZXJyb3JzPWU6dGhpcy5zZXQoaSh7fSx0aGlzLmVycm9ycyxuKHt9LGUsci5pKHMuZCkodCkpKSl9fSx7a2V5OlwiYWxsXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcnJvcnN9fSx7a2V5OlwiaGFzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGUpfX0se2tleTpcImhhc0FueVwiLHZhbHVlOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMsdD1hcmd1bWVudHMubGVuZ3RoLHI9QXJyYXkodCksbj0wO248dDtuKyspcltuXT1hcmd1bWVudHNbbl07cmV0dXJuIHIuc29tZShmdW5jdGlvbih0KXtyZXR1cm4gZS5oYXModCl9KX19LHtrZXk6XCJhbnlcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoPjB9fSx7a2V5OlwiZ2V0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYodGhpcy5oYXMoZSkpcmV0dXJuIHRoaXMuZ2V0QWxsKGUpWzBdfX0se2tleTpcImdldEFsbFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiByLmkocy5kKSh0aGlzLmVycm9yc1tlXXx8W10pfX0se2tleTpcIm9ubHlcIix2YWx1ZTpmdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLHQ9W10scj1hcmd1bWVudHMubGVuZ3RoLG49QXJyYXkociksbz0wO288cjtvKyspbltvXT1hcmd1bWVudHNbb107cmV0dXJuIG4uZm9yRWFjaChmdW5jdGlvbihyKXt2YXIgbj1lLmdldChyKTtuJiZ0LnB1c2gobil9KSx0fX0se2tleTpcImZsYXR0ZW5cIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBPYmplY3QudmFsdWVzKHRoaXMuZXJyb3JzKS5yZWR1Y2UoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5jb25jYXQodCl9LFtdKX19LHtrZXk6XCJjbGVhclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj17fTtlJiZPYmplY3Qua2V5cyh0aGlzLmVycm9ycykuZm9yRWFjaChmdW5jdGlvbihuKXtuIT09ZSYmKHJbbl09dC5lcnJvcnNbbl0pfSksdGhpcy5zZXQocil9fV0pLGV9KCk7dC5hPWN9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgbz1yKDE4KSxzPXIubihvKSxpPXIoOCksdT1yKDIpLGE9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sYz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1hcmd1bWVudHNbdF07Zm9yKHZhciBuIGluIHIpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsbikmJihlW25dPXJbbl0pfXJldHVybiBlfSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgbj10W3JdO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLmtleSxuKX19cmV0dXJuIGZ1bmN0aW9uKHQscixuKXtyZXR1cm4gciYmZSh0LnByb3RvdHlwZSxyKSxuJiZlKHQsbiksdH19KCksZj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307bih0aGlzLGUpLHRoaXMuYnVzeT0hMSx0aGlzLnN1Y2Nlc3NmdWw9ITEsdGhpcy5lcnJvcnM9bmV3IGkuYSx0aGlzLm9yaWdpbmFsRGF0YT1yLmkodS5hKSh0KSxPYmplY3QuYXNzaWduKHRoaXMsdCl9cmV0dXJuIGwoZSxbe2tleTpcImRhdGFcIix2YWx1ZTpmdW5jdGlvbiBlKCl7dmFyIHQ9dGhpcyxlPXt9O3JldHVybiB0aGlzLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uKHIpe2Vbcl09dFtyXX0pLGV9fSx7a2V5Olwia2V5c1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4hZS5pZ25vcmUuaW5jbHVkZXModCl9KX19LHtrZXk6XCJzdGFydFByb2Nlc3NpbmdcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZXJyb3JzLmNsZWFyKCksdGhpcy5idXN5PSEwLHRoaXMuc3VjY2Vzc2Z1bD0hMX19LHtrZXk6XCJmaW5pc2hQcm9jZXNzaW5nXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmJ1c3k9ITEsdGhpcy5zdWNjZXNzZnVsPSEwfX0se2tleTpcImNsZWFyXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmVycm9ycy5jbGVhcigpLHRoaXMuc3VjY2Vzc2Z1bD0hMX19LHtrZXk6XCJyZXNldFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztPYmplY3Qua2V5cyh0aGlzKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIWUuaWdub3JlLmluY2x1ZGVzKHQpfSkuZm9yRWFjaChmdW5jdGlvbihlKXt0W2VdPXIuaSh1LmEpKHQub3JpZ2luYWxEYXRhW2VdKX0pfX0se2tleTpcImdldFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnN1Ym1pdChcImdldFwiLGUpfX0se2tleTpcInBvc3RcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zdWJtaXQoXCJwb3N0XCIsZSl9fSx7a2V5OlwicGF0Y2hcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zdWJtaXQoXCJwYXRjaFwiLGUpfX0se2tleTpcInB1dFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnN1Ym1pdChcInB1dFwiLGUpfX0se2tleTpcImRlbGV0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnN1Ym1pdChcImRlbGV0ZVwiLGUpfX0se2tleTpcInN1Ym1pdFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcyxvPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTp7fTt0aGlzLnN0YXJ0UHJvY2Vzc2luZygpLHQ9dGhpcy5yb3V0ZSh0KTt2YXIgaT10aGlzLmRhdGEoKTtyZXR1cm4gci5pKHUuYikoaSkmJihpPXIuaSh1LmMpKGkpKSxcImdldFwiPT09ZSYmKGk9e3BhcmFtczppfSksbmV3IFByb21pc2UoZnVuY3Rpb24ocix1KXtzLmEucmVxdWVzdChjKHt1cmw6dCxtZXRob2Q6ZSxkYXRhOml9LG8pKS50aGVuKGZ1bmN0aW9uKGUpe24uZmluaXNoUHJvY2Vzc2luZygpLHIoZSl9KS5jYXRjaChmdW5jdGlvbihlKXtuLmJ1c3k9ITEsZS5yZXNwb25zZSYmbi5lcnJvcnMuc2V0KG4uZXh0cmFjdEVycm9ycyhlLnJlc3BvbnNlKSksdShlKX0pfSl9fSx7a2V5OlwiZXh0cmFjdEVycm9yc1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0LmRhdGEmJlwib2JqZWN0XCI9PT1hKHQuZGF0YSk/dC5kYXRhLmVycm9ycz9jKHt9LHQuZGF0YS5lcnJvcnMpOnQuZGF0YS5tZXNzYWdlP3tlcnJvcjp0LmRhdGEubWVzc2FnZX06Yyh7fSx0LmRhdGEpOntlcnJvcjplLmVycm9yTWVzc2FnZX19fSx7a2V5Olwicm91dGVcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30sbj10O3JldHVybiBlLnJvdXRlcy5oYXNPd25Qcm9wZXJ0eSh0KSYmKG49ZGVjb2RlVVJJKGUucm91dGVzW3RdKSksXCJvYmplY3RcIiE9PShcInVuZGVmaW5lZFwiPT10eXBlb2Ygcj9cInVuZGVmaW5lZFwiOmEocikpJiYocj17aWQ6cn0pLE9iamVjdC5rZXlzKHIpLmZvckVhY2goZnVuY3Rpb24oZSl7bj1uLnJlcGxhY2UoXCJ7XCIrZStcIn1cIixyW2VdKX0pLG59fSx7a2V5Olwib25LZXlkb3duXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS50YXJnZXQubmFtZSYmdGhpcy5lcnJvcnMuY2xlYXIoZS50YXJnZXQubmFtZSl9fV0pLGV9KCk7Zi5yb3V0ZXM9e30sZi5lcnJvck1lc3NhZ2U9XCJTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi5cIixmLmlnbm9yZT1bXCJidXN5XCIsXCJzdWNjZXNzZnVsXCIsXCJlcnJvcnNcIixcIm9yaWdpbmFsRGF0YVwiXSx0LmE9Zn0sZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXIoMCkocig0KSxyKDE3KSxudWxsLG51bGwpO2UuZXhwb3J0cz1uLmV4cG9ydHN9LGZ1bmN0aW9uKGUsdCxyKXt2YXIgbj1yKDApKHIoNSkscigxNSksbnVsbCxudWxsKTtlLmV4cG9ydHM9bi5leHBvcnRzfSxmdW5jdGlvbihlLHQscil7dmFyIG49cigwKShyKDYpLHIoMTQpLG51bGwsbnVsbCk7ZS5leHBvcnRzPW4uZXhwb3J0c30sZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXIoMCkocig3KSxyKDE2KSxudWxsLG51bGwpO2UuZXhwb3J0cz1uLmV4cG9ydHN9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxyPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIGUuZm9ybS5lcnJvcnMuaGFzKGUuZmllbGQpP3IoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJoZWxwLWJsb2NrIGludmFsaWQtZmVlZGJhY2tcIixkb21Qcm9wczp7aW5uZXJIVE1MOmUuX3MoZS5mb3JtLmVycm9ycy5nZXQoZS5maWVsZCkpfX0pOmUuX2UoKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LHI9ZS5fc2VsZi5fY3x8dDtyZXR1cm4gZS5mb3JtLmVycm9ycy5hbnkoKT9yKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwiYWxlcnQgYWxlcnQtZGFuZ2VyIGFsZXJ0LWRpc21pc3NpYmxlXCIsYXR0cnM6e3JvbGU6XCJhbGVydFwifX0sW2UuZGlzbWlzc2libGU/cihcImJ1dHRvblwiLHtzdGF0aWNDbGFzczpcImNsb3NlXCIsYXR0cnM6e3R5cGU6XCJidXR0b25cIixcImFyaWEtbGFiZWxcIjpcIkNsb3NlXCJ9LG9uOntjbGljazplLmRpc21pc3N9fSxbcihcInNwYW5cIix7YXR0cnM6e1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn19LFtlLl92KFwiw5dcIildKV0pOmUuX2UoKSxlLl92KFwiIFwiKSxlLm1lc3NhZ2U/cihcImRpdlwiLHtkb21Qcm9wczp7aW5uZXJIVE1MOmUuX3MoZS5tZXNzYWdlKX19KTplLl9lKCksZS5fdihcIiBcIikscihcInVsXCIsZS5fbChlLmZvcm0uZXJyb3JzLmZsYXR0ZW4oKSxmdW5jdGlvbih0KXtyZXR1cm4gcihcImxpXCIse2RvbVByb3BzOntpbm5lckhUTUw6ZS5fcyh0KX19KX0pKV0pOmUuX2UoKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LHI9ZS5fc2VsZi5fY3x8dDtyZXR1cm4gZS5mb3JtLnN1Y2Nlc3NmdWw/cihcImRpdlwiLHtzdGF0aWNDbGFzczpcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3MgYWxlcnQtZGlzbWlzc2libGVcIixhdHRyczp7cm9sZTpcImFsZXJ0XCJ9fSxbZS5kaXNtaXNzaWJsZT9yKFwiYnV0dG9uXCIse3N0YXRpY0NsYXNzOlwiY2xvc2VcIixhdHRyczp7dHlwZTpcImJ1dHRvblwiLFwiYXJpYS1sYWJlbFwiOlwiQ2xvc2VcIn0sb246e2NsaWNrOmUuZGlzbWlzc319LFtyKFwic3BhblwiLHthdHRyczp7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifX0sW2UuX3YoXCLDl1wiKV0pXSk6ZS5fZSgpLGUuX3YoXCIgXCIpLGUuX3QoXCJkZWZhdWx0XCIsW3IoXCJkaXZcIix7ZG9tUHJvcHM6e2lubmVySFRNTDplLl9zKGUubWVzc2FnZSl9fSldKV0sMik6ZS5fZSgpfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQscj1lLl9zZWxmLl9jfHx0O3JldHVybiBlLmZvcm0uZXJyb3JzLmFueSgpP3IoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJhbGVydCBhbGVydC1kYW5nZXIgYWxlcnQtZGlzbWlzc2libGVcIixhdHRyczp7cm9sZTpcImFsZXJ0XCJ9fSxbZS5kaXNtaXNzaWJsZT9yKFwiYnV0dG9uXCIse3N0YXRpY0NsYXNzOlwiY2xvc2VcIixhdHRyczp7dHlwZTpcImJ1dHRvblwiLFwiYXJpYS1sYWJlbFwiOlwiQ2xvc2VcIn0sb246e2NsaWNrOmUuZGlzbWlzc319LFtyKFwic3BhblwiLHthdHRyczp7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifX0sW2UuX3YoXCLDl1wiKV0pXSk6ZS5fZSgpLGUuX3YoXCIgXCIpLGUuZm9ybS5lcnJvcnMuaGFzKFwiZXJyb3JcIik/cihcImRpdlwiLHtkb21Qcm9wczp7aW5uZXJIVE1MOmUuX3MoZS5mb3JtLmVycm9ycy5nZXQoXCJlcnJvclwiKSl9fSk6cihcImRpdlwiLHtkb21Qcm9wczp7aW5uZXJIVE1MOmUuX3MoZS5tZXNzYWdlKX19KV0pOmUuX2UoKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24odCxyKXt0LmV4cG9ydHM9ZX0sZnVuY3Rpb24oZSx0LHIpe2UuZXhwb3J0cz1yKDMpfV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12Zm9ybS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92Zm9ybS9kaXN0L3Zmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyA1IDEwIDExIDEzIl0sInNvdXJjZVJvb3QiOiIifQ==