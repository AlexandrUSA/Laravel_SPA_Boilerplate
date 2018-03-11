webpackJsonp([10],{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(163)
/* template */
var __vue_template__ = __webpack_require__(164)
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
Component.options.__file = "resources\\assets\\js\\pages\\settings\\profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-94084972", Component.options)
  } else {
    hotAPI.reload("data-v-94084972", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(7);


var _this = this;

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




/* harmony default export */ __webpack_exports__["default"] = ({
  scrollToTop: false,

  metaInfo: function metaInfo() {
    return { title: this.$t('settings') };
  },


  data: function data() {
    return {
      valid: false,
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        name: '',
        nameRules: [function (v) {
          return !!v || _this.$t('required_value');
        }, function (v) {
          return v.length <= 70 || 'Name must be less than 70 characters';
        }],
        email: '',
        emailRules: [function (v) {
          return !!v || _this.$t('required_value');
        }, function (v) {
          return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
          );
        }]
      })
    };
  },

  computed: Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])({
    user: 'auth/user'
  }),

  created: function created() {
    var _this2 = this;

    // Fill the form with user data.
    this.form.keys().forEach(function (key) {
      _this2.form[key] = _this2.user[key];
    });
  },


  methods: {
    update: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref2, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.form.patch('/api/settings/profile');

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;


                this.$store.dispatch('auth/updateUser', { user: data });

              case 5:
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

/***/ 164:
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
          label: _vm.$t("name"),
          rules: _vm.form.nameRules,
          counter: 70,
          "prepend-icon": "person",
          required: ""
        },
        model: {
          value: _vm.form.name,
          callback: function($$v) {
            _vm.$set(_vm.form, "name", $$v)
          },
          expression: "form.name"
        }
      }),
      _vm._v(" "),
      _c("has-error", { attrs: { form: _vm.form, field: "name" } }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: _vm.$t("email"),
          rules: _vm.form.emailRules,
          "prepend-icon": "email",
          required: ""
        },
        model: {
          value: _vm.form.email,
          callback: function($$v) {
            _vm.$set(_vm.form, "email", $$v)
          },
          expression: "form.email"
        }
      }),
      _vm._v(" "),
      _c("has-error", { attrs: { form: _vm.form, field: "email" } }),
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
    require("vue-hot-reload-api")      .rerender("data-v-94084972", module.exports)
  }
}

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

(function(e,t){ true?module.exports=t(__webpack_require__(8)):"function"==typeof define&&define.amd?define(["axios"],t):"object"==typeof exports?exports.vform=t(require("axios")):e.vform=t(e.axios)})(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=19)}([function(e,t){e.exports=function(e,t,r,n){var o,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,s=e.default);var u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r),n){var a=u.computed||(u.computed={});Object.keys(n).forEach(function(e){var t=n[e];a[e]=function(){return t}})}return{esModule:o,exports:s,options:u}}},function(e,t,r){"use strict";t.a={props:{form:{type:Object,required:!0},dismissible:{type:Boolean,default:!0}},methods:{dismiss:function(){this.dismissible&&this.form.clear()}}}},function(e,t,r){"use strict";function n(e){if(null===e||"object"!==("undefined"==typeof e?"undefined":u(e)))return e;var t=Array.isArray(e)?[]:{};return Object.keys(e).forEach(function(r){t[r]=n(e[r])}),t}function o(e){return Object.keys(e).some(function(t){return e[t]instanceof Blob||e[t]instanceof FileList})}function s(e){var t=new FormData;return Object.keys(e).forEach(function(r){var n=e[r];if(n instanceof FileList)for(var o=0;o<n.length;o++)t.append(r+"[]",n.item(o));else t.append(r,n)}),t}function i(e){return Array.isArray(e)?e:[e]}t.a=n,t.b=o,t.c=s,t.d=i;var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),o=r(12),s=r.n(o),i=r(10),u=r.n(i),a=r(11),c=r.n(a),l=r(13),f=r.n(l);r.d(t,"Form",function(){return n.a}),r.d(t,"HasError",function(){return s.a}),r.d(t,"AlertError",function(){return u.a}),r.d(t,"AlertErrors",function(){return c.a}),r.d(t,"AlertSuccess",function(){return f.a}),r.d(t,"default",function(){return n.a})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default={extends:n.a,name:"alert-error",props:{message:{type:String,default:"There were some problems with your input."}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default={extends:n.a,name:"alert-errors",props:{message:{type:String,default:"There were some problems with your input."}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"has-error",props:{form:{type:Object,required:!0},field:{type:String,required:!0}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default={extends:n.a,name:"alert-success",props:{message:String}}},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=r(2),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=function(){function e(){o(this,e),this.errors={}}return a(e,[{key:"set",value:function(e,t){"object"===("undefined"==typeof e?"undefined":u(e))?this.errors=e:this.set(i({},this.errors,n({},e,r.i(s.d)(t))))}},{key:"all",value:function(){return this.errors}},{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"hasAny",value:function(){for(var e=this,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return r.some(function(t){return e.has(t)})}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.has(e))return this.getAll(e)[0]}},{key:"getAll",value:function(e){return r.i(s.d)(this.errors[e]||[])}},{key:"only",value:function(){for(var e=this,t=[],r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return n.forEach(function(r){var n=e.get(r);n&&t.push(n)}),t}},{key:"flatten",value:function(){return Object.values(this.errors).reduce(function(e,t){return e.concat(t)},[])}},{key:"clear",value:function(e){var t=this,r={};e&&Object.keys(this.errors).forEach(function(n){n!==e&&(r[n]=t.errors[n])}),this.set(r)}}]),e}();t.a=c},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=r(18),s=r.n(o),i=r(8),u=r(2),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,e),this.busy=!1,this.successful=!1,this.errors=new i.a,this.originalData=r.i(u.a)(t),Object.assign(this,t)}return l(e,[{key:"data",value:function e(){var t=this,e={};return this.keys().forEach(function(r){e[r]=t[r]}),e}},{key:"keys",value:function(){return Object.keys(this).filter(function(t){return!e.ignore.includes(t)})}},{key:"startProcessing",value:function(){this.errors.clear(),this.busy=!0,this.successful=!1}},{key:"finishProcessing",value:function(){this.busy=!1,this.successful=!0}},{key:"clear",value:function(){this.errors.clear(),this.successful=!1}},{key:"reset",value:function(){var t=this;Object.keys(this).filter(function(t){return!e.ignore.includes(t)}).forEach(function(e){t[e]=r.i(u.a)(t.originalData[e])})}},{key:"get",value:function(e){return this.submit("get",e)}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.startProcessing(),t=this.route(t);var i=this.data();return r.i(u.b)(i)&&(i=r.i(u.c)(i)),"get"===e&&(i={params:i}),new Promise(function(r,u){s.a.request(c({url:t,method:e,data:i},o)).then(function(e){n.finishProcessing(),r(e)}).catch(function(e){n.busy=!1,e.response&&n.errors.set(n.extractErrors(e.response)),u(e)})})}},{key:"extractErrors",value:function(t){return t.data&&"object"===a(t.data)?t.data.errors?c({},t.data.errors):t.data.message?{error:t.data.message}:c({},t.data):{error:e.errorMessage}}},{key:"route",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t;return e.routes.hasOwnProperty(t)&&(n=decodeURI(e.routes[t])),"object"!==("undefined"==typeof r?"undefined":a(r))&&(r={id:r}),Object.keys(r).forEach(function(e){n=n.replace("{"+e+"}",r[e])}),n}},{key:"onKeydown",value:function(e){e.target.name&&this.errors.clear(e.target.name)}}]),e}();f.routes={},f.errorMessage="Something went wrong. Please try again.",f.ignore=["busy","successful","errors","originalData"],t.a=f},function(e,t,r){var n=r(0)(r(4),r(17),null,null);e.exports=n.exports},function(e,t,r){var n=r(0)(r(5),r(15),null,null);e.exports=n.exports},function(e,t,r){var n=r(0)(r(6),r(14),null,null);e.exports=n.exports},function(e,t,r){var n=r(0)(r(7),r(16),null,null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.errors.has(e.field)?r("div",{staticClass:"help-block invalid-feedback",domProps:{innerHTML:e._s(e.form.errors.get(e.field))}}):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.errors.any()?r("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[e.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]):e._e(),e._v(" "),e.message?r("div",{domProps:{innerHTML:e._s(e.message)}}):e._e(),e._v(" "),r("ul",e._l(e.form.errors.flatten(),function(t){return r("li",{domProps:{innerHTML:e._s(t)}})}))]):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.successful?r("div",{staticClass:"alert alert-success alert-dismissible",attrs:{role:"alert"}},[e.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]):e._e(),e._v(" "),e._t("default",[r("div",{domProps:{innerHTML:e._s(e.message)}})])],2):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.form.errors.any()?r("div",{staticClass:"alert alert-danger alert-dismissible",attrs:{role:"alert"}},[e.dismissible?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]):e._e(),e._v(" "),e.form.errors.has("error")?r("div",{domProps:{innerHTML:e._s(e.form.errors.get("error"))}}):r("div",{domProps:{innerHTML:e._s(e.message)}})]):e._e()},staticRenderFns:[]}},function(t,r){t.exports=e},function(e,t,r){e.exports=r(3)}])});
//# sourceMappingURL=vform.js.map

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Byb2ZpbGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Byb2ZpbGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcHJvZmlsZS52dWU/Mzg2YiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmZvcm0vZGlzdC92Zm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBOztBQUVBO2VBR0E7O2dDQUNBOzRCQUNBO0FBRUE7Ozs7O2FBRUE7O2NBRUE7O2lDQUVBO1NBREE7bUNBR0E7O2VBQ0E7O2lDQUVBO1NBREE7MkVBTUE7OztBQWJBO0FBRkE7Ozs7VUFtQkE7QUFIQTs7O0FBSUE7O0FBQ0E7NENBQ0E7cUNBQ0E7QUFDQTtBQUVBOzs7O0FBRUE7QUFEQTs7Ozs7Ozs7dUNBR0E7Ozs7Ozs7Z0VBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeENBLEc7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNB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LG1DQUFtQyxLQUFLLGlCQUFpQixZQUFZLE9BQU8sc0JBQXNCLG9EQUFvRCxVQUFVLDJCQUEyQixtRUFBbUUsZUFBZSxVQUFVLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLGVBQWUsV0FBVyxrQkFBa0IsOENBQThDLGtDQUFrQywyREFBMkQsY0FBYyw0QkFBNEIsMkJBQTJCLG1DQUFtQyxLQUFLLGlCQUFpQixZQUFZLE9BQU8sc0JBQXNCLDBEQUEwRCxVQUFVLDJCQUEyQixlQUFlLHFCQUFxQixlQUFlLFdBQVcsa0JBQWtCLDhDQUE4QyxvQ0FBb0MsMERBQTBELGNBQWMsNEJBQTRCLDJCQUEyQixtQ0FBbUMsS0FBSyxpQkFBaUIsWUFBWSxPQUFPLHNCQUFzQixxRUFBcUUsVUFBVSw0Q0FBNEMsV0FBVyxVQUFVLDJCQUEyQixXQUFXLHFCQUFxQixlQUFlLFlBQVksaUJBQWlCLGVBQWUsR0FBRztBQUMxeVUsaUMiLCJmaWxlIjoianMvMTAuMzQxZmQzYTQ0NWI2MzU0ZDA1MWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wcm9maWxlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOTQwODQ5NzJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wcm9maWxlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXHNldHRpbmdzXFxcXHByb2ZpbGUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTk0MDg0OTcyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOTQwODQ5NzJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIiwiPHRlbXBsYXRlPlxuICA8di1mb3JtIHYtbW9kZWw9XCJ2YWxpZFwiIEBzdWJtaXQucHJldmVudD1cInVwZGF0ZVwiIEBrZXlkb3duPVwiZm9ybS5vbktleWRvd24oJGV2ZW50KVwiPlxuICAgIDx2LXRleHQtZmllbGRcbiAgICAgIDpsYWJlbD1cIiR0KCduYW1lJylcIlxuICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZVwiXG4gICAgICA6cnVsZXM9XCJmb3JtLm5hbWVSdWxlc1wiXG4gICAgICA6Y291bnRlcj1cIjcwXCJcbiAgICAgIHByZXBlbmQtaWNvbj1cInBlcnNvblwiXG4gICAgICByZXF1aXJlZFxuICAgID48L3YtdGV4dC1maWVsZD5cbiAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwibmFtZVwiLz5cbiAgICA8di10ZXh0LWZpZWxkXG4gICAgICA6bGFiZWw9XCIkdCgnZW1haWwnKVwiXG4gICAgICB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiXG4gICAgICA6cnVsZXM9XCJmb3JtLmVtYWlsUnVsZXNcIlxuICAgICAgcHJlcGVuZC1pY29uPVwiZW1haWxcIlxuICAgICAgcmVxdWlyZWRcbiAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImVtYWlsXCIgLz5cbiAgICA8di1idG4gbGFyZ2UgYmxvY2sgOmxvYWRpbmc9XCJmb3JtLmJ1c3lcIiB0eXBlPVwic3VibWl0XCI+e3sgJHQoJ3VwZGF0ZScpIH19PC92LWJ0bj5cbiAgPC92LWZvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzY3JvbGxUb1RvcDogZmFsc2UsXG5cbiAgbWV0YUluZm8gKCkge1xuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdzZXR0aW5ncycpIH1cbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHZhbGlkOiBmYWxzZSxcbiAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIG5hbWVSdWxlczogW1xuICAgICAgICB2ID0+ICEhdiB8fCB0aGlzLiR0KCdyZXF1aXJlZF92YWx1ZScpLFxuICAgICAgICB2ID0+IHYubGVuZ3RoIDw9IDcwIHx8ICdOYW1lIG11c3QgYmUgbGVzcyB0aGFuIDcwIGNoYXJhY3RlcnMnXG4gICAgICBdLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgZW1haWxSdWxlczogW1xuICAgICAgICB2ID0+ICEhdiB8fCB0aGlzLiR0KCdyZXF1aXJlZF92YWx1ZScpLFxuICAgICAgICB2ID0+IC9eXFx3KyhbLi1dP1xcdyspKkBcXHcrKFsuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLy50ZXN0KHYpIHx8ICdFLW1haWwgbXVzdCBiZSB2YWxpZCdcbiAgICAgIF1cbiAgICB9KVxuICB9KSxcblxuICBjb21wdXRlZDogbWFwR2V0dGVycyh7XG4gICAgdXNlcjogJ2F1dGgvdXNlcidcbiAgfSksXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgLy8gRmlsbCB0aGUgZm9ybSB3aXRoIHVzZXIgZGF0YS5cbiAgICB0aGlzLmZvcm0ua2V5cygpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMuZm9ybVtrZXldID0gdGhpcy51c2VyW2tleV1cbiAgICB9KVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyB1cGRhdGUgKCkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmZvcm0ucGF0Y2goJy9hcGkvc2V0dGluZ3MvcHJvZmlsZScpXG5cbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3VwZGF0ZVVzZXInLCB7IHVzZXI6IGRhdGEgfSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcHJvZmlsZS52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1mb3JtXCIsXG4gICAge1xuICAgICAgb246IHtcbiAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIF92bS51cGRhdGUoJGV2ZW50KVxuICAgICAgICB9LFxuICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZm9ybS5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbW9kZWw6IHtcbiAgICAgICAgdmFsdWU6IF92bS52YWxpZCxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgIF92bS52YWxpZCA9ICQkdlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiBcInZhbGlkXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwibmFtZVwiKSxcbiAgICAgICAgICBydWxlczogX3ZtLmZvcm0ubmFtZVJ1bGVzLFxuICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwicGVyc29uXCIsXG4gICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoYXMtZXJyb3JcIiwgeyBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwibmFtZVwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJlbWFpbFwiKSxcbiAgICAgICAgICBydWxlczogX3ZtLmZvcm0uZW1haWxSdWxlcyxcbiAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImVtYWlsXCIsXG4gICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW1haWwsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW1haWxcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmVtYWlsXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoYXMtZXJyb3JcIiwgeyBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiZW1haWxcIiB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgIGxvYWRpbmc6IF92bS5mb3JtLmJ1c3ksXG4gICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ1cGRhdGVcIikpKV1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi05NDA4NDk3MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtOTQwODQ5NzJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Byb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIihmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQocmVxdWlyZShcImF4aW9zXCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImF4aW9zXCJdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMudmZvcm09dChyZXF1aXJlKFwiYXhpb3NcIikpOmUudmZvcm09dChlLmF4aW9zKX0pKHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQobil7aWYocltuXSlyZXR1cm4gcltuXS5leHBvcnRzO3ZhciBvPXJbbl09e2k6bixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW25dLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLHQpLG8ubD0hMCxvLmV4cG9ydHN9dmFyIHI9e307cmV0dXJuIHQubT1lLHQuYz1yLHQuaT1mdW5jdGlvbihlKXtyZXR1cm4gZX0sdC5kPWZ1bmN0aW9uKGUscixuKXt0Lm8oZSxyKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUscix7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0Om59KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciByPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQocixcImFcIixyKSxyfSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIi9cIix0KHQucz0xOSl9KFtmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlLHQscixuKXt2YXIgbyxzPWU9ZXx8e30saT10eXBlb2YgZS5kZWZhdWx0O1wib2JqZWN0XCIhPT1pJiZcImZ1bmN0aW9uXCIhPT1pfHwobz1lLHM9ZS5kZWZhdWx0KTt2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzP3Mub3B0aW9uczpzO2lmKHQmJih1LnJlbmRlcj10LnJlbmRlcix1LnN0YXRpY1JlbmRlckZucz10LnN0YXRpY1JlbmRlckZucyksciYmKHUuX3Njb3BlSWQ9ciksbil7dmFyIGE9dS5jb21wdXRlZHx8KHUuY29tcHV0ZWQ9e30pO09iamVjdC5rZXlzKG4pLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9bltlXTthW2VdPWZ1bmN0aW9uKCl7cmV0dXJuIHR9fSl9cmV0dXJue2VzTW9kdWxlOm8sZXhwb3J0czpzLG9wdGlvbnM6dX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5hPXtwcm9wczp7Zm9ybTp7dHlwZTpPYmplY3QscmVxdWlyZWQ6ITB9LGRpc21pc3NpYmxlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH19LG1ldGhvZHM6e2Rpc21pc3M6ZnVuY3Rpb24oKXt0aGlzLmRpc21pc3NpYmxlJiZ0aGlzLmZvcm0uY2xlYXIoKX19fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7aWYobnVsbD09PWV8fFwib2JqZWN0XCIhPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpKSlyZXR1cm4gZTt2YXIgdD1BcnJheS5pc0FycmF5KGUpP1tdOnt9O3JldHVybiBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKHIpe3Rbcl09bihlW3JdKX0pLHR9ZnVuY3Rpb24gbyhlKXtyZXR1cm4gT2JqZWN0LmtleXMoZSkuc29tZShmdW5jdGlvbih0KXtyZXR1cm4gZVt0XWluc3RhbmNlb2YgQmxvYnx8ZVt0XWluc3RhbmNlb2YgRmlsZUxpc3R9KX1mdW5jdGlvbiBzKGUpe3ZhciB0PW5ldyBGb3JtRGF0YTtyZXR1cm4gT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihyKXt2YXIgbj1lW3JdO2lmKG4gaW5zdGFuY2VvZiBGaWxlTGlzdClmb3IodmFyIG89MDtvPG4ubGVuZ3RoO28rKyl0LmFwcGVuZChyK1wiW11cIixuLml0ZW0obykpO2Vsc2UgdC5hcHBlbmQocixuKX0pLHR9ZnVuY3Rpb24gaShlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9lOltlXX10LmE9bix0LmI9byx0LmM9cyx0LmQ9aTt2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPXIoOSksbz1yKDEyKSxzPXIubihvKSxpPXIoMTApLHU9ci5uKGkpLGE9cigxMSksYz1yLm4oYSksbD1yKDEzKSxmPXIubihsKTtyLmQodCxcIkZvcm1cIixmdW5jdGlvbigpe3JldHVybiBuLmF9KSxyLmQodCxcIkhhc0Vycm9yXCIsZnVuY3Rpb24oKXtyZXR1cm4gcy5hfSksci5kKHQsXCJBbGVydEVycm9yXCIsZnVuY3Rpb24oKXtyZXR1cm4gdS5hfSksci5kKHQsXCJBbGVydEVycm9yc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIGMuYX0pLHIuZCh0LFwiQWxlcnRTdWNjZXNzXCIsZnVuY3Rpb24oKXtyZXR1cm4gZi5hfSksci5kKHQsXCJkZWZhdWx0XCIsZnVuY3Rpb24oKXtyZXR1cm4gbi5hfSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1yKDEpO3QuZGVmYXVsdD17ZXh0ZW5kczpuLmEsbmFtZTpcImFsZXJ0LWVycm9yXCIscHJvcHM6e21lc3NhZ2U6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJUaGVyZSB3ZXJlIHNvbWUgcHJvYmxlbXMgd2l0aCB5b3VyIGlucHV0LlwifX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49cigxKTt0LmRlZmF1bHQ9e2V4dGVuZHM6bi5hLG5hbWU6XCJhbGVydC1lcnJvcnNcIixwcm9wczp7bWVzc2FnZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlRoZXJlIHdlcmUgc29tZSBwcm9ibGVtcyB3aXRoIHlvdXIgaW5wdXQuXCJ9fX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZmF1bHQ9e25hbWU6XCJoYXMtZXJyb3JcIixwcm9wczp7Zm9ybTp7dHlwZTpPYmplY3QscmVxdWlyZWQ6ITB9LGZpZWxkOnt0eXBlOlN0cmluZyxyZXF1aXJlZDohMH19fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPXIoMSk7dC5kZWZhdWx0PXtleHRlbmRzOm4uYSxuYW1lOlwiYWxlcnQtc3VjY2Vzc1wiLHByb3BzOnttZXNzYWdlOlN0cmluZ319fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQscil7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9ZnVuY3Rpb24gbyhlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIHM9cigyKSxpPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPWFyZ3VtZW50c1t0XTtmb3IodmFyIG4gaW4gcilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixuKSYmKGVbbl09cltuXSl9cmV0dXJuIGV9LHU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIG49dFtyXTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBuJiYobi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbi5rZXksbil9fXJldHVybiBmdW5jdGlvbih0LHIsbil7cmV0dXJuIHImJmUodC5wcm90b3R5cGUsciksbiYmZSh0LG4pLHR9fSgpLGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7byh0aGlzLGUpLHRoaXMuZXJyb3JzPXt9fXJldHVybiBhKGUsW3trZXk6XCJzZXRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpKT90aGlzLmVycm9ycz1lOnRoaXMuc2V0KGkoe30sdGhpcy5lcnJvcnMsbih7fSxlLHIuaShzLmQpKHQpKSkpfX0se2tleTpcImFsbFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXJyb3JzfX0se2tleTpcImhhc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShlKX19LHtrZXk6XCJoYXNBbnlcIix2YWx1ZTpmdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLHQ9YXJndW1lbnRzLmxlbmd0aCxyPUFycmF5KHQpLG49MDtuPHQ7bisrKXJbbl09YXJndW1lbnRzW25dO3JldHVybiByLnNvbWUoZnVuY3Rpb24odCl7cmV0dXJuIGUuaGFzKHQpfSl9fSx7a2V5OlwiYW55XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aD4wfX0se2tleTpcImdldFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKHRoaXMuaGFzKGUpKXJldHVybiB0aGlzLmdldEFsbChlKVswXX19LHtrZXk6XCJnZXRBbGxcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gci5pKHMuZCkodGhpcy5lcnJvcnNbZV18fFtdKX19LHtrZXk6XCJvbmx5XCIsdmFsdWU6ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyx0PVtdLHI9YXJndW1lbnRzLmxlbmd0aCxuPUFycmF5KHIpLG89MDtvPHI7bysrKW5bb109YXJndW1lbnRzW29dO3JldHVybiBuLmZvckVhY2goZnVuY3Rpb24ocil7dmFyIG49ZS5nZXQocik7biYmdC5wdXNoKG4pfSksdH19LHtrZXk6XCJmbGF0dGVuXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmVycm9ycykucmVkdWNlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuY29uY2F0KHQpfSxbXSl9fSx7a2V5OlwiY2xlYXJcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9e307ZSYmT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmZvckVhY2goZnVuY3Rpb24obil7biE9PWUmJihyW25dPXQuZXJyb3JzW25dKX0pLHRoaXMuc2V0KHIpfX1dKSxlfSgpO3QuYT1jfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIG89cigxOCkscz1yLm4obyksaT1yKDgpLHU9cigyKSxhPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LGM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9YXJndW1lbnRzW3RdO2Zvcih2YXIgbiBpbiByKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLG4pJiYoZVtuXT1yW25dKX1yZXR1cm4gZX0sbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIG49dFtyXTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBuJiYobi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbi5rZXksbil9fXJldHVybiBmdW5jdGlvbih0LHIsbil7cmV0dXJuIHImJmUodC5wcm90b3R5cGUsciksbiYmZSh0LG4pLHR9fSgpLGY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O24odGhpcyxlKSx0aGlzLmJ1c3k9ITEsdGhpcy5zdWNjZXNzZnVsPSExLHRoaXMuZXJyb3JzPW5ldyBpLmEsdGhpcy5vcmlnaW5hbERhdGE9ci5pKHUuYSkodCksT2JqZWN0LmFzc2lnbih0aGlzLHQpfXJldHVybiBsKGUsW3trZXk6XCJkYXRhXCIsdmFsdWU6ZnVuY3Rpb24gZSgpe3ZhciB0PXRoaXMsZT17fTtyZXR1cm4gdGhpcy5rZXlzKCkuZm9yRWFjaChmdW5jdGlvbihyKXtlW3JdPXRbcl19KSxlfX0se2tleTpcImtleXNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyh0aGlzKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIWUuaWdub3JlLmluY2x1ZGVzKHQpfSl9fSx7a2V5Olwic3RhcnRQcm9jZXNzaW5nXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmVycm9ycy5jbGVhcigpLHRoaXMuYnVzeT0hMCx0aGlzLnN1Y2Nlc3NmdWw9ITF9fSx7a2V5OlwiZmluaXNoUHJvY2Vzc2luZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5idXN5PSExLHRoaXMuc3VjY2Vzc2Z1bD0hMH19LHtrZXk6XCJjbGVhclwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5lcnJvcnMuY2xlYXIoKSx0aGlzLnN1Y2Nlc3NmdWw9ITF9fSx7a2V5OlwicmVzZXRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7T2JqZWN0LmtleXModGhpcykuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiFlLmlnbm9yZS5pbmNsdWRlcyh0KX0pLmZvckVhY2goZnVuY3Rpb24oZSl7dFtlXT1yLmkodS5hKSh0Lm9yaWdpbmFsRGF0YVtlXSl9KX19LHtrZXk6XCJnZXRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zdWJtaXQoXCJnZXRcIixlKX19LHtrZXk6XCJwb3N0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc3VibWl0KFwicG9zdFwiLGUpfX0se2tleTpcInBhdGNoXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc3VibWl0KFwicGF0Y2hcIixlKX19LHtrZXk6XCJwdXRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zdWJtaXQoXCJwdXRcIixlKX19LHtrZXk6XCJkZWxldGVcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zdWJtaXQoXCJkZWxldGVcIixlKX19LHtrZXk6XCJzdWJtaXRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMsbz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06e307dGhpcy5zdGFydFByb2Nlc3NpbmcoKSx0PXRoaXMucm91dGUodCk7dmFyIGk9dGhpcy5kYXRhKCk7cmV0dXJuIHIuaSh1LmIpKGkpJiYoaT1yLmkodS5jKShpKSksXCJnZXRcIj09PWUmJihpPXtwYXJhbXM6aX0pLG5ldyBQcm9taXNlKGZ1bmN0aW9uKHIsdSl7cy5hLnJlcXVlc3QoYyh7dXJsOnQsbWV0aG9kOmUsZGF0YTppfSxvKSkudGhlbihmdW5jdGlvbihlKXtuLmZpbmlzaFByb2Nlc3NpbmcoKSxyKGUpfSkuY2F0Y2goZnVuY3Rpb24oZSl7bi5idXN5PSExLGUucmVzcG9uc2UmJm4uZXJyb3JzLnNldChuLmV4dHJhY3RFcnJvcnMoZS5yZXNwb25zZSkpLHUoZSl9KX0pfX0se2tleTpcImV4dHJhY3RFcnJvcnNcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdC5kYXRhJiZcIm9iamVjdFwiPT09YSh0LmRhdGEpP3QuZGF0YS5lcnJvcnM/Yyh7fSx0LmRhdGEuZXJyb3JzKTp0LmRhdGEubWVzc2FnZT97ZXJyb3I6dC5kYXRhLm1lc3NhZ2V9OmMoe30sdC5kYXRhKTp7ZXJyb3I6ZS5lcnJvck1lc3NhZ2V9fX0se2tleTpcInJvdXRlXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LG49dDtyZXR1cm4gZS5yb3V0ZXMuaGFzT3duUHJvcGVydHkodCkmJihuPWRlY29kZVVSSShlLnJvdXRlc1t0XSkpLFwib2JqZWN0XCIhPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHI/XCJ1bmRlZmluZWRcIjphKHIpKSYmKHI9e2lkOnJ9KSxPYmplY3Qua2V5cyhyKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe249bi5yZXBsYWNlKFwie1wiK2UrXCJ9XCIscltlXSl9KSxufX0se2tleTpcIm9uS2V5ZG93blwiLHZhbHVlOmZ1bmN0aW9uKGUpe2UudGFyZ2V0Lm5hbWUmJnRoaXMuZXJyb3JzLmNsZWFyKGUudGFyZ2V0Lm5hbWUpfX1dKSxlfSgpO2Yucm91dGVzPXt9LGYuZXJyb3JNZXNzYWdlPVwiU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uXCIsZi5pZ25vcmU9W1wiYnVzeVwiLFwic3VjY2Vzc2Z1bFwiLFwiZXJyb3JzXCIsXCJvcmlnaW5hbERhdGFcIl0sdC5hPWZ9LGZ1bmN0aW9uKGUsdCxyKXt2YXIgbj1yKDApKHIoNCkscigxNyksbnVsbCxudWxsKTtlLmV4cG9ydHM9bi5leHBvcnRzfSxmdW5jdGlvbihlLHQscil7dmFyIG49cigwKShyKDUpLHIoMTUpLG51bGwsbnVsbCk7ZS5leHBvcnRzPW4uZXhwb3J0c30sZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXIoMCkocig2KSxyKDE0KSxudWxsLG51bGwpO2UuZXhwb3J0cz1uLmV4cG9ydHN9LGZ1bmN0aW9uKGUsdCxyKXt2YXIgbj1yKDApKHIoNykscigxNiksbnVsbCxudWxsKTtlLmV4cG9ydHM9bi5leHBvcnRzfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQscj1lLl9zZWxmLl9jfHx0O3JldHVybiBlLmZvcm0uZXJyb3JzLmhhcyhlLmZpZWxkKT9yKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwiaGVscC1ibG9jayBpbnZhbGlkLWZlZWRiYWNrXCIsZG9tUHJvcHM6e2lubmVySFRNTDplLl9zKGUuZm9ybS5lcnJvcnMuZ2V0KGUuZmllbGQpKX19KTplLl9lKCl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxyPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIGUuZm9ybS5lcnJvcnMuYW55KCk/cihcImRpdlwiLHtzdGF0aWNDbGFzczpcImFsZXJ0IGFsZXJ0LWRhbmdlciBhbGVydC1kaXNtaXNzaWJsZVwiLGF0dHJzOntyb2xlOlwiYWxlcnRcIn19LFtlLmRpc21pc3NpYmxlP3IoXCJidXR0b25cIix7c3RhdGljQ2xhc3M6XCJjbG9zZVwiLGF0dHJzOnt0eXBlOlwiYnV0dG9uXCIsXCJhcmlhLWxhYmVsXCI6XCJDbG9zZVwifSxvbjp7Y2xpY2s6ZS5kaXNtaXNzfX0sW3IoXCJzcGFuXCIse2F0dHJzOntcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9fSxbZS5fdihcIsOXXCIpXSldKTplLl9lKCksZS5fdihcIiBcIiksZS5tZXNzYWdlP3IoXCJkaXZcIix7ZG9tUHJvcHM6e2lubmVySFRNTDplLl9zKGUubWVzc2FnZSl9fSk6ZS5fZSgpLGUuX3YoXCIgXCIpLHIoXCJ1bFwiLGUuX2woZS5mb3JtLmVycm9ycy5mbGF0dGVuKCksZnVuY3Rpb24odCl7cmV0dXJuIHIoXCJsaVwiLHtkb21Qcm9wczp7aW5uZXJIVE1MOmUuX3ModCl9fSl9KSldKTplLl9lKCl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxyPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIGUuZm9ybS5zdWNjZXNzZnVsP3IoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJhbGVydCBhbGVydC1zdWNjZXNzIGFsZXJ0LWRpc21pc3NpYmxlXCIsYXR0cnM6e3JvbGU6XCJhbGVydFwifX0sW2UuZGlzbWlzc2libGU/cihcImJ1dHRvblwiLHtzdGF0aWNDbGFzczpcImNsb3NlXCIsYXR0cnM6e3R5cGU6XCJidXR0b25cIixcImFyaWEtbGFiZWxcIjpcIkNsb3NlXCJ9LG9uOntjbGljazplLmRpc21pc3N9fSxbcihcInNwYW5cIix7YXR0cnM6e1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn19LFtlLl92KFwiw5dcIildKV0pOmUuX2UoKSxlLl92KFwiIFwiKSxlLl90KFwiZGVmYXVsdFwiLFtyKFwiZGl2XCIse2RvbVByb3BzOntpbm5lckhUTUw6ZS5fcyhlLm1lc3NhZ2UpfX0pXSldLDIpOmUuX2UoKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LHI9ZS5fc2VsZi5fY3x8dDtyZXR1cm4gZS5mb3JtLmVycm9ycy5hbnkoKT9yKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwiYWxlcnQgYWxlcnQtZGFuZ2VyIGFsZXJ0LWRpc21pc3NpYmxlXCIsYXR0cnM6e3JvbGU6XCJhbGVydFwifX0sW2UuZGlzbWlzc2libGU/cihcImJ1dHRvblwiLHtzdGF0aWNDbGFzczpcImNsb3NlXCIsYXR0cnM6e3R5cGU6XCJidXR0b25cIixcImFyaWEtbGFiZWxcIjpcIkNsb3NlXCJ9LG9uOntjbGljazplLmRpc21pc3N9fSxbcihcInNwYW5cIix7YXR0cnM6e1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn19LFtlLl92KFwiw5dcIildKV0pOmUuX2UoKSxlLl92KFwiIFwiKSxlLmZvcm0uZXJyb3JzLmhhcyhcImVycm9yXCIpP3IoXCJkaXZcIix7ZG9tUHJvcHM6e2lubmVySFRNTDplLl9zKGUuZm9ybS5lcnJvcnMuZ2V0KFwiZXJyb3JcIikpfX0pOnIoXCJkaXZcIix7ZG9tUHJvcHM6e2lubmVySFRNTDplLl9zKGUubWVzc2FnZSl9fSldKTplLl9lKCl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKHQscil7dC5leHBvcnRzPWV9LGZ1bmN0aW9uKGUsdCxyKXtlLmV4cG9ydHM9cigzKX1dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmZvcm0uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdmZvcm0vZGlzdC92Zm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMgNSAxMCAxMSAxMyJdLCJzb3VyY2VSb290IjoiIn0=