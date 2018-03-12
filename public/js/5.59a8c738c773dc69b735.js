webpackJsonp([5],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(200)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(202)
/* template */
var __vue_template__ = __webpack_require__(203)
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

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
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

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n#positions[data-v-2c341918] {\n    position: relative;\n    max-width: 90%;\n    margin: 10px auto;\n}\n.mb-2.btn[data-v-2c341918] {\n    position: absolute;\n    bottom: -50px;\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/positions/resources/assets/js/pages/admin/positions/List.vue"],"names":[],"mappings":";AAuIA;IACA,mBAAA;IACA,eAAA;IACA,kBAAA;CACA;AAEA;IACA,mBAAA;IACA,cAAA;CACA","file":"List.vue","sourcesContent":["<template>\n  <div id=\"positions\">\n    <v-dialog v-model=\"dialog\" max-width=\"500px\">\n      <v-btn color=\"primary\" dark slot=\"activator\" class=\"mb-2\">Добавить должность</v-btn>\n      <v-card>\n        <v-card-title>\n          <span class=\"headline\">{{ formTitle }}</span>\n        </v-card-title>\n        <v-card-text>\n          <v-container grid-list-md>\n            <v-layout wrap>\n              <v-flex xs12 sm6>\n                <v-text-field label=\"Наименование\" v-model=\"editedItem.title\"></v-text-field>\n              </v-flex>\n              <v-flex xs12 sm6>\n                <v-text-field label=\"Подразделение\" v-model=\"editedItem.department\"></v-text-field>\n              </v-flex>\n            </v-layout>\n          </v-container>\n        </v-card-text>\n        <v-card-actions>\n          <v-spacer></v-spacer>\n          <v-btn color=\"blue darken-1\" flat @click.native=\"close\">Cancel</v-btn>\n          <v-btn color=\"blue darken-1\" flat @click.native=\"save\">Save</v-btn>\n        </v-card-actions>\n      </v-card>\n    </v-dialog>\n    <v-data-table\n      :headers=\"headers\"\n      :items=\"items\"\n      hide-actions\n      class=\"elevation-1\"\n    >\n      <template slot=\"items\" slot-scope=\"props\">\n        <td class=\"text-xs-right\">{{ props.item.id }}</td>\n        <td class=\"text-xs-right\">{{ props.item.title }}</td>\n        <td class=\"text-xs-right\">{{ props.item.department }}</td>\n        <td class=\"text-xs-right\">{{ props.item.employees }}</td>\n        <td class=\"text-xs-right\">\n          <v-btn icon class=\"mx-0\" @click=\"editItem(props.item)\">\n            <v-icon color=\"teal\">edit</v-icon>\n          </v-btn>\n          <v-btn icon class=\"mx-0\" @click=\"deleteItem(props.item)\">\n            <v-icon color=\"pink\">delete</v-icon>\n          </v-btn>\n        </td>\n      </template>\n      <template slot=\"no-data\">\n        <v-btn color=\"primary\" @click=\"initialize\">Reset</v-btn>\n      </template>\n    </v-data-table>\n  </div>\n</template>\n\n<script>\n  export default {\n    data: () => ({\n      dialog: false,\n      headers: [\n        {\n          text: 'Номер',\n          align: 'right',\n          sortable: false,\n          value: 'id'\n        },\n        { text: 'Наименование', align: 'right', value: 'title' },\n        { text: 'Подразделение', align: 'right', value: 'department' },\n        { text: 'Сотрудников', align: 'right', value: 'employees' },\n        { text: 'Действия', align: 'right', value: 'title', sortable: false }\n      ],\n      items: [],\n      editedIndex: -1,\n      editedItem: {\n        id: '',\n        title: '',\n        department: '',\n      },\n      defaultItem: {\n        id: '',\n        title: '',\n        department: '',\n      }\n    }),\n    computed: {\n      formTitle () {\n        return this.editedIndex === -1 ? 'Новая должность' : 'Изменить должность'\n      }\n    },\n    watch: {\n      dialog (val) {\n        val || this.close()\n      }\n    },\n    created () {\n      this.initialize()\n    },\n    methods: {\n      initialize () {\n        this.items = [\n          {\n            id: 1,\n            title: 'Директор',\n            department: 'Главный оффис',\n            employees: 1\n          }\n        ]\n      },\n      editItem (item) {\n        this.editedIndex = this.items.indexOf(item)\n        this.editedItem = Object.assign({}, item)\n        this.dialog = true\n      },\n      deleteItem (item) {\n        const index = this.items.indexOf(item)\n        confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)\n      },\n      close () {\n        this.dialog = false\n        setTimeout(() => {\n          this.editedItem = Object.assign({}, this.defaultItem)\n          this.editedIndex = -1\n        }, 300)\n      },\n      save () {\n        if (this.editedIndex > -1) {\n          Object.assign(this.items[this.editedIndex], this.editedItem)\n        } else {\n          this.items.push(this.editedItem)\n        }\n        this.close()\n      }\n    }\n  }\n</script>\n\n<style scoped>\n#positions {\n    position: relative;\n    max-width: 90%;\n    margin: 10px auto;\n}\n\n.mb-2.btn {\n    position: absolute;\n    bottom: -50px;\n}\n\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      dialog: false,
      headers: [{
        text: 'Номер',
        align: 'right',
        sortable: false,
        value: 'id'
      }, { text: 'Наименование', align: 'right', value: 'title' }, { text: 'Подразделение', align: 'right', value: 'department' }, { text: 'Сотрудников', align: 'right', value: 'employees' }, { text: 'Действия', align: 'right', value: 'title', sortable: false }],
      items: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        title: '',
        department: ''
      },
      defaultItem: {
        id: '',
        title: '',
        department: ''
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'Новая должность' : 'Изменить должность';
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.initialize();
  },

  methods: {
    initialize: function initialize() {
      this.items = [{
        id: 1,
        title: 'Директор',
        department: 'Главный оффис',
        employees: 1
      }];
    },
    editItem: function editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var index = this.items.indexOf(item);
      confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1);
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
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        this.items.push(this.editedItem);
      }
      this.close();
    }
  }
});

/***/ }),

/***/ 203:
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
                              _c("v-text-field", {
                                attrs: { label: "Подразделение" },
                                model: {
                                  value: _vm.editedItem.department,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "department", $$v)
                                  },
                                  expression: "editedItem.department"
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
                    _vm._v(_vm._s(props.item.department))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-xs-right" }, [
                    _vm._v(_vm._s(props.item.employees))
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
                { attrs: { color: "primary" }, on: { click: _vm.initialize } },
                [_vm._v("Reset")]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZT82MDg4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlPzA2ODYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlP2JiZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSx3REFBeUQseUJBQXlCLHFCQUFxQix3QkFBd0IsR0FBRyw4QkFBOEIs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QkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvNS41OWE4YzczOGM3NzNkYzY5YjczNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMzNDE5MThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMzNDE5MThcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0yYzM0MTkxOFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGFkbWluXFxcXHBvc2l0aW9uc1xcXFxMaXN0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yYzM0MTkxOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJjMzQxOTE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzM0MTkxOFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI4Y2JhNGViY1wiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzM0MTkxOFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMzQxOTE4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmMzNDE5MThcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI3Bvc2l0aW9uc1tkYXRhLXYtMmMzNDE5MThdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcbi5tYi0yLmJ0bltkYXRhLXYtMmMzNDE5MThdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC01MHB4O1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBdUlBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0NBQ0FcIixcImZpbGVcIjpcIkxpc3QudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgaWQ9XFxcInBvc2l0aW9uc1xcXCI+XFxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVxcXCJkaWFsb2dcXFwiIG1heC13aWR0aD1cXFwiNTAwcHhcXFwiPlxcbiAgICAgIDx2LWJ0biBjb2xvcj1cXFwicHJpbWFyeVxcXCIgZGFyayBzbG90PVxcXCJhY3RpdmF0b3JcXFwiIGNsYXNzPVxcXCJtYi0yXFxcIj7QlNC+0LHQsNCy0LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjDwvdi1idG4+XFxuICAgICAgPHYtY2FyZD5cXG4gICAgICAgIDx2LWNhcmQtdGl0bGU+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkbGluZVxcXCI+e3sgZm9ybVRpdGxlIH19PC9zcGFuPlxcbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XFxuICAgICAgICA8di1jYXJkLXRleHQ+XFxuICAgICAgICAgIDx2LWNvbnRhaW5lciBncmlkLWxpc3QtbWQ+XFxuICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXA+XFxuICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202PlxcbiAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIGxhYmVsPVxcXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcXFwiIHYtbW9kZWw9XFxcImVkaXRlZEl0ZW0udGl0bGVcXFwiPjwvdi10ZXh0LWZpZWxkPlxcbiAgICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202PlxcbiAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIGxhYmVsPVxcXCLQn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtVxcXCIgdi1tb2RlbD1cXFwiZWRpdGVkSXRlbS5kZXBhcnRtZW50XFxcIj48L3YtdGV4dC1maWVsZD5cXG4gICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgIDwvdi1sYXlvdXQ+XFxuICAgICAgICAgIDwvdi1jb250YWluZXI+XFxuICAgICAgICA8L3YtY2FyZC10ZXh0PlxcbiAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxcbiAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cXG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJibHVlIGRhcmtlbi0xXFxcIiBmbGF0IEBjbGljay5uYXRpdmU9XFxcImNsb3NlXFxcIj5DYW5jZWw8L3YtYnRuPlxcbiAgICAgICAgICA8di1idG4gY29sb3I9XFxcImJsdWUgZGFya2VuLTFcXFwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cXFwic2F2ZVxcXCI+U2F2ZTwvdi1idG4+XFxuICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxcbiAgICAgIDwvdi1jYXJkPlxcbiAgICA8L3YtZGlhbG9nPlxcbiAgICA8di1kYXRhLXRhYmxlXFxuICAgICAgOmhlYWRlcnM9XFxcImhlYWRlcnNcXFwiXFxuICAgICAgOml0ZW1zPVxcXCJpdGVtc1xcXCJcXG4gICAgICBoaWRlLWFjdGlvbnNcXG4gICAgICBjbGFzcz1cXFwiZWxldmF0aW9uLTFcXFwiXFxuICAgID5cXG4gICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiaXRlbXNcXFwiIHNsb3Qtc2NvcGU9XFxcInByb3BzXFxcIj5cXG4gICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XFxuICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7IHByb3BzLml0ZW0udGl0bGUgfX08L3RkPlxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57eyBwcm9wcy5pdGVtLmRlcGFydG1lbnQgfX08L3RkPlxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57eyBwcm9wcy5pdGVtLmVtcGxveWVlcyB9fTwvdGQ+XFxuICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPlxcbiAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cXFwibXgtMFxcXCIgQGNsaWNrPVxcXCJlZGl0SXRlbShwcm9wcy5pdGVtKVxcXCI+XFxuICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cXFwidGVhbFxcXCI+ZWRpdDwvdi1pY29uPlxcbiAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cXFwibXgtMFxcXCIgQGNsaWNrPVxcXCJkZWxldGVJdGVtKHByb3BzLml0ZW0pXFxcIj5cXG4gICAgICAgICAgICA8di1pY29uIGNvbG9yPVxcXCJwaW5rXFxcIj5kZWxldGU8L3YtaWNvbj5cXG4gICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgIDwvdGQ+XFxuICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICA8dGVtcGxhdGUgc2xvdD1cXFwibm8tZGF0YVxcXCI+XFxuICAgICAgICA8di1idG4gY29sb3I9XFxcInByaW1hcnlcXFwiIEBjbGljaz1cXFwiaW5pdGlhbGl6ZVxcXCI+UmVzZXQ8L3YtYnRuPlxcbiAgICAgIDwvdGVtcGxhdGU+XFxuICAgIDwvdi1kYXRhLXRhYmxlPlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBkYXRhOiAoKSA9PiAoe1xcbiAgICAgIGRpYWxvZzogZmFsc2UsXFxuICAgICAgaGVhZGVyczogW1xcbiAgICAgICAge1xcbiAgICAgICAgICB0ZXh0OiAn0J3QvtC80LXRgCcsXFxuICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxcbiAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXFxuICAgICAgICAgIHZhbHVlOiAnaWQnXFxuICAgICAgICB9LFxcbiAgICAgICAgeyB0ZXh0OiAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1JywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAndGl0bGUnIH0sXFxuICAgICAgICB7IHRleHQ6ICfQn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtScsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ2RlcGFydG1lbnQnIH0sXFxuICAgICAgICB7IHRleHQ6ICfQodC+0YLRgNGD0LTQvdC40LrQvtCyJywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAnZW1wbG95ZWVzJyB9LFxcbiAgICAgICAgeyB0ZXh0OiAn0JTQtdC50YHRgtCy0LjRjycsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ3RpdGxlJywgc29ydGFibGU6IGZhbHNlIH1cXG4gICAgICBdLFxcbiAgICAgIGl0ZW1zOiBbXSxcXG4gICAgICBlZGl0ZWRJbmRleDogLTEsXFxuICAgICAgZWRpdGVkSXRlbToge1xcbiAgICAgICAgaWQ6ICcnLFxcbiAgICAgICAgdGl0bGU6ICcnLFxcbiAgICAgICAgZGVwYXJ0bWVudDogJycsXFxuICAgICAgfSxcXG4gICAgICBkZWZhdWx0SXRlbToge1xcbiAgICAgICAgaWQ6ICcnLFxcbiAgICAgICAgdGl0bGU6ICcnLFxcbiAgICAgICAgZGVwYXJ0bWVudDogJycsXFxuICAgICAgfVxcbiAgICB9KSxcXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICBmb3JtVGl0bGUgKCkge1xcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdGVkSW5kZXggPT09IC0xID8gJ9Cd0L7QstCw0Y8g0LTQvtC70LbQvdC+0YHRgtGMJyA6ICfQmNC30LzQtdC90LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjCdcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIHdhdGNoOiB7XFxuICAgICAgZGlhbG9nICh2YWwpIHtcXG4gICAgICAgIHZhbCB8fCB0aGlzLmNsb3NlKClcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGNyZWF0ZWQgKCkge1xcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpXFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICBpbml0aWFsaXplICgpIHtcXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXFxuICAgICAgICAgIHtcXG4gICAgICAgICAgICBpZDogMSxcXG4gICAgICAgICAgICB0aXRsZTogJ9CU0LjRgNC10LrRgtC+0YAnLFxcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6ICfQk9C70LDQstC90YvQuSDQvtGE0YTQuNGBJyxcXG4gICAgICAgICAgICBlbXBsb3llZXM6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgXVxcbiAgICAgIH0sXFxuICAgICAgZWRpdEl0ZW0gKGl0ZW0pIHtcXG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSlcXG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pXFxuICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWVcXG4gICAgICB9LFxcbiAgICAgIGRlbGV0ZUl0ZW0gKGl0ZW0pIHtcXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pXFxuICAgICAgICBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKSAmJiB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSlcXG4gICAgICB9LFxcbiAgICAgIGNsb3NlICgpIHtcXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2VcXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKVxcbiAgICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTFcXG4gICAgICAgIH0sIDMwMClcXG4gICAgICB9LFxcbiAgICAgIHNhdmUgKCkge1xcbiAgICAgICAgaWYgKHRoaXMuZWRpdGVkSW5kZXggPiAtMSkge1xcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuaXRlbXNbdGhpcy5lZGl0ZWRJbmRleF0sIHRoaXMuZWRpdGVkSXRlbSlcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh0aGlzLmVkaXRlZEl0ZW0pXFxuICAgICAgICB9XFxuICAgICAgICB0aGlzLmNsb3NlKClcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbiNwb3NpdGlvbnMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG59XFxuXFxuLm1iLTIuYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC01MHB4O1xcbn1cXG5cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yYzM0MTkxOFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cInBvc2l0aW9uc1wiPlxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9nXCIgbWF4LXdpZHRoPVwiNTAwcHhcIj5cbiAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBkYXJrIHNsb3Q9XCJhY3RpdmF0b3JcIiBjbGFzcz1cIm1iLTJcIj7QlNC+0LHQsNCy0LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjDwvdi1idG4+XG4gICAgICA8di1jYXJkPlxuICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj57eyBmb3JtVGl0bGUgfX08L3NwYW4+XG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgPHYtY29udGFpbmVyIGdyaWQtbGlzdC1tZD5cbiAgICAgICAgICAgIDx2LWxheW91dCB3cmFwPlxuICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202PlxuICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcIiB2LW1vZGVsPVwiZWRpdGVkSXRlbS50aXRsZVwiPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgPHYtZmxleCB4czEyIHNtNj5cbiAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIGxhYmVsPVwi0J/QvtC00YDQsNC30LTQtdC70LXQvdC40LVcIiB2LW1vZGVsPVwiZWRpdGVkSXRlbS5kZXBhcnRtZW50XCI+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVwiYmx1ZSBkYXJrZW4tMVwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cImNsb3NlXCI+Q2FuY2VsPC92LWJ0bj5cbiAgICAgICAgICA8di1idG4gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgZmxhdCBAY2xpY2submF0aXZlPVwic2F2ZVwiPlNhdmU8L3YtYnRuPlxuICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgPC92LWNhcmQ+XG4gICAgPC92LWRpYWxvZz5cbiAgICA8di1kYXRhLXRhYmxlXG4gICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxuICAgICAgOml0ZW1zPVwiaXRlbXNcIlxuICAgICAgaGlkZS1hY3Rpb25zXG4gICAgICBjbGFzcz1cImVsZXZhdGlvbi0xXCJcbiAgICA+XG4gICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1zXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj57eyBwcm9wcy5pdGVtLmlkIH19PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPnt7IHByb3BzLml0ZW0udGl0bGUgfX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+e3sgcHJvcHMuaXRlbS5kZXBhcnRtZW50IH19PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPnt7IHByb3BzLml0ZW0uZW1wbG95ZWVzIH19PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPlxuICAgICAgICAgIDx2LWJ0biBpY29uIGNsYXNzPVwibXgtMFwiIEBjbGljaz1cImVkaXRJdGVtKHByb3BzLml0ZW0pXCI+XG4gICAgICAgICAgICA8di1pY29uIGNvbG9yPVwidGVhbFwiPmVkaXQ8L3YtaWNvbj5cbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgIDx2LWJ0biBpY29uIGNsYXNzPVwibXgtMFwiIEBjbGljaz1cImRlbGV0ZUl0ZW0ocHJvcHMuaXRlbSlcIj5cbiAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJwaW5rXCI+ZGVsZXRlPC92LWljb24+XG4gICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgc2xvdD1cIm5vLWRhdGFcIj5cbiAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cImluaXRpYWxpemVcIj5SZXNldDwvdi1idG4+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvdi1kYXRhLXRhYmxlPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgZGlhbG9nOiBmYWxzZSxcbiAgICAgIGhlYWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICfQndC+0LzQtdGAJyxcbiAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6ICdpZCdcbiAgICAgICAgfSxcbiAgICAgICAgeyB0ZXh0OiAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1JywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAndGl0bGUnIH0sXG4gICAgICAgIHsgdGV4dDogJ9Cf0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1JywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAnZGVwYXJ0bWVudCcgfSxcbiAgICAgICAgeyB0ZXh0OiAn0KHQvtGC0YDRg9C00L3QuNC60L7QsicsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ2VtcGxveWVlcycgfSxcbiAgICAgICAgeyB0ZXh0OiAn0JTQtdC50YHRgtCy0LjRjycsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ3RpdGxlJywgc29ydGFibGU6IGZhbHNlIH1cbiAgICAgIF0sXG4gICAgICBpdGVtczogW10sXG4gICAgICBlZGl0ZWRJbmRleDogLTEsXG4gICAgICBlZGl0ZWRJdGVtOiB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBkZXBhcnRtZW50OiAnJyxcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0SXRlbToge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgZGVwYXJ0bWVudDogJycsXG4gICAgICB9XG4gICAgfSksXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGZvcm1UaXRsZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRlZEluZGV4ID09PSAtMSA/ICfQndC+0LLQsNGPINC00L7Qu9C20L3QvtGB0YLRjCcgOiAn0JjQt9C80LXQvdC40YLRjCDQtNC+0LvQttC90L7RgdGC0YwnXG4gICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgZGlhbG9nICh2YWwpIHtcbiAgICAgICAgdmFsIHx8IHRoaXMuY2xvc2UoKVxuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCAoKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgaW5pdGlhbGl6ZSAoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICB0aXRsZTogJ9CU0LjRgNC10LrRgtC+0YAnLFxuICAgICAgICAgICAgZGVwYXJ0bWVudDogJ9CT0LvQsNCy0L3Ri9C5INC+0YTRhNC40YEnLFxuICAgICAgICAgICAgZW1wbG95ZWVzOiAxXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgZWRpdEl0ZW0gKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKVxuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKVxuICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWVcbiAgICAgIH0sXG4gICAgICBkZWxldGVJdGVtIChpdGVtKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pXG4gICAgICAgIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPycpICYmIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgfSxcbiAgICAgIGNsb3NlICgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKVxuICAgICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMVxuICAgICAgICB9LCAzMDApXG4gICAgICB9LFxuICAgICAgc2F2ZSAoKSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuaXRlbXNbdGhpcy5lZGl0ZWRJbmRleF0sIHRoaXMuZWRpdGVkSXRlbSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godGhpcy5lZGl0ZWRJdGVtKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4jcG9zaXRpb25zIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbi5tYi0yLmJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTUwcHg7XG59XG5cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwicG9zaXRpb25zXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kaWFsb2csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kaWFsb2cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRpYWxvZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJhY3RpdmF0b3JcIiwgY29sb3I6IFwicHJpbWFyeVwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi0JTQvtCx0LDQstC40YLRjCDQtNC+0LvQttC90L7RgdGC0YxcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZm9ybVRpdGxlKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJncmlkLWxpc3QtbWRcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBzbTY6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRlZEl0ZW0sIFwidGl0bGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0ZWRJdGVtLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIHNtNjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lZGl0ZWRJdGVtLmRlcGFydG1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRlZEl0ZW0sIFwiZGVwYXJ0bWVudFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVkaXRlZEl0ZW0uZGVwYXJ0bWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJibHVlIGRhcmtlbi0xXCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xvc2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImJsdWUgZGFya2VuLTFcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zYXZlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRhdGEtdGFibGVcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0xXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaGVhZGVyczogX3ZtLmhlYWRlcnMsIGl0ZW1zOiBfdm0uaXRlbXMsIFwiaGlkZS1hY3Rpb25zXCI6IFwiXCIgfSxcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmlkKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0udGl0bGUpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5kZXBhcnRtZW50KSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uZW1wbG95ZWVzKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXgtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRJdGVtKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcInRlYWxcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlZGl0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXgtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUl0ZW0ocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwicGlua1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImRlbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICB7IHNsb3Q6IFwibm8tZGF0YVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiB9LCBvbjogeyBjbGljazogX3ZtLmluaXRpYWxpemUgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZXNldFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yYzM0MTkxOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMmMzNDE5MThcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDNcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==