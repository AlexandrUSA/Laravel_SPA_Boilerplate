webpackJsonp([10],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(198)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(200)
/* template */
var __vue_template__ = __webpack_require__(201)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2b868970"
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
Component.options.__file = "resources\\assets\\js\\pages\\admin\\employees\\Editor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b868970", Component.options)
  } else {
    hotAPI.reload("data-v-2b868970", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("7e4bc2da", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b868970\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Editor.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b868970\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Editor.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.card__title[data-v-2b868970] {\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n.card__text[data-v-2b868970] {\n\tpadding: 0 30px;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Editor.vue"],"names":[],"mappings":";AAuKA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA;AACA;CACA,gBAAA;CACA","file":"Editor.vue","sourcesContent":["<template>\r\n\t<div class=\"employee__create\">\r\n        <v-card>\r\n          <v-card-title>\r\n            <h2>{{title}} <v-icon class=\"title__icon\">{{titleIcon}}</v-icon></h2>\r\n          </v-card-title>\r\n          <v-card-text>\r\n            <v-form v-model=\"valid\" ref=\"form\" lazy-validation>\r\n\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t      :label=\"$t('name')\"\r\n\t\t\t\t\t      v-model=\"item.first_name\"\r\n\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t      :label=\"$t('last_name')\"\r\n\t\t\t\t\t      v-model=\"item.last_name\"\r\n\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t      :label=\"$t('patronymic')\"\r\n\t\t\t\t\t      v-model=\"item.patronymic\"\r\n\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t\t  <v-select\r\n\t\t\t\t\t      :label=\"$t('position')\"\r\n\t\t\t\t\t      v-model=\"item.position\"\r\n\t\t\t\t\t      prepend-icon=\"card_travel\"\r\n\t\t\t\t\t      :items=\"positions\"\r\n\t\t\t\t\t      :rules=\"[v => !!v || 'Выберите должность']\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-select>\r\n\t\t\t\t\t\t  <v-text-field\r\n\t\t\t\t\t      :label=\"$t('salary')\"\r\n\t\t\t\t\t      v-model=\"item.salary\"\r\n\t\t\t\t\t      prepend-icon=\"attach_money\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t      :label=\"$t('address')\"\r\n\t\t\t\t\t      v-model=\"item.address\"\r\n\t\t\t\t\t      prepend-icon=\"home\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t\t\t<v-layout row wrap>\r\n\t\t\t\t\t\t    <v-flex xs12>\r\n\t\t\t\t\t\t      <v-menu\r\n\t\t\t\t\t\t        ref=\"menu\"\r\n\t\t\t\t\t\t        lazy\r\n\t\t\t\t\t\t        :close-on-content-click=\"false\"\r\n\t\t\t\t\t\t        v-model=\"menu\"\r\n\t\t\t\t\t\t        transition=\"scale-transition\"\r\n\t\t\t\t\t\t        offset-y\r\n\t\t\t\t\t\t        full-width\r\n\t\t\t\t\t\t        :nudge-right=\"40\"\r\n\t\t\t\t\t\t        min-width=\"290px\"\r\n\t\t\t\t\t\t        :return-value.sync=\"date\"\r\n\t\t\t\t\t\t      >\r\n\t\t\t\t\t\t        <v-text-field\r\n\t\t\t\t\t\t          slot=\"activator\"\r\n\t\t\t\t\t\t          :label=\"$t('birthday')\"\r\n\t\t\t\t\t\t          v-model=\"item.birthday\"\r\n\t\t\t\t\t\t          prepend-icon=\"event\"\r\n\t\t\t\t\t\t          readonly\r\n\t\t\t\t\t\t        ></v-text-field>\r\n\t\t\t\t\t\t        <v-date-picker v-model=\"item.birthday\" no-title scrollable>\r\n\t\t\t\t\t\t          <v-spacer></v-spacer>\r\n\t\t\t\t\t\t          <v-btn flat color=\"primary\" @click=\"menu = false\">{{ $t('cancel') }}</v-btn>\r\n\t\t\t\t\t\t          <v-btn flat color=\"primary\" @click=\"$refs.menu.save(date)\">{{ $t('ok') }}</v-btn>\r\n\t\t\t\t\t\t        </v-date-picker>\r\n\t\t\t\t\t\t      </v-menu>\r\n\t\t\t\t\t\t    </v-flex>\r\n\t\t\t\t\t\t  </v-layout>\r\n\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t      :label=\"$t('phone_number')\"\r\n\t\t\t\t\t      v-model=\"item.phone_number\"\r\n\t\t\t\t\t      prepend-icon=\"phone_iphone\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t    <v-btn outline color=\"info\" @click.native=\"save\" :disabled=\"!valid\">{{ $t('ok') }}</v-btn>\r\n            \t<v-btn outline color=\"error\" @click.native=\"close\">{{ $t('cancel') }}</v-btn> \r\n\t\t\t\t\t  </v-form>\r\n          </v-card-text>\r\n        </v-card>\r\n\t</div>\r\n</template>\r\n\r\n<script>\r\n\timport axios from 'axios';\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\r\n\texport default {\r\n\t\tmiddleware: 'auth',\r\n\t\tprops: {\r\n\t\t\tid: {\r\n\t\t\t\tdefault: null\r\n\t\t\t}\r\n\t\t},\r\n\t\tdata() {\r\n\t\t\treturn {\r\n\t\t\t\tdate: null,\r\n\t      menu: false,\r\n\t      modal: false,\r\n\t      name: '',\r\n\t      valid: false,\r\n\t      nameRules: [\r\n\t        v => !!v || 'Введите значение',\r\n\t        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',\r\n\t      ],\r\n\t      emailRules: [\r\n\t        v => !!v || 'Введите E-mail',\r\n\t        v => /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(v) || 'Не валидный E-mail'\r\n\t      ],\r\n\t      positions: [\r\n\t        'Старший сотрудник',\r\n\t        'Бухгалтер',\r\n\t        'Директор',\r\n\t        'Сотрудник'\r\n\t      ],\r\n\t\t\t}\r\n\t\t},\r\n\t\tcomputed: {\r\n\t\t\t...mapGetters({\r\n\t\t\t\temployee: 'employees/employee'\r\n\t\t\t}),\r\n\t\t\ttitle() {\r\n\t\t\t\treturn (this.id) ? this.$t('edit_employee') : this.$t('new_employee');\r\n\t\t\t},\r\n\t\t\ttitleIcon() {\r\n\t\t\t\treturn (this.id) ? 'person' : 'person_add';\r\n\t\t\t},\r\n\t\t\titem() {\r\n\t\t\t\treturn {}\r\n\t\t\t}\r\n\t\t},\r\n\t\tbeforeRouteEnter (to, from, next) {\r\n    \tnext(vm => {\r\n    \t\tif(vm.id) {\r\n    \t\t\tvm.$store.dispatch('employees/loadOne', vm.id);\r\n    \t\t\tvm.item = vm.employee\r\n    \t}})\r\n    },\r\n\t\tmethods: {\r\n\t\t\t...mapActions({\r\n\t\t\t\tloadItem: 'employees/loadOne',\r\n\t\t\t\tchangeItem: 'employees/edit',\r\n\t\t\t\taddItem: 'employees/add'\r\n\t\t\t}),\r\n\t\t\tsave() {\r\n\t\t\t\tif(this.id) {\r\n\t\t\t\t\tthis.changeItem(this.item);\t\t\t\r\n\t\t\t\t} else {\r\n\t\t\t\t\tthis.addItem(this.item);\r\n\t\t\t\t}\t\r\n\t\t\t\tthis.$router.go(-1);\r\n\t\t\t},\r\n\t\t\tclose() {\r\n\t\t\t\tthis.$router.go(-1);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t.card__title {\r\n\t\tjustify-content: center;\r\n\t}\r\n\t.card__text {\r\n\t\tpadding: 0 30px;\r\n\t}\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(8);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	props: {
		id: {
			default: null
		}
	},
	data: function data() {
		return {
			date: null,
			menu: false,
			modal: false,
			name: '',
			valid: false,
			nameRules: [function (v) {
				return !!v || 'Введите значение';
			}, function (v) {
				return v && v.length > 1 || 'Имя должно содержать минимум 2 буквы';
			}],
			emailRules: [function (v) {
				return !!v || 'Введите E-mail';
			}, function (v) {
				return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Не валидный E-mail'
				);
			}],
			positions: ['Старший сотрудник', 'Бухгалтер', 'Директор', 'Сотрудник']
		};
	},

	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
		employee: 'employees/employee'
	}), {
		title: function title() {
			return this.id ? this.$t('edit_employee') : this.$t('new_employee');
		},
		titleIcon: function titleIcon() {
			return this.id ? 'person' : 'person_add';
		},
		item: function item() {
			return {};
		}
	}),
	beforeRouteEnter: function beforeRouteEnter(to, from, next) {
		next(function (vm) {
			if (vm.id) {
				vm.$store.dispatch('employees/loadOne', vm.id);
				vm.item = vm.employee;
			}
		});
	},

	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
		loadItem: 'employees/loadOne',
		changeItem: 'employees/edit',
		addItem: 'employees/add'
	}), {
		save: function save() {
			if (this.id) {
				this.changeItem(this.item);
			} else {
				this.addItem(this.item);
			}
			this.$router.go(-1);
		},
		close: function close() {
			this.$router.go(-1);
		}
	})
});

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "employee__create" },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c(
              "h2",
              [
                _vm._v(_vm._s(_vm.title) + " "),
                _c("v-icon", { staticClass: "title__icon" }, [
                  _vm._v(_vm._s(_vm.titleIcon))
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-form",
                {
                  ref: "form",
                  attrs: { "lazy-validation": "" },
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
                      rules: _vm.nameRules,
                      counter: 70,
                      required: ""
                    },
                    model: {
                      value: _vm.item.first_name,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "first_name", $$v)
                      },
                      expression: "item.first_name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: _vm.$t("last_name"),
                      rules: _vm.nameRules,
                      counter: 70,
                      required: ""
                    },
                    model: {
                      value: _vm.item.last_name,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "last_name", $$v)
                      },
                      expression: "item.last_name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: _vm.$t("patronymic"),
                      rules: _vm.nameRules,
                      counter: 70
                    },
                    model: {
                      value: _vm.item.patronymic,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "patronymic", $$v)
                      },
                      expression: "item.patronymic"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      label: _vm.$t("position"),
                      "prepend-icon": "card_travel",
                      items: _vm.positions,
                      rules: [
                        function(v) {
                          return !!v || "Выберите должность"
                        }
                      ],
                      required: ""
                    },
                    model: {
                      value: _vm.item.position,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "position", $$v)
                      },
                      expression: "item.position"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: _vm.$t("salary"),
                      "prepend-icon": "attach_money",
                      required: ""
                    },
                    model: {
                      value: _vm.item.salary,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "salary", $$v)
                      },
                      expression: "item.salary"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: _vm.$t("address"),
                      "prepend-icon": "home",
                      required: ""
                    },
                    model: {
                      value: _vm.item.address,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "address", $$v)
                      },
                      expression: "item.address"
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
                                  value: _vm.item.birthday,
                                  callback: function($$v) {
                                    _vm.$set(_vm.item, "birthday", $$v)
                                  },
                                  expression: "item.birthday"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-date-picker",
                                {
                                  attrs: { "no-title": "", scrollable: "" },
                                  model: {
                                    value: _vm.item.birthday,
                                    callback: function($$v) {
                                      _vm.$set(_vm.item, "birthday", $$v)
                                    },
                                    expression: "item.birthday"
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
                    attrs: {
                      label: _vm.$t("phone_number"),
                      "prepend-icon": "phone_iphone",
                      required: ""
                    },
                    model: {
                      value: _vm.item.phone_number,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "phone_number", $$v)
                      },
                      expression: "item.phone_number"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        outline: "",
                        color: "info",
                        disabled: !_vm.valid
                      },
                      nativeOn: {
                        click: function($event) {
                          _vm.save($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("ok")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { outline: "", color: "error" },
                      nativeOn: {
                        click: function($event) {
                          _vm.close($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("cancel")))]
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
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2b868970", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9FZGl0b3IudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0VkaXRvci52dWU/OTI1MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9FZGl0b3IudnVlPzBlMTUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvRWRpdG9yLnZ1ZT8xN2YyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXdNO0FBQ3hNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFxTDtBQUNyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQThPO0FBQzlPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SkFBNEosaUZBQWlGO0FBQzdPLHFLQUFxSyxpRkFBaUY7QUFDdFA7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EsMERBQTJELDZCQUE2Qiw4QkFBOEIsb0NBQW9DLEdB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDhCQUE4QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMTAuOTc2NjZhZmI2NmEyYWUxODA2NmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJiODY4OTcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vRWRpdG9yLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9FZGl0b3IudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yYjg2ODk3MFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRWRpdG9yLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMmI4Njg5NzBcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxlbXBsb3llZXNcXFxcRWRpdG9yLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yYjg2ODk3MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJiODY4OTcwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9FZGl0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYjg2ODk3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0VkaXRvci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjdlNGJjMmRhXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJiODY4OTcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRWRpdG9yLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYjg2ODk3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0VkaXRvci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmI4Njg5NzBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvRWRpdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNhcmRfX3RpdGxlW2RhdGEtdi0yYjg2ODk3MF0ge1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jYXJkX190ZXh0W2RhdGEtdi0yYjg2ODk3MF0ge1xcblxcdHBhZGRpbmc6IDAgMzBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9jcm0vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvRWRpdG9yLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBdUtBO0NBQ0EseUJBQUE7S0FBQSxzQkFBQTtTQUFBLHdCQUFBO0NBQ0E7QUFDQTtDQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIkVkaXRvci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19jcmVhdGVcXFwiPlxcclxcbiAgICAgICAgPHYtY2FyZD5cXHJcXG4gICAgICAgICAgPHYtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgICA8aDI+e3t0aXRsZX19IDx2LWljb24gY2xhc3M9XFxcInRpdGxlX19pY29uXFxcIj57e3RpdGxlSWNvbn19PC92LWljb24+PC9oMj5cXHJcXG4gICAgICAgICAgPC92LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICAgIDx2LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgICA8di1mb3JtIHYtbW9kZWw9XFxcInZhbGlkXFxcIiByZWY9XFxcImZvcm1cXFwiIGxhenktdmFsaWRhdGlvbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ25hbWUnKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmZpcnN0X25hbWVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJuYW1lUnVsZXNcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmNvdW50ZXI9XFxcIjcwXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgID48L3YtdGV4dC1maWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ2xhc3RfbmFtZScpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ubGFzdF9uYW1lXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwibmFtZVJ1bGVzXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCI3MFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICA+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIDx2LXRleHQtZmllbGRcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdwYXRyb255bWljJylcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5wYXRyb255bWljXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwibmFtZVJ1bGVzXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCI3MFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPjwvdi10ZXh0LWZpZWxkPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgPHYtc2VsZWN0XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgncG9zaXRpb24nKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLnBvc2l0aW9uXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiY2FyZF90cmF2ZWxcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOml0ZW1zPVxcXCJwb3NpdGlvbnNcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMJ11cXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPjwvdi1zZWxlY3Q+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA8di10ZXh0LWZpZWxkXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgnc2FsYXJ5JylcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5zYWxhcnlcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJhdHRhY2hfbW9uZXlcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPjwvdi10ZXh0LWZpZWxkPlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICA8di10ZXh0LWZpZWxkXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgnYWRkcmVzcycpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0uYWRkcmVzc1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICBwcmVwZW5kLWljb249XFxcImhvbWVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPjwvdi10ZXh0LWZpZWxkPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDx2LWxheW91dCByb3cgd3JhcD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgPHYtZmxleCB4czEyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDx2LW1lbnVcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIHJlZj1cXFwibWVudVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIGxhenlcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVxcXCJmYWxzZVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIHYtbW9kZWw9XFxcIm1lbnVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICB0cmFuc2l0aW9uPVxcXCJzY2FsZS10cmFuc2l0aW9uXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgb2Zmc2V0LXlcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIGZ1bGwtd2lkdGhcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIDpudWRnZS1yaWdodD1cXFwiNDBcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICBtaW4td2lkdGg9XFxcIjI5MHB4XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgOnJldHVybi12YWx1ZS5zeW5jPVxcXCJkYXRlXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgID5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIDx2LXRleHQtZmllbGRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgICAgc2xvdD1cXFwiYWN0aXZhdG9yXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgICA6bGFiZWw9XFxcIiR0KCdiaXJ0aGRheScpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgICB2LW1vZGVsPVxcXCJpdGVtLmJpcnRoZGF5XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgICBwcmVwZW5kLWljb249XFxcImV2ZW50XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgICByZWFkb25seVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgPHYtZGF0ZS1waWNrZXIgdi1tb2RlbD1cXFwiaXRlbS5iaXJ0aGRheVxcXCIgbm8tdGl0bGUgc2Nyb2xsYWJsZT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBAY2xpY2s9XFxcIm1lbnUgPSBmYWxzZVxcXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XFxcInByaW1hcnlcXFwiIEBjbGljaz1cXFwiJHJlZnMubWVudS5zYXZlKGRhdGUpXFxcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICA8L3YtZGF0ZS1waWNrZXI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgPC92LW1lbnU+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDwvdi1mbGV4PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgPC92LWxheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3Bob25lX251bWJlcicpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ucGhvbmVfbnVtYmVyXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwicGhvbmVfaXBob25lXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgID48L3YtdGV4dC1maWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImluZm9cXFwiIEBjbGljay5uYXRpdmU9XFxcInNhdmVcXFwiIDpkaXNhYmxlZD1cXFwiIXZhbGlkXFxcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICAgICAgXFx0PHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImVycm9yXFxcIiBAY2xpY2submF0aXZlPVxcXCJjbG9zZVxcXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj4gXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICA8L3YtZm9ybT5cXHJcXG4gICAgICAgICAgPC92LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgIDwvdi1jYXJkPlxcclxcblxcdDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG5cXHRpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xcclxcblxcdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XFxyXFxuXFxyXFxuXFx0ZXhwb3J0IGRlZmF1bHQge1xcclxcblxcdFxcdG1pZGRsZXdhcmU6ICdhdXRoJyxcXHJcXG5cXHRcXHRwcm9wczoge1xcclxcblxcdFxcdFxcdGlkOiB7XFxyXFxuXFx0XFx0XFx0XFx0ZGVmYXVsdDogbnVsbFxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdGRhdGEoKSB7XFxyXFxuXFx0XFx0XFx0cmV0dXJuIHtcXHJcXG5cXHRcXHRcXHRcXHRkYXRlOiBudWxsLFxcclxcblxcdCAgICAgIG1lbnU6IGZhbHNlLFxcclxcblxcdCAgICAgIG1vZGFsOiBmYWxzZSxcXHJcXG5cXHQgICAgICBuYW1lOiAnJyxcXHJcXG5cXHQgICAgICB2YWxpZDogZmFsc2UsXFxyXFxuXFx0ICAgICAgbmFtZVJ1bGVzOiBbXFxyXFxuXFx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtScsXFxyXFxuXFx0ICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoID4gMSkgfHwgJ9CY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDIg0LHRg9C60LLRiycsXFxyXFxuXFx0ICAgICAgXSxcXHJcXG5cXHQgICAgICBlbWFpbFJ1bGVzOiBbXFxyXFxuXFx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUgRS1tYWlsJyxcXHJcXG5cXHQgICAgICAgIHYgPT4gL15cXFxcdysoWy4tXT9cXFxcdyspKkBcXFxcdysoWy4tXT9cXFxcdyspKihcXFxcLlxcXFx3ezIsM30pKyQvLnRlc3QodikgfHwgJ9Cd0LUg0LLQsNC70LjQtNC90YvQuSBFLW1haWwnXFxyXFxuXFx0ICAgICAgXSxcXHJcXG5cXHQgICAgICBwb3NpdGlvbnM6IFtcXHJcXG5cXHQgICAgICAgICfQodGC0LDRgNGI0LjQuSDRgdC+0YLRgNGD0LTQvdC40LonLFxcclxcblxcdCAgICAgICAgJ9CR0YPRhdCz0LDQu9GC0LXRgCcsXFxyXFxuXFx0ICAgICAgICAn0JTQuNGA0LXQutGC0L7RgCcsXFxyXFxuXFx0ICAgICAgICAn0KHQvtGC0YDRg9C00L3QuNC6J1xcclxcblxcdCAgICAgIF0sXFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0Y29tcHV0ZWQ6IHtcXHJcXG5cXHRcXHRcXHQuLi5tYXBHZXR0ZXJzKHtcXHJcXG5cXHRcXHRcXHRcXHRlbXBsb3llZTogJ2VtcGxveWVlcy9lbXBsb3llZSdcXHJcXG5cXHRcXHRcXHR9KSxcXHJcXG5cXHRcXHRcXHR0aXRsZSgpIHtcXHJcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaWQpID8gdGhpcy4kdCgnZWRpdF9lbXBsb3llZScpIDogdGhpcy4kdCgnbmV3X2VtcGxveWVlJyk7XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHR0aXRsZUljb24oKSB7XFxyXFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLmlkKSA/ICdwZXJzb24nIDogJ3BlcnNvbl9hZGQnO1xcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0aXRlbSgpIHtcXHJcXG5cXHRcXHRcXHRcXHRyZXR1cm4ge31cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRiZWZvcmVSb3V0ZUVudGVyICh0bywgZnJvbSwgbmV4dCkge1xcclxcbiAgICBcXHRuZXh0KHZtID0+IHtcXHJcXG4gICAgXFx0XFx0aWYodm0uaWQpIHtcXHJcXG4gICAgXFx0XFx0XFx0dm0uJHN0b3JlLmRpc3BhdGNoKCdlbXBsb3llZXMvbG9hZE9uZScsIHZtLmlkKTtcXHJcXG4gICAgXFx0XFx0XFx0dm0uaXRlbSA9IHZtLmVtcGxveWVlXFxyXFxuICAgIFxcdH19KVxcclxcbiAgICB9LFxcclxcblxcdFxcdG1ldGhvZHM6IHtcXHJcXG5cXHRcXHRcXHQuLi5tYXBBY3Rpb25zKHtcXHJcXG5cXHRcXHRcXHRcXHRsb2FkSXRlbTogJ2VtcGxveWVlcy9sb2FkT25lJyxcXHJcXG5cXHRcXHRcXHRcXHRjaGFuZ2VJdGVtOiAnZW1wbG95ZWVzL2VkaXQnLFxcclxcblxcdFxcdFxcdFxcdGFkZEl0ZW06ICdlbXBsb3llZXMvYWRkJ1xcclxcblxcdFxcdFxcdH0pLFxcclxcblxcdFxcdFxcdHNhdmUoKSB7XFxyXFxuXFx0XFx0XFx0XFx0aWYodGhpcy5pZCkge1xcclxcblxcdFxcdFxcdFxcdFxcdHRoaXMuY2hhbmdlSXRlbSh0aGlzLml0ZW0pO1xcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdH0gZWxzZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5hZGRJdGVtKHRoaXMuaXRlbSk7XFxyXFxuXFx0XFx0XFx0XFx0fVxcdFxcclxcblxcdFxcdFxcdFxcdHRoaXMuJHJvdXRlci5nbygtMSk7XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRjbG9zZSgpIHtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLiRyb3V0ZXIuZ28oLTEpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuXFx0LmNhcmRfX3RpdGxlIHtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFx0LmNhcmRfX3RleHQge1xcclxcblxcdFxcdHBhZGRpbmc6IDAgMzBweDtcXHJcXG5cXHR9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmI4Njg5NzBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvRWRpdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19jcmVhdGVcIj5cclxuICAgICAgICA8di1jYXJkPlxyXG4gICAgICAgICAgPHYtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgPGgyPnt7dGl0bGV9fSA8di1pY29uIGNsYXNzPVwidGl0bGVfX2ljb25cIj57e3RpdGxlSWNvbn19PC92LWljb24+PC9oMj5cclxuICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgPHYtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICA8di1mb3JtIHYtbW9kZWw9XCJ2YWxpZFwiIHJlZj1cImZvcm1cIiBsYXp5LXZhbGlkYXRpb24+XHJcblx0XHRcdFx0XHQgICAgPHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ25hbWUnKVwiXHJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5maXJzdF9uYW1lXCJcclxuXHRcdFx0XHRcdCAgICAgIDpydWxlcz1cIm5hbWVSdWxlc1wiXHJcblx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcclxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXHJcblx0XHRcdFx0XHQgICAgPjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0ICAgIDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdsYXN0X25hbWUnKVwiXHJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5sYXN0X25hbWVcIlxyXG5cdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwibmFtZVJ1bGVzXCJcclxuXHRcdFx0XHRcdCAgICAgIDpjb3VudGVyPVwiNzBcIlxyXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdCAgICA+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHQgICAgPHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3BhdHJvbnltaWMnKVwiXHJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5wYXRyb255bWljXCJcclxuXHRcdFx0XHRcdCAgICAgIDpydWxlcz1cIm5hbWVSdWxlc1wiXHJcblx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcclxuXHRcdFx0XHRcdCAgICA+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHRcdCAgPHYtc2VsZWN0XHJcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgncG9zaXRpb24nKVwiXHJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5wb3NpdGlvblwiXHJcblx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJjYXJkX3RyYXZlbFwiXHJcblx0XHRcdFx0XHQgICAgICA6aXRlbXM9XCJwb3NpdGlvbnNcIlxyXG5cdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwiW3YgPT4gISF2IHx8ICfQktGL0LHQtdGA0LjRgtC1INC00L7Qu9C20L3QvtGB0YLRjCddXCJcclxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXHJcblx0XHRcdFx0XHQgICAgPjwvdi1zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdCAgPHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3NhbGFyeScpXCJcclxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLnNhbGFyeVwiXHJcblx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJhdHRhY2hfbW9uZXlcIlxyXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdCAgICA+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHQgICAgPHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ2FkZHJlc3MnKVwiXHJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5hZGRyZXNzXCJcclxuXHRcdFx0XHRcdCAgICAgIHByZXBlbmQtaWNvbj1cImhvbWVcIlxyXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdCAgICA+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHRcdFx0PHYtbGF5b3V0IHJvdyB3cmFwPlxyXG5cdFx0XHRcdFx0XHQgICAgPHYtZmxleCB4czEyPlxyXG5cdFx0XHRcdFx0XHQgICAgICA8di1tZW51XHJcblx0XHRcdFx0XHRcdCAgICAgICAgcmVmPVwibWVudVwiXHJcblx0XHRcdFx0XHRcdCAgICAgICAgbGF6eVxyXG5cdFx0XHRcdFx0XHQgICAgICAgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHQgICAgICAgIHYtbW9kZWw9XCJtZW51XCJcclxuXHRcdFx0XHRcdFx0ICAgICAgICB0cmFuc2l0aW9uPVwic2NhbGUtdHJhbnNpdGlvblwiXHJcblx0XHRcdFx0XHRcdCAgICAgICAgb2Zmc2V0LXlcclxuXHRcdFx0XHRcdFx0ICAgICAgICBmdWxsLXdpZHRoXHJcblx0XHRcdFx0XHRcdCAgICAgICAgOm51ZGdlLXJpZ2h0PVwiNDBcIlxyXG5cdFx0XHRcdFx0XHQgICAgICAgIG1pbi13aWR0aD1cIjI5MHB4XCJcclxuXHRcdFx0XHRcdFx0ICAgICAgICA6cmV0dXJuLXZhbHVlLnN5bmM9XCJkYXRlXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgPlxyXG5cdFx0XHRcdFx0XHQgICAgICAgIDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdFx0ICAgICAgICAgIHNsb3Q9XCJhY3RpdmF0b3JcIlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgOmxhYmVsPVwiJHQoJ2JpcnRoZGF5JylcIlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgdi1tb2RlbD1cIml0ZW0uYmlydGhkYXlcIlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgcHJlcGVuZC1pY29uPVwiZXZlbnRcIlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgcmVhZG9ubHlcclxuXHRcdFx0XHRcdFx0ICAgICAgICA+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHRcdCAgICAgICAgPHYtZGF0ZS1waWNrZXIgdi1tb2RlbD1cIml0ZW0uYmlydGhkYXlcIiBuby10aXRsZSBzY3JvbGxhYmxlPlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XHJcblx0XHRcdFx0XHRcdCAgICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJtZW51ID0gZmFsc2VcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XCJwcmltYXJ5XCIgQGNsaWNrPVwiJHJlZnMubWVudS5zYXZlKGRhdGUpXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG5cdFx0XHRcdFx0XHQgICAgICAgIDwvdi1kYXRlLXBpY2tlcj5cclxuXHRcdFx0XHRcdFx0ICAgICAgPC92LW1lbnU+XHJcblx0XHRcdFx0XHRcdCAgICA8L3YtZmxleD5cclxuXHRcdFx0XHRcdFx0ICA8L3YtbGF5b3V0PlxyXG5cdFx0XHRcdFx0ICAgIDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdwaG9uZV9udW1iZXInKVwiXHJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5waG9uZV9udW1iZXJcIlxyXG5cdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwicGhvbmVfaXBob25lXCJcclxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXHJcblx0XHRcdFx0XHQgICAgPjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0ICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIEBjbGljay5uYXRpdmU9XCJzYXZlXCIgOmRpc2FibGVkPVwiIXZhbGlkXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG4gICAgICAgICAgICBcdDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiZXJyb3JcIiBAY2xpY2submF0aXZlPVwiY2xvc2VcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPiBcclxuXHRcdFx0XHRcdCAgPC92LWZvcm0+XHJcbiAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxyXG4gICAgICAgIDwvdi1jYXJkPlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG1pZGRsZXdhcmU6ICdhdXRoJyxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGlkOiB7XHJcblx0XHRcdFx0ZGVmYXVsdDogbnVsbFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRlOiBudWxsLFxyXG5cdCAgICAgIG1lbnU6IGZhbHNlLFxyXG5cdCAgICAgIG1vZGFsOiBmYWxzZSxcclxuXHQgICAgICBuYW1lOiAnJyxcclxuXHQgICAgICB2YWxpZDogZmFsc2UsXHJcblx0ICAgICAgbmFtZVJ1bGVzOiBbXHJcblx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtScsXHJcblx0ICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoID4gMSkgfHwgJ9CY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDIg0LHRg9C60LLRiycsXHJcblx0ICAgICAgXSxcclxuXHQgICAgICBlbWFpbFJ1bGVzOiBbXHJcblx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUgRS1tYWlsJyxcclxuXHQgICAgICAgIHYgPT4gL15cXHcrKFsuLV0/XFx3KykqQFxcdysoWy4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLnRlc3QodikgfHwgJ9Cd0LUg0LLQsNC70LjQtNC90YvQuSBFLW1haWwnXHJcblx0ICAgICAgXSxcclxuXHQgICAgICBwb3NpdGlvbnM6IFtcclxuXHQgICAgICAgICfQodGC0LDRgNGI0LjQuSDRgdC+0YLRgNGD0LTQvdC40LonLFxyXG5cdCAgICAgICAgJ9CR0YPRhdCz0LDQu9GC0LXRgCcsXHJcblx0ICAgICAgICAn0JTQuNGA0LXQutGC0L7RgCcsXHJcblx0ICAgICAgICAn0KHQvtGC0YDRg9C00L3QuNC6J1xyXG5cdCAgICAgIF0sXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHQuLi5tYXBHZXR0ZXJzKHtcclxuXHRcdFx0XHRlbXBsb3llZTogJ2VtcGxveWVlcy9lbXBsb3llZSdcclxuXHRcdFx0fSksXHJcblx0XHRcdHRpdGxlKCkge1xyXG5cdFx0XHRcdHJldHVybiAodGhpcy5pZCkgPyB0aGlzLiR0KCdlZGl0X2VtcGxveWVlJykgOiB0aGlzLiR0KCduZXdfZW1wbG95ZWUnKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dGl0bGVJY29uKCkge1xyXG5cdFx0XHRcdHJldHVybiAodGhpcy5pZCkgPyAncGVyc29uJyA6ICdwZXJzb25fYWRkJztcclxuXHRcdFx0fSxcclxuXHRcdFx0aXRlbSgpIHtcclxuXHRcdFx0XHRyZXR1cm4ge31cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGJlZm9yZVJvdXRlRW50ZXIgKHRvLCBmcm9tLCBuZXh0KSB7XHJcbiAgICBcdG5leHQodm0gPT4ge1xyXG4gICAgXHRcdGlmKHZtLmlkKSB7XHJcbiAgICBcdFx0XHR2bS4kc3RvcmUuZGlzcGF0Y2goJ2VtcGxveWVlcy9sb2FkT25lJywgdm0uaWQpO1xyXG4gICAgXHRcdFx0dm0uaXRlbSA9IHZtLmVtcGxveWVlXHJcbiAgICBcdH19KVxyXG4gICAgfSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XHJcblx0XHRcdFx0bG9hZEl0ZW06ICdlbXBsb3llZXMvbG9hZE9uZScsXHJcblx0XHRcdFx0Y2hhbmdlSXRlbTogJ2VtcGxveWVlcy9lZGl0JyxcclxuXHRcdFx0XHRhZGRJdGVtOiAnZW1wbG95ZWVzL2FkZCdcclxuXHRcdFx0fSksXHJcblx0XHRcdHNhdmUoKSB7XHJcblx0XHRcdFx0aWYodGhpcy5pZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VJdGVtKHRoaXMuaXRlbSk7XHRcdFx0XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuYWRkSXRlbSh0aGlzLml0ZW0pO1xyXG5cdFx0XHRcdH1cdFxyXG5cdFx0XHRcdHRoaXMuJHJvdXRlci5nbygtMSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNsb3NlKCkge1xyXG5cdFx0XHRcdHRoaXMuJHJvdXRlci5nbygtMSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuY2FyZF9fdGl0bGUge1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cdC5jYXJkX190ZXh0IHtcclxuXHRcdHBhZGRpbmc6IDAgMzBweDtcclxuXHR9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0VkaXRvci52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fY3JlYXRlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImgyXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZV9faWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpdGxlSWNvbikpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mb3JtXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibGF6eS12YWxpZGF0aW9uXCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsaWQsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0udmFsaWQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IF92bS5uYW1lUnVsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJmaXJzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5maXJzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJsYXN0X25hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IF92bS5uYW1lUnVsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ubGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImxhc3RfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ubGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwYXRyb255bWljXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBfdm0ubmFtZVJ1bGVzLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXI6IDcwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnBhdHJvbnltaWMsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwicGF0cm9ueW1pY1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucGF0cm9ueW1pY1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwb3NpdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImNhcmRfdHJhdmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5wb3NpdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhdiB8fCBcItCS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInBvc2l0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5wb3NpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwic2FsYXJ5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiYXR0YWNoX21vbmV5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uc2FsYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInNhbGFyeVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uc2FsYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJhZGRyZXNzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiaG9tZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiYWRkcmVzc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcIm1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2Utb24tY29udGVudC1jbGlja1wiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJzY2FsZS10cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2Zmc2V0LXlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdWxsLXdpZHRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibnVkZ2UtcmlnaHRcIjogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluLXdpZHRoXCI6IFwiMjkwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm4tdmFsdWVcIjogX3ZtLmRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpyZXR1cm5WYWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZSA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZW51LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lbnUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJiaXJ0aGRheVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uYmlydGhkYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiYmlydGhkYXlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmJpcnRoZGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1kYXRlLXBpY2tlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJuby10aXRsZVwiOiBcIlwiLCBzY3JvbGxhYmxlOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5iaXJ0aGRheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiYmlydGhkYXlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5iaXJ0aGRheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVudSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiY2FuY2VsXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHJlZnMubWVudS5zYXZlKF92bS5kYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicGhvbmVfbnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwicGhvbmVfaXBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ucGhvbmVfbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInBob25lX251bWJlclwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucGhvbmVfbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0udmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zYXZlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJlcnJvclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsb3NlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTJiODY4OTcwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yYjg2ODk3MFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvRWRpdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiXSwic291cmNlUm9vdCI6IiJ9