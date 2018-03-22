webpackJsonp([18],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(161)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(163)
/* template */
var __vue_template__ = __webpack_require__(172)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6e6e3d68"
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
Component.options.__file = "resources\\assets\\js\\pages\\auth\\login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e6e3d68", Component.options)
  } else {
    hotAPI.reload("data-v-6e6e3d68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 156:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\OSPanel\\domains\\web\\resources\\assets\\js\\components\\auth\\LoginWithGithub.vue'");

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("713e2b5e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e6e3d68\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e6e3d68\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.auth[data-v-6e6e3d68] {\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n  height: 500px;\n  margin: 30px auto;\n  overflow: hidden;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n  border: 0px solid transparent;\n  -webkit-transition: background-color 1s, height .5s;\n  transition: background-color 1s, height .5s;\n}\n.auth-switch[data-v-6e6e3d68],\n.auth-form[data-v-6e6e3d68] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  -webkit-transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n.signingin .auth-switch[data-v-6e6e3d68] {\n  left: 0%;\n}\n.signingin .auth-form[data-v-6e6e3d68] {\n  left: 50%;\n}\n.auth-switch[data-v-6e6e3d68] {\n  left: 50%;\n  padding-top: 120px;\n  text-align: center;\n}\n.auth-switch__text[data-v-6e6e3d68] {\n  -webkit-transition: -webkit-transform .35s;\n  transition: -webkit-transform .35s;\n  transition: transform .35s;\n  transition: transform .35s, -webkit-transform .35s;\n}\nh2[data-v-6e6e3d68] {\n  text-align: center;\n}\n.icon[data-v-6e6e3d68] {\n  font-size: 42px;\n  color: #8E8E8E;\n}\nform[data-v-6e6e3d68] {\n  -webkit-transition: opacity .35s;\n  transition: opacity .35s;\n}\n.AuthEnter[data-v-6e6e3d68] {\n  opacity: 1;\n}\n.AuthLeave[data-v-6e6e3d68] {\n  opacity: 0;\n}\n.auth-form[data-v-6e6e3d68] {\n  left: 0%;\n  z-index: 2;\n  text-align: center;\n  -webkit-transition-property: left, background-color;\n  transition-property: left, background-color;\n  -webkit-box-shadow: 0 0 15px #000;\n          box-shadow: 0 0 15px #000;\n}\n.card[data-v-6e6e3d68] {\n  padding: 50px 30px;\n}\n.fadeOut[data-v-6e6e3d68] {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.fadeIn[data-v-6e6e3d68] {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/auth/login.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,oDAA4C;UAA5C,4CAA4C;EAC5C,8BAA8B;EAC9B,oDAA4C;EAA5C,4CAA4C;CAAE;AAEhD;;EAEE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,6DAAqD;EAArD,qDAAqD;CAAE;AAEzD;EACE,SAAS;CAAE;AAEb;EACE,UAAU;CAAE;AAEd;EACE,UAAU;EACV,mBAAmB;EACnB,mBAAmB;CAAE;AAEvB;EACE,2CAA2B;EAA3B,mCAA2B;EAA3B,2BAA2B;EAA3B,mDAA2B;CAAE;AAE/B;EACE,mBAAmB;CAAE;AAEvB;EACE,gBAAgB;EAChB,eAAe;CAAE;AAEnB;EACE,iCAAyB;EAAzB,yBAAyB;CAAE;AAE7B;EACE,WAAW;CAAE;AAEf;EACE,WAAW;CAAE;AAEf;EACE,SAAS;EACT,WAAW;EACX,mBAAmB;EACnB,oDAA4C;EAA5C,4CAA4C;EAC5C,kCAA0B;UAA1B,0BAA0B;CAAE;AAE9B;EACE,mBAAmB;CAAE;AAEvB;EACE,4BAAoB;UAApB,oBAAoB;CAAE;AAExB;EACE,4BAAoB;UAApB,oBAAoB;CAAE","file":"login.vue","sourcesContent":[".auth {\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n  height: 500px;\n  margin: 30px auto;\n  overflow: hidden;\n  border-radius: 6px;\n  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n  border: 0px solid transparent;\n  transition: background-color 1s, height .5s; }\n\n.auth-switch,\n.auth-form {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55); }\n\n.signingin .auth-switch {\n  left: 0%; }\n\n.signingin .auth-form {\n  left: 50%; }\n\n.auth-switch {\n  left: 50%;\n  padding-top: 120px;\n  text-align: center; }\n\n.auth-switch__text {\n  transition: transform .35s; }\n\nh2 {\n  text-align: center; }\n\n.icon {\n  font-size: 42px;\n  color: #8E8E8E; }\n\nform {\n  transition: opacity .35s; }\n\n.AuthEnter {\n  opacity: 1; }\n\n.AuthLeave {\n  opacity: 0; }\n\n.auth-form {\n  left: 0%;\n  z-index: 2;\n  text-align: center;\n  transition-property: left, background-color;\n  box-shadow: 0 0 15px #000; }\n\n.card {\n  padding: 50px 30px; }\n\n.fadeOut {\n  transform: scale(0); }\n\n.fadeIn {\n  transform: scale(1); }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginInput__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_auth_LoginInput__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_auth_RegisterInput__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_auth_RegisterInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_auth_RegisterInput__);


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





/* harmony default export */ __webpack_exports__["default"] = ({
  middleware: 'guest',

  components: {
    'login-input': __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginInput___default.a,
    'register-input': __WEBPACK_IMPORTED_MODULE_3__components_auth_RegisterInput___default.a
  },

  metaInfo: function metaInfo() {
    return { title: this.$t('login') };
  },


  data: function data() {
    return {
      register: false,
      signingin: true,
      state: 'signingin',
      switchText: false,
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        email: '',
        password: ''
      }),
      remember: false
    };
  },
  computed: {
    // Вычисляем тип компонента, заголовок и текст авторизации
    authComponent: function authComponent() {
      return this.state === 'signingin' ? 'login-input' : 'register-input';
    },
    title: function title() {
      return this.state === 'signingin' ? this.$t('login') : this.$t('register');
    },
    message: function message() {
      return this.state === 'signingin' ? this.$t('has_not_account') : this.$t('has_account');
    }
  },
  methods: {
    toggleAuth: function toggleAuth() {
      var _this = this;

      this.switchText = true;
      setTimeout(function () {
        _this.state = _this.state === 'signingin' ? 'registration' : 'signingin';
        setTimeout(function () {
          return _this.switchText = false;
        }, 1000);
      }, 500);
    },
    login: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref2, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.form.post('/api/login');

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;

                // Сохранить токен.
                this.$store.dispatch('auth/saveToken', {
                  token: data.token,
                  remember: this.remember
                });
                // Получаем юзера.
                _context.next = 7;
                return this.$store.dispatch('auth/fetchUser');

              case 7:
                // Перенаправление на главную.
                this.$router.push({ name: 'AdminDashboard' });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login() {
        return _ref.apply(this, arguments);
      }

      return login;
    }()
  }
});

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(165)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(167)
/* template */
var __vue_template__ = __webpack_require__(168)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-09ae202e"
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
Component.options.__file = "resources\\assets\\js\\components\\auth\\LoginInput.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09ae202e", Component.options)
  } else {
    hotAPI.reload("data-v-09ae202e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(166);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("a893e6c2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09ae202e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoginInput.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09ae202e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoginInput.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"LoginInput.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub__);


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




/* harmony default export */ __webpack_exports__["default"] = ({
  middleware: 'guest',

  components: {
    LoginWithGithub: __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub__["default"]
  },

  metaInfo: function metaInfo() {
    return { title: this.$t('login') };
  },


  data: function data() {
    return {
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        email: '',
        password: ''
      }),
      valid: false,
      emailRules: [function (v) {
        return !!v || "Введите значение";
      }],
      passwordRules: [function (v) {
        return !!v || "Введите значение";
      }],
      remember: false
    };
  },

  methods: {
    login: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref2, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.form.post('/api/login');

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;


                // Save the token.
                this.$store.dispatch('auth/saveToken', {
                  token: data.token,
                  remember: this.remember
                });

                // Fetch the user.
                _context.next = 7;
                return this.$store.dispatch('auth/fetchUser');

              case 7:

                // Redirect home.
                this.$router.push({ name: 'home' });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login() {
        return _ref.apply(this, arguments);
      }

      return login;
    }()
  }
});

/***/ }),

/***/ 168:
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
          _vm.login($event)
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
      _c("has-error", { attrs: { form: _vm.form, field: "email" } }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: _vm.$t("email"),
          rules: _vm.emailRules,
          "prepend-icon": "email",
          type: "email",
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
      _c("has-error", { attrs: { form: _vm.form, field: "password" } }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: _vm.$t("password"),
          rules: _vm.passwordRules,
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
      _c("v-checkbox", {
        attrs: { label: _vm.$t("remember_me"), name: "remember" },
        model: {
          value: _vm.remember,
          callback: function($$v) {
            _vm.remember = $$v
          },
          expression: "remember"
        }
      }),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: {
            block: "",
            large: "",
            type: "submit",
            loading: _vm.form.busy
          }
        },
        [_vm._v("\n       " + _vm._s(_vm.$t("login")) + "\n  ")]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        { attrs: { flat: "", small: "", to: { name: "password.request" } } },
        [_vm._v("\n    " + _vm._s(_vm.$t("forgot_password")) + "\n  ")]
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
    require("vue-hot-reload-api")      .rerender("data-v-09ae202e", module.exports)
  }
}

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(170)
/* template */
var __vue_template__ = __webpack_require__(171)
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
Component.options.__file = "resources\\assets\\js\\components\\auth\\RegisterInput.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e3e5cac", Component.options)
  } else {
    hotAPI.reload("data-v-2e3e5cac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub__);


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
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  middleware: 'guest',

  components: {
    LoginWithGithub: __WEBPACK_IMPORTED_MODULE_2__components_auth_LoginWithGithub__["default"]
  },

  metaInfo: function metaInfo() {
    return { title: this.$t('register') };
  },


  data: function data() {
    return {
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }),
      valid: false,
      nameRules: [function (v) {
        return !!v || "Введите значение";
      }, function (v) {
        return v.length <= 10 || 'Name must be less than 10 characters';
      }],
      emailRules: [function (v) {
        return !!v || "Введите значение";
      }, function (v) {
        return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        );
      }],
      passwordRules: [function (v) {
        return !!v || "Введите значение";
      }]
    };
  },

  methods: {
    register: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref2, data, _ref3, token;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.form.post('/api/register');

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;
                _context.next = 6;
                return this.form.post('/api/login');

              case 6:
                _ref3 = _context.sent;
                token = _ref3.data.token;


                // Сохранить токен.
                this.$store.dispatch('auth/saveToken', { token: token });

                // Обновление пользователя.
                _context.next = 11;
                return this.$store.dispatch('auth/updateUser', { user: data });

              case 11:

                // Перенаправление на домашнюю.
                this.$router.push({ name: 'home' });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function register() {
        return _ref.apply(this, arguments);
      }

      return register;
    }()
  }
});

/***/ }),

/***/ 171:
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
          _vm.register($event)
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
      _c("has-error", { attrs: { form: _vm.form, field: "name" } }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: _vm.$t("name"),
          rules: _vm.nameRules,
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
      _c("has-error", { attrs: { form: _vm.form, field: "email" } }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: _vm.$t("email"),
          rules: _vm.emailRules,
          counter: 70,
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
      _c("has-error", { attrs: { form: _vm.form, field: "password" } }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: _vm.$t("password"),
          rules: _vm.passwordRules,
          "prepend-icon": "vpn_key",
          type: "password",
          counter: 160,
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
      _c("has-error", {
        attrs: { form: _vm.form, field: "password_confirmation" }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: _vm.$t("confirm_password"),
          rules: _vm.passwordRules,
          "prepend-icon": "vpn_key",
          type: "password",
          counter: 160,
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
        [_vm._v(_vm._s(_vm.$t("register")))]
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
    require("vue-hot-reload-api")      .rerender("data-v-2e3e5cac", module.exports)
  }
}

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "auth-wrapper", class: _vm.state }, [
    _c("div", { staticClass: "auth" }, [
      _c("div", { staticClass: "auth-switch" }, [
        _c(
          "div",
          {
            staticClass: "auth-switch__text",
            class: { fadeIn: !_vm.switchText, fadeOut: _vm.switchText }
          },
          [
            _c("h2", [_vm._v(" " + _vm._s(_vm.title) + " ")]),
            _vm._v(" "),
            _c(
              "v-btn",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.toggleAuth($event)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.message))]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "auth-form" },
        [
          _c(
            "v-card",
            { attrs: { height: "500" } },
            [
              _c(
                "transition",
                {
                  attrs: {
                    "enter-active-class": "AuthEnter",
                    "leave-active-class": "AuthLeave",
                    mode: "out-in"
                  }
                },
                [_c(_vm.authComponent, { tag: "component" })],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6e6e3d68", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWU/NjBhZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlPzk3MjkiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dC52dWU/MmVlZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZT80YTUzIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZT8xNjQwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL1JlZ2lzdGVySW5wdXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcklucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcklucHV0LnZ1ZT80ODUxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWU/NDI2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzE4LmJhMTJmMmJlZDg1N2U1Y2UxOTBhLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02ZTZlM2Q2OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sb2dpbi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTZlNmUzZDY4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9sb2dpbi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTZlNmUzZDY4XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYXV0aFxcXFxsb2dpbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmU2ZTNkNjhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZTZlM2Q2OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmU2ZTNkNjhcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjcxM2UyYjVlXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZlNmUzZDY4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZlNmUzZDY4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTZlNmUzZDY4XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmF1dGhbZGF0YS12LTZlNmUzZDY4XSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luOiAzMHB4IGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGhlaWdodCAuNXM7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzLCBoZWlnaHQgLjVzO1xcbn1cXG4uYXV0aC1zd2l0Y2hbZGF0YS12LTZlNmUzZDY4XSxcXG4uYXV0aC1mb3JtW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjU1KTtcXG4gIHRyYW5zaXRpb246IDFzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNywgMS41NSk7XFxufVxcbi5zaWduaW5naW4gLmF1dGgtc3dpdGNoW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgbGVmdDogMCU7XFxufVxcbi5zaWduaW5naW4gLmF1dGgtZm9ybVtkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuLmF1dGgtc3dpdGNoW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgbGVmdDogNTAlO1xcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYXV0aC1zd2l0Y2hfX3RleHRbZGF0YS12LTZlNmUzZDY4XSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zNXM7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMzVzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gLjM1cztcXG59XFxuaDJbZGF0YS12LTZlNmUzZDY4XSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pY29uW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgY29sb3I6ICM4RThFOEU7XFxufVxcbmZvcm1bZGF0YS12LTZlNmUzZDY4XSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjM1cztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjM1cztcXG59XFxuLkF1dGhFbnRlcltkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5BdXRoTGVhdmVbZGF0YS12LTZlNmUzZDY4XSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uYXV0aC1mb3JtW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgbGVmdDogMCU7XFxuICB6LWluZGV4OiAyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCwgYmFja2dyb3VuZC1jb2xvcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXG59XFxuLmNhcmRbZGF0YS12LTZlNmUzZDY4XSB7XFxuICBwYWRkaW5nOiA1MHB4IDMwcHg7XFxufVxcbi5mYWRlT3V0W2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4uZmFkZUluW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvREFBNEM7VUFBNUMsNENBQTRDO0VBQzVDLDhCQUE4QjtFQUM5QixvREFBNEM7RUFBNUMsNENBQTRDO0NBQUU7QUFFaEQ7O0VBRUUsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkRBQXFEO0VBQXJELHFEQUFxRDtDQUFFO0FBRXpEO0VBQ0UsU0FBUztDQUFFO0FBRWI7RUFDRSxVQUFVO0NBQUU7QUFFZDtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQUU7QUFFdkI7RUFDRSwyQ0FBMkI7RUFBM0IsbUNBQTJCO0VBQTNCLDJCQUEyQjtFQUEzQixtREFBMkI7Q0FBRTtBQUUvQjtFQUNFLG1CQUFtQjtDQUFFO0FBRXZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FBRTtBQUVuQjtFQUNFLGlDQUF5QjtFQUF6Qix5QkFBeUI7Q0FBRTtBQUU3QjtFQUNFLFdBQVc7Q0FBRTtBQUVmO0VBQ0UsV0FBVztDQUFFO0FBRWY7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvREFBNEM7RUFBNUMsNENBQTRDO0VBQzVDLGtDQUEwQjtVQUExQiwwQkFBMEI7Q0FBRTtBQUU5QjtFQUNFLG1CQUFtQjtDQUFFO0FBRXZCO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtDQUFFO0FBRXhCO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtDQUFFXCIsXCJmaWxlXCI6XCJsb2dpbi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmF1dGgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGhlaWdodCAuNXM7IH1cXG5cXG4uYXV0aC1zd2l0Y2gsXFxuLmF1dGgtZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogMXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjU1KTsgfVxcblxcbi5zaWduaW5naW4gLmF1dGgtc3dpdGNoIHtcXG4gIGxlZnQ6IDAlOyB9XFxuXFxuLnNpZ25pbmdpbiAuYXV0aC1mb3JtIHtcXG4gIGxlZnQ6IDUwJTsgfVxcblxcbi5hdXRoLXN3aXRjaCB7XFxuICBsZWZ0OiA1MCU7XFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uYXV0aC1zd2l0Y2hfX3RleHQge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXM7IH1cXG5cXG5oMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uaWNvbiB7XFxuICBmb250LXNpemU6IDQycHg7XFxuICBjb2xvcjogIzhFOEU4RTsgfVxcblxcbmZvcm0ge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMzVzOyB9XFxuXFxuLkF1dGhFbnRlciB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLkF1dGhMZWF2ZSB7XFxuICBvcGFjaXR5OiAwOyB9XFxuXFxuLmF1dGgtZm9ybSB7XFxuICBsZWZ0OiAwJTtcXG4gIHotaW5kZXg6IDI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDsgfVxcblxcbi5jYXJkIHtcXG4gIHBhZGRpbmc6IDUwcHggMzBweDsgfVxcblxcbi5mYWRlT3V0IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG5cXG4uZmFkZUluIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNmU2ZTNkNjhcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImF1dGgtd3JhcHBlclwiIDpjbGFzcz1cInN0YXRlXCI+XG4gICAgPGRpdiBjbGFzcz1cImF1dGhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdXRoLXN3aXRjaFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aC1zd2l0Y2hfX3RleHRcIlxuICAgICAgICAgICAgIDpjbGFzcz1cInsnZmFkZUluJzogIXN3aXRjaFRleHQsICdmYWRlT3V0Jzogc3dpdGNoVGV4dH1cIj5cbiAgICAgICAgICA8aDI+IHt7IHRpdGxlIH19IDwvaDI+IFxuICAgICAgICAgIDx2LWJ0biBAY2xpY2sucHJldmVudD1cInRvZ2dsZUF1dGhcIj57e21lc3NhZ2V9fTwvdi1idG4+XG4gICAgICAgIDwvZGl2PiAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImF1dGgtZm9ybVwiPlxuICAgICAgICA8di1jYXJkIGhlaWdodD1cIjUwMFwiPlxuICAgICAgICAgIDx0cmFuc2l0aW9uICBlbnRlci1hY3RpdmUtY2xhc3M9XCJBdXRoRW50ZXJcIiBsZWF2ZS1hY3RpdmUtY2xhc3M9XCJBdXRoTGVhdmVcIiBtb2RlPVwib3V0LWluXCI+XG4gICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cImF1dGhDb21wb25lbnRcIj48L2NvbXBvbmVudD5cbiAgICAgICAgICA8L3RyYW5zaXRpb24+XG4gICAgICAgIDwvdi1jYXJkPiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuaW1wb3J0IExvZ2luSW5wdXQgZnJvbSAnfi9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dCc7XG5pbXBvcnQgUmVnaXN0ZXJJbnB1dCBmcm9tICd+L2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcklucHV0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaWRkbGV3YXJlOiAnZ3Vlc3QnLFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICAnbG9naW4taW5wdXQnOiBMb2dpbklucHV0LFxuICAgICdyZWdpc3Rlci1pbnB1dCc6IFJlZ2lzdGVySW5wdXRcbiAgfSxcblxuICBtZXRhSW5mbyAoKSB7XG4gICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ2xvZ2luJykgfVxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgcmVnaXN0ZXI6IGZhbHNlLFxuICAgIHNpZ25pbmdpbjogdHJ1ZSxcbiAgICBzdGF0ZTogJ3NpZ25pbmdpbicsXG4gICAgc3dpdGNoVGV4dDogZmFsc2UsXG4gICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfSksXG4gICAgcmVtZW1iZXI6IGZhbHNlXG4gIH0pLFxuICBjb21wdXRlZDoge1xuICAgIC8vINCS0YvRh9C40YHQu9GP0LXQvCDRgtC40L8g0LrQvtC80L/QvtC90LXQvdGC0LAsINC30LDQs9C+0LvQvtCy0L7QuiDQuCDRgtC10LrRgdGCINCw0LLRgtC+0YDQuNC30LDRhtC40LhcbiAgICBhdXRoQ29tcG9uZW50KCkge1xuICAgICAgcmV0dXJuICh0aGlzLnN0YXRlID09PSAnc2lnbmluZ2luJykgPyAnbG9naW4taW5wdXQnIDogJ3JlZ2lzdGVyLWlucHV0JztcbiAgICB9LFxuICAgIHRpdGxlKCkge1xuICAgICAgcmV0dXJuICh0aGlzLnN0YXRlID09PSAnc2lnbmluZ2luJykgPyB0aGlzLiR0KCdsb2dpbicpIDogdGhpcy4kdCgncmVnaXN0ZXInKTtcbiAgICB9LFxuICAgIG1lc3NhZ2UoKSB7XG4gICAgICByZXR1cm4gKHRoaXMuc3RhdGUgPT09ICdzaWduaW5naW4nKSA/IHRoaXMuJHQoJ2hhc19ub3RfYWNjb3VudCcpIDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHQoJ2hhc19hY2NvdW50Jyk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlQXV0aCgpIHtcbiAgICAgIHRoaXMuc3dpdGNoVGV4dCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICAgIHRoaXMuc3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ3NpZ25pbmdpbicpID8gJ3JlZ2lzdHJhdGlvbicgOiAnc2lnbmluZ2luJztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnN3aXRjaFRleHQgPSBmYWxzZSwgMTAwMCk7XG4gICAgICB9LCA1MDApO1xuICAgIH0sXG4gICAgYXN5bmMgbG9naW4gKCkge1xuICAgICAgLy8g0J7RgtGA0L/QsNCy0LrQsCDRhNC+0YDQvNGLLlxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmZvcm0ucG9zdCgnL2FwaS9sb2dpbicpXG4gICAgICAvLyDQodC+0YXRgNCw0L3QuNGC0Ywg0YLQvtC60LXQvS5cbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3NhdmVUb2tlbicsIHtcbiAgICAgICAgdG9rZW46IGRhdGEudG9rZW4sXG4gICAgICAgIHJlbWVtYmVyOiB0aGlzLnJlbWVtYmVyXG4gICAgICB9KVxuICAgICAgLy8g0J/QvtC70YPRh9Cw0LXQvCDRjtC30LXRgNCwLlxuICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvZmV0Y2hVc2VyJylcbiAgICAgIC8vINCf0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQvdCwINCz0LvQsNCy0L3Rg9GOLlxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnQWRtaW5EYXNoYm9hcmQnIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuXG4uYXV0aCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzLCBoZWlnaHQgLjVzO1xufVxuXG5cbi5hdXRoLXN3aXRjaCxcbi5hdXRoLWZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjU1KTtcbn1cblxuLnNpZ25pbmdpbiAuYXV0aC1zd2l0Y2gge1xuICBsZWZ0OiAwJTtcbn1cblxuLnNpZ25pbmdpbiAuYXV0aC1mb3JtIHtcbiAgbGVmdDogNTAlO1xufVxuXG4uYXV0aC1zd2l0Y2gge1xuICBsZWZ0OiA1MCU7IFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmF1dGgtc3dpdGNoX190ZXh0IHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXM7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDJweDsgIFxuICBjb2xvcjogIzhFOEU4RTtcbn1cblxuZm9ybSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjM1cztcbn1cblxuLkF1dGhFbnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5BdXRoTGVhdmUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uYXV0aC1mb3JtIHtcbiAgbGVmdDogMCU7XG4gIHotaW5kZXg6IDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCwgYmFja2dyb3VuZC1jb2xvcjtcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcbn1cblxuLmNhcmQge1xuICBwYWRkaW5nOiA1MHB4IDMwcHg7XG59XG5cbi5mYWRlT3V0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLmZhZGVJbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA5YWUyMDJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTG9naW5JbnB1dC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTG9naW5JbnB1dC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTA5YWUyMDJlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Mb2dpbklucHV0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMDlhZTIwMmVcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXGF1dGhcXFxcTG9naW5JbnB1dC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDlhZTIwMmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wOWFlMjAyZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA5YWUyMDJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTG9naW5JbnB1dC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImE4OTNlNmMyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA5YWUyMDJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTG9naW5JbnB1dC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDlhZTIwMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Mb2dpbklucHV0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wOWFlMjAyZVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL0xvZ2luSW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiTG9naW5JbnB1dC52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wOWFlMjAyZVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL0xvZ2luSW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsIjx0ZW1wbGF0ZT5cbiAgPHYtZm9ybSB2LW1vZGVsPVwidmFsaWRcIiBcbiAgICAgICAgICBAc3VibWl0LnByZXZlbnQ9XCJsb2dpblwiIFxuICAgICAgICAgIEBrZXlkb3duPVwiZm9ybS5vbktleWRvd24oJGV2ZW50KVwiPlxuICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJlbWFpbFwiLz5cbiAgICA8di10ZXh0LWZpZWxkXG4gICAgICA6bGFiZWw9XCIkdCgnZW1haWwnKVwiXG4gICAgICB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiXG4gICAgICA6cnVsZXM9XCJlbWFpbFJ1bGVzXCJcbiAgICAgIHByZXBlbmQtaWNvbj1cImVtYWlsXCJcbiAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICByZXF1aXJlZFxuICAgID48L3YtdGV4dC1maWVsZD5cbiAgICBcbiAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwicGFzc3dvcmRcIiAvPlxuICAgIDx2LXRleHQtZmllbGRcbiAgICAgIDpsYWJlbD1cIiR0KCdwYXNzd29yZCcpXCJcbiAgICAgIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkXCJcbiAgICAgIDpydWxlcz1cInBhc3N3b3JkUnVsZXNcIlxuICAgICAgcHJlcGVuZC1pY29uPVwidnBuX2tleVwiXG4gICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgcmVxdWlyZWRcbiAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgXG4gICAgPHYtY2hlY2tib3hcbiAgICAgIDpsYWJlbD1cIiR0KCdyZW1lbWJlcl9tZScpXCJcbiAgICAgIHYtbW9kZWw9XCJyZW1lbWJlclwiXG4gICAgICBuYW1lPVwicmVtZW1iZXJcIlxuICAgID48L3YtY2hlY2tib3g+XG4gICAgPHYtYnRuIGJsb2NrIGxhcmdlIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgICAgOmxvYWRpbmc9XCJmb3JtLmJ1c3lcIj5cbiAgICAgICAgIHt7ICR0KCdsb2dpbicpIH19XG4gICAgPC92LWJ0bj5cbiAgICA8di1idG4gZmxhdCBzbWFsbFxuICAgICAgICAgICA6dG89XCJ7IG5hbWU6ICdwYXNzd29yZC5yZXF1ZXN0JyB9XCI+XG4gICAgICB7eyAkdCgnZm9yZ290X3Bhc3N3b3JkJykgfX1cbiAgICA8L3YtYnRuPlxuICA8L3YtZm9ybT4gICAgICAgICBcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcbmltcG9ydCBMb2dpbldpdGhHaXRodWIgZnJvbSAnfi9jb21wb25lbnRzL2F1dGgvTG9naW5XaXRoR2l0aHViJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1pZGRsZXdhcmU6ICdndWVzdCcsXG5cbiAgY29tcG9uZW50czoge1xuICAgIExvZ2luV2l0aEdpdGh1YlxuICB9LFxuXG4gIG1ldGFJbmZvICgpIHtcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgnbG9naW4nKSB9XG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgfSksXG4gICAgdmFsaWQ6IGZhbHNlLFxuICAgIGVtYWlsUnVsZXM6IFtcbiAgICAgIHYgPT4gISF2IHx8IFwi0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtVwiXG4gICAgXSxcbiAgICBwYXNzd29yZFJ1bGVzOiBbXG4gICAgICB2ID0+ICEhdiB8fCBcItCS0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LVcIlxuICAgIF0sXG4gICAgcmVtZW1iZXI6IGZhbHNlXG4gIH0pLFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBsb2dpbiAoKSB7XG4gICAgICAvLyBTdWJtaXQgdGhlIGZvcm0uXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZm9ybS5wb3N0KCcvYXBpL2xvZ2luJylcblxuICAgICAgLy8gU2F2ZSB0aGUgdG9rZW4uXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9zYXZlVG9rZW4nLCB7XG4gICAgICAgIHRva2VuOiBkYXRhLnRva2VuLFxuICAgICAgICByZW1lbWJlcjogdGhpcy5yZW1lbWJlclxuICAgICAgfSlcblxuICAgICAgLy8gRmV0Y2ggdGhlIHVzZXIuXG4gICAgICBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9mZXRjaFVzZXInKVxuXG4gICAgICAvLyBSZWRpcmVjdCBob21lLlxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnaG9tZScgfSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5cblxuXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWZvcm1cIixcbiAgICB7XG4gICAgICBvbjoge1xuICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgX3ZtLmxvZ2luKCRldmVudClcbiAgICAgICAgfSxcbiAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmZvcm0ub25LZXlkb3duKCRldmVudClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiBfdm0udmFsaWQsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICBfdm0udmFsaWQgPSAkJHZcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJlbWFpbFwiKSxcbiAgICAgICAgICBydWxlczogX3ZtLmVtYWlsUnVsZXMsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJlbWFpbFwiLFxuICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1haWxcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJwYXNzd29yZFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwYXNzd29yZFwiKSxcbiAgICAgICAgICBydWxlczogX3ZtLnBhc3N3b3JkUnVsZXMsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJ2cG5fa2V5XCIsXG4gICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1jaGVja2JveFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGxhYmVsOiBfdm0uJHQoXCJyZW1lbWJlcl9tZVwiKSwgbmFtZTogXCJyZW1lbWJlclwiIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5yZW1lbWJlcixcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0ucmVtZW1iZXIgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwicmVtZW1iZXJcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgbG9hZGluZzogX3ZtLmZvcm0uYnVzeVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoXCJsb2dpblwiKSkgKyBcIlxcbiAgXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7IGF0dHJzOiB7IGZsYXQ6IFwiXCIsIHNtYWxsOiBcIlwiLCB0bzogeyBuYW1lOiBcInBhc3N3b3JkLnJlcXVlc3RcIiB9IH0gfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0uJHQoXCJmb3Jnb3RfcGFzc3dvcmRcIikpICsgXCJcXG4gIFwiKV1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wOWFlMjAyZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDlhZTIwMmVcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL0xvZ2luSW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1JlZ2lzdGVySW5wdXQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yZTNlNWNhY1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1JlZ2lzdGVySW5wdXQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxhdXRoXFxcXFJlZ2lzdGVySW5wdXQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJlM2U1Y2FjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmUzZTVjYWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL1JlZ2lzdGVySW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsIjx0ZW1wbGF0ZT5cbiAgPHYtZm9ybSB2LW1vZGVsPVwidmFsaWRcIiBAc3VibWl0LnByZXZlbnQ9XCJyZWdpc3RlclwiIEBrZXlkb3duPVwiZm9ybS5vbktleWRvd24oJGV2ZW50KVwiPlxuXG4gICAgPCEtLSDQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPIC0tPlxuICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJuYW1lXCIvPlxuICAgIDx2LXRleHQtZmllbGRcbiAgICAgIDpsYWJlbD1cIiR0KCduYW1lJylcIlxuICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZVwiXG4gICAgICA6cnVsZXM9XCJuYW1lUnVsZXNcIlxuICAgICAgOmNvdW50ZXI9XCI3MFwiXG4gICAgICBwcmVwZW5kLWljb249XCJwZXJzb25cIlxuICAgICAgcmVxdWlyZWRcbiAgICA+PC92LXRleHQtZmllbGQ+XG5cbiAgICA8IS0tINCV0LzQsNC40LsgLS0+XG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImVtYWlsXCIgLz5cbiAgICA8di10ZXh0LWZpZWxkXG4gICAgICA6bGFiZWw9XCIkdCgnZW1haWwnKVwiXG4gICAgICB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiXG4gICAgICA6cnVsZXM9XCJlbWFpbFJ1bGVzXCJcbiAgICAgIDpjb3VudGVyPVwiNzBcIlxuICAgICAgcHJlcGVuZC1pY29uPVwiZW1haWxcIlxuICAgICAgcmVxdWlyZWRcbiAgICA+PC92LXRleHQtZmllbGQ+XG5cbiAgICA8IS0tINCf0LDRgNC+0LvRjCAtLT5cbiAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwicGFzc3dvcmRcIi8+XG4gICAgPHYtdGV4dC1maWVsZFxuICAgICAgOmxhYmVsPVwiJHQoJ3Bhc3N3b3JkJylcIlxuICAgICAgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIlxuICAgICAgOnJ1bGVzPVwicGFzc3dvcmRSdWxlc1wiXG4gICAgICBwcmVwZW5kLWljb249XCJ2cG5fa2V5XCJcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICA6Y291bnRlcj1cIjE2MFwiXG4gICAgICByZXF1aXJlZFxuICAgID48L3YtdGV4dC1maWVsZD5cblxuICAgIDwhLS0g0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0L/QsNGA0L7Qu9GPIC0tPlxuICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJwYXNzd29yZF9jb25maXJtYXRpb25cIiAvPlxuICAgIDx2LXRleHQtZmllbGRcbiAgICAgIDpsYWJlbD1cIiR0KCdjb25maXJtX3Bhc3N3b3JkJylcIlxuICAgICAgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgIDpydWxlcz1cInBhc3N3b3JkUnVsZXNcIlxuICAgICAgcHJlcGVuZC1pY29uPVwidnBuX2tleVwiXG4gICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgOmNvdW50ZXI9XCIxNjBcIlxuICAgICAgcmVxdWlyZWRcbiAgICA+PC92LXRleHQtZmllbGQ+XG5cbiAgICA8IS0tINCe0YLQv9GA0LDQstC60LAg0YTQvtGA0LzRiyAtLT5cbiAgICA8di1idG4gbGFyZ2UgYmxvY2sgOmxvYWRpbmc9XCJmb3JtLmJ1c3lcIiB0eXBlPVwic3VibWl0XCI+e3sgJHQoJ3JlZ2lzdGVyJykgfX08L3YtYnRuPlxuICA8L3YtZm9ybT5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuaW1wb3J0IExvZ2luV2l0aEdpdGh1YiBmcm9tICd+L2NvbXBvbmVudHMvYXV0aC9Mb2dpbldpdGhHaXRodWInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWlkZGxld2FyZTogJ2d1ZXN0JyxcblxuICBjb21wb25lbnRzOiB7XG4gICAgTG9naW5XaXRoR2l0aHViXG4gIH0sXG5cbiAgbWV0YUluZm8gKCkge1xuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdyZWdpc3RlcicpIH1cbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJ1xuICAgIH0pLFxuICAgIHZhbGlkOiBmYWxzZSxcbiAgICBuYW1lUnVsZXM6IFtcbiAgICAgIHYgPT4gISF2IHx8IFwi0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtVwiLFxuICAgICAgdiA9PiB2Lmxlbmd0aCA8PSAxMCB8fCAnTmFtZSBtdXN0IGJlIGxlc3MgdGhhbiAxMCBjaGFyYWN0ZXJzJ1xuICAgIF0sXG4gICAgZW1haWxSdWxlczogW1xuICAgICAgdiA9PiAhIXYgfHwgXCLQktCy0LXQtNC40YLQtSDQt9C90LDRh9C10L3QuNC1XCIsXG4gICAgICB2ID0+IC9eXFx3KyhbLi1dP1xcdyspKkBcXHcrKFsuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLy50ZXN0KHYpIHx8ICdFLW1haWwgbXVzdCBiZSB2YWxpZCdcbiAgICBdLFxuICAgIHBhc3N3b3JkUnVsZXM6IFtcbiAgICAgIHYgPT4gISF2IHx8IFwi0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtVwiXG4gICAgXVxuICB9KSxcblxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgcmVnaXN0ZXIgKCkge1xuICAgICAgLy8g0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8uXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZm9ybS5wb3N0KCcvYXBpL3JlZ2lzdGVyJylcblxuICAgICAgIC8vINCS0YXQvtC0INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjy5cbiAgICAgIGNvbnN0IHsgZGF0YTogeyB0b2tlbiB9fSA9IGF3YWl0IHRoaXMuZm9ybS5wb3N0KCcvYXBpL2xvZ2luJylcblxuICAgICAgIC8vINCh0L7RhdGA0LDQvdC40YLRjCDRgtC+0LrQtdC9LlxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvc2F2ZVRva2VuJywgeyB0b2tlbiB9KVxuXG4gICAgICAgLy8g0J7QsdC90L7QstC70LXQvdC40LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLlxuICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvdXBkYXRlVXNlcicsIHsgdXNlcjogZGF0YSB9KVxuXG4gICAgICAgLy8g0J/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC90LAg0LTQvtC80LDRiNC90Y7Rji5cbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWUnIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcklucHV0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWZvcm1cIixcbiAgICB7XG4gICAgICBvbjoge1xuICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgX3ZtLnJlZ2lzdGVyKCRldmVudClcbiAgICAgICAgfSxcbiAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmZvcm0ub25LZXlkb3duKCRldmVudClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiBfdm0udmFsaWQsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICBfdm0udmFsaWQgPSAkJHZcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJuYW1lXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS4kdChcIm5hbWVcIiksXG4gICAgICAgICAgcnVsZXM6IF92bS5uYW1lUnVsZXMsXG4gICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJwZXJzb25cIixcbiAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJlbWFpbFwiKSxcbiAgICAgICAgICBydWxlczogX3ZtLmVtYWlsUnVsZXMsXG4gICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJlbWFpbFwiLFxuICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVtYWlsLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImVtYWlsXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcInBhc3N3b3JkXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS4kdChcInBhc3N3b3JkXCIpLFxuICAgICAgICAgIHJ1bGVzOiBfdm0ucGFzc3dvcmRSdWxlcyxcbiAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInZwbl9rZXlcIixcbiAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgY291bnRlcjogMTYwLFxuICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiY29uZmlybV9wYXNzd29yZFwiKSxcbiAgICAgICAgICBydWxlczogX3ZtLnBhc3N3b3JkUnVsZXMsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJ2cG5fa2V5XCIsXG4gICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgIGNvdW50ZXI6IDE2MCxcbiAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb24sXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb25cIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhcmdlOiBcIlwiLFxuICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICBsb2FkaW5nOiBfdm0uZm9ybS5idXN5LFxuICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwicmVnaXN0ZXJcIikpKV1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yZTNlNWNhY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMmUzZTVjYWNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcklucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXV0aC13cmFwcGVyXCIsIGNsYXNzOiBfdm0uc3RhdGUgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXV0aFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXV0aC1zd2l0Y2hcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXV0aC1zd2l0Y2hfX3RleHRcIixcbiAgICAgICAgICAgIGNsYXNzOiB7IGZhZGVJbjogIV92bS5zd2l0Y2hUZXh0LCBmYWRlT3V0OiBfdm0uc3dpdGNoVGV4dCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiIFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICBfdm0udG9nZ2xlQXV0aCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubWVzc2FnZSkpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhdXRoLWZvcm1cIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBoZWlnaHQ6IFwiNTAwXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcIkF1dGhFbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcIkF1dGhMZWF2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBcIm91dC1pblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoX3ZtLmF1dGhDb21wb25lbnQsIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNmU2ZTNkNjhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTZlNmUzZDY4XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCJdLCJzb3VyY2VSb290IjoiIn0=