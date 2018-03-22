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
exports.push([module.i, "\n.btn[data-v-1ee6735d] {\n    text-transform: none !important;\n}\nli[data-v-1ee6735d] {\n    margin: 5px !important;\n    -webkit-box-shadow: 0 0 15px #000;\n            box-shadow: 0 0 15px #000;\n}\n.table__buttons[data-v-1ee6735d] {\n    position: absolute;\n    bottom: -50px;\n}\n.dialog__activator[data-v-1ee6735d] {\n    position: absolute;\n    bottom: -30px;\n    left: 40px;\n    z-index: 1;\n}\n.card__title[data-v-1ee6735d] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.card__actions[data-v-1ee6735d] {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.buttonEnter[data-v-1ee6735d] {\n    -webkit-animation: buttonEnter-data-v-1ee6735d .3s cubic-bezier(.09,.9,.48,1.64);\n            animation: buttonEnter-data-v-1ee6735d .3s cubic-bezier(.09,.9,.48,1.64);\n}\n.buttonLeave[data-v-1ee6735d] {\n    -webkit-animation: buttonLeave-data-v-1ee6735d .3s cubic-bezier(.52,-0.44,.88,-0.45);\n            animation: buttonLeave-data-v-1ee6735d .3s cubic-bezier(.52,-0.44,.88,-0.45);\n}\n@-webkit-keyframes routerEnter-data-v-1ee6735d {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@keyframes routerEnter-data-v-1ee6735d {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@-webkit-keyframes routerLeave-data-v-1ee6735d {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@keyframes routerLeave-data-v-1ee6735d {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@-webkit-keyframes buttonEnter-data-v-1ee6735d {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@keyframes buttonEnter-data-v-1ee6735d {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@-webkit-keyframes buttonLeave-data-v-1ee6735d {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n@keyframes buttonLeave-data-v-1ee6735d {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/departments/resources/assets/js/pages/admin/departments/List.vue"],"names":[],"mappings":";AA2OA;IACA,gCAAA;CACA;AAGA;IACA,uBAAA;IACA,kCAAA;YAAA,0BAAA;CACA;AACA;IACA,mBAAA;IACA,cAAA;CACA;AAEA;IACA,mBAAA;IACA,cAAA;IACA,WAAA;IACA,WAAA;CACA;AAEA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;CACA;AAEA;IACA,yBAAA;QAAA,sBAAA;YAAA,wBAAA;CACA;AAEA;IACA,iFAAA;YAAA,yEAAA;CACA;AAEA;IACA,qFAAA;YAAA,6EAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n<div>\r\n    <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\r\n        <v-card>\r\n            <v-card-title>\r\n                <span class=\"headline\">{{ $t('attention') }}</span>\r\n            </v-card-title>\r\n            <v-card-text>\r\n                <v-flex xs12>{{deleteMsg}}</v-flex>\r\n            </v-card-text>\r\n            <v-card-actions>\r\n                <v-btn outline color=\"info\" @click.native=\"deleteConfirm\">{{ $t('ok') }}</v-btn>\r\n                <v-btn outline color=\"error\" @click.native=\"deleteCancel\">{{ $t('cancel') }}</v-btn>\r\n            </v-card-actions>\r\n        </v-card>\r\n    </v-dialog>\r\n\r\n    <v-dialog v-model=\"departmentCreate\" max-width=\"500px\">\r\n        <v-card>\r\n            <v-card-title>\r\n                <span class=\"headline\">Новое подразделение</span>\r\n            </v-card-title>\r\n            <v-card-text>\r\n                <v-flex xs12>\r\n                    <v-text-field label=\"Наименование\" v-model=\"departmentName\"></v-text-field>\r\n                </v-flex>\r\n            </v-card-text>\r\n            <v-card-actions>\r\n                <v-btn outline color=\"info\" @click.native=\"addConfirm\">{{ $t('ok') }}</v-btn>\r\n                <v-btn outline color=\"error\" @click.native=\"addCancel\">{{ $t('cancel') }}</v-btn>\r\n            </v-card-actions>\r\n        </v-card>\r\n    </v-dialog>\r\n\r\n    <v-dialog v-model=\"departmentCreate\" max-width=\"500px\">\r\n        <v-card>\r\n            <v-card-title>\r\n                <span class=\"headline\">Новое подразделение</span>\r\n            </v-card-title>\r\n            <v-card-text>\r\n                <v-flex xs12>\r\n                    <v-text-field label=\"Наименование\" v-model=\"departmentName\"></v-text-field>\r\n                </v-flex>\r\n            </v-card-text>\r\n            <v-card-actions>\r\n                <v-btn outline color=\"info\" @click.native=\"addConfirm\">{{ $t('ok') }}</v-btn>\r\n                <v-btn outline color=\"error\" @click.native=\"addCancel\">{{ $t('cancel') }}</v-btn>\r\n            </v-card-actions>\r\n        </v-card>\r\n    </v-dialog>\r\n\r\n    <v-card>\r\n        <v-card-title>\r\n            <h2>{{ $t('department') }}</h2>\r\n            <v-spacer></v-spacer>\r\n            <v-text-field\r\n                        append-icon=\"search\"\r\n                        :label=\"$t('search_input')\"\r\n                        single-line         \r\n                        v-model=\"search\"\r\n            ></v-text-field>\r\n        </v-card-title>\r\n        <v-data-table\r\n            :headers=\"headers\"\r\n            :items=\"items\"\r\n            :search=\"search\"\r\n            item-key=\"id\"\r\n            :no-results-text=\"$t('no_match_found')\"\r\n            :rows-per-page-text=\"$t('strings')\"\r\n            class=\"elevation-1\"\r\n        >\r\n            <template slot=\"items\" slot-scope=\"props\">\r\n                <td>{{ props.item.id }}</td>\r\n                <td>\r\n                    <v-edit-dialog\r\n                        :return-value.sync=\"props.item.title\"\r\n                        lazy\r\n                    > {{ props.item.title }}\r\n                        <v-text-field\r\n                            slot=\"input\"\r\n                            label=\"Edit\"\r\n                            v-model=\"props.item.title\"\r\n                            single-line\r\n                            counter\r\n                            @change=\"editItem(props.item)\"\r\n                        ></v-text-field>\r\n                    </v-edit-dialog>\r\n                </td>\r\n                <td>{{ getPositions(props.item.id).length }}</td>\r\n                <td>{{ getEmployees(props.item.id).length }}</td>\r\n                <td>\r\n                    <v-btn outline round>{{ $t('details') }}</v-btn>   \r\n                </td>\r\n            </template>\r\n            <template slot=\"no-data\">\r\n              <v-alert :value=\"true\" color=\"red\" icon=\"warning\">\r\n                    Нет данных :(\r\n                </v-alert>\r\n            </template>\r\n        </v-data-table>\r\n        <div class=\"table__buttons\">\r\n            <v-btn fab dark large color=\"cyan\" @click=\"departmentCreate = true\">\r\n                <v-icon dark>add</v-icon>\r\n            </v-btn>\r\n            <transition enter-active-class=\"buttonEnter\" leave-active-class=\"buttonLeave\" mode=\"out-in\">\r\n                <v-btn v-show=\"selected.length > 0\" class=\"delete-btn\" fab large dark @click=\"deleteDialog(selected)\">\r\n                    <v-icon>delete</v-icon>\r\n                </v-btn>\r\n            </transition>\r\n        </div>\r\n        <v-snackbar :timeout=\"snackbarTimeout\" top v-model=\"snackbarShow\" multi-line color=\"info\">\r\n            {{ $t('delete_done') }}\r\n            <v-btn flat color=\"pink\" @click.native=\"snackbarShow = false\">{{ $t('ok') }}</v-btn>\r\n        </v-snackbar>\r\n    </v-card>\r\n</div>\r\n</template>\r\n\r\n<script>\r\n    import {\r\n        mapActions,\r\n        mapGetters\r\n    } from 'vuex';\r\n    export default {\r\n        middleware: 'auth',\r\n        data: () => ({\r\n            //Подробности\r\n            showInfo: false,\r\n            // Всплывашки\r\n            snackbarShow: false,\r\n            snackbarTimeout: 10000,\r\n            // Поиск / Выборка\r\n            search: '',\r\n            selected: [],\r\n            dialog: false,\r\n            // Удаление\r\n            deleteWindow: false,\r\n            deleteCategory: null,\r\n            delMode: 'single',\r\n            //Создание\r\n            departmentCreate: false,\r\n            departmentName: '',\r\n            // Заголовки таблицы\r\n            headers: [\r\n                {\r\n                    text: 'Номер',\r\n                    align: 'left',\r\n                    sortable: false\r\n                },\r\n                {\r\n                    text: 'Наименование',\r\n                    value: 'first_name'\r\n                },\r\n                {\r\n                    text: 'Должностей',\r\n                    value: 'last_name'\r\n                },\r\n                {\r\n                    text: 'Сотрудников',\r\n                    value: 'position'\r\n                },\r\n                {\r\n                    text: '',\r\n                    sortable: false\r\n                }\r\n            ]\r\n        }),\r\n        computed: {\r\n            deleteMsg() {\r\n                return (this.selected.length == 1) ? this.$t('delete_item_confirm') :\r\n                    this.$t('delete_items_confirm');\r\n            },\r\n            ...mapGetters({\r\n                items: 'departments/departments',\r\n                positions: 'positions/positions',\r\n                employees: 'employees/employees'\r\n            })\r\n        },\r\n        methods: {\r\n            getPositions (id) {\r\n                let positions = []\r\n                this.positions.forEach( el => {\r\n                    if(el.department_id == id) positions.push(el);\r\n                });\r\n                return positions;\r\n            },\r\n            getEmployees (id) {\r\n                let employees = [],\r\n                    positions = this.getPositions(id);\r\n                \r\n                positions.forEach( pos => {\r\n                    this.employees.forEach( el => {\r\n                        if( el.position_id == pos.id) employees.push(el);\r\n                    });\r\n                });     \r\n                return employees;\r\n            },\r\n            addConfirm() {\r\n                this.addItem({ 'title': this.departmentName });\r\n                this.departmentCreate = false;\r\n            },\r\n            addCancel() {\r\n                this.departmentCreate = false;\r\n            },\r\n            deleteDialog(item) {\r\n                this.deleteWindow = true;\r\n                this.deleteCategory = item;\r\n            },\r\n            deleteConfirm() {\r\n                this.selected.forEach(el => this.deleteItem(el.id));\r\n                this.selected = [];\r\n                this.deleteWindow = false;\r\n                this.editedID = null;\r\n                this.snackbarShow = true;\r\n            },\r\n            deleteCancel() {\r\n                this.deleteCategory = null;\r\n                this.deleteWindow = false;\r\n            },\r\n            close() {\r\n                this.dialog = false;\r\n                this.editedItem = Object.assign({}, this.defaultItem);\r\n                this.editedIndex = -1;\r\n            },\r\n            ...mapActions({\r\n                loadItems: 'departments/load',\r\n                addItem: 'departments/add',\r\n                editItem: 'departments/edit',\r\n                deleteItem: 'departments/remove'\r\n            })\r\n        }\r\n    }\r\n\r\n</script>\r\n\r\n<style scoped>\r\n    .btn {\r\n        text-transform: none !important;\r\n    }\r\n\r\n\r\n    li {\r\n        margin: 5px !important;\r\n        box-shadow: 0 0 15px #000;\r\n    }\r\n    .table__buttons {\r\n        position: absolute;\r\n        bottom: -50px;\r\n    }\r\n\r\n    .dialog__activator {\r\n        position: absolute;\r\n        bottom: -30px;\r\n        left: 40px;\r\n        z-index: 1;\r\n    }\r\n\r\n    .card__title {\r\n        justify-content: center;\r\n    }\r\n\r\n    .card__actions {\r\n        justify-content: center;\r\n    }\r\n\r\n    .buttonEnter {\r\n        animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\r\n      }\r\n\r\n      .buttonLeave {\r\n        animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\r\n      }\r\n\r\n      @keyframes routerEnter {\r\n        0% {opacity: 0;}\r\n        100% {opacity: 1;}\r\n      }\r\n\r\n      @keyframes routerLeave {\r\n        0% {opacity: 1;}\r\n        100% {opacity: 0;}\r\n      }\r\n\r\n      @keyframes buttonEnter {\r\n        0% {transform: scale(0);}\r\n        100% {transform: scale(1);}\r\n      }\r\n\r\n      @keyframes buttonLeave {\r\n        0% {transform: scale(1);}\r\n        100% {transform: scale(0);}\r\n      }\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

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
//
//
//
//
//
//
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
                          _c("v-btn", { attrs: { outline: "", round: "" } }, [
                            _vm._v(_vm._s(_vm.$t("details")))
                          ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWU/OTg2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlPzkxMzYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZT9iYTI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXdNO0FBQ3hNO0FBQ0E7QUFDQTtBQUNBLDRDQUFnVDtBQUNoVDtBQUNBLDhDQUFxTDtBQUNyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQThPO0FBQzlPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SkFBNEosaUZBQWlGO0FBQzdPLHFLQUFxSyxpRkFBaUY7QUFDdFA7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0Esa0RBQW1ELHNDQUFzQyxHQUFHLHVCQUF1Qiw2QkFB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QTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsK0JBQStCLFNBQVMsV0FBVyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0JBQStCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBCQUEwQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMTEuNTljN2Q4NzhlYjkwNzJmYjljNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFlZTY3MzVkXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTGlzdC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTFlZTY3MzVkXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMWVlNjczNWRcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxkZXBhcnRtZW50c1xcXFxMaXN0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xZWU2NzM1ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFlZTY3MzVkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWU2NzM1ZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIwYjlmY2Q3MVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWU2NzM1ZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFlZTY3MzVkXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMWVlNjczNWRcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJ0bltkYXRhLXYtMWVlNjczNWRdIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcXG59XFxubGlbZGF0YS12LTFlZTY3MzVkXSB7XFxuICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwO1xcbn1cXG4udGFibGVfX2J1dHRvbnNbZGF0YS12LTFlZTY3MzVkXSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNTBweDtcXG59XFxuLmRpYWxvZ19fYWN0aXZhdG9yW2RhdGEtdi0xZWU2NzM1ZF0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTMwcHg7XFxuICAgIGxlZnQ6IDQwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbi5jYXJkX190aXRsZVtkYXRhLXYtMWVlNjczNWRdIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2FyZF9fYWN0aW9uc1tkYXRhLXYtMWVlNjczNWRdIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYnV0dG9uRW50ZXJbZGF0YS12LTFlZTY3MzVkXSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidXR0b25FbnRlci1kYXRhLXYtMWVlNjczNWQgLjNzIGN1YmljLWJlemllciguMDksLjksLjQ4LDEuNjQpO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYnV0dG9uRW50ZXItZGF0YS12LTFlZTY3MzVkIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcXG59XFxuLmJ1dHRvbkxlYXZlW2RhdGEtdi0xZWU2NzM1ZF0ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYnV0dG9uTGVhdmUtZGF0YS12LTFlZTY3MzVkIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZS1kYXRhLXYtMWVlNjczNWQgLjNzIGN1YmljLWJlemllciguNTIsLTAuNDQsLjg4LC0wLjQ1KTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdXRlckVudGVyLWRhdGEtdi0xZWU2NzM1ZCB7XFxuMCUge29wYWNpdHk6IDA7XFxufVxcbjEwMCUge29wYWNpdHk6IDE7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdXRlckVudGVyLWRhdGEtdi0xZWU2NzM1ZCB7XFxuMCUge29wYWNpdHk6IDA7XFxufVxcbjEwMCUge29wYWNpdHk6IDE7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm91dGVyTGVhdmUtZGF0YS12LTFlZTY3MzVkIHtcXG4wJSB7b3BhY2l0eTogMTtcXG59XFxuMTAwJSB7b3BhY2l0eTogMDtcXG59XFxufVxcbkBrZXlmcmFtZXMgcm91dGVyTGVhdmUtZGF0YS12LTFlZTY3MzVkIHtcXG4wJSB7b3BhY2l0eTogMTtcXG59XFxuMTAwJSB7b3BhY2l0eTogMDtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBidXR0b25FbnRlci1kYXRhLXYtMWVlNjczNWQge1xcbjAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO3RyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGJ1dHRvbkVudGVyLWRhdGEtdi0xZWU2NzM1ZCB7XFxuMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTt0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4xMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBidXR0b25MZWF2ZS1kYXRhLXYtMWVlNjczNWQge1xcbjAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO3RyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlLWRhdGEtdi0xZWU2NzM1ZCB7XFxuMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4xMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvd2ViL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMk9BO0lBQ0EsZ0NBQUE7Q0FDQTtBQUdBO0lBQ0EsdUJBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0NBQ0E7QUFDQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtDQUNBO0FBRUE7SUFDQSx5QkFBQTtRQUFBLHNCQUFBO1lBQUEsd0JBQUE7Q0FDQTtBQUVBO0lBQ0EseUJBQUE7UUFBQSxzQkFBQTtZQUFBLHdCQUFBO0NBQ0E7QUFFQTtJQUNBLGlGQUFBO1lBQUEseUVBQUE7Q0FDQTtBQUVBO0lBQ0EscUZBQUE7WUFBQSw2RUFBQTtDQUNBO0FBRUE7QUFDQSxJQUFBLFdBQUE7Q0FBQTtBQUNBLE1BQUEsV0FBQTtDQUFBO0NBQ0E7QUFIQTtBQUNBLElBQUEsV0FBQTtDQUFBO0FBQ0EsTUFBQSxXQUFBO0NBQUE7Q0FDQTtBQUVBO0FBQ0EsSUFBQSxXQUFBO0NBQUE7QUFDQSxNQUFBLFdBQUE7Q0FBQTtDQUNBO0FBSEE7QUFDQSxJQUFBLFdBQUE7Q0FBQTtBQUNBLE1BQUEsV0FBQTtDQUFBO0NBQ0E7QUFFQTtBQUNBLElBQUEsNEJBQUEsb0JBQUE7Q0FBQTtBQUNBLE1BQUEsNEJBQUEsb0JBQUE7Q0FBQTtDQUNBO0FBSEE7QUFDQSxJQUFBLDRCQUFBLG9CQUFBO0NBQUE7QUFDQSxNQUFBLDRCQUFBLG9CQUFBO0NBQUE7Q0FDQTtBQUVBO0FBQ0EsSUFBQSw0QkFBQSxvQkFBQTtDQUFBO0FBQ0EsTUFBQSw0QkFBQSxvQkFBQTtDQUFBO0NBQ0E7QUFIQTtBQUNBLElBQUEsNEJBQUEsb0JBQUE7Q0FBQTtBQUNBLE1BQUEsNEJBQUEsb0JBQUE7Q0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJMaXN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuPGRpdj5cXHJcXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XFxcImRlbGV0ZVdpbmRvd1xcXCIgbWF4LXdpZHRoPVxcXCI1MDBweFxcXCI+XFxyXFxuICAgICAgICA8di1jYXJkPlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkbGluZVxcXCI+e3sgJHQoJ2F0dGVudGlvbicpIH19PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgICAgICAgPHYtZmxleCB4czEyPnt7ZGVsZXRlTXNnfX08L3YtZmxleD5cXHJcXG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImluZm9cXFwiIEBjbGljay5uYXRpdmU9XFxcImRlbGV0ZUNvbmZpcm1cXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImVycm9yXFxcIiBAY2xpY2submF0aXZlPVxcXCJkZWxldGVDYW5jZWxcXFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgIDwvdi1jYXJkPlxcclxcbiAgICA8L3YtZGlhbG9nPlxcclxcblxcclxcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwiZGVwYXJ0bWVudENyZWF0ZVxcXCIgbWF4LXdpZHRoPVxcXCI1MDBweFxcXCI+XFxyXFxuICAgICAgICA8di1jYXJkPlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkbGluZVxcXCI+0J3QvtCy0L7QtSDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgICA8di1jYXJkLXRleHQ+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XFxcItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtVxcXCIgdi1tb2RlbD1cXFwiZGVwYXJ0bWVudE5hbWVcXFwiPjwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cXHJcXG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImluZm9cXFwiIEBjbGljay5uYXRpdmU9XFxcImFkZENvbmZpcm1cXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImVycm9yXFxcIiBAY2xpY2submF0aXZlPVxcXCJhZGRDYW5jZWxcXFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgIDwvdi1jYXJkPlxcclxcbiAgICA8L3YtZGlhbG9nPlxcclxcblxcclxcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwiZGVwYXJ0bWVudENyZWF0ZVxcXCIgbWF4LXdpZHRoPVxcXCI1MDBweFxcXCI+XFxyXFxuICAgICAgICA8di1jYXJkPlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkbGluZVxcXCI+0J3QvtCy0L7QtSDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgICA8di1jYXJkLXRleHQ+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XFxcItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtVxcXCIgdi1tb2RlbD1cXFwiZGVwYXJ0bWVudE5hbWVcXFwiPjwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cXHJcXG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImluZm9cXFwiIEBjbGljay5uYXRpdmU9XFxcImFkZENvbmZpcm1cXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImVycm9yXFxcIiBAY2xpY2submF0aXZlPVxcXCJhZGRDYW5jZWxcXFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgIDwvdi1jYXJkPlxcclxcbiAgICA8L3YtZGlhbG9nPlxcclxcblxcclxcbiAgICA8di1jYXJkPlxcclxcbiAgICAgICAgPHYtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgICA8aDI+e3sgJHQoJ2RlcGFydG1lbnQnKSB9fTwvaDI+XFxyXFxuICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxyXFxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZC1pY29uPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVxcXCIkdCgnc2VhcmNoX2lucHV0JylcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlLWxpbmUgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICA8di1kYXRhLXRhYmxlXFxyXFxuICAgICAgICAgICAgOmhlYWRlcnM9XFxcImhlYWRlcnNcXFwiXFxyXFxuICAgICAgICAgICAgOml0ZW1zPVxcXCJpdGVtc1xcXCJcXHJcXG4gICAgICAgICAgICA6c2VhcmNoPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICAgICAgaXRlbS1rZXk9XFxcImlkXFxcIlxcclxcbiAgICAgICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XFxcIiR0KCdub19tYXRjaF9mb3VuZCcpXFxcIlxcclxcbiAgICAgICAgICAgIDpyb3dzLXBlci1wYWdlLXRleHQ9XFxcIiR0KCdzdHJpbmdzJylcXFwiXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImVsZXZhdGlvbi0xXFxcIlxcclxcbiAgICAgICAgPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJpdGVtc1xcXCIgc2xvdC1zY29wZT1cXFwicHJvcHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LWVkaXQtZGlhbG9nXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgOnJldHVybi12YWx1ZS5zeW5jPVxcXCJwcm9wcy5pdGVtLnRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhenlcXHJcXG4gICAgICAgICAgICAgICAgICAgID4ge3sgcHJvcHMuaXRlbS50aXRsZSB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cXFwiaW5wdXRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJFZGl0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJwcm9wcy5pdGVtLnRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGUtbGluZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XFxcImVkaXRJdGVtKHByb3BzLml0ZW0pXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdi1lZGl0LWRpYWxvZz5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7IGdldFBvc2l0aW9ucyhwcm9wcy5pdGVtLmlkKS5sZW5ndGggfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3sgZ2V0RW1wbG95ZWVzKHByb3BzLml0ZW0uaWQpLmxlbmd0aCB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIHJvdW5kPnt7ICR0KCdkZXRhaWxzJykgfX08L3YtYnRuPiAgIFxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIm5vLWRhdGFcXFwiPlxcclxcbiAgICAgICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVxcXCJ0cnVlXFxcIiBjb2xvcj1cXFwicmVkXFxcIiBpY29uPVxcXCJ3YXJuaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgINCd0LXRgiDQtNCw0L3QvdGL0YUgOihcXHJcXG4gICAgICAgICAgICAgICAgPC92LWFsZXJ0PlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8L3YtZGF0YS10YWJsZT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlX19idXR0b25zXFxcIj5cXHJcXG4gICAgICAgICAgICA8di1idG4gZmFiIGRhcmsgbGFyZ2UgY29sb3I9XFxcImN5YW5cXFwiIEBjbGljaz1cXFwiZGVwYXJ0bWVudENyZWF0ZSA9IHRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8di1pY29uIGRhcms+YWRkPC92LWljb24+XFxyXFxuICAgICAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgICAgICA8dHJhbnNpdGlvbiBlbnRlci1hY3RpdmUtY2xhc3M9XFxcImJ1dHRvbkVudGVyXFxcIiBsZWF2ZS1hY3RpdmUtY2xhc3M9XFxcImJ1dHRvbkxlYXZlXFxcIiBtb2RlPVxcXCJvdXQtaW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8di1idG4gdi1zaG93PVxcXCJzZWxlY3RlZC5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwiZGVsZXRlLWJ0blxcXCIgZmFiIGxhcmdlIGRhcmsgQGNsaWNrPVxcXCJkZWxldGVEaWFsb2coc2VsZWN0ZWQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LWljb24+ZGVsZXRlPC92LWljb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8di1zbmFja2JhciA6dGltZW91dD1cXFwic25hY2tiYXJUaW1lb3V0XFxcIiB0b3Agdi1tb2RlbD1cXFwic25hY2tiYXJTaG93XFxcIiBtdWx0aS1saW5lIGNvbG9yPVxcXCJpbmZvXFxcIj5cXHJcXG4gICAgICAgICAgICB7eyAkdCgnZGVsZXRlX2RvbmUnKSB9fVxcclxcbiAgICAgICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVxcXCJwaW5rXFxcIiBAY2xpY2submF0aXZlPVxcXCJzbmFja2JhclNob3cgPSBmYWxzZVxcXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxcclxcbiAgICAgICAgPC92LXNuYWNrYmFyPlxcclxcbiAgICA8L3YtY2FyZD5cXHJcXG48L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCB7XFxyXFxuICAgICAgICBtYXBBY3Rpb25zLFxcclxcbiAgICAgICAgbWFwR2V0dGVyc1xcclxcbiAgICB9IGZyb20gJ3Z1ZXgnO1xcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBtaWRkbGV3YXJlOiAnYXV0aCcsXFxyXFxuICAgICAgICBkYXRhOiAoKSA9PiAoe1xcclxcbiAgICAgICAgICAgIC8v0J/QvtC00YDQvtCx0L3QvtGB0YLQuFxcclxcbiAgICAgICAgICAgIHNob3dJbmZvOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICAvLyDQktGB0L/Qu9GL0LLQsNGI0LrQuFxcclxcbiAgICAgICAgICAgIHNuYWNrYmFyU2hvdzogZmFsc2UsXFxyXFxuICAgICAgICAgICAgc25hY2tiYXJUaW1lb3V0OiAxMDAwMCxcXHJcXG4gICAgICAgICAgICAvLyDQn9C+0LjRgdC6IC8g0JLRi9Cx0L7RgNC60LBcXHJcXG4gICAgICAgICAgICBzZWFyY2g6ICcnLFxcclxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBbXSxcXHJcXG4gICAgICAgICAgICBkaWFsb2c6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIC8vINCj0LTQsNC70LXQvdC40LVcXHJcXG4gICAgICAgICAgICBkZWxldGVXaW5kb3c6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIGRlbGV0ZUNhdGVnb3J5OiBudWxsLFxcclxcbiAgICAgICAgICAgIGRlbE1vZGU6ICdzaW5nbGUnLFxcclxcbiAgICAgICAgICAgIC8v0KHQvtC30LTQsNC90LjQtVxcclxcbiAgICAgICAgICAgIGRlcGFydG1lbnRDcmVhdGU6IGZhbHNlLFxcclxcbiAgICAgICAgICAgIGRlcGFydG1lbnROYW1lOiAnJyxcXHJcXG4gICAgICAgICAgICAvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcXHJcXG4gICAgICAgICAgICBoZWFkZXJzOiBbXFxyXFxuICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQndC+0LzQtdGAJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXFxyXFxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtScsXFxyXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZpcnN0X25hbWUnXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQlNC+0LvQttC90L7RgdGC0LXQuScsXFxyXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2xhc3RfbmFtZSdcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ9Ch0L7RgtGA0YPQtNC90LjQutC+0LInLFxcclxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdwb3NpdGlvbidcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXFxyXFxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIF1cXHJcXG4gICAgICAgIH0pLFxcclxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXHJcXG4gICAgICAgICAgICBkZWxldGVNc2coKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5zZWxlY3RlZC5sZW5ndGggPT0gMSkgPyB0aGlzLiR0KCdkZWxldGVfaXRlbV9jb25maXJtJykgOlxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kdCgnZGVsZXRlX2l0ZW1zX2NvbmZpcm0nKTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xcclxcbiAgICAgICAgICAgICAgICBpdGVtczogJ2RlcGFydG1lbnRzL2RlcGFydG1lbnRzJyxcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXFxyXFxuICAgICAgICAgICAgICAgIGVtcGxveWVlczogJ2VtcGxveWVlcy9lbXBsb3llZXMnXFxyXFxuICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgZ2V0UG9zaXRpb25zIChpZCkge1xcclxcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25zID0gW11cXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMuZm9yRWFjaCggZWwgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYoZWwuZGVwYXJ0bWVudF9pZCA9PSBpZCkgcG9zaXRpb25zLnB1c2goZWwpO1xcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9ucztcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGdldEVtcGxveWVlcyAoaWQpIHtcXHJcXG4gICAgICAgICAgICAgICAgbGV0IGVtcGxveWVlcyA9IFtdLFxcclxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zID0gdGhpcy5nZXRQb3NpdGlvbnMoaWQpO1xcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLmZvckVhY2goIHBvcyA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcGxveWVlcy5mb3JFYWNoKCBlbCA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGVsLnBvc2l0aW9uX2lkID09IHBvcy5pZCkgZW1wbG95ZWVzLnB1c2goZWwpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgIH0pOyAgICAgXFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBlbXBsb3llZXM7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBhZGRDb25maXJtKCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEl0ZW0oeyAndGl0bGUnOiB0aGlzLmRlcGFydG1lbnROYW1lIH0pO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmRlcGFydG1lbnRDcmVhdGUgPSBmYWxzZTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGFkZENhbmNlbCgpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50Q3JlYXRlID0gZmFsc2U7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBkZWxldGVEaWFsb2coaXRlbSkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBpdGVtO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZGVsZXRlQ29uZmlybSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5mb3JFYWNoKGVsID0+IHRoaXMuZGVsZXRlSXRlbShlbC5pZCkpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gW107XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkSUQgPSBudWxsO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWNrYmFyU2hvdyA9IHRydWU7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBkZWxldGVDYW5jZWwoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBudWxsO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgY2xvc2UoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTE7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAuLi5tYXBBY3Rpb25zKHtcXHJcXG4gICAgICAgICAgICAgICAgbG9hZEl0ZW1zOiAnZGVwYXJ0bWVudHMvbG9hZCcsXFxyXFxuICAgICAgICAgICAgICAgIGFkZEl0ZW06ICdkZXBhcnRtZW50cy9hZGQnLFxcclxcbiAgICAgICAgICAgICAgICBlZGl0SXRlbTogJ2RlcGFydG1lbnRzL2VkaXQnLFxcclxcbiAgICAgICAgICAgICAgICBkZWxldGVJdGVtOiAnZGVwYXJ0bWVudHMvcmVtb3ZlJ1xcclxcbiAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgICAuYnRuIHtcXHJcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgbGkge1xcclxcbiAgICAgICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4ICMwMDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRhYmxlX19idXR0b25zIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogLTUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRpYWxvZ19fYWN0aXZhdG9yIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogLTMwcHg7XFxyXFxuICAgICAgICBsZWZ0OiA0MHB4O1xcclxcbiAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FyZF9fdGl0bGUge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcmRfX2FjdGlvbnMge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ1dHRvbkVudGVyIHtcXHJcXG4gICAgICAgIGFuaW1hdGlvbjogYnV0dG9uRW50ZXIgLjNzIGN1YmljLWJlemllciguMDksLjksLjQ4LDEuNjQpO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuYnV0dG9uTGVhdmUge1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZSAuM3MgY3ViaWMtYmV6aWVyKC41MiwtMC40NCwuODgsLTAuNDUpO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAa2V5ZnJhbWVzIHJvdXRlckVudGVyIHtcXHJcXG4gICAgICAgIDAlIHtvcGFjaXR5OiAwO31cXHJcXG4gICAgICAgIDEwMCUge29wYWNpdHk6IDE7fVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAa2V5ZnJhbWVzIHJvdXRlckxlYXZlIHtcXHJcXG4gICAgICAgIDAlIHtvcGFjaXR5OiAxO31cXHJcXG4gICAgICAgIDEwMCUge29wYWNpdHk6IDA7fVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcXHJcXG4gICAgICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cXHJcXG4gICAgICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlIHtcXHJcXG4gICAgICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cXHJcXG4gICAgICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xZWU2NzM1ZFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGVsZXRlV2luZG93XCIgbWF4LXdpZHRoPVwiNTAwcHhcIj5cclxuICAgICAgICA8di1jYXJkPlxyXG4gICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkbGluZVwiPnt7ICR0KCdhdHRlbnRpb24nKSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMj57e2RlbGV0ZU1zZ319PC92LWZsZXg+XHJcbiAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIEBjbGljay5uYXRpdmU9XCJkZWxldGVDb25maXJtXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XCJlcnJvclwiIEBjbGljay5uYXRpdmU9XCJkZWxldGVDYW5jZWxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxyXG4gICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgIDwvdi1jYXJkPlxyXG4gICAgPC92LWRpYWxvZz5cclxuXHJcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRlcGFydG1lbnRDcmVhdGVcIiBtYXgtd2lkdGg9XCI1MDBweFwiPlxyXG4gICAgICAgIDx2LWNhcmQ+XHJcbiAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+0J3QvtCy0L7QtSDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtTwvc3Bhbj5cclxuICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMj5cclxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkIGxhYmVsPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgdi1tb2RlbD1cImRlcGFydG1lbnROYW1lXCI+PC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cclxuICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgQGNsaWNrLm5hdGl2ZT1cImFkZENvbmZpcm1cIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XHJcbiAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cImVycm9yXCIgQGNsaWNrLm5hdGl2ZT1cImFkZENhbmNlbFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XHJcbiAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgPC92LWNhcmQ+XHJcbiAgICA8L3YtZGlhbG9nPlxyXG5cclxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGVwYXJ0bWVudENyZWF0ZVwiIG1heC13aWR0aD1cIjUwMHB4XCI+XHJcbiAgICAgICAgPHYtY2FyZD5cclxuICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj7QndC+0LLQvtC1INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgPHYtZmxleCB4czEyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcIiB2LW1vZGVsPVwiZGVwYXJ0bWVudE5hbWVcIj48L3YtdGV4dC1maWVsZD5cclxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxyXG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cImluZm9cIiBAY2xpY2submF0aXZlPVwiYWRkQ29uZmlybVwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cclxuICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiZXJyb3JcIiBAY2xpY2submF0aXZlPVwiYWRkQ2FuY2VsXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj5cclxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICA8L3YtY2FyZD5cclxuICAgIDwvdi1kaWFsb2c+XHJcblxyXG4gICAgPHYtY2FyZD5cclxuICAgICAgICA8di1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICA8aDI+e3sgJHQoJ2RlcGFydG1lbnQnKSB9fTwvaDI+XHJcbiAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxyXG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZC1pY29uPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ3NlYXJjaF9pbnB1dCcpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlLWxpbmUgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cclxuICAgICAgICA8L3YtY2FyZC10aXRsZT5cclxuICAgICAgICA8di1kYXRhLXRhYmxlXHJcbiAgICAgICAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXHJcbiAgICAgICAgICAgIDppdGVtcz1cIml0ZW1zXCJcclxuICAgICAgICAgICAgOnNlYXJjaD1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgIGl0ZW0ta2V5PVwiaWRcIlxyXG4gICAgICAgICAgICA6bm8tcmVzdWx0cy10ZXh0PVwiJHQoJ25vX21hdGNoX2ZvdW5kJylcIlxyXG4gICAgICAgICAgICA6cm93cy1wZXItcGFnZS10ZXh0PVwiJHQoJ3N0cmluZ3MnKVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTFcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJpdGVtc1wiIHNsb3Qtc2NvcGU9XCJwcm9wc1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0uaWQgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWVkaXQtZGlhbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpyZXR1cm4tdmFsdWUuc3luYz1cInByb3BzLml0ZW0udGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXp5XHJcbiAgICAgICAgICAgICAgICAgICAgPiB7eyBwcm9wcy5pdGVtLnRpdGxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVkaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInByb3BzLml0ZW0udGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlLWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJlZGl0SXRlbShwcm9wcy5pdGVtKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3YtZWRpdC1kaWFsb2c+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt7IGdldFBvc2l0aW9ucyhwcm9wcy5pdGVtLmlkKS5sZW5ndGggfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt7IGdldEVtcGxveWVlcyhwcm9wcy5pdGVtLmlkKS5sZW5ndGggfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIHJvdW5kPnt7ICR0KCdkZXRhaWxzJykgfX08L3YtYnRuPiAgIFxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJuby1kYXRhXCI+XHJcbiAgICAgICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVwidHJ1ZVwiIGNvbG9yPVwicmVkXCIgaWNvbj1cIndhcm5pbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICDQndC10YIg0LTQsNC90L3Ri9GFIDooXHJcbiAgICAgICAgICAgICAgICA8L3YtYWxlcnQ+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC92LWRhdGEtdGFibGU+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgIDx2LWJ0biBmYWIgZGFyayBsYXJnZSBjb2xvcj1cImN5YW5cIiBAY2xpY2s9XCJkZXBhcnRtZW50Q3JlYXRlID0gdHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHYtaWNvbiBkYXJrPmFkZDwvdi1pY29uPlxyXG4gICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICA8dHJhbnNpdGlvbiBlbnRlci1hY3RpdmUtY2xhc3M9XCJidXR0b25FbnRlclwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cImJ1dHRvbkxlYXZlXCIgbW9kZT1cIm91dC1pblwiPlxyXG4gICAgICAgICAgICAgICAgPHYtYnRuIHYtc2hvdz1cInNlbGVjdGVkLmxlbmd0aCA+IDBcIiBjbGFzcz1cImRlbGV0ZS1idG5cIiBmYWIgbGFyZ2UgZGFyayBAY2xpY2s9XCJkZWxldGVEaWFsb2coc2VsZWN0ZWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5kZWxldGU8L3YtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8di1zbmFja2JhciA6dGltZW91dD1cInNuYWNrYmFyVGltZW91dFwiIHRvcCB2LW1vZGVsPVwic25hY2tiYXJTaG93XCIgbXVsdGktbGluZSBjb2xvcj1cImluZm9cIj5cclxuICAgICAgICAgICAge3sgJHQoJ2RlbGV0ZV9kb25lJykgfX1cclxuICAgICAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XCJwaW5rXCIgQGNsaWNrLm5hdGl2ZT1cInNuYWNrYmFyU2hvdyA9IGZhbHNlXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG4gICAgICAgIDwvdi1zbmFja2Jhcj5cclxuICAgIDwvdi1jYXJkPlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIG1hcEFjdGlvbnMsXHJcbiAgICAgICAgbWFwR2V0dGVyc1xyXG4gICAgfSBmcm9tICd2dWV4JztcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBtaWRkbGV3YXJlOiAnYXV0aCcsXHJcbiAgICAgICAgZGF0YTogKCkgPT4gKHtcclxuICAgICAgICAgICAgLy/Qn9C+0LTRgNC+0LHQvdC+0YHRgtC4XHJcbiAgICAgICAgICAgIHNob3dJbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8g0JLRgdC/0LvRi9Cy0LDRiNC60LhcclxuICAgICAgICAgICAgc25hY2tiYXJTaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgc25hY2tiYXJUaW1lb3V0OiAxMDAwMCxcclxuICAgICAgICAgICAgLy8g0J/QvtC40YHQuiAvINCS0YvQsdC+0YDQutCwXHJcbiAgICAgICAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiBbXSxcclxuICAgICAgICAgICAgZGlhbG9nOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8g0KPQtNCw0LvQtdC90LjQtVxyXG4gICAgICAgICAgICBkZWxldGVXaW5kb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWxldGVDYXRlZ29yeTogbnVsbCxcclxuICAgICAgICAgICAgZGVsTW9kZTogJ3NpbmdsZScsXHJcbiAgICAgICAgICAgIC8v0KHQvtC30LTQsNC90LjQtVxyXG4gICAgICAgICAgICBkZXBhcnRtZW50Q3JlYXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVwYXJ0bWVudE5hbWU6ICcnLFxyXG4gICAgICAgICAgICAvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcclxuICAgICAgICAgICAgaGVhZGVyczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQndC+0LzQtdGAJyxcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1JyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZpcnN0X25hbWUnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQlNC+0LvQttC90L7RgdGC0LXQuScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdsYXN0X25hbWUnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQodC+0YLRgNGD0LTQvdC40LrQvtCyJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3Bvc2l0aW9uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZU1zZygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5zZWxlY3RlZC5sZW5ndGggPT0gMSkgPyB0aGlzLiR0KCdkZWxldGVfaXRlbV9jb25maXJtJykgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHQoJ2RlbGV0ZV9pdGVtc19jb25maXJtJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6ICdkZXBhcnRtZW50cy9kZXBhcnRtZW50cycsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnM6ICdwb3NpdGlvbnMvcG9zaXRpb25zJyxcclxuICAgICAgICAgICAgICAgIGVtcGxveWVlczogJ2VtcGxveWVlcy9lbXBsb3llZXMnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGdldFBvc2l0aW9ucyAoaWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMuZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVsLmRlcGFydG1lbnRfaWQgPT0gaWQpIHBvc2l0aW9ucy5wdXNoKGVsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9ucztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0RW1wbG95ZWVzIChpZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVtcGxveWVlcyA9IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucyA9IHRoaXMuZ2V0UG9zaXRpb25zKGlkKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLmZvckVhY2goIHBvcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXBsb3llZXMuZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggZWwucG9zaXRpb25faWQgPT0gcG9zLmlkKSBlbXBsb3llZXMucHVzaChlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTsgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVtcGxveWVlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWRkQ29uZmlybSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkSXRlbSh7ICd0aXRsZSc6IHRoaXMuZGVwYXJ0bWVudE5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlcGFydG1lbnRDcmVhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWRkQ2FuY2VsKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXBhcnRtZW50Q3JlYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlbGV0ZURpYWxvZyhpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gaXRlbTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlQ29uZmlybSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuZm9yRWFjaChlbCA9PiB0aGlzLmRlbGV0ZUl0ZW0oZWwuaWQpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRlZElEID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlQ2FuY2VsKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDYXRlZ29yeSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbG9zZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLi4ubWFwQWN0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICBsb2FkSXRlbXM6ICdkZXBhcnRtZW50cy9sb2FkJyxcclxuICAgICAgICAgICAgICAgIGFkZEl0ZW06ICdkZXBhcnRtZW50cy9hZGQnLFxyXG4gICAgICAgICAgICAgICAgZWRpdEl0ZW06ICdkZXBhcnRtZW50cy9lZGl0JyxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW06ICdkZXBhcnRtZW50cy9yZW1vdmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDtcclxuICAgIH1cclxuICAgIC50YWJsZV9fYnV0dG9ucyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZ19fYWN0aXZhdG9yIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtMzBweDtcclxuICAgICAgICBsZWZ0OiA0MHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRfX3RpdGxlIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZF9fYWN0aW9ucyB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbkVudGVyIHtcclxuICAgICAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ1dHRvbkxlYXZlIHtcclxuICAgICAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xyXG4gICAgICAgIDAlIHtvcGFjaXR5OiAwO31cclxuICAgICAgICAxMDAlIHtvcGFjaXR5OiAxO31cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XHJcbiAgICAgICAgMCUge29wYWNpdHk6IDE7fVxyXG4gICAgICAgIDEwMCUge29wYWNpdHk6IDA7fVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcclxuICAgICAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XHJcbiAgICAgICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xyXG4gICAgICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cclxuICAgICAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cclxuICAgICAgfVxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNTAwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRlbGV0ZVdpbmRvdyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVdpbmRvdyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVsZXRlV2luZG93XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiYXR0ZW50aW9uXCIpKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1mbGV4XCIsIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGVsZXRlTXNnKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNvbmZpcm0oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImVycm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlQ2FuY2VsKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI1MDBweFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVwYXJ0bWVudENyZWF0ZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlcGFydG1lbnRDcmVhdGUgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRlcGFydG1lbnRDcmVhdGVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0J3QvtCy0L7QtSDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtVwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kZXBhcnRtZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXBhcnRtZW50TmFtZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRlcGFydG1lbnROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZENvbmZpcm0oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImVycm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkQ2FuY2VsKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI1MDBweFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVwYXJ0bWVudENyZWF0ZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlcGFydG1lbnRDcmVhdGUgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRlcGFydG1lbnRDcmVhdGVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0J3QvtCy0L7QtSDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtVwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kZXBhcnRtZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXBhcnRtZW50TmFtZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRlcGFydG1lbnROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZENvbmZpcm0oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImVycm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkQ2FuY2VsKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJkZXBhcnRtZW50XCIpKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwic2VhcmNoX2lucHV0XCIpLFxuICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZGF0YS10YWJsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgIFwibm8tcmVzdWx0cy10ZXh0XCI6IF92bS4kdChcIm5vX21hdGNoX2ZvdW5kXCIpLFxuICAgICAgICAgICAgICAgIFwicm93cy1wZXItcGFnZS10ZXh0XCI6IF92bS4kdChcInN0cmluZ3NcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uaWQpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1lZGl0LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLXZhbHVlXCI6IHByb3BzLml0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenk6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpyZXR1cm5WYWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChwcm9wcy5pdGVtLCBcInRpdGxlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW0udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRJdGVtKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLml0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQocHJvcHMuaXRlbSwgXCJ0aXRsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb3BzLml0ZW0udGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldFBvc2l0aW9ucyhwcm9wcy5pdGVtLmlkKS5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5nZXRFbXBsb3llZXMocHJvcHMuaXRlbS5pZCkubGVuZ3RoKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtYnRuXCIsIHsgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgcm91bmQ6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJkZXRhaWxzXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgIHsgc2xvdDogXCJuby1kYXRhXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IHRydWUsIGNvbG9yOiBcInJlZFwiLCBpY29uOiBcIndhcm5pbmdcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAg0J3QtdGCINC00LDQvdC90YvRhSA6KFxcclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlX19idXR0b25zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZhYjogXCJcIiwgZGFyazogXCJcIiwgbGFyZ2U6IFwiXCIsIGNvbG9yOiBcImN5YW5cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXBhcnRtZW50Q3JlYXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBkYXJrOiBcIlwiIH0gfSwgW192bS5fdihcImFkZFwiKV0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZW50ZXItYWN0aXZlLWNsYXNzXCI6IFwiYnV0dG9uRW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogXCJidXR0b25MZWF2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBcIm91dC1pblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZC5sZW5ndGggPiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVsZXRlLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZhYjogXCJcIiwgbGFyZ2U6IFwiXCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlRGlhbG9nKF92bS5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZGVsZXRlXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXNuYWNrYmFyXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGltZW91dDogX3ZtLnNuYWNrYmFyVGltZW91dCxcbiAgICAgICAgICAgICAgICB0b3A6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJtdWx0aS1saW5lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiaW5mb1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zbmFja2JhclNob3csXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNuYWNrYmFyU2hvdyA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzbmFja2JhclNob3dcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXHJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiZGVsZXRlX2RvbmVcIikpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxyXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInBpbmtcIiB9LFxuICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5zbmFja2JhclNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJva1wiKSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTFlZTY3MzVkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xZWU2NzM1ZFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiXSwic291cmNlUm9vdCI6IiJ9