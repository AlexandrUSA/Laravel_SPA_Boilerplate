webpackJsonp([29],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(197)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(199)
/* template */
var __vue_template__ = __webpack_require__(200)
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

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5d3e272c", content, false, {});
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

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.card__title[data-v-2b868970] {\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n.card__text[data-v-2b868970] {\n\tpadding: 0 30px;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Editor.vue"],"names":[],"mappings":";AAiKA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA;AACA;CACA,gBAAA;CACA","file":"Editor.vue","sourcesContent":["<template>\r\n\t<div class=\"employee__create\">\r\n        <v-card>\r\n          <v-card-title>\r\n            <h2>{{title}} <v-icon class=\"title__icon\">{{titleIcon}}</v-icon></h2>\r\n          </v-card-title>\r\n          <v-card-text>\r\n            <v-form v-model=\"valid\" ref=\"form\" lazy-validation>\r\n\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t      :label=\"$t('name')\"\r\n\t\t\t\t\t      v-model=\"item.first_name\"\r\n\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t      :label=\"$t('last_name')\"\r\n\t\t\t\t\t      v-model=\"item.last_name\"\r\n\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t      :label=\"$t('patronymic')\"\r\n\t\t\t\t\t      v-model=\"item.patronymic\"\r\n\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t    <v-select\r\n\t\t\t\t\t\t      :label=\"$t('position')\"\r\n\t\t\t\t\t\t      v-model=\"item.position_id\"\r\n\t\t\t\t\t\t      prepend-icon=\"card_travel\"\r\n\t\t\t\t\t\t      :items=\"positions\"\r\n\t\t\t\t\t\t      item-text=\"title\"\r\n\t          \t\t\titem-value=\"id\"\r\n\t\t\t\t\t\t      :rules=\"[v => !!v || 'Выберите должность']\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t\t></v-select>\r\n\t\t\t\t\t\t  <v-text-field\r\n\t\t\t\t\t      :label=\"$t('salary')\"\r\n\t\t\t\t\t      v-model=\"item.salary\"\r\n\t\t\t\t\t      prepend-icon=\"attach_money\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t      :label=\"$t('address')\"\r\n\t\t\t\t\t      v-model=\"item.address\"\r\n\t\t\t\t\t      prepend-icon=\"home\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t\t\t<v-layout row wrap>\r\n\t\t\t\t\t\t    <v-flex xs12>\r\n\t\t\t\t\t\t      <v-menu\r\n\t\t\t\t\t\t        ref=\"menu\"\r\n\t\t\t\t\t\t        lazy\r\n\t\t\t\t\t\t        :close-on-content-click=\"false\"\r\n\t\t\t\t\t\t        v-model=\"menu\"\r\n\t\t\t\t\t\t        transition=\"scale-transition\"\r\n\t\t\t\t\t\t        offset-y\r\n\t\t\t\t\t\t        full-width\r\n\t\t\t\t\t\t        :nudge-right=\"40\"\r\n\t\t\t\t\t\t        min-width=\"290px\"\r\n\t\t\t\t\t\t        :return-value.sync=\"date\"\r\n\t\t\t\t\t\t      >\r\n\t\t\t\t\t\t        <v-text-field\r\n\t\t\t\t\t\t          slot=\"activator\"\r\n\t\t\t\t\t\t          :label=\"$t('birthday')\"\r\n\t\t\t\t\t\t          v-model=\"item.birthday\"\r\n\t\t\t\t\t\t          prepend-icon=\"event\"\r\n\t\t\t\t\t\t          readonly\r\n\t\t\t\t\t\t        ></v-text-field>\r\n\t\t\t\t\t\t        <v-date-picker v-model=\"item.birthday\" no-title scrollable>\r\n\t\t\t\t\t\t          <v-spacer></v-spacer>\r\n\t\t\t\t\t\t          <v-btn flat color=\"primary\" @click=\"menu = false\">{{ $t('cancel') }}</v-btn>\r\n\t\t\t\t\t\t          <v-btn flat color=\"primary\" @click=\"$refs.menu.save(date)\">{{ $t('ok') }}</v-btn>\r\n\t\t\t\t\t\t        </v-date-picker>\r\n\t\t\t\t\t\t      </v-menu>\r\n\t\t\t\t\t\t    </v-flex>\r\n\t\t\t\t\t\t  </v-layout>\r\n\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t      :label=\"$t('phone_number')\"\r\n\t\t\t\t\t      v-model=\"item.phone_number\"\r\n\t\t\t\t\t      prepend-icon=\"phone_iphone\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t    ></v-text-field>\r\n\t\t\t\t\t    <v-btn outline color=\"info\" @click.native=\"save\" :disabled=\"!valid\">{{ $t('ok') }}</v-btn>\r\n            \t<v-btn outline color=\"error\" @click.native=\"close\">{{ $t('cancel') }}</v-btn> \r\n\t\t\t\t\t  </v-form>\r\n          </v-card-text>\r\n        </v-card>\r\n\t</div>\r\n</template>\r\n\r\n<script>\r\n\timport axios from 'axios';\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\r\n\texport default {\r\n\t\tmiddleware: ['auth', 'organisation'],\r\n\t\tprops: {\r\n\t\t\tid: {\r\n\t\t\t\tdefault: null\r\n\t\t\t}\r\n\t\t},\r\n\t\tdata() {\r\n\t\t\treturn {\r\n\t\t\t\tdate: null,\r\n\t      menu: false,\r\n\t      modal: false,\r\n\t      name: '',\r\n\t      valid: false,\r\n\t      nameRules: [\r\n\t        v => !!v || 'Введите значение',\r\n\t        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',\r\n\t      ],\r\n\t      emailRules: [\r\n\t        v => !!v || 'Введите E-mail',\r\n\t        v => /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(v) || 'Не валидный E-mail'\r\n\t      ]\r\n\t\t\t}\r\n\t\t},\r\n\t\tcomputed: {\r\n\t\t\t...mapGetters({\r\n\t\t\t\titem: 'employees/employee',\r\n\t\t\t\tpositions: 'positions/positions'\r\n\t\t\t}),\r\n\t\t\ttitle() {\r\n\t\t\t\treturn (this.id) ? this.$t('edit_employee') : this.$t('new_employee');\r\n\t\t\t},\r\n\t\t\ttitleIcon() {\r\n\t\t\t\treturn (this.id) ? 'person' : 'person_add';\r\n\t\t\t},\r\n\t\t\titem() {\r\n\t\t\t\treturn {}\r\n\t\t\t}\r\n\t\t},\r\n\t\tbeforeRouteEnter (to, from, next) {\r\n    \tnext(vm => {\r\n    \t\tif(vm.id) {\r\n    \t\t\tvm.$store.dispatch('employees/loadOne', vm.id);\r\n    \t\t\tvm.item = vm.employee\r\n    \t}})\r\n    },\r\n\t\tmethods: {\r\n\t\t\t...mapActions({\r\n\t\t\t\tloadItem: 'employees/loadOne',\r\n\t\t\t\tchangeItem: 'employees/edit',\r\n\t\t\t\taddItem: 'employees/add'\r\n\t\t\t}),\r\n\t\t\tsave() {\r\n\t\t\t\tthis.addItem(this.item);\r\n\t\t\t\tthis.$router.go(-1);\r\n\t\t\t},\r\n\t\t\tclose() {\r\n\t\t\t\tthis.$router.go(-1);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t.card__title {\r\n\t\tjustify-content: center;\r\n\t}\r\n\t.card__text {\r\n\t\tpadding: 0 30px;\r\n\t}\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 199:
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
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	middleware: ['auth', 'organisation'],
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
			}]
		};
	},

	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
		item: 'employees/employee',
		positions: 'positions/positions'
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
			this.addItem(this.item);
			this.$router.go(-1);
		},
		close: function close() {
			this.$router.go(-1);
		}
	})
});

/***/ }),

/***/ 200:
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
                      "item-text": "title",
                      "item-value": "id",
                      rules: [
                        function(v) {
                          return !!v || "Выберите должность"
                        }
                      ],
                      required: ""
                    },
                    model: {
                      value: _vm.item.position_id,
                      callback: function($$v) {
                        _vm.$set(_vm.item, "position_id", $$v)
                      },
                      expression: "item.position_id"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9FZGl0b3IudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0VkaXRvci52dWU/OTI1MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9FZGl0b3IudnVlPzBlMTUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvRWRpdG9yLnZ1ZT8xN2YyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXdNO0FBQ3hNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFxTDtBQUNyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQThPO0FBQzlPO0FBQ0E7QUFDQTtBQUNBLGtFQUE4SDtBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwwREFBMkQsNkJBQTZCLDhCQUE4Qixv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QUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOEJBQThCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8yOS5jZGVkM2I5YTc3YjNmNjBhYTBiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmI4Njg5NzBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9FZGl0b3IudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0VkaXRvci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTJiODY4OTcwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9FZGl0b3IudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0yYjg2ODk3MFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGFkbWluXFxcXGVtcGxveWVlc1xcXFxFZGl0b3IudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJiODY4OTcwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmI4Njg5NzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0VkaXRvci52dWVcbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDI5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJiODY4OTcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRWRpdG9yLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNWQzZTI3MmNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJiODY4OTcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRWRpdG9yLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYjg2ODk3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0VkaXRvci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmI4Njg5NzBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvRWRpdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMjkiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNhcmRfX3RpdGxlW2RhdGEtdi0yYjg2ODk3MF0ge1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jYXJkX190ZXh0W2RhdGEtdi0yYjg2ODk3MF0ge1xcblxcdHBhZGRpbmc6IDAgMzBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9jcm0vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvRWRpdG9yLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBaUtBO0NBQ0EseUJBQUE7S0FBQSxzQkFBQTtTQUFBLHdCQUFBO0NBQ0E7QUFDQTtDQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIkVkaXRvci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19jcmVhdGVcXFwiPlxcclxcbiAgICAgICAgPHYtY2FyZD5cXHJcXG4gICAgICAgICAgPHYtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgICA8aDI+e3t0aXRsZX19IDx2LWljb24gY2xhc3M9XFxcInRpdGxlX19pY29uXFxcIj57e3RpdGxlSWNvbn19PC92LWljb24+PC9oMj5cXHJcXG4gICAgICAgICAgPC92LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICAgIDx2LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgICA8di1mb3JtIHYtbW9kZWw9XFxcInZhbGlkXFxcIiByZWY9XFxcImZvcm1cXFwiIGxhenktdmFsaWRhdGlvbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ25hbWUnKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmZpcnN0X25hbWVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJuYW1lUnVsZXNcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmNvdW50ZXI9XFxcIjcwXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgID48L3YtdGV4dC1maWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ2xhc3RfbmFtZScpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ubGFzdF9uYW1lXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwibmFtZVJ1bGVzXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCI3MFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICA+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIDx2LXRleHQtZmllbGRcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdwYXRyb255bWljJylcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5wYXRyb255bWljXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwibmFtZVJ1bGVzXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCI3MFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPjwvdi10ZXh0LWZpZWxkPlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICA8di1zZWxlY3RcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdwb3NpdGlvbicpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ucG9zaXRpb25faWRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJjYXJkX3RyYXZlbFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6aXRlbXM9XFxcInBvc2l0aW9uc1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICBpdGVtLXRleHQ9XFxcInRpdGxlXFxcIlxcclxcblxcdCAgICAgICAgICBcXHRcXHRcXHRpdGVtLXZhbHVlPVxcXCJpZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6cnVsZXM9XFxcIlt2ID0+ICEhdiB8fCAn0JLRi9Cx0LXRgNC40YLQtSDQtNC+0LvQttC90L7RgdGC0YwnXVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdD48L3Ytc2VsZWN0PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgPHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3NhbGFyeScpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0uc2FsYXJ5XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiYXR0YWNoX21vbmV5XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgID48L3YtdGV4dC1maWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ2FkZHJlc3MnKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmFkZHJlc3NcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJob21lXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgID48L3YtdGV4dC1maWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8di1sYXlvdXQgcm93IHdyYXA+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDx2LWZsZXggeHMxMj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA8di1tZW51XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICByZWY9XFxcIm1lbnVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICBsYXp5XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICA6Y2xvc2Utb24tY29udGVudC1jbGljaz1cXFwiZmFsc2VcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICB2LW1vZGVsPVxcXCJtZW51XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgdHJhbnNpdGlvbj1cXFwic2NhbGUtdHJhbnNpdGlvblxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIG9mZnNldC15XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICBmdWxsLXdpZHRoXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICA6bnVkZ2UtcmlnaHQ9XFxcIjQwXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgbWluLXdpZHRoPVxcXCIyOTBweFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIDpyZXR1cm4tdmFsdWUuc3luYz1cXFwiZGF0ZVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICA8di10ZXh0LWZpZWxkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICAgIHNsb3Q9XFxcImFjdGl2YXRvclxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgICAgOmxhYmVsPVxcXCIkdCgnYmlydGhkYXknKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgICAgdi1tb2RlbD1cXFwiaXRlbS5iaXJ0aGRheVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgICAgcHJlcGVuZC1pY29uPVxcXCJldmVudFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgICAgcmVhZG9ubHlcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgID48L3YtdGV4dC1maWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIDx2LWRhdGUtcGlja2VyIHYtbW9kZWw9XFxcIml0ZW0uYmlydGhkYXlcXFwiIG5vLXRpdGxlIHNjcm9sbGFibGU+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cXFwicHJpbWFyeVxcXCIgQGNsaWNrPVxcXCJtZW51ID0gZmFsc2VcXFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBAY2xpY2s9XFxcIiRyZWZzLm1lbnUuc2F2ZShkYXRlKVxcXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgPC92LWRhdGUtcGlja2VyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDwvdi1tZW51PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICA8L3YtZmxleD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIDwvdi1sYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIDx2LXRleHQtZmllbGRcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdwaG9uZV9udW1iZXInKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLnBob25lX251bWJlclxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICBwcmVwZW5kLWljb249XFxcInBob25lX2lwaG9uZVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICA+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVxcXCJpbmZvXFxcIiBAY2xpY2submF0aXZlPVxcXCJzYXZlXFxcIiA6ZGlzYWJsZWQ9XFxcIiF2YWxpZFxcXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxcclxcbiAgICAgICAgICAgIFxcdDx2LWJ0biBvdXRsaW5lIGNvbG9yPVxcXCJlcnJvclxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiY2xvc2VcXFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+IFxcclxcblxcdFxcdFxcdFxcdFxcdCAgPC92LWZvcm0+XFxyXFxuICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XFxyXFxuICAgICAgICA8L3YtY2FyZD5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuXFx0aW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcXHJcXG5cXHRpbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnO1xcclxcblxcclxcblxcdGV4cG9ydCBkZWZhdWx0IHtcXHJcXG5cXHRcXHRtaWRkbGV3YXJlOiBbJ2F1dGgnLCAnb3JnYW5pc2F0aW9uJ10sXFxyXFxuXFx0XFx0cHJvcHM6IHtcXHJcXG5cXHRcXHRcXHRpZDoge1xcclxcblxcdFxcdFxcdFxcdGRlZmF1bHQ6IG51bGxcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRkYXRhKCkge1xcclxcblxcdFxcdFxcdHJldHVybiB7XFxyXFxuXFx0XFx0XFx0XFx0ZGF0ZTogbnVsbCxcXHJcXG5cXHQgICAgICBtZW51OiBmYWxzZSxcXHJcXG5cXHQgICAgICBtb2RhbDogZmFsc2UsXFxyXFxuXFx0ICAgICAgbmFtZTogJycsXFxyXFxuXFx0ICAgICAgdmFsaWQ6IGZhbHNlLFxcclxcblxcdCAgICAgIG5hbWVSdWxlczogW1xcclxcblxcdCAgICAgICAgdiA9PiAhIXYgfHwgJ9CS0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LUnLFxcclxcblxcdCAgICAgICAgdiA9PiAodiAmJiB2Lmxlbmd0aCA+IDEpIHx8ICfQmNC80Y8g0LTQvtC70LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDQvNC40L3QuNC80YPQvCAyINCx0YPQutCy0YsnLFxcclxcblxcdCAgICAgIF0sXFxyXFxuXFx0ICAgICAgZW1haWxSdWxlczogW1xcclxcblxcdCAgICAgICAgdiA9PiAhIXYgfHwgJ9CS0LLQtdC00LjRgtC1IEUtbWFpbCcsXFxyXFxuXFx0ICAgICAgICB2ID0+IC9eXFxcXHcrKFsuLV0/XFxcXHcrKSpAXFxcXHcrKFsuLV0/XFxcXHcrKSooXFxcXC5cXFxcd3syLDN9KSskLy50ZXN0KHYpIHx8ICfQndC1INCy0LDQu9C40LTQvdGL0LkgRS1tYWlsJ1xcclxcblxcdCAgICAgIF1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRjb21wdXRlZDoge1xcclxcblxcdFxcdFxcdC4uLm1hcEdldHRlcnMoe1xcclxcblxcdFxcdFxcdFxcdGl0ZW06ICdlbXBsb3llZXMvZW1wbG95ZWUnLFxcclxcblxcdFxcdFxcdFxcdHBvc2l0aW9uczogJ3Bvc2l0aW9ucy9wb3NpdGlvbnMnXFxyXFxuXFx0XFx0XFx0fSksXFxyXFxuXFx0XFx0XFx0dGl0bGUoKSB7XFxyXFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLmlkKSA/IHRoaXMuJHQoJ2VkaXRfZW1wbG95ZWUnKSA6IHRoaXMuJHQoJ25ld19lbXBsb3llZScpO1xcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0dGl0bGVJY29uKCkge1xcclxcblxcdFxcdFxcdFxcdHJldHVybiAodGhpcy5pZCkgPyAncGVyc29uJyA6ICdwZXJzb25fYWRkJztcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdGl0ZW0oKSB7XFxyXFxuXFx0XFx0XFx0XFx0cmV0dXJuIHt9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0YmVmb3JlUm91dGVFbnRlciAodG8sIGZyb20sIG5leHQpIHtcXHJcXG4gICAgXFx0bmV4dCh2bSA9PiB7XFxyXFxuICAgIFxcdFxcdGlmKHZtLmlkKSB7XFxyXFxuICAgIFxcdFxcdFxcdHZtLiRzdG9yZS5kaXNwYXRjaCgnZW1wbG95ZWVzL2xvYWRPbmUnLCB2bS5pZCk7XFxyXFxuICAgIFxcdFxcdFxcdHZtLml0ZW0gPSB2bS5lbXBsb3llZVxcclxcbiAgICBcXHR9fSlcXHJcXG4gICAgfSxcXHJcXG5cXHRcXHRtZXRob2RzOiB7XFxyXFxuXFx0XFx0XFx0Li4ubWFwQWN0aW9ucyh7XFxyXFxuXFx0XFx0XFx0XFx0bG9hZEl0ZW06ICdlbXBsb3llZXMvbG9hZE9uZScsXFxyXFxuXFx0XFx0XFx0XFx0Y2hhbmdlSXRlbTogJ2VtcGxveWVlcy9lZGl0JyxcXHJcXG5cXHRcXHRcXHRcXHRhZGRJdGVtOiAnZW1wbG95ZWVzL2FkZCdcXHJcXG5cXHRcXHRcXHR9KSxcXHJcXG5cXHRcXHRcXHRzYXZlKCkge1xcclxcblxcdFxcdFxcdFxcdHRoaXMuYWRkSXRlbSh0aGlzLml0ZW0pO1xcclxcblxcdFxcdFxcdFxcdHRoaXMuJHJvdXRlci5nbygtMSk7XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRjbG9zZSgpIHtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLiRyb3V0ZXIuZ28oLTEpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuXFx0LmNhcmRfX3RpdGxlIHtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFx0LmNhcmRfX3RleHQge1xcclxcblxcdFxcdHBhZGRpbmc6IDAgMzBweDtcXHJcXG5cXHR9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmI4Njg5NzBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvRWRpdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMjkiLCI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19jcmVhdGVcIj5cclxuICAgICAgICA8di1jYXJkPlxyXG4gICAgICAgICAgPHYtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgPGgyPnt7dGl0bGV9fSA8di1pY29uIGNsYXNzPVwidGl0bGVfX2ljb25cIj57e3RpdGxlSWNvbn19PC92LWljb24+PC9oMj5cclxuICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgPHYtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICA8di1mb3JtIHYtbW9kZWw9XCJ2YWxpZFwiIHJlZj1cImZvcm1cIiBsYXp5LXZhbGlkYXRpb24+XHJcblx0XHRcdFx0XHQgICAgPHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ25hbWUnKVwiXHJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5maXJzdF9uYW1lXCJcclxuXHRcdFx0XHRcdCAgICAgIDpydWxlcz1cIm5hbWVSdWxlc1wiXHJcblx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcclxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXHJcblx0XHRcdFx0XHQgICAgPjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0ICAgIDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdsYXN0X25hbWUnKVwiXHJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5sYXN0X25hbWVcIlxyXG5cdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwibmFtZVJ1bGVzXCJcclxuXHRcdFx0XHRcdCAgICAgIDpjb3VudGVyPVwiNzBcIlxyXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdCAgICA+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHQgICAgPHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3BhdHJvbnltaWMnKVwiXHJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5wYXRyb255bWljXCJcclxuXHRcdFx0XHRcdCAgICAgIDpydWxlcz1cIm5hbWVSdWxlc1wiXHJcblx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcclxuXHRcdFx0XHRcdCAgICA+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHQgICAgPHYtc2VsZWN0XHJcblx0XHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdwb3NpdGlvbicpXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucG9zaXRpb25faWRcIlxyXG5cdFx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJjYXJkX3RyYXZlbFwiXHJcblx0XHRcdFx0XHRcdCAgICAgIDppdGVtcz1cInBvc2l0aW9uc1wiXHJcblx0XHRcdFx0XHRcdCAgICAgIGl0ZW0tdGV4dD1cInRpdGxlXCJcclxuXHQgICAgICAgICAgXHRcdFx0aXRlbS12YWx1ZT1cImlkXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwiW3YgPT4gISF2IHx8ICfQktGL0LHQtdGA0LjRgtC1INC00L7Qu9C20L3QvtGB0YLRjCddXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0XHQ+PC92LXNlbGVjdD5cclxuXHRcdFx0XHRcdFx0ICA8di10ZXh0LWZpZWxkXHJcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnc2FsYXJ5JylcIlxyXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0uc2FsYXJ5XCJcclxuXHRcdFx0XHRcdCAgICAgIHByZXBlbmQtaWNvbj1cImF0dGFjaF9tb25leVwiXHJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxyXG5cdFx0XHRcdFx0ICAgID48L3YtdGV4dC1maWVsZD5cclxuXHRcdFx0XHRcdCAgICA8di10ZXh0LWZpZWxkXHJcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnYWRkcmVzcycpXCJcclxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLmFkZHJlc3NcIlxyXG5cdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwiaG9tZVwiXHJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxyXG5cdFx0XHRcdFx0ICAgID48L3YtdGV4dC1maWVsZD5cclxuXHRcdFx0XHRcdFx0XHQ8di1sYXlvdXQgcm93IHdyYXA+XHJcblx0XHRcdFx0XHRcdCAgICA8di1mbGV4IHhzMTI+XHJcblx0XHRcdFx0XHRcdCAgICAgIDx2LW1lbnVcclxuXHRcdFx0XHRcdFx0ICAgICAgICByZWY9XCJtZW51XCJcclxuXHRcdFx0XHRcdFx0ICAgICAgICBsYXp5XHJcblx0XHRcdFx0XHRcdCAgICAgICAgOmNsb3NlLW9uLWNvbnRlbnQtY2xpY2s9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdCAgICAgICAgdi1tb2RlbD1cIm1lbnVcIlxyXG5cdFx0XHRcdFx0XHQgICAgICAgIHRyYW5zaXRpb249XCJzY2FsZS10cmFuc2l0aW9uXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgICBvZmZzZXQteVxyXG5cdFx0XHRcdFx0XHQgICAgICAgIGZ1bGwtd2lkdGhcclxuXHRcdFx0XHRcdFx0ICAgICAgICA6bnVkZ2UtcmlnaHQ9XCI0MFwiXHJcblx0XHRcdFx0XHRcdCAgICAgICAgbWluLXdpZHRoPVwiMjkwcHhcIlxyXG5cdFx0XHRcdFx0XHQgICAgICAgIDpyZXR1cm4tdmFsdWUuc3luYz1cImRhdGVcIlxyXG5cdFx0XHRcdFx0XHQgICAgICA+XHJcblx0XHRcdFx0XHRcdCAgICAgICAgPHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgc2xvdD1cImFjdGl2YXRvclwiXHJcblx0XHRcdFx0XHRcdCAgICAgICAgICA6bGFiZWw9XCIkdCgnYmlydGhkYXknKVwiXHJcblx0XHRcdFx0XHRcdCAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5iaXJ0aGRheVwiXHJcblx0XHRcdFx0XHRcdCAgICAgICAgICBwcmVwZW5kLWljb249XCJldmVudFwiXHJcblx0XHRcdFx0XHRcdCAgICAgICAgICByZWFkb25seVxyXG5cdFx0XHRcdFx0XHQgICAgICAgID48L3YtdGV4dC1maWVsZD5cclxuXHRcdFx0XHRcdFx0ICAgICAgICA8di1kYXRlLXBpY2tlciB2LW1vZGVsPVwiaXRlbS5iaXJ0aGRheVwiIG5vLXRpdGxlIHNjcm9sbGFibGU+XHJcblx0XHRcdFx0XHRcdCAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cclxuXHRcdFx0XHRcdFx0ICAgICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIm1lbnUgPSBmYWxzZVwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XHJcblx0XHRcdFx0XHRcdCAgICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCIkcmVmcy5tZW51LnNhdmUoZGF0ZSlcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XHJcblx0XHRcdFx0XHRcdCAgICAgICAgPC92LWRhdGUtcGlja2VyPlxyXG5cdFx0XHRcdFx0XHQgICAgICA8L3YtbWVudT5cclxuXHRcdFx0XHRcdFx0ICAgIDwvdi1mbGV4PlxyXG5cdFx0XHRcdFx0XHQgIDwvdi1sYXlvdXQ+XHJcblx0XHRcdFx0XHQgICAgPHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3Bob25lX251bWJlcicpXCJcclxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLnBob25lX251bWJlclwiXHJcblx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJwaG9uZV9pcGhvbmVcIlxyXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdCAgICA+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHQgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgQGNsaWNrLm5hdGl2ZT1cInNhdmVcIiA6ZGlzYWJsZWQ9XCIhdmFsaWRcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XHJcbiAgICAgICAgICAgIFx0PHYtYnRuIG91dGxpbmUgY29sb3I9XCJlcnJvclwiIEBjbGljay5uYXRpdmU9XCJjbG9zZVwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+IFxyXG5cdFx0XHRcdFx0ICA8L3YtZm9ybT5cclxuICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XHJcbiAgICAgICAgPC92LWNhcmQ+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bWlkZGxld2FyZTogWydhdXRoJywgJ29yZ2FuaXNhdGlvbiddLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0aWQ6IHtcclxuXHRcdFx0XHRkZWZhdWx0OiBudWxsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRhdGU6IG51bGwsXHJcblx0ICAgICAgbWVudTogZmFsc2UsXHJcblx0ICAgICAgbW9kYWw6IGZhbHNlLFxyXG5cdCAgICAgIG5hbWU6ICcnLFxyXG5cdCAgICAgIHZhbGlkOiBmYWxzZSxcclxuXHQgICAgICBuYW1lUnVsZXM6IFtcclxuXHQgICAgICAgIHYgPT4gISF2IHx8ICfQktCy0LXQtNC40YLQtSDQt9C90LDRh9C10L3QuNC1JyxcclxuXHQgICAgICAgIHYgPT4gKHYgJiYgdi5sZW5ndGggPiAxKSB8fCAn0JjQvNGPINC00L7Qu9C20L3QviDRgdC+0LTQtdGA0LbQsNGC0Ywg0LzQuNC90LjQvNGD0LwgMiDQsdGD0LrQstGLJyxcclxuXHQgICAgICBdLFxyXG5cdCAgICAgIGVtYWlsUnVsZXM6IFtcclxuXHQgICAgICAgIHYgPT4gISF2IHx8ICfQktCy0LXQtNC40YLQtSBFLW1haWwnLFxyXG5cdCAgICAgICAgdiA9PiAvXlxcdysoWy4tXT9cXHcrKSpAXFx3KyhbLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8udGVzdCh2KSB8fCAn0J3QtSDQstCw0LvQuNC00L3Ri9C5IEUtbWFpbCdcclxuXHQgICAgICBdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHQuLi5tYXBHZXR0ZXJzKHtcclxuXHRcdFx0XHRpdGVtOiAnZW1wbG95ZWVzL2VtcGxveWVlJyxcclxuXHRcdFx0XHRwb3NpdGlvbnM6ICdwb3NpdGlvbnMvcG9zaXRpb25zJ1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0dGl0bGUoKSB7XHJcblx0XHRcdFx0cmV0dXJuICh0aGlzLmlkKSA/IHRoaXMuJHQoJ2VkaXRfZW1wbG95ZWUnKSA6IHRoaXMuJHQoJ25ld19lbXBsb3llZScpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aXRsZUljb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuICh0aGlzLmlkKSA/ICdwZXJzb24nIDogJ3BlcnNvbl9hZGQnO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRpdGVtKCkge1xyXG5cdFx0XHRcdHJldHVybiB7fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YmVmb3JlUm91dGVFbnRlciAodG8sIGZyb20sIG5leHQpIHtcclxuICAgIFx0bmV4dCh2bSA9PiB7XHJcbiAgICBcdFx0aWYodm0uaWQpIHtcclxuICAgIFx0XHRcdHZtLiRzdG9yZS5kaXNwYXRjaCgnZW1wbG95ZWVzL2xvYWRPbmUnLCB2bS5pZCk7XHJcbiAgICBcdFx0XHR2bS5pdGVtID0gdm0uZW1wbG95ZWVcclxuICAgIFx0fX0pXHJcbiAgICB9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcclxuXHRcdFx0XHRsb2FkSXRlbTogJ2VtcGxveWVlcy9sb2FkT25lJyxcclxuXHRcdFx0XHRjaGFuZ2VJdGVtOiAnZW1wbG95ZWVzL2VkaXQnLFxyXG5cdFx0XHRcdGFkZEl0ZW06ICdlbXBsb3llZXMvYWRkJ1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0c2F2ZSgpIHtcclxuXHRcdFx0XHR0aGlzLmFkZEl0ZW0odGhpcy5pdGVtKTtcclxuXHRcdFx0XHR0aGlzLiRyb3V0ZXIuZ28oLTEpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbG9zZSgpIHtcclxuXHRcdFx0XHR0aGlzLiRyb3V0ZXIuZ28oLTEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LmNhcmRfX3RpdGxlIHtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHQuY2FyZF9fdGV4dCB7XHJcblx0XHRwYWRkaW5nOiAwIDMwcHg7XHJcblx0fVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9FZGl0b3IudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2NyZWF0ZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJoMlwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVfX2ljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZUljb24pKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBcImxhenktdmFsaWRhdGlvblwiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbGlkLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnZhbGlkID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBfdm0ubmFtZVJ1bGVzLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiZmlyc3RfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uZmlyc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwibGFzdF9uYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBfdm0ubmFtZVJ1bGVzLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJsYXN0X25hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicGF0cm9ueW1pY1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBydWxlczogX3ZtLm5hbWVSdWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyOiA3MFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5wYXRyb255bWljLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInBhdHJvbnltaWNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnBhdHJvbnltaWNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicG9zaXRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJjYXJkX3RyYXZlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ucG9zaXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhIXYgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC00L7Qu9C20L3QvtGB0YLRjFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5wb3NpdGlvbl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJwb3NpdGlvbl9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucG9zaXRpb25faWRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInNhbGFyeVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImF0dGFjaF9tb25leVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnNhbGFyeSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJzYWxhcnlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnNhbGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiYWRkcmVzc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImhvbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImFkZHJlc3NcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbWVudVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJtZW51XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NlLW9uLWNvbnRlbnQtY2xpY2tcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwic2NhbGUtdHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9mZnNldC15XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnVsbC13aWR0aFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm51ZGdlLXJpZ2h0XCI6IDQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbi13aWR0aFwiOiBcIjI5MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLXZhbHVlXCI6IF92bS5kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cmV0dXJuVmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGUgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWVudSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZW51ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiYmlydGhkYXlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJldmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmJpcnRoZGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImJpcnRoZGF5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5iaXJ0aGRheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZGF0ZS1waWNrZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tdGl0bGVcIjogXCJcIiwgc2Nyb2xsYWJsZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uYmlydGhkYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImJpcnRoZGF5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uYmlydGhkYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lbnUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRyZWZzLm1lbnUuc2F2ZShfdm0uZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJva1wiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInBob25lX251bWJlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInBob25lX2lwaG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnBob25lX251bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJwaG9uZV9udW1iZXJcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnBob25lX251bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLnZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2F2ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJva1wiKSkpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiZXJyb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jbG9zZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjYW5jZWxcIikpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yYjg2ODk3MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMmI4Njg5NzBcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0VkaXRvci52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDI5Il0sInNvdXJjZVJvb3QiOiIifQ==