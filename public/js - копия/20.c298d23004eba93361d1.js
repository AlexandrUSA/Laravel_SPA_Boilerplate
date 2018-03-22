webpackJsonp([20],{

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(177)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(179)
/* template */
var __vue_template__ = __webpack_require__(180)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-62a23670"
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
Component.options.__file = "resources\\assets\\js\\pages\\auth\\password\\email.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62a23670", Component.options)
  } else {
    hotAPI.reload("data-v-62a23670", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(178);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5ff0cb60", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62a23670\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./email.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62a23670\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./email.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.card[data-v-62a23670] {\n  width: 100%;\n  max-width: 800px;\n  margin: 50px auto;\n  padding: 30px;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/auth/password/resources/assets/js/pages/auth/password/email.vue"],"names":[],"mappings":";AAmFA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;CACA","file":"email.vue","sourcesContent":["<template>\n  <v-card>\n    <v-card-title primary-title>\n      <h2>\n        {{ $t('reset_password') }}\n      </h2>\n    </v-card-title>\n    <v-form @submit.prevent=\"send\" @keydown=\"form.onKeydown($event)\">\n      <v-text-field\n        :label=\"$t('email')\"\n        v-model=\"form.email\"\n        prepend-icon=\"email\"\n        required\n      ></v-text-field>\n      <has-error :form=\"form\" field=\"email\" />\n      <v-btn large block :loading=\"form.busy\" type=\"submit\">\n        {{ $t('send_password_reset_link') }}\n      </v-btn>\n    </v-form>\n  </v-card>\n  \n\n<!--   <div class=\"row\">\n    <div class=\"col-lg-8 m-auto\">\n      <card :title=\"$t('reset_password')\">\n        <form @submit.prevent=\"send\" @keydown=\"form.onKeydown($event)\">\n          <alert-success :form=\"form\" :message=\"status\"/>\n\n\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label text-md-right\">{{ $t('email') }}</label>\n            <div class=\"col-md-7\">\n              <input v-model=\"form.email\" type=\"email\" name=\"email\" class=\"form-control\"\n                :class=\"{ 'is-invalid': form.errors.has('email') }\">\n              <has-error :form=\"form\" field=\"email\"/>\n            </div>\n          </div>\n\n\n          <div class=\"form-group row\">\n            <div class=\"col-md-9 ml-md-auto\">\n              <v-button :loading=\"form.busy\">\n                {{ $t('send_password_reset_link') }}\n              </v-button>\n            </div>\n          </div>\n        </form>\n      </card>\n    </div>\n  </div> -->\n</template>\n\n<script>\nimport Form from 'vform'\n\nexport default {\n  middleware: 'guest',\n\n  metaInfo () {\n    return { title: this.$t('reset_password') }\n  },\n\n  data: () => ({\n    status: '',\n    form: new Form({\n      email: ''\n    })\n  }),\n\n  methods: {\n\n\n    async send () {\n      const { data } = await this.form.post('/api/password/email')\n      console.log(data)\n      this.status = data.status\n\n      this.form.reset()\n    }\n  }\n}\n</script>\n\n<style scoped>\n  .card {\n    width: 100%;\n    max-width: 800px;\n    margin: 50px auto;\n    padding: 30px;\n  }\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(24);
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
  middleware: 'guest',

  metaInfo: function metaInfo() {
    return { title: this.$t('reset_password') };
  },


  data: function data() {
    return {
      status: '',
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        email: ''
      })
    };
  },

  methods: {
    send: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref2, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.form.post('/api/password/email');

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;

                console.log(data);
                this.status = data.status;

                this.form.reset();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function send() {
        return _ref.apply(this, arguments);
      }

      return send;
    }()
  }
});

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c("v-card-title", { attrs: { "primary-title": "" } }, [
        _c("h2", [
          _vm._v("\n        " + _vm._s(_vm.$t("reset_password")) + "\n      ")
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.send($event)
            },
            keydown: function($event) {
              _vm.form.onKeydown($event)
            }
          }
        },
        [
          _c("v-text-field", {
            attrs: {
              label: _vm.$t("email"),
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
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.$t("send_password_reset_link")) +
                  "\n      "
              )
            ]
          )
        ],
        1
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
    require("vue-hot-reload-api")      .rerender("data-v-62a23670", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcGFzc3dvcmQvZW1haWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9wYXNzd29yZC9lbWFpbC52dWU/OTUzNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcGFzc3dvcmQvZW1haWwudnVlP2U1MmEiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9wYXNzd29yZC9lbWFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL3Bhc3N3b3JkL2VtYWlsLnZ1ZT8xMThlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXdNO0FBQ3hNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFxTDtBQUNyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQThPO0FBQzlPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SkFBNEosaUZBQWlGO0FBQzdPLHFLQUFxSyxpRkFBaUY7QUFDdFA7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EsbURBQW9ELGdCQUFnQixxQkFBcUIsc0JBQXNCLGtCQUFrQixHQUFHLFVBQVUsbUtBQW1LLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSw0SEFBNEgsd0JBQXdCLDhZQUE4WSxrQ0FBa0Msa2FBQWthLGVBQWUsNEtBQTRLLHlDQUF5Qyx3UUFBd1Esa0NBQWtDLGtNQUFrTSwyQ0FBMkMsY0FBYyxtQ0FBbUMsS0FBSyxxQkFBcUIsdUNBQXVDLHdCQUF3QixNQUFNLGtCQUFrQix5QkFBeUIsZUFBZSxPQUFPLDBJQUEwSSxLQUFLLEdBQUcsd0NBQXdDLGtCQUFrQix1QkFBdUIsd0JBQXdCLG9CQUFvQixLQUFLLDZCQUE2Qjs7QUFFcGtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzZDQTs7QUFFQTtjQUdBOztnQ0FDQTs0QkFDQTtBQUVBOzs7OztjQUVBOztlQUtBO0FBSkE7QUFGQTs7OztBQVVBO0FBREE7Ozs7Ozs7O3NDQUVBOzs7Ozs7NEJBQ0E7bUNBRUE7OzBCQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQXhCQSxHOzs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVMsc0JBQXNCLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsMkJBQTJCLFNBQVMsaUNBQWlDLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8yMC5jMjk4ZDIzMDA0ZWJhOTMzNjFkMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjJhMjM2NzBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9lbWFpbC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZW1haWwudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02MmEyMzY3MFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZW1haWwudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi02MmEyMzY3MFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGF1dGhcXFxccGFzc3dvcmRcXFxcZW1haWwudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTYyYTIzNjcwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjJhMjM2NzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9wYXNzd29yZC9lbWFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTYyYTIzNjcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZW1haWwudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1ZmYwY2I2MFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02MmEyMzY3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2VtYWlsLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02MmEyMzY3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2VtYWlsLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02MmEyMzY3MFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcGFzc3dvcmQvZW1haWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAyMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY2FyZFtkYXRhLXYtNjJhMjM2NzBdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL3Bhc3N3b3JkL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9wYXNzd29yZC9lbWFpbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW1GQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJlbWFpbC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPHYtY2FyZD5cXG4gICAgPHYtY2FyZC10aXRsZSBwcmltYXJ5LXRpdGxlPlxcbiAgICAgIDxoMj5cXG4gICAgICAgIHt7ICR0KCdyZXNldF9wYXNzd29yZCcpIH19XFxuICAgICAgPC9oMj5cXG4gICAgPC92LWNhcmQtdGl0bGU+XFxuICAgIDx2LWZvcm0gQHN1Ym1pdC5wcmV2ZW50PVxcXCJzZW5kXFxcIiBAa2V5ZG93bj1cXFwiZm9ybS5vbktleWRvd24oJGV2ZW50KVxcXCI+XFxuICAgICAgPHYtdGV4dC1maWVsZFxcbiAgICAgICAgOmxhYmVsPVxcXCIkdCgnZW1haWwnKVxcXCJcXG4gICAgICAgIHYtbW9kZWw9XFxcImZvcm0uZW1haWxcXFwiXFxuICAgICAgICBwcmVwZW5kLWljb249XFxcImVtYWlsXFxcIlxcbiAgICAgICAgcmVxdWlyZWRcXG4gICAgICA+PC92LXRleHQtZmllbGQ+XFxuICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cXFwiZm9ybVxcXCIgZmllbGQ9XFxcImVtYWlsXFxcIiAvPlxcbiAgICAgIDx2LWJ0biBsYXJnZSBibG9jayA6bG9hZGluZz1cXFwiZm9ybS5idXN5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPlxcbiAgICAgICAge3sgJHQoJ3NlbmRfcGFzc3dvcmRfcmVzZXRfbGluaycpIH19XFxuICAgICAgPC92LWJ0bj5cXG4gICAgPC92LWZvcm0+XFxuICA8L3YtY2FyZD5cXG4gIFxcblxcbjwhLS0gICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctOCBtLWF1dG9cXFwiPlxcbiAgICAgIDxjYXJkIDp0aXRsZT1cXFwiJHQoJ3Jlc2V0X3Bhc3N3b3JkJylcXFwiPlxcbiAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVxcXCJzZW5kXFxcIiBAa2V5ZG93bj1cXFwiZm9ybS5vbktleWRvd24oJGV2ZW50KVxcXCI+XFxuICAgICAgICAgIDxhbGVydC1zdWNjZXNzIDpmb3JtPVxcXCJmb3JtXFxcIiA6bWVzc2FnZT1cXFwic3RhdHVzXFxcIi8+XFxuXFxuXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgcm93XFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcXFwiPnt7ICR0KCdlbWFpbCcpIH19PC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtN1xcXCI+XFxuICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiZm9ybS5lbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ2VtYWlsJykgfVxcXCI+XFxuICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVxcXCJmb3JtXFxcIiBmaWVsZD1cXFwiZW1haWxcXFwiLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgcm93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOSBtbC1tZC1hdXRvXFxcIj5cXG4gICAgICAgICAgICAgIDx2LWJ1dHRvbiA6bG9hZGluZz1cXFwiZm9ybS5idXN5XFxcIj5cXG4gICAgICAgICAgICAgICAge3sgJHQoJ3NlbmRfcGFzc3dvcmRfcmVzZXRfbGluaycpIH19XFxuICAgICAgICAgICAgICA8L3YtYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZm9ybT5cXG4gICAgICA8L2NhcmQ+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+IC0tPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBtaWRkbGV3YXJlOiAnZ3Vlc3QnLFxcblxcbiAgbWV0YUluZm8gKCkge1xcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgncmVzZXRfcGFzc3dvcmQnKSB9XFxuICB9LFxcblxcbiAgZGF0YTogKCkgPT4gKHtcXG4gICAgc3RhdHVzOiAnJyxcXG4gICAgZm9ybTogbmV3IEZvcm0oe1xcbiAgICAgIGVtYWlsOiAnJ1xcbiAgICB9KVxcbiAgfSksXFxuXFxuICBtZXRob2RzOiB7XFxuXFxuXFxuICAgIGFzeW5jIHNlbmQgKCkge1xcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJy9hcGkvcGFzc3dvcmQvZW1haWwnKVxcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXFxuICAgICAgdGhpcy5zdGF0dXMgPSBkYXRhLnN0YXR1c1xcblxcbiAgICAgIHRoaXMuZm9ybS5yZXNldCgpXFxuICAgIH1cXG4gIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4gIC5jYXJkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTYyYTIzNjcwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9wYXNzd29yZC9lbWFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIwIiwiPHRlbXBsYXRlPlxuICA8di1jYXJkPlxuICAgIDx2LWNhcmQtdGl0bGUgcHJpbWFyeS10aXRsZT5cbiAgICAgIDxoMj5cbiAgICAgICAge3sgJHQoJ3Jlc2V0X3Bhc3N3b3JkJykgfX1cbiAgICAgIDwvaDI+XG4gICAgPC92LWNhcmQtdGl0bGU+XG4gICAgPHYtZm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzZW5kXCIgQGtleWRvd249XCJmb3JtLm9uS2V5ZG93bigkZXZlbnQpXCI+XG4gICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgIDpsYWJlbD1cIiR0KCdlbWFpbCcpXCJcbiAgICAgICAgdi1tb2RlbD1cImZvcm0uZW1haWxcIlxuICAgICAgICBwcmVwZW5kLWljb249XCJlbWFpbFwiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiZW1haWxcIiAvPlxuICAgICAgPHYtYnRuIGxhcmdlIGJsb2NrIDpsb2FkaW5nPVwiZm9ybS5idXN5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICB7eyAkdCgnc2VuZF9wYXNzd29yZF9yZXNldF9saW5rJykgfX1cbiAgICAgIDwvdi1idG4+XG4gICAgPC92LWZvcm0+XG4gIDwvdi1jYXJkPlxuICBcblxuPCEtLSAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggbS1hdXRvXCI+XG4gICAgICA8Y2FyZCA6dGl0bGU9XCIkdCgncmVzZXRfcGFzc3dvcmQnKVwiPlxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzZW5kXCIgQGtleWRvd249XCJmb3JtLm9uS2V5ZG93bigkZXZlbnQpXCI+XG4gICAgICAgICAgPGFsZXJ0LXN1Y2Nlc3MgOmZvcm09XCJmb3JtXCIgOm1lc3NhZ2U9XCJzdGF0dXNcIi8+XG5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdlbWFpbCcpIH19PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0uZW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygnZW1haWwnKSB9XCI+XG4gICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJlbWFpbFwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOSBtbC1tZC1hdXRvXCI+XG4gICAgICAgICAgICAgIDx2LWJ1dHRvbiA6bG9hZGluZz1cImZvcm0uYnVzeVwiPlxuICAgICAgICAgICAgICAgIHt7ICR0KCdzZW5kX3Bhc3N3b3JkX3Jlc2V0X2xpbmsnKSB9fVxuICAgICAgICAgICAgICA8L3YtYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvY2FyZD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+IC0tPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1pZGRsZXdhcmU6ICdndWVzdCcsXG5cbiAgbWV0YUluZm8gKCkge1xuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdyZXNldF9wYXNzd29yZCcpIH1cbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHN0YXR1czogJycsXG4gICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgZW1haWw6ICcnXG4gICAgfSlcbiAgfSksXG5cbiAgbWV0aG9kczoge1xuXG5cbiAgICBhc3luYyBzZW5kICgpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJy9hcGkvcGFzc3dvcmQvZW1haWwnKVxuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIHRoaXMuc3RhdHVzID0gZGF0YS5zdGF0dXNcblxuICAgICAgdGhpcy5mb3JtLnJlc2V0KClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICBwYWRkaW5nOiAzMHB4O1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcGFzc3dvcmQvZW1haWwudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY2FyZFwiLFxuICAgIFtcbiAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIHsgYXR0cnM6IHsgXCJwcmltYXJ5LXRpdGxlXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KFwicmVzZXRfcGFzc3dvcmRcIikpICsgXCJcXG4gICAgICBcIilcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICB7XG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIF92bS5zZW5kKCRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmZvcm0ub25LZXlkb3duKCRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiZW1haWxcIiksXG4gICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW1haWwsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uZm9ybS5idXN5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwic2VuZF9wYXNzd29yZF9yZXNldF9saW5rXCIpKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi02MmEyMzY3MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjJhMjM2NzBcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9wYXNzd29yZC9lbWFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIwIl0sInNvdXJjZVJvb3QiOiIifQ==