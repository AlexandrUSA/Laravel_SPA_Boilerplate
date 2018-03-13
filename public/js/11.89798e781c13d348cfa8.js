webpackJsonp([11],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(206)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(208)
/* template */
var __vue_template__ = __webpack_require__(209)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1ee6735d"
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
Component.options.__file = "resources\\assets\\js\\pages\\admin\\departments\\List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ee6735d", Component.options)
  } else {
    hotAPI.reload("data-v-1ee6735d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(207);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("0b9fcd71", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1ee6735d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./List.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1ee6735d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./List.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.btn[data-v-1ee6735d] {\n    text-transform: none !important;\n}\nli[data-v-1ee6735d] {\n    margin: 5px !important;\n    -webkit-box-shadow: 0 0 15px #000;\n            box-shadow: 0 0 15px #000;\n}\n.table__buttons[data-v-1ee6735d] {\n    position: absolute;\n    bottom: -50px;\n}\n.dialog__activator[data-v-1ee6735d] {\n    position: absolute;\n    bottom: -30px;\n    left: 40px;\n    z-index: 1;\n}\n.card__title[data-v-1ee6735d] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.card__actions[data-v-1ee6735d] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.buttonEnter[data-v-1ee6735d] {\n    -webkit-animation: buttonEnter-data-v-1ee6735d .3s cubic-bezier(.09,.9,.48,1.64);\n            animation: buttonEnter-data-v-1ee6735d .3s cubic-bezier(.09,.9,.48,1.64);\n}\n.buttonLeave[data-v-1ee6735d] {\n    -webkit-animation: buttonLeave-data-v-1ee6735d .3s cubic-bezier(.52,-0.44,.88,-0.45);\n            animation: buttonLeave-data-v-1ee6735d .3s cubic-bezier(.52,-0.44,.88,-0.45);\n}\n@-webkit-keyframes routerEnter-data-v-1ee6735d {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@keyframes routerEnter-data-v-1ee6735d {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@-webkit-keyframes routerLeave-data-v-1ee6735d {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@keyframes routerLeave-data-v-1ee6735d {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@-webkit-keyframes buttonEnter-data-v-1ee6735d {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@keyframes buttonEnter-data-v-1ee6735d {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@-webkit-keyframes buttonLeave-data-v-1ee6735d {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n@keyframes buttonLeave-data-v-1ee6735d {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/www/resources/assets/js/pages/admin/departments/resources/assets/js/pages/admin/departments/List.vue"],"names":[],"mappings":";AAsLA;IACA,gCAAA;CACA;AAGA;IACA,uBAAA;IACA,kCAAA;YAAA,0BAAA;CACA;AACA;IACA,mBAAA;IACA,cAAA;CACA;AAEA;IACA,mBAAA;IACA,cAAA;IACA,WAAA;IACA,WAAA;CACA;AAEA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;CACA;AAEA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;CACA;AAEA;IACA,iFAAA;YAAA,yEAAA;CACA;AAEA;IACA,qFAAA;YAAA,6EAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n<div>\r\n    <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\r\n        <v-card>\r\n            <v-card-title>\r\n                <span class=\"headline\">{{ $t('attention') }}</span>\r\n            </v-card-title>\r\n            <v-card-text>\r\n                <v-flex xs12>{{deleteMsg}}</v-flex>\r\n            </v-card-text>\r\n            <v-card-actions>\r\n                <v-btn outline color=\"info\" @click.native=\"deleteConfirm\">{{ $t('ok') }}</v-btn>\r\n                <v-btn outline color=\"error\" @click.native=\"deleteCancel\">{{ $t('cancel') }}</v-btn>\r\n            </v-card-actions>\r\n        </v-card>\r\n    </v-dialog>  \r\n    <v-card>\r\n        <v-card-title>\r\n            <h2>{{ $t('employees') }}</h2>\r\n            <v-spacer></v-spacer>\r\n            <v-text-field\r\n                        append-icon=\"search\"\r\n                        :label=\"$t('search_input')\"\r\n                        single-line         \r\n                        v-model=\"search\"\r\n            ></v-text-field>\r\n        </v-card-title>\r\n        <v-data-table\r\n            :headers=\"headers\"\r\n            :items=\"items\"\r\n            :search=\"search\"\r\n            v-model=\"selected\"\r\n            select-all\r\n            item-key=\"id\"\r\n            :no-results-text=\"$t('no_match_found')\"\r\n            :rows-per-page-text=\"$t('strings')\"\r\n            class=\"elevation-1\"\r\n        >\r\n            <template slot=\"items\" slot-scope=\"props\">\r\n                <td>\r\n                    <v-checkbox\r\n                      primary\r\n                      hide-details\r\n                      v-model=\"props.selected\"\r\n                    ></v-checkbox>\r\n                  </td>\r\n              <td>\r\n                <v-list-tile-avatar>\r\n                    <img :src=\"props.item.avatar\">\r\n                </v-list-tile-avatar>\r\n              </td>\r\n              <td>{{ props.item.first_name }}</td>\r\n              <td>{{ props.item.last_name }}</td>\r\n              <td>{{ props.item.position }}</td>\r\n              <td>\r\n                <v-btn outline round :to=\"{name: 'employee', params: {id: props.item.id}}\">{{ $t('details') }}</v-btn>   \r\n              </td>\r\n            </template>\r\n            <template slot=\"no-data\">\r\n              <v-alert :value=\"true\" color=\"red\" icon=\"warning\">\r\n                    Нет данных :(\r\n                </v-alert>\r\n            </template>\r\n        </v-data-table>\r\n        <div class=\"table__buttons\">\r\n            <v-btn fab dark large color=\"cyan\" :to=\"{name: 'employeeCreate'}\">\r\n                <v-icon dark>add</v-icon>\r\n            </v-btn>\r\n            <transition enter-active-class=\"buttonEnter\" leave-active-class=\"buttonLeave\" mode=\"out-in\">\r\n                <v-btn v-show=\"selected.length > 0\" class=\"delete-btn\" fab large dark @click=\"deleteDialog(selected)\">\r\n                    <v-icon>delete</v-icon>\r\n                </v-btn>\r\n            </transition>\r\n        </div>\r\n        <v-snackbar :timeout=\"snackbarTimeout\" top v-model=\"snackbarShow\" multi-line color=\"info\">\r\n            {{ $t('delete_done') }}\r\n            <v-btn flat color=\"pink\" @click.native=\"snackbarShow = false\">{{ $t('ok') }}</v-btn>\r\n        </v-snackbar>\r\n    </v-card>\r\n</div>\r\n</template>\r\n\r\n<script>\r\n    import {\r\n        mapActions,\r\n        mapGetters\r\n    } from 'vuex';\r\n    export default {\r\n        middleware: 'auth',\r\n        data: () => ({\r\n            snackbarShow: false,\r\n            snackbarTimeout: 10000,\r\n            // Поиск / Выборка\r\n            search: '',\r\n            selected: [],\r\n            dialog: false,\r\n            // Удаление\r\n            deleteWindow: false,\r\n            deleteCategory: null,\r\n            delMode: 'single',\r\n            // Заголовки таблицы\r\n            headers: [{\r\n                    text: 'ID',\r\n                    align: 'left',\r\n                    sortable: false,\r\n                    value: 'id'\r\n                },\r\n                {\r\n                    text: 'Имя',\r\n                    value: 'first_name'\r\n                },\r\n                {\r\n                    text: 'Фамилия',\r\n                    value: 'last_name'\r\n                },\r\n                {\r\n                    text: 'Должность',\r\n                    value: 'position'\r\n                },\r\n                {\r\n                    text: '',\r\n                    sortable: false\r\n                }\r\n            ]\r\n        }),\r\n        computed: {\r\n            deleteMsg() {\r\n                return (this.selected.length == 1) ? this.$t('delete_item_confirm') :\r\n                    this.$t('delete_items_confirm');\r\n            },\r\n            ...mapGetters({\r\n                items: 'departments/departments',\r\n                positions: 'positions/positions',\r\n                employees: 'employees/employees'\r\n            })\r\n        },\r\n        methods: {\r\n            getPositions (id) {\r\n                let positions = []\r\n                this.positions.forEach( el => {\r\n                    if(el.department_id == id) positions.push(el);\r\n                });\r\n                return positions;\r\n            },\r\n            getEmployees (id) {\r\n                let employees = [];\r\n                this.employees.forEach( el => {\r\n                    this.positions.forEach( pos => {\r\n                        if(el.position_id == pos.id) employees.push(el);\r\n                    })\r\n                })\r\n                return employees;\r\n            },\r\n            deleteDialog(item) {\r\n                this.deleteWindow = true;\r\n                this.deleteCategory = item;\r\n            },\r\n            deleteConfirm() {\r\n                this.selected.forEach(el => this.deleteItem(el.id));\r\n                this.selected = [];\r\n                this.deleteWindow = false;\r\n                this.editedID = null;\r\n                this.snackbarShow = true;\r\n            },\r\n            deleteCancel() {\r\n                this.deleteCategory = null;\r\n                this.deleteWindow = false;\r\n            },\r\n            close() {\r\n                this.dialog = false;\r\n                this.editedItem = Object.assign({}, this.defaultItem);\r\n                this.editedIndex = -1;\r\n            },\r\n            ...mapActions({\r\n                loadItems: 'departments/load',\r\n                deleteItem: 'departments/remove'\r\n            })\r\n        }\r\n    }\r\n\r\n</script>\r\n\r\n<style scoped>\r\n    .btn {\r\n        text-transform: none !important;\r\n    }\r\n\r\n\r\n    li {\r\n        margin: 5px !important;\r\n        box-shadow: 0 0 15px #000;\r\n    }\r\n    .table__buttons {\r\n        position: absolute;\r\n        bottom: -50px;\r\n    }\r\n\r\n    .dialog__activator {\r\n        position: absolute;\r\n        bottom: -30px;\r\n        left: 40px;\r\n        z-index: 1;\r\n    }\r\n\r\n    .card__title {\r\n        justify-content: center;\r\n    }\r\n\r\n    .card__actions {\r\n        justify-content: center;\r\n    }\r\n\r\n    .buttonEnter {\r\n        animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\r\n      }\r\n\r\n      .buttonLeave {\r\n        animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\r\n      }\r\n\r\n      @keyframes routerEnter {\r\n        0% {opacity: 0;}\r\n        100% {opacity: 1;}\r\n      }\r\n\r\n      @keyframes routerLeave {\r\n        0% {opacity: 1;}\r\n        100% {opacity: 0;}\r\n      }\r\n\r\n      @keyframes buttonEnter {\r\n        0% {transform: scale(0);}\r\n        100% {transform: scale(1);}\r\n      }\r\n\r\n      @keyframes buttonLeave {\r\n        0% {transform: scale(1);}\r\n        100% {transform: scale(0);}\r\n      }\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 208:
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
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    middleware: 'auth',
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
        items: 'departments/departments',
        positions: 'positions/positions',
        employees: 'employees/employees'
    })),
    methods: _extends({
        getPositions: function getPositions(id) {
            var positions = [];
            this.positions.forEach(function (el) {
                if (el.department_id == id) positions.push(el);
            });
            return positions;
        },
        getEmployees: function getEmployees(id) {
            var _this = this;

            var employees = [];
            this.employees.forEach(function (el) {
                _this.positions.forEach(function (pos) {
                    if (el.position_id == pos.id) employees.push(el);
                });
            });
            return employees;
        },
        deleteDialog: function deleteDialog(item) {
            this.deleteWindow = true;
            this.deleteCategory = item;
        },
        deleteConfirm: function deleteConfirm() {
            var _this2 = this;

            this.selected.forEach(function (el) {
                return _this2.deleteItem(el.id);
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
        loadItems: 'departments/load',
        deleteItem: 'departments/remove'
    }))
});

/***/ }),

/***/ 209:
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
                      _c(
                        "td",
                        [
                          _c("v-list-tile-avatar", [
                            _c("img", { attrs: { src: props.item.avatar } })
                          ])
                        ],
                        1
                      ),
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
                    [
                      _vm._v(
                        "\r\n                    Нет данных :(\r\n                "
                      )
                    ]
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
              _vm._v(
                "\r\n            " +
                  _vm._s(_vm.$t("delete_done")) +
                  "\r\n            "
              ),
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
    require("vue-hot-reload-api")      .rerender("data-v-1ee6735d", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWU/OTg2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlPzkxMzYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZT9iYTI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXdNO0FBQ3hNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFxTDtBQUNyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQThPO0FBQzlPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SkFBNEosaUZBQWlGO0FBQzdPLHFLQUFxSyxpRkFBaUY7QUFDdFA7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0Esa0RBQW1ELHNDQUFzQyxHQUFHLHVCQUF1Qiw2QkFB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aUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMTEuODk3OThlNzgxYzEzZDM0OGNmYTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFlZTY3MzVkXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTGlzdC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTFlZTY3MzVkXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMWVlNjczNWRcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxkZXBhcnRtZW50c1xcXFxMaXN0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xZWU2NzM1ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFlZTY3MzVkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWU2NzM1ZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIwYjlmY2Q3MVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWU2NzM1ZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFlZTY3MzVkXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMWVlNjczNWRcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJ0bltkYXRhLXYtMWVlNjczNWRdIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcXG59XFxubGlbZGF0YS12LTFlZTY3MzVkXSB7XFxuICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwO1xcbn1cXG4udGFibGVfX2J1dHRvbnNbZGF0YS12LTFlZTY3MzVkXSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNTBweDtcXG59XFxuLmRpYWxvZ19fYWN0aXZhdG9yW2RhdGEtdi0xZWU2NzM1ZF0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTMwcHg7XFxuICAgIGxlZnQ6IDQwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbi5jYXJkX190aXRsZVtkYXRhLXYtMWVlNjczNWRdIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2FyZF9fYWN0aW9uc1tkYXRhLXYtMWVlNjczNWRdIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYnV0dG9uRW50ZXJbZGF0YS12LTFlZTY3MzVkXSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidXR0b25FbnRlci1kYXRhLXYtMWVlNjczNWQgLjNzIGN1YmljLWJlemllciguMDksLjksLjQ4LDEuNjQpO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYnV0dG9uRW50ZXItZGF0YS12LTFlZTY3MzVkIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcXG59XFxuLmJ1dHRvbkxlYXZlW2RhdGEtdi0xZWU2NzM1ZF0ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYnV0dG9uTGVhdmUtZGF0YS12LTFlZTY3MzVkIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZS1kYXRhLXYtMWVlNjczNWQgLjNzIGN1YmljLWJlemllciguNTIsLTAuNDQsLjg4LC0wLjQ1KTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdXRlckVudGVyLWRhdGEtdi0xZWU2NzM1ZCB7XFxuMCUge29wYWNpdHk6IDA7XFxufVxcbjEwMCUge29wYWNpdHk6IDE7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdXRlckVudGVyLWRhdGEtdi0xZWU2NzM1ZCB7XFxuMCUge29wYWNpdHk6IDA7XFxufVxcbjEwMCUge29wYWNpdHk6IDE7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm91dGVyTGVhdmUtZGF0YS12LTFlZTY3MzVkIHtcXG4wJSB7b3BhY2l0eTogMTtcXG59XFxuMTAwJSB7b3BhY2l0eTogMDtcXG59XFxufVxcbkBrZXlmcmFtZXMgcm91dGVyTGVhdmUtZGF0YS12LTFlZTY3MzVkIHtcXG4wJSB7b3BhY2l0eTogMTtcXG59XFxuMTAwJSB7b3BhY2l0eTogMDtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBidXR0b25FbnRlci1kYXRhLXYtMWVlNjczNWQge1xcbjAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO3RyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGJ1dHRvbkVudGVyLWRhdGEtdi0xZWU2NzM1ZCB7XFxuMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTt0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4xMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBidXR0b25MZWF2ZS1kYXRhLXYtMWVlNjczNWQge1xcbjAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO3RyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlLWRhdGEtdi0xZWU2NzM1ZCB7XFxuMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4xMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvd3d3L3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBc0xBO0lBQ0EsZ0NBQUE7Q0FDQTtBQUdBO0lBQ0EsdUJBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0NBQ0E7QUFDQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtDQUNBO0FBRUE7SUFDQSx5QkFBQTtRQUFBLHNCQUFBO1lBQUEsd0JBQUE7Q0FDQTtBQUVBO0lBQ0EseUJBQUE7UUFBQSxzQkFBQTtZQUFBLHdCQUFBO0NBQ0E7QUFFQTtJQUNBLGlGQUFBO1lBQUEseUVBQUE7Q0FDQTtBQUVBO0lBQ0EscUZBQUE7WUFBQSw2RUFBQTtDQUNBO0FBRUE7QUFDQSxJQUFBLFdBQUE7Q0FBQTtBQUNBLE1BQUEsV0FBQTtDQUFBO0NBQ0E7QUFIQTtBQUNBLElBQUEsV0FBQTtDQUFBO0FBQ0EsTUFBQSxXQUFBO0NBQUE7Q0FDQTtBQUVBO0FBQ0EsSUFBQSxXQUFBO0NBQUE7QUFDQSxNQUFBLFdBQUE7Q0FBQTtDQUNBO0FBSEE7QUFDQSxJQUFBLFdBQUE7Q0FBQTtBQUNBLE1BQUEsV0FBQTtDQUFBO0NBQ0E7QUFFQTtBQUNBLElBQUEsNEJBQUEsb0JBQUE7Q0FBQTtBQUNBLE1BQUEsNEJBQUEsb0JBQUE7Q0FBQTtDQUNBO0FBSEE7QUFDQSxJQUFBLDRCQUFBLG9CQUFBO0NBQUE7QUFDQSxNQUFBLDRCQUFBLG9CQUFBO0NBQUE7Q0FDQTtBQUVBO0FBQ0EsSUFBQSw0QkFBQSxvQkFBQTtDQUFBO0FBQ0EsTUFBQSw0QkFBQSxvQkFBQTtDQUFBO0NBQ0E7QUFIQTtBQUNBLElBQUEsNEJBQUEsb0JBQUE7Q0FBQTtBQUNBLE1BQUEsNEJBQUEsb0JBQUE7Q0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJMaXN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuPGRpdj5cXHJcXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XFxcImRlbGV0ZVdpbmRvd1xcXCIgbWF4LXdpZHRoPVxcXCI1MDBweFxcXCI+XFxyXFxuICAgICAgICA8di1jYXJkPlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkbGluZVxcXCI+e3sgJHQoJ2F0dGVudGlvbicpIH19PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgICAgICAgPHYtZmxleCB4czEyPnt7ZGVsZXRlTXNnfX08L3YtZmxleD5cXHJcXG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImluZm9cXFwiIEBjbGljay5uYXRpdmU9XFxcImRlbGV0ZUNvbmZpcm1cXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImVycm9yXFxcIiBAY2xpY2submF0aXZlPVxcXCJkZWxldGVDYW5jZWxcXFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgIDwvdi1jYXJkPlxcclxcbiAgICA8L3YtZGlhbG9nPiAgXFxyXFxuICAgIDx2LWNhcmQ+XFxyXFxuICAgICAgICA8di1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgICAgIDxoMj57eyAkdCgnZW1wbG95ZWVzJykgfX08L2gyPlxcclxcbiAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcclxcbiAgICAgICAgICAgIDx2LXRleHQtZmllbGRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmQtaWNvbj1cXFwic2VhcmNoXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cXFwiJHQoJ3NlYXJjaF9pbnB1dCcpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZS1saW5lICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoXFxcIlxcclxcbiAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cXHJcXG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgPHYtZGF0YS10YWJsZVxcclxcbiAgICAgICAgICAgIDpoZWFkZXJzPVxcXCJoZWFkZXJzXFxcIlxcclxcbiAgICAgICAgICAgIDppdGVtcz1cXFwiaXRlbXNcXFwiXFxyXFxuICAgICAgICAgICAgOnNlYXJjaD1cXFwic2VhcmNoXFxcIlxcclxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcInNlbGVjdGVkXFxcIlxcclxcbiAgICAgICAgICAgIHNlbGVjdC1hbGxcXHJcXG4gICAgICAgICAgICBpdGVtLWtleT1cXFwiaWRcXFwiXFxyXFxuICAgICAgICAgICAgOm5vLXJlc3VsdHMtdGV4dD1cXFwiJHQoJ25vX21hdGNoX2ZvdW5kJylcXFwiXFxyXFxuICAgICAgICAgICAgOnJvd3MtcGVyLXBhZ2UtdGV4dD1cXFwiJHQoJ3N0cmluZ3MnKVxcXCJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZWxldmF0aW9uLTFcXFwiXFxyXFxuICAgICAgICA+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIml0ZW1zXFxcIiBzbG90LXNjb3BlPVxcXCJwcm9wc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LWNoZWNrYm94XFxyXFxuICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgaGlkZS1kZXRhaWxzXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInByb3BzLnNlbGVjdGVkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgPjwvdi1jaGVja2JveD5cXHJcXG4gICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICA8di1saXN0LXRpbGUtYXZhdGFyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVxcXCJwcm9wcy5pdGVtLmF2YXRhclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtYXZhdGFyPlxcclxcbiAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmZpcnN0X25hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0ubGFzdF9uYW1lIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLnBvc2l0aW9uIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgcm91bmQgOnRvPVxcXCJ7bmFtZTogJ2VtcGxveWVlJywgcGFyYW1zOiB7aWQ6IHByb3BzLml0ZW0uaWR9fVxcXCI+e3sgJHQoJ2RldGFpbHMnKSB9fTwvdi1idG4+ICAgXFxyXFxuICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIm5vLWRhdGFcXFwiPlxcclxcbiAgICAgICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVxcXCJ0cnVlXFxcIiBjb2xvcj1cXFwicmVkXFxcIiBpY29uPVxcXCJ3YXJuaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgINCd0LXRgiDQtNCw0L3QvdGL0YUgOihcXHJcXG4gICAgICAgICAgICAgICAgPC92LWFsZXJ0PlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8L3YtZGF0YS10YWJsZT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlX19idXR0b25zXFxcIj5cXHJcXG4gICAgICAgICAgICA8di1idG4gZmFiIGRhcmsgbGFyZ2UgY29sb3I9XFxcImN5YW5cXFwiIDp0bz1cXFwie25hbWU6ICdlbXBsb3llZUNyZWF0ZSd9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtaWNvbiBkYXJrPmFkZDwvdi1pY29uPlxcclxcbiAgICAgICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPHRyYW5zaXRpb24gZW50ZXItYWN0aXZlLWNsYXNzPVxcXCJidXR0b25FbnRlclxcXCIgbGVhdmUtYWN0aXZlLWNsYXNzPVxcXCJidXR0b25MZWF2ZVxcXCIgbW9kZT1cXFwib3V0LWluXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIHYtc2hvdz1cXFwic2VsZWN0ZWQubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcImRlbGV0ZS1idG5cXFwiIGZhYiBsYXJnZSBkYXJrIEBjbGljaz1cXFwiZGVsZXRlRGlhbG9nKHNlbGVjdGVkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8di1pY29uPmRlbGV0ZTwvdi1pY29uPlxcclxcbiAgICAgICAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPHYtc25hY2tiYXIgOnRpbWVvdXQ9XFxcInNuYWNrYmFyVGltZW91dFxcXCIgdG9wIHYtbW9kZWw9XFxcInNuYWNrYmFyU2hvd1xcXCIgbXVsdGktbGluZSBjb2xvcj1cXFwiaW5mb1xcXCI+XFxyXFxuICAgICAgICAgICAge3sgJHQoJ2RlbGV0ZV9kb25lJykgfX1cXHJcXG4gICAgICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cXFwicGlua1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwic25hY2tiYXJTaG93ID0gZmFsc2VcXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgIDwvdi1zbmFja2Jhcj5cXHJcXG4gICAgPC92LWNhcmQ+XFxyXFxuPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBpbXBvcnQge1xcclxcbiAgICAgICAgbWFwQWN0aW9ucyxcXHJcXG4gICAgICAgIG1hcEdldHRlcnNcXHJcXG4gICAgfSBmcm9tICd2dWV4JztcXHJcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICAgICAgbWlkZGxld2FyZTogJ2F1dGgnLFxcclxcbiAgICAgICAgZGF0YTogKCkgPT4gKHtcXHJcXG4gICAgICAgICAgICBzbmFja2JhclNob3c6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIHNuYWNrYmFyVGltZW91dDogMTAwMDAsXFxyXFxuICAgICAgICAgICAgLy8g0J/QvtC40YHQuiAvINCS0YvQsdC+0YDQutCwXFxyXFxuICAgICAgICAgICAgc2VhcmNoOiAnJyxcXHJcXG4gICAgICAgICAgICBzZWxlY3RlZDogW10sXFxyXFxuICAgICAgICAgICAgZGlhbG9nOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICAvLyDQo9C00LDQu9C10L3QuNC1XFxyXFxuICAgICAgICAgICAgZGVsZXRlV2luZG93OiBmYWxzZSxcXHJcXG4gICAgICAgICAgICBkZWxldGVDYXRlZ29yeTogbnVsbCxcXHJcXG4gICAgICAgICAgICBkZWxNb2RlOiAnc2luZ2xlJyxcXHJcXG4gICAgICAgICAgICAvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcXHJcXG4gICAgICAgICAgICBoZWFkZXJzOiBbe1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0lEJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXFxyXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2lkJ1xcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0JjQvNGPJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZmlyc3RfbmFtZSdcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ9Ck0LDQvNC40LvQuNGPJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbGFzdF9uYW1lJ1xcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0JTQvtC70LbQvdC+0YHRgtGMJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAncG9zaXRpb24nXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICBdXFxyXFxuICAgICAgICB9KSxcXHJcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgICAgICAgZGVsZXRlTXNnKCkge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09IDEpID8gdGhpcy4kdCgnZGVsZXRlX2l0ZW1fY29uZmlybScpIDpcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHQoJ2RlbGV0ZV9pdGVtc19jb25maXJtJyk7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcXHJcXG4gICAgICAgICAgICAgICAgaXRlbXM6ICdkZXBhcnRtZW50cy9kZXBhcnRtZW50cycsXFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uczogJ3Bvc2l0aW9ucy9wb3NpdGlvbnMnLFxcclxcbiAgICAgICAgICAgICAgICBlbXBsb3llZXM6ICdlbXBsb3llZXMvZW1wbG95ZWVzJ1xcclxcbiAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIGdldFBvc2l0aW9ucyAoaWQpIHtcXHJcXG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9ucyA9IFtdXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zLmZvckVhY2goIGVsID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmKGVsLmRlcGFydG1lbnRfaWQgPT0gaWQpIHBvc2l0aW9ucy5wdXNoKGVsKTtcXHJcXG4gICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbnM7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBnZXRFbXBsb3llZXMgKGlkKSB7XFxyXFxuICAgICAgICAgICAgICAgIGxldCBlbXBsb3llZXMgPSBbXTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZXMuZm9yRWFjaCggZWwgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMuZm9yRWFjaCggcG9zID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlbC5wb3NpdGlvbl9pZCA9PSBwb3MuaWQpIGVtcGxveWVlcy5wdXNoKGVsKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBlbXBsb3llZXM7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBkZWxldGVEaWFsb2coaXRlbSkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBpdGVtO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZGVsZXRlQ29uZmlybSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5mb3JFYWNoKGVsID0+IHRoaXMuZGVsZXRlSXRlbShlbC5pZCkpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gW107XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkSUQgPSBudWxsO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyU2hvdyA9IHRydWU7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBkZWxldGVDYW5jZWwoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBudWxsO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgY2xvc2UoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTE7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAuLi5tYXBBY3Rpb25zKHtcXHJcXG4gICAgICAgICAgICAgICAgbG9hZEl0ZW1zOiAnZGVwYXJ0bWVudHMvbG9hZCcsXFxyXFxuICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW06ICdkZXBhcnRtZW50cy9yZW1vdmUnXFxyXFxuICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAgIC5idG4ge1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBsaSB7XFxyXFxuICAgICAgICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXHJcXG4gICAgfVxcclxcbiAgICAudGFibGVfX2J1dHRvbnMge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgYm90dG9tOiAtNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGlhbG9nX19hY3RpdmF0b3Ige1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgYm90dG9tOiAtMzBweDtcXHJcXG4gICAgICAgIGxlZnQ6IDQwcHg7XFxyXFxuICAgICAgICB6LWluZGV4OiAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXJkX190aXRsZSB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FyZF9fYWN0aW9ucyB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnV0dG9uRW50ZXIge1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiBidXR0b25FbnRlciAuM3MgY3ViaWMtYmV6aWVyKC4wOSwuOSwuNDgsMS42NCk7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5idXR0b25MZWF2ZSB7XFxyXFxuICAgICAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIEBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xcclxcbiAgICAgICAgMCUge29wYWNpdHk6IDA7fVxcclxcbiAgICAgICAgMTAwJSB7b3BhY2l0eTogMTt9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIEBrZXlmcmFtZXMgcm91dGVyTGVhdmUge1xcclxcbiAgICAgICAgMCUge29wYWNpdHk6IDE7fVxcclxcbiAgICAgICAgMTAwJSB7b3BhY2l0eTogMDt9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIEBrZXlmcmFtZXMgYnV0dG9uRW50ZXIge1xcclxcbiAgICAgICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxcclxcbiAgICAgICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIEBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xcclxcbiAgICAgICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxcclxcbiAgICAgICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XFxyXFxuICAgICAgfVxcclxcblxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTFlZTY3MzVkXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwiPHRlbXBsYXRlPlxyXG48ZGl2PlxyXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkZWxldGVXaW5kb3dcIiBtYXgtd2lkdGg9XCI1MDBweFwiPlxyXG4gICAgICAgIDx2LWNhcmQ+XHJcbiAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+e3sgJHQoJ2F0dGVudGlvbicpIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgPHYtZmxleCB4czEyPnt7ZGVsZXRlTXNnfX08L3YtZmxleD5cclxuICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgQGNsaWNrLm5hdGl2ZT1cImRlbGV0ZUNvbmZpcm1cIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XHJcbiAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cImVycm9yXCIgQGNsaWNrLm5hdGl2ZT1cImRlbGV0ZUNhbmNlbFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XHJcbiAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgPC92LWNhcmQ+XHJcbiAgICA8L3YtZGlhbG9nPiAgXHJcbiAgICA8di1jYXJkPlxyXG4gICAgICAgIDx2LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgIDxoMj57eyAkdCgnZW1wbG95ZWVzJykgfX08L2gyPlxyXG4gICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cclxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmQtaWNvbj1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdzZWFyY2hfaW5wdXQnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZS1saW5lICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPHYtZGF0YS10YWJsZVxyXG4gICAgICAgICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxyXG4gICAgICAgICAgICA6aXRlbXM9XCJpdGVtc1wiXHJcbiAgICAgICAgICAgIDpzZWFyY2g9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICBzZWxlY3QtYWxsXHJcbiAgICAgICAgICAgIGl0ZW0ta2V5PVwiaWRcIlxyXG4gICAgICAgICAgICA6bm8tcmVzdWx0cy10ZXh0PVwiJHQoJ25vX21hdGNoX2ZvdW5kJylcIlxyXG4gICAgICAgICAgICA6cm93cy1wZXItcGFnZS10ZXh0PVwiJHQoJ3N0cmluZ3MnKVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTFcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJpdGVtc1wiIHNsb3Qtc2NvcGU9XCJwcm9wc1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWNoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICBoaWRlLWRldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9wcy5zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdi1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8di1saXN0LXRpbGUtYXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInByb3BzLml0ZW0uYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICA8L3YtbGlzdC10aWxlLWF2YXRhcj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmZpcnN0X25hbWUgfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmxhc3RfbmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0ucG9zaXRpb24gfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIHJvdW5kIDp0bz1cIntuYW1lOiAnZW1wbG95ZWUnLCBwYXJhbXM6IHtpZDogcHJvcHMuaXRlbS5pZH19XCI+e3sgJHQoJ2RldGFpbHMnKSB9fTwvdi1idG4+ICAgXHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJuby1kYXRhXCI+XHJcbiAgICAgICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVwidHJ1ZVwiIGNvbG9yPVwicmVkXCIgaWNvbj1cIndhcm5pbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICDQndC10YIg0LTQsNC90L3Ri9GFIDooXHJcbiAgICAgICAgICAgICAgICA8L3YtYWxlcnQ+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC92LWRhdGEtdGFibGU+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgIDx2LWJ0biBmYWIgZGFyayBsYXJnZSBjb2xvcj1cImN5YW5cIiA6dG89XCJ7bmFtZTogJ2VtcGxveWVlQ3JlYXRlJ31cIj5cclxuICAgICAgICAgICAgICAgIDx2LWljb24gZGFyaz5hZGQ8L3YtaWNvbj5cclxuICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgPHRyYW5zaXRpb24gZW50ZXItYWN0aXZlLWNsYXNzPVwiYnV0dG9uRW50ZXJcIiBsZWF2ZS1hY3RpdmUtY2xhc3M9XCJidXR0b25MZWF2ZVwiIG1vZGU9XCJvdXQtaW5cIj5cclxuICAgICAgICAgICAgICAgIDx2LWJ0biB2LXNob3c9XCJzZWxlY3RlZC5sZW5ndGggPiAwXCIgY2xhc3M9XCJkZWxldGUtYnRuXCIgZmFiIGxhcmdlIGRhcmsgQGNsaWNrPVwiZGVsZXRlRGlhbG9nKHNlbGVjdGVkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWljb24+ZGVsZXRlPC92LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHYtc25hY2tiYXIgOnRpbWVvdXQ9XCJzbmFja2JhclRpbWVvdXRcIiB0b3Agdi1tb2RlbD1cInNuYWNrYmFyU2hvd1wiIG11bHRpLWxpbmUgY29sb3I9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgIHt7ICR0KCdkZWxldGVfZG9uZScpIH19XHJcbiAgICAgICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicGlua1wiIEBjbGljay5uYXRpdmU9XCJzbmFja2JhclNob3cgPSBmYWxzZVwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cclxuICAgICAgICA8L3Ytc25hY2tiYXI+XHJcbiAgICA8L3YtY2FyZD5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtcclxuICAgICAgICBtYXBBY3Rpb25zLFxyXG4gICAgICAgIG1hcEdldHRlcnNcclxuICAgIH0gZnJvbSAndnVleCc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbWlkZGxld2FyZTogJ2F1dGgnLFxyXG4gICAgICAgIGRhdGE6ICgpID0+ICh7XHJcbiAgICAgICAgICAgIHNuYWNrYmFyU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNuYWNrYmFyVGltZW91dDogMTAwMDAsXHJcbiAgICAgICAgICAgIC8vINCf0L7QuNGB0LogLyDQktGL0LHQvtGA0LrQsFxyXG4gICAgICAgICAgICBzZWFyY2g6ICcnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogW10sXHJcbiAgICAgICAgICAgIGRpYWxvZzogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vINCj0LTQsNC70LXQvdC40LVcclxuICAgICAgICAgICAgZGVsZXRlV2luZG93OiBmYWxzZSxcclxuICAgICAgICAgICAgZGVsZXRlQ2F0ZWdvcnk6IG51bGwsXHJcbiAgICAgICAgICAgIGRlbE1vZGU6ICdzaW5nbGUnLFxyXG4gICAgICAgICAgICAvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcclxuICAgICAgICAgICAgaGVhZGVyczogW3tcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnSUQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnaWQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQmNC80Y8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZmlyc3RfbmFtZSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ9Ck0LDQvNC40LvQuNGPJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2xhc3RfbmFtZSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ9CU0L7Qu9C20L3QvtGB0YLRjCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdwb3NpdGlvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBkZWxldGVNc2coKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09IDEpID8gdGhpcy4kdCgnZGVsZXRlX2l0ZW1fY29uZmlybScpIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiR0KCdkZWxldGVfaXRlbXNfY29uZmlybScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAnZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMnLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZXM6ICdlbXBsb3llZXMvZW1wbG95ZWVzJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBnZXRQb3NpdGlvbnMgKGlkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25zID0gW11cclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zLmZvckVhY2goIGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihlbC5kZXBhcnRtZW50X2lkID09IGlkKSBwb3NpdGlvbnMucHVzaChlbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbnM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldEVtcGxveWVlcyAoaWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbXBsb3llZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVzLmZvckVhY2goIGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9ucy5mb3JFYWNoKCBwb3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlbC5wb3NpdGlvbl9pZCA9PSBwb3MuaWQpIGVtcGxveWVlcy5wdXNoKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbXBsb3llZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlbGV0ZURpYWxvZyhpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gaXRlbTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlQ29uZmlybSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuZm9yRWFjaChlbCA9PiB0aGlzLmRlbGV0ZUl0ZW0oZWwuaWQpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRlZElEID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlQ2FuY2VsKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDYXRlZ29yeSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbG9zZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLi4ubWFwQWN0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICBsb2FkSXRlbXM6ICdkZXBhcnRtZW50cy9sb2FkJyxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW06ICdkZXBhcnRtZW50cy9yZW1vdmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcclxuICAgIH1cclxuICAgIC50YWJsZV9fYnV0dG9ucyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZ19fYWN0aXZhdG9yIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtMzBweDtcclxuICAgICAgICBsZWZ0OiA0MHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRfX3RpdGxlIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZF9fYWN0aW9ucyB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbkVudGVyIHtcclxuICAgICAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ1dHRvbkxlYXZlIHtcclxuICAgICAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xyXG4gICAgICAgIDAlIHtvcGFjaXR5OiAwO31cclxuICAgICAgICAxMDAlIHtvcGFjaXR5OiAxO31cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XHJcbiAgICAgICAgMCUge29wYWNpdHk6IDE7fVxyXG4gICAgICAgIDEwMCUge29wYWNpdHk6IDA7fVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcclxuICAgICAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XHJcbiAgICAgICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xyXG4gICAgICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cclxuICAgICAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cclxuICAgICAgfVxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNTAwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRlbGV0ZVdpbmRvdyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVdpbmRvdyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVsZXRlV2luZG93XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiYXR0ZW50aW9uXCIpKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1mbGV4XCIsIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGVsZXRlTXNnKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNvbmZpcm0oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImVycm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlQ2FuY2VsKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJlbXBsb3llZXNcIikpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJzZWFyY2hfaW5wdXRcIiksXG4gICAgICAgICAgICAgICAgICBcInNpbmdsZS1saW5lXCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1kYXRhLXRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0xXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3QtYWxsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtLWtleVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgXCJuby1yZXN1bHRzLXRleHRcIjogX3ZtLiR0KFwibm9fbWF0Y2hfZm91bmRcIiksXG4gICAgICAgICAgICAgICAgXCJyb3dzLXBlci1wYWdlLXRleHRcIjogX3ZtLiR0KFwic3RyaW5nc1wiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbXNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHByaW1hcnk6IFwiXCIsIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChwcm9wcywgXCJzZWxlY3RlZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9wcy5zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1saXN0LXRpbGUtYXZhdGFyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogcHJvcHMuaXRlbS5hdmF0YXIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmZpcnN0X25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmxhc3RfbmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0ucG9zaXRpb24pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtcGxveWVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBwcm9wcy5pdGVtLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiZGV0YWlsc1wiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWQgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgeyBzbG90OiBcIm5vLWRhdGFcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogdHJ1ZSwgY29sb3I6IFwicmVkXCIsIGljb246IFwid2FybmluZ1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICDQndC10YIg0LTQsNC90L3Ri9GFIDooXFxyXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGVfX2J1dHRvbnNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiY3lhblwiLFxuICAgICAgICAgICAgICAgICAgICB0bzogeyBuYW1lOiBcImVtcGxveWVlQ3JlYXRlXCIgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgZGFyazogXCJcIiB9IH0sIFtfdm0uX3YoXCJhZGRcIildKV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcImJ1dHRvbkVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IFwiYnV0dG9uTGVhdmVcIixcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJvdXQtaW5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZC5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlbGV0ZS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmYWI6IFwiXCIsIGxhcmdlOiBcIlwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZURpYWxvZyhfdm0uc2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImRlbGV0ZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1zbmFja2JhclwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IF92bS5zbmFja2JhclRpbWVvdXQsXG4gICAgICAgICAgICAgICAgdG9wOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwibXVsdGktbGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImluZm9cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc25hY2tiYXJTaG93LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zbmFja2JhclNob3cgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic25hY2tiYXJTaG93XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxyXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcImRlbGV0ZV9kb25lXCIpKSArXG4gICAgICAgICAgICAgICAgICBcIlxcclxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJwaW5rXCIgfSxcbiAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc25hY2tiYXJTaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xZWU2NzM1ZFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMWVlNjczNWRcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDExIl0sInNvdXJjZVJvb3QiOiIifQ==