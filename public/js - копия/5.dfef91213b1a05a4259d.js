webpackJsonp([5],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(203)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(205)
/* template */
var __vue_template__ = __webpack_require__(206)
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

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
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

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n#positions[data-v-2c341918] {\n    position: relative;\n}\n.mb-2.btn[data-v-2c341918] {\n    position: absolute;\n    bottom: 0;\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/positions/resources/assets/js/pages/admin/positions/List.vue"],"names":[],"mappings":";AAuIA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,UAAA;CACA","file":"List.vue","sourcesContent":["<template>\n  <div id=\"positions\">\n    <v-dialog v-model=\"dialog\" max-width=\"500px\">\n      <v-btn color=\"primary\" dark slot=\"activator\" class=\"mb-2\">Добавить должность</v-btn>\n      <v-card>\n        <v-card-title>\n          <span class=\"headline\">{{ formTitle }}</span>\n        </v-card-title>\n        <v-card-text>\n          <v-container grid-list-md>\n            <v-layout wrap>\n              <v-flex xs12 sm6>\n                <v-text-field label=\"Наименование\" v-model=\"editedItem.title\"></v-text-field>\n              </v-flex>\n              <v-flex xs12 sm6>\n                <v-text-field label=\"Подразделение\" v-model=\"editedItem.department\"></v-text-field>\n              </v-flex>\n            </v-layout>\n          </v-container>\n        </v-card-text>\n        <v-card-actions>\n          <v-spacer></v-spacer>\n          <v-btn color=\"blue darken-1\" flat @click.native=\"close\">Cancel</v-btn>\n          <v-btn color=\"blue darken-1\" flat @click.native=\"save\">Save</v-btn>\n        </v-card-actions>\n      </v-card>\n    </v-dialog>\n    <v-data-table\n      :headers=\"headers\"\n      :items=\"items\"\n      hide-actions\n      class=\"elevation-1\"\n    >\n      <template slot=\"items\" slot-scope=\"props\">\n        <td class=\"text-xs-right\">{{ props.item.id }}</td>\n        <td class=\"text-xs-right\">{{ props.item.title }}</td>\n        <td class=\"text-xs-right\">{{ props.item.department }}</td>\n        <td class=\"text-xs-right\">{{ props.item.employees }}</td>\n        <td class=\"text-xs-right\">\n          <v-btn icon class=\"mx-0\" @click=\"editItem(props.item)\">\n            <v-icon color=\"teal\">edit</v-icon>\n          </v-btn>\n          <v-btn icon class=\"mx-0\" @click=\"deleteItem(props.item)\">\n            <v-icon color=\"pink\">delete</v-icon>\n          </v-btn>\n        </td>\n      </template>\n      <template slot=\"no-data\">\n        <v-btn color=\"primary\" @click=\"initialize\">Reset</v-btn>\n      </template>\n    </v-data-table>\n  </div>\n</template>\n\n<script>\n  export default {\n    data: () => ({\n      dialog: false,\n      headers: [\n        {\n          text: 'Номер',\n          align: 'right',\n          sortable: false,\n          value: 'id'\n        },\n        { text: 'Наименование', align: 'right', value: 'title' },\n        { text: 'Подразделение', align: 'right', value: 'department' },\n        { text: 'Сотрудников', align: 'right', value: 'employees' },\n        { text: 'Действия', align: 'right', value: 'title', sortable: false }\n      ],\n      items: [],\n      editedIndex: -1,\n      editedItem: {\n        id: '',\n        title: '',\n        department: '',\n      },\n      defaultItem: {\n        id: '',\n        title: '',\n        department: '',\n      }\n    }),\n    computed: {\n      formTitle () {\n        return this.editedIndex === -1 ? 'Новая должность' : 'Изменить должность'\n      }\n    },\n    watch: {\n      dialog (val) {\n        val || this.close()\n      }\n    },\n    created () {\n      this.initialize()\n    },\n    methods: {\n      initialize () {\n        this.items = [\n          {\n            id: 1,\n            title: 'Директор',\n            department: 'Главный оффис',\n            employees: 1\n          }\n        ]\n      },\n      editItem (item) {\n        this.editedIndex = this.items.indexOf(item)\n        this.editedItem = Object.assign({}, item)\n        this.dialog = true\n      },\n      deleteItem (item) {\n        const index = this.items.indexOf(item)\n        confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)\n      },\n      close () {\n        this.dialog = false\n        setTimeout(() => {\n          this.editedItem = Object.assign({}, this.defaultItem)\n          this.editedIndex = -1\n        }, 300)\n      },\n      save () {\n        if (this.editedIndex > -1) {\n          Object.assign(this.items[this.editedIndex], this.editedItem)\n        } else {\n          this.items.push(this.editedItem)\n        }\n        this.close()\n      }\n    }\n  }\n</script>\n\n<style scoped>\n#positions {\n    position: relative;\n}\n\n.mb-2.btn {\n    position: absolute;\n    bottom: 0;\n}\n\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 205:
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

/***/ 206:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZT82MDg4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlPzA2ODYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlP2JiZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSx3REFBeUQseUJBQXlCLEdBQUcsOEJBQThCLHlCQUF5QixnQkFBZ0Is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IiwiZmlsZSI6ImpzLzUuZGZlZjkxMjEzYjFhMDVhNDI1OWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMzQxOTE4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTGlzdC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMzQxOTE4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMmMzNDE5MThcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxwb3NpdGlvbnNcXFxcTGlzdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmMzNDE5MThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yYzM0MTkxOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMzNDE5MThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiOGNiYTRlYmNcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMzNDE5MThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzM0MTkxOFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTJjMzQxOTE4XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbiNwb3NpdGlvbnNbZGF0YS12LTJjMzQxOTE4XSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1iLTIuYnRuW2RhdGEtdi0yYzM0MTkxOF0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXVJQTtJQUNBLG1CQUFBO0NBQ0E7QUFFQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJMaXN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGlkPVxcXCJwb3NpdGlvbnNcXFwiPlxcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwiZGlhbG9nXFxcIiBtYXgtd2lkdGg9XFxcIjUwMHB4XFxcIj5cXG4gICAgICA8di1idG4gY29sb3I9XFxcInByaW1hcnlcXFwiIGRhcmsgc2xvdD1cXFwiYWN0aXZhdG9yXFxcIiBjbGFzcz1cXFwibWItMlxcXCI+0JTQvtCx0LDQstC40YLRjCDQtNC+0LvQttC90L7RgdGC0Yw8L3YtYnRuPlxcbiAgICAgIDx2LWNhcmQ+XFxuICAgICAgICA8di1jYXJkLXRpdGxlPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGxpbmVcXFwiPnt7IGZvcm1UaXRsZSB9fTwvc3Bhbj5cXG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcbiAgICAgICAgPHYtY2FyZC10ZXh0PlxcbiAgICAgICAgICA8di1jb250YWluZXIgZ3JpZC1saXN0LW1kPlxcbiAgICAgICAgICAgIDx2LWxheW91dCB3cmFwPlxcbiAgICAgICAgICAgICAgPHYtZmxleCB4czEyIHNtNj5cXG4gICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCBsYWJlbD1cXFwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1XFxcIiB2LW1vZGVsPVxcXCJlZGl0ZWRJdGVtLnRpdGxlXFxcIj48L3YtdGV4dC1maWVsZD5cXG4gICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgPHYtZmxleCB4czEyIHNtNj5cXG4gICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCBsYWJlbD1cXFwi0J/QvtC00YDQsNC30LTQtdC70LXQvdC40LVcXFwiIHYtbW9kZWw9XFxcImVkaXRlZEl0ZW0uZGVwYXJ0bWVudFxcXCI+PC92LXRleHQtZmllbGQ+XFxuICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICA8L3YtbGF5b3V0PlxcbiAgICAgICAgICA8L3YtY29udGFpbmVyPlxcbiAgICAgICAgPC92LWNhcmQtdGV4dD5cXG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cXG4gICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cXFwiYmx1ZSBkYXJrZW4tMVxcXCIgZmxhdCBAY2xpY2submF0aXZlPVxcXCJjbG9zZVxcXCI+Q2FuY2VsPC92LWJ0bj5cXG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJibHVlIGRhcmtlbi0xXFxcIiBmbGF0IEBjbGljay5uYXRpdmU9XFxcInNhdmVcXFwiPlNhdmU8L3YtYnRuPlxcbiAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXG4gICAgICA8L3YtY2FyZD5cXG4gICAgPC92LWRpYWxvZz5cXG4gICAgPHYtZGF0YS10YWJsZVxcbiAgICAgIDpoZWFkZXJzPVxcXCJoZWFkZXJzXFxcIlxcbiAgICAgIDppdGVtcz1cXFwiaXRlbXNcXFwiXFxuICAgICAgaGlkZS1hY3Rpb25zXFxuICAgICAgY2xhc3M9XFxcImVsZXZhdGlvbi0xXFxcIlxcbiAgICA+XFxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIml0ZW1zXFxcIiBzbG90LXNjb3BlPVxcXCJwcm9wc1xcXCI+XFxuICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7IHByb3BzLml0ZW0uaWQgfX08L3RkPlxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57eyBwcm9wcy5pdGVtLnRpdGxlIH19PC90ZD5cXG4gICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+e3sgcHJvcHMuaXRlbS5kZXBhcnRtZW50IH19PC90ZD5cXG4gICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+e3sgcHJvcHMuaXRlbS5lbXBsb3llZXMgfX08L3RkPlxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgPHYtYnRuIGljb24gY2xhc3M9XFxcIm14LTBcXFwiIEBjbGljaz1cXFwiZWRpdEl0ZW0ocHJvcHMuaXRlbSlcXFwiPlxcbiAgICAgICAgICAgIDx2LWljb24gY29sb3I9XFxcInRlYWxcXFwiPmVkaXQ8L3YtaWNvbj5cXG4gICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgPHYtYnRuIGljb24gY2xhc3M9XFxcIm14LTBcXFwiIEBjbGljaz1cXFwiZGVsZXRlSXRlbShwcm9wcy5pdGVtKVxcXCI+XFxuICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cXFwicGlua1xcXCI+ZGVsZXRlPC92LWljb24+XFxuICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICA8L3RkPlxcbiAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIm5vLWRhdGFcXFwiPlxcbiAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBAY2xpY2s9XFxcImluaXRpYWxpemVcXFwiPlJlc2V0PC92LWJ0bj5cXG4gICAgICA8L3RlbXBsYXRlPlxcbiAgICA8L3YtZGF0YS10YWJsZT5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgZGF0YTogKCkgPT4gKHtcXG4gICAgICBkaWFsb2c6IGZhbHNlLFxcbiAgICAgIGhlYWRlcnM6IFtcXG4gICAgICAgIHtcXG4gICAgICAgICAgdGV4dDogJ9Cd0L7QvNC10YAnLFxcbiAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcXG4gICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxcbiAgICAgICAgICB2YWx1ZTogJ2lkJ1xcbiAgICAgICAgfSxcXG4gICAgICAgIHsgdGV4dDogJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtScsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ3RpdGxlJyB9LFxcbiAgICAgICAgeyB0ZXh0OiAn0J/QvtC00YDQsNC30LTQtdC70LXQvdC40LUnLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICdkZXBhcnRtZW50JyB9LFxcbiAgICAgICAgeyB0ZXh0OiAn0KHQvtGC0YDRg9C00L3QuNC60L7QsicsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ2VtcGxveWVlcycgfSxcXG4gICAgICAgIHsgdGV4dDogJ9CU0LXQudGB0YLQstC40Y8nLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICd0aXRsZScsIHNvcnRhYmxlOiBmYWxzZSB9XFxuICAgICAgXSxcXG4gICAgICBpdGVtczogW10sXFxuICAgICAgZWRpdGVkSW5kZXg6IC0xLFxcbiAgICAgIGVkaXRlZEl0ZW06IHtcXG4gICAgICAgIGlkOiAnJyxcXG4gICAgICAgIHRpdGxlOiAnJyxcXG4gICAgICAgIGRlcGFydG1lbnQ6ICcnLFxcbiAgICAgIH0sXFxuICAgICAgZGVmYXVsdEl0ZW06IHtcXG4gICAgICAgIGlkOiAnJyxcXG4gICAgICAgIHRpdGxlOiAnJyxcXG4gICAgICAgIGRlcGFydG1lbnQ6ICcnLFxcbiAgICAgIH1cXG4gICAgfSksXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgZm9ybVRpdGxlICgpIHtcXG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRlZEluZGV4ID09PSAtMSA/ICfQndC+0LLQsNGPINC00L7Qu9C20L3QvtGB0YLRjCcgOiAn0JjQt9C80LXQvdC40YLRjCDQtNC+0LvQttC90L7RgdGC0YwnXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICB3YXRjaDoge1xcbiAgICAgIGRpYWxvZyAodmFsKSB7XFxuICAgICAgICB2YWwgfHwgdGhpcy5jbG9zZSgpXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBjcmVhdGVkICgpIHtcXG4gICAgICB0aGlzLmluaXRpYWxpemUoKVxcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgaW5pdGlhbGl6ZSAoKSB7XFxuICAgICAgICB0aGlzLml0ZW1zID0gW1xcbiAgICAgICAgICB7XFxuICAgICAgICAgICAgaWQ6IDEsXFxuICAgICAgICAgICAgdGl0bGU6ICfQlNC40YDQtdC60YLQvtGAJyxcXG4gICAgICAgICAgICBkZXBhcnRtZW50OiAn0JPQu9Cw0LLQvdGL0Lkg0L7RhNGE0LjRgScsXFxuICAgICAgICAgICAgZW1wbG95ZWVzOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIF1cXG4gICAgICB9LFxcbiAgICAgIGVkaXRJdGVtIChpdGVtKSB7XFxuICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pXFxuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKVxcbiAgICAgICAgdGhpcy5kaWFsb2cgPSB0cnVlXFxuICAgICAgfSxcXG4gICAgICBkZWxldGVJdGVtIChpdGVtKSB7XFxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKVxcbiAgICAgICAgY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/JykgJiYgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpXFxuICAgICAgfSxcXG4gICAgICBjbG9zZSAoKSB7XFxuICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlXFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcXG4gICAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSlcXG4gICAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xXFxuICAgICAgICB9LCAzMDApXFxuICAgICAgfSxcXG4gICAgICBzYXZlICgpIHtcXG4gICAgICAgIGlmICh0aGlzLmVkaXRlZEluZGV4ID4gLTEpIHtcXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLml0ZW1zW3RoaXMuZWRpdGVkSW5kZXhdLCB0aGlzLmVkaXRlZEl0ZW0pXFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godGhpcy5lZGl0ZWRJdGVtKVxcbiAgICAgICAgfVxcbiAgICAgICAgdGhpcy5jbG9zZSgpXFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4jcG9zaXRpb25zIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubWItMi5idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG59XFxuXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmMzNDE5MThcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJwb3NpdGlvbnNcIj5cbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1wiIG1heC13aWR0aD1cIjUwMHB4XCI+XG4gICAgICA8di1idG4gY29sb3I9XCJwcmltYXJ5XCIgZGFyayBzbG90PVwiYWN0aXZhdG9yXCIgY2xhc3M9XCJtYi0yXCI+0JTQvtCx0LDQstC40YLRjCDQtNC+0LvQttC90L7RgdGC0Yw8L3YtYnRuPlxuICAgICAgPHYtY2FyZD5cbiAgICAgICAgPHYtY2FyZC10aXRsZT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+e3sgZm9ybVRpdGxlIH19PC9zcGFuPlxuICAgICAgICA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgIDx2LWNvbnRhaW5lciBncmlkLWxpc3QtbWQ+XG4gICAgICAgICAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgICAgICAgICAgPHYtZmxleCB4czEyIHNtNj5cbiAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIGxhYmVsPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgdi1tb2RlbD1cImVkaXRlZEl0ZW0udGl0bGVcIj48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTY+XG4gICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCBsYWJlbD1cItCf0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1XCIgdi1tb2RlbD1cImVkaXRlZEl0ZW0uZGVwYXJ0bWVudFwiPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImJsdWUgZGFya2VuLTFcIiBmbGF0IEBjbGljay5uYXRpdmU9XCJjbG9zZVwiPkNhbmNlbDwvdi1idG4+XG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVwiYmx1ZSBkYXJrZW4tMVwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cInNhdmVcIj5TYXZlPC92LWJ0bj5cbiAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgIDwvdi1jYXJkPlxuICAgIDwvdi1kaWFsb2c+XG4gICAgPHYtZGF0YS10YWJsZVxuICAgICAgOmhlYWRlcnM9XCJoZWFkZXJzXCJcbiAgICAgIDppdGVtcz1cIml0ZW1zXCJcbiAgICAgIGhpZGUtYWN0aW9uc1xuICAgICAgY2xhc3M9XCJlbGV2YXRpb24tMVwiXG4gICAgPlxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJpdGVtc1wiIHNsb3Qtc2NvcGU9XCJwcm9wc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj57eyBwcm9wcy5pdGVtLnRpdGxlIH19PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPnt7IHByb3BzLml0ZW0uZGVwYXJ0bWVudCB9fTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj57eyBwcm9wcy5pdGVtLmVtcGxveWVlcyB9fTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj5cbiAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cIm14LTBcIiBAY2xpY2s9XCJlZGl0SXRlbShwcm9wcy5pdGVtKVwiPlxuICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInRlYWxcIj5lZGl0PC92LWljb24+XG4gICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cIm14LTBcIiBAY2xpY2s9XCJkZWxldGVJdGVtKHByb3BzLml0ZW0pXCI+XG4gICAgICAgICAgICA8di1pY29uIGNvbG9yPVwicGlua1wiPmRlbGV0ZTwvdi1pY29uPlxuICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJuby1kYXRhXCI+XG4gICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJpbml0aWFsaXplXCI+UmVzZXQ8L3YtYnRuPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3YtZGF0YS10YWJsZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YTogKCkgPT4gKHtcbiAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICBoZWFkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAn0J3QvtC80LXRgCcsXG4gICAgICAgICAgYWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiAnaWQnXG4gICAgICAgIH0sXG4gICAgICAgIHsgdGV4dDogJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtScsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ3RpdGxlJyB9LFxuICAgICAgICB7IHRleHQ6ICfQn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtScsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ2RlcGFydG1lbnQnIH0sXG4gICAgICAgIHsgdGV4dDogJ9Ch0L7RgtGA0YPQtNC90LjQutC+0LInLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICdlbXBsb3llZXMnIH0sXG4gICAgICAgIHsgdGV4dDogJ9CU0LXQudGB0YLQstC40Y8nLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICd0aXRsZScsIHNvcnRhYmxlOiBmYWxzZSB9XG4gICAgICBdLFxuICAgICAgaXRlbXM6IFtdLFxuICAgICAgZWRpdGVkSW5kZXg6IC0xLFxuICAgICAgZWRpdGVkSXRlbToge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgZGVwYXJ0bWVudDogJycsXG4gICAgICB9LFxuICAgICAgZGVmYXVsdEl0ZW06IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIGRlcGFydG1lbnQ6ICcnLFxuICAgICAgfVxuICAgIH0pLFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBmb3JtVGl0bGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGl0ZWRJbmRleCA9PT0gLTEgPyAn0J3QvtCy0LDRjyDQtNC+0LvQttC90L7RgdGC0YwnIDogJ9CY0LfQvNC10L3QuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMJ1xuICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgIGRpYWxvZyAodmFsKSB7XG4gICAgICAgIHZhbCB8fCB0aGlzLmNsb3NlKClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQgKCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplKClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGluaXRpYWxpemUgKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgdGl0bGU6ICfQlNC40YDQtdC60YLQvtGAJyxcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6ICfQk9C70LDQstC90YvQuSDQvtGE0YTQuNGBJyxcbiAgICAgICAgICAgIGVtcGxveWVlczogMVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGVkaXRJdGVtIChpdGVtKSB7XG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSlcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSlcbiAgICAgICAgdGhpcy5kaWFsb2cgPSB0cnVlXG4gICAgICB9LFxuICAgICAgZGVsZXRlSXRlbSAoaXRlbSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKVxuICAgICAgICBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKSAmJiB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH0sXG4gICAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2VcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSlcbiAgICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTFcbiAgICAgICAgfSwgMzAwKVxuICAgICAgfSxcbiAgICAgIHNhdmUgKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0ZWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLml0ZW1zW3RoaXMuZWRpdGVkSW5kZXhdLCB0aGlzLmVkaXRlZEl0ZW0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHRoaXMuZWRpdGVkSXRlbSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuI3Bvc2l0aW9ucyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWItMi5idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG59XG5cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwicG9zaXRpb25zXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kaWFsb2csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kaWFsb2cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRpYWxvZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJhY3RpdmF0b3JcIiwgY29sb3I6IFwicHJpbWFyeVwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi0JTQvtCx0LDQstC40YLRjCDQtNC+0LvQttC90L7RgdGC0YxcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZm9ybVRpdGxlKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJncmlkLWxpc3QtbWRcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBzbTY6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRlZEl0ZW0sIFwidGl0bGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0ZWRJdGVtLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIHNtNjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lZGl0ZWRJdGVtLmRlcGFydG1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRlZEl0ZW0sIFwiZGVwYXJ0bWVudFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVkaXRlZEl0ZW0uZGVwYXJ0bWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJibHVlIGRhcmtlbi0xXCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xvc2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImJsdWUgZGFya2VuLTFcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zYXZlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRhdGEtdGFibGVcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0xXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaGVhZGVyczogX3ZtLmhlYWRlcnMsIGl0ZW1zOiBfdm0uaXRlbXMsIFwiaGlkZS1hY3Rpb25zXCI6IFwiXCIgfSxcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmlkKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0udGl0bGUpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5kZXBhcnRtZW50KSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uZW1wbG95ZWVzKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXgtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRJdGVtKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcInRlYWxcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlZGl0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXgtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUl0ZW0ocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwicGlua1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImRlbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICB7IHNsb3Q6IFwibm8tZGF0YVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiB9LCBvbjogeyBjbGljazogX3ZtLmluaXRpYWxpemUgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZXNldFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yYzM0MTkxOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMmMzNDE5MThcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDZcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==