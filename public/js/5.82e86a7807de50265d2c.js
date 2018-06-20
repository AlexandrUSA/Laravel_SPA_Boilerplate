webpackJsonp([5],{

/***/ 157:
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
var __vue_scopeId__ = "data-v-6b816c8e"
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
Component.options.__file = "resources\\assets\\js\\pages\\Organization\\Positions\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b816c8e", Component.options)
  } else {
    hotAPI.reload("data-v-6b816c8e", Component.options)
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
    if (!this.headers) {
      throw new Error('You must to specify table headers!');
    }
    if (!this.items) {
      throw new Error('You must to specify table items!');
    }
  }
});

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("9725eae6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b816c8e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b816c8e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./styles.scss");
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
exports.push([module.i, "\n#positions[data-v-6b816c8e] {\n  position: relative;\n  max-width: 90%;\n  margin: 10px auto;\n}\n.mb-2.btn[data-v-6b816c8e] {\n  position: absolute;\n  bottom: -50px;\n}\n.card__title.t-head[data-v-6b816c8e] {\n  padding: 0 15px;\n}\nspan[data-v-6b816c8e] {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/Organization/Positions/styles.scss"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,eAAe;EACf,kBAAkB;CAAE;AAEtB;EACE,mBAAmB;EACnB,cAAc;CAAE;AAElB;EACE,gBAAgB;CAAE;AAEpB;EACE,gBAAgB;CAAE","file":"styles.scss","sourcesContent":["#positions {\n  position: relative;\n  max-width: 90%;\n  margin: 10px auto; }\n\n.mb-2.btn {\n  position: absolute;\n  bottom: -50px; }\n\n.card__title.t-head {\n  padding: 0 15px; }\n\nspan {\n  cursor: pointer; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 243:
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
      // Диалог создания новой профессии
      dialog: false,
      deleteDenied: false,
      // Заголовки таблицы
      headers: [{
        text: 'Номер',
        align: 'right',
        sortable: false,
        value: 'id'
      }, { text: 'Наименование', align: 'right', value: 'title' }, { text: 'Подразделение', align: 'right', value: 'department' }, { text: 'Сотрудников', align: 'right', value: 'employees' }, { text: 'Действия', align: 'right', value: 'title', sortable: false }],
      // Изменение профессии
      editedIndex: -1,
      editedItem: {
        id: '',
        title: '',
        department_id: ''
      },
      // Для возврата к дефолтным значениям
      defaultItem: {
        id: '',
        title: '',
        department_id: ''
      }
    };
  },

  computed: {
    items: function items() {
      var _this = this;

      var data = [];
      this.positions.forEach(function (el) {
        data.push({
          id: el.id,
          title: el.title,
          department: _this.getDepartment(el.department_id),
          employees: _this.getPositionEmployees(el.id).length
        });
      });
      return data;
    },
    deleteMsg: function deleteMsg() {
      return this.deleteDenied ? ' За данной должностью закреплены сотрудники. Пожалуйста, распределите их на другие должности прежде чем удалять текущую.' : ' Вы действительно хотите удалить данную должность?';
    },
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'Новая должность' : 'Изменить должность';
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
    add: 'positions/add',
    update: 'positions/edit',
    remove: 'positions/remove'
  }), {
    getDepartment: function getDepartment(department_id) {
      var department = this.departments.find(function (el) {
        return +el.id === +department_id;
      });
      return department ? department.title : 'Нет данных';
    },
    getPositionEmployees: function getPositionEmployees(id) {
      var employees = this.employees.filter(function (el) {
        return +el.position_id === +id;
      });
      return employees ? employees : 'Нет данных';
    },
    editItem: function editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.deleteWindow = true;
      if (this.getPositionEmployees(item.id).length) {
        this.deleteDenied = true;
      } else {
        this.deleteDenied = false;
        this.editedIndex = item.id;
      }
    },
    deleteConfirm: function deleteConfirm() {
      this.remove(this.editedIndex);
      this.deleteWindow = false;
      this.editedIndex = -1;
    },
    close: function close() {
      var _this2 = this;

      this.dialog = false;
      setTimeout(function () {
        _this2.editedItem = Object.assign({}, _this2.defaultItem);
        _this2.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      if (this.editedIndex > -1) {
        this.update(this.editedItem);
      } else {
        this.add(this.editedItem);
      }
      this.close();
    }
  })
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
    { attrs: { id: "positions" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "800px" },
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
            "v-btn",
            {
              staticClass: "mb-2",
              attrs: { slot: "activator", color: "primary", dark: "" },
              slot: "activator"
            },
            [_vm._v("Добавить должность")]
          ),
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [_vm._v("Внимание!")])
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v("\n        " + _vm._s(_vm.deleteMsg) + "\n      ")
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", flat: "" },
                      nativeOn: {
                        click: function($event) {
                          _vm.deleteWindow = !_vm.deleteWindow
                        }
                      }
                    },
                    [_vm._v("Отмена")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.deleteDenied,
                          expression: "!deleteDenied"
                        }
                      ],
                      attrs: { color: "blue darken-1", flat: "" },
                      nativeOn: {
                        click: function($event) {
                          _vm.deleteConfirm($event)
                        }
                      }
                    },
                    [_vm._v("Удалить")]
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
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-btn",
            {
              staticClass: "mb-2",
              attrs: { slot: "activator", color: "primary", dark: "" },
              slot: "activator"
            },
            [_vm._v("Добавить должность")]
          ),
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v(_vm._s(_vm.formTitle))
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    { attrs: { "grid-list-md": "" } },
                    [
                      _c(
                        "v-layout",
                        { attrs: { wrap: "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm6: "" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Наименование" },
                                model: {
                                  value: _vm.editedItem.title,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "title", $$v)
                                  },
                                  expression: "editedItem.title"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm6: "" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  label: _vm.$t("department"),
                                  "prepend-icon": "card_travel",
                                  items: _vm.departments,
                                  "item-text": "title",
                                  "item-value": "id",
                                  rules: [
                                    function(v) {
                                      return !!v || "Выберите подразделение"
                                    }
                                  ],
                                  required: ""
                                },
                                model: {
                                  value: _vm.editedItem.department_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "department_id",
                                      $$v
                                    )
                                  },
                                  expression: "editedItem.department_id"
                                }
                              })
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
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", flat: "" },
                      nativeOn: {
                        click: function($event) {
                          _vm.close($event)
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", flat: "" },
                      nativeOn: {
                        click: function($event) {
                          _vm.save($event)
                        }
                      }
                    },
                    [_vm._v("Save")]
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
            { staticClass: "t-head" },
            [
              _c("h2", [_vm._v(_vm._s(_vm.$t("positions")))]),
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
                "hide-actions": ""
              },
              scopedSlots: _vm._u([
                {
                  key: "items",
                  fn: function(props) {
                    return [
                      _c("td", { staticClass: "text-xs-right" }, [
                        _vm._v(_vm._s(props.item.id))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-xs-right" }, [
                        _vm._v(_vm._s(props.item.title))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-xs-right" }, [
                        _vm._v(_vm._s(props.item.department))
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-xs-right" },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                tag: "span",
                                to: {
                                  name: "employees",
                                  params: {
                                    searchProp: props.item.title
                                  }
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(props.item.employees) +
                                  "\n          "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-xs-right" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "mx-0",
                              attrs: { icon: "" },
                              on: {
                                click: function($event) {
                                  _vm.editItem(props.item)
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { color: "teal" } }, [
                                _vm._v("edit")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "mx-0",
                              attrs: { icon: "" },
                              on: {
                                click: function($event) {
                                  _vm.deleteItem(props.item)
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { color: "pink" } }, [
                                _vm._v("delete")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            },
            [
              _c(
                "template",
                { slot: "no-data" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: { click: function($event) {} }
                    },
                    [_vm._v("Обновить")]
                  )
                ],
                1
              )
            ],
            2
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
    require("vue-hot-reload-api")      .rerender("data-v-6b816c8e", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9Qb3NpdGlvbnMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL09yZ2FuaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9Qb3NpdGlvbnMvc3R5bGVzLnNjc3M/ZTk4NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9Qb3NpdGlvbnMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Pcmdhbml6YXRpb24vUG9zaXRpb25zL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Pcmdhbml6YXRpb24vUG9zaXRpb25zL2luZGV4LnZ1ZT9hNzM2Il0sIm5hbWVzIjpbInByb3BzIiwic2VhcmNoUHJvcCIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwiZGF0YSIsInNlYXJjaCIsImRlbGV0ZVdpbmRvdyIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsInBvc2l0aW9ucyIsImRlcGFydG1lbnRzIiwiZW1wbG95ZWVzIiwiY3JlYXRlZCIsImhlYWRlcnMiLCJFcnJvciIsIml0ZW1zIiwibWlkZGxld2FyZSIsIm1peGlucyIsImRpYWxvZyIsImRlbGV0ZURlbmllZCIsInRleHQiLCJhbGlnbiIsInNvcnRhYmxlIiwidmFsdWUiLCJlZGl0ZWRJbmRleCIsImVkaXRlZEl0ZW0iLCJpZCIsInRpdGxlIiwiZGVwYXJ0bWVudF9pZCIsImRlZmF1bHRJdGVtIiwiZm9yRWFjaCIsInB1c2giLCJlbCIsImRlcGFydG1lbnQiLCJnZXREZXBhcnRtZW50IiwiZ2V0UG9zaXRpb25FbXBsb3llZXMiLCJsZW5ndGgiLCJkZWxldGVNc2ciLCJmb3JtVGl0bGUiLCJ3YXRjaCIsInZhbCIsImNsb3NlIiwibWV0aG9kcyIsIm1hcEFjdGlvbnMiLCJhZGQiLCJ1cGRhdGUiLCJyZW1vdmUiLCJmaW5kIiwiZmlsdGVyIiwicG9zaXRpb25faWQiLCJlZGl0SXRlbSIsIml0ZW0iLCJpbmRleE9mIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVsZXRlSXRlbSIsImRlbGV0ZUNvbmZpcm0iLCJzZXRUaW1lb3V0Iiwic2F2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7O0FDNUNBOztBQUVBLHlEQUFlO0FBQ2JBLFNBQU87QUFDTEMsZ0JBQVk7QUFDVkMsWUFBTUMsTUFESTtBQUVWQyxlQUFTO0FBRkM7QUFEUCxHQURNO0FBT2JDLE1BUGEsa0JBT0w7QUFDTixXQUFPO0FBQ0w7QUFDQUMsY0FBUSxFQUZIO0FBR0w7QUFDQUMsb0JBQWM7QUFKVCxLQUFQO0FBTUQsR0FkWTs7QUFlYkMseUJBQ0ssZ0VBQUFDLENBQVc7QUFDWkMsZUFBVyxxQkFEQztBQUVaQyxpQkFBYSx5QkFGRDtBQUdaQyxlQUFXO0FBSEMsR0FBWCxDQURMLENBZmE7QUFzQmJDLFNBdEJhLHFCQXNCRjtBQUNULFFBQUcsQ0FBQyxLQUFLQyxPQUFULEVBQWtCO0FBQ2hCLFlBQU0sSUFBSUMsS0FBSixDQUFVLG9DQUFWLENBQU47QUFDRDtBQUNELFFBQUcsQ0FBQyxLQUFLQyxLQUFULEVBQWdCO0FBQ2QsWUFBTSxJQUFJRCxL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QUF5QiwrQkFBK0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxXQUFXO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw0Q0FBNEMsU0FBUyxnQkFBZ0IsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxXQUFXO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw0Q0FBNEMsU0FBUyxnQkFBZ0IsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtQkFBbUI7QUFDakQsMkJBQTJCLDJCQUEyQjtBQUN0RCxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy81LjgyZTg2YTc4MDdkZTUwMjY1ZDJjLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02YjgxNmM4ZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuL3N0eWxlcy5zY3NzXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuL3NjcmlwdHMuanNcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTZiODE2YzhlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTZiODE2YzhlXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcT3JnYW5pemF0aW9uXFxcXFBvc2l0aW9uc1xcXFxpbmRleC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmI4MTZjOGVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02YjgxNmM4ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Pcmdhbml6YXRpb24vUG9zaXRpb25zL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTU3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgc2VhcmNoUHJvcDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8vINCf0L7QuNGB0LrQvtCy0LDRjyDRgdGC0YDQvtC60LBcclxuICAgICAgc2VhcmNoOiAnJyxcclxuICAgICAgLy8g0KPQtNCw0LvQtdC90LjQtVxyXG4gICAgICBkZWxldGVXaW5kb3c6IGZhbHNlLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICBwb3NpdGlvbnM6ICdwb3NpdGlvbnMvcG9zaXRpb25zJyxcclxuICAgICAgZGVwYXJ0bWVudHM6ICdkZXBhcnRtZW50cy9kZXBhcnRtZW50cycsXHJcbiAgICAgIGVtcGxveWVlczogJ2VtcGxveWVlcy9lbXBsb3llZXMnXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgY3JlYXRlZCAoKSB7XHJcbiAgICBpZighdGhpcy5oZWFkZXJzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgdG8gc3BlY2lmeSB0YWJsZSBoZWFkZXJzIScpXHJcbiAgICB9XHJcbiAgICBpZighdGhpcy5pdGVtcykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHRvIHNwZWNpZnkgdGFibGUgaXRlbXMhJylcclxuICAgIH1cclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9Pcmdhbml6YXRpb24uanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmI4MTZjOGVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiOTcyNWVhZTZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZiODE2YzhlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmI4MTZjOGVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02YjgxNmM4ZVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9Qb3NpdGlvbnMvc3R5bGVzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI3Bvc2l0aW9uc1tkYXRhLXYtNmI4MTZjOGVdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcbi5tYi0yLmJ0bltkYXRhLXYtNmI4MTZjOGVdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTUwcHg7XFxufVxcbi5jYXJkX190aXRsZS50LWhlYWRbZGF0YS12LTZiODE2YzhlXSB7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxufVxcbnNwYW5bZGF0YS12LTZiODE2YzhlXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvY3JtL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvT3JnYW5pemF0aW9uL1Bvc2l0aW9ucy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtDQUFFO0FBRXRCO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7Q0FBRTtBQUVsQjtFQUNFLGdCQUFnQjtDQUFFO0FBRXBCO0VBQ0UsZ0JBQWdCO0NBQUVcIixcImZpbGVcIjpcInN0eWxlcy5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNwb3NpdGlvbnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDEwcHggYXV0bzsgfVxcblxcbi5tYi0yLmJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC01MHB4OyB9XFxuXFxuLmNhcmRfX3RpdGxlLnQtaGVhZCB7XFxuICBwYWRkaW5nOiAwIDE1cHg7IH1cXG5cXG5zcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02YjgxNmM4ZVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9Qb3NpdGlvbnMvc3R5bGVzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgeyBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XHJcbmltcG9ydCBPcmdhbml6YXRpb24gZnJvbSAnfi9taXhpbnMvT3JnYW5pemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBtaWRkbGV3YXJlOiBbJ2F1dGgnLCAnb3JnYW5pc2F0aW9uJ10sXHJcbiAgbWl4aW5zOiBbIE9yZ2FuaXphdGlvbiBdLFxyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLy8g0JTQuNCw0LvQvtCzINGB0L7Qt9C00LDQvdC40Y8g0L3QvtCy0L7QuSDQv9GA0L7RhNC10YHRgdC40LhcclxuICAgICAgZGlhbG9nOiBmYWxzZSxcclxuICAgICAgZGVsZXRlRGVuaWVkOiBmYWxzZSxcclxuICAgICAgLy8g0JfQsNCz0L7Qu9C+0LLQutC4INGC0LDQsdC70LjRhtGLXHJcbiAgICAgIGhlYWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0J3QvtC80LXRgCcsXHJcbiAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcclxuICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHZhbHVlOiAnaWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7dGV4dDogJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtScsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ3RpdGxlJ30sXHJcbiAgICAgICAge3RleHQ6ICfQn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtScsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ2RlcGFydG1lbnQnfSxcclxuICAgICAgICB7dGV4dDogJ9Ch0L7RgtGA0YPQtNC90LjQutC+0LInLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICdlbXBsb3llZXMnfSxcclxuICAgICAgICB7dGV4dDogJ9CU0LXQudGB0YLQstC40Y8nLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICd0aXRsZScsIHNvcnRhYmxlOiBmYWxzZX1cclxuICAgICAgXSxcclxuICAgICAgLy8g0JjQt9C80LXQvdC10L3QuNC1INC/0YDQvtGE0LXRgdGB0LjQuFxyXG4gICAgICBlZGl0ZWRJbmRleDogLTEsXHJcbiAgICAgIGVkaXRlZEl0ZW06IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIGRlcGFydG1lbnRfaWQ6ICcnLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyDQlNC70Y8g0LLQvtC30LLRgNCw0YLQsCDQuiDQtNC10YTQvtC70YLQvdGL0Lwg0LfQvdCw0YfQtdC90LjRj9C8XHJcbiAgICAgIGRlZmF1bHRJdGVtOiB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBkZXBhcnRtZW50X2lkOiAnJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGl0ZW1zKCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gW107XHJcbiAgICAgIHRoaXMucG9zaXRpb25zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgICBpZDogZWwuaWQsXHJcbiAgICAgICAgICB0aXRsZTogZWwudGl0bGUsXHJcbiAgICAgICAgICBkZXBhcnRtZW50OiB0aGlzLmdldERlcGFydG1lbnQoZWwuZGVwYXJ0bWVudF9pZCksXHJcbiAgICAgICAgICBlbXBsb3llZXM6IHRoaXMuZ2V0UG9zaXRpb25FbXBsb3llZXMoZWwuaWQpLmxlbmd0aFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sXHJcbiAgICBkZWxldGVNc2coKSB7XHJcbiAgICAgIHJldHVybiAodGhpcy5kZWxldGVEZW5pZWQpID8gJyDQl9CwINC00LDQvdC90L7QuSDQtNC+0LvQttC90L7RgdGC0YzRjiDQt9Cw0LrRgNC10L/Qu9C10L3RiyDRgdC+0YLRgNGD0LTQvdC40LrQuC4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINGA0LDRgdC/0YDQtdC00LXQu9C40YLQtSDQuNGFINC90LAg0LTRgNGD0LPQuNC1INC00L7Qu9C20L3QvtGB0YLQuCDQv9GA0LXQttC00LUg0YfQtdC8INGD0LTQsNC70Y/RgtGMINGC0LXQutGD0YnRg9GOLicgOlxyXG4gICAgICAgICcg0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0LTQsNC90L3Rg9GOINC00L7Qu9C20L3QvtGB0YLRjD8nO1xyXG4gICAgfSxcclxuICAgIGZvcm1UaXRsZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZWRpdGVkSW5kZXggPT09IC0xID8gJ9Cd0L7QstCw0Y8g0LTQvtC70LbQvdC+0YHRgtGMJyA6ICfQmNC30LzQtdC90LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjCdcclxuICAgIH1cclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBkaWFsb2codmFsKSB7XHJcbiAgICAgIHZhbCB8fCB0aGlzLmNsb3NlKClcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC4uLm1hcEFjdGlvbnMoe1xyXG4gICAgICBhZGQ6ICdwb3NpdGlvbnMvYWRkJyxcclxuICAgICAgdXBkYXRlOiAncG9zaXRpb25zL2VkaXQnLFxyXG4gICAgICByZW1vdmU6ICdwb3NpdGlvbnMvcmVtb3ZlJ1xyXG4gICAgfSksXHJcbiAgICBnZXREZXBhcnRtZW50KGRlcGFydG1lbnRfaWQpIHtcclxuICAgICAgY29uc3QgZGVwYXJ0bWVudCA9IHRoaXMuZGVwYXJ0bWVudHMuZmluZChlbCA9PiArZWwuaWQgPT09ICtkZXBhcnRtZW50X2lkKTtcclxuICAgICAgcmV0dXJuIChkZXBhcnRtZW50KSA/IGRlcGFydG1lbnQudGl0bGUgOiAn0J3QtdGCINC00LDQvdC90YvRhSc7XHJcbiAgICB9LFxyXG4gICAgZ2V0UG9zaXRpb25FbXBsb3llZXMoaWQpIHtcclxuICAgICAgY29uc3QgZW1wbG95ZWVzID0gdGhpcy5lbXBsb3llZXMuZmlsdGVyKGVsID0+ICtlbC5wb3NpdGlvbl9pZCA9PT0gK2lkKTtcclxuICAgICAgcmV0dXJuIChlbXBsb3llZXMpID8gZW1wbG95ZWVzIDogJ9Cd0LXRgiDQtNCw0L3QvdGL0YUnO1xyXG4gICAgfSxcclxuICAgIGVkaXRJdGVtKGl0ZW0pIHtcclxuICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcclxuICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSk7XHJcbiAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZVxyXG4gICAgfSxcclxuICAgIGRlbGV0ZUl0ZW0oaXRlbSkge1xyXG4gICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XHJcbiAgICAgIGlmICh0aGlzLmdldFBvc2l0aW9uRW1wbG95ZWVzKGl0ZW0uaWQpLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlRGVuaWVkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZURlbmllZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSBpdGVtLmlkO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlQ29uZmlybSgpIHtcclxuICAgICAgdGhpcy5yZW1vdmUodGhpcy5lZGl0ZWRJbmRleCk7XHJcbiAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcclxuICAgIH0sXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSk7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xXHJcbiAgICAgIH0sIDMwMClcclxuICAgIH0sXHJcbiAgICBzYXZlKCkge1xyXG4gICAgICBpZiAodGhpcy5lZGl0ZWRJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGhpcy5lZGl0ZWRJdGVtKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuZWRpdGVkSXRlbSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICB9XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Pcmdhbml6YXRpb24vUG9zaXRpb25zL3NjcmlwdHMuanMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJwb3NpdGlvbnNcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiODAwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRlbGV0ZVdpbmRvdyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVdpbmRvdyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVsZXRlV2luZG93XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImFjdGl2YXRvclwiLCBjb2xvcjogXCJwcmltYXJ5XCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQlNC+0LHQsNCy0LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbX3ZtLl92KFwi0JLQvdC40LzQsNC90LjQtSFcIildKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uZGVsZXRlTXNnKSArIFwiXFxuICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZSBkYXJrZW4tMVwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVdpbmRvdyA9ICFfdm0uZGVsZXRlV2luZG93XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0J7RgtC80LXQvdCwXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uZGVsZXRlRGVuaWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFkZWxldGVEZW5pZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZSBkYXJrZW4tMVwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNvbmZpcm0oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCj0LTQsNC70LjRgtGMXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI1MDBweFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlhbG9nLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGlhbG9nID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiYWN0aXZhdG9yXCIsIGNvbG9yOiBcInByaW1hcnlcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcItCU0L7QsdCw0LLQuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmZvcm1UaXRsZSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZ3JpZC1saXN0LW1kXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgc202OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lZGl0ZWRJdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5lZGl0ZWRJdGVtLCBcInRpdGxlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZWRpdGVkSXRlbS50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBzbTY6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJkZXBhcnRtZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiY2FyZF90cmF2ZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmRlcGFydG1lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhIXYgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lZGl0ZWRJdGVtLmRlcGFydG1lbnRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0ZWRJdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlcGFydG1lbnRfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVkaXRlZEl0ZW0uZGVwYXJ0bWVudF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJibHVlIGRhcmtlbi0xXCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xvc2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImJsdWUgZGFya2VuLTFcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zYXZlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidC1oZWFkXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJwb3NpdGlvbnNcIikpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJzZWFyY2hfaW5wdXRcIiksXG4gICAgICAgICAgICAgICAgICBcInNpbmdsZS1saW5lXCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1kYXRhLXRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0xXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgXCJoaWRlLWFjdGlvbnNcIjogXCJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbXNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmlkKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLnRpdGxlKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmRlcGFydG1lbnQpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtcGxveWVlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUHJvcDogcHJvcHMuaXRlbS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS5lbXBsb3llZXMpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXgtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0SXRlbShwcm9wcy5pdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcInRlYWxcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZWRpdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm14LTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlSXRlbShwcm9wcy5pdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcInBpbmtcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZGVsZXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICB7IHNsb3Q6IFwibm8tZGF0YVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHt9IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCe0LHQvdC+0LLQuNGC0YxcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNmI4MTZjOGVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTZiODE2YzhlXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9Qb3NpdGlvbnMvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAyNDRcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==