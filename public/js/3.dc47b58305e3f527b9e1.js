webpackJsonp([3],{

/***/ 142:
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
var __vue_template__ = __webpack_require__(183)
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

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
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

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.card[data-v-74dfe770] {\n  padding: 30px;\n}\n.svg-inline--fa[data-v-74dfe770] {\n  margin-right: 15px;\n}\n.tabs[data-v-74dfe770] {\n  margin: 30px;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/settings/resources/assets/js/pages/settings/index.vue"],"names":[],"mappings":";AAmHA;EACA,cAAA;CACA;AAEA;EACA,mBAAA;CACA;AAEA;EACA,aAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <v-tabs\n      dark\n      slider-color=\"yellow\"\n    >\n      <v-tab\n        v-for=\"tab in tabs\"\n        :key=\"tab.id\"\n        ripple\n      >\n        <fa :icon=\"tab.icon\" />\n        {{ tab.name }}\n      </v-tab>\n      <v-tab-item\n        v-for=\"tab in tabs\"\n        :key=\"tab.id\"\n      >\n        <v-card flat>\n          <component :is=\"tab.component\"></component> \n        </v-card>\n      </v-tab-item>\n    </v-tabs>\n  <!-- <v-content>\n    <v-navigation-drawer stateless permanent floating value=\"true\">\n      <v-toolbar flat class=\"transparent\">\n        <v-list class=\"pa-0\">\n          <v-list-tile avatar>\n            <v-list-tile-avatar>\n              <img :src=\"user.photo_url\">\n            </v-list-tile-avatar>\n            <v-list-tile-content>\n              <v-list-tile-title>{{ user.name }}</v-list-tile-title>\n            </v-list-tile-content>\n          </v-list-tile>\n        </v-list>\n      </v-toolbar>\n      <v-list dense class=\"pt-0\">\n        <v-divider></v-divider>\n        <v-list-tile v-for=\"tab in tabs\" :key=\"tab.id\" :to=\"{ name: tab.route }\">\n          <v-list-tile-action>\n            <v-icon>{{ tab.icon }}</v-icon>\n          </v-list-tile-action>\n          <v-list-tile-content>\n            <v-list-tile-title>{{ tab.name }}</v-list-tile-title>\n          </v-list-tile-content>\n        </v-list-tile>\n      </v-list>\n      \n    <div id=\"theme-switcher\">\n      <v-switch\n        :label=\"$t('dark_theme')\"\n        v-model=\"dark\"\n      ></v-switch>\n    </div> \n    </v-navigation-drawer>\n    <div class=\"settings__content card\">\n      <transition name=\"fade\" mode=\"out-in\">\n        <router-view/>\n      </transition>\n    </div>\n  </v-content>   -->  \n\n</template>\n\n<script>\nimport { mapGetters, mapActions } from 'vuex';\nimport profile from '../../components/settings/profile';\nimport password from '../../components/settings/password';\n\nexport default {\n  middleware: 'auth',\n  components: {\n    'settings-password': password,\n    'settings-profile': profile\n  },\n  computed: {\n    ...mapGetters({\n      user: 'auth/user',\n      theme: 'theme/dark'\n    }),\n    tabs () {\n      return [\n        {\n          id: 0,\n          icon: 'user',\n          name: this.$t('profile'),\n          component: 'settings-profile'\n        },\n        {\n          id: 1,\n          icon: 'lock',\n          name: this.$t('password'),\n          component: 'settings-password'\n        }\n      ]\n    },\n    image() {\n      return (this.user) ? this.user.photo_url : false;\n    }\n  },\n  created() {\n    this.dark = this.theme;\n  },\n  watch: {\n    dark() {\n      this.switchTheme(this.dark)\n    }\n  },\n  methods: mapActions({\n    switchTheme: 'theme/switchTheme'\n  })\n}\n</script>\n\n<style scoped>\n\n.card {\n  padding: 30px;\n}\n\n.svg-inline--fa {\n  margin-right: 15px;\n}\n\n.tabs {\n  margin: 30px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_settings_profile__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_settings_profile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_settings_profile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_settings_password__ = __webpack_require__(180);
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

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(178)
/* template */
var __vue_template__ = __webpack_require__(179)
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

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

  computed: Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])({
    user: 'auth/user'
  }),

  created: function created() {
    var _this2 = this;

    // Заполняем форму данными юзера.
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

/***/ 179:
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
          label: "Фамилия",
          rules: _vm.form.nameRules,
          counter: 70,
          "prepend-icon": "person"
        },
        model: {
          value: _vm.form.last_name,
          callback: function($$v) {
            _vm.$set(_vm.form, "last_name", $$v)
          },
          expression: "form.last_name"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: "Отчество",
          rules: _vm.form.nameRules,
          counter: 70,
          "prepend-icon": "person"
        },
        model: {
          value: _vm.form.patronymic,
          callback: function($$v) {
            _vm.$set(_vm.form, "patronymic", $$v)
          },
          expression: "form.patronymic"
        }
      }),
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
      _c("v-text-field", {
        attrs: { label: "Адрес", "prepend-icon": "person" },
        model: {
          value: _vm.form.address,
          callback: function($$v) {
            _vm.$set(_vm.form, "address", $$v)
          },
          expression: "form.address"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: { label: "Адрес", "prepend-icon": "person" },
        model: {
          value: _vm.form.phone_number,
          callback: function($$v) {
            _vm.$set(_vm.form, "phone_number", $$v)
          },
          expression: "form.phone_number"
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

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(181)
/* template */
var __vue_template__ = __webpack_require__(182)
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

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
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

/***/ 182:
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

/***/ 183:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZT9hMmYzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlPzk3YmUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NldHRpbmdzL3Byb2ZpbGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wcm9maWxlLnZ1ZT80MWQ3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wYXNzd29yZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wYXNzd29yZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NldHRpbmdzL3Bhc3N3b3JkLnZ1ZT9lMGI2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlP2M1NDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBcU07QUFDck07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQWtMO0FBQ2xMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LFNBQVMscUNBQXFDLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQixhQUFhLEVBQUU7QUFDaEQ7QUFDQSxzQkFBc0IsU0FBUyxpQkFBaUIsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVMsV0FBVyxFQUFFO0FBQ3JDLGtDQUFrQyxtQkFBbUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMy5kYzQ3YjU4MzA1ZTNmNTI3YjllMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzRkZmU3NzBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03NGRmZTc3MFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi03NGRmZTc3MFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXHNldHRpbmdzXFxcXGluZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03NGRmZTc3MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc0ZGZlNzcwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03NGRmZTc3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYWViOTU2YjBcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzRkZmU3NzBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzRkZmU3NzBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzRkZmU3NzBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNhcmRbZGF0YS12LTc0ZGZlNzcwXSB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG4uc3ZnLWlubGluZS0tZmFbZGF0YS12LTc0ZGZlNzcwXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcbi50YWJzW2RhdGEtdi03NGRmZTc3MF0ge1xcbiAgbWFyZ2luOiAzMHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFtSEE7RUFDQSxjQUFBO0NBQ0E7QUFFQTtFQUNBLG1CQUFBO0NBQ0E7QUFFQTtFQUNBLGFBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiaW5kZXgudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPHYtdGFic1xcbiAgICAgIGRhcmtcXG4gICAgICBzbGlkZXItY29sb3I9XFxcInllbGxvd1xcXCJcXG4gICAgPlxcbiAgICAgIDx2LXRhYlxcbiAgICAgICAgdi1mb3I9XFxcInRhYiBpbiB0YWJzXFxcIlxcbiAgICAgICAgOmtleT1cXFwidGFiLmlkXFxcIlxcbiAgICAgICAgcmlwcGxlXFxuICAgICAgPlxcbiAgICAgICAgPGZhIDppY29uPVxcXCJ0YWIuaWNvblxcXCIgLz5cXG4gICAgICAgIHt7IHRhYi5uYW1lIH19XFxuICAgICAgPC92LXRhYj5cXG4gICAgICA8di10YWItaXRlbVxcbiAgICAgICAgdi1mb3I9XFxcInRhYiBpbiB0YWJzXFxcIlxcbiAgICAgICAgOmtleT1cXFwidGFiLmlkXFxcIlxcbiAgICAgID5cXG4gICAgICAgIDx2LWNhcmQgZmxhdD5cXG4gICAgICAgICAgPGNvbXBvbmVudCA6aXM9XFxcInRhYi5jb21wb25lbnRcXFwiPjwvY29tcG9uZW50PiBcXG4gICAgICAgIDwvdi1jYXJkPlxcbiAgICAgIDwvdi10YWItaXRlbT5cXG4gICAgPC92LXRhYnM+XFxuICA8IS0tIDx2LWNvbnRlbnQ+XFxuICAgIDx2LW5hdmlnYXRpb24tZHJhd2VyIHN0YXRlbGVzcyBwZXJtYW5lbnQgZmxvYXRpbmcgdmFsdWU9XFxcInRydWVcXFwiPlxcbiAgICAgIDx2LXRvb2xiYXIgZmxhdCBjbGFzcz1cXFwidHJhbnNwYXJlbnRcXFwiPlxcbiAgICAgICAgPHYtbGlzdCBjbGFzcz1cXFwicGEtMFxcXCI+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZSBhdmF0YXI+XFxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLWF2YXRhcj5cXG4gICAgICAgICAgICAgIDxpbWcgOnNyYz1cXFwidXNlci5waG90b191cmxcXFwiPlxcbiAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtYXZhdGFyPlxcbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHVzZXIubmFtZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICA8L3YtbGlzdC10aWxlPlxcbiAgICAgICAgPC92LWxpc3Q+XFxuICAgICAgPC92LXRvb2xiYXI+XFxuICAgICAgPHYtbGlzdCBkZW5zZSBjbGFzcz1cXFwicHQtMFxcXCI+XFxuICAgICAgICA8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcbiAgICAgICAgPHYtbGlzdC10aWxlIHYtZm9yPVxcXCJ0YWIgaW4gdGFic1xcXCIgOmtleT1cXFwidGFiLmlkXFxcIiA6dG89XFxcInsgbmFtZTogdGFiLnJvdXRlIH1cXFwiPlxcbiAgICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgICAgICAgIDx2LWljb24+e3sgdGFiLmljb24gfX08L3YtaWNvbj5cXG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyB0YWIubmFtZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgIDwvdi1saXN0LXRpbGU+XFxuICAgICAgPC92LWxpc3Q+XFxuICAgICAgXFxuICAgIDxkaXYgaWQ9XFxcInRoZW1lLXN3aXRjaGVyXFxcIj5cXG4gICAgICA8di1zd2l0Y2hcXG4gICAgICAgIDpsYWJlbD1cXFwiJHQoJ2RhcmtfdGhlbWUnKVxcXCJcXG4gICAgICAgIHYtbW9kZWw9XFxcImRhcmtcXFwiXFxuICAgICAgPjwvdi1zd2l0Y2g+XFxuICAgIDwvZGl2PiBcXG4gICAgPC92LW5hdmlnYXRpb24tZHJhd2VyPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fY29udGVudCBjYXJkXFxcIj5cXG4gICAgICA8dHJhbnNpdGlvbiBuYW1lPVxcXCJmYWRlXFxcIiBtb2RlPVxcXCJvdXQtaW5cXFwiPlxcbiAgICAgICAgPHJvdXRlci12aWV3Lz5cXG4gICAgICA8L3RyYW5zaXRpb24+XFxuICAgIDwvZGl2PlxcbiAgPC92LWNvbnRlbnQ+ICAgLS0+ICBcXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xcbmltcG9ydCBwcm9maWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2V0dGluZ3MvcHJvZmlsZSc7XFxuaW1wb3J0IHBhc3N3b3JkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2V0dGluZ3MvcGFzc3dvcmQnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIG1pZGRsZXdhcmU6ICdhdXRoJyxcXG4gIGNvbXBvbmVudHM6IHtcXG4gICAgJ3NldHRpbmdzLXBhc3N3b3JkJzogcGFzc3dvcmQsXFxuICAgICdzZXR0aW5ncy1wcm9maWxlJzogcHJvZmlsZVxcbiAgfSxcXG4gIGNvbXB1dGVkOiB7XFxuICAgIC4uLm1hcEdldHRlcnMoe1xcbiAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxcbiAgICAgIHRoZW1lOiAndGhlbWUvZGFyaydcXG4gICAgfSksXFxuICAgIHRhYnMgKCkge1xcbiAgICAgIHJldHVybiBbXFxuICAgICAgICB7XFxuICAgICAgICAgIGlkOiAwLFxcbiAgICAgICAgICBpY29uOiAndXNlcicsXFxuICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3Byb2ZpbGUnKSxcXG4gICAgICAgICAgY29tcG9uZW50OiAnc2V0dGluZ3MtcHJvZmlsZSdcXG4gICAgICAgIH0sXFxuICAgICAgICB7XFxuICAgICAgICAgIGlkOiAxLFxcbiAgICAgICAgICBpY29uOiAnbG9jaycsXFxuICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3Bhc3N3b3JkJyksXFxuICAgICAgICAgIGNvbXBvbmVudDogJ3NldHRpbmdzLXBhc3N3b3JkJ1xcbiAgICAgICAgfVxcbiAgICAgIF1cXG4gICAgfSxcXG4gICAgaW1hZ2UoKSB7XFxuICAgICAgcmV0dXJuICh0aGlzLnVzZXIpID8gdGhpcy51c2VyLnBob3RvX3VybCA6IGZhbHNlO1xcbiAgICB9XFxuICB9LFxcbiAgY3JlYXRlZCgpIHtcXG4gICAgdGhpcy5kYXJrID0gdGhpcy50aGVtZTtcXG4gIH0sXFxuICB3YXRjaDoge1xcbiAgICBkYXJrKCkge1xcbiAgICAgIHRoaXMuc3dpdGNoVGhlbWUodGhpcy5kYXJrKVxcbiAgICB9XFxuICB9LFxcbiAgbWV0aG9kczogbWFwQWN0aW9ucyh7XFxuICAgIHN3aXRjaFRoZW1lOiAndGhlbWUvc3dpdGNoVGhlbWUnXFxuICB9KVxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcblxcbi5jYXJkIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcblxcbi50YWJzIHtcXG4gIG1hcmdpbjogMzBweDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzRkZmU3NzBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCI8dGVtcGxhdGU+XG4gICAgPHYtdGFic1xuICAgICAgZGFya1xuICAgICAgc2xpZGVyLWNvbG9yPVwieWVsbG93XCJcbiAgICA+XG4gICAgICA8di10YWJcbiAgICAgICAgdi1mb3I9XCJ0YWIgaW4gdGFic1wiXG4gICAgICAgIDprZXk9XCJ0YWIuaWRcIlxuICAgICAgICByaXBwbGVcbiAgICAgID5cbiAgICAgICAgPGZhIDppY29uPVwidGFiLmljb25cIiAvPlxuICAgICAgICB7eyB0YWIubmFtZSB9fVxuICAgICAgPC92LXRhYj5cbiAgICAgIDx2LXRhYi1pdGVtXG4gICAgICAgIHYtZm9yPVwidGFiIGluIHRhYnNcIlxuICAgICAgICA6a2V5PVwidGFiLmlkXCJcbiAgICAgID5cbiAgICAgICAgPHYtY2FyZCBmbGF0PlxuICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwidGFiLmNvbXBvbmVudFwiPjwvY29tcG9uZW50PiBcbiAgICAgICAgPC92LWNhcmQ+XG4gICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgPC92LXRhYnM+XG4gIDwhLS0gPHYtY29udGVudD5cbiAgICA8di1uYXZpZ2F0aW9uLWRyYXdlciBzdGF0ZWxlc3MgcGVybWFuZW50IGZsb2F0aW5nIHZhbHVlPVwidHJ1ZVwiPlxuICAgICAgPHYtdG9vbGJhciBmbGF0IGNsYXNzPVwidHJhbnNwYXJlbnRcIj5cbiAgICAgICAgPHYtbGlzdCBjbGFzcz1cInBhLTBcIj5cbiAgICAgICAgICA8di1saXN0LXRpbGUgYXZhdGFyPlxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLWF2YXRhcj5cbiAgICAgICAgICAgICAgPGltZyA6c3JjPVwidXNlci5waG90b191cmxcIj5cbiAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtYXZhdGFyPlxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyB1c2VyLm5hbWUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgIDwvdi1saXN0LXRpbGU+XG4gICAgICAgIDwvdi1saXN0PlxuICAgICAgPC92LXRvb2xiYXI+XG4gICAgICA8di1saXN0IGRlbnNlIGNsYXNzPVwicHQtMFwiPlxuICAgICAgICA8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuICAgICAgICA8di1saXN0LXRpbGUgdi1mb3I9XCJ0YWIgaW4gdGFic1wiIDprZXk9XCJ0YWIuaWRcIiA6dG89XCJ7IG5hbWU6IHRhYi5yb3V0ZSB9XCI+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICAgIDx2LWljb24+e3sgdGFiLmljb24gfX08L3YtaWNvbj5cbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cbiAgICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyB0YWIubmFtZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICA8L3YtbGlzdC10aWxlPlxuICAgICAgPC92LWxpc3Q+XG4gICAgICBcbiAgICA8ZGl2IGlkPVwidGhlbWUtc3dpdGNoZXJcIj5cbiAgICAgIDx2LXN3aXRjaFxuICAgICAgICA6bGFiZWw9XCIkdCgnZGFya190aGVtZScpXCJcbiAgICAgICAgdi1tb2RlbD1cImRhcmtcIlxuICAgICAgPjwvdi1zd2l0Y2g+XG4gICAgPC9kaXY+IFxuICAgIDwvdi1uYXZpZ2F0aW9uLWRyYXdlcj5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3NfX2NvbnRlbnQgY2FyZFwiPlxuICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIiBtb2RlPVwib3V0LWluXCI+XG4gICAgICAgIDxyb3V0ZXItdmlldy8+XG4gICAgICA8L3RyYW5zaXRpb24+XG4gICAgPC9kaXY+XG4gIDwvdi1jb250ZW50PiAgIC0tPiAgXG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NldHRpbmdzL3Byb2ZpbGUnO1xuaW1wb3J0IHBhc3N3b3JkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2V0dGluZ3MvcGFzc3dvcmQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1pZGRsZXdhcmU6ICdhdXRoJyxcbiAgY29tcG9uZW50czoge1xuICAgICdzZXR0aW5ncy1wYXNzd29yZCc6IHBhc3N3b3JkLFxuICAgICdzZXR0aW5ncy1wcm9maWxlJzogcHJvZmlsZVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXG4gICAgICB0aGVtZTogJ3RoZW1lL2RhcmsnXG4gICAgfSksXG4gICAgdGFicyAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgaWNvbjogJ3VzZXInLFxuICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3Byb2ZpbGUnKSxcbiAgICAgICAgICBjb21wb25lbnQ6ICdzZXR0aW5ncy1wcm9maWxlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgaWNvbjogJ2xvY2snLFxuICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3Bhc3N3b3JkJyksXG4gICAgICAgICAgY29tcG9uZW50OiAnc2V0dGluZ3MtcGFzc3dvcmQnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGltYWdlKCkge1xuICAgICAgcmV0dXJuICh0aGlzLnVzZXIpID8gdGhpcy51c2VyLnBob3RvX3VybCA6IGZhbHNlO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmRhcmsgPSB0aGlzLnRoZW1lO1xuICB9LFxuICB3YXRjaDoge1xuICAgIGRhcmsoKSB7XG4gICAgICB0aGlzLnN3aXRjaFRoZW1lKHRoaXMuZGFyaylcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IG1hcEFjdGlvbnMoe1xuICAgIHN3aXRjaFRoZW1lOiAndGhlbWUvc3dpdGNoVGhlbWUnXG4gIH0pXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuLmNhcmQge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uc3ZnLWlubGluZS0tZmEge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi50YWJzIHtcbiAgbWFyZ2luOiAzMHB4O1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Byb2ZpbGUudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02YTAzODM3MlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Byb2ZpbGUudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxzZXR0aW5nc1xcXFxwcm9maWxlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02YTAzODM3MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZhMDM4MzcyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2V0dGluZ3MvcHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCI8dGVtcGxhdGU+XG4gIDx2LWZvcm0gdi1tb2RlbD1cInZhbGlkXCIgQHN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlXCIgQGtleWRvd249XCJmb3JtLm9uS2V5ZG93bigkZXZlbnQpXCI+XG4gICAgPHYtdGV4dC1maWVsZFxuICAgICAgOmxhYmVsPVwiJHQoJ25hbWUnKVwiXG4gICAgICB2LW1vZGVsPVwiZm9ybS5uYW1lXCJcbiAgICAgIDpydWxlcz1cImZvcm0ubmFtZVJ1bGVzXCJcbiAgICAgIDpjb3VudGVyPVwiNzBcIlxuICAgICAgcHJlcGVuZC1pY29uPVwicGVyc29uXCJcbiAgICAgIHJlcXVpcmVkXG4gICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJuYW1lXCIvPlxuXG4gICAgPHYtdGV4dC1maWVsZFxuICAgICAgbGFiZWw9XCLQpNCw0LzQuNC70LjRj1wiXG4gICAgICB2LW1vZGVsPVwiZm9ybS5sYXN0X25hbWVcIlxuICAgICAgOnJ1bGVzPVwiZm9ybS5uYW1lUnVsZXNcIlxuICAgICAgOmNvdW50ZXI9XCI3MFwiXG4gICAgICBwcmVwZW5kLWljb249XCJwZXJzb25cIlxuICAgID48L3YtdGV4dC1maWVsZD5cblxuICAgIDx2LXRleHQtZmllbGRcbiAgICAgIGxhYmVsPVwi0J7RgtGH0LXRgdGC0LLQvlwiXG4gICAgICB2LW1vZGVsPVwiZm9ybS5wYXRyb255bWljXCJcbiAgICAgIDpydWxlcz1cImZvcm0ubmFtZVJ1bGVzXCJcbiAgICAgIDpjb3VudGVyPVwiNzBcIlxuICAgICAgcHJlcGVuZC1pY29uPVwicGVyc29uXCJcbiAgICA+PC92LXRleHQtZmllbGQ+XG5cbiAgICA8di10ZXh0LWZpZWxkXG4gICAgICA6bGFiZWw9XCIkdCgnZW1haWwnKVwiXG4gICAgICB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiXG4gICAgICA6cnVsZXM9XCJmb3JtLmVtYWlsUnVsZXNcIlxuICAgICAgcHJlcGVuZC1pY29uPVwiZW1haWxcIlxuICAgICAgcmVxdWlyZWRcbiAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImVtYWlsXCIgLz5cbiAgXG4gICAgPHYtdGV4dC1maWVsZFxuICAgICAgbGFiZWw9XCLQkNC00YDQtdGBXCJcbiAgICAgIHYtbW9kZWw9XCJmb3JtLmFkZHJlc3NcIlxuICAgICAgcHJlcGVuZC1pY29uPVwicGVyc29uXCJcbiAgICA+PC92LXRleHQtZmllbGQ+XG5cbiAgPHYtdGV4dC1maWVsZFxuICAgIGxhYmVsPVwi0JDQtNGA0LXRgVwiXG4gICAgdi1tb2RlbD1cImZvcm0ucGhvbmVfbnVtYmVyXCJcbiAgICBwcmVwZW5kLWljb249XCJwZXJzb25cIlxuICA+PC92LXRleHQtZmllbGQ+XG5cbiAgICA8di1idG4gbGFyZ2UgYmxvY2sgOmxvYWRpbmc9XCJmb3JtLmJ1c3lcIiB0eXBlPVwic3VibWl0XCI+e3sgJHQoJ3VwZGF0ZScpIH19PC92LWJ0bj5cbiAgPC92LWZvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzY3JvbGxUb1RvcDogZmFsc2UsXG5cbiAgbWV0YUluZm8gKCkge1xuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdzZXR0aW5ncycpIH1cbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGRhdGU6IG51bGwsXG4gICAgbWVudTogZmFsc2UsXG4gICAgdmFsaWQ6IGZhbHNlLFxuICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgbmFtZVJ1bGVzOiBbXG4gICAgICAgIHYgPT4gISF2IHx8IHRoaXMuJHQoJ3JlcXVpcmVkX3ZhbHVlJyksXG4gICAgICAgIHYgPT4gdi5sZW5ndGggPD0gNzAgfHwgJ05hbWUgbXVzdCBiZSBsZXNzIHRoYW4gNzAgY2hhcmFjdGVycydcbiAgICAgIF0sXG4gICAgICBsYXN0X25hbWU6ICcnLFxuICAgICAgcGF0cm9ueW1pYzogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBlbWFpbFJ1bGVzOiBbXG4gICAgICAgIHYgPT4gISF2IHx8IHRoaXMuJHQoJ3JlcXVpcmVkX3ZhbHVlJyksXG4gICAgICAgIHYgPT4gL15cXHcrKFsuLV0/XFx3KykqQFxcdysoWy4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLnRlc3QodikgfHwgJ0UtbWFpbCBtdXN0IGJlIHZhbGlkJ1xuICAgICAgXSxcbiAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgcGhvbmVfbnVtYmVyOiBudWxsLFxuICAgIH0pXG4gIH0pLFxuXG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcbiAgICB1c2VyOiAnYXV0aC91c2VyJ1xuICB9KSxcblxuICBjcmVhdGVkICgpIHtcbiAgICAvLyDQl9Cw0L/QvtC70L3Rj9C10Lwg0YTQvtGA0LzRgyDQtNCw0L3QvdGL0LzQuCDRjtC30LXRgNCwLlxuICAgIHRoaXMuZm9ybS5rZXlzKCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy5mb3JtW2tleV0gPSB0aGlzLnVzZXJba2V5XVxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIHVwZGF0ZSAoKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZm9ybS5wYXRjaCgnL2FwaS9zZXR0aW5ncy9wcm9maWxlJylcblxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvdXBkYXRlVXNlcicsIHsgdXNlcjogZGF0YSB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NldHRpbmdzL3Byb2ZpbGUudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtZm9ybVwiLFxuICAgIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBfdm0udXBkYXRlKCRldmVudClcbiAgICAgICAgfSxcbiAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmZvcm0ub25LZXlkb3duKCRldmVudClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiBfdm0udmFsaWQsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICBfdm0udmFsaWQgPSAkJHZcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS4kdChcIm5hbWVcIiksXG4gICAgICAgICAgcnVsZXM6IF92bS5mb3JtLm5hbWVSdWxlcyxcbiAgICAgICAgICBjb3VudGVyOiA3MCxcbiAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInBlcnNvblwiLFxuICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcIm5hbWVcIiB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogXCLQpNCw0LzQuNC70LjRj1wiLFxuICAgICAgICAgIHJ1bGVzOiBfdm0uZm9ybS5uYW1lUnVsZXMsXG4gICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJwZXJzb25cIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5sYXN0X25hbWUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibGFzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5sYXN0X25hbWVcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IFwi0J7RgtGH0LXRgdGC0LLQvlwiLFxuICAgICAgICAgIHJ1bGVzOiBfdm0uZm9ybS5uYW1lUnVsZXMsXG4gICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJwZXJzb25cIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXRyb255bWljLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhdHJvbnltaWNcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhdHJvbnltaWNcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS4kdChcImVtYWlsXCIpLFxuICAgICAgICAgIHJ1bGVzOiBfdm0uZm9ybS5lbWFpbFJ1bGVzLFxuICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZW1haWxcIixcbiAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1haWxcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQkNC00YDQtdGBXCIsIFwicHJlcGVuZC1pY29uXCI6IFwicGVyc29uXCIgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uYWRkcmVzcyxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJhZGRyZXNzXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5hZGRyZXNzXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQkNC00YDQtdGBXCIsIFwicHJlcGVuZC1pY29uXCI6IFwicGVyc29uXCIgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGhvbmVfbnVtYmVyLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBob25lX251bWJlclwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGhvbmVfbnVtYmVyXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1idG5cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgbG9hZGluZzogX3ZtLmZvcm0uYnVzeSxcbiAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInVwZGF0ZVwiKSkpXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTZhMDM4MzcyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02YTAzODM3MlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Bhc3N3b3JkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzA0Mzc5ZWRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYXNzd29yZC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXHNldHRpbmdzXFxcXHBhc3N3b3JkLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03MDQzNzllZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTcwNDM3OWVkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2V0dGluZ3MvcGFzc3dvcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxODBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiPHRlbXBsYXRlPlxuICAgIDx2LWZvcm0gdi1tb2RlbD1cInZhbGlkXCIgQHN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlXCIgQGtleWRvd249XCJmb3JtLm9uS2V5ZG93bigkZXZlbnQpXCI+XG4gICAgPHYtdGV4dC1maWVsZFxuICAgICAgOmxhYmVsPVwiJHQoJ25ld19wYXNzd29yZCcpXCJcbiAgICAgIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkXCJcbiAgICAgIDpydWxlcz1cInBhc3N3b3JkUnVsZXNcIlxuICAgICAgOmNvdW50ZXI9XCIxNjBcIlxuICAgICAgcHJlcGVuZC1pY29uPVwidnBuX2tleVwiXG4gICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgcmVxdWlyZWRcbiAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBhc3N3b3JkXCIvPlxuICAgIDx2LXRleHQtZmllbGRcbiAgICAgIDpsYWJlbD1cIiR0KCdjb25maXJtX3Bhc3N3b3JkJylcIlxuICAgICAgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgIDpydWxlcz1cInBhc3N3b3JkUnVsZXNcIlxuICAgICAgOmNvdW50ZXI9XCIxNjBcIlxuICAgICAgcHJlcGVuZC1pY29uPVwidnBuX2tleVwiXG4gICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgcmVxdWlyZWRcbiAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIC8+XG5cbiAgICA8di1idG4gbGFyZ2UgYmxvY2sgOmxvYWRpbmc9XCJmb3JtLmJ1c3lcIiB0eXBlPVwic3VibWl0XCI+e3sgJHQoJ3VwZGF0ZScpIH19PC92LWJ0bj5cbiAgPC92LWZvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2Nyb2xsVG9Ub3A6IGZhbHNlLFxuXG4gIG1ldGFJbmZvICgpIHtcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgnc2V0dGluZ3MnKSB9XG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICB2YWxpZDogZmFsc2UsXG4gICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJ1xuICAgIH0pLFxuICAgIHBhc3N3b3JkUnVsZXM6IFtcbiAgICAgIHYgPT4gISF2IHx8IFwi0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtVwiXG4gICAgXSxcbiAgfSksXG5cbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIHVwZGF0ZSAoKSB7XG4gICAgICBhd2FpdCB0aGlzLmZvcm0ucGF0Y2goJy9hcGkvc2V0dGluZ3MvcGFzc3dvcmQnKVxuXG4gICAgICB0aGlzLmZvcm0ucmVzZXQoKVxuICAgICAgdGhpcy4kcm91dGVyLmdvKC0xKTtcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wYXNzd29yZC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1mb3JtXCIsXG4gICAge1xuICAgICAgb246IHtcbiAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIF92bS51cGRhdGUoJGV2ZW50KVxuICAgICAgICB9LFxuICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZm9ybS5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbW9kZWw6IHtcbiAgICAgICAgdmFsdWU6IF92bS52YWxpZCxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgIF92bS52YWxpZCA9ICQkdlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiBcInZhbGlkXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwibmV3X3Bhc3N3b3JkXCIpLFxuICAgICAgICAgIHJ1bGVzOiBfdm0ucGFzc3dvcmRSdWxlcyxcbiAgICAgICAgICBjb3VudGVyOiAxNjAsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJ2cG5fa2V5XCIsXG4gICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcInBhc3N3b3JkXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS4kdChcImNvbmZpcm1fcGFzc3dvcmRcIiksXG4gICAgICAgICAgcnVsZXM6IF92bS5wYXNzd29yZFJ1bGVzLFxuICAgICAgICAgIGNvdW50ZXI6IDE2MCxcbiAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInZwbl9rZXlcIixcbiAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1idG5cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgbG9hZGluZzogX3ZtLmZvcm0uYnVzeSxcbiAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInVwZGF0ZVwiKSkpXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTcwNDM3OWVkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03MDQzNzllZFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wYXNzd29yZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi10YWJzXCIsXG4gICAgeyBhdHRyczogeyBkYXJrOiBcIlwiLCBcInNsaWRlci1jb2xvclwiOiBcInllbGxvd1wiIH0gfSxcbiAgICBbXG4gICAgICBfdm0uX2woX3ZtLnRhYnMsIGZ1bmN0aW9uKHRhYikge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJ2LXRhYlwiLFxuICAgICAgICAgIHsga2V5OiB0YWIuaWQsIGF0dHJzOiB7IHJpcHBsZTogXCJcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IHRhYi5pY29uIH0gfSksXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyh0YWIubmFtZSkgKyBcIlxcbiAgICBcIilcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS50YWJzLCBmdW5jdGlvbih0YWIpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwidi10YWItaXRlbVwiLFxuICAgICAgICAgIHsga2V5OiB0YWIuaWQgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGF0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgW19jKHRhYi5jb21wb25lbnQsIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTc0ZGZlNzcwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03NGRmZTc3MFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwic291cmNlUm9vdCI6IiJ9