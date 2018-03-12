webpackJsonp([5],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(205)
/* template */
var __vue_template__ = __webpack_require__(232)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
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
//
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
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name'
      }, { text: 'Calories', value: 'calories' }, { text: 'Fat (g)', value: 'fat' }, { text: 'Carbs (g)', value: 'carbs' }, { text: 'Protein (g)', value: 'protein' }, { text: 'Actions', value: 'name', sortable: false }],
      items: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
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
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0
      }, {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3
      }, {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0
      }, {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3
      }, {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9
      }, {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0
      }, {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0
      }, {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5
      }, {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9
      }, {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7
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

/***/ 232:
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
            [_vm._v("New Item")]
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
                            { attrs: { xs12: "", sm6: "", md4: "" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Dessert name" },
                                model: {
                                  value: _vm.editedItem.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "name", $$v)
                                  },
                                  expression: "editedItem.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm6: "", md4: "" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Calories" },
                                model: {
                                  value: _vm.editedItem.calories,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "calories", $$v)
                                  },
                                  expression: "editedItem.calories"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm6: "", md4: "" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Fat (g)" },
                                model: {
                                  value: _vm.editedItem.fat,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "fat", $$v)
                                  },
                                  expression: "editedItem.fat"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm6: "", md4: "" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Carbs (g)" },
                                model: {
                                  value: _vm.editedItem.carbs,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "carbs", $$v)
                                  },
                                  expression: "editedItem.carbs"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm6: "", md4: "" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Protein (g)" },
                                model: {
                                  value: _vm.editedItem.protein,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "protein", $$v)
                                  },
                                  expression: "editedItem.protein"
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
                  _c("td", [_vm._v(_vm._s(props.item.name))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-xs-right" }, [
                    _vm._v(_vm._s(props.item.calories))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-xs-right" }, [
                    _vm._v(_vm._s(props.item.fat))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-xs-right" }, [
                    _vm._v(_vm._s(props.item.carbs))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-xs-right" }, [
                    _vm._v(_vm._s(props.item.protein))
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "justify-center layout px-0" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWU/ODQ2MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3dCQTs7O2NBR0E7O2NBR0E7ZUFDQTtrQkFDQTtlQUVBO0FBTEEsT0FEQSw2QkFPQSx3Q0FDQSxxQ0FDQSx5Q0FDQSx5REFFQTthQUNBO29CQUNBOztjQUVBO2tCQUNBO2FBQ0E7ZUFDQTtpQkFFQTtBQU5BOztjQVFBO2tCQUNBO2FBQ0E7ZUFDQTtpQkFHQTtBQVBBO0FBeEJBOzs7b0NBaUNBO29EQUNBO0FBRUE7QUFKQTs7aUNBTUE7a0JBQ0E7QUFFQTtBQUpBOzhCQUtBO1NBQ0E7QUFDQTs7O3NDQUVBOztjQUdBO2tCQUNBO2FBQ0E7ZUFDQTtpQkFFQTtBQU5BLE9BREE7Y0FTQTtrQkFDQTthQUNBO2VBQ0E7aUJBRUE7QUFOQTtjQVFBO2tCQUNBO2FBQ0E7ZUFDQTtpQkFFQTtBQU5BO2NBUUE7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QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQkFBK0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNENBQTRDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0Esd0NBQXdDLFNBQVMsZ0JBQWdCLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0Esd0NBQXdDLFNBQVMsZ0JBQWdCLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLG1CQUFtQixPQUFPLHdCQUF3QixFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvNS4yZmUxOWRkYmQxOWU3NWVlNzYyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzM0MTkxOFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxccG9zaXRpb25zXFxcXExpc3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJjMzQxOTE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmMzNDE5MThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9nXCIgbWF4LXdpZHRoPVwiNTAwcHhcIj5cbiAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBkYXJrIHNsb3Q9XCJhY3RpdmF0b3JcIiBjbGFzcz1cIm1iLTJcIj5OZXcgSXRlbTwvdi1idG4+XG4gICAgICA8di1jYXJkPlxuICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj57eyBmb3JtVGl0bGUgfX08L3NwYW4+XG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgPHYtY29udGFpbmVyIGdyaWQtbGlzdC1tZD5cbiAgICAgICAgICAgIDx2LWxheW91dCB3cmFwPlxuICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202IG1kND5cbiAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIGxhYmVsPVwiRGVzc2VydCBuYW1lXCIgdi1tb2RlbD1cImVkaXRlZEl0ZW0ubmFtZVwiPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgPHYtZmxleCB4czEyIHNtNiBtZDQ+XG4gICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCBsYWJlbD1cIkNhbG9yaWVzXCIgdi1tb2RlbD1cImVkaXRlZEl0ZW0uY2Fsb3JpZXNcIj48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTYgbWQ0PlxuICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XCJGYXQgKGcpXCIgdi1tb2RlbD1cImVkaXRlZEl0ZW0uZmF0XCI+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202IG1kND5cbiAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIGxhYmVsPVwiQ2FyYnMgKGcpXCIgdi1tb2RlbD1cImVkaXRlZEl0ZW0uY2FyYnNcIj48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTYgbWQ0PlxuICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XCJQcm90ZWluIChnKVwiIHYtbW9kZWw9XCJlZGl0ZWRJdGVtLnByb3RlaW5cIj48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICA8di1idG4gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgZmxhdCBAY2xpY2submF0aXZlPVwiY2xvc2VcIj5DYW5jZWw8L3YtYnRuPlxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImJsdWUgZGFya2VuLTFcIiBmbGF0IEBjbGljay5uYXRpdmU9XCJzYXZlXCI+U2F2ZTwvdi1idG4+XG4gICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICA8L3YtY2FyZD5cbiAgICA8L3YtZGlhbG9nPlxuICAgIDx2LWRhdGEtdGFibGVcbiAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXG4gICAgICA6aXRlbXM9XCJpdGVtc1wiXG4gICAgICBoaWRlLWFjdGlvbnNcbiAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTFcIlxuICAgID5cbiAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiaXRlbXNcIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cbiAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0ubmFtZSB9fTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj57eyBwcm9wcy5pdGVtLmNhbG9yaWVzIH19PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPnt7IHByb3BzLml0ZW0uZmF0IH19PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPnt7IHByb3BzLml0ZW0uY2FyYnMgfX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+e3sgcHJvcHMuaXRlbS5wcm90ZWluIH19PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwianVzdGlmeS1jZW50ZXIgbGF5b3V0IHB4LTBcIj5cbiAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cIm14LTBcIiBAY2xpY2s9XCJlZGl0SXRlbShwcm9wcy5pdGVtKVwiPlxuICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInRlYWxcIj5lZGl0PC92LWljb24+XG4gICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cIm14LTBcIiBAY2xpY2s9XCJkZWxldGVJdGVtKHByb3BzLml0ZW0pXCI+XG4gICAgICAgICAgICA8di1pY29uIGNvbG9yPVwicGlua1wiPmRlbGV0ZTwvdi1pY29uPlxuICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJuby1kYXRhXCI+XG4gICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJpbml0aWFsaXplXCI+UmVzZXQ8L3YtYnRuPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3YtZGF0YS10YWJsZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YTogKCkgPT4gKHtcbiAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICBoZWFkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRGVzc2VydCAoMTAwZyBzZXJ2aW5nKScsXG4gICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6ICduYW1lJ1xuICAgICAgICB9LFxuICAgICAgICB7IHRleHQ6ICdDYWxvcmllcycsIHZhbHVlOiAnY2Fsb3JpZXMnIH0sXG4gICAgICAgIHsgdGV4dDogJ0ZhdCAoZyknLCB2YWx1ZTogJ2ZhdCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ2FyYnMgKGcpJywgdmFsdWU6ICdjYXJicycgfSxcbiAgICAgICAgeyB0ZXh0OiAnUHJvdGVpbiAoZyknLCB2YWx1ZTogJ3Byb3RlaW4nIH0sXG4gICAgICAgIHsgdGV4dDogJ0FjdGlvbnMnLCB2YWx1ZTogJ25hbWUnLCBzb3J0YWJsZTogZmFsc2UgfVxuICAgICAgXSxcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIGVkaXRlZEluZGV4OiAtMSxcbiAgICAgIGVkaXRlZEl0ZW06IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGNhbG9yaWVzOiAwLFxuICAgICAgICBmYXQ6IDAsXG4gICAgICAgIGNhcmJzOiAwLFxuICAgICAgICBwcm90ZWluOiAwXG4gICAgICB9LFxuICAgICAgZGVmYXVsdEl0ZW06IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGNhbG9yaWVzOiAwLFxuICAgICAgICBmYXQ6IDAsXG4gICAgICAgIGNhcmJzOiAwLFxuICAgICAgICBwcm90ZWluOiAwXG4gICAgICB9XG4gICAgfSksXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGZvcm1UaXRsZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRlZEluZGV4ID09PSAtMSA/ICdOZXcgSXRlbScgOiAnRWRpdCBJdGVtJ1xuICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgIGRpYWxvZyAodmFsKSB7XG4gICAgICAgIHZhbCB8fCB0aGlzLmNsb3NlKClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQgKCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplKClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGluaXRpYWxpemUgKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdGcm96ZW4gWW9ndXJ0JyxcbiAgICAgICAgICAgIGNhbG9yaWVzOiAxNTksXG4gICAgICAgICAgICBmYXQ6IDYuMCxcbiAgICAgICAgICAgIGNhcmJzOiAyNCxcbiAgICAgICAgICAgIHByb3RlaW46IDQuMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0ljZSBjcmVhbSBzYW5kd2ljaCcsXG4gICAgICAgICAgICBjYWxvcmllczogMjM3LFxuICAgICAgICAgICAgZmF0OiA5LjAsXG4gICAgICAgICAgICBjYXJiczogMzcsXG4gICAgICAgICAgICBwcm90ZWluOiA0LjNcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdFY2xhaXInLFxuICAgICAgICAgICAgY2Fsb3JpZXM6IDI2MixcbiAgICAgICAgICAgIGZhdDogMTYuMCxcbiAgICAgICAgICAgIGNhcmJzOiAyMyxcbiAgICAgICAgICAgIHByb3RlaW46IDYuMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0N1cGNha2UnLFxuICAgICAgICAgICAgY2Fsb3JpZXM6IDMwNSxcbiAgICAgICAgICAgIGZhdDogMy43LFxuICAgICAgICAgICAgY2FyYnM6IDY3LFxuICAgICAgICAgICAgcHJvdGVpbjogNC4zXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnR2luZ2VyYnJlYWQnLFxuICAgICAgICAgICAgY2Fsb3JpZXM6IDM1NixcbiAgICAgICAgICAgIGZhdDogMTYuMCxcbiAgICAgICAgICAgIGNhcmJzOiA0OSxcbiAgICAgICAgICAgIHByb3RlaW46IDMuOVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0plbGx5IGJlYW4nLFxuICAgICAgICAgICAgY2Fsb3JpZXM6IDM3NSxcbiAgICAgICAgICAgIGZhdDogMC4wLFxuICAgICAgICAgICAgY2FyYnM6IDk0LFxuICAgICAgICAgICAgcHJvdGVpbjogMC4wXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTG9sbGlwb3AnLFxuICAgICAgICAgICAgY2Fsb3JpZXM6IDM5MixcbiAgICAgICAgICAgIGZhdDogMC4yLFxuICAgICAgICAgICAgY2FyYnM6IDk4LFxuICAgICAgICAgICAgcHJvdGVpbjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0hvbmV5Y29tYicsXG4gICAgICAgICAgICBjYWxvcmllczogNDA4LFxuICAgICAgICAgICAgZmF0OiAzLjIsXG4gICAgICAgICAgICBjYXJiczogODcsXG4gICAgICAgICAgICBwcm90ZWluOiA2LjVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdEb251dCcsXG4gICAgICAgICAgICBjYWxvcmllczogNDUyLFxuICAgICAgICAgICAgZmF0OiAyNS4wLFxuICAgICAgICAgICAgY2FyYnM6IDUxLFxuICAgICAgICAgICAgcHJvdGVpbjogNC45XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnS2l0S2F0JyxcbiAgICAgICAgICAgIGNhbG9yaWVzOiA1MTgsXG4gICAgICAgICAgICBmYXQ6IDI2LjAsXG4gICAgICAgICAgICBjYXJiczogNjUsXG4gICAgICAgICAgICBwcm90ZWluOiA3XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgZWRpdEl0ZW0gKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKVxuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKVxuICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWVcbiAgICAgIH0sXG4gICAgICBkZWxldGVJdGVtIChpdGVtKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pXG4gICAgICAgIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPycpICYmIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgfSxcbiAgICAgIGNsb3NlICgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKVxuICAgICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMVxuICAgICAgICB9LCAzMDApXG4gICAgICB9LFxuICAgICAgc2F2ZSAoKSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuaXRlbXNbdGhpcy5lZGl0ZWRJbmRleF0sIHRoaXMuZWRpdGVkSXRlbSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godGhpcy5lZGl0ZWRJdGVtKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kaWFsb2csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kaWFsb2cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRpYWxvZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJhY3RpdmF0b3JcIiwgY29sb3I6IFwicHJpbWFyeVwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiTmV3IEl0ZW1cIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZm9ybVRpdGxlKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJncmlkLWxpc3QtbWRcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBzbTY6IFwiXCIsIG1kNDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCJEZXNzZXJ0IG5hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWRpdGVkSXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5lZGl0ZWRJdGVtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0ZWRJdGVtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgc202OiBcIlwiLCBtZDQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwiQ2Fsb3JpZXNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWRpdGVkSXRlbS5jYWxvcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZWRpdGVkSXRlbSwgXCJjYWxvcmllc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVkaXRlZEl0ZW0uY2Fsb3JpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgc202OiBcIlwiLCBtZDQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwiRmF0IChnKVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lZGl0ZWRJdGVtLmZhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZWRpdGVkSXRlbSwgXCJmYXRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0ZWRJdGVtLmZhdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBzbTY6IFwiXCIsIG1kNDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCJDYXJicyAoZylcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWRpdGVkSXRlbS5jYXJicyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZWRpdGVkSXRlbSwgXCJjYXJic1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVkaXRlZEl0ZW0uY2FyYnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgc202OiBcIlwiLCBtZDQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwiUHJvdGVpbiAoZylcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWRpdGVkSXRlbS5wcm90ZWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5lZGl0ZWRJdGVtLCBcInByb3RlaW5cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0ZWRJdGVtLnByb3RlaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZSBkYXJrZW4tMVwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsb3NlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJibHVlIGRhcmtlbi0xXCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2F2ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1kYXRhLXRhYmxlXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMVwiLFxuICAgICAgICAgIGF0dHJzOiB7IGhlYWRlcnM6IF92bS5oZWFkZXJzLCBpdGVtczogX3ZtLml0ZW1zLCBcImhpZGUtYWN0aW9uc1wiOiBcIlwiIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uY2Fsb3JpZXMpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5mYXQpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5jYXJicykpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLnByb3RlaW4pKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJqdXN0aWZ5LWNlbnRlciBsYXlvdXQgcHgtMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXgtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRJdGVtKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcInRlYWxcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlZGl0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXgtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUl0ZW0ocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwicGlua1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImRlbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICB7IHNsb3Q6IFwibm8tZGF0YVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiB9LCBvbjogeyBjbGljazogX3ZtLmluaXRpYWxpemUgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZXNldFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yYzM0MTkxOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMmMzNDE5MThcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjMyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJzb3VyY2VSb290IjoiIn0=