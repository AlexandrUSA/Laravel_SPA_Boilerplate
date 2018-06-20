webpackJsonp([2],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(207)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(209)
/* template */
var __vue_template__ = __webpack_require__(218)
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

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(208);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("03772f18", content, false, {});
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

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n#departments[data-v-1ee6735d] {\r\n    position: relative;\r\n    width: 90%;\r\n    max-width: 1000px;\r\n    margin: 10px auto;\n}\r\n\r\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/admin/departments/resources/assets/js/pages/admin/departments/List.vue"],"names":[],"mappings":";AAsQA;IACA,mBAAA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n<div id=\"departments\">\r\n  \r\n    <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\r\n        <v-card>\r\n            <v-card-title>\r\n                <span class=\"headline\">{{ $t('attention') }}</span>\r\n            </v-card-title>\r\n            <v-card-text>\r\n                <v-flex xs12>{{deleteMsg}}</v-flex>\r\n            </v-card-text>\r\n            <v-card-actions>\r\n                <v-btn v-show=\"!deleteDenied\" outline color=\"info\" @click.native=\"deleteConfirm\">{{ $t('ok') }}</v-btn>\r\n                <v-btn outline color=\"error\" @click.native=\"deleteCancel\">{{ $t('cancel') }}</v-btn>\r\n            </v-card-actions>\r\n        </v-card>\r\n    </v-dialog>\r\n\r\n    <v-dialog v-model=\"departmentCreate\" max-width=\"500px\">\r\n        <v-card>\r\n            <v-card-title>\r\n                <span class=\"headline\">Новое подразделение</span>\r\n            </v-card-title>\r\n            <v-card-text>\r\n                <v-flex xs12>\r\n                    <v-text-field label=\"Наименование\" v-model=\"departmentName\"></v-text-field>\r\n                </v-flex>\r\n            </v-card-text>\r\n            <v-card-actions>\r\n                <v-btn outline color=\"info\" @click.native=\"addConfirm\">{{ $t('ok') }}</v-btn>\r\n                <v-btn outline color=\"error\" @click.native=\"addCancel\">{{ $t('cancel') }}</v-btn>\r\n            </v-card-actions>\r\n        </v-card>\r\n    </v-dialog>\r\n\r\n    <v-card>\r\n        <v-data-table\r\n            :headers=\"headers\"\r\n            :items=\"items\"\r\n            item-key=\"id\"\r\n            :no-results-text=\"$t('no_match_found')\"\r\n            :rows-per-page-text=\"$t('strings')\"\r\n            class=\"elevation-1\">\r\n            <template slot=\"items\" slot-scope=\"props\">\r\n                <td>{{ props.item.id }}</td>\r\n                <td>\r\n                    <v-edit-dialog\r\n                        :return-value.sync=\"props.item.title\"\r\n                        lazy\r\n                    > {{ props.item.title }}\r\n                        <v-text-field\r\n                            slot=\"input\"\r\n                            label=\"Edit\"\r\n                            v-model=\"props.item.title\"\r\n                            single-line\r\n                            counter\r\n                            @change=\"editItem(props.item)\"\r\n                        ></v-text-field>\r\n                    </v-edit-dialog>\r\n                </td>\r\n                <td>{{ getPositions(props.item.id).length }}</td>\r\n                <td>{{ getEmployees(props.item.id).length }}</td>\r\n                <td>\r\n                  <v-btn icon class=\"mx-0\" @click=\"editItem(props.item.id)\">\r\n                    <v-icon color=\"teal\">edit</v-icon>\r\n                  </v-btn>\r\n                  <v-btn icon class=\"mx-0\" @click=\"deleteItem(props.item.id)\">\r\n                    <v-icon color=\"pink\">delete</v-icon>\r\n                  </v-btn>\r\n                </td>\r\n            </template>\r\n            <template slot=\"no-data\">\r\n              <v-alert :value=\"true\" color=\"red\" icon=\"warning\">\r\n                    Нет данных :(\r\n                </v-alert>\r\n            </template>\r\n        </v-data-table>\r\n        <div class=\"table__buttons\">\r\n            <v-btn fab dark large color=\"cyan\" @click=\"departmentCreate = true\">\r\n                <v-icon dark>add</v-icon>\r\n            </v-btn>\r\n            <transition enter-active-class=\"buttonEnter\" leave-active-class=\"buttonLeave\" mode=\"out-in\">\r\n                <v-btn v-show=\"selected.length > 0\" class=\"delete-btn\" fab large dark @click=\"deleteDialog(selected)\">\r\n                    <v-icon>delete</v-icon>\r\n                </v-btn>\r\n            </transition>\r\n        </div>\r\n        <v-snackbar :timeout=\"snackbarTimeout\" top v-model=\"snackbarShow\" multi-line color=\"info\">\r\n            {{ $t('delete_done') }}\r\n            <v-btn flat color=\"pink\" @click.native=\"snackbarShow = false\">{{ $t('ok') }}</v-btn>\r\n        </v-snackbar>\r\n    </v-card>\r\n</div>\r\n<!--\r\n<file-pond\r\n        name=\"test\"\r\n        ref=\"pond\"\r\n        class-name=\"my-pond\"\r\n        label-idle=\"Перекиньте файлы сюда\"\r\n        labelFileTypeNotAllowed=\"Данный формат не поддерживается\"\r\n        allow-multiple=\"true\"\r\n        accepted-file-types=\"image/jpeg, image/png, application/msword\"\r\n        v-bind:files=\"myFiles\"\r\n        v-on:init=\"handleFilePondInit\"/>\r\n-->\r\n</template>\r\n\r\n<script>\r\n  import { mapActions, mapGetters } from 'vuex';\r\n  import vueFilePond from 'vue-filepond';\r\n  import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';\r\n  import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';\r\n  // Import styles\r\n  import 'filepond/dist/filepond.min.css';\r\n  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';\r\n  \r\n  const FilePond = vueFilePond( FilePondPluginFileValidateType, FilePondPluginImagePreview );\r\n  \r\n  \r\n  export default {\r\n    middleware: ['auth', 'organisation'],\r\n    data: () => ({\r\n       myFiles: ['index.html'],\r\n      //Подробности\r\n      showInfo: false,\r\n      selectedEmployees: [],\r\n      selectedPositions: [],\r\n      // Всплывашки\r\n      snackbarShow: false,\r\n      snackbarTimeout: 10000,\r\n      // Поиск / Выборка\r\n      search: '',\r\n      selected: [],\r\n      dialog: false,\r\n      // Удаление\r\n      deleteWindow: false,\r\n      deleteDenied: false,\r\n      delErrMessage: [],\r\n      //Создание\r\n      departmentCreate: false,\r\n      departmentName: '',\r\n      // Заголовки таблицы\r\n      headers: [{\r\n          text: 'Номер',\r\n          align: 'left',\r\n          sortable: false\r\n        },\r\n        {\r\n          text: 'Наименование',\r\n          value: 'name'\r\n        },\r\n        {\r\n          text: 'Должностей',\r\n          value: 'positions'\r\n        },\r\n        {\r\n          text: 'Сотрудников',\r\n          value: 'employees'\r\n        },\r\n        { text: 'Действия',\r\n          value: 'action'\r\n        }\r\n      ]\r\n    }),\r\n    computed: {\r\n      deleteMsg() {\r\n        return (this.deleteDenied) ? 'За данным отлелом закреплены сотрудники' :\r\n                          'Вы действительно хотите расформировать данный отдел?';\r\n      },\r\n      ...mapGetters({\r\n        items: 'departments/departments',\r\n        positions: 'positions/positions',\r\n        employees: 'employees/employees'\r\n      })\r\n    },\r\n    components: {\r\n        FilePond\r\n    },\r\n    methods: {\r\n//      handleFilePondInit: function() {\r\n//        console.log('FilePond has initialized');\r\n//        this.$refs.pond.getFiles();\r\n//      },\r\n      openInfoPanel(id) {\r\n        this.selectedPositions = this.getPositions(id);\r\n        this.selectedEmployees = this.getEmployees(id);\r\n        this.showInfo = true;\r\n      },\r\n      getPositions(id) {\r\n        let positions = [];\r\n\r\n        this.positions.forEach(el => {\r\n          if (el.department_id == id) positions.push(el);\r\n        });\r\n\r\n        return positions;\r\n      },\r\n      getEmployees(id) {\r\n        let employees = [],\r\n          positions = this.getPositions(id);\r\n\r\n        positions.forEach(pos => {\r\n          this.employees.forEach(el => {\r\n            if (el.position_id == pos.id) employees.push(el);\r\n          });\r\n        });\r\n        return employees;\r\n      },\r\n      addConfirm() {\r\n        this.addItem({\r\n          'title': this.departmentName\r\n        });\r\n        this.departmentCreate = false;\r\n      },\r\n      addCancel() {\r\n        this.departmentCreate = false;\r\n      },\r\n      deleteDialog(item) {\r\n        this.deleteWindow = true;\r\n        this.deleteCategory = item;\r\n      },\r\n      _hasEmployees(id) {\r\n        return this.getEmployees(id).length\r\n      },\r\n      _hasPositions(id) {\r\n        return this.getPositions(item.id).length\r\n      },\r\n      deleteItem (id) {\r\n        console.log(id)\r\n        this.deleteWindow = true;\r\n        if(this._hasEmployees(id)) {\r\n          this.deleteDenied = true;\r\n        }\r\n      },\r\n      deleteConfirm() {\r\n        this.selected.forEach(el => this.deleteItem(el.id));\r\n        this.selected = [];\r\n        this.deleteWindow = false;\r\n        this.editedID = null;\r\n        this.snackbarShow = true;\r\n      },\r\n      deleteCancel() {\r\n        this.deleteCategory = null;\r\n        this.deleteWindow = false;\r\n      },\r\n      close() {\r\n        this.dialog = false;\r\n        this.editedItem = Object.assign({}, this.defaultItem);\r\n        this.editedIndex = -1;\r\n      },\r\n      ...mapActions({\r\n        loadItems: 'departments/load',\r\n        addItem: 'departments/add',\r\n        editItem: 'departments/edit',\r\n        remove: 'departments/remove'\r\n      })\r\n    }\r\n  }\r\n\r\n</script>\r\n\r\n<style scoped>\r\n#departments {\r\n    position: relative;\r\n    width: 90%;\r\n    max-width: 1000px;\r\n    margin: 10px auto;\r\n}\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_filepond__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_filepond___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_filepond__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_filepond_plugin_file_validate_type_dist_filepond_plugin_file_validate_type_esm_js__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_filepond_plugin_image_preview_dist_filepond_plugin_image_preview_esm_js__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_filepond_dist_filepond_min_css__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_filepond_dist_filepond_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_filepond_dist_filepond_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_filepond_plugin_image_preview_dist_filepond_plugin_image_preview_min_css__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_filepond_plugin_image_preview_dist_filepond_plugin_image_preview_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_filepond_plugin_image_preview_dist_filepond_plugin_image_preview_min_css__);
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





// Import styles



var FilePond = __WEBPACK_IMPORTED_MODULE_1_vue_filepond___default()(__WEBPACK_IMPORTED_MODULE_2_filepond_plugin_file_validate_type_dist_filepond_plugin_file_validate_type_esm_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3_filepond_plugin_image_preview_dist_filepond_plugin_image_preview_esm_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = ({
  middleware: ['auth', 'organisation'],
  data: function data() {
    return {
      myFiles: ['index.html'],
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
      deleteDenied: false,
      delErrMessage: [],
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
        value: 'name'
      }, {
        text: 'Должностей',
        value: 'positions'
      }, {
        text: 'Сотрудников',
        value: 'employees'
      }, { text: 'Действия',
        value: 'action'
      }]
    };
  },
  computed: _extends({
    deleteMsg: function deleteMsg() {
      return this.deleteDenied ? 'За данным отлелом закреплены сотрудники' : 'Вы действительно хотите расформировать данный отдел?';
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    items: 'departments/departments',
    positions: 'positions/positions',
    employees: 'employees/employees'
  })),
  components: {
    FilePond: FilePond
  },
  methods: _extends({
    //      handleFilePondInit: function() {
    //        console.log('FilePond has initialized');
    //        this.$refs.pond.getFiles();
    //      },
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
      this.addItem({
        'title': this.departmentName
      });
      this.departmentCreate = false;
    },
    addCancel: function addCancel() {
      this.departmentCreate = false;
    },
    deleteDialog: function deleteDialog(item) {
      this.deleteWindow = true;
      this.deleteCategory = item;
    },
    _hasEmployees: function _hasEmployees(id) {
      return this.getEmployees(id).length;
    },
    _hasPositions: function _hasPositions(id) {
      return this.getPositions(item.id).length;
    },
    deleteItem: function deleteItem(id) {
      console.log(id);
      this.deleteWindow = true;
      if (this._hasEmployees(id)) {
        this.deleteDenied = true;
      }
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
    remove: 'departments/remove'
  }))
});

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vue-filepond v2.0.0
 * A handy FilePond adapter component for Vue
 * 
 * Copyright (c) 2018 PQINA
 * https://pqina.nl/filepond
 * 
 * Licensed under the MIT license.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _filepond = __webpack_require__(211);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Methods not made available to the component
var filteredComponentMethods = ['setOptions', 'on', 'off', 'onOnce', 'appendTo', 'insertAfter', 'insertBefore', 'isAttachedTo', 'replaceElement', 'restoreElement', 'destroy'];

// Test if is supported on this client
var isSupported = (0, _filepond.supported)();

// Setup initial prop types and update when plugins are added
var getNativeConstructorFromType = function getNativeConstructorFromType(type) {
    return {
        string: String,
        boolean: Boolean,
        array: Array,
        function: Function,
        int: Number,
        serverapi: Object
    }[type];
};

// Activated props
var props = {};

// Events that need to be mapped to emitters
var events = [];

// Props to watch
var watch = {};

exports.default = function () {

    // register plugins in FilePond
    _filepond.registerPlugin.apply(undefined, arguments);

    // build events and props array
    events.length = 0;

    var _loop = function _loop(prop) {
        // don't add events to the props array
        if (/^on/.test(prop)) {
            events.push(prop);
            return 'continue';
        }

        // get property type ( can be either a String or the type defined within FilePond )
        props[prop] = [String, getNativeConstructorFromType(_filepond.OptionTypes[prop])];

        // setup watcher
        watch[prop] = function (value) {
            this._pond[prop] = value;
        };
    };

    for (var prop in _filepond.OptionTypes) {
        var _ret = _loop(prop);

        if (_ret === 'continue') continue;
    }

    // create 
    return _vue2.default.component('FilePond', {
        name: 'FilePond',
        props: props,
        watch: watch,
        render: function render(h) {
            return h('div', {
                'class': {
                    'filepond--wrapper': true
                }
            }, [h('input', {
                attrs: {
                    id: this.id,
                    name: this.name,
                    type: 'file',
                    'class': this.className,
                    required: this.required,
                    multiple: this.allowMultiple,
                    accept: this.acceptedFileTypes,
                    capture: this.captureMethod
                }
            })]);
        },

        // Will setup FilePond instance when mounted
        mounted: function mounted() {
            var _this = this;

            // exit here if not supported
            if (!isSupported) {
                return;
            }

            // get pond element
            this._element = this.$el.querySelector('input');

            // Map FilePond callback methods to Vue $emitters
            var options = events.reduce(function (obj, value) {
                obj[value] = function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    _this.$emit.apply(_this, [value.substr(2)].concat(args));
                };
                return obj;
            }, {});

            // Scoop up attributes that might not have been caught by Vue ( because the props object is extended dynamically )
            var attrs = Object.assign({}, this.$attrs);

            // Create our pond
            this._pond = (0, _filepond.create)(this._element, Object.assign(options, attrs, this.$options.propsData));

            // Copy instance method references to component instance
            Object.keys(this._pond).filter(function (key) {
                return !filteredComponentMethods.includes(key);
            }).forEach(function (key) {
                _this[key] = _this._pond[key];
            });
        },


        // Will clean up FilePond instance when unmounted
        beforeDestroy: function beforeDestroy() {
            // exit when no pond defined
            if (!this._pond) {
                return;
            }

            this._pond.destroy();
        }
    });
};




/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

/*
 * FilePond 1.4.0
 * Licensed under MIT, https://opensource.org/licenses/MIT
 * Please visit https://pqina.nl/filepond for details.
 */
(function(global, factory) {
   true
    ? factory(exports)
    : typeof define === 'function' && define.amd
      ? define(['exports'], factory)
      : factory((global.FilePond = {}));
})(this, function(exports) {
  'use strict';

  var isNode = function isNode(value) {
    return value instanceof HTMLElement;
  };

  var _typeof =
    typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
      ? function(obj) {
          return typeof obj;
        }
      : function(obj) {
          return obj &&
            typeof Symbol === 'function' &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? 'symbol'
            : typeof obj;
        };

  var asyncGenerator = (function() {
    function AwaitValue(value) {
      this.value = value;
    }

    function AsyncGenerator(gen) {
      var front, back;

      function send(key, arg) {
        return new Promise(function(resolve, reject) {
          var request = {
            key: key,
            arg: arg,
            resolve: resolve,
            reject: reject,
            next: null
          };

          if (back) {
            back = back.next = request;
          } else {
            front = back = request;
            resume(key, arg);
          }
        });
      }

      function resume(key, arg) {
        try {
          var result = gen[key](arg);
          var value = result.value;

          if (value instanceof AwaitValue) {
            Promise.resolve(value.value).then(
              function(arg) {
                resume('next', arg);
              },
              function(arg) {
                resume('throw', arg);
              }
            );
          } else {
            settle(result.done ? 'return' : 'normal', result.value);
          }
        } catch (err) {
          settle('throw', err);
        }
      }

      function settle(type, value) {
        switch (type) {
          case 'return':
            front.resolve({
              value: value,
              done: true
            });
            break;

          case 'throw':
            front.reject(value);
            break;

          default:
            front.resolve({
              value: value,
              done: false
            });
            break;
        }

        front = front.next;

        if (front) {
          resume(front.key, front.arg);
        } else {
          back = null;
        }
      }

      this._invoke = send;

      if (typeof gen.return !== 'function') {
        this.return = undefined;
      }
    }

    if (typeof Symbol === 'function' && Symbol.asyncIterator) {
      AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
        return this;
      };
    }

    AsyncGenerator.prototype.next = function(arg) {
      return this._invoke('next', arg);
    };

    AsyncGenerator.prototype.throw = function(arg) {
      return this._invoke('throw', arg);
    };

    AsyncGenerator.prototype.return = function(arg) {
      return this._invoke('return', arg);
    };

    return {
      wrap: function(fn) {
        return function() {
          return new AsyncGenerator(fn.apply(this, arguments));
        };
      },
      await: function(value) {
        return new AwaitValue(value);
      }
    };
  })();

  var _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  var toConsumableArray = function(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
        arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var createStore = function createStore(initialState) {
    var queries =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var actions =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    // internal state
    var state = _extends({}, initialState);

    // contains all actions for next frame, is clear when actions are requested
    var actionQueue = [];
    var dispatchQueue = [];

    // returns a duplicate of the current state
    var getState = function getState() {
      return _extends({}, state);
    };

    // returns a duplicate of the actions array and clears the actions array
    var processActionQueue = function processActionQueue() {
      // create copy of actions queue
      var queue = [].concat(actionQueue);

      // clear actions queue (we don't want no double actions)
      actionQueue.length = 0;

      return queue;
    };

    // processes actions that might block the main UI thread
    var processDispatchQueue = function processDispatchQueue() {
      // create copy of actions queue
      var queue = [].concat(dispatchQueue);

      // clear actions queue (we don't want no double actions)
      dispatchQueue.length = 0;

      // now dispatch these actions
      queue.forEach(function(_ref) {
        var type = _ref.type,
          data = _ref.data;

        dispatch(type, data);
      });
    };

    // adds a new action, calls its handler and
    var dispatch = function dispatch(type, data, isBlocking) {
      // is blocking action
      if (isBlocking) {
        dispatchQueue.push({
          type: type,
          data: data
        });
        return;
      }

      // if this action has a handler, handle the action
      if (actionHandlers[type]) {
        actionHandlers[type](data);
      }

      // now add action
      actionQueue.push({
        type: type,
        data: data
      });
    };

    var query = function query(str) {
      var _queryHandles;

      for (
        var _len = arguments.length,
          args = Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        args[_key - 1] = arguments[_key];
      }

      return queryHandles[str]
        ? (_queryHandles = queryHandles)[str].apply(_queryHandles, args)
        : null;
    };

    var api = {
      getState: getState,
      processActionQueue: processActionQueue,
      processDispatchQueue: processDispatchQueue,
      dispatch: dispatch,
      query: query
    };

    var queryHandles = {};
    queries.forEach(function(query) {
      queryHandles = _extends({}, query(state), queryHandles);
    });

    var actionHandlers = {};
    actions.forEach(function(action) {
      actionHandlers = _extends(
        {},
        action(dispatch, query, state),
        actionHandlers
      );
    });

    return api;
  };

  var defineProperty$1 = function defineProperty$$1(obj, property, definition) {
    if (typeof definition === 'function') {
      obj[property] = definition;
      return;
    }
    Object.defineProperty(obj, property, _extends({}, definition));
  };

  var forin = function forin(obj, cb) {
    for (var key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue;
      }

      cb(key, obj[key]);
    }
  };

  var createObject = function createObject(definition) {
    var obj = {};
    forin(definition, function(property) {
      defineProperty$1(obj, property, definition[property]);
    });
    return obj;
  };

  var attr = function attr(node, name) {
    var value =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (value === null) {
      return node.getAttribute(name) || node.hasAttribute(name);
    }
    node.setAttribute(name, value);
  };

  var ns = 'http://www.w3.org/2000/svg';
  var svgElements = ['svg', 'path']; // only svg elements used

  var isSVGElement = function isSVGElement(tag) {
    return svgElements.includes(tag);
  };

  var createElement = function createElement(tag, className) {
    var attributes =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (
      (typeof className === 'undefined' ? 'undefined' : _typeof(className)) ===
      'object'
    ) {
      attributes = className;
      className = null;
    }
    var element = isSVGElement(tag)
      ? document.createElementNS(ns, tag)
      : document.createElement(tag);
    if (className) {
      if (isSVGElement(tag)) {
        attr(element, 'class', className);
      } else {
        element.className = className;
      }
    }
    forin(attributes, function(name, value) {
      attr(element, name, value);
    });
    return element;
  };

  var appendChild = function appendChild(parent) {
    return function(child, index) {
      if (typeof index !== 'undefined' && parent.children[index]) {
        parent.insertBefore(child, parent.children[index]);
      } else {
        parent.appendChild(child);
      }
    };
  };

  var appendChildView = function appendChildView(parent, childViews) {
    return function(view, index) {
      // todo: expand with location and target option (child, 'before', target)

      if (typeof index !== 'undefined') {
        childViews.splice(index, 0, view);
      } else {
        childViews.push(view);
      }

      return view;
    };
  };

  var removeChildView = function removeChildView(parent, childViews) {
    return function(view) {
      // remove from child views
      childViews.splice(childViews.indexOf(view), 1);

      // remove the element
      if (view.element.parentNode) {
        parent.removeChild(view.element);
      }

      return view;
    };
  };

  var getViewRect = function getViewRect(
    elementRect,
    childViews,
    offset,
    scale
  ) {
    var left = offset[0] || elementRect.left;
    var top = offset[1] || elementRect.top;
    var right = left + elementRect.width;
    var bottom = top + elementRect.height * (scale[1] || 1);

    var rect = {
      // the rectangle of the element itself
      element: _extends({}, elementRect),

      // the rectangle of the element expanded to contain its children, does not include any margins
      inner: {
        left: elementRect.left,
        top: elementRect.top,
        right: elementRect.right,
        bottom: elementRect.bottom
      },

      // the rectangle of the element expanded to contain its children including own margin and child margins
      // margins will be added after we've recalculated the size
      outer: {
        left: left,
        top: top,
        right: right,
        bottom: bottom
      }
    };

    // expand rect to fit all child rectangles
    childViews
      .filter(function(childView) {
        return !childView.isRectIgnored();
      })
      .map(function(childView) {
        return childView.rect;
      })
      .forEach(function(childViewRect) {
        expandRect(rect.inner, _extends({}, childViewRect.inner));
        expandRect(rect.outer, _extends({}, childViewRect.outer));
      });

    // calculate inner width and height
    calculateRectSize(rect.inner);

    // append additional margin (top and left margins are included in top and left automatically)
    rect.outer.bottom += rect.element.marginBottom;
    rect.outer.right += rect.element.marginRight;

    // calculate outer width and height
    calculateRectSize(rect.outer);

    return rect;
  };

  var expandRect = function expandRect(parent, child) {
    // adjust for parent offset
    child.top += parent.top;
    child.right += parent.left;
    child.bottom += parent.top;
    child.left += parent.left;

    if (child.bottom > parent.bottom) {
      parent.bottom = child.bottom;
    }

    if (child.right > parent.right) {
      parent.right = child.right;
    }
  };

  var calculateRectSize = function calculateRectSize(rect) {
    rect.width = rect.right - rect.left;
    rect.height = rect.bottom - rect.top;
  };

  var isNumber = function isNumber(value) {
    return typeof value === 'number';
  };

  /**
   * Determines if position is at destination
   * @param position
   * @param destination
   * @param velocity
   * @param errorMargin
   * @returns {boolean}
   */
  var thereYet = function thereYet(position, destination, velocity) {
    var errorMargin =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.001;

    return (
      Math.abs(position - destination) < errorMargin &&
      Math.abs(velocity) < errorMargin
    );
  };

  /**
   * Spring animation
   */
  var spring =
    // default options
    function spring() // method definition
    {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        _ref$stiffness = _ref.stiffness,
        stiffness = _ref$stiffness === undefined ? 0.5 : _ref$stiffness,
        _ref$damping = _ref.damping,
        damping = _ref$damping === undefined ? 0.75 : _ref$damping,
        _ref$mass = _ref.mass,
        mass = _ref$mass === undefined ? 10 : _ref$mass;

      var target = null;
      var position = null;
      var velocity = 0;
      var resting = false;

      // updates spring state
      var interpolate = function interpolate() {
        // in rest, don't animate
        if (resting) {
          return;
        }

        // need at least a target or position to do springy things
        if (!(isNumber(target) && isNumber(position))) {
          resting = true;
          velocity = 0;
          return;
        }

        // calculate spring force
        var f = -(position - target) * stiffness;

        // update velocity by adding force based on mass
        velocity += f / mass;

        // update position by adding velocity
        position += velocity;

        // slow down based on amount of damping
        velocity *= damping;

        // we've arrived if we're near target and our velocity is near zero
        if (thereYet(position, target, velocity)) {
          position = target;
          velocity = 0;
          resting = true;

          // we done
          api.onupdate(position);
          api.oncomplete(position);
        } else {
          // progress update
          api.onupdate(position);
        }
      };

      /**
       * Set new target value
       * @param value
       */
      var setTarget = function setTarget(value) {
        // if currently has no position, set target and position to this value
        if (isNumber(value) && !isNumber(position)) {
          position = value;
        }

        // let start moving to target
        target = value;

        // already at target
        if (position === target || typeof target === 'undefined') {
          // now resting as target is current position, stop moving
          resting = true;
          velocity = 0;

          // done!
          api.onupdate(position);
          api.oncomplete(position);

          return;
        }

        resting = false;
      };

      // need 'api' to call onupdate callback
      var api = createObject({
        interpolate: interpolate,
        target: {
          set: setTarget,
          get: function get() {
            return target;
          }
        },
        resting: {
          get: function get() {
            return resting;
          }
        },
        onupdate: function onupdate(value) {},
        oncomplete: function oncomplete(value) {}
      });

      return api;
    };

  var easeInOutQuad = function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  var tween =
    // default values
    function tween() // method definition
    {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 500 : _ref$duration,
        _ref$easing = _ref.easing,
        easing = _ref$easing === undefined ? easeInOutQuad : _ref$easing,
        _ref$delay = _ref.delay,
        delay = _ref$delay === undefined ? 0 : _ref$delay;

      var start = null;
      var t = void 0;
      var p = void 0;
      var resting = true;
      var reverse = false;
      var target = null;

      var interpolate = function interpolate(ts) {
        if (resting || target === null) {
          return;
        }

        if (start === null) {
          start = ts;
        }

        if (ts - start < delay) {
          return;
        }

        t = ts - start - delay;

        if (t < duration) {
          p = t / duration;
          api.onupdate((t >= 0 ? easing(reverse ? 1 - p : p) : 0) * target);
        } else {
          t = 1;
          resting = true;
          p = reverse ? 0 : 1;
          api.onupdate(p * target);
          api.oncomplete(p * target);
        }
      };

      // need 'api' to call onupdate callback
      var api = createObject({
        interpolate: interpolate,
        target: {
          get: function get() {
            return reverse ? 0 : target;
          },
          set: function set(value) {
            // is initial value
            if (target === null) {
              target = value;
              api.onupdate(value);
              api.oncomplete(value);
              return;
            }

            // want to tween to a smaller value and have a current value
            if (value < target) {
              target = 1;
              reverse = true;
            } else {
              // not tweening to a smaller value
              reverse = false;
              target = value;
            }

            // let's go!
            resting = false;
            start = null;
          }
        },
        resting: {
          get: function get() {
            return resting;
          }
        },
        onupdate: function onupdate(value) {},
        oncomplete: function oncomplete(value) {}
      });

      return api;
    };

  var animator = {
    spring: spring,
    tween: tween
  };

  /*
 { type: 'spring', stiffness: .5, damping: .75, mass: 10 };
 { translation: { type: 'spring', ... }, ... }
 { translation: { x: { type: 'spring', ... } } }
*/
  var createAnimator = function createAnimator(definition, category, property) {
    // default is single definition
    // we check if transform is set, if so, we check if property is set
    var def =
      definition[category] &&
      _typeof(definition[category][property]) === 'object'
        ? definition[category][property]
        : definition[category] || definition;

    var type = typeof def === 'string' ? def : def.type;
    var props =
      (typeof def === 'undefined' ? 'undefined' : _typeof(def)) === 'object'
        ? _extends({}, def)
        : {};

    return animator[type] ? animator[type](props) : null;
  };

  var addGetSet = function addGetSet(keys, obj, props) {
    var overwrite =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    obj = Array.isArray(obj) ? obj : [obj];
    obj.forEach(function(o) {
      keys.forEach(function(key) {
        var name = key;
        var getter = function getter() {
          return props[key];
        };
        var setter = function setter(value) {
          return (props[key] = value);
        };

        if (
          (typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object'
        ) {
          name = key.key;
          getter = key.getter || getter;
          setter = key.setter || setter;
        }

        if (o[name] && !overwrite) {
          return;
        }

        o[name] = {
          get: getter,
          set: setter
        };
      });
    });
  };

  var isEmpty = function isEmpty(value) {
    return value == null;
  };

  var isDefined = function isDefined(value) {
    return !isEmpty(value);
  };

  // add to state,
  // add getters and setters to internal and external api (if not set)
  // setup animators

  var animations = function animations(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewInternalAPI = _ref.viewInternalAPI,
      viewExternalAPI = _ref.viewExternalAPI;

    // initial properties
    var initialProps = _extends({}, viewProps);

    // list of all active animations
    var animations = [];

    // active animation counter
    var activeAnimators = 0;

    // setup animators
    forin(mixinConfig, function(property, animation) {
      var animator = createAnimator(animation);
      if (!animator) {
        return;
      }

      // when the animator updates, update the view state value
      animator.onupdate = function(value) {
        viewProps[property] = value;
      };

      animator.oncomplete = function() {
        activeAnimators--;
      };

      // set animator target
      activeAnimators++;
      animator.target = initialProps[property];

      // when value is set, set the animator target value
      var prop = {
        key: property,
        setter: function setter(value) {
          if (animator.target === value) {
            return;
          }
          if (animator.resting) {
            activeAnimators++;
          }
          animator.target = value;
        },
        getter: function getter() {
          return viewProps[property];
        }
      };

      // add getters and setters
      addGetSet([prop], [viewInternalAPI, viewExternalAPI], viewProps, true);

      // add it to the list for easy updating from the _write method
      animations.push(animator);
    });

    // expose internal write api
    return {
      write: function write(ts) {
        animations.forEach(function(animation) {
          animation.interpolate(ts);
        });
        // if animators are active, we're busy
        return activeAnimators === 0;
      },
      destroy: function destroy() {}
    };
  };

  var addEvent = function addEvent(element) {
    return function(type, fn) {
      element.addEventListener(type, fn);
    };
  };

  var removeEvent = function removeEvent(element) {
    return function(type, fn) {
      element.removeEventListener(type, fn);
    };
  };

  // mixin
  var listeners = function listeners(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewInternalAPI = _ref.viewInternalAPI,
      viewExternalAPI = _ref.viewExternalAPI,
      viewState = _ref.viewState,
      view = _ref.view;

    var events = [];

    var add = addEvent(view.element);
    var remove = removeEvent(view.element);

    viewExternalAPI.on = function(type, fn) {
      events.push({
        type: type,
        fn: fn
      });
      add(type, fn);
    };

    viewExternalAPI.off = function(type, fn) {
      events.splice(
        events.findIndex(function(event) {
          return event.type === type && event.fn === fn;
        }),
        1
      );
      remove(type, fn);
    };

    return {
      write: function write() {
        // not busy
        return true;
      },
      destroy: function destroy() {
        events.forEach(function(event) {
          remove(event.type, event.fn);
        });
      }
    };
  };

  // add to external api and link to props

  var apis = function apis(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewExternalAPI = _ref.viewExternalAPI;

    addGetSet(mixinConfig, viewExternalAPI, viewProps);
  };

  // add to state,
  // add getters and setters to internal and external api (if not set)
  // set initial state based on props in viewProps
  // apply as transforms each frame

  var defaults$1 = {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
  };

  var styles = function styles(_ref) {
    var mixinConfig = _ref.mixinConfig,
      viewProps = _ref.viewProps,
      viewInternalAPI = _ref.viewInternalAPI,
      viewExternalAPI = _ref.viewExternalAPI,
      view = _ref.view;

    // initial props
    var initialProps = _extends({}, viewProps);

    // current props
    var currentProps = {};

    // we will add those properties to the external API and link them to the viewState
    addGetSet(mixinConfig, [viewInternalAPI, viewExternalAPI], viewProps);

    // override rect on internal and external rect getter so it takes in account transforms
    var getOffset = function getOffset() {
      return [viewProps['translateX'] || 0, viewProps['translateY'] || 0];
    };
    var getScale = function getScale() {
      return [viewProps['scaleX'] || 0, viewProps['scaleY'] || 0];
    };
    var getRect = function getRect() {
      return view.rect
        ? getViewRect(view.rect, view.childViews, getOffset(), getScale())
        : null;
    };
    viewInternalAPI.rect = { get: getRect };
    viewExternalAPI.rect = { get: getRect };

    // apply view props
    mixinConfig.forEach(function(key) {
      viewProps[key] =
        typeof initialProps[key] === 'undefined'
          ? defaults$1[key]
          : initialProps[key];
    });

    // expose api
    return {
      write: function write() {
        // see if props have changed
        if (!propsHaveChanged(currentProps, viewProps)) {
          return;
        }

        // moves element to correct position on screen
        applyStyles(view.element, viewProps);

        // store new transforms
        Object.assign.apply(
          Object,
          [currentProps].concat(toConsumableArray(viewProps))
        );

        // no longer busy
        return true;
      },
      destroy: function destroy() {}
    };
  };

  var propsHaveChanged = function propsHaveChanged(currentProps, newProps) {
    // different amount of keys
    if (Object.keys(currentProps).length !== Object.keys(newProps).length) {
      return true;
    }

    // lets analyze the individual props
    for (var prop in newProps) {
      if (newProps[prop] !== currentProps[prop]) {
        return true;
      }
    }

    return false;
  };

  var applyStyles = function applyStyles(element, _ref2) {
    var opacity = _ref2.opacity,
      translateX = _ref2.translateX,
      translateY = _ref2.translateY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      rotateX = _ref2.rotateX,
      rotateY = _ref2.rotateY,
      rotateZ = _ref2.rotateZ,
      height = _ref2.height;

    var transforms = [];
    var styles = [];

    // transform order is relevant

    // 1. translate
    if (isDefined(translateX) || isDefined(translateY)) {
      transforms.push(
        'translate3d(' +
          (translateX || 0) +
          'px, ' +
          (translateY || 0) +
          'px, 0)'
      );
    }

    // 2. scale
    if (isDefined(scaleX) || isDefined(scaleY)) {
      transforms.push(
        'scale3d(' +
          (isDefined(scaleX) ? scaleX : 1) +
          ', ' +
          (isDefined(scaleY) ? scaleY : 1) +
          ', 1)'
      );
    }

    // 3. rotate
    if (isDefined(rotateZ) || isDefined(rotateY) || isDefined(rotateX)) {
      transforms.push(
        'rotate3d(' +
          (rotateX || 0) +
          ', ' +
          (rotateY || 0) +
          ', ' +
          (rotateZ || 0) +
          ', 360deg)'
      );
    }

    // add transforms
    if (transforms.length) {
      styles.push('transform:' + transforms.join(' '));
    }

    // add opacity
    if (isDefined(opacity)) {
      styles.push('opacity:' + opacity);

      // if we reach zero, we make the element inaccessible
      if (opacity === 0) {
        styles.push('visibility:hidden');
      }

      // if we're below 100% opacity this element can't be clicked
      if (opacity < 1) {
        styles.push('pointer-events:none;');
      }
    }

    // add height
    if (isDefined(height)) {
      styles.push('height:' + height + 'px');
    }

    // apply styles
    var currentStyles = element.getAttribute('style') || '';
    var newStyles = styles.join(';');

    // if new styles does not match current styles, lets update!
    if (
      newStyles.length !== currentStyles.length ||
      newStyles !== currentStyles
    ) {
      element.setAttribute('style', newStyles);
    }
  };

  var Mixins = {
    styles: styles,
    listeners: listeners,
    animations: animations,
    apis: apis
  };

  var updateRect = function updateRect() {
    var rect =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var element =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var style =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    rect.paddingTop = parseInt(style.paddingTop, 10) || 0;
    rect.marginTop = parseInt(style.marginTop, 10) || 0;
    rect.marginRight = parseInt(style.marginRight, 10) || 0;
    rect.marginBottom = parseInt(style.marginBottom, 10) || 0;
    rect.marginLeft = parseInt(style.marginLeft, 10) || 0;

    rect.left = element.offsetLeft || 0;
    rect.top = element.offsetTop || 0;
    rect.width = element.offsetWidth || 0;
    rect.height = element.offsetHeight || 0;

    rect.right = rect.left + rect.width;
    rect.bottom = rect.top + rect.height;

    rect.scrollTop = element.scrollTop;

    rect.hidden = element.offsetParent === null;

    return rect;
  };

  var createView =
    // default view definition
    function createView() {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        _ref$tag = _ref.tag,
        tag = _ref$tag === undefined ? 'div' : _ref$tag,
        _ref$name = _ref.name,
        name = _ref$name === undefined ? null : _ref$name,
        _ref$attributes = _ref.attributes,
        attributes = _ref$attributes === undefined ? {} : _ref$attributes,
        _ref$read = _ref.read,
        read = _ref$read === undefined ? function() {} : _ref$read,
        _ref$write = _ref.write,
        write = _ref$write === undefined ? function() {} : _ref$write,
        _ref$create = _ref.create,
        create = _ref$create === undefined ? function() {} : _ref$create,
        _ref$destroy = _ref.destroy,
        destroy = _ref$destroy === undefined ? function() {} : _ref$destroy,
        _ref$filterFrameActio = _ref.filterFrameActionsForChild,
        filterFrameActionsForChild =
          _ref$filterFrameActio === undefined
            ? function(child, actions) {
                return actions;
              }
            : _ref$filterFrameActio,
        _ref$didCreateView = _ref.didCreateView,
        didCreateView =
          _ref$didCreateView === undefined ? function() {} : _ref$didCreateView,
        _ref$ignoreRect = _ref.ignoreRect,
        ignoreRect = _ref$ignoreRect === undefined ? false : _ref$ignoreRect,
        _ref$mixins = _ref.mixins,
        mixins = _ref$mixins === undefined ? [] : _ref$mixins;

      return function(
        // each view requires reference to store
        store
      ) {
        var props =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};

        // root element should not be changed
        var element = createElement(tag, 'filepond--' + name, attributes);

        // style reference should also not be changed
        var style = window.getComputedStyle(element, null);

        // element rectangle
        var rect = updateRect();
        var frameRect = null;

        // pretty self explanatory
        var childViews = [];

        // loaded mixins
        var activeMixins = [];

        // references to created children
        var ref = {};

        // state used for each instance
        var state = {};

        // list of writers that will be called to update this view
        var writers = [
          write // default writer
        ];

        var readers = [
          read // default reader
        ];

        var destroyers = [
          destroy // default destroy
        ];

        // core view methods
        var getElement = function getElement() {
          return element;
        };
        var getChildViews = function getChildViews() {
          return [].concat(childViews);
        };
        var getReference = function getReference() {
          return ref;
        };
        var createChildView = function createChildView(store) {
          return function(view, props) {
            return view(store, props);
          };
        };
        var getRect = function getRect() {
          if (frameRect) {
            return frameRect;
          }
          frameRect = getViewRect(rect, childViews, [0, 0], [1, 1]);
          return frameRect;
        };
        var getStyle = function getStyle() {
          return style;
        };

        /**
         * Read data from DOM
         * @private
         */
        var _read = function _read() {
          frameRect = null;

          // read child views
          childViews.forEach(function(child) {
            return child._read();
          });

          // update my rectangle
          updateRect(rect, element, style);

          // writers
          readers.forEach(function(reader) {
            return reader({ root: internalAPI, props: props, rect: rect });
          });
        };

        /**
         * Write data to DOM
         * @private
         */
        var _write = function _write(ts) {
          var frameActions =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : [];

          // if no actions, we assume that the view is resting
          var resting = frameActions.length === 0;

          // writers
          writers.forEach(function(writer) {
            var writerResting = writer({
              props: props,
              root: internalAPI,
              actions: frameActions,
              timestamp: ts
            });
            if (writerResting === false) {
              resting = false;
            }
          });

          // run mixins
          activeMixins.forEach(function(mixin) {
            // if one of the mixins is still busy after write operation, we are not resting
            var mixinResting = mixin.write(ts);
            if (mixinResting === false) {
              resting = false;
            }
          });

          // updates child views that are currently attached to the DOM
          childViews
            .filter(function(child) {
              return !!child.element.parentNode;
            })
            .forEach(function(child) {
              // if a child view is not resting, we are not resting
              var childResting = child._write(
                ts,
                filterFrameActionsForChild(child, frameActions)
              );
              if (!childResting) {
                resting = false;
              }
            });

          // append new elements to DOM and update those
          childViews
            .filter(function(child) {
              return !child.element.parentNode;
            })
            .forEach(function(child, index) {
              // append to DOM
              internalAPI.appendChild(child.element, index);

              // call read (need to know the size of these elements)
              child._read();

              // re-call write
              child._write(ts, filterFrameActionsForChild(child, frameActions));

              // we just added somthing to the dom, no rest
              resting = false;
            });

          // let parent know if we are resting
          return resting;
        };

        var _destroy = function _destroy() {
          activeMixins.forEach(function(mixin) {
            return mixin.destroy();
          });
          destroyers.forEach(function(destroyer) {
            return destroyer({ root: internalAPI });
          });
          childViews.forEach(function(child) {
            return child._destroy();
          });
        };

        // sharedAPI
        var sharedAPIDefinition = {
          element: {
            get: getElement
          },
          style: {
            get: getStyle
          },
          childViews: {
            get: getChildViews
          }
        };

        // private API definition
        var internalAPIDefinition = _extends({}, sharedAPIDefinition, {
          rect: {
            get: getRect
          },

          // access to custom children references
          ref: {
            get: getReference
          },

          // dom modifiers
          is: function is(needle) {
            return name === needle;
          },
          appendChild: appendChild(element),
          createChildView: createChildView(store),
          appendChildView: appendChildView(element, childViews),
          removeChildView: removeChildView(element, childViews),
          registerWriter: function registerWriter(writer) {
            return writers.push(writer);
          },
          registerReader: function registerReader(reader) {
            return readers.push(reader);
          },

          // access to data store
          dispatch: store.dispatch,
          query: store.query
        });

        // public view API methods
        var externalAPIDefinition = {
          element: {
            get: getElement
          },
          childViews: {
            get: getChildViews
          },
          rect: {
            get: getRect
          },
          isRectIgnored: function isRectIgnored() {
            return ignoreRect;
          },
          _read: _read,
          _write: _write,
          _destroy: _destroy
        };

        // mixin API methods
        var mixinAPIDefinition = _extends({}, sharedAPIDefinition, {
          rect: {
            get: function get$$1() {
              return rect;
            }
          }
        });

        // add mixin functionality
        forin(mixins, function(name, config) {
          var mixinAPI = Mixins[name]({
            mixinConfig: config,
            viewProps: props,
            viewState: state,
            viewInternalAPI: internalAPIDefinition,
            viewExternalAPI: externalAPIDefinition,
            view: createObject(mixinAPIDefinition)
          });

          if (mixinAPI) {
            activeMixins.push(mixinAPI);
          }
        });

        // construct private api
        var internalAPI = createObject(internalAPIDefinition);

        // create the view
        create({
          root: internalAPI,
          props: props
        });

        // append created child views to root node
        var childCount = element.children.length; // need to know the current child count so appending happens in correct order
        childViews.forEach(function(child, index) {
          internalAPI.appendChild(child.element, childCount + index);
        });

        // call did create
        didCreateView(internalAPI);

        // expose public api
        return createObject(externalAPIDefinition, props);
      };
    };

  var createPainter = function createPainter(update) {
    var fps =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;

    var interval = 1000 / fps;
    var last = null;
    var frame = null;

    var tick = function tick(ts) {
      // queue next tick
      frame = window.requestAnimationFrame(tick);

      // limit fps
      if (!last) {
        last = ts;
      }

      var delta = ts - last;

      if (delta <= interval) {
        // skip frame
        return;
      }

      // align next frame
      last = ts - delta % interval;

      // update view
      update(ts);
    };

    tick(performance.now());

    return {
      pause: function pause() {
        window.cancelAnimationFrame(frame);
      }
    };
  };

  var createUpdater = function createUpdater(apps, reader, writer) {
    return function(ts) {
      // all reads first (as these are free at the start of the frame)
      apps.forEach(function(app) {
        return app[reader]();
      });

      // now update the DOM
      apps.forEach(function(app) {
        return app[writer](ts);
      });
    };
  };

  var createRoute = function createRoute(routes) {
    return function(_ref) {
      var root = _ref.root,
        props = _ref.props,
        _ref$actions = _ref.actions,
        actions = _ref$actions === undefined ? [] : _ref$actions;

      actions
        .filter(function(action) {
          return routes[action.type];
        })
        .forEach(function(action) {
          return routes[action.type]({
            root: root,
            props: props,
            action: action.data
          });
        });
    };
  };

  var insertBefore = function insertBefore(newNode, referenceNode) {
    return referenceNode.parentNode.insertBefore(newNode, referenceNode);
  };

  var insertAfter = function insertAfter(newNode, referenceNode) {
    return referenceNode.parentNode.insertBefore(
      newNode,
      referenceNode.nextSibling
    );
  };

  var isArray = function isArray(value) {
    return Array.isArray(value);
  };

  var trim = function trim(str) {
    return str.trim();
  };

  var toString = function toString(value) {
    return '' + value;
  };

  var toArray$1 = function toArray(value) {
    var splitter =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

    if (isEmpty(value)) {
      return [];
    }
    if (isArray(value)) {
      return value;
    }
    return toString(value)
      .split(splitter)
      .map(trim)
      .filter(function(str) {
        return str.length;
      });
  };

  var isBoolean = function isBoolean(value) {
    return typeof value === 'boolean';
  };

  var toBoolean = function toBoolean(value) {
    return isBoolean(value) ? value : value === 'true';
  };

  var isString = function isString(value) {
    return typeof value === 'string';
  };

  var toNumber = function toNumber(value) {
    return isNumber(value)
      ? value
      : isString(value) ? toString(value).replace(/[a-z]+/gi, '') : 0;
  };

  var toInt = function toInt(value) {
    return parseInt(toNumber(value), 10);
  };

  var toFloat = function toFloat(value) {
    return parseFloat(toNumber(value));
  };

  var isInt = function isInt(value) {
    return isNumber(value) && isFinite(value) && Math.floor(value) === value;
  };

  var toBytes = function toBytes(value) {
    // is in bytes
    if (isInt(value)) {
      return value;
    }

    // is natural file size
    var naturalFileSize = toString(value).trim();

    // if is value in megabytes
    if (/MB$/i.test(naturalFileSize)) {
      naturalFileSize = naturalFileSize.replace(/MB$i/, '').trim();
      return toInt(naturalFileSize) * 1000 * 1000;
    }

    // if is value in kilobytes
    if (/KB/i.test(naturalFileSize)) {
      naturalFileSize = naturalFileSize.replace(/KB$i/, '').trim();
      return toInt(naturalFileSize) * 1000;
    }

    return toInt(naturalFileSize);
  };

  var toFunctionReference = function toFunctionReference(string) {
    var ref = self;
    var levels = string.split('.');
    var level = null;
    while ((level = levels.shift())) {
      ref = ref[level];
      if (!ref) {
        return null;
      }
    }
    return ref;
  };

  var methods = {
    process: 'POST',
    revert: 'DELETE',
    fetch: 'GET',
    restore: 'GET',
    load: 'GET'
  };

  var createServerAPI = function createServerAPI(outline) {
    var api = {};

    api.url = isString(outline) ? outline : outline.url || '';
    api.timeout = outline.timeout ? parseInt(outline.timeout, 10) : 7000;

    forin(methods, function(key) {
      api[key] = createAction(key, outline[key], methods[key], api.timeout);
    });

    return api;
  };

  var createAction = function createAction(name, outline, method, timeout) {
    // is explicitely set to null so disable
    if (outline === null) {
      return null;
    }

    // if is custom function, done! Dev handles everything.
    if (typeof outline === 'function') {
      return outline;
    }

    // build action object
    var action = {
      url: method === 'GET' ? '?' + name + '=' : '',
      method: method,
      headers: {},
      withCredentials: false,
      timeout: timeout
    };

    // is a single url
    if (isString(outline)) {
      action.url = outline;
      return action;
    }

    // overwrite
    Object.assign(action, outline);

    // see if should reformat headers;
    if (isString(action.headers)) {
      var parts = action.headers.split(/:(.+)/);
      action.headers = {
        header: parts[0],
        value: parts[1]
      };
    }

    // if is bool withCredentials
    action.withCredentials = toBoolean(action.withCredentials);

    return action;
  };

  var toServerAPI = function toServerAPI(value) {
    return createServerAPI(value);
  };

  var isNull = function isNull(value) {
    return value === null;
  };

  var isObject = function isObject(value) {
    return (
      (typeof value === 'undefined' ? 'undefined' : _typeof(value)) ===
        'object' && value !== null
    );
  };

  var isAPI = function isAPI(value) {
    return (
      isObject(value) &&
      isString(value.url) &&
      isObject(value.process) &&
      isObject(value.revert) &&
      isObject(value.restore) &&
      isObject(value.fetch)
    );
  };

  var getType = function getType(value) {
    if (isArray(value)) {
      return 'array';
    }

    if (isNull(value)) {
      return 'null';
    }

    if (isInt(value)) {
      return 'int';
    }

    if (/^[0-9]+ ?(?:GB|MB|KB)$/gi.test(value)) {
      return 'bytes';
    }

    if (isAPI(value)) {
      return 'api';
    }

    return typeof value === 'undefined' ? 'undefined' : _typeof(value);
  };

  var conversionTable = {
    array: toArray$1,
    boolean: toBoolean,
    int: function int(value) {
      return getType(value) === 'bytes' ? toBytes(value) : toInt(value);
    },
    float: toFloat,
    bytes: toBytes,
    string: toString,
    serverapi: toServerAPI,
    function: function _function(value) {
      return toFunctionReference(value);
    }
  };

  var convertTo = function convertTo(value, type) {
    return conversionTable[type](value);
  };

  var getValueByType = function getValueByType(
    newValue,
    defaultValue,
    valueType
  ) {
    // can always assign default value
    if (newValue === defaultValue) {
      return newValue;
    }

    // get the type of the new value
    var newValueType = getType(newValue);

    // is valid type?
    if (newValueType !== valueType) {
      // is string input, let's attempt to convert
      var convertedValue = convertTo(newValue, valueType);

      // what is the type now
      newValueType = getType(convertedValue);

      // no valid conversions found
      if (convertedValue === null) {
        throw 'Trying to assign value with incorrect type to "' +
          option +
          '", allowed type: "' +
          valueType +
          '"';
      } else {
        newValue = convertedValue;
      }
    }

    // assign new value
    return newValue;
  };

  var createOption = function createOption(option, defaultValue, valueType) {
    var currentValue = defaultValue;

    return {
      get: function get() {
        return currentValue;
      },
      set: function set(newValue) {
        currentValue = getValueByType(newValue, defaultValue, valueType);
      }
    };
  };

  var createOptions = function createOptions(options) {
    var obj = {};
    forin(options, function(prop) {
      var optionDefinition = options[prop];
      obj[prop] = createOption(prop, optionDefinition[0], optionDefinition[1]);
    });
    return createObject(obj);
  };

  var createInitialState = function createInitialState(options) {
    return {
      // model
      items: [],

      // options
      options: createOptions(options)
    };
  };

  var fromCamels = function fromCamels(string) {
    var separator =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
    return string
      .split(/(?=[A-Z])/)
      .map(function(part) {
        return part.toLowerCase();
      })
      .join(separator);
  };

  var createOptionAPI = function createOptionAPI(store, options) {
    var obj = {};
    forin(options, function(key) {
      obj[key] = {
        get: function get() {
          return store.getState().options[key];
        },
        set: function set(value) {
          store.dispatch('SET_' + fromCamels(key, '_').toUpperCase(), {
            value: value
          });
        }
      };
    });
    return obj;
  };

  var createOptionActions = function createOptionActions(options) {
    return function(dispatch, query, state) {
      var obj = {};
      forin(options, function(key) {
        var name = fromCamels(key, '_').toUpperCase();
        obj['SET_' + name] = function(action) {
          try {
            state.options[key] = action.value;
          } catch (e) {}
          // nope, failed

          // we successfully set the value of this option
          dispatch('DID_SET_' + name, { value: state.options[key] });
        };
      });
      return obj;
    };
  };

  var createOptionQueries = function createOptionQueries(options) {
    return function(state) {
      var obj = {};
      forin(options, function(key) {
        obj['GET_' + fromCamels(key, '_').toUpperCase()] = function(action) {
          return state.options[key];
        };
      });
      return obj;
    };
  };

  var InteractionMethod = {
    API: 1,
    DROP: 2,
    BROWSE: 3,
    PASTE: 4,
    NONE: 5
  };

  var getUniqueId = function getUniqueId() {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  };

  var forEachDelayed = function forEachDelayed(items, cb) {
    var delay =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 75;
    return items.map(function(item, index) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          cb(item);
          resolve();
        }, delay * index);
      });
    });
  };

  var arrayRemove = function arrayRemove(arr, index) {
    return arr.splice(index, 1);
  };

  var on = function on() {
    var listeners = [];
    var off = function off(event, cb) {
      arrayRemove(
        listeners,
        listeners.findIndex(function(listener) {
          return listener.event === event && (listener.cb === cb || !cb);
        })
      );
    };
    return {
      fire: function fire(event) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        setTimeout(function() {
          listeners
            .filter(function(listener) {
              return listener.event === event;
            })
            .map(function(listener) {
              return listener.cb;
            })
            .forEach(function(cb) {
              cb.apply(undefined, args);
            });
        }, 0);
      },
      on: function on(event, cb) {
        listeners.push({ event: event, cb: cb });
      },
      onOnce: function onOnce(event, _cb) {
        listeners.push({
          event: event,
          cb: function cb() {
            off(event, _cb);
            _cb.apply(undefined, arguments);
          }
        });
      },
      off: off
    };
  };

  var copyObjectPropertiesToObject = function copyObjectPropertiesToObject(
    src,
    target,
    excluded
  ) {
    Object.getOwnPropertyNames(src)
      .filter(function(property) {
        return !excluded.includes(property);
      })
      .forEach(function(key) {
        return Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(src, key)
        );
      });
  };

  var PRIVATE_METHODS = [
    'fire',
    'process',
    'revert',
    'load',
    'on',
    'off',
    'onOnce',
    'retryLoad'
  ];

  var createItemAPI = function createItemAPI(item) {
    var api = {};
    copyObjectPropertiesToObject(item, api, PRIVATE_METHODS);
    return api;
  };

  var getNonNumeric = function getNonNumeric(str) {
    return /[^0-9]+/.exec(str);
  };

  var getDecimalSeparator = function getDecimalSeparator() {
    return getNonNumeric((1.1).toLocaleString())[0];
  };

  var getThousandsSeparator = function getThousandsSeparator() {
    // Added for browsers that do not return the thousands separator (happend on native browser Android 4.4.4)
    // We check against the normal toString output and if they're the same return a comma when decimal separator is a dot
    var decimalSeparator = getDecimalSeparator();
    var thousandsStringWithSeparator = (1000.0).toLocaleString();
    var thousandsStringWithoutSeparator = (1000.0).toString();
    if (thousandsStringWithSeparator !== thousandsStringWithoutSeparator) {
      return getNonNumeric(thousandsStringWithSeparator)[0];
    }
    return decimalSeparator === '.' ? ',' : '.';
  };

  var Type = {
    BOOLEAN: 'boolean',
    INT: 'int',
    STRING: 'string',
    ARRAY: 'array',
    OBJECT: 'object',
    FUNCTION: 'function',
    ACTION: 'action',
    SERVER_API: 'serverapi',
    REGEX: 'regex'
  };

  // all registered filters
  var filters = [];

  // loops over matching filters and passes options to each filter, returning the mapped results
  var applyFilterChain = function applyFilterChain(key, value, utils) {
    return new Promise(function(resolve, reject) {
      // find matching filters for this key
      var matchingFilters = filters
        .filter(function(f) {
          return f.key === key;
        })
        .map(function(f) {
          return f.cb;
        });

      // resolve now
      if (matchingFilters.length === 0) {
        resolve(value);
        return;
      }

      // first filter to kick things of
      var initialFilter = matchingFilters.shift();

      // chain filters
      matchingFilters
        .reduce(
          // loop over promises passing value to next promise
          function(current, next) {
            return current.then(function(value) {
              return next(value, utils);
            });
          },

          // call initial filter, will return a promise
          initialFilter(value, utils)

          // all executed
        )
        .then(function(value) {
          return resolve(value);
        })
        .catch(function(error) {
          return reject(error);
        });
    });
  };

  var applyFilters = function applyFilters(key, value, utils) {
    return filters
      .filter(function(f) {
        return f.key === key;
      })
      .map(function(f) {
        return f.cb(value, utils);
      });
  };

  // adds a new filter to the list
  var addFilter = function addFilter(key, cb) {
    return filters.push({ key: key, cb: cb });
  };

  var extendDefaultOptions = function extendDefaultOptions(additionalOptions) {
    return Object.assign(defaultOptions, additionalOptions);
  };

  var getOptions$1 = function getOptions() {
    return _extends({}, defaultOptions);
  };

  var setOptions$1 = function setOptions(opts) {
    forin(opts, function(key, value) {
      // key does not exist, so this option cannot be set
      if (!defaultOptions[key]) {
        return;
      }
      defaultOptions[key][0] = getValueByType(
        value,
        defaultOptions[key][0],
        defaultOptions[key][1]
      );
    });
  };

  // default options on app
  var defaultOptions = {
    // the id to add to the root element
    id: [null, Type.STRING],

    // input field name to use
    name: ['filepond', Type.STRING],

    // classname to put on wrapper
    className: [null, Type.STRING],

    // is the field required
    required: [false, Type.BOOLEAN],

    // Allow media capture when value is set
    captureMethod: [null, Type.STRING],
    // - "camera", "microphone" or "camcorder",
    // - Does not work with multiple on apple devices
    // - If set, acceptedFileTypes must be made to match with media wildcard "image/*", "audio/*" or "video/*"

    // Feature toggles
    allowDrop: [true, Type.BOOLEAN], // Allow dropping of files
    allowBrowse: [true, Type.BOOLEAN], // Allow browsing the file system
    allowPaste: [true, Type.BOOLEAN], // Allow pasting files
    allowMultiple: [false, Type.BOOLEAN], // Allow multiple files (disabled by default, as multiple attribute is also required on input to allow multiple)
    allowReplace: [true, Type.BOOLEAN], // Allow dropping a file on other file to replace it (only works when multiple is set to false)
    allowRevert: [true, Type.BOOLEAN], // Allows user to revert file upload
    // TODO: allowDrag: [true, Type.BOOLEAN],					// Allow dragging files
    // TODO: allowSwipe: [true, Type.BOOLEAN],					// Allow swipe to remove files
    // TODO: allowRemoveAll: [true, Type.BOOLEAN],				// Allow removing all items at once
    // TODO: allowUploadAll: [true, Type.BOOLEAN],				// Allow uploading all items at once

    // Input requirements
    maxFiles: [null, Type.INT], // Max number of files

    // Drag 'n Drop related
    dropOnPage: [false, Type.BOOLEAN], // Allow dropping of files anywhere on page (prevents browser from opening file if dropped outside of Up)
    dropOnElement: [true, Type.BOOLEAN], // Drop needs to happen on element (set to false to also load drops outside of Up)
    dropValidation: [false, Type.BOOLEAN], // Enable or disable validating files on drop
    ignoredFiles: [['.ds_store', 'thumbs.db', 'desktop.ini'], Type.ARRAY],
    // catchDirectories: [true, Type.BOOLEAN],					// Allow dropping directories in modern browsers

    // Upload related
    instantUpload: [true, Type.BOOLEAN], // Should upload files immidiately on drop
    // TODO: parallel: [1, Type.INT],							// Maximum files to upload in parallel
    // TODO: chunks: [false, Type.BOOLEAN],						// Use chunk uploading
    // TODO: chunkSize: [.5 * (1024 * 1024), Type.INT],			// Upload in 512KB chunks

    // by default no async api is supplied
    /* expected format
    {
    url: '',
    timeout: 1000,
    process: {
    url: '',
    method: 'POST',
    withCredentials: false,
    headers: {}
    },
    revert: {
    url: '',
    method: 'DELETE',
    withCredentials: false,
    headers: {}
    },
    fetch: {
    url: '',
    method: 'GET',
    withCredentials: false,
    headers: {}
    },
    restore: {
    url: '',
    method: 'GET',
    withCredentials: false,
    headers: {}
    }
    }
    */
    server: [null, Type.SERVER_API],

    // Labels and status messages
    labelDecimalSeparator: [getDecimalSeparator(), Type.STRING], // Default is locale separator
    labelThousandsSeparator: [getThousandsSeparator(), Type.STRING], // Default is locale separator

    labelIdle: [
      'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
      Type.STRING
    ],

    labelFileWaitingForSize: ['Waiting for size', Type.STRING],
    labelFileSizeNotAvailable: ['Size not available', Type.STRING],
    labelFileCountSingular: ['file in list', Type.STRING],
    labelFileCountPlural: ['files in list', Type.STRING],
    labelFileLoading: ['Loading', Type.STRING],
    labelFileAdded: ['Added', Type.STRING], // assistive only
    labelFileRemoved: ['Removed', Type.STRING], // assistive only
    labelFileLoadError: ['Error during load', Type.STRING],
    labelFileProcessing: ['Uploading', Type.STRING],
    labelFileProcessingComplete: ['Upload complete', Type.STRING],
    labelFileProcessingAborted: ['Upload cancelled', Type.STRING],
    labelFileProcessingError: ['Error during upload', Type.STRING],
    // labelFileProcessingPaused: ['Upload paused', Type.STRING],

    labelTapToCancel: ['tap to cancel', Type.STRING],
    labelTapToRetry: ['tap to retry', Type.STRING],
    labelTapToUndo: ['tap to undo', Type.STRING],
    // labelTapToPause: ['tap to pause', Type.STRING],
    // labelTapToResume: ['tap to resume', Type.STRING],

    labelButtonRemoveItem: ['Remove', Type.STRING],
    labelButtonAbortItemLoad: ['Abort', Type.STRING],
    labelButtonRetryItemLoad: ['Retry', Type.STRING],
    labelButtonAbortItemProcessing: ['Cancel', Type.STRING],
    labelButtonUndoItemProcessing: ['Undo', Type.STRING],
    labelButtonRetryItemProcessing: ['Retry', Type.STRING],
    labelButtonProcessItem: ['Upload', Type.STRING],

    // make sure width and height plus viewpox are even numbers so icons are nicely centered
    iconRemove: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],
    iconProcess: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
      Type.STRING
    ],
    iconRetry: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],
    iconUndo: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],
    iconDone: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
      Type.STRING
    ],

    // event handlers
    oninit: [null, Type.FUNCTION],
    onwarning: [null, Type.FUNCTION],
    onerror: [null, Type.FUNCTION],
    onaddfilestart: [null, Type.FUNCTION],
    onaddfileprogress: [null, Type.FUNCTION],
    onaddfile: [null, Type.FUNCTION],
    onprocessfilestart: [null, Type.FUNCTION],
    onprocessfileprogress: [null, Type.FUNCTION],
    onprocessfileabort: [null, Type.FUNCTION],
    onprocessfilerevert: [null, Type.FUNCTION],
    onprocessfile: [null, Type.FUNCTION],
    onremovefile: [null, Type.FUNCTION],

    // custom initial files array
    files: [[], Type.ARRAY]
  };

  var isFunction = function isFunction(value) {
    return typeof value === 'function';
  };

  var getItemByQuery = function getItemByQuery(items, query) {
    // just return first index
    if (isEmpty(query)) {
      return items[0] || null;
    }

    // query is index
    if (isInt(query)) {
      return items[query] || null;
    }

    // if query is item, get the id
    if (
      (typeof query === 'undefined' ? 'undefined' : _typeof(query)) === 'object'
    ) {
      query = query.id;
    }

    // assume query is a string and return item by id
    return (
      items.find(function(item) {
        return item.id === query;
      }) || null
    );
  };

  var queries = function queries(state) {
    return {
      GET_ITEM: function GET_ITEM(query) {
        return getItemByQuery(state.items, query);
      },

      GET_ITEMS: function GET_ITEMS(query) {
        return [].concat(toConsumableArray(state.items));
      },

      GET_ITEM_NAME: function GET_ITEM_NAME(query) {
        var item = getItemByQuery(state.items, query);
        return item ? item.filename : null;
      },

      GET_ITEM_SIZE: function GET_ITEM_SIZE(query) {
        var item = getItemByQuery(state.items, query);
        return item ? item.fileSize : null;
      },

      GET_TOTAL_ITEMS: function GET_TOTAL_ITEMS() {
        return state.items.length;
      },

      IS_ASYNC: function IS_ASYNC() {
        return (
          isObject(state.options.server) &&
          (isObject(state.options.server.process) ||
            isFunction(state.options.server.process))
        );
      }
    };
  };

  var getItemIndexByQuery = function getItemIndexByQuery(items, query) {
    // just return first index
    if (isEmpty(query)) {
      return 0;
    }

    // invalid queries
    if (!isString(query)) {
      return -1;
    }

    // return item by id (or -1 if not found)
    return items.findIndex(function(item) {
      return item.id === query;
    });
  };

  var removeIndex = function removeIndex(arr, index) {
    return arr.splice(index, 1);
  };

  var hasRoomForItem = function hasRoomForItem(state) {
    var count = state.items.length;

    // if cannot have multiple items, to add one item it should currently not contain items
    if (!state.options.allowMultiple) {
      return count === 0;
    }

    // if allows multiple items, we check if a max item count has been set, if not, there's no limit
    var maxFileCount = state.options.maxFiles;
    if (maxFileCount === null) {
      return true;
    }

    // we check if the current count is smaller than the max count, if so, another file can still be added
    if (count < maxFileCount) {
      return true;
    }

    // no more room for another file
    return false;
  };

  var limit = function limit(value, min, max) {
    return Math.max(Math.min(max, value), min);
  };

  var arrayInsert = function arrayInsert(arr, index, item) {
    return arr.splice(index, 0, item);
  };

  var insertItem = function insertItem(items, item, index) {
    if (isEmpty(item)) {
      return null;
    }

    // if index is undefined, append
    if (typeof index === 'undefined') {
      items.push(item);
      return item;
    }

    // limit the index to the size of the items array
    index = limit(index, 0, items.length);

    // add item to array
    arrayInsert(items, index, item);

    // expose
    return item;
  };

  var leftPad = function leftPad(value) {
    var padding =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return (padding + value).slice(-padding.length);
  };

  var getDateString = function getDateString() {
    var date =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : new Date();
    return (
      date.getFullYear() +
      '-' +
      leftPad(date.getMonth() + 1, '00') +
      '-' +
      leftPad(date.getDate(), '00') +
      '_' +
      leftPad(date.getHours(), '00') +
      '-' +
      leftPad(date.getMinutes(), '00') +
      '-' +
      leftPad(date.getSeconds(), '00')
    );
  };

  var isBase64DataURI = function isBase64DataURI(str) {
    return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(
      str
    );
  };

  var getFilenameFromURL = function getFilenameFromURL(url) {
    return url
      .split('/')
      .pop()
      .split('?')
      .shift();
  };

  var getExtensionFromFilename = function getExtensionFromFilename(name) {
    return name.split('.').pop();
  };

  var guesstimateExtension = function guesstimateExtension(type) {
    // if no extension supplied, exit here
    if (typeof type !== 'string') {
      return '';
    }

    // get subtype
    var subtype = type.split('/').pop();

    // is svg subtype
    if (/svg/.test(subtype)) {
      return 'svg';
    }

    if (/zip|compressed/.test(subtype)) {
      return 'zip';
    }

    if (/plain/.test(subtype)) {
      return 'txt';
    }

    if (/msword/.test(subtype)) {
      return 'doc';
    }

    // if is valid subtype
    if (/[a-z]+/.test(subtype)) {
      // always use jpg extension
      if (subtype === 'jpeg') {
        return 'jpg';
      }

      // return subtype
      return subtype;
    }

    return '';
  };

  var getFileFromBlob = function getFileFromBlob(blob, filename) {
    var type =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var extension =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var file =
      typeof type === 'string'
        ? blob.slice(0, blob.size, type)
        : blob.slice(0, blob.size, blob.type);
    file.lastModifiedDate = new Date();

    // if filename supplied but no extension and filename has extension
    if (filename && extension === null && getExtensionFromFilename(filename)) {
      file.name = filename;
    } else {
      extension = extension || guesstimateExtension(file.type);
      file.name = filename + (extension ? '.' + extension : '');
    }
    return file;
  };

  var getBlobBuilder = function getBlobBuilder() {
    return (window.BlobBuilder =
      window.BlobBuilder ||
      window.WebKitBlobBuilder ||
      window.MozBlobBuilder ||
      window.MSBlobBuilder);
  };

  var createBlob = function createBlob(arrayBuffer, mimeType) {
    var BB = getBlobBuilder();

    if (BB) {
      var bb = new BB();
      bb.append(arrayBuffer);
      return bb.getBlob(mimeType);
    }

    return new Blob([arrayBuffer], {
      type: mimeType
    });
  };

  var getBlobFromByteStringWithMimeType = function getBlobFromByteStringWithMimeType(
    byteString,
    mimeType
  ) {
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return createBlob(ab, mimeType);
  };

  var getMimeTypeFromBase64DataURI = function getMimeTypeFromBase64DataURI(
    dataURI
  ) {
    return (/^data:(.+);/.exec(dataURI) || [])[1] || null;
  };

  var getBase64DataFromBase64DataURI = function getBase64DataFromBase64DataURI(
    dataURI
  ) {
    // get data part of string (remove data:image/jpeg...,)
    var data = dataURI.split(',')[1];

    // remove any whitespace as that causes InvalidCharacterError in IE
    return data.replace(/\s/g, '');
  };

  var getByteStringFromBase64DataURI = function getByteStringFromBase64DataURI(
    dataURI
  ) {
    return atob(getBase64DataFromBase64DataURI(dataURI));
  };

  var getBlobFromBase64DataURI = function getBlobFromBase64DataURI(dataURI) {
    var mimeType = getMimeTypeFromBase64DataURI(dataURI);
    var byteString = getByteStringFromBase64DataURI(dataURI);

    return getBlobFromByteStringWithMimeType(byteString, mimeType);
  };

  var getFileFromBase64DataURI = function getFileFromBase64DataURI(
    dataURI,
    filename,
    extension
  ) {
    return getFileFromBlob(
      getBlobFromBase64DataURI(dataURI),
      filename,
      null,
      extension
    );
  };

  var getFilenameFromHeaders = function getFilenameFromHeaders(headers) {
    var rows = headers.split('\n');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (
        var _iterator = rows[Symbol.iterator](), _step;
        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
        _iteratorNormalCompletion = true
      ) {
        var header = _step.value;

        var dirtyFilename = header.split('filename=')[1];
        if (!dirtyFilename) {
          continue;
        }
        return dirtyFilename.replace(/["']+/g, '');
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return null;
  };

  var renameFile = function renameFile(file, name) {
    var renamedFile = file.slice(0, file.size, file.type);
    renamedFile.lastModifiedDate = file.lastModifiedDate;
    renamedFile.name = name;
    return renamedFile;
  };

  var createFileLoader = function createFileLoader(fetchFn) {
    var state = {
      source: null,
      complete: false,
      progress: 0,
      size: null,
      timestamp: null,
      duration: 0,
      request: null
    };

    var getProgress = function getProgress() {
      return state.progress;
    };
    var abort = function abort() {
      if (!state.request) {
        return;
      }
      state.request.abort();
    };

    // load source
    var load = function load() {
      // get quick reference
      var source = state.source;

      api.fire('init', source);

      // Load Files
      if (source instanceof File) {
        api.fire('load', source);
      } else if (source instanceof Blob) {
        // Load blobs, set default name to current date
        api.fire('load', getFileFromBlob(source, getDateString()));
      } else if (isBase64DataURI(source)) {
        // Load base 64, set default name to current date
        api.fire('load', getFileFromBase64DataURI(source, getDateString()));
      } else {
        // Deal as if is external URL, let's load it!
        loadURL(source);
      }
    };

    // loads a url
    var loadURL = function loadURL(url) {
      // is remote url and no fetch method supplied
      if (!fetchFn) {
        api.fire('error', {
          type: 'error',
          body: "Can't load URL",
          code: 400
        });
        return;
      }

      // set request start
      state.timestamp = Date.now();

      // load file
      state.request = fetchFn(
        url,
        function(response) {
          // update duration
          state.duration = Date.now() - state.timestamp;

          // done!
          state.complete = true;

          // turn blob response into a file
          if (response instanceof Blob) {
            response = getFileFromBlob(
              response,
              getFilenameFromURL(url) || getDateString()
            );
          }

          api.fire('load', response instanceof Blob ? response : response.body);
        },
        function(error) {
          api.fire(
            'error',
            typeof error === 'string'
              ? {
                  type: 'error',
                  code: 0,
                  body: error
                }
              : error
          );
        },
        function(computable, current, total) {
          // collected some meta data already
          if (total) {
            state.size = total;
          }

          // update duration
          state.duration = Date.now() - state.timestamp;

          // if we can't compute progress, we're not going to fire progress events
          if (!computable) {
            state.progress = null;
            return;
          }

          // update progress percentage
          state.progress = current / total;

          // expose
          api.fire('progress', state.progress);
        },
        function() {
          api.fire('abort');
        },
        function(response) {
          api.fire('meta', {
            size: state.size,
            filename: getFilenameFromHeaders(
              typeof response === 'string' ? response : response.headers
            )
          });
        }
      );
    };

    var api = _extends({}, on(), {
      setSource: function setSource(source) {
        return (state.source = source);
      },
      getProgress: getProgress, // file load progress
      abort: abort, // abort file load
      load: load // start load
    });

    return api;
  };

  var createResponse = function createResponse(type, code, body, headers) {
    return {
      type: type,
      code: code,
      body: body,
      headers: headers
    };
  };

  var sendRequest = function sendRequest(data, url, options) {
    var api = {
      onheaders: function onheaders() {},
      onprogress: function onprogress() {},
      onload: function onload() {},
      onerror: function onerror() {},
      onabort: function onabort() {},
      abort: function abort() {
        aborted = true;
        xhr.abort();
      }
    };

    // timeout identifier, only used when timeout is defined
    var timeoutId = null;
    var timedOut = false;
    var aborted = false;
    var headersReceived = false;

    // set default options
    options = _extends(
      {
        method: 'POST',
        headers: {},
        withCredentials: false
      },
      options
    );

    // if method is GET, add any received data to url
    if (/GET/i.test(options.method) && data) {
      //url = `${ url }${ hasQueryString(url) ? '&' : '?' }data=${ encodeURIComponent(typeof data === 'string' ? data : JSON.stringify(data)) }`;
      url =
        '' +
        url +
        encodeURIComponent(
          typeof data === 'string' ? data : JSON.stringify(data)
        );
    }

    // create request
    var xhr = new XMLHttpRequest();

    // progress of load
    var process = /GET/i.test(options.method) ? xhr : xhr.upload;
    process.onprogress = function(e) {
      // progress event received, timeout no longer needed
      clearTimeout(timeoutId);

      // no progress event when aborted ( onprogress is called once after abort() )
      if (aborted || timedOut) {
        return;
      }

      api.onprogress(e.lengthComputable, e.loaded, e.total);
    };

    // tries to get header info to the app as fast as possible
    xhr.onreadystatechange = function() {
      // not interesting in these states ('unsent' and 'openend' as they don't give us any additional info)
      if (xhr.readyState < 2) {
        return;
      }

      // no server response
      if (xhr.readyState === 4 && xhr.status === 0) {
        return;
      }

      // timeout no longer needed as connection is setup
      clearTimeout(timeoutId);

      if (headersReceived) {
        return;
      }

      headersReceived = true;

      // we've probably received some useful data in response headers
      api.onheaders(
        createResponse('headers', xhr.status, null, xhr.getAllResponseHeaders())
      );
    };

    // load successful
    xhr.onload = function() {
      // is classified as valid response
      if (xhr.status >= 200 && xhr.status < 300) {
        api.onload(
          createResponse(
            'load',
            xhr.status,
            xhr.response,
            xhr.getAllResponseHeaders()
          )
        );
      } else {
        // not a valid response
        api.onerror(createResponse('error', xhr.status, xhr.statusText));
      }
    };

    // error during load
    xhr.onerror = function() {
      api.onerror(createResponse('error', xhr.status, xhr.statusText));
    };

    // request aborted
    xhr.onabort = function() {
      if (timedOut) {
        return;
      }
      aborted = true;
      api.onabort();
    };

    // set timeout if defined
    if (isInt(options.timeout)) {
      timeoutId = setTimeout(function() {
        timedOut = true;
        api.onerror(createResponse('error', 0, 'timeout'));
        api.abort();
      }, options.timeout);
    }

    // add headers
    xhr.open(options.method, url, true);
    Object.keys(options.headers).forEach(function(key) {
      xhr.setRequestHeader(key, options.headers[key]);
    });

    // set type of response
    if (options.responseType) {
      xhr.responseType = options.responseType;
    }

    // set credentials
    if (options.withCredentials) {
      xhr.withCredentials = true;
    }

    // let's send our data
    xhr.send(data);

    return api;
  };

  var createFetchFunction = function createFetchFunction() {
    var apiUrl =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];

    // custom handler (should also handle file, load, error, progress and abort)
    if (typeof action === 'function') {
      return action;
    }

    // no action supplied
    if (!action || !isString(action.url)) {
      return null;
    }

    // internal handler
    return function(url, load, error, progress, abort, headers) {
      // do local or remote request based on if the url is external
      var request = sendRequest(
        url,
        apiUrl + action.url,
        _extends({}, action, {
          responseType: 'blob'
        })
      );
      request.onload = function(response) {
        // turn blob into a file
        response.body = getFileFromBlob(
          response.body,
          getFilenameFromHeaders(response.headers) ||
            getFilenameFromURL(url) ||
            getDateString()
        );

        // pass updated response to handler method
        load(response);
      };
      request.onerror = error;
      request.onprogress = progress;
      request.onabort = abort;
      request.onheaders = headers;

      // should return request
      return request;
    };
  };

  /*
function signature:
  (data, load, error, progress, abort) => {
    return {
    abort:() => {}
  }
}
*/
  var createProcessorFunction = function createProcessorFunction() {
    var apiUrl =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];
    var name = arguments[2];

    // custom handler (should also handle file, load, error, progress and abort)
    if (typeof action === 'function') {
      return function() {
        for (
          var _len = arguments.length, params = Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          params[_key] = arguments[_key];
        }

        return action.apply(undefined, [name].concat(params));
      };
    }

    // no action supplied
    if (!action || !isString(action.url)) {
      return null;
    }

    // internal handler
    return function(file, metadata, load, error, progress, abort) {
      // no file received
      if (!file) {
        return;
      }

      // create formdata object
      var formData = new FormData();
      formData.append(name, file, file.name);

      // add metadata uder same name
      if (isObject(metadata)) {
        formData.append(name, JSON.stringify(metadata));
      }

      // send request object
      var request = sendRequest(formData, apiUrl + action.url, action);
      request.onload = load;
      request.onerror = error;
      request.onprogress = progress;
      request.onabort = abort;

      // should return request
      return request;
    };
  };

  /*
 function signature:
 (uniqueFileId, load, error) => { }
 */
  var createRevertFunction = function createRevertFunction() {
    var apiUrl =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];

    // is custom implementation
    if (typeof action === 'function') {
      return action;
    }

    // no action supplied, return stub function, interface will work, but file won't be removed
    if (!action || !isString(action.url)) {
      return function(uniqueFileId, load) {
        return load();
      };
    }

    // internal implementation
    return function(uniqueFileId, load, error) {
      var request = sendRequest(
        uniqueFileId,
        apiUrl + action.url,
        action // contains method, headers and withCredentials properties
      );
      request.onload = load;
      request.onerror = error;
      return request;
    };
  };

  var getRandomNumber = function getRandomNumber() {
    var min =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return min + Math.random() * (max - min);
  };

  var createPerceivedPerformanceUpdater = function createPerceivedPerformanceUpdater(
    cb
  ) {
    var duration =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var tickMin =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 25;
    var tickMax =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 250;

    var timeout = null;
    var start = Date.now();

    var tick = function tick() {
      var runtime = Date.now() - start;
      var delay = getRandomNumber(tickMin, tickMax);

      if (runtime + delay > duration) {
        delay = runtime + delay - duration;
      }

      var progress = runtime / duration;
      if (progress >= 1) {
        cb(1);
        return;
      }

      cb(progress);

      timeout = setTimeout(tick, delay);
    };

    tick();

    return {
      clear: function clear() {
        clearTimeout(timeout);
      }
    };
  };

  var createFileProcessor = function createFileProcessor(processFn) {
    var state = {
      complete: false,
      perceivedProgress: 0,
      perceivedPerformanceUpdater: null,
      progress: null,
      timestamp: null,
      perceivedDuration: 0,
      duration: 0,
      request: null,
      response: null
    };

    var process = function process(file, metadata) {
      var progressFn = function progressFn() {
        // we've not yet started the real download, stop here
        // the request might not go through, server trouble, stuff like that
        // if state.progress is null, the server does not allow computing progress
        if (state.duration === 0 || state.progress === null) {
          return;
        }

        // as we're now processing, fire the progress event
        api.fire('progress', api.getProgress());
      };

      var completeFn = function completeFn() {
        state.complete = true;

        api.fire('load', state.response.body);
      };

      // let's start processing
      api.fire('start');

      // set request start
      state.timestamp = Date.now();

      // create perceived performance progress indicator
      state.perceivedPerformanceUpdater = createPerceivedPerformanceUpdater(
        function(progress) {
          state.perceivedProgress = progress;
          state.perceivedDuration = Date.now() - state.timestamp;

          progressFn();

          // if fake progress is done, and a response has been received,
          // and we've not yet called the complete method
          if (progress === 1 && state.response && !state.complete) {
            completeFn();
          }
        },
        // random delay as in a list of files you start noticing
        // files uploading at the exact same speed
        getRandomNumber(750, 1500)
      );

      // remember request so we can abort it later
      state.request = processFn(
        // the file to process
        file,

        // the metadata to send along
        metadata,

        // callbacks (load, error, progress, abort)
        // load expects the body to be a server id if
        // you want to make use of revert
        function(response) {
          // we put the response in state so we can access
          // it outside of this method
          state.response =
            typeof response === 'string'
              ? {
                  type: 'load',
                  code: 200,
                  body: response,
                  headers: {}
                }
              : response;

          // update duration
          state.duration = Date.now() - state.timestamp;

          // force progress to 1 as we're now done
          state.progress = 1;

          // we are really done
          // if perceived progress is 1 ( wait for perceived progress to complete )
          // or if server does not support progress ( null )
          if (state.perceivedProgress === 1) {
            completeFn();
          }
        },

        // error is expected to be an object with type, code, body
        function(error) {
          // cancel updater
          state.perceivedPerformanceUpdater.clear();

          // update others about this error
          api.fire(
            'error',
            typeof error === 'string'
              ? {
                  type: 'error',
                  code: 0,
                  body: error
                }
              : error
          );
        },

        // actual processing progress
        function(computable, current, total) {
          // update actual duration
          state.duration = Date.now() - state.timestamp;

          // update actual progress
          state.progress = computable ? current / total : null;

          progressFn();
        },

        // abort does not expect a value
        function() {
          // stop updater
          state.perceivedPerformanceUpdater.clear();

          // fire the abort event so we can switch visuals
          api.fire('abort');
        }
      );
    };

    var abort = function abort() {
      // no request running, can't abort
      if (!state.request) {
        return;
      }

      // stop updater
      state.perceivedPerformanceUpdater.clear();

      // abort actual request
      state.request.abort();

      // if has response object, we've completed the request
      state.complete = true;

      // now aborted, if server returned a response, let's pass it along
      api.fire('abort', state.response ? state.response.body : null);
    };

    var reset = function reset() {
      abort();
      state.complete = false;
      state.perceivedProgress = 0;
      state.progress = 0;
      state.timestamp = null;
      state.perceivedDuration = 0;
      state.duration = 0;
      state.request = null;
      state.response = null;
    };

    var getProgress = function getProgress() {
      return state.progress
        ? Math.min(state.progress, state.perceivedProgress)
        : null;
    };
    var getDuration = function getDuration() {
      return Math.min(state.duration, state.perceivedDuration);
    };

    var api = _extends({}, on(), {
      process: process, // start processing file
      abort: abort, // abort active process request
      getProgress: getProgress,
      getDuration: getDuration,
      reset: reset
    });

    return api;
  };

  var getFilenameWithoutExtension = function getFilenameWithoutExtension(name) {
    return name.substr(0, name.lastIndexOf('.')) || name;
  };

  var ItemStatus = {
    INIT: 1,
    IDLE: 2,
    PROCESSING: 3,
    PROCESSING_PAUSED: 4,
    PROCESSING_COMPLETE: 5,
    PROCESSING_ERROR: 6,
    LOADING: 7,
    LOAD_ERROR: 8
  };

  var createFileStub = function createFileStub(source) {
    var data = [source.name, source.size, source.type];

    // is blob or base64, then we need to set the name
    if (source instanceof Blob || isBase64DataURI(source)) {
      data[0] = getDateString();
    } else if (isBase64DataURI(source)) {
      // if is base64 data uri we need to determine the average size and type
      data[1] = source.length;
      data[2] = getMimeTypeFromBase64DataURI(source);
    } else if (!(source instanceof File)) {
      // url
      data[0] = getFilenameFromURL(source);
      data[1] = 0;
      data[2] = 'application/octet-stream';
    }

    return {
      name: data[0],
      size: data[1],
      type: data[2]
    };
  };

  var createItem = function createItem() {
    var serverFileReference =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    // unique id for this item, is used to identify the item across views
    var id = getUniqueId();

    /**
     * Internal item state
     */
    var state = {
      // original source
      source: null,

      // file model reference
      file: null,

      // id of file on server
      serverFileReference: serverFileReference,

      // current item status
      status: serverFileReference
        ? ItemStatus.PROCESSING_COMPLETE
        : ItemStatus.INIT,

      // active processes
      activeLoader: null,
      activeProcessor: null
    };

    /**
     * Externally added item metadata
     */
    var metadata = {};

    // item data
    var setStatus = function setStatus(status) {
      return (state.status = status);
    };

    // file data
    var getFileExtension = function getFileExtension() {
      return getExtensionFromFilename(state.file.name);
    };
    var getFileType = function getFileType() {
      return state.file.type;
    };
    var getFileSize = function getFileSize() {
      return state.file.size;
    };
    var getFile = function getFile() {
      return state.file;
    };

    // loads files
    var load = function load(source, loader, onload) {
      // remember the original item source
      state.source = source;

      // set a stub file object while loading the actual data
      state.file = createFileStub(source);

      // starts loading
      loader.on('init', function() {
        api.fire('load-init');
      });

      // we'eve received a size indication, let's update the stub
      loader.on('meta', function(meta) {
        // set size of file stub
        state.file.size = meta.size;

        // set name of file stub
        state.file.filename = meta.filename;

        // size has been updated
        api.fire('load-meta');
      });

      // the file is now loading we need to update the progress indicators
      loader.on('progress', function(progress) {
        setStatus(ItemStatus.LOADING);

        api.fire('load-progress', progress);
      });

      // an error was thrown while loading the file, we need to switch to error state
      loader.on('error', function(error) {
        setStatus(ItemStatus.LOAD_ERROR);

        api.fire('load-request-error', error);
      });

      // user or another process aborted the file load (cannot retry)
      loader.on('abort', function() {
        setStatus(ItemStatus.INIT);

        api.fire('load-abort');
      });

      // done loading
      loader.on('load', function(file) {
        // as we've now loaded the file the loader is no longer required
        state.activeLoader = null;

        // called when file has loaded succesfully
        var success = function success(result) {
          // set (possibly) transformed file
          state.file = result;

          // file received
          setStatus(ItemStatus.IDLE);
          api.fire('load');
        };

        var error = function error(result) {
          // set original file
          state.file = file;
          api.fire('load-meta');

          setStatus(ItemStatus.LOAD_ERROR);
          api.fire('load-file-error', result);
        };

        // if we already have a server file reference, we don't need to call the onload method
        if (state.serverFileReference) {
          success(file);
          return;
        }

        // no server id, let's give this file the full treatment
        onload(file, success, error);
      });

      // set loader source data
      loader.setSource(source);

      // set as active loader
      state.activeLoader = loader;

      // load the source data
      loader.load();
    };

    // file processor
    var process = function process(processor, onprocess) {
      // if no file loaded we'll wait for the load event
      if (!(state.file instanceof Blob)) {
        api.on('load', function() {
          process(processor, onprocess);
        });
        return;
      }

      // setup processor

      processor.on('load', function(serverFileReference) {
        // no longer required
        state.activeProcessor = null;

        // need this id to be able to rever the upload
        state.serverFileReference = serverFileReference;

        setStatus(ItemStatus.PROCESSING_COMPLETE);
        api.fire('process-complete', serverFileReference);
      });

      processor.on('start', function() {
        api.fire('process-start');
      });

      processor.on('error', function(error) {
        state.activeProcessor = null;
        setStatus(ItemStatus.PROCESSING_ERROR);
        api.fire('process-error', error);
      });

      processor.on('abort', function(serverFileReference) {
        state.activeProcessor = null;

        // if file was uploaded but processing was cancelled during perceived processor time store file reference
        state.serverFileReference = serverFileReference;

        setStatus(ItemStatus.IDLE);
        api.fire('process-abort');
      });

      processor.on('progress', function(progress) {
        setStatus(ItemStatus.PROCESSING);
        api.fire('process-progress', progress);
      });

      // when successfully transformed
      var success = function success(file) {
        processor.process(file, _extends({}, metadata));
      };

      // something went wrong during transform phase
      var error = function error(result) {};

      // start processing the file
      onprocess(state.file, success, error);

      // set as active processor
      state.activeProcessor = processor;
    };

    var revert = function revert(revertFileUpload) {
      // cannot revert without a server id for this process
      if (state.serverFileReference === null) {
        return;
      }

      // revert the upload (fire and forget)
      revertFileUpload(
        state.serverFileReference,
        function() {
          // reset file server id as now it's no available on the server
          state.serverFileReference = null;
        },
        function(error) {
          // TODO: handle revert error
        }
      );

      // fire event
      setStatus(ItemStatus.IDLE);
      api.fire('process-revert');
    };

    var abortLoad = function abortLoad() {
      if (!state.activeLoader) {
        return;
      }
      state.activeLoader.abort();
    };

    var retryLoad = function retryLoad() {
      if (!state.activeLoader) {
        return;
      }
      state.activeLoader.load();
    };

    var abortProcessing = function abortProcessing() {
      if (!state.activeProcessor) {
        return;
      }
      state.activeProcessor.abort();
    };

    // exposed methods

    var api = _extends(
      {
        id: {
          get: function get$$1() {
            return id;
          }
        },
        serverId: {
          get: function get$$1() {
            return state.serverFileReference;
          }
        },
        status: {
          get: function get$$1() {
            return state.status;
          }
        },
        filename: {
          get: function get$$1() {
            return state.file.name;
          }
        },
        filenameWithoutExtension: {
          get: function get$$1() {
            return getFilenameWithoutExtension(state.file.name);
          }
        },
        fileExtension: { get: getFileExtension },
        fileType: { get: getFileType },
        fileSize: { get: getFileSize },
        file: { get: getFile },
        source: {
          get: function get$$1() {
            return state.source;
          }
        },

        getMetadata: function getMetadata(name) {
          return name ? metadata[name] : _extends({}, metadata);
        },
        setMetadata: function setMetadata(name, value) {
          return (metadata[name] = value);
        },

        abortLoad: abortLoad,
        retryLoad: retryLoad,
        abortProcessing: abortProcessing,

        load: load,
        process: process,
        revert: revert
      },
      on()
    );

    return createObject(api);
  };

  var getItemById = function getItemById(items, itemId) {
    var index = getItemIndexByQuery(items, itemId);
    if (index < 0) {
      return;
    }
    return items[index] || null;
  };

  var removeItem = function removeItem(items, needle) {
    // get index of item
    var index = items.findIndex(function(item) {
      return item === needle;
    });

    // remove it from array
    removeIndex(items, index);

    // return removed item
    return needle;
  };

  var fetchLocal = function fetchLocal(
    url,
    load,
    error,
    progress,
    abort,
    headers
  ) {
    var request = sendRequest(null, url, {
      method: 'GET',
      responseType: 'blob'
    });
    request.onload = function(response) {
      // turn blob into a file
      response.body = getFileFromBlob(
        response.body,
        getFilenameFromHeaders(response.headers) ||
          getFilenameFromURL(url) ||
          getDateString()
      );

      // pass updated response to handler method
      load(response);
    };
    request.onerror = error;
    request.onprogress = progress;
    request.onabort = abort;
    request.onheaders = headers;

    // should return request
    return request;
  };

  var getDomainFromURL = function getDomainFromURL(url) {
    if (url.indexOf('//') === 0) {
      url = location.protocol + url;
    }
    return url
      .toLowerCase()
      .replace(/([a-z])?:\/\//, '$1')
      .split('/')[0];
  };

  var isExternalURL = function isExternalURL(url) {
    return (
      (url.indexOf(':') > -1 || url.indexOf('//') > -1) &&
      getDomainFromURL(location.href) !== getDomainFromURL(url)
    );
  };

  // returns item based on state
  var getItemByQueryFromState = function getItemByQueryFromState(
    state,
    itemHandler
  ) {
    return function() {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        query = _ref.query,
        _ref$success = _ref.success,
        success = _ref$success === undefined ? function() {} : _ref$success,
        _ref$failure = _ref.failure,
        failure = _ref$failure === undefined ? function() {} : _ref$failure;

      var item = getItemByQuery(state.items, query);
      if (!item) {
        failure({
          error: createResponse('error', 0, 'Item not found'),
          file: null
        });
        return;
      }
      itemHandler(item, success, failure);
    };
  };

  var actions = function actions(dispatch, query, state) {
    return {
      /**
       * Aborts all ongoing processes
       */
      ABORT_ALL: function ABORT_ALL() {
        query('GET_ITEMS').forEach(function(item) {
          item.abortLoad();
          item.abortProcessing();
        });
      },

      /**
       * Sets initial files
       */
      DID_SET_FILES: function DID_SET_FILES(_ref2) {
        var _ref2$value = _ref2.value,
          value = _ref2$value === undefined ? [] : _ref2$value;

        // map values to file objects
        var files = value.map(function(file) {
          return {
            source: file.source ? file.source : file,
            options: file.options
          };
        });

        // loop over files, if file is in list, leave it be, if not, remove

        // test if items should be moved
        [].concat(toConsumableArray(state.items)).forEach(function(item) {
          // if item not is in new value, remove
          if (
            !files.find(function(file) {
              return file.source === item.source;
            })
          ) {
            dispatch('REMOVE_ITEM', { query: item });
          }
        });

        // add new files
        files.forEach(function(file, index) {
          // if file is already in list
          if (
            [].concat(toConsumableArray(state.items)).find(function(item) {
              return item.source === file.source;
            })
          ) {
            return;
          }

          // not in list, add
          dispatch(
            'ADD_ITEM',
            _extends({}, file, {
              interactionMethod: InteractionMethod.NONE,
              index: index
            })
          );
        });
      },

      /**
       * @param source
       * @param index
       * @param interactionMethod
       */
      ADD_ITEM: function ADD_ITEM(_ref3) {
        var source = _ref3.source,
          index = _ref3.index,
          interactionMethod = _ref3.interactionMethod,
          _ref3$success = _ref3.success,
          success = _ref3$success === undefined ? function() {} : _ref3$success,
          _ref3$failure = _ref3.failure,
          failure = _ref3$failure === undefined ? function() {} : _ref3$failure,
          _ref3$options = _ref3.options,
          options = _ref3$options === undefined ? {} : _ref3$options;

        // if no source supplied
        if (isEmpty(source)) {
          failure({
            error: createResponse('error', 0, 'No source'),
            file: null
          });
          return;
        }

        // filter out invalid file items, used to filter dropped directory contents
        if (source instanceof Blob) {
          if (state.options.ignoredFiles.includes(source.name.toLowerCase())) {
            // fail silently
            return;
          }
        }

        // test if there's still room in the list of files
        if (!hasRoomForItem(state)) {
          // if multiple allowed, we can't replace
          // or if only a single item is allowed but we're not allowed to replace it we exit
          if (
            state.options.allowMultiple ||
            (!state.options.allowMultiple && !state.options.allowReplace)
          ) {
            var error = createResponse('warning', 0, 'Max files');

            dispatch('DID_THROW_MAX_FILES', {
              source: source,
              error: error
            });

            failure({ error: error, file: null });
            return;
          }

          // remove first item as it will be replaced by this item
          dispatch('REMOVE_ITEM', { query: state.items[0].id });
        }

        // test if server file reference is supplied
        // type is either 'new', 'local' or 'limbo' ('remote' is for new files)
        var isLocalServerFile = options.type === 'local';
        var isLimboServerFile = options.type === 'limbo';
        var isServerFile = isLocalServerFile || isLimboServerFile;

        // create a new blank item
        var item = createItem(isServerFile ? source : null);

        // add item to list
        insertItem(state.items, item, index);

        // get a quick reference to the item id
        var id = item.id;

        // observe item events
        item.on('load-init', function() {
          dispatch('DID_START_ITEM_LOAD', { id: id });
        });

        item.on('load-meta', function() {
          dispatch('DID_UPDATE_ITEM_META', { id: id });
        });

        item.on('load-progress', function(progress) {
          dispatch('DID_UPDATE_ITEM_LOAD_PROGRESS', {
            id: id,
            progress: progress
          });
        });

        item.on('load-request-error', function(error) {
          // is client error, no way to recover
          if (error.code >= 400 && error.code < 500) {
            dispatch('DID_THROW_ITEM_INVALID', {
              id: id,
              error: error,
              status: {
                main: state.options.labelFileLoadError,
                sub: error.code + ' (' + error.body + ')'
              }
            });

            // reject the file so can be dealt with through API
            failure({ error: error, file: createItemAPI(item) });
            return;
          }

          // is possible server error, so might be possible to retry
          dispatch('DID_THROW_ITEM_LOAD_ERROR', {
            id: id,
            error: error,
            status: {
              main: state.options.labelFileLoadError,
              sub: state.options.labelTapToRetry
            }
          });
        });

        item.on('load-file-error', function(error) {
          dispatch('DID_THROW_ITEM_INVALID', _extends({}, error, { id: id }));
        });

        item.on('load-abort', function() {
          dispatch('REMOVE_ITEM', { query: id });
        });

        item.on('load', function() {
          // item loaded, allow plugins to
          // - read data (quickly)
          // - add metadata
          applyFilterChain('DID_LOAD_ITEM', item, { query: query }).then(
            function() {
              // let plugins decide if the output data should be prepared at this point
              // means we'll do this and wait for idle state
              applyFilterChain('SHOULD_PREPARE_OUTPUT', false, {
                item: item,
                query: query
              }).then(function(shouldPrepareOutput) {
                var data = {
                  isServerFile: isServerFile,
                  source: source,
                  isLocalServerFile: isLocalServerFile,
                  isLimboServerFile: isLimboServerFile,
                  success: success

                  // exit
                };
                if (shouldPrepareOutput) {
                  // wait for idle state and then run PREPARE_OUTPUT
                  dispatch(
                    'REQUEST_PREPARE_LOAD_ITEM',
                    {
                      query: id,
                      item: item,
                      data: data
                    },
                    true
                  );

                  return;
                }

                dispatch('COMPLETE_LOAD_ITEM', {
                  query: id,
                  item: item,
                  data: data
                });
              });
            }
          );
        });

        item.on('process-start', function() {
          dispatch('DID_START_ITEM_PROCESSING', { id: id });
        });

        item.on('process-progress', function(progress) {
          dispatch('DID_UPDATE_ITEM_PROCESS_PROGRESS', {
            id: id,
            progress: progress
          });
        });

        item.on('process-error', function(error) {
          dispatch('DID_THROW_ITEM_PROCESSING_ERROR', {
            id: id,
            error: error,
            status: {
              main: state.options.labelFileProcessingError,
              sub: state.options.labelTapToRetry
            }
          });
        });

        item.on('process-abort', function(serverFileReference) {
          // if we're instant uploading, the item is removed
          if (state.options.instantUpload) {
            dispatch('REMOVE_ITEM', { query: id });
          } else {
            // we stopped processing
            dispatch('DID_ABORT_ITEM_PROCESSING', { id: id });
          }

          // we'll revert any processed items
          dispatch('REVERT_ITEM_PROCESSING', { query: id });
        });

        item.on('process-complete', function(serverFileReference) {
          dispatch('DID_COMPLETE_ITEM_PROCESSING', {
            id: id,
            error: null,
            serverFileReference: serverFileReference
          });
        });

        item.on('process-revert', function() {
          // if is instant upload remove the item
          if (state.options.instantUpload) {
            dispatch('REMOVE_ITEM', { query: id });
          } else {
            dispatch('DID_REVERT_ITEM_PROCESSING', { id: id });
          }
        });

        // let view know the item has been inserted
        dispatch('DID_ADD_ITEM', {
          id: id,
          index: index,
          interactionMethod: interactionMethod
        });

        // start loading the source

        var _ref4 = state.options.server || {},
          url = _ref4.url,
          load = _ref4.load,
          restore = _ref4.restore,
          fetch = _ref4.fetch;

        item.load(
          source,

          // this creates a function that loads the file based on the type of file (string, base64, blob, file) and location of file (local, remote, limbo)
          createFileLoader(
            isServerFile
              ? options.type === 'limbo'
                ? createFetchFunction(url, restore)
                : createFetchFunction(url, load)
              : isString(source) && isExternalURL(source)
                ? createFetchFunction(url, fetch)
                : fetchLocal
          ),

          // called when the file is loaded so it can be piped through the filters
          function(file, success, error) {
            // let's process the file
            applyFilterChain('LOAD_FILE', file, { query: query })
              .then(success)
              .catch(error);
          }
        );
      },

      REQUEST_PREPARE_LOAD_ITEM: function REQUEST_PREPARE_LOAD_ITEM(_ref5) {
        var item = _ref5.item,
          data = _ref5.data;

        // allow plugins to alter the file data
        applyFilterChain('PREPARE_OUTPUT', item.file, {
          query: query,
          item: item
        }).then(function(result) {
          applyFilterChain('COMPLETE_PREPARE_OUTPUT', result, {
            query: query,
            item: item
          }).then(function(result) {
            dispatch('COMPLETE_LOAD_ITEM', {
              item: item,
              data: data
            });
          });
        });
      },

      COMPLETE_LOAD_ITEM: function COMPLETE_LOAD_ITEM(_ref6) {
        var item = _ref6.item,
          data = _ref6.data;
        var success = data.success,
          isServerFile = data.isServerFile,
          source = data.source,
          isLocalServerFile = data.isLocalServerFile,
          isLimboServerFile = data.isLimboServerFile;

        // let interface know the item has loaded

        dispatch('DID_LOAD_ITEM', {
          id: item.id,
          error: null,
          serverFileReference: isServerFile ? source : null
        });

        // item has been successfully loaded and added to the
        // list of items so can now be safely returned for use
        success(createItemAPI(item));

        // if this is a local server file we need to show a different state
        if (isLocalServerFile) {
          dispatch('DID_LOAD_LOCAL_ITEM', { id: item.id });
          return;
        }

        // if is a temp server file we prevent async upload call here (as the file is already on the server)
        if (isLimboServerFile) {
          dispatch('DID_COMPLETE_ITEM_PROCESSING', {
            id: item.id,
            error: null,
            serverFileReference: source
          });
          return;
        }

        // id we are allowed to upload the file immidiately, lets do it
        if (query('IS_ASYNC') && state.options.instantUpload) {
          dispatch('REQUEST_ITEM_PROCESSING', { query: item.id });
        }
      },

      RETRY_ITEM_LOAD: getItemByQueryFromState(state, function(item) {
        // try loading the source one more time
        item.retryLoad();
      }),

      REQUEST_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
        var id = item.id;

        dispatch('DID_REQUEST_ITEM_PROCESSING', { id: id });

        dispatch('PROCESS_ITEM', { query: item }, true);
      }),

      PROCESS_ITEM: getItemByQueryFromState(state, function(
        item,
        success,
        failure
      ) {
        // we done function
        item.onOnce('process-complete', function() {
          success(createItemAPI(item));
        });

        // we error function
        item.onOnce('process-error', function(error) {
          failure({ error: error, file: createItemAPI(item) });
        });

        // start file processing
        item.process(
          createFileProcessor(
            createProcessorFunction(
              state.options.server.url,
              state.options.server.process,
              state.options.name
            )
          ),
          // called when the file is about to be processed so it can be piped through the transform filters
          function(file, success, error) {
            // allow plugins to alter the file data
            applyFilterChain('PREPARE_OUTPUT', file, {
              query: query,
              item: item
            })
              .then(success)
              .catch(error);
          }
        );
      }),

      RETRY_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
        dispatch('REQUEST_ITEM_PROCESSING', { query: item });
      }),

      REMOVE_ITEM: getItemByQueryFromState(state, function(item, success) {
        // get id reference
        var id = item.id;

        // tell the view the item has been removed
        dispatch('DID_REMOVE_ITEM', { id: id, item: item });

        // now remove it from the item list,
        // we remove it from the list after the view has been updated
        // to make sure the item is available for view rendering till removed
        dispatch('SPLICE_ITEM', { id: id, item: item });

        // correctly removed
        success(createItemAPI(item));
      }),

      // private action for timing the removal of an item from the items list
      SPLICE_ITEM: function SPLICE_ITEM(_ref7) {
        var id = _ref7.id;
        return removeItem(state.items, getItemById(state.items, id));
      },

      ABORT_ITEM_LOAD: getItemByQueryFromState(state, function(item) {
        // stop loading this file
        item.abortLoad();

        // the file will throw an event and that will take
        // care of removing the item from the list
      }),

      ABORT_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
        // stop processing this file
        item.abortProcessing();

        // the file will throw an event and that will take
        // care of removing the item from the list
      }),

      REVERT_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
        // remove from server
        item.revert(
          createRevertFunction(
            state.options.server.url,
            state.options.server.revert
          )
        );
      }),

      SET_OPTIONS: function SET_OPTIONS(_ref8) {
        var options = _ref8.options;

        forin(options, function(key, value) {
          dispatch('SET_' + fromCamels(key, '_').toUpperCase(), {
            value: value
          });
        });
      }
    };
  };

  var createElement$1 = function createElement(tagName) {
    return document.createElement(tagName);
  };

  var formatFilename = function formatFilename(name) {
    return decodeURI(name);
  };

  var text = function text(node, value) {
    var textNode = node.childNodes[0];
    if (!textNode) {
      textNode = document.createTextNode(value);
      node.appendChild(textNode);
    } else if (value !== textNode.nodeValue) {
      textNode.nodeValue = value;
    }
  };

  var polarToCartesian = function polarToCartesian(
    centerX,
    centerY,
    radius,
    angleInDegrees
  ) {
    var angleInRadians = (angleInDegrees % 360 - 90) * Math.PI / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  var describeArc = function describeArc(
    x,
    y,
    radius,
    startAngle,
    endAngle,
    arcSweep
  ) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    return [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      arcSweep,
      0,
      end.x,
      end.y
    ].join(' ');
  };

  var percentageArc = function percentageArc(x, y, radius, from, to) {
    var arcSweep = 1;
    if (to > from && to - from <= 0.5) {
      arcSweep = 0;
    }
    if (from > to && from - to >= 0.5) {
      arcSweep = 0;
    }
    return describeArc(
      x,
      y,
      radius,
      Math.min(0.9999, from) * 360,
      Math.min(0.9999, to) * 360,
      arcSweep
    );
  };

  var create$7 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // start at 0
    props.spin = false;
    props.progress = 0;
    props.opacity = 0;

    // svg
    var svg = createElement('svg');
    root.ref.path = createElement('path', {
      'stroke-width': 2,
      'stroke-linecap': 'round'
    });
    svg.appendChild(root.ref.path);

    root.ref.svg = svg;

    root.appendChild(svg);
  };

  var write$5 = function write(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;

    if (props.opacity === 0) {
      return;
    }

    // get width of stroke
    var ringStrokeWidth = parseInt(attr(root.ref.path, 'stroke-width'), 10);

    // calculate size of ring
    var size = root.rect.element.width * 0.5;

    // ring state
    var ringFrom = 0;
    var ringTo = 0;

    // now in busy mode
    if (props.spin) {
      ringFrom = 0;
      ringTo = 0.5;
    } else {
      ringFrom = 0;
      ringTo = props.progress;
    }

    // get arc path
    var coordinates = percentageArc(
      size,
      size,
      size - ringStrokeWidth,
      ringFrom,
      ringTo
    );

    // update progress bar
    attr(root.ref.path, 'd', coordinates);

    // hide while contains 0 value
    attr(
      root.ref.path,
      'stroke-opacity',
      props.spin || props.progress > 0 ? 1 : 0
    );
  };

  var progressIndicator = createView({
    tag: 'div',
    name: 'progress-indicator',
    ignoreRect: true,
    create: create$7,
    write: write$5,
    mixins: {
      apis: ['progress', 'spin'],
      styles: ['opacity'],
      animations: {
        opacity: { type: 'tween', duration: 500 },
        progress: {
          type: 'spring',
          stiffness: 0.95,
          damping: 0.65,
          mass: 10
        }
      }
    }
  });

  var create$8 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    root.element.title = props.label;
    root.element.innerHTML = props.icon || '';
    props.disabled = false;
  };

  var write$6 = function write(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;

    if (props.opacity === 0 && !props.disabled) {
      props.disabled = true;
      attr(root.element, 'disabled', 'disabled');
    } else if (props.opacity > 0 && props.disabled) {
      props.disabled = false;
      root.element.removeAttribute('disabled');
    }
  };

  var fileActionButton = createView({
    tag: 'button',
    attributes: {
      type: 'button'
    },
    ignoreRect: true,
    name: 'file-action-button',
    mixins: {
      apis: ['label'],
      styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
      animations: {
        scaleX: 'spring',
        scaleY: 'spring',
        translateX: 'spring',
        translateY: 'spring',
        opacity: { type: 'tween', duration: 250 }
      },
      listeners: true
    },
    create: create$8,
    write: write$6
  });

  var toNaturalFileSize = function toNaturalFileSize(bytes) {
    var decimalSeparator =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';

    // nope, no negative byte sizes
    bytes = Math.round(Math.abs(bytes));

    // just bytes
    if (bytes < 1000) {
      return bytes + ' bytes';
    }

    // kilobytes
    if (bytes < MB) {
      return Math.floor(bytes / KB) + ' KB';
    }

    // megabytes
    if (bytes < GB) {
      return removeDecimalsWhenZero(bytes / MB, 1, decimalSeparator) + ' MB';
    }

    // gigabytes
    return removeDecimalsWhenZero(bytes / GB, 2, decimalSeparator) + ' GB';
  };

  var KB = 1000;
  var MB = 1000000;
  var GB = 1000000000;

  var removeDecimalsWhenZero = function removeDecimalsWhenZero(
    value,
    decimalCount,
    separator
  ) {
    return value
      .toFixed(decimalCount)
      .split('.')
      .filter(function(part) {
        return part !== '0';
      })
      .join(separator);
  };

  var create$9 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // filename
    var fileName = createElement$1('span');
    fileName.className = 'filepond--file-info-main';
    // hide for screenreaders
    // the file is contained in a fieldset with legend that contains the filename
    // no need to read it twice
    attr(fileName, 'aria-hidden', 'true');
    root.appendChild(fileName);
    root.ref.fileName = fileName;

    // filesize
    var fileSize = createElement$1('span');
    fileSize.className = 'filepond--file-info-sub';
    root.appendChild(fileSize);
    root.ref.fileSize = fileSize;

    // set initial values
    text(fileSize, root.query('GET_LABEL_FILE_WAITING_FOR_SIZE'));
    text(fileName, formatFilename(root.query('GET_ITEM_NAME', props.id)));
  };

  var updateFile = function updateFile(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;

    text(
      root.ref.fileSize,
      toNaturalFileSize(root.query('GET_ITEM_SIZE', props.id))
    );
    text(
      root.ref.fileName,
      formatFilename(root.query('GET_ITEM_NAME', props.id))
    );
  };

  var updateFileSizeOnError = function updateFileSizeOnError(_ref3) {
    var root = _ref3.root,
      props = _ref3.props;

    // if size is available don't fallback to unknown size message
    if (isInt(root.query('GET_ITEM_SIZE', props.id))) {
      return;
    }

    text(root.ref.fileSize, root.query('GET_LABEL_FILE_SIZE_NOT_AVAILABLE'));
  };

  var fileInfo = createView({
    name: 'file-info',
    ignoreRect: true,
    write: createRoute({
      DID_LOAD_ITEM: updateFile,
      DID_UPDATE_ITEM_META: updateFile,
      DID_THROW_ITEM_LOAD_ERROR: updateFileSizeOnError,
      DID_THROW_ITEM_INVALID: updateFileSizeOnError
    }),
    create: create$9,
    mixins: {
      styles: ['translateX', 'translateY'],
      animations: {
        translateX: 'spring',
        translateY: 'spring'
      }
    }
  });

  var toPercentage = function toPercentage(value) {
    return Math.round(value * 100);
  };

  var create$10 = function create(_ref) {
    var root = _ref.root;

    // main status
    var main = createElement$1('span');
    main.className = 'filepond--file-status-main';
    root.appendChild(main);
    root.ref.main = main;

    // sub status
    var sub = createElement$1('span');
    sub.className = 'filepond--file-status-sub';
    root.appendChild(sub);
    root.ref.sub = sub;

    didSetItemLoadProgress({ root: root, action: { progress: null } });
  };

  var didSetItemLoadProgress = function didSetItemLoadProgress(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;

    var title =
      action.progress === null
        ? root.query('GET_LABEL_FILE_LOADING')
        : root.query('GET_LABEL_FILE_LOADING') +
          ' ' +
          toPercentage(action.progress) +
          '%';
    text(root.ref.main, title);
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
  };

  var didSetItemProcessProgress = function didSetItemProcessProgress(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;

    var title =
      action.progress === null
        ? root.query('GET_LABEL_FILE_PROCESSING')
        : root.query('GET_LABEL_FILE_PROCESSING') +
          ' ' +
          toPercentage(action.progress) +
          '%';
    text(root.ref.main, title);
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
  };

  var didRequestItemProcessing = function didRequestItemProcessing(_ref4) {
    var root = _ref4.root;

    text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING'));
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
  };

  var didAbortItemProcessing = function didAbortItemProcessing(_ref5) {
    var root = _ref5.root;

    text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING_ABORTED'));
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_RETRY'));
  };

  var didCompleteItemProcessing$1 = function didCompleteItemProcessing(_ref6) {
    var root = _ref6.root;

    text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING_COMPLETE'));
    text(root.ref.sub, root.query('GET_LABEL_TAP_TO_UNDO'));

    //const allowRevert = root.query('GET_ALLOW_REVERT');
    //text(root.ref.sub, allowRevert ? root.query('GET_LABEL_TAP_TO_UNDO') : '');
  };

  var clear = function clear(_ref7) {
    var root = _ref7.root;

    text(root.ref.main, '');
    text(root.ref.sub, '');
  };

  var error = function error(_ref8) {
    var root = _ref8.root,
      action = _ref8.action;

    text(root.ref.main, action.status.main);
    text(root.ref.sub, action.status.sub);
  };

  var fileStatus = createView({
    name: 'file-status',
    ignoreRect: true,
    write: createRoute({
      DID_LOAD_ITEM: clear,
      DID_REVERT_ITEM_PROCESSING: clear,
      DID_REQUEST_ITEM_PROCESSING: didRequestItemProcessing,
      DID_ABORT_ITEM_PROCESSING: didAbortItemProcessing,
      DID_COMPLETE_ITEM_PROCESSING: didCompleteItemProcessing$1,
      DID_UPDATE_ITEM_PROCESS_PROGRESS: didSetItemProcessProgress,
      DID_UPDATE_ITEM_LOAD_PROGRESS: didSetItemLoadProgress,
      DID_THROW_ITEM_LOAD_ERROR: error,
      DID_THROW_ITEM_INVALID: error,
      DID_THROW_ITEM_PROCESSING_ERROR: error
    }),
    create: create$10,
    mixins: {
      styles: ['translateX', 'translateY', 'opacity'],
      animations: {
        opacity: { type: 'tween', duration: 250 },
        translateX: 'spring',
        translateY: 'spring'
      }
    }
  });

  /**
   * Button definitions for the file view
   */
  var Buttons = {
    AbortItemLoad: {
      label: 'GET_LABEL_BUTTON_ABORT_ITEM_LOAD',
      action: 'ABORT_ITEM_LOAD',
      className: 'filepond--action-abort-item-load'
    },
    RetryItemLoad: {
      label: 'GET_LABEL_BUTTON_RETRY_ITEM_LOAD',
      action: 'RETRY_ITEM_LOAD',
      icon: 'GET_ICON_RETRY',
      className: 'filepond--action-retry-item-load'
    },
    RemoveItem: {
      label: 'GET_LABEL_BUTTON_REMOVE_ITEM',
      action: 'REMOVE_ITEM',
      icon: 'GET_ICON_REMOVE',
      className: 'filepond--action-remove-item'
    },
    ProcessItem: {
      label: 'GET_LABEL_BUTTON_PROCESS_ITEM',
      action: 'REQUEST_ITEM_PROCESSING',
      icon: 'GET_ICON_PROCESS',
      className: 'filepond--action-process-item'
    },
    AbortItemProcessing: {
      label: 'GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING',
      action: 'ABORT_ITEM_PROCESSING',
      className: 'filepond--action-abort-item-processing'
    },
    RetryItemProcessing: {
      label: 'GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING',
      action: 'RETRY_ITEM_PROCESSING',
      icon: 'GET_ICON_RETRY',
      className: 'filepond--action-retry-item-processing'
    },
    RevertItemProcessing: {
      label: 'GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING',
      action: 'REVERT_ITEM_PROCESSING',
      icon: 'GET_ICON_UNDO',
      className: 'filepond--action-revert-item-processing'
    }
  };

  // make a list of buttons, we can then remove buttons from this list if they're disabled
  var ButtonKeys = [];
  forin(Buttons, function(key) {
    ButtonKeys.push(key);
  });

  var calculateFileInfoOffset = function calculateFileInfoOffset(root) {
    return (
      root.ref.buttonRemoveItem.rect.element.width +
      root.ref.buttonRemoveItem.rect.element.left
    );
  };

  // Force on full pixels so text stays crips
  var calculateFileVerticalCenterOffset = function calculateFileVerticalCenterOffset(
    root
  ) {
    return Math.floor(root.ref.buttonRemoveItem.rect.element.height / 4);
  };
  var calculateFileHorizontalCenterOffset = function calculateFileHorizontalCenterOffset(
    root
  ) {
    return Math.floor(root.ref.buttonRemoveItem.rect.element.left / 2);
  };

  var DefaultStyle = {
    buttonAbortItemLoad: { opacity: 0 },
    buttonRetryItemLoad: { opacity: 0 },
    buttonRemoveItem: { opacity: 0 },
    buttonProcessItem: { opacity: 0 },
    buttonAbortItemProcessing: { opacity: 0 },
    buttonRetryItemProcessing: { opacity: 0 },
    buttonRevertItemProcessing: { opacity: 0 },
    loadProgressIndicator: { opacity: 0 },
    processProgressIndicator: { opacity: 0 },
    processingCompleteIndicator: { opacity: 0, scaleX: 0.75, scaleY: 0.75 },
    info: { translateX: 0, translateY: 0, opacity: 0 },
    status: { translateX: 0, translateY: 0, opacity: 0 }
  };

  var IdleStyle = {
    buttonRemoveItem: { opacity: 1 },
    buttonProcessItem: { opacity: 1 },
    info: { translateX: calculateFileInfoOffset },
    status: { translateX: calculateFileInfoOffset }
  };

  var ProcessingStyle = {
    buttonAbortItemProcessing: { opacity: 1 },
    processProgressIndicator: { opacity: 1 },
    status: { opacity: 1 }
  };

  var StyleMap = {
    DID_THROW_ITEM_INVALID: {
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { translateX: calculateFileInfoOffset, opacity: 1 }
    },
    DID_START_ITEM_LOAD: {
      buttonAbortItemLoad: { opacity: 1 },
      loadProgressIndicator: { opacity: 1 },
      status: { opacity: 1 }
    },
    DID_THROW_ITEM_LOAD_ERROR: {
      buttonRetryItemLoad: { opacity: 1 },
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { opacity: 1 }
    },
    DID_LOAD_ITEM: IdleStyle,
    DID_LOAD_LOCAL_ITEM: {
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { translateX: calculateFileInfoOffset }
    },
    DID_START_ITEM_PROCESSING: ProcessingStyle,
    DID_REQUEST_ITEM_PROCESSING: ProcessingStyle,
    DID_UPDATE_ITEM_PROCESS_PROGRESS: ProcessingStyle,
    DID_COMPLETE_ITEM_PROCESSING: {
      buttonRevertItemProcessing: { opacity: 1 },
      info: { opacity: 1 },
      status: { opacity: 1 }
    },
    DID_THROW_ITEM_PROCESSING_ERROR: {
      buttonRemoveItem: { opacity: 1 },
      buttonRetryItemProcessing: { opacity: 1 },
      status: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset }
    },
    DID_ABORT_ITEM_PROCESSING: {
      buttonRemoveItem: { opacity: 1 },
      buttonProcessItem: { opacity: 1 },
      info: { translateX: calculateFileInfoOffset },
      status: { opacity: 1 }
    },
    DID_REVERT_ITEM_PROCESSING: IdleStyle
  };

  // complete indicator view
  var processingCompleteIndicatorView = createView({
    create: function create(_ref) {
      var root = _ref.root;

      root.element.innerHTML = root.query('GET_ICON_DONE');
    },
    name: 'processing-complete-indicator',
    ignoreRect: true,
    mixins: {
      styles: ['scaleX', 'scaleY', 'opacity'],
      animations: {
        scaleX: 'spring',
        scaleY: 'spring',
        opacity: { type: 'tween', duration: 250 }
      }
    }
  });

  /**
   * Creates the file view
   */
  var create$6 = function create(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;

    // allow reverting upload
    var allowRevert = root.query('GET_ALLOW_REVERT');

    // enabled buttons array
    var enabledButtons = root.query('IS_ASYNC')
      ? ButtonKeys.concat()
      : ButtonKeys.filter(function(key) {
          return !/Process/.test(key);
        });

    // remove last button (revert) if not allowed
    if (!allowRevert) {
      enabledButtons.splice(-1, 1);
      var map = StyleMap['DID_COMPLETE_ITEM_PROCESSING'];
      map.info.translateX = calculateFileHorizontalCenterOffset;
      map.info.translateY = calculateFileVerticalCenterOffset;
      map.status.translateY = calculateFileVerticalCenterOffset;
      map.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
    }

    // create the button views
    forin(Buttons, function(key, definition) {
      // create button
      var buttonView = root.createChildView(fileActionButton, {
        label: root.query(definition.label),
        icon: root.query(definition.icon),
        opacity: 0
      });

      // should be appended?
      if (enabledButtons.includes(key)) {
        root.appendChildView(buttonView);
      }

      // add class
      buttonView.element.classList.add(definition.className);

      // handle interactions
      buttonView.on('click', function() {
        root.dispatch(definition.action, { query: props.id });
      });

      // set reference
      root.ref['button' + key] = buttonView;
    });

    // create file info view
    root.ref.info = root.appendChildView(
      root.createChildView(fileInfo, { id: props.id })
    );

    // create file status view
    root.ref.status = root.appendChildView(
      root.createChildView(fileStatus, { id: props.id })
    );

    // checkmark
    root.ref.processingCompleteIndicator = root.appendChildView(
      root.createChildView(processingCompleteIndicatorView)
    );

    // add progress indicators
    root.ref.loadProgressIndicator = root.appendChildView(
      root.createChildView(progressIndicator, { opacity: 0 })
    );
    root.ref.loadProgressIndicator.element.classList.add(
      'filepond--load-indicator'
    );

    root.ref.processProgressIndicator = root.appendChildView(
      root.createChildView(progressIndicator, { opacity: 0 })
    );

    root.ref.processProgressIndicator.element.classList.add(
      'filepond--process-indicator'
    );
  };

  var write$4 = function write(_ref3) {
    var root = _ref3.root,
      actions = _ref3.actions,
      props = _ref3.props;

    // route actions
    route$3({ root: root, actions: actions, props: props });

    // select last state change action
    var action = []
      .concat(toConsumableArray(actions))
      .filter(function(action) {
        return /^DID_/.test(action.type);
      })
      .reverse()
      .find(function(action) {
        return StyleMap[action.type];
      });

    // no need to set same state twice
    if (!action || (action && action.type === props.currentStyle)) {
      return;
    }

    // set current state
    props.currentStyle = action.type;
    var newStyles = StyleMap[props.currentStyle];

    forin(DefaultStyle, function(name, defaultStyles) {
      // get reference to control
      var control = root.ref[name];

      // loop over all styles for this control
      forin(defaultStyles, function(key, defaultValue) {
        var value =
          newStyles[name] && typeof newStyles[name][key] !== 'undefined'
            ? newStyles[name][key]
            : defaultValue;
        control[key] = typeof value === 'function' ? value(root) : value;
      });
    });
  };

  var route$3 = createRoute({
    DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: function DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING(
      _ref4
    ) {
      var root = _ref4.root,
        action = _ref4.action;

      root.ref.buttonAbortItemProcessing.label = action.value;
    },
    DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: function DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD(
      _ref5
    ) {
      var root = _ref5.root,
        action = _ref5.action;

      root.ref.buttonAbortItemLoad.label = action.value;
    },
    DID_REQUEST_ITEM_PROCESSING: function DID_REQUEST_ITEM_PROCESSING(_ref6) {
      var root = _ref6.root;

      root.ref.processProgressIndicator.spin = true;
      root.ref.processProgressIndicator.progress = 0;
    },
    DID_START_ITEM_LOAD: function DID_START_ITEM_LOAD(_ref7) {
      var root = _ref7.root;

      root.ref.loadProgressIndicator.spin = true;
      root.ref.loadProgressIndicator.progress = 0;
    },
    DID_UPDATE_ITEM_LOAD_PROGRESS: function DID_UPDATE_ITEM_LOAD_PROGRESS(
      _ref8
    ) {
      var root = _ref8.root,
        action = _ref8.action;

      root.ref.loadProgressIndicator.spin = false;
      root.ref.loadProgressIndicator.progress = action.progress;
    },
    DID_UPDATE_ITEM_PROCESS_PROGRESS: function DID_UPDATE_ITEM_PROCESS_PROGRESS(
      _ref9
    ) {
      var root = _ref9.root,
        action = _ref9.action;

      root.ref.processProgressIndicator.spin = false;
      root.ref.processProgressIndicator.progress = action.progress;
    }
  });

  var file = createView({
    create: create$6,
    write: write$4,
    didCreateView: function didCreateView(root) {
      applyFilters('CREATE_VIEW', _extends({}, root, { view: root }));
    },
    name: 'file'
  });

  /**
   * Creates the file view
   */
  var create$5 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // filename
    root.ref.fileName = createElement$1('legend');
    root.appendChild(root.ref.fileName);

    // file view
    root.ref.file = root.appendChildView(
      root.createChildView(file, { id: props.id })
    );

    // create data container
    var dataContainer = createElement$1('input');
    dataContainer.type = 'hidden';
    dataContainer.name = root.query('GET_NAME');
    root.ref.data = dataContainer;
    root.appendChild(dataContainer);
  };

  /**
   * Data storage
   */
  var didLoadItem = function didLoadItem(_ref2) {
    var root = _ref2.root,
      action = _ref2.action,
      props = _ref2.props;

    root.ref.data.value = action.serverFileReference;

    // updates the legend of the fieldset so screenreaders can better group buttons
    text(
      root.ref.fileName,
      formatFilename(root.query('GET_ITEM_NAME', props.id))
    );
  };

  var didRemoveItem = function didRemoveItem(_ref3) {
    var root = _ref3.root;

    root.ref.data.removeAttribute('value');
  };

  var didCompleteItemProcessing = function didCompleteItemProcessing(_ref4) {
    var root = _ref4.root,
      action = _ref4.action;

    root.ref.data.value = action.serverFileReference;
  };

  var didRevertItemProcessing = function didRevertItemProcessing(_ref5) {
    var root = _ref5.root;

    root.ref.data.removeAttribute('value');
  };

  var fileWrapper = createView({
    create: create$5,
    write: createRoute({
      DID_LOAD_ITEM: didLoadItem,
      DID_REMOVE_ITEM: didRemoveItem,
      DID_COMPLETE_ITEM_PROCESSING: didCompleteItemProcessing,
      DID_REVERT_ITEM_PROCESSING: didRevertItemProcessing
    }),
    didCreateView: function didCreateView(root) {
      applyFilters('CREATE_VIEW', _extends({}, root, { view: root }));
    },
    tag: 'fieldset',
    name: 'file-wrapper'
  });

  var PANEL_SPRING_PROPS = { type: 'spring', damping: 0.6, mass: 7 };

  var create$11 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    [
      {
        name: 'top'
      },
      {
        name: 'center',
        props: {
          translateY: null,
          scaleY: null
        },
        mixins: {
          animations: {
            scaleY: PANEL_SPRING_PROPS
          },
          styles: ['translateY', 'scaleY']
        }
      },
      {
        name: 'bottom',
        props: {
          translateY: null
        },
        mixins: {
          animations: {
            translateY: PANEL_SPRING_PROPS
          },
          styles: ['translateY']
        }
      }
    ].forEach(function(section) {
      createSection(root, section, props.name);
    });

    root.element.classList.add('filepond--' + props.name);
  };

  var createSection = function createSection(root, section, className) {
    var viewConstructor = createView({
      name: 'panel-' + section.name + ' filepond--' + className,
      mixins: section.mixins
    });

    var view = root.createChildView(viewConstructor, section.props);

    root.ref[section.name] = root.appendChildView(view);
  };

  var write$7 = function write(_ref2) {
    var root = _ref2.root,
      props = _ref2.props;

    if (!props.height) {
      return;
    }

    // can it scale?
    root.element.dataset.scalable = isBoolean(props.scalable)
      ? props.scalable
      : true;

    // get child rects
    var topRect = root.ref.top.rect.element;
    var bottomRect = root.ref.bottom.rect.element;

    // make sure height never is smaller than bottom and top seciton heights combined (will probably never happen, but who knows)
    var height = Math.max(topRect.height + bottomRect.height, props.height);

    // offset center part
    root.ref.center.translateY = topRect.height;

    // scale center part
    // use math ceil to prevent transparent lines because of rounding errors
    root.ref.center.scaleY =
      (height - topRect.height - bottomRect.height) / 100;

    // offset bottom part
    root.ref.bottom.translateY = height - bottomRect.height;
  };

  var panel = createView({
    name: 'panel',
    write: write$7,
    create: create$11,
    ignoreRect: true,
    mixins: {
      apis: ['height', 'scalable']
    }
  });

  /**
   * Creates the file view
   */
  var create$4 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // file view
    root.ref.controls = root.appendChildView(
      root.createChildView(fileWrapper, { id: props.id })
    );

    // file panel
    root.ref.panel = root.appendChildView(
      root.createChildView(panel, { name: 'item-panel' })
    );

    // default start height
    root.ref.panel.height = 0;

    // by default not marked for removal
    props.markedForRemoval = false;
  };

  var StateMap = {
    DID_START_ITEM_LOAD: 'busy',
    DID_UPDATE_ITEM_LOAD_PROGRESS: 'loading',
    DID_THROW_ITEM_INVALID: 'load-invalid',
    DID_THROW_ITEM_LOAD_ERROR: 'load-error',
    DID_START_ITEM_PROCESSING: 'busy',
    DID_REQUEST_ITEM_PROCESSING: 'busy',
    DID_UPDATE_ITEM_PROCESS_PROGRESS: 'processing',
    DID_COMPLETE_ITEM_PROCESSING: 'processing-complete',
    DID_THROW_ITEM_PROCESSING_ERROR: 'processing-error',
    DID_ABORT_ITEM_PROCESSING: 'cancelled',
    DID_REVERT_ITEM_PROCESSING: 'idle'
  };

  var write$3 = function write(_ref2) {
    var root = _ref2.root,
      actions = _ref2.actions,
      props = _ref2.props;

    // update panel height
    root.ref.panel.height = root.ref.controls.rect.inner.height;

    // set panel height
    root.height = root.ref.controls.rect.inner.height;

    // select last state change action
    var action = []
      .concat(toConsumableArray(actions))
      .filter(function(action) {
        return /^DID_/.test(action.type);
      })
      .reverse()
      .find(function(action) {
        return StateMap[action.type];
      });

    // no need to set same state twice
    if (!action || (action && action.type === props.currentState)) {
      return;
    }

    // set current state
    props.currentState = action.type;

    // set state
    root.element.dataset.filepondItemState = StateMap[props.currentState] || '';
  };

  var item = createView({
    create: create$4,
    write: write$3,
    tag: 'li',
    name: 'item',
    mixins: {
      apis: ['id', 'markedForRemoval'],
      styles: [
        'translateX',
        'translateY',
        'scaleX',
        'scaleY',
        'opacity',
        'height'
      ],
      animations: {
        scaleX: 'spring',
        scaleY: 'spring',
        translateX: 'spring',
        translateY: 'spring',
        opacity: { type: 'tween', duration: 250 }
      }
    }
  });

  var create$3 = function create(_ref) {
    var root = _ref.root;

    // need to set role to list as otherwise it won't be read as a list by VoiceOver
    attr(root.element, 'role', 'list');
  };

  /**
   * Inserts a new item
   * @param root
   * @param action
   */
  var addItemView = function addItemView(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;
    var id = action.id,
      index = action.index,
      interactionMethod = action.interactionMethod;

    var animation = {
      opacity: 0
    };

    if (interactionMethod === InteractionMethod.NONE) {
      animation.translateY = null;
    }

    if (interactionMethod === InteractionMethod.DROP) {
      animation.scaleX = 0.8;
      animation.scaleY = 0.8;
      animation.translateY = null;
    }

    if (interactionMethod === InteractionMethod.BROWSE) {
      animation.translateY = -30;
    }

    if (interactionMethod === InteractionMethod.API) {
      animation.translateX = -100;
      animation.translateY = null;
    }

    root.appendChildView(
      root.createChildView(
        // view type
        item,

        // props
        _extends(
          {
            id: id
          },
          animation
        )
      ),
      index
    );
  };

  /**
   * Removes an existing item
   * @param root
   * @param action
   */
  var removeItemView = function removeItemView(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;
    var id = action.id;

    // get the view matching the given id

    var view = root.childViews.find(function(child) {
      return child.id === id;
    });

    // if no view found, exit
    if (!view) {
      return;
    }

    // animate view out of view
    view.scaleX = 0.9;
    view.scaleY = 0.9;
    view.opacity = 0;

    // mark for removal
    view.markedForRemoval = true;
  };

  /**
   * Setup action routes
   */
  var route$2 = createRoute({
    DID_ADD_ITEM: addItemView,
    DID_REMOVE_ITEM: removeItemView
  });

  var dragTranslation = function dragTranslation(
    childIndex,
    dragIndex,
    itemMargin
  ) {
    if (childIndex - 1 === dragIndex) {
      return itemMargin / 6;
    }

    if (childIndex === dragIndex) {
      return itemMargin / 2;
    }

    if (childIndex + 1 === dragIndex) {
      return -itemMargin / 2;
    }

    if (childIndex + 2 === dragIndex) {
      return -itemMargin / 6;
    }

    return 0;
  };

  /**
   * Write to view
   * @param root
   * @param actions
   * @param props
   */
  var write$2 = function write(_ref4) {
    var root = _ref4.root,
      props = _ref4.props,
      actions = _ref4.actions;

    // route actions
    route$2({ root: root, props: props, actions: actions });

    var resting = true;

    // update item positions
    var offset = 0;
    root.childViews
      .filter(function(child) {
        return child.rect.outer.height;
      })
      .forEach(function(child, childIndex) {
        var childRect = child.rect;

        // set this child offset
        child.translateX = 0;
        child.translateY =
          offset +
          (props.dragIndex > -1
            ? dragTranslation(childIndex, props.dragIndex, 10)
            : 0);

        // show child if it's not marked for removal
        if (!child.markedForRemoval) {
          child.scaleX = 1;
          child.scaleY = 1;
          child.opacity = 1;
        }

        // calculate next child offset (reduce height by y scale for views that are being removed)
        offset += childRect.outer.height;
      });

    // remove marked views
    root.childViews
      .filter(function(view) {
        return view.markedForRemoval && view.opacity === 0;
      })
      .forEach(function(view) {
        root.removeChildView(view);
        resting = false;
      });

    return resting;
  };

  /**
   * Filters actions that are meant specifically for a certain child of the list
   * @param child
   * @param actions
   */
  var filterSetItemActions = function filterSetItemActions(child, actions) {
    return actions.filter(function(action) {
      // if action has an id, filter out actions that don't have this child id
      if (action.data && action.data.id) {
        return child.id === action.data.id;
      }

      // allow all other actions
      return true;
    });
  };

  var list = createView({
    create: create$3,
    write: write$2,
    tag: 'ul',
    name: 'list',
    filterFrameActionsForChild: filterSetItemActions,
    mixins: {
      apis: ['dragIndex']
    }
  });

  var getItemIndexByPosition = function getItemIndexByPosition(
    view,
    positionInView
  ) {
    var i = 0;
    var childViews = view.childViews;
    var l = childViews.length;
    for (; i < l; i++) {
      var item = childViews[i];
      var itemRect = item.rect.outer;
      var itemRectMid = itemRect.top + itemRect.height * 0.5;

      if (positionInView.top < itemRectMid) {
        return i;
      }
    }

    return l;
  };

  var create$2 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    root.ref.list = root.appendChildView(root.createChildView(list));

    props.dragCoordinates = null;
    props.overflowing = false;
  };

  var storeDragCoordinates = function storeDragCoordinates(_ref2) {
    var root = _ref2.root,
      props = _ref2.props,
      action = _ref2.action;

    props.dragCoordinates = {
      left: action.position.scopeLeft,
      top:
        action.position.scopeTop -
        root.rect.outer.top +
        root.rect.element.scrollTop
    };
  };

  var clearDragCoordinates = function clearDragCoordinates(_ref3) {
    var props = _ref3.props;

    props.dragCoordinates = null;
  };

  var route$1 = createRoute({
    DID_DRAG: storeDragCoordinates,
    DID_END_DRAG: clearDragCoordinates
  });

  var write$1 = function write(_ref4) {
    var root = _ref4.root,
      props = _ref4.props,
      actions = _ref4.actions;

    // route actions
    route$1({ root: root, props: props, actions: actions });

    // current drag position
    root.ref.list.dragIndex = props.dragCoordinates
      ? getItemIndexByPosition(root.ref.list, props.dragCoordinates)
      : -1;

    // if currently overflowing but no longer received overflow
    if (props.overflowing && !props.overflow) {
      props.overflowing = false;

      // reset overflow state
      root.element.dataset.state = '';
      root.height = null;
    }

    // if is not overflowing currently but does receive overflow value
    if (!props.overflowing && props.overflow) {
      props.overflowing = true;
      root.element.dataset.state = 'overflow';
      root.height = props.overflow - root.translateY;
    }
  };

  var listScroller = createView({
    create: create$2,
    write: write$1,
    name: 'list-scroller',
    mixins: {
      apis: ['overflow'],
      styles: ['height', 'translateY']
    }
  });

  var attrToggle = function attrToggle(element, name, state) {
    var enabledValue =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    if (state) {
      attr(element, name, enabledValue);
    } else {
      element.removeAttribute(name);
    }
  };

  var resetFileInput = function resetFileInput(input) {
    // no value, no need to reset
    if (!input || input.value === '') {
      return;
    }

    try {
      // for modern browsers
      input.value = '';
    } catch (err) {}

    // for IE10
    if (input.value) {
      // quickly append input to temp form and reset form
      var form = createElement$1('form');
      var parentNode = input.parentNode;
      var ref = input.nextSibling;
      form.appendChild(input);
      form.reset();

      // re-inject input where it originally was
      if (ref) {
        parentNode.insertBefore(input, ref);
      } else {
        parentNode.appendChild(input);
      }
    }
  };

  var create$12 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // set id so can be referenced from outside labels
    root.element.id = 'filepond--browser-' + props.id;

    // we have to link this element to the status element
    attr(root.element, 'aria-controls', 'filepond--assistant-' + props.id);

    // set label, we use labelled by as otherwise the screenreader does not read the "browse" text in the label (as it has tabindex: 0)
    attr(root.element, 'aria-labelledby', 'filepond--drop-label-' + props.id);

    // handle changes to the input field
    root.element.addEventListener('change', function() {
      if (!root.element.value) {
        return;
      }

      // extract files
      var files = [].concat(toConsumableArray(root.element.files));

      // we add a little delay so the OS file select window can move out of the way before we add our file
      setTimeout(function() {
        // load files
        props.onload(files);

        // reset input, it's just for exposing a method to drop files, should not retain any state
        resetFileInput(root.element);
      }, 250);
    });
  };

  var setAcceptedFileTypes = function setAcceptedFileTypes(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;

    attrToggle(
      root.element,
      'accept',
      !!action.value,
      action.value ? action.value.join(',') : ''
    );
  };

  var toggleAllowMultiple = function toggleAllowMultiple(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;

    attrToggle(root.element, 'multiple', action.value);
  };

  var toggleAllowBrowse$1 = function toggleAllowBrowse(_ref4) {
    var root = _ref4.root,
      action = _ref4.action;

    attrToggle(root.element, 'disabled', !action.value);
  };

  var toggleRequired = function toggleRequired(_ref5) {
    var root = _ref5.root,
      action = _ref5.action;

    // want to remove required, always possible
    if (!action.value) {
      attrToggle(root.element, 'required', false);
    } else if (root.query('GET_TOTAL_ITEMS') === 0) {
      // if want to make required, only possible when zero items
      attrToggle(root.element, 'required', true);
    }
  };

  var setCaptureMethod = function setCaptureMethod(_ref6) {
    var root = _ref6.root,
      action = _ref6.action;

    attrToggle(
      root.element,
      'capture',
      !!action.value,
      action.value === true ? '' : action.value
    );
  };

  var updateRequiredStatus = function updateRequiredStatus(_ref8) {
    var root = _ref8.root;

    // always remove the required attribute when more than zero items
    if (root.query('GET_TOTAL_ITEMS') > 0) {
      attrToggle(root.element, 'required', false);
    } else if (root.query('GET_REQUIRED')) {
      // if zero items, we only add it if the field is required
      attrToggle(root.element, 'required', true);
    }
  };

  var browser = createView({
    tag: 'input',
    name: 'browser',
    ignoreRect: true,
    attributes: {
      type: 'file'
    },
    create: create$12,
    write: createRoute({
      DID_ADD_ITEM: updateRequiredStatus,
      DID_REMOVE_ITEM: updateRequiredStatus,
      DID_SET_ALLOW_BROWSE: toggleAllowBrowse$1,
      DID_SET_ALLOW_MULTIPLE: toggleAllowMultiple,
      DID_SET_ACCEPTED_FILE_TYPES: setAcceptedFileTypes,
      DID_SET_CAPTURE_METHOD: setCaptureMethod,
      DID_SET_REQUIRED: toggleRequired
    })
  });

  var Key = {
    ENTER: 13,
    SPACE: 32
  };

  var create$13 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // create the label and link it to the file browser
    var label = createElement$1('label');
    attr(label, 'for', 'filepond--browser-' + props.id);

    // use for labeling file input (aria-labelledby on file input)
    attr(label, 'id', 'filepond--drop-label-' + props.id);

    // hide the label from screenreaders, the input element has an aria-label
    attr(label, 'aria-hidden', 'true');

    // handle keys
    label.addEventListener('keydown', function(e) {
      if (e.keyCode === Key.ENTER || e.keyCode === Key.SPACE) {
        // stops from triggering the element a second time
        e.preventDefault();

        // click link (will then in turn activate file input)
        root.ref.label.click();
      }
    });

    // add!
    root.appendChild(label);
    root.ref.label = label;
  };

  var updateLabelValue = function updateLabelValue(label, value) {
    label.innerHTML = value;
    var clickable = label.querySelector('.filepond--label-action');
    if (clickable) {
      attr(clickable, 'tabindex', '0');
    }
    return value;
  };

  var dropLabel = createView({
    name: 'drop-label',
    create: create$13,
    write: createRoute({
      DID_SET_LABEL_IDLE: function DID_SET_LABEL_IDLE(_ref2) {
        var root = _ref2.root,
          action = _ref2.action,
          props = _ref2.props;

        props.caption = updateLabelValue(root.ref.label, action.value);
      }
    }),
    mixins: {
      apis: ['caption'],
      styles: ['opacity', 'translateX', 'translateY'],
      animations: {
        opacity: { type: 'tween', duration: 150 },
        translateX: 'spring',
        translateY: 'spring'
      }
    }
  });

  var blob = createView({
    name: 'drip-blob',
    ignoreRect: true,
    mixins: {
      styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
      animations: {
        scaleX: 'spring',
        scaleY: 'spring',
        translateX: 'spring',
        translateY: 'spring',
        opacity: { type: 'tween', duration: 250 }
      }
    }
  });

  var addBlob = function addBlob(_ref) {
    var root = _ref.root;

    var centerX = root.rect.element.width * 0.5;
    var centerY = root.rect.element.height * 0.5;

    root.ref.blob = root.appendChildView(
      root.createChildView(blob, {
        opacity: 0,
        scaleX: 2.5,
        scaleY: 2.5,
        translateX: centerX,
        translateY: centerY
      })
    );
  };

  var moveBlob = function moveBlob(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;

    if (!root.ref.blob) {
      addBlob({ root: root });
      return;
    }

    root.ref.blob.translateX = action.position.scopeLeft;
    root.ref.blob.translateY = action.position.scopeTop;
    root.ref.blob.scaleX = 1;
    root.ref.blob.scaleY = 1;
    root.ref.blob.opacity = 1;
  };

  var hideBlob = function hideBlob(_ref3) {
    var root = _ref3.root;

    if (!root.ref.blob) {
      return;
    }
    root.ref.blob.opacity = 0;
  };

  var explodeBlob = function explodeBlob(_ref4) {
    var root = _ref4.root;

    if (!root.ref.blob) {
      return;
    }
    root.ref.blob.scaleX = 2.5;
    root.ref.blob.scaleY = 2.5;
    root.ref.blob.opacity = 0;
  };

  var write$8 = function write(_ref5) {
    var root = _ref5.root,
      props = _ref5.props,
      actions = _ref5.actions;

    route$4({ root: root, props: props, actions: actions });

    var blob$$1 = root.ref.blob;

    if (actions.length === 0 && blob$$1 && blob$$1.opacity === 0) {
      root.removeChildView(blob$$1);
      root.ref.blob = null;
    }
  };

  var route$4 = createRoute({
    DID_DRAG: moveBlob,
    DID_DROP: explodeBlob,
    DID_END_DRAG: hideBlob
  });

  var drip = createView({
    ignoreRect: true,
    name: 'drip',
    write: write$8
  });

  var getRootNode = function getRootNode(element) {
    return 'getRootNode' in element ? element.getRootNode() : document;
  };

  var requestDataTransferItems = function requestDataTransferItems(
    dataTransfer
  ) {
    return new Promise(function(resolve, reject) {
      // try to get links from transfer, if found, we'll exit immidiately
      // as only one link can be dragged at once
      var links = getLinks(dataTransfer);
      if (links.length) {
        resolve(links);
        return;
      }

      // try to get files from the transfer
      getFiles(dataTransfer).then(resolve);
    });
  };

  /**
   * Extracts files from a DataTransfer object
   */
  var getFiles = function getFiles(dataTransfer) {
    return new Promise(function(resolve, reject) {
      // get the transfer items as promises
      var promisedFiles = (dataTransfer.items
        ? [].concat(toConsumableArray(dataTransfer.items))
        : []
      )
        // only keep file system items (files and directories)
        .filter(function(item) {
          return isFileSystemItem(item);
        })

        // map each item to promise
        .map(function(item) {
          return getFilesFromItem(item);
        });

      // if is empty, see if we can extract some info from the files property as a fallback
      if (!promisedFiles.length) {
        // TODO: test for directories (should not be allowed)
        // Use FileReader, problem is that the files property gets lost in the process

        resolve([].concat(toConsumableArray(dataTransfer.files)));
        return;
      }

      // done!
      Promise.all(promisedFiles).then(function(returendFileGroups) {
        // flatten groups
        var files = [];
        returendFileGroups.forEach(function(group) {
          files.push.apply(files, toConsumableArray(group));
        });

        // done (filter out empty files)!
        resolve(
          files.filter(function(file) {
            return file;
          })
        );
      });
    });
  };

  var isFileSystemItem = function isFileSystemItem(item) {
    if (isEntry(item)) {
      var entry = getAsEntry(item);
      if (entry) {
        return entry.isFile || entry.isDirectory;
      }
    }
    return item.kind === 'file';
  };

  var getFilesFromItem = function getFilesFromItem(item) {
    return new Promise(function(resolve, reject) {
      if (isDirectoryEntry(item)) {
        getFilesInDirectory(getAsEntry(item)).then(resolve);
        return;
      }

      resolve([item.getAsFile()]);
    });
  };

  var getFilesInDirectory = function getFilesInDirectory(entry) {
    return new Promise(function(resolve, reject) {
      var files = [];

      // the total entries to read
      var totalFilesFound = 0;

      // the recursive function
      var readEntries = function readEntries(dirEntry) {
        var directoryReader = dirEntry.createReader();
        directoryReader.readEntries(function(entries) {
          entries.forEach(function(entry) {
            // recursively read more directories
            if (entry.isDirectory) {
              readEntries(entry);
            } else {
              // read as file
              totalFilesFound++;
              entry.file(function(file) {
                files.push(file);

                if (totalFilesFound === files.length) {
                  resolve(files);
                }
              });
            }
          });
        });
      };

      // go!
      readEntries(entry);
    });
  };

  var isDirectoryEntry = function isDirectoryEntry(item) {
    return isEntry(item) && (getAsEntry(item) || {}).isDirectory;
  };

  var isEntry = function isEntry(item) {
    return 'webkitGetAsEntry' in item;
  };

  var getAsEntry = function getAsEntry(item) {
    return item.webkitGetAsEntry();
  };

  /**
   * Extracts links from a DataTransfer object
   */
  var getLinks = function getLinks(dataTransfer) {
    var links = [];
    try {
      // look in meta data property
      links = getLinksFromTransferMetaData(dataTransfer);
      if (links.length) {
        return links;
      }
      links = getLinksFromTransferURLData(dataTransfer);
    } catch (e) {
      // nope nope nope (probably IE trouble)
    }
    return links;
  };

  var getLinksFromTransferURLData = function getLinksFromTransferURLData(
    dataTransfer
  ) {
    var data = dataTransfer.getData('url');
    if (typeof data === 'string' && data.length) {
      return [data];
    }
    return [];
  };

  var getLinksFromTransferMetaData = function getLinksFromTransferMetaData(
    dataTransfer
  ) {
    var data = dataTransfer.getData('text/html');
    if (typeof data === 'string' && data.length) {
      var matches = data.match(/src\s*=\s*"(.+?)"/);
      if (matches) {
        return [matches[1]];
      }
    }
    return [];
  };

  var dragNDropObservers = [];

  var eventPosition = function eventPosition(e) {
    return {
      pageLeft: e.pageX,
      pageTop: e.pageY,
      scopeLeft: e.layerX || e.offsetX,
      scopeTop: e.layerY || e.offsetY
    };
  };

  var createDragNDropClient = function createDragNDropClient(
    element,
    scopeToObserve,
    filterElement
  ) {
    var observer = getDragNDropObserver(scopeToObserve);

    var client = {
      element: element,
      filterElement: filterElement,
      state: null,
      ondrop: function ondrop() {},
      onenter: function onenter() {},
      ondrag: function ondrag() {},
      onexit: function onexit() {},
      onload: function onload() {},
      allowdrop: function allowdrop() {}
    };

    client.destroy = observer.addListener(client);

    return client;
  };

  var getDragNDropObserver = function getDragNDropObserver(element) {
    // see if already exists, if so, return
    var observer = dragNDropObservers.find(function(item) {
      return item.element === element;
    });
    if (observer) {
      return observer;
    }

    // create new observer, does not yet exist for this element
    var newObserver = createDragNDropObserver(element);
    dragNDropObservers.push(newObserver);
    return newObserver;
  };

  var createDragNDropObserver = function createDragNDropObserver(element) {
    var clients = [];

    var routes = {
      dragenter: dragenter,
      dragover: dragover,
      dragleave: dragleave,
      drop: drop
    };

    var handlers = {};

    forin(routes, function(event, createHandler) {
      handlers[event] = createHandler(element, clients);
      element.addEventListener(event, handlers[event], false);
    });

    var observer = {
      element: element,
      addListener: function addListener(client) {
        // add as client
        clients.push(client);

        // return removeListener function
        return function() {
          // remove client
          clients.splice(clients.indexOf(client), 1);

          // if no more clients, clean up observer
          if (clients.length === 0) {
            dragNDropObservers.splice(dragNDropObservers.indexOf(observer), 1);

            forin(routes, function(event) {
              element.removeEventListener(event, handlers[event], false);
            });
          }
        };
      }
    };

    return observer;
  };

  var isEventTarget = function isEventTarget(e, target) {
    // get root
    var root = getRootNode(target);

    // get element at position
    var elementAtPosition = root.elementFromPoint(
      e.pageX - window.pageXOffset,
      e.pageY - window.pageYOffset
    );

    // test if target is the element or if one of its children is
    return elementAtPosition === target || target.contains(elementAtPosition);
  };

  var initialTarget = null;

  var setDropEffect = function setDropEffect(dataTransfer, effect) {
    // is in try catch as IE11 will throw error if not
    try {
      dataTransfer.dropEffect = effect;
    } catch (e) {}
  };

  var dragenter = function dragenter(root, clients) {
    return function(e) {
      e.preventDefault();

      initialTarget = e.target;

      clients.forEach(function(client) {
        var element = client.element,
          onenter = client.onenter;

        if (isEventTarget(e, element)) {
          client.state = 'enter';

          // fire enter event
          onenter(eventPosition(e));
        }
      });
    };
  };

  var dragover = function dragover(root, clients) {
    return function(e) {
      e.preventDefault();

      var dataTransfer = e.dataTransfer;

      requestDataTransferItems(dataTransfer).then(function(items) {
        var overDropTarget = false;

        clients.some(function(client) {
          var filterElement = client.filterElement,
            element = client.element,
            onenter = client.onenter,
            onexit = client.onexit,
            ondrag = client.ondrag,
            allowdrop = client.allowdrop;

          // by default we can drop

          setDropEffect(dataTransfer, 'copy');

          // allow transfer of these items
          var allowsTransfer = allowdrop(items);

          // only used when can be dropped on page
          if (!allowsTransfer) {
            setDropEffect(dataTransfer, 'none');
            return;
          }

          // targetting this client
          if (isEventTarget(e, element)) {
            overDropTarget = true;

            // had no previous state, means we are entering this client
            if (client.state === null) {
              client.state = 'enter';
              onenter(eventPosition(e));
              return;
            }

            // now over element (no matter if it allows the drop or not)
            client.state = 'over';

            // needs to allow transfer
            if (filterElement && !allowsTransfer) {
              setDropEffect(dataTransfer, 'none');
              return;
            }

            // dragging
            ondrag(eventPosition(e));
          } else {
            // should be over an element to drop
            if (filterElement && !overDropTarget) {
              setDropEffect(dataTransfer, 'none');
            }

            // might have just left this client?
            if (client.state) {
              client.state = null;
              onexit(eventPosition(e));
            }
          }
        });
      });
    };
  };

  var drop = function drop(root, clients) {
    return function(e) {
      e.preventDefault();

      var dataTransfer = e.dataTransfer;
      requestDataTransferItems(dataTransfer).then(function(items) {
        clients.forEach(function(client) {
          var filterElement = client.filterElement,
            element = client.element,
            ondrop = client.ondrop,
            onexit = client.onexit,
            allowdrop = client.allowdrop;

          client.state = null;

          var allowsTransfer = allowdrop(items);

          // no transfer for this client
          if (!allowsTransfer) {
            onexit(eventPosition(e));
            return;
          }

          // if we're filtering on element we need to be over the element to drop
          if (filterElement && !isEventTarget(e, element)) {
            return;
          }

          ondrop(eventPosition(e), items);
        });
      });
    };
  };

  var dragleave = function dragleave(root, clients) {
    return function(e) {
      if (initialTarget !== e.target) {
        return;
      }

      clients.forEach(function(client) {
        var onexit = client.onexit;

        client.state = null;

        onexit(eventPosition(e));
      });
    };
  };

  var createHopper = function createHopper(scope, validateItems, options) {
    // is now hopper scope
    scope.classList.add('filepond--hopper');

    // shortcuts
    var catchesDropsOnPage = options.catchesDropsOnPage,
      requiresDropOnElement = options.requiresDropOnElement;

    // create a dnd client

    var client = createDragNDropClient(
      scope,
      catchesDropsOnPage ? document.documentElement : scope,
      requiresDropOnElement
    );

    // current client state
    var lastState = '';
    var currentState = '';

    // determines if a file may be dropped
    client.allowdrop = function(items) {
      // TODO: if we can, throw error to indicate the items cannot by dropped

      return validateItems(items);
    };

    client.ondrop = function(position, items) {
      if (!validateItems(items)) {
        api.ondragend(position);
        return;
      }

      currentState = 'drag-drop';

      api.onload(items, position);
    };

    client.ondrag = function(position) {
      api.ondrag(position);
    };

    client.onenter = function(position) {
      currentState = 'drag-over';

      api.ondragstart(position);
    };

    client.onexit = function(position) {
      currentState = 'drag-exit';

      api.ondragend(position);
    };

    var api = {
      updateHopperState: function updateHopperState() {
        if (lastState !== currentState) {
          scope.dataset.hopperState = currentState;
          lastState = currentState;
        }
      },
      onload: function onload() {},
      ondragstart: function ondragstart() {},
      ondrag: function ondrag() {},
      ondragend: function ondragend() {},
      destroy: function destroy() {
        // destroy client
        client.destroy();
      }
    };

    return api;
  };

  var listening = false;
  var listeners$1 = [];

  var handlePaste = function handlePaste(e) {
    requestDataTransferItems(e.clipboardData).then(function(files) {
      // no files received
      if (!files.length) {
        return;
      }

      // notify listeners of received files
      listeners$1.forEach(function(listener) {
        return listener(files);
      });
    });
  };

  var listen = function listen(cb) {
    // can't add twice
    if (listeners$1.includes(cb)) {
      return;
    }

    // add initial listener
    listeners$1.push(cb);

    // setup paste listener for entire page
    if (listening) {
      return;
    }

    listening = true;
    document.addEventListener('paste', handlePaste);
  };

  var unlisten = function unlisten(listener) {
    arrayRemove(listeners$1, listeners$1.indexOf(listener));

    // clean up
    if (listeners$1.length === 0) {
      document.removeEventListener('paste', handlePaste);
      listening = false;
    }
  };

  var createPaster = function createPaster() {
    var cb = function cb(files) {
      api.onload(files);
    };

    var api = {
      destroy: function destroy() {
        unlisten(cb);
      },
      onload: function onload() {}
    };

    listen(cb);

    return api;
  };

  var debounce = function debounce(func) {
    var interval =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
    var immidiateOnly =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var last = Date.now();
    var timeout = null;

    return function() {
      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      clearTimeout(timeout);

      var dist = Date.now() - last;

      var fn = function fn() {
        last = Date.now();
        func.apply(undefined, args);
      };

      if (dist < interval) {
        // we need to delay by the difference between interval and dist
        // for example: if distance is 10 ms and interval is 16 ms,
        // we need to wait an additional 6ms before calling the function)
        if (!immidiateOnly) {
          timeout = setTimeout(fn, interval - dist);
        }
      } else {
        // go!
        fn();
      }
    };
  };

  /**
   * Creates the file view
   */
  var create$14 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    root.element.id = 'filepond--assistant-' + props.id;
    attr(root.element, 'role', 'status');
    attr(root.element, 'aria-live', 'polite');
    attr(root.element, 'aria-relevant', 'additions');
  };

  var addFilesNotificationTimeout = null;
  var notificationClearTimeout = null;

  var filenames = [];

  var assist = function assist(root, message) {
    root.element.textContent = message;
  };

  var clear$1 = function clear(root) {
    root.element.textContent = '';
  };

  var listModified = function listModified(root, filename, label) {
    var total = root.query('GET_TOTAL_ITEMS');
    assist(
      root,
      label +
        ' ' +
        filename +
        ', ' +
        total +
        ' ' +
        (total === 1
          ? root.query('GET_LABEL_FILE_COUNT_SINGULAR')
          : root.query('GET_LABEL_FILE_COUNT_PLURAL'))
    );

    // clear group after set amount of time so the status is not read twice
    clearTimeout(notificationClearTimeout);
    notificationClearTimeout = setTimeout(function() {
      clear$1(root);
    }, 1500);
  };

  var isUsingFilePond = function isUsingFilePond(root) {
    return root.element.parentNode.contains(document.activeElement);
  };

  var itemAdded = function itemAdded(_ref2) {
    var root = _ref2.root,
      action = _ref2.action;

    if (!isUsingFilePond(root)) {
      return;
    }

    root.element.textContent = '';
    var item = root.query('GET_ITEM', action.id);
    filenames.push(item.filename);

    clearTimeout(addFilesNotificationTimeout);
    addFilesNotificationTimeout = setTimeout(function() {
      listModified(
        root,
        filenames.join(', '),
        root.query('GET_LABEL_FILE_ADDED')
      );
      filenames.length = 0;
    }, 750);
  };

  var itemRemoved = function itemRemoved(_ref3) {
    var root = _ref3.root,
      action = _ref3.action;

    if (!isUsingFilePond(root)) {
      return;
    }

    var item = action.item;
    listModified(root, item.filename, root.query('GET_LABEL_FILE_REMOVED'));
  };

  var itemProcessed = function itemProcessed(_ref4) {
    var root = _ref4.root,
      action = _ref4.action;

    // will also notify the user when FilePond is not being used, as the user might be occupied with other activities while uploading a file

    var item = root.query('GET_ITEM', action.id);
    var filename = item.filename;
    var label = root.query('GET_LABEL_FILE_PROCESSING_COMPLETE');

    assist(root, filename + ' ' + label);
  };

  var itemProcessedUndo = function itemProcessedUndo(_ref5) {
    var root = _ref5.root,
      action = _ref5.action;

    var item = root.query('GET_ITEM', action.id);
    var filename = item.filename;
    var label = root.query('GET_LABEL_FILE_PROCESSING_ABORTED');

    assist(root, filename + ' ' + label);
  };

  var itemError = function itemError(_ref6) {
    var root = _ref6.root,
      action = _ref6.action;

    var item = root.query('GET_ITEM', action.id);
    var filename = item.filename;

    // will also notify the user when FilePond is not being used, as the user might be occupied with other activities while uploading a file

    assist(root, action.status.main + ' ' + filename + ' ' + action.status.sub);
  };

  var assistant = createView({
    create: create$14,
    ignoreRect: true,
    write: createRoute({
      DID_LOAD_ITEM: itemAdded,
      DID_REMOVE_ITEM: itemRemoved,
      DID_COMPLETE_ITEM_PROCESSING: itemProcessed,

      DID_ABORT_ITEM_PROCESSING: itemProcessedUndo,
      DID_REVERT_ITEM_PROCESSING: itemProcessedUndo,

      DID_THROW_ITEM_LOAD_ERROR: itemError,
      DID_THROW_ITEM_INVALID: itemError,
      DID_THROW_ITEM_PROCESSING_ERROR: itemError
    }),
    tag: 'span',
    name: 'assistant'
  });

  var create$1 = function create(_ref) {
    var root = _ref.root,
      props = _ref.props;

    // Add id
    var id = root.query('GET_ID');
    if (id) {
      root.element.id = id;
    }

    // Add className
    var className = root.query('GET_CLASS_NAME');
    if (className) {
      className.split(' ').forEach(function(name) {
        root.element.classList.add(name);
      });
    }

    // Field label
    root.ref.label = root.appendChildView(
      root.createChildView(dropLabel, _extends({}, props, { translateY: null }))
    );

    // List of items
    root.ref.list = root.appendChildView(
      root.createChildView(listScroller, { translateY: null })
    );

    // Background panel
    root.ref.panel = root.appendChildView(
      root.createChildView(panel, { name: 'panel-root' })
    );

    // Assistant notifies assistive tech when content changes
    root.ref.assistant = root.appendChildView(
      root.createChildView(assistant, _extends({}, props))
    );

    // Measure (tests if fixed height was set)
    // DOCTYPE needs to be set for this to work
    root.ref.measure = createElement$1('div');
    root.ref.measure.style.height = '100%';
    root.element.appendChild(root.ref.measure);
  };

  var write = function write(_ref2) {
    var root = _ref2.root,
      props = _ref2.props,
      actions = _ref2.actions;

    // route actions
    route({ root: root, props: props, actions: actions });

    // get quick references to various high level parts of the upload tool
    var _root$ref = root.ref,
      hopper = _root$ref.hopper,
      label = _root$ref.label,
      list = _root$ref.list,
      panel$$1 = _root$ref.panel;

    // bool to indicate if we're full or not

    var isMultiItem = root.query('GET_ALLOW_MULTIPLE');
    var totalItems = root.query('GET_TOTAL_ITEMS');
    var maxItems = root.query('GET_MAX_FILES');
    var atMaxCapacity = isMultiItem
      ? totalItems === maxItems
      : totalItems === 1;

    // views not used in height calculation
    var childrenUsedForBoundingCalculation = [].concat(
      toConsumableArray(list.childViews[0].childViews)
    );

    // views used to calculate the visual height of the container (which is passed to panel)
    var childrenUsedForVisualHeightCalculation = [list];

    // action used to add item
    var addAction = actions.find(function(action) {
      return action.type === 'DID_ADD_ITEM';
    });

    // if at max capacity hide the label
    if (atMaxCapacity && addAction) {
      // get interaction type
      var interactionMethod = addAction.data.interactionMethod;

      // hide label
      label.opacity = 0;

      // if is multi-item, the label is always moved upwards
      if (isMultiItem) {
        label.translateY = -label.rect.element.height;
      } else {
        // based on interaction method we move label in different directions
        if (interactionMethod === InteractionMethod.API) {
          label.translateX = 40;
        } else if (interactionMethod === InteractionMethod.BROWSE) {
          label.translateY = 40;
        } else {
          label.translateY = -40;
        }
      }
    } else if (!atMaxCapacity) {
      // reveal label
      label.opacity = 1;
      label.translateY = root.rect.element.paddingTop;
      label.translateX = 0;

      // we use label for bounding box
      childrenUsedForVisualHeightCalculation.push(label);
      childrenUsedForBoundingCalculation.push(label);
    }

    // sets correct state to hopper scope
    if (hopper) {
      hopper.updateHopperState();
    }

    // need a label to do anything
    if (!label.caption) {
      return;
    }

    // link list to label bottom position (including bottom margin)
    list.translateY = isMultiItem
      ? label.rect.outer.bottom
      : root.rect.element.paddingTop;

    // update bounding box if has changed
    var boxBounding = calculateRootBoundingBoxHeight(root, props);
    var childrenBoundingHeight = calculateChildrenBoundingBoxHeight(
      childrenUsedForBoundingCalculation
    );
    var visualHeight = calculateChildrenVisualHeight(
      childrenUsedForVisualHeightCalculation
    );
    var bottomPadding = totalItems > 0 ? root.rect.element.paddingTop * 0.5 : 0;

    if (boxBounding.fixedHeight) {
      // fixed height

      // fixed height panel
      panel$$1.scalable = false;

      // link panel height to box bounding
      panel$$1.height = boxBounding.fixedHeight + root.rect.element.paddingTop;

      // set overflow
      list.overflow =
        childrenBoundingHeight > panel$$1.height && isMultiItem
          ? panel$$1.height
          : null;
    } else if (boxBounding.cappedHeight) {
      // max-height

      // not a fixed height panel
      panel$$1.scalable = true;

      // limit children bounding height to the set capped height
      var cappedChildrenBoundingHeight = Math.min(
        boxBounding.cappedHeight,
        childrenBoundingHeight
      );

      // update root height
      root.height = cappedChildrenBoundingHeight + bottomPadding;

      // set visual height
      panel$$1.height = Math.min(
        boxBounding.cappedHeight + root.rect.element.paddingTop,
        visualHeight + bottomPadding
      );

      // if can overflow, test if is currently overflowing
      list.overflow =
        childrenBoundingHeight > panel$$1.height && isMultiItem
          ? panel$$1.height
          : null;
    } else {
      // flexible height

      // not a fixed height panel
      panel$$1.scalable = true;

      // set to new bounding
      root.height =
        childrenBoundingHeight + bottomPadding + root.rect.element.paddingTop;

      // set height to new visual height
      panel$$1.height = visualHeight + bottomPadding;
    }
  };

  var calculateChildrenVisualHeight = function calculateChildrenVisualHeight(
    children
  ) {
    return (
      children

        // calculate the total height occupied by all children
        .reduce(function(max, child) {
          var bottom = child.rect.outer.bottom;

          if (bottom > max) {
            max = bottom;
          }

          return max;
        }, 0)
    );
  };

  var calculateRootBoundingBoxHeight = function calculateRootBoundingBoxHeight(
    root,
    props
  ) {
    // only calculate first time
    if (props.boxBounding) {
      return props.boxBounding;
    }

    var height = root.ref.measureHeight || null;
    var cappedHeight = parseInt(root.style.maxHeight, 10) || null;
    var fixedHeight = height === 0 ? null : height;

    props.boxBounding = {
      cappedHeight: cappedHeight,
      fixedHeight: fixedHeight
    };

    // destroy measure element
    root.element.removeChild(root.ref.measure);
    root.ref.measure = null;

    // done!
    return props.boxBounding;
  };

  var calculateChildrenBoundingBoxHeight = function calculateChildrenBoundingBoxHeight(
    children
  ) {
    return (
      children

        // no use of outer and inner as that includes translations
        .reduce(function(height, child) {
          return (
            height + child.rect.inner.bottom + child.rect.element.marginBottom
          );
        }, 0)
    );
  };

  var toggleAllowDrop = function toggleAllowDrop(_ref3) {
    var root = _ref3.root,
      props = _ref3.props,
      action = _ref3.action;

    if (action.value && !root.ref.hopper) {
      var hopper = createHopper(
        root.element,
        function(items) {
          var allowReplace = root.query('GET_ALLOW_REPLACE');
          var allowMultiple = root.query('GET_ALLOW_MULTIPLE');
          var totalItems = root.query('GET_TOTAL_ITEMS');
          var dropValidation = root.query('GET_DROP_VALIDATION');
          var maxItems = root.query('GET_MAX_TOTAL_ITEMS');

          // total amount of items being dragged
          var totalDragItems = items.length;

          // if does not allow multiple items and dragging more than one item
          if (!allowMultiple && totalDragItems > 1) {
            return false;
          }

          // limit max items to one if not allowed to drop multiple items
          maxItems = allowMultiple ? maxItems : allowReplace ? maxItems : 1;

          // no more room?
          var hasMaxItems = isInt(maxItems);
          if (hasMaxItems && totalItems + totalDragItems > maxItems) {
            return false;
          }

          // all items should be validated by all filters as valid
          return dropValidation
            ? items.every(function(item) {
                return applyFilters('ALLOW_HOPPER_ITEM', item, {
                  query: root.query
                }).every(function(result) {
                  return result === true;
                });
              })
            : true;
        },
        {
          catchesDropsOnPage: root.query('GET_DROP_ON_PAGE'),
          requiresDropOnElement: root.query('GET_DROP_ON_ELEMENT')
        }
      );

      hopper.onload = function(items, position) {
        var itemList = root.ref.list.childViews[0];
        var index = getItemIndexByPosition(itemList, {
          left: position.scopeLeft,
          top:
            position.scopeTop -
            root.ref.list.rect.outer.top +
            root.ref.list.element.scrollTop
        });

        forEachDelayed(items, function(source) {
          root.dispatch('ADD_ITEM', {
            interactionMethod: InteractionMethod.DROP,
            source: source,
            index: index
          });
        });

        root.dispatch('DID_DROP', { position: position });

        root.dispatch('DID_END_DRAG', { position: position });
      };

      hopper.ondragstart = function(position) {
        root.dispatch('DID_START_DRAG', { position: position });
      };

      hopper.ondrag = debounce(function(position) {
        root.dispatch('DID_DRAG', { position: position });
      });

      hopper.ondragend = function(position) {
        root.dispatch('DID_END_DRAG', { position: position });
      };

      root.ref.hopper = hopper;

      root.ref.drip = root.appendChildView(root.createChildView(drip));
    } else if (!action.value && root.ref.hopper) {
      root.ref.hopper.destroy();
      root.ref.hopper = null;
      root.removeChildView(root.ref.drip);
    }
  };

  /**
   * Enable or disable browse functionality
   */
  var toggleAllowBrowse = function toggleAllowBrowse(_ref4) {
    var root = _ref4.root,
      props = _ref4.props,
      action = _ref4.action;

    if (action.value) {
      root.ref.browser = root.appendChildView(
        root.createChildView(
          browser,
          _extends({}, props, {
            onload: function onload(items) {
              forEachDelayed(items, function(source) {
                root.dispatch('ADD_ITEM', {
                  interactionMethod: InteractionMethod.BROWSE,
                  source: source,
                  index: 0
                });
              });
            }
          })
        ),
        0
      );
    } else if (root.ref.browser) {
      root.removeChildView(root.ref.browser);
    }
  };

  /**
   * Enable or disable paste functionality
   */
  var toggleAllowPaste = function toggleAllowPaste(_ref5) {
    var root = _ref5.root,
      action = _ref5.action;

    if (action.value) {
      root.ref.paster = createPaster();
      root.ref.paster.onload = function(items) {
        forEachDelayed(items, function(source) {
          root.dispatch('ADD_ITEM', {
            interactionMethod: InteractionMethod.PASTE,
            source: source,
            index: 0
          });
        });
      };
    } else if (root.ref.paster) {
      root.ref.paster.destroy();
      root.ref.paster = null;
    }
  };

  /**
   * Route actions
   */
  var route = createRoute({
    DID_SET_ALLOW_BROWSE: toggleAllowBrowse,
    DID_SET_ALLOW_DROP: toggleAllowDrop,
    DID_SET_ALLOW_PASTE: toggleAllowPaste
  });

  var root = createView({
    name: 'root',
    read: function read(_ref6) {
      var root = _ref6.root;

      if (root.ref.measure) {
        root.ref.measureHeight = root.ref.measure.offsetHeight;
      }
    },
    create: create$1,
    write: write,
    destroy: function destroy(_ref7) {
      var root = _ref7.root;

      if (root.ref.paster) {
        root.ref.paster.destroy();
      }
      if (root.ref.hopper) {
        root.ref.hopper.destroy();
      }
    },
    mixins: {
      styles: ['height']
    }
  });

  // defaults
  // view
  // creates the app
  var createApp$1 = function createApp() {
    var initialOptions =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // let element
    var originalElement = null;

    // get default options
    var defaultOptions$$1 = getOptions$1();

    // create the data store, this will contain all our app info
    var store = createStore(
      // initial state (should be serializable)
      createInitialState(defaultOptions$$1),

      // queries
      [queries, createOptionQueries(defaultOptions$$1)],

      // action handlers
      [actions, createOptionActions(defaultOptions$$1)]
    );

    // set initial options
    store.dispatch('SET_OPTIONS', { options: initialOptions });

    // render initial view
    var view = root(store, { id: getUniqueId() });

    //
    // PRIVATE API -------------------------------------------------------------------------------------
    //
    var resting = false;
    var hidden = false;
    var readWriteApi = {
      // necessary for update loop

      /**
       * Reads from dom (never call manually)
       * @private
       */
      _read: function _read() {
        // if resting, no need to read as numbers will still all be correct
        if (resting) {
          return;
        }

        // read view data
        view._read();

        // if root is hidden
        hidden = view.rect.element.hidden;
      },

      /**
       * Writes to dom (never call manually)
       * @private
       */
      _write: function _write(ts) {
        // don't do anything while hidden
        if (hidden) {
          return;
        }

        // get all actions from store
        var actions$$1 = store
          .processActionQueue()

          // filter out set actions (will trigger DID_SET)
          .filter(function(action) {
            return !/^SET_/.test(action.type);
          });

        // if was idling and no actions stop here
        if (resting && !actions$$1.length) {
          return;
        }

        // some actions might trigger events
        routeActionsToEvents(actions$$1);

        // update the view
        resting = view._write(ts, actions$$1);

        // now idling
        if (resting) {
          store.processDispatchQueue();
        }
      }
    };

    //
    // EXPOSE EVENTS -------------------------------------------------------------------------------------
    //
    var createEvent = function createEvent(name) {
      return function(data) {
        // create default event
        var event = {
          type: name
        };

        // no data to add
        if (!data) {
          return event;
        }

        // copy relevant props
        if (data.hasOwnProperty('error')) {
          event.error = data.error ? _extends({}, data.error) : null;
        }

        if (data.status) {
          event.status = _extends({}, data.status);
        }

        // only source is available, else add item if possible
        if (data.source) {
          event.file = data.source;
        } else if (data.item || data.id) {
          var item = data.item ? data.item : store.query('GET_ITEM', data.id);
          event.file = item ? createItemAPI(item) : null;
        }

        // if this is a progress event add the progress amount
        if (/progress/.test(name)) {
          event.progress = data.progress;
        }

        return event;
      };
    };

    var eventRoutes = {
      DID_DESTROY: createEvent('destroy'),

      DID_INIT: createEvent('init'),

      DID_THROW_MAX_FILES: createEvent('warning'),

      DID_START_ITEM_LOAD: createEvent('addfilestart'),
      DID_UPDATE_ITEM_LOAD_PROGRESS: createEvent('addfileprogress'),
      DID_LOAD_ITEM: createEvent('addfile'),

      DID_THROW_ITEM_INVALID: [createEvent('error'), createEvent('addfile')],

      DID_THROW_ITEM_LOAD_ERROR: [createEvent('error'), createEvent('addfile')],

      DID_START_ITEM_PROCESSING: createEvent('processfilestart'),
      DID_UPDATE_ITEM_PROCESS_PROGRESS: createEvent('processfileprogress'),
      DID_ABORT_ITEM_PROCESSING: createEvent('processfileabort'),
      DID_COMPLETE_ITEM_PROCESSING: createEvent('processfile'),
      DID_REVERT_ITEM_PROCESSING: createEvent('processfilerevert'),

      DID_THROW_ITEM_PROCESSING_ERROR: [
        createEvent('error'),
        createEvent('processfile')
      ],

      SPLICE_ITEM: createEvent('removefile')
    };

    var exposeEvent = function exposeEvent(event) {
      // create event object to be dispatched
      var detail = _extends({ pond: exports }, event);
      delete detail.type;
      view.element.dispatchEvent(
        new CustomEvent('FilePond:' + event.type, {
          // event info
          detail: detail,

          // event behaviour
          bubbles: true,
          cancelable: true,
          composed: true // triggers listeners outside of shadow root
        })
      );

      // event object to params used for `on()` event handlers and callbacks `oninit()`
      var params = [];

      // if is possible error event, make it the first param
      if (event.hasOwnProperty('error')) {
        params.push(event.error);
      }
      // file is always section
      if (event.hasOwnProperty('file')) {
        params.push(event.file);
      }

      // append otherp props
      var filtered = ['type', 'error', 'file'];
      Object.keys(event)
        .filter(function(key) {
          return !filtered.includes(key);
        })
        .forEach(function(key) {
          return params.push(event[key]);
        });

      // on(type, () => { })
      exports.fire.apply(exports, [event.type].concat(params));

      // oninit = () => {}
      var handler = store.query('GET_ON' + event.type.toUpperCase());
      if (handler) {
        handler.apply(undefined, params);
      }
    };

    var routeActionsToEvents = function routeActionsToEvents(actions$$1) {
      if (!actions$$1.length) {
        return;
      }

      actions$$1.forEach(function(action) {
        if (!eventRoutes[action.type]) {
          return;
        }
        var routes = eventRoutes[action.type];
        (Array.isArray(routes) ? routes : [routes]).forEach(function(route) {
          exposeEvent(route(action.data));
        });
      });
    };

    //
    // PUBLIC API -------------------------------------------------------------------------------------
    //
    var setOptions = function setOptions(options) {
      return store.dispatch('SET_OPTIONS', { options: options });
    };

    var getFile = function getFile(query) {
      return store.query('GET_ITEM', query);
    };

    var addFile = function addFile(source) {
      var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function(resolve, reject) {
        store.dispatch('ADD_ITEM', {
          interactionMethod: InteractionMethod.API,
          source: source,
          index: options.index,
          success: resolve,
          failure: reject
        });
      });
    };

    var removeFile = function removeFile(query) {
      // request item removal
      store.dispatch('REMOVE_ITEM', { query: query });

      // see if item has been removed
      return store.query('GET_ITEM', query) === null;
    };

    var addFiles = function addFiles() {
      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      return new Promise(function(resolve, reject) {
        var sources = [];
        var options = {};

        // user passed a sources array
        if (isArray(args[0])) {
          sources.push.apply(sources, toConsumableArray(args[0]));
          Object.assign(options, args[1] || {});
        } else {
          // user passed sources as arguments, last one might be options object
          var lastArgument = args[args.length - 1];
          if (
            (typeof lastArgument === 'undefined'
              ? 'undefined'
              : _typeof(lastArgument)) === 'object' &&
            !(lastArgument instanceof Blob)
          ) {
            Object.assign(options, args.pop());
          }

          // add rest to sources
          sources.push.apply(sources, args);
        }

        var sourcePromises = [];
        var delayPromises = forEachDelayed(sources, function(source) {
          sourcePromises.push(addFile(source, options));
        });

        Promise.all(delayPromises).then(function() {
          Promise.all(sourcePromises).then(function(results) {
            resolve(results);
          });
        });
      });
    };

    var getFiles = function getFiles() {
      return store.query('GET_ITEMS');
    };

    var processFile = function processFile(query) {
      return new Promise(function(resolve, reject) {
        store.dispatch('PROCESS_ITEM', {
          query: query,
          success: resolve,
          failure: reject
        });
      });
    };

    var processFiles = function processFiles() {
      for (
        var _len2 = arguments.length, args = Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2] = arguments[_key2];
      }

      var queries$$1 = Array.isArray(args[0]) ? args[0] : args;
      if (!queries$$1.length) {
        return Promise.all(getFiles().map(processFile));
      }
      return Promise.all(queries$$1.map(processFile));
    };

    var removeFiles = function removeFiles() {
      for (
        var _len3 = arguments.length, args = Array(_len3), _key3 = 0;
        _key3 < _len3;
        _key3++
      ) {
        args[_key3] = arguments[_key3];
      }

      var queries$$1 = Array.isArray(args[0]) ? args[0] : args;
      var files = getFiles();

      if (!queries$$1.length) {
        return Promise.all(files.map(removeFile));
      }

      // when removing by index the indexes shift after each file removal so we need to convert indexes to ids
      var mappedQueries = queries$$1
        .map(function(query) {
          return isNumber(query)
            ? files[query] ? files[query].id : null
            : query;
        })
        .filter(function(query) {
          return query;
        });

      return mappedQueries.map(removeFile);
    };

    var exports = _extends(
      {},
      on(),
      readWriteApi,
      createOptionAPI(store, defaultOptions$$1),
      {
        /**
         * Override options defined in options object
         * @param options
         */
        setOptions: setOptions,

        /**
         * Load the given file
         * @param source - the source of the file (either a File, base64 data uri or url)
         * @param options - object, { index: 0 }
         */
        addFile: addFile,

        /**
         * Load the given files
         * @param sources - the sources of the files to load
         * @param options - object, { index: 0 }
         */
        addFiles: addFiles,

        /**
         * Returns the file objects matching the given query
         * @param query { string, number, null }
         */
        getFile: getFile,

        /**
         * Upload file with given name
         * @param query { string, number, null  }
         */
        processFile: processFile,

        /**
         * Removes a file by its name
         * @param query { string, number, null  }
         */
        removeFile: removeFile,

        /**
         * Returns all files (wrapped in public api)
         */
        getFiles: getFiles,

        /**
         * Starts uploading all files
         */
        processFiles: processFiles,

        /**
         * Clears all files from the files list
         */
        removeFiles: removeFiles,

        /**
         * Browse the file system for a file
         */
        browse: function browse() {
          // needs to be trigger directly as user action needs to be traceable (is not traceable in requestAnimationFrame)
          var input = view.element.querySelector('input[type=file]');
          if (input) {
            input.click();
          }
        },

        /**
         * Destroys the app
         */
        destroy: function destroy() {
          // request destruction
          exports.fire('destroy', view.element);

          // stop active processes (file uploads, fetches, stuff like that)
          // loop over items and depending on states call abort for ongoing processes
          store.dispatch('ABORT_ALL');

          // destroy view
          view._destroy();

          // dispatch destroy
          store.dispatch('DID_DESTROY');
        },

        /**
         * Inserts the plugin before the target element
         */
        insertBefore: function insertBefore$$1(element) {
          return insertBefore(view.element, element);
        },

        /**
         * Inserts the plugin after the target element
         */
        insertAfter: function insertAfter$$1(element) {
          return insertAfter(view.element, element);
        },

        /**
         * Appends the plugin to the target element
         */
        appendTo: function appendTo(element) {
          return element.appendChild(view.element);
        },

        /**
         * Replaces an element with the app
         */
        replaceElement: function replaceElement(element) {
          // insert the app before the element
          insertBefore(view.element, element);

          // remove the original element
          element.parentNode.removeChild(element);

          // remember original element
          originalElement = element;
        },

        /**
         * Restores the original element
         */
        restoreElement: function restoreElement() {
          if (!originalElement) {
            return; // no element to restore
          }

          // restore original element
          insertAfter(originalElement, view.element);

          // remove our element
          view.element.parentNode.removeChild(view.element);

          // remove reference
          originalElement = null;
        },

        /**
         * Returns true if the app root is attached to given element
         * @param element
         */
        isAttachedTo: function isAttachedTo(element) {
          return view.element === element || originalElement === element;
        },

        /**
         * Returns the root element
         */
        element: {
          get: function get$$1() {
            return view.element;
          }
        }
      }
    );

    // Done!
    store.dispatch('DID_INIT');

    // create actual api object
    return createObject(exports);
  };

  var createAppObject = function createAppObject() {
    var customOptions =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // default options
    var defaultOptions$$1 = {};
    forin(getOptions$1(), function(key, value) {
      defaultOptions$$1[key] = value[0];
    });

    // set app options
    var app = createApp$1(_extends({}, defaultOptions$$1, customOptions));

    // return the plugin instance
    return app;
  };

  var toCamels = function toCamels(string) {
    var separator =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
    return string.replace(new RegExp(separator + '.', 'g'), function(sub) {
      return sub.charAt(1).toUpperCase();
    });
  };

  var lowerCaseFirstLetter = function lowerCaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  var attributeNameToPropertyName = function attributeNameToPropertyName(
    attributeName
  ) {
    return toCamels(attributeName.replace(/^data-/, ''));
  };

  var mapObject = function mapObject(object, propertyMap) {
    // remove unwanted
    forin(propertyMap, function(selector, mapping) {
      forin(object, function(property, value) {
        // create regexp shortcut
        var selectorRegExp = new RegExp(selector);

        // tests if
        var matches = selectorRegExp.test(property);

        // no match, skip
        if (!matches) {
          return;
        }

        // if there's a mapping, the original property is always removed
        delete object[property];

        // should only remove, we done!
        if (mapping === false) {
          return;
        }

        // move value to new property
        if (isString(mapping)) {
          object[mapping] = value;
          return;
        }

        // move to group
        var group = mapping.group;
        if (isObject(mapping) && !object[group]) {
          object[group] = {};
        }

        object[group][
          lowerCaseFirstLetter(property.replace(selectorRegExp, ''))
        ] = value;
      });

      // do submapping
      if (mapping.mapping) {
        mapObject(object[mapping.group], mapping.mapping);
      }
    });
  };

  var getAttributesAsObject = function getAttributesAsObject(node) {
    var attributeMapping =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // turn attributes into object
    var output = []
      .concat(toConsumableArray(node.attributes))
      .reduce(function(obj, attribute) {
        obj[attributeNameToPropertyName(attribute.name)] = attr(
          node,
          attribute.name
        );
        return obj;
      }, {});

    // do mapping of object properties
    mapObject(output, attributeMapping);

    return output;
  };

  var createAppAtElement = function createAppAtElement(element) {
    var options =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // how attributes of the input element are mapped to the options for the plugin
    var attributeMapping = {
      // translate to other name
      '^class$': 'className',
      '^multiple$': 'allowMultiple',
      '^capture$': 'captureMethod',

      // group under single property
      '^server': {
        group: 'server',
        mapping: {
          '^process': {
            group: 'process'
          },
          '^revert': {
            group: 'revert'
          },
          '^fetch': {
            group: 'fetch'
          },
          '^restore': {
            group: 'restore'
          },
          '^load': {
            group: 'load'
          }
        }
      },

      // don't include in object
      '^type$': false,
      '^files$': false
    };

    // add additional option translators
    applyFilters('SET_ATTRIBUTE_TO_OPTION_MAP', attributeMapping);

    // create final options object by extracting options from element
    // and then overriding with options object
    var mergedOptions = _extends(
      {},
      getAttributesAsObject(
        element.nodeName === 'FIELDSET'
          ? element.querySelector('input[type=file]')
          : element,
        attributeMapping
      ),
      options
    );

    // if parent is a fieldset, get files from parent by selecting all input fields that are not file upload fields
    // these will then be automatically set to the initial files
    mergedOptions.files = (options.files || []).concat(
      []
        .concat(
          toConsumableArray(element.querySelectorAll('input:not([type=file])'))
        )
        .map(function(input) {
          return {
            source: input.value,
            options: {
              type: input.dataset.type
            }
          };
        })
    );

    // build plugin
    var app = createAppObject(mergedOptions);

    // add already selected files
    if (element.files) {
      [].concat(toConsumableArray(element.files)).forEach(function(file) {
        app.addFile(file);
      });
    }

    // replace the target element
    app.replaceElement(element);

    // expose
    return app;
  };

  // if an element is passed, we create the instance at that element, if not, we just create an up object
  var createApp = function createApp() {
    return isNode(arguments.length <= 0 ? undefined : arguments[0])
      ? createAppAtElement.apply(undefined, arguments)
      : createAppObject.apply(undefined, arguments);
  };

  var PRIVATE_METHODS$1 = ['fire', '_read', '_write'];

  var createAppAPI = function createAppAPI(app) {
    var api = {};

    copyObjectPropertiesToObject(app, api, PRIVATE_METHODS$1);

    return api;
  };

  /**
   * Replaces placeholders in given string with replacements
   * @param string - "Foo {bar}""
   * @param replacements - { "bar": 10 }
   */
  var replaceInString = function replaceInString(string, replacements) {
    return string.replace(/(?:{([a-z]+)})/g, function(match, group) {
      return replacements[group];
    });
  };

  var images = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg', 'tiff'];
  var text$1 = ['css', 'csv', 'html', 'txt'];
  var map = {
    zip: 'zip|compressed',
    epub: 'application/epub+zip'
  };

  var guesstimateMimeType = function guesstimateMimeType() {
    var extension =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    extension = extension.toLowerCase();
    if (images.includes(extension)) {
      return (
        'image/' +
        (extension === 'jpg'
          ? 'jpeg'
          : extension === 'svg' ? 'svg+xml' : extension)
      );
    }
    if (text$1.includes(extension)) {
      return 'text/' + extension;
    }
    return map[extension] || null;
  };

  var createWorker = function createWorker(fn) {
    var workerBlob = new Blob(['(', fn.toString(), ')()'], {
      type: 'application/javascript'
    });
    var workerURL = URL.createObjectURL(workerBlob);
    var worker = new Worker(workerURL);

    return {
      transfer: function transfer(message, cb) {},
      post: function post(message, cb, transferList) {
        var id = getUniqueId();

        worker.onmessage = function(e) {
          if (e.data.id === id) {
            cb(e.data.message);
          }
        };

        worker.postMessage(
          {
            id: id,
            message: message
          },
          transferList
        );
      },
      terminate: function terminate() {
        worker.terminate();
        URL.revokeObjectURL(workerURL);
      }
    };
  };

  var loadImage = function loadImage(url, cb) {
    return new Promise(function(resolve, reject) {
      var img = new Image();
      img.onload = function() {
        resolve(img);
      };
      img.onerror = function(e) {
        reject(e);
      };
      img.src = url;
    });
  };

  var copyFile = function copyFile(file) {
    return renameFile(file, file.name);
  };

  // utilities exposed to plugins
  // already registered plugins (can't register twice)
  var registeredPlugins = [];

  // pass utils to plugin
  var createAppPlugin = function createAppPlugin(plugin) {
    // already registered
    if (registeredPlugins.includes(plugin)) {
      return;
    }

    // remember this plugin
    registeredPlugins.push(plugin);

    // setup!
    var pluginOutline = plugin({
      addFilter: addFilter,
      utils: {
        Type: Type,
        forin: forin,
        isString: isString,
        toNaturalFileSize: toNaturalFileSize,
        replaceInString: replaceInString,
        getExtensionFromFilename: getExtensionFromFilename,
        getFilenameWithoutExtension: getFilenameWithoutExtension,
        guesstimateMimeType: guesstimateMimeType,
        getFileFromBlob: getFileFromBlob,
        getFilenameFromURL: getFilenameFromURL,
        createRoute: createRoute,
        createWorker: createWorker,
        createView: createView,
        loadImage: loadImage,
        copyFile: copyFile,
        renameFile: renameFile,
        applyFilterChain: applyFilterChain
      }
    });

    // add plugin options to default options
    extendDefaultOptions(pluginOutline.options);
  };

  /**
   * Plugin internal state (over all instances)
   */
  var state = {
    // active app instances, used to redraw the apps and to find the later
    apps: []
  };

  // plugin name
  var name = 'filepond';

  // is in browser
  var hasNavigator = typeof navigator !== 'undefined';

  // app painter, cannot be paused or stopped at the moment
  var painter =
    hasNavigator &&
    createPainter(createUpdater(state.apps, '_read', '_write'), 60);

  // fire load event
  if (hasNavigator) {
    // fire loaded event so we know when FilePond is available
    var dispatch = function dispatch() {
      // let others know we have area ready
      document.dispatchEvent(
        new CustomEvent('FilePond:loaded', {
          detail: {
            supported: supported,
            create: create,
            destroy: destroy,
            parse: parse,
            find: find,
            registerPlugin: registerPlugin,
            setOptions: setOptions$$1
          }
        })
      );

      // clean up event
      document.removeEventListener('DOMContentLoaded', dispatch);
    };

    if (document.readyState !== 'loading') {
      // move to back of execution queue, FilePond should have been exported by then
      setTimeout(function() {
        return dispatch();
      }, 0);
    } else {
      document.addEventListener('DOMContentLoaded', dispatch);
    }
  }

  // updates the OptionTypes object based on the current options
  var updateOptionTypes = function updateOptionTypes() {
    return forin(getOptions$1(), function(key, value) {
      OptionTypes[key] = value[1];
    });
  };

  /**
   * Public Plugin methods
   */
  var FileStatus = _extends({}, ItemStatus);

  var OptionTypes = {};
  updateOptionTypes();

  // create method, creates apps and adds them to the app array
  var create = function create() {
    var app = createApp.apply(undefined, arguments);
    app.on('destroy', destroy);
    state.apps.push(app);
    return createAppAPI(app);
  };

  // destroys apps and removes them from the app array
  var destroy = function destroy(hook) {
    // returns true if the app was destroyed successfully
    var indexToRemove = state.apps.findIndex(function(app) {
      return app.isAttachedTo(hook);
    });
    if (indexToRemove >= 0) {
      // remove from apps
      var app = state.apps.splice(indexToRemove, 1)[0];

      // restore original dom element
      app.restoreElement();

      return true;
    }

    return false;
  };

  // parses the given context for plugins (does not include the context element itself)
  var parse = function parse(context) {
    // get all possible hooks
    var matchedHooks = [].concat(
      toConsumableArray(context.querySelectorAll('.' + name))
    );

    // filter out already active hooks
    var newHooks = matchedHooks.filter(function(newHook) {
      return !state.apps.find(function(app) {
        return app.isAttachedTo(newHook);
      });
    });

    // create new instance for each hook
    return newHooks.map(function(hook) {
      return create(hook);
    });
  };

  // returns an app based on the given element hook
  var find = function find(hook) {
    var app = state.apps.find(function(app) {
      return app.isAttachedTo(hook);
    });
    if (!app) {
      return null;
    }
    return createAppAPI(app);
  };

  // returns true if plugin is supported
  var isOperaMini = function isOperaMini() {
    return (
      Object.prototype.toString.call(window.operamini) === '[object OperaMini]'
    );
  };
  var hasPromises = function hasPromises() {
    return 'Promise' in window;
  };
  var hasBlobSlice = function hasBlobSlice() {
    return 'slice' in Blob.prototype;
  };
  var hasCreateObjectURL = function hasCreateObjectURL() {
    return 'URL' in window && 'createObjectURL' in window.URL;
  };
  var hasVisibility = function hasVisibility() {
    return 'visibilityState' in document;
  };
  var hasTiming = function hasTiming() {
    return 'performance' in window;
  }; // iOS 8.x

  var supported = function supported() {
    if (!hasNavigator) {
      return false;
    }
    return !(
      isOperaMini() ||
      !hasVisibility() ||
      !hasPromises() ||
      !hasBlobSlice() ||
      !hasCreateObjectURL() ||
      !hasTiming()
    );
  };

  // adds a plugin extension
  var registerPlugin = function registerPlugin() {
    for (
      var _len = arguments.length, plugins = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      plugins[_key] = arguments[_key];
    }

    // register plugins
    plugins.forEach(createAppPlugin);

    // update OptionTypes, each plugin might have extended the default options
    updateOptionTypes();
  };

  var getOptions$$1 = function getOptions$$1() {
    var opts = {};
    forin(getOptions$1(), function(key, value) {
      opts[key] = value[0];
    });
    return opts;
  };

  var setOptions$$1 = function setOptions$$1(opts) {
    if (isObject(opts)) {
      // update existing plugins
      state.apps.forEach(function(app) {
        app.setOptions(opts);
      });

      // override defaults
      setOptions$1(opts);
    }

    // return new options
    return getOptions$$1();
  };

  exports.FileStatus = FileStatus;
  exports.OptionTypes = OptionTypes;
  exports.create = create;
  exports.destroy = destroy;
  exports.parse = parse;
  exports.find = find;
  exports.supported = supported;
  exports.registerPlugin = registerPlugin;
  exports.getOptions = getOptions$$1;
  exports.setOptions = setOptions$$1;

  Object.defineProperty(exports, '__esModule', { value: true });
});


/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * FilePondPluginFileValidateType 1.0.3
 * Licensed under MIT, https://opensource.org/licenses/MIT
 * Please visit https://pqina.nl/filepond for details.
 */
var plugin$1 = ({ addFilter, utils }) => {
  // get quick reference to Type utils
  const {
    Type,
    isString,
    guesstimateMimeType,
    getExtensionFromFilename,
    getFilenameFromURL
  } = utils;

  const mimeTypeMatchesWildCard = (mimeType, wildcard) => {
    const mimeTypeGroup = (/^[^/]+/.exec(mimeType) || []).pop(); // image/png -> image
    const wildcardGroup = wildcard.slice(0, -2); // image/* -> image
    return mimeTypeGroup === wildcardGroup;
  };

  const isValidMIMEType = (acceptedTypes, userInputType) =>
    acceptedTypes.some(acceptedType => {
      // accepted is wildcard mime type
      if (/\*$/.test(acceptedType)) {
        return mimeTypeMatchesWildCard(userInputType, acceptedType);
      }

      // is normal mime type
      return acceptedType === userInputType;
    });

  const validateFile = (item, acceptedFileTypes) => {
    // no types defined, everything is allowed \o/
    if (acceptedFileTypes.length === 0) {
      return true;
    }

    // if the item is a url we guess the mime type by the extension
    let type = '';
    if (isString(item)) {
      const filename = getFilenameFromURL(item);
      const extension = getExtensionFromFilename(filename);
      if (extension) {
        type = guesstimateMimeType(extension);
      } else {
        return true;
      }
    } else {
      type = item.type;
    }

    // validate file type
    return isValidMIMEType(acceptedFileTypes, type);
  };

  // setup attribute mapping for accept
  addFilter('SET_ATTRIBUTE_TO_OPTION_MAP', map =>
    Object.assign(map, {
      accept: 'acceptedFileTypes'
    })
  );

  // filtering if an item is allowed in hopper
  addFilter('ALLOW_HOPPER_ITEM', (file, { query }) => {
    // if we are not doing file type validation exit
    if (!query('GET_ALLOW_FILE_TYPE_VALIDATION')) {
      return true;
    }

    // we validate the file against the accepted file types
    return validateFile(file, query('GET_ACCEPTED_FILE_TYPES'));
  });

  // called for each file that is loaded
  // right before it is set to the item state
  // should return a promise
  addFilter(
    'LOAD_FILE',
    (file, { query }) =>
      new Promise((resolve, reject) => {
        const allowFileTypeValidation = query('GET_ALLOW_FILE_TYPE_VALIDATION');
        if (!allowFileTypeValidation) {
          resolve(file);
          return;
        }

        const acceptedFileTypes = query('GET_ACCEPTED_FILE_TYPES');

        // if invalid, exit here
        if (!validateFile(file, acceptedFileTypes)) {
          reject({
            status: {
              main: query('GET_LABEL_FILE_TYPE_NOT_ALLOWED'),
              sub: query('GET_ACCEPTED_FILE_TYPES').join(', ')
            }
          });
          return;
        }

        // all fine
        resolve(file);
      })
  );

  // expose plugin
  return {
    // default options
    options: {
      // Enable or disable file type validation
      allowFileTypeValidation: [true, Type.BOOLEAN],

      // What file types to accept
      acceptedFileTypes: [[], Type.ARRAY],
      // - must be comma separated
      // - mime types: image/png, image/jpeg, image/gif
      // - extensions: .png, .jpg, .jpeg
      // - wildcards: image/*

      labelFileTypeNotAllowed: ['File is of invalid type', Type.STRING]
    }
  };

  // receives all items and returns true or false depending on wether the items are valid
  // (as in, is hovered over it)
  // addFilter('ALLOW_HOPPER_ITEM', ( item, { query }) => {
  //  TODO: implement, plus throw error in dropzone to indicate item is not valid
  // });
};

if (typeof navigator !== 'undefined' && document) {
  // plugin has loaded
  document.dispatchEvent(
    new CustomEvent('FilePond:pluginloaded', { detail: plugin$1 })
  );
}

/* harmony default export */ __webpack_exports__["a"] = (plugin$1);


/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * FilePondPluginImagePreview 1.0.9
 * Licensed under MIT, https://opensource.org/licenses/MIT
 * Please visit https://pqina.nl/filepond for details.
 */
// test if file is of type image and can be viewed in canvas
const isPreviewableImage = file =>
  /^image/.test(file.type) && !/svg/.test(file.type);

const transforms = {
  1: () => [1, 0, 0, 1, 0, 0],
  2: width => [-1, 0, 0, 1, width, 0],
  3: (width, height) => [-1, 0, 0, -1, width, height],
  4: (width, height) => [1, 0, 0, -1, 0, height],
  5: () => [0, 1, 1, 0, 0, 0],
  6: (width, height) => [0, 1, -1, 0, height, 0],
  7: (width, height) => [0, -1, -1, 0, height, width],
  8: width => [0, -1, 1, 0, 0, width]
};

const fixImageOrientation = (ctx, width, height, orientation) => {
  // no orientation supplied
  if (orientation === -1) {
    return;
  }

  ctx.transform(...transforms[orientation](width, height));
};

// draws the preview image
const createPreviewImage = (data, width, height, orientation) => {
  // round
  width = Math.round(width);
  height = Math.round(height);

  // width and height have already been swapped earlier
  // if orientation was in range below, let's swap back to make
  // this code a bit more readable
  if (orientation >= 5 && orientation <= 8) {
    [width, height] = [height, width];
  }

  // draw image
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // if is rotated incorrectly swap width and height
  if (orientation >= 5 && orientation <= 8) {
    canvas.width = height;
    canvas.height = width;
  } else {
    canvas.width = width;
    canvas.height = height;
  }

  // correct image orientation
  ctx.save();
  fixImageOrientation(ctx, width, height, orientation);

  // draw the image
  ctx.drawImage(data, 0, 0, width, height);

  // end draw image
  ctx.restore();

  // data has been transferred to canvas ( if was ImageBitmap )
  if ('close' in data) {
    data.close();
  }

  return canvas;
};

const IMAGE_SCALE_SPRING_PROPS = {
  type: 'spring',
  stiffness: 0.5,
  damping: 0.45,
  mass: 10
};

const createImageView = fpAPI =>
  fpAPI.utils.createView({
    name: 'image-preview',
    tag: 'div',
    ignoreRect: true,
    create: ({ root, props }) => {
      root.ref.clip = document.createElement('div');
      root.element.appendChild(root.ref.clip);
    },
    write: fpAPI.utils.createRoute({
      DID_IMAGE_PREVIEW_LOAD: ({ root, props, action }) => {
        const { id } = props;

        // get item
        const item = root.query('GET_ITEM', { id: props.id });

        // orientation info
        const exif = item.getMetadata('exif') || {};
        const orientation = exif.orientation || -1;

        // get width and height from action, and swap of orientation is incorrect
        let { width, height } = action.data;
        if (orientation >= 5 && orientation <= 8) {
          [width, height] = [height, width];
        }

        // get item props
        const crop = item.getMetadata('crop') || {
          rect: {
            x: 0,
            y: 0,
            width: 1,
            height: 1
          },
          aspectRatio: height / width
        };

        // scale canvas based on pixel density
        const pixelDensityFactor = window.devicePixelRatio;

        // the max height of the preview container
        const fixedPreviewHeight = root.query('GET_IMAGE_PREVIEW_HEIGHT');
        const minPreviewHeight = root.query('GET_IMAGE_PREVIEW_MIN_HEIGHT');
        const maxPreviewHeight = root.query('GET_IMAGE_PREVIEW_MAX_HEIGHT');

        // calculate scaled preview image size
        const containerWidth = root.rect.inner.width;
        const previewImageRatio = height / width;
        const previewWidth = containerWidth;
        const previewHeight = containerWidth * previewImageRatio;

        // calculate image preview height and width
        const imageHeight =
          fixedPreviewHeight !== null
            ? fixedPreviewHeight
            : Math.max(minPreviewHeight, Math.min(height, maxPreviewHeight));
        const imageWidth = imageHeight / previewImageRatio;

        // render scaled preview image
        const previewImage = createPreviewImage(
          action.data,
          imageWidth * pixelDensityFactor,
          imageHeight * pixelDensityFactor,
          orientation
        );

        // calculate crop container size
        let clipHeight =
          fixedPreviewHeight !== null
            ? fixedPreviewHeight
            : Math.max(
                minPreviewHeight,
                Math.min(containerWidth * crop.aspectRatio, maxPreviewHeight)
              );

        let clipWidth = clipHeight / crop.aspectRatio;
        if (clipWidth > previewWidth) {
          clipWidth = previewWidth;
          clipHeight = clipWidth * crop.aspectRatio;
        }

        // calculate scalar based on if the clip rectangle has been scaled down
        const previewScalar = clipHeight / (previewHeight * crop.rect.height);

        width = previewWidth * previewScalar;
        height = previewHeight * previewScalar;
        const x = -crop.rect.x * previewWidth * previewScalar;
        const y = -crop.rect.y * previewHeight * previewScalar;

        // apply styles
        root.ref.clip.style.cssText = `
                    width: ${Math.round(clipWidth)}px;
                    height: ${Math.round(clipHeight)}px;
                `;

        // position image
        previewImage.style.cssText = `
                    width: ${Math.round(width)}px;
                    height: ${Math.round(height)}px;
                    transform: translate(${Math.round(x)}px, ${Math.round(
          y
        )}px) rotateZ(0.00001deg);
                `;
        root.ref.clip.appendChild(previewImage);

        // let others know of our fabulous achievement (so the image can be faded in)
        root.dispatch('DID_IMAGE_PREVIEW_DRAW', { id });
      }
    }),
    mixins: {
      styles: ['scaleX', 'scaleY', 'opacity'],
      animations: {
        scaleX: IMAGE_SCALE_SPRING_PROPS,
        scaleY: IMAGE_SCALE_SPRING_PROPS,
        opacity: { type: 'tween', duration: 750 }
      }
    }
  });

const applyTemplate = (source, target) => {
  // copy width and height
  target.width = source.width;
  target.height = source.height;

  // draw the template
  const ctx = target.getContext('2d');
  ctx.drawImage(source, 0, 0);
};

const createImageOverlayView = fpAPI =>
  fpAPI.utils.createView({
    name: 'image-preview-overlay',
    tag: 'canvas',
    ignoreRect: true,
    create: ({ root, props }) => {
      applyTemplate(props.template, root.element);
    },
    mixins: {
      styles: ['opacity'],
      animations: {
        opacity: { type: 'spring', mass: 25 }
      }
    }
  });

/**
 * Bitmap Worker
 */
const BitmapWorker = function() {
  // route messages
  self.onmessage = e => {
    toBitmap(e.data.message, response => {
      // imageBitmap is sent back as transferable
      self.postMessage({ id: e.data.id, message: response }, [response]);
    });
  };

  // resize image data
  const toBitmap = (options, cb) => {
    fetch(options.file)
      .then(response => response.blob())
      .then(blob => createImageBitmap(blob))
      .then(imageBitmap => cb(imageBitmap));
  };
};

const getImageSize = (url, cb) => {
  let image = new Image();
  image.onload = () => {
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    image = null;
    cb(width, height);
  };
  image.src = url;
};

const easeInOutSine = t => -0.5 * (Math.cos(Math.PI * t) - 1);

const addGradientSteps = (
  gradient,
  color,
  alpha = 1,
  easeFn = easeInOutSine,
  steps = 10,
  offset = 0
) => {
  const range = 1 - offset;
  const rgb = color.join(',');
  for (let i = 0; i <= steps; i++) {
    const p = i / steps;
    const stop = offset + range * p;
    gradient.addColorStop(stop, `rgba(${rgb}, ${easeFn(p) * alpha})`);
  }
};

const drawTemplate = (canvas, width, height, color, alphaTarget) => {
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  const horizontalCenter = width * 0.5;

  const grad = ctx.createRadialGradient(
    horizontalCenter,
    height + 110,
    height - 100,
    horizontalCenter,
    height + 110,
    height + 100
  );

  addGradientSteps(grad, color, alphaTarget, undefined, 8, 0.4);

  ctx.save();
  ctx.translate(-width * 0.5, 0);
  ctx.scale(2, 1);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
};

const hasNavigator = typeof navigator !== 'undefined';

const width = 500;
const height = 200;

const overlayTemplateShadow = hasNavigator && document.createElement('canvas');
const overlayTemplateError = hasNavigator && document.createElement('canvas');
const overlayTemplateSuccess = hasNavigator && document.createElement('canvas');

if (hasNavigator) {
  drawTemplate(overlayTemplateShadow, width, height, [40, 40, 40], 0.85);
  drawTemplate(overlayTemplateError, width, height, [196, 78, 71], 1);
  drawTemplate(overlayTemplateSuccess, width, height, [54, 151, 99], 1);
}

const createImageWrapperView = fpAPI => {
  // create overlay view
  const overlay = createImageOverlayView(fpAPI);

  /**
   * Write handler for when preview container has been created
   */
  const didCreatePreviewContainer = ({ root, props, action }) => {
    const { utils, views } = fpAPI;
    const { createView, createWorker, loadImage } = utils;
    const { id } = props;

    // we need to get the file data to determine the eventual image size
    const item = root.query('GET_ITEM', id);

    // get url to file (we'll revoke it later on when done)
    const fileURL = URL.createObjectURL(item.file);

    // fallback
    const loadPreviewFallback = (item, width, height, orientation) => {
      // let's scale the image in the main thread :(
      loadImage(fileURL).then(previewImageLoaded);
    };

    // image is now ready
    const previewImageLoaded = data => {
      // the file url is no longer needed
      URL.revokeObjectURL(fileURL);

      // the preview is now ready to be drawn
      root.dispatch('DID_IMAGE_PREVIEW_LOAD', {
        id,
        data
      });
    };

    // determine image size of this item
    getImageSize(fileURL, (width, height) => {
      // we can now scale the panel to the final size
      root.dispatch('DID_IMAGE_PREVIEW_CALCULATE_SIZE', {
        id,
        width,
        height
      });

      // if we support scaling using createImageBitmap we use a worker
      if ('createImageBitmap' in window) {
        // let's scale the image in a worker
        const worker = createWorker(BitmapWorker);
        worker.post(
          {
            file: fileURL
          },
          imageBitmap => {
            // destroy worker
            worker.terminate();

            // no bitmap returned, must be something wrong,
            // try the oldschool way
            if (!imageBitmap) {
              loadPreviewFallback(item);
              return;
            }

            // yay we got our bitmap, let's continue showing the preview
            previewImageLoaded(imageBitmap);
          }
        );
      } else {
        // create fallback preview
        loadPreviewFallback(item);
      }
    });
  };

  /**
   * Write handler for when the preview has been loaded
   */
  const didLoadPreview = ({ root, props }) => {
    root.ref.overlayShadow.opacity = 1;
  };

  /**
   * Write handler for when the preview image is ready to be animated
   */
  const didDrawPreview = ({ root, props }) => {
    const { image } = root.ref;

    // reveal image
    image.scaleX = 1.0;
    image.scaleY = 1.0;
    image.opacity = 1;
  };

  /**
   * Write handler for when the preview has been loaded
   */
  const restoreOverlay = ({ root }) => {
    root.ref.overlayShadow.opacity = 1;
    root.ref.overlayError.opacity = 0;
    root.ref.overlaySuccess.opacity = 0;
  };

  const didThrowError = ({ root }) => {
    root.ref.overlayShadow.opacity = 0.25;
    root.ref.overlayError.opacity = 1;
  };

  const didCompleteProcessing = ({ root }) => {
    root.ref.overlayShadow.opacity = 0.25;
    root.ref.overlaySuccess.opacity = 1;
  };

  /**
   * Constructor
   */
  const create = ({ root, props, dispatch }) => {
    const image = createImageView(fpAPI);

    // append image presenter
    root.ref.image = root.appendChildView(
      root.createChildView(image, {
        id: props.id,
        scaleX: 1.25,
        scaleY: 1.25,
        opacity: 0
      })
    );

    // image overlays
    root.ref.overlayShadow = root.appendChildView(
      root.createChildView(overlay, {
        template: overlayTemplateShadow,
        opacity: 0
      })
    );

    root.ref.overlaySuccess = root.appendChildView(
      root.createChildView(overlay, {
        template: overlayTemplateSuccess,
        opacity: 0
      })
    );

    root.ref.overlayError = root.appendChildView(
      root.createChildView(overlay, {
        template: overlayTemplateError,
        opacity: 0
      })
    );
  };

  return fpAPI.utils.createView({
    name: 'image-preview-wrapper',
    create,
    write: fpAPI.utils.createRoute({
      // image preview stated
      DID_IMAGE_PREVIEW_LOAD: didLoadPreview,
      DID_IMAGE_PREVIEW_DRAW: didDrawPreview,
      DID_IMAGE_PREVIEW_CONTAINER_CREATE: didCreatePreviewContainer,

      // file states
      DID_THROW_ITEM_LOAD_ERROR: didThrowError,
      DID_THROW_ITEM_PROCESSING_ERROR: didThrowError,
      DID_THROW_ITEM_INVALID: didThrowError,
      DID_COMPLETE_ITEM_PROCESSING: didCompleteProcessing,
      DID_START_ITEM_PROCESSING: restoreOverlay,
      DID_REVERT_ITEM_PROCESSING: restoreOverlay
    })
  });
};

/**
 * Image Preview Plugin
 */
var plugin$1 = fpAPI => {
  const { addFilter, utils } = fpAPI;
  const { Type, createRoute } = utils;

  // imagePreviewView
  const imagePreviewView = createImageWrapperView(fpAPI);

  // called for each view that is created right after the 'create' method
  addFilter('CREATE_VIEW', viewAPI => {
    // get reference to created view
    const { is, view, query } = viewAPI;

    // only hook up to item view and only if is enabled for this cropper
    if (!is('file') || !query('GET_ALLOW_IMAGE_PREVIEW')) {
      return;
    }

    // create the image preview plugin, but only do so if the item is an image
    const didLoadItem = ({ root, props, actions }) => {
      const { id } = props;
      const item = query('GET_ITEM', id);

      // item could theoretically have been removed in the mean time
      if (!item) {
        return;
      }

      // get the file object
      const file = item.file;

      // exit if this is not an image
      if (!isPreviewableImage(file)) {
        return;
      }

      // exit if image size is too high and no createImageBitmap support
      // this would simply bring the browser to its knees and that is not what we want
      const supportsCreateImageBitmap = 'createImageBitmap' in (window || {});
      const maxPreviewFileSize = query('GET_IMAGE_PREVIEW_MAX_FILE_SIZE');
      if (
        !supportsCreateImageBitmap &&
        maxPreviewFileSize &&
        file.size > maxPreviewFileSize
      ) {
        return;
      }

      // set preview view
      root.ref.imagePreview = view.appendChildView(
        view.createChildView(imagePreviewView, { id })
      );

      // now ready
      root.dispatch('DID_IMAGE_PREVIEW_CONTAINER_CREATE', { id });
    };

    const didCalculatePreviewSize = ({ root, props, action }) => {
      // get item
      const item = root.query('GET_ITEM', { id: props.id });

      // orientation info
      const exif = item.getMetadata('exif') || {};
      const orientation = exif.orientation || -1;

      // get width and height from action, and swap of orientation is incorrect
      let { width, height } = action;
      if (orientation >= 5 && orientation <= 8) {
        [width, height] = [height, width];
      }

      // we need the item to get to the crop size
      const crop = item.getMetadata('crop') || {
        rect: {
          x: 0,
          y: 0,
          width: 1,
          height: 1
        },
        aspectRatio: height / width
      };

      // get height min and max
      const fixedPreviewHeight = root.query('GET_IMAGE_PREVIEW_HEIGHT');
      const minPreviewHeight = root.query('GET_IMAGE_PREVIEW_MIN_HEIGHT');
      const maxPreviewHeight = root.query('GET_IMAGE_PREVIEW_MAX_HEIGHT');

      // const crop width
      height =
        fixedPreviewHeight !== null
          ? fixedPreviewHeight
          : Math.max(minPreviewHeight, Math.min(height, maxPreviewHeight));

      width = height / crop.aspectRatio;
      if (width > root.rect.element.width) {
        width = root.rect.element.width;
        height = width * crop.aspectRatio;
      }

      // set height
      root.ref.imagePreview.element.style.cssText = `height:${Math.round(
        height
      )}px`;
    };

    // start writing
    view.registerWriter(
      createRoute({
        DID_LOAD_ITEM: didLoadItem,
        DID_IMAGE_PREVIEW_CALCULATE_SIZE: didCalculatePreviewSize
      })
    );
  });

  // expose plugin
  return {
    options: {
      // Enable or disable image preview
      allowImagePreview: [true, Type.BOOLEAN],

      // Fixed preview height
      imagePreviewHeight: [null, Type.INT],

      // Min image height
      imagePreviewMinHeight: [44, Type.INT],

      // Max image height
      imagePreviewMaxHeight: [256, Type.INT],

      // Max size of preview file for when createImageBitmap is not supported
      imagePreviewMaxFileSize: [null, Type.INT]
    }
  };
};

if (typeof navigator !== 'undefined' && document) {
  // plugin has loaded
  document.dispatchEvent(
    new CustomEvent('FilePond:pluginloaded', { detail: plugin$1 })
  );
}

/* harmony default export */ __webpack_exports__["a"] = (plugin$1);


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(23)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./filepond.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./filepond.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "/*\n * FilePond 1.4.0\n * Licensed under MIT, https://opensource.org/licenses/MIT\n * Please visit https://pqina.nl/filepond for details.\n */\n.filepond--assistant{position:absolute;overflow:hidden;height:1px;width:1px;padding:0;border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}.filepond--browser{position:absolute;margin:0;padding:0;left:1em;top:1.75em;width:calc(100% - 2em);opacity:0;font-size:0}.filepond--drip{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;opacity:.1;pointer-events:none;border-radius:.5em;background:rgba(0,0,0,.01)}.filepond--drip-blob{-webkit-transform-origin:center center;transform-origin:center center;left:0;width:8em;height:8em;margin-left:-4em;margin-top:-4em;background:#292625;border-radius:50%}.filepond--drip-blob,.filepond--drop-label{position:absolute;top:0;will-change:transform,opacity}.filepond--drop-label{left:1em;right:1em;margin:0 0 1em;color:#4f4f4f}.filepond--drop-label label{display:block;padding:1em 0;margin:0;cursor:default;font-size:.875em;font-weight:400;text-align:center;line-height:1.5}.filepond--label-action{text-decoration:underline;-webkit-text-decoration-skip:ink;text-decoration-skip:ink;-webkit-text-decoration-color:#a7a4a4;text-decoration-color:#a7a4a4;cursor:pointer}.filepond--file-action-button{font-size:1em;width:1.625em;height:1.625em;cursor:auto;font-family:inherit;line-height:inherit;margin:0;padding:0;border:none;color:#fff;outline:none;border-radius:50%;background-color:rgba(0,0,0,.5);background-image:none;will-change:transform,opacity;box-shadow:0 0 0 0 hsla(0,0%,100%,0);transition:box-shadow .25s ease-in}.filepond--file-action-button svg{width:100%;height:100%}.filepond--file-action-button:focus,.filepond--file-action-button:hover{box-shadow:0 0 0 .125em hsla(0,0%,100%,.9)}.filepond--file-info{position:static;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex:1;flex:1;margin:0 .5em 0 0;min-width:0;will-change:transform,opacity;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--file-info *{margin:0}.filepond--file-info .filepond--file-info-main{font-size:.75em;line-height:1.2;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%}.filepond--file-info .filepond--file-info-sub{font-size:.625em;opacity:.5;transition:opacity .25s ease-in-out}.filepond--file-info .filepond--file-info-sub:empty{display:none}.filepond--file-status{position:static;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;margin:0;min-width:2.25em;text-align:right;will-change:transform,opacity;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--file-status *{margin:0;white-space:nowrap}.filepond--file-status .filepond--file-status-main{font-size:.75em;line-height:1.2}.filepond--file-status .filepond--file-status-sub{font-size:.625em;opacity:.5;transition:opacity .25s ease-in-out}.filepond--file-wrapper{border:none;margin:0;padding:0;min-width:0;height:100%}.filepond--file-wrapper>legend{position:absolute;overflow:hidden;height:1px;width:1px;padding:0;border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}.filepond--file{position:static;display:-ms-flexbox;display:flex;height:100%;-ms-flex-align:start;align-items:flex-start;padding:.5625em;color:#fff;border-radius:.5em}.filepond--file .filepond--file-status{margin-left:auto;margin-right:2.25em}.filepond--file .filepond--processing-complete-indicator{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.filepond--file .filepond--file-action-button,.filepond--file .filepond--processing-complete-indicator{position:absolute}.filepond--file .filepond--progress-indicator{position:absolute;top:.75em;right:.75em}.filepond--file .filepond--action-remove-item{left:.5625em}.filepond--file .filepond--file-action-button:not(.filepond--action-remove-item),.filepond--file .filepond--processing-complete-indicator{right:.5625em}[data-filepond-item-state*=error] .filepond--file-info,[data-filepond-item-state*=invalid] .filepond--file-info,[data-filepond-item-state=cancelled] .filepond--file-info{margin-right:2.25em}[data-filepond-item-state=processing-complete] .filepond--action-revert-item-processing svg{-webkit-animation:fall .5s .125s linear both;animation:fall .5s .125s linear both}[data-filepond-item-state=processing-complete] .filepond--file-info-sub,[data-filepond-item-state=processing-complete] .filepond--file-status-sub{opacity:0}[data-filepond-item-state=processing-complete] .filepond--action-revert-item-processing~.filepond--file-info .filepond--file-info-sub,[data-filepond-item-state=processing-complete] .filepond--action-revert-item-processing~.filepond--file-status .filepond--file-status-sub{opacity:.5}[data-filepond-item-state*=error] .filepond--file-wrapper,[data-filepond-item-state*=error] .filepond--panel,[data-filepond-item-state*=invalid] .filepond--file-wrapper,[data-filepond-item-state*=invalid] .filepond--panel{-webkit-animation:shake .65s linear both;animation:shake .65s linear both}[data-filepond-item-state*=busy] .filepond--progress-indicator svg{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes shake{10%,90%{-webkit-transform:translateX(-.0625em);transform:translateX(-.0625em)}20%,80%{-webkit-transform:translateX(.125em);transform:translateX(.125em)}30%,50%,70%{-webkit-transform:translateX(-.25em);transform:translateX(-.25em)}40%,60%{-webkit-transform:translateX(.25em);transform:translateX(.25em)}}@keyframes shake{10%,90%{-webkit-transform:translateX(-.0625em);transform:translateX(-.0625em)}20%,80%{-webkit-transform:translateX(.125em);transform:translateX(.125em)}30%,50%,70%{-webkit-transform:translateX(-.25em);transform:translateX(-.25em)}40%,60%{-webkit-transform:translateX(.25em);transform:translateX(.25em)}}@-webkit-keyframes fall{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}70%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}to{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes fall{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}70%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}to{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}.filepond--hopper[data-hopper-state=drag-over]>*{pointer-events:none}.filepond--progress-indicator{z-index:103}.filepond--file-action-button{z-index:102}.filepond--file-status{z-index:101}.filepond--file-info{z-index:100}.filepond--item{position:absolute;top:0;left:0;right:0;padding:0;margin:0 0 .5em;will-change:transform,opacity}.filepond--item>.filepond--panel{z-index:1}.filepond--item>.filepond--panel .filepond--panel-bottom{box-shadow:0 .0625em .125em -.0625em rgba(0,0,0,.25)}.filepond--item>.filepond--file-wrapper{position:relative;z-index:2}.filepond--item-panel{background-color:#64605e}[data-filepond-item-state=processing-complete] .filepond--item-panel{background-color:#369763}[data-filepond-item-state*=error] .filepond--item-panel,[data-filepond-item-state*=invalid] .filepond--item-panel{background-color:#c44e47}.filepond--item-panel{border-radius:.5em;transition:background-color .25s}.filepond--list-scroller{position:absolute;top:0;left:0;right:0;margin:0;will-change:transform}.filepond--list-scroller[data-state=overflow]{overflow-y:scroll;overflow-x:visible;-webkit-overflow-scrolling:touch}.filepond--list-scroller[data-state=overflow] .filepond--list{bottom:0;right:0}.filepond--list-scroller::-webkit-scrollbar{background:transparent}.filepond--list-scroller::-webkit-scrollbar:vertical{width:1em}.filepond--list-scroller::-webkit-scrollbar:horizontal{height:0}.filepond--list-scroller::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.3);border-radius:99999px;border:.3125em solid transparent;background-clip:content-box}.filepond--list{position:absolute;top:0;left:1em;right:1em;margin:0;padding:0;list-style-type:none;will-change:transform}.filepond--panel-root{border-radius:.5em;background-color:#f1f0ef}.filepond--panel{position:absolute;left:0;top:0;right:0;margin:0;height:auto!important;pointer-events:none}.filepond--panel[data-scalable=true]{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;background-color:transparent!important;border:none!important}.filepond--panel[data-scalable=false]{bottom:0}.filepond--panel[data-scalable=false]>div{display:none}.filepond--panel-bottom,.filepond--panel-center,.filepond--panel-top{position:absolute;left:0;top:0;right:0;margin:0;padding:0}.filepond--panel-bottom,.filepond--panel-top{height:.5em}.filepond--panel-top{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;border-bottom:none!important}.filepond--panel-top:after{content:\"\";position:absolute;height:2px;left:0;right:0;bottom:-1px;background-color:inherit}.filepond--panel-bottom,.filepond--panel-center{will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:translate3d(0,.5em,0);transform:translate3d(0,.5em,0)}.filepond--panel-bottom{border-top-left-radius:0!important;border-top-right-radius:0!important;border-top:none!important}.filepond--panel-bottom:before{content:\"\";position:absolute;height:2px;left:0;right:0;top:-1px;background-color:inherit}.filepond--panel-center{height:100px!important;border-top:none!important;border-bottom:none!important;border-radius:0!important}.filepond--panel-center:not([style]){visibility:hidden}.filepond--progress-indicator{position:static;width:1.25em;height:1.25em;color:#fff;margin:0;pointer-events:none;will-change:transform,opacity}.filepond--progress-indicator svg{width:100%;height:100%}.filepond--progress-indicator path{fill:none;stroke:currentColor}.filepond--list-scroller{z-index:6}.filepond--drop-label{z-index:5}.filepond--drip{z-index:3}.filepond--root>.filepond--panel{z-index:2}.filepond--browser{z-index:1}.filepond--root{box-sizing:border-box;position:relative;margin-bottom:1em;padding-top:1em;font-size:1rem;line-height:normal;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-weight:450;text-align:left;text-rendering:optimizeLegibility;direction:ltr;contain:layout style size}.filepond--root *{font-size:inherit;box-sizing:inherit;line-height:inherit}", ""]);

// exports


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(217);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(23)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./filepond-plugin-image-preview.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./filepond-plugin-image-preview.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "/*\n * FilePondPluginImagePreview 1.0.9\n * Licensed under MIT, https://opensource.org/licenses/MIT\n * Please visit https://pqina.nl/filepond for details.\n */\n.filepond--image-preview-wrapper{z-index:2}.filepond--image-preview-overlay{display:block;position:absolute;left:0;top:0;width:100%;min-height:5rem;max-height:7rem;margin:0;opacity:0;z-index:1;mix-blend-mode:multiply;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--image-preview-overlay:nth-of-type(2),.filepond--image-preview-overlay:nth-of-type(3){mix-blend-mode:normal}@supports (-webkit-marquee-repetition:infinite) and (object-fit:fill){.filepond--image-preview-overlay{mix-blend-mode:normal}}.filepond--image-preview-wrapper{pointer-events:none;position:absolute;left:0;top:0;right:0;margin:0;border-radius:.45em;overflow:hidden;background:rgba(0,0,0,.01)}.filepond--image-preview{position:relative;z-index:1;display:block;width:100%;height:auto;pointer-events:none;-webkit-transform-origin:center center;transform-origin:center center;background:#222;will-change:transform,opacity}.filepond--image-preview div{position:relative;overflow:hidden;margin:0 auto}.filepond--image-preview canvas{position:absolute;left:0;top:0;will-change:transform}", ""]);

// exports


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "departments" } },
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
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.deleteDenied,
                          expression: "!deleteDenied"
                        }
                      ],
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
            "v-data-table",
            {
              staticClass: "elevation-1",
              attrs: {
                headers: _vm.headers,
                items: _vm.items,
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
                              staticClass: "mx-0",
                              attrs: { icon: "" },
                              on: {
                                click: function($event) {
                                  _vm.editItem(props.item.id)
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
                                  _vm.deleteItem(props.item.id)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWU/OTg2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlPzkxMzYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1maWxlcG9uZC9kaXN0L3Z1ZS1maWxlcG9uZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQtcGx1Z2luLWZpbGUtdmFsaWRhdGUtdHlwZS9kaXN0L2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXR5cGUuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5taW4uY3NzP2ZkMmMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGVwb25kL2Rpc3QvZmlsZXBvbmQubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcvZGlzdC9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5taW4uY3NzPzZlNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3L2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlP2JhMjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0Esa0VBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLDBEQUEyRCwyQkFBMkIsbUJBQW1CLDBCQUEwQiwwQkFBMEIsR0FBRyxnQkFBZ0IsMEtBQTBLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyx1UEFBdVAsbUJBQW1CLHNHQUFzRyxXQUFXLG9MQUFvTCxZQUFZLDRGQUE0RixnQkFBZ0IsaW9CQUFpb0IsWUFBWSx5RkFBeUYsZ0JBQWdCLDZjQUE2YyxpQkFBaUIsa01BQWtNLG9CQUFvQiwwZEFBMGQsc0NBQXNDLCtCQUErQixzQ0FBc0MsZzFDQUFnMUMscUJBQXFCLG9GQUFvRixZQUFZLGtoQkFBa2hCLHlCQUF5QixhQUFhLDZDQUE2QyxxSUFBcUksdUhBQXVILG9FQUFvRSx3RkFBd0YsdUdBQXVHLGtDQUFrQyxtRUFBbUUsNmpCQUE2akIsa0dBQWtHLGNBQWMsMkVBQTJFLGNBQWMsOEVBQThFLGNBQWMsK0VBQStFLGNBQWMsNERBQTRELG9CQUFvQixxQkFBcUIsdUJBQXVCLHlLQUF5SyxXQUFXLDBCQUEwQixpSkFBaUosVUFBVSxzQkFBc0IsNkJBQTZCLG1CQUFtQiw0Q0FBNEMsc0RBQXNELHlDQUF5QyxhQUFhLDhCQUE4QiwyREFBMkQsMkRBQTJELGlDQUFpQyxXQUFXLDZCQUE2QiwrQkFBK0IsOENBQThDLDZEQUE2RCxhQUFhLEVBQUUsaUNBQWlDLFdBQVcsNkJBQTZCLCtFQUErRSwwQ0FBMEMsNENBQTRDLGlFQUFpRSxlQUFlLEVBQUUsYUFBYSxFQUFFLDZCQUE2QixXQUFXLHlCQUF5QiwwQkFBMEIsdURBQXVELEVBQUUsMENBQTBDLFdBQVcsd0JBQXdCLDBDQUEwQyxXQUFXLCtCQUErQixxQ0FBcUMsdUNBQXVDLFdBQVcsOEJBQThCLDBEQUEwRCw4QkFBOEIsK0RBQStELDRCQUE0QixnRUFBZ0Usd0NBQXdDLHVDQUF1QyxhQUFhLFdBQVcsNEJBQTRCLGdFQUFnRSwrQkFBK0Isc0NBQXNDLGlDQUFpQyxxQ0FBcUMsV0FBVywyQkFBMkIsdUNBQXVDLHNDQUFzQyxXQUFXLG9CQUFvQixnQ0FBZ0MsOENBQThDLG9CQUFvQixrQ0FBa0MsV0FBVywwQkFBMEIsNktBQTZLLFVBQVUsT0FBTyx5REFBeUQsMkJBQTJCLG1CQUFtQiwwQkFBMEIsMEJBQTBCLEtBQUssdUNBQXVDOztBQUVqcVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNxR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O3dNQUdBOzs7dUJBRUE7OztnQkFFQTtBQUNBO2dCQUNBO3lCQUNBO3lCQUNBO0FBQ0E7b0JBQ0E7dUJBQ0E7QUFDQTtjQUNBO2dCQUNBO2NBQ0E7QUFDQTtvQkFDQTtvQkFDQTtxQkFDQTtBQUNBO3dCQUNBO3NCQUNBO0FBQ0E7O2NBRUE7ZUFDQTtrQkFFQTtBQUpBO2NBTUE7ZUFFQTtBQUhBO2NBS0E7ZUFFQTtBQUhBO2NBS0E7ZUFFQTtBQUhBLGlCQUlBO2VBSUE7O0FBMUNBOztBQTJDQTtvQ0FDQTtpQ0FDQSw0Q0FDQTtBQUNBOztXQUVBO2VBQ0E7ZUFHQTtBQUxBOztBQVFBO0FBRkE7O0FBR0E7QUFDQTtBQUNBO0FBRUE7OENBQ0E7aURBQ0E7aURBQ0E7c0JBQ0E7QUFDQTs0Q0FDQTtzQkFFQTs7MkNBQ0E7bURBQ0E7QUFFQTs7YUFDQTtBQUNBOztBQUNBOztzQkFDQTt3Q0FFQTs7dUNBQ0E7OENBQ0E7dURBQ0E7QUFDQTtBQUNBO2FBQ0E7QUFDQTtzQ0FDQTs7c0JBR0E7QUFGQTs4QkFHQTtBQUNBO29DQUNBOzhCQUNBO0FBQ0E7OENBQ0E7MEJBQ0E7NEJBQ0E7QUFDQTs4Q0FDQTttQ0FDQTtBQUNBOzhDQUNBO3dDQUNBO0FBQ0E7d0NBQ0E7a0JBQ0E7MEJBQ0E7a0NBQ0E7NEJBQ0E7QUFDQTtBQUNBOztBQUNBOzs7b0NBQ0E7O3NCQUNBOzBCQUNBO3NCQUNBOzBCQUNBO0FBQ0E7MENBQ0E7NEJBQ0E7MEJBQ0E7QUFDQTs0QkFDQTtvQkFDQTsrQ0FDQTswQkFDQTtBQUNBOztlQUVBO2FBQ0E7Y0FDQTtZQUdBO0FBTkE7QUFuSUEsRzs7Ozs7Ozs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRixhQUFhO0FBQ2hHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxJQUFJOztBQUVqQjtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7QUMxSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsZ0JBQWdCO0FBQy9EOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwwQ0FBMEM7QUFDMUMsMENBQTBDO0FBQzFDLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNkNBQTZDO0FBQzdDO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDZDQUE2QztBQUM3QztBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRixFQUFFLGVBQWUsc0JBQXNCO0FBQ3ZDLEVBQUUsZUFBZSxLQUFLLHNCQUFzQixFQUFFO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLDhDQUE4QztBQUN6RSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSw4QkFBOEIsb0JBQW9CO0FBQ2xELFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsdUNBQXVDLDRCQUE0QjtBQUNuRTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0MsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXOztBQUVYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0Qyx3QkFBd0IsMkJBQTJCO0FBQy9GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsMENBQTBDO0FBQzFDLGtDQUFrQztBQUNsQyxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTSxFQUFFLGtDQUFrQyxPQUFPLDZFQUE2RTtBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHdCQUF3Qix3QkFBd0I7QUFDaEQsbUJBQW1CLG1CQUFtQjtBQUN0QyxtQkFBbUIsbUJBQW1CO0FBQ3RDLGVBQWUsZUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxvREFBb0Q7QUFDcEQsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSw0REFBNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0Esb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWIscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLDJCQUEyQjtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsU0FBUztBQUNwRCxTQUFTOztBQUVUO0FBQ0EsNENBQTRDLFNBQVM7QUFDckQsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQSx3REFBd0QsVUFBVSxTQUFTO0FBQzNFLFNBQVM7O0FBRVQ7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQyxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGVBQWU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsaURBQWlELFNBQVM7QUFDMUQsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRCxXQUFXO0FBQ1g7QUFDQSxtREFBbUQsU0FBUztBQUM1RDs7QUFFQTtBQUNBLDhDQUE4QyxZQUFZO0FBQzFELFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pELFdBQVc7QUFDWCxvREFBb0QsU0FBUztBQUM3RDtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUEsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGVBQWU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxjQUFjO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQSxpREFBaUQsU0FBUzs7QUFFMUQsa0NBQWtDLGNBQWM7QUFDaEQsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsbUJBQW1CLDBDQUEwQztBQUM3RCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRCxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxxQkFBcUI7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7O0FBRXREO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrQkFBK0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsc0JBQXNCLGlCQUFpQixFQUFFO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0JBQStCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLGFBQWE7QUFDdkMsMEJBQTBCLGFBQWE7QUFDdkMsdUJBQXVCLGFBQWE7QUFDcEMsd0JBQXdCLGFBQWE7QUFDckMsZ0NBQWdDLGFBQWE7QUFDN0MsZ0NBQWdDLGFBQWE7QUFDN0MsaUNBQWlDLGFBQWE7QUFDOUMsNEJBQTRCLGFBQWE7QUFDekMsK0JBQStCLGFBQWE7QUFDNUMsa0NBQWtDLHlDQUF5QztBQUMzRSxXQUFXLDJDQUEyQztBQUN0RCxhQUFhO0FBQ2I7O0FBRUE7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQyx3QkFBd0IsYUFBYTtBQUNyQyxXQUFXLHNDQUFzQztBQUNqRCxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxnQ0FBZ0MsYUFBYTtBQUM3QywrQkFBK0IsYUFBYTtBQUM1QyxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDLGFBQWEsc0NBQXNDO0FBQ25ELGVBQWU7QUFDZixLQUFLO0FBQ0w7QUFDQSw0QkFBNEIsYUFBYTtBQUN6Qyw4QkFBOEIsYUFBYTtBQUMzQyxlQUFlO0FBQ2YsS0FBSztBQUNMO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekMseUJBQXlCLGFBQWE7QUFDdEMsYUFBYSxzQ0FBc0M7QUFDbkQsZUFBZTtBQUNmLEtBQUs7QUFDTDtBQUNBO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEMsYUFBYSxzQ0FBc0M7QUFDbkQsZUFBZTtBQUNmLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hELGFBQWEsYUFBYTtBQUMxQixlQUFlO0FBQ2YsS0FBSztBQUNMO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEMsa0NBQWtDLGFBQWE7QUFDL0MsZUFBZSxhQUFhO0FBQzVCLGFBQWE7QUFDYixLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsYUFBYTtBQUN0QywwQkFBMEIsYUFBYTtBQUN2QyxhQUFhLHNDQUFzQztBQUNuRCxlQUFlO0FBQ2YsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxrQkFBa0I7QUFDNUQsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0Esc0NBQXNDLGVBQWU7QUFDckQ7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxlQUFlO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxhQUFhO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSw2Q0FBNkM7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUyxhQUFhO0FBQ25FLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLGVBQWU7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw2Q0FBNkMsU0FBUyxhQUFhO0FBQ25FLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSCw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLGVBQWU7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxxQkFBcUI7QUFDeEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsNkNBQTZDOztBQUUxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDZDQUE2Qzs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrQkFBK0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLDZDQUE2Qzs7QUFFMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxtREFBbUQ7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyxvQ0FBb0M7QUFDcEMsa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLGtDQUFrQztBQUNsQyw0Q0FBNEM7QUFDNUMsa0NBQWtDO0FBQ2xDLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsaURBQWlELFVBQVUsbUJBQW1CO0FBQzlFOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsbUJBQW1CO0FBQzdEOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMscUJBQXFCO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyw2Q0FBNkM7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTOztBQUVULG1DQUFtQyxxQkFBcUI7O0FBRXhELHVDQUF1QyxxQkFBcUI7QUFDNUQ7O0FBRUE7QUFDQSx5Q0FBeUMscUJBQXFCO0FBQzlEOztBQUVBO0FBQ0EsbUNBQW1DLHFCQUFxQjtBQUN4RCxPQUFPOztBQUVQO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RDs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLDBCQUEwQjs7QUFFN0Q7QUFDQSw0QkFBNEIsb0JBQW9COztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVCx5QkFBeUIsRUFBRTtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFtQjtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsZUFBZTs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLElBQUk7O0FBRVg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSTtBQUMvQiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QsY0FBYztBQUM5RCxDQUFDOzs7Ozs7Ozs7QUM1aVFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGdFQUFnRTtBQUNoRSxnREFBZ0Q7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EseUNBQXlDLFFBQVE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsbUJBQW1CO0FBQ2pFO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsY0FBYztBQUM1QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0NBQWdDLHNCQUFzQjtBQUN0RCxlQUFlLEtBQUs7O0FBRXBCO0FBQ0EsNkNBQTZDLGVBQWU7O0FBRTVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixzQkFBc0I7QUFDbkQsOEJBQThCLHVCQUF1QjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLGtCQUFrQjtBQUMvQyw4QkFBOEIsbUJBQW1CO0FBQ2pELDJDQUEyQyxjQUFjLE1BQU07QUFDL0Q7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxLQUFLO0FBQ3REO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsY0FBYztBQUM1QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQ0FBbUM7QUFDM0QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0Esd0NBQXdDLElBQUksSUFBSSxrQkFBa0I7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQsV0FBVyxlQUFlO0FBQzFCLFdBQVcsc0NBQXNDO0FBQ2pELFdBQVcsS0FBSzs7QUFFaEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekMsV0FBVyxRQUFROztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsT0FBTztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1CQUFtQjtBQUM1QixTQUFTLG9CQUFvQjs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsdUJBQXVCO0FBQ2pELGFBQWEsS0FBSztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELEtBQUs7QUFDckQ7O0FBRUE7QUFDQSwyREFBMkQsS0FBSztBQUNoRTs7QUFFQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0EsMkNBQTJDLGVBQWU7O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDLG1CQUFtQjtBQUNqRTtBQUNBOztBQUVBOzs7Ozs7OztBQ3puQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDekJBO0FBQ0E7OztBQUdBO0FBQ0EsOExBQStMLGtCQUFrQixnQkFBZ0IsV0FBVyxVQUFVLFVBQVUsU0FBUywyQkFBMkIsNkJBQTZCLHFCQUFxQixtQkFBbUIsbUJBQW1CLGtCQUFrQixTQUFTLFVBQVUsU0FBUyxXQUFXLHVCQUF1QixVQUFVLFlBQVksZ0JBQWdCLGtCQUFrQixNQUFNLE9BQU8sUUFBUSxTQUFTLGdCQUFnQixXQUFXLG9CQUFvQixtQkFBbUIsMkJBQTJCLHFCQUFxQix1Q0FBdUMsK0JBQStCLE9BQU8sVUFBVSxXQUFXLGlCQUFpQixnQkFBZ0IsbUJBQW1CLGtCQUFrQiwyQ0FBMkMsa0JBQWtCLE1BQU0sOEJBQThCLHNCQUFzQixTQUFTLFVBQVUsZUFBZSxjQUFjLDRCQUE0QixjQUFjLGNBQWMsU0FBUyxlQUFlLGlCQUFpQixnQkFBZ0Isa0JBQWtCLGdCQUFnQix3QkFBd0IsMEJBQTBCLGlDQUFpQyx5QkFBeUIsc0NBQXNDLDhCQUE4QixlQUFlLDhCQUE4QixjQUFjLGNBQWMsZUFBZSxZQUFZLG9CQUFvQixvQkFBb0IsU0FBUyxVQUFVLFlBQVksV0FBVyxhQUFhLGtCQUFrQixnQ0FBZ0Msc0JBQXNCLDhCQUE4QixxQ0FBcUMsbUNBQW1DLGtDQUFrQyxXQUFXLFlBQVksd0VBQXdFLDJDQUEyQyxxQkFBcUIsZ0JBQWdCLG9CQUFvQixhQUFhLDBCQUEwQixzQkFBc0IscUJBQXFCLHVCQUF1QixXQUFXLE9BQU8sa0JBQWtCLFlBQVksOEJBQThCLG9CQUFvQix5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsdUJBQXVCLFNBQVMsK0NBQStDLGdCQUFnQixnQkFBZ0IsdUJBQXVCLGdCQUFnQixtQkFBbUIsV0FBVyw4Q0FBOEMsaUJBQWlCLFdBQVcsb0NBQW9DLG9EQUFvRCxhQUFhLHVCQUF1QixnQkFBZ0Isb0JBQW9CLGFBQWEsMEJBQTBCLHNCQUFzQixtQkFBbUIscUJBQXFCLG9CQUFvQixZQUFZLG9CQUFvQixjQUFjLFNBQVMsaUJBQWlCLGlCQUFpQiw4QkFBOEIsb0JBQW9CLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQix5QkFBeUIsU0FBUyxtQkFBbUIsbURBQW1ELGdCQUFnQixnQkFBZ0Isa0RBQWtELGlCQUFpQixXQUFXLG9DQUFvQyx3QkFBd0IsWUFBWSxTQUFTLFVBQVUsWUFBWSxZQUFZLCtCQUErQixrQkFBa0IsZ0JBQWdCLFdBQVcsVUFBVSxVQUFVLFNBQVMsMkJBQTJCLDZCQUE2QixxQkFBcUIsbUJBQW1CLGdCQUFnQixnQkFBZ0Isb0JBQW9CLGFBQWEsWUFBWSxxQkFBcUIsdUJBQXVCLGdCQUFnQixXQUFXLG1CQUFtQix1Q0FBdUMsaUJBQWlCLG9CQUFvQix5REFBeUQsb0JBQW9CLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQixVQUFVLHVHQUF1RyxrQkFBa0IsOENBQThDLGtCQUFrQixVQUFVLFlBQVksOENBQThDLGFBQWEsMElBQTBJLGNBQWMsMEtBQTBLLG9CQUFvQiw0RkFBNEYsNkNBQTZDLHFDQUFxQyxrSkFBa0osVUFBVSxnUkFBZ1IsV0FBVyw4TkFBOE4seUNBQXlDLGlDQUFpQyxtRUFBbUUsMENBQTBDLGtDQUFrQyx3QkFBd0IsR0FBRywrQkFBK0IsdUJBQXVCLEdBQUcsZ0NBQWdDLHlCQUF5QixnQkFBZ0IsR0FBRywrQkFBK0IsdUJBQXVCLEdBQUcsZ0NBQWdDLHlCQUF5Qix5QkFBeUIsUUFBUSx1Q0FBdUMsK0JBQStCLFFBQVEscUNBQXFDLDZCQUE2QixZQUFZLHFDQUFxQyw2QkFBNkIsUUFBUSxvQ0FBb0MsNkJBQTZCLGlCQUFpQixRQUFRLHVDQUF1QywrQkFBK0IsUUFBUSxxQ0FBcUMsNkJBQTZCLFlBQVkscUNBQXFDLDZCQUE2QixRQUFRLG9DQUFvQyw2QkFBNkIsd0JBQXdCLEdBQUcsVUFBVSw0QkFBNEIsb0JBQW9CLDJDQUEyQyxtQ0FBbUMsSUFBSSxVQUFVLDZCQUE2QixxQkFBcUIsOENBQThDLHNDQUFzQyxHQUFHLDJCQUEyQixtQkFBbUIsMkNBQTJDLG9DQUFvQyxnQkFBZ0IsR0FBRyxVQUFVLDRCQUE0QixvQkFBb0IsMkNBQTJDLG1DQUFtQyxJQUFJLFVBQVUsNkJBQTZCLHFCQUFxQiw4Q0FBOEMsc0NBQXNDLEdBQUcsMkJBQTJCLG1CQUFtQiwyQ0FBMkMsb0NBQW9DLGlEQUFpRCxvQkFBb0IsOEJBQThCLFlBQVksOEJBQThCLFlBQVksdUJBQXVCLFlBQVkscUJBQXFCLFlBQVksZ0JBQWdCLGtCQUFrQixNQUFNLE9BQU8sUUFBUSxVQUFVLGdCQUFnQiw4QkFBOEIsaUNBQWlDLFVBQVUseURBQXlELHFEQUFxRCx3Q0FBd0Msa0JBQWtCLFVBQVUsc0JBQXNCLHlCQUF5QixxRUFBcUUseUJBQXlCLGtIQUFrSCx5QkFBeUIsc0JBQXNCLG1CQUFtQixpQ0FBaUMseUJBQXlCLGtCQUFrQixNQUFNLE9BQU8sUUFBUSxTQUFTLHNCQUFzQiw4Q0FBOEMsa0JBQWtCLG1CQUFtQixpQ0FBaUMsOERBQThELFNBQVMsUUFBUSw0Q0FBNEMsdUJBQXVCLHFEQUFxRCxVQUFVLHVEQUF1RCxTQUFTLGtEQUFrRCxnQ0FBZ0Msc0JBQXNCLGlDQUFpQyw0QkFBNEIsZ0JBQWdCLGtCQUFrQixNQUFNLFNBQVMsVUFBVSxTQUFTLFVBQVUscUJBQXFCLHNCQUFzQixzQkFBc0IsbUJBQW1CLHlCQUF5QixpQkFBaUIsa0JBQWtCLE9BQU8sTUFBTSxRQUFRLFNBQVMsc0JBQXNCLG9CQUFvQixxQ0FBcUMsb0NBQW9DLDRCQUE0Qix1Q0FBdUMsc0JBQXNCLHNDQUFzQyxTQUFTLDBDQUEwQyxhQUFhLHFFQUFxRSxrQkFBa0IsT0FBTyxNQUFNLFFBQVEsU0FBUyxVQUFVLDZDQUE2QyxZQUFZLHFCQUFxQixzQ0FBc0MsdUNBQXVDLDZCQUE2QiwyQkFBMkIsYUFBYSxrQkFBa0IsV0FBVyxPQUFPLFFBQVEsWUFBWSx5QkFBeUIsZ0RBQWdELHNCQUFzQixtQ0FBbUMsMkJBQTJCLGtDQUFrQywwQkFBMEIsd0NBQXdDLGdDQUFnQyx3QkFBd0IsbUNBQW1DLG9DQUFvQywwQkFBMEIsK0JBQStCLGFBQWEsa0JBQWtCLFdBQVcsT0FBTyxRQUFRLFNBQVMseUJBQXlCLHdCQUF3Qix1QkFBdUIsMEJBQTBCLDZCQUE2QiwwQkFBMEIscUNBQXFDLGtCQUFrQiw4QkFBOEIsZ0JBQWdCLGFBQWEsY0FBYyxXQUFXLFNBQVMsb0JBQW9CLDhCQUE4QixrQ0FBa0MsV0FBVyxZQUFZLG1DQUFtQyxVQUFVLG9CQUFvQix5QkFBeUIsVUFBVSxzQkFBc0IsVUFBVSxnQkFBZ0IsVUFBVSxpQ0FBaUMsVUFBVSxtQkFBbUIsVUFBVSxnQkFBZ0Isc0JBQXNCLGtCQUFrQixrQkFBa0IsZ0JBQWdCLGVBQWUsbUJBQW1CLHdGQUF3RixnQkFBZ0IsZ0JBQWdCLGtDQUFrQyxjQUFjLDBCQUEwQixrQkFBa0Isa0JBQWtCLG1CQUFtQixvQkFBb0I7O0FBRTNwVzs7Ozs7Ozs7QUNQQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUN6QkE7QUFDQTs7O0FBR0E7QUFDQSw0TkFBNk4sVUFBVSxpQ0FBaUMsY0FBYyxrQkFBa0IsT0FBTyxNQUFNLFdBQVcsZ0JBQWdCLGdCQUFnQixTQUFTLFVBQVUsVUFBVSx3QkFBd0Isb0JBQW9CLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQixnR0FBZ0csc0JBQXNCLHNFQUFzRSxpQ0FBaUMsdUJBQXVCLGlDQUFpQyxvQkFBb0Isa0JBQWtCLE9BQU8sTUFBTSxRQUFRLFNBQVMsb0JBQW9CLGdCQUFnQiwyQkFBMkIseUJBQXlCLGtCQUFrQixVQUFVLGNBQWMsV0FBVyxZQUFZLG9CQUFvQix1Q0FBdUMsK0JBQStCLGdCQUFnQiw4QkFBOEIsNkJBQTZCLGtCQUFrQixnQkFBZ0IsY0FBYyxnQ0FBZ0Msa0JBQWtCLE9BQU8sTUFBTSxzQkFBc0I7O0FBRTF4Qzs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsb0JBQW9CLEVBQUU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUyxXQUFXLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2QkFBNkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOEJBQThCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLFdBQVcsRUFBRTtBQUMzQztBQUNBO0FBQ0EsZ0NBQWdDLHdCQUF3QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDZCQUE2QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw4QkFBOEI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsV0FBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsNENBQTRDLFNBQVMsZ0JBQWdCLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsV0FBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsNENBQTRDLFNBQVMsZ0JBQWdCLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsNkNBQTZDLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnQ0FBZ0M7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOENBQThDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsK0JBQStCLFNBQVMsV0FBVyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0JBQStCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBCQUEwQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMi5mNTBjMjc5NzkyYTAwMmY2YjZlNi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWVlNjczNWRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWVlNjczNWRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0xZWU2NzM1ZFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGFkbWluXFxcXGRlcGFydG1lbnRzXFxcXExpc3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFlZTY3MzVkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWVlNjczNWRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWVlNjczNWRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMDM3NzJmMThcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFlZTY3MzVkXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGlzdC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWVlNjczNWRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xZWU2NzM1ZFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbiNkZXBhcnRtZW50c1tkYXRhLXYtMWVlNjczNWRdIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcclxcblxcclxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvY3JtL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBc1FBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJMaXN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuPGRpdiBpZD1cXFwiZGVwYXJ0bWVudHNcXFwiPlxcclxcbiAgXFxyXFxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVxcXCJkZWxldGVXaW5kb3dcXFwiIG1heC13aWR0aD1cXFwiNTAwcHhcXFwiPlxcclxcbiAgICAgICAgPHYtY2FyZD5cXHJcXG4gICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGxpbmVcXFwiPnt7ICR0KCdhdHRlbnRpb24nKSB9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgICA8di1jYXJkLXRleHQ+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMj57e2RlbGV0ZU1zZ319PC92LWZsZXg+XFxyXFxuICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWJ0biB2LXNob3c9XFxcIiFkZWxldGVEZW5pZWRcXFwiIG91dGxpbmUgY29sb3I9XFxcImluZm9cXFwiIEBjbGljay5uYXRpdmU9XFxcImRlbGV0ZUNvbmZpcm1cXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImVycm9yXFxcIiBAY2xpY2submF0aXZlPVxcXCJkZWxldGVDYW5jZWxcXFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgIDwvdi1jYXJkPlxcclxcbiAgICA8L3YtZGlhbG9nPlxcclxcblxcclxcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwiZGVwYXJ0bWVudENyZWF0ZVxcXCIgbWF4LXdpZHRoPVxcXCI1MDBweFxcXCI+XFxyXFxuICAgICAgICA8di1jYXJkPlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkbGluZVxcXCI+0J3QvtCy0L7QtSDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgICA8di1jYXJkLXRleHQ+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XFxcItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtVxcXCIgdi1tb2RlbD1cXFwiZGVwYXJ0bWVudE5hbWVcXFwiPjwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cXHJcXG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImluZm9cXFwiIEBjbGljay5uYXRpdmU9XFxcImFkZENvbmZpcm1cXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImVycm9yXFxcIiBAY2xpY2submF0aXZlPVxcXCJhZGRDYW5jZWxcXFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgIDwvdi1jYXJkPlxcclxcbiAgICA8L3YtZGlhbG9nPlxcclxcblxcclxcbiAgICA8di1jYXJkPlxcclxcbiAgICAgICAgPHYtZGF0YS10YWJsZVxcclxcbiAgICAgICAgICAgIDpoZWFkZXJzPVxcXCJoZWFkZXJzXFxcIlxcclxcbiAgICAgICAgICAgIDppdGVtcz1cXFwiaXRlbXNcXFwiXFxyXFxuICAgICAgICAgICAgaXRlbS1rZXk9XFxcImlkXFxcIlxcclxcbiAgICAgICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XFxcIiR0KCdub19tYXRjaF9mb3VuZCcpXFxcIlxcclxcbiAgICAgICAgICAgIDpyb3dzLXBlci1wYWdlLXRleHQ9XFxcIiR0KCdzdHJpbmdzJylcXFwiXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImVsZXZhdGlvbi0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiaXRlbXNcXFwiIHNsb3Qtc2NvcGU9XFxcInByb3BzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0uaWQgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8di1lZGl0LWRpYWxvZ1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpyZXR1cm4tdmFsdWUuc3luYz1cXFwicHJvcHMuaXRlbS50aXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXp5XFxyXFxuICAgICAgICAgICAgICAgICAgICA+IHt7IHByb3BzLml0ZW0udGl0bGUgfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q9XFxcImlucHV0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwiRWRpdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicHJvcHMuaXRlbS50aXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlLWxpbmVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlclxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVxcXCJlZGl0SXRlbShwcm9wcy5pdGVtKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3YtZWRpdC1kaWFsb2c+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57eyBnZXRQb3NpdGlvbnMocHJvcHMuaXRlbS5pZCkubGVuZ3RoIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7IGdldEVtcGxveWVlcyhwcm9wcy5pdGVtLmlkKS5sZW5ndGggfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgPHYtYnRuIGljb24gY2xhc3M9XFxcIm14LTBcXFwiIEBjbGljaz1cXFwiZWRpdEl0ZW0ocHJvcHMuaXRlbS5pZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cXFwidGVhbFxcXCI+ZWRpdDwvdi1pY29uPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICAgICAgICAgICAgPHYtYnRuIGljb24gY2xhc3M9XFxcIm14LTBcXFwiIEBjbGljaz1cXFwiZGVsZXRlSXRlbShwcm9wcy5pdGVtLmlkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVxcXCJwaW5rXFxcIj5kZWxldGU8L3YtaWNvbj5cXHJcXG4gICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcIm5vLWRhdGFcXFwiPlxcclxcbiAgICAgICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVxcXCJ0cnVlXFxcIiBjb2xvcj1cXFwicmVkXFxcIiBpY29uPVxcXCJ3YXJuaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgINCd0LXRgiDQtNCw0L3QvdGL0YUgOihcXHJcXG4gICAgICAgICAgICAgICAgPC92LWFsZXJ0PlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8L3YtZGF0YS10YWJsZT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlX19idXR0b25zXFxcIj5cXHJcXG4gICAgICAgICAgICA8di1idG4gZmFiIGRhcmsgbGFyZ2UgY29sb3I9XFxcImN5YW5cXFwiIEBjbGljaz1cXFwiZGVwYXJ0bWVudENyZWF0ZSA9IHRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8di1pY29uIGRhcms+YWRkPC92LWljb24+XFxyXFxuICAgICAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgICAgICA8dHJhbnNpdGlvbiBlbnRlci1hY3RpdmUtY2xhc3M9XFxcImJ1dHRvbkVudGVyXFxcIiBsZWF2ZS1hY3RpdmUtY2xhc3M9XFxcImJ1dHRvbkxlYXZlXFxcIiBtb2RlPVxcXCJvdXQtaW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8di1idG4gdi1zaG93PVxcXCJzZWxlY3RlZC5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwiZGVsZXRlLWJ0blxcXCIgZmFiIGxhcmdlIGRhcmsgQGNsaWNrPVxcXCJkZWxldGVEaWFsb2coc2VsZWN0ZWQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LWljb24+ZGVsZXRlPC92LWljb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8di1zbmFja2JhciA6dGltZW91dD1cXFwic25hY2tiYXJUaW1lb3V0XFxcIiB0b3Agdi1tb2RlbD1cXFwic25hY2tiYXJTaG93XFxcIiBtdWx0aS1saW5lIGNvbG9yPVxcXCJpbmZvXFxcIj5cXHJcXG4gICAgICAgICAgICB7eyAkdCgnZGVsZXRlX2RvbmUnKSB9fVxcclxcbiAgICAgICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVxcXCJwaW5rXFxcIiBAY2xpY2submF0aXZlPVxcXCJzbmFja2JhclNob3cgPSBmYWxzZVxcXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxcclxcbiAgICAgICAgPC92LXNuYWNrYmFyPlxcclxcbiAgICA8L3YtY2FyZD5cXHJcXG48L2Rpdj5cXHJcXG48IS0tXFxyXFxuPGZpbGUtcG9uZFxcclxcbiAgICAgICAgbmFtZT1cXFwidGVzdFxcXCJcXHJcXG4gICAgICAgIHJlZj1cXFwicG9uZFxcXCJcXHJcXG4gICAgICAgIGNsYXNzLW5hbWU9XFxcIm15LXBvbmRcXFwiXFxyXFxuICAgICAgICBsYWJlbC1pZGxlPVxcXCLQn9C10YDQtdC60LjQvdGM0YLQtSDRhNCw0LnQu9GLINGB0Y7QtNCwXFxcIlxcclxcbiAgICAgICAgbGFiZWxGaWxlVHlwZU5vdEFsbG93ZWQ9XFxcItCU0LDQvdC90YvQuSDRhNC+0YDQvNCw0YIg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YLRgdGPXFxcIlxcclxcbiAgICAgICAgYWxsb3ctbXVsdGlwbGU9XFxcInRydWVcXFwiXFxyXFxuICAgICAgICBhY2NlcHRlZC1maWxlLXR5cGVzPVxcXCJpbWFnZS9qcGVnLCBpbWFnZS9wbmcsIGFwcGxpY2F0aW9uL21zd29yZFxcXCJcXHJcXG4gICAgICAgIHYtYmluZDpmaWxlcz1cXFwibXlGaWxlc1xcXCJcXHJcXG4gICAgICAgIHYtb246aW5pdD1cXFwiaGFuZGxlRmlsZVBvbmRJbml0XFxcIi8+XFxyXFxuLS0+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xcclxcbiAgaW1wb3J0IHZ1ZUZpbGVQb25kIGZyb20gJ3Z1ZS1maWxlcG9uZCc7XFxyXFxuICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5GaWxlVmFsaWRhdGVUeXBlIGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXR5cGUvZGlzdC9maWxlcG9uZC1wbHVnaW4tZmlsZS12YWxpZGF0ZS10eXBlLmVzbS5qcyc7XFxyXFxuICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcvZGlzdC9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5lc20uanMnO1xcclxcbiAgLy8gSW1wb3J0IHN0eWxlc1xcclxcbiAgaW1wb3J0ICdmaWxlcG9uZC9kaXN0L2ZpbGVwb25kLm1pbi5jc3MnO1xcclxcbiAgaW1wb3J0ICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3Lm1pbi5jc3MnO1xcclxcbiAgXFxyXFxuICBjb25zdCBGaWxlUG9uZCA9IHZ1ZUZpbGVQb25kKCBGaWxlUG9uZFBsdWdpbkZpbGVWYWxpZGF0ZVR5cGUsIEZpbGVQb25kUGx1Z2luSW1hZ2VQcmV2aWV3ICk7XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICBtaWRkbGV3YXJlOiBbJ2F1dGgnLCAnb3JnYW5pc2F0aW9uJ10sXFxyXFxuICAgIGRhdGE6ICgpID0+ICh7XFxyXFxuICAgICAgIG15RmlsZXM6IFsnaW5kZXguaHRtbCddLFxcclxcbiAgICAgIC8v0J/QvtC00YDQvtCx0L3QvtGB0YLQuFxcclxcbiAgICAgIHNob3dJbmZvOiBmYWxzZSxcXHJcXG4gICAgICBzZWxlY3RlZEVtcGxveWVlczogW10sXFxyXFxuICAgICAgc2VsZWN0ZWRQb3NpdGlvbnM6IFtdLFxcclxcbiAgICAgIC8vINCS0YHQv9C70YvQstCw0YjQutC4XFxyXFxuICAgICAgc25hY2tiYXJTaG93OiBmYWxzZSxcXHJcXG4gICAgICBzbmFja2JhclRpbWVvdXQ6IDEwMDAwLFxcclxcbiAgICAgIC8vINCf0L7QuNGB0LogLyDQktGL0LHQvtGA0LrQsFxcclxcbiAgICAgIHNlYXJjaDogJycsXFxyXFxuICAgICAgc2VsZWN0ZWQ6IFtdLFxcclxcbiAgICAgIGRpYWxvZzogZmFsc2UsXFxyXFxuICAgICAgLy8g0KPQtNCw0LvQtdC90LjQtVxcclxcbiAgICAgIGRlbGV0ZVdpbmRvdzogZmFsc2UsXFxyXFxuICAgICAgZGVsZXRlRGVuaWVkOiBmYWxzZSxcXHJcXG4gICAgICBkZWxFcnJNZXNzYWdlOiBbXSxcXHJcXG4gICAgICAvL9Ch0L7Qt9C00LDQvdC40LVcXHJcXG4gICAgICBkZXBhcnRtZW50Q3JlYXRlOiBmYWxzZSxcXHJcXG4gICAgICBkZXBhcnRtZW50TmFtZTogJycsXFxyXFxuICAgICAgLy8g0JfQsNCz0L7Qu9C+0LLQutC4INGC0LDQsdC70LjRhtGLXFxyXFxuICAgICAgaGVhZGVyczogW3tcXHJcXG4gICAgICAgICAgdGV4dDogJ9Cd0L7QvNC10YAnLFxcclxcbiAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxcclxcbiAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB7XFxyXFxuICAgICAgICAgIHRleHQ6ICfQndCw0LjQvNC10L3QvtCy0LDQvdC40LUnLFxcclxcbiAgICAgICAgICB2YWx1ZTogJ25hbWUnXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAge1xcclxcbiAgICAgICAgICB0ZXh0OiAn0JTQvtC70LbQvdC+0YHRgtC10LknLFxcclxcbiAgICAgICAgICB2YWx1ZTogJ3Bvc2l0aW9ucydcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB7XFxyXFxuICAgICAgICAgIHRleHQ6ICfQodC+0YLRgNGD0LTQvdC40LrQvtCyJyxcXHJcXG4gICAgICAgICAgdmFsdWU6ICdlbXBsb3llZXMnXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgeyB0ZXh0OiAn0JTQtdC50YHRgtCy0LjRjycsXFxyXFxuICAgICAgICAgIHZhbHVlOiAnYWN0aW9uJ1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIF1cXHJcXG4gICAgfSksXFxyXFxuICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgZGVsZXRlTXNnKCkge1xcclxcbiAgICAgICAgcmV0dXJuICh0aGlzLmRlbGV0ZURlbmllZCkgPyAn0JfQsCDQtNCw0L3QvdGL0Lwg0L7RgtC70LXQu9C+0Lwg0LfQsNC60YDQtdC/0LvQtdC90Ysg0YHQvtGC0YDRg9C00L3QuNC60LgnIDpcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRgNCw0YHRhNC+0YDQvNC40YDQvtCy0LDRgtGMINC00LDQvdC90YvQuSDQvtGC0LTQtdC7Pyc7XFxyXFxuICAgICAgfSxcXHJcXG4gICAgICAuLi5tYXBHZXR0ZXJzKHtcXHJcXG4gICAgICAgIGl0ZW1zOiAnZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMnLFxcclxcbiAgICAgICAgcG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXFxyXFxuICAgICAgICBlbXBsb3llZXM6ICdlbXBsb3llZXMvZW1wbG95ZWVzJ1xcclxcbiAgICAgIH0pXFxyXFxuICAgIH0sXFxyXFxuICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICAgIEZpbGVQb25kXFxyXFxuICAgIH0sXFxyXFxuICAgIG1ldGhvZHM6IHtcXHJcXG4vLyAgICAgIGhhbmRsZUZpbGVQb25kSW5pdDogZnVuY3Rpb24oKSB7XFxyXFxuLy8gICAgICAgIGNvbnNvbGUubG9nKCdGaWxlUG9uZCBoYXMgaW5pdGlhbGl6ZWQnKTtcXHJcXG4vLyAgICAgICAgdGhpcy4kcmVmcy5wb25kLmdldEZpbGVzKCk7XFxyXFxuLy8gICAgICB9LFxcclxcbiAgICAgIG9wZW5JbmZvUGFuZWwoaWQpIHtcXHJcXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQb3NpdGlvbnMgPSB0aGlzLmdldFBvc2l0aW9ucyhpZCk7XFxyXFxuICAgICAgICB0aGlzLnNlbGVjdGVkRW1wbG95ZWVzID0gdGhpcy5nZXRFbXBsb3llZXMoaWQpO1xcclxcbiAgICAgICAgdGhpcy5zaG93SW5mbyA9IHRydWU7XFxyXFxuICAgICAgfSxcXHJcXG4gICAgICBnZXRQb3NpdGlvbnMoaWQpIHtcXHJcXG4gICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXTtcXHJcXG5cXHJcXG4gICAgICAgIHRoaXMucG9zaXRpb25zLmZvckVhY2goZWwgPT4ge1xcclxcbiAgICAgICAgICBpZiAoZWwuZGVwYXJ0bWVudF9pZCA9PSBpZCkgcG9zaXRpb25zLnB1c2goZWwpO1xcclxcbiAgICAgICAgfSk7XFxyXFxuXFxyXFxuICAgICAgICByZXR1cm4gcG9zaXRpb25zO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZ2V0RW1wbG95ZWVzKGlkKSB7XFxyXFxuICAgICAgICBsZXQgZW1wbG95ZWVzID0gW10sXFxyXFxuICAgICAgICAgIHBvc2l0aW9ucyA9IHRoaXMuZ2V0UG9zaXRpb25zKGlkKTtcXHJcXG5cXHJcXG4gICAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKHBvcyA9PiB7XFxyXFxuICAgICAgICAgIHRoaXMuZW1wbG95ZWVzLmZvckVhY2goZWwgPT4ge1xcclxcbiAgICAgICAgICAgIGlmIChlbC5wb3NpdGlvbl9pZCA9PSBwb3MuaWQpIGVtcGxveWVlcy5wdXNoKGVsKTtcXHJcXG4gICAgICAgICAgfSk7XFxyXFxuICAgICAgICB9KTtcXHJcXG4gICAgICAgIHJldHVybiBlbXBsb3llZXM7XFxyXFxuICAgICAgfSxcXHJcXG4gICAgICBhZGRDb25maXJtKCkge1xcclxcbiAgICAgICAgdGhpcy5hZGRJdGVtKHtcXHJcXG4gICAgICAgICAgJ3RpdGxlJzogdGhpcy5kZXBhcnRtZW50TmFtZVxcclxcbiAgICAgICAgfSk7XFxyXFxuICAgICAgICB0aGlzLmRlcGFydG1lbnRDcmVhdGUgPSBmYWxzZTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGFkZENhbmNlbCgpIHtcXHJcXG4gICAgICAgIHRoaXMuZGVwYXJ0bWVudENyZWF0ZSA9IGZhbHNlO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVsZXRlRGlhbG9nKGl0ZW0pIHtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gdHJ1ZTtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBpdGVtO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgX2hhc0VtcGxveWVlcyhpZCkge1xcclxcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1wbG95ZWVzKGlkKS5sZW5ndGhcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIF9oYXNQb3NpdGlvbnMoaWQpIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2l0aW9ucyhpdGVtLmlkKS5sZW5ndGhcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGRlbGV0ZUl0ZW0gKGlkKSB7XFxyXFxuICAgICAgICBjb25zb2xlLmxvZyhpZClcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gdHJ1ZTtcXHJcXG4gICAgICAgIGlmKHRoaXMuX2hhc0VtcGxveWVlcyhpZCkpIHtcXHJcXG4gICAgICAgICAgdGhpcy5kZWxldGVEZW5pZWQgPSB0cnVlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVsZXRlQ29uZmlybSgpIHtcXHJcXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuZm9yRWFjaChlbCA9PiB0aGlzLmRlbGV0ZUl0ZW0oZWwuaWQpKTtcXHJcXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XFxyXFxuICAgICAgICB0aGlzLmVkaXRlZElEID0gbnVsbDtcXHJcXG4gICAgICAgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGRlbGV0ZUNhbmNlbCgpIHtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBudWxsO1xcclxcbiAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGNsb3NlKCkge1xcclxcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcXHJcXG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xcclxcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgLi4ubWFwQWN0aW9ucyh7XFxyXFxuICAgICAgICBsb2FkSXRlbXM6ICdkZXBhcnRtZW50cy9sb2FkJyxcXHJcXG4gICAgICAgIGFkZEl0ZW06ICdkZXBhcnRtZW50cy9hZGQnLFxcclxcbiAgICAgICAgZWRpdEl0ZW06ICdkZXBhcnRtZW50cy9lZGl0JyxcXHJcXG4gICAgICAgIHJlbW92ZTogJ2RlcGFydG1lbnRzL3JlbW92ZSdcXHJcXG4gICAgICB9KVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4jZGVwYXJ0bWVudHMge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMWVlNjczNWRcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjx0ZW1wbGF0ZT5cclxuPGRpdiBpZD1cImRlcGFydG1lbnRzXCI+XHJcbiAgXHJcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRlbGV0ZVdpbmRvd1wiIG1heC13aWR0aD1cIjUwMHB4XCI+XHJcbiAgICAgICAgPHYtY2FyZD5cclxuICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj57eyAkdCgnYXR0ZW50aW9uJykgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICA8di1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTI+e3tkZWxldGVNc2d9fTwvdi1mbGV4PlxyXG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8di1idG4gdi1zaG93PVwiIWRlbGV0ZURlbmllZFwiIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgQGNsaWNrLm5hdGl2ZT1cImRlbGV0ZUNvbmZpcm1cIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XHJcbiAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cImVycm9yXCIgQGNsaWNrLm5hdGl2ZT1cImRlbGV0ZUNhbmNlbFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XHJcbiAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgPC92LWNhcmQ+XHJcbiAgICA8L3YtZGlhbG9nPlxyXG5cclxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGVwYXJ0bWVudENyZWF0ZVwiIG1heC13aWR0aD1cIjUwMHB4XCI+XHJcbiAgICAgICAgPHYtY2FyZD5cclxuICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj7QndC+0LLQvtC1INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgPHYtZmxleCB4czEyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcIiB2LW1vZGVsPVwiZGVwYXJ0bWVudE5hbWVcIj48L3YtdGV4dC1maWVsZD5cclxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxyXG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cImluZm9cIiBAY2xpY2submF0aXZlPVwiYWRkQ29uZmlybVwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cclxuICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiZXJyb3JcIiBAY2xpY2submF0aXZlPVwiYWRkQ2FuY2VsXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj5cclxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICA8L3YtY2FyZD5cclxuICAgIDwvdi1kaWFsb2c+XHJcblxyXG4gICAgPHYtY2FyZD5cclxuICAgICAgICA8di1kYXRhLXRhYmxlXHJcbiAgICAgICAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXHJcbiAgICAgICAgICAgIDppdGVtcz1cIml0ZW1zXCJcclxuICAgICAgICAgICAgaXRlbS1rZXk9XCJpZFwiXHJcbiAgICAgICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XCIkdCgnbm9fbWF0Y2hfZm91bmQnKVwiXHJcbiAgICAgICAgICAgIDpyb3dzLXBlci1wYWdlLXRleHQ9XCIkdCgnc3RyaW5ncycpXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJlbGV2YXRpb24tMVwiPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1zXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtZWRpdC1kaWFsb2dcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnJldHVybi12YWx1ZS5zeW5jPVwicHJvcHMuaXRlbS50aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhenlcclxuICAgICAgICAgICAgICAgICAgICA+IHt7IHByb3BzLml0ZW0udGl0bGUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvcHMuaXRlbS50aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGUtbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cImVkaXRJdGVtKHByb3BzLml0ZW0pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdi1lZGl0LWRpYWxvZz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3sgZ2V0UG9zaXRpb25zKHByb3BzLml0ZW0uaWQpLmxlbmd0aCB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3sgZ2V0RW1wbG95ZWVzKHByb3BzLml0ZW0uaWQpLmxlbmd0aCB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIGNsYXNzPVwibXgtMFwiIEBjbGljaz1cImVkaXRJdGVtKHByb3BzLml0ZW0uaWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInRlYWxcIj5lZGl0PC92LWljb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIGNsYXNzPVwibXgtMFwiIEBjbGljaz1cImRlbGV0ZUl0ZW0ocHJvcHMuaXRlbS5pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwicGlua1wiPmRlbGV0ZTwvdi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJuby1kYXRhXCI+XHJcbiAgICAgICAgICAgICAgPHYtYWxlcnQgOnZhbHVlPVwidHJ1ZVwiIGNvbG9yPVwicmVkXCIgaWNvbj1cIndhcm5pbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICDQndC10YIg0LTQsNC90L3Ri9GFIDooXHJcbiAgICAgICAgICAgICAgICA8L3YtYWxlcnQ+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC92LWRhdGEtdGFibGU+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgIDx2LWJ0biBmYWIgZGFyayBsYXJnZSBjb2xvcj1cImN5YW5cIiBAY2xpY2s9XCJkZXBhcnRtZW50Q3JlYXRlID0gdHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHYtaWNvbiBkYXJrPmFkZDwvdi1pY29uPlxyXG4gICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICA8dHJhbnNpdGlvbiBlbnRlci1hY3RpdmUtY2xhc3M9XCJidXR0b25FbnRlclwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cImJ1dHRvbkxlYXZlXCIgbW9kZT1cIm91dC1pblwiPlxyXG4gICAgICAgICAgICAgICAgPHYtYnRuIHYtc2hvdz1cInNlbGVjdGVkLmxlbmd0aCA+IDBcIiBjbGFzcz1cImRlbGV0ZS1idG5cIiBmYWIgbGFyZ2UgZGFyayBAY2xpY2s9XCJkZWxldGVEaWFsb2coc2VsZWN0ZWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5kZWxldGU8L3YtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8di1zbmFja2JhciA6dGltZW91dD1cInNuYWNrYmFyVGltZW91dFwiIHRvcCB2LW1vZGVsPVwic25hY2tiYXJTaG93XCIgbXVsdGktbGluZSBjb2xvcj1cImluZm9cIj5cclxuICAgICAgICAgICAge3sgJHQoJ2RlbGV0ZV9kb25lJykgfX1cclxuICAgICAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XCJwaW5rXCIgQGNsaWNrLm5hdGl2ZT1cInNuYWNrYmFyU2hvdyA9IGZhbHNlXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG4gICAgICAgIDwvdi1zbmFja2Jhcj5cclxuICAgIDwvdi1jYXJkPlxyXG48L2Rpdj5cclxuPCEtLVxyXG48ZmlsZS1wb25kXHJcbiAgICAgICAgbmFtZT1cInRlc3RcIlxyXG4gICAgICAgIHJlZj1cInBvbmRcIlxyXG4gICAgICAgIGNsYXNzLW5hbWU9XCJteS1wb25kXCJcclxuICAgICAgICBsYWJlbC1pZGxlPVwi0J/QtdGA0LXQutC40L3RjNGC0LUg0YTQsNC50LvRiyDRgdGO0LTQsFwiXHJcbiAgICAgICAgbGFiZWxGaWxlVHlwZU5vdEFsbG93ZWQ9XCLQlNCw0L3QvdGL0Lkg0YTQvtGA0LzQsNGCINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRj1wiXHJcbiAgICAgICAgYWxsb3ctbXVsdGlwbGU9XCJ0cnVlXCJcclxuICAgICAgICBhY2NlcHRlZC1maWxlLXR5cGVzPVwiaW1hZ2UvanBlZywgaW1hZ2UvcG5nLCBhcHBsaWNhdGlvbi9tc3dvcmRcIlxyXG4gICAgICAgIHYtYmluZDpmaWxlcz1cIm15RmlsZXNcIlxyXG4gICAgICAgIHYtb246aW5pdD1cImhhbmRsZUZpbGVQb25kSW5pdFwiLz5cclxuLS0+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcclxuICBpbXBvcnQgdnVlRmlsZVBvbmQgZnJvbSAndnVlLWZpbGVwb25kJztcclxuICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5GaWxlVmFsaWRhdGVUeXBlIGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXR5cGUvZGlzdC9maWxlcG9uZC1wbHVnaW4tZmlsZS12YWxpZGF0ZS10eXBlLmVzbS5qcyc7XHJcbiAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VQcmV2aWV3IGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3L2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcuZXNtLmpzJztcclxuICAvLyBJbXBvcnQgc3R5bGVzXHJcbiAgaW1wb3J0ICdmaWxlcG9uZC9kaXN0L2ZpbGVwb25kLm1pbi5jc3MnO1xyXG4gIGltcG9ydCAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcvZGlzdC9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5taW4uY3NzJztcclxuICBcclxuICBjb25zdCBGaWxlUG9uZCA9IHZ1ZUZpbGVQb25kKCBGaWxlUG9uZFBsdWdpbkZpbGVWYWxpZGF0ZVR5cGUsIEZpbGVQb25kUGx1Z2luSW1hZ2VQcmV2aWV3ICk7XHJcbiAgXHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbWlkZGxld2FyZTogWydhdXRoJywgJ29yZ2FuaXNhdGlvbiddLFxyXG4gICAgZGF0YTogKCkgPT4gKHtcclxuICAgICAgIG15RmlsZXM6IFsnaW5kZXguaHRtbCddLFxyXG4gICAgICAvL9Cf0L7QtNGA0L7QsdC90L7RgdGC0LhcclxuICAgICAgc2hvd0luZm86IGZhbHNlLFxyXG4gICAgICBzZWxlY3RlZEVtcGxveWVlczogW10sXHJcbiAgICAgIHNlbGVjdGVkUG9zaXRpb25zOiBbXSxcclxuICAgICAgLy8g0JLRgdC/0LvRi9Cy0LDRiNC60LhcclxuICAgICAgc25hY2tiYXJTaG93OiBmYWxzZSxcclxuICAgICAgc25hY2tiYXJUaW1lb3V0OiAxMDAwMCxcclxuICAgICAgLy8g0J/QvtC40YHQuiAvINCS0YvQsdC+0YDQutCwXHJcbiAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgIHNlbGVjdGVkOiBbXSxcclxuICAgICAgZGlhbG9nOiBmYWxzZSxcclxuICAgICAgLy8g0KPQtNCw0LvQtdC90LjQtVxyXG4gICAgICBkZWxldGVXaW5kb3c6IGZhbHNlLFxyXG4gICAgICBkZWxldGVEZW5pZWQ6IGZhbHNlLFxyXG4gICAgICBkZWxFcnJNZXNzYWdlOiBbXSxcclxuICAgICAgLy/QodC+0LfQtNCw0L3QuNC1XHJcbiAgICAgIGRlcGFydG1lbnRDcmVhdGU6IGZhbHNlLFxyXG4gICAgICBkZXBhcnRtZW50TmFtZTogJycsXHJcbiAgICAgIC8vINCX0LDQs9C+0LvQvtCy0LrQuCDRgtCw0LHQu9C40YbRi1xyXG4gICAgICBoZWFkZXJzOiBbe1xyXG4gICAgICAgICAgdGV4dDogJ9Cd0L7QvNC10YAnLFxyXG4gICAgICAgICAgYWxpZ246ICdsZWZ0JyxcclxuICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtScsXHJcbiAgICAgICAgICB2YWx1ZTogJ25hbWUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0JTQvtC70LbQvdC+0YHRgtC10LknLFxyXG4gICAgICAgICAgdmFsdWU6ICdwb3NpdGlvbnMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0KHQvtGC0YDRg9C00L3QuNC60L7QsicsXHJcbiAgICAgICAgICB2YWx1ZTogJ2VtcGxveWVlcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgdGV4dDogJ9CU0LXQudGB0YLQstC40Y8nLFxyXG4gICAgICAgICAgdmFsdWU6ICdhY3Rpb24nXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIGRlbGV0ZU1zZygpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuZGVsZXRlRGVuaWVkKSA/ICfQl9CwINC00LDQvdC90YvQvCDQvtGC0LvQtdC70L7QvCDQt9Cw0LrRgNC10L/Qu9C10L3RiyDRgdC+0YLRgNGD0LTQvdC40LrQuCcgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRgNCw0YHRhNC+0YDQvNC40YDQvtCy0LDRgtGMINC00LDQvdC90YvQuSDQvtGC0LTQtdC7Pyc7XHJcbiAgICAgIH0sXHJcbiAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICAgIGl0ZW1zOiAnZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMnLFxyXG4gICAgICAgIHBvc2l0aW9uczogJ3Bvc2l0aW9ucy9wb3NpdGlvbnMnLFxyXG4gICAgICAgIGVtcGxveWVlczogJ2VtcGxveWVlcy9lbXBsb3llZXMnXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIEZpbGVQb25kXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4vLyAgICAgIGhhbmRsZUZpbGVQb25kSW5pdDogZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZygnRmlsZVBvbmQgaGFzIGluaXRpYWxpemVkJyk7XHJcbi8vICAgICAgICB0aGlzLiRyZWZzLnBvbmQuZ2V0RmlsZXMoKTtcclxuLy8gICAgICB9LFxyXG4gICAgICBvcGVuSW5mb1BhbmVsKGlkKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFBvc2l0aW9ucyA9IHRoaXMuZ2V0UG9zaXRpb25zKGlkKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRW1wbG95ZWVzID0gdGhpcy5nZXRFbXBsb3llZXMoaWQpO1xyXG4gICAgICAgIHRoaXMuc2hvd0luZm8gPSB0cnVlO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXRQb3NpdGlvbnMoaWQpIHtcclxuICAgICAgICBsZXQgcG9zaXRpb25zID0gW107XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgaWYgKGVsLmRlcGFydG1lbnRfaWQgPT0gaWQpIHBvc2l0aW9ucy5wdXNoKGVsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9ucztcclxuICAgICAgfSxcclxuICAgICAgZ2V0RW1wbG95ZWVzKGlkKSB7XHJcbiAgICAgICAgbGV0IGVtcGxveWVlcyA9IFtdLFxyXG4gICAgICAgICAgcG9zaXRpb25zID0gdGhpcy5nZXRQb3NpdGlvbnMoaWQpO1xyXG5cclxuICAgICAgICBwb3NpdGlvbnMuZm9yRWFjaChwb3MgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lbXBsb3llZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbC5wb3NpdGlvbl9pZCA9PSBwb3MuaWQpIGVtcGxveWVlcy5wdXNoKGVsKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBlbXBsb3llZXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZENvbmZpcm0oKSB7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKHtcclxuICAgICAgICAgICd0aXRsZSc6IHRoaXMuZGVwYXJ0bWVudE5hbWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRlcGFydG1lbnRDcmVhdGUgPSBmYWxzZTtcclxuICAgICAgfSxcclxuICAgICAgYWRkQ2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMuZGVwYXJ0bWVudENyZWF0ZSA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICBkZWxldGVEaWFsb2coaXRlbSkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gaXRlbTtcclxuICAgICAgfSxcclxuICAgICAgX2hhc0VtcGxveWVlcyhpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVtcGxveWVlcyhpZCkubGVuZ3RoXHJcbiAgICAgIH0sXHJcbiAgICAgIF9oYXNQb3NpdGlvbnMoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb3NpdGlvbnMoaXRlbS5pZCkubGVuZ3RoXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZUl0ZW0gKGlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMuX2hhc0VtcGxveWVlcyhpZCkpIHtcclxuICAgICAgICAgIHRoaXMuZGVsZXRlRGVuaWVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZUNvbmZpcm0oKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5mb3JFYWNoKGVsID0+IHRoaXMuZGVsZXRlSXRlbShlbC5pZCkpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZWRpdGVkSUQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc25hY2tiYXJTaG93ID0gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlQ2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSk7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xyXG4gICAgICB9LFxyXG4gICAgICAuLi5tYXBBY3Rpb25zKHtcclxuICAgICAgICBsb2FkSXRlbXM6ICdkZXBhcnRtZW50cy9sb2FkJyxcclxuICAgICAgICBhZGRJdGVtOiAnZGVwYXJ0bWVudHMvYWRkJyxcclxuICAgICAgICBlZGl0SXRlbTogJ2RlcGFydG1lbnRzL2VkaXQnLFxyXG4gICAgICAgIHJlbW92ZTogJ2RlcGFydG1lbnRzL3JlbW92ZSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiNkZXBhcnRtZW50cyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWUiLCIvKiFcbiAqIHZ1ZS1maWxlcG9uZCB2Mi4wLjBcbiAqIEEgaGFuZHkgRmlsZVBvbmQgYWRhcHRlciBjb21wb25lbnQgZm9yIFZ1ZVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggUFFJTkFcbiAqIGh0dHBzOi8vcHFpbmEubmwvZmlsZXBvbmRcbiAqIFxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3Z1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xuXG52YXIgX3Z1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92dWUpO1xuXG52YXIgX2ZpbGVwb25kID0gcmVxdWlyZSgnZmlsZXBvbmQnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gTWV0aG9kcyBub3QgbWFkZSBhdmFpbGFibGUgdG8gdGhlIGNvbXBvbmVudFxudmFyIGZpbHRlcmVkQ29tcG9uZW50TWV0aG9kcyA9IFsnc2V0T3B0aW9ucycsICdvbicsICdvZmYnLCAnb25PbmNlJywgJ2FwcGVuZFRvJywgJ2luc2VydEFmdGVyJywgJ2luc2VydEJlZm9yZScsICdpc0F0dGFjaGVkVG8nLCAncmVwbGFjZUVsZW1lbnQnLCAncmVzdG9yZUVsZW1lbnQnLCAnZGVzdHJveSddO1xuXG4vLyBUZXN0IGlmIGlzIHN1cHBvcnRlZCBvbiB0aGlzIGNsaWVudFxudmFyIGlzU3VwcG9ydGVkID0gKDAsIF9maWxlcG9uZC5zdXBwb3J0ZWQpKCk7XG5cbi8vIFNldHVwIGluaXRpYWwgcHJvcCB0eXBlcyBhbmQgdXBkYXRlIHdoZW4gcGx1Z2lucyBhcmUgYWRkZWRcbnZhciBnZXROYXRpdmVDb25zdHJ1Y3RvckZyb21UeXBlID0gZnVuY3Rpb24gZ2V0TmF0aXZlQ29uc3RydWN0b3JGcm9tVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RyaW5nOiBTdHJpbmcsXG4gICAgICAgIGJvb2xlYW46IEJvb2xlYW4sXG4gICAgICAgIGFycmF5OiBBcnJheSxcbiAgICAgICAgZnVuY3Rpb246IEZ1bmN0aW9uLFxuICAgICAgICBpbnQ6IE51bWJlcixcbiAgICAgICAgc2VydmVyYXBpOiBPYmplY3RcbiAgICB9W3R5cGVdO1xufTtcblxuLy8gQWN0aXZhdGVkIHByb3BzXG52YXIgcHJvcHMgPSB7fTtcblxuLy8gRXZlbnRzIHRoYXQgbmVlZCB0byBiZSBtYXBwZWQgdG8gZW1pdHRlcnNcbnZhciBldmVudHMgPSBbXTtcblxuLy8gUHJvcHMgdG8gd2F0Y2hcbnZhciB3YXRjaCA9IHt9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyByZWdpc3RlciBwbHVnaW5zIGluIEZpbGVQb25kXG4gICAgX2ZpbGVwb25kLnJlZ2lzdGVyUGx1Z2luLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcblxuICAgIC8vIGJ1aWxkIGV2ZW50cyBhbmQgcHJvcHMgYXJyYXlcbiAgICBldmVudHMubGVuZ3RoID0gMDtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKHByb3ApIHtcbiAgICAgICAgLy8gZG9uJ3QgYWRkIGV2ZW50cyB0byB0aGUgcHJvcHMgYXJyYXlcbiAgICAgICAgaWYgKC9eb24vLnRlc3QocHJvcCkpIHtcbiAgICAgICAgICAgIGV2ZW50cy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgcmV0dXJuICdjb250aW51ZSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgcHJvcGVydHkgdHlwZSAoIGNhbiBiZSBlaXRoZXIgYSBTdHJpbmcgb3IgdGhlIHR5cGUgZGVmaW5lZCB3aXRoaW4gRmlsZVBvbmQgKVxuICAgICAgICBwcm9wc1twcm9wXSA9IFtTdHJpbmcsIGdldE5hdGl2ZUNvbnN0cnVjdG9yRnJvbVR5cGUoX2ZpbGVwb25kLk9wdGlvblR5cGVzW3Byb3BdKV07XG5cbiAgICAgICAgLy8gc2V0dXAgd2F0Y2hlclxuICAgICAgICB3YXRjaFtwcm9wXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcG9uZFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBwcm9wIGluIF9maWxlcG9uZC5PcHRpb25UeXBlcykge1xuICAgICAgICB2YXIgX3JldCA9IF9sb29wKHByb3ApO1xuXG4gICAgICAgIGlmIChfcmV0ID09PSAnY29udGludWUnKSBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgXG4gICAgcmV0dXJuIF92dWUyLmRlZmF1bHQuY29tcG9uZW50KCdGaWxlUG9uZCcsIHtcbiAgICAgICAgbmFtZTogJ0ZpbGVQb25kJyxcbiAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICB3YXRjaDogd2F0Y2gsXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKGgpIHtcbiAgICAgICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzJzoge1xuICAgICAgICAgICAgICAgICAgICAnZmlsZXBvbmQtLXdyYXBwZXInOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW2goJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogdGhpcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0aGlzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZTogdGhpcy5hbGxvd011bHRpcGxlLFxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ6IHRoaXMuYWNjZXB0ZWRGaWxlVHlwZXMsXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmU6IHRoaXMuY2FwdHVyZU1ldGhvZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gV2lsbCBzZXR1cCBGaWxlUG9uZCBpbnN0YW5jZSB3aGVuIG1vdW50ZWRcbiAgICAgICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIGV4aXQgaGVyZSBpZiBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAgICBpZiAoIWlzU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBnZXQgcG9uZCBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblxuICAgICAgICAgICAgLy8gTWFwIEZpbGVQb25kIGNhbGxiYWNrIG1ldGhvZHMgdG8gVnVlICRlbWl0dGVyc1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBldmVudHMucmVkdWNlKGZ1bmN0aW9uIChvYmosIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgb2JqW3ZhbHVlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdC5hcHBseShfdGhpcywgW3ZhbHVlLnN1YnN0cigyKV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICAgIC8vIFNjb29wIHVwIGF0dHJpYnV0ZXMgdGhhdCBtaWdodCBub3QgaGF2ZSBiZWVuIGNhdWdodCBieSBWdWUgKCBiZWNhdXNlIHRoZSBwcm9wcyBvYmplY3QgaXMgZXh0ZW5kZWQgZHluYW1pY2FsbHkgKVxuICAgICAgICAgICAgdmFyIGF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy4kYXR0cnMpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgb3VyIHBvbmRcbiAgICAgICAgICAgIHRoaXMuX3BvbmQgPSAoMCwgX2ZpbGVwb25kLmNyZWF0ZSkodGhpcy5fZWxlbWVudCwgT2JqZWN0LmFzc2lnbihvcHRpb25zLCBhdHRycywgdGhpcy4kb3B0aW9ucy5wcm9wc0RhdGEpKTtcblxuICAgICAgICAgICAgLy8gQ29weSBpbnN0YW5jZSBtZXRob2QgcmVmZXJlbmNlcyB0byBjb21wb25lbnQgaW5zdGFuY2VcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX3BvbmQpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFmaWx0ZXJlZENvbXBvbmVudE1ldGhvZHMuaW5jbHVkZXMoa2V5KTtcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIF90aGlzW2tleV0gPSBfdGhpcy5fcG9uZFtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cblxuICAgICAgICAvLyBXaWxsIGNsZWFuIHVwIEZpbGVQb25kIGluc3RhbmNlIHdoZW4gdW5tb3VudGVkXG4gICAgICAgIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgICAgICAvLyBleGl0IHdoZW4gbm8gcG9uZCBkZWZpbmVkXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3BvbmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3BvbmQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1maWxlcG9uZC9kaXN0L3Z1ZS1maWxlcG9uZC5qc1xuLy8gbW9kdWxlIGlkID0gMjEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qXG4gKiBGaWxlUG9uZCAxLjQuMFxuICogTGljZW5zZWQgdW5kZXIgTUlULCBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogUGxlYXNlIHZpc2l0IGh0dHBzOi8vcHFpbmEubmwvZmlsZXBvbmQgZm9yIGRldGFpbHMuXG4gKi9cbihmdW5jdGlvbihnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgPyBmYWN0b3J5KGV4cG9ydHMpXG4gICAgOiB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWRcbiAgICAgID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KVxuICAgICAgOiBmYWN0b3J5KChnbG9iYWwuRmlsZVBvbmQgPSB7fSkpO1xufSkodGhpcywgZnVuY3Rpb24oZXhwb3J0cykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGlzTm9kZSA9IGZ1bmN0aW9uIGlzTm9kZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICB9O1xuXG4gIHZhciBfdHlwZW9mID1cbiAgICB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnXG4gICAgICA/IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgICB9XG4gICAgICA6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIHJldHVybiBvYmogJiZcbiAgICAgICAgICAgIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmXG4gICAgICAgICAgICBvYmogIT09IFN5bWJvbC5wcm90b3R5cGVcbiAgICAgICAgICAgID8gJ3N5bWJvbCdcbiAgICAgICAgICAgIDogdHlwZW9mIG9iajtcbiAgICAgICAgfTtcblxuICB2YXIgYXN5bmNHZW5lcmF0b3IgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIEFzeW5jR2VuZXJhdG9yKGdlbikge1xuICAgICAgdmFyIGZyb250LCBiYWNrO1xuXG4gICAgICBmdW5jdGlvbiBzZW5kKGtleSwgYXJnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgYXJnOiBhcmcsXG4gICAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgICAgICBuZXh0OiBudWxsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgICAgICBiYWNrID0gYmFjay5uZXh0ID0gcmVxdWVzdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgICAgIHJlc3VtZShrZXksIGFyZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVzdW1lKGtleSwgYXJnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuXG4gICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRWYWx1ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlLnZhbHVlKS50aGVuKFxuICAgICAgICAgICAgICBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgICAgICAgICByZXN1bWUoJ25leHQnLCBhcmcpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgICAgICAgICByZXN1bWUoJ3Rocm93JywgYXJnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0dGxlKHJlc3VsdC5kb25lID8gJ3JldHVybicgOiAnbm9ybWFsJywgcmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHNldHRsZSgndGhyb3cnLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNldHRsZSh0eXBlLCB2YWx1ZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICdyZXR1cm4nOlxuICAgICAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3Rocm93JzpcbiAgICAgICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgICAgICBpZiAoZnJvbnQpIHtcbiAgICAgICAgICByZXN1bWUoZnJvbnQua2V5LCBmcm9udC5hcmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJhY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2ludm9rZSA9IHNlbmQ7XG5cbiAgICAgIGlmICh0eXBlb2YgZ2VuLnJldHVybiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJldHVybiA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICAgICAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbnZva2UoJ25leHQnLCBhcmcpO1xuICAgIH07XG5cbiAgICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUudGhyb3cgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbnZva2UoJ3Rocm93JywgYXJnKTtcbiAgICB9O1xuXG4gICAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnJldHVybiA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZSgncmV0dXJuJywgYXJnKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdyYXA6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEFzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGF3YWl0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IEF3YWl0VmFsdWUodmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG5cbiAgdmFyIF9leHRlbmRzID1cbiAgICBPYmplY3QuYXNzaWduIHx8XG4gICAgZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuXG4gIHZhciB0b0NvbnN1bWFibGVBcnJheSA9IGZ1bmN0aW9uKGFycikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspXG4gICAgICAgIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICAgIHJldHVybiBhcnIyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY3JlYXRlU3RvcmUgPSBmdW5jdGlvbiBjcmVhdGVTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgICB2YXIgcXVlcmllcyA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuICAgIHZhciBhY3Rpb25zID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG5cbiAgICAvLyBpbnRlcm5hbCBzdGF0ZVxuICAgIHZhciBzdGF0ZSA9IF9leHRlbmRzKHt9LCBpbml0aWFsU3RhdGUpO1xuXG4gICAgLy8gY29udGFpbnMgYWxsIGFjdGlvbnMgZm9yIG5leHQgZnJhbWUsIGlzIGNsZWFyIHdoZW4gYWN0aW9ucyBhcmUgcmVxdWVzdGVkXG4gICAgdmFyIGFjdGlvblF1ZXVlID0gW107XG4gICAgdmFyIGRpc3BhdGNoUXVldWUgPSBbXTtcblxuICAgIC8vIHJldHVybnMgYSBkdXBsaWNhdGUgb2YgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICB2YXIgZ2V0U3RhdGUgPSBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUpO1xuICAgIH07XG5cbiAgICAvLyByZXR1cm5zIGEgZHVwbGljYXRlIG9mIHRoZSBhY3Rpb25zIGFycmF5IGFuZCBjbGVhcnMgdGhlIGFjdGlvbnMgYXJyYXlcbiAgICB2YXIgcHJvY2Vzc0FjdGlvblF1ZXVlID0gZnVuY3Rpb24gcHJvY2Vzc0FjdGlvblF1ZXVlKCkge1xuICAgICAgLy8gY3JlYXRlIGNvcHkgb2YgYWN0aW9ucyBxdWV1ZVxuICAgICAgdmFyIHF1ZXVlID0gW10uY29uY2F0KGFjdGlvblF1ZXVlKTtcblxuICAgICAgLy8gY2xlYXIgYWN0aW9ucyBxdWV1ZSAod2UgZG9uJ3Qgd2FudCBubyBkb3VibGUgYWN0aW9ucylcbiAgICAgIGFjdGlvblF1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgICAgIHJldHVybiBxdWV1ZTtcbiAgICB9O1xuXG4gICAgLy8gcHJvY2Vzc2VzIGFjdGlvbnMgdGhhdCBtaWdodCBibG9jayB0aGUgbWFpbiBVSSB0aHJlYWRcbiAgICB2YXIgcHJvY2Vzc0Rpc3BhdGNoUXVldWUgPSBmdW5jdGlvbiBwcm9jZXNzRGlzcGF0Y2hRdWV1ZSgpIHtcbiAgICAgIC8vIGNyZWF0ZSBjb3B5IG9mIGFjdGlvbnMgcXVldWVcbiAgICAgIHZhciBxdWV1ZSA9IFtdLmNvbmNhdChkaXNwYXRjaFF1ZXVlKTtcblxuICAgICAgLy8gY2xlYXIgYWN0aW9ucyBxdWV1ZSAod2UgZG9uJ3Qgd2FudCBubyBkb3VibGUgYWN0aW9ucylcbiAgICAgIGRpc3BhdGNoUXVldWUubGVuZ3RoID0gMDtcblxuICAgICAgLy8gbm93IGRpc3BhdGNoIHRoZXNlIGFjdGlvbnNcbiAgICAgIHF1ZXVlLmZvckVhY2goZnVuY3Rpb24oX3JlZikge1xuICAgICAgICB2YXIgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhO1xuXG4gICAgICAgIGRpc3BhdGNoKHR5cGUsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGFkZHMgYSBuZXcgYWN0aW9uLCBjYWxscyBpdHMgaGFuZGxlciBhbmRcbiAgICB2YXIgZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaCh0eXBlLCBkYXRhLCBpc0Jsb2NraW5nKSB7XG4gICAgICAvLyBpcyBibG9ja2luZyBhY3Rpb25cbiAgICAgIGlmIChpc0Jsb2NraW5nKSB7XG4gICAgICAgIGRpc3BhdGNoUXVldWUucHVzaCh7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHRoaXMgYWN0aW9uIGhhcyBhIGhhbmRsZXIsIGhhbmRsZSB0aGUgYWN0aW9uXG4gICAgICBpZiAoYWN0aW9uSGFuZGxlcnNbdHlwZV0pIHtcbiAgICAgICAgYWN0aW9uSGFuZGxlcnNbdHlwZV0oZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIC8vIG5vdyBhZGQgYWN0aW9uXG4gICAgICBhY3Rpb25RdWV1ZS5wdXNoKHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBxdWVyeSA9IGZ1bmN0aW9uIHF1ZXJ5KHN0cikge1xuICAgICAgdmFyIF9xdWVyeUhhbmRsZXM7XG5cbiAgICAgIGZvciAoXG4gICAgICAgIHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLFxuICAgICAgICAgIF9rZXkgPSAxO1xuICAgICAgICBfa2V5IDwgX2xlbjtcbiAgICAgICAgX2tleSsrXG4gICAgICApIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBxdWVyeUhhbmRsZXNbc3RyXVxuICAgICAgICA/IChfcXVlcnlIYW5kbGVzID0gcXVlcnlIYW5kbGVzKVtzdHJdLmFwcGx5KF9xdWVyeUhhbmRsZXMsIGFyZ3MpXG4gICAgICAgIDogbnVsbDtcbiAgICB9O1xuXG4gICAgdmFyIGFwaSA9IHtcbiAgICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICAgIHByb2Nlc3NBY3Rpb25RdWV1ZTogcHJvY2Vzc0FjdGlvblF1ZXVlLFxuICAgICAgcHJvY2Vzc0Rpc3BhdGNoUXVldWU6IHByb2Nlc3NEaXNwYXRjaFF1ZXVlLFxuICAgICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgfTtcblxuICAgIHZhciBxdWVyeUhhbmRsZXMgPSB7fTtcbiAgICBxdWVyaWVzLmZvckVhY2goZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgIHF1ZXJ5SGFuZGxlcyA9IF9leHRlbmRzKHt9LCBxdWVyeShzdGF0ZSksIHF1ZXJ5SGFuZGxlcyk7XG4gICAgfSk7XG5cbiAgICB2YXIgYWN0aW9uSGFuZGxlcnMgPSB7fTtcbiAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICBhY3Rpb25IYW5kbGVycyA9IF9leHRlbmRzKFxuICAgICAgICB7fSxcbiAgICAgICAgYWN0aW9uKGRpc3BhdGNoLCBxdWVyeSwgc3RhdGUpLFxuICAgICAgICBhY3Rpb25IYW5kbGVyc1xuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhcGk7XG4gIH07XG5cbiAgdmFyIGRlZmluZVByb3BlcnR5JDEgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSQkMShvYmosIHByb3BlcnR5LCBkZWZpbml0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvYmpbcHJvcGVydHldID0gZGVmaW5pdGlvbjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcGVydHksIF9leHRlbmRzKHt9LCBkZWZpbml0aW9uKSk7XG4gIH07XG5cbiAgdmFyIGZvcmluID0gZnVuY3Rpb24gZm9yaW4ob2JqLCBjYikge1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNiKGtleSwgb2JqW2tleV0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY3JlYXRlT2JqZWN0ID0gZnVuY3Rpb24gY3JlYXRlT2JqZWN0KGRlZmluaXRpb24pIHtcbiAgICB2YXIgb2JqID0ge307XG4gICAgZm9yaW4oZGVmaW5pdGlvbiwgZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5JDEob2JqLCBwcm9wZXJ0eSwgZGVmaW5pdGlvbltwcm9wZXJ0eV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgdmFyIGF0dHIgPSBmdW5jdGlvbiBhdHRyKG5vZGUsIG5hbWUpIHtcbiAgICB2YXIgdmFsdWUgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbm9kZS5nZXRBdHRyaWJ1dGUobmFtZSkgfHwgbm9kZS5oYXNBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfTtcblxuICB2YXIgbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICB2YXIgc3ZnRWxlbWVudHMgPSBbJ3N2ZycsICdwYXRoJ107IC8vIG9ubHkgc3ZnIGVsZW1lbnRzIHVzZWRcblxuICB2YXIgaXNTVkdFbGVtZW50ID0gZnVuY3Rpb24gaXNTVkdFbGVtZW50KHRhZykge1xuICAgIHJldHVybiBzdmdFbGVtZW50cy5pbmNsdWRlcyh0YWcpO1xuICB9O1xuXG4gIHZhciBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSkge1xuICAgIHZhciBhdHRyaWJ1dGVzID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBpZiAoXG4gICAgICAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoY2xhc3NOYW1lKSkgPT09XG4gICAgICAnb2JqZWN0J1xuICAgICkge1xuICAgICAgYXR0cmlidXRlcyA9IGNsYXNzTmFtZTtcbiAgICAgIGNsYXNzTmFtZSA9IG51bGw7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gaXNTVkdFbGVtZW50KHRhZylcbiAgICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCB0YWcpXG4gICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoaXNTVkdFbGVtZW50KHRhZykpIHtcbiAgICAgICAgYXR0cihlbGVtZW50LCAnY2xhc3MnLCBjbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICB9XG4gICAgfVxuICAgIGZvcmluKGF0dHJpYnV0ZXMsIGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICBhdHRyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICB2YXIgYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiBhcHBlbmRDaGlsZChwYXJlbnQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oY2hpbGQsIGluZGV4KSB7XG4gICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAndW5kZWZpbmVkJyAmJiBwYXJlbnQuY2hpbGRyZW5baW5kZXhdKSB7XG4gICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIHBhcmVudC5jaGlsZHJlbltpbmRleF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBhcHBlbmRDaGlsZFZpZXcgPSBmdW5jdGlvbiBhcHBlbmRDaGlsZFZpZXcocGFyZW50LCBjaGlsZFZpZXdzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHZpZXcsIGluZGV4KSB7XG4gICAgICAvLyB0b2RvOiBleHBhbmQgd2l0aCBsb2NhdGlvbiBhbmQgdGFyZ2V0IG9wdGlvbiAoY2hpbGQsICdiZWZvcmUnLCB0YXJnZXQpXG5cbiAgICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNoaWxkVmlld3Muc3BsaWNlKGluZGV4LCAwLCB2aWV3KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkVmlld3MucHVzaCh2aWV3KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgcmVtb3ZlQ2hpbGRWaWV3ID0gZnVuY3Rpb24gcmVtb3ZlQ2hpbGRWaWV3KHBhcmVudCwgY2hpbGRWaWV3cykge1xuICAgIHJldHVybiBmdW5jdGlvbih2aWV3KSB7XG4gICAgICAvLyByZW1vdmUgZnJvbSBjaGlsZCB2aWV3c1xuICAgICAgY2hpbGRWaWV3cy5zcGxpY2UoY2hpbGRWaWV3cy5pbmRleE9mKHZpZXcpLCAxKTtcblxuICAgICAgLy8gcmVtb3ZlIHRoZSBlbGVtZW50XG4gICAgICBpZiAodmlldy5lbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHZpZXcuZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2aWV3O1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGdldFZpZXdSZWN0ID0gZnVuY3Rpb24gZ2V0Vmlld1JlY3QoXG4gICAgZWxlbWVudFJlY3QsXG4gICAgY2hpbGRWaWV3cyxcbiAgICBvZmZzZXQsXG4gICAgc2NhbGVcbiAgKSB7XG4gICAgdmFyIGxlZnQgPSBvZmZzZXRbMF0gfHwgZWxlbWVudFJlY3QubGVmdDtcbiAgICB2YXIgdG9wID0gb2Zmc2V0WzFdIHx8IGVsZW1lbnRSZWN0LnRvcDtcbiAgICB2YXIgcmlnaHQgPSBsZWZ0ICsgZWxlbWVudFJlY3Qud2lkdGg7XG4gICAgdmFyIGJvdHRvbSA9IHRvcCArIGVsZW1lbnRSZWN0LmhlaWdodCAqIChzY2FsZVsxXSB8fCAxKTtcblxuICAgIHZhciByZWN0ID0ge1xuICAgICAgLy8gdGhlIHJlY3RhbmdsZSBvZiB0aGUgZWxlbWVudCBpdHNlbGZcbiAgICAgIGVsZW1lbnQ6IF9leHRlbmRzKHt9LCBlbGVtZW50UmVjdCksXG5cbiAgICAgIC8vIHRoZSByZWN0YW5nbGUgb2YgdGhlIGVsZW1lbnQgZXhwYW5kZWQgdG8gY29udGFpbiBpdHMgY2hpbGRyZW4sIGRvZXMgbm90IGluY2x1ZGUgYW55IG1hcmdpbnNcbiAgICAgIGlubmVyOiB7XG4gICAgICAgIGxlZnQ6IGVsZW1lbnRSZWN0LmxlZnQsXG4gICAgICAgIHRvcDogZWxlbWVudFJlY3QudG9wLFxuICAgICAgICByaWdodDogZWxlbWVudFJlY3QucmlnaHQsXG4gICAgICAgIGJvdHRvbTogZWxlbWVudFJlY3QuYm90dG9tXG4gICAgICB9LFxuXG4gICAgICAvLyB0aGUgcmVjdGFuZ2xlIG9mIHRoZSBlbGVtZW50IGV4cGFuZGVkIHRvIGNvbnRhaW4gaXRzIGNoaWxkcmVuIGluY2x1ZGluZyBvd24gbWFyZ2luIGFuZCBjaGlsZCBtYXJnaW5zXG4gICAgICAvLyBtYXJnaW5zIHdpbGwgYmUgYWRkZWQgYWZ0ZXIgd2UndmUgcmVjYWxjdWxhdGVkIHRoZSBzaXplXG4gICAgICBvdXRlcjoge1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICBib3R0b206IGJvdHRvbVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBleHBhbmQgcmVjdCB0byBmaXQgYWxsIGNoaWxkIHJlY3RhbmdsZXNcbiAgICBjaGlsZFZpZXdzXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKGNoaWxkVmlldykge1xuICAgICAgICByZXR1cm4gIWNoaWxkVmlldy5pc1JlY3RJZ25vcmVkKCk7XG4gICAgICB9KVxuICAgICAgLm1hcChmdW5jdGlvbihjaGlsZFZpZXcpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkVmlldy5yZWN0O1xuICAgICAgfSlcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkVmlld1JlY3QpIHtcbiAgICAgICAgZXhwYW5kUmVjdChyZWN0LmlubmVyLCBfZXh0ZW5kcyh7fSwgY2hpbGRWaWV3UmVjdC5pbm5lcikpO1xuICAgICAgICBleHBhbmRSZWN0KHJlY3Qub3V0ZXIsIF9leHRlbmRzKHt9LCBjaGlsZFZpZXdSZWN0Lm91dGVyKSk7XG4gICAgICB9KTtcblxuICAgIC8vIGNhbGN1bGF0ZSBpbm5lciB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgY2FsY3VsYXRlUmVjdFNpemUocmVjdC5pbm5lcik7XG5cbiAgICAvLyBhcHBlbmQgYWRkaXRpb25hbCBtYXJnaW4gKHRvcCBhbmQgbGVmdCBtYXJnaW5zIGFyZSBpbmNsdWRlZCBpbiB0b3AgYW5kIGxlZnQgYXV0b21hdGljYWxseSlcbiAgICByZWN0Lm91dGVyLmJvdHRvbSArPSByZWN0LmVsZW1lbnQubWFyZ2luQm90dG9tO1xuICAgIHJlY3Qub3V0ZXIucmlnaHQgKz0gcmVjdC5lbGVtZW50Lm1hcmdpblJpZ2h0O1xuXG4gICAgLy8gY2FsY3VsYXRlIG91dGVyIHdpZHRoIGFuZCBoZWlnaHRcbiAgICBjYWxjdWxhdGVSZWN0U2l6ZShyZWN0Lm91dGVyKTtcblxuICAgIHJldHVybiByZWN0O1xuICB9O1xuXG4gIHZhciBleHBhbmRSZWN0ID0gZnVuY3Rpb24gZXhwYW5kUmVjdChwYXJlbnQsIGNoaWxkKSB7XG4gICAgLy8gYWRqdXN0IGZvciBwYXJlbnQgb2Zmc2V0XG4gICAgY2hpbGQudG9wICs9IHBhcmVudC50b3A7XG4gICAgY2hpbGQucmlnaHQgKz0gcGFyZW50LmxlZnQ7XG4gICAgY2hpbGQuYm90dG9tICs9IHBhcmVudC50b3A7XG4gICAgY2hpbGQubGVmdCArPSBwYXJlbnQubGVmdDtcblxuICAgIGlmIChjaGlsZC5ib3R0b20gPiBwYXJlbnQuYm90dG9tKSB7XG4gICAgICBwYXJlbnQuYm90dG9tID0gY2hpbGQuYm90dG9tO1xuICAgIH1cblxuICAgIGlmIChjaGlsZC5yaWdodCA+IHBhcmVudC5yaWdodCkge1xuICAgICAgcGFyZW50LnJpZ2h0ID0gY2hpbGQucmlnaHQ7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjYWxjdWxhdGVSZWN0U2l6ZSA9IGZ1bmN0aW9uIGNhbGN1bGF0ZVJlY3RTaXplKHJlY3QpIHtcbiAgICByZWN0LndpZHRoID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcbiAgICByZWN0LmhlaWdodCA9IHJlY3QuYm90dG9tIC0gcmVjdC50b3A7XG4gIH07XG5cbiAgdmFyIGlzTnVtYmVyID0gZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbiAgfTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiBwb3NpdGlvbiBpcyBhdCBkZXN0aW5hdGlvblxuICAgKiBAcGFyYW0gcG9zaXRpb25cbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uXG4gICAqIEBwYXJhbSB2ZWxvY2l0eVxuICAgKiBAcGFyYW0gZXJyb3JNYXJnaW5cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgdGhlcmVZZXQgPSBmdW5jdGlvbiB0aGVyZVlldChwb3NpdGlvbiwgZGVzdGluYXRpb24sIHZlbG9jaXR5KSB7XG4gICAgdmFyIGVycm9yTWFyZ2luID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMC4wMDE7XG5cbiAgICByZXR1cm4gKFxuICAgICAgTWF0aC5hYnMocG9zaXRpb24gLSBkZXN0aW5hdGlvbikgPCBlcnJvck1hcmdpbiAmJlxuICAgICAgTWF0aC5hYnModmVsb2NpdHkpIDwgZXJyb3JNYXJnaW5cbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTcHJpbmcgYW5pbWF0aW9uXG4gICAqL1xuICB2YXIgc3ByaW5nID1cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBmdW5jdGlvbiBzcHJpbmcoKSAvLyBtZXRob2QgZGVmaW5pdGlvblxuICAgIHtcbiAgICAgIHZhciBfcmVmID1cbiAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF1cbiAgICAgICAgICAgIDoge30sXG4gICAgICAgIF9yZWYkc3RpZmZuZXNzID0gX3JlZi5zdGlmZm5lc3MsXG4gICAgICAgIHN0aWZmbmVzcyA9IF9yZWYkc3RpZmZuZXNzID09PSB1bmRlZmluZWQgPyAwLjUgOiBfcmVmJHN0aWZmbmVzcyxcbiAgICAgICAgX3JlZiRkYW1waW5nID0gX3JlZi5kYW1waW5nLFxuICAgICAgICBkYW1waW5nID0gX3JlZiRkYW1waW5nID09PSB1bmRlZmluZWQgPyAwLjc1IDogX3JlZiRkYW1waW5nLFxuICAgICAgICBfcmVmJG1hc3MgPSBfcmVmLm1hc3MsXG4gICAgICAgIG1hc3MgPSBfcmVmJG1hc3MgPT09IHVuZGVmaW5lZCA/IDEwIDogX3JlZiRtYXNzO1xuXG4gICAgICB2YXIgdGFyZ2V0ID0gbnVsbDtcbiAgICAgIHZhciBwb3NpdGlvbiA9IG51bGw7XG4gICAgICB2YXIgdmVsb2NpdHkgPSAwO1xuICAgICAgdmFyIHJlc3RpbmcgPSBmYWxzZTtcblxuICAgICAgLy8gdXBkYXRlcyBzcHJpbmcgc3RhdGVcbiAgICAgIHZhciBpbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIGludGVycG9sYXRlKCkge1xuICAgICAgICAvLyBpbiByZXN0LCBkb24ndCBhbmltYXRlXG4gICAgICAgIGlmIChyZXN0aW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbmVlZCBhdCBsZWFzdCBhIHRhcmdldCBvciBwb3NpdGlvbiB0byBkbyBzcHJpbmd5IHRoaW5nc1xuICAgICAgICBpZiAoIShpc051bWJlcih0YXJnZXQpICYmIGlzTnVtYmVyKHBvc2l0aW9uKSkpIHtcbiAgICAgICAgICByZXN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICB2ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHNwcmluZyBmb3JjZVxuICAgICAgICB2YXIgZiA9IC0ocG9zaXRpb24gLSB0YXJnZXQpICogc3RpZmZuZXNzO1xuXG4gICAgICAgIC8vIHVwZGF0ZSB2ZWxvY2l0eSBieSBhZGRpbmcgZm9yY2UgYmFzZWQgb24gbWFzc1xuICAgICAgICB2ZWxvY2l0eSArPSBmIC8gbWFzcztcblxuICAgICAgICAvLyB1cGRhdGUgcG9zaXRpb24gYnkgYWRkaW5nIHZlbG9jaXR5XG4gICAgICAgIHBvc2l0aW9uICs9IHZlbG9jaXR5O1xuXG4gICAgICAgIC8vIHNsb3cgZG93biBiYXNlZCBvbiBhbW91bnQgb2YgZGFtcGluZ1xuICAgICAgICB2ZWxvY2l0eSAqPSBkYW1waW5nO1xuXG4gICAgICAgIC8vIHdlJ3ZlIGFycml2ZWQgaWYgd2UncmUgbmVhciB0YXJnZXQgYW5kIG91ciB2ZWxvY2l0eSBpcyBuZWFyIHplcm9cbiAgICAgICAgaWYgKHRoZXJlWWV0KHBvc2l0aW9uLCB0YXJnZXQsIHZlbG9jaXR5KSkge1xuICAgICAgICAgIHBvc2l0aW9uID0gdGFyZ2V0O1xuICAgICAgICAgIHZlbG9jaXR5ID0gMDtcbiAgICAgICAgICByZXN0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIHdlIGRvbmVcbiAgICAgICAgICBhcGkub251cGRhdGUocG9zaXRpb24pO1xuICAgICAgICAgIGFwaS5vbmNvbXBsZXRlKHBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBwcm9ncmVzcyB1cGRhdGVcbiAgICAgICAgICBhcGkub251cGRhdGUocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIFNldCBuZXcgdGFyZ2V0IHZhbHVlXG4gICAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgICAqL1xuICAgICAgdmFyIHNldFRhcmdldCA9IGZ1bmN0aW9uIHNldFRhcmdldCh2YWx1ZSkge1xuICAgICAgICAvLyBpZiBjdXJyZW50bHkgaGFzIG5vIHBvc2l0aW9uLCBzZXQgdGFyZ2V0IGFuZCBwb3NpdGlvbiB0byB0aGlzIHZhbHVlXG4gICAgICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgIWlzTnVtYmVyKHBvc2l0aW9uKSkge1xuICAgICAgICAgIHBvc2l0aW9uID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgc3RhcnQgbW92aW5nIHRvIHRhcmdldFxuICAgICAgICB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgICAvLyBhbHJlYWR5IGF0IHRhcmdldFxuICAgICAgICBpZiAocG9zaXRpb24gPT09IHRhcmdldCB8fCB0eXBlb2YgdGFyZ2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIG5vdyByZXN0aW5nIGFzIHRhcmdldCBpcyBjdXJyZW50IHBvc2l0aW9uLCBzdG9wIG1vdmluZ1xuICAgICAgICAgIHJlc3RpbmcgPSB0cnVlO1xuICAgICAgICAgIHZlbG9jaXR5ID0gMDtcblxuICAgICAgICAgIC8vIGRvbmUhXG4gICAgICAgICAgYXBpLm9udXBkYXRlKHBvc2l0aW9uKTtcbiAgICAgICAgICBhcGkub25jb21wbGV0ZShwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXN0aW5nID0gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICAvLyBuZWVkICdhcGknIHRvIGNhbGwgb251cGRhdGUgY2FsbGJhY2tcbiAgICAgIHZhciBhcGkgPSBjcmVhdGVPYmplY3Qoe1xuICAgICAgICBpbnRlcnBvbGF0ZTogaW50ZXJwb2xhdGUsXG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgIHNldDogc2V0VGFyZ2V0LFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3Rpbmc6IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN0aW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb251cGRhdGU6IGZ1bmN0aW9uIG9udXBkYXRlKHZhbHVlKSB7fSxcbiAgICAgICAgb25jb21wbGV0ZTogZnVuY3Rpb24gb25jb21wbGV0ZSh2YWx1ZSkge31cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gYXBpO1xuICAgIH07XG5cbiAgdmFyIGVhc2VJbk91dFF1YWQgPSBmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQpIHtcbiAgICByZXR1cm4gdCA8IDAuNSA/IDIgKiB0ICogdCA6IC0xICsgKDQgLSAyICogdCkgKiB0O1xuICB9O1xuXG4gIHZhciB0d2VlbiA9XG4gICAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgICBmdW5jdGlvbiB0d2VlbigpIC8vIG1ldGhvZCBkZWZpbml0aW9uXG4gICAge1xuICAgICAgdmFyIF9yZWYgPVxuICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXVxuICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgX3JlZiRkdXJhdGlvbiA9IF9yZWYuZHVyYXRpb24sXG4gICAgICAgIGR1cmF0aW9uID0gX3JlZiRkdXJhdGlvbiA9PT0gdW5kZWZpbmVkID8gNTAwIDogX3JlZiRkdXJhdGlvbixcbiAgICAgICAgX3JlZiRlYXNpbmcgPSBfcmVmLmVhc2luZyxcbiAgICAgICAgZWFzaW5nID0gX3JlZiRlYXNpbmcgPT09IHVuZGVmaW5lZCA/IGVhc2VJbk91dFF1YWQgOiBfcmVmJGVhc2luZyxcbiAgICAgICAgX3JlZiRkZWxheSA9IF9yZWYuZGVsYXksXG4gICAgICAgIGRlbGF5ID0gX3JlZiRkZWxheSA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkZGVsYXk7XG5cbiAgICAgIHZhciBzdGFydCA9IG51bGw7XG4gICAgICB2YXIgdCA9IHZvaWQgMDtcbiAgICAgIHZhciBwID0gdm9pZCAwO1xuICAgICAgdmFyIHJlc3RpbmcgPSB0cnVlO1xuICAgICAgdmFyIHJldmVyc2UgPSBmYWxzZTtcbiAgICAgIHZhciB0YXJnZXQgPSBudWxsO1xuXG4gICAgICB2YXIgaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiBpbnRlcnBvbGF0ZSh0cykge1xuICAgICAgICBpZiAocmVzdGluZyB8fCB0YXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnQgPT09IG51bGwpIHtcbiAgICAgICAgICBzdGFydCA9IHRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRzIC0gc3RhcnQgPCBkZWxheSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHQgPSB0cyAtIHN0YXJ0IC0gZGVsYXk7XG5cbiAgICAgICAgaWYgKHQgPCBkdXJhdGlvbikge1xuICAgICAgICAgIHAgPSB0IC8gZHVyYXRpb247XG4gICAgICAgICAgYXBpLm9udXBkYXRlKCh0ID49IDAgPyBlYXNpbmcocmV2ZXJzZSA/IDEgLSBwIDogcCkgOiAwKSAqIHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdCA9IDE7XG4gICAgICAgICAgcmVzdGluZyA9IHRydWU7XG4gICAgICAgICAgcCA9IHJldmVyc2UgPyAwIDogMTtcbiAgICAgICAgICBhcGkub251cGRhdGUocCAqIHRhcmdldCk7XG4gICAgICAgICAgYXBpLm9uY29tcGxldGUocCAqIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIG5lZWQgJ2FwaScgdG8gY2FsbCBvbnVwZGF0ZSBjYWxsYmFja1xuICAgICAgdmFyIGFwaSA9IGNyZWF0ZU9iamVjdCh7XG4gICAgICAgIGludGVycG9sYXRlOiBpbnRlcnBvbGF0ZSxcbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV2ZXJzZSA/IDAgOiB0YXJnZXQ7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgLy8gaXMgaW5pdGlhbCB2YWx1ZVxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgYXBpLm9udXBkYXRlKHZhbHVlKTtcbiAgICAgICAgICAgICAgYXBpLm9uY29tcGxldGUodmFsdWUpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHdhbnQgdG8gdHdlZW4gdG8gYSBzbWFsbGVyIHZhbHVlIGFuZCBoYXZlIGEgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgdGFyZ2V0KSB7XG4gICAgICAgICAgICAgIHRhcmdldCA9IDE7XG4gICAgICAgICAgICAgIHJldmVyc2UgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gbm90IHR3ZWVuaW5nIHRvIGEgc21hbGxlciB2YWx1ZVxuICAgICAgICAgICAgICByZXZlcnNlID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsZXQncyBnbyFcbiAgICAgICAgICAgIHJlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHN0YXJ0ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3Rpbmc6IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN0aW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb251cGRhdGU6IGZ1bmN0aW9uIG9udXBkYXRlKHZhbHVlKSB7fSxcbiAgICAgICAgb25jb21wbGV0ZTogZnVuY3Rpb24gb25jb21wbGV0ZSh2YWx1ZSkge31cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gYXBpO1xuICAgIH07XG5cbiAgdmFyIGFuaW1hdG9yID0ge1xuICAgIHNwcmluZzogc3ByaW5nLFxuICAgIHR3ZWVuOiB0d2VlblxuICB9O1xuXG4gIC8qXG4geyB0eXBlOiAnc3ByaW5nJywgc3RpZmZuZXNzOiAuNSwgZGFtcGluZzogLjc1LCBtYXNzOiAxMCB9O1xuIHsgdHJhbnNsYXRpb246IHsgdHlwZTogJ3NwcmluZycsIC4uLiB9LCAuLi4gfVxuIHsgdHJhbnNsYXRpb246IHsgeDogeyB0eXBlOiAnc3ByaW5nJywgLi4uIH0gfSB9XG4qL1xuICB2YXIgY3JlYXRlQW5pbWF0b3IgPSBmdW5jdGlvbiBjcmVhdGVBbmltYXRvcihkZWZpbml0aW9uLCBjYXRlZ29yeSwgcHJvcGVydHkpIHtcbiAgICAvLyBkZWZhdWx0IGlzIHNpbmdsZSBkZWZpbml0aW9uXG4gICAgLy8gd2UgY2hlY2sgaWYgdHJhbnNmb3JtIGlzIHNldCwgaWYgc28sIHdlIGNoZWNrIGlmIHByb3BlcnR5IGlzIHNldFxuICAgIHZhciBkZWYgPVxuICAgICAgZGVmaW5pdGlvbltjYXRlZ29yeV0gJiZcbiAgICAgIF90eXBlb2YoZGVmaW5pdGlvbltjYXRlZ29yeV1bcHJvcGVydHldKSA9PT0gJ29iamVjdCdcbiAgICAgICAgPyBkZWZpbml0aW9uW2NhdGVnb3J5XVtwcm9wZXJ0eV1cbiAgICAgICAgOiBkZWZpbml0aW9uW2NhdGVnb3J5XSB8fCBkZWZpbml0aW9uO1xuXG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgZGVmID09PSAnc3RyaW5nJyA/IGRlZiA6IGRlZi50eXBlO1xuICAgIHZhciBwcm9wcyA9XG4gICAgICAodHlwZW9mIGRlZiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGVmKSkgPT09ICdvYmplY3QnXG4gICAgICAgID8gX2V4dGVuZHMoe30sIGRlZilcbiAgICAgICAgOiB7fTtcblxuICAgIHJldHVybiBhbmltYXRvclt0eXBlXSA/IGFuaW1hdG9yW3R5cGVdKHByb3BzKSA6IG51bGw7XG4gIH07XG5cbiAgdmFyIGFkZEdldFNldCA9IGZ1bmN0aW9uIGFkZEdldFNldChrZXlzLCBvYmosIHByb3BzKSB7XG4gICAgdmFyIG92ZXJ3cml0ZSA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGZhbHNlO1xuXG4gICAgb2JqID0gQXJyYXkuaXNBcnJheShvYmopID8gb2JqIDogW29ial07XG4gICAgb2JqLmZvckVhY2goZnVuY3Rpb24obykge1xuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgbmFtZSA9IGtleTtcbiAgICAgICAgdmFyIGdldHRlciA9IGZ1bmN0aW9uIGdldHRlcigpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcHNba2V5XTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNldHRlciA9IGZ1bmN0aW9uIHNldHRlcih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiAocHJvcHNba2V5XSA9IHZhbHVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgKHR5cGVvZiBrZXkgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGtleSkpID09PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICBuYW1lID0ga2V5LmtleTtcbiAgICAgICAgICBnZXR0ZXIgPSBrZXkuZ2V0dGVyIHx8IGdldHRlcjtcbiAgICAgICAgICBzZXR0ZXIgPSBrZXkuc2V0dGVyIHx8IHNldHRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvW25hbWVdICYmICFvdmVyd3JpdGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBvW25hbWVdID0ge1xuICAgICAgICAgIGdldDogZ2V0dGVyLFxuICAgICAgICAgIHNldDogc2V0dGVyXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgaXNFbXB0eSA9IGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbDtcbiAgfTtcblxuICB2YXIgaXNEZWZpbmVkID0gZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuICFpc0VtcHR5KHZhbHVlKTtcbiAgfTtcblxuICAvLyBhZGQgdG8gc3RhdGUsXG4gIC8vIGFkZCBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHRvIGludGVybmFsIGFuZCBleHRlcm5hbCBhcGkgKGlmIG5vdCBzZXQpXG4gIC8vIHNldHVwIGFuaW1hdG9yc1xuXG4gIHZhciBhbmltYXRpb25zID0gZnVuY3Rpb24gYW5pbWF0aW9ucyhfcmVmKSB7XG4gICAgdmFyIG1peGluQ29uZmlnID0gX3JlZi5taXhpbkNvbmZpZyxcbiAgICAgIHZpZXdQcm9wcyA9IF9yZWYudmlld1Byb3BzLFxuICAgICAgdmlld0ludGVybmFsQVBJID0gX3JlZi52aWV3SW50ZXJuYWxBUEksXG4gICAgICB2aWV3RXh0ZXJuYWxBUEkgPSBfcmVmLnZpZXdFeHRlcm5hbEFQSTtcblxuICAgIC8vIGluaXRpYWwgcHJvcGVydGllc1xuICAgIHZhciBpbml0aWFsUHJvcHMgPSBfZXh0ZW5kcyh7fSwgdmlld1Byb3BzKTtcblxuICAgIC8vIGxpc3Qgb2YgYWxsIGFjdGl2ZSBhbmltYXRpb25zXG4gICAgdmFyIGFuaW1hdGlvbnMgPSBbXTtcblxuICAgIC8vIGFjdGl2ZSBhbmltYXRpb24gY291bnRlclxuICAgIHZhciBhY3RpdmVBbmltYXRvcnMgPSAwO1xuXG4gICAgLy8gc2V0dXAgYW5pbWF0b3JzXG4gICAgZm9yaW4obWl4aW5Db25maWcsIGZ1bmN0aW9uKHByb3BlcnR5LCBhbmltYXRpb24pIHtcbiAgICAgIHZhciBhbmltYXRvciA9IGNyZWF0ZUFuaW1hdG9yKGFuaW1hdGlvbik7XG4gICAgICBpZiAoIWFuaW1hdG9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gd2hlbiB0aGUgYW5pbWF0b3IgdXBkYXRlcywgdXBkYXRlIHRoZSB2aWV3IHN0YXRlIHZhbHVlXG4gICAgICBhbmltYXRvci5vbnVwZGF0ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHZpZXdQcm9wc1twcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgIH07XG5cbiAgICAgIGFuaW1hdG9yLm9uY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYWN0aXZlQW5pbWF0b3JzLS07XG4gICAgICB9O1xuXG4gICAgICAvLyBzZXQgYW5pbWF0b3IgdGFyZ2V0XG4gICAgICBhY3RpdmVBbmltYXRvcnMrKztcbiAgICAgIGFuaW1hdG9yLnRhcmdldCA9IGluaXRpYWxQcm9wc1twcm9wZXJ0eV07XG5cbiAgICAgIC8vIHdoZW4gdmFsdWUgaXMgc2V0LCBzZXQgdGhlIGFuaW1hdG9yIHRhcmdldCB2YWx1ZVxuICAgICAgdmFyIHByb3AgPSB7XG4gICAgICAgIGtleTogcHJvcGVydHksXG4gICAgICAgIHNldHRlcjogZnVuY3Rpb24gc2V0dGVyKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFuaW1hdG9yLnRhcmdldCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFuaW1hdG9yLnJlc3RpbmcpIHtcbiAgICAgICAgICAgIGFjdGl2ZUFuaW1hdG9ycysrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhbmltYXRvci50YXJnZXQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0dGVyOiBmdW5jdGlvbiBnZXR0ZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIHZpZXdQcm9wc1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIGFkZCBnZXR0ZXJzIGFuZCBzZXR0ZXJzXG4gICAgICBhZGRHZXRTZXQoW3Byb3BdLCBbdmlld0ludGVybmFsQVBJLCB2aWV3RXh0ZXJuYWxBUEldLCB2aWV3UHJvcHMsIHRydWUpO1xuXG4gICAgICAvLyBhZGQgaXQgdG8gdGhlIGxpc3QgZm9yIGVhc3kgdXBkYXRpbmcgZnJvbSB0aGUgX3dyaXRlIG1ldGhvZFxuICAgICAgYW5pbWF0aW9ucy5wdXNoKGFuaW1hdG9yKTtcbiAgICB9KTtcblxuICAgIC8vIGV4cG9zZSBpbnRlcm5hbCB3cml0ZSBhcGlcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKHRzKSB7XG4gICAgICAgIGFuaW1hdGlvbnMuZm9yRWFjaChmdW5jdGlvbihhbmltYXRpb24pIHtcbiAgICAgICAgICBhbmltYXRpb24uaW50ZXJwb2xhdGUodHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYgYW5pbWF0b3JzIGFyZSBhY3RpdmUsIHdlJ3JlIGJ1c3lcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUFuaW1hdG9ycyA9PT0gMDtcbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge31cbiAgICB9O1xuICB9O1xuXG4gIHZhciBhZGRFdmVudCA9IGZ1bmN0aW9uIGFkZEV2ZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odHlwZSwgZm4pIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbik7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgcmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiByZW1vdmVFdmVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHR5cGUsIGZuKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xuICAgIH07XG4gIH07XG5cbiAgLy8gbWl4aW5cbiAgdmFyIGxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhfcmVmKSB7XG4gICAgdmFyIG1peGluQ29uZmlnID0gX3JlZi5taXhpbkNvbmZpZyxcbiAgICAgIHZpZXdQcm9wcyA9IF9yZWYudmlld1Byb3BzLFxuICAgICAgdmlld0ludGVybmFsQVBJID0gX3JlZi52aWV3SW50ZXJuYWxBUEksXG4gICAgICB2aWV3RXh0ZXJuYWxBUEkgPSBfcmVmLnZpZXdFeHRlcm5hbEFQSSxcbiAgICAgIHZpZXdTdGF0ZSA9IF9yZWYudmlld1N0YXRlLFxuICAgICAgdmlldyA9IF9yZWYudmlldztcblxuICAgIHZhciBldmVudHMgPSBbXTtcblxuICAgIHZhciBhZGQgPSBhZGRFdmVudCh2aWV3LmVsZW1lbnQpO1xuICAgIHZhciByZW1vdmUgPSByZW1vdmVFdmVudCh2aWV3LmVsZW1lbnQpO1xuXG4gICAgdmlld0V4dGVybmFsQVBJLm9uID0gZnVuY3Rpb24odHlwZSwgZm4pIHtcbiAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgZm46IGZuXG4gICAgICB9KTtcbiAgICAgIGFkZCh0eXBlLCBmbik7XG4gICAgfTtcblxuICAgIHZpZXdFeHRlcm5hbEFQSS5vZmYgPSBmdW5jdGlvbih0eXBlLCBmbikge1xuICAgICAgZXZlbnRzLnNwbGljZShcbiAgICAgICAgZXZlbnRzLmZpbmRJbmRleChmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHJldHVybiBldmVudC50eXBlID09PSB0eXBlICYmIGV2ZW50LmZuID09PSBmbjtcbiAgICAgICAgfSksXG4gICAgICAgIDFcbiAgICAgICk7XG4gICAgICByZW1vdmUodHlwZSwgZm4pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge1xuICAgICAgICAvLyBub3QgYnVzeVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHJlbW92ZShldmVudC50eXBlLCBldmVudC5mbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gYWRkIHRvIGV4dGVybmFsIGFwaSBhbmQgbGluayB0byBwcm9wc1xuXG4gIHZhciBhcGlzID0gZnVuY3Rpb24gYXBpcyhfcmVmKSB7XG4gICAgdmFyIG1peGluQ29uZmlnID0gX3JlZi5taXhpbkNvbmZpZyxcbiAgICAgIHZpZXdQcm9wcyA9IF9yZWYudmlld1Byb3BzLFxuICAgICAgdmlld0V4dGVybmFsQVBJID0gX3JlZi52aWV3RXh0ZXJuYWxBUEk7XG5cbiAgICBhZGRHZXRTZXQobWl4aW5Db25maWcsIHZpZXdFeHRlcm5hbEFQSSwgdmlld1Byb3BzKTtcbiAgfTtcblxuICAvLyBhZGQgdG8gc3RhdGUsXG4gIC8vIGFkZCBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHRvIGludGVybmFsIGFuZCBleHRlcm5hbCBhcGkgKGlmIG5vdCBzZXQpXG4gIC8vIHNldCBpbml0aWFsIHN0YXRlIGJhc2VkIG9uIHByb3BzIGluIHZpZXdQcm9wc1xuICAvLyBhcHBseSBhcyB0cmFuc2Zvcm1zIGVhY2ggZnJhbWVcblxuICB2YXIgZGVmYXVsdHMkMSA9IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHNjYWxlWDogMSxcbiAgICBzY2FsZVk6IDEsXG4gICAgdHJhbnNsYXRlWDogMCxcbiAgICB0cmFuc2xhdGVZOiAwLFxuICAgIHJvdGF0ZVg6IDAsXG4gICAgcm90YXRlWTogMCxcbiAgICByb3RhdGVaOiAwXG4gIH07XG5cbiAgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyhfcmVmKSB7XG4gICAgdmFyIG1peGluQ29uZmlnID0gX3JlZi5taXhpbkNvbmZpZyxcbiAgICAgIHZpZXdQcm9wcyA9IF9yZWYudmlld1Byb3BzLFxuICAgICAgdmlld0ludGVybmFsQVBJID0gX3JlZi52aWV3SW50ZXJuYWxBUEksXG4gICAgICB2aWV3RXh0ZXJuYWxBUEkgPSBfcmVmLnZpZXdFeHRlcm5hbEFQSSxcbiAgICAgIHZpZXcgPSBfcmVmLnZpZXc7XG5cbiAgICAvLyBpbml0aWFsIHByb3BzXG4gICAgdmFyIGluaXRpYWxQcm9wcyA9IF9leHRlbmRzKHt9LCB2aWV3UHJvcHMpO1xuXG4gICAgLy8gY3VycmVudCBwcm9wc1xuICAgIHZhciBjdXJyZW50UHJvcHMgPSB7fTtcblxuICAgIC8vIHdlIHdpbGwgYWRkIHRob3NlIHByb3BlcnRpZXMgdG8gdGhlIGV4dGVybmFsIEFQSSBhbmQgbGluayB0aGVtIHRvIHRoZSB2aWV3U3RhdGVcbiAgICBhZGRHZXRTZXQobWl4aW5Db25maWcsIFt2aWV3SW50ZXJuYWxBUEksIHZpZXdFeHRlcm5hbEFQSV0sIHZpZXdQcm9wcyk7XG5cbiAgICAvLyBvdmVycmlkZSByZWN0IG9uIGludGVybmFsIGFuZCBleHRlcm5hbCByZWN0IGdldHRlciBzbyBpdCB0YWtlcyBpbiBhY2NvdW50IHRyYW5zZm9ybXNcbiAgICB2YXIgZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0T2Zmc2V0KCkge1xuICAgICAgcmV0dXJuIFt2aWV3UHJvcHNbJ3RyYW5zbGF0ZVgnXSB8fCAwLCB2aWV3UHJvcHNbJ3RyYW5zbGF0ZVknXSB8fCAwXTtcbiAgICB9O1xuICAgIHZhciBnZXRTY2FsZSA9IGZ1bmN0aW9uIGdldFNjYWxlKCkge1xuICAgICAgcmV0dXJuIFt2aWV3UHJvcHNbJ3NjYWxlWCddIHx8IDAsIHZpZXdQcm9wc1snc2NhbGVZJ10gfHwgMF07XG4gICAgfTtcbiAgICB2YXIgZ2V0UmVjdCA9IGZ1bmN0aW9uIGdldFJlY3QoKSB7XG4gICAgICByZXR1cm4gdmlldy5yZWN0XG4gICAgICAgID8gZ2V0Vmlld1JlY3Qodmlldy5yZWN0LCB2aWV3LmNoaWxkVmlld3MsIGdldE9mZnNldCgpLCBnZXRTY2FsZSgpKVxuICAgICAgICA6IG51bGw7XG4gICAgfTtcbiAgICB2aWV3SW50ZXJuYWxBUEkucmVjdCA9IHsgZ2V0OiBnZXRSZWN0IH07XG4gICAgdmlld0V4dGVybmFsQVBJLnJlY3QgPSB7IGdldDogZ2V0UmVjdCB9O1xuXG4gICAgLy8gYXBwbHkgdmlldyBwcm9wc1xuICAgIG1peGluQ29uZmlnLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2aWV3UHJvcHNba2V5XSA9XG4gICAgICAgIHR5cGVvZiBpbml0aWFsUHJvcHNba2V5XSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICA/IGRlZmF1bHRzJDFba2V5XVxuICAgICAgICAgIDogaW5pdGlhbFByb3BzW2tleV07XG4gICAgfSk7XG5cbiAgICAvLyBleHBvc2UgYXBpXG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHtcbiAgICAgICAgLy8gc2VlIGlmIHByb3BzIGhhdmUgY2hhbmdlZFxuICAgICAgICBpZiAoIXByb3BzSGF2ZUNoYW5nZWQoY3VycmVudFByb3BzLCB2aWV3UHJvcHMpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW92ZXMgZWxlbWVudCB0byBjb3JyZWN0IHBvc2l0aW9uIG9uIHNjcmVlblxuICAgICAgICBhcHBseVN0eWxlcyh2aWV3LmVsZW1lbnQsIHZpZXdQcm9wcyk7XG5cbiAgICAgICAgLy8gc3RvcmUgbmV3IHRyYW5zZm9ybXNcbiAgICAgICAgT2JqZWN0LmFzc2lnbi5hcHBseShcbiAgICAgICAgICBPYmplY3QsXG4gICAgICAgICAgW2N1cnJlbnRQcm9wc10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KHZpZXdQcm9wcykpXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gbm8gbG9uZ2VyIGJ1c3lcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHt9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgcHJvcHNIYXZlQ2hhbmdlZCA9IGZ1bmN0aW9uIHByb3BzSGF2ZUNoYW5nZWQoY3VycmVudFByb3BzLCBuZXdQcm9wcykge1xuICAgIC8vIGRpZmZlcmVudCBhbW91bnQgb2Yga2V5c1xuICAgIGlmIChPYmplY3Qua2V5cyhjdXJyZW50UHJvcHMpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMobmV3UHJvcHMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gbGV0cyBhbmFseXplIHRoZSBpbmRpdmlkdWFsIHByb3BzXG4gICAgZm9yICh2YXIgcHJvcCBpbiBuZXdQcm9wcykge1xuICAgICAgaWYgKG5ld1Byb3BzW3Byb3BdICE9PSBjdXJyZW50UHJvcHNbcHJvcF0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHZhciBhcHBseVN0eWxlcyA9IGZ1bmN0aW9uIGFwcGx5U3R5bGVzKGVsZW1lbnQsIF9yZWYyKSB7XG4gICAgdmFyIG9wYWNpdHkgPSBfcmVmMi5vcGFjaXR5LFxuICAgICAgdHJhbnNsYXRlWCA9IF9yZWYyLnRyYW5zbGF0ZVgsXG4gICAgICB0cmFuc2xhdGVZID0gX3JlZjIudHJhbnNsYXRlWSxcbiAgICAgIHNjYWxlWCA9IF9yZWYyLnNjYWxlWCxcbiAgICAgIHNjYWxlWSA9IF9yZWYyLnNjYWxlWSxcbiAgICAgIHJvdGF0ZVggPSBfcmVmMi5yb3RhdGVYLFxuICAgICAgcm90YXRlWSA9IF9yZWYyLnJvdGF0ZVksXG4gICAgICByb3RhdGVaID0gX3JlZjIucm90YXRlWixcbiAgICAgIGhlaWdodCA9IF9yZWYyLmhlaWdodDtcblxuICAgIHZhciB0cmFuc2Zvcm1zID0gW107XG4gICAgdmFyIHN0eWxlcyA9IFtdO1xuXG4gICAgLy8gdHJhbnNmb3JtIG9yZGVyIGlzIHJlbGV2YW50XG5cbiAgICAvLyAxLiB0cmFuc2xhdGVcbiAgICBpZiAoaXNEZWZpbmVkKHRyYW5zbGF0ZVgpIHx8IGlzRGVmaW5lZCh0cmFuc2xhdGVZKSkge1xuICAgICAgdHJhbnNmb3Jtcy5wdXNoKFxuICAgICAgICAndHJhbnNsYXRlM2QoJyArXG4gICAgICAgICAgKHRyYW5zbGF0ZVggfHwgMCkgK1xuICAgICAgICAgICdweCwgJyArXG4gICAgICAgICAgKHRyYW5zbGF0ZVkgfHwgMCkgK1xuICAgICAgICAgICdweCwgMCknXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIDIuIHNjYWxlXG4gICAgaWYgKGlzRGVmaW5lZChzY2FsZVgpIHx8IGlzRGVmaW5lZChzY2FsZVkpKSB7XG4gICAgICB0cmFuc2Zvcm1zLnB1c2goXG4gICAgICAgICdzY2FsZTNkKCcgK1xuICAgICAgICAgIChpc0RlZmluZWQoc2NhbGVYKSA/IHNjYWxlWCA6IDEpICtcbiAgICAgICAgICAnLCAnICtcbiAgICAgICAgICAoaXNEZWZpbmVkKHNjYWxlWSkgPyBzY2FsZVkgOiAxKSArXG4gICAgICAgICAgJywgMSknXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIDMuIHJvdGF0ZVxuICAgIGlmIChpc0RlZmluZWQocm90YXRlWikgfHwgaXNEZWZpbmVkKHJvdGF0ZVkpIHx8IGlzRGVmaW5lZChyb3RhdGVYKSkge1xuICAgICAgdHJhbnNmb3Jtcy5wdXNoKFxuICAgICAgICAncm90YXRlM2QoJyArXG4gICAgICAgICAgKHJvdGF0ZVggfHwgMCkgK1xuICAgICAgICAgICcsICcgK1xuICAgICAgICAgIChyb3RhdGVZIHx8IDApICtcbiAgICAgICAgICAnLCAnICtcbiAgICAgICAgICAocm90YXRlWiB8fCAwKSArXG4gICAgICAgICAgJywgMzYwZGVnKSdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHRyYW5zZm9ybXNcbiAgICBpZiAodHJhbnNmb3Jtcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlcy5wdXNoKCd0cmFuc2Zvcm06JyArIHRyYW5zZm9ybXMuam9pbignICcpKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgb3BhY2l0eVxuICAgIGlmIChpc0RlZmluZWQob3BhY2l0eSkpIHtcbiAgICAgIHN0eWxlcy5wdXNoKCdvcGFjaXR5OicgKyBvcGFjaXR5KTtcblxuICAgICAgLy8gaWYgd2UgcmVhY2ggemVybywgd2UgbWFrZSB0aGUgZWxlbWVudCBpbmFjY2Vzc2libGVcbiAgICAgIGlmIChvcGFjaXR5ID09PSAwKSB7XG4gICAgICAgIHN0eWxlcy5wdXNoKCd2aXNpYmlsaXR5OmhpZGRlbicpO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiB3ZSdyZSBiZWxvdyAxMDAlIG9wYWNpdHkgdGhpcyBlbGVtZW50IGNhbid0IGJlIGNsaWNrZWRcbiAgICAgIGlmIChvcGFjaXR5IDwgMSkge1xuICAgICAgICBzdHlsZXMucHVzaCgncG9pbnRlci1ldmVudHM6bm9uZTsnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgaGVpZ2h0XG4gICAgaWYgKGlzRGVmaW5lZChoZWlnaHQpKSB7XG4gICAgICBzdHlsZXMucHVzaCgnaGVpZ2h0OicgKyBoZWlnaHQgKyAncHgnKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBzdHlsZXNcbiAgICB2YXIgY3VycmVudFN0eWxlcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpIHx8ICcnO1xuICAgIHZhciBuZXdTdHlsZXMgPSBzdHlsZXMuam9pbignOycpO1xuXG4gICAgLy8gaWYgbmV3IHN0eWxlcyBkb2VzIG5vdCBtYXRjaCBjdXJyZW50IHN0eWxlcywgbGV0cyB1cGRhdGUhXG4gICAgaWYgKFxuICAgICAgbmV3U3R5bGVzLmxlbmd0aCAhPT0gY3VycmVudFN0eWxlcy5sZW5ndGggfHxcbiAgICAgIG5ld1N0eWxlcyAhPT0gY3VycmVudFN0eWxlc1xuICAgICkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgbmV3U3R5bGVzKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIE1peGlucyA9IHtcbiAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICBhbmltYXRpb25zOiBhbmltYXRpb25zLFxuICAgIGFwaXM6IGFwaXNcbiAgfTtcblxuICB2YXIgdXBkYXRlUmVjdCA9IGZ1bmN0aW9uIHVwZGF0ZVJlY3QoKSB7XG4gICAgdmFyIHJlY3QgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgZWxlbWVudCA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBzdHlsZSA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gICAgcmVjdC5wYWRkaW5nVG9wID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ1RvcCwgMTApIHx8IDA7XG4gICAgcmVjdC5tYXJnaW5Ub3AgPSBwYXJzZUludChzdHlsZS5tYXJnaW5Ub3AsIDEwKSB8fCAwO1xuICAgIHJlY3QubWFyZ2luUmlnaHQgPSBwYXJzZUludChzdHlsZS5tYXJnaW5SaWdodCwgMTApIHx8IDA7XG4gICAgcmVjdC5tYXJnaW5Cb3R0b20gPSBwYXJzZUludChzdHlsZS5tYXJnaW5Cb3R0b20sIDEwKSB8fCAwO1xuICAgIHJlY3QubWFyZ2luTGVmdCA9IHBhcnNlSW50KHN0eWxlLm1hcmdpbkxlZnQsIDEwKSB8fCAwO1xuXG4gICAgcmVjdC5sZWZ0ID0gZWxlbWVudC5vZmZzZXRMZWZ0IHx8IDA7XG4gICAgcmVjdC50b3AgPSBlbGVtZW50Lm9mZnNldFRvcCB8fCAwO1xuICAgIHJlY3Qud2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDA7XG4gICAgcmVjdC5oZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAwO1xuXG4gICAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIHJlY3Qud2lkdGg7XG4gICAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0O1xuXG4gICAgcmVjdC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcblxuICAgIHJlY3QuaGlkZGVuID0gZWxlbWVudC5vZmZzZXRQYXJlbnQgPT09IG51bGw7XG5cbiAgICByZXR1cm4gcmVjdDtcbiAgfTtcblxuICB2YXIgY3JlYXRlVmlldyA9XG4gICAgLy8gZGVmYXVsdCB2aWV3IGRlZmluaXRpb25cbiAgICBmdW5jdGlvbiBjcmVhdGVWaWV3KCkge1xuICAgICAgdmFyIF9yZWYgPVxuICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXVxuICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgX3JlZiR0YWcgPSBfcmVmLnRhZyxcbiAgICAgICAgdGFnID0gX3JlZiR0YWcgPT09IHVuZGVmaW5lZCA/ICdkaXYnIDogX3JlZiR0YWcsXG4gICAgICAgIF9yZWYkbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgICAgbmFtZSA9IF9yZWYkbmFtZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9yZWYkbmFtZSxcbiAgICAgICAgX3JlZiRhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX3JlZiRhdHRyaWJ1dGVzID09PSB1bmRlZmluZWQgPyB7fSA6IF9yZWYkYXR0cmlidXRlcyxcbiAgICAgICAgX3JlZiRyZWFkID0gX3JlZi5yZWFkLFxuICAgICAgICByZWFkID0gX3JlZiRyZWFkID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbigpIHt9IDogX3JlZiRyZWFkLFxuICAgICAgICBfcmVmJHdyaXRlID0gX3JlZi53cml0ZSxcbiAgICAgICAgd3JpdGUgPSBfcmVmJHdyaXRlID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbigpIHt9IDogX3JlZiR3cml0ZSxcbiAgICAgICAgX3JlZiRjcmVhdGUgPSBfcmVmLmNyZWF0ZSxcbiAgICAgICAgY3JlYXRlID0gX3JlZiRjcmVhdGUgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uKCkge30gOiBfcmVmJGNyZWF0ZSxcbiAgICAgICAgX3JlZiRkZXN0cm95ID0gX3JlZi5kZXN0cm95LFxuICAgICAgICBkZXN0cm95ID0gX3JlZiRkZXN0cm95ID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbigpIHt9IDogX3JlZiRkZXN0cm95LFxuICAgICAgICBfcmVmJGZpbHRlckZyYW1lQWN0aW8gPSBfcmVmLmZpbHRlckZyYW1lQWN0aW9uc0ZvckNoaWxkLFxuICAgICAgICBmaWx0ZXJGcmFtZUFjdGlvbnNGb3JDaGlsZCA9XG4gICAgICAgICAgX3JlZiRmaWx0ZXJGcmFtZUFjdGlvID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gZnVuY3Rpb24oY2hpbGQsIGFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9ucztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBfcmVmJGZpbHRlckZyYW1lQWN0aW8sXG4gICAgICAgIF9yZWYkZGlkQ3JlYXRlVmlldyA9IF9yZWYuZGlkQ3JlYXRlVmlldyxcbiAgICAgICAgZGlkQ3JlYXRlVmlldyA9XG4gICAgICAgICAgX3JlZiRkaWRDcmVhdGVWaWV3ID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbigpIHt9IDogX3JlZiRkaWRDcmVhdGVWaWV3LFxuICAgICAgICBfcmVmJGlnbm9yZVJlY3QgPSBfcmVmLmlnbm9yZVJlY3QsXG4gICAgICAgIGlnbm9yZVJlY3QgPSBfcmVmJGlnbm9yZVJlY3QgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRpZ25vcmVSZWN0LFxuICAgICAgICBfcmVmJG1peGlucyA9IF9yZWYubWl4aW5zLFxuICAgICAgICBtaXhpbnMgPSBfcmVmJG1peGlucyA9PT0gdW5kZWZpbmVkID8gW10gOiBfcmVmJG1peGlucztcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKFxuICAgICAgICAvLyBlYWNoIHZpZXcgcmVxdWlyZXMgcmVmZXJlbmNlIHRvIHN0b3JlXG4gICAgICAgIHN0b3JlXG4gICAgICApIHtcbiAgICAgICAgdmFyIHByb3BzID1cbiAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMV1cbiAgICAgICAgICAgIDoge307XG5cbiAgICAgICAgLy8gcm9vdCBlbGVtZW50IHNob3VsZCBub3QgYmUgY2hhbmdlZFxuICAgICAgICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQodGFnLCAnZmlsZXBvbmQtLScgKyBuYW1lLCBhdHRyaWJ1dGVzKTtcblxuICAgICAgICAvLyBzdHlsZSByZWZlcmVuY2Ugc2hvdWxkIGFsc28gbm90IGJlIGNoYW5nZWRcbiAgICAgICAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG5cbiAgICAgICAgLy8gZWxlbWVudCByZWN0YW5nbGVcbiAgICAgICAgdmFyIHJlY3QgPSB1cGRhdGVSZWN0KCk7XG4gICAgICAgIHZhciBmcmFtZVJlY3QgPSBudWxsO1xuXG4gICAgICAgIC8vIHByZXR0eSBzZWxmIGV4cGxhbmF0b3J5XG4gICAgICAgIHZhciBjaGlsZFZpZXdzID0gW107XG5cbiAgICAgICAgLy8gbG9hZGVkIG1peGluc1xuICAgICAgICB2YXIgYWN0aXZlTWl4aW5zID0gW107XG5cbiAgICAgICAgLy8gcmVmZXJlbmNlcyB0byBjcmVhdGVkIGNoaWxkcmVuXG4gICAgICAgIHZhciByZWYgPSB7fTtcblxuICAgICAgICAvLyBzdGF0ZSB1c2VkIGZvciBlYWNoIGluc3RhbmNlXG4gICAgICAgIHZhciBzdGF0ZSA9IHt9O1xuXG4gICAgICAgIC8vIGxpc3Qgb2Ygd3JpdGVycyB0aGF0IHdpbGwgYmUgY2FsbGVkIHRvIHVwZGF0ZSB0aGlzIHZpZXdcbiAgICAgICAgdmFyIHdyaXRlcnMgPSBbXG4gICAgICAgICAgd3JpdGUgLy8gZGVmYXVsdCB3cml0ZXJcbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgcmVhZGVycyA9IFtcbiAgICAgICAgICByZWFkIC8vIGRlZmF1bHQgcmVhZGVyXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFyIGRlc3Ryb3llcnMgPSBbXG4gICAgICAgICAgZGVzdHJveSAvLyBkZWZhdWx0IGRlc3Ryb3lcbiAgICAgICAgXTtcblxuICAgICAgICAvLyBjb3JlIHZpZXcgbWV0aG9kc1xuICAgICAgICB2YXIgZ2V0RWxlbWVudCA9IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXRDaGlsZFZpZXdzID0gZnVuY3Rpb24gZ2V0Q2hpbGRWaWV3cygpIHtcbiAgICAgICAgICByZXR1cm4gW10uY29uY2F0KGNoaWxkVmlld3MpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZ2V0UmVmZXJlbmNlID0gZnVuY3Rpb24gZ2V0UmVmZXJlbmNlKCkge1xuICAgICAgICAgIHJldHVybiByZWY7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjcmVhdGVDaGlsZFZpZXcgPSBmdW5jdGlvbiBjcmVhdGVDaGlsZFZpZXcoc3RvcmUpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odmlldywgcHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiB2aWV3KHN0b3JlLCBwcm9wcyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdldFJlY3QgPSBmdW5jdGlvbiBnZXRSZWN0KCkge1xuICAgICAgICAgIGlmIChmcmFtZVJlY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBmcmFtZVJlY3Q7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZyYW1lUmVjdCA9IGdldFZpZXdSZWN0KHJlY3QsIGNoaWxkVmlld3MsIFswLCAwXSwgWzEsIDFdKTtcbiAgICAgICAgICByZXR1cm4gZnJhbWVSZWN0O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZ2V0U3R5bGUgPSBmdW5jdGlvbiBnZXRTdHlsZSgpIHtcbiAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWQgZGF0YSBmcm9tIERPTVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9yZWFkID0gZnVuY3Rpb24gX3JlYWQoKSB7XG4gICAgICAgICAgZnJhbWVSZWN0ID0gbnVsbDtcblxuICAgICAgICAgIC8vIHJlYWQgY2hpbGQgdmlld3NcbiAgICAgICAgICBjaGlsZFZpZXdzLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZC5fcmVhZCgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gdXBkYXRlIG15IHJlY3RhbmdsZVxuICAgICAgICAgIHVwZGF0ZVJlY3QocmVjdCwgZWxlbWVudCwgc3R5bGUpO1xuXG4gICAgICAgICAgLy8gd3JpdGVyc1xuICAgICAgICAgIHJlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihyZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFkZXIoeyByb290OiBpbnRlcm5hbEFQSSwgcHJvcHM6IHByb3BzLCByZWN0OiByZWN0IH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcml0ZSBkYXRhIHRvIERPTVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF93cml0ZSA9IGZ1bmN0aW9uIF93cml0ZSh0cykge1xuICAgICAgICAgIHZhciBmcmFtZUFjdGlvbnMgPVxuICAgICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBhcmd1bWVudHNbMV1cbiAgICAgICAgICAgICAgOiBbXTtcblxuICAgICAgICAgIC8vIGlmIG5vIGFjdGlvbnMsIHdlIGFzc3VtZSB0aGF0IHRoZSB2aWV3IGlzIHJlc3RpbmdcbiAgICAgICAgICB2YXIgcmVzdGluZyA9IGZyYW1lQWN0aW9ucy5sZW5ndGggPT09IDA7XG5cbiAgICAgICAgICAvLyB3cml0ZXJzXG4gICAgICAgICAgd3JpdGVycy5mb3JFYWNoKGZ1bmN0aW9uKHdyaXRlcikge1xuICAgICAgICAgICAgdmFyIHdyaXRlclJlc3RpbmcgPSB3cml0ZXIoe1xuICAgICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgICAgIHJvb3Q6IGludGVybmFsQVBJLFxuICAgICAgICAgICAgICBhY3Rpb25zOiBmcmFtZUFjdGlvbnMsXG4gICAgICAgICAgICAgIHRpbWVzdGFtcDogdHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHdyaXRlclJlc3RpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHJlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIHJ1biBtaXhpbnNcbiAgICAgICAgICBhY3RpdmVNaXhpbnMuZm9yRWFjaChmdW5jdGlvbihtaXhpbikge1xuICAgICAgICAgICAgLy8gaWYgb25lIG9mIHRoZSBtaXhpbnMgaXMgc3RpbGwgYnVzeSBhZnRlciB3cml0ZSBvcGVyYXRpb24sIHdlIGFyZSBub3QgcmVzdGluZ1xuICAgICAgICAgICAgdmFyIG1peGluUmVzdGluZyA9IG1peGluLndyaXRlKHRzKTtcbiAgICAgICAgICAgIGlmIChtaXhpblJlc3RpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHJlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIHVwZGF0ZXMgY2hpbGQgdmlld3MgdGhhdCBhcmUgY3VycmVudGx5IGF0dGFjaGVkIHRvIHRoZSBET01cbiAgICAgICAgICBjaGlsZFZpZXdzXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAhIWNoaWxkLmVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICAgICAgICAvLyBpZiBhIGNoaWxkIHZpZXcgaXMgbm90IHJlc3RpbmcsIHdlIGFyZSBub3QgcmVzdGluZ1xuICAgICAgICAgICAgICB2YXIgY2hpbGRSZXN0aW5nID0gY2hpbGQuX3dyaXRlKFxuICAgICAgICAgICAgICAgIHRzLFxuICAgICAgICAgICAgICAgIGZpbHRlckZyYW1lQWN0aW9uc0ZvckNoaWxkKGNoaWxkLCBmcmFtZUFjdGlvbnMpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmICghY2hpbGRSZXN0aW5nKSB7XG4gICAgICAgICAgICAgICAgcmVzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIGFwcGVuZCBuZXcgZWxlbWVudHMgdG8gRE9NIGFuZCB1cGRhdGUgdGhvc2VcbiAgICAgICAgICBjaGlsZFZpZXdzXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAhY2hpbGQuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkLCBpbmRleCkge1xuICAgICAgICAgICAgICAvLyBhcHBlbmQgdG8gRE9NXG4gICAgICAgICAgICAgIGludGVybmFsQVBJLmFwcGVuZENoaWxkKGNoaWxkLmVsZW1lbnQsIGluZGV4KTtcblxuICAgICAgICAgICAgICAvLyBjYWxsIHJlYWQgKG5lZWQgdG8ga25vdyB0aGUgc2l6ZSBvZiB0aGVzZSBlbGVtZW50cylcbiAgICAgICAgICAgICAgY2hpbGQuX3JlYWQoKTtcblxuICAgICAgICAgICAgICAvLyByZS1jYWxsIHdyaXRlXG4gICAgICAgICAgICAgIGNoaWxkLl93cml0ZSh0cywgZmlsdGVyRnJhbWVBY3Rpb25zRm9yQ2hpbGQoY2hpbGQsIGZyYW1lQWN0aW9ucykpO1xuXG4gICAgICAgICAgICAgIC8vIHdlIGp1c3QgYWRkZWQgc29tdGhpbmcgdG8gdGhlIGRvbSwgbm8gcmVzdFxuICAgICAgICAgICAgICByZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIGxldCBwYXJlbnQga25vdyBpZiB3ZSBhcmUgcmVzdGluZ1xuICAgICAgICAgIHJldHVybiByZXN0aW5nO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBfZGVzdHJveSA9IGZ1bmN0aW9uIF9kZXN0cm95KCkge1xuICAgICAgICAgIGFjdGl2ZU1peGlucy5mb3JFYWNoKGZ1bmN0aW9uKG1peGluKSB7XG4gICAgICAgICAgICByZXR1cm4gbWl4aW4uZGVzdHJveSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRlc3Ryb3llcnMuZm9yRWFjaChmdW5jdGlvbihkZXN0cm95ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBkZXN0cm95ZXIoeyByb290OiBpbnRlcm5hbEFQSSB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjaGlsZFZpZXdzLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZC5fZGVzdHJveSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNoYXJlZEFQSVxuICAgICAgICB2YXIgc2hhcmVkQVBJRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgICBlbGVtZW50OiB7XG4gICAgICAgICAgICBnZXQ6IGdldEVsZW1lbnRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBnZXQ6IGdldFN0eWxlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGlsZFZpZXdzOiB7XG4gICAgICAgICAgICBnZXQ6IGdldENoaWxkVmlld3NcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gcHJpdmF0ZSBBUEkgZGVmaW5pdGlvblxuICAgICAgICB2YXIgaW50ZXJuYWxBUElEZWZpbml0aW9uID0gX2V4dGVuZHMoe30sIHNoYXJlZEFQSURlZmluaXRpb24sIHtcbiAgICAgICAgICByZWN0OiB7XG4gICAgICAgICAgICBnZXQ6IGdldFJlY3RcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLy8gYWNjZXNzIHRvIGN1c3RvbSBjaGlsZHJlbiByZWZlcmVuY2VzXG4gICAgICAgICAgcmVmOiB7XG4gICAgICAgICAgICBnZXQ6IGdldFJlZmVyZW5jZVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICAvLyBkb20gbW9kaWZpZXJzXG4gICAgICAgICAgaXM6IGZ1bmN0aW9uIGlzKG5lZWRsZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWUgPT09IG5lZWRsZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFwcGVuZENoaWxkOiBhcHBlbmRDaGlsZChlbGVtZW50KSxcbiAgICAgICAgICBjcmVhdGVDaGlsZFZpZXc6IGNyZWF0ZUNoaWxkVmlldyhzdG9yZSksXG4gICAgICAgICAgYXBwZW5kQ2hpbGRWaWV3OiBhcHBlbmRDaGlsZFZpZXcoZWxlbWVudCwgY2hpbGRWaWV3cyksXG4gICAgICAgICAgcmVtb3ZlQ2hpbGRWaWV3OiByZW1vdmVDaGlsZFZpZXcoZWxlbWVudCwgY2hpbGRWaWV3cyksXG4gICAgICAgICAgcmVnaXN0ZXJXcml0ZXI6IGZ1bmN0aW9uIHJlZ2lzdGVyV3JpdGVyKHdyaXRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHdyaXRlcnMucHVzaCh3cml0ZXIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaXN0ZXJSZWFkZXI6IGZ1bmN0aW9uIHJlZ2lzdGVyUmVhZGVyKHJlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWRlcnMucHVzaChyZWFkZXIpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICAvLyBhY2Nlc3MgdG8gZGF0YSBzdG9yZVxuICAgICAgICAgIGRpc3BhdGNoOiBzdG9yZS5kaXNwYXRjaCxcbiAgICAgICAgICBxdWVyeTogc3RvcmUucXVlcnlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcHVibGljIHZpZXcgQVBJIG1ldGhvZHNcbiAgICAgICAgdmFyIGV4dGVybmFsQVBJRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgICBlbGVtZW50OiB7XG4gICAgICAgICAgICBnZXQ6IGdldEVsZW1lbnRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkVmlld3M6IHtcbiAgICAgICAgICAgIGdldDogZ2V0Q2hpbGRWaWV3c1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVjdDoge1xuICAgICAgICAgICAgZ2V0OiBnZXRSZWN0XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1JlY3RJZ25vcmVkOiBmdW5jdGlvbiBpc1JlY3RJZ25vcmVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlnbm9yZVJlY3Q7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfcmVhZDogX3JlYWQsXG4gICAgICAgICAgX3dyaXRlOiBfd3JpdGUsXG4gICAgICAgICAgX2Rlc3Ryb3k6IF9kZXN0cm95XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gbWl4aW4gQVBJIG1ldGhvZHNcbiAgICAgICAgdmFyIG1peGluQVBJRGVmaW5pdGlvbiA9IF9leHRlbmRzKHt9LCBzaGFyZWRBUElEZWZpbml0aW9uLCB7XG4gICAgICAgICAgcmVjdDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYWRkIG1peGluIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgZm9yaW4obWl4aW5zLCBmdW5jdGlvbihuYW1lLCBjb25maWcpIHtcbiAgICAgICAgICB2YXIgbWl4aW5BUEkgPSBNaXhpbnNbbmFtZV0oe1xuICAgICAgICAgICAgbWl4aW5Db25maWc6IGNvbmZpZyxcbiAgICAgICAgICAgIHZpZXdQcm9wczogcHJvcHMsXG4gICAgICAgICAgICB2aWV3U3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgdmlld0ludGVybmFsQVBJOiBpbnRlcm5hbEFQSURlZmluaXRpb24sXG4gICAgICAgICAgICB2aWV3RXh0ZXJuYWxBUEk6IGV4dGVybmFsQVBJRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHZpZXc6IGNyZWF0ZU9iamVjdChtaXhpbkFQSURlZmluaXRpb24pXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAobWl4aW5BUEkpIHtcbiAgICAgICAgICAgIGFjdGl2ZU1peGlucy5wdXNoKG1peGluQVBJKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNvbnN0cnVjdCBwcml2YXRlIGFwaVxuICAgICAgICB2YXIgaW50ZXJuYWxBUEkgPSBjcmVhdGVPYmplY3QoaW50ZXJuYWxBUElEZWZpbml0aW9uKTtcblxuICAgICAgICAvLyBjcmVhdGUgdGhlIHZpZXdcbiAgICAgICAgY3JlYXRlKHtcbiAgICAgICAgICByb290OiBpbnRlcm5hbEFQSSxcbiAgICAgICAgICBwcm9wczogcHJvcHNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYXBwZW5kIGNyZWF0ZWQgY2hpbGQgdmlld3MgdG8gcm9vdCBub2RlXG4gICAgICAgIHZhciBjaGlsZENvdW50ID0gZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IC8vIG5lZWQgdG8ga25vdyB0aGUgY3VycmVudCBjaGlsZCBjb3VudCBzbyBhcHBlbmRpbmcgaGFwcGVucyBpbiBjb3JyZWN0IG9yZGVyXG4gICAgICAgIGNoaWxkVmlld3MuZm9yRWFjaChmdW5jdGlvbihjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICBpbnRlcm5hbEFQSS5hcHBlbmRDaGlsZChjaGlsZC5lbGVtZW50LCBjaGlsZENvdW50ICsgaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYWxsIGRpZCBjcmVhdGVcbiAgICAgICAgZGlkQ3JlYXRlVmlldyhpbnRlcm5hbEFQSSk7XG5cbiAgICAgICAgLy8gZXhwb3NlIHB1YmxpYyBhcGlcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU9iamVjdChleHRlcm5hbEFQSURlZmluaXRpb24sIHByb3BzKTtcbiAgICAgIH07XG4gICAgfTtcblxuICB2YXIgY3JlYXRlUGFpbnRlciA9IGZ1bmN0aW9uIGNyZWF0ZVBhaW50ZXIodXBkYXRlKSB7XG4gICAgdmFyIGZwcyA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDYwO1xuXG4gICAgdmFyIGludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICB2YXIgbGFzdCA9IG51bGw7XG4gICAgdmFyIGZyYW1lID0gbnVsbDtcblxuICAgIHZhciB0aWNrID0gZnVuY3Rpb24gdGljayh0cykge1xuICAgICAgLy8gcXVldWUgbmV4dCB0aWNrXG4gICAgICBmcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG5cbiAgICAgIC8vIGxpbWl0IGZwc1xuICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIGxhc3QgPSB0cztcbiAgICAgIH1cblxuICAgICAgdmFyIGRlbHRhID0gdHMgLSBsYXN0O1xuXG4gICAgICBpZiAoZGVsdGEgPD0gaW50ZXJ2YWwpIHtcbiAgICAgICAgLy8gc2tpcCBmcmFtZVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGFsaWduIG5leHQgZnJhbWVcbiAgICAgIGxhc3QgPSB0cyAtIGRlbHRhICUgaW50ZXJ2YWw7XG5cbiAgICAgIC8vIHVwZGF0ZSB2aWV3XG4gICAgICB1cGRhdGUodHMpO1xuICAgIH07XG5cbiAgICB0aWNrKHBlcmZvcm1hbmNlLm5vdygpKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY3JlYXRlVXBkYXRlciA9IGZ1bmN0aW9uIGNyZWF0ZVVwZGF0ZXIoYXBwcywgcmVhZGVyLCB3cml0ZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odHMpIHtcbiAgICAgIC8vIGFsbCByZWFkcyBmaXJzdCAoYXMgdGhlc2UgYXJlIGZyZWUgYXQgdGhlIHN0YXJ0IG9mIHRoZSBmcmFtZSlcbiAgICAgIGFwcHMuZm9yRWFjaChmdW5jdGlvbihhcHApIHtcbiAgICAgICAgcmV0dXJuIGFwcFtyZWFkZXJdKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gbm93IHVwZGF0ZSB0aGUgRE9NXG4gICAgICBhcHBzLmZvckVhY2goZnVuY3Rpb24oYXBwKSB7XG4gICAgICAgIHJldHVybiBhcHBbd3JpdGVyXSh0cyk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBjcmVhdGVSb3V0ZSA9IGZ1bmN0aW9uIGNyZWF0ZVJvdXRlKHJvdXRlcykge1xuICAgIHJldHVybiBmdW5jdGlvbihfcmVmKSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgICAgcHJvcHMgPSBfcmVmLnByb3BzLFxuICAgICAgICBfcmVmJGFjdGlvbnMgPSBfcmVmLmFjdGlvbnMsXG4gICAgICAgIGFjdGlvbnMgPSBfcmVmJGFjdGlvbnMgPT09IHVuZGVmaW5lZCA/IFtdIDogX3JlZiRhY3Rpb25zO1xuXG4gICAgICBhY3Rpb25zXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHJvdXRlc1thY3Rpb24udHlwZV07XG4gICAgICAgIH0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICAgIHJldHVybiByb3V0ZXNbYWN0aW9uLnR5cGVdKHtcbiAgICAgICAgICAgIHJvb3Q6IHJvb3QsXG4gICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbi5kYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGluc2VydEJlZm9yZSA9IGZ1bmN0aW9uIGluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSk7XG4gIH07XG5cbiAgdmFyIGluc2VydEFmdGVyID0gZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xuICAgIHJldHVybiByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgbmV3Tm9kZSxcbiAgICAgIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmdcbiAgICApO1xuICB9O1xuXG4gIHZhciBpc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgfTtcblxuICB2YXIgdHJpbSA9IGZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gICAgcmV0dXJuIHN0ci50cmltKCk7XG4gIH07XG5cbiAgdmFyIHRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gJycgKyB2YWx1ZTtcbiAgfTtcblxuICB2YXIgdG9BcnJheSQxID0gZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICAgIHZhciBzcGxpdHRlciA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcsJztcblxuICAgIGlmIChpc0VtcHR5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRvU3RyaW5nKHZhbHVlKVxuICAgICAgLnNwbGl0KHNwbGl0dGVyKVxuICAgICAgLm1hcCh0cmltKVxuICAgICAgLmZpbHRlcihmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5sZW5ndGg7XG4gICAgICB9KTtcbiAgfTtcblxuICB2YXIgaXNCb29sZWFuID0gZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xuICB9O1xuXG4gIHZhciB0b0Jvb2xlYW4gPSBmdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWUpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuKHZhbHVlKSA/IHZhbHVlIDogdmFsdWUgPT09ICd0cnVlJztcbiAgfTtcblxuICB2YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICB9O1xuXG4gIHZhciB0b051bWJlciA9IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKVxuICAgICAgPyB2YWx1ZVxuICAgICAgOiBpc1N0cmluZyh2YWx1ZSkgPyB0b1N0cmluZyh2YWx1ZSkucmVwbGFjZSgvW2Etel0rL2dpLCAnJykgOiAwO1xuICB9O1xuXG4gIHZhciB0b0ludCA9IGZ1bmN0aW9uIHRvSW50KHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHRvTnVtYmVyKHZhbHVlKSwgMTApO1xuICB9O1xuXG4gIHZhciB0b0Zsb2F0ID0gZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHRvTnVtYmVyKHZhbHVlKSk7XG4gIH07XG5cbiAgdmFyIGlzSW50ID0gZnVuY3Rpb24gaXNJbnQodmFsdWUpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIGlzRmluaXRlKHZhbHVlKSAmJiBNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWU7XG4gIH07XG5cbiAgdmFyIHRvQnl0ZXMgPSBmdW5jdGlvbiB0b0J5dGVzKHZhbHVlKSB7XG4gICAgLy8gaXMgaW4gYnl0ZXNcbiAgICBpZiAoaXNJbnQodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gaXMgbmF0dXJhbCBmaWxlIHNpemVcbiAgICB2YXIgbmF0dXJhbEZpbGVTaXplID0gdG9TdHJpbmcodmFsdWUpLnRyaW0oKTtcblxuICAgIC8vIGlmIGlzIHZhbHVlIGluIG1lZ2FieXRlc1xuICAgIGlmICgvTUIkL2kudGVzdChuYXR1cmFsRmlsZVNpemUpKSB7XG4gICAgICBuYXR1cmFsRmlsZVNpemUgPSBuYXR1cmFsRmlsZVNpemUucmVwbGFjZSgvTUIkaS8sICcnKS50cmltKCk7XG4gICAgICByZXR1cm4gdG9JbnQobmF0dXJhbEZpbGVTaXplKSAqIDEwMDAgKiAxMDAwO1xuICAgIH1cblxuICAgIC8vIGlmIGlzIHZhbHVlIGluIGtpbG9ieXRlc1xuICAgIGlmICgvS0IvaS50ZXN0KG5hdHVyYWxGaWxlU2l6ZSkpIHtcbiAgICAgIG5hdHVyYWxGaWxlU2l6ZSA9IG5hdHVyYWxGaWxlU2l6ZS5yZXBsYWNlKC9LQiRpLywgJycpLnRyaW0oKTtcbiAgICAgIHJldHVybiB0b0ludChuYXR1cmFsRmlsZVNpemUpICogMTAwMDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9JbnQobmF0dXJhbEZpbGVTaXplKTtcbiAgfTtcblxuICB2YXIgdG9GdW5jdGlvblJlZmVyZW5jZSA9IGZ1bmN0aW9uIHRvRnVuY3Rpb25SZWZlcmVuY2Uoc3RyaW5nKSB7XG4gICAgdmFyIHJlZiA9IHNlbGY7XG4gICAgdmFyIGxldmVscyA9IHN0cmluZy5zcGxpdCgnLicpO1xuICAgIHZhciBsZXZlbCA9IG51bGw7XG4gICAgd2hpbGUgKChsZXZlbCA9IGxldmVscy5zaGlmdCgpKSkge1xuICAgICAgcmVmID0gcmVmW2xldmVsXTtcbiAgICAgIGlmICghcmVmKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVmO1xuICB9O1xuXG4gIHZhciBtZXRob2RzID0ge1xuICAgIHByb2Nlc3M6ICdQT1NUJyxcbiAgICByZXZlcnQ6ICdERUxFVEUnLFxuICAgIGZldGNoOiAnR0VUJyxcbiAgICByZXN0b3JlOiAnR0VUJyxcbiAgICBsb2FkOiAnR0VUJ1xuICB9O1xuXG4gIHZhciBjcmVhdGVTZXJ2ZXJBUEkgPSBmdW5jdGlvbiBjcmVhdGVTZXJ2ZXJBUEkob3V0bGluZSkge1xuICAgIHZhciBhcGkgPSB7fTtcblxuICAgIGFwaS51cmwgPSBpc1N0cmluZyhvdXRsaW5lKSA/IG91dGxpbmUgOiBvdXRsaW5lLnVybCB8fCAnJztcbiAgICBhcGkudGltZW91dCA9IG91dGxpbmUudGltZW91dCA/IHBhcnNlSW50KG91dGxpbmUudGltZW91dCwgMTApIDogNzAwMDtcblxuICAgIGZvcmluKG1ldGhvZHMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgYXBpW2tleV0gPSBjcmVhdGVBY3Rpb24oa2V5LCBvdXRsaW5lW2tleV0sIG1ldGhvZHNba2V5XSwgYXBpLnRpbWVvdXQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFwaTtcbiAgfTtcblxuICB2YXIgY3JlYXRlQWN0aW9uID0gZnVuY3Rpb24gY3JlYXRlQWN0aW9uKG5hbWUsIG91dGxpbmUsIG1ldGhvZCwgdGltZW91dCkge1xuICAgIC8vIGlzIGV4cGxpY2l0ZWx5IHNldCB0byBudWxsIHNvIGRpc2FibGVcbiAgICBpZiAob3V0bGluZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gaWYgaXMgY3VzdG9tIGZ1bmN0aW9uLCBkb25lISBEZXYgaGFuZGxlcyBldmVyeXRoaW5nLlxuICAgIGlmICh0eXBlb2Ygb3V0bGluZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG91dGxpbmU7XG4gICAgfVxuXG4gICAgLy8gYnVpbGQgYWN0aW9uIG9iamVjdFxuICAgIHZhciBhY3Rpb24gPSB7XG4gICAgICB1cmw6IG1ldGhvZCA9PT0gJ0dFVCcgPyAnPycgKyBuYW1lICsgJz0nIDogJycsXG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAgIHRpbWVvdXQ6IHRpbWVvdXRcbiAgICB9O1xuXG4gICAgLy8gaXMgYSBzaW5nbGUgdXJsXG4gICAgaWYgKGlzU3RyaW5nKG91dGxpbmUpKSB7XG4gICAgICBhY3Rpb24udXJsID0gb3V0bGluZTtcbiAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfVxuXG4gICAgLy8gb3ZlcndyaXRlXG4gICAgT2JqZWN0LmFzc2lnbihhY3Rpb24sIG91dGxpbmUpO1xuXG4gICAgLy8gc2VlIGlmIHNob3VsZCByZWZvcm1hdCBoZWFkZXJzO1xuICAgIGlmIChpc1N0cmluZyhhY3Rpb24uaGVhZGVycykpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGFjdGlvbi5oZWFkZXJzLnNwbGl0KC86KC4rKS8pO1xuICAgICAgYWN0aW9uLmhlYWRlcnMgPSB7XG4gICAgICAgIGhlYWRlcjogcGFydHNbMF0sXG4gICAgICAgIHZhbHVlOiBwYXJ0c1sxXVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBpZiBpcyBib29sIHdpdGhDcmVkZW50aWFsc1xuICAgIGFjdGlvbi53aXRoQ3JlZGVudGlhbHMgPSB0b0Jvb2xlYW4oYWN0aW9uLndpdGhDcmVkZW50aWFscyk7XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9O1xuXG4gIHZhciB0b1NlcnZlckFQSSA9IGZ1bmN0aW9uIHRvU2VydmVyQVBJKHZhbHVlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVNlcnZlckFQSSh2YWx1ZSk7XG4gIH07XG5cbiAgdmFyIGlzTnVsbCA9IGZ1bmN0aW9uIGlzTnVsbCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbiAgfTtcblxuICB2YXIgaXNPYmplY3QgPSBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiAoXG4gICAgICAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PVxuICAgICAgICAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbFxuICAgICk7XG4gIH07XG5cbiAgdmFyIGlzQVBJID0gZnVuY3Rpb24gaXNBUEkodmFsdWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgaXNPYmplY3QodmFsdWUpICYmXG4gICAgICBpc1N0cmluZyh2YWx1ZS51cmwpICYmXG4gICAgICBpc09iamVjdCh2YWx1ZS5wcm9jZXNzKSAmJlxuICAgICAgaXNPYmplY3QodmFsdWUucmV2ZXJ0KSAmJlxuICAgICAgaXNPYmplY3QodmFsdWUucmVzdG9yZSkgJiZcbiAgICAgIGlzT2JqZWN0KHZhbHVlLmZldGNoKVxuICAgICk7XG4gIH07XG5cbiAgdmFyIGdldFR5cGUgPSBmdW5jdGlvbiBnZXRUeXBlKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG5cbiAgICBpZiAoaXNOdWxsKHZhbHVlKSkge1xuICAgICAgcmV0dXJuICdudWxsJztcbiAgICB9XG5cbiAgICBpZiAoaXNJbnQodmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2ludCc7XG4gICAgfVxuXG4gICAgaWYgKC9eWzAtOV0rID8oPzpHQnxNQnxLQikkL2dpLnRlc3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2J5dGVzJztcbiAgICB9XG5cbiAgICBpZiAoaXNBUEkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FwaSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpO1xuICB9O1xuXG4gIHZhciBjb252ZXJzaW9uVGFibGUgPSB7XG4gICAgYXJyYXk6IHRvQXJyYXkkMSxcbiAgICBib29sZWFuOiB0b0Jvb2xlYW4sXG4gICAgaW50OiBmdW5jdGlvbiBpbnQodmFsdWUpIHtcbiAgICAgIHJldHVybiBnZXRUeXBlKHZhbHVlKSA9PT0gJ2J5dGVzJyA/IHRvQnl0ZXModmFsdWUpIDogdG9JbnQodmFsdWUpO1xuICAgIH0sXG4gICAgZmxvYXQ6IHRvRmxvYXQsXG4gICAgYnl0ZXM6IHRvQnl0ZXMsXG4gICAgc3RyaW5nOiB0b1N0cmluZyxcbiAgICBzZXJ2ZXJhcGk6IHRvU2VydmVyQVBJLFxuICAgIGZ1bmN0aW9uOiBmdW5jdGlvbiBfZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0b0Z1bmN0aW9uUmVmZXJlbmNlKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNvbnZlcnRUbyA9IGZ1bmN0aW9uIGNvbnZlcnRUbyh2YWx1ZSwgdHlwZSkge1xuICAgIHJldHVybiBjb252ZXJzaW9uVGFibGVbdHlwZV0odmFsdWUpO1xuICB9O1xuXG4gIHZhciBnZXRWYWx1ZUJ5VHlwZSA9IGZ1bmN0aW9uIGdldFZhbHVlQnlUeXBlKFxuICAgIG5ld1ZhbHVlLFxuICAgIGRlZmF1bHRWYWx1ZSxcbiAgICB2YWx1ZVR5cGVcbiAgKSB7XG4gICAgLy8gY2FuIGFsd2F5cyBhc3NpZ24gZGVmYXVsdCB2YWx1ZVxuICAgIGlmIChuZXdWYWx1ZSA9PT0gZGVmYXVsdFZhbHVlKSB7XG4gICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLy8gZ2V0IHRoZSB0eXBlIG9mIHRoZSBuZXcgdmFsdWVcbiAgICB2YXIgbmV3VmFsdWVUeXBlID0gZ2V0VHlwZShuZXdWYWx1ZSk7XG5cbiAgICAvLyBpcyB2YWxpZCB0eXBlP1xuICAgIGlmIChuZXdWYWx1ZVR5cGUgIT09IHZhbHVlVHlwZSkge1xuICAgICAgLy8gaXMgc3RyaW5nIGlucHV0LCBsZXQncyBhdHRlbXB0IHRvIGNvbnZlcnRcbiAgICAgIHZhciBjb252ZXJ0ZWRWYWx1ZSA9IGNvbnZlcnRUbyhuZXdWYWx1ZSwgdmFsdWVUeXBlKTtcblxuICAgICAgLy8gd2hhdCBpcyB0aGUgdHlwZSBub3dcbiAgICAgIG5ld1ZhbHVlVHlwZSA9IGdldFR5cGUoY29udmVydGVkVmFsdWUpO1xuXG4gICAgICAvLyBubyB2YWxpZCBjb252ZXJzaW9ucyBmb3VuZFxuICAgICAgaWYgKGNvbnZlcnRlZFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHRocm93ICdUcnlpbmcgdG8gYXNzaWduIHZhbHVlIHdpdGggaW5jb3JyZWN0IHR5cGUgdG8gXCInICtcbiAgICAgICAgICBvcHRpb24gK1xuICAgICAgICAgICdcIiwgYWxsb3dlZCB0eXBlOiBcIicgK1xuICAgICAgICAgIHZhbHVlVHlwZSArXG4gICAgICAgICAgJ1wiJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gY29udmVydGVkVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYXNzaWduIG5ldyB2YWx1ZVxuICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgfTtcblxuICB2YXIgY3JlYXRlT3B0aW9uID0gZnVuY3Rpb24gY3JlYXRlT3B0aW9uKG9wdGlvbiwgZGVmYXVsdFZhbHVlLCB2YWx1ZVR5cGUpIHtcbiAgICB2YXIgY3VycmVudFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgIGN1cnJlbnRWYWx1ZSA9IGdldFZhbHVlQnlUeXBlKG5ld1ZhbHVlLCBkZWZhdWx0VmFsdWUsIHZhbHVlVHlwZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY3JlYXRlT3B0aW9ucyA9IGZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMob3B0aW9ucykge1xuICAgIHZhciBvYmogPSB7fTtcbiAgICBmb3JpbihvcHRpb25zLCBmdW5jdGlvbihwcm9wKSB7XG4gICAgICB2YXIgb3B0aW9uRGVmaW5pdGlvbiA9IG9wdGlvbnNbcHJvcF07XG4gICAgICBvYmpbcHJvcF0gPSBjcmVhdGVPcHRpb24ocHJvcCwgb3B0aW9uRGVmaW5pdGlvblswXSwgb3B0aW9uRGVmaW5pdGlvblsxXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNyZWF0ZU9iamVjdChvYmopO1xuICB9O1xuXG4gIHZhciBjcmVhdGVJbml0aWFsU3RhdGUgPSBmdW5jdGlvbiBjcmVhdGVJbml0aWFsU3RhdGUob3B0aW9ucykge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBtb2RlbFxuICAgICAgaXRlbXM6IFtdLFxuXG4gICAgICAvLyBvcHRpb25zXG4gICAgICBvcHRpb25zOiBjcmVhdGVPcHRpb25zKG9wdGlvbnMpXG4gICAgfTtcbiAgfTtcblxuICB2YXIgZnJvbUNhbWVscyA9IGZ1bmN0aW9uIGZyb21DYW1lbHMoc3RyaW5nKSB7XG4gICAgdmFyIHNlcGFyYXRvciA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICctJztcbiAgICByZXR1cm4gc3RyaW5nXG4gICAgICAuc3BsaXQoLyg/PVtBLVpdKS8pXG4gICAgICAubWFwKGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnQudG9Mb3dlckNhc2UoKTtcbiAgICAgIH0pXG4gICAgICAuam9pbihzZXBhcmF0b3IpO1xuICB9O1xuXG4gIHZhciBjcmVhdGVPcHRpb25BUEkgPSBmdW5jdGlvbiBjcmVhdGVPcHRpb25BUEkoc3RvcmUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb2JqID0ge307XG4gICAgZm9yaW4ob3B0aW9ucywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICBvYmpba2V5XSA9IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHN0b3JlLmdldFN0YXRlKCkub3B0aW9uc1trZXldO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKCdTRVRfJyArIGZyb21DYW1lbHMoa2V5LCAnXycpLnRvVXBwZXJDYXNlKCksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZU9wdGlvbkFjdGlvbnMgPSBmdW5jdGlvbiBjcmVhdGVPcHRpb25BY3Rpb25zKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gsIHF1ZXJ5LCBzdGF0ZSkge1xuICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgZm9yaW4ob3B0aW9ucywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHZhciBuYW1lID0gZnJvbUNhbWVscyhrZXksICdfJykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgb2JqWydTRVRfJyArIG5hbWVdID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0YXRlLm9wdGlvbnNba2V5XSA9IGFjdGlvbi52YWx1ZTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgIC8vIG5vcGUsIGZhaWxlZFxuXG4gICAgICAgICAgLy8gd2Ugc3VjY2Vzc2Z1bGx5IHNldCB0aGUgdmFsdWUgb2YgdGhpcyBvcHRpb25cbiAgICAgICAgICBkaXNwYXRjaCgnRElEX1NFVF8nICsgbmFtZSwgeyB2YWx1ZTogc3RhdGUub3B0aW9uc1trZXldIH0pO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZU9wdGlvblF1ZXJpZXMgPSBmdW5jdGlvbiBjcmVhdGVPcHRpb25RdWVyaWVzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgIGZvcmluKG9wdGlvbnMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBvYmpbJ0dFVF8nICsgZnJvbUNhbWVscyhrZXksICdfJykudG9VcHBlckNhc2UoKV0gPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUub3B0aW9uc1trZXldO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIEludGVyYWN0aW9uTWV0aG9kID0ge1xuICAgIEFQSTogMSxcbiAgICBEUk9QOiAyLFxuICAgIEJST1dTRTogMyxcbiAgICBQQVNURTogNCxcbiAgICBOT05FOiA1XG4gIH07XG5cbiAgdmFyIGdldFVuaXF1ZUlkID0gZnVuY3Rpb24gZ2V0VW5pcXVlSWQoKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKClcbiAgICAgIC50b1N0cmluZygzNilcbiAgICAgIC5zdWJzdHIoMiwgOSk7XG4gIH07XG5cbiAgdmFyIGZvckVhY2hEZWxheWVkID0gZnVuY3Rpb24gZm9yRWFjaERlbGF5ZWQoaXRlbXMsIGNiKSB7XG4gICAgdmFyIGRlbGF5ID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogNzU7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNiKGl0ZW0pO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSwgZGVsYXkgKiBpbmRleCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgYXJyYXlSZW1vdmUgPSBmdW5jdGlvbiBhcnJheVJlbW92ZShhcnIsIGluZGV4KSB7XG4gICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIHZhciBvbiA9IGZ1bmN0aW9uIG9uKCkge1xuICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICB2YXIgb2ZmID0gZnVuY3Rpb24gb2ZmKGV2ZW50LCBjYikge1xuICAgICAgYXJyYXlSZW1vdmUoXG4gICAgICAgIGxpc3RlbmVycyxcbiAgICAgICAgbGlzdGVuZXJzLmZpbmRJbmRleChmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lci5ldmVudCA9PT0gZXZlbnQgJiYgKGxpc3RlbmVyLmNiID09PSBjYiB8fCAhY2IpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICBmaXJlOiBmdW5jdGlvbiBmaXJlKGV2ZW50KSB7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgdmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSxcbiAgICAgICAgICAgIF9rZXkgPSAxO1xuICAgICAgICAgIF9rZXkgPCBfbGVuO1xuICAgICAgICAgIF9rZXkrK1xuICAgICAgICApIHtcbiAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGlzdGVuZXJzXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lci5ldmVudCA9PT0gZXZlbnQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgICAgICAgICByZXR1cm4gbGlzdGVuZXIuY2I7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oY2IpIHtcbiAgICAgICAgICAgICAgY2IuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH0sXG4gICAgICBvbjogZnVuY3Rpb24gb24oZXZlbnQsIGNiKSB7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKHsgZXZlbnQ6IGV2ZW50LCBjYjogY2IgfSk7XG4gICAgICB9LFxuICAgICAgb25PbmNlOiBmdW5jdGlvbiBvbk9uY2UoZXZlbnQsIF9jYikge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgIGNiOiBmdW5jdGlvbiBjYigpIHtcbiAgICAgICAgICAgIG9mZihldmVudCwgX2NiKTtcbiAgICAgICAgICAgIF9jYi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvZmY6IG9mZlxuICAgIH07XG4gIH07XG5cbiAgdmFyIGNvcHlPYmplY3RQcm9wZXJ0aWVzVG9PYmplY3QgPSBmdW5jdGlvbiBjb3B5T2JqZWN0UHJvcGVydGllc1RvT2JqZWN0KFxuICAgIHNyYyxcbiAgICB0YXJnZXQsXG4gICAgZXhjbHVkZWRcbiAgKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc3JjKVxuICAgICAgLmZpbHRlcihmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gIWV4Y2x1ZGVkLmluY2x1ZGVzKHByb3BlcnR5KTtcbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3JjLCBrZXkpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfTtcblxuICB2YXIgUFJJVkFURV9NRVRIT0RTID0gW1xuICAgICdmaXJlJyxcbiAgICAncHJvY2VzcycsXG4gICAgJ3JldmVydCcsXG4gICAgJ2xvYWQnLFxuICAgICdvbicsXG4gICAgJ29mZicsXG4gICAgJ29uT25jZScsXG4gICAgJ3JldHJ5TG9hZCdcbiAgXTtcblxuICB2YXIgY3JlYXRlSXRlbUFQSSA9IGZ1bmN0aW9uIGNyZWF0ZUl0ZW1BUEkoaXRlbSkge1xuICAgIHZhciBhcGkgPSB7fTtcbiAgICBjb3B5T2JqZWN0UHJvcGVydGllc1RvT2JqZWN0KGl0ZW0sIGFwaSwgUFJJVkFURV9NRVRIT0RTKTtcbiAgICByZXR1cm4gYXBpO1xuICB9O1xuXG4gIHZhciBnZXROb25OdW1lcmljID0gZnVuY3Rpb24gZ2V0Tm9uTnVtZXJpYyhzdHIpIHtcbiAgICByZXR1cm4gL1teMC05XSsvLmV4ZWMoc3RyKTtcbiAgfTtcblxuICB2YXIgZ2V0RGVjaW1hbFNlcGFyYXRvciA9IGZ1bmN0aW9uIGdldERlY2ltYWxTZXBhcmF0b3IoKSB7XG4gICAgcmV0dXJuIGdldE5vbk51bWVyaWMoKDEuMSkudG9Mb2NhbGVTdHJpbmcoKSlbMF07XG4gIH07XG5cbiAgdmFyIGdldFRob3VzYW5kc1NlcGFyYXRvciA9IGZ1bmN0aW9uIGdldFRob3VzYW5kc1NlcGFyYXRvcigpIHtcbiAgICAvLyBBZGRlZCBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3QgcmV0dXJuIHRoZSB0aG91c2FuZHMgc2VwYXJhdG9yIChoYXBwZW5kIG9uIG5hdGl2ZSBicm93c2VyIEFuZHJvaWQgNC40LjQpXG4gICAgLy8gV2UgY2hlY2sgYWdhaW5zdCB0aGUgbm9ybWFsIHRvU3RyaW5nIG91dHB1dCBhbmQgaWYgdGhleSdyZSB0aGUgc2FtZSByZXR1cm4gYSBjb21tYSB3aGVuIGRlY2ltYWwgc2VwYXJhdG9yIGlzIGEgZG90XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSBnZXREZWNpbWFsU2VwYXJhdG9yKCk7XG4gICAgdmFyIHRob3VzYW5kc1N0cmluZ1dpdGhTZXBhcmF0b3IgPSAoMTAwMC4wKS50b0xvY2FsZVN0cmluZygpO1xuICAgIHZhciB0aG91c2FuZHNTdHJpbmdXaXRob3V0U2VwYXJhdG9yID0gKDEwMDAuMCkudG9TdHJpbmcoKTtcbiAgICBpZiAodGhvdXNhbmRzU3RyaW5nV2l0aFNlcGFyYXRvciAhPT0gdGhvdXNhbmRzU3RyaW5nV2l0aG91dFNlcGFyYXRvcikge1xuICAgICAgcmV0dXJuIGdldE5vbk51bWVyaWModGhvdXNhbmRzU3RyaW5nV2l0aFNlcGFyYXRvcilbMF07XG4gICAgfVxuICAgIHJldHVybiBkZWNpbWFsU2VwYXJhdG9yID09PSAnLicgPyAnLCcgOiAnLic7XG4gIH07XG5cbiAgdmFyIFR5cGUgPSB7XG4gICAgQk9PTEVBTjogJ2Jvb2xlYW4nLFxuICAgIElOVDogJ2ludCcsXG4gICAgU1RSSU5HOiAnc3RyaW5nJyxcbiAgICBBUlJBWTogJ2FycmF5JyxcbiAgICBPQkpFQ1Q6ICdvYmplY3QnLFxuICAgIEZVTkNUSU9OOiAnZnVuY3Rpb24nLFxuICAgIEFDVElPTjogJ2FjdGlvbicsXG4gICAgU0VSVkVSX0FQSTogJ3NlcnZlcmFwaScsXG4gICAgUkVHRVg6ICdyZWdleCdcbiAgfTtcblxuICAvLyBhbGwgcmVnaXN0ZXJlZCBmaWx0ZXJzXG4gIHZhciBmaWx0ZXJzID0gW107XG5cbiAgLy8gbG9vcHMgb3ZlciBtYXRjaGluZyBmaWx0ZXJzIGFuZCBwYXNzZXMgb3B0aW9ucyB0byBlYWNoIGZpbHRlciwgcmV0dXJuaW5nIHRoZSBtYXBwZWQgcmVzdWx0c1xuICB2YXIgYXBwbHlGaWx0ZXJDaGFpbiA9IGZ1bmN0aW9uIGFwcGx5RmlsdGVyQ2hhaW4oa2V5LCB2YWx1ZSwgdXRpbHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvLyBmaW5kIG1hdGNoaW5nIGZpbHRlcnMgZm9yIHRoaXMga2V5XG4gICAgICB2YXIgbWF0Y2hpbmdGaWx0ZXJzID0gZmlsdGVyc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICByZXR1cm4gZi5rZXkgPT09IGtleTtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbihmKSB7XG4gICAgICAgICAgcmV0dXJuIGYuY2I7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyByZXNvbHZlIG5vd1xuICAgICAgaWYgKG1hdGNoaW5nRmlsdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZmlyc3QgZmlsdGVyIHRvIGtpY2sgdGhpbmdzIG9mXG4gICAgICB2YXIgaW5pdGlhbEZpbHRlciA9IG1hdGNoaW5nRmlsdGVycy5zaGlmdCgpO1xuXG4gICAgICAvLyBjaGFpbiBmaWx0ZXJzXG4gICAgICBtYXRjaGluZ0ZpbHRlcnNcbiAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAvLyBsb29wIG92ZXIgcHJvbWlzZXMgcGFzc2luZyB2YWx1ZSB0byBuZXh0IHByb21pc2VcbiAgICAgICAgICBmdW5jdGlvbihjdXJyZW50LCBuZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudC50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0KHZhbHVlLCB1dGlscyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLy8gY2FsbCBpbml0aWFsIGZpbHRlciwgd2lsbCByZXR1cm4gYSBwcm9taXNlXG4gICAgICAgICAgaW5pdGlhbEZpbHRlcih2YWx1ZSwgdXRpbHMpXG5cbiAgICAgICAgICAvLyBhbGwgZXhlY3V0ZWRcbiAgICAgICAgKVxuICAgICAgICAudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBhcHBseUZpbHRlcnMgPSBmdW5jdGlvbiBhcHBseUZpbHRlcnMoa2V5LCB2YWx1ZSwgdXRpbHMpIHtcbiAgICByZXR1cm4gZmlsdGVyc1xuICAgICAgLmZpbHRlcihmdW5jdGlvbihmKSB7XG4gICAgICAgIHJldHVybiBmLmtleSA9PT0ga2V5O1xuICAgICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24oZikge1xuICAgICAgICByZXR1cm4gZi5jYih2YWx1ZSwgdXRpbHMpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgLy8gYWRkcyBhIG5ldyBmaWx0ZXIgdG8gdGhlIGxpc3RcbiAgdmFyIGFkZEZpbHRlciA9IGZ1bmN0aW9uIGFkZEZpbHRlcihrZXksIGNiKSB7XG4gICAgcmV0dXJuIGZpbHRlcnMucHVzaCh7IGtleToga2V5LCBjYjogY2IgfSk7XG4gIH07XG5cbiAgdmFyIGV4dGVuZERlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gZXh0ZW5kRGVmYXVsdE9wdGlvbnMoYWRkaXRpb25hbE9wdGlvbnMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgYWRkaXRpb25hbE9wdGlvbnMpO1xuICB9O1xuXG4gIHZhciBnZXRPcHRpb25zJDEgPSBmdW5jdGlvbiBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMpO1xuICB9O1xuXG4gIHZhciBzZXRPcHRpb25zJDEgPSBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdHMpIHtcbiAgICBmb3JpbihvcHRzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAvLyBrZXkgZG9lcyBub3QgZXhpc3QsIHNvIHRoaXMgb3B0aW9uIGNhbm5vdCBiZSBzZXRcbiAgICAgIGlmICghZGVmYXVsdE9wdGlvbnNba2V5XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkZWZhdWx0T3B0aW9uc1trZXldWzBdID0gZ2V0VmFsdWVCeVR5cGUoXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBkZWZhdWx0T3B0aW9uc1trZXldWzBdLFxuICAgICAgICBkZWZhdWx0T3B0aW9uc1trZXldWzFdXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIGRlZmF1bHQgb3B0aW9ucyBvbiBhcHBcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIC8vIHRoZSBpZCB0byBhZGQgdG8gdGhlIHJvb3QgZWxlbWVudFxuICAgIGlkOiBbbnVsbCwgVHlwZS5TVFJJTkddLFxuXG4gICAgLy8gaW5wdXQgZmllbGQgbmFtZSB0byB1c2VcbiAgICBuYW1lOiBbJ2ZpbGVwb25kJywgVHlwZS5TVFJJTkddLFxuXG4gICAgLy8gY2xhc3NuYW1lIHRvIHB1dCBvbiB3cmFwcGVyXG4gICAgY2xhc3NOYW1lOiBbbnVsbCwgVHlwZS5TVFJJTkddLFxuXG4gICAgLy8gaXMgdGhlIGZpZWxkIHJlcXVpcmVkXG4gICAgcmVxdWlyZWQ6IFtmYWxzZSwgVHlwZS5CT09MRUFOXSxcblxuICAgIC8vIEFsbG93IG1lZGlhIGNhcHR1cmUgd2hlbiB2YWx1ZSBpcyBzZXRcbiAgICBjYXB0dXJlTWV0aG9kOiBbbnVsbCwgVHlwZS5TVFJJTkddLFxuICAgIC8vIC0gXCJjYW1lcmFcIiwgXCJtaWNyb3Bob25lXCIgb3IgXCJjYW1jb3JkZXJcIixcbiAgICAvLyAtIERvZXMgbm90IHdvcmsgd2l0aCBtdWx0aXBsZSBvbiBhcHBsZSBkZXZpY2VzXG4gICAgLy8gLSBJZiBzZXQsIGFjY2VwdGVkRmlsZVR5cGVzIG11c3QgYmUgbWFkZSB0byBtYXRjaCB3aXRoIG1lZGlhIHdpbGRjYXJkIFwiaW1hZ2UvKlwiLCBcImF1ZGlvLypcIiBvciBcInZpZGVvLypcIlxuXG4gICAgLy8gRmVhdHVyZSB0b2dnbGVzXG4gICAgYWxsb3dEcm9wOiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSwgLy8gQWxsb3cgZHJvcHBpbmcgb2YgZmlsZXNcbiAgICBhbGxvd0Jyb3dzZTogW3RydWUsIFR5cGUuQk9PTEVBTl0sIC8vIEFsbG93IGJyb3dzaW5nIHRoZSBmaWxlIHN5c3RlbVxuICAgIGFsbG93UGFzdGU6IFt0cnVlLCBUeXBlLkJPT0xFQU5dLCAvLyBBbGxvdyBwYXN0aW5nIGZpbGVzXG4gICAgYWxsb3dNdWx0aXBsZTogW2ZhbHNlLCBUeXBlLkJPT0xFQU5dLCAvLyBBbGxvdyBtdWx0aXBsZSBmaWxlcyAoZGlzYWJsZWQgYnkgZGVmYXVsdCwgYXMgbXVsdGlwbGUgYXR0cmlidXRlIGlzIGFsc28gcmVxdWlyZWQgb24gaW5wdXQgdG8gYWxsb3cgbXVsdGlwbGUpXG4gICAgYWxsb3dSZXBsYWNlOiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSwgLy8gQWxsb3cgZHJvcHBpbmcgYSBmaWxlIG9uIG90aGVyIGZpbGUgdG8gcmVwbGFjZSBpdCAob25seSB3b3JrcyB3aGVuIG11bHRpcGxlIGlzIHNldCB0byBmYWxzZSlcbiAgICBhbGxvd1JldmVydDogW3RydWUsIFR5cGUuQk9PTEVBTl0sIC8vIEFsbG93cyB1c2VyIHRvIHJldmVydCBmaWxlIHVwbG9hZFxuICAgIC8vIFRPRE86IGFsbG93RHJhZzogW3RydWUsIFR5cGUuQk9PTEVBTl0sXHRcdFx0XHRcdC8vIEFsbG93IGRyYWdnaW5nIGZpbGVzXG4gICAgLy8gVE9ETzogYWxsb3dTd2lwZTogW3RydWUsIFR5cGUuQk9PTEVBTl0sXHRcdFx0XHRcdC8vIEFsbG93IHN3aXBlIHRvIHJlbW92ZSBmaWxlc1xuICAgIC8vIFRPRE86IGFsbG93UmVtb3ZlQWxsOiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSxcdFx0XHRcdC8vIEFsbG93IHJlbW92aW5nIGFsbCBpdGVtcyBhdCBvbmNlXG4gICAgLy8gVE9ETzogYWxsb3dVcGxvYWRBbGw6IFt0cnVlLCBUeXBlLkJPT0xFQU5dLFx0XHRcdFx0Ly8gQWxsb3cgdXBsb2FkaW5nIGFsbCBpdGVtcyBhdCBvbmNlXG5cbiAgICAvLyBJbnB1dCByZXF1aXJlbWVudHNcbiAgICBtYXhGaWxlczogW251bGwsIFR5cGUuSU5UXSwgLy8gTWF4IG51bWJlciBvZiBmaWxlc1xuXG4gICAgLy8gRHJhZyAnbiBEcm9wIHJlbGF0ZWRcbiAgICBkcm9wT25QYWdlOiBbZmFsc2UsIFR5cGUuQk9PTEVBTl0sIC8vIEFsbG93IGRyb3BwaW5nIG9mIGZpbGVzIGFueXdoZXJlIG9uIHBhZ2UgKHByZXZlbnRzIGJyb3dzZXIgZnJvbSBvcGVuaW5nIGZpbGUgaWYgZHJvcHBlZCBvdXRzaWRlIG9mIFVwKVxuICAgIGRyb3BPbkVsZW1lbnQ6IFt0cnVlLCBUeXBlLkJPT0xFQU5dLCAvLyBEcm9wIG5lZWRzIHRvIGhhcHBlbiBvbiBlbGVtZW50IChzZXQgdG8gZmFsc2UgdG8gYWxzbyBsb2FkIGRyb3BzIG91dHNpZGUgb2YgVXApXG4gICAgZHJvcFZhbGlkYXRpb246IFtmYWxzZSwgVHlwZS5CT09MRUFOXSwgLy8gRW5hYmxlIG9yIGRpc2FibGUgdmFsaWRhdGluZyBmaWxlcyBvbiBkcm9wXG4gICAgaWdub3JlZEZpbGVzOiBbWycuZHNfc3RvcmUnLCAndGh1bWJzLmRiJywgJ2Rlc2t0b3AuaW5pJ10sIFR5cGUuQVJSQVldLFxuICAgIC8vIGNhdGNoRGlyZWN0b3JpZXM6IFt0cnVlLCBUeXBlLkJPT0xFQU5dLFx0XHRcdFx0XHQvLyBBbGxvdyBkcm9wcGluZyBkaXJlY3RvcmllcyBpbiBtb2Rlcm4gYnJvd3NlcnNcblxuICAgIC8vIFVwbG9hZCByZWxhdGVkXG4gICAgaW5zdGFudFVwbG9hZDogW3RydWUsIFR5cGUuQk9PTEVBTl0sIC8vIFNob3VsZCB1cGxvYWQgZmlsZXMgaW1taWRpYXRlbHkgb24gZHJvcFxuICAgIC8vIFRPRE86IHBhcmFsbGVsOiBbMSwgVHlwZS5JTlRdLFx0XHRcdFx0XHRcdFx0Ly8gTWF4aW11bSBmaWxlcyB0byB1cGxvYWQgaW4gcGFyYWxsZWxcbiAgICAvLyBUT0RPOiBjaHVua3M6IFtmYWxzZSwgVHlwZS5CT09MRUFOXSxcdFx0XHRcdFx0XHQvLyBVc2UgY2h1bmsgdXBsb2FkaW5nXG4gICAgLy8gVE9ETzogY2h1bmtTaXplOiBbLjUgKiAoMTAyNCAqIDEwMjQpLCBUeXBlLklOVF0sXHRcdFx0Ly8gVXBsb2FkIGluIDUxMktCIGNodW5rc1xuXG4gICAgLy8gYnkgZGVmYXVsdCBubyBhc3luYyBhcGkgaXMgc3VwcGxpZWRcbiAgICAvKiBleHBlY3RlZCBmb3JtYXRcbiAgICB7XG4gICAgdXJsOiAnJyxcbiAgICB0aW1lb3V0OiAxMDAwLFxuICAgIHByb2Nlc3M6IHtcbiAgICB1cmw6ICcnLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgaGVhZGVyczoge31cbiAgICB9LFxuICAgIHJldmVydDoge1xuICAgIHVybDogJycsXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgIGhlYWRlcnM6IHt9XG4gICAgfSxcbiAgICBmZXRjaDoge1xuICAgIHVybDogJycsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgIGhlYWRlcnM6IHt9XG4gICAgfSxcbiAgICByZXN0b3JlOiB7XG4gICAgdXJsOiAnJyxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgaGVhZGVyczoge31cbiAgICB9XG4gICAgfVxuICAgICovXG4gICAgc2VydmVyOiBbbnVsbCwgVHlwZS5TRVJWRVJfQVBJXSxcblxuICAgIC8vIExhYmVscyBhbmQgc3RhdHVzIG1lc3NhZ2VzXG4gICAgbGFiZWxEZWNpbWFsU2VwYXJhdG9yOiBbZ2V0RGVjaW1hbFNlcGFyYXRvcigpLCBUeXBlLlNUUklOR10sIC8vIERlZmF1bHQgaXMgbG9jYWxlIHNlcGFyYXRvclxuICAgIGxhYmVsVGhvdXNhbmRzU2VwYXJhdG9yOiBbZ2V0VGhvdXNhbmRzU2VwYXJhdG9yKCksIFR5cGUuU1RSSU5HXSwgLy8gRGVmYXVsdCBpcyBsb2NhbGUgc2VwYXJhdG9yXG5cbiAgICBsYWJlbElkbGU6IFtcbiAgICAgICdEcmFnICYgRHJvcCB5b3VyIGZpbGVzIG9yIDxzcGFuIGNsYXNzPVwiZmlsZXBvbmQtLWxhYmVsLWFjdGlvblwiPkJyb3dzZTwvc3Bhbj4nLFxuICAgICAgVHlwZS5TVFJJTkdcbiAgICBdLFxuXG4gICAgbGFiZWxGaWxlV2FpdGluZ0ZvclNpemU6IFsnV2FpdGluZyBmb3Igc2l6ZScsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEZpbGVTaXplTm90QXZhaWxhYmxlOiBbJ1NpemUgbm90IGF2YWlsYWJsZScsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEZpbGVDb3VudFNpbmd1bGFyOiBbJ2ZpbGUgaW4gbGlzdCcsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEZpbGVDb3VudFBsdXJhbDogWydmaWxlcyBpbiBsaXN0JywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsRmlsZUxvYWRpbmc6IFsnTG9hZGluZycsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEZpbGVBZGRlZDogWydBZGRlZCcsIFR5cGUuU1RSSU5HXSwgLy8gYXNzaXN0aXZlIG9ubHlcbiAgICBsYWJlbEZpbGVSZW1vdmVkOiBbJ1JlbW92ZWQnLCBUeXBlLlNUUklOR10sIC8vIGFzc2lzdGl2ZSBvbmx5XG4gICAgbGFiZWxGaWxlTG9hZEVycm9yOiBbJ0Vycm9yIGR1cmluZyBsb2FkJywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsRmlsZVByb2Nlc3Npbmc6IFsnVXBsb2FkaW5nJywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsRmlsZVByb2Nlc3NpbmdDb21wbGV0ZTogWydVcGxvYWQgY29tcGxldGUnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxGaWxlUHJvY2Vzc2luZ0Fib3J0ZWQ6IFsnVXBsb2FkIGNhbmNlbGxlZCcsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEZpbGVQcm9jZXNzaW5nRXJyb3I6IFsnRXJyb3IgZHVyaW5nIHVwbG9hZCcsIFR5cGUuU1RSSU5HXSxcbiAgICAvLyBsYWJlbEZpbGVQcm9jZXNzaW5nUGF1c2VkOiBbJ1VwbG9hZCBwYXVzZWQnLCBUeXBlLlNUUklOR10sXG5cbiAgICBsYWJlbFRhcFRvQ2FuY2VsOiBbJ3RhcCB0byBjYW5jZWwnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxUYXBUb1JldHJ5OiBbJ3RhcCB0byByZXRyeScsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbFRhcFRvVW5kbzogWyd0YXAgdG8gdW5kbycsIFR5cGUuU1RSSU5HXSxcbiAgICAvLyBsYWJlbFRhcFRvUGF1c2U6IFsndGFwIHRvIHBhdXNlJywgVHlwZS5TVFJJTkddLFxuICAgIC8vIGxhYmVsVGFwVG9SZXN1bWU6IFsndGFwIHRvIHJlc3VtZScsIFR5cGUuU1RSSU5HXSxcblxuICAgIGxhYmVsQnV0dG9uUmVtb3ZlSXRlbTogWydSZW1vdmUnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxCdXR0b25BYm9ydEl0ZW1Mb2FkOiBbJ0Fib3J0JywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsQnV0dG9uUmV0cnlJdGVtTG9hZDogWydSZXRyeScsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEJ1dHRvbkFib3J0SXRlbVByb2Nlc3Npbmc6IFsnQ2FuY2VsJywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsQnV0dG9uVW5kb0l0ZW1Qcm9jZXNzaW5nOiBbJ1VuZG8nLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxCdXR0b25SZXRyeUl0ZW1Qcm9jZXNzaW5nOiBbJ1JldHJ5JywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsQnV0dG9uUHJvY2Vzc0l0ZW06IFsnVXBsb2FkJywgVHlwZS5TVFJJTkddLFxuXG4gICAgLy8gbWFrZSBzdXJlIHdpZHRoIGFuZCBoZWlnaHQgcGx1cyB2aWV3cG94IGFyZSBldmVuIG51bWJlcnMgc28gaWNvbnMgYXJlIG5pY2VseSBjZW50ZXJlZFxuICAgIGljb25SZW1vdmU6IFtcbiAgICAgICc8c3ZnIHdpZHRoPVwiMjZcIiBoZWlnaHQ9XCIyNlwiIHZpZXdCb3g9XCIwIDAgMjYgMjZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMS41ODYgMTNsLTIuMjkzIDIuMjkzYTEgMSAwIDAgMCAxLjQxNCAxLjQxNEwxMyAxNC40MTRsMi4yOTMgMi4yOTNhMSAxIDAgMCAwIDEuNDE0LTEuNDE0TDE0LjQxNCAxM2wyLjI5My0yLjI5M2ExIDEgMCAwIDAtMS40MTQtMS40MTRMMTMgMTEuNTg2bC0yLjI5My0yLjI5M2ExIDEgMCAwIDAtMS40MTQgMS40MTRMMTEuNTg2IDEzelwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPjwvc3ZnPicsXG4gICAgICBUeXBlLlNUUklOR1xuICAgIF0sXG4gICAgaWNvblByb2Nlc3M6IFtcbiAgICAgICc8c3ZnIHdpZHRoPVwiMjZcIiBoZWlnaHQ9XCIyNlwiIHZpZXdCb3g9XCIwIDAgMjYgMjZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNCAxMC40MTR2My41ODVhMSAxIDAgMCAxLTIgMHYtMy41ODVsLTEuMjkzIDEuMjkzYTEgMSAwIDAgMS0xLjQxNC0xLjQxNWwzLTNhMSAxIDAgMCAxIDEuNDE0IDBsMyAzYTEgMSAwIDAgMS0xLjQxNCAxLjQxNUwxNCAxMC40MTR6TTkgMThhMSAxIDAgMCAxIDAtMmg4YTEgMSAwIDAgMSAwIDJIOXpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nLFxuICAgICAgVHlwZS5TVFJJTkdcbiAgICBdLFxuICAgIGljb25SZXRyeTogW1xuICAgICAgJzxzdmcgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjI2XCIgdmlld0JveD1cIjAgMCAyNiAyNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTEwLjgxIDkuMTg1bC0uMDM4LjAyQTQuOTk3IDQuOTk3IDAgMCAwIDggMTMuNjgzYTUgNSAwIDAgMCA1IDUgNSA1IDAgMCAwIDUtNSAxIDEgMCAwIDEgMiAwQTcgNyAwIDEgMSA5LjcyMiA3LjQ5NmwtLjg0Mi0uMjFhLjk5OS45OTkgMCAxIDEgLjQ4NC0xLjk0bDMuMjMuODA2Yy41MzUuMTMzLjg2LjY3NS43MyAxLjIxbC0uODA0IDMuMjMzYS45OTcuOTk3IDAgMCAxLTEuMjEuNzMuOTk3Ljk5NyAwIDAgMS0uNzMtMS4yMWwuMjMtLjkyOHYtLjAwMnpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz48L3N2Zz4nLFxuICAgICAgVHlwZS5TVFJJTkdcbiAgICBdLFxuICAgIGljb25VbmRvOiBbXG4gICAgICAnPHN2ZyB3aWR0aD1cIjI2XCIgaGVpZ2h0PVwiMjZcIiB2aWV3Qm94PVwiMCAwIDI2IDI2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNOS4xODUgMTAuODFsLjAyLS4wMzhBNC45OTcgNC45OTcgMCAwIDEgMTMuNjgzIDhhNSA1IDAgMCAxIDUgNSA1IDUgMCAwIDEtNSA1IDEgMSAwIDAgMCAwIDJBNyA3IDAgMSAwIDcuNDk2IDkuNzIybC0uMjEtLjg0MmEuOTk5Ljk5OSAwIDEgMC0xLjk0LjQ4NGwuODA2IDMuMjNjLjEzMy41MzUuNjc1Ljg2IDEuMjEuNzNsMy4yMzMtLjgwM2EuOTk3Ljk5NyAwIDAgMCAuNzMtMS4yMS45OTcuOTk3IDAgMCAwLTEuMjEtLjczbC0uOTI4LjIzLS4wMDItLjAwMXpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz48L3N2Zz4nLFxuICAgICAgVHlwZS5TVFJJTkdcbiAgICBdLFxuICAgIGljb25Eb25lOiBbXG4gICAgICAnPHN2ZyB3aWR0aD1cIjI2XCIgaGVpZ2h0PVwiMjZcIiB2aWV3Qm94PVwiMCAwIDI2IDI2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTguMjkzIDkuMjkzYTEgMSAwIDAgMSAxLjQxNCAxLjQxNGwtNy4wMDIgN2ExIDEgMCAwIDEtMS40MTQgMGwtMy45OTgtNGExIDEgMCAxIDEgMS40MTQtMS40MTRMMTIgMTUuNTg2bDYuMjk0LTYuMjkzelwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPjwvc3ZnPicsXG4gICAgICBUeXBlLlNUUklOR1xuICAgIF0sXG5cbiAgICAvLyBldmVudCBoYW5kbGVyc1xuICAgIG9uaW5pdDogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIG9ud2FybmluZzogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIG9uZXJyb3I6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbmFkZGZpbGVzdGFydDogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIG9uYWRkZmlsZXByb2dyZXNzOiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25hZGRmaWxlOiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25wcm9jZXNzZmlsZXN0YXJ0OiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25wcm9jZXNzZmlsZXByb2dyZXNzOiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25wcm9jZXNzZmlsZWFib3J0OiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25wcm9jZXNzZmlsZXJldmVydDogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIG9ucHJvY2Vzc2ZpbGU6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbnJlbW92ZWZpbGU6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcblxuICAgIC8vIGN1c3RvbSBpbml0aWFsIGZpbGVzIGFycmF5XG4gICAgZmlsZXM6IFtbXSwgVHlwZS5BUlJBWV1cbiAgfTtcblxuICB2YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICB9O1xuXG4gIHZhciBnZXRJdGVtQnlRdWVyeSA9IGZ1bmN0aW9uIGdldEl0ZW1CeVF1ZXJ5KGl0ZW1zLCBxdWVyeSkge1xuICAgIC8vIGp1c3QgcmV0dXJuIGZpcnN0IGluZGV4XG4gICAgaWYgKGlzRW1wdHkocXVlcnkpKSB7XG4gICAgICByZXR1cm4gaXRlbXNbMF0gfHwgbnVsbDtcbiAgICB9XG5cbiAgICAvLyBxdWVyeSBpcyBpbmRleFxuICAgIGlmIChpc0ludChxdWVyeSkpIHtcbiAgICAgIHJldHVybiBpdGVtc1txdWVyeV0gfHwgbnVsbDtcbiAgICB9XG5cbiAgICAvLyBpZiBxdWVyeSBpcyBpdGVtLCBnZXQgdGhlIGlkXG4gICAgaWYgKFxuICAgICAgKHR5cGVvZiBxdWVyeSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocXVlcnkpKSA9PT0gJ29iamVjdCdcbiAgICApIHtcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuaWQ7XG4gICAgfVxuXG4gICAgLy8gYXNzdW1lIHF1ZXJ5IGlzIGEgc3RyaW5nIGFuZCByZXR1cm4gaXRlbSBieSBpZFxuICAgIHJldHVybiAoXG4gICAgICBpdGVtcy5maW5kKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT09IHF1ZXJ5O1xuICAgICAgfSkgfHwgbnVsbFxuICAgICk7XG4gIH07XG5cbiAgdmFyIHF1ZXJpZXMgPSBmdW5jdGlvbiBxdWVyaWVzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIEdFVF9JVEVNOiBmdW5jdGlvbiBHRVRfSVRFTShxdWVyeSkge1xuICAgICAgICByZXR1cm4gZ2V0SXRlbUJ5UXVlcnkoc3RhdGUuaXRlbXMsIHF1ZXJ5KTtcbiAgICAgIH0sXG5cbiAgICAgIEdFVF9JVEVNUzogZnVuY3Rpb24gR0VUX0lURU1TKHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkoc3RhdGUuaXRlbXMpKTtcbiAgICAgIH0sXG5cbiAgICAgIEdFVF9JVEVNX05BTUU6IGZ1bmN0aW9uIEdFVF9JVEVNX05BTUUocXVlcnkpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBnZXRJdGVtQnlRdWVyeShzdGF0ZS5pdGVtcywgcXVlcnkpO1xuICAgICAgICByZXR1cm4gaXRlbSA/IGl0ZW0uZmlsZW5hbWUgOiBudWxsO1xuICAgICAgfSxcblxuICAgICAgR0VUX0lURU1fU0laRTogZnVuY3Rpb24gR0VUX0lURU1fU0laRShxdWVyeSkge1xuICAgICAgICB2YXIgaXRlbSA9IGdldEl0ZW1CeVF1ZXJ5KHN0YXRlLml0ZW1zLCBxdWVyeSk7XG4gICAgICAgIHJldHVybiBpdGVtID8gaXRlbS5maWxlU2l6ZSA6IG51bGw7XG4gICAgICB9LFxuXG4gICAgICBHRVRfVE9UQUxfSVRFTVM6IGZ1bmN0aW9uIEdFVF9UT1RBTF9JVEVNUygpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLml0ZW1zLmxlbmd0aDtcbiAgICAgIH0sXG5cbiAgICAgIElTX0FTWU5DOiBmdW5jdGlvbiBJU19BU1lOQygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBpc09iamVjdChzdGF0ZS5vcHRpb25zLnNlcnZlcikgJiZcbiAgICAgICAgICAoaXNPYmplY3Qoc3RhdGUub3B0aW9ucy5zZXJ2ZXIucHJvY2VzcykgfHxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24oc3RhdGUub3B0aW9ucy5zZXJ2ZXIucHJvY2VzcykpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgZ2V0SXRlbUluZGV4QnlRdWVyeSA9IGZ1bmN0aW9uIGdldEl0ZW1JbmRleEJ5UXVlcnkoaXRlbXMsIHF1ZXJ5KSB7XG4gICAgLy8ganVzdCByZXR1cm4gZmlyc3QgaW5kZXhcbiAgICBpZiAoaXNFbXB0eShxdWVyeSkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIGludmFsaWQgcXVlcmllc1xuICAgIGlmICghaXNTdHJpbmcocXVlcnkpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGl0ZW0gYnkgaWQgKG9yIC0xIGlmIG5vdCBmb3VuZClcbiAgICByZXR1cm4gaXRlbXMuZmluZEluZGV4KGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmlkID09PSBxdWVyeTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVtb3ZlSW5kZXggPSBmdW5jdGlvbiByZW1vdmVJbmRleChhcnIsIGluZGV4KSB7XG4gICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIHZhciBoYXNSb29tRm9ySXRlbSA9IGZ1bmN0aW9uIGhhc1Jvb21Gb3JJdGVtKHN0YXRlKSB7XG4gICAgdmFyIGNvdW50ID0gc3RhdGUuaXRlbXMubGVuZ3RoO1xuXG4gICAgLy8gaWYgY2Fubm90IGhhdmUgbXVsdGlwbGUgaXRlbXMsIHRvIGFkZCBvbmUgaXRlbSBpdCBzaG91bGQgY3VycmVudGx5IG5vdCBjb250YWluIGl0ZW1zXG4gICAgaWYgKCFzdGF0ZS5vcHRpb25zLmFsbG93TXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiBjb3VudCA9PT0gMDtcbiAgICB9XG5cbiAgICAvLyBpZiBhbGxvd3MgbXVsdGlwbGUgaXRlbXMsIHdlIGNoZWNrIGlmIGEgbWF4IGl0ZW0gY291bnQgaGFzIGJlZW4gc2V0LCBpZiBub3QsIHRoZXJlJ3Mgbm8gbGltaXRcbiAgICB2YXIgbWF4RmlsZUNvdW50ID0gc3RhdGUub3B0aW9ucy5tYXhGaWxlcztcbiAgICBpZiAobWF4RmlsZUNvdW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyB3ZSBjaGVjayBpZiB0aGUgY3VycmVudCBjb3VudCBpcyBzbWFsbGVyIHRoYW4gdGhlIG1heCBjb3VudCwgaWYgc28sIGFub3RoZXIgZmlsZSBjYW4gc3RpbGwgYmUgYWRkZWRcbiAgICBpZiAoY291bnQgPCBtYXhGaWxlQ291bnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIG5vIG1vcmUgcm9vbSBmb3IgYW5vdGhlciBmaWxlXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHZhciBsaW1pdCA9IGZ1bmN0aW9uIGxpbWl0KHZhbHVlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihtYXgsIHZhbHVlKSwgbWluKTtcbiAgfTtcblxuICB2YXIgYXJyYXlJbnNlcnQgPSBmdW5jdGlvbiBhcnJheUluc2VydChhcnIsIGluZGV4LCBpdGVtKSB7XG4gICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuICB9O1xuXG4gIHZhciBpbnNlcnRJdGVtID0gZnVuY3Rpb24gaW5zZXJ0SXRlbShpdGVtcywgaXRlbSwgaW5kZXgpIHtcbiAgICBpZiAoaXNFbXB0eShpdGVtKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gaWYgaW5kZXggaXMgdW5kZWZpbmVkLCBhcHBlbmRcbiAgICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIC8vIGxpbWl0IHRoZSBpbmRleCB0byB0aGUgc2l6ZSBvZiB0aGUgaXRlbXMgYXJyYXlcbiAgICBpbmRleCA9IGxpbWl0KGluZGV4LCAwLCBpdGVtcy5sZW5ndGgpO1xuXG4gICAgLy8gYWRkIGl0ZW0gdG8gYXJyYXlcbiAgICBhcnJheUluc2VydChpdGVtcywgaW5kZXgsIGl0ZW0pO1xuXG4gICAgLy8gZXhwb3NlXG4gICAgcmV0dXJuIGl0ZW07XG4gIH07XG5cbiAgdmFyIGxlZnRQYWQgPSBmdW5jdGlvbiBsZWZ0UGFkKHZhbHVlKSB7XG4gICAgdmFyIHBhZGRpbmcgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgICByZXR1cm4gKHBhZGRpbmcgKyB2YWx1ZSkuc2xpY2UoLXBhZGRpbmcubGVuZ3RoKTtcbiAgfTtcblxuICB2YXIgZ2V0RGF0ZVN0cmluZyA9IGZ1bmN0aW9uIGdldERhdGVTdHJpbmcoKSB7XG4gICAgdmFyIGRhdGUgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBhcmd1bWVudHNbMF1cbiAgICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiAoXG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCkgK1xuICAgICAgJy0nICtcbiAgICAgIGxlZnRQYWQoZGF0ZS5nZXRNb250aCgpICsgMSwgJzAwJykgK1xuICAgICAgJy0nICtcbiAgICAgIGxlZnRQYWQoZGF0ZS5nZXREYXRlKCksICcwMCcpICtcbiAgICAgICdfJyArXG4gICAgICBsZWZ0UGFkKGRhdGUuZ2V0SG91cnMoKSwgJzAwJykgK1xuICAgICAgJy0nICtcbiAgICAgIGxlZnRQYWQoZGF0ZS5nZXRNaW51dGVzKCksICcwMCcpICtcbiAgICAgICctJyArXG4gICAgICBsZWZ0UGFkKGRhdGUuZ2V0U2Vjb25kcygpLCAnMDAnKVxuICAgICk7XG4gIH07XG5cbiAgdmFyIGlzQmFzZTY0RGF0YVVSSSA9IGZ1bmN0aW9uIGlzQmFzZTY0RGF0YVVSSShzdHIpIHtcbiAgICByZXR1cm4gL15cXHMqZGF0YTooW2Etel0rXFwvW2EtejAtOS0rLl0rKDtbYS16LV0rPVthLXowLTktXSspPyk/KDtiYXNlNjQpPywoW2EtejAtOSEkJicsKCkqKzs9XFwtLl9+OkBcXC8/JVxcc10qKVxccyokL2kudGVzdChcbiAgICAgIHN0clxuICAgICk7XG4gIH07XG5cbiAgdmFyIGdldEZpbGVuYW1lRnJvbVVSTCA9IGZ1bmN0aW9uIGdldEZpbGVuYW1lRnJvbVVSTCh1cmwpIHtcbiAgICByZXR1cm4gdXJsXG4gICAgICAuc3BsaXQoJy8nKVxuICAgICAgLnBvcCgpXG4gICAgICAuc3BsaXQoJz8nKVxuICAgICAgLnNoaWZ0KCk7XG4gIH07XG5cbiAgdmFyIGdldEV4dGVuc2lvbkZyb21GaWxlbmFtZSA9IGZ1bmN0aW9uIGdldEV4dGVuc2lvbkZyb21GaWxlbmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcbiAgfTtcblxuICB2YXIgZ3Vlc3N0aW1hdGVFeHRlbnNpb24gPSBmdW5jdGlvbiBndWVzc3RpbWF0ZUV4dGVuc2lvbih0eXBlKSB7XG4gICAgLy8gaWYgbm8gZXh0ZW5zaW9uIHN1cHBsaWVkLCBleGl0IGhlcmVcbiAgICBpZiAodHlwZW9mIHR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLy8gZ2V0IHN1YnR5cGVcbiAgICB2YXIgc3VidHlwZSA9IHR5cGUuc3BsaXQoJy8nKS5wb3AoKTtcblxuICAgIC8vIGlzIHN2ZyBzdWJ0eXBlXG4gICAgaWYgKC9zdmcvLnRlc3Qoc3VidHlwZSkpIHtcbiAgICAgIHJldHVybiAnc3ZnJztcbiAgICB9XG5cbiAgICBpZiAoL3ppcHxjb21wcmVzc2VkLy50ZXN0KHN1YnR5cGUpKSB7XG4gICAgICByZXR1cm4gJ3ppcCc7XG4gICAgfVxuXG4gICAgaWYgKC9wbGFpbi8udGVzdChzdWJ0eXBlKSkge1xuICAgICAgcmV0dXJuICd0eHQnO1xuICAgIH1cblxuICAgIGlmICgvbXN3b3JkLy50ZXN0KHN1YnR5cGUpKSB7XG4gICAgICByZXR1cm4gJ2RvYyc7XG4gICAgfVxuXG4gICAgLy8gaWYgaXMgdmFsaWQgc3VidHlwZVxuICAgIGlmICgvW2Etel0rLy50ZXN0KHN1YnR5cGUpKSB7XG4gICAgICAvLyBhbHdheXMgdXNlIGpwZyBleHRlbnNpb25cbiAgICAgIGlmIChzdWJ0eXBlID09PSAnanBlZycpIHtcbiAgICAgICAgcmV0dXJuICdqcGcnO1xuICAgICAgfVxuXG4gICAgICAvLyByZXR1cm4gc3VidHlwZVxuICAgICAgcmV0dXJuIHN1YnR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9O1xuXG4gIHZhciBnZXRGaWxlRnJvbUJsb2IgPSBmdW5jdGlvbiBnZXRGaWxlRnJvbUJsb2IoYmxvYiwgZmlsZW5hbWUpIHtcbiAgICB2YXIgdHlwZSA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG4gICAgdmFyIGV4dGVuc2lvbiA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IG51bGw7XG5cbiAgICB2YXIgZmlsZSA9XG4gICAgICB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBibG9iLnNsaWNlKDAsIGJsb2Iuc2l6ZSwgdHlwZSlcbiAgICAgICAgOiBibG9iLnNsaWNlKDAsIGJsb2Iuc2l6ZSwgYmxvYi50eXBlKTtcbiAgICBmaWxlLmxhc3RNb2RpZmllZERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLy8gaWYgZmlsZW5hbWUgc3VwcGxpZWQgYnV0IG5vIGV4dGVuc2lvbiBhbmQgZmlsZW5hbWUgaGFzIGV4dGVuc2lvblxuICAgIGlmIChmaWxlbmFtZSAmJiBleHRlbnNpb24gPT09IG51bGwgJiYgZ2V0RXh0ZW5zaW9uRnJvbUZpbGVuYW1lKGZpbGVuYW1lKSkge1xuICAgICAgZmlsZS5uYW1lID0gZmlsZW5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4dGVuc2lvbiA9IGV4dGVuc2lvbiB8fCBndWVzc3RpbWF0ZUV4dGVuc2lvbihmaWxlLnR5cGUpO1xuICAgICAgZmlsZS5uYW1lID0gZmlsZW5hbWUgKyAoZXh0ZW5zaW9uID8gJy4nICsgZXh0ZW5zaW9uIDogJycpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsZTtcbiAgfTtcblxuICB2YXIgZ2V0QmxvYkJ1aWxkZXIgPSBmdW5jdGlvbiBnZXRCbG9iQnVpbGRlcigpIHtcbiAgICByZXR1cm4gKHdpbmRvdy5CbG9iQnVpbGRlciA9XG4gICAgICB3aW5kb3cuQmxvYkJ1aWxkZXIgfHxcbiAgICAgIHdpbmRvdy5XZWJLaXRCbG9iQnVpbGRlciB8fFxuICAgICAgd2luZG93Lk1vekJsb2JCdWlsZGVyIHx8XG4gICAgICB3aW5kb3cuTVNCbG9iQnVpbGRlcik7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUJsb2IgPSBmdW5jdGlvbiBjcmVhdGVCbG9iKGFycmF5QnVmZmVyLCBtaW1lVHlwZSkge1xuICAgIHZhciBCQiA9IGdldEJsb2JCdWlsZGVyKCk7XG5cbiAgICBpZiAoQkIpIHtcbiAgICAgIHZhciBiYiA9IG5ldyBCQigpO1xuICAgICAgYmIuYXBwZW5kKGFycmF5QnVmZmVyKTtcbiAgICAgIHJldHVybiBiYi5nZXRCbG9iKG1pbWVUeXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEJsb2IoW2FycmF5QnVmZmVyXSwge1xuICAgICAgdHlwZTogbWltZVR5cGVcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ2V0QmxvYkZyb21CeXRlU3RyaW5nV2l0aE1pbWVUeXBlID0gZnVuY3Rpb24gZ2V0QmxvYkZyb21CeXRlU3RyaW5nV2l0aE1pbWVUeXBlKFxuICAgIGJ5dGVTdHJpbmcsXG4gICAgbWltZVR5cGVcbiAgKSB7XG4gICAgdmFyIGFiID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcbiAgICB2YXIgaWEgPSBuZXcgVWludDhBcnJheShhYik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlhW2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVCbG9iKGFiLCBtaW1lVHlwZSk7XG4gIH07XG5cbiAgdmFyIGdldE1pbWVUeXBlRnJvbUJhc2U2NERhdGFVUkkgPSBmdW5jdGlvbiBnZXRNaW1lVHlwZUZyb21CYXNlNjREYXRhVVJJKFxuICAgIGRhdGFVUklcbiAgKSB7XG4gICAgcmV0dXJuICgvXmRhdGE6KC4rKTsvLmV4ZWMoZGF0YVVSSSkgfHwgW10pWzFdIHx8IG51bGw7XG4gIH07XG5cbiAgdmFyIGdldEJhc2U2NERhdGFGcm9tQmFzZTY0RGF0YVVSSSA9IGZ1bmN0aW9uIGdldEJhc2U2NERhdGFGcm9tQmFzZTY0RGF0YVVSSShcbiAgICBkYXRhVVJJXG4gICkge1xuICAgIC8vIGdldCBkYXRhIHBhcnQgb2Ygc3RyaW5nIChyZW1vdmUgZGF0YTppbWFnZS9qcGVnLi4uLClcbiAgICB2YXIgZGF0YSA9IGRhdGFVUkkuc3BsaXQoJywnKVsxXTtcblxuICAgIC8vIHJlbW92ZSBhbnkgd2hpdGVzcGFjZSBhcyB0aGF0IGNhdXNlcyBJbnZhbGlkQ2hhcmFjdGVyRXJyb3IgaW4gSUVcbiAgICByZXR1cm4gZGF0YS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICB9O1xuXG4gIHZhciBnZXRCeXRlU3RyaW5nRnJvbUJhc2U2NERhdGFVUkkgPSBmdW5jdGlvbiBnZXRCeXRlU3RyaW5nRnJvbUJhc2U2NERhdGFVUkkoXG4gICAgZGF0YVVSSVxuICApIHtcbiAgICByZXR1cm4gYXRvYihnZXRCYXNlNjREYXRhRnJvbUJhc2U2NERhdGFVUkkoZGF0YVVSSSkpO1xuICB9O1xuXG4gIHZhciBnZXRCbG9iRnJvbUJhc2U2NERhdGFVUkkgPSBmdW5jdGlvbiBnZXRCbG9iRnJvbUJhc2U2NERhdGFVUkkoZGF0YVVSSSkge1xuICAgIHZhciBtaW1lVHlwZSA9IGdldE1pbWVUeXBlRnJvbUJhc2U2NERhdGFVUkkoZGF0YVVSSSk7XG4gICAgdmFyIGJ5dGVTdHJpbmcgPSBnZXRCeXRlU3RyaW5nRnJvbUJhc2U2NERhdGFVUkkoZGF0YVVSSSk7XG5cbiAgICByZXR1cm4gZ2V0QmxvYkZyb21CeXRlU3RyaW5nV2l0aE1pbWVUeXBlKGJ5dGVTdHJpbmcsIG1pbWVUeXBlKTtcbiAgfTtcblxuICB2YXIgZ2V0RmlsZUZyb21CYXNlNjREYXRhVVJJID0gZnVuY3Rpb24gZ2V0RmlsZUZyb21CYXNlNjREYXRhVVJJKFxuICAgIGRhdGFVUkksXG4gICAgZmlsZW5hbWUsXG4gICAgZXh0ZW5zaW9uXG4gICkge1xuICAgIHJldHVybiBnZXRGaWxlRnJvbUJsb2IoXG4gICAgICBnZXRCbG9iRnJvbUJhc2U2NERhdGFVUkkoZGF0YVVSSSksXG4gICAgICBmaWxlbmFtZSxcbiAgICAgIG51bGwsXG4gICAgICBleHRlbnNpb25cbiAgICApO1xuICB9O1xuXG4gIHZhciBnZXRGaWxlbmFtZUZyb21IZWFkZXJzID0gZnVuY3Rpb24gZ2V0RmlsZW5hbWVGcm9tSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdmFyIHJvd3MgPSBoZWFkZXJzLnNwbGl0KCdcXG4nKTtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAoXG4gICAgICAgIHZhciBfaXRlcmF0b3IgPSByb3dzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7XG4gICAgICAgICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpO1xuICAgICAgICBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIHZhciBoZWFkZXIgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICB2YXIgZGlydHlGaWxlbmFtZSA9IGhlYWRlci5zcGxpdCgnZmlsZW5hbWU9JylbMV07XG4gICAgICAgIGlmICghZGlydHlGaWxlbmFtZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJ0eUZpbGVuYW1lLnJlcGxhY2UoL1tcIiddKy9nLCAnJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdmFyIHJlbmFtZUZpbGUgPSBmdW5jdGlvbiByZW5hbWVGaWxlKGZpbGUsIG5hbWUpIHtcbiAgICB2YXIgcmVuYW1lZEZpbGUgPSBmaWxlLnNsaWNlKDAsIGZpbGUuc2l6ZSwgZmlsZS50eXBlKTtcbiAgICByZW5hbWVkRmlsZS5sYXN0TW9kaWZpZWREYXRlID0gZmlsZS5sYXN0TW9kaWZpZWREYXRlO1xuICAgIHJlbmFtZWRGaWxlLm5hbWUgPSBuYW1lO1xuICAgIHJldHVybiByZW5hbWVkRmlsZTtcbiAgfTtcblxuICB2YXIgY3JlYXRlRmlsZUxvYWRlciA9IGZ1bmN0aW9uIGNyZWF0ZUZpbGVMb2FkZXIoZmV0Y2hGbikge1xuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHNvdXJjZTogbnVsbCxcbiAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgc2l6ZTogbnVsbCxcbiAgICAgIHRpbWVzdGFtcDogbnVsbCxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgcmVxdWVzdDogbnVsbFxuICAgIH07XG5cbiAgICB2YXIgZ2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiBnZXRQcm9ncmVzcygpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5wcm9ncmVzcztcbiAgICB9O1xuICAgIHZhciBhYm9ydCA9IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgaWYgKCFzdGF0ZS5yZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN0YXRlLnJlcXVlc3QuYWJvcnQoKTtcbiAgICB9O1xuXG4gICAgLy8gbG9hZCBzb3VyY2VcbiAgICB2YXIgbG9hZCA9IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICAvLyBnZXQgcXVpY2sgcmVmZXJlbmNlXG4gICAgICB2YXIgc291cmNlID0gc3RhdGUuc291cmNlO1xuXG4gICAgICBhcGkuZmlyZSgnaW5pdCcsIHNvdXJjZSk7XG5cbiAgICAgIC8vIExvYWQgRmlsZXNcbiAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICAgIGFwaS5maXJlKCdsb2FkJywgc291cmNlKTtcbiAgICAgIH0gZWxzZSBpZiAoc291cmNlIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAvLyBMb2FkIGJsb2JzLCBzZXQgZGVmYXVsdCBuYW1lIHRvIGN1cnJlbnQgZGF0ZVxuICAgICAgICBhcGkuZmlyZSgnbG9hZCcsIGdldEZpbGVGcm9tQmxvYihzb3VyY2UsIGdldERhdGVTdHJpbmcoKSkpO1xuICAgICAgfSBlbHNlIGlmIChpc0Jhc2U2NERhdGFVUkkoc291cmNlKSkge1xuICAgICAgICAvLyBMb2FkIGJhc2UgNjQsIHNldCBkZWZhdWx0IG5hbWUgdG8gY3VycmVudCBkYXRlXG4gICAgICAgIGFwaS5maXJlKCdsb2FkJywgZ2V0RmlsZUZyb21CYXNlNjREYXRhVVJJKHNvdXJjZSwgZ2V0RGF0ZVN0cmluZygpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEZWFsIGFzIGlmIGlzIGV4dGVybmFsIFVSTCwgbGV0J3MgbG9hZCBpdCFcbiAgICAgICAgbG9hZFVSTChzb3VyY2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBsb2FkcyBhIHVybFxuICAgIHZhciBsb2FkVVJMID0gZnVuY3Rpb24gbG9hZFVSTCh1cmwpIHtcbiAgICAgIC8vIGlzIHJlbW90ZSB1cmwgYW5kIG5vIGZldGNoIG1ldGhvZCBzdXBwbGllZFxuICAgICAgaWYgKCFmZXRjaEZuKSB7XG4gICAgICAgIGFwaS5maXJlKCdlcnJvcicsIHtcbiAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgIGJvZHk6IFwiQ2FuJ3QgbG9hZCBVUkxcIixcbiAgICAgICAgICBjb2RlOiA0MDBcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IHJlcXVlc3Qgc3RhcnRcbiAgICAgIHN0YXRlLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAgIC8vIGxvYWQgZmlsZVxuICAgICAgc3RhdGUucmVxdWVzdCA9IGZldGNoRm4oXG4gICAgICAgIHVybCxcbiAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAvLyB1cGRhdGUgZHVyYXRpb25cbiAgICAgICAgICBzdGF0ZS5kdXJhdGlvbiA9IERhdGUubm93KCkgLSBzdGF0ZS50aW1lc3RhbXA7XG5cbiAgICAgICAgICAvLyBkb25lIVxuICAgICAgICAgIHN0YXRlLmNvbXBsZXRlID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIHR1cm4gYmxvYiByZXNwb25zZSBpbnRvIGEgZmlsZVxuICAgICAgICAgIGlmIChyZXNwb25zZSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gZ2V0RmlsZUZyb21CbG9iKFxuICAgICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgICAgZ2V0RmlsZW5hbWVGcm9tVVJMKHVybCkgfHwgZ2V0RGF0ZVN0cmluZygpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFwaS5maXJlKCdsb2FkJywgcmVzcG9uc2UgaW5zdGFuY2VvZiBCbG9iID8gcmVzcG9uc2UgOiByZXNwb25zZS5ib2R5KTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICBhcGkuZmlyZShcbiAgICAgICAgICAgICdlcnJvcicsXG4gICAgICAgICAgICB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgIGNvZGU6IDAsXG4gICAgICAgICAgICAgICAgICBib2R5OiBlcnJvclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiBlcnJvclxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKGNvbXB1dGFibGUsIGN1cnJlbnQsIHRvdGFsKSB7XG4gICAgICAgICAgLy8gY29sbGVjdGVkIHNvbWUgbWV0YSBkYXRhIGFscmVhZHlcbiAgICAgICAgICBpZiAodG90YWwpIHtcbiAgICAgICAgICAgIHN0YXRlLnNpemUgPSB0b3RhbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB1cGRhdGUgZHVyYXRpb25cbiAgICAgICAgICBzdGF0ZS5kdXJhdGlvbiA9IERhdGUubm93KCkgLSBzdGF0ZS50aW1lc3RhbXA7XG5cbiAgICAgICAgICAvLyBpZiB3ZSBjYW4ndCBjb21wdXRlIHByb2dyZXNzLCB3ZSdyZSBub3QgZ29pbmcgdG8gZmlyZSBwcm9ncmVzcyBldmVudHNcbiAgICAgICAgICBpZiAoIWNvbXB1dGFibGUpIHtcbiAgICAgICAgICAgIHN0YXRlLnByb2dyZXNzID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB1cGRhdGUgcHJvZ3Jlc3MgcGVyY2VudGFnZVxuICAgICAgICAgIHN0YXRlLnByb2dyZXNzID0gY3VycmVudCAvIHRvdGFsO1xuXG4gICAgICAgICAgLy8gZXhwb3NlXG4gICAgICAgICAgYXBpLmZpcmUoJ3Byb2dyZXNzJywgc3RhdGUucHJvZ3Jlc3MpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICBhcGkuZmlyZSgnYWJvcnQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICBhcGkuZmlyZSgnbWV0YScsIHtcbiAgICAgICAgICAgIHNpemU6IHN0YXRlLnNpemUsXG4gICAgICAgICAgICBmaWxlbmFtZTogZ2V0RmlsZW5hbWVGcm9tSGVhZGVycyhcbiAgICAgICAgICAgICAgdHlwZW9mIHJlc3BvbnNlID09PSAnc3RyaW5nJyA/IHJlc3BvbnNlIDogcmVzcG9uc2UuaGVhZGVyc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH07XG5cbiAgICB2YXIgYXBpID0gX2V4dGVuZHMoe30sIG9uKCksIHtcbiAgICAgIHNldFNvdXJjZTogZnVuY3Rpb24gc2V0U291cmNlKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gKHN0YXRlLnNvdXJjZSA9IHNvdXJjZSk7XG4gICAgICB9LFxuICAgICAgZ2V0UHJvZ3Jlc3M6IGdldFByb2dyZXNzLCAvLyBmaWxlIGxvYWQgcHJvZ3Jlc3NcbiAgICAgIGFib3J0OiBhYm9ydCwgLy8gYWJvcnQgZmlsZSBsb2FkXG4gICAgICBsb2FkOiBsb2FkIC8vIHN0YXJ0IGxvYWRcbiAgICB9KTtcblxuICAgIHJldHVybiBhcGk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVJlc3BvbnNlID0gZnVuY3Rpb24gY3JlYXRlUmVzcG9uc2UodHlwZSwgY29kZSwgYm9keSwgaGVhZGVycykge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgY29kZTogY29kZSxcbiAgICAgIGJvZHk6IGJvZHksXG4gICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgfTtcbiAgfTtcblxuICB2YXIgc2VuZFJlcXVlc3QgPSBmdW5jdGlvbiBzZW5kUmVxdWVzdChkYXRhLCB1cmwsIG9wdGlvbnMpIHtcbiAgICB2YXIgYXBpID0ge1xuICAgICAgb25oZWFkZXJzOiBmdW5jdGlvbiBvbmhlYWRlcnMoKSB7fSxcbiAgICAgIG9ucHJvZ3Jlc3M6IGZ1bmN0aW9uIG9ucHJvZ3Jlc3MoKSB7fSxcbiAgICAgIG9ubG9hZDogZnVuY3Rpb24gb25sb2FkKCkge30sXG4gICAgICBvbmVycm9yOiBmdW5jdGlvbiBvbmVycm9yKCkge30sXG4gICAgICBvbmFib3J0OiBmdW5jdGlvbiBvbmFib3J0KCkge30sXG4gICAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgICAgIGFib3J0ZWQgPSB0cnVlO1xuICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gdGltZW91dCBpZGVudGlmaWVyLCBvbmx5IHVzZWQgd2hlbiB0aW1lb3V0IGlzIGRlZmluZWRcbiAgICB2YXIgdGltZW91dElkID0gbnVsbDtcbiAgICB2YXIgdGltZWRPdXQgPSBmYWxzZTtcbiAgICB2YXIgYWJvcnRlZCA9IGZhbHNlO1xuICAgIHZhciBoZWFkZXJzUmVjZWl2ZWQgPSBmYWxzZTtcblxuICAgIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gX2V4dGVuZHMoXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuXG4gICAgLy8gaWYgbWV0aG9kIGlzIEdFVCwgYWRkIGFueSByZWNlaXZlZCBkYXRhIHRvIHVybFxuICAgIGlmICgvR0VUL2kudGVzdChvcHRpb25zLm1ldGhvZCkgJiYgZGF0YSkge1xuICAgICAgLy91cmwgPSBgJHsgdXJsIH0keyBoYXNRdWVyeVN0cmluZyh1cmwpID8gJyYnIDogJz8nIH1kYXRhPSR7IGVuY29kZVVSSUNvbXBvbmVudCh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgPyBkYXRhIDogSlNPTi5zdHJpbmdpZnkoZGF0YSkpIH1gO1xuICAgICAgdXJsID1cbiAgICAgICAgJycgK1xuICAgICAgICB1cmwgK1xuICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnID8gZGF0YSA6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIHJlcXVlc3RcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBwcm9ncmVzcyBvZiBsb2FkXG4gICAgdmFyIHByb2Nlc3MgPSAvR0VUL2kudGVzdChvcHRpb25zLm1ldGhvZCkgPyB4aHIgOiB4aHIudXBsb2FkO1xuICAgIHByb2Nlc3Mub25wcm9ncmVzcyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8vIHByb2dyZXNzIGV2ZW50IHJlY2VpdmVkLCB0aW1lb3V0IG5vIGxvbmdlciBuZWVkZWRcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuXG4gICAgICAvLyBubyBwcm9ncmVzcyBldmVudCB3aGVuIGFib3J0ZWQgKCBvbnByb2dyZXNzIGlzIGNhbGxlZCBvbmNlIGFmdGVyIGFib3J0KCkgKVxuICAgICAgaWYgKGFib3J0ZWQgfHwgdGltZWRPdXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkub25wcm9ncmVzcyhlLmxlbmd0aENvbXB1dGFibGUsIGUubG9hZGVkLCBlLnRvdGFsKTtcbiAgICB9O1xuXG4gICAgLy8gdHJpZXMgdG8gZ2V0IGhlYWRlciBpbmZvIHRvIHRoZSBhcHAgYXMgZmFzdCBhcyBwb3NzaWJsZVxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIG5vdCBpbnRlcmVzdGluZyBpbiB0aGVzZSBzdGF0ZXMgKCd1bnNlbnQnIGFuZCAnb3BlbmVuZCcgYXMgdGhleSBkb24ndCBnaXZlIHVzIGFueSBhZGRpdGlvbmFsIGluZm8pXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPCAyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gbm8gc2VydmVyIHJlc3BvbnNlXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHRpbWVvdXQgbm8gbG9uZ2VyIG5lZWRlZCBhcyBjb25uZWN0aW9uIGlzIHNldHVwXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcblxuICAgICAgaWYgKGhlYWRlcnNSZWNlaXZlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGhlYWRlcnNSZWNlaXZlZCA9IHRydWU7XG5cbiAgICAgIC8vIHdlJ3ZlIHByb2JhYmx5IHJlY2VpdmVkIHNvbWUgdXNlZnVsIGRhdGEgaW4gcmVzcG9uc2UgaGVhZGVyc1xuICAgICAgYXBpLm9uaGVhZGVycyhcbiAgICAgICAgY3JlYXRlUmVzcG9uc2UoJ2hlYWRlcnMnLCB4aHIuc3RhdHVzLCBudWxsLCB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpXG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyBsb2FkIHN1Y2Nlc3NmdWxcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBpcyBjbGFzc2lmaWVkIGFzIHZhbGlkIHJlc3BvbnNlXG4gICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICBhcGkub25sb2FkKFxuICAgICAgICAgIGNyZWF0ZVJlc3BvbnNlKFxuICAgICAgICAgICAgJ2xvYWQnLFxuICAgICAgICAgICAgeGhyLnN0YXR1cyxcbiAgICAgICAgICAgIHhoci5yZXNwb25zZSxcbiAgICAgICAgICAgIHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdCBhIHZhbGlkIHJlc3BvbnNlXG4gICAgICAgIGFwaS5vbmVycm9yKGNyZWF0ZVJlc3BvbnNlKCdlcnJvcicsIHhoci5zdGF0dXMsIHhoci5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGVycm9yIGR1cmluZyBsb2FkXG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIGFwaS5vbmVycm9yKGNyZWF0ZVJlc3BvbnNlKCdlcnJvcicsIHhoci5zdGF0dXMsIHhoci5zdGF0dXNUZXh0KSk7XG4gICAgfTtcblxuICAgIC8vIHJlcXVlc3QgYWJvcnRlZFxuICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGltZWRPdXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYWJvcnRlZCA9IHRydWU7XG4gICAgICBhcGkub25hYm9ydCgpO1xuICAgIH07XG5cbiAgICAvLyBzZXQgdGltZW91dCBpZiBkZWZpbmVkXG4gICAgaWYgKGlzSW50KG9wdGlvbnMudGltZW91dCkpIHtcbiAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRpbWVkT3V0ID0gdHJ1ZTtcbiAgICAgICAgYXBpLm9uZXJyb3IoY3JlYXRlUmVzcG9uc2UoJ2Vycm9yJywgMCwgJ3RpbWVvdXQnKSk7XG4gICAgICAgIGFwaS5hYm9ydCgpO1xuICAgICAgfSwgb3B0aW9ucy50aW1lb3V0KTtcbiAgICB9XG5cbiAgICAvLyBhZGQgaGVhZGVyc1xuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwsIHRydWUpO1xuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IHR5cGUgb2YgcmVzcG9uc2VcbiAgICBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcbiAgICB9XG5cbiAgICAvLyBzZXQgY3JlZGVudGlhbHNcbiAgICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIGxldCdzIHNlbmQgb3VyIGRhdGFcbiAgICB4aHIuc2VuZChkYXRhKTtcblxuICAgIHJldHVybiBhcGk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUZldGNoRnVuY3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVGZXRjaEZ1bmN0aW9uKCkge1xuICAgIHZhciBhcGlVcmwgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gICAgLy8gY3VzdG9tIGhhbmRsZXIgKHNob3VsZCBhbHNvIGhhbmRsZSBmaWxlLCBsb2FkLCBlcnJvciwgcHJvZ3Jlc3MgYW5kIGFib3J0KVxuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH1cblxuICAgIC8vIG5vIGFjdGlvbiBzdXBwbGllZFxuICAgIGlmICghYWN0aW9uIHx8ICFpc1N0cmluZyhhY3Rpb24udXJsKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gaW50ZXJuYWwgaGFuZGxlclxuICAgIHJldHVybiBmdW5jdGlvbih1cmwsIGxvYWQsIGVycm9yLCBwcm9ncmVzcywgYWJvcnQsIGhlYWRlcnMpIHtcbiAgICAgIC8vIGRvIGxvY2FsIG9yIHJlbW90ZSByZXF1ZXN0IGJhc2VkIG9uIGlmIHRoZSB1cmwgaXMgZXh0ZXJuYWxcbiAgICAgIHZhciByZXF1ZXN0ID0gc2VuZFJlcXVlc3QoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXBpVXJsICsgYWN0aW9uLnVybCxcbiAgICAgICAgX2V4dGVuZHMoe30sIGFjdGlvbiwge1xuICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAvLyB0dXJuIGJsb2IgaW50byBhIGZpbGVcbiAgICAgICAgcmVzcG9uc2UuYm9keSA9IGdldEZpbGVGcm9tQmxvYihcbiAgICAgICAgICByZXNwb25zZS5ib2R5LFxuICAgICAgICAgIGdldEZpbGVuYW1lRnJvbUhlYWRlcnMocmVzcG9uc2UuaGVhZGVycykgfHxcbiAgICAgICAgICAgIGdldEZpbGVuYW1lRnJvbVVSTCh1cmwpIHx8XG4gICAgICAgICAgICBnZXREYXRlU3RyaW5nKClcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBwYXNzIHVwZGF0ZWQgcmVzcG9uc2UgdG8gaGFuZGxlciBtZXRob2RcbiAgICAgICAgbG9hZChyZXNwb25zZSk7XG4gICAgICB9O1xuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZXJyb3I7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgIHJlcXVlc3Qub25hYm9ydCA9IGFib3J0O1xuICAgICAgcmVxdWVzdC5vbmhlYWRlcnMgPSBoZWFkZXJzO1xuXG4gICAgICAvLyBzaG91bGQgcmV0dXJuIHJlcXVlc3RcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH07XG4gIH07XG5cbiAgLypcbmZ1bmN0aW9uIHNpZ25hdHVyZTpcbiAgKGRhdGEsIGxvYWQsIGVycm9yLCBwcm9ncmVzcywgYWJvcnQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgIGFib3J0OigpID0+IHt9XG4gIH1cbn1cbiovXG4gIHZhciBjcmVhdGVQcm9jZXNzb3JGdW5jdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZVByb2Nlc3NvckZ1bmN0aW9uKCkge1xuICAgIHZhciBhcGlVcmwgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuICAgIHZhciBuYW1lID0gYXJndW1lbnRzWzJdO1xuXG4gICAgLy8gY3VzdG9tIGhhbmRsZXIgKHNob3VsZCBhbHNvIGhhbmRsZSBmaWxlLCBsb2FkLCBlcnJvciwgcHJvZ3Jlc3MgYW5kIGFib3J0KVxuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgdmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7XG4gICAgICAgICAgX2tleSA8IF9sZW47XG4gICAgICAgICAgX2tleSsrXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcmFtc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3Rpb24uYXBwbHkodW5kZWZpbmVkLCBbbmFtZV0uY29uY2F0KHBhcmFtcykpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBubyBhY3Rpb24gc3VwcGxpZWRcbiAgICBpZiAoIWFjdGlvbiB8fCAhaXNTdHJpbmcoYWN0aW9uLnVybCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGludGVybmFsIGhhbmRsZXJcbiAgICByZXR1cm4gZnVuY3Rpb24oZmlsZSwgbWV0YWRhdGEsIGxvYWQsIGVycm9yLCBwcm9ncmVzcywgYWJvcnQpIHtcbiAgICAgIC8vIG5vIGZpbGUgcmVjZWl2ZWRcbiAgICAgIGlmICghZmlsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGNyZWF0ZSBmb3JtZGF0YSBvYmplY3RcbiAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKG5hbWUsIGZpbGUsIGZpbGUubmFtZSk7XG5cbiAgICAgIC8vIGFkZCBtZXRhZGF0YSB1ZGVyIHNhbWUgbmFtZVxuICAgICAgaWYgKGlzT2JqZWN0KG1ldGFkYXRhKSkge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQobmFtZSwgSlNPTi5zdHJpbmdpZnkobWV0YWRhdGEpKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2VuZCByZXF1ZXN0IG9iamVjdFxuICAgICAgdmFyIHJlcXVlc3QgPSBzZW5kUmVxdWVzdChmb3JtRGF0YSwgYXBpVXJsICsgYWN0aW9uLnVybCwgYWN0aW9uKTtcbiAgICAgIHJlcXVlc3Qub25sb2FkID0gbG9hZDtcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGVycm9yO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICByZXF1ZXN0Lm9uYWJvcnQgPSBhYm9ydDtcblxuICAgICAgLy8gc2hvdWxkIHJldHVybiByZXF1ZXN0XG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9O1xuICB9O1xuXG4gIC8qXG4gZnVuY3Rpb24gc2lnbmF0dXJlOlxuICh1bmlxdWVGaWxlSWQsIGxvYWQsIGVycm9yKSA9PiB7IH1cbiAqL1xuICB2YXIgY3JlYXRlUmV2ZXJ0RnVuY3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVSZXZlcnRGdW5jdGlvbigpIHtcbiAgICB2YXIgYXBpVXJsID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIGlzIGN1c3RvbSBpbXBsZW1lbnRhdGlvblxuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH1cblxuICAgIC8vIG5vIGFjdGlvbiBzdXBwbGllZCwgcmV0dXJuIHN0dWIgZnVuY3Rpb24sIGludGVyZmFjZSB3aWxsIHdvcmssIGJ1dCBmaWxlIHdvbid0IGJlIHJlbW92ZWRcbiAgICBpZiAoIWFjdGlvbiB8fCAhaXNTdHJpbmcoYWN0aW9uLnVybCkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbih1bmlxdWVGaWxlSWQsIGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gaW50ZXJuYWwgaW1wbGVtZW50YXRpb25cbiAgICByZXR1cm4gZnVuY3Rpb24odW5pcXVlRmlsZUlkLCBsb2FkLCBlcnJvcikge1xuICAgICAgdmFyIHJlcXVlc3QgPSBzZW5kUmVxdWVzdChcbiAgICAgICAgdW5pcXVlRmlsZUlkLFxuICAgICAgICBhcGlVcmwgKyBhY3Rpb24udXJsLFxuICAgICAgICBhY3Rpb24gLy8gY29udGFpbnMgbWV0aG9kLCBoZWFkZXJzIGFuZCB3aXRoQ3JlZGVudGlhbHMgcHJvcGVydGllc1xuICAgICAgKTtcbiAgICAgIHJlcXVlc3Qub25sb2FkID0gbG9hZDtcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGVycm9yO1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgZ2V0UmFuZG9tTnVtYmVyID0gZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKCkge1xuICAgIHZhciBtaW4gPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgIHZhciBtYXggPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuICAgIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbik7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVBlcmNlaXZlZFBlcmZvcm1hbmNlVXBkYXRlciA9IGZ1bmN0aW9uIGNyZWF0ZVBlcmNlaXZlZFBlcmZvcm1hbmNlVXBkYXRlcihcbiAgICBjYlxuICApIHtcbiAgICB2YXIgZHVyYXRpb24gPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMDAwO1xuICAgIHZhciB0aWNrTWluID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMjU7XG4gICAgdmFyIHRpY2tNYXggPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiAyNTA7XG5cbiAgICB2YXIgdGltZW91dCA9IG51bGw7XG4gICAgdmFyIHN0YXJ0ID0gRGF0ZS5ub3coKTtcblxuICAgIHZhciB0aWNrID0gZnVuY3Rpb24gdGljaygpIHtcbiAgICAgIHZhciBydW50aW1lID0gRGF0ZS5ub3coKSAtIHN0YXJ0O1xuICAgICAgdmFyIGRlbGF5ID0gZ2V0UmFuZG9tTnVtYmVyKHRpY2tNaW4sIHRpY2tNYXgpO1xuXG4gICAgICBpZiAocnVudGltZSArIGRlbGF5ID4gZHVyYXRpb24pIHtcbiAgICAgICAgZGVsYXkgPSBydW50aW1lICsgZGVsYXkgLSBkdXJhdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb2dyZXNzID0gcnVudGltZSAvIGR1cmF0aW9uO1xuICAgICAgaWYgKHByb2dyZXNzID49IDEpIHtcbiAgICAgICAgY2IoMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2IocHJvZ3Jlc3MpO1xuXG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCh0aWNrLCBkZWxheSk7XG4gICAgfTtcblxuICAgIHRpY2soKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBjcmVhdGVGaWxlUHJvY2Vzc29yID0gZnVuY3Rpb24gY3JlYXRlRmlsZVByb2Nlc3Nvcihwcm9jZXNzRm4pIHtcbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICBwZXJjZWl2ZWRQcm9ncmVzczogMCxcbiAgICAgIHBlcmNlaXZlZFBlcmZvcm1hbmNlVXBkYXRlcjogbnVsbCxcbiAgICAgIHByb2dyZXNzOiBudWxsLFxuICAgICAgdGltZXN0YW1wOiBudWxsLFxuICAgICAgcGVyY2VpdmVkRHVyYXRpb246IDAsXG4gICAgICBkdXJhdGlvbjogMCxcbiAgICAgIHJlcXVlc3Q6IG51bGwsXG4gICAgICByZXNwb25zZTogbnVsbFxuICAgIH07XG5cbiAgICB2YXIgcHJvY2VzcyA9IGZ1bmN0aW9uIHByb2Nlc3MoZmlsZSwgbWV0YWRhdGEpIHtcbiAgICAgIHZhciBwcm9ncmVzc0ZuID0gZnVuY3Rpb24gcHJvZ3Jlc3NGbigpIHtcbiAgICAgICAgLy8gd2UndmUgbm90IHlldCBzdGFydGVkIHRoZSByZWFsIGRvd25sb2FkLCBzdG9wIGhlcmVcbiAgICAgICAgLy8gdGhlIHJlcXVlc3QgbWlnaHQgbm90IGdvIHRocm91Z2gsIHNlcnZlciB0cm91YmxlLCBzdHVmZiBsaWtlIHRoYXRcbiAgICAgICAgLy8gaWYgc3RhdGUucHJvZ3Jlc3MgaXMgbnVsbCwgdGhlIHNlcnZlciBkb2VzIG5vdCBhbGxvdyBjb21wdXRpbmcgcHJvZ3Jlc3NcbiAgICAgICAgaWYgKHN0YXRlLmR1cmF0aW9uID09PSAwIHx8IHN0YXRlLnByb2dyZXNzID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXMgd2UncmUgbm93IHByb2Nlc3NpbmcsIGZpcmUgdGhlIHByb2dyZXNzIGV2ZW50XG4gICAgICAgIGFwaS5maXJlKCdwcm9ncmVzcycsIGFwaS5nZXRQcm9ncmVzcygpKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBjb21wbGV0ZUZuID0gZnVuY3Rpb24gY29tcGxldGVGbigpIHtcbiAgICAgICAgc3RhdGUuY29tcGxldGUgPSB0cnVlO1xuXG4gICAgICAgIGFwaS5maXJlKCdsb2FkJywgc3RhdGUucmVzcG9uc2UuYm9keSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBsZXQncyBzdGFydCBwcm9jZXNzaW5nXG4gICAgICBhcGkuZmlyZSgnc3RhcnQnKTtcblxuICAgICAgLy8gc2V0IHJlcXVlc3Qgc3RhcnRcbiAgICAgIHN0YXRlLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAgIC8vIGNyZWF0ZSBwZXJjZWl2ZWQgcGVyZm9ybWFuY2UgcHJvZ3Jlc3MgaW5kaWNhdG9yXG4gICAgICBzdGF0ZS5wZXJjZWl2ZWRQZXJmb3JtYW5jZVVwZGF0ZXIgPSBjcmVhdGVQZXJjZWl2ZWRQZXJmb3JtYW5jZVVwZGF0ZXIoXG4gICAgICAgIGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICAgICAgc3RhdGUucGVyY2VpdmVkUHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgICBzdGF0ZS5wZXJjZWl2ZWREdXJhdGlvbiA9IERhdGUubm93KCkgLSBzdGF0ZS50aW1lc3RhbXA7XG5cbiAgICAgICAgICBwcm9ncmVzc0ZuKCk7XG5cbiAgICAgICAgICAvLyBpZiBmYWtlIHByb2dyZXNzIGlzIGRvbmUsIGFuZCBhIHJlc3BvbnNlIGhhcyBiZWVuIHJlY2VpdmVkLFxuICAgICAgICAgIC8vIGFuZCB3ZSd2ZSBub3QgeWV0IGNhbGxlZCB0aGUgY29tcGxldGUgbWV0aG9kXG4gICAgICAgICAgaWYgKHByb2dyZXNzID09PSAxICYmIHN0YXRlLnJlc3BvbnNlICYmICFzdGF0ZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgY29tcGxldGVGbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gcmFuZG9tIGRlbGF5IGFzIGluIGEgbGlzdCBvZiBmaWxlcyB5b3Ugc3RhcnQgbm90aWNpbmdcbiAgICAgICAgLy8gZmlsZXMgdXBsb2FkaW5nIGF0IHRoZSBleGFjdCBzYW1lIHNwZWVkXG4gICAgICAgIGdldFJhbmRvbU51bWJlcig3NTAsIDE1MDApXG4gICAgICApO1xuXG4gICAgICAvLyByZW1lbWJlciByZXF1ZXN0IHNvIHdlIGNhbiBhYm9ydCBpdCBsYXRlclxuICAgICAgc3RhdGUucmVxdWVzdCA9IHByb2Nlc3NGbihcbiAgICAgICAgLy8gdGhlIGZpbGUgdG8gcHJvY2Vzc1xuICAgICAgICBmaWxlLFxuXG4gICAgICAgIC8vIHRoZSBtZXRhZGF0YSB0byBzZW5kIGFsb25nXG4gICAgICAgIG1ldGFkYXRhLFxuXG4gICAgICAgIC8vIGNhbGxiYWNrcyAobG9hZCwgZXJyb3IsIHByb2dyZXNzLCBhYm9ydClcbiAgICAgICAgLy8gbG9hZCBleHBlY3RzIHRoZSBib2R5IHRvIGJlIGEgc2VydmVyIGlkIGlmXG4gICAgICAgIC8vIHlvdSB3YW50IHRvIG1ha2UgdXNlIG9mIHJldmVydFxuICAgICAgICBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIC8vIHdlIHB1dCB0aGUgcmVzcG9uc2UgaW4gc3RhdGUgc28gd2UgY2FuIGFjY2Vzc1xuICAgICAgICAgIC8vIGl0IG91dHNpZGUgb2YgdGhpcyBtZXRob2RcbiAgICAgICAgICBzdGF0ZS5yZXNwb25zZSA9XG4gICAgICAgICAgICB0eXBlb2YgcmVzcG9uc2UgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2xvYWQnLFxuICAgICAgICAgICAgICAgICAgY29kZTogMjAwLFxuICAgICAgICAgICAgICAgICAgYm9keTogcmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiByZXNwb25zZTtcblxuICAgICAgICAgIC8vIHVwZGF0ZSBkdXJhdGlvblxuICAgICAgICAgIHN0YXRlLmR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHN0YXRlLnRpbWVzdGFtcDtcblxuICAgICAgICAgIC8vIGZvcmNlIHByb2dyZXNzIHRvIDEgYXMgd2UncmUgbm93IGRvbmVcbiAgICAgICAgICBzdGF0ZS5wcm9ncmVzcyA9IDE7XG5cbiAgICAgICAgICAvLyB3ZSBhcmUgcmVhbGx5IGRvbmVcbiAgICAgICAgICAvLyBpZiBwZXJjZWl2ZWQgcHJvZ3Jlc3MgaXMgMSAoIHdhaXQgZm9yIHBlcmNlaXZlZCBwcm9ncmVzcyB0byBjb21wbGV0ZSApXG4gICAgICAgICAgLy8gb3IgaWYgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQgcHJvZ3Jlc3MgKCBudWxsIClcbiAgICAgICAgICBpZiAoc3RhdGUucGVyY2VpdmVkUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgIGNvbXBsZXRlRm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gZXJyb3IgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdHlwZSwgY29kZSwgYm9keVxuICAgICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIGNhbmNlbCB1cGRhdGVyXG4gICAgICAgICAgc3RhdGUucGVyY2VpdmVkUGVyZm9ybWFuY2VVcGRhdGVyLmNsZWFyKCk7XG5cbiAgICAgICAgICAvLyB1cGRhdGUgb3RoZXJzIGFib3V0IHRoaXMgZXJyb3JcbiAgICAgICAgICBhcGkuZmlyZShcbiAgICAgICAgICAgICdlcnJvcicsXG4gICAgICAgICAgICB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgIGNvZGU6IDAsXG4gICAgICAgICAgICAgICAgICBib2R5OiBlcnJvclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiBlcnJvclxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gYWN0dWFsIHByb2Nlc3NpbmcgcHJvZ3Jlc3NcbiAgICAgICAgZnVuY3Rpb24oY29tcHV0YWJsZSwgY3VycmVudCwgdG90YWwpIHtcbiAgICAgICAgICAvLyB1cGRhdGUgYWN0dWFsIGR1cmF0aW9uXG4gICAgICAgICAgc3RhdGUuZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gc3RhdGUudGltZXN0YW1wO1xuXG4gICAgICAgICAgLy8gdXBkYXRlIGFjdHVhbCBwcm9ncmVzc1xuICAgICAgICAgIHN0YXRlLnByb2dyZXNzID0gY29tcHV0YWJsZSA/IGN1cnJlbnQgLyB0b3RhbCA6IG51bGw7XG5cbiAgICAgICAgICBwcm9ncmVzc0ZuKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gYWJvcnQgZG9lcyBub3QgZXhwZWN0IGEgdmFsdWVcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gc3RvcCB1cGRhdGVyXG4gICAgICAgICAgc3RhdGUucGVyY2VpdmVkUGVyZm9ybWFuY2VVcGRhdGVyLmNsZWFyKCk7XG5cbiAgICAgICAgICAvLyBmaXJlIHRoZSBhYm9ydCBldmVudCBzbyB3ZSBjYW4gc3dpdGNoIHZpc3VhbHNcbiAgICAgICAgICBhcGkuZmlyZSgnYWJvcnQnKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgdmFyIGFib3J0ID0gZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgICAvLyBubyByZXF1ZXN0IHJ1bm5pbmcsIGNhbid0IGFib3J0XG4gICAgICBpZiAoIXN0YXRlLnJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBzdG9wIHVwZGF0ZXJcbiAgICAgIHN0YXRlLnBlcmNlaXZlZFBlcmZvcm1hbmNlVXBkYXRlci5jbGVhcigpO1xuXG4gICAgICAvLyBhYm9ydCBhY3R1YWwgcmVxdWVzdFxuICAgICAgc3RhdGUucmVxdWVzdC5hYm9ydCgpO1xuXG4gICAgICAvLyBpZiBoYXMgcmVzcG9uc2Ugb2JqZWN0LCB3ZSd2ZSBjb21wbGV0ZWQgdGhlIHJlcXVlc3RcbiAgICAgIHN0YXRlLmNvbXBsZXRlID0gdHJ1ZTtcblxuICAgICAgLy8gbm93IGFib3J0ZWQsIGlmIHNlcnZlciByZXR1cm5lZCBhIHJlc3BvbnNlLCBsZXQncyBwYXNzIGl0IGFsb25nXG4gICAgICBhcGkuZmlyZSgnYWJvcnQnLCBzdGF0ZS5yZXNwb25zZSA/IHN0YXRlLnJlc3BvbnNlLmJvZHkgOiBudWxsKTtcbiAgICB9O1xuXG4gICAgdmFyIHJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICBhYm9ydCgpO1xuICAgICAgc3RhdGUuY29tcGxldGUgPSBmYWxzZTtcbiAgICAgIHN0YXRlLnBlcmNlaXZlZFByb2dyZXNzID0gMDtcbiAgICAgIHN0YXRlLnByb2dyZXNzID0gMDtcbiAgICAgIHN0YXRlLnRpbWVzdGFtcCA9IG51bGw7XG4gICAgICBzdGF0ZS5wZXJjZWl2ZWREdXJhdGlvbiA9IDA7XG4gICAgICBzdGF0ZS5kdXJhdGlvbiA9IDA7XG4gICAgICBzdGF0ZS5yZXF1ZXN0ID0gbnVsbDtcbiAgICAgIHN0YXRlLnJlc3BvbnNlID0gbnVsbDtcbiAgICB9O1xuXG4gICAgdmFyIGdldFByb2dyZXNzID0gZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MoKSB7XG4gICAgICByZXR1cm4gc3RhdGUucHJvZ3Jlc3NcbiAgICAgICAgPyBNYXRoLm1pbihzdGF0ZS5wcm9ncmVzcywgc3RhdGUucGVyY2VpdmVkUHJvZ3Jlc3MpXG4gICAgICAgIDogbnVsbDtcbiAgICB9O1xuICAgIHZhciBnZXREdXJhdGlvbiA9IGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIE1hdGgubWluKHN0YXRlLmR1cmF0aW9uLCBzdGF0ZS5wZXJjZWl2ZWREdXJhdGlvbik7XG4gICAgfTtcblxuICAgIHZhciBhcGkgPSBfZXh0ZW5kcyh7fSwgb24oKSwge1xuICAgICAgcHJvY2VzczogcHJvY2VzcywgLy8gc3RhcnQgcHJvY2Vzc2luZyBmaWxlXG4gICAgICBhYm9ydDogYWJvcnQsIC8vIGFib3J0IGFjdGl2ZSBwcm9jZXNzIHJlcXVlc3RcbiAgICAgIGdldFByb2dyZXNzOiBnZXRQcm9ncmVzcyxcbiAgICAgIGdldER1cmF0aW9uOiBnZXREdXJhdGlvbixcbiAgICAgIHJlc2V0OiByZXNldFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFwaTtcbiAgfTtcblxuICB2YXIgZ2V0RmlsZW5hbWVXaXRob3V0RXh0ZW5zaW9uID0gZnVuY3Rpb24gZ2V0RmlsZW5hbWVXaXRob3V0RXh0ZW5zaW9uKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZS5zdWJzdHIoMCwgbmFtZS5sYXN0SW5kZXhPZignLicpKSB8fCBuYW1lO1xuICB9O1xuXG4gIHZhciBJdGVtU3RhdHVzID0ge1xuICAgIElOSVQ6IDEsXG4gICAgSURMRTogMixcbiAgICBQUk9DRVNTSU5HOiAzLFxuICAgIFBST0NFU1NJTkdfUEFVU0VEOiA0LFxuICAgIFBST0NFU1NJTkdfQ09NUExFVEU6IDUsXG4gICAgUFJPQ0VTU0lOR19FUlJPUjogNixcbiAgICBMT0FESU5HOiA3LFxuICAgIExPQURfRVJST1I6IDhcbiAgfTtcblxuICB2YXIgY3JlYXRlRmlsZVN0dWIgPSBmdW5jdGlvbiBjcmVhdGVGaWxlU3R1Yihzb3VyY2UpIHtcbiAgICB2YXIgZGF0YSA9IFtzb3VyY2UubmFtZSwgc291cmNlLnNpemUsIHNvdXJjZS50eXBlXTtcblxuICAgIC8vIGlzIGJsb2Igb3IgYmFzZTY0LCB0aGVuIHdlIG5lZWQgdG8gc2V0IHRoZSBuYW1lXG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEJsb2IgfHwgaXNCYXNlNjREYXRhVVJJKHNvdXJjZSkpIHtcbiAgICAgIGRhdGFbMF0gPSBnZXREYXRlU3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmIChpc0Jhc2U2NERhdGFVUkkoc291cmNlKSkge1xuICAgICAgLy8gaWYgaXMgYmFzZTY0IGRhdGEgdXJpIHdlIG5lZWQgdG8gZGV0ZXJtaW5lIHRoZSBhdmVyYWdlIHNpemUgYW5kIHR5cGVcbiAgICAgIGRhdGFbMV0gPSBzb3VyY2UubGVuZ3RoO1xuICAgICAgZGF0YVsyXSA9IGdldE1pbWVUeXBlRnJvbUJhc2U2NERhdGFVUkkoc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKCEoc291cmNlIGluc3RhbmNlb2YgRmlsZSkpIHtcbiAgICAgIC8vIHVybFxuICAgICAgZGF0YVswXSA9IGdldEZpbGVuYW1lRnJvbVVSTChzb3VyY2UpO1xuICAgICAgZGF0YVsxXSA9IDA7XG4gICAgICBkYXRhWzJdID0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGRhdGFbMF0sXG4gICAgICBzaXplOiBkYXRhWzFdLFxuICAgICAgdHlwZTogZGF0YVsyXVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUl0ZW0gPSBmdW5jdGlvbiBjcmVhdGVJdGVtKCkge1xuICAgIHZhciBzZXJ2ZXJGaWxlUmVmZXJlbmNlID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcblxuICAgIC8vIHVuaXF1ZSBpZCBmb3IgdGhpcyBpdGVtLCBpcyB1c2VkIHRvIGlkZW50aWZ5IHRoZSBpdGVtIGFjcm9zcyB2aWV3c1xuICAgIHZhciBpZCA9IGdldFVuaXF1ZUlkKCk7XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBpdGVtIHN0YXRlXG4gICAgICovXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgLy8gb3JpZ2luYWwgc291cmNlXG4gICAgICBzb3VyY2U6IG51bGwsXG5cbiAgICAgIC8vIGZpbGUgbW9kZWwgcmVmZXJlbmNlXG4gICAgICBmaWxlOiBudWxsLFxuXG4gICAgICAvLyBpZCBvZiBmaWxlIG9uIHNlcnZlclxuICAgICAgc2VydmVyRmlsZVJlZmVyZW5jZTogc2VydmVyRmlsZVJlZmVyZW5jZSxcblxuICAgICAgLy8gY3VycmVudCBpdGVtIHN0YXR1c1xuICAgICAgc3RhdHVzOiBzZXJ2ZXJGaWxlUmVmZXJlbmNlXG4gICAgICAgID8gSXRlbVN0YXR1cy5QUk9DRVNTSU5HX0NPTVBMRVRFXG4gICAgICAgIDogSXRlbVN0YXR1cy5JTklULFxuXG4gICAgICAvLyBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgICBhY3RpdmVMb2FkZXI6IG51bGwsXG4gICAgICBhY3RpdmVQcm9jZXNzb3I6IG51bGxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRXh0ZXJuYWxseSBhZGRlZCBpdGVtIG1ldGFkYXRhXG4gICAgICovXG4gICAgdmFyIG1ldGFkYXRhID0ge307XG5cbiAgICAvLyBpdGVtIGRhdGFcbiAgICB2YXIgc2V0U3RhdHVzID0gZnVuY3Rpb24gc2V0U3RhdHVzKHN0YXR1cykge1xuICAgICAgcmV0dXJuIChzdGF0ZS5zdGF0dXMgPSBzdGF0dXMpO1xuICAgIH07XG5cbiAgICAvLyBmaWxlIGRhdGFcbiAgICB2YXIgZ2V0RmlsZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIGdldEZpbGVFeHRlbnNpb24oKSB7XG4gICAgICByZXR1cm4gZ2V0RXh0ZW5zaW9uRnJvbUZpbGVuYW1lKHN0YXRlLmZpbGUubmFtZSk7XG4gICAgfTtcbiAgICB2YXIgZ2V0RmlsZVR5cGUgPSBmdW5jdGlvbiBnZXRGaWxlVHlwZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5maWxlLnR5cGU7XG4gICAgfTtcbiAgICB2YXIgZ2V0RmlsZVNpemUgPSBmdW5jdGlvbiBnZXRGaWxlU2l6ZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5maWxlLnNpemU7XG4gICAgfTtcbiAgICB2YXIgZ2V0RmlsZSA9IGZ1bmN0aW9uIGdldEZpbGUoKSB7XG4gICAgICByZXR1cm4gc3RhdGUuZmlsZTtcbiAgICB9O1xuXG4gICAgLy8gbG9hZHMgZmlsZXNcbiAgICB2YXIgbG9hZCA9IGZ1bmN0aW9uIGxvYWQoc291cmNlLCBsb2FkZXIsIG9ubG9hZCkge1xuICAgICAgLy8gcmVtZW1iZXIgdGhlIG9yaWdpbmFsIGl0ZW0gc291cmNlXG4gICAgICBzdGF0ZS5zb3VyY2UgPSBzb3VyY2U7XG5cbiAgICAgIC8vIHNldCBhIHN0dWIgZmlsZSBvYmplY3Qgd2hpbGUgbG9hZGluZyB0aGUgYWN0dWFsIGRhdGFcbiAgICAgIHN0YXRlLmZpbGUgPSBjcmVhdGVGaWxlU3R1Yihzb3VyY2UpO1xuXG4gICAgICAvLyBzdGFydHMgbG9hZGluZ1xuICAgICAgbG9hZGVyLm9uKCdpbml0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGFwaS5maXJlKCdsb2FkLWluaXQnKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyB3ZSdldmUgcmVjZWl2ZWQgYSBzaXplIGluZGljYXRpb24sIGxldCdzIHVwZGF0ZSB0aGUgc3R1YlxuICAgICAgbG9hZGVyLm9uKCdtZXRhJywgZnVuY3Rpb24obWV0YSkge1xuICAgICAgICAvLyBzZXQgc2l6ZSBvZiBmaWxlIHN0dWJcbiAgICAgICAgc3RhdGUuZmlsZS5zaXplID0gbWV0YS5zaXplO1xuXG4gICAgICAgIC8vIHNldCBuYW1lIG9mIGZpbGUgc3R1YlxuICAgICAgICBzdGF0ZS5maWxlLmZpbGVuYW1lID0gbWV0YS5maWxlbmFtZTtcblxuICAgICAgICAvLyBzaXplIGhhcyBiZWVuIHVwZGF0ZWRcbiAgICAgICAgYXBpLmZpcmUoJ2xvYWQtbWV0YScpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHRoZSBmaWxlIGlzIG5vdyBsb2FkaW5nIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBwcm9ncmVzcyBpbmRpY2F0b3JzXG4gICAgICBsb2FkZXIub24oJ3Byb2dyZXNzJywgZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcbiAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuTE9BRElORyk7XG5cbiAgICAgICAgYXBpLmZpcmUoJ2xvYWQtcHJvZ3Jlc3MnLCBwcm9ncmVzcyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gYW4gZXJyb3Igd2FzIHRocm93biB3aGlsZSBsb2FkaW5nIHRoZSBmaWxlLCB3ZSBuZWVkIHRvIHN3aXRjaCB0byBlcnJvciBzdGF0ZVxuICAgICAgbG9hZGVyLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIHNldFN0YXR1cyhJdGVtU3RhdHVzLkxPQURfRVJST1IpO1xuXG4gICAgICAgIGFwaS5maXJlKCdsb2FkLXJlcXVlc3QtZXJyb3InLCBlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gdXNlciBvciBhbm90aGVyIHByb2Nlc3MgYWJvcnRlZCB0aGUgZmlsZSBsb2FkIChjYW5ub3QgcmV0cnkpXG4gICAgICBsb2FkZXIub24oJ2Fib3J0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFN0YXR1cyhJdGVtU3RhdHVzLklOSVQpO1xuXG4gICAgICAgIGFwaS5maXJlKCdsb2FkLWFib3J0Jyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gZG9uZSBsb2FkaW5nXG4gICAgICBsb2FkZXIub24oJ2xvYWQnLCBmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgIC8vIGFzIHdlJ3ZlIG5vdyBsb2FkZWQgdGhlIGZpbGUgdGhlIGxvYWRlciBpcyBubyBsb25nZXIgcmVxdWlyZWRcbiAgICAgICAgc3RhdGUuYWN0aXZlTG9hZGVyID0gbnVsbDtcblxuICAgICAgICAvLyBjYWxsZWQgd2hlbiBmaWxlIGhhcyBsb2FkZWQgc3VjY2VzZnVsbHlcbiAgICAgICAgdmFyIHN1Y2Nlc3MgPSBmdW5jdGlvbiBzdWNjZXNzKHJlc3VsdCkge1xuICAgICAgICAgIC8vIHNldCAocG9zc2libHkpIHRyYW5zZm9ybWVkIGZpbGVcbiAgICAgICAgICBzdGF0ZS5maWxlID0gcmVzdWx0O1xuXG4gICAgICAgICAgLy8gZmlsZSByZWNlaXZlZFxuICAgICAgICAgIHNldFN0YXR1cyhJdGVtU3RhdHVzLklETEUpO1xuICAgICAgICAgIGFwaS5maXJlKCdsb2FkJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGVycm9yID0gZnVuY3Rpb24gZXJyb3IocmVzdWx0KSB7XG4gICAgICAgICAgLy8gc2V0IG9yaWdpbmFsIGZpbGVcbiAgICAgICAgICBzdGF0ZS5maWxlID0gZmlsZTtcbiAgICAgICAgICBhcGkuZmlyZSgnbG9hZC1tZXRhJyk7XG5cbiAgICAgICAgICBzZXRTdGF0dXMoSXRlbVN0YXR1cy5MT0FEX0VSUk9SKTtcbiAgICAgICAgICBhcGkuZmlyZSgnbG9hZC1maWxlLWVycm9yJywgcmVzdWx0KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBzZXJ2ZXIgZmlsZSByZWZlcmVuY2UsIHdlIGRvbid0IG5lZWQgdG8gY2FsbCB0aGUgb25sb2FkIG1ldGhvZFxuICAgICAgICBpZiAoc3RhdGUuc2VydmVyRmlsZVJlZmVyZW5jZSkge1xuICAgICAgICAgIHN1Y2Nlc3MoZmlsZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm8gc2VydmVyIGlkLCBsZXQncyBnaXZlIHRoaXMgZmlsZSB0aGUgZnVsbCB0cmVhdG1lbnRcbiAgICAgICAgb25sb2FkKGZpbGUsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBzZXQgbG9hZGVyIHNvdXJjZSBkYXRhXG4gICAgICBsb2FkZXIuc2V0U291cmNlKHNvdXJjZSk7XG5cbiAgICAgIC8vIHNldCBhcyBhY3RpdmUgbG9hZGVyXG4gICAgICBzdGF0ZS5hY3RpdmVMb2FkZXIgPSBsb2FkZXI7XG5cbiAgICAgIC8vIGxvYWQgdGhlIHNvdXJjZSBkYXRhXG4gICAgICBsb2FkZXIubG9hZCgpO1xuICAgIH07XG5cbiAgICAvLyBmaWxlIHByb2Nlc3NvclxuICAgIHZhciBwcm9jZXNzID0gZnVuY3Rpb24gcHJvY2Vzcyhwcm9jZXNzb3IsIG9ucHJvY2Vzcykge1xuICAgICAgLy8gaWYgbm8gZmlsZSBsb2FkZWQgd2UnbGwgd2FpdCBmb3IgdGhlIGxvYWQgZXZlbnRcbiAgICAgIGlmICghKHN0YXRlLmZpbGUgaW5zdGFuY2VvZiBCbG9iKSkge1xuICAgICAgICBhcGkub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBwcm9jZXNzKHByb2Nlc3Nvciwgb25wcm9jZXNzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gc2V0dXAgcHJvY2Vzc29yXG5cbiAgICAgIHByb2Nlc3Nvci5vbignbG9hZCcsIGZ1bmN0aW9uKHNlcnZlckZpbGVSZWZlcmVuY2UpIHtcbiAgICAgICAgLy8gbm8gbG9uZ2VyIHJlcXVpcmVkXG4gICAgICAgIHN0YXRlLmFjdGl2ZVByb2Nlc3NvciA9IG51bGw7XG5cbiAgICAgICAgLy8gbmVlZCB0aGlzIGlkIHRvIGJlIGFibGUgdG8gcmV2ZXIgdGhlIHVwbG9hZFxuICAgICAgICBzdGF0ZS5zZXJ2ZXJGaWxlUmVmZXJlbmNlID0gc2VydmVyRmlsZVJlZmVyZW5jZTtcblxuICAgICAgICBzZXRTdGF0dXMoSXRlbVN0YXR1cy5QUk9DRVNTSU5HX0NPTVBMRVRFKTtcbiAgICAgICAgYXBpLmZpcmUoJ3Byb2Nlc3MtY29tcGxldGUnLCBzZXJ2ZXJGaWxlUmVmZXJlbmNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9jZXNzb3Iub24oJ3N0YXJ0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGFwaS5maXJlKCdwcm9jZXNzLXN0YXJ0Jyk7XG4gICAgICB9KTtcblxuICAgICAgcHJvY2Vzc29yLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIHN0YXRlLmFjdGl2ZVByb2Nlc3NvciA9IG51bGw7XG4gICAgICAgIHNldFN0YXR1cyhJdGVtU3RhdHVzLlBST0NFU1NJTkdfRVJST1IpO1xuICAgICAgICBhcGkuZmlyZSgncHJvY2Vzcy1lcnJvcicsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9jZXNzb3Iub24oJ2Fib3J0JywgZnVuY3Rpb24oc2VydmVyRmlsZVJlZmVyZW5jZSkge1xuICAgICAgICBzdGF0ZS5hY3RpdmVQcm9jZXNzb3IgPSBudWxsO1xuXG4gICAgICAgIC8vIGlmIGZpbGUgd2FzIHVwbG9hZGVkIGJ1dCBwcm9jZXNzaW5nIHdhcyBjYW5jZWxsZWQgZHVyaW5nIHBlcmNlaXZlZCBwcm9jZXNzb3IgdGltZSBzdG9yZSBmaWxlIHJlZmVyZW5jZVxuICAgICAgICBzdGF0ZS5zZXJ2ZXJGaWxlUmVmZXJlbmNlID0gc2VydmVyRmlsZVJlZmVyZW5jZTtcblxuICAgICAgICBzZXRTdGF0dXMoSXRlbVN0YXR1cy5JRExFKTtcbiAgICAgICAgYXBpLmZpcmUoJ3Byb2Nlc3MtYWJvcnQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9jZXNzb3Iub24oJ3Byb2dyZXNzJywgZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcbiAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuUFJPQ0VTU0lORyk7XG4gICAgICAgIGFwaS5maXJlKCdwcm9jZXNzLXByb2dyZXNzJywgcHJvZ3Jlc3MpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHdoZW4gc3VjY2Vzc2Z1bGx5IHRyYW5zZm9ybWVkXG4gICAgICB2YXIgc3VjY2VzcyA9IGZ1bmN0aW9uIHN1Y2Nlc3MoZmlsZSkge1xuICAgICAgICBwcm9jZXNzb3IucHJvY2VzcyhmaWxlLCBfZXh0ZW5kcyh7fSwgbWV0YWRhdGEpKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyB0cmFuc2Zvcm0gcGhhc2VcbiAgICAgIHZhciBlcnJvciA9IGZ1bmN0aW9uIGVycm9yKHJlc3VsdCkge307XG5cbiAgICAgIC8vIHN0YXJ0IHByb2Nlc3NpbmcgdGhlIGZpbGVcbiAgICAgIG9ucHJvY2VzcyhzdGF0ZS5maWxlLCBzdWNjZXNzLCBlcnJvcik7XG5cbiAgICAgIC8vIHNldCBhcyBhY3RpdmUgcHJvY2Vzc29yXG4gICAgICBzdGF0ZS5hY3RpdmVQcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgfTtcblxuICAgIHZhciByZXZlcnQgPSBmdW5jdGlvbiByZXZlcnQocmV2ZXJ0RmlsZVVwbG9hZCkge1xuICAgICAgLy8gY2Fubm90IHJldmVydCB3aXRob3V0IGEgc2VydmVyIGlkIGZvciB0aGlzIHByb2Nlc3NcbiAgICAgIGlmIChzdGF0ZS5zZXJ2ZXJGaWxlUmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gcmV2ZXJ0IHRoZSB1cGxvYWQgKGZpcmUgYW5kIGZvcmdldClcbiAgICAgIHJldmVydEZpbGVVcGxvYWQoXG4gICAgICAgIHN0YXRlLnNlcnZlckZpbGVSZWZlcmVuY2UsXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHJlc2V0IGZpbGUgc2VydmVyIGlkIGFzIG5vdyBpdCdzIG5vIGF2YWlsYWJsZSBvbiB0aGUgc2VydmVyXG4gICAgICAgICAgc3RhdGUuc2VydmVyRmlsZVJlZmVyZW5jZSA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gVE9ETzogaGFuZGxlIHJldmVydCBlcnJvclxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICAvLyBmaXJlIGV2ZW50XG4gICAgICBzZXRTdGF0dXMoSXRlbVN0YXR1cy5JRExFKTtcbiAgICAgIGFwaS5maXJlKCdwcm9jZXNzLXJldmVydCcpO1xuICAgIH07XG5cbiAgICB2YXIgYWJvcnRMb2FkID0gZnVuY3Rpb24gYWJvcnRMb2FkKCkge1xuICAgICAgaWYgKCFzdGF0ZS5hY3RpdmVMb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3RhdGUuYWN0aXZlTG9hZGVyLmFib3J0KCk7XG4gICAgfTtcblxuICAgIHZhciByZXRyeUxvYWQgPSBmdW5jdGlvbiByZXRyeUxvYWQoKSB7XG4gICAgICBpZiAoIXN0YXRlLmFjdGl2ZUxvYWRlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzdGF0ZS5hY3RpdmVMb2FkZXIubG9hZCgpO1xuICAgIH07XG5cbiAgICB2YXIgYWJvcnRQcm9jZXNzaW5nID0gZnVuY3Rpb24gYWJvcnRQcm9jZXNzaW5nKCkge1xuICAgICAgaWYgKCFzdGF0ZS5hY3RpdmVQcm9jZXNzb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3RhdGUuYWN0aXZlUHJvY2Vzc29yLmFib3J0KCk7XG4gICAgfTtcblxuICAgIC8vIGV4cG9zZWQgbWV0aG9kc1xuXG4gICAgdmFyIGFwaSA9IF9leHRlbmRzKFxuICAgICAge1xuICAgICAgICBpZDoge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2VydmVySWQ6IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5zZXJ2ZXJGaWxlUmVmZXJlbmNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuc3RhdHVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmlsZW5hbWU6IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5maWxlLm5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmaWxlbmFtZVdpdGhvdXRFeHRlbnNpb246IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlbmFtZVdpdGhvdXRFeHRlbnNpb24oc3RhdGUuZmlsZS5uYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZpbGVFeHRlbnNpb246IHsgZ2V0OiBnZXRGaWxlRXh0ZW5zaW9uIH0sXG4gICAgICAgIGZpbGVUeXBlOiB7IGdldDogZ2V0RmlsZVR5cGUgfSxcbiAgICAgICAgZmlsZVNpemU6IHsgZ2V0OiBnZXRGaWxlU2l6ZSB9LFxuICAgICAgICBmaWxlOiB7IGdldDogZ2V0RmlsZSB9LFxuICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5zb3VyY2U7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGdldE1ldGFkYXRhOiBmdW5jdGlvbiBnZXRNZXRhZGF0YShuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIG5hbWUgPyBtZXRhZGF0YVtuYW1lXSA6IF9leHRlbmRzKHt9LCBtZXRhZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldE1ldGFkYXRhOiBmdW5jdGlvbiBzZXRNZXRhZGF0YShuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiAobWV0YWRhdGFbbmFtZV0gPSB2YWx1ZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWJvcnRMb2FkOiBhYm9ydExvYWQsXG4gICAgICAgIHJldHJ5TG9hZDogcmV0cnlMb2FkLFxuICAgICAgICBhYm9ydFByb2Nlc3Npbmc6IGFib3J0UHJvY2Vzc2luZyxcblxuICAgICAgICBsb2FkOiBsb2FkLFxuICAgICAgICBwcm9jZXNzOiBwcm9jZXNzLFxuICAgICAgICByZXZlcnQ6IHJldmVydFxuICAgICAgfSxcbiAgICAgIG9uKClcbiAgICApO1xuXG4gICAgcmV0dXJuIGNyZWF0ZU9iamVjdChhcGkpO1xuICB9O1xuXG4gIHZhciBnZXRJdGVtQnlJZCA9IGZ1bmN0aW9uIGdldEl0ZW1CeUlkKGl0ZW1zLCBpdGVtSWQpIHtcbiAgICB2YXIgaW5kZXggPSBnZXRJdGVtSW5kZXhCeVF1ZXJ5KGl0ZW1zLCBpdGVtSWQpO1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1zW2luZGV4XSB8fCBudWxsO1xuICB9O1xuXG4gIHZhciByZW1vdmVJdGVtID0gZnVuY3Rpb24gcmVtb3ZlSXRlbShpdGVtcywgbmVlZGxlKSB7XG4gICAgLy8gZ2V0IGluZGV4IG9mIGl0ZW1cbiAgICB2YXIgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0gPT09IG5lZWRsZTtcbiAgICB9KTtcblxuICAgIC8vIHJlbW92ZSBpdCBmcm9tIGFycmF5XG4gICAgcmVtb3ZlSW5kZXgoaXRlbXMsIGluZGV4KTtcblxuICAgIC8vIHJldHVybiByZW1vdmVkIGl0ZW1cbiAgICByZXR1cm4gbmVlZGxlO1xuICB9O1xuXG4gIHZhciBmZXRjaExvY2FsID0gZnVuY3Rpb24gZmV0Y2hMb2NhbChcbiAgICB1cmwsXG4gICAgbG9hZCxcbiAgICBlcnJvcixcbiAgICBwcm9ncmVzcyxcbiAgICBhYm9ydCxcbiAgICBoZWFkZXJzXG4gICkge1xuICAgIHZhciByZXF1ZXN0ID0gc2VuZFJlcXVlc3QobnVsbCwgdXJsLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYidcbiAgICB9KTtcbiAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAvLyB0dXJuIGJsb2IgaW50byBhIGZpbGVcbiAgICAgIHJlc3BvbnNlLmJvZHkgPSBnZXRGaWxlRnJvbUJsb2IoXG4gICAgICAgIHJlc3BvbnNlLmJvZHksXG4gICAgICAgIGdldEZpbGVuYW1lRnJvbUhlYWRlcnMocmVzcG9uc2UuaGVhZGVycykgfHxcbiAgICAgICAgICBnZXRGaWxlbmFtZUZyb21VUkwodXJsKSB8fFxuICAgICAgICAgIGdldERhdGVTdHJpbmcoKVxuICAgICAgKTtcblxuICAgICAgLy8gcGFzcyB1cGRhdGVkIHJlc3BvbnNlIHRvIGhhbmRsZXIgbWV0aG9kXG4gICAgICBsb2FkKHJlc3BvbnNlKTtcbiAgICB9O1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGVycm9yO1xuICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgIHJlcXVlc3Qub25hYm9ydCA9IGFib3J0O1xuICAgIHJlcXVlc3Qub25oZWFkZXJzID0gaGVhZGVycztcblxuICAgIC8vIHNob3VsZCByZXR1cm4gcmVxdWVzdFxuICAgIHJldHVybiByZXF1ZXN0O1xuICB9O1xuXG4gIHZhciBnZXREb21haW5Gcm9tVVJMID0gZnVuY3Rpb24gZ2V0RG9tYWluRnJvbVVSTCh1cmwpIHtcbiAgICBpZiAodXJsLmluZGV4T2YoJy8vJykgPT09IDApIHtcbiAgICAgIHVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgdXJsO1xuICAgIH1cbiAgICByZXR1cm4gdXJsXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnJlcGxhY2UoLyhbYS16XSk/OlxcL1xcLy8sICckMScpXG4gICAgICAuc3BsaXQoJy8nKVswXTtcbiAgfTtcblxuICB2YXIgaXNFeHRlcm5hbFVSTCA9IGZ1bmN0aW9uIGlzRXh0ZXJuYWxVUkwodXJsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh1cmwuaW5kZXhPZignOicpID4gLTEgfHwgdXJsLmluZGV4T2YoJy8vJykgPiAtMSkgJiZcbiAgICAgIGdldERvbWFpbkZyb21VUkwobG9jYXRpb24uaHJlZikgIT09IGdldERvbWFpbkZyb21VUkwodXJsKVxuICAgICk7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBpdGVtIGJhc2VkIG9uIHN0YXRlXG4gIHZhciBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZSA9IGZ1bmN0aW9uIGdldEl0ZW1CeVF1ZXJ5RnJvbVN0YXRlKFxuICAgIHN0YXRlLFxuICAgIGl0ZW1IYW5kbGVyXG4gICkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBfcmVmID1cbiAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF1cbiAgICAgICAgICAgIDoge30sXG4gICAgICAgIHF1ZXJ5ID0gX3JlZi5xdWVyeSxcbiAgICAgICAgX3JlZiRzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxuICAgICAgICBzdWNjZXNzID0gX3JlZiRzdWNjZXNzID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbigpIHt9IDogX3JlZiRzdWNjZXNzLFxuICAgICAgICBfcmVmJGZhaWx1cmUgPSBfcmVmLmZhaWx1cmUsXG4gICAgICAgIGZhaWx1cmUgPSBfcmVmJGZhaWx1cmUgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uKCkge30gOiBfcmVmJGZhaWx1cmU7XG5cbiAgICAgIHZhciBpdGVtID0gZ2V0SXRlbUJ5UXVlcnkoc3RhdGUuaXRlbXMsIHF1ZXJ5KTtcbiAgICAgIGlmICghaXRlbSkge1xuICAgICAgICBmYWlsdXJlKHtcbiAgICAgICAgICBlcnJvcjogY3JlYXRlUmVzcG9uc2UoJ2Vycm9yJywgMCwgJ0l0ZW0gbm90IGZvdW5kJyksXG4gICAgICAgICAgZmlsZTogbnVsbFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaXRlbUhhbmRsZXIoaXRlbSwgc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgYWN0aW9ucyA9IGZ1bmN0aW9uIGFjdGlvbnMoZGlzcGF0Y2gsIHF1ZXJ5LCBzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIEFib3J0cyBhbGwgb25nb2luZyBwcm9jZXNzZXNcbiAgICAgICAqL1xuICAgICAgQUJPUlRfQUxMOiBmdW5jdGlvbiBBQk9SVF9BTEwoKSB7XG4gICAgICAgIHF1ZXJ5KCdHRVRfSVRFTVMnKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICBpdGVtLmFib3J0TG9hZCgpO1xuICAgICAgICAgIGl0ZW0uYWJvcnRQcm9jZXNzaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXRzIGluaXRpYWwgZmlsZXNcbiAgICAgICAqL1xuICAgICAgRElEX1NFVF9GSUxFUzogZnVuY3Rpb24gRElEX1NFVF9GSUxFUyhfcmVmMikge1xuICAgICAgICB2YXIgX3JlZjIkdmFsdWUgPSBfcmVmMi52YWx1ZSxcbiAgICAgICAgICB2YWx1ZSA9IF9yZWYyJHZhbHVlID09PSB1bmRlZmluZWQgPyBbXSA6IF9yZWYyJHZhbHVlO1xuXG4gICAgICAgIC8vIG1hcCB2YWx1ZXMgdG8gZmlsZSBvYmplY3RzXG4gICAgICAgIHZhciBmaWxlcyA9IHZhbHVlLm1hcChmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvdXJjZTogZmlsZS5zb3VyY2UgPyBmaWxlLnNvdXJjZSA6IGZpbGUsXG4gICAgICAgICAgICBvcHRpb25zOiBmaWxlLm9wdGlvbnNcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBsb29wIG92ZXIgZmlsZXMsIGlmIGZpbGUgaXMgaW4gbGlzdCwgbGVhdmUgaXQgYmUsIGlmIG5vdCwgcmVtb3ZlXG5cbiAgICAgICAgLy8gdGVzdCBpZiBpdGVtcyBzaG91bGQgYmUgbW92ZWRcbiAgICAgICAgW10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KHN0YXRlLml0ZW1zKSkuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgLy8gaWYgaXRlbSBub3QgaXMgaW4gbmV3IHZhbHVlLCByZW1vdmVcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhZmlsZXMuZmluZChmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmaWxlLnNvdXJjZSA9PT0gaXRlbS5zb3VyY2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ1JFTU9WRV9JVEVNJywgeyBxdWVyeTogaXRlbSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZCBuZXcgZmlsZXNcbiAgICAgICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbihmaWxlLCBpbmRleCkge1xuICAgICAgICAgIC8vIGlmIGZpbGUgaXMgYWxyZWFkeSBpbiBsaXN0XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgW10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KHN0YXRlLml0ZW1zKSkuZmluZChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtLnNvdXJjZSA9PT0gZmlsZS5zb3VyY2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIG5vdCBpbiBsaXN0LCBhZGRcbiAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgICdBRERfSVRFTScsXG4gICAgICAgICAgICBfZXh0ZW5kcyh7fSwgZmlsZSwge1xuICAgICAgICAgICAgICBpbnRlcmFjdGlvbk1ldGhvZDogSW50ZXJhY3Rpb25NZXRob2QuTk9ORSxcbiAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0gc291cmNlXG4gICAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgICAqIEBwYXJhbSBpbnRlcmFjdGlvbk1ldGhvZFxuICAgICAgICovXG4gICAgICBBRERfSVRFTTogZnVuY3Rpb24gQUREX0lURU0oX3JlZjMpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IF9yZWYzLnNvdXJjZSxcbiAgICAgICAgICBpbmRleCA9IF9yZWYzLmluZGV4LFxuICAgICAgICAgIGludGVyYWN0aW9uTWV0aG9kID0gX3JlZjMuaW50ZXJhY3Rpb25NZXRob2QsXG4gICAgICAgICAgX3JlZjMkc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXG4gICAgICAgICAgc3VjY2VzcyA9IF9yZWYzJHN1Y2Nlc3MgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uKCkge30gOiBfcmVmMyRzdWNjZXNzLFxuICAgICAgICAgIF9yZWYzJGZhaWx1cmUgPSBfcmVmMy5mYWlsdXJlLFxuICAgICAgICAgIGZhaWx1cmUgPSBfcmVmMyRmYWlsdXJlID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbigpIHt9IDogX3JlZjMkZmFpbHVyZSxcbiAgICAgICAgICBfcmVmMyRvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcbiAgICAgICAgICBvcHRpb25zID0gX3JlZjMkb3B0aW9ucyA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmMyRvcHRpb25zO1xuXG4gICAgICAgIC8vIGlmIG5vIHNvdXJjZSBzdXBwbGllZFxuICAgICAgICBpZiAoaXNFbXB0eShzb3VyY2UpKSB7XG4gICAgICAgICAgZmFpbHVyZSh7XG4gICAgICAgICAgICBlcnJvcjogY3JlYXRlUmVzcG9uc2UoJ2Vycm9yJywgMCwgJ05vIHNvdXJjZScpLFxuICAgICAgICAgICAgZmlsZTogbnVsbFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbHRlciBvdXQgaW52YWxpZCBmaWxlIGl0ZW1zLCB1c2VkIHRvIGZpbHRlciBkcm9wcGVkIGRpcmVjdG9yeSBjb250ZW50c1xuICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAgIGlmIChzdGF0ZS5vcHRpb25zLmlnbm9yZWRGaWxlcy5pbmNsdWRlcyhzb3VyY2UubmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgLy8gZmFpbCBzaWxlbnRseVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRlc3QgaWYgdGhlcmUncyBzdGlsbCByb29tIGluIHRoZSBsaXN0IG9mIGZpbGVzXG4gICAgICAgIGlmICghaGFzUm9vbUZvckl0ZW0oc3RhdGUpKSB7XG4gICAgICAgICAgLy8gaWYgbXVsdGlwbGUgYWxsb3dlZCwgd2UgY2FuJ3QgcmVwbGFjZVxuICAgICAgICAgIC8vIG9yIGlmIG9ubHkgYSBzaW5nbGUgaXRlbSBpcyBhbGxvd2VkIGJ1dCB3ZSdyZSBub3QgYWxsb3dlZCB0byByZXBsYWNlIGl0IHdlIGV4aXRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzdGF0ZS5vcHRpb25zLmFsbG93TXVsdGlwbGUgfHxcbiAgICAgICAgICAgICghc3RhdGUub3B0aW9ucy5hbGxvd011bHRpcGxlICYmICFzdGF0ZS5vcHRpb25zLmFsbG93UmVwbGFjZSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IGNyZWF0ZVJlc3BvbnNlKCd3YXJuaW5nJywgMCwgJ01heCBmaWxlcycpO1xuXG4gICAgICAgICAgICBkaXNwYXRjaCgnRElEX1RIUk9XX01BWF9GSUxFUycsIHtcbiAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZhaWx1cmUoeyBlcnJvcjogZXJyb3IsIGZpbGU6IG51bGwgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gcmVtb3ZlIGZpcnN0IGl0ZW0gYXMgaXQgd2lsbCBiZSByZXBsYWNlZCBieSB0aGlzIGl0ZW1cbiAgICAgICAgICBkaXNwYXRjaCgnUkVNT1ZFX0lURU0nLCB7IHF1ZXJ5OiBzdGF0ZS5pdGVtc1swXS5pZCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRlc3QgaWYgc2VydmVyIGZpbGUgcmVmZXJlbmNlIGlzIHN1cHBsaWVkXG4gICAgICAgIC8vIHR5cGUgaXMgZWl0aGVyICduZXcnLCAnbG9jYWwnIG9yICdsaW1ibycgKCdyZW1vdGUnIGlzIGZvciBuZXcgZmlsZXMpXG4gICAgICAgIHZhciBpc0xvY2FsU2VydmVyRmlsZSA9IG9wdGlvbnMudHlwZSA9PT0gJ2xvY2FsJztcbiAgICAgICAgdmFyIGlzTGltYm9TZXJ2ZXJGaWxlID0gb3B0aW9ucy50eXBlID09PSAnbGltYm8nO1xuICAgICAgICB2YXIgaXNTZXJ2ZXJGaWxlID0gaXNMb2NhbFNlcnZlckZpbGUgfHwgaXNMaW1ib1NlcnZlckZpbGU7XG5cbiAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGJsYW5rIGl0ZW1cbiAgICAgICAgdmFyIGl0ZW0gPSBjcmVhdGVJdGVtKGlzU2VydmVyRmlsZSA/IHNvdXJjZSA6IG51bGwpO1xuXG4gICAgICAgIC8vIGFkZCBpdGVtIHRvIGxpc3RcbiAgICAgICAgaW5zZXJ0SXRlbShzdGF0ZS5pdGVtcywgaXRlbSwgaW5kZXgpO1xuXG4gICAgICAgIC8vIGdldCBhIHF1aWNrIHJlZmVyZW5jZSB0byB0aGUgaXRlbSBpZFxuICAgICAgICB2YXIgaWQgPSBpdGVtLmlkO1xuXG4gICAgICAgIC8vIG9ic2VydmUgaXRlbSBldmVudHNcbiAgICAgICAgaXRlbS5vbignbG9hZC1pbml0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9TVEFSVF9JVEVNX0xPQUQnLCB7IGlkOiBpZCB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5vbignbG9hZC1tZXRhJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9VUERBVEVfSVRFTV9NRVRBJywgeyBpZDogaWQgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ2xvYWQtcHJvZ3Jlc3MnLCBmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICAgIGRpc3BhdGNoKCdESURfVVBEQVRFX0lURU1fTE9BRF9QUk9HUkVTUycsIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHByb2dyZXNzOiBwcm9ncmVzc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdsb2FkLXJlcXVlc3QtZXJyb3InLCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIGlzIGNsaWVudCBlcnJvciwgbm8gd2F5IHRvIHJlY292ZXJcbiAgICAgICAgICBpZiAoZXJyb3IuY29kZSA+PSA0MDAgJiYgZXJyb3IuY29kZSA8IDUwMCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ0RJRF9USFJPV19JVEVNX0lOVkFMSUQnLCB7XG4gICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICAgICAgICBtYWluOiBzdGF0ZS5vcHRpb25zLmxhYmVsRmlsZUxvYWRFcnJvcixcbiAgICAgICAgICAgICAgICBzdWI6IGVycm9yLmNvZGUgKyAnICgnICsgZXJyb3IuYm9keSArICcpJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gcmVqZWN0IHRoZSBmaWxlIHNvIGNhbiBiZSBkZWFsdCB3aXRoIHRocm91Z2ggQVBJXG4gICAgICAgICAgICBmYWlsdXJlKHsgZXJyb3I6IGVycm9yLCBmaWxlOiBjcmVhdGVJdGVtQVBJKGl0ZW0pIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGlzIHBvc3NpYmxlIHNlcnZlciBlcnJvciwgc28gbWlnaHQgYmUgcG9zc2libGUgdG8gcmV0cnlcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX1RIUk9XX0lURU1fTE9BRF9FUlJPUicsIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIHN0YXR1czoge1xuICAgICAgICAgICAgICBtYWluOiBzdGF0ZS5vcHRpb25zLmxhYmVsRmlsZUxvYWRFcnJvcixcbiAgICAgICAgICAgICAgc3ViOiBzdGF0ZS5vcHRpb25zLmxhYmVsVGFwVG9SZXRyeVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdsb2FkLWZpbGUtZXJyb3InLCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIGRpc3BhdGNoKCdESURfVEhST1dfSVRFTV9JTlZBTElEJywgX2V4dGVuZHMoe30sIGVycm9yLCB7IGlkOiBpZCB9KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ2xvYWQtYWJvcnQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnUkVNT1ZFX0lURU0nLCB7IHF1ZXJ5OiBpZCB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIGl0ZW0gbG9hZGVkLCBhbGxvdyBwbHVnaW5zIHRvXG4gICAgICAgICAgLy8gLSByZWFkIGRhdGEgKHF1aWNrbHkpXG4gICAgICAgICAgLy8gLSBhZGQgbWV0YWRhdGFcbiAgICAgICAgICBhcHBseUZpbHRlckNoYWluKCdESURfTE9BRF9JVEVNJywgaXRlbSwgeyBxdWVyeTogcXVlcnkgfSkudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAvLyBsZXQgcGx1Z2lucyBkZWNpZGUgaWYgdGhlIG91dHB1dCBkYXRhIHNob3VsZCBiZSBwcmVwYXJlZCBhdCB0aGlzIHBvaW50XG4gICAgICAgICAgICAgIC8vIG1lYW5zIHdlJ2xsIGRvIHRoaXMgYW5kIHdhaXQgZm9yIGlkbGUgc3RhdGVcbiAgICAgICAgICAgICAgYXBwbHlGaWx0ZXJDaGFpbignU0hPVUxEX1BSRVBBUkVfT1VUUFVUJywgZmFsc2UsIHtcbiAgICAgICAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHNob3VsZFByZXBhcmVPdXRwdXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgIGlzU2VydmVyRmlsZTogaXNTZXJ2ZXJGaWxlLFxuICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICAgICAgICBpc0xvY2FsU2VydmVyRmlsZTogaXNMb2NhbFNlcnZlckZpbGUsXG4gICAgICAgICAgICAgICAgICBpc0xpbWJvU2VydmVyRmlsZTogaXNMaW1ib1NlcnZlckZpbGUsXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzXG5cbiAgICAgICAgICAgICAgICAgIC8vIGV4aXRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRQcmVwYXJlT3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciBpZGxlIHN0YXRlIGFuZCB0aGVuIHJ1biBQUkVQQVJFX09VVFBVVFxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICAgICAgICAgICdSRVFVRVNUX1BSRVBBUkVfTE9BRF9JVEVNJyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdDT01QTEVURV9MT0FEX0lURU0nLCB7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogaWQsXG4gICAgICAgICAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdwcm9jZXNzLXN0YXJ0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9TVEFSVF9JVEVNX1BST0NFU1NJTkcnLCB7IGlkOiBpZCB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5vbigncHJvY2Vzcy1wcm9ncmVzcycsIGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9VUERBVEVfSVRFTV9QUk9DRVNTX1BST0dSRVNTJywge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IHByb2dyZXNzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ3Byb2Nlc3MtZXJyb3InLCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIGRpc3BhdGNoKCdESURfVEhST1dfSVRFTV9QUk9DRVNTSU5HX0VSUk9SJywge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgICAgIG1haW46IHN0YXRlLm9wdGlvbnMubGFiZWxGaWxlUHJvY2Vzc2luZ0Vycm9yLFxuICAgICAgICAgICAgICBzdWI6IHN0YXRlLm9wdGlvbnMubGFiZWxUYXBUb1JldHJ5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ3Byb2Nlc3MtYWJvcnQnLCBmdW5jdGlvbihzZXJ2ZXJGaWxlUmVmZXJlbmNlKSB7XG4gICAgICAgICAgLy8gaWYgd2UncmUgaW5zdGFudCB1cGxvYWRpbmcsIHRoZSBpdGVtIGlzIHJlbW92ZWRcbiAgICAgICAgICBpZiAoc3RhdGUub3B0aW9ucy5pbnN0YW50VXBsb2FkKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgnUkVNT1ZFX0lURU0nLCB7IHF1ZXJ5OiBpZCB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gd2Ugc3RvcHBlZCBwcm9jZXNzaW5nXG4gICAgICAgICAgICBkaXNwYXRjaCgnRElEX0FCT1JUX0lURU1fUFJPQ0VTU0lORycsIHsgaWQ6IGlkIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHdlJ2xsIHJldmVydCBhbnkgcHJvY2Vzc2VkIGl0ZW1zXG4gICAgICAgICAgZGlzcGF0Y2goJ1JFVkVSVF9JVEVNX1BST0NFU1NJTkcnLCB7IHF1ZXJ5OiBpZCB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5vbigncHJvY2Vzcy1jb21wbGV0ZScsIGZ1bmN0aW9uKHNlcnZlckZpbGVSZWZlcmVuY2UpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX0NPTVBMRVRFX0lURU1fUFJPQ0VTU0lORycsIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgc2VydmVyRmlsZVJlZmVyZW5jZTogc2VydmVyRmlsZVJlZmVyZW5jZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdwcm9jZXNzLXJldmVydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIGlmIGlzIGluc3RhbnQgdXBsb2FkIHJlbW92ZSB0aGUgaXRlbVxuICAgICAgICAgIGlmIChzdGF0ZS5vcHRpb25zLmluc3RhbnRVcGxvYWQpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdSRU1PVkVfSVRFTScsIHsgcXVlcnk6IGlkIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgnRElEX1JFVkVSVF9JVEVNX1BST0NFU1NJTkcnLCB7IGlkOiBpZCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGxldCB2aWV3IGtub3cgdGhlIGl0ZW0gaGFzIGJlZW4gaW5zZXJ0ZWRcbiAgICAgICAgZGlzcGF0Y2goJ0RJRF9BRERfSVRFTScsIHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGludGVyYWN0aW9uTWV0aG9kOiBpbnRlcmFjdGlvbk1ldGhvZFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzdGFydCBsb2FkaW5nIHRoZSBzb3VyY2VcblxuICAgICAgICB2YXIgX3JlZjQgPSBzdGF0ZS5vcHRpb25zLnNlcnZlciB8fCB7fSxcbiAgICAgICAgICB1cmwgPSBfcmVmNC51cmwsXG4gICAgICAgICAgbG9hZCA9IF9yZWY0LmxvYWQsXG4gICAgICAgICAgcmVzdG9yZSA9IF9yZWY0LnJlc3RvcmUsXG4gICAgICAgICAgZmV0Y2ggPSBfcmVmNC5mZXRjaDtcblxuICAgICAgICBpdGVtLmxvYWQoXG4gICAgICAgICAgc291cmNlLFxuXG4gICAgICAgICAgLy8gdGhpcyBjcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBsb2FkcyB0aGUgZmlsZSBiYXNlZCBvbiB0aGUgdHlwZSBvZiBmaWxlIChzdHJpbmcsIGJhc2U2NCwgYmxvYiwgZmlsZSkgYW5kIGxvY2F0aW9uIG9mIGZpbGUgKGxvY2FsLCByZW1vdGUsIGxpbWJvKVxuICAgICAgICAgIGNyZWF0ZUZpbGVMb2FkZXIoXG4gICAgICAgICAgICBpc1NlcnZlckZpbGVcbiAgICAgICAgICAgICAgPyBvcHRpb25zLnR5cGUgPT09ICdsaW1ibydcbiAgICAgICAgICAgICAgICA/IGNyZWF0ZUZldGNoRnVuY3Rpb24odXJsLCByZXN0b3JlKVxuICAgICAgICAgICAgICAgIDogY3JlYXRlRmV0Y2hGdW5jdGlvbih1cmwsIGxvYWQpXG4gICAgICAgICAgICAgIDogaXNTdHJpbmcoc291cmNlKSAmJiBpc0V4dGVybmFsVVJMKHNvdXJjZSlcbiAgICAgICAgICAgICAgICA/IGNyZWF0ZUZldGNoRnVuY3Rpb24odXJsLCBmZXRjaClcbiAgICAgICAgICAgICAgICA6IGZldGNoTG9jYWxcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgLy8gY2FsbGVkIHdoZW4gdGhlIGZpbGUgaXMgbG9hZGVkIHNvIGl0IGNhbiBiZSBwaXBlZCB0aHJvdWdoIHRoZSBmaWx0ZXJzXG4gICAgICAgICAgZnVuY3Rpb24oZmlsZSwgc3VjY2VzcywgZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGxldCdzIHByb2Nlc3MgdGhlIGZpbGVcbiAgICAgICAgICAgIGFwcGx5RmlsdGVyQ2hhaW4oJ0xPQURfRklMRScsIGZpbGUsIHsgcXVlcnk6IHF1ZXJ5IH0pXG4gICAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3MpXG4gICAgICAgICAgICAgIC5jYXRjaChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSxcblxuICAgICAgUkVRVUVTVF9QUkVQQVJFX0xPQURfSVRFTTogZnVuY3Rpb24gUkVRVUVTVF9QUkVQQVJFX0xPQURfSVRFTShfcmVmNSkge1xuICAgICAgICB2YXIgaXRlbSA9IF9yZWY1Lml0ZW0sXG4gICAgICAgICAgZGF0YSA9IF9yZWY1LmRhdGE7XG5cbiAgICAgICAgLy8gYWxsb3cgcGx1Z2lucyB0byBhbHRlciB0aGUgZmlsZSBkYXRhXG4gICAgICAgIGFwcGx5RmlsdGVyQ2hhaW4oJ1BSRVBBUkVfT1VUUFVUJywgaXRlbS5maWxlLCB7XG4gICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgIGl0ZW06IGl0ZW1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICBhcHBseUZpbHRlckNoYWluKCdDT01QTEVURV9QUkVQQVJFX09VVFBVVCcsIHJlc3VsdCwge1xuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgICAgaXRlbTogaXRlbVxuICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgnQ09NUExFVEVfTE9BRF9JVEVNJywge1xuICAgICAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBDT01QTEVURV9MT0FEX0lURU06IGZ1bmN0aW9uIENPTVBMRVRFX0xPQURfSVRFTShfcmVmNikge1xuICAgICAgICB2YXIgaXRlbSA9IF9yZWY2Lml0ZW0sXG4gICAgICAgICAgZGF0YSA9IF9yZWY2LmRhdGE7XG4gICAgICAgIHZhciBzdWNjZXNzID0gZGF0YS5zdWNjZXNzLFxuICAgICAgICAgIGlzU2VydmVyRmlsZSA9IGRhdGEuaXNTZXJ2ZXJGaWxlLFxuICAgICAgICAgIHNvdXJjZSA9IGRhdGEuc291cmNlLFxuICAgICAgICAgIGlzTG9jYWxTZXJ2ZXJGaWxlID0gZGF0YS5pc0xvY2FsU2VydmVyRmlsZSxcbiAgICAgICAgICBpc0xpbWJvU2VydmVyRmlsZSA9IGRhdGEuaXNMaW1ib1NlcnZlckZpbGU7XG5cbiAgICAgICAgLy8gbGV0IGludGVyZmFjZSBrbm93IHRoZSBpdGVtIGhhcyBsb2FkZWRcblxuICAgICAgICBkaXNwYXRjaCgnRElEX0xPQURfSVRFTScsIHtcbiAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICBzZXJ2ZXJGaWxlUmVmZXJlbmNlOiBpc1NlcnZlckZpbGUgPyBzb3VyY2UgOiBudWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGl0ZW0gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGxvYWRlZCBhbmQgYWRkZWQgdG8gdGhlXG4gICAgICAgIC8vIGxpc3Qgb2YgaXRlbXMgc28gY2FuIG5vdyBiZSBzYWZlbHkgcmV0dXJuZWQgZm9yIHVzZVxuICAgICAgICBzdWNjZXNzKGNyZWF0ZUl0ZW1BUEkoaXRlbSkpO1xuXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSBsb2NhbCBzZXJ2ZXIgZmlsZSB3ZSBuZWVkIHRvIHNob3cgYSBkaWZmZXJlbnQgc3RhdGVcbiAgICAgICAgaWYgKGlzTG9jYWxTZXJ2ZXJGaWxlKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9MT0FEX0xPQ0FMX0lURU0nLCB7IGlkOiBpdGVtLmlkIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGlzIGEgdGVtcCBzZXJ2ZXIgZmlsZSB3ZSBwcmV2ZW50IGFzeW5jIHVwbG9hZCBjYWxsIGhlcmUgKGFzIHRoZSBmaWxlIGlzIGFscmVhZHkgb24gdGhlIHNlcnZlcilcbiAgICAgICAgaWYgKGlzTGltYm9TZXJ2ZXJGaWxlKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkcnLCB7XG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgc2VydmVyRmlsZVJlZmVyZW5jZTogc291cmNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWQgd2UgYXJlIGFsbG93ZWQgdG8gdXBsb2FkIHRoZSBmaWxlIGltbWlkaWF0ZWx5LCBsZXRzIGRvIGl0XG4gICAgICAgIGlmIChxdWVyeSgnSVNfQVNZTkMnKSAmJiBzdGF0ZS5vcHRpb25zLmluc3RhbnRVcGxvYWQpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnUkVRVUVTVF9JVEVNX1BST0NFU1NJTkcnLCB7IHF1ZXJ5OiBpdGVtLmlkIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBSRVRSWV9JVEVNX0xPQUQ6IGdldEl0ZW1CeVF1ZXJ5RnJvbVN0YXRlKHN0YXRlLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIC8vIHRyeSBsb2FkaW5nIHRoZSBzb3VyY2Ugb25lIG1vcmUgdGltZVxuICAgICAgICBpdGVtLnJldHJ5TG9hZCgpO1xuICAgICAgfSksXG5cbiAgICAgIFJFUVVFU1RfSVRFTV9QUk9DRVNTSU5HOiBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZShzdGF0ZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIgaWQgPSBpdGVtLmlkO1xuXG4gICAgICAgIGRpc3BhdGNoKCdESURfUkVRVUVTVF9JVEVNX1BST0NFU1NJTkcnLCB7IGlkOiBpZCB9KTtcblxuICAgICAgICBkaXNwYXRjaCgnUFJPQ0VTU19JVEVNJywgeyBxdWVyeTogaXRlbSB9LCB0cnVlKTtcbiAgICAgIH0pLFxuXG4gICAgICBQUk9DRVNTX0lURU06IGdldEl0ZW1CeVF1ZXJ5RnJvbVN0YXRlKHN0YXRlLCBmdW5jdGlvbihcbiAgICAgICAgaXRlbSxcbiAgICAgICAgc3VjY2VzcyxcbiAgICAgICAgZmFpbHVyZVxuICAgICAgKSB7XG4gICAgICAgIC8vIHdlIGRvbmUgZnVuY3Rpb25cbiAgICAgICAgaXRlbS5vbk9uY2UoJ3Byb2Nlc3MtY29tcGxldGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzdWNjZXNzKGNyZWF0ZUl0ZW1BUEkoaXRlbSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB3ZSBlcnJvciBmdW5jdGlvblxuICAgICAgICBpdGVtLm9uT25jZSgncHJvY2Vzcy1lcnJvcicsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgZmFpbHVyZSh7IGVycm9yOiBlcnJvciwgZmlsZTogY3JlYXRlSXRlbUFQSShpdGVtKSB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc3RhcnQgZmlsZSBwcm9jZXNzaW5nXG4gICAgICAgIGl0ZW0ucHJvY2VzcyhcbiAgICAgICAgICBjcmVhdGVGaWxlUHJvY2Vzc29yKFxuICAgICAgICAgICAgY3JlYXRlUHJvY2Vzc29yRnVuY3Rpb24oXG4gICAgICAgICAgICAgIHN0YXRlLm9wdGlvbnMuc2VydmVyLnVybCxcbiAgICAgICAgICAgICAgc3RhdGUub3B0aW9ucy5zZXJ2ZXIucHJvY2VzcyxcbiAgICAgICAgICAgICAgc3RhdGUub3B0aW9ucy5uYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICAvLyBjYWxsZWQgd2hlbiB0aGUgZmlsZSBpcyBhYm91dCB0byBiZSBwcm9jZXNzZWQgc28gaXQgY2FuIGJlIHBpcGVkIHRocm91Z2ggdGhlIHRyYW5zZm9ybSBmaWx0ZXJzXG4gICAgICAgICAgZnVuY3Rpb24oZmlsZSwgc3VjY2VzcywgZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGFsbG93IHBsdWdpbnMgdG8gYWx0ZXIgdGhlIGZpbGUgZGF0YVxuICAgICAgICAgICAgYXBwbHlGaWx0ZXJDaGFpbignUFJFUEFSRV9PVVRQVVQnLCBmaWxlLCB7XG4gICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgICAgaXRlbTogaXRlbVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4oc3VjY2VzcylcbiAgICAgICAgICAgICAgLmNhdGNoKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9KSxcblxuICAgICAgUkVUUllfSVRFTV9QUk9DRVNTSU5HOiBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZShzdGF0ZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBkaXNwYXRjaCgnUkVRVUVTVF9JVEVNX1BST0NFU1NJTkcnLCB7IHF1ZXJ5OiBpdGVtIH0pO1xuICAgICAgfSksXG5cbiAgICAgIFJFTU9WRV9JVEVNOiBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZShzdGF0ZSwgZnVuY3Rpb24oaXRlbSwgc3VjY2Vzcykge1xuICAgICAgICAvLyBnZXQgaWQgcmVmZXJlbmNlXG4gICAgICAgIHZhciBpZCA9IGl0ZW0uaWQ7XG5cbiAgICAgICAgLy8gdGVsbCB0aGUgdmlldyB0aGUgaXRlbSBoYXMgYmVlbiByZW1vdmVkXG4gICAgICAgIGRpc3BhdGNoKCdESURfUkVNT1ZFX0lURU0nLCB7IGlkOiBpZCwgaXRlbTogaXRlbSB9KTtcblxuICAgICAgICAvLyBub3cgcmVtb3ZlIGl0IGZyb20gdGhlIGl0ZW0gbGlzdCxcbiAgICAgICAgLy8gd2UgcmVtb3ZlIGl0IGZyb20gdGhlIGxpc3QgYWZ0ZXIgdGhlIHZpZXcgaGFzIGJlZW4gdXBkYXRlZFxuICAgICAgICAvLyB0byBtYWtlIHN1cmUgdGhlIGl0ZW0gaXMgYXZhaWxhYmxlIGZvciB2aWV3IHJlbmRlcmluZyB0aWxsIHJlbW92ZWRcbiAgICAgICAgZGlzcGF0Y2goJ1NQTElDRV9JVEVNJywgeyBpZDogaWQsIGl0ZW06IGl0ZW0gfSk7XG5cbiAgICAgICAgLy8gY29ycmVjdGx5IHJlbW92ZWRcbiAgICAgICAgc3VjY2VzcyhjcmVhdGVJdGVtQVBJKGl0ZW0pKTtcbiAgICAgIH0pLFxuXG4gICAgICAvLyBwcml2YXRlIGFjdGlvbiBmb3IgdGltaW5nIHRoZSByZW1vdmFsIG9mIGFuIGl0ZW0gZnJvbSB0aGUgaXRlbXMgbGlzdFxuICAgICAgU1BMSUNFX0lURU06IGZ1bmN0aW9uIFNQTElDRV9JVEVNKF9yZWY3KSB7XG4gICAgICAgIHZhciBpZCA9IF9yZWY3LmlkO1xuICAgICAgICByZXR1cm4gcmVtb3ZlSXRlbShzdGF0ZS5pdGVtcywgZ2V0SXRlbUJ5SWQoc3RhdGUuaXRlbXMsIGlkKSk7XG4gICAgICB9LFxuXG4gICAgICBBQk9SVF9JVEVNX0xPQUQ6IGdldEl0ZW1CeVF1ZXJ5RnJvbVN0YXRlKHN0YXRlLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIC8vIHN0b3AgbG9hZGluZyB0aGlzIGZpbGVcbiAgICAgICAgaXRlbS5hYm9ydExvYWQoKTtcblxuICAgICAgICAvLyB0aGUgZmlsZSB3aWxsIHRocm93IGFuIGV2ZW50IGFuZCB0aGF0IHdpbGwgdGFrZVxuICAgICAgICAvLyBjYXJlIG9mIHJlbW92aW5nIHRoZSBpdGVtIGZyb20gdGhlIGxpc3RcbiAgICAgIH0pLFxuXG4gICAgICBBQk9SVF9JVEVNX1BST0NFU1NJTkc6IGdldEl0ZW1CeVF1ZXJ5RnJvbVN0YXRlKHN0YXRlLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIC8vIHN0b3AgcHJvY2Vzc2luZyB0aGlzIGZpbGVcbiAgICAgICAgaXRlbS5hYm9ydFByb2Nlc3NpbmcoKTtcblxuICAgICAgICAvLyB0aGUgZmlsZSB3aWxsIHRocm93IGFuIGV2ZW50IGFuZCB0aGF0IHdpbGwgdGFrZVxuICAgICAgICAvLyBjYXJlIG9mIHJlbW92aW5nIHRoZSBpdGVtIGZyb20gdGhlIGxpc3RcbiAgICAgIH0pLFxuXG4gICAgICBSRVZFUlRfSVRFTV9QUk9DRVNTSU5HOiBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZShzdGF0ZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAvLyByZW1vdmUgZnJvbSBzZXJ2ZXJcbiAgICAgICAgaXRlbS5yZXZlcnQoXG4gICAgICAgICAgY3JlYXRlUmV2ZXJ0RnVuY3Rpb24oXG4gICAgICAgICAgICBzdGF0ZS5vcHRpb25zLnNlcnZlci51cmwsXG4gICAgICAgICAgICBzdGF0ZS5vcHRpb25zLnNlcnZlci5yZXZlcnRcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KSxcblxuICAgICAgU0VUX09QVElPTlM6IGZ1bmN0aW9uIFNFVF9PUFRJT05TKF9yZWY4KSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gX3JlZjgub3B0aW9ucztcblxuICAgICAgICBmb3JpbihvcHRpb25zLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ1NFVF8nICsgZnJvbUNhbWVscyhrZXksICdfJykudG9VcHBlckNhc2UoKSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUVsZW1lbnQkMSA9IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICB9O1xuXG4gIHZhciBmb3JtYXRGaWxlbmFtZSA9IGZ1bmN0aW9uIGZvcm1hdEZpbGVuYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJKG5hbWUpO1xuICB9O1xuXG4gIHZhciB0ZXh0ID0gZnVuY3Rpb24gdGV4dChub2RlLCB2YWx1ZSkge1xuICAgIHZhciB0ZXh0Tm9kZSA9IG5vZGUuY2hpbGROb2Rlc1swXTtcbiAgICBpZiAoIXRleHROb2RlKSB7XG4gICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IHRleHROb2RlLm5vZGVWYWx1ZSkge1xuICAgICAgdGV4dE5vZGUubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIHZhciBwb2xhclRvQ2FydGVzaWFuID0gZnVuY3Rpb24gcG9sYXJUb0NhcnRlc2lhbihcbiAgICBjZW50ZXJYLFxuICAgIGNlbnRlclksXG4gICAgcmFkaXVzLFxuICAgIGFuZ2xlSW5EZWdyZWVzXG4gICkge1xuICAgIHZhciBhbmdsZUluUmFkaWFucyA9IChhbmdsZUluRGVncmVlcyAlIDM2MCAtIDkwKSAqIE1hdGguUEkgLyAxODAuMDtcbiAgICByZXR1cm4ge1xuICAgICAgeDogY2VudGVyWCArIHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSxcbiAgICAgIHk6IGNlbnRlclkgKyByYWRpdXMgKiBNYXRoLnNpbihhbmdsZUluUmFkaWFucylcbiAgICB9O1xuICB9O1xuXG4gIHZhciBkZXNjcmliZUFyYyA9IGZ1bmN0aW9uIGRlc2NyaWJlQXJjKFxuICAgIHgsXG4gICAgeSxcbiAgICByYWRpdXMsXG4gICAgc3RhcnRBbmdsZSxcbiAgICBlbmRBbmdsZSxcbiAgICBhcmNTd2VlcFxuICApIHtcbiAgICB2YXIgc3RhcnQgPSBwb2xhclRvQ2FydGVzaWFuKHgsIHksIHJhZGl1cywgZW5kQW5nbGUpO1xuICAgIHZhciBlbmQgPSBwb2xhclRvQ2FydGVzaWFuKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICdNJyxcbiAgICAgIHN0YXJ0LngsXG4gICAgICBzdGFydC55LFxuICAgICAgJ0EnLFxuICAgICAgcmFkaXVzLFxuICAgICAgcmFkaXVzLFxuICAgICAgMCxcbiAgICAgIGFyY1N3ZWVwLFxuICAgICAgMCxcbiAgICAgIGVuZC54LFxuICAgICAgZW5kLnlcbiAgICBdLmpvaW4oJyAnKTtcbiAgfTtcblxuICB2YXIgcGVyY2VudGFnZUFyYyA9IGZ1bmN0aW9uIHBlcmNlbnRhZ2VBcmMoeCwgeSwgcmFkaXVzLCBmcm9tLCB0bykge1xuICAgIHZhciBhcmNTd2VlcCA9IDE7XG4gICAgaWYgKHRvID4gZnJvbSAmJiB0byAtIGZyb20gPD0gMC41KSB7XG4gICAgICBhcmNTd2VlcCA9IDA7XG4gICAgfVxuICAgIGlmIChmcm9tID4gdG8gJiYgZnJvbSAtIHRvID49IDAuNSkge1xuICAgICAgYXJjU3dlZXAgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpYmVBcmMoXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHJhZGl1cyxcbiAgICAgIE1hdGgubWluKDAuOTk5OSwgZnJvbSkgKiAzNjAsXG4gICAgICBNYXRoLm1pbigwLjk5OTksIHRvKSAqIDM2MCxcbiAgICAgIGFyY1N3ZWVwXG4gICAgKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlJDcgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gICAgLy8gc3RhcnQgYXQgMFxuICAgIHByb3BzLnNwaW4gPSBmYWxzZTtcbiAgICBwcm9wcy5wcm9ncmVzcyA9IDA7XG4gICAgcHJvcHMub3BhY2l0eSA9IDA7XG5cbiAgICAvLyBzdmdcbiAgICB2YXIgc3ZnID0gY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG4gICAgcm9vdC5yZWYucGF0aCA9IGNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7XG4gICAgICAnc3Ryb2tlLXdpZHRoJzogMixcbiAgICAgICdzdHJva2UtbGluZWNhcCc6ICdyb3VuZCdcbiAgICB9KTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQocm9vdC5yZWYucGF0aCk7XG5cbiAgICByb290LnJlZi5zdmcgPSBzdmc7XG5cbiAgICByb290LmFwcGVuZENoaWxkKHN2Zyk7XG4gIH07XG5cbiAgdmFyIHdyaXRlJDUgPSBmdW5jdGlvbiB3cml0ZShfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZjIucHJvcHM7XG5cbiAgICBpZiAocHJvcHMub3BhY2l0eSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGdldCB3aWR0aCBvZiBzdHJva2VcbiAgICB2YXIgcmluZ1N0cm9rZVdpZHRoID0gcGFyc2VJbnQoYXR0cihyb290LnJlZi5wYXRoLCAnc3Ryb2tlLXdpZHRoJyksIDEwKTtcblxuICAgIC8vIGNhbGN1bGF0ZSBzaXplIG9mIHJpbmdcbiAgICB2YXIgc2l6ZSA9IHJvb3QucmVjdC5lbGVtZW50LndpZHRoICogMC41O1xuXG4gICAgLy8gcmluZyBzdGF0ZVxuICAgIHZhciByaW5nRnJvbSA9IDA7XG4gICAgdmFyIHJpbmdUbyA9IDA7XG5cbiAgICAvLyBub3cgaW4gYnVzeSBtb2RlXG4gICAgaWYgKHByb3BzLnNwaW4pIHtcbiAgICAgIHJpbmdGcm9tID0gMDtcbiAgICAgIHJpbmdUbyA9IDAuNTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmluZ0Zyb20gPSAwO1xuICAgICAgcmluZ1RvID0gcHJvcHMucHJvZ3Jlc3M7XG4gICAgfVxuXG4gICAgLy8gZ2V0IGFyYyBwYXRoXG4gICAgdmFyIGNvb3JkaW5hdGVzID0gcGVyY2VudGFnZUFyYyhcbiAgICAgIHNpemUsXG4gICAgICBzaXplLFxuICAgICAgc2l6ZSAtIHJpbmdTdHJva2VXaWR0aCxcbiAgICAgIHJpbmdGcm9tLFxuICAgICAgcmluZ1RvXG4gICAgKTtcblxuICAgIC8vIHVwZGF0ZSBwcm9ncmVzcyBiYXJcbiAgICBhdHRyKHJvb3QucmVmLnBhdGgsICdkJywgY29vcmRpbmF0ZXMpO1xuXG4gICAgLy8gaGlkZSB3aGlsZSBjb250YWlucyAwIHZhbHVlXG4gICAgYXR0cihcbiAgICAgIHJvb3QucmVmLnBhdGgsXG4gICAgICAnc3Ryb2tlLW9wYWNpdHknLFxuICAgICAgcHJvcHMuc3BpbiB8fCBwcm9wcy5wcm9ncmVzcyA+IDAgPyAxIDogMFxuICAgICk7XG4gIH07XG5cbiAgdmFyIHByb2dyZXNzSW5kaWNhdG9yID0gY3JlYXRlVmlldyh7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBuYW1lOiAncHJvZ3Jlc3MtaW5kaWNhdG9yJyxcbiAgICBpZ25vcmVSZWN0OiB0cnVlLFxuICAgIGNyZWF0ZTogY3JlYXRlJDcsXG4gICAgd3JpdGU6IHdyaXRlJDUsXG4gICAgbWl4aW5zOiB7XG4gICAgICBhcGlzOiBbJ3Byb2dyZXNzJywgJ3NwaW4nXSxcbiAgICAgIHN0eWxlczogWydvcGFjaXR5J10sXG4gICAgICBhbmltYXRpb25zOiB7XG4gICAgICAgIG9wYWNpdHk6IHsgdHlwZTogJ3R3ZWVuJywgZHVyYXRpb246IDUwMCB9LFxuICAgICAgICBwcm9ncmVzczoge1xuICAgICAgICAgIHR5cGU6ICdzcHJpbmcnLFxuICAgICAgICAgIHN0aWZmbmVzczogMC45NSxcbiAgICAgICAgICBkYW1waW5nOiAwLjY1LFxuICAgICAgICAgIG1hc3M6IDEwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHZhciBjcmVhdGUkOCA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG5cbiAgICByb290LmVsZW1lbnQudGl0bGUgPSBwcm9wcy5sYWJlbDtcbiAgICByb290LmVsZW1lbnQuaW5uZXJIVE1MID0gcHJvcHMuaWNvbiB8fCAnJztcbiAgICBwcm9wcy5kaXNhYmxlZCA9IGZhbHNlO1xuICB9O1xuXG4gIHZhciB3cml0ZSQ2ID0gZnVuY3Rpb24gd3JpdGUoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYyLnByb3BzO1xuXG4gICAgaWYgKHByb3BzLm9wYWNpdHkgPT09IDAgJiYgIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICBwcm9wcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBhdHRyKHJvb3QuZWxlbWVudCwgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgfSBlbHNlIGlmIChwcm9wcy5vcGFjaXR5ID4gMCAmJiBwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgcHJvcHMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHJvb3QuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBmaWxlQWN0aW9uQnV0dG9uID0gY3JlYXRlVmlldyh7XG4gICAgdGFnOiAnYnV0dG9uJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICB0eXBlOiAnYnV0dG9uJ1xuICAgIH0sXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICBuYW1lOiAnZmlsZS1hY3Rpb24tYnV0dG9uJyxcbiAgICBtaXhpbnM6IHtcbiAgICAgIGFwaXM6IFsnbGFiZWwnXSxcbiAgICAgIHN0eWxlczogWyd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAnc2NhbGVYJywgJ3NjYWxlWScsICdvcGFjaXR5J10sXG4gICAgICBhbmltYXRpb25zOiB7XG4gICAgICAgIHNjYWxlWDogJ3NwcmluZycsXG4gICAgICAgIHNjYWxlWTogJ3NwcmluZycsXG4gICAgICAgIHRyYW5zbGF0ZVg6ICdzcHJpbmcnLFxuICAgICAgICB0cmFuc2xhdGVZOiAnc3ByaW5nJyxcbiAgICAgICAgb3BhY2l0eTogeyB0eXBlOiAndHdlZW4nLCBkdXJhdGlvbjogMjUwIH1cbiAgICAgIH0sXG4gICAgICBsaXN0ZW5lcnM6IHRydWVcbiAgICB9LFxuICAgIGNyZWF0ZTogY3JlYXRlJDgsXG4gICAgd3JpdGU6IHdyaXRlJDZcbiAgfSk7XG5cbiAgdmFyIHRvTmF0dXJhbEZpbGVTaXplID0gZnVuY3Rpb24gdG9OYXR1cmFsRmlsZVNpemUoYnl0ZXMpIHtcbiAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcuJztcblxuICAgIC8vIG5vcGUsIG5vIG5lZ2F0aXZlIGJ5dGUgc2l6ZXNcbiAgICBieXRlcyA9IE1hdGgucm91bmQoTWF0aC5hYnMoYnl0ZXMpKTtcblxuICAgIC8vIGp1c3QgYnl0ZXNcbiAgICBpZiAoYnl0ZXMgPCAxMDAwKSB7XG4gICAgICByZXR1cm4gYnl0ZXMgKyAnIGJ5dGVzJztcbiAgICB9XG5cbiAgICAvLyBraWxvYnl0ZXNcbiAgICBpZiAoYnl0ZXMgPCBNQikge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoYnl0ZXMgLyBLQikgKyAnIEtCJztcbiAgICB9XG5cbiAgICAvLyBtZWdhYnl0ZXNcbiAgICBpZiAoYnl0ZXMgPCBHQikge1xuICAgICAgcmV0dXJuIHJlbW92ZURlY2ltYWxzV2hlblplcm8oYnl0ZXMgLyBNQiwgMSwgZGVjaW1hbFNlcGFyYXRvcikgKyAnIE1CJztcbiAgICB9XG5cbiAgICAvLyBnaWdhYnl0ZXNcbiAgICByZXR1cm4gcmVtb3ZlRGVjaW1hbHNXaGVuWmVybyhieXRlcyAvIEdCLCAyLCBkZWNpbWFsU2VwYXJhdG9yKSArICcgR0InO1xuICB9O1xuXG4gIHZhciBLQiA9IDEwMDA7XG4gIHZhciBNQiA9IDEwMDAwMDA7XG4gIHZhciBHQiA9IDEwMDAwMDAwMDA7XG5cbiAgdmFyIHJlbW92ZURlY2ltYWxzV2hlblplcm8gPSBmdW5jdGlvbiByZW1vdmVEZWNpbWFsc1doZW5aZXJvKFxuICAgIHZhbHVlLFxuICAgIGRlY2ltYWxDb3VudCxcbiAgICBzZXBhcmF0b3JcbiAgKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gICAgICAudG9GaXhlZChkZWNpbWFsQ291bnQpXG4gICAgICAuc3BsaXQoJy4nKVxuICAgICAgLmZpbHRlcihmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgIHJldHVybiBwYXJ0ICE9PSAnMCc7XG4gICAgICB9KVxuICAgICAgLmpvaW4oc2VwYXJhdG9yKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlJDkgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gICAgLy8gZmlsZW5hbWVcbiAgICB2YXIgZmlsZU5hbWUgPSBjcmVhdGVFbGVtZW50JDEoJ3NwYW4nKTtcbiAgICBmaWxlTmFtZS5jbGFzc05hbWUgPSAnZmlsZXBvbmQtLWZpbGUtaW5mby1tYWluJztcbiAgICAvLyBoaWRlIGZvciBzY3JlZW5yZWFkZXJzXG4gICAgLy8gdGhlIGZpbGUgaXMgY29udGFpbmVkIGluIGEgZmllbGRzZXQgd2l0aCBsZWdlbmQgdGhhdCBjb250YWlucyB0aGUgZmlsZW5hbWVcbiAgICAvLyBubyBuZWVkIHRvIHJlYWQgaXQgdHdpY2VcbiAgICBhdHRyKGZpbGVOYW1lLCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoZmlsZU5hbWUpO1xuICAgIHJvb3QucmVmLmZpbGVOYW1lID0gZmlsZU5hbWU7XG5cbiAgICAvLyBmaWxlc2l6ZVxuICAgIHZhciBmaWxlU2l6ZSA9IGNyZWF0ZUVsZW1lbnQkMSgnc3BhbicpO1xuICAgIGZpbGVTaXplLmNsYXNzTmFtZSA9ICdmaWxlcG9uZC0tZmlsZS1pbmZvLXN1Yic7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChmaWxlU2l6ZSk7XG4gICAgcm9vdC5yZWYuZmlsZVNpemUgPSBmaWxlU2l6ZTtcblxuICAgIC8vIHNldCBpbml0aWFsIHZhbHVlc1xuICAgIHRleHQoZmlsZVNpemUsIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX1dBSVRJTkdfRk9SX1NJWkUnKSk7XG4gICAgdGV4dChmaWxlTmFtZSwgZm9ybWF0RmlsZW5hbWUocm9vdC5xdWVyeSgnR0VUX0lURU1fTkFNRScsIHByb3BzLmlkKSkpO1xuICB9O1xuXG4gIHZhciB1cGRhdGVGaWxlID0gZnVuY3Rpb24gdXBkYXRlRmlsZShfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZjIucHJvcHM7XG5cbiAgICB0ZXh0KFxuICAgICAgcm9vdC5yZWYuZmlsZVNpemUsXG4gICAgICB0b05hdHVyYWxGaWxlU2l6ZShyb290LnF1ZXJ5KCdHRVRfSVRFTV9TSVpFJywgcHJvcHMuaWQpKVxuICAgICk7XG4gICAgdGV4dChcbiAgICAgIHJvb3QucmVmLmZpbGVOYW1lLFxuICAgICAgZm9ybWF0RmlsZW5hbWUocm9vdC5xdWVyeSgnR0VUX0lURU1fTkFNRScsIHByb3BzLmlkKSlcbiAgICApO1xuICB9O1xuXG4gIHZhciB1cGRhdGVGaWxlU2l6ZU9uRXJyb3IgPSBmdW5jdGlvbiB1cGRhdGVGaWxlU2l6ZU9uRXJyb3IoX3JlZjMpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYzLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYzLnByb3BzO1xuXG4gICAgLy8gaWYgc2l6ZSBpcyBhdmFpbGFibGUgZG9uJ3QgZmFsbGJhY2sgdG8gdW5rbm93biBzaXplIG1lc3NhZ2VcbiAgICBpZiAoaXNJbnQocm9vdC5xdWVyeSgnR0VUX0lURU1fU0laRScsIHByb3BzLmlkKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0ZXh0KHJvb3QucmVmLmZpbGVTaXplLCByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9TSVpFX05PVF9BVkFJTEFCTEUnKSk7XG4gIH07XG5cbiAgdmFyIGZpbGVJbmZvID0gY3JlYXRlVmlldyh7XG4gICAgbmFtZTogJ2ZpbGUtaW5mbycsXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICB3cml0ZTogY3JlYXRlUm91dGUoe1xuICAgICAgRElEX0xPQURfSVRFTTogdXBkYXRlRmlsZSxcbiAgICAgIERJRF9VUERBVEVfSVRFTV9NRVRBOiB1cGRhdGVGaWxlLFxuICAgICAgRElEX1RIUk9XX0lURU1fTE9BRF9FUlJPUjogdXBkYXRlRmlsZVNpemVPbkVycm9yLFxuICAgICAgRElEX1RIUk9XX0lURU1fSU5WQUxJRDogdXBkYXRlRmlsZVNpemVPbkVycm9yXG4gICAgfSksXG4gICAgY3JlYXRlOiBjcmVhdGUkOSxcbiAgICBtaXhpbnM6IHtcbiAgICAgIHN0eWxlczogWyd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknXSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgdHJhbnNsYXRlWDogJ3NwcmluZycsXG4gICAgICAgIHRyYW5zbGF0ZVk6ICdzcHJpbmcnXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB2YXIgdG9QZXJjZW50YWdlID0gZnVuY3Rpb24gdG9QZXJjZW50YWdlKHZhbHVlKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDApO1xuICB9O1xuXG4gIHZhciBjcmVhdGUkMTAgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290O1xuXG4gICAgLy8gbWFpbiBzdGF0dXNcbiAgICB2YXIgbWFpbiA9IGNyZWF0ZUVsZW1lbnQkMSgnc3BhbicpO1xuICAgIG1haW4uY2xhc3NOYW1lID0gJ2ZpbGVwb25kLS1maWxlLXN0YXR1cy1tYWluJztcbiAgICByb290LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIHJvb3QucmVmLm1haW4gPSBtYWluO1xuXG4gICAgLy8gc3ViIHN0YXR1c1xuICAgIHZhciBzdWIgPSBjcmVhdGVFbGVtZW50JDEoJ3NwYW4nKTtcbiAgICBzdWIuY2xhc3NOYW1lID0gJ2ZpbGVwb25kLS1maWxlLXN0YXR1cy1zdWInO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoc3ViKTtcbiAgICByb290LnJlZi5zdWIgPSBzdWI7XG5cbiAgICBkaWRTZXRJdGVtTG9hZFByb2dyZXNzKHsgcm9vdDogcm9vdCwgYWN0aW9uOiB7IHByb2dyZXNzOiBudWxsIH0gfSk7XG4gIH07XG5cbiAgdmFyIGRpZFNldEl0ZW1Mb2FkUHJvZ3Jlc3MgPSBmdW5jdGlvbiBkaWRTZXRJdGVtTG9hZFByb2dyZXNzKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjIuYWN0aW9uO1xuXG4gICAgdmFyIHRpdGxlID1cbiAgICAgIGFjdGlvbi5wcm9ncmVzcyA9PT0gbnVsbFxuICAgICAgICA/IHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX0xPQURJTkcnKVxuICAgICAgICA6IHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX0xPQURJTkcnKSArXG4gICAgICAgICAgJyAnICtcbiAgICAgICAgICB0b1BlcmNlbnRhZ2UoYWN0aW9uLnByb2dyZXNzKSArXG4gICAgICAgICAgJyUnO1xuICAgIHRleHQocm9vdC5yZWYubWFpbiwgdGl0bGUpO1xuICAgIHRleHQocm9vdC5yZWYuc3ViLCByb290LnF1ZXJ5KCdHRVRfTEFCRUxfVEFQX1RPX0NBTkNFTCcpKTtcbiAgfTtcblxuICB2YXIgZGlkU2V0SXRlbVByb2Nlc3NQcm9ncmVzcyA9IGZ1bmN0aW9uIGRpZFNldEl0ZW1Qcm9jZXNzUHJvZ3Jlc3MoX3JlZjMpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYzLnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmMy5hY3Rpb247XG5cbiAgICB2YXIgdGl0bGUgPVxuICAgICAgYWN0aW9uLnByb2dyZXNzID09PSBudWxsXG4gICAgICAgID8gcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfUFJPQ0VTU0lORycpXG4gICAgICAgIDogcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfUFJPQ0VTU0lORycpICtcbiAgICAgICAgICAnICcgK1xuICAgICAgICAgIHRvUGVyY2VudGFnZShhY3Rpb24ucHJvZ3Jlc3MpICtcbiAgICAgICAgICAnJSc7XG4gICAgdGV4dChyb290LnJlZi5tYWluLCB0aXRsZSk7XG4gICAgdGV4dChyb290LnJlZi5zdWIsIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9UQVBfVE9fQ0FOQ0VMJykpO1xuICB9O1xuXG4gIHZhciBkaWRSZXF1ZXN0SXRlbVByb2Nlc3NpbmcgPSBmdW5jdGlvbiBkaWRSZXF1ZXN0SXRlbVByb2Nlc3NpbmcoX3JlZjQpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY0LnJvb3Q7XG5cbiAgICB0ZXh0KHJvb3QucmVmLm1haW4sIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX1BST0NFU1NJTkcnKSk7XG4gICAgdGV4dChyb290LnJlZi5zdWIsIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9UQVBfVE9fQ0FOQ0VMJykpO1xuICB9O1xuXG4gIHZhciBkaWRBYm9ydEl0ZW1Qcm9jZXNzaW5nID0gZnVuY3Rpb24gZGlkQWJvcnRJdGVtUHJvY2Vzc2luZyhfcmVmNSkge1xuICAgIHZhciByb290ID0gX3JlZjUucm9vdDtcblxuICAgIHRleHQocm9vdC5yZWYubWFpbiwgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfUFJPQ0VTU0lOR19BQk9SVEVEJykpO1xuICAgIHRleHQocm9vdC5yZWYuc3ViLCByb290LnF1ZXJ5KCdHRVRfTEFCRUxfVEFQX1RPX1JFVFJZJykpO1xuICB9O1xuXG4gIHZhciBkaWRDb21wbGV0ZUl0ZW1Qcm9jZXNzaW5nJDEgPSBmdW5jdGlvbiBkaWRDb21wbGV0ZUl0ZW1Qcm9jZXNzaW5nKF9yZWY2KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNi5yb290O1xuXG4gICAgdGV4dChyb290LnJlZi5tYWluLCByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9QUk9DRVNTSU5HX0NPTVBMRVRFJykpO1xuICAgIHRleHQocm9vdC5yZWYuc3ViLCByb290LnF1ZXJ5KCdHRVRfTEFCRUxfVEFQX1RPX1VORE8nKSk7XG5cbiAgICAvL2NvbnN0IGFsbG93UmV2ZXJ0ID0gcm9vdC5xdWVyeSgnR0VUX0FMTE9XX1JFVkVSVCcpO1xuICAgIC8vdGV4dChyb290LnJlZi5zdWIsIGFsbG93UmV2ZXJ0ID8gcm9vdC5xdWVyeSgnR0VUX0xBQkVMX1RBUF9UT19VTkRPJykgOiAnJyk7XG4gIH07XG5cbiAgdmFyIGNsZWFyID0gZnVuY3Rpb24gY2xlYXIoX3JlZjcpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY3LnJvb3Q7XG5cbiAgICB0ZXh0KHJvb3QucmVmLm1haW4sICcnKTtcbiAgICB0ZXh0KHJvb3QucmVmLnN1YiwgJycpO1xuICB9O1xuXG4gIHZhciBlcnJvciA9IGZ1bmN0aW9uIGVycm9yKF9yZWY4KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmOC5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjguYWN0aW9uO1xuXG4gICAgdGV4dChyb290LnJlZi5tYWluLCBhY3Rpb24uc3RhdHVzLm1haW4pO1xuICAgIHRleHQocm9vdC5yZWYuc3ViLCBhY3Rpb24uc3RhdHVzLnN1Yik7XG4gIH07XG5cbiAgdmFyIGZpbGVTdGF0dXMgPSBjcmVhdGVWaWV3KHtcbiAgICBuYW1lOiAnZmlsZS1zdGF0dXMnLFxuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgd3JpdGU6IGNyZWF0ZVJvdXRlKHtcbiAgICAgIERJRF9MT0FEX0lURU06IGNsZWFyLFxuICAgICAgRElEX1JFVkVSVF9JVEVNX1BST0NFU1NJTkc6IGNsZWFyLFxuICAgICAgRElEX1JFUVVFU1RfSVRFTV9QUk9DRVNTSU5HOiBkaWRSZXF1ZXN0SXRlbVByb2Nlc3NpbmcsXG4gICAgICBESURfQUJPUlRfSVRFTV9QUk9DRVNTSU5HOiBkaWRBYm9ydEl0ZW1Qcm9jZXNzaW5nLFxuICAgICAgRElEX0NPTVBMRVRFX0lURU1fUFJPQ0VTU0lORzogZGlkQ29tcGxldGVJdGVtUHJvY2Vzc2luZyQxLFxuICAgICAgRElEX1VQREFURV9JVEVNX1BST0NFU1NfUFJPR1JFU1M6IGRpZFNldEl0ZW1Qcm9jZXNzUHJvZ3Jlc3MsXG4gICAgICBESURfVVBEQVRFX0lURU1fTE9BRF9QUk9HUkVTUzogZGlkU2V0SXRlbUxvYWRQcm9ncmVzcyxcbiAgICAgIERJRF9USFJPV19JVEVNX0xPQURfRVJST1I6IGVycm9yLFxuICAgICAgRElEX1RIUk9XX0lURU1fSU5WQUxJRDogZXJyb3IsXG4gICAgICBESURfVEhST1dfSVRFTV9QUk9DRVNTSU5HX0VSUk9SOiBlcnJvclxuICAgIH0pLFxuICAgIGNyZWF0ZTogY3JlYXRlJDEwLFxuICAgIG1peGluczoge1xuICAgICAgc3R5bGVzOiBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICdvcGFjaXR5J10sXG4gICAgICBhbmltYXRpb25zOiB7XG4gICAgICAgIG9wYWNpdHk6IHsgdHlwZTogJ3R3ZWVuJywgZHVyYXRpb246IDI1MCB9LFxuICAgICAgICB0cmFuc2xhdGVYOiAnc3ByaW5nJyxcbiAgICAgICAgdHJhbnNsYXRlWTogJ3NwcmluZydcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBCdXR0b24gZGVmaW5pdGlvbnMgZm9yIHRoZSBmaWxlIHZpZXdcbiAgICovXG4gIHZhciBCdXR0b25zID0ge1xuICAgIEFib3J0SXRlbUxvYWQ6IHtcbiAgICAgIGxhYmVsOiAnR0VUX0xBQkVMX0JVVFRPTl9BQk9SVF9JVEVNX0xPQUQnLFxuICAgICAgYWN0aW9uOiAnQUJPUlRfSVRFTV9MT0FEJyxcbiAgICAgIGNsYXNzTmFtZTogJ2ZpbGVwb25kLS1hY3Rpb24tYWJvcnQtaXRlbS1sb2FkJ1xuICAgIH0sXG4gICAgUmV0cnlJdGVtTG9hZDoge1xuICAgICAgbGFiZWw6ICdHRVRfTEFCRUxfQlVUVE9OX1JFVFJZX0lURU1fTE9BRCcsXG4gICAgICBhY3Rpb246ICdSRVRSWV9JVEVNX0xPQUQnLFxuICAgICAgaWNvbjogJ0dFVF9JQ09OX1JFVFJZJyxcbiAgICAgIGNsYXNzTmFtZTogJ2ZpbGVwb25kLS1hY3Rpb24tcmV0cnktaXRlbS1sb2FkJ1xuICAgIH0sXG4gICAgUmVtb3ZlSXRlbToge1xuICAgICAgbGFiZWw6ICdHRVRfTEFCRUxfQlVUVE9OX1JFTU9WRV9JVEVNJyxcbiAgICAgIGFjdGlvbjogJ1JFTU9WRV9JVEVNJyxcbiAgICAgIGljb246ICdHRVRfSUNPTl9SRU1PVkUnLFxuICAgICAgY2xhc3NOYW1lOiAnZmlsZXBvbmQtLWFjdGlvbi1yZW1vdmUtaXRlbSdcbiAgICB9LFxuICAgIFByb2Nlc3NJdGVtOiB7XG4gICAgICBsYWJlbDogJ0dFVF9MQUJFTF9CVVRUT05fUFJPQ0VTU19JVEVNJyxcbiAgICAgIGFjdGlvbjogJ1JFUVVFU1RfSVRFTV9QUk9DRVNTSU5HJyxcbiAgICAgIGljb246ICdHRVRfSUNPTl9QUk9DRVNTJyxcbiAgICAgIGNsYXNzTmFtZTogJ2ZpbGVwb25kLS1hY3Rpb24tcHJvY2Vzcy1pdGVtJ1xuICAgIH0sXG4gICAgQWJvcnRJdGVtUHJvY2Vzc2luZzoge1xuICAgICAgbGFiZWw6ICdHRVRfTEFCRUxfQlVUVE9OX0FCT1JUX0lURU1fUFJPQ0VTU0lORycsXG4gICAgICBhY3Rpb246ICdBQk9SVF9JVEVNX1BST0NFU1NJTkcnLFxuICAgICAgY2xhc3NOYW1lOiAnZmlsZXBvbmQtLWFjdGlvbi1hYm9ydC1pdGVtLXByb2Nlc3NpbmcnXG4gICAgfSxcbiAgICBSZXRyeUl0ZW1Qcm9jZXNzaW5nOiB7XG4gICAgICBsYWJlbDogJ0dFVF9MQUJFTF9CVVRUT05fUkVUUllfSVRFTV9QUk9DRVNTSU5HJyxcbiAgICAgIGFjdGlvbjogJ1JFVFJZX0lURU1fUFJPQ0VTU0lORycsXG4gICAgICBpY29uOiAnR0VUX0lDT05fUkVUUlknLFxuICAgICAgY2xhc3NOYW1lOiAnZmlsZXBvbmQtLWFjdGlvbi1yZXRyeS1pdGVtLXByb2Nlc3NpbmcnXG4gICAgfSxcbiAgICBSZXZlcnRJdGVtUHJvY2Vzc2luZzoge1xuICAgICAgbGFiZWw6ICdHRVRfTEFCRUxfQlVUVE9OX1VORE9fSVRFTV9QUk9DRVNTSU5HJyxcbiAgICAgIGFjdGlvbjogJ1JFVkVSVF9JVEVNX1BST0NFU1NJTkcnLFxuICAgICAgaWNvbjogJ0dFVF9JQ09OX1VORE8nLFxuICAgICAgY2xhc3NOYW1lOiAnZmlsZXBvbmQtLWFjdGlvbi1yZXZlcnQtaXRlbS1wcm9jZXNzaW5nJ1xuICAgIH1cbiAgfTtcblxuICAvLyBtYWtlIGEgbGlzdCBvZiBidXR0b25zLCB3ZSBjYW4gdGhlbiByZW1vdmUgYnV0dG9ucyBmcm9tIHRoaXMgbGlzdCBpZiB0aGV5J3JlIGRpc2FibGVkXG4gIHZhciBCdXR0b25LZXlzID0gW107XG4gIGZvcmluKEJ1dHRvbnMsIGZ1bmN0aW9uKGtleSkge1xuICAgIEJ1dHRvbktleXMucHVzaChrZXkpO1xuICB9KTtcblxuICB2YXIgY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQgPSBmdW5jdGlvbiBjYWxjdWxhdGVGaWxlSW5mb09mZnNldChyb290KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHJvb3QucmVmLmJ1dHRvblJlbW92ZUl0ZW0ucmVjdC5lbGVtZW50LndpZHRoICtcbiAgICAgIHJvb3QucmVmLmJ1dHRvblJlbW92ZUl0ZW0ucmVjdC5lbGVtZW50LmxlZnRcbiAgICApO1xuICB9O1xuXG4gIC8vIEZvcmNlIG9uIGZ1bGwgcGl4ZWxzIHNvIHRleHQgc3RheXMgY3JpcHNcbiAgdmFyIGNhbGN1bGF0ZUZpbGVWZXJ0aWNhbENlbnRlck9mZnNldCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUZpbGVWZXJ0aWNhbENlbnRlck9mZnNldChcbiAgICByb290XG4gICkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHJvb3QucmVmLmJ1dHRvblJlbW92ZUl0ZW0ucmVjdC5lbGVtZW50LmhlaWdodCAvIDQpO1xuICB9O1xuICB2YXIgY2FsY3VsYXRlRmlsZUhvcml6b250YWxDZW50ZXJPZmZzZXQgPSBmdW5jdGlvbiBjYWxjdWxhdGVGaWxlSG9yaXpvbnRhbENlbnRlck9mZnNldChcbiAgICByb290XG4gICkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHJvb3QucmVmLmJ1dHRvblJlbW92ZUl0ZW0ucmVjdC5lbGVtZW50LmxlZnQgLyAyKTtcbiAgfTtcblxuICB2YXIgRGVmYXVsdFN0eWxlID0ge1xuICAgIGJ1dHRvbkFib3J0SXRlbUxvYWQ6IHsgb3BhY2l0eTogMCB9LFxuICAgIGJ1dHRvblJldHJ5SXRlbUxvYWQ6IHsgb3BhY2l0eTogMCB9LFxuICAgIGJ1dHRvblJlbW92ZUl0ZW06IHsgb3BhY2l0eTogMCB9LFxuICAgIGJ1dHRvblByb2Nlc3NJdGVtOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBidXR0b25BYm9ydEl0ZW1Qcm9jZXNzaW5nOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBidXR0b25SZXRyeUl0ZW1Qcm9jZXNzaW5nOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBidXR0b25SZXZlcnRJdGVtUHJvY2Vzc2luZzogeyBvcGFjaXR5OiAwIH0sXG4gICAgbG9hZFByb2dyZXNzSW5kaWNhdG9yOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBwcm9jZXNzUHJvZ3Jlc3NJbmRpY2F0b3I6IHsgb3BhY2l0eTogMCB9LFxuICAgIHByb2Nlc3NpbmdDb21wbGV0ZUluZGljYXRvcjogeyBvcGFjaXR5OiAwLCBzY2FsZVg6IDAuNzUsIHNjYWxlWTogMC43NSB9LFxuICAgIGluZm86IHsgdHJhbnNsYXRlWDogMCwgdHJhbnNsYXRlWTogMCwgb3BhY2l0eTogMCB9LFxuICAgIHN0YXR1czogeyB0cmFuc2xhdGVYOiAwLCB0cmFuc2xhdGVZOiAwLCBvcGFjaXR5OiAwIH1cbiAgfTtcblxuICB2YXIgSWRsZVN0eWxlID0ge1xuICAgIGJ1dHRvblJlbW92ZUl0ZW06IHsgb3BhY2l0eTogMSB9LFxuICAgIGJ1dHRvblByb2Nlc3NJdGVtOiB7IG9wYWNpdHk6IDEgfSxcbiAgICBpbmZvOiB7IHRyYW5zbGF0ZVg6IGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0IH0sXG4gICAgc3RhdHVzOiB7IHRyYW5zbGF0ZVg6IGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0IH1cbiAgfTtcblxuICB2YXIgUHJvY2Vzc2luZ1N0eWxlID0ge1xuICAgIGJ1dHRvbkFib3J0SXRlbVByb2Nlc3Npbmc6IHsgb3BhY2l0eTogMSB9LFxuICAgIHByb2Nlc3NQcm9ncmVzc0luZGljYXRvcjogeyBvcGFjaXR5OiAxIH0sXG4gICAgc3RhdHVzOiB7IG9wYWNpdHk6IDEgfVxuICB9O1xuXG4gIHZhciBTdHlsZU1hcCA9IHtcbiAgICBESURfVEhST1dfSVRFTV9JTlZBTElEOiB7XG4gICAgICBidXR0b25SZW1vdmVJdGVtOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGluZm86IHsgdHJhbnNsYXRlWDogY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQgfSxcbiAgICAgIHN0YXR1czogeyB0cmFuc2xhdGVYOiBjYWxjdWxhdGVGaWxlSW5mb09mZnNldCwgb3BhY2l0eTogMSB9XG4gICAgfSxcbiAgICBESURfU1RBUlRfSVRFTV9MT0FEOiB7XG4gICAgICBidXR0b25BYm9ydEl0ZW1Mb2FkOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGxvYWRQcm9ncmVzc0luZGljYXRvcjogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBzdGF0dXM6IHsgb3BhY2l0eTogMSB9XG4gICAgfSxcbiAgICBESURfVEhST1dfSVRFTV9MT0FEX0VSUk9SOiB7XG4gICAgICBidXR0b25SZXRyeUl0ZW1Mb2FkOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGJ1dHRvblJlbW92ZUl0ZW06IHsgb3BhY2l0eTogMSB9LFxuICAgICAgaW5mbzogeyB0cmFuc2xhdGVYOiBjYWxjdWxhdGVGaWxlSW5mb09mZnNldCB9LFxuICAgICAgc3RhdHVzOiB7IG9wYWNpdHk6IDEgfVxuICAgIH0sXG4gICAgRElEX0xPQURfSVRFTTogSWRsZVN0eWxlLFxuICAgIERJRF9MT0FEX0xPQ0FMX0lURU06IHtcbiAgICAgIGJ1dHRvblJlbW92ZUl0ZW06IHsgb3BhY2l0eTogMSB9LFxuICAgICAgaW5mbzogeyB0cmFuc2xhdGVYOiBjYWxjdWxhdGVGaWxlSW5mb09mZnNldCB9LFxuICAgICAgc3RhdHVzOiB7IHRyYW5zbGF0ZVg6IGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0IH1cbiAgICB9LFxuICAgIERJRF9TVEFSVF9JVEVNX1BST0NFU1NJTkc6IFByb2Nlc3NpbmdTdHlsZSxcbiAgICBESURfUkVRVUVTVF9JVEVNX1BST0NFU1NJTkc6IFByb2Nlc3NpbmdTdHlsZSxcbiAgICBESURfVVBEQVRFX0lURU1fUFJPQ0VTU19QUk9HUkVTUzogUHJvY2Vzc2luZ1N0eWxlLFxuICAgIERJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkc6IHtcbiAgICAgIGJ1dHRvblJldmVydEl0ZW1Qcm9jZXNzaW5nOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGluZm86IHsgb3BhY2l0eTogMSB9LFxuICAgICAgc3RhdHVzOiB7IG9wYWNpdHk6IDEgfVxuICAgIH0sXG4gICAgRElEX1RIUk9XX0lURU1fUFJPQ0VTU0lOR19FUlJPUjoge1xuICAgICAgYnV0dG9uUmVtb3ZlSXRlbTogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBidXR0b25SZXRyeUl0ZW1Qcm9jZXNzaW5nOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIHN0YXR1czogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBpbmZvOiB7IHRyYW5zbGF0ZVg6IGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0IH1cbiAgICB9LFxuICAgIERJRF9BQk9SVF9JVEVNX1BST0NFU1NJTkc6IHtcbiAgICAgIGJ1dHRvblJlbW92ZUl0ZW06IHsgb3BhY2l0eTogMSB9LFxuICAgICAgYnV0dG9uUHJvY2Vzc0l0ZW06IHsgb3BhY2l0eTogMSB9LFxuICAgICAgaW5mbzogeyB0cmFuc2xhdGVYOiBjYWxjdWxhdGVGaWxlSW5mb09mZnNldCB9LFxuICAgICAgc3RhdHVzOiB7IG9wYWNpdHk6IDEgfVxuICAgIH0sXG4gICAgRElEX1JFVkVSVF9JVEVNX1BST0NFU1NJTkc6IElkbGVTdHlsZVxuICB9O1xuXG4gIC8vIGNvbXBsZXRlIGluZGljYXRvciB2aWV3XG4gIHZhciBwcm9jZXNzaW5nQ29tcGxldGVJbmRpY2F0b3JWaWV3ID0gY3JlYXRlVmlldyh7XG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmLnJvb3Q7XG5cbiAgICAgIHJvb3QuZWxlbWVudC5pbm5lckhUTUwgPSByb290LnF1ZXJ5KCdHRVRfSUNPTl9ET05FJyk7XG4gICAgfSxcbiAgICBuYW1lOiAncHJvY2Vzc2luZy1jb21wbGV0ZS1pbmRpY2F0b3InLFxuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgbWl4aW5zOiB7XG4gICAgICBzdHlsZXM6IFsnc2NhbGVYJywgJ3NjYWxlWScsICdvcGFjaXR5J10sXG4gICAgICBhbmltYXRpb25zOiB7XG4gICAgICAgIHNjYWxlWDogJ3NwcmluZycsXG4gICAgICAgIHNjYWxlWTogJ3NwcmluZycsXG4gICAgICAgIG9wYWNpdHk6IHsgdHlwZTogJ3R3ZWVuJywgZHVyYXRpb246IDI1MCB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZmlsZSB2aWV3XG4gICAqL1xuICB2YXIgY3JlYXRlJDYgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYyLnByb3BzO1xuXG4gICAgLy8gYWxsb3cgcmV2ZXJ0aW5nIHVwbG9hZFxuICAgIHZhciBhbGxvd1JldmVydCA9IHJvb3QucXVlcnkoJ0dFVF9BTExPV19SRVZFUlQnKTtcblxuICAgIC8vIGVuYWJsZWQgYnV0dG9ucyBhcnJheVxuICAgIHZhciBlbmFibGVkQnV0dG9ucyA9IHJvb3QucXVlcnkoJ0lTX0FTWU5DJylcbiAgICAgID8gQnV0dG9uS2V5cy5jb25jYXQoKVxuICAgICAgOiBCdXR0b25LZXlzLmZpbHRlcihmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICByZXR1cm4gIS9Qcm9jZXNzLy50ZXN0KGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgLy8gcmVtb3ZlIGxhc3QgYnV0dG9uIChyZXZlcnQpIGlmIG5vdCBhbGxvd2VkXG4gICAgaWYgKCFhbGxvd1JldmVydCkge1xuICAgICAgZW5hYmxlZEJ1dHRvbnMuc3BsaWNlKC0xLCAxKTtcbiAgICAgIHZhciBtYXAgPSBTdHlsZU1hcFsnRElEX0NPTVBMRVRFX0lURU1fUFJPQ0VTU0lORyddO1xuICAgICAgbWFwLmluZm8udHJhbnNsYXRlWCA9IGNhbGN1bGF0ZUZpbGVIb3Jpem9udGFsQ2VudGVyT2Zmc2V0O1xuICAgICAgbWFwLmluZm8udHJhbnNsYXRlWSA9IGNhbGN1bGF0ZUZpbGVWZXJ0aWNhbENlbnRlck9mZnNldDtcbiAgICAgIG1hcC5zdGF0dXMudHJhbnNsYXRlWSA9IGNhbGN1bGF0ZUZpbGVWZXJ0aWNhbENlbnRlck9mZnNldDtcbiAgICAgIG1hcC5wcm9jZXNzaW5nQ29tcGxldGVJbmRpY2F0b3IgPSB7IG9wYWNpdHk6IDEsIHNjYWxlWDogMSwgc2NhbGVZOiAxIH07XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIHRoZSBidXR0b24gdmlld3NcbiAgICBmb3JpbihCdXR0b25zLCBmdW5jdGlvbihrZXksIGRlZmluaXRpb24pIHtcbiAgICAgIC8vIGNyZWF0ZSBidXR0b25cbiAgICAgIHZhciBidXR0b25WaWV3ID0gcm9vdC5jcmVhdGVDaGlsZFZpZXcoZmlsZUFjdGlvbkJ1dHRvbiwge1xuICAgICAgICBsYWJlbDogcm9vdC5xdWVyeShkZWZpbml0aW9uLmxhYmVsKSxcbiAgICAgICAgaWNvbjogcm9vdC5xdWVyeShkZWZpbml0aW9uLmljb24pLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KTtcblxuICAgICAgLy8gc2hvdWxkIGJlIGFwcGVuZGVkP1xuICAgICAgaWYgKGVuYWJsZWRCdXR0b25zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZFZpZXcoYnV0dG9uVmlldyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCBjbGFzc1xuICAgICAgYnV0dG9uVmlldy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoZGVmaW5pdGlvbi5jbGFzc05hbWUpO1xuXG4gICAgICAvLyBoYW5kbGUgaW50ZXJhY3Rpb25zXG4gICAgICBidXR0b25WaWV3Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICByb290LmRpc3BhdGNoKGRlZmluaXRpb24uYWN0aW9uLCB7IHF1ZXJ5OiBwcm9wcy5pZCB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBzZXQgcmVmZXJlbmNlXG4gICAgICByb290LnJlZlsnYnV0dG9uJyArIGtleV0gPSBidXR0b25WaWV3O1xuICAgIH0pO1xuXG4gICAgLy8gY3JlYXRlIGZpbGUgaW5mbyB2aWV3XG4gICAgcm9vdC5yZWYuaW5mbyA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcoZmlsZUluZm8sIHsgaWQ6IHByb3BzLmlkIH0pXG4gICAgKTtcblxuICAgIC8vIGNyZWF0ZSBmaWxlIHN0YXR1cyB2aWV3XG4gICAgcm9vdC5yZWYuc3RhdHVzID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhmaWxlU3RhdHVzLCB7IGlkOiBwcm9wcy5pZCB9KVxuICAgICk7XG5cbiAgICAvLyBjaGVja21hcmtcbiAgICByb290LnJlZi5wcm9jZXNzaW5nQ29tcGxldGVJbmRpY2F0b3IgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KHByb2Nlc3NpbmdDb21wbGV0ZUluZGljYXRvclZpZXcpXG4gICAgKTtcblxuICAgIC8vIGFkZCBwcm9ncmVzcyBpbmRpY2F0b3JzXG4gICAgcm9vdC5yZWYubG9hZFByb2dyZXNzSW5kaWNhdG9yID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhwcm9ncmVzc0luZGljYXRvciwgeyBvcGFjaXR5OiAwIH0pXG4gICAgKTtcbiAgICByb290LnJlZi5sb2FkUHJvZ3Jlc3NJbmRpY2F0b3IuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFxuICAgICAgJ2ZpbGVwb25kLS1sb2FkLWluZGljYXRvcidcbiAgICApO1xuXG4gICAgcm9vdC5yZWYucHJvY2Vzc1Byb2dyZXNzSW5kaWNhdG9yID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhwcm9ncmVzc0luZGljYXRvciwgeyBvcGFjaXR5OiAwIH0pXG4gICAgKTtcblxuICAgIHJvb3QucmVmLnByb2Nlc3NQcm9ncmVzc0luZGljYXRvci5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXG4gICAgICAnZmlsZXBvbmQtLXByb2Nlc3MtaW5kaWNhdG9yJ1xuICAgICk7XG4gIH07XG5cbiAgdmFyIHdyaXRlJDQgPSBmdW5jdGlvbiB3cml0ZShfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdCxcbiAgICAgIGFjdGlvbnMgPSBfcmVmMy5hY3Rpb25zLFxuICAgICAgcHJvcHMgPSBfcmVmMy5wcm9wcztcblxuICAgIC8vIHJvdXRlIGFjdGlvbnNcbiAgICByb3V0ZSQzKHsgcm9vdDogcm9vdCwgYWN0aW9uczogYWN0aW9ucywgcHJvcHM6IHByb3BzIH0pO1xuXG4gICAgLy8gc2VsZWN0IGxhc3Qgc3RhdGUgY2hhbmdlIGFjdGlvblxuICAgIHZhciBhY3Rpb24gPSBbXVxuICAgICAgLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShhY3Rpb25zKSlcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiAvXkRJRF8vLnRlc3QoYWN0aW9uLnR5cGUpO1xuICAgICAgfSlcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5maW5kKGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICByZXR1cm4gU3R5bGVNYXBbYWN0aW9uLnR5cGVdO1xuICAgICAgfSk7XG5cbiAgICAvLyBubyBuZWVkIHRvIHNldCBzYW1lIHN0YXRlIHR3aWNlXG4gICAgaWYgKCFhY3Rpb24gfHwgKGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gcHJvcHMuY3VycmVudFN0eWxlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNldCBjdXJyZW50IHN0YXRlXG4gICAgcHJvcHMuY3VycmVudFN0eWxlID0gYWN0aW9uLnR5cGU7XG4gICAgdmFyIG5ld1N0eWxlcyA9IFN0eWxlTWFwW3Byb3BzLmN1cnJlbnRTdHlsZV07XG5cbiAgICBmb3JpbihEZWZhdWx0U3R5bGUsIGZ1bmN0aW9uKG5hbWUsIGRlZmF1bHRTdHlsZXMpIHtcbiAgICAgIC8vIGdldCByZWZlcmVuY2UgdG8gY29udHJvbFxuICAgICAgdmFyIGNvbnRyb2wgPSByb290LnJlZltuYW1lXTtcblxuICAgICAgLy8gbG9vcCBvdmVyIGFsbCBzdHlsZXMgZm9yIHRoaXMgY29udHJvbFxuICAgICAgZm9yaW4oZGVmYXVsdFN0eWxlcywgZnVuY3Rpb24oa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlID1cbiAgICAgICAgICBuZXdTdHlsZXNbbmFtZV0gJiYgdHlwZW9mIG5ld1N0eWxlc1tuYW1lXVtrZXldICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBuZXdTdHlsZXNbbmFtZV1ba2V5XVxuICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIGNvbnRyb2xba2V5XSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlKHJvb3QpIDogdmFsdWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcm91dGUkMyA9IGNyZWF0ZVJvdXRlKHtcbiAgICBESURfU0VUX0xBQkVMX0JVVFRPTl9BQk9SVF9JVEVNX1BST0NFU1NJTkc6IGZ1bmN0aW9uIERJRF9TRVRfTEFCRUxfQlVUVE9OX0FCT1JUX0lURU1fUFJPQ0VTU0lORyhcbiAgICAgIF9yZWY0XG4gICAgKSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWY0LnJvb3QsXG4gICAgICAgIGFjdGlvbiA9IF9yZWY0LmFjdGlvbjtcblxuICAgICAgcm9vdC5yZWYuYnV0dG9uQWJvcnRJdGVtUHJvY2Vzc2luZy5sYWJlbCA9IGFjdGlvbi52YWx1ZTtcbiAgICB9LFxuICAgIERJRF9TRVRfTEFCRUxfQlVUVE9OX0FCT1JUX0lURU1fTE9BRDogZnVuY3Rpb24gRElEX1NFVF9MQUJFTF9CVVRUT05fQUJPUlRfSVRFTV9MT0FEKFxuICAgICAgX3JlZjVcbiAgICApIHtcbiAgICAgIHZhciByb290ID0gX3JlZjUucm9vdCxcbiAgICAgICAgYWN0aW9uID0gX3JlZjUuYWN0aW9uO1xuXG4gICAgICByb290LnJlZi5idXR0b25BYm9ydEl0ZW1Mb2FkLmxhYmVsID0gYWN0aW9uLnZhbHVlO1xuICAgIH0sXG4gICAgRElEX1JFUVVFU1RfSVRFTV9QUk9DRVNTSU5HOiBmdW5jdGlvbiBESURfUkVRVUVTVF9JVEVNX1BST0NFU1NJTkcoX3JlZjYpIHtcbiAgICAgIHZhciByb290ID0gX3JlZjYucm9vdDtcblxuICAgICAgcm9vdC5yZWYucHJvY2Vzc1Byb2dyZXNzSW5kaWNhdG9yLnNwaW4gPSB0cnVlO1xuICAgICAgcm9vdC5yZWYucHJvY2Vzc1Byb2dyZXNzSW5kaWNhdG9yLnByb2dyZXNzID0gMDtcbiAgICB9LFxuICAgIERJRF9TVEFSVF9JVEVNX0xPQUQ6IGZ1bmN0aW9uIERJRF9TVEFSVF9JVEVNX0xPQUQoX3JlZjcpIHtcbiAgICAgIHZhciByb290ID0gX3JlZjcucm9vdDtcblxuICAgICAgcm9vdC5yZWYubG9hZFByb2dyZXNzSW5kaWNhdG9yLnNwaW4gPSB0cnVlO1xuICAgICAgcm9vdC5yZWYubG9hZFByb2dyZXNzSW5kaWNhdG9yLnByb2dyZXNzID0gMDtcbiAgICB9LFxuICAgIERJRF9VUERBVEVfSVRFTV9MT0FEX1BST0dSRVNTOiBmdW5jdGlvbiBESURfVVBEQVRFX0lURU1fTE9BRF9QUk9HUkVTUyhcbiAgICAgIF9yZWY4XG4gICAgKSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWY4LnJvb3QsXG4gICAgICAgIGFjdGlvbiA9IF9yZWY4LmFjdGlvbjtcblxuICAgICAgcm9vdC5yZWYubG9hZFByb2dyZXNzSW5kaWNhdG9yLnNwaW4gPSBmYWxzZTtcbiAgICAgIHJvb3QucmVmLmxvYWRQcm9ncmVzc0luZGljYXRvci5wcm9ncmVzcyA9IGFjdGlvbi5wcm9ncmVzcztcbiAgICB9LFxuICAgIERJRF9VUERBVEVfSVRFTV9QUk9DRVNTX1BST0dSRVNTOiBmdW5jdGlvbiBESURfVVBEQVRFX0lURU1fUFJPQ0VTU19QUk9HUkVTUyhcbiAgICAgIF9yZWY5XG4gICAgKSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWY5LnJvb3QsXG4gICAgICAgIGFjdGlvbiA9IF9yZWY5LmFjdGlvbjtcblxuICAgICAgcm9vdC5yZWYucHJvY2Vzc1Byb2dyZXNzSW5kaWNhdG9yLnNwaW4gPSBmYWxzZTtcbiAgICAgIHJvb3QucmVmLnByb2Nlc3NQcm9ncmVzc0luZGljYXRvci5wcm9ncmVzcyA9IGFjdGlvbi5wcm9ncmVzcztcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBmaWxlID0gY3JlYXRlVmlldyh7XG4gICAgY3JlYXRlOiBjcmVhdGUkNixcbiAgICB3cml0ZTogd3JpdGUkNCxcbiAgICBkaWRDcmVhdGVWaWV3OiBmdW5jdGlvbiBkaWRDcmVhdGVWaWV3KHJvb3QpIHtcbiAgICAgIGFwcGx5RmlsdGVycygnQ1JFQVRFX1ZJRVcnLCBfZXh0ZW5kcyh7fSwgcm9vdCwgeyB2aWV3OiByb290IH0pKTtcbiAgICB9LFxuICAgIG5hbWU6ICdmaWxlJ1xuICB9KTtcblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZmlsZSB2aWV3XG4gICAqL1xuICB2YXIgY3JlYXRlJDUgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gICAgLy8gZmlsZW5hbWVcbiAgICByb290LnJlZi5maWxlTmFtZSA9IGNyZWF0ZUVsZW1lbnQkMSgnbGVnZW5kJyk7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChyb290LnJlZi5maWxlTmFtZSk7XG5cbiAgICAvLyBmaWxlIHZpZXdcbiAgICByb290LnJlZi5maWxlID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhmaWxlLCB7IGlkOiBwcm9wcy5pZCB9KVxuICAgICk7XG5cbiAgICAvLyBjcmVhdGUgZGF0YSBjb250YWluZXJcbiAgICB2YXIgZGF0YUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQkMSgnaW5wdXQnKTtcbiAgICBkYXRhQ29udGFpbmVyLnR5cGUgPSAnaGlkZGVuJztcbiAgICBkYXRhQ29udGFpbmVyLm5hbWUgPSByb290LnF1ZXJ5KCdHRVRfTkFNRScpO1xuICAgIHJvb3QucmVmLmRhdGEgPSBkYXRhQ29udGFpbmVyO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoZGF0YUNvbnRhaW5lcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIERhdGEgc3RvcmFnZVxuICAgKi9cbiAgdmFyIGRpZExvYWRJdGVtID0gZnVuY3Rpb24gZGlkTG9hZEl0ZW0oX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmMi5hY3Rpb24sXG4gICAgICBwcm9wcyA9IF9yZWYyLnByb3BzO1xuXG4gICAgcm9vdC5yZWYuZGF0YS52YWx1ZSA9IGFjdGlvbi5zZXJ2ZXJGaWxlUmVmZXJlbmNlO1xuXG4gICAgLy8gdXBkYXRlcyB0aGUgbGVnZW5kIG9mIHRoZSBmaWVsZHNldCBzbyBzY3JlZW5yZWFkZXJzIGNhbiBiZXR0ZXIgZ3JvdXAgYnV0dG9uc1xuICAgIHRleHQoXG4gICAgICByb290LnJlZi5maWxlTmFtZSxcbiAgICAgIGZvcm1hdEZpbGVuYW1lKHJvb3QucXVlcnkoJ0dFVF9JVEVNX05BTUUnLCBwcm9wcy5pZCkpXG4gICAgKTtcbiAgfTtcblxuICB2YXIgZGlkUmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIGRpZFJlbW92ZUl0ZW0oX3JlZjMpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYzLnJvb3Q7XG5cbiAgICByb290LnJlZi5kYXRhLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfTtcblxuICB2YXIgZGlkQ29tcGxldGVJdGVtUHJvY2Vzc2luZyA9IGZ1bmN0aW9uIGRpZENvbXBsZXRlSXRlbVByb2Nlc3NpbmcoX3JlZjQpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY0LnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmNC5hY3Rpb247XG5cbiAgICByb290LnJlZi5kYXRhLnZhbHVlID0gYWN0aW9uLnNlcnZlckZpbGVSZWZlcmVuY2U7XG4gIH07XG5cbiAgdmFyIGRpZFJldmVydEl0ZW1Qcm9jZXNzaW5nID0gZnVuY3Rpb24gZGlkUmV2ZXJ0SXRlbVByb2Nlc3NpbmcoX3JlZjUpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY1LnJvb3Q7XG5cbiAgICByb290LnJlZi5kYXRhLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfTtcblxuICB2YXIgZmlsZVdyYXBwZXIgPSBjcmVhdGVWaWV3KHtcbiAgICBjcmVhdGU6IGNyZWF0ZSQ1LFxuICAgIHdyaXRlOiBjcmVhdGVSb3V0ZSh7XG4gICAgICBESURfTE9BRF9JVEVNOiBkaWRMb2FkSXRlbSxcbiAgICAgIERJRF9SRU1PVkVfSVRFTTogZGlkUmVtb3ZlSXRlbSxcbiAgICAgIERJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkc6IGRpZENvbXBsZXRlSXRlbVByb2Nlc3NpbmcsXG4gICAgICBESURfUkVWRVJUX0lURU1fUFJPQ0VTU0lORzogZGlkUmV2ZXJ0SXRlbVByb2Nlc3NpbmdcbiAgICB9KSxcbiAgICBkaWRDcmVhdGVWaWV3OiBmdW5jdGlvbiBkaWRDcmVhdGVWaWV3KHJvb3QpIHtcbiAgICAgIGFwcGx5RmlsdGVycygnQ1JFQVRFX1ZJRVcnLCBfZXh0ZW5kcyh7fSwgcm9vdCwgeyB2aWV3OiByb290IH0pKTtcbiAgICB9LFxuICAgIHRhZzogJ2ZpZWxkc2V0JyxcbiAgICBuYW1lOiAnZmlsZS13cmFwcGVyJ1xuICB9KTtcblxuICB2YXIgUEFORUxfU1BSSU5HX1BST1BTID0geyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMC42LCBtYXNzOiA3IH07XG5cbiAgdmFyIGNyZWF0ZSQxMSA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG5cbiAgICBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0b3AnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY2VudGVyJyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICB0cmFuc2xhdGVZOiBudWxsLFxuICAgICAgICAgIHNjYWxlWTogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBtaXhpbnM6IHtcbiAgICAgICAgICBhbmltYXRpb25zOiB7XG4gICAgICAgICAgICBzY2FsZVk6IFBBTkVMX1NQUklOR19QUk9QU1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3R5bGVzOiBbJ3RyYW5zbGF0ZVknLCAnc2NhbGVZJ11cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2JvdHRvbScsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdHJhbnNsYXRlWTogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBtaXhpbnM6IHtcbiAgICAgICAgICBhbmltYXRpb25zOiB7XG4gICAgICAgICAgICB0cmFuc2xhdGVZOiBQQU5FTF9TUFJJTkdfUFJPUFNcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0eWxlczogWyd0cmFuc2xhdGVZJ11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0uZm9yRWFjaChmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICBjcmVhdGVTZWN0aW9uKHJvb3QsIHNlY3Rpb24sIHByb3BzLm5hbWUpO1xuICAgIH0pO1xuXG4gICAgcm9vdC5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpbGVwb25kLS0nICsgcHJvcHMubmFtZSk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVNlY3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVTZWN0aW9uKHJvb3QsIHNlY3Rpb24sIGNsYXNzTmFtZSkge1xuICAgIHZhciB2aWV3Q29uc3RydWN0b3IgPSBjcmVhdGVWaWV3KHtcbiAgICAgIG5hbWU6ICdwYW5lbC0nICsgc2VjdGlvbi5uYW1lICsgJyBmaWxlcG9uZC0tJyArIGNsYXNzTmFtZSxcbiAgICAgIG1peGluczogc2VjdGlvbi5taXhpbnNcbiAgICB9KTtcblxuICAgIHZhciB2aWV3ID0gcm9vdC5jcmVhdGVDaGlsZFZpZXcodmlld0NvbnN0cnVjdG9yLCBzZWN0aW9uLnByb3BzKTtcblxuICAgIHJvb3QucmVmW3NlY3Rpb24ubmFtZV0gPSByb290LmFwcGVuZENoaWxkVmlldyh2aWV3KTtcbiAgfTtcblxuICB2YXIgd3JpdGUkNyA9IGZ1bmN0aW9uIHdyaXRlKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcztcblxuICAgIGlmICghcHJvcHMuaGVpZ2h0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2FuIGl0IHNjYWxlP1xuICAgIHJvb3QuZWxlbWVudC5kYXRhc2V0LnNjYWxhYmxlID0gaXNCb29sZWFuKHByb3BzLnNjYWxhYmxlKVxuICAgICAgPyBwcm9wcy5zY2FsYWJsZVxuICAgICAgOiB0cnVlO1xuXG4gICAgLy8gZ2V0IGNoaWxkIHJlY3RzXG4gICAgdmFyIHRvcFJlY3QgPSByb290LnJlZi50b3AucmVjdC5lbGVtZW50O1xuICAgIHZhciBib3R0b21SZWN0ID0gcm9vdC5yZWYuYm90dG9tLnJlY3QuZWxlbWVudDtcblxuICAgIC8vIG1ha2Ugc3VyZSBoZWlnaHQgbmV2ZXIgaXMgc21hbGxlciB0aGFuIGJvdHRvbSBhbmQgdG9wIHNlY2l0b24gaGVpZ2h0cyBjb21iaW5lZCAod2lsbCBwcm9iYWJseSBuZXZlciBoYXBwZW4sIGJ1dCB3aG8ga25vd3MpXG4gICAgdmFyIGhlaWdodCA9IE1hdGgubWF4KHRvcFJlY3QuaGVpZ2h0ICsgYm90dG9tUmVjdC5oZWlnaHQsIHByb3BzLmhlaWdodCk7XG5cbiAgICAvLyBvZmZzZXQgY2VudGVyIHBhcnRcbiAgICByb290LnJlZi5jZW50ZXIudHJhbnNsYXRlWSA9IHRvcFJlY3QuaGVpZ2h0O1xuXG4gICAgLy8gc2NhbGUgY2VudGVyIHBhcnRcbiAgICAvLyB1c2UgbWF0aCBjZWlsIHRvIHByZXZlbnQgdHJhbnNwYXJlbnQgbGluZXMgYmVjYXVzZSBvZiByb3VuZGluZyBlcnJvcnNcbiAgICByb290LnJlZi5jZW50ZXIuc2NhbGVZID1cbiAgICAgIChoZWlnaHQgLSB0b3BSZWN0LmhlaWdodCAtIGJvdHRvbVJlY3QuaGVpZ2h0KSAvIDEwMDtcblxuICAgIC8vIG9mZnNldCBib3R0b20gcGFydFxuICAgIHJvb3QucmVmLmJvdHRvbS50cmFuc2xhdGVZID0gaGVpZ2h0IC0gYm90dG9tUmVjdC5oZWlnaHQ7XG4gIH07XG5cbiAgdmFyIHBhbmVsID0gY3JlYXRlVmlldyh7XG4gICAgbmFtZTogJ3BhbmVsJyxcbiAgICB3cml0ZTogd3JpdGUkNyxcbiAgICBjcmVhdGU6IGNyZWF0ZSQxMSxcbiAgICBpZ25vcmVSZWN0OiB0cnVlLFxuICAgIG1peGluczoge1xuICAgICAgYXBpczogWydoZWlnaHQnLCAnc2NhbGFibGUnXVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGZpbGUgdmlld1xuICAgKi9cbiAgdmFyIGNyZWF0ZSQ0ID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcblxuICAgIC8vIGZpbGUgdmlld1xuICAgIHJvb3QucmVmLmNvbnRyb2xzID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhmaWxlV3JhcHBlciwgeyBpZDogcHJvcHMuaWQgfSlcbiAgICApO1xuXG4gICAgLy8gZmlsZSBwYW5lbFxuICAgIHJvb3QucmVmLnBhbmVsID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhwYW5lbCwgeyBuYW1lOiAnaXRlbS1wYW5lbCcgfSlcbiAgICApO1xuXG4gICAgLy8gZGVmYXVsdCBzdGFydCBoZWlnaHRcbiAgICByb290LnJlZi5wYW5lbC5oZWlnaHQgPSAwO1xuXG4gICAgLy8gYnkgZGVmYXVsdCBub3QgbWFya2VkIGZvciByZW1vdmFsXG4gICAgcHJvcHMubWFya2VkRm9yUmVtb3ZhbCA9IGZhbHNlO1xuICB9O1xuXG4gIHZhciBTdGF0ZU1hcCA9IHtcbiAgICBESURfU1RBUlRfSVRFTV9MT0FEOiAnYnVzeScsXG4gICAgRElEX1VQREFURV9JVEVNX0xPQURfUFJPR1JFU1M6ICdsb2FkaW5nJyxcbiAgICBESURfVEhST1dfSVRFTV9JTlZBTElEOiAnbG9hZC1pbnZhbGlkJyxcbiAgICBESURfVEhST1dfSVRFTV9MT0FEX0VSUk9SOiAnbG9hZC1lcnJvcicsXG4gICAgRElEX1NUQVJUX0lURU1fUFJPQ0VTU0lORzogJ2J1c3knLFxuICAgIERJRF9SRVFVRVNUX0lURU1fUFJPQ0VTU0lORzogJ2J1c3knLFxuICAgIERJRF9VUERBVEVfSVRFTV9QUk9DRVNTX1BST0dSRVNTOiAncHJvY2Vzc2luZycsXG4gICAgRElEX0NPTVBMRVRFX0lURU1fUFJPQ0VTU0lORzogJ3Byb2Nlc3NpbmctY29tcGxldGUnLFxuICAgIERJRF9USFJPV19JVEVNX1BST0NFU1NJTkdfRVJST1I6ICdwcm9jZXNzaW5nLWVycm9yJyxcbiAgICBESURfQUJPUlRfSVRFTV9QUk9DRVNTSU5HOiAnY2FuY2VsbGVkJyxcbiAgICBESURfUkVWRVJUX0lURU1fUFJPQ0VTU0lORzogJ2lkbGUnXG4gIH07XG5cbiAgdmFyIHdyaXRlJDMgPSBmdW5jdGlvbiB3cml0ZShfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIGFjdGlvbnMgPSBfcmVmMi5hY3Rpb25zLFxuICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcztcblxuICAgIC8vIHVwZGF0ZSBwYW5lbCBoZWlnaHRcbiAgICByb290LnJlZi5wYW5lbC5oZWlnaHQgPSByb290LnJlZi5jb250cm9scy5yZWN0LmlubmVyLmhlaWdodDtcblxuICAgIC8vIHNldCBwYW5lbCBoZWlnaHRcbiAgICByb290LmhlaWdodCA9IHJvb3QucmVmLmNvbnRyb2xzLnJlY3QuaW5uZXIuaGVpZ2h0O1xuXG4gICAgLy8gc2VsZWN0IGxhc3Qgc3RhdGUgY2hhbmdlIGFjdGlvblxuICAgIHZhciBhY3Rpb24gPSBbXVxuICAgICAgLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShhY3Rpb25zKSlcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiAvXkRJRF8vLnRlc3QoYWN0aW9uLnR5cGUpO1xuICAgICAgfSlcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5maW5kKGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICByZXR1cm4gU3RhdGVNYXBbYWN0aW9uLnR5cGVdO1xuICAgICAgfSk7XG5cbiAgICAvLyBubyBuZWVkIHRvIHNldCBzYW1lIHN0YXRlIHR3aWNlXG4gICAgaWYgKCFhY3Rpb24gfHwgKGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gcHJvcHMuY3VycmVudFN0YXRlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNldCBjdXJyZW50IHN0YXRlXG4gICAgcHJvcHMuY3VycmVudFN0YXRlID0gYWN0aW9uLnR5cGU7XG5cbiAgICAvLyBzZXQgc3RhdGVcbiAgICByb290LmVsZW1lbnQuZGF0YXNldC5maWxlcG9uZEl0ZW1TdGF0ZSA9IFN0YXRlTWFwW3Byb3BzLmN1cnJlbnRTdGF0ZV0gfHwgJyc7XG4gIH07XG5cbiAgdmFyIGl0ZW0gPSBjcmVhdGVWaWV3KHtcbiAgICBjcmVhdGU6IGNyZWF0ZSQ0LFxuICAgIHdyaXRlOiB3cml0ZSQzLFxuICAgIHRhZzogJ2xpJyxcbiAgICBuYW1lOiAnaXRlbScsXG4gICAgbWl4aW5zOiB7XG4gICAgICBhcGlzOiBbJ2lkJywgJ21hcmtlZEZvclJlbW92YWwnXSxcbiAgICAgIHN0eWxlczogW1xuICAgICAgICAndHJhbnNsYXRlWCcsXG4gICAgICAgICd0cmFuc2xhdGVZJyxcbiAgICAgICAgJ3NjYWxlWCcsXG4gICAgICAgICdzY2FsZVknLFxuICAgICAgICAnb3BhY2l0eScsXG4gICAgICAgICdoZWlnaHQnXG4gICAgICBdLFxuICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICBzY2FsZVg6ICdzcHJpbmcnLFxuICAgICAgICBzY2FsZVk6ICdzcHJpbmcnLFxuICAgICAgICB0cmFuc2xhdGVYOiAnc3ByaW5nJyxcbiAgICAgICAgdHJhbnNsYXRlWTogJ3NwcmluZycsXG4gICAgICAgIG9wYWNpdHk6IHsgdHlwZTogJ3R3ZWVuJywgZHVyYXRpb246IDI1MCB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB2YXIgY3JlYXRlJDMgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290O1xuXG4gICAgLy8gbmVlZCB0byBzZXQgcm9sZSB0byBsaXN0IGFzIG90aGVyd2lzZSBpdCB3b24ndCBiZSByZWFkIGFzIGEgbGlzdCBieSBWb2ljZU92ZXJcbiAgICBhdHRyKHJvb3QuZWxlbWVudCwgJ3JvbGUnLCAnbGlzdCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnNlcnRzIGEgbmV3IGl0ZW1cbiAgICogQHBhcmFtIHJvb3RcbiAgICogQHBhcmFtIGFjdGlvblxuICAgKi9cbiAgdmFyIGFkZEl0ZW1WaWV3ID0gZnVuY3Rpb24gYWRkSXRlbVZpZXcoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmMi5hY3Rpb247XG4gICAgdmFyIGlkID0gYWN0aW9uLmlkLFxuICAgICAgaW5kZXggPSBhY3Rpb24uaW5kZXgsXG4gICAgICBpbnRlcmFjdGlvbk1ldGhvZCA9IGFjdGlvbi5pbnRlcmFjdGlvbk1ldGhvZDtcblxuICAgIHZhciBhbmltYXRpb24gPSB7XG4gICAgICBvcGFjaXR5OiAwXG4gICAgfTtcblxuICAgIGlmIChpbnRlcmFjdGlvbk1ldGhvZCA9PT0gSW50ZXJhY3Rpb25NZXRob2QuTk9ORSkge1xuICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChpbnRlcmFjdGlvbk1ldGhvZCA9PT0gSW50ZXJhY3Rpb25NZXRob2QuRFJPUCkge1xuICAgICAgYW5pbWF0aW9uLnNjYWxlWCA9IDAuODtcbiAgICAgIGFuaW1hdGlvbi5zY2FsZVkgPSAwLjg7XG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlWSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGludGVyYWN0aW9uTWV0aG9kID09PSBJbnRlcmFjdGlvbk1ldGhvZC5CUk9XU0UpIHtcbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZID0gLTMwO1xuICAgIH1cblxuICAgIGlmIChpbnRlcmFjdGlvbk1ldGhvZCA9PT0gSW50ZXJhY3Rpb25NZXRob2QuQVBJKSB7XG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlWCA9IC0xMDA7XG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlWSA9IG51bGw7XG4gICAgfVxuXG4gICAgcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhcbiAgICAgICAgLy8gdmlldyB0eXBlXG4gICAgICAgIGl0ZW0sXG5cbiAgICAgICAgLy8gcHJvcHNcbiAgICAgICAgX2V4dGVuZHMoXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbmltYXRpb25cbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGluZGV4XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBleGlzdGluZyBpdGVtXG4gICAqIEBwYXJhbSByb290XG4gICAqIEBwYXJhbSBhY3Rpb25cbiAgICovXG4gIHZhciByZW1vdmVJdGVtVmlldyA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW1WaWV3KF9yZWYzKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMy5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjMuYWN0aW9uO1xuICAgIHZhciBpZCA9IGFjdGlvbi5pZDtcblxuICAgIC8vIGdldCB0aGUgdmlldyBtYXRjaGluZyB0aGUgZ2l2ZW4gaWRcblxuICAgIHZhciB2aWV3ID0gcm9vdC5jaGlsZFZpZXdzLmZpbmQoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIHJldHVybiBjaGlsZC5pZCA9PT0gaWQ7XG4gICAgfSk7XG5cbiAgICAvLyBpZiBubyB2aWV3IGZvdW5kLCBleGl0XG4gICAgaWYgKCF2aWV3KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYW5pbWF0ZSB2aWV3IG91dCBvZiB2aWV3XG4gICAgdmlldy5zY2FsZVggPSAwLjk7XG4gICAgdmlldy5zY2FsZVkgPSAwLjk7XG4gICAgdmlldy5vcGFjaXR5ID0gMDtcblxuICAgIC8vIG1hcmsgZm9yIHJlbW92YWxcbiAgICB2aWV3Lm1hcmtlZEZvclJlbW92YWwgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXR1cCBhY3Rpb24gcm91dGVzXG4gICAqL1xuICB2YXIgcm91dGUkMiA9IGNyZWF0ZVJvdXRlKHtcbiAgICBESURfQUREX0lURU06IGFkZEl0ZW1WaWV3LFxuICAgIERJRF9SRU1PVkVfSVRFTTogcmVtb3ZlSXRlbVZpZXdcbiAgfSk7XG5cbiAgdmFyIGRyYWdUcmFuc2xhdGlvbiA9IGZ1bmN0aW9uIGRyYWdUcmFuc2xhdGlvbihcbiAgICBjaGlsZEluZGV4LFxuICAgIGRyYWdJbmRleCxcbiAgICBpdGVtTWFyZ2luXG4gICkge1xuICAgIGlmIChjaGlsZEluZGV4IC0gMSA9PT0gZHJhZ0luZGV4KSB7XG4gICAgICByZXR1cm4gaXRlbU1hcmdpbiAvIDY7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkSW5kZXggPT09IGRyYWdJbmRleCkge1xuICAgICAgcmV0dXJuIGl0ZW1NYXJnaW4gLyAyO1xuICAgIH1cblxuICAgIGlmIChjaGlsZEluZGV4ICsgMSA9PT0gZHJhZ0luZGV4KSB7XG4gICAgICByZXR1cm4gLWl0ZW1NYXJnaW4gLyAyO1xuICAgIH1cblxuICAgIGlmIChjaGlsZEluZGV4ICsgMiA9PT0gZHJhZ0luZGV4KSB7XG4gICAgICByZXR1cm4gLWl0ZW1NYXJnaW4gLyA2O1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXcml0ZSB0byB2aWV3XG4gICAqIEBwYXJhbSByb290XG4gICAqIEBwYXJhbSBhY3Rpb25zXG4gICAqIEBwYXJhbSBwcm9wc1xuICAgKi9cbiAgdmFyIHdyaXRlJDIgPSBmdW5jdGlvbiB3cml0ZShfcmVmNCkge1xuICAgIHZhciByb290ID0gX3JlZjQucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZjQucHJvcHMsXG4gICAgICBhY3Rpb25zID0gX3JlZjQuYWN0aW9ucztcblxuICAgIC8vIHJvdXRlIGFjdGlvbnNcbiAgICByb3V0ZSQyKHsgcm9vdDogcm9vdCwgcHJvcHM6IHByb3BzLCBhY3Rpb25zOiBhY3Rpb25zIH0pO1xuXG4gICAgdmFyIHJlc3RpbmcgPSB0cnVlO1xuXG4gICAgLy8gdXBkYXRlIGl0ZW0gcG9zaXRpb25zXG4gICAgdmFyIG9mZnNldCA9IDA7XG4gICAgcm9vdC5jaGlsZFZpZXdzXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC5yZWN0Lm91dGVyLmhlaWdodDtcbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbihjaGlsZCwgY2hpbGRJbmRleCkge1xuICAgICAgICB2YXIgY2hpbGRSZWN0ID0gY2hpbGQucmVjdDtcblxuICAgICAgICAvLyBzZXQgdGhpcyBjaGlsZCBvZmZzZXRcbiAgICAgICAgY2hpbGQudHJhbnNsYXRlWCA9IDA7XG4gICAgICAgIGNoaWxkLnRyYW5zbGF0ZVkgPVxuICAgICAgICAgIG9mZnNldCArXG4gICAgICAgICAgKHByb3BzLmRyYWdJbmRleCA+IC0xXG4gICAgICAgICAgICA/IGRyYWdUcmFuc2xhdGlvbihjaGlsZEluZGV4LCBwcm9wcy5kcmFnSW5kZXgsIDEwKVxuICAgICAgICAgICAgOiAwKTtcblxuICAgICAgICAvLyBzaG93IGNoaWxkIGlmIGl0J3Mgbm90IG1hcmtlZCBmb3IgcmVtb3ZhbFxuICAgICAgICBpZiAoIWNoaWxkLm1hcmtlZEZvclJlbW92YWwpIHtcbiAgICAgICAgICBjaGlsZC5zY2FsZVggPSAxO1xuICAgICAgICAgIGNoaWxkLnNjYWxlWSA9IDE7XG4gICAgICAgICAgY2hpbGQub3BhY2l0eSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxjdWxhdGUgbmV4dCBjaGlsZCBvZmZzZXQgKHJlZHVjZSBoZWlnaHQgYnkgeSBzY2FsZSBmb3Igdmlld3MgdGhhdCBhcmUgYmVpbmcgcmVtb3ZlZClcbiAgICAgICAgb2Zmc2V0ICs9IGNoaWxkUmVjdC5vdXRlci5oZWlnaHQ7XG4gICAgICB9KTtcblxuICAgIC8vIHJlbW92ZSBtYXJrZWQgdmlld3NcbiAgICByb290LmNoaWxkVmlld3NcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24odmlldykge1xuICAgICAgICByZXR1cm4gdmlldy5tYXJrZWRGb3JSZW1vdmFsICYmIHZpZXcub3BhY2l0eSA9PT0gMDtcbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbih2aWV3KSB7XG4gICAgICAgIHJvb3QucmVtb3ZlQ2hpbGRWaWV3KHZpZXcpO1xuICAgICAgICByZXN0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgIHJldHVybiByZXN0aW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIGFjdGlvbnMgdGhhdCBhcmUgbWVhbnQgc3BlY2lmaWNhbGx5IGZvciBhIGNlcnRhaW4gY2hpbGQgb2YgdGhlIGxpc3RcbiAgICogQHBhcmFtIGNoaWxkXG4gICAqIEBwYXJhbSBhY3Rpb25zXG4gICAqL1xuICB2YXIgZmlsdGVyU2V0SXRlbUFjdGlvbnMgPSBmdW5jdGlvbiBmaWx0ZXJTZXRJdGVtQWN0aW9ucyhjaGlsZCwgYWN0aW9ucykge1xuICAgIHJldHVybiBhY3Rpb25zLmZpbHRlcihmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgIC8vIGlmIGFjdGlvbiBoYXMgYW4gaWQsIGZpbHRlciBvdXQgYWN0aW9ucyB0aGF0IGRvbid0IGhhdmUgdGhpcyBjaGlsZCBpZFxuICAgICAgaWYgKGFjdGlvbi5kYXRhICYmIGFjdGlvbi5kYXRhLmlkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZC5pZCA9PT0gYWN0aW9uLmRhdGEuaWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIGFsbG93IGFsbCBvdGhlciBhY3Rpb25zXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgbGlzdCA9IGNyZWF0ZVZpZXcoe1xuICAgIGNyZWF0ZTogY3JlYXRlJDMsXG4gICAgd3JpdGU6IHdyaXRlJDIsXG4gICAgdGFnOiAndWwnLFxuICAgIG5hbWU6ICdsaXN0JyxcbiAgICBmaWx0ZXJGcmFtZUFjdGlvbnNGb3JDaGlsZDogZmlsdGVyU2V0SXRlbUFjdGlvbnMsXG4gICAgbWl4aW5zOiB7XG4gICAgICBhcGlzOiBbJ2RyYWdJbmRleCddXG4gICAgfVxuICB9KTtcblxuICB2YXIgZ2V0SXRlbUluZGV4QnlQb3NpdGlvbiA9IGZ1bmN0aW9uIGdldEl0ZW1JbmRleEJ5UG9zaXRpb24oXG4gICAgdmlldyxcbiAgICBwb3NpdGlvbkluVmlld1xuICApIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGNoaWxkVmlld3MgPSB2aWV3LmNoaWxkVmlld3M7XG4gICAgdmFyIGwgPSBjaGlsZFZpZXdzLmxlbmd0aDtcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBjaGlsZFZpZXdzW2ldO1xuICAgICAgdmFyIGl0ZW1SZWN0ID0gaXRlbS5yZWN0Lm91dGVyO1xuICAgICAgdmFyIGl0ZW1SZWN0TWlkID0gaXRlbVJlY3QudG9wICsgaXRlbVJlY3QuaGVpZ2h0ICogMC41O1xuXG4gICAgICBpZiAocG9zaXRpb25JblZpZXcudG9wIDwgaXRlbVJlY3RNaWQpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGw7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZSQyID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcblxuICAgIHJvb3QucmVmLmxpc3QgPSByb290LmFwcGVuZENoaWxkVmlldyhyb290LmNyZWF0ZUNoaWxkVmlldyhsaXN0KSk7XG5cbiAgICBwcm9wcy5kcmFnQ29vcmRpbmF0ZXMgPSBudWxsO1xuICAgIHByb3BzLm92ZXJmbG93aW5nID0gZmFsc2U7XG4gIH07XG5cbiAgdmFyIHN0b3JlRHJhZ0Nvb3JkaW5hdGVzID0gZnVuY3Rpb24gc3RvcmVEcmFnQ29vcmRpbmF0ZXMoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYyLnByb3BzLFxuICAgICAgYWN0aW9uID0gX3JlZjIuYWN0aW9uO1xuXG4gICAgcHJvcHMuZHJhZ0Nvb3JkaW5hdGVzID0ge1xuICAgICAgbGVmdDogYWN0aW9uLnBvc2l0aW9uLnNjb3BlTGVmdCxcbiAgICAgIHRvcDpcbiAgICAgICAgYWN0aW9uLnBvc2l0aW9uLnNjb3BlVG9wIC1cbiAgICAgICAgcm9vdC5yZWN0Lm91dGVyLnRvcCArXG4gICAgICAgIHJvb3QucmVjdC5lbGVtZW50LnNjcm9sbFRvcFxuICAgIH07XG4gIH07XG5cbiAgdmFyIGNsZWFyRHJhZ0Nvb3JkaW5hdGVzID0gZnVuY3Rpb24gY2xlYXJEcmFnQ29vcmRpbmF0ZXMoX3JlZjMpIHtcbiAgICB2YXIgcHJvcHMgPSBfcmVmMy5wcm9wcztcblxuICAgIHByb3BzLmRyYWdDb29yZGluYXRlcyA9IG51bGw7XG4gIH07XG5cbiAgdmFyIHJvdXRlJDEgPSBjcmVhdGVSb3V0ZSh7XG4gICAgRElEX0RSQUc6IHN0b3JlRHJhZ0Nvb3JkaW5hdGVzLFxuICAgIERJRF9FTkRfRFJBRzogY2xlYXJEcmFnQ29vcmRpbmF0ZXNcbiAgfSk7XG5cbiAgdmFyIHdyaXRlJDEgPSBmdW5jdGlvbiB3cml0ZShfcmVmNCkge1xuICAgIHZhciByb290ID0gX3JlZjQucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZjQucHJvcHMsXG4gICAgICBhY3Rpb25zID0gX3JlZjQuYWN0aW9ucztcblxuICAgIC8vIHJvdXRlIGFjdGlvbnNcbiAgICByb3V0ZSQxKHsgcm9vdDogcm9vdCwgcHJvcHM6IHByb3BzLCBhY3Rpb25zOiBhY3Rpb25zIH0pO1xuXG4gICAgLy8gY3VycmVudCBkcmFnIHBvc2l0aW9uXG4gICAgcm9vdC5yZWYubGlzdC5kcmFnSW5kZXggPSBwcm9wcy5kcmFnQ29vcmRpbmF0ZXNcbiAgICAgID8gZ2V0SXRlbUluZGV4QnlQb3NpdGlvbihyb290LnJlZi5saXN0LCBwcm9wcy5kcmFnQ29vcmRpbmF0ZXMpXG4gICAgICA6IC0xO1xuXG4gICAgLy8gaWYgY3VycmVudGx5IG92ZXJmbG93aW5nIGJ1dCBubyBsb25nZXIgcmVjZWl2ZWQgb3ZlcmZsb3dcbiAgICBpZiAocHJvcHMub3ZlcmZsb3dpbmcgJiYgIXByb3BzLm92ZXJmbG93KSB7XG4gICAgICBwcm9wcy5vdmVyZmxvd2luZyA9IGZhbHNlO1xuXG4gICAgICAvLyByZXNldCBvdmVyZmxvdyBzdGF0ZVxuICAgICAgcm9vdC5lbGVtZW50LmRhdGFzZXQuc3RhdGUgPSAnJztcbiAgICAgIHJvb3QuaGVpZ2h0ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBpZiBpcyBub3Qgb3ZlcmZsb3dpbmcgY3VycmVudGx5IGJ1dCBkb2VzIHJlY2VpdmUgb3ZlcmZsb3cgdmFsdWVcbiAgICBpZiAoIXByb3BzLm92ZXJmbG93aW5nICYmIHByb3BzLm92ZXJmbG93KSB7XG4gICAgICBwcm9wcy5vdmVyZmxvd2luZyA9IHRydWU7XG4gICAgICByb290LmVsZW1lbnQuZGF0YXNldC5zdGF0ZSA9ICdvdmVyZmxvdyc7XG4gICAgICByb290LmhlaWdodCA9IHByb3BzLm92ZXJmbG93IC0gcm9vdC50cmFuc2xhdGVZO1xuICAgIH1cbiAgfTtcblxuICB2YXIgbGlzdFNjcm9sbGVyID0gY3JlYXRlVmlldyh7XG4gICAgY3JlYXRlOiBjcmVhdGUkMixcbiAgICB3cml0ZTogd3JpdGUkMSxcbiAgICBuYW1lOiAnbGlzdC1zY3JvbGxlcicsXG4gICAgbWl4aW5zOiB7XG4gICAgICBhcGlzOiBbJ292ZXJmbG93J10sXG4gICAgICBzdHlsZXM6IFsnaGVpZ2h0JywgJ3RyYW5zbGF0ZVknXVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF0dHJUb2dnbGUgPSBmdW5jdGlvbiBhdHRyVG9nZ2xlKGVsZW1lbnQsIG5hbWUsIHN0YXRlKSB7XG4gICAgdmFyIGVuYWJsZWRWYWx1ZSA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6ICcnO1xuXG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBhdHRyKGVsZW1lbnQsIG5hbWUsIGVuYWJsZWRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcmVzZXRGaWxlSW5wdXQgPSBmdW5jdGlvbiByZXNldEZpbGVJbnB1dChpbnB1dCkge1xuICAgIC8vIG5vIHZhbHVlLCBubyBuZWVkIHRvIHJlc2V0XG4gICAgaWYgKCFpbnB1dCB8fCBpbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8gZm9yIG1vZGVybiBicm93c2Vyc1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICAvLyBmb3IgSUUxMFxuICAgIGlmIChpbnB1dC52YWx1ZSkge1xuICAgICAgLy8gcXVpY2tseSBhcHBlbmQgaW5wdXQgdG8gdGVtcCBmb3JtIGFuZCByZXNldCBmb3JtXG4gICAgICB2YXIgZm9ybSA9IGNyZWF0ZUVsZW1lbnQkMSgnZm9ybScpO1xuICAgICAgdmFyIHBhcmVudE5vZGUgPSBpbnB1dC5wYXJlbnROb2RlO1xuICAgICAgdmFyIHJlZiA9IGlucHV0Lm5leHRTaWJsaW5nO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICBmb3JtLnJlc2V0KCk7XG5cbiAgICAgIC8vIHJlLWluamVjdCBpbnB1dCB3aGVyZSBpdCBvcmlnaW5hbGx5IHdhc1xuICAgICAgaWYgKHJlZikge1xuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShpbnB1dCwgcmVmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgY3JlYXRlJDEyID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcblxuICAgIC8vIHNldCBpZCBzbyBjYW4gYmUgcmVmZXJlbmNlZCBmcm9tIG91dHNpZGUgbGFiZWxzXG4gICAgcm9vdC5lbGVtZW50LmlkID0gJ2ZpbGVwb25kLS1icm93c2VyLScgKyBwcm9wcy5pZDtcblxuICAgIC8vIHdlIGhhdmUgdG8gbGluayB0aGlzIGVsZW1lbnQgdG8gdGhlIHN0YXR1cyBlbGVtZW50XG4gICAgYXR0cihyb290LmVsZW1lbnQsICdhcmlhLWNvbnRyb2xzJywgJ2ZpbGVwb25kLS1hc3Npc3RhbnQtJyArIHByb3BzLmlkKTtcblxuICAgIC8vIHNldCBsYWJlbCwgd2UgdXNlIGxhYmVsbGVkIGJ5IGFzIG90aGVyd2lzZSB0aGUgc2NyZWVucmVhZGVyIGRvZXMgbm90IHJlYWQgdGhlIFwiYnJvd3NlXCIgdGV4dCBpbiB0aGUgbGFiZWwgKGFzIGl0IGhhcyB0YWJpbmRleDogMClcbiAgICBhdHRyKHJvb3QuZWxlbWVudCwgJ2FyaWEtbGFiZWxsZWRieScsICdmaWxlcG9uZC0tZHJvcC1sYWJlbC0nICsgcHJvcHMuaWQpO1xuXG4gICAgLy8gaGFuZGxlIGNoYW5nZXMgdG8gdGhlIGlucHV0IGZpZWxkXG4gICAgcm9vdC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFyb290LmVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBleHRyYWN0IGZpbGVzXG4gICAgICB2YXIgZmlsZXMgPSBbXS5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkocm9vdC5lbGVtZW50LmZpbGVzKSk7XG5cbiAgICAgIC8vIHdlIGFkZCBhIGxpdHRsZSBkZWxheSBzbyB0aGUgT1MgZmlsZSBzZWxlY3Qgd2luZG93IGNhbiBtb3ZlIG91dCBvZiB0aGUgd2F5IGJlZm9yZSB3ZSBhZGQgb3VyIGZpbGVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGxvYWQgZmlsZXNcbiAgICAgICAgcHJvcHMub25sb2FkKGZpbGVzKTtcblxuICAgICAgICAvLyByZXNldCBpbnB1dCwgaXQncyBqdXN0IGZvciBleHBvc2luZyBhIG1ldGhvZCB0byBkcm9wIGZpbGVzLCBzaG91bGQgbm90IHJldGFpbiBhbnkgc3RhdGVcbiAgICAgICAgcmVzZXRGaWxlSW5wdXQocm9vdC5lbGVtZW50KTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHNldEFjY2VwdGVkRmlsZVR5cGVzID0gZnVuY3Rpb24gc2V0QWNjZXB0ZWRGaWxlVHlwZXMoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmMi5hY3Rpb247XG5cbiAgICBhdHRyVG9nZ2xlKFxuICAgICAgcm9vdC5lbGVtZW50LFxuICAgICAgJ2FjY2VwdCcsXG4gICAgICAhIWFjdGlvbi52YWx1ZSxcbiAgICAgIGFjdGlvbi52YWx1ZSA/IGFjdGlvbi52YWx1ZS5qb2luKCcsJykgOiAnJ1xuICAgICk7XG4gIH07XG5cbiAgdmFyIHRvZ2dsZUFsbG93TXVsdGlwbGUgPSBmdW5jdGlvbiB0b2dnbGVBbGxvd011bHRpcGxlKF9yZWYzKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMy5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjMuYWN0aW9uO1xuXG4gICAgYXR0clRvZ2dsZShyb290LmVsZW1lbnQsICdtdWx0aXBsZScsIGFjdGlvbi52YWx1ZSk7XG4gIH07XG5cbiAgdmFyIHRvZ2dsZUFsbG93QnJvd3NlJDEgPSBmdW5jdGlvbiB0b2dnbGVBbGxvd0Jyb3dzZShfcmVmNCkge1xuICAgIHZhciByb290ID0gX3JlZjQucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWY0LmFjdGlvbjtcblxuICAgIGF0dHJUb2dnbGUocm9vdC5lbGVtZW50LCAnZGlzYWJsZWQnLCAhYWN0aW9uLnZhbHVlKTtcbiAgfTtcblxuICB2YXIgdG9nZ2xlUmVxdWlyZWQgPSBmdW5jdGlvbiB0b2dnbGVSZXF1aXJlZChfcmVmNSkge1xuICAgIHZhciByb290ID0gX3JlZjUucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWY1LmFjdGlvbjtcblxuICAgIC8vIHdhbnQgdG8gcmVtb3ZlIHJlcXVpcmVkLCBhbHdheXMgcG9zc2libGVcbiAgICBpZiAoIWFjdGlvbi52YWx1ZSkge1xuICAgICAgYXR0clRvZ2dsZShyb290LmVsZW1lbnQsICdyZXF1aXJlZCcsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHJvb3QucXVlcnkoJ0dFVF9UT1RBTF9JVEVNUycpID09PSAwKSB7XG4gICAgICAvLyBpZiB3YW50IHRvIG1ha2UgcmVxdWlyZWQsIG9ubHkgcG9zc2libGUgd2hlbiB6ZXJvIGl0ZW1zXG4gICAgICBhdHRyVG9nZ2xlKHJvb3QuZWxlbWVudCwgJ3JlcXVpcmVkJywgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBzZXRDYXB0dXJlTWV0aG9kID0gZnVuY3Rpb24gc2V0Q2FwdHVyZU1ldGhvZChfcmVmNikge1xuICAgIHZhciByb290ID0gX3JlZjYucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWY2LmFjdGlvbjtcblxuICAgIGF0dHJUb2dnbGUoXG4gICAgICByb290LmVsZW1lbnQsXG4gICAgICAnY2FwdHVyZScsXG4gICAgICAhIWFjdGlvbi52YWx1ZSxcbiAgICAgIGFjdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogYWN0aW9uLnZhbHVlXG4gICAgKTtcbiAgfTtcblxuICB2YXIgdXBkYXRlUmVxdWlyZWRTdGF0dXMgPSBmdW5jdGlvbiB1cGRhdGVSZXF1aXJlZFN0YXR1cyhfcmVmOCkge1xuICAgIHZhciByb290ID0gX3JlZjgucm9vdDtcblxuICAgIC8vIGFsd2F5cyByZW1vdmUgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZSB3aGVuIG1vcmUgdGhhbiB6ZXJvIGl0ZW1zXG4gICAgaWYgKHJvb3QucXVlcnkoJ0dFVF9UT1RBTF9JVEVNUycpID4gMCkge1xuICAgICAgYXR0clRvZ2dsZShyb290LmVsZW1lbnQsICdyZXF1aXJlZCcsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHJvb3QucXVlcnkoJ0dFVF9SRVFVSVJFRCcpKSB7XG4gICAgICAvLyBpZiB6ZXJvIGl0ZW1zLCB3ZSBvbmx5IGFkZCBpdCBpZiB0aGUgZmllbGQgaXMgcmVxdWlyZWRcbiAgICAgIGF0dHJUb2dnbGUocm9vdC5lbGVtZW50LCAncmVxdWlyZWQnLCB0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGJyb3dzZXIgPSBjcmVhdGVWaWV3KHtcbiAgICB0YWc6ICdpbnB1dCcsXG4gICAgbmFtZTogJ2Jyb3dzZXInLFxuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgdHlwZTogJ2ZpbGUnXG4gICAgfSxcbiAgICBjcmVhdGU6IGNyZWF0ZSQxMixcbiAgICB3cml0ZTogY3JlYXRlUm91dGUoe1xuICAgICAgRElEX0FERF9JVEVNOiB1cGRhdGVSZXF1aXJlZFN0YXR1cyxcbiAgICAgIERJRF9SRU1PVkVfSVRFTTogdXBkYXRlUmVxdWlyZWRTdGF0dXMsXG4gICAgICBESURfU0VUX0FMTE9XX0JST1dTRTogdG9nZ2xlQWxsb3dCcm93c2UkMSxcbiAgICAgIERJRF9TRVRfQUxMT1dfTVVMVElQTEU6IHRvZ2dsZUFsbG93TXVsdGlwbGUsXG4gICAgICBESURfU0VUX0FDQ0VQVEVEX0ZJTEVfVFlQRVM6IHNldEFjY2VwdGVkRmlsZVR5cGVzLFxuICAgICAgRElEX1NFVF9DQVBUVVJFX01FVEhPRDogc2V0Q2FwdHVyZU1ldGhvZCxcbiAgICAgIERJRF9TRVRfUkVRVUlSRUQ6IHRvZ2dsZVJlcXVpcmVkXG4gICAgfSlcbiAgfSk7XG5cbiAgdmFyIEtleSA9IHtcbiAgICBFTlRFUjogMTMsXG4gICAgU1BBQ0U6IDMyXG4gIH07XG5cbiAgdmFyIGNyZWF0ZSQxMyA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG5cbiAgICAvLyBjcmVhdGUgdGhlIGxhYmVsIGFuZCBsaW5rIGl0IHRvIHRoZSBmaWxlIGJyb3dzZXJcbiAgICB2YXIgbGFiZWwgPSBjcmVhdGVFbGVtZW50JDEoJ2xhYmVsJyk7XG4gICAgYXR0cihsYWJlbCwgJ2ZvcicsICdmaWxlcG9uZC0tYnJvd3Nlci0nICsgcHJvcHMuaWQpO1xuXG4gICAgLy8gdXNlIGZvciBsYWJlbGluZyBmaWxlIGlucHV0IChhcmlhLWxhYmVsbGVkYnkgb24gZmlsZSBpbnB1dClcbiAgICBhdHRyKGxhYmVsLCAnaWQnLCAnZmlsZXBvbmQtLWRyb3AtbGFiZWwtJyArIHByb3BzLmlkKTtcblxuICAgIC8vIGhpZGUgdGhlIGxhYmVsIGZyb20gc2NyZWVucmVhZGVycywgdGhlIGlucHV0IGVsZW1lbnQgaGFzIGFuIGFyaWEtbGFiZWxcbiAgICBhdHRyKGxhYmVsLCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgLy8gaGFuZGxlIGtleXNcbiAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5LkVOVEVSIHx8IGUua2V5Q29kZSA9PT0gS2V5LlNQQUNFKSB7XG4gICAgICAgIC8vIHN0b3BzIGZyb20gdHJpZ2dlcmluZyB0aGUgZWxlbWVudCBhIHNlY29uZCB0aW1lXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBjbGljayBsaW5rICh3aWxsIHRoZW4gaW4gdHVybiBhY3RpdmF0ZSBmaWxlIGlucHV0KVxuICAgICAgICByb290LnJlZi5sYWJlbC5jbGljaygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gYWRkIVxuICAgIHJvb3QuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHJvb3QucmVmLmxhYmVsID0gbGFiZWw7XG4gIH07XG5cbiAgdmFyIHVwZGF0ZUxhYmVsVmFsdWUgPSBmdW5jdGlvbiB1cGRhdGVMYWJlbFZhbHVlKGxhYmVsLCB2YWx1ZSkge1xuICAgIGxhYmVsLmlubmVySFRNTCA9IHZhbHVlO1xuICAgIHZhciBjbGlja2FibGUgPSBsYWJlbC5xdWVyeVNlbGVjdG9yKCcuZmlsZXBvbmQtLWxhYmVsLWFjdGlvbicpO1xuICAgIGlmIChjbGlja2FibGUpIHtcbiAgICAgIGF0dHIoY2xpY2thYmxlLCAndGFiaW5kZXgnLCAnMCcpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgdmFyIGRyb3BMYWJlbCA9IGNyZWF0ZVZpZXcoe1xuICAgIG5hbWU6ICdkcm9wLWxhYmVsJyxcbiAgICBjcmVhdGU6IGNyZWF0ZSQxMyxcbiAgICB3cml0ZTogY3JlYXRlUm91dGUoe1xuICAgICAgRElEX1NFVF9MQUJFTF9JRExFOiBmdW5jdGlvbiBESURfU0VUX0xBQkVMX0lETEUoX3JlZjIpIHtcbiAgICAgICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgICAgIGFjdGlvbiA9IF9yZWYyLmFjdGlvbixcbiAgICAgICAgICBwcm9wcyA9IF9yZWYyLnByb3BzO1xuXG4gICAgICAgIHByb3BzLmNhcHRpb24gPSB1cGRhdGVMYWJlbFZhbHVlKHJvb3QucmVmLmxhYmVsLCBhY3Rpb24udmFsdWUpO1xuICAgICAgfVxuICAgIH0pLFxuICAgIG1peGluczoge1xuICAgICAgYXBpczogWydjYXB0aW9uJ10sXG4gICAgICBzdHlsZXM6IFsnb3BhY2l0eScsICd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknXSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgb3BhY2l0eTogeyB0eXBlOiAndHdlZW4nLCBkdXJhdGlvbjogMTUwIH0sXG4gICAgICAgIHRyYW5zbGF0ZVg6ICdzcHJpbmcnLFxuICAgICAgICB0cmFuc2xhdGVZOiAnc3ByaW5nJ1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGJsb2IgPSBjcmVhdGVWaWV3KHtcbiAgICBuYW1lOiAnZHJpcC1ibG9iJyxcbiAgICBpZ25vcmVSZWN0OiB0cnVlLFxuICAgIG1peGluczoge1xuICAgICAgc3R5bGVzOiBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICdzY2FsZVgnLCAnc2NhbGVZJywgJ29wYWNpdHknXSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgc2NhbGVYOiAnc3ByaW5nJyxcbiAgICAgICAgc2NhbGVZOiAnc3ByaW5nJyxcbiAgICAgICAgdHJhbnNsYXRlWDogJ3NwcmluZycsXG4gICAgICAgIHRyYW5zbGF0ZVk6ICdzcHJpbmcnLFxuICAgICAgICBvcGFjaXR5OiB7IHR5cGU6ICd0d2VlbicsIGR1cmF0aW9uOiAyNTAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGFkZEJsb2IgPSBmdW5jdGlvbiBhZGRCbG9iKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdDtcblxuICAgIHZhciBjZW50ZXJYID0gcm9vdC5yZWN0LmVsZW1lbnQud2lkdGggKiAwLjU7XG4gICAgdmFyIGNlbnRlclkgPSByb290LnJlY3QuZWxlbWVudC5oZWlnaHQgKiAwLjU7XG5cbiAgICByb290LnJlZi5ibG9iID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhibG9iLCB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHNjYWxlWDogMi41LFxuICAgICAgICBzY2FsZVk6IDIuNSxcbiAgICAgICAgdHJhbnNsYXRlWDogY2VudGVyWCxcbiAgICAgICAgdHJhbnNsYXRlWTogY2VudGVyWVxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHZhciBtb3ZlQmxvYiA9IGZ1bmN0aW9uIG1vdmVCbG9iKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjIuYWN0aW9uO1xuXG4gICAgaWYgKCFyb290LnJlZi5ibG9iKSB7XG4gICAgICBhZGRCbG9iKHsgcm9vdDogcm9vdCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByb290LnJlZi5ibG9iLnRyYW5zbGF0ZVggPSBhY3Rpb24ucG9zaXRpb24uc2NvcGVMZWZ0O1xuICAgIHJvb3QucmVmLmJsb2IudHJhbnNsYXRlWSA9IGFjdGlvbi5wb3NpdGlvbi5zY29wZVRvcDtcbiAgICByb290LnJlZi5ibG9iLnNjYWxlWCA9IDE7XG4gICAgcm9vdC5yZWYuYmxvYi5zY2FsZVkgPSAxO1xuICAgIHJvb3QucmVmLmJsb2Iub3BhY2l0eSA9IDE7XG4gIH07XG5cbiAgdmFyIGhpZGVCbG9iID0gZnVuY3Rpb24gaGlkZUJsb2IoX3JlZjMpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYzLnJvb3Q7XG5cbiAgICBpZiAoIXJvb3QucmVmLmJsb2IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcm9vdC5yZWYuYmxvYi5vcGFjaXR5ID0gMDtcbiAgfTtcblxuICB2YXIgZXhwbG9kZUJsb2IgPSBmdW5jdGlvbiBleHBsb2RlQmxvYihfcmVmNCkge1xuICAgIHZhciByb290ID0gX3JlZjQucm9vdDtcblxuICAgIGlmICghcm9vdC5yZWYuYmxvYikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByb290LnJlZi5ibG9iLnNjYWxlWCA9IDIuNTtcbiAgICByb290LnJlZi5ibG9iLnNjYWxlWSA9IDIuNTtcbiAgICByb290LnJlZi5ibG9iLm9wYWNpdHkgPSAwO1xuICB9O1xuXG4gIHZhciB3cml0ZSQ4ID0gZnVuY3Rpb24gd3JpdGUoX3JlZjUpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY1LnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWY1LnByb3BzLFxuICAgICAgYWN0aW9ucyA9IF9yZWY1LmFjdGlvbnM7XG5cbiAgICByb3V0ZSQ0KHsgcm9vdDogcm9vdCwgcHJvcHM6IHByb3BzLCBhY3Rpb25zOiBhY3Rpb25zIH0pO1xuXG4gICAgdmFyIGJsb2IkJDEgPSByb290LnJlZi5ibG9iO1xuXG4gICAgaWYgKGFjdGlvbnMubGVuZ3RoID09PSAwICYmIGJsb2IkJDEgJiYgYmxvYiQkMS5vcGFjaXR5ID09PSAwKSB7XG4gICAgICByb290LnJlbW92ZUNoaWxkVmlldyhibG9iJCQxKTtcbiAgICAgIHJvb3QucmVmLmJsb2IgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcm91dGUkNCA9IGNyZWF0ZVJvdXRlKHtcbiAgICBESURfRFJBRzogbW92ZUJsb2IsXG4gICAgRElEX0RST1A6IGV4cGxvZGVCbG9iLFxuICAgIERJRF9FTkRfRFJBRzogaGlkZUJsb2JcbiAgfSk7XG5cbiAgdmFyIGRyaXAgPSBjcmVhdGVWaWV3KHtcbiAgICBpZ25vcmVSZWN0OiB0cnVlLFxuICAgIG5hbWU6ICdkcmlwJyxcbiAgICB3cml0ZTogd3JpdGUkOFxuICB9KTtcblxuICB2YXIgZ2V0Um9vdE5vZGUgPSBmdW5jdGlvbiBnZXRSb290Tm9kZShlbGVtZW50KSB7XG4gICAgcmV0dXJuICdnZXRSb290Tm9kZScgaW4gZWxlbWVudCA/IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKSA6IGRvY3VtZW50O1xuICB9O1xuXG4gIHZhciByZXF1ZXN0RGF0YVRyYW5zZmVySXRlbXMgPSBmdW5jdGlvbiByZXF1ZXN0RGF0YVRyYW5zZmVySXRlbXMoXG4gICAgZGF0YVRyYW5zZmVyXG4gICkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8vIHRyeSB0byBnZXQgbGlua3MgZnJvbSB0cmFuc2ZlciwgaWYgZm91bmQsIHdlJ2xsIGV4aXQgaW1taWRpYXRlbHlcbiAgICAgIC8vIGFzIG9ubHkgb25lIGxpbmsgY2FuIGJlIGRyYWdnZWQgYXQgb25jZVxuICAgICAgdmFyIGxpbmtzID0gZ2V0TGlua3MoZGF0YVRyYW5zZmVyKTtcbiAgICAgIGlmIChsaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgcmVzb2x2ZShsaW5rcyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gdHJ5IHRvIGdldCBmaWxlcyBmcm9tIHRoZSB0cmFuc2ZlclxuICAgICAgZ2V0RmlsZXMoZGF0YVRyYW5zZmVyKS50aGVuKHJlc29sdmUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyBmaWxlcyBmcm9tIGEgRGF0YVRyYW5zZmVyIG9iamVjdFxuICAgKi9cbiAgdmFyIGdldEZpbGVzID0gZnVuY3Rpb24gZ2V0RmlsZXMoZGF0YVRyYW5zZmVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLy8gZ2V0IHRoZSB0cmFuc2ZlciBpdGVtcyBhcyBwcm9taXNlc1xuICAgICAgdmFyIHByb21pc2VkRmlsZXMgPSAoZGF0YVRyYW5zZmVyLml0ZW1zXG4gICAgICAgID8gW10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KGRhdGFUcmFuc2Zlci5pdGVtcykpXG4gICAgICAgIDogW11cbiAgICAgIClcbiAgICAgICAgLy8gb25seSBrZWVwIGZpbGUgc3lzdGVtIGl0ZW1zIChmaWxlcyBhbmQgZGlyZWN0b3JpZXMpXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHJldHVybiBpc0ZpbGVTeXN0ZW1JdGVtKGl0ZW0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIG1hcCBlYWNoIGl0ZW0gdG8gcHJvbWlzZVxuICAgICAgICAubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGcm9tSXRlbShpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIGlmIGlzIGVtcHR5LCBzZWUgaWYgd2UgY2FuIGV4dHJhY3Qgc29tZSBpbmZvIGZyb20gdGhlIGZpbGVzIHByb3BlcnR5IGFzIGEgZmFsbGJhY2tcbiAgICAgIGlmICghcHJvbWlzZWRGaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gVE9ETzogdGVzdCBmb3IgZGlyZWN0b3JpZXMgKHNob3VsZCBub3QgYmUgYWxsb3dlZClcbiAgICAgICAgLy8gVXNlIEZpbGVSZWFkZXIsIHByb2JsZW0gaXMgdGhhdCB0aGUgZmlsZXMgcHJvcGVydHkgZ2V0cyBsb3N0IGluIHRoZSBwcm9jZXNzXG5cbiAgICAgICAgcmVzb2x2ZShbXS5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkoZGF0YVRyYW5zZmVyLmZpbGVzKSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGRvbmUhXG4gICAgICBQcm9taXNlLmFsbChwcm9taXNlZEZpbGVzKS50aGVuKGZ1bmN0aW9uKHJldHVyZW5kRmlsZUdyb3Vwcykge1xuICAgICAgICAvLyBmbGF0dGVuIGdyb3Vwc1xuICAgICAgICB2YXIgZmlsZXMgPSBbXTtcbiAgICAgICAgcmV0dXJlbmRGaWxlR3JvdXBzLmZvckVhY2goZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgICBmaWxlcy5wdXNoLmFwcGx5KGZpbGVzLCB0b0NvbnN1bWFibGVBcnJheShncm91cCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBkb25lIChmaWx0ZXIgb3V0IGVtcHR5IGZpbGVzKSFcbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICBmaWxlcy5maWx0ZXIoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBpc0ZpbGVTeXN0ZW1JdGVtID0gZnVuY3Rpb24gaXNGaWxlU3lzdGVtSXRlbShpdGVtKSB7XG4gICAgaWYgKGlzRW50cnkoaXRlbSkpIHtcbiAgICAgIHZhciBlbnRyeSA9IGdldEFzRW50cnkoaXRlbSk7XG4gICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIGVudHJ5LmlzRmlsZSB8fCBlbnRyeS5pc0RpcmVjdG9yeTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW0ua2luZCA9PT0gJ2ZpbGUnO1xuICB9O1xuXG4gIHZhciBnZXRGaWxlc0Zyb21JdGVtID0gZnVuY3Rpb24gZ2V0RmlsZXNGcm9tSXRlbShpdGVtKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKGlzRGlyZWN0b3J5RW50cnkoaXRlbSkpIHtcbiAgICAgICAgZ2V0RmlsZXNJbkRpcmVjdG9yeShnZXRBc0VudHJ5KGl0ZW0pKS50aGVuKHJlc29sdmUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlc29sdmUoW2l0ZW0uZ2V0QXNGaWxlKCldKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ2V0RmlsZXNJbkRpcmVjdG9yeSA9IGZ1bmN0aW9uIGdldEZpbGVzSW5EaXJlY3RvcnkoZW50cnkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZmlsZXMgPSBbXTtcblxuICAgICAgLy8gdGhlIHRvdGFsIGVudHJpZXMgdG8gcmVhZFxuICAgICAgdmFyIHRvdGFsRmlsZXNGb3VuZCA9IDA7XG5cbiAgICAgIC8vIHRoZSByZWN1cnNpdmUgZnVuY3Rpb25cbiAgICAgIHZhciByZWFkRW50cmllcyA9IGZ1bmN0aW9uIHJlYWRFbnRyaWVzKGRpckVudHJ5KSB7XG4gICAgICAgIHZhciBkaXJlY3RvcnlSZWFkZXIgPSBkaXJFbnRyeS5jcmVhdGVSZWFkZXIoKTtcbiAgICAgICAgZGlyZWN0b3J5UmVhZGVyLnJlYWRFbnRyaWVzKGZ1bmN0aW9uKGVudHJpZXMpIHtcbiAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgIC8vIHJlY3Vyc2l2ZWx5IHJlYWQgbW9yZSBkaXJlY3Rvcmllc1xuICAgICAgICAgICAgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICAgIHJlYWRFbnRyaWVzKGVudHJ5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHJlYWQgYXMgZmlsZVxuICAgICAgICAgICAgICB0b3RhbEZpbGVzRm91bmQrKztcbiAgICAgICAgICAgICAgZW50cnkuZmlsZShmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICAgICAgZmlsZXMucHVzaChmaWxlKTtcblxuICAgICAgICAgICAgICAgIGlmICh0b3RhbEZpbGVzRm91bmQgPT09IGZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBnbyFcbiAgICAgIHJlYWRFbnRyaWVzKGVudHJ5KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgaXNEaXJlY3RvcnlFbnRyeSA9IGZ1bmN0aW9uIGlzRGlyZWN0b3J5RW50cnkoaXRlbSkge1xuICAgIHJldHVybiBpc0VudHJ5KGl0ZW0pICYmIChnZXRBc0VudHJ5KGl0ZW0pIHx8IHt9KS5pc0RpcmVjdG9yeTtcbiAgfTtcblxuICB2YXIgaXNFbnRyeSA9IGZ1bmN0aW9uIGlzRW50cnkoaXRlbSkge1xuICAgIHJldHVybiAnd2Via2l0R2V0QXNFbnRyeScgaW4gaXRlbTtcbiAgfTtcblxuICB2YXIgZ2V0QXNFbnRyeSA9IGZ1bmN0aW9uIGdldEFzRW50cnkoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLndlYmtpdEdldEFzRW50cnkoKTtcbiAgfTtcblxuICAvKipcbiAgICogRXh0cmFjdHMgbGlua3MgZnJvbSBhIERhdGFUcmFuc2ZlciBvYmplY3RcbiAgICovXG4gIHZhciBnZXRMaW5rcyA9IGZ1bmN0aW9uIGdldExpbmtzKGRhdGFUcmFuc2Zlcikge1xuICAgIHZhciBsaW5rcyA9IFtdO1xuICAgIHRyeSB7XG4gICAgICAvLyBsb29rIGluIG1ldGEgZGF0YSBwcm9wZXJ0eVxuICAgICAgbGlua3MgPSBnZXRMaW5rc0Zyb21UcmFuc2Zlck1ldGFEYXRhKGRhdGFUcmFuc2Zlcik7XG4gICAgICBpZiAobGlua3MubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBsaW5rcztcbiAgICAgIH1cbiAgICAgIGxpbmtzID0gZ2V0TGlua3NGcm9tVHJhbnNmZXJVUkxEYXRhKGRhdGFUcmFuc2Zlcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gbm9wZSBub3BlIG5vcGUgKHByb2JhYmx5IElFIHRyb3VibGUpXG4gICAgfVxuICAgIHJldHVybiBsaW5rcztcbiAgfTtcblxuICB2YXIgZ2V0TGlua3NGcm9tVHJhbnNmZXJVUkxEYXRhID0gZnVuY3Rpb24gZ2V0TGlua3NGcm9tVHJhbnNmZXJVUkxEYXRhKFxuICAgIGRhdGFUcmFuc2ZlclxuICApIHtcbiAgICB2YXIgZGF0YSA9IGRhdGFUcmFuc2Zlci5nZXREYXRhKCd1cmwnKTtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW2RhdGFdO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH07XG5cbiAgdmFyIGdldExpbmtzRnJvbVRyYW5zZmVyTWV0YURhdGEgPSBmdW5jdGlvbiBnZXRMaW5rc0Zyb21UcmFuc2Zlck1ldGFEYXRhKFxuICAgIGRhdGFUcmFuc2ZlclxuICApIHtcbiAgICB2YXIgZGF0YSA9IGRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L2h0bWwnKTtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICB2YXIgbWF0Y2hlcyA9IGRhdGEubWF0Y2goL3NyY1xccyo9XFxzKlwiKC4rPylcIi8pO1xuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIFttYXRjaGVzWzFdXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9O1xuXG4gIHZhciBkcmFnTkRyb3BPYnNlcnZlcnMgPSBbXTtcblxuICB2YXIgZXZlbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIGV2ZW50UG9zaXRpb24oZSkge1xuICAgIHJldHVybiB7XG4gICAgICBwYWdlTGVmdDogZS5wYWdlWCxcbiAgICAgIHBhZ2VUb3A6IGUucGFnZVksXG4gICAgICBzY29wZUxlZnQ6IGUubGF5ZXJYIHx8IGUub2Zmc2V0WCxcbiAgICAgIHNjb3BlVG9wOiBlLmxheWVyWSB8fCBlLm9mZnNldFlcbiAgICB9O1xuICB9O1xuXG4gIHZhciBjcmVhdGVEcmFnTkRyb3BDbGllbnQgPSBmdW5jdGlvbiBjcmVhdGVEcmFnTkRyb3BDbGllbnQoXG4gICAgZWxlbWVudCxcbiAgICBzY29wZVRvT2JzZXJ2ZSxcbiAgICBmaWx0ZXJFbGVtZW50XG4gICkge1xuICAgIHZhciBvYnNlcnZlciA9IGdldERyYWdORHJvcE9ic2VydmVyKHNjb3BlVG9PYnNlcnZlKTtcblxuICAgIHZhciBjbGllbnQgPSB7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgZmlsdGVyRWxlbWVudDogZmlsdGVyRWxlbWVudCxcbiAgICAgIHN0YXRlOiBudWxsLFxuICAgICAgb25kcm9wOiBmdW5jdGlvbiBvbmRyb3AoKSB7fSxcbiAgICAgIG9uZW50ZXI6IGZ1bmN0aW9uIG9uZW50ZXIoKSB7fSxcbiAgICAgIG9uZHJhZzogZnVuY3Rpb24gb25kcmFnKCkge30sXG4gICAgICBvbmV4aXQ6IGZ1bmN0aW9uIG9uZXhpdCgpIHt9LFxuICAgICAgb25sb2FkOiBmdW5jdGlvbiBvbmxvYWQoKSB7fSxcbiAgICAgIGFsbG93ZHJvcDogZnVuY3Rpb24gYWxsb3dkcm9wKCkge31cbiAgICB9O1xuXG4gICAgY2xpZW50LmRlc3Ryb3kgPSBvYnNlcnZlci5hZGRMaXN0ZW5lcihjbGllbnQpO1xuXG4gICAgcmV0dXJuIGNsaWVudDtcbiAgfTtcblxuICB2YXIgZ2V0RHJhZ05Ecm9wT2JzZXJ2ZXIgPSBmdW5jdGlvbiBnZXREcmFnTkRyb3BPYnNlcnZlcihlbGVtZW50KSB7XG4gICAgLy8gc2VlIGlmIGFscmVhZHkgZXhpc3RzLCBpZiBzbywgcmV0dXJuXG4gICAgdmFyIG9ic2VydmVyID0gZHJhZ05Ecm9wT2JzZXJ2ZXJzLmZpbmQoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uZWxlbWVudCA9PT0gZWxlbWVudDtcbiAgICB9KTtcbiAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybiBvYnNlcnZlcjtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgbmV3IG9ic2VydmVyLCBkb2VzIG5vdCB5ZXQgZXhpc3QgZm9yIHRoaXMgZWxlbWVudFxuICAgIHZhciBuZXdPYnNlcnZlciA9IGNyZWF0ZURyYWdORHJvcE9ic2VydmVyKGVsZW1lbnQpO1xuICAgIGRyYWdORHJvcE9ic2VydmVycy5wdXNoKG5ld09ic2VydmVyKTtcbiAgICByZXR1cm4gbmV3T2JzZXJ2ZXI7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZURyYWdORHJvcE9ic2VydmVyID0gZnVuY3Rpb24gY3JlYXRlRHJhZ05Ecm9wT2JzZXJ2ZXIoZWxlbWVudCkge1xuICAgIHZhciBjbGllbnRzID0gW107XG5cbiAgICB2YXIgcm91dGVzID0ge1xuICAgICAgZHJhZ2VudGVyOiBkcmFnZW50ZXIsXG4gICAgICBkcmFnb3ZlcjogZHJhZ292ZXIsXG4gICAgICBkcmFnbGVhdmU6IGRyYWdsZWF2ZSxcbiAgICAgIGRyb3A6IGRyb3BcbiAgICB9O1xuXG4gICAgdmFyIGhhbmRsZXJzID0ge307XG5cbiAgICBmb3Jpbihyb3V0ZXMsIGZ1bmN0aW9uKGV2ZW50LCBjcmVhdGVIYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyc1tldmVudF0gPSBjcmVhdGVIYW5kbGVyKGVsZW1lbnQsIGNsaWVudHMpO1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyc1tldmVudF0sIGZhbHNlKTtcbiAgICB9KTtcblxuICAgIHZhciBvYnNlcnZlciA9IHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICBhZGRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkTGlzdGVuZXIoY2xpZW50KSB7XG4gICAgICAgIC8vIGFkZCBhcyBjbGllbnRcbiAgICAgICAgY2xpZW50cy5wdXNoKGNsaWVudCk7XG5cbiAgICAgICAgLy8gcmV0dXJuIHJlbW92ZUxpc3RlbmVyIGZ1bmN0aW9uXG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyByZW1vdmUgY2xpZW50XG4gICAgICAgICAgY2xpZW50cy5zcGxpY2UoY2xpZW50cy5pbmRleE9mKGNsaWVudCksIDEpO1xuXG4gICAgICAgICAgLy8gaWYgbm8gbW9yZSBjbGllbnRzLCBjbGVhbiB1cCBvYnNlcnZlclxuICAgICAgICAgIGlmIChjbGllbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZHJhZ05Ecm9wT2JzZXJ2ZXJzLnNwbGljZShkcmFnTkRyb3BPYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlciksIDEpO1xuXG4gICAgICAgICAgICBmb3Jpbihyb3V0ZXMsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcnNbZXZlbnRdLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBvYnNlcnZlcjtcbiAgfTtcblxuICB2YXIgaXNFdmVudFRhcmdldCA9IGZ1bmN0aW9uIGlzRXZlbnRUYXJnZXQoZSwgdGFyZ2V0KSB7XG4gICAgLy8gZ2V0IHJvb3RcbiAgICB2YXIgcm9vdCA9IGdldFJvb3ROb2RlKHRhcmdldCk7XG5cbiAgICAvLyBnZXQgZWxlbWVudCBhdCBwb3NpdGlvblxuICAgIHZhciBlbGVtZW50QXRQb3NpdGlvbiA9IHJvb3QuZWxlbWVudEZyb21Qb2ludChcbiAgICAgIGUucGFnZVggLSB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICBlLnBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgKTtcblxuICAgIC8vIHRlc3QgaWYgdGFyZ2V0IGlzIHRoZSBlbGVtZW50IG9yIGlmIG9uZSBvZiBpdHMgY2hpbGRyZW4gaXNcbiAgICByZXR1cm4gZWxlbWVudEF0UG9zaXRpb24gPT09IHRhcmdldCB8fCB0YXJnZXQuY29udGFpbnMoZWxlbWVudEF0UG9zaXRpb24pO1xuICB9O1xuXG4gIHZhciBpbml0aWFsVGFyZ2V0ID0gbnVsbDtcblxuICB2YXIgc2V0RHJvcEVmZmVjdCA9IGZ1bmN0aW9uIHNldERyb3BFZmZlY3QoZGF0YVRyYW5zZmVyLCBlZmZlY3QpIHtcbiAgICAvLyBpcyBpbiB0cnkgY2F0Y2ggYXMgSUUxMSB3aWxsIHRocm93IGVycm9yIGlmIG5vdFxuICAgIHRyeSB7XG4gICAgICBkYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IGVmZmVjdDtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9O1xuXG4gIHZhciBkcmFnZW50ZXIgPSBmdW5jdGlvbiBkcmFnZW50ZXIocm9vdCwgY2xpZW50cykge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGluaXRpYWxUYXJnZXQgPSBlLnRhcmdldDtcblxuICAgICAgY2xpZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNsaWVudCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGNsaWVudC5lbGVtZW50LFxuICAgICAgICAgIG9uZW50ZXIgPSBjbGllbnQub25lbnRlcjtcblxuICAgICAgICBpZiAoaXNFdmVudFRhcmdldChlLCBlbGVtZW50KSkge1xuICAgICAgICAgIGNsaWVudC5zdGF0ZSA9ICdlbnRlcic7XG5cbiAgICAgICAgICAvLyBmaXJlIGVudGVyIGV2ZW50XG4gICAgICAgICAgb25lbnRlcihldmVudFBvc2l0aW9uKGUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgZHJhZ292ZXIgPSBmdW5jdGlvbiBkcmFnb3Zlcihyb290LCBjbGllbnRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdmFyIGRhdGFUcmFuc2ZlciA9IGUuZGF0YVRyYW5zZmVyO1xuXG4gICAgICByZXF1ZXN0RGF0YVRyYW5zZmVySXRlbXMoZGF0YVRyYW5zZmVyKS50aGVuKGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgIHZhciBvdmVyRHJvcFRhcmdldCA9IGZhbHNlO1xuXG4gICAgICAgIGNsaWVudHMuc29tZShmdW5jdGlvbihjbGllbnQpIHtcbiAgICAgICAgICB2YXIgZmlsdGVyRWxlbWVudCA9IGNsaWVudC5maWx0ZXJFbGVtZW50LFxuICAgICAgICAgICAgZWxlbWVudCA9IGNsaWVudC5lbGVtZW50LFxuICAgICAgICAgICAgb25lbnRlciA9IGNsaWVudC5vbmVudGVyLFxuICAgICAgICAgICAgb25leGl0ID0gY2xpZW50Lm9uZXhpdCxcbiAgICAgICAgICAgIG9uZHJhZyA9IGNsaWVudC5vbmRyYWcsXG4gICAgICAgICAgICBhbGxvd2Ryb3AgPSBjbGllbnQuYWxsb3dkcm9wO1xuXG4gICAgICAgICAgLy8gYnkgZGVmYXVsdCB3ZSBjYW4gZHJvcFxuXG4gICAgICAgICAgc2V0RHJvcEVmZmVjdChkYXRhVHJhbnNmZXIsICdjb3B5Jyk7XG5cbiAgICAgICAgICAvLyBhbGxvdyB0cmFuc2ZlciBvZiB0aGVzZSBpdGVtc1xuICAgICAgICAgIHZhciBhbGxvd3NUcmFuc2ZlciA9IGFsbG93ZHJvcChpdGVtcyk7XG5cbiAgICAgICAgICAvLyBvbmx5IHVzZWQgd2hlbiBjYW4gYmUgZHJvcHBlZCBvbiBwYWdlXG4gICAgICAgICAgaWYgKCFhbGxvd3NUcmFuc2Zlcikge1xuICAgICAgICAgICAgc2V0RHJvcEVmZmVjdChkYXRhVHJhbnNmZXIsICdub25lJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gdGFyZ2V0dGluZyB0aGlzIGNsaWVudFxuICAgICAgICAgIGlmIChpc0V2ZW50VGFyZ2V0KGUsIGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBvdmVyRHJvcFRhcmdldCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIGhhZCBubyBwcmV2aW91cyBzdGF0ZSwgbWVhbnMgd2UgYXJlIGVudGVyaW5nIHRoaXMgY2xpZW50XG4gICAgICAgICAgICBpZiAoY2xpZW50LnN0YXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNsaWVudC5zdGF0ZSA9ICdlbnRlcic7XG4gICAgICAgICAgICAgIG9uZW50ZXIoZXZlbnRQb3NpdGlvbihlKSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbm93IG92ZXIgZWxlbWVudCAobm8gbWF0dGVyIGlmIGl0IGFsbG93cyB0aGUgZHJvcCBvciBub3QpXG4gICAgICAgICAgICBjbGllbnQuc3RhdGUgPSAnb3Zlcic7XG5cbiAgICAgICAgICAgIC8vIG5lZWRzIHRvIGFsbG93IHRyYW5zZmVyXG4gICAgICAgICAgICBpZiAoZmlsdGVyRWxlbWVudCAmJiAhYWxsb3dzVHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgc2V0RHJvcEVmZmVjdChkYXRhVHJhbnNmZXIsICdub25lJyk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZHJhZ2dpbmdcbiAgICAgICAgICAgIG9uZHJhZyhldmVudFBvc2l0aW9uKGUpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIG92ZXIgYW4gZWxlbWVudCB0byBkcm9wXG4gICAgICAgICAgICBpZiAoZmlsdGVyRWxlbWVudCAmJiAhb3ZlckRyb3BUYXJnZXQpIHtcbiAgICAgICAgICAgICAgc2V0RHJvcEVmZmVjdChkYXRhVHJhbnNmZXIsICdub25lJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG1pZ2h0IGhhdmUganVzdCBsZWZ0IHRoaXMgY2xpZW50P1xuICAgICAgICAgICAgaWYgKGNsaWVudC5zdGF0ZSkge1xuICAgICAgICAgICAgICBjbGllbnQuc3RhdGUgPSBudWxsO1xuICAgICAgICAgICAgICBvbmV4aXQoZXZlbnRQb3NpdGlvbihlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGRyb3AgPSBmdW5jdGlvbiBkcm9wKHJvb3QsIGNsaWVudHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgZGF0YVRyYW5zZmVyID0gZS5kYXRhVHJhbnNmZXI7XG4gICAgICByZXF1ZXN0RGF0YVRyYW5zZmVySXRlbXMoZGF0YVRyYW5zZmVyKS50aGVuKGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgIGNsaWVudHMuZm9yRWFjaChmdW5jdGlvbihjbGllbnQpIHtcbiAgICAgICAgICB2YXIgZmlsdGVyRWxlbWVudCA9IGNsaWVudC5maWx0ZXJFbGVtZW50LFxuICAgICAgICAgICAgZWxlbWVudCA9IGNsaWVudC5lbGVtZW50LFxuICAgICAgICAgICAgb25kcm9wID0gY2xpZW50Lm9uZHJvcCxcbiAgICAgICAgICAgIG9uZXhpdCA9IGNsaWVudC5vbmV4aXQsXG4gICAgICAgICAgICBhbGxvd2Ryb3AgPSBjbGllbnQuYWxsb3dkcm9wO1xuXG4gICAgICAgICAgY2xpZW50LnN0YXRlID0gbnVsbDtcblxuICAgICAgICAgIHZhciBhbGxvd3NUcmFuc2ZlciA9IGFsbG93ZHJvcChpdGVtcyk7XG5cbiAgICAgICAgICAvLyBubyB0cmFuc2ZlciBmb3IgdGhpcyBjbGllbnRcbiAgICAgICAgICBpZiAoIWFsbG93c1RyYW5zZmVyKSB7XG4gICAgICAgICAgICBvbmV4aXQoZXZlbnRQb3NpdGlvbihlKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gaWYgd2UncmUgZmlsdGVyaW5nIG9uIGVsZW1lbnQgd2UgbmVlZCB0byBiZSBvdmVyIHRoZSBlbGVtZW50IHRvIGRyb3BcbiAgICAgICAgICBpZiAoZmlsdGVyRWxlbWVudCAmJiAhaXNFdmVudFRhcmdldChlLCBlbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9uZHJvcChldmVudFBvc2l0aW9uKGUpLCBpdGVtcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgZHJhZ2xlYXZlID0gZnVuY3Rpb24gZHJhZ2xlYXZlKHJvb3QsIGNsaWVudHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGluaXRpYWxUYXJnZXQgIT09IGUudGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xpZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNsaWVudCkge1xuICAgICAgICB2YXIgb25leGl0ID0gY2xpZW50Lm9uZXhpdDtcblxuICAgICAgICBjbGllbnQuc3RhdGUgPSBudWxsO1xuXG4gICAgICAgIG9uZXhpdChldmVudFBvc2l0aW9uKGUpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUhvcHBlciA9IGZ1bmN0aW9uIGNyZWF0ZUhvcHBlcihzY29wZSwgdmFsaWRhdGVJdGVtcywgb3B0aW9ucykge1xuICAgIC8vIGlzIG5vdyBob3BwZXIgc2NvcGVcbiAgICBzY29wZS5jbGFzc0xpc3QuYWRkKCdmaWxlcG9uZC0taG9wcGVyJyk7XG5cbiAgICAvLyBzaG9ydGN1dHNcbiAgICB2YXIgY2F0Y2hlc0Ryb3BzT25QYWdlID0gb3B0aW9ucy5jYXRjaGVzRHJvcHNPblBhZ2UsXG4gICAgICByZXF1aXJlc0Ryb3BPbkVsZW1lbnQgPSBvcHRpb25zLnJlcXVpcmVzRHJvcE9uRWxlbWVudDtcblxuICAgIC8vIGNyZWF0ZSBhIGRuZCBjbGllbnRcblxuICAgIHZhciBjbGllbnQgPSBjcmVhdGVEcmFnTkRyb3BDbGllbnQoXG4gICAgICBzY29wZSxcbiAgICAgIGNhdGNoZXNEcm9wc09uUGFnZSA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IHNjb3BlLFxuICAgICAgcmVxdWlyZXNEcm9wT25FbGVtZW50XG4gICAgKTtcblxuICAgIC8vIGN1cnJlbnQgY2xpZW50IHN0YXRlXG4gICAgdmFyIGxhc3RTdGF0ZSA9ICcnO1xuICAgIHZhciBjdXJyZW50U3RhdGUgPSAnJztcblxuICAgIC8vIGRldGVybWluZXMgaWYgYSBmaWxlIG1heSBiZSBkcm9wcGVkXG4gICAgY2xpZW50LmFsbG93ZHJvcCA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAvLyBUT0RPOiBpZiB3ZSBjYW4sIHRocm93IGVycm9yIHRvIGluZGljYXRlIHRoZSBpdGVtcyBjYW5ub3QgYnkgZHJvcHBlZFxuXG4gICAgICByZXR1cm4gdmFsaWRhdGVJdGVtcyhpdGVtcyk7XG4gICAgfTtcblxuICAgIGNsaWVudC5vbmRyb3AgPSBmdW5jdGlvbihwb3NpdGlvbiwgaXRlbXMpIHtcbiAgICAgIGlmICghdmFsaWRhdGVJdGVtcyhpdGVtcykpIHtcbiAgICAgICAgYXBpLm9uZHJhZ2VuZChwb3NpdGlvbik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY3VycmVudFN0YXRlID0gJ2RyYWctZHJvcCc7XG5cbiAgICAgIGFwaS5vbmxvYWQoaXRlbXMsIHBvc2l0aW9uKTtcbiAgICB9O1xuXG4gICAgY2xpZW50Lm9uZHJhZyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICBhcGkub25kcmFnKHBvc2l0aW9uKTtcbiAgICB9O1xuXG4gICAgY2xpZW50Lm9uZW50ZXIgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgY3VycmVudFN0YXRlID0gJ2RyYWctb3Zlcic7XG5cbiAgICAgIGFwaS5vbmRyYWdzdGFydChwb3NpdGlvbik7XG4gICAgfTtcblxuICAgIGNsaWVudC5vbmV4aXQgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgY3VycmVudFN0YXRlID0gJ2RyYWctZXhpdCc7XG5cbiAgICAgIGFwaS5vbmRyYWdlbmQocG9zaXRpb24pO1xuICAgIH07XG5cbiAgICB2YXIgYXBpID0ge1xuICAgICAgdXBkYXRlSG9wcGVyU3RhdGU6IGZ1bmN0aW9uIHVwZGF0ZUhvcHBlclN0YXRlKCkge1xuICAgICAgICBpZiAobGFzdFN0YXRlICE9PSBjdXJyZW50U3RhdGUpIHtcbiAgICAgICAgICBzY29wZS5kYXRhc2V0LmhvcHBlclN0YXRlID0gY3VycmVudFN0YXRlO1xuICAgICAgICAgIGxhc3RTdGF0ZSA9IGN1cnJlbnRTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9ubG9hZDogZnVuY3Rpb24gb25sb2FkKCkge30sXG4gICAgICBvbmRyYWdzdGFydDogZnVuY3Rpb24gb25kcmFnc3RhcnQoKSB7fSxcbiAgICAgIG9uZHJhZzogZnVuY3Rpb24gb25kcmFnKCkge30sXG4gICAgICBvbmRyYWdlbmQ6IGZ1bmN0aW9uIG9uZHJhZ2VuZCgpIHt9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgLy8gZGVzdHJveSBjbGllbnRcbiAgICAgICAgY2xpZW50LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGFwaTtcbiAgfTtcblxuICB2YXIgbGlzdGVuaW5nID0gZmFsc2U7XG4gIHZhciBsaXN0ZW5lcnMkMSA9IFtdO1xuXG4gIHZhciBoYW5kbGVQYXN0ZSA9IGZ1bmN0aW9uIGhhbmRsZVBhc3RlKGUpIHtcbiAgICByZXF1ZXN0RGF0YVRyYW5zZmVySXRlbXMoZS5jbGlwYm9hcmREYXRhKS50aGVuKGZ1bmN0aW9uKGZpbGVzKSB7XG4gICAgICAvLyBubyBmaWxlcyByZWNlaXZlZFxuICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBub3RpZnkgbGlzdGVuZXJzIG9mIHJlY2VpdmVkIGZpbGVzXG4gICAgICBsaXN0ZW5lcnMkMS5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcihmaWxlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgbGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuKGNiKSB7XG4gICAgLy8gY2FuJ3QgYWRkIHR3aWNlXG4gICAgaWYgKGxpc3RlbmVycyQxLmluY2x1ZGVzKGNiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFkZCBpbml0aWFsIGxpc3RlbmVyXG4gICAgbGlzdGVuZXJzJDEucHVzaChjYik7XG5cbiAgICAvLyBzZXR1cCBwYXN0ZSBsaXN0ZW5lciBmb3IgZW50aXJlIHBhZ2VcbiAgICBpZiAobGlzdGVuaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGlzdGVuaW5nID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIGhhbmRsZVBhc3RlKTtcbiAgfTtcblxuICB2YXIgdW5saXN0ZW4gPSBmdW5jdGlvbiB1bmxpc3RlbihsaXN0ZW5lcikge1xuICAgIGFycmF5UmVtb3ZlKGxpc3RlbmVycyQxLCBsaXN0ZW5lcnMkMS5pbmRleE9mKGxpc3RlbmVyKSk7XG5cbiAgICAvLyBjbGVhbiB1cFxuICAgIGlmIChsaXN0ZW5lcnMkMS5sZW5ndGggPT09IDApIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgaGFuZGxlUGFzdGUpO1xuICAgICAgbGlzdGVuaW5nID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjcmVhdGVQYXN0ZXIgPSBmdW5jdGlvbiBjcmVhdGVQYXN0ZXIoKSB7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24gY2IoZmlsZXMpIHtcbiAgICAgIGFwaS5vbmxvYWQoZmlsZXMpO1xuICAgIH07XG5cbiAgICB2YXIgYXBpID0ge1xuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdW5saXN0ZW4oY2IpO1xuICAgICAgfSxcbiAgICAgIG9ubG9hZDogZnVuY3Rpb24gb25sb2FkKCkge31cbiAgICB9O1xuXG4gICAgbGlzdGVuKGNiKTtcblxuICAgIHJldHVybiBhcGk7XG4gIH07XG5cbiAgdmFyIGRlYm91bmNlID0gZnVuY3Rpb24gZGVib3VuY2UoZnVuYykge1xuICAgIHZhciBpbnRlcnZhbCA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE2O1xuICAgIHZhciBpbW1pZGlhdGVPbmx5ID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcblxuICAgIHZhciBsYXN0ID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgdGltZW91dCA9IG51bGw7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7XG4gICAgICAgIF9rZXkgPCBfbGVuO1xuICAgICAgICBfa2V5KytcbiAgICAgICkge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG5cbiAgICAgIHZhciBkaXN0ID0gRGF0ZS5ub3coKSAtIGxhc3Q7XG5cbiAgICAgIHZhciBmbiA9IGZ1bmN0aW9uIGZuKCkge1xuICAgICAgICBsYXN0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgfTtcblxuICAgICAgaWYgKGRpc3QgPCBpbnRlcnZhbCkge1xuICAgICAgICAvLyB3ZSBuZWVkIHRvIGRlbGF5IGJ5IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gaW50ZXJ2YWwgYW5kIGRpc3RcbiAgICAgICAgLy8gZm9yIGV4YW1wbGU6IGlmIGRpc3RhbmNlIGlzIDEwIG1zIGFuZCBpbnRlcnZhbCBpcyAxNiBtcyxcbiAgICAgICAgLy8gd2UgbmVlZCB0byB3YWl0IGFuIGFkZGl0aW9uYWwgNm1zIGJlZm9yZSBjYWxsaW5nIHRoZSBmdW5jdGlvbilcbiAgICAgICAgaWYgKCFpbW1pZGlhdGVPbmx5KSB7XG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZm4sIGludGVydmFsIC0gZGlzdCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdvIVxuICAgICAgICBmbigpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGZpbGUgdmlld1xuICAgKi9cbiAgdmFyIGNyZWF0ZSQxNCA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG5cbiAgICByb290LmVsZW1lbnQuaWQgPSAnZmlsZXBvbmQtLWFzc2lzdGFudC0nICsgcHJvcHMuaWQ7XG4gICAgYXR0cihyb290LmVsZW1lbnQsICdyb2xlJywgJ3N0YXR1cycpO1xuICAgIGF0dHIocm9vdC5lbGVtZW50LCAnYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xuICAgIGF0dHIocm9vdC5lbGVtZW50LCAnYXJpYS1yZWxldmFudCcsICdhZGRpdGlvbnMnKTtcbiAgfTtcblxuICB2YXIgYWRkRmlsZXNOb3RpZmljYXRpb25UaW1lb3V0ID0gbnVsbDtcbiAgdmFyIG5vdGlmaWNhdGlvbkNsZWFyVGltZW91dCA9IG51bGw7XG5cbiAgdmFyIGZpbGVuYW1lcyA9IFtdO1xuXG4gIHZhciBhc3Npc3QgPSBmdW5jdGlvbiBhc3Npc3Qocm9vdCwgbWVzc2FnZSkge1xuICAgIHJvb3QuZWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gIH07XG5cbiAgdmFyIGNsZWFyJDEgPSBmdW5jdGlvbiBjbGVhcihyb290KSB7XG4gICAgcm9vdC5lbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gIH07XG5cbiAgdmFyIGxpc3RNb2RpZmllZCA9IGZ1bmN0aW9uIGxpc3RNb2RpZmllZChyb290LCBmaWxlbmFtZSwgbGFiZWwpIHtcbiAgICB2YXIgdG90YWwgPSByb290LnF1ZXJ5KCdHRVRfVE9UQUxfSVRFTVMnKTtcbiAgICBhc3Npc3QoXG4gICAgICByb290LFxuICAgICAgbGFiZWwgK1xuICAgICAgICAnICcgK1xuICAgICAgICBmaWxlbmFtZSArXG4gICAgICAgICcsICcgK1xuICAgICAgICB0b3RhbCArXG4gICAgICAgICcgJyArXG4gICAgICAgICh0b3RhbCA9PT0gMVxuICAgICAgICAgID8gcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfQ09VTlRfU0lOR1VMQVInKVxuICAgICAgICAgIDogcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfQ09VTlRfUExVUkFMJykpXG4gICAgKTtcblxuICAgIC8vIGNsZWFyIGdyb3VwIGFmdGVyIHNldCBhbW91bnQgb2YgdGltZSBzbyB0aGUgc3RhdHVzIGlzIG5vdCByZWFkIHR3aWNlXG4gICAgY2xlYXJUaW1lb3V0KG5vdGlmaWNhdGlvbkNsZWFyVGltZW91dCk7XG4gICAgbm90aWZpY2F0aW9uQ2xlYXJUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGNsZWFyJDEocm9vdCk7XG4gICAgfSwgMTUwMCk7XG4gIH07XG5cbiAgdmFyIGlzVXNpbmdGaWxlUG9uZCA9IGZ1bmN0aW9uIGlzVXNpbmdGaWxlUG9uZChyb290KSB7XG4gICAgcmV0dXJuIHJvb3QuZWxlbWVudC5wYXJlbnROb2RlLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICB9O1xuXG4gIHZhciBpdGVtQWRkZWQgPSBmdW5jdGlvbiBpdGVtQWRkZWQoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmMi5hY3Rpb247XG5cbiAgICBpZiAoIWlzVXNpbmdGaWxlUG9uZChyb290KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJvb3QuZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIHZhciBpdGVtID0gcm9vdC5xdWVyeSgnR0VUX0lURU0nLCBhY3Rpb24uaWQpO1xuICAgIGZpbGVuYW1lcy5wdXNoKGl0ZW0uZmlsZW5hbWUpO1xuXG4gICAgY2xlYXJUaW1lb3V0KGFkZEZpbGVzTm90aWZpY2F0aW9uVGltZW91dCk7XG4gICAgYWRkRmlsZXNOb3RpZmljYXRpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGxpc3RNb2RpZmllZChcbiAgICAgICAgcm9vdCxcbiAgICAgICAgZmlsZW5hbWVzLmpvaW4oJywgJyksXG4gICAgICAgIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX0FEREVEJylcbiAgICAgICk7XG4gICAgICBmaWxlbmFtZXMubGVuZ3RoID0gMDtcbiAgICB9LCA3NTApO1xuICB9O1xuXG4gIHZhciBpdGVtUmVtb3ZlZCA9IGZ1bmN0aW9uIGl0ZW1SZW1vdmVkKF9yZWYzKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMy5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjMuYWN0aW9uO1xuXG4gICAgaWYgKCFpc1VzaW5nRmlsZVBvbmQocm9vdCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXRlbSA9IGFjdGlvbi5pdGVtO1xuICAgIGxpc3RNb2RpZmllZChyb290LCBpdGVtLmZpbGVuYW1lLCByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9SRU1PVkVEJykpO1xuICB9O1xuXG4gIHZhciBpdGVtUHJvY2Vzc2VkID0gZnVuY3Rpb24gaXRlbVByb2Nlc3NlZChfcmVmNCkge1xuICAgIHZhciByb290ID0gX3JlZjQucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWY0LmFjdGlvbjtcblxuICAgIC8vIHdpbGwgYWxzbyBub3RpZnkgdGhlIHVzZXIgd2hlbiBGaWxlUG9uZCBpcyBub3QgYmVpbmcgdXNlZCwgYXMgdGhlIHVzZXIgbWlnaHQgYmUgb2NjdXBpZWQgd2l0aCBvdGhlciBhY3Rpdml0aWVzIHdoaWxlIHVwbG9hZGluZyBhIGZpbGVcblxuICAgIHZhciBpdGVtID0gcm9vdC5xdWVyeSgnR0VUX0lURU0nLCBhY3Rpb24uaWQpO1xuICAgIHZhciBmaWxlbmFtZSA9IGl0ZW0uZmlsZW5hbWU7XG4gICAgdmFyIGxhYmVsID0gcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfUFJPQ0VTU0lOR19DT01QTEVURScpO1xuXG4gICAgYXNzaXN0KHJvb3QsIGZpbGVuYW1lICsgJyAnICsgbGFiZWwpO1xuICB9O1xuXG4gIHZhciBpdGVtUHJvY2Vzc2VkVW5kbyA9IGZ1bmN0aW9uIGl0ZW1Qcm9jZXNzZWRVbmRvKF9yZWY1KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNS5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjUuYWN0aW9uO1xuXG4gICAgdmFyIGl0ZW0gPSByb290LnF1ZXJ5KCdHRVRfSVRFTScsIGFjdGlvbi5pZCk7XG4gICAgdmFyIGZpbGVuYW1lID0gaXRlbS5maWxlbmFtZTtcbiAgICB2YXIgbGFiZWwgPSByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9QUk9DRVNTSU5HX0FCT1JURUQnKTtcblxuICAgIGFzc2lzdChyb290LCBmaWxlbmFtZSArICcgJyArIGxhYmVsKTtcbiAgfTtcblxuICB2YXIgaXRlbUVycm9yID0gZnVuY3Rpb24gaXRlbUVycm9yKF9yZWY2KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNi5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjYuYWN0aW9uO1xuXG4gICAgdmFyIGl0ZW0gPSByb290LnF1ZXJ5KCdHRVRfSVRFTScsIGFjdGlvbi5pZCk7XG4gICAgdmFyIGZpbGVuYW1lID0gaXRlbS5maWxlbmFtZTtcblxuICAgIC8vIHdpbGwgYWxzbyBub3RpZnkgdGhlIHVzZXIgd2hlbiBGaWxlUG9uZCBpcyBub3QgYmVpbmcgdXNlZCwgYXMgdGhlIHVzZXIgbWlnaHQgYmUgb2NjdXBpZWQgd2l0aCBvdGhlciBhY3Rpdml0aWVzIHdoaWxlIHVwbG9hZGluZyBhIGZpbGVcblxuICAgIGFzc2lzdChyb290LCBhY3Rpb24uc3RhdHVzLm1haW4gKyAnICcgKyBmaWxlbmFtZSArICcgJyArIGFjdGlvbi5zdGF0dXMuc3ViKTtcbiAgfTtcblxuICB2YXIgYXNzaXN0YW50ID0gY3JlYXRlVmlldyh7XG4gICAgY3JlYXRlOiBjcmVhdGUkMTQsXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICB3cml0ZTogY3JlYXRlUm91dGUoe1xuICAgICAgRElEX0xPQURfSVRFTTogaXRlbUFkZGVkLFxuICAgICAgRElEX1JFTU9WRV9JVEVNOiBpdGVtUmVtb3ZlZCxcbiAgICAgIERJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkc6IGl0ZW1Qcm9jZXNzZWQsXG5cbiAgICAgIERJRF9BQk9SVF9JVEVNX1BST0NFU1NJTkc6IGl0ZW1Qcm9jZXNzZWRVbmRvLFxuICAgICAgRElEX1JFVkVSVF9JVEVNX1BST0NFU1NJTkc6IGl0ZW1Qcm9jZXNzZWRVbmRvLFxuXG4gICAgICBESURfVEhST1dfSVRFTV9MT0FEX0VSUk9SOiBpdGVtRXJyb3IsXG4gICAgICBESURfVEhST1dfSVRFTV9JTlZBTElEOiBpdGVtRXJyb3IsXG4gICAgICBESURfVEhST1dfSVRFTV9QUk9DRVNTSU5HX0VSUk9SOiBpdGVtRXJyb3JcbiAgICB9KSxcbiAgICB0YWc6ICdzcGFuJyxcbiAgICBuYW1lOiAnYXNzaXN0YW50J1xuICB9KTtcblxuICB2YXIgY3JlYXRlJDEgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gICAgLy8gQWRkIGlkXG4gICAgdmFyIGlkID0gcm9vdC5xdWVyeSgnR0VUX0lEJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICByb290LmVsZW1lbnQuaWQgPSBpZDtcbiAgICB9XG5cbiAgICAvLyBBZGQgY2xhc3NOYW1lXG4gICAgdmFyIGNsYXNzTmFtZSA9IHJvb3QucXVlcnkoJ0dFVF9DTEFTU19OQU1FJyk7XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRmllbGQgbGFiZWxcbiAgICByb290LnJlZi5sYWJlbCA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcoZHJvcExhYmVsLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgdHJhbnNsYXRlWTogbnVsbCB9KSlcbiAgICApO1xuXG4gICAgLy8gTGlzdCBvZiBpdGVtc1xuICAgIHJvb3QucmVmLmxpc3QgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KGxpc3RTY3JvbGxlciwgeyB0cmFuc2xhdGVZOiBudWxsIH0pXG4gICAgKTtcblxuICAgIC8vIEJhY2tncm91bmQgcGFuZWxcbiAgICByb290LnJlZi5wYW5lbCA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcocGFuZWwsIHsgbmFtZTogJ3BhbmVsLXJvb3QnIH0pXG4gICAgKTtcblxuICAgIC8vIEFzc2lzdGFudCBub3RpZmllcyBhc3Npc3RpdmUgdGVjaCB3aGVuIGNvbnRlbnQgY2hhbmdlc1xuICAgIHJvb3QucmVmLmFzc2lzdGFudCA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcoYXNzaXN0YW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMpKVxuICAgICk7XG5cbiAgICAvLyBNZWFzdXJlICh0ZXN0cyBpZiBmaXhlZCBoZWlnaHQgd2FzIHNldClcbiAgICAvLyBET0NUWVBFIG5lZWRzIHRvIGJlIHNldCBmb3IgdGhpcyB0byB3b3JrXG4gICAgcm9vdC5yZWYubWVhc3VyZSA9IGNyZWF0ZUVsZW1lbnQkMSgnZGl2Jyk7XG4gICAgcm9vdC5yZWYubWVhc3VyZS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgcm9vdC5lbGVtZW50LmFwcGVuZENoaWxkKHJvb3QucmVmLm1lYXN1cmUpO1xuICB9O1xuXG4gIHZhciB3cml0ZSA9IGZ1bmN0aW9uIHdyaXRlKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcyxcbiAgICAgIGFjdGlvbnMgPSBfcmVmMi5hY3Rpb25zO1xuXG4gICAgLy8gcm91dGUgYWN0aW9uc1xuICAgIHJvdXRlKHsgcm9vdDogcm9vdCwgcHJvcHM6IHByb3BzLCBhY3Rpb25zOiBhY3Rpb25zIH0pO1xuXG4gICAgLy8gZ2V0IHF1aWNrIHJlZmVyZW5jZXMgdG8gdmFyaW91cyBoaWdoIGxldmVsIHBhcnRzIG9mIHRoZSB1cGxvYWQgdG9vbFxuICAgIHZhciBfcm9vdCRyZWYgPSByb290LnJlZixcbiAgICAgIGhvcHBlciA9IF9yb290JHJlZi5ob3BwZXIsXG4gICAgICBsYWJlbCA9IF9yb290JHJlZi5sYWJlbCxcbiAgICAgIGxpc3QgPSBfcm9vdCRyZWYubGlzdCxcbiAgICAgIHBhbmVsJCQxID0gX3Jvb3QkcmVmLnBhbmVsO1xuXG4gICAgLy8gYm9vbCB0byBpbmRpY2F0ZSBpZiB3ZSdyZSBmdWxsIG9yIG5vdFxuXG4gICAgdmFyIGlzTXVsdGlJdGVtID0gcm9vdC5xdWVyeSgnR0VUX0FMTE9XX01VTFRJUExFJyk7XG4gICAgdmFyIHRvdGFsSXRlbXMgPSByb290LnF1ZXJ5KCdHRVRfVE9UQUxfSVRFTVMnKTtcbiAgICB2YXIgbWF4SXRlbXMgPSByb290LnF1ZXJ5KCdHRVRfTUFYX0ZJTEVTJyk7XG4gICAgdmFyIGF0TWF4Q2FwYWNpdHkgPSBpc011bHRpSXRlbVxuICAgICAgPyB0b3RhbEl0ZW1zID09PSBtYXhJdGVtc1xuICAgICAgOiB0b3RhbEl0ZW1zID09PSAxO1xuXG4gICAgLy8gdmlld3Mgbm90IHVzZWQgaW4gaGVpZ2h0IGNhbGN1bGF0aW9uXG4gICAgdmFyIGNoaWxkcmVuVXNlZEZvckJvdW5kaW5nQ2FsY3VsYXRpb24gPSBbXS5jb25jYXQoXG4gICAgICB0b0NvbnN1bWFibGVBcnJheShsaXN0LmNoaWxkVmlld3NbMF0uY2hpbGRWaWV3cylcbiAgICApO1xuXG4gICAgLy8gdmlld3MgdXNlZCB0byBjYWxjdWxhdGUgdGhlIHZpc3VhbCBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciAod2hpY2ggaXMgcGFzc2VkIHRvIHBhbmVsKVxuICAgIHZhciBjaGlsZHJlblVzZWRGb3JWaXN1YWxIZWlnaHRDYWxjdWxhdGlvbiA9IFtsaXN0XTtcblxuICAgIC8vIGFjdGlvbiB1c2VkIHRvIGFkZCBpdGVtXG4gICAgdmFyIGFkZEFjdGlvbiA9IGFjdGlvbnMuZmluZChmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgIHJldHVybiBhY3Rpb24udHlwZSA9PT0gJ0RJRF9BRERfSVRFTSc7XG4gICAgfSk7XG5cbiAgICAvLyBpZiBhdCBtYXggY2FwYWNpdHkgaGlkZSB0aGUgbGFiZWxcbiAgICBpZiAoYXRNYXhDYXBhY2l0eSAmJiBhZGRBY3Rpb24pIHtcbiAgICAgIC8vIGdldCBpbnRlcmFjdGlvbiB0eXBlXG4gICAgICB2YXIgaW50ZXJhY3Rpb25NZXRob2QgPSBhZGRBY3Rpb24uZGF0YS5pbnRlcmFjdGlvbk1ldGhvZDtcblxuICAgICAgLy8gaGlkZSBsYWJlbFxuICAgICAgbGFiZWwub3BhY2l0eSA9IDA7XG5cbiAgICAgIC8vIGlmIGlzIG11bHRpLWl0ZW0sIHRoZSBsYWJlbCBpcyBhbHdheXMgbW92ZWQgdXB3YXJkc1xuICAgICAgaWYgKGlzTXVsdGlJdGVtKSB7XG4gICAgICAgIGxhYmVsLnRyYW5zbGF0ZVkgPSAtbGFiZWwucmVjdC5lbGVtZW50LmhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGJhc2VkIG9uIGludGVyYWN0aW9uIG1ldGhvZCB3ZSBtb3ZlIGxhYmVsIGluIGRpZmZlcmVudCBkaXJlY3Rpb25zXG4gICAgICAgIGlmIChpbnRlcmFjdGlvbk1ldGhvZCA9PT0gSW50ZXJhY3Rpb25NZXRob2QuQVBJKSB7XG4gICAgICAgICAgbGFiZWwudHJhbnNsYXRlWCA9IDQwO1xuICAgICAgICB9IGVsc2UgaWYgKGludGVyYWN0aW9uTWV0aG9kID09PSBJbnRlcmFjdGlvbk1ldGhvZC5CUk9XU0UpIHtcbiAgICAgICAgICBsYWJlbC50cmFuc2xhdGVZID0gNDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFiZWwudHJhbnNsYXRlWSA9IC00MDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWF0TWF4Q2FwYWNpdHkpIHtcbiAgICAgIC8vIHJldmVhbCBsYWJlbFxuICAgICAgbGFiZWwub3BhY2l0eSA9IDE7XG4gICAgICBsYWJlbC50cmFuc2xhdGVZID0gcm9vdC5yZWN0LmVsZW1lbnQucGFkZGluZ1RvcDtcbiAgICAgIGxhYmVsLnRyYW5zbGF0ZVggPSAwO1xuXG4gICAgICAvLyB3ZSB1c2UgbGFiZWwgZm9yIGJvdW5kaW5nIGJveFxuICAgICAgY2hpbGRyZW5Vc2VkRm9yVmlzdWFsSGVpZ2h0Q2FsY3VsYXRpb24ucHVzaChsYWJlbCk7XG4gICAgICBjaGlsZHJlblVzZWRGb3JCb3VuZGluZ0NhbGN1bGF0aW9uLnB1c2gobGFiZWwpO1xuICAgIH1cblxuICAgIC8vIHNldHMgY29ycmVjdCBzdGF0ZSB0byBob3BwZXIgc2NvcGVcbiAgICBpZiAoaG9wcGVyKSB7XG4gICAgICBob3BwZXIudXBkYXRlSG9wcGVyU3RhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBuZWVkIGEgbGFiZWwgdG8gZG8gYW55dGhpbmdcbiAgICBpZiAoIWxhYmVsLmNhcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBsaW5rIGxpc3QgdG8gbGFiZWwgYm90dG9tIHBvc2l0aW9uIChpbmNsdWRpbmcgYm90dG9tIG1hcmdpbilcbiAgICBsaXN0LnRyYW5zbGF0ZVkgPSBpc011bHRpSXRlbVxuICAgICAgPyBsYWJlbC5yZWN0Lm91dGVyLmJvdHRvbVxuICAgICAgOiByb290LnJlY3QuZWxlbWVudC5wYWRkaW5nVG9wO1xuXG4gICAgLy8gdXBkYXRlIGJvdW5kaW5nIGJveCBpZiBoYXMgY2hhbmdlZFxuICAgIHZhciBib3hCb3VuZGluZyA9IGNhbGN1bGF0ZVJvb3RCb3VuZGluZ0JveEhlaWdodChyb290LCBwcm9wcyk7XG4gICAgdmFyIGNoaWxkcmVuQm91bmRpbmdIZWlnaHQgPSBjYWxjdWxhdGVDaGlsZHJlbkJvdW5kaW5nQm94SGVpZ2h0KFxuICAgICAgY2hpbGRyZW5Vc2VkRm9yQm91bmRpbmdDYWxjdWxhdGlvblxuICAgICk7XG4gICAgdmFyIHZpc3VhbEhlaWdodCA9IGNhbGN1bGF0ZUNoaWxkcmVuVmlzdWFsSGVpZ2h0KFxuICAgICAgY2hpbGRyZW5Vc2VkRm9yVmlzdWFsSGVpZ2h0Q2FsY3VsYXRpb25cbiAgICApO1xuICAgIHZhciBib3R0b21QYWRkaW5nID0gdG90YWxJdGVtcyA+IDAgPyByb290LnJlY3QuZWxlbWVudC5wYWRkaW5nVG9wICogMC41IDogMDtcblxuICAgIGlmIChib3hCb3VuZGluZy5maXhlZEhlaWdodCkge1xuICAgICAgLy8gZml4ZWQgaGVpZ2h0XG5cbiAgICAgIC8vIGZpeGVkIGhlaWdodCBwYW5lbFxuICAgICAgcGFuZWwkJDEuc2NhbGFibGUgPSBmYWxzZTtcblxuICAgICAgLy8gbGluayBwYW5lbCBoZWlnaHQgdG8gYm94IGJvdW5kaW5nXG4gICAgICBwYW5lbCQkMS5oZWlnaHQgPSBib3hCb3VuZGluZy5maXhlZEhlaWdodCArIHJvb3QucmVjdC5lbGVtZW50LnBhZGRpbmdUb3A7XG5cbiAgICAgIC8vIHNldCBvdmVyZmxvd1xuICAgICAgbGlzdC5vdmVyZmxvdyA9XG4gICAgICAgIGNoaWxkcmVuQm91bmRpbmdIZWlnaHQgPiBwYW5lbCQkMS5oZWlnaHQgJiYgaXNNdWx0aUl0ZW1cbiAgICAgICAgICA/IHBhbmVsJCQxLmhlaWdodFxuICAgICAgICAgIDogbnVsbDtcbiAgICB9IGVsc2UgaWYgKGJveEJvdW5kaW5nLmNhcHBlZEhlaWdodCkge1xuICAgICAgLy8gbWF4LWhlaWdodFxuXG4gICAgICAvLyBub3QgYSBmaXhlZCBoZWlnaHQgcGFuZWxcbiAgICAgIHBhbmVsJCQxLnNjYWxhYmxlID0gdHJ1ZTtcblxuICAgICAgLy8gbGltaXQgY2hpbGRyZW4gYm91bmRpbmcgaGVpZ2h0IHRvIHRoZSBzZXQgY2FwcGVkIGhlaWdodFxuICAgICAgdmFyIGNhcHBlZENoaWxkcmVuQm91bmRpbmdIZWlnaHQgPSBNYXRoLm1pbihcbiAgICAgICAgYm94Qm91bmRpbmcuY2FwcGVkSGVpZ2h0LFxuICAgICAgICBjaGlsZHJlbkJvdW5kaW5nSGVpZ2h0XG4gICAgICApO1xuXG4gICAgICAvLyB1cGRhdGUgcm9vdCBoZWlnaHRcbiAgICAgIHJvb3QuaGVpZ2h0ID0gY2FwcGVkQ2hpbGRyZW5Cb3VuZGluZ0hlaWdodCArIGJvdHRvbVBhZGRpbmc7XG5cbiAgICAgIC8vIHNldCB2aXN1YWwgaGVpZ2h0XG4gICAgICBwYW5lbCQkMS5oZWlnaHQgPSBNYXRoLm1pbihcbiAgICAgICAgYm94Qm91bmRpbmcuY2FwcGVkSGVpZ2h0ICsgcm9vdC5yZWN0LmVsZW1lbnQucGFkZGluZ1RvcCxcbiAgICAgICAgdmlzdWFsSGVpZ2h0ICsgYm90dG9tUGFkZGluZ1xuICAgICAgKTtcblxuICAgICAgLy8gaWYgY2FuIG92ZXJmbG93LCB0ZXN0IGlmIGlzIGN1cnJlbnRseSBvdmVyZmxvd2luZ1xuICAgICAgbGlzdC5vdmVyZmxvdyA9XG4gICAgICAgIGNoaWxkcmVuQm91bmRpbmdIZWlnaHQgPiBwYW5lbCQkMS5oZWlnaHQgJiYgaXNNdWx0aUl0ZW1cbiAgICAgICAgICA/IHBhbmVsJCQxLmhlaWdodFxuICAgICAgICAgIDogbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZmxleGlibGUgaGVpZ2h0XG5cbiAgICAgIC8vIG5vdCBhIGZpeGVkIGhlaWdodCBwYW5lbFxuICAgICAgcGFuZWwkJDEuc2NhbGFibGUgPSB0cnVlO1xuXG4gICAgICAvLyBzZXQgdG8gbmV3IGJvdW5kaW5nXG4gICAgICByb290LmhlaWdodCA9XG4gICAgICAgIGNoaWxkcmVuQm91bmRpbmdIZWlnaHQgKyBib3R0b21QYWRkaW5nICsgcm9vdC5yZWN0LmVsZW1lbnQucGFkZGluZ1RvcDtcblxuICAgICAgLy8gc2V0IGhlaWdodCB0byBuZXcgdmlzdWFsIGhlaWdodFxuICAgICAgcGFuZWwkJDEuaGVpZ2h0ID0gdmlzdWFsSGVpZ2h0ICsgYm90dG9tUGFkZGluZztcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNhbGN1bGF0ZUNoaWxkcmVuVmlzdWFsSGVpZ2h0ID0gZnVuY3Rpb24gY2FsY3VsYXRlQ2hpbGRyZW5WaXN1YWxIZWlnaHQoXG4gICAgY2hpbGRyZW5cbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNoaWxkcmVuXG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSB0b3RhbCBoZWlnaHQgb2NjdXBpZWQgYnkgYWxsIGNoaWxkcmVuXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24obWF4LCBjaGlsZCkge1xuICAgICAgICAgIHZhciBib3R0b20gPSBjaGlsZC5yZWN0Lm91dGVyLmJvdHRvbTtcblxuICAgICAgICAgIGlmIChib3R0b20gPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IGJvdHRvbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbWF4O1xuICAgICAgICB9LCAwKVxuICAgICk7XG4gIH07XG5cbiAgdmFyIGNhbGN1bGF0ZVJvb3RCb3VuZGluZ0JveEhlaWdodCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZVJvb3RCb3VuZGluZ0JveEhlaWdodChcbiAgICByb290LFxuICAgIHByb3BzXG4gICkge1xuICAgIC8vIG9ubHkgY2FsY3VsYXRlIGZpcnN0IHRpbWVcbiAgICBpZiAocHJvcHMuYm94Qm91bmRpbmcpIHtcbiAgICAgIHJldHVybiBwcm9wcy5ib3hCb3VuZGluZztcbiAgICB9XG5cbiAgICB2YXIgaGVpZ2h0ID0gcm9vdC5yZWYubWVhc3VyZUhlaWdodCB8fCBudWxsO1xuICAgIHZhciBjYXBwZWRIZWlnaHQgPSBwYXJzZUludChyb290LnN0eWxlLm1heEhlaWdodCwgMTApIHx8IG51bGw7XG4gICAgdmFyIGZpeGVkSGVpZ2h0ID0gaGVpZ2h0ID09PSAwID8gbnVsbCA6IGhlaWdodDtcblxuICAgIHByb3BzLmJveEJvdW5kaW5nID0ge1xuICAgICAgY2FwcGVkSGVpZ2h0OiBjYXBwZWRIZWlnaHQsXG4gICAgICBmaXhlZEhlaWdodDogZml4ZWRIZWlnaHRcbiAgICB9O1xuXG4gICAgLy8gZGVzdHJveSBtZWFzdXJlIGVsZW1lbnRcbiAgICByb290LmVsZW1lbnQucmVtb3ZlQ2hpbGQocm9vdC5yZWYubWVhc3VyZSk7XG4gICAgcm9vdC5yZWYubWVhc3VyZSA9IG51bGw7XG5cbiAgICAvLyBkb25lIVxuICAgIHJldHVybiBwcm9wcy5ib3hCb3VuZGluZztcbiAgfTtcblxuICB2YXIgY2FsY3VsYXRlQ2hpbGRyZW5Cb3VuZGluZ0JveEhlaWdodCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUNoaWxkcmVuQm91bmRpbmdCb3hIZWlnaHQoXG4gICAgY2hpbGRyZW5cbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNoaWxkcmVuXG5cbiAgICAgICAgLy8gbm8gdXNlIG9mIG91dGVyIGFuZCBpbm5lciBhcyB0aGF0IGluY2x1ZGVzIHRyYW5zbGF0aW9uc1xuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGhlaWdodCwgY2hpbGQpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgaGVpZ2h0ICsgY2hpbGQucmVjdC5pbm5lci5ib3R0b20gKyBjaGlsZC5yZWN0LmVsZW1lbnQubWFyZ2luQm90dG9tXG4gICAgICAgICAgKTtcbiAgICAgICAgfSwgMClcbiAgICApO1xuICB9O1xuXG4gIHZhciB0b2dnbGVBbGxvd0Ryb3AgPSBmdW5jdGlvbiB0b2dnbGVBbGxvd0Ryb3AoX3JlZjMpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYzLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYzLnByb3BzLFxuICAgICAgYWN0aW9uID0gX3JlZjMuYWN0aW9uO1xuXG4gICAgaWYgKGFjdGlvbi52YWx1ZSAmJiAhcm9vdC5yZWYuaG9wcGVyKSB7XG4gICAgICB2YXIgaG9wcGVyID0gY3JlYXRlSG9wcGVyKFxuICAgICAgICByb290LmVsZW1lbnQsXG4gICAgICAgIGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgICAgdmFyIGFsbG93UmVwbGFjZSA9IHJvb3QucXVlcnkoJ0dFVF9BTExPV19SRVBMQUNFJyk7XG4gICAgICAgICAgdmFyIGFsbG93TXVsdGlwbGUgPSByb290LnF1ZXJ5KCdHRVRfQUxMT1dfTVVMVElQTEUnKTtcbiAgICAgICAgICB2YXIgdG90YWxJdGVtcyA9IHJvb3QucXVlcnkoJ0dFVF9UT1RBTF9JVEVNUycpO1xuICAgICAgICAgIHZhciBkcm9wVmFsaWRhdGlvbiA9IHJvb3QucXVlcnkoJ0dFVF9EUk9QX1ZBTElEQVRJT04nKTtcbiAgICAgICAgICB2YXIgbWF4SXRlbXMgPSByb290LnF1ZXJ5KCdHRVRfTUFYX1RPVEFMX0lURU1TJyk7XG5cbiAgICAgICAgICAvLyB0b3RhbCBhbW91bnQgb2YgaXRlbXMgYmVpbmcgZHJhZ2dlZFxuICAgICAgICAgIHZhciB0b3RhbERyYWdJdGVtcyA9IGl0ZW1zLmxlbmd0aDtcblxuICAgICAgICAgIC8vIGlmIGRvZXMgbm90IGFsbG93IG11bHRpcGxlIGl0ZW1zIGFuZCBkcmFnZ2luZyBtb3JlIHRoYW4gb25lIGl0ZW1cbiAgICAgICAgICBpZiAoIWFsbG93TXVsdGlwbGUgJiYgdG90YWxEcmFnSXRlbXMgPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbGltaXQgbWF4IGl0ZW1zIHRvIG9uZSBpZiBub3QgYWxsb3dlZCB0byBkcm9wIG11bHRpcGxlIGl0ZW1zXG4gICAgICAgICAgbWF4SXRlbXMgPSBhbGxvd011bHRpcGxlID8gbWF4SXRlbXMgOiBhbGxvd1JlcGxhY2UgPyBtYXhJdGVtcyA6IDE7XG5cbiAgICAgICAgICAvLyBubyBtb3JlIHJvb20/XG4gICAgICAgICAgdmFyIGhhc01heEl0ZW1zID0gaXNJbnQobWF4SXRlbXMpO1xuICAgICAgICAgIGlmIChoYXNNYXhJdGVtcyAmJiB0b3RhbEl0ZW1zICsgdG90YWxEcmFnSXRlbXMgPiBtYXhJdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGFsbCBpdGVtcyBzaG91bGQgYmUgdmFsaWRhdGVkIGJ5IGFsbCBmaWx0ZXJzIGFzIHZhbGlkXG4gICAgICAgICAgcmV0dXJuIGRyb3BWYWxpZGF0aW9uXG4gICAgICAgICAgICA/IGl0ZW1zLmV2ZXJ5KGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBwbHlGaWx0ZXJzKCdBTExPV19IT1BQRVJfSVRFTScsIGl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiByb290LnF1ZXJ5XG4gICAgICAgICAgICAgICAgfSkuZXZlcnkoZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ID09PSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2F0Y2hlc0Ryb3BzT25QYWdlOiByb290LnF1ZXJ5KCdHRVRfRFJPUF9PTl9QQUdFJyksXG4gICAgICAgICAgcmVxdWlyZXNEcm9wT25FbGVtZW50OiByb290LnF1ZXJ5KCdHRVRfRFJPUF9PTl9FTEVNRU5UJylcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgaG9wcGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGl0ZW1zLCBwb3NpdGlvbikge1xuICAgICAgICB2YXIgaXRlbUxpc3QgPSByb290LnJlZi5saXN0LmNoaWxkVmlld3NbMF07XG4gICAgICAgIHZhciBpbmRleCA9IGdldEl0ZW1JbmRleEJ5UG9zaXRpb24oaXRlbUxpc3QsIHtcbiAgICAgICAgICBsZWZ0OiBwb3NpdGlvbi5zY29wZUxlZnQsXG4gICAgICAgICAgdG9wOlxuICAgICAgICAgICAgcG9zaXRpb24uc2NvcGVUb3AgLVxuICAgICAgICAgICAgcm9vdC5yZWYubGlzdC5yZWN0Lm91dGVyLnRvcCArXG4gICAgICAgICAgICByb290LnJlZi5saXN0LmVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvckVhY2hEZWxheWVkKGl0ZW1zLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgICByb290LmRpc3BhdGNoKCdBRERfSVRFTScsIHtcbiAgICAgICAgICAgIGludGVyYWN0aW9uTWV0aG9kOiBJbnRlcmFjdGlvbk1ldGhvZC5EUk9QLFxuICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm9vdC5kaXNwYXRjaCgnRElEX0RST1AnLCB7IHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcblxuICAgICAgICByb290LmRpc3BhdGNoKCdESURfRU5EX0RSQUcnLCB7IHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcbiAgICAgIH07XG5cbiAgICAgIGhvcHBlci5vbmRyYWdzdGFydCA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHJvb3QuZGlzcGF0Y2goJ0RJRF9TVEFSVF9EUkFHJywgeyBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG4gICAgICB9O1xuXG4gICAgICBob3BwZXIub25kcmFnID0gZGVib3VuY2UoZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgICAgcm9vdC5kaXNwYXRjaCgnRElEX0RSQUcnLCB7IHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBob3BwZXIub25kcmFnZW5kID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgICAgcm9vdC5kaXNwYXRjaCgnRElEX0VORF9EUkFHJywgeyBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG4gICAgICB9O1xuXG4gICAgICByb290LnJlZi5ob3BwZXIgPSBob3BwZXI7XG5cbiAgICAgIHJvb3QucmVmLmRyaXAgPSByb290LmFwcGVuZENoaWxkVmlldyhyb290LmNyZWF0ZUNoaWxkVmlldyhkcmlwKSk7XG4gICAgfSBlbHNlIGlmICghYWN0aW9uLnZhbHVlICYmIHJvb3QucmVmLmhvcHBlcikge1xuICAgICAgcm9vdC5yZWYuaG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIHJvb3QucmVmLmhvcHBlciA9IG51bGw7XG4gICAgICByb290LnJlbW92ZUNoaWxkVmlldyhyb290LnJlZi5kcmlwKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGJyb3dzZSBmdW5jdGlvbmFsaXR5XG4gICAqL1xuICB2YXIgdG9nZ2xlQWxsb3dCcm93c2UgPSBmdW5jdGlvbiB0b2dnbGVBbGxvd0Jyb3dzZShfcmVmNCkge1xuICAgIHZhciByb290ID0gX3JlZjQucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZjQucHJvcHMsXG4gICAgICBhY3Rpb24gPSBfcmVmNC5hY3Rpb247XG5cbiAgICBpZiAoYWN0aW9uLnZhbHVlKSB7XG4gICAgICByb290LnJlZi5icm93c2VyID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KFxuICAgICAgICAgIGJyb3dzZXIsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgICAgICBvbmxvYWQ6IGZ1bmN0aW9uIG9ubG9hZChpdGVtcykge1xuICAgICAgICAgICAgICBmb3JFYWNoRGVsYXllZChpdGVtcywgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5kaXNwYXRjaCgnQUREX0lURU0nLCB7XG4gICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbk1ldGhvZDogSW50ZXJhY3Rpb25NZXRob2QuQlJPV1NFLFxuICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICAgICAgICBpbmRleDogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICAwXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAocm9vdC5yZWYuYnJvd3Nlcikge1xuICAgICAgcm9vdC5yZW1vdmVDaGlsZFZpZXcocm9vdC5yZWYuYnJvd3Nlcik7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBwYXN0ZSBmdW5jdGlvbmFsaXR5XG4gICAqL1xuICB2YXIgdG9nZ2xlQWxsb3dQYXN0ZSA9IGZ1bmN0aW9uIHRvZ2dsZUFsbG93UGFzdGUoX3JlZjUpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY1LnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmNS5hY3Rpb247XG5cbiAgICBpZiAoYWN0aW9uLnZhbHVlKSB7XG4gICAgICByb290LnJlZi5wYXN0ZXIgPSBjcmVhdGVQYXN0ZXIoKTtcbiAgICAgIHJvb3QucmVmLnBhc3Rlci5vbmxvYWQgPSBmdW5jdGlvbihpdGVtcykge1xuICAgICAgICBmb3JFYWNoRGVsYXllZChpdGVtcywgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgICAgcm9vdC5kaXNwYXRjaCgnQUREX0lURU0nLCB7XG4gICAgICAgICAgICBpbnRlcmFjdGlvbk1ldGhvZDogSW50ZXJhY3Rpb25NZXRob2QuUEFTVEUsXG4gICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgIGluZGV4OiAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHJvb3QucmVmLnBhc3Rlcikge1xuICAgICAgcm9vdC5yZWYucGFzdGVyLmRlc3Ryb3koKTtcbiAgICAgIHJvb3QucmVmLnBhc3RlciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSb3V0ZSBhY3Rpb25zXG4gICAqL1xuICB2YXIgcm91dGUgPSBjcmVhdGVSb3V0ZSh7XG4gICAgRElEX1NFVF9BTExPV19CUk9XU0U6IHRvZ2dsZUFsbG93QnJvd3NlLFxuICAgIERJRF9TRVRfQUxMT1dfRFJPUDogdG9nZ2xlQWxsb3dEcm9wLFxuICAgIERJRF9TRVRfQUxMT1dfUEFTVEU6IHRvZ2dsZUFsbG93UGFzdGVcbiAgfSk7XG5cbiAgdmFyIHJvb3QgPSBjcmVhdGVWaWV3KHtcbiAgICBuYW1lOiAncm9vdCcsXG4gICAgcmVhZDogZnVuY3Rpb24gcmVhZChfcmVmNikge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmNi5yb290O1xuXG4gICAgICBpZiAocm9vdC5yZWYubWVhc3VyZSkge1xuICAgICAgICByb290LnJlZi5tZWFzdXJlSGVpZ2h0ID0gcm9vdC5yZWYubWVhc3VyZS5vZmZzZXRIZWlnaHQ7XG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGU6IGNyZWF0ZSQxLFxuICAgIHdyaXRlOiB3cml0ZSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KF9yZWY3KSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWY3LnJvb3Q7XG5cbiAgICAgIGlmIChyb290LnJlZi5wYXN0ZXIpIHtcbiAgICAgICAgcm9vdC5yZWYucGFzdGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIGlmIChyb290LnJlZi5ob3BwZXIpIHtcbiAgICAgICAgcm9vdC5yZWYuaG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1peGluczoge1xuICAgICAgc3R5bGVzOiBbJ2hlaWdodCddXG4gICAgfVxuICB9KTtcblxuICAvLyBkZWZhdWx0c1xuICAvLyB2aWV3XG4gIC8vIGNyZWF0ZXMgdGhlIGFwcFxuICB2YXIgY3JlYXRlQXBwJDEgPSBmdW5jdGlvbiBjcmVhdGVBcHAoKSB7XG4gICAgdmFyIGluaXRpYWxPcHRpb25zID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAvLyBsZXQgZWxlbWVudFxuICAgIHZhciBvcmlnaW5hbEVsZW1lbnQgPSBudWxsO1xuXG4gICAgLy8gZ2V0IGRlZmF1bHQgb3B0aW9uc1xuICAgIHZhciBkZWZhdWx0T3B0aW9ucyQkMSA9IGdldE9wdGlvbnMkMSgpO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBkYXRhIHN0b3JlLCB0aGlzIHdpbGwgY29udGFpbiBhbGwgb3VyIGFwcCBpbmZvXG4gICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgICAvLyBpbml0aWFsIHN0YXRlIChzaG91bGQgYmUgc2VyaWFsaXphYmxlKVxuICAgICAgY3JlYXRlSW5pdGlhbFN0YXRlKGRlZmF1bHRPcHRpb25zJCQxKSxcblxuICAgICAgLy8gcXVlcmllc1xuICAgICAgW3F1ZXJpZXMsIGNyZWF0ZU9wdGlvblF1ZXJpZXMoZGVmYXVsdE9wdGlvbnMkJDEpXSxcblxuICAgICAgLy8gYWN0aW9uIGhhbmRsZXJzXG4gICAgICBbYWN0aW9ucywgY3JlYXRlT3B0aW9uQWN0aW9ucyhkZWZhdWx0T3B0aW9ucyQkMSldXG4gICAgKTtcblxuICAgIC8vIHNldCBpbml0aWFsIG9wdGlvbnNcbiAgICBzdG9yZS5kaXNwYXRjaCgnU0VUX09QVElPTlMnLCB7IG9wdGlvbnM6IGluaXRpYWxPcHRpb25zIH0pO1xuXG4gICAgLy8gcmVuZGVyIGluaXRpYWwgdmlld1xuICAgIHZhciB2aWV3ID0gcm9vdChzdG9yZSwgeyBpZDogZ2V0VW5pcXVlSWQoKSB9KTtcblxuICAgIC8vXG4gICAgLy8gUFJJVkFURSBBUEkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgdmFyIHJlc3RpbmcgPSBmYWxzZTtcbiAgICB2YXIgaGlkZGVuID0gZmFsc2U7XG4gICAgdmFyIHJlYWRXcml0ZUFwaSA9IHtcbiAgICAgIC8vIG5lY2Vzc2FyeSBmb3IgdXBkYXRlIGxvb3BcblxuICAgICAgLyoqXG4gICAgICAgKiBSZWFkcyBmcm9tIGRvbSAobmV2ZXIgY2FsbCBtYW51YWxseSlcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF9yZWFkOiBmdW5jdGlvbiBfcmVhZCgpIHtcbiAgICAgICAgLy8gaWYgcmVzdGluZywgbm8gbmVlZCB0byByZWFkIGFzIG51bWJlcnMgd2lsbCBzdGlsbCBhbGwgYmUgY29ycmVjdFxuICAgICAgICBpZiAocmVzdGluZykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlYWQgdmlldyBkYXRhXG4gICAgICAgIHZpZXcuX3JlYWQoKTtcblxuICAgICAgICAvLyBpZiByb290IGlzIGhpZGRlblxuICAgICAgICBoaWRkZW4gPSB2aWV3LnJlY3QuZWxlbWVudC5oaWRkZW47XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdyaXRlcyB0byBkb20gKG5ldmVyIGNhbGwgbWFudWFsbHkpXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfd3JpdGU6IGZ1bmN0aW9uIF93cml0ZSh0cykge1xuICAgICAgICAvLyBkb24ndCBkbyBhbnl0aGluZyB3aGlsZSBoaWRkZW5cbiAgICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCBhbGwgYWN0aW9ucyBmcm9tIHN0b3JlXG4gICAgICAgIHZhciBhY3Rpb25zJCQxID0gc3RvcmVcbiAgICAgICAgICAucHJvY2Vzc0FjdGlvblF1ZXVlKClcblxuICAgICAgICAgIC8vIGZpbHRlciBvdXQgc2V0IGFjdGlvbnMgKHdpbGwgdHJpZ2dlciBESURfU0VUKVxuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gIS9eU0VUXy8udGVzdChhY3Rpb24udHlwZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaWYgd2FzIGlkbGluZyBhbmQgbm8gYWN0aW9ucyBzdG9wIGhlcmVcbiAgICAgICAgaWYgKHJlc3RpbmcgJiYgIWFjdGlvbnMkJDEubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc29tZSBhY3Rpb25zIG1pZ2h0IHRyaWdnZXIgZXZlbnRzXG4gICAgICAgIHJvdXRlQWN0aW9uc1RvRXZlbnRzKGFjdGlvbnMkJDEpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgdmlld1xuICAgICAgICByZXN0aW5nID0gdmlldy5fd3JpdGUodHMsIGFjdGlvbnMkJDEpO1xuXG4gICAgICAgIC8vIG5vdyBpZGxpbmdcbiAgICAgICAgaWYgKHJlc3RpbmcpIHtcbiAgICAgICAgICBzdG9yZS5wcm9jZXNzRGlzcGF0Y2hRdWV1ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vXG4gICAgLy8gRVhQT1NFIEVWRU5UUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICB2YXIgY3JlYXRlRXZlbnQgPSBmdW5jdGlvbiBjcmVhdGVFdmVudChuYW1lKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAvLyBjcmVhdGUgZGVmYXVsdCBldmVudFxuICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgdHlwZTogbmFtZVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIG5vIGRhdGEgdG8gYWRkXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvcHkgcmVsZXZhbnQgcHJvcHNcbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ2Vycm9yJykpIHtcbiAgICAgICAgICBldmVudC5lcnJvciA9IGRhdGEuZXJyb3IgPyBfZXh0ZW5kcyh7fSwgZGF0YS5lcnJvcikgOiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgZXZlbnQuc3RhdHVzID0gX2V4dGVuZHMoe30sIGRhdGEuc3RhdHVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9ubHkgc291cmNlIGlzIGF2YWlsYWJsZSwgZWxzZSBhZGQgaXRlbSBpZiBwb3NzaWJsZVxuICAgICAgICBpZiAoZGF0YS5zb3VyY2UpIHtcbiAgICAgICAgICBldmVudC5maWxlID0gZGF0YS5zb3VyY2U7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5pdGVtIHx8IGRhdGEuaWQpIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IGRhdGEuaXRlbSA/IGRhdGEuaXRlbSA6IHN0b3JlLnF1ZXJ5KCdHRVRfSVRFTScsIGRhdGEuaWQpO1xuICAgICAgICAgIGV2ZW50LmZpbGUgPSBpdGVtID8gY3JlYXRlSXRlbUFQSShpdGVtKSA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgcHJvZ3Jlc3MgZXZlbnQgYWRkIHRoZSBwcm9ncmVzcyBhbW91bnRcbiAgICAgICAgaWYgKC9wcm9ncmVzcy8udGVzdChuYW1lKSkge1xuICAgICAgICAgIGV2ZW50LnByb2dyZXNzID0gZGF0YS5wcm9ncmVzcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIHZhciBldmVudFJvdXRlcyA9IHtcbiAgICAgIERJRF9ERVNUUk9ZOiBjcmVhdGVFdmVudCgnZGVzdHJveScpLFxuXG4gICAgICBESURfSU5JVDogY3JlYXRlRXZlbnQoJ2luaXQnKSxcblxuICAgICAgRElEX1RIUk9XX01BWF9GSUxFUzogY3JlYXRlRXZlbnQoJ3dhcm5pbmcnKSxcblxuICAgICAgRElEX1NUQVJUX0lURU1fTE9BRDogY3JlYXRlRXZlbnQoJ2FkZGZpbGVzdGFydCcpLFxuICAgICAgRElEX1VQREFURV9JVEVNX0xPQURfUFJPR1JFU1M6IGNyZWF0ZUV2ZW50KCdhZGRmaWxlcHJvZ3Jlc3MnKSxcbiAgICAgIERJRF9MT0FEX0lURU06IGNyZWF0ZUV2ZW50KCdhZGRmaWxlJyksXG5cbiAgICAgIERJRF9USFJPV19JVEVNX0lOVkFMSUQ6IFtjcmVhdGVFdmVudCgnZXJyb3InKSwgY3JlYXRlRXZlbnQoJ2FkZGZpbGUnKV0sXG5cbiAgICAgIERJRF9USFJPV19JVEVNX0xPQURfRVJST1I6IFtjcmVhdGVFdmVudCgnZXJyb3InKSwgY3JlYXRlRXZlbnQoJ2FkZGZpbGUnKV0sXG5cbiAgICAgIERJRF9TVEFSVF9JVEVNX1BST0NFU1NJTkc6IGNyZWF0ZUV2ZW50KCdwcm9jZXNzZmlsZXN0YXJ0JyksXG4gICAgICBESURfVVBEQVRFX0lURU1fUFJPQ0VTU19QUk9HUkVTUzogY3JlYXRlRXZlbnQoJ3Byb2Nlc3NmaWxlcHJvZ3Jlc3MnKSxcbiAgICAgIERJRF9BQk9SVF9JVEVNX1BST0NFU1NJTkc6IGNyZWF0ZUV2ZW50KCdwcm9jZXNzZmlsZWFib3J0JyksXG4gICAgICBESURfQ09NUExFVEVfSVRFTV9QUk9DRVNTSU5HOiBjcmVhdGVFdmVudCgncHJvY2Vzc2ZpbGUnKSxcbiAgICAgIERJRF9SRVZFUlRfSVRFTV9QUk9DRVNTSU5HOiBjcmVhdGVFdmVudCgncHJvY2Vzc2ZpbGVyZXZlcnQnKSxcblxuICAgICAgRElEX1RIUk9XX0lURU1fUFJPQ0VTU0lOR19FUlJPUjogW1xuICAgICAgICBjcmVhdGVFdmVudCgnZXJyb3InKSxcbiAgICAgICAgY3JlYXRlRXZlbnQoJ3Byb2Nlc3NmaWxlJylcbiAgICAgIF0sXG5cbiAgICAgIFNQTElDRV9JVEVNOiBjcmVhdGVFdmVudCgncmVtb3ZlZmlsZScpXG4gICAgfTtcblxuICAgIHZhciBleHBvc2VFdmVudCA9IGZ1bmN0aW9uIGV4cG9zZUV2ZW50KGV2ZW50KSB7XG4gICAgICAvLyBjcmVhdGUgZXZlbnQgb2JqZWN0IHRvIGJlIGRpc3BhdGNoZWRcbiAgICAgIHZhciBkZXRhaWwgPSBfZXh0ZW5kcyh7IHBvbmQ6IGV4cG9ydHMgfSwgZXZlbnQpO1xuICAgICAgZGVsZXRlIGRldGFpbC50eXBlO1xuICAgICAgdmlldy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnRmlsZVBvbmQ6JyArIGV2ZW50LnR5cGUsIHtcbiAgICAgICAgICAvLyBldmVudCBpbmZvXG4gICAgICAgICAgZGV0YWlsOiBkZXRhaWwsXG5cbiAgICAgICAgICAvLyBldmVudCBiZWhhdmlvdXJcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgY29tcG9zZWQ6IHRydWUgLy8gdHJpZ2dlcnMgbGlzdGVuZXJzIG91dHNpZGUgb2Ygc2hhZG93IHJvb3RcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIC8vIGV2ZW50IG9iamVjdCB0byBwYXJhbXMgdXNlZCBmb3IgYG9uKClgIGV2ZW50IGhhbmRsZXJzIGFuZCBjYWxsYmFja3MgYG9uaW5pdCgpYFxuICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuXG4gICAgICAvLyBpZiBpcyBwb3NzaWJsZSBlcnJvciBldmVudCwgbWFrZSBpdCB0aGUgZmlyc3QgcGFyYW1cbiAgICAgIGlmIChldmVudC5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKSkge1xuICAgICAgICBwYXJhbXMucHVzaChldmVudC5lcnJvcik7XG4gICAgICB9XG4gICAgICAvLyBmaWxlIGlzIGFsd2F5cyBzZWN0aW9uXG4gICAgICBpZiAoZXZlbnQuaGFzT3duUHJvcGVydHkoJ2ZpbGUnKSkge1xuICAgICAgICBwYXJhbXMucHVzaChldmVudC5maWxlKTtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwZW5kIG90aGVycCBwcm9wc1xuICAgICAgdmFyIGZpbHRlcmVkID0gWyd0eXBlJywgJ2Vycm9yJywgJ2ZpbGUnXTtcbiAgICAgIE9iamVjdC5rZXlzKGV2ZW50KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgIHJldHVybiAhZmlsdGVyZWQuaW5jbHVkZXMoa2V5KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmFtcy5wdXNoKGV2ZW50W2tleV0pO1xuICAgICAgICB9KTtcblxuICAgICAgLy8gb24odHlwZSwgKCkgPT4geyB9KVxuICAgICAgZXhwb3J0cy5maXJlLmFwcGx5KGV4cG9ydHMsIFtldmVudC50eXBlXS5jb25jYXQocGFyYW1zKSk7XG5cbiAgICAgIC8vIG9uaW5pdCA9ICgpID0+IHt9XG4gICAgICB2YXIgaGFuZGxlciA9IHN0b3JlLnF1ZXJ5KCdHRVRfT04nICsgZXZlbnQudHlwZS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodW5kZWZpbmVkLCBwYXJhbXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcm91dGVBY3Rpb25zVG9FdmVudHMgPSBmdW5jdGlvbiByb3V0ZUFjdGlvbnNUb0V2ZW50cyhhY3Rpb25zJCQxKSB7XG4gICAgICBpZiAoIWFjdGlvbnMkJDEubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYWN0aW9ucyQkMS5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICBpZiAoIWV2ZW50Um91dGVzW2FjdGlvbi50eXBlXSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcm91dGVzID0gZXZlbnRSb3V0ZXNbYWN0aW9uLnR5cGVdO1xuICAgICAgICAoQXJyYXkuaXNBcnJheShyb3V0ZXMpID8gcm91dGVzIDogW3JvdXRlc10pLmZvckVhY2goZnVuY3Rpb24ocm91dGUpIHtcbiAgICAgICAgICBleHBvc2VFdmVudChyb3V0ZShhY3Rpb24uZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvL1xuICAgIC8vIFBVQkxJQyBBUEkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgdmFyIHNldE9wdGlvbnMgPSBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaCgnU0VUX09QVElPTlMnLCB7IG9wdGlvbnM6IG9wdGlvbnMgfSk7XG4gICAgfTtcblxuICAgIHZhciBnZXRGaWxlID0gZnVuY3Rpb24gZ2V0RmlsZShxdWVyeSkge1xuICAgICAgcmV0dXJuIHN0b3JlLnF1ZXJ5KCdHRVRfSVRFTScsIHF1ZXJ5KTtcbiAgICB9O1xuXG4gICAgdmFyIGFkZEZpbGUgPSBmdW5jdGlvbiBhZGRGaWxlKHNvdXJjZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPVxuICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaCgnQUREX0lURU0nLCB7XG4gICAgICAgICAgaW50ZXJhY3Rpb25NZXRob2Q6IEludGVyYWN0aW9uTWV0aG9kLkFQSSxcbiAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICBpbmRleDogb3B0aW9ucy5pbmRleCxcbiAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICAgIGZhaWx1cmU6IHJlamVjdFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgcmVtb3ZlRmlsZSA9IGZ1bmN0aW9uIHJlbW92ZUZpbGUocXVlcnkpIHtcbiAgICAgIC8vIHJlcXVlc3QgaXRlbSByZW1vdmFsXG4gICAgICBzdG9yZS5kaXNwYXRjaCgnUkVNT1ZFX0lURU0nLCB7IHF1ZXJ5OiBxdWVyeSB9KTtcblxuICAgICAgLy8gc2VlIGlmIGl0ZW0gaGFzIGJlZW4gcmVtb3ZlZFxuICAgICAgcmV0dXJuIHN0b3JlLnF1ZXJ5KCdHRVRfSVRFTScsIHF1ZXJ5KSA9PT0gbnVsbDtcbiAgICB9O1xuXG4gICAgdmFyIGFkZEZpbGVzID0gZnVuY3Rpb24gYWRkRmlsZXMoKSB7XG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7XG4gICAgICAgIF9rZXkgPCBfbGVuO1xuICAgICAgICBfa2V5KytcbiAgICAgICkge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBzb3VyY2VzID0gW107XG4gICAgICAgIHZhciBvcHRpb25zID0ge307XG5cbiAgICAgICAgLy8gdXNlciBwYXNzZWQgYSBzb3VyY2VzIGFycmF5XG4gICAgICAgIGlmIChpc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICAgICAgc291cmNlcy5wdXNoLmFwcGx5KHNvdXJjZXMsIHRvQ29uc3VtYWJsZUFycmF5KGFyZ3NbMF0pKTtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIGFyZ3NbMV0gfHwge30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHVzZXIgcGFzc2VkIHNvdXJjZXMgYXMgYXJndW1lbnRzLCBsYXN0IG9uZSBtaWdodCBiZSBvcHRpb25zIG9iamVjdFxuICAgICAgICAgIHZhciBsYXN0QXJndW1lbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHR5cGVvZiBsYXN0QXJndW1lbnQgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgID8gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgOiBfdHlwZW9mKGxhc3RBcmd1bWVudCkpID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgIShsYXN0QXJndW1lbnQgaW5zdGFuY2VvZiBCbG9iKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCBhcmdzLnBvcCgpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBhZGQgcmVzdCB0byBzb3VyY2VzXG4gICAgICAgICAgc291cmNlcy5wdXNoLmFwcGx5KHNvdXJjZXMsIGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNvdXJjZVByb21pc2VzID0gW107XG4gICAgICAgIHZhciBkZWxheVByb21pc2VzID0gZm9yRWFjaERlbGF5ZWQoc291cmNlcywgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgICAgc291cmNlUHJvbWlzZXMucHVzaChhZGRGaWxlKHNvdXJjZSwgb3B0aW9ucykpO1xuICAgICAgICB9KTtcblxuICAgICAgICBQcm9taXNlLmFsbChkZWxheVByb21pc2VzKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIFByb21pc2UuYWxsKHNvdXJjZVByb21pc2VzKS50aGVuKGZ1bmN0aW9uKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBnZXRGaWxlcyA9IGZ1bmN0aW9uIGdldEZpbGVzKCkge1xuICAgICAgcmV0dXJuIHN0b3JlLnF1ZXJ5KCdHRVRfSVRFTVMnKTtcbiAgICB9O1xuXG4gICAgdmFyIHByb2Nlc3NGaWxlID0gZnVuY3Rpb24gcHJvY2Vzc0ZpbGUocXVlcnkpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ1BST0NFU1NfSVRFTScsIHtcbiAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgICAgICBmYWlsdXJlOiByZWplY3RcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHByb2Nlc3NGaWxlcyA9IGZ1bmN0aW9uIHByb2Nlc3NGaWxlcygpIHtcbiAgICAgIGZvciAoXG4gICAgICAgIHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDtcbiAgICAgICAgX2tleTIgPCBfbGVuMjtcbiAgICAgICAgX2tleTIrK1xuICAgICAgKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgdmFyIHF1ZXJpZXMkJDEgPSBBcnJheS5pc0FycmF5KGFyZ3NbMF0pID8gYXJnc1swXSA6IGFyZ3M7XG4gICAgICBpZiAoIXF1ZXJpZXMkJDEubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChnZXRGaWxlcygpLm1hcChwcm9jZXNzRmlsZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHF1ZXJpZXMkJDEubWFwKHByb2Nlc3NGaWxlKSk7XG4gICAgfTtcblxuICAgIHZhciByZW1vdmVGaWxlcyA9IGZ1bmN0aW9uIHJlbW92ZUZpbGVzKCkge1xuICAgICAgZm9yIChcbiAgICAgICAgdmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwO1xuICAgICAgICBfa2V5MyA8IF9sZW4zO1xuICAgICAgICBfa2V5MysrXG4gICAgICApIHtcbiAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgfVxuXG4gICAgICB2YXIgcXVlcmllcyQkMSA9IEFycmF5LmlzQXJyYXkoYXJnc1swXSkgPyBhcmdzWzBdIDogYXJncztcbiAgICAgIHZhciBmaWxlcyA9IGdldEZpbGVzKCk7XG5cbiAgICAgIGlmICghcXVlcmllcyQkMS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGZpbGVzLm1hcChyZW1vdmVGaWxlKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHdoZW4gcmVtb3ZpbmcgYnkgaW5kZXggdGhlIGluZGV4ZXMgc2hpZnQgYWZ0ZXIgZWFjaCBmaWxlIHJlbW92YWwgc28gd2UgbmVlZCB0byBjb252ZXJ0IGluZGV4ZXMgdG8gaWRzXG4gICAgICB2YXIgbWFwcGVkUXVlcmllcyA9IHF1ZXJpZXMkJDFcbiAgICAgICAgLm1hcChmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICAgIHJldHVybiBpc051bWJlcihxdWVyeSlcbiAgICAgICAgICAgID8gZmlsZXNbcXVlcnldID8gZmlsZXNbcXVlcnldLmlkIDogbnVsbFxuICAgICAgICAgICAgOiBxdWVyeTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBtYXBwZWRRdWVyaWVzLm1hcChyZW1vdmVGaWxlKTtcbiAgICB9O1xuXG4gICAgdmFyIGV4cG9ydHMgPSBfZXh0ZW5kcyhcbiAgICAgIHt9LFxuICAgICAgb24oKSxcbiAgICAgIHJlYWRXcml0ZUFwaSxcbiAgICAgIGNyZWF0ZU9wdGlvbkFQSShzdG9yZSwgZGVmYXVsdE9wdGlvbnMkJDEpLFxuICAgICAge1xuICAgICAgICAvKipcbiAgICAgICAgICogT3ZlcnJpZGUgb3B0aW9ucyBkZWZpbmVkIGluIG9wdGlvbnMgb2JqZWN0XG4gICAgICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICAgICAqL1xuICAgICAgICBzZXRPcHRpb25zOiBzZXRPcHRpb25zLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb2FkIHRoZSBnaXZlbiBmaWxlXG4gICAgICAgICAqIEBwYXJhbSBzb3VyY2UgLSB0aGUgc291cmNlIG9mIHRoZSBmaWxlIChlaXRoZXIgYSBGaWxlLCBiYXNlNjQgZGF0YSB1cmkgb3IgdXJsKVxuICAgICAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIG9iamVjdCwgeyBpbmRleDogMCB9XG4gICAgICAgICAqL1xuICAgICAgICBhZGRGaWxlOiBhZGRGaWxlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb2FkIHRoZSBnaXZlbiBmaWxlc1xuICAgICAgICAgKiBAcGFyYW0gc291cmNlcyAtIHRoZSBzb3VyY2VzIG9mIHRoZSBmaWxlcyB0byBsb2FkXG4gICAgICAgICAqIEBwYXJhbSBvcHRpb25zIC0gb2JqZWN0LCB7IGluZGV4OiAwIH1cbiAgICAgICAgICovXG4gICAgICAgIGFkZEZpbGVzOiBhZGRGaWxlcyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZmlsZSBvYmplY3RzIG1hdGNoaW5nIHRoZSBnaXZlbiBxdWVyeVxuICAgICAgICAgKiBAcGFyYW0gcXVlcnkgeyBzdHJpbmcsIG51bWJlciwgbnVsbCB9XG4gICAgICAgICAqL1xuICAgICAgICBnZXRGaWxlOiBnZXRGaWxlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGxvYWQgZmlsZSB3aXRoIGdpdmVuIG5hbWVcbiAgICAgICAgICogQHBhcmFtIHF1ZXJ5IHsgc3RyaW5nLCBudW1iZXIsIG51bGwgIH1cbiAgICAgICAgICovXG4gICAgICAgIHByb2Nlc3NGaWxlOiBwcm9jZXNzRmlsZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyBhIGZpbGUgYnkgaXRzIG5hbWVcbiAgICAgICAgICogQHBhcmFtIHF1ZXJ5IHsgc3RyaW5nLCBudW1iZXIsIG51bGwgIH1cbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZUZpbGU6IHJlbW92ZUZpbGUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYWxsIGZpbGVzICh3cmFwcGVkIGluIHB1YmxpYyBhcGkpXG4gICAgICAgICAqL1xuICAgICAgICBnZXRGaWxlczogZ2V0RmlsZXMsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXJ0cyB1cGxvYWRpbmcgYWxsIGZpbGVzXG4gICAgICAgICAqL1xuICAgICAgICBwcm9jZXNzRmlsZXM6IHByb2Nlc3NGaWxlcyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2xlYXJzIGFsbCBmaWxlcyBmcm9tIHRoZSBmaWxlcyBsaXN0XG4gICAgICAgICAqL1xuICAgICAgICByZW1vdmVGaWxlczogcmVtb3ZlRmlsZXMsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJyb3dzZSB0aGUgZmlsZSBzeXN0ZW0gZm9yIGEgZmlsZVxuICAgICAgICAgKi9cbiAgICAgICAgYnJvd3NlOiBmdW5jdGlvbiBicm93c2UoKSB7XG4gICAgICAgICAgLy8gbmVlZHMgdG8gYmUgdHJpZ2dlciBkaXJlY3RseSBhcyB1c2VyIGFjdGlvbiBuZWVkcyB0byBiZSB0cmFjZWFibGUgKGlzIG5vdCB0cmFjZWFibGUgaW4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICAgIHZhciBpbnB1dCA9IHZpZXcuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWZpbGVdJyk7XG4gICAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICBpbnB1dC5jbGljaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVzdHJveXMgdGhlIGFwcFxuICAgICAgICAgKi9cbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAvLyByZXF1ZXN0IGRlc3RydWN0aW9uXG4gICAgICAgICAgZXhwb3J0cy5maXJlKCdkZXN0cm95Jywgdmlldy5lbGVtZW50KTtcblxuICAgICAgICAgIC8vIHN0b3AgYWN0aXZlIHByb2Nlc3NlcyAoZmlsZSB1cGxvYWRzLCBmZXRjaGVzLCBzdHVmZiBsaWtlIHRoYXQpXG4gICAgICAgICAgLy8gbG9vcCBvdmVyIGl0ZW1zIGFuZCBkZXBlbmRpbmcgb24gc3RhdGVzIGNhbGwgYWJvcnQgZm9yIG9uZ29pbmcgcHJvY2Vzc2VzXG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ0FCT1JUX0FMTCcpO1xuXG4gICAgICAgICAgLy8gZGVzdHJveSB2aWV3XG4gICAgICAgICAgdmlldy5fZGVzdHJveSgpO1xuXG4gICAgICAgICAgLy8gZGlzcGF0Y2ggZGVzdHJveVxuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKCdESURfREVTVFJPWScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnNlcnRzIHRoZSBwbHVnaW4gYmVmb3JlIHRoZSB0YXJnZXQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbiBpbnNlcnRCZWZvcmUkJDEoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiBpbnNlcnRCZWZvcmUodmlldy5lbGVtZW50LCBlbGVtZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5zZXJ0cyB0aGUgcGx1Z2luIGFmdGVyIHRoZSB0YXJnZXQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgaW5zZXJ0QWZ0ZXI6IGZ1bmN0aW9uIGluc2VydEFmdGVyJCQxKGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gaW5zZXJ0QWZ0ZXIodmlldy5lbGVtZW50LCBlbGVtZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQXBwZW5kcyB0aGUgcGx1Z2luIHRvIHRoZSB0YXJnZXQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgYXBwZW5kVG86IGZ1bmN0aW9uIGFwcGVuZFRvKGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5hcHBlbmRDaGlsZCh2aWV3LmVsZW1lbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXBsYWNlcyBhbiBlbGVtZW50IHdpdGggdGhlIGFwcFxuICAgICAgICAgKi9cbiAgICAgICAgcmVwbGFjZUVsZW1lbnQ6IGZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgICAvLyBpbnNlcnQgdGhlIGFwcCBiZWZvcmUgdGhlIGVsZW1lbnRcbiAgICAgICAgICBpbnNlcnRCZWZvcmUodmlldy5lbGVtZW50LCBlbGVtZW50KTtcblxuICAgICAgICAgIC8vIHJlbW92ZSB0aGUgb3JpZ2luYWwgZWxlbWVudFxuICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcblxuICAgICAgICAgIC8vIHJlbWVtYmVyIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgICBvcmlnaW5hbEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXN0b3JlcyB0aGUgb3JpZ2luYWwgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgcmVzdG9yZUVsZW1lbnQ6IGZ1bmN0aW9uIHJlc3RvcmVFbGVtZW50KCkge1xuICAgICAgICAgIGlmICghb3JpZ2luYWxFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47IC8vIG5vIGVsZW1lbnQgdG8gcmVzdG9yZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHJlc3RvcmUgb3JpZ2luYWwgZWxlbWVudFxuICAgICAgICAgIGluc2VydEFmdGVyKG9yaWdpbmFsRWxlbWVudCwgdmlldy5lbGVtZW50KTtcblxuICAgICAgICAgIC8vIHJlbW92ZSBvdXIgZWxlbWVudFxuICAgICAgICAgIHZpZXcuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHZpZXcuZWxlbWVudCk7XG5cbiAgICAgICAgICAvLyByZW1vdmUgcmVmZXJlbmNlXG4gICAgICAgICAgb3JpZ2luYWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBhcHAgcm9vdCBpcyBhdHRhY2hlZCB0byBnaXZlbiBlbGVtZW50XG4gICAgICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICBpc0F0dGFjaGVkVG86IGZ1bmN0aW9uIGlzQXR0YWNoZWRUbyhlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHZpZXcuZWxlbWVudCA9PT0gZWxlbWVudCB8fCBvcmlnaW5hbEVsZW1lbnQgPT09IGVsZW1lbnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHJvb3QgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgZWxlbWVudDoge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICAgICAgcmV0dXJuIHZpZXcuZWxlbWVudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gRG9uZSFcbiAgICBzdG9yZS5kaXNwYXRjaCgnRElEX0lOSVQnKTtcblxuICAgIC8vIGNyZWF0ZSBhY3R1YWwgYXBpIG9iamVjdFxuICAgIHJldHVybiBjcmVhdGVPYmplY3QoZXhwb3J0cyk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUFwcE9iamVjdCA9IGZ1bmN0aW9uIGNyZWF0ZUFwcE9iamVjdCgpIHtcbiAgICB2YXIgY3VzdG9tT3B0aW9ucyA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgdmFyIGRlZmF1bHRPcHRpb25zJCQxID0ge307XG4gICAgZm9yaW4oZ2V0T3B0aW9ucyQxKCksIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIGRlZmF1bHRPcHRpb25zJCQxW2tleV0gPSB2YWx1ZVswXTtcbiAgICB9KTtcblxuICAgIC8vIHNldCBhcHAgb3B0aW9uc1xuICAgIHZhciBhcHAgPSBjcmVhdGVBcHAkMShfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMkJDEsIGN1c3RvbU9wdGlvbnMpKTtcblxuICAgIC8vIHJldHVybiB0aGUgcGx1Z2luIGluc3RhbmNlXG4gICAgcmV0dXJuIGFwcDtcbiAgfTtcblxuICB2YXIgdG9DYW1lbHMgPSBmdW5jdGlvbiB0b0NhbWVscyhzdHJpbmcpIHtcbiAgICB2YXIgc2VwYXJhdG9yID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJy0nO1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShuZXcgUmVnRXhwKHNlcGFyYXRvciArICcuJywgJ2cnKSwgZnVuY3Rpb24oc3ViKSB7XG4gICAgICByZXR1cm4gc3ViLmNoYXJBdCgxKS50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBsb3dlckNhc2VGaXJzdExldHRlciA9IGZ1bmN0aW9uIGxvd2VyQ2FzZUZpcnN0TGV0dGVyKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gIH07XG5cbiAgdmFyIGF0dHJpYnV0ZU5hbWVUb1Byb3BlcnR5TmFtZSA9IGZ1bmN0aW9uIGF0dHJpYnV0ZU5hbWVUb1Byb3BlcnR5TmFtZShcbiAgICBhdHRyaWJ1dGVOYW1lXG4gICkge1xuICAgIHJldHVybiB0b0NhbWVscyhhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoL15kYXRhLS8sICcnKSk7XG4gIH07XG5cbiAgdmFyIG1hcE9iamVjdCA9IGZ1bmN0aW9uIG1hcE9iamVjdChvYmplY3QsIHByb3BlcnR5TWFwKSB7XG4gICAgLy8gcmVtb3ZlIHVud2FudGVkXG4gICAgZm9yaW4ocHJvcGVydHlNYXAsIGZ1bmN0aW9uKHNlbGVjdG9yLCBtYXBwaW5nKSB7XG4gICAgICBmb3JpbihvYmplY3QsIGZ1bmN0aW9uKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICAvLyBjcmVhdGUgcmVnZXhwIHNob3J0Y3V0XG4gICAgICAgIHZhciBzZWxlY3RvclJlZ0V4cCA9IG5ldyBSZWdFeHAoc2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIHRlc3RzIGlmXG4gICAgICAgIHZhciBtYXRjaGVzID0gc2VsZWN0b3JSZWdFeHAudGVzdChwcm9wZXJ0eSk7XG5cbiAgICAgICAgLy8gbm8gbWF0Y2gsIHNraXBcbiAgICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlcmUncyBhIG1hcHBpbmcsIHRoZSBvcmlnaW5hbCBwcm9wZXJ0eSBpcyBhbHdheXMgcmVtb3ZlZFxuICAgICAgICBkZWxldGUgb2JqZWN0W3Byb3BlcnR5XTtcblxuICAgICAgICAvLyBzaG91bGQgb25seSByZW1vdmUsIHdlIGRvbmUhXG4gICAgICAgIGlmIChtYXBwaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vdmUgdmFsdWUgdG8gbmV3IHByb3BlcnR5XG4gICAgICAgIGlmIChpc1N0cmluZyhtYXBwaW5nKSkge1xuICAgICAgICAgIG9iamVjdFttYXBwaW5nXSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vdmUgdG8gZ3JvdXBcbiAgICAgICAgdmFyIGdyb3VwID0gbWFwcGluZy5ncm91cDtcbiAgICAgICAgaWYgKGlzT2JqZWN0KG1hcHBpbmcpICYmICFvYmplY3RbZ3JvdXBdKSB7XG4gICAgICAgICAgb2JqZWN0W2dyb3VwXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqZWN0W2dyb3VwXVtcbiAgICAgICAgICBsb3dlckNhc2VGaXJzdExldHRlcihwcm9wZXJ0eS5yZXBsYWNlKHNlbGVjdG9yUmVnRXhwLCAnJykpXG4gICAgICAgIF0gPSB2YWx1ZTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBkbyBzdWJtYXBwaW5nXG4gICAgICBpZiAobWFwcGluZy5tYXBwaW5nKSB7XG4gICAgICAgIG1hcE9iamVjdChvYmplY3RbbWFwcGluZy5ncm91cF0sIG1hcHBpbmcubWFwcGluZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGdldEF0dHJpYnV0ZXNBc09iamVjdCA9IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZXNBc09iamVjdChub2RlKSB7XG4gICAgdmFyIGF0dHJpYnV0ZU1hcHBpbmcgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIC8vIHR1cm4gYXR0cmlidXRlcyBpbnRvIG9iamVjdFxuICAgIHZhciBvdXRwdXQgPSBbXVxuICAgICAgLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShub2RlLmF0dHJpYnV0ZXMpKVxuICAgICAgLnJlZHVjZShmdW5jdGlvbihvYmosIGF0dHJpYnV0ZSkge1xuICAgICAgICBvYmpbYXR0cmlidXRlTmFtZVRvUHJvcGVydHlOYW1lKGF0dHJpYnV0ZS5uYW1lKV0gPSBhdHRyKFxuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgYXR0cmlidXRlLm5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH0sIHt9KTtcblxuICAgIC8vIGRvIG1hcHBpbmcgb2Ygb2JqZWN0IHByb3BlcnRpZXNcbiAgICBtYXBPYmplY3Qob3V0cHV0LCBhdHRyaWJ1dGVNYXBwaW5nKTtcblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUFwcEF0RWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUFwcEF0RWxlbWVudChlbGVtZW50KSB7XG4gICAgdmFyIG9wdGlvbnMgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIC8vIGhvdyBhdHRyaWJ1dGVzIG9mIHRoZSBpbnB1dCBlbGVtZW50IGFyZSBtYXBwZWQgdG8gdGhlIG9wdGlvbnMgZm9yIHRoZSBwbHVnaW5cbiAgICB2YXIgYXR0cmlidXRlTWFwcGluZyA9IHtcbiAgICAgIC8vIHRyYW5zbGF0ZSB0byBvdGhlciBuYW1lXG4gICAgICAnXmNsYXNzJCc6ICdjbGFzc05hbWUnLFxuICAgICAgJ15tdWx0aXBsZSQnOiAnYWxsb3dNdWx0aXBsZScsXG4gICAgICAnXmNhcHR1cmUkJzogJ2NhcHR1cmVNZXRob2QnLFxuXG4gICAgICAvLyBncm91cCB1bmRlciBzaW5nbGUgcHJvcGVydHlcbiAgICAgICdec2VydmVyJzoge1xuICAgICAgICBncm91cDogJ3NlcnZlcicsXG4gICAgICAgIG1hcHBpbmc6IHtcbiAgICAgICAgICAnXnByb2Nlc3MnOiB7XG4gICAgICAgICAgICBncm91cDogJ3Byb2Nlc3MnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnXnJldmVydCc6IHtcbiAgICAgICAgICAgIGdyb3VwOiAncmV2ZXJ0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ15mZXRjaCc6IHtcbiAgICAgICAgICAgIGdyb3VwOiAnZmV0Y2gnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnXnJlc3RvcmUnOiB7XG4gICAgICAgICAgICBncm91cDogJ3Jlc3RvcmUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnXmxvYWQnOiB7XG4gICAgICAgICAgICBncm91cDogJ2xvYWQnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvLyBkb24ndCBpbmNsdWRlIGluIG9iamVjdFxuICAgICAgJ150eXBlJCc6IGZhbHNlLFxuICAgICAgJ15maWxlcyQnOiBmYWxzZVxuICAgIH07XG5cbiAgICAvLyBhZGQgYWRkaXRpb25hbCBvcHRpb24gdHJhbnNsYXRvcnNcbiAgICBhcHBseUZpbHRlcnMoJ1NFVF9BVFRSSUJVVEVfVE9fT1BUSU9OX01BUCcsIGF0dHJpYnV0ZU1hcHBpbmcpO1xuXG4gICAgLy8gY3JlYXRlIGZpbmFsIG9wdGlvbnMgb2JqZWN0IGJ5IGV4dHJhY3Rpbmcgb3B0aW9ucyBmcm9tIGVsZW1lbnRcbiAgICAvLyBhbmQgdGhlbiBvdmVycmlkaW5nIHdpdGggb3B0aW9ucyBvYmplY3RcbiAgICB2YXIgbWVyZ2VkT3B0aW9ucyA9IF9leHRlbmRzKFxuICAgICAge30sXG4gICAgICBnZXRBdHRyaWJ1dGVzQXNPYmplY3QoXG4gICAgICAgIGVsZW1lbnQubm9kZU5hbWUgPT09ICdGSUVMRFNFVCdcbiAgICAgICAgICA/IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1maWxlXScpXG4gICAgICAgICAgOiBlbGVtZW50LFxuICAgICAgICBhdHRyaWJ1dGVNYXBwaW5nXG4gICAgICApLFxuICAgICAgb3B0aW9uc1xuICAgICk7XG5cbiAgICAvLyBpZiBwYXJlbnQgaXMgYSBmaWVsZHNldCwgZ2V0IGZpbGVzIGZyb20gcGFyZW50IGJ5IHNlbGVjdGluZyBhbGwgaW5wdXQgZmllbGRzIHRoYXQgYXJlIG5vdCBmaWxlIHVwbG9hZCBmaWVsZHNcbiAgICAvLyB0aGVzZSB3aWxsIHRoZW4gYmUgYXV0b21hdGljYWxseSBzZXQgdG8gdGhlIGluaXRpYWwgZmlsZXNcbiAgICBtZXJnZWRPcHRpb25zLmZpbGVzID0gKG9wdGlvbnMuZmlsZXMgfHwgW10pLmNvbmNhdChcbiAgICAgIFtdXG4gICAgICAgIC5jb25jYXQoXG4gICAgICAgICAgdG9Db25zdW1hYmxlQXJyYXkoZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDpub3QoW3R5cGU9ZmlsZV0pJykpXG4gICAgICAgIClcbiAgICAgICAgLm1hcChmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzb3VyY2U6IGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICB0eXBlOiBpbnB1dC5kYXRhc2V0LnR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBidWlsZCBwbHVnaW5cbiAgICB2YXIgYXBwID0gY3JlYXRlQXBwT2JqZWN0KG1lcmdlZE9wdGlvbnMpO1xuXG4gICAgLy8gYWRkIGFscmVhZHkgc2VsZWN0ZWQgZmlsZXNcbiAgICBpZiAoZWxlbWVudC5maWxlcykge1xuICAgICAgW10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KGVsZW1lbnQuZmlsZXMpKS5mb3JFYWNoKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgYXBwLmFkZEZpbGUoZmlsZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHRoZSB0YXJnZXQgZWxlbWVudFxuICAgIGFwcC5yZXBsYWNlRWxlbWVudChlbGVtZW50KTtcblxuICAgIC8vIGV4cG9zZVxuICAgIHJldHVybiBhcHA7XG4gIH07XG5cbiAgLy8gaWYgYW4gZWxlbWVudCBpcyBwYXNzZWQsIHdlIGNyZWF0ZSB0aGUgaW5zdGFuY2UgYXQgdGhhdCBlbGVtZW50LCBpZiBub3QsIHdlIGp1c3QgY3JlYXRlIGFuIHVwIG9iamVjdFxuICB2YXIgY3JlYXRlQXBwID0gZnVuY3Rpb24gY3JlYXRlQXBwKCkge1xuICAgIHJldHVybiBpc05vZGUoYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdKVxuICAgICAgPyBjcmVhdGVBcHBBdEVsZW1lbnQuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpXG4gICAgICA6IGNyZWF0ZUFwcE9iamVjdC5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgdmFyIFBSSVZBVEVfTUVUSE9EUyQxID0gWydmaXJlJywgJ19yZWFkJywgJ193cml0ZSddO1xuXG4gIHZhciBjcmVhdGVBcHBBUEkgPSBmdW5jdGlvbiBjcmVhdGVBcHBBUEkoYXBwKSB7XG4gICAgdmFyIGFwaSA9IHt9O1xuXG4gICAgY29weU9iamVjdFByb3BlcnRpZXNUb09iamVjdChhcHAsIGFwaSwgUFJJVkFURV9NRVRIT0RTJDEpO1xuXG4gICAgcmV0dXJuIGFwaTtcbiAgfTtcblxuICAvKipcbiAgICogUmVwbGFjZXMgcGxhY2Vob2xkZXJzIGluIGdpdmVuIHN0cmluZyB3aXRoIHJlcGxhY2VtZW50c1xuICAgKiBAcGFyYW0gc3RyaW5nIC0gXCJGb28ge2Jhcn1cIlwiXG4gICAqIEBwYXJhbSByZXBsYWNlbWVudHMgLSB7IFwiYmFyXCI6IDEwIH1cbiAgICovXG4gIHZhciByZXBsYWNlSW5TdHJpbmcgPSBmdW5jdGlvbiByZXBsYWNlSW5TdHJpbmcoc3RyaW5nLCByZXBsYWNlbWVudHMpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyg/OnsoW2Etel0rKX0pL2csIGZ1bmN0aW9uKG1hdGNoLCBncm91cCkge1xuICAgICAgcmV0dXJuIHJlcGxhY2VtZW50c1tncm91cF07XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGltYWdlcyA9IFsnanBnJywgJ2pwZWcnLCAncG5nJywgJ2dpZicsICdibXAnLCAnd2VicCcsICdzdmcnLCAndGlmZiddO1xuICB2YXIgdGV4dCQxID0gWydjc3MnLCAnY3N2JywgJ2h0bWwnLCAndHh0J107XG4gIHZhciBtYXAgPSB7XG4gICAgemlwOiAnemlwfGNvbXByZXNzZWQnLFxuICAgIGVwdWI6ICdhcHBsaWNhdGlvbi9lcHViK3ppcCdcbiAgfTtcblxuICB2YXIgZ3Vlc3N0aW1hdGVNaW1lVHlwZSA9IGZ1bmN0aW9uIGd1ZXNzdGltYXRlTWltZVR5cGUoKSB7XG4gICAgdmFyIGV4dGVuc2lvbiA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuXG4gICAgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGltYWdlcy5pbmNsdWRlcyhleHRlbnNpb24pKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAnaW1hZ2UvJyArXG4gICAgICAgIChleHRlbnNpb24gPT09ICdqcGcnXG4gICAgICAgICAgPyAnanBlZydcbiAgICAgICAgICA6IGV4dGVuc2lvbiA9PT0gJ3N2ZycgPyAnc3ZnK3htbCcgOiBleHRlbnNpb24pXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGV4dCQxLmluY2x1ZGVzKGV4dGVuc2lvbikpIHtcbiAgICAgIHJldHVybiAndGV4dC8nICsgZXh0ZW5zaW9uO1xuICAgIH1cbiAgICByZXR1cm4gbWFwW2V4dGVuc2lvbl0gfHwgbnVsbDtcbiAgfTtcblxuICB2YXIgY3JlYXRlV29ya2VyID0gZnVuY3Rpb24gY3JlYXRlV29ya2VyKGZuKSB7XG4gICAgdmFyIHdvcmtlckJsb2IgPSBuZXcgQmxvYihbJygnLCBmbi50b1N0cmluZygpLCAnKSgpJ10sIHtcbiAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0J1xuICAgIH0pO1xuICAgIHZhciB3b3JrZXJVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHdvcmtlckJsb2IpO1xuICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKHdvcmtlclVSTCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNmZXI6IGZ1bmN0aW9uIHRyYW5zZmVyKG1lc3NhZ2UsIGNiKSB7fSxcbiAgICAgIHBvc3Q6IGZ1bmN0aW9uIHBvc3QobWVzc2FnZSwgY2IsIHRyYW5zZmVyTGlzdCkge1xuICAgICAgICB2YXIgaWQgPSBnZXRVbmlxdWVJZCgpO1xuXG4gICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKGUuZGF0YS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIGNiKGUuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRyYW5zZmVyTGlzdFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHRlcm1pbmF0ZTogZnVuY3Rpb24gdGVybWluYXRlKCkge1xuICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwod29ya2VyVVJMKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBsb2FkSW1hZ2UgPSBmdW5jdGlvbiBsb2FkSW1hZ2UodXJsLCBjYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShpbWcpO1xuICAgICAgfTtcbiAgICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9O1xuICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgY29weUZpbGUgPSBmdW5jdGlvbiBjb3B5RmlsZShmaWxlKSB7XG4gICAgcmV0dXJuIHJlbmFtZUZpbGUoZmlsZSwgZmlsZS5uYW1lKTtcbiAgfTtcblxuICAvLyB1dGlsaXRpZXMgZXhwb3NlZCB0byBwbHVnaW5zXG4gIC8vIGFscmVhZHkgcmVnaXN0ZXJlZCBwbHVnaW5zIChjYW4ndCByZWdpc3RlciB0d2ljZSlcbiAgdmFyIHJlZ2lzdGVyZWRQbHVnaW5zID0gW107XG5cbiAgLy8gcGFzcyB1dGlscyB0byBwbHVnaW5cbiAgdmFyIGNyZWF0ZUFwcFBsdWdpbiA9IGZ1bmN0aW9uIGNyZWF0ZUFwcFBsdWdpbihwbHVnaW4pIHtcbiAgICAvLyBhbHJlYWR5IHJlZ2lzdGVyZWRcbiAgICBpZiAocmVnaXN0ZXJlZFBsdWdpbnMuaW5jbHVkZXMocGx1Z2luKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHJlbWVtYmVyIHRoaXMgcGx1Z2luXG4gICAgcmVnaXN0ZXJlZFBsdWdpbnMucHVzaChwbHVnaW4pO1xuXG4gICAgLy8gc2V0dXAhXG4gICAgdmFyIHBsdWdpbk91dGxpbmUgPSBwbHVnaW4oe1xuICAgICAgYWRkRmlsdGVyOiBhZGRGaWx0ZXIsXG4gICAgICB1dGlsczoge1xuICAgICAgICBUeXBlOiBUeXBlLFxuICAgICAgICBmb3JpbjogZm9yaW4sXG4gICAgICAgIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgICAgICAgdG9OYXR1cmFsRmlsZVNpemU6IHRvTmF0dXJhbEZpbGVTaXplLFxuICAgICAgICByZXBsYWNlSW5TdHJpbmc6IHJlcGxhY2VJblN0cmluZyxcbiAgICAgICAgZ2V0RXh0ZW5zaW9uRnJvbUZpbGVuYW1lOiBnZXRFeHRlbnNpb25Gcm9tRmlsZW5hbWUsXG4gICAgICAgIGdldEZpbGVuYW1lV2l0aG91dEV4dGVuc2lvbjogZ2V0RmlsZW5hbWVXaXRob3V0RXh0ZW5zaW9uLFxuICAgICAgICBndWVzc3RpbWF0ZU1pbWVUeXBlOiBndWVzc3RpbWF0ZU1pbWVUeXBlLFxuICAgICAgICBnZXRGaWxlRnJvbUJsb2I6IGdldEZpbGVGcm9tQmxvYixcbiAgICAgICAgZ2V0RmlsZW5hbWVGcm9tVVJMOiBnZXRGaWxlbmFtZUZyb21VUkwsXG4gICAgICAgIGNyZWF0ZVJvdXRlOiBjcmVhdGVSb3V0ZSxcbiAgICAgICAgY3JlYXRlV29ya2VyOiBjcmVhdGVXb3JrZXIsXG4gICAgICAgIGNyZWF0ZVZpZXc6IGNyZWF0ZVZpZXcsXG4gICAgICAgIGxvYWRJbWFnZTogbG9hZEltYWdlLFxuICAgICAgICBjb3B5RmlsZTogY29weUZpbGUsXG4gICAgICAgIHJlbmFtZUZpbGU6IHJlbmFtZUZpbGUsXG4gICAgICAgIGFwcGx5RmlsdGVyQ2hhaW46IGFwcGx5RmlsdGVyQ2hhaW5cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGFkZCBwbHVnaW4gb3B0aW9ucyB0byBkZWZhdWx0IG9wdGlvbnNcbiAgICBleHRlbmREZWZhdWx0T3B0aW9ucyhwbHVnaW5PdXRsaW5lLm9wdGlvbnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQbHVnaW4gaW50ZXJuYWwgc3RhdGUgKG92ZXIgYWxsIGluc3RhbmNlcylcbiAgICovXG4gIHZhciBzdGF0ZSA9IHtcbiAgICAvLyBhY3RpdmUgYXBwIGluc3RhbmNlcywgdXNlZCB0byByZWRyYXcgdGhlIGFwcHMgYW5kIHRvIGZpbmQgdGhlIGxhdGVyXG4gICAgYXBwczogW11cbiAgfTtcblxuICAvLyBwbHVnaW4gbmFtZVxuICB2YXIgbmFtZSA9ICdmaWxlcG9uZCc7XG5cbiAgLy8gaXMgaW4gYnJvd3NlclxuICB2YXIgaGFzTmF2aWdhdG9yID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgLy8gYXBwIHBhaW50ZXIsIGNhbm5vdCBiZSBwYXVzZWQgb3Igc3RvcHBlZCBhdCB0aGUgbW9tZW50XG4gIHZhciBwYWludGVyID1cbiAgICBoYXNOYXZpZ2F0b3IgJiZcbiAgICBjcmVhdGVQYWludGVyKGNyZWF0ZVVwZGF0ZXIoc3RhdGUuYXBwcywgJ19yZWFkJywgJ193cml0ZScpLCA2MCk7XG5cbiAgLy8gZmlyZSBsb2FkIGV2ZW50XG4gIGlmIChoYXNOYXZpZ2F0b3IpIHtcbiAgICAvLyBmaXJlIGxvYWRlZCBldmVudCBzbyB3ZSBrbm93IHdoZW4gRmlsZVBvbmQgaXMgYXZhaWxhYmxlXG4gICAgdmFyIGRpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAvLyBsZXQgb3RoZXJzIGtub3cgd2UgaGF2ZSBhcmVhIHJlYWR5XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ0ZpbGVQb25kOmxvYWRlZCcsIHtcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHN1cHBvcnRlZDogc3VwcG9ydGVkLFxuICAgICAgICAgICAgY3JlYXRlOiBjcmVhdGUsXG4gICAgICAgICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgICAgICAgcGFyc2U6IHBhcnNlLFxuICAgICAgICAgICAgZmluZDogZmluZCxcbiAgICAgICAgICAgIHJlZ2lzdGVyUGx1Z2luOiByZWdpc3RlclBsdWdpbixcbiAgICAgICAgICAgIHNldE9wdGlvbnM6IHNldE9wdGlvbnMkJDFcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICAvLyBjbGVhbiB1cCBldmVudFxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRpc3BhdGNoKTtcbiAgICB9O1xuXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xuICAgICAgLy8gbW92ZSB0byBiYWNrIG9mIGV4ZWN1dGlvbiBxdWV1ZSwgRmlsZVBvbmQgc2hvdWxkIGhhdmUgYmVlbiBleHBvcnRlZCBieSB0aGVuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goKTtcbiAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVwZGF0ZXMgdGhlIE9wdGlvblR5cGVzIG9iamVjdCBiYXNlZCBvbiB0aGUgY3VycmVudCBvcHRpb25zXG4gIHZhciB1cGRhdGVPcHRpb25UeXBlcyA9IGZ1bmN0aW9uIHVwZGF0ZU9wdGlvblR5cGVzKCkge1xuICAgIHJldHVybiBmb3JpbihnZXRPcHRpb25zJDEoKSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgT3B0aW9uVHlwZXNba2V5XSA9IHZhbHVlWzFdO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdWJsaWMgUGx1Z2luIG1ldGhvZHNcbiAgICovXG4gIHZhciBGaWxlU3RhdHVzID0gX2V4dGVuZHMoe30sIEl0ZW1TdGF0dXMpO1xuXG4gIHZhciBPcHRpb25UeXBlcyA9IHt9O1xuICB1cGRhdGVPcHRpb25UeXBlcygpO1xuXG4gIC8vIGNyZWF0ZSBtZXRob2QsIGNyZWF0ZXMgYXBwcyBhbmQgYWRkcyB0aGVtIHRvIHRoZSBhcHAgYXJyYXlcbiAgdmFyIGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgYXBwID0gY3JlYXRlQXBwLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICBhcHAub24oJ2Rlc3Ryb3knLCBkZXN0cm95KTtcbiAgICBzdGF0ZS5hcHBzLnB1c2goYXBwKTtcbiAgICByZXR1cm4gY3JlYXRlQXBwQVBJKGFwcCk7XG4gIH07XG5cbiAgLy8gZGVzdHJveXMgYXBwcyBhbmQgcmVtb3ZlcyB0aGVtIGZyb20gdGhlIGFwcCBhcnJheVxuICB2YXIgZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koaG9vaykge1xuICAgIC8vIHJldHVybnMgdHJ1ZSBpZiB0aGUgYXBwIHdhcyBkZXN0cm95ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgdmFyIGluZGV4VG9SZW1vdmUgPSBzdGF0ZS5hcHBzLmZpbmRJbmRleChmdW5jdGlvbihhcHApIHtcbiAgICAgIHJldHVybiBhcHAuaXNBdHRhY2hlZFRvKGhvb2spO1xuICAgIH0pO1xuICAgIGlmIChpbmRleFRvUmVtb3ZlID49IDApIHtcbiAgICAgIC8vIHJlbW92ZSBmcm9tIGFwcHNcbiAgICAgIHZhciBhcHAgPSBzdGF0ZS5hcHBzLnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKVswXTtcblxuICAgICAgLy8gcmVzdG9yZSBvcmlnaW5hbCBkb20gZWxlbWVudFxuICAgICAgYXBwLnJlc3RvcmVFbGVtZW50KCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyBwYXJzZXMgdGhlIGdpdmVuIGNvbnRleHQgZm9yIHBsdWdpbnMgKGRvZXMgbm90IGluY2x1ZGUgdGhlIGNvbnRleHQgZWxlbWVudCBpdHNlbGYpXG4gIHZhciBwYXJzZSA9IGZ1bmN0aW9uIHBhcnNlKGNvbnRleHQpIHtcbiAgICAvLyBnZXQgYWxsIHBvc3NpYmxlIGhvb2tzXG4gICAgdmFyIG1hdGNoZWRIb29rcyA9IFtdLmNvbmNhdChcbiAgICAgIHRvQ29uc3VtYWJsZUFycmF5KGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBuYW1lKSlcbiAgICApO1xuXG4gICAgLy8gZmlsdGVyIG91dCBhbHJlYWR5IGFjdGl2ZSBob29rc1xuICAgIHZhciBuZXdIb29rcyA9IG1hdGNoZWRIb29rcy5maWx0ZXIoZnVuY3Rpb24obmV3SG9vaykge1xuICAgICAgcmV0dXJuICFzdGF0ZS5hcHBzLmZpbmQoZnVuY3Rpb24oYXBwKSB7XG4gICAgICAgIHJldHVybiBhcHAuaXNBdHRhY2hlZFRvKG5ld0hvb2spO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBjcmVhdGUgbmV3IGluc3RhbmNlIGZvciBlYWNoIGhvb2tcbiAgICByZXR1cm4gbmV3SG9va3MubWFwKGZ1bmN0aW9uKGhvb2spIHtcbiAgICAgIHJldHVybiBjcmVhdGUoaG9vayk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gcmV0dXJucyBhbiBhcHAgYmFzZWQgb24gdGhlIGdpdmVuIGVsZW1lbnQgaG9va1xuICB2YXIgZmluZCA9IGZ1bmN0aW9uIGZpbmQoaG9vaykge1xuICAgIHZhciBhcHAgPSBzdGF0ZS5hcHBzLmZpbmQoZnVuY3Rpb24oYXBwKSB7XG4gICAgICByZXR1cm4gYXBwLmlzQXR0YWNoZWRUbyhob29rKTtcbiAgICB9KTtcbiAgICBpZiAoIWFwcCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVBcHBBUEkoYXBwKTtcbiAgfTtcblxuICAvLyByZXR1cm5zIHRydWUgaWYgcGx1Z2luIGlzIHN1cHBvcnRlZFxuICB2YXIgaXNPcGVyYU1pbmkgPSBmdW5jdGlvbiBpc09wZXJhTWluaSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdpbmRvdy5vcGVyYW1pbmkpID09PSAnW29iamVjdCBPcGVyYU1pbmldJ1xuICAgICk7XG4gIH07XG4gIHZhciBoYXNQcm9taXNlcyA9IGZ1bmN0aW9uIGhhc1Byb21pc2VzKCkge1xuICAgIHJldHVybiAnUHJvbWlzZScgaW4gd2luZG93O1xuICB9O1xuICB2YXIgaGFzQmxvYlNsaWNlID0gZnVuY3Rpb24gaGFzQmxvYlNsaWNlKCkge1xuICAgIHJldHVybiAnc2xpY2UnIGluIEJsb2IucHJvdG90eXBlO1xuICB9O1xuICB2YXIgaGFzQ3JlYXRlT2JqZWN0VVJMID0gZnVuY3Rpb24gaGFzQ3JlYXRlT2JqZWN0VVJMKCkge1xuICAgIHJldHVybiAnVVJMJyBpbiB3aW5kb3cgJiYgJ2NyZWF0ZU9iamVjdFVSTCcgaW4gd2luZG93LlVSTDtcbiAgfTtcbiAgdmFyIGhhc1Zpc2liaWxpdHkgPSBmdW5jdGlvbiBoYXNWaXNpYmlsaXR5KCkge1xuICAgIHJldHVybiAndmlzaWJpbGl0eVN0YXRlJyBpbiBkb2N1bWVudDtcbiAgfTtcbiAgdmFyIGhhc1RpbWluZyA9IGZ1bmN0aW9uIGhhc1RpbWluZygpIHtcbiAgICByZXR1cm4gJ3BlcmZvcm1hbmNlJyBpbiB3aW5kb3c7XG4gIH07IC8vIGlPUyA4LnhcblxuICB2YXIgc3VwcG9ydGVkID0gZnVuY3Rpb24gc3VwcG9ydGVkKCkge1xuICAgIGlmICghaGFzTmF2aWdhdG9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAhKFxuICAgICAgaXNPcGVyYU1pbmkoKSB8fFxuICAgICAgIWhhc1Zpc2liaWxpdHkoKSB8fFxuICAgICAgIWhhc1Byb21pc2VzKCkgfHxcbiAgICAgICFoYXNCbG9iU2xpY2UoKSB8fFxuICAgICAgIWhhc0NyZWF0ZU9iamVjdFVSTCgpIHx8XG4gICAgICAhaGFzVGltaW5nKClcbiAgICApO1xuICB9O1xuXG4gIC8vIGFkZHMgYSBwbHVnaW4gZXh0ZW5zaW9uXG4gIHZhciByZWdpc3RlclBsdWdpbiA9IGZ1bmN0aW9uIHJlZ2lzdGVyUGx1Z2luKCkge1xuICAgIGZvciAoXG4gICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBsdWdpbnMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7XG4gICAgICBfa2V5IDwgX2xlbjtcbiAgICAgIF9rZXkrK1xuICAgICkge1xuICAgICAgcGx1Z2luc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICAvLyByZWdpc3RlciBwbHVnaW5zXG4gICAgcGx1Z2lucy5mb3JFYWNoKGNyZWF0ZUFwcFBsdWdpbik7XG5cbiAgICAvLyB1cGRhdGUgT3B0aW9uVHlwZXMsIGVhY2ggcGx1Z2luIG1pZ2h0IGhhdmUgZXh0ZW5kZWQgdGhlIGRlZmF1bHQgb3B0aW9uc1xuICAgIHVwZGF0ZU9wdGlvblR5cGVzKCk7XG4gIH07XG5cbiAgdmFyIGdldE9wdGlvbnMkJDEgPSBmdW5jdGlvbiBnZXRPcHRpb25zJCQxKCkge1xuICAgIHZhciBvcHRzID0ge307XG4gICAgZm9yaW4oZ2V0T3B0aW9ucyQxKCksIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIG9wdHNba2V5XSA9IHZhbHVlWzBdO1xuICAgIH0pO1xuICAgIHJldHVybiBvcHRzO1xuICB9O1xuXG4gIHZhciBzZXRPcHRpb25zJCQxID0gZnVuY3Rpb24gc2V0T3B0aW9ucyQkMShvcHRzKSB7XG4gICAgaWYgKGlzT2JqZWN0KG9wdHMpKSB7XG4gICAgICAvLyB1cGRhdGUgZXhpc3RpbmcgcGx1Z2luc1xuICAgICAgc3RhdGUuYXBwcy5mb3JFYWNoKGZ1bmN0aW9uKGFwcCkge1xuICAgICAgICBhcHAuc2V0T3B0aW9ucyhvcHRzKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBvdmVycmlkZSBkZWZhdWx0c1xuICAgICAgc2V0T3B0aW9ucyQxKG9wdHMpO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBuZXcgb3B0aW9uc1xuICAgIHJldHVybiBnZXRPcHRpb25zJCQxKCk7XG4gIH07XG5cbiAgZXhwb3J0cy5GaWxlU3RhdHVzID0gRmlsZVN0YXR1cztcbiAgZXhwb3J0cy5PcHRpb25UeXBlcyA9IE9wdGlvblR5cGVzO1xuICBleHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbiAgZXhwb3J0cy5kZXN0cm95ID0gZGVzdHJveTtcbiAgZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuICBleHBvcnRzLmZpbmQgPSBmaW5kO1xuICBleHBvcnRzLnN1cHBvcnRlZCA9IHN1cHBvcnRlZDtcbiAgZXhwb3J0cy5yZWdpc3RlclBsdWdpbiA9IHJlZ2lzdGVyUGx1Z2luO1xuICBleHBvcnRzLmdldE9wdGlvbnMgPSBnZXRPcHRpb25zJCQxO1xuICBleHBvcnRzLnNldE9wdGlvbnMgPSBzZXRPcHRpb25zJCQxO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZpbGVwb25kL2Rpc3QvZmlsZXBvbmQuanNcbi8vIG1vZHVsZSBpZCA9IDIxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKlxuICogRmlsZVBvbmRQbHVnaW5GaWxlVmFsaWRhdGVUeXBlIDEuMC4zXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQsIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBQbGVhc2UgdmlzaXQgaHR0cHM6Ly9wcWluYS5ubC9maWxlcG9uZCBmb3IgZGV0YWlscy5cbiAqL1xudmFyIHBsdWdpbiQxID0gKHsgYWRkRmlsdGVyLCB1dGlscyB9KSA9PiB7XG4gIC8vIGdldCBxdWljayByZWZlcmVuY2UgdG8gVHlwZSB1dGlsc1xuICBjb25zdCB7XG4gICAgVHlwZSxcbiAgICBpc1N0cmluZyxcbiAgICBndWVzc3RpbWF0ZU1pbWVUeXBlLFxuICAgIGdldEV4dGVuc2lvbkZyb21GaWxlbmFtZSxcbiAgICBnZXRGaWxlbmFtZUZyb21VUkxcbiAgfSA9IHV0aWxzO1xuXG4gIGNvbnN0IG1pbWVUeXBlTWF0Y2hlc1dpbGRDYXJkID0gKG1pbWVUeXBlLCB3aWxkY2FyZCkgPT4ge1xuICAgIGNvbnN0IG1pbWVUeXBlR3JvdXAgPSAoL15bXi9dKy8uZXhlYyhtaW1lVHlwZSkgfHwgW10pLnBvcCgpOyAvLyBpbWFnZS9wbmcgLT4gaW1hZ2VcbiAgICBjb25zdCB3aWxkY2FyZEdyb3VwID0gd2lsZGNhcmQuc2xpY2UoMCwgLTIpOyAvLyBpbWFnZS8qIC0+IGltYWdlXG4gICAgcmV0dXJuIG1pbWVUeXBlR3JvdXAgPT09IHdpbGRjYXJkR3JvdXA7XG4gIH07XG5cbiAgY29uc3QgaXNWYWxpZE1JTUVUeXBlID0gKGFjY2VwdGVkVHlwZXMsIHVzZXJJbnB1dFR5cGUpID0+XG4gICAgYWNjZXB0ZWRUeXBlcy5zb21lKGFjY2VwdGVkVHlwZSA9PiB7XG4gICAgICAvLyBhY2NlcHRlZCBpcyB3aWxkY2FyZCBtaW1lIHR5cGVcbiAgICAgIGlmICgvXFwqJC8udGVzdChhY2NlcHRlZFR5cGUpKSB7XG4gICAgICAgIHJldHVybiBtaW1lVHlwZU1hdGNoZXNXaWxkQ2FyZCh1c2VySW5wdXRUeXBlLCBhY2NlcHRlZFR5cGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBpcyBub3JtYWwgbWltZSB0eXBlXG4gICAgICByZXR1cm4gYWNjZXB0ZWRUeXBlID09PSB1c2VySW5wdXRUeXBlO1xuICAgIH0pO1xuXG4gIGNvbnN0IHZhbGlkYXRlRmlsZSA9IChpdGVtLCBhY2NlcHRlZEZpbGVUeXBlcykgPT4ge1xuICAgIC8vIG5vIHR5cGVzIGRlZmluZWQsIGV2ZXJ5dGhpbmcgaXMgYWxsb3dlZCBcXG8vXG4gICAgaWYgKGFjY2VwdGVkRmlsZVR5cGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIGl0ZW0gaXMgYSB1cmwgd2UgZ3Vlc3MgdGhlIG1pbWUgdHlwZSBieSB0aGUgZXh0ZW5zaW9uXG4gICAgbGV0IHR5cGUgPSAnJztcbiAgICBpZiAoaXNTdHJpbmcoaXRlbSkpIHtcbiAgICAgIGNvbnN0IGZpbGVuYW1lID0gZ2V0RmlsZW5hbWVGcm9tVVJMKGl0ZW0pO1xuICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZ2V0RXh0ZW5zaW9uRnJvbUZpbGVuYW1lKGZpbGVuYW1lKTtcbiAgICAgIGlmIChleHRlbnNpb24pIHtcbiAgICAgICAgdHlwZSA9IGd1ZXNzdGltYXRlTWltZVR5cGUoZXh0ZW5zaW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gaXRlbS50eXBlO1xuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlIGZpbGUgdHlwZVxuICAgIHJldHVybiBpc1ZhbGlkTUlNRVR5cGUoYWNjZXB0ZWRGaWxlVHlwZXMsIHR5cGUpO1xuICB9O1xuXG4gIC8vIHNldHVwIGF0dHJpYnV0ZSBtYXBwaW5nIGZvciBhY2NlcHRcbiAgYWRkRmlsdGVyKCdTRVRfQVRUUklCVVRFX1RPX09QVElPTl9NQVAnLCBtYXAgPT5cbiAgICBPYmplY3QuYXNzaWduKG1hcCwge1xuICAgICAgYWNjZXB0OiAnYWNjZXB0ZWRGaWxlVHlwZXMnXG4gICAgfSlcbiAgKTtcblxuICAvLyBmaWx0ZXJpbmcgaWYgYW4gaXRlbSBpcyBhbGxvd2VkIGluIGhvcHBlclxuICBhZGRGaWx0ZXIoJ0FMTE9XX0hPUFBFUl9JVEVNJywgKGZpbGUsIHsgcXVlcnkgfSkgPT4ge1xuICAgIC8vIGlmIHdlIGFyZSBub3QgZG9pbmcgZmlsZSB0eXBlIHZhbGlkYXRpb24gZXhpdFxuICAgIGlmICghcXVlcnkoJ0dFVF9BTExPV19GSUxFX1RZUEVfVkFMSURBVElPTicpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyB3ZSB2YWxpZGF0ZSB0aGUgZmlsZSBhZ2FpbnN0IHRoZSBhY2NlcHRlZCBmaWxlIHR5cGVzXG4gICAgcmV0dXJuIHZhbGlkYXRlRmlsZShmaWxlLCBxdWVyeSgnR0VUX0FDQ0VQVEVEX0ZJTEVfVFlQRVMnKSk7XG4gIH0pO1xuXG4gIC8vIGNhbGxlZCBmb3IgZWFjaCBmaWxlIHRoYXQgaXMgbG9hZGVkXG4gIC8vIHJpZ2h0IGJlZm9yZSBpdCBpcyBzZXQgdG8gdGhlIGl0ZW0gc3RhdGVcbiAgLy8gc2hvdWxkIHJldHVybiBhIHByb21pc2VcbiAgYWRkRmlsdGVyKFxuICAgICdMT0FEX0ZJTEUnLFxuICAgIChmaWxlLCB7IHF1ZXJ5IH0pID0+XG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbG93RmlsZVR5cGVWYWxpZGF0aW9uID0gcXVlcnkoJ0dFVF9BTExPV19GSUxFX1RZUEVfVkFMSURBVElPTicpO1xuICAgICAgICBpZiAoIWFsbG93RmlsZVR5cGVWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgcmVzb2x2ZShmaWxlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY2NlcHRlZEZpbGVUeXBlcyA9IHF1ZXJ5KCdHRVRfQUNDRVBURURfRklMRV9UWVBFUycpO1xuXG4gICAgICAgIC8vIGlmIGludmFsaWQsIGV4aXQgaGVyZVxuICAgICAgICBpZiAoIXZhbGlkYXRlRmlsZShmaWxlLCBhY2NlcHRlZEZpbGVUeXBlcykpIHtcbiAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgICAgIG1haW46IHF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9UWVBFX05PVF9BTExPV0VEJyksXG4gICAgICAgICAgICAgIHN1YjogcXVlcnkoJ0dFVF9BQ0NFUFRFRF9GSUxFX1RZUEVTJykuam9pbignLCAnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFsbCBmaW5lXG4gICAgICAgIHJlc29sdmUoZmlsZSk7XG4gICAgICB9KVxuICApO1xuXG4gIC8vIGV4cG9zZSBwbHVnaW5cbiAgcmV0dXJuIHtcbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zOiB7XG4gICAgICAvLyBFbmFibGUgb3IgZGlzYWJsZSBmaWxlIHR5cGUgdmFsaWRhdGlvblxuICAgICAgYWxsb3dGaWxlVHlwZVZhbGlkYXRpb246IFt0cnVlLCBUeXBlLkJPT0xFQU5dLFxuXG4gICAgICAvLyBXaGF0IGZpbGUgdHlwZXMgdG8gYWNjZXB0XG4gICAgICBhY2NlcHRlZEZpbGVUeXBlczogW1tdLCBUeXBlLkFSUkFZXSxcbiAgICAgIC8vIC0gbXVzdCBiZSBjb21tYSBzZXBhcmF0ZWRcbiAgICAgIC8vIC0gbWltZSB0eXBlczogaW1hZ2UvcG5nLCBpbWFnZS9qcGVnLCBpbWFnZS9naWZcbiAgICAgIC8vIC0gZXh0ZW5zaW9uczogLnBuZywgLmpwZywgLmpwZWdcbiAgICAgIC8vIC0gd2lsZGNhcmRzOiBpbWFnZS8qXG5cbiAgICAgIGxhYmVsRmlsZVR5cGVOb3RBbGxvd2VkOiBbJ0ZpbGUgaXMgb2YgaW52YWxpZCB0eXBlJywgVHlwZS5TVFJJTkddXG4gICAgfVxuICB9O1xuXG4gIC8vIHJlY2VpdmVzIGFsbCBpdGVtcyBhbmQgcmV0dXJucyB0cnVlIG9yIGZhbHNlIGRlcGVuZGluZyBvbiB3ZXRoZXIgdGhlIGl0ZW1zIGFyZSB2YWxpZFxuICAvLyAoYXMgaW4sIGlzIGhvdmVyZWQgb3ZlciBpdClcbiAgLy8gYWRkRmlsdGVyKCdBTExPV19IT1BQRVJfSVRFTScsICggaXRlbSwgeyBxdWVyeSB9KSA9PiB7XG4gIC8vICBUT0RPOiBpbXBsZW1lbnQsIHBsdXMgdGhyb3cgZXJyb3IgaW4gZHJvcHpvbmUgdG8gaW5kaWNhdGUgaXRlbSBpcyBub3QgdmFsaWRcbiAgLy8gfSk7XG59O1xuXG5pZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQpIHtcbiAgLy8gcGx1Z2luIGhhcyBsb2FkZWRcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICBuZXcgQ3VzdG9tRXZlbnQoJ0ZpbGVQb25kOnBsdWdpbmxvYWRlZCcsIHsgZGV0YWlsOiBwbHVnaW4kMSB9KVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwbHVnaW4kMTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXR5cGUvZGlzdC9maWxlcG9uZC1wbHVnaW4tZmlsZS12YWxpZGF0ZS10eXBlLmVzbS5qc1xuLy8gbW9kdWxlIGlkID0gMjEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qXG4gKiBGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlldyAxLjAuOVxuICogTGljZW5zZWQgdW5kZXIgTUlULCBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogUGxlYXNlIHZpc2l0IGh0dHBzOi8vcHFpbmEubmwvZmlsZXBvbmQgZm9yIGRldGFpbHMuXG4gKi9cbi8vIHRlc3QgaWYgZmlsZSBpcyBvZiB0eXBlIGltYWdlIGFuZCBjYW4gYmUgdmlld2VkIGluIGNhbnZhc1xuY29uc3QgaXNQcmV2aWV3YWJsZUltYWdlID0gZmlsZSA9PlxuICAvXmltYWdlLy50ZXN0KGZpbGUudHlwZSkgJiYgIS9zdmcvLnRlc3QoZmlsZS50eXBlKTtcblxuY29uc3QgdHJhbnNmb3JtcyA9IHtcbiAgMTogKCkgPT4gWzEsIDAsIDAsIDEsIDAsIDBdLFxuICAyOiB3aWR0aCA9PiBbLTEsIDAsIDAsIDEsIHdpZHRoLCAwXSxcbiAgMzogKHdpZHRoLCBoZWlnaHQpID0+IFstMSwgMCwgMCwgLTEsIHdpZHRoLCBoZWlnaHRdLFxuICA0OiAod2lkdGgsIGhlaWdodCkgPT4gWzEsIDAsIDAsIC0xLCAwLCBoZWlnaHRdLFxuICA1OiAoKSA9PiBbMCwgMSwgMSwgMCwgMCwgMF0sXG4gIDY6ICh3aWR0aCwgaGVpZ2h0KSA9PiBbMCwgMSwgLTEsIDAsIGhlaWdodCwgMF0sXG4gIDc6ICh3aWR0aCwgaGVpZ2h0KSA9PiBbMCwgLTEsIC0xLCAwLCBoZWlnaHQsIHdpZHRoXSxcbiAgODogd2lkdGggPT4gWzAsIC0xLCAxLCAwLCAwLCB3aWR0aF1cbn07XG5cbmNvbnN0IGZpeEltYWdlT3JpZW50YXRpb24gPSAoY3R4LCB3aWR0aCwgaGVpZ2h0LCBvcmllbnRhdGlvbikgPT4ge1xuICAvLyBubyBvcmllbnRhdGlvbiBzdXBwbGllZFxuICBpZiAob3JpZW50YXRpb24gPT09IC0xKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3R4LnRyYW5zZm9ybSguLi50cmFuc2Zvcm1zW29yaWVudGF0aW9uXSh3aWR0aCwgaGVpZ2h0KSk7XG59O1xuXG4vLyBkcmF3cyB0aGUgcHJldmlldyBpbWFnZVxuY29uc3QgY3JlYXRlUHJldmlld0ltYWdlID0gKGRhdGEsIHdpZHRoLCBoZWlnaHQsIG9yaWVudGF0aW9uKSA9PiB7XG4gIC8vIHJvdW5kXG4gIHdpZHRoID0gTWF0aC5yb3VuZCh3aWR0aCk7XG4gIGhlaWdodCA9IE1hdGgucm91bmQoaGVpZ2h0KTtcblxuICAvLyB3aWR0aCBhbmQgaGVpZ2h0IGhhdmUgYWxyZWFkeSBiZWVuIHN3YXBwZWQgZWFybGllclxuICAvLyBpZiBvcmllbnRhdGlvbiB3YXMgaW4gcmFuZ2UgYmVsb3csIGxldCdzIHN3YXAgYmFjayB0byBtYWtlXG4gIC8vIHRoaXMgY29kZSBhIGJpdCBtb3JlIHJlYWRhYmxlXG4gIGlmIChvcmllbnRhdGlvbiA+PSA1ICYmIG9yaWVudGF0aW9uIDw9IDgpIHtcbiAgICBbd2lkdGgsIGhlaWdodF0gPSBbaGVpZ2h0LCB3aWR0aF07XG4gIH1cblxuICAvLyBkcmF3IGltYWdlXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAvLyBpZiBpcyByb3RhdGVkIGluY29ycmVjdGx5IHN3YXAgd2lkdGggYW5kIGhlaWdodFxuICBpZiAob3JpZW50YXRpb24gPj0gNSAmJiBvcmllbnRhdGlvbiA8PSA4KSB7XG4gICAgY2FudmFzLndpZHRoID0gaGVpZ2h0O1xuICAgIGNhbnZhcy5oZWlnaHQgPSB3aWR0aDtcbiAgfSBlbHNlIHtcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgLy8gY29ycmVjdCBpbWFnZSBvcmllbnRhdGlvblxuICBjdHguc2F2ZSgpO1xuICBmaXhJbWFnZU9yaWVudGF0aW9uKGN0eCwgd2lkdGgsIGhlaWdodCwgb3JpZW50YXRpb24pO1xuXG4gIC8vIGRyYXcgdGhlIGltYWdlXG4gIGN0eC5kcmF3SW1hZ2UoZGF0YSwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgLy8gZW5kIGRyYXcgaW1hZ2VcbiAgY3R4LnJlc3RvcmUoKTtcblxuICAvLyBkYXRhIGhhcyBiZWVuIHRyYW5zZmVycmVkIHRvIGNhbnZhcyAoIGlmIHdhcyBJbWFnZUJpdG1hcCApXG4gIGlmICgnY2xvc2UnIGluIGRhdGEpIHtcbiAgICBkYXRhLmNsb3NlKCk7XG4gIH1cblxuICByZXR1cm4gY2FudmFzO1xufTtcblxuY29uc3QgSU1BR0VfU0NBTEVfU1BSSU5HX1BST1BTID0ge1xuICB0eXBlOiAnc3ByaW5nJyxcbiAgc3RpZmZuZXNzOiAwLjUsXG4gIGRhbXBpbmc6IDAuNDUsXG4gIG1hc3M6IDEwXG59O1xuXG5jb25zdCBjcmVhdGVJbWFnZVZpZXcgPSBmcEFQSSA9PlxuICBmcEFQSS51dGlscy5jcmVhdGVWaWV3KHtcbiAgICBuYW1lOiAnaW1hZ2UtcHJldmlldycsXG4gICAgdGFnOiAnZGl2JyxcbiAgICBpZ25vcmVSZWN0OiB0cnVlLFxuICAgIGNyZWF0ZTogKHsgcm9vdCwgcHJvcHMgfSkgPT4ge1xuICAgICAgcm9vdC5yZWYuY2xpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcm9vdC5lbGVtZW50LmFwcGVuZENoaWxkKHJvb3QucmVmLmNsaXApO1xuICAgIH0sXG4gICAgd3JpdGU6IGZwQVBJLnV0aWxzLmNyZWF0ZVJvdXRlKHtcbiAgICAgIERJRF9JTUFHRV9QUkVWSUVXX0xPQUQ6ICh7IHJvb3QsIHByb3BzLCBhY3Rpb24gfSkgPT4ge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBwcm9wcztcblxuICAgICAgICAvLyBnZXQgaXRlbVxuICAgICAgICBjb25zdCBpdGVtID0gcm9vdC5xdWVyeSgnR0VUX0lURU0nLCB7IGlkOiBwcm9wcy5pZCB9KTtcblxuICAgICAgICAvLyBvcmllbnRhdGlvbiBpbmZvXG4gICAgICAgIGNvbnN0IGV4aWYgPSBpdGVtLmdldE1ldGFkYXRhKCdleGlmJykgfHwge307XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gZXhpZi5vcmllbnRhdGlvbiB8fCAtMTtcblxuICAgICAgICAvLyBnZXQgd2lkdGggYW5kIGhlaWdodCBmcm9tIGFjdGlvbiwgYW5kIHN3YXAgb2Ygb3JpZW50YXRpb24gaXMgaW5jb3JyZWN0XG4gICAgICAgIGxldCB7IHdpZHRoLCBoZWlnaHQgfSA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBpZiAob3JpZW50YXRpb24gPj0gNSAmJiBvcmllbnRhdGlvbiA8PSA4KSB7XG4gICAgICAgICAgW3dpZHRoLCBoZWlnaHRdID0gW2hlaWdodCwgd2lkdGhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IGl0ZW0gcHJvcHNcbiAgICAgICAgY29uc3QgY3JvcCA9IGl0ZW0uZ2V0TWV0YWRhdGEoJ2Nyb3AnKSB8fCB7XG4gICAgICAgICAgcmVjdDoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgIGhlaWdodDogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXNwZWN0UmF0aW86IGhlaWdodCAvIHdpZHRoXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc2NhbGUgY2FudmFzIGJhc2VkIG9uIHBpeGVsIGRlbnNpdHlcbiAgICAgICAgY29uc3QgcGl4ZWxEZW5zaXR5RmFjdG9yID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cbiAgICAgICAgLy8gdGhlIG1heCBoZWlnaHQgb2YgdGhlIHByZXZpZXcgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IGZpeGVkUHJldmlld0hlaWdodCA9IHJvb3QucXVlcnkoJ0dFVF9JTUFHRV9QUkVWSUVXX0hFSUdIVCcpO1xuICAgICAgICBjb25zdCBtaW5QcmV2aWV3SGVpZ2h0ID0gcm9vdC5xdWVyeSgnR0VUX0lNQUdFX1BSRVZJRVdfTUlOX0hFSUdIVCcpO1xuICAgICAgICBjb25zdCBtYXhQcmV2aWV3SGVpZ2h0ID0gcm9vdC5xdWVyeSgnR0VUX0lNQUdFX1BSRVZJRVdfTUFYX0hFSUdIVCcpO1xuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBzY2FsZWQgcHJldmlldyBpbWFnZSBzaXplXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gcm9vdC5yZWN0LmlubmVyLndpZHRoO1xuICAgICAgICBjb25zdCBwcmV2aWV3SW1hZ2VSYXRpbyA9IGhlaWdodCAvIHdpZHRoO1xuICAgICAgICBjb25zdCBwcmV2aWV3V2lkdGggPSBjb250YWluZXJXaWR0aDtcbiAgICAgICAgY29uc3QgcHJldmlld0hlaWdodCA9IGNvbnRhaW5lcldpZHRoICogcHJldmlld0ltYWdlUmF0aW87XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIGltYWdlIHByZXZpZXcgaGVpZ2h0IGFuZCB3aWR0aFxuICAgICAgICBjb25zdCBpbWFnZUhlaWdodCA9XG4gICAgICAgICAgZml4ZWRQcmV2aWV3SGVpZ2h0ICE9PSBudWxsXG4gICAgICAgICAgICA/IGZpeGVkUHJldmlld0hlaWdodFxuICAgICAgICAgICAgOiBNYXRoLm1heChtaW5QcmV2aWV3SGVpZ2h0LCBNYXRoLm1pbihoZWlnaHQsIG1heFByZXZpZXdIZWlnaHQpKTtcbiAgICAgICAgY29uc3QgaW1hZ2VXaWR0aCA9IGltYWdlSGVpZ2h0IC8gcHJldmlld0ltYWdlUmF0aW87XG5cbiAgICAgICAgLy8gcmVuZGVyIHNjYWxlZCBwcmV2aWV3IGltYWdlXG4gICAgICAgIGNvbnN0IHByZXZpZXdJbWFnZSA9IGNyZWF0ZVByZXZpZXdJbWFnZShcbiAgICAgICAgICBhY3Rpb24uZGF0YSxcbiAgICAgICAgICBpbWFnZVdpZHRoICogcGl4ZWxEZW5zaXR5RmFjdG9yLFxuICAgICAgICAgIGltYWdlSGVpZ2h0ICogcGl4ZWxEZW5zaXR5RmFjdG9yLFxuICAgICAgICAgIG9yaWVudGF0aW9uXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIGNyb3AgY29udGFpbmVyIHNpemVcbiAgICAgICAgbGV0IGNsaXBIZWlnaHQgPVxuICAgICAgICAgIGZpeGVkUHJldmlld0hlaWdodCAhPT0gbnVsbFxuICAgICAgICAgICAgPyBmaXhlZFByZXZpZXdIZWlnaHRcbiAgICAgICAgICAgIDogTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgbWluUHJldmlld0hlaWdodCxcbiAgICAgICAgICAgICAgICBNYXRoLm1pbihjb250YWluZXJXaWR0aCAqIGNyb3AuYXNwZWN0UmF0aW8sIG1heFByZXZpZXdIZWlnaHQpXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgbGV0IGNsaXBXaWR0aCA9IGNsaXBIZWlnaHQgLyBjcm9wLmFzcGVjdFJhdGlvO1xuICAgICAgICBpZiAoY2xpcFdpZHRoID4gcHJldmlld1dpZHRoKSB7XG4gICAgICAgICAgY2xpcFdpZHRoID0gcHJldmlld1dpZHRoO1xuICAgICAgICAgIGNsaXBIZWlnaHQgPSBjbGlwV2lkdGggKiBjcm9wLmFzcGVjdFJhdGlvO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHNjYWxhciBiYXNlZCBvbiBpZiB0aGUgY2xpcCByZWN0YW5nbGUgaGFzIGJlZW4gc2NhbGVkIGRvd25cbiAgICAgICAgY29uc3QgcHJldmlld1NjYWxhciA9IGNsaXBIZWlnaHQgLyAocHJldmlld0hlaWdodCAqIGNyb3AucmVjdC5oZWlnaHQpO1xuXG4gICAgICAgIHdpZHRoID0gcHJldmlld1dpZHRoICogcHJldmlld1NjYWxhcjtcbiAgICAgICAgaGVpZ2h0ID0gcHJldmlld0hlaWdodCAqIHByZXZpZXdTY2FsYXI7XG4gICAgICAgIGNvbnN0IHggPSAtY3JvcC5yZWN0LnggKiBwcmV2aWV3V2lkdGggKiBwcmV2aWV3U2NhbGFyO1xuICAgICAgICBjb25zdCB5ID0gLWNyb3AucmVjdC55ICogcHJldmlld0hlaWdodCAqIHByZXZpZXdTY2FsYXI7XG5cbiAgICAgICAgLy8gYXBwbHkgc3R5bGVzXG4gICAgICAgIHJvb3QucmVmLmNsaXAuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7TWF0aC5yb3VuZChjbGlwV2lkdGgpfXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7TWF0aC5yb3VuZChjbGlwSGVpZ2h0KX1weDtcbiAgICAgICAgICAgICAgICBgO1xuXG4gICAgICAgIC8vIHBvc2l0aW9uIGltYWdlXG4gICAgICAgIHByZXZpZXdJbWFnZS5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHtNYXRoLnJvdW5kKHdpZHRoKX1weDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAke01hdGgucm91bmQoaGVpZ2h0KX1weDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHtNYXRoLnJvdW5kKHgpfXB4LCAke01hdGgucm91bmQoXG4gICAgICAgICAgeVxuICAgICAgICApfXB4KSByb3RhdGVaKDAuMDAwMDFkZWcpO1xuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgIHJvb3QucmVmLmNsaXAuYXBwZW5kQ2hpbGQocHJldmlld0ltYWdlKTtcblxuICAgICAgICAvLyBsZXQgb3RoZXJzIGtub3cgb2Ygb3VyIGZhYnVsb3VzIGFjaGlldmVtZW50IChzbyB0aGUgaW1hZ2UgY2FuIGJlIGZhZGVkIGluKVxuICAgICAgICByb290LmRpc3BhdGNoKCdESURfSU1BR0VfUFJFVklFV19EUkFXJywgeyBpZCB9KTtcbiAgICAgIH1cbiAgICB9KSxcbiAgICBtaXhpbnM6IHtcbiAgICAgIHN0eWxlczogWydzY2FsZVgnLCAnc2NhbGVZJywgJ29wYWNpdHknXSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgc2NhbGVYOiBJTUFHRV9TQ0FMRV9TUFJJTkdfUFJPUFMsXG4gICAgICAgIHNjYWxlWTogSU1BR0VfU0NBTEVfU1BSSU5HX1BST1BTLFxuICAgICAgICBvcGFjaXR5OiB7IHR5cGU6ICd0d2VlbicsIGR1cmF0aW9uOiA3NTAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbmNvbnN0IGFwcGx5VGVtcGxhdGUgPSAoc291cmNlLCB0YXJnZXQpID0+IHtcbiAgLy8gY29weSB3aWR0aCBhbmQgaGVpZ2h0XG4gIHRhcmdldC53aWR0aCA9IHNvdXJjZS53aWR0aDtcbiAgdGFyZ2V0LmhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XG5cbiAgLy8gZHJhdyB0aGUgdGVtcGxhdGVcbiAgY29uc3QgY3R4ID0gdGFyZ2V0LmdldENvbnRleHQoJzJkJyk7XG4gIGN0eC5kcmF3SW1hZ2Uoc291cmNlLCAwLCAwKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUltYWdlT3ZlcmxheVZpZXcgPSBmcEFQSSA9PlxuICBmcEFQSS51dGlscy5jcmVhdGVWaWV3KHtcbiAgICBuYW1lOiAnaW1hZ2UtcHJldmlldy1vdmVybGF5JyxcbiAgICB0YWc6ICdjYW52YXMnLFxuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgY3JlYXRlOiAoeyByb290LCBwcm9wcyB9KSA9PiB7XG4gICAgICBhcHBseVRlbXBsYXRlKHByb3BzLnRlbXBsYXRlLCByb290LmVsZW1lbnQpO1xuICAgIH0sXG4gICAgbWl4aW5zOiB7XG4gICAgICBzdHlsZXM6IFsnb3BhY2l0eSddLFxuICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICBvcGFjaXR5OiB7IHR5cGU6ICdzcHJpbmcnLCBtYXNzOiAyNSB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuLyoqXG4gKiBCaXRtYXAgV29ya2VyXG4gKi9cbmNvbnN0IEJpdG1hcFdvcmtlciA9IGZ1bmN0aW9uKCkge1xuICAvLyByb3V0ZSBtZXNzYWdlc1xuICBzZWxmLm9ubWVzc2FnZSA9IGUgPT4ge1xuICAgIHRvQml0bWFwKGUuZGF0YS5tZXNzYWdlLCByZXNwb25zZSA9PiB7XG4gICAgICAvLyBpbWFnZUJpdG1hcCBpcyBzZW50IGJhY2sgYXMgdHJhbnNmZXJhYmxlXG4gICAgICBzZWxmLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCwgbWVzc2FnZTogcmVzcG9uc2UgfSwgW3Jlc3BvbnNlXSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gcmVzaXplIGltYWdlIGRhdGFcbiAgY29uc3QgdG9CaXRtYXAgPSAob3B0aW9ucywgY2IpID0+IHtcbiAgICBmZXRjaChvcHRpb25zLmZpbGUpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5ibG9iKCkpXG4gICAgICAudGhlbihibG9iID0+IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpKVxuICAgICAgLnRoZW4oaW1hZ2VCaXRtYXAgPT4gY2IoaW1hZ2VCaXRtYXApKTtcbiAgfTtcbn07XG5cbmNvbnN0IGdldEltYWdlU2l6ZSA9ICh1cmwsIGNiKSA9PiB7XG4gIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSBpbWFnZS5uYXR1cmFsV2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW1hZ2UubmF0dXJhbEhlaWdodDtcbiAgICBpbWFnZSA9IG51bGw7XG4gICAgY2Iod2lkdGgsIGhlaWdodCk7XG4gIH07XG4gIGltYWdlLnNyYyA9IHVybDtcbn07XG5cbmNvbnN0IGVhc2VJbk91dFNpbmUgPSB0ID0+IC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHQpIC0gMSk7XG5cbmNvbnN0IGFkZEdyYWRpZW50U3RlcHMgPSAoXG4gIGdyYWRpZW50LFxuICBjb2xvcixcbiAgYWxwaGEgPSAxLFxuICBlYXNlRm4gPSBlYXNlSW5PdXRTaW5lLFxuICBzdGVwcyA9IDEwLFxuICBvZmZzZXQgPSAwXG4pID0+IHtcbiAgY29uc3QgcmFuZ2UgPSAxIC0gb2Zmc2V0O1xuICBjb25zdCByZ2IgPSBjb2xvci5qb2luKCcsJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBwID0gaSAvIHN0ZXBzO1xuICAgIGNvbnN0IHN0b3AgPSBvZmZzZXQgKyByYW5nZSAqIHA7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKHN0b3AsIGByZ2JhKCR7cmdifSwgJHtlYXNlRm4ocCkgKiBhbHBoYX0pYCk7XG4gIH1cbn07XG5cbmNvbnN0IGRyYXdUZW1wbGF0ZSA9IChjYW52YXMsIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBhbHBoYVRhcmdldCkgPT4ge1xuICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgY29uc3QgaG9yaXpvbnRhbENlbnRlciA9IHdpZHRoICogMC41O1xuXG4gIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoXG4gICAgaG9yaXpvbnRhbENlbnRlcixcbiAgICBoZWlnaHQgKyAxMTAsXG4gICAgaGVpZ2h0IC0gMTAwLFxuICAgIGhvcml6b250YWxDZW50ZXIsXG4gICAgaGVpZ2h0ICsgMTEwLFxuICAgIGhlaWdodCArIDEwMFxuICApO1xuXG4gIGFkZEdyYWRpZW50U3RlcHMoZ3JhZCwgY29sb3IsIGFscGhhVGFyZ2V0LCB1bmRlZmluZWQsIDgsIDAuNCk7XG5cbiAgY3R4LnNhdmUoKTtcbiAgY3R4LnRyYW5zbGF0ZSgtd2lkdGggKiAwLjUsIDApO1xuICBjdHguc2NhbGUoMiwgMSk7XG4gIGN0eC5maWxsU3R5bGUgPSBncmFkO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG5jb25zdCBoYXNOYXZpZ2F0b3IgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJztcblxuY29uc3Qgd2lkdGggPSA1MDA7XG5jb25zdCBoZWlnaHQgPSAyMDA7XG5cbmNvbnN0IG92ZXJsYXlUZW1wbGF0ZVNoYWRvdyA9IGhhc05hdmlnYXRvciAmJiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNvbnN0IG92ZXJsYXlUZW1wbGF0ZUVycm9yID0gaGFzTmF2aWdhdG9yICYmIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY29uc3Qgb3ZlcmxheVRlbXBsYXRlU3VjY2VzcyA9IGhhc05hdmlnYXRvciAmJiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblxuaWYgKGhhc05hdmlnYXRvcikge1xuICBkcmF3VGVtcGxhdGUob3ZlcmxheVRlbXBsYXRlU2hhZG93LCB3aWR0aCwgaGVpZ2h0LCBbNDAsIDQwLCA0MF0sIDAuODUpO1xuICBkcmF3VGVtcGxhdGUob3ZlcmxheVRlbXBsYXRlRXJyb3IsIHdpZHRoLCBoZWlnaHQsIFsxOTYsIDc4LCA3MV0sIDEpO1xuICBkcmF3VGVtcGxhdGUob3ZlcmxheVRlbXBsYXRlU3VjY2Vzcywgd2lkdGgsIGhlaWdodCwgWzU0LCAxNTEsIDk5XSwgMSk7XG59XG5cbmNvbnN0IGNyZWF0ZUltYWdlV3JhcHBlclZpZXcgPSBmcEFQSSA9PiB7XG4gIC8vIGNyZWF0ZSBvdmVybGF5IHZpZXdcbiAgY29uc3Qgb3ZlcmxheSA9IGNyZWF0ZUltYWdlT3ZlcmxheVZpZXcoZnBBUEkpO1xuXG4gIC8qKlxuICAgKiBXcml0ZSBoYW5kbGVyIGZvciB3aGVuIHByZXZpZXcgY29udGFpbmVyIGhhcyBiZWVuIGNyZWF0ZWRcbiAgICovXG4gIGNvbnN0IGRpZENyZWF0ZVByZXZpZXdDb250YWluZXIgPSAoeyByb290LCBwcm9wcywgYWN0aW9uIH0pID0+IHtcbiAgICBjb25zdCB7IHV0aWxzLCB2aWV3cyB9ID0gZnBBUEk7XG4gICAgY29uc3QgeyBjcmVhdGVWaWV3LCBjcmVhdGVXb3JrZXIsIGxvYWRJbWFnZSB9ID0gdXRpbHM7XG4gICAgY29uc3QgeyBpZCB9ID0gcHJvcHM7XG5cbiAgICAvLyB3ZSBuZWVkIHRvIGdldCB0aGUgZmlsZSBkYXRhIHRvIGRldGVybWluZSB0aGUgZXZlbnR1YWwgaW1hZ2Ugc2l6ZVxuICAgIGNvbnN0IGl0ZW0gPSByb290LnF1ZXJ5KCdHRVRfSVRFTScsIGlkKTtcblxuICAgIC8vIGdldCB1cmwgdG8gZmlsZSAod2UnbGwgcmV2b2tlIGl0IGxhdGVyIG9uIHdoZW4gZG9uZSlcbiAgICBjb25zdCBmaWxlVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpdGVtLmZpbGUpO1xuXG4gICAgLy8gZmFsbGJhY2tcbiAgICBjb25zdCBsb2FkUHJldmlld0ZhbGxiYWNrID0gKGl0ZW0sIHdpZHRoLCBoZWlnaHQsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgICAvLyBsZXQncyBzY2FsZSB0aGUgaW1hZ2UgaW4gdGhlIG1haW4gdGhyZWFkIDooXG4gICAgICBsb2FkSW1hZ2UoZmlsZVVSTCkudGhlbihwcmV2aWV3SW1hZ2VMb2FkZWQpO1xuICAgIH07XG5cbiAgICAvLyBpbWFnZSBpcyBub3cgcmVhZHlcbiAgICBjb25zdCBwcmV2aWV3SW1hZ2VMb2FkZWQgPSBkYXRhID0+IHtcbiAgICAgIC8vIHRoZSBmaWxlIHVybCBpcyBubyBsb25nZXIgbmVlZGVkXG4gICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGZpbGVVUkwpO1xuXG4gICAgICAvLyB0aGUgcHJldmlldyBpcyBub3cgcmVhZHkgdG8gYmUgZHJhd25cbiAgICAgIHJvb3QuZGlzcGF0Y2goJ0RJRF9JTUFHRV9QUkVWSUVXX0xPQUQnLCB7XG4gICAgICAgIGlkLFxuICAgICAgICBkYXRhXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gZGV0ZXJtaW5lIGltYWdlIHNpemUgb2YgdGhpcyBpdGVtXG4gICAgZ2V0SW1hZ2VTaXplKGZpbGVVUkwsICh3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gICAgICAvLyB3ZSBjYW4gbm93IHNjYWxlIHRoZSBwYW5lbCB0byB0aGUgZmluYWwgc2l6ZVxuICAgICAgcm9vdC5kaXNwYXRjaCgnRElEX0lNQUdFX1BSRVZJRVdfQ0FMQ1VMQVRFX1NJWkUnLCB7XG4gICAgICAgIGlkLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgICB9KTtcblxuICAgICAgLy8gaWYgd2Ugc3VwcG9ydCBzY2FsaW5nIHVzaW5nIGNyZWF0ZUltYWdlQml0bWFwIHdlIHVzZSBhIHdvcmtlclxuICAgICAgaWYgKCdjcmVhdGVJbWFnZUJpdG1hcCcgaW4gd2luZG93KSB7XG4gICAgICAgIC8vIGxldCdzIHNjYWxlIHRoZSBpbWFnZSBpbiBhIHdvcmtlclxuICAgICAgICBjb25zdCB3b3JrZXIgPSBjcmVhdGVXb3JrZXIoQml0bWFwV29ya2VyKTtcbiAgICAgICAgd29ya2VyLnBvc3QoXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsZTogZmlsZVVSTFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW1hZ2VCaXRtYXAgPT4ge1xuICAgICAgICAgICAgLy8gZGVzdHJveSB3b3JrZXJcbiAgICAgICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcblxuICAgICAgICAgICAgLy8gbm8gYml0bWFwIHJldHVybmVkLCBtdXN0IGJlIHNvbWV0aGluZyB3cm9uZyxcbiAgICAgICAgICAgIC8vIHRyeSB0aGUgb2xkc2Nob29sIHdheVxuICAgICAgICAgICAgaWYgKCFpbWFnZUJpdG1hcCkge1xuICAgICAgICAgICAgICBsb2FkUHJldmlld0ZhbGxiYWNrKGl0ZW0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHlheSB3ZSBnb3Qgb3VyIGJpdG1hcCwgbGV0J3MgY29udGludWUgc2hvd2luZyB0aGUgcHJldmlld1xuICAgICAgICAgICAgcHJldmlld0ltYWdlTG9hZGVkKGltYWdlQml0bWFwKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGUgZmFsbGJhY2sgcHJldmlld1xuICAgICAgICBsb2FkUHJldmlld0ZhbGxiYWNrKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXcml0ZSBoYW5kbGVyIGZvciB3aGVuIHRoZSBwcmV2aWV3IGhhcyBiZWVuIGxvYWRlZFxuICAgKi9cbiAgY29uc3QgZGlkTG9hZFByZXZpZXcgPSAoeyByb290LCBwcm9wcyB9KSA9PiB7XG4gICAgcm9vdC5yZWYub3ZlcmxheVNoYWRvdy5vcGFjaXR5ID0gMTtcbiAgfTtcblxuICAvKipcbiAgICogV3JpdGUgaGFuZGxlciBmb3Igd2hlbiB0aGUgcHJldmlldyBpbWFnZSBpcyByZWFkeSB0byBiZSBhbmltYXRlZFxuICAgKi9cbiAgY29uc3QgZGlkRHJhd1ByZXZpZXcgPSAoeyByb290LCBwcm9wcyB9KSA9PiB7XG4gICAgY29uc3QgeyBpbWFnZSB9ID0gcm9vdC5yZWY7XG5cbiAgICAvLyByZXZlYWwgaW1hZ2VcbiAgICBpbWFnZS5zY2FsZVggPSAxLjA7XG4gICAgaW1hZ2Uuc2NhbGVZID0gMS4wO1xuICAgIGltYWdlLm9wYWNpdHkgPSAxO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXcml0ZSBoYW5kbGVyIGZvciB3aGVuIHRoZSBwcmV2aWV3IGhhcyBiZWVuIGxvYWRlZFxuICAgKi9cbiAgY29uc3QgcmVzdG9yZU92ZXJsYXkgPSAoeyByb290IH0pID0+IHtcbiAgICByb290LnJlZi5vdmVybGF5U2hhZG93Lm9wYWNpdHkgPSAxO1xuICAgIHJvb3QucmVmLm92ZXJsYXlFcnJvci5vcGFjaXR5ID0gMDtcbiAgICByb290LnJlZi5vdmVybGF5U3VjY2Vzcy5vcGFjaXR5ID0gMDtcbiAgfTtcblxuICBjb25zdCBkaWRUaHJvd0Vycm9yID0gKHsgcm9vdCB9KSA9PiB7XG4gICAgcm9vdC5yZWYub3ZlcmxheVNoYWRvdy5vcGFjaXR5ID0gMC4yNTtcbiAgICByb290LnJlZi5vdmVybGF5RXJyb3Iub3BhY2l0eSA9IDE7XG4gIH07XG5cbiAgY29uc3QgZGlkQ29tcGxldGVQcm9jZXNzaW5nID0gKHsgcm9vdCB9KSA9PiB7XG4gICAgcm9vdC5yZWYub3ZlcmxheVNoYWRvdy5vcGFjaXR5ID0gMC4yNTtcbiAgICByb290LnJlZi5vdmVybGF5U3VjY2Vzcy5vcGFjaXR5ID0gMTtcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0IGNyZWF0ZSA9ICh7IHJvb3QsIHByb3BzLCBkaXNwYXRjaCB9KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVJbWFnZVZpZXcoZnBBUEkpO1xuXG4gICAgLy8gYXBwZW5kIGltYWdlIHByZXNlbnRlclxuICAgIHJvb3QucmVmLmltYWdlID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhpbWFnZSwge1xuICAgICAgICBpZDogcHJvcHMuaWQsXG4gICAgICAgIHNjYWxlWDogMS4yNSxcbiAgICAgICAgc2NhbGVZOiAxLjI1LFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBpbWFnZSBvdmVybGF5c1xuICAgIHJvb3QucmVmLm92ZXJsYXlTaGFkb3cgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KG92ZXJsYXksIHtcbiAgICAgICAgdGVtcGxhdGU6IG92ZXJsYXlUZW1wbGF0ZVNoYWRvdyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcm9vdC5yZWYub3ZlcmxheVN1Y2Nlc3MgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KG92ZXJsYXksIHtcbiAgICAgICAgdGVtcGxhdGU6IG92ZXJsYXlUZW1wbGF0ZVN1Y2Nlc3MsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHJvb3QucmVmLm92ZXJsYXlFcnJvciA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcob3ZlcmxheSwge1xuICAgICAgICB0ZW1wbGF0ZTogb3ZlcmxheVRlbXBsYXRlRXJyb3IsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gZnBBUEkudXRpbHMuY3JlYXRlVmlldyh7XG4gICAgbmFtZTogJ2ltYWdlLXByZXZpZXctd3JhcHBlcicsXG4gICAgY3JlYXRlLFxuICAgIHdyaXRlOiBmcEFQSS51dGlscy5jcmVhdGVSb3V0ZSh7XG4gICAgICAvLyBpbWFnZSBwcmV2aWV3IHN0YXRlZFxuICAgICAgRElEX0lNQUdFX1BSRVZJRVdfTE9BRDogZGlkTG9hZFByZXZpZXcsXG4gICAgICBESURfSU1BR0VfUFJFVklFV19EUkFXOiBkaWREcmF3UHJldmlldyxcbiAgICAgIERJRF9JTUFHRV9QUkVWSUVXX0NPTlRBSU5FUl9DUkVBVEU6IGRpZENyZWF0ZVByZXZpZXdDb250YWluZXIsXG5cbiAgICAgIC8vIGZpbGUgc3RhdGVzXG4gICAgICBESURfVEhST1dfSVRFTV9MT0FEX0VSUk9SOiBkaWRUaHJvd0Vycm9yLFxuICAgICAgRElEX1RIUk9XX0lURU1fUFJPQ0VTU0lOR19FUlJPUjogZGlkVGhyb3dFcnJvcixcbiAgICAgIERJRF9USFJPV19JVEVNX0lOVkFMSUQ6IGRpZFRocm93RXJyb3IsXG4gICAgICBESURfQ09NUExFVEVfSVRFTV9QUk9DRVNTSU5HOiBkaWRDb21wbGV0ZVByb2Nlc3NpbmcsXG4gICAgICBESURfU1RBUlRfSVRFTV9QUk9DRVNTSU5HOiByZXN0b3JlT3ZlcmxheSxcbiAgICAgIERJRF9SRVZFUlRfSVRFTV9QUk9DRVNTSU5HOiByZXN0b3JlT3ZlcmxheVxuICAgIH0pXG4gIH0pO1xufTtcblxuLyoqXG4gKiBJbWFnZSBQcmV2aWV3IFBsdWdpblxuICovXG52YXIgcGx1Z2luJDEgPSBmcEFQSSA9PiB7XG4gIGNvbnN0IHsgYWRkRmlsdGVyLCB1dGlscyB9ID0gZnBBUEk7XG4gIGNvbnN0IHsgVHlwZSwgY3JlYXRlUm91dGUgfSA9IHV0aWxzO1xuXG4gIC8vIGltYWdlUHJldmlld1ZpZXdcbiAgY29uc3QgaW1hZ2VQcmV2aWV3VmlldyA9IGNyZWF0ZUltYWdlV3JhcHBlclZpZXcoZnBBUEkpO1xuXG4gIC8vIGNhbGxlZCBmb3IgZWFjaCB2aWV3IHRoYXQgaXMgY3JlYXRlZCByaWdodCBhZnRlciB0aGUgJ2NyZWF0ZScgbWV0aG9kXG4gIGFkZEZpbHRlcignQ1JFQVRFX1ZJRVcnLCB2aWV3QVBJID0+IHtcbiAgICAvLyBnZXQgcmVmZXJlbmNlIHRvIGNyZWF0ZWQgdmlld1xuICAgIGNvbnN0IHsgaXMsIHZpZXcsIHF1ZXJ5IH0gPSB2aWV3QVBJO1xuXG4gICAgLy8gb25seSBob29rIHVwIHRvIGl0ZW0gdmlldyBhbmQgb25seSBpZiBpcyBlbmFibGVkIGZvciB0aGlzIGNyb3BwZXJcbiAgICBpZiAoIWlzKCdmaWxlJykgfHwgIXF1ZXJ5KCdHRVRfQUxMT1dfSU1BR0VfUFJFVklFVycpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIHRoZSBpbWFnZSBwcmV2aWV3IHBsdWdpbiwgYnV0IG9ubHkgZG8gc28gaWYgdGhlIGl0ZW0gaXMgYW4gaW1hZ2VcbiAgICBjb25zdCBkaWRMb2FkSXRlbSA9ICh7IHJvb3QsIHByb3BzLCBhY3Rpb25zIH0pID0+IHtcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHByb3BzO1xuICAgICAgY29uc3QgaXRlbSA9IHF1ZXJ5KCdHRVRfSVRFTScsIGlkKTtcblxuICAgICAgLy8gaXRlbSBjb3VsZCB0aGVvcmV0aWNhbGx5IGhhdmUgYmVlbiByZW1vdmVkIGluIHRoZSBtZWFuIHRpbWVcbiAgICAgIGlmICghaXRlbSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGdldCB0aGUgZmlsZSBvYmplY3RcbiAgICAgIGNvbnN0IGZpbGUgPSBpdGVtLmZpbGU7XG5cbiAgICAgIC8vIGV4aXQgaWYgdGhpcyBpcyBub3QgYW4gaW1hZ2VcbiAgICAgIGlmICghaXNQcmV2aWV3YWJsZUltYWdlKGZpbGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZXhpdCBpZiBpbWFnZSBzaXplIGlzIHRvbyBoaWdoIGFuZCBubyBjcmVhdGVJbWFnZUJpdG1hcCBzdXBwb3J0XG4gICAgICAvLyB0aGlzIHdvdWxkIHNpbXBseSBicmluZyB0aGUgYnJvd3NlciB0byBpdHMga25lZXMgYW5kIHRoYXQgaXMgbm90IHdoYXQgd2Ugd2FudFxuICAgICAgY29uc3Qgc3VwcG9ydHNDcmVhdGVJbWFnZUJpdG1hcCA9ICdjcmVhdGVJbWFnZUJpdG1hcCcgaW4gKHdpbmRvdyB8fCB7fSk7XG4gICAgICBjb25zdCBtYXhQcmV2aWV3RmlsZVNpemUgPSBxdWVyeSgnR0VUX0lNQUdFX1BSRVZJRVdfTUFYX0ZJTEVfU0laRScpO1xuICAgICAgaWYgKFxuICAgICAgICAhc3VwcG9ydHNDcmVhdGVJbWFnZUJpdG1hcCAmJlxuICAgICAgICBtYXhQcmV2aWV3RmlsZVNpemUgJiZcbiAgICAgICAgZmlsZS5zaXplID4gbWF4UHJldmlld0ZpbGVTaXplXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgcHJldmlldyB2aWV3XG4gICAgICByb290LnJlZi5pbWFnZVByZXZpZXcgPSB2aWV3LmFwcGVuZENoaWxkVmlldyhcbiAgICAgICAgdmlldy5jcmVhdGVDaGlsZFZpZXcoaW1hZ2VQcmV2aWV3VmlldywgeyBpZCB9KVxuICAgICAgKTtcblxuICAgICAgLy8gbm93IHJlYWR5XG4gICAgICByb290LmRpc3BhdGNoKCdESURfSU1BR0VfUFJFVklFV19DT05UQUlORVJfQ1JFQVRFJywgeyBpZCB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGlkQ2FsY3VsYXRlUHJldmlld1NpemUgPSAoeyByb290LCBwcm9wcywgYWN0aW9uIH0pID0+IHtcbiAgICAgIC8vIGdldCBpdGVtXG4gICAgICBjb25zdCBpdGVtID0gcm9vdC5xdWVyeSgnR0VUX0lURU0nLCB7IGlkOiBwcm9wcy5pZCB9KTtcblxuICAgICAgLy8gb3JpZW50YXRpb24gaW5mb1xuICAgICAgY29uc3QgZXhpZiA9IGl0ZW0uZ2V0TWV0YWRhdGEoJ2V4aWYnKSB8fCB7fTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gZXhpZi5vcmllbnRhdGlvbiB8fCAtMTtcblxuICAgICAgLy8gZ2V0IHdpZHRoIGFuZCBoZWlnaHQgZnJvbSBhY3Rpb24sIGFuZCBzd2FwIG9mIG9yaWVudGF0aW9uIGlzIGluY29ycmVjdFxuICAgICAgbGV0IHsgd2lkdGgsIGhlaWdodCB9ID0gYWN0aW9uO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID49IDUgJiYgb3JpZW50YXRpb24gPD0gOCkge1xuICAgICAgICBbd2lkdGgsIGhlaWdodF0gPSBbaGVpZ2h0LCB3aWR0aF07XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIG5lZWQgdGhlIGl0ZW0gdG8gZ2V0IHRvIHRoZSBjcm9wIHNpemVcbiAgICAgIGNvbnN0IGNyb3AgPSBpdGVtLmdldE1ldGFkYXRhKCdjcm9wJykgfHwge1xuICAgICAgICByZWN0OiB7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgIGhlaWdodDogMVxuICAgICAgICB9LFxuICAgICAgICBhc3BlY3RSYXRpbzogaGVpZ2h0IC8gd2lkdGhcbiAgICAgIH07XG5cbiAgICAgIC8vIGdldCBoZWlnaHQgbWluIGFuZCBtYXhcbiAgICAgIGNvbnN0IGZpeGVkUHJldmlld0hlaWdodCA9IHJvb3QucXVlcnkoJ0dFVF9JTUFHRV9QUkVWSUVXX0hFSUdIVCcpO1xuICAgICAgY29uc3QgbWluUHJldmlld0hlaWdodCA9IHJvb3QucXVlcnkoJ0dFVF9JTUFHRV9QUkVWSUVXX01JTl9IRUlHSFQnKTtcbiAgICAgIGNvbnN0IG1heFByZXZpZXdIZWlnaHQgPSByb290LnF1ZXJ5KCdHRVRfSU1BR0VfUFJFVklFV19NQVhfSEVJR0hUJyk7XG5cbiAgICAgIC8vIGNvbnN0IGNyb3Agd2lkdGhcbiAgICAgIGhlaWdodCA9XG4gICAgICAgIGZpeGVkUHJldmlld0hlaWdodCAhPT0gbnVsbFxuICAgICAgICAgID8gZml4ZWRQcmV2aWV3SGVpZ2h0XG4gICAgICAgICAgOiBNYXRoLm1heChtaW5QcmV2aWV3SGVpZ2h0LCBNYXRoLm1pbihoZWlnaHQsIG1heFByZXZpZXdIZWlnaHQpKTtcblxuICAgICAgd2lkdGggPSBoZWlnaHQgLyBjcm9wLmFzcGVjdFJhdGlvO1xuICAgICAgaWYgKHdpZHRoID4gcm9vdC5yZWN0LmVsZW1lbnQud2lkdGgpIHtcbiAgICAgICAgd2lkdGggPSByb290LnJlY3QuZWxlbWVudC53aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gd2lkdGggKiBjcm9wLmFzcGVjdFJhdGlvO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgaGVpZ2h0XG4gICAgICByb290LnJlZi5pbWFnZVByZXZpZXcuZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gYGhlaWdodDoke01hdGgucm91bmQoXG4gICAgICAgIGhlaWdodFxuICAgICAgKX1weGA7XG4gICAgfTtcblxuICAgIC8vIHN0YXJ0IHdyaXRpbmdcbiAgICB2aWV3LnJlZ2lzdGVyV3JpdGVyKFxuICAgICAgY3JlYXRlUm91dGUoe1xuICAgICAgICBESURfTE9BRF9JVEVNOiBkaWRMb2FkSXRlbSxcbiAgICAgICAgRElEX0lNQUdFX1BSRVZJRVdfQ0FMQ1VMQVRFX1NJWkU6IGRpZENhbGN1bGF0ZVByZXZpZXdTaXplXG4gICAgICB9KVxuICAgICk7XG4gIH0pO1xuXG4gIC8vIGV4cG9zZSBwbHVnaW5cbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zOiB7XG4gICAgICAvLyBFbmFibGUgb3IgZGlzYWJsZSBpbWFnZSBwcmV2aWV3XG4gICAgICBhbGxvd0ltYWdlUHJldmlldzogW3RydWUsIFR5cGUuQk9PTEVBTl0sXG5cbiAgICAgIC8vIEZpeGVkIHByZXZpZXcgaGVpZ2h0XG4gICAgICBpbWFnZVByZXZpZXdIZWlnaHQ6IFtudWxsLCBUeXBlLklOVF0sXG5cbiAgICAgIC8vIE1pbiBpbWFnZSBoZWlnaHRcbiAgICAgIGltYWdlUHJldmlld01pbkhlaWdodDogWzQ0LCBUeXBlLklOVF0sXG5cbiAgICAgIC8vIE1heCBpbWFnZSBoZWlnaHRcbiAgICAgIGltYWdlUHJldmlld01heEhlaWdodDogWzI1NiwgVHlwZS5JTlRdLFxuXG4gICAgICAvLyBNYXggc2l6ZSBvZiBwcmV2aWV3IGZpbGUgZm9yIHdoZW4gY3JlYXRlSW1hZ2VCaXRtYXAgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgaW1hZ2VQcmV2aWV3TWF4RmlsZVNpemU6IFtudWxsLCBUeXBlLklOVF1cbiAgICB9XG4gIH07XG59O1xuXG5pZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQpIHtcbiAgLy8gcGx1Z2luIGhhcyBsb2FkZWRcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICBuZXcgQ3VzdG9tRXZlbnQoJ0ZpbGVQb25kOnBsdWdpbmxvYWRlZCcsIHsgZGV0YWlsOiBwbHVnaW4kMSB9KVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwbHVnaW4kMTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3L2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcuZXNtLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcG9uZC5taW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcG9uZC5taW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBvbmQubWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAyMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICogRmlsZVBvbmQgMS40LjBcXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQsIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXFxuICogUGxlYXNlIHZpc2l0IGh0dHBzOi8vcHFpbmEubmwvZmlsZXBvbmQgZm9yIGRldGFpbHMuXFxuICovXFxuLmZpbGVwb25kLS1hc3Npc3RhbnR7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDoxcHg7d2lkdGg6MXB4O3BhZGRpbmc6MDtib3JkZXI6MDtjbGlwOnJlY3QoMXB4LDFweCwxcHgsMXB4KTstd2Via2l0LWNsaXAtcGF0aDppbnNldCg1MCUpO2NsaXAtcGF0aDppbnNldCg1MCUpO3doaXRlLXNwYWNlOm5vd3JhcH0uZmlsZXBvbmQtLWJyb3dzZXJ7cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luOjA7cGFkZGluZzowO2xlZnQ6MWVtO3RvcDoxLjc1ZW07d2lkdGg6Y2FsYygxMDAlIC0gMmVtKTtvcGFjaXR5OjA7Zm9udC1zaXplOjB9LmZpbGVwb25kLS1kcmlwe3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO292ZXJmbG93OmhpZGRlbjtvcGFjaXR5Oi4xO3BvaW50ZXItZXZlbnRzOm5vbmU7Ym9yZGVyLXJhZGl1czouNWVtO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDEpfS5maWxlcG9uZC0tZHJpcC1ibG9iey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjtsZWZ0OjA7d2lkdGg6OGVtO2hlaWdodDo4ZW07bWFyZ2luLWxlZnQ6LTRlbTttYXJnaW4tdG9wOi00ZW07YmFja2dyb3VuZDojMjkyNjI1O2JvcmRlci1yYWRpdXM6NTAlfS5maWxlcG9uZC0tZHJpcC1ibG9iLC5maWxlcG9uZC0tZHJvcC1sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm0sb3BhY2l0eX0uZmlsZXBvbmQtLWRyb3AtbGFiZWx7bGVmdDoxZW07cmlnaHQ6MWVtO21hcmdpbjowIDAgMWVtO2NvbG9yOiM0ZjRmNGZ9LmZpbGVwb25kLS1kcm9wLWxhYmVsIGxhYmVse2Rpc3BsYXk6YmxvY2s7cGFkZGluZzoxZW0gMDttYXJnaW46MDtjdXJzb3I6ZGVmYXVsdDtmb250LXNpemU6Ljg3NWVtO2ZvbnQtd2VpZ2h0OjQwMDt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDoxLjV9LmZpbGVwb25kLS1sYWJlbC1hY3Rpb257dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTstd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOmluazt0ZXh0LWRlY29yYXRpb24tc2tpcDppbms7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6I2E3YTRhNDt0ZXh0LWRlY29yYXRpb24tY29sb3I6I2E3YTRhNDtjdXJzb3I6cG9pbnRlcn0uZmlsZXBvbmQtLWZpbGUtYWN0aW9uLWJ1dHRvbntmb250LXNpemU6MWVtO3dpZHRoOjEuNjI1ZW07aGVpZ2h0OjEuNjI1ZW07Y3Vyc29yOmF1dG87Zm9udC1mYW1pbHk6aW5oZXJpdDtsaW5lLWhlaWdodDppbmhlcml0O21hcmdpbjowO3BhZGRpbmc6MDtib3JkZXI6bm9uZTtjb2xvcjojZmZmO291dGxpbmU6bm9uZTtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjUpO2JhY2tncm91bmQtaW1hZ2U6bm9uZTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm0sb3BhY2l0eTtib3gtc2hhZG93OjAgMCAwIDAgaHNsYSgwLDAlLDEwMCUsMCk7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4yNXMgZWFzZS1pbn0uZmlsZXBvbmQtLWZpbGUtYWN0aW9uLWJ1dHRvbiBzdmd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uZmlsZXBvbmQtLWZpbGUtYWN0aW9uLWJ1dHRvbjpmb2N1cywuZmlsZXBvbmQtLWZpbGUtYWN0aW9uLWJ1dHRvbjpob3Zlcntib3gtc2hhZG93OjAgMCAwIC4xMjVlbSBoc2xhKDAsMCUsMTAwJSwuOSl9LmZpbGVwb25kLS1maWxlLWluZm97cG9zaXRpb246c3RhdGljO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LW1zLWZsZXg6MTtmbGV4OjE7bWFyZ2luOjAgLjVlbSAwIDA7bWluLXdpZHRoOjA7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHk7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmZpbGVwb25kLS1maWxlLWluZm8gKnttYXJnaW46MH0uZmlsZXBvbmQtLWZpbGUtaW5mbyAuZmlsZXBvbmQtLWZpbGUtaW5mby1tYWlue2ZvbnQtc2l6ZTouNzVlbTtsaW5lLWhlaWdodDoxLjI7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztvdmVyZmxvdzpoaWRkZW47d2hpdGUtc3BhY2U6bm93cmFwO3dpZHRoOjEwMCV9LmZpbGVwb25kLS1maWxlLWluZm8gLmZpbGVwb25kLS1maWxlLWluZm8tc3Vie2ZvbnQtc2l6ZTouNjI1ZW07b3BhY2l0eTouNTt0cmFuc2l0aW9uOm9wYWNpdHkgLjI1cyBlYXNlLWluLW91dH0uZmlsZXBvbmQtLWZpbGUtaW5mbyAuZmlsZXBvbmQtLWZpbGUtaW5mby1zdWI6ZW1wdHl7ZGlzcGxheTpub25lfS5maWxlcG9uZC0tZmlsZS1zdGF0dXN7cG9zaXRpb246c3RhdGljO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LWFsaWduOmVuZDthbGlnbi1pdGVtczpmbGV4LWVuZDstbXMtZmxleC1wb3NpdGl2ZTowO2ZsZXgtZ3JvdzowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDttYXJnaW46MDttaW4td2lkdGg6Mi4yNWVtO3RleHQtYWxpZ246cmlnaHQ7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHk7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmZpbGVwb25kLS1maWxlLXN0YXR1cyAqe21hcmdpbjowO3doaXRlLXNwYWNlOm5vd3JhcH0uZmlsZXBvbmQtLWZpbGUtc3RhdHVzIC5maWxlcG9uZC0tZmlsZS1zdGF0dXMtbWFpbntmb250LXNpemU6Ljc1ZW07bGluZS1oZWlnaHQ6MS4yfS5maWxlcG9uZC0tZmlsZS1zdGF0dXMgLmZpbGVwb25kLS1maWxlLXN0YXR1cy1zdWJ7Zm9udC1zaXplOi42MjVlbTtvcGFjaXR5Oi41O3RyYW5zaXRpb246b3BhY2l0eSAuMjVzIGVhc2UtaW4tb3V0fS5maWxlcG9uZC0tZmlsZS13cmFwcGVye2JvcmRlcjpub25lO21hcmdpbjowO3BhZGRpbmc6MDttaW4td2lkdGg6MDtoZWlnaHQ6MTAwJX0uZmlsZXBvbmQtLWZpbGUtd3JhcHBlcj5sZWdlbmR7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDoxcHg7d2lkdGg6MXB4O3BhZGRpbmc6MDtib3JkZXI6MDtjbGlwOnJlY3QoMXB4LDFweCwxcHgsMXB4KTstd2Via2l0LWNsaXAtcGF0aDppbnNldCg1MCUpO2NsaXAtcGF0aDppbnNldCg1MCUpO3doaXRlLXNwYWNlOm5vd3JhcH0uZmlsZXBvbmQtLWZpbGV7cG9zaXRpb246c3RhdGljO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O2hlaWdodDoxMDAlOy1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7cGFkZGluZzouNTYyNWVtO2NvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czouNWVtfS5maWxlcG9uZC0tZmlsZSAuZmlsZXBvbmQtLWZpbGUtc3RhdHVze21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OjIuMjVlbX0uZmlsZXBvbmQtLWZpbGUgLmZpbGVwb25kLS1wcm9jZXNzaW5nLWNvbXBsZXRlLWluZGljYXRvcntwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjJ9LmZpbGVwb25kLS1maWxlIC5maWxlcG9uZC0tZmlsZS1hY3Rpb24tYnV0dG9uLC5maWxlcG9uZC0tZmlsZSAuZmlsZXBvbmQtLXByb2Nlc3NpbmctY29tcGxldGUtaW5kaWNhdG9ye3Bvc2l0aW9uOmFic29sdXRlfS5maWxlcG9uZC0tZmlsZSAuZmlsZXBvbmQtLXByb2dyZXNzLWluZGljYXRvcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6Ljc1ZW07cmlnaHQ6Ljc1ZW19LmZpbGVwb25kLS1maWxlIC5maWxlcG9uZC0tYWN0aW9uLXJlbW92ZS1pdGVte2xlZnQ6LjU2MjVlbX0uZmlsZXBvbmQtLWZpbGUgLmZpbGVwb25kLS1maWxlLWFjdGlvbi1idXR0b246bm90KC5maWxlcG9uZC0tYWN0aW9uLXJlbW92ZS1pdGVtKSwuZmlsZXBvbmQtLWZpbGUgLmZpbGVwb25kLS1wcm9jZXNzaW5nLWNvbXBsZXRlLWluZGljYXRvcntyaWdodDouNTYyNWVtfVtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGUqPWVycm9yXSAuZmlsZXBvbmQtLWZpbGUtaW5mbyxbZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlKj1pbnZhbGlkXSAuZmlsZXBvbmQtLWZpbGUtaW5mbyxbZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlPWNhbmNlbGxlZF0gLmZpbGVwb25kLS1maWxlLWluZm97bWFyZ2luLXJpZ2h0OjIuMjVlbX1bZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlPXByb2Nlc3NpbmctY29tcGxldGVdIC5maWxlcG9uZC0tYWN0aW9uLXJldmVydC1pdGVtLXByb2Nlc3Npbmcgc3Zney13ZWJraXQtYW5pbWF0aW9uOmZhbGwgLjVzIC4xMjVzIGxpbmVhciBib3RoO2FuaW1hdGlvbjpmYWxsIC41cyAuMTI1cyBsaW5lYXIgYm90aH1bZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlPXByb2Nlc3NpbmctY29tcGxldGVdIC5maWxlcG9uZC0tZmlsZS1pbmZvLXN1YixbZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlPXByb2Nlc3NpbmctY29tcGxldGVdIC5maWxlcG9uZC0tZmlsZS1zdGF0dXMtc3Vie29wYWNpdHk6MH1bZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlPXByb2Nlc3NpbmctY29tcGxldGVdIC5maWxlcG9uZC0tYWN0aW9uLXJldmVydC1pdGVtLXByb2Nlc3Npbmd+LmZpbGVwb25kLS1maWxlLWluZm8gLmZpbGVwb25kLS1maWxlLWluZm8tc3ViLFtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGU9cHJvY2Vzc2luZy1jb21wbGV0ZV0gLmZpbGVwb25kLS1hY3Rpb24tcmV2ZXJ0LWl0ZW0tcHJvY2Vzc2luZ34uZmlsZXBvbmQtLWZpbGUtc3RhdHVzIC5maWxlcG9uZC0tZmlsZS1zdGF0dXMtc3Vie29wYWNpdHk6LjV9W2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZSo9ZXJyb3JdIC5maWxlcG9uZC0tZmlsZS13cmFwcGVyLFtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGUqPWVycm9yXSAuZmlsZXBvbmQtLXBhbmVsLFtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGUqPWludmFsaWRdIC5maWxlcG9uZC0tZmlsZS13cmFwcGVyLFtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGUqPWludmFsaWRdIC5maWxlcG9uZC0tcGFuZWx7LXdlYmtpdC1hbmltYXRpb246c2hha2UgLjY1cyBsaW5lYXIgYm90aDthbmltYXRpb246c2hha2UgLjY1cyBsaW5lYXIgYm90aH1bZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlKj1idXN5XSAuZmlsZXBvbmQtLXByb2dyZXNzLWluZGljYXRvciBzdmd7LXdlYmtpdC1hbmltYXRpb246c3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOnNwaW4gMXMgbGluZWFyIGluZmluaXRlfUAtd2Via2l0LWtleWZyYW1lcyBzcGluezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fUBrZXlmcmFtZXMgc3BpbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1ALXdlYmtpdC1rZXlmcmFtZXMgc2hha2V7MTAlLDkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0uMDYyNWVtKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtLjA2MjVlbSl9MjAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC4xMjVlbSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLjEyNWVtKX0zMCUsNTAlLDcwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0uMjVlbSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLS4yNWVtKX00MCUsNjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLjI1ZW0pO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC4yNWVtKX19QGtleWZyYW1lcyBzaGFrZXsxMCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLS4wNjI1ZW0pO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0uMDYyNWVtKX0yMCUsODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLjEyNWVtKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCguMTI1ZW0pfTMwJSw1MCUsNzAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLS4yNWVtKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtLjI1ZW0pfTQwJSw2MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCguMjVlbSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLjI1ZW0pfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFsbHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9NzAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjEpO3RyYW5zZm9ybTpzY2FsZSgxLjEpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH19QGtleWZyYW1lcyBmYWxsezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH03MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMSk7dHJhbnNmb3JtOnNjYWxlKDEuMSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXR9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0fX0uZmlsZXBvbmQtLWhvcHBlcltkYXRhLWhvcHBlci1zdGF0ZT1kcmFnLW92ZXJdPip7cG9pbnRlci1ldmVudHM6bm9uZX0uZmlsZXBvbmQtLXByb2dyZXNzLWluZGljYXRvcnt6LWluZGV4OjEwM30uZmlsZXBvbmQtLWZpbGUtYWN0aW9uLWJ1dHRvbnt6LWluZGV4OjEwMn0uZmlsZXBvbmQtLWZpbGUtc3RhdHVze3otaW5kZXg6MTAxfS5maWxlcG9uZC0tZmlsZS1pbmZve3otaW5kZXg6MTAwfS5maWxlcG9uZC0taXRlbXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtwYWRkaW5nOjA7bWFyZ2luOjAgMCAuNWVtO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5fS5maWxlcG9uZC0taXRlbT4uZmlsZXBvbmQtLXBhbmVse3otaW5kZXg6MX0uZmlsZXBvbmQtLWl0ZW0+LmZpbGVwb25kLS1wYW5lbCAuZmlsZXBvbmQtLXBhbmVsLWJvdHRvbXtib3gtc2hhZG93OjAgLjA2MjVlbSAuMTI1ZW0gLS4wNjI1ZW0gcmdiYSgwLDAsMCwuMjUpfS5maWxlcG9uZC0taXRlbT4uZmlsZXBvbmQtLWZpbGUtd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9LmZpbGVwb25kLS1pdGVtLXBhbmVse2JhY2tncm91bmQtY29sb3I6IzY0NjA1ZX1bZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlPXByb2Nlc3NpbmctY29tcGxldGVdIC5maWxlcG9uZC0taXRlbS1wYW5lbHtiYWNrZ3JvdW5kLWNvbG9yOiMzNjk3NjN9W2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZSo9ZXJyb3JdIC5maWxlcG9uZC0taXRlbS1wYW5lbCxbZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlKj1pbnZhbGlkXSAuZmlsZXBvbmQtLWl0ZW0tcGFuZWx7YmFja2dyb3VuZC1jb2xvcjojYzQ0ZTQ3fS5maWxlcG9uZC0taXRlbS1wYW5lbHtib3JkZXItcmFkaXVzOi41ZW07dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4yNXN9LmZpbGVwb25kLS1saXN0LXNjcm9sbGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO21hcmdpbjowO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0uZmlsZXBvbmQtLWxpc3Qtc2Nyb2xsZXJbZGF0YS1zdGF0ZT1vdmVyZmxvd117b3ZlcmZsb3cteTpzY3JvbGw7b3ZlcmZsb3cteDp2aXNpYmxlOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNofS5maWxlcG9uZC0tbGlzdC1zY3JvbGxlcltkYXRhLXN0YXRlPW92ZXJmbG93XSAuZmlsZXBvbmQtLWxpc3R7Ym90dG9tOjA7cmlnaHQ6MH0uZmlsZXBvbmQtLWxpc3Qtc2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFye2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9LmZpbGVwb25kLS1saXN0LXNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhcjp2ZXJ0aWNhbHt3aWR0aDoxZW19LmZpbGVwb25kLS1saXN0LXNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhcjpob3Jpem9udGFse2hlaWdodDowfS5maWxlcG9uZC0tbGlzdC1zY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zKTtib3JkZXItcmFkaXVzOjk5OTk5cHg7Ym9yZGVyOi4zMTI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7YmFja2dyb3VuZC1jbGlwOmNvbnRlbnQtYm94fS5maWxlcG9uZC0tbGlzdHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjFlbTtyaWdodDoxZW07bWFyZ2luOjA7cGFkZGluZzowO2xpc3Qtc3R5bGUtdHlwZTpub25lO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0uZmlsZXBvbmQtLXBhbmVsLXJvb3R7Ym9yZGVyLXJhZGl1czouNWVtO2JhY2tncm91bmQtY29sb3I6I2YxZjBlZn0uZmlsZXBvbmQtLXBhbmVse3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDtyaWdodDowO21hcmdpbjowO2hlaWdodDphdXRvIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lfS5maWxlcG9uZC0tcGFuZWxbZGF0YS1zY2FsYWJsZT10cnVlXXstd2Via2l0LXRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7Ym9yZGVyOm5vbmUhaW1wb3J0YW50fS5maWxlcG9uZC0tcGFuZWxbZGF0YS1zY2FsYWJsZT1mYWxzZV17Ym90dG9tOjB9LmZpbGVwb25kLS1wYW5lbFtkYXRhLXNjYWxhYmxlPWZhbHNlXT5kaXZ7ZGlzcGxheTpub25lfS5maWxlcG9uZC0tcGFuZWwtYm90dG9tLC5maWxlcG9uZC0tcGFuZWwtY2VudGVyLC5maWxlcG9uZC0tcGFuZWwtdG9we3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDtyaWdodDowO21hcmdpbjowO3BhZGRpbmc6MH0uZmlsZXBvbmQtLXBhbmVsLWJvdHRvbSwuZmlsZXBvbmQtLXBhbmVsLXRvcHtoZWlnaHQ6LjVlbX0uZmlsZXBvbmQtLXBhbmVsLXRvcHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjAhaW1wb3J0YW50O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjAhaW1wb3J0YW50O2JvcmRlci1ib3R0b206bm9uZSFpbXBvcnRhbnR9LmZpbGVwb25kLS1wYW5lbC10b3A6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MnB4O2xlZnQ6MDtyaWdodDowO2JvdHRvbTotMXB4O2JhY2tncm91bmQtY29sb3I6aW5oZXJpdH0uZmlsZXBvbmQtLXBhbmVsLWJvdHRvbSwuZmlsZXBvbmQtLXBhbmVsLWNlbnRlcnt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC41ZW0sMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLjVlbSwwKX0uZmlsZXBvbmQtLXBhbmVsLWJvdHRvbXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjAhaW1wb3J0YW50O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjAhaW1wb3J0YW50O2JvcmRlci10b3A6bm9uZSFpbXBvcnRhbnR9LmZpbGVwb25kLS1wYW5lbC1ib3R0b206YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXCI7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjJweDtsZWZ0OjA7cmlnaHQ6MDt0b3A6LTFweDtiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXR9LmZpbGVwb25kLS1wYW5lbC1jZW50ZXJ7aGVpZ2h0OjEwMHB4IWltcG9ydGFudDtib3JkZXItdG9wOm5vbmUhaW1wb3J0YW50O2JvcmRlci1ib3R0b206bm9uZSFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czowIWltcG9ydGFudH0uZmlsZXBvbmQtLXBhbmVsLWNlbnRlcjpub3QoW3N0eWxlXSl7dmlzaWJpbGl0eTpoaWRkZW59LmZpbGVwb25kLS1wcm9ncmVzcy1pbmRpY2F0b3J7cG9zaXRpb246c3RhdGljO3dpZHRoOjEuMjVlbTtoZWlnaHQ6MS4yNWVtO2NvbG9yOiNmZmY7bWFyZ2luOjA7cG9pbnRlci1ldmVudHM6bm9uZTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm0sb3BhY2l0eX0uZmlsZXBvbmQtLXByb2dyZXNzLWluZGljYXRvciBzdmd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uZmlsZXBvbmQtLXByb2dyZXNzLWluZGljYXRvciBwYXRoe2ZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yfS5maWxlcG9uZC0tbGlzdC1zY3JvbGxlcnt6LWluZGV4OjZ9LmZpbGVwb25kLS1kcm9wLWxhYmVse3otaW5kZXg6NX0uZmlsZXBvbmQtLWRyaXB7ei1pbmRleDozfS5maWxlcG9uZC0tcm9vdD4uZmlsZXBvbmQtLXBhbmVse3otaW5kZXg6Mn0uZmlsZXBvbmQtLWJyb3dzZXJ7ei1pbmRleDoxfS5maWxlcG9uZC0tcm9vdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWJvdHRvbToxZW07cGFkZGluZy10b3A6MWVtO2ZvbnQtc2l6ZToxcmVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTotYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NDUwO3RleHQtYWxpZ246bGVmdDt0ZXh0LXJlbmRlcmluZzpvcHRpbWl6ZUxlZ2liaWxpdHk7ZGlyZWN0aW9uOmx0cjtjb250YWluOmxheW91dCBzdHlsZSBzaXplfS5maWxlcG9uZC0tcm9vdCAqe2ZvbnQtc2l6ZTppbmhlcml0O2JveC1zaXppbmc6aW5oZXJpdDtsaW5lLWhlaWdodDppbmhlcml0fVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAyMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5taW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5taW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcubWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcvZGlzdC9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAyMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICogRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcgMS4wLjlcXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQsIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXFxuICogUGxlYXNlIHZpc2l0IGh0dHBzOi8vcHFpbmEubmwvZmlsZXBvbmQgZm9yIGRldGFpbHMuXFxuICovXFxuLmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3LXdyYXBwZXJ7ei1pbmRleDoyfS5maWxlcG9uZC0taW1hZ2UtcHJldmlldy1vdmVybGF5e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7bWluLWhlaWdodDo1cmVtO21heC1oZWlnaHQ6N3JlbTttYXJnaW46MDtvcGFjaXR5OjA7ei1pbmRleDoxO21peC1ibGVuZC1tb2RlOm11bHRpcGx5O3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5maWxlcG9uZC0taW1hZ2UtcHJldmlldy1vdmVybGF5Om50aC1vZi10eXBlKDIpLC5maWxlcG9uZC0taW1hZ2UtcHJldmlldy1vdmVybGF5Om50aC1vZi10eXBlKDMpe21peC1ibGVuZC1tb2RlOm5vcm1hbH1Ac3VwcG9ydHMgKC13ZWJraXQtbWFycXVlZS1yZXBldGl0aW9uOmluZmluaXRlKSBhbmQgKG9iamVjdC1maXQ6ZmlsbCl7LmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3LW92ZXJsYXl7bWl4LWJsZW5kLW1vZGU6bm9ybWFsfX0uZmlsZXBvbmQtLWltYWdlLXByZXZpZXctd3JhcHBlcntwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDtyaWdodDowO21hcmdpbjowO2JvcmRlci1yYWRpdXM6LjQ1ZW07b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDEpfS5maWxlcG9uZC0taW1hZ2UtcHJldmlld3twb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjE7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDphdXRvO3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO2JhY2tncm91bmQ6IzIyMjt3aWxsLWNoYW5nZTp0cmFuc2Zvcm0sb3BhY2l0eX0uZmlsZXBvbmQtLWltYWdlLXByZXZpZXcgZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjttYXJnaW46MCBhdXRvfS5maWxlcG9uZC0taW1hZ2UtcHJldmlldyBjYW52YXN7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3L2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcubWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImRlcGFydG1lbnRzXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kZWxldGVXaW5kb3csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kZWxldGVXaW5kb3cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRlbGV0ZVdpbmRvd1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcImF0dGVudGlvblwiKSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtZmxleFwiLCB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRlbGV0ZU1zZykpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmRlbGV0ZURlbmllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhZGVsZXRlRGVuaWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVDb25maXJtKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJlcnJvclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNhbmNlbCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjYW5jZWxcIikpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNTAwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRlcGFydG1lbnRDcmVhdGUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kZXBhcnRtZW50Q3JlYXRlID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkZXBhcnRtZW50Q3JlYXRlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcItCd0L7QstC+0LUg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40LVcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVwYXJ0bWVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVwYXJ0bWVudE5hbWUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkZXBhcnRtZW50TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hZGRDb25maXJtKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJlcnJvclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZENhbmNlbCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjYW5jZWxcIikpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1kYXRhLXRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0xXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICBcIml0ZW0ta2V5XCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICBcIm5vLXJlc3VsdHMtdGV4dFwiOiBfdm0uJHQoXCJub19tYXRjaF9mb3VuZFwiKSxcbiAgICAgICAgICAgICAgICBcInJvd3MtcGVyLXBhZ2UtdGV4dFwiOiBfdm0uJHQoXCJzdHJpbmdzXCIpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmlkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZWRpdC1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJldHVybi12YWx1ZVwiOiBwcm9wcy5pdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cmV0dXJuVmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQocHJvcHMuaXRlbSwgXCJ0aXRsZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwcm9wcy5pdGVtLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWxpbmVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0SXRlbShwcm9wcy5pdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5pdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KHByb3BzLml0ZW0sIFwidGl0bGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9wcy5pdGVtLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5nZXRQb3NpdGlvbnMocHJvcHMuaXRlbS5pZCkubGVuZ3RoKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZ2V0RW1wbG95ZWVzKHByb3BzLml0ZW0uaWQpLmxlbmd0aCkpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm14LTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdEl0ZW0ocHJvcHMuaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJ0ZWFsXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVkaXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJteC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUl0ZW0ocHJvcHMuaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJwaW5rXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImRlbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgeyBzbG90OiBcIm5vLWRhdGFcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogdHJ1ZSwgY29sb3I6IFwicmVkXCIsIGljb246IFwid2FybmluZ1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICDQndC10YIg0LTQsNC90L3Ri9GFIDooXFxyXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGVfX2J1dHRvbnNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmFiOiBcIlwiLCBkYXJrOiBcIlwiLCBsYXJnZTogXCJcIiwgY29sb3I6IFwiY3lhblwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlcGFydG1lbnRDcmVhdGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGRhcms6IFwiXCIgfSB9LCBbX3ZtLl92KFwiYWRkXCIpXSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJidXR0b25FbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcImJ1dHRvbkxlYXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IFwib3V0LWluXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWQubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZWxldGUtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmFiOiBcIlwiLCBsYXJnZTogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVEaWFsb2coX3ZtLnNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJkZWxldGVcIildKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtc25hY2tiYXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBfdm0uc25hY2tiYXJUaW1lb3V0LFxuICAgICAgICAgICAgICAgIHRvcDogXCJcIixcbiAgICAgICAgICAgICAgICBcIm11bHRpLWxpbmVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNuYWNrYmFyU2hvdyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc25hY2tiYXJTaG93ID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNuYWNrYmFyU2hvd1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcclxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJkZWxldGVfZG9uZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXHJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicGlua1wiIH0sXG4gICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNuYWNrYmFyU2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMWVlNjczNWRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTFlZTY3MzVkXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMThcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==