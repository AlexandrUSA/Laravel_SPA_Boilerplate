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
exports.push([module.i, "\n.btn[data-v-350adeb9] {\n  text-transform: none !important;\n}\nli[data-v-350adeb9] {\n  margin: 5px !important;\n  -webkit-box-shadow: 0 0 15px #000;\n          box-shadow: 0 0 15px #000;\n}\n.table__buttons[data-v-350adeb9] {\n  position: absolute;\n  bottom: -50px;\n}\n.dialog__activator[data-v-350adeb9] {\n  position: absolute;\n  bottom: -30px;\n  left: 40px;\n  z-index: 1;\n}\n.card__title[data-v-350adeb9] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.card__actions[data-v-350adeb9] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.buttonEnter[data-v-350adeb9] {\n  -webkit-animation: buttonEnter-data-v-350adeb9 .3s cubic-bezier(.09, .9, .48, 1.64);\n          animation: buttonEnter-data-v-350adeb9 .3s cubic-bezier(.09, .9, .48, 1.64);\n}\n.buttonLeave[data-v-350adeb9] {\n  -webkit-animation: buttonLeave-data-v-350adeb9 .3s cubic-bezier(.52, -0.44, .88, -0.45);\n          animation: buttonLeave-data-v-350adeb9 .3s cubic-bezier(.52, -0.44, .88, -0.45);\n}\n@-webkit-keyframes routerEnter-data-v-350adeb9 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes routerEnter-data-v-350adeb9 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@-webkit-keyframes routerLeave-data-v-350adeb9 {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes routerLeave-data-v-350adeb9 {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@-webkit-keyframes buttonEnter-data-v-350adeb9 {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes buttonEnter-data-v-350adeb9 {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@-webkit-keyframes buttonLeave-data-v-350adeb9 {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n}\n@keyframes buttonLeave-data-v-350adeb9 {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/List.vue"],"names":[],"mappings":";AAqMA;EACA,gCAAA;CACA;AAEA;EACA,uBAAA;EACA,kCAAA;UAAA,0BAAA;CACA;AAEA;EACA,mBAAA;EACA,cAAA;CACA;AAEA;EACA,mBAAA;EACA,cAAA;EACA,WAAA;EACA,WAAA;CACA;AAEA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;CACA;AAEA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;CACA;AAEA;EACA,oFAAA;UAAA,4EAAA;CACA;AAEA;EACA,wFAAA;UAAA,gFAAA;CACA;AAEA;AACA;IACA,WAAA;CACA;AACA;IACA,WAAA;CACA;CACA;AAPA;AACA;IACA,WAAA;CACA;AACA;IACA,WAAA;CACA;CACA;AAEA;AACA;IACA,WAAA;CACA;AACA;IACA,WAAA;CACA;CACA;AAPA;AACA;IACA,WAAA;CACA;AACA;IACA,WAAA;CACA;CACA;AAEA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;CACA;AAPA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;CACA;AAEA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;CACA;AAPA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;CACA","file":"List.vue","sourcesContent":["<template>\r\n  <div>\r\n    <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\r\n      <v-card>\r\n        <v-card-title>\r\n          <span class=\"headline\">{{ $t('attention') }}</span>\r\n        </v-card-title>\r\n        <v-card-text>\r\n          <v-flex xs12>{{ deleteMsg }}</v-flex>\r\n        </v-card-text>\r\n        <v-card-actions>\r\n          <v-btn outline color=\"info\" @click.native=\"deleteConfirm\">{{ $t('ok') }}</v-btn>\r\n          <v-btn outline color=\"error\" @click.native=\"deleteCancel\">{{ $t('cancel') }}</v-btn>\r\n        </v-card-actions>\r\n      </v-card>\r\n    </v-dialog>\r\n    <v-card>\r\n      <v-card-title>\r\n        <h2>{{ $t('employees') }}</h2>\r\n        <v-spacer></v-spacer>\r\n        <v-text-field\r\n          append-icon=\"search\"\r\n          :label=\"$t('search_input')\"\r\n          single-line\r\n          v-model=\"search\"\r\n        ></v-text-field>\r\n      </v-card-title>\r\n      <v-data-table\r\n        :headers=\"headers\"\r\n        :items=\"items\"\r\n        :search=\"search\"\r\n        v-model=\"selected\"\r\n        select-all\r\n        item-key=\"id\"\r\n        :no-results-text=\"$t('no_match_found')\"\r\n        :rows-per-page-text=\"$t('strings')\"\r\n        class=\"elevation-1\"\r\n      >\r\n        <template slot=\"items\" slot-scope=\"props\">\r\n          <td>\r\n            <v-checkbox\r\n              primary\r\n              hide-details\r\n              v-model=\"props.selected\"\r\n            ></v-checkbox>\r\n          </td>\r\n          <!--<td>-->\r\n          <!--<v-list-tile-avatar>-->\r\n          <!--<img :src=\"props.item.avatar\">-->\r\n          <!--</v-list-tile-avatar>-->\r\n          <!--</td>-->\r\n          <td>{{ props.item.first_name }}</td>\r\n          <td>{{ props.item.last_name }}</td>\r\n          <td>{{ props.item.position }}</td>\r\n          <td>{{ props.item.department }}</td>\r\n          <td>\r\n            <v-btn outline round :to=\"{name: 'employee', params: {id: props.item.id}}\">{{ $t('details') }}</v-btn>\r\n          </td>\r\n        </template>\r\n        <template slot=\"no-data\">\r\n          <v-alert :value=\"true\" color=\"red\" icon=\"warning\">\r\n            Нет данных :(\r\n          </v-alert>\r\n        </template>\r\n      </v-data-table>\r\n      <div class=\"table__buttons\">\r\n        <v-btn fab dark large color=\"cyan\" :to=\"{ name: 'employeeCreate' }\">\r\n          <v-icon dark>add</v-icon>\r\n        </v-btn>\r\n        <transition enter-active-class=\"buttonEnter\" leave-active-class=\"buttonLeave\" mode=\"out-in\">\r\n          <v-btn v-show=\"selected.length > 0\" class=\"delete-btn\" fab large dark @click=\"deleteDialog(selected)\">\r\n            <v-icon>delete</v-icon>\r\n          </v-btn>\r\n        </transition>\r\n      </div>\r\n      <v-snackbar :timeout=\"snackbarTimeout\" top v-model=\"snackbarShow\" multi-line color=\"info\">\r\n        {{ $t('delete_done') }}\r\n        <v-btn flat color=\"pink\" @click.native=\"snackbarShow = false\">{{ $t('ok') }}</v-btn>\r\n      </v-snackbar>\r\n    </v-card>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import {\r\n    mapActions,\r\n    mapGetters\r\n  } from 'vuex';\r\n\r\n  export default {\r\n    middleware: ['auth', 'organisation'],\r\n    props: {\r\n      searchProp: {\r\n        type: String,\r\n        default: ''\r\n      }\r\n    },\r\n    data: () => ({\r\n      snackbarShow: false,\r\n      snackbarTimeout: 10000,\r\n      // Поиск / Выборка\r\n      search: '',\r\n      selected: [],\r\n      dialog: false,\r\n      // Удаление\r\n      deleteWindow: false,\r\n      deleteCategory: null,\r\n      delMode: 'single',\r\n      // Заголовки таблицы\r\n      headers: [\r\n        {\r\n          text: 'Имя',\r\n          value: 'first_name'\r\n        },\r\n        {\r\n          text: 'Фамилия',\r\n          value: 'last_name'\r\n        },\r\n        {\r\n          text: 'Должность',\r\n          value: 'position'\r\n        },\r\n        {\r\n          text: 'Подразделение',\r\n          value: 'department'\r\n        },\r\n        {\r\n          text: '',\r\n          sortable: false\r\n        }\r\n      ]\r\n    }),\r\n    computed: {\r\n      items() {\r\n        const data = [];\r\n        this.employees.forEach(el => {\r\n          data.push({\r\n            id: el.id,\r\n            first_name: el.first_name,\r\n            last_name: el.last_name,\r\n            position: this.getPositionName(el.position_id).title,\r\n            department: this.getDepartmentName(el.position_id).title\r\n          })\r\n        })\r\n        return data;\r\n      },\r\n      deleteMsg() {\r\n        return (this.selected.length == 1) ? this.$t('delete_item_confirm') :\r\n          this.$t('delete_items_confirm');\r\n      },\r\n      ...mapGetters({\r\n        employees: 'employees/employees',\r\n        positions: 'positions/positions',\r\n        departments: 'departments/departments'\r\n      })\r\n    },\r\n    methods: {\r\n      getPositionName(id) {\r\n        return this.positions.find(el => el.id == id) || '';\r\n      },\r\n      getDepartmentName(id) {\r\n        const position = this.getPositionName(id)\r\n        return this.departments.find(el => el.id == position.department_id) || '';\r\n      },\r\n      deleteDialog(item) {\r\n        this.deleteWindow = true;\r\n        this.deleteCategory = item;\r\n      },\r\n      deleteConfirm() {\r\n        this.selected.forEach(el => this.deleteItem(el.id));\r\n        this.selected = [];\r\n        this.deleteWindow = false;\r\n        this.editedID = null;\r\n        this.snackbarShow = true;\r\n      },\r\n      deleteCancel() {\r\n        this.deleteCategory = null;\r\n        this.deleteWindow = false;\r\n      },\r\n      close() {\r\n        this.dialog = false;\r\n        this.editedItem = Object.assign({}, this.defaultItem);\r\n        this.editedIndex = -1;\r\n      },\r\n      ...mapActions({\r\n        loadItems: 'employees/load',\r\n        deleteItem: 'employees/remove'\r\n      })\r\n    },\r\n    created() {\r\n      if (this.searchProp) this.search = this.searchProp\r\n    }\r\n  }\r\n\r\n</script>\r\n\r\n<style scoped>\r\n  .btn {\r\n    text-transform: none !important;\r\n  }\r\n  \r\n  li {\r\n    margin: 5px !important;\r\n    box-shadow: 0 0 15px #000;\r\n  }\r\n  \r\n  .table__buttons {\r\n    position: absolute;\r\n    bottom: -50px;\r\n  }\r\n  \r\n  .dialog__activator {\r\n    position: absolute;\r\n    bottom: -30px;\r\n    left: 40px;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .card__title {\r\n    justify-content: center;\r\n  }\r\n  \r\n  .card__actions {\r\n    justify-content: center;\r\n  }\r\n  \r\n  .buttonEnter {\r\n    animation: buttonEnter .3s cubic-bezier(.09, .9, .48, 1.64);\r\n  }\r\n  \r\n  .buttonLeave {\r\n    animation: buttonLeave .3s cubic-bezier(.52, -0.44, .88, -0.45);\r\n  }\r\n  \r\n  @keyframes routerEnter {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  @keyframes routerLeave {\r\n    0% {\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n  \r\n  @keyframes buttonEnter {\r\n    0% {\r\n      transform: scale(0);\r\n    }\r\n    100% {\r\n      transform: scale(1);\r\n    }\r\n  }\r\n  \r\n  @keyframes buttonLeave {\r\n    0% {\r\n      transform: scale(1);\r\n    }\r\n    100% {\r\n      transform: scale(0);\r\n    }\r\n  }\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

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
    items: function items() {
      var _this = this;

      var data = [];
      this.employees.forEach(function (el) {
        data.push({
          id: el.id,
          first_name: el.first_name,
          last_name: el.last_name,
          position: _this.getPositionName(el.position_id).title,
          department: _this.getDepartmentName(el.position_id).title
        });
      });
      return data;
    },
    deleteMsg: function deleteMsg() {
      return this.selected.length == 1 ? this.$t('delete_item_confirm') : this.$t('delete_items_confirm');
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    employees: 'employees/employees',
    positions: 'positions/positions',
    departments: 'departments/departments'
  })),
  methods: _extends({
    getPositionName: function getPositionName(id) {
      return this.positions.find(function (el) {
        return el.id == id;
      }) || '';
    },
    getDepartmentName: function getDepartmentName(id) {
      var position = this.getPositionName(id);
      return this.departments.find(function (el) {
        return el.id == position.department_id;
      }) || '';
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
    loadItems: 'employees/load',
    deleteItem: 'employees/remove'
  })),
  created: function created() {
    if (this.searchProp) this.search = this.searchProp;
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
                      _c("td", [_vm._v(_vm._s(props.item.position))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(props.item.department))]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZT9jMzk4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlPzY1NDciLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlP2FkMjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0Esa0VBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLGtEQUFtRCxvQ0FBb0MsR0FBRyx1QkFBdUIsMkJBQTJC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O0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzEwLjMwZDM2YjkzNGViYmM1MGUzZmNiLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTBhZGViOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTBhZGViOVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTGlzdC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTM1MGFkZWI5XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZW1wbG95ZWVzXFxcXExpc3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM1MGFkZWI5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzUwYWRlYjlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTBhZGViOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIzZjY5ZDRlZlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTBhZGViOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTM1MGFkZWI5XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnRuW2RhdGEtdi0zNTBhZGViOV0ge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcXG59XFxubGlbZGF0YS12LTM1MGFkZWI5XSB7XFxuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwO1xcbn1cXG4udGFibGVfX2J1dHRvbnNbZGF0YS12LTM1MGFkZWI5XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC01MHB4O1xcbn1cXG4uZGlhbG9nX19hY3RpdmF0b3JbZGF0YS12LTM1MGFkZWI5XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0zMHB4O1xcbiAgbGVmdDogNDBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5jYXJkX190aXRsZVtkYXRhLXYtMzUwYWRlYjldIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2FyZF9fYWN0aW9uc1tkYXRhLXYtMzUwYWRlYjldIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYnV0dG9uRW50ZXJbZGF0YS12LTM1MGFkZWI5XSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYnV0dG9uRW50ZXItZGF0YS12LTM1MGFkZWI5IC4zcyBjdWJpYy1iZXppZXIoLjA5LCAuOSwgLjQ4LCAxLjY0KTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBidXR0b25FbnRlci1kYXRhLXYtMzUwYWRlYjkgLjNzIGN1YmljLWJlemllciguMDksIC45LCAuNDgsIDEuNjQpO1xcbn1cXG4uYnV0dG9uTGVhdmVbZGF0YS12LTM1MGFkZWI5XSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYnV0dG9uTGVhdmUtZGF0YS12LTM1MGFkZWI5IC4zcyBjdWJpYy1iZXppZXIoLjUyLCAtMC40NCwgLjg4LCAtMC40NSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUtZGF0YS12LTM1MGFkZWI5IC4zcyBjdWJpYy1iZXppZXIoLjUyLCAtMC40NCwgLjg4LCAtMC40NSk7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3V0ZXJFbnRlci1kYXRhLXYtMzUwYWRlYjkge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdXRlckVudGVyLWRhdGEtdi0zNTBhZGViOSB7XFxuMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3V0ZXJMZWF2ZS1kYXRhLXYtMzUwYWRlYjkge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdXRlckxlYXZlLWRhdGEtdi0zNTBhZGViOSB7XFxuMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBidXR0b25FbnRlci1kYXRhLXYtMzUwYWRlYjkge1xcbjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgYnV0dG9uRW50ZXItZGF0YS12LTM1MGFkZWI5IHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnV0dG9uTGVhdmUtZGF0YS12LTM1MGFkZWI5IHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlLWRhdGEtdi0zNTBhZGViOSB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9jcm0vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXFNQTtFQUNBLGdDQUFBO0NBQ0E7QUFFQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtDQUNBO0FBRUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7Q0FDQTtBQUVBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7Q0FDQTtBQUVBO0VBQ0EseUJBQUE7TUFBQSxzQkFBQTtVQUFBLHdCQUFBO0NBQ0E7QUFFQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSx3QkFBQTtDQUNBO0FBRUE7RUFDQSxvRkFBQTtVQUFBLDRFQUFBO0NBQ0E7QUFFQTtFQUNBLHdGQUFBO1VBQUEsZ0ZBQUE7Q0FDQTtBQUVBO0FBQ0E7SUFDQSxXQUFBO0NBQ0E7QUFDQTtJQUNBLFdBQUE7Q0FDQTtDQUNBO0FBUEE7QUFDQTtJQUNBLFdBQUE7Q0FDQTtBQUNBO0lBQ0EsV0FBQTtDQUNBO0NBQ0E7QUFFQTtBQUNBO0lBQ0EsV0FBQTtDQUNBO0FBQ0E7SUFDQSxXQUFBO0NBQ0E7Q0FDQTtBQVBBO0FBQ0E7SUFDQSxXQUFBO0NBQ0E7QUFDQTtJQUNBLFdBQUE7Q0FDQTtDQUNBO0FBRUE7QUFDQTtJQUNBLDRCQUFBO1lBQUEsb0JBQUE7Q0FDQTtBQUNBO0lBQ0EsNEJBQUE7WUFBQSxvQkFBQTtDQUNBO0NBQ0E7QUFQQTtBQUNBO0lBQ0EsNEJBQUE7WUFBQSxvQkFBQTtDQUNBO0FBQ0E7SUFDQSw0QkFBQTtZQUFBLG9CQUFBO0NBQ0E7Q0FDQTtBQUVBO0FBQ0E7SUFDQSw0QkFBQTtZQUFBLG9CQUFBO0NBQ0E7QUFDQTtJQUNBLDRCQUFBO1lBQUEsb0JBQUE7Q0FDQTtDQUNBO0FBUEE7QUFDQTtJQUNBLDRCQUFBO1lBQUEsb0JBQUE7Q0FDQTtBQUNBO0lBQ0EsNEJBQUE7WUFBQSxvQkFBQTtDQUNBO0NBQ0FcIixcImZpbGVcIjpcIkxpc3QudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXY+XFxyXFxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVxcXCJkZWxldGVXaW5kb3dcXFwiIG1heC13aWR0aD1cXFwiNTAwcHhcXFwiPlxcclxcbiAgICAgIDx2LWNhcmQ+XFxyXFxuICAgICAgICA8di1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGxpbmVcXFwiPnt7ICR0KCdhdHRlbnRpb24nKSB9fTwvc3Bhbj5cXHJcXG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgPHYtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgICA8di1mbGV4IHhzMTI+e3sgZGVsZXRlTXNnIH19PC92LWZsZXg+XFxyXFxuICAgICAgICA8L3YtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxcclxcbiAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cXFwiaW5mb1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiZGVsZXRlQ29uZmlybVxcXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxcclxcbiAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cXFwiZXJyb3JcXFwiIEBjbGljay5uYXRpdmU9XFxcImRlbGV0ZUNhbmNlbFxcXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgPC92LWNhcmQ+XFxyXFxuICAgIDwvdi1kaWFsb2c+XFxyXFxuICAgIDx2LWNhcmQ+XFxyXFxuICAgICAgPHYtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgIDxoMj57eyAkdCgnZW1wbG95ZWVzJykgfX08L2gyPlxcclxcbiAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxyXFxuICAgICAgICA8di10ZXh0LWZpZWxkXFxyXFxuICAgICAgICAgIGFwcGVuZC1pY29uPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICAgIDpsYWJlbD1cXFwiJHQoJ3NlYXJjaF9pbnB1dCcpXFxcIlxcclxcbiAgICAgICAgICBzaW5nbGUtbGluZVxcclxcbiAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICA+PC92LXRleHQtZmllbGQ+XFxyXFxuICAgICAgPC92LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgPHYtZGF0YS10YWJsZVxcclxcbiAgICAgICAgOmhlYWRlcnM9XFxcImhlYWRlcnNcXFwiXFxyXFxuICAgICAgICA6aXRlbXM9XFxcIml0ZW1zXFxcIlxcclxcbiAgICAgICAgOnNlYXJjaD1cXFwic2VhcmNoXFxcIlxcclxcbiAgICAgICAgdi1tb2RlbD1cXFwic2VsZWN0ZWRcXFwiXFxyXFxuICAgICAgICBzZWxlY3QtYWxsXFxyXFxuICAgICAgICBpdGVtLWtleT1cXFwiaWRcXFwiXFxyXFxuICAgICAgICA6bm8tcmVzdWx0cy10ZXh0PVxcXCIkdCgnbm9fbWF0Y2hfZm91bmQnKVxcXCJcXHJcXG4gICAgICAgIDpyb3dzLXBlci1wYWdlLXRleHQ9XFxcIiR0KCdzdHJpbmdzJylcXFwiXFxyXFxuICAgICAgICBjbGFzcz1cXFwiZWxldmF0aW9uLTFcXFwiXFxyXFxuICAgICAgPlxcclxcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIml0ZW1zXFxcIiBzbG90LXNjb3BlPVxcXCJwcm9wc1xcXCI+XFxyXFxuICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICA8di1jaGVja2JveFxcclxcbiAgICAgICAgICAgICAgcHJpbWFyeVxcclxcbiAgICAgICAgICAgICAgaGlkZS1kZXRhaWxzXFxyXFxuICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJwcm9wcy5zZWxlY3RlZFxcXCJcXHJcXG4gICAgICAgICAgICA+PC92LWNoZWNrYm94PlxcclxcbiAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICA8IS0tPHRkPi0tPlxcclxcbiAgICAgICAgICA8IS0tPHYtbGlzdC10aWxlLWF2YXRhcj4tLT5cXHJcXG4gICAgICAgICAgPCEtLTxpbWcgOnNyYz1cXFwicHJvcHMuaXRlbS5hdmF0YXJcXFwiPi0tPlxcclxcbiAgICAgICAgICA8IS0tPC92LWxpc3QtdGlsZS1hdmF0YXI+LS0+XFxyXFxuICAgICAgICAgIDwhLS08L3RkPi0tPlxcclxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5maXJzdF9uYW1lIH19PC90ZD5cXHJcXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0ubGFzdF9uYW1lIH19PC90ZD5cXHJcXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0ucG9zaXRpb24gfX08L3RkPlxcclxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5kZXBhcnRtZW50IH19PC90ZD5cXHJcXG4gICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIHJvdW5kIDp0bz1cXFwie25hbWU6ICdlbXBsb3llZScsIHBhcmFtczoge2lkOiBwcm9wcy5pdGVtLmlkfX1cXFwiPnt7ICR0KCdkZXRhaWxzJykgfX08L3YtYnRuPlxcclxcbiAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJuby1kYXRhXFxcIj5cXHJcXG4gICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVxcXCJ0cnVlXFxcIiBjb2xvcj1cXFwicmVkXFxcIiBpY29uPVxcXCJ3YXJuaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICDQndC10YIg0LTQsNC90L3Ri9GFIDooXFxyXFxuICAgICAgICAgIDwvdi1hbGVydD5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgPC92LWRhdGEtdGFibGU+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGVfX2J1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgPHYtYnRuIGZhYiBkYXJrIGxhcmdlIGNvbG9yPVxcXCJjeWFuXFxcIiA6dG89XFxcInsgbmFtZTogJ2VtcGxveWVlQ3JlYXRlJyB9XFxcIj5cXHJcXG4gICAgICAgICAgPHYtaWNvbiBkYXJrPmFkZDwvdi1pY29uPlxcclxcbiAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgIDx0cmFuc2l0aW9uIGVudGVyLWFjdGl2ZS1jbGFzcz1cXFwiYnV0dG9uRW50ZXJcXFwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cXFwiYnV0dG9uTGVhdmVcXFwiIG1vZGU9XFxcIm91dC1pblxcXCI+XFxyXFxuICAgICAgICAgIDx2LWJ0biB2LXNob3c9XFxcInNlbGVjdGVkLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJkZWxldGUtYnRuXFxcIiBmYWIgbGFyZ2UgZGFyayBAY2xpY2s9XFxcImRlbGV0ZURpYWxvZyhzZWxlY3RlZClcXFwiPlxcclxcbiAgICAgICAgICAgIDx2LWljb24+ZGVsZXRlPC92LWljb24+XFxyXFxuICAgICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICA8L3RyYW5zaXRpb24+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPHYtc25hY2tiYXIgOnRpbWVvdXQ9XFxcInNuYWNrYmFyVGltZW91dFxcXCIgdG9wIHYtbW9kZWw9XFxcInNuYWNrYmFyU2hvd1xcXCIgbXVsdGktbGluZSBjb2xvcj1cXFwiaW5mb1xcXCI+XFxyXFxuICAgICAgICB7eyAkdCgnZGVsZXRlX2RvbmUnKSB9fVxcclxcbiAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XFxcInBpbmtcXFwiIEBjbGljay5uYXRpdmU9XFxcInNuYWNrYmFyU2hvdyA9IGZhbHNlXFxcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XFxyXFxuICAgICAgPC92LXNuYWNrYmFyPlxcclxcbiAgICA8L3YtY2FyZD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gIGltcG9ydCB7XFxyXFxuICAgIG1hcEFjdGlvbnMsXFxyXFxuICAgIG1hcEdldHRlcnNcXHJcXG4gIH0gZnJvbSAndnVleCc7XFxyXFxuXFxyXFxuICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIG1pZGRsZXdhcmU6IFsnYXV0aCcsICdvcmdhbmlzYXRpb24nXSxcXHJcXG4gICAgcHJvcHM6IHtcXHJcXG4gICAgICBzZWFyY2hQcm9wOiB7XFxyXFxuICAgICAgICB0eXBlOiBTdHJpbmcsXFxyXFxuICAgICAgICBkZWZhdWx0OiAnJ1xcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgZGF0YTogKCkgPT4gKHtcXHJcXG4gICAgICBzbmFja2JhclNob3c6IGZhbHNlLFxcclxcbiAgICAgIHNuYWNrYmFyVGltZW91dDogMTAwMDAsXFxyXFxuICAgICAgLy8g0J/QvtC40YHQuiAvINCS0YvQsdC+0YDQutCwXFxyXFxuICAgICAgc2VhcmNoOiAnJyxcXHJcXG4gICAgICBzZWxlY3RlZDogW10sXFxyXFxuICAgICAgZGlhbG9nOiBmYWxzZSxcXHJcXG4gICAgICAvLyDQo9C00LDQu9C10L3QuNC1XFxyXFxuICAgICAgZGVsZXRlV2luZG93OiBmYWxzZSxcXHJcXG4gICAgICBkZWxldGVDYXRlZ29yeTogbnVsbCxcXHJcXG4gICAgICBkZWxNb2RlOiAnc2luZ2xlJyxcXHJcXG4gICAgICAvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcXHJcXG4gICAgICBoZWFkZXJzOiBbXFxyXFxuICAgICAgICB7XFxyXFxuICAgICAgICAgIHRleHQ6ICfQmNC80Y8nLFxcclxcbiAgICAgICAgICB2YWx1ZTogJ2ZpcnN0X25hbWUnXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAge1xcclxcbiAgICAgICAgICB0ZXh0OiAn0KTQsNC80LjQu9C40Y8nLFxcclxcbiAgICAgICAgICB2YWx1ZTogJ2xhc3RfbmFtZSdcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB7XFxyXFxuICAgICAgICAgIHRleHQ6ICfQlNC+0LvQttC90L7RgdGC0YwnLFxcclxcbiAgICAgICAgICB2YWx1ZTogJ3Bvc2l0aW9uJ1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHtcXHJcXG4gICAgICAgICAgdGV4dDogJ9Cf0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1JyxcXHJcXG4gICAgICAgICAgdmFsdWU6ICdkZXBhcnRtZW50J1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHtcXHJcXG4gICAgICAgICAgdGV4dDogJycsXFxyXFxuICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIF1cXHJcXG4gICAgfSksXFxyXFxuICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgaXRlbXMoKSB7XFxyXFxuICAgICAgICBjb25zdCBkYXRhID0gW107XFxyXFxuICAgICAgICB0aGlzLmVtcGxveWVlcy5mb3JFYWNoKGVsID0+IHtcXHJcXG4gICAgICAgICAgZGF0YS5wdXNoKHtcXHJcXG4gICAgICAgICAgICBpZDogZWwuaWQsXFxyXFxuICAgICAgICAgICAgZmlyc3RfbmFtZTogZWwuZmlyc3RfbmFtZSxcXHJcXG4gICAgICAgICAgICBsYXN0X25hbWU6IGVsLmxhc3RfbmFtZSxcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5nZXRQb3NpdGlvbk5hbWUoZWwucG9zaXRpb25faWQpLnRpdGxlLFxcclxcbiAgICAgICAgICAgIGRlcGFydG1lbnQ6IHRoaXMuZ2V0RGVwYXJ0bWVudE5hbWUoZWwucG9zaXRpb25faWQpLnRpdGxlXFxyXFxuICAgICAgICAgIH0pXFxyXFxuICAgICAgICB9KVxcclxcbiAgICAgICAgcmV0dXJuIGRhdGE7XFxyXFxuICAgICAgfSxcXHJcXG4gICAgICBkZWxldGVNc2coKSB7XFxyXFxuICAgICAgICByZXR1cm4gKHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09IDEpID8gdGhpcy4kdCgnZGVsZXRlX2l0ZW1fY29uZmlybScpIDpcXHJcXG4gICAgICAgICAgdGhpcy4kdCgnZGVsZXRlX2l0ZW1zX2NvbmZpcm0nKTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIC4uLm1hcEdldHRlcnMoe1xcclxcbiAgICAgICAgZW1wbG95ZWVzOiAnZW1wbG95ZWVzL2VtcGxveWVlcycsXFxyXFxuICAgICAgICBwb3NpdGlvbnM6ICdwb3NpdGlvbnMvcG9zaXRpb25zJyxcXHJcXG4gICAgICAgIGRlcGFydG1lbnRzOiAnZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMnXFxyXFxuICAgICAgfSlcXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczoge1xcclxcbiAgICAgIGdldFBvc2l0aW9uTmFtZShpZCkge1xcclxcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25zLmZpbmQoZWwgPT4gZWwuaWQgPT0gaWQpIHx8ICcnO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZ2V0RGVwYXJ0bWVudE5hbWUoaWQpIHtcXHJcXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbk5hbWUoaWQpXFxyXFxuICAgICAgICByZXR1cm4gdGhpcy5kZXBhcnRtZW50cy5maW5kKGVsID0+IGVsLmlkID09IHBvc2l0aW9uLmRlcGFydG1lbnRfaWQpIHx8ICcnO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVsZXRlRGlhbG9nKGl0ZW0pIHtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gdHJ1ZTtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBpdGVtO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVsZXRlQ29uZmlybSgpIHtcXHJcXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuZm9yRWFjaChlbCA9PiB0aGlzLmRlbGV0ZUl0ZW0oZWwuaWQpKTtcXHJcXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XFxyXFxuICAgICAgICB0aGlzLmVkaXRlZElEID0gbnVsbDtcXHJcXG4gICAgICAgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGRlbGV0ZUNhbmNlbCgpIHtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBudWxsO1xcclxcbiAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGNsb3NlKCkge1xcclxcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcXHJcXG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xcclxcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgLi4ubWFwQWN0aW9ucyh7XFxyXFxuICAgICAgICBsb2FkSXRlbXM6ICdlbXBsb3llZXMvbG9hZCcsXFxyXFxuICAgICAgICBkZWxldGVJdGVtOiAnZW1wbG95ZWVzL3JlbW92ZSdcXHJcXG4gICAgICB9KVxcclxcbiAgICB9LFxcclxcbiAgICBjcmVhdGVkKCkge1xcclxcbiAgICAgIGlmICh0aGlzLnNlYXJjaFByb3ApIHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2hQcm9wXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgLmJ0biB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGxpIHtcXHJcXG4gICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRhYmxlX19idXR0b25zIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IC01MHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGlhbG9nX19hY3RpdmF0b3Ige1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogLTMwcHg7XFxyXFxuICAgIGxlZnQ6IDQwcHg7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJkX190aXRsZSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2FyZF9fYWN0aW9ucyB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnV0dG9uRW50ZXIge1xcclxcbiAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LCAuOSwgLjQ4LCAxLjY0KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ1dHRvbkxlYXZlIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZSAuM3MgY3ViaWMtYmV6aWVyKC41MiwgLTAuNDQsIC44OCwgLTAuNDUpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIHJvdXRlckVudGVyIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIHJvdXRlckxlYXZlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTM1MGFkZWI5XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkZWxldGVXaW5kb3dcIiBtYXgtd2lkdGg9XCI1MDBweFwiPlxyXG4gICAgICA8di1jYXJkPlxyXG4gICAgICAgIDx2LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+e3sgJHQoJ2F0dGVudGlvbicpIH19PC9zcGFuPlxyXG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgIDx2LWZsZXggeHMxMj57eyBkZWxldGVNc2cgfX08L3YtZmxleD5cclxuICAgICAgICA8L3YtY2FyZC10ZXh0PlxyXG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIEBjbGljay5uYXRpdmU9XCJkZWxldGVDb25maXJtXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG4gICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XCJlcnJvclwiIEBjbGljay5uYXRpdmU9XCJkZWxldGVDYW5jZWxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxyXG4gICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwvdi1jYXJkPlxyXG4gICAgPC92LWRpYWxvZz5cclxuICAgIDx2LWNhcmQ+XHJcbiAgICAgIDx2LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPGgyPnt7ICR0KCdlbXBsb3llZXMnKSB9fTwvaDI+XHJcbiAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XHJcbiAgICAgICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICAgICAgYXBwZW5kLWljb249XCJzZWFyY2hcIlxyXG4gICAgICAgICAgOmxhYmVsPVwiJHQoJ3NlYXJjaF9pbnB1dCcpXCJcclxuICAgICAgICAgIHNpbmdsZS1saW5lXHJcbiAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcclxuICAgICAgICA+PC92LXRleHQtZmllbGQ+XHJcbiAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICA8di1kYXRhLXRhYmxlXHJcbiAgICAgICAgOmhlYWRlcnM9XCJoZWFkZXJzXCJcclxuICAgICAgICA6aXRlbXM9XCJpdGVtc1wiXHJcbiAgICAgICAgOnNlYXJjaD1cInNlYXJjaFwiXHJcbiAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkXCJcclxuICAgICAgICBzZWxlY3QtYWxsXHJcbiAgICAgICAgaXRlbS1rZXk9XCJpZFwiXHJcbiAgICAgICAgOm5vLXJlc3VsdHMtdGV4dD1cIiR0KCdub19tYXRjaF9mb3VuZCcpXCJcclxuICAgICAgICA6cm93cy1wZXItcGFnZS10ZXh0PVwiJHQoJ3N0cmluZ3MnKVwiXHJcbiAgICAgICAgY2xhc3M9XCJlbGV2YXRpb24tMVwiXHJcbiAgICAgID5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1zXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XHJcbiAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIDx2LWNoZWNrYm94XHJcbiAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgIGhpZGUtZGV0YWlsc1xyXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9wcy5zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgID48L3YtY2hlY2tib3g+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPCEtLTx0ZD4tLT5cclxuICAgICAgICAgIDwhLS08di1saXN0LXRpbGUtYXZhdGFyPi0tPlxyXG4gICAgICAgICAgPCEtLTxpbWcgOnNyYz1cInByb3BzLml0ZW0uYXZhdGFyXCI+LS0+XHJcbiAgICAgICAgICA8IS0tPC92LWxpc3QtdGlsZS1hdmF0YXI+LS0+XHJcbiAgICAgICAgICA8IS0tPC90ZD4tLT5cclxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmZpcnN0X25hbWUgfX08L3RkPlxyXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0ubGFzdF9uYW1lIH19PC90ZD5cclxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLnBvc2l0aW9uIH19PC90ZD5cclxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmRlcGFydG1lbnQgfX08L3RkPlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8di1idG4gb3V0bGluZSByb3VuZCA6dG89XCJ7bmFtZTogJ2VtcGxveWVlJywgcGFyYW1zOiB7aWQ6IHByb3BzLml0ZW0uaWR9fVwiPnt7ICR0KCdkZXRhaWxzJykgfX08L3YtYnRuPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibm8tZGF0YVwiPlxyXG4gICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVwidHJ1ZVwiIGNvbG9yPVwicmVkXCIgaWNvbj1cIndhcm5pbmdcIj5cclxuICAgICAgICAgICAg0J3QtdGCINC00LDQvdC90YvRhSA6KFxyXG4gICAgICAgICAgPC92LWFsZXJ0PlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvdi1kYXRhLXRhYmxlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2J1dHRvbnNcIj5cclxuICAgICAgICA8di1idG4gZmFiIGRhcmsgbGFyZ2UgY29sb3I9XCJjeWFuXCIgOnRvPVwieyBuYW1lOiAnZW1wbG95ZWVDcmVhdGUnIH1cIj5cclxuICAgICAgICAgIDx2LWljb24gZGFyaz5hZGQ8L3YtaWNvbj5cclxuICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgIDx0cmFuc2l0aW9uIGVudGVyLWFjdGl2ZS1jbGFzcz1cImJ1dHRvbkVudGVyXCIgbGVhdmUtYWN0aXZlLWNsYXNzPVwiYnV0dG9uTGVhdmVcIiBtb2RlPVwib3V0LWluXCI+XHJcbiAgICAgICAgICA8di1idG4gdi1zaG93PVwic2VsZWN0ZWQubGVuZ3RoID4gMFwiIGNsYXNzPVwiZGVsZXRlLWJ0blwiIGZhYiBsYXJnZSBkYXJrIEBjbGljaz1cImRlbGV0ZURpYWxvZyhzZWxlY3RlZClcIj5cclxuICAgICAgICAgICAgPHYtaWNvbj5kZWxldGU8L3YtaWNvbj5cclxuICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHYtc25hY2tiYXIgOnRpbWVvdXQ9XCJzbmFja2JhclRpbWVvdXRcIiB0b3Agdi1tb2RlbD1cInNuYWNrYmFyU2hvd1wiIG11bHRpLWxpbmUgY29sb3I9XCJpbmZvXCI+XHJcbiAgICAgICAge3sgJHQoJ2RlbGV0ZV9kb25lJykgfX1cclxuICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cInBpbmtcIiBAY2xpY2submF0aXZlPVwic25hY2tiYXJTaG93ID0gZmFsc2VcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XHJcbiAgICAgIDwvdi1zbmFja2Jhcj5cclxuICAgIDwvdi1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge1xyXG4gICAgbWFwQWN0aW9ucyxcclxuICAgIG1hcEdldHRlcnNcclxuICB9IGZyb20gJ3Z1ZXgnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBtaWRkbGV3YXJlOiBbJ2F1dGgnLCAnb3JnYW5pc2F0aW9uJ10sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzZWFyY2hQcm9wOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgICBzbmFja2JhclNob3c6IGZhbHNlLFxyXG4gICAgICBzbmFja2JhclRpbWVvdXQ6IDEwMDAwLFxyXG4gICAgICAvLyDQn9C+0LjRgdC6IC8g0JLRi9Cx0L7RgNC60LBcclxuICAgICAgc2VhcmNoOiAnJyxcclxuICAgICAgc2VsZWN0ZWQ6IFtdLFxyXG4gICAgICBkaWFsb2c6IGZhbHNlLFxyXG4gICAgICAvLyDQo9C00LDQu9C10L3QuNC1XHJcbiAgICAgIGRlbGV0ZVdpbmRvdzogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZUNhdGVnb3J5OiBudWxsLFxyXG4gICAgICBkZWxNb2RlOiAnc2luZ2xlJyxcclxuICAgICAgLy8g0JfQsNCz0L7Qu9C+0LLQutC4INGC0LDQsdC70LjRhtGLXHJcbiAgICAgIGhlYWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0JjQvNGPJyxcclxuICAgICAgICAgIHZhbHVlOiAnZmlyc3RfbmFtZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICfQpNCw0LzQuNC70LjRjycsXHJcbiAgICAgICAgICB2YWx1ZTogJ2xhc3RfbmFtZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICfQlNC+0LvQttC90L7RgdGC0YwnLFxyXG4gICAgICAgICAgdmFsdWU6ICdwb3NpdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICfQn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtScsXHJcbiAgICAgICAgICB2YWx1ZTogJ2RlcGFydG1lbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSksXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICBpdGVtcygpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5lbXBsb3llZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICBkYXRhLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogZWwuaWQsXHJcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IGVsLmZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZTogZWwubGFzdF9uYW1lLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5nZXRQb3NpdGlvbk5hbWUoZWwucG9zaXRpb25faWQpLnRpdGxlLFxyXG4gICAgICAgICAgICBkZXBhcnRtZW50OiB0aGlzLmdldERlcGFydG1lbnROYW1lKGVsLnBvc2l0aW9uX2lkKS50aXRsZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9LFxyXG4gICAgICBkZWxldGVNc2coKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnNlbGVjdGVkLmxlbmd0aCA9PSAxKSA/IHRoaXMuJHQoJ2RlbGV0ZV9pdGVtX2NvbmZpcm0nKSA6XHJcbiAgICAgICAgICB0aGlzLiR0KCdkZWxldGVfaXRlbXNfY29uZmlybScpO1xyXG4gICAgICB9LFxyXG4gICAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgICBlbXBsb3llZXM6ICdlbXBsb3llZXMvZW1wbG95ZWVzJyxcclxuICAgICAgICBwb3NpdGlvbnM6ICdwb3NpdGlvbnMvcG9zaXRpb25zJyxcclxuICAgICAgICBkZXBhcnRtZW50czogJ2RlcGFydG1lbnRzL2RlcGFydG1lbnRzJ1xyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZ2V0UG9zaXRpb25OYW1lKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25zLmZpbmQoZWwgPT4gZWwuaWQgPT0gaWQpIHx8ICcnO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXREZXBhcnRtZW50TmFtZShpZCkge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbk5hbWUoaWQpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwYXJ0bWVudHMuZmluZChlbCA9PiBlbC5pZCA9PSBwb3NpdGlvbi5kZXBhcnRtZW50X2lkKSB8fCAnJztcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlRGlhbG9nKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kZWxldGVDYXRlZ29yeSA9IGl0ZW07XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZUNvbmZpcm0oKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5mb3JFYWNoKGVsID0+IHRoaXMuZGVsZXRlSXRlbShlbC5pZCkpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZWRpdGVkSUQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlQ2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSk7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xyXG4gICAgICB9LFxyXG4gICAgICAuLi5tYXBBY3Rpb25zKHtcclxuICAgICAgICBsb2FkSXRlbXM6ICdlbXBsb3llZXMvbG9hZCcsXHJcbiAgICAgICAgZGVsZXRlSXRlbTogJ2VtcGxveWVlcy9yZW1vdmUnXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgaWYgKHRoaXMuc2VhcmNoUHJvcCkgdGhpcy5zZWFyY2ggPSB0aGlzLnNlYXJjaFByb3BcclxuICAgIH1cclxuICB9XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLmJ0biB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBsaSB7XHJcbiAgICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlX19idXR0b25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaWFsb2dfX2FjdGl2YXRvciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0zMHB4O1xyXG4gICAgbGVmdDogNDBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkX190aXRsZSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmRfX2FjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b25FbnRlciB7XHJcbiAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LCAuOSwgLjQ4LCAxLjY0KTtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbkxlYXZlIHtcclxuICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUgLjNzIGN1YmljLWJlemllciguNTIsIC0wLjQ0LCAuODgsIC0wLjQ1KTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyByb3V0ZXJFbnRlciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBidXR0b25FbnRlciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBidXR0b25MZWF2ZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNTAwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRlbGV0ZVdpbmRvdyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVdpbmRvdyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVsZXRlV2luZG93XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiYXR0ZW50aW9uXCIpKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1mbGV4XCIsIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGVsZXRlTXNnKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNvbmZpcm0oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImVycm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlQ2FuY2VsKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJlbXBsb3llZXNcIikpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJzZWFyY2hfaW5wdXRcIiksXG4gICAgICAgICAgICAgICAgICBcInNpbmdsZS1saW5lXCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1kYXRhLXRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0xXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3QtYWxsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtLWtleVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgXCJuby1yZXN1bHRzLXRleHRcIjogX3ZtLiR0KFwibm9fbWF0Y2hfZm91bmRcIiksXG4gICAgICAgICAgICAgICAgXCJyb3dzLXBlci1wYWdlLXRleHRcIjogX3ZtLiR0KFwic3RyaW5nc1wiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbXNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHByaW1hcnk6IFwiXCIsIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChwcm9wcywgXCJzZWxlY3RlZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9wcy5zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmZpcnN0X25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmxhc3RfbmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0ucG9zaXRpb24pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmRlcGFydG1lbnQpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtcGxveWVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBwcm9wcy5pdGVtLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiZGV0YWlsc1wiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWQgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgeyBzbG90OiBcIm5vLWRhdGFcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogdHJ1ZSwgY29sb3I6IFwicmVkXCIsIGljb246IFwid2FybmluZ1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICDQndC10YIg0LTQsNC90L3Ri9GFIDooXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGVfX2J1dHRvbnNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZmFiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiY3lhblwiLFxuICAgICAgICAgICAgICAgICAgICB0bzogeyBuYW1lOiBcImVtcGxveWVlQ3JlYXRlXCIgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgZGFyazogXCJcIiB9IH0sIFtfdm0uX3YoXCJhZGRcIildKV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcImJ1dHRvbkVudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IFwiYnV0dG9uTGVhdmVcIixcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJvdXQtaW5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZC5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlbGV0ZS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmYWI6IFwiXCIsIGxhcmdlOiBcIlwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZURpYWxvZyhfdm0uc2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImRlbGV0ZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1zbmFja2JhclwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IF92bS5zbmFja2JhclRpbWVvdXQsXG4gICAgICAgICAgICAgICAgdG9wOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwibXVsdGktbGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImluZm9cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc25hY2tiYXJTaG93LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zbmFja2JhclNob3cgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic25hY2tiYXJTaG93XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KFwiZGVsZXRlX2RvbmVcIikpICsgXCJcXG4gICAgICBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJwaW5rXCIgfSxcbiAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc25hY2tiYXJTaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0zNTBhZGViOVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzUwYWRlYjlcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCJdLCJzb3VyY2VSb290IjoiIn0=