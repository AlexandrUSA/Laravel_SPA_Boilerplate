webpackJsonp([10],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(191)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(193)
/* template */
var __vue_template__ = __webpack_require__(194)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-350adeb9"
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
Component.options.__file = "resources\\assets\\js\\pages\\admin\\employees\\List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-350adeb9", Component.options)
  } else {
    hotAPI.reload("data-v-350adeb9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("3f69d4ef", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-350adeb9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./List.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-350adeb9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./List.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.btn[data-v-350adeb9] {\n  text-transform: none !important;\n}\nli[data-v-350adeb9] {\n  margin: 5px !important;\n  -webkit-box-shadow: 0 0 15px #000;\n          box-shadow: 0 0 15px #000;\n}\n.table__buttons[data-v-350adeb9] {\n  position: absolute;\n  bottom: -50px;\n}\n.dialog__activator[data-v-350adeb9] {\n  position: absolute;\n  bottom: -30px;\n  left: 40px;\n  z-index: 1;\n}\n.card__title[data-v-350adeb9] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.card__actions[data-v-350adeb9] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.buttonEnter[data-v-350adeb9] {\n  -webkit-animation: buttonEnter-data-v-350adeb9 .3s cubic-bezier(.09, .9, .48, 1.64);\n          animation: buttonEnter-data-v-350adeb9 .3s cubic-bezier(.09, .9, .48, 1.64);\n}\n.buttonLeave[data-v-350adeb9] {\n  -webkit-animation: buttonLeave-data-v-350adeb9 .3s cubic-bezier(.52, -0.44, .88, -0.45);\n          animation: buttonLeave-data-v-350adeb9 .3s cubic-bezier(.52, -0.44, .88, -0.45);\n}\n@-webkit-keyframes routerEnter-data-v-350adeb9 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes routerEnter-data-v-350adeb9 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@-webkit-keyframes routerLeave-data-v-350adeb9 {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes routerLeave-data-v-350adeb9 {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@-webkit-keyframes buttonEnter-data-v-350adeb9 {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes buttonEnter-data-v-350adeb9 {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@-webkit-keyframes buttonLeave-data-v-350adeb9 {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n}\n@keyframes buttonLeave-data-v-350adeb9 {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/List.vue"],"names":[],"mappings":";AAiMA;EACA,gCAAA;CACA;AAEA;EACA,uBAAA;EACA,kCAAA;UAAA,0BAAA;CACA;AAEA;EACA,mBAAA;EACA,cAAA;CACA;AAEA;EACA,mBAAA;EACA,cAAA;EACA,WAAA;EACA,WAAA;CACA;AAEA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;CACA;AAEA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;CACA;AAEA;EACA,oFAAA;UAAA,4EAAA;CACA;AAEA;EACA,wFAAA;UAAA,gFAAA;CACA;AAEA;AACA;IACA,WAAA;CACA;AACA;IACA,WAAA;CACA;CACA;AAPA;AACA;IACA,WAAA;CACA;AACA;IACA,WAAA;CACA;CACA;AAEA;AACA;IACA,WAAA;CACA;AACA;IACA,WAAA;CACA;CACA;AAPA;AACA;IACA,WAAA;CACA;AACA;IACA,WAAA;CACA;CACA;AAEA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;CACA;AAPA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;CACA;AAEA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;CACA;AAPA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;CACA","file":"List.vue","sourcesContent":["<template>\r\n  <div>\r\n    <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\r\n      <v-card>\r\n        <v-card-title>\r\n          <span class=\"headline\">{{ $t('attention') }}</span>\r\n        </v-card-title>\r\n        <v-card-text>\r\n          <v-flex xs12>{{deleteMsg}}</v-flex>\r\n        </v-card-text>\r\n        <v-card-actions>\r\n          <v-btn outline color=\"info\" @click.native=\"deleteConfirm\">{{ $t('ok') }}</v-btn>\r\n          <v-btn outline color=\"error\" @click.native=\"deleteCancel\">{{ $t('cancel') }}</v-btn>\r\n        </v-card-actions>\r\n      </v-card>\r\n    </v-dialog>\r\n    <v-card>\r\n      <v-card-title>\r\n        <h2>{{ $t('employees') }}</h2>\r\n        <v-spacer></v-spacer>\r\n        <v-text-field\r\n          append-icon=\"search\"\r\n          :label=\"$t('search_input')\"\r\n          single-line\r\n          v-model=\"search\"\r\n        ></v-text-field>\r\n      </v-card-title>\r\n      <v-data-table\r\n        :headers=\"headers\"\r\n        :items=\"items\"\r\n        :search=\"search\"\r\n        v-model=\"selected\"\r\n        select-all\r\n        item-key=\"id\"\r\n        :no-results-text=\"$t('no_match_found')\"\r\n        :rows-per-page-text=\"$t('strings')\"\r\n        class=\"elevation-1\"\r\n      >\r\n        <template slot=\"items\" slot-scope=\"props\">\r\n          <td>\r\n            <v-checkbox\r\n              primary\r\n              hide-details\r\n              v-model=\"props.selected\"\r\n            ></v-checkbox>\r\n          </td>\r\n          <!--<td>-->\r\n          <!--<v-list-tile-avatar>-->\r\n          <!--<img :src=\"props.item.avatar\">-->\r\n          <!--</v-list-tile-avatar>-->\r\n          <!--</td>-->\r\n          <td>{{ props.item.first_name }}</td>\r\n          <td>{{ props.item.last_name }}</td>\r\n          <td>{{ getPositionName(props.item.position_id).title }}</td>\r\n          <td>{{ getDepartmentName(props.item.position_id).title }}</td>\r\n          <td>\r\n            <v-btn outline round :to=\"{name: 'employee', params: {id: props.item.id}}\">{{ $t('details') }}</v-btn>\r\n          </td>\r\n        </template>\r\n        <template slot=\"no-data\">\r\n          <v-alert :value=\"true\" color=\"red\" icon=\"warning\">\r\n            Нет данных :(\r\n          </v-alert>\r\n        </template>\r\n      </v-data-table>\r\n      <div class=\"table__buttons\">\r\n        <v-btn fab dark large color=\"cyan\" :to=\"{ name: 'employeeCreate' }\">\r\n          <v-icon dark>add</v-icon>\r\n        </v-btn>\r\n        <transition enter-active-class=\"buttonEnter\" leave-active-class=\"buttonLeave\" mode=\"out-in\">\r\n          <v-btn v-show=\"selected.length > 0\" class=\"delete-btn\" fab large dark @click=\"deleteDialog(selected)\">\r\n            <v-icon>delete</v-icon>\r\n          </v-btn>\r\n        </transition>\r\n      </div>\r\n      <v-snackbar :timeout=\"snackbarTimeout\" top v-model=\"snackbarShow\" multi-line color=\"info\">\r\n        {{ $t('delete_done') }}\r\n        <v-btn flat color=\"pink\" @click.native=\"snackbarShow = false\">{{ $t('ok') }}</v-btn>\r\n      </v-snackbar>\r\n    </v-card>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import {\r\n    mapActions,\r\n    mapGetters\r\n  } from 'vuex';\r\n\r\n  export default {\r\n    middleware: ['auth', 'organisation'],\r\n    props: {\r\n      searchProp: {\r\n        type: String,\r\n        default: ''\r\n      }\r\n    },\r\n    data: () => ({\r\n      snackbarShow: false,\r\n      snackbarTimeout: 10000,\r\n      // Поиск / Выборка\r\n      search: '',\r\n      selected: [],\r\n      dialog: false,\r\n      // Удаление\r\n      deleteWindow: false,\r\n      deleteCategory: null,\r\n      delMode: 'single',\r\n      // Заголовки таблицы\r\n      headers: [\r\n        {\r\n          text: 'Имя',\r\n          value: 'first_name'\r\n        },\r\n        {\r\n          text: 'Фамилия',\r\n          value: 'last_name'\r\n        },\r\n        {\r\n          text: 'Должность',\r\n          value: 'position'\r\n        },\r\n        {\r\n          text: 'Подразделение',\r\n          value: 'department'\r\n        },\r\n        {\r\n          text: '',\r\n          sortable: false\r\n        }\r\n      ]\r\n    }),\r\n    computed: {\r\n      employees() {\r\n        const data = []\r\n        this.items.forEach(el => {\r\n          data.push({\r\n            \r\n          })\r\n        })\r\n      },\r\n      deleteMsg() {\r\n        return (this.selected.length == 1) ? this.$t('delete_item_confirm') :\r\n          this.$t('delete_items_confirm');\r\n      },\r\n      ...mapGetters({\r\n        items: 'employees/employees',\r\n        positions: 'positions/positions',\r\n        departments: 'departments/departments'\r\n      })\r\n    },\r\n    methods: {\r\n      getPositionName(id) {\r\n        return this.positions.find(el => el.id == id);\r\n      },\r\n      getDepartmentName(id) {\r\n        const position = this.getPositionName(id)\r\n        return this.departments.find(el => el.id == position.department_id)\r\n      },\r\n      deleteDialog(item) {\r\n        this.deleteWindow = true;\r\n        this.deleteCategory = item;\r\n      },\r\n      deleteConfirm() {\r\n        this.selected.forEach(el => this.deleteItem(el.id));\r\n        this.selected = [];\r\n        this.deleteWindow = false;\r\n        this.editedID = null;\r\n        this.snackbarShow = true;\r\n      },\r\n      deleteCancel() {\r\n        this.deleteCategory = null;\r\n        this.deleteWindow = false;\r\n      },\r\n      close() {\r\n        this.dialog = false;\r\n        this.editedItem = Object.assign({}, this.defaultItem);\r\n        this.editedIndex = -1;\r\n      },\r\n      ...mapActions({\r\n        loadItems: 'employees/load',\r\n        deleteItem: 'employees/remove'\r\n      })\r\n    },\r\n    created() {\r\n      if (this.searchProp) this.search = this.searchProp\r\n      console.log(this.search)\r\n    }\r\n  }\r\n\r\n</script>\r\n\r\n<style scoped>\r\n  .btn {\r\n    text-transform: none !important;\r\n  }\r\n  \r\n  li {\r\n    margin: 5px !important;\r\n    box-shadow: 0 0 15px #000;\r\n  }\r\n  \r\n  .table__buttons {\r\n    position: absolute;\r\n    bottom: -50px;\r\n  }\r\n  \r\n  .dialog__activator {\r\n    position: absolute;\r\n    bottom: -30px;\r\n    left: 40px;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .card__title {\r\n    justify-content: center;\r\n  }\r\n  \r\n  .card__actions {\r\n    justify-content: center;\r\n  }\r\n  \r\n  .buttonEnter {\r\n    animation: buttonEnter .3s cubic-bezier(.09, .9, .48, 1.64);\r\n  }\r\n  \r\n  .buttonLeave {\r\n    animation: buttonLeave .3s cubic-bezier(.52, -0.44, .88, -0.45);\r\n  }\r\n  \r\n  @keyframes routerEnter {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  @keyframes routerLeave {\r\n    0% {\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n  \r\n  @keyframes buttonEnter {\r\n    0% {\r\n      transform: scale(0);\r\n    }\r\n    100% {\r\n      transform: scale(1);\r\n    }\r\n  }\r\n  \r\n  @keyframes buttonLeave {\r\n    0% {\r\n      transform: scale(1);\r\n    }\r\n    100% {\r\n      transform: scale(0);\r\n    }\r\n  }\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 193:
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
//



/* harmony default export */ __webpack_exports__["default"] = ({
  middleware: ['auth', 'organisation'],
  props: {
    searchProp: {
      type: String,
      default: ''
    }
  },
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
        text: 'Имя',
        value: 'first_name'
      }, {
        text: 'Фамилия',
        value: 'last_name'
      }, {
        text: 'Должность',
        value: 'position'
      }, {
        text: 'Подразделение',
        value: 'department'
      }, {
        text: '',
        sortable: false
      }]
    };
  },
  computed: _extends({
    employees: function employees() {
      var data = [];
      this.items.forEach(function (el) {
        data.push({});
      });
    },
    deleteMsg: function deleteMsg() {
      return this.selected.length == 1 ? this.$t('delete_item_confirm') : this.$t('delete_items_confirm');
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    items: 'employees/employees',
    positions: 'positions/positions',
    departments: 'departments/departments'
  })),
  methods: _extends({
    getPositionName: function getPositionName(id) {
      return this.positions.find(function (el) {
        return el.id == id;
      });
    },
    getDepartmentName: function getDepartmentName(id) {
      var position = this.getPositionName(id);
      return this.departments.find(function (el) {
        return el.id == position.department_id;
      });
    },
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
  })),
  created: function created() {
    if (this.searchProp) this.search = this.searchProp;
    console.log(this.search);
  }
});

/***/ }),

/***/ 194:
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
                      _c("td", [_vm._v(_vm._s(props.item.first_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.last_name))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm.getPositionName(props.item.position_id).title
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm.getDepartmentName(props.item.position_id).title
                          )
                        )
                      ]),
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
                    [_vm._v("\n          Нет данных :(\n        ")]
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
              _vm._v("\n      " + _vm._s(_vm.$t("delete_done")) + "\n      "),
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
    require("vue-hot-reload-api")      .rerender("data-v-350adeb9", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZT9jMzk4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlPzY1NDciLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlP2FkMjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0Esa0VBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLGtEQUFtRCxvQ0FBb0MsR0FBRyx1QkFBdUIsMkJBQTJC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QTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMEJBQTBCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8xMC5lOGY2N2IwN2U3M2FiZGJmODgzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0zNTBhZGViOVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGFkbWluXFxcXGVtcGxveWVlc1xcXFxMaXN0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zNTBhZGViOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM1MGFkZWI5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiM2Y2OWQ0ZWZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTM1MGFkZWI5XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0zNTBhZGViOVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJ0bltkYXRhLXYtMzUwYWRlYjldIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbmxpW2RhdGEtdi0zNTBhZGViOV0ge1xcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXG59XFxuLnRhYmxlX19idXR0b25zW2RhdGEtdi0zNTBhZGViOV0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtNTBweDtcXG59XFxuLmRpYWxvZ19fYWN0aXZhdG9yW2RhdGEtdi0zNTBhZGViOV0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMzBweDtcXG4gIGxlZnQ6IDQwcHg7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uY2FyZF9fdGl0bGVbZGF0YS12LTM1MGFkZWI5XSB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNhcmRfX2FjdGlvbnNbZGF0YS12LTM1MGFkZWI5XSB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmJ1dHRvbkVudGVyW2RhdGEtdi0zNTBhZGViOV0ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1dHRvbkVudGVyLWRhdGEtdi0zNTBhZGViOSAuM3MgY3ViaWMtYmV6aWVyKC4wOSwgLjksIC40OCwgMS42NCk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogYnV0dG9uRW50ZXItZGF0YS12LTM1MGFkZWI5IC4zcyBjdWJpYy1iZXppZXIoLjA5LCAuOSwgLjQ4LCAxLjY0KTtcXG59XFxuLmJ1dHRvbkxlYXZlW2RhdGEtdi0zNTBhZGViOV0ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1dHRvbkxlYXZlLWRhdGEtdi0zNTBhZGViOSAuM3MgY3ViaWMtYmV6aWVyKC41MiwgLTAuNDQsIC44OCwgLTAuNDUpO1xcbiAgICAgICAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlLWRhdGEtdi0zNTBhZGViOSAuM3MgY3ViaWMtYmV6aWVyKC41MiwgLTAuNDQsIC44OCwgLTAuNDUpO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm91dGVyRW50ZXItZGF0YS12LTM1MGFkZWI5IHtcXG4wJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbjEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG59XFxuQGtleWZyYW1lcyByb3V0ZXJFbnRlci1kYXRhLXYtMzUwYWRlYjkge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm91dGVyTGVhdmUtZGF0YS12LTM1MGFkZWI5IHtcXG4wJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbjEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuQGtleWZyYW1lcyByb3V0ZXJMZWF2ZS1kYXRhLXYtMzUwYWRlYjkge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnV0dG9uRW50ZXItZGF0YS12LTM1MGFkZWI5IHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGJ1dHRvbkVudGVyLWRhdGEtdi0zNTBhZGViOSB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1dHRvbkxlYXZlLWRhdGEtdi0zNTBhZGViOSB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG59XFxuQGtleWZyYW1lcyBidXR0b25MZWF2ZS1kYXRhLXYtMzUwYWRlYjkge1xcbjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvY3JtL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFpTUE7RUFDQSxnQ0FBQTtDQUNBO0FBRUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7Q0FDQTtBQUVBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0NBQ0E7QUFFQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0NBQ0E7QUFFQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSx3QkFBQTtDQUNBO0FBRUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsd0JBQUE7Q0FDQTtBQUVBO0VBQ0Esb0ZBQUE7VUFBQSw0RUFBQTtDQUNBO0FBRUE7RUFDQSx3RkFBQTtVQUFBLGdGQUFBO0NBQ0E7QUFFQTtBQUNBO0lBQ0EsV0FBQTtDQUNBO0FBQ0E7SUFDQSxXQUFBO0NBQ0E7Q0FDQTtBQVBBO0FBQ0E7SUFDQSxXQUFBO0NBQ0E7QUFDQTtJQUNBLFdBQUE7Q0FDQTtDQUNBO0FBRUE7QUFDQTtJQUNBLFdBQUE7Q0FDQTtBQUNBO0lBQ0EsV0FBQTtDQUNBO0NBQ0E7QUFQQTtBQUNBO0lBQ0EsV0FBQTtDQUNBO0FBQ0E7SUFDQSxXQUFBO0NBQ0E7Q0FDQTtBQUVBO0FBQ0E7SUFDQSw0QkFBQTtZQUFBLG9CQUFBO0NBQ0E7QUFDQTtJQUNBLDRCQUFBO1lBQUEsb0JBQUE7Q0FDQTtDQUNBO0FBUEE7QUFDQTtJQUNBLDRCQUFBO1lBQUEsb0JBQUE7Q0FDQTtBQUNBO0lBQ0EsNEJBQUE7WUFBQSxvQkFBQTtDQUNBO0NBQ0E7QUFFQTtBQUNBO0lBQ0EsNEJBQUE7WUFBQSxvQkFBQTtDQUNBO0FBQ0E7SUFDQSw0QkFBQTtZQUFBLG9CQUFBO0NBQ0E7Q0FDQTtBQVBBO0FBQ0E7SUFDQSw0QkFBQTtZQUFBLG9CQUFBO0NBQ0E7QUFDQTtJQUNBLDRCQUFBO1lBQUEsb0JBQUE7Q0FDQTtDQUNBXCIsXCJmaWxlXCI6XCJMaXN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8ZGl2PlxcclxcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwiZGVsZXRlV2luZG93XFxcIiBtYXgtd2lkdGg9XFxcIjUwMHB4XFxcIj5cXHJcXG4gICAgICA8di1jYXJkPlxcclxcbiAgICAgICAgPHYtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRsaW5lXFxcIj57eyAkdCgnYXR0ZW50aW9uJykgfX08L3NwYW4+XFxyXFxuICAgICAgICA8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgIDx2LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgPHYtZmxleCB4czEyPnt7ZGVsZXRlTXNnfX08L3YtZmxleD5cXHJcXG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XFxyXFxuICAgICAgICA8di1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVxcXCJpbmZvXFxcIiBAY2xpY2submF0aXZlPVxcXCJkZWxldGVDb25maXJtXFxcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVxcXCJlcnJvclxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiZGVsZXRlQ2FuY2VsXFxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxcclxcbiAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICA8L3YtY2FyZD5cXHJcXG4gICAgPC92LWRpYWxvZz5cXHJcXG4gICAgPHYtY2FyZD5cXHJcXG4gICAgICA8di1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgPGgyPnt7ICR0KCdlbXBsb3llZXMnKSB9fTwvaDI+XFxyXFxuICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cXHJcXG4gICAgICAgIDx2LXRleHQtZmllbGRcXHJcXG4gICAgICAgICAgYXBwZW5kLWljb249XFxcInNlYXJjaFxcXCJcXHJcXG4gICAgICAgICAgOmxhYmVsPVxcXCIkdCgnc2VhcmNoX2lucHV0JylcXFwiXFxyXFxuICAgICAgICAgIHNpbmdsZS1saW5lXFxyXFxuICAgICAgICAgIHYtbW9kZWw9XFxcInNlYXJjaFxcXCJcXHJcXG4gICAgICAgID48L3YtdGV4dC1maWVsZD5cXHJcXG4gICAgICA8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICA8di1kYXRhLXRhYmxlXFxyXFxuICAgICAgICA6aGVhZGVycz1cXFwiaGVhZGVyc1xcXCJcXHJcXG4gICAgICAgIDppdGVtcz1cXFwiaXRlbXNcXFwiXFxyXFxuICAgICAgICA6c2VhcmNoPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICB2LW1vZGVsPVxcXCJzZWxlY3RlZFxcXCJcXHJcXG4gICAgICAgIHNlbGVjdC1hbGxcXHJcXG4gICAgICAgIGl0ZW0ta2V5PVxcXCJpZFxcXCJcXHJcXG4gICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XFxcIiR0KCdub19tYXRjaF9mb3VuZCcpXFxcIlxcclxcbiAgICAgICAgOnJvd3MtcGVyLXBhZ2UtdGV4dD1cXFwiJHQoJ3N0cmluZ3MnKVxcXCJcXHJcXG4gICAgICAgIGNsYXNzPVxcXCJlbGV2YXRpb24tMVxcXCJcXHJcXG4gICAgICA+XFxyXFxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiaXRlbXNcXFwiIHNsb3Qtc2NvcGU9XFxcInByb3BzXFxcIj5cXHJcXG4gICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgIDx2LWNoZWNrYm94XFxyXFxuICAgICAgICAgICAgICBwcmltYXJ5XFxyXFxuICAgICAgICAgICAgICBoaWRlLWRldGFpbHNcXHJcXG4gICAgICAgICAgICAgIHYtbW9kZWw9XFxcInByb3BzLnNlbGVjdGVkXFxcIlxcclxcbiAgICAgICAgICAgID48L3YtY2hlY2tib3g+XFxyXFxuICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgIDwhLS08dGQ+LS0+XFxyXFxuICAgICAgICAgIDwhLS08di1saXN0LXRpbGUtYXZhdGFyPi0tPlxcclxcbiAgICAgICAgICA8IS0tPGltZyA6c3JjPVxcXCJwcm9wcy5pdGVtLmF2YXRhclxcXCI+LS0+XFxyXFxuICAgICAgICAgIDwhLS08L3YtbGlzdC10aWxlLWF2YXRhcj4tLT5cXHJcXG4gICAgICAgICAgPCEtLTwvdGQ+LS0+XFxyXFxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmZpcnN0X25hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5sYXN0X25hbWUgfX08L3RkPlxcclxcbiAgICAgICAgICA8dGQ+e3sgZ2V0UG9zaXRpb25OYW1lKHByb3BzLml0ZW0ucG9zaXRpb25faWQpLnRpdGxlIH19PC90ZD5cXHJcXG4gICAgICAgICAgPHRkPnt7IGdldERlcGFydG1lbnROYW1lKHByb3BzLml0ZW0ucG9zaXRpb25faWQpLnRpdGxlIH19PC90ZD5cXHJcXG4gICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIHJvdW5kIDp0bz1cXFwie25hbWU6ICdlbXBsb3llZScsIHBhcmFtczoge2lkOiBwcm9wcy5pdGVtLmlkfX1cXFwiPnt7ICR0KCdkZXRhaWxzJykgfX08L3YtYnRuPlxcclxcbiAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJuby1kYXRhXFxcIj5cXHJcXG4gICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVxcXCJ0cnVlXFxcIiBjb2xvcj1cXFwicmVkXFxcIiBpY29uPVxcXCJ3YXJuaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICDQndC10YIg0LTQsNC90L3Ri9GFIDooXFxyXFxuICAgICAgICAgIDwvdi1hbGVydD5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgPC92LWRhdGEtdGFibGU+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGVfX2J1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgPHYtYnRuIGZhYiBkYXJrIGxhcmdlIGNvbG9yPVxcXCJjeWFuXFxcIiA6dG89XFxcInsgbmFtZTogJ2VtcGxveWVlQ3JlYXRlJyB9XFxcIj5cXHJcXG4gICAgICAgICAgPHYtaWNvbiBkYXJrPmFkZDwvdi1pY29uPlxcclxcbiAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgIDx0cmFuc2l0aW9uIGVudGVyLWFjdGl2ZS1jbGFzcz1cXFwiYnV0dG9uRW50ZXJcXFwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cXFwiYnV0dG9uTGVhdmVcXFwiIG1vZGU9XFxcIm91dC1pblxcXCI+XFxyXFxuICAgICAgICAgIDx2LWJ0biB2LXNob3c9XFxcInNlbGVjdGVkLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJkZWxldGUtYnRuXFxcIiBmYWIgbGFyZ2UgZGFyayBAY2xpY2s9XFxcImRlbGV0ZURpYWxvZyhzZWxlY3RlZClcXFwiPlxcclxcbiAgICAgICAgICAgIDx2LWljb24+ZGVsZXRlPC92LWljb24+XFxyXFxuICAgICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICA8L3RyYW5zaXRpb24+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPHYtc25hY2tiYXIgOnRpbWVvdXQ9XFxcInNuYWNrYmFyVGltZW91dFxcXCIgdG9wIHYtbW9kZWw9XFxcInNuYWNrYmFyU2hvd1xcXCIgbXVsdGktbGluZSBjb2xvcj1cXFwiaW5mb1xcXCI+XFxyXFxuICAgICAgICB7eyAkdCgnZGVsZXRlX2RvbmUnKSB9fVxcclxcbiAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XFxcInBpbmtcXFwiIEBjbGljay5uYXRpdmU9XFxcInNuYWNrYmFyU2hvdyA9IGZhbHNlXFxcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XFxyXFxuICAgICAgPC92LXNuYWNrYmFyPlxcclxcbiAgICA8L3YtY2FyZD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gIGltcG9ydCB7XFxyXFxuICAgIG1hcEFjdGlvbnMsXFxyXFxuICAgIG1hcEdldHRlcnNcXHJcXG4gIH0gZnJvbSAndnVleCc7XFxyXFxuXFxyXFxuICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIG1pZGRsZXdhcmU6IFsnYXV0aCcsICdvcmdhbmlzYXRpb24nXSxcXHJcXG4gICAgcHJvcHM6IHtcXHJcXG4gICAgICBzZWFyY2hQcm9wOiB7XFxyXFxuICAgICAgICB0eXBlOiBTdHJpbmcsXFxyXFxuICAgICAgICBkZWZhdWx0OiAnJ1xcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgZGF0YTogKCkgPT4gKHtcXHJcXG4gICAgICBzbmFja2JhclNob3c6IGZhbHNlLFxcclxcbiAgICAgIHNuYWNrYmFyVGltZW91dDogMTAwMDAsXFxyXFxuICAgICAgLy8g0J/QvtC40YHQuiAvINCS0YvQsdC+0YDQutCwXFxyXFxuICAgICAgc2VhcmNoOiAnJyxcXHJcXG4gICAgICBzZWxlY3RlZDogW10sXFxyXFxuICAgICAgZGlhbG9nOiBmYWxzZSxcXHJcXG4gICAgICAvLyDQo9C00LDQu9C10L3QuNC1XFxyXFxuICAgICAgZGVsZXRlV2luZG93OiBmYWxzZSxcXHJcXG4gICAgICBkZWxldGVDYXRlZ29yeTogbnVsbCxcXHJcXG4gICAgICBkZWxNb2RlOiAnc2luZ2xlJyxcXHJcXG4gICAgICAvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcXHJcXG4gICAgICBoZWFkZXJzOiBbXFxyXFxuICAgICAgICB7XFxyXFxuICAgICAgICAgIHRleHQ6ICfQmNC80Y8nLFxcclxcbiAgICAgICAgICB2YWx1ZTogJ2ZpcnN0X25hbWUnXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAge1xcclxcbiAgICAgICAgICB0ZXh0OiAn0KTQsNC80LjQu9C40Y8nLFxcclxcbiAgICAgICAgICB2YWx1ZTogJ2xhc3RfbmFtZSdcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB7XFxyXFxuICAgICAgICAgIHRleHQ6ICfQlNC+0LvQttC90L7RgdGC0YwnLFxcclxcbiAgICAgICAgICB2YWx1ZTogJ3Bvc2l0aW9uJ1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHtcXHJcXG4gICAgICAgICAgdGV4dDogJ9Cf0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1JyxcXHJcXG4gICAgICAgICAgdmFsdWU6ICdkZXBhcnRtZW50J1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHtcXHJcXG4gICAgICAgICAgdGV4dDogJycsXFxyXFxuICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIF1cXHJcXG4gICAgfSksXFxyXFxuICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgZW1wbG95ZWVzKCkge1xcclxcbiAgICAgICAgY29uc3QgZGF0YSA9IFtdXFxyXFxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goZWwgPT4ge1xcclxcbiAgICAgICAgICBkYXRhLnB1c2goe1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICB9KVxcclxcbiAgICAgICAgfSlcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGRlbGV0ZU1zZygpIHtcXHJcXG4gICAgICAgIHJldHVybiAodGhpcy5zZWxlY3RlZC5sZW5ndGggPT0gMSkgPyB0aGlzLiR0KCdkZWxldGVfaXRlbV9jb25maXJtJykgOlxcclxcbiAgICAgICAgICB0aGlzLiR0KCdkZWxldGVfaXRlbXNfY29uZmlybScpO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgLi4ubWFwR2V0dGVycyh7XFxyXFxuICAgICAgICBpdGVtczogJ2VtcGxveWVlcy9lbXBsb3llZXMnLFxcclxcbiAgICAgICAgcG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXFxyXFxuICAgICAgICBkZXBhcnRtZW50czogJ2RlcGFydG1lbnRzL2RlcGFydG1lbnRzJ1xcclxcbiAgICAgIH0pXFxyXFxuICAgIH0sXFxyXFxuICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICBnZXRQb3NpdGlvbk5hbWUoaWQpIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9ucy5maW5kKGVsID0+IGVsLmlkID09IGlkKTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGdldERlcGFydG1lbnROYW1lKGlkKSB7XFxyXFxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb25OYW1lKGlkKVxcclxcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwYXJ0bWVudHMuZmluZChlbCA9PiBlbC5pZCA9PSBwb3NpdGlvbi5kZXBhcnRtZW50X2lkKVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVsZXRlRGlhbG9nKGl0ZW0pIHtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gdHJ1ZTtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBpdGVtO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVsZXRlQ29uZmlybSgpIHtcXHJcXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuZm9yRWFjaChlbCA9PiB0aGlzLmRlbGV0ZUl0ZW0oZWwuaWQpKTtcXHJcXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XFxyXFxuICAgICAgICB0aGlzLmVkaXRlZElEID0gbnVsbDtcXHJcXG4gICAgICAgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGRlbGV0ZUNhbmNlbCgpIHtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBudWxsO1xcclxcbiAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGNsb3NlKCkge1xcclxcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcXHJcXG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xcclxcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgLi4ubWFwQWN0aW9ucyh7XFxyXFxuICAgICAgICBsb2FkSXRlbXM6ICdlbXBsb3llZXMvbG9hZCcsXFxyXFxuICAgICAgICBkZWxldGVJdGVtOiAnZW1wbG95ZWVzL3JlbW92ZSdcXHJcXG4gICAgICB9KVxcclxcbiAgICB9LFxcclxcbiAgICBjcmVhdGVkKCkge1xcclxcbiAgICAgIGlmICh0aGlzLnNlYXJjaFByb3ApIHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2hQcm9wXFxyXFxuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2gpXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgLmJ0biB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGxpIHtcXHJcXG4gICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRhYmxlX19idXR0b25zIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IC01MHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGlhbG9nX19hY3RpdmF0b3Ige1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogLTMwcHg7XFxyXFxuICAgIGxlZnQ6IDQwcHg7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJkX190aXRsZSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2FyZF9fYWN0aW9ucyB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnV0dG9uRW50ZXIge1xcclxcbiAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LCAuOSwgLjQ4LCAxLjY0KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ1dHRvbkxlYXZlIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZSAuM3MgY3ViaWMtYmV6aWVyKC41MiwgLTAuNDQsIC44OCwgLTAuNDUpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIHJvdXRlckVudGVyIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIHJvdXRlckxlYXZlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTM1MGFkZWI5XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkZWxldGVXaW5kb3dcIiBtYXgtd2lkdGg9XCI1MDBweFwiPlxyXG4gICAgICA8di1jYXJkPlxyXG4gICAgICAgIDx2LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+e3sgJHQoJ2F0dGVudGlvbicpIH19PC9zcGFuPlxyXG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgIDx2LWZsZXggeHMxMj57e2RlbGV0ZU1zZ319PC92LWZsZXg+XHJcbiAgICAgICAgPC92LWNhcmQtdGV4dD5cclxuICAgICAgICA8di1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cImluZm9cIiBAY2xpY2submF0aXZlPVwiZGVsZXRlQ29uZmlybVwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cclxuICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiZXJyb3JcIiBAY2xpY2submF0aXZlPVwiZGVsZXRlQ2FuY2VsXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj5cclxuICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxyXG4gICAgICA8L3YtY2FyZD5cclxuICAgIDwvdi1kaWFsb2c+XHJcbiAgICA8di1jYXJkPlxyXG4gICAgICA8di1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDxoMj57eyAkdCgnZW1wbG95ZWVzJykgfX08L2gyPlxyXG4gICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxyXG4gICAgICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgICAgIGFwcGVuZC1pY29uPVwic2VhcmNoXCJcclxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdzZWFyY2hfaW5wdXQnKVwiXHJcbiAgICAgICAgICBzaW5nbGUtbGluZVxyXG4gICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFwiXHJcbiAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxyXG4gICAgICA8L3YtY2FyZC10aXRsZT5cclxuICAgICAgPHYtZGF0YS10YWJsZVxyXG4gICAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXHJcbiAgICAgICAgOml0ZW1zPVwiaXRlbXNcIlxyXG4gICAgICAgIDpzZWFyY2g9XCJzZWFyY2hcIlxyXG4gICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZFwiXHJcbiAgICAgICAgc2VsZWN0LWFsbFxyXG4gICAgICAgIGl0ZW0ta2V5PVwiaWRcIlxyXG4gICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XCIkdCgnbm9fbWF0Y2hfZm91bmQnKVwiXHJcbiAgICAgICAgOnJvd3MtcGVyLXBhZ2UtdGV4dD1cIiR0KCdzdHJpbmdzJylcIlxyXG4gICAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTFcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJpdGVtc1wiIHNsb3Qtc2NvcGU9XCJwcm9wc1wiPlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8di1jaGVja2JveFxyXG4gICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICBoaWRlLWRldGFpbHNcclxuICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvcHMuc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICA+PC92LWNoZWNrYm94PlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwhLS08dGQ+LS0+XHJcbiAgICAgICAgICA8IS0tPHYtbGlzdC10aWxlLWF2YXRhcj4tLT5cclxuICAgICAgICAgIDwhLS08aW1nIDpzcmM9XCJwcm9wcy5pdGVtLmF2YXRhclwiPi0tPlxyXG4gICAgICAgICAgPCEtLTwvdi1saXN0LXRpbGUtYXZhdGFyPi0tPlxyXG4gICAgICAgICAgPCEtLTwvdGQ+LS0+XHJcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5maXJzdF9uYW1lIH19PC90ZD5cclxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmxhc3RfbmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3sgZ2V0UG9zaXRpb25OYW1lKHByb3BzLml0ZW0ucG9zaXRpb25faWQpLnRpdGxlIH19PC90ZD5cclxuICAgICAgICAgIDx0ZD57eyBnZXREZXBhcnRtZW50TmFtZShwcm9wcy5pdGVtLnBvc2l0aW9uX2lkKS50aXRsZSB9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIHJvdW5kIDp0bz1cIntuYW1lOiAnZW1wbG95ZWUnLCBwYXJhbXM6IHtpZDogcHJvcHMuaXRlbS5pZH19XCI+e3sgJHQoJ2RldGFpbHMnKSB9fTwvdi1idG4+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJuby1kYXRhXCI+XHJcbiAgICAgICAgICA8di1hbGVydCA6dmFsdWU9XCJ0cnVlXCIgY29sb3I9XCJyZWRcIiBpY29uPVwid2FybmluZ1wiPlxyXG4gICAgICAgICAgICDQndC10YIg0LTQsNC90L3Ri9GFIDooXHJcbiAgICAgICAgICA8L3YtYWxlcnQ+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC92LWRhdGEtdGFibGU+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fYnV0dG9uc1wiPlxyXG4gICAgICAgIDx2LWJ0biBmYWIgZGFyayBsYXJnZSBjb2xvcj1cImN5YW5cIiA6dG89XCJ7IG5hbWU6ICdlbXBsb3llZUNyZWF0ZScgfVwiPlxyXG4gICAgICAgICAgPHYtaWNvbiBkYXJrPmFkZDwvdi1pY29uPlxyXG4gICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgPHRyYW5zaXRpb24gZW50ZXItYWN0aXZlLWNsYXNzPVwiYnV0dG9uRW50ZXJcIiBsZWF2ZS1hY3RpdmUtY2xhc3M9XCJidXR0b25MZWF2ZVwiIG1vZGU9XCJvdXQtaW5cIj5cclxuICAgICAgICAgIDx2LWJ0biB2LXNob3c9XCJzZWxlY3RlZC5sZW5ndGggPiAwXCIgY2xhc3M9XCJkZWxldGUtYnRuXCIgZmFiIGxhcmdlIGRhcmsgQGNsaWNrPVwiZGVsZXRlRGlhbG9nKHNlbGVjdGVkKVwiPlxyXG4gICAgICAgICAgICA8di1pY29uPmRlbGV0ZTwvdi1pY29uPlxyXG4gICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8di1zbmFja2JhciA6dGltZW91dD1cInNuYWNrYmFyVGltZW91dFwiIHRvcCB2LW1vZGVsPVwic25hY2tiYXJTaG93XCIgbXVsdGktbGluZSBjb2xvcj1cImluZm9cIj5cclxuICAgICAgICB7eyAkdCgnZGVsZXRlX2RvbmUnKSB9fVxyXG4gICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicGlua1wiIEBjbGljay5uYXRpdmU9XCJzbmFja2JhclNob3cgPSBmYWxzZVwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cclxuICAgICAgPC92LXNuYWNrYmFyPlxyXG4gICAgPC92LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7XHJcbiAgICBtYXBBY3Rpb25zLFxyXG4gICAgbWFwR2V0dGVyc1xyXG4gIH0gZnJvbSAndnVleCc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1pZGRsZXdhcmU6IFsnYXV0aCcsICdvcmdhbmlzYXRpb24nXSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNlYXJjaFByb3A6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6ICgpID0+ICh7XHJcbiAgICAgIHNuYWNrYmFyU2hvdzogZmFsc2UsXHJcbiAgICAgIHNuYWNrYmFyVGltZW91dDogMTAwMDAsXHJcbiAgICAgIC8vINCf0L7QuNGB0LogLyDQktGL0LHQvtGA0LrQsFxyXG4gICAgICBzZWFyY2g6ICcnLFxyXG4gICAgICBzZWxlY3RlZDogW10sXHJcbiAgICAgIGRpYWxvZzogZmFsc2UsXHJcbiAgICAgIC8vINCj0LTQsNC70LXQvdC40LVcclxuICAgICAgZGVsZXRlV2luZG93OiBmYWxzZSxcclxuICAgICAgZGVsZXRlQ2F0ZWdvcnk6IG51bGwsXHJcbiAgICAgIGRlbE1vZGU6ICdzaW5nbGUnLFxyXG4gICAgICAvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcclxuICAgICAgaGVhZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICfQmNC80Y8nLFxyXG4gICAgICAgICAgdmFsdWU6ICdmaXJzdF9uYW1lJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ9Ck0LDQvNC40LvQuNGPJyxcclxuICAgICAgICAgIHZhbHVlOiAnbGFzdF9uYW1lJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ9CU0L7Qu9C20L3QvtGB0YLRjCcsXHJcbiAgICAgICAgICB2YWx1ZTogJ3Bvc2l0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ9Cf0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1JyxcclxuICAgICAgICAgIHZhbHVlOiAnZGVwYXJ0bWVudCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgc29ydGFibGU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIGVtcGxveWVlcygpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gW11cclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgZGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZU1zZygpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09IDEpID8gdGhpcy4kdCgnZGVsZXRlX2l0ZW1fY29uZmlybScpIDpcclxuICAgICAgICAgIHRoaXMuJHQoJ2RlbGV0ZV9pdGVtc19jb25maXJtJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICAgIGl0ZW1zOiAnZW1wbG95ZWVzL2VtcGxveWVlcycsXHJcbiAgICAgICAgcG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXHJcbiAgICAgICAgZGVwYXJ0bWVudHM6ICdkZXBhcnRtZW50cy9kZXBhcnRtZW50cydcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGdldFBvc2l0aW9uTmFtZShpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9ucy5maW5kKGVsID0+IGVsLmlkID09IGlkKTtcclxuICAgICAgfSxcclxuICAgICAgZ2V0RGVwYXJ0bWVudE5hbWUoaWQpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb25OYW1lKGlkKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRlcGFydG1lbnRzLmZpbmQoZWwgPT4gZWwuaWQgPT0gcG9zaXRpb24uZGVwYXJ0bWVudF9pZClcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlRGlhbG9nKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kZWxldGVDYXRlZ29yeSA9IGl0ZW07XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZUNvbmZpcm0oKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5mb3JFYWNoKGVsID0+IHRoaXMuZGVsZXRlSXRlbShlbC5pZCkpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZWRpdGVkSUQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlQ2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSk7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xyXG4gICAgICB9LFxyXG4gICAgICAuLi5tYXBBY3Rpb25zKHtcclxuICAgICAgICBsb2FkSXRlbXM6ICdlbXBsb3llZXMvbG9hZCcsXHJcbiAgICAgICAgZGVsZXRlSXRlbTogJ2VtcGxveWVlcy9yZW1vdmUnXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgaWYgKHRoaXMuc2VhcmNoUHJvcCkgdGhpcy5zZWFyY2ggPSB0aGlzLnNlYXJjaFByb3BcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2gpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5idG4ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgbGkge1xyXG4gICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4ICMwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZV9fYnV0dG9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC01MHB4O1xyXG4gIH1cclxuICBcclxuICAuZGlhbG9nX19hY3RpdmF0b3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMzBweDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAuY2FyZF9fdGl0bGUge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkX19hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uRW50ZXIge1xyXG4gICAgYW5pbWF0aW9uOiBidXR0b25FbnRlciAuM3MgY3ViaWMtYmV6aWVyKC4wOSwgLjksIC40OCwgMS42NCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b25MZWF2ZSB7XHJcbiAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlIC4zcyBjdWJpYy1iZXppZXIoLjUyLCAtMC40NCwgLjg4LCAtMC40NSk7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcm91dGVyTGVhdmUge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYnV0dG9uRW50ZXIge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kZWxldGVXaW5kb3csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kZWxldGVXaW5kb3cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRlbGV0ZVdpbmRvd1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcImF0dGVudGlvblwiKSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtZmxleFwiLCB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRlbGV0ZU1zZykpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVDb25maXJtKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJlcnJvclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNhbmNlbCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjYW5jZWxcIikpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiZW1wbG95ZWVzXCIpKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwic2VhcmNoX2lucHV0XCIpLFxuICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZGF0YS10YWJsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0LWFsbFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgIFwibm8tcmVzdWx0cy10ZXh0XCI6IF92bS4kdChcIm5vX21hdGNoX2ZvdW5kXCIpLFxuICAgICAgICAgICAgICAgIFwicm93cy1wZXItcGFnZS10ZXh0XCI6IF92bS4kdChcInN0cmluZ3NcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwcmltYXJ5OiBcIlwiLCBcImhpZGUtZGV0YWlsc1wiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQocHJvcHMsIFwic2VsZWN0ZWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvcHMuc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5maXJzdF9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5sYXN0X25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UG9zaXRpb25OYW1lKHByb3BzLml0ZW0ucG9zaXRpb25faWQpLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldERlcGFydG1lbnROYW1lKHByb3BzLml0ZW0ucG9zaXRpb25faWQpLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogcHJvcHMuaXRlbS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImRldGFpbHNcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgIHsgc2xvdDogXCJuby1kYXRhXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IHRydWUsIGNvbG9yOiBcInJlZFwiLCBpY29uOiBcIndhcm5pbmdcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAg0J3QtdGCINC00LDQvdC90YvRhSA6KFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlX19idXR0b25zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogXCJlbXBsb3llZUNyZWF0ZVwiIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGRhcms6IFwiXCIgfSB9LCBbX3ZtLl92KFwiYWRkXCIpXSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJidXR0b25FbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcImJ1dHRvbkxlYXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IFwib3V0LWluXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWQubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZWxldGUtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmFiOiBcIlwiLCBsYXJnZTogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVEaWFsb2coX3ZtLnNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJkZWxldGVcIildKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtc25hY2tiYXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBfdm0uc25hY2tiYXJUaW1lb3V0LFxuICAgICAgICAgICAgICAgIHRvcDogXCJcIixcbiAgICAgICAgICAgICAgICBcIm11bHRpLWxpbmVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNuYWNrYmFyU2hvdyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc25hY2tiYXJTaG93ID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNuYWNrYmFyU2hvd1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChcImRlbGV0ZV9kb25lXCIpKSArIFwiXFxuICAgICAgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicGlua1wiIH0sXG4gICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNuYWNrYmFyU2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMzUwYWRlYjlcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTM1MGFkZWI5XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiXSwic291cmNlUm9vdCI6IiJ9