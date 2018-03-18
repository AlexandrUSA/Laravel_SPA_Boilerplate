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
exports.push([module.i, "\n#positions[data-v-2c341918] {\r\n    position: relative;\r\n    max-width: 90%;\r\n    margin: 10px auto;\n}\n.mb-2.btn[data-v-2c341918] {\r\n    position: absolute;\r\n    bottom: -50px;\n}\r\n\r\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/positions/resources/assets/js/pages/admin/positions/List.vue"],"names":[],"mappings":";AAqLA;IACA,mBAAA;IACA,eAAA;IACA,kBAAA;CACA;AAEA;IACA,mBAAA;IACA,cAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n  <div id=\"positions\">\r\n    <v-dialog v-model=\"deleteAlert\" max-width=\"800px\">\r\n      <v-btn color=\"primary\" dark slot=\"activator\" class=\"mb-2\">Добавить должность</v-btn>\r\n      <v-card>\r\n        <v-card-title>\r\n          <span class=\"headline\">Внимание!</span>\r\n        </v-card-title>\r\n        <v-card-text>\r\n          {{ deleteMsg }}\r\n        </v-card-text>\r\n        <v-card-actions>\r\n          <v-spacer></v-spacer>\r\n          <v-btn color=\"blue darken-1\" flat @click.native=\"deleteAlert = !deleteAlert\">Отмена</v-btn>\r\n          <v-btn v-show=\"!deleteDenied\" color=\"blue darken-1\" flat @click.native=\"deleteConfirm\">Удалить</v-btn>\r\n        </v-card-actions>\r\n      </v-card>\r\n    </v-dialog>\r\n    <v-dialog v-model=\"dialog\" max-width=\"500px\">\r\n      <v-btn color=\"primary\" dark slot=\"activator\" class=\"mb-2\">Добавить должность</v-btn>\r\n      <v-card>\r\n        <v-card-title>\r\n          <span class=\"headline\">{{ formTitle }}</span>\r\n        </v-card-title>\r\n        <v-card-text>\r\n          <v-container grid-list-md>\r\n            <v-layout wrap>\r\n              <v-flex xs12 sm6>\r\n                <v-text-field label=\"Наименование\" v-model=\"editedItem.title\"></v-text-field>\r\n              </v-flex>\r\n              <v-flex xs12 sm6>\r\n                <v-select\r\n                  :label=\"$t('department')\"\r\n                  v-model=\"editedItem.department_id\"\r\n                  prepend-icon=\"card_travel\"\r\n                  :items=\"departments\"\r\n                  item-text=\"title\"\r\n                  item-value=\"id\"\r\n                  :rules=\"[v => !!v || 'Выберите подразделение']\"\r\n                  required\r\n                ></v-select>\r\n              </v-flex>\r\n            </v-layout>\r\n          </v-container>\r\n        </v-card-text>\r\n        <v-card-actions>\r\n          <v-spacer></v-spacer>\r\n          <v-btn color=\"blue darken-1\" flat @click.native=\"close\">Cancel</v-btn>\r\n          <v-btn color=\"blue darken-1\" flat @click.native=\"save\">Save</v-btn>\r\n        </v-card-actions>\r\n      </v-card>\r\n    </v-dialog>\r\n    <v-data-table\r\n      :headers=\"headers\"\r\n      :items=\"items\"\r\n      hide-actions\r\n      class=\"elevation-1\"\r\n    >\r\n      <template slot=\"items\" slot-scope=\"props\">\r\n        <td class=\"text-xs-right\">{{ props.item.id }}</td>\r\n        <td class=\"text-xs-right\">{{ props.item.title }}</td>\r\n        <td class=\"text-xs-right\">{{ getDepartmentName(props.item.department_id) }}</td>\r\n        <td class=\"text-xs-right\">{{ getPositionEmployees(props.item.id).length }}</td>\r\n        <td class=\"text-xs-right\">\r\n          <v-btn icon class=\"mx-0\" @click=\"editItem(props.item)\">\r\n            <v-icon color=\"teal\">edit</v-icon>\r\n          </v-btn>\r\n          <v-btn icon class=\"mx-0\" @click=\"deleteItem(props.item)\">\r\n            <v-icon color=\"pink\">delete</v-icon>\r\n          </v-btn>\r\n        </td>\r\n      </template>\r\n      <template slot=\"no-data\">\r\n        <v-btn color=\"primary\" @click=\"\">Обновить</v-btn>\r\n      </template>\r\n    </v-data-table>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import { mapGetters, mapActions } from 'vuex';\r\n\r\n  export default {\r\n    middleware: 'auth',\r\n    data: () => ({\r\n      dialog: false,\r\n      deleteAlert: true,\r\n      deleteDenied: false,\r\n      headers: [\r\n        {\r\n          text: 'Номер',\r\n          align: 'right',\r\n          sortable: false,\r\n          value: 'id'\r\n        },\r\n        { text: 'Наименование', align: 'right', value: 'title' },\r\n        { text: 'Подразделение', align: 'right', value: 'department' },\r\n        { text: 'Сотрудников', align: 'right', value: 'employees' },\r\n        { text: 'Действия', align: 'right', value: 'title', sortable: false }\r\n      ],\r\n      editedIndex: -1,\r\n      editedItem: {\r\n        id: '',\r\n        title: '',\r\n        department_id: '',\r\n      },\r\n      defaultItem: {\r\n        id: '',\r\n        title: '',\r\n        department_id: '',\r\n      }\r\n    }),\r\n    computed: {\r\n      ...mapGetters({\r\n        items: 'positions/positions',\r\n        departments: 'departments/departments',\r\n        employees: 'employees/employees'\r\n      }),\r\n      deleteMsg() {\r\n        return (this.deleteDenied) ? ' За данной должностью закреплены сотрудники. Пожалуйста, распределите их на другие должности прежде чем удалять текущую.' :\r\n                                 ' Вы действительно хотите удалить данную должность?';\r\n      },\r\n      formTitle () {\r\n        return this.editedIndex === -1 ? 'Новая должность' : 'Изменить должность'\r\n      }\r\n    },\r\n    watch: {\r\n      dialog (val) {\r\n        val || this.close()\r\n      }\r\n    },\r\n    methods: {\r\n      ...mapActions({\r\n        add: 'positions/add',\r\n        update: 'positions/edit',\r\n        remove: 'positions/remove'    \r\n      }),\r\n      getDepartmentName (id) {\r\n        return this.departments.find(el => el.id = id).title\r\n      },\r\n      getPositionEmployees(id) {\r\n        return this.employees.filter(el => el.position_id == id)\r\n      },\r\n      editItem (item) {\r\n        this.editedIndex = this.items.indexOf(item)\r\n        this.editedItem = Object.assign({}, item)\r\n        this.dialog = true\r\n      },\r\n      deleteItem (item) {\r\n        this.deleteAlert = true;\r\n        if(this.getPositionEmployees(item.id).length) {\r\n          this.deleteDenied = true;\r\n        } else {\r\n          this.deleteDenied = false;\r\n          this.editedIndex = item.id;\r\n        }\r\n      },\r\n      deleteConfirm() {\r\n        this.remove(this.editedIndex);\r\n        this.deleteAlert = false;\r\n        this.editedIndex = -1;\r\n      },\r\n      close () {\r\n        this.dialog = false\r\n        setTimeout(() => {\r\n          this.editedItem = Object.assign({}, this.defaultItem)\r\n          this.editedIndex = -1\r\n        }, 300)\r\n      },\r\n      save () {\r\n        if (this.editedIndex > -1) {\r\n          this.update(this.editedItem)\r\n        } else {\r\n          this.add(this.editedItem);\r\n        }\r\n        this.close()\r\n      }\r\n    }\r\n  }\r\n</script>\r\n\r\n<style scoped>\r\n#positions {\r\n    position: relative;\r\n    max-width: 90%;\r\n    margin: 10px auto;\r\n}\r\n\r\n.mb-2.btn {\r\n    position: absolute;\r\n    bottom: -50px;\r\n}\r\n\r\n</style>"],"sourceRoot":""}]);

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
      deleteDenied: false,
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
      return this.deleteDenied ? ' За данной должностью закреплены сотрудники. Пожалуйста, распределите их на другие должности прежде чем удалять текущую.' : ' Вы действительно хотите удалить данную должность?';
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
      this.deleteAlert = true;
      if (this.getPositionEmployees(item.id).length) {
        this.deleteDenied = true;
      } else {
        this.deleteDenied = false;
        this.editedIndex = item.id;
      }
    },
    deleteConfirm: function deleteConfirm() {
      this.remove(this.editedIndex);
      this.deleteAlert = false;
      this.editedIndex = -1;
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
                          _vm.deleteAlert = !_vm.deleteAlert
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZT82MDg4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlPzA2ODYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlP2JiZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSx3REFBeUQsMkJBQTJCLHVCQUF1QiwwQkFBMEIsR0FBRyw4QkFBOEIs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvNS42YzMzZjU0MGQ1ZThiYmZkMjk1NS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMzNDE5MThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMzNDE5MThcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0yYzM0MTkxOFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGFkbWluXFxcXHBvc2l0aW9uc1xcXFxMaXN0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yYzM0MTkxOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJjMzQxOTE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzM0MTkxOFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI4Y2JhNGViY1wiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzM0MTkxOFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMzQxOTE4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmMzNDE5MThcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI3Bvc2l0aW9uc1tkYXRhLXYtMmMzNDE5MThdIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcbi5tYi0yLmJ0bltkYXRhLXYtMmMzNDE5MThdIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IC01MHB4O1xcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBcUxBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0NBQ0FcIixcImZpbGVcIjpcIkxpc3QudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXYgaWQ9XFxcInBvc2l0aW9uc1xcXCI+XFxyXFxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVxcXCJkZWxldGVBbGVydFxcXCIgbWF4LXdpZHRoPVxcXCI4MDBweFxcXCI+XFxyXFxuICAgICAgPHYtYnRuIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBkYXJrIHNsb3Q9XFxcImFjdGl2YXRvclxcXCIgY2xhc3M9XFxcIm1iLTJcXFwiPtCU0L7QsdCw0LLQuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMPC92LWJ0bj5cXHJcXG4gICAgICA8di1jYXJkPlxcclxcbiAgICAgICAgPHYtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRsaW5lXFxcIj7QktC90LjQvNCw0L3QuNC1ITwvc3Bhbj5cXHJcXG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgPHYtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgICB7eyBkZWxldGVNc2cgfX1cXHJcXG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XFxyXFxuICAgICAgICA8di1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcclxcbiAgICAgICAgICA8di1idG4gY29sb3I9XFxcImJsdWUgZGFya2VuLTFcXFwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cXFwiZGVsZXRlQWxlcnQgPSAhZGVsZXRlQWxlcnRcXFwiPtCe0YLQvNC10L3QsDwvdi1idG4+XFxyXFxuICAgICAgICAgIDx2LWJ0biB2LXNob3c9XFxcIiFkZWxldGVEZW5pZWRcXFwiIGNvbG9yPVxcXCJibHVlIGRhcmtlbi0xXFxcIiBmbGF0IEBjbGljay5uYXRpdmU9XFxcImRlbGV0ZUNvbmZpcm1cXFwiPtCj0LTQsNC70LjRgtGMPC92LWJ0bj5cXHJcXG4gICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgPC92LWNhcmQ+XFxyXFxuICAgIDwvdi1kaWFsb2c+XFxyXFxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVxcXCJkaWFsb2dcXFwiIG1heC13aWR0aD1cXFwiNTAwcHhcXFwiPlxcclxcbiAgICAgIDx2LWJ0biBjb2xvcj1cXFwicHJpbWFyeVxcXCIgZGFyayBzbG90PVxcXCJhY3RpdmF0b3JcXFwiIGNsYXNzPVxcXCJtYi0yXFxcIj7QlNC+0LHQsNCy0LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjDwvdi1idG4+XFxyXFxuICAgICAgPHYtY2FyZD5cXHJcXG4gICAgICAgIDx2LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkbGluZVxcXCI+e3sgZm9ybVRpdGxlIH19PC9zcGFuPlxcclxcbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICA8di1jYXJkLXRleHQ+XFxyXFxuICAgICAgICAgIDx2LWNvbnRhaW5lciBncmlkLWxpc3QtbWQ+XFxyXFxuICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXA+XFxyXFxuICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202PlxcclxcbiAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIGxhYmVsPVxcXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcXFwiIHYtbW9kZWw9XFxcImVkaXRlZEl0ZW0udGl0bGVcXFwiPjwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgICAgICAgICAgPC92LWZsZXg+XFxyXFxuICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202PlxcclxcbiAgICAgICAgICAgICAgICA8di1zZWxlY3RcXHJcXG4gICAgICAgICAgICAgICAgICA6bGFiZWw9XFxcIiR0KCdkZXBhcnRtZW50JylcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZWRpdGVkSXRlbS5kZXBhcnRtZW50X2lkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cXFwiY2FyZF90cmF2ZWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOml0ZW1zPVxcXCJkZXBhcnRtZW50c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICBpdGVtLXRleHQ9XFxcInRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIGl0ZW0tdmFsdWU9XFxcImlkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpydWxlcz1cXFwiW3YgPT4gISF2IHx8ICfQktGL0LHQtdGA0LjRgtC1INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1J11cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcXHJcXG4gICAgICAgICAgICAgICAgPjwvdi1zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICA8L3YtZmxleD5cXHJcXG4gICAgICAgICAgICA8L3YtbGF5b3V0PlxcclxcbiAgICAgICAgICA8L3YtY29udGFpbmVyPlxcclxcbiAgICAgICAgPC92LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxyXFxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cXFwiYmx1ZSBkYXJrZW4tMVxcXCIgZmxhdCBAY2xpY2submF0aXZlPVxcXCJjbG9zZVxcXCI+Q2FuY2VsPC92LWJ0bj5cXHJcXG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJibHVlIGRhcmtlbi0xXFxcIiBmbGF0IEBjbGljay5uYXRpdmU9XFxcInNhdmVcXFwiPlNhdmU8L3YtYnRuPlxcclxcbiAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICA8L3YtY2FyZD5cXHJcXG4gICAgPC92LWRpYWxvZz5cXHJcXG4gICAgPHYtZGF0YS10YWJsZVxcclxcbiAgICAgIDpoZWFkZXJzPVxcXCJoZWFkZXJzXFxcIlxcclxcbiAgICAgIDppdGVtcz1cXFwiaXRlbXNcXFwiXFxyXFxuICAgICAgaGlkZS1hY3Rpb25zXFxyXFxuICAgICAgY2xhc3M9XFxcImVsZXZhdGlvbi0xXFxcIlxcclxcbiAgICA+XFxyXFxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIml0ZW1zXFxcIiBzbG90LXNjb3BlPVxcXCJwcm9wc1xcXCI+XFxyXFxuICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7IHByb3BzLml0ZW0uaWQgfX08L3RkPlxcclxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57eyBwcm9wcy5pdGVtLnRpdGxlIH19PC90ZD5cXHJcXG4gICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+e3sgZ2V0RGVwYXJ0bWVudE5hbWUocHJvcHMuaXRlbS5kZXBhcnRtZW50X2lkKSB9fTwvdGQ+XFxyXFxuICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7IGdldFBvc2l0aW9uRW1wbG95ZWVzKHByb3BzLml0ZW0uaWQpLmxlbmd0aCB9fTwvdGQ+XFxyXFxuICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cXFwibXgtMFxcXCIgQGNsaWNrPVxcXCJlZGl0SXRlbShwcm9wcy5pdGVtKVxcXCI+XFxyXFxuICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cXFwidGVhbFxcXCI+ZWRpdDwvdi1pY29uPlxcclxcbiAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cXFwibXgtMFxcXCIgQGNsaWNrPVxcXCJkZWxldGVJdGVtKHByb3BzLml0ZW0pXFxcIj5cXHJcXG4gICAgICAgICAgICA8di1pY29uIGNvbG9yPVxcXCJwaW5rXFxcIj5kZWxldGU8L3YtaWNvbj5cXHJcXG4gICAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgIDwvdGQ+XFxyXFxuICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICA8dGVtcGxhdGUgc2xvdD1cXFwibm8tZGF0YVxcXCI+XFxyXFxuICAgICAgICA8di1idG4gY29sb3I9XFxcInByaW1hcnlcXFwiIEBjbGljaz1cXFwiXFxcIj7QntCx0L3QvtCy0LjRgtGMPC92LWJ0bj5cXHJcXG4gICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICA8L3YtZGF0YS10YWJsZT5cXHJcXG4gIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gIGltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4JztcXHJcXG5cXHJcXG4gIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgbWlkZGxld2FyZTogJ2F1dGgnLFxcclxcbiAgICBkYXRhOiAoKSA9PiAoe1xcclxcbiAgICAgIGRpYWxvZzogZmFsc2UsXFxyXFxuICAgICAgZGVsZXRlQWxlcnQ6IHRydWUsXFxyXFxuICAgICAgZGVsZXRlRGVuaWVkOiBmYWxzZSxcXHJcXG4gICAgICBoZWFkZXJzOiBbXFxyXFxuICAgICAgICB7XFxyXFxuICAgICAgICAgIHRleHQ6ICfQndC+0LzQtdGAJyxcXHJcXG4gICAgICAgICAgYWxpZ246ICdyaWdodCcsXFxyXFxuICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcXHJcXG4gICAgICAgICAgdmFsdWU6ICdpZCdcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB7IHRleHQ6ICfQndCw0LjQvNC10L3QvtCy0LDQvdC40LUnLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICd0aXRsZScgfSxcXHJcXG4gICAgICAgIHsgdGV4dDogJ9Cf0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1JywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAnZGVwYXJ0bWVudCcgfSxcXHJcXG4gICAgICAgIHsgdGV4dDogJ9Ch0L7RgtGA0YPQtNC90LjQutC+0LInLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICdlbXBsb3llZXMnIH0sXFxyXFxuICAgICAgICB7IHRleHQ6ICfQlNC10LnRgdGC0LLQuNGPJywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAndGl0bGUnLCBzb3J0YWJsZTogZmFsc2UgfVxcclxcbiAgICAgIF0sXFxyXFxuICAgICAgZWRpdGVkSW5kZXg6IC0xLFxcclxcbiAgICAgIGVkaXRlZEl0ZW06IHtcXHJcXG4gICAgICAgIGlkOiAnJyxcXHJcXG4gICAgICAgIHRpdGxlOiAnJyxcXHJcXG4gICAgICAgIGRlcGFydG1lbnRfaWQ6ICcnLFxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVmYXVsdEl0ZW06IHtcXHJcXG4gICAgICAgIGlkOiAnJyxcXHJcXG4gICAgICAgIHRpdGxlOiAnJyxcXHJcXG4gICAgICAgIGRlcGFydG1lbnRfaWQ6ICcnLFxcclxcbiAgICAgIH1cXHJcXG4gICAgfSksXFxyXFxuICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgLi4ubWFwR2V0dGVycyh7XFxyXFxuICAgICAgICBpdGVtczogJ3Bvc2l0aW9ucy9wb3NpdGlvbnMnLFxcclxcbiAgICAgICAgZGVwYXJ0bWVudHM6ICdkZXBhcnRtZW50cy9kZXBhcnRtZW50cycsXFxyXFxuICAgICAgICBlbXBsb3llZXM6ICdlbXBsb3llZXMvZW1wbG95ZWVzJ1xcclxcbiAgICAgIH0pLFxcclxcbiAgICAgIGRlbGV0ZU1zZygpIHtcXHJcXG4gICAgICAgIHJldHVybiAodGhpcy5kZWxldGVEZW5pZWQpID8gJyDQl9CwINC00LDQvdC90L7QuSDQtNC+0LvQttC90L7RgdGC0YzRjiDQt9Cw0LrRgNC10L/Qu9C10L3RiyDRgdC+0YLRgNGD0LTQvdC40LrQuC4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINGA0LDRgdC/0YDQtdC00LXQu9C40YLQtSDQuNGFINC90LAg0LTRgNGD0LPQuNC1INC00L7Qu9C20L3QvtGB0YLQuCDQv9GA0LXQttC00LUg0YfQtdC8INGD0LTQsNC70Y/RgtGMINGC0LXQutGD0YnRg9GOLicgOlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcg0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0LTQsNC90L3Rg9GOINC00L7Qu9C20L3QvtGB0YLRjD8nO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZm9ybVRpdGxlICgpIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRlZEluZGV4ID09PSAtMSA/ICfQndC+0LLQsNGPINC00L7Qu9C20L3QvtGB0YLRjCcgOiAn0JjQt9C80LXQvdC40YLRjCDQtNC+0LvQttC90L7RgdGC0YwnXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICB3YXRjaDoge1xcclxcbiAgICAgIGRpYWxvZyAodmFsKSB7XFxyXFxuICAgICAgICB2YWwgfHwgdGhpcy5jbG9zZSgpXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgLi4ubWFwQWN0aW9ucyh7XFxyXFxuICAgICAgICBhZGQ6ICdwb3NpdGlvbnMvYWRkJyxcXHJcXG4gICAgICAgIHVwZGF0ZTogJ3Bvc2l0aW9ucy9lZGl0JyxcXHJcXG4gICAgICAgIHJlbW92ZTogJ3Bvc2l0aW9ucy9yZW1vdmUnICAgIFxcclxcbiAgICAgIH0pLFxcclxcbiAgICAgIGdldERlcGFydG1lbnROYW1lIChpZCkge1xcclxcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwYXJ0bWVudHMuZmluZChlbCA9PiBlbC5pZCA9IGlkKS50aXRsZVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZ2V0UG9zaXRpb25FbXBsb3llZXMoaWQpIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLmVtcGxveWVlcy5maWx0ZXIoZWwgPT4gZWwucG9zaXRpb25faWQgPT0gaWQpXFxyXFxuICAgICAgfSxcXHJcXG4gICAgICBlZGl0SXRlbSAoaXRlbSkge1xcclxcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKVxcclxcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSlcXHJcXG4gICAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVsZXRlSXRlbSAoaXRlbSkge1xcclxcbiAgICAgICAgdGhpcy5kZWxldGVBbGVydCA9IHRydWU7XFxyXFxuICAgICAgICBpZih0aGlzLmdldFBvc2l0aW9uRW1wbG95ZWVzKGl0ZW0uaWQpLmxlbmd0aCkge1xcclxcbiAgICAgICAgICB0aGlzLmRlbGV0ZURlbmllZCA9IHRydWU7XFxyXFxuICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICB0aGlzLmRlbGV0ZURlbmllZCA9IGZhbHNlO1xcclxcbiAgICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gaXRlbS5pZDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGRlbGV0ZUNvbmZpcm0oKSB7XFxyXFxuICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLmVkaXRlZEluZGV4KTtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlQWxlcnQgPSBmYWxzZTtcXHJcXG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGNsb3NlICgpIHtcXHJcXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2VcXHJcXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xcclxcbiAgICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKVxcclxcbiAgICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTFcXHJcXG4gICAgICAgIH0sIDMwMClcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIHNhdmUgKCkge1xcclxcbiAgICAgICAgaWYgKHRoaXMuZWRpdGVkSW5kZXggPiAtMSkge1xcclxcbiAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLmVkaXRlZEl0ZW0pXFxyXFxuICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICB0aGlzLmFkZCh0aGlzLmVkaXRlZEl0ZW0pO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgdGhpcy5jbG9zZSgpXFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4jcG9zaXRpb25zIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tYi0yLmJ0biB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAtNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmMzNDE5MThcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cInBvc2l0aW9uc1wiPlxyXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkZWxldGVBbGVydFwiIG1heC13aWR0aD1cIjgwMHB4XCI+XHJcbiAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBkYXJrIHNsb3Q9XCJhY3RpdmF0b3JcIiBjbGFzcz1cIm1iLTJcIj7QlNC+0LHQsNCy0LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjDwvdi1idG4+XHJcbiAgICAgIDx2LWNhcmQ+XHJcbiAgICAgICAgPHYtY2FyZC10aXRsZT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj7QktC90LjQvNCw0L3QuNC1ITwvc3Bhbj5cclxuICAgICAgICA8L3YtY2FyZC10aXRsZT5cclxuICAgICAgICA8di1jYXJkLXRleHQ+XHJcbiAgICAgICAgICB7eyBkZWxldGVNc2cgfX1cclxuICAgICAgICA8L3YtY2FyZC10ZXh0PlxyXG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxyXG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVwiYmx1ZSBkYXJrZW4tMVwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cImRlbGV0ZUFsZXJ0ID0gIWRlbGV0ZUFsZXJ0XCI+0J7RgtC80LXQvdCwPC92LWJ0bj5cclxuICAgICAgICAgIDx2LWJ0biB2LXNob3c9XCIhZGVsZXRlRGVuaWVkXCIgY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgZmxhdCBAY2xpY2submF0aXZlPVwiZGVsZXRlQ29uZmlybVwiPtCj0LTQsNC70LjRgtGMPC92LWJ0bj5cclxuICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxyXG4gICAgICA8L3YtY2FyZD5cclxuICAgIDwvdi1kaWFsb2c+XHJcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1wiIG1heC13aWR0aD1cIjUwMHB4XCI+XHJcbiAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBkYXJrIHNsb3Q9XCJhY3RpdmF0b3JcIiBjbGFzcz1cIm1iLTJcIj7QlNC+0LHQsNCy0LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjDwvdi1idG4+XHJcbiAgICAgIDx2LWNhcmQ+XHJcbiAgICAgICAgPHYtY2FyZC10aXRsZT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj57eyBmb3JtVGl0bGUgfX08L3NwYW4+XHJcbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPHYtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgPHYtY29udGFpbmVyIGdyaWQtbGlzdC1tZD5cclxuICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXA+XHJcbiAgICAgICAgICAgICAgPHYtZmxleCB4czEyIHNtNj5cclxuICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcIiB2LW1vZGVsPVwiZWRpdGVkSXRlbS50aXRsZVwiPjwvdi10ZXh0LWZpZWxkPlxyXG4gICAgICAgICAgICAgIDwvdi1mbGV4PlxyXG4gICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTY+XHJcbiAgICAgICAgICAgICAgICA8di1zZWxlY3RcclxuICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ2RlcGFydG1lbnQnKVwiXHJcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJlZGl0ZWRJdGVtLmRlcGFydG1lbnRfaWRcIlxyXG4gICAgICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJjYXJkX3RyYXZlbFwiXHJcbiAgICAgICAgICAgICAgICAgIDppdGVtcz1cImRlcGFydG1lbnRzXCJcclxuICAgICAgICAgICAgICAgICAgaXRlbS10ZXh0PVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICBpdGVtLXZhbHVlPVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40LUnXVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICA+PC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICA8L3YtZmxleD5cclxuICAgICAgICAgICAgPC92LWxheW91dD5cclxuICAgICAgICAgIDwvdi1jb250YWluZXI+XHJcbiAgICAgICAgPC92LWNhcmQtdGV4dD5cclxuICAgICAgICA8di1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cclxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImJsdWUgZGFya2VuLTFcIiBmbGF0IEBjbGljay5uYXRpdmU9XCJjbG9zZVwiPkNhbmNlbDwvdi1idG4+XHJcbiAgICAgICAgICA8di1idG4gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgZmxhdCBAY2xpY2submF0aXZlPVwic2F2ZVwiPlNhdmU8L3YtYnRuPlxyXG4gICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwvdi1jYXJkPlxyXG4gICAgPC92LWRpYWxvZz5cclxuICAgIDx2LWRhdGEtdGFibGVcclxuICAgICAgOmhlYWRlcnM9XCJoZWFkZXJzXCJcclxuICAgICAgOml0ZW1zPVwiaXRlbXNcIlxyXG4gICAgICBoaWRlLWFjdGlvbnNcclxuICAgICAgY2xhc3M9XCJlbGV2YXRpb24tMVwiXHJcbiAgICA+XHJcbiAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiaXRlbXNcIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPnt7IHByb3BzLml0ZW0udGl0bGUgfX08L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj57eyBnZXREZXBhcnRtZW50TmFtZShwcm9wcy5pdGVtLmRlcGFydG1lbnRfaWQpIH19PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+e3sgZ2V0UG9zaXRpb25FbXBsb3llZXMocHJvcHMuaXRlbS5pZCkubGVuZ3RoIH19PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+XHJcbiAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cIm14LTBcIiBAY2xpY2s9XCJlZGl0SXRlbShwcm9wcy5pdGVtKVwiPlxyXG4gICAgICAgICAgICA8di1pY29uIGNvbG9yPVwidGVhbFwiPmVkaXQ8L3YtaWNvbj5cclxuICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cIm14LTBcIiBAY2xpY2s9XCJkZWxldGVJdGVtKHByb3BzLml0ZW0pXCI+XHJcbiAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJwaW5rXCI+ZGVsZXRlPC92LWljb24+XHJcbiAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibm8tZGF0YVwiPlxyXG4gICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJcIj7QntCx0L3QvtCy0LjRgtGMPC92LWJ0bj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdi1kYXRhLXRhYmxlPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1pZGRsZXdhcmU6ICdhdXRoJyxcclxuICAgIGRhdGE6ICgpID0+ICh7XHJcbiAgICAgIGRpYWxvZzogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZUFsZXJ0OiB0cnVlLFxyXG4gICAgICBkZWxldGVEZW5pZWQ6IGZhbHNlLFxyXG4gICAgICBoZWFkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ9Cd0L7QvNC10YAnLFxyXG4gICAgICAgICAgYWxpZ246ICdyaWdodCcsXHJcbiAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICB2YWx1ZTogJ2lkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1JywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAndGl0bGUnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAn0J/QvtC00YDQsNC30LTQtdC70LXQvdC40LUnLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICdkZXBhcnRtZW50JyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ9Ch0L7RgtGA0YPQtNC90LjQutC+0LInLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICdlbXBsb3llZXMnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAn0JTQtdC50YHRgtCy0LjRjycsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ3RpdGxlJywgc29ydGFibGU6IGZhbHNlIH1cclxuICAgICAgXSxcclxuICAgICAgZWRpdGVkSW5kZXg6IC0xLFxyXG4gICAgICBlZGl0ZWRJdGVtOiB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBkZXBhcnRtZW50X2lkOiAnJyxcclxuICAgICAgfSxcclxuICAgICAgZGVmYXVsdEl0ZW06IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIGRlcGFydG1lbnRfaWQ6ICcnLFxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICAgIGl0ZW1zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXHJcbiAgICAgICAgZGVwYXJ0bWVudHM6ICdkZXBhcnRtZW50cy9kZXBhcnRtZW50cycsXHJcbiAgICAgICAgZW1wbG95ZWVzOiAnZW1wbG95ZWVzL2VtcGxveWVlcydcclxuICAgICAgfSksXHJcbiAgICAgIGRlbGV0ZU1zZygpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuZGVsZXRlRGVuaWVkKSA/ICcg0JfQsCDQtNCw0L3QvdC+0Lkg0LTQvtC70LbQvdC+0YHRgtGM0Y4g0LfQsNC60YDQtdC/0LvQtdC90Ysg0YHQvtGC0YDRg9C00L3QuNC60LguINCf0L7QttCw0LvRg9C50YHRgtCwLCDRgNCw0YHQv9GA0LXQtNC10LvQuNGC0LUg0LjRhSDQvdCwINC00YDRg9Cz0LjQtSDQtNC+0LvQttC90L7RgdGC0Lgg0L/RgNC10LbQtNC1INGH0LXQvCDRg9C00LDQu9GP0YLRjCDRgtC10LrRg9GJ0YPRji4nIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyDQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDQtNCw0L3QvdGD0Y4g0LTQvtC70LbQvdC+0YHRgtGMPyc7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1UaXRsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdGVkSW5kZXggPT09IC0xID8gJ9Cd0L7QstCw0Y8g0LTQvtC70LbQvdC+0YHRgtGMJyA6ICfQmNC30LzQtdC90LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjCdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIGRpYWxvZyAodmFsKSB7XHJcbiAgICAgICAgdmFsIHx8IHRoaXMuY2xvc2UoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAuLi5tYXBBY3Rpb25zKHtcclxuICAgICAgICBhZGQ6ICdwb3NpdGlvbnMvYWRkJyxcclxuICAgICAgICB1cGRhdGU6ICdwb3NpdGlvbnMvZWRpdCcsXHJcbiAgICAgICAgcmVtb3ZlOiAncG9zaXRpb25zL3JlbW92ZScgICAgXHJcbiAgICAgIH0pLFxyXG4gICAgICBnZXREZXBhcnRtZW50TmFtZSAoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXBhcnRtZW50cy5maW5kKGVsID0+IGVsLmlkID0gaWQpLnRpdGxlXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldFBvc2l0aW9uRW1wbG95ZWVzKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1wbG95ZWVzLmZpbHRlcihlbCA9PiBlbC5wb3NpdGlvbl9pZCA9PSBpZClcclxuICAgICAgfSxcclxuICAgICAgZWRpdEl0ZW0gKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pXHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSlcclxuICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWVcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlSXRlbSAoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlQWxlcnQgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMuZ2V0UG9zaXRpb25FbXBsb3llZXMoaXRlbS5pZCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmRlbGV0ZURlbmllZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZGVsZXRlRGVuaWVkID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gaXRlbS5pZDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZUNvbmZpcm0oKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5lZGl0ZWRJbmRleCk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVBbGVydCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcclxuICAgICAgfSxcclxuICAgICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2VcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pXHJcbiAgICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTFcclxuICAgICAgICB9LCAzMDApXHJcbiAgICAgIH0sXHJcbiAgICAgIHNhdmUgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVkaXRlZEluZGV4ID4gLTEpIHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMuZWRpdGVkSXRlbSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5hZGQodGhpcy5lZGl0ZWRJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuI3Bvc2l0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG4ubWItMi5idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtNTBweDtcclxufVxyXG5cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJwb3NpdGlvbnNcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiODAwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRlbGV0ZUFsZXJ0LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGVsZXRlQWxlcnQgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRlbGV0ZUFsZXJ0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImFjdGl2YXRvclwiLCBjb2xvcjogXCJwcmltYXJ5XCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQlNC+0LHQsNCy0LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbX3ZtLl92KFwi0JLQvdC40LzQsNC90LjQtSFcIildKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uZGVsZXRlTXNnKSArIFwiXFxuICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZSBkYXJrZW4tMVwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUFsZXJ0ID0gIV92bS5kZWxldGVBbGVydFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCe0YLQvNC10L3QsFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmRlbGV0ZURlbmllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhZGVsZXRlRGVuaWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImJsdWUgZGFya2VuLTFcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVDb25maXJtKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQo9C00LDQu9C40YLRjFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNTAwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlhbG9nXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImFjdGl2YXRvclwiLCBjb2xvcjogXCJwcmltYXJ5XCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQlNC+0LHQsNCy0LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5mb3JtVGl0bGUpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImdyaWQtbGlzdC1tZFwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIHNtNjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWRpdGVkSXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZWRpdGVkSXRlbSwgXCJ0aXRsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVkaXRlZEl0ZW0udGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgc202OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiZGVwYXJ0bWVudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImNhcmRfdHJhdmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5kZXBhcnRtZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gISF2IHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWRpdGVkSXRlbS5kZXBhcnRtZW50X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGVkSXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXBhcnRtZW50X2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0ZWRJdGVtLmRlcGFydG1lbnRfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZSBkYXJrZW4tMVwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsb3NlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJibHVlIGRhcmtlbi0xXCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2F2ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1kYXRhLXRhYmxlXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMVwiLFxuICAgICAgICAgIGF0dHJzOiB7IGhlYWRlcnM6IF92bS5oZWFkZXJzLCBpdGVtczogX3ZtLml0ZW1zLCBcImhpZGUtYWN0aW9uc1wiOiBcIlwiIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5pZCkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLnRpdGxlKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXREZXBhcnRtZW50TmFtZShwcm9wcy5pdGVtLmRlcGFydG1lbnRfaWQpKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0UG9zaXRpb25FbXBsb3llZXMocHJvcHMuaXRlbS5pZCkubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm14LTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0SXRlbShwcm9wcy5pdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJ0ZWFsXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZWRpdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm14LTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVJdGVtKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcInBpbmtcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJkZWxldGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgeyBzbG90OiBcIm5vLWRhdGFcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7fSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0J7QsdC90L7QstC40YLRjFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yYzM0MTkxOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMmMzNDE5MThcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDVcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==