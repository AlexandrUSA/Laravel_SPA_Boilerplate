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
    items: function items() {
      var _this = this;

      var data = [];
      this.employees.forEach(function (el) {
        data.push({
          id: el.id,
          first_name: el.first_name,
          last_name: el.last_name,
          position: _this.getPositionName(el.position_id),
          department: _this.getDepartmentName(el.position_id)
        });
      });
      console.log(data);
      return data;
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvT3JnYW5pemF0aW9uL0VtcGxveWVlcy9zdHlsZXMuc2Nzcz8zNzY3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvT3JnYW5pemF0aW9uL0VtcGxveWVlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvaW5kZXgudnVlPzcxZmQiXSwibmFtZXMiOlsibWlkZGxld2FyZSIsInByb3BzIiwic2VhcmNoUHJvcCIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwiZGF0YSIsInNuYWNrYmFyU2hvdyIsInNuYWNrYmFyVGltZW91dCIsInNlYXJjaCIsInNlbGVjdGVkIiwiZGVsZXRlV2luZG93IiwiZGVsZXRlQ2F0ZWdvcnkiLCJkZWxNb2RlIiwiaGVhZGVycyIsInRleHQiLCJ2YWx1ZSIsInNvcnRhYmxlIiwiY29tcHV0ZWQiLCJtYXBHZXR0ZXJzIiwiZW1wbG95ZWVzIiwicG9zaXRpb25zIiwiZGVwYXJ0bWVudHMiLCJpdGVtcyIsImZvckVhY2giLCJwdXNoIiwiaWQiLCJlbCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uTmFtZSIsInBvc2l0aW9uX2lkIiwiZGVwYXJ0bWVudCIsImdldERlcGFydG1lbnROYW1lIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZU1zZyIsImxlbmd0aCIsIiR0IiwibWV0aG9kcyIsImZpbmQiLCJ0aXRsZSIsImRlcGFydG1lbnRfaWQiLCJkZWxldGVEaWFsb2ciLCJpdGVtIiwiZGVsZXRlQ29uZmlybSIsImRlbGV0ZUl0ZW0iLCJkZWxldGVDYW5jZWwiLCJtYXBBY3Rpb25zIiwiY3JlYXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0Esa0VBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLGtEQUFtRCxvQ0FBb0MsR0FBRyx1QkFBdUIsMkJBQTJCLHNDQUFzQyxzQ0FBc0MsR0FBRyxvQ0FBb0MsdUJBQXVCLGtCQUFrQixHQUFHLHVDQUF1Qyx1QkFBdUIsa0JBQWtCLGVBQWUsZUFBZSxHQUFHLGlDQUFpQyw2QkFBNkIsOEJBQThCLG9DQUFvQyxHQUFHLG1DQUFtQyw2QkFBNkIsOEJBQThCLG9DQUFvQyxHQUFHLGlDQUFpQyw0RkFBNEYsNEZBQTRGLEdBQUcsaUNBQWlDLCtGQUErRiwrRkFBK0YsR0FBRyxrREFBa0QsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLGlCQUFpQixHQUFHLEdBQUcsMENBQTBDLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxpQkFBaUIsR0FBRyxHQUFHLGtEQUFrRCxNQUFNLGlCQUFpQixHQUFHLFFBQVEsaUJBQWlCLEdBQUcsR0FBRywwQ0FBMEMsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLGlCQUFpQixHQUFHLEdBQUcsa0RBQWtELE1BQU0sa0NBQWtDLGtDQUFrQyxHQUFHLFFBQVEsa0NBQWtDLGtDQUFrQyxHQUFHLEdBQUcsMENBQTBDLE1BQU0sa0NBQWtDLGtDQUFrQyxHQUFHLFFBQVEsa0NBQWtDLGtDQUFrQyxHQUFHLEdBQUcsa0RBQWtELE1BQU0sa0NBQWtDLGtDQUFrQyxHQUFHLFFBQVEsa0NBQWtDLGtDQUFrQyxHQUFHLEdBQUcsMENBQTBDLE1BQU0sa0NBQWtDLGtDQUFrQyxHQUFHLFFBQVEsa0NBQWtDLGtDQUFrQyxHQUFHLEdBQUcsVUFBVSxzSUFBc0ksS0FBSyxZQUFZLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxLQUFLLE1BQU0sWUFBWSxXQUFXLEtBQUssTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxLQUFLLE1BQU0sWUFBWSxhQUFhLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxLQUFLLE1BQU0sWUFBWSxhQUFhLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLEtBQUssTUFBTSxZQUFZLGFBQWEsS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksYUFBYSxLQUFLLG9EQUFvRCxvQ0FBb0MsRUFBRSxRQUFRLDJCQUEyQiw4QkFBOEIsRUFBRSxxQkFBcUIsdUJBQXVCLGtCQUFrQixFQUFFLHdCQUF3Qix1QkFBdUIsa0JBQWtCLGVBQWUsZUFBZSxFQUFFLGtCQUFrQiw0QkFBNEIsRUFBRSxvQkFBb0IsNEJBQTRCLEVBQUUsa0JBQWtCLG9FQUFvRSxFQUFFLGtCQUFrQix1RUFBdUUsRUFBRSw0QkFBNEIsUUFBUSxpQkFBaUIsRUFBRSxVQUFVLGlCQUFpQixFQUFFLEVBQUUsNEJBQTRCLFFBQVEsaUJBQWlCLEVBQUUsVUFBVSxpQkFBaUIsRUFBRSxFQUFFLDRCQUE0QixRQUFRLDBCQUEwQixFQUFFLFVBQVUsMEJBQTBCLEVBQUUsRUFBRSw0QkFBNEIsUUFBUSwwQkFBMEIsRUFBRSxVQUFVLDBCQUEwQixFQUFFLEVBQUUscUJBQXFCOztBQUU3dkk7Ozs7Ozs7Ozs7Ozs7QUNQQTs7QUFFQSwrREFBZTtBQUNiQSxjQUFZLENBQUMsTUFBRCxFQUFTLGNBQVQsQ0FEQztBQUViQyxTQUFPO0FBQ0xDLGdCQUFZO0FBQ1ZDLFlBQU1DLE1BREk7QUFFVkMsZUFBUztBQUZDO0FBRFAsR0FGTTtBQVFiQyxNQVJhLGtCQVFMO0FBQ04sV0FBTztBQUNMO0FBQ0FDLG9CQUFjLEtBRlQ7QUFHTEMsdUJBQWlCLEtBSFo7QUFJTDtBQUNBQyxjQUFRLEVBTEg7QUFNTEMsZ0JBQVUsRUFOTDtBQU9MO0FBQ0FDLG9CQUFjLEtBUlQ7QUFTTEMsc0JBQWdCLElBVFg7QUFVTEMsZUFBUyxRQVZKO0FBV0w7QUFDQUMsZUFBUyxDQUNQO0FBQ0VDLGNBQU0sS0FEUjtBQUVFQyxlQUFPO0FBRlQsT0FETyxFQUtQO0FBQ0VELGNBQU0sU0FEUjtBQUVFQyxlQUFPO0FBRlQsT0FMTyxFQVNQO0FBQ0VELGNBQU0sV0FEUjtBQUVFQyxlQUFPO0FBRlQsT0FUTyxFQWFQO0FBQ0VELGNBQU0sZUFEUjtBQUVFQyxlQUFPO0FBRlQsT0FiTyxFQWlCUDtBQUNFRCxjQUFNLEVBRFI7QUFFRUUsa0JBQVU7QUFGWixPQWpCTztBQVpKLEtBQVA7QUFtQ0QsR0E1Q1k7O0FBNkNiQyx5QkFDSyxnRUFBQUMsQ0FBVztBQUNaQyxlQUFXLHFCQURDO0FBRVpDLGVBQVcscUJBRkM7QUFHWkMsaUJBQWE7QUFIRCxHQUFYLENBREw7QUFNRUMsU0FORixtQkFNVztBQUFBOztBQUNQLFVBQU1qQixPQUFPLEVBQWI7QUFDQSxXQUFLYyxTQUFMLENBQWVJLE9BQWYsQ0FBdUIsY0FBTTtBQUMzQmxCLGFBQUttQixJQUFMLENBQVU7QUFDUkMsY0FBSUMsR0FBR0QsRUFEQztBQUVSRSxzQkFBWUQsR0FBR0MsVUFGUDtBQUdSQyxxQkFBV0YsR0FBR0UsU0FITjtBQUlSQyxvQkFBVSxNQUFLQyxlQUFMLENBQXFCSixHQUFHSyxXQUF4QixDQUpGO0FBS1JDLHNCQUFZLE1BQUtDLGlCQUFMLENBQXVCUCxHQUFHSyxXQUExQjtBQUxKLFNBQVY7QUFPRCxPQVJEO0FBU0FHLGNBQVFDLEdBQVIsQ0FBWTlCLElBQVo7QUFDQSxhQUFPQSxJQUFQO0FBQ0QsS0FuQkg7QUFvQkUrQixhQXBCRix1QkFvQmM7QUFDVixhQUFRLEtBQUszQixRQUFMLENBQWM0QixNQUFkLEtBQXlCLENBQTFCLEdBQStCLEtBQUtDLEVBQUwsQ0FBUSxxQkFBUixDQUEvQixHQUNMLEtBQUtBLEVBQUwsQ0FBUSxzQkFBUixDQURGO0FBRUQ7QUF2QkgsSUE3Q2E7QUFzRWJDO0FBQ0U7Ozs7O0FBS0FULG1CQU5GLDJCQU1rQkMsV0FObEIsRUFNK0I7QUFDM0IsVUFBTUYsV0FBVyxLQUFLVCxTQUFMLENBQWVvQixJQUFmLENBQW9CO0FBQUEsZUFBTWQsR0FBR0QsRUFBSCxLQUFVTSxXQUFoQjtBQUFBLE9BQXBCLENBQWpCO0FBQ0EsYUFBUUYsUUFBRCxHQUFhQSxTQUFTWSxLQUF0QixHQUE4QixZQUFyQztBQUNELEtBVEg7O0FBVUU7Ozs7O0FBS0FSLHFCQWZGLDZCQWVvQkYsV0FmcEIsRUFlaUM7QUFDN0IsVUFBTUYsV0FBVyxLQUFLVCxTQUFMLENBQWVvQixJQUFmLENBQW9CO0FBQUEsZUFBTWQsR0FBR0QsRUFBSCxLQUFVTSxXQUFoQjtBQUFBLE9BQXBCLENBQWpCO0FBQ0EsVUFBSUYsUUFBSixFQUFjO0FBQ1osWUFBTUcsYUFBYSxLQUFLWCxXQUFMLENBQWlCbUIsSUFBakIsQ0FBc0I7QUFBQSxpQkFBTSxDQUFDZCxHQUFHRCxFQUFKLEtBQVcsQ0FBQ0ksU0FBU2EsYUFBM0I7QUFBQSxTQUF0QixDQUFuQjtBQUNBLGVBQVFWLFVBQUQsR0FBZUEsV0FBV1MsS0FBMUIsR0FBa0MsWUFBekM7QUFDRDtBQUNELGFBQU8sWUFBUDtBQUNELEtBdEJIOztBQXVCRTs7OztBQUlBRSxnQkEzQkYsd0JBMkJlQyxJQTNCZixFQTJCcUI7QUFDakIsV0FBS2xDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxXQUFLQyxjQUFMLEdBQXNCaUMsSUFBdEI7QUFDRCxLQTlCSDs7QUErQkU7OztBQUdBQyxpQkFsQ0YsMkJBa0NrQjtBQUFBOztBQUNkLFdBQUtwQyxRQUFMLENBQWNjLE9BQWQsQ0FBc0I7QUFBQSxlQUFNLE9BQUt1QixVQUFMLENBQWdCcEIsR0FBR0QsRUFBbkIsQ0FBTjtBQUFBLE9BQXRCO0FBQ0EsV0FBS2hCLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsV0FBS0osWUFBTCxHQUFvQixJQUFwQjtBQUNELEtBdkNIOztBQXdDRTs7O0FBR0F5QyxnQkEzQ0YsMEJBMkNpQjtBQUNiLFdBQUtwQyxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsV0FBS0QsWUFBTCxHQUFvQixLQUFwQjtBQUNEO0FBOUNILEtBK0NLLGdFQUFBc0MsQ0FBVztBQUNaRixnQkFBWTtBQURBLEdBQVgsQ0EvQ0wsQ0F0RWE7QUF5SGJHLFNBekhhLHFCQXlIRjtBQUNULFFBQUksS0FBS2hELFVBQVQsRUFBcUIsS0FBS08sTUFBTCxHQUFjLEtBQUtQLFVBQW5CO0FBQ3RCO0FBM0hZLENBQWYsRTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFNBQVMsV0FBVyxFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2QkFBNkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOEJBQThCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGtDQUFrQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLDZDQUE2QyxFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdDQUFnQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxpQkFBaUI7QUFDakIsK0JBQStCLFNBQVMsV0FBVyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0JBQStCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzIyLjI1NGJhZGIwYTMyYTJhY2EyZjQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1mNjBjMmMyZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuL3N0eWxlcy5zY3NzXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuL3NjcmlwdHMuanNcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWY2MGMyYzJlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LWY2MGMyYzJlXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcT3JnYW5pemF0aW9uXFxcXEVtcGxveWVlc1xcXFxpbmRleC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZjYwYzJjMmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1mNjBjMmMyZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Pcmdhbml6YXRpb24vRW1wbG95ZWVzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMjIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjYwYzJjMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNDgyZmM5ZDBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY2MGMyYzJlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjYwYzJjMmVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1mNjBjMmMyZVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9FbXBsb3llZXMvc3R5bGVzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5idG5bZGF0YS12LWY2MGMyYzJlXSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5saVtkYXRhLXYtZjYwYzJjMmVdIHtcXG4gIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxNXB4ICMwMDA7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4ICMwMDA7XFxufVxcbi50YWJsZV9fYnV0dG9uc1tkYXRhLXYtZjYwYzJjMmVdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTUwcHg7XFxufVxcbi5kaWFsb2dfX2FjdGl2YXRvcltkYXRhLXYtZjYwYzJjMmVdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTMwcHg7XFxuICBsZWZ0OiA0MHB4O1xcbiAgei1pbmRleDogMTtcXG59XFxuLmNhcmRfX3RpdGxlW2RhdGEtdi1mNjBjMmMyZV0ge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jYXJkX19hY3Rpb25zW2RhdGEtdi1mNjBjMmMyZV0ge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5idXR0b25FbnRlcltkYXRhLXYtZjYwYzJjMmVdIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidXR0b25FbnRlci1kYXRhLXYtZjYwYzJjMmUgMC4zcyBjdWJpYy1iZXppZXIoMC4wOSwgMC45LCAwLjQ4LCAxLjY0KTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBidXR0b25FbnRlci1kYXRhLXYtZjYwYzJjMmUgMC4zcyBjdWJpYy1iZXppZXIoMC4wOSwgMC45LCAwLjQ4LCAxLjY0KTtcXG59XFxuLmJ1dHRvbkxlYXZlW2RhdGEtdi1mNjBjMmMyZV0ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1dHRvbkxlYXZlLWRhdGEtdi1mNjBjMmMyZSAwLjNzIGN1YmljLWJlemllcigwLjUyLCAtMC40NCwgMC44OCwgLTAuNDUpO1xcbiAgICAgICAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlLWRhdGEtdi1mNjBjMmMyZSAwLjNzIGN1YmljLWJlemllcigwLjUyLCAtMC40NCwgMC44OCwgLTAuNDUpO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm91dGVyRW50ZXItZGF0YS12LWY2MGMyYzJlIHtcXG4wJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbjEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG59XFxuQGtleWZyYW1lcyByb3V0ZXJFbnRlci1kYXRhLXYtZjYwYzJjMmUge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm91dGVyTGVhdmUtZGF0YS12LWY2MGMyYzJlIHtcXG4wJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbjEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuQGtleWZyYW1lcyByb3V0ZXJMZWF2ZS1kYXRhLXYtZjYwYzJjMmUge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnV0dG9uRW50ZXItZGF0YS12LWY2MGMyYzJlIHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGJ1dHRvbkVudGVyLWRhdGEtdi1mNjBjMmMyZSB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1dHRvbkxlYXZlLWRhdGEtdi1mNjBjMmMyZSB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG59XFxuQGtleWZyYW1lcyBidXR0b25MZWF2ZS1kYXRhLXYtZjYwYzJjMmUge1xcbjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvY3JtL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvT3JnYW5pemF0aW9uL0VtcGxveWVlcy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxnQ0FBZ0M7Q0FBRTtBQUVwQztFQUNFLHVCQUF1QjtFQUN2QixrQ0FBMEI7VUFBMUIsMEJBQTBCO0NBQUU7QUFFOUI7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztDQUFFO0FBRWxCO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztDQUFFO0FBRWY7RUFDRSx5QkFBd0I7TUFBeEIsc0JBQXdCO1VBQXhCLHdCQUF3QjtDQUFFO0FBRTVCO0VBQ0UseUJBQXdCO01BQXhCLHNCQUF3QjtVQUF4Qix3QkFBd0I7Q0FBRTtBQUU1QjtFQUNFLHdGQUFnRTtVQUFoRSxnRkFBZ0U7Q0FBRTtBQUVwRTtFQUNFLDJGQUFtRTtVQUFuRSxtRkFBbUU7Q0FBRTtBQUV2RTtBQUNFO0lBQ0UsV0FBVztDQUFFO0FBQ2Y7SUFDRSxXQUFXO0NBQUU7Q0FBRTtBQUpuQjtBQUNFO0lBQ0UsV0FBVztDQUFFO0FBQ2Y7SUFDRSxXQUFXO0NBQUU7Q0FBRTtBQUVuQjtBQUNFO0lBQ0UsV0FBVztDQUFFO0FBQ2Y7SUFDRSxXQUFXO0NBQUU7Q0FBRTtBQUpuQjtBQUNFO0lBQ0UsV0FBVztDQUFFO0FBQ2Y7SUFDRSxXQUFXO0NBQUU7Q0FBRTtBQUVuQjtBQUNFO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtDQUFFO0FBQ3hCO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtDQUFFO0NBQUU7QUFKNUI7QUFDRTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7Q0FBRTtBQUN4QjtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7Q0FBRTtDQUFFO0FBRTVCO0FBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0NBQUU7QUFDeEI7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0NBQUU7Q0FBRTtBQUo1QjtBQUNFO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtDQUFFO0FBQ3hCO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtDQUFFO0NBQUVcIixcImZpbGVcIjpcInN0eWxlcy5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5idG4ge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbmxpIHtcXG4gIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwOyB9XFxuXFxuLnRhYmxlX19idXR0b25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTUwcHg7IH1cXG5cXG4uZGlhbG9nX19hY3RpdmF0b3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMzBweDtcXG4gIGxlZnQ6IDQwcHg7XFxuICB6LWluZGV4OiAxOyB9XFxuXFxuLmNhcmRfX3RpdGxlIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmNhcmRfX2FjdGlvbnMge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uYnV0dG9uRW50ZXIge1xcbiAgYW5pbWF0aW9uOiBidXR0b25FbnRlciAwLjNzIGN1YmljLWJlemllcigwLjA5LCAwLjksIDAuNDgsIDEuNjQpOyB9XFxuXFxuLmJ1dHRvbkxlYXZlIHtcXG4gIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUgMC4zcyBjdWJpYy1iZXppZXIoMC41MiwgLTAuNDQsIDAuODgsIC0wLjQ1KTsgfVxcblxcbkBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxcblxcbkBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfSB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWY2MGMyYzJlXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvT3JnYW5pemF0aW9uL0VtcGxveWVlcy9zdHlsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMjIiLCJpbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbWlkZGxld2FyZTogWydhdXRoJywgJ29yZ2FuaXNhdGlvbiddLFxyXG4gIHByb3BzOiB7XHJcbiAgICBzZWFyY2hQcm9wOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJydcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLyog0J/QvtC00YHQutCw0LfQutC4INC+INGA0LXQt9GD0LvRjNGC0LDRgtC1INGD0LTQsNC70LXQvdC40Y8gKi9cclxuICAgICAgc25hY2tiYXJTaG93OiBmYWxzZSxcclxuICAgICAgc25hY2tiYXJUaW1lb3V0OiAxMDAwMCxcclxuICAgICAgLy8g0J/QvtC40YHQuiAvINCS0YvQsdC+0YDQutCwXHJcbiAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgIHNlbGVjdGVkOiBbXSxcclxuICAgICAgLy8g0KPQtNCw0LvQtdC90LjQtVxyXG4gICAgICBkZWxldGVXaW5kb3c6IGZhbHNlLFxyXG4gICAgICBkZWxldGVDYXRlZ29yeTogbnVsbCxcclxuICAgICAgZGVsTW9kZTogJ3NpbmdsZScsXHJcbiAgICAgIC8vINCX0LDQs9C+0LvQvtCy0LrQuCDRgtCw0LHQu9C40YbRi1xyXG4gICAgICBoZWFkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ9CY0LzRjycsXHJcbiAgICAgICAgICB2YWx1ZTogJ2ZpcnN0X25hbWUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0KTQsNC80LjQu9C40Y8nLFxyXG4gICAgICAgICAgdmFsdWU6ICdsYXN0X25hbWUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0JTQvtC70LbQvdC+0YHRgtGMJyxcclxuICAgICAgICAgIHZhbHVlOiAncG9zaXRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0J/QvtC00YDQsNC30LTQtdC70LXQvdC40LUnLFxyXG4gICAgICAgICAgdmFsdWU6ICdkZXBhcnRtZW50J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgZW1wbG95ZWVzOiAnZW1wbG95ZWVzL2VtcGxveWVlcycsXHJcbiAgICAgIHBvc2l0aW9uczogJ3Bvc2l0aW9ucy9wb3NpdGlvbnMnLFxyXG4gICAgICBkZXBhcnRtZW50czogJ2RlcGFydG1lbnRzL2RlcGFydG1lbnRzJ1xyXG4gICAgfSksXHJcbiAgICBpdGVtcyAoKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgdGhpcy5lbXBsb3llZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZGF0YS5wdXNoKHtcclxuICAgICAgICAgIGlkOiBlbC5pZCxcclxuICAgICAgICAgIGZpcnN0X25hbWU6IGVsLmZpcnN0X25hbWUsXHJcbiAgICAgICAgICBsYXN0X25hbWU6IGVsLmxhc3RfbmFtZSxcclxuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmdldFBvc2l0aW9uTmFtZShlbC5wb3NpdGlvbl9pZCksXHJcbiAgICAgICAgICBkZXBhcnRtZW50OiB0aGlzLmdldERlcGFydG1lbnROYW1lKGVsLnBvc2l0aW9uX2lkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlTXNnKCkge1xyXG4gICAgICByZXR1cm4gKHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09PSAxKSA/IHRoaXMuJHQoJ2RlbGV0ZV9pdGVtX2NvbmZpcm0nKSA6XHJcbiAgICAgICAgdGhpcy4kdCgnZGVsZXRlX2l0ZW1zX2NvbmZpcm0nKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8qKlxyXG4gICAgICog0J/QvtC40YHQuiDQvdCw0LfQstCw0L3QuNGPINC/0YDQvtGE0LXRgdGB0LjQuCDRgdC+0YLRgNGD0LTQvdC40LrQsFxyXG4gICAgICogQHBhcmFtIHBvc2l0aW9uX2lkIChOdW1iZXIpXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRQb3NpdGlvbk5hbWUocG9zaXRpb25faWQpIHtcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9ucy5maW5kKGVsID0+IGVsLmlkID09PSBwb3NpdGlvbl9pZCk7XHJcbiAgICAgIHJldHVybiAocG9zaXRpb24pID8gcG9zaXRpb24udGl0bGUgOiAn0J3QtdGCINC00LDQvdC90YvRhSc7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9C+0LjRgdC6INC90LDQt9Cy0LDQvdC40Y8g0L/QvtC00YDQsNC30LTQtdC70LXQvdC40Y8g0LIg0LrQvtGC0L7RgNC+0Lwg0YDQsNCx0L7RjNCw0LXRgiDRgdC+0YLRgNGD0LTQvdC40LpcclxuICAgICAqIEBwYXJhbSBwb3NpdGlvbl9pZCAoTnVtYmVyKVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0RGVwYXJ0bWVudE5hbWUocG9zaXRpb25faWQpIHtcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9ucy5maW5kKGVsID0+IGVsLmlkID09PSBwb3NpdGlvbl9pZCk7XHJcbiAgICAgIGlmIChwb3NpdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGRlcGFydG1lbnQgPSB0aGlzLmRlcGFydG1lbnRzLmZpbmQoZWwgPT4gK2VsLmlkID09PSArcG9zaXRpb24uZGVwYXJ0bWVudF9pZCk7XHJcbiAgICAgICAgcmV0dXJuIChkZXBhcnRtZW50KSA/IGRlcGFydG1lbnQudGl0bGUgOiAn0J3QtdGCINC00LDQvdC90YvRhSc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICfQndC10YIg0LTQsNC90L3Ri9GFJztcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqINCe0YLQutGA0YvRgtGMINC00LjQsNC70L7QsyDRg9C00LDQu9C10L3QuNGPINGB0L7RgtGA0YPQtNC90LjQutCwXHJcbiAgICAgKiBAcGFyYW0gaXRlbVxyXG4gICAgICovXHJcbiAgICBkZWxldGVEaWFsb2coaXRlbSkge1xyXG4gICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XHJcbiAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBpdGVtO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog0KPQtNCw0LvQtdC90LjQtSDRgdC+0YLRgNGD0LTQvdC40LrQsFxyXG4gICAgICovXHJcbiAgICBkZWxldGVDb25maXJtKCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkLmZvckVhY2goZWwgPT4gdGhpcy5kZWxldGVJdGVtKGVsLmlkKSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zbmFja2JhclNob3cgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog0J7RgtC80LXQvdCwINGD0LTQsNC70LXQvdC40Y9cclxuICAgICAqL1xyXG4gICAgZGVsZXRlQ2FuY2VsKCkge1xyXG4gICAgICB0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gbnVsbDtcclxuICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICAuLi5tYXBBY3Rpb25zKHtcclxuICAgICAgZGVsZXRlSXRlbTogJ2VtcGxveWVlcy9yZW1vdmUnXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgY3JlYXRlZCAoKSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hQcm9wKSB0aGlzLnNlYXJjaCA9IHRoaXMuc2VhcmNoUHJvcFxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvT3JnYW5pemF0aW9uL0VtcGxveWVlcy9zY3JpcHRzLmpzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kZWxldGVXaW5kb3csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kZWxldGVXaW5kb3cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRlbGV0ZVdpbmRvd1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcImF0dGVudGlvblwiKSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtZmxleFwiLCB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRlbGV0ZU1zZykpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVDb25maXJtKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJlcnJvclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNhbmNlbCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjYW5jZWxcIikpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiZW1wbG95ZWVzXCIpKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwic2VhcmNoX2lucHV0XCIpLFxuICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZGF0YS10YWJsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0LWFsbFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgIFwibm8tcmVzdWx0cy10ZXh0XCI6IF92bS4kdChcIm5vX21hdGNoX2ZvdW5kXCIpLFxuICAgICAgICAgICAgICAgIFwicm93cy1wZXItcGFnZS10ZXh0XCI6IF92bS4kdChcInN0cmluZ3NcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwcmltYXJ5OiBcIlwiLCBcImhpZGUtZGV0YWlsc1wiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQocHJvcHMsIFwic2VsZWN0ZWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvcHMuc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5maXJzdF9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5sYXN0X25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0UG9zaXRpb25OYW1lKHByb3BzLml0ZW0ucG9zaXRpb25faWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0RGVwYXJ0bWVudE5hbWUocHJvcHMuaXRlbS5wb3NpdGlvbl9pZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1wbG95ZWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IHByb3BzLml0ZW0uaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJkZXRhaWxzXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZCA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICB7IHNsb3Q6IFwibm8tZGF0YVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiB0cnVlLCBjb2xvcjogXCJyZWRcIiwgaWNvbjogXCJ3YXJuaW5nXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgINCd0LXRgiDQtNCw0L3QvdGL0YUgOihcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWJsZV9fYnV0dG9uc1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBmYWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGxhcmdlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvOiB7IG5hbWU6IFwiZW1wbG95ZWVDcmVhdGVcIiB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBkYXJrOiBcIlwiIH0gfSwgW192bS5fdihcImFkZFwiKV0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZW50ZXItYWN0aXZlLWNsYXNzXCI6IFwiYnV0dG9uRW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogXCJidXR0b25MZWF2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBcIm91dC1pblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZC5sZW5ndGggPiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVsZXRlLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZhYjogXCJcIiwgbGFyZ2U6IFwiXCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlRGlhbG9nKF92bS5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZGVsZXRlXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXNuYWNrYmFyXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGltZW91dDogX3ZtLnNuYWNrYmFyVGltZW91dCxcbiAgICAgICAgICAgICAgICB0b3A6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJtdWx0aS1saW5lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiaW5mb1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zbmFja2JhclNob3csXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNuYWNrYmFyU2hvdyA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzbmFja2JhclNob3dcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0uJHQoXCJkZWxldGVfZG9uZVwiKSkgKyBcIlxcbiAgICAgIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInBpbmtcIiB9LFxuICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5zbmFja2JhclNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJva1wiKSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWY2MGMyYzJlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mNjBjMmMyZVwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Pcmdhbml6YXRpb24vRW1wbG95ZWVzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMjIiXSwic291cmNlUm9vdCI6IiJ9