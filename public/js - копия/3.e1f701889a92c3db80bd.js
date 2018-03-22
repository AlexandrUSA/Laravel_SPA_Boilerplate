webpackJsonp([3],{

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
var __vue_template__ = __webpack_require__(186)
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

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(178);
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

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.card[data-v-74dfe770] {\n  padding: 30px;\n}\n.svg-inline--fa[data-v-74dfe770] {\n  margin-right: 15px;\n}\n.tabs[data-v-74dfe770] {\n  margin: 30px;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/settings/resources/assets/js/pages/settings/index.vue"],"names":[],"mappings":";AAmHA;EACA,cAAA;CACA;AAEA;EACA,mBAAA;CACA;AAEA;EACA,aAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <v-tabs\n      dark\n      slider-color=\"yellow\"\n    >\n      <v-tab\n        v-for=\"tab in tabs\"\n        :key=\"tab.id\"\n        ripple\n      >\n        <fa :icon=\"tab.icon\" />\n        {{ tab.name }}\n      </v-tab>\n      <v-tab-item\n        v-for=\"tab in tabs\"\n        :key=\"tab.id\"\n      >\n        <v-card flat>\n          <component :is=\"tab.component\"></component> \n        </v-card>\n      </v-tab-item>\n    </v-tabs>\n  <!-- <v-content>\n    <v-navigation-drawer stateless permanent floating value=\"true\">\n      <v-toolbar flat class=\"transparent\">\n        <v-list class=\"pa-0\">\n          <v-list-tile avatar>\n            <v-list-tile-avatar>\n              <img :src=\"user.photo_url\">\n            </v-list-tile-avatar>\n            <v-list-tile-content>\n              <v-list-tile-title>{{ user.name }}</v-list-tile-title>\n            </v-list-tile-content>\n          </v-list-tile>\n        </v-list>\n      </v-toolbar>\n      <v-list dense class=\"pt-0\">\n        <v-divider></v-divider>\n        <v-list-tile v-for=\"tab in tabs\" :key=\"tab.id\" :to=\"{ name: tab.route }\">\n          <v-list-tile-action>\n            <v-icon>{{ tab.icon }}</v-icon>\n          </v-list-tile-action>\n          <v-list-tile-content>\n            <v-list-tile-title>{{ tab.name }}</v-list-tile-title>\n          </v-list-tile-content>\n        </v-list-tile>\n      </v-list>\n      \n    <div id=\"theme-switcher\">\n      <v-switch\n        :label=\"$t('dark_theme')\"\n        v-model=\"dark\"\n      ></v-switch>\n    </div> \n    </v-navigation-drawer>\n    <div class=\"settings__content card\">\n      <transition name=\"fade\" mode=\"out-in\">\n        <router-view/>\n      </transition>\n    </div>\n  </v-content>   -->  \n\n</template>\n\n<script>\nimport { mapGetters, mapActions } from 'vuex';\nimport profile from '../../components/settings/profile';\nimport password from '../../components/settings/password';\n\nexport default {\n  middleware: 'auth',\n  components: {\n    'settings-password': password,\n    'settings-profile': profile\n  },\n  computed: {\n    ...mapGetters({\n      user: 'auth/user',\n      theme: 'theme/dark'\n    }),\n    tabs () {\n      return [\n        {\n          id: 0,\n          icon: 'user',\n          name: this.$t('profile'),\n          component: 'settings-profile'\n        },\n        {\n          id: 1,\n          icon: 'lock',\n          name: this.$t('password'),\n          component: 'settings-password'\n        }\n      ]\n    },\n    image() {\n      return (this.user) ? this.user.photo_url : false;\n    }\n  },\n  created() {\n    this.dark = this.theme;\n  },\n  watch: {\n    dark() {\n      this.switchTheme(this.dark)\n    }\n  },\n  methods: mapActions({\n    switchTheme: 'theme/switchTheme'\n  })\n}\n</script>\n\n<style scoped>\n\n.card {\n  padding: 30px;\n}\n\n.svg-inline--fa {\n  margin-right: 15px;\n}\n\n.tabs {\n  margin: 30px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_settings_profile__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_settings_profile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_settings_profile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_settings_password__ = __webpack_require__(183);
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

/***/ 181:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/OSPanel/domains/web/resources/assets/js/components/settings/profile.vue: Unexpected token, expected , (112:6)\n\n\u001b[0m \u001b[90m 110 | \u001b[39m        v \u001b[33m=>\u001b[39m \u001b[35m/^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/\u001b[39m\u001b[33m.\u001b[39mtest(v) \u001b[33m||\u001b[39m \u001b[32m'E-mail must be valid'\u001b[39m\n \u001b[90m 111 | \u001b[39m      ]\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 112 | \u001b[39m      address\u001b[33m:\u001b[39m \u001b[32m''\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m     | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 113 | \u001b[39m      birthday\u001b[33m:\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 114 | \u001b[39m      phone_number\u001b[33m:\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 115 | \u001b[39m    })\u001b[0m\n");

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
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c(
                "v-menu",
                {
                  ref: "menu",
                  attrs: {
                    lazy: "",
                    "close-on-content-click": false,
                    transition: "scale-transition",
                    "offset-y": "",
                    "full-width": "",
                    "nudge-right": 40,
                    "min-width": "290px",
                    "return-value": _vm.date
                  },
                  on: {
                    "update:returnValue": function($event) {
                      _vm.date = $event
                    }
                  },
                  model: {
                    value: _vm.menu,
                    callback: function($$v) {
                      _vm.menu = $$v
                    },
                    expression: "menu"
                  }
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      slot: "activator",
                      label: _vm.$t("birthday"),
                      "prepend-icon": "event",
                      readonly: ""
                    },
                    slot: "activator",
                    model: {
                      value: _vm.form.birthday,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "birthday", $$v)
                      },
                      expression: "form.birthday"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-date-picker",
                    {
                      attrs: { "no-title": "", scrollable: "" },
                      model: {
                        value: _vm.form.birthday,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "birthday", $$v)
                        },
                        expression: "form.birthday"
                      }
                    },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { flat: "", color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.menu = false
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("cancel")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { flat: "", color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.$refs.menu.save(_vm.date)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("ok")))]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
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

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(184)
/* template */
var __vue_template__ = __webpack_require__(185)
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

/***/ 184:
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

/***/ 185:
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

/***/ 186:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZT9hMmYzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlPzk3YmUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2V0dGluZ3MvcHJvZmlsZS52dWU/NDFkNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2V0dGluZ3MvcGFzc3dvcmQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2V0dGluZ3MvcGFzc3dvcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wYXNzd29yZC52dWU/ZTBiNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZT9jNTQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXFNO0FBQ3JNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFrTDtBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLHFDQUFxQyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0IsYUFBYSxFQUFFO0FBQ2hEO0FBQ0Esc0JBQXNCLFNBQVMsaUJBQWlCLEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTLFdBQVcsRUFBRTtBQUNyQyxrQ0FBa0MsbUJBQW1CO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzMuZTFmNzAxODg5YTkyYzNkYjgwYmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc0ZGZlNzcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzRkZmU3NzBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNzRkZmU3NzBcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxzZXR0aW5nc1xcXFxpbmRleC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzRkZmU3NzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03NGRmZTc3MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzRkZmU3NzBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImFlYjk1NmIwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc0ZGZlNzcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc0ZGZlNzcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTc0ZGZlNzcwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jYXJkW2RhdGEtdi03NGRmZTc3MF0ge1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhW2RhdGEtdi03NGRmZTc3MF0ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG4udGFic1tkYXRhLXYtNzRkZmU3NzBdIHtcXG4gIG1hcmdpbjogMzBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBbUhBO0VBQ0EsY0FBQTtDQUNBO0FBRUE7RUFDQSxtQkFBQTtDQUNBO0FBRUE7RUFDQSxhQUFBO0NBQ0FcIixcImZpbGVcIjpcImluZGV4LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDx2LXRhYnNcXG4gICAgICBkYXJrXFxuICAgICAgc2xpZGVyLWNvbG9yPVxcXCJ5ZWxsb3dcXFwiXFxuICAgID5cXG4gICAgICA8di10YWJcXG4gICAgICAgIHYtZm9yPVxcXCJ0YWIgaW4gdGFic1xcXCJcXG4gICAgICAgIDprZXk9XFxcInRhYi5pZFxcXCJcXG4gICAgICAgIHJpcHBsZVxcbiAgICAgID5cXG4gICAgICAgIDxmYSA6aWNvbj1cXFwidGFiLmljb25cXFwiIC8+XFxuICAgICAgICB7eyB0YWIubmFtZSB9fVxcbiAgICAgIDwvdi10YWI+XFxuICAgICAgPHYtdGFiLWl0ZW1cXG4gICAgICAgIHYtZm9yPVxcXCJ0YWIgaW4gdGFic1xcXCJcXG4gICAgICAgIDprZXk9XFxcInRhYi5pZFxcXCJcXG4gICAgICA+XFxuICAgICAgICA8di1jYXJkIGZsYXQ+XFxuICAgICAgICAgIDxjb21wb25lbnQgOmlzPVxcXCJ0YWIuY29tcG9uZW50XFxcIj48L2NvbXBvbmVudD4gXFxuICAgICAgICA8L3YtY2FyZD5cXG4gICAgICA8L3YtdGFiLWl0ZW0+XFxuICAgIDwvdi10YWJzPlxcbiAgPCEtLSA8di1jb250ZW50PlxcbiAgICA8di1uYXZpZ2F0aW9uLWRyYXdlciBzdGF0ZWxlc3MgcGVybWFuZW50IGZsb2F0aW5nIHZhbHVlPVxcXCJ0cnVlXFxcIj5cXG4gICAgICA8di10b29sYmFyIGZsYXQgY2xhc3M9XFxcInRyYW5zcGFyZW50XFxcIj5cXG4gICAgICAgIDx2LWxpc3QgY2xhc3M9XFxcInBhLTBcXFwiPlxcbiAgICAgICAgICA8di1saXN0LXRpbGUgYXZhdGFyPlxcbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1hdmF0YXI+XFxuICAgICAgICAgICAgICA8aW1nIDpzcmM9XFxcInVzZXIucGhvdG9fdXJsXFxcIj5cXG4gICAgICAgICAgICA8L3YtbGlzdC10aWxlLWF2YXRhcj5cXG4gICAgICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyB1c2VyLm5hbWUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxcbiAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgICAgPC92LWxpc3QtdGlsZT5cXG4gICAgICAgIDwvdi1saXN0PlxcbiAgICAgIDwvdi10b29sYmFyPlxcbiAgICAgIDx2LWxpc3QgZGVuc2UgY2xhc3M9XFxcInB0LTBcXFwiPlxcbiAgICAgICAgPHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXG4gICAgICAgIDx2LWxpc3QtdGlsZSB2LWZvcj1cXFwidGFiIGluIHRhYnNcXFwiIDprZXk9XFxcInRhYi5pZFxcXCIgOnRvPVxcXCJ7IG5hbWU6IHRhYi5yb3V0ZSB9XFxcIj5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgICAgICA8di1pY29uPnt7IHRhYi5pY29uIH19PC92LWljb24+XFxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgdGFiLm5hbWUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxcbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgICA8L3YtbGlzdC10aWxlPlxcbiAgICAgIDwvdi1saXN0PlxcbiAgICAgIFxcbiAgICA8ZGl2IGlkPVxcXCJ0aGVtZS1zd2l0Y2hlclxcXCI+XFxuICAgICAgPHYtc3dpdGNoXFxuICAgICAgICA6bGFiZWw9XFxcIiR0KCdkYXJrX3RoZW1lJylcXFwiXFxuICAgICAgICB2LW1vZGVsPVxcXCJkYXJrXFxcIlxcbiAgICAgID48L3Ytc3dpdGNoPlxcbiAgICA8L2Rpdj4gXFxuICAgIDwvdi1uYXZpZ2F0aW9uLWRyYXdlcj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2NvbnRlbnQgY2FyZFxcXCI+XFxuICAgICAgPHRyYW5zaXRpb24gbmFtZT1cXFwiZmFkZVxcXCIgbW9kZT1cXFwib3V0LWluXFxcIj5cXG4gICAgICAgIDxyb3V0ZXItdmlldy8+XFxuICAgICAgPC90cmFuc2l0aW9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvdi1jb250ZW50PiAgIC0tPiAgXFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4JztcXG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NldHRpbmdzL3Byb2ZpbGUnO1xcbmltcG9ydCBwYXNzd29yZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NldHRpbmdzL3Bhc3N3b3JkJztcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBtaWRkbGV3YXJlOiAnYXV0aCcsXFxuICBjb21wb25lbnRzOiB7XFxuICAgICdzZXR0aW5ncy1wYXNzd29yZCc6IHBhc3N3b3JkLFxcbiAgICAnc2V0dGluZ3MtcHJvZmlsZSc6IHByb2ZpbGVcXG4gIH0sXFxuICBjb21wdXRlZDoge1xcbiAgICAuLi5tYXBHZXR0ZXJzKHtcXG4gICAgICB1c2VyOiAnYXV0aC91c2VyJyxcXG4gICAgICB0aGVtZTogJ3RoZW1lL2RhcmsnXFxuICAgIH0pLFxcbiAgICB0YWJzICgpIHtcXG4gICAgICByZXR1cm4gW1xcbiAgICAgICAge1xcbiAgICAgICAgICBpZDogMCxcXG4gICAgICAgICAgaWNvbjogJ3VzZXInLFxcbiAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdwcm9maWxlJyksXFxuICAgICAgICAgIGNvbXBvbmVudDogJ3NldHRpbmdzLXByb2ZpbGUnXFxuICAgICAgICB9LFxcbiAgICAgICAge1xcbiAgICAgICAgICBpZDogMSxcXG4gICAgICAgICAgaWNvbjogJ2xvY2snLFxcbiAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdwYXNzd29yZCcpLFxcbiAgICAgICAgICBjb21wb25lbnQ6ICdzZXR0aW5ncy1wYXNzd29yZCdcXG4gICAgICAgIH1cXG4gICAgICBdXFxuICAgIH0sXFxuICAgIGltYWdlKCkge1xcbiAgICAgIHJldHVybiAodGhpcy51c2VyKSA/IHRoaXMudXNlci5waG90b191cmwgOiBmYWxzZTtcXG4gICAgfVxcbiAgfSxcXG4gIGNyZWF0ZWQoKSB7XFxuICAgIHRoaXMuZGFyayA9IHRoaXMudGhlbWU7XFxuICB9LFxcbiAgd2F0Y2g6IHtcXG4gICAgZGFyaygpIHtcXG4gICAgICB0aGlzLnN3aXRjaFRoZW1lKHRoaXMuZGFyaylcXG4gICAgfVxcbiAgfSxcXG4gIG1ldGhvZHM6IG1hcEFjdGlvbnMoe1xcbiAgICBzd2l0Y2hUaGVtZTogJ3RoZW1lL3N3aXRjaFRoZW1lJ1xcbiAgfSlcXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG5cXG4uY2FyZCB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4udGFicyB7XFxuICBtYXJnaW46IDMwcHg7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTc0ZGZlNzcwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiPHRlbXBsYXRlPlxuICAgIDx2LXRhYnNcbiAgICAgIGRhcmtcbiAgICAgIHNsaWRlci1jb2xvcj1cInllbGxvd1wiXG4gICAgPlxuICAgICAgPHYtdGFiXG4gICAgICAgIHYtZm9yPVwidGFiIGluIHRhYnNcIlxuICAgICAgICA6a2V5PVwidGFiLmlkXCJcbiAgICAgICAgcmlwcGxlXG4gICAgICA+XG4gICAgICAgIDxmYSA6aWNvbj1cInRhYi5pY29uXCIgLz5cbiAgICAgICAge3sgdGFiLm5hbWUgfX1cbiAgICAgIDwvdi10YWI+XG4gICAgICA8di10YWItaXRlbVxuICAgICAgICB2LWZvcj1cInRhYiBpbiB0YWJzXCJcbiAgICAgICAgOmtleT1cInRhYi5pZFwiXG4gICAgICA+XG4gICAgICAgIDx2LWNhcmQgZmxhdD5cbiAgICAgICAgICA8Y29tcG9uZW50IDppcz1cInRhYi5jb21wb25lbnRcIj48L2NvbXBvbmVudD4gXG4gICAgICAgIDwvdi1jYXJkPlxuICAgICAgPC92LXRhYi1pdGVtPlxuICAgIDwvdi10YWJzPlxuICA8IS0tIDx2LWNvbnRlbnQ+XG4gICAgPHYtbmF2aWdhdGlvbi1kcmF3ZXIgc3RhdGVsZXNzIHBlcm1hbmVudCBmbG9hdGluZyB2YWx1ZT1cInRydWVcIj5cbiAgICAgIDx2LXRvb2xiYXIgZmxhdCBjbGFzcz1cInRyYW5zcGFyZW50XCI+XG4gICAgICAgIDx2LWxpc3QgY2xhc3M9XCJwYS0wXCI+XG4gICAgICAgICAgPHYtbGlzdC10aWxlIGF2YXRhcj5cbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1hdmF0YXI+XG4gICAgICAgICAgICAgIDxpbWcgOnNyYz1cInVzZXIucGhvdG9fdXJsXCI+XG4gICAgICAgICAgICA8L3YtbGlzdC10aWxlLWF2YXRhcj5cbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgdXNlci5uYW1lIH19PC92LWxpc3QtdGlsZS10aXRsZT5cbiAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICA8L3YtbGlzdC10aWxlPlxuICAgICAgICA8L3YtbGlzdD5cbiAgICAgIDwvdi10b29sYmFyPlxuICAgICAgPHYtbGlzdCBkZW5zZSBjbGFzcz1cInB0LTBcIj5cbiAgICAgICAgPHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cbiAgICAgICAgPHYtbGlzdC10aWxlIHYtZm9yPVwidGFiIGluIHRhYnNcIiA6a2V5PVwidGFiLmlkXCIgOnRvPVwieyBuYW1lOiB0YWIucm91dGUgfVwiPlxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgICA8di1pY29uPnt7IHRhYi5pY29uIH19PC92LWljb24+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgdGFiLm5hbWUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICAgIDwvdi1saXN0PlxuICAgICAgXG4gICAgPGRpdiBpZD1cInRoZW1lLXN3aXRjaGVyXCI+XG4gICAgICA8di1zd2l0Y2hcbiAgICAgICAgOmxhYmVsPVwiJHQoJ2RhcmtfdGhlbWUnKVwiXG4gICAgICAgIHYtbW9kZWw9XCJkYXJrXCJcbiAgICAgID48L3Ytc3dpdGNoPlxuICAgIDwvZGl2PiBcbiAgICA8L3YtbmF2aWdhdGlvbi1kcmF3ZXI+XG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzX19jb250ZW50IGNhcmRcIj5cbiAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCIgbW9kZT1cIm91dC1pblwiPlxuICAgICAgICA8cm91dGVyLXZpZXcvPlxuICAgICAgPC90cmFuc2l0aW9uPlxuICAgIDwvZGl2PlxuICA8L3YtY29udGVudD4gICAtLT4gIFxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IHByb2ZpbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZXR0aW5ncy9wcm9maWxlJztcbmltcG9ydCBwYXNzd29yZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NldHRpbmdzL3Bhc3N3b3JkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaWRkbGV3YXJlOiAnYXV0aCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICAnc2V0dGluZ3MtcGFzc3dvcmQnOiBwYXNzd29yZCxcbiAgICAnc2V0dGluZ3MtcHJvZmlsZSc6IHByb2ZpbGVcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxuICAgICAgdGhlbWU6ICd0aGVtZS9kYXJrJ1xuICAgIH0pLFxuICAgIHRhYnMgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgIGljb246ICd1c2VyJyxcbiAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdwcm9maWxlJyksXG4gICAgICAgICAgY29tcG9uZW50OiAnc2V0dGluZ3MtcHJvZmlsZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIGljb246ICdsb2NrJyxcbiAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdwYXNzd29yZCcpLFxuICAgICAgICAgIGNvbXBvbmVudDogJ3NldHRpbmdzLXBhc3N3b3JkJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBpbWFnZSgpIHtcbiAgICAgIHJldHVybiAodGhpcy51c2VyKSA/IHRoaXMudXNlci5waG90b191cmwgOiBmYWxzZTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5kYXJrID0gdGhpcy50aGVtZTtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBkYXJrKCkge1xuICAgICAgdGhpcy5zd2l0Y2hUaGVtZSh0aGlzLmRhcmspXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiBtYXBBY3Rpb25zKHtcbiAgICBzd2l0Y2hUaGVtZTogJ3RoZW1lL3N3aXRjaFRoZW1lJ1xuICB9KVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbi5jYXJkIHtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLnN2Zy1pbmxpbmUtLWZhIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4udGFicyB7XG4gIG1hcmdpbjogMzBweDtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wcm9maWxlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmEwMzgzNzJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wcm9maWxlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcc2V0dGluZ3NcXFxccHJvZmlsZS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmEwMzgzNzJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02YTAzODM3MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NldHRpbmdzL3Byb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxODBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtZm9ybVwiLFxuICAgIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBfdm0udXBkYXRlKCRldmVudClcbiAgICAgICAgfSxcbiAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmZvcm0ub25LZXlkb3duKCRldmVudClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiBfdm0udmFsaWQsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICBfdm0udmFsaWQgPSAkJHZcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS4kdChcIm5hbWVcIiksXG4gICAgICAgICAgcnVsZXM6IF92bS5mb3JtLm5hbWVSdWxlcyxcbiAgICAgICAgICBjb3VudGVyOiA3MCxcbiAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInBlcnNvblwiLFxuICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcIm5hbWVcIiB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogXCLQpNCw0LzQuNC70LjRj1wiLFxuICAgICAgICAgIHJ1bGVzOiBfdm0uZm9ybS5uYW1lUnVsZXMsXG4gICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJwZXJzb25cIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5sYXN0X25hbWUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibGFzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5sYXN0X25hbWVcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IFwi0J7RgtGH0LXRgdGC0LLQvlwiLFxuICAgICAgICAgIHJ1bGVzOiBfdm0uZm9ybS5uYW1lUnVsZXMsXG4gICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJwZXJzb25cIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXRyb255bWljLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhdHJvbnltaWNcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhdHJvbnltaWNcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS4kdChcImVtYWlsXCIpLFxuICAgICAgICAgIHJ1bGVzOiBfdm0uZm9ybS5lbWFpbFJ1bGVzLFxuICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZW1haWxcIixcbiAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1haWxcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQkNC00YDQtdGBXCIsIFwicHJlcGVuZC1pY29uXCI6IFwicGVyc29uXCIgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uYWRkcmVzcyxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJhZGRyZXNzXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5hZGRyZXNzXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LW1lbnVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwibWVudVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGF6eTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjbG9zZS1vbi1jb250ZW50LWNsaWNrXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInNjYWxlLXRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJvZmZzZXQteVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcImZ1bGwtd2lkdGhcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJudWRnZS1yaWdodFwiOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgXCJtaW4td2lkdGhcIjogXCIyOTBweFwiLFxuICAgICAgICAgICAgICAgICAgICBcInJldHVybi12YWx1ZVwiOiBfdm0uZGF0ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnJldHVyblZhbHVlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1lbnUsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVudSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImJpcnRoZGF5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5iaXJ0aGRheSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJiaXJ0aGRheVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uYmlydGhkYXlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWRhdGUtcGlja2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLXRpdGxlXCI6IFwiXCIsIHNjcm9sbGFibGU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmJpcnRoZGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJiaXJ0aGRheVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmJpcnRoZGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZW51ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjYW5jZWxcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcmVmcy5tZW51LnNhdmUoX3ZtLmRhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQkNC00YDQtdGBXCIsIFwicHJlcGVuZC1pY29uXCI6IFwicGVyc29uXCIgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGhvbmVfbnVtYmVyLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBob25lX251bWJlclwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGhvbmVfbnVtYmVyXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1idG5cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgbG9hZGluZzogX3ZtLmZvcm0uYnVzeSxcbiAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInVwZGF0ZVwiKSkpXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTZhMDM4MzcyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02YTAzODM3MlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Bhc3N3b3JkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzA0Mzc5ZWRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYXNzd29yZC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXHNldHRpbmdzXFxcXHBhc3N3b3JkLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03MDQzNzllZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTcwNDM3OWVkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2V0dGluZ3MvcGFzc3dvcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxODNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiPHRlbXBsYXRlPlxuICAgIDx2LWZvcm0gdi1tb2RlbD1cInZhbGlkXCIgQHN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlXCIgQGtleWRvd249XCJmb3JtLm9uS2V5ZG93bigkZXZlbnQpXCI+XG4gICAgPHYtdGV4dC1maWVsZFxuICAgICAgOmxhYmVsPVwiJHQoJ25ld19wYXNzd29yZCcpXCJcbiAgICAgIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkXCJcbiAgICAgIDpydWxlcz1cInBhc3N3b3JkUnVsZXNcIlxuICAgICAgOmNvdW50ZXI9XCIxNjBcIlxuICAgICAgcHJlcGVuZC1pY29uPVwidnBuX2tleVwiXG4gICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgcmVxdWlyZWRcbiAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBhc3N3b3JkXCIvPlxuICAgIDx2LXRleHQtZmllbGRcbiAgICAgIDpsYWJlbD1cIiR0KCdjb25maXJtX3Bhc3N3b3JkJylcIlxuICAgICAgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgIDpydWxlcz1cInBhc3N3b3JkUnVsZXNcIlxuICAgICAgOmNvdW50ZXI9XCIxNjBcIlxuICAgICAgcHJlcGVuZC1pY29uPVwidnBuX2tleVwiXG4gICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgcmVxdWlyZWRcbiAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIC8+XG5cbiAgICA8di1idG4gbGFyZ2UgYmxvY2sgOmxvYWRpbmc9XCJmb3JtLmJ1c3lcIiB0eXBlPVwic3VibWl0XCI+e3sgJHQoJ3VwZGF0ZScpIH19PC92LWJ0bj5cbiAgPC92LWZvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2Nyb2xsVG9Ub3A6IGZhbHNlLFxuXG4gIG1ldGFJbmZvICgpIHtcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgnc2V0dGluZ3MnKSB9XG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICB2YWxpZDogZmFsc2UsXG4gICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJ1xuICAgIH0pLFxuICAgIHBhc3N3b3JkUnVsZXM6IFtcbiAgICAgIHYgPT4gISF2IHx8IFwi0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtVwiXG4gICAgXSxcbiAgfSksXG5cbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIHVwZGF0ZSAoKSB7XG4gICAgICBhd2FpdCB0aGlzLmZvcm0ucGF0Y2goJy9hcGkvc2V0dGluZ3MvcGFzc3dvcmQnKVxuXG4gICAgICB0aGlzLmZvcm0ucmVzZXQoKVxuICAgICAgdGhpcy4kcm91dGVyLmdvKC0xKTtcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wYXNzd29yZC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1mb3JtXCIsXG4gICAge1xuICAgICAgb246IHtcbiAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIF92bS51cGRhdGUoJGV2ZW50KVxuICAgICAgICB9LFxuICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZm9ybS5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbW9kZWw6IHtcbiAgICAgICAgdmFsdWU6IF92bS52YWxpZCxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgIF92bS52YWxpZCA9ICQkdlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiBcInZhbGlkXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwibmV3X3Bhc3N3b3JkXCIpLFxuICAgICAgICAgIHJ1bGVzOiBfdm0ucGFzc3dvcmRSdWxlcyxcbiAgICAgICAgICBjb3VudGVyOiAxNjAsXG4gICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJ2cG5fa2V5XCIsXG4gICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcInBhc3N3b3JkXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS4kdChcImNvbmZpcm1fcGFzc3dvcmRcIiksXG4gICAgICAgICAgcnVsZXM6IF92bS5wYXNzd29yZFJ1bGVzLFxuICAgICAgICAgIGNvdW50ZXI6IDE2MCxcbiAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInZwbl9rZXlcIixcbiAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1idG5cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgbG9hZGluZzogX3ZtLmZvcm0uYnVzeSxcbiAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInVwZGF0ZVwiKSkpXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTcwNDM3OWVkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03MDQzNzllZFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zZXR0aW5ncy9wYXNzd29yZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi10YWJzXCIsXG4gICAgeyBhdHRyczogeyBkYXJrOiBcIlwiLCBcInNsaWRlci1jb2xvclwiOiBcInllbGxvd1wiIH0gfSxcbiAgICBbXG4gICAgICBfdm0uX2woX3ZtLnRhYnMsIGZ1bmN0aW9uKHRhYikge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJ2LXRhYlwiLFxuICAgICAgICAgIHsga2V5OiB0YWIuaWQsIGF0dHJzOiB7IHJpcHBsZTogXCJcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IHRhYi5pY29uIH0gfSksXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyh0YWIubmFtZSkgKyBcIlxcbiAgICBcIilcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS50YWJzLCBmdW5jdGlvbih0YWIpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwidi10YWItaXRlbVwiLFxuICAgICAgICAgIHsga2V5OiB0YWIuaWQgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGF0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgW19jKHRhYi5jb21wb25lbnQsIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTc0ZGZlNzcwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03NGRmZTc3MFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwic291cmNlUm9vdCI6IiJ9