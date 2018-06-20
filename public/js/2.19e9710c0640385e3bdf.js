webpackJsonp([2],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(159)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(161)
/* template */
var __vue_template__ = __webpack_require__(170)
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

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(160);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("328bb698", content, false, {});
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

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.auth[data-v-6e6e3d68] {\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n  height: 500px;\n  margin: 30px auto;\n  overflow: hidden;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n  border: 0px solid transparent;\n  -webkit-transition: background-color 1s, height .5s;\n  transition: background-color 1s, height .5s;\n}\n.auth-switch[data-v-6e6e3d68],\n.auth-form[data-v-6e6e3d68] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  -webkit-transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n.signingin .auth-switch[data-v-6e6e3d68] {\n  left: 0%;\n}\n.signingin .auth-form[data-v-6e6e3d68] {\n  left: 50%;\n}\n.auth-switch[data-v-6e6e3d68] {\n  left: 50%;\n  padding-top: 120px;\n  text-align: center;\n}\n.auth-switch__text[data-v-6e6e3d68] {\n  -webkit-transition: -webkit-transform .35s;\n  transition: -webkit-transform .35s;\n  transition: transform .35s;\n  transition: transform .35s, -webkit-transform .35s;\n}\nh2[data-v-6e6e3d68] {\n  text-align: center;\n}\n.icon[data-v-6e6e3d68] {\n  font-size: 42px;\n  color: #8E8E8E;\n}\nform[data-v-6e6e3d68] {\n  -webkit-transition: opacity .35s;\n  transition: opacity .35s;\n}\n.AuthEnter[data-v-6e6e3d68] {\n  opacity: 1;\n}\n.AuthLeave[data-v-6e6e3d68] {\n  opacity: 0;\n}\n.auth-form[data-v-6e6e3d68] {\n  left: 0%;\n  z-index: 2;\n  text-align: center;\n  -webkit-transition-property: left, background-color;\n  transition-property: left, background-color;\n  -webkit-box-shadow: 0 0 15px #000;\n          box-shadow: 0 0 15px #000;\n}\n.card[data-v-6e6e3d68] {\n  padding: 50px 30px;\n}\n.fadeOut[data-v-6e6e3d68] {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.fadeIn[data-v-6e6e3d68] {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/auth/login.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,oDAA4C;UAA5C,4CAA4C;EAC5C,8BAA8B;EAC9B,oDAA4C;EAA5C,4CAA4C;CAAE;AAEhD;;EAEE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,6DAAqD;EAArD,qDAAqD;CAAE;AAEzD;EACE,SAAS;CAAE;AAEb;EACE,UAAU;CAAE;AAEd;EACE,UAAU;EACV,mBAAmB;EACnB,mBAAmB;CAAE;AAEvB;EACE,2CAA2B;EAA3B,mCAA2B;EAA3B,2BAA2B;EAA3B,mDAA2B;CAAE;AAE/B;EACE,mBAAmB;CAAE;AAEvB;EACE,gBAAgB;EAChB,eAAe;CAAE;AAEnB;EACE,iCAAyB;EAAzB,yBAAyB;CAAE;AAE7B;EACE,WAAW;CAAE;AAEf;EACE,WAAW;CAAE;AAEf;EACE,SAAS;EACT,WAAW;EACX,mBAAmB;EACnB,oDAA4C;EAA5C,4CAA4C;EAC5C,kCAA0B;UAA1B,0BAA0B;CAAE;AAE9B;EACE,mBAAmB;CAAE;AAEvB;EACE,4BAAoB;UAApB,oBAAoB;CAAE;AAExB;EACE,4BAAoB;UAApB,oBAAoB;CAAE","file":"login.vue","sourcesContent":[".auth {\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n  height: 500px;\n  margin: 30px auto;\n  overflow: hidden;\n  border-radius: 6px;\n  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n  border: 0px solid transparent;\n  transition: background-color 1s, height .5s; }\n\n.auth-switch,\n.auth-form {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55); }\n\n.signingin .auth-switch {\n  left: 0%; }\n\n.signingin .auth-form {\n  left: 50%; }\n\n.auth-switch {\n  left: 50%;\n  padding-top: 120px;\n  text-align: center; }\n\n.auth-switch__text {\n  transition: transform .35s; }\n\nh2 {\n  text-align: center; }\n\n.icon {\n  font-size: 42px;\n  color: #8E8E8E; }\n\nform {\n  transition: opacity .35s; }\n\n.AuthEnter {\n  opacity: 1; }\n\n.AuthLeave {\n  opacity: 0; }\n\n.auth-form {\n  left: 0%;\n  z-index: 2;\n  text-align: center;\n  transition-property: left, background-color;\n  box-shadow: 0 0 15px #000; }\n\n.card {\n  padding: 50px 30px; }\n\n.fadeOut {\n  transform: scale(0); }\n\n.fadeIn {\n  transform: scale(1); }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vform__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_auth_LoginInput__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_auth_LoginInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_auth_LoginInput__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_RegisterInput__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_RegisterInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_auth_RegisterInput__);
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
    'login-input': __WEBPACK_IMPORTED_MODULE_1__components_auth_LoginInput___default.a,
    'register-input': __WEBPACK_IMPORTED_MODULE_2__components_auth_RegisterInput___default.a
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
      form: new __WEBPACK_IMPORTED_MODULE_0_vform___default.a({
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
    }
  }
});

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(163)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(165)
/* template */
var __vue_template__ = __webpack_require__(166)
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

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(164);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("d3f12852", content, false, {});
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

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"LoginInput.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(8);


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


                // Сохранить токен.
                this.$store.dispatch('auth/saveToken', {
                  token: data.token,
                  remember: this.remember
                });

                // Получить юзера.
                _context.next = 7;
                return this.$store.dispatch('auth/fetchUser');

              case 7:

                // Перенаправление на домашнюю.
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

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(168)
/* template */
var __vue_template__ = __webpack_require__(169)
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

  metaInfo: function metaInfo() {
    return { title: this.$t('register') };
  },


  data: function data() {
    return {
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        name: '',
        last_name: 'last',
        email: '',
        password: '',
        password_confirmation: ''
      }),
      valid: false,
      nameRules: [function (v) {
        return !!v || "Введите значение";
      }, function (v) {
        return v.length >= 2 || 'Name must be less than 2 characters';
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
                return this.$store.dispatch('auth/updateUser', _extends({}, data));

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

/***/ 169:
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

/***/ 170:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWU/NjBhZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlPzk3MjkiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dC52dWU/MmVlZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZT80YTUzIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZT8xNjQwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL1JlZ2lzdGVySW5wdXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcklucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcklucHV0LnZ1ZT80ODUxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWU/NDI2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztB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YzA2NDAzODVlM2JkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmU2ZTNkNjhcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbG9naW4udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02ZTZlM2Q2OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbG9naW4udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi02ZTZlM2Q2OFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGF1dGhcXFxcbG9naW4udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTZlNmUzZDY4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmU2ZTNkNjhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmU2ZTNkNjhcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjMyOGJiNjk4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02ZTZlM2Q2OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02ZTZlM2Q2OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02ZTZlM2Q2OFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmF1dGhbZGF0YS12LTZlNmUzZDY4XSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luOiAzMHB4IGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGhlaWdodCAuNXM7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzLCBoZWlnaHQgLjVzO1xcbn1cXG4uYXV0aC1zd2l0Y2hbZGF0YS12LTZlNmUzZDY4XSxcXG4uYXV0aC1mb3JtW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjU1KTtcXG4gIHRyYW5zaXRpb246IDFzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNywgMS41NSk7XFxufVxcbi5zaWduaW5naW4gLmF1dGgtc3dpdGNoW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgbGVmdDogMCU7XFxufVxcbi5zaWduaW5naW4gLmF1dGgtZm9ybVtkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuLmF1dGgtc3dpdGNoW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgbGVmdDogNTAlO1xcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYXV0aC1zd2l0Y2hfX3RleHRbZGF0YS12LTZlNmUzZDY4XSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zNXM7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMzVzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gLjM1cztcXG59XFxuaDJbZGF0YS12LTZlNmUzZDY4XSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pY29uW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgY29sb3I6ICM4RThFOEU7XFxufVxcbmZvcm1bZGF0YS12LTZlNmUzZDY4XSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjM1cztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjM1cztcXG59XFxuLkF1dGhFbnRlcltkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5BdXRoTGVhdmVbZGF0YS12LTZlNmUzZDY4XSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uYXV0aC1mb3JtW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgbGVmdDogMCU7XFxuICB6LWluZGV4OiAyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCwgYmFja2dyb3VuZC1jb2xvcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXG59XFxuLmNhcmRbZGF0YS12LTZlNmUzZDY4XSB7XFxuICBwYWRkaW5nOiA1MHB4IDMwcHg7XFxufVxcbi5mYWRlT3V0W2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4uZmFkZUluW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL2NybS9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvREFBNEM7VUFBNUMsNENBQTRDO0VBQzVDLDhCQUE4QjtFQUM5QixvREFBNEM7RUFBNUMsNENBQTRDO0NBQUU7QUFFaEQ7O0VBRUUsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkRBQXFEO0VBQXJELHFEQUFxRDtDQUFFO0FBRXpEO0VBQ0UsU0FBUztDQUFFO0FBRWI7RUFDRSxVQUFVO0NBQUU7QUFFZDtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQUU7QUFFdkI7RUFDRSwyQ0FBMkI7RUFBM0IsbUNBQTJCO0VBQTNCLDJCQUEyQjtFQUEzQixtREFBMkI7Q0FBRTtBQUUvQjtFQUNFLG1CQUFtQjtDQUFFO0FBRXZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FBRTtBQUVuQjtFQUNFLGlDQUF5QjtFQUF6Qix5QkFBeUI7Q0FBRTtBQUU3QjtFQUNFLFdBQVc7Q0FBRTtBQUVmO0VBQ0UsV0FBVztDQUFFO0FBRWY7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvREFBNEM7RUFBNUMsNENBQTRDO0VBQzVDLGtDQUEwQjtVQUExQiwwQkFBMEI7Q0FBRTtBQUU5QjtFQUNFLG1CQUFtQjtDQUFFO0FBRXZCO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtDQUFFO0FBRXhCO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtDQUFFXCIsXCJmaWxlXCI6XCJsb2dpbi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmF1dGgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGhlaWdodCAuNXM7IH1cXG5cXG4uYXV0aC1zd2l0Y2gsXFxuLmF1dGgtZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogMXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjU1KTsgfVxcblxcbi5zaWduaW5naW4gLmF1dGgtc3dpdGNoIHtcXG4gIGxlZnQ6IDAlOyB9XFxuXFxuLnNpZ25pbmdpbiAuYXV0aC1mb3JtIHtcXG4gIGxlZnQ6IDUwJTsgfVxcblxcbi5hdXRoLXN3aXRjaCB7XFxuICBsZWZ0OiA1MCU7XFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uYXV0aC1zd2l0Y2hfX3RleHQge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXM7IH1cXG5cXG5oMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uaWNvbiB7XFxuICBmb250LXNpemU6IDQycHg7XFxuICBjb2xvcjogIzhFOEU4RTsgfVxcblxcbmZvcm0ge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMzVzOyB9XFxuXFxuLkF1dGhFbnRlciB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLkF1dGhMZWF2ZSB7XFxuICBvcGFjaXR5OiAwOyB9XFxuXFxuLmF1dGgtZm9ybSB7XFxuICBsZWZ0OiAwJTtcXG4gIHotaW5kZXg6IDI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDsgfVxcblxcbi5jYXJkIHtcXG4gIHBhZGRpbmc6IDUwcHggMzBweDsgfVxcblxcbi5mYWRlT3V0IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG5cXG4uZmFkZUluIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNmU2ZTNkNjhcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJhdXRoLXdyYXBwZXJcIiA6Y2xhc3M9XCJzdGF0ZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImF1dGhcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImF1dGgtc3dpdGNoXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImF1dGgtc3dpdGNoX190ZXh0XCJcclxuICAgICAgICAgICAgIDpjbGFzcz1cInsnZmFkZUluJzogIXN3aXRjaFRleHQsICdmYWRlT3V0Jzogc3dpdGNoVGV4dH1cIj5cclxuICAgICAgICAgIDxoMj4ge3sgdGl0bGUgfX0gPC9oMj4gXHJcbiAgICAgICAgICA8di1idG4gQGNsaWNrLnByZXZlbnQ9XCJ0b2dnbGVBdXRoXCI+e3ttZXNzYWdlfX08L3YtYnRuPlxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhdXRoLWZvcm1cIj5cclxuICAgICAgICA8di1jYXJkIGhlaWdodD1cIjUwMFwiPlxyXG4gICAgICAgICAgPHRyYW5zaXRpb24gIGVudGVyLWFjdGl2ZS1jbGFzcz1cIkF1dGhFbnRlclwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cIkF1dGhMZWF2ZVwiIG1vZGU9XCJvdXQtaW5cIj5cclxuICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJhdXRoQ29tcG9uZW50XCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICAgICAgPC92LWNhcmQ+ICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcclxuaW1wb3J0IExvZ2luSW5wdXQgZnJvbSAnfi9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dCc7XHJcbmltcG9ydCBSZWdpc3RlcklucHV0IGZyb20gJ34vY29tcG9uZW50cy9hdXRoL1JlZ2lzdGVySW5wdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG1pZGRsZXdhcmU6ICdndWVzdCcsXHJcblxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgICdsb2dpbi1pbnB1dCc6IExvZ2luSW5wdXQsXHJcbiAgICAncmVnaXN0ZXItaW5wdXQnOiBSZWdpc3RlcklucHV0XHJcbiAgfSxcclxuICBtZXRhSW5mbyAoKSB7XHJcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgnbG9naW4nKSB9XHJcbiAgfSxcclxuICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgcmVnaXN0ZXI6IGZhbHNlLFxyXG4gICAgc2lnbmluZ2luOiB0cnVlLFxyXG4gICAgc3RhdGU6ICdzaWduaW5naW4nLFxyXG4gICAgc3dpdGNoVGV4dDogZmFsc2UsXHJcbiAgICBmb3JtOiBuZXcgRm9ybSh7XHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICB9KSxcclxuICAgIHJlbWVtYmVyOiBmYWxzZVxyXG4gIH0pLFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAvLyDQktGL0YfQuNGB0LvRj9C10Lwg0YLQuNC/INC60L7QvNC/0L7QvdC10L3RgtCwLCDQt9Cw0LPQvtC70L7QstC+0Log0Lgg0YLQtdC60YHRgiDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XHJcbiAgICBhdXRoQ29tcG9uZW50KCkge1xyXG4gICAgICByZXR1cm4gKHRoaXMuc3RhdGUgPT09ICdzaWduaW5naW4nKSA/ICdsb2dpbi1pbnB1dCcgOiAncmVnaXN0ZXItaW5wdXQnO1xyXG4gICAgfSxcclxuICAgIHRpdGxlKCkge1xyXG4gICAgICByZXR1cm4gKHRoaXMuc3RhdGUgPT09ICdzaWduaW5naW4nKSA/IHRoaXMuJHQoJ2xvZ2luJykgOiB0aGlzLiR0KCdyZWdpc3RlcicpO1xyXG4gICAgfSxcclxuICAgIG1lc3NhZ2UoKSB7XHJcbiAgICAgIHJldHVybiAodGhpcy5zdGF0ZSA9PT0gJ3NpZ25pbmdpbicpID8gdGhpcy4kdCgnaGFzX25vdF9hY2NvdW50JykgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiR0KCdoYXNfYWNjb3VudCcpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdG9nZ2xlQXV0aCgpIHtcclxuICAgICAgdGhpcy5zd2l0Y2hUZXh0ID0gdHJ1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ3NpZ25pbmdpbicpID8gJ3JlZ2lzdHJhdGlvbicgOiAnc2lnbmluZ2luJztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3dpdGNoVGV4dCA9IGZhbHNlLCAxMDAwKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblxyXG4uYXV0aCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBtYXJnaW46IDMwcHggYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGhlaWdodCAuNXM7XHJcbn1cclxuXHJcblxyXG4uYXV0aC1zd2l0Y2gsXHJcbi5hdXRoLWZvcm0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAxcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjcsIDEuNTUpO1xyXG59XHJcblxyXG4uc2lnbmluZ2luIC5hdXRoLXN3aXRjaCB7XHJcbiAgbGVmdDogMCU7XHJcbn1cclxuXHJcbi5zaWduaW5naW4gLmF1dGgtZm9ybSB7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4uYXV0aC1zd2l0Y2gge1xyXG4gIGxlZnQ6IDUwJTsgXHJcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmF1dGgtc3dpdGNoX190ZXh0IHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM1cztcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogNDJweDsgIFxyXG4gIGNvbG9yOiAjOEU4RThFO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zNXM7XHJcbn1cclxuXHJcbi5BdXRoRW50ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5BdXRoTGVhdmUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5hdXRoLWZvcm0ge1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQsIGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBhZGRpbmc6IDUwcHggMzBweDtcclxufVxyXG5cclxuLmZhZGVPdXQge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA5YWUyMDJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTG9naW5JbnB1dC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTG9naW5JbnB1dC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTA5YWUyMDJlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Mb2dpbklucHV0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMDlhZTIwMmVcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXGF1dGhcXFxcTG9naW5JbnB1dC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDlhZTIwMmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wOWFlMjAyZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDlhZTIwMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Mb2dpbklucHV0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZDNmMTI4NTJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA5YWUyMDJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTG9naW5JbnB1dC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDlhZTIwMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Mb2dpbklucHV0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wOWFlMjAyZVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL0xvZ2luSW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJMb2dpbklucHV0LnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTA5YWUyMDJlXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCI8dGVtcGxhdGU+XHJcbiAgPHYtZm9ybSB2LW1vZGVsPVwidmFsaWRcIiBcclxuICAgICAgICAgIEBzdWJtaXQucHJldmVudD1cImxvZ2luXCIgXHJcbiAgICAgICAgICBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIj5cclxuICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJlbWFpbFwiLz5cclxuICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgOmxhYmVsPVwiJHQoJ2VtYWlsJylcIlxyXG4gICAgICB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiXHJcbiAgICAgIDpydWxlcz1cImVtYWlsUnVsZXNcIlxyXG4gICAgICBwcmVwZW5kLWljb249XCJlbWFpbFwiXHJcbiAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgIHJlcXVpcmVkXHJcbiAgICA+PC92LXRleHQtZmllbGQ+XHJcbiAgICBcclxuICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJwYXNzd29yZFwiIC8+XHJcbiAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgIDpsYWJlbD1cIiR0KCdwYXNzd29yZCcpXCJcclxuICAgICAgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIlxyXG4gICAgICA6cnVsZXM9XCJwYXNzd29yZFJ1bGVzXCJcclxuICAgICAgcHJlcGVuZC1pY29uPVwidnBuX2tleVwiXHJcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgIHJlcXVpcmVkXHJcbiAgICA+PC92LXRleHQtZmllbGQ+XHJcbiAgICBcclxuICAgIDx2LWNoZWNrYm94XHJcbiAgICAgIDpsYWJlbD1cIiR0KCdyZW1lbWJlcl9tZScpXCJcclxuICAgICAgdi1tb2RlbD1cInJlbWVtYmVyXCJcclxuICAgICAgbmFtZT1cInJlbWVtYmVyXCJcclxuICAgID48L3YtY2hlY2tib3g+XHJcbiAgICA8di1idG4gYmxvY2sgbGFyZ2UgdHlwZT1cInN1Ym1pdFwiIFxyXG4gICAgICAgICAgIDpsb2FkaW5nPVwiZm9ybS5idXN5XCI+XHJcbiAgICAgICAgIHt7ICR0KCdsb2dpbicpIH19XHJcbiAgICA8L3YtYnRuPlxyXG4gICAgPHYtYnRuIGZsYXQgc21hbGxcclxuICAgICAgICAgICA6dG89XCJ7IG5hbWU6ICdwYXNzd29yZC5yZXF1ZXN0JyB9XCI+XHJcbiAgICAgIHt7ICR0KCdmb3Jnb3RfcGFzc3dvcmQnKSB9fVxyXG4gICAgPC92LWJ0bj5cclxuICA8L3YtZm9ybT4gICAgICAgICBcclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJztcclxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBtaWRkbGV3YXJlOiAnZ3Vlc3QnLFxyXG5cclxuICBtZXRhSW5mbyAoKSB7XHJcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgnbG9naW4nKSB9XHJcbiAgfSxcclxuXHJcbiAgZGF0YTogKCkgPT4gKHtcclxuICAgIGZvcm06IG5ldyBGb3JtKHtcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICB9KSxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIGVtYWlsUnVsZXM6IFtcclxuICAgICAgdiA9PiAhIXYgfHwgXCLQktCy0LXQtNC40YLQtSDQt9C90LDRh9C10L3QuNC1XCJcclxuICAgIF0sXHJcbiAgICBwYXNzd29yZFJ1bGVzOiBbXHJcbiAgICAgIHYgPT4gISF2IHx8IFwi0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtVwiXHJcbiAgICBdLFxyXG4gICAgcmVtZW1iZXI6IGZhbHNlXHJcbiAgfSksXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGxvZ2luICgpIHtcclxuICAgICAgLy/QntGC0L/RgNCw0LLQutCwINGE0L7RgNC80YsuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJy9hcGkvbG9naW4nKVxyXG5cclxuICAgICAgLy8g0KHQvtGF0YDQsNC90LjRgtGMINGC0L7QutC10L0uXHJcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3NhdmVUb2tlbicsIHtcclxuICAgICAgICB0b2tlbjogZGF0YS50b2tlbixcclxuICAgICAgICByZW1lbWJlcjogdGhpcy5yZW1lbWJlclxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8g0J/QvtC70YPRh9C40YLRjCDRjtC30LXRgNCwLlxyXG4gICAgICBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9mZXRjaFVzZXInKVxyXG5cclxuICAgICAgLy8g0J/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC90LAg0LTQvtC80LDRiNC90Y7Rji5cclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnaG9tZScgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcblxyXG5cclxuXHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL0xvZ2luSW5wdXQudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtZm9ybVwiLFxuICAgIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBfdm0ubG9naW4oJGV2ZW50KVxuICAgICAgICB9LFxuICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZm9ybS5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbW9kZWw6IHtcbiAgICAgICAgdmFsdWU6IF92bS52YWxpZCxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgIF92bS52YWxpZCA9ICQkdlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiBcInZhbGlkXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImVtYWlsXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS4kdChcImVtYWlsXCIpLFxuICAgICAgICAgIHJ1bGVzOiBfdm0uZW1haWxSdWxlcyxcbiAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImVtYWlsXCIsXG4gICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVtYWlsLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImVtYWlsXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcInBhc3N3b3JkXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS4kdChcInBhc3N3b3JkXCIpLFxuICAgICAgICAgIHJ1bGVzOiBfdm0ucGFzc3dvcmRSdWxlcyxcbiAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInZwbl9rZXlcIixcbiAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgbGFiZWw6IF92bS4kdChcInJlbWVtYmVyX21lXCIpLCBuYW1lOiBcInJlbWVtYmVyXCIgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnJlbWVtYmVyLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS5yZW1lbWJlciA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJyZW1lbWJlclwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICBsb2FkaW5nOiBfdm0uZm9ybS5idXN5XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChcImxvZ2luXCIpKSArIFwiXFxuICBcIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgZmxhdDogXCJcIiwgc21hbGw6IFwiXCIsIHRvOiB7IG5hbWU6IFwicGFzc3dvcmQucmVxdWVzdFwiIH0gfSB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS4kdChcImZvcmdvdF9wYXNzd29yZFwiKSkgKyBcIlxcbiAgXCIpXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTA5YWUyMDJlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wOWFlMjAyZVwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9SZWdpc3RlcklucHV0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmUzZTVjYWNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9SZWdpc3RlcklucHV0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcYXV0aFxcXFxSZWdpc3RlcklucHV0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yZTNlNWNhY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJlM2U1Y2FjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcklucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjx0ZW1wbGF0ZT5cclxuICA8di1mb3JtIHYtbW9kZWw9XCJ2YWxpZFwiIEBzdWJtaXQucHJldmVudD1cInJlZ2lzdGVyXCIgQGtleWRvd249XCJmb3JtLm9uS2V5ZG93bigkZXZlbnQpXCI+XHJcblxyXG4gICAgPCEtLSDQmNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPIC0tPlxyXG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cIm5hbWVcIi8+XHJcbiAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgIDpsYWJlbD1cIiR0KCduYW1lJylcIlxyXG4gICAgICB2LW1vZGVsPVwiZm9ybS5uYW1lXCJcclxuICAgICAgOnJ1bGVzPVwibmFtZVJ1bGVzXCJcclxuICAgICAgOmNvdW50ZXI9XCI3MFwiXHJcbiAgICAgIHByZXBlbmQtaWNvbj1cInBlcnNvblwiXHJcbiAgICAgIHJlcXVpcmVkXHJcbiAgICA+PC92LXRleHQtZmllbGQ+XHJcblxyXG4gICAgPCEtLSDQldC80LDQuNC7IC0tPlxyXG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImVtYWlsXCIgLz5cclxuICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgOmxhYmVsPVwiJHQoJ2VtYWlsJylcIlxyXG4gICAgICB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiXHJcbiAgICAgIDpydWxlcz1cImVtYWlsUnVsZXNcIlxyXG4gICAgICA6Y291bnRlcj1cIjcwXCJcclxuICAgICAgcHJlcGVuZC1pY29uPVwiZW1haWxcIlxyXG4gICAgICByZXF1aXJlZFxyXG4gICAgPjwvdi10ZXh0LWZpZWxkPlxyXG5cclxuICAgIDwhLS0g0J/QsNGA0L7Qu9GMIC0tPlxyXG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBhc3N3b3JkXCIvPlxyXG4gICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICA6bGFiZWw9XCIkdCgncGFzc3dvcmQnKVwiXHJcbiAgICAgIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkXCJcclxuICAgICAgOnJ1bGVzPVwicGFzc3dvcmRSdWxlc1wiXHJcbiAgICAgIHByZXBlbmQtaWNvbj1cInZwbl9rZXlcIlxyXG4gICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICA6Y291bnRlcj1cIjE2MFwiXHJcbiAgICAgIHJlcXVpcmVkXHJcbiAgICA+PC92LXRleHQtZmllbGQ+XHJcblxyXG4gICAgPCEtLSDQn9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDQv9Cw0YDQvtC70Y8gLS0+XHJcbiAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIgLz5cclxuICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgOmxhYmVsPVwiJHQoJ2NvbmZpcm1fcGFzc3dvcmQnKVwiXHJcbiAgICAgIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXHJcbiAgICAgIDpydWxlcz1cInBhc3N3b3JkUnVsZXNcIlxyXG4gICAgICBwcmVwZW5kLWljb249XCJ2cG5fa2V5XCJcclxuICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgOmNvdW50ZXI9XCIxNjBcIlxyXG4gICAgICByZXF1aXJlZFxyXG4gICAgPjwvdi10ZXh0LWZpZWxkPlxyXG5cclxuICAgIDwhLS0g0J7RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvNGLIC0tPlxyXG4gICAgPHYtYnRuIGxhcmdlIGJsb2NrIDpsb2FkaW5nPVwiZm9ybS5idXN5XCIgdHlwZT1cInN1Ym1pdFwiPnt7ICR0KCdyZWdpc3RlcicpIH19PC92LWJ0bj5cclxuICA8L3YtZm9ybT5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBtaWRkbGV3YXJlOiAnZ3Vlc3QnLFxyXG4gIFxyXG4gIG1ldGFJbmZvICgpIHtcclxuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdyZWdpc3RlcicpIH1cclxuICB9LFxyXG5cclxuICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgZm9ybTogbmV3IEZvcm0oe1xyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgbGFzdF9uYW1lOiAnbGFzdCcsXHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnXHJcbiAgICB9KSxcclxuICAgIHZhbGlkOiBmYWxzZSxcclxuICAgIG5hbWVSdWxlczogW1xyXG4gICAgICB2ID0+ICEhdiB8fCBcItCS0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LVcIixcclxuICAgICAgdiA9PiB2Lmxlbmd0aCA+PSAyIHx8ICdOYW1lIG11c3QgYmUgbGVzcyB0aGFuIDIgY2hhcmFjdGVycydcclxuICAgIF0sXHJcbiAgICBlbWFpbFJ1bGVzOiBbXHJcbiAgICAgIHYgPT4gISF2IHx8IFwi0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtVwiLFxyXG4gICAgICB2ID0+IC9eXFx3KyhbLi1dP1xcdyspKkBcXHcrKFsuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLy50ZXN0KHYpIHx8ICdFLW1haWwgbXVzdCBiZSB2YWxpZCdcclxuICAgIF0sXHJcbiAgICBwYXNzd29yZFJ1bGVzOiBbXHJcbiAgICAgIHYgPT4gISF2IHx8IFwi0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtVwiXHJcbiAgICBdXHJcbiAgfSksXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIHJlZ2lzdGVyICgpIHtcclxuICAgICAgLy8g0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8uXHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJy9hcGkvcmVnaXN0ZXInKVxyXG5cclxuICAgICAgIC8vINCS0YXQvtC0INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjy5cclxuICAgICAgY29uc3QgeyBkYXRhOiB7IHRva2VuIH19ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJy9hcGkvbG9naW4nKVxyXG5cclxuICAgICAgIC8vINCh0L7RhdGA0LDQvdC40YLRjCDRgtC+0LrQtdC9LlxyXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9zYXZlVG9rZW4nLCB7IHRva2VuIH0pXHJcblxyXG4gICAgICAgLy8g0J7QsdC90L7QstC70LXQvdC40LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLlxyXG4gICAgICBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC91cGRhdGVVc2VyJywgeyAuLi5kYXRhIH0pXHJcblxyXG4gICAgICAgLy8g0J/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC90LAg0LTQvtC80LDRiNC90Y7Rji5cclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnaG9tZScgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcklucHV0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWZvcm1cIixcbiAgICB7XG4gICAgICBvbjoge1xuICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgX3ZtLnJlZ2lzdGVyKCRldmVudClcbiAgICAgICAgfSxcbiAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmZvcm0ub25LZXlkb3duKCRldmVudClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiBfdm0udmFsaWQsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICBfdm0udmFsaWQgPSAkJHZcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJuYW1lXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS4kdChcIm5hbWVcIiksXG4gICAgICAgICAgcnVsZXM6IF92bS5uYW1lUnVsZXMsXG4gICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJwZXJzb25cIixcbiAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJlbWFpbFwiKSxcbiAgICAgICAgICBydWxlczogX3ZtLmVtYWlsUnVsZXMsXG4gICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJlbWFpbFwiLFxuICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVtYWlsLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImVtYWlsXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcInBhc3N3b3JkXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS4kdChcInBhc3N3b3JkXCIpLFxuICAgICAgICAgIHJ1bGVzOiBfdm0ucGFzc3dvcmRSdWxlcyxcbiAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInZwbl9rZXlcIixcbiAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgY291bnRlcjogMTYwLFxuICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiY29uZmlybV9wYXNzd29yZFwiKSxcbiAgICAgICAgICBydWxlczogX3ZtLnBhc3N3b3JkUnVsZXMsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJ2cG5fa2V5XCIsXG4gICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgIGNvdW50ZXI6IDE2MCxcbiAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb24sXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb25cIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhcmdlOiBcIlwiLFxuICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICBsb2FkaW5nOiBfdm0uZm9ybS5idXN5LFxuICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwicmVnaXN0ZXJcIikpKV1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yZTNlNWNhY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMmUzZTVjYWNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcklucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhdXRoLXdyYXBwZXJcIiwgY2xhc3M6IF92bS5zdGF0ZSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhdXRoXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhdXRoLXN3aXRjaFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhdXRoLXN3aXRjaF9fdGV4dFwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgZmFkZUluOiAhX3ZtLnN3aXRjaFRleHQsIGZhZGVPdXQ6IF92bS5zd2l0Y2hUZXh0IH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIiBcIiArIF92bS5fcyhfdm0udGl0bGUpICsgXCIgXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGVBdXRoKCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5tZXNzYWdlKSldXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImF1dGgtZm9ybVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGhlaWdodDogXCI1MDBcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZW50ZXItYWN0aXZlLWNsYXNzXCI6IFwiQXV0aEVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IFwiQXV0aExlYXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IFwib3V0LWluXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhfdm0uYXV0aENvbXBvbmVudCwgeyB0YWc6IFwiY29tcG9uZW50XCIgfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi02ZTZlM2Q2OFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNmU2ZTNkNjhcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9