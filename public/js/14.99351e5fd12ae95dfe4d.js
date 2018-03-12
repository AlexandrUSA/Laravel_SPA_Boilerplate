webpackJsonp([14],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(224)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(226)
/* template */
var __vue_template__ = __webpack_require__(227)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-20e84fe5"
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
Component.options.__file = "resources\\assets\\js\\pages\\admin\\clients\\Editor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20e84fe5", Component.options)
  } else {
    hotAPI.reload("data-v-20e84fe5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(225);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("9f8db5b6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-20e84fe5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Editor.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-20e84fe5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Editor.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.card__text[data-v-20e84fe5] {\n\tpadding: 0 30px;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/clients/resources/assets/js/pages/admin/clients/Editor.vue"],"names":[],"mappings":";AAmKA;CACA,gBAAA;CACA","file":"Editor.vue","sourcesContent":["<template>\n\t<div class=\"employee__create\">\n        <v-card>\n          <v-card-title>\n            <h2>{{title}} <v-icon class=\"title__icon\">{{titleIcon}}</v-icon></h2>\n          </v-card-title>\n          <v-card-text>\n            <v-form v-model=\"valid\" ref=\"form\" lazy-validation>\n\t\t\t\t\t    <v-text-field\n\t\t\t\t\t      :label=\"$t('name')\"\n\t\t\t\t\t      v-model=\"item.first_name\"\n\t\t\t\t\t      :rules=\"nameRules\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      required\n\t\t\t\t\t    ></v-text-field>\n\t\t\t\t\t    <v-text-field\n\t\t\t\t\t      :label=\"$t('last_name')\"\n\t\t\t\t\t      v-model=\"item.last_name\"\n\t\t\t\t\t      :rules=\"nameRules\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      required\n\t\t\t\t\t    ></v-text-field>\n\t\t\t\t\t    <v-text-field\n\t\t\t\t\t      :label=\"$t('patronymic')\"\n\t\t\t\t\t      v-model=\"item.patronymic\"\n\t\t\t\t\t      :rules=\"nameRules\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t    ></v-text-field>\n\t\t\t\t\t\t  <v-select\n\t\t\t\t\t      :label=\"$t('position')\"\n\t\t\t\t\t      v-model=\"item.position\"\n\t\t\t\t\t      prepend-icon=\"card_travel\"\n\t\t\t\t\t      :items=\"positions\"\n\t\t\t\t\t      :rules=\"[v => !!v || 'Выберите должность']\"\n\t\t\t\t\t      required\n\t\t\t\t\t    ></v-select>\n\t\t\t\t\t\t  <v-text-field\n\t\t\t\t\t      :label=\"$t('salary')\"\n\t\t\t\t\t      v-model=\"item.salary\"\n\t\t\t\t\t      prepend-icon=\"attach_money\"\n\t\t\t\t\t      required\n\t\t\t\t\t    ></v-text-field>\n\t\t\t\t\t    <v-text-field\n\t\t\t\t\t      :label=\"$t('address')\"\n\t\t\t\t\t      v-model=\"item.address\"\n\t\t\t\t\t      prepend-icon=\"home\"\n\t\t\t\t\t      required\n\t\t\t\t\t    ></v-text-field>\n\t\t\t\t\t\t\t<v-layout row wrap>\n\t\t\t\t\t\t    <v-flex xs12>\n\t\t\t\t\t\t      <v-menu\n\t\t\t\t\t\t        ref=\"menu\"\n\t\t\t\t\t\t        lazy\n\t\t\t\t\t\t        :close-on-content-click=\"false\"\n\t\t\t\t\t\t        v-model=\"menu\"\n\t\t\t\t\t\t        transition=\"scale-transition\"\n\t\t\t\t\t\t        offset-y\n\t\t\t\t\t\t        full-width\n\t\t\t\t\t\t        :nudge-right=\"40\"\n\t\t\t\t\t\t        min-width=\"290px\"\n\t\t\t\t\t\t        :return-value.sync=\"date\"\n\t\t\t\t\t\t      >\n\t\t\t\t\t\t        <v-text-field\n\t\t\t\t\t\t          slot=\"activator\"\n\t\t\t\t\t\t          :label=\"$t('birthday')\"\n\t\t\t\t\t\t          v-model=\"item.birthday\"\n\t\t\t\t\t\t          prepend-icon=\"event\"\n\t\t\t\t\t\t          readonly\n\t\t\t\t\t\t        ></v-text-field>\n\t\t\t\t\t\t        <v-date-picker v-model=\"item.birthday\" no-title scrollable>\n\t\t\t\t\t\t          <v-spacer></v-spacer>\n\t\t\t\t\t\t          <v-btn flat color=\"primary\" @click=\"menu = false\">{{ $t('cancel') }}</v-btn>\n\t\t\t\t\t\t          <v-btn flat color=\"primary\" @click=\"$refs.menu.save(date)\">{{ $t('ok') }}</v-btn>\n\t\t\t\t\t\t        </v-date-picker>\n\t\t\t\t\t\t      </v-menu>\n\t\t\t\t\t\t    </v-flex>\n\t\t\t\t\t\t  </v-layout>\n\t\t\t\t\t    <v-text-field\n\t\t\t\t\t      :label=\"$t('phone_number')\"\n\t\t\t\t\t      v-model=\"item.phone_number\"\n\t\t\t\t\t      prepend-icon=\"phone_iphone\"\n\t\t\t\t\t      required\n\t\t\t\t\t    ></v-text-field>\n\t\t\t\t\t    <v-btn outline color=\"info\" @click.native=\"save\" :disabled=\"!valid\">{{ $t('ok') }}</v-btn>\n            \t<v-btn outline color=\"error\" @click.native=\"close\">{{ $t('cancel') }}</v-btn> \n\t\t\t\t\t  </v-form>\n          </v-card-text>\n        </v-card>\n\t</div>\n</template>\n\n<script>\n\timport axios from 'axios';\n\timport {mapActions} from 'vuex';\n\n\texport default {\n\t\tprops: {\n\t\t\tid: {\n\t\t\t\tdefault: null\n\t\t\t}\n\t\t},\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\tdate: null,\n\t      menu: false,\n\t      modal: false,\n\t      name: '',\n\t      item: {},\n\t      valid: false,\n\t      nameRules: [\n\t        v => !!v || 'Введите значение',\n\t        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',\n\t      ],\n\t      emailRules: [\n\t        v => !!v || 'Введите E-mail',\n\t        v => /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(v) || 'Не валидный E-mail'\n\t      ],\n\t      positions: [\n\t        'Старший сотрудник',\n\t        'Бухгалтер',\n\t        'Директор',\n\t        'Сотрудник'\n\t      ],\n\t\t\t}\n\t\t},\n\t\tcomputed: {\n\t\t\ttitle() {\n\t\t\t\treturn (this.id) ? this.$t('edit_employee') : this.$t('new_employee');\n\t\t\t},\n\t\t\ttitleIcon() {\n\t\t\t\treturn (this.id) ? 'person' : 'person_add';\n\t\t\t}\n\t\t},\n\t\tasync created() {\n\t\t  if (this.id) {\n\t\t    try {\n      \t\tconst { data } = await axios.get('/api/employees/' + this.id);\n      \t\tthis.item = data;\n    \t\t} catch (e) {\n      \t\tconsole.error('Не загрузился сотрудник', e)\n    \t\t}\t\n\t\t  }\n\t\t},\n\t\tmethods: {\n\t\t\t...mapActions({\n\t\t\t\tchangeItem: 'AdminEmployees/edit',\n\t\t\t\taddItem: 'AdminEmployees/add'\n\t\t\t}),\n\t\t\tsave() {\n\t\t\t\tif(this.id) {\n\t\t\t\t\tthis.changeItem(this.item);\t\t\t\n\t\t\t\t} else {\n\t\t\t\t\tthis.addItem(this.item);\n\t\t\t\t}\t\n\t\t\t\tthis.$router.go(-1);\n\t\t\t},\n\t\t\tclose() {\n\t\t\t\tthis.$router.go(-1);\n\t\t\t}\n\t\t}\n\t}\n</script>\n\n<style scoped>\n\t.card__text {\n\t\tpadding: 0 30px;\n\t}\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(7);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
			item: {},
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

	computed: {
		title: function title() {
			return this.id ? this.$t('edit_employee') : this.$t('new_employee');
		},
		titleIcon: function titleIcon() {
			return this.id ? 'person' : 'person_add';
		}
	},
	created: function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
			var _ref2, data;

			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							if (!this.id) {
								_context.next = 12;
								break;
							}

							_context.prev = 1;
							_context.next = 4;
							return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api/employees/' + this.id);

						case 4:
							_ref2 = _context.sent;
							data = _ref2.data;

							this.item = data;
							_context.next = 12;
							break;

						case 9:
							_context.prev = 9;
							_context.t0 = _context['catch'](1);

							console.error('Не загрузился сотрудник', _context.t0);

						case 12:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this, [[1, 9]]);
		}));

		function created() {
			return _ref.apply(this, arguments);
		}

		return created;
	}(),

	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])({
		changeItem: 'AdminEmployees/edit',
		addItem: 'AdminEmployees/add'
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

/***/ 227:
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
    require("vue-hot-reload-api")      .rerender("data-v-20e84fe5", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvRWRpdG9yLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvRWRpdG9yLnZ1ZT8xZDA5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vY2xpZW50cy9FZGl0b3IudnVlPzNmY2QiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vY2xpZW50cy9FZGl0b3IudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vY2xpZW50cy9FZGl0b3IudnVlPzg4NDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSx5REFBMEQsb0JBQW9CLEdBQUcsVUFBVSxvS0FBb0ssTUFBTSxXQUFX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ckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDhCQUE4QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMTQuOTkzNTFlNWZkMTJhZTk1ZGZlNGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIwZTg0ZmU1XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vRWRpdG9yLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9FZGl0b3IudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yMGU4NGZlNVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRWRpdG9yLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMjBlODRmZTVcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxjbGllbnRzXFxcXEVkaXRvci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjBlODRmZTVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yMGU4NGZlNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL0VkaXRvci52dWVcbi8vIG1vZHVsZSBpZCA9IDE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDE0IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIwZTg0ZmU1XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRWRpdG9yLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiOWY4ZGI1YjZcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjBlODRmZTVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9FZGl0b3IudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIwZTg0ZmU1XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRWRpdG9yLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yMGU4NGZlNVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvRWRpdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTQiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNhcmRfX3RleHRbZGF0YS12LTIwZTg0ZmU1XSB7XFxuXFx0cGFkZGluZzogMCAzMHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL0VkaXRvci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW1LQTtDQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIkVkaXRvci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19jcmVhdGVcXFwiPlxcbiAgICAgICAgPHYtY2FyZD5cXG4gICAgICAgICAgPHYtY2FyZC10aXRsZT5cXG4gICAgICAgICAgICA8aDI+e3t0aXRsZX19IDx2LWljb24gY2xhc3M9XFxcInRpdGxlX19pY29uXFxcIj57e3RpdGxlSWNvbn19PC92LWljb24+PC9oMj5cXG4gICAgICAgICAgPC92LWNhcmQtdGl0bGU+XFxuICAgICAgICAgIDx2LWNhcmQtdGV4dD5cXG4gICAgICAgICAgICA8di1mb3JtIHYtbW9kZWw9XFxcInZhbGlkXFxcIiByZWY9XFxcImZvcm1cXFwiIGxhenktdmFsaWRhdGlvbj5cXG5cXHRcXHRcXHRcXHRcXHQgICAgPHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ25hbWUnKVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmZpcnN0X25hbWVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJuYW1lUnVsZXNcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmNvdW50ZXI9XFxcIjcwXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxuXFx0XFx0XFx0XFx0XFx0ICAgID48L3YtdGV4dC1maWVsZD5cXG5cXHRcXHRcXHRcXHRcXHQgICAgPHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ2xhc3RfbmFtZScpXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ubGFzdF9uYW1lXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwibmFtZVJ1bGVzXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCI3MFxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcblxcdFxcdFxcdFxcdFxcdCAgICA+PC92LXRleHQtZmllbGQ+XFxuXFx0XFx0XFx0XFx0XFx0ICAgIDx2LXRleHQtZmllbGRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdwYXRyb255bWljJylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5wYXRyb255bWljXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwibmFtZVJ1bGVzXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCI3MFxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgPjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgPHYtc2VsZWN0XFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgncG9zaXRpb24nKVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLnBvc2l0aW9uXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiY2FyZF90cmF2ZWxcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOml0ZW1zPVxcXCJwb3NpdGlvbnNcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMJ11cXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXG5cXHRcXHRcXHRcXHRcXHQgICAgPjwvdi1zZWxlY3Q+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA8di10ZXh0LWZpZWxkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgnc2FsYXJ5JylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5zYWxhcnlcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJhdHRhY2hfbW9uZXlcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXG5cXHRcXHRcXHRcXHRcXHQgICAgPjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdFxcdCAgICA8di10ZXh0LWZpZWxkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgnYWRkcmVzcycpXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0uYWRkcmVzc1xcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICBwcmVwZW5kLWljb249XFxcImhvbWVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXG5cXHRcXHRcXHRcXHRcXHQgICAgPjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDx2LWxheW91dCByb3cgd3JhcD5cXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgPHYtZmxleCB4czEyPlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDx2LW1lbnVcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIHJlZj1cXFwibWVudVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIGxhenlcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVxcXCJmYWxzZVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIHYtbW9kZWw9XFxcIm1lbnVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICB0cmFuc2l0aW9uPVxcXCJzY2FsZS10cmFuc2l0aW9uXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgb2Zmc2V0LXlcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIGZ1bGwtd2lkdGhcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIDpudWRnZS1yaWdodD1cXFwiNDBcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICBtaW4td2lkdGg9XFxcIjI5MHB4XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgOnJldHVybi12YWx1ZS5zeW5jPVxcXCJkYXRlXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgID5cXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgIDx2LXRleHQtZmllbGRcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgICAgc2xvdD1cXFwiYWN0aXZhdG9yXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgICA6bGFiZWw9XFxcIiR0KCdiaXJ0aGRheScpXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgICB2LW1vZGVsPVxcXCJpdGVtLmJpcnRoZGF5XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgICBwcmVwZW5kLWljb249XFxcImV2ZW50XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgICByZWFkb25seVxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgICAgPHYtZGF0ZS1waWNrZXIgdi1tb2RlbD1cXFwiaXRlbS5iaXJ0aGRheVxcXCIgbm8tdGl0bGUgc2Nyb2xsYWJsZT5cXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBAY2xpY2s9XFxcIm1lbnUgPSBmYWxzZVxcXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XFxcInByaW1hcnlcXFwiIEBjbGljaz1cXFwiJHJlZnMubWVudS5zYXZlKGRhdGUpXFxcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgICA8L3YtZGF0ZS1waWNrZXI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgPC92LW1lbnU+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDwvdi1mbGV4PlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgPC92LWxheW91dD5cXG5cXHRcXHRcXHRcXHRcXHQgICAgPHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3Bob25lX251bWJlcicpXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ucGhvbmVfbnVtYmVyXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwicGhvbmVfaXBob25lXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxuXFx0XFx0XFx0XFx0XFx0ICAgID48L3YtdGV4dC1maWVsZD5cXG5cXHRcXHRcXHRcXHRcXHQgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImluZm9cXFwiIEBjbGljay5uYXRpdmU9XFxcInNhdmVcXFwiIDpkaXNhYmxlZD1cXFwiIXZhbGlkXFxcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XFxuICAgICAgICAgICAgXFx0PHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImVycm9yXFxcIiBAY2xpY2submF0aXZlPVxcXCJjbG9zZVxcXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj4gXFxuXFx0XFx0XFx0XFx0XFx0ICA8L3YtZm9ybT5cXG4gICAgICAgICAgPC92LWNhcmQtdGV4dD5cXG4gICAgICAgIDwvdi1jYXJkPlxcblxcdDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXHRpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xcblxcdGltcG9ydCB7bWFwQWN0aW9uc30gZnJvbSAndnVleCc7XFxuXFxuXFx0ZXhwb3J0IGRlZmF1bHQge1xcblxcdFxcdHByb3BzOiB7XFxuXFx0XFx0XFx0aWQ6IHtcXG5cXHRcXHRcXHRcXHRkZWZhdWx0OiBudWxsXFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0ZGF0YSgpIHtcXG5cXHRcXHRcXHRyZXR1cm4ge1xcblxcdFxcdFxcdFxcdGRhdGU6IG51bGwsXFxuXFx0ICAgICAgbWVudTogZmFsc2UsXFxuXFx0ICAgICAgbW9kYWw6IGZhbHNlLFxcblxcdCAgICAgIG5hbWU6ICcnLFxcblxcdCAgICAgIGl0ZW06IHt9LFxcblxcdCAgICAgIHZhbGlkOiBmYWxzZSxcXG5cXHQgICAgICBuYW1lUnVsZXM6IFtcXG5cXHQgICAgICAgIHYgPT4gISF2IHx8ICfQktCy0LXQtNC40YLQtSDQt9C90LDRh9C10L3QuNC1JyxcXG5cXHQgICAgICAgIHYgPT4gKHYgJiYgdi5sZW5ndGggPiAxKSB8fCAn0JjQvNGPINC00L7Qu9C20L3QviDRgdC+0LTQtdGA0LbQsNGC0Ywg0LzQuNC90LjQvNGD0LwgMiDQsdGD0LrQstGLJyxcXG5cXHQgICAgICBdLFxcblxcdCAgICAgIGVtYWlsUnVsZXM6IFtcXG5cXHQgICAgICAgIHYgPT4gISF2IHx8ICfQktCy0LXQtNC40YLQtSBFLW1haWwnLFxcblxcdCAgICAgICAgdiA9PiAvXlxcXFx3KyhbLi1dP1xcXFx3KykqQFxcXFx3KyhbLi1dP1xcXFx3KykqKFxcXFwuXFxcXHd7MiwzfSkrJC8udGVzdCh2KSB8fCAn0J3QtSDQstCw0LvQuNC00L3Ri9C5IEUtbWFpbCdcXG5cXHQgICAgICBdLFxcblxcdCAgICAgIHBvc2l0aW9uczogW1xcblxcdCAgICAgICAgJ9Ch0YLQsNGA0YjQuNC5INGB0L7RgtGA0YPQtNC90LjQuicsXFxuXFx0ICAgICAgICAn0JHRg9GF0LPQsNC70YLQtdGAJyxcXG5cXHQgICAgICAgICfQlNC40YDQtdC60YLQvtGAJyxcXG5cXHQgICAgICAgICfQodC+0YLRgNGD0LTQvdC40LonXFxuXFx0ICAgICAgXSxcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHRjb21wdXRlZDoge1xcblxcdFxcdFxcdHRpdGxlKCkge1xcblxcdFxcdFxcdFxcdHJldHVybiAodGhpcy5pZCkgPyB0aGlzLiR0KCdlZGl0X2VtcGxveWVlJykgOiB0aGlzLiR0KCduZXdfZW1wbG95ZWUnKTtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdFxcdHRpdGxlSWNvbigpIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaWQpID8gJ3BlcnNvbicgOiAncGVyc29uX2FkZCc7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0YXN5bmMgY3JlYXRlZCgpIHtcXG5cXHRcXHQgIGlmICh0aGlzLmlkKSB7XFxuXFx0XFx0ICAgIHRyeSB7XFxuICAgICAgXFx0XFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkKTtcXG4gICAgICBcXHRcXHR0aGlzLml0ZW0gPSBkYXRhO1xcbiAgICBcXHRcXHR9IGNhdGNoIChlKSB7XFxuICAgICAgXFx0XFx0Y29uc29sZS5lcnJvcign0J3QtSDQt9Cw0LPRgNGD0LfQuNC70YHRjyDRgdC+0YLRgNGD0LTQvdC40LonLCBlKVxcbiAgICBcXHRcXHR9XFx0XFxuXFx0XFx0ICB9XFxuXFx0XFx0fSxcXG5cXHRcXHRtZXRob2RzOiB7XFxuXFx0XFx0XFx0Li4ubWFwQWN0aW9ucyh7XFxuXFx0XFx0XFx0XFx0Y2hhbmdlSXRlbTogJ0FkbWluRW1wbG95ZWVzL2VkaXQnLFxcblxcdFxcdFxcdFxcdGFkZEl0ZW06ICdBZG1pbkVtcGxveWVlcy9hZGQnXFxuXFx0XFx0XFx0fSksXFxuXFx0XFx0XFx0c2F2ZSgpIHtcXG5cXHRcXHRcXHRcXHRpZih0aGlzLmlkKSB7XFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5jaGFuZ2VJdGVtKHRoaXMuaXRlbSk7XFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0fSBlbHNlIHtcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLmFkZEl0ZW0odGhpcy5pdGVtKTtcXG5cXHRcXHRcXHRcXHR9XFx0XFxuXFx0XFx0XFx0XFx0dGhpcy4kcm91dGVyLmdvKC0xKTtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdFxcdGNsb3NlKCkge1xcblxcdFxcdFxcdFxcdHRoaXMuJHJvdXRlci5nbygtMSk7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG5cXHQuY2FyZF9fdGV4dCB7XFxuXFx0XFx0cGFkZGluZzogMCAzMHB4O1xcblxcdH1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yMGU4NGZlNVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvRWRpdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTQiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJlbXBsb3llZV9fY3JlYXRlXCI+XG4gICAgICAgIDx2LWNhcmQ+XG4gICAgICAgICAgPHYtY2FyZC10aXRsZT5cbiAgICAgICAgICAgIDxoMj57e3RpdGxlfX0gPHYtaWNvbiBjbGFzcz1cInRpdGxlX19pY29uXCI+e3t0aXRsZUljb259fTwvdi1pY29uPjwvaDI+XG4gICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgPHYtZm9ybSB2LW1vZGVsPVwidmFsaWRcIiByZWY9XCJmb3JtXCIgbGF6eS12YWxpZGF0aW9uPlxuXHRcdFx0XHRcdCAgICA8di10ZXh0LWZpZWxkXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ25hbWUnKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0uZmlyc3RfbmFtZVwiXG5cdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwibmFtZVJ1bGVzXCJcblx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxuXHRcdFx0XHRcdCAgICA+PC92LXRleHQtZmllbGQ+XG5cdFx0XHRcdFx0ICAgIDx2LXRleHQtZmllbGRcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnbGFzdF9uYW1lJylcIlxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLmxhc3RfbmFtZVwiXG5cdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwibmFtZVJ1bGVzXCJcblx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxuXHRcdFx0XHRcdCAgICA+PC92LXRleHQtZmllbGQ+XG5cdFx0XHRcdFx0ICAgIDx2LXRleHQtZmllbGRcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgncGF0cm9ueW1pYycpXCJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5wYXRyb255bWljXCJcblx0XHRcdFx0XHQgICAgICA6cnVsZXM9XCJuYW1lUnVsZXNcIlxuXHRcdFx0XHRcdCAgICAgIDpjb3VudGVyPVwiNzBcIlxuXHRcdFx0XHRcdCAgICA+PC92LXRleHQtZmllbGQ+XG5cdFx0XHRcdFx0XHQgIDx2LXNlbGVjdFxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdwb3NpdGlvbicpXCJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5wb3NpdGlvblwiXG5cdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwiY2FyZF90cmF2ZWxcIlxuXHRcdFx0XHRcdCAgICAgIDppdGVtcz1cInBvc2l0aW9uc1wiXG5cdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwiW3YgPT4gISF2IHx8ICfQktGL0LHQtdGA0LjRgtC1INC00L7Qu9C20L3QvtGB0YLRjCddXCJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxuXHRcdFx0XHRcdCAgICA+PC92LXNlbGVjdD5cblx0XHRcdFx0XHRcdCAgPHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdzYWxhcnknKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0uc2FsYXJ5XCJcblx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJhdHRhY2hfbW9uZXlcIlxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXG5cdFx0XHRcdFx0ICAgID48L3YtdGV4dC1maWVsZD5cblx0XHRcdFx0XHQgICAgPHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdhZGRyZXNzJylcIlxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLmFkZHJlc3NcIlxuXHRcdFx0XHRcdCAgICAgIHByZXBlbmQtaWNvbj1cImhvbWVcIlxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXG5cdFx0XHRcdFx0ICAgID48L3YtdGV4dC1maWVsZD5cblx0XHRcdFx0XHRcdFx0PHYtbGF5b3V0IHJvdyB3cmFwPlxuXHRcdFx0XHRcdFx0ICAgIDx2LWZsZXggeHMxMj5cblx0XHRcdFx0XHRcdCAgICAgIDx2LW1lbnVcblx0XHRcdFx0XHRcdCAgICAgICAgcmVmPVwibWVudVwiXG5cdFx0XHRcdFx0XHQgICAgICAgIGxhenlcblx0XHRcdFx0XHRcdCAgICAgICAgOmNsb3NlLW9uLWNvbnRlbnQtY2xpY2s9XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHQgICAgICAgIHYtbW9kZWw9XCJtZW51XCJcblx0XHRcdFx0XHRcdCAgICAgICAgdHJhbnNpdGlvbj1cInNjYWxlLXRyYW5zaXRpb25cIlxuXHRcdFx0XHRcdFx0ICAgICAgICBvZmZzZXQteVxuXHRcdFx0XHRcdFx0ICAgICAgICBmdWxsLXdpZHRoXG5cdFx0XHRcdFx0XHQgICAgICAgIDpudWRnZS1yaWdodD1cIjQwXCJcblx0XHRcdFx0XHRcdCAgICAgICAgbWluLXdpZHRoPVwiMjkwcHhcIlxuXHRcdFx0XHRcdFx0ICAgICAgICA6cmV0dXJuLXZhbHVlLnN5bmM9XCJkYXRlXCJcblx0XHRcdFx0XHRcdCAgICAgID5cblx0XHRcdFx0XHRcdCAgICAgICAgPHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdFx0ICAgICAgICAgIHNsb3Q9XCJhY3RpdmF0b3JcIlxuXHRcdFx0XHRcdFx0ICAgICAgICAgIDpsYWJlbD1cIiR0KCdiaXJ0aGRheScpXCJcblx0XHRcdFx0XHRcdCAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5iaXJ0aGRheVwiXG5cdFx0XHRcdFx0XHQgICAgICAgICAgcHJlcGVuZC1pY29uPVwiZXZlbnRcIlxuXHRcdFx0XHRcdFx0ICAgICAgICAgIHJlYWRvbmx5XG5cdFx0XHRcdFx0XHQgICAgICAgID48L3YtdGV4dC1maWVsZD5cblx0XHRcdFx0XHRcdCAgICAgICAgPHYtZGF0ZS1waWNrZXIgdi1tb2RlbD1cIml0ZW0uYmlydGhkYXlcIiBuby10aXRsZSBzY3JvbGxhYmxlPlxuXHRcdFx0XHRcdFx0ICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuXHRcdFx0XHRcdFx0ICAgICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIm1lbnUgPSBmYWxzZVwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XG5cdFx0XHRcdFx0XHQgICAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XCJwcmltYXJ5XCIgQGNsaWNrPVwiJHJlZnMubWVudS5zYXZlKGRhdGUpXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxuXHRcdFx0XHRcdFx0ICAgICAgICA8L3YtZGF0ZS1waWNrZXI+XG5cdFx0XHRcdFx0XHQgICAgICA8L3YtbWVudT5cblx0XHRcdFx0XHRcdCAgICA8L3YtZmxleD5cblx0XHRcdFx0XHRcdCAgPC92LWxheW91dD5cblx0XHRcdFx0XHQgICAgPHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdwaG9uZV9udW1iZXInKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucGhvbmVfbnVtYmVyXCJcblx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJwaG9uZV9pcGhvbmVcIlxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXG5cdFx0XHRcdFx0ICAgID48L3YtdGV4dC1maWVsZD5cblx0XHRcdFx0XHQgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgQGNsaWNrLm5hdGl2ZT1cInNhdmVcIiA6ZGlzYWJsZWQ9XCIhdmFsaWRcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XG4gICAgICAgICAgICBcdDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiZXJyb3JcIiBAY2xpY2submF0aXZlPVwiY2xvc2VcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPiBcblx0XHRcdFx0XHQgIDwvdi1mb3JtPlxuICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgIDwvdi1jYXJkPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cdGltcG9ydCB7bWFwQWN0aW9uc30gZnJvbSAndnVleCc7XG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRpZDoge1xuXHRcdFx0XHRkZWZhdWx0OiBudWxsXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0ZTogbnVsbCxcblx0ICAgICAgbWVudTogZmFsc2UsXG5cdCAgICAgIG1vZGFsOiBmYWxzZSxcblx0ICAgICAgbmFtZTogJycsXG5cdCAgICAgIGl0ZW06IHt9LFxuXHQgICAgICB2YWxpZDogZmFsc2UsXG5cdCAgICAgIG5hbWVSdWxlczogW1xuXHQgICAgICAgIHYgPT4gISF2IHx8ICfQktCy0LXQtNC40YLQtSDQt9C90LDRh9C10L3QuNC1Jyxcblx0ICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoID4gMSkgfHwgJ9CY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDIg0LHRg9C60LLRiycsXG5cdCAgICAgIF0sXG5cdCAgICAgIGVtYWlsUnVsZXM6IFtcblx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUgRS1tYWlsJyxcblx0ICAgICAgICB2ID0+IC9eXFx3KyhbLi1dP1xcdyspKkBcXHcrKFsuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLy50ZXN0KHYpIHx8ICfQndC1INCy0LDQu9C40LTQvdGL0LkgRS1tYWlsJ1xuXHQgICAgICBdLFxuXHQgICAgICBwb3NpdGlvbnM6IFtcblx0ICAgICAgICAn0KHRgtCw0YDRiNC40Lkg0YHQvtGC0YDRg9C00L3QuNC6Jyxcblx0ICAgICAgICAn0JHRg9GF0LPQsNC70YLQtdGAJyxcblx0ICAgICAgICAn0JTQuNGA0LXQutGC0L7RgCcsXG5cdCAgICAgICAgJ9Ch0L7RgtGA0YPQtNC90LjQuidcblx0ICAgICAgXSxcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHR0aXRsZSgpIHtcblx0XHRcdFx0cmV0dXJuICh0aGlzLmlkKSA/IHRoaXMuJHQoJ2VkaXRfZW1wbG95ZWUnKSA6IHRoaXMuJHQoJ25ld19lbXBsb3llZScpO1xuXHRcdFx0fSxcblx0XHRcdHRpdGxlSWNvbigpIHtcblx0XHRcdFx0cmV0dXJuICh0aGlzLmlkKSA/ICdwZXJzb24nIDogJ3BlcnNvbl9hZGQnO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXN5bmMgY3JlYXRlZCgpIHtcblx0XHQgIGlmICh0aGlzLmlkKSB7XG5cdFx0ICAgIHRyeSB7XG4gICAgICBcdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkKTtcbiAgICAgIFx0XHR0aGlzLml0ZW0gPSBkYXRhO1xuICAgIFx0XHR9IGNhdGNoIChlKSB7XG4gICAgICBcdFx0Y29uc29sZS5lcnJvcign0J3QtSDQt9Cw0LPRgNGD0LfQuNC70YHRjyDRgdC+0YLRgNGD0LTQvdC40LonLCBlKVxuICAgIFx0XHR9XHRcblx0XHQgIH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC4uLm1hcEFjdGlvbnMoe1xuXHRcdFx0XHRjaGFuZ2VJdGVtOiAnQWRtaW5FbXBsb3llZXMvZWRpdCcsXG5cdFx0XHRcdGFkZEl0ZW06ICdBZG1pbkVtcGxveWVlcy9hZGQnXG5cdFx0XHR9KSxcblx0XHRcdHNhdmUoKSB7XG5cdFx0XHRcdGlmKHRoaXMuaWQpIHtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZUl0ZW0odGhpcy5pdGVtKTtcdFx0XHRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmFkZEl0ZW0odGhpcy5pdGVtKTtcblx0XHRcdFx0fVx0XG5cdFx0XHRcdHRoaXMuJHJvdXRlci5nbygtMSk7XG5cdFx0XHR9LFxuXHRcdFx0Y2xvc2UoKSB7XG5cdFx0XHRcdHRoaXMuJHJvdXRlci5nbygtMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblx0LmNhcmRfX3RleHQge1xuXHRcdHBhZGRpbmc6IDAgMzBweDtcblx0fVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL0VkaXRvci52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fY3JlYXRlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImgyXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZV9faWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpdGxlSWNvbikpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mb3JtXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibGF6eS12YWxpZGF0aW9uXCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsaWQsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0udmFsaWQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IF92bS5uYW1lUnVsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJmaXJzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5maXJzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJsYXN0X25hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IF92bS5uYW1lUnVsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ubGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImxhc3RfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ubGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwYXRyb255bWljXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBfdm0ubmFtZVJ1bGVzLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXI6IDcwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnBhdHJvbnltaWMsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwicGF0cm9ueW1pY1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucGF0cm9ueW1pY1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwb3NpdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImNhcmRfdHJhdmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5wb3NpdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhdiB8fCBcItCS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInBvc2l0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5wb3NpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwic2FsYXJ5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiYXR0YWNoX21vbmV5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uc2FsYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInNhbGFyeVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uc2FsYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJhZGRyZXNzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiaG9tZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiYWRkcmVzc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcIm1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2Utb24tY29udGVudC1jbGlja1wiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJzY2FsZS10cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2Zmc2V0LXlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdWxsLXdpZHRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibnVkZ2UtcmlnaHRcIjogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluLXdpZHRoXCI6IFwiMjkwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm4tdmFsdWVcIjogX3ZtLmRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpyZXR1cm5WYWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZSA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZW51LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lbnUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJiaXJ0aGRheVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uYmlydGhkYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiYmlydGhkYXlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmJpcnRoZGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1kYXRlLXBpY2tlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJuby10aXRsZVwiOiBcIlwiLCBzY3JvbGxhYmxlOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5iaXJ0aGRheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiYmlydGhkYXlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5iaXJ0aGRheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVudSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiY2FuY2VsXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHJlZnMubWVudS5zYXZlKF92bS5kYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicGhvbmVfbnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwicGhvbmVfaXBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ucGhvbmVfbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInBob25lX251bWJlclwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucGhvbmVfbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0udmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zYXZlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJlcnJvclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsb3NlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTIwZTg0ZmU1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yMGU4NGZlNVwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL0VkaXRvci52dWVcbi8vIG1vZHVsZSBpZCA9IDIyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDE0Il0sInNvdXJjZVJvb3QiOiIifQ==