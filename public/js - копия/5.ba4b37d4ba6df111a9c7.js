webpackJsonp([5],{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(202)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(204)
/* template */
var __vue_template__ = __webpack_require__(205)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2c341918"
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
Component.options.__file = "resources\\assets\\js\\pages\\admin\\positions\\List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c341918", Component.options)
  } else {
    hotAPI.reload("data-v-2c341918", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(203);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("8cba4ebc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c341918\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./List.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c341918\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./List.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n#positions[data-v-2c341918] {\r\n    position: relative;\r\n    max-width: 90%;\r\n    margin: 10px auto;\n}\n.mb-2.btn[data-v-2c341918] {\r\n    position: absolute;\r\n    bottom: -50px;\n}\r\n\r\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/positions/resources/assets/js/pages/admin/positions/List.vue"],"names":[],"mappings":";AA+KA;IACA,mBAAA;IACA,eAAA;IACA,kBAAA;CACA;AAEA;IACA,mBAAA;IACA,cAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n  <div id=\"positions\">\r\n    <v-dialog v-model=\"deleteAlert\" max-width=\"800px\">\r\n      <v-btn color=\"primary\" dark slot=\"activator\" class=\"mb-2\">Добавить должность</v-btn>\r\n      <v-card>\r\n        <v-card-title>\r\n          <span class=\"headline\">Внимание!</span>\r\n        </v-card-title>\r\n        <v-card-text>\r\n          {{ deleteMsg }}\r\n        </v-card-text>\r\n        <v-card-actions>\r\n          <v-spacer></v-spacer>\r\n          <v-btn color=\"blue darken-1\" flat @click.native=\"close\">Отмена</v-btn>\r\n          <v-btn color=\"blue darken-1\" flat @click.native=\"save\">Сохранить</v-btn>\r\n        </v-card-actions>\r\n      </v-card>\r\n    </v-dialog>\r\n    <v-dialog v-model=\"dialog\" max-width=\"500px\">\r\n      <v-btn color=\"primary\" dark slot=\"activator\" class=\"mb-2\">Добавить должность</v-btn>\r\n      <v-card>\r\n        <v-card-title>\r\n          <span class=\"headline\">{{ formTitle }}</span>\r\n        </v-card-title>\r\n        <v-card-text>\r\n          <v-container grid-list-md>\r\n            <v-layout wrap>\r\n              <v-flex xs12 sm6>\r\n                <v-text-field label=\"Наименование\" v-model=\"editedItem.title\"></v-text-field>\r\n              </v-flex>\r\n              <v-flex xs12 sm6>\r\n                <v-select\r\n                  :label=\"$t('position')\"\r\n                  v-model=\"editedItem.department_id\"\r\n                  prepend-icon=\"card_travel\"\r\n                  :items=\"departments\"\r\n                  item-text=\"title\"\r\n                  item-value=\"id\"\r\n                  :rules=\"[v => !!v || 'Выберите подразделение']\"\r\n                  required\r\n                ></v-select>\r\n              </v-flex>\r\n            </v-layout>\r\n          </v-container>\r\n        </v-card-text>\r\n        <v-card-actions>\r\n          <v-spacer></v-spacer>\r\n          <v-btn color=\"blue darken-1\" flat @click.native=\"close\">Cancel</v-btn>\r\n          <v-btn color=\"blue darken-1\" flat @click.native=\"save\">Save</v-btn>\r\n        </v-card-actions>\r\n      </v-card>\r\n    </v-dialog>\r\n    <v-data-table\r\n      :headers=\"headers\"\r\n      :items=\"items\"\r\n      hide-actions\r\n      class=\"elevation-1\"\r\n    >\r\n      <template slot=\"items\" slot-scope=\"props\">\r\n        <td class=\"text-xs-right\">{{ props.item.id }}</td>\r\n        <td class=\"text-xs-right\">{{ props.item.title }}</td>\r\n        <td class=\"text-xs-right\">{{ getDepartmentName(props.item.department_id) }}</td>\r\n        <td class=\"text-xs-right\">{{ getPositionEmployees(props.item.id).length }}</td>\r\n        <td class=\"text-xs-right\">\r\n          <v-btn icon class=\"mx-0\" @click=\"editItem(props.item)\">\r\n            <v-icon color=\"teal\">edit</v-icon>\r\n          </v-btn>\r\n          <v-btn icon class=\"mx-0\" @click=\"deleteItem(props.item)\">\r\n            <v-icon color=\"pink\">delete</v-icon>\r\n          </v-btn>\r\n        </td>\r\n      </template>\r\n      <template slot=\"no-data\">\r\n        <v-btn color=\"primary\" @click=\"\">Обновить</v-btn>\r\n      </template>\r\n    </v-data-table>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import { mapGetters, mapActions } from 'vuex';\r\n\r\n  export default {\r\n    middleware: 'auth',\r\n    data: () => ({\r\n      dialog: false,\r\n      deleteAlert: true,\r\n      deleteAllowed: false,\r\n      headers: [\r\n        {\r\n          text: 'Номер',\r\n          align: 'right',\r\n          sortable: false,\r\n          value: 'id'\r\n        },\r\n        { text: 'Наименование', align: 'right', value: 'title' },\r\n        { text: 'Подразделение', align: 'right', value: 'department' },\r\n        { text: 'Сотрудников', align: 'right', value: 'employees' },\r\n        { text: 'Действия', align: 'right', value: 'title', sortable: false }\r\n      ],\r\n      editedIndex: -1,\r\n      editedItem: {\r\n        id: '',\r\n        title: '',\r\n        department_id: '',\r\n      },\r\n      defaultItem: {\r\n        id: '',\r\n        title: '',\r\n        department_id: '',\r\n      }\r\n    }),\r\n    computed: {\r\n      ...mapGetters({\r\n        items: 'positions/positions',\r\n        departments: 'departments/departments',\r\n        employees: 'employees/employees'\r\n      }),\r\n      deleteMsg() {\r\n        return (deleteAllowed) ? ' За данной должностью закреплены сотрудники. Пожалуйста, распределите их на другие должности прежде чем удалять текущую.' :\r\n                                 ' Вы действительно хотите удалить данную должность?';\r\n      },\r\n      formTitle () {\r\n        return this.editedIndex === -1 ? 'Новая должность' : 'Изменить должность'\r\n      }\r\n    },\r\n    watch: {\r\n      dialog (val) {\r\n        val || this.close()\r\n      }\r\n    },\r\n    methods: {\r\n      ...mapActions({\r\n        add: 'positions/add',\r\n        update: 'positions/edit',\r\n        remove: 'positions/remove'    \r\n      }),\r\n      getDepartmentName (id) {\r\n        return this.departments.find(el => el.id = id).title\r\n      },\r\n      getPositionEmployees(id) {\r\n        return this.employees.filter(el => el.position_id == id)\r\n      },\r\n      editItem (item) {\r\n        this.editedIndex = this.items.indexOf(item)\r\n        this.editedItem = Object.assign({}, item)\r\n        this.dialog = true\r\n      },\r\n      deleteItem (item) {\r\n        const index = this.items.indexOf(item)\r\n        if(this.getPositionEmployees(item.id).length) {\r\n\r\n        }\r\n\r\n        // Удаление должности\r\n      },\r\n      close () {\r\n        this.dialog = false\r\n        setTimeout(() => {\r\n          this.editedItem = Object.assign({}, this.defaultItem)\r\n          this.editedIndex = -1\r\n        }, 300)\r\n      },\r\n      save () {\r\n        if (this.editedIndex > -1) {\r\n          this.update(this.editedItem)\r\n        } else {\r\n          this.add(this.editedItem);\r\n        }\r\n        this.close()\r\n      }\r\n    }\r\n  }\r\n</script>\r\n\r\n<style scoped>\r\n#positions {\r\n    position: relative;\r\n    max-width: 90%;\r\n    margin: 10px auto;\r\n}\r\n\r\n.mb-2.btn {\r\n    position: absolute;\r\n    bottom: -50px;\r\n}\r\n\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(8);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  middleware: 'auth',
  data: function data() {
    return {
      dialog: false,
      deleteAlert: true,
      deleteAllowed: false,
      headers: [{
        text: 'Номер',
        align: 'right',
        sortable: false,
        value: 'id'
      }, { text: 'Наименование', align: 'right', value: 'title' }, { text: 'Подразделение', align: 'right', value: 'department' }, { text: 'Сотрудников', align: 'right', value: 'employees' }, { text: 'Действия', align: 'right', value: 'title', sortable: false }],
      editedIndex: -1,
      editedItem: {
        id: '',
        title: '',
        department_id: ''
      },
      defaultItem: {
        id: '',
        title: '',
        department_id: ''
      }
    };
  },
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    items: 'positions/positions',
    departments: 'departments/departments',
    employees: 'employees/employees'
  }), {
    deleteMsg: function deleteMsg() {
      return deleteAllowed ? ' За данной должностью закреплены сотрудники. Пожалуйста, распределите их на другие должности прежде чем удалять текущую.' : ' Вы действительно хотите удалить данную должность?';
    },
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'Новая должность' : 'Изменить должность';
    }
  }),
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
    getDepartmentName: function getDepartmentName(id) {
      return this.departments.find(function (el) {
        return el.id = id;
      }).title;
    },
    getPositionEmployees: function getPositionEmployees(id) {
      return this.employees.filter(function (el) {
        return el.position_id == id;
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var index = this.items.indexOf(item);
      if (this.getPositionEmployees(item.id).length) {}

      // Удаление должности
    },
    close: function close() {
      var _this = this;

      this.dialog = false;
      setTimeout(function () {
        _this.editedItem = Object.assign({}, _this.defaultItem);
        _this.editedIndex = -1;
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

/***/ 205:
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
            value: _vm.deleteAlert,
            callback: function($$v) {
              _vm.deleteAlert = $$v
            },
            expression: "deleteAlert"
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
                          _vm.close($event)
                        }
                      }
                    },
                    [_vm._v("Отмена")]
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
                    [_vm._v("Сохранить")]
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
                                  label: _vm.$t("position"),
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
        "v-data-table",
        {
          staticClass: "elevation-1",
          attrs: { headers: _vm.headers, items: _vm.items, "hide-actions": "" },
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
                    _vm._v(
                      _vm._s(_vm.getDepartmentName(props.item.department_id))
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-xs-right" }, [
                    _vm._v(
                      _vm._s(_vm.getPositionEmployees(props.item.id).length)
                    )
                  ]),
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2c341918", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZT82MDg4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlPzA2ODYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlP2JiZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSx3REFBeUQsMkJBQTJCLHVCQUF1QiwwQkFBMEIsR0FBRyw4QkFBOEIs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkRBQTZEO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrQkFBK0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSx3Q0FBd0MsU0FBUyxnQkFBZ0IsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSx3Q0FBd0MsU0FBUyxnQkFBZ0IsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUJBQW1CO0FBQzdDLHVCQUF1QiwyQkFBMkI7QUFDbEQsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvNS5iYTRiMzdkNGJhNmRmMTExYTljNy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMzNDE5MThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMzNDE5MThcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0yYzM0MTkxOFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGFkbWluXFxcXHBvc2l0aW9uc1xcXFxMaXN0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yYzM0MTkxOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJjMzQxOTE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzM0MTkxOFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI4Y2JhNGViY1wiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzM0MTkxOFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMzQxOTE4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmMzNDE5MThcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI3Bvc2l0aW9uc1tkYXRhLXYtMmMzNDE5MThdIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcbi5tYi0yLmJ0bltkYXRhLXYtMmMzNDE5MThdIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IC01MHB4O1xcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBK0tBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0NBQ0FcIixcImZpbGVcIjpcIkxpc3QudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXYgaWQ9XFxcInBvc2l0aW9uc1xcXCI+XFxyXFxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVxcXCJkZWxldGVBbGVydFxcXCIgbWF4LXdpZHRoPVxcXCI4MDBweFxcXCI+XFxyXFxuICAgICAgPHYtYnRuIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBkYXJrIHNsb3Q9XFxcImFjdGl2YXRvclxcXCIgY2xhc3M9XFxcIm1iLTJcXFwiPtCU0L7QsdCw0LLQuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMPC92LWJ0bj5cXHJcXG4gICAgICA8di1jYXJkPlxcclxcbiAgICAgICAgPHYtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRsaW5lXFxcIj7QktC90LjQvNCw0L3QuNC1ITwvc3Bhbj5cXHJcXG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgPHYtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgICB7eyBkZWxldGVNc2cgfX1cXHJcXG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XFxyXFxuICAgICAgICA8di1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcclxcbiAgICAgICAgICA8di1idG4gY29sb3I9XFxcImJsdWUgZGFya2VuLTFcXFwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cXFwiY2xvc2VcXFwiPtCe0YLQvNC10L3QsDwvdi1idG4+XFxyXFxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cXFwiYmx1ZSBkYXJrZW4tMVxcXCIgZmxhdCBAY2xpY2submF0aXZlPVxcXCJzYXZlXFxcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L3YtYnRuPlxcclxcbiAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICA8L3YtY2FyZD5cXHJcXG4gICAgPC92LWRpYWxvZz5cXHJcXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XFxcImRpYWxvZ1xcXCIgbWF4LXdpZHRoPVxcXCI1MDBweFxcXCI+XFxyXFxuICAgICAgPHYtYnRuIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBkYXJrIHNsb3Q9XFxcImFjdGl2YXRvclxcXCIgY2xhc3M9XFxcIm1iLTJcXFwiPtCU0L7QsdCw0LLQuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMPC92LWJ0bj5cXHJcXG4gICAgICA8di1jYXJkPlxcclxcbiAgICAgICAgPHYtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRsaW5lXFxcIj57eyBmb3JtVGl0bGUgfX08L3NwYW4+XFxyXFxuICAgICAgICA8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgIDx2LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgPHYtY29udGFpbmVyIGdyaWQtbGlzdC1tZD5cXHJcXG4gICAgICAgICAgICA8di1sYXlvdXQgd3JhcD5cXHJcXG4gICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTY+XFxyXFxuICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XFxcItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtVxcXCIgdi1tb2RlbD1cXFwiZWRpdGVkSXRlbS50aXRsZVxcXCI+PC92LXRleHQtZmllbGQ+XFxyXFxuICAgICAgICAgICAgICA8L3YtZmxleD5cXHJcXG4gICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTY+XFxyXFxuICAgICAgICAgICAgICAgIDx2LXNlbGVjdFxcclxcbiAgICAgICAgICAgICAgICAgIDpsYWJlbD1cXFwiJHQoJ3Bvc2l0aW9uJylcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZWRpdGVkSXRlbS5kZXBhcnRtZW50X2lkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cXFwiY2FyZF90cmF2ZWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOml0ZW1zPVxcXCJkZXBhcnRtZW50c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICBpdGVtLXRleHQ9XFxcInRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIGl0ZW0tdmFsdWU9XFxcImlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpydWxlcz1cXFwiW3YgPT4gISF2IHx8ICfQktGL0LHQtdGA0LjRgtC1INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1J11cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcXHJcXG4gICAgICAgICAgICAgICAgPjwvdi1zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICA8L3YtZmxleD5cXHJcXG4gICAgICAgICAgICA8L3YtbGF5b3V0PlxcclxcbiAgICAgICAgICA8L3YtY29udGFpbmVyPlxcclxcbiAgICAgICAgPC92LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxyXFxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cXFwiYmx1ZSBkYXJrZW4tMVxcXCIgZmxhdCBAY2xpY2submF0aXZlPVxcXCJjbG9zZVxcXCI+Q2FuY2VsPC92LWJ0bj5cXHJcXG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJibHVlIGRhcmtlbi0xXFxcIiBmbGF0IEBjbGljay5uYXRpdmU9XFxcInNhdmVcXFwiPlNhdmU8L3YtYnRuPlxcclxcbiAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICA8L3YtY2FyZD5cXHJcXG4gICAgPC92LWRpYWxvZz5cXHJcXG4gICAgPHYtZGF0YS10YWJsZVxcclxcbiAgICAgIDpoZWFkZXJzPVxcXCJoZWFkZXJzXFxcIlxcclxcbiAgICAgIDppdGVtcz1cXFwiaXRlbXNcXFwiXFxyXFxuICAgICAgaGlkZS1hY3Rpb25zXFxyXFxuICAgICAgY2xhc3M9XFxcImVsZXZhdGlvbi0xXFxcIlxcclxcbiAgICA+XFxyXFxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIml0ZW1zXFxcIiBzbG90LXNjb3BlPVxcXCJwcm9wc1xcXCI+XFxyXFxuICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7IHByb3BzLml0ZW0uaWQgfX08L3RkPlxcclxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57eyBwcm9wcy5pdGVtLnRpdGxlIH19PC90ZD5cXHJcXG4gICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+e3sgZ2V0RGVwYXJ0bWVudE5hbWUocHJvcHMuaXRlbS5kZXBhcnRtZW50X2lkKSB9fTwvdGQ+XFxyXFxuICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7IGdldFBvc2l0aW9uRW1wbG95ZWVzKHByb3BzLml0ZW0uaWQpLmxlbmd0aCB9fTwvdGQ+XFxyXFxuICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cXFwibXgtMFxcXCIgQGNsaWNrPVxcXCJlZGl0SXRlbShwcm9wcy5pdGVtKVxcXCI+XFxyXFxuICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cXFwidGVhbFxcXCI+ZWRpdDwvdi1pY29uPlxcclxcbiAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cXFwibXgtMFxcXCIgQGNsaWNrPVxcXCJkZWxldGVJdGVtKHByb3BzLml0ZW0pXFxcIj5cXHJcXG4gICAgICAgICAgICA8di1pY29uIGNvbG9yPVxcXCJwaW5rXFxcIj5kZWxldGU8L3YtaWNvbj5cXHJcXG4gICAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgIDwvdGQ+XFxyXFxuICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICA8dGVtcGxhdGUgc2xvdD1cXFwibm8tZGF0YVxcXCI+XFxyXFxuICAgICAgICA8di1idG4gY29sb3I9XFxcInByaW1hcnlcXFwiIEBjbGljaz1cXFwiXFxcIj7QntCx0L3QvtCy0LjRgtGMPC92LWJ0bj5cXHJcXG4gICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICA8L3YtZGF0YS10YWJsZT5cXHJcXG4gIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gIGltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4JztcXHJcXG5cXHJcXG4gIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgbWlkZGxld2FyZTogJ2F1dGgnLFxcclxcbiAgICBkYXRhOiAoKSA9PiAoe1xcclxcbiAgICAgIGRpYWxvZzogZmFsc2UsXFxyXFxuICAgICAgZGVsZXRlQWxlcnQ6IHRydWUsXFxyXFxuICAgICAgZGVsZXRlQWxsb3dlZDogZmFsc2UsXFxyXFxuICAgICAgaGVhZGVyczogW1xcclxcbiAgICAgICAge1xcclxcbiAgICAgICAgICB0ZXh0OiAn0J3QvtC80LXRgCcsXFxyXFxuICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxcclxcbiAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXFxyXFxuICAgICAgICAgIHZhbHVlOiAnaWQnXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgeyB0ZXh0OiAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1JywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAndGl0bGUnIH0sXFxyXFxuICAgICAgICB7IHRleHQ6ICfQn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtScsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ2RlcGFydG1lbnQnIH0sXFxyXFxuICAgICAgICB7IHRleHQ6ICfQodC+0YLRgNGD0LTQvdC40LrQvtCyJywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAnZW1wbG95ZWVzJyB9LFxcclxcbiAgICAgICAgeyB0ZXh0OiAn0JTQtdC50YHRgtCy0LjRjycsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ3RpdGxlJywgc29ydGFibGU6IGZhbHNlIH1cXHJcXG4gICAgICBdLFxcclxcbiAgICAgIGVkaXRlZEluZGV4OiAtMSxcXHJcXG4gICAgICBlZGl0ZWRJdGVtOiB7XFxyXFxuICAgICAgICBpZDogJycsXFxyXFxuICAgICAgICB0aXRsZTogJycsXFxyXFxuICAgICAgICBkZXBhcnRtZW50X2lkOiAnJyxcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGRlZmF1bHRJdGVtOiB7XFxyXFxuICAgICAgICBpZDogJycsXFxyXFxuICAgICAgICB0aXRsZTogJycsXFxyXFxuICAgICAgICBkZXBhcnRtZW50X2lkOiAnJyxcXHJcXG4gICAgICB9XFxyXFxuICAgIH0pLFxcclxcbiAgICBjb21wdXRlZDoge1xcclxcbiAgICAgIC4uLm1hcEdldHRlcnMoe1xcclxcbiAgICAgICAgaXRlbXM6ICdwb3NpdGlvbnMvcG9zaXRpb25zJyxcXHJcXG4gICAgICAgIGRlcGFydG1lbnRzOiAnZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMnLFxcclxcbiAgICAgICAgZW1wbG95ZWVzOiAnZW1wbG95ZWVzL2VtcGxveWVlcydcXHJcXG4gICAgICB9KSxcXHJcXG4gICAgICBkZWxldGVNc2coKSB7XFxyXFxuICAgICAgICByZXR1cm4gKGRlbGV0ZUFsbG93ZWQpID8gJyDQl9CwINC00LDQvdC90L7QuSDQtNC+0LvQttC90L7RgdGC0YzRjiDQt9Cw0LrRgNC10L/Qu9C10L3RiyDRgdC+0YLRgNGD0LTQvdC40LrQuC4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINGA0LDRgdC/0YDQtdC00LXQu9C40YLQtSDQuNGFINC90LAg0LTRgNGD0LPQuNC1INC00L7Qu9C20L3QvtGB0YLQuCDQv9GA0LXQttC00LUg0YfQtdC8INGD0LTQsNC70Y/RgtGMINGC0LXQutGD0YnRg9GOLicgOlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcg0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0LTQsNC90L3Rg9GOINC00L7Qu9C20L3QvtGB0YLRjD8nO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZm9ybVRpdGxlICgpIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRlZEluZGV4ID09PSAtMSA/ICfQndC+0LLQsNGPINC00L7Qu9C20L3QvtGB0YLRjCcgOiAn0JjQt9C80LXQvdC40YLRjCDQtNC+0LvQttC90L7RgdGC0YwnXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICB3YXRjaDoge1xcclxcbiAgICAgIGRpYWxvZyAodmFsKSB7XFxyXFxuICAgICAgICB2YWwgfHwgdGhpcy5jbG9zZSgpXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgLi4ubWFwQWN0aW9ucyh7XFxyXFxuICAgICAgICBhZGQ6ICdwb3NpdGlvbnMvYWRkJyxcXHJcXG4gICAgICAgIHVwZGF0ZTogJ3Bvc2l0aW9ucy9lZGl0JyxcXHJcXG4gICAgICAgIHJlbW92ZTogJ3Bvc2l0aW9ucy9yZW1vdmUnICAgIFxcclxcbiAgICAgIH0pLFxcclxcbiAgICAgIGdldERlcGFydG1lbnROYW1lIChpZCkge1xcclxcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwYXJ0bWVudHMuZmluZChlbCA9PiBlbC5pZCA9IGlkKS50aXRsZVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZ2V0UG9zaXRpb25FbXBsb3llZXMoaWQpIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLmVtcGxveWVlcy5maWx0ZXIoZWwgPT4gZWwucG9zaXRpb25faWQgPT0gaWQpXFxyXFxuICAgICAgfSxcXHJcXG4gICAgICBlZGl0SXRlbSAoaXRlbSkge1xcclxcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKVxcclxcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSlcXHJcXG4gICAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVsZXRlSXRlbSAoaXRlbSkge1xcclxcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSlcXHJcXG4gICAgICAgIGlmKHRoaXMuZ2V0UG9zaXRpb25FbXBsb3llZXMoaXRlbS5pZCkubGVuZ3RoKSB7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAvLyDQo9C00LDQu9C10L3QuNC1INC00L7Qu9C20L3QvtGB0YLQuFxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgY2xvc2UgKCkge1xcclxcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZVxcclxcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XFxyXFxuICAgICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pXFxyXFxuICAgICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMVxcclxcbiAgICAgICAgfSwgMzAwKVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgc2F2ZSAoKSB7XFxyXFxuICAgICAgICBpZiAodGhpcy5lZGl0ZWRJbmRleCA+IC0xKSB7XFxyXFxuICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMuZWRpdGVkSXRlbSlcXHJcXG4gICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgIHRoaXMuYWRkKHRoaXMuZWRpdGVkSXRlbSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICB0aGlzLmNsb3NlKClcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiNwb3NpdGlvbnMge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1heC13aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1iLTIuYnRuIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IC01MHB4O1xcclxcbn1cXHJcXG5cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yYzM0MTkxOFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGlkPVwicG9zaXRpb25zXCI+XHJcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRlbGV0ZUFsZXJ0XCIgbWF4LXdpZHRoPVwiODAwcHhcIj5cclxuICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIGRhcmsgc2xvdD1cImFjdGl2YXRvclwiIGNsYXNzPVwibWItMlwiPtCU0L7QsdCw0LLQuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMPC92LWJ0bj5cclxuICAgICAgPHYtY2FyZD5cclxuICAgICAgICA8di1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkbGluZVwiPtCS0L3QuNC80LDQvdC40LUhPC9zcGFuPlxyXG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgIHt7IGRlbGV0ZU1zZyB9fVxyXG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XHJcbiAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XHJcbiAgICAgICAgICA8di1idG4gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgZmxhdCBAY2xpY2submF0aXZlPVwiY2xvc2VcIj7QntGC0LzQtdC90LA8L3YtYnRuPlxyXG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVwiYmx1ZSBkYXJrZW4tMVwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cInNhdmVcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L3YtYnRuPlxyXG4gICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwvdi1jYXJkPlxyXG4gICAgPC92LWRpYWxvZz5cclxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9nXCIgbWF4LXdpZHRoPVwiNTAwcHhcIj5cclxuICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIGRhcmsgc2xvdD1cImFjdGl2YXRvclwiIGNsYXNzPVwibWItMlwiPtCU0L7QsdCw0LLQuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMPC92LWJ0bj5cclxuICAgICAgPHYtY2FyZD5cclxuICAgICAgICA8di1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkbGluZVwiPnt7IGZvcm1UaXRsZSB9fTwvc3Bhbj5cclxuICAgICAgICA8L3YtY2FyZC10aXRsZT5cclxuICAgICAgICA8di1jYXJkLXRleHQ+XHJcbiAgICAgICAgICA8di1jb250YWluZXIgZ3JpZC1saXN0LW1kPlxyXG4gICAgICAgICAgICA8di1sYXlvdXQgd3JhcD5cclxuICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202PlxyXG4gICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCBsYWJlbD1cItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtVwiIHYtbW9kZWw9XCJlZGl0ZWRJdGVtLnRpdGxlXCI+PC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgICAgICAgPC92LWZsZXg+XHJcbiAgICAgICAgICAgICAgPHYtZmxleCB4czEyIHNtNj5cclxuICAgICAgICAgICAgICAgIDx2LXNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgncG9zaXRpb24nKVwiXHJcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJlZGl0ZWRJdGVtLmRlcGFydG1lbnRfaWRcIlxyXG4gICAgICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJjYXJkX3RyYXZlbFwiXHJcbiAgICAgICAgICAgICAgICAgIDppdGVtcz1cImRlcGFydG1lbnRzXCJcclxuICAgICAgICAgICAgICAgICAgaXRlbS10ZXh0PVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICBpdGVtLXZhbHVlPVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40LUnXVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICA+PC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICA8L3YtZmxleD5cclxuICAgICAgICAgICAgPC92LWxheW91dD5cclxuICAgICAgICAgIDwvdi1jb250YWluZXI+XHJcbiAgICAgICAgPC92LWNhcmQtdGV4dD5cclxuICAgICAgICA8di1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cclxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImJsdWUgZGFya2VuLTFcIiBmbGF0IEBjbGljay5uYXRpdmU9XCJjbG9zZVwiPkNhbmNlbDwvdi1idG4+XHJcbiAgICAgICAgICA8di1idG4gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgZmxhdCBAY2xpY2submF0aXZlPVwic2F2ZVwiPlNhdmU8L3YtYnRuPlxyXG4gICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwvdi1jYXJkPlxyXG4gICAgPC92LWRpYWxvZz5cclxuICAgIDx2LWRhdGEtdGFibGVcclxuICAgICAgOmhlYWRlcnM9XCJoZWFkZXJzXCJcclxuICAgICAgOml0ZW1zPVwiaXRlbXNcIlxyXG4gICAgICBoaWRlLWFjdGlvbnNcclxuICAgICAgY2xhc3M9XCJlbGV2YXRpb24tMVwiXHJcbiAgICA+XHJcbiAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiaXRlbXNcIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPnt7IHByb3BzLml0ZW0udGl0bGUgfX08L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj57eyBnZXREZXBhcnRtZW50TmFtZShwcm9wcy5pdGVtLmRlcGFydG1lbnRfaWQpIH19PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+e3sgZ2V0UG9zaXRpb25FbXBsb3llZXMocHJvcHMuaXRlbS5pZCkubGVuZ3RoIH19PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+XHJcbiAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cIm14LTBcIiBAY2xpY2s9XCJlZGl0SXRlbShwcm9wcy5pdGVtKVwiPlxyXG4gICAgICAgICAgICA8di1pY29uIGNvbG9yPVwidGVhbFwiPmVkaXQ8L3YtaWNvbj5cclxuICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cIm14LTBcIiBAY2xpY2s9XCJkZWxldGVJdGVtKHByb3BzLml0ZW0pXCI+XHJcbiAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJwaW5rXCI+ZGVsZXRlPC92LWljb24+XHJcbiAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibm8tZGF0YVwiPlxyXG4gICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJcIj7QntCx0L3QvtCy0LjRgtGMPC92LWJ0bj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdi1kYXRhLXRhYmxlPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1pZGRsZXdhcmU6ICdhdXRoJyxcclxuICAgIGRhdGE6ICgpID0+ICh7XHJcbiAgICAgIGRpYWxvZzogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZUFsZXJ0OiB0cnVlLFxyXG4gICAgICBkZWxldGVBbGxvd2VkOiBmYWxzZSxcclxuICAgICAgaGVhZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICfQndC+0LzQtdGAJyxcclxuICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxyXG4gICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgdmFsdWU6ICdpZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgdGV4dDogJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtScsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ3RpdGxlJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ9Cf0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1JywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAnZGVwYXJ0bWVudCcgfSxcclxuICAgICAgICB7IHRleHQ6ICfQodC+0YLRgNGD0LTQvdC40LrQvtCyJywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAnZW1wbG95ZWVzJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ9CU0LXQudGB0YLQstC40Y8nLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICd0aXRsZScsIHNvcnRhYmxlOiBmYWxzZSB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGVkaXRlZEluZGV4OiAtMSxcclxuICAgICAgZWRpdGVkSXRlbToge1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgZGVwYXJ0bWVudF9pZDogJycsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRJdGVtOiB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBkZXBhcnRtZW50X2lkOiAnJyxcclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgICBpdGVtczogJ3Bvc2l0aW9ucy9wb3NpdGlvbnMnLFxyXG4gICAgICAgIGRlcGFydG1lbnRzOiAnZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMnLFxyXG4gICAgICAgIGVtcGxveWVlczogJ2VtcGxveWVlcy9lbXBsb3llZXMnXHJcbiAgICAgIH0pLFxyXG4gICAgICBkZWxldGVNc2coKSB7XHJcbiAgICAgICAgcmV0dXJuIChkZWxldGVBbGxvd2VkKSA/ICcg0JfQsCDQtNCw0L3QvdC+0Lkg0LTQvtC70LbQvdC+0YHRgtGM0Y4g0LfQsNC60YDQtdC/0LvQtdC90Ysg0YHQvtGC0YDRg9C00L3QuNC60LguINCf0L7QttCw0LvRg9C50YHRgtCwLCDRgNCw0YHQv9GA0LXQtNC10LvQuNGC0LUg0LjRhSDQvdCwINC00YDRg9Cz0LjQtSDQtNC+0LvQttC90L7RgdGC0Lgg0L/RgNC10LbQtNC1INGH0LXQvCDRg9C00LDQu9GP0YLRjCDRgtC10LrRg9GJ0YPRji4nIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyDQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDQtNCw0L3QvdGD0Y4g0LTQvtC70LbQvdC+0YHRgtGMPyc7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1UaXRsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdGVkSW5kZXggPT09IC0xID8gJ9Cd0L7QstCw0Y8g0LTQvtC70LbQvdC+0YHRgtGMJyA6ICfQmNC30LzQtdC90LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjCdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIGRpYWxvZyAodmFsKSB7XHJcbiAgICAgICAgdmFsIHx8IHRoaXMuY2xvc2UoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAuLi5tYXBBY3Rpb25zKHtcclxuICAgICAgICBhZGQ6ICdwb3NpdGlvbnMvYWRkJyxcclxuICAgICAgICB1cGRhdGU6ICdwb3NpdGlvbnMvZWRpdCcsXHJcbiAgICAgICAgcmVtb3ZlOiAncG9zaXRpb25zL3JlbW92ZScgICAgXHJcbiAgICAgIH0pLFxyXG4gICAgICBnZXREZXBhcnRtZW50TmFtZSAoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXBhcnRtZW50cy5maW5kKGVsID0+IGVsLmlkID0gaWQpLnRpdGxlXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldFBvc2l0aW9uRW1wbG95ZWVzKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1wbG95ZWVzLmZpbHRlcihlbCA9PiBlbC5wb3NpdGlvbl9pZCA9PSBpZClcclxuICAgICAgfSxcclxuICAgICAgZWRpdEl0ZW0gKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pXHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSlcclxuICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWVcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlSXRlbSAoaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pXHJcbiAgICAgICAgaWYodGhpcy5nZXRQb3NpdGlvbkVtcGxveWVlcyhpdGVtLmlkKS5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQo9C00LDQu9C10L3QuNC1INC00L7Qu9C20L3QvtGB0YLQuFxyXG4gICAgICB9LFxyXG4gICAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSlcclxuICAgICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMVxyXG4gICAgICAgIH0sIDMwMClcclxuICAgICAgfSxcclxuICAgICAgc2F2ZSAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWRpdGVkSW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5lZGl0ZWRJdGVtKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmFkZCh0aGlzLmVkaXRlZEl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsb3NlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4jcG9zaXRpb25zIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbi5tYi0yLmJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC01MHB4O1xyXG59XHJcblxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcInBvc2l0aW9uc1wiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI4MDBweFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVsZXRlQWxlcnQsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kZWxldGVBbGVydCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVsZXRlQWxlcnRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiYWN0aXZhdG9yXCIsIGNvbG9yOiBcInByaW1hcnlcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcItCU0L7QsdCw0LLQuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtfdm0uX3YoXCLQktC90LjQvNCw0L3QuNC1IVwiKV0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5kZWxldGVNc2cpICsgXCJcXG4gICAgICBcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJibHVlIGRhcmtlbi0xXCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xvc2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCe0YLQvNC10L3QsFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImJsdWUgZGFya2VuLTFcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zYXZlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQodC+0YXRgNCw0L3QuNGC0YxcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kaWFsb2csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kaWFsb2cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRpYWxvZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJhY3RpdmF0b3JcIiwgY29sb3I6IFwicHJpbWFyeVwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi0JTQvtCx0LDQstC40YLRjCDQtNC+0LvQttC90L7RgdGC0YxcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZm9ybVRpdGxlKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJncmlkLWxpc3QtbWRcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBzbTY6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRlZEl0ZW0sIFwidGl0bGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0ZWRJdGVtLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIHNtNjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInBvc2l0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiY2FyZF90cmF2ZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmRlcGFydG1lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhIXYgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lZGl0ZWRJdGVtLmRlcGFydG1lbnRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0ZWRJdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlcGFydG1lbnRfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVkaXRlZEl0ZW0uZGVwYXJ0bWVudF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJibHVlIGRhcmtlbi0xXCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xvc2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImJsdWUgZGFya2VuLTFcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zYXZlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRhdGEtdGFibGVcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0xXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaGVhZGVyczogX3ZtLmhlYWRlcnMsIGl0ZW1zOiBfdm0uaXRlbXMsIFwiaGlkZS1hY3Rpb25zXCI6IFwiXCIgfSxcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmlkKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0udGl0bGUpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldERlcGFydG1lbnROYW1lKHByb3BzLml0ZW0uZGVwYXJ0bWVudF9pZCkpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRQb3NpdGlvbkVtcGxveWVlcyhwcm9wcy5pdGVtLmlkKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXgtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRJdGVtKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcInRlYWxcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlZGl0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXgtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUl0ZW0ocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwicGlua1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImRlbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICB7IHNsb3Q6IFwibm8tZGF0YVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHt9IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQntCx0L3QvtCy0LjRgtGMXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTJjMzQxOTE4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yYzM0MTkxOFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwic291cmNlUm9vdCI6IiJ9