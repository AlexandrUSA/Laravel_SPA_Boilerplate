webpackJsonp([2],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(158)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(160)
/* template */
var __vue_template__ = __webpack_require__(169)
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

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
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

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.auth[data-v-6e6e3d68] {\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n  height: 500px;\n  margin: 30px auto;\n  overflow: hidden;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n  border: 0px solid transparent;\n  -webkit-transition: background-color 1s, height .5s;\n  transition: background-color 1s, height .5s;\n}\n.auth-switch[data-v-6e6e3d68],\n.auth-form[data-v-6e6e3d68] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  -webkit-transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n.signingin .auth-switch[data-v-6e6e3d68] {\n  left: 0%;\n}\n.signingin .auth-form[data-v-6e6e3d68] {\n  left: 50%;\n}\n.auth-switch[data-v-6e6e3d68] {\n  left: 50%;\n  padding-top: 120px;\n  text-align: center;\n}\n.auth-switch__text[data-v-6e6e3d68] {\n  -webkit-transition: -webkit-transform .35s;\n  transition: -webkit-transform .35s;\n  transition: transform .35s;\n  transition: transform .35s, -webkit-transform .35s;\n}\nh2[data-v-6e6e3d68] {\n  text-align: center;\n}\n.icon[data-v-6e6e3d68] {\n  font-size: 42px;\n  color: #8E8E8E;\n}\nform[data-v-6e6e3d68] {\n  -webkit-transition: opacity .35s;\n  transition: opacity .35s;\n}\n.AuthEnter[data-v-6e6e3d68] {\n  opacity: 1;\n}\n.AuthLeave[data-v-6e6e3d68] {\n  opacity: 0;\n}\n.auth-form[data-v-6e6e3d68] {\n  left: 0%;\n  z-index: 2;\n  text-align: center;\n  -webkit-transition-property: left, background-color;\n  transition-property: left, background-color;\n  -webkit-box-shadow: 0 0 15px #000;\n          box-shadow: 0 0 15px #000;\n}\n.card[data-v-6e6e3d68] {\n  padding: 50px 30px;\n}\n.fadeOut[data-v-6e6e3d68] {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.fadeIn[data-v-6e6e3d68] {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/auth/login.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,oDAA4C;UAA5C,4CAA4C;EAC5C,8BAA8B;EAC9B,oDAA4C;EAA5C,4CAA4C;CAAE;AAEhD;;EAEE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,6DAAqD;EAArD,qDAAqD;CAAE;AAEzD;EACE,SAAS;CAAE;AAEb;EACE,UAAU;CAAE;AAEd;EACE,UAAU;EACV,mBAAmB;EACnB,mBAAmB;CAAE;AAEvB;EACE,2CAA2B;EAA3B,mCAA2B;EAA3B,2BAA2B;EAA3B,mDAA2B;CAAE;AAE/B;EACE,mBAAmB;CAAE;AAEvB;EACE,gBAAgB;EAChB,eAAe;CAAE;AAEnB;EACE,iCAAyB;EAAzB,yBAAyB;CAAE;AAE7B;EACE,WAAW;CAAE;AAEf;EACE,WAAW;CAAE;AAEf;EACE,SAAS;EACT,WAAW;EACX,mBAAmB;EACnB,oDAA4C;EAA5C,4CAA4C;EAC5C,kCAA0B;UAA1B,0BAA0B;CAAE;AAE9B;EACE,mBAAmB;CAAE;AAEvB;EACE,4BAAoB;UAApB,oBAAoB;CAAE;AAExB;EACE,4BAAoB;UAApB,oBAAoB;CAAE","file":"login.vue","sourcesContent":[".auth {\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n  height: 500px;\n  margin: 30px auto;\n  overflow: hidden;\n  border-radius: 6px;\n  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n  border: 0px solid transparent;\n  transition: background-color 1s, height .5s; }\n\n.auth-switch,\n.auth-form {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55); }\n\n.signingin .auth-switch {\n  left: 0%; }\n\n.signingin .auth-form {\n  left: 50%; }\n\n.auth-switch {\n  left: 50%;\n  padding-top: 120px;\n  text-align: center; }\n\n.auth-switch__text {\n  transition: transform .35s; }\n\nh2 {\n  text-align: center; }\n\n.icon {\n  font-size: 42px;\n  color: #8E8E8E; }\n\nform {\n  transition: opacity .35s; }\n\n.AuthEnter {\n  opacity: 1; }\n\n.AuthLeave {\n  opacity: 0; }\n\n.auth-form {\n  left: 0%;\n  z-index: 2;\n  text-align: center;\n  transition-property: left, background-color;\n  box-shadow: 0 0 15px #000; }\n\n.card {\n  padding: 50px 30px; }\n\n.fadeOut {\n  transform: scale(0); }\n\n.fadeIn {\n  transform: scale(1); }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vform__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_auth_LoginInput__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_auth_LoginInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_auth_LoginInput__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_RegisterInput__ = __webpack_require__(166);
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

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(162)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(164)
/* template */
var __vue_template__ = __webpack_require__(165)
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

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
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

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"LoginInput.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(8);


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

  methods: _extends({
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
                console.log('logged');
                this.loadContent();
                // Перенаправление на домашнюю.
                this.$router.push({ name: 'home' });

              case 10:
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
  }, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])({
    employees: 'employees/load',
    departments: 'departments/load',
    positions: 'positions/load'
  }), {
    loadContent: function loadContent() {
      this.employees();
      this.departments();
      this.positions();
    }
  })
});

/***/ }),

/***/ 165:
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

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(167)
/* template */
var __vue_template__ = __webpack_require__(168)
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

/***/ 167:
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

/***/ 169:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWU/NjBhZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlPzk3MjkiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dC52dWU/MmVlZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZT80YTUzIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZT8xNjQwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL1JlZ2lzdGVySW5wdXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcklucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9SZWdpc3RlcklucHV0LnZ1ZT80ODUxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWU/NDI2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzIuMDM5OTY5ZTFiMDhiMTk0NmU5NjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZlNmUzZDY4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmU2ZTNkNjhcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNmU2ZTNkNjhcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhdXRoXFxcXGxvZ2luLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZTZlM2Q2OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZlNmUzZDY4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZlNmUzZDY4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI3MTNlMmI1ZVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02ZTZlM2Q2OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02ZTZlM2Q2OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02ZTZlM2Q2OFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmF1dGhbZGF0YS12LTZlNmUzZDY4XSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luOiAzMHB4IGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGhlaWdodCAuNXM7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzLCBoZWlnaHQgLjVzO1xcbn1cXG4uYXV0aC1zd2l0Y2hbZGF0YS12LTZlNmUzZDY4XSxcXG4uYXV0aC1mb3JtW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjU1KTtcXG4gIHRyYW5zaXRpb246IDFzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNywgMS41NSk7XFxufVxcbi5zaWduaW5naW4gLmF1dGgtc3dpdGNoW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgbGVmdDogMCU7XFxufVxcbi5zaWduaW5naW4gLmF1dGgtZm9ybVtkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuLmF1dGgtc3dpdGNoW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgbGVmdDogNTAlO1xcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYXV0aC1zd2l0Y2hfX3RleHRbZGF0YS12LTZlNmUzZDY4XSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zNXM7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMzVzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gLjM1cztcXG59XFxuaDJbZGF0YS12LTZlNmUzZDY4XSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pY29uW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgY29sb3I6ICM4RThFOEU7XFxufVxcbmZvcm1bZGF0YS12LTZlNmUzZDY4XSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjM1cztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjM1cztcXG59XFxuLkF1dGhFbnRlcltkYXRhLXYtNmU2ZTNkNjhdIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5BdXRoTGVhdmVbZGF0YS12LTZlNmUzZDY4XSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uYXV0aC1mb3JtW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgbGVmdDogMCU7XFxuICB6LWluZGV4OiAyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCwgYmFja2dyb3VuZC1jb2xvcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXG59XFxuLmNhcmRbZGF0YS12LTZlNmUzZDY4XSB7XFxuICBwYWRkaW5nOiA1MHB4IDMwcHg7XFxufVxcbi5mYWRlT3V0W2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4uZmFkZUluW2RhdGEtdi02ZTZlM2Q2OF0ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL2NybS9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvREFBNEM7VUFBNUMsNENBQTRDO0VBQzVDLDhCQUE4QjtFQUM5QixvREFBNEM7RUFBNUMsNENBQTRDO0NBQUU7QUFFaEQ7O0VBRUUsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkRBQXFEO0VBQXJELHFEQUFxRDtDQUFFO0FBRXpEO0VBQ0UsU0FBUztDQUFFO0FBRWI7RUFDRSxVQUFVO0NBQUU7QUFFZDtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQUU7QUFFdkI7RUFDRSwyQ0FBMkI7RUFBM0IsbUNBQTJCO0VBQTNCLDJCQUEyQjtFQUEzQixtREFBMkI7Q0FBRTtBQUUvQjtFQUNFLG1CQUFtQjtDQUFFO0FBRXZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FBRTtBQUVuQjtFQUNFLGlDQUF5QjtFQUF6Qix5QkFBeUI7Q0FBRTtBQUU3QjtFQUNFLFdBQVc7Q0FBRTtBQUVmO0VBQ0UsV0FBVztDQUFFO0FBRWY7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvREFBNEM7RUFBNUMsNENBQTRDO0VBQzVDLGtDQUEwQjtVQUExQiwwQkFBMEI7Q0FBRTtBQUU5QjtFQUNFLG1CQUFtQjtDQUFFO0FBRXZCO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtDQUFFO0FBRXhCO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtDQUFFXCIsXCJmaWxlXCI6XCJsb2dpbi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmF1dGgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGhlaWdodCAuNXM7IH1cXG5cXG4uYXV0aC1zd2l0Y2gsXFxuLmF1dGgtZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogMXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI3LCAxLjU1KTsgfVxcblxcbi5zaWduaW5naW4gLmF1dGgtc3dpdGNoIHtcXG4gIGxlZnQ6IDAlOyB9XFxuXFxuLnNpZ25pbmdpbiAuYXV0aC1mb3JtIHtcXG4gIGxlZnQ6IDUwJTsgfVxcblxcbi5hdXRoLXN3aXRjaCB7XFxuICBsZWZ0OiA1MCU7XFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uYXV0aC1zd2l0Y2hfX3RleHQge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXM7IH1cXG5cXG5oMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uaWNvbiB7XFxuICBmb250LXNpemU6IDQycHg7XFxuICBjb2xvcjogIzhFOEU4RTsgfVxcblxcbmZvcm0ge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMzVzOyB9XFxuXFxuLkF1dGhFbnRlciB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLkF1dGhMZWF2ZSB7XFxuICBvcGFjaXR5OiAwOyB9XFxuXFxuLmF1dGgtZm9ybSB7XFxuICBsZWZ0OiAwJTtcXG4gIHotaW5kZXg6IDI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDsgfVxcblxcbi5jYXJkIHtcXG4gIHBhZGRpbmc6IDUwcHggMzBweDsgfVxcblxcbi5mYWRlT3V0IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG5cXG4uZmFkZUluIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNmU2ZTNkNjhcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJhdXRoLXdyYXBwZXJcIiA6Y2xhc3M9XCJzdGF0ZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImF1dGhcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImF1dGgtc3dpdGNoXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImF1dGgtc3dpdGNoX190ZXh0XCJcclxuICAgICAgICAgICAgIDpjbGFzcz1cInsnZmFkZUluJzogIXN3aXRjaFRleHQsICdmYWRlT3V0Jzogc3dpdGNoVGV4dH1cIj5cclxuICAgICAgICAgIDxoMj4ge3sgdGl0bGUgfX0gPC9oMj4gXHJcbiAgICAgICAgICA8di1idG4gQGNsaWNrLnByZXZlbnQ9XCJ0b2dnbGVBdXRoXCI+e3ttZXNzYWdlfX08L3YtYnRuPlxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhdXRoLWZvcm1cIj5cclxuICAgICAgICA8di1jYXJkIGhlaWdodD1cIjUwMFwiPlxyXG4gICAgICAgICAgPHRyYW5zaXRpb24gIGVudGVyLWFjdGl2ZS1jbGFzcz1cIkF1dGhFbnRlclwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cIkF1dGhMZWF2ZVwiIG1vZGU9XCJvdXQtaW5cIj5cclxuICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJhdXRoQ29tcG9uZW50XCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICAgICAgPC92LWNhcmQ+ICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcclxuaW1wb3J0IExvZ2luSW5wdXQgZnJvbSAnfi9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dCc7XHJcbmltcG9ydCBSZWdpc3RlcklucHV0IGZyb20gJ34vY29tcG9uZW50cy9hdXRoL1JlZ2lzdGVySW5wdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG1pZGRsZXdhcmU6ICdndWVzdCcsXHJcblxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgICdsb2dpbi1pbnB1dCc6IExvZ2luSW5wdXQsXHJcbiAgICAncmVnaXN0ZXItaW5wdXQnOiBSZWdpc3RlcklucHV0XHJcbiAgfSxcclxuICBtZXRhSW5mbyAoKSB7XHJcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgnbG9naW4nKSB9XHJcbiAgfSxcclxuICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgcmVnaXN0ZXI6IGZhbHNlLFxyXG4gICAgc2lnbmluZ2luOiB0cnVlLFxyXG4gICAgc3RhdGU6ICdzaWduaW5naW4nLFxyXG4gICAgc3dpdGNoVGV4dDogZmFsc2UsXHJcbiAgICBmb3JtOiBuZXcgRm9ybSh7XHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICB9KSxcclxuICAgIHJlbWVtYmVyOiBmYWxzZVxyXG4gIH0pLFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAvLyDQktGL0YfQuNGB0LvRj9C10Lwg0YLQuNC/INC60L7QvNC/0L7QvdC10L3RgtCwLCDQt9Cw0LPQvtC70L7QstC+0Log0Lgg0YLQtdC60YHRgiDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XHJcbiAgICBhdXRoQ29tcG9uZW50KCkge1xyXG4gICAgICByZXR1cm4gKHRoaXMuc3RhdGUgPT09ICdzaWduaW5naW4nKSA/ICdsb2dpbi1pbnB1dCcgOiAncmVnaXN0ZXItaW5wdXQnO1xyXG4gICAgfSxcclxuICAgIHRpdGxlKCkge1xyXG4gICAgICByZXR1cm4gKHRoaXMuc3RhdGUgPT09ICdzaWduaW5naW4nKSA/IHRoaXMuJHQoJ2xvZ2luJykgOiB0aGlzLiR0KCdyZWdpc3RlcicpO1xyXG4gICAgfSxcclxuICAgIG1lc3NhZ2UoKSB7XHJcbiAgICAgIHJldHVybiAodGhpcy5zdGF0ZSA9PT0gJ3NpZ25pbmdpbicpID8gdGhpcy4kdCgnaGFzX25vdF9hY2NvdW50JykgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiR0KCdoYXNfYWNjb3VudCcpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdG9nZ2xlQXV0aCgpIHtcclxuICAgICAgdGhpcy5zd2l0Y2hUZXh0ID0gdHJ1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ3NpZ25pbmdpbicpID8gJ3JlZ2lzdHJhdGlvbicgOiAnc2lnbmluZ2luJztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3dpdGNoVGV4dCA9IGZhbHNlLCAxMDAwKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblxyXG4uYXV0aCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBtYXJnaW46IDMwcHggYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMsIGhlaWdodCAuNXM7XHJcbn1cclxuXHJcblxyXG4uYXV0aC1zd2l0Y2gsXHJcbi5hdXRoLWZvcm0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAxcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjcsIDEuNTUpO1xyXG59XHJcblxyXG4uc2lnbmluZ2luIC5hdXRoLXN3aXRjaCB7XHJcbiAgbGVmdDogMCU7XHJcbn1cclxuXHJcbi5zaWduaW5naW4gLmF1dGgtZm9ybSB7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4uYXV0aC1zd2l0Y2gge1xyXG4gIGxlZnQ6IDUwJTsgXHJcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmF1dGgtc3dpdGNoX190ZXh0IHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM1cztcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogNDJweDsgIFxyXG4gIGNvbG9yOiAjOEU4RThFO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zNXM7XHJcbn1cclxuXHJcbi5BdXRoRW50ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5BdXRoTGVhdmUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5hdXRoLWZvcm0ge1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQsIGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBhZGRpbmc6IDUwcHggMzBweDtcclxufVxyXG5cclxuLmZhZGVPdXQge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi52dWUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTA5YWUyMDJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTG9naW5JbnB1dC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTG9naW5JbnB1dC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTA5YWUyMDJlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Mb2dpbklucHV0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMDlhZTIwMmVcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXGF1dGhcXFxcTG9naW5JbnB1dC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDlhZTIwMmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wOWFlMjAyZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDE2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDlhZTIwMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Mb2dpbklucHV0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYTg5M2U2YzJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDlhZTIwMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Mb2dpbklucHV0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wOWFlMjAyZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xvZ2luSW5wdXQudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTA5YWUyMDJlXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvTG9naW5JbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIkxvZ2luSW5wdXQudnVlXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMDlhZTIwMmVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjx0ZW1wbGF0ZT5cclxuICA8di1mb3JtIHYtbW9kZWw9XCJ2YWxpZFwiIFxyXG4gICAgICAgICAgQHN1Ym1pdC5wcmV2ZW50PVwibG9naW5cIiBcclxuICAgICAgICAgIEBrZXlkb3duPVwiZm9ybS5vbktleWRvd24oJGV2ZW50KVwiPlxyXG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImVtYWlsXCIvPlxyXG4gICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICA6bGFiZWw9XCIkdCgnZW1haWwnKVwiXHJcbiAgICAgIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCJcclxuICAgICAgOnJ1bGVzPVwiZW1haWxSdWxlc1wiXHJcbiAgICAgIHByZXBlbmQtaWNvbj1cImVtYWlsXCJcclxuICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgcmVxdWlyZWRcclxuICAgID48L3YtdGV4dC1maWVsZD5cclxuICAgIFxyXG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBhc3N3b3JkXCIgLz5cclxuICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgOmxhYmVsPVwiJHQoJ3Bhc3N3b3JkJylcIlxyXG4gICAgICB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiXHJcbiAgICAgIDpydWxlcz1cInBhc3N3b3JkUnVsZXNcIlxyXG4gICAgICBwcmVwZW5kLWljb249XCJ2cG5fa2V5XCJcclxuICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgcmVxdWlyZWRcclxuICAgID48L3YtdGV4dC1maWVsZD5cclxuICAgIFxyXG4gICAgPHYtY2hlY2tib3hcclxuICAgICAgOmxhYmVsPVwiJHQoJ3JlbWVtYmVyX21lJylcIlxyXG4gICAgICB2LW1vZGVsPVwicmVtZW1iZXJcIlxyXG4gICAgICBuYW1lPVwicmVtZW1iZXJcIlxyXG4gICAgPjwvdi1jaGVja2JveD5cclxuICAgIDx2LWJ0biBibG9jayBsYXJnZSB0eXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICAgOmxvYWRpbmc9XCJmb3JtLmJ1c3lcIj5cclxuICAgICAgICAge3sgJHQoJ2xvZ2luJykgfX1cclxuICAgIDwvdi1idG4+XHJcbiAgICA8di1idG4gZmxhdCBzbWFsbFxyXG4gICAgICAgICAgIDp0bz1cInsgbmFtZTogJ3Bhc3N3b3JkLnJlcXVlc3QnIH1cIj5cclxuICAgICAge3sgJHQoJ2ZvcmdvdF9wYXNzd29yZCcpIH19XHJcbiAgICA8L3YtYnRuPlxyXG4gIDwvdi1mb3JtPiAgICAgICAgIFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nO1xyXG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG1pZGRsZXdhcmU6ICdndWVzdCcsXHJcblxyXG4gIG1ldGFJbmZvICgpIHtcclxuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdsb2dpbicpIH1cclxuICB9LFxyXG5cclxuICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgZm9ybTogbmV3IEZvcm0oe1xyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIH0pLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgZW1haWxSdWxlczogW1xyXG4gICAgICB2ID0+ICEhdiB8fCBcItCS0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LVcIlxyXG4gICAgXSxcclxuICAgIHBhc3N3b3JkUnVsZXM6IFtcclxuICAgICAgdiA9PiAhIXYgfHwgXCLQktCy0LXQtNC40YLQtSDQt9C90LDRh9C10L3QuNC1XCJcclxuICAgIF0sXHJcbiAgICByZW1lbWJlcjogZmFsc2VcclxuICB9KSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgbG9naW4gKCkge1xyXG4gICAgICAvL9Ce0YLQv9GA0LDQstC60LAg0YTQvtGA0LzRiy5cclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmZvcm0ucG9zdCgnL2FwaS9sb2dpbicpXHJcblxyXG4gICAgICAvLyDQodC+0YXRgNCw0L3QuNGC0Ywg0YLQvtC60LXQvS5cclxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvc2F2ZVRva2VuJywge1xyXG4gICAgICAgIHRva2VuOiBkYXRhLnRva2VuLFxyXG4gICAgICAgIHJlbWVtYmVyOiB0aGlzLnJlbWVtYmVyXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyDQn9C+0LvRg9GH0LjRgtGMINGO0LfQtdGA0LAuXHJcbiAgICAgIGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL2ZldGNoVXNlcicpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdsb2dnZWQnKTtcclxuICAgICAgdGhpcy5sb2FkQ29udGVudCgpO1xyXG4gICAgICAvLyDQn9C10YDQtdC90LDQv9GA0LDQstC70LXQvdC40LUg0L3QsCDQtNC+0LzQsNGI0L3RjtGOLlxyXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJyB9KVxyXG4gICAgfSxcclxuICAgIC4uLm1hcEFjdGlvbnMoe1xyXG4gICAgICBlbXBsb3llZXM6ICdlbXBsb3llZXMvbG9hZCcsXHJcbiAgICAgIGRlcGFydG1lbnRzOiAnZGVwYXJ0bWVudHMvbG9hZCcsXHJcbiAgICAgIHBvc2l0aW9uczogJ3Bvc2l0aW9ucy9sb2FkJ1xyXG4gICAgfSksXHJcbiAgICBsb2FkQ29udGVudCgpIHtcclxuICAgICAgdGhpcy5lbXBsb3llZXMoKTtcclxuICAgICAgdGhpcy5kZXBhcnRtZW50cygpO1xyXG4gICAgICB0aGlzLnBvc2l0aW9ucygpOyAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5cclxuXHJcblxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9Mb2dpbklucHV0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWZvcm1cIixcbiAgICB7XG4gICAgICBvbjoge1xuICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgX3ZtLmxvZ2luKCRldmVudClcbiAgICAgICAgfSxcbiAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmZvcm0ub25LZXlkb3duKCRldmVudClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiBfdm0udmFsaWQsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICBfdm0udmFsaWQgPSAkJHZcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJlbWFpbFwiKSxcbiAgICAgICAgICBydWxlczogX3ZtLmVtYWlsUnVsZXMsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJlbWFpbFwiLFxuICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1haWxcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJwYXNzd29yZFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwYXNzd29yZFwiKSxcbiAgICAgICAgICBydWxlczogX3ZtLnBhc3N3b3JkUnVsZXMsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJ2cG5fa2V5XCIsXG4gICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1jaGVja2JveFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGxhYmVsOiBfdm0uJHQoXCJyZW1lbWJlcl9tZVwiKSwgbmFtZTogXCJyZW1lbWJlclwiIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5yZW1lbWJlcixcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0ucmVtZW1iZXIgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwicmVtZW1iZXJcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgbG9hZGluZzogX3ZtLmZvcm0uYnVzeVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoXCJsb2dpblwiKSkgKyBcIlxcbiAgXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7IGF0dHJzOiB7IGZsYXQ6IFwiXCIsIHNtYWxsOiBcIlwiLCB0bzogeyBuYW1lOiBcInBhc3N3b3JkLnJlcXVlc3RcIiB9IH0gfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0uJHQoXCJmb3Jnb3RfcGFzc3dvcmRcIikpICsgXCJcXG4gIFwiKV1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wOWFlMjAyZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDlhZTIwMmVcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL0xvZ2luSW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUmVnaXN0ZXJJbnB1dC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTJlM2U1Y2FjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUmVnaXN0ZXJJbnB1dC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXGF1dGhcXFxcUmVnaXN0ZXJJbnB1dC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmUzZTVjYWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yZTNlNWNhY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvUmVnaXN0ZXJJbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCI8dGVtcGxhdGU+XHJcbiAgPHYtZm9ybSB2LW1vZGVsPVwidmFsaWRcIiBAc3VibWl0LnByZXZlbnQ9XCJyZWdpc3RlclwiIEBrZXlkb3duPVwiZm9ybS5vbktleWRvd24oJGV2ZW50KVwiPlxyXG5cclxuICAgIDwhLS0g0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyAtLT5cclxuICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJuYW1lXCIvPlxyXG4gICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICA6bGFiZWw9XCIkdCgnbmFtZScpXCJcclxuICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZVwiXHJcbiAgICAgIDpydWxlcz1cIm5hbWVSdWxlc1wiXHJcbiAgICAgIDpjb3VudGVyPVwiNzBcIlxyXG4gICAgICBwcmVwZW5kLWljb249XCJwZXJzb25cIlxyXG4gICAgICByZXF1aXJlZFxyXG4gICAgPjwvdi10ZXh0LWZpZWxkPlxyXG5cclxuICAgIDwhLS0g0JXQvNCw0LjQuyAtLT5cclxuICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJlbWFpbFwiIC8+XHJcbiAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgIDpsYWJlbD1cIiR0KCdlbWFpbCcpXCJcclxuICAgICAgdi1tb2RlbD1cImZvcm0uZW1haWxcIlxyXG4gICAgICA6cnVsZXM9XCJlbWFpbFJ1bGVzXCJcclxuICAgICAgOmNvdW50ZXI9XCI3MFwiXHJcbiAgICAgIHByZXBlbmQtaWNvbj1cImVtYWlsXCJcclxuICAgICAgcmVxdWlyZWRcclxuICAgID48L3YtdGV4dC1maWVsZD5cclxuXHJcbiAgICA8IS0tINCf0LDRgNC+0LvRjCAtLT5cclxuICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJwYXNzd29yZFwiLz5cclxuICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgOmxhYmVsPVwiJHQoJ3Bhc3N3b3JkJylcIlxyXG4gICAgICB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiXHJcbiAgICAgIDpydWxlcz1cInBhc3N3b3JkUnVsZXNcIlxyXG4gICAgICBwcmVwZW5kLWljb249XCJ2cG5fa2V5XCJcclxuICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgOmNvdW50ZXI9XCIxNjBcIlxyXG4gICAgICByZXF1aXJlZFxyXG4gICAgPjwvdi10ZXh0LWZpZWxkPlxyXG5cclxuICAgIDwhLS0g0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0L/QsNGA0L7Qu9GPIC0tPlxyXG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIC8+XHJcbiAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgIDpsYWJlbD1cIiR0KCdjb25maXJtX3Bhc3N3b3JkJylcIlxyXG4gICAgICB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb25cIlxyXG4gICAgICA6cnVsZXM9XCJwYXNzd29yZFJ1bGVzXCJcclxuICAgICAgcHJlcGVuZC1pY29uPVwidnBuX2tleVwiXHJcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgIDpjb3VudGVyPVwiMTYwXCJcclxuICAgICAgcmVxdWlyZWRcclxuICAgID48L3YtdGV4dC1maWVsZD5cclxuXHJcbiAgICA8IS0tINCe0YLQv9GA0LDQstC60LAg0YTQvtGA0LzRiyAtLT5cclxuICAgIDx2LWJ0biBsYXJnZSBibG9jayA6bG9hZGluZz1cImZvcm0uYnVzeVwiIHR5cGU9XCJzdWJtaXRcIj57eyAkdCgncmVnaXN0ZXInKSB9fTwvdi1idG4+XHJcbiAgPC92LWZvcm0+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbWlkZGxld2FyZTogJ2d1ZXN0JyxcclxuICBcclxuICBtZXRhSW5mbyAoKSB7XHJcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgncmVnaXN0ZXInKSB9XHJcbiAgfSxcclxuXHJcbiAgZGF0YTogKCkgPT4gKHtcclxuICAgIGZvcm06IG5ldyBGb3JtKHtcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIGxhc3RfbmFtZTogJ2xhc3QnLFxyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJ1xyXG4gICAgfSksXHJcbiAgICB2YWxpZDogZmFsc2UsXHJcbiAgICBuYW1lUnVsZXM6IFtcclxuICAgICAgdiA9PiAhIXYgfHwgXCLQktCy0LXQtNC40YLQtSDQt9C90LDRh9C10L3QuNC1XCIsXHJcbiAgICAgIHYgPT4gdi5sZW5ndGggPj0gMiB8fCAnTmFtZSBtdXN0IGJlIGxlc3MgdGhhbiAyIGNoYXJhY3RlcnMnXHJcbiAgICBdLFxyXG4gICAgZW1haWxSdWxlczogW1xyXG4gICAgICB2ID0+ICEhdiB8fCBcItCS0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LVcIixcclxuICAgICAgdiA9PiAvXlxcdysoWy4tXT9cXHcrKSpAXFx3KyhbLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8udGVzdCh2KSB8fCAnRS1tYWlsIG11c3QgYmUgdmFsaWQnXHJcbiAgICBdLFxyXG4gICAgcGFzc3dvcmRSdWxlczogW1xyXG4gICAgICB2ID0+ICEhdiB8fCBcItCS0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LVcIlxyXG4gICAgXVxyXG4gIH0pLFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBhc3luYyByZWdpc3RlciAoKSB7XHJcbiAgICAgIC8vINCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPLlxyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZm9ybS5wb3N0KCcvYXBpL3JlZ2lzdGVyJylcclxuXHJcbiAgICAgICAvLyDQktGF0L7QtCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8uXHJcbiAgICAgIGNvbnN0IHsgZGF0YTogeyB0b2tlbiB9fSA9IGF3YWl0IHRoaXMuZm9ybS5wb3N0KCcvYXBpL2xvZ2luJylcclxuXHJcbiAgICAgICAvLyDQodC+0YXRgNCw0L3QuNGC0Ywg0YLQvtC60LXQvS5cclxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvc2F2ZVRva2VuJywgeyB0b2tlbiB9KVxyXG5cclxuICAgICAgIC8vINCe0LHQvdC+0LLQu9C10L3QuNC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjy5cclxuICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvdXBkYXRlVXNlcicsIHsgLi4uZGF0YSB9KVxyXG5cclxuICAgICAgIC8vINCf0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQvdCwINC00L7QvNCw0YjQvdGO0Y4uXHJcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWUnIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvUmVnaXN0ZXJJbnB1dC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1mb3JtXCIsXG4gICAge1xuICAgICAgb246IHtcbiAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIF92bS5yZWdpc3RlcigkZXZlbnQpXG4gICAgICAgIH0sXG4gICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5mb3JtLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtb2RlbDoge1xuICAgICAgICB2YWx1ZTogX3ZtLnZhbGlkLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgX3ZtLnZhbGlkID0gJCR2XG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IFwidmFsaWRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJoYXMtZXJyb3JcIiwgeyBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwibmFtZVwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJuYW1lXCIpLFxuICAgICAgICAgIHJ1bGVzOiBfdm0ubmFtZVJ1bGVzLFxuICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwicGVyc29uXCIsXG4gICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoYXMtZXJyb3JcIiwgeyBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiZW1haWxcIiB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiZW1haWxcIiksXG4gICAgICAgICAgcnVsZXM6IF92bS5lbWFpbFJ1bGVzLFxuICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZW1haWxcIixcbiAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1haWxcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJwYXNzd29yZFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwYXNzd29yZFwiKSxcbiAgICAgICAgICBydWxlczogX3ZtLnBhc3N3b3JkUnVsZXMsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJ2cG5fa2V5XCIsXG4gICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgIGNvdW50ZXI6IDE2MCxcbiAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwYXNzd29yZFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFzc3dvcmRcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS4kdChcImNvbmZpcm1fcGFzc3dvcmRcIiksXG4gICAgICAgICAgcnVsZXM6IF92bS5wYXNzd29yZFJ1bGVzLFxuICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwidnBuX2tleVwiLFxuICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICBjb3VudGVyOiAxNjAsXG4gICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1idG5cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgbG9hZGluZzogX3ZtLmZvcm0uYnVzeSxcbiAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInJlZ2lzdGVyXCIpKSldXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMmUzZTVjYWNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTJlM2U1Y2FjXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvUmVnaXN0ZXJJbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDE2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXV0aC13cmFwcGVyXCIsIGNsYXNzOiBfdm0uc3RhdGUgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXV0aFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXV0aC1zd2l0Y2hcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXV0aC1zd2l0Y2hfX3RleHRcIixcbiAgICAgICAgICAgIGNsYXNzOiB7IGZhZGVJbjogIV92bS5zd2l0Y2hUZXh0LCBmYWRlT3V0OiBfdm0uc3dpdGNoVGV4dCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiIFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICBfdm0udG9nZ2xlQXV0aCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubWVzc2FnZSkpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhdXRoLWZvcm1cIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBoZWlnaHQ6IFwiNTAwXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcIkF1dGhFbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcIkF1dGhMZWF2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBcIm91dC1pblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoX3ZtLmF1dGhDb21wb25lbnQsIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNmU2ZTNkNjhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTZlNmUzZDY4XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==