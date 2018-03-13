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
exports.push([module.i, "\n#positions[data-v-2c341918] {\n    position: relative;\n    max-width: 90%;\n    margin: 10px auto;\n}\n.mb-2.btn[data-v-2c341918] {\n    position: absolute;\n    bottom: -50px;\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/positions/resources/assets/js/pages/admin/positions/List.vue"],"names":[],"mappings":";AA2IA;IACA,mBAAA;IACA,eAAA;IACA,kBAAA;CACA;AAEA;IACA,mBAAA;IACA,cAAA;CACA","file":"List.vue","sourcesContent":["<template>\n  <div id=\"positions\">\n    <v-dialog v-model=\"dialog\" max-width=\"500px\">\n      <v-btn color=\"primary\" dark slot=\"activator\" class=\"mb-2\">Добавить должность</v-btn>\n      <v-card>\n        <v-card-title>\n          <span class=\"headline\">{{ formTitle }}</span>\n        </v-card-title>\n        <v-card-text>\n          <v-container grid-list-md>\n            <v-layout wrap>\n              <v-flex xs12 sm6>\n                <v-text-field label=\"Наименование\" v-model=\"editedItem.title\"></v-text-field>\n              </v-flex>\n              <v-flex xs12 sm6>\n                <v-text-field label=\"Подразделение\" v-model=\"editedItem.department\"></v-text-field>\n              </v-flex>\n            </v-layout>\n          </v-container>\n        </v-card-text>\n        <v-card-actions>\n          <v-spacer></v-spacer>\n          <v-btn color=\"blue darken-1\" flat @click.native=\"close\">Cancel</v-btn>\n          <v-btn color=\"blue darken-1\" flat @click.native=\"save\">Save</v-btn>\n        </v-card-actions>\n      </v-card>\n    </v-dialog>\n    <v-data-table\n      :headers=\"headers\"\n      :items=\"items\"\n      hide-actions\n      class=\"elevation-1\"\n    >\n      <template slot=\"items\" slot-scope=\"props\">\n        <td class=\"text-xs-right\">{{ props.item.id }}</td>\n        <td class=\"text-xs-right\">{{ props.item.title }}</td>\n        <td class=\"text-xs-right\">{{ props.item.department_id }}</td>\n        <td class=\"text-xs-right\">{{ props.item.employees }}</td>\n        <td class=\"text-xs-right\">\n          <v-btn icon class=\"mx-0\" @click=\"editItem(props.item)\">\n            <v-icon color=\"teal\">edit</v-icon>\n          </v-btn>\n          <v-btn icon class=\"mx-0\" @click=\"deleteItem(props.item)\">\n            <v-icon color=\"pink\">delete</v-icon>\n          </v-btn>\n        </td>\n      </template>\n      <template slot=\"no-data\">\n        <v-btn color=\"primary\" @click=\"initialize\">Reset</v-btn>\n      </template>\n    </v-data-table>\n  </div>\n</template>\n\n<script>\n  import { mapGetters } from 'vuex';\n  export default {\n    data: () => ({\n      dialog: false,\n      headers: [\n        {\n          text: 'Номер',\n          align: 'right',\n          sortable: false,\n          value: 'id'\n        },\n        { text: 'Наименование', align: 'right', value: 'title' },\n        { text: 'Подразделение', align: 'right', value: 'department' },\n        { text: 'Сотрудников', align: 'right', value: 'employees' },\n        { text: 'Действия', align: 'right', value: 'title', sortable: false }\n      ],\n      //items: [],\n      editedIndex: -1,\n      editedItem: {\n        id: '',\n        title: '',\n        department: '',\n      },\n      defaultItem: {\n        id: '',\n        title: '',\n        department: '',\n      }\n    }),\n    computed: {\n      ...mapGetters({\n        item: 'positions/positions'\n      }),\n      formTitle () {\n        return this.editedIndex === -1 ? 'Новая должность' : 'Изменить должность'\n      }\n    },\n    watch: {\n      dialog (val) {\n        val || this.close()\n      }\n    },\n    created () {\n      this.initialize()\n    },\n    methods: {\n      initialize () {\n        this.items = [\n          {\n            id: 1,\n            title: 'Директор',\n            department: 'Главный оффис',\n            employees: 1\n          }\n        ]\n      },\n      editItem (item) {\n        this.editedIndex = this.items.indexOf(item)\n        this.editedItem = Object.assign({}, item)\n        this.dialog = true\n      },\n      deleteItem (item) {\n        const index = this.items.indexOf(item)\n        confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)\n      },\n      close () {\n        this.dialog = false\n        setTimeout(() => {\n          this.editedItem = Object.assign({}, this.defaultItem)\n          this.editedIndex = -1\n        }, 300)\n      },\n      save () {\n        if (this.editedIndex > -1) {\n          Object.assign(this.items[this.editedIndex], this.editedItem)\n        } else {\n          this.items.push(this.editedItem)\n        }\n        this.close()\n      }\n    }\n  }\n</script>\n\n<style scoped>\n#positions {\n    position: relative;\n    max-width: 90%;\n    margin: 10px auto;\n}\n\n.mb-2.btn {\n    position: absolute;\n    bottom: -50px;\n}\n\n</style>"],"sourceRoot":""}]);

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
      //items: [],
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
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    item: 'positions/positions'
  }), {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'Новая должность' : 'Изменить должность';
    }
  }),
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
                    _vm._v(_vm._s(props.item.department_id))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZT82MDg4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlPzA2ODYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlP2JiZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSx3REFBeUQseUJBQXlCLHFCQUFxQix3QkFBd0IsR0FBRyw4QkFBOEIs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzUuZWRjNjA1NDdlNDE0ODIwNGE3OWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMzQxOTE4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTGlzdC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTJjMzQxOTE4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMmMzNDE5MThcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxwb3NpdGlvbnNcXFxcTGlzdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmMzNDE5MThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yYzM0MTkxOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMzNDE5MThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiOGNiYTRlYmNcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmMzNDE5MThcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzM0MTkxOFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTJjMzQxOTE4XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbiNwb3NpdGlvbnNbZGF0YS12LTJjMzQxOTE4XSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbn1cXG4ubWItMi5idG5bZGF0YS12LTJjMzQxOTE4XSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNTBweDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTJJQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0NBQ0E7QUFFQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJMaXN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGlkPVxcXCJwb3NpdGlvbnNcXFwiPlxcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwiZGlhbG9nXFxcIiBtYXgtd2lkdGg9XFxcIjUwMHB4XFxcIj5cXG4gICAgICA8di1idG4gY29sb3I9XFxcInByaW1hcnlcXFwiIGRhcmsgc2xvdD1cXFwiYWN0aXZhdG9yXFxcIiBjbGFzcz1cXFwibWItMlxcXCI+0JTQvtCx0LDQstC40YLRjCDQtNC+0LvQttC90L7RgdGC0Yw8L3YtYnRuPlxcbiAgICAgIDx2LWNhcmQ+XFxuICAgICAgICA8di1jYXJkLXRpdGxlPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGxpbmVcXFwiPnt7IGZvcm1UaXRsZSB9fTwvc3Bhbj5cXG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcbiAgICAgICAgPHYtY2FyZC10ZXh0PlxcbiAgICAgICAgICA8di1jb250YWluZXIgZ3JpZC1saXN0LW1kPlxcbiAgICAgICAgICAgIDx2LWxheW91dCB3cmFwPlxcbiAgICAgICAgICAgICAgPHYtZmxleCB4czEyIHNtNj5cXG4gICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCBsYWJlbD1cXFwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1XFxcIiB2LW1vZGVsPVxcXCJlZGl0ZWRJdGVtLnRpdGxlXFxcIj48L3YtdGV4dC1maWVsZD5cXG4gICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgPHYtZmxleCB4czEyIHNtNj5cXG4gICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCBsYWJlbD1cXFwi0J/QvtC00YDQsNC30LTQtdC70LXQvdC40LVcXFwiIHYtbW9kZWw9XFxcImVkaXRlZEl0ZW0uZGVwYXJ0bWVudFxcXCI+PC92LXRleHQtZmllbGQ+XFxuICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICA8L3YtbGF5b3V0PlxcbiAgICAgICAgICA8L3YtY29udGFpbmVyPlxcbiAgICAgICAgPC92LWNhcmQtdGV4dD5cXG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cXG4gICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cXFwiYmx1ZSBkYXJrZW4tMVxcXCIgZmxhdCBAY2xpY2submF0aXZlPVxcXCJjbG9zZVxcXCI+Q2FuY2VsPC92LWJ0bj5cXG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJibHVlIGRhcmtlbi0xXFxcIiBmbGF0IEBjbGljay5uYXRpdmU9XFxcInNhdmVcXFwiPlNhdmU8L3YtYnRuPlxcbiAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXG4gICAgICA8L3YtY2FyZD5cXG4gICAgPC92LWRpYWxvZz5cXG4gICAgPHYtZGF0YS10YWJsZVxcbiAgICAgIDpoZWFkZXJzPVxcXCJoZWFkZXJzXFxcIlxcbiAgICAgIDppdGVtcz1cXFwiaXRlbXNcXFwiXFxuICAgICAgaGlkZS1hY3Rpb25zXFxuICAgICAgY2xhc3M9XFxcImVsZXZhdGlvbi0xXFxcIlxcbiAgICA+XFxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIml0ZW1zXFxcIiBzbG90LXNjb3BlPVxcXCJwcm9wc1xcXCI+XFxuICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7IHByb3BzLml0ZW0uaWQgfX08L3RkPlxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57eyBwcm9wcy5pdGVtLnRpdGxlIH19PC90ZD5cXG4gICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+e3sgcHJvcHMuaXRlbS5kZXBhcnRtZW50X2lkIH19PC90ZD5cXG4gICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+e3sgcHJvcHMuaXRlbS5lbXBsb3llZXMgfX08L3RkPlxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgPHYtYnRuIGljb24gY2xhc3M9XFxcIm14LTBcXFwiIEBjbGljaz1cXFwiZWRpdEl0ZW0ocHJvcHMuaXRlbSlcXFwiPlxcbiAgICAgICAgICAgIDx2LWljb24gY29sb3I9XFxcInRlYWxcXFwiPmVkaXQ8L3YtaWNvbj5cXG4gICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgPHYtYnRuIGljb24gY2xhc3M9XFxcIm14LTBcXFwiIEBjbGljaz1cXFwiZGVsZXRlSXRlbShwcm9wcy5pdGVtKVxcXCI+XFxuICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cXFwicGlua1xcXCI+ZGVsZXRlPC92LWljb24+XFxuICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICA8L3RkPlxcbiAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIm5vLWRhdGFcXFwiPlxcbiAgICAgICAgPHYtYnRuIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBAY2xpY2s9XFxcImluaXRpYWxpemVcXFwiPlJlc2V0PC92LWJ0bj5cXG4gICAgICA8L3RlbXBsYXRlPlxcbiAgICA8L3YtZGF0YS10YWJsZT5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcXG4gIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgZGF0YTogKCkgPT4gKHtcXG4gICAgICBkaWFsb2c6IGZhbHNlLFxcbiAgICAgIGhlYWRlcnM6IFtcXG4gICAgICAgIHtcXG4gICAgICAgICAgdGV4dDogJ9Cd0L7QvNC10YAnLFxcbiAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcXG4gICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxcbiAgICAgICAgICB2YWx1ZTogJ2lkJ1xcbiAgICAgICAgfSxcXG4gICAgICAgIHsgdGV4dDogJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtScsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ3RpdGxlJyB9LFxcbiAgICAgICAgeyB0ZXh0OiAn0J/QvtC00YDQsNC30LTQtdC70LXQvdC40LUnLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICdkZXBhcnRtZW50JyB9LFxcbiAgICAgICAgeyB0ZXh0OiAn0KHQvtGC0YDRg9C00L3QuNC60L7QsicsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ2VtcGxveWVlcycgfSxcXG4gICAgICAgIHsgdGV4dDogJ9CU0LXQudGB0YLQstC40Y8nLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICd0aXRsZScsIHNvcnRhYmxlOiBmYWxzZSB9XFxuICAgICAgXSxcXG4gICAgICAvL2l0ZW1zOiBbXSxcXG4gICAgICBlZGl0ZWRJbmRleDogLTEsXFxuICAgICAgZWRpdGVkSXRlbToge1xcbiAgICAgICAgaWQ6ICcnLFxcbiAgICAgICAgdGl0bGU6ICcnLFxcbiAgICAgICAgZGVwYXJ0bWVudDogJycsXFxuICAgICAgfSxcXG4gICAgICBkZWZhdWx0SXRlbToge1xcbiAgICAgICAgaWQ6ICcnLFxcbiAgICAgICAgdGl0bGU6ICcnLFxcbiAgICAgICAgZGVwYXJ0bWVudDogJycsXFxuICAgICAgfVxcbiAgICB9KSxcXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAuLi5tYXBHZXR0ZXJzKHtcXG4gICAgICAgIGl0ZW06ICdwb3NpdGlvbnMvcG9zaXRpb25zJ1xcbiAgICAgIH0pLFxcbiAgICAgIGZvcm1UaXRsZSAoKSB7XFxuICAgICAgICByZXR1cm4gdGhpcy5lZGl0ZWRJbmRleCA9PT0gLTEgPyAn0J3QvtCy0LDRjyDQtNC+0LvQttC90L7RgdGC0YwnIDogJ9CY0LfQvNC10L3QuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMJ1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgd2F0Y2g6IHtcXG4gICAgICBkaWFsb2cgKHZhbCkge1xcbiAgICAgICAgdmFsIHx8IHRoaXMuY2xvc2UoKVxcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgY3JlYXRlZCAoKSB7XFxuICAgICAgdGhpcy5pbml0aWFsaXplKClcXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgIGluaXRpYWxpemUgKCkge1xcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcXG4gICAgICAgICAge1xcbiAgICAgICAgICAgIGlkOiAxLFxcbiAgICAgICAgICAgIHRpdGxlOiAn0JTQuNGA0LXQutGC0L7RgCcsXFxuICAgICAgICAgICAgZGVwYXJ0bWVudDogJ9CT0LvQsNCy0L3Ri9C5INC+0YTRhNC40YEnLFxcbiAgICAgICAgICAgIGVtcGxveWVlczogMVxcbiAgICAgICAgICB9XFxuICAgICAgICBdXFxuICAgICAgfSxcXG4gICAgICBlZGl0SXRlbSAoaXRlbSkge1xcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKVxcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSlcXG4gICAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZVxcbiAgICAgIH0sXFxuICAgICAgZGVsZXRlSXRlbSAoaXRlbSkge1xcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSlcXG4gICAgICAgIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPycpICYmIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKVxcbiAgICAgIH0sXFxuICAgICAgY2xvc2UgKCkge1xcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZVxcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pXFxuICAgICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMVxcbiAgICAgICAgfSwgMzAwKVxcbiAgICAgIH0sXFxuICAgICAgc2F2ZSAoKSB7XFxuICAgICAgICBpZiAodGhpcy5lZGl0ZWRJbmRleCA+IC0xKSB7XFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5pdGVtc1t0aGlzLmVkaXRlZEluZGV4XSwgdGhpcy5lZGl0ZWRJdGVtKVxcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHRoaXMuZWRpdGVkSXRlbSlcXG4gICAgICAgIH1cXG4gICAgICAgIHRoaXMuY2xvc2UoKVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuI3Bvc2l0aW9ucyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbn1cXG5cXG4ubWItMi5idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTUwcHg7XFxufVxcblxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTJjMzQxOTE4XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwicG9zaXRpb25zXCI+XG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiBtYXgtd2lkdGg9XCI1MDBweFwiPlxuICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIGRhcmsgc2xvdD1cImFjdGl2YXRvclwiIGNsYXNzPVwibWItMlwiPtCU0L7QsdCw0LLQuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMPC92LWJ0bj5cbiAgICAgIDx2LWNhcmQ+XG4gICAgICAgIDx2LWNhcmQtdGl0bGU+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkbGluZVwiPnt7IGZvcm1UaXRsZSB9fTwvc3Bhbj5cbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICA8di1jb250YWluZXIgZ3JpZC1saXN0LW1kPlxuICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXA+XG4gICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTY+XG4gICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCBsYWJlbD1cItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtVwiIHYtbW9kZWw9XCJlZGl0ZWRJdGVtLnRpdGxlXCI+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202PlxuICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XCLQn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtVwiIHYtbW9kZWw9XCJlZGl0ZWRJdGVtLmRlcGFydG1lbnRcIj48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICA8di1idG4gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgZmxhdCBAY2xpY2submF0aXZlPVwiY2xvc2VcIj5DYW5jZWw8L3YtYnRuPlxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImJsdWUgZGFya2VuLTFcIiBmbGF0IEBjbGljay5uYXRpdmU9XCJzYXZlXCI+U2F2ZTwvdi1idG4+XG4gICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICA8L3YtY2FyZD5cbiAgICA8L3YtZGlhbG9nPlxuICAgIDx2LWRhdGEtdGFibGVcbiAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXG4gICAgICA6aXRlbXM9XCJpdGVtc1wiXG4gICAgICBoaWRlLWFjdGlvbnNcbiAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTFcIlxuICAgID5cbiAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiaXRlbXNcIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPnt7IHByb3BzLml0ZW0uaWQgfX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+e3sgcHJvcHMuaXRlbS50aXRsZSB9fTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj57eyBwcm9wcy5pdGVtLmRlcGFydG1lbnRfaWQgfX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+e3sgcHJvcHMuaXRlbS5lbXBsb3llZXMgfX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+XG4gICAgICAgICAgPHYtYnRuIGljb24gY2xhc3M9XCJteC0wXCIgQGNsaWNrPVwiZWRpdEl0ZW0ocHJvcHMuaXRlbSlcIj5cbiAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJ0ZWFsXCI+ZWRpdDwvdi1pY29uPlxuICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgPHYtYnRuIGljb24gY2xhc3M9XCJteC0wXCIgQGNsaWNrPVwiZGVsZXRlSXRlbShwcm9wcy5pdGVtKVwiPlxuICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInBpbmtcIj5kZWxldGU8L3YtaWNvbj5cbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibm8tZGF0YVwiPlxuICAgICAgICA8di1idG4gY29sb3I9XCJwcmltYXJ5XCIgQGNsaWNrPVwiaW5pdGlhbGl6ZVwiPlJlc2V0PC92LWJ0bj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC92LWRhdGEtdGFibGU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YTogKCkgPT4gKHtcbiAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICBoZWFkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAn0J3QvtC80LXRgCcsXG4gICAgICAgICAgYWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiAnaWQnXG4gICAgICAgIH0sXG4gICAgICAgIHsgdGV4dDogJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtScsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ3RpdGxlJyB9LFxuICAgICAgICB7IHRleHQ6ICfQn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtScsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ2RlcGFydG1lbnQnIH0sXG4gICAgICAgIHsgdGV4dDogJ9Ch0L7RgtGA0YPQtNC90LjQutC+0LInLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICdlbXBsb3llZXMnIH0sXG4gICAgICAgIHsgdGV4dDogJ9CU0LXQudGB0YLQstC40Y8nLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICd0aXRsZScsIHNvcnRhYmxlOiBmYWxzZSB9XG4gICAgICBdLFxuICAgICAgLy9pdGVtczogW10sXG4gICAgICBlZGl0ZWRJbmRleDogLTEsXG4gICAgICBlZGl0ZWRJdGVtOiB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBkZXBhcnRtZW50OiAnJyxcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0SXRlbToge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgZGVwYXJ0bWVudDogJycsXG4gICAgICB9XG4gICAgfSksXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgICBpdGVtOiAncG9zaXRpb25zL3Bvc2l0aW9ucydcbiAgICAgIH0pLFxuICAgICAgZm9ybVRpdGxlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdGVkSW5kZXggPT09IC0xID8gJ9Cd0L7QstCw0Y8g0LTQvtC70LbQvdC+0YHRgtGMJyA6ICfQmNC30LzQtdC90LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjCdcbiAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICBkaWFsb2cgKHZhbCkge1xuICAgICAgICB2YWwgfHwgdGhpcy5jbG9zZSgpXG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkICgpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBpbml0aWFsaXplICgpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHRpdGxlOiAn0JTQuNGA0LXQutGC0L7RgCcsXG4gICAgICAgICAgICBkZXBhcnRtZW50OiAn0JPQu9Cw0LLQvdGL0Lkg0L7RhNGE0LjRgScsXG4gICAgICAgICAgICBlbXBsb3llZXM6IDFcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBlZGl0SXRlbSAoaXRlbSkge1xuICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pXG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pXG4gICAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRlbGV0ZUl0ZW0gKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSlcbiAgICAgICAgY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/JykgJiYgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB9LFxuICAgICAgY2xvc2UgKCkge1xuICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pXG4gICAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xXG4gICAgICAgIH0sIDMwMClcbiAgICAgIH0sXG4gICAgICBzYXZlICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdGVkSW5kZXggPiAtMSkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5pdGVtc1t0aGlzLmVkaXRlZEluZGV4XSwgdGhpcy5lZGl0ZWRJdGVtKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh0aGlzLmVkaXRlZEl0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiNwb3NpdGlvbnMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLm1iLTIuYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNTBweDtcbn1cblxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJwb3NpdGlvbnNcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNTAwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlhbG9nXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImFjdGl2YXRvclwiLCBjb2xvcjogXCJwcmltYXJ5XCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQlNC+0LHQsNCy0LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5mb3JtVGl0bGUpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImdyaWQtbGlzdC1tZFwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIHNtNjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWRpdGVkSXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZWRpdGVkSXRlbSwgXCJ0aXRsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVkaXRlZEl0ZW0udGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgc202OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcItCf0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0uZGVwYXJ0bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZWRpdGVkSXRlbSwgXCJkZXBhcnRtZW50XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZWRpdGVkSXRlbS5kZXBhcnRtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImJsdWUgZGFya2VuLTFcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jbG9zZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZSBkYXJrZW4tMVwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNhdmUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGF0YS10YWJsZVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWxldmF0aW9uLTFcIixcbiAgICAgICAgICBhdHRyczogeyBoZWFkZXJzOiBfdm0uaGVhZGVycywgaXRlbXM6IF92bS5pdGVtcywgXCJoaWRlLWFjdGlvbnNcIjogXCJcIiB9LFxuICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiaXRlbXNcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uaWQpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS50aXRsZSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmRlcGFydG1lbnRfaWQpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5lbXBsb3llZXMpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJteC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdEl0ZW0ocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwidGVhbFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVkaXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJteC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlSXRlbShwcm9wcy5pdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJwaW5rXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZGVsZXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgICAgIHsgc2xvdDogXCJuby1kYXRhXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiIH0sIG9uOiB7IGNsaWNrOiBfdm0uaW5pdGlhbGl6ZSB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlJlc2V0XCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTJjMzQxOTE4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yYzM0MTkxOFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwic291cmNlUm9vdCI6IiJ9