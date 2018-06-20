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
exports.push([module.i, "\n.btn[data-v-350adeb9] {\n  text-transform: none !important;\n}\nli[data-v-350adeb9] {\n  margin: 5px !important;\n  -webkit-box-shadow: 0 0 15px #000;\n          box-shadow: 0 0 15px #000;\n}\n.table__buttons[data-v-350adeb9] {\n  position: absolute;\n  bottom: -50px;\n}\n.dialog__activator[data-v-350adeb9] {\n  position: absolute;\n  bottom: -30px;\n  left: 40px;\n  z-index: 1;\n}\n.card__title[data-v-350adeb9] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.card__actions[data-v-350adeb9] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.buttonEnter[data-v-350adeb9] {\n  -webkit-animation: buttonEnter-data-v-350adeb9 .3s cubic-bezier(.09, .9, .48, 1.64);\n          animation: buttonEnter-data-v-350adeb9 .3s cubic-bezier(.09, .9, .48, 1.64);\n}\n.buttonLeave[data-v-350adeb9] {\n  -webkit-animation: buttonLeave-data-v-350adeb9 .3s cubic-bezier(.52, -0.44, .88, -0.45);\n          animation: buttonLeave-data-v-350adeb9 .3s cubic-bezier(.52, -0.44, .88, -0.45);\n}\n@-webkit-keyframes routerEnter-data-v-350adeb9 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes routerEnter-data-v-350adeb9 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@-webkit-keyframes routerLeave-data-v-350adeb9 {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes routerLeave-data-v-350adeb9 {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@-webkit-keyframes buttonEnter-data-v-350adeb9 {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes buttonEnter-data-v-350adeb9 {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@-webkit-keyframes buttonLeave-data-v-350adeb9 {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n}\n@keyframes buttonLeave-data-v-350adeb9 {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/List.vue"],"names":[],"mappings":";AAsMA;EACA,gCAAA;CACA;AAEA;EACA,uBAAA;EACA,kCAAA;UAAA,0BAAA;CACA;AAEA;EACA,mBAAA;EACA,cAAA;CACA;AAEA;EACA,mBAAA;EACA,cAAA;EACA,WAAA;EACA,WAAA;CACA;AAEA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;CACA;AAEA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;CACA;AAEA;EACA,oFAAA;UAAA,4EAAA;CACA;AAEA;EACA,wFAAA;UAAA,gFAAA;CACA;AAEA;AACA;IACA,WAAA;CACA;AACA;IACA,WAAA;CACA;CACA;AAPA;AACA;IACA,WAAA;CACA;AACA;IACA,WAAA;CACA;CACA;AAEA;AACA;IACA,WAAA;CACA;AACA;IACA,WAAA;CACA;CACA;AAPA;AACA;IACA,WAAA;CACA;AACA;IACA,WAAA;CACA;CACA;AAEA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;CACA;AAPA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;CACA;AAEA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;CACA;AAPA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;AACA;IACA,4BAAA;YAAA,oBAAA;CACA;CACA","file":"List.vue","sourcesContent":["<template>\r\n  <div>\r\n    <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\r\n      <v-card>\r\n        <v-card-title>\r\n          <span class=\"headline\">{{ $t('attention') }}</span>\r\n        </v-card-title>\r\n        <v-card-text>\r\n          <v-flex xs12>{{deleteMsg}}</v-flex>\r\n        </v-card-text>\r\n        <v-card-actions>\r\n          <v-btn outline color=\"info\" @click.native=\"deleteConfirm\">{{ $t('ok') }}</v-btn>\r\n          <v-btn outline color=\"error\" @click.native=\"deleteCancel\">{{ $t('cancel') }}</v-btn>\r\n        </v-card-actions>\r\n      </v-card>\r\n    </v-dialog>\r\n    <v-card>\r\n      <v-card-title>\r\n        <h2>{{ $t('employees') }}</h2>\r\n        <v-spacer></v-spacer>\r\n        <v-text-field\r\n          append-icon=\"search\"\r\n          :label=\"$t('search_input')\"\r\n          single-line\r\n          v-model=\"search\"\r\n        ></v-text-field>\r\n      </v-card-title>\r\n      <v-data-table\r\n        :headers=\"headers\"\r\n        :items=\"items\"\r\n        :search=\"search\"\r\n        v-model=\"selected\"\r\n        select-all\r\n        item-key=\"id\"\r\n        :no-results-text=\"$t('no_match_found')\"\r\n        :rows-per-page-text=\"$t('strings')\"\r\n        class=\"elevation-1\"\r\n      >\r\n        <template slot=\"items\" slot-scope=\"props\">\r\n          <td>\r\n            <v-checkbox\r\n              primary\r\n              hide-details\r\n              v-model=\"props.selected\"\r\n            ></v-checkbox>\r\n          </td>\r\n          <!--<td>-->\r\n          <!--<v-list-tile-avatar>-->\r\n          <!--<img :src=\"props.item.avatar\">-->\r\n          <!--</v-list-tile-avatar>-->\r\n          <!--</td>-->\r\n          <td>{{ props.item.first_name }}</td>\r\n          <td>{{ props.item.last_name }}</td>\r\n          <td>{{ props.item.position }}</td>\r\n          <td>{{ props.item.department }}</td>\r\n          <td>\r\n            <v-btn outline round :to=\"{name: 'employee', params: {id: props.item.id}}\">{{ $t('details') }}</v-btn>\r\n          </td>\r\n        </template>\r\n        <template slot=\"no-data\">\r\n          <v-alert :value=\"true\" color=\"red\" icon=\"warning\">\r\n            Нет данных :(\r\n          </v-alert>\r\n        </template>\r\n      </v-data-table>\r\n      <div class=\"table__buttons\">\r\n        <v-btn fab dark large color=\"cyan\" :to=\"{ name: 'employeeCreate' }\">\r\n          <v-icon dark>add</v-icon>\r\n        </v-btn>\r\n        <transition enter-active-class=\"buttonEnter\" leave-active-class=\"buttonLeave\" mode=\"out-in\">\r\n          <v-btn v-show=\"selected.length > 0\" class=\"delete-btn\" fab large dark @click=\"deleteDialog(selected)\">\r\n            <v-icon>delete</v-icon>\r\n          </v-btn>\r\n        </transition>\r\n      </div>\r\n      <v-snackbar :timeout=\"snackbarTimeout\" top v-model=\"snackbarShow\" multi-line color=\"info\">\r\n        {{ $t('delete_done') }}\r\n        <v-btn flat color=\"pink\" @click.native=\"snackbarShow = false\">{{ $t('ok') }}</v-btn>\r\n      </v-snackbar>\r\n    </v-card>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import {\r\n    mapActions,\r\n    mapGetters\r\n  } from 'vuex';\r\n\r\n  export default {\r\n    middleware: ['auth', 'organisation'],\r\n    props: {\r\n      searchProp: {\r\n        type: String,\r\n        default: ''\r\n      }\r\n    },\r\n    data: () => ({\r\n      snackbarShow: false,\r\n      snackbarTimeout: 10000,\r\n      // Поиск / Выборка\r\n      search: '',\r\n      selected: [],\r\n      dialog: false,\r\n      // Удаление\r\n      deleteWindow: false,\r\n      deleteCategory: null,\r\n      delMode: 'single',\r\n      // Заголовки таблицы\r\n      headers: [\r\n        {\r\n          text: 'Имя',\r\n          value: 'first_name'\r\n        },\r\n        {\r\n          text: 'Фамилия',\r\n          value: 'last_name'\r\n        },\r\n        {\r\n          text: 'Должность',\r\n          value: 'position'\r\n        },\r\n        {\r\n          text: 'Подразделение',\r\n          value: 'department'\r\n        },\r\n        {\r\n          text: '',\r\n          sortable: false\r\n        }\r\n      ]\r\n    }),\r\n    computed: {\r\n      items() {\r\n        const data = [];\r\n        this.employees.forEach(el => {\r\n          data.push({\r\n            id: el.id,\r\n            first_name: el.first_name,\r\n            last_name: el.last_name,\r\n            position: this.getPositionName(el.position_id).title,\r\n            department: this.getDepartmentName(el.position_id).title\r\n          })\r\n        })\r\n        return data;\r\n      },\r\n      deleteMsg() {\r\n        return (this.selected.length == 1) ? this.$t('delete_item_confirm') :\r\n          this.$t('delete_items_confirm');\r\n      },\r\n      ...mapGetters({\r\n        employees: 'employees/employees',\r\n        positions: 'positions/positions',\r\n        departments: 'departments/departments'\r\n      })\r\n    },\r\n    methods: {\r\n      getPositionName(id) {\r\n        return this.positions.find(el => el.id == id);\r\n      },\r\n      getDepartmentName(id) {\r\n        const position = this.getPositionName(id)\r\n        return this.departments.find(el => el.id == position.department_id)\r\n      },\r\n      deleteDialog(item) {\r\n        this.deleteWindow = true;\r\n        this.deleteCategory = item;\r\n      },\r\n      deleteConfirm() {\r\n        this.selected.forEach(el => this.deleteItem(el.id));\r\n        this.selected = [];\r\n        this.deleteWindow = false;\r\n        this.editedID = null;\r\n        this.snackbarShow = true;\r\n      },\r\n      deleteCancel() {\r\n        this.deleteCategory = null;\r\n        this.deleteWindow = false;\r\n      },\r\n      close() {\r\n        this.dialog = false;\r\n        this.editedItem = Object.assign({}, this.defaultItem);\r\n        this.editedIndex = -1;\r\n      },\r\n      ...mapActions({\r\n        loadItems: 'employees/load',\r\n        deleteItem: 'employees/remove'\r\n      })\r\n    },\r\n    created() {\r\n      console.log(this.$router.getMatchedComponents())\r\n      if (this.searchProp) this.search = this.searchProp\r\n    }\r\n  }\r\n\r\n</script>\r\n\r\n<style scoped>\r\n  .btn {\r\n    text-transform: none !important;\r\n  }\r\n  \r\n  li {\r\n    margin: 5px !important;\r\n    box-shadow: 0 0 15px #000;\r\n  }\r\n  \r\n  .table__buttons {\r\n    position: absolute;\r\n    bottom: -50px;\r\n  }\r\n  \r\n  .dialog__activator {\r\n    position: absolute;\r\n    bottom: -30px;\r\n    left: 40px;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .card__title {\r\n    justify-content: center;\r\n  }\r\n  \r\n  .card__actions {\r\n    justify-content: center;\r\n  }\r\n  \r\n  .buttonEnter {\r\n    animation: buttonEnter .3s cubic-bezier(.09, .9, .48, 1.64);\r\n  }\r\n  \r\n  .buttonLeave {\r\n    animation: buttonLeave .3s cubic-bezier(.52, -0.44, .88, -0.45);\r\n  }\r\n  \r\n  @keyframes routerEnter {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  @keyframes routerLeave {\r\n    0% {\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n  \r\n  @keyframes buttonEnter {\r\n    0% {\r\n      transform: scale(0);\r\n    }\r\n    100% {\r\n      transform: scale(1);\r\n    }\r\n  }\r\n  \r\n  @keyframes buttonLeave {\r\n    0% {\r\n      transform: scale(1);\r\n    }\r\n    100% {\r\n      transform: scale(0);\r\n    }\r\n  }\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

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
    console.log(this.$router.getMatchedComponents());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZT9jMzk4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlPzY1NDciLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlP2FkMjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0Esa0VBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLGtEQUFtRCxvQ0FBb0MsR0FBRyx1QkFBdUIsMkJBQTJC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QWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzEwLjMxYTQzYzUyNjI0MmY5Mjg1NTljLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTBhZGViOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTBhZGViOVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTGlzdC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTM1MGFkZWI5XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZW1wbG95ZWVzXFxcXExpc3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM1MGFkZWI5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzUwYWRlYjlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTBhZGViOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIzZjY5ZDRlZlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzUwYWRlYjlcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTBhZGViOVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTM1MGFkZWI5XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnRuW2RhdGEtdi0zNTBhZGViOV0ge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcXG59XFxubGlbZGF0YS12LTM1MGFkZWI5XSB7XFxuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwO1xcbn1cXG4udGFibGVfX2J1dHRvbnNbZGF0YS12LTM1MGFkZWI5XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC01MHB4O1xcbn1cXG4uZGlhbG9nX19hY3RpdmF0b3JbZGF0YS12LTM1MGFkZWI5XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0zMHB4O1xcbiAgbGVmdDogNDBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5jYXJkX190aXRsZVtkYXRhLXYtMzUwYWRlYjldIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2FyZF9fYWN0aW9uc1tkYXRhLXYtMzUwYWRlYjldIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYnV0dG9uRW50ZXJbZGF0YS12LTM1MGFkZWI5XSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYnV0dG9uRW50ZXItZGF0YS12LTM1MGFkZWI5IC4zcyBjdWJpYy1iZXppZXIoLjA5LCAuOSwgLjQ4LCAxLjY0KTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBidXR0b25FbnRlci1kYXRhLXYtMzUwYWRlYjkgLjNzIGN1YmljLWJlemllciguMDksIC45LCAuNDgsIDEuNjQpO1xcbn1cXG4uYnV0dG9uTGVhdmVbZGF0YS12LTM1MGFkZWI5XSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYnV0dG9uTGVhdmUtZGF0YS12LTM1MGFkZWI5IC4zcyBjdWJpYy1iZXppZXIoLjUyLCAtMC40NCwgLjg4LCAtMC40NSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUtZGF0YS12LTM1MGFkZWI5IC4zcyBjdWJpYy1iZXppZXIoLjUyLCAtMC40NCwgLjg4LCAtMC40NSk7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3V0ZXJFbnRlci1kYXRhLXYtMzUwYWRlYjkge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdXRlckVudGVyLWRhdGEtdi0zNTBhZGViOSB7XFxuMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3V0ZXJMZWF2ZS1kYXRhLXYtMzUwYWRlYjkge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdXRlckxlYXZlLWRhdGEtdi0zNTBhZGViOSB7XFxuMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBidXR0b25FbnRlci1kYXRhLXYtMzUwYWRlYjkge1xcbjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgYnV0dG9uRW50ZXItZGF0YS12LTM1MGFkZWI5IHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnV0dG9uTGVhdmUtZGF0YS12LTM1MGFkZWI5IHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlLWRhdGEtdi0zNTBhZGViOSB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9jcm0vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvTGlzdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXNNQTtFQUNBLGdDQUFBO0NBQ0E7QUFFQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtDQUNBO0FBRUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7Q0FDQTtBQUVBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7Q0FDQTtBQUVBO0VBQ0EseUJBQUE7TUFBQSxzQkFBQTtVQUFBLHdCQUFBO0NBQ0E7QUFFQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSx3QkFBQTtDQUNBO0FBRUE7RUFDQSxvRkFBQTtVQUFBLDRFQUFBO0NBQ0E7QUFFQTtFQUNBLHdGQUFBO1VBQUEsZ0ZBQUE7Q0FDQTtBQUVBO0FBQ0E7SUFDQSxXQUFBO0NBQ0E7QUFDQTtJQUNBLFdBQUE7Q0FDQTtDQUNBO0FBUEE7QUFDQTtJQUNBLFdBQUE7Q0FDQTtBQUNBO0lBQ0EsV0FBQTtDQUNBO0NBQ0E7QUFFQTtBQUNBO0lBQ0EsV0FBQTtDQUNBO0FBQ0E7SUFDQSxXQUFBO0NBQ0E7Q0FDQTtBQVBBO0FBQ0E7SUFDQSxXQUFBO0NBQ0E7QUFDQTtJQUNBLFdBQUE7Q0FDQTtDQUNBO0FBRUE7QUFDQTtJQUNBLDRCQUFBO1lBQUEsb0JBQUE7Q0FDQTtBQUNBO0lBQ0EsNEJBQUE7WUFBQSxvQkFBQTtDQUNBO0NBQ0E7QUFQQTtBQUNBO0lBQ0EsNEJBQUE7WUFBQSxvQkFBQTtDQUNBO0FBQ0E7SUFDQSw0QkFBQTtZQUFBLG9CQUFBO0NBQ0E7Q0FDQTtBQUVBO0FBQ0E7SUFDQSw0QkFBQTtZQUFBLG9CQUFBO0NBQ0E7QUFDQTtJQUNBLDRCQUFBO1lBQUEsb0JBQUE7Q0FDQTtDQUNBO0FBUEE7QUFDQTtJQUNBLDRCQUFBO1lBQUEsb0JBQUE7Q0FDQTtBQUNBO0lBQ0EsNEJBQUE7WUFBQSxvQkFBQTtDQUNBO0NBQ0FcIixcImZpbGVcIjpcIkxpc3QudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXY+XFxyXFxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVxcXCJkZWxldGVXaW5kb3dcXFwiIG1heC13aWR0aD1cXFwiNTAwcHhcXFwiPlxcclxcbiAgICAgIDx2LWNhcmQ+XFxyXFxuICAgICAgICA8di1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGxpbmVcXFwiPnt7ICR0KCdhdHRlbnRpb24nKSB9fTwvc3Bhbj5cXHJcXG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgPHYtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgICA8di1mbGV4IHhzMTI+e3tkZWxldGVNc2d9fTwvdi1mbGV4PlxcclxcbiAgICAgICAgPC92LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImluZm9cXFwiIEBjbGljay5uYXRpdmU9XFxcImRlbGV0ZUNvbmZpcm1cXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImVycm9yXFxcIiBAY2xpY2submF0aXZlPVxcXCJkZWxldGVDYW5jZWxcXFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxcclxcbiAgICAgIDwvdi1jYXJkPlxcclxcbiAgICA8L3YtZGlhbG9nPlxcclxcbiAgICA8di1jYXJkPlxcclxcbiAgICAgIDx2LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICA8aDI+e3sgJHQoJ2VtcGxveWVlcycpIH19PC9oMj5cXHJcXG4gICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcclxcbiAgICAgICAgPHYtdGV4dC1maWVsZFxcclxcbiAgICAgICAgICBhcHBlbmQtaWNvbj1cXFwic2VhcmNoXFxcIlxcclxcbiAgICAgICAgICA6bGFiZWw9XFxcIiR0KCdzZWFyY2hfaW5wdXQnKVxcXCJcXHJcXG4gICAgICAgICAgc2luZ2xlLWxpbmVcXHJcXG4gICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoXFxcIlxcclxcbiAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgIDwvdi1jYXJkLXRpdGxlPlxcclxcbiAgICAgIDx2LWRhdGEtdGFibGVcXHJcXG4gICAgICAgIDpoZWFkZXJzPVxcXCJoZWFkZXJzXFxcIlxcclxcbiAgICAgICAgOml0ZW1zPVxcXCJpdGVtc1xcXCJcXHJcXG4gICAgICAgIDpzZWFyY2g9XFxcInNlYXJjaFxcXCJcXHJcXG4gICAgICAgIHYtbW9kZWw9XFxcInNlbGVjdGVkXFxcIlxcclxcbiAgICAgICAgc2VsZWN0LWFsbFxcclxcbiAgICAgICAgaXRlbS1rZXk9XFxcImlkXFxcIlxcclxcbiAgICAgICAgOm5vLXJlc3VsdHMtdGV4dD1cXFwiJHQoJ25vX21hdGNoX2ZvdW5kJylcXFwiXFxyXFxuICAgICAgICA6cm93cy1wZXItcGFnZS10ZXh0PVxcXCIkdCgnc3RyaW5ncycpXFxcIlxcclxcbiAgICAgICAgY2xhc3M9XFxcImVsZXZhdGlvbi0xXFxcIlxcclxcbiAgICAgID5cXHJcXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJpdGVtc1xcXCIgc2xvdC1zY29wZT1cXFwicHJvcHNcXFwiPlxcclxcbiAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgPHYtY2hlY2tib3hcXHJcXG4gICAgICAgICAgICAgIHByaW1hcnlcXHJcXG4gICAgICAgICAgICAgIGhpZGUtZGV0YWlsc1xcclxcbiAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicHJvcHMuc2VsZWN0ZWRcXFwiXFxyXFxuICAgICAgICAgICAgPjwvdi1jaGVja2JveD5cXHJcXG4gICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgPCEtLTx0ZD4tLT5cXHJcXG4gICAgICAgICAgPCEtLTx2LWxpc3QtdGlsZS1hdmF0YXI+LS0+XFxyXFxuICAgICAgICAgIDwhLS08aW1nIDpzcmM9XFxcInByb3BzLml0ZW0uYXZhdGFyXFxcIj4tLT5cXHJcXG4gICAgICAgICAgPCEtLTwvdi1saXN0LXRpbGUtYXZhdGFyPi0tPlxcclxcbiAgICAgICAgICA8IS0tPC90ZD4tLT5cXHJcXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0uZmlyc3RfbmFtZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmxhc3RfbmFtZSB9fTwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLnBvc2l0aW9uIH19PC90ZD5cXHJcXG4gICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0uZGVwYXJ0bWVudCB9fTwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICA8di1idG4gb3V0bGluZSByb3VuZCA6dG89XFxcIntuYW1lOiAnZW1wbG95ZWUnLCBwYXJhbXM6IHtpZDogcHJvcHMuaXRlbS5pZH19XFxcIj57eyAkdCgnZGV0YWlscycpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwibm8tZGF0YVxcXCI+XFxyXFxuICAgICAgICAgIDx2LWFsZXJ0IDp2YWx1ZT1cXFwidHJ1ZVxcXCIgY29sb3I9XFxcInJlZFxcXCIgaWNvbj1cXFwid2FybmluZ1xcXCI+XFxyXFxuICAgICAgICAgICAg0J3QtdGCINC00LDQvdC90YvRhSA6KFxcclxcbiAgICAgICAgICA8L3YtYWxlcnQ+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgIDwvdi1kYXRhLXRhYmxlPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlX19idXR0b25zXFxcIj5cXHJcXG4gICAgICAgIDx2LWJ0biBmYWIgZGFyayBsYXJnZSBjb2xvcj1cXFwiY3lhblxcXCIgOnRvPVxcXCJ7IG5hbWU6ICdlbXBsb3llZUNyZWF0ZScgfVxcXCI+XFxyXFxuICAgICAgICAgIDx2LWljb24gZGFyaz5hZGQ8L3YtaWNvbj5cXHJcXG4gICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICA8dHJhbnNpdGlvbiBlbnRlci1hY3RpdmUtY2xhc3M9XFxcImJ1dHRvbkVudGVyXFxcIiBsZWF2ZS1hY3RpdmUtY2xhc3M9XFxcImJ1dHRvbkxlYXZlXFxcIiBtb2RlPVxcXCJvdXQtaW5cXFwiPlxcclxcbiAgICAgICAgICA8di1idG4gdi1zaG93PVxcXCJzZWxlY3RlZC5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwiZGVsZXRlLWJ0blxcXCIgZmFiIGxhcmdlIGRhcmsgQGNsaWNrPVxcXCJkZWxldGVEaWFsb2coc2VsZWN0ZWQpXFxcIj5cXHJcXG4gICAgICAgICAgICA8di1pY29uPmRlbGV0ZTwvdi1pY29uPlxcclxcbiAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgPC90cmFuc2l0aW9uPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDx2LXNuYWNrYmFyIDp0aW1lb3V0PVxcXCJzbmFja2JhclRpbWVvdXRcXFwiIHRvcCB2LW1vZGVsPVxcXCJzbmFja2JhclNob3dcXFwiIG11bHRpLWxpbmUgY29sb3I9XFxcImluZm9cXFwiPlxcclxcbiAgICAgICAge3sgJHQoJ2RlbGV0ZV9kb25lJykgfX1cXHJcXG4gICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVxcXCJwaW5rXFxcIiBAY2xpY2submF0aXZlPVxcXCJzbmFja2JhclNob3cgPSBmYWxzZVxcXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxcclxcbiAgICAgIDwvdi1zbmFja2Jhcj5cXHJcXG4gICAgPC92LWNhcmQ+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICBpbXBvcnQge1xcclxcbiAgICBtYXBBY3Rpb25zLFxcclxcbiAgICBtYXBHZXR0ZXJzXFxyXFxuICB9IGZyb20gJ3Z1ZXgnO1xcclxcblxcclxcbiAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICBtaWRkbGV3YXJlOiBbJ2F1dGgnLCAnb3JnYW5pc2F0aW9uJ10sXFxyXFxuICAgIHByb3BzOiB7XFxyXFxuICAgICAgc2VhcmNoUHJvcDoge1xcclxcbiAgICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgICAgZGVmYXVsdDogJydcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGRhdGE6ICgpID0+ICh7XFxyXFxuICAgICAgc25hY2tiYXJTaG93OiBmYWxzZSxcXHJcXG4gICAgICBzbmFja2JhclRpbWVvdXQ6IDEwMDAwLFxcclxcbiAgICAgIC8vINCf0L7QuNGB0LogLyDQktGL0LHQvtGA0LrQsFxcclxcbiAgICAgIHNlYXJjaDogJycsXFxyXFxuICAgICAgc2VsZWN0ZWQ6IFtdLFxcclxcbiAgICAgIGRpYWxvZzogZmFsc2UsXFxyXFxuICAgICAgLy8g0KPQtNCw0LvQtdC90LjQtVxcclxcbiAgICAgIGRlbGV0ZVdpbmRvdzogZmFsc2UsXFxyXFxuICAgICAgZGVsZXRlQ2F0ZWdvcnk6IG51bGwsXFxyXFxuICAgICAgZGVsTW9kZTogJ3NpbmdsZScsXFxyXFxuICAgICAgLy8g0JfQsNCz0L7Qu9C+0LLQutC4INGC0LDQsdC70LjRhtGLXFxyXFxuICAgICAgaGVhZGVyczogW1xcclxcbiAgICAgICAge1xcclxcbiAgICAgICAgICB0ZXh0OiAn0JjQvNGPJyxcXHJcXG4gICAgICAgICAgdmFsdWU6ICdmaXJzdF9uYW1lJ1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHtcXHJcXG4gICAgICAgICAgdGV4dDogJ9Ck0LDQvNC40LvQuNGPJyxcXHJcXG4gICAgICAgICAgdmFsdWU6ICdsYXN0X25hbWUnXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAge1xcclxcbiAgICAgICAgICB0ZXh0OiAn0JTQvtC70LbQvdC+0YHRgtGMJyxcXHJcXG4gICAgICAgICAgdmFsdWU6ICdwb3NpdGlvbidcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB7XFxyXFxuICAgICAgICAgIHRleHQ6ICfQn9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtScsXFxyXFxuICAgICAgICAgIHZhbHVlOiAnZGVwYXJ0bWVudCdcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB7XFxyXFxuICAgICAgICAgIHRleHQ6ICcnLFxcclxcbiAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICBdXFxyXFxuICAgIH0pLFxcclxcbiAgICBjb21wdXRlZDoge1xcclxcbiAgICAgIGl0ZW1zKCkge1xcclxcbiAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xcclxcbiAgICAgICAgdGhpcy5lbXBsb3llZXMuZm9yRWFjaChlbCA9PiB7XFxyXFxuICAgICAgICAgIGRhdGEucHVzaCh7XFxyXFxuICAgICAgICAgICAgaWQ6IGVsLmlkLFxcclxcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IGVsLmZpcnN0X25hbWUsXFxyXFxuICAgICAgICAgICAgbGFzdF9uYW1lOiBlbC5sYXN0X25hbWUsXFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuZ2V0UG9zaXRpb25OYW1lKGVsLnBvc2l0aW9uX2lkKS50aXRsZSxcXHJcXG4gICAgICAgICAgICBkZXBhcnRtZW50OiB0aGlzLmdldERlcGFydG1lbnROYW1lKGVsLnBvc2l0aW9uX2lkKS50aXRsZVxcclxcbiAgICAgICAgICB9KVxcclxcbiAgICAgICAgfSlcXHJcXG4gICAgICAgIHJldHVybiBkYXRhO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVsZXRlTXNnKCkge1xcclxcbiAgICAgICAgcmV0dXJuICh0aGlzLnNlbGVjdGVkLmxlbmd0aCA9PSAxKSA/IHRoaXMuJHQoJ2RlbGV0ZV9pdGVtX2NvbmZpcm0nKSA6XFxyXFxuICAgICAgICAgIHRoaXMuJHQoJ2RlbGV0ZV9pdGVtc19jb25maXJtJyk7XFxyXFxuICAgICAgfSxcXHJcXG4gICAgICAuLi5tYXBHZXR0ZXJzKHtcXHJcXG4gICAgICAgIGVtcGxveWVlczogJ2VtcGxveWVlcy9lbXBsb3llZXMnLFxcclxcbiAgICAgICAgcG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXFxyXFxuICAgICAgICBkZXBhcnRtZW50czogJ2RlcGFydG1lbnRzL2RlcGFydG1lbnRzJ1xcclxcbiAgICAgIH0pXFxyXFxuICAgIH0sXFxyXFxuICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICBnZXRQb3NpdGlvbk5hbWUoaWQpIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9ucy5maW5kKGVsID0+IGVsLmlkID09IGlkKTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGdldERlcGFydG1lbnROYW1lKGlkKSB7XFxyXFxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb25OYW1lKGlkKVxcclxcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwYXJ0bWVudHMuZmluZChlbCA9PiBlbC5pZCA9PSBwb3NpdGlvbi5kZXBhcnRtZW50X2lkKVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVsZXRlRGlhbG9nKGl0ZW0pIHtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gdHJ1ZTtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBpdGVtO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVsZXRlQ29uZmlybSgpIHtcXHJcXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuZm9yRWFjaChlbCA9PiB0aGlzLmRlbGV0ZUl0ZW0oZWwuaWQpKTtcXHJcXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XFxyXFxuICAgICAgICB0aGlzLmVkaXRlZElEID0gbnVsbDtcXHJcXG4gICAgICAgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGRlbGV0ZUNhbmNlbCgpIHtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBudWxsO1xcclxcbiAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGNsb3NlKCkge1xcclxcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcXHJcXG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xcclxcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgLi4ubWFwQWN0aW9ucyh7XFxyXFxuICAgICAgICBsb2FkSXRlbXM6ICdlbXBsb3llZXMvbG9hZCcsXFxyXFxuICAgICAgICBkZWxldGVJdGVtOiAnZW1wbG95ZWVzL3JlbW92ZSdcXHJcXG4gICAgICB9KVxcclxcbiAgICB9LFxcclxcbiAgICBjcmVhdGVkKCkge1xcclxcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHJvdXRlci5nZXRNYXRjaGVkQ29tcG9uZW50cygpKVxcclxcbiAgICAgIGlmICh0aGlzLnNlYXJjaFByb3ApIHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2hQcm9wXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgLmJ0biB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGxpIHtcXHJcXG4gICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRhYmxlX19idXR0b25zIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IC01MHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGlhbG9nX19hY3RpdmF0b3Ige1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogLTMwcHg7XFxyXFxuICAgIGxlZnQ6IDQwcHg7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJkX190aXRsZSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2FyZF9fYWN0aW9ucyB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnV0dG9uRW50ZXIge1xcclxcbiAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LCAuOSwgLjQ4LCAxLjY0KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ1dHRvbkxlYXZlIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZSAuM3MgY3ViaWMtYmV6aWVyKC41MiwgLTAuNDQsIC44OCwgLTAuNDUpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIHJvdXRlckVudGVyIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIHJvdXRlckxlYXZlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTM1MGFkZWI5XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkZWxldGVXaW5kb3dcIiBtYXgtd2lkdGg9XCI1MDBweFwiPlxyXG4gICAgICA8di1jYXJkPlxyXG4gICAgICAgIDx2LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+e3sgJHQoJ2F0dGVudGlvbicpIH19PC9zcGFuPlxyXG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgIDx2LWZsZXggeHMxMj57e2RlbGV0ZU1zZ319PC92LWZsZXg+XHJcbiAgICAgICAgPC92LWNhcmQtdGV4dD5cclxuICAgICAgICA8di1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cImluZm9cIiBAY2xpY2submF0aXZlPVwiZGVsZXRlQ29uZmlybVwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cclxuICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiZXJyb3JcIiBAY2xpY2submF0aXZlPVwiZGVsZXRlQ2FuY2VsXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj5cclxuICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxyXG4gICAgICA8L3YtY2FyZD5cclxuICAgIDwvdi1kaWFsb2c+XHJcbiAgICA8di1jYXJkPlxyXG4gICAgICA8di1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDxoMj57eyAkdCgnZW1wbG95ZWVzJykgfX08L2gyPlxyXG4gICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxyXG4gICAgICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgICAgIGFwcGVuZC1pY29uPVwic2VhcmNoXCJcclxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdzZWFyY2hfaW5wdXQnKVwiXHJcbiAgICAgICAgICBzaW5nbGUtbGluZVxyXG4gICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFwiXHJcbiAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxyXG4gICAgICA8L3YtY2FyZC10aXRsZT5cclxuICAgICAgPHYtZGF0YS10YWJsZVxyXG4gICAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXHJcbiAgICAgICAgOml0ZW1zPVwiaXRlbXNcIlxyXG4gICAgICAgIDpzZWFyY2g9XCJzZWFyY2hcIlxyXG4gICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZFwiXHJcbiAgICAgICAgc2VsZWN0LWFsbFxyXG4gICAgICAgIGl0ZW0ta2V5PVwiaWRcIlxyXG4gICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XCIkdCgnbm9fbWF0Y2hfZm91bmQnKVwiXHJcbiAgICAgICAgOnJvd3MtcGVyLXBhZ2UtdGV4dD1cIiR0KCdzdHJpbmdzJylcIlxyXG4gICAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTFcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJpdGVtc1wiIHNsb3Qtc2NvcGU9XCJwcm9wc1wiPlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8di1jaGVja2JveFxyXG4gICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICBoaWRlLWRldGFpbHNcclxuICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvcHMuc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICA+PC92LWNoZWNrYm94PlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwhLS08dGQ+LS0+XHJcbiAgICAgICAgICA8IS0tPHYtbGlzdC10aWxlLWF2YXRhcj4tLT5cclxuICAgICAgICAgIDwhLS08aW1nIDpzcmM9XCJwcm9wcy5pdGVtLmF2YXRhclwiPi0tPlxyXG4gICAgICAgICAgPCEtLTwvdi1saXN0LXRpbGUtYXZhdGFyPi0tPlxyXG4gICAgICAgICAgPCEtLTwvdGQ+LS0+XHJcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5maXJzdF9uYW1lIH19PC90ZD5cclxuICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmxhc3RfbmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5wb3NpdGlvbiB9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5kZXBhcnRtZW50IH19PC90ZD5cclxuICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgcm91bmQgOnRvPVwie25hbWU6ICdlbXBsb3llZScsIHBhcmFtczoge2lkOiBwcm9wcy5pdGVtLmlkfX1cIj57eyAkdCgnZGV0YWlscycpIH19PC92LWJ0bj5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5vLWRhdGFcIj5cclxuICAgICAgICAgIDx2LWFsZXJ0IDp2YWx1ZT1cInRydWVcIiBjb2xvcj1cInJlZFwiIGljb249XCJ3YXJuaW5nXCI+XHJcbiAgICAgICAgICAgINCd0LXRgiDQtNCw0L3QvdGL0YUgOihcclxuICAgICAgICAgIDwvdi1hbGVydD5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3YtZGF0YS10YWJsZT5cclxuICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19idXR0b25zXCI+XHJcbiAgICAgICAgPHYtYnRuIGZhYiBkYXJrIGxhcmdlIGNvbG9yPVwiY3lhblwiIDp0bz1cInsgbmFtZTogJ2VtcGxveWVlQ3JlYXRlJyB9XCI+XHJcbiAgICAgICAgICA8di1pY29uIGRhcms+YWRkPC92LWljb24+XHJcbiAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICA8dHJhbnNpdGlvbiBlbnRlci1hY3RpdmUtY2xhc3M9XCJidXR0b25FbnRlclwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cImJ1dHRvbkxlYXZlXCIgbW9kZT1cIm91dC1pblwiPlxyXG4gICAgICAgICAgPHYtYnRuIHYtc2hvdz1cInNlbGVjdGVkLmxlbmd0aCA+IDBcIiBjbGFzcz1cImRlbGV0ZS1idG5cIiBmYWIgbGFyZ2UgZGFyayBAY2xpY2s9XCJkZWxldGVEaWFsb2coc2VsZWN0ZWQpXCI+XHJcbiAgICAgICAgICAgIDx2LWljb24+ZGVsZXRlPC92LWljb24+XHJcbiAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx2LXNuYWNrYmFyIDp0aW1lb3V0PVwic25hY2tiYXJUaW1lb3V0XCIgdG9wIHYtbW9kZWw9XCJzbmFja2JhclNob3dcIiBtdWx0aS1saW5lIGNvbG9yPVwiaW5mb1wiPlxyXG4gICAgICAgIHt7ICR0KCdkZWxldGVfZG9uZScpIH19XHJcbiAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XCJwaW5rXCIgQGNsaWNrLm5hdGl2ZT1cInNuYWNrYmFyU2hvdyA9IGZhbHNlXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG4gICAgICA8L3Ytc25hY2tiYXI+XHJcbiAgICA8L3YtY2FyZD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtcclxuICAgIG1hcEFjdGlvbnMsXHJcbiAgICBtYXBHZXR0ZXJzXHJcbiAgfSBmcm9tICd2dWV4JztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbWlkZGxld2FyZTogWydhdXRoJywgJ29yZ2FuaXNhdGlvbiddLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2VhcmNoUHJvcDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YTogKCkgPT4gKHtcclxuICAgICAgc25hY2tiYXJTaG93OiBmYWxzZSxcclxuICAgICAgc25hY2tiYXJUaW1lb3V0OiAxMDAwMCxcclxuICAgICAgLy8g0J/QvtC40YHQuiAvINCS0YvQsdC+0YDQutCwXHJcbiAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgIHNlbGVjdGVkOiBbXSxcclxuICAgICAgZGlhbG9nOiBmYWxzZSxcclxuICAgICAgLy8g0KPQtNCw0LvQtdC90LjQtVxyXG4gICAgICBkZWxldGVXaW5kb3c6IGZhbHNlLFxyXG4gICAgICBkZWxldGVDYXRlZ29yeTogbnVsbCxcclxuICAgICAgZGVsTW9kZTogJ3NpbmdsZScsXHJcbiAgICAgIC8vINCX0LDQs9C+0LvQvtCy0LrQuCDRgtCw0LHQu9C40YbRi1xyXG4gICAgICBoZWFkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ9CY0LzRjycsXHJcbiAgICAgICAgICB2YWx1ZTogJ2ZpcnN0X25hbWUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0KTQsNC80LjQu9C40Y8nLFxyXG4gICAgICAgICAgdmFsdWU6ICdsYXN0X25hbWUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0JTQvtC70LbQvdC+0YHRgtGMJyxcclxuICAgICAgICAgIHZhbHVlOiAncG9zaXRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0J/QvtC00YDQsNC30LTQtdC70LXQvdC40LUnLFxyXG4gICAgICAgICAgdmFsdWU6ICdkZXBhcnRtZW50J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pLFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgaXRlbXMoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZW1wbG95ZWVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgZGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IGVsLmlkLFxyXG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBlbC5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgICBsYXN0X25hbWU6IGVsLmxhc3RfbmFtZSxcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuZ2V0UG9zaXRpb25OYW1lKGVsLnBvc2l0aW9uX2lkKS50aXRsZSxcclxuICAgICAgICAgICAgZGVwYXJ0bWVudDogdGhpcy5nZXREZXBhcnRtZW50TmFtZShlbC5wb3NpdGlvbl9pZCkudGl0bGVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlTXNnKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zZWxlY3RlZC5sZW5ndGggPT0gMSkgPyB0aGlzLiR0KCdkZWxldGVfaXRlbV9jb25maXJtJykgOlxyXG4gICAgICAgICAgdGhpcy4kdCgnZGVsZXRlX2l0ZW1zX2NvbmZpcm0nKTtcclxuICAgICAgfSxcclxuICAgICAgLi4ubWFwR2V0dGVycyh7XHJcbiAgICAgICAgZW1wbG95ZWVzOiAnZW1wbG95ZWVzL2VtcGxveWVlcycsXHJcbiAgICAgICAgcG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXHJcbiAgICAgICAgZGVwYXJ0bWVudHM6ICdkZXBhcnRtZW50cy9kZXBhcnRtZW50cydcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGdldFBvc2l0aW9uTmFtZShpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9ucy5maW5kKGVsID0+IGVsLmlkID09IGlkKTtcclxuICAgICAgfSxcclxuICAgICAgZ2V0RGVwYXJ0bWVudE5hbWUoaWQpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb25OYW1lKGlkKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRlcGFydG1lbnRzLmZpbmQoZWwgPT4gZWwuaWQgPT0gcG9zaXRpb24uZGVwYXJ0bWVudF9pZClcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlRGlhbG9nKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kZWxldGVDYXRlZ29yeSA9IGl0ZW07XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZUNvbmZpcm0oKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5mb3JFYWNoKGVsID0+IHRoaXMuZGVsZXRlSXRlbShlbC5pZCkpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZWRpdGVkSUQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlQ2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSk7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xyXG4gICAgICB9LFxyXG4gICAgICAuLi5tYXBBY3Rpb25zKHtcclxuICAgICAgICBsb2FkSXRlbXM6ICdlbXBsb3llZXMvbG9hZCcsXHJcbiAgICAgICAgZGVsZXRlSXRlbTogJ2VtcGxveWVlcy9yZW1vdmUnXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy4kcm91dGVyLmdldE1hdGNoZWRDb21wb25lbnRzKCkpXHJcbiAgICAgIGlmICh0aGlzLnNlYXJjaFByb3ApIHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2hQcm9wXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5idG4ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgbGkge1xyXG4gICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4ICMwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZV9fYnV0dG9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC01MHB4O1xyXG4gIH1cclxuICBcclxuICAuZGlhbG9nX19hY3RpdmF0b3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMzBweDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAuY2FyZF9fdGl0bGUge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkX19hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uRW50ZXIge1xyXG4gICAgYW5pbWF0aW9uOiBidXR0b25FbnRlciAuM3MgY3ViaWMtYmV6aWVyKC4wOSwgLjksIC40OCwgMS42NCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b25MZWF2ZSB7XHJcbiAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlIC4zcyBjdWJpYy1iZXppZXIoLjUyLCAtMC40NCwgLjg4LCAtMC40NSk7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcm91dGVyTGVhdmUge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYnV0dG9uRW50ZXIge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL0xpc3QudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kZWxldGVXaW5kb3csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kZWxldGVXaW5kb3cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRlbGV0ZVdpbmRvd1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcImF0dGVudGlvblwiKSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtZmxleFwiLCB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRlbGV0ZU1zZykpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVDb25maXJtKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJlcnJvclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNhbmNlbCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjYW5jZWxcIikpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiZW1wbG95ZWVzXCIpKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwic2VhcmNoX2lucHV0XCIpLFxuICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZGF0YS10YWJsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0LWFsbFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgIFwibm8tcmVzdWx0cy10ZXh0XCI6IF92bS4kdChcIm5vX21hdGNoX2ZvdW5kXCIpLFxuICAgICAgICAgICAgICAgIFwicm93cy1wZXItcGFnZS10ZXh0XCI6IF92bS4kdChcInN0cmluZ3NcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwcmltYXJ5OiBcIlwiLCBcImhpZGUtZGV0YWlsc1wiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQocHJvcHMsIFwic2VsZWN0ZWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvcHMuc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5maXJzdF9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5sYXN0X25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLnBvc2l0aW9uKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5kZXBhcnRtZW50KSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogcHJvcHMuaXRlbS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImRldGFpbHNcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgIHsgc2xvdDogXCJuby1kYXRhXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IHRydWUsIGNvbG9yOiBcInJlZFwiLCBpY29uOiBcIndhcm5pbmdcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAg0J3QtdGCINC00LDQvdC90YvRhSA6KFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlX19idXR0b25zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZhYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogXCJlbXBsb3llZUNyZWF0ZVwiIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGRhcms6IFwiXCIgfSB9LCBbX3ZtLl92KFwiYWRkXCIpXSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJidXR0b25FbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcImJ1dHRvbkxlYXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IFwib3V0LWluXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWQubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZWxldGUtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmFiOiBcIlwiLCBsYXJnZTogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVEaWFsb2coX3ZtLnNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJkZWxldGVcIildKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtc25hY2tiYXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBfdm0uc25hY2tiYXJUaW1lb3V0LFxuICAgICAgICAgICAgICAgIHRvcDogXCJcIixcbiAgICAgICAgICAgICAgICBcIm11bHRpLWxpbmVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNuYWNrYmFyU2hvdyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc25hY2tiYXJTaG93ID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNuYWNrYmFyU2hvd1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChcImRlbGV0ZV9kb25lXCIpKSArIFwiXFxuICAgICAgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicGlua1wiIH0sXG4gICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNuYWNrYmFyU2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMzUwYWRlYjlcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTM1MGFkZWI5XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiXSwic291cmNlUm9vdCI6IiJ9