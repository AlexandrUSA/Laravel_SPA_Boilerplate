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
exports.push([module.i, "\n.btn[data-v-1ee6735d] {\n    text-transform: none !important;\n}\nli[data-v-1ee6735d] {\n    margin: 5px !important;\n    -webkit-box-shadow: 0 0 15px #000;\n            box-shadow: 0 0 15px #000;\n}\n.table__buttons[data-v-1ee6735d] {\n    position: absolute;\n    bottom: -50px;\n}\n.dialog__activator[data-v-1ee6735d] {\n    position: absolute;\n    bottom: -30px;\n    left: 40px;\n    z-index: 1;\n}\n.card__title[data-v-1ee6735d] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.card__actions[data-v-1ee6735d] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.buttonEnter[data-v-1ee6735d] {\n    -webkit-animation: buttonEnter-data-v-1ee6735d .3s cubic-bezier(.09,.9,.48,1.64);\n            animation: buttonEnter-data-v-1ee6735d .3s cubic-bezier(.09,.9,.48,1.64);\n}\n.buttonLeave[data-v-1ee6735d] {\n    -webkit-animation: buttonLeave-data-v-1ee6735d .3s cubic-bezier(.52,-0.44,.88,-0.45);\n            animation: buttonLeave-data-v-1ee6735d .3s cubic-bezier(.52,-0.44,.88,-0.45);\n}\n@-webkit-keyframes routerEnter-data-v-1ee6735d {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@keyframes routerEnter-data-v-1ee6735d {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@-webkit-keyframes routerLeave-data-v-1ee6735d {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@keyframes routerLeave-data-v-1ee6735d {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@-webkit-keyframes buttonEnter-data-v-1ee6735d {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@keyframes buttonEnter-data-v-1ee6735d {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@-webkit-keyframes buttonLeave-data-v-1ee6735d {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n@keyframes buttonLeave-data-v-1ee6735d {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/departments/resources/assets/js/pages/admin/departments/List.vue"],"names":[],"mappings":";AAuOA;IACA,gCAAA;CACA;AAGA;IACA,uBAAA;IACA,kCAAA;YAAA,0BAAA;CACA;AACA;IACA,mBAAA;IACA,cAAA;CACA;AAEA;IACA,mBAAA;IACA,cAAA;IACA,WAAA;IACA,WAAA;CACA;AAEA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;CACA;AAEA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;CACA;AAEA;IACA,iFAAA;YAAA,yEAAA;CACA;AAEA;IACA,qFAAA;YAAA,6EAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n<div>\r\n    <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\r\n        <v-card>\r\n            <v-card-title>\r\n                <span class=\"headline\">{{ $t('attention') }}</span>\r\n            </v-card-title>\r\n            <v-card-text>\r\n                <v-flex xs12>{{deleteMsg}}</v-flex>\r\n            </v-card-text>\r\n            <v-card-actions>\r\n                <v-btn outline color=\"info\" @click.native=\"deleteConfirm\">{{ $t('ok') }}</v-btn>\r\n                <v-btn outline color=\"error\" @click.native=\"deleteCancel\">{{ $t('cancel') }}</v-btn>\r\n            </v-card-actions>\r\n        </v-card>\r\n    </v-dialog>\r\n\r\n    <v-dialog v-model=\"departmentCreate\" max-width=\"500px\">\r\n        <v-card>\r\n            <v-card-title>\r\n                <span class=\"headline\">Новое подразделение</span>\r\n            </v-card-title>\r\n            <v-card-text>\r\n                <v-flex xs12>\r\n                    <v-text-field label=\"Наименование\" v-model=\"departmentName\"></v-text-field>\r\n                </v-flex>\r\n            </v-card-text>\r\n            <v-card-actions>\r\n                <v-btn outline color=\"info\" @click.native=\"addConfirm\">{{ $t('ok') }}</v-btn>\r\n                <v-btn outline color=\"error\" @click.native=\"addCancel\">{{ $t('cancel') }}</v-btn>\r\n            </v-card-actions>\r\n        </v-card>\r\n    </v-dialog>\r\n\r\n    \r\n\r\n    <v-card>\r\n        <v-card-title>\r\n            <h2>{{ $t('department') }}</h2>\r\n            <v-spacer></v-spacer>\r\n            <v-text-field\r\n                        append-icon=\"search\"\r\n                        :label=\"$t('search_input')\"\r\n                        single-line         \r\n                        v-model=\"search\"\r\n            ></v-text-field>\r\n        </v-card-title>\r\n        <v-data-table\r\n            :headers=\"headers\"\r\n            :items=\"items\"\r\n            :search=\"search\"\r\n            item-key=\"id\"\r\n            :no-results-text=\"$t('no_match_found')\"\r\n            :rows-per-page-text=\"$t('strings')\"\r\n            class=\"elevation-1\"\r\n        >\r\n            <template slot=\"items\" slot-scope=\"props\">\r\n                <td>{{ props.item.id }}</td>\r\n                <td>\r\n                    <v-edit-dialog\r\n                        :return-value.sync=\"props.item.title\"\r\n                        lazy\r\n                    > {{ props.item.title }}\r\n                        <v-text-field\r\n                            slot=\"input\"\r\n                            label=\"Edit\"\r\n                            v-model=\"props.item.title\"\r\n                            single-line\r\n                            counter\r\n                            @change=\"editItem(props.item)\"\r\n                        ></v-text-field>\r\n                    </v-edit-dialog>\r\n                </td>\r\n                <td>{{ getPositions(props.item.id).length }}</td>\r\n                <td>{{ getEmployees(props.item.id).length }}</td>\r\n                <td>\r\n                    <v-btn outline round @click=\"openInfoPanel(props.item.id)\">{{ $t('details') }}</v-btn>   \r\n                </td>\r\n            </template>\r\n            <template slot=\"no-data\">\r\n              <v-alert :value=\"true\" color=\"red\" icon=\"warning\">\r\n                    Нет данных :(\r\n                </v-alert>\r\n            </template>\r\n        </v-data-table>\r\n        <div class=\"table__buttons\">\r\n            <v-btn fab dark large color=\"cyan\" @click=\"departmentCreate = true\">\r\n                <v-icon dark>add</v-icon>\r\n            </v-btn>\r\n            <transition enter-active-class=\"buttonEnter\" leave-active-class=\"buttonLeave\" mode=\"out-in\">\r\n                <v-btn v-show=\"selected.length > 0\" class=\"delete-btn\" fab large dark @click=\"deleteDialog(selected)\">\r\n                    <v-icon>delete</v-icon>\r\n                </v-btn>\r\n            </transition>\r\n        </div>\r\n        <v-snackbar :timeout=\"snackbarTimeout\" top v-model=\"snackbarShow\" multi-line color=\"info\">\r\n            {{ $t('delete_done') }}\r\n            <v-btn flat color=\"pink\" @click.native=\"snackbarShow = false\">{{ $t('ok') }}</v-btn>\r\n        </v-snackbar>\r\n    </v-card>\r\n</div>\r\n</template>\r\n\r\n<script>\r\n    import {\r\n        mapActions,\r\n        mapGetters\r\n    } from 'vuex';\r\n    export default {\r\n        middleware: 'auth',\r\n        data: () => ({\r\n            //Подробности\r\n            showInfo: false,\r\n            selectedEmployees: [],\r\n            selectedPositions: [],\r\n            // Всплывашки\r\n            snackbarShow: false,\r\n            snackbarTimeout: 10000,\r\n            // Поиск / Выборка\r\n            search: '',\r\n            selected: [],\r\n            dialog: false,\r\n            // Удаление\r\n            deleteWindow: false,\r\n            deleteCategory: null,\r\n            delMode: 'single',\r\n            //Создание\r\n            departmentCreate: false,\r\n            departmentName: '',\r\n            // Заголовки таблицы\r\n            headers: [\r\n                {\r\n                    text: 'Номер',\r\n                    align: 'left',\r\n                    sortable: false\r\n                },\r\n                {\r\n                    text: 'Наименование',\r\n                    value: 'first_name'\r\n                },\r\n                {\r\n                    text: 'Должностей',\r\n                    value: 'last_name'\r\n                },\r\n                {\r\n                    text: 'Сотрудников',\r\n                    value: 'position'\r\n                },\r\n                {\r\n                    text: '',\r\n                    sortable: false\r\n                }\r\n            ]\r\n        }),\r\n        computed: {\r\n            deleteMsg() {\r\n                return (this.selected.length == 1) ? this.$t('delete_item_confirm') :\r\n                    this.$t('delete_items_confirm');\r\n            },\r\n            ...mapGetters({\r\n                items: 'departments/departments',\r\n                positions: 'positions/positions',\r\n                employees: 'employees/employees'\r\n            })\r\n        },\r\n        methods: {\r\n            openInfoPanel(id) {   \r\n                this.selectedPositions = this.getPositions(id);\r\n                this.selectedEmployees = this.getEmployees(id);\r\n                console.log(this.selectedEmployees);\r\n                console.log(this.selectedPositions);\r\n                this.showInfo = true;\r\n            },\r\n            getPositions (id) {\r\n                let positions = [];\r\n\r\n                this.positions.forEach( el => {\r\n                    if(el.department_id == id) positions.push(el);\r\n                });\r\n\r\n                return positions;\r\n            },\r\n            getEmployees (id) {\r\n                let employees = [],\r\n                    positions = this.getPositions(id);\r\n                \r\n                positions.forEach( pos => {\r\n                    this.employees.forEach( el => {\r\n                        if( el.position_id == pos.id) employees.push(el);\r\n                    });\r\n                });     \r\n                return employees;\r\n            },\r\n            addConfirm() {\r\n                this.addItem({ 'title': this.departmentName });\r\n                this.departmentCreate = false;\r\n            },\r\n            addCancel() {\r\n                this.departmentCreate = false;\r\n            },\r\n            deleteDialog(item) {\r\n                this.deleteWindow = true;\r\n                this.deleteCategory = item;\r\n            },\r\n            deleteConfirm() {\r\n                this.selected.forEach(el => this.deleteItem(el.id));\r\n                this.selected = [];\r\n                this.deleteWindow = false;\r\n                this.editedID = null;\r\n                this.snackbarShow = true;\r\n            },\r\n            deleteCancel() {\r\n                this.deleteCategory = null;\r\n                this.deleteWindow = false;\r\n            },\r\n            close() {\r\n                this.dialog = false;\r\n                this.editedItem = Object.assign({}, this.defaultItem);\r\n                this.editedIndex = -1;\r\n            },\r\n            ...mapActions({\r\n                loadItems: 'departments/load',\r\n                addItem: 'departments/add',\r\n                editItem: 'departments/edit',\r\n                deleteItem: 'departments/remove'\r\n            })\r\n        }\r\n    }\r\n\r\n</script>\r\n\r\n<style scoped>\r\n    .btn {\r\n        text-transform: none !important;\r\n    }\r\n\r\n\r\n    li {\r\n        margin: 5px !important;\r\n        box-shadow: 0 0 15px #000;\r\n    }\r\n    .table__buttons {\r\n        position: absolute;\r\n        bottom: -50px;\r\n    }\r\n\r\n    .dialog__activator {\r\n        position: absolute;\r\n        bottom: -30px;\r\n        left: 40px;\r\n        z-index: 1;\r\n    }\r\n\r\n    .card__title {\r\n        justify-content: center;\r\n    }\r\n\r\n    .card__actions {\r\n        justify-content: center;\r\n    }\r\n\r\n    .buttonEnter {\r\n        animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\r\n      }\r\n\r\n      .buttonLeave {\r\n        animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\r\n      }\r\n\r\n      @keyframes routerEnter {\r\n        0% {opacity: 0;}\r\n        100% {opacity: 1;}\r\n      }\r\n\r\n      @keyframes routerLeave {\r\n        0% {opacity: 1;}\r\n        100% {opacity: 0;}\r\n      }\r\n\r\n      @keyframes buttonEnter {\r\n        0% {transform: scale(0);}\r\n        100% {transform: scale(1);}\r\n      }\r\n\r\n      @keyframes buttonLeave {\r\n        0% {transform: scale(1);}\r\n        100% {transform: scale(0);}\r\n      }\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

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
            console.log(this.selectedEmployees);
            console.log(this.selectedPositions);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWU/OTg2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlPzkxMzYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZT9iYTI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXdNO0FBQ3hNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFxTDtBQUNyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQThPO0FBQzlPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SkFBNEosaUZBQWlGO0FBQzdPLHFLQUFxSyxpRkFBaUY7QUFDdFA7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0Esa0RBQW1ELHNDQUFzQyxHQUFHLHVCQUF1Qiw2QkFB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QUEwQiwwQkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzExLmI5YTQzNjFmOGE1OTU2ZGYyODI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWU2NzM1ZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWU2NzM1ZFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTGlzdC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTFlZTY3MzVkXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZGVwYXJ0bWVudHNcXFxcTGlzdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWVlNjczNWRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xZWU2NzM1ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWVlNjczNWRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMGI5ZmNkNzFcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWVlNjczNWRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWU2NzM1ZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTFlZTY3MzVkXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5idG5bZGF0YS12LTFlZTY3MzVkXSB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbmxpW2RhdGEtdi0xZWU2NzM1ZF0ge1xcbiAgICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxNXB4ICMwMDA7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXG59XFxuLnRhYmxlX19idXR0b25zW2RhdGEtdi0xZWU2NzM1ZF0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTUwcHg7XFxufVxcbi5kaWFsb2dfX2FjdGl2YXRvcltkYXRhLXYtMWVlNjczNWRdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC0zMHB4O1xcbiAgICBsZWZ0OiA0MHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG4uY2FyZF9fdGl0bGVbZGF0YS12LTFlZTY3MzVkXSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNhcmRfX2FjdGlvbnNbZGF0YS12LTFlZTY3MzVkXSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmJ1dHRvbkVudGVyW2RhdGEtdi0xZWU2NzM1ZF0ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYnV0dG9uRW50ZXItZGF0YS12LTFlZTY3MzVkIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcXG4gICAgICAgICAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyLWRhdGEtdi0xZWU2NzM1ZCAuM3MgY3ViaWMtYmV6aWVyKC4wOSwuOSwuNDgsMS42NCk7XFxufVxcbi5idXR0b25MZWF2ZVtkYXRhLXYtMWVlNjczNWRdIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJ1dHRvbkxlYXZlLWRhdGEtdi0xZWU2NzM1ZCAuM3MgY3ViaWMtYmV6aWVyKC41MiwtMC40NCwuODgsLTAuNDUpO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUtZGF0YS12LTFlZTY3MzVkIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3V0ZXJFbnRlci1kYXRhLXYtMWVlNjczNWQge1xcbjAlIHtvcGFjaXR5OiAwO1xcbn1cXG4xMDAlIHtvcGFjaXR5OiAxO1xcbn1cXG59XFxuQGtleWZyYW1lcyByb3V0ZXJFbnRlci1kYXRhLXYtMWVlNjczNWQge1xcbjAlIHtvcGFjaXR5OiAwO1xcbn1cXG4xMDAlIHtvcGFjaXR5OiAxO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdXRlckxlYXZlLWRhdGEtdi0xZWU2NzM1ZCB7XFxuMCUge29wYWNpdHk6IDE7XFxufVxcbjEwMCUge29wYWNpdHk6IDA7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdXRlckxlYXZlLWRhdGEtdi0xZWU2NzM1ZCB7XFxuMCUge29wYWNpdHk6IDE7XFxufVxcbjEwMCUge29wYWNpdHk6IDA7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnV0dG9uRW50ZXItZGF0YS12LTFlZTY3MzVkIHtcXG4wJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO3RyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbjEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBidXR0b25FbnRlci1kYXRhLXYtMWVlNjczNWQge1xcbjAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO3RyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnV0dG9uTGVhdmUtZGF0YS12LTFlZTY3MzVkIHtcXG4wJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO3RyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbjEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTt0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG59XFxuQGtleWZyYW1lcyBidXR0b25MZWF2ZS1kYXRhLXYtMWVlNjczNWQge1xcbjAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO3RyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXVPQTtJQUNBLGdDQUFBO0NBQ0E7QUFHQTtJQUNBLHVCQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtDQUNBO0FBQ0E7SUFDQSxtQkFBQTtJQUNBLGNBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7Q0FDQTtBQUVBO0lBQ0EseUJBQUE7UUFBQSxzQkFBQTtZQUFBLHdCQUFBO0NBQ0E7QUFFQTtJQUNBLHlCQUFBO1FBQUEsc0JBQUE7WUFBQSx3QkFBQTtDQUNBO0FBRUE7SUFDQSxpRkFBQTtZQUFBLHlFQUFBO0NBQ0E7QUFFQTtJQUNBLHFGQUFBO1lBQUEsNkVBQUE7Q0FDQTtBQUVBO0FBQ0EsSUFBQSxXQUFBO0NBQUE7QUFDQSxNQUFBLFdBQUE7Q0FBQTtDQUNBO0FBSEE7QUFDQSxJQUFBLFdBQUE7Q0FBQTtBQUNBLE1BQUEsV0FBQTtDQUFBO0NBQ0E7QUFFQTtBQUNBLElBQUEsV0FBQTtDQUFBO0FBQ0EsTUFBQSxXQUFBO0NBQUE7Q0FDQTtBQUhBO0FBQ0EsSUFBQSxXQUFBO0NBQUE7QUFDQSxNQUFBLFdBQUE7Q0FBQTtDQUNBO0FBRUE7QUFDQSxJQUFBLDRCQUFBLG9CQUFBO0NBQUE7QUFDQSxNQUFBLDRCQUFBLG9CQUFBO0NBQUE7Q0FDQTtBQUhBO0FBQ0EsSUFBQSw0QkFBQSxvQkFBQTtDQUFBO0FBQ0EsTUFBQSw0QkFBQSxvQkFBQTtDQUFBO0NBQ0E7QUFFQTtBQUNBLElBQUEsNEJBQUEsb0JBQUE7Q0FBQTtBQUNBLE1BQUEsNEJBQUEsb0JBQUE7Q0FBQTtDQUNBO0FBSEE7QUFDQSxJQUFBLDRCQUFBLG9CQUFBO0NBQUE7QUFDQSxNQUFBLDRCQUFBLG9CQUFBO0NBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiTGlzdC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbjxkaXY+XFxyXFxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVxcXCJkZWxldGVXaW5kb3dcXFwiIG1heC13aWR0aD1cXFwiNTAwcHhcXFwiPlxcclxcbiAgICAgICAgPHYtY2FyZD5cXHJcXG4gICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGxpbmVcXFwiPnt7ICR0KCdhdHRlbnRpb24nKSB9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgICA8di1jYXJkLXRleHQ+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMj57e2RlbGV0ZU1zZ319PC92LWZsZXg+XFxyXFxuICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVxcXCJpbmZvXFxcIiBAY2xpY2submF0aXZlPVxcXCJkZWxldGVDb25maXJtXFxcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVxcXCJlcnJvclxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiZGVsZXRlQ2FuY2VsXFxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxcclxcbiAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgICA8L3YtY2FyZD5cXHJcXG4gICAgPC92LWRpYWxvZz5cXHJcXG5cXHJcXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XFxcImRlcGFydG1lbnRDcmVhdGVcXFwiIG1heC13aWR0aD1cXFwiNTAwcHhcXFwiPlxcclxcbiAgICAgICAgPHYtY2FyZD5cXHJcXG4gICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGxpbmVcXFwiPtCd0L7QstC+0LUg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40LU8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIGxhYmVsPVxcXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcXFwiIHYtbW9kZWw9XFxcImRlcGFydG1lbnROYW1lXFxcIj48L3YtdGV4dC1maWVsZD5cXHJcXG4gICAgICAgICAgICAgICAgPC92LWZsZXg+XFxyXFxuICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVxcXCJpbmZvXFxcIiBAY2xpY2submF0aXZlPVxcXCJhZGRDb25maXJtXFxcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVxcXCJlcnJvclxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiYWRkQ2FuY2VsXFxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxcclxcbiAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgICA8L3YtY2FyZD5cXHJcXG4gICAgPC92LWRpYWxvZz5cXHJcXG5cXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIDx2LWNhcmQ+XFxyXFxuICAgICAgICA8di1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgICAgIDxoMj57eyAkdCgnZGVwYXJ0bWVudCcpIH19PC9oMj5cXHJcXG4gICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cXHJcXG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kLWljb249XFxcInNlYXJjaFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XFxcIiR0KCdzZWFyY2hfaW5wdXQnKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGUtbGluZSAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInNlYXJjaFxcXCJcXHJcXG4gICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XFxyXFxuICAgICAgICA8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgIDx2LWRhdGEtdGFibGVcXHJcXG4gICAgICAgICAgICA6aGVhZGVycz1cXFwiaGVhZGVyc1xcXCJcXHJcXG4gICAgICAgICAgICA6aXRlbXM9XFxcIml0ZW1zXFxcIlxcclxcbiAgICAgICAgICAgIDpzZWFyY2g9XFxcInNlYXJjaFxcXCJcXHJcXG4gICAgICAgICAgICBpdGVtLWtleT1cXFwiaWRcXFwiXFxyXFxuICAgICAgICAgICAgOm5vLXJlc3VsdHMtdGV4dD1cXFwiJHQoJ25vX21hdGNoX2ZvdW5kJylcXFwiXFxyXFxuICAgICAgICAgICAgOnJvd3MtcGVyLXBhZ2UtdGV4dD1cXFwiJHQoJ3N0cmluZ3MnKVxcXCJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZWxldmF0aW9uLTFcXFwiXFxyXFxuICAgICAgICA+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIml0ZW1zXFxcIiBzbG90LXNjb3BlPVxcXCJwcm9wc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmlkIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHYtZWRpdC1kaWFsb2dcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6cmV0dXJuLXZhbHVlLnN5bmM9XFxcInByb3BzLml0ZW0udGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF6eVxcclxcbiAgICAgICAgICAgICAgICAgICAgPiB7eyBwcm9wcy5pdGVtLnRpdGxlIH19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90PVxcXCJpbnB1dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcIkVkaXRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInByb3BzLml0ZW0udGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZS1saW5lXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cXFwiZWRpdEl0ZW0ocHJvcHMuaXRlbSlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC92LWVkaXQtZGlhbG9nPlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3sgZ2V0UG9zaXRpb25zKHByb3BzLml0ZW0uaWQpLmxlbmd0aCB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57eyBnZXRFbXBsb3llZXMocHJvcHMuaXRlbS5pZCkubGVuZ3RoIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgcm91bmQgQGNsaWNrPVxcXCJvcGVuSW5mb1BhbmVsKHByb3BzLml0ZW0uaWQpXFxcIj57eyAkdCgnZGV0YWlscycpIH19PC92LWJ0bj4gICBcXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJuby1kYXRhXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDx2LWFsZXJ0IDp2YWx1ZT1cXFwidHJ1ZVxcXCIgY29sb3I9XFxcInJlZFxcXCIgaWNvbj1cXFwid2FybmluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICDQndC10YIg0LTQsNC90L3Ri9GFIDooXFxyXFxuICAgICAgICAgICAgICAgIDwvdi1hbGVydD5cXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgPC92LWRhdGEtdGFibGU+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZV9fYnV0dG9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgPHYtYnRuIGZhYiBkYXJrIGxhcmdlIGNvbG9yPVxcXCJjeWFuXFxcIiBAY2xpY2s9XFxcImRlcGFydG1lbnRDcmVhdGUgPSB0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtaWNvbiBkYXJrPmFkZDwvdi1pY29uPlxcclxcbiAgICAgICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPHRyYW5zaXRpb24gZW50ZXItYWN0aXZlLWNsYXNzPVxcXCJidXR0b25FbnRlclxcXCIgbGVhdmUtYWN0aXZlLWNsYXNzPVxcXCJidXR0b25MZWF2ZVxcXCIgbW9kZT1cXFwib3V0LWluXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIHYtc2hvdz1cXFwic2VsZWN0ZWQubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcImRlbGV0ZS1idG5cXFwiIGZhYiBsYXJnZSBkYXJrIEBjbGljaz1cXFwiZGVsZXRlRGlhbG9nKHNlbGVjdGVkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8di1pY29uPmRlbGV0ZTwvdi1pY29uPlxcclxcbiAgICAgICAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPHYtc25hY2tiYXIgOnRpbWVvdXQ9XFxcInNuYWNrYmFyVGltZW91dFxcXCIgdG9wIHYtbW9kZWw9XFxcInNuYWNrYmFyU2hvd1xcXCIgbXVsdGktbGluZSBjb2xvcj1cXFwiaW5mb1xcXCI+XFxyXFxuICAgICAgICAgICAge3sgJHQoJ2RlbGV0ZV9kb25lJykgfX1cXHJcXG4gICAgICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cXFwicGlua1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwic25hY2tiYXJTaG93ID0gZmFsc2VcXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgIDwvdi1zbmFja2Jhcj5cXHJcXG4gICAgPC92LWNhcmQ+XFxyXFxuPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBpbXBvcnQge1xcclxcbiAgICAgICAgbWFwQWN0aW9ucyxcXHJcXG4gICAgICAgIG1hcEdldHRlcnNcXHJcXG4gICAgfSBmcm9tICd2dWV4JztcXHJcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICAgICAgbWlkZGxld2FyZTogJ2F1dGgnLFxcclxcbiAgICAgICAgZGF0YTogKCkgPT4gKHtcXHJcXG4gICAgICAgICAgICAvL9Cf0L7QtNGA0L7QsdC90L7RgdGC0LhcXHJcXG4gICAgICAgICAgICBzaG93SW5mbzogZmFsc2UsXFxyXFxuICAgICAgICAgICAgc2VsZWN0ZWRFbXBsb3llZXM6IFtdLFxcclxcbiAgICAgICAgICAgIHNlbGVjdGVkUG9zaXRpb25zOiBbXSxcXHJcXG4gICAgICAgICAgICAvLyDQktGB0L/Qu9GL0LLQsNGI0LrQuFxcclxcbiAgICAgICAgICAgIHNuYWNrYmFyU2hvdzogZmFsc2UsXFxyXFxuICAgICAgICAgICAgc25hY2tiYXJUaW1lb3V0OiAxMDAwMCxcXHJcXG4gICAgICAgICAgICAvLyDQn9C+0LjRgdC6IC8g0JLRi9Cx0L7RgNC60LBcXHJcXG4gICAgICAgICAgICBzZWFyY2g6ICcnLFxcclxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBbXSxcXHJcXG4gICAgICAgICAgICBkaWFsb2c6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIC8vINCj0LTQsNC70LXQvdC40LVcXHJcXG4gICAgICAgICAgICBkZWxldGVXaW5kb3c6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIGRlbGV0ZUNhdGVnb3J5OiBudWxsLFxcclxcbiAgICAgICAgICAgIGRlbE1vZGU6ICdzaW5nbGUnLFxcclxcbiAgICAgICAgICAgIC8v0KHQvtC30LTQsNC90LjQtVxcclxcbiAgICAgICAgICAgIGRlcGFydG1lbnRDcmVhdGU6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIGRlcGFydG1lbnROYW1lOiAnJyxcXHJcXG4gICAgICAgICAgICAvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcXHJcXG4gICAgICAgICAgICBoZWFkZXJzOiBbXFxyXFxuICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQndC+0LzQtdGAJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtScsXFxyXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZpcnN0X25hbWUnXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQlNC+0LvQttC90L7RgdGC0LXQuScsXFxyXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2xhc3RfbmFtZSdcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ9Ch0L7RgtGA0YPQtNC90LjQutC+0LInLFxcclxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdwb3NpdGlvbidcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXFxyXFxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIF1cXHJcXG4gICAgICAgIH0pLFxcclxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXHJcXG4gICAgICAgICAgICBkZWxldGVNc2coKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5zZWxlY3RlZC5sZW5ndGggPT0gMSkgPyB0aGlzLiR0KCdkZWxldGVfaXRlbV9jb25maXJtJykgOlxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kdCgnZGVsZXRlX2l0ZW1zX2NvbmZpcm0nKTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xcclxcbiAgICAgICAgICAgICAgICBpdGVtczogJ2RlcGFydG1lbnRzL2RlcGFydG1lbnRzJyxcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXFxyXFxuICAgICAgICAgICAgICAgIGVtcGxveWVlczogJ2VtcGxveWVlcy9lbXBsb3llZXMnXFxyXFxuICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgb3BlbkluZm9QYW5lbChpZCkgeyAgIFxcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUG9zaXRpb25zID0gdGhpcy5nZXRQb3NpdGlvbnMoaWQpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRW1wbG95ZWVzID0gdGhpcy5nZXRFbXBsb3llZXMoaWQpO1xcclxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkRW1wbG95ZWVzKTtcXHJcXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFBvc2l0aW9ucyk7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8gPSB0cnVlO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZ2V0UG9zaXRpb25zIChpZCkge1xcclxcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25zID0gW107XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zLmZvckVhY2goIGVsID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmKGVsLmRlcGFydG1lbnRfaWQgPT0gaWQpIHBvc2l0aW9ucy5wdXNoKGVsKTtcXHJcXG4gICAgICAgICAgICAgICAgfSk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbnM7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBnZXRFbXBsb3llZXMgKGlkKSB7XFxyXFxuICAgICAgICAgICAgICAgIGxldCBlbXBsb3llZXMgPSBbXSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucyA9IHRoaXMuZ2V0UG9zaXRpb25zKGlkKTtcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCBwb3MgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZXMuZm9yRWFjaCggZWwgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBlbC5wb3NpdGlvbl9pZCA9PSBwb3MuaWQpIGVtcGxveWVlcy5wdXNoKGVsKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICB9KTsgICAgIFxcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wbG95ZWVzO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgYWRkQ29uZmlybSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtKHsgJ3RpdGxlJzogdGhpcy5kZXBhcnRtZW50TmFtZSB9KTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50Q3JlYXRlID0gZmFsc2U7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBhZGRDYW5jZWwoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudENyZWF0ZSA9IGZhbHNlO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZGVsZXRlRGlhbG9nKGl0ZW0pIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSB0cnVlO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gaXRlbTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGRlbGV0ZUNvbmZpcm0oKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuZm9yRWFjaChlbCA9PiB0aGlzLmRlbGV0ZUl0ZW0oZWwuaWQpKTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRlZElEID0gbnVsbDtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFja2JhclNob3cgPSB0cnVlO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZGVsZXRlQ2FuY2VsKCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gbnVsbDtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGNsb3NlKCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgLi4ubWFwQWN0aW9ucyh7XFxyXFxuICAgICAgICAgICAgICAgIGxvYWRJdGVtczogJ2RlcGFydG1lbnRzL2xvYWQnLFxcclxcbiAgICAgICAgICAgICAgICBhZGRJdGVtOiAnZGVwYXJ0bWVudHMvYWRkJyxcXHJcXG4gICAgICAgICAgICAgICAgZWRpdEl0ZW06ICdkZXBhcnRtZW50cy9lZGl0JyxcXHJcXG4gICAgICAgICAgICAgICAgZGVsZXRlSXRlbTogJ2RlcGFydG1lbnRzL3JlbW92ZSdcXHJcXG4gICAgICAgICAgICB9KVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gICAgLmJ0biB7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGxpIHtcXHJcXG4gICAgICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwO1xcclxcbiAgICB9XFxyXFxuICAgIC50YWJsZV9fYnV0dG9ucyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBib3R0b206IC01MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kaWFsb2dfX2FjdGl2YXRvciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBib3R0b206IC0zMHB4O1xcclxcbiAgICAgICAgbGVmdDogNDBweDtcXHJcXG4gICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcmRfX3RpdGxlIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXJkX19hY3Rpb25zIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idXR0b25FbnRlciB7XFxyXFxuICAgICAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmJ1dHRvbkxlYXZlIHtcXHJcXG4gICAgICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUgLjNzIGN1YmljLWJlemllciguNTIsLTAuNDQsLjg4LC0wLjQ1KTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQGtleWZyYW1lcyByb3V0ZXJFbnRlciB7XFxyXFxuICAgICAgICAwJSB7b3BhY2l0eTogMDt9XFxyXFxuICAgICAgICAxMDAlIHtvcGFjaXR5OiAxO31cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XFxyXFxuICAgICAgICAwJSB7b3BhY2l0eTogMTt9XFxyXFxuICAgICAgICAxMDAlIHtvcGFjaXR5OiAwO31cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQGtleWZyYW1lcyBidXR0b25FbnRlciB7XFxyXFxuICAgICAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XFxyXFxuICAgICAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQGtleWZyYW1lcyBidXR0b25MZWF2ZSB7XFxyXFxuICAgICAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XFxyXFxuICAgICAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMWVlNjczNWRcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCI8dGVtcGxhdGU+XHJcbjxkaXY+XHJcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRlbGV0ZVdpbmRvd1wiIG1heC13aWR0aD1cIjUwMHB4XCI+XHJcbiAgICAgICAgPHYtY2FyZD5cclxuICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj57eyAkdCgnYXR0ZW50aW9uJykgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICA8di1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTI+e3tkZWxldGVNc2d9fTwvdi1mbGV4PlxyXG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cImluZm9cIiBAY2xpY2submF0aXZlPVwiZGVsZXRlQ29uZmlybVwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cclxuICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiZXJyb3JcIiBAY2xpY2submF0aXZlPVwiZGVsZXRlQ2FuY2VsXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj5cclxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICA8L3YtY2FyZD5cclxuICAgIDwvdi1kaWFsb2c+XHJcblxyXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkZXBhcnRtZW50Q3JlYXRlXCIgbWF4LXdpZHRoPVwiNTAwcHhcIj5cclxuICAgICAgICA8di1jYXJkPlxyXG4gICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkbGluZVwiPtCd0L7QstC+0LUg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40LU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICA8di1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCBsYWJlbD1cItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtVwiIHYtbW9kZWw9XCJkZXBhcnRtZW50TmFtZVwiPjwvdi10ZXh0LWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC92LWZsZXg+XHJcbiAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIEBjbGljay5uYXRpdmU9XCJhZGRDb25maXJtXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XCJlcnJvclwiIEBjbGljay5uYXRpdmU9XCJhZGRDYW5jZWxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxyXG4gICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgIDwvdi1jYXJkPlxyXG4gICAgPC92LWRpYWxvZz5cclxuXHJcbiAgICBcclxuXHJcbiAgICA8di1jYXJkPlxyXG4gICAgICAgIDx2LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgIDxoMj57eyAkdCgnZGVwYXJ0bWVudCcpIH19PC9oMj5cclxuICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XHJcbiAgICAgICAgICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kLWljb249XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnc2VhcmNoX2lucHV0JylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGUtbGluZSAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxyXG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDx2LWRhdGEtdGFibGVcclxuICAgICAgICAgICAgOmhlYWRlcnM9XCJoZWFkZXJzXCJcclxuICAgICAgICAgICAgOml0ZW1zPVwiaXRlbXNcIlxyXG4gICAgICAgICAgICA6c2VhcmNoPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgaXRlbS1rZXk9XCJpZFwiXHJcbiAgICAgICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XCIkdCgnbm9fbWF0Y2hfZm91bmQnKVwiXHJcbiAgICAgICAgICAgIDpyb3dzLXBlci1wYWdlLXRleHQ9XCIkdCgnc3RyaW5ncycpXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJlbGV2YXRpb24tMVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1zXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtZWRpdC1kaWFsb2dcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnJldHVybi12YWx1ZS5zeW5jPVwicHJvcHMuaXRlbS50aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhenlcclxuICAgICAgICAgICAgICAgICAgICA+IHt7IHByb3BzLml0ZW0udGl0bGUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvcHMuaXRlbS50aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGUtbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cImVkaXRJdGVtKHByb3BzLml0ZW0pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdi1lZGl0LWRpYWxvZz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3sgZ2V0UG9zaXRpb25zKHByb3BzLml0ZW0uaWQpLmxlbmd0aCB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3sgZ2V0RW1wbG95ZWVzKHByb3BzLml0ZW0uaWQpLmxlbmd0aCB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgcm91bmQgQGNsaWNrPVwib3BlbkluZm9QYW5lbChwcm9wcy5pdGVtLmlkKVwiPnt7ICR0KCdkZXRhaWxzJykgfX08L3YtYnRuPiAgIFxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJuby1kYXRhXCI+XHJcbiAgICAgICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVwidHJ1ZVwiIGNvbG9yPVwicmVkXCIgaWNvbj1cIndhcm5pbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICDQndC10YIg0LTQsNC90L3Ri9GFIDooXHJcbiAgICAgICAgICAgICAgICA8L3YtYWxlcnQ+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC92LWRhdGEtdGFibGU+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgIDx2LWJ0biBmYWIgZGFyayBsYXJnZSBjb2xvcj1cImN5YW5cIiBAY2xpY2s9XCJkZXBhcnRtZW50Q3JlYXRlID0gdHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHYtaWNvbiBkYXJrPmFkZDwvdi1pY29uPlxyXG4gICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICA8dHJhbnNpdGlvbiBlbnRlci1hY3RpdmUtY2xhc3M9XCJidXR0b25FbnRlclwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cImJ1dHRvbkxlYXZlXCIgbW9kZT1cIm91dC1pblwiPlxyXG4gICAgICAgICAgICAgICAgPHYtYnRuIHYtc2hvdz1cInNlbGVjdGVkLmxlbmd0aCA+IDBcIiBjbGFzcz1cImRlbGV0ZS1idG5cIiBmYWIgbGFyZ2UgZGFyayBAY2xpY2s9XCJkZWxldGVEaWFsb2coc2VsZWN0ZWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5kZWxldGU8L3YtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8di1zbmFja2JhciA6dGltZW91dD1cInNuYWNrYmFyVGltZW91dFwiIHRvcCB2LW1vZGVsPVwic25hY2tiYXJTaG93XCIgbXVsdGktbGluZSBjb2xvcj1cImluZm9cIj5cclxuICAgICAgICAgICAge3sgJHQoJ2RlbGV0ZV9kb25lJykgfX1cclxuICAgICAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XCJwaW5rXCIgQGNsaWNrLm5hdGl2ZT1cInNuYWNrYmFyU2hvdyA9IGZhbHNlXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG4gICAgICAgIDwvdi1zbmFja2Jhcj5cclxuICAgIDwvdi1jYXJkPlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIG1hcEFjdGlvbnMsXHJcbiAgICAgICAgbWFwR2V0dGVyc1xyXG4gICAgfSBmcm9tICd2dWV4JztcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBtaWRkbGV3YXJlOiAnYXV0aCcsXHJcbiAgICAgICAgZGF0YTogKCkgPT4gKHtcclxuICAgICAgICAgICAgLy/Qn9C+0LTRgNC+0LHQvdC+0YHRgtC4XHJcbiAgICAgICAgICAgIHNob3dJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRFbXBsb3llZXM6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFBvc2l0aW9uczogW10sXHJcbiAgICAgICAgICAgIC8vINCS0YHQv9C70YvQstCw0YjQutC4XHJcbiAgICAgICAgICAgIHNuYWNrYmFyU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNuYWNrYmFyVGltZW91dDogMTAwMDAsXHJcbiAgICAgICAgICAgIC8vINCf0L7QuNGB0LogLyDQktGL0LHQvtGA0LrQsFxyXG4gICAgICAgICAgICBzZWFyY2g6ICcnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogW10sXHJcbiAgICAgICAgICAgIGRpYWxvZzogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vINCj0LTQsNC70LXQvdC40LVcclxuICAgICAgICAgICAgZGVsZXRlV2luZG93OiBmYWxzZSxcclxuICAgICAgICAgICAgZGVsZXRlQ2F0ZWdvcnk6IG51bGwsXHJcbiAgICAgICAgICAgIGRlbE1vZGU6ICdzaW5nbGUnLFxyXG4gICAgICAgICAgICAvL9Ch0L7Qt9C00LDQvdC40LVcclxuICAgICAgICAgICAgZGVwYXJ0bWVudENyZWF0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlcGFydG1lbnROYW1lOiAnJyxcclxuICAgICAgICAgICAgLy8g0JfQsNCz0L7Qu9C+0LLQutC4INGC0LDQsdC70LjRhtGLXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0J3QvtC80LXRgCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdmaXJzdF9uYW1lJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0JTQvtC70LbQvdC+0YHRgtC10LknLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbGFzdF9uYW1lJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0KHQvtGC0YDRg9C00L3QuNC60L7QsicsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdwb3NpdGlvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBkZWxldGVNc2coKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09IDEpID8gdGhpcy4kdCgnZGVsZXRlX2l0ZW1fY29uZmlybScpIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiR0KCdkZWxldGVfaXRlbXNfY29uZmlybScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAnZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMnLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZXM6ICdlbXBsb3llZXMvZW1wbG95ZWVzJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvcGVuSW5mb1BhbmVsKGlkKSB7ICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUG9zaXRpb25zID0gdGhpcy5nZXRQb3NpdGlvbnMoaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEVtcGxveWVlcyA9IHRoaXMuZ2V0RW1wbG95ZWVzKGlkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRFbXBsb3llZXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFBvc2l0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0UG9zaXRpb25zIChpZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zLmZvckVhY2goIGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihlbC5kZXBhcnRtZW50X2lkID09IGlkKSBwb3NpdGlvbnMucHVzaChlbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zaXRpb25zO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRFbXBsb3llZXMgKGlkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW1wbG95ZWVzID0gW10sXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zID0gdGhpcy5nZXRQb3NpdGlvbnMoaWQpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMuZm9yRWFjaCggcG9zID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlcy5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBlbC5wb3NpdGlvbl9pZCA9PSBwb3MuaWQpIGVtcGxveWVlcy5wdXNoKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pOyAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wbG95ZWVzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhZGRDb25maXJtKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtKHsgJ3RpdGxlJzogdGhpcy5kZXBhcnRtZW50TmFtZSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVwYXJ0bWVudENyZWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhZGRDYW5jZWwoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlcGFydG1lbnRDcmVhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlRGlhbG9nKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBpdGVtO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWxldGVDb25maXJtKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5mb3JFYWNoKGVsID0+IHRoaXMuZGVsZXRlSXRlbShlbC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkSUQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFja2JhclNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWxldGVDYW5jZWwoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsb3NlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAuLi5tYXBBY3Rpb25zKHtcclxuICAgICAgICAgICAgICAgIGxvYWRJdGVtczogJ2RlcGFydG1lbnRzL2xvYWQnLFxyXG4gICAgICAgICAgICAgICAgYWRkSXRlbTogJ2RlcGFydG1lbnRzL2FkZCcsXHJcbiAgICAgICAgICAgICAgICBlZGl0SXRlbTogJ2RlcGFydG1lbnRzL2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlSXRlbTogJ2RlcGFydG1lbnRzL3JlbW92ZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuYnRuIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlX19idXR0b25zIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGlhbG9nX19hY3RpdmF0b3Ige1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC0zMHB4O1xyXG4gICAgICAgIGxlZnQ6IDQwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZF9fdGl0bGUge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkX19hY3Rpb25zIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uRW50ZXIge1xyXG4gICAgICAgIGFuaW1hdGlvbjogYnV0dG9uRW50ZXIgLjNzIGN1YmljLWJlemllciguMDksLjksLjQ4LDEuNjQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnV0dG9uTGVhdmUge1xyXG4gICAgICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUgLjNzIGN1YmljLWJlemllciguNTIsLTAuNDQsLjg4LC0wLjQ1KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyByb3V0ZXJFbnRlciB7XHJcbiAgICAgICAgMCUge29wYWNpdHk6IDA7fVxyXG4gICAgICAgIDEwMCUge29wYWNpdHk6IDE7fVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIHJvdXRlckxlYXZlIHtcclxuICAgICAgICAwJSB7b3BhY2l0eTogMTt9XHJcbiAgICAgICAgMTAwJSB7b3BhY2l0eTogMDt9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgYnV0dG9uRW50ZXIge1xyXG4gICAgICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cclxuICAgICAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBidXR0b25MZWF2ZSB7XHJcbiAgICAgICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxyXG4gICAgICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxyXG4gICAgICB9XHJcblxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI1MDBweFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVsZXRlV2luZG93LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGVsZXRlV2luZG93ID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkZWxldGVXaW5kb3dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJhdHRlbnRpb25cIikpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWZsZXhcIiwgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kZWxldGVNc2cpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJpbmZvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlQ29uZmlybSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJva1wiKSkpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiZXJyb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVDYW5jZWwoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiY2FuY2VsXCIpKSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kZXBhcnRtZW50Q3JlYXRlLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGVwYXJ0bWVudENyZWF0ZSA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVwYXJ0bWVudENyZWF0ZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLQndC+0LLQvtC1INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1XCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRlcGFydG1lbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlcGFydG1lbnROYW1lID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVwYXJ0bWVudE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJpbmZvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkQ29uZmlybSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJva1wiKSkpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiZXJyb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hZGRDYW5jZWwoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiY2FuY2VsXCIpKSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZC10aXRsZVwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImRlcGFydG1lbnRcIikpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJzZWFyY2hfaW5wdXRcIiksXG4gICAgICAgICAgICAgICAgICBcInNpbmdsZS1saW5lXCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1kYXRhLXRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0xXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgXCJpdGVtLWtleVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgXCJuby1yZXN1bHRzLXRleHRcIjogX3ZtLiR0KFwibm9fbWF0Y2hfZm91bmRcIiksXG4gICAgICAgICAgICAgICAgXCJyb3dzLXBlci1wYWdlLXRleHRcIjogX3ZtLiR0KFwic3RyaW5nc1wiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbXNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5pZCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWVkaXQtZGlhbG9nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm4tdmFsdWVcIjogcHJvcHMuaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF6eTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnJldHVyblZhbHVlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KHByb3BzLml0ZW0sIFwidGl0bGVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1saW5lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdEl0ZW0ocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcHMuaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChwcm9wcy5pdGVtLCBcInRpdGxlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvcHMuaXRlbS50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZ2V0UG9zaXRpb25zKHByb3BzLml0ZW0uaWQpLmxlbmd0aCkpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldEVtcGxveWVlcyhwcm9wcy5pdGVtLmlkKS5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCByb3VuZDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGVuSW5mb1BhbmVsKHByb3BzLml0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImRldGFpbHNcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgeyBzbG90OiBcIm5vLWRhdGFcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogdHJ1ZSwgY29sb3I6IFwicmVkXCIsIGljb246IFwid2FybmluZ1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICDQndC10YIg0LTQsNC90L3Ri9GFIDooXFxyXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGVfX2J1dHRvbnNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmFiOiBcIlwiLCBkYXJrOiBcIlwiLCBsYXJnZTogXCJcIiwgY29sb3I6IFwiY3lhblwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlcGFydG1lbnRDcmVhdGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGRhcms6IFwiXCIgfSB9LCBbX3ZtLl92KFwiYWRkXCIpXSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJidXR0b25FbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcImJ1dHRvbkxlYXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IFwib3V0LWluXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWQubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZWxldGUtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmFiOiBcIlwiLCBsYXJnZTogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVEaWFsb2coX3ZtLnNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJkZWxldGVcIildKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtc25hY2tiYXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBfdm0uc25hY2tiYXJUaW1lb3V0LFxuICAgICAgICAgICAgICAgIHRvcDogXCJcIixcbiAgICAgICAgICAgICAgICBcIm11bHRpLWxpbmVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNuYWNrYmFyU2hvdyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc25hY2tiYXJTaG93ID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNuYWNrYmFyU2hvd1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcclxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJkZWxldGVfZG9uZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXHJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicGlua1wiIH0sXG4gICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNuYWNrYmFyU2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMWVlNjczNWRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTFlZTY3MzVkXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSJdLCJzb3VyY2VSb290IjoiIn0=