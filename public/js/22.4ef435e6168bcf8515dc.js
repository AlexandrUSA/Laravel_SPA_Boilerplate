webpackJsonp([22],{

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(241)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(243)
/* template */
var __vue_template__ = __webpack_require__(244)
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

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
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

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.btn[data-v-f60c2c2e] {\n  text-transform: none !important;\n}\nli[data-v-f60c2c2e] {\n  margin: 5px !important;\n  -webkit-box-shadow: 0 0 15px #000;\n          box-shadow: 0 0 15px #000;\n}\n.table__buttons[data-v-f60c2c2e] {\n  position: absolute;\n  bottom: -50px;\n}\n.dialog__activator[data-v-f60c2c2e] {\n  position: absolute;\n  bottom: -30px;\n  left: 40px;\n  z-index: 1;\n}\n.card__title[data-v-f60c2c2e] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.card__actions[data-v-f60c2c2e] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.buttonEnter[data-v-f60c2c2e] {\n  -webkit-animation: buttonEnter-data-v-f60c2c2e 0.3s cubic-bezier(0.09, 0.9, 0.48, 1.64);\n          animation: buttonEnter-data-v-f60c2c2e 0.3s cubic-bezier(0.09, 0.9, 0.48, 1.64);\n}\n.buttonLeave[data-v-f60c2c2e] {\n  -webkit-animation: buttonLeave-data-v-f60c2c2e 0.3s cubic-bezier(0.52, -0.44, 0.88, -0.45);\n          animation: buttonLeave-data-v-f60c2c2e 0.3s cubic-bezier(0.52, -0.44, 0.88, -0.45);\n}\n@-webkit-keyframes routerEnter-data-v-f60c2c2e {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes routerEnter-data-v-f60c2c2e {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@-webkit-keyframes routerLeave-data-v-f60c2c2e {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes routerLeave-data-v-f60c2c2e {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@-webkit-keyframes buttonEnter-data-v-f60c2c2e {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes buttonEnter-data-v-f60c2c2e {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@-webkit-keyframes buttonLeave-data-v-f60c2c2e {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n}\n@keyframes buttonLeave-data-v-f60c2c2e {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/Organization/Employees/styles.scss"],"names":[],"mappings":";AAAA;EACE,gCAAgC;CAAE;AAEpC;EACE,uBAAuB;EACvB,kCAA0B;UAA1B,0BAA0B;CAAE;AAE9B;EACE,mBAAmB;EACnB,cAAc;CAAE;AAElB;EACE,mBAAmB;EACnB,cAAc;EACd,WAAW;EACX,WAAW;CAAE;AAEf;EACE,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;CAAE;AAE5B;EACE,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;CAAE;AAE5B;EACE,wFAAgE;UAAhE,gFAAgE;CAAE;AAEpE;EACE,2FAAmE;UAAnE,mFAAmE;CAAE;AAEvE;AACE;IACE,WAAW;CAAE;AACf;IACE,WAAW;CAAE;CAAE;AAJnB;AACE;IACE,WAAW;CAAE;AACf;IACE,WAAW;CAAE;CAAE;AAEnB;AACE;IACE,WAAW;CAAE;AACf;IACE,WAAW;CAAE;CAAE;AAJnB;AACE;IACE,WAAW;CAAE;AACf;IACE,WAAW;CAAE;CAAE;AAEnB;AACE;IACE,4BAAoB;YAApB,oBAAoB;CAAE;AACxB;IACE,4BAAoB;YAApB,oBAAoB;CAAE;CAAE;AAJ5B;AACE;IACE,4BAAoB;YAApB,oBAAoB;CAAE;AACxB;IACE,4BAAoB;YAApB,oBAAoB;CAAE;CAAE;AAE5B;AACE;IACE,4BAAoB;YAApB,oBAAoB;CAAE;AACxB;IACE,4BAAoB;YAApB,oBAAoB;CAAE;CAAE;AAJ5B;AACE;IACE,4BAAoB;YAApB,oBAAoB;CAAE;AACxB;IACE,4BAAoB;YAApB,oBAAoB;CAAE;CAAE","file":"styles.scss","sourcesContent":[".btn {\n  text-transform: none !important; }\n\nli {\n  margin: 5px !important;\n  box-shadow: 0 0 15px #000; }\n\n.table__buttons {\n  position: absolute;\n  bottom: -50px; }\n\n.dialog__activator {\n  position: absolute;\n  bottom: -30px;\n  left: 40px;\n  z-index: 1; }\n\n.card__title {\n  justify-content: center; }\n\n.card__actions {\n  justify-content: center; }\n\n.buttonEnter {\n  animation: buttonEnter 0.3s cubic-bezier(0.09, 0.9, 0.48, 1.64); }\n\n.buttonLeave {\n  animation: buttonLeave 0.3s cubic-bezier(0.52, -0.44, 0.88, -0.45); }\n\n@keyframes routerEnter {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes routerLeave {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes buttonEnter {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes buttonLeave {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["default"] = ({
  middleware: ['auth', 'organisation'],
  props: {
    searchProp: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      /* Подсказки о результате удаления */
      snackbarShow: false,
      snackbarTimeout: 10000,
      // Поиск / Выборка
      search: '',
      selected: [],
      // Удаление
      deleteWindow: false,
      deleteCategory: null,
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

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    employees: 'employees/employees',
    positions: 'positions/positions',
    departments: 'departments/departments'
  }), {
    deleteMsg: function deleteMsg() {
      return this.selected.length === 1 ? this.$t('delete_item_confirm') : this.$t('delete_items_confirm');
    }
  }),
  methods: _extends({
    /**
     * Поиск названия профессии сотрудника
     * @param position_id (Number)
     * @returns {string}
     */
    getPositionName: function getPositionName(position_id) {
      var position = this.positions.find(function (el) {
        return el.id === position_id;
      });
      return position ? position.title : 'Нет данных';
    },

    /**
     * Поиск названия подразделения в котором рабоьает сотрудник
     * @param position_id (Number)
     * @returns {string}
     */
    getDepartmentName: function getDepartmentName(position_id) {
      var position = this.positions.find(function (el) {
        return el.id === position_id;
      });
      if (position) {
        var department = this.departments.find(function (el) {
          return +el.id === +position.department_id;
        });
        return department ? department.title : 'Нет данных';
      }
      return 'Нет данных';
    },

    /**
     * Открыть диалог удаления сотрудника
     * @param item
     */
    deleteDialog: function deleteDialog(item) {
      this.deleteWindow = true;
      this.deleteCategory = item;
    },

    /**
     * Удаление сотрудника
     */
    deleteConfirm: function deleteConfirm() {
      var _this = this;

      this.selected.forEach(function (el) {
        return _this.deleteItem(el.id);
      });
      this.selected = [];
      this.deleteWindow = false;
      this.snackbarShow = true;
    },

    /**
     * Отмена удаления
     */
    deleteCancel: function deleteCancel() {
      this.deleteCategory = null;
      this.deleteWindow = false;
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
    deleteItem: 'employees/remove'
  })),
  created: function created() {
    if (this.searchProp) this.search = this.searchProp;
  }
});

/***/ }),

/***/ 244:
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
                items: _vm.employees,
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
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm.getPositionName(props.item.position_id))
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm.getDepartmentName(props.item.position_id))
                        )
                      ]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvT3JnYW5pemF0aW9uL0VtcGxveWVlcy9zdHlsZXMuc2Nzcz8zNzY3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvT3JnYW5pemF0aW9uL0VtcGxveWVlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvaW5kZXgudnVlPzcxZmQiXSwibmFtZXMiOlsibWlkZGxld2FyZSIsInByb3BzIiwic2VhcmNoUHJvcCIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwiZGF0YSIsInNuYWNrYmFyU2hvdyIsInNuYWNrYmFyVGltZW91dCIsInNlYXJjaCIsInNlbGVjdGVkIiwiZGVsZXRlV2luZG93IiwiZGVsZXRlQ2F0ZWdvcnkiLCJkZWxNb2RlIiwiaGVhZGVycyIsInRleHQiLCJ2YWx1ZSIsInNvcnRhYmxlIiwiY29tcHV0ZWQiLCJtYXBHZXR0ZXJzIiwiZW1wbG95ZWVzIiwicG9zaXRpb25zIiwiZGVwYXJ0bWVudHMiLCJkZWxldGVNc2ciLCJsZW5ndGgiLCIkdCIsIm1ldGhvZHMiLCJnZXRQb3NpdGlvbk5hbWUiLCJwb3NpdGlvbl9pZCIsInBvc2l0aW9uIiwiZmluZCIsImVsIiwiaWQiLCJ0aXRsZSIsImdldERlcGFydG1lbnROYW1lIiwiZGVwYXJ0bWVudCIsImRlcGFydG1lbnRfaWQiLCJkZWxldGVEaWFsb2ciLCJpdGVtIiwiZGVsZXRlQ29uZmlybSIsImZvckVhY2giLCJkZWxldGVJdGVtIiwiZGVsZXRl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QUFXLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwrQkFBK0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBCQUEwQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMjIuNGVmNDM1ZTYxNjhiY2Y4NTE1ZGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY2MGMyYzJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4vc3R5bGVzLnNjc3NcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4vc2NyaXB0cy5qc1wiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjYwYzJjMmVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtZjYwYzJjMmVcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxPcmdhbml6YXRpb25cXFxcRW1wbG95ZWVzXFxcXGluZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1mNjBjMmMyZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWY2MGMyYzJlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAyNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAyMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1mNjBjMmMyZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0ODJmYzlkMFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjYwYzJjMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1mNjBjMmMyZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWY2MGMyYzJlXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvT3JnYW5pemF0aW9uL0VtcGxveWVlcy9zdHlsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMjIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJ0bltkYXRhLXYtZjYwYzJjMmVdIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbmxpW2RhdGEtdi1mNjBjMmMyZV0ge1xcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXG59XFxuLnRhYmxlX19idXR0b25zW2RhdGEtdi1mNjBjMmMyZV0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtNTBweDtcXG59XFxuLmRpYWxvZ19fYWN0aXZhdG9yW2RhdGEtdi1mNjBjMmMyZV0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMzBweDtcXG4gIGxlZnQ6IDQwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uY2FyZF9fdGl0bGVbZGF0YS12LWY2MGMyYzJlXSB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNhcmRfX2FjdGlvbnNbZGF0YS12LWY2MGMyYzJlXSB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmJ1dHRvbkVudGVyW2RhdGEtdi1mNjBjMmMyZV0ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1dHRvbkVudGVyLWRhdGEtdi1mNjBjMmMyZSAwLjNzIGN1YmljLWJlemllcigwLjA5LCAwLjksIDAuNDgsIDEuNjQpO1xcbiAgICAgICAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyLWRhdGEtdi1mNjBjMmMyZSAwLjNzIGN1YmljLWJlemllcigwLjA5LCAwLjksIDAuNDgsIDEuNjQpO1xcbn1cXG4uYnV0dG9uTGVhdmVbZGF0YS12LWY2MGMyYzJlXSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYnV0dG9uTGVhdmUtZGF0YS12LWY2MGMyYzJlIDAuM3MgY3ViaWMtYmV6aWVyKDAuNTIsIC0wLjQ0LCAwLjg4LCAtMC40NSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUtZGF0YS12LWY2MGMyYzJlIDAuM3MgY3ViaWMtYmV6aWVyKDAuNTIsIC0wLjQ0LCAwLjg4LCAtMC40NSk7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3V0ZXJFbnRlci1kYXRhLXYtZjYwYzJjMmUge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdXRlckVudGVyLWRhdGEtdi1mNjBjMmMyZSB7XFxuMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3V0ZXJMZWF2ZS1kYXRhLXYtZjYwYzJjMmUge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdXRlckxlYXZlLWRhdGEtdi1mNjBjMmMyZSB7XFxuMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBidXR0b25FbnRlci1kYXRhLXYtZjYwYzJjMmUge1xcbjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgYnV0dG9uRW50ZXItZGF0YS12LWY2MGMyYzJlIHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnV0dG9uTGVhdmUtZGF0YS12LWY2MGMyYzJlIHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlLWRhdGEtdi1mNjBjMmMyZSB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9jcm0vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Pcmdhbml6YXRpb24vRW1wbG95ZWVzL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLGdDQUFnQztDQUFFO0FBRXBDO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUEwQjtVQUExQiwwQkFBMEI7Q0FBRTtBQUU5QjtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0NBQUU7QUFFbEI7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0NBQUU7QUFFZjtFQUNFLHlCQUF3QjtNQUF4QixzQkFBd0I7VUFBeEIsd0JBQXdCO0NBQUU7QUFFNUI7RUFDRSx5QkFBd0I7TUFBeEIsc0JBQXdCO1VBQXhCLHdCQUF3QjtDQUFFO0FBRTVCO0VBQ0Usd0ZBQWdFO1VBQWhFLGdGQUFnRTtDQUFFO0FBRXBFO0VBQ0UsMkZBQW1FO1VBQW5FLG1GQUFtRTtDQUFFO0FBRXZFO0FBQ0U7SUFDRSxXQUFXO0NBQUU7QUFDZjtJQUNFLFdBQVc7Q0FBRTtDQUFFO0FBSm5CO0FBQ0U7SUFDRSxXQUFXO0NBQUU7QUFDZjtJQUNFLFdBQVc7Q0FBRTtDQUFFO0FBRW5CO0FBQ0U7SUFDRSxXQUFXO0NBQUU7QUFDZjtJQUNFLFdBQVc7Q0FBRTtDQUFFO0FBSm5CO0FBQ0U7SUFDRSxXQUFXO0NBQUU7QUFDZjtJQUNFLFdBQVc7Q0FBRTtDQUFFO0FBRW5CO0FBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0NBQUU7QUFDeEI7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0NBQUU7Q0FBRTtBQUo1QjtBQUNFO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtDQUFFO0FBQ3hCO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtDQUFFO0NBQUU7QUFFNUI7QUFDRTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7Q0FBRTtBQUN4QjtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7Q0FBRTtDQUFFO0FBSjVCO0FBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0NBQUU7QUFDeEI7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0NBQUU7Q0FBRVwiLFwiZmlsZVwiOlwic3R5bGVzLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ0biB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxubGkge1xcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4ICMwMDA7IH1cXG5cXG4udGFibGVfX2J1dHRvbnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtNTBweDsgfVxcblxcbi5kaWFsb2dfX2FjdGl2YXRvciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0zMHB4O1xcbiAgbGVmdDogNDBweDtcXG4gIHotaW5kZXg6IDE7IH1cXG5cXG4uY2FyZF9fdGl0bGUge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uY2FyZF9fYWN0aW9ucyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5idXR0b25FbnRlciB7XFxuICBhbmltYXRpb246IGJ1dHRvbkVudGVyIDAuM3MgY3ViaWMtYmV6aWVyKDAuMDksIDAuOSwgMC40OCwgMS42NCk7IH1cXG5cXG4uYnV0dG9uTGVhdmUge1xcbiAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZSAwLjNzIGN1YmljLWJlemllcigwLjUyLCAtMC40NCwgMC44OCwgLTAuNDUpOyB9XFxuXFxuQGtleWZyYW1lcyByb3V0ZXJFbnRlciB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHJvdXRlckxlYXZlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgYnV0dG9uRW50ZXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBidXR0b25MZWF2ZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApOyB9IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZjYwYzJjMmVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Pcmdhbml6YXRpb24vRW1wbG95ZWVzL3N0eWxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAyMiIsImltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBtaWRkbGV3YXJlOiBbJ2F1dGgnLCAnb3JnYW5pc2F0aW9uJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIHNlYXJjaFByb3A6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAvKiDQn9C+0LTRgdC60LDQt9C60Lgg0L4g0YDQtdC30YPQu9GM0YLQsNGC0LUg0YPQtNCw0LvQtdC90LjRjyAqL1xyXG4gICAgICBzbmFja2JhclNob3c6IGZhbHNlLFxyXG4gICAgICBzbmFja2JhclRpbWVvdXQ6IDEwMDAwLFxyXG4gICAgICAvLyDQn9C+0LjRgdC6IC8g0JLRi9Cx0L7RgNC60LBcclxuICAgICAgc2VhcmNoOiAnJyxcclxuICAgICAgc2VsZWN0ZWQ6IFtdLFxyXG4gICAgICAvLyDQo9C00LDQu9C10L3QuNC1XHJcbiAgICAgIGRlbGV0ZVdpbmRvdzogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZUNhdGVnb3J5OiBudWxsLFxyXG4gICAgICBkZWxNb2RlOiAnc2luZ2xlJyxcclxuICAgICAgLy8g0JfQsNCz0L7Qu9C+0LLQutC4INGC0LDQsdC70LjRhtGLXHJcbiAgICAgIGhlYWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0JjQvNGPJyxcclxuICAgICAgICAgIHZhbHVlOiAnZmlyc3RfbmFtZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICfQpNCw0LzQuNC70LjRjycsXHJcbiAgICAgICAgICB2YWx1ZTogJ2xhc3RfbmFtZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICfQlNC+0LvQttC90L7RgdGC0YwnLFxyXG4gICAgICAgICAgdmFsdWU6ICdwb3NpdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICfQn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtScsXHJcbiAgICAgICAgICB2YWx1ZTogJ2RlcGFydG1lbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICBlbXBsb3llZXM6ICdlbXBsb3llZXMvZW1wbG95ZWVzJyxcclxuICAgICAgcG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXHJcbiAgICAgIGRlcGFydG1lbnRzOiAnZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMnXHJcbiAgICB9KSxcclxuICAgIGRlbGV0ZU1zZygpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLnNlbGVjdGVkLmxlbmd0aCA9PT0gMSkgPyB0aGlzLiR0KCdkZWxldGVfaXRlbV9jb25maXJtJykgOlxyXG4gICAgICAgIHRoaXMuJHQoJ2RlbGV0ZV9pdGVtc19jb25maXJtJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvKipcclxuICAgICAqINCf0L7QuNGB0Log0L3QsNC30LLQsNC90LjRjyDQv9GA0L7RhNC10YHRgdC40Lgg0YHQvtGC0YDRg9C00L3QuNC60LBcclxuICAgICAqIEBwYXJhbSBwb3NpdGlvbl9pZCAoTnVtYmVyKVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0UG9zaXRpb25OYW1lKHBvc2l0aW9uX2lkKSB7XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbnMuZmluZChlbCA9PiBlbC5pZCA9PT0gcG9zaXRpb25faWQpO1xyXG4gICAgICByZXR1cm4gKHBvc2l0aW9uKSA/IHBvc2l0aW9uLnRpdGxlIDogJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog0J/QvtC40YHQuiDQvdCw0LfQstCw0L3QuNGPINC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNGPINCyINC60L7RgtC+0YDQvtC8INGA0LDQsdC+0YzQsNC10YIg0YHQvtGC0YDRg9C00L3QuNC6XHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25faWQgKE51bWJlcilcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGdldERlcGFydG1lbnROYW1lKHBvc2l0aW9uX2lkKSB7XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbnMuZmluZChlbCA9PiBlbC5pZCA9PT0gcG9zaXRpb25faWQpO1xyXG4gICAgICBpZiAocG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCBkZXBhcnRtZW50ID0gdGhpcy5kZXBhcnRtZW50cy5maW5kKGVsID0+ICtlbC5pZCA9PT0gK3Bvc2l0aW9uLmRlcGFydG1lbnRfaWQpO1xyXG4gICAgICAgIHJldHVybiAoZGVwYXJ0bWVudCkgPyBkZXBhcnRtZW50LnRpdGxlIDogJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAn0J3QtdGCINC00LDQvdC90YvRhSc7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0LrRgNGL0YLRjCDQtNC40LDQu9C+0LMg0YPQtNCw0LvQtdC90LjRjyDRgdC+0YLRgNGD0LTQvdC40LrQsFxyXG4gICAgICogQHBhcmFtIGl0ZW1cclxuICAgICAqL1xyXG4gICAgZGVsZXRlRGlhbG9nKGl0ZW0pIHtcclxuICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSB0cnVlO1xyXG4gICAgICB0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gaXRlbTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqINCj0LTQsNC70LXQvdC40LUg0YHQvtGC0YDRg9C00L3QuNC60LBcclxuICAgICAqL1xyXG4gICAgZGVsZXRlQ29uZmlybSgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZC5mb3JFYWNoKGVsID0+IHRoaXMuZGVsZXRlSXRlbShlbC5pZCkpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkID0gW107XHJcbiAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqINCe0YLQvNC10L3QsCDRg9C00LDQu9C10L3QuNGPXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZUNhbmNlbCgpIHtcclxuICAgICAgdGhpcy5kZWxldGVDYXRlZ29yeSA9IG51bGw7XHJcbiAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgLi4ubWFwQWN0aW9ucyh7XHJcbiAgICAgIGRlbGV0ZUl0ZW06ICdlbXBsb3llZXMvcmVtb3ZlJ1xyXG4gICAgfSlcclxuICB9LFxyXG4gIGNyZWF0ZWQgKCkge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoUHJvcCkgdGhpcy5zZWFyY2ggPSB0aGlzLnNlYXJjaFByb3BcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvc2NyaXB0cy5qcyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI1MDBweFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVsZXRlV2luZG93LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGVsZXRlV2luZG93ID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkZWxldGVXaW5kb3dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJhdHRlbnRpb25cIikpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWZsZXhcIiwgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kZWxldGVNc2cpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJpbmZvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlQ29uZmlybSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJva1wiKSkpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiZXJyb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVDYW5jZWwoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiY2FuY2VsXCIpKSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZC10aXRsZVwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImVtcGxveWVlc1wiKSkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJhcHBlbmQtaWNvblwiOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInNlYXJjaF9pbnB1dFwiKSxcbiAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWxpbmVcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWRhdGEtdGFibGVcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWxldmF0aW9uLTFcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBfdm0uaGVhZGVycyxcbiAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmVtcGxveWVlcyxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3QtYWxsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtLWtleVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgXCJuby1yZXN1bHRzLXRleHRcIjogX3ZtLiR0KFwibm9fbWF0Y2hfZm91bmRcIiksXG4gICAgICAgICAgICAgICAgXCJyb3dzLXBlci1wYWdlLXRleHRcIjogX3ZtLiR0KFwic3RyaW5nc1wiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbXNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHByaW1hcnk6IFwiXCIsIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChwcm9wcywgXCJzZWxlY3RlZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9wcy5zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmZpcnN0X25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmxhc3RfbmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRQb3NpdGlvbk5hbWUocHJvcHMuaXRlbS5wb3NpdGlvbl9pZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXREZXBhcnRtZW50TmFtZShwcm9wcy5pdGVtLnBvc2l0aW9uX2lkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogcHJvcHMuaXRlbS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImRldGFpbHNcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgIHsgc2xvdDogXCJuby1kYXRhXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IHRydWUsIGNvbG9yOiBcInJlZFwiLCBpY29uOiBcIndhcm5pbmdcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAg0J3QtdGCINC00LDQvdC90YvRhSA6KFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlX19idXR0b25zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogXCJlbXBsb3llZUNyZWF0ZVwiIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGRhcms6IFwiXCIgfSB9LCBbX3ZtLl92KFwiYWRkXCIpXSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJidXR0b25FbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcImJ1dHRvbkxlYXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IFwib3V0LWluXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWQubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZWxldGUtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmFiOiBcIlwiLCBsYXJnZTogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVEaWFsb2coX3ZtLnNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJkZWxldGVcIildKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtc25hY2tiYXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBfdm0uc25hY2tiYXJUaW1lb3V0LFxuICAgICAgICAgICAgICAgIHRvcDogXCJcIixcbiAgICAgICAgICAgICAgICBcIm11bHRpLWxpbmVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNuYWNrYmFyU2hvdyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc25hY2tiYXJTaG93ID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNuYWNrYmFyU2hvd1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChcImRlbGV0ZV9kb25lXCIpKSArIFwiXFxuICAgICAgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicGlua1wiIH0sXG4gICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNuYWNrYmFyU2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtZjYwYzJjMmVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWY2MGMyYzJlXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAyNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAyMiJdLCJzb3VyY2VSb290IjoiIn0=