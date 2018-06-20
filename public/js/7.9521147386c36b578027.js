webpackJsonp([7],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(174)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(176)
/* template */
var __vue_template__ = __webpack_require__(177)
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

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("9347c1a4", content, false, {});
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

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.card[data-v-62a23670] {\n  width: 100%;\n  max-width: 800px;\n  margin: 50px auto;\n  padding: 30px;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/auth/password/resources/assets/js/pages/auth/password/email.vue"],"names":[],"mappings":";AAoFA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;CACA","file":"email.vue","sourcesContent":["<template>\r\n  <v-card>\r\n    <v-card-title primary-title>\r\n      <h2>\r\n        {{ $t('reset_password') }}\r\n      </h2>\r\n    </v-card-title>\r\n    <v-form @submit.prevent=\"send\" @keydown=\"form.onKeydown($event)\">\r\n      <v-text-field\r\n        :label=\"$t('email')\"\r\n        v-model=\"form.email\"\r\n        prepend-icon=\"email\"\r\n        required\r\n      ></v-text-field>\r\n      <has-error :form=\"form\" field=\"email\" />\r\n      <v-btn large block :loading=\"form.busy\" type=\"submit\">\r\n        {{ $t('send_password_reset_link') }}\r\n      </v-btn>\r\n    </v-form>\r\n  </v-card>\r\n  \r\n\r\n<!--   <div class=\"row\">\r\n    <div class=\"col-lg-8 m-auto\">\r\n      <card :title=\"$t('reset_password')\">\r\n        <form @submit.prevent=\"send\" @keydown=\"form.onKeydown($event)\">\r\n          <alert-success :form=\"form\" :message=\"status\"/>\r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-md-3 col-form-label text-md-right\">{{ $t('email') }}</label>\r\n            <div class=\"col-md-7\">\r\n              <input v-model=\"form.email\" type=\"email\" name=\"email\" class=\"form-control\"\r\n                :class=\"{ 'is-invalid': form.errors.has('email') }\">\r\n              <has-error :form=\"form\" field=\"email\"/>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-9 ml-md-auto\">\r\n              <v-button :loading=\"form.busy\">\r\n                {{ $t('send_password_reset_link') }}\r\n              </v-button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </card>\r\n    </div>\r\n  </div> -->\r\n</template>\r\n\r\n<script>\r\nimport Form from 'vform'\r\n\r\nexport default {\r\n  middleware: 'guest',\r\n\r\n  metaInfo () {\r\n    return { title: this.$t('reset_password') }\r\n  },\r\n\r\n  data: () => ({\r\n    status: '',\r\n    form: new Form({\r\n      email: ''\r\n    })\r\n  }),\r\n\r\n  methods: {\r\n\r\n\r\n    async send () {\r\n      const { data } = await this.form.post('/api/password/email')\r\n      console.log(data)\r\n      this.status = data.status\r\n\r\n      this.form.reset()\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n  .card {\r\n    width: 100%;\r\n    max-width: 800px;\r\n    margin: 50px auto;\r\n    padding: 30px;\r\n  }\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 176:
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

/***/ 177:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcGFzc3dvcmQvZW1haWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9wYXNzd29yZC9lbWFpbC52dWU/OTUzNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcGFzc3dvcmQvZW1haWwudnVlP2U1MmEiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9wYXNzd29yZC9lbWFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL3Bhc3N3b3JkL2VtYWlsLnZ1ZT8xMThlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXdNO0FBQ3hNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFxTDtBQUNyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQThPO0FBQzlPO0FBQ0E7QUFDQTtBQUNBLGtFQUE4SDtBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSxtREFBb0QsZ0JBQWdCLHFCQUFxQixzQkFBc0Isa0JBQWtCLEdBQUcsVUFBVSxtS0FBbUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLG9JQUFvSSx3QkFBd0Isc2FBQXNhLGtDQUFrQyw4YkFBOGIsZUFBZSxrTEFBa0wseUNBQXlDLDBSQUEwUixrQ0FBa0MsNE5BQTROLGlEQUFpRCxnQkFBZ0IsbUNBQW1DLE9BQU8seUJBQXlCLDJDQUEyQyw0QkFBNEIsUUFBUSxzQkFBc0IsK0JBQStCLGlCQUFpQixPQUFPLG9KQUFvSixPQUFPLEtBQUssZ0RBQWdELG9CQUFvQix5QkFBeUIsMEJBQTBCLHNCQUFzQixPQUFPLCtCQUErQjs7QUFFeHZGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzhDQTs7QUFFQTtjQUdBOztnQ0FDQTs0QkFDQTtBQUVBOzs7OztjQUVBOztlQUtBO0FBSkE7QUFGQTs7OztBQVVBO0FBREE7Ozs7Ozs7O3NDQUVBOzs7Ozs7NEJBQ0E7bUNBRUE7OzBCQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQXhCQSxHOzs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVMsc0JBQXNCLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsMkJBQTJCLFNBQVMsaUNBQWlDLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy83Ljk1MjExNDczODZjMzZiNTc4MDI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02MmEyMzY3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2VtYWlsLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9lbWFpbC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTYyYTIzNjcwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9lbWFpbC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTYyYTIzNjcwXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYXV0aFxcXFxwYXNzd29yZFxcXFxlbWFpbC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjJhMjM2NzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02MmEyMzY3MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL3Bhc3N3b3JkL2VtYWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02MmEyMzY3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2VtYWlsLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiOTM0N2MxYTRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTYyYTIzNjcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZW1haWwudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTYyYTIzNjcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZW1haWwudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTYyYTIzNjcwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9wYXNzd29yZC9lbWFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNhcmRbZGF0YS12LTYyYTIzNjcwXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvY3JtL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcGFzc3dvcmQvZW1haWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFvRkE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiZW1haWwudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDx2LWNhcmQ+XFxyXFxuICAgIDx2LWNhcmQtdGl0bGUgcHJpbWFyeS10aXRsZT5cXHJcXG4gICAgICA8aDI+XFxyXFxuICAgICAgICB7eyAkdCgncmVzZXRfcGFzc3dvcmQnKSB9fVxcclxcbiAgICAgIDwvaDI+XFxyXFxuICAgIDwvdi1jYXJkLXRpdGxlPlxcclxcbiAgICA8di1mb3JtIEBzdWJtaXQucHJldmVudD1cXFwic2VuZFxcXCIgQGtleWRvd249XFxcImZvcm0ub25LZXlkb3duKCRldmVudClcXFwiPlxcclxcbiAgICAgIDx2LXRleHQtZmllbGRcXHJcXG4gICAgICAgIDpsYWJlbD1cXFwiJHQoJ2VtYWlsJylcXFwiXFxyXFxuICAgICAgICB2LW1vZGVsPVxcXCJmb3JtLmVtYWlsXFxcIlxcclxcbiAgICAgICAgcHJlcGVuZC1pY29uPVxcXCJlbWFpbFxcXCJcXHJcXG4gICAgICAgIHJlcXVpcmVkXFxyXFxuICAgICAgPjwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgIDxoYXMtZXJyb3IgOmZvcm09XFxcImZvcm1cXFwiIGZpZWxkPVxcXCJlbWFpbFxcXCIgLz5cXHJcXG4gICAgICA8di1idG4gbGFyZ2UgYmxvY2sgOmxvYWRpbmc9XFxcImZvcm0uYnVzeVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj5cXHJcXG4gICAgICAgIHt7ICR0KCdzZW5kX3Bhc3N3b3JkX3Jlc2V0X2xpbmsnKSB9fVxcclxcbiAgICAgIDwvdi1idG4+XFxyXFxuICAgIDwvdi1mb3JtPlxcclxcbiAgPC92LWNhcmQ+XFxyXFxuICBcXHJcXG5cXHJcXG48IS0tICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTggbS1hdXRvXFxcIj5cXHJcXG4gICAgICA8Y2FyZCA6dGl0bGU9XFxcIiR0KCdyZXNldF9wYXNzd29yZCcpXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cXFwic2VuZFxcXCIgQGtleWRvd249XFxcImZvcm0ub25LZXlkb3duKCRldmVudClcXFwiPlxcclxcbiAgICAgICAgICA8YWxlcnQtc3VjY2VzcyA6Zm9ybT1cXFwiZm9ybVxcXCIgOm1lc3NhZ2U9XFxcInN0YXR1c1xcXCIvPlxcclxcblxcclxcblxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XFxcIj57eyAkdCgnZW1haWwnKSB9fTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTdcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XFxcImZvcm0uZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpIH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cXFwiZm9ybVxcXCIgZmllbGQ9XFxcImVtYWlsXFxcIi8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTkgbWwtbWQtYXV0b1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8di1idXR0b24gOmxvYWRpbmc9XFxcImZvcm0uYnVzeVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIHt7ICR0KCdzZW5kX3Bhc3N3b3JkX3Jlc2V0X2xpbmsnKSB9fVxcclxcbiAgICAgICAgICAgICAgPC92LWJ1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgPC9jYXJkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PiAtLT5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXFxyXFxuXFxyXFxuZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgbWlkZGxld2FyZTogJ2d1ZXN0JyxcXHJcXG5cXHJcXG4gIG1ldGFJbmZvICgpIHtcXHJcXG4gICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ3Jlc2V0X3Bhc3N3b3JkJykgfVxcclxcbiAgfSxcXHJcXG5cXHJcXG4gIGRhdGE6ICgpID0+ICh7XFxyXFxuICAgIHN0YXR1czogJycsXFxyXFxuICAgIGZvcm06IG5ldyBGb3JtKHtcXHJcXG4gICAgICBlbWFpbDogJydcXHJcXG4gICAgfSlcXHJcXG4gIH0pLFxcclxcblxcclxcbiAgbWV0aG9kczoge1xcclxcblxcclxcblxcclxcbiAgICBhc3luYyBzZW5kICgpIHtcXHJcXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZm9ybS5wb3N0KCcvYXBpL3Bhc3N3b3JkL2VtYWlsJylcXHJcXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxcclxcbiAgICAgIHRoaXMuc3RhdHVzID0gZGF0YS5zdGF0dXNcXHJcXG5cXHJcXG4gICAgICB0aGlzLmZvcm0ucmVzZXQoKVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAuY2FyZCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gIH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02MmEyMzY3MFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcGFzc3dvcmQvZW1haWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiPHRlbXBsYXRlPlxyXG4gIDx2LWNhcmQ+XHJcbiAgICA8di1jYXJkLXRpdGxlIHByaW1hcnktdGl0bGU+XHJcbiAgICAgIDxoMj5cclxuICAgICAgICB7eyAkdCgncmVzZXRfcGFzc3dvcmQnKSB9fVxyXG4gICAgICA8L2gyPlxyXG4gICAgPC92LWNhcmQtdGl0bGU+XHJcbiAgICA8di1mb3JtIEBzdWJtaXQucHJldmVudD1cInNlbmRcIiBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIj5cclxuICAgICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICAgIDpsYWJlbD1cIiR0KCdlbWFpbCcpXCJcclxuICAgICAgICB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiXHJcbiAgICAgICAgcHJlcGVuZC1pY29uPVwiZW1haWxcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgID48L3YtdGV4dC1maWVsZD5cclxuICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImVtYWlsXCIgLz5cclxuICAgICAgPHYtYnRuIGxhcmdlIGJsb2NrIDpsb2FkaW5nPVwiZm9ybS5idXN5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgIHt7ICR0KCdzZW5kX3Bhc3N3b3JkX3Jlc2V0X2xpbmsnKSB9fVxyXG4gICAgICA8L3YtYnRuPlxyXG4gICAgPC92LWZvcm0+XHJcbiAgPC92LWNhcmQ+XHJcbiAgXHJcblxyXG48IS0tICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1sZy04IG0tYXV0b1wiPlxyXG4gICAgICA8Y2FyZCA6dGl0bGU9XCIkdCgncmVzZXRfcGFzc3dvcmQnKVwiPlxyXG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInNlbmRcIiBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIj5cclxuICAgICAgICAgIDxhbGVydC1zdWNjZXNzIDpmb3JtPVwiZm9ybVwiIDptZXNzYWdlPVwic3RhdHVzXCIvPlxyXG5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdlbWFpbCcpIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLmVtYWlsXCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygnZW1haWwnKSB9XCI+XHJcbiAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImVtYWlsXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC05IG1sLW1kLWF1dG9cIj5cclxuICAgICAgICAgICAgICA8di1idXR0b24gOmxvYWRpbmc9XCJmb3JtLmJ1c3lcIj5cclxuICAgICAgICAgICAgICAgIHt7ICR0KCdzZW5kX3Bhc3N3b3JkX3Jlc2V0X2xpbmsnKSB9fVxyXG4gICAgICAgICAgICAgIDwvdi1idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj4gLS0+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBtaWRkbGV3YXJlOiAnZ3Vlc3QnLFxyXG5cclxuICBtZXRhSW5mbyAoKSB7XHJcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgncmVzZXRfcGFzc3dvcmQnKSB9XHJcbiAgfSxcclxuXHJcbiAgZGF0YTogKCkgPT4gKHtcclxuICAgIHN0YXR1czogJycsXHJcbiAgICBmb3JtOiBuZXcgRm9ybSh7XHJcbiAgICAgIGVtYWlsOiAnJ1xyXG4gICAgfSlcclxuICB9KSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG5cclxuXHJcbiAgICBhc3luYyBzZW5kICgpIHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmZvcm0ucG9zdCgnL2FwaS9wYXNzd29yZC9lbWFpbCcpXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgIHRoaXMuc3RhdHVzID0gZGF0YS5zdGF0dXNcclxuXHJcbiAgICAgIHRoaXMuZm9ybS5yZXNldCgpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcGFzc3dvcmQvZW1haWwudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY2FyZFwiLFxuICAgIFtcbiAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIHsgYXR0cnM6IHsgXCJwcmltYXJ5LXRpdGxlXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KFwicmVzZXRfcGFzc3dvcmRcIikpICsgXCJcXG4gICAgICBcIilcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICB7XG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIF92bS5zZW5kKCRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmZvcm0ub25LZXlkb3duKCRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiZW1haWxcIiksXG4gICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW1haWwsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uZm9ybS5idXN5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwic2VuZF9wYXNzd29yZF9yZXNldF9saW5rXCIpKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi02MmEyMzY3MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjJhMjM2NzBcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9wYXNzd29yZC9lbWFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwic291cmNlUm9vdCI6IiJ9