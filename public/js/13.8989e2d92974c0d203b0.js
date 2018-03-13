webpackJsonp([13],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(195)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(197)
/* template */
var __vue_template__ = __webpack_require__(198)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-504612d4"
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
Component.options.__file = "resources\\assets\\js\\pages\\admin\\clients\\List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-504612d4", Component.options)
  } else {
    hotAPI.reload("data-v-504612d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("5ded1f0f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-504612d4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./List.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-504612d4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./List.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(true);
// imports


// module
exports.push([module.i, "\n.table__buttons[data-v-504612d4] {\n    position: absolute;\n    bottom: -50px;\n}\n.dialog__activator[data-v-504612d4] {\n    position: absolute;\n    bottom: -30px;\n    left: 40px;\n    z-index: 1;\n}\n.card__title[data-v-504612d4] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.card__actions[data-v-504612d4] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/clients/resources/assets/js/pages/admin/clients/List.vue"],"names":[],"mappings":";AA+JA;IACA,mBAAA;IACA,cAAA;CACA;AAEA;IACA,mBAAA;IACA,cAAA;IACA,WAAA;IACA,WAAA;CACA;AAEA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;CACA;AAEA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;CACA","file":"List.vue","sourcesContent":["<template>\n  <div id=\"inspire\">\n      <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\n        <v-card>\n\t\t\t\t\t<v-card-title>\n\t\t\t\t\t\t<span class=\"headline\">{{ $t('attention') }}</span>\n\t\t\t\t\t</v-card-title>\n\t\t\t\t\t<v-card-text>\n\t\t\t\t\t\t<v-flex xs12>{{deleteMsg}}</v-flex>\n\t\t\t\t\t</v-card-text>\n\t\t\t\t\t<v-card-actions>\n\t\t\t\t\t\t<v-btn outline color=\"info\" @click.native=\"deleteConfirm\">{{ $t('ok') }}</v-btn>\n\t\t\t\t\t\t<v-btn outline color=\"error\" @click.native=\"deleteCancel\">{{ $t('cancel') }}</v-btn>\n\t\t\t\t\t</v-card-actions>\n        </v-card>\n      </v-dialog>  \n      <v-card>\n      \t<v-card-title>\n\t      \t<h2>{{ $t('employees') }}</h2>\n\t      \t<v-spacer></v-spacer>\n\t      \t<v-text-field\n\t\t\t\t\t\tappend-icon=\"search\"\n\t\t\t\t\t\t:label=\"$t('search_input')\"\n\t\t\t\t\t\tsingle-line\t\t\t\n\t\t\t\t\t\tv-model=\"search\"\n\t      \t></v-text-field>\n      \t</v-card-title>\n      <v-data-table\n        :headers=\"headers\"\n        :items=\"items\"\n        :search=\"search\"\n        v-model=\"selected\"\n        select-all\n        item-key=\"id\"\n\t\t\t\t:no-results-text=\"$t('no_match_found')\"\n       \t:rows-per-page-text=\"$t('strings')\"\n        class=\"elevation-1\"\n      >\n        <template slot=\"items\" slot-scope=\"props\">\n        \t<td>\n\t\t        <v-checkbox\n\t\t          primary\n\t\t          hide-details\n\t\t          v-model=\"props.selected\"\n\t\t        ></v-checkbox>\n\t\t      </td>\n          <td>{{ props.item.id }}</td>\n          <td>{{ props.item.first_name }}</td>\n          <td>{{ props.item.last_name }}</td>\n          <td>{{ props.item.position }}</td>\n          <td>\n          \t<v-btn outline round :to=\"{name: 'employee', params: {id: props.item.id}}\">{{ $t('details') }}</v-btn>   \n          </td>\n        </template>\n<template slot=\"no-data\">\n          <v-alert :value=\"true\" color=\"red\" icon=\"warning\">\n        \t\tНет данных :(\n      \t\t</v-alert>\n        </template>\n</v-data-table>\n<div class=\"table__buttons\">\n    <v-btn fab dark large color=\"cyan\" :to=\"{name: 'employeeCreate'}\">\n        <v-icon dark>add</v-icon>\n    </v-btn>\n    <transition enter-active-class=\"buttonEnter\" leave-active-class=\"buttonLeave\" mode=\"out-in\">\n        <v-btn v-show=\"selected.length > 0\" class=\"delete-btn\" fab large dark @click=\"deleteDialog(selected)\">\n            <v-icon>delete</v-icon>\n        </v-btn>\n    </transition>\n</div>\n<v-snackbar :timeout=\"snackbarTimeout\" top v-model=\"snackbarShow\" multi-line color=\"info\">\n    {{ $t('delete_done') }}\n    <v-btn flat color=\"pink\" @click.native=\"snackbarShow = false\">{{ $t('ok') }}</v-btn>\n</v-snackbar>\n</v-card>\n</div>\n</template>\n\n<script>\n    import {\n        mapActions,\n        mapGetters\n    } from 'vuex';\n    export default {\n        data: () => ({\n            snackbarShow: false,\n            snackbarTimeout: 10000,\n            // Поиск / Выборка\n            search: '',\n            selected: [],\n            dialog: false,\n            // Удаление\n            deleteWindow: false,\n            deleteCategory: null,\n            delMode: 'single',\n            // Заголовки таблицы\n            headers: [{\n                    text: 'ID',\n                    align: 'left',\n                    sortable: false,\n                    value: 'id'\n                },\n                {\n                    text: 'Имя',\n                    value: 'first_name'\n                },\n                {\n                    text: 'Фамилия',\n                    value: 'last_name'\n                },\n                {\n                    text: 'Должность',\n                    value: 'position'\n                },\n                {\n                    text: '',\n                    sortable: false\n                }\n            ]\n        }),\n        computed: {\n            deleteMsg() {\n                return (this.selected.length == 1) ? this.$t('delete_item_confirm') :\n                    this.$t('delete_items_confirm');\n            },\n            ...mapGetters({\n                items: 'employees/employees'\n            })\n        },\n        methods: {\n            deleteDialog(item) {\n                this.deleteWindow = true;\n                this.deleteCategory = item;\n            },\n            deleteConfirm() {\n                this.selected.forEach(el => this.deleteItem(el.id));\n                this.selected = [];\n                this.deleteWindow = false;\n                this.editedID = null;\n                this.snackbarShow = true;\n            },\n            deleteCancel() {\n                this.deleteCategory = null;\n                this.deleteWindow = false;\n            },\n            close() {\n                this.dialog = false;\n                this.editedItem = Object.assign({}, this.defaultItem);\n                this.editedIndex = -1;\n            },\n            ...mapActions({\n                loadItems: 'employees/load',\n                deleteItem: 'employees/remove'\n            })\n        }\n    }\n\n</script>\n\n<style scoped>\n    .table__buttons {\n        position: absolute;\n        bottom: -50px;\n    }\n\n    .dialog__activator {\n        position: absolute;\n        bottom: -30px;\n        left: 40px;\n        z-index: 1;\n    }\n\n    .card__title {\n        justify-content: center;\n    }\n\n    .card__actions {\n        justify-content: center;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(11);
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            snackbarShow: false,
            snackbarTimeout: 10000,
            // Поиск / Выборка
            search: '',
            selected: [],
            dialog: false,
            // Удаление
            deleteWindow: false,
            deleteCategory: null,
            delMode: 'single',
            // Заголовки таблицы
            headers: [{
                text: 'ID',
                align: 'left',
                sortable: false,
                value: 'id'
            }, {
                text: 'Имя',
                value: 'first_name'
            }, {
                text: 'Фамилия',
                value: 'last_name'
            }, {
                text: 'Должность',
                value: 'position'
            }, {
                text: '',
                sortable: false
            }]
        };
    },
    computed: _extends({
        deleteMsg: function deleteMsg() {
            return this.selected.length == 1 ? this.$t('delete_item_confirm') : this.$t('delete_items_confirm');
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
        items: 'employees/employees'
    })),
    methods: _extends({
        deleteDialog: function deleteDialog(item) {
            this.deleteWindow = true;
            this.deleteCategory = item;
        },
        deleteConfirm: function deleteConfirm() {
            var _this = this;

            this.selected.forEach(function (el) {
                return _this.deleteItem(el.id);
            });
            this.selected = [];
            this.deleteWindow = false;
            this.editedID = null;
            this.snackbarShow = true;
        },
        deleteCancel: function deleteCancel() {
            this.deleteCategory = null;
            this.deleteWindow = false;
        },
        close: function close() {
            this.dialog = false;
            this.editedItem = Object.assign({}, this.defaultItem);
            this.editedIndex = -1;
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
        loadItems: 'employees/load',
        deleteItem: 'employees/remove'
    }))
});

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "inspire" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
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
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v(_vm._s(_vm.$t("attention")))
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-flex", { attrs: { xs12: "" } }, [
                    _vm._v(_vm._s(_vm.deleteMsg))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { outline: "", color: "info" },
                      nativeOn: {
                        click: function($event) {
                          _vm.deleteConfirm($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("ok")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { outline: "", color: "error" },
                      nativeOn: {
                        click: function($event) {
                          _vm.deleteCancel($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("cancel")))]
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
            [
              _c("h2", [_vm._v(_vm._s(_vm.$t("employees")))]),
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
                "select-all": "",
                "item-key": "id",
                "no-results-text": _vm.$t("no_match_found"),
                "rows-per-page-text": _vm.$t("strings")
              },
              scopedSlots: _vm._u([
                {
                  key: "items",
                  fn: function(props) {
                    return [
                      _c(
                        "td",
                        [
                          _c("v-checkbox", {
                            attrs: { primary: "", "hide-details": "" },
                            model: {
                              value: props.selected,
                              callback: function($$v) {
                                _vm.$set(props, "selected", $$v)
                              },
                              expression: "props.selected"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.id))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.first_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.last_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.position))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                outline: "",
                                round: "",
                                to: {
                                  name: "employee",
                                  params: { id: props.item.id }
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("details")))]
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            },
            [
              _c(
                "template",
                { slot: "no-data" },
                [
                  _c(
                    "v-alert",
                    { attrs: { value: true, color: "red", icon: "warning" } },
                    [_vm._v("\n        \t\tНет данных :(\n      \t\t")]
                  )
                ],
                1
              )
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "table__buttons" },
            [
              _c(
                "v-btn",
                {
                  attrs: {
                    fab: "",
                    dark: "",
                    large: "",
                    color: "cyan",
                    to: { name: "employeeCreate" }
                  }
                },
                [_c("v-icon", { attrs: { dark: "" } }, [_vm._v("add")])],
                1
              ),
              _vm._v(" "),
              _c(
                "transition",
                {
                  attrs: {
                    "enter-active-class": "buttonEnter",
                    "leave-active-class": "buttonLeave",
                    mode: "out-in"
                  }
                },
                [
                  _c(
                    "v-btn",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.selected.length > 0,
                          expression: "selected.length > 0"
                        }
                      ],
                      staticClass: "delete-btn",
                      attrs: { fab: "", large: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.deleteDialog(_vm.selected)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("delete")])],
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
            "v-snackbar",
            {
              attrs: {
                timeout: _vm.snackbarTimeout,
                top: "",
                "multi-line": "",
                color: "info"
              },
              model: {
                value: _vm.snackbarShow,
                callback: function($$v) {
                  _vm.snackbarShow = $$v
                },
                expression: "snackbarShow"
              }
            },
            [
              _vm._v("\n    " + _vm._s(_vm.$t("delete_done")) + "\n    "),
              _c(
                "v-btn",
                {
                  attrs: { flat: "", color: "pink" },
                  nativeOn: {
                    click: function($event) {
                      _vm.snackbarShow = false
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("ok")))]
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
    require("vue-hot-reload-api")      .rerender("data-v-504612d4", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL0xpc3QudnVlP2E4NDIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL0xpc3QudnVlPzNhNDQiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vY2xpZW50cy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvTGlzdC52dWU/MmZlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3TTtBQUN4TTtBQUNBO0FBQ0E7QUFDQSw0Q0FBZ1Q7QUFDaFQ7QUFDQSw4Q0FBcUw7QUFDckw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTs7QUFFQTtBQUNBLHFDQUE4TztBQUM5TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLDZEQUE4RCx5QkFBeUIsb0JBQW9CLEdBQUcsdUNBQXVDLHlCQUF5QixvQkFBb0IsaUJB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtCQUErQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMEJBQTBCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8xMy44OTg5ZTJkOTI5NzRjMGQyMDNiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTA0NjEyZDRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTA0NjEyZDRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi01MDQ2MTJkNFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGFkbWluXFxcXGNsaWVudHNcXFxcTGlzdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTA0NjEyZDRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01MDQ2MTJkNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01MDQ2MTJkNFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1ZGVkMWYwZlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01MDQ2MTJkNFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTUwNDYxMmQ0XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNTA0NjEyZDRcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFibGVfX2J1dHRvbnNbZGF0YS12LTUwNDYxMmQ0XSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNTBweDtcXG59XFxuLmRpYWxvZ19fYWN0aXZhdG9yW2RhdGEtdi01MDQ2MTJkNF0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTMwcHg7XFxuICAgIGxlZnQ6IDQwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbi5jYXJkX190aXRsZVtkYXRhLXYtNTA0NjEyZDRdIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2FyZF9fYWN0aW9uc1tkYXRhLXYtNTA0NjEyZDRdIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL0xpc3QudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUErSkE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7Q0FDQTtBQUVBO0lBQ0EseUJBQUE7UUFBQSxzQkFBQTtZQUFBLHdCQUFBO0NBQ0E7QUFFQTtJQUNBLHlCQUFBO1FBQUEsc0JBQUE7WUFBQSx3QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJMaXN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGlkPVxcXCJpbnNwaXJlXFxcIj5cXG4gICAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwiZGVsZXRlV2luZG93XFxcIiBtYXgtd2lkdGg9XFxcIjUwMHB4XFxcIj5cXG4gICAgICAgIDx2LWNhcmQ+XFxuXFx0XFx0XFx0XFx0XFx0PHYtY2FyZC10aXRsZT5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiaGVhZGxpbmVcXFwiPnt7ICR0KCdhdHRlbnRpb24nKSB9fTwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHQ8L3YtY2FyZC10aXRsZT5cXG5cXHRcXHRcXHRcXHRcXHQ8di1jYXJkLXRleHQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PHYtZmxleCB4czEyPnt7ZGVsZXRlTXNnfX08L3YtZmxleD5cXG5cXHRcXHRcXHRcXHRcXHQ8L3YtY2FyZC10ZXh0PlxcblxcdFxcdFxcdFxcdFxcdDx2LWNhcmQtYWN0aW9ucz5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8di1idG4gb3V0bGluZSBjb2xvcj1cXFwiaW5mb1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiZGVsZXRlQ29uZmlybVxcXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxcblxcdFxcdFxcdFxcdFxcdFxcdDx2LWJ0biBvdXRsaW5lIGNvbG9yPVxcXCJlcnJvclxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiZGVsZXRlQ2FuY2VsXFxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxcblxcdFxcdFxcdFxcdFxcdDwvdi1jYXJkLWFjdGlvbnM+XFxuICAgICAgICA8L3YtY2FyZD5cXG4gICAgICA8L3YtZGlhbG9nPiAgXFxuICAgICAgPHYtY2FyZD5cXG4gICAgICBcXHQ8di1jYXJkLXRpdGxlPlxcblxcdCAgICAgIFxcdDxoMj57eyAkdCgnZW1wbG95ZWVzJykgfX08L2gyPlxcblxcdCAgICAgIFxcdDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcblxcdCAgICAgIFxcdDx2LXRleHQtZmllbGRcXG5cXHRcXHRcXHRcXHRcXHRcXHRhcHBlbmQtaWNvbj1cXFwic2VhcmNoXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdDpsYWJlbD1cXFwiJHQoJ3NlYXJjaF9pbnB1dCcpXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdHNpbmdsZS1saW5lXFx0XFx0XFx0XFxuXFx0XFx0XFx0XFx0XFx0XFx0di1tb2RlbD1cXFwic2VhcmNoXFxcIlxcblxcdCAgICAgIFxcdD48L3YtdGV4dC1maWVsZD5cXG4gICAgICBcXHQ8L3YtY2FyZC10aXRsZT5cXG4gICAgICA8di1kYXRhLXRhYmxlXFxuICAgICAgICA6aGVhZGVycz1cXFwiaGVhZGVyc1xcXCJcXG4gICAgICAgIDppdGVtcz1cXFwiaXRlbXNcXFwiXFxuICAgICAgICA6c2VhcmNoPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICB2LW1vZGVsPVxcXCJzZWxlY3RlZFxcXCJcXG4gICAgICAgIHNlbGVjdC1hbGxcXG4gICAgICAgIGl0ZW0ta2V5PVxcXCJpZFxcXCJcXG5cXHRcXHRcXHRcXHQ6bm8tcmVzdWx0cy10ZXh0PVxcXCIkdCgnbm9fbWF0Y2hfZm91bmQnKVxcXCJcXG4gICAgICAgXFx0OnJvd3MtcGVyLXBhZ2UtdGV4dD1cXFwiJHQoJ3N0cmluZ3MnKVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJlbGV2YXRpb24tMVxcXCJcXG4gICAgICA+XFxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiaXRlbXNcXFwiIHNsb3Qtc2NvcGU9XFxcInByb3BzXFxcIj5cXG4gICAgICAgIFxcdDx0ZD5cXG5cXHRcXHQgICAgICAgIDx2LWNoZWNrYm94XFxuXFx0XFx0ICAgICAgICAgIHByaW1hcnlcXG5cXHRcXHQgICAgICAgICAgaGlkZS1kZXRhaWxzXFxuXFx0XFx0ICAgICAgICAgIHYtbW9kZWw9XFxcInByb3BzLnNlbGVjdGVkXFxcIlxcblxcdFxcdCAgICAgICAgPjwvdi1jaGVja2JveD5cXG5cXHRcXHQgICAgICA8L3RkPlxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XFxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmZpcnN0X25hbWUgfX08L3RkPlxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5sYXN0X25hbWUgfX08L3RkPlxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5wb3NpdGlvbiB9fTwvdGQ+XFxuICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgXFx0PHYtYnRuIG91dGxpbmUgcm91bmQgOnRvPVxcXCJ7bmFtZTogJ2VtcGxveWVlJywgcGFyYW1zOiB7aWQ6IHByb3BzLml0ZW0uaWR9fVxcXCI+e3sgJHQoJ2RldGFpbHMnKSB9fTwvdi1idG4+ICAgXFxuICAgICAgICAgIDwvdGQ+XFxuICAgICAgICA8L3RlbXBsYXRlPlxcbjx0ZW1wbGF0ZSBzbG90PVxcXCJuby1kYXRhXFxcIj5cXG4gICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVxcXCJ0cnVlXFxcIiBjb2xvcj1cXFwicmVkXFxcIiBpY29uPVxcXCJ3YXJuaW5nXFxcIj5cXG4gICAgICAgIFxcdFxcdNCd0LXRgiDQtNCw0L3QvdGL0YUgOihcXG4gICAgICBcXHRcXHQ8L3YtYWxlcnQ+XFxuICAgICAgICA8L3RlbXBsYXRlPlxcbjwvdi1kYXRhLXRhYmxlPlxcbjxkaXYgY2xhc3M9XFxcInRhYmxlX19idXR0b25zXFxcIj5cXG4gICAgPHYtYnRuIGZhYiBkYXJrIGxhcmdlIGNvbG9yPVxcXCJjeWFuXFxcIiA6dG89XFxcIntuYW1lOiAnZW1wbG95ZWVDcmVhdGUnfVxcXCI+XFxuICAgICAgICA8di1pY29uIGRhcms+YWRkPC92LWljb24+XFxuICAgIDwvdi1idG4+XFxuICAgIDx0cmFuc2l0aW9uIGVudGVyLWFjdGl2ZS1jbGFzcz1cXFwiYnV0dG9uRW50ZXJcXFwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cXFwiYnV0dG9uTGVhdmVcXFwiIG1vZGU9XFxcIm91dC1pblxcXCI+XFxuICAgICAgICA8di1idG4gdi1zaG93PVxcXCJzZWxlY3RlZC5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwiZGVsZXRlLWJ0blxcXCIgZmFiIGxhcmdlIGRhcmsgQGNsaWNrPVxcXCJkZWxldGVEaWFsb2coc2VsZWN0ZWQpXFxcIj5cXG4gICAgICAgICAgICA8di1pY29uPmRlbGV0ZTwvdi1pY29uPlxcbiAgICAgICAgPC92LWJ0bj5cXG4gICAgPC90cmFuc2l0aW9uPlxcbjwvZGl2Plxcbjx2LXNuYWNrYmFyIDp0aW1lb3V0PVxcXCJzbmFja2JhclRpbWVvdXRcXFwiIHRvcCB2LW1vZGVsPVxcXCJzbmFja2JhclNob3dcXFwiIG11bHRpLWxpbmUgY29sb3I9XFxcImluZm9cXFwiPlxcbiAgICB7eyAkdCgnZGVsZXRlX2RvbmUnKSB9fVxcbiAgICA8di1idG4gZmxhdCBjb2xvcj1cXFwicGlua1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwic25hY2tiYXJTaG93ID0gZmFsc2VcXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXG48L3Ytc25hY2tiYXI+XFxuPC92LWNhcmQ+XFxuPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgICBpbXBvcnQge1xcbiAgICAgICAgbWFwQWN0aW9ucyxcXG4gICAgICAgIG1hcEdldHRlcnNcXG4gICAgfSBmcm9tICd2dWV4JztcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgZGF0YTogKCkgPT4gKHtcXG4gICAgICAgICAgICBzbmFja2JhclNob3c6IGZhbHNlLFxcbiAgICAgICAgICAgIHNuYWNrYmFyVGltZW91dDogMTAwMDAsXFxuICAgICAgICAgICAgLy8g0J/QvtC40YHQuiAvINCS0YvQsdC+0YDQutCwXFxuICAgICAgICAgICAgc2VhcmNoOiAnJyxcXG4gICAgICAgICAgICBzZWxlY3RlZDogW10sXFxuICAgICAgICAgICAgZGlhbG9nOiBmYWxzZSxcXG4gICAgICAgICAgICAvLyDQo9C00LDQu9C10L3QuNC1XFxuICAgICAgICAgICAgZGVsZXRlV2luZG93OiBmYWxzZSxcXG4gICAgICAgICAgICBkZWxldGVDYXRlZ29yeTogbnVsbCxcXG4gICAgICAgICAgICBkZWxNb2RlOiAnc2luZ2xlJyxcXG4gICAgICAgICAgICAvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcXG4gICAgICAgICAgICBoZWFkZXJzOiBbe1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0lEJyxcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXFxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2lkJ1xcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0JjQvNGPJyxcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZmlyc3RfbmFtZSdcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ9Ck0LDQvNC40LvQuNGPJyxcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbGFzdF9uYW1lJ1xcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0JTQvtC70LbQvdC+0YHRgtGMJyxcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAncG9zaXRpb24nXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBdXFxuICAgICAgICB9KSxcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAgICAgZGVsZXRlTXNnKCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09IDEpID8gdGhpcy4kdCgnZGVsZXRlX2l0ZW1fY29uZmlybScpIDpcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHQoJ2RlbGV0ZV9pdGVtc19jb25maXJtJyk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcXG4gICAgICAgICAgICAgICAgaXRlbXM6ICdlbXBsb3llZXMvZW1wbG95ZWVzJ1xcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGRlbGV0ZURpYWxvZyhpdGVtKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDYXRlZ29yeSA9IGl0ZW07XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkZWxldGVDb25maXJtKCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLmZvckVhY2goZWwgPT4gdGhpcy5kZWxldGVJdGVtKGVsLmlkKSk7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0ZWRJRCA9IG51bGw7XFxuICAgICAgICAgICAgICAgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlbGV0ZUNhbmNlbCgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDYXRlZ29yeSA9IG51bGw7XFxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBjbG9zZSgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSk7XFxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIC4uLm1hcEFjdGlvbnMoe1xcbiAgICAgICAgICAgICAgICBsb2FkSXRlbXM6ICdlbXBsb3llZXMvbG9hZCcsXFxuICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW06ICdlbXBsb3llZXMvcmVtb3ZlJ1xcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9XFxuICAgIH1cXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbiAgICAudGFibGVfX2J1dHRvbnMge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAtNTBweDtcXG4gICAgfVxcblxcbiAgICAuZGlhbG9nX19hY3RpdmF0b3Ige1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAtMzBweDtcXG4gICAgICAgIGxlZnQ6IDQwcHg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIC5jYXJkX190aXRsZSB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuY2FyZF9fYWN0aW9ucyB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTUwNDYxMmQ0XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vY2xpZW50cy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJpbnNwaXJlXCI+XG4gICAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRlbGV0ZVdpbmRvd1wiIG1heC13aWR0aD1cIjUwMHB4XCI+XG4gICAgICAgIDx2LWNhcmQ+XG5cdFx0XHRcdFx0PHYtY2FyZC10aXRsZT5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj57eyAkdCgnYXR0ZW50aW9uJykgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC92LWNhcmQtdGl0bGU+XG5cdFx0XHRcdFx0PHYtY2FyZC10ZXh0PlxuXHRcdFx0XHRcdFx0PHYtZmxleCB4czEyPnt7ZGVsZXRlTXNnfX08L3YtZmxleD5cblx0XHRcdFx0XHQ8L3YtY2FyZC10ZXh0PlxuXHRcdFx0XHRcdDx2LWNhcmQtYWN0aW9ucz5cblx0XHRcdFx0XHRcdDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIEBjbGljay5uYXRpdmU9XCJkZWxldGVDb25maXJtXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxuXHRcdFx0XHRcdFx0PHYtYnRuIG91dGxpbmUgY29sb3I9XCJlcnJvclwiIEBjbGljay5uYXRpdmU9XCJkZWxldGVDYW5jZWxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxuXHRcdFx0XHRcdDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgIDwvdi1jYXJkPlxuICAgICAgPC92LWRpYWxvZz4gIFxuICAgICAgPHYtY2FyZD5cbiAgICAgIFx0PHYtY2FyZC10aXRsZT5cblx0ICAgICAgXHQ8aDI+e3sgJHQoJ2VtcGxveWVlcycpIH19PC9oMj5cblx0ICAgICAgXHQ8di1zcGFjZXI+PC92LXNwYWNlcj5cblx0ICAgICAgXHQ8di10ZXh0LWZpZWxkXG5cdFx0XHRcdFx0XHRhcHBlbmQtaWNvbj1cInNlYXJjaFwiXG5cdFx0XHRcdFx0XHQ6bGFiZWw9XCIkdCgnc2VhcmNoX2lucHV0JylcIlxuXHRcdFx0XHRcdFx0c2luZ2xlLWxpbmVcdFx0XHRcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJzZWFyY2hcIlxuXHQgICAgICBcdD48L3YtdGV4dC1maWVsZD5cbiAgICAgIFx0PC92LWNhcmQtdGl0bGU+XG4gICAgICA8di1kYXRhLXRhYmxlXG4gICAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXG4gICAgICAgIDppdGVtcz1cIml0ZW1zXCJcbiAgICAgICAgOnNlYXJjaD1cInNlYXJjaFwiXG4gICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZFwiXG4gICAgICAgIHNlbGVjdC1hbGxcbiAgICAgICAgaXRlbS1rZXk9XCJpZFwiXG5cdFx0XHRcdDpuby1yZXN1bHRzLXRleHQ9XCIkdCgnbm9fbWF0Y2hfZm91bmQnKVwiXG4gICAgICAgXHQ6cm93cy1wZXItcGFnZS10ZXh0PVwiJHQoJ3N0cmluZ3MnKVwiXG4gICAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTFcIlxuICAgICAgPlxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1zXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XG4gICAgICAgIFx0PHRkPlxuXHRcdCAgICAgICAgPHYtY2hlY2tib3hcblx0XHQgICAgICAgICAgcHJpbWFyeVxuXHRcdCAgICAgICAgICBoaWRlLWRldGFpbHNcblx0XHQgICAgICAgICAgdi1tb2RlbD1cInByb3BzLnNlbGVjdGVkXCJcblx0XHQgICAgICAgID48L3YtY2hlY2tib3g+XG5cdFx0ICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0uZmlyc3RfbmFtZSB9fTwvdGQ+XG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0ubGFzdF9uYW1lIH19PC90ZD5cbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5wb3NpdGlvbiB9fTwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgIFx0PHYtYnRuIG91dGxpbmUgcm91bmQgOnRvPVwie25hbWU6ICdlbXBsb3llZScsIHBhcmFtczoge2lkOiBwcm9wcy5pdGVtLmlkfX1cIj57eyAkdCgnZGV0YWlscycpIH19PC92LWJ0bj4gICBcbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RlbXBsYXRlPlxuPHRlbXBsYXRlIHNsb3Q9XCJuby1kYXRhXCI+XG4gICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVwidHJ1ZVwiIGNvbG9yPVwicmVkXCIgaWNvbj1cIndhcm5pbmdcIj5cbiAgICAgICAgXHRcdNCd0LXRgiDQtNCw0L3QvdGL0YUgOihcbiAgICAgIFx0XHQ8L3YtYWxlcnQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XG48L3YtZGF0YS10YWJsZT5cbjxkaXYgY2xhc3M9XCJ0YWJsZV9fYnV0dG9uc1wiPlxuICAgIDx2LWJ0biBmYWIgZGFyayBsYXJnZSBjb2xvcj1cImN5YW5cIiA6dG89XCJ7bmFtZTogJ2VtcGxveWVlQ3JlYXRlJ31cIj5cbiAgICAgICAgPHYtaWNvbiBkYXJrPmFkZDwvdi1pY29uPlxuICAgIDwvdi1idG4+XG4gICAgPHRyYW5zaXRpb24gZW50ZXItYWN0aXZlLWNsYXNzPVwiYnV0dG9uRW50ZXJcIiBsZWF2ZS1hY3RpdmUtY2xhc3M9XCJidXR0b25MZWF2ZVwiIG1vZGU9XCJvdXQtaW5cIj5cbiAgICAgICAgPHYtYnRuIHYtc2hvdz1cInNlbGVjdGVkLmxlbmd0aCA+IDBcIiBjbGFzcz1cImRlbGV0ZS1idG5cIiBmYWIgbGFyZ2UgZGFyayBAY2xpY2s9XCJkZWxldGVEaWFsb2coc2VsZWN0ZWQpXCI+XG4gICAgICAgICAgICA8di1pY29uPmRlbGV0ZTwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgIDwvdHJhbnNpdGlvbj5cbjwvZGl2PlxuPHYtc25hY2tiYXIgOnRpbWVvdXQ9XCJzbmFja2JhclRpbWVvdXRcIiB0b3Agdi1tb2RlbD1cInNuYWNrYmFyU2hvd1wiIG11bHRpLWxpbmUgY29sb3I9XCJpbmZvXCI+XG4gICAge3sgJHQoJ2RlbGV0ZV9kb25lJykgfX1cbiAgICA8di1idG4gZmxhdCBjb2xvcj1cInBpbmtcIiBAY2xpY2submF0aXZlPVwic25hY2tiYXJTaG93ID0gZmFsc2VcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XG48L3Ytc25hY2tiYXI+XG48L3YtY2FyZD5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQge1xuICAgICAgICBtYXBBY3Rpb25zLFxuICAgICAgICBtYXBHZXR0ZXJzXG4gICAgfSBmcm9tICd2dWV4JztcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGE6ICgpID0+ICh7XG4gICAgICAgICAgICBzbmFja2JhclNob3c6IGZhbHNlLFxuICAgICAgICAgICAgc25hY2tiYXJUaW1lb3V0OiAxMDAwMCxcbiAgICAgICAgICAgIC8vINCf0L7QuNGB0LogLyDQktGL0LHQvtGA0LrQsFxuICAgICAgICAgICAgc2VhcmNoOiAnJyxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBbXSxcbiAgICAgICAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICAgICAgICAvLyDQo9C00LDQu9C10L3QuNC1XG4gICAgICAgICAgICBkZWxldGVXaW5kb3c6IGZhbHNlLFxuICAgICAgICAgICAgZGVsZXRlQ2F0ZWdvcnk6IG51bGwsXG4gICAgICAgICAgICBkZWxNb2RlOiAnc2luZ2xlJyxcbiAgICAgICAgICAgIC8vINCX0LDQs9C+0LvQvtCy0LrQuCDRgtCw0LHQu9C40YbRi1xuICAgICAgICAgICAgaGVhZGVyczogW3tcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0lEJyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2lkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0JjQvNGPJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdmaXJzdF9uYW1lJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0KTQsNC80LjQu9C40Y8nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2xhc3RfbmFtZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ9CU0L7Qu9C20L3QvtGB0YLRjCcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAncG9zaXRpb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pLFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgZGVsZXRlTXNnKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5zZWxlY3RlZC5sZW5ndGggPT0gMSkgPyB0aGlzLiR0KCdkZWxldGVfaXRlbV9jb25maXJtJykgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLiR0KCdkZWxldGVfaXRlbXNfY29uZmlybScpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAnZW1wbG95ZWVzL2VtcGxveWVlcydcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGRlbGV0ZURpYWxvZyhpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBpdGVtO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZUNvbmZpcm0oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5mb3JFYWNoKGVsID0+IHRoaXMuZGVsZXRlSXRlbShlbC5pZCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkSUQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVDYW5jZWwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDYXRlZ29yeSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi5tYXBBY3Rpb25zKHtcbiAgICAgICAgICAgICAgICBsb2FkSXRlbXM6ICdlbXBsb3llZXMvbG9hZCcsXG4gICAgICAgICAgICAgICAgZGVsZXRlSXRlbTogJ2VtcGxveWVlcy9yZW1vdmUnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAudGFibGVfX2J1dHRvbnMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTUwcHg7XG4gICAgfVxuXG4gICAgLmRpYWxvZ19fYWN0aXZhdG9yIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC0zMHB4O1xuICAgICAgICBsZWZ0OiA0MHB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC5jYXJkX190aXRsZSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5jYXJkX19hY3Rpb25zIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vY2xpZW50cy9MaXN0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImluc3BpcmVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNTAwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRlbGV0ZVdpbmRvdyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVdpbmRvdyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVsZXRlV2luZG93XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiYXR0ZW50aW9uXCIpKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1mbGV4XCIsIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGVsZXRlTXNnKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNvbmZpcm0oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImVycm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlQ2FuY2VsKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJlbXBsb3llZXNcIikpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJzZWFyY2hfaW5wdXRcIiksXG4gICAgICAgICAgICAgICAgICBcInNpbmdsZS1saW5lXCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1kYXRhLXRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0xXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3QtYWxsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtLWtleVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgXCJuby1yZXN1bHRzLXRleHRcIjogX3ZtLiR0KFwibm9fbWF0Y2hfZm91bmRcIiksXG4gICAgICAgICAgICAgICAgXCJyb3dzLXBlci1wYWdlLXRleHRcIjogX3ZtLiR0KFwic3RyaW5nc1wiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbXNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHByaW1hcnk6IFwiXCIsIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChwcm9wcywgXCJzZWxlY3RlZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9wcy5zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmlkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5maXJzdF9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5sYXN0X25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLnBvc2l0aW9uKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogcHJvcHMuaXRlbS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImRldGFpbHNcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgIHsgc2xvdDogXCJuby1kYXRhXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IHRydWUsIGNvbG9yOiBcInJlZFwiLCBpY29uOiBcIndhcm5pbmdcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFxcdFxcdNCd0LXRgiDQtNCw0L3QvdGL0YUgOihcXG4gICAgICBcXHRcXHRcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGVfX2J1dHRvbnNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiY3lhblwiLFxuICAgICAgICAgICAgICAgICAgICB0bzogeyBuYW1lOiBcImVtcGxveWVlQ3JlYXRlXCIgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgZGFyazogXCJcIiB9IH0sIFtfdm0uX3YoXCJhZGRcIildKV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcImJ1dHRvbkVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IFwiYnV0dG9uTGVhdmVcIixcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJvdXQtaW5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZC5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlbGV0ZS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmYWI6IFwiXCIsIGxhcmdlOiBcIlwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZURpYWxvZyhfdm0uc2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImRlbGV0ZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1zbmFja2JhclwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IF92bS5zbmFja2JhclRpbWVvdXQsXG4gICAgICAgICAgICAgICAgdG9wOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwibXVsdGktbGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImluZm9cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc25hY2tiYXJTaG93LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zbmFja2JhclNob3cgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic25hY2tiYXJTaG93XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS4kdChcImRlbGV0ZV9kb25lXCIpKSArIFwiXFxuICAgIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInBpbmtcIiB9LFxuICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5zbmFja2JhclNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJva1wiKSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTUwNDYxMmQ0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01MDQ2MTJkNFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyJdLCJzb3VyY2VSb290IjoiIn0=