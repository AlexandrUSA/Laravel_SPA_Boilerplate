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
exports.push([module.i, "\n.btn[data-v-1ee6735d] {\n    text-transform: none !important;\n}\nli[data-v-1ee6735d] {\n    margin: 5px !important;\n    -webkit-box-shadow: 0 0 15px #000;\n            box-shadow: 0 0 15px #000;\n}\n.table__buttons[data-v-1ee6735d] {\n    position: absolute;\n    bottom: -50px;\n}\n.dialog__activator[data-v-1ee6735d] {\n    position: absolute;\n    bottom: -30px;\n    left: 40px;\n    z-index: 1;\n}\n.card__title[data-v-1ee6735d] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.card__actions[data-v-1ee6735d] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.buttonEnter[data-v-1ee6735d] {\n    -webkit-animation: buttonEnter-data-v-1ee6735d .3s cubic-bezier(.09,.9,.48,1.64);\n            animation: buttonEnter-data-v-1ee6735d .3s cubic-bezier(.09,.9,.48,1.64);\n}\n.buttonLeave[data-v-1ee6735d] {\n    -webkit-animation: buttonLeave-data-v-1ee6735d .3s cubic-bezier(.52,-0.44,.88,-0.45);\n            animation: buttonLeave-data-v-1ee6735d .3s cubic-bezier(.52,-0.44,.88,-0.45);\n}\n@-webkit-keyframes routerEnter-data-v-1ee6735d {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@keyframes routerEnter-data-v-1ee6735d {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@-webkit-keyframes routerLeave-data-v-1ee6735d {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@keyframes routerLeave-data-v-1ee6735d {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@-webkit-keyframes buttonEnter-data-v-1ee6735d {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@keyframes buttonEnter-data-v-1ee6735d {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@-webkit-keyframes buttonLeave-data-v-1ee6735d {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n@keyframes buttonLeave-data-v-1ee6735d {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/departments/resources/assets/js/pages/admin/departments/List.vue"],"names":[],"mappings":";AAqOA;IACA,gCAAA;CACA;AAGA;IACA,uBAAA;IACA,kCAAA;YAAA,0BAAA;CACA;AACA;IACA,mBAAA;IACA,cAAA;CACA;AAEA;IACA,mBAAA;IACA,cAAA;IACA,WAAA;IACA,WAAA;CACA;AAEA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;CACA;AAEA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;CACA;AAEA;IACA,iFAAA;YAAA,yEAAA;CACA;AAEA;IACA,qFAAA;YAAA,6EAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n<div>\r\n    <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\r\n        <v-card>\r\n            <v-card-title>\r\n                <span class=\"headline\">{{ $t('attention') }}</span>\r\n            </v-card-title>\r\n            <v-card-text>\r\n                <v-flex xs12>{{deleteMsg}}</v-flex>\r\n            </v-card-text>\r\n            <v-card-actions>\r\n                <v-btn outline color=\"info\" @click.native=\"deleteConfirm\">{{ $t('ok') }}</v-btn>\r\n                <v-btn outline color=\"error\" @click.native=\"deleteCancel\">{{ $t('cancel') }}</v-btn>\r\n            </v-card-actions>\r\n        </v-card>\r\n    </v-dialog>\r\n\r\n    <v-dialog v-model=\"departmentCreate\" max-width=\"500px\">\r\n        <v-card>\r\n            <v-card-title>\r\n                <span class=\"headline\">Новое подразделение</span>\r\n            </v-card-title>\r\n            <v-card-text>\r\n                <v-flex xs12>\r\n                    <v-text-field label=\"Наименование\" v-model=\"departmentName\"></v-text-field>\r\n                </v-flex>\r\n            </v-card-text>\r\n            <v-card-actions>\r\n                <v-btn outline color=\"info\" @click.native=\"addConfirm\">{{ $t('ok') }}</v-btn>\r\n                <v-btn outline color=\"error\" @click.native=\"addCancel\">{{ $t('cancel') }}</v-btn>\r\n            </v-card-actions>\r\n        </v-card>\r\n    </v-dialog>\r\n\r\n    \r\n\r\n    <v-card>\r\n        <v-card-title>\r\n            <h2>{{ $t('department') }}</h2>\r\n            <v-spacer></v-spacer>\r\n            <v-text-field\r\n                        append-icon=\"search\"\r\n                        :label=\"$t('search_input')\"\r\n                        single-line         \r\n                        v-model=\"search\"\r\n            ></v-text-field>\r\n        </v-card-title>\r\n        <v-data-table\r\n            :headers=\"headers\"\r\n            :items=\"items\"\r\n            :search=\"search\"\r\n            item-key=\"id\"\r\n            :no-results-text=\"$t('no_match_found')\"\r\n            :rows-per-page-text=\"$t('strings')\"\r\n            class=\"elevation-1\"\r\n        >\r\n            <template slot=\"items\" slot-scope=\"props\">\r\n                <td>{{ props.item.id }}</td>\r\n                <td>\r\n                    <v-edit-dialog\r\n                        :return-value.sync=\"props.item.title\"\r\n                        lazy\r\n                    > {{ props.item.title }}\r\n                        <v-text-field\r\n                            slot=\"input\"\r\n                            label=\"Edit\"\r\n                            v-model=\"props.item.title\"\r\n                            single-line\r\n                            counter\r\n                            @change=\"editItem(props.item)\"\r\n                        ></v-text-field>\r\n                    </v-edit-dialog>\r\n                </td>\r\n                <td>{{ getPositions(props.item.id).length }}</td>\r\n                <td>{{ getEmployees(props.item.id).length }}</td>\r\n                <td>\r\n                    <v-btn outline round @click=\"openInfoPanel(props.item.id)\">{{ $t('details') }}</v-btn>   \r\n                </td>\r\n            </template>\r\n            <template slot=\"no-data\">\r\n              <v-alert :value=\"true\" color=\"red\" icon=\"warning\">\r\n                    Нет данных :(\r\n                </v-alert>\r\n            </template>\r\n        </v-data-table>\r\n        <div class=\"table__buttons\">\r\n            <v-btn fab dark large color=\"cyan\" @click=\"departmentCreate = true\">\r\n                <v-icon dark>add</v-icon>\r\n            </v-btn>\r\n            <transition enter-active-class=\"buttonEnter\" leave-active-class=\"buttonLeave\" mode=\"out-in\">\r\n                <v-btn v-show=\"selected.length > 0\" class=\"delete-btn\" fab large dark @click=\"deleteDialog(selected)\">\r\n                    <v-icon>delete</v-icon>\r\n                </v-btn>\r\n            </transition>\r\n        </div>\r\n        <v-snackbar :timeout=\"snackbarTimeout\" top v-model=\"snackbarShow\" multi-line color=\"info\">\r\n            {{ $t('delete_done') }}\r\n            <v-btn flat color=\"pink\" @click.native=\"snackbarShow = false\">{{ $t('ok') }}</v-btn>\r\n        </v-snackbar>\r\n    </v-card>\r\n</div>\r\n</template>\r\n\r\n<script>\r\n    import {\r\n        mapActions,\r\n        mapGetters\r\n    } from 'vuex';\r\n    export default {\r\n        middleware: 'auth',\r\n        data: () => ({\r\n            //Подробности\r\n            showInfo: false,\r\n            selectedEmployees: [],\r\n            selectedPositions: [],\r\n            // Всплывашки\r\n            snackbarShow: false,\r\n            snackbarTimeout: 10000,\r\n            // Поиск / Выборка\r\n            search: '',\r\n            selected: [],\r\n            dialog: false,\r\n            // Удаление\r\n            deleteWindow: false,\r\n            deleteCategory: null,\r\n            delMode: 'single',\r\n            //Создание\r\n            departmentCreate: false,\r\n            departmentName: '',\r\n            // Заголовки таблицы\r\n            headers: [\r\n                {\r\n                    text: 'Номер',\r\n                    align: 'left',\r\n                    sortable: false\r\n                },\r\n                {\r\n                    text: 'Наименование',\r\n                    value: 'first_name'\r\n                },\r\n                {\r\n                    text: 'Должностей',\r\n                    value: 'last_name'\r\n                },\r\n                {\r\n                    text: 'Сотрудников',\r\n                    value: 'position'\r\n                },\r\n                {\r\n                    text: '',\r\n                    sortable: false\r\n                }\r\n            ]\r\n        }),\r\n        computed: {\r\n            deleteMsg() {\r\n                return (this.selected.length == 1) ? this.$t('delete_item_confirm') :\r\n                    this.$t('delete_items_confirm');\r\n            },\r\n            ...mapGetters({\r\n                items: 'departments/departments',\r\n                positions: 'positions/positions',\r\n                employees: 'employees/employees'\r\n            })\r\n        },\r\n        methods: {\r\n            openInfoPanel(id) {   \r\n                this.selectedPositions = this.getPositions(id);\r\n                this.selectedEmployees = this.getEmployees(id);\r\n                this.showInfo = true;\r\n            },\r\n            getPositions (id) {\r\n                let positions = [];\r\n\r\n                this.positions.forEach( el => {\r\n                    if(el.department_id == id) positions.push(el);\r\n                });\r\n\r\n                return positions;\r\n            },\r\n            getEmployees (id) {\r\n                let employees = [],\r\n                    positions = this.getPositions(id);\r\n                \r\n                positions.forEach( pos => {\r\n                    this.employees.forEach( el => {\r\n                        if( el.position_id == pos.id) employees.push(el);\r\n                    });\r\n                });     \r\n                return employees;\r\n            },\r\n            addConfirm() {\r\n                this.addItem({ 'title': this.departmentName });\r\n                this.departmentCreate = false;\r\n            },\r\n            addCancel() {\r\n                this.departmentCreate = false;\r\n            },\r\n            deleteDialog(item) {\r\n                this.deleteWindow = true;\r\n                this.deleteCategory = item;\r\n            },\r\n            deleteConfirm() {\r\n                this.selected.forEach(el => this.deleteItem(el.id));\r\n                this.selected = [];\r\n                this.deleteWindow = false;\r\n                this.editedID = null;\r\n                this.snackbarShow = true;\r\n            },\r\n            deleteCancel() {\r\n                this.deleteCategory = null;\r\n                this.deleteWindow = false;\r\n            },\r\n            close() {\r\n                this.dialog = false;\r\n                this.editedItem = Object.assign({}, this.defaultItem);\r\n                this.editedIndex = -1;\r\n            },\r\n            ...mapActions({\r\n                loadItems: 'departments/load',\r\n                addItem: 'departments/add',\r\n                editItem: 'departments/edit',\r\n                deleteItem: 'departments/remove'\r\n            })\r\n        }\r\n    }\r\n\r\n</script>\r\n\r\n<style scoped>\r\n    .btn {\r\n        text-transform: none !important;\r\n    }\r\n\r\n\r\n    li {\r\n        margin: 5px !important;\r\n        box-shadow: 0 0 15px #000;\r\n    }\r\n    .table__buttons {\r\n        position: absolute;\r\n        bottom: -50px;\r\n    }\r\n\r\n    .dialog__activator {\r\n        position: absolute;\r\n        bottom: -30px;\r\n        left: 40px;\r\n        z-index: 1;\r\n    }\r\n\r\n    .card__title {\r\n        justify-content: center;\r\n    }\r\n\r\n    .card__actions {\r\n        justify-content: center;\r\n    }\r\n\r\n    .buttonEnter {\r\n        animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\r\n      }\r\n\r\n      .buttonLeave {\r\n        animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\r\n      }\r\n\r\n      @keyframes routerEnter {\r\n        0% {opacity: 0;}\r\n        100% {opacity: 1;}\r\n      }\r\n\r\n      @keyframes routerLeave {\r\n        0% {opacity: 1;}\r\n        100% {opacity: 0;}\r\n      }\r\n\r\n      @keyframes buttonEnter {\r\n        0% {transform: scale(0);}\r\n        100% {transform: scale(1);}\r\n      }\r\n\r\n      @keyframes buttonLeave {\r\n        0% {transform: scale(1);}\r\n        100% {transform: scale(0);}\r\n      }\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

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
//
//
//
//
//
//
//
//
//
//
//
//
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
            //Подробности
            showInfo: false,
            selectedEmployees: [],
            selectedPositions: [],
            // Всплывашки
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
            //Создание
            departmentCreate: false,
            departmentName: '',
            // Заголовки таблицы
            headers: [{
                text: 'Номер',
                align: 'left',
                sortable: false
            }, {
                text: 'Наименование',
                value: 'first_name'
            }, {
                text: 'Должностей',
                value: 'last_name'
            }, {
                text: 'Сотрудников',
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
        openInfoPanel: function openInfoPanel(id) {
            this.selectedPositions = this.getPositions(id);
            this.selectedEmployees = this.getEmployees(id);
            this.showInfo = true;
        },
        getPositions: function getPositions(id) {
            var positions = [];

            this.positions.forEach(function (el) {
                if (el.department_id == id) positions.push(el);
            });

            return positions;
        },
        getEmployees: function getEmployees(id) {
            var _this = this;

            var employees = [],
                positions = this.getPositions(id);

            positions.forEach(function (pos) {
                _this.employees.forEach(function (el) {
                    if (el.position_id == pos.id) employees.push(el);
                });
            });
            return employees;
        },
        addConfirm: function addConfirm() {
            this.addItem({ 'title': this.departmentName });
            this.departmentCreate = false;
        },
        addCancel: function addCancel() {
            this.departmentCreate = false;
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
        addItem: 'departments/add',
        editItem: 'departments/edit',
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
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.departmentCreate,
            callback: function($$v) {
              _vm.departmentCreate = $$v
            },
            expression: "departmentCreate"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v("Новое подразделение")
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "Наименование" },
                        model: {
                          value: _vm.departmentName,
                          callback: function($$v) {
                            _vm.departmentName = $$v
                          },
                          expression: "departmentName"
                        }
                      })
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
                  _c(
                    "v-btn",
                    {
                      attrs: { outline: "", color: "info" },
                      nativeOn: {
                        click: function($event) {
                          _vm.addConfirm($event)
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
                          _vm.addCancel($event)
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
              _c("h2", [_vm._v(_vm._s(_vm.$t("department")))]),
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
                "item-key": "id",
                "no-results-text": _vm.$t("no_match_found"),
                "rows-per-page-text": _vm.$t("strings")
              },
              scopedSlots: _vm._u([
                {
                  key: "items",
                  fn: function(props) {
                    return [
                      _c("td", [_vm._v(_vm._s(props.item.id))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "v-edit-dialog",
                            {
                              attrs: {
                                "return-value": props.item.title,
                                lazy: ""
                              },
                              on: {
                                "update:returnValue": function($event) {
                                  _vm.$set(props.item, "title", $event)
                                }
                              }
                            },
                            [
                              _vm._v(
                                " " +
                                  _vm._s(props.item.title) +
                                  "\r\n                        "
                              ),
                              _c("v-text-field", {
                                attrs: {
                                  slot: "input",
                                  label: "Edit",
                                  "single-line": "",
                                  counter: ""
                                },
                                on: {
                                  change: function($event) {
                                    _vm.editItem(props.item)
                                  }
                                },
                                slot: "input",
                                model: {
                                  value: props.item.title,
                                  callback: function($$v) {
                                    _vm.$set(props.item, "title", $$v)
                                  },
                                  expression: "props.item.title"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.getPositions(props.item.id).length))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.getEmployees(props.item.id).length))
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { outline: "", round: "" },
                              on: {
                                click: function($event) {
                                  _vm.openInfoPanel(props.item.id)
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
              ])
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
                  attrs: { fab: "", dark: "", large: "", color: "cyan" },
                  on: {
                    click: function($event) {
                      _vm.departmentCreate = true
                    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWU/OTg2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlPzkxMzYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZT9iYTI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXdNO0FBQ3hNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFxTDtBQUNyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQThPO0FBQzlPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SkFBNEosaUZBQWlGO0FBQzdPLHFLQUFxSyxpRkFBaUY7QUFDdFA7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0Esa0RBQW1ELHNDQUFzQyxHQUFHLHVCQUF1Qiw2QkFB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QTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8xMS5mMzY2YzFhYTNkMzRjYmFmNTNkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWVlNjczNWRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWVlNjczNWRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0xZWU2NzM1ZFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGFkbWluXFxcXGRlcGFydG1lbnRzXFxcXExpc3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFlZTY3MzVkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWVlNjczNWRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFlZTY3MzVkXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjBiOWZjZDcxXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFlZTY3MzVkXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWVlNjczNWRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xZWU2NzM1ZFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnRuW2RhdGEtdi0xZWU2NzM1ZF0ge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5saVtkYXRhLXYtMWVlNjczNWRdIHtcXG4gICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4ICMwMDA7XFxufVxcbi50YWJsZV9fYnV0dG9uc1tkYXRhLXYtMWVlNjczNWRdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC01MHB4O1xcbn1cXG4uZGlhbG9nX19hY3RpdmF0b3JbZGF0YS12LTFlZTY3MzVkXSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtMzBweDtcXG4gICAgbGVmdDogNDBweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuLmNhcmRfX3RpdGxlW2RhdGEtdi0xZWU2NzM1ZF0ge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jYXJkX19hY3Rpb25zW2RhdGEtdi0xZWU2NzM1ZF0ge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5idXR0b25FbnRlcltkYXRhLXYtMWVlNjczNWRdIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJ1dHRvbkVudGVyLWRhdGEtdi0xZWU2NzM1ZCAuM3MgY3ViaWMtYmV6aWVyKC4wOSwuOSwuNDgsMS42NCk7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBidXR0b25FbnRlci1kYXRhLXYtMWVlNjczNWQgLjNzIGN1YmljLWJlemllciguMDksLjksLjQ4LDEuNjQpO1xcbn1cXG4uYnV0dG9uTGVhdmVbZGF0YS12LTFlZTY3MzVkXSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidXR0b25MZWF2ZS1kYXRhLXYtMWVlNjczNWQgLjNzIGN1YmljLWJlemllciguNTIsLTAuNDQsLjg4LC0wLjQ1KTtcXG4gICAgICAgICAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlLWRhdGEtdi0xZWU2NzM1ZCAuM3MgY3ViaWMtYmV6aWVyKC41MiwtMC40NCwuODgsLTAuNDUpO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm91dGVyRW50ZXItZGF0YS12LTFlZTY3MzVkIHtcXG4wJSB7b3BhY2l0eTogMDtcXG59XFxuMTAwJSB7b3BhY2l0eTogMTtcXG59XFxufVxcbkBrZXlmcmFtZXMgcm91dGVyRW50ZXItZGF0YS12LTFlZTY3MzVkIHtcXG4wJSB7b3BhY2l0eTogMDtcXG59XFxuMTAwJSB7b3BhY2l0eTogMTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3V0ZXJMZWF2ZS1kYXRhLXYtMWVlNjczNWQge1xcbjAlIHtvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtvcGFjaXR5OiAwO1xcbn1cXG59XFxuQGtleWZyYW1lcyByb3V0ZXJMZWF2ZS1kYXRhLXYtMWVlNjczNWQge1xcbjAlIHtvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtvcGFjaXR5OiAwO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1dHRvbkVudGVyLWRhdGEtdi0xZWU2NzM1ZCB7XFxuMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTt0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4xMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgYnV0dG9uRW50ZXItZGF0YS12LTFlZTY3MzVkIHtcXG4wJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO3RyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbjEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1dHRvbkxlYXZlLWRhdGEtdi0xZWU2NzM1ZCB7XFxuMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4xMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgYnV0dG9uTGVhdmUtZGF0YS12LTFlZTY3MzVkIHtcXG4wJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO3RyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbjEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTt0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFxT0E7SUFDQSxnQ0FBQTtDQUNBO0FBR0E7SUFDQSx1QkFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7Q0FDQTtBQUNBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0NBQ0E7QUFFQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0NBQ0E7QUFFQTtJQUNBLHlCQUFBO1FBQUEsc0JBQUE7WUFBQSx3QkFBQTtDQUNBO0FBRUE7SUFDQSx5QkFBQTtRQUFBLHNCQUFBO1lBQUEsd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsaUZBQUE7WUFBQSx5RUFBQTtDQUNBO0FBRUE7SUFDQSxxRkFBQTtZQUFBLDZFQUFBO0NBQ0E7QUFFQTtBQUNBLElBQUEsV0FBQTtDQUFBO0FBQ0EsTUFBQSxXQUFBO0NBQUE7Q0FDQTtBQUhBO0FBQ0EsSUFBQSxXQUFBO0NBQUE7QUFDQSxNQUFBLFdBQUE7Q0FBQTtDQUNBO0FBRUE7QUFDQSxJQUFBLFdBQUE7Q0FBQTtBQUNBLE1BQUEsV0FBQTtDQUFBO0NBQ0E7QUFIQTtBQUNBLElBQUEsV0FBQTtDQUFBO0FBQ0EsTUFBQSxXQUFBO0NBQUE7Q0FDQTtBQUVBO0FBQ0EsSUFBQSw0QkFBQSxvQkFBQTtDQUFBO0FBQ0EsTUFBQSw0QkFBQSxvQkFBQTtDQUFBO0NBQ0E7QUFIQTtBQUNBLElBQUEsNEJBQUEsb0JBQUE7Q0FBQTtBQUNBLE1BQUEsNEJBQUEsb0JBQUE7Q0FBQTtDQUNBO0FBRUE7QUFDQSxJQUFBLDRCQUFBLG9CQUFBO0NBQUE7QUFDQSxNQUFBLDRCQUFBLG9CQUFBO0NBQUE7Q0FDQTtBQUhBO0FBQ0EsSUFBQSw0QkFBQSxvQkFBQTtDQUFBO0FBQ0EsTUFBQSw0QkFBQSxvQkFBQTtDQUFBO0NBQ0FcIixcImZpbGVcIjpcIkxpc3QudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG48ZGl2PlxcclxcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwiZGVsZXRlV2luZG93XFxcIiBtYXgtd2lkdGg9XFxcIjUwMHB4XFxcIj5cXHJcXG4gICAgICAgIDx2LWNhcmQ+XFxyXFxuICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRsaW5lXFxcIj57eyAkdCgnYXR0ZW50aW9uJykgfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTI+e3tkZWxldGVNc2d9fTwvdi1mbGV4PlxcclxcbiAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XFxyXFxuICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxcclxcbiAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cXFwiaW5mb1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiZGVsZXRlQ29uZmlybVxcXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxcclxcbiAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cXFwiZXJyb3JcXFwiIEBjbGljay5uYXRpdmU9XFxcImRlbGV0ZUNhbmNlbFxcXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxcclxcbiAgICAgICAgPC92LWNhcmQ+XFxyXFxuICAgIDwvdi1kaWFsb2c+XFxyXFxuXFxyXFxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVxcXCJkZXBhcnRtZW50Q3JlYXRlXFxcIiBtYXgtd2lkdGg9XFxcIjUwMHB4XFxcIj5cXHJcXG4gICAgICAgIDx2LWNhcmQ+XFxyXFxuICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRsaW5lXFxcIj7QndC+0LLQvtC1INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgICAgICAgPHYtZmxleCB4czEyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCBsYWJlbD1cXFwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1XFxcIiB2LW1vZGVsPVxcXCJkZXBhcnRtZW50TmFtZVxcXCI+PC92LXRleHQtZmllbGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcclxcbiAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XFxyXFxuICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxcclxcbiAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cXFwiaW5mb1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiYWRkQ29uZmlybVxcXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxcclxcbiAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cXFwiZXJyb3JcXFwiIEBjbGljay5uYXRpdmU9XFxcImFkZENhbmNlbFxcXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxcclxcbiAgICAgICAgPC92LWNhcmQ+XFxyXFxuICAgIDwvdi1kaWFsb2c+XFxyXFxuXFxyXFxuICAgIFxcclxcblxcclxcbiAgICA8di1jYXJkPlxcclxcbiAgICAgICAgPHYtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgICA8aDI+e3sgJHQoJ2RlcGFydG1lbnQnKSB9fTwvaDI+XFxyXFxuICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxyXFxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZC1pY29uPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVxcXCIkdCgnc2VhcmNoX2lucHV0JylcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlLWxpbmUgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICA8di1kYXRhLXRhYmxlXFxyXFxuICAgICAgICAgICAgOmhlYWRlcnM9XFxcImhlYWRlcnNcXFwiXFxyXFxuICAgICAgICAgICAgOml0ZW1zPVxcXCJpdGVtc1xcXCJcXHJcXG4gICAgICAgICAgICA6c2VhcmNoPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICAgICAgaXRlbS1rZXk9XFxcImlkXFxcIlxcclxcbiAgICAgICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XFxcIiR0KCdub19tYXRjaF9mb3VuZCcpXFxcIlxcclxcbiAgICAgICAgICAgIDpyb3dzLXBlci1wYWdlLXRleHQ9XFxcIiR0KCdzdHJpbmdzJylcXFwiXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImVsZXZhdGlvbi0xXFxcIlxcclxcbiAgICAgICAgPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJpdGVtc1xcXCIgc2xvdC1zY29wZT1cXFwicHJvcHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LWVkaXQtZGlhbG9nXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgOnJldHVybi12YWx1ZS5zeW5jPVxcXCJwcm9wcy5pdGVtLnRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhenlcXHJcXG4gICAgICAgICAgICAgICAgICAgID4ge3sgcHJvcHMuaXRlbS50aXRsZSB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cXFwiaW5wdXRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJFZGl0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJwcm9wcy5pdGVtLnRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGUtbGluZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XFxcImVkaXRJdGVtKHByb3BzLml0ZW0pXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdi1lZGl0LWRpYWxvZz5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7IGdldFBvc2l0aW9ucyhwcm9wcy5pdGVtLmlkKS5sZW5ndGggfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3sgZ2V0RW1wbG95ZWVzKHByb3BzLml0ZW0uaWQpLmxlbmd0aCB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIHJvdW5kIEBjbGljaz1cXFwib3BlbkluZm9QYW5lbChwcm9wcy5pdGVtLmlkKVxcXCI+e3sgJHQoJ2RldGFpbHMnKSB9fTwvdi1idG4+ICAgXFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwibm8tZGF0YVxcXCI+XFxyXFxuICAgICAgICAgICAgICA8di1hbGVydCA6dmFsdWU9XFxcInRydWVcXFwiIGNvbG9yPVxcXCJyZWRcXFwiIGljb249XFxcIndhcm5pbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAg0J3QtdGCINC00LDQvdC90YvRhSA6KFxcclxcbiAgICAgICAgICAgICAgICA8L3YtYWxlcnQ+XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDwvdi1kYXRhLXRhYmxlPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGVfX2J1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgICAgIDx2LWJ0biBmYWIgZGFyayBsYXJnZSBjb2xvcj1cXFwiY3lhblxcXCIgQGNsaWNrPVxcXCJkZXBhcnRtZW50Q3JlYXRlID0gdHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWljb24gZGFyaz5hZGQ8L3YtaWNvbj5cXHJcXG4gICAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICAgIDx0cmFuc2l0aW9uIGVudGVyLWFjdGl2ZS1jbGFzcz1cXFwiYnV0dG9uRW50ZXJcXFwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cXFwiYnV0dG9uTGVhdmVcXFwiIG1vZGU9XFxcIm91dC1pblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWJ0biB2LXNob3c9XFxcInNlbGVjdGVkLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJkZWxldGUtYnRuXFxcIiBmYWIgbGFyZ2UgZGFyayBAY2xpY2s9XFxcImRlbGV0ZURpYWxvZyhzZWxlY3RlZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5kZWxldGU8L3YtaWNvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgICAgICA8L3RyYW5zaXRpb24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDx2LXNuYWNrYmFyIDp0aW1lb3V0PVxcXCJzbmFja2JhclRpbWVvdXRcXFwiIHRvcCB2LW1vZGVsPVxcXCJzbmFja2JhclNob3dcXFwiIG11bHRpLWxpbmUgY29sb3I9XFxcImluZm9cXFwiPlxcclxcbiAgICAgICAgICAgIHt7ICR0KCdkZWxldGVfZG9uZScpIH19XFxyXFxuICAgICAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XFxcInBpbmtcXFwiIEBjbGljay5uYXRpdmU9XFxcInNuYWNrYmFyU2hvdyA9IGZhbHNlXFxcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICA8L3Ytc25hY2tiYXI+XFxyXFxuICAgIDwvdi1jYXJkPlxcclxcbjwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gICAgaW1wb3J0IHtcXHJcXG4gICAgICAgIG1hcEFjdGlvbnMsXFxyXFxuICAgICAgICBtYXBHZXR0ZXJzXFxyXFxuICAgIH0gZnJvbSAndnVleCc7XFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG1pZGRsZXdhcmU6ICdhdXRoJyxcXHJcXG4gICAgICAgIGRhdGE6ICgpID0+ICh7XFxyXFxuICAgICAgICAgICAgLy/Qn9C+0LTRgNC+0LHQvdC+0YHRgtC4XFxyXFxuICAgICAgICAgICAgc2hvd0luZm86IGZhbHNlLFxcclxcbiAgICAgICAgICAgIHNlbGVjdGVkRW1wbG95ZWVzOiBbXSxcXHJcXG4gICAgICAgICAgICBzZWxlY3RlZFBvc2l0aW9uczogW10sXFxyXFxuICAgICAgICAgICAgLy8g0JLRgdC/0LvRi9Cy0LDRiNC60LhcXHJcXG4gICAgICAgICAgICBzbmFja2JhclNob3c6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIHNuYWNrYmFyVGltZW91dDogMTAwMDAsXFxyXFxuICAgICAgICAgICAgLy8g0J/QvtC40YHQuiAvINCS0YvQsdC+0YDQutCwXFxyXFxuICAgICAgICAgICAgc2VhcmNoOiAnJyxcXHJcXG4gICAgICAgICAgICBzZWxlY3RlZDogW10sXFxyXFxuICAgICAgICAgICAgZGlhbG9nOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICAvLyDQo9C00LDQu9C10L3QuNC1XFxyXFxuICAgICAgICAgICAgZGVsZXRlV2luZG93OiBmYWxzZSxcXHJcXG4gICAgICAgICAgICBkZWxldGVDYXRlZ29yeTogbnVsbCxcXHJcXG4gICAgICAgICAgICBkZWxNb2RlOiAnc2luZ2xlJyxcXHJcXG4gICAgICAgICAgICAvL9Ch0L7Qt9C00LDQvdC40LVcXHJcXG4gICAgICAgICAgICBkZXBhcnRtZW50Q3JlYXRlOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICBkZXBhcnRtZW50TmFtZTogJycsXFxyXFxuICAgICAgICAgICAgLy8g0JfQsNCz0L7Qu9C+0LLQutC4INGC0LDQsdC70LjRhtGLXFxyXFxuICAgICAgICAgICAgaGVhZGVyczogW1xcclxcbiAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0J3QvtC80LXRgCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQndCw0LjQvNC10L3QvtCy0LDQvdC40LUnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdmaXJzdF9uYW1lJ1xcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0JTQvtC70LbQvdC+0YHRgtC10LknLFxcclxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdsYXN0X25hbWUnXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQodC+0YLRgNGD0LTQvdC40LrQvtCyJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAncG9zaXRpb24nXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICBdXFxyXFxuICAgICAgICB9KSxcXHJcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgICAgICAgZGVsZXRlTXNnKCkge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09IDEpID8gdGhpcy4kdCgnZGVsZXRlX2l0ZW1fY29uZmlybScpIDpcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHQoJ2RlbGV0ZV9pdGVtc19jb25maXJtJyk7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcXHJcXG4gICAgICAgICAgICAgICAgaXRlbXM6ICdkZXBhcnRtZW50cy9kZXBhcnRtZW50cycsXFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uczogJ3Bvc2l0aW9ucy9wb3NpdGlvbnMnLFxcclxcbiAgICAgICAgICAgICAgICBlbXBsb3llZXM6ICdlbXBsb3llZXMvZW1wbG95ZWVzJ1xcclxcbiAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIG9wZW5JbmZvUGFuZWwoaWQpIHsgICBcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFBvc2l0aW9ucyA9IHRoaXMuZ2V0UG9zaXRpb25zKGlkKTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEVtcGxveWVlcyA9IHRoaXMuZ2V0RW1wbG95ZWVzKGlkKTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbyA9IHRydWU7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBnZXRQb3NpdGlvbnMgKGlkKSB7XFxyXFxuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMuZm9yRWFjaCggZWwgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYoZWwuZGVwYXJ0bWVudF9pZCA9PSBpZCkgcG9zaXRpb25zLnB1c2goZWwpO1xcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9ucztcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGdldEVtcGxveWVlcyAoaWQpIHtcXHJcXG4gICAgICAgICAgICAgICAgbGV0IGVtcGxveWVlcyA9IFtdLFxcclxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zID0gdGhpcy5nZXRQb3NpdGlvbnMoaWQpO1xcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLmZvckVhY2goIHBvcyA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlcy5mb3JFYWNoKCBlbCA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGVsLnBvc2l0aW9uX2lkID09IHBvcy5pZCkgZW1wbG95ZWVzLnB1c2goZWwpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgIH0pOyAgICAgXFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBlbXBsb3llZXM7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBhZGRDb25maXJtKCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEl0ZW0oeyAndGl0bGUnOiB0aGlzLmRlcGFydG1lbnROYW1lIH0pO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmRlcGFydG1lbnRDcmVhdGUgPSBmYWxzZTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGFkZENhbmNlbCgpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50Q3JlYXRlID0gZmFsc2U7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBkZWxldGVEaWFsb2coaXRlbSkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBpdGVtO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZGVsZXRlQ29uZmlybSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5mb3JFYWNoKGVsID0+IHRoaXMuZGVsZXRlSXRlbShlbC5pZCkpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gW107XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkSUQgPSBudWxsO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyU2hvdyA9IHRydWU7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBkZWxldGVDYW5jZWwoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBudWxsO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgY2xvc2UoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTE7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAuLi5tYXBBY3Rpb25zKHtcXHJcXG4gICAgICAgICAgICAgICAgbG9hZEl0ZW1zOiAnZGVwYXJ0bWVudHMvbG9hZCcsXFxyXFxuICAgICAgICAgICAgICAgIGFkZEl0ZW06ICdkZXBhcnRtZW50cy9hZGQnLFxcclxcbiAgICAgICAgICAgICAgICBlZGl0SXRlbTogJ2RlcGFydG1lbnRzL2VkaXQnLFxcclxcbiAgICAgICAgICAgICAgICBkZWxldGVJdGVtOiAnZGVwYXJ0bWVudHMvcmVtb3ZlJ1xcclxcbiAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgICAuYnRuIHtcXHJcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgbGkge1xcclxcbiAgICAgICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4ICMwMDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRhYmxlX19idXR0b25zIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogLTUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRpYWxvZ19fYWN0aXZhdG9yIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogLTMwcHg7XFxyXFxuICAgICAgICBsZWZ0OiA0MHB4O1xcclxcbiAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FyZF9fdGl0bGUge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcmRfX2FjdGlvbnMge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ1dHRvbkVudGVyIHtcXHJcXG4gICAgICAgIGFuaW1hdGlvbjogYnV0dG9uRW50ZXIgLjNzIGN1YmljLWJlemllciguMDksLjksLjQ4LDEuNjQpO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuYnV0dG9uTGVhdmUge1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZSAuM3MgY3ViaWMtYmV6aWVyKC41MiwtMC40NCwuODgsLTAuNDUpO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAa2V5ZnJhbWVzIHJvdXRlckVudGVyIHtcXHJcXG4gICAgICAgIDAlIHtvcGFjaXR5OiAwO31cXHJcXG4gICAgICAgIDEwMCUge29wYWNpdHk6IDE7fVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAa2V5ZnJhbWVzIHJvdXRlckxlYXZlIHtcXHJcXG4gICAgICAgIDAlIHtvcGFjaXR5OiAxO31cXHJcXG4gICAgICAgIDEwMCUge29wYWNpdHk6IDA7fVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcXHJcXG4gICAgICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cXHJcXG4gICAgICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlIHtcXHJcXG4gICAgICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cXHJcXG4gICAgICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xZWU2NzM1ZFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGVsZXRlV2luZG93XCIgbWF4LXdpZHRoPVwiNTAwcHhcIj5cclxuICAgICAgICA8di1jYXJkPlxyXG4gICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkbGluZVwiPnt7ICR0KCdhdHRlbnRpb24nKSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMj57e2RlbGV0ZU1zZ319PC92LWZsZXg+XHJcbiAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIEBjbGljay5uYXRpdmU9XCJkZWxldGVDb25maXJtXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XCJlcnJvclwiIEBjbGljay5uYXRpdmU9XCJkZWxldGVDYW5jZWxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxyXG4gICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgIDwvdi1jYXJkPlxyXG4gICAgPC92LWRpYWxvZz5cclxuXHJcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRlcGFydG1lbnRDcmVhdGVcIiBtYXgtd2lkdGg9XCI1MDBweFwiPlxyXG4gICAgICAgIDx2LWNhcmQ+XHJcbiAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+0J3QvtCy0L7QtSDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtTwvc3Bhbj5cclxuICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMj5cclxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIGxhYmVsPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgdi1tb2RlbD1cImRlcGFydG1lbnROYW1lXCI+PC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cclxuICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgQGNsaWNrLm5hdGl2ZT1cImFkZENvbmZpcm1cIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XHJcbiAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cImVycm9yXCIgQGNsaWNrLm5hdGl2ZT1cImFkZENhbmNlbFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XHJcbiAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgPC92LWNhcmQ+XHJcbiAgICA8L3YtZGlhbG9nPlxyXG5cclxuICAgIFxyXG5cclxuICAgIDx2LWNhcmQ+XHJcbiAgICAgICAgPHYtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgPGgyPnt7ICR0KCdkZXBhcnRtZW50JykgfX08L2gyPlxyXG4gICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cclxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmQtaWNvbj1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdzZWFyY2hfaW5wdXQnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZS1saW5lICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPHYtZGF0YS10YWJsZVxyXG4gICAgICAgICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxyXG4gICAgICAgICAgICA6aXRlbXM9XCJpdGVtc1wiXHJcbiAgICAgICAgICAgIDpzZWFyY2g9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICBpdGVtLWtleT1cImlkXCJcclxuICAgICAgICAgICAgOm5vLXJlc3VsdHMtdGV4dD1cIiR0KCdub19tYXRjaF9mb3VuZCcpXCJcclxuICAgICAgICAgICAgOnJvd3MtcGVyLXBhZ2UtdGV4dD1cIiR0KCdzdHJpbmdzJylcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImVsZXZhdGlvbi0xXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiaXRlbXNcIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cclxuICAgICAgICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmlkIH19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8di1lZGl0LWRpYWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6cmV0dXJuLXZhbHVlLnN5bmM9XCJwcm9wcy5pdGVtLnRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF6eVxyXG4gICAgICAgICAgICAgICAgICAgID4ge3sgcHJvcHMuaXRlbS50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90PVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9wcy5pdGVtLnRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZS1saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiZWRpdEl0ZW0ocHJvcHMuaXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92LWVkaXQtZGlhbG9nPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57eyBnZXRQb3NpdGlvbnMocHJvcHMuaXRlbS5pZCkubGVuZ3RoIH19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57eyBnZXRFbXBsb3llZXMocHJvcHMuaXRlbS5pZCkubGVuZ3RoIH19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZSByb3VuZCBAY2xpY2s9XCJvcGVuSW5mb1BhbmVsKHByb3BzLml0ZW0uaWQpXCI+e3sgJHQoJ2RldGFpbHMnKSB9fTwvdi1idG4+ICAgXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5vLWRhdGFcIj5cclxuICAgICAgICAgICAgICA8di1hbGVydCA6dmFsdWU9XCJ0cnVlXCIgY29sb3I9XCJyZWRcIiBpY29uPVwid2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgINCd0LXRgiDQtNCw0L3QvdGL0YUgOihcclxuICAgICAgICAgICAgICAgIDwvdi1hbGVydD5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3YtZGF0YS10YWJsZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgPHYtYnRuIGZhYiBkYXJrIGxhcmdlIGNvbG9yPVwiY3lhblwiIEBjbGljaz1cImRlcGFydG1lbnRDcmVhdGUgPSB0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8di1pY29uIGRhcms+YWRkPC92LWljb24+XHJcbiAgICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgICAgIDx0cmFuc2l0aW9uIGVudGVyLWFjdGl2ZS1jbGFzcz1cImJ1dHRvbkVudGVyXCIgbGVhdmUtYWN0aXZlLWNsYXNzPVwiYnV0dG9uTGVhdmVcIiBtb2RlPVwib3V0LWluXCI+XHJcbiAgICAgICAgICAgICAgICA8di1idG4gdi1zaG93PVwic2VsZWN0ZWQubGVuZ3RoID4gMFwiIGNsYXNzPVwiZGVsZXRlLWJ0blwiIGZhYiBsYXJnZSBkYXJrIEBjbGljaz1cImRlbGV0ZURpYWxvZyhzZWxlY3RlZClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8di1pY29uPmRlbGV0ZTwvdi1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx2LXNuYWNrYmFyIDp0aW1lb3V0PVwic25hY2tiYXJUaW1lb3V0XCIgdG9wIHYtbW9kZWw9XCJzbmFja2JhclNob3dcIiBtdWx0aS1saW5lIGNvbG9yPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICB7eyAkdCgnZGVsZXRlX2RvbmUnKSB9fVxyXG4gICAgICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cInBpbmtcIiBAY2xpY2submF0aXZlPVwic25hY2tiYXJTaG93ID0gZmFsc2VcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XHJcbiAgICAgICAgPC92LXNuYWNrYmFyPlxyXG4gICAgPC92LWNhcmQ+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7XHJcbiAgICAgICAgbWFwQWN0aW9ucyxcclxuICAgICAgICBtYXBHZXR0ZXJzXHJcbiAgICB9IGZyb20gJ3Z1ZXgnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG1pZGRsZXdhcmU6ICdhdXRoJyxcclxuICAgICAgICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgICAgICAgICAvL9Cf0L7QtNGA0L7QsdC90L7RgdGC0LhcclxuICAgICAgICAgICAgc2hvd0luZm86IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEVtcGxveWVlczogW10sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUG9zaXRpb25zOiBbXSxcclxuICAgICAgICAgICAgLy8g0JLRgdC/0LvRi9Cy0LDRiNC60LhcclxuICAgICAgICAgICAgc25hY2tiYXJTaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgc25hY2tiYXJUaW1lb3V0OiAxMDAwMCxcclxuICAgICAgICAgICAgLy8g0J/QvtC40YHQuiAvINCS0YvQsdC+0YDQutCwXHJcbiAgICAgICAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiBbXSxcclxuICAgICAgICAgICAgZGlhbG9nOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8g0KPQtNCw0LvQtdC90LjQtVxyXG4gICAgICAgICAgICBkZWxldGVXaW5kb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWxldGVDYXRlZ29yeTogbnVsbCxcclxuICAgICAgICAgICAgZGVsTW9kZTogJ3NpbmdsZScsXHJcbiAgICAgICAgICAgIC8v0KHQvtC30LTQsNC90LjQtVxyXG4gICAgICAgICAgICBkZXBhcnRtZW50Q3JlYXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVwYXJ0bWVudE5hbWU6ICcnLFxyXG4gICAgICAgICAgICAvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcclxuICAgICAgICAgICAgaGVhZGVyczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQndC+0LzQtdGAJyxcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1JyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZpcnN0X25hbWUnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQlNC+0LvQttC90L7RgdGC0LXQuScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdsYXN0X25hbWUnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQodC+0YLRgNGD0LTQvdC40LrQvtCyJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3Bvc2l0aW9uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZU1zZygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5zZWxlY3RlZC5sZW5ndGggPT0gMSkgPyB0aGlzLiR0KCdkZWxldGVfaXRlbV9jb25maXJtJykgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHQoJ2RlbGV0ZV9pdGVtc19jb25maXJtJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6ICdkZXBhcnRtZW50cy9kZXBhcnRtZW50cycsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnM6ICdwb3NpdGlvbnMvcG9zaXRpb25zJyxcclxuICAgICAgICAgICAgICAgIGVtcGxveWVlczogJ2VtcGxveWVlcy9lbXBsb3llZXMnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9wZW5JbmZvUGFuZWwoaWQpIHsgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQb3NpdGlvbnMgPSB0aGlzLmdldFBvc2l0aW9ucyhpZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRW1wbG95ZWVzID0gdGhpcy5nZXRFbXBsb3llZXMoaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mbyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFBvc2l0aW9ucyAoaWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9ucy5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZWwuZGVwYXJ0bWVudF9pZCA9PSBpZCkgcG9zaXRpb25zLnB1c2goZWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9ucztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0RW1wbG95ZWVzIChpZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVtcGxveWVlcyA9IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucyA9IHRoaXMuZ2V0UG9zaXRpb25zKGlkKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLmZvckVhY2goIHBvcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZXMuZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggZWwucG9zaXRpb25faWQgPT0gcG9zLmlkKSBlbXBsb3llZXMucHVzaChlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTsgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVtcGxveWVlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWRkQ29uZmlybSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkSXRlbSh7ICd0aXRsZSc6IHRoaXMuZGVwYXJ0bWVudE5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlcGFydG1lbnRDcmVhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWRkQ2FuY2VsKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50Q3JlYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlbGV0ZURpYWxvZyhpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gaXRlbTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlQ29uZmlybSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuZm9yRWFjaChlbCA9PiB0aGlzLmRlbGV0ZUl0ZW0oZWwuaWQpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRlZElEID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlQ2FuY2VsKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDYXRlZ29yeSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbG9zZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLi4ubWFwQWN0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICBsb2FkSXRlbXM6ICdkZXBhcnRtZW50cy9sb2FkJyxcclxuICAgICAgICAgICAgICAgIGFkZEl0ZW06ICdkZXBhcnRtZW50cy9hZGQnLFxyXG4gICAgICAgICAgICAgICAgZWRpdEl0ZW06ICdkZXBhcnRtZW50cy9lZGl0JyxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW06ICdkZXBhcnRtZW50cy9yZW1vdmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcclxuICAgIH1cclxuICAgIC50YWJsZV9fYnV0dG9ucyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZ19fYWN0aXZhdG9yIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtMzBweDtcclxuICAgICAgICBsZWZ0OiA0MHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRfX3RpdGxlIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZF9fYWN0aW9ucyB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbkVudGVyIHtcclxuICAgICAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ1dHRvbkxlYXZlIHtcclxuICAgICAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xyXG4gICAgICAgIDAlIHtvcGFjaXR5OiAwO31cclxuICAgICAgICAxMDAlIHtvcGFjaXR5OiAxO31cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XHJcbiAgICAgICAgMCUge29wYWNpdHk6IDE7fVxyXG4gICAgICAgIDEwMCUge29wYWNpdHk6IDA7fVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcclxuICAgICAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XHJcbiAgICAgICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xyXG4gICAgICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cclxuICAgICAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cclxuICAgICAgfVxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNTAwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRlbGV0ZVdpbmRvdyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVdpbmRvdyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVsZXRlV2luZG93XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiYXR0ZW50aW9uXCIpKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1mbGV4XCIsIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGVsZXRlTXNnKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNvbmZpcm0oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImVycm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlQ2FuY2VsKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI1MDBweFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVwYXJ0bWVudENyZWF0ZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlcGFydG1lbnRDcmVhdGUgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRlcGFydG1lbnRDcmVhdGVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0J3QvtCy0L7QtSDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtVwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kZXBhcnRtZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXBhcnRtZW50TmFtZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRlcGFydG1lbnROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZENvbmZpcm0oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImVycm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkQ2FuY2VsKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJkZXBhcnRtZW50XCIpKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwic2VhcmNoX2lucHV0XCIpLFxuICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZGF0YS10YWJsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgIFwibm8tcmVzdWx0cy10ZXh0XCI6IF92bS4kdChcIm5vX21hdGNoX2ZvdW5kXCIpLFxuICAgICAgICAgICAgICAgIFwicm93cy1wZXItcGFnZS10ZXh0XCI6IF92bS4kdChcInN0cmluZ3NcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uaWQpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1lZGl0LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLXZhbHVlXCI6IHByb3BzLml0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenk6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpyZXR1cm5WYWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChwcm9wcy5pdGVtLCBcInRpdGxlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW0udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRJdGVtKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLml0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQocHJvcHMuaXRlbSwgXCJ0aXRsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb3BzLml0ZW0udGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldFBvc2l0aW9ucyhwcm9wcy5pdGVtLmlkKS5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5nZXRFbXBsb3llZXMocHJvcHMuaXRlbS5pZCkubGVuZ3RoKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgcm91bmQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3BlbkluZm9QYW5lbChwcm9wcy5pdGVtLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJkZXRhaWxzXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgIHsgc2xvdDogXCJuby1kYXRhXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IHRydWUsIGNvbG9yOiBcInJlZFwiLCBpY29uOiBcIndhcm5pbmdcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAg0J3QtdGCINC00LDQvdC90YvRhSA6KFxcclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlX19idXR0b25zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZhYjogXCJcIiwgZGFyazogXCJcIiwgbGFyZ2U6IFwiXCIsIGNvbG9yOiBcImN5YW5cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXBhcnRtZW50Q3JlYXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBkYXJrOiBcIlwiIH0gfSwgW192bS5fdihcImFkZFwiKV0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZW50ZXItYWN0aXZlLWNsYXNzXCI6IFwiYnV0dG9uRW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogXCJidXR0b25MZWF2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBcIm91dC1pblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZC5sZW5ndGggPiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVsZXRlLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZhYjogXCJcIiwgbGFyZ2U6IFwiXCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlRGlhbG9nKF92bS5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZGVsZXRlXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXNuYWNrYmFyXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGltZW91dDogX3ZtLnNuYWNrYmFyVGltZW91dCxcbiAgICAgICAgICAgICAgICB0b3A6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJtdWx0aS1saW5lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiaW5mb1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zbmFja2JhclNob3csXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNuYWNrYmFyU2hvdyA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzbmFja2JhclNob3dcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXHJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiZGVsZXRlX2RvbmVcIikpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxyXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInBpbmtcIiB9LFxuICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5zbmFja2JhclNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJva1wiKSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTFlZTY3MzVkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xZWU2NzM1ZFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiXSwic291cmNlUm9vdCI6IiJ9