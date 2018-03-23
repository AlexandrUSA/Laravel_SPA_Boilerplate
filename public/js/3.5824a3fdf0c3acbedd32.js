webpackJsonp([3],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(176)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(178)
/* template */
var __vue_template__ = __webpack_require__(185)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74dfe770"
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
Component.options.__file = "resources\\assets\\js\\pages\\settings\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74dfe770", Component.options)
  } else {
    hotAPI.reload("data-v-74dfe770", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(177);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("aeb956b0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74dfe770\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74dfe770\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.card[data-v-74dfe770] {\r\n  padding: 30px;\n}\n.svg-inline--fa[data-v-74dfe770] {\r\n  margin-right: 15px;\n}\n.tabs[data-v-74dfe770] {\r\n  margin: 30px;\n}\r\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/settings/resources/assets/js/pages/settings/index.vue"],"names":[],"mappings":";AAmHA;EACA,cAAA;CACA;AAEA;EACA,mBAAA;CACA;AAEA;EACA,aAAA;CACA","file":"index.vue","sourcesContent":["<template>\r\n    <v-tabs\r\n      dark\r\n      slider-color=\"yellow\"\r\n    >\r\n      <v-tab\r\n        v-for=\"tab in tabs\"\r\n        :key=\"tab.id\"\r\n        ripple\r\n      >\r\n        <fa :icon=\"tab.icon\" />\r\n        {{ tab.name }}\r\n      </v-tab>\r\n      <v-tab-item\r\n        v-for=\"tab in tabs\"\r\n        :key=\"tab.id\"\r\n      >\r\n        <v-card flat>\r\n          <component :is=\"tab.component\"></component> \r\n        </v-card>\r\n      </v-tab-item>\r\n    </v-tabs>\r\n  <!-- <v-content>\r\n    <v-navigation-drawer stateless permanent floating value=\"true\">\r\n      <v-toolbar flat class=\"transparent\">\r\n        <v-list class=\"pa-0\">\r\n          <v-list-tile avatar>\r\n            <v-list-tile-avatar>\r\n              <img :src=\"user.photo_url\">\r\n            </v-list-tile-avatar>\r\n            <v-list-tile-content>\r\n              <v-list-tile-title>{{ user.name }}</v-list-tile-title>\r\n            </v-list-tile-content>\r\n          </v-list-tile>\r\n        </v-list>\r\n      </v-toolbar>\r\n      <v-list dense class=\"pt-0\">\r\n        <v-divider></v-divider>\r\n        <v-list-tile v-for=\"tab in tabs\" :key=\"tab.id\" :to=\"{ name: tab.route }\">\r\n          <v-list-tile-action>\r\n            <v-icon>{{ tab.icon }}</v-icon>\r\n          </v-list-tile-action>\r\n          <v-list-tile-content>\r\n            <v-list-tile-title>{{ tab.name }}</v-list-tile-title>\r\n          </v-list-tile-content>\r\n        </v-list-tile>\r\n      </v-list>\r\n      \r\n    <div id=\"theme-switcher\">\r\n      <v-switch\r\n        :label=\"$t('dark_theme')\"\r\n        v-model=\"dark\"\r\n      ></v-switch>\r\n    </div> \r\n    </v-navigation-drawer>\r\n    <div class=\"settings__content card\">\r\n      <transition name=\"fade\" mode=\"out-in\">\r\n        <router-view/>\r\n      </transition>\r\n    </div>\r\n  </v-content>   -->  \r\n\r\n</template>\r\n\r\n<script>\r\nimport { mapGetters, mapActions } from 'vuex';\r\nimport profile from '../../components/settings/profile';\r\nimport password from '../../components/settings/password';\r\n\r\nexport default {\r\n  middleware: 'auth',\r\n  components: {\r\n    'settings-password': password,\r\n    'settings-profile': profile\r\n  },\r\n  computed: {\r\n    ...mapGetters({\r\n      user: 'auth/user',\r\n      theme: 'theme/dark'\r\n    }),\r\n    tabs () {\r\n      return [\r\n        {\r\n          id: 0,\r\n          icon: 'user',\r\n          name: this.$t('profile'),\r\n          component: 'settings-profile'\r\n        },\r\n        {\r\n          id: 1,\r\n          icon: 'lock',\r\n          name: this.$t('password'),\r\n          component: 'settings-password'\r\n        }\r\n      ]\r\n    },\r\n    image() {\r\n      return (this.user) ? this.user.photo_url : false;\r\n    }\r\n  },\r\n  created() {\r\n    this.dark = this.theme;\r\n  },\r\n  watch: {\r\n    dark() {\r\n      this.switchTheme(this.dark)\r\n    }\r\n  },\r\n  methods: mapActions({\r\n    switchTheme: 'theme/switchTheme'\r\n  })\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n\r\n.card {\r\n  padding: 30px;\r\n}\r\n\r\n.svg-inline--fa {\r\n  margin-right: 15px;\r\n}\r\n\r\n.tabs {\r\n  margin: 30px;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_settings_profile__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_settings_profile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_settings_profile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_settings_password__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_settings_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_settings_password__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  middleware: 'auth',
  components: {
    'settings-password': __WEBPACK_IMPORTED_MODULE_2__components_settings_password___default.a,
    'settings-profile': __WEBPACK_IMPORTED_MODULE_1__components_settings_profile___default.a
  },
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/user',
    theme: 'theme/dark'
  }), {
    tabs: function tabs() {
      return [{
        id: 0,
        icon: 'user',
        name: this.$t('profile'),
        component: 'settings-profile'
      }, {
        id: 1,
        icon: 'lock',
        name: this.$t('password'),
        component: 'settings-password'
      }];
    },
    image: function image() {
      return this.user ? this.user.photo_url : false;
    }
  }),
  created: function created() {
    this.dark = this.theme;
  },

  watch: {
    dark: function dark() {
      this.switchTheme(this.dark);
    }
  },
  methods: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
    switchTheme: 'theme/switchTheme'
  })
});

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(180)
/* template */
var __vue_template__ = __webpack_require__(181)
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
Component.options.__file = "resources\\assets\\js\\components\\settings\\profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a038372", Component.options)
  } else {
    hotAPI.reload("data-v-6a038372", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(8);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  scrollToTop: false,

  metaInfo: function metaInfo() {
    return { title: this.$t('settings') };
  },


  data: function data() {
    return {
      date: null,
      menu: false,
      valid: false,
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        name: '',
        nameRules: [function (v) {
          return !!v || _this.$t('required_value');
        }, function (v) {
          return v.length <= 70 || 'Name must be less than 70 characters';
        }],
        last_name: '',
        patronymic: '',
        email: '',
        emailRules: [function (v) {
          return !!v || _this.$t('required_value');
        }, function (v) {
          return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
          );
        }],
        address: '',
        phone_number: null
      })
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])({
    user: 'auth/user',
    employees: 'employees/employees'
  }), {
    employee: function employee() {
      var _this2 = this;

      console.log(this.employees.find(function (el) {
        return el.user_id == _this2.user.employee_id;
      }));
      return this.employees.find(function (el) {
        return el.user_id == _this2.user.employee_id;
      });
    }
  }),

  created: function created() {
    var _this3 = this;

    // Заполняем форму данными юзера.
    this.form.keys().forEach(function (key) {
      _this3.form[key] = _this3.user[key];
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


                this.$store.dispatch('auth/updateUser', data);

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

/***/ 181:
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
    require("vue-hot-reload-api")      .rerender("data-v-6a038372", module.exports)
  }
}

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(183)
/* template */
var __vue_template__ = __webpack_require__(184)
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
Component.options.__file = "resources\\assets\\js\\components\\settings\\password.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-704379ed", Component.options)
  } else {
    hotAPI.reload("data-v-704379ed", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 183:
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
                this.$router.go(-1);

              case 4:
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

/***/ 184:
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
    require("vue-hot-reload-api")      .rerender("data-v-704379ed", module.exports)
  }
}

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-tabs",
    { attrs: { dark: "", "slider-color": "yellow" } },
    [
      _vm._l(_vm.tabs, function(tab) {
        return _c(
          "v-tab",
          { key: tab.id, attrs: { ripple: "" } },
          [
            _c("fa", { attrs: { icon: tab.icon } }),
            _vm._v("\n      " + _vm._s(tab.name) + "\n    ")
          ],
          1
        )
      }),
      _vm._v(" "),
      _vm._l(_vm.tabs, function(tab) {
        return _c(
          "v-tab-item",
          { key: tab.id },
          [
            _c(
              "v-card",
              { attrs: { flat: "" } },
              [_c(tab.component, { tag: "component" })],
              1
            )
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-74dfe770", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZT9hMmYzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlPzk3YmUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NldHRpbmdzL3Byb2ZpbGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wcm9maWxlLnZ1ZT80MWQ3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wYXNzd29yZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wYXNzd29yZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NldHRpbmdzL3Bhc3N3b3JkLnZ1ZT9lMGI2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlP2M1NDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBcU07QUFDck07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQWtMO0FBQ2xMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBd087QUFDeE87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixpRkFBaUY7QUFDdk8sK0pBQStKLGlGQUFpRjtBQUNoUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSxtREFBb0Qsb0JBQW9CLEdBQUcsb0NBQW9DLHlCQUF5QixHQUFHLDBCQUEwQixtQkFBbUIsR0FBRyxZQUFZLHlKQUF5SixNQUFNLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUseVJBQXlSLFlBQVksd3BCQUF3cEIsYUFBYSxpUkFBaVIsa0JBQWtCLCtEQUErRCxZQUFZLG9IQUFvSCxZQUFZLHFoQkFBcWhCLHlCQUF5QixhQUFhLDREQUE0RCw4REFBOEQsd0JBQXdCLDRDQUE0QyxnRkFBZ0Ysa0JBQWtCLHVCQUF1QixrRUFBa0UsbUJBQW1CLCtCQUErQiw4SUFBOEksY0FBYyxnSkFBZ0osb0JBQW9CLGtCQUFrQiwyREFBMkQsU0FBUyxPQUFPLGtCQUFrQiwrQkFBK0IsT0FBTyxlQUFlLGdCQUFnQiw4Q0FBOEMsT0FBTyw0QkFBNEIsK0NBQStDLE1BQU0sa0RBQWtELG9CQUFvQixLQUFLLHlCQUF5Qix5QkFBeUIsS0FBSyxlQUFlLG1CQUFtQixLQUFLLG1DQUFtQzs7QUFFN25IOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeURBO0FBQ0E7QUFDQTs7QUFFQTtjQUVBOzt5QkFFQTt3QkFFQTtBQUhBO0FBSUE7VUFFQTtXQUVBO0FBSEE7MEJBSUE7O1lBR0E7Y0FDQTtzQkFDQTttQkFFQTtBQUxBLE9BREE7WUFRQTtjQUNBO3NCQUNBO21CQUdBO0FBTkE7QUFPQTs0QkFDQTsrQ0FDQTtBQUVBOzs4QkFDQTtxQkFDQTtBQUNBOzs7MEJBRUE7NEJBQ0E7QUFFQTtBQUpBOztpQkFPQTtBQUZBO0FBdkNBLEc7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7ZUFHQTs7Z0NBQ0E7NEJBQ0E7QUFFQTs7Ozs7WUFFQTtZQUNBO2FBQ0E7O2NBRUE7O2lDQUVBO1NBREE7bUNBR0E7O21CQUNBO29CQUNBO2VBQ0E7O2lDQUVBO1NBREE7MkVBR0E7OztpQkFDQTtzQkFJQTtBQWpCQTtBQUpBOzs7QUFzQkE7VUFFQTtlQUVBO0FBSEE7O0FBSUE7Ozt5Q0FDQTs7O3lDQUNBOztBQUdBOzs7O0FBQ0E7O0FBQ0E7NENBQ0E7cUNBQ0E7QUFDQTtBQUVBOzs7O0FBRUE7QUFEQTs7Ozs7Ozs7dUNBR0E7Ozs7Ozs7d0RBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBckRBLEc7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx1QkFBdUIsU0FBUyxnQ0FBZ0MsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsdUJBQXVCLFNBQVMsaUNBQWlDLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBZ1Q7QUFDaFQ7QUFDQSw4Q0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRUE7ZUFHQTs7Z0NBQ0E7NEJBQ0E7QUFFQTs7Ozs7YUFFQTs7a0JBRUE7K0JBRUE7QUFIQTs7c0JBUUE7T0FKQTtBQU5BOzs7O0FBWUE7QUFEQTs7Ozs7O3VDQUdBOzs7OzBCQUNBO2lDQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQXpCQSxHOzs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx1QkFBdUIsU0FBUyxvQ0FBb0MsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxxQ0FBcUMsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCLGFBQWEsRUFBRTtBQUNoRDtBQUNBLHNCQUFzQixTQUFTLGlCQUFpQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUyxXQUFXLEVBQUU7QUFDckMsa0NBQWtDLG1CQUFtQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8zLjU4MjRhM2ZkZjBjM2FjYmVkZDMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03NGRmZTc3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTc0ZGZlNzcwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTc0ZGZlNzcwXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcc2V0dGluZ3NcXFxcaW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTc0ZGZlNzcwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzRkZmU3NzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc0ZGZlNzcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJhZWI5NTZiMFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03NGRmZTc3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03NGRmZTc3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03NGRmZTc3MFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY2FyZFtkYXRhLXYtNzRkZmU3NzBdIHtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcbi5zdmctaW5saW5lLS1mYVtkYXRhLXYtNzRkZmU3NzBdIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuLnRhYnNbZGF0YS12LTc0ZGZlNzcwXSB7XFxyXFxuICBtYXJnaW46IDMwcHg7XFxufVxcclxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvY3JtL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW1IQTtFQUNBLGNBQUE7Q0FDQTtBQUVBO0VBQ0EsbUJBQUE7Q0FDQTtBQUVBO0VBQ0EsYUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJpbmRleC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8di10YWJzXFxyXFxuICAgICAgZGFya1xcclxcbiAgICAgIHNsaWRlci1jb2xvcj1cXFwieWVsbG93XFxcIlxcclxcbiAgICA+XFxyXFxuICAgICAgPHYtdGFiXFxyXFxuICAgICAgICB2LWZvcj1cXFwidGFiIGluIHRhYnNcXFwiXFxyXFxuICAgICAgICA6a2V5PVxcXCJ0YWIuaWRcXFwiXFxyXFxuICAgICAgICByaXBwbGVcXHJcXG4gICAgICA+XFxyXFxuICAgICAgICA8ZmEgOmljb249XFxcInRhYi5pY29uXFxcIiAvPlxcclxcbiAgICAgICAge3sgdGFiLm5hbWUgfX1cXHJcXG4gICAgICA8L3YtdGFiPlxcclxcbiAgICAgIDx2LXRhYi1pdGVtXFxyXFxuICAgICAgICB2LWZvcj1cXFwidGFiIGluIHRhYnNcXFwiXFxyXFxuICAgICAgICA6a2V5PVxcXCJ0YWIuaWRcXFwiXFxyXFxuICAgICAgPlxcclxcbiAgICAgICAgPHYtY2FyZCBmbGF0PlxcclxcbiAgICAgICAgICA8Y29tcG9uZW50IDppcz1cXFwidGFiLmNvbXBvbmVudFxcXCI+PC9jb21wb25lbnQ+IFxcclxcbiAgICAgICAgPC92LWNhcmQ+XFxyXFxuICAgICAgPC92LXRhYi1pdGVtPlxcclxcbiAgICA8L3YtdGFicz5cXHJcXG4gIDwhLS0gPHYtY29udGVudD5cXHJcXG4gICAgPHYtbmF2aWdhdGlvbi1kcmF3ZXIgc3RhdGVsZXNzIHBlcm1hbmVudCBmbG9hdGluZyB2YWx1ZT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgPHYtdG9vbGJhciBmbGF0IGNsYXNzPVxcXCJ0cmFuc3BhcmVudFxcXCI+XFxyXFxuICAgICAgICA8di1saXN0IGNsYXNzPVxcXCJwYS0wXFxcIj5cXHJcXG4gICAgICAgICAgPHYtbGlzdC10aWxlIGF2YXRhcj5cXHJcXG4gICAgICAgICAgICA8di1saXN0LXRpbGUtYXZhdGFyPlxcclxcbiAgICAgICAgICAgICAgPGltZyA6c3JjPVxcXCJ1c2VyLnBob3RvX3VybFxcXCI+XFxyXFxuICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1hdmF0YXI+XFxyXFxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XFxyXFxuICAgICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgdXNlci5uYW1lIH19PC92LWxpc3QtdGlsZS10aXRsZT5cXHJcXG4gICAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XFxyXFxuICAgICAgICAgIDwvdi1saXN0LXRpbGU+XFxyXFxuICAgICAgICA8L3YtbGlzdD5cXHJcXG4gICAgICA8L3YtdG9vbGJhcj5cXHJcXG4gICAgICA8di1saXN0IGRlbnNlIGNsYXNzPVxcXCJwdC0wXFxcIj5cXHJcXG4gICAgICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxyXFxuICAgICAgICA8di1saXN0LXRpbGUgdi1mb3I9XFxcInRhYiBpbiB0YWJzXFxcIiA6a2V5PVxcXCJ0YWIuaWRcXFwiIDp0bz1cXFwieyBuYW1lOiB0YWIucm91dGUgfVxcXCI+XFxyXFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XFxyXFxuICAgICAgICAgICAgPHYtaWNvbj57eyB0YWIuaWNvbiB9fTwvdi1pY29uPlxcclxcbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cXHJcXG4gICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XFxyXFxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHRhYi5uYW1lIH19PC92LWxpc3QtdGlsZS10aXRsZT5cXHJcXG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxcclxcbiAgICAgICAgPC92LWxpc3QtdGlsZT5cXHJcXG4gICAgICA8L3YtbGlzdD5cXHJcXG4gICAgICBcXHJcXG4gICAgPGRpdiBpZD1cXFwidGhlbWUtc3dpdGNoZXJcXFwiPlxcclxcbiAgICAgIDx2LXN3aXRjaFxcclxcbiAgICAgICAgOmxhYmVsPVxcXCIkdCgnZGFya190aGVtZScpXFxcIlxcclxcbiAgICAgICAgdi1tb2RlbD1cXFwiZGFya1xcXCJcXHJcXG4gICAgICA+PC92LXN3aXRjaD5cXHJcXG4gICAgPC9kaXY+IFxcclxcbiAgICA8L3YtbmF2aWdhdGlvbi1kcmF3ZXI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19jb250ZW50IGNhcmRcXFwiPlxcclxcbiAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XFxcImZhZGVcXFwiIG1vZGU9XFxcIm91dC1pblxcXCI+XFxyXFxuICAgICAgICA8cm91dGVyLXZpZXcvPlxcclxcbiAgICAgIDwvdHJhbnNpdGlvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L3YtY29udGVudD4gICAtLT4gIFxcclxcblxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XFxyXFxuaW1wb3J0IHByb2ZpbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZXR0aW5ncy9wcm9maWxlJztcXHJcXG5pbXBvcnQgcGFzc3dvcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZXR0aW5ncy9wYXNzd29yZCc7XFxyXFxuXFxyXFxuZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgbWlkZGxld2FyZTogJ2F1dGgnLFxcclxcbiAgY29tcG9uZW50czoge1xcclxcbiAgICAnc2V0dGluZ3MtcGFzc3dvcmQnOiBwYXNzd29yZCxcXHJcXG4gICAgJ3NldHRpbmdzLXByb2ZpbGUnOiBwcm9maWxlXFxyXFxuICB9LFxcclxcbiAgY29tcHV0ZWQ6IHtcXHJcXG4gICAgLi4ubWFwR2V0dGVycyh7XFxyXFxuICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXFxyXFxuICAgICAgdGhlbWU6ICd0aGVtZS9kYXJrJ1xcclxcbiAgICB9KSxcXHJcXG4gICAgdGFicyAoKSB7XFxyXFxuICAgICAgcmV0dXJuIFtcXHJcXG4gICAgICAgIHtcXHJcXG4gICAgICAgICAgaWQ6IDAsXFxyXFxuICAgICAgICAgIGljb246ICd1c2VyJyxcXHJcXG4gICAgICAgICAgbmFtZTogdGhpcy4kdCgncHJvZmlsZScpLFxcclxcbiAgICAgICAgICBjb21wb25lbnQ6ICdzZXR0aW5ncy1wcm9maWxlJ1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHtcXHJcXG4gICAgICAgICAgaWQ6IDEsXFxyXFxuICAgICAgICAgIGljb246ICdsb2NrJyxcXHJcXG4gICAgICAgICAgbmFtZTogdGhpcy4kdCgncGFzc3dvcmQnKSxcXHJcXG4gICAgICAgICAgY29tcG9uZW50OiAnc2V0dGluZ3MtcGFzc3dvcmQnXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgXVxcclxcbiAgICB9LFxcclxcbiAgICBpbWFnZSgpIHtcXHJcXG4gICAgICByZXR1cm4gKHRoaXMudXNlcikgPyB0aGlzLnVzZXIucGhvdG9fdXJsIDogZmFsc2U7XFxyXFxuICAgIH1cXHJcXG4gIH0sXFxyXFxuICBjcmVhdGVkKCkge1xcclxcbiAgICB0aGlzLmRhcmsgPSB0aGlzLnRoZW1lO1xcclxcbiAgfSxcXHJcXG4gIHdhdGNoOiB7XFxyXFxuICAgIGRhcmsoKSB7XFxyXFxuICAgICAgdGhpcy5zd2l0Y2hUaGVtZSh0aGlzLmRhcmspXFxyXFxuICAgIH1cXHJcXG4gIH0sXFxyXFxuICBtZXRob2RzOiBtYXBBY3Rpb25zKHtcXHJcXG4gICAgc3dpdGNoVGhlbWU6ICd0aGVtZS9zd2l0Y2hUaGVtZSdcXHJcXG4gIH0pXFxyXFxufVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN2Zy1pbmxpbmUtLWZhIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMge1xcclxcbiAgbWFyZ2luOiAzMHB4O1xcclxcbn1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03NGRmZTc3MFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIjx0ZW1wbGF0ZT5cclxuICAgIDx2LXRhYnNcclxuICAgICAgZGFya1xyXG4gICAgICBzbGlkZXItY29sb3I9XCJ5ZWxsb3dcIlxyXG4gICAgPlxyXG4gICAgICA8di10YWJcclxuICAgICAgICB2LWZvcj1cInRhYiBpbiB0YWJzXCJcclxuICAgICAgICA6a2V5PVwidGFiLmlkXCJcclxuICAgICAgICByaXBwbGVcclxuICAgICAgPlxyXG4gICAgICAgIDxmYSA6aWNvbj1cInRhYi5pY29uXCIgLz5cclxuICAgICAgICB7eyB0YWIubmFtZSB9fVxyXG4gICAgICA8L3YtdGFiPlxyXG4gICAgICA8di10YWItaXRlbVxyXG4gICAgICAgIHYtZm9yPVwidGFiIGluIHRhYnNcIlxyXG4gICAgICAgIDprZXk9XCJ0YWIuaWRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHYtY2FyZCBmbGF0PlxyXG4gICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJ0YWIuY29tcG9uZW50XCI+PC9jb21wb25lbnQ+IFxyXG4gICAgICAgIDwvdi1jYXJkPlxyXG4gICAgICA8L3YtdGFiLWl0ZW0+XHJcbiAgICA8L3YtdGFicz5cclxuICA8IS0tIDx2LWNvbnRlbnQ+XHJcbiAgICA8di1uYXZpZ2F0aW9uLWRyYXdlciBzdGF0ZWxlc3MgcGVybWFuZW50IGZsb2F0aW5nIHZhbHVlPVwidHJ1ZVwiPlxyXG4gICAgICA8di10b29sYmFyIGZsYXQgY2xhc3M9XCJ0cmFuc3BhcmVudFwiPlxyXG4gICAgICAgIDx2LWxpc3QgY2xhc3M9XCJwYS0wXCI+XHJcbiAgICAgICAgICA8di1saXN0LXRpbGUgYXZhdGFyPlxyXG4gICAgICAgICAgICA8di1saXN0LXRpbGUtYXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxpbWcgOnNyYz1cInVzZXIucGhvdG9fdXJsXCI+XHJcbiAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtYXZhdGFyPlxyXG4gICAgICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cclxuICAgICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgdXNlci5uYW1lIH19PC92LWxpc3QtdGlsZS10aXRsZT5cclxuICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxyXG4gICAgICAgICAgPC92LWxpc3QtdGlsZT5cclxuICAgICAgICA8L3YtbGlzdD5cclxuICAgICAgPC92LXRvb2xiYXI+XHJcbiAgICAgIDx2LWxpc3QgZGVuc2UgY2xhc3M9XCJwdC0wXCI+XHJcbiAgICAgICAgPHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cclxuICAgICAgICA8di1saXN0LXRpbGUgdi1mb3I9XCJ0YWIgaW4gdGFic1wiIDprZXk9XCJ0YWIuaWRcIiA6dG89XCJ7IG5hbWU6IHRhYi5yb3V0ZSB9XCI+XHJcbiAgICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxyXG4gICAgICAgICAgICA8di1pY29uPnt7IHRhYi5pY29uIH19PC92LWljb24+XHJcbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cclxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxyXG4gICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgdGFiLm5hbWUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxyXG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxyXG4gICAgICAgIDwvdi1saXN0LXRpbGU+XHJcbiAgICAgIDwvdi1saXN0PlxyXG4gICAgICBcclxuICAgIDxkaXYgaWQ9XCJ0aGVtZS1zd2l0Y2hlclwiPlxyXG4gICAgICA8di1zd2l0Y2hcclxuICAgICAgICA6bGFiZWw9XCIkdCgnZGFya190aGVtZScpXCJcclxuICAgICAgICB2LW1vZGVsPVwiZGFya1wiXHJcbiAgICAgID48L3Ytc3dpdGNoPlxyXG4gICAgPC9kaXY+IFxyXG4gICAgPC92LW5hdmlnYXRpb24tZHJhd2VyPlxyXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzX19jb250ZW50IGNhcmRcIj5cclxuICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIiBtb2RlPVwib3V0LWluXCI+XHJcbiAgICAgICAgPHJvdXRlci12aWV3Lz5cclxuICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC92LWNvbnRlbnQ+ICAgLS0+ICBcclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XHJcbmltcG9ydCBwcm9maWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2V0dGluZ3MvcHJvZmlsZSc7XHJcbmltcG9ydCBwYXNzd29yZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NldHRpbmdzL3Bhc3N3b3JkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBtaWRkbGV3YXJlOiAnYXV0aCcsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgJ3NldHRpbmdzLXBhc3N3b3JkJzogcGFzc3dvcmQsXHJcbiAgICAnc2V0dGluZ3MtcHJvZmlsZSc6IHByb2ZpbGVcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXHJcbiAgICAgIHRoZW1lOiAndGhlbWUvZGFyaydcclxuICAgIH0pLFxyXG4gICAgdGFicyAoKSB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICBpY29uOiAndXNlcicsXHJcbiAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdwcm9maWxlJyksXHJcbiAgICAgICAgICBjb21wb25lbnQ6ICdzZXR0aW5ncy1wcm9maWxlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBpY29uOiAnbG9jaycsXHJcbiAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdwYXNzd29yZCcpLFxyXG4gICAgICAgICAgY29tcG9uZW50OiAnc2V0dGluZ3MtcGFzc3dvcmQnXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAgaW1hZ2UoKSB7XHJcbiAgICAgIHJldHVybiAodGhpcy51c2VyKSA/IHRoaXMudXNlci5waG90b191cmwgOiBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLmRhcmsgPSB0aGlzLnRoZW1lO1xyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGRhcmsoKSB7XHJcbiAgICAgIHRoaXMuc3dpdGNoVGhlbWUodGhpcy5kYXJrKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczogbWFwQWN0aW9ucyh7XHJcbiAgICBzd2l0Y2hUaGVtZTogJ3RoZW1lL3N3aXRjaFRoZW1lJ1xyXG4gIH0pXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuLmNhcmQge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5zdmctaW5saW5lLS1mYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4udGFicyB7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG59XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Byb2ZpbGUudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02YTAzODM3MlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Byb2ZpbGUudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxzZXR0aW5nc1xcXFxwcm9maWxlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02YTAzODM3MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZhMDM4MzcyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2V0dGluZ3MvcHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCI8dGVtcGxhdGU+XHJcbiAgPHYtZm9ybSB2LW1vZGVsPVwidmFsaWRcIiBAc3VibWl0LnByZXZlbnQ9XCJ1cGRhdGVcIiBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIj5cclxuICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgOmxhYmVsPVwiJHQoJ25hbWUnKVwiXHJcbiAgICAgIHYtbW9kZWw9XCJmb3JtLm5hbWVcIlxyXG4gICAgICA6cnVsZXM9XCJmb3JtLm5hbWVSdWxlc1wiXHJcbiAgICAgIDpjb3VudGVyPVwiNzBcIlxyXG4gICAgICBwcmVwZW5kLWljb249XCJwZXJzb25cIlxyXG4gICAgICByZXF1aXJlZFxyXG4gICAgPjwvdi10ZXh0LWZpZWxkPlxyXG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cIm5hbWVcIi8+XHJcblxyXG4gICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICA6bGFiZWw9XCIkdCgnZW1haWwnKVwiXHJcbiAgICAgIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCJcclxuICAgICAgOnJ1bGVzPVwiZm9ybS5lbWFpbFJ1bGVzXCJcclxuICAgICAgcHJlcGVuZC1pY29uPVwiZW1haWxcIlxyXG4gICAgICByZXF1aXJlZFxyXG4gICAgPjwvdi10ZXh0LWZpZWxkPlxyXG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImVtYWlsXCIgLz5cclxuXHJcbiAgICA8di1idG4gbGFyZ2UgYmxvY2sgOmxvYWRpbmc9XCJmb3JtLmJ1c3lcIiB0eXBlPVwic3VibWl0XCI+e3sgJHQoJ3VwZGF0ZScpIH19PC92LWJ0bj5cclxuICA8L3YtZm9ybT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xyXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzY3JvbGxUb1RvcDogZmFsc2UsXHJcblxyXG4gIG1ldGFJbmZvICgpIHtcclxuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdzZXR0aW5ncycpIH1cclxuICB9LFxyXG5cclxuICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgZGF0ZTogbnVsbCxcclxuICAgIG1lbnU6IGZhbHNlLFxyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgZm9ybTogbmV3IEZvcm0oe1xyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgbmFtZVJ1bGVzOiBbXHJcbiAgICAgICAgdiA9PiAhIXYgfHwgdGhpcy4kdCgncmVxdWlyZWRfdmFsdWUnKSxcclxuICAgICAgICB2ID0+IHYubGVuZ3RoIDw9IDcwIHx8ICdOYW1lIG11c3QgYmUgbGVzcyB0aGFuIDcwIGNoYXJhY3RlcnMnXHJcbiAgICAgIF0sXHJcbiAgICAgIGxhc3RfbmFtZTogJycsXHJcbiAgICAgIHBhdHJvbnltaWM6ICcnLFxyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICAgIGVtYWlsUnVsZXM6IFtcclxuICAgICAgICB2ID0+ICEhdiB8fCB0aGlzLiR0KCdyZXF1aXJlZF92YWx1ZScpLFxyXG4gICAgICAgIHYgPT4gL15cXHcrKFsuLV0/XFx3KykqQFxcdysoWy4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLnRlc3QodikgfHwgJ0UtbWFpbCBtdXN0IGJlIHZhbGlkJ1xyXG4gICAgICBdLFxyXG4gICAgICBhZGRyZXNzOiAnJyxcclxuICAgICAgcGhvbmVfbnVtYmVyOiBudWxsLFxyXG4gICAgfSlcclxuICB9KSxcclxuXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICB1c2VyOiAnYXV0aC91c2VyJyxcclxuICAgICAgZW1wbG95ZWVzOiAnZW1wbG95ZWVzL2VtcGxveWVlcydcclxuICAgIH0pLFxyXG4gICAgZW1wbG95ZWUoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW1wbG95ZWVzLmZpbmQoZWwgPT4gZWwudXNlcl9pZCA9PSB0aGlzLnVzZXIuZW1wbG95ZWVfaWQpKVxyXG4gICAgICByZXR1cm4gdGhpcy5lbXBsb3llZXMuZmluZChlbCA9PiBlbC51c2VyX2lkID09IHRoaXMudXNlci5lbXBsb3llZV9pZClcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjcmVhdGVkICgpIHtcclxuICAgIC8vINCX0LDQv9C+0LvQvdGP0LXQvCDRhNC+0YDQvNGDINC00LDQvdC90YvQvNC4INGO0LfQtdGA0LAuXHJcbiAgICB0aGlzLmZvcm0ua2V5cygpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgdGhpcy5mb3JtW2tleV0gPSB0aGlzLnVzZXJba2V5XVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBhc3luYyB1cGRhdGUgKCkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZm9ybS5wYXRjaCgnL2FwaS9zZXR0aW5ncy9wcm9maWxlJylcclxuXHJcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3VwZGF0ZVVzZXInLCBkYXRhKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wcm9maWxlLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWZvcm1cIixcbiAgICB7XG4gICAgICBvbjoge1xuICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICAgIH0sXG4gICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5mb3JtLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtb2RlbDoge1xuICAgICAgICB2YWx1ZTogX3ZtLnZhbGlkLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgX3ZtLnZhbGlkID0gJCR2XG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IFwidmFsaWRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJuYW1lXCIpLFxuICAgICAgICAgIHJ1bGVzOiBfdm0uZm9ybS5uYW1lUnVsZXMsXG4gICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJwZXJzb25cIixcbiAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJuYW1lXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS4kdChcImVtYWlsXCIpLFxuICAgICAgICAgIHJ1bGVzOiBfdm0uZm9ybS5lbWFpbFJ1bGVzLFxuICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZW1haWxcIixcbiAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1haWxcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1idG5cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgbG9hZGluZzogX3ZtLmZvcm0uYnVzeSxcbiAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInVwZGF0ZVwiKSkpXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTZhMDM4MzcyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02YTAzODM3MlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Bhc3N3b3JkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzA0Mzc5ZWRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYXNzd29yZC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXHNldHRpbmdzXFxcXHBhc3N3b3JkLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03MDQzNzllZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTcwNDM3OWVkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2V0dGluZ3MvcGFzc3dvcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxODJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiPHRlbXBsYXRlPlxyXG4gICAgPHYtZm9ybSB2LW1vZGVsPVwidmFsaWRcIiBAc3VibWl0LnByZXZlbnQ9XCJ1cGRhdGVcIiBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIj5cclxuICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgOmxhYmVsPVwiJHQoJ25ld19wYXNzd29yZCcpXCJcclxuICAgICAgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIlxyXG4gICAgICA6cnVsZXM9XCJwYXNzd29yZFJ1bGVzXCJcclxuICAgICAgOmNvdW50ZXI9XCIxNjBcIlxyXG4gICAgICBwcmVwZW5kLWljb249XCJ2cG5fa2V5XCJcclxuICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgcmVxdWlyZWRcclxuICAgID48L3YtdGV4dC1maWVsZD5cclxuICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJwYXNzd29yZFwiLz5cclxuICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgOmxhYmVsPVwiJHQoJ2NvbmZpcm1fcGFzc3dvcmQnKVwiXHJcbiAgICAgIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXHJcbiAgICAgIDpydWxlcz1cInBhc3N3b3JkUnVsZXNcIlxyXG4gICAgICA6Y291bnRlcj1cIjE2MFwiXHJcbiAgICAgIHByZXBlbmQtaWNvbj1cInZwbl9rZXlcIlxyXG4gICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICByZXF1aXJlZFxyXG4gICAgPjwvdi10ZXh0LWZpZWxkPlxyXG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIC8+XHJcblxyXG4gICAgPHYtYnRuIGxhcmdlIGJsb2NrIDpsb2FkaW5nPVwiZm9ybS5idXN5XCIgdHlwZT1cInN1Ym1pdFwiPnt7ICR0KCd1cGRhdGUnKSB9fTwvdi1idG4+XHJcbiAgPC92LWZvcm0+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzY3JvbGxUb1RvcDogZmFsc2UsXHJcblxyXG4gIG1ldGFJbmZvICgpIHtcclxuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdzZXR0aW5ncycpIH1cclxuICB9LFxyXG5cclxuICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgZm9ybTogbmV3IEZvcm0oe1xyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJydcclxuICAgIH0pLFxyXG4gICAgcGFzc3dvcmRSdWxlczogW1xyXG4gICAgICB2ID0+ICEhdiB8fCBcItCS0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LVcIlxyXG4gICAgXSxcclxuICB9KSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgdXBkYXRlICgpIHtcclxuICAgICAgYXdhaXQgdGhpcy5mb3JtLnBhdGNoKCcvYXBpL3NldHRpbmdzL3Bhc3N3b3JkJylcclxuXHJcbiAgICAgIHRoaXMuZm9ybS5yZXNldCgpXHJcbiAgICAgIHRoaXMuJHJvdXRlci5nbygtMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NldHRpbmdzL3Bhc3N3b3JkLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWZvcm1cIixcbiAgICB7XG4gICAgICBvbjoge1xuICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICAgIH0sXG4gICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5mb3JtLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtb2RlbDoge1xuICAgICAgICB2YWx1ZTogX3ZtLnZhbGlkLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgX3ZtLnZhbGlkID0gJCR2XG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IFwidmFsaWRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJuZXdfcGFzc3dvcmRcIiksXG4gICAgICAgICAgcnVsZXM6IF92bS5wYXNzd29yZFJ1bGVzLFxuICAgICAgICAgIGNvdW50ZXI6IDE2MCxcbiAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInZwbl9rZXlcIixcbiAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoYXMtZXJyb3JcIiwgeyBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwicGFzc3dvcmRcIiB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiY29uZmlybV9wYXNzd29yZFwiKSxcbiAgICAgICAgICBydWxlczogX3ZtLnBhc3N3b3JkUnVsZXMsXG4gICAgICAgICAgY291bnRlcjogMTYwLFxuICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwidnBuX2tleVwiLFxuICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb24sXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb25cIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhcmdlOiBcIlwiLFxuICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICBsb2FkaW5nOiBfdm0uZm9ybS5idXN5LFxuICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwidXBkYXRlXCIpKSldXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzA0Mzc5ZWRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTcwNDM3OWVkXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NldHRpbmdzL3Bhc3N3b3JkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LXRhYnNcIixcbiAgICB7IGF0dHJzOiB7IGRhcms6IFwiXCIsIFwic2xpZGVyLWNvbG9yXCI6IFwieWVsbG93XCIgfSB9LFxuICAgIFtcbiAgICAgIF92bS5fbChfdm0udGFicywgZnVuY3Rpb24odGFiKSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcInYtdGFiXCIsXG4gICAgICAgICAgeyBrZXk6IHRhYi5pZCwgYXR0cnM6IHsgcmlwcGxlOiBcIlwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogdGFiLmljb24gfSB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKHRhYi5uYW1lKSArIFwiXFxuICAgIFwiKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLnRhYnMsIGZ1bmN0aW9uKHRhYikge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJ2LXRhYi1pdGVtXCIsXG4gICAgICAgICAgeyBrZXk6IHRhYi5pZCB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsYXQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICBbX2ModGFiLmNvbXBvbmVudCwgeyB0YWc6IFwiY29tcG9uZW50XCIgfSldLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzRkZmU3NzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTc0ZGZlNzcwXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=