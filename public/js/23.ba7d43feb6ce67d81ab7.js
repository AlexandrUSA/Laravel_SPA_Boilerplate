webpackJsonp([23],{

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(237)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(239)
/* template */
var __vue_template__ = __webpack_require__(240)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f60c2c2e"
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
Component.options.__file = "resources\\assets\\js\\pages\\Organization\\Employees\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f60c2c2e", Component.options)
  } else {
    hotAPI.reload("data-v-f60c2c2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    searchProp: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      // Поисковая строка
      search: '',
      // Удаление
      deleteWindow: false
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    positions: 'positions/positions',
    departments: 'departments/departments',
    employees: 'employees/employees'
  })),
  created: function created() {
    if (this.searchProp) this.search = this.searchProp;
    if (!this.headers) {
      throw new Error('You must to specify table headers!');
    }
    if (!this.items) {
      throw new Error('You must to specify table items!');
    }
  }
});

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(238);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("482fc9d0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f60c2c2e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f60c2c2e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./styles.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.btn[data-v-f60c2c2e] {\n  text-transform: none !important;\n}\nli[data-v-f60c2c2e] {\n  margin: 5px !important;\n  -webkit-box-shadow: 0 0 15px #000;\n          box-shadow: 0 0 15px #000;\n}\n.table__buttons[data-v-f60c2c2e] {\n  position: absolute;\n  bottom: -50px;\n}\n.dialog__activator[data-v-f60c2c2e] {\n  position: absolute;\n  bottom: -30px;\n  left: 40px;\n  z-index: 1;\n}\n.card__title[data-v-f60c2c2e] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.card__actions[data-v-f60c2c2e] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.buttonEnter[data-v-f60c2c2e] {\n  -webkit-animation: buttonEnter-data-v-f60c2c2e 0.3s cubic-bezier(0.09, 0.9, 0.48, 1.64);\n          animation: buttonEnter-data-v-f60c2c2e 0.3s cubic-bezier(0.09, 0.9, 0.48, 1.64);\n}\n.buttonLeave[data-v-f60c2c2e] {\n  -webkit-animation: buttonLeave-data-v-f60c2c2e 0.3s cubic-bezier(0.52, -0.44, 0.88, -0.45);\n          animation: buttonLeave-data-v-f60c2c2e 0.3s cubic-bezier(0.52, -0.44, 0.88, -0.45);\n}\n@-webkit-keyframes routerEnter-data-v-f60c2c2e {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes routerEnter-data-v-f60c2c2e {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@-webkit-keyframes routerLeave-data-v-f60c2c2e {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes routerLeave-data-v-f60c2c2e {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@-webkit-keyframes buttonEnter-data-v-f60c2c2e {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes buttonEnter-data-v-f60c2c2e {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@-webkit-keyframes buttonLeave-data-v-f60c2c2e {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n}\n@keyframes buttonLeave-data-v-f60c2c2e {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/Organization/Employees/styles.scss"],"names":[],"mappings":";AAAA;EACE,gCAAgC;CAAE;AAEpC;EACE,uBAAuB;EACvB,kCAA0B;UAA1B,0BAA0B;CAAE;AAE9B;EACE,mBAAmB;EACnB,cAAc;CAAE;AAElB;EACE,mBAAmB;EACnB,cAAc;EACd,WAAW;EACX,WAAW;CAAE;AAEf;EACE,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;CAAE;AAE5B;EACE,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;CAAE;AAE5B;EACE,wFAAgE;UAAhE,gFAAgE;CAAE;AAEpE;EACE,2FAAmE;UAAnE,mFAAmE;CAAE;AAEvE;AACE;IACE,WAAW;CAAE;AACf;IACE,WAAW;CAAE;CAAE;AAJnB;AACE;IACE,WAAW;CAAE;AACf;IACE,WAAW;CAAE;CAAE;AAEnB;AACE;IACE,WAAW;CAAE;AACf;IACE,WAAW;CAAE;CAAE;AAJnB;AACE;IACE,WAAW;CAAE;AACf;IACE,WAAW;CAAE;CAAE;AAEnB;AACE;IACE,4BAAoB;YAApB,oBAAoB;CAAE;AACxB;IACE,4BAAoB;YAApB,oBAAoB;CAAE;CAAE;AAJ5B;AACE;IACE,4BAAoB;YAApB,oBAAoB;CAAE;AACxB;IACE,4BAAoB;YAApB,oBAAoB;CAAE;CAAE;AAE5B;AACE;IACE,4BAAoB;YAApB,oBAAoB;CAAE;AACxB;IACE,4BAAoB;YAApB,oBAAoB;CAAE;CAAE;AAJ5B;AACE;IACE,4BAAoB;YAApB,oBAAoB;CAAE;AACxB;IACE,4BAAoB;YAApB,oBAAoB;CAAE;CAAE","file":"styles.scss","sourcesContent":[".btn {\n  text-transform: none !important; }\n\nli {\n  margin: 5px !important;\n  box-shadow: 0 0 15px #000; }\n\n.table__buttons {\n  position: absolute;\n  bottom: -50px; }\n\n.dialog__activator {\n  position: absolute;\n  bottom: -30px;\n  left: 40px;\n  z-index: 1; }\n\n.card__title {\n  justify-content: center; }\n\n.card__actions {\n  justify-content: center; }\n\n.buttonEnter {\n  animation: buttonEnter 0.3s cubic-bezier(0.09, 0.9, 0.48, 1.64); }\n\n.buttonLeave {\n  animation: buttonLeave 0.3s cubic-bezier(0.52, -0.44, 0.88, -0.45); }\n\n@keyframes routerEnter {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes routerLeave {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes buttonEnter {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes buttonLeave {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_Organization__ = __webpack_require__(158);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/* harmony default export */ __webpack_exports__["default"] = ({
  middleware: ['auth', 'organisation'],
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_Organization__["a" /* default */]],
  data: function data() {
    return {
      /* Подсказки о результате удаления */
      snackbarShow: false,
      snackbarTimeout: 10000,
      // Поиск / Выборка
      selected: [],
      // Удаление
      delMode: 'single',
      // Заголовки таблицы
      headers: [{
        text: 'Имя',
        value: 'first_name'
      }, {
        text: 'Фамилия',
        value: 'last_name'
      }, {
        text: 'Должность',
        value: 'position'
      }, {
        text: 'Подразделение',
        value: 'department'
      }, {
        text: '',
        sortable: false
      }]
    };
  },

  computed: {
    items: function items() {
      var _this = this;

      var data = [];
      this.employees.forEach(function (el) {
        data.push({
          id: el.id,
          first_name: el.first_name,
          last_name: el.last_name || 'Нет данных',
          position: _this._getPosition(el.position_id).title || 'Нет данных',
          department: _this._getDepartment(el.position_id).title || 'Нет данных'
        });
      });
      return data;
    },
    deleteMsg: function deleteMsg() {
      return this.selected.length === 1 ? this.$t('delete_item_confirm') : this.$t('delete_items_confirm');
    }
  },
  methods: _extends({
    _getPosition: function _getPosition(position_id) {
      return this.positions.find(function (el) {
        return +el.id === +position_id;
      }) || {};
    },
    _getDepartment: function _getDepartment(position_id) {
      var position = this._getPosition(position_id);
      return this.departments.find(function (el) {
        return +el.id === +position.department_id;
      }) || {};
    },

    /**
     * Открыть диалог удаления сотрудника
     * @param item
     */
    deleteDialog: function deleteDialog(item) {
      this.deleteWindow = true;
    },

    /**
     * Удаление сотрудника
     */
    deleteConfirm: function deleteConfirm() {
      var _this2 = this;

      this.selected.forEach(function (el) {
        return _this2.deleteItem(el.id);
      });
      this.selected = [];
      this.deleteWindow = false;
      this.snackbarShow = true;
    },

    /**
     * Отмена удаления
     */
    deleteCancel: function deleteCancel() {
      this.deleteWindow = false;
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
    deleteItem: 'employees/remove'
  }))
});

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.deleteWindow,
            callback: function($$v) {
              _vm.deleteWindow = $$v
            },
            expression: "deleteWindow"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v(_vm._s(_vm.$t("attention")))
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-flex", { attrs: { xs12: "" } }, [
                    _vm._v(_vm._s(_vm.deleteMsg))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { outline: "", color: "info" },
                      nativeOn: {
                        click: function($event) {
                          _vm.deleteConfirm($event)
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
                          _vm.deleteCancel($event)
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
      ),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            [
              _c("h2", [_vm._v(_vm._s(_vm.$t("employees")))]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "append-icon": "search",
                  label: _vm.$t("search_input"),
                  "single-line": ""
                },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-data-table",
            {
              staticClass: "elevation-1",
              attrs: {
                headers: _vm.headers,
                items: _vm.items,
                search: _vm.search,
                "select-all": "",
                "item-key": "id",
                "no-results-text": _vm.$t("no_match_found"),
                "rows-per-page-text": _vm.$t("strings")
              },
              scopedSlots: _vm._u([
                {
                  key: "items",
                  fn: function(props) {
                    return [
                      _c(
                        "td",
                        [
                          _c("v-checkbox", {
                            attrs: { primary: "", "hide-details": "" },
                            model: {
                              value: props.selected,
                              callback: function($$v) {
                                _vm.$set(props, "selected", $$v)
                              },
                              expression: "props.selected"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.first_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.last_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.position))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.department))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                outline: "",
                                round: "",
                                to: {
                                  name: "employee",
                                  params: { id: props.item.id }
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("details")))]
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            },
            [
              _c(
                "template",
                { slot: "no-data" },
                [
                  _c(
                    "v-alert",
                    { attrs: { value: true, color: "red", icon: "warning" } },
                    [_vm._v("\n          Нет данных :(\n        ")]
                  )
                ],
                1
              )
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "table__buttons" },
            [
              _c(
                "v-btn",
                {
                  attrs: {
                    fab: "",
                    dark: "",
                    large: "",
                    color: "cyan",
                    to: { name: "employeeCreate" }
                  }
                },
                [_c("v-icon", { attrs: { dark: "" } }, [_vm._v("add")])],
                1
              ),
              _vm._v(" "),
              _c(
                "transition",
                {
                  attrs: {
                    "enter-active-class": "buttonEnter",
                    "leave-active-class": "buttonLeave",
                    mode: "out-in"
                  }
                },
                [
                  _c(
                    "v-btn",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.selected.length > 0,
                          expression: "selected.length > 0"
                        }
                      ],
                      staticClass: "delete-btn",
                      attrs: { fab: "", large: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.deleteDialog(_vm.selected)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("delete")])],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              attrs: {
                timeout: _vm.snackbarTimeout,
                top: "",
                "multi-line": "",
                color: "info"
              },
              model: {
                value: _vm.snackbarShow,
                callback: function($$v) {
                  _vm.snackbarShow = $$v
                },
                expression: "snackbarShow"
              }
            },
            [
              _vm._v("\n      " + _vm._s(_vm.$t("delete_done")) + "\n      "),
              _c(
                "v-btn",
                {
                  attrs: { flat: "", color: "pink" },
                  nativeOn: {
                    click: function($event) {
                      _vm.snackbarShow = false
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f60c2c2e", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL09yZ2FuaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvc3R5bGVzLnNjc3M/Mzc2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Pcmdhbml6YXRpb24vRW1wbG95ZWVzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Pcmdhbml6YXRpb24vRW1wbG95ZWVzL2luZGV4LnZ1ZT83MWZkIl0sIm5hbWVzIjpbInByb3BzIiwic2VhcmNoUHJvcCIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwiZGF0YSIsInNlYXJjaCIsImRlbGV0ZVdpbmRvdyIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsInBvc2l0aW9ucyIsImRlcGFydG1lbnRzIiwiZW1wbG95ZWVzIiwiY3JlYXRlZCIsImhlYWRlcnMiLCJFcnJvciIsIml0ZW1zIiwibWlkZGxld2FyZSIsIm1peGlucyIsInNuYWNrYmFyU2hvdyIsInNuYWNrYmFyVGltZW91dCIsInNlbGVjdGVkIiwiZGVsTW9kZSIsInRleHQiLCJ2YWx1ZSIsInNvcnRhYmxlIiwiZm9yRWFjaCIsInB1c2giLCJpZCIsImVsIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInBvc2l0aW9uIiwiX2dldFBvc2l0aW9uIiwicG9zaXRpb25faWQiLCJ0aXRsZSIsImRlcGFydG1lbnQiLCJfZ2V0RGVwYXJ0bWVudCIsImRlbGV0ZU1zZyIsImxlbmd0aCIsIiR0IiwibWV0aG9kcyIsImZpbmQiLCJkZXBhcnRtZW50X2lkIiwiZGVsZXRlRGlhbG9nIiwiaXRlbSIsImRlbGV0ZUNvbmZpcm0iLCJkZWxldGVJdGVtIiwiZGVsZXRlQ2FuY2VsIiwibWFwQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7O0FDNUNBOztBQUVBLHlEQUFlO0FBQ2JBLFNBQU87QUFDTEMsZ0JBQVk7QUFDVkMsWUFBTUMsTUFESTtBQUVWQyxlQUFTO0FBRkM7QUFEUCxHQURNO0FBT2JDLE1BUGEsa0JBT0w7QUFDTixXQUFPO0FBQ0w7QUFDQUMsY0FBUSxFQUZIO0FBR0w7QUFDQUMsb0JBQWM7QUFKVCxLQUFQO0FBTUQsR0FkWTs7QUFlYkMseUJBQ0ssZ0VBQUFDLENBQVc7QUFDWkMsZUFBVyxxQkFEQztBQUVaQyxpQkFBYSx5QkFGRDtBQUdaQyxlQUFXO0FBSEMsR0FBWCxDQURMLENBZmE7QUFzQmJDLFNBdEJhLHFCQXNCRjtBQUNULFFBQUksS0FBS1osVUFBVCxFQUFxQixLQUFLSyxNQUFMLEdBQWMsS0FBS0wsVUFBbkI7QUFDckIsUUFBRyxDQUFDLEtBQUthLE9BQVQsRUFBa0I7QUFDaEIsWUFBTSxJQUFJQyxLQUFKLENBQVUsb0NBQVYsQ0FBTjtBQUNEO0FBQ0QsUUFBRyxDQUFDLEtBQUtDLEtBQVQsRUFBZ0I7QUFDZCxZQUFNLElBQUlELEtBQUosQ0FBVSxrQ0FBVixDQUFOO0FBQ0Q7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8yMy5iYTdkNDNmZWI2Y2U2N2Q4MWFiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjYwYzJjMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi9zdHlsZXMuc2Nzc1wiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi9zY3JpcHRzLmpzXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1mNjBjMmMyZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi1mNjBjMmMyZVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXE9yZ2FuaXphdGlvblxcXFxFbXBsb3llZXNcXFxcaW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWY2MGMyYzJlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZjYwYzJjMmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvT3JnYW5pemF0aW9uL0VtcGxveWVlcy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIzIiwiaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBzZWFyY2hQcm9wOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJydcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLy8g0J/QvtC40YHQutC+0LLQsNGPINGB0YLRgNC+0LrQsFxyXG4gICAgICBzZWFyY2g6ICcnLFxyXG4gICAgICAvLyDQo9C00LDQu9C10L3QuNC1XHJcbiAgICAgIGRlbGV0ZVdpbmRvdzogZmFsc2UsXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLi4ubWFwR2V0dGVycyh7XHJcbiAgICAgIHBvc2l0aW9uczogJ3Bvc2l0aW9ucy9wb3NpdGlvbnMnLFxyXG4gICAgICBkZXBhcnRtZW50czogJ2RlcGFydG1lbnRzL2RlcGFydG1lbnRzJyxcclxuICAgICAgZW1wbG95ZWVzOiAnZW1wbG95ZWVzL2VtcGxveWVlcydcclxuICAgIH0pXHJcbiAgfSxcclxuICBjcmVhdGVkICgpIHtcclxuICAgIGlmICh0aGlzLnNlYXJjaFByb3ApIHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2hQcm9wO1xyXG4gICAgaWYoIXRoaXMuaGVhZGVycykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHRvIHNwZWNpZnkgdGFibGUgaGVhZGVycyEnKVxyXG4gICAgfVxyXG4gICAgaWYoIXRoaXMuaXRlbXMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCB0byBzcGVjaWZ5IHRhYmxlIGl0ZW1zIScpXHJcbiAgICB9XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvT3JnYW5pemF0aW9uLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY2MGMyYzJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjQ4MmZjOWQwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1mNjBjMmMyZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY2MGMyYzJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZjYwYzJjMmVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Pcmdhbml6YXRpb24vRW1wbG95ZWVzL3N0eWxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAyMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnRuW2RhdGEtdi1mNjBjMmMyZV0ge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcXG59XFxubGlbZGF0YS12LWY2MGMyYzJlXSB7XFxuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwO1xcbn1cXG4udGFibGVfX2J1dHRvbnNbZGF0YS12LWY2MGMyYzJlXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC01MHB4O1xcbn1cXG4uZGlhbG9nX19hY3RpdmF0b3JbZGF0YS12LWY2MGMyYzJlXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0zMHB4O1xcbiAgbGVmdDogNDBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5jYXJkX190aXRsZVtkYXRhLXYtZjYwYzJjMmVdIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2FyZF9fYWN0aW9uc1tkYXRhLXYtZjYwYzJjMmVdIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYnV0dG9uRW50ZXJbZGF0YS12LWY2MGMyYzJlXSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYnV0dG9uRW50ZXItZGF0YS12LWY2MGMyYzJlIDAuM3MgY3ViaWMtYmV6aWVyKDAuMDksIDAuOSwgMC40OCwgMS42NCk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogYnV0dG9uRW50ZXItZGF0YS12LWY2MGMyYzJlIDAuM3MgY3ViaWMtYmV6aWVyKDAuMDksIDAuOSwgMC40OCwgMS42NCk7XFxufVxcbi5idXR0b25MZWF2ZVtkYXRhLXYtZjYwYzJjMmVdIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidXR0b25MZWF2ZS1kYXRhLXYtZjYwYzJjMmUgMC4zcyBjdWJpYy1iZXppZXIoMC41MiwgLTAuNDQsIDAuODgsIC0wLjQ1KTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZS1kYXRhLXYtZjYwYzJjMmUgMC4zcyBjdWJpYy1iZXppZXIoMC41MiwgLTAuNDQsIDAuODgsIC0wLjQ1KTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdXRlckVudGVyLWRhdGEtdi1mNjBjMmMyZSB7XFxuMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxufVxcbkBrZXlmcmFtZXMgcm91dGVyRW50ZXItZGF0YS12LWY2MGMyYzJlIHtcXG4wJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbjEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdXRlckxlYXZlLWRhdGEtdi1mNjBjMmMyZSB7XFxuMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxufVxcbkBrZXlmcmFtZXMgcm91dGVyTGVhdmUtZGF0YS12LWY2MGMyYzJlIHtcXG4wJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbjEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1dHRvbkVudGVyLWRhdGEtdi1mNjBjMmMyZSB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBidXR0b25FbnRlci1kYXRhLXYtZjYwYzJjMmUge1xcbjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBidXR0b25MZWF2ZS1kYXRhLXYtZjYwYzJjMmUge1xcbjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgYnV0dG9uTGVhdmUtZGF0YS12LWY2MGMyYzJlIHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL2NybS9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUFBO0VBQ0UsZ0NBQWdDO0NBQUU7QUFFcEM7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQTBCO1VBQTFCLDBCQUEwQjtDQUFFO0FBRTlCO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7Q0FBRTtBQUVsQjtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7Q0FBRTtBQUVmO0VBQ0UseUJBQXdCO01BQXhCLHNCQUF3QjtVQUF4Qix3QkFBd0I7Q0FBRTtBQUU1QjtFQUNFLHlCQUF3QjtNQUF4QixzQkFBd0I7VUFBeEIsd0JBQXdCO0NBQUU7QUFFNUI7RUFDRSx3RkFBZ0U7VUFBaEUsZ0ZBQWdFO0NBQUU7QUFFcEU7RUFDRSwyRkFBbUU7VUFBbkUsbUZBQW1FO0NBQUU7QUFFdkU7QUFDRTtJQUNFLFdBQVc7Q0FBRTtBQUNmO0lBQ0UsV0FBVztDQUFFO0NBQUU7QUFKbkI7QUFDRTtJQUNFLFdBQVc7Q0FBRTtBQUNmO0lBQ0UsV0FBVztDQUFFO0NBQUU7QUFFbkI7QUFDRTtJQUNFLFdBQVc7Q0FBRTtBQUNmO0lBQ0UsV0FBVztDQUFFO0NBQUU7QUFKbkI7QUFDRTtJQUNFLFdBQVc7Q0FBRTtBQUNmO0lBQ0UsV0FBVztDQUFFO0NBQUU7QUFFbkI7QUFDRTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7Q0FBRTtBQUN4QjtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7Q0FBRTtDQUFFO0FBSjVCO0FBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0NBQUU7QUFDeEI7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0NBQUU7Q0FBRTtBQUU1QjtBQUNFO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtDQUFFO0FBQ3hCO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtDQUFFO0NBQUU7QUFKNUI7QUFDRTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7Q0FBRTtBQUN4QjtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7Q0FBRTtDQUFFXCIsXCJmaWxlXCI6XCJzdHlsZXMuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYnRuIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG5saSB7XFxuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDsgfVxcblxcbi50YWJsZV9fYnV0dG9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC01MHB4OyB9XFxuXFxuLmRpYWxvZ19fYWN0aXZhdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTMwcHg7XFxuICBsZWZ0OiA0MHB4O1xcbiAgei1pbmRleDogMTsgfVxcblxcbi5jYXJkX190aXRsZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5jYXJkX19hY3Rpb25zIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmJ1dHRvbkVudGVyIHtcXG4gIGFuaW1hdGlvbjogYnV0dG9uRW50ZXIgMC4zcyBjdWJpYy1iZXppZXIoMC4wOSwgMC45LCAwLjQ4LCAxLjY0KTsgfVxcblxcbi5idXR0b25MZWF2ZSB7XFxuICBhbmltYXRpb246IGJ1dHRvbkxlYXZlIDAuM3MgY3ViaWMtYmV6aWVyKDAuNTIsIC0wLjQ0LCAwLjg4LCAtMC40NSk7IH1cXG5cXG5Aa2V5ZnJhbWVzIHJvdXRlckVudGVyIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgcm91dGVyTGVhdmUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfSB9XFxuXFxuQGtleWZyYW1lcyBidXR0b25FbnRlciB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7IH0gfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1mNjBjMmMyZVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvc3R5bGVzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDIzIiwiaW1wb3J0IHsgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xyXG5pbXBvcnQgT3JnYW5pemF0aW9uIGZyb20gJ34vbWl4aW5zL09yZ2FuaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbWlkZGxld2FyZTogWydhdXRoJywgJ29yZ2FuaXNhdGlvbiddLFxyXG4gIG1peGluczogWyBPcmdhbml6YXRpb24gXSxcclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8qINCf0L7QtNGB0LrQsNC30LrQuCDQviDRgNC10LfRg9C70YzRgtCw0YLQtSDRg9C00LDQu9C10L3QuNGPICovXHJcbiAgICAgIHNuYWNrYmFyU2hvdzogZmFsc2UsXHJcbiAgICAgIHNuYWNrYmFyVGltZW91dDogMTAwMDAsXHJcbiAgICAgIC8vINCf0L7QuNGB0LogLyDQktGL0LHQvtGA0LrQsFxyXG4gICAgICBzZWxlY3RlZDogW10sXHJcbiAgICAgIC8vINCj0LTQsNC70LXQvdC40LVcclxuICAgICAgZGVsTW9kZTogJ3NpbmdsZScsXHJcbiAgICAgIC8vINCX0LDQs9C+0LvQvtCy0LrQuCDRgtCw0LHQu9C40YbRi1xyXG4gICAgICBoZWFkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ9CY0LzRjycsXHJcbiAgICAgICAgICB2YWx1ZTogJ2ZpcnN0X25hbWUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0KTQsNC80LjQu9C40Y8nLFxyXG4gICAgICAgICAgdmFsdWU6ICdsYXN0X25hbWUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0JTQvtC70LbQvdC+0YHRgtGMJyxcclxuICAgICAgICAgIHZhbHVlOiAncG9zaXRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0J/QvtC00YDQsNC30LTQtdC70LXQvdC40LUnLFxyXG4gICAgICAgICAgdmFsdWU6ICdkZXBhcnRtZW50J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBpdGVtcygpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICB0aGlzLmVtcGxveWVlcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBkYXRhLnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGVsLmlkLFxyXG4gICAgICAgICAgZmlyc3RfbmFtZTogZWwuZmlyc3RfbmFtZSxcclxuICAgICAgICAgIGxhc3RfbmFtZTogZWwubGFzdF9uYW1lIHx8ICfQndC10YIg0LTQsNC90L3Ri9GFJyxcclxuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLl9nZXRQb3NpdGlvbihlbC5wb3NpdGlvbl9pZCkudGl0bGUgfHwgJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnLFxyXG4gICAgICAgICAgZGVwYXJ0bWVudDogdGhpcy5fZ2V0RGVwYXJ0bWVudChlbC5wb3NpdGlvbl9pZCkudGl0bGUgfHwgJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZU1zZygpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLnNlbGVjdGVkLmxlbmd0aCA9PT0gMSkgPyB0aGlzLiR0KCdkZWxldGVfaXRlbV9jb25maXJtJykgOlxyXG4gICAgICAgIHRoaXMuJHQoJ2RlbGV0ZV9pdGVtc19jb25maXJtJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBfZ2V0UG9zaXRpb24ocG9zaXRpb25faWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25zLmZpbmQoZWwgPT4gK2VsLmlkID09PSArcG9zaXRpb25faWQpIHx8IHt9O1xyXG4gICAgfSxcclxuICAgIF9nZXREZXBhcnRtZW50KHBvc2l0aW9uX2lkKSB7XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5fZ2V0UG9zaXRpb24ocG9zaXRpb25faWQpO1xyXG4gICAgICByZXR1cm4gdGhpcy5kZXBhcnRtZW50cy5maW5kKGVsID0+ICtlbC5pZCA9PT0gK3Bvc2l0aW9uLmRlcGFydG1lbnRfaWQpIHx8IHt9O1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog0J7RgtC60YDRi9GC0Ywg0LTQuNCw0LvQvtCzINGD0LTQsNC70LXQvdC40Y8g0YHQvtGC0YDRg9C00L3QuNC60LBcclxuICAgICAqIEBwYXJhbSBpdGVtXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZURpYWxvZyhpdGVtKSB7XHJcbiAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqINCj0LTQsNC70LXQvdC40LUg0YHQvtGC0YDRg9C00L3QuNC60LBcclxuICAgICAqL1xyXG4gICAgZGVsZXRlQ29uZmlybSgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZC5mb3JFYWNoKGVsID0+IHRoaXMuZGVsZXRlSXRlbShlbC5pZCkpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkID0gW107XHJcbiAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqINCe0YLQvNC10L3QsCDRg9C00LDQu9C10L3QuNGPXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZUNhbmNlbCgpIHtcclxuICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICAuLi5tYXBBY3Rpb25zKHtcclxuICAgICAgZGVsZXRlSXRlbTogJ2VtcGxveWVlcy9yZW1vdmUnXHJcbiAgICB9KVxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvT3JnYW5pemF0aW9uL0VtcGxveWVlcy9zY3JpcHRzLmpzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kZWxldGVXaW5kb3csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kZWxldGVXaW5kb3cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRlbGV0ZVdpbmRvd1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcImF0dGVudGlvblwiKSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtZmxleFwiLCB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRlbGV0ZU1zZykpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVDb25maXJtKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJlcnJvclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNhbmNlbCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjYW5jZWxcIikpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiZW1wbG95ZWVzXCIpKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwic2VhcmNoX2lucHV0XCIpLFxuICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZGF0YS10YWJsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0LWFsbFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgIFwibm8tcmVzdWx0cy10ZXh0XCI6IF92bS4kdChcIm5vX21hdGNoX2ZvdW5kXCIpLFxuICAgICAgICAgICAgICAgIFwicm93cy1wZXItcGFnZS10ZXh0XCI6IF92bS4kdChcInN0cmluZ3NcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwcmltYXJ5OiBcIlwiLCBcImhpZGUtZGV0YWlsc1wiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQocHJvcHMsIFwic2VsZWN0ZWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvcHMuc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5maXJzdF9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5sYXN0X25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLnBvc2l0aW9uKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5kZXBhcnRtZW50KSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogcHJvcHMuaXRlbS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImRldGFpbHNcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgIHsgc2xvdDogXCJuby1kYXRhXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IHRydWUsIGNvbG9yOiBcInJlZFwiLCBpY29uOiBcIndhcm5pbmdcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAg0J3QtdGCINC00LDQvdC90YvRhSA6KFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlX19idXR0b25zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogXCJlbXBsb3llZUNyZWF0ZVwiIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGRhcms6IFwiXCIgfSB9LCBbX3ZtLl92KFwiYWRkXCIpXSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJidXR0b25FbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcImJ1dHRvbkxlYXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IFwib3V0LWluXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWQubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZWxldGUtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmFiOiBcIlwiLCBsYXJnZTogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVEaWFsb2coX3ZtLnNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJkZWxldGVcIildKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtc25hY2tiYXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBfdm0uc25hY2tiYXJUaW1lb3V0LFxuICAgICAgICAgICAgICAgIHRvcDogXCJcIixcbiAgICAgICAgICAgICAgICBcIm11bHRpLWxpbmVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNuYWNrYmFyU2hvdyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc25hY2tiYXJTaG93ID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNuYWNrYmFyU2hvd1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChcImRlbGV0ZV9kb25lXCIpKSArIFwiXFxuICAgICAgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicGlua1wiIH0sXG4gICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNuYWNrYmFyU2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtZjYwYzJjMmVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWY2MGMyYzJlXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAyNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAyMyJdLCJzb3VyY2VSb290IjoiIn0=