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
exports.push([module.i, "\n#positions[data-v-2c341918] {\r\n    position: relative;\r\n    max-width: 90%;\r\n    margin: 10px auto;\n}\n.mb-2.btn[data-v-2c341918] {\r\n    position: absolute;\r\n    bottom: -50px;\n}\r\n\r\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/positions/resources/assets/js/pages/admin/positions/List.vue"],"names":[],"mappings":";AAiLA;IACA,mBAAA;IACA,eAAA;IACA,kBAAA;CACA;AAEA;IACA,mBAAA;IACA,cAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n  <div id=\"positions\">\r\n    <v-dialog v-model=\"deleteAlert\" max-width=\"800px\">\r\n      <v-btn color=\"primary\" dark slot=\"activator\" class=\"mb-2\">Добавить должность</v-btn>\r\n      <v-card>\r\n        <v-card-title>\r\n          <span class=\"headline\">Внимание!</span>\r\n        </v-card-title>\r\n        <v-card-text>\r\n          {{ deleteMsg }}\r\n        </v-card-text>\r\n        <v-card-actions>\r\n          <v-spacer></v-spacer>\r\n          <v-btn color=\"blue darken-1\" flat @click.native=\"close\">Отмена</v-btn>\r\n          <v-btn color=\"blue darken-1\" flat @click.native=\"save\">Удалить</v-btn>\r\n        </v-card-actions>\r\n      </v-card>\r\n    </v-dialog>\r\n    <v-dialog v-model=\"dialog\" max-width=\"500px\">\r\n      <v-btn color=\"primary\" dark slot=\"activator\" class=\"mb-2\">Добавить должность</v-btn>\r\n      <v-card>\r\n        <v-card-title>\r\n          <span class=\"headline\">{{ formTitle }}</span>\r\n        </v-card-title>\r\n        <v-card-text>\r\n          <v-container grid-list-md>\r\n            <v-layout wrap>\r\n              <v-flex xs12 sm6>\r\n                <v-text-field label=\"Наименование\" v-model=\"editedItem.title\"></v-text-field>\r\n              </v-flex>\r\n              <v-flex xs12 sm6>\r\n                <v-select\r\n                  :label=\"$t('position')\"\r\n                  v-model=\"editedItem.department_id\"\r\n                  prepend-icon=\"card_travel\"\r\n                  :items=\"departments\"\r\n                  item-text=\"title\"\r\n                  item-value=\"id\"\r\n                  :rules=\"[v => !!v || 'Выберите подразделение']\"\r\n                  required\r\n                ></v-select>\r\n              </v-flex>\r\n            </v-layout>\r\n          </v-container>\r\n        </v-card-text>\r\n        <v-card-actions>\r\n          <v-spacer></v-spacer>\r\n          <v-btn color=\"blue darken-1\" flat @click.native=\"close\">Cancel</v-btn>\r\n          <v-btn color=\"blue darken-1\" flat @click.native=\"save\">Save</v-btn>\r\n        </v-card-actions>\r\n      </v-card>\r\n    </v-dialog>\r\n    <v-data-table\r\n      :headers=\"headers\"\r\n      :items=\"items\"\r\n      hide-actions\r\n      class=\"elevation-1\"\r\n    >\r\n      <template slot=\"items\" slot-scope=\"props\">\r\n        <td class=\"text-xs-right\">{{ props.item.id }}</td>\r\n        <td class=\"text-xs-right\">{{ props.item.title }}</td>\r\n        <td class=\"text-xs-right\">{{ getDepartmentName(props.item.department_id) }}</td>\r\n        <td class=\"text-xs-right\">{{ getPositionEmployees(props.item.id).length }}</td>\r\n        <td class=\"text-xs-right\">\r\n          <v-btn icon class=\"mx-0\" @click=\"editItem(props.item)\">\r\n            <v-icon color=\"teal\">edit</v-icon>\r\n          </v-btn>\r\n          <v-btn icon class=\"mx-0\" @click=\"deleteItem(props.item)\">\r\n            <v-icon color=\"pink\">delete</v-icon>\r\n          </v-btn>\r\n        </td>\r\n      </template>\r\n      <template slot=\"no-data\">\r\n        <v-btn color=\"primary\" @click=\"\">Обновить</v-btn>\r\n      </template>\r\n    </v-data-table>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import { mapGetters, mapActions } from 'vuex';\r\n\r\n  export default {\r\n    middleware: 'auth',\r\n    data: () => ({\r\n      dialog: false,\r\n      deleteAlert: true,\r\n      deleteDenied: false,\r\n      headers: [\r\n        {\r\n          text: 'Номер',\r\n          align: 'right',\r\n          sortable: false,\r\n          value: 'id'\r\n        },\r\n        { text: 'Наименование', align: 'right', value: 'title' },\r\n        { text: 'Подразделение', align: 'right', value: 'department' },\r\n        { text: 'Сотрудников', align: 'right', value: 'employees' },\r\n        { text: 'Действия', align: 'right', value: 'title', sortable: false }\r\n      ],\r\n      editedIndex: -1,\r\n      editedItem: {\r\n        id: '',\r\n        title: '',\r\n        department_id: '',\r\n      },\r\n      defaultItem: {\r\n        id: '',\r\n        title: '',\r\n        department_id: '',\r\n      }\r\n    }),\r\n    computed: {\r\n      ...mapGetters({\r\n        items: 'positions/positions',\r\n        departments: 'departments/departments',\r\n        employees: 'employees/employees'\r\n      }),\r\n      deleteMsg() {\r\n        return (this.deleteDenied) ? ' За данной должностью закреплены сотрудники. Пожалуйста, распределите их на другие должности прежде чем удалять текущую.' :\r\n                                 ' Вы действительно хотите удалить данную должность?';\r\n      },\r\n      formTitle () {\r\n        return this.editedIndex === -1 ? 'Новая должность' : 'Изменить должность'\r\n      }\r\n    },\r\n    watch: {\r\n      dialog (val) {\r\n        val || this.close()\r\n      }\r\n    },\r\n    methods: {\r\n      ...mapActions({\r\n        add: 'positions/add',\r\n        update: 'positions/edit',\r\n        remove: 'positions/remove'    \r\n      }),\r\n      getDepartmentName (id) {\r\n        return this.departments.find(el => el.id = id).title\r\n      },\r\n      getPositionEmployees(id) {\r\n        return this.employees.filter(el => el.position_id == id)\r\n      },\r\n      editItem (item) {\r\n        this.editedIndex = this.items.indexOf(item)\r\n        this.editedItem = Object.assign({}, item)\r\n        this.dialog = true\r\n      },\r\n      deleteItem (item) {\r\n        const index = this.items.indexOf(item)\r\n        if(this.getPositionEmployees(item.id).length) {\r\n          this.deleteDenied = true\r\n          console.log('denied');\r\n        }\r\n          this.deleteDenied = false\r\n          console.log('allowed');\r\n        // Удаление должности\r\n      },\r\n      close () {\r\n        this.dialog = false\r\n        setTimeout(() => {\r\n          this.editedItem = Object.assign({}, this.defaultItem)\r\n          this.editedIndex = -1\r\n        }, 300)\r\n      },\r\n      save () {\r\n        if (this.editedIndex > -1) {\r\n          this.update(this.editedItem)\r\n        } else {\r\n          this.add(this.editedItem);\r\n        }\r\n        this.close()\r\n      }\r\n    }\r\n  }\r\n</script>\r\n\r\n<style scoped>\r\n#positions {\r\n    position: relative;\r\n    max-width: 90%;\r\n    margin: 10px auto;\r\n}\r\n\r\n.mb-2.btn {\r\n    position: absolute;\r\n    bottom: -50px;\r\n}\r\n\r\n</style>"],"sourceRoot":""}]);

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
      var index = this.items.indexOf(item);
      if (this.getPositionEmployees(item.id).length) {
        this.deleteDenied = true;
        console.log('denied');
      }
      this.deleteDenied = false;
      console.log('allowed');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZT82MDg4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlPzA2ODYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlP2JiZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSx3REFBeUQsMkJBQTJCLHVCQUF1QiwwQkFBMEIsR0FBRyw4QkFBOEIs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bnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzM0MTkxOFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzM0MTkxOFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTGlzdC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTJjMzQxOTE4XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxccG9zaXRpb25zXFxcXExpc3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJjMzQxOTE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmMzNDE5MThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMzQxOTE4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjhjYmE0ZWJjXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMzQxOTE4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMzNDE5MThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yYzM0MTkxOFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jcG9zaXRpb25zW2RhdGEtdi0yYzM0MTkxOF0ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1heC13aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG59XFxuLm1iLTIuYnRuW2RhdGEtdi0yYzM0MTkxOF0ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogLTUwcHg7XFxufVxcclxcblxcclxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvd2ViL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFpTEE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiTGlzdC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBpZD1cXFwicG9zaXRpb25zXFxcIj5cXHJcXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XFxcImRlbGV0ZUFsZXJ0XFxcIiBtYXgtd2lkdGg9XFxcIjgwMHB4XFxcIj5cXHJcXG4gICAgICA8di1idG4gY29sb3I9XFxcInByaW1hcnlcXFwiIGRhcmsgc2xvdD1cXFwiYWN0aXZhdG9yXFxcIiBjbGFzcz1cXFwibWItMlxcXCI+0JTQvtCx0LDQstC40YLRjCDQtNC+0LvQttC90L7RgdGC0Yw8L3YtYnRuPlxcclxcbiAgICAgIDx2LWNhcmQ+XFxyXFxuICAgICAgICA8di1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGxpbmVcXFwiPtCS0L3QuNC80LDQvdC40LUhPC9zcGFuPlxcclxcbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICA8di1jYXJkLXRleHQ+XFxyXFxuICAgICAgICAgIHt7IGRlbGV0ZU1zZyB9fVxcclxcbiAgICAgICAgPC92LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxyXFxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cXFwiYmx1ZSBkYXJrZW4tMVxcXCIgZmxhdCBAY2xpY2submF0aXZlPVxcXCJjbG9zZVxcXCI+0J7RgtC80LXQvdCwPC92LWJ0bj5cXHJcXG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJibHVlIGRhcmtlbi0xXFxcIiBmbGF0IEBjbGljay5uYXRpdmU9XFxcInNhdmVcXFwiPtCj0LTQsNC70LjRgtGMPC92LWJ0bj5cXHJcXG4gICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgPC92LWNhcmQ+XFxyXFxuICAgIDwvdi1kaWFsb2c+XFxyXFxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVxcXCJkaWFsb2dcXFwiIG1heC13aWR0aD1cXFwiNTAwcHhcXFwiPlxcclxcbiAgICAgIDx2LWJ0biBjb2xvcj1cXFwicHJpbWFyeVxcXCIgZGFyayBzbG90PVxcXCJhY3RpdmF0b3JcXFwiIGNsYXNzPVxcXCJtYi0yXFxcIj7QlNC+0LHQsNCy0LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjDwvdi1idG4+XFxyXFxuICAgICAgPHYtY2FyZD5cXHJcXG4gICAgICAgIDx2LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkbGluZVxcXCI+e3sgZm9ybVRpdGxlIH19PC9zcGFuPlxcclxcbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICA8di1jYXJkLXRleHQ+XFxyXFxuICAgICAgICAgIDx2LWNvbnRhaW5lciBncmlkLWxpc3QtbWQ+XFxyXFxuICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXA+XFxyXFxuICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202PlxcclxcbiAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIGxhYmVsPVxcXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcXFwiIHYtbW9kZWw9XFxcImVkaXRlZEl0ZW0udGl0bGVcXFwiPjwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgICAgICAgICAgPC92LWZsZXg+XFxyXFxuICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202PlxcclxcbiAgICAgICAgICAgICAgICA8di1zZWxlY3RcXHJcXG4gICAgICAgICAgICAgICAgICA6bGFiZWw9XFxcIiR0KCdwb3NpdGlvbicpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImVkaXRlZEl0ZW0uZGVwYXJ0bWVudF9pZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICBwcmVwZW5kLWljb249XFxcImNhcmRfdHJhdmVsXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDppdGVtcz1cXFwiZGVwYXJ0bWVudHNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgaXRlbS10ZXh0PVxcXCJ0aXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICBpdGVtLXZhbHVlPVxcXCJpZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6cnVsZXM9XFxcIlt2ID0+ICEhdiB8fCAn0JLRi9Cx0LXRgNC40YLQtSDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtSddXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXFxyXFxuICAgICAgICAgICAgICAgID48L3Ytc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgPC92LWZsZXg+XFxyXFxuICAgICAgICAgICAgPC92LWxheW91dD5cXHJcXG4gICAgICAgICAgPC92LWNvbnRhaW5lcj5cXHJcXG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XFxyXFxuICAgICAgICA8di1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcclxcbiAgICAgICAgICA8di1idG4gY29sb3I9XFxcImJsdWUgZGFya2VuLTFcXFwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cXFwiY2xvc2VcXFwiPkNhbmNlbDwvdi1idG4+XFxyXFxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cXFwiYmx1ZSBkYXJrZW4tMVxcXCIgZmxhdCBAY2xpY2submF0aXZlPVxcXCJzYXZlXFxcIj5TYXZlPC92LWJ0bj5cXHJcXG4gICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgPC92LWNhcmQ+XFxyXFxuICAgIDwvdi1kaWFsb2c+XFxyXFxuICAgIDx2LWRhdGEtdGFibGVcXHJcXG4gICAgICA6aGVhZGVycz1cXFwiaGVhZGVyc1xcXCJcXHJcXG4gICAgICA6aXRlbXM9XFxcIml0ZW1zXFxcIlxcclxcbiAgICAgIGhpZGUtYWN0aW9uc1xcclxcbiAgICAgIGNsYXNzPVxcXCJlbGV2YXRpb24tMVxcXCJcXHJcXG4gICAgPlxcclxcbiAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJpdGVtc1xcXCIgc2xvdC1zY29wZT1cXFwicHJvcHNcXFwiPlxcclxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57eyBwcm9wcy5pdGVtLmlkIH19PC90ZD5cXHJcXG4gICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+e3sgcHJvcHMuaXRlbS50aXRsZSB9fTwvdGQ+XFxyXFxuICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7IGdldERlcGFydG1lbnROYW1lKHByb3BzLml0ZW0uZGVwYXJ0bWVudF9pZCkgfX08L3RkPlxcclxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57eyBnZXRQb3NpdGlvbkVtcGxveWVlcyhwcm9wcy5pdGVtLmlkKS5sZW5ndGggfX08L3RkPlxcclxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgPHYtYnRuIGljb24gY2xhc3M9XFxcIm14LTBcXFwiIEBjbGljaz1cXFwiZWRpdEl0ZW0ocHJvcHMuaXRlbSlcXFwiPlxcclxcbiAgICAgICAgICAgIDx2LWljb24gY29sb3I9XFxcInRlYWxcXFwiPmVkaXQ8L3YtaWNvbj5cXHJcXG4gICAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgICAgPHYtYnRuIGljb24gY2xhc3M9XFxcIm14LTBcXFwiIEBjbGljaz1cXFwiZGVsZXRlSXRlbShwcm9wcy5pdGVtKVxcXCI+XFxyXFxuICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cXFwicGlua1xcXCI+ZGVsZXRlPC92LWljb24+XFxyXFxuICAgICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICA8L3RkPlxcclxcbiAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIm5vLWRhdGFcXFwiPlxcclxcbiAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBAY2xpY2s9XFxcIlxcXCI+0J7QsdC90L7QstC40YLRjDwvdi1idG4+XFxyXFxuICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgPC92LWRhdGEtdGFibGU+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICBpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XFxyXFxuXFxyXFxuICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIG1pZGRsZXdhcmU6ICdhdXRoJyxcXHJcXG4gICAgZGF0YTogKCkgPT4gKHtcXHJcXG4gICAgICBkaWFsb2c6IGZhbHNlLFxcclxcbiAgICAgIGRlbGV0ZUFsZXJ0OiB0cnVlLFxcclxcbiAgICAgIGRlbGV0ZURlbmllZDogZmFsc2UsXFxyXFxuICAgICAgaGVhZGVyczogW1xcclxcbiAgICAgICAge1xcclxcbiAgICAgICAgICB0ZXh0OiAn0J3QvtC80LXRgCcsXFxyXFxuICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxcclxcbiAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXFxyXFxuICAgICAgICAgIHZhbHVlOiAnaWQnXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgeyB0ZXh0OiAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1JywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAndGl0bGUnIH0sXFxyXFxuICAgICAgICB7IHRleHQ6ICfQn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtScsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ2RlcGFydG1lbnQnIH0sXFxyXFxuICAgICAgICB7IHRleHQ6ICfQodC+0YLRgNGD0LTQvdC40LrQvtCyJywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAnZW1wbG95ZWVzJyB9LFxcclxcbiAgICAgICAgeyB0ZXh0OiAn0JTQtdC50YHRgtCy0LjRjycsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ3RpdGxlJywgc29ydGFibGU6IGZhbHNlIH1cXHJcXG4gICAgICBdLFxcclxcbiAgICAgIGVkaXRlZEluZGV4OiAtMSxcXHJcXG4gICAgICBlZGl0ZWRJdGVtOiB7XFxyXFxuICAgICAgICBpZDogJycsXFxyXFxuICAgICAgICB0aXRsZTogJycsXFxyXFxuICAgICAgICBkZXBhcnRtZW50X2lkOiAnJyxcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGRlZmF1bHRJdGVtOiB7XFxyXFxuICAgICAgICBpZDogJycsXFxyXFxuICAgICAgICB0aXRsZTogJycsXFxyXFxuICAgICAgICBkZXBhcnRtZW50X2lkOiAnJyxcXHJcXG4gICAgICB9XFxyXFxuICAgIH0pLFxcclxcbiAgICBjb21wdXRlZDoge1xcclxcbiAgICAgIC4uLm1hcEdldHRlcnMoe1xcclxcbiAgICAgICAgaXRlbXM6ICdwb3NpdGlvbnMvcG9zaXRpb25zJyxcXHJcXG4gICAgICAgIGRlcGFydG1lbnRzOiAnZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMnLFxcclxcbiAgICAgICAgZW1wbG95ZWVzOiAnZW1wbG95ZWVzL2VtcGxveWVlcydcXHJcXG4gICAgICB9KSxcXHJcXG4gICAgICBkZWxldGVNc2coKSB7XFxyXFxuICAgICAgICByZXR1cm4gKHRoaXMuZGVsZXRlRGVuaWVkKSA/ICcg0JfQsCDQtNCw0L3QvdC+0Lkg0LTQvtC70LbQvdC+0YHRgtGM0Y4g0LfQsNC60YDQtdC/0LvQtdC90Ysg0YHQvtGC0YDRg9C00L3QuNC60LguINCf0L7QttCw0LvRg9C50YHRgtCwLCDRgNCw0YHQv9GA0LXQtNC10LvQuNGC0LUg0LjRhSDQvdCwINC00YDRg9Cz0LjQtSDQtNC+0LvQttC90L7RgdGC0Lgg0L/RgNC10LbQtNC1INGH0LXQvCDRg9C00LDQu9GP0YLRjCDRgtC10LrRg9GJ0YPRji4nIDpcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnINCS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINC00LDQvdC90YPRjiDQtNC+0LvQttC90L7RgdGC0Yw/JztcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGZvcm1UaXRsZSAoKSB7XFxyXFxuICAgICAgICByZXR1cm4gdGhpcy5lZGl0ZWRJbmRleCA9PT0gLTEgPyAn0J3QvtCy0LDRjyDQtNC+0LvQttC90L7RgdGC0YwnIDogJ9CY0LfQvNC10L3QuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMJ1xcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgd2F0Y2g6IHtcXHJcXG4gICAgICBkaWFsb2cgKHZhbCkge1xcclxcbiAgICAgICAgdmFsIHx8IHRoaXMuY2xvc2UoKVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczoge1xcclxcbiAgICAgIC4uLm1hcEFjdGlvbnMoe1xcclxcbiAgICAgICAgYWRkOiAncG9zaXRpb25zL2FkZCcsXFxyXFxuICAgICAgICB1cGRhdGU6ICdwb3NpdGlvbnMvZWRpdCcsXFxyXFxuICAgICAgICByZW1vdmU6ICdwb3NpdGlvbnMvcmVtb3ZlJyAgICBcXHJcXG4gICAgICB9KSxcXHJcXG4gICAgICBnZXREZXBhcnRtZW50TmFtZSAoaWQpIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLmRlcGFydG1lbnRzLmZpbmQoZWwgPT4gZWwuaWQgPSBpZCkudGl0bGVcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGdldFBvc2l0aW9uRW1wbG95ZWVzKGlkKSB7XFxyXFxuICAgICAgICByZXR1cm4gdGhpcy5lbXBsb3llZXMuZmlsdGVyKGVsID0+IGVsLnBvc2l0aW9uX2lkID09IGlkKVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZWRpdEl0ZW0gKGl0ZW0pIHtcXHJcXG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSlcXHJcXG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pXFxyXFxuICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWVcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGRlbGV0ZUl0ZW0gKGl0ZW0pIHtcXHJcXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pXFxyXFxuICAgICAgICBpZih0aGlzLmdldFBvc2l0aW9uRW1wbG95ZWVzKGl0ZW0uaWQpLmxlbmd0aCkge1xcclxcbiAgICAgICAgICB0aGlzLmRlbGV0ZURlbmllZCA9IHRydWVcXHJcXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RlbmllZCcpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgICB0aGlzLmRlbGV0ZURlbmllZCA9IGZhbHNlXFxyXFxuICAgICAgICAgIGNvbnNvbGUubG9nKCdhbGxvd2VkJyk7XFxyXFxuICAgICAgICAvLyDQo9C00LDQu9C10L3QuNC1INC00L7Qu9C20L3QvtGB0YLQuFxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgY2xvc2UgKCkge1xcclxcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZVxcclxcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XFxyXFxuICAgICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pXFxyXFxuICAgICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMVxcclxcbiAgICAgICAgfSwgMzAwKVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgc2F2ZSAoKSB7XFxyXFxuICAgICAgICBpZiAodGhpcy5lZGl0ZWRJbmRleCA+IC0xKSB7XFxyXFxuICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMuZWRpdGVkSXRlbSlcXHJcXG4gICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgIHRoaXMuYWRkKHRoaXMuZWRpdGVkSXRlbSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICB0aGlzLmNsb3NlKClcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiNwb3NpdGlvbnMge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1heC13aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1iLTIuYnRuIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IC01MHB4O1xcclxcbn1cXHJcXG5cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yYzM0MTkxOFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGlkPVwicG9zaXRpb25zXCI+XHJcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRlbGV0ZUFsZXJ0XCIgbWF4LXdpZHRoPVwiODAwcHhcIj5cclxuICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIGRhcmsgc2xvdD1cImFjdGl2YXRvclwiIGNsYXNzPVwibWItMlwiPtCU0L7QsdCw0LLQuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMPC92LWJ0bj5cclxuICAgICAgPHYtY2FyZD5cclxuICAgICAgICA8di1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkbGluZVwiPtCS0L3QuNC80LDQvdC40LUhPC9zcGFuPlxyXG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgIHt7IGRlbGV0ZU1zZyB9fVxyXG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XHJcbiAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XHJcbiAgICAgICAgICA8di1idG4gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgZmxhdCBAY2xpY2submF0aXZlPVwiY2xvc2VcIj7QntGC0LzQtdC90LA8L3YtYnRuPlxyXG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVwiYmx1ZSBkYXJrZW4tMVwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cInNhdmVcIj7Qo9C00LDQu9C40YLRjDwvdi1idG4+XHJcbiAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cclxuICAgICAgPC92LWNhcmQ+XHJcbiAgICA8L3YtZGlhbG9nPlxyXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiBtYXgtd2lkdGg9XCI1MDBweFwiPlxyXG4gICAgICA8di1idG4gY29sb3I9XCJwcmltYXJ5XCIgZGFyayBzbG90PVwiYWN0aXZhdG9yXCIgY2xhc3M9XCJtYi0yXCI+0JTQvtCx0LDQstC40YLRjCDQtNC+0LvQttC90L7RgdGC0Yw8L3YtYnRuPlxyXG4gICAgICA8di1jYXJkPlxyXG4gICAgICAgIDx2LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+e3sgZm9ybVRpdGxlIH19PC9zcGFuPlxyXG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgIDx2LWNvbnRhaW5lciBncmlkLWxpc3QtbWQ+XHJcbiAgICAgICAgICAgIDx2LWxheW91dCB3cmFwPlxyXG4gICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTY+XHJcbiAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIGxhYmVsPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgdi1tb2RlbD1cImVkaXRlZEl0ZW0udGl0bGVcIj48L3YtdGV4dC1maWVsZD5cclxuICAgICAgICAgICAgICA8L3YtZmxleD5cclxuICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202PlxyXG4gICAgICAgICAgICAgICAgPHYtc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdwb3NpdGlvbicpXCJcclxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImVkaXRlZEl0ZW0uZGVwYXJ0bWVudF9pZFwiXHJcbiAgICAgICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cImNhcmRfdHJhdmVsXCJcclxuICAgICAgICAgICAgICAgICAgOml0ZW1zPVwiZGVwYXJ0bWVudHNcIlxyXG4gICAgICAgICAgICAgICAgICBpdGVtLXRleHQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW0tdmFsdWU9XCJpZFwiXHJcbiAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlt2ID0+ICEhdiB8fCAn0JLRi9Cx0LXRgNC40YLQtSDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtSddXCJcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgID48L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvdi1mbGV4PlxyXG4gICAgICAgICAgICA8L3YtbGF5b3V0PlxyXG4gICAgICAgICAgPC92LWNvbnRhaW5lcj5cclxuICAgICAgICA8L3YtY2FyZC10ZXh0PlxyXG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxyXG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVwiYmx1ZSBkYXJrZW4tMVwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cImNsb3NlXCI+Q2FuY2VsPC92LWJ0bj5cclxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImJsdWUgZGFya2VuLTFcIiBmbGF0IEBjbGljay5uYXRpdmU9XCJzYXZlXCI+U2F2ZTwvdi1idG4+XHJcbiAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cclxuICAgICAgPC92LWNhcmQ+XHJcbiAgICA8L3YtZGlhbG9nPlxyXG4gICAgPHYtZGF0YS10YWJsZVxyXG4gICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxyXG4gICAgICA6aXRlbXM9XCJpdGVtc1wiXHJcbiAgICAgIGhpZGUtYWN0aW9uc1xyXG4gICAgICBjbGFzcz1cImVsZXZhdGlvbi0xXCJcclxuICAgID5cclxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJpdGVtc1wiIHNsb3Qtc2NvcGU9XCJwcm9wc1wiPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj57eyBwcm9wcy5pdGVtLmlkIH19PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+e3sgcHJvcHMuaXRlbS50aXRsZSB9fTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPnt7IGdldERlcGFydG1lbnROYW1lKHByb3BzLml0ZW0uZGVwYXJ0bWVudF9pZCkgfX08L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj57eyBnZXRQb3NpdGlvbkVtcGxveWVlcyhwcm9wcy5pdGVtLmlkKS5sZW5ndGggfX08L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj5cclxuICAgICAgICAgIDx2LWJ0biBpY29uIGNsYXNzPVwibXgtMFwiIEBjbGljaz1cImVkaXRJdGVtKHByb3BzLml0ZW0pXCI+XHJcbiAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJ0ZWFsXCI+ZWRpdDwvdi1pY29uPlxyXG4gICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgIDx2LWJ0biBpY29uIGNsYXNzPVwibXgtMFwiIEBjbGljaz1cImRlbGV0ZUl0ZW0ocHJvcHMuaXRlbSlcIj5cclxuICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInBpbmtcIj5kZWxldGU8L3YtaWNvbj5cclxuICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJuby1kYXRhXCI+XHJcbiAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIlwiPtCe0LHQvdC+0LLQuNGC0Yw8L3YtYnRuPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC92LWRhdGEtdGFibGU+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4JztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbWlkZGxld2FyZTogJ2F1dGgnLFxyXG4gICAgZGF0YTogKCkgPT4gKHtcclxuICAgICAgZGlhbG9nOiBmYWxzZSxcclxuICAgICAgZGVsZXRlQWxlcnQ6IHRydWUsXHJcbiAgICAgIGRlbGV0ZURlbmllZDogZmFsc2UsXHJcbiAgICAgIGhlYWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0J3QvtC80LXRgCcsXHJcbiAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcclxuICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHZhbHVlOiAnaWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHRleHQ6ICfQndCw0LjQvNC10L3QvtCy0LDQvdC40LUnLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICd0aXRsZScgfSxcclxuICAgICAgICB7IHRleHQ6ICfQn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtScsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ2RlcGFydG1lbnQnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAn0KHQvtGC0YDRg9C00L3QuNC60L7QsicsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ2VtcGxveWVlcycgfSxcclxuICAgICAgICB7IHRleHQ6ICfQlNC10LnRgdGC0LLQuNGPJywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAndGl0bGUnLCBzb3J0YWJsZTogZmFsc2UgfVxyXG4gICAgICBdLFxyXG4gICAgICBlZGl0ZWRJbmRleDogLTEsXHJcbiAgICAgIGVkaXRlZEl0ZW06IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIGRlcGFydG1lbnRfaWQ6ICcnLFxyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0SXRlbToge1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgZGVwYXJ0bWVudF9pZDogJycsXHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgLi4ubWFwR2V0dGVycyh7XHJcbiAgICAgICAgaXRlbXM6ICdwb3NpdGlvbnMvcG9zaXRpb25zJyxcclxuICAgICAgICBkZXBhcnRtZW50czogJ2RlcGFydG1lbnRzL2RlcGFydG1lbnRzJyxcclxuICAgICAgICBlbXBsb3llZXM6ICdlbXBsb3llZXMvZW1wbG95ZWVzJ1xyXG4gICAgICB9KSxcclxuICAgICAgZGVsZXRlTXNnKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5kZWxldGVEZW5pZWQpID8gJyDQl9CwINC00LDQvdC90L7QuSDQtNC+0LvQttC90L7RgdGC0YzRjiDQt9Cw0LrRgNC10L/Qu9C10L3RiyDRgdC+0YLRgNGD0LTQvdC40LrQuC4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINGA0LDRgdC/0YDQtdC00LXQu9C40YLQtSDQuNGFINC90LAg0LTRgNGD0LPQuNC1INC00L7Qu9C20L3QvtGB0YLQuCDQv9GA0LXQttC00LUg0YfQtdC8INGD0LTQsNC70Y/RgtGMINGC0LXQutGD0YnRg9GOLicgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnINCS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINC00LDQvdC90YPRjiDQtNC+0LvQttC90L7RgdGC0Yw/JztcclxuICAgICAgfSxcclxuICAgICAgZm9ybVRpdGxlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lZGl0ZWRJbmRleCA9PT0gLTEgPyAn0J3QvtCy0LDRjyDQtNC+0LvQttC90L7RgdGC0YwnIDogJ9CY0LfQvNC10L3QuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgZGlhbG9nICh2YWwpIHtcclxuICAgICAgICB2YWwgfHwgdGhpcy5jbG9zZSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIC4uLm1hcEFjdGlvbnMoe1xyXG4gICAgICAgIGFkZDogJ3Bvc2l0aW9ucy9hZGQnLFxyXG4gICAgICAgIHVwZGF0ZTogJ3Bvc2l0aW9ucy9lZGl0JyxcclxuICAgICAgICByZW1vdmU6ICdwb3NpdGlvbnMvcmVtb3ZlJyAgICBcclxuICAgICAgfSksXHJcbiAgICAgIGdldERlcGFydG1lbnROYW1lIChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlcGFydG1lbnRzLmZpbmQoZWwgPT4gZWwuaWQgPSBpZCkudGl0bGVcclxuICAgICAgfSxcclxuICAgICAgZ2V0UG9zaXRpb25FbXBsb3llZXMoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbXBsb3llZXMuZmlsdGVyKGVsID0+IGVsLnBvc2l0aW9uX2lkID09IGlkKVxyXG4gICAgICB9LFxyXG4gICAgICBlZGl0SXRlbSAoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSlcclxuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKVxyXG4gICAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBkZWxldGVJdGVtIChpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSlcclxuICAgICAgICBpZih0aGlzLmdldFBvc2l0aW9uRW1wbG95ZWVzKGl0ZW0uaWQpLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5kZWxldGVEZW5pZWQgPSB0cnVlXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGVuaWVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5kZWxldGVEZW5pZWQgPSBmYWxzZVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2FsbG93ZWQnKTtcclxuICAgICAgICAvLyDQo9C00LDQu9C10L3QuNC1INC00L7Qu9C20L3QvtGB0YLQuFxyXG4gICAgICB9LFxyXG4gICAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSlcclxuICAgICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMVxyXG4gICAgICAgIH0sIDMwMClcclxuICAgICAgfSxcclxuICAgICAgc2F2ZSAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWRpdGVkSW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5lZGl0ZWRJdGVtKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmFkZCh0aGlzLmVkaXRlZEl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsb3NlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4jcG9zaXRpb25zIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbi5tYi0yLmJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC01MHB4O1xyXG59XHJcblxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcInBvc2l0aW9uc1wiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI4MDBweFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVsZXRlQWxlcnQsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kZWxldGVBbGVydCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVsZXRlQWxlcnRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiYWN0aXZhdG9yXCIsIGNvbG9yOiBcInByaW1hcnlcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcItCU0L7QsdCw0LLQuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtfdm0uX3YoXCLQktC90LjQvNCw0L3QuNC1IVwiKV0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5kZWxldGVNc2cpICsgXCJcXG4gICAgICBcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJibHVlIGRhcmtlbi0xXCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xvc2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCe0YLQvNC10L3QsFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImJsdWUgZGFya2VuLTFcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zYXZlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQo9C00LDQu9C40YLRjFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNTAwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlhbG9nXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImFjdGl2YXRvclwiLCBjb2xvcjogXCJwcmltYXJ5XCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQlNC+0LHQsNCy0LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5mb3JtVGl0bGUpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImdyaWQtbGlzdC1tZFwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIHNtNjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWRpdGVkSXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZWRpdGVkSXRlbSwgXCJ0aXRsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVkaXRlZEl0ZW0udGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgc202OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicG9zaXRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJjYXJkX3RyYXZlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uZGVwYXJ0bWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhdiB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40LVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0uZGVwYXJ0bWVudF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRlZEl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVwYXJ0bWVudF9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZWRpdGVkSXRlbS5kZXBhcnRtZW50X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImJsdWUgZGFya2VuLTFcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jbG9zZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZSBkYXJrZW4tMVwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNhdmUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGF0YS10YWJsZVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWxldmF0aW9uLTFcIixcbiAgICAgICAgICBhdHRyczogeyBoZWFkZXJzOiBfdm0uaGVhZGVycywgaXRlbXM6IF92bS5pdGVtcywgXCJoaWRlLWFjdGlvbnNcIjogXCJcIiB9LFxuICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiaXRlbXNcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uaWQpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS50aXRsZSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0RGVwYXJ0bWVudE5hbWUocHJvcHMuaXRlbS5kZXBhcnRtZW50X2lkKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldFBvc2l0aW9uRW1wbG95ZWVzKHByb3BzLml0ZW0uaWQpLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJteC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdEl0ZW0ocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwidGVhbFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVkaXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJteC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlSXRlbShwcm9wcy5pdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJwaW5rXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZGVsZXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgICAgIHsgc2xvdDogXCJuby1kYXRhXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge30gfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcItCe0LHQvdC+0LLQuNGC0YxcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMmMzNDE5MThcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTJjMzQxOTE4XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJzb3VyY2VSb290IjoiIn0=