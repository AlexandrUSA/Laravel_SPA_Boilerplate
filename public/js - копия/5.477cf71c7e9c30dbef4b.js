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
        department: 0,
        employees: 0
      },
      defaultItem: {
        id: '',
        title: '',
        department: 0,
        employees: 0
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
                            { attrs: { xs12: "", sm6: "", md4: "" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Dessert name" },
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
                            { attrs: { xs12: "", sm6: "", md4: "" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Calories" },
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm6: "", md4: "" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Fat (g)" },
                                model: {
                                  value: _vm.editedItem.employees,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "employees", $$v)
                                  },
                                  expression: "editedItem.employees"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWU/ODQ2MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaUJBOzs7Y0FHQTs7Y0FHQTtlQUNBO2tCQUNBO2VBRUE7QUFMQSxPQURBLGlEQU9BLDJEQUNBLDhEQUNBLDZFQUVBO2FBQ0E7b0JBQ0E7O1lBRUE7ZUFDQTtvQkFDQTttQkFFQTtBQUxBOztZQU9BO2VBQ0E7b0JBQ0E7bUJBR0E7QUFOQTtBQXRCQTs7O29DQThCQTsyREFDQTtBQUVBO0FBSkE7O2lDQU1BO2tCQUNBO0FBRUE7QUFKQTs4QkFLQTtTQUNBO0FBQ0E7OztzQ0FFQTs7WUFHQTtlQUNBO29CQUNBO21CQUdBO0FBTkEsT0FEQTtBQVFBO3NDQUNBOzRDQUNBOzBDQUNBO29CQUNBO0FBQ0E7MENBQ0E7cUNBQ0E7d0ZBQ0E7QUFDQTs7QUFDQTs7b0JBQ0E7NkJBQ0E7bURBQ0E7NkJBQ0E7U0FDQTtBQUNB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QUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvNS40NzdjZjcxYzdlOWMzMGRiZWY0Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzM0MTkxOFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxccG9zaXRpb25zXFxcXExpc3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJjMzQxOTE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmMzNDE5MThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcG9zaXRpb25zL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9nXCIgbWF4LXdpZHRoPVwiNTAwcHhcIj5cbiAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBkYXJrIHNsb3Q9XCJhY3RpdmF0b3JcIiBjbGFzcz1cIm1iLTJcIj7QlNC+0LHQsNCy0LjRgtGMINC00L7Qu9C20L3QvtGB0YLRjDwvdi1idG4+XG4gICAgICA8di1jYXJkPlxuICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj57eyBmb3JtVGl0bGUgfX08L3NwYW4+XG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgPHYtY29udGFpbmVyIGdyaWQtbGlzdC1tZD5cbiAgICAgICAgICAgIDx2LWxheW91dCB3cmFwPlxuICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgc202IG1kND5cbiAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIGxhYmVsPVwiRGVzc2VydCBuYW1lXCIgdi1tb2RlbD1cImVkaXRlZEl0ZW0udGl0bGVcIj48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTYgbWQ0PlxuICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XCJDYWxvcmllc1wiIHYtbW9kZWw9XCJlZGl0ZWRJdGVtLmRlcGFydG1lbnRcIj48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTYgbWQ0PlxuICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XCJGYXQgKGcpXCIgdi1tb2RlbD1cImVkaXRlZEl0ZW0uZW1wbG95ZWVzXCI+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgPHYtYnRuIGNvbG9yPVwiYmx1ZSBkYXJrZW4tMVwiIGZsYXQgQGNsaWNrLm5hdGl2ZT1cImNsb3NlXCI+Q2FuY2VsPC92LWJ0bj5cbiAgICAgICAgICA8di1idG4gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgZmxhdCBAY2xpY2submF0aXZlPVwic2F2ZVwiPlNhdmU8L3YtYnRuPlxuICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgPC92LWNhcmQ+XG4gICAgPC92LWRpYWxvZz5cbiAgICA8di1kYXRhLXRhYmxlXG4gICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxuICAgICAgOml0ZW1zPVwiaXRlbXNcIlxuICAgICAgaGlkZS1hY3Rpb25zXG4gICAgICBjbGFzcz1cImVsZXZhdGlvbi0xXCJcbiAgICA+XG4gICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1zXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj57eyBwcm9wcy5pdGVtLmlkIH19PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPnt7IHByb3BzLml0ZW0udGl0bGUgfX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+e3sgcHJvcHMuaXRlbS5kZXBhcnRtZW50IH19PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPnt7IHByb3BzLml0ZW0uZW1wbG95ZWVzIH19PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPlxuICAgICAgICAgIDx2LWJ0biBpY29uIGNsYXNzPVwibXgtMFwiIEBjbGljaz1cImVkaXRJdGVtKHByb3BzLml0ZW0pXCI+XG4gICAgICAgICAgICA8di1pY29uIGNvbG9yPVwidGVhbFwiPmVkaXQ8L3YtaWNvbj5cbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgIDx2LWJ0biBpY29uIGNsYXNzPVwibXgtMFwiIEBjbGljaz1cImRlbGV0ZUl0ZW0ocHJvcHMuaXRlbSlcIj5cbiAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJwaW5rXCI+ZGVsZXRlPC92LWljb24+XG4gICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgc2xvdD1cIm5vLWRhdGFcIj5cbiAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cImluaXRpYWxpemVcIj5SZXNldDwvdi1idG4+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvdi1kYXRhLXRhYmxlPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgZGlhbG9nOiBmYWxzZSxcbiAgICAgIGhlYWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICfQndC+0LzQtdGAJyxcbiAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6ICdpZCdcbiAgICAgICAgfSxcbiAgICAgICAgeyB0ZXh0OiAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1JywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAndGl0bGUnIH0sXG4gICAgICAgIHsgdGV4dDogJ9Cf0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1JywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAnZGVwYXJ0bWVudCcgfSxcbiAgICAgICAgeyB0ZXh0OiAn0KHQvtGC0YDRg9C00L3QuNC60L7QsicsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ2VtcGxveWVlcycgfSxcbiAgICAgICAgeyB0ZXh0OiAn0JTQtdC50YHRgtCy0LjRjycsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ3RpdGxlJywgc29ydGFibGU6IGZhbHNlIH1cbiAgICAgIF0sXG4gICAgICBpdGVtczogW10sXG4gICAgICBlZGl0ZWRJbmRleDogLTEsXG4gICAgICBlZGl0ZWRJdGVtOiB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBkZXBhcnRtZW50OiAwLFxuICAgICAgICBlbXBsb3llZXM6IDAsXG4gICAgICB9LFxuICAgICAgZGVmYXVsdEl0ZW06IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIGRlcGFydG1lbnQ6IDAsXG4gICAgICAgIGVtcGxveWVlczogMFxuICAgICAgfVxuICAgIH0pLFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBmb3JtVGl0bGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGl0ZWRJbmRleCA9PT0gLTEgPyAn0J3QvtCy0LDRjyDQtNC+0LvQttC90L7RgdGC0YwnIDogJ9CY0LfQvNC10L3QuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMJ1xuICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgIGRpYWxvZyAodmFsKSB7XG4gICAgICAgIHZhbCB8fCB0aGlzLmNsb3NlKClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQgKCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplKClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGluaXRpYWxpemUgKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgdGl0bGU6ICfQlNC40YDQtdC60YLQvtGAJyxcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6ICfQk9C70LDQstC90YvQuSDQvtGE0YTQuNGBJyxcbiAgICAgICAgICAgIGVtcGxveWVlczogMVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGVkaXRJdGVtIChpdGVtKSB7XG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSlcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSlcbiAgICAgICAgdGhpcy5kaWFsb2cgPSB0cnVlXG4gICAgICB9LFxuICAgICAgZGVsZXRlSXRlbSAoaXRlbSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKVxuICAgICAgICBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKSAmJiB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH0sXG4gICAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2VcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSlcbiAgICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTFcbiAgICAgICAgfSwgMzAwKVxuICAgICAgfSxcbiAgICAgIHNhdmUgKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0ZWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLml0ZW1zW3RoaXMuZWRpdGVkSW5kZXhdLCB0aGlzLmVkaXRlZEl0ZW0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHRoaXMuZWRpdGVkSXRlbSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Bvc2l0aW9ucy9MaXN0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI1MDBweFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlhbG9nLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGlhbG9nID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiYWN0aXZhdG9yXCIsIGNvbG9yOiBcInByaW1hcnlcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcItCU0L7QsdCw0LLQuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmZvcm1UaXRsZSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZ3JpZC1saXN0LW1kXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgc202OiBcIlwiLCBtZDQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwiRGVzc2VydCBuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRlZEl0ZW0sIFwidGl0bGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0ZWRJdGVtLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIHNtNjogXCJcIiwgbWQ0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcIkNhbG9yaWVzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRlZEl0ZW0uZGVwYXJ0bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZWRpdGVkSXRlbSwgXCJkZXBhcnRtZW50XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZWRpdGVkSXRlbS5kZXBhcnRtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIHNtNjogXCJcIiwgbWQ0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcIkZhdCAoZylcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWRpdGVkSXRlbS5lbXBsb3llZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmVkaXRlZEl0ZW0sIFwiZW1wbG95ZWVzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZWRpdGVkSXRlbS5lbXBsb3llZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZSBkYXJrZW4tMVwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsb3NlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJibHVlIGRhcmtlbi0xXCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2F2ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1kYXRhLXRhYmxlXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMVwiLFxuICAgICAgICAgIGF0dHJzOiB7IGhlYWRlcnM6IF92bS5oZWFkZXJzLCBpdGVtczogX3ZtLml0ZW1zLCBcImhpZGUtYWN0aW9uc1wiOiBcIlwiIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5pZCkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLnRpdGxlKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uZGVwYXJ0bWVudCkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmVtcGxveWVlcykpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm14LTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0SXRlbShwcm9wcy5pdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJ0ZWFsXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZWRpdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm14LTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVJdGVtKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcInBpbmtcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJkZWxldGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgeyBzbG90OiBcIm5vLWRhdGFcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIgfSwgb246IHsgY2xpY2s6IF92bS5pbml0aWFsaXplIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVzZXRcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMmMzNDE5MThcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTJjMzQxOTE4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9wb3NpdGlvbnMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwic291cmNlUm9vdCI6IiJ9