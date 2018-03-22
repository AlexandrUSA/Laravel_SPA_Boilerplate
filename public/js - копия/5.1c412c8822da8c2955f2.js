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
exports.push([module.i, "\n#positions[data-v-2c341918] {\r\n    position: relative;\r\n    max-width: 90%;\r\n    margin: 10px auto;\n}\n.mb-2.btn[data-v-2c341918] {\r\n    position: absolute;\r\n    bottom: -50px;\n}\r\n\r\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/positions/resources/assets/js/pages/admin/positions/List.vue"],"names":[],"mappings":";AAqLA;IACA,mBAAA;IACA,eAAA;IACA,kBAAA;CACA;AAEA;IACA,mBAAA;IACA,cAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n  <div id=\"positions\">\r\n<!--     <v-dialog v-model=\"deleteAlert\" max-width=\"800px\">\r\n      <v-btn color=\"primary\" dark slot=\"activator\" class=\"mb-2\">Добавить должность</v-btn>\r\n      <v-card>\r\n        <v-card-title>\r\n          <span class=\"headline\">Внимание!</span>\r\n        </v-card-title>\r\n        <v-card-text>\r\n          {{ deleteMsg }}\r\n        </v-card-text>\r\n        <v-card-actions>\r\n          <v-spacer></v-spacer>\r\n          <v-btn color=\"blue darken-1\" flat @click.native=\"deleteAlert = !deleteAlert\">Отмена</v-btn>\r\n          <v-btn v-show=\"!deleteDenied\" color=\"blue darken-1\" flat @click.native=\"deleteConfirm\">Удалить</v-btn>\r\n        </v-card-actions>\r\n      </v-card>\r\n    </v-dialog> -->\r\n    <v-dialog v-model=\"dialog\" max-width=\"500px\">\r\n      <v-btn color=\"primary\" dark slot=\"activator\" class=\"mb-2\">Добавить должность</v-btn>\r\n      <v-card>\r\n        <v-card-title>\r\n          <span class=\"headline\">{{ formTitle }}</span>\r\n        </v-card-title>\r\n        <v-card-text>\r\n          <v-container grid-list-md>\r\n            <v-layout wrap>\r\n              <v-flex xs12 sm6>\r\n                <v-text-field label=\"Наименование\" v-model=\"editedItem.title\"></v-text-field>\r\n              </v-flex>\r\n              <v-flex xs12 sm6>\r\n                <v-select\r\n                  :label=\"$t('department')\"\r\n                  v-model=\"editedItem.department_id\"\r\n                  prepend-icon=\"card_travel\"\r\n                  :items=\"departments\"\r\n                  item-text=\"title\"\r\n                  item-value=\"id\"\r\n                  :rules=\"[v => !!v || 'Выберите подразделение']\"\r\n                  required\r\n                ></v-select>\r\n              </v-flex>\r\n            </v-layout>\r\n          </v-container>\r\n        </v-card-text>\r\n        <v-card-actions>\r\n          <v-spacer></v-spacer>\r\n          <v-btn color=\"blue darken-1\" flat @click.native=\"close\">Cancel</v-btn>\r\n          <v-btn color=\"blue darken-1\" flat @click.native=\"save\">Save</v-btn>\r\n        </v-card-actions>\r\n      </v-card>\r\n    </v-dialog>\r\n<!--     <v-data-table\r\n      :headers=\"headers\"\r\n      :items=\"items\"\r\n      hide-actions\r\n      class=\"elevation-1\"\r\n    >\r\n      <template slot=\"items\" slot-scope=\"props\">\r\n        <td class=\"text-xs-right\">{{ props.item.id }}</td>\r\n        <td class=\"text-xs-right\">{{ props.item.title }}</td>\r\n        <td class=\"text-xs-right\">{{ getDepartmentName(props.item.department_id) }}</td>\r\n        <td class=\"text-xs-right\">{{ getPositionEmployees(props.item.id).length }}</td>\r\n        <td class=\"text-xs-right\">\r\n          <v-btn icon class=\"mx-0\" @click=\"editItem(props.item)\">\r\n            <v-icon color=\"teal\">edit</v-icon>\r\n          </v-btn>\r\n          <v-btn icon class=\"mx-0\" @click=\"deleteItem(props.item)\">\r\n            <v-icon color=\"pink\">delete</v-icon>\r\n          </v-btn>\r\n        </td>\r\n      </template>\r\n      <template slot=\"no-data\">\r\n        <v-btn color=\"primary\" @click=\"\">Обновить</v-btn>\r\n      </template>\r\n    </v-data-table> -->\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import { mapGetters, mapActions } from 'vuex';\r\n\r\n  export default {\r\n    middleware: 'auth',\r\n    data: () => ({\r\n      dialog: false,\r\n      deleteAlert: false,\r\n      deleteDenied: false,\r\n      headers: [\r\n        {\r\n          text: 'Номер',\r\n          align: 'right',\r\n          sortable: false,\r\n          value: 'id'\r\n        },\r\n        { text: 'Наименование', align: 'right', value: 'title' },\r\n        { text: 'Подразделение', align: 'right', value: 'department' },\r\n        { text: 'Сотрудников', align: 'right', value: 'employees' },\r\n        { text: 'Действия', align: 'right', value: 'title', sortable: false }\r\n      ],\r\n      editedIndex: -1,\r\n      editedItem: {\r\n        id: '',\r\n        title: '',\r\n        department_id: '',\r\n      },\r\n      defaultItem: {\r\n        id: '',\r\n        title: '',\r\n        department_id: '',\r\n      }\r\n    }),\r\n    computed: {\r\n      ...mapGetters({\r\n        items: 'positions/positions',\r\n        departments: 'departments/departments',\r\n        employees: 'employees/employees'\r\n      }),\r\n      deleteMsg() {\r\n        return (this.deleteDenied) ? ' За данной должностью закреплены сотрудники. Пожалуйста, распределите их на другие должности прежде чем удалять текущую.' :\r\n                                 ' Вы действительно хотите удалить данную должность?';\r\n      },\r\n      formTitle () {\r\n        return this.editedIndex === -1 ? 'Новая должность' : 'Изменить должность'\r\n      }\r\n    },\r\n    watch: {\r\n      dialog (val) {\r\n        val || this.close()\r\n      }\r\n    },\r\n    methods: {\r\n      ...mapActions({\r\n        add: 'positions/add',\r\n        update: 'positions/edit',\r\n        remove: 'positions/remove'    \r\n      }),\r\n      getDepartmentName (id) {\r\n        return this.departments.find(el => el.id = id).title\r\n      },\r\n      getPositionEmployees(id) {\r\n        return this.employees.filter(el => el.position_id == id)\r\n      },\r\n      editItem (item) {\r\n        this.editedIndex = this.items.indexOf(item)\r\n        this.editedItem = Object.assign({}, item)\r\n        this.dialog = true\r\n      },\r\n      deleteItem (item) {\r\n        this.deleteAlert = true;\r\n        if(this.getPositionEmployees(item.id).length) {\r\n          this.deleteDenied = true;\r\n        } else {\r\n          this.deleteDenied = false;\r\n          this.editedIndex = item.id;\r\n        }\r\n      },\r\n      deleteConfirm() {\r\n        this.remove(this.editedIndex);\r\n        this.deleteAlert = false;\r\n        this.editedIndex = -1;\r\n      },\r\n      close () {\r\n        this.dialog = false\r\n        setTimeout(() => {\r\n          this.editedItem = Object.assign({}, this.defaultItem)\r\n          this.editedIndex = -1\r\n        }, 300)\r\n      },\r\n      save () {\r\n        if (this.editedIndex > -1) {\r\n          this.update(this.editedItem)\r\n        } else {\r\n          this.add(this.editedItem);\r\n        }\r\n        this.close()\r\n      }\r\n    }\r\n  }\r\n</script>\r\n\r\n<style scoped>\r\n#positions {\r\n    position: relative;\r\n    max-width: 90%;\r\n    margin: 10px auto;\r\n}\r\n\r\n.mb-2.btn {\r\n    position: absolute;\r\n    bottom: -50px;\r\n}\r\n\r\n</style>"],"sourceRoot":""}]);

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
      deleteAlert: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZT82MDg4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlPzA2ODYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlP2JiZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSx3REFBeUQsMkJBQTJCLHVCQUF1QiwwQkFBMEIsR0FBRyw4QkFBOEIsMkJBQTJCLHNCQUFzQixHQUFHLGdCQUFnQixzS0FBc0ssTUFBTSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLCtaQUErWixhQUFhLHluQkFBeW5CLGFBQWEsZzVDQUFnNUMsaUJBQWlCLCtDQUErQyxvQkFBb0IsK0NBQStDLCtDQUErQywrQ0FBK0MsOENBQThDLDRrQkFBNGtCLHlCQUF5QixhQUFhLDBCQUEwQixpREFBaUQsb0hBQW9ILDZIQUE2SCxjQUFjLHVEQUF1RCxjQUFjLDZEQUE2RCxjQUFjLDBEQUEwRCxjQUFjLG9FQUFvRSw2REFBNkQsa0ZBQWtGLHlCQUF5QixrRkFBa0YsU0FBUyxxQkFBcUIseUJBQXlCLG1KQUFtSix5QkFBeUIsK1BBQStQLFdBQVcseUJBQXlCLGdHQUFnRyxTQUFTLGlCQUFpQix3QkFBd0IsMENBQTBDLFNBQVMsbUJBQW1CLHlCQUF5QiwySEFBMkgsb0NBQW9DLDJFQUEyRSxxQ0FBcUMsK0VBQStFLDRCQUE0QixxR0FBcUcsZ0RBQWdELDhCQUE4QixvQ0FBb0MsMkRBQTJELHVDQUF1QyxhQUFhLE9BQU8sd0NBQXdDLHlDQUF5QyxhQUFhLFdBQVcsNEJBQTRCLDBDQUEwQyxxQ0FBcUMsa0NBQWtDLFdBQVcscUJBQXFCLDZEQUE2RCxnREFBZ0QsbUVBQW1FLGlCQUFpQixvQkFBb0Isd0NBQXdDLHVEQUF1RCxPQUFPLHdDQUF3QyxhQUFhLG1DQUFtQyxTQUFTLE9BQU8sbURBQW1ELDJCQUEyQix1QkFBdUIsMEJBQTBCLEtBQUssbUJBQW1CLDJCQUEyQixzQkFBc0IsS0FBSyxtQ0FBbUM7O0FBRS85Tjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDd0VBOztBQUVBO2NBRUE7OztjQUVBO21CQUNBO29CQUNBOztjQUdBO2VBQ0E7a0JBQ0E7ZUFFQTtBQUxBLE9BREEsaURBT0EsMkRBQ0EsOERBQ0EsNkVBRUE7b0JBQ0E7O1lBRUE7ZUFDQTt1QkFFQTtBQUpBOztZQU1BO2VBQ0E7dUJBR0E7QUFMQTtBQXRCQTs7QUE0QkE7V0FFQTtpQkFDQTtlQUVBO0FBSkE7b0NBS0E7aUNBQ0EsNkhBQ0E7QUFDQTtvQ0FDQTsyREFDQTtBQUVBOzs7aUNBRUE7a0JBQ0E7QUFFQTtBQUpBO0FBS0E7U0FFQTtZQUNBO1lBRUE7QUFKQTtzREFLQTs7O1NBQ0E7QUFDQTs0REFDQTs7aUNBQ0E7O0FBQ0E7c0NBQ0E7NENBQ0E7MENBQ0E7b0JBQ0E7QUFDQTswQ0FDQTt5QkFDQTtxREFDQTs0QkFDQTthQUNBOzRCQUNBO2dDQUNBO0FBQ0E7QUFDQTs0Q0FDQTt1QkFDQTt5QkFDQTswQkFDQTtBQUNBOztBQUNBOztvQkFDQTs2QkFDQTttREFDQTs2QkFDQTtTQUNBO0FBQ0E7MEJBQ0E7aUNBQ0E7eUJBQ0E7YUFDQTtzQkFDQTtBQUNBO1dBQ0E7QUFFQTs7QUEvRkEsRzs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsa0JBQWtCLEVBQUU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBZ0Q7QUFDdEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLHFCQUFxQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixTQUFTLFdBQVcsRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsU0FBUyxvQkFBb0IsRUFBRTtBQUM1RDtBQUNBO0FBQ0Esd0NBQXdDLHdCQUF3QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixTQUFTLG9CQUFvQixFQUFFO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUNBQW1DO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy81LjFjNDEyYzg4MjJkYThjMjk1NWYyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzM0MTkxOFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzM0MTkxOFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTGlzdC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTJjMzQxOTE4XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxccG9zaXRpb25zXFxcXExpc3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJjMzQxOTE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmMzNDE5MThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMzQxOTE4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjhjYmE0ZWJjXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMzQxOTE4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMzNDE5MThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yYzM0MTkxOFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jcG9zaXRpb25zW2RhdGEtdi0yYzM0MTkxOF0ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1heC13aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG59XFxuLm1iLTIuYnRuW2RhdGEtdi0yYzM0MTkxOF0ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogLTUwcHg7XFxufVxcclxcblxcclxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvd2ViL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFxTEE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiTGlzdC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBpZD1cXFwicG9zaXRpb25zXFxcIj5cXHJcXG48IS0tICAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwiZGVsZXRlQWxlcnRcXFwiIG1heC13aWR0aD1cXFwiODAwcHhcXFwiPlxcclxcbiAgICAgIDx2LWJ0biBjb2xvcj1cXFwicHJpbWFyeVxcXCIgZGFyayBzbG90PVxcXCJhY3RpdmF0b3JcXFwiIGNsYXNzPVxcXCJtYi0yXFxcIj7QlNC+0LHQsNCy0LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjDwvdi1idG4+XFxyXFxuICAgICAgPHYtY2FyZD5cXHJcXG4gICAgICAgIDx2LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkbGluZVxcXCI+0JLQvdC40LzQsNC90LjQtSE8L3NwYW4+XFxyXFxuICAgICAgICA8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgIDx2LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAge3sgZGVsZXRlTXNnIH19XFxyXFxuICAgICAgICA8L3YtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxcclxcbiAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cXHJcXG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJibHVlIGRhcmtlbi0xXFxcIiBmbGF0IEBjbGljay5uYXRpdmU9XFxcImRlbGV0ZUFsZXJ0ID0gIWRlbGV0ZUFsZXJ0XFxcIj7QntGC0LzQtdC90LA8L3YtYnRuPlxcclxcbiAgICAgICAgICA8di1idG4gdi1zaG93PVxcXCIhZGVsZXRlRGVuaWVkXFxcIiBjb2xvcj1cXFwiYmx1ZSBkYXJrZW4tMVxcXCIgZmxhdCBAY2xpY2submF0aXZlPVxcXCJkZWxldGVDb25maXJtXFxcIj7Qo9C00LDQu9C40YLRjDwvdi1idG4+XFxyXFxuICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxcclxcbiAgICAgIDwvdi1jYXJkPlxcclxcbiAgICA8L3YtZGlhbG9nPiAtLT5cXHJcXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XFxcImRpYWxvZ1xcXCIgbWF4LXdpZHRoPVxcXCI1MDBweFxcXCI+XFxyXFxuICAgICAgPHYtYnRuIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBkYXJrIHNsb3Q9XFxcImFjdGl2YXRvclxcXCIgY2xhc3M9XFxcIm1iLTJcXFwiPtCU0L7QsdCw0LLQuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMPC92LWJ0bj5cXHJcXG4gICAgICA8di1jYXJkPlxcclxcbiAgICAgICAgPHYtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRsaW5lXFxcIj57eyBmb3JtVGl0bGUgfX08L3NwYW4+XFxyXFxuICAgICAgICA8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgIDx2LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgPHYtY29udGFpbmVyIGdyaWQtbGlzdC1tZD5cXHJcXG4gICAgICAgICAgICA8di1sYXlvdXQgd3JhcD5cXHJcXG4gICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTY+XFxyXFxuICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XFxcItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtVxcXCIgdi1tb2RlbD1cXFwiZWRpdGVkSXRlbS50aXRsZVxcXCI+PC92LXRleHQtZmllbGQ+XFxyXFxuICAgICAgICAgICAgICA8L3YtZmxleD5cXHJcXG4gICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTY+XFxyXFxuICAgICAgICAgICAgICAgIDx2LXNlbGVjdFxcclxcbiAgICAgICAgICAgICAgICAgIDpsYWJlbD1cXFwiJHQoJ2RlcGFydG1lbnQnKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJlZGl0ZWRJdGVtLmRlcGFydG1lbnRfaWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVxcXCJjYXJkX3RyYXZlbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6aXRlbXM9XFxcImRlcGFydG1lbnRzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIGl0ZW0tdGV4dD1cXFwidGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgaXRlbS12YWx1ZT1cXFwiaWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOnJ1bGVzPVxcXCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40LUnXVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxcclxcbiAgICAgICAgICAgICAgICA+PC92LXNlbGVjdD5cXHJcXG4gICAgICAgICAgICAgIDwvdi1mbGV4PlxcclxcbiAgICAgICAgICAgIDwvdi1sYXlvdXQ+XFxyXFxuICAgICAgICAgIDwvdi1jb250YWluZXI+XFxyXFxuICAgICAgICA8L3YtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxcclxcbiAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cXHJcXG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJibHVlIGRhcmtlbi0xXFxcIiBmbGF0IEBjbGljay5uYXRpdmU9XFxcImNsb3NlXFxcIj5DYW5jZWw8L3YtYnRuPlxcclxcbiAgICAgICAgICA8di1idG4gY29sb3I9XFxcImJsdWUgZGFya2VuLTFcXFwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cXFwic2F2ZVxcXCI+U2F2ZTwvdi1idG4+XFxyXFxuICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxcclxcbiAgICAgIDwvdi1jYXJkPlxcclxcbiAgICA8L3YtZGlhbG9nPlxcclxcbjwhLS0gICAgIDx2LWRhdGEtdGFibGVcXHJcXG4gICAgICA6aGVhZGVycz1cXFwiaGVhZGVyc1xcXCJcXHJcXG4gICAgICA6aXRlbXM9XFxcIml0ZW1zXFxcIlxcclxcbiAgICAgIGhpZGUtYWN0aW9uc1xcclxcbiAgICAgIGNsYXNzPVxcXCJlbGV2YXRpb24tMVxcXCJcXHJcXG4gICAgPlxcclxcbiAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJpdGVtc1xcXCIgc2xvdC1zY29wZT1cXFwicHJvcHNcXFwiPlxcclxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57eyBwcm9wcy5pdGVtLmlkIH19PC90ZD5cXHJcXG4gICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+e3sgcHJvcHMuaXRlbS50aXRsZSB9fTwvdGQ+XFxyXFxuICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7IGdldERlcGFydG1lbnROYW1lKHByb3BzLml0ZW0uZGVwYXJ0bWVudF9pZCkgfX08L3RkPlxcclxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57eyBnZXRQb3NpdGlvbkVtcGxveWVlcyhwcm9wcy5pdGVtLmlkKS5sZW5ndGggfX08L3RkPlxcclxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgPHYtYnRuIGljb24gY2xhc3M9XFxcIm14LTBcXFwiIEBjbGljaz1cXFwiZWRpdEl0ZW0ocHJvcHMuaXRlbSlcXFwiPlxcclxcbiAgICAgICAgICAgIDx2LWljb24gY29sb3I9XFxcInRlYWxcXFwiPmVkaXQ8L3YtaWNvbj5cXHJcXG4gICAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgICAgPHYtYnRuIGljb24gY2xhc3M9XFxcIm14LTBcXFwiIEBjbGljaz1cXFwiZGVsZXRlSXRlbShwcm9wcy5pdGVtKVxcXCI+XFxyXFxuICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cXFwicGlua1xcXCI+ZGVsZXRlPC92LWljb24+XFxyXFxuICAgICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICA8L3RkPlxcclxcbiAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIm5vLWRhdGFcXFwiPlxcclxcbiAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBAY2xpY2s9XFxcIlxcXCI+0J7QsdC90L7QstC40YLRjDwvdi1idG4+XFxyXFxuICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgPC92LWRhdGEtdGFibGU+IC0tPlxcclxcbiAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xcclxcblxcclxcbiAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICBtaWRkbGV3YXJlOiAnYXV0aCcsXFxyXFxuICAgIGRhdGE6ICgpID0+ICh7XFxyXFxuICAgICAgZGlhbG9nOiBmYWxzZSxcXHJcXG4gICAgICBkZWxldGVBbGVydDogZmFsc2UsXFxyXFxuICAgICAgZGVsZXRlRGVuaWVkOiBmYWxzZSxcXHJcXG4gICAgICBoZWFkZXJzOiBbXFxyXFxuICAgICAgICB7XFxyXFxuICAgICAgICAgIHRleHQ6ICfQndC+0LzQtdGAJyxcXHJcXG4gICAgICAgICAgYWxpZ246ICdyaWdodCcsXFxyXFxuICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcXHJcXG4gICAgICAgICAgdmFsdWU6ICdpZCdcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB7IHRleHQ6ICfQndCw0LjQvNC10L3QvtCy0LDQvdC40LUnLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICd0aXRsZScgfSxcXHJcXG4gICAgICAgIHsgdGV4dDogJ9Cf0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1JywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAnZGVwYXJ0bWVudCcgfSxcXHJcXG4gICAgICAgIHsgdGV4dDogJ9Ch0L7RgtGA0YPQtNC90LjQutC+0LInLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICdlbXBsb3llZXMnIH0sXFxyXFxuICAgICAgICB7IHRleHQ6ICfQlNC10LnRgdGC0LLQuNGPJywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAndGl0bGUnLCBzb3J0YWJsZTogZmFsc2UgfVxcclxcbiAgICAgIF0sXFxyXFxuICAgICAgZWRpdGVkSW5kZXg6IC0xLFxcclxcbiAgICAgIGVkaXRlZEl0ZW06IHtcXHJcXG4gICAgICAgIGlkOiAnJyxcXHJcXG4gICAgICAgIHRpdGxlOiAnJyxcXHJcXG4gICAgICAgIGRlcGFydG1lbnRfaWQ6ICcnLFxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVmYXVsdEl0ZW06IHtcXHJcXG4gICAgICAgIGlkOiAnJyxcXHJcXG4gICAgICAgIHRpdGxlOiAnJyxcXHJcXG4gICAgICAgIGRlcGFydG1lbnRfaWQ6ICcnLFxcclxcbiAgICAgIH1cXHJcXG4gICAgfSksXFxyXFxuICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgLi4ubWFwR2V0dGVycyh7XFxyXFxuICAgICAgICBpdGVtczogJ3Bvc2l0aW9ucy9wb3NpdGlvbnMnLFxcclxcbiAgICAgICAgZGVwYXJ0bWVudHM6ICdkZXBhcnRtZW50cy9kZXBhcnRtZW50cycsXFxyXFxuICAgICAgICBlbXBsb3llZXM6ICdlbXBsb3llZXMvZW1wbG95ZWVzJ1xcclxcbiAgICAgIH0pLFxcclxcbiAgICAgIGRlbGV0ZU1zZygpIHtcXHJcXG4gICAgICAgIHJldHVybiAodGhpcy5kZWxldGVEZW5pZWQpID8gJyDQl9CwINC00LDQvdC90L7QuSDQtNC+0LvQttC90L7RgdGC0YzRjiDQt9Cw0LrRgNC10L/Qu9C10L3RiyDRgdC+0YLRgNGD0LTQvdC40LrQuC4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINGA0LDRgdC/0YDQtdC00LXQu9C40YLQtSDQuNGFINC90LAg0LTRgNGD0LPQuNC1INC00L7Qu9C20L3QvtGB0YLQuCDQv9GA0LXQttC00LUg0YfQtdC8INGD0LTQsNC70Y/RgtGMINGC0LXQutGD0YnRg9GOLicgOlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcg0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0LTQsNC90L3Rg9GOINC00L7Qu9C20L3QvtGB0YLRjD8nO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZm9ybVRpdGxlICgpIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRlZEluZGV4ID09PSAtMSA/ICfQndC+0LLQsNGPINC00L7Qu9C20L3QvtGB0YLRjCcgOiAn0JjQt9C80LXQvdC40YLRjCDQtNC+0LvQttC90L7RgdGC0YwnXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICB3YXRjaDoge1xcclxcbiAgICAgIGRpYWxvZyAodmFsKSB7XFxyXFxuICAgICAgICB2YWwgfHwgdGhpcy5jbG9zZSgpXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgLi4ubWFwQWN0aW9ucyh7XFxyXFxuICAgICAgICBhZGQ6ICdwb3NpdGlvbnMvYWRkJyxcXHJcXG4gICAgICAgIHVwZGF0ZTogJ3Bvc2l0aW9ucy9lZGl0JyxcXHJcXG4gICAgICAgIHJlbW92ZTogJ3Bvc2l0aW9ucy9yZW1vdmUnICAgIFxcclxcbiAgICAgIH0pLFxcclxcbiAgICAgIGdldERlcGFydG1lbnROYW1lIChpZCkge1xcclxcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwYXJ0bWVudHMuZmluZChlbCA9PiBlbC5pZCA9IGlkKS50aXRsZVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZ2V0UG9zaXRpb25FbXBsb3llZXMoaWQpIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLmVtcGxveWVlcy5maWx0ZXIoZWwgPT4gZWwucG9zaXRpb25faWQgPT0gaWQpXFxyXFxuICAgICAgfSxcXHJcXG4gICAgICBlZGl0SXRlbSAoaXRlbSkge1xcclxcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKVxcclxcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSlcXHJcXG4gICAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVsZXRlSXRlbSAoaXRlbSkge1xcclxcbiAgICAgICAgdGhpcy5kZWxldGVBbGVydCA9IHRydWU7XFxyXFxuICAgICAgICBpZih0aGlzLmdldFBvc2l0aW9uRW1wbG95ZWVzKGl0ZW0uaWQpLmxlbmd0aCkge1xcclxcbiAgICAgICAgICB0aGlzLmRlbGV0ZURlbmllZCA9IHRydWU7XFxyXFxuICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICB0aGlzLmRlbGV0ZURlbmllZCA9IGZhbHNlO1xcclxcbiAgICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gaXRlbS5pZDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGRlbGV0ZUNvbmZpcm0oKSB7XFxyXFxuICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLmVkaXRlZEluZGV4KTtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlQWxlcnQgPSBmYWxzZTtcXHJcXG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGNsb3NlICgpIHtcXHJcXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2VcXHJcXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xcclxcbiAgICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKVxcclxcbiAgICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTFcXHJcXG4gICAgICAgIH0sIDMwMClcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIHNhdmUgKCkge1xcclxcbiAgICAgICAgaWYgKHRoaXMuZWRpdGVkSW5kZXggPiAtMSkge1xcclxcbiAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLmVkaXRlZEl0ZW0pXFxyXFxuICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICB0aGlzLmFkZCh0aGlzLmVkaXRlZEl0ZW0pO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgdGhpcy5jbG9zZSgpXFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4jcG9zaXRpb25zIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tYi0yLmJ0biB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAtNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmMzNDE5MThcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cInBvc2l0aW9uc1wiPlxyXG48IS0tICAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRlbGV0ZUFsZXJ0XCIgbWF4LXdpZHRoPVwiODAwcHhcIj5cclxuICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIGRhcmsgc2xvdD1cImFjdGl2YXRvclwiIGNsYXNzPVwibWItMlwiPtCU0L7QsdCw0LLQuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMPC92LWJ0bj5cclxuICAgICAgPHYtY2FyZD5cclxuICAgICAgICA8di1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkbGluZVwiPtCS0L3QuNC80LDQvdC40LUhPC9zcGFuPlxyXG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgIHt7IGRlbGV0ZU1zZyB9fVxyXG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XHJcbiAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XHJcbiAgICAgICAgICA8di1idG4gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgZmxhdCBAY2xpY2submF0aXZlPVwiZGVsZXRlQWxlcnQgPSAhZGVsZXRlQWxlcnRcIj7QntGC0LzQtdC90LA8L3YtYnRuPlxyXG4gICAgICAgICAgPHYtYnRuIHYtc2hvdz1cIiFkZWxldGVEZW5pZWRcIiBjb2xvcj1cImJsdWUgZGFya2VuLTFcIiBmbGF0IEBjbGljay5uYXRpdmU9XCJkZWxldGVDb25maXJtXCI+0KPQtNCw0LvQuNGC0Yw8L3YtYnRuPlxyXG4gICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwvdi1jYXJkPlxyXG4gICAgPC92LWRpYWxvZz4gLS0+XHJcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1wiIG1heC13aWR0aD1cIjUwMHB4XCI+XHJcbiAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBkYXJrIHNsb3Q9XCJhY3RpdmF0b3JcIiBjbGFzcz1cIm1iLTJcIj7QlNC+0LHQsNCy0LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjDwvdi1idG4+XHJcbiAgICAgIDx2LWNhcmQ+XHJcbiAgICAgICAgPHYtY2FyZC10aXRsZT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj57eyBmb3JtVGl0bGUgfX08L3NwYW4+XHJcbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPHYtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgPHYtY29udGFpbmVyIGdyaWQtbGlzdC1tZD5cclxuICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXA+XHJcbiAgICAgICAgICAgICAgPHYtZmxleCB4czEyIHNtNj5cclxuICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcIiB2LW1vZGVsPVwiZWRpdGVkSXRlbS50aXRsZVwiPjwvdi10ZXh0LWZpZWxkPlxyXG4gICAgICAgICAgICAgIDwvdi1mbGV4PlxyXG4gICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTY+XHJcbiAgICAgICAgICAgICAgICA8di1zZWxlY3RcclxuICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ2RlcGFydG1lbnQnKVwiXHJcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJlZGl0ZWRJdGVtLmRlcGFydG1lbnRfaWRcIlxyXG4gICAgICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJjYXJkX3RyYXZlbFwiXHJcbiAgICAgICAgICAgICAgICAgIDppdGVtcz1cImRlcGFydG1lbnRzXCJcclxuICAgICAgICAgICAgICAgICAgaXRlbS10ZXh0PVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICBpdGVtLXZhbHVlPVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40LUnXVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICA+PC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICA8L3YtZmxleD5cclxuICAgICAgICAgICAgPC92LWxheW91dD5cclxuICAgICAgICAgIDwvdi1jb250YWluZXI+XHJcbiAgICAgICAgPC92LWNhcmQtdGV4dD5cclxuICAgICAgICA8di1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cclxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImJsdWUgZGFya2VuLTFcIiBmbGF0IEBjbGljay5uYXRpdmU9XCJjbG9zZVwiPkNhbmNlbDwvdi1idG4+XHJcbiAgICAgICAgICA8di1idG4gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgZmxhdCBAY2xpY2submF0aXZlPVwic2F2ZVwiPlNhdmU8L3YtYnRuPlxyXG4gICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwvdi1jYXJkPlxyXG4gICAgPC92LWRpYWxvZz5cclxuPCEtLSAgICAgPHYtZGF0YS10YWJsZVxyXG4gICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxyXG4gICAgICA6aXRlbXM9XCJpdGVtc1wiXHJcbiAgICAgIGhpZGUtYWN0aW9uc1xyXG4gICAgICBjbGFzcz1cImVsZXZhdGlvbi0xXCJcclxuICAgID5cclxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJpdGVtc1wiIHNsb3Qtc2NvcGU9XCJwcm9wc1wiPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj57eyBwcm9wcy5pdGVtLmlkIH19PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+e3sgcHJvcHMuaXRlbS50aXRsZSB9fTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPnt7IGdldERlcGFydG1lbnROYW1lKHByb3BzLml0ZW0uZGVwYXJ0bWVudF9pZCkgfX08L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj57eyBnZXRQb3NpdGlvbkVtcGxveWVlcyhwcm9wcy5pdGVtLmlkKS5sZW5ndGggfX08L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj5cclxuICAgICAgICAgIDx2LWJ0biBpY29uIGNsYXNzPVwibXgtMFwiIEBjbGljaz1cImVkaXRJdGVtKHByb3BzLml0ZW0pXCI+XHJcbiAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJ0ZWFsXCI+ZWRpdDwvdi1pY29uPlxyXG4gICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgIDx2LWJ0biBpY29uIGNsYXNzPVwibXgtMFwiIEBjbGljaz1cImRlbGV0ZUl0ZW0ocHJvcHMuaXRlbSlcIj5cclxuICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInBpbmtcIj5kZWxldGU8L3YtaWNvbj5cclxuICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJuby1kYXRhXCI+XHJcbiAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIlwiPtCe0LHQvdC+0LLQuNGC0Yw8L3YtYnRuPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC92LWRhdGEtdGFibGU+IC0tPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1pZGRsZXdhcmU6ICdhdXRoJyxcclxuICAgIGRhdGE6ICgpID0+ICh7XHJcbiAgICAgIGRpYWxvZzogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZUFsZXJ0OiBmYWxzZSxcclxuICAgICAgZGVsZXRlRGVuaWVkOiBmYWxzZSxcclxuICAgICAgaGVhZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICfQndC+0LzQtdGAJyxcclxuICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxyXG4gICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgdmFsdWU6ICdpZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgdGV4dDogJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtScsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ3RpdGxlJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ9Cf0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1JywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAnZGVwYXJ0bWVudCcgfSxcclxuICAgICAgICB7IHRleHQ6ICfQodC+0YLRgNGD0LTQvdC40LrQvtCyJywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAnZW1wbG95ZWVzJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ9CU0LXQudGB0YLQstC40Y8nLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICd0aXRsZScsIHNvcnRhYmxlOiBmYWxzZSB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGVkaXRlZEluZGV4OiAtMSxcclxuICAgICAgZWRpdGVkSXRlbToge1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgZGVwYXJ0bWVudF9pZDogJycsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRJdGVtOiB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBkZXBhcnRtZW50X2lkOiAnJyxcclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgICBpdGVtczogJ3Bvc2l0aW9ucy9wb3NpdGlvbnMnLFxyXG4gICAgICAgIGRlcGFydG1lbnRzOiAnZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMnLFxyXG4gICAgICAgIGVtcGxveWVlczogJ2VtcGxveWVlcy9lbXBsb3llZXMnXHJcbiAgICAgIH0pLFxyXG4gICAgICBkZWxldGVNc2coKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmRlbGV0ZURlbmllZCkgPyAnINCX0LAg0LTQsNC90L3QvtC5INC00L7Qu9C20L3QvtGB0YLRjNGOINC30LDQutGA0LXQv9C70LXQvdGLINGB0L7RgtGA0YPQtNC90LjQutC4LiDQn9C+0LbQsNC70YPQudGB0YLQsCwg0YDQsNGB0L/RgNC10LTQtdC70LjRgtC1INC40YUg0L3QsCDQtNGA0YPQs9C40LUg0LTQvtC70LbQvdC+0YHRgtC4INC/0YDQtdC20LTQtSDRh9C10Lwg0YPQtNCw0LvRj9GC0Ywg0YLQtdC60YPRidGD0Y4uJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcg0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0LTQsNC90L3Rg9GOINC00L7Qu9C20L3QvtGB0YLRjD8nO1xyXG4gICAgICB9LFxyXG4gICAgICBmb3JtVGl0bGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRlZEluZGV4ID09PSAtMSA/ICfQndC+0LLQsNGPINC00L7Qu9C20L3QvtGB0YLRjCcgOiAn0JjQt9C80LXQvdC40YLRjCDQtNC+0LvQttC90L7RgdGC0YwnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICBkaWFsb2cgKHZhbCkge1xyXG4gICAgICAgIHZhbCB8fCB0aGlzLmNsb3NlKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgLi4ubWFwQWN0aW9ucyh7XHJcbiAgICAgICAgYWRkOiAncG9zaXRpb25zL2FkZCcsXHJcbiAgICAgICAgdXBkYXRlOiAncG9zaXRpb25zL2VkaXQnLFxyXG4gICAgICAgIHJlbW92ZTogJ3Bvc2l0aW9ucy9yZW1vdmUnICAgIFxyXG4gICAgICB9KSxcclxuICAgICAgZ2V0RGVwYXJ0bWVudE5hbWUgKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwYXJ0bWVudHMuZmluZChlbCA9PiBlbC5pZCA9IGlkKS50aXRsZVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRQb3NpdGlvbkVtcGxveWVlcyhpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVtcGxveWVlcy5maWx0ZXIoZWwgPT4gZWwucG9zaXRpb25faWQgPT0gaWQpXHJcbiAgICAgIH0sXHJcbiAgICAgIGVkaXRJdGVtIChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKVxyXG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pXHJcbiAgICAgICAgdGhpcy5kaWFsb2cgPSB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZUl0ZW0gKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZUFsZXJ0ID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLmdldFBvc2l0aW9uRW1wbG95ZWVzKGl0ZW0uaWQpLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5kZWxldGVEZW5pZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRlbGV0ZURlbmllZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBkZWxldGVDb25maXJtKCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKHRoaXMuZWRpdGVkSW5kZXgpO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlQWxlcnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTE7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKVxyXG4gICAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xXHJcbiAgICAgICAgfSwgMzAwKVxyXG4gICAgICB9LFxyXG4gICAgICBzYXZlICgpIHtcclxuICAgICAgICBpZiAodGhpcy5lZGl0ZWRJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLmVkaXRlZEl0ZW0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYWRkKHRoaXMuZWRpdGVkSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiNwb3NpdGlvbnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG5cclxuLm1iLTIuYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTUwcHg7XHJcbn1cclxuXHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwicG9zaXRpb25zXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kaWFsb2csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kaWFsb2cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRpYWxvZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJhY3RpdmF0b3JcIiwgY29sb3I6IFwicHJpbWFyeVwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi0JTQvtCx0LDQstC40YLRjCDQtNC+0LvQttC90L7RgdGC0YxcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZm9ybVRpdGxlKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJncmlkLWxpc3QtbWRcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBzbTY6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRlZEl0ZW0sIFwidGl0bGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0ZWRJdGVtLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIHNtNjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImRlcGFydG1lbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJjYXJkX3RyYXZlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uZGVwYXJ0bWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhdiB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40LVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0uZGVwYXJ0bWVudF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRlZEl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVwYXJ0bWVudF9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZWRpdGVkSXRlbS5kZXBhcnRtZW50X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImJsdWUgZGFya2VuLTFcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jbG9zZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZSBkYXJrZW4tMVwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNhdmUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMmMzNDE5MThcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTJjMzQxOTE4XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJzb3VyY2VSb290IjoiIn0=