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
exports.push([module.i, "\n#departments[data-v-1ee6735d] {\r\n    position: relative;\r\n    width: 90%;\r\n    max-width: 1000px;\r\n    margin: 10px auto;\n}\r\n\r\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/admin/departments/resources/assets/js/pages/admin/departments/List.vue"],"names":[],"mappings":";AA0PA;IACA,mBAAA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n<div id=\"departments\">\r\n  \r\n    <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\r\n        <v-card>\r\n            <v-card-title>\r\n                <span class=\"headline\">{{ $t('attention') }}</span>\r\n            </v-card-title>\r\n            <v-card-text>\r\n                <v-flex xs12>{{deleteMsg}}</v-flex>\r\n            </v-card-text>\r\n            <v-card-actions>\r\n                <v-btn outline color=\"info\" @click.native=\"deleteConfirm\">{{ $t('ok') }}</v-btn>\r\n                <v-btn outline color=\"error\" @click.native=\"deleteCancel\">{{ $t('cancel') }}</v-btn>\r\n            </v-card-actions>\r\n        </v-card>\r\n    </v-dialog>\r\n\r\n    <v-dialog v-model=\"departmentCreate\" max-width=\"500px\">\r\n        <v-card>\r\n            <v-card-title>\r\n                <span class=\"headline\">Новое подразделение</span>\r\n            </v-card-title>\r\n            <v-card-text>\r\n                <v-flex xs12>\r\n                    <v-text-field label=\"Наименование\" v-model=\"departmentName\"></v-text-field>\r\n                </v-flex>\r\n            </v-card-text>\r\n            <v-card-actions>\r\n                <v-btn outline color=\"info\" @click.native=\"addConfirm\">{{ $t('ok') }}</v-btn>\r\n                <v-btn outline color=\"error\" @click.native=\"addCancel\">{{ $t('cancel') }}</v-btn>\r\n            </v-card-actions>\r\n        </v-card>\r\n    </v-dialog>\r\n\r\n    <v-card>\r\n        <v-data-table\r\n            :headers=\"headers\"\r\n            :items=\"items\"\r\n            item-key=\"id\"\r\n            :no-results-text=\"$t('no_match_found')\"\r\n            :rows-per-page-text=\"$t('strings')\"\r\n            class=\"elevation-1\">\r\n            <template slot=\"items\" slot-scope=\"props\">\r\n                <td>{{ props.item.id }}</td>\r\n                <td>\r\n                    <v-edit-dialog\r\n                        :return-value.sync=\"props.item.title\"\r\n                        lazy\r\n                    > {{ props.item.title }}\r\n                        <v-text-field\r\n                            slot=\"input\"\r\n                            label=\"Edit\"\r\n                            v-model=\"props.item.title\"\r\n                            single-line\r\n                            counter\r\n                            @change=\"editItem(props.item)\"\r\n                        ></v-text-field>\r\n                    </v-edit-dialog>\r\n                </td>\r\n                <td>{{ getPositions(props.item.id).length }}</td>\r\n                <td>{{ getEmployees(props.item.id).length }}</td>\r\n                <td>{{ props.item.id }}\r\n                  \r\n                  <!--<v-btn icon class=\"mx-0\" @click=\"editItem(props.item)\">-->\r\n                    <!--<v-icon color=\"teal\">edit</v-icon>-->\r\n                  <!--</v-btn>-->\r\n                  <!--<v-btn icon class=\"mx-0\" @click=\"deleteItem(props.item)\">-->\r\n                    <!--<v-icon color=\"pink\">delete</v-icon>-->\r\n                  <!--</v-btn>-->\r\n                </td>\r\n            </template>\r\n            <template slot=\"no-data\">\r\n              <v-alert :value=\"true\" color=\"red\" icon=\"warning\">\r\n                    Нет данных :(\r\n                </v-alert>\r\n            </template>\r\n        </v-data-table>\r\n        <div class=\"table__buttons\">\r\n            <v-btn fab dark large color=\"cyan\" @click=\"departmentCreate = true\">\r\n                <v-icon dark>add</v-icon>\r\n            </v-btn>\r\n            <transition enter-active-class=\"buttonEnter\" leave-active-class=\"buttonLeave\" mode=\"out-in\">\r\n                <v-btn v-show=\"selected.length > 0\" class=\"delete-btn\" fab large dark @click=\"deleteDialog(selected)\">\r\n                    <v-icon>delete</v-icon>\r\n                </v-btn>\r\n            </transition>\r\n        </div>\r\n        <v-snackbar :timeout=\"snackbarTimeout\" top v-model=\"snackbarShow\" multi-line color=\"info\">\r\n            {{ $t('delete_done') }}\r\n            <v-btn flat color=\"pink\" @click.native=\"snackbarShow = false\">{{ $t('ok') }}</v-btn>\r\n        </v-snackbar>\r\n    </v-card>\r\n</div>\r\n<!--\r\n<file-pond\r\n        name=\"test\"\r\n        ref=\"pond\"\r\n        class-name=\"my-pond\"\r\n        label-idle=\"Перекиньте файлы сюда\"\r\n        labelFileTypeNotAllowed=\"Данный формат не поддерживается\"\r\n        allow-multiple=\"true\"\r\n        accepted-file-types=\"image/jpeg, image/png, application/msword\"\r\n        v-bind:files=\"myFiles\"\r\n        v-on:init=\"handleFilePondInit\"/>\r\n-->\r\n</template>\r\n\r\n<script>\r\n  import { mapActions, mapGetters } from 'vuex';\r\n  import vueFilePond from 'vue-filepond';\r\n  import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';\r\n  import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';\r\n  // Import styles\r\n  import 'filepond/dist/filepond.min.css';\r\n  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';\r\n  \r\n  const FilePond = vueFilePond( FilePondPluginFileValidateType, FilePondPluginImagePreview );\r\n  \r\n  \r\n  export default {\r\n    middleware: ['auth', 'organisation'],\r\n    data: () => ({\r\n       myFiles: ['index.html'],\r\n      //Подробности\r\n      showInfo: false,\r\n      selectedEmployees: [],\r\n      selectedPositions: [],\r\n      // Всплывашки\r\n      snackbarShow: false,\r\n      snackbarTimeout: 10000,\r\n      // Поиск / Выборка\r\n      search: '',\r\n      selected: [],\r\n      dialog: false,\r\n      // Удаление\r\n      deleteWindow: false,\r\n      deleteCategory: null,\r\n      delMode: 'single',\r\n      //Создание\r\n      departmentCreate: false,\r\n      departmentName: '',\r\n      // Заголовки таблицы\r\n      headers: [{\r\n          text: 'Номер',\r\n          align: 'left',\r\n          sortable: false\r\n        },\r\n        {\r\n          text: 'Наименование',\r\n          value: 'name'\r\n        },\r\n        {\r\n          text: 'Должностей',\r\n          value: 'positions'\r\n        },\r\n        {\r\n          text: 'Сотрудников',\r\n          value: 'employees'\r\n        },\r\n        { text: 'Действия',\r\n          value: 'action'\r\n        }\r\n      ]\r\n    }),\r\n    computed: {\r\n      deleteMsg() {\r\n        return (this.selected.length == 1) ? this.$t('delete_item_confirm') :\r\n          this.$t('delete_items_confirm');\r\n      },\r\n      ...mapGetters({\r\n        items: 'departments/departments',\r\n        positions: 'positions/positions',\r\n        employees: 'employees/employees'\r\n      })\r\n    },\r\n    components: {\r\n        FilePond\r\n    },\r\n    methods: {\r\n//      handleFilePondInit: function() {\r\n//        console.log('FilePond has initialized');\r\n//        this.$refs.pond.getFiles();\r\n//      },\r\n      openInfoPanel(id) {\r\n        this.selectedPositions = this.getPositions(id);\r\n        this.selectedEmployees = this.getEmployees(id);\r\n        this.showInfo = true;\r\n      },\r\n      getPositions(id) {\r\n        let positions = [];\r\n\r\n        this.positions.forEach(el => {\r\n          if (el.department_id == id) positions.push(el);\r\n        });\r\n\r\n        return positions;\r\n      },\r\n      getEmployees(id) {\r\n        let employees = [],\r\n          positions = this.getPositions(id);\r\n\r\n        positions.forEach(pos => {\r\n          this.employees.forEach(el => {\r\n            if (el.position_id == pos.id) employees.push(el);\r\n          });\r\n        });\r\n        return employees;\r\n      },\r\n      addConfirm() {\r\n        this.addItem({\r\n          'title': this.departmentName\r\n        });\r\n        this.departmentCreate = false;\r\n      },\r\n      addCancel() {\r\n        this.departmentCreate = false;\r\n      },\r\n      deleteDialog(item) {\r\n        this.deleteWindow = true;\r\n        this.deleteCategory = item;\r\n      },\r\n      deleteConfirm() {\r\n        this.selected.forEach(el => this.deleteItem(el.id));\r\n        this.selected = [];\r\n        this.deleteWindow = false;\r\n        this.editedID = null;\r\n        this.snackbarShow = true;\r\n      },\r\n      deleteCancel() {\r\n        this.deleteCategory = null;\r\n        this.deleteWindow = false;\r\n      },\r\n      close() {\r\n        this.dialog = false;\r\n        this.editedItem = Object.assign({}, this.defaultItem);\r\n        this.editedIndex = -1;\r\n      },\r\n      ...mapActions({\r\n        loadItems: 'departments/load',\r\n        addItem: 'departments/add',\r\n        editItem: 'departments/edit',\r\n        deleteItem: 'departments/remove'\r\n      })\r\n    }\r\n  }\r\n\r\n</script>\r\n\r\n<style scoped>\r\n#departments {\r\n    position: relative;\r\n    width: 90%;\r\n    max-width: 1000px;\r\n    margin: 10px auto;\r\n}\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

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
      return this.selected.length == 1 ? this.$t('delete_item_confirm') : this.$t('delete_items_confirm');
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
                      _c("td", [
                        _vm._v(
                          _vm._s(props.item.id) +
                            "\r\n                  \r\n                  "
                        )
                      ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWU/OTg2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlPzkxMzYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1maWxlcG9uZC9kaXN0L3Z1ZS1maWxlcG9uZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQtcGx1Z2luLWZpbGUtdmFsaWRhdGUtdHlwZS9kaXN0L2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXR5cGUuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5taW4uY3NzP2ZkMmMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGVwb25kL2Rpc3QvZmlsZXBvbmQubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcvZGlzdC9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5taW4uY3NzPzZlNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3L2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlP2JhMjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0Esa0VBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLDBEQUEyRCwyQkFBMkIsbUJBQW1CLDBCQUEwQiwwQkFBMEIsR0FBRyxnQkFBZ0IsMEtBQTBLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyx1UEFBdVAsbUJBQW1CLHNHQUFzRyxXQUFXLDJKQUEySixZQUFZLDRGQUE0RixnQkFBZ0IsaW9CQUFpb0IsWUFBWSx5RkFBeUYsZ0JBQWdCLDZjQUE2YyxpQkFBaUIsa01BQWtNLG9CQUFvQiwwZEFBMGQsc0NBQXNDLCtCQUErQixzQ0FBc0MsK0JBQStCLGlCQUFpQiw2MkNBQTYyQyxxQkFBcUIsb0ZBQW9GLFlBQVksa2hCQUFraEIseUJBQXlCLGFBQWEsNkNBQTZDLHFJQUFxSSx1SEFBdUgsb0VBQW9FLHdGQUF3Rix1R0FBdUcsa0NBQWtDLG1FQUFtRSw4akJBQThqQixrR0FBa0csY0FBYywyRUFBMkUsY0FBYyw4RUFBOEUsY0FBYywrRUFBK0UsY0FBYyw0REFBNEQsb0JBQW9CLHFCQUFxQix1QkFBdUIsK0hBQStILFdBQVcsMEJBQTBCLGlKQUFpSixVQUFVLHNCQUFzQiw2QkFBNkIsbUJBQW1CLDRDQUE0QyxzREFBc0QseUNBQXlDLGFBQWEsOEJBQThCLDJEQUEyRCwyREFBMkQsaUNBQWlDLFdBQVcsNkJBQTZCLCtCQUErQiw4Q0FBOEMsNkRBQTZELGFBQWEsRUFBRSxpQ0FBaUMsV0FBVyw2QkFBNkIsK0VBQStFLDBDQUEwQyw0Q0FBNEMsaUVBQWlFLGVBQWUsRUFBRSxhQUFhLEVBQUUsNkJBQTZCLFdBQVcseUJBQXlCLDBCQUEwQix1REFBdUQsRUFBRSwwQ0FBMEMsV0FBVyx3QkFBd0IsMENBQTBDLFdBQVcsK0JBQStCLHFDQUFxQyx1Q0FBdUMsV0FBVyw0QkFBNEIsZ0VBQWdFLCtCQUErQixzQ0FBc0MsaUNBQWlDLHFDQUFxQyxXQUFXLDJCQUEyQix1Q0FBdUMsc0NBQXNDLFdBQVcsb0JBQW9CLGdDQUFnQyw4Q0FBOEMsb0JBQW9CLGtDQUFrQyxXQUFXLDBCQUEwQixpTEFBaUwsVUFBVSxPQUFPLHlEQUF5RCwyQkFBMkIsbUJBQW1CLDBCQUEwQiwwQkFBMEIsS0FBSyx1Q0FBdUM7O0FBRXh6Uzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNzR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O3dNQUdBOzs7dUJBRUE7OztnQkFFQTtBQUNBO2dCQUNBO3lCQUNBO3lCQUNBO0FBQ0E7b0JBQ0E7dUJBQ0E7QUFDQTtjQUNBO2dCQUNBO2NBQ0E7QUFDQTtvQkFDQTtzQkFDQTtlQUNBO0FBQ0E7d0JBQ0E7c0JBQ0E7QUFDQTs7Y0FFQTtlQUNBO2tCQUVBO0FBSkE7Y0FNQTtlQUVBO0FBSEE7Y0FLQTtlQUVBO0FBSEE7Y0FLQTtlQUVBO0FBSEEsaUJBSUE7ZUFJQTs7QUExQ0E7O0FBMkNBO29DQUNBO2lEQUNBLGlDQUNBO0FBQ0E7O1dBRUE7ZUFDQTtlQUdBO0FBTEE7O0FBUUE7QUFGQTs7QUFHQTtBQUNBO0FBQ0E7QUFFQTs4Q0FDQTtpREFDQTtpREFDQTtzQkFDQTtBQUNBOzRDQUNBO3NCQUVBOzsyQ0FDQTttREFDQTtBQUVBOzthQUNBO0FBQ0E7O0FBQ0E7O3NCQUNBO3dDQUVBOzt1Q0FDQTs4Q0FDQTt1REFDQTtBQUNBO0FBQ0E7YUFDQTtBQUNBO3NDQUNBOztzQkFHQTtBQUZBOzhCQUdBO0FBQ0E7b0NBQ0E7OEJBQ0E7QUFDQTs4Q0FDQTswQkFDQTs0QkFDQTtBQUNBOztBQUNBOzs7b0NBQ0E7O3NCQUNBOzBCQUNBO3NCQUNBOzBCQUNBO0FBQ0E7MENBQ0E7NEJBQ0E7MEJBQ0E7QUFDQTs0QkFDQTtvQkFDQTsrQ0FDQTswQkFDQTtBQUNBOztlQUVBO2FBQ0E7Y0FDQTtnQkFHQTtBQU5BO0FBdEhBLEc7Ozs7Ozs7O0FDekhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsYUFBYTtBQUNoRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsSUFBSTs7QUFFakI7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7O0FDMUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLGdCQUFnQjtBQUMvRDs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsMENBQTBDO0FBQzFDLDBDQUEwQztBQUMxQyxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDZDQUE2QztBQUM3QztBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw2Q0FBNkM7QUFDN0M7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0YsRUFBRSxlQUFlLHNCQUFzQjtBQUN2QyxFQUFFLGVBQWUsS0FBSyxzQkFBc0IsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQiw4Q0FBOEM7QUFDekUsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsOEJBQThCLG9CQUFvQjtBQUNsRCxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLHVDQUF1Qyw0QkFBNEI7QUFDbkU7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixtQkFBbUI7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMsd0JBQXdCLDJCQUEyQjtBQUMvRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLDBDQUEwQztBQUMxQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU0sRUFBRSxrQ0FBa0MsT0FBTyw2RUFBNkU7QUFDL0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx3QkFBd0Isd0JBQXdCO0FBQ2hELG1CQUFtQixtQkFBbUI7QUFDdEMsbUJBQW1CLG1CQUFtQjtBQUN0QyxlQUFlLGVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0Esb0RBQW9EO0FBQ3BELFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0EsNERBQTREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBLCtEQUErRDtBQUMvRDtBQUNBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQywyQkFBMkI7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQsU0FBUzs7QUFFVDtBQUNBLDRDQUE0QyxTQUFTO0FBQ3JELFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTOztBQUVUO0FBQ0Esd0RBQXdELFVBQVUsU0FBUztBQUMzRSxTQUFTOztBQUVUO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0MsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxlQUFlO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLGlEQUFpRCxTQUFTO0FBQzFELFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQsV0FBVztBQUNYO0FBQ0EsbURBQW1ELFNBQVM7QUFDNUQ7O0FBRUE7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRCxXQUFXO0FBQ1gsb0RBQW9ELFNBQVM7QUFDN0Q7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxlQUFlO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsY0FBYztBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUEsaURBQWlELFNBQVM7O0FBRTFELGtDQUFrQyxjQUFjO0FBQ2hELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLG1CQUFtQiwwQ0FBMEM7QUFDN0QsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMscUJBQXFCOztBQUUxRDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCOztBQUV0RDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0JBQStCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLHNCQUFzQixpQkFBaUIsRUFBRTtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtCQUErQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixhQUFhO0FBQ3ZDLDBCQUEwQixhQUFhO0FBQ3ZDLHVCQUF1QixhQUFhO0FBQ3BDLHdCQUF3QixhQUFhO0FBQ3JDLGdDQUFnQyxhQUFhO0FBQzdDLGdDQUFnQyxhQUFhO0FBQzdDLGlDQUFpQyxhQUFhO0FBQzlDLDRCQUE0QixhQUFhO0FBQ3pDLCtCQUErQixhQUFhO0FBQzVDLGtDQUFrQyx5Q0FBeUM7QUFDM0UsV0FBVywyQ0FBMkM7QUFDdEQsYUFBYTtBQUNiOztBQUVBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEMsd0JBQXdCLGFBQWE7QUFDckMsV0FBVyxzQ0FBc0M7QUFDakQsYUFBYTtBQUNiOztBQUVBO0FBQ0EsZ0NBQWdDLGFBQWE7QUFDN0MsK0JBQStCLGFBQWE7QUFDNUMsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsYUFBYTtBQUN0QyxhQUFhLHNDQUFzQztBQUNuRCxlQUFlO0FBQ2YsS0FBSztBQUNMO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekMsOEJBQThCLGFBQWE7QUFDM0MsZUFBZTtBQUNmLEtBQUs7QUFDTDtBQUNBLDRCQUE0QixhQUFhO0FBQ3pDLHlCQUF5QixhQUFhO0FBQ3RDLGFBQWEsc0NBQXNDO0FBQ25ELGVBQWU7QUFDZixLQUFLO0FBQ0w7QUFDQTtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDLGFBQWEsc0NBQXNDO0FBQ25ELGVBQWU7QUFDZixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsYUFBYTtBQUNoRCxhQUFhLGFBQWE7QUFDMUIsZUFBZTtBQUNmLEtBQUs7QUFDTDtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDLGtDQUFrQyxhQUFhO0FBQy9DLGVBQWUsYUFBYTtBQUM1QixhQUFhO0FBQ2IsS0FBSztBQUNMO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEMsMEJBQTBCLGFBQWE7QUFDdkMsYUFBYSxzQ0FBc0M7QUFDbkQsZUFBZTtBQUNmLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsa0JBQWtCO0FBQzVELE9BQU87O0FBRVA7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHNDQUFzQyxlQUFlO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsZUFBZTtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsYUFBYTtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsNkNBQTZDOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVMsYUFBYTtBQUNuRSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxlQUFlO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNkNBQTZDLFNBQVMsYUFBYTtBQUNuRSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUgsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxlQUFlO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMscUJBQXFCO0FBQ3hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDZDQUE2Qzs7QUFFMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSw2Q0FBNkM7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0JBQStCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGFBQWE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSw2Q0FBNkM7O0FBRTFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsbURBQW1EO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxrQ0FBa0M7QUFDbEMsNENBQTRDO0FBQzVDLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCxVQUFVLG1CQUFtQjtBQUM5RTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLG1CQUFtQjtBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLHFCQUFxQjtBQUN4RDs7QUFFQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsNkNBQTZDOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVCxtQ0FBbUMscUJBQXFCOztBQUV4RCx1Q0FBdUMscUJBQXFCO0FBQzVEOztBQUVBO0FBQ0EseUNBQXlDLHFCQUFxQjtBQUM5RDs7QUFFQTtBQUNBLG1DQUFtQyxxQkFBcUI7QUFDeEQsT0FBTzs7QUFFUDtBQUNBLHVDQUF1QyxxQkFBcUI7QUFDNUQ7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQywwQkFBMEI7O0FBRTdEO0FBQ0EsNEJBQTRCLG9CQUFvQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsZ0JBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQseUJBQXlCLEVBQUU7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBbUI7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLGVBQWU7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUFJOztBQUVYO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLElBQUk7QUFDL0IsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSwrQkFBK0IsU0FBUztBQUN4QztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdELGNBQWM7QUFDOUQsQ0FBQzs7Ozs7Ozs7O0FDNWlRRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxnRUFBZ0U7QUFDaEUsZ0RBQWdEO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHlDQUF5QyxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDLG1CQUFtQjtBQUNqRTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGNBQWM7QUFDNUI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGdDQUFnQyxzQkFBc0I7QUFDdEQsZUFBZSxLQUFLOztBQUVwQjtBQUNBLDZDQUE2QyxlQUFlOztBQUU1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsc0JBQXNCO0FBQ25ELDhCQUE4Qix1QkFBdUI7QUFDckQ7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixrQkFBa0I7QUFDL0MsOEJBQThCLG1CQUFtQjtBQUNqRCwyQ0FBMkMsY0FBYyxNQUFNO0FBQy9EO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsS0FBSztBQUN0RDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGNBQWM7QUFDNUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUNBQW1DO0FBQzNELEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBLHdDQUF3QyxJQUFJLElBQUksa0JBQWtCO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVELFdBQVcsZUFBZTtBQUMxQixXQUFXLHNDQUFzQztBQUNqRCxXQUFXLEtBQUs7O0FBRWhCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDLFdBQVcsUUFBUTs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsT0FBTztBQUNqQztBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLE9BQU87QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQkFBbUI7QUFDNUIsU0FBUyxvQkFBb0I7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLHVCQUF1QjtBQUNqRCxhQUFhLEtBQUs7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxLQUFLO0FBQ3JEOztBQUVBO0FBQ0EsMkRBQTJELEtBQUs7QUFDaEU7O0FBRUEsc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBLDJDQUEyQyxlQUFlOztBQUUxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxtQkFBbUI7QUFDakU7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN6bkJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3pCQTtBQUNBOzs7QUFHQTtBQUNBLDhMQUErTCxrQkFBa0IsZ0JBQWdCLFdBQVcsVUFBVSxVQUFVLFNBQVMsMkJBQTJCLDZCQUE2QixxQkFBcUIsbUJBQW1CLG1CQUFtQixrQkFBa0IsU0FBUyxVQUFVLFNBQVMsV0FBVyx1QkFBdUIsVUFBVSxZQUFZLGdCQUFnQixrQkFBa0IsTUFBTSxPQUFPLFFBQVEsU0FBUyxnQkFBZ0IsV0FBVyxvQkFBb0IsbUJBQW1CLDJCQUEyQixxQkFBcUIsdUNBQXVDLCtCQUErQixPQUFPLFVBQVUsV0FBVyxpQkFBaUIsZ0JBQWdCLG1CQUFtQixrQkFBa0IsMkNBQTJDLGtCQUFrQixNQUFNLDhCQUE4QixzQkFBc0IsU0FBUyxVQUFVLGVBQWUsY0FBYyw0QkFBNEIsY0FBYyxjQUFjLFNBQVMsZUFBZSxpQkFBaUIsZ0JBQWdCLGtCQUFrQixnQkFBZ0Isd0JBQXdCLDBCQUEwQixpQ0FBaUMseUJBQXlCLHNDQUFzQyw4QkFBOEIsZUFBZSw4QkFBOEIsY0FBYyxjQUFjLGVBQWUsWUFBWSxvQkFBb0Isb0JBQW9CLFNBQVMsVUFBVSxZQUFZLFdBQVcsYUFBYSxrQkFBa0IsZ0NBQWdDLHNCQUFzQiw4QkFBOEIscUNBQXFDLG1DQUFtQyxrQ0FBa0MsV0FBVyxZQUFZLHdFQUF3RSwyQ0FBMkMscUJBQXFCLGdCQUFnQixvQkFBb0IsYUFBYSwwQkFBMEIsc0JBQXNCLHFCQUFxQix1QkFBdUIsV0FBVyxPQUFPLGtCQUFrQixZQUFZLDhCQUE4QixvQkFBb0IseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLHVCQUF1QixTQUFTLCtDQUErQyxnQkFBZ0IsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsbUJBQW1CLFdBQVcsOENBQThDLGlCQUFpQixXQUFXLG9DQUFvQyxvREFBb0QsYUFBYSx1QkFBdUIsZ0JBQWdCLG9CQUFvQixhQUFhLDBCQUEwQixzQkFBc0IsbUJBQW1CLHFCQUFxQixvQkFBb0IsWUFBWSxvQkFBb0IsY0FBYyxTQUFTLGlCQUFpQixpQkFBaUIsOEJBQThCLG9CQUFvQix5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIseUJBQXlCLFNBQVMsbUJBQW1CLG1EQUFtRCxnQkFBZ0IsZ0JBQWdCLGtEQUFrRCxpQkFBaUIsV0FBVyxvQ0FBb0Msd0JBQXdCLFlBQVksU0FBUyxVQUFVLFlBQVksWUFBWSwrQkFBK0Isa0JBQWtCLGdCQUFnQixXQUFXLFVBQVUsVUFBVSxTQUFTLDJCQUEyQiw2QkFBNkIscUJBQXFCLG1CQUFtQixnQkFBZ0IsZ0JBQWdCLG9CQUFvQixhQUFhLFlBQVkscUJBQXFCLHVCQUF1QixnQkFBZ0IsV0FBVyxtQkFBbUIsdUNBQXVDLGlCQUFpQixvQkFBb0IseURBQXlELG9CQUFvQix5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsVUFBVSx1R0FBdUcsa0JBQWtCLDhDQUE4QyxrQkFBa0IsVUFBVSxZQUFZLDhDQUE4QyxhQUFhLDBJQUEwSSxjQUFjLDBLQUEwSyxvQkFBb0IsNEZBQTRGLDZDQUE2QyxxQ0FBcUMsa0pBQWtKLFVBQVUsZ1JBQWdSLFdBQVcsOE5BQThOLHlDQUF5QyxpQ0FBaUMsbUVBQW1FLDBDQUEwQyxrQ0FBa0Msd0JBQXdCLEdBQUcsK0JBQStCLHVCQUF1QixHQUFHLGdDQUFnQyx5QkFBeUIsZ0JBQWdCLEdBQUcsK0JBQStCLHVCQUF1QixHQUFHLGdDQUFnQyx5QkFBeUIseUJBQXlCLFFBQVEsdUNBQXVDLCtCQUErQixRQUFRLHFDQUFxQyw2QkFBNkIsWUFBWSxxQ0FBcUMsNkJBQTZCLFFBQVEsb0NBQW9DLDZCQUE2QixpQkFBaUIsUUFBUSx1Q0FBdUMsK0JBQStCLFFBQVEscUNBQXFDLDZCQUE2QixZQUFZLHFDQUFxQyw2QkFBNkIsUUFBUSxvQ0FBb0MsNkJBQTZCLHdCQUF3QixHQUFHLFVBQVUsNEJBQTRCLG9CQUFvQiwyQ0FBMkMsbUNBQW1DLElBQUksVUFBVSw2QkFBNkIscUJBQXFCLDhDQUE4QyxzQ0FBc0MsR0FBRywyQkFBMkIsbUJBQW1CLDJDQUEyQyxvQ0FBb0MsZ0JBQWdCLEdBQUcsVUFBVSw0QkFBNEIsb0JBQW9CLDJDQUEyQyxtQ0FBbUMsSUFBSSxVQUFVLDZCQUE2QixxQkFBcUIsOENBQThDLHNDQUFzQyxHQUFHLDJCQUEyQixtQkFBbUIsMkNBQTJDLG9DQUFvQyxpREFBaUQsb0JBQW9CLDhCQUE4QixZQUFZLDhCQUE4QixZQUFZLHVCQUF1QixZQUFZLHFCQUFxQixZQUFZLGdCQUFnQixrQkFBa0IsTUFBTSxPQUFPLFFBQVEsVUFBVSxnQkFBZ0IsOEJBQThCLGlDQUFpQyxVQUFVLHlEQUF5RCxxREFBcUQsd0NBQXdDLGtCQUFrQixVQUFVLHNCQUFzQix5QkFBeUIscUVBQXFFLHlCQUF5QixrSEFBa0gseUJBQXlCLHNCQUFzQixtQkFBbUIsaUNBQWlDLHlCQUF5QixrQkFBa0IsTUFBTSxPQUFPLFFBQVEsU0FBUyxzQkFBc0IsOENBQThDLGtCQUFrQixtQkFBbUIsaUNBQWlDLDhEQUE4RCxTQUFTLFFBQVEsNENBQTRDLHVCQUF1QixxREFBcUQsVUFBVSx1REFBdUQsU0FBUyxrREFBa0QsZ0NBQWdDLHNCQUFzQixpQ0FBaUMsNEJBQTRCLGdCQUFnQixrQkFBa0IsTUFBTSxTQUFTLFVBQVUsU0FBUyxVQUFVLHFCQUFxQixzQkFBc0Isc0JBQXNCLG1CQUFtQix5QkFBeUIsaUJBQWlCLGtCQUFrQixPQUFPLE1BQU0sUUFBUSxTQUFTLHNCQUFzQixvQkFBb0IscUNBQXFDLG9DQUFvQyw0QkFBNEIsdUNBQXVDLHNCQUFzQixzQ0FBc0MsU0FBUywwQ0FBMEMsYUFBYSxxRUFBcUUsa0JBQWtCLE9BQU8sTUFBTSxRQUFRLFNBQVMsVUFBVSw2Q0FBNkMsWUFBWSxxQkFBcUIsc0NBQXNDLHVDQUF1Qyw2QkFBNkIsMkJBQTJCLGFBQWEsa0JBQWtCLFdBQVcsT0FBTyxRQUFRLFlBQVkseUJBQXlCLGdEQUFnRCxzQkFBc0IsbUNBQW1DLDJCQUEyQixrQ0FBa0MsMEJBQTBCLHdDQUF3QyxnQ0FBZ0Msd0JBQXdCLG1DQUFtQyxvQ0FBb0MsMEJBQTBCLCtCQUErQixhQUFhLGtCQUFrQixXQUFXLE9BQU8sUUFBUSxTQUFTLHlCQUF5Qix3QkFBd0IsdUJBQXVCLDBCQUEwQiw2QkFBNkIsMEJBQTBCLHFDQUFxQyxrQkFBa0IsOEJBQThCLGdCQUFnQixhQUFhLGNBQWMsV0FBVyxTQUFTLG9CQUFvQiw4QkFBOEIsa0NBQWtDLFdBQVcsWUFBWSxtQ0FBbUMsVUFBVSxvQkFBb0IseUJBQXlCLFVBQVUsc0JBQXNCLFVBQVUsZ0JBQWdCLFVBQVUsaUNBQWlDLFVBQVUsbUJBQW1CLFVBQVUsZ0JBQWdCLHNCQUFzQixrQkFBa0Isa0JBQWtCLGdCQUFnQixlQUFlLG1CQUFtQix3RkFBd0YsZ0JBQWdCLGdCQUFnQixrQ0FBa0MsY0FBYywwQkFBMEIsa0JBQWtCLGtCQUFrQixtQkFBbUIsb0JBQW9COztBQUUzcFc7Ozs7Ozs7O0FDUEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDekJBO0FBQ0E7OztBQUdBO0FBQ0EsNE5BQTZOLFVBQVUsaUNBQWlDLGNBQWMsa0JBQWtCLE9BQU8sTUFBTSxXQUFXLGdCQUFnQixnQkFBZ0IsU0FBUyxVQUFVLFVBQVUsd0JBQXdCLG9CQUFvQix5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsZ0dBQWdHLHNCQUFzQixzRUFBc0UsaUNBQWlDLHVCQUF1QixpQ0FBaUMsb0JBQW9CLGtCQUFrQixPQUFPLE1BQU0sUUFBUSxTQUFTLG9CQUFvQixnQkFBZ0IsMkJBQTJCLHlCQUF5QixrQkFBa0IsVUFBVSxjQUFjLFdBQVcsWUFBWSxvQkFBb0IsdUNBQXVDLCtCQUErQixnQkFBZ0IsOEJBQThCLDZCQUE2QixrQkFBa0IsZ0JBQWdCLGNBQWMsZ0NBQWdDLGtCQUFrQixPQUFPLE1BQU0sc0JBQXNCOztBQUUxeEM7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLG9CQUFvQixFQUFFO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFNBQVMsV0FBVyxFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2QkFBNkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOEJBQThCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLFdBQVcsRUFBRTtBQUMzQztBQUNBO0FBQ0EsZ0NBQWdDLHdCQUF3QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDZCQUE2QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw4QkFBOEI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUyw2Q0FBNkMsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdDQUFnQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4Q0FBOEM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiwrQkFBK0IsU0FBUyxXQUFXLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwrQkFBK0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMEJBQTBCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8yLjlmM2U3NjYzNTVkZWYzNjUzNTlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWU2NzM1ZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWU2NzM1ZFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTGlzdC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTFlZTY3MzVkXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZGVwYXJ0bWVudHNcXFxcTGlzdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWVlNjczNWRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xZWU2NzM1ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWU2NzM1ZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIwMzc3MmYxOFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWVlNjczNWRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWU2NzM1ZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTFlZTY3MzVkXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI2RlcGFydG1lbnRzW2RhdGEtdi0xZWU2NzM1ZF0ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9jcm0vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEwUEE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0NBQ0FcIixcImZpbGVcIjpcIkxpc3QudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG48ZGl2IGlkPVxcXCJkZXBhcnRtZW50c1xcXCI+XFxyXFxuICBcXHJcXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XFxcImRlbGV0ZVdpbmRvd1xcXCIgbWF4LXdpZHRoPVxcXCI1MDBweFxcXCI+XFxyXFxuICAgICAgICA8di1jYXJkPlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkbGluZVxcXCI+e3sgJHQoJ2F0dGVudGlvbicpIH19PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgICAgICAgPHYtZmxleCB4czEyPnt7ZGVsZXRlTXNnfX08L3YtZmxleD5cXHJcXG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImluZm9cXFwiIEBjbGljay5uYXRpdmU9XFxcImRlbGV0ZUNvbmZpcm1cXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImVycm9yXFxcIiBAY2xpY2submF0aXZlPVxcXCJkZWxldGVDYW5jZWxcXFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgIDwvdi1jYXJkPlxcclxcbiAgICA8L3YtZGlhbG9nPlxcclxcblxcclxcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwiZGVwYXJ0bWVudENyZWF0ZVxcXCIgbWF4LXdpZHRoPVxcXCI1MDBweFxcXCI+XFxyXFxuICAgICAgICA8di1jYXJkPlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkbGluZVxcXCI+0J3QvtCy0L7QtSDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgICA8di1jYXJkLXRleHQ+XFxyXFxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XFxcItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtVxcXCIgdi1tb2RlbD1cXFwiZGVwYXJ0bWVudE5hbWVcXFwiPjwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cXHJcXG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxcclxcbiAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImluZm9cXFwiIEBjbGljay5uYXRpdmU9XFxcImFkZENvbmZpcm1cXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImVycm9yXFxcIiBAY2xpY2submF0aXZlPVxcXCJhZGRDYW5jZWxcXFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICAgIDwvdi1jYXJkPlxcclxcbiAgICA8L3YtZGlhbG9nPlxcclxcblxcclxcbiAgICA8di1jYXJkPlxcclxcbiAgICAgICAgPHYtZGF0YS10YWJsZVxcclxcbiAgICAgICAgICAgIDpoZWFkZXJzPVxcXCJoZWFkZXJzXFxcIlxcclxcbiAgICAgICAgICAgIDppdGVtcz1cXFwiaXRlbXNcXFwiXFxyXFxuICAgICAgICAgICAgaXRlbS1rZXk9XFxcImlkXFxcIlxcclxcbiAgICAgICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XFxcIiR0KCdub19tYXRjaF9mb3VuZCcpXFxcIlxcclxcbiAgICAgICAgICAgIDpyb3dzLXBlci1wYWdlLXRleHQ9XFxcIiR0KCdzdHJpbmdzJylcXFwiXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImVsZXZhdGlvbi0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiaXRlbXNcXFwiIHNsb3Qtc2NvcGU9XFxcInByb3BzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7IHByb3BzLml0ZW0uaWQgfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8di1lZGl0LWRpYWxvZ1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpyZXR1cm4tdmFsdWUuc3luYz1cXFwicHJvcHMuaXRlbS50aXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXp5XFxyXFxuICAgICAgICAgICAgICAgICAgICA+IHt7IHByb3BzLml0ZW0udGl0bGUgfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q9XFxcImlucHV0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwiRWRpdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicHJvcHMuaXRlbS50aXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlLWxpbmVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlclxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVxcXCJlZGl0SXRlbShwcm9wcy5pdGVtKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3YtZWRpdC1kaWFsb2c+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57eyBnZXRQb3NpdGlvbnMocHJvcHMuaXRlbS5pZCkubGVuZ3RoIH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7IGdldEVtcGxveWVlcyhwcm9wcy5pdGVtLmlkKS5sZW5ndGggfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5pZCB9fVxcclxcbiAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgIDwhLS08di1idG4gaWNvbiBjbGFzcz1cXFwibXgtMFxcXCIgQGNsaWNrPVxcXCJlZGl0SXRlbShwcm9wcy5pdGVtKVxcXCI+LS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tPHYtaWNvbiBjb2xvcj1cXFwidGVhbFxcXCI+ZWRpdDwvdi1pY29uPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgIDwhLS08L3YtYnRuPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgIDwhLS08di1idG4gaWNvbiBjbGFzcz1cXFwibXgtMFxcXCIgQGNsaWNrPVxcXCJkZWxldGVJdGVtKHByb3BzLml0ZW0pXFxcIj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS08di1pY29uIGNvbG9yPVxcXCJwaW5rXFxcIj5kZWxldGU8L3YtaWNvbj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgICA8IS0tPC92LWJ0bj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJuby1kYXRhXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDx2LWFsZXJ0IDp2YWx1ZT1cXFwidHJ1ZVxcXCIgY29sb3I9XFxcInJlZFxcXCIgaWNvbj1cXFwid2FybmluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICDQndC10YIg0LTQsNC90L3Ri9GFIDooXFxyXFxuICAgICAgICAgICAgICAgIDwvdi1hbGVydD5cXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgPC92LWRhdGEtdGFibGU+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZV9fYnV0dG9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgPHYtYnRuIGZhYiBkYXJrIGxhcmdlIGNvbG9yPVxcXCJjeWFuXFxcIiBAY2xpY2s9XFxcImRlcGFydG1lbnRDcmVhdGUgPSB0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtaWNvbiBkYXJrPmFkZDwvdi1pY29uPlxcclxcbiAgICAgICAgICAgIDwvdi1idG4+XFxyXFxuICAgICAgICAgICAgPHRyYW5zaXRpb24gZW50ZXItYWN0aXZlLWNsYXNzPVxcXCJidXR0b25FbnRlclxcXCIgbGVhdmUtYWN0aXZlLWNsYXNzPVxcXCJidXR0b25MZWF2ZVxcXCIgbW9kZT1cXFwib3V0LWluXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHYtYnRuIHYtc2hvdz1cXFwic2VsZWN0ZWQubGVuZ3RoID4gMFxcXCIgY2xhc3M9XFxcImRlbGV0ZS1idG5cXFwiIGZhYiBsYXJnZSBkYXJrIEBjbGljaz1cXFwiZGVsZXRlRGlhbG9nKHNlbGVjdGVkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8di1pY29uPmRlbGV0ZTwvdi1pY29uPlxcclxcbiAgICAgICAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPHYtc25hY2tiYXIgOnRpbWVvdXQ9XFxcInNuYWNrYmFyVGltZW91dFxcXCIgdG9wIHYtbW9kZWw9XFxcInNuYWNrYmFyU2hvd1xcXCIgbXVsdGktbGluZSBjb2xvcj1cXFwiaW5mb1xcXCI+XFxyXFxuICAgICAgICAgICAge3sgJHQoJ2RlbGV0ZV9kb25lJykgfX1cXHJcXG4gICAgICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cXFwicGlua1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwic25hY2tiYXJTaG93ID0gZmFsc2VcXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgIDwvdi1zbmFja2Jhcj5cXHJcXG4gICAgPC92LWNhcmQ+XFxyXFxuPC9kaXY+XFxyXFxuPCEtLVxcclxcbjxmaWxlLXBvbmRcXHJcXG4gICAgICAgIG5hbWU9XFxcInRlc3RcXFwiXFxyXFxuICAgICAgICByZWY9XFxcInBvbmRcXFwiXFxyXFxuICAgICAgICBjbGFzcy1uYW1lPVxcXCJteS1wb25kXFxcIlxcclxcbiAgICAgICAgbGFiZWwtaWRsZT1cXFwi0J/QtdGA0LXQutC40L3RjNGC0LUg0YTQsNC50LvRiyDRgdGO0LTQsFxcXCJcXHJcXG4gICAgICAgIGxhYmVsRmlsZVR5cGVOb3RBbGxvd2VkPVxcXCLQlNCw0L3QvdGL0Lkg0YTQvtGA0LzQsNGCINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRj1xcXCJcXHJcXG4gICAgICAgIGFsbG93LW11bHRpcGxlPVxcXCJ0cnVlXFxcIlxcclxcbiAgICAgICAgYWNjZXB0ZWQtZmlsZS10eXBlcz1cXFwiaW1hZ2UvanBlZywgaW1hZ2UvcG5nLCBhcHBsaWNhdGlvbi9tc3dvcmRcXFwiXFxyXFxuICAgICAgICB2LWJpbmQ6ZmlsZXM9XFxcIm15RmlsZXNcXFwiXFxyXFxuICAgICAgICB2LW9uOmluaXQ9XFxcImhhbmRsZUZpbGVQb25kSW5pdFxcXCIvPlxcclxcbi0tPlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gIGltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcXHJcXG4gIGltcG9ydCB2dWVGaWxlUG9uZCBmcm9tICd2dWUtZmlsZXBvbmQnO1xcclxcbiAgaW1wb3J0IEZpbGVQb25kUGx1Z2luRmlsZVZhbGlkYXRlVHlwZSBmcm9tICdmaWxlcG9uZC1wbHVnaW4tZmlsZS12YWxpZGF0ZS10eXBlL2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWZpbGUtdmFsaWRhdGUtdHlwZS5lc20uanMnO1xcclxcbiAgaW1wb3J0IEZpbGVQb25kUGx1Z2luSW1hZ2VQcmV2aWV3IGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3L2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcuZXNtLmpzJztcXHJcXG4gIC8vIEltcG9ydCBzdHlsZXNcXHJcXG4gIGltcG9ydCAnZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5taW4uY3NzJztcXHJcXG4gIGltcG9ydCAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcvZGlzdC9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5taW4uY3NzJztcXHJcXG4gIFxcclxcbiAgY29uc3QgRmlsZVBvbmQgPSB2dWVGaWxlUG9uZCggRmlsZVBvbmRQbHVnaW5GaWxlVmFsaWRhdGVUeXBlLCBGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlldyApO1xcclxcbiAgXFxyXFxuICBcXHJcXG4gIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgbWlkZGxld2FyZTogWydhdXRoJywgJ29yZ2FuaXNhdGlvbiddLFxcclxcbiAgICBkYXRhOiAoKSA9PiAoe1xcclxcbiAgICAgICBteUZpbGVzOiBbJ2luZGV4Lmh0bWwnXSxcXHJcXG4gICAgICAvL9Cf0L7QtNGA0L7QsdC90L7RgdGC0LhcXHJcXG4gICAgICBzaG93SW5mbzogZmFsc2UsXFxyXFxuICAgICAgc2VsZWN0ZWRFbXBsb3llZXM6IFtdLFxcclxcbiAgICAgIHNlbGVjdGVkUG9zaXRpb25zOiBbXSxcXHJcXG4gICAgICAvLyDQktGB0L/Qu9GL0LLQsNGI0LrQuFxcclxcbiAgICAgIHNuYWNrYmFyU2hvdzogZmFsc2UsXFxyXFxuICAgICAgc25hY2tiYXJUaW1lb3V0OiAxMDAwMCxcXHJcXG4gICAgICAvLyDQn9C+0LjRgdC6IC8g0JLRi9Cx0L7RgNC60LBcXHJcXG4gICAgICBzZWFyY2g6ICcnLFxcclxcbiAgICAgIHNlbGVjdGVkOiBbXSxcXHJcXG4gICAgICBkaWFsb2c6IGZhbHNlLFxcclxcbiAgICAgIC8vINCj0LTQsNC70LXQvdC40LVcXHJcXG4gICAgICBkZWxldGVXaW5kb3c6IGZhbHNlLFxcclxcbiAgICAgIGRlbGV0ZUNhdGVnb3J5OiBudWxsLFxcclxcbiAgICAgIGRlbE1vZGU6ICdzaW5nbGUnLFxcclxcbiAgICAgIC8v0KHQvtC30LTQsNC90LjQtVxcclxcbiAgICAgIGRlcGFydG1lbnRDcmVhdGU6IGZhbHNlLFxcclxcbiAgICAgIGRlcGFydG1lbnROYW1lOiAnJyxcXHJcXG4gICAgICAvLyDQl9Cw0LPQvtC70L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcXHJcXG4gICAgICBoZWFkZXJzOiBbe1xcclxcbiAgICAgICAgICB0ZXh0OiAn0J3QvtC80LXRgCcsXFxyXFxuICAgICAgICAgIGFsaWduOiAnbGVmdCcsXFxyXFxuICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHtcXHJcXG4gICAgICAgICAgdGV4dDogJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtScsXFxyXFxuICAgICAgICAgIHZhbHVlOiAnbmFtZSdcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB7XFxyXFxuICAgICAgICAgIHRleHQ6ICfQlNC+0LvQttC90L7RgdGC0LXQuScsXFxyXFxuICAgICAgICAgIHZhbHVlOiAncG9zaXRpb25zJ1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHtcXHJcXG4gICAgICAgICAgdGV4dDogJ9Ch0L7RgtGA0YPQtNC90LjQutC+0LInLFxcclxcbiAgICAgICAgICB2YWx1ZTogJ2VtcGxveWVlcydcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICB7IHRleHQ6ICfQlNC10LnRgdGC0LLQuNGPJyxcXHJcXG4gICAgICAgICAgdmFsdWU6ICdhY3Rpb24nXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgXVxcclxcbiAgICB9KSxcXHJcXG4gICAgY29tcHV0ZWQ6IHtcXHJcXG4gICAgICBkZWxldGVNc2coKSB7XFxyXFxuICAgICAgICByZXR1cm4gKHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09IDEpID8gdGhpcy4kdCgnZGVsZXRlX2l0ZW1fY29uZmlybScpIDpcXHJcXG4gICAgICAgICAgdGhpcy4kdCgnZGVsZXRlX2l0ZW1zX2NvbmZpcm0nKTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIC4uLm1hcEdldHRlcnMoe1xcclxcbiAgICAgICAgaXRlbXM6ICdkZXBhcnRtZW50cy9kZXBhcnRtZW50cycsXFxyXFxuICAgICAgICBwb3NpdGlvbnM6ICdwb3NpdGlvbnMvcG9zaXRpb25zJyxcXHJcXG4gICAgICAgIGVtcGxveWVlczogJ2VtcGxveWVlcy9lbXBsb3llZXMnXFxyXFxuICAgICAgfSlcXHJcXG4gICAgfSxcXHJcXG4gICAgY29tcG9uZW50czoge1xcclxcbiAgICAgICAgRmlsZVBvbmRcXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczoge1xcclxcbi8vICAgICAgaGFuZGxlRmlsZVBvbmRJbml0OiBmdW5jdGlvbigpIHtcXHJcXG4vLyAgICAgICAgY29uc29sZS5sb2coJ0ZpbGVQb25kIGhhcyBpbml0aWFsaXplZCcpO1xcclxcbi8vICAgICAgICB0aGlzLiRyZWZzLnBvbmQuZ2V0RmlsZXMoKTtcXHJcXG4vLyAgICAgIH0sXFxyXFxuICAgICAgb3BlbkluZm9QYW5lbChpZCkge1xcclxcbiAgICAgICAgdGhpcy5zZWxlY3RlZFBvc2l0aW9ucyA9IHRoaXMuZ2V0UG9zaXRpb25zKGlkKTtcXHJcXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFbXBsb3llZXMgPSB0aGlzLmdldEVtcGxveWVlcyhpZCk7XFxyXFxuICAgICAgICB0aGlzLnNob3dJbmZvID0gdHJ1ZTtcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGdldFBvc2l0aW9ucyhpZCkge1xcclxcbiAgICAgICAgbGV0IHBvc2l0aW9ucyA9IFtdO1xcclxcblxcclxcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMuZm9yRWFjaChlbCA9PiB7XFxyXFxuICAgICAgICAgIGlmIChlbC5kZXBhcnRtZW50X2lkID09IGlkKSBwb3NpdGlvbnMucHVzaChlbCk7XFxyXFxuICAgICAgICB9KTtcXHJcXG5cXHJcXG4gICAgICAgIHJldHVybiBwb3NpdGlvbnM7XFxyXFxuICAgICAgfSxcXHJcXG4gICAgICBnZXRFbXBsb3llZXMoaWQpIHtcXHJcXG4gICAgICAgIGxldCBlbXBsb3llZXMgPSBbXSxcXHJcXG4gICAgICAgICAgcG9zaXRpb25zID0gdGhpcy5nZXRQb3NpdGlvbnMoaWQpO1xcclxcblxcclxcbiAgICAgICAgcG9zaXRpb25zLmZvckVhY2gocG9zID0+IHtcXHJcXG4gICAgICAgICAgdGhpcy5lbXBsb3llZXMuZm9yRWFjaChlbCA9PiB7XFxyXFxuICAgICAgICAgICAgaWYgKGVsLnBvc2l0aW9uX2lkID09IHBvcy5pZCkgZW1wbG95ZWVzLnB1c2goZWwpO1xcclxcbiAgICAgICAgICB9KTtcXHJcXG4gICAgICAgIH0pO1xcclxcbiAgICAgICAgcmV0dXJuIGVtcGxveWVlcztcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGFkZENvbmZpcm0oKSB7XFxyXFxuICAgICAgICB0aGlzLmFkZEl0ZW0oe1xcclxcbiAgICAgICAgICAndGl0bGUnOiB0aGlzLmRlcGFydG1lbnROYW1lXFxyXFxuICAgICAgICB9KTtcXHJcXG4gICAgICAgIHRoaXMuZGVwYXJ0bWVudENyZWF0ZSA9IGZhbHNlO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgYWRkQ2FuY2VsKCkge1xcclxcbiAgICAgICAgdGhpcy5kZXBhcnRtZW50Q3JlYXRlID0gZmFsc2U7XFxyXFxuICAgICAgfSxcXHJcXG4gICAgICBkZWxldGVEaWFsb2coaXRlbSkge1xcclxcbiAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSB0cnVlO1xcclxcbiAgICAgICAgdGhpcy5kZWxldGVDYXRlZ29yeSA9IGl0ZW07XFxyXFxuICAgICAgfSxcXHJcXG4gICAgICBkZWxldGVDb25maXJtKCkge1xcclxcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5mb3JFYWNoKGVsID0+IHRoaXMuZGVsZXRlSXRlbShlbC5pZCkpO1xcclxcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xcclxcbiAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcXHJcXG4gICAgICAgIHRoaXMuZWRpdGVkSUQgPSBudWxsO1xcclxcbiAgICAgICAgdGhpcy5zbmFja2JhclNob3cgPSB0cnVlO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVsZXRlQ2FuY2VsKCkge1xcclxcbiAgICAgICAgdGhpcy5kZWxldGVDYXRlZ29yeSA9IG51bGw7XFxyXFxuICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgY2xvc2UoKSB7XFxyXFxuICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlO1xcclxcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SXRlbSk7XFxyXFxuICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTE7XFxyXFxuICAgICAgfSxcXHJcXG4gICAgICAuLi5tYXBBY3Rpb25zKHtcXHJcXG4gICAgICAgIGxvYWRJdGVtczogJ2RlcGFydG1lbnRzL2xvYWQnLFxcclxcbiAgICAgICAgYWRkSXRlbTogJ2RlcGFydG1lbnRzL2FkZCcsXFxyXFxuICAgICAgICBlZGl0SXRlbTogJ2RlcGFydG1lbnRzL2VkaXQnLFxcclxcbiAgICAgICAgZGVsZXRlSXRlbTogJ2RlcGFydG1lbnRzL3JlbW92ZSdcXHJcXG4gICAgICB9KVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4jZGVwYXJ0bWVudHMge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMWVlNjczNWRcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjx0ZW1wbGF0ZT5cclxuPGRpdiBpZD1cImRlcGFydG1lbnRzXCI+XHJcbiAgXHJcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRlbGV0ZVdpbmRvd1wiIG1heC13aWR0aD1cIjUwMHB4XCI+XHJcbiAgICAgICAgPHYtY2FyZD5cclxuICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGxpbmVcIj57eyAkdCgnYXR0ZW50aW9uJykgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICA8di1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTI+e3tkZWxldGVNc2d9fTwvdi1mbGV4PlxyXG4gICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cImluZm9cIiBAY2xpY2submF0aXZlPVwiZGVsZXRlQ29uZmlybVwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cclxuICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiZXJyb3JcIiBAY2xpY2submF0aXZlPVwiZGVsZXRlQ2FuY2VsXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj5cclxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICA8L3YtY2FyZD5cclxuICAgIDwvdi1kaWFsb2c+XHJcblxyXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkZXBhcnRtZW50Q3JlYXRlXCIgbWF4LXdpZHRoPVwiNTAwcHhcIj5cclxuICAgICAgICA8di1jYXJkPlxyXG4gICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkbGluZVwiPtCd0L7QstC+0LUg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40LU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICA8di1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZCBsYWJlbD1cItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtVwiIHYtbW9kZWw9XCJkZXBhcnRtZW50TmFtZVwiPjwvdi10ZXh0LWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC92LWZsZXg+XHJcbiAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIEBjbGljay5uYXRpdmU9XCJhZGRDb25maXJtXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XCJlcnJvclwiIEBjbGljay5uYXRpdmU9XCJhZGRDYW5jZWxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxyXG4gICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgIDwvdi1jYXJkPlxyXG4gICAgPC92LWRpYWxvZz5cclxuXHJcbiAgICA8di1jYXJkPlxyXG4gICAgICAgIDx2LWRhdGEtdGFibGVcclxuICAgICAgICAgICAgOmhlYWRlcnM9XCJoZWFkZXJzXCJcclxuICAgICAgICAgICAgOml0ZW1zPVwiaXRlbXNcIlxyXG4gICAgICAgICAgICBpdGVtLWtleT1cImlkXCJcclxuICAgICAgICAgICAgOm5vLXJlc3VsdHMtdGV4dD1cIiR0KCdub19tYXRjaF9mb3VuZCcpXCJcclxuICAgICAgICAgICAgOnJvd3MtcGVyLXBhZ2UtdGV4dD1cIiR0KCdzdHJpbmdzJylcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImVsZXZhdGlvbi0xXCI+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiaXRlbXNcIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cclxuICAgICAgICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmlkIH19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8di1lZGl0LWRpYWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6cmV0dXJuLXZhbHVlLnN5bmM9XCJwcm9wcy5pdGVtLnRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF6eVxyXG4gICAgICAgICAgICAgICAgICAgID4ge3sgcHJvcHMuaXRlbS50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90PVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9wcy5pdGVtLnRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZS1saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiZWRpdEl0ZW0ocHJvcHMuaXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92LWVkaXQtZGlhbG9nPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57eyBnZXRQb3NpdGlvbnMocHJvcHMuaXRlbS5pZCkubGVuZ3RoIH19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57eyBnZXRFbXBsb3llZXMocHJvcHMuaXRlbS5pZCkubGVuZ3RoIH19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57eyBwcm9wcy5pdGVtLmlkIH19XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8IS0tPHYtYnRuIGljb24gY2xhc3M9XCJteC0wXCIgQGNsaWNrPVwiZWRpdEl0ZW0ocHJvcHMuaXRlbSlcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPHYtaWNvbiBjb2xvcj1cInRlYWxcIj5lZGl0PC92LWljb24+LS0+XHJcbiAgICAgICAgICAgICAgICAgIDwhLS08L3YtYnRuPi0tPlxyXG4gICAgICAgICAgICAgICAgICA8IS0tPHYtYnRuIGljb24gY2xhc3M9XCJteC0wXCIgQGNsaWNrPVwiZGVsZXRlSXRlbShwcm9wcy5pdGVtKVwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08di1pY29uIGNvbG9yPVwicGlua1wiPmRlbGV0ZTwvdi1pY29uPi0tPlxyXG4gICAgICAgICAgICAgICAgICA8IS0tPC92LWJ0bj4tLT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibm8tZGF0YVwiPlxyXG4gICAgICAgICAgICAgIDx2LWFsZXJ0IDp2YWx1ZT1cInRydWVcIiBjb2xvcj1cInJlZFwiIGljb249XCJ3YXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg0J3QtdGCINC00LDQvdC90YvRhSA6KFxyXG4gICAgICAgICAgICAgICAgPC92LWFsZXJ0PlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvdi1kYXRhLXRhYmxlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICA8di1idG4gZmFiIGRhcmsgbGFyZ2UgY29sb3I9XCJjeWFuXCIgQGNsaWNrPVwiZGVwYXJ0bWVudENyZWF0ZSA9IHRydWVcIj5cclxuICAgICAgICAgICAgICAgIDx2LWljb24gZGFyaz5hZGQ8L3YtaWNvbj5cclxuICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgPHRyYW5zaXRpb24gZW50ZXItYWN0aXZlLWNsYXNzPVwiYnV0dG9uRW50ZXJcIiBsZWF2ZS1hY3RpdmUtY2xhc3M9XCJidXR0b25MZWF2ZVwiIG1vZGU9XCJvdXQtaW5cIj5cclxuICAgICAgICAgICAgICAgIDx2LWJ0biB2LXNob3c9XCJzZWxlY3RlZC5sZW5ndGggPiAwXCIgY2xhc3M9XCJkZWxldGUtYnRuXCIgZmFiIGxhcmdlIGRhcmsgQGNsaWNrPVwiZGVsZXRlRGlhbG9nKHNlbGVjdGVkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWljb24+ZGVsZXRlPC92LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHYtc25hY2tiYXIgOnRpbWVvdXQ9XCJzbmFja2JhclRpbWVvdXRcIiB0b3Agdi1tb2RlbD1cInNuYWNrYmFyU2hvd1wiIG11bHRpLWxpbmUgY29sb3I9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgIHt7ICR0KCdkZWxldGVfZG9uZScpIH19XHJcbiAgICAgICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicGlua1wiIEBjbGljay5uYXRpdmU9XCJzbmFja2JhclNob3cgPSBmYWxzZVwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cclxuICAgICAgICA8L3Ytc25hY2tiYXI+XHJcbiAgICA8L3YtY2FyZD5cclxuPC9kaXY+XHJcbjwhLS1cclxuPGZpbGUtcG9uZFxyXG4gICAgICAgIG5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICByZWY9XCJwb25kXCJcclxuICAgICAgICBjbGFzcy1uYW1lPVwibXktcG9uZFwiXHJcbiAgICAgICAgbGFiZWwtaWRsZT1cItCf0LXRgNC10LrQuNC90YzRgtC1INGE0LDQudC70Ysg0YHRjtC00LBcIlxyXG4gICAgICAgIGxhYmVsRmlsZVR5cGVOb3RBbGxvd2VkPVwi0JTQsNC90L3Ri9C5INGE0L7RgNC80LDRgiDQvdC1INC/0L7QtNC00LXRgNC20LjQstCw0LXRgtGB0Y9cIlxyXG4gICAgICAgIGFsbG93LW11bHRpcGxlPVwidHJ1ZVwiXHJcbiAgICAgICAgYWNjZXB0ZWQtZmlsZS10eXBlcz1cImltYWdlL2pwZWcsIGltYWdlL3BuZywgYXBwbGljYXRpb24vbXN3b3JkXCJcclxuICAgICAgICB2LWJpbmQ6ZmlsZXM9XCJteUZpbGVzXCJcclxuICAgICAgICB2LW9uOmluaXQ9XCJoYW5kbGVGaWxlUG9uZEluaXRcIi8+XHJcbi0tPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XHJcbiAgaW1wb3J0IHZ1ZUZpbGVQb25kIGZyb20gJ3Z1ZS1maWxlcG9uZCc7XHJcbiAgaW1wb3J0IEZpbGVQb25kUGx1Z2luRmlsZVZhbGlkYXRlVHlwZSBmcm9tICdmaWxlcG9uZC1wbHVnaW4tZmlsZS12YWxpZGF0ZS10eXBlL2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWZpbGUtdmFsaWRhdGUtdHlwZS5lc20uanMnO1xyXG4gIGltcG9ydCBGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlldyBmcm9tICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3LmVzbS5qcyc7XHJcbiAgLy8gSW1wb3J0IHN0eWxlc1xyXG4gIGltcG9ydCAnZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5taW4uY3NzJztcclxuICBpbXBvcnQgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3L2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcubWluLmNzcyc7XHJcbiAgXHJcbiAgY29uc3QgRmlsZVBvbmQgPSB2dWVGaWxlUG9uZCggRmlsZVBvbmRQbHVnaW5GaWxlVmFsaWRhdGVUeXBlLCBGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlldyApO1xyXG4gIFxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1pZGRsZXdhcmU6IFsnYXV0aCcsICdvcmdhbmlzYXRpb24nXSxcclxuICAgIGRhdGE6ICgpID0+ICh7XHJcbiAgICAgICBteUZpbGVzOiBbJ2luZGV4Lmh0bWwnXSxcclxuICAgICAgLy/Qn9C+0LTRgNC+0LHQvdC+0YHRgtC4XHJcbiAgICAgIHNob3dJbmZvOiBmYWxzZSxcclxuICAgICAgc2VsZWN0ZWRFbXBsb3llZXM6IFtdLFxyXG4gICAgICBzZWxlY3RlZFBvc2l0aW9uczogW10sXHJcbiAgICAgIC8vINCS0YHQv9C70YvQstCw0YjQutC4XHJcbiAgICAgIHNuYWNrYmFyU2hvdzogZmFsc2UsXHJcbiAgICAgIHNuYWNrYmFyVGltZW91dDogMTAwMDAsXHJcbiAgICAgIC8vINCf0L7QuNGB0LogLyDQktGL0LHQvtGA0LrQsFxyXG4gICAgICBzZWFyY2g6ICcnLFxyXG4gICAgICBzZWxlY3RlZDogW10sXHJcbiAgICAgIGRpYWxvZzogZmFsc2UsXHJcbiAgICAgIC8vINCj0LTQsNC70LXQvdC40LVcclxuICAgICAgZGVsZXRlV2luZG93OiBmYWxzZSxcclxuICAgICAgZGVsZXRlQ2F0ZWdvcnk6IG51bGwsXHJcbiAgICAgIGRlbE1vZGU6ICdzaW5nbGUnLFxyXG4gICAgICAvL9Ch0L7Qt9C00LDQvdC40LVcclxuICAgICAgZGVwYXJ0bWVudENyZWF0ZTogZmFsc2UsXHJcbiAgICAgIGRlcGFydG1lbnROYW1lOiAnJyxcclxuICAgICAgLy8g0JfQsNCz0L7Qu9C+0LLQutC4INGC0LDQsdC70LjRhtGLXHJcbiAgICAgIGhlYWRlcnM6IFt7XHJcbiAgICAgICAgICB0ZXh0OiAn0J3QvtC80LXRgCcsXHJcbiAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgICAgc29ydGFibGU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1JyxcclxuICAgICAgICAgIHZhbHVlOiAnbmFtZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICfQlNC+0LvQttC90L7RgdGC0LXQuScsXHJcbiAgICAgICAgICB2YWx1ZTogJ3Bvc2l0aW9ucydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICfQodC+0YLRgNGD0LTQvdC40LrQvtCyJyxcclxuICAgICAgICAgIHZhbHVlOiAnZW1wbG95ZWVzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAn0JTQtdC50YHRgtCy0LjRjycsXHJcbiAgICAgICAgICB2YWx1ZTogJ2FjdGlvbidcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pLFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgZGVsZXRlTXNnKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zZWxlY3RlZC5sZW5ndGggPT0gMSkgPyB0aGlzLiR0KCdkZWxldGVfaXRlbV9jb25maXJtJykgOlxyXG4gICAgICAgICAgdGhpcy4kdCgnZGVsZXRlX2l0ZW1zX2NvbmZpcm0nKTtcclxuICAgICAgfSxcclxuICAgICAgLi4ubWFwR2V0dGVycyh7XHJcbiAgICAgICAgaXRlbXM6ICdkZXBhcnRtZW50cy9kZXBhcnRtZW50cycsXHJcbiAgICAgICAgcG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXHJcbiAgICAgICAgZW1wbG95ZWVzOiAnZW1wbG95ZWVzL2VtcGxveWVlcydcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgRmlsZVBvbmRcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbi8vICAgICAgaGFuZGxlRmlsZVBvbmRJbml0OiBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKCdGaWxlUG9uZCBoYXMgaW5pdGlhbGl6ZWQnKTtcclxuLy8gICAgICAgIHRoaXMuJHJlZnMucG9uZC5nZXRGaWxlcygpO1xyXG4vLyAgICAgIH0sXHJcbiAgICAgIG9wZW5JbmZvUGFuZWwoaWQpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUG9zaXRpb25zID0gdGhpcy5nZXRQb3NpdGlvbnMoaWQpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFbXBsb3llZXMgPSB0aGlzLmdldEVtcGxveWVlcyhpZCk7XHJcbiAgICAgICAgdGhpcy5zaG93SW5mbyA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldFBvc2l0aW9ucyhpZCkge1xyXG4gICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICBpZiAoZWwuZGVwYXJ0bWVudF9pZCA9PSBpZCkgcG9zaXRpb25zLnB1c2goZWwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcG9zaXRpb25zO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXRFbXBsb3llZXMoaWQpIHtcclxuICAgICAgICBsZXQgZW1wbG95ZWVzID0gW10sXHJcbiAgICAgICAgICBwb3NpdGlvbnMgPSB0aGlzLmdldFBvc2l0aW9ucyhpZCk7XHJcblxyXG4gICAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKHBvcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVtcGxveWVlcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsLnBvc2l0aW9uX2lkID09IHBvcy5pZCkgZW1wbG95ZWVzLnB1c2goZWwpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGVtcGxveWVlcztcclxuICAgICAgfSxcclxuICAgICAgYWRkQ29uZmlybSgpIHtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oe1xyXG4gICAgICAgICAgJ3RpdGxlJzogdGhpcy5kZXBhcnRtZW50TmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGVwYXJ0bWVudENyZWF0ZSA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRDYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5kZXBhcnRtZW50Q3JlYXRlID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZURpYWxvZyhpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlQ2F0ZWdvcnkgPSBpdGVtO1xyXG4gICAgICB9LFxyXG4gICAgICBkZWxldGVDb25maXJtKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuZm9yRWFjaChlbCA9PiB0aGlzLmRlbGV0ZUl0ZW0oZWwuaWQpKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gW107XHJcbiAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVkaXRlZElEID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNuYWNrYmFyU2hvdyA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZUNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZUNhdGVnb3J5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xyXG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcclxuICAgICAgfSxcclxuICAgICAgLi4ubWFwQWN0aW9ucyh7XHJcbiAgICAgICAgbG9hZEl0ZW1zOiAnZGVwYXJ0bWVudHMvbG9hZCcsXHJcbiAgICAgICAgYWRkSXRlbTogJ2RlcGFydG1lbnRzL2FkZCcsXHJcbiAgICAgICAgZWRpdEl0ZW06ICdkZXBhcnRtZW50cy9lZGl0JyxcclxuICAgICAgICBkZWxldGVJdGVtOiAnZGVwYXJ0bWVudHMvcmVtb3ZlJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuI2RlcGFydG1lbnRzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZSIsIi8qIVxuICogdnVlLWZpbGVwb25kIHYyLjAuMFxuICogQSBoYW5keSBGaWxlUG9uZCBhZGFwdGVyIGNvbXBvbmVudCBmb3IgVnVlXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxOCBQUUlOQVxuICogaHR0cHM6Ly9wcWluYS5ubC9maWxlcG9uZFxuICogXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdnVlID0gcmVxdWlyZSgndnVlJyk7XG5cbnZhciBfdnVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Z1ZSk7XG5cbnZhciBfZmlsZXBvbmQgPSByZXF1aXJlKCdmaWxlcG9uZCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBNZXRob2RzIG5vdCBtYWRlIGF2YWlsYWJsZSB0byB0aGUgY29tcG9uZW50XG52YXIgZmlsdGVyZWRDb21wb25lbnRNZXRob2RzID0gWydzZXRPcHRpb25zJywgJ29uJywgJ29mZicsICdvbk9uY2UnLCAnYXBwZW5kVG8nLCAnaW5zZXJ0QWZ0ZXInLCAnaW5zZXJ0QmVmb3JlJywgJ2lzQXR0YWNoZWRUbycsICdyZXBsYWNlRWxlbWVudCcsICdyZXN0b3JlRWxlbWVudCcsICdkZXN0cm95J107XG5cbi8vIFRlc3QgaWYgaXMgc3VwcG9ydGVkIG9uIHRoaXMgY2xpZW50XG52YXIgaXNTdXBwb3J0ZWQgPSAoMCwgX2ZpbGVwb25kLnN1cHBvcnRlZCkoKTtcblxuLy8gU2V0dXAgaW5pdGlhbCBwcm9wIHR5cGVzIGFuZCB1cGRhdGUgd2hlbiBwbHVnaW5zIGFyZSBhZGRlZFxudmFyIGdldE5hdGl2ZUNvbnN0cnVjdG9yRnJvbVR5cGUgPSBmdW5jdGlvbiBnZXROYXRpdmVDb25zdHJ1Y3RvckZyb21UeXBlKHR5cGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdHJpbmc6IFN0cmluZyxcbiAgICAgICAgYm9vbGVhbjogQm9vbGVhbixcbiAgICAgICAgYXJyYXk6IEFycmF5LFxuICAgICAgICBmdW5jdGlvbjogRnVuY3Rpb24sXG4gICAgICAgIGludDogTnVtYmVyLFxuICAgICAgICBzZXJ2ZXJhcGk6IE9iamVjdFxuICAgIH1bdHlwZV07XG59O1xuXG4vLyBBY3RpdmF0ZWQgcHJvcHNcbnZhciBwcm9wcyA9IHt9O1xuXG4vLyBFdmVudHMgdGhhdCBuZWVkIHRvIGJlIG1hcHBlZCB0byBlbWl0dGVyc1xudmFyIGV2ZW50cyA9IFtdO1xuXG4vLyBQcm9wcyB0byB3YXRjaFxudmFyIHdhdGNoID0ge307XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIHJlZ2lzdGVyIHBsdWdpbnMgaW4gRmlsZVBvbmRcbiAgICBfZmlsZXBvbmQucmVnaXN0ZXJQbHVnaW4uYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuXG4gICAgLy8gYnVpbGQgZXZlbnRzIGFuZCBwcm9wcyBhcnJheVxuICAgIGV2ZW50cy5sZW5ndGggPSAwO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AocHJvcCkge1xuICAgICAgICAvLyBkb24ndCBhZGQgZXZlbnRzIHRvIHRoZSBwcm9wcyBhcnJheVxuICAgICAgICBpZiAoL15vbi8udGVzdChwcm9wKSkge1xuICAgICAgICAgICAgZXZlbnRzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICByZXR1cm4gJ2NvbnRpbnVlJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCBwcm9wZXJ0eSB0eXBlICggY2FuIGJlIGVpdGhlciBhIFN0cmluZyBvciB0aGUgdHlwZSBkZWZpbmVkIHdpdGhpbiBGaWxlUG9uZCApXG4gICAgICAgIHByb3BzW3Byb3BdID0gW1N0cmluZywgZ2V0TmF0aXZlQ29uc3RydWN0b3JGcm9tVHlwZShfZmlsZXBvbmQuT3B0aW9uVHlwZXNbcHJvcF0pXTtcblxuICAgICAgICAvLyBzZXR1cCB3YXRjaGVyXG4gICAgICAgIHdhdGNoW3Byb3BdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9wb25kW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGZvciAodmFyIHByb3AgaW4gX2ZpbGVwb25kLk9wdGlvblR5cGVzKSB7XG4gICAgICAgIHZhciBfcmV0ID0gX2xvb3AocHJvcCk7XG5cbiAgICAgICAgaWYgKF9yZXQgPT09ICdjb250aW51ZScpIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBcbiAgICByZXR1cm4gX3Z1ZTIuZGVmYXVsdC5jb21wb25lbnQoJ0ZpbGVQb25kJywge1xuICAgICAgICBuYW1lOiAnRmlsZVBvbmQnLFxuICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIHdhdGNoOiB3YXRjaCxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoaCkge1xuICAgICAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiB7XG4gICAgICAgICAgICAgICAgICAgICdmaWxlcG9uZC0td3JhcHBlcic6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbaCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiB0aGlzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRoaXMucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiB0aGlzLmFsbG93TXVsdGlwbGUsXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdDogdGhpcy5hY2NlcHRlZEZpbGVUeXBlcyxcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZTogdGhpcy5jYXB0dXJlTWV0aG9kXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSldKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBXaWxsIHNldHVwIEZpbGVQb25kIGluc3RhbmNlIHdoZW4gbW91bnRlZFxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgLy8gZXhpdCBoZXJlIGlmIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgIGlmICghaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGdldCBwb25kIGVsZW1lbnRcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuXG4gICAgICAgICAgICAvLyBNYXAgRmlsZVBvbmQgY2FsbGJhY2sgbWV0aG9kcyB0byBWdWUgJGVtaXR0ZXJzXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGV2ZW50cy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBvYmpbdmFsdWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbWl0LmFwcGx5KF90aGlzLCBbdmFsdWUuc3Vic3RyKDIpXS5jb25jYXQoYXJncykpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgICAgLy8gU2Nvb3AgdXAgYXR0cmlidXRlcyB0aGF0IG1pZ2h0IG5vdCBoYXZlIGJlZW4gY2F1Z2h0IGJ5IFZ1ZSAoIGJlY2F1c2UgdGhlIHByb3BzIG9iamVjdCBpcyBleHRlbmRlZCBkeW5hbWljYWxseSApXG4gICAgICAgICAgICB2YXIgYXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLiRhdHRycyk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBvdXIgcG9uZFxuICAgICAgICAgICAgdGhpcy5fcG9uZCA9ICgwLCBfZmlsZXBvbmQuY3JlYXRlKSh0aGlzLl9lbGVtZW50LCBPYmplY3QuYXNzaWduKG9wdGlvbnMsIGF0dHJzLCB0aGlzLiRvcHRpb25zLnByb3BzRGF0YSkpO1xuXG4gICAgICAgICAgICAvLyBDb3B5IGluc3RhbmNlIG1ldGhvZCByZWZlcmVuY2VzIHRvIGNvbXBvbmVudCBpbnN0YW5jZVxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5fcG9uZCkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWZpbHRlcmVkQ29tcG9uZW50TWV0aG9kcy5pbmNsdWRlcyhrZXkpO1xuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgX3RoaXNba2V5XSA9IF90aGlzLl9wb25kW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuXG4gICAgICAgIC8vIFdpbGwgY2xlYW4gdXAgRmlsZVBvbmQgaW5zdGFuY2Ugd2hlbiB1bm1vdW50ZWRcbiAgICAgICAgYmVmb3JlRGVzdHJveTogZnVuY3Rpb24gYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgICAgICAgIC8vIGV4aXQgd2hlbiBubyBwb25kIGRlZmluZWRcbiAgICAgICAgICAgIGlmICghdGhpcy5fcG9uZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcG9uZC5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWZpbGVwb25kL2Rpc3QvdnVlLWZpbGVwb25kLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLypcbiAqIEZpbGVQb25kIDEuNC4wXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQsIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBQbGVhc2UgdmlzaXQgaHR0cHM6Ly9wcWluYS5ubC9maWxlcG9uZCBmb3IgZGV0YWlscy5cbiAqL1xuKGZ1bmN0aW9uKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IGZhY3RvcnkoZXhwb3J0cylcbiAgICA6IHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZFxuICAgICAgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpXG4gICAgICA6IGZhY3RvcnkoKGdsb2JhbC5GaWxlUG9uZCA9IHt9KSk7XG59KSh0aGlzLCBmdW5jdGlvbihleHBvcnRzKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgaXNOb2RlID0gZnVuY3Rpb24gaXNOb2RlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gIH07XG5cbiAgdmFyIF90eXBlb2YgPVxuICAgIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCdcbiAgICAgID8gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgICAgIH1cbiAgICAgIDogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIG9iaiAmJlxuICAgICAgICAgICAgdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiZcbiAgICAgICAgICAgIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZVxuICAgICAgICAgICAgPyAnc3ltYm9sJ1xuICAgICAgICAgICAgOiB0eXBlb2Ygb2JqO1xuICAgICAgICB9O1xuXG4gIHZhciBhc3luY0dlbmVyYXRvciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBBd2FpdFZhbHVlKHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQXN5bmNHZW5lcmF0b3IoZ2VuKSB7XG4gICAgICB2YXIgZnJvbnQsIGJhY2s7XG5cbiAgICAgIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgICAgIG5leHQ6IG51bGxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGJhY2spIHtcbiAgICAgICAgICAgIGJhY2sgPSBiYWNrLm5leHQgPSByZXF1ZXN0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9udCA9IGJhY2sgPSByZXF1ZXN0O1xuICAgICAgICAgICAgcmVzdW1lKGtleSwgYXJnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG5cbiAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBd2FpdFZhbHVlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUudmFsdWUpLnRoZW4oXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICAgICAgICAgIHJlc3VtZSgnbmV4dCcsIGFyZyk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICAgICAgICAgIHJlc3VtZSgndGhyb3cnLCBhcmcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyAncmV0dXJuJyA6ICdub3JtYWwnLCByZXN1bHQudmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgc2V0dGxlKCd0aHJvdycsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgJ3JldHVybic6XG4gICAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAndGhyb3cnOlxuICAgICAgICAgICAgZnJvbnQucmVqZWN0KHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZnJvbnQgPSBmcm9udC5uZXh0O1xuXG4gICAgICAgIGlmIChmcm9udCkge1xuICAgICAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFjayA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5faW52b2tlID0gc2VuZDtcblxuICAgICAgaWYgKHR5cGVvZiBnZW4ucmV0dXJuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmV0dXJuID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yKSB7XG4gICAgICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZSgnbmV4dCcsIGFyZyk7XG4gICAgfTtcblxuICAgIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZSgndGhyb3cnLCBhcmcpO1xuICAgIH07XG5cbiAgICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW52b2tlKCdyZXR1cm4nLCBhcmcpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgd3JhcDogZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBuZXcgQXN5bmNHZW5lcmF0b3IoZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgYXdhaXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXdhaXRWYWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKTtcblxuICB2YXIgX2V4dGVuZHMgPVxuICAgIE9iamVjdC5hc3NpZ24gfHxcbiAgICBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgdmFyIHRvQ29uc3VtYWJsZUFycmF5ID0gZnVuY3Rpb24oYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKylcbiAgICAgICAgYXJyMltpXSA9IGFycltpXTtcblxuICAgICAgcmV0dXJuIGFycjI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjcmVhdGVTdG9yZSA9IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICAgIHZhciBxdWVyaWVzID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG4gICAgdmFyIGFjdGlvbnMgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcblxuICAgIC8vIGludGVybmFsIHN0YXRlXG4gICAgdmFyIHN0YXRlID0gX2V4dGVuZHMoe30sIGluaXRpYWxTdGF0ZSk7XG5cbiAgICAvLyBjb250YWlucyBhbGwgYWN0aW9ucyBmb3IgbmV4dCBmcmFtZSwgaXMgY2xlYXIgd2hlbiBhY3Rpb25zIGFyZSByZXF1ZXN0ZWRcbiAgICB2YXIgYWN0aW9uUXVldWUgPSBbXTtcbiAgICB2YXIgZGlzcGF0Y2hRdWV1ZSA9IFtdO1xuXG4gICAgLy8gcmV0dXJucyBhIGR1cGxpY2F0ZSBvZiB0aGUgY3VycmVudCBzdGF0ZVxuICAgIHZhciBnZXRTdGF0ZSA9IGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSk7XG4gICAgfTtcblxuICAgIC8vIHJldHVybnMgYSBkdXBsaWNhdGUgb2YgdGhlIGFjdGlvbnMgYXJyYXkgYW5kIGNsZWFycyB0aGUgYWN0aW9ucyBhcnJheVxuICAgIHZhciBwcm9jZXNzQWN0aW9uUXVldWUgPSBmdW5jdGlvbiBwcm9jZXNzQWN0aW9uUXVldWUoKSB7XG4gICAgICAvLyBjcmVhdGUgY29weSBvZiBhY3Rpb25zIHF1ZXVlXG4gICAgICB2YXIgcXVldWUgPSBbXS5jb25jYXQoYWN0aW9uUXVldWUpO1xuXG4gICAgICAvLyBjbGVhciBhY3Rpb25zIHF1ZXVlICh3ZSBkb24ndCB3YW50IG5vIGRvdWJsZSBhY3Rpb25zKVxuICAgICAgYWN0aW9uUXVldWUubGVuZ3RoID0gMDtcblxuICAgICAgcmV0dXJuIHF1ZXVlO1xuICAgIH07XG5cbiAgICAvLyBwcm9jZXNzZXMgYWN0aW9ucyB0aGF0IG1pZ2h0IGJsb2NrIHRoZSBtYWluIFVJIHRocmVhZFxuICAgIHZhciBwcm9jZXNzRGlzcGF0Y2hRdWV1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NEaXNwYXRjaFF1ZXVlKCkge1xuICAgICAgLy8gY3JlYXRlIGNvcHkgb2YgYWN0aW9ucyBxdWV1ZVxuICAgICAgdmFyIHF1ZXVlID0gW10uY29uY2F0KGRpc3BhdGNoUXVldWUpO1xuXG4gICAgICAvLyBjbGVhciBhY3Rpb25zIHF1ZXVlICh3ZSBkb24ndCB3YW50IG5vIGRvdWJsZSBhY3Rpb25zKVxuICAgICAgZGlzcGF0Y2hRdWV1ZS5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBub3cgZGlzcGF0Y2ggdGhlc2UgYWN0aW9uc1xuICAgICAgcXVldWUuZm9yRWFjaChmdW5jdGlvbihfcmVmKSB7XG4gICAgICAgIHZhciB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgICAgIGRhdGEgPSBfcmVmLmRhdGE7XG5cbiAgICAgICAgZGlzcGF0Y2godHlwZSwgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gYWRkcyBhIG5ldyBhY3Rpb24sIGNhbGxzIGl0cyBoYW5kbGVyIGFuZFxuICAgIHZhciBkaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKHR5cGUsIGRhdGEsIGlzQmxvY2tpbmcpIHtcbiAgICAgIC8vIGlzIGJsb2NraW5nIGFjdGlvblxuICAgICAgaWYgKGlzQmxvY2tpbmcpIHtcbiAgICAgICAgZGlzcGF0Y2hRdWV1ZS5wdXNoKHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgdGhpcyBhY3Rpb24gaGFzIGEgaGFuZGxlciwgaGFuZGxlIHRoZSBhY3Rpb25cbiAgICAgIGlmIChhY3Rpb25IYW5kbGVyc1t0eXBlXSkge1xuICAgICAgICBhY3Rpb25IYW5kbGVyc1t0eXBlXShkYXRhKTtcbiAgICAgIH1cblxuICAgICAgLy8gbm93IGFkZCBhY3Rpb25cbiAgICAgIGFjdGlvblF1ZXVlLnB1c2goe1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHF1ZXJ5ID0gZnVuY3Rpb24gcXVlcnkoc3RyKSB7XG4gICAgICB2YXIgX3F1ZXJ5SGFuZGxlcztcblxuICAgICAgZm9yIChcbiAgICAgICAgdmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksXG4gICAgICAgICAgX2tleSA9IDE7XG4gICAgICAgIF9rZXkgPCBfbGVuO1xuICAgICAgICBfa2V5KytcbiAgICAgICkge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHF1ZXJ5SGFuZGxlc1tzdHJdXG4gICAgICAgID8gKF9xdWVyeUhhbmRsZXMgPSBxdWVyeUhhbmRsZXMpW3N0cl0uYXBwbHkoX3F1ZXJ5SGFuZGxlcywgYXJncylcbiAgICAgICAgOiBudWxsO1xuICAgIH07XG5cbiAgICB2YXIgYXBpID0ge1xuICAgICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgICAgcHJvY2Vzc0FjdGlvblF1ZXVlOiBwcm9jZXNzQWN0aW9uUXVldWUsXG4gICAgICBwcm9jZXNzRGlzcGF0Y2hRdWV1ZTogcHJvY2Vzc0Rpc3BhdGNoUXVldWUsXG4gICAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgICBxdWVyeTogcXVlcnlcbiAgICB9O1xuXG4gICAgdmFyIHF1ZXJ5SGFuZGxlcyA9IHt9O1xuICAgIHF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbihxdWVyeSkge1xuICAgICAgcXVlcnlIYW5kbGVzID0gX2V4dGVuZHMoe30sIHF1ZXJ5KHN0YXRlKSwgcXVlcnlIYW5kbGVzKTtcbiAgICB9KTtcblxuICAgIHZhciBhY3Rpb25IYW5kbGVycyA9IHt9O1xuICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgIGFjdGlvbkhhbmRsZXJzID0gX2V4dGVuZHMoXG4gICAgICAgIHt9LFxuICAgICAgICBhY3Rpb24oZGlzcGF0Y2gsIHF1ZXJ5LCBzdGF0ZSksXG4gICAgICAgIGFjdGlvbkhhbmRsZXJzXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFwaTtcbiAgfTtcblxuICB2YXIgZGVmaW5lUHJvcGVydHkkMSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5JCQxKG9iaiwgcHJvcGVydHksIGRlZmluaXRpb24pIHtcbiAgICBpZiAodHlwZW9mIGRlZmluaXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9ialtwcm9wZXJ0eV0gPSBkZWZpbml0aW9uO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wZXJ0eSwgX2V4dGVuZHMoe30sIGRlZmluaXRpb24pKTtcbiAgfTtcblxuICB2YXIgZm9yaW4gPSBmdW5jdGlvbiBmb3JpbihvYmosIGNiKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY2Ioa2V5LCBvYmpba2V5XSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjcmVhdGVPYmplY3QgPSBmdW5jdGlvbiBjcmVhdGVPYmplY3QoZGVmaW5pdGlvbikge1xuICAgIHZhciBvYmogPSB7fTtcbiAgICBmb3JpbihkZWZpbml0aW9uLCBmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkkMShvYmosIHByb3BlcnR5LCBkZWZpbml0aW9uW3Byb3BlcnR5XSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICB2YXIgYXR0ciA9IGZ1bmN0aW9uIGF0dHIobm9kZSwgbmFtZSkge1xuICAgIHZhciB2YWx1ZSA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub2RlLmdldEF0dHJpYnV0ZShuYW1lKSB8fCBub2RlLmhhc0F0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9O1xuXG4gIHZhciBucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gIHZhciBzdmdFbGVtZW50cyA9IFsnc3ZnJywgJ3BhdGgnXTsgLy8gb25seSBzdmcgZWxlbWVudHMgdXNlZFxuXG4gIHZhciBpc1NWR0VsZW1lbnQgPSBmdW5jdGlvbiBpc1NWR0VsZW1lbnQodGFnKSB7XG4gICAgcmV0dXJuIHN2Z0VsZW1lbnRzLmluY2x1ZGVzKHRhZyk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIGlmIChcbiAgICAgICh0eXBlb2YgY2xhc3NOYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjbGFzc05hbWUpKSA9PT1cbiAgICAgICdvYmplY3QnXG4gICAgKSB7XG4gICAgICBhdHRyaWJ1dGVzID0gY2xhc3NOYW1lO1xuICAgICAgY2xhc3NOYW1lID0gbnVsbDtcbiAgICB9XG4gICAgdmFyIGVsZW1lbnQgPSBpc1NWR0VsZW1lbnQodGFnKVxuICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIHRhZylcbiAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIGlmIChpc1NWR0VsZW1lbnQodGFnKSkge1xuICAgICAgICBhdHRyKGVsZW1lbnQsICdjbGFzcycsIGNsYXNzTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yaW4oYXR0cmlidXRlcywgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgIGF0dHIoZWxlbWVudCwgbmFtZSwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIHZhciBhcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIGFwcGVuZENoaWxkKHBhcmVudCkge1xuICAgIHJldHVybiBmdW5jdGlvbihjaGlsZCwgaW5kZXgpIHtcbiAgICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICd1bmRlZmluZWQnICYmIHBhcmVudC5jaGlsZHJlbltpbmRleF0pIHtcbiAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmNoaWxkcmVuW2luZGV4XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGFwcGVuZENoaWxkVmlldyA9IGZ1bmN0aW9uIGFwcGVuZENoaWxkVmlldyhwYXJlbnQsIGNoaWxkVmlld3MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odmlldywgaW5kZXgpIHtcbiAgICAgIC8vIHRvZG86IGV4cGFuZCB3aXRoIGxvY2F0aW9uIGFuZCB0YXJnZXQgb3B0aW9uIChjaGlsZCwgJ2JlZm9yZScsIHRhcmdldClcblxuICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY2hpbGRWaWV3cy5zcGxpY2UoaW5kZXgsIDAsIHZpZXcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGRWaWV3cy5wdXNoKHZpZXcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmlldztcbiAgICB9O1xuICB9O1xuXG4gIHZhciByZW1vdmVDaGlsZFZpZXcgPSBmdW5jdGlvbiByZW1vdmVDaGlsZFZpZXcocGFyZW50LCBjaGlsZFZpZXdzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHZpZXcpIHtcbiAgICAgIC8vIHJlbW92ZSBmcm9tIGNoaWxkIHZpZXdzXG4gICAgICBjaGlsZFZpZXdzLnNwbGljZShjaGlsZFZpZXdzLmluZGV4T2YodmlldyksIDEpO1xuXG4gICAgICAvLyByZW1vdmUgdGhlIGVsZW1lbnRcbiAgICAgIGlmICh2aWV3LmVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodmlldy5lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgZ2V0Vmlld1JlY3QgPSBmdW5jdGlvbiBnZXRWaWV3UmVjdChcbiAgICBlbGVtZW50UmVjdCxcbiAgICBjaGlsZFZpZXdzLFxuICAgIG9mZnNldCxcbiAgICBzY2FsZVxuICApIHtcbiAgICB2YXIgbGVmdCA9IG9mZnNldFswXSB8fCBlbGVtZW50UmVjdC5sZWZ0O1xuICAgIHZhciB0b3AgPSBvZmZzZXRbMV0gfHwgZWxlbWVudFJlY3QudG9wO1xuICAgIHZhciByaWdodCA9IGxlZnQgKyBlbGVtZW50UmVjdC53aWR0aDtcbiAgICB2YXIgYm90dG9tID0gdG9wICsgZWxlbWVudFJlY3QuaGVpZ2h0ICogKHNjYWxlWzFdIHx8IDEpO1xuXG4gICAgdmFyIHJlY3QgPSB7XG4gICAgICAvLyB0aGUgcmVjdGFuZ2xlIG9mIHRoZSBlbGVtZW50IGl0c2VsZlxuICAgICAgZWxlbWVudDogX2V4dGVuZHMoe30sIGVsZW1lbnRSZWN0KSxcblxuICAgICAgLy8gdGhlIHJlY3RhbmdsZSBvZiB0aGUgZWxlbWVudCBleHBhbmRlZCB0byBjb250YWluIGl0cyBjaGlsZHJlbiwgZG9lcyBub3QgaW5jbHVkZSBhbnkgbWFyZ2luc1xuICAgICAgaW5uZXI6IHtcbiAgICAgICAgbGVmdDogZWxlbWVudFJlY3QubGVmdCxcbiAgICAgICAgdG9wOiBlbGVtZW50UmVjdC50b3AsXG4gICAgICAgIHJpZ2h0OiBlbGVtZW50UmVjdC5yaWdodCxcbiAgICAgICAgYm90dG9tOiBlbGVtZW50UmVjdC5ib3R0b21cbiAgICAgIH0sXG5cbiAgICAgIC8vIHRoZSByZWN0YW5nbGUgb2YgdGhlIGVsZW1lbnQgZXhwYW5kZWQgdG8gY29udGFpbiBpdHMgY2hpbGRyZW4gaW5jbHVkaW5nIG93biBtYXJnaW4gYW5kIGNoaWxkIG1hcmdpbnNcbiAgICAgIC8vIG1hcmdpbnMgd2lsbCBiZSBhZGRlZCBhZnRlciB3ZSd2ZSByZWNhbGN1bGF0ZWQgdGhlIHNpemVcbiAgICAgIG91dGVyOiB7XG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgIGJvdHRvbTogYm90dG9tXG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGV4cGFuZCByZWN0IHRvIGZpdCBhbGwgY2hpbGQgcmVjdGFuZ2xlc1xuICAgIGNoaWxkVmlld3NcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24oY2hpbGRWaWV3KSB7XG4gICAgICAgIHJldHVybiAhY2hpbGRWaWV3LmlzUmVjdElnbm9yZWQoKTtcbiAgICAgIH0pXG4gICAgICAubWFwKGZ1bmN0aW9uKGNoaWxkVmlldykge1xuICAgICAgICByZXR1cm4gY2hpbGRWaWV3LnJlY3Q7XG4gICAgICB9KVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24oY2hpbGRWaWV3UmVjdCkge1xuICAgICAgICBleHBhbmRSZWN0KHJlY3QuaW5uZXIsIF9leHRlbmRzKHt9LCBjaGlsZFZpZXdSZWN0LmlubmVyKSk7XG4gICAgICAgIGV4cGFuZFJlY3QocmVjdC5vdXRlciwgX2V4dGVuZHMoe30sIGNoaWxkVmlld1JlY3Qub3V0ZXIpKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gY2FsY3VsYXRlIGlubmVyIHdpZHRoIGFuZCBoZWlnaHRcbiAgICBjYWxjdWxhdGVSZWN0U2l6ZShyZWN0LmlubmVyKTtcblxuICAgIC8vIGFwcGVuZCBhZGRpdGlvbmFsIG1hcmdpbiAodG9wIGFuZCBsZWZ0IG1hcmdpbnMgYXJlIGluY2x1ZGVkIGluIHRvcCBhbmQgbGVmdCBhdXRvbWF0aWNhbGx5KVxuICAgIHJlY3Qub3V0ZXIuYm90dG9tICs9IHJlY3QuZWxlbWVudC5tYXJnaW5Cb3R0b207XG4gICAgcmVjdC5vdXRlci5yaWdodCArPSByZWN0LmVsZW1lbnQubWFyZ2luUmlnaHQ7XG5cbiAgICAvLyBjYWxjdWxhdGUgb3V0ZXIgd2lkdGggYW5kIGhlaWdodFxuICAgIGNhbGN1bGF0ZVJlY3RTaXplKHJlY3Qub3V0ZXIpO1xuXG4gICAgcmV0dXJuIHJlY3Q7XG4gIH07XG5cbiAgdmFyIGV4cGFuZFJlY3QgPSBmdW5jdGlvbiBleHBhbmRSZWN0KHBhcmVudCwgY2hpbGQpIHtcbiAgICAvLyBhZGp1c3QgZm9yIHBhcmVudCBvZmZzZXRcbiAgICBjaGlsZC50b3AgKz0gcGFyZW50LnRvcDtcbiAgICBjaGlsZC5yaWdodCArPSBwYXJlbnQubGVmdDtcbiAgICBjaGlsZC5ib3R0b20gKz0gcGFyZW50LnRvcDtcbiAgICBjaGlsZC5sZWZ0ICs9IHBhcmVudC5sZWZ0O1xuXG4gICAgaWYgKGNoaWxkLmJvdHRvbSA+IHBhcmVudC5ib3R0b20pIHtcbiAgICAgIHBhcmVudC5ib3R0b20gPSBjaGlsZC5ib3R0b207XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkLnJpZ2h0ID4gcGFyZW50LnJpZ2h0KSB7XG4gICAgICBwYXJlbnQucmlnaHQgPSBjaGlsZC5yaWdodDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNhbGN1bGF0ZVJlY3RTaXplID0gZnVuY3Rpb24gY2FsY3VsYXRlUmVjdFNpemUocmVjdCkge1xuICAgIHJlY3Qud2lkdGggPSByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0O1xuICAgIHJlY3QuaGVpZ2h0ID0gcmVjdC5ib3R0b20gLSByZWN0LnRvcDtcbiAgfTtcblxuICB2YXIgaXNOdW1iZXIgPSBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHBvc2l0aW9uIGlzIGF0IGRlc3RpbmF0aW9uXG4gICAqIEBwYXJhbSBwb3NpdGlvblxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25cbiAgICogQHBhcmFtIHZlbG9jaXR5XG4gICAqIEBwYXJhbSBlcnJvck1hcmdpblxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciB0aGVyZVlldCA9IGZ1bmN0aW9uIHRoZXJlWWV0KHBvc2l0aW9uLCBkZXN0aW5hdGlvbiwgdmVsb2NpdHkpIHtcbiAgICB2YXIgZXJyb3JNYXJnaW4gPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwLjAwMTtcblxuICAgIHJldHVybiAoXG4gICAgICBNYXRoLmFicyhwb3NpdGlvbiAtIGRlc3RpbmF0aW9uKSA8IGVycm9yTWFyZ2luICYmXG4gICAgICBNYXRoLmFicyh2ZWxvY2l0eSkgPCBlcnJvck1hcmdpblxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNwcmluZyBhbmltYXRpb25cbiAgICovXG4gIHZhciBzcHJpbmcgPVxuICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgIGZ1bmN0aW9uIHNwcmluZygpIC8vIG1ldGhvZCBkZWZpbml0aW9uXG4gICAge1xuICAgICAgdmFyIF9yZWYgPVxuICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXVxuICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgX3JlZiRzdGlmZm5lc3MgPSBfcmVmLnN0aWZmbmVzcyxcbiAgICAgICAgc3RpZmZuZXNzID0gX3JlZiRzdGlmZm5lc3MgPT09IHVuZGVmaW5lZCA/IDAuNSA6IF9yZWYkc3RpZmZuZXNzLFxuICAgICAgICBfcmVmJGRhbXBpbmcgPSBfcmVmLmRhbXBpbmcsXG4gICAgICAgIGRhbXBpbmcgPSBfcmVmJGRhbXBpbmcgPT09IHVuZGVmaW5lZCA/IDAuNzUgOiBfcmVmJGRhbXBpbmcsXG4gICAgICAgIF9yZWYkbWFzcyA9IF9yZWYubWFzcyxcbiAgICAgICAgbWFzcyA9IF9yZWYkbWFzcyA9PT0gdW5kZWZpbmVkID8gMTAgOiBfcmVmJG1hc3M7XG5cbiAgICAgIHZhciB0YXJnZXQgPSBudWxsO1xuICAgICAgdmFyIHBvc2l0aW9uID0gbnVsbDtcbiAgICAgIHZhciB2ZWxvY2l0eSA9IDA7XG4gICAgICB2YXIgcmVzdGluZyA9IGZhbHNlO1xuXG4gICAgICAvLyB1cGRhdGVzIHNwcmluZyBzdGF0ZVxuICAgICAgdmFyIGludGVycG9sYXRlID0gZnVuY3Rpb24gaW50ZXJwb2xhdGUoKSB7XG4gICAgICAgIC8vIGluIHJlc3QsIGRvbid0IGFuaW1hdGVcbiAgICAgICAgaWYgKHJlc3RpbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBuZWVkIGF0IGxlYXN0IGEgdGFyZ2V0IG9yIHBvc2l0aW9uIHRvIGRvIHNwcmluZ3kgdGhpbmdzXG4gICAgICAgIGlmICghKGlzTnVtYmVyKHRhcmdldCkgJiYgaXNOdW1iZXIocG9zaXRpb24pKSkge1xuICAgICAgICAgIHJlc3RpbmcgPSB0cnVlO1xuICAgICAgICAgIHZlbG9jaXR5ID0gMDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxjdWxhdGUgc3ByaW5nIGZvcmNlXG4gICAgICAgIHZhciBmID0gLShwb3NpdGlvbiAtIHRhcmdldCkgKiBzdGlmZm5lc3M7XG5cbiAgICAgICAgLy8gdXBkYXRlIHZlbG9jaXR5IGJ5IGFkZGluZyBmb3JjZSBiYXNlZCBvbiBtYXNzXG4gICAgICAgIHZlbG9jaXR5ICs9IGYgLyBtYXNzO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBwb3NpdGlvbiBieSBhZGRpbmcgdmVsb2NpdHlcbiAgICAgICAgcG9zaXRpb24gKz0gdmVsb2NpdHk7XG5cbiAgICAgICAgLy8gc2xvdyBkb3duIGJhc2VkIG9uIGFtb3VudCBvZiBkYW1waW5nXG4gICAgICAgIHZlbG9jaXR5ICo9IGRhbXBpbmc7XG5cbiAgICAgICAgLy8gd2UndmUgYXJyaXZlZCBpZiB3ZSdyZSBuZWFyIHRhcmdldCBhbmQgb3VyIHZlbG9jaXR5IGlzIG5lYXIgemVyb1xuICAgICAgICBpZiAodGhlcmVZZXQocG9zaXRpb24sIHRhcmdldCwgdmVsb2NpdHkpKSB7XG4gICAgICAgICAgcG9zaXRpb24gPSB0YXJnZXQ7XG4gICAgICAgICAgdmVsb2NpdHkgPSAwO1xuICAgICAgICAgIHJlc3RpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gd2UgZG9uZVxuICAgICAgICAgIGFwaS5vbnVwZGF0ZShwb3NpdGlvbik7XG4gICAgICAgICAgYXBpLm9uY29tcGxldGUocG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHByb2dyZXNzIHVwZGF0ZVxuICAgICAgICAgIGFwaS5vbnVwZGF0ZShwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IG5ldyB0YXJnZXQgdmFsdWVcbiAgICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAgICovXG4gICAgICB2YXIgc2V0VGFyZ2V0ID0gZnVuY3Rpb24gc2V0VGFyZ2V0KHZhbHVlKSB7XG4gICAgICAgIC8vIGlmIGN1cnJlbnRseSBoYXMgbm8gcG9zaXRpb24sIHNldCB0YXJnZXQgYW5kIHBvc2l0aW9uIHRvIHRoaXMgdmFsdWVcbiAgICAgICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiAhaXNOdW1iZXIocG9zaXRpb24pKSB7XG4gICAgICAgICAgcG9zaXRpb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBzdGFydCBtb3ZpbmcgdG8gdGFyZ2V0XG4gICAgICAgIHRhcmdldCA9IHZhbHVlO1xuXG4gICAgICAgIC8vIGFscmVhZHkgYXQgdGFyZ2V0XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gdGFyZ2V0IHx8IHR5cGVvZiB0YXJnZXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gbm93IHJlc3RpbmcgYXMgdGFyZ2V0IGlzIGN1cnJlbnQgcG9zaXRpb24sIHN0b3AgbW92aW5nXG4gICAgICAgICAgcmVzdGluZyA9IHRydWU7XG4gICAgICAgICAgdmVsb2NpdHkgPSAwO1xuXG4gICAgICAgICAgLy8gZG9uZSFcbiAgICAgICAgICBhcGkub251cGRhdGUocG9zaXRpb24pO1xuICAgICAgICAgIGFwaS5vbmNvbXBsZXRlKHBvc2l0aW9uKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3RpbmcgPSBmYWxzZTtcbiAgICAgIH07XG5cbiAgICAgIC8vIG5lZWQgJ2FwaScgdG8gY2FsbCBvbnVwZGF0ZSBjYWxsYmFja1xuICAgICAgdmFyIGFwaSA9IGNyZWF0ZU9iamVjdCh7XG4gICAgICAgIGludGVycG9sYXRlOiBpbnRlcnBvbGF0ZSxcbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgc2V0OiBzZXRUYXJnZXQsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzdGluZzoge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3Rpbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbnVwZGF0ZTogZnVuY3Rpb24gb251cGRhdGUodmFsdWUpIHt9LFxuICAgICAgICBvbmNvbXBsZXRlOiBmdW5jdGlvbiBvbmNvbXBsZXRlKHZhbHVlKSB7fVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBhcGk7XG4gICAgfTtcblxuICB2YXIgZWFzZUluT3V0UXVhZCA9IGZ1bmN0aW9uIGVhc2VJbk91dFF1YWQodCkge1xuICAgIHJldHVybiB0IDwgMC41ID8gMiAqIHQgKiB0IDogLTEgKyAoNCAtIDIgKiB0KSAqIHQ7XG4gIH07XG5cbiAgdmFyIHR3ZWVuID1cbiAgICAvLyBkZWZhdWx0IHZhbHVlc1xuICAgIGZ1bmN0aW9uIHR3ZWVuKCkgLy8gbWV0aG9kIGRlZmluaXRpb25cbiAgICB7XG4gICAgICB2YXIgX3JlZiA9XG4gICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdXG4gICAgICAgICAgICA6IHt9LFxuICAgICAgICBfcmVmJGR1cmF0aW9uID0gX3JlZi5kdXJhdGlvbixcbiAgICAgICAgZHVyYXRpb24gPSBfcmVmJGR1cmF0aW9uID09PSB1bmRlZmluZWQgPyA1MDAgOiBfcmVmJGR1cmF0aW9uLFxuICAgICAgICBfcmVmJGVhc2luZyA9IF9yZWYuZWFzaW5nLFxuICAgICAgICBlYXNpbmcgPSBfcmVmJGVhc2luZyA9PT0gdW5kZWZpbmVkID8gZWFzZUluT3V0UXVhZCA6IF9yZWYkZWFzaW5nLFxuICAgICAgICBfcmVmJGRlbGF5ID0gX3JlZi5kZWxheSxcbiAgICAgICAgZGVsYXkgPSBfcmVmJGRlbGF5ID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRkZWxheTtcblxuICAgICAgdmFyIHN0YXJ0ID0gbnVsbDtcbiAgICAgIHZhciB0ID0gdm9pZCAwO1xuICAgICAgdmFyIHAgPSB2b2lkIDA7XG4gICAgICB2YXIgcmVzdGluZyA9IHRydWU7XG4gICAgICB2YXIgcmV2ZXJzZSA9IGZhbHNlO1xuICAgICAgdmFyIHRhcmdldCA9IG51bGw7XG5cbiAgICAgIHZhciBpbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIGludGVycG9sYXRlKHRzKSB7XG4gICAgICAgIGlmIChyZXN0aW5nIHx8IHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydCA9PT0gbnVsbCkge1xuICAgICAgICAgIHN0YXJ0ID0gdHM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHMgLSBzdGFydCA8IGRlbGF5KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdCA9IHRzIC0gc3RhcnQgLSBkZWxheTtcblxuICAgICAgICBpZiAodCA8IGR1cmF0aW9uKSB7XG4gICAgICAgICAgcCA9IHQgLyBkdXJhdGlvbjtcbiAgICAgICAgICBhcGkub251cGRhdGUoKHQgPj0gMCA/IGVhc2luZyhyZXZlcnNlID8gMSAtIHAgOiBwKSA6IDApICogdGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ID0gMTtcbiAgICAgICAgICByZXN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICBwID0gcmV2ZXJzZSA/IDAgOiAxO1xuICAgICAgICAgIGFwaS5vbnVwZGF0ZShwICogdGFyZ2V0KTtcbiAgICAgICAgICBhcGkub25jb21wbGV0ZShwICogdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gbmVlZCAnYXBpJyB0byBjYWxsIG9udXBkYXRlIGNhbGxiYWNrXG4gICAgICB2YXIgYXBpID0gY3JlYXRlT2JqZWN0KHtcbiAgICAgICAgaW50ZXJwb2xhdGU6IGludGVycG9sYXRlLFxuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXZlcnNlID8gMCA6IHRhcmdldDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBpcyBpbml0aWFsIHZhbHVlXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlO1xuICAgICAgICAgICAgICBhcGkub251cGRhdGUodmFsdWUpO1xuICAgICAgICAgICAgICBhcGkub25jb21wbGV0ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gd2FudCB0byB0d2VlbiB0byBhIHNtYWxsZXIgdmFsdWUgYW5kIGhhdmUgYSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUgPCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0ID0gMTtcbiAgICAgICAgICAgICAgcmV2ZXJzZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBub3QgdHdlZW5pbmcgdG8gYSBzbWFsbGVyIHZhbHVlXG4gICAgICAgICAgICAgIHJldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxldCdzIGdvIVxuICAgICAgICAgICAgcmVzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgc3RhcnQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzdGluZzoge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3Rpbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbnVwZGF0ZTogZnVuY3Rpb24gb251cGRhdGUodmFsdWUpIHt9LFxuICAgICAgICBvbmNvbXBsZXRlOiBmdW5jdGlvbiBvbmNvbXBsZXRlKHZhbHVlKSB7fVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBhcGk7XG4gICAgfTtcblxuICB2YXIgYW5pbWF0b3IgPSB7XG4gICAgc3ByaW5nOiBzcHJpbmcsXG4gICAgdHdlZW46IHR3ZWVuXG4gIH07XG5cbiAgLypcbiB7IHR5cGU6ICdzcHJpbmcnLCBzdGlmZm5lc3M6IC41LCBkYW1waW5nOiAuNzUsIG1hc3M6IDEwIH07XG4geyB0cmFuc2xhdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgLi4uIH0sIC4uLiB9XG4geyB0cmFuc2xhdGlvbjogeyB4OiB7IHR5cGU6ICdzcHJpbmcnLCAuLi4gfSB9IH1cbiovXG4gIHZhciBjcmVhdGVBbmltYXRvciA9IGZ1bmN0aW9uIGNyZWF0ZUFuaW1hdG9yKGRlZmluaXRpb24sIGNhdGVnb3J5LCBwcm9wZXJ0eSkge1xuICAgIC8vIGRlZmF1bHQgaXMgc2luZ2xlIGRlZmluaXRpb25cbiAgICAvLyB3ZSBjaGVjayBpZiB0cmFuc2Zvcm0gaXMgc2V0LCBpZiBzbywgd2UgY2hlY2sgaWYgcHJvcGVydHkgaXMgc2V0XG4gICAgdmFyIGRlZiA9XG4gICAgICBkZWZpbml0aW9uW2NhdGVnb3J5XSAmJlxuICAgICAgX3R5cGVvZihkZWZpbml0aW9uW2NhdGVnb3J5XVtwcm9wZXJ0eV0pID09PSAnb2JqZWN0J1xuICAgICAgICA/IGRlZmluaXRpb25bY2F0ZWdvcnldW3Byb3BlcnR5XVxuICAgICAgICA6IGRlZmluaXRpb25bY2F0ZWdvcnldIHx8IGRlZmluaXRpb247XG5cbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBkZWYgPT09ICdzdHJpbmcnID8gZGVmIDogZGVmLnR5cGU7XG4gICAgdmFyIHByb3BzID1cbiAgICAgICh0eXBlb2YgZGVmID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkZWYpKSA9PT0gJ29iamVjdCdcbiAgICAgICAgPyBfZXh0ZW5kcyh7fSwgZGVmKVxuICAgICAgICA6IHt9O1xuXG4gICAgcmV0dXJuIGFuaW1hdG9yW3R5cGVdID8gYW5pbWF0b3JbdHlwZV0ocHJvcHMpIDogbnVsbDtcbiAgfTtcblxuICB2YXIgYWRkR2V0U2V0ID0gZnVuY3Rpb24gYWRkR2V0U2V0KGtleXMsIG9iaiwgcHJvcHMpIHtcbiAgICB2YXIgb3ZlcndyaXRlID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG5cbiAgICBvYmogPSBBcnJheS5pc0FycmF5KG9iaikgPyBvYmogOiBbb2JqXTtcbiAgICBvYmouZm9yRWFjaChmdW5jdGlvbihvKSB7XG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHZhciBuYW1lID0ga2V5O1xuICAgICAgICB2YXIgZ2V0dGVyID0gZnVuY3Rpb24gZ2V0dGVyKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wc1trZXldO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgc2V0dGVyID0gZnVuY3Rpb24gc2V0dGVyKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIChwcm9wc1trZXldID0gdmFsdWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAodHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yoa2V5KSkgPT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIG5hbWUgPSBrZXkua2V5O1xuICAgICAgICAgIGdldHRlciA9IGtleS5nZXR0ZXIgfHwgZ2V0dGVyO1xuICAgICAgICAgIHNldHRlciA9IGtleS5zZXR0ZXIgfHwgc2V0dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9bbmFtZV0gJiYgIW92ZXJ3cml0ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9bbmFtZV0gPSB7XG4gICAgICAgICAgZ2V0OiBnZXR0ZXIsXG4gICAgICAgICAgc2V0OiBzZXR0ZXJcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBpc0VtcHR5ID0gZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsO1xuICB9O1xuXG4gIHZhciBpc0RlZmluZWQgPSBmdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzRW1wdHkodmFsdWUpO1xuICB9O1xuXG4gIC8vIGFkZCB0byBzdGF0ZSxcbiAgLy8gYWRkIGdldHRlcnMgYW5kIHNldHRlcnMgdG8gaW50ZXJuYWwgYW5kIGV4dGVybmFsIGFwaSAoaWYgbm90IHNldClcbiAgLy8gc2V0dXAgYW5pbWF0b3JzXG5cbiAgdmFyIGFuaW1hdGlvbnMgPSBmdW5jdGlvbiBhbmltYXRpb25zKF9yZWYpIHtcbiAgICB2YXIgbWl4aW5Db25maWcgPSBfcmVmLm1peGluQ29uZmlnLFxuICAgICAgdmlld1Byb3BzID0gX3JlZi52aWV3UHJvcHMsXG4gICAgICB2aWV3SW50ZXJuYWxBUEkgPSBfcmVmLnZpZXdJbnRlcm5hbEFQSSxcbiAgICAgIHZpZXdFeHRlcm5hbEFQSSA9IF9yZWYudmlld0V4dGVybmFsQVBJO1xuXG4gICAgLy8gaW5pdGlhbCBwcm9wZXJ0aWVzXG4gICAgdmFyIGluaXRpYWxQcm9wcyA9IF9leHRlbmRzKHt9LCB2aWV3UHJvcHMpO1xuXG4gICAgLy8gbGlzdCBvZiBhbGwgYWN0aXZlIGFuaW1hdGlvbnNcbiAgICB2YXIgYW5pbWF0aW9ucyA9IFtdO1xuXG4gICAgLy8gYWN0aXZlIGFuaW1hdGlvbiBjb3VudGVyXG4gICAgdmFyIGFjdGl2ZUFuaW1hdG9ycyA9IDA7XG5cbiAgICAvLyBzZXR1cCBhbmltYXRvcnNcbiAgICBmb3JpbihtaXhpbkNvbmZpZywgZnVuY3Rpb24ocHJvcGVydHksIGFuaW1hdGlvbikge1xuICAgICAgdmFyIGFuaW1hdG9yID0gY3JlYXRlQW5pbWF0b3IoYW5pbWF0aW9uKTtcbiAgICAgIGlmICghYW5pbWF0b3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB3aGVuIHRoZSBhbmltYXRvciB1cGRhdGVzLCB1cGRhdGUgdGhlIHZpZXcgc3RhdGUgdmFsdWVcbiAgICAgIGFuaW1hdG9yLm9udXBkYXRlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdmlld1Byb3BzW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgfTtcblxuICAgICAgYW5pbWF0b3Iub25jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBhY3RpdmVBbmltYXRvcnMtLTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHNldCBhbmltYXRvciB0YXJnZXRcbiAgICAgIGFjdGl2ZUFuaW1hdG9ycysrO1xuICAgICAgYW5pbWF0b3IudGFyZ2V0ID0gaW5pdGlhbFByb3BzW3Byb3BlcnR5XTtcblxuICAgICAgLy8gd2hlbiB2YWx1ZSBpcyBzZXQsIHNldCB0aGUgYW5pbWF0b3IgdGFyZ2V0IHZhbHVlXG4gICAgICB2YXIgcHJvcCA9IHtcbiAgICAgICAga2V5OiBwcm9wZXJ0eSxcbiAgICAgICAgc2V0dGVyOiBmdW5jdGlvbiBzZXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYW5pbWF0b3IudGFyZ2V0ID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYW5pbWF0b3IucmVzdGluZykge1xuICAgICAgICAgICAgYWN0aXZlQW5pbWF0b3JzKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFuaW1hdG9yLnRhcmdldCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBnZXR0ZXI6IGZ1bmN0aW9uIGdldHRlcigpIHtcbiAgICAgICAgICByZXR1cm4gdmlld1Byb3BzW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gYWRkIGdldHRlcnMgYW5kIHNldHRlcnNcbiAgICAgIGFkZEdldFNldChbcHJvcF0sIFt2aWV3SW50ZXJuYWxBUEksIHZpZXdFeHRlcm5hbEFQSV0sIHZpZXdQcm9wcywgdHJ1ZSk7XG5cbiAgICAgIC8vIGFkZCBpdCB0byB0aGUgbGlzdCBmb3IgZWFzeSB1cGRhdGluZyBmcm9tIHRoZSBfd3JpdGUgbWV0aG9kXG4gICAgICBhbmltYXRpb25zLnB1c2goYW5pbWF0b3IpO1xuICAgIH0pO1xuXG4gICAgLy8gZXhwb3NlIGludGVybmFsIHdyaXRlIGFwaVxuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUodHMpIHtcbiAgICAgICAgYW5pbWF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGFuaW1hdGlvbikge1xuICAgICAgICAgIGFuaW1hdGlvbi5pbnRlcnBvbGF0ZSh0cyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiBhbmltYXRvcnMgYXJlIGFjdGl2ZSwgd2UncmUgYnVzeVxuICAgICAgICByZXR1cm4gYWN0aXZlQW5pbWF0b3JzID09PSAwO1xuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7fVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGFkZEV2ZW50ID0gZnVuY3Rpb24gYWRkRXZlbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBmdW5jdGlvbih0eXBlLCBmbikge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciByZW1vdmVFdmVudCA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odHlwZSwgZm4pIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbik7XG4gICAgfTtcbiAgfTtcblxuICAvLyBtaXhpblxuICB2YXIgbGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKF9yZWYpIHtcbiAgICB2YXIgbWl4aW5Db25maWcgPSBfcmVmLm1peGluQ29uZmlnLFxuICAgICAgdmlld1Byb3BzID0gX3JlZi52aWV3UHJvcHMsXG4gICAgICB2aWV3SW50ZXJuYWxBUEkgPSBfcmVmLnZpZXdJbnRlcm5hbEFQSSxcbiAgICAgIHZpZXdFeHRlcm5hbEFQSSA9IF9yZWYudmlld0V4dGVybmFsQVBJLFxuICAgICAgdmlld1N0YXRlID0gX3JlZi52aWV3U3RhdGUsXG4gICAgICB2aWV3ID0gX3JlZi52aWV3O1xuXG4gICAgdmFyIGV2ZW50cyA9IFtdO1xuXG4gICAgdmFyIGFkZCA9IGFkZEV2ZW50KHZpZXcuZWxlbWVudCk7XG4gICAgdmFyIHJlbW92ZSA9IHJlbW92ZUV2ZW50KHZpZXcuZWxlbWVudCk7XG5cbiAgICB2aWV3RXh0ZXJuYWxBUEkub24gPSBmdW5jdGlvbih0eXBlLCBmbikge1xuICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBmbjogZm5cbiAgICAgIH0pO1xuICAgICAgYWRkKHR5cGUsIGZuKTtcbiAgICB9O1xuXG4gICAgdmlld0V4dGVybmFsQVBJLm9mZiA9IGZ1bmN0aW9uKHR5cGUsIGZuKSB7XG4gICAgICBldmVudHMuc3BsaWNlKFxuICAgICAgICBldmVudHMuZmluZEluZGV4KGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50LnR5cGUgPT09IHR5cGUgJiYgZXZlbnQuZm4gPT09IGZuO1xuICAgICAgICB9KSxcbiAgICAgICAgMVxuICAgICAgKTtcbiAgICAgIHJlbW92ZSh0eXBlLCBmbik7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7XG4gICAgICAgIC8vIG5vdCBidXN5XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgcmVtb3ZlKGV2ZW50LnR5cGUsIGV2ZW50LmZuKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBhZGQgdG8gZXh0ZXJuYWwgYXBpIGFuZCBsaW5rIHRvIHByb3BzXG5cbiAgdmFyIGFwaXMgPSBmdW5jdGlvbiBhcGlzKF9yZWYpIHtcbiAgICB2YXIgbWl4aW5Db25maWcgPSBfcmVmLm1peGluQ29uZmlnLFxuICAgICAgdmlld1Byb3BzID0gX3JlZi52aWV3UHJvcHMsXG4gICAgICB2aWV3RXh0ZXJuYWxBUEkgPSBfcmVmLnZpZXdFeHRlcm5hbEFQSTtcblxuICAgIGFkZEdldFNldChtaXhpbkNvbmZpZywgdmlld0V4dGVybmFsQVBJLCB2aWV3UHJvcHMpO1xuICB9O1xuXG4gIC8vIGFkZCB0byBzdGF0ZSxcbiAgLy8gYWRkIGdldHRlcnMgYW5kIHNldHRlcnMgdG8gaW50ZXJuYWwgYW5kIGV4dGVybmFsIGFwaSAoaWYgbm90IHNldClcbiAgLy8gc2V0IGluaXRpYWwgc3RhdGUgYmFzZWQgb24gcHJvcHMgaW4gdmlld1Byb3BzXG4gIC8vIGFwcGx5IGFzIHRyYW5zZm9ybXMgZWFjaCBmcmFtZVxuXG4gIHZhciBkZWZhdWx0cyQxID0ge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgc2NhbGVYOiAxLFxuICAgIHNjYWxlWTogMSxcbiAgICB0cmFuc2xhdGVYOiAwLFxuICAgIHRyYW5zbGF0ZVk6IDAsXG4gICAgcm90YXRlWDogMCxcbiAgICByb3RhdGVZOiAwLFxuICAgIHJvdGF0ZVo6IDBcbiAgfTtcblxuICB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKF9yZWYpIHtcbiAgICB2YXIgbWl4aW5Db25maWcgPSBfcmVmLm1peGluQ29uZmlnLFxuICAgICAgdmlld1Byb3BzID0gX3JlZi52aWV3UHJvcHMsXG4gICAgICB2aWV3SW50ZXJuYWxBUEkgPSBfcmVmLnZpZXdJbnRlcm5hbEFQSSxcbiAgICAgIHZpZXdFeHRlcm5hbEFQSSA9IF9yZWYudmlld0V4dGVybmFsQVBJLFxuICAgICAgdmlldyA9IF9yZWYudmlldztcblxuICAgIC8vIGluaXRpYWwgcHJvcHNcbiAgICB2YXIgaW5pdGlhbFByb3BzID0gX2V4dGVuZHMoe30sIHZpZXdQcm9wcyk7XG5cbiAgICAvLyBjdXJyZW50IHByb3BzXG4gICAgdmFyIGN1cnJlbnRQcm9wcyA9IHt9O1xuXG4gICAgLy8gd2Ugd2lsbCBhZGQgdGhvc2UgcHJvcGVydGllcyB0byB0aGUgZXh0ZXJuYWwgQVBJIGFuZCBsaW5rIHRoZW0gdG8gdGhlIHZpZXdTdGF0ZVxuICAgIGFkZEdldFNldChtaXhpbkNvbmZpZywgW3ZpZXdJbnRlcm5hbEFQSSwgdmlld0V4dGVybmFsQVBJXSwgdmlld1Byb3BzKTtcblxuICAgIC8vIG92ZXJyaWRlIHJlY3Qgb24gaW50ZXJuYWwgYW5kIGV4dGVybmFsIHJlY3QgZ2V0dGVyIHNvIGl0IHRha2VzIGluIGFjY291bnQgdHJhbnNmb3Jtc1xuICAgIHZhciBnZXRPZmZzZXQgPSBmdW5jdGlvbiBnZXRPZmZzZXQoKSB7XG4gICAgICByZXR1cm4gW3ZpZXdQcm9wc1sndHJhbnNsYXRlWCddIHx8IDAsIHZpZXdQcm9wc1sndHJhbnNsYXRlWSddIHx8IDBdO1xuICAgIH07XG4gICAgdmFyIGdldFNjYWxlID0gZnVuY3Rpb24gZ2V0U2NhbGUoKSB7XG4gICAgICByZXR1cm4gW3ZpZXdQcm9wc1snc2NhbGVYJ10gfHwgMCwgdmlld1Byb3BzWydzY2FsZVknXSB8fCAwXTtcbiAgICB9O1xuICAgIHZhciBnZXRSZWN0ID0gZnVuY3Rpb24gZ2V0UmVjdCgpIHtcbiAgICAgIHJldHVybiB2aWV3LnJlY3RcbiAgICAgICAgPyBnZXRWaWV3UmVjdCh2aWV3LnJlY3QsIHZpZXcuY2hpbGRWaWV3cywgZ2V0T2Zmc2V0KCksIGdldFNjYWxlKCkpXG4gICAgICAgIDogbnVsbDtcbiAgICB9O1xuICAgIHZpZXdJbnRlcm5hbEFQSS5yZWN0ID0geyBnZXQ6IGdldFJlY3QgfTtcbiAgICB2aWV3RXh0ZXJuYWxBUEkucmVjdCA9IHsgZ2V0OiBnZXRSZWN0IH07XG5cbiAgICAvLyBhcHBseSB2aWV3IHByb3BzXG4gICAgbWl4aW5Db25maWcuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZpZXdQcm9wc1trZXldID1cbiAgICAgICAgdHlwZW9mIGluaXRpYWxQcm9wc1trZXldID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgID8gZGVmYXVsdHMkMVtrZXldXG4gICAgICAgICAgOiBpbml0aWFsUHJvcHNba2V5XTtcbiAgICB9KTtcblxuICAgIC8vIGV4cG9zZSBhcGlcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge1xuICAgICAgICAvLyBzZWUgaWYgcHJvcHMgaGF2ZSBjaGFuZ2VkXG4gICAgICAgIGlmICghcHJvcHNIYXZlQ2hhbmdlZChjdXJyZW50UHJvcHMsIHZpZXdQcm9wcykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb3ZlcyBlbGVtZW50IHRvIGNvcnJlY3QgcG9zaXRpb24gb24gc2NyZWVuXG4gICAgICAgIGFwcGx5U3R5bGVzKHZpZXcuZWxlbWVudCwgdmlld1Byb3BzKTtcblxuICAgICAgICAvLyBzdG9yZSBuZXcgdHJhbnNmb3Jtc1xuICAgICAgICBPYmplY3QuYXNzaWduLmFwcGx5KFxuICAgICAgICAgIE9iamVjdCxcbiAgICAgICAgICBbY3VycmVudFByb3BzXS5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkodmlld1Byb3BzKSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBubyBsb25nZXIgYnVzeVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge31cbiAgICB9O1xuICB9O1xuXG4gIHZhciBwcm9wc0hhdmVDaGFuZ2VkID0gZnVuY3Rpb24gcHJvcHNIYXZlQ2hhbmdlZChjdXJyZW50UHJvcHMsIG5ld1Byb3BzKSB7XG4gICAgLy8gZGlmZmVyZW50IGFtb3VudCBvZiBrZXlzXG4gICAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnRQcm9wcykubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhuZXdQcm9wcykubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBsZXRzIGFuYWx5emUgdGhlIGluZGl2aWR1YWwgcHJvcHNcbiAgICBmb3IgKHZhciBwcm9wIGluIG5ld1Byb3BzKSB7XG4gICAgICBpZiAobmV3UHJvcHNbcHJvcF0gIT09IGN1cnJlbnRQcm9wc1twcm9wXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgdmFyIGFwcGx5U3R5bGVzID0gZnVuY3Rpb24gYXBwbHlTdHlsZXMoZWxlbWVudCwgX3JlZjIpIHtcbiAgICB2YXIgb3BhY2l0eSA9IF9yZWYyLm9wYWNpdHksXG4gICAgICB0cmFuc2xhdGVYID0gX3JlZjIudHJhbnNsYXRlWCxcbiAgICAgIHRyYW5zbGF0ZVkgPSBfcmVmMi50cmFuc2xhdGVZLFxuICAgICAgc2NhbGVYID0gX3JlZjIuc2NhbGVYLFxuICAgICAgc2NhbGVZID0gX3JlZjIuc2NhbGVZLFxuICAgICAgcm90YXRlWCA9IF9yZWYyLnJvdGF0ZVgsXG4gICAgICByb3RhdGVZID0gX3JlZjIucm90YXRlWSxcbiAgICAgIHJvdGF0ZVogPSBfcmVmMi5yb3RhdGVaLFxuICAgICAgaGVpZ2h0ID0gX3JlZjIuaGVpZ2h0O1xuXG4gICAgdmFyIHRyYW5zZm9ybXMgPSBbXTtcbiAgICB2YXIgc3R5bGVzID0gW107XG5cbiAgICAvLyB0cmFuc2Zvcm0gb3JkZXIgaXMgcmVsZXZhbnRcblxuICAgIC8vIDEuIHRyYW5zbGF0ZVxuICAgIGlmIChpc0RlZmluZWQodHJhbnNsYXRlWCkgfHwgaXNEZWZpbmVkKHRyYW5zbGF0ZVkpKSB7XG4gICAgICB0cmFuc2Zvcm1zLnB1c2goXG4gICAgICAgICd0cmFuc2xhdGUzZCgnICtcbiAgICAgICAgICAodHJhbnNsYXRlWCB8fCAwKSArXG4gICAgICAgICAgJ3B4LCAnICtcbiAgICAgICAgICAodHJhbnNsYXRlWSB8fCAwKSArXG4gICAgICAgICAgJ3B4LCAwKSdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gMi4gc2NhbGVcbiAgICBpZiAoaXNEZWZpbmVkKHNjYWxlWCkgfHwgaXNEZWZpbmVkKHNjYWxlWSkpIHtcbiAgICAgIHRyYW5zZm9ybXMucHVzaChcbiAgICAgICAgJ3NjYWxlM2QoJyArXG4gICAgICAgICAgKGlzRGVmaW5lZChzY2FsZVgpID8gc2NhbGVYIDogMSkgK1xuICAgICAgICAgICcsICcgK1xuICAgICAgICAgIChpc0RlZmluZWQoc2NhbGVZKSA/IHNjYWxlWSA6IDEpICtcbiAgICAgICAgICAnLCAxKSdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gMy4gcm90YXRlXG4gICAgaWYgKGlzRGVmaW5lZChyb3RhdGVaKSB8fCBpc0RlZmluZWQocm90YXRlWSkgfHwgaXNEZWZpbmVkKHJvdGF0ZVgpKSB7XG4gICAgICB0cmFuc2Zvcm1zLnB1c2goXG4gICAgICAgICdyb3RhdGUzZCgnICtcbiAgICAgICAgICAocm90YXRlWCB8fCAwKSArXG4gICAgICAgICAgJywgJyArXG4gICAgICAgICAgKHJvdGF0ZVkgfHwgMCkgK1xuICAgICAgICAgICcsICcgK1xuICAgICAgICAgIChyb3RhdGVaIHx8IDApICtcbiAgICAgICAgICAnLCAzNjBkZWcpJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgdHJhbnNmb3Jtc1xuICAgIGlmICh0cmFuc2Zvcm1zLmxlbmd0aCkge1xuICAgICAgc3R5bGVzLnB1c2goJ3RyYW5zZm9ybTonICsgdHJhbnNmb3Jtcy5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIC8vIGFkZCBvcGFjaXR5XG4gICAgaWYgKGlzRGVmaW5lZChvcGFjaXR5KSkge1xuICAgICAgc3R5bGVzLnB1c2goJ29wYWNpdHk6JyArIG9wYWNpdHkpO1xuXG4gICAgICAvLyBpZiB3ZSByZWFjaCB6ZXJvLCB3ZSBtYWtlIHRoZSBlbGVtZW50IGluYWNjZXNzaWJsZVxuICAgICAgaWYgKG9wYWNpdHkgPT09IDApIHtcbiAgICAgICAgc3R5bGVzLnB1c2goJ3Zpc2liaWxpdHk6aGlkZGVuJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHdlJ3JlIGJlbG93IDEwMCUgb3BhY2l0eSB0aGlzIGVsZW1lbnQgY2FuJ3QgYmUgY2xpY2tlZFxuICAgICAgaWYgKG9wYWNpdHkgPCAxKSB7XG4gICAgICAgIHN0eWxlcy5wdXNoKCdwb2ludGVyLWV2ZW50czpub25lOycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZCBoZWlnaHRcbiAgICBpZiAoaXNEZWZpbmVkKGhlaWdodCkpIHtcbiAgICAgIHN0eWxlcy5wdXNoKCdoZWlnaHQ6JyArIGhlaWdodCArICdweCcpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IHN0eWxlc1xuICAgIHZhciBjdXJyZW50U3R5bGVzID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgfHwgJyc7XG4gICAgdmFyIG5ld1N0eWxlcyA9IHN0eWxlcy5qb2luKCc7Jyk7XG5cbiAgICAvLyBpZiBuZXcgc3R5bGVzIGRvZXMgbm90IG1hdGNoIGN1cnJlbnQgc3R5bGVzLCBsZXRzIHVwZGF0ZSFcbiAgICBpZiAoXG4gICAgICBuZXdTdHlsZXMubGVuZ3RoICE9PSBjdXJyZW50U3R5bGVzLmxlbmd0aCB8fFxuICAgICAgbmV3U3R5bGVzICE9PSBjdXJyZW50U3R5bGVzXG4gICAgKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBuZXdTdHlsZXMpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgTWl4aW5zID0ge1xuICAgIHN0eWxlczogc3R5bGVzLFxuICAgIGxpc3RlbmVyczogbGlzdGVuZXJzLFxuICAgIGFuaW1hdGlvbnM6IGFuaW1hdGlvbnMsXG4gICAgYXBpczogYXBpc1xuICB9O1xuXG4gIHZhciB1cGRhdGVSZWN0ID0gZnVuY3Rpb24gdXBkYXRlUmVjdCgpIHtcbiAgICB2YXIgcmVjdCA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBlbGVtZW50ID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHN0eWxlID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICByZWN0LnBhZGRpbmdUb3AgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nVG9wLCAxMCkgfHwgMDtcbiAgICByZWN0Lm1hcmdpblRvcCA9IHBhcnNlSW50KHN0eWxlLm1hcmdpblRvcCwgMTApIHx8IDA7XG4gICAgcmVjdC5tYXJnaW5SaWdodCA9IHBhcnNlSW50KHN0eWxlLm1hcmdpblJpZ2h0LCAxMCkgfHwgMDtcbiAgICByZWN0Lm1hcmdpbkJvdHRvbSA9IHBhcnNlSW50KHN0eWxlLm1hcmdpbkJvdHRvbSwgMTApIHx8IDA7XG4gICAgcmVjdC5tYXJnaW5MZWZ0ID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luTGVmdCwgMTApIHx8IDA7XG5cbiAgICByZWN0LmxlZnQgPSBlbGVtZW50Lm9mZnNldExlZnQgfHwgMDtcbiAgICByZWN0LnRvcCA9IGVsZW1lbnQub2Zmc2V0VG9wIHx8IDA7XG4gICAgcmVjdC53aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMDtcbiAgICByZWN0LmhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDA7XG5cbiAgICByZWN0LnJpZ2h0ID0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aDtcbiAgICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQ7XG5cbiAgICByZWN0LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gICAgcmVjdC5oaWRkZW4gPSBlbGVtZW50Lm9mZnNldFBhcmVudCA9PT0gbnVsbDtcblxuICAgIHJldHVybiByZWN0O1xuICB9O1xuXG4gIHZhciBjcmVhdGVWaWV3ID1cbiAgICAvLyBkZWZhdWx0IHZpZXcgZGVmaW5pdGlvblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVZpZXcoKSB7XG4gICAgICB2YXIgX3JlZiA9XG4gICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdXG4gICAgICAgICAgICA6IHt9LFxuICAgICAgICBfcmVmJHRhZyA9IF9yZWYudGFnLFxuICAgICAgICB0YWcgPSBfcmVmJHRhZyA9PT0gdW5kZWZpbmVkID8gJ2RpdicgOiBfcmVmJHRhZyxcbiAgICAgICAgX3JlZiRuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICBuYW1lID0gX3JlZiRuYW1lID09PSB1bmRlZmluZWQgPyBudWxsIDogX3JlZiRuYW1lLFxuICAgICAgICBfcmVmJGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmJGF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCA/IHt9IDogX3JlZiRhdHRyaWJ1dGVzLFxuICAgICAgICBfcmVmJHJlYWQgPSBfcmVmLnJlYWQsXG4gICAgICAgIHJlYWQgPSBfcmVmJHJlYWQgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uKCkge30gOiBfcmVmJHJlYWQsXG4gICAgICAgIF9yZWYkd3JpdGUgPSBfcmVmLndyaXRlLFxuICAgICAgICB3cml0ZSA9IF9yZWYkd3JpdGUgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uKCkge30gOiBfcmVmJHdyaXRlLFxuICAgICAgICBfcmVmJGNyZWF0ZSA9IF9yZWYuY3JlYXRlLFxuICAgICAgICBjcmVhdGUgPSBfcmVmJGNyZWF0ZSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24oKSB7fSA6IF9yZWYkY3JlYXRlLFxuICAgICAgICBfcmVmJGRlc3Ryb3kgPSBfcmVmLmRlc3Ryb3ksXG4gICAgICAgIGRlc3Ryb3kgPSBfcmVmJGRlc3Ryb3kgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uKCkge30gOiBfcmVmJGRlc3Ryb3ksXG4gICAgICAgIF9yZWYkZmlsdGVyRnJhbWVBY3RpbyA9IF9yZWYuZmlsdGVyRnJhbWVBY3Rpb25zRm9yQ2hpbGQsXG4gICAgICAgIGZpbHRlckZyYW1lQWN0aW9uc0ZvckNoaWxkID1cbiAgICAgICAgICBfcmVmJGZpbHRlckZyYW1lQWN0aW8gPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBmdW5jdGlvbihjaGlsZCwgYWN0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IF9yZWYkZmlsdGVyRnJhbWVBY3RpbyxcbiAgICAgICAgX3JlZiRkaWRDcmVhdGVWaWV3ID0gX3JlZi5kaWRDcmVhdGVWaWV3LFxuICAgICAgICBkaWRDcmVhdGVWaWV3ID1cbiAgICAgICAgICBfcmVmJGRpZENyZWF0ZVZpZXcgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uKCkge30gOiBfcmVmJGRpZENyZWF0ZVZpZXcsXG4gICAgICAgIF9yZWYkaWdub3JlUmVjdCA9IF9yZWYuaWdub3JlUmVjdCxcbiAgICAgICAgaWdub3JlUmVjdCA9IF9yZWYkaWdub3JlUmVjdCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJGlnbm9yZVJlY3QsXG4gICAgICAgIF9yZWYkbWl4aW5zID0gX3JlZi5taXhpbnMsXG4gICAgICAgIG1peGlucyA9IF9yZWYkbWl4aW5zID09PSB1bmRlZmluZWQgPyBbXSA6IF9yZWYkbWl4aW5zO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24oXG4gICAgICAgIC8vIGVhY2ggdmlldyByZXF1aXJlcyByZWZlcmVuY2UgdG8gc3RvcmVcbiAgICAgICAgc3RvcmVcbiAgICAgICkge1xuICAgICAgICB2YXIgcHJvcHMgPVxuICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1sxXVxuICAgICAgICAgICAgOiB7fTtcblxuICAgICAgICAvLyByb290IGVsZW1lbnQgc2hvdWxkIG5vdCBiZSBjaGFuZ2VkXG4gICAgICAgIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCh0YWcsICdmaWxlcG9uZC0tJyArIG5hbWUsIGF0dHJpYnV0ZXMpO1xuXG4gICAgICAgIC8vIHN0eWxlIHJlZmVyZW5jZSBzaG91bGQgYWxzbyBub3QgYmUgY2hhbmdlZFxuICAgICAgICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKTtcblxuICAgICAgICAvLyBlbGVtZW50IHJlY3RhbmdsZVxuICAgICAgICB2YXIgcmVjdCA9IHVwZGF0ZVJlY3QoKTtcbiAgICAgICAgdmFyIGZyYW1lUmVjdCA9IG51bGw7XG5cbiAgICAgICAgLy8gcHJldHR5IHNlbGYgZXhwbGFuYXRvcnlcbiAgICAgICAgdmFyIGNoaWxkVmlld3MgPSBbXTtcblxuICAgICAgICAvLyBsb2FkZWQgbWl4aW5zXG4gICAgICAgIHZhciBhY3RpdmVNaXhpbnMgPSBbXTtcblxuICAgICAgICAvLyByZWZlcmVuY2VzIHRvIGNyZWF0ZWQgY2hpbGRyZW5cbiAgICAgICAgdmFyIHJlZiA9IHt9O1xuXG4gICAgICAgIC8vIHN0YXRlIHVzZWQgZm9yIGVhY2ggaW5zdGFuY2VcbiAgICAgICAgdmFyIHN0YXRlID0ge307XG5cbiAgICAgICAgLy8gbGlzdCBvZiB3cml0ZXJzIHRoYXQgd2lsbCBiZSBjYWxsZWQgdG8gdXBkYXRlIHRoaXMgdmlld1xuICAgICAgICB2YXIgd3JpdGVycyA9IFtcbiAgICAgICAgICB3cml0ZSAvLyBkZWZhdWx0IHdyaXRlclxuICAgICAgICBdO1xuXG4gICAgICAgIHZhciByZWFkZXJzID0gW1xuICAgICAgICAgIHJlYWQgLy8gZGVmYXVsdCByZWFkZXJcbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgZGVzdHJveWVycyA9IFtcbiAgICAgICAgICBkZXN0cm95IC8vIGRlZmF1bHQgZGVzdHJveVxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIGNvcmUgdmlldyBtZXRob2RzXG4gICAgICAgIHZhciBnZXRFbGVtZW50ID0gZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdldENoaWxkVmlld3MgPSBmdW5jdGlvbiBnZXRDaGlsZFZpZXdzKCkge1xuICAgICAgICAgIHJldHVybiBbXS5jb25jYXQoY2hpbGRWaWV3cyk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXRSZWZlcmVuY2UgPSBmdW5jdGlvbiBnZXRSZWZlcmVuY2UoKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZjtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNyZWF0ZUNoaWxkVmlldyA9IGZ1bmN0aW9uIGNyZWF0ZUNoaWxkVmlldyhzdG9yZSkge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbih2aWV3LCBwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHZpZXcoc3RvcmUsIHByb3BzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZ2V0UmVjdCA9IGZ1bmN0aW9uIGdldFJlY3QoKSB7XG4gICAgICAgICAgaWYgKGZyYW1lUmVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZyYW1lUmVjdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZnJhbWVSZWN0ID0gZ2V0Vmlld1JlY3QocmVjdCwgY2hpbGRWaWV3cywgWzAsIDBdLCBbMSwgMV0pO1xuICAgICAgICAgIHJldHVybiBmcmFtZVJlY3Q7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXRTdHlsZSA9IGZ1bmN0aW9uIGdldFN0eWxlKCkge1xuICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVhZCBkYXRhIGZyb20gRE9NXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3JlYWQgPSBmdW5jdGlvbiBfcmVhZCgpIHtcbiAgICAgICAgICBmcmFtZVJlY3QgPSBudWxsO1xuXG4gICAgICAgICAgLy8gcmVhZCBjaGlsZCB2aWV3c1xuICAgICAgICAgIGNoaWxkVmlld3MuZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkLl9yZWFkKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyB1cGRhdGUgbXkgcmVjdGFuZ2xlXG4gICAgICAgICAgdXBkYXRlUmVjdChyZWN0LCBlbGVtZW50LCBzdHlsZSk7XG5cbiAgICAgICAgICAvLyB3cml0ZXJzXG4gICAgICAgICAgcmVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHJlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWRlcih7IHJvb3Q6IGludGVybmFsQVBJLCBwcm9wczogcHJvcHMsIHJlY3Q6IHJlY3QgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyaXRlIGRhdGEgdG8gRE9NXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3dyaXRlID0gZnVuY3Rpb24gX3dyaXRlKHRzKSB7XG4gICAgICAgICAgdmFyIGZyYW1lQWN0aW9ucyA9XG4gICAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1sxXVxuICAgICAgICAgICAgICA6IFtdO1xuXG4gICAgICAgICAgLy8gaWYgbm8gYWN0aW9ucywgd2UgYXNzdW1lIHRoYXQgdGhlIHZpZXcgaXMgcmVzdGluZ1xuICAgICAgICAgIHZhciByZXN0aW5nID0gZnJhbWVBY3Rpb25zLmxlbmd0aCA9PT0gMDtcblxuICAgICAgICAgIC8vIHdyaXRlcnNcbiAgICAgICAgICB3cml0ZXJzLmZvckVhY2goZnVuY3Rpb24od3JpdGVyKSB7XG4gICAgICAgICAgICB2YXIgd3JpdGVyUmVzdGluZyA9IHdyaXRlcih7XG4gICAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgICAgICAgcm9vdDogaW50ZXJuYWxBUEksXG4gICAgICAgICAgICAgIGFjdGlvbnM6IGZyYW1lQWN0aW9ucyxcbiAgICAgICAgICAgICAgdGltZXN0YW1wOiB0c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAod3JpdGVyUmVzdGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgcmVzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gcnVuIG1peGluc1xuICAgICAgICAgIGFjdGl2ZU1peGlucy5mb3JFYWNoKGZ1bmN0aW9uKG1peGluKSB7XG4gICAgICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIG1peGlucyBpcyBzdGlsbCBidXN5IGFmdGVyIHdyaXRlIG9wZXJhdGlvbiwgd2UgYXJlIG5vdCByZXN0aW5nXG4gICAgICAgICAgICB2YXIgbWl4aW5SZXN0aW5nID0gbWl4aW4ud3JpdGUodHMpO1xuICAgICAgICAgICAgaWYgKG1peGluUmVzdGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgcmVzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gdXBkYXRlcyBjaGlsZCB2aWV3cyB0aGF0IGFyZSBjdXJyZW50bHkgYXR0YWNoZWQgdG8gdGhlIERPTVxuICAgICAgICAgIGNoaWxkVmlld3NcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICEhY2hpbGQuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICAgIC8vIGlmIGEgY2hpbGQgdmlldyBpcyBub3QgcmVzdGluZywgd2UgYXJlIG5vdCByZXN0aW5nXG4gICAgICAgICAgICAgIHZhciBjaGlsZFJlc3RpbmcgPSBjaGlsZC5fd3JpdGUoXG4gICAgICAgICAgICAgICAgdHMsXG4gICAgICAgICAgICAgICAgZmlsdGVyRnJhbWVBY3Rpb25zRm9yQ2hpbGQoY2hpbGQsIGZyYW1lQWN0aW9ucylcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKCFjaGlsZFJlc3RpbmcpIHtcbiAgICAgICAgICAgICAgICByZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gYXBwZW5kIG5ldyBlbGVtZW50cyB0byBET00gYW5kIHVwZGF0ZSB0aG9zZVxuICAgICAgICAgIGNoaWxkVmlld3NcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICFjaGlsZC5lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgIC8vIGFwcGVuZCB0byBET01cbiAgICAgICAgICAgICAgaW50ZXJuYWxBUEkuYXBwZW5kQ2hpbGQoY2hpbGQuZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgICAgICAgICAgIC8vIGNhbGwgcmVhZCAobmVlZCB0byBrbm93IHRoZSBzaXplIG9mIHRoZXNlIGVsZW1lbnRzKVxuICAgICAgICAgICAgICBjaGlsZC5fcmVhZCgpO1xuXG4gICAgICAgICAgICAgIC8vIHJlLWNhbGwgd3JpdGVcbiAgICAgICAgICAgICAgY2hpbGQuX3dyaXRlKHRzLCBmaWx0ZXJGcmFtZUFjdGlvbnNGb3JDaGlsZChjaGlsZCwgZnJhbWVBY3Rpb25zKSk7XG5cbiAgICAgICAgICAgICAgLy8gd2UganVzdCBhZGRlZCBzb210aGluZyB0byB0aGUgZG9tLCBubyByZXN0XG4gICAgICAgICAgICAgIHJlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gbGV0IHBhcmVudCBrbm93IGlmIHdlIGFyZSByZXN0aW5nXG4gICAgICAgICAgcmV0dXJuIHJlc3Rpbmc7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIF9kZXN0cm95ID0gZnVuY3Rpb24gX2Rlc3Ryb3koKSB7XG4gICAgICAgICAgYWN0aXZlTWl4aW5zLmZvckVhY2goZnVuY3Rpb24obWl4aW4pIHtcbiAgICAgICAgICAgIHJldHVybiBtaXhpbi5kZXN0cm95KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGVzdHJveWVycy5mb3JFYWNoKGZ1bmN0aW9uKGRlc3Ryb3llcikge1xuICAgICAgICAgICAgcmV0dXJuIGRlc3Ryb3llcih7IHJvb3Q6IGludGVybmFsQVBJIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNoaWxkVmlld3MuZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkLl9kZXN0cm95KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc2hhcmVkQVBJXG4gICAgICAgIHZhciBzaGFyZWRBUElEZWZpbml0aW9uID0ge1xuICAgICAgICAgIGVsZW1lbnQ6IHtcbiAgICAgICAgICAgIGdldDogZ2V0RWxlbWVudFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGdldDogZ2V0U3R5bGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkVmlld3M6IHtcbiAgICAgICAgICAgIGdldDogZ2V0Q2hpbGRWaWV3c1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBwcml2YXRlIEFQSSBkZWZpbml0aW9uXG4gICAgICAgIHZhciBpbnRlcm5hbEFQSURlZmluaXRpb24gPSBfZXh0ZW5kcyh7fSwgc2hhcmVkQVBJRGVmaW5pdGlvbiwge1xuICAgICAgICAgIHJlY3Q6IHtcbiAgICAgICAgICAgIGdldDogZ2V0UmVjdFxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICAvLyBhY2Nlc3MgdG8gY3VzdG9tIGNoaWxkcmVuIHJlZmVyZW5jZXNcbiAgICAgICAgICByZWY6IHtcbiAgICAgICAgICAgIGdldDogZ2V0UmVmZXJlbmNlXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIC8vIGRvbSBtb2RpZmllcnNcbiAgICAgICAgICBpczogZnVuY3Rpb24gaXMobmVlZGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gbmVlZGxlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYXBwZW5kQ2hpbGQ6IGFwcGVuZENoaWxkKGVsZW1lbnQpLFxuICAgICAgICAgIGNyZWF0ZUNoaWxkVmlldzogY3JlYXRlQ2hpbGRWaWV3KHN0b3JlKSxcbiAgICAgICAgICBhcHBlbmRDaGlsZFZpZXc6IGFwcGVuZENoaWxkVmlldyhlbGVtZW50LCBjaGlsZFZpZXdzKSxcbiAgICAgICAgICByZW1vdmVDaGlsZFZpZXc6IHJlbW92ZUNoaWxkVmlldyhlbGVtZW50LCBjaGlsZFZpZXdzKSxcbiAgICAgICAgICByZWdpc3RlcldyaXRlcjogZnVuY3Rpb24gcmVnaXN0ZXJXcml0ZXIod3JpdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JpdGVycy5wdXNoKHdyaXRlcik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWdpc3RlclJlYWRlcjogZnVuY3Rpb24gcmVnaXN0ZXJSZWFkZXIocmVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhZGVycy5wdXNoKHJlYWRlcik7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIC8vIGFjY2VzcyB0byBkYXRhIHN0b3JlXG4gICAgICAgICAgZGlzcGF0Y2g6IHN0b3JlLmRpc3BhdGNoLFxuICAgICAgICAgIHF1ZXJ5OiBzdG9yZS5xdWVyeVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBwdWJsaWMgdmlldyBBUEkgbWV0aG9kc1xuICAgICAgICB2YXIgZXh0ZXJuYWxBUElEZWZpbml0aW9uID0ge1xuICAgICAgICAgIGVsZW1lbnQ6IHtcbiAgICAgICAgICAgIGdldDogZ2V0RWxlbWVudFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRWaWV3czoge1xuICAgICAgICAgICAgZ2V0OiBnZXRDaGlsZFZpZXdzXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWN0OiB7XG4gICAgICAgICAgICBnZXQ6IGdldFJlY3RcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzUmVjdElnbm9yZWQ6IGZ1bmN0aW9uIGlzUmVjdElnbm9yZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gaWdub3JlUmVjdDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFkOiBfcmVhZCxcbiAgICAgICAgICBfd3JpdGU6IF93cml0ZSxcbiAgICAgICAgICBfZGVzdHJveTogX2Rlc3Ryb3lcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBtaXhpbiBBUEkgbWV0aG9kc1xuICAgICAgICB2YXIgbWl4aW5BUElEZWZpbml0aW9uID0gX2V4dGVuZHMoe30sIHNoYXJlZEFQSURlZmluaXRpb24sIHtcbiAgICAgICAgICByZWN0OiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgbWl4aW4gZnVuY3Rpb25hbGl0eVxuICAgICAgICBmb3JpbihtaXhpbnMsIGZ1bmN0aW9uKG5hbWUsIGNvbmZpZykge1xuICAgICAgICAgIHZhciBtaXhpbkFQSSA9IE1peGluc1tuYW1lXSh7XG4gICAgICAgICAgICBtaXhpbkNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgdmlld1Byb3BzOiBwcm9wcyxcbiAgICAgICAgICAgIHZpZXdTdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICB2aWV3SW50ZXJuYWxBUEk6IGludGVybmFsQVBJRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHZpZXdFeHRlcm5hbEFQSTogZXh0ZXJuYWxBUElEZWZpbml0aW9uLFxuICAgICAgICAgICAgdmlldzogY3JlYXRlT2JqZWN0KG1peGluQVBJRGVmaW5pdGlvbilcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChtaXhpbkFQSSkge1xuICAgICAgICAgICAgYWN0aXZlTWl4aW5zLnB1c2gobWl4aW5BUEkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc3RydWN0IHByaXZhdGUgYXBpXG4gICAgICAgIHZhciBpbnRlcm5hbEFQSSA9IGNyZWF0ZU9iamVjdChpbnRlcm5hbEFQSURlZmluaXRpb24pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgdmlld1xuICAgICAgICBjcmVhdGUoe1xuICAgICAgICAgIHJvb3Q6IGludGVybmFsQVBJLFxuICAgICAgICAgIHByb3BzOiBwcm9wc1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhcHBlbmQgY3JlYXRlZCBjaGlsZCB2aWV3cyB0byByb290IG5vZGVcbiAgICAgICAgdmFyIGNoaWxkQ291bnQgPSBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgLy8gbmVlZCB0byBrbm93IHRoZSBjdXJyZW50IGNoaWxkIGNvdW50IHNvIGFwcGVuZGluZyBoYXBwZW5zIGluIGNvcnJlY3Qgb3JkZXJcbiAgICAgICAgY2hpbGRWaWV3cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkLCBpbmRleCkge1xuICAgICAgICAgIGludGVybmFsQVBJLmFwcGVuZENoaWxkKGNoaWxkLmVsZW1lbnQsIGNoaWxkQ291bnQgKyBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNhbGwgZGlkIGNyZWF0ZVxuICAgICAgICBkaWRDcmVhdGVWaWV3KGludGVybmFsQVBJKTtcblxuICAgICAgICAvLyBleHBvc2UgcHVibGljIGFwaVxuICAgICAgICByZXR1cm4gY3JlYXRlT2JqZWN0KGV4dGVybmFsQVBJRGVmaW5pdGlvbiwgcHJvcHMpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gIHZhciBjcmVhdGVQYWludGVyID0gZnVuY3Rpb24gY3JlYXRlUGFpbnRlcih1cGRhdGUpIHtcbiAgICB2YXIgZnBzID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogNjA7XG5cbiAgICB2YXIgaW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgIHZhciBsYXN0ID0gbnVsbDtcbiAgICB2YXIgZnJhbWUgPSBudWxsO1xuXG4gICAgdmFyIHRpY2sgPSBmdW5jdGlvbiB0aWNrKHRzKSB7XG4gICAgICAvLyBxdWV1ZSBuZXh0IHRpY2tcbiAgICAgIGZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcblxuICAgICAgLy8gbGltaXQgZnBzXG4gICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgbGFzdCA9IHRzO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGVsdGEgPSB0cyAtIGxhc3Q7XG5cbiAgICAgIGlmIChkZWx0YSA8PSBpbnRlcnZhbCkge1xuICAgICAgICAvLyBza2lwIGZyYW1lXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYWxpZ24gbmV4dCBmcmFtZVxuICAgICAgbGFzdCA9IHRzIC0gZGVsdGEgJSBpbnRlcnZhbDtcblxuICAgICAgLy8gdXBkYXRlIHZpZXdcbiAgICAgIHVwZGF0ZSh0cyk7XG4gICAgfTtcblxuICAgIHRpY2socGVyZm9ybWFuY2Uubm93KCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdXNlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBjcmVhdGVVcGRhdGVyID0gZnVuY3Rpb24gY3JlYXRlVXBkYXRlcihhcHBzLCByZWFkZXIsIHdyaXRlcikge1xuICAgIHJldHVybiBmdW5jdGlvbih0cykge1xuICAgICAgLy8gYWxsIHJlYWRzIGZpcnN0IChhcyB0aGVzZSBhcmUgZnJlZSBhdCB0aGUgc3RhcnQgb2YgdGhlIGZyYW1lKVxuICAgICAgYXBwcy5mb3JFYWNoKGZ1bmN0aW9uKGFwcCkge1xuICAgICAgICByZXR1cm4gYXBwW3JlYWRlcl0oKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBub3cgdXBkYXRlIHRoZSBET01cbiAgICAgIGFwcHMuZm9yRWFjaChmdW5jdGlvbihhcHApIHtcbiAgICAgICAgcmV0dXJuIGFwcFt3cml0ZXJdKHRzKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVJvdXRlID0gZnVuY3Rpb24gY3JlYXRlUm91dGUocm91dGVzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKF9yZWYpIHtcbiAgICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgICBwcm9wcyA9IF9yZWYucHJvcHMsXG4gICAgICAgIF9yZWYkYWN0aW9ucyA9IF9yZWYuYWN0aW9ucyxcbiAgICAgICAgYWN0aW9ucyA9IF9yZWYkYWN0aW9ucyA9PT0gdW5kZWZpbmVkID8gW10gOiBfcmVmJGFjdGlvbnM7XG5cbiAgICAgIGFjdGlvbnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gcm91dGVzW2FjdGlvbi50eXBlXTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHJvdXRlc1thY3Rpb24udHlwZV0oe1xuICAgICAgICAgICAgcm9vdDogcm9vdCxcbiAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLmRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaW5zZXJ0QmVmb3JlID0gZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpIHtcbiAgICByZXR1cm4gcmVmZXJlbmNlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlKTtcbiAgfTtcblxuICB2YXIgaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbiBpbnNlcnRBZnRlcihuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICBuZXdOb2RlLFxuICAgICAgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZ1xuICAgICk7XG4gIH07XG5cbiAgdmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICB9O1xuXG4gIHZhciB0cmltID0gZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnRyaW0oKTtcbiAgfTtcblxuICB2YXIgdG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiAnJyArIHZhbHVlO1xuICB9O1xuXG4gIHZhciB0b0FycmF5JDEgPSBmdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gICAgdmFyIHNwbGl0dGVyID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJywnO1xuXG4gICAgaWYgKGlzRW1wdHkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdG9TdHJpbmcodmFsdWUpXG4gICAgICAuc3BsaXQoc3BsaXR0ZXIpXG4gICAgICAubWFwKHRyaW0pXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLmxlbmd0aDtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHZhciBpc0Jvb2xlYW4gPSBmdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG4gIH07XG5cbiAgdmFyIHRvQm9vbGVhbiA9IGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZSkge1xuICAgIHJldHVybiBpc0Jvb2xlYW4odmFsdWUpID8gdmFsdWUgOiB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9O1xuXG4gIHZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gIH07XG5cbiAgdmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodmFsdWUpXG4gICAgICA/IHZhbHVlXG4gICAgICA6IGlzU3RyaW5nKHZhbHVlKSA/IHRvU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC9bYS16XSsvZ2ksICcnKSA6IDA7XG4gIH07XG5cbiAgdmFyIHRvSW50ID0gZnVuY3Rpb24gdG9JbnQodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodG9OdW1iZXIodmFsdWUpLCAxMCk7XG4gIH07XG5cbiAgdmFyIHRvRmxvYXQgPSBmdW5jdGlvbiB0b0Zsb2F0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodG9OdW1iZXIodmFsdWUpKTtcbiAgfTtcblxuICB2YXIgaXNJbnQgPSBmdW5jdGlvbiBpc0ludCh2YWx1ZSkge1xuICAgIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgaXNGaW5pdGUodmFsdWUpICYmIE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZTtcbiAgfTtcblxuICB2YXIgdG9CeXRlcyA9IGZ1bmN0aW9uIHRvQnl0ZXModmFsdWUpIHtcbiAgICAvLyBpcyBpbiBieXRlc1xuICAgIGlmIChpc0ludCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBpcyBuYXR1cmFsIGZpbGUgc2l6ZVxuICAgIHZhciBuYXR1cmFsRmlsZVNpemUgPSB0b1N0cmluZyh2YWx1ZSkudHJpbSgpO1xuXG4gICAgLy8gaWYgaXMgdmFsdWUgaW4gbWVnYWJ5dGVzXG4gICAgaWYgKC9NQiQvaS50ZXN0KG5hdHVyYWxGaWxlU2l6ZSkpIHtcbiAgICAgIG5hdHVyYWxGaWxlU2l6ZSA9IG5hdHVyYWxGaWxlU2l6ZS5yZXBsYWNlKC9NQiRpLywgJycpLnRyaW0oKTtcbiAgICAgIHJldHVybiB0b0ludChuYXR1cmFsRmlsZVNpemUpICogMTAwMCAqIDEwMDA7XG4gICAgfVxuXG4gICAgLy8gaWYgaXMgdmFsdWUgaW4ga2lsb2J5dGVzXG4gICAgaWYgKC9LQi9pLnRlc3QobmF0dXJhbEZpbGVTaXplKSkge1xuICAgICAgbmF0dXJhbEZpbGVTaXplID0gbmF0dXJhbEZpbGVTaXplLnJlcGxhY2UoL0tCJGkvLCAnJykudHJpbSgpO1xuICAgICAgcmV0dXJuIHRvSW50KG5hdHVyYWxGaWxlU2l6ZSkgKiAxMDAwO1xuICAgIH1cblxuICAgIHJldHVybiB0b0ludChuYXR1cmFsRmlsZVNpemUpO1xuICB9O1xuXG4gIHZhciB0b0Z1bmN0aW9uUmVmZXJlbmNlID0gZnVuY3Rpb24gdG9GdW5jdGlvblJlZmVyZW5jZShzdHJpbmcpIHtcbiAgICB2YXIgcmVmID0gc2VsZjtcbiAgICB2YXIgbGV2ZWxzID0gc3RyaW5nLnNwbGl0KCcuJyk7XG4gICAgdmFyIGxldmVsID0gbnVsbDtcbiAgICB3aGlsZSAoKGxldmVsID0gbGV2ZWxzLnNoaWZ0KCkpKSB7XG4gICAgICByZWYgPSByZWZbbGV2ZWxdO1xuICAgICAgaWYgKCFyZWYpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZWY7XG4gIH07XG5cbiAgdmFyIG1ldGhvZHMgPSB7XG4gICAgcHJvY2VzczogJ1BPU1QnLFxuICAgIHJldmVydDogJ0RFTEVURScsXG4gICAgZmV0Y2g6ICdHRVQnLFxuICAgIHJlc3RvcmU6ICdHRVQnLFxuICAgIGxvYWQ6ICdHRVQnXG4gIH07XG5cbiAgdmFyIGNyZWF0ZVNlcnZlckFQSSA9IGZ1bmN0aW9uIGNyZWF0ZVNlcnZlckFQSShvdXRsaW5lKSB7XG4gICAgdmFyIGFwaSA9IHt9O1xuXG4gICAgYXBpLnVybCA9IGlzU3RyaW5nKG91dGxpbmUpID8gb3V0bGluZSA6IG91dGxpbmUudXJsIHx8ICcnO1xuICAgIGFwaS50aW1lb3V0ID0gb3V0bGluZS50aW1lb3V0ID8gcGFyc2VJbnQob3V0bGluZS50aW1lb3V0LCAxMCkgOiA3MDAwO1xuXG4gICAgZm9yaW4obWV0aG9kcywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICBhcGlba2V5XSA9IGNyZWF0ZUFjdGlvbihrZXksIG91dGxpbmVba2V5XSwgbWV0aG9kc1trZXldLCBhcGkudGltZW91dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXBpO1xuICB9O1xuXG4gIHZhciBjcmVhdGVBY3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVBY3Rpb24obmFtZSwgb3V0bGluZSwgbWV0aG9kLCB0aW1lb3V0KSB7XG4gICAgLy8gaXMgZXhwbGljaXRlbHkgc2V0IHRvIG51bGwgc28gZGlzYWJsZVxuICAgIGlmIChvdXRsaW5lID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBpZiBpcyBjdXN0b20gZnVuY3Rpb24sIGRvbmUhIERldiBoYW5kbGVzIGV2ZXJ5dGhpbmcuXG4gICAgaWYgKHR5cGVvZiBvdXRsaW5lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gb3V0bGluZTtcbiAgICB9XG5cbiAgICAvLyBidWlsZCBhY3Rpb24gb2JqZWN0XG4gICAgdmFyIGFjdGlvbiA9IHtcbiAgICAgIHVybDogbWV0aG9kID09PSAnR0VUJyA/ICc/JyArIG5hbWUgKyAnPScgOiAnJyxcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgaGVhZGVyczoge30sXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgICAgdGltZW91dDogdGltZW91dFxuICAgIH07XG5cbiAgICAvLyBpcyBhIHNpbmdsZSB1cmxcbiAgICBpZiAoaXNTdHJpbmcob3V0bGluZSkpIHtcbiAgICAgIGFjdGlvbi51cmwgPSBvdXRsaW5lO1xuICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG5cbiAgICAvLyBvdmVyd3JpdGVcbiAgICBPYmplY3QuYXNzaWduKGFjdGlvbiwgb3V0bGluZSk7XG5cbiAgICAvLyBzZWUgaWYgc2hvdWxkIHJlZm9ybWF0IGhlYWRlcnM7XG4gICAgaWYgKGlzU3RyaW5nKGFjdGlvbi5oZWFkZXJzKSkge1xuICAgICAgdmFyIHBhcnRzID0gYWN0aW9uLmhlYWRlcnMuc3BsaXQoLzooLispLyk7XG4gICAgICBhY3Rpb24uaGVhZGVycyA9IHtcbiAgICAgICAgaGVhZGVyOiBwYXJ0c1swXSxcbiAgICAgICAgdmFsdWU6IHBhcnRzWzFdXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIGlmIGlzIGJvb2wgd2l0aENyZWRlbnRpYWxzXG4gICAgYWN0aW9uLndpdGhDcmVkZW50aWFscyA9IHRvQm9vbGVhbihhY3Rpb24ud2l0aENyZWRlbnRpYWxzKTtcblxuICAgIHJldHVybiBhY3Rpb247XG4gIH07XG5cbiAgdmFyIHRvU2VydmVyQVBJID0gZnVuY3Rpb24gdG9TZXJ2ZXJBUEkodmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlU2VydmVyQVBJKHZhbHVlKTtcbiAgfTtcblxuICB2YXIgaXNOdWxsID0gZnVuY3Rpb24gaXNOdWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xuICB9O1xuXG4gIHZhciBpc09iamVjdCA9IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKSkgPT09XG4gICAgICAgICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsXG4gICAgKTtcbiAgfTtcblxuICB2YXIgaXNBUEkgPSBmdW5jdGlvbiBpc0FQSSh2YWx1ZSkge1xuICAgIHJldHVybiAoXG4gICAgICBpc09iamVjdCh2YWx1ZSkgJiZcbiAgICAgIGlzU3RyaW5nKHZhbHVlLnVybCkgJiZcbiAgICAgIGlzT2JqZWN0KHZhbHVlLnByb2Nlc3MpICYmXG4gICAgICBpc09iamVjdCh2YWx1ZS5yZXZlcnQpICYmXG4gICAgICBpc09iamVjdCh2YWx1ZS5yZXN0b3JlKSAmJlxuICAgICAgaXNPYmplY3QodmFsdWUuZmV0Y2gpXG4gICAgKTtcbiAgfTtcblxuICB2YXIgZ2V0VHlwZSA9IGZ1bmN0aW9uIGdldFR5cGUodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cblxuICAgIGlmIChpc051bGwodmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ251bGwnO1xuICAgIH1cblxuICAgIGlmIChpc0ludCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnaW50JztcbiAgICB9XG5cbiAgICBpZiAoL15bMC05XSsgPyg/OkdCfE1CfEtCKSQvZ2kudGVzdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYnl0ZXMnO1xuICAgIH1cblxuICAgIGlmIChpc0FQSSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXBpJztcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSk7XG4gIH07XG5cbiAgdmFyIGNvbnZlcnNpb25UYWJsZSA9IHtcbiAgICBhcnJheTogdG9BcnJheSQxLFxuICAgIGJvb2xlYW46IHRvQm9vbGVhbixcbiAgICBpbnQ6IGZ1bmN0aW9uIGludCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGdldFR5cGUodmFsdWUpID09PSAnYnl0ZXMnID8gdG9CeXRlcyh2YWx1ZSkgOiB0b0ludCh2YWx1ZSk7XG4gICAgfSxcbiAgICBmbG9hdDogdG9GbG9hdCxcbiAgICBieXRlczogdG9CeXRlcyxcbiAgICBzdHJpbmc6IHRvU3RyaW5nLFxuICAgIHNlcnZlcmFwaTogdG9TZXJ2ZXJBUEksXG4gICAgZnVuY3Rpb246IGZ1bmN0aW9uIF9mdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRvRnVuY3Rpb25SZWZlcmVuY2UodmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY29udmVydFRvID0gZnVuY3Rpb24gY29udmVydFRvKHZhbHVlLCB0eXBlKSB7XG4gICAgcmV0dXJuIGNvbnZlcnNpb25UYWJsZVt0eXBlXSh2YWx1ZSk7XG4gIH07XG5cbiAgdmFyIGdldFZhbHVlQnlUeXBlID0gZnVuY3Rpb24gZ2V0VmFsdWVCeVR5cGUoXG4gICAgbmV3VmFsdWUsXG4gICAgZGVmYXVsdFZhbHVlLFxuICAgIHZhbHVlVHlwZVxuICApIHtcbiAgICAvLyBjYW4gYWx3YXlzIGFzc2lnbiBkZWZhdWx0IHZhbHVlXG4gICAgaWYgKG5ld1ZhbHVlID09PSBkZWZhdWx0VmFsdWUpIHtcbiAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyBnZXQgdGhlIHR5cGUgb2YgdGhlIG5ldyB2YWx1ZVxuICAgIHZhciBuZXdWYWx1ZVR5cGUgPSBnZXRUeXBlKG5ld1ZhbHVlKTtcblxuICAgIC8vIGlzIHZhbGlkIHR5cGU/XG4gICAgaWYgKG5ld1ZhbHVlVHlwZSAhPT0gdmFsdWVUeXBlKSB7XG4gICAgICAvLyBpcyBzdHJpbmcgaW5wdXQsIGxldCdzIGF0dGVtcHQgdG8gY29udmVydFxuICAgICAgdmFyIGNvbnZlcnRlZFZhbHVlID0gY29udmVydFRvKG5ld1ZhbHVlLCB2YWx1ZVR5cGUpO1xuXG4gICAgICAvLyB3aGF0IGlzIHRoZSB0eXBlIG5vd1xuICAgICAgbmV3VmFsdWVUeXBlID0gZ2V0VHlwZShjb252ZXJ0ZWRWYWx1ZSk7XG5cbiAgICAgIC8vIG5vIHZhbGlkIGNvbnZlcnNpb25zIGZvdW5kXG4gICAgICBpZiAoY29udmVydGVkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgJ1RyeWluZyB0byBhc3NpZ24gdmFsdWUgd2l0aCBpbmNvcnJlY3QgdHlwZSB0byBcIicgK1xuICAgICAgICAgIG9wdGlvbiArXG4gICAgICAgICAgJ1wiLCBhbGxvd2VkIHR5cGU6IFwiJyArXG4gICAgICAgICAgdmFsdWVUeXBlICtcbiAgICAgICAgICAnXCInO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBjb252ZXJ0ZWRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhc3NpZ24gbmV3IHZhbHVlXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xuICB9O1xuXG4gIHZhciBjcmVhdGVPcHRpb24gPSBmdW5jdGlvbiBjcmVhdGVPcHRpb24ob3B0aW9uLCBkZWZhdWx0VmFsdWUsIHZhbHVlVHlwZSkge1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3VmFsdWUpIHtcbiAgICAgICAgY3VycmVudFZhbHVlID0gZ2V0VmFsdWVCeVR5cGUobmV3VmFsdWUsIGRlZmF1bHRWYWx1ZSwgdmFsdWVUeXBlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBjcmVhdGVPcHRpb25zID0gZnVuY3Rpb24gY3JlYXRlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvcmluKG9wdGlvbnMsIGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgIHZhciBvcHRpb25EZWZpbml0aW9uID0gb3B0aW9uc1twcm9wXTtcbiAgICAgIG9ialtwcm9wXSA9IGNyZWF0ZU9wdGlvbihwcm9wLCBvcHRpb25EZWZpbml0aW9uWzBdLCBvcHRpb25EZWZpbml0aW9uWzFdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY3JlYXRlT2JqZWN0KG9iaik7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxTdGF0ZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIG1vZGVsXG4gICAgICBpdGVtczogW10sXG5cbiAgICAgIC8vIG9wdGlvbnNcbiAgICAgIG9wdGlvbnM6IGNyZWF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICB9O1xuICB9O1xuXG4gIHZhciBmcm9tQ2FtZWxzID0gZnVuY3Rpb24gZnJvbUNhbWVscyhzdHJpbmcpIHtcbiAgICB2YXIgc2VwYXJhdG9yID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJy0nO1xuICAgIHJldHVybiBzdHJpbmdcbiAgICAgIC5zcGxpdCgvKD89W0EtWl0pLylcbiAgICAgIC5tYXAoZnVuY3Rpb24ocGFydCkge1xuICAgICAgICByZXR1cm4gcGFydC50b0xvd2VyQ2FzZSgpO1xuICAgICAgfSlcbiAgICAgIC5qb2luKHNlcGFyYXRvcik7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZU9wdGlvbkFQSSA9IGZ1bmN0aW9uIGNyZWF0ZU9wdGlvbkFQSShzdG9yZSwgb3B0aW9ucykge1xuICAgIHZhciBvYmogPSB7fTtcbiAgICBmb3JpbihvcHRpb25zLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgIG9ialtrZXldID0ge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gc3RvcmUuZ2V0U3RhdGUoKS5vcHRpb25zW2tleV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ1NFVF8nICsgZnJvbUNhbWVscyhrZXksICdfJykudG9VcHBlckNhc2UoKSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICB2YXIgY3JlYXRlT3B0aW9uQWN0aW9ucyA9IGZ1bmN0aW9uIGNyZWF0ZU9wdGlvbkFjdGlvbnMob3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCwgcXVlcnksIHN0YXRlKSB7XG4gICAgICB2YXIgb2JqID0ge307XG4gICAgICBmb3JpbihvcHRpb25zLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBmcm9tQ2FtZWxzKGtleSwgJ18nKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBvYmpbJ1NFVF8nICsgbmFtZV0gPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RhdGUub3B0aW9uc1trZXldID0gYWN0aW9uLnZhbHVlO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgLy8gbm9wZSwgZmFpbGVkXG5cbiAgICAgICAgICAvLyB3ZSBzdWNjZXNzZnVsbHkgc2V0IHRoZSB2YWx1ZSBvZiB0aGlzIG9wdGlvblxuICAgICAgICAgIGRpc3BhdGNoKCdESURfU0VUXycgKyBuYW1lLCB7IHZhbHVlOiBzdGF0ZS5vcHRpb25zW2tleV0gfSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY3JlYXRlT3B0aW9uUXVlcmllcyA9IGZ1bmN0aW9uIGNyZWF0ZU9wdGlvblF1ZXJpZXMob3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgZm9yaW4ob3B0aW9ucywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIG9ialsnR0VUXycgKyBmcm9tQ2FtZWxzKGtleSwgJ18nKS50b1VwcGVyQ2FzZSgpXSA9IGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5vcHRpb25zW2tleV07XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgSW50ZXJhY3Rpb25NZXRob2QgPSB7XG4gICAgQVBJOiAxLFxuICAgIERST1A6IDIsXG4gICAgQlJPV1NFOiAzLFxuICAgIFBBU1RFOiA0LFxuICAgIE5PTkU6IDVcbiAgfTtcblxuICB2YXIgZ2V0VW5pcXVlSWQgPSBmdW5jdGlvbiBnZXRVbmlxdWVJZCgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKVxuICAgICAgLnRvU3RyaW5nKDM2KVxuICAgICAgLnN1YnN0cigyLCA5KTtcbiAgfTtcblxuICB2YXIgZm9yRWFjaERlbGF5ZWQgPSBmdW5jdGlvbiBmb3JFYWNoRGVsYXllZChpdGVtcywgY2IpIHtcbiAgICB2YXIgZGVsYXkgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiA3NTtcbiAgICByZXR1cm4gaXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2IoaXRlbSk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LCBkZWxheSAqIGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBhcnJheVJlbW92ZSA9IGZ1bmN0aW9uIGFycmF5UmVtb3ZlKGFyciwgaW5kZXgpIHtcbiAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgdmFyIG9uID0gZnVuY3Rpb24gb24oKSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgIHZhciBvZmYgPSBmdW5jdGlvbiBvZmYoZXZlbnQsIGNiKSB7XG4gICAgICBhcnJheVJlbW92ZShcbiAgICAgICAgbGlzdGVuZXJzLFxuICAgICAgICBsaXN0ZW5lcnMuZmluZEluZGV4KGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmV2ZW50ID09PSBldmVudCAmJiAobGlzdGVuZXIuY2IgPT09IGNiIHx8ICFjYik7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpcmU6IGZ1bmN0aW9uIGZpcmUoZXZlbnQpIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLFxuICAgICAgICAgICAgX2tleSA9IDE7XG4gICAgICAgICAgX2tleSA8IF9sZW47XG4gICAgICAgICAgX2tleSsrXG4gICAgICAgICkge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBsaXN0ZW5lcnNcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmV2ZW50ID09PSBldmVudDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lci5jYjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihjYikge1xuICAgICAgICAgICAgICBjYi5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfSxcbiAgICAgIG9uOiBmdW5jdGlvbiBvbihldmVudCwgY2IpIHtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2goeyBldmVudDogZXZlbnQsIGNiOiBjYiB9KTtcbiAgICAgIH0sXG4gICAgICBvbk9uY2U6IGZ1bmN0aW9uIG9uT25jZShldmVudCwgX2NiKSB7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgY2I6IGZ1bmN0aW9uIGNiKCkge1xuICAgICAgICAgICAgb2ZmKGV2ZW50LCBfY2IpO1xuICAgICAgICAgICAgX2NiLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9mZjogb2ZmXG4gICAgfTtcbiAgfTtcblxuICB2YXIgY29weU9iamVjdFByb3BlcnRpZXNUb09iamVjdCA9IGZ1bmN0aW9uIGNvcHlPYmplY3RQcm9wZXJ0aWVzVG9PYmplY3QoXG4gICAgc3JjLFxuICAgIHRhcmdldCxcbiAgICBleGNsdWRlZFxuICApIHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzcmMpXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiAhZXhjbHVkZWQuaW5jbHVkZXMocHJvcGVydHkpO1xuICAgICAgfSlcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzcmMsIGtleSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHZhciBQUklWQVRFX01FVEhPRFMgPSBbXG4gICAgJ2ZpcmUnLFxuICAgICdwcm9jZXNzJyxcbiAgICAncmV2ZXJ0JyxcbiAgICAnbG9hZCcsXG4gICAgJ29uJyxcbiAgICAnb2ZmJyxcbiAgICAnb25PbmNlJyxcbiAgICAncmV0cnlMb2FkJ1xuICBdO1xuXG4gIHZhciBjcmVhdGVJdGVtQVBJID0gZnVuY3Rpb24gY3JlYXRlSXRlbUFQSShpdGVtKSB7XG4gICAgdmFyIGFwaSA9IHt9O1xuICAgIGNvcHlPYmplY3RQcm9wZXJ0aWVzVG9PYmplY3QoaXRlbSwgYXBpLCBQUklWQVRFX01FVEhPRFMpO1xuICAgIHJldHVybiBhcGk7XG4gIH07XG5cbiAgdmFyIGdldE5vbk51bWVyaWMgPSBmdW5jdGlvbiBnZXROb25OdW1lcmljKHN0cikge1xuICAgIHJldHVybiAvW14wLTldKy8uZXhlYyhzdHIpO1xuICB9O1xuXG4gIHZhciBnZXREZWNpbWFsU2VwYXJhdG9yID0gZnVuY3Rpb24gZ2V0RGVjaW1hbFNlcGFyYXRvcigpIHtcbiAgICByZXR1cm4gZ2V0Tm9uTnVtZXJpYygoMS4xKS50b0xvY2FsZVN0cmluZygpKVswXTtcbiAgfTtcblxuICB2YXIgZ2V0VGhvdXNhbmRzU2VwYXJhdG9yID0gZnVuY3Rpb24gZ2V0VGhvdXNhbmRzU2VwYXJhdG9yKCkge1xuICAgIC8vIEFkZGVkIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCByZXR1cm4gdGhlIHRob3VzYW5kcyBzZXBhcmF0b3IgKGhhcHBlbmQgb24gbmF0aXZlIGJyb3dzZXIgQW5kcm9pZCA0LjQuNClcbiAgICAvLyBXZSBjaGVjayBhZ2FpbnN0IHRoZSBub3JtYWwgdG9TdHJpbmcgb3V0cHV0IGFuZCBpZiB0aGV5J3JlIHRoZSBzYW1lIHJldHVybiBhIGNvbW1hIHdoZW4gZGVjaW1hbCBzZXBhcmF0b3IgaXMgYSBkb3RcbiAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IGdldERlY2ltYWxTZXBhcmF0b3IoKTtcbiAgICB2YXIgdGhvdXNhbmRzU3RyaW5nV2l0aFNlcGFyYXRvciA9ICgxMDAwLjApLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgdmFyIHRob3VzYW5kc1N0cmluZ1dpdGhvdXRTZXBhcmF0b3IgPSAoMTAwMC4wKS50b1N0cmluZygpO1xuICAgIGlmICh0aG91c2FuZHNTdHJpbmdXaXRoU2VwYXJhdG9yICE9PSB0aG91c2FuZHNTdHJpbmdXaXRob3V0U2VwYXJhdG9yKSB7XG4gICAgICByZXR1cm4gZ2V0Tm9uTnVtZXJpYyh0aG91c2FuZHNTdHJpbmdXaXRoU2VwYXJhdG9yKVswXTtcbiAgICB9XG4gICAgcmV0dXJuIGRlY2ltYWxTZXBhcmF0b3IgPT09ICcuJyA/ICcsJyA6ICcuJztcbiAgfTtcblxuICB2YXIgVHlwZSA9IHtcbiAgICBCT09MRUFOOiAnYm9vbGVhbicsXG4gICAgSU5UOiAnaW50JyxcbiAgICBTVFJJTkc6ICdzdHJpbmcnLFxuICAgIEFSUkFZOiAnYXJyYXknLFxuICAgIE9CSkVDVDogJ29iamVjdCcsXG4gICAgRlVOQ1RJT046ICdmdW5jdGlvbicsXG4gICAgQUNUSU9OOiAnYWN0aW9uJyxcbiAgICBTRVJWRVJfQVBJOiAnc2VydmVyYXBpJyxcbiAgICBSRUdFWDogJ3JlZ2V4J1xuICB9O1xuXG4gIC8vIGFsbCByZWdpc3RlcmVkIGZpbHRlcnNcbiAgdmFyIGZpbHRlcnMgPSBbXTtcblxuICAvLyBsb29wcyBvdmVyIG1hdGNoaW5nIGZpbHRlcnMgYW5kIHBhc3NlcyBvcHRpb25zIHRvIGVhY2ggZmlsdGVyLCByZXR1cm5pbmcgdGhlIG1hcHBlZCByZXN1bHRzXG4gIHZhciBhcHBseUZpbHRlckNoYWluID0gZnVuY3Rpb24gYXBwbHlGaWx0ZXJDaGFpbihrZXksIHZhbHVlLCB1dGlscykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8vIGZpbmQgbWF0Y2hpbmcgZmlsdGVycyBmb3IgdGhpcyBrZXlcbiAgICAgIHZhciBtYXRjaGluZ0ZpbHRlcnMgPSBmaWx0ZXJzXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oZikge1xuICAgICAgICAgIHJldHVybiBmLmtleSA9PT0ga2V5O1xuICAgICAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICByZXR1cm4gZi5jYjtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIHJlc29sdmUgbm93XG4gICAgICBpZiAobWF0Y2hpbmdGaWx0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBmaXJzdCBmaWx0ZXIgdG8ga2ljayB0aGluZ3Mgb2ZcbiAgICAgIHZhciBpbml0aWFsRmlsdGVyID0gbWF0Y2hpbmdGaWx0ZXJzLnNoaWZ0KCk7XG5cbiAgICAgIC8vIGNoYWluIGZpbHRlcnNcbiAgICAgIG1hdGNoaW5nRmlsdGVyc1xuICAgICAgICAucmVkdWNlKFxuICAgICAgICAgIC8vIGxvb3Agb3ZlciBwcm9taXNlcyBwYXNzaW5nIHZhbHVlIHRvIG5leHQgcHJvbWlzZVxuICAgICAgICAgIGZ1bmN0aW9uKGN1cnJlbnQsIG5leHQpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50LnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQodmFsdWUsIHV0aWxzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICAvLyBjYWxsIGluaXRpYWwgZmlsdGVyLCB3aWxsIHJldHVybiBhIHByb21pc2VcbiAgICAgICAgICBpbml0aWFsRmlsdGVyKHZhbHVlLCB1dGlscylcblxuICAgICAgICAgIC8vIGFsbCBleGVjdXRlZFxuICAgICAgICApXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGFwcGx5RmlsdGVycyA9IGZ1bmN0aW9uIGFwcGx5RmlsdGVycyhrZXksIHZhbHVlLCB1dGlscykge1xuICAgIHJldHVybiBmaWx0ZXJzXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgcmV0dXJuIGYua2V5ID09PSBrZXk7XG4gICAgICB9KVxuICAgICAgLm1hcChmdW5jdGlvbihmKSB7XG4gICAgICAgIHJldHVybiBmLmNiKHZhbHVlLCB1dGlscyk7XG4gICAgICB9KTtcbiAgfTtcblxuICAvLyBhZGRzIGEgbmV3IGZpbHRlciB0byB0aGUgbGlzdFxuICB2YXIgYWRkRmlsdGVyID0gZnVuY3Rpb24gYWRkRmlsdGVyKGtleSwgY2IpIHtcbiAgICByZXR1cm4gZmlsdGVycy5wdXNoKHsga2V5OiBrZXksIGNiOiBjYiB9KTtcbiAgfTtcblxuICB2YXIgZXh0ZW5kRGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiBleHRlbmREZWZhdWx0T3B0aW9ucyhhZGRpdGlvbmFsT3B0aW9ucykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBhZGRpdGlvbmFsT3B0aW9ucyk7XG4gIH07XG5cbiAgdmFyIGdldE9wdGlvbnMkMSA9IGZ1bmN0aW9uIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucyk7XG4gIH07XG5cbiAgdmFyIHNldE9wdGlvbnMkMSA9IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0cykge1xuICAgIGZvcmluKG9wdHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIC8vIGtleSBkb2VzIG5vdCBleGlzdCwgc28gdGhpcyBvcHRpb24gY2Fubm90IGJlIHNldFxuICAgICAgaWYgKCFkZWZhdWx0T3B0aW9uc1trZXldKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHRPcHRpb25zW2tleV1bMF0gPSBnZXRWYWx1ZUJ5VHlwZShcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGRlZmF1bHRPcHRpb25zW2tleV1bMF0sXG4gICAgICAgIGRlZmF1bHRPcHRpb25zW2tleV1bMV1cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gZGVmYXVsdCBvcHRpb25zIG9uIGFwcFxuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgLy8gdGhlIGlkIHRvIGFkZCB0byB0aGUgcm9vdCBlbGVtZW50XG4gICAgaWQ6IFtudWxsLCBUeXBlLlNUUklOR10sXG5cbiAgICAvLyBpbnB1dCBmaWVsZCBuYW1lIHRvIHVzZVxuICAgIG5hbWU6IFsnZmlsZXBvbmQnLCBUeXBlLlNUUklOR10sXG5cbiAgICAvLyBjbGFzc25hbWUgdG8gcHV0IG9uIHdyYXBwZXJcbiAgICBjbGFzc05hbWU6IFtudWxsLCBUeXBlLlNUUklOR10sXG5cbiAgICAvLyBpcyB0aGUgZmllbGQgcmVxdWlyZWRcbiAgICByZXF1aXJlZDogW2ZhbHNlLCBUeXBlLkJPT0xFQU5dLFxuXG4gICAgLy8gQWxsb3cgbWVkaWEgY2FwdHVyZSB3aGVuIHZhbHVlIGlzIHNldFxuICAgIGNhcHR1cmVNZXRob2Q6IFtudWxsLCBUeXBlLlNUUklOR10sXG4gICAgLy8gLSBcImNhbWVyYVwiLCBcIm1pY3JvcGhvbmVcIiBvciBcImNhbWNvcmRlclwiLFxuICAgIC8vIC0gRG9lcyBub3Qgd29yayB3aXRoIG11bHRpcGxlIG9uIGFwcGxlIGRldmljZXNcbiAgICAvLyAtIElmIHNldCwgYWNjZXB0ZWRGaWxlVHlwZXMgbXVzdCBiZSBtYWRlIHRvIG1hdGNoIHdpdGggbWVkaWEgd2lsZGNhcmQgXCJpbWFnZS8qXCIsIFwiYXVkaW8vKlwiIG9yIFwidmlkZW8vKlwiXG5cbiAgICAvLyBGZWF0dXJlIHRvZ2dsZXNcbiAgICBhbGxvd0Ryb3A6IFt0cnVlLCBUeXBlLkJPT0xFQU5dLCAvLyBBbGxvdyBkcm9wcGluZyBvZiBmaWxlc1xuICAgIGFsbG93QnJvd3NlOiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSwgLy8gQWxsb3cgYnJvd3NpbmcgdGhlIGZpbGUgc3lzdGVtXG4gICAgYWxsb3dQYXN0ZTogW3RydWUsIFR5cGUuQk9PTEVBTl0sIC8vIEFsbG93IHBhc3RpbmcgZmlsZXNcbiAgICBhbGxvd011bHRpcGxlOiBbZmFsc2UsIFR5cGUuQk9PTEVBTl0sIC8vIEFsbG93IG11bHRpcGxlIGZpbGVzIChkaXNhYmxlZCBieSBkZWZhdWx0LCBhcyBtdWx0aXBsZSBhdHRyaWJ1dGUgaXMgYWxzbyByZXF1aXJlZCBvbiBpbnB1dCB0byBhbGxvdyBtdWx0aXBsZSlcbiAgICBhbGxvd1JlcGxhY2U6IFt0cnVlLCBUeXBlLkJPT0xFQU5dLCAvLyBBbGxvdyBkcm9wcGluZyBhIGZpbGUgb24gb3RoZXIgZmlsZSB0byByZXBsYWNlIGl0IChvbmx5IHdvcmtzIHdoZW4gbXVsdGlwbGUgaXMgc2V0IHRvIGZhbHNlKVxuICAgIGFsbG93UmV2ZXJ0OiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSwgLy8gQWxsb3dzIHVzZXIgdG8gcmV2ZXJ0IGZpbGUgdXBsb2FkXG4gICAgLy8gVE9ETzogYWxsb3dEcmFnOiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSxcdFx0XHRcdFx0Ly8gQWxsb3cgZHJhZ2dpbmcgZmlsZXNcbiAgICAvLyBUT0RPOiBhbGxvd1N3aXBlOiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSxcdFx0XHRcdFx0Ly8gQWxsb3cgc3dpcGUgdG8gcmVtb3ZlIGZpbGVzXG4gICAgLy8gVE9ETzogYWxsb3dSZW1vdmVBbGw6IFt0cnVlLCBUeXBlLkJPT0xFQU5dLFx0XHRcdFx0Ly8gQWxsb3cgcmVtb3ZpbmcgYWxsIGl0ZW1zIGF0IG9uY2VcbiAgICAvLyBUT0RPOiBhbGxvd1VwbG9hZEFsbDogW3RydWUsIFR5cGUuQk9PTEVBTl0sXHRcdFx0XHQvLyBBbGxvdyB1cGxvYWRpbmcgYWxsIGl0ZW1zIGF0IG9uY2VcblxuICAgIC8vIElucHV0IHJlcXVpcmVtZW50c1xuICAgIG1heEZpbGVzOiBbbnVsbCwgVHlwZS5JTlRdLCAvLyBNYXggbnVtYmVyIG9mIGZpbGVzXG5cbiAgICAvLyBEcmFnICduIERyb3AgcmVsYXRlZFxuICAgIGRyb3BPblBhZ2U6IFtmYWxzZSwgVHlwZS5CT09MRUFOXSwgLy8gQWxsb3cgZHJvcHBpbmcgb2YgZmlsZXMgYW55d2hlcmUgb24gcGFnZSAocHJldmVudHMgYnJvd3NlciBmcm9tIG9wZW5pbmcgZmlsZSBpZiBkcm9wcGVkIG91dHNpZGUgb2YgVXApXG4gICAgZHJvcE9uRWxlbWVudDogW3RydWUsIFR5cGUuQk9PTEVBTl0sIC8vIERyb3AgbmVlZHMgdG8gaGFwcGVuIG9uIGVsZW1lbnQgKHNldCB0byBmYWxzZSB0byBhbHNvIGxvYWQgZHJvcHMgb3V0c2lkZSBvZiBVcClcbiAgICBkcm9wVmFsaWRhdGlvbjogW2ZhbHNlLCBUeXBlLkJPT0xFQU5dLCAvLyBFbmFibGUgb3IgZGlzYWJsZSB2YWxpZGF0aW5nIGZpbGVzIG9uIGRyb3BcbiAgICBpZ25vcmVkRmlsZXM6IFtbJy5kc19zdG9yZScsICd0aHVtYnMuZGInLCAnZGVza3RvcC5pbmknXSwgVHlwZS5BUlJBWV0sXG4gICAgLy8gY2F0Y2hEaXJlY3RvcmllczogW3RydWUsIFR5cGUuQk9PTEVBTl0sXHRcdFx0XHRcdC8vIEFsbG93IGRyb3BwaW5nIGRpcmVjdG9yaWVzIGluIG1vZGVybiBicm93c2Vyc1xuXG4gICAgLy8gVXBsb2FkIHJlbGF0ZWRcbiAgICBpbnN0YW50VXBsb2FkOiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSwgLy8gU2hvdWxkIHVwbG9hZCBmaWxlcyBpbW1pZGlhdGVseSBvbiBkcm9wXG4gICAgLy8gVE9ETzogcGFyYWxsZWw6IFsxLCBUeXBlLklOVF0sXHRcdFx0XHRcdFx0XHQvLyBNYXhpbXVtIGZpbGVzIHRvIHVwbG9hZCBpbiBwYXJhbGxlbFxuICAgIC8vIFRPRE86IGNodW5rczogW2ZhbHNlLCBUeXBlLkJPT0xFQU5dLFx0XHRcdFx0XHRcdC8vIFVzZSBjaHVuayB1cGxvYWRpbmdcbiAgICAvLyBUT0RPOiBjaHVua1NpemU6IFsuNSAqICgxMDI0ICogMTAyNCksIFR5cGUuSU5UXSxcdFx0XHQvLyBVcGxvYWQgaW4gNTEyS0IgY2h1bmtzXG5cbiAgICAvLyBieSBkZWZhdWx0IG5vIGFzeW5jIGFwaSBpcyBzdXBwbGllZFxuICAgIC8qIGV4cGVjdGVkIGZvcm1hdFxuICAgIHtcbiAgICB1cmw6ICcnLFxuICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgcHJvY2Vzczoge1xuICAgIHVybDogJycsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICBoZWFkZXJzOiB7fVxuICAgIH0sXG4gICAgcmV2ZXJ0OiB7XG4gICAgdXJsOiAnJyxcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgaGVhZGVyczoge31cbiAgICB9LFxuICAgIGZldGNoOiB7XG4gICAgdXJsOiAnJyxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgaGVhZGVyczoge31cbiAgICB9LFxuICAgIHJlc3RvcmU6IHtcbiAgICB1cmw6ICcnLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICBoZWFkZXJzOiB7fVxuICAgIH1cbiAgICB9XG4gICAgKi9cbiAgICBzZXJ2ZXI6IFtudWxsLCBUeXBlLlNFUlZFUl9BUEldLFxuXG4gICAgLy8gTGFiZWxzIGFuZCBzdGF0dXMgbWVzc2FnZXNcbiAgICBsYWJlbERlY2ltYWxTZXBhcmF0b3I6IFtnZXREZWNpbWFsU2VwYXJhdG9yKCksIFR5cGUuU1RSSU5HXSwgLy8gRGVmYXVsdCBpcyBsb2NhbGUgc2VwYXJhdG9yXG4gICAgbGFiZWxUaG91c2FuZHNTZXBhcmF0b3I6IFtnZXRUaG91c2FuZHNTZXBhcmF0b3IoKSwgVHlwZS5TVFJJTkddLCAvLyBEZWZhdWx0IGlzIGxvY2FsZSBzZXBhcmF0b3JcblxuICAgIGxhYmVsSWRsZTogW1xuICAgICAgJ0RyYWcgJiBEcm9wIHlvdXIgZmlsZXMgb3IgPHNwYW4gY2xhc3M9XCJmaWxlcG9uZC0tbGFiZWwtYWN0aW9uXCI+QnJvd3NlPC9zcGFuPicsXG4gICAgICBUeXBlLlNUUklOR1xuICAgIF0sXG5cbiAgICBsYWJlbEZpbGVXYWl0aW5nRm9yU2l6ZTogWydXYWl0aW5nIGZvciBzaXplJywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsRmlsZVNpemVOb3RBdmFpbGFibGU6IFsnU2l6ZSBub3QgYXZhaWxhYmxlJywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsRmlsZUNvdW50U2luZ3VsYXI6IFsnZmlsZSBpbiBsaXN0JywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsRmlsZUNvdW50UGx1cmFsOiBbJ2ZpbGVzIGluIGxpc3QnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxGaWxlTG9hZGluZzogWydMb2FkaW5nJywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsRmlsZUFkZGVkOiBbJ0FkZGVkJywgVHlwZS5TVFJJTkddLCAvLyBhc3Npc3RpdmUgb25seVxuICAgIGxhYmVsRmlsZVJlbW92ZWQ6IFsnUmVtb3ZlZCcsIFR5cGUuU1RSSU5HXSwgLy8gYXNzaXN0aXZlIG9ubHlcbiAgICBsYWJlbEZpbGVMb2FkRXJyb3I6IFsnRXJyb3IgZHVyaW5nIGxvYWQnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxGaWxlUHJvY2Vzc2luZzogWydVcGxvYWRpbmcnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxGaWxlUHJvY2Vzc2luZ0NvbXBsZXRlOiBbJ1VwbG9hZCBjb21wbGV0ZScsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEZpbGVQcm9jZXNzaW5nQWJvcnRlZDogWydVcGxvYWQgY2FuY2VsbGVkJywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsRmlsZVByb2Nlc3NpbmdFcnJvcjogWydFcnJvciBkdXJpbmcgdXBsb2FkJywgVHlwZS5TVFJJTkddLFxuICAgIC8vIGxhYmVsRmlsZVByb2Nlc3NpbmdQYXVzZWQ6IFsnVXBsb2FkIHBhdXNlZCcsIFR5cGUuU1RSSU5HXSxcblxuICAgIGxhYmVsVGFwVG9DYW5jZWw6IFsndGFwIHRvIGNhbmNlbCcsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbFRhcFRvUmV0cnk6IFsndGFwIHRvIHJldHJ5JywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsVGFwVG9VbmRvOiBbJ3RhcCB0byB1bmRvJywgVHlwZS5TVFJJTkddLFxuICAgIC8vIGxhYmVsVGFwVG9QYXVzZTogWyd0YXAgdG8gcGF1c2UnLCBUeXBlLlNUUklOR10sXG4gICAgLy8gbGFiZWxUYXBUb1Jlc3VtZTogWyd0YXAgdG8gcmVzdW1lJywgVHlwZS5TVFJJTkddLFxuXG4gICAgbGFiZWxCdXR0b25SZW1vdmVJdGVtOiBbJ1JlbW92ZScsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEJ1dHRvbkFib3J0SXRlbUxvYWQ6IFsnQWJvcnQnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxCdXR0b25SZXRyeUl0ZW1Mb2FkOiBbJ1JldHJ5JywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsQnV0dG9uQWJvcnRJdGVtUHJvY2Vzc2luZzogWydDYW5jZWwnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxCdXR0b25VbmRvSXRlbVByb2Nlc3Npbmc6IFsnVW5kbycsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEJ1dHRvblJldHJ5SXRlbVByb2Nlc3Npbmc6IFsnUmV0cnknLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxCdXR0b25Qcm9jZXNzSXRlbTogWydVcGxvYWQnLCBUeXBlLlNUUklOR10sXG5cbiAgICAvLyBtYWtlIHN1cmUgd2lkdGggYW5kIGhlaWdodCBwbHVzIHZpZXdwb3ggYXJlIGV2ZW4gbnVtYmVycyBzbyBpY29ucyBhcmUgbmljZWx5IGNlbnRlcmVkXG4gICAgaWNvblJlbW92ZTogW1xuICAgICAgJzxzdmcgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjI2XCIgdmlld0JveD1cIjAgMCAyNiAyNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTExLjU4NiAxM2wtMi4yOTMgMi4yOTNhMSAxIDAgMCAwIDEuNDE0IDEuNDE0TDEzIDE0LjQxNGwyLjI5MyAyLjI5M2ExIDEgMCAwIDAgMS40MTQtMS40MTRMMTQuNDE0IDEzbDIuMjkzLTIuMjkzYTEgMSAwIDAgMC0xLjQxNC0xLjQxNEwxMyAxMS41ODZsLTIuMjkzLTIuMjkzYTEgMSAwIDAgMC0xLjQxNCAxLjQxNEwxMS41ODYgMTN6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+PC9zdmc+JyxcbiAgICAgIFR5cGUuU1RSSU5HXG4gICAgXSxcbiAgICBpY29uUHJvY2VzczogW1xuICAgICAgJzxzdmcgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjI2XCIgdmlld0JveD1cIjAgMCAyNiAyNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE0IDEwLjQxNHYzLjU4NWExIDEgMCAwIDEtMiAwdi0zLjU4NWwtMS4yOTMgMS4yOTNhMSAxIDAgMCAxLTEuNDE0LTEuNDE1bDMtM2ExIDEgMCAwIDEgMS40MTQgMGwzIDNhMSAxIDAgMCAxLTEuNDE0IDEuNDE1TDE0IDEwLjQxNHpNOSAxOGExIDEgMCAwIDEgMC0yaDhhMSAxIDAgMCAxIDAgMkg5elwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPicsXG4gICAgICBUeXBlLlNUUklOR1xuICAgIF0sXG4gICAgaWNvblJldHJ5OiBbXG4gICAgICAnPHN2ZyB3aWR0aD1cIjI2XCIgaGVpZ2h0PVwiMjZcIiB2aWV3Qm94PVwiMCAwIDI2IDI2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTAuODEgOS4xODVsLS4wMzguMDJBNC45OTcgNC45OTcgMCAwIDAgOCAxMy42ODNhNSA1IDAgMCAwIDUgNSA1IDUgMCAwIDAgNS01IDEgMSAwIDAgMSAyIDBBNyA3IDAgMSAxIDkuNzIyIDcuNDk2bC0uODQyLS4yMWEuOTk5Ljk5OSAwIDEgMSAuNDg0LTEuOTRsMy4yMy44MDZjLjUzNS4xMzMuODYuNjc1LjczIDEuMjFsLS44MDQgMy4yMzNhLjk5Ny45OTcgMCAwIDEtMS4yMS43My45OTcuOTk3IDAgMCAxLS43My0xLjIxbC4yMy0uOTI4di0uMDAyelwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPjwvc3ZnPicsXG4gICAgICBUeXBlLlNUUklOR1xuICAgIF0sXG4gICAgaWNvblVuZG86IFtcbiAgICAgICc8c3ZnIHdpZHRoPVwiMjZcIiBoZWlnaHQ9XCIyNlwiIHZpZXdCb3g9XCIwIDAgMjYgMjZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk05LjE4NSAxMC44MWwuMDItLjAzOEE0Ljk5NyA0Ljk5NyAwIDAgMSAxMy42ODMgOGE1IDUgMCAwIDEgNSA1IDUgNSAwIDAgMS01IDUgMSAxIDAgMCAwIDAgMkE3IDcgMCAxIDAgNy40OTYgOS43MjJsLS4yMS0uODQyYS45OTkuOTk5IDAgMSAwLTEuOTQuNDg0bC44MDYgMy4yM2MuMTMzLjUzNS42NzUuODYgMS4yMS43M2wzLjIzMy0uODAzYS45OTcuOTk3IDAgMCAwIC43My0xLjIxLjk5Ny45OTcgMCAwIDAtMS4yMS0uNzNsLS45MjguMjMtLjAwMi0uMDAxelwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPjwvc3ZnPicsXG4gICAgICBUeXBlLlNUUklOR1xuICAgIF0sXG4gICAgaWNvbkRvbmU6IFtcbiAgICAgICc8c3ZnIHdpZHRoPVwiMjZcIiBoZWlnaHQ9XCIyNlwiIHZpZXdCb3g9XCIwIDAgMjYgMjZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xOC4yOTMgOS4yOTNhMSAxIDAgMCAxIDEuNDE0IDEuNDE0bC03LjAwMiA3YTEgMSAwIDAgMS0xLjQxNCAwbC0zLjk5OC00YTEgMSAwIDEgMSAxLjQxNC0xLjQxNEwxMiAxNS41ODZsNi4yOTQtNi4yOTN6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+PC9zdmc+JyxcbiAgICAgIFR5cGUuU1RSSU5HXG4gICAgXSxcblxuICAgIC8vIGV2ZW50IGhhbmRsZXJzXG4gICAgb25pbml0OiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb253YXJuaW5nOiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25lcnJvcjogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIG9uYWRkZmlsZXN0YXJ0OiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25hZGRmaWxlcHJvZ3Jlc3M6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbmFkZGZpbGU6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbnByb2Nlc3NmaWxlc3RhcnQ6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbnByb2Nlc3NmaWxlcHJvZ3Jlc3M6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbnByb2Nlc3NmaWxlYWJvcnQ6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbnByb2Nlc3NmaWxlcmV2ZXJ0OiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25wcm9jZXNzZmlsZTogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIG9ucmVtb3ZlZmlsZTogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuXG4gICAgLy8gY3VzdG9tIGluaXRpYWwgZmlsZXMgYXJyYXlcbiAgICBmaWxlczogW1tdLCBUeXBlLkFSUkFZXVxuICB9O1xuXG4gIHZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gIH07XG5cbiAgdmFyIGdldEl0ZW1CeVF1ZXJ5ID0gZnVuY3Rpb24gZ2V0SXRlbUJ5UXVlcnkoaXRlbXMsIHF1ZXJ5KSB7XG4gICAgLy8ganVzdCByZXR1cm4gZmlyc3QgaW5kZXhcbiAgICBpZiAoaXNFbXB0eShxdWVyeSkpIHtcbiAgICAgIHJldHVybiBpdGVtc1swXSB8fCBudWxsO1xuICAgIH1cblxuICAgIC8vIHF1ZXJ5IGlzIGluZGV4XG4gICAgaWYgKGlzSW50KHF1ZXJ5KSkge1xuICAgICAgcmV0dXJuIGl0ZW1zW3F1ZXJ5XSB8fCBudWxsO1xuICAgIH1cblxuICAgIC8vIGlmIHF1ZXJ5IGlzIGl0ZW0sIGdldCB0aGUgaWRcbiAgICBpZiAoXG4gICAgICAodHlwZW9mIHF1ZXJ5ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihxdWVyeSkpID09PSAnb2JqZWN0J1xuICAgICkge1xuICAgICAgcXVlcnkgPSBxdWVyeS5pZDtcbiAgICB9XG5cbiAgICAvLyBhc3N1bWUgcXVlcnkgaXMgYSBzdHJpbmcgYW5kIHJldHVybiBpdGVtIGJ5IGlkXG4gICAgcmV0dXJuIChcbiAgICAgIGl0ZW1zLmZpbmQoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5pZCA9PT0gcXVlcnk7XG4gICAgICB9KSB8fCBudWxsXG4gICAgKTtcbiAgfTtcblxuICB2YXIgcXVlcmllcyA9IGZ1bmN0aW9uIHF1ZXJpZXMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgR0VUX0lURU06IGZ1bmN0aW9uIEdFVF9JVEVNKHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBnZXRJdGVtQnlRdWVyeShzdGF0ZS5pdGVtcywgcXVlcnkpO1xuICAgICAgfSxcblxuICAgICAgR0VUX0lURU1TOiBmdW5jdGlvbiBHRVRfSVRFTVMocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShzdGF0ZS5pdGVtcykpO1xuICAgICAgfSxcblxuICAgICAgR0VUX0lURU1fTkFNRTogZnVuY3Rpb24gR0VUX0lURU1fTkFNRShxdWVyeSkge1xuICAgICAgICB2YXIgaXRlbSA9IGdldEl0ZW1CeVF1ZXJ5KHN0YXRlLml0ZW1zLCBxdWVyeSk7XG4gICAgICAgIHJldHVybiBpdGVtID8gaXRlbS5maWxlbmFtZSA6IG51bGw7XG4gICAgICB9LFxuXG4gICAgICBHRVRfSVRFTV9TSVpFOiBmdW5jdGlvbiBHRVRfSVRFTV9TSVpFKHF1ZXJ5KSB7XG4gICAgICAgIHZhciBpdGVtID0gZ2V0SXRlbUJ5UXVlcnkoc3RhdGUuaXRlbXMsIHF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmZpbGVTaXplIDogbnVsbDtcbiAgICAgIH0sXG5cbiAgICAgIEdFVF9UT1RBTF9JVEVNUzogZnVuY3Rpb24gR0VUX1RPVEFMX0lURU1TKCkge1xuICAgICAgICByZXR1cm4gc3RhdGUuaXRlbXMubGVuZ3RoO1xuICAgICAgfSxcblxuICAgICAgSVNfQVNZTkM6IGZ1bmN0aW9uIElTX0FTWU5DKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGlzT2JqZWN0KHN0YXRlLm9wdGlvbnMuc2VydmVyKSAmJlxuICAgICAgICAgIChpc09iamVjdChzdGF0ZS5vcHRpb25zLnNlcnZlci5wcm9jZXNzKSB8fFxuICAgICAgICAgICAgaXNGdW5jdGlvbihzdGF0ZS5vcHRpb25zLnNlcnZlci5wcm9jZXNzKSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBnZXRJdGVtSW5kZXhCeVF1ZXJ5ID0gZnVuY3Rpb24gZ2V0SXRlbUluZGV4QnlRdWVyeShpdGVtcywgcXVlcnkpIHtcbiAgICAvLyBqdXN0IHJldHVybiBmaXJzdCBpbmRleFxuICAgIGlmIChpc0VtcHR5KHF1ZXJ5KSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gaW52YWxpZCBxdWVyaWVzXG4gICAgaWYgKCFpc1N0cmluZyhxdWVyeSkpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gaXRlbSBieSBpZCAob3IgLTEgaWYgbm90IGZvdW5kKVxuICAgIHJldHVybiBpdGVtcy5maW5kSW5kZXgoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uaWQgPT09IHF1ZXJ5O1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciByZW1vdmVJbmRleCA9IGZ1bmN0aW9uIHJlbW92ZUluZGV4KGFyciwgaW5kZXgpIHtcbiAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgdmFyIGhhc1Jvb21Gb3JJdGVtID0gZnVuY3Rpb24gaGFzUm9vbUZvckl0ZW0oc3RhdGUpIHtcbiAgICB2YXIgY291bnQgPSBzdGF0ZS5pdGVtcy5sZW5ndGg7XG5cbiAgICAvLyBpZiBjYW5ub3QgaGF2ZSBtdWx0aXBsZSBpdGVtcywgdG8gYWRkIG9uZSBpdGVtIGl0IHNob3VsZCBjdXJyZW50bHkgbm90IGNvbnRhaW4gaXRlbXNcbiAgICBpZiAoIXN0YXRlLm9wdGlvbnMuYWxsb3dNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIGNvdW50ID09PSAwO1xuICAgIH1cblxuICAgIC8vIGlmIGFsbG93cyBtdWx0aXBsZSBpdGVtcywgd2UgY2hlY2sgaWYgYSBtYXggaXRlbSBjb3VudCBoYXMgYmVlbiBzZXQsIGlmIG5vdCwgdGhlcmUncyBubyBsaW1pdFxuICAgIHZhciBtYXhGaWxlQ291bnQgPSBzdGF0ZS5vcHRpb25zLm1heEZpbGVzO1xuICAgIGlmIChtYXhGaWxlQ291bnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIHdlIGNoZWNrIGlmIHRoZSBjdXJyZW50IGNvdW50IGlzIHNtYWxsZXIgdGhhbiB0aGUgbWF4IGNvdW50LCBpZiBzbywgYW5vdGhlciBmaWxlIGNhbiBzdGlsbCBiZSBhZGRlZFxuICAgIGlmIChjb3VudCA8IG1heEZpbGVDb3VudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gbm8gbW9yZSByb29tIGZvciBhbm90aGVyIGZpbGVcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgdmFyIGxpbWl0ID0gZnVuY3Rpb24gbGltaXQodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKG1heCwgdmFsdWUpLCBtaW4pO1xuICB9O1xuXG4gIHZhciBhcnJheUluc2VydCA9IGZ1bmN0aW9uIGFycmF5SW5zZXJ0KGFyciwgaW5kZXgsIGl0ZW0pIHtcbiAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gIH07XG5cbiAgdmFyIGluc2VydEl0ZW0gPSBmdW5jdGlvbiBpbnNlcnRJdGVtKGl0ZW1zLCBpdGVtLCBpbmRleCkge1xuICAgIGlmIChpc0VtcHR5KGl0ZW0pKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBpZiBpbmRleCBpcyB1bmRlZmluZWQsIGFwcGVuZFxuICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgLy8gbGltaXQgdGhlIGluZGV4IHRvIHRoZSBzaXplIG9mIHRoZSBpdGVtcyBhcnJheVxuICAgIGluZGV4ID0gbGltaXQoaW5kZXgsIDAsIGl0ZW1zLmxlbmd0aCk7XG5cbiAgICAvLyBhZGQgaXRlbSB0byBhcnJheVxuICAgIGFycmF5SW5zZXJ0KGl0ZW1zLCBpbmRleCwgaXRlbSk7XG5cbiAgICAvLyBleHBvc2VcbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcblxuICB2YXIgbGVmdFBhZCA9IGZ1bmN0aW9uIGxlZnRQYWQodmFsdWUpIHtcbiAgICB2YXIgcGFkZGluZyA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuICAgIHJldHVybiAocGFkZGluZyArIHZhbHVlKS5zbGljZSgtcGFkZGluZy5sZW5ndGgpO1xuICB9O1xuXG4gIHZhciBnZXREYXRlU3RyaW5nID0gZnVuY3Rpb24gZ2V0RGF0ZVN0cmluZygpIHtcbiAgICB2YXIgZGF0ZSA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGFyZ3VtZW50c1swXVxuICAgICAgICA6IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSArXG4gICAgICAnLScgK1xuICAgICAgbGVmdFBhZChkYXRlLmdldE1vbnRoKCkgKyAxLCAnMDAnKSArXG4gICAgICAnLScgK1xuICAgICAgbGVmdFBhZChkYXRlLmdldERhdGUoKSwgJzAwJykgK1xuICAgICAgJ18nICtcbiAgICAgIGxlZnRQYWQoZGF0ZS5nZXRIb3VycygpLCAnMDAnKSArXG4gICAgICAnLScgK1xuICAgICAgbGVmdFBhZChkYXRlLmdldE1pbnV0ZXMoKSwgJzAwJykgK1xuICAgICAgJy0nICtcbiAgICAgIGxlZnRQYWQoZGF0ZS5nZXRTZWNvbmRzKCksICcwMCcpXG4gICAgKTtcbiAgfTtcblxuICB2YXIgaXNCYXNlNjREYXRhVVJJID0gZnVuY3Rpb24gaXNCYXNlNjREYXRhVVJJKHN0cikge1xuICAgIHJldHVybiAvXlxccypkYXRhOihbYS16XStcXC9bYS16MC05LSsuXSsoO1thLXotXSs9W2EtejAtOS1dKyk/KT8oO2Jhc2U2NCk/LChbYS16MC05ISQmJywoKSorOz1cXC0uX346QFxcLz8lXFxzXSopXFxzKiQvaS50ZXN0KFxuICAgICAgc3RyXG4gICAgKTtcbiAgfTtcblxuICB2YXIgZ2V0RmlsZW5hbWVGcm9tVVJMID0gZnVuY3Rpb24gZ2V0RmlsZW5hbWVGcm9tVVJMKHVybCkge1xuICAgIHJldHVybiB1cmxcbiAgICAgIC5zcGxpdCgnLycpXG4gICAgICAucG9wKClcbiAgICAgIC5zcGxpdCgnPycpXG4gICAgICAuc2hpZnQoKTtcbiAgfTtcblxuICB2YXIgZ2V0RXh0ZW5zaW9uRnJvbUZpbGVuYW1lID0gZnVuY3Rpb24gZ2V0RXh0ZW5zaW9uRnJvbUZpbGVuYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuICB9O1xuXG4gIHZhciBndWVzc3RpbWF0ZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIGd1ZXNzdGltYXRlRXh0ZW5zaW9uKHR5cGUpIHtcbiAgICAvLyBpZiBubyBleHRlbnNpb24gc3VwcGxpZWQsIGV4aXQgaGVyZVxuICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvLyBnZXQgc3VidHlwZVxuICAgIHZhciBzdWJ0eXBlID0gdHlwZS5zcGxpdCgnLycpLnBvcCgpO1xuXG4gICAgLy8gaXMgc3ZnIHN1YnR5cGVcbiAgICBpZiAoL3N2Zy8udGVzdChzdWJ0eXBlKSkge1xuICAgICAgcmV0dXJuICdzdmcnO1xuICAgIH1cblxuICAgIGlmICgvemlwfGNvbXByZXNzZWQvLnRlc3Qoc3VidHlwZSkpIHtcbiAgICAgIHJldHVybiAnemlwJztcbiAgICB9XG5cbiAgICBpZiAoL3BsYWluLy50ZXN0KHN1YnR5cGUpKSB7XG4gICAgICByZXR1cm4gJ3R4dCc7XG4gICAgfVxuXG4gICAgaWYgKC9tc3dvcmQvLnRlc3Qoc3VidHlwZSkpIHtcbiAgICAgIHJldHVybiAnZG9jJztcbiAgICB9XG5cbiAgICAvLyBpZiBpcyB2YWxpZCBzdWJ0eXBlXG4gICAgaWYgKC9bYS16XSsvLnRlc3Qoc3VidHlwZSkpIHtcbiAgICAgIC8vIGFsd2F5cyB1c2UganBnIGV4dGVuc2lvblxuICAgICAgaWYgKHN1YnR5cGUgPT09ICdqcGVnJykge1xuICAgICAgICByZXR1cm4gJ2pwZyc7XG4gICAgICB9XG5cbiAgICAgIC8vIHJldHVybiBzdWJ0eXBlXG4gICAgICByZXR1cm4gc3VidHlwZTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH07XG5cbiAgdmFyIGdldEZpbGVGcm9tQmxvYiA9IGZ1bmN0aW9uIGdldEZpbGVGcm9tQmxvYihibG9iLCBmaWxlbmFtZSkge1xuICAgIHZhciB0eXBlID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgICB2YXIgZXh0ZW5zaW9uID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbnVsbDtcblxuICAgIHZhciBmaWxlID1cbiAgICAgIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGJsb2Iuc2xpY2UoMCwgYmxvYi5zaXplLCB0eXBlKVxuICAgICAgICA6IGJsb2Iuc2xpY2UoMCwgYmxvYi5zaXplLCBibG9iLnR5cGUpO1xuICAgIGZpbGUubGFzdE1vZGlmaWVkRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAvLyBpZiBmaWxlbmFtZSBzdXBwbGllZCBidXQgbm8gZXh0ZW5zaW9uIGFuZCBmaWxlbmFtZSBoYXMgZXh0ZW5zaW9uXG4gICAgaWYgKGZpbGVuYW1lICYmIGV4dGVuc2lvbiA9PT0gbnVsbCAmJiBnZXRFeHRlbnNpb25Gcm9tRmlsZW5hbWUoZmlsZW5hbWUpKSB7XG4gICAgICBmaWxlLm5hbWUgPSBmaWxlbmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uIHx8IGd1ZXNzdGltYXRlRXh0ZW5zaW9uKGZpbGUudHlwZSk7XG4gICAgICBmaWxlLm5hbWUgPSBmaWxlbmFtZSArIChleHRlbnNpb24gPyAnLicgKyBleHRlbnNpb24gOiAnJyk7XG4gICAgfVxuICAgIHJldHVybiBmaWxlO1xuICB9O1xuXG4gIHZhciBnZXRCbG9iQnVpbGRlciA9IGZ1bmN0aW9uIGdldEJsb2JCdWlsZGVyKCkge1xuICAgIHJldHVybiAod2luZG93LkJsb2JCdWlsZGVyID1cbiAgICAgIHdpbmRvdy5CbG9iQnVpbGRlciB8fFxuICAgICAgd2luZG93LldlYktpdEJsb2JCdWlsZGVyIHx8XG4gICAgICB3aW5kb3cuTW96QmxvYkJ1aWxkZXIgfHxcbiAgICAgIHdpbmRvdy5NU0Jsb2JCdWlsZGVyKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlQmxvYiA9IGZ1bmN0aW9uIGNyZWF0ZUJsb2IoYXJyYXlCdWZmZXIsIG1pbWVUeXBlKSB7XG4gICAgdmFyIEJCID0gZ2V0QmxvYkJ1aWxkZXIoKTtcblxuICAgIGlmIChCQikge1xuICAgICAgdmFyIGJiID0gbmV3IEJCKCk7XG4gICAgICBiYi5hcHBlbmQoYXJyYXlCdWZmZXIpO1xuICAgICAgcmV0dXJuIGJiLmdldEJsb2IobWltZVR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQmxvYihbYXJyYXlCdWZmZXJdLCB7XG4gICAgICB0eXBlOiBtaW1lVHlwZVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBnZXRCbG9iRnJvbUJ5dGVTdHJpbmdXaXRoTWltZVR5cGUgPSBmdW5jdGlvbiBnZXRCbG9iRnJvbUJ5dGVTdHJpbmdXaXRoTWltZVR5cGUoXG4gICAgYnl0ZVN0cmluZyxcbiAgICBtaW1lVHlwZVxuICApIHtcbiAgICB2YXIgYWIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICAgIHZhciBpYSA9IG5ldyBVaW50OEFycmF5KGFiKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaWFbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUJsb2IoYWIsIG1pbWVUeXBlKTtcbiAgfTtcblxuICB2YXIgZ2V0TWltZVR5cGVGcm9tQmFzZTY0RGF0YVVSSSA9IGZ1bmN0aW9uIGdldE1pbWVUeXBlRnJvbUJhc2U2NERhdGFVUkkoXG4gICAgZGF0YVVSSVxuICApIHtcbiAgICByZXR1cm4gKC9eZGF0YTooLispOy8uZXhlYyhkYXRhVVJJKSB8fCBbXSlbMV0gfHwgbnVsbDtcbiAgfTtcblxuICB2YXIgZ2V0QmFzZTY0RGF0YUZyb21CYXNlNjREYXRhVVJJID0gZnVuY3Rpb24gZ2V0QmFzZTY0RGF0YUZyb21CYXNlNjREYXRhVVJJKFxuICAgIGRhdGFVUklcbiAgKSB7XG4gICAgLy8gZ2V0IGRhdGEgcGFydCBvZiBzdHJpbmcgKHJlbW92ZSBkYXRhOmltYWdlL2pwZWcuLi4sKVxuICAgIHZhciBkYXRhID0gZGF0YVVSSS5zcGxpdCgnLCcpWzFdO1xuXG4gICAgLy8gcmVtb3ZlIGFueSB3aGl0ZXNwYWNlIGFzIHRoYXQgY2F1c2VzIEludmFsaWRDaGFyYWN0ZXJFcnJvciBpbiBJRVxuICAgIHJldHVybiBkYXRhLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gIH07XG5cbiAgdmFyIGdldEJ5dGVTdHJpbmdGcm9tQmFzZTY0RGF0YVVSSSA9IGZ1bmN0aW9uIGdldEJ5dGVTdHJpbmdGcm9tQmFzZTY0RGF0YVVSSShcbiAgICBkYXRhVVJJXG4gICkge1xuICAgIHJldHVybiBhdG9iKGdldEJhc2U2NERhdGFGcm9tQmFzZTY0RGF0YVVSSShkYXRhVVJJKSk7XG4gIH07XG5cbiAgdmFyIGdldEJsb2JGcm9tQmFzZTY0RGF0YVVSSSA9IGZ1bmN0aW9uIGdldEJsb2JGcm9tQmFzZTY0RGF0YVVSSShkYXRhVVJJKSB7XG4gICAgdmFyIG1pbWVUeXBlID0gZ2V0TWltZVR5cGVGcm9tQmFzZTY0RGF0YVVSSShkYXRhVVJJKTtcbiAgICB2YXIgYnl0ZVN0cmluZyA9IGdldEJ5dGVTdHJpbmdGcm9tQmFzZTY0RGF0YVVSSShkYXRhVVJJKTtcblxuICAgIHJldHVybiBnZXRCbG9iRnJvbUJ5dGVTdHJpbmdXaXRoTWltZVR5cGUoYnl0ZVN0cmluZywgbWltZVR5cGUpO1xuICB9O1xuXG4gIHZhciBnZXRGaWxlRnJvbUJhc2U2NERhdGFVUkkgPSBmdW5jdGlvbiBnZXRGaWxlRnJvbUJhc2U2NERhdGFVUkkoXG4gICAgZGF0YVVSSSxcbiAgICBmaWxlbmFtZSxcbiAgICBleHRlbnNpb25cbiAgKSB7XG4gICAgcmV0dXJuIGdldEZpbGVGcm9tQmxvYihcbiAgICAgIGdldEJsb2JGcm9tQmFzZTY0RGF0YVVSSShkYXRhVVJJKSxcbiAgICAgIGZpbGVuYW1lLFxuICAgICAgbnVsbCxcbiAgICAgIGV4dGVuc2lvblxuICAgICk7XG4gIH07XG5cbiAgdmFyIGdldEZpbGVuYW1lRnJvbUhlYWRlcnMgPSBmdW5jdGlvbiBnZXRGaWxlbmFtZUZyb21IZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB2YXIgcm93cyA9IGhlYWRlcnMuc3BsaXQoJ1xcbicpO1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yIChcbiAgICAgICAgdmFyIF9pdGVyYXRvciA9IHJvd3NbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDtcbiAgICAgICAgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7XG4gICAgICAgIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgdmFyIGhlYWRlciA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIHZhciBkaXJ0eUZpbGVuYW1lID0gaGVhZGVyLnNwbGl0KCdmaWxlbmFtZT0nKVsxXTtcbiAgICAgICAgaWYgKCFkaXJ0eUZpbGVuYW1lKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpcnR5RmlsZW5hbWUucmVwbGFjZSgvW1wiJ10rL2csICcnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB2YXIgcmVuYW1lRmlsZSA9IGZ1bmN0aW9uIHJlbmFtZUZpbGUoZmlsZSwgbmFtZSkge1xuICAgIHZhciByZW5hbWVkRmlsZSA9IGZpbGUuc2xpY2UoMCwgZmlsZS5zaXplLCBmaWxlLnR5cGUpO1xuICAgIHJlbmFtZWRGaWxlLmxhc3RNb2RpZmllZERhdGUgPSBmaWxlLmxhc3RNb2RpZmllZERhdGU7XG4gICAgcmVuYW1lZEZpbGUubmFtZSA9IG5hbWU7XG4gICAgcmV0dXJuIHJlbmFtZWRGaWxlO1xuICB9O1xuXG4gIHZhciBjcmVhdGVGaWxlTG9hZGVyID0gZnVuY3Rpb24gY3JlYXRlRmlsZUxvYWRlcihmZXRjaEZuKSB7XG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgc291cmNlOiBudWxsLFxuICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICBzaXplOiBudWxsLFxuICAgICAgdGltZXN0YW1wOiBudWxsLFxuICAgICAgZHVyYXRpb246IDAsXG4gICAgICByZXF1ZXN0OiBudWxsXG4gICAgfTtcblxuICAgIHZhciBnZXRQcm9ncmVzcyA9IGZ1bmN0aW9uIGdldFByb2dyZXNzKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnByb2dyZXNzO1xuICAgIH07XG4gICAgdmFyIGFib3J0ID0gZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgICBpZiAoIXN0YXRlLnJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3RhdGUucmVxdWVzdC5hYm9ydCgpO1xuICAgIH07XG5cbiAgICAvLyBsb2FkIHNvdXJjZVxuICAgIHZhciBsb2FkID0gZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgIC8vIGdldCBxdWljayByZWZlcmVuY2VcbiAgICAgIHZhciBzb3VyY2UgPSBzdGF0ZS5zb3VyY2U7XG5cbiAgICAgIGFwaS5maXJlKCdpbml0Jywgc291cmNlKTtcblxuICAgICAgLy8gTG9hZCBGaWxlc1xuICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICAgICAgYXBpLmZpcmUoJ2xvYWQnLCBzb3VyY2UpO1xuICAgICAgfSBlbHNlIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgIC8vIExvYWQgYmxvYnMsIHNldCBkZWZhdWx0IG5hbWUgdG8gY3VycmVudCBkYXRlXG4gICAgICAgIGFwaS5maXJlKCdsb2FkJywgZ2V0RmlsZUZyb21CbG9iKHNvdXJjZSwgZ2V0RGF0ZVN0cmluZygpKSk7XG4gICAgICB9IGVsc2UgaWYgKGlzQmFzZTY0RGF0YVVSSShzb3VyY2UpKSB7XG4gICAgICAgIC8vIExvYWQgYmFzZSA2NCwgc2V0IGRlZmF1bHQgbmFtZSB0byBjdXJyZW50IGRhdGVcbiAgICAgICAgYXBpLmZpcmUoJ2xvYWQnLCBnZXRGaWxlRnJvbUJhc2U2NERhdGFVUkkoc291cmNlLCBnZXREYXRlU3RyaW5nKCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERlYWwgYXMgaWYgaXMgZXh0ZXJuYWwgVVJMLCBsZXQncyBsb2FkIGl0IVxuICAgICAgICBsb2FkVVJMKHNvdXJjZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGxvYWRzIGEgdXJsXG4gICAgdmFyIGxvYWRVUkwgPSBmdW5jdGlvbiBsb2FkVVJMKHVybCkge1xuICAgICAgLy8gaXMgcmVtb3RlIHVybCBhbmQgbm8gZmV0Y2ggbWV0aG9kIHN1cHBsaWVkXG4gICAgICBpZiAoIWZldGNoRm4pIHtcbiAgICAgICAgYXBpLmZpcmUoJ2Vycm9yJywge1xuICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgYm9keTogXCJDYW4ndCBsb2FkIFVSTFwiLFxuICAgICAgICAgIGNvZGU6IDQwMFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgcmVxdWVzdCBzdGFydFxuICAgICAgc3RhdGUudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblxuICAgICAgLy8gbG9hZCBmaWxlXG4gICAgICBzdGF0ZS5yZXF1ZXN0ID0gZmV0Y2hGbihcbiAgICAgICAgdXJsLFxuICAgICAgICBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIC8vIHVwZGF0ZSBkdXJhdGlvblxuICAgICAgICAgIHN0YXRlLmR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHN0YXRlLnRpbWVzdGFtcDtcblxuICAgICAgICAgIC8vIGRvbmUhXG4gICAgICAgICAgc3RhdGUuY29tcGxldGUgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gdHVybiBibG9iIHJlc3BvbnNlIGludG8gYSBmaWxlXG4gICAgICAgICAgaWYgKHJlc3BvbnNlIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBnZXRGaWxlRnJvbUJsb2IoXG4gICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgICBnZXRGaWxlbmFtZUZyb21VUkwodXJsKSB8fCBnZXREYXRlU3RyaW5nKClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXBpLmZpcmUoJ2xvYWQnLCByZXNwb25zZSBpbnN0YW5jZW9mIEJsb2IgPyByZXNwb25zZSA6IHJlc3BvbnNlLmJvZHkpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIGFwaS5maXJlKFxuICAgICAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgICAgIHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgY29kZTogMCxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IGVycm9yXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IGVycm9yXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oY29tcHV0YWJsZSwgY3VycmVudCwgdG90YWwpIHtcbiAgICAgICAgICAvLyBjb2xsZWN0ZWQgc29tZSBtZXRhIGRhdGEgYWxyZWFkeVxuICAgICAgICAgIGlmICh0b3RhbCkge1xuICAgICAgICAgICAgc3RhdGUuc2l6ZSA9IHRvdGFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHVwZGF0ZSBkdXJhdGlvblxuICAgICAgICAgIHN0YXRlLmR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHN0YXRlLnRpbWVzdGFtcDtcblxuICAgICAgICAgIC8vIGlmIHdlIGNhbid0IGNvbXB1dGUgcHJvZ3Jlc3MsIHdlJ3JlIG5vdCBnb2luZyB0byBmaXJlIHByb2dyZXNzIGV2ZW50c1xuICAgICAgICAgIGlmICghY29tcHV0YWJsZSkge1xuICAgICAgICAgICAgc3RhdGUucHJvZ3Jlc3MgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHVwZGF0ZSBwcm9ncmVzcyBwZXJjZW50YWdlXG4gICAgICAgICAgc3RhdGUucHJvZ3Jlc3MgPSBjdXJyZW50IC8gdG90YWw7XG5cbiAgICAgICAgICAvLyBleHBvc2VcbiAgICAgICAgICBhcGkuZmlyZSgncHJvZ3Jlc3MnLCBzdGF0ZS5wcm9ncmVzcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGFwaS5maXJlKCdhYm9ydCcpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIGFwaS5maXJlKCdtZXRhJywge1xuICAgICAgICAgICAgc2l6ZTogc3RhdGUuc2l6ZSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBnZXRGaWxlbmFtZUZyb21IZWFkZXJzKFxuICAgICAgICAgICAgICB0eXBlb2YgcmVzcG9uc2UgPT09ICdzdHJpbmcnID8gcmVzcG9uc2UgOiByZXNwb25zZS5oZWFkZXJzXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIHZhciBhcGkgPSBfZXh0ZW5kcyh7fSwgb24oKSwge1xuICAgICAgc2V0U291cmNlOiBmdW5jdGlvbiBzZXRTb3VyY2Uoc291cmNlKSB7XG4gICAgICAgIHJldHVybiAoc3RhdGUuc291cmNlID0gc291cmNlKTtcbiAgICAgIH0sXG4gICAgICBnZXRQcm9ncmVzczogZ2V0UHJvZ3Jlc3MsIC8vIGZpbGUgbG9hZCBwcm9ncmVzc1xuICAgICAgYWJvcnQ6IGFib3J0LCAvLyBhYm9ydCBmaWxlIGxvYWRcbiAgICAgIGxvYWQ6IGxvYWQgLy8gc3RhcnQgbG9hZFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFwaTtcbiAgfTtcblxuICB2YXIgY3JlYXRlUmVzcG9uc2UgPSBmdW5jdGlvbiBjcmVhdGVSZXNwb25zZSh0eXBlLCBjb2RlLCBib2R5LCBoZWFkZXJzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBjb2RlOiBjb2RlLFxuICAgICAgYm9keTogYm9keSxcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICB9O1xuICB9O1xuXG4gIHZhciBzZW5kUmVxdWVzdCA9IGZ1bmN0aW9uIHNlbmRSZXF1ZXN0KGRhdGEsIHVybCwgb3B0aW9ucykge1xuICAgIHZhciBhcGkgPSB7XG4gICAgICBvbmhlYWRlcnM6IGZ1bmN0aW9uIG9uaGVhZGVycygpIHt9LFxuICAgICAgb25wcm9ncmVzczogZnVuY3Rpb24gb25wcm9ncmVzcygpIHt9LFxuICAgICAgb25sb2FkOiBmdW5jdGlvbiBvbmxvYWQoKSB7fSxcbiAgICAgIG9uZXJyb3I6IGZ1bmN0aW9uIG9uZXJyb3IoKSB7fSxcbiAgICAgIG9uYWJvcnQ6IGZ1bmN0aW9uIG9uYWJvcnQoKSB7fSxcbiAgICAgIGFib3J0OiBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICAgICAgYWJvcnRlZCA9IHRydWU7XG4gICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB0aW1lb3V0IGlkZW50aWZpZXIsIG9ubHkgdXNlZCB3aGVuIHRpbWVvdXQgaXMgZGVmaW5lZFxuICAgIHZhciB0aW1lb3V0SWQgPSBudWxsO1xuICAgIHZhciB0aW1lZE91dCA9IGZhbHNlO1xuICAgIHZhciBhYm9ydGVkID0gZmFsc2U7XG4gICAgdmFyIGhlYWRlcnNSZWNlaXZlZCA9IGZhbHNlO1xuXG4gICAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBfZXh0ZW5kcyhcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlXG4gICAgICB9LFxuICAgICAgb3B0aW9uc1xuICAgICk7XG5cbiAgICAvLyBpZiBtZXRob2QgaXMgR0VULCBhZGQgYW55IHJlY2VpdmVkIGRhdGEgdG8gdXJsXG4gICAgaWYgKC9HRVQvaS50ZXN0KG9wdGlvbnMubWV0aG9kKSAmJiBkYXRhKSB7XG4gICAgICAvL3VybCA9IGAkeyB1cmwgfSR7IGhhc1F1ZXJ5U3RyaW5nKHVybCkgPyAnJicgOiAnPycgfWRhdGE9JHsgZW5jb2RlVVJJQ29tcG9uZW50KHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyA/IGRhdGEgOiBKU09OLnN0cmluZ2lmeShkYXRhKSkgfWA7XG4gICAgICB1cmwgPVxuICAgICAgICAnJyArXG4gICAgICAgIHVybCArXG4gICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgPyBkYXRhIDogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgcmVxdWVzdFxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIHByb2dyZXNzIG9mIGxvYWRcbiAgICB2YXIgcHJvY2VzcyA9IC9HRVQvaS50ZXN0KG9wdGlvbnMubWV0aG9kKSA/IHhociA6IHhoci51cGxvYWQ7XG4gICAgcHJvY2Vzcy5vbnByb2dyZXNzID0gZnVuY3Rpb24oZSkge1xuICAgICAgLy8gcHJvZ3Jlc3MgZXZlbnQgcmVjZWl2ZWQsIHRpbWVvdXQgbm8gbG9uZ2VyIG5lZWRlZFxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG5cbiAgICAgIC8vIG5vIHByb2dyZXNzIGV2ZW50IHdoZW4gYWJvcnRlZCAoIG9ucHJvZ3Jlc3MgaXMgY2FsbGVkIG9uY2UgYWZ0ZXIgYWJvcnQoKSApXG4gICAgICBpZiAoYWJvcnRlZCB8fCB0aW1lZE91dCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS5vbnByb2dyZXNzKGUubGVuZ3RoQ29tcHV0YWJsZSwgZS5sb2FkZWQsIGUudG90YWwpO1xuICAgIH07XG5cbiAgICAvLyB0cmllcyB0byBnZXQgaGVhZGVyIGluZm8gdG8gdGhlIGFwcCBhcyBmYXN0IGFzIHBvc3NpYmxlXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gbm90IGludGVyZXN0aW5nIGluIHRoZXNlIHN0YXRlcyAoJ3Vuc2VudCcgYW5kICdvcGVuZW5kJyBhcyB0aGV5IGRvbid0IGdpdmUgdXMgYW55IGFkZGl0aW9uYWwgaW5mbylcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA8IDIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBubyBzZXJ2ZXIgcmVzcG9uc2VcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gdGltZW91dCBubyBsb25nZXIgbmVlZGVkIGFzIGNvbm5lY3Rpb24gaXMgc2V0dXBcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuXG4gICAgICBpZiAoaGVhZGVyc1JlY2VpdmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaGVhZGVyc1JlY2VpdmVkID0gdHJ1ZTtcblxuICAgICAgLy8gd2UndmUgcHJvYmFibHkgcmVjZWl2ZWQgc29tZSB1c2VmdWwgZGF0YSBpbiByZXNwb25zZSBoZWFkZXJzXG4gICAgICBhcGkub25oZWFkZXJzKFxuICAgICAgICBjcmVhdGVSZXNwb25zZSgnaGVhZGVycycsIHhoci5zdGF0dXMsIG51bGwsIHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIGxvYWQgc3VjY2Vzc2Z1bFxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGlzIGNsYXNzaWZpZWQgYXMgdmFsaWQgcmVzcG9uc2VcbiAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgIGFwaS5vbmxvYWQoXG4gICAgICAgICAgY3JlYXRlUmVzcG9uc2UoXG4gICAgICAgICAgICAnbG9hZCcsXG4gICAgICAgICAgICB4aHIuc3RhdHVzLFxuICAgICAgICAgICAgeGhyLnJlc3BvbnNlLFxuICAgICAgICAgICAgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm90IGEgdmFsaWQgcmVzcG9uc2VcbiAgICAgICAgYXBpLm9uZXJyb3IoY3JlYXRlUmVzcG9uc2UoJ2Vycm9yJywgeGhyLnN0YXR1cywgeGhyLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZXJyb3IgZHVyaW5nIGxvYWRcbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgYXBpLm9uZXJyb3IoY3JlYXRlUmVzcG9uc2UoJ2Vycm9yJywgeGhyLnN0YXR1cywgeGhyLnN0YXR1c1RleHQpKTtcbiAgICB9O1xuXG4gICAgLy8gcmVxdWVzdCBhYm9ydGVkXG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aW1lZE91dCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhYm9ydGVkID0gdHJ1ZTtcbiAgICAgIGFwaS5vbmFib3J0KCk7XG4gICAgfTtcblxuICAgIC8vIHNldCB0aW1lb3V0IGlmIGRlZmluZWRcbiAgICBpZiAoaXNJbnQob3B0aW9ucy50aW1lb3V0KSkge1xuICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdGltZWRPdXQgPSB0cnVlO1xuICAgICAgICBhcGkub25lcnJvcihjcmVhdGVSZXNwb25zZSgnZXJyb3InLCAwLCAndGltZW91dCcpKTtcbiAgICAgICAgYXBpLmFib3J0KCk7XG4gICAgICB9LCBvcHRpb25zLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIC8vIGFkZCBoZWFkZXJzXG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBvcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgdHlwZSBvZiByZXNwb25zZVxuICAgIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSkge1xuICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgIH1cblxuICAgIC8vIHNldCBjcmVkZW50aWFsc1xuICAgIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gbGV0J3Mgc2VuZCBvdXIgZGF0YVxuICAgIHhoci5zZW5kKGRhdGEpO1xuXG4gICAgcmV0dXJuIGFwaTtcbiAgfTtcblxuICB2YXIgY3JlYXRlRmV0Y2hGdW5jdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZUZldGNoRnVuY3Rpb24oKSB7XG4gICAgdmFyIGFwaVVybCA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgICAvLyBjdXN0b20gaGFuZGxlciAoc2hvdWxkIGFsc28gaGFuZGxlIGZpbGUsIGxvYWQsIGVycm9yLCBwcm9ncmVzcyBhbmQgYWJvcnQpXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfVxuXG4gICAgLy8gbm8gYWN0aW9uIHN1cHBsaWVkXG4gICAgaWYgKCFhY3Rpb24gfHwgIWlzU3RyaW5nKGFjdGlvbi51cmwpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBpbnRlcm5hbCBoYW5kbGVyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHVybCwgbG9hZCwgZXJyb3IsIHByb2dyZXNzLCBhYm9ydCwgaGVhZGVycykge1xuICAgICAgLy8gZG8gbG9jYWwgb3IgcmVtb3RlIHJlcXVlc3QgYmFzZWQgb24gaWYgdGhlIHVybCBpcyBleHRlcm5hbFxuICAgICAgdmFyIHJlcXVlc3QgPSBzZW5kUmVxdWVzdChcbiAgICAgICAgdXJsLFxuICAgICAgICBhcGlVcmwgKyBhY3Rpb24udXJsLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgYWN0aW9uLCB7XG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYidcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vIHR1cm4gYmxvYiBpbnRvIGEgZmlsZVxuICAgICAgICByZXNwb25zZS5ib2R5ID0gZ2V0RmlsZUZyb21CbG9iKFxuICAgICAgICAgIHJlc3BvbnNlLmJvZHksXG4gICAgICAgICAgZ2V0RmlsZW5hbWVGcm9tSGVhZGVycyhyZXNwb25zZS5oZWFkZXJzKSB8fFxuICAgICAgICAgICAgZ2V0RmlsZW5hbWVGcm9tVVJMKHVybCkgfHxcbiAgICAgICAgICAgIGdldERhdGVTdHJpbmcoKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHBhc3MgdXBkYXRlZCByZXNwb25zZSB0byBoYW5kbGVyIG1ldGhvZFxuICAgICAgICBsb2FkKHJlc3BvbnNlKTtcbiAgICAgIH07XG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBlcnJvcjtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgcmVxdWVzdC5vbmFib3J0ID0gYWJvcnQ7XG4gICAgICByZXF1ZXN0Lm9uaGVhZGVycyA9IGhlYWRlcnM7XG5cbiAgICAgIC8vIHNob3VsZCByZXR1cm4gcmVxdWVzdFxuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfTtcbiAgfTtcblxuICAvKlxuZnVuY3Rpb24gc2lnbmF0dXJlOlxuICAoZGF0YSwgbG9hZCwgZXJyb3IsIHByb2dyZXNzLCBhYm9ydCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgYWJvcnQ6KCkgPT4ge31cbiAgfVxufVxuKi9cbiAgdmFyIGNyZWF0ZVByb2Nlc3NvckZ1bmN0aW9uID0gZnVuY3Rpb24gY3JlYXRlUHJvY2Vzc29yRnVuY3Rpb24oKSB7XG4gICAgdmFyIGFwaVVybCA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG4gICAgdmFyIG5hbWUgPSBhcmd1bWVudHNbMl07XG5cbiAgICAvLyBjdXN0b20gaGFuZGxlciAoc2hvdWxkIGFsc28gaGFuZGxlIGZpbGUsIGxvYWQsIGVycm9yLCBwcm9ncmVzcyBhbmQgYWJvcnQpXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDtcbiAgICAgICAgICBfa2V5IDwgX2xlbjtcbiAgICAgICAgICBfa2V5KytcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyYW1zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbi5hcHBseSh1bmRlZmluZWQsIFtuYW1lXS5jb25jYXQocGFyYW1zKSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIG5vIGFjdGlvbiBzdXBwbGllZFxuICAgIGlmICghYWN0aW9uIHx8ICFpc1N0cmluZyhhY3Rpb24udXJsKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gaW50ZXJuYWwgaGFuZGxlclxuICAgIHJldHVybiBmdW5jdGlvbihmaWxlLCBtZXRhZGF0YSwgbG9hZCwgZXJyb3IsIHByb2dyZXNzLCBhYm9ydCkge1xuICAgICAgLy8gbm8gZmlsZSByZWNlaXZlZFxuICAgICAgaWYgKCFmaWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gY3JlYXRlIGZvcm1kYXRhIG9iamVjdFxuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQobmFtZSwgZmlsZSwgZmlsZS5uYW1lKTtcblxuICAgICAgLy8gYWRkIG1ldGFkYXRhIHVkZXIgc2FtZSBuYW1lXG4gICAgICBpZiAoaXNPYmplY3QobWV0YWRhdGEpKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLCBKU09OLnN0cmluZ2lmeShtZXRhZGF0YSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBzZW5kIHJlcXVlc3Qgb2JqZWN0XG4gICAgICB2YXIgcmVxdWVzdCA9IHNlbmRSZXF1ZXN0KGZvcm1EYXRhLCBhcGlVcmwgKyBhY3Rpb24udXJsLCBhY3Rpb24pO1xuICAgICAgcmVxdWVzdC5vbmxvYWQgPSBsb2FkO1xuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZXJyb3I7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgIHJlcXVlc3Qub25hYm9ydCA9IGFib3J0O1xuXG4gICAgICAvLyBzaG91bGQgcmV0dXJuIHJlcXVlc3RcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH07XG4gIH07XG5cbiAgLypcbiBmdW5jdGlvbiBzaWduYXR1cmU6XG4gKHVuaXF1ZUZpbGVJZCwgbG9hZCwgZXJyb3IpID0+IHsgfVxuICovXG4gIHZhciBjcmVhdGVSZXZlcnRGdW5jdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZVJldmVydEZ1bmN0aW9uKCkge1xuICAgIHZhciBhcGlVcmwgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gICAgLy8gaXMgY3VzdG9tIGltcGxlbWVudGF0aW9uXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfVxuXG4gICAgLy8gbm8gYWN0aW9uIHN1cHBsaWVkLCByZXR1cm4gc3R1YiBmdW5jdGlvbiwgaW50ZXJmYWNlIHdpbGwgd29yaywgYnV0IGZpbGUgd29uJ3QgYmUgcmVtb3ZlZFxuICAgIGlmICghYWN0aW9uIHx8ICFpc1N0cmluZyhhY3Rpb24udXJsKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHVuaXF1ZUZpbGVJZCwgbG9hZCkge1xuICAgICAgICByZXR1cm4gbG9hZCgpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBpbnRlcm5hbCBpbXBsZW1lbnRhdGlvblxuICAgIHJldHVybiBmdW5jdGlvbih1bmlxdWVGaWxlSWQsIGxvYWQsIGVycm9yKSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IHNlbmRSZXF1ZXN0KFxuICAgICAgICB1bmlxdWVGaWxlSWQsXG4gICAgICAgIGFwaVVybCArIGFjdGlvbi51cmwsXG4gICAgICAgIGFjdGlvbiAvLyBjb250YWlucyBtZXRob2QsIGhlYWRlcnMgYW5kIHdpdGhDcmVkZW50aWFscyBwcm9wZXJ0aWVzXG4gICAgICApO1xuICAgICAgcmVxdWVzdC5vbmxvYWQgPSBsb2FkO1xuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZXJyb3I7XG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBnZXRSYW5kb21OdW1iZXIgPSBmdW5jdGlvbiBnZXRSYW5kb21OdW1iZXIoKSB7XG4gICAgdmFyIG1pbiA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgdmFyIG1heCA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG4gICAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlUGVyY2VpdmVkUGVyZm9ybWFuY2VVcGRhdGVyID0gZnVuY3Rpb24gY3JlYXRlUGVyY2VpdmVkUGVyZm9ybWFuY2VVcGRhdGVyKFxuICAgIGNiXG4gICkge1xuICAgIHZhciBkdXJhdGlvbiA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDEwMDA7XG4gICAgdmFyIHRpY2tNaW4gPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAyNTtcbiAgICB2YXIgdGlja01heCA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IDI1MDtcblxuICAgIHZhciB0aW1lb3V0ID0gbnVsbDtcbiAgICB2YXIgc3RhcnQgPSBEYXRlLm5vdygpO1xuXG4gICAgdmFyIHRpY2sgPSBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgdmFyIHJ1bnRpbWUgPSBEYXRlLm5vdygpIC0gc3RhcnQ7XG4gICAgICB2YXIgZGVsYXkgPSBnZXRSYW5kb21OdW1iZXIodGlja01pbiwgdGlja01heCk7XG5cbiAgICAgIGlmIChydW50aW1lICsgZGVsYXkgPiBkdXJhdGlvbikge1xuICAgICAgICBkZWxheSA9IHJ1bnRpbWUgKyBkZWxheSAtIGR1cmF0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvZ3Jlc3MgPSBydW50aW1lIC8gZHVyYXRpb247XG4gICAgICBpZiAocHJvZ3Jlc3MgPj0gMSkge1xuICAgICAgICBjYigxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjYihwcm9ncmVzcyk7XG5cbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHRpY2ssIGRlbGF5KTtcbiAgICB9O1xuXG4gICAgdGljaygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUZpbGVQcm9jZXNzb3IgPSBmdW5jdGlvbiBjcmVhdGVGaWxlUHJvY2Vzc29yKHByb2Nlc3NGbikge1xuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgIHBlcmNlaXZlZFByb2dyZXNzOiAwLFxuICAgICAgcGVyY2VpdmVkUGVyZm9ybWFuY2VVcGRhdGVyOiBudWxsLFxuICAgICAgcHJvZ3Jlc3M6IG51bGwsXG4gICAgICB0aW1lc3RhbXA6IG51bGwsXG4gICAgICBwZXJjZWl2ZWREdXJhdGlvbjogMCxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgcmVxdWVzdDogbnVsbCxcbiAgICAgIHJlc3BvbnNlOiBudWxsXG4gICAgfTtcblxuICAgIHZhciBwcm9jZXNzID0gZnVuY3Rpb24gcHJvY2VzcyhmaWxlLCBtZXRhZGF0YSkge1xuICAgICAgdmFyIHByb2dyZXNzRm4gPSBmdW5jdGlvbiBwcm9ncmVzc0ZuKCkge1xuICAgICAgICAvLyB3ZSd2ZSBub3QgeWV0IHN0YXJ0ZWQgdGhlIHJlYWwgZG93bmxvYWQsIHN0b3AgaGVyZVxuICAgICAgICAvLyB0aGUgcmVxdWVzdCBtaWdodCBub3QgZ28gdGhyb3VnaCwgc2VydmVyIHRyb3VibGUsIHN0dWZmIGxpa2UgdGhhdFxuICAgICAgICAvLyBpZiBzdGF0ZS5wcm9ncmVzcyBpcyBudWxsLCB0aGUgc2VydmVyIGRvZXMgbm90IGFsbG93IGNvbXB1dGluZyBwcm9ncmVzc1xuICAgICAgICBpZiAoc3RhdGUuZHVyYXRpb24gPT09IDAgfHwgc3RhdGUucHJvZ3Jlc3MgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhcyB3ZSdyZSBub3cgcHJvY2Vzc2luZywgZmlyZSB0aGUgcHJvZ3Jlc3MgZXZlbnRcbiAgICAgICAgYXBpLmZpcmUoJ3Byb2dyZXNzJywgYXBpLmdldFByb2dyZXNzKCkpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGNvbXBsZXRlRm4gPSBmdW5jdGlvbiBjb21wbGV0ZUZuKCkge1xuICAgICAgICBzdGF0ZS5jb21wbGV0ZSA9IHRydWU7XG5cbiAgICAgICAgYXBpLmZpcmUoJ2xvYWQnLCBzdGF0ZS5yZXNwb25zZS5ib2R5KTtcbiAgICAgIH07XG5cbiAgICAgIC8vIGxldCdzIHN0YXJ0IHByb2Nlc3NpbmdcbiAgICAgIGFwaS5maXJlKCdzdGFydCcpO1xuXG4gICAgICAvLyBzZXQgcmVxdWVzdCBzdGFydFxuICAgICAgc3RhdGUudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblxuICAgICAgLy8gY3JlYXRlIHBlcmNlaXZlZCBwZXJmb3JtYW5jZSBwcm9ncmVzcyBpbmRpY2F0b3JcbiAgICAgIHN0YXRlLnBlcmNlaXZlZFBlcmZvcm1hbmNlVXBkYXRlciA9IGNyZWF0ZVBlcmNlaXZlZFBlcmZvcm1hbmNlVXBkYXRlcihcbiAgICAgICAgZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcbiAgICAgICAgICBzdGF0ZS5wZXJjZWl2ZWRQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICAgIHN0YXRlLnBlcmNlaXZlZER1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHN0YXRlLnRpbWVzdGFtcDtcblxuICAgICAgICAgIHByb2dyZXNzRm4oKTtcblxuICAgICAgICAgIC8vIGlmIGZha2UgcHJvZ3Jlc3MgaXMgZG9uZSwgYW5kIGEgcmVzcG9uc2UgaGFzIGJlZW4gcmVjZWl2ZWQsXG4gICAgICAgICAgLy8gYW5kIHdlJ3ZlIG5vdCB5ZXQgY2FsbGVkIHRoZSBjb21wbGV0ZSBtZXRob2RcbiAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT09IDEgJiYgc3RhdGUucmVzcG9uc2UgJiYgIXN0YXRlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICBjb21wbGV0ZUZuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyByYW5kb20gZGVsYXkgYXMgaW4gYSBsaXN0IG9mIGZpbGVzIHlvdSBzdGFydCBub3RpY2luZ1xuICAgICAgICAvLyBmaWxlcyB1cGxvYWRpbmcgYXQgdGhlIGV4YWN0IHNhbWUgc3BlZWRcbiAgICAgICAgZ2V0UmFuZG9tTnVtYmVyKDc1MCwgMTUwMClcbiAgICAgICk7XG5cbiAgICAgIC8vIHJlbWVtYmVyIHJlcXVlc3Qgc28gd2UgY2FuIGFib3J0IGl0IGxhdGVyXG4gICAgICBzdGF0ZS5yZXF1ZXN0ID0gcHJvY2Vzc0ZuKFxuICAgICAgICAvLyB0aGUgZmlsZSB0byBwcm9jZXNzXG4gICAgICAgIGZpbGUsXG5cbiAgICAgICAgLy8gdGhlIG1ldGFkYXRhIHRvIHNlbmQgYWxvbmdcbiAgICAgICAgbWV0YWRhdGEsXG5cbiAgICAgICAgLy8gY2FsbGJhY2tzIChsb2FkLCBlcnJvciwgcHJvZ3Jlc3MsIGFib3J0KVxuICAgICAgICAvLyBsb2FkIGV4cGVjdHMgdGhlIGJvZHkgdG8gYmUgYSBzZXJ2ZXIgaWQgaWZcbiAgICAgICAgLy8geW91IHdhbnQgdG8gbWFrZSB1c2Ugb2YgcmV2ZXJ0XG4gICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgLy8gd2UgcHV0IHRoZSByZXNwb25zZSBpbiBzdGF0ZSBzbyB3ZSBjYW4gYWNjZXNzXG4gICAgICAgICAgLy8gaXQgb3V0c2lkZSBvZiB0aGlzIG1ldGhvZFxuICAgICAgICAgIHN0YXRlLnJlc3BvbnNlID1cbiAgICAgICAgICAgIHR5cGVvZiByZXNwb25zZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnbG9hZCcsXG4gICAgICAgICAgICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgICAgICAgICAgICBib2R5OiByZXNwb25zZSxcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IHJlc3BvbnNlO1xuXG4gICAgICAgICAgLy8gdXBkYXRlIGR1cmF0aW9uXG4gICAgICAgICAgc3RhdGUuZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gc3RhdGUudGltZXN0YW1wO1xuXG4gICAgICAgICAgLy8gZm9yY2UgcHJvZ3Jlc3MgdG8gMSBhcyB3ZSdyZSBub3cgZG9uZVxuICAgICAgICAgIHN0YXRlLnByb2dyZXNzID0gMTtcblxuICAgICAgICAgIC8vIHdlIGFyZSByZWFsbHkgZG9uZVxuICAgICAgICAgIC8vIGlmIHBlcmNlaXZlZCBwcm9ncmVzcyBpcyAxICggd2FpdCBmb3IgcGVyY2VpdmVkIHByb2dyZXNzIHRvIGNvbXBsZXRlIClcbiAgICAgICAgICAvLyBvciBpZiBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCBwcm9ncmVzcyAoIG51bGwgKVxuICAgICAgICAgIGlmIChzdGF0ZS5wZXJjZWl2ZWRQcm9ncmVzcyA9PT0gMSkge1xuICAgICAgICAgICAgY29tcGxldGVGbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBlcnJvciBpcyBleHBlY3RlZCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0eXBlLCBjb2RlLCBib2R5XG4gICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gY2FuY2VsIHVwZGF0ZXJcbiAgICAgICAgICBzdGF0ZS5wZXJjZWl2ZWRQZXJmb3JtYW5jZVVwZGF0ZXIuY2xlYXIoKTtcblxuICAgICAgICAgIC8vIHVwZGF0ZSBvdGhlcnMgYWJvdXQgdGhpcyBlcnJvclxuICAgICAgICAgIGFwaS5maXJlKFxuICAgICAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgICAgIHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgY29kZTogMCxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IGVycm9yXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IGVycm9yXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBhY3R1YWwgcHJvY2Vzc2luZyBwcm9ncmVzc1xuICAgICAgICBmdW5jdGlvbihjb21wdXRhYmxlLCBjdXJyZW50LCB0b3RhbCkge1xuICAgICAgICAgIC8vIHVwZGF0ZSBhY3R1YWwgZHVyYXRpb25cbiAgICAgICAgICBzdGF0ZS5kdXJhdGlvbiA9IERhdGUubm93KCkgLSBzdGF0ZS50aW1lc3RhbXA7XG5cbiAgICAgICAgICAvLyB1cGRhdGUgYWN0dWFsIHByb2dyZXNzXG4gICAgICAgICAgc3RhdGUucHJvZ3Jlc3MgPSBjb21wdXRhYmxlID8gY3VycmVudCAvIHRvdGFsIDogbnVsbDtcblxuICAgICAgICAgIHByb2dyZXNzRm4oKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBhYm9ydCBkb2VzIG5vdCBleHBlY3QgYSB2YWx1ZVxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBzdG9wIHVwZGF0ZXJcbiAgICAgICAgICBzdGF0ZS5wZXJjZWl2ZWRQZXJmb3JtYW5jZVVwZGF0ZXIuY2xlYXIoKTtcblxuICAgICAgICAgIC8vIGZpcmUgdGhlIGFib3J0IGV2ZW50IHNvIHdlIGNhbiBzd2l0Y2ggdmlzdWFsc1xuICAgICAgICAgIGFwaS5maXJlKCdhYm9ydCcpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH07XG5cbiAgICB2YXIgYWJvcnQgPSBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICAgIC8vIG5vIHJlcXVlc3QgcnVubmluZywgY2FuJ3QgYWJvcnRcbiAgICAgIGlmICghc3RhdGUucmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHN0b3AgdXBkYXRlclxuICAgICAgc3RhdGUucGVyY2VpdmVkUGVyZm9ybWFuY2VVcGRhdGVyLmNsZWFyKCk7XG5cbiAgICAgIC8vIGFib3J0IGFjdHVhbCByZXF1ZXN0XG4gICAgICBzdGF0ZS5yZXF1ZXN0LmFib3J0KCk7XG5cbiAgICAgIC8vIGlmIGhhcyByZXNwb25zZSBvYmplY3QsIHdlJ3ZlIGNvbXBsZXRlZCB0aGUgcmVxdWVzdFxuICAgICAgc3RhdGUuY29tcGxldGUgPSB0cnVlO1xuXG4gICAgICAvLyBub3cgYWJvcnRlZCwgaWYgc2VydmVyIHJldHVybmVkIGEgcmVzcG9uc2UsIGxldCdzIHBhc3MgaXQgYWxvbmdcbiAgICAgIGFwaS5maXJlKCdhYm9ydCcsIHN0YXRlLnJlc3BvbnNlID8gc3RhdGUucmVzcG9uc2UuYm9keSA6IG51bGwpO1xuICAgIH07XG5cbiAgICB2YXIgcmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIGFib3J0KCk7XG4gICAgICBzdGF0ZS5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgc3RhdGUucGVyY2VpdmVkUHJvZ3Jlc3MgPSAwO1xuICAgICAgc3RhdGUucHJvZ3Jlc3MgPSAwO1xuICAgICAgc3RhdGUudGltZXN0YW1wID0gbnVsbDtcbiAgICAgIHN0YXRlLnBlcmNlaXZlZER1cmF0aW9uID0gMDtcbiAgICAgIHN0YXRlLmR1cmF0aW9uID0gMDtcbiAgICAgIHN0YXRlLnJlcXVlc3QgPSBudWxsO1xuICAgICAgc3RhdGUucmVzcG9uc2UgPSBudWxsO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiBnZXRQcm9ncmVzcygpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5wcm9ncmVzc1xuICAgICAgICA/IE1hdGgubWluKHN0YXRlLnByb2dyZXNzLCBzdGF0ZS5wZXJjZWl2ZWRQcm9ncmVzcylcbiAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgdmFyIGdldER1cmF0aW9uID0gZnVuY3Rpb24gZ2V0RHVyYXRpb24oKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4oc3RhdGUuZHVyYXRpb24sIHN0YXRlLnBlcmNlaXZlZER1cmF0aW9uKTtcbiAgICB9O1xuXG4gICAgdmFyIGFwaSA9IF9leHRlbmRzKHt9LCBvbigpLCB7XG4gICAgICBwcm9jZXNzOiBwcm9jZXNzLCAvLyBzdGFydCBwcm9jZXNzaW5nIGZpbGVcbiAgICAgIGFib3J0OiBhYm9ydCwgLy8gYWJvcnQgYWN0aXZlIHByb2Nlc3MgcmVxdWVzdFxuICAgICAgZ2V0UHJvZ3Jlc3M6IGdldFByb2dyZXNzLFxuICAgICAgZ2V0RHVyYXRpb246IGdldER1cmF0aW9uLFxuICAgICAgcmVzZXQ6IHJlc2V0XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXBpO1xuICB9O1xuXG4gIHZhciBnZXRGaWxlbmFtZVdpdGhvdXRFeHRlbnNpb24gPSBmdW5jdGlvbiBnZXRGaWxlbmFtZVdpdGhvdXRFeHRlbnNpb24obmFtZSkge1xuICAgIHJldHVybiBuYW1lLnN1YnN0cigwLCBuYW1lLmxhc3RJbmRleE9mKCcuJykpIHx8IG5hbWU7XG4gIH07XG5cbiAgdmFyIEl0ZW1TdGF0dXMgPSB7XG4gICAgSU5JVDogMSxcbiAgICBJRExFOiAyLFxuICAgIFBST0NFU1NJTkc6IDMsXG4gICAgUFJPQ0VTU0lOR19QQVVTRUQ6IDQsXG4gICAgUFJPQ0VTU0lOR19DT01QTEVURTogNSxcbiAgICBQUk9DRVNTSU5HX0VSUk9SOiA2LFxuICAgIExPQURJTkc6IDcsXG4gICAgTE9BRF9FUlJPUjogOFxuICB9O1xuXG4gIHZhciBjcmVhdGVGaWxlU3R1YiA9IGZ1bmN0aW9uIGNyZWF0ZUZpbGVTdHViKHNvdXJjZSkge1xuICAgIHZhciBkYXRhID0gW3NvdXJjZS5uYW1lLCBzb3VyY2Uuc2l6ZSwgc291cmNlLnR5cGVdO1xuXG4gICAgLy8gaXMgYmxvYiBvciBiYXNlNjQsIHRoZW4gd2UgbmVlZCB0byBzZXQgdGhlIG5hbWVcbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQmxvYiB8fCBpc0Jhc2U2NERhdGFVUkkoc291cmNlKSkge1xuICAgICAgZGF0YVswXSA9IGdldERhdGVTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKGlzQmFzZTY0RGF0YVVSSShzb3VyY2UpKSB7XG4gICAgICAvLyBpZiBpcyBiYXNlNjQgZGF0YSB1cmkgd2UgbmVlZCB0byBkZXRlcm1pbmUgdGhlIGF2ZXJhZ2Ugc2l6ZSBhbmQgdHlwZVxuICAgICAgZGF0YVsxXSA9IHNvdXJjZS5sZW5ndGg7XG4gICAgICBkYXRhWzJdID0gZ2V0TWltZVR5cGVGcm9tQmFzZTY0RGF0YVVSSShzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAoIShzb3VyY2UgaW5zdGFuY2VvZiBGaWxlKSkge1xuICAgICAgLy8gdXJsXG4gICAgICBkYXRhWzBdID0gZ2V0RmlsZW5hbWVGcm9tVVJMKHNvdXJjZSk7XG4gICAgICBkYXRhWzFdID0gMDtcbiAgICAgIGRhdGFbMl0gPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogZGF0YVswXSxcbiAgICAgIHNpemU6IGRhdGFbMV0sXG4gICAgICB0eXBlOiBkYXRhWzJdXG4gICAgfTtcbiAgfTtcblxuICB2YXIgY3JlYXRlSXRlbSA9IGZ1bmN0aW9uIGNyZWF0ZUl0ZW0oKSB7XG4gICAgdmFyIHNlcnZlckZpbGVSZWZlcmVuY2UgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuXG4gICAgLy8gdW5pcXVlIGlkIGZvciB0aGlzIGl0ZW0sIGlzIHVzZWQgdG8gaWRlbnRpZnkgdGhlIGl0ZW0gYWNyb3NzIHZpZXdzXG4gICAgdmFyIGlkID0gZ2V0VW5pcXVlSWQoKTtcblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGl0ZW0gc3RhdGVcbiAgICAgKi9cbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAvLyBvcmlnaW5hbCBzb3VyY2VcbiAgICAgIHNvdXJjZTogbnVsbCxcblxuICAgICAgLy8gZmlsZSBtb2RlbCByZWZlcmVuY2VcbiAgICAgIGZpbGU6IG51bGwsXG5cbiAgICAgIC8vIGlkIG9mIGZpbGUgb24gc2VydmVyXG4gICAgICBzZXJ2ZXJGaWxlUmVmZXJlbmNlOiBzZXJ2ZXJGaWxlUmVmZXJlbmNlLFxuXG4gICAgICAvLyBjdXJyZW50IGl0ZW0gc3RhdHVzXG4gICAgICBzdGF0dXM6IHNlcnZlckZpbGVSZWZlcmVuY2VcbiAgICAgICAgPyBJdGVtU3RhdHVzLlBST0NFU1NJTkdfQ09NUExFVEVcbiAgICAgICAgOiBJdGVtU3RhdHVzLklOSVQsXG5cbiAgICAgIC8vIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAgIGFjdGl2ZUxvYWRlcjogbnVsbCxcbiAgICAgIGFjdGl2ZVByb2Nlc3NvcjogbnVsbFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFeHRlcm5hbGx5IGFkZGVkIGl0ZW0gbWV0YWRhdGFcbiAgICAgKi9cbiAgICB2YXIgbWV0YWRhdGEgPSB7fTtcblxuICAgIC8vIGl0ZW0gZGF0YVxuICAgIHZhciBzZXRTdGF0dXMgPSBmdW5jdGlvbiBzZXRTdGF0dXMoc3RhdHVzKSB7XG4gICAgICByZXR1cm4gKHN0YXRlLnN0YXR1cyA9IHN0YXR1cyk7XG4gICAgfTtcblxuICAgIC8vIGZpbGUgZGF0YVxuICAgIHZhciBnZXRGaWxlRXh0ZW5zaW9uID0gZnVuY3Rpb24gZ2V0RmlsZUV4dGVuc2lvbigpIHtcbiAgICAgIHJldHVybiBnZXRFeHRlbnNpb25Gcm9tRmlsZW5hbWUoc3RhdGUuZmlsZS5uYW1lKTtcbiAgICB9O1xuICAgIHZhciBnZXRGaWxlVHlwZSA9IGZ1bmN0aW9uIGdldEZpbGVUeXBlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmZpbGUudHlwZTtcbiAgICB9O1xuICAgIHZhciBnZXRGaWxlU2l6ZSA9IGZ1bmN0aW9uIGdldEZpbGVTaXplKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmZpbGUuc2l6ZTtcbiAgICB9O1xuICAgIHZhciBnZXRGaWxlID0gZnVuY3Rpb24gZ2V0RmlsZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5maWxlO1xuICAgIH07XG5cbiAgICAvLyBsb2FkcyBmaWxlc1xuICAgIHZhciBsb2FkID0gZnVuY3Rpb24gbG9hZChzb3VyY2UsIGxvYWRlciwgb25sb2FkKSB7XG4gICAgICAvLyByZW1lbWJlciB0aGUgb3JpZ2luYWwgaXRlbSBzb3VyY2VcbiAgICAgIHN0YXRlLnNvdXJjZSA9IHNvdXJjZTtcblxuICAgICAgLy8gc2V0IGEgc3R1YiBmaWxlIG9iamVjdCB3aGlsZSBsb2FkaW5nIHRoZSBhY3R1YWwgZGF0YVxuICAgICAgc3RhdGUuZmlsZSA9IGNyZWF0ZUZpbGVTdHViKHNvdXJjZSk7XG5cbiAgICAgIC8vIHN0YXJ0cyBsb2FkaW5nXG4gICAgICBsb2FkZXIub24oJ2luaXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYXBpLmZpcmUoJ2xvYWQtaW5pdCcpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHdlJ2V2ZSByZWNlaXZlZCBhIHNpemUgaW5kaWNhdGlvbiwgbGV0J3MgdXBkYXRlIHRoZSBzdHViXG4gICAgICBsb2FkZXIub24oJ21ldGEnLCBmdW5jdGlvbihtZXRhKSB7XG4gICAgICAgIC8vIHNldCBzaXplIG9mIGZpbGUgc3R1YlxuICAgICAgICBzdGF0ZS5maWxlLnNpemUgPSBtZXRhLnNpemU7XG5cbiAgICAgICAgLy8gc2V0IG5hbWUgb2YgZmlsZSBzdHViXG4gICAgICAgIHN0YXRlLmZpbGUuZmlsZW5hbWUgPSBtZXRhLmZpbGVuYW1lO1xuXG4gICAgICAgIC8vIHNpemUgaGFzIGJlZW4gdXBkYXRlZFxuICAgICAgICBhcGkuZmlyZSgnbG9hZC1tZXRhJyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gdGhlIGZpbGUgaXMgbm93IGxvYWRpbmcgd2UgbmVlZCB0byB1cGRhdGUgdGhlIHByb2dyZXNzIGluZGljYXRvcnNcbiAgICAgIGxvYWRlci5vbigncHJvZ3Jlc3MnLCBmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICBzZXRTdGF0dXMoSXRlbVN0YXR1cy5MT0FESU5HKTtcblxuICAgICAgICBhcGkuZmlyZSgnbG9hZC1wcm9ncmVzcycsIHByb2dyZXNzKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBhbiBlcnJvciB3YXMgdGhyb3duIHdoaWxlIGxvYWRpbmcgdGhlIGZpbGUsIHdlIG5lZWQgdG8gc3dpdGNoIHRvIGVycm9yIHN0YXRlXG4gICAgICBsb2FkZXIub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuTE9BRF9FUlJPUik7XG5cbiAgICAgICAgYXBpLmZpcmUoJ2xvYWQtcmVxdWVzdC1lcnJvcicsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyB1c2VyIG9yIGFub3RoZXIgcHJvY2VzcyBhYm9ydGVkIHRoZSBmaWxlIGxvYWQgKGNhbm5vdCByZXRyeSlcbiAgICAgIGxvYWRlci5vbignYWJvcnQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuSU5JVCk7XG5cbiAgICAgICAgYXBpLmZpcmUoJ2xvYWQtYWJvcnQnKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBkb25lIGxvYWRpbmdcbiAgICAgIGxvYWRlci5vbignbG9hZCcsIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgLy8gYXMgd2UndmUgbm93IGxvYWRlZCB0aGUgZmlsZSB0aGUgbG9hZGVyIGlzIG5vIGxvbmdlciByZXF1aXJlZFxuICAgICAgICBzdGF0ZS5hY3RpdmVMb2FkZXIgPSBudWxsO1xuXG4gICAgICAgIC8vIGNhbGxlZCB3aGVuIGZpbGUgaGFzIGxvYWRlZCBzdWNjZXNmdWxseVxuICAgICAgICB2YXIgc3VjY2VzcyA9IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgICAgLy8gc2V0IChwb3NzaWJseSkgdHJhbnNmb3JtZWQgZmlsZVxuICAgICAgICAgIHN0YXRlLmZpbGUgPSByZXN1bHQ7XG5cbiAgICAgICAgICAvLyBmaWxlIHJlY2VpdmVkXG4gICAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuSURMRSk7XG4gICAgICAgICAgYXBpLmZpcmUoJ2xvYWQnKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZXJyb3IgPSBmdW5jdGlvbiBlcnJvcihyZXN1bHQpIHtcbiAgICAgICAgICAvLyBzZXQgb3JpZ2luYWwgZmlsZVxuICAgICAgICAgIHN0YXRlLmZpbGUgPSBmaWxlO1xuICAgICAgICAgIGFwaS5maXJlKCdsb2FkLW1ldGEnKTtcblxuICAgICAgICAgIHNldFN0YXR1cyhJdGVtU3RhdHVzLkxPQURfRVJST1IpO1xuICAgICAgICAgIGFwaS5maXJlKCdsb2FkLWZpbGUtZXJyb3InLCByZXN1bHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGlmIHdlIGFscmVhZHkgaGF2ZSBhIHNlcnZlciBmaWxlIHJlZmVyZW5jZSwgd2UgZG9uJ3QgbmVlZCB0byBjYWxsIHRoZSBvbmxvYWQgbWV0aG9kXG4gICAgICAgIGlmIChzdGF0ZS5zZXJ2ZXJGaWxlUmVmZXJlbmNlKSB7XG4gICAgICAgICAgc3VjY2VzcyhmaWxlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBubyBzZXJ2ZXIgaWQsIGxldCdzIGdpdmUgdGhpcyBmaWxlIHRoZSBmdWxsIHRyZWF0bWVudFxuICAgICAgICBvbmxvYWQoZmlsZSwgc3VjY2VzcywgZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldCBsb2FkZXIgc291cmNlIGRhdGFcbiAgICAgIGxvYWRlci5zZXRTb3VyY2Uoc291cmNlKTtcblxuICAgICAgLy8gc2V0IGFzIGFjdGl2ZSBsb2FkZXJcbiAgICAgIHN0YXRlLmFjdGl2ZUxvYWRlciA9IGxvYWRlcjtcblxuICAgICAgLy8gbG9hZCB0aGUgc291cmNlIGRhdGFcbiAgICAgIGxvYWRlci5sb2FkKCk7XG4gICAgfTtcblxuICAgIC8vIGZpbGUgcHJvY2Vzc29yXG4gICAgdmFyIHByb2Nlc3MgPSBmdW5jdGlvbiBwcm9jZXNzKHByb2Nlc3Nvciwgb25wcm9jZXNzKSB7XG4gICAgICAvLyBpZiBubyBmaWxlIGxvYWRlZCB3ZSdsbCB3YWl0IGZvciB0aGUgbG9hZCBldmVudFxuICAgICAgaWYgKCEoc3RhdGUuZmlsZSBpbnN0YW5jZW9mIEJsb2IpKSB7XG4gICAgICAgIGFwaS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHByb2Nlc3MocHJvY2Vzc29yLCBvbnByb2Nlc3MpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXR1cCBwcm9jZXNzb3JcblxuICAgICAgcHJvY2Vzc29yLm9uKCdsb2FkJywgZnVuY3Rpb24oc2VydmVyRmlsZVJlZmVyZW5jZSkge1xuICAgICAgICAvLyBubyBsb25nZXIgcmVxdWlyZWRcbiAgICAgICAgc3RhdGUuYWN0aXZlUHJvY2Vzc29yID0gbnVsbDtcblxuICAgICAgICAvLyBuZWVkIHRoaXMgaWQgdG8gYmUgYWJsZSB0byByZXZlciB0aGUgdXBsb2FkXG4gICAgICAgIHN0YXRlLnNlcnZlckZpbGVSZWZlcmVuY2UgPSBzZXJ2ZXJGaWxlUmVmZXJlbmNlO1xuXG4gICAgICAgIHNldFN0YXR1cyhJdGVtU3RhdHVzLlBST0NFU1NJTkdfQ09NUExFVEUpO1xuICAgICAgICBhcGkuZmlyZSgncHJvY2Vzcy1jb21wbGV0ZScsIHNlcnZlckZpbGVSZWZlcmVuY2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHByb2Nlc3Nvci5vbignc3RhcnQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYXBpLmZpcmUoJ3Byb2Nlc3Mtc3RhcnQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9jZXNzb3Iub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgc3RhdGUuYWN0aXZlUHJvY2Vzc29yID0gbnVsbDtcbiAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19FUlJPUik7XG4gICAgICAgIGFwaS5maXJlKCdwcm9jZXNzLWVycm9yJywgZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIHByb2Nlc3Nvci5vbignYWJvcnQnLCBmdW5jdGlvbihzZXJ2ZXJGaWxlUmVmZXJlbmNlKSB7XG4gICAgICAgIHN0YXRlLmFjdGl2ZVByb2Nlc3NvciA9IG51bGw7XG5cbiAgICAgICAgLy8gaWYgZmlsZSB3YXMgdXBsb2FkZWQgYnV0IHByb2Nlc3Npbmcgd2FzIGNhbmNlbGxlZCBkdXJpbmcgcGVyY2VpdmVkIHByb2Nlc3NvciB0aW1lIHN0b3JlIGZpbGUgcmVmZXJlbmNlXG4gICAgICAgIHN0YXRlLnNlcnZlckZpbGVSZWZlcmVuY2UgPSBzZXJ2ZXJGaWxlUmVmZXJlbmNlO1xuXG4gICAgICAgIHNldFN0YXR1cyhJdGVtU3RhdHVzLklETEUpO1xuICAgICAgICBhcGkuZmlyZSgncHJvY2Vzcy1hYm9ydCcpO1xuICAgICAgfSk7XG5cbiAgICAgIHByb2Nlc3Nvci5vbigncHJvZ3Jlc3MnLCBmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICBzZXRTdGF0dXMoSXRlbVN0YXR1cy5QUk9DRVNTSU5HKTtcbiAgICAgICAgYXBpLmZpcmUoJ3Byb2Nlc3MtcHJvZ3Jlc3MnLCBwcm9ncmVzcyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gd2hlbiBzdWNjZXNzZnVsbHkgdHJhbnNmb3JtZWRcbiAgICAgIHZhciBzdWNjZXNzID0gZnVuY3Rpb24gc3VjY2VzcyhmaWxlKSB7XG4gICAgICAgIHByb2Nlc3Nvci5wcm9jZXNzKGZpbGUsIF9leHRlbmRzKHt9LCBtZXRhZGF0YSkpO1xuICAgICAgfTtcblxuICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmcgZHVyaW5nIHRyYW5zZm9ybSBwaGFzZVxuICAgICAgdmFyIGVycm9yID0gZnVuY3Rpb24gZXJyb3IocmVzdWx0KSB7fTtcblxuICAgICAgLy8gc3RhcnQgcHJvY2Vzc2luZyB0aGUgZmlsZVxuICAgICAgb25wcm9jZXNzKHN0YXRlLmZpbGUsIHN1Y2Nlc3MsIGVycm9yKTtcblxuICAgICAgLy8gc2V0IGFzIGFjdGl2ZSBwcm9jZXNzb3JcbiAgICAgIHN0YXRlLmFjdGl2ZVByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgICB9O1xuXG4gICAgdmFyIHJldmVydCA9IGZ1bmN0aW9uIHJldmVydChyZXZlcnRGaWxlVXBsb2FkKSB7XG4gICAgICAvLyBjYW5ub3QgcmV2ZXJ0IHdpdGhvdXQgYSBzZXJ2ZXIgaWQgZm9yIHRoaXMgcHJvY2Vzc1xuICAgICAgaWYgKHN0YXRlLnNlcnZlckZpbGVSZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyByZXZlcnQgdGhlIHVwbG9hZCAoZmlyZSBhbmQgZm9yZ2V0KVxuICAgICAgcmV2ZXJ0RmlsZVVwbG9hZChcbiAgICAgICAgc3RhdGUuc2VydmVyRmlsZVJlZmVyZW5jZSxcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gcmVzZXQgZmlsZSBzZXJ2ZXIgaWQgYXMgbm93IGl0J3Mgbm8gYXZhaWxhYmxlIG9uIHRoZSBzZXJ2ZXJcbiAgICAgICAgICBzdGF0ZS5zZXJ2ZXJGaWxlUmVmZXJlbmNlID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBUT0RPOiBoYW5kbGUgcmV2ZXJ0IGVycm9yXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIC8vIGZpcmUgZXZlbnRcbiAgICAgIHNldFN0YXR1cyhJdGVtU3RhdHVzLklETEUpO1xuICAgICAgYXBpLmZpcmUoJ3Byb2Nlc3MtcmV2ZXJ0Jyk7XG4gICAgfTtcblxuICAgIHZhciBhYm9ydExvYWQgPSBmdW5jdGlvbiBhYm9ydExvYWQoKSB7XG4gICAgICBpZiAoIXN0YXRlLmFjdGl2ZUxvYWRlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzdGF0ZS5hY3RpdmVMb2FkZXIuYWJvcnQoKTtcbiAgICB9O1xuXG4gICAgdmFyIHJldHJ5TG9hZCA9IGZ1bmN0aW9uIHJldHJ5TG9hZCgpIHtcbiAgICAgIGlmICghc3RhdGUuYWN0aXZlTG9hZGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmFjdGl2ZUxvYWRlci5sb2FkKCk7XG4gICAgfTtcblxuICAgIHZhciBhYm9ydFByb2Nlc3NpbmcgPSBmdW5jdGlvbiBhYm9ydFByb2Nlc3NpbmcoKSB7XG4gICAgICBpZiAoIXN0YXRlLmFjdGl2ZVByb2Nlc3Nvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzdGF0ZS5hY3RpdmVQcm9jZXNzb3IuYWJvcnQoKTtcbiAgICB9O1xuXG4gICAgLy8gZXhwb3NlZCBtZXRob2RzXG5cbiAgICB2YXIgYXBpID0gX2V4dGVuZHMoXG4gICAgICB7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXJ2ZXJJZDoge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnNlcnZlckZpbGVSZWZlcmVuY2U7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5zdGF0dXM7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmaWxlbmFtZToge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmZpbGUubmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZpbGVuYW1lV2l0aG91dEV4dGVuc2lvbjoge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVuYW1lV2l0aG91dEV4dGVuc2lvbihzdGF0ZS5maWxlLm5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmlsZUV4dGVuc2lvbjogeyBnZXQ6IGdldEZpbGVFeHRlbnNpb24gfSxcbiAgICAgICAgZmlsZVR5cGU6IHsgZ2V0OiBnZXRGaWxlVHlwZSB9LFxuICAgICAgICBmaWxlU2l6ZTogeyBnZXQ6IGdldEZpbGVTaXplIH0sXG4gICAgICAgIGZpbGU6IHsgZ2V0OiBnZXRGaWxlIH0sXG4gICAgICAgIHNvdXJjZToge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnNvdXJjZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TWV0YWRhdGE6IGZ1bmN0aW9uIGdldE1ldGFkYXRhKG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gbmFtZSA/IG1ldGFkYXRhW25hbWVdIDogX2V4dGVuZHMoe30sIG1ldGFkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0TWV0YWRhdGE6IGZ1bmN0aW9uIHNldE1ldGFkYXRhKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIChtZXRhZGF0YVtuYW1lXSA9IHZhbHVlKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhYm9ydExvYWQ6IGFib3J0TG9hZCxcbiAgICAgICAgcmV0cnlMb2FkOiByZXRyeUxvYWQsXG4gICAgICAgIGFib3J0UHJvY2Vzc2luZzogYWJvcnRQcm9jZXNzaW5nLFxuXG4gICAgICAgIGxvYWQ6IGxvYWQsXG4gICAgICAgIHByb2Nlc3M6IHByb2Nlc3MsXG4gICAgICAgIHJldmVydDogcmV2ZXJ0XG4gICAgICB9LFxuICAgICAgb24oKVxuICAgICk7XG5cbiAgICByZXR1cm4gY3JlYXRlT2JqZWN0KGFwaSk7XG4gIH07XG5cbiAgdmFyIGdldEl0ZW1CeUlkID0gZnVuY3Rpb24gZ2V0SXRlbUJ5SWQoaXRlbXMsIGl0ZW1JZCkge1xuICAgIHZhciBpbmRleCA9IGdldEl0ZW1JbmRleEJ5UXVlcnkoaXRlbXMsIGl0ZW1JZCk7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbXNbaW5kZXhdIHx8IG51bGw7XG4gIH07XG5cbiAgdmFyIHJlbW92ZUl0ZW0gPSBmdW5jdGlvbiByZW1vdmVJdGVtKGl0ZW1zLCBuZWVkbGUpIHtcbiAgICAvLyBnZXQgaW5kZXggb2YgaXRlbVxuICAgIHZhciBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleChmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbSA9PT0gbmVlZGxlO1xuICAgIH0pO1xuXG4gICAgLy8gcmVtb3ZlIGl0IGZyb20gYXJyYXlcbiAgICByZW1vdmVJbmRleChpdGVtcywgaW5kZXgpO1xuXG4gICAgLy8gcmV0dXJuIHJlbW92ZWQgaXRlbVxuICAgIHJldHVybiBuZWVkbGU7XG4gIH07XG5cbiAgdmFyIGZldGNoTG9jYWwgPSBmdW5jdGlvbiBmZXRjaExvY2FsKFxuICAgIHVybCxcbiAgICBsb2FkLFxuICAgIGVycm9yLFxuICAgIHByb2dyZXNzLFxuICAgIGFib3J0LFxuICAgIGhlYWRlcnNcbiAgKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBzZW5kUmVxdWVzdChudWxsLCB1cmwsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xuICAgIH0pO1xuICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIC8vIHR1cm4gYmxvYiBpbnRvIGEgZmlsZVxuICAgICAgcmVzcG9uc2UuYm9keSA9IGdldEZpbGVGcm9tQmxvYihcbiAgICAgICAgcmVzcG9uc2UuYm9keSxcbiAgICAgICAgZ2V0RmlsZW5hbWVGcm9tSGVhZGVycyhyZXNwb25zZS5oZWFkZXJzKSB8fFxuICAgICAgICAgIGdldEZpbGVuYW1lRnJvbVVSTCh1cmwpIHx8XG4gICAgICAgICAgZ2V0RGF0ZVN0cmluZygpXG4gICAgICApO1xuXG4gICAgICAvLyBwYXNzIHVwZGF0ZWQgcmVzcG9uc2UgdG8gaGFuZGxlciBtZXRob2RcbiAgICAgIGxvYWQocmVzcG9uc2UpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vbmVycm9yID0gZXJyb3I7XG4gICAgcmVxdWVzdC5vbnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgcmVxdWVzdC5vbmFib3J0ID0gYWJvcnQ7XG4gICAgcmVxdWVzdC5vbmhlYWRlcnMgPSBoZWFkZXJzO1xuXG4gICAgLy8gc2hvdWxkIHJldHVybiByZXF1ZXN0XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH07XG5cbiAgdmFyIGdldERvbWFpbkZyb21VUkwgPSBmdW5jdGlvbiBnZXREb21haW5Gcm9tVVJMKHVybCkge1xuICAgIGlmICh1cmwuaW5kZXhPZignLy8nKSA9PT0gMCkge1xuICAgICAgdXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyB1cmw7XG4gICAgfVxuICAgIHJldHVybiB1cmxcbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAucmVwbGFjZSgvKFthLXpdKT86XFwvXFwvLywgJyQxJylcbiAgICAgIC5zcGxpdCgnLycpWzBdO1xuICB9O1xuXG4gIHZhciBpc0V4dGVybmFsVVJMID0gZnVuY3Rpb24gaXNFeHRlcm5hbFVSTCh1cmwpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHVybC5pbmRleE9mKCc6JykgPiAtMSB8fCB1cmwuaW5kZXhPZignLy8nKSA+IC0xKSAmJlxuICAgICAgZ2V0RG9tYWluRnJvbVVSTChsb2NhdGlvbi5ocmVmKSAhPT0gZ2V0RG9tYWluRnJvbVVSTCh1cmwpXG4gICAgKTtcbiAgfTtcblxuICAvLyByZXR1cm5zIGl0ZW0gYmFzZWQgb24gc3RhdGVcbiAgdmFyIGdldEl0ZW1CeVF1ZXJ5RnJvbVN0YXRlID0gZnVuY3Rpb24gZ2V0SXRlbUJ5UXVlcnlGcm9tU3RhdGUoXG4gICAgc3RhdGUsXG4gICAgaXRlbUhhbmRsZXJcbiAgKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF9yZWYgPVxuICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXVxuICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgcXVlcnkgPSBfcmVmLnF1ZXJ5LFxuICAgICAgICBfcmVmJHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXG4gICAgICAgIHN1Y2Nlc3MgPSBfcmVmJHN1Y2Nlc3MgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uKCkge30gOiBfcmVmJHN1Y2Nlc3MsXG4gICAgICAgIF9yZWYkZmFpbHVyZSA9IF9yZWYuZmFpbHVyZSxcbiAgICAgICAgZmFpbHVyZSA9IF9yZWYkZmFpbHVyZSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24oKSB7fSA6IF9yZWYkZmFpbHVyZTtcblxuICAgICAgdmFyIGl0ZW0gPSBnZXRJdGVtQnlRdWVyeShzdGF0ZS5pdGVtcywgcXVlcnkpO1xuICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgIGZhaWx1cmUoe1xuICAgICAgICAgIGVycm9yOiBjcmVhdGVSZXNwb25zZSgnZXJyb3InLCAwLCAnSXRlbSBub3QgZm91bmQnKSxcbiAgICAgICAgICBmaWxlOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpdGVtSGFuZGxlcihpdGVtLCBzdWNjZXNzLCBmYWlsdXJlKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBhY3Rpb25zID0gZnVuY3Rpb24gYWN0aW9ucyhkaXNwYXRjaCwgcXVlcnksIHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogQWJvcnRzIGFsbCBvbmdvaW5nIHByb2Nlc3Nlc1xuICAgICAgICovXG4gICAgICBBQk9SVF9BTEw6IGZ1bmN0aW9uIEFCT1JUX0FMTCgpIHtcbiAgICAgICAgcXVlcnkoJ0dFVF9JVEVNUycpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIGl0ZW0uYWJvcnRMb2FkKCk7XG4gICAgICAgICAgaXRlbS5hYm9ydFByb2Nlc3NpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHMgaW5pdGlhbCBmaWxlc1xuICAgICAgICovXG4gICAgICBESURfU0VUX0ZJTEVTOiBmdW5jdGlvbiBESURfU0VUX0ZJTEVTKF9yZWYyKSB7XG4gICAgICAgIHZhciBfcmVmMiR2YWx1ZSA9IF9yZWYyLnZhbHVlLFxuICAgICAgICAgIHZhbHVlID0gX3JlZjIkdmFsdWUgPT09IHVuZGVmaW5lZCA/IFtdIDogX3JlZjIkdmFsdWU7XG5cbiAgICAgICAgLy8gbWFwIHZhbHVlcyB0byBmaWxlIG9iamVjdHNcbiAgICAgICAgdmFyIGZpbGVzID0gdmFsdWUubWFwKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc291cmNlOiBmaWxlLnNvdXJjZSA/IGZpbGUuc291cmNlIDogZmlsZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IGZpbGUub3B0aW9uc1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGxvb3Agb3ZlciBmaWxlcywgaWYgZmlsZSBpcyBpbiBsaXN0LCBsZWF2ZSBpdCBiZSwgaWYgbm90LCByZW1vdmVcblxuICAgICAgICAvLyB0ZXN0IGlmIGl0ZW1zIHNob3VsZCBiZSBtb3ZlZFxuICAgICAgICBbXS5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkoc3RhdGUuaXRlbXMpKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAvLyBpZiBpdGVtIG5vdCBpcyBpbiBuZXcgdmFsdWUsIHJlbW92ZVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFmaWxlcy5maW5kKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZpbGUuc291cmNlID09PSBpdGVtLnNvdXJjZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgnUkVNT1ZFX0lURU0nLCB7IHF1ZXJ5OiBpdGVtIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYWRkIG5ldyBmaWxlc1xuICAgICAgICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uKGZpbGUsIGluZGV4KSB7XG4gICAgICAgICAgLy8gaWYgZmlsZSBpcyBhbHJlYWR5IGluIGxpc3RcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBbXS5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkoc3RhdGUuaXRlbXMpKS5maW5kKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uc291cmNlID09PSBmaWxlLnNvdXJjZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbm90IGluIGxpc3QsIGFkZFxuICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgJ0FERF9JVEVNJyxcbiAgICAgICAgICAgIF9leHRlbmRzKHt9LCBmaWxlLCB7XG4gICAgICAgICAgICAgIGludGVyYWN0aW9uTWV0aG9kOiBJbnRlcmFjdGlvbk1ldGhvZC5OT05FLFxuICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSBzb3VyY2VcbiAgICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAgICogQHBhcmFtIGludGVyYWN0aW9uTWV0aG9kXG4gICAgICAgKi9cbiAgICAgIEFERF9JVEVNOiBmdW5jdGlvbiBBRERfSVRFTShfcmVmMykge1xuICAgICAgICB2YXIgc291cmNlID0gX3JlZjMuc291cmNlLFxuICAgICAgICAgIGluZGV4ID0gX3JlZjMuaW5kZXgsXG4gICAgICAgICAgaW50ZXJhY3Rpb25NZXRob2QgPSBfcmVmMy5pbnRlcmFjdGlvbk1ldGhvZCxcbiAgICAgICAgICBfcmVmMyRzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcbiAgICAgICAgICBzdWNjZXNzID0gX3JlZjMkc3VjY2VzcyA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24oKSB7fSA6IF9yZWYzJHN1Y2Nlc3MsXG4gICAgICAgICAgX3JlZjMkZmFpbHVyZSA9IF9yZWYzLmZhaWx1cmUsXG4gICAgICAgICAgZmFpbHVyZSA9IF9yZWYzJGZhaWx1cmUgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uKCkge30gOiBfcmVmMyRmYWlsdXJlLFxuICAgICAgICAgIF9yZWYzJG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLFxuICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMyRvcHRpb25zID09PSB1bmRlZmluZWQgPyB7fSA6IF9yZWYzJG9wdGlvbnM7XG5cbiAgICAgICAgLy8gaWYgbm8gc291cmNlIHN1cHBsaWVkXG4gICAgICAgIGlmIChpc0VtcHR5KHNvdXJjZSkpIHtcbiAgICAgICAgICBmYWlsdXJlKHtcbiAgICAgICAgICAgIGVycm9yOiBjcmVhdGVSZXNwb25zZSgnZXJyb3InLCAwLCAnTm8gc291cmNlJyksXG4gICAgICAgICAgICBmaWxlOiBudWxsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlsdGVyIG91dCBpbnZhbGlkIGZpbGUgaXRlbXMsIHVzZWQgdG8gZmlsdGVyIGRyb3BwZWQgZGlyZWN0b3J5IGNvbnRlbnRzXG4gICAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgICAgaWYgKHN0YXRlLm9wdGlvbnMuaWdub3JlZEZpbGVzLmluY2x1ZGVzKHNvdXJjZS5uYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAvLyBmYWlsIHNpbGVudGx5XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGVzdCBpZiB0aGVyZSdzIHN0aWxsIHJvb20gaW4gdGhlIGxpc3Qgb2YgZmlsZXNcbiAgICAgICAgaWYgKCFoYXNSb29tRm9ySXRlbShzdGF0ZSkpIHtcbiAgICAgICAgICAvLyBpZiBtdWx0aXBsZSBhbGxvd2VkLCB3ZSBjYW4ndCByZXBsYWNlXG4gICAgICAgICAgLy8gb3IgaWYgb25seSBhIHNpbmdsZSBpdGVtIGlzIGFsbG93ZWQgYnV0IHdlJ3JlIG5vdCBhbGxvd2VkIHRvIHJlcGxhY2UgaXQgd2UgZXhpdFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHN0YXRlLm9wdGlvbnMuYWxsb3dNdWx0aXBsZSB8fFxuICAgICAgICAgICAgKCFzdGF0ZS5vcHRpb25zLmFsbG93TXVsdGlwbGUgJiYgIXN0YXRlLm9wdGlvbnMuYWxsb3dSZXBsYWNlKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdmFyIGVycm9yID0gY3JlYXRlUmVzcG9uc2UoJ3dhcm5pbmcnLCAwLCAnTWF4IGZpbGVzJyk7XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKCdESURfVEhST1dfTUFYX0ZJTEVTJywge1xuICAgICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZmFpbHVyZSh7IGVycm9yOiBlcnJvciwgZmlsZTogbnVsbCB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyByZW1vdmUgZmlyc3QgaXRlbSBhcyBpdCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHRoaXMgaXRlbVxuICAgICAgICAgIGRpc3BhdGNoKCdSRU1PVkVfSVRFTScsIHsgcXVlcnk6IHN0YXRlLml0ZW1zWzBdLmlkIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGVzdCBpZiBzZXJ2ZXIgZmlsZSByZWZlcmVuY2UgaXMgc3VwcGxpZWRcbiAgICAgICAgLy8gdHlwZSBpcyBlaXRoZXIgJ25ldycsICdsb2NhbCcgb3IgJ2xpbWJvJyAoJ3JlbW90ZScgaXMgZm9yIG5ldyBmaWxlcylcbiAgICAgICAgdmFyIGlzTG9jYWxTZXJ2ZXJGaWxlID0gb3B0aW9ucy50eXBlID09PSAnbG9jYWwnO1xuICAgICAgICB2YXIgaXNMaW1ib1NlcnZlckZpbGUgPSBvcHRpb25zLnR5cGUgPT09ICdsaW1ibyc7XG4gICAgICAgIHZhciBpc1NlcnZlckZpbGUgPSBpc0xvY2FsU2VydmVyRmlsZSB8fCBpc0xpbWJvU2VydmVyRmlsZTtcblxuICAgICAgICAvLyBjcmVhdGUgYSBuZXcgYmxhbmsgaXRlbVxuICAgICAgICB2YXIgaXRlbSA9IGNyZWF0ZUl0ZW0oaXNTZXJ2ZXJGaWxlID8gc291cmNlIDogbnVsbCk7XG5cbiAgICAgICAgLy8gYWRkIGl0ZW0gdG8gbGlzdFxuICAgICAgICBpbnNlcnRJdGVtKHN0YXRlLml0ZW1zLCBpdGVtLCBpbmRleCk7XG5cbiAgICAgICAgLy8gZ2V0IGEgcXVpY2sgcmVmZXJlbmNlIHRvIHRoZSBpdGVtIGlkXG4gICAgICAgIHZhciBpZCA9IGl0ZW0uaWQ7XG5cbiAgICAgICAgLy8gb2JzZXJ2ZSBpdGVtIGV2ZW50c1xuICAgICAgICBpdGVtLm9uKCdsb2FkLWluaXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX1NUQVJUX0lURU1fTE9BRCcsIHsgaWQ6IGlkIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdsb2FkLW1ldGEnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX1VQREFURV9JVEVNX01FVEEnLCB7IGlkOiBpZCB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5vbignbG9hZC1wcm9ncmVzcycsIGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9VUERBVEVfSVRFTV9MT0FEX1BST0dSRVNTJywge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IHByb2dyZXNzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ2xvYWQtcmVxdWVzdC1lcnJvcicsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gaXMgY2xpZW50IGVycm9yLCBubyB3YXkgdG8gcmVjb3ZlclxuICAgICAgICAgIGlmIChlcnJvci5jb2RlID49IDQwMCAmJiBlcnJvci5jb2RlIDwgNTAwKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgnRElEX1RIUk9XX0lURU1fSU5WQUxJRCcsIHtcbiAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgIHN0YXR1czoge1xuICAgICAgICAgICAgICAgIG1haW46IHN0YXRlLm9wdGlvbnMubGFiZWxGaWxlTG9hZEVycm9yLFxuICAgICAgICAgICAgICAgIHN1YjogZXJyb3IuY29kZSArICcgKCcgKyBlcnJvci5ib2R5ICsgJyknXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyByZWplY3QgdGhlIGZpbGUgc28gY2FuIGJlIGRlYWx0IHdpdGggdGhyb3VnaCBBUElcbiAgICAgICAgICAgIGZhaWx1cmUoeyBlcnJvcjogZXJyb3IsIGZpbGU6IGNyZWF0ZUl0ZW1BUEkoaXRlbSkgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gaXMgcG9zc2libGUgc2VydmVyIGVycm9yLCBzbyBtaWdodCBiZSBwb3NzaWJsZSB0byByZXRyeVxuICAgICAgICAgIGRpc3BhdGNoKCdESURfVEhST1dfSVRFTV9MT0FEX0VSUk9SJywge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgICAgIG1haW46IHN0YXRlLm9wdGlvbnMubGFiZWxGaWxlTG9hZEVycm9yLFxuICAgICAgICAgICAgICBzdWI6IHN0YXRlLm9wdGlvbnMubGFiZWxUYXBUb1JldHJ5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ2xvYWQtZmlsZS1lcnJvcicsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9USFJPV19JVEVNX0lOVkFMSUQnLCBfZXh0ZW5kcyh7fSwgZXJyb3IsIHsgaWQ6IGlkIH0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5vbignbG9hZC1hYm9ydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRpc3BhdGNoKCdSRU1PVkVfSVRFTScsIHsgcXVlcnk6IGlkIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gaXRlbSBsb2FkZWQsIGFsbG93IHBsdWdpbnMgdG9cbiAgICAgICAgICAvLyAtIHJlYWQgZGF0YSAocXVpY2tseSlcbiAgICAgICAgICAvLyAtIGFkZCBtZXRhZGF0YVxuICAgICAgICAgIGFwcGx5RmlsdGVyQ2hhaW4oJ0RJRF9MT0FEX0lURU0nLCBpdGVtLCB7IHF1ZXJ5OiBxdWVyeSB9KS50aGVuKFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIC8vIGxldCBwbHVnaW5zIGRlY2lkZSBpZiB0aGUgb3V0cHV0IGRhdGEgc2hvdWxkIGJlIHByZXBhcmVkIGF0IHRoaXMgcG9pbnRcbiAgICAgICAgICAgICAgLy8gbWVhbnMgd2UnbGwgZG8gdGhpcyBhbmQgd2FpdCBmb3IgaWRsZSBzdGF0ZVxuICAgICAgICAgICAgICBhcHBseUZpbHRlckNoYWluKCdTSE9VTERfUFJFUEFSRV9PVVRQVVQnLCBmYWxzZSwge1xuICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oc2hvdWxkUHJlcGFyZU91dHB1dCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgaXNTZXJ2ZXJGaWxlOiBpc1NlcnZlckZpbGUsXG4gICAgICAgICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgICAgICAgIGlzTG9jYWxTZXJ2ZXJGaWxlOiBpc0xvY2FsU2VydmVyRmlsZSxcbiAgICAgICAgICAgICAgICAgIGlzTGltYm9TZXJ2ZXJGaWxlOiBpc0xpbWJvU2VydmVyRmlsZSxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3NcblxuICAgICAgICAgICAgICAgICAgLy8gZXhpdFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFByZXBhcmVPdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIGlkbGUgc3RhdGUgYW5kIHRoZW4gcnVuIFBSRVBBUkVfT1VUUFVUXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgICAgICAgICAgJ1JFUVVFU1RfUFJFUEFSRV9MT0FEX0lURU0nLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ0NPTVBMRVRFX0xPQURfSVRFTScsIHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBpZCxcbiAgICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ3Byb2Nlc3Mtc3RhcnQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX1NUQVJUX0lURU1fUFJPQ0VTU0lORycsIHsgaWQ6IGlkIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdwcm9jZXNzLXByb2dyZXNzJywgZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX1VQREFURV9JVEVNX1BST0NFU1NfUFJPR1JFU1MnLCB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBwcm9ncmVzczogcHJvZ3Jlc3NcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5vbigncHJvY2Vzcy1lcnJvcicsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9USFJPV19JVEVNX1BST0NFU1NJTkdfRVJST1InLCB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICAgICAgbWFpbjogc3RhdGUub3B0aW9ucy5sYWJlbEZpbGVQcm9jZXNzaW5nRXJyb3IsXG4gICAgICAgICAgICAgIHN1Yjogc3RhdGUub3B0aW9ucy5sYWJlbFRhcFRvUmV0cnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5vbigncHJvY2Vzcy1hYm9ydCcsIGZ1bmN0aW9uKHNlcnZlckZpbGVSZWZlcmVuY2UpIHtcbiAgICAgICAgICAvLyBpZiB3ZSdyZSBpbnN0YW50IHVwbG9hZGluZywgdGhlIGl0ZW0gaXMgcmVtb3ZlZFxuICAgICAgICAgIGlmIChzdGF0ZS5vcHRpb25zLmluc3RhbnRVcGxvYWQpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdSRU1PVkVfSVRFTScsIHsgcXVlcnk6IGlkIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB3ZSBzdG9wcGVkIHByb2Nlc3NpbmdcbiAgICAgICAgICAgIGRpc3BhdGNoKCdESURfQUJPUlRfSVRFTV9QUk9DRVNTSU5HJywgeyBpZDogaWQgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gd2UnbGwgcmV2ZXJ0IGFueSBwcm9jZXNzZWQgaXRlbXNcbiAgICAgICAgICBkaXNwYXRjaCgnUkVWRVJUX0lURU1fUFJPQ0VTU0lORycsIHsgcXVlcnk6IGlkIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdwcm9jZXNzLWNvbXBsZXRlJywgZnVuY3Rpb24oc2VydmVyRmlsZVJlZmVyZW5jZSkge1xuICAgICAgICAgIGRpc3BhdGNoKCdESURfQ09NUExFVEVfSVRFTV9QUk9DRVNTSU5HJywge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBzZXJ2ZXJGaWxlUmVmZXJlbmNlOiBzZXJ2ZXJGaWxlUmVmZXJlbmNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ3Byb2Nlc3MtcmV2ZXJ0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gaWYgaXMgaW5zdGFudCB1cGxvYWQgcmVtb3ZlIHRoZSBpdGVtXG4gICAgICAgICAgaWYgKHN0YXRlLm9wdGlvbnMuaW5zdGFudFVwbG9hZCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ1JFTU9WRV9JVEVNJywgeyBxdWVyeTogaWQgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdESURfUkVWRVJUX0lURU1fUFJPQ0VTU0lORycsIHsgaWQ6IGlkIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbGV0IHZpZXcga25vdyB0aGUgaXRlbSBoYXMgYmVlbiBpbnNlcnRlZFxuICAgICAgICBkaXNwYXRjaCgnRElEX0FERF9JVEVNJywge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgaW50ZXJhY3Rpb25NZXRob2Q6IGludGVyYWN0aW9uTWV0aG9kXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHN0YXJ0IGxvYWRpbmcgdGhlIHNvdXJjZVxuXG4gICAgICAgIHZhciBfcmVmNCA9IHN0YXRlLm9wdGlvbnMuc2VydmVyIHx8IHt9LFxuICAgICAgICAgIHVybCA9IF9yZWY0LnVybCxcbiAgICAgICAgICBsb2FkID0gX3JlZjQubG9hZCxcbiAgICAgICAgICByZXN0b3JlID0gX3JlZjQucmVzdG9yZSxcbiAgICAgICAgICBmZXRjaCA9IF9yZWY0LmZldGNoO1xuXG4gICAgICAgIGl0ZW0ubG9hZChcbiAgICAgICAgICBzb3VyY2UsXG5cbiAgICAgICAgICAvLyB0aGlzIGNyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGxvYWRzIHRoZSBmaWxlIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGZpbGUgKHN0cmluZywgYmFzZTY0LCBibG9iLCBmaWxlKSBhbmQgbG9jYXRpb24gb2YgZmlsZSAobG9jYWwsIHJlbW90ZSwgbGltYm8pXG4gICAgICAgICAgY3JlYXRlRmlsZUxvYWRlcihcbiAgICAgICAgICAgIGlzU2VydmVyRmlsZVxuICAgICAgICAgICAgICA/IG9wdGlvbnMudHlwZSA9PT0gJ2xpbWJvJ1xuICAgICAgICAgICAgICAgID8gY3JlYXRlRmV0Y2hGdW5jdGlvbih1cmwsIHJlc3RvcmUpXG4gICAgICAgICAgICAgICAgOiBjcmVhdGVGZXRjaEZ1bmN0aW9uKHVybCwgbG9hZClcbiAgICAgICAgICAgICAgOiBpc1N0cmluZyhzb3VyY2UpICYmIGlzRXh0ZXJuYWxVUkwoc291cmNlKVxuICAgICAgICAgICAgICAgID8gY3JlYXRlRmV0Y2hGdW5jdGlvbih1cmwsIGZldGNoKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hMb2NhbFxuICAgICAgICAgICksXG5cbiAgICAgICAgICAvLyBjYWxsZWQgd2hlbiB0aGUgZmlsZSBpcyBsb2FkZWQgc28gaXQgY2FuIGJlIHBpcGVkIHRocm91Z2ggdGhlIGZpbHRlcnNcbiAgICAgICAgICBmdW5jdGlvbihmaWxlLCBzdWNjZXNzLCBlcnJvcikge1xuICAgICAgICAgICAgLy8gbGV0J3MgcHJvY2VzcyB0aGUgZmlsZVxuICAgICAgICAgICAgYXBwbHlGaWx0ZXJDaGFpbignTE9BRF9GSUxFJywgZmlsZSwgeyBxdWVyeTogcXVlcnkgfSlcbiAgICAgICAgICAgICAgLnRoZW4oc3VjY2VzcylcbiAgICAgICAgICAgICAgLmNhdGNoKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9LFxuXG4gICAgICBSRVFVRVNUX1BSRVBBUkVfTE9BRF9JVEVNOiBmdW5jdGlvbiBSRVFVRVNUX1BSRVBBUkVfTE9BRF9JVEVNKF9yZWY1KSB7XG4gICAgICAgIHZhciBpdGVtID0gX3JlZjUuaXRlbSxcbiAgICAgICAgICBkYXRhID0gX3JlZjUuZGF0YTtcblxuICAgICAgICAvLyBhbGxvdyBwbHVnaW5zIHRvIGFsdGVyIHRoZSBmaWxlIGRhdGFcbiAgICAgICAgYXBwbHlGaWx0ZXJDaGFpbignUFJFUEFSRV9PVVRQVVQnLCBpdGVtLmZpbGUsIHtcbiAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgaXRlbTogaXRlbVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIGFwcGx5RmlsdGVyQ2hhaW4oJ0NPTVBMRVRFX1BSRVBBUkVfT1VUUFVUJywgcmVzdWx0LCB7XG4gICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICBpdGVtOiBpdGVtXG4gICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdDT01QTEVURV9MT0FEX0lURU0nLCB7XG4gICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIENPTVBMRVRFX0xPQURfSVRFTTogZnVuY3Rpb24gQ09NUExFVEVfTE9BRF9JVEVNKF9yZWY2KSB7XG4gICAgICAgIHZhciBpdGVtID0gX3JlZjYuaXRlbSxcbiAgICAgICAgICBkYXRhID0gX3JlZjYuZGF0YTtcbiAgICAgICAgdmFyIHN1Y2Nlc3MgPSBkYXRhLnN1Y2Nlc3MsXG4gICAgICAgICAgaXNTZXJ2ZXJGaWxlID0gZGF0YS5pc1NlcnZlckZpbGUsXG4gICAgICAgICAgc291cmNlID0gZGF0YS5zb3VyY2UsXG4gICAgICAgICAgaXNMb2NhbFNlcnZlckZpbGUgPSBkYXRhLmlzTG9jYWxTZXJ2ZXJGaWxlLFxuICAgICAgICAgIGlzTGltYm9TZXJ2ZXJGaWxlID0gZGF0YS5pc0xpbWJvU2VydmVyRmlsZTtcblxuICAgICAgICAvLyBsZXQgaW50ZXJmYWNlIGtub3cgdGhlIGl0ZW0gaGFzIGxvYWRlZFxuXG4gICAgICAgIGRpc3BhdGNoKCdESURfTE9BRF9JVEVNJywge1xuICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgIHNlcnZlckZpbGVSZWZlcmVuY2U6IGlzU2VydmVyRmlsZSA/IHNvdXJjZSA6IG51bGxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaXRlbSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgbG9hZGVkIGFuZCBhZGRlZCB0byB0aGVcbiAgICAgICAgLy8gbGlzdCBvZiBpdGVtcyBzbyBjYW4gbm93IGJlIHNhZmVseSByZXR1cm5lZCBmb3IgdXNlXG4gICAgICAgIHN1Y2Nlc3MoY3JlYXRlSXRlbUFQSShpdGVtKSk7XG5cbiAgICAgICAgLy8gaWYgdGhpcyBpcyBhIGxvY2FsIHNlcnZlciBmaWxlIHdlIG5lZWQgdG8gc2hvdyBhIGRpZmZlcmVudCBzdGF0ZVxuICAgICAgICBpZiAoaXNMb2NhbFNlcnZlckZpbGUpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX0xPQURfTE9DQUxfSVRFTScsIHsgaWQ6IGl0ZW0uaWQgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgaXMgYSB0ZW1wIHNlcnZlciBmaWxlIHdlIHByZXZlbnQgYXN5bmMgdXBsb2FkIGNhbGwgaGVyZSAoYXMgdGhlIGZpbGUgaXMgYWxyZWFkeSBvbiB0aGUgc2VydmVyKVxuICAgICAgICBpZiAoaXNMaW1ib1NlcnZlckZpbGUpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX0NPTVBMRVRFX0lURU1fUFJPQ0VTU0lORycsIHtcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBzZXJ2ZXJGaWxlUmVmZXJlbmNlOiBzb3VyY2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZCB3ZSBhcmUgYWxsb3dlZCB0byB1cGxvYWQgdGhlIGZpbGUgaW1taWRpYXRlbHksIGxldHMgZG8gaXRcbiAgICAgICAgaWYgKHF1ZXJ5KCdJU19BU1lOQycpICYmIHN0YXRlLm9wdGlvbnMuaW5zdGFudFVwbG9hZCkge1xuICAgICAgICAgIGRpc3BhdGNoKCdSRVFVRVNUX0lURU1fUFJPQ0VTU0lORycsIHsgcXVlcnk6IGl0ZW0uaWQgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIFJFVFJZX0lURU1fTE9BRDogZ2V0SXRlbUJ5UXVlcnlGcm9tU3RhdGUoc3RhdGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgLy8gdHJ5IGxvYWRpbmcgdGhlIHNvdXJjZSBvbmUgbW9yZSB0aW1lXG4gICAgICAgIGl0ZW0ucmV0cnlMb2FkKCk7XG4gICAgICB9KSxcblxuICAgICAgUkVRVUVTVF9JVEVNX1BST0NFU1NJTkc6IGdldEl0ZW1CeVF1ZXJ5RnJvbVN0YXRlKHN0YXRlLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBpZCA9IGl0ZW0uaWQ7XG5cbiAgICAgICAgZGlzcGF0Y2goJ0RJRF9SRVFVRVNUX0lURU1fUFJPQ0VTU0lORycsIHsgaWQ6IGlkIH0pO1xuXG4gICAgICAgIGRpc3BhdGNoKCdQUk9DRVNTX0lURU0nLCB7IHF1ZXJ5OiBpdGVtIH0sIHRydWUpO1xuICAgICAgfSksXG5cbiAgICAgIFBST0NFU1NfSVRFTTogZ2V0SXRlbUJ5UXVlcnlGcm9tU3RhdGUoc3RhdGUsIGZ1bmN0aW9uKFxuICAgICAgICBpdGVtLFxuICAgICAgICBzdWNjZXNzLFxuICAgICAgICBmYWlsdXJlXG4gICAgICApIHtcbiAgICAgICAgLy8gd2UgZG9uZSBmdW5jdGlvblxuICAgICAgICBpdGVtLm9uT25jZSgncHJvY2Vzcy1jb21wbGV0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHN1Y2Nlc3MoY3JlYXRlSXRlbUFQSShpdGVtKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHdlIGVycm9yIGZ1bmN0aW9uXG4gICAgICAgIGl0ZW0ub25PbmNlKCdwcm9jZXNzLWVycm9yJywgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICBmYWlsdXJlKHsgZXJyb3I6IGVycm9yLCBmaWxlOiBjcmVhdGVJdGVtQVBJKGl0ZW0pIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzdGFydCBmaWxlIHByb2Nlc3NpbmdcbiAgICAgICAgaXRlbS5wcm9jZXNzKFxuICAgICAgICAgIGNyZWF0ZUZpbGVQcm9jZXNzb3IoXG4gICAgICAgICAgICBjcmVhdGVQcm9jZXNzb3JGdW5jdGlvbihcbiAgICAgICAgICAgICAgc3RhdGUub3B0aW9ucy5zZXJ2ZXIudXJsLFxuICAgICAgICAgICAgICBzdGF0ZS5vcHRpb25zLnNlcnZlci5wcm9jZXNzLFxuICAgICAgICAgICAgICBzdGF0ZS5vcHRpb25zLm5hbWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIC8vIGNhbGxlZCB3aGVuIHRoZSBmaWxlIGlzIGFib3V0IHRvIGJlIHByb2Nlc3NlZCBzbyBpdCBjYW4gYmUgcGlwZWQgdGhyb3VnaCB0aGUgdHJhbnNmb3JtIGZpbHRlcnNcbiAgICAgICAgICBmdW5jdGlvbihmaWxlLCBzdWNjZXNzLCBlcnJvcikge1xuICAgICAgICAgICAgLy8gYWxsb3cgcGx1Z2lucyB0byBhbHRlciB0aGUgZmlsZSBkYXRhXG4gICAgICAgICAgICBhcHBseUZpbHRlckNoYWluKCdQUkVQQVJFX09VVFBVVCcsIGZpbGUsIHtcbiAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgICAgICBpdGVtOiBpdGVtXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihzdWNjZXNzKVxuICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pLFxuXG4gICAgICBSRVRSWV9JVEVNX1BST0NFU1NJTkc6IGdldEl0ZW1CeVF1ZXJ5RnJvbVN0YXRlKHN0YXRlLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGRpc3BhdGNoKCdSRVFVRVNUX0lURU1fUFJPQ0VTU0lORycsIHsgcXVlcnk6IGl0ZW0gfSk7XG4gICAgICB9KSxcblxuICAgICAgUkVNT1ZFX0lURU06IGdldEl0ZW1CeVF1ZXJ5RnJvbVN0YXRlKHN0YXRlLCBmdW5jdGlvbihpdGVtLCBzdWNjZXNzKSB7XG4gICAgICAgIC8vIGdldCBpZCByZWZlcmVuY2VcbiAgICAgICAgdmFyIGlkID0gaXRlbS5pZDtcblxuICAgICAgICAvLyB0ZWxsIHRoZSB2aWV3IHRoZSBpdGVtIGhhcyBiZWVuIHJlbW92ZWRcbiAgICAgICAgZGlzcGF0Y2goJ0RJRF9SRU1PVkVfSVRFTScsIHsgaWQ6IGlkLCBpdGVtOiBpdGVtIH0pO1xuXG4gICAgICAgIC8vIG5vdyByZW1vdmUgaXQgZnJvbSB0aGUgaXRlbSBsaXN0LFxuICAgICAgICAvLyB3ZSByZW1vdmUgaXQgZnJvbSB0aGUgbGlzdCBhZnRlciB0aGUgdmlldyBoYXMgYmVlbiB1cGRhdGVkXG4gICAgICAgIC8vIHRvIG1ha2Ugc3VyZSB0aGUgaXRlbSBpcyBhdmFpbGFibGUgZm9yIHZpZXcgcmVuZGVyaW5nIHRpbGwgcmVtb3ZlZFxuICAgICAgICBkaXNwYXRjaCgnU1BMSUNFX0lURU0nLCB7IGlkOiBpZCwgaXRlbTogaXRlbSB9KTtcblxuICAgICAgICAvLyBjb3JyZWN0bHkgcmVtb3ZlZFxuICAgICAgICBzdWNjZXNzKGNyZWF0ZUl0ZW1BUEkoaXRlbSkpO1xuICAgICAgfSksXG5cbiAgICAgIC8vIHByaXZhdGUgYWN0aW9uIGZvciB0aW1pbmcgdGhlIHJlbW92YWwgb2YgYW4gaXRlbSBmcm9tIHRoZSBpdGVtcyBsaXN0XG4gICAgICBTUExJQ0VfSVRFTTogZnVuY3Rpb24gU1BMSUNFX0lURU0oX3JlZjcpIHtcbiAgICAgICAgdmFyIGlkID0gX3JlZjcuaWQ7XG4gICAgICAgIHJldHVybiByZW1vdmVJdGVtKHN0YXRlLml0ZW1zLCBnZXRJdGVtQnlJZChzdGF0ZS5pdGVtcywgaWQpKTtcbiAgICAgIH0sXG5cbiAgICAgIEFCT1JUX0lURU1fTE9BRDogZ2V0SXRlbUJ5UXVlcnlGcm9tU3RhdGUoc3RhdGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgLy8gc3RvcCBsb2FkaW5nIHRoaXMgZmlsZVxuICAgICAgICBpdGVtLmFib3J0TG9hZCgpO1xuXG4gICAgICAgIC8vIHRoZSBmaWxlIHdpbGwgdGhyb3cgYW4gZXZlbnQgYW5kIHRoYXQgd2lsbCB0YWtlXG4gICAgICAgIC8vIGNhcmUgb2YgcmVtb3ZpbmcgdGhlIGl0ZW0gZnJvbSB0aGUgbGlzdFxuICAgICAgfSksXG5cbiAgICAgIEFCT1JUX0lURU1fUFJPQ0VTU0lORzogZ2V0SXRlbUJ5UXVlcnlGcm9tU3RhdGUoc3RhdGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgLy8gc3RvcCBwcm9jZXNzaW5nIHRoaXMgZmlsZVxuICAgICAgICBpdGVtLmFib3J0UHJvY2Vzc2luZygpO1xuXG4gICAgICAgIC8vIHRoZSBmaWxlIHdpbGwgdGhyb3cgYW4gZXZlbnQgYW5kIHRoYXQgd2lsbCB0YWtlXG4gICAgICAgIC8vIGNhcmUgb2YgcmVtb3ZpbmcgdGhlIGl0ZW0gZnJvbSB0aGUgbGlzdFxuICAgICAgfSksXG5cbiAgICAgIFJFVkVSVF9JVEVNX1BST0NFU1NJTkc6IGdldEl0ZW1CeVF1ZXJ5RnJvbVN0YXRlKHN0YXRlLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIC8vIHJlbW92ZSBmcm9tIHNlcnZlclxuICAgICAgICBpdGVtLnJldmVydChcbiAgICAgICAgICBjcmVhdGVSZXZlcnRGdW5jdGlvbihcbiAgICAgICAgICAgIHN0YXRlLm9wdGlvbnMuc2VydmVyLnVybCxcbiAgICAgICAgICAgIHN0YXRlLm9wdGlvbnMuc2VydmVyLnJldmVydFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuXG4gICAgICBTRVRfT1BUSU9OUzogZnVuY3Rpb24gU0VUX09QVElPTlMoX3JlZjgpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfcmVmOC5vcHRpb25zO1xuXG4gICAgICAgIGZvcmluKG9wdGlvbnMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnU0VUXycgKyBmcm9tQ2FtZWxzKGtleSwgJ18nKS50b1VwcGVyQ2FzZSgpLCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY3JlYXRlRWxlbWVudCQxID0gZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gIH07XG5cbiAgdmFyIGZvcm1hdEZpbGVuYW1lID0gZnVuY3Rpb24gZm9ybWF0RmlsZW5hbWUobmFtZSkge1xuICAgIHJldHVybiBkZWNvZGVVUkkobmFtZSk7XG4gIH07XG5cbiAgdmFyIHRleHQgPSBmdW5jdGlvbiB0ZXh0KG5vZGUsIHZhbHVlKSB7XG4gICAgdmFyIHRleHROb2RlID0gbm9kZS5jaGlsZE5vZGVzWzBdO1xuICAgIGlmICghdGV4dE5vZGUpIHtcbiAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gdGV4dE5vZGUubm9kZVZhbHVlKSB7XG4gICAgICB0ZXh0Tm9kZS5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBvbGFyVG9DYXJ0ZXNpYW4gPSBmdW5jdGlvbiBwb2xhclRvQ2FydGVzaWFuKFxuICAgIGNlbnRlclgsXG4gICAgY2VudGVyWSxcbiAgICByYWRpdXMsXG4gICAgYW5nbGVJbkRlZ3JlZXNcbiAgKSB7XG4gICAgdmFyIGFuZ2xlSW5SYWRpYW5zID0gKGFuZ2xlSW5EZWdyZWVzICUgMzYwIC0gOTApICogTWF0aC5QSSAvIDE4MC4wO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBjZW50ZXJYICsgcmFkaXVzICogTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpLFxuICAgICAgeTogY2VudGVyWSArIHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGRlc2NyaWJlQXJjID0gZnVuY3Rpb24gZGVzY3JpYmVBcmMoXG4gICAgeCxcbiAgICB5LFxuICAgIHJhZGl1cyxcbiAgICBzdGFydEFuZ2xlLFxuICAgIGVuZEFuZ2xlLFxuICAgIGFyY1N3ZWVwXG4gICkge1xuICAgIHZhciBzdGFydCA9IHBvbGFyVG9DYXJ0ZXNpYW4oeCwgeSwgcmFkaXVzLCBlbmRBbmdsZSk7XG4gICAgdmFyIGVuZCA9IHBvbGFyVG9DYXJ0ZXNpYW4oeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlKTtcbiAgICByZXR1cm4gW1xuICAgICAgJ00nLFxuICAgICAgc3RhcnQueCxcbiAgICAgIHN0YXJ0LnksXG4gICAgICAnQScsXG4gICAgICByYWRpdXMsXG4gICAgICByYWRpdXMsXG4gICAgICAwLFxuICAgICAgYXJjU3dlZXAsXG4gICAgICAwLFxuICAgICAgZW5kLngsXG4gICAgICBlbmQueVxuICAgIF0uam9pbignICcpO1xuICB9O1xuXG4gIHZhciBwZXJjZW50YWdlQXJjID0gZnVuY3Rpb24gcGVyY2VudGFnZUFyYyh4LCB5LCByYWRpdXMsIGZyb20sIHRvKSB7XG4gICAgdmFyIGFyY1N3ZWVwID0gMTtcbiAgICBpZiAodG8gPiBmcm9tICYmIHRvIC0gZnJvbSA8PSAwLjUpIHtcbiAgICAgIGFyY1N3ZWVwID0gMDtcbiAgICB9XG4gICAgaWYgKGZyb20gPiB0byAmJiBmcm9tIC0gdG8gPj0gMC41KSB7XG4gICAgICBhcmNTd2VlcCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmliZUFyYyhcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgcmFkaXVzLFxuICAgICAgTWF0aC5taW4oMC45OTk5LCBmcm9tKSAqIDM2MCxcbiAgICAgIE1hdGgubWluKDAuOTk5OSwgdG8pICogMzYwLFxuICAgICAgYXJjU3dlZXBcbiAgICApO1xuICB9O1xuXG4gIHZhciBjcmVhdGUkNyA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG5cbiAgICAvLyBzdGFydCBhdCAwXG4gICAgcHJvcHMuc3BpbiA9IGZhbHNlO1xuICAgIHByb3BzLnByb2dyZXNzID0gMDtcbiAgICBwcm9wcy5vcGFjaXR5ID0gMDtcblxuICAgIC8vIHN2Z1xuICAgIHZhciBzdmcgPSBjcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICByb290LnJlZi5wYXRoID0gY3JlYXRlRWxlbWVudCgncGF0aCcsIHtcbiAgICAgICdzdHJva2Utd2lkdGgnOiAyLFxuICAgICAgJ3N0cm9rZS1saW5lY2FwJzogJ3JvdW5kJ1xuICAgIH0pO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChyb290LnJlZi5wYXRoKTtcblxuICAgIHJvb3QucmVmLnN2ZyA9IHN2ZztcblxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgfTtcblxuICB2YXIgd3JpdGUkNSA9IGZ1bmN0aW9uIHdyaXRlKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcztcblxuICAgIGlmIChwcm9wcy5vcGFjaXR5ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZ2V0IHdpZHRoIG9mIHN0cm9rZVxuICAgIHZhciByaW5nU3Ryb2tlV2lkdGggPSBwYXJzZUludChhdHRyKHJvb3QucmVmLnBhdGgsICdzdHJva2Utd2lkdGgnKSwgMTApO1xuXG4gICAgLy8gY2FsY3VsYXRlIHNpemUgb2YgcmluZ1xuICAgIHZhciBzaXplID0gcm9vdC5yZWN0LmVsZW1lbnQud2lkdGggKiAwLjU7XG5cbiAgICAvLyByaW5nIHN0YXRlXG4gICAgdmFyIHJpbmdGcm9tID0gMDtcbiAgICB2YXIgcmluZ1RvID0gMDtcblxuICAgIC8vIG5vdyBpbiBidXN5IG1vZGVcbiAgICBpZiAocHJvcHMuc3Bpbikge1xuICAgICAgcmluZ0Zyb20gPSAwO1xuICAgICAgcmluZ1RvID0gMC41O1xuICAgIH0gZWxzZSB7XG4gICAgICByaW5nRnJvbSA9IDA7XG4gICAgICByaW5nVG8gPSBwcm9wcy5wcm9ncmVzcztcbiAgICB9XG5cbiAgICAvLyBnZXQgYXJjIHBhdGhcbiAgICB2YXIgY29vcmRpbmF0ZXMgPSBwZXJjZW50YWdlQXJjKFxuICAgICAgc2l6ZSxcbiAgICAgIHNpemUsXG4gICAgICBzaXplIC0gcmluZ1N0cm9rZVdpZHRoLFxuICAgICAgcmluZ0Zyb20sXG4gICAgICByaW5nVG9cbiAgICApO1xuXG4gICAgLy8gdXBkYXRlIHByb2dyZXNzIGJhclxuICAgIGF0dHIocm9vdC5yZWYucGF0aCwgJ2QnLCBjb29yZGluYXRlcyk7XG5cbiAgICAvLyBoaWRlIHdoaWxlIGNvbnRhaW5zIDAgdmFsdWVcbiAgICBhdHRyKFxuICAgICAgcm9vdC5yZWYucGF0aCxcbiAgICAgICdzdHJva2Utb3BhY2l0eScsXG4gICAgICBwcm9wcy5zcGluIHx8IHByb3BzLnByb2dyZXNzID4gMCA/IDEgOiAwXG4gICAgKTtcbiAgfTtcblxuICB2YXIgcHJvZ3Jlc3NJbmRpY2F0b3IgPSBjcmVhdGVWaWV3KHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIG5hbWU6ICdwcm9ncmVzcy1pbmRpY2F0b3InLFxuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgY3JlYXRlOiBjcmVhdGUkNyxcbiAgICB3cml0ZTogd3JpdGUkNSxcbiAgICBtaXhpbnM6IHtcbiAgICAgIGFwaXM6IFsncHJvZ3Jlc3MnLCAnc3BpbiddLFxuICAgICAgc3R5bGVzOiBbJ29wYWNpdHknXSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgb3BhY2l0eTogeyB0eXBlOiAndHdlZW4nLCBkdXJhdGlvbjogNTAwIH0sXG4gICAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgICAgdHlwZTogJ3NwcmluZycsXG4gICAgICAgICAgc3RpZmZuZXNzOiAwLjk1LFxuICAgICAgICAgIGRhbXBpbmc6IDAuNjUsXG4gICAgICAgICAgbWFzczogMTBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGNyZWF0ZSQ4ID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcblxuICAgIHJvb3QuZWxlbWVudC50aXRsZSA9IHByb3BzLmxhYmVsO1xuICAgIHJvb3QuZWxlbWVudC5pbm5lckhUTUwgPSBwcm9wcy5pY29uIHx8ICcnO1xuICAgIHByb3BzLmRpc2FibGVkID0gZmFsc2U7XG4gIH07XG5cbiAgdmFyIHdyaXRlJDYgPSBmdW5jdGlvbiB3cml0ZShfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZjIucHJvcHM7XG5cbiAgICBpZiAocHJvcHMub3BhY2l0eSA9PT0gMCAmJiAhcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHByb3BzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGF0dHIocm9vdC5lbGVtZW50LCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLm9wYWNpdHkgPiAwICYmIHByb3BzLmRpc2FibGVkKSB7XG4gICAgICBwcm9wcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgcm9vdC5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGZpbGVBY3Rpb25CdXR0b24gPSBjcmVhdGVWaWV3KHtcbiAgICB0YWc6ICdidXR0b24nLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIHR5cGU6ICdidXR0b24nXG4gICAgfSxcbiAgICBpZ25vcmVSZWN0OiB0cnVlLFxuICAgIG5hbWU6ICdmaWxlLWFjdGlvbi1idXR0b24nLFxuICAgIG1peGluczoge1xuICAgICAgYXBpczogWydsYWJlbCddLFxuICAgICAgc3R5bGVzOiBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICdzY2FsZVgnLCAnc2NhbGVZJywgJ29wYWNpdHknXSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgc2NhbGVYOiAnc3ByaW5nJyxcbiAgICAgICAgc2NhbGVZOiAnc3ByaW5nJyxcbiAgICAgICAgdHJhbnNsYXRlWDogJ3NwcmluZycsXG4gICAgICAgIHRyYW5zbGF0ZVk6ICdzcHJpbmcnLFxuICAgICAgICBvcGFjaXR5OiB7IHR5cGU6ICd0d2VlbicsIGR1cmF0aW9uOiAyNTAgfVxuICAgICAgfSxcbiAgICAgIGxpc3RlbmVyczogdHJ1ZVxuICAgIH0sXG4gICAgY3JlYXRlOiBjcmVhdGUkOCxcbiAgICB3cml0ZTogd3JpdGUkNlxuICB9KTtcblxuICB2YXIgdG9OYXR1cmFsRmlsZVNpemUgPSBmdW5jdGlvbiB0b05hdHVyYWxGaWxlU2l6ZShieXRlcykge1xuICAgIHZhciBkZWNpbWFsU2VwYXJhdG9yID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJy4nO1xuXG4gICAgLy8gbm9wZSwgbm8gbmVnYXRpdmUgYnl0ZSBzaXplc1xuICAgIGJ5dGVzID0gTWF0aC5yb3VuZChNYXRoLmFicyhieXRlcykpO1xuXG4gICAgLy8ganVzdCBieXRlc1xuICAgIGlmIChieXRlcyA8IDEwMDApIHtcbiAgICAgIHJldHVybiBieXRlcyArICcgYnl0ZXMnO1xuICAgIH1cblxuICAgIC8vIGtpbG9ieXRlc1xuICAgIGlmIChieXRlcyA8IE1CKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihieXRlcyAvIEtCKSArICcgS0InO1xuICAgIH1cblxuICAgIC8vIG1lZ2FieXRlc1xuICAgIGlmIChieXRlcyA8IEdCKSB7XG4gICAgICByZXR1cm4gcmVtb3ZlRGVjaW1hbHNXaGVuWmVybyhieXRlcyAvIE1CLCAxLCBkZWNpbWFsU2VwYXJhdG9yKSArICcgTUInO1xuICAgIH1cblxuICAgIC8vIGdpZ2FieXRlc1xuICAgIHJldHVybiByZW1vdmVEZWNpbWFsc1doZW5aZXJvKGJ5dGVzIC8gR0IsIDIsIGRlY2ltYWxTZXBhcmF0b3IpICsgJyBHQic7XG4gIH07XG5cbiAgdmFyIEtCID0gMTAwMDtcbiAgdmFyIE1CID0gMTAwMDAwMDtcbiAgdmFyIEdCID0gMTAwMDAwMDAwMDtcblxuICB2YXIgcmVtb3ZlRGVjaW1hbHNXaGVuWmVybyA9IGZ1bmN0aW9uIHJlbW92ZURlY2ltYWxzV2hlblplcm8oXG4gICAgdmFsdWUsXG4gICAgZGVjaW1hbENvdW50LFxuICAgIHNlcGFyYXRvclxuICApIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgICAgIC50b0ZpeGVkKGRlY2ltYWxDb3VudClcbiAgICAgIC5zcGxpdCgnLicpXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnQgIT09ICcwJztcbiAgICAgIH0pXG4gICAgICAuam9pbihzZXBhcmF0b3IpO1xuICB9O1xuXG4gIHZhciBjcmVhdGUkOSA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG5cbiAgICAvLyBmaWxlbmFtZVxuICAgIHZhciBmaWxlTmFtZSA9IGNyZWF0ZUVsZW1lbnQkMSgnc3BhbicpO1xuICAgIGZpbGVOYW1lLmNsYXNzTmFtZSA9ICdmaWxlcG9uZC0tZmlsZS1pbmZvLW1haW4nO1xuICAgIC8vIGhpZGUgZm9yIHNjcmVlbnJlYWRlcnNcbiAgICAvLyB0aGUgZmlsZSBpcyBjb250YWluZWQgaW4gYSBmaWVsZHNldCB3aXRoIGxlZ2VuZCB0aGF0IGNvbnRhaW5zIHRoZSBmaWxlbmFtZVxuICAgIC8vIG5vIG5lZWQgdG8gcmVhZCBpdCB0d2ljZVxuICAgIGF0dHIoZmlsZU5hbWUsICdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChmaWxlTmFtZSk7XG4gICAgcm9vdC5yZWYuZmlsZU5hbWUgPSBmaWxlTmFtZTtcblxuICAgIC8vIGZpbGVzaXplXG4gICAgdmFyIGZpbGVTaXplID0gY3JlYXRlRWxlbWVudCQxKCdzcGFuJyk7XG4gICAgZmlsZVNpemUuY2xhc3NOYW1lID0gJ2ZpbGVwb25kLS1maWxlLWluZm8tc3ViJztcbiAgICByb290LmFwcGVuZENoaWxkKGZpbGVTaXplKTtcbiAgICByb290LnJlZi5maWxlU2l6ZSA9IGZpbGVTaXplO1xuXG4gICAgLy8gc2V0IGluaXRpYWwgdmFsdWVzXG4gICAgdGV4dChmaWxlU2l6ZSwgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfV0FJVElOR19GT1JfU0laRScpKTtcbiAgICB0ZXh0KGZpbGVOYW1lLCBmb3JtYXRGaWxlbmFtZShyb290LnF1ZXJ5KCdHRVRfSVRFTV9OQU1FJywgcHJvcHMuaWQpKSk7XG4gIH07XG5cbiAgdmFyIHVwZGF0ZUZpbGUgPSBmdW5jdGlvbiB1cGRhdGVGaWxlKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcztcblxuICAgIHRleHQoXG4gICAgICByb290LnJlZi5maWxlU2l6ZSxcbiAgICAgIHRvTmF0dXJhbEZpbGVTaXplKHJvb3QucXVlcnkoJ0dFVF9JVEVNX1NJWkUnLCBwcm9wcy5pZCkpXG4gICAgKTtcbiAgICB0ZXh0KFxuICAgICAgcm9vdC5yZWYuZmlsZU5hbWUsXG4gICAgICBmb3JtYXRGaWxlbmFtZShyb290LnF1ZXJ5KCdHRVRfSVRFTV9OQU1FJywgcHJvcHMuaWQpKVxuICAgICk7XG4gIH07XG5cbiAgdmFyIHVwZGF0ZUZpbGVTaXplT25FcnJvciA9IGZ1bmN0aW9uIHVwZGF0ZUZpbGVTaXplT25FcnJvcihfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZjMucHJvcHM7XG5cbiAgICAvLyBpZiBzaXplIGlzIGF2YWlsYWJsZSBkb24ndCBmYWxsYmFjayB0byB1bmtub3duIHNpemUgbWVzc2FnZVxuICAgIGlmIChpc0ludChyb290LnF1ZXJ5KCdHRVRfSVRFTV9TSVpFJywgcHJvcHMuaWQpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRleHQocm9vdC5yZWYuZmlsZVNpemUsIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX1NJWkVfTk9UX0FWQUlMQUJMRScpKTtcbiAgfTtcblxuICB2YXIgZmlsZUluZm8gPSBjcmVhdGVWaWV3KHtcbiAgICBuYW1lOiAnZmlsZS1pbmZvJyxcbiAgICBpZ25vcmVSZWN0OiB0cnVlLFxuICAgIHdyaXRlOiBjcmVhdGVSb3V0ZSh7XG4gICAgICBESURfTE9BRF9JVEVNOiB1cGRhdGVGaWxlLFxuICAgICAgRElEX1VQREFURV9JVEVNX01FVEE6IHVwZGF0ZUZpbGUsXG4gICAgICBESURfVEhST1dfSVRFTV9MT0FEX0VSUk9SOiB1cGRhdGVGaWxlU2l6ZU9uRXJyb3IsXG4gICAgICBESURfVEhST1dfSVRFTV9JTlZBTElEOiB1cGRhdGVGaWxlU2l6ZU9uRXJyb3JcbiAgICB9KSxcbiAgICBjcmVhdGU6IGNyZWF0ZSQ5LFxuICAgIG1peGluczoge1xuICAgICAgc3R5bGVzOiBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWSddLFxuICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICB0cmFuc2xhdGVYOiAnc3ByaW5nJyxcbiAgICAgICAgdHJhbnNsYXRlWTogJ3NwcmluZydcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHZhciB0b1BlcmNlbnRhZ2UgPSBmdW5jdGlvbiB0b1BlcmNlbnRhZ2UodmFsdWUpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZSQxMCA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3Q7XG5cbiAgICAvLyBtYWluIHN0YXR1c1xuICAgIHZhciBtYWluID0gY3JlYXRlRWxlbWVudCQxKCdzcGFuJyk7XG4gICAgbWFpbi5jbGFzc05hbWUgPSAnZmlsZXBvbmQtLWZpbGUtc3RhdHVzLW1haW4nO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgcm9vdC5yZWYubWFpbiA9IG1haW47XG5cbiAgICAvLyBzdWIgc3RhdHVzXG4gICAgdmFyIHN1YiA9IGNyZWF0ZUVsZW1lbnQkMSgnc3BhbicpO1xuICAgIHN1Yi5jbGFzc05hbWUgPSAnZmlsZXBvbmQtLWZpbGUtc3RhdHVzLXN1Yic7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChzdWIpO1xuICAgIHJvb3QucmVmLnN1YiA9IHN1YjtcblxuICAgIGRpZFNldEl0ZW1Mb2FkUHJvZ3Jlc3MoeyByb290OiByb290LCBhY3Rpb246IHsgcHJvZ3Jlc3M6IG51bGwgfSB9KTtcbiAgfTtcblxuICB2YXIgZGlkU2V0SXRlbUxvYWRQcm9ncmVzcyA9IGZ1bmN0aW9uIGRpZFNldEl0ZW1Mb2FkUHJvZ3Jlc3MoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmMi5hY3Rpb247XG5cbiAgICB2YXIgdGl0bGUgPVxuICAgICAgYWN0aW9uLnByb2dyZXNzID09PSBudWxsXG4gICAgICAgID8gcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfTE9BRElORycpXG4gICAgICAgIDogcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfTE9BRElORycpICtcbiAgICAgICAgICAnICcgK1xuICAgICAgICAgIHRvUGVyY2VudGFnZShhY3Rpb24ucHJvZ3Jlc3MpICtcbiAgICAgICAgICAnJSc7XG4gICAgdGV4dChyb290LnJlZi5tYWluLCB0aXRsZSk7XG4gICAgdGV4dChyb290LnJlZi5zdWIsIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9UQVBfVE9fQ0FOQ0VMJykpO1xuICB9O1xuXG4gIHZhciBkaWRTZXRJdGVtUHJvY2Vzc1Byb2dyZXNzID0gZnVuY3Rpb24gZGlkU2V0SXRlbVByb2Nlc3NQcm9ncmVzcyhfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYzLmFjdGlvbjtcblxuICAgIHZhciB0aXRsZSA9XG4gICAgICBhY3Rpb24ucHJvZ3Jlc3MgPT09IG51bGxcbiAgICAgICAgPyByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9QUk9DRVNTSU5HJylcbiAgICAgICAgOiByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9QUk9DRVNTSU5HJykgK1xuICAgICAgICAgICcgJyArXG4gICAgICAgICAgdG9QZXJjZW50YWdlKGFjdGlvbi5wcm9ncmVzcykgK1xuICAgICAgICAgICclJztcbiAgICB0ZXh0KHJvb3QucmVmLm1haW4sIHRpdGxlKTtcbiAgICB0ZXh0KHJvb3QucmVmLnN1Yiwgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX1RBUF9UT19DQU5DRUwnKSk7XG4gIH07XG5cbiAgdmFyIGRpZFJlcXVlc3RJdGVtUHJvY2Vzc2luZyA9IGZ1bmN0aW9uIGRpZFJlcXVlc3RJdGVtUHJvY2Vzc2luZyhfcmVmNCkge1xuICAgIHZhciByb290ID0gX3JlZjQucm9vdDtcblxuICAgIHRleHQocm9vdC5yZWYubWFpbiwgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfUFJPQ0VTU0lORycpKTtcbiAgICB0ZXh0KHJvb3QucmVmLnN1Yiwgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX1RBUF9UT19DQU5DRUwnKSk7XG4gIH07XG5cbiAgdmFyIGRpZEFib3J0SXRlbVByb2Nlc3NpbmcgPSBmdW5jdGlvbiBkaWRBYm9ydEl0ZW1Qcm9jZXNzaW5nKF9yZWY1KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNS5yb290O1xuXG4gICAgdGV4dChyb290LnJlZi5tYWluLCByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9QUk9DRVNTSU5HX0FCT1JURUQnKSk7XG4gICAgdGV4dChyb290LnJlZi5zdWIsIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9UQVBfVE9fUkVUUlknKSk7XG4gIH07XG5cbiAgdmFyIGRpZENvbXBsZXRlSXRlbVByb2Nlc3NpbmckMSA9IGZ1bmN0aW9uIGRpZENvbXBsZXRlSXRlbVByb2Nlc3NpbmcoX3JlZjYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY2LnJvb3Q7XG5cbiAgICB0ZXh0KHJvb3QucmVmLm1haW4sIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX1BST0NFU1NJTkdfQ09NUExFVEUnKSk7XG4gICAgdGV4dChyb290LnJlZi5zdWIsIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9UQVBfVE9fVU5ETycpKTtcblxuICAgIC8vY29uc3QgYWxsb3dSZXZlcnQgPSByb290LnF1ZXJ5KCdHRVRfQUxMT1dfUkVWRVJUJyk7XG4gICAgLy90ZXh0KHJvb3QucmVmLnN1YiwgYWxsb3dSZXZlcnQgPyByb290LnF1ZXJ5KCdHRVRfTEFCRUxfVEFQX1RPX1VORE8nKSA6ICcnKTtcbiAgfTtcblxuICB2YXIgY2xlYXIgPSBmdW5jdGlvbiBjbGVhcihfcmVmNykge1xuICAgIHZhciByb290ID0gX3JlZjcucm9vdDtcblxuICAgIHRleHQocm9vdC5yZWYubWFpbiwgJycpO1xuICAgIHRleHQocm9vdC5yZWYuc3ViLCAnJyk7XG4gIH07XG5cbiAgdmFyIGVycm9yID0gZnVuY3Rpb24gZXJyb3IoX3JlZjgpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY4LnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmOC5hY3Rpb247XG5cbiAgICB0ZXh0KHJvb3QucmVmLm1haW4sIGFjdGlvbi5zdGF0dXMubWFpbik7XG4gICAgdGV4dChyb290LnJlZi5zdWIsIGFjdGlvbi5zdGF0dXMuc3ViKTtcbiAgfTtcblxuICB2YXIgZmlsZVN0YXR1cyA9IGNyZWF0ZVZpZXcoe1xuICAgIG5hbWU6ICdmaWxlLXN0YXR1cycsXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICB3cml0ZTogY3JlYXRlUm91dGUoe1xuICAgICAgRElEX0xPQURfSVRFTTogY2xlYXIsXG4gICAgICBESURfUkVWRVJUX0lURU1fUFJPQ0VTU0lORzogY2xlYXIsXG4gICAgICBESURfUkVRVUVTVF9JVEVNX1BST0NFU1NJTkc6IGRpZFJlcXVlc3RJdGVtUHJvY2Vzc2luZyxcbiAgICAgIERJRF9BQk9SVF9JVEVNX1BST0NFU1NJTkc6IGRpZEFib3J0SXRlbVByb2Nlc3NpbmcsXG4gICAgICBESURfQ09NUExFVEVfSVRFTV9QUk9DRVNTSU5HOiBkaWRDb21wbGV0ZUl0ZW1Qcm9jZXNzaW5nJDEsXG4gICAgICBESURfVVBEQVRFX0lURU1fUFJPQ0VTU19QUk9HUkVTUzogZGlkU2V0SXRlbVByb2Nlc3NQcm9ncmVzcyxcbiAgICAgIERJRF9VUERBVEVfSVRFTV9MT0FEX1BST0dSRVNTOiBkaWRTZXRJdGVtTG9hZFByb2dyZXNzLFxuICAgICAgRElEX1RIUk9XX0lURU1fTE9BRF9FUlJPUjogZXJyb3IsXG4gICAgICBESURfVEhST1dfSVRFTV9JTlZBTElEOiBlcnJvcixcbiAgICAgIERJRF9USFJPV19JVEVNX1BST0NFU1NJTkdfRVJST1I6IGVycm9yXG4gICAgfSksXG4gICAgY3JlYXRlOiBjcmVhdGUkMTAsXG4gICAgbWl4aW5zOiB7XG4gICAgICBzdHlsZXM6IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ29wYWNpdHknXSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgb3BhY2l0eTogeyB0eXBlOiAndHdlZW4nLCBkdXJhdGlvbjogMjUwIH0sXG4gICAgICAgIHRyYW5zbGF0ZVg6ICdzcHJpbmcnLFxuICAgICAgICB0cmFuc2xhdGVZOiAnc3ByaW5nJ1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBkZWZpbml0aW9ucyBmb3IgdGhlIGZpbGUgdmlld1xuICAgKi9cbiAgdmFyIEJ1dHRvbnMgPSB7XG4gICAgQWJvcnRJdGVtTG9hZDoge1xuICAgICAgbGFiZWw6ICdHRVRfTEFCRUxfQlVUVE9OX0FCT1JUX0lURU1fTE9BRCcsXG4gICAgICBhY3Rpb246ICdBQk9SVF9JVEVNX0xPQUQnLFxuICAgICAgY2xhc3NOYW1lOiAnZmlsZXBvbmQtLWFjdGlvbi1hYm9ydC1pdGVtLWxvYWQnXG4gICAgfSxcbiAgICBSZXRyeUl0ZW1Mb2FkOiB7XG4gICAgICBsYWJlbDogJ0dFVF9MQUJFTF9CVVRUT05fUkVUUllfSVRFTV9MT0FEJyxcbiAgICAgIGFjdGlvbjogJ1JFVFJZX0lURU1fTE9BRCcsXG4gICAgICBpY29uOiAnR0VUX0lDT05fUkVUUlknLFxuICAgICAgY2xhc3NOYW1lOiAnZmlsZXBvbmQtLWFjdGlvbi1yZXRyeS1pdGVtLWxvYWQnXG4gICAgfSxcbiAgICBSZW1vdmVJdGVtOiB7XG4gICAgICBsYWJlbDogJ0dFVF9MQUJFTF9CVVRUT05fUkVNT1ZFX0lURU0nLFxuICAgICAgYWN0aW9uOiAnUkVNT1ZFX0lURU0nLFxuICAgICAgaWNvbjogJ0dFVF9JQ09OX1JFTU9WRScsXG4gICAgICBjbGFzc05hbWU6ICdmaWxlcG9uZC0tYWN0aW9uLXJlbW92ZS1pdGVtJ1xuICAgIH0sXG4gICAgUHJvY2Vzc0l0ZW06IHtcbiAgICAgIGxhYmVsOiAnR0VUX0xBQkVMX0JVVFRPTl9QUk9DRVNTX0lURU0nLFxuICAgICAgYWN0aW9uOiAnUkVRVUVTVF9JVEVNX1BST0NFU1NJTkcnLFxuICAgICAgaWNvbjogJ0dFVF9JQ09OX1BST0NFU1MnLFxuICAgICAgY2xhc3NOYW1lOiAnZmlsZXBvbmQtLWFjdGlvbi1wcm9jZXNzLWl0ZW0nXG4gICAgfSxcbiAgICBBYm9ydEl0ZW1Qcm9jZXNzaW5nOiB7XG4gICAgICBsYWJlbDogJ0dFVF9MQUJFTF9CVVRUT05fQUJPUlRfSVRFTV9QUk9DRVNTSU5HJyxcbiAgICAgIGFjdGlvbjogJ0FCT1JUX0lURU1fUFJPQ0VTU0lORycsXG4gICAgICBjbGFzc05hbWU6ICdmaWxlcG9uZC0tYWN0aW9uLWFib3J0LWl0ZW0tcHJvY2Vzc2luZydcbiAgICB9LFxuICAgIFJldHJ5SXRlbVByb2Nlc3Npbmc6IHtcbiAgICAgIGxhYmVsOiAnR0VUX0xBQkVMX0JVVFRPTl9SRVRSWV9JVEVNX1BST0NFU1NJTkcnLFxuICAgICAgYWN0aW9uOiAnUkVUUllfSVRFTV9QUk9DRVNTSU5HJyxcbiAgICAgIGljb246ICdHRVRfSUNPTl9SRVRSWScsXG4gICAgICBjbGFzc05hbWU6ICdmaWxlcG9uZC0tYWN0aW9uLXJldHJ5LWl0ZW0tcHJvY2Vzc2luZydcbiAgICB9LFxuICAgIFJldmVydEl0ZW1Qcm9jZXNzaW5nOiB7XG4gICAgICBsYWJlbDogJ0dFVF9MQUJFTF9CVVRUT05fVU5ET19JVEVNX1BST0NFU1NJTkcnLFxuICAgICAgYWN0aW9uOiAnUkVWRVJUX0lURU1fUFJPQ0VTU0lORycsXG4gICAgICBpY29uOiAnR0VUX0lDT05fVU5ETycsXG4gICAgICBjbGFzc05hbWU6ICdmaWxlcG9uZC0tYWN0aW9uLXJldmVydC1pdGVtLXByb2Nlc3NpbmcnXG4gICAgfVxuICB9O1xuXG4gIC8vIG1ha2UgYSBsaXN0IG9mIGJ1dHRvbnMsIHdlIGNhbiB0aGVuIHJlbW92ZSBidXR0b25zIGZyb20gdGhpcyBsaXN0IGlmIHRoZXkncmUgZGlzYWJsZWRcbiAgdmFyIEJ1dHRvbktleXMgPSBbXTtcbiAgZm9yaW4oQnV0dG9ucywgZnVuY3Rpb24oa2V5KSB7XG4gICAgQnV0dG9uS2V5cy5wdXNoKGtleSk7XG4gIH0pO1xuXG4gIHZhciBjYWxjdWxhdGVGaWxlSW5mb09mZnNldCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0KHJvb3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgcm9vdC5yZWYuYnV0dG9uUmVtb3ZlSXRlbS5yZWN0LmVsZW1lbnQud2lkdGggK1xuICAgICAgcm9vdC5yZWYuYnV0dG9uUmVtb3ZlSXRlbS5yZWN0LmVsZW1lbnQubGVmdFxuICAgICk7XG4gIH07XG5cbiAgLy8gRm9yY2Ugb24gZnVsbCBwaXhlbHMgc28gdGV4dCBzdGF5cyBjcmlwc1xuICB2YXIgY2FsY3VsYXRlRmlsZVZlcnRpY2FsQ2VudGVyT2Zmc2V0ID0gZnVuY3Rpb24gY2FsY3VsYXRlRmlsZVZlcnRpY2FsQ2VudGVyT2Zmc2V0KFxuICAgIHJvb3RcbiAgKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3Iocm9vdC5yZWYuYnV0dG9uUmVtb3ZlSXRlbS5yZWN0LmVsZW1lbnQuaGVpZ2h0IC8gNCk7XG4gIH07XG4gIHZhciBjYWxjdWxhdGVGaWxlSG9yaXpvbnRhbENlbnRlck9mZnNldCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUZpbGVIb3Jpem9udGFsQ2VudGVyT2Zmc2V0KFxuICAgIHJvb3RcbiAgKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3Iocm9vdC5yZWYuYnV0dG9uUmVtb3ZlSXRlbS5yZWN0LmVsZW1lbnQubGVmdCAvIDIpO1xuICB9O1xuXG4gIHZhciBEZWZhdWx0U3R5bGUgPSB7XG4gICAgYnV0dG9uQWJvcnRJdGVtTG9hZDogeyBvcGFjaXR5OiAwIH0sXG4gICAgYnV0dG9uUmV0cnlJdGVtTG9hZDogeyBvcGFjaXR5OiAwIH0sXG4gICAgYnV0dG9uUmVtb3ZlSXRlbTogeyBvcGFjaXR5OiAwIH0sXG4gICAgYnV0dG9uUHJvY2Vzc0l0ZW06IHsgb3BhY2l0eTogMCB9LFxuICAgIGJ1dHRvbkFib3J0SXRlbVByb2Nlc3Npbmc6IHsgb3BhY2l0eTogMCB9LFxuICAgIGJ1dHRvblJldHJ5SXRlbVByb2Nlc3Npbmc6IHsgb3BhY2l0eTogMCB9LFxuICAgIGJ1dHRvblJldmVydEl0ZW1Qcm9jZXNzaW5nOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBsb2FkUHJvZ3Jlc3NJbmRpY2F0b3I6IHsgb3BhY2l0eTogMCB9LFxuICAgIHByb2Nlc3NQcm9ncmVzc0luZGljYXRvcjogeyBvcGFjaXR5OiAwIH0sXG4gICAgcHJvY2Vzc2luZ0NvbXBsZXRlSW5kaWNhdG9yOiB7IG9wYWNpdHk6IDAsIHNjYWxlWDogMC43NSwgc2NhbGVZOiAwLjc1IH0sXG4gICAgaW5mbzogeyB0cmFuc2xhdGVYOiAwLCB0cmFuc2xhdGVZOiAwLCBvcGFjaXR5OiAwIH0sXG4gICAgc3RhdHVzOiB7IHRyYW5zbGF0ZVg6IDAsIHRyYW5zbGF0ZVk6IDAsIG9wYWNpdHk6IDAgfVxuICB9O1xuXG4gIHZhciBJZGxlU3R5bGUgPSB7XG4gICAgYnV0dG9uUmVtb3ZlSXRlbTogeyBvcGFjaXR5OiAxIH0sXG4gICAgYnV0dG9uUHJvY2Vzc0l0ZW06IHsgb3BhY2l0eTogMSB9LFxuICAgIGluZm86IHsgdHJhbnNsYXRlWDogY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQgfSxcbiAgICBzdGF0dXM6IHsgdHJhbnNsYXRlWDogY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQgfVxuICB9O1xuXG4gIHZhciBQcm9jZXNzaW5nU3R5bGUgPSB7XG4gICAgYnV0dG9uQWJvcnRJdGVtUHJvY2Vzc2luZzogeyBvcGFjaXR5OiAxIH0sXG4gICAgcHJvY2Vzc1Byb2dyZXNzSW5kaWNhdG9yOiB7IG9wYWNpdHk6IDEgfSxcbiAgICBzdGF0dXM6IHsgb3BhY2l0eTogMSB9XG4gIH07XG5cbiAgdmFyIFN0eWxlTWFwID0ge1xuICAgIERJRF9USFJPV19JVEVNX0lOVkFMSUQ6IHtcbiAgICAgIGJ1dHRvblJlbW92ZUl0ZW06IHsgb3BhY2l0eTogMSB9LFxuICAgICAgaW5mbzogeyB0cmFuc2xhdGVYOiBjYWxjdWxhdGVGaWxlSW5mb09mZnNldCB9LFxuICAgICAgc3RhdHVzOiB7IHRyYW5zbGF0ZVg6IGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0LCBvcGFjaXR5OiAxIH1cbiAgICB9LFxuICAgIERJRF9TVEFSVF9JVEVNX0xPQUQ6IHtcbiAgICAgIGJ1dHRvbkFib3J0SXRlbUxvYWQ6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgbG9hZFByb2dyZXNzSW5kaWNhdG9yOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIHN0YXR1czogeyBvcGFjaXR5OiAxIH1cbiAgICB9LFxuICAgIERJRF9USFJPV19JVEVNX0xPQURfRVJST1I6IHtcbiAgICAgIGJ1dHRvblJldHJ5SXRlbUxvYWQ6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgYnV0dG9uUmVtb3ZlSXRlbTogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBpbmZvOiB7IHRyYW5zbGF0ZVg6IGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0IH0sXG4gICAgICBzdGF0dXM6IHsgb3BhY2l0eTogMSB9XG4gICAgfSxcbiAgICBESURfTE9BRF9JVEVNOiBJZGxlU3R5bGUsXG4gICAgRElEX0xPQURfTE9DQUxfSVRFTToge1xuICAgICAgYnV0dG9uUmVtb3ZlSXRlbTogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBpbmZvOiB7IHRyYW5zbGF0ZVg6IGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0IH0sXG4gICAgICBzdGF0dXM6IHsgdHJhbnNsYXRlWDogY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQgfVxuICAgIH0sXG4gICAgRElEX1NUQVJUX0lURU1fUFJPQ0VTU0lORzogUHJvY2Vzc2luZ1N0eWxlLFxuICAgIERJRF9SRVFVRVNUX0lURU1fUFJPQ0VTU0lORzogUHJvY2Vzc2luZ1N0eWxlLFxuICAgIERJRF9VUERBVEVfSVRFTV9QUk9DRVNTX1BST0dSRVNTOiBQcm9jZXNzaW5nU3R5bGUsXG4gICAgRElEX0NPTVBMRVRFX0lURU1fUFJPQ0VTU0lORzoge1xuICAgICAgYnV0dG9uUmV2ZXJ0SXRlbVByb2Nlc3Npbmc6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgaW5mbzogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBzdGF0dXM6IHsgb3BhY2l0eTogMSB9XG4gICAgfSxcbiAgICBESURfVEhST1dfSVRFTV9QUk9DRVNTSU5HX0VSUk9SOiB7XG4gICAgICBidXR0b25SZW1vdmVJdGVtOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGJ1dHRvblJldHJ5SXRlbVByb2Nlc3Npbmc6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgc3RhdHVzOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGluZm86IHsgdHJhbnNsYXRlWDogY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQgfVxuICAgIH0sXG4gICAgRElEX0FCT1JUX0lURU1fUFJPQ0VTU0lORzoge1xuICAgICAgYnV0dG9uUmVtb3ZlSXRlbTogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBidXR0b25Qcm9jZXNzSXRlbTogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBpbmZvOiB7IHRyYW5zbGF0ZVg6IGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0IH0sXG4gICAgICBzdGF0dXM6IHsgb3BhY2l0eTogMSB9XG4gICAgfSxcbiAgICBESURfUkVWRVJUX0lURU1fUFJPQ0VTU0lORzogSWRsZVN0eWxlXG4gIH07XG5cbiAgLy8gY29tcGxldGUgaW5kaWNhdG9yIHZpZXdcbiAgdmFyIHByb2Nlc3NpbmdDb21wbGV0ZUluZGljYXRvclZpZXcgPSBjcmVhdGVWaWV3KHtcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWYucm9vdDtcblxuICAgICAgcm9vdC5lbGVtZW50LmlubmVySFRNTCA9IHJvb3QucXVlcnkoJ0dFVF9JQ09OX0RPTkUnKTtcbiAgICB9LFxuICAgIG5hbWU6ICdwcm9jZXNzaW5nLWNvbXBsZXRlLWluZGljYXRvcicsXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICBtaXhpbnM6IHtcbiAgICAgIHN0eWxlczogWydzY2FsZVgnLCAnc2NhbGVZJywgJ29wYWNpdHknXSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgc2NhbGVYOiAnc3ByaW5nJyxcbiAgICAgICAgc2NhbGVZOiAnc3ByaW5nJyxcbiAgICAgICAgb3BhY2l0eTogeyB0eXBlOiAndHdlZW4nLCBkdXJhdGlvbjogMjUwIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBmaWxlIHZpZXdcbiAgICovXG4gIHZhciBjcmVhdGUkNiA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZjIucHJvcHM7XG5cbiAgICAvLyBhbGxvdyByZXZlcnRpbmcgdXBsb2FkXG4gICAgdmFyIGFsbG93UmV2ZXJ0ID0gcm9vdC5xdWVyeSgnR0VUX0FMTE9XX1JFVkVSVCcpO1xuXG4gICAgLy8gZW5hYmxlZCBidXR0b25zIGFycmF5XG4gICAgdmFyIGVuYWJsZWRCdXR0b25zID0gcm9vdC5xdWVyeSgnSVNfQVNZTkMnKVxuICAgICAgPyBCdXR0b25LZXlzLmNvbmNhdCgpXG4gICAgICA6IEJ1dHRvbktleXMuZmlsdGVyKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgIHJldHVybiAhL1Byb2Nlc3MvLnRlc3Qoa2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAvLyByZW1vdmUgbGFzdCBidXR0b24gKHJldmVydCkgaWYgbm90IGFsbG93ZWRcbiAgICBpZiAoIWFsbG93UmV2ZXJ0KSB7XG4gICAgICBlbmFibGVkQnV0dG9ucy5zcGxpY2UoLTEsIDEpO1xuICAgICAgdmFyIG1hcCA9IFN0eWxlTWFwWydESURfQ09NUExFVEVfSVRFTV9QUk9DRVNTSU5HJ107XG4gICAgICBtYXAuaW5mby50cmFuc2xhdGVYID0gY2FsY3VsYXRlRmlsZUhvcml6b250YWxDZW50ZXJPZmZzZXQ7XG4gICAgICBtYXAuaW5mby50cmFuc2xhdGVZID0gY2FsY3VsYXRlRmlsZVZlcnRpY2FsQ2VudGVyT2Zmc2V0O1xuICAgICAgbWFwLnN0YXR1cy50cmFuc2xhdGVZID0gY2FsY3VsYXRlRmlsZVZlcnRpY2FsQ2VudGVyT2Zmc2V0O1xuICAgICAgbWFwLnByb2Nlc3NpbmdDb21wbGV0ZUluZGljYXRvciA9IHsgb3BhY2l0eTogMSwgc2NhbGVYOiAxLCBzY2FsZVk6IDEgfTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgdGhlIGJ1dHRvbiB2aWV3c1xuICAgIGZvcmluKEJ1dHRvbnMsIGZ1bmN0aW9uKGtleSwgZGVmaW5pdGlvbikge1xuICAgICAgLy8gY3JlYXRlIGJ1dHRvblxuICAgICAgdmFyIGJ1dHRvblZpZXcgPSByb290LmNyZWF0ZUNoaWxkVmlldyhmaWxlQWN0aW9uQnV0dG9uLCB7XG4gICAgICAgIGxhYmVsOiByb290LnF1ZXJ5KGRlZmluaXRpb24ubGFiZWwpLFxuICAgICAgICBpY29uOiByb290LnF1ZXJ5KGRlZmluaXRpb24uaWNvbiksXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pO1xuXG4gICAgICAvLyBzaG91bGQgYmUgYXBwZW5kZWQ/XG4gICAgICBpZiAoZW5hYmxlZEJ1dHRvbnMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICByb290LmFwcGVuZENoaWxkVmlldyhidXR0b25WaWV3KTtcbiAgICAgIH1cblxuICAgICAgLy8gYWRkIGNsYXNzXG4gICAgICBidXR0b25WaWV3LmVsZW1lbnQuY2xhc3NMaXN0LmFkZChkZWZpbml0aW9uLmNsYXNzTmFtZSk7XG5cbiAgICAgIC8vIGhhbmRsZSBpbnRlcmFjdGlvbnNcbiAgICAgIGJ1dHRvblZpZXcub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJvb3QuZGlzcGF0Y2goZGVmaW5pdGlvbi5hY3Rpb24sIHsgcXVlcnk6IHByb3BzLmlkIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldCByZWZlcmVuY2VcbiAgICAgIHJvb3QucmVmWydidXR0b24nICsga2V5XSA9IGJ1dHRvblZpZXc7XG4gICAgfSk7XG5cbiAgICAvLyBjcmVhdGUgZmlsZSBpbmZvIHZpZXdcbiAgICByb290LnJlZi5pbmZvID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhmaWxlSW5mbywgeyBpZDogcHJvcHMuaWQgfSlcbiAgICApO1xuXG4gICAgLy8gY3JlYXRlIGZpbGUgc3RhdHVzIHZpZXdcbiAgICByb290LnJlZi5zdGF0dXMgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KGZpbGVTdGF0dXMsIHsgaWQ6IHByb3BzLmlkIH0pXG4gICAgKTtcblxuICAgIC8vIGNoZWNrbWFya1xuICAgIHJvb3QucmVmLnByb2Nlc3NpbmdDb21wbGV0ZUluZGljYXRvciA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcocHJvY2Vzc2luZ0NvbXBsZXRlSW5kaWNhdG9yVmlldylcbiAgICApO1xuXG4gICAgLy8gYWRkIHByb2dyZXNzIGluZGljYXRvcnNcbiAgICByb290LnJlZi5sb2FkUHJvZ3Jlc3NJbmRpY2F0b3IgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KHByb2dyZXNzSW5kaWNhdG9yLCB7IG9wYWNpdHk6IDAgfSlcbiAgICApO1xuICAgIHJvb3QucmVmLmxvYWRQcm9ncmVzc0luZGljYXRvci5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXG4gICAgICAnZmlsZXBvbmQtLWxvYWQtaW5kaWNhdG9yJ1xuICAgICk7XG5cbiAgICByb290LnJlZi5wcm9jZXNzUHJvZ3Jlc3NJbmRpY2F0b3IgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KHByb2dyZXNzSW5kaWNhdG9yLCB7IG9wYWNpdHk6IDAgfSlcbiAgICApO1xuXG4gICAgcm9vdC5yZWYucHJvY2Vzc1Byb2dyZXNzSW5kaWNhdG9yLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgICdmaWxlcG9uZC0tcHJvY2Vzcy1pbmRpY2F0b3InXG4gICAgKTtcbiAgfTtcblxuICB2YXIgd3JpdGUkNCA9IGZ1bmN0aW9uIHdyaXRlKF9yZWYzKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMy5yb290LFxuICAgICAgYWN0aW9ucyA9IF9yZWYzLmFjdGlvbnMsXG4gICAgICBwcm9wcyA9IF9yZWYzLnByb3BzO1xuXG4gICAgLy8gcm91dGUgYWN0aW9uc1xuICAgIHJvdXRlJDMoeyByb290OiByb290LCBhY3Rpb25zOiBhY3Rpb25zLCBwcm9wczogcHJvcHMgfSk7XG5cbiAgICAvLyBzZWxlY3QgbGFzdCBzdGF0ZSBjaGFuZ2UgYWN0aW9uXG4gICAgdmFyIGFjdGlvbiA9IFtdXG4gICAgICAuY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KGFjdGlvbnMpKVxuICAgICAgLmZpbHRlcihmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIC9eRElEXy8udGVzdChhY3Rpb24udHlwZSk7XG4gICAgICB9KVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZpbmQoZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBTdHlsZU1hcFthY3Rpb24udHlwZV07XG4gICAgICB9KTtcblxuICAgIC8vIG5vIG5lZWQgdG8gc2V0IHNhbWUgc3RhdGUgdHdpY2VcbiAgICBpZiAoIWFjdGlvbiB8fCAoYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBwcm9wcy5jdXJyZW50U3R5bGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc2V0IGN1cnJlbnQgc3RhdGVcbiAgICBwcm9wcy5jdXJyZW50U3R5bGUgPSBhY3Rpb24udHlwZTtcbiAgICB2YXIgbmV3U3R5bGVzID0gU3R5bGVNYXBbcHJvcHMuY3VycmVudFN0eWxlXTtcblxuICAgIGZvcmluKERlZmF1bHRTdHlsZSwgZnVuY3Rpb24obmFtZSwgZGVmYXVsdFN0eWxlcykge1xuICAgICAgLy8gZ2V0IHJlZmVyZW5jZSB0byBjb250cm9sXG4gICAgICB2YXIgY29udHJvbCA9IHJvb3QucmVmW25hbWVdO1xuXG4gICAgICAvLyBsb29wIG92ZXIgYWxsIHN0eWxlcyBmb3IgdGhpcyBjb250cm9sXG4gICAgICBmb3JpbihkZWZhdWx0U3R5bGVzLCBmdW5jdGlvbihrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB2YXIgdmFsdWUgPVxuICAgICAgICAgIG5ld1N0eWxlc1tuYW1lXSAmJiB0eXBlb2YgbmV3U3R5bGVzW25hbWVdW2tleV0gIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IG5ld1N0eWxlc1tuYW1lXVtrZXldXG4gICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgY29udHJvbFtrZXldID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUocm9vdCkgOiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciByb3V0ZSQzID0gY3JlYXRlUm91dGUoe1xuICAgIERJRF9TRVRfTEFCRUxfQlVUVE9OX0FCT1JUX0lURU1fUFJPQ0VTU0lORzogZnVuY3Rpb24gRElEX1NFVF9MQUJFTF9CVVRUT05fQUJPUlRfSVRFTV9QUk9DRVNTSU5HKFxuICAgICAgX3JlZjRcbiAgICApIHtcbiAgICAgIHZhciByb290ID0gX3JlZjQucm9vdCxcbiAgICAgICAgYWN0aW9uID0gX3JlZjQuYWN0aW9uO1xuXG4gICAgICByb290LnJlZi5idXR0b25BYm9ydEl0ZW1Qcm9jZXNzaW5nLmxhYmVsID0gYWN0aW9uLnZhbHVlO1xuICAgIH0sXG4gICAgRElEX1NFVF9MQUJFTF9CVVRUT05fQUJPUlRfSVRFTV9MT0FEOiBmdW5jdGlvbiBESURfU0VUX0xBQkVMX0JVVFRPTl9BQk9SVF9JVEVNX0xPQUQoXG4gICAgICBfcmVmNVxuICAgICkge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmNS5yb290LFxuICAgICAgICBhY3Rpb24gPSBfcmVmNS5hY3Rpb247XG5cbiAgICAgIHJvb3QucmVmLmJ1dHRvbkFib3J0SXRlbUxvYWQubGFiZWwgPSBhY3Rpb24udmFsdWU7XG4gICAgfSxcbiAgICBESURfUkVRVUVTVF9JVEVNX1BST0NFU1NJTkc6IGZ1bmN0aW9uIERJRF9SRVFVRVNUX0lURU1fUFJPQ0VTU0lORyhfcmVmNikge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmNi5yb290O1xuXG4gICAgICByb290LnJlZi5wcm9jZXNzUHJvZ3Jlc3NJbmRpY2F0b3Iuc3BpbiA9IHRydWU7XG4gICAgICByb290LnJlZi5wcm9jZXNzUHJvZ3Jlc3NJbmRpY2F0b3IucHJvZ3Jlc3MgPSAwO1xuICAgIH0sXG4gICAgRElEX1NUQVJUX0lURU1fTE9BRDogZnVuY3Rpb24gRElEX1NUQVJUX0lURU1fTE9BRChfcmVmNykge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmNy5yb290O1xuXG4gICAgICByb290LnJlZi5sb2FkUHJvZ3Jlc3NJbmRpY2F0b3Iuc3BpbiA9IHRydWU7XG4gICAgICByb290LnJlZi5sb2FkUHJvZ3Jlc3NJbmRpY2F0b3IucHJvZ3Jlc3MgPSAwO1xuICAgIH0sXG4gICAgRElEX1VQREFURV9JVEVNX0xPQURfUFJPR1JFU1M6IGZ1bmN0aW9uIERJRF9VUERBVEVfSVRFTV9MT0FEX1BST0dSRVNTKFxuICAgICAgX3JlZjhcbiAgICApIHtcbiAgICAgIHZhciByb290ID0gX3JlZjgucm9vdCxcbiAgICAgICAgYWN0aW9uID0gX3JlZjguYWN0aW9uO1xuXG4gICAgICByb290LnJlZi5sb2FkUHJvZ3Jlc3NJbmRpY2F0b3Iuc3BpbiA9IGZhbHNlO1xuICAgICAgcm9vdC5yZWYubG9hZFByb2dyZXNzSW5kaWNhdG9yLnByb2dyZXNzID0gYWN0aW9uLnByb2dyZXNzO1xuICAgIH0sXG4gICAgRElEX1VQREFURV9JVEVNX1BST0NFU1NfUFJPR1JFU1M6IGZ1bmN0aW9uIERJRF9VUERBVEVfSVRFTV9QUk9DRVNTX1BST0dSRVNTKFxuICAgICAgX3JlZjlcbiAgICApIHtcbiAgICAgIHZhciByb290ID0gX3JlZjkucm9vdCxcbiAgICAgICAgYWN0aW9uID0gX3JlZjkuYWN0aW9uO1xuXG4gICAgICByb290LnJlZi5wcm9jZXNzUHJvZ3Jlc3NJbmRpY2F0b3Iuc3BpbiA9IGZhbHNlO1xuICAgICAgcm9vdC5yZWYucHJvY2Vzc1Byb2dyZXNzSW5kaWNhdG9yLnByb2dyZXNzID0gYWN0aW9uLnByb2dyZXNzO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGZpbGUgPSBjcmVhdGVWaWV3KHtcbiAgICBjcmVhdGU6IGNyZWF0ZSQ2LFxuICAgIHdyaXRlOiB3cml0ZSQ0LFxuICAgIGRpZENyZWF0ZVZpZXc6IGZ1bmN0aW9uIGRpZENyZWF0ZVZpZXcocm9vdCkge1xuICAgICAgYXBwbHlGaWx0ZXJzKCdDUkVBVEVfVklFVycsIF9leHRlbmRzKHt9LCByb290LCB7IHZpZXc6IHJvb3QgfSkpO1xuICAgIH0sXG4gICAgbmFtZTogJ2ZpbGUnXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBmaWxlIHZpZXdcbiAgICovXG4gIHZhciBjcmVhdGUkNSA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG5cbiAgICAvLyBmaWxlbmFtZVxuICAgIHJvb3QucmVmLmZpbGVOYW1lID0gY3JlYXRlRWxlbWVudCQxKCdsZWdlbmQnKTtcbiAgICByb290LmFwcGVuZENoaWxkKHJvb3QucmVmLmZpbGVOYW1lKTtcblxuICAgIC8vIGZpbGUgdmlld1xuICAgIHJvb3QucmVmLmZpbGUgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KGZpbGUsIHsgaWQ6IHByb3BzLmlkIH0pXG4gICAgKTtcblxuICAgIC8vIGNyZWF0ZSBkYXRhIGNvbnRhaW5lclxuICAgIHZhciBkYXRhQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCQxKCdpbnB1dCcpO1xuICAgIGRhdGFDb250YWluZXIudHlwZSA9ICdoaWRkZW4nO1xuICAgIGRhdGFDb250YWluZXIubmFtZSA9IHJvb3QucXVlcnkoJ0dFVF9OQU1FJyk7XG4gICAgcm9vdC5yZWYuZGF0YSA9IGRhdGFDb250YWluZXI7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChkYXRhQ29udGFpbmVyKTtcbiAgfTtcblxuICAvKipcbiAgICogRGF0YSBzdG9yYWdlXG4gICAqL1xuICB2YXIgZGlkTG9hZEl0ZW0gPSBmdW5jdGlvbiBkaWRMb2FkSXRlbShfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYyLmFjdGlvbixcbiAgICAgIHByb3BzID0gX3JlZjIucHJvcHM7XG5cbiAgICByb290LnJlZi5kYXRhLnZhbHVlID0gYWN0aW9uLnNlcnZlckZpbGVSZWZlcmVuY2U7XG5cbiAgICAvLyB1cGRhdGVzIHRoZSBsZWdlbmQgb2YgdGhlIGZpZWxkc2V0IHNvIHNjcmVlbnJlYWRlcnMgY2FuIGJldHRlciBncm91cCBidXR0b25zXG4gICAgdGV4dChcbiAgICAgIHJvb3QucmVmLmZpbGVOYW1lLFxuICAgICAgZm9ybWF0RmlsZW5hbWUocm9vdC5xdWVyeSgnR0VUX0lURU1fTkFNRScsIHByb3BzLmlkKSlcbiAgICApO1xuICB9O1xuXG4gIHZhciBkaWRSZW1vdmVJdGVtID0gZnVuY3Rpb24gZGlkUmVtb3ZlSXRlbShfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdDtcblxuICAgIHJvb3QucmVmLmRhdGEucmVtb3ZlQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9O1xuXG4gIHZhciBkaWRDb21wbGV0ZUl0ZW1Qcm9jZXNzaW5nID0gZnVuY3Rpb24gZGlkQ29tcGxldGVJdGVtUHJvY2Vzc2luZyhfcmVmNCkge1xuICAgIHZhciByb290ID0gX3JlZjQucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWY0LmFjdGlvbjtcblxuICAgIHJvb3QucmVmLmRhdGEudmFsdWUgPSBhY3Rpb24uc2VydmVyRmlsZVJlZmVyZW5jZTtcbiAgfTtcblxuICB2YXIgZGlkUmV2ZXJ0SXRlbVByb2Nlc3NpbmcgPSBmdW5jdGlvbiBkaWRSZXZlcnRJdGVtUHJvY2Vzc2luZyhfcmVmNSkge1xuICAgIHZhciByb290ID0gX3JlZjUucm9vdDtcblxuICAgIHJvb3QucmVmLmRhdGEucmVtb3ZlQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9O1xuXG4gIHZhciBmaWxlV3JhcHBlciA9IGNyZWF0ZVZpZXcoe1xuICAgIGNyZWF0ZTogY3JlYXRlJDUsXG4gICAgd3JpdGU6IGNyZWF0ZVJvdXRlKHtcbiAgICAgIERJRF9MT0FEX0lURU06IGRpZExvYWRJdGVtLFxuICAgICAgRElEX1JFTU9WRV9JVEVNOiBkaWRSZW1vdmVJdGVtLFxuICAgICAgRElEX0NPTVBMRVRFX0lURU1fUFJPQ0VTU0lORzogZGlkQ29tcGxldGVJdGVtUHJvY2Vzc2luZyxcbiAgICAgIERJRF9SRVZFUlRfSVRFTV9QUk9DRVNTSU5HOiBkaWRSZXZlcnRJdGVtUHJvY2Vzc2luZ1xuICAgIH0pLFxuICAgIGRpZENyZWF0ZVZpZXc6IGZ1bmN0aW9uIGRpZENyZWF0ZVZpZXcocm9vdCkge1xuICAgICAgYXBwbHlGaWx0ZXJzKCdDUkVBVEVfVklFVycsIF9leHRlbmRzKHt9LCByb290LCB7IHZpZXc6IHJvb3QgfSkpO1xuICAgIH0sXG4gICAgdGFnOiAnZmllbGRzZXQnLFxuICAgIG5hbWU6ICdmaWxlLXdyYXBwZXInXG4gIH0pO1xuXG4gIHZhciBQQU5FTF9TUFJJTkdfUFJPUFMgPSB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAwLjYsIG1hc3M6IDcgfTtcblxuICB2YXIgY3JlYXRlJDExID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcblxuICAgIFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3RvcCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdjZW50ZXInLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHRyYW5zbGF0ZVk6IG51bGwsXG4gICAgICAgICAgc2NhbGVZOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIG1peGluczoge1xuICAgICAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgICAgIHNjYWxlWTogUEFORUxfU1BSSU5HX1BST1BTXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdHlsZXM6IFsndHJhbnNsYXRlWScsICdzY2FsZVknXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnYm90dG9tJyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICB0cmFuc2xhdGVZOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIG1peGluczoge1xuICAgICAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFBBTkVMX1NQUklOR19QUk9QU1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3R5bGVzOiBbJ3RyYW5zbGF0ZVknXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXS5mb3JFYWNoKGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICAgIGNyZWF0ZVNlY3Rpb24ocm9vdCwgc2VjdGlvbiwgcHJvcHMubmFtZSk7XG4gICAgfSk7XG5cbiAgICByb290LmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmlsZXBvbmQtLScgKyBwcm9wcy5uYW1lKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlU2VjdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24ocm9vdCwgc2VjdGlvbiwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIHZpZXdDb25zdHJ1Y3RvciA9IGNyZWF0ZVZpZXcoe1xuICAgICAgbmFtZTogJ3BhbmVsLScgKyBzZWN0aW9uLm5hbWUgKyAnIGZpbGVwb25kLS0nICsgY2xhc3NOYW1lLFxuICAgICAgbWl4aW5zOiBzZWN0aW9uLm1peGluc1xuICAgIH0pO1xuXG4gICAgdmFyIHZpZXcgPSByb290LmNyZWF0ZUNoaWxkVmlldyh2aWV3Q29uc3RydWN0b3IsIHNlY3Rpb24ucHJvcHMpO1xuXG4gICAgcm9vdC5yZWZbc2VjdGlvbi5uYW1lXSA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KHZpZXcpO1xuICB9O1xuXG4gIHZhciB3cml0ZSQ3ID0gZnVuY3Rpb24gd3JpdGUoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYyLnByb3BzO1xuXG4gICAgaWYgKCFwcm9wcy5oZWlnaHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjYW4gaXQgc2NhbGU/XG4gICAgcm9vdC5lbGVtZW50LmRhdGFzZXQuc2NhbGFibGUgPSBpc0Jvb2xlYW4ocHJvcHMuc2NhbGFibGUpXG4gICAgICA/IHByb3BzLnNjYWxhYmxlXG4gICAgICA6IHRydWU7XG5cbiAgICAvLyBnZXQgY2hpbGQgcmVjdHNcbiAgICB2YXIgdG9wUmVjdCA9IHJvb3QucmVmLnRvcC5yZWN0LmVsZW1lbnQ7XG4gICAgdmFyIGJvdHRvbVJlY3QgPSByb290LnJlZi5ib3R0b20ucmVjdC5lbGVtZW50O1xuXG4gICAgLy8gbWFrZSBzdXJlIGhlaWdodCBuZXZlciBpcyBzbWFsbGVyIHRoYW4gYm90dG9tIGFuZCB0b3Agc2VjaXRvbiBoZWlnaHRzIGNvbWJpbmVkICh3aWxsIHByb2JhYmx5IG5ldmVyIGhhcHBlbiwgYnV0IHdobyBrbm93cylcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgodG9wUmVjdC5oZWlnaHQgKyBib3R0b21SZWN0LmhlaWdodCwgcHJvcHMuaGVpZ2h0KTtcblxuICAgIC8vIG9mZnNldCBjZW50ZXIgcGFydFxuICAgIHJvb3QucmVmLmNlbnRlci50cmFuc2xhdGVZID0gdG9wUmVjdC5oZWlnaHQ7XG5cbiAgICAvLyBzY2FsZSBjZW50ZXIgcGFydFxuICAgIC8vIHVzZSBtYXRoIGNlaWwgdG8gcHJldmVudCB0cmFuc3BhcmVudCBsaW5lcyBiZWNhdXNlIG9mIHJvdW5kaW5nIGVycm9yc1xuICAgIHJvb3QucmVmLmNlbnRlci5zY2FsZVkgPVxuICAgICAgKGhlaWdodCAtIHRvcFJlY3QuaGVpZ2h0IC0gYm90dG9tUmVjdC5oZWlnaHQpIC8gMTAwO1xuXG4gICAgLy8gb2Zmc2V0IGJvdHRvbSBwYXJ0XG4gICAgcm9vdC5yZWYuYm90dG9tLnRyYW5zbGF0ZVkgPSBoZWlnaHQgLSBib3R0b21SZWN0LmhlaWdodDtcbiAgfTtcblxuICB2YXIgcGFuZWwgPSBjcmVhdGVWaWV3KHtcbiAgICBuYW1lOiAncGFuZWwnLFxuICAgIHdyaXRlOiB3cml0ZSQ3LFxuICAgIGNyZWF0ZTogY3JlYXRlJDExLFxuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgbWl4aW5zOiB7XG4gICAgICBhcGlzOiBbJ2hlaWdodCcsICdzY2FsYWJsZSddXG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZmlsZSB2aWV3XG4gICAqL1xuICB2YXIgY3JlYXRlJDQgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gICAgLy8gZmlsZSB2aWV3XG4gICAgcm9vdC5yZWYuY29udHJvbHMgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KGZpbGVXcmFwcGVyLCB7IGlkOiBwcm9wcy5pZCB9KVxuICAgICk7XG5cbiAgICAvLyBmaWxlIHBhbmVsXG4gICAgcm9vdC5yZWYucGFuZWwgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KHBhbmVsLCB7IG5hbWU6ICdpdGVtLXBhbmVsJyB9KVxuICAgICk7XG5cbiAgICAvLyBkZWZhdWx0IHN0YXJ0IGhlaWdodFxuICAgIHJvb3QucmVmLnBhbmVsLmhlaWdodCA9IDA7XG5cbiAgICAvLyBieSBkZWZhdWx0IG5vdCBtYXJrZWQgZm9yIHJlbW92YWxcbiAgICBwcm9wcy5tYXJrZWRGb3JSZW1vdmFsID0gZmFsc2U7XG4gIH07XG5cbiAgdmFyIFN0YXRlTWFwID0ge1xuICAgIERJRF9TVEFSVF9JVEVNX0xPQUQ6ICdidXN5JyxcbiAgICBESURfVVBEQVRFX0lURU1fTE9BRF9QUk9HUkVTUzogJ2xvYWRpbmcnLFxuICAgIERJRF9USFJPV19JVEVNX0lOVkFMSUQ6ICdsb2FkLWludmFsaWQnLFxuICAgIERJRF9USFJPV19JVEVNX0xPQURfRVJST1I6ICdsb2FkLWVycm9yJyxcbiAgICBESURfU1RBUlRfSVRFTV9QUk9DRVNTSU5HOiAnYnVzeScsXG4gICAgRElEX1JFUVVFU1RfSVRFTV9QUk9DRVNTSU5HOiAnYnVzeScsXG4gICAgRElEX1VQREFURV9JVEVNX1BST0NFU1NfUFJPR1JFU1M6ICdwcm9jZXNzaW5nJyxcbiAgICBESURfQ09NUExFVEVfSVRFTV9QUk9DRVNTSU5HOiAncHJvY2Vzc2luZy1jb21wbGV0ZScsXG4gICAgRElEX1RIUk9XX0lURU1fUFJPQ0VTU0lOR19FUlJPUjogJ3Byb2Nlc3NpbmctZXJyb3InLFxuICAgIERJRF9BQk9SVF9JVEVNX1BST0NFU1NJTkc6ICdjYW5jZWxsZWQnLFxuICAgIERJRF9SRVZFUlRfSVRFTV9QUk9DRVNTSU5HOiAnaWRsZSdcbiAgfTtcblxuICB2YXIgd3JpdGUkMyA9IGZ1bmN0aW9uIHdyaXRlKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgYWN0aW9ucyA9IF9yZWYyLmFjdGlvbnMsXG4gICAgICBwcm9wcyA9IF9yZWYyLnByb3BzO1xuXG4gICAgLy8gdXBkYXRlIHBhbmVsIGhlaWdodFxuICAgIHJvb3QucmVmLnBhbmVsLmhlaWdodCA9IHJvb3QucmVmLmNvbnRyb2xzLnJlY3QuaW5uZXIuaGVpZ2h0O1xuXG4gICAgLy8gc2V0IHBhbmVsIGhlaWdodFxuICAgIHJvb3QuaGVpZ2h0ID0gcm9vdC5yZWYuY29udHJvbHMucmVjdC5pbm5lci5oZWlnaHQ7XG5cbiAgICAvLyBzZWxlY3QgbGFzdCBzdGF0ZSBjaGFuZ2UgYWN0aW9uXG4gICAgdmFyIGFjdGlvbiA9IFtdXG4gICAgICAuY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KGFjdGlvbnMpKVxuICAgICAgLmZpbHRlcihmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIC9eRElEXy8udGVzdChhY3Rpb24udHlwZSk7XG4gICAgICB9KVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZpbmQoZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBTdGF0ZU1hcFthY3Rpb24udHlwZV07XG4gICAgICB9KTtcblxuICAgIC8vIG5vIG5lZWQgdG8gc2V0IHNhbWUgc3RhdGUgdHdpY2VcbiAgICBpZiAoIWFjdGlvbiB8fCAoYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBwcm9wcy5jdXJyZW50U3RhdGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc2V0IGN1cnJlbnQgc3RhdGVcbiAgICBwcm9wcy5jdXJyZW50U3RhdGUgPSBhY3Rpb24udHlwZTtcblxuICAgIC8vIHNldCBzdGF0ZVxuICAgIHJvb3QuZWxlbWVudC5kYXRhc2V0LmZpbGVwb25kSXRlbVN0YXRlID0gU3RhdGVNYXBbcHJvcHMuY3VycmVudFN0YXRlXSB8fCAnJztcbiAgfTtcblxuICB2YXIgaXRlbSA9IGNyZWF0ZVZpZXcoe1xuICAgIGNyZWF0ZTogY3JlYXRlJDQsXG4gICAgd3JpdGU6IHdyaXRlJDMsXG4gICAgdGFnOiAnbGknLFxuICAgIG5hbWU6ICdpdGVtJyxcbiAgICBtaXhpbnM6IHtcbiAgICAgIGFwaXM6IFsnaWQnLCAnbWFya2VkRm9yUmVtb3ZhbCddLFxuICAgICAgc3R5bGVzOiBbXG4gICAgICAgICd0cmFuc2xhdGVYJyxcbiAgICAgICAgJ3RyYW5zbGF0ZVknLFxuICAgICAgICAnc2NhbGVYJyxcbiAgICAgICAgJ3NjYWxlWScsXG4gICAgICAgICdvcGFjaXR5JyxcbiAgICAgICAgJ2hlaWdodCdcbiAgICAgIF0sXG4gICAgICBhbmltYXRpb25zOiB7XG4gICAgICAgIHNjYWxlWDogJ3NwcmluZycsXG4gICAgICAgIHNjYWxlWTogJ3NwcmluZycsXG4gICAgICAgIHRyYW5zbGF0ZVg6ICdzcHJpbmcnLFxuICAgICAgICB0cmFuc2xhdGVZOiAnc3ByaW5nJyxcbiAgICAgICAgb3BhY2l0eTogeyB0eXBlOiAndHdlZW4nLCBkdXJhdGlvbjogMjUwIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHZhciBjcmVhdGUkMyA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3Q7XG5cbiAgICAvLyBuZWVkIHRvIHNldCByb2xlIHRvIGxpc3QgYXMgb3RoZXJ3aXNlIGl0IHdvbid0IGJlIHJlYWQgYXMgYSBsaXN0IGJ5IFZvaWNlT3ZlclxuICAgIGF0dHIocm9vdC5lbGVtZW50LCAncm9sZScsICdsaXN0Jyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc2VydHMgYSBuZXcgaXRlbVxuICAgKiBAcGFyYW0gcm9vdFxuICAgKiBAcGFyYW0gYWN0aW9uXG4gICAqL1xuICB2YXIgYWRkSXRlbVZpZXcgPSBmdW5jdGlvbiBhZGRJdGVtVmlldyhfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYyLmFjdGlvbjtcbiAgICB2YXIgaWQgPSBhY3Rpb24uaWQsXG4gICAgICBpbmRleCA9IGFjdGlvbi5pbmRleCxcbiAgICAgIGludGVyYWN0aW9uTWV0aG9kID0gYWN0aW9uLmludGVyYWN0aW9uTWV0aG9kO1xuXG4gICAgdmFyIGFuaW1hdGlvbiA9IHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9O1xuXG4gICAgaWYgKGludGVyYWN0aW9uTWV0aG9kID09PSBJbnRlcmFjdGlvbk1ldGhvZC5OT05FKSB7XG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlWSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGludGVyYWN0aW9uTWV0aG9kID09PSBJbnRlcmFjdGlvbk1ldGhvZC5EUk9QKSB7XG4gICAgICBhbmltYXRpb24uc2NhbGVYID0gMC44O1xuICAgICAgYW5pbWF0aW9uLnNjYWxlWSA9IDAuODtcbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaW50ZXJhY3Rpb25NZXRob2QgPT09IEludGVyYWN0aW9uTWV0aG9kLkJST1dTRSkge1xuICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkgPSAtMzA7XG4gICAgfVxuXG4gICAgaWYgKGludGVyYWN0aW9uTWV0aG9kID09PSBJbnRlcmFjdGlvbk1ldGhvZC5BUEkpIHtcbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVYID0gLTEwMDtcbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZID0gbnVsbDtcbiAgICB9XG5cbiAgICByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KFxuICAgICAgICAvLyB2aWV3IHR5cGVcbiAgICAgICAgaXRlbSxcblxuICAgICAgICAvLyBwcm9wc1xuICAgICAgICBfZXh0ZW5kcyhcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFuaW1hdGlvblxuICAgICAgICApXG4gICAgICApLFxuICAgICAgaW5kZXhcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGV4aXN0aW5nIGl0ZW1cbiAgICogQHBhcmFtIHJvb3RcbiAgICogQHBhcmFtIGFjdGlvblxuICAgKi9cbiAgdmFyIHJlbW92ZUl0ZW1WaWV3ID0gZnVuY3Rpb24gcmVtb3ZlSXRlbVZpZXcoX3JlZjMpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYzLnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmMy5hY3Rpb247XG4gICAgdmFyIGlkID0gYWN0aW9uLmlkO1xuXG4gICAgLy8gZ2V0IHRoZSB2aWV3IG1hdGNoaW5nIHRoZSBnaXZlbiBpZFxuXG4gICAgdmFyIHZpZXcgPSByb290LmNoaWxkVmlld3MuZmluZChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkLmlkID09PSBpZDtcbiAgICB9KTtcblxuICAgIC8vIGlmIG5vIHZpZXcgZm91bmQsIGV4aXRcbiAgICBpZiAoIXZpZXcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhbmltYXRlIHZpZXcgb3V0IG9mIHZpZXdcbiAgICB2aWV3LnNjYWxlWCA9IDAuOTtcbiAgICB2aWV3LnNjYWxlWSA9IDAuOTtcbiAgICB2aWV3Lm9wYWNpdHkgPSAwO1xuXG4gICAgLy8gbWFyayBmb3IgcmVtb3ZhbFxuICAgIHZpZXcubWFya2VkRm9yUmVtb3ZhbCA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHVwIGFjdGlvbiByb3V0ZXNcbiAgICovXG4gIHZhciByb3V0ZSQyID0gY3JlYXRlUm91dGUoe1xuICAgIERJRF9BRERfSVRFTTogYWRkSXRlbVZpZXcsXG4gICAgRElEX1JFTU9WRV9JVEVNOiByZW1vdmVJdGVtVmlld1xuICB9KTtcblxuICB2YXIgZHJhZ1RyYW5zbGF0aW9uID0gZnVuY3Rpb24gZHJhZ1RyYW5zbGF0aW9uKFxuICAgIGNoaWxkSW5kZXgsXG4gICAgZHJhZ0luZGV4LFxuICAgIGl0ZW1NYXJnaW5cbiAgKSB7XG4gICAgaWYgKGNoaWxkSW5kZXggLSAxID09PSBkcmFnSW5kZXgpIHtcbiAgICAgIHJldHVybiBpdGVtTWFyZ2luIC8gNjtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGRJbmRleCA9PT0gZHJhZ0luZGV4KSB7XG4gICAgICByZXR1cm4gaXRlbU1hcmdpbiAvIDI7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkSW5kZXggKyAxID09PSBkcmFnSW5kZXgpIHtcbiAgICAgIHJldHVybiAtaXRlbU1hcmdpbiAvIDI7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkSW5kZXggKyAyID09PSBkcmFnSW5kZXgpIHtcbiAgICAgIHJldHVybiAtaXRlbU1hcmdpbiAvIDY7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIFdyaXRlIHRvIHZpZXdcbiAgICogQHBhcmFtIHJvb3RcbiAgICogQHBhcmFtIGFjdGlvbnNcbiAgICogQHBhcmFtIHByb3BzXG4gICAqL1xuICB2YXIgd3JpdGUkMiA9IGZ1bmN0aW9uIHdyaXRlKF9yZWY0KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNC5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmNC5wcm9wcyxcbiAgICAgIGFjdGlvbnMgPSBfcmVmNC5hY3Rpb25zO1xuXG4gICAgLy8gcm91dGUgYWN0aW9uc1xuICAgIHJvdXRlJDIoeyByb290OiByb290LCBwcm9wczogcHJvcHMsIGFjdGlvbnM6IGFjdGlvbnMgfSk7XG5cbiAgICB2YXIgcmVzdGluZyA9IHRydWU7XG5cbiAgICAvLyB1cGRhdGUgaXRlbSBwb3NpdGlvbnNcbiAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICByb290LmNoaWxkVmlld3NcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLnJlY3Qub3V0ZXIuaGVpZ2h0O1xuICAgICAgfSlcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkLCBjaGlsZEluZGV4KSB7XG4gICAgICAgIHZhciBjaGlsZFJlY3QgPSBjaGlsZC5yZWN0O1xuXG4gICAgICAgIC8vIHNldCB0aGlzIGNoaWxkIG9mZnNldFxuICAgICAgICBjaGlsZC50cmFuc2xhdGVYID0gMDtcbiAgICAgICAgY2hpbGQudHJhbnNsYXRlWSA9XG4gICAgICAgICAgb2Zmc2V0ICtcbiAgICAgICAgICAocHJvcHMuZHJhZ0luZGV4ID4gLTFcbiAgICAgICAgICAgID8gZHJhZ1RyYW5zbGF0aW9uKGNoaWxkSW5kZXgsIHByb3BzLmRyYWdJbmRleCwgMTApXG4gICAgICAgICAgICA6IDApO1xuXG4gICAgICAgIC8vIHNob3cgY2hpbGQgaWYgaXQncyBub3QgbWFya2VkIGZvciByZW1vdmFsXG4gICAgICAgIGlmICghY2hpbGQubWFya2VkRm9yUmVtb3ZhbCkge1xuICAgICAgICAgIGNoaWxkLnNjYWxlWCA9IDE7XG4gICAgICAgICAgY2hpbGQuc2NhbGVZID0gMTtcbiAgICAgICAgICBjaGlsZC5vcGFjaXR5ID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBuZXh0IGNoaWxkIG9mZnNldCAocmVkdWNlIGhlaWdodCBieSB5IHNjYWxlIGZvciB2aWV3cyB0aGF0IGFyZSBiZWluZyByZW1vdmVkKVxuICAgICAgICBvZmZzZXQgKz0gY2hpbGRSZWN0Lm91dGVyLmhlaWdodDtcbiAgICAgIH0pO1xuXG4gICAgLy8gcmVtb3ZlIG1hcmtlZCB2aWV3c1xuICAgIHJvb3QuY2hpbGRWaWV3c1xuICAgICAgLmZpbHRlcihmdW5jdGlvbih2aWV3KSB7XG4gICAgICAgIHJldHVybiB2aWV3Lm1hcmtlZEZvclJlbW92YWwgJiYgdmlldy5vcGFjaXR5ID09PSAwO1xuICAgICAgfSlcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKHZpZXcpIHtcbiAgICAgICAgcm9vdC5yZW1vdmVDaGlsZFZpZXcodmlldyk7XG4gICAgICAgIHJlc3RpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3Rpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbHRlcnMgYWN0aW9ucyB0aGF0IGFyZSBtZWFudCBzcGVjaWZpY2FsbHkgZm9yIGEgY2VydGFpbiBjaGlsZCBvZiB0aGUgbGlzdFxuICAgKiBAcGFyYW0gY2hpbGRcbiAgICogQHBhcmFtIGFjdGlvbnNcbiAgICovXG4gIHZhciBmaWx0ZXJTZXRJdGVtQWN0aW9ucyA9IGZ1bmN0aW9uIGZpbHRlclNldEl0ZW1BY3Rpb25zKGNoaWxkLCBhY3Rpb25zKSB7XG4gICAgcmV0dXJuIGFjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgLy8gaWYgYWN0aW9uIGhhcyBhbiBpZCwgZmlsdGVyIG91dCBhY3Rpb25zIHRoYXQgZG9uJ3QgaGF2ZSB0aGlzIGNoaWxkIGlkXG4gICAgICBpZiAoYWN0aW9uLmRhdGEgJiYgYWN0aW9uLmRhdGEuaWQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLmlkID09PSBhY3Rpb24uZGF0YS5pZDtcbiAgICAgIH1cblxuICAgICAgLy8gYWxsb3cgYWxsIG90aGVyIGFjdGlvbnNcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBsaXN0ID0gY3JlYXRlVmlldyh7XG4gICAgY3JlYXRlOiBjcmVhdGUkMyxcbiAgICB3cml0ZTogd3JpdGUkMixcbiAgICB0YWc6ICd1bCcsXG4gICAgbmFtZTogJ2xpc3QnLFxuICAgIGZpbHRlckZyYW1lQWN0aW9uc0ZvckNoaWxkOiBmaWx0ZXJTZXRJdGVtQWN0aW9ucyxcbiAgICBtaXhpbnM6IHtcbiAgICAgIGFwaXM6IFsnZHJhZ0luZGV4J11cbiAgICB9XG4gIH0pO1xuXG4gIHZhciBnZXRJdGVtSW5kZXhCeVBvc2l0aW9uID0gZnVuY3Rpb24gZ2V0SXRlbUluZGV4QnlQb3NpdGlvbihcbiAgICB2aWV3LFxuICAgIHBvc2l0aW9uSW5WaWV3XG4gICkge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgY2hpbGRWaWV3cyA9IHZpZXcuY2hpbGRWaWV3cztcbiAgICB2YXIgbCA9IGNoaWxkVmlld3MubGVuZ3RoO1xuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IGNoaWxkVmlld3NbaV07XG4gICAgICB2YXIgaXRlbVJlY3QgPSBpdGVtLnJlY3Qub3V0ZXI7XG4gICAgICB2YXIgaXRlbVJlY3RNaWQgPSBpdGVtUmVjdC50b3AgKyBpdGVtUmVjdC5oZWlnaHQgKiAwLjU7XG5cbiAgICAgIGlmIChwb3NpdGlvbkluVmlldy50b3AgPCBpdGVtUmVjdE1pZCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbDtcbiAgfTtcblxuICB2YXIgY3JlYXRlJDIgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gICAgcm9vdC5yZWYubGlzdCA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KHJvb3QuY3JlYXRlQ2hpbGRWaWV3KGxpc3QpKTtcblxuICAgIHByb3BzLmRyYWdDb29yZGluYXRlcyA9IG51bGw7XG4gICAgcHJvcHMub3ZlcmZsb3dpbmcgPSBmYWxzZTtcbiAgfTtcblxuICB2YXIgc3RvcmVEcmFnQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbiBzdG9yZURyYWdDb29yZGluYXRlcyhfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZjIucHJvcHMsXG4gICAgICBhY3Rpb24gPSBfcmVmMi5hY3Rpb247XG5cbiAgICBwcm9wcy5kcmFnQ29vcmRpbmF0ZXMgPSB7XG4gICAgICBsZWZ0OiBhY3Rpb24ucG9zaXRpb24uc2NvcGVMZWZ0LFxuICAgICAgdG9wOlxuICAgICAgICBhY3Rpb24ucG9zaXRpb24uc2NvcGVUb3AgLVxuICAgICAgICByb290LnJlY3Qub3V0ZXIudG9wICtcbiAgICAgICAgcm9vdC5yZWN0LmVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgfTtcbiAgfTtcblxuICB2YXIgY2xlYXJEcmFnQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbiBjbGVhckRyYWdDb29yZGluYXRlcyhfcmVmMykge1xuICAgIHZhciBwcm9wcyA9IF9yZWYzLnByb3BzO1xuXG4gICAgcHJvcHMuZHJhZ0Nvb3JkaW5hdGVzID0gbnVsbDtcbiAgfTtcblxuICB2YXIgcm91dGUkMSA9IGNyZWF0ZVJvdXRlKHtcbiAgICBESURfRFJBRzogc3RvcmVEcmFnQ29vcmRpbmF0ZXMsXG4gICAgRElEX0VORF9EUkFHOiBjbGVhckRyYWdDb29yZGluYXRlc1xuICB9KTtcblxuICB2YXIgd3JpdGUkMSA9IGZ1bmN0aW9uIHdyaXRlKF9yZWY0KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNC5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmNC5wcm9wcyxcbiAgICAgIGFjdGlvbnMgPSBfcmVmNC5hY3Rpb25zO1xuXG4gICAgLy8gcm91dGUgYWN0aW9uc1xuICAgIHJvdXRlJDEoeyByb290OiByb290LCBwcm9wczogcHJvcHMsIGFjdGlvbnM6IGFjdGlvbnMgfSk7XG5cbiAgICAvLyBjdXJyZW50IGRyYWcgcG9zaXRpb25cbiAgICByb290LnJlZi5saXN0LmRyYWdJbmRleCA9IHByb3BzLmRyYWdDb29yZGluYXRlc1xuICAgICAgPyBnZXRJdGVtSW5kZXhCeVBvc2l0aW9uKHJvb3QucmVmLmxpc3QsIHByb3BzLmRyYWdDb29yZGluYXRlcylcbiAgICAgIDogLTE7XG5cbiAgICAvLyBpZiBjdXJyZW50bHkgb3ZlcmZsb3dpbmcgYnV0IG5vIGxvbmdlciByZWNlaXZlZCBvdmVyZmxvd1xuICAgIGlmIChwcm9wcy5vdmVyZmxvd2luZyAmJiAhcHJvcHMub3ZlcmZsb3cpIHtcbiAgICAgIHByb3BzLm92ZXJmbG93aW5nID0gZmFsc2U7XG5cbiAgICAgIC8vIHJlc2V0IG92ZXJmbG93IHN0YXRlXG4gICAgICByb290LmVsZW1lbnQuZGF0YXNldC5zdGF0ZSA9ICcnO1xuICAgICAgcm9vdC5oZWlnaHQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGlmIGlzIG5vdCBvdmVyZmxvd2luZyBjdXJyZW50bHkgYnV0IGRvZXMgcmVjZWl2ZSBvdmVyZmxvdyB2YWx1ZVxuICAgIGlmICghcHJvcHMub3ZlcmZsb3dpbmcgJiYgcHJvcHMub3ZlcmZsb3cpIHtcbiAgICAgIHByb3BzLm92ZXJmbG93aW5nID0gdHJ1ZTtcbiAgICAgIHJvb3QuZWxlbWVudC5kYXRhc2V0LnN0YXRlID0gJ292ZXJmbG93JztcbiAgICAgIHJvb3QuaGVpZ2h0ID0gcHJvcHMub3ZlcmZsb3cgLSByb290LnRyYW5zbGF0ZVk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBsaXN0U2Nyb2xsZXIgPSBjcmVhdGVWaWV3KHtcbiAgICBjcmVhdGU6IGNyZWF0ZSQyLFxuICAgIHdyaXRlOiB3cml0ZSQxLFxuICAgIG5hbWU6ICdsaXN0LXNjcm9sbGVyJyxcbiAgICBtaXhpbnM6IHtcbiAgICAgIGFwaXM6IFsnb3ZlcmZsb3cnXSxcbiAgICAgIHN0eWxlczogWydoZWlnaHQnLCAndHJhbnNsYXRlWSddXG4gICAgfVxuICB9KTtcblxuICB2YXIgYXR0clRvZ2dsZSA9IGZ1bmN0aW9uIGF0dHJUb2dnbGUoZWxlbWVudCwgbmFtZSwgc3RhdGUpIHtcbiAgICB2YXIgZW5hYmxlZFZhbHVlID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogJyc7XG5cbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIGF0dHIoZWxlbWVudCwgbmFtZSwgZW5hYmxlZFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZXNldEZpbGVJbnB1dCA9IGZ1bmN0aW9uIHJlc2V0RmlsZUlucHV0KGlucHV0KSB7XG4gICAgLy8gbm8gdmFsdWUsIG5vIG5lZWQgdG8gcmVzZXRcbiAgICBpZiAoIWlucHV0IHx8IGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyBmb3IgbW9kZXJuIGJyb3dzZXJzXG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH0gY2F0Y2ggKGVycikge31cblxuICAgIC8vIGZvciBJRTEwXG4gICAgaWYgKGlucHV0LnZhbHVlKSB7XG4gICAgICAvLyBxdWlja2x5IGFwcGVuZCBpbnB1dCB0byB0ZW1wIGZvcm0gYW5kIHJlc2V0IGZvcm1cbiAgICAgIHZhciBmb3JtID0gY3JlYXRlRWxlbWVudCQxKCdmb3JtJyk7XG4gICAgICB2YXIgcGFyZW50Tm9kZSA9IGlucHV0LnBhcmVudE5vZGU7XG4gICAgICB2YXIgcmVmID0gaW5wdXQubmV4dFNpYmxpbmc7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgIGZvcm0ucmVzZXQoKTtcblxuICAgICAgLy8gcmUtaW5qZWN0IGlucHV0IHdoZXJlIGl0IG9yaWdpbmFsbHkgd2FzXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGlucHV0LCByZWYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBjcmVhdGUkMTIgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gICAgLy8gc2V0IGlkIHNvIGNhbiBiZSByZWZlcmVuY2VkIGZyb20gb3V0c2lkZSBsYWJlbHNcbiAgICByb290LmVsZW1lbnQuaWQgPSAnZmlsZXBvbmQtLWJyb3dzZXItJyArIHByb3BzLmlkO1xuXG4gICAgLy8gd2UgaGF2ZSB0byBsaW5rIHRoaXMgZWxlbWVudCB0byB0aGUgc3RhdHVzIGVsZW1lbnRcbiAgICBhdHRyKHJvb3QuZWxlbWVudCwgJ2FyaWEtY29udHJvbHMnLCAnZmlsZXBvbmQtLWFzc2lzdGFudC0nICsgcHJvcHMuaWQpO1xuXG4gICAgLy8gc2V0IGxhYmVsLCB3ZSB1c2UgbGFiZWxsZWQgYnkgYXMgb3RoZXJ3aXNlIHRoZSBzY3JlZW5yZWFkZXIgZG9lcyBub3QgcmVhZCB0aGUgXCJicm93c2VcIiB0ZXh0IGluIHRoZSBsYWJlbCAoYXMgaXQgaGFzIHRhYmluZGV4OiAwKVxuICAgIGF0dHIocm9vdC5lbGVtZW50LCAnYXJpYS1sYWJlbGxlZGJ5JywgJ2ZpbGVwb25kLS1kcm9wLWxhYmVsLScgKyBwcm9wcy5pZCk7XG5cbiAgICAvLyBoYW5kbGUgY2hhbmdlcyB0byB0aGUgaW5wdXQgZmllbGRcbiAgICByb290LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXJvb3QuZWxlbWVudC52YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGV4dHJhY3QgZmlsZXNcbiAgICAgIHZhciBmaWxlcyA9IFtdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShyb290LmVsZW1lbnQuZmlsZXMpKTtcblxuICAgICAgLy8gd2UgYWRkIGEgbGl0dGxlIGRlbGF5IHNvIHRoZSBPUyBmaWxlIHNlbGVjdCB3aW5kb3cgY2FuIG1vdmUgb3V0IG9mIHRoZSB3YXkgYmVmb3JlIHdlIGFkZCBvdXIgZmlsZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gbG9hZCBmaWxlc1xuICAgICAgICBwcm9wcy5vbmxvYWQoZmlsZXMpO1xuXG4gICAgICAgIC8vIHJlc2V0IGlucHV0LCBpdCdzIGp1c3QgZm9yIGV4cG9zaW5nIGEgbWV0aG9kIHRvIGRyb3AgZmlsZXMsIHNob3VsZCBub3QgcmV0YWluIGFueSBzdGF0ZVxuICAgICAgICByZXNldEZpbGVJbnB1dChyb290LmVsZW1lbnQpO1xuICAgICAgfSwgMjUwKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgc2V0QWNjZXB0ZWRGaWxlVHlwZXMgPSBmdW5jdGlvbiBzZXRBY2NlcHRlZEZpbGVUeXBlcyhfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYyLmFjdGlvbjtcblxuICAgIGF0dHJUb2dnbGUoXG4gICAgICByb290LmVsZW1lbnQsXG4gICAgICAnYWNjZXB0JyxcbiAgICAgICEhYWN0aW9uLnZhbHVlLFxuICAgICAgYWN0aW9uLnZhbHVlID8gYWN0aW9uLnZhbHVlLmpvaW4oJywnKSA6ICcnXG4gICAgKTtcbiAgfTtcblxuICB2YXIgdG9nZ2xlQWxsb3dNdWx0aXBsZSA9IGZ1bmN0aW9uIHRvZ2dsZUFsbG93TXVsdGlwbGUoX3JlZjMpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYzLnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmMy5hY3Rpb247XG5cbiAgICBhdHRyVG9nZ2xlKHJvb3QuZWxlbWVudCwgJ211bHRpcGxlJywgYWN0aW9uLnZhbHVlKTtcbiAgfTtcblxuICB2YXIgdG9nZ2xlQWxsb3dCcm93c2UkMSA9IGZ1bmN0aW9uIHRvZ2dsZUFsbG93QnJvd3NlKF9yZWY0KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNC5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjQuYWN0aW9uO1xuXG4gICAgYXR0clRvZ2dsZShyb290LmVsZW1lbnQsICdkaXNhYmxlZCcsICFhY3Rpb24udmFsdWUpO1xuICB9O1xuXG4gIHZhciB0b2dnbGVSZXF1aXJlZCA9IGZ1bmN0aW9uIHRvZ2dsZVJlcXVpcmVkKF9yZWY1KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNS5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjUuYWN0aW9uO1xuXG4gICAgLy8gd2FudCB0byByZW1vdmUgcmVxdWlyZWQsIGFsd2F5cyBwb3NzaWJsZVxuICAgIGlmICghYWN0aW9uLnZhbHVlKSB7XG4gICAgICBhdHRyVG9nZ2xlKHJvb3QuZWxlbWVudCwgJ3JlcXVpcmVkJywgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAocm9vdC5xdWVyeSgnR0VUX1RPVEFMX0lURU1TJykgPT09IDApIHtcbiAgICAgIC8vIGlmIHdhbnQgdG8gbWFrZSByZXF1aXJlZCwgb25seSBwb3NzaWJsZSB3aGVuIHplcm8gaXRlbXNcbiAgICAgIGF0dHJUb2dnbGUocm9vdC5lbGVtZW50LCAncmVxdWlyZWQnLCB0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNldENhcHR1cmVNZXRob2QgPSBmdW5jdGlvbiBzZXRDYXB0dXJlTWV0aG9kKF9yZWY2KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNi5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjYuYWN0aW9uO1xuXG4gICAgYXR0clRvZ2dsZShcbiAgICAgIHJvb3QuZWxlbWVudCxcbiAgICAgICdjYXB0dXJlJyxcbiAgICAgICEhYWN0aW9uLnZhbHVlLFxuICAgICAgYWN0aW9uLnZhbHVlID09PSB0cnVlID8gJycgOiBhY3Rpb24udmFsdWVcbiAgICApO1xuICB9O1xuXG4gIHZhciB1cGRhdGVSZXF1aXJlZFN0YXR1cyA9IGZ1bmN0aW9uIHVwZGF0ZVJlcXVpcmVkU3RhdHVzKF9yZWY4KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmOC5yb290O1xuXG4gICAgLy8gYWx3YXlzIHJlbW92ZSB0aGUgcmVxdWlyZWQgYXR0cmlidXRlIHdoZW4gbW9yZSB0aGFuIHplcm8gaXRlbXNcbiAgICBpZiAocm9vdC5xdWVyeSgnR0VUX1RPVEFMX0lURU1TJykgPiAwKSB7XG4gICAgICBhdHRyVG9nZ2xlKHJvb3QuZWxlbWVudCwgJ3JlcXVpcmVkJywgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAocm9vdC5xdWVyeSgnR0VUX1JFUVVJUkVEJykpIHtcbiAgICAgIC8vIGlmIHplcm8gaXRlbXMsIHdlIG9ubHkgYWRkIGl0IGlmIHRoZSBmaWVsZCBpcyByZXF1aXJlZFxuICAgICAgYXR0clRvZ2dsZShyb290LmVsZW1lbnQsICdyZXF1aXJlZCcsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgYnJvd3NlciA9IGNyZWF0ZVZpZXcoe1xuICAgIHRhZzogJ2lucHV0JyxcbiAgICBuYW1lOiAnYnJvd3NlcicsXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICB0eXBlOiAnZmlsZSdcbiAgICB9LFxuICAgIGNyZWF0ZTogY3JlYXRlJDEyLFxuICAgIHdyaXRlOiBjcmVhdGVSb3V0ZSh7XG4gICAgICBESURfQUREX0lURU06IHVwZGF0ZVJlcXVpcmVkU3RhdHVzLFxuICAgICAgRElEX1JFTU9WRV9JVEVNOiB1cGRhdGVSZXF1aXJlZFN0YXR1cyxcbiAgICAgIERJRF9TRVRfQUxMT1dfQlJPV1NFOiB0b2dnbGVBbGxvd0Jyb3dzZSQxLFxuICAgICAgRElEX1NFVF9BTExPV19NVUxUSVBMRTogdG9nZ2xlQWxsb3dNdWx0aXBsZSxcbiAgICAgIERJRF9TRVRfQUNDRVBURURfRklMRV9UWVBFUzogc2V0QWNjZXB0ZWRGaWxlVHlwZXMsXG4gICAgICBESURfU0VUX0NBUFRVUkVfTUVUSE9EOiBzZXRDYXB0dXJlTWV0aG9kLFxuICAgICAgRElEX1NFVF9SRVFVSVJFRDogdG9nZ2xlUmVxdWlyZWRcbiAgICB9KVxuICB9KTtcblxuICB2YXIgS2V5ID0ge1xuICAgIEVOVEVSOiAxMyxcbiAgICBTUEFDRTogMzJcbiAgfTtcblxuICB2YXIgY3JlYXRlJDEzID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcblxuICAgIC8vIGNyZWF0ZSB0aGUgbGFiZWwgYW5kIGxpbmsgaXQgdG8gdGhlIGZpbGUgYnJvd3NlclxuICAgIHZhciBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQkMSgnbGFiZWwnKTtcbiAgICBhdHRyKGxhYmVsLCAnZm9yJywgJ2ZpbGVwb25kLS1icm93c2VyLScgKyBwcm9wcy5pZCk7XG5cbiAgICAvLyB1c2UgZm9yIGxhYmVsaW5nIGZpbGUgaW5wdXQgKGFyaWEtbGFiZWxsZWRieSBvbiBmaWxlIGlucHV0KVxuICAgIGF0dHIobGFiZWwsICdpZCcsICdmaWxlcG9uZC0tZHJvcC1sYWJlbC0nICsgcHJvcHMuaWQpO1xuXG4gICAgLy8gaGlkZSB0aGUgbGFiZWwgZnJvbSBzY3JlZW5yZWFkZXJzLCB0aGUgaW5wdXQgZWxlbWVudCBoYXMgYW4gYXJpYS1sYWJlbFxuICAgIGF0dHIobGFiZWwsICdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAvLyBoYW5kbGUga2V5c1xuICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXkuRU5URVIgfHwgZS5rZXlDb2RlID09PSBLZXkuU1BBQ0UpIHtcbiAgICAgICAgLy8gc3RvcHMgZnJvbSB0cmlnZ2VyaW5nIHRoZSBlbGVtZW50IGEgc2Vjb25kIHRpbWVcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIGNsaWNrIGxpbmsgKHdpbGwgdGhlbiBpbiB0dXJuIGFjdGl2YXRlIGZpbGUgaW5wdXQpXG4gICAgICAgIHJvb3QucmVmLmxhYmVsLmNsaWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBhZGQhXG4gICAgcm9vdC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcm9vdC5yZWYubGFiZWwgPSBsYWJlbDtcbiAgfTtcblxuICB2YXIgdXBkYXRlTGFiZWxWYWx1ZSA9IGZ1bmN0aW9uIHVwZGF0ZUxhYmVsVmFsdWUobGFiZWwsIHZhbHVlKSB7XG4gICAgbGFiZWwuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgdmFyIGNsaWNrYWJsZSA9IGxhYmVsLnF1ZXJ5U2VsZWN0b3IoJy5maWxlcG9uZC0tbGFiZWwtYWN0aW9uJyk7XG4gICAgaWYgKGNsaWNrYWJsZSkge1xuICAgICAgYXR0cihjbGlja2FibGUsICd0YWJpbmRleCcsICcwJyk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICB2YXIgZHJvcExhYmVsID0gY3JlYXRlVmlldyh7XG4gICAgbmFtZTogJ2Ryb3AtbGFiZWwnLFxuICAgIGNyZWF0ZTogY3JlYXRlJDEzLFxuICAgIHdyaXRlOiBjcmVhdGVSb3V0ZSh7XG4gICAgICBESURfU0VUX0xBQkVMX0lETEU6IGZ1bmN0aW9uIERJRF9TRVRfTEFCRUxfSURMRShfcmVmMikge1xuICAgICAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICAgICAgYWN0aW9uID0gX3JlZjIuYWN0aW9uLFxuICAgICAgICAgIHByb3BzID0gX3JlZjIucHJvcHM7XG5cbiAgICAgICAgcHJvcHMuY2FwdGlvbiA9IHVwZGF0ZUxhYmVsVmFsdWUocm9vdC5yZWYubGFiZWwsIGFjdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfSksXG4gICAgbWl4aW5zOiB7XG4gICAgICBhcGlzOiBbJ2NhcHRpb24nXSxcbiAgICAgIHN0eWxlczogWydvcGFjaXR5JywgJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWSddLFxuICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICBvcGFjaXR5OiB7IHR5cGU6ICd0d2VlbicsIGR1cmF0aW9uOiAxNTAgfSxcbiAgICAgICAgdHJhbnNsYXRlWDogJ3NwcmluZycsXG4gICAgICAgIHRyYW5zbGF0ZVk6ICdzcHJpbmcnXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB2YXIgYmxvYiA9IGNyZWF0ZVZpZXcoe1xuICAgIG5hbWU6ICdkcmlwLWJsb2InLFxuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgbWl4aW5zOiB7XG4gICAgICBzdHlsZXM6IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnb3BhY2l0eSddLFxuICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICBzY2FsZVg6ICdzcHJpbmcnLFxuICAgICAgICBzY2FsZVk6ICdzcHJpbmcnLFxuICAgICAgICB0cmFuc2xhdGVYOiAnc3ByaW5nJyxcbiAgICAgICAgdHJhbnNsYXRlWTogJ3NwcmluZycsXG4gICAgICAgIG9wYWNpdHk6IHsgdHlwZTogJ3R3ZWVuJywgZHVyYXRpb246IDI1MCB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB2YXIgYWRkQmxvYiA9IGZ1bmN0aW9uIGFkZEJsb2IoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290O1xuXG4gICAgdmFyIGNlbnRlclggPSByb290LnJlY3QuZWxlbWVudC53aWR0aCAqIDAuNTtcbiAgICB2YXIgY2VudGVyWSA9IHJvb3QucmVjdC5lbGVtZW50LmhlaWdodCAqIDAuNTtcblxuICAgIHJvb3QucmVmLmJsb2IgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KGJsb2IsIHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgc2NhbGVYOiAyLjUsXG4gICAgICAgIHNjYWxlWTogMi41LFxuICAgICAgICB0cmFuc2xhdGVYOiBjZW50ZXJYLFxuICAgICAgICB0cmFuc2xhdGVZOiBjZW50ZXJZXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgdmFyIG1vdmVCbG9iID0gZnVuY3Rpb24gbW92ZUJsb2IoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmMi5hY3Rpb247XG5cbiAgICBpZiAoIXJvb3QucmVmLmJsb2IpIHtcbiAgICAgIGFkZEJsb2IoeyByb290OiByb290IH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJvb3QucmVmLmJsb2IudHJhbnNsYXRlWCA9IGFjdGlvbi5wb3NpdGlvbi5zY29wZUxlZnQ7XG4gICAgcm9vdC5yZWYuYmxvYi50cmFuc2xhdGVZID0gYWN0aW9uLnBvc2l0aW9uLnNjb3BlVG9wO1xuICAgIHJvb3QucmVmLmJsb2Iuc2NhbGVYID0gMTtcbiAgICByb290LnJlZi5ibG9iLnNjYWxlWSA9IDE7XG4gICAgcm9vdC5yZWYuYmxvYi5vcGFjaXR5ID0gMTtcbiAgfTtcblxuICB2YXIgaGlkZUJsb2IgPSBmdW5jdGlvbiBoaWRlQmxvYihfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdDtcblxuICAgIGlmICghcm9vdC5yZWYuYmxvYikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByb290LnJlZi5ibG9iLm9wYWNpdHkgPSAwO1xuICB9O1xuXG4gIHZhciBleHBsb2RlQmxvYiA9IGZ1bmN0aW9uIGV4cGxvZGVCbG9iKF9yZWY0KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNC5yb290O1xuXG4gICAgaWYgKCFyb290LnJlZi5ibG9iKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJvb3QucmVmLmJsb2Iuc2NhbGVYID0gMi41O1xuICAgIHJvb3QucmVmLmJsb2Iuc2NhbGVZID0gMi41O1xuICAgIHJvb3QucmVmLmJsb2Iub3BhY2l0eSA9IDA7XG4gIH07XG5cbiAgdmFyIHdyaXRlJDggPSBmdW5jdGlvbiB3cml0ZShfcmVmNSkge1xuICAgIHZhciByb290ID0gX3JlZjUucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZjUucHJvcHMsXG4gICAgICBhY3Rpb25zID0gX3JlZjUuYWN0aW9ucztcblxuICAgIHJvdXRlJDQoeyByb290OiByb290LCBwcm9wczogcHJvcHMsIGFjdGlvbnM6IGFjdGlvbnMgfSk7XG5cbiAgICB2YXIgYmxvYiQkMSA9IHJvb3QucmVmLmJsb2I7XG5cbiAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDAgJiYgYmxvYiQkMSAmJiBibG9iJCQxLm9wYWNpdHkgPT09IDApIHtcbiAgICAgIHJvb3QucmVtb3ZlQ2hpbGRWaWV3KGJsb2IkJDEpO1xuICAgICAgcm9vdC5yZWYuYmxvYiA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHZhciByb3V0ZSQ0ID0gY3JlYXRlUm91dGUoe1xuICAgIERJRF9EUkFHOiBtb3ZlQmxvYixcbiAgICBESURfRFJPUDogZXhwbG9kZUJsb2IsXG4gICAgRElEX0VORF9EUkFHOiBoaWRlQmxvYlxuICB9KTtcblxuICB2YXIgZHJpcCA9IGNyZWF0ZVZpZXcoe1xuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgbmFtZTogJ2RyaXAnLFxuICAgIHdyaXRlOiB3cml0ZSQ4XG4gIH0pO1xuXG4gIHZhciBnZXRSb290Tm9kZSA9IGZ1bmN0aW9uIGdldFJvb3ROb2RlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gJ2dldFJvb3ROb2RlJyBpbiBlbGVtZW50ID8gZWxlbWVudC5nZXRSb290Tm9kZSgpIDogZG9jdW1lbnQ7XG4gIH07XG5cbiAgdmFyIHJlcXVlc3REYXRhVHJhbnNmZXJJdGVtcyA9IGZ1bmN0aW9uIHJlcXVlc3REYXRhVHJhbnNmZXJJdGVtcyhcbiAgICBkYXRhVHJhbnNmZXJcbiAgKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLy8gdHJ5IHRvIGdldCBsaW5rcyBmcm9tIHRyYW5zZmVyLCBpZiBmb3VuZCwgd2UnbGwgZXhpdCBpbW1pZGlhdGVseVxuICAgICAgLy8gYXMgb25seSBvbmUgbGluayBjYW4gYmUgZHJhZ2dlZCBhdCBvbmNlXG4gICAgICB2YXIgbGlua3MgPSBnZXRMaW5rcyhkYXRhVHJhbnNmZXIpO1xuICAgICAgaWYgKGxpbmtzLmxlbmd0aCkge1xuICAgICAgICByZXNvbHZlKGxpbmtzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB0cnkgdG8gZ2V0IGZpbGVzIGZyb20gdGhlIHRyYW5zZmVyXG4gICAgICBnZXRGaWxlcyhkYXRhVHJhbnNmZXIpLnRoZW4ocmVzb2x2ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIGZpbGVzIGZyb20gYSBEYXRhVHJhbnNmZXIgb2JqZWN0XG4gICAqL1xuICB2YXIgZ2V0RmlsZXMgPSBmdW5jdGlvbiBnZXRGaWxlcyhkYXRhVHJhbnNmZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvLyBnZXQgdGhlIHRyYW5zZmVyIGl0ZW1zIGFzIHByb21pc2VzXG4gICAgICB2YXIgcHJvbWlzZWRGaWxlcyA9IChkYXRhVHJhbnNmZXIuaXRlbXNcbiAgICAgICAgPyBbXS5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkoZGF0YVRyYW5zZmVyLml0ZW1zKSlcbiAgICAgICAgOiBbXVxuICAgICAgKVxuICAgICAgICAvLyBvbmx5IGtlZXAgZmlsZSBzeXN0ZW0gaXRlbXMgKGZpbGVzIGFuZCBkaXJlY3RvcmllcylcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGlzRmlsZVN5c3RlbUl0ZW0oaXRlbSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gbWFwIGVhY2ggaXRlbSB0byBwcm9taXNlXG4gICAgICAgIC5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHJldHVybiBnZXRGaWxlc0Zyb21JdGVtKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgLy8gaWYgaXMgZW1wdHksIHNlZSBpZiB3ZSBjYW4gZXh0cmFjdCBzb21lIGluZm8gZnJvbSB0aGUgZmlsZXMgcHJvcGVydHkgYXMgYSBmYWxsYmFja1xuICAgICAgaWYgKCFwcm9taXNlZEZpbGVzLmxlbmd0aCkge1xuICAgICAgICAvLyBUT0RPOiB0ZXN0IGZvciBkaXJlY3RvcmllcyAoc2hvdWxkIG5vdCBiZSBhbGxvd2VkKVxuICAgICAgICAvLyBVc2UgRmlsZVJlYWRlciwgcHJvYmxlbSBpcyB0aGF0IHRoZSBmaWxlcyBwcm9wZXJ0eSBnZXRzIGxvc3QgaW4gdGhlIHByb2Nlc3NcblxuICAgICAgICByZXNvbHZlKFtdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShkYXRhVHJhbnNmZXIuZmlsZXMpKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZG9uZSFcbiAgICAgIFByb21pc2UuYWxsKHByb21pc2VkRmlsZXMpLnRoZW4oZnVuY3Rpb24ocmV0dXJlbmRGaWxlR3JvdXBzKSB7XG4gICAgICAgIC8vIGZsYXR0ZW4gZ3JvdXBzXG4gICAgICAgIHZhciBmaWxlcyA9IFtdO1xuICAgICAgICByZXR1cmVuZEZpbGVHcm91cHMuZm9yRWFjaChmdW5jdGlvbihncm91cCkge1xuICAgICAgICAgIGZpbGVzLnB1c2guYXBwbHkoZmlsZXMsIHRvQ29uc3VtYWJsZUFycmF5KGdyb3VwKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGRvbmUgKGZpbHRlciBvdXQgZW1wdHkgZmlsZXMpIVxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIGZpbGVzLmZpbHRlcihmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsZTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGlzRmlsZVN5c3RlbUl0ZW0gPSBmdW5jdGlvbiBpc0ZpbGVTeXN0ZW1JdGVtKGl0ZW0pIHtcbiAgICBpZiAoaXNFbnRyeShpdGVtKSkge1xuICAgICAgdmFyIGVudHJ5ID0gZ2V0QXNFbnRyeShpdGVtKTtcbiAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICByZXR1cm4gZW50cnkuaXNGaWxlIHx8IGVudHJ5LmlzRGlyZWN0b3J5O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXRlbS5raW5kID09PSAnZmlsZSc7XG4gIH07XG5cbiAgdmFyIGdldEZpbGVzRnJvbUl0ZW0gPSBmdW5jdGlvbiBnZXRGaWxlc0Zyb21JdGVtKGl0ZW0pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAoaXNEaXJlY3RvcnlFbnRyeShpdGVtKSkge1xuICAgICAgICBnZXRGaWxlc0luRGlyZWN0b3J5KGdldEFzRW50cnkoaXRlbSkpLnRoZW4ocmVzb2x2ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVzb2x2ZShbaXRlbS5nZXRBc0ZpbGUoKV0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBnZXRGaWxlc0luRGlyZWN0b3J5ID0gZnVuY3Rpb24gZ2V0RmlsZXNJbkRpcmVjdG9yeShlbnRyeSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBmaWxlcyA9IFtdO1xuXG4gICAgICAvLyB0aGUgdG90YWwgZW50cmllcyB0byByZWFkXG4gICAgICB2YXIgdG90YWxGaWxlc0ZvdW5kID0gMDtcblxuICAgICAgLy8gdGhlIHJlY3Vyc2l2ZSBmdW5jdGlvblxuICAgICAgdmFyIHJlYWRFbnRyaWVzID0gZnVuY3Rpb24gcmVhZEVudHJpZXMoZGlyRW50cnkpIHtcbiAgICAgICAgdmFyIGRpcmVjdG9yeVJlYWRlciA9IGRpckVudHJ5LmNyZWF0ZVJlYWRlcigpO1xuICAgICAgICBkaXJlY3RvcnlSZWFkZXIucmVhZEVudHJpZXMoZnVuY3Rpb24oZW50cmllcykge1xuICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgLy8gcmVjdXJzaXZlbHkgcmVhZCBtb3JlIGRpcmVjdG9yaWVzXG4gICAgICAgICAgICBpZiAoZW50cnkuaXNEaXJlY3RvcnkpIHtcbiAgICAgICAgICAgICAgcmVhZEVudHJpZXMoZW50cnkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gcmVhZCBhcyBmaWxlXG4gICAgICAgICAgICAgIHRvdGFsRmlsZXNGb3VuZCsrO1xuICAgICAgICAgICAgICBlbnRyeS5maWxlKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgICAgICBmaWxlcy5wdXNoKGZpbGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsRmlsZXNGb3VuZCA9PT0gZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKGZpbGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIC8vIGdvIVxuICAgICAgcmVhZEVudHJpZXMoZW50cnkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBpc0RpcmVjdG9yeUVudHJ5ID0gZnVuY3Rpb24gaXNEaXJlY3RvcnlFbnRyeShpdGVtKSB7XG4gICAgcmV0dXJuIGlzRW50cnkoaXRlbSkgJiYgKGdldEFzRW50cnkoaXRlbSkgfHwge30pLmlzRGlyZWN0b3J5O1xuICB9O1xuXG4gIHZhciBpc0VudHJ5ID0gZnVuY3Rpb24gaXNFbnRyeShpdGVtKSB7XG4gICAgcmV0dXJuICd3ZWJraXRHZXRBc0VudHJ5JyBpbiBpdGVtO1xuICB9O1xuXG4gIHZhciBnZXRBc0VudHJ5ID0gZnVuY3Rpb24gZ2V0QXNFbnRyeShpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0ud2Via2l0R2V0QXNFbnRyeSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyBsaW5rcyBmcm9tIGEgRGF0YVRyYW5zZmVyIG9iamVjdFxuICAgKi9cbiAgdmFyIGdldExpbmtzID0gZnVuY3Rpb24gZ2V0TGlua3MoZGF0YVRyYW5zZmVyKSB7XG4gICAgdmFyIGxpbmtzID0gW107XG4gICAgdHJ5IHtcbiAgICAgIC8vIGxvb2sgaW4gbWV0YSBkYXRhIHByb3BlcnR5XG4gICAgICBsaW5rcyA9IGdldExpbmtzRnJvbVRyYW5zZmVyTWV0YURhdGEoZGF0YVRyYW5zZmVyKTtcbiAgICAgIGlmIChsaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGxpbmtzO1xuICAgICAgfVxuICAgICAgbGlua3MgPSBnZXRMaW5rc0Zyb21UcmFuc2ZlclVSTERhdGEoZGF0YVRyYW5zZmVyKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBub3BlIG5vcGUgbm9wZSAocHJvYmFibHkgSUUgdHJvdWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIGxpbmtzO1xuICB9O1xuXG4gIHZhciBnZXRMaW5rc0Zyb21UcmFuc2ZlclVSTERhdGEgPSBmdW5jdGlvbiBnZXRMaW5rc0Zyb21UcmFuc2ZlclVSTERhdGEoXG4gICAgZGF0YVRyYW5zZmVyXG4gICkge1xuICAgIHZhciBkYXRhID0gZGF0YVRyYW5zZmVyLmdldERhdGEoJ3VybCcpO1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbZGF0YV07XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfTtcblxuICB2YXIgZ2V0TGlua3NGcm9tVHJhbnNmZXJNZXRhRGF0YSA9IGZ1bmN0aW9uIGdldExpbmtzRnJvbVRyYW5zZmVyTWV0YURhdGEoXG4gICAgZGF0YVRyYW5zZmVyXG4gICkge1xuICAgIHZhciBkYXRhID0gZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvaHRtbCcpO1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgIHZhciBtYXRjaGVzID0gZGF0YS5tYXRjaCgvc3JjXFxzKj1cXHMqXCIoLis/KVwiLyk7XG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gW21hdGNoZXNbMV1dO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH07XG5cbiAgdmFyIGRyYWdORHJvcE9ic2VydmVycyA9IFtdO1xuXG4gIHZhciBldmVudFBvc2l0aW9uID0gZnVuY3Rpb24gZXZlbnRQb3NpdGlvbihlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2VMZWZ0OiBlLnBhZ2VYLFxuICAgICAgcGFnZVRvcDogZS5wYWdlWSxcbiAgICAgIHNjb3BlTGVmdDogZS5sYXllclggfHwgZS5vZmZzZXRYLFxuICAgICAgc2NvcGVUb3A6IGUubGF5ZXJZIHx8IGUub2Zmc2V0WVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZURyYWdORHJvcENsaWVudCA9IGZ1bmN0aW9uIGNyZWF0ZURyYWdORHJvcENsaWVudChcbiAgICBlbGVtZW50LFxuICAgIHNjb3BlVG9PYnNlcnZlLFxuICAgIGZpbHRlckVsZW1lbnRcbiAgKSB7XG4gICAgdmFyIG9ic2VydmVyID0gZ2V0RHJhZ05Ecm9wT2JzZXJ2ZXIoc2NvcGVUb09ic2VydmUpO1xuXG4gICAgdmFyIGNsaWVudCA9IHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICBmaWx0ZXJFbGVtZW50OiBmaWx0ZXJFbGVtZW50LFxuICAgICAgc3RhdGU6IG51bGwsXG4gICAgICBvbmRyb3A6IGZ1bmN0aW9uIG9uZHJvcCgpIHt9LFxuICAgICAgb25lbnRlcjogZnVuY3Rpb24gb25lbnRlcigpIHt9LFxuICAgICAgb25kcmFnOiBmdW5jdGlvbiBvbmRyYWcoKSB7fSxcbiAgICAgIG9uZXhpdDogZnVuY3Rpb24gb25leGl0KCkge30sXG4gICAgICBvbmxvYWQ6IGZ1bmN0aW9uIG9ubG9hZCgpIHt9LFxuICAgICAgYWxsb3dkcm9wOiBmdW5jdGlvbiBhbGxvd2Ryb3AoKSB7fVxuICAgIH07XG5cbiAgICBjbGllbnQuZGVzdHJveSA9IG9ic2VydmVyLmFkZExpc3RlbmVyKGNsaWVudCk7XG5cbiAgICByZXR1cm4gY2xpZW50O1xuICB9O1xuXG4gIHZhciBnZXREcmFnTkRyb3BPYnNlcnZlciA9IGZ1bmN0aW9uIGdldERyYWdORHJvcE9ic2VydmVyKGVsZW1lbnQpIHtcbiAgICAvLyBzZWUgaWYgYWxyZWFkeSBleGlzdHMsIGlmIHNvLCByZXR1cm5cbiAgICB2YXIgb2JzZXJ2ZXIgPSBkcmFnTkRyb3BPYnNlcnZlcnMuZmluZChmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5lbGVtZW50ID09PSBlbGVtZW50O1xuICAgIH0pO1xuICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgcmV0dXJuIG9ic2VydmVyO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBuZXcgb2JzZXJ2ZXIsIGRvZXMgbm90IHlldCBleGlzdCBmb3IgdGhpcyBlbGVtZW50XG4gICAgdmFyIG5ld09ic2VydmVyID0gY3JlYXRlRHJhZ05Ecm9wT2JzZXJ2ZXIoZWxlbWVudCk7XG4gICAgZHJhZ05Ecm9wT2JzZXJ2ZXJzLnB1c2gobmV3T2JzZXJ2ZXIpO1xuICAgIHJldHVybiBuZXdPYnNlcnZlcjtcbiAgfTtcblxuICB2YXIgY3JlYXRlRHJhZ05Ecm9wT2JzZXJ2ZXIgPSBmdW5jdGlvbiBjcmVhdGVEcmFnTkRyb3BPYnNlcnZlcihlbGVtZW50KSB7XG4gICAgdmFyIGNsaWVudHMgPSBbXTtcblxuICAgIHZhciByb3V0ZXMgPSB7XG4gICAgICBkcmFnZW50ZXI6IGRyYWdlbnRlcixcbiAgICAgIGRyYWdvdmVyOiBkcmFnb3ZlcixcbiAgICAgIGRyYWdsZWF2ZTogZHJhZ2xlYXZlLFxuICAgICAgZHJvcDogZHJvcFxuICAgIH07XG5cbiAgICB2YXIgaGFuZGxlcnMgPSB7fTtcblxuICAgIGZvcmluKHJvdXRlcywgZnVuY3Rpb24oZXZlbnQsIGNyZWF0ZUhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXJzW2V2ZW50XSA9IGNyZWF0ZUhhbmRsZXIoZWxlbWVudCwgY2xpZW50cyk7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXJzW2V2ZW50XSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgdmFyIG9ic2VydmVyID0ge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIGFkZExpc3RlbmVyOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcihjbGllbnQpIHtcbiAgICAgICAgLy8gYWRkIGFzIGNsaWVudFxuICAgICAgICBjbGllbnRzLnB1c2goY2xpZW50KTtcblxuICAgICAgICAvLyByZXR1cm4gcmVtb3ZlTGlzdGVuZXIgZnVuY3Rpb25cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHJlbW92ZSBjbGllbnRcbiAgICAgICAgICBjbGllbnRzLnNwbGljZShjbGllbnRzLmluZGV4T2YoY2xpZW50KSwgMSk7XG5cbiAgICAgICAgICAvLyBpZiBubyBtb3JlIGNsaWVudHMsIGNsZWFuIHVwIG9ic2VydmVyXG4gICAgICAgICAgaWYgKGNsaWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkcmFnTkRyb3BPYnNlcnZlcnMuc3BsaWNlKGRyYWdORHJvcE9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKSwgMSk7XG5cbiAgICAgICAgICAgIGZvcmluKHJvdXRlcywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyc1tldmVudF0sIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIG9ic2VydmVyO1xuICB9O1xuXG4gIHZhciBpc0V2ZW50VGFyZ2V0ID0gZnVuY3Rpb24gaXNFdmVudFRhcmdldChlLCB0YXJnZXQpIHtcbiAgICAvLyBnZXQgcm9vdFxuICAgIHZhciByb290ID0gZ2V0Um9vdE5vZGUodGFyZ2V0KTtcblxuICAgIC8vIGdldCBlbGVtZW50IGF0IHBvc2l0aW9uXG4gICAgdmFyIGVsZW1lbnRBdFBvc2l0aW9uID0gcm9vdC5lbGVtZW50RnJvbVBvaW50KFxuICAgICAgZS5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgIGUucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICApO1xuXG4gICAgLy8gdGVzdCBpZiB0YXJnZXQgaXMgdGhlIGVsZW1lbnQgb3IgaWYgb25lIG9mIGl0cyBjaGlsZHJlbiBpc1xuICAgIHJldHVybiBlbGVtZW50QXRQb3NpdGlvbiA9PT0gdGFyZ2V0IHx8IHRhcmdldC5jb250YWlucyhlbGVtZW50QXRQb3NpdGlvbik7XG4gIH07XG5cbiAgdmFyIGluaXRpYWxUYXJnZXQgPSBudWxsO1xuXG4gIHZhciBzZXREcm9wRWZmZWN0ID0gZnVuY3Rpb24gc2V0RHJvcEVmZmVjdChkYXRhVHJhbnNmZXIsIGVmZmVjdCkge1xuICAgIC8vIGlzIGluIHRyeSBjYXRjaCBhcyBJRTExIHdpbGwgdGhyb3cgZXJyb3IgaWYgbm90XG4gICAgdHJ5IHtcbiAgICAgIGRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gZWZmZWN0O1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH07XG5cbiAgdmFyIGRyYWdlbnRlciA9IGZ1bmN0aW9uIGRyYWdlbnRlcihyb290LCBjbGllbnRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaW5pdGlhbFRhcmdldCA9IGUudGFyZ2V0O1xuXG4gICAgICBjbGllbnRzLmZvckVhY2goZnVuY3Rpb24oY2xpZW50KSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gY2xpZW50LmVsZW1lbnQsXG4gICAgICAgICAgb25lbnRlciA9IGNsaWVudC5vbmVudGVyO1xuXG4gICAgICAgIGlmIChpc0V2ZW50VGFyZ2V0KGUsIGVsZW1lbnQpKSB7XG4gICAgICAgICAgY2xpZW50LnN0YXRlID0gJ2VudGVyJztcblxuICAgICAgICAgIC8vIGZpcmUgZW50ZXIgZXZlbnRcbiAgICAgICAgICBvbmVudGVyKGV2ZW50UG9zaXRpb24oZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBkcmFnb3ZlciA9IGZ1bmN0aW9uIGRyYWdvdmVyKHJvb3QsIGNsaWVudHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgZGF0YVRyYW5zZmVyID0gZS5kYXRhVHJhbnNmZXI7XG5cbiAgICAgIHJlcXVlc3REYXRhVHJhbnNmZXJJdGVtcyhkYXRhVHJhbnNmZXIpLnRoZW4oZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgICAgdmFyIG92ZXJEcm9wVGFyZ2V0ID0gZmFsc2U7XG5cbiAgICAgICAgY2xpZW50cy5zb21lKGZ1bmN0aW9uKGNsaWVudCkge1xuICAgICAgICAgIHZhciBmaWx0ZXJFbGVtZW50ID0gY2xpZW50LmZpbHRlckVsZW1lbnQsXG4gICAgICAgICAgICBlbGVtZW50ID0gY2xpZW50LmVsZW1lbnQsXG4gICAgICAgICAgICBvbmVudGVyID0gY2xpZW50Lm9uZW50ZXIsXG4gICAgICAgICAgICBvbmV4aXQgPSBjbGllbnQub25leGl0LFxuICAgICAgICAgICAgb25kcmFnID0gY2xpZW50Lm9uZHJhZyxcbiAgICAgICAgICAgIGFsbG93ZHJvcCA9IGNsaWVudC5hbGxvd2Ryb3A7XG5cbiAgICAgICAgICAvLyBieSBkZWZhdWx0IHdlIGNhbiBkcm9wXG5cbiAgICAgICAgICBzZXREcm9wRWZmZWN0KGRhdGFUcmFuc2ZlciwgJ2NvcHknKTtcblxuICAgICAgICAgIC8vIGFsbG93IHRyYW5zZmVyIG9mIHRoZXNlIGl0ZW1zXG4gICAgICAgICAgdmFyIGFsbG93c1RyYW5zZmVyID0gYWxsb3dkcm9wKGl0ZW1zKTtcblxuICAgICAgICAgIC8vIG9ubHkgdXNlZCB3aGVuIGNhbiBiZSBkcm9wcGVkIG9uIHBhZ2VcbiAgICAgICAgICBpZiAoIWFsbG93c1RyYW5zZmVyKSB7XG4gICAgICAgICAgICBzZXREcm9wRWZmZWN0KGRhdGFUcmFuc2ZlciwgJ25vbmUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB0YXJnZXR0aW5nIHRoaXMgY2xpZW50XG4gICAgICAgICAgaWYgKGlzRXZlbnRUYXJnZXQoZSwgZWxlbWVudCkpIHtcbiAgICAgICAgICAgIG92ZXJEcm9wVGFyZ2V0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gaGFkIG5vIHByZXZpb3VzIHN0YXRlLCBtZWFucyB3ZSBhcmUgZW50ZXJpbmcgdGhpcyBjbGllbnRcbiAgICAgICAgICAgIGlmIChjbGllbnQuc3RhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY2xpZW50LnN0YXRlID0gJ2VudGVyJztcbiAgICAgICAgICAgICAgb25lbnRlcihldmVudFBvc2l0aW9uKGUpKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBub3cgb3ZlciBlbGVtZW50IChubyBtYXR0ZXIgaWYgaXQgYWxsb3dzIHRoZSBkcm9wIG9yIG5vdClcbiAgICAgICAgICAgIGNsaWVudC5zdGF0ZSA9ICdvdmVyJztcblxuICAgICAgICAgICAgLy8gbmVlZHMgdG8gYWxsb3cgdHJhbnNmZXJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJFbGVtZW50ICYmICFhbGxvd3NUcmFuc2Zlcikge1xuICAgICAgICAgICAgICBzZXREcm9wRWZmZWN0KGRhdGFUcmFuc2ZlciwgJ25vbmUnKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkcmFnZ2luZ1xuICAgICAgICAgICAgb25kcmFnKGV2ZW50UG9zaXRpb24oZSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzaG91bGQgYmUgb3ZlciBhbiBlbGVtZW50IHRvIGRyb3BcbiAgICAgICAgICAgIGlmIChmaWx0ZXJFbGVtZW50ICYmICFvdmVyRHJvcFRhcmdldCkge1xuICAgICAgICAgICAgICBzZXREcm9wRWZmZWN0KGRhdGFUcmFuc2ZlciwgJ25vbmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbWlnaHQgaGF2ZSBqdXN0IGxlZnQgdGhpcyBjbGllbnQ/XG4gICAgICAgICAgICBpZiAoY2xpZW50LnN0YXRlKSB7XG4gICAgICAgICAgICAgIGNsaWVudC5zdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgIG9uZXhpdChldmVudFBvc2l0aW9uKGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgZHJvcCA9IGZ1bmN0aW9uIGRyb3Aocm9vdCwgY2xpZW50cykge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHZhciBkYXRhVHJhbnNmZXIgPSBlLmRhdGFUcmFuc2ZlcjtcbiAgICAgIHJlcXVlc3REYXRhVHJhbnNmZXJJdGVtcyhkYXRhVHJhbnNmZXIpLnRoZW4oZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgICAgY2xpZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNsaWVudCkge1xuICAgICAgICAgIHZhciBmaWx0ZXJFbGVtZW50ID0gY2xpZW50LmZpbHRlckVsZW1lbnQsXG4gICAgICAgICAgICBlbGVtZW50ID0gY2xpZW50LmVsZW1lbnQsXG4gICAgICAgICAgICBvbmRyb3AgPSBjbGllbnQub25kcm9wLFxuICAgICAgICAgICAgb25leGl0ID0gY2xpZW50Lm9uZXhpdCxcbiAgICAgICAgICAgIGFsbG93ZHJvcCA9IGNsaWVudC5hbGxvd2Ryb3A7XG5cbiAgICAgICAgICBjbGllbnQuc3RhdGUgPSBudWxsO1xuXG4gICAgICAgICAgdmFyIGFsbG93c1RyYW5zZmVyID0gYWxsb3dkcm9wKGl0ZW1zKTtcblxuICAgICAgICAgIC8vIG5vIHRyYW5zZmVyIGZvciB0aGlzIGNsaWVudFxuICAgICAgICAgIGlmICghYWxsb3dzVHJhbnNmZXIpIHtcbiAgICAgICAgICAgIG9uZXhpdChldmVudFBvc2l0aW9uKGUpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBpZiB3ZSdyZSBmaWx0ZXJpbmcgb24gZWxlbWVudCB3ZSBuZWVkIHRvIGJlIG92ZXIgdGhlIGVsZW1lbnQgdG8gZHJvcFxuICAgICAgICAgIGlmIChmaWx0ZXJFbGVtZW50ICYmICFpc0V2ZW50VGFyZ2V0KGUsIGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb25kcm9wKGV2ZW50UG9zaXRpb24oZSksIGl0ZW1zKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBkcmFnbGVhdmUgPSBmdW5jdGlvbiBkcmFnbGVhdmUocm9vdCwgY2xpZW50cykge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoaW5pdGlhbFRhcmdldCAhPT0gZS50YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbGllbnRzLmZvckVhY2goZnVuY3Rpb24oY2xpZW50KSB7XG4gICAgICAgIHZhciBvbmV4aXQgPSBjbGllbnQub25leGl0O1xuXG4gICAgICAgIGNsaWVudC5zdGF0ZSA9IG51bGw7XG5cbiAgICAgICAgb25leGl0KGV2ZW50UG9zaXRpb24oZSkpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY3JlYXRlSG9wcGVyID0gZnVuY3Rpb24gY3JlYXRlSG9wcGVyKHNjb3BlLCB2YWxpZGF0ZUl0ZW1zLCBvcHRpb25zKSB7XG4gICAgLy8gaXMgbm93IGhvcHBlciBzY29wZVxuICAgIHNjb3BlLmNsYXNzTGlzdC5hZGQoJ2ZpbGVwb25kLS1ob3BwZXInKTtcblxuICAgIC8vIHNob3J0Y3V0c1xuICAgIHZhciBjYXRjaGVzRHJvcHNPblBhZ2UgPSBvcHRpb25zLmNhdGNoZXNEcm9wc09uUGFnZSxcbiAgICAgIHJlcXVpcmVzRHJvcE9uRWxlbWVudCA9IG9wdGlvbnMucmVxdWlyZXNEcm9wT25FbGVtZW50O1xuXG4gICAgLy8gY3JlYXRlIGEgZG5kIGNsaWVudFxuXG4gICAgdmFyIGNsaWVudCA9IGNyZWF0ZURyYWdORHJvcENsaWVudChcbiAgICAgIHNjb3BlLFxuICAgICAgY2F0Y2hlc0Ryb3BzT25QYWdlID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogc2NvcGUsXG4gICAgICByZXF1aXJlc0Ryb3BPbkVsZW1lbnRcbiAgICApO1xuXG4gICAgLy8gY3VycmVudCBjbGllbnQgc3RhdGVcbiAgICB2YXIgbGFzdFN0YXRlID0gJyc7XG4gICAgdmFyIGN1cnJlbnRTdGF0ZSA9ICcnO1xuXG4gICAgLy8gZGV0ZXJtaW5lcyBpZiBhIGZpbGUgbWF5IGJlIGRyb3BwZWRcbiAgICBjbGllbnQuYWxsb3dkcm9wID0gZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgIC8vIFRPRE86IGlmIHdlIGNhbiwgdGhyb3cgZXJyb3IgdG8gaW5kaWNhdGUgdGhlIGl0ZW1zIGNhbm5vdCBieSBkcm9wcGVkXG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZUl0ZW1zKGl0ZW1zKTtcbiAgICB9O1xuXG4gICAgY2xpZW50Lm9uZHJvcCA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBpdGVtcykge1xuICAgICAgaWYgKCF2YWxpZGF0ZUl0ZW1zKGl0ZW1zKSkge1xuICAgICAgICBhcGkub25kcmFnZW5kKHBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50U3RhdGUgPSAnZHJhZy1kcm9wJztcblxuICAgICAgYXBpLm9ubG9hZChpdGVtcywgcG9zaXRpb24pO1xuICAgIH07XG5cbiAgICBjbGllbnQub25kcmFnID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgIGFwaS5vbmRyYWcocG9zaXRpb24pO1xuICAgIH07XG5cbiAgICBjbGllbnQub25lbnRlciA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICBjdXJyZW50U3RhdGUgPSAnZHJhZy1vdmVyJztcblxuICAgICAgYXBpLm9uZHJhZ3N0YXJ0KHBvc2l0aW9uKTtcbiAgICB9O1xuXG4gICAgY2xpZW50Lm9uZXhpdCA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICBjdXJyZW50U3RhdGUgPSAnZHJhZy1leGl0JztcblxuICAgICAgYXBpLm9uZHJhZ2VuZChwb3NpdGlvbik7XG4gICAgfTtcblxuICAgIHZhciBhcGkgPSB7XG4gICAgICB1cGRhdGVIb3BwZXJTdGF0ZTogZnVuY3Rpb24gdXBkYXRlSG9wcGVyU3RhdGUoKSB7XG4gICAgICAgIGlmIChsYXN0U3RhdGUgIT09IGN1cnJlbnRTdGF0ZSkge1xuICAgICAgICAgIHNjb3BlLmRhdGFzZXQuaG9wcGVyU3RhdGUgPSBjdXJyZW50U3RhdGU7XG4gICAgICAgICAgbGFzdFN0YXRlID0gY3VycmVudFN0YXRlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25sb2FkOiBmdW5jdGlvbiBvbmxvYWQoKSB7fSxcbiAgICAgIG9uZHJhZ3N0YXJ0OiBmdW5jdGlvbiBvbmRyYWdzdGFydCgpIHt9LFxuICAgICAgb25kcmFnOiBmdW5jdGlvbiBvbmRyYWcoKSB7fSxcbiAgICAgIG9uZHJhZ2VuZDogZnVuY3Rpb24gb25kcmFnZW5kKCkge30sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAvLyBkZXN0cm95IGNsaWVudFxuICAgICAgICBjbGllbnQuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gYXBpO1xuICB9O1xuXG4gIHZhciBsaXN0ZW5pbmcgPSBmYWxzZTtcbiAgdmFyIGxpc3RlbmVycyQxID0gW107XG5cbiAgdmFyIGhhbmRsZVBhc3RlID0gZnVuY3Rpb24gaGFuZGxlUGFzdGUoZSkge1xuICAgIHJlcXVlc3REYXRhVHJhbnNmZXJJdGVtcyhlLmNsaXBib2FyZERhdGEpLnRoZW4oZnVuY3Rpb24oZmlsZXMpIHtcbiAgICAgIC8vIG5vIGZpbGVzIHJlY2VpdmVkXG4gICAgICBpZiAoIWZpbGVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIG5vdGlmeSBsaXN0ZW5lcnMgb2YgcmVjZWl2ZWQgZmlsZXNcbiAgICAgIGxpc3RlbmVycyQxLmZvckVhY2goZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyKGZpbGVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4oY2IpIHtcbiAgICAvLyBjYW4ndCBhZGQgdHdpY2VcbiAgICBpZiAobGlzdGVuZXJzJDEuaW5jbHVkZXMoY2IpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWRkIGluaXRpYWwgbGlzdGVuZXJcbiAgICBsaXN0ZW5lcnMkMS5wdXNoKGNiKTtcblxuICAgIC8vIHNldHVwIHBhc3RlIGxpc3RlbmVyIGZvciBlbnRpcmUgcGFnZVxuICAgIGlmIChsaXN0ZW5pbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsaXN0ZW5pbmcgPSB0cnVlO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgaGFuZGxlUGFzdGUpO1xuICB9O1xuXG4gIHZhciB1bmxpc3RlbiA9IGZ1bmN0aW9uIHVubGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgYXJyYXlSZW1vdmUobGlzdGVuZXJzJDEsIGxpc3RlbmVycyQxLmluZGV4T2YobGlzdGVuZXIpKTtcblxuICAgIC8vIGNsZWFuIHVwXG4gICAgaWYgKGxpc3RlbmVycyQxLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBoYW5kbGVQYXN0ZSk7XG4gICAgICBsaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVBhc3RlciA9IGZ1bmN0aW9uIGNyZWF0ZVBhc3RlcigpIHtcbiAgICB2YXIgY2IgPSBmdW5jdGlvbiBjYihmaWxlcykge1xuICAgICAgYXBpLm9ubG9hZChmaWxlcyk7XG4gICAgfTtcblxuICAgIHZhciBhcGkgPSB7XG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB1bmxpc3RlbihjYik7XG4gICAgICB9LFxuICAgICAgb25sb2FkOiBmdW5jdGlvbiBvbmxvYWQoKSB7fVxuICAgIH07XG5cbiAgICBsaXN0ZW4oY2IpO1xuXG4gICAgcmV0dXJuIGFwaTtcbiAgfTtcblxuICB2YXIgZGVib3VuY2UgPSBmdW5jdGlvbiBkZWJvdW5jZShmdW5jKSB7XG4gICAgdmFyIGludGVydmFsID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTY7XG4gICAgdmFyIGltbWlkaWF0ZU9ubHkgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuXG4gICAgdmFyIGxhc3QgPSBEYXRlLm5vdygpO1xuICAgIHZhciB0aW1lb3V0ID0gbnVsbDtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGZvciAoXG4gICAgICAgIHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDtcbiAgICAgICAgX2tleSA8IF9sZW47XG4gICAgICAgIF9rZXkrK1xuICAgICAgKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgICAgdmFyIGRpc3QgPSBEYXRlLm5vdygpIC0gbGFzdDtcblxuICAgICAgdmFyIGZuID0gZnVuY3Rpb24gZm4oKSB7XG4gICAgICAgIGxhc3QgPSBEYXRlLm5vdygpO1xuICAgICAgICBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoZGlzdCA8IGludGVydmFsKSB7XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gZGVsYXkgYnkgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBpbnRlcnZhbCBhbmQgZGlzdFxuICAgICAgICAvLyBmb3IgZXhhbXBsZTogaWYgZGlzdGFuY2UgaXMgMTAgbXMgYW5kIGludGVydmFsIGlzIDE2IG1zLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHdhaXQgYW4gYWRkaXRpb25hbCA2bXMgYmVmb3JlIGNhbGxpbmcgdGhlIGZ1bmN0aW9uKVxuICAgICAgICBpZiAoIWltbWlkaWF0ZU9ubHkpIHtcbiAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmbiwgaW50ZXJ2YWwgLSBkaXN0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ28hXG4gICAgICAgIGZuKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZmlsZSB2aWV3XG4gICAqL1xuICB2YXIgY3JlYXRlJDE0ID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcblxuICAgIHJvb3QuZWxlbWVudC5pZCA9ICdmaWxlcG9uZC0tYXNzaXN0YW50LScgKyBwcm9wcy5pZDtcbiAgICBhdHRyKHJvb3QuZWxlbWVudCwgJ3JvbGUnLCAnc3RhdHVzJyk7XG4gICAgYXR0cihyb290LmVsZW1lbnQsICdhcmlhLWxpdmUnLCAncG9saXRlJyk7XG4gICAgYXR0cihyb290LmVsZW1lbnQsICdhcmlhLXJlbGV2YW50JywgJ2FkZGl0aW9ucycpO1xuICB9O1xuXG4gIHZhciBhZGRGaWxlc05vdGlmaWNhdGlvblRpbWVvdXQgPSBudWxsO1xuICB2YXIgbm90aWZpY2F0aW9uQ2xlYXJUaW1lb3V0ID0gbnVsbDtcblxuICB2YXIgZmlsZW5hbWVzID0gW107XG5cbiAgdmFyIGFzc2lzdCA9IGZ1bmN0aW9uIGFzc2lzdChyb290LCBtZXNzYWdlKSB7XG4gICAgcm9vdC5lbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgfTtcblxuICB2YXIgY2xlYXIkMSA9IGZ1bmN0aW9uIGNsZWFyKHJvb3QpIHtcbiAgICByb290LmVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgfTtcblxuICB2YXIgbGlzdE1vZGlmaWVkID0gZnVuY3Rpb24gbGlzdE1vZGlmaWVkKHJvb3QsIGZpbGVuYW1lLCBsYWJlbCkge1xuICAgIHZhciB0b3RhbCA9IHJvb3QucXVlcnkoJ0dFVF9UT1RBTF9JVEVNUycpO1xuICAgIGFzc2lzdChcbiAgICAgIHJvb3QsXG4gICAgICBsYWJlbCArXG4gICAgICAgICcgJyArXG4gICAgICAgIGZpbGVuYW1lICtcbiAgICAgICAgJywgJyArXG4gICAgICAgIHRvdGFsICtcbiAgICAgICAgJyAnICtcbiAgICAgICAgKHRvdGFsID09PSAxXG4gICAgICAgICAgPyByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9DT1VOVF9TSU5HVUxBUicpXG4gICAgICAgICAgOiByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9DT1VOVF9QTFVSQUwnKSlcbiAgICApO1xuXG4gICAgLy8gY2xlYXIgZ3JvdXAgYWZ0ZXIgc2V0IGFtb3VudCBvZiB0aW1lIHNvIHRoZSBzdGF0dXMgaXMgbm90IHJlYWQgdHdpY2VcbiAgICBjbGVhclRpbWVvdXQobm90aWZpY2F0aW9uQ2xlYXJUaW1lb3V0KTtcbiAgICBub3RpZmljYXRpb25DbGVhclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgY2xlYXIkMShyb290KTtcbiAgICB9LCAxNTAwKTtcbiAgfTtcblxuICB2YXIgaXNVc2luZ0ZpbGVQb25kID0gZnVuY3Rpb24gaXNVc2luZ0ZpbGVQb25kKHJvb3QpIHtcbiAgICByZXR1cm4gcm9vdC5lbGVtZW50LnBhcmVudE5vZGUuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gIH07XG5cbiAgdmFyIGl0ZW1BZGRlZCA9IGZ1bmN0aW9uIGl0ZW1BZGRlZChfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYyLmFjdGlvbjtcblxuICAgIGlmICghaXNVc2luZ0ZpbGVQb25kKHJvb3QpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcm9vdC5lbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgdmFyIGl0ZW0gPSByb290LnF1ZXJ5KCdHRVRfSVRFTScsIGFjdGlvbi5pZCk7XG4gICAgZmlsZW5hbWVzLnB1c2goaXRlbS5maWxlbmFtZSk7XG5cbiAgICBjbGVhclRpbWVvdXQoYWRkRmlsZXNOb3RpZmljYXRpb25UaW1lb3V0KTtcbiAgICBhZGRGaWxlc05vdGlmaWNhdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgbGlzdE1vZGlmaWVkKFxuICAgICAgICByb290LFxuICAgICAgICBmaWxlbmFtZXMuam9pbignLCAnKSxcbiAgICAgICAgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfQURERUQnKVxuICAgICAgKTtcbiAgICAgIGZpbGVuYW1lcy5sZW5ndGggPSAwO1xuICAgIH0sIDc1MCk7XG4gIH07XG5cbiAgdmFyIGl0ZW1SZW1vdmVkID0gZnVuY3Rpb24gaXRlbVJlbW92ZWQoX3JlZjMpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYzLnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmMy5hY3Rpb247XG5cbiAgICBpZiAoIWlzVXNpbmdGaWxlUG9uZChyb290KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpdGVtID0gYWN0aW9uLml0ZW07XG4gICAgbGlzdE1vZGlmaWVkKHJvb3QsIGl0ZW0uZmlsZW5hbWUsIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX1JFTU9WRUQnKSk7XG4gIH07XG5cbiAgdmFyIGl0ZW1Qcm9jZXNzZWQgPSBmdW5jdGlvbiBpdGVtUHJvY2Vzc2VkKF9yZWY0KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNC5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjQuYWN0aW9uO1xuXG4gICAgLy8gd2lsbCBhbHNvIG5vdGlmeSB0aGUgdXNlciB3aGVuIEZpbGVQb25kIGlzIG5vdCBiZWluZyB1c2VkLCBhcyB0aGUgdXNlciBtaWdodCBiZSBvY2N1cGllZCB3aXRoIG90aGVyIGFjdGl2aXRpZXMgd2hpbGUgdXBsb2FkaW5nIGEgZmlsZVxuXG4gICAgdmFyIGl0ZW0gPSByb290LnF1ZXJ5KCdHRVRfSVRFTScsIGFjdGlvbi5pZCk7XG4gICAgdmFyIGZpbGVuYW1lID0gaXRlbS5maWxlbmFtZTtcbiAgICB2YXIgbGFiZWwgPSByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9QUk9DRVNTSU5HX0NPTVBMRVRFJyk7XG5cbiAgICBhc3Npc3Qocm9vdCwgZmlsZW5hbWUgKyAnICcgKyBsYWJlbCk7XG4gIH07XG5cbiAgdmFyIGl0ZW1Qcm9jZXNzZWRVbmRvID0gZnVuY3Rpb24gaXRlbVByb2Nlc3NlZFVuZG8oX3JlZjUpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY1LnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmNS5hY3Rpb247XG5cbiAgICB2YXIgaXRlbSA9IHJvb3QucXVlcnkoJ0dFVF9JVEVNJywgYWN0aW9uLmlkKTtcbiAgICB2YXIgZmlsZW5hbWUgPSBpdGVtLmZpbGVuYW1lO1xuICAgIHZhciBsYWJlbCA9IHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX1BST0NFU1NJTkdfQUJPUlRFRCcpO1xuXG4gICAgYXNzaXN0KHJvb3QsIGZpbGVuYW1lICsgJyAnICsgbGFiZWwpO1xuICB9O1xuXG4gIHZhciBpdGVtRXJyb3IgPSBmdW5jdGlvbiBpdGVtRXJyb3IoX3JlZjYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY2LnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmNi5hY3Rpb247XG5cbiAgICB2YXIgaXRlbSA9IHJvb3QucXVlcnkoJ0dFVF9JVEVNJywgYWN0aW9uLmlkKTtcbiAgICB2YXIgZmlsZW5hbWUgPSBpdGVtLmZpbGVuYW1lO1xuXG4gICAgLy8gd2lsbCBhbHNvIG5vdGlmeSB0aGUgdXNlciB3aGVuIEZpbGVQb25kIGlzIG5vdCBiZWluZyB1c2VkLCBhcyB0aGUgdXNlciBtaWdodCBiZSBvY2N1cGllZCB3aXRoIG90aGVyIGFjdGl2aXRpZXMgd2hpbGUgdXBsb2FkaW5nIGEgZmlsZVxuXG4gICAgYXNzaXN0KHJvb3QsIGFjdGlvbi5zdGF0dXMubWFpbiArICcgJyArIGZpbGVuYW1lICsgJyAnICsgYWN0aW9uLnN0YXR1cy5zdWIpO1xuICB9O1xuXG4gIHZhciBhc3Npc3RhbnQgPSBjcmVhdGVWaWV3KHtcbiAgICBjcmVhdGU6IGNyZWF0ZSQxNCxcbiAgICBpZ25vcmVSZWN0OiB0cnVlLFxuICAgIHdyaXRlOiBjcmVhdGVSb3V0ZSh7XG4gICAgICBESURfTE9BRF9JVEVNOiBpdGVtQWRkZWQsXG4gICAgICBESURfUkVNT1ZFX0lURU06IGl0ZW1SZW1vdmVkLFxuICAgICAgRElEX0NPTVBMRVRFX0lURU1fUFJPQ0VTU0lORzogaXRlbVByb2Nlc3NlZCxcblxuICAgICAgRElEX0FCT1JUX0lURU1fUFJPQ0VTU0lORzogaXRlbVByb2Nlc3NlZFVuZG8sXG4gICAgICBESURfUkVWRVJUX0lURU1fUFJPQ0VTU0lORzogaXRlbVByb2Nlc3NlZFVuZG8sXG5cbiAgICAgIERJRF9USFJPV19JVEVNX0xPQURfRVJST1I6IGl0ZW1FcnJvcixcbiAgICAgIERJRF9USFJPV19JVEVNX0lOVkFMSUQ6IGl0ZW1FcnJvcixcbiAgICAgIERJRF9USFJPV19JVEVNX1BST0NFU1NJTkdfRVJST1I6IGl0ZW1FcnJvclxuICAgIH0pLFxuICAgIHRhZzogJ3NwYW4nLFxuICAgIG5hbWU6ICdhc3Npc3RhbnQnXG4gIH0pO1xuXG4gIHZhciBjcmVhdGUkMSA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG5cbiAgICAvLyBBZGQgaWRcbiAgICB2YXIgaWQgPSByb290LnF1ZXJ5KCdHRVRfSUQnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHJvb3QuZWxlbWVudC5pZCA9IGlkO1xuICAgIH1cblxuICAgIC8vIEFkZCBjbGFzc05hbWVcbiAgICB2YXIgY2xhc3NOYW1lID0gcm9vdC5xdWVyeSgnR0VUX0NMQVNTX05BTUUnKTtcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWUuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgcm9vdC5lbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGaWVsZCBsYWJlbFxuICAgIHJvb3QucmVmLmxhYmVsID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhkcm9wTGFiZWwsIF9leHRlbmRzKHt9LCBwcm9wcywgeyB0cmFuc2xhdGVZOiBudWxsIH0pKVxuICAgICk7XG5cbiAgICAvLyBMaXN0IG9mIGl0ZW1zXG4gICAgcm9vdC5yZWYubGlzdCA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcobGlzdFNjcm9sbGVyLCB7IHRyYW5zbGF0ZVk6IG51bGwgfSlcbiAgICApO1xuXG4gICAgLy8gQmFja2dyb3VuZCBwYW5lbFxuICAgIHJvb3QucmVmLnBhbmVsID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhwYW5lbCwgeyBuYW1lOiAncGFuZWwtcm9vdCcgfSlcbiAgICApO1xuXG4gICAgLy8gQXNzaXN0YW50IG5vdGlmaWVzIGFzc2lzdGl2ZSB0ZWNoIHdoZW4gY29udGVudCBjaGFuZ2VzXG4gICAgcm9vdC5yZWYuYXNzaXN0YW50ID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhhc3Npc3RhbnQsIF9leHRlbmRzKHt9LCBwcm9wcykpXG4gICAgKTtcblxuICAgIC8vIE1lYXN1cmUgKHRlc3RzIGlmIGZpeGVkIGhlaWdodCB3YXMgc2V0KVxuICAgIC8vIERPQ1RZUEUgbmVlZHMgdG8gYmUgc2V0IGZvciB0aGlzIHRvIHdvcmtcbiAgICByb290LnJlZi5tZWFzdXJlID0gY3JlYXRlRWxlbWVudCQxKCdkaXYnKTtcbiAgICByb290LnJlZi5tZWFzdXJlLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQocm9vdC5yZWYubWVhc3VyZSk7XG4gIH07XG5cbiAgdmFyIHdyaXRlID0gZnVuY3Rpb24gd3JpdGUoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYyLnByb3BzLFxuICAgICAgYWN0aW9ucyA9IF9yZWYyLmFjdGlvbnM7XG5cbiAgICAvLyByb3V0ZSBhY3Rpb25zXG4gICAgcm91dGUoeyByb290OiByb290LCBwcm9wczogcHJvcHMsIGFjdGlvbnM6IGFjdGlvbnMgfSk7XG5cbiAgICAvLyBnZXQgcXVpY2sgcmVmZXJlbmNlcyB0byB2YXJpb3VzIGhpZ2ggbGV2ZWwgcGFydHMgb2YgdGhlIHVwbG9hZCB0b29sXG4gICAgdmFyIF9yb290JHJlZiA9IHJvb3QucmVmLFxuICAgICAgaG9wcGVyID0gX3Jvb3QkcmVmLmhvcHBlcixcbiAgICAgIGxhYmVsID0gX3Jvb3QkcmVmLmxhYmVsLFxuICAgICAgbGlzdCA9IF9yb290JHJlZi5saXN0LFxuICAgICAgcGFuZWwkJDEgPSBfcm9vdCRyZWYucGFuZWw7XG5cbiAgICAvLyBib29sIHRvIGluZGljYXRlIGlmIHdlJ3JlIGZ1bGwgb3Igbm90XG5cbiAgICB2YXIgaXNNdWx0aUl0ZW0gPSByb290LnF1ZXJ5KCdHRVRfQUxMT1dfTVVMVElQTEUnKTtcbiAgICB2YXIgdG90YWxJdGVtcyA9IHJvb3QucXVlcnkoJ0dFVF9UT1RBTF9JVEVNUycpO1xuICAgIHZhciBtYXhJdGVtcyA9IHJvb3QucXVlcnkoJ0dFVF9NQVhfRklMRVMnKTtcbiAgICB2YXIgYXRNYXhDYXBhY2l0eSA9IGlzTXVsdGlJdGVtXG4gICAgICA/IHRvdGFsSXRlbXMgPT09IG1heEl0ZW1zXG4gICAgICA6IHRvdGFsSXRlbXMgPT09IDE7XG5cbiAgICAvLyB2aWV3cyBub3QgdXNlZCBpbiBoZWlnaHQgY2FsY3VsYXRpb25cbiAgICB2YXIgY2hpbGRyZW5Vc2VkRm9yQm91bmRpbmdDYWxjdWxhdGlvbiA9IFtdLmNvbmNhdChcbiAgICAgIHRvQ29uc3VtYWJsZUFycmF5KGxpc3QuY2hpbGRWaWV3c1swXS5jaGlsZFZpZXdzKVxuICAgICk7XG5cbiAgICAvLyB2aWV3cyB1c2VkIHRvIGNhbGN1bGF0ZSB0aGUgdmlzdWFsIGhlaWdodCBvZiB0aGUgY29udGFpbmVyICh3aGljaCBpcyBwYXNzZWQgdG8gcGFuZWwpXG4gICAgdmFyIGNoaWxkcmVuVXNlZEZvclZpc3VhbEhlaWdodENhbGN1bGF0aW9uID0gW2xpc3RdO1xuXG4gICAgLy8gYWN0aW9uIHVzZWQgdG8gYWRkIGl0ZW1cbiAgICB2YXIgYWRkQWN0aW9uID0gYWN0aW9ucy5maW5kKGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgcmV0dXJuIGFjdGlvbi50eXBlID09PSAnRElEX0FERF9JVEVNJztcbiAgICB9KTtcblxuICAgIC8vIGlmIGF0IG1heCBjYXBhY2l0eSBoaWRlIHRoZSBsYWJlbFxuICAgIGlmIChhdE1heENhcGFjaXR5ICYmIGFkZEFjdGlvbikge1xuICAgICAgLy8gZ2V0IGludGVyYWN0aW9uIHR5cGVcbiAgICAgIHZhciBpbnRlcmFjdGlvbk1ldGhvZCA9IGFkZEFjdGlvbi5kYXRhLmludGVyYWN0aW9uTWV0aG9kO1xuXG4gICAgICAvLyBoaWRlIGxhYmVsXG4gICAgICBsYWJlbC5vcGFjaXR5ID0gMDtcblxuICAgICAgLy8gaWYgaXMgbXVsdGktaXRlbSwgdGhlIGxhYmVsIGlzIGFsd2F5cyBtb3ZlZCB1cHdhcmRzXG4gICAgICBpZiAoaXNNdWx0aUl0ZW0pIHtcbiAgICAgICAgbGFiZWwudHJhbnNsYXRlWSA9IC1sYWJlbC5yZWN0LmVsZW1lbnQuaGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYmFzZWQgb24gaW50ZXJhY3Rpb24gbWV0aG9kIHdlIG1vdmUgbGFiZWwgaW4gZGlmZmVyZW50IGRpcmVjdGlvbnNcbiAgICAgICAgaWYgKGludGVyYWN0aW9uTWV0aG9kID09PSBJbnRlcmFjdGlvbk1ldGhvZC5BUEkpIHtcbiAgICAgICAgICBsYWJlbC50cmFuc2xhdGVYID0gNDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaW50ZXJhY3Rpb25NZXRob2QgPT09IEludGVyYWN0aW9uTWV0aG9kLkJST1dTRSkge1xuICAgICAgICAgIGxhYmVsLnRyYW5zbGF0ZVkgPSA0MDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYWJlbC50cmFuc2xhdGVZID0gLTQwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghYXRNYXhDYXBhY2l0eSkge1xuICAgICAgLy8gcmV2ZWFsIGxhYmVsXG4gICAgICBsYWJlbC5vcGFjaXR5ID0gMTtcbiAgICAgIGxhYmVsLnRyYW5zbGF0ZVkgPSByb290LnJlY3QuZWxlbWVudC5wYWRkaW5nVG9wO1xuICAgICAgbGFiZWwudHJhbnNsYXRlWCA9IDA7XG5cbiAgICAgIC8vIHdlIHVzZSBsYWJlbCBmb3IgYm91bmRpbmcgYm94XG4gICAgICBjaGlsZHJlblVzZWRGb3JWaXN1YWxIZWlnaHRDYWxjdWxhdGlvbi5wdXNoKGxhYmVsKTtcbiAgICAgIGNoaWxkcmVuVXNlZEZvckJvdW5kaW5nQ2FsY3VsYXRpb24ucHVzaChsYWJlbCk7XG4gICAgfVxuXG4gICAgLy8gc2V0cyBjb3JyZWN0IHN0YXRlIHRvIGhvcHBlciBzY29wZVxuICAgIGlmIChob3BwZXIpIHtcbiAgICAgIGhvcHBlci51cGRhdGVIb3BwZXJTdGF0ZSgpO1xuICAgIH1cblxuICAgIC8vIG5lZWQgYSBsYWJlbCB0byBkbyBhbnl0aGluZ1xuICAgIGlmICghbGFiZWwuY2FwdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGxpbmsgbGlzdCB0byBsYWJlbCBib3R0b20gcG9zaXRpb24gKGluY2x1ZGluZyBib3R0b20gbWFyZ2luKVxuICAgIGxpc3QudHJhbnNsYXRlWSA9IGlzTXVsdGlJdGVtXG4gICAgICA/IGxhYmVsLnJlY3Qub3V0ZXIuYm90dG9tXG4gICAgICA6IHJvb3QucmVjdC5lbGVtZW50LnBhZGRpbmdUb3A7XG5cbiAgICAvLyB1cGRhdGUgYm91bmRpbmcgYm94IGlmIGhhcyBjaGFuZ2VkXG4gICAgdmFyIGJveEJvdW5kaW5nID0gY2FsY3VsYXRlUm9vdEJvdW5kaW5nQm94SGVpZ2h0KHJvb3QsIHByb3BzKTtcbiAgICB2YXIgY2hpbGRyZW5Cb3VuZGluZ0hlaWdodCA9IGNhbGN1bGF0ZUNoaWxkcmVuQm91bmRpbmdCb3hIZWlnaHQoXG4gICAgICBjaGlsZHJlblVzZWRGb3JCb3VuZGluZ0NhbGN1bGF0aW9uXG4gICAgKTtcbiAgICB2YXIgdmlzdWFsSGVpZ2h0ID0gY2FsY3VsYXRlQ2hpbGRyZW5WaXN1YWxIZWlnaHQoXG4gICAgICBjaGlsZHJlblVzZWRGb3JWaXN1YWxIZWlnaHRDYWxjdWxhdGlvblxuICAgICk7XG4gICAgdmFyIGJvdHRvbVBhZGRpbmcgPSB0b3RhbEl0ZW1zID4gMCA/IHJvb3QucmVjdC5lbGVtZW50LnBhZGRpbmdUb3AgKiAwLjUgOiAwO1xuXG4gICAgaWYgKGJveEJvdW5kaW5nLmZpeGVkSGVpZ2h0KSB7XG4gICAgICAvLyBmaXhlZCBoZWlnaHRcblxuICAgICAgLy8gZml4ZWQgaGVpZ2h0IHBhbmVsXG4gICAgICBwYW5lbCQkMS5zY2FsYWJsZSA9IGZhbHNlO1xuXG4gICAgICAvLyBsaW5rIHBhbmVsIGhlaWdodCB0byBib3ggYm91bmRpbmdcbiAgICAgIHBhbmVsJCQxLmhlaWdodCA9IGJveEJvdW5kaW5nLmZpeGVkSGVpZ2h0ICsgcm9vdC5yZWN0LmVsZW1lbnQucGFkZGluZ1RvcDtcblxuICAgICAgLy8gc2V0IG92ZXJmbG93XG4gICAgICBsaXN0Lm92ZXJmbG93ID1cbiAgICAgICAgY2hpbGRyZW5Cb3VuZGluZ0hlaWdodCA+IHBhbmVsJCQxLmhlaWdodCAmJiBpc011bHRpSXRlbVxuICAgICAgICAgID8gcGFuZWwkJDEuaGVpZ2h0XG4gICAgICAgICAgOiBudWxsO1xuICAgIH0gZWxzZSBpZiAoYm94Qm91bmRpbmcuY2FwcGVkSGVpZ2h0KSB7XG4gICAgICAvLyBtYXgtaGVpZ2h0XG5cbiAgICAgIC8vIG5vdCBhIGZpeGVkIGhlaWdodCBwYW5lbFxuICAgICAgcGFuZWwkJDEuc2NhbGFibGUgPSB0cnVlO1xuXG4gICAgICAvLyBsaW1pdCBjaGlsZHJlbiBib3VuZGluZyBoZWlnaHQgdG8gdGhlIHNldCBjYXBwZWQgaGVpZ2h0XG4gICAgICB2YXIgY2FwcGVkQ2hpbGRyZW5Cb3VuZGluZ0hlaWdodCA9IE1hdGgubWluKFxuICAgICAgICBib3hCb3VuZGluZy5jYXBwZWRIZWlnaHQsXG4gICAgICAgIGNoaWxkcmVuQm91bmRpbmdIZWlnaHRcbiAgICAgICk7XG5cbiAgICAgIC8vIHVwZGF0ZSByb290IGhlaWdodFxuICAgICAgcm9vdC5oZWlnaHQgPSBjYXBwZWRDaGlsZHJlbkJvdW5kaW5nSGVpZ2h0ICsgYm90dG9tUGFkZGluZztcblxuICAgICAgLy8gc2V0IHZpc3VhbCBoZWlnaHRcbiAgICAgIHBhbmVsJCQxLmhlaWdodCA9IE1hdGgubWluKFxuICAgICAgICBib3hCb3VuZGluZy5jYXBwZWRIZWlnaHQgKyByb290LnJlY3QuZWxlbWVudC5wYWRkaW5nVG9wLFxuICAgICAgICB2aXN1YWxIZWlnaHQgKyBib3R0b21QYWRkaW5nXG4gICAgICApO1xuXG4gICAgICAvLyBpZiBjYW4gb3ZlcmZsb3csIHRlc3QgaWYgaXMgY3VycmVudGx5IG92ZXJmbG93aW5nXG4gICAgICBsaXN0Lm92ZXJmbG93ID1cbiAgICAgICAgY2hpbGRyZW5Cb3VuZGluZ0hlaWdodCA+IHBhbmVsJCQxLmhlaWdodCAmJiBpc011bHRpSXRlbVxuICAgICAgICAgID8gcGFuZWwkJDEuaGVpZ2h0XG4gICAgICAgICAgOiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmbGV4aWJsZSBoZWlnaHRcblxuICAgICAgLy8gbm90IGEgZml4ZWQgaGVpZ2h0IHBhbmVsXG4gICAgICBwYW5lbCQkMS5zY2FsYWJsZSA9IHRydWU7XG5cbiAgICAgIC8vIHNldCB0byBuZXcgYm91bmRpbmdcbiAgICAgIHJvb3QuaGVpZ2h0ID1cbiAgICAgICAgY2hpbGRyZW5Cb3VuZGluZ0hlaWdodCArIGJvdHRvbVBhZGRpbmcgKyByb290LnJlY3QuZWxlbWVudC5wYWRkaW5nVG9wO1xuXG4gICAgICAvLyBzZXQgaGVpZ2h0IHRvIG5ldyB2aXN1YWwgaGVpZ2h0XG4gICAgICBwYW5lbCQkMS5oZWlnaHQgPSB2aXN1YWxIZWlnaHQgKyBib3R0b21QYWRkaW5nO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY2FsY3VsYXRlQ2hpbGRyZW5WaXN1YWxIZWlnaHQgPSBmdW5jdGlvbiBjYWxjdWxhdGVDaGlsZHJlblZpc3VhbEhlaWdodChcbiAgICBjaGlsZHJlblxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgY2hpbGRyZW5cblxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHRvdGFsIGhlaWdodCBvY2N1cGllZCBieSBhbGwgY2hpbGRyZW5cbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihtYXgsIGNoaWxkKSB7XG4gICAgICAgICAgdmFyIGJvdHRvbSA9IGNoaWxkLnJlY3Qub3V0ZXIuYm90dG9tO1xuXG4gICAgICAgICAgaWYgKGJvdHRvbSA+IG1heCkge1xuICAgICAgICAgICAgbWF4ID0gYm90dG9tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBtYXg7XG4gICAgICAgIH0sIDApXG4gICAgKTtcbiAgfTtcblxuICB2YXIgY2FsY3VsYXRlUm9vdEJvdW5kaW5nQm94SGVpZ2h0ID0gZnVuY3Rpb24gY2FsY3VsYXRlUm9vdEJvdW5kaW5nQm94SGVpZ2h0KFxuICAgIHJvb3QsXG4gICAgcHJvcHNcbiAgKSB7XG4gICAgLy8gb25seSBjYWxjdWxhdGUgZmlyc3QgdGltZVxuICAgIGlmIChwcm9wcy5ib3hCb3VuZGluZykge1xuICAgICAgcmV0dXJuIHByb3BzLmJveEJvdW5kaW5nO1xuICAgIH1cblxuICAgIHZhciBoZWlnaHQgPSByb290LnJlZi5tZWFzdXJlSGVpZ2h0IHx8IG51bGw7XG4gICAgdmFyIGNhcHBlZEhlaWdodCA9IHBhcnNlSW50KHJvb3Quc3R5bGUubWF4SGVpZ2h0LCAxMCkgfHwgbnVsbDtcbiAgICB2YXIgZml4ZWRIZWlnaHQgPSBoZWlnaHQgPT09IDAgPyBudWxsIDogaGVpZ2h0O1xuXG4gICAgcHJvcHMuYm94Qm91bmRpbmcgPSB7XG4gICAgICBjYXBwZWRIZWlnaHQ6IGNhcHBlZEhlaWdodCxcbiAgICAgIGZpeGVkSGVpZ2h0OiBmaXhlZEhlaWdodFxuICAgIH07XG5cbiAgICAvLyBkZXN0cm95IG1lYXN1cmUgZWxlbWVudFxuICAgIHJvb3QuZWxlbWVudC5yZW1vdmVDaGlsZChyb290LnJlZi5tZWFzdXJlKTtcbiAgICByb290LnJlZi5tZWFzdXJlID0gbnVsbDtcblxuICAgIC8vIGRvbmUhXG4gICAgcmV0dXJuIHByb3BzLmJveEJvdW5kaW5nO1xuICB9O1xuXG4gIHZhciBjYWxjdWxhdGVDaGlsZHJlbkJvdW5kaW5nQm94SGVpZ2h0ID0gZnVuY3Rpb24gY2FsY3VsYXRlQ2hpbGRyZW5Cb3VuZGluZ0JveEhlaWdodChcbiAgICBjaGlsZHJlblxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgY2hpbGRyZW5cblxuICAgICAgICAvLyBubyB1c2Ugb2Ygb3V0ZXIgYW5kIGlubmVyIGFzIHRoYXQgaW5jbHVkZXMgdHJhbnNsYXRpb25zXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oaGVpZ2h0LCBjaGlsZCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBoZWlnaHQgKyBjaGlsZC5yZWN0LmlubmVyLmJvdHRvbSArIGNoaWxkLnJlY3QuZWxlbWVudC5tYXJnaW5Cb3R0b21cbiAgICAgICAgICApO1xuICAgICAgICB9LCAwKVxuICAgICk7XG4gIH07XG5cbiAgdmFyIHRvZ2dsZUFsbG93RHJvcCA9IGZ1bmN0aW9uIHRvZ2dsZUFsbG93RHJvcChfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZjMucHJvcHMsXG4gICAgICBhY3Rpb24gPSBfcmVmMy5hY3Rpb247XG5cbiAgICBpZiAoYWN0aW9uLnZhbHVlICYmICFyb290LnJlZi5ob3BwZXIpIHtcbiAgICAgIHZhciBob3BwZXIgPSBjcmVhdGVIb3BwZXIoXG4gICAgICAgIHJvb3QuZWxlbWVudCxcbiAgICAgICAgZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgICAgICB2YXIgYWxsb3dSZXBsYWNlID0gcm9vdC5xdWVyeSgnR0VUX0FMTE9XX1JFUExBQ0UnKTtcbiAgICAgICAgICB2YXIgYWxsb3dNdWx0aXBsZSA9IHJvb3QucXVlcnkoJ0dFVF9BTExPV19NVUxUSVBMRScpO1xuICAgICAgICAgIHZhciB0b3RhbEl0ZW1zID0gcm9vdC5xdWVyeSgnR0VUX1RPVEFMX0lURU1TJyk7XG4gICAgICAgICAgdmFyIGRyb3BWYWxpZGF0aW9uID0gcm9vdC5xdWVyeSgnR0VUX0RST1BfVkFMSURBVElPTicpO1xuICAgICAgICAgIHZhciBtYXhJdGVtcyA9IHJvb3QucXVlcnkoJ0dFVF9NQVhfVE9UQUxfSVRFTVMnKTtcblxuICAgICAgICAgIC8vIHRvdGFsIGFtb3VudCBvZiBpdGVtcyBiZWluZyBkcmFnZ2VkXG4gICAgICAgICAgdmFyIHRvdGFsRHJhZ0l0ZW1zID0gaXRlbXMubGVuZ3RoO1xuXG4gICAgICAgICAgLy8gaWYgZG9lcyBub3QgYWxsb3cgbXVsdGlwbGUgaXRlbXMgYW5kIGRyYWdnaW5nIG1vcmUgdGhhbiBvbmUgaXRlbVxuICAgICAgICAgIGlmICghYWxsb3dNdWx0aXBsZSAmJiB0b3RhbERyYWdJdGVtcyA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBsaW1pdCBtYXggaXRlbXMgdG8gb25lIGlmIG5vdCBhbGxvd2VkIHRvIGRyb3AgbXVsdGlwbGUgaXRlbXNcbiAgICAgICAgICBtYXhJdGVtcyA9IGFsbG93TXVsdGlwbGUgPyBtYXhJdGVtcyA6IGFsbG93UmVwbGFjZSA/IG1heEl0ZW1zIDogMTtcblxuICAgICAgICAgIC8vIG5vIG1vcmUgcm9vbT9cbiAgICAgICAgICB2YXIgaGFzTWF4SXRlbXMgPSBpc0ludChtYXhJdGVtcyk7XG4gICAgICAgICAgaWYgKGhhc01heEl0ZW1zICYmIHRvdGFsSXRlbXMgKyB0b3RhbERyYWdJdGVtcyA+IG1heEl0ZW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gYWxsIGl0ZW1zIHNob3VsZCBiZSB2YWxpZGF0ZWQgYnkgYWxsIGZpbHRlcnMgYXMgdmFsaWRcbiAgICAgICAgICByZXR1cm4gZHJvcFZhbGlkYXRpb25cbiAgICAgICAgICAgID8gaXRlbXMuZXZlcnkoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcHBseUZpbHRlcnMoJ0FMTE9XX0hPUFBFUl9JVEVNJywgaXRlbSwge1xuICAgICAgICAgICAgICAgICAgcXVlcnk6IHJvb3QucXVlcnlcbiAgICAgICAgICAgICAgICB9KS5ldmVyeShmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgPT09IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXRjaGVzRHJvcHNPblBhZ2U6IHJvb3QucXVlcnkoJ0dFVF9EUk9QX09OX1BBR0UnKSxcbiAgICAgICAgICByZXF1aXJlc0Ryb3BPbkVsZW1lbnQ6IHJvb3QucXVlcnkoJ0dFVF9EUk9QX09OX0VMRU1FTlQnKVxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBob3BwZXIub25sb2FkID0gZnVuY3Rpb24oaXRlbXMsIHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBpdGVtTGlzdCA9IHJvb3QucmVmLmxpc3QuY2hpbGRWaWV3c1swXTtcbiAgICAgICAgdmFyIGluZGV4ID0gZ2V0SXRlbUluZGV4QnlQb3NpdGlvbihpdGVtTGlzdCwge1xuICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uLnNjb3BlTGVmdCxcbiAgICAgICAgICB0b3A6XG4gICAgICAgICAgICBwb3NpdGlvbi5zY29wZVRvcCAtXG4gICAgICAgICAgICByb290LnJlZi5saXN0LnJlY3Qub3V0ZXIudG9wICtcbiAgICAgICAgICAgIHJvb3QucmVmLmxpc3QuZWxlbWVudC5zY3JvbGxUb3BcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yRWFjaERlbGF5ZWQoaXRlbXMsIGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICAgIHJvb3QuZGlzcGF0Y2goJ0FERF9JVEVNJywge1xuICAgICAgICAgICAgaW50ZXJhY3Rpb25NZXRob2Q6IEludGVyYWN0aW9uTWV0aG9kLkRST1AsXG4gICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByb290LmRpc3BhdGNoKCdESURfRFJPUCcsIHsgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuXG4gICAgICAgIHJvb3QuZGlzcGF0Y2goJ0RJRF9FTkRfRFJBRycsIHsgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuICAgICAgfTtcblxuICAgICAgaG9wcGVyLm9uZHJhZ3N0YXJ0ID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgICAgcm9vdC5kaXNwYXRjaCgnRElEX1NUQVJUX0RSQUcnLCB7IHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcbiAgICAgIH07XG5cbiAgICAgIGhvcHBlci5vbmRyYWcgPSBkZWJvdW5jZShmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICByb290LmRpc3BhdGNoKCdESURfRFJBRycsIHsgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGhvcHBlci5vbmRyYWdlbmQgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICByb290LmRpc3BhdGNoKCdESURfRU5EX0RSQUcnLCB7IHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJvb3QucmVmLmhvcHBlciA9IGhvcHBlcjtcblxuICAgICAgcm9vdC5yZWYuZHJpcCA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KHJvb3QuY3JlYXRlQ2hpbGRWaWV3KGRyaXApKTtcbiAgICB9IGVsc2UgaWYgKCFhY3Rpb24udmFsdWUgJiYgcm9vdC5yZWYuaG9wcGVyKSB7XG4gICAgICByb290LnJlZi5ob3BwZXIuZGVzdHJveSgpO1xuICAgICAgcm9vdC5yZWYuaG9wcGVyID0gbnVsbDtcbiAgICAgIHJvb3QucmVtb3ZlQ2hpbGRWaWV3KHJvb3QucmVmLmRyaXApO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgYnJvd3NlIGZ1bmN0aW9uYWxpdHlcbiAgICovXG4gIHZhciB0b2dnbGVBbGxvd0Jyb3dzZSA9IGZ1bmN0aW9uIHRvZ2dsZUFsbG93QnJvd3NlKF9yZWY0KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNC5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmNC5wcm9wcyxcbiAgICAgIGFjdGlvbiA9IF9yZWY0LmFjdGlvbjtcblxuICAgIGlmIChhY3Rpb24udmFsdWUpIHtcbiAgICAgIHJvb3QucmVmLmJyb3dzZXIgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcoXG4gICAgICAgICAgYnJvd3NlcixcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICAgIG9ubG9hZDogZnVuY3Rpb24gb25sb2FkKGl0ZW1zKSB7XG4gICAgICAgICAgICAgIGZvckVhY2hEZWxheWVkKGl0ZW1zLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByb290LmRpc3BhdGNoKCdBRERfSVRFTScsIHtcbiAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uTWV0aG9kOiBJbnRlcmFjdGlvbk1ldGhvZC5CUk9XU0UsXG4gICAgICAgICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgICAgICAgIGluZGV4OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIDBcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChyb290LnJlZi5icm93c2VyKSB7XG4gICAgICByb290LnJlbW92ZUNoaWxkVmlldyhyb290LnJlZi5icm93c2VyKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIHBhc3RlIGZ1bmN0aW9uYWxpdHlcbiAgICovXG4gIHZhciB0b2dnbGVBbGxvd1Bhc3RlID0gZnVuY3Rpb24gdG9nZ2xlQWxsb3dQYXN0ZShfcmVmNSkge1xuICAgIHZhciByb290ID0gX3JlZjUucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWY1LmFjdGlvbjtcblxuICAgIGlmIChhY3Rpb24udmFsdWUpIHtcbiAgICAgIHJvb3QucmVmLnBhc3RlciA9IGNyZWF0ZVBhc3RlcigpO1xuICAgICAgcm9vdC5yZWYucGFzdGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgIGZvckVhY2hEZWxheWVkKGl0ZW1zLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgICByb290LmRpc3BhdGNoKCdBRERfSVRFTScsIHtcbiAgICAgICAgICAgIGludGVyYWN0aW9uTWV0aG9kOiBJbnRlcmFjdGlvbk1ldGhvZC5QQVNURSxcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgaW5kZXg6IDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAocm9vdC5yZWYucGFzdGVyKSB7XG4gICAgICByb290LnJlZi5wYXN0ZXIuZGVzdHJveSgpO1xuICAgICAgcm9vdC5yZWYucGFzdGVyID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJvdXRlIGFjdGlvbnNcbiAgICovXG4gIHZhciByb3V0ZSA9IGNyZWF0ZVJvdXRlKHtcbiAgICBESURfU0VUX0FMTE9XX0JST1dTRTogdG9nZ2xlQWxsb3dCcm93c2UsXG4gICAgRElEX1NFVF9BTExPV19EUk9QOiB0b2dnbGVBbGxvd0Ryb3AsXG4gICAgRElEX1NFVF9BTExPV19QQVNURTogdG9nZ2xlQWxsb3dQYXN0ZVxuICB9KTtcblxuICB2YXIgcm9vdCA9IGNyZWF0ZVZpZXcoe1xuICAgIG5hbWU6ICdyb290JyxcbiAgICByZWFkOiBmdW5jdGlvbiByZWFkKF9yZWY2KSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWY2LnJvb3Q7XG5cbiAgICAgIGlmIChyb290LnJlZi5tZWFzdXJlKSB7XG4gICAgICAgIHJvb3QucmVmLm1lYXN1cmVIZWlnaHQgPSByb290LnJlZi5tZWFzdXJlLm9mZnNldEhlaWdodDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZTogY3JlYXRlJDEsXG4gICAgd3JpdGU6IHdyaXRlLFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koX3JlZjcpIHtcbiAgICAgIHZhciByb290ID0gX3JlZjcucm9vdDtcblxuICAgICAgaWYgKHJvb3QucmVmLnBhc3Rlcikge1xuICAgICAgICByb290LnJlZi5wYXN0ZXIuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgaWYgKHJvb3QucmVmLmhvcHBlcikge1xuICAgICAgICByb290LnJlZi5ob3BwZXIuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgbWl4aW5zOiB7XG4gICAgICBzdHlsZXM6IFsnaGVpZ2h0J11cbiAgICB9XG4gIH0pO1xuXG4gIC8vIGRlZmF1bHRzXG4gIC8vIHZpZXdcbiAgLy8gY3JlYXRlcyB0aGUgYXBwXG4gIHZhciBjcmVhdGVBcHAkMSA9IGZ1bmN0aW9uIGNyZWF0ZUFwcCgpIHtcbiAgICB2YXIgaW5pdGlhbE9wdGlvbnMgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIC8vIGxldCBlbGVtZW50XG4gICAgdmFyIG9yaWdpbmFsRWxlbWVudCA9IG51bGw7XG5cbiAgICAvLyBnZXQgZGVmYXVsdCBvcHRpb25zXG4gICAgdmFyIGRlZmF1bHRPcHRpb25zJCQxID0gZ2V0T3B0aW9ucyQxKCk7XG5cbiAgICAvLyBjcmVhdGUgdGhlIGRhdGEgc3RvcmUsIHRoaXMgd2lsbCBjb250YWluIGFsbCBvdXIgYXBwIGluZm9cbiAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgIC8vIGluaXRpYWwgc3RhdGUgKHNob3VsZCBiZSBzZXJpYWxpemFibGUpXG4gICAgICBjcmVhdGVJbml0aWFsU3RhdGUoZGVmYXVsdE9wdGlvbnMkJDEpLFxuXG4gICAgICAvLyBxdWVyaWVzXG4gICAgICBbcXVlcmllcywgY3JlYXRlT3B0aW9uUXVlcmllcyhkZWZhdWx0T3B0aW9ucyQkMSldLFxuXG4gICAgICAvLyBhY3Rpb24gaGFuZGxlcnNcbiAgICAgIFthY3Rpb25zLCBjcmVhdGVPcHRpb25BY3Rpb25zKGRlZmF1bHRPcHRpb25zJCQxKV1cbiAgICApO1xuXG4gICAgLy8gc2V0IGluaXRpYWwgb3B0aW9uc1xuICAgIHN0b3JlLmRpc3BhdGNoKCdTRVRfT1BUSU9OUycsIHsgb3B0aW9uczogaW5pdGlhbE9wdGlvbnMgfSk7XG5cbiAgICAvLyByZW5kZXIgaW5pdGlhbCB2aWV3XG4gICAgdmFyIHZpZXcgPSByb290KHN0b3JlLCB7IGlkOiBnZXRVbmlxdWVJZCgpIH0pO1xuXG4gICAgLy9cbiAgICAvLyBQUklWQVRFIEFQSSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICB2YXIgcmVzdGluZyA9IGZhbHNlO1xuICAgIHZhciBoaWRkZW4gPSBmYWxzZTtcbiAgICB2YXIgcmVhZFdyaXRlQXBpID0ge1xuICAgICAgLy8gbmVjZXNzYXJ5IGZvciB1cGRhdGUgbG9vcFxuXG4gICAgICAvKipcbiAgICAgICAqIFJlYWRzIGZyb20gZG9tIChuZXZlciBjYWxsIG1hbnVhbGx5KVxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgX3JlYWQ6IGZ1bmN0aW9uIF9yZWFkKCkge1xuICAgICAgICAvLyBpZiByZXN0aW5nLCBubyBuZWVkIHRvIHJlYWQgYXMgbnVtYmVycyB3aWxsIHN0aWxsIGFsbCBiZSBjb3JyZWN0XG4gICAgICAgIGlmIChyZXN0aW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVhZCB2aWV3IGRhdGFcbiAgICAgICAgdmlldy5fcmVhZCgpO1xuXG4gICAgICAgIC8vIGlmIHJvb3QgaXMgaGlkZGVuXG4gICAgICAgIGhpZGRlbiA9IHZpZXcucmVjdC5lbGVtZW50LmhpZGRlbjtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV3JpdGVzIHRvIGRvbSAobmV2ZXIgY2FsbCBtYW51YWxseSlcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF93cml0ZTogZnVuY3Rpb24gX3dyaXRlKHRzKSB7XG4gICAgICAgIC8vIGRvbid0IGRvIGFueXRoaW5nIHdoaWxlIGhpZGRlblxuICAgICAgICBpZiAoaGlkZGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IGFsbCBhY3Rpb25zIGZyb20gc3RvcmVcbiAgICAgICAgdmFyIGFjdGlvbnMkJDEgPSBzdG9yZVxuICAgICAgICAgIC5wcm9jZXNzQWN0aW9uUXVldWUoKVxuXG4gICAgICAgICAgLy8gZmlsdGVyIG91dCBzZXQgYWN0aW9ucyAod2lsbCB0cmlnZ2VyIERJRF9TRVQpXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAhL15TRVRfLy50ZXN0KGFjdGlvbi50eXBlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBpZiB3YXMgaWRsaW5nIGFuZCBubyBhY3Rpb25zIHN0b3AgaGVyZVxuICAgICAgICBpZiAocmVzdGluZyAmJiAhYWN0aW9ucyQkMS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzb21lIGFjdGlvbnMgbWlnaHQgdHJpZ2dlciBldmVudHNcbiAgICAgICAgcm91dGVBY3Rpb25zVG9FdmVudHMoYWN0aW9ucyQkMSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHRoZSB2aWV3XG4gICAgICAgIHJlc3RpbmcgPSB2aWV3Ll93cml0ZSh0cywgYWN0aW9ucyQkMSk7XG5cbiAgICAgICAgLy8gbm93IGlkbGluZ1xuICAgICAgICBpZiAocmVzdGluZykge1xuICAgICAgICAgIHN0b3JlLnByb2Nlc3NEaXNwYXRjaFF1ZXVlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9cbiAgICAvLyBFWFBPU0UgRVZFTlRTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIHZhciBjcmVhdGVFdmVudCA9IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KG5hbWUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBkZWZhdWx0IGV2ZW50XG4gICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICB0eXBlOiBuYW1lXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gbm8gZGF0YSB0byBhZGRcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29weSByZWxldmFudCBwcm9wc1xuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKSkge1xuICAgICAgICAgIGV2ZW50LmVycm9yID0gZGF0YS5lcnJvciA/IF9leHRlbmRzKHt9LCBkYXRhLmVycm9yKSA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICBldmVudC5zdGF0dXMgPSBfZXh0ZW5kcyh7fSwgZGF0YS5zdGF0dXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb25seSBzb3VyY2UgaXMgYXZhaWxhYmxlLCBlbHNlIGFkZCBpdGVtIGlmIHBvc3NpYmxlXG4gICAgICAgIGlmIChkYXRhLnNvdXJjZSkge1xuICAgICAgICAgIGV2ZW50LmZpbGUgPSBkYXRhLnNvdXJjZTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLml0ZW0gfHwgZGF0YS5pZCkge1xuICAgICAgICAgIHZhciBpdGVtID0gZGF0YS5pdGVtID8gZGF0YS5pdGVtIDogc3RvcmUucXVlcnkoJ0dFVF9JVEVNJywgZGF0YS5pZCk7XG4gICAgICAgICAgZXZlbnQuZmlsZSA9IGl0ZW0gPyBjcmVhdGVJdGVtQVBJKGl0ZW0pIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSBwcm9ncmVzcyBldmVudCBhZGQgdGhlIHByb2dyZXNzIGFtb3VudFxuICAgICAgICBpZiAoL3Byb2dyZXNzLy50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgZXZlbnQucHJvZ3Jlc3MgPSBkYXRhLnByb2dyZXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIGV2ZW50Um91dGVzID0ge1xuICAgICAgRElEX0RFU1RST1k6IGNyZWF0ZUV2ZW50KCdkZXN0cm95JyksXG5cbiAgICAgIERJRF9JTklUOiBjcmVhdGVFdmVudCgnaW5pdCcpLFxuXG4gICAgICBESURfVEhST1dfTUFYX0ZJTEVTOiBjcmVhdGVFdmVudCgnd2FybmluZycpLFxuXG4gICAgICBESURfU1RBUlRfSVRFTV9MT0FEOiBjcmVhdGVFdmVudCgnYWRkZmlsZXN0YXJ0JyksXG4gICAgICBESURfVVBEQVRFX0lURU1fTE9BRF9QUk9HUkVTUzogY3JlYXRlRXZlbnQoJ2FkZGZpbGVwcm9ncmVzcycpLFxuICAgICAgRElEX0xPQURfSVRFTTogY3JlYXRlRXZlbnQoJ2FkZGZpbGUnKSxcblxuICAgICAgRElEX1RIUk9XX0lURU1fSU5WQUxJRDogW2NyZWF0ZUV2ZW50KCdlcnJvcicpLCBjcmVhdGVFdmVudCgnYWRkZmlsZScpXSxcblxuICAgICAgRElEX1RIUk9XX0lURU1fTE9BRF9FUlJPUjogW2NyZWF0ZUV2ZW50KCdlcnJvcicpLCBjcmVhdGVFdmVudCgnYWRkZmlsZScpXSxcblxuICAgICAgRElEX1NUQVJUX0lURU1fUFJPQ0VTU0lORzogY3JlYXRlRXZlbnQoJ3Byb2Nlc3NmaWxlc3RhcnQnKSxcbiAgICAgIERJRF9VUERBVEVfSVRFTV9QUk9DRVNTX1BST0dSRVNTOiBjcmVhdGVFdmVudCgncHJvY2Vzc2ZpbGVwcm9ncmVzcycpLFxuICAgICAgRElEX0FCT1JUX0lURU1fUFJPQ0VTU0lORzogY3JlYXRlRXZlbnQoJ3Byb2Nlc3NmaWxlYWJvcnQnKSxcbiAgICAgIERJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkc6IGNyZWF0ZUV2ZW50KCdwcm9jZXNzZmlsZScpLFxuICAgICAgRElEX1JFVkVSVF9JVEVNX1BST0NFU1NJTkc6IGNyZWF0ZUV2ZW50KCdwcm9jZXNzZmlsZXJldmVydCcpLFxuXG4gICAgICBESURfVEhST1dfSVRFTV9QUk9DRVNTSU5HX0VSUk9SOiBbXG4gICAgICAgIGNyZWF0ZUV2ZW50KCdlcnJvcicpLFxuICAgICAgICBjcmVhdGVFdmVudCgncHJvY2Vzc2ZpbGUnKVxuICAgICAgXSxcblxuICAgICAgU1BMSUNFX0lURU06IGNyZWF0ZUV2ZW50KCdyZW1vdmVmaWxlJylcbiAgICB9O1xuXG4gICAgdmFyIGV4cG9zZUV2ZW50ID0gZnVuY3Rpb24gZXhwb3NlRXZlbnQoZXZlbnQpIHtcbiAgICAgIC8vIGNyZWF0ZSBldmVudCBvYmplY3QgdG8gYmUgZGlzcGF0Y2hlZFxuICAgICAgdmFyIGRldGFpbCA9IF9leHRlbmRzKHsgcG9uZDogZXhwb3J0cyB9LCBldmVudCk7XG4gICAgICBkZWxldGUgZGV0YWlsLnR5cGU7XG4gICAgICB2aWV3LmVsZW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdGaWxlUG9uZDonICsgZXZlbnQudHlwZSwge1xuICAgICAgICAgIC8vIGV2ZW50IGluZm9cbiAgICAgICAgICBkZXRhaWw6IGRldGFpbCxcblxuICAgICAgICAgIC8vIGV2ZW50IGJlaGF2aW91clxuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb21wb3NlZDogdHJ1ZSAvLyB0cmlnZ2VycyBsaXN0ZW5lcnMgb3V0c2lkZSBvZiBzaGFkb3cgcm9vdFxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgLy8gZXZlbnQgb2JqZWN0IHRvIHBhcmFtcyB1c2VkIGZvciBgb24oKWAgZXZlbnQgaGFuZGxlcnMgYW5kIGNhbGxiYWNrcyBgb25pbml0KClgXG4gICAgICB2YXIgcGFyYW1zID0gW107XG5cbiAgICAgIC8vIGlmIGlzIHBvc3NpYmxlIGVycm9yIGV2ZW50LCBtYWtlIGl0IHRoZSBmaXJzdCBwYXJhbVxuICAgICAgaWYgKGV2ZW50Lmhhc093blByb3BlcnR5KCdlcnJvcicpKSB7XG4gICAgICAgIHBhcmFtcy5wdXNoKGV2ZW50LmVycm9yKTtcbiAgICAgIH1cbiAgICAgIC8vIGZpbGUgaXMgYWx3YXlzIHNlY3Rpb25cbiAgICAgIGlmIChldmVudC5oYXNPd25Qcm9wZXJ0eSgnZmlsZScpKSB7XG4gICAgICAgIHBhcmFtcy5wdXNoKGV2ZW50LmZpbGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBhcHBlbmQgb3RoZXJwIHByb3BzXG4gICAgICB2YXIgZmlsdGVyZWQgPSBbJ3R5cGUnLCAnZXJyb3InLCAnZmlsZSddO1xuICAgICAgT2JqZWN0LmtleXMoZXZlbnQpXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgcmV0dXJuICFmaWx0ZXJlZC5pbmNsdWRlcyhrZXkpO1xuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyYW1zLnB1c2goZXZlbnRba2V5XSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBvbih0eXBlLCAoKSA9PiB7IH0pXG4gICAgICBleHBvcnRzLmZpcmUuYXBwbHkoZXhwb3J0cywgW2V2ZW50LnR5cGVdLmNvbmNhdChwYXJhbXMpKTtcblxuICAgICAgLy8gb25pbml0ID0gKCkgPT4ge31cbiAgICAgIHZhciBoYW5kbGVyID0gc3RvcmUucXVlcnkoJ0dFVF9PTicgKyBldmVudC50eXBlLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgaGFuZGxlci5hcHBseSh1bmRlZmluZWQsIHBhcmFtcyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciByb3V0ZUFjdGlvbnNUb0V2ZW50cyA9IGZ1bmN0aW9uIHJvdXRlQWN0aW9uc1RvRXZlbnRzKGFjdGlvbnMkJDEpIHtcbiAgICAgIGlmICghYWN0aW9ucyQkMS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhY3Rpb25zJCQxLmZvckVhY2goZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIGlmICghZXZlbnRSb3V0ZXNbYWN0aW9uLnR5cGVdKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByb3V0ZXMgPSBldmVudFJvdXRlc1thY3Rpb24udHlwZV07XG4gICAgICAgIChBcnJheS5pc0FycmF5KHJvdXRlcykgPyByb3V0ZXMgOiBbcm91dGVzXSkuZm9yRWFjaChmdW5jdGlvbihyb3V0ZSkge1xuICAgICAgICAgIGV4cG9zZUV2ZW50KHJvdXRlKGFjdGlvbi5kYXRhKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vXG4gICAgLy8gUFVCTElDIEFQSSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICB2YXIgc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKCdTRVRfT1BUSU9OUycsIHsgb3B0aW9uczogb3B0aW9ucyB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGdldEZpbGUgPSBmdW5jdGlvbiBnZXRGaWxlKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gc3RvcmUucXVlcnkoJ0dFVF9JVEVNJywgcXVlcnkpO1xuICAgIH07XG5cbiAgICB2YXIgYWRkRmlsZSA9IGZ1bmN0aW9uIGFkZEZpbGUoc291cmNlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9XG4gICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKCdBRERfSVRFTScsIHtcbiAgICAgICAgICBpbnRlcmFjdGlvbk1ldGhvZDogSW50ZXJhY3Rpb25NZXRob2QuQVBJLFxuICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgIGluZGV4OiBvcHRpb25zLmluZGV4LFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgICAgZmFpbHVyZTogcmVqZWN0XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciByZW1vdmVGaWxlID0gZnVuY3Rpb24gcmVtb3ZlRmlsZShxdWVyeSkge1xuICAgICAgLy8gcmVxdWVzdCBpdGVtIHJlbW92YWxcbiAgICAgIHN0b3JlLmRpc3BhdGNoKCdSRU1PVkVfSVRFTScsIHsgcXVlcnk6IHF1ZXJ5IH0pO1xuXG4gICAgICAvLyBzZWUgaWYgaXRlbSBoYXMgYmVlbiByZW1vdmVkXG4gICAgICByZXR1cm4gc3RvcmUucXVlcnkoJ0dFVF9JVEVNJywgcXVlcnkpID09PSBudWxsO1xuICAgIH07XG5cbiAgICB2YXIgYWRkRmlsZXMgPSBmdW5jdGlvbiBhZGRGaWxlcygpIHtcbiAgICAgIGZvciAoXG4gICAgICAgIHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDtcbiAgICAgICAgX2tleSA8IF9sZW47XG4gICAgICAgIF9rZXkrK1xuICAgICAgKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHNvdXJjZXMgPSBbXTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcblxuICAgICAgICAvLyB1c2VyIHBhc3NlZCBhIHNvdXJjZXMgYXJyYXlcbiAgICAgICAgaWYgKGlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICAgICAgICBzb3VyY2VzLnB1c2guYXBwbHkoc291cmNlcywgdG9Db25zdW1hYmxlQXJyYXkoYXJnc1swXSkpO1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgYXJnc1sxXSB8fCB7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdXNlciBwYXNzZWQgc291cmNlcyBhcyBhcmd1bWVudHMsIGxhc3Qgb25lIG1pZ2h0IGJlIG9wdGlvbnMgb2JqZWN0XG4gICAgICAgICAgdmFyIGxhc3RBcmd1bWVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAodHlwZW9mIGxhc3RBcmd1bWVudCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgPyAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICA6IF90eXBlb2YobGFzdEFyZ3VtZW50KSkgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAhKGxhc3RBcmd1bWVudCBpbnN0YW5jZW9mIEJsb2IpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIGFyZ3MucG9wKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGFkZCByZXN0IHRvIHNvdXJjZXNcbiAgICAgICAgICBzb3VyY2VzLnB1c2guYXBwbHkoc291cmNlcywgYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc291cmNlUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgdmFyIGRlbGF5UHJvbWlzZXMgPSBmb3JFYWNoRGVsYXllZChzb3VyY2VzLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgICBzb3VyY2VQcm9taXNlcy5wdXNoKGFkZEZpbGUoc291cmNlLCBvcHRpb25zKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFByb21pc2UuYWxsKGRlbGF5UHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgUHJvbWlzZS5hbGwoc291cmNlUHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0cykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGdldEZpbGVzID0gZnVuY3Rpb24gZ2V0RmlsZXMoKSB7XG4gICAgICByZXR1cm4gc3RvcmUucXVlcnkoJ0dFVF9JVEVNUycpO1xuICAgIH07XG5cbiAgICB2YXIgcHJvY2Vzc0ZpbGUgPSBmdW5jdGlvbiBwcm9jZXNzRmlsZShxdWVyeSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaCgnUFJPQ0VTU19JVEVNJywge1xuICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICAgIGZhaWx1cmU6IHJlamVjdFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgcHJvY2Vzc0ZpbGVzID0gZnVuY3Rpb24gcHJvY2Vzc0ZpbGVzKCkge1xuICAgICAgZm9yIChcbiAgICAgICAgdmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwO1xuICAgICAgICBfa2V5MiA8IF9sZW4yO1xuICAgICAgICBfa2V5MisrXG4gICAgICApIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICB2YXIgcXVlcmllcyQkMSA9IEFycmF5LmlzQXJyYXkoYXJnc1swXSkgPyBhcmdzWzBdIDogYXJncztcbiAgICAgIGlmICghcXVlcmllcyQkMS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGdldEZpbGVzKCkubWFwKHByb2Nlc3NGaWxlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocXVlcmllcyQkMS5tYXAocHJvY2Vzc0ZpbGUpKTtcbiAgICB9O1xuXG4gICAgdmFyIHJlbW92ZUZpbGVzID0gZnVuY3Rpb24gcmVtb3ZlRmlsZXMoKSB7XG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7XG4gICAgICAgIF9rZXkzIDwgX2xlbjM7XG4gICAgICAgIF9rZXkzKytcbiAgICAgICkge1xuICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICB9XG5cbiAgICAgIHZhciBxdWVyaWVzJCQxID0gQXJyYXkuaXNBcnJheShhcmdzWzBdKSA/IGFyZ3NbMF0gOiBhcmdzO1xuICAgICAgdmFyIGZpbGVzID0gZ2V0RmlsZXMoKTtcblxuICAgICAgaWYgKCFxdWVyaWVzJCQxLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZmlsZXMubWFwKHJlbW92ZUZpbGUpKTtcbiAgICAgIH1cblxuICAgICAgLy8gd2hlbiByZW1vdmluZyBieSBpbmRleCB0aGUgaW5kZXhlcyBzaGlmdCBhZnRlciBlYWNoIGZpbGUgcmVtb3ZhbCBzbyB3ZSBuZWVkIHRvIGNvbnZlcnQgaW5kZXhlcyB0byBpZHNcbiAgICAgIHZhciBtYXBwZWRRdWVyaWVzID0gcXVlcmllcyQkMVxuICAgICAgICAubWFwKGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICAgICAgcmV0dXJuIGlzTnVtYmVyKHF1ZXJ5KVxuICAgICAgICAgICAgPyBmaWxlc1txdWVyeV0gPyBmaWxlc1txdWVyeV0uaWQgOiBudWxsXG4gICAgICAgICAgICA6IHF1ZXJ5O1xuICAgICAgICB9KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIG1hcHBlZFF1ZXJpZXMubWFwKHJlbW92ZUZpbGUpO1xuICAgIH07XG5cbiAgICB2YXIgZXhwb3J0cyA9IF9leHRlbmRzKFxuICAgICAge30sXG4gICAgICBvbigpLFxuICAgICAgcmVhZFdyaXRlQXBpLFxuICAgICAgY3JlYXRlT3B0aW9uQVBJKHN0b3JlLCBkZWZhdWx0T3B0aW9ucyQkMSksXG4gICAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPdmVycmlkZSBvcHRpb25zIGRlZmluZWQgaW4gb3B0aW9ucyBvYmplY3RcbiAgICAgICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIHNldE9wdGlvbnM6IHNldE9wdGlvbnMsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvYWQgdGhlIGdpdmVuIGZpbGVcbiAgICAgICAgICogQHBhcmFtIHNvdXJjZSAtIHRoZSBzb3VyY2Ugb2YgdGhlIGZpbGUgKGVpdGhlciBhIEZpbGUsIGJhc2U2NCBkYXRhIHVyaSBvciB1cmwpXG4gICAgICAgICAqIEBwYXJhbSBvcHRpb25zIC0gb2JqZWN0LCB7IGluZGV4OiAwIH1cbiAgICAgICAgICovXG4gICAgICAgIGFkZEZpbGU6IGFkZEZpbGUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvYWQgdGhlIGdpdmVuIGZpbGVzXG4gICAgICAgICAqIEBwYXJhbSBzb3VyY2VzIC0gdGhlIHNvdXJjZXMgb2YgdGhlIGZpbGVzIHRvIGxvYWRcbiAgICAgICAgICogQHBhcmFtIG9wdGlvbnMgLSBvYmplY3QsIHsgaW5kZXg6IDAgfVxuICAgICAgICAgKi9cbiAgICAgICAgYWRkRmlsZXM6IGFkZEZpbGVzLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBmaWxlIG9iamVjdHMgbWF0Y2hpbmcgdGhlIGdpdmVuIHF1ZXJ5XG4gICAgICAgICAqIEBwYXJhbSBxdWVyeSB7IHN0cmluZywgbnVtYmVyLCBudWxsIH1cbiAgICAgICAgICovXG4gICAgICAgIGdldEZpbGU6IGdldEZpbGUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwbG9hZCBmaWxlIHdpdGggZ2l2ZW4gbmFtZVxuICAgICAgICAgKiBAcGFyYW0gcXVlcnkgeyBzdHJpbmcsIG51bWJlciwgbnVsbCAgfVxuICAgICAgICAgKi9cbiAgICAgICAgcHJvY2Vzc0ZpbGU6IHByb2Nlc3NGaWxlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIGEgZmlsZSBieSBpdHMgbmFtZVxuICAgICAgICAgKiBAcGFyYW0gcXVlcnkgeyBzdHJpbmcsIG51bWJlciwgbnVsbCAgfVxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlRmlsZTogcmVtb3ZlRmlsZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhbGwgZmlsZXMgKHdyYXBwZWQgaW4gcHVibGljIGFwaSlcbiAgICAgICAgICovXG4gICAgICAgIGdldEZpbGVzOiBnZXRGaWxlcyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RhcnRzIHVwbG9hZGluZyBhbGwgZmlsZXNcbiAgICAgICAgICovXG4gICAgICAgIHByb2Nlc3NGaWxlczogcHJvY2Vzc0ZpbGVzLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhcnMgYWxsIGZpbGVzIGZyb20gdGhlIGZpbGVzIGxpc3RcbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZUZpbGVzOiByZW1vdmVGaWxlcyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQnJvd3NlIHRoZSBmaWxlIHN5c3RlbSBmb3IgYSBmaWxlXG4gICAgICAgICAqL1xuICAgICAgICBicm93c2U6IGZ1bmN0aW9uIGJyb3dzZSgpIHtcbiAgICAgICAgICAvLyBuZWVkcyB0byBiZSB0cmlnZ2VyIGRpcmVjdGx5IGFzIHVzZXIgYWN0aW9uIG5lZWRzIHRvIGJlIHRyYWNlYWJsZSAoaXMgbm90IHRyYWNlYWJsZSBpbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgICAgICAgdmFyIGlucHV0ID0gdmlldy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9ZmlsZV0nKTtcbiAgICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIGlucHV0LmNsaWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXN0cm95cyB0aGUgYXBwXG4gICAgICAgICAqL1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgIC8vIHJlcXVlc3QgZGVzdHJ1Y3Rpb25cbiAgICAgICAgICBleHBvcnRzLmZpcmUoJ2Rlc3Ryb3knLCB2aWV3LmVsZW1lbnQpO1xuXG4gICAgICAgICAgLy8gc3RvcCBhY3RpdmUgcHJvY2Vzc2VzIChmaWxlIHVwbG9hZHMsIGZldGNoZXMsIHN0dWZmIGxpa2UgdGhhdClcbiAgICAgICAgICAvLyBsb29wIG92ZXIgaXRlbXMgYW5kIGRlcGVuZGluZyBvbiBzdGF0ZXMgY2FsbCBhYm9ydCBmb3Igb25nb2luZyBwcm9jZXNzZXNcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaCgnQUJPUlRfQUxMJyk7XG5cbiAgICAgICAgICAvLyBkZXN0cm95IHZpZXdcbiAgICAgICAgICB2aWV3Ll9kZXN0cm95KCk7XG5cbiAgICAgICAgICAvLyBkaXNwYXRjaCBkZXN0cm95XG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ0RJRF9ERVNUUk9ZJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc2VydHMgdGhlIHBsdWdpbiBiZWZvcmUgdGhlIHRhcmdldCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIGluc2VydEJlZm9yZSQkMShlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGluc2VydEJlZm9yZSh2aWV3LmVsZW1lbnQsIGVsZW1lbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnNlcnRzIHRoZSBwbHVnaW4gYWZ0ZXIgdGhlIHRhcmdldCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICBpbnNlcnRBZnRlcjogZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIkJDEoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiBpbnNlcnRBZnRlcih2aWV3LmVsZW1lbnQsIGVsZW1lbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcHBlbmRzIHRoZSBwbHVnaW4gdG8gdGhlIHRhcmdldCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICBhcHBlbmRUbzogZnVuY3Rpb24gYXBwZW5kVG8oZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50LmFwcGVuZENoaWxkKHZpZXcuZWxlbWVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlcGxhY2VzIGFuIGVsZW1lbnQgd2l0aCB0aGUgYXBwXG4gICAgICAgICAqL1xuICAgICAgICByZXBsYWNlRWxlbWVudDogZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICAgIC8vIGluc2VydCB0aGUgYXBwIGJlZm9yZSB0aGUgZWxlbWVudFxuICAgICAgICAgIGluc2VydEJlZm9yZSh2aWV3LmVsZW1lbnQsIGVsZW1lbnQpO1xuXG4gICAgICAgICAgLy8gcmVtb3ZlIHRoZSBvcmlnaW5hbCBlbGVtZW50XG4gICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuXG4gICAgICAgICAgLy8gcmVtZW1iZXIgb3JpZ2luYWwgZWxlbWVudFxuICAgICAgICAgIG9yaWdpbmFsRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc3RvcmVzIHRoZSBvcmlnaW5hbCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICByZXN0b3JlRWxlbWVudDogZnVuY3Rpb24gcmVzdG9yZUVsZW1lbnQoKSB7XG4gICAgICAgICAgaWYgKCFvcmlnaW5hbEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gbm8gZWxlbWVudCB0byByZXN0b3JlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gcmVzdG9yZSBvcmlnaW5hbCBlbGVtZW50XG4gICAgICAgICAgaW5zZXJ0QWZ0ZXIob3JpZ2luYWxFbGVtZW50LCB2aWV3LmVsZW1lbnQpO1xuXG4gICAgICAgICAgLy8gcmVtb3ZlIG91ciBlbGVtZW50XG4gICAgICAgICAgdmlldy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodmlldy5lbGVtZW50KTtcblxuICAgICAgICAgIC8vIHJlbW92ZSByZWZlcmVuY2VcbiAgICAgICAgICBvcmlnaW5hbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGFwcCByb290IGlzIGF0dGFjaGVkIHRvIGdpdmVuIGVsZW1lbnRcbiAgICAgICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGlzQXR0YWNoZWRUbzogZnVuY3Rpb24gaXNBdHRhY2hlZFRvKGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdmlldy5lbGVtZW50ID09PSBlbGVtZW50IHx8IG9yaWdpbmFsRWxlbWVudCA9PT0gZWxlbWVudDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgcm9vdCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICBlbGVtZW50OiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgICAgICByZXR1cm4gdmlldy5lbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBEb25lIVxuICAgIHN0b3JlLmRpc3BhdGNoKCdESURfSU5JVCcpO1xuXG4gICAgLy8gY3JlYXRlIGFjdHVhbCBhcGkgb2JqZWN0XG4gICAgcmV0dXJuIGNyZWF0ZU9iamVjdChleHBvcnRzKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlQXBwT2JqZWN0ID0gZnVuY3Rpb24gY3JlYXRlQXBwT2JqZWN0KCkge1xuICAgIHZhciBjdXN0b21PcHRpb25zID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMkJDEgPSB7fTtcbiAgICBmb3JpbihnZXRPcHRpb25zJDEoKSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgZGVmYXVsdE9wdGlvbnMkJDFba2V5XSA9IHZhbHVlWzBdO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IGFwcCBvcHRpb25zXG4gICAgdmFyIGFwcCA9IGNyZWF0ZUFwcCQxKF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucyQkMSwgY3VzdG9tT3B0aW9ucykpO1xuXG4gICAgLy8gcmV0dXJuIHRoZSBwbHVnaW4gaW5zdGFuY2VcbiAgICByZXR1cm4gYXBwO1xuICB9O1xuXG4gIHZhciB0b0NhbWVscyA9IGZ1bmN0aW9uIHRvQ2FtZWxzKHN0cmluZykge1xuICAgIHZhciBzZXBhcmF0b3IgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnLSc7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKG5ldyBSZWdFeHAoc2VwYXJhdG9yICsgJy4nLCAnZycpLCBmdW5jdGlvbihzdWIpIHtcbiAgICAgIHJldHVybiBzdWIuY2hhckF0KDEpLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGxvd2VyQ2FzZUZpcnN0TGV0dGVyID0gZnVuY3Rpb24gbG93ZXJDYXNlRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgfTtcblxuICB2YXIgYXR0cmlidXRlTmFtZVRvUHJvcGVydHlOYW1lID0gZnVuY3Rpb24gYXR0cmlidXRlTmFtZVRvUHJvcGVydHlOYW1lKFxuICAgIGF0dHJpYnV0ZU5hbWVcbiAgKSB7XG4gICAgcmV0dXJuIHRvQ2FtZWxzKGF0dHJpYnV0ZU5hbWUucmVwbGFjZSgvXmRhdGEtLywgJycpKTtcbiAgfTtcblxuICB2YXIgbWFwT2JqZWN0ID0gZnVuY3Rpb24gbWFwT2JqZWN0KG9iamVjdCwgcHJvcGVydHlNYXApIHtcbiAgICAvLyByZW1vdmUgdW53YW50ZWRcbiAgICBmb3Jpbihwcm9wZXJ0eU1hcCwgZnVuY3Rpb24oc2VsZWN0b3IsIG1hcHBpbmcpIHtcbiAgICAgIGZvcmluKG9iamVjdCwgZnVuY3Rpb24ocHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgIC8vIGNyZWF0ZSByZWdleHAgc2hvcnRjdXRcbiAgICAgICAgdmFyIHNlbGVjdG9yUmVnRXhwID0gbmV3IFJlZ0V4cChzZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gdGVzdHMgaWZcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBzZWxlY3RvclJlZ0V4cC50ZXN0KHByb3BlcnR5KTtcblxuICAgICAgICAvLyBubyBtYXRjaCwgc2tpcFxuICAgICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGVyZSdzIGEgbWFwcGluZywgdGhlIG9yaWdpbmFsIHByb3BlcnR5IGlzIGFsd2F5cyByZW1vdmVkXG4gICAgICAgIGRlbGV0ZSBvYmplY3RbcHJvcGVydHldO1xuXG4gICAgICAgIC8vIHNob3VsZCBvbmx5IHJlbW92ZSwgd2UgZG9uZSFcbiAgICAgICAgaWYgKG1hcHBpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW92ZSB2YWx1ZSB0byBuZXcgcHJvcGVydHlcbiAgICAgICAgaWYgKGlzU3RyaW5nKG1hcHBpbmcpKSB7XG4gICAgICAgICAgb2JqZWN0W21hcHBpbmddID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW92ZSB0byBncm91cFxuICAgICAgICB2YXIgZ3JvdXAgPSBtYXBwaW5nLmdyb3VwO1xuICAgICAgICBpZiAoaXNPYmplY3QobWFwcGluZykgJiYgIW9iamVjdFtncm91cF0pIHtcbiAgICAgICAgICBvYmplY3RbZ3JvdXBdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBvYmplY3RbZ3JvdXBdW1xuICAgICAgICAgIGxvd2VyQ2FzZUZpcnN0TGV0dGVyKHByb3BlcnR5LnJlcGxhY2Uoc2VsZWN0b3JSZWdFeHAsICcnKSlcbiAgICAgICAgXSA9IHZhbHVlO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGRvIHN1Ym1hcHBpbmdcbiAgICAgIGlmIChtYXBwaW5nLm1hcHBpbmcpIHtcbiAgICAgICAgbWFwT2JqZWN0KG9iamVjdFttYXBwaW5nLmdyb3VwXSwgbWFwcGluZy5tYXBwaW5nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ2V0QXR0cmlidXRlc0FzT2JqZWN0ID0gZnVuY3Rpb24gZ2V0QXR0cmlidXRlc0FzT2JqZWN0KG5vZGUpIHtcbiAgICB2YXIgYXR0cmlidXRlTWFwcGluZyA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgLy8gdHVybiBhdHRyaWJ1dGVzIGludG8gb2JqZWN0XG4gICAgdmFyIG91dHB1dCA9IFtdXG4gICAgICAuY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KG5vZGUuYXR0cmlidXRlcykpXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uKG9iaiwgYXR0cmlidXRlKSB7XG4gICAgICAgIG9ialthdHRyaWJ1dGVOYW1lVG9Qcm9wZXJ0eU5hbWUoYXR0cmlidXRlLm5hbWUpXSA9IGF0dHIoXG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBhdHRyaWJ1dGUubmFtZVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgfSwge30pO1xuXG4gICAgLy8gZG8gbWFwcGluZyBvZiBvYmplY3QgcHJvcGVydGllc1xuICAgIG1hcE9iamVjdChvdXRwdXQsIGF0dHJpYnV0ZU1hcHBpbmcpO1xuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICB2YXIgY3JlYXRlQXBwQXRFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlQXBwQXRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICB2YXIgb3B0aW9ucyA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgLy8gaG93IGF0dHJpYnV0ZXMgb2YgdGhlIGlucHV0IGVsZW1lbnQgYXJlIG1hcHBlZCB0byB0aGUgb3B0aW9ucyBmb3IgdGhlIHBsdWdpblxuICAgIHZhciBhdHRyaWJ1dGVNYXBwaW5nID0ge1xuICAgICAgLy8gdHJhbnNsYXRlIHRvIG90aGVyIG5hbWVcbiAgICAgICdeY2xhc3MkJzogJ2NsYXNzTmFtZScsXG4gICAgICAnXm11bHRpcGxlJCc6ICdhbGxvd011bHRpcGxlJyxcbiAgICAgICdeY2FwdHVyZSQnOiAnY2FwdHVyZU1ldGhvZCcsXG5cbiAgICAgIC8vIGdyb3VwIHVuZGVyIHNpbmdsZSBwcm9wZXJ0eVxuICAgICAgJ15zZXJ2ZXInOiB7XG4gICAgICAgIGdyb3VwOiAnc2VydmVyJyxcbiAgICAgICAgbWFwcGluZzoge1xuICAgICAgICAgICdecHJvY2Vzcyc6IHtcbiAgICAgICAgICAgIGdyb3VwOiAncHJvY2VzcydcbiAgICAgICAgICB9LFxuICAgICAgICAgICdecmV2ZXJ0Jzoge1xuICAgICAgICAgICAgZ3JvdXA6ICdyZXZlcnQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnXmZldGNoJzoge1xuICAgICAgICAgICAgZ3JvdXA6ICdmZXRjaCdcbiAgICAgICAgICB9LFxuICAgICAgICAgICdecmVzdG9yZSc6IHtcbiAgICAgICAgICAgIGdyb3VwOiAncmVzdG9yZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgICdebG9hZCc6IHtcbiAgICAgICAgICAgIGdyb3VwOiAnbG9hZCdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8vIGRvbid0IGluY2x1ZGUgaW4gb2JqZWN0XG4gICAgICAnXnR5cGUkJzogZmFsc2UsXG4gICAgICAnXmZpbGVzJCc6IGZhbHNlXG4gICAgfTtcblxuICAgIC8vIGFkZCBhZGRpdGlvbmFsIG9wdGlvbiB0cmFuc2xhdG9yc1xuICAgIGFwcGx5RmlsdGVycygnU0VUX0FUVFJJQlVURV9UT19PUFRJT05fTUFQJywgYXR0cmlidXRlTWFwcGluZyk7XG5cbiAgICAvLyBjcmVhdGUgZmluYWwgb3B0aW9ucyBvYmplY3QgYnkgZXh0cmFjdGluZyBvcHRpb25zIGZyb20gZWxlbWVudFxuICAgIC8vIGFuZCB0aGVuIG92ZXJyaWRpbmcgd2l0aCBvcHRpb25zIG9iamVjdFxuICAgIHZhciBtZXJnZWRPcHRpb25zID0gX2V4dGVuZHMoXG4gICAgICB7fSxcbiAgICAgIGdldEF0dHJpYnV0ZXNBc09iamVjdChcbiAgICAgICAgZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0ZJRUxEU0VUJ1xuICAgICAgICAgID8gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWZpbGVdJylcbiAgICAgICAgICA6IGVsZW1lbnQsXG4gICAgICAgIGF0dHJpYnV0ZU1hcHBpbmdcbiAgICAgICksXG4gICAgICBvcHRpb25zXG4gICAgKTtcblxuICAgIC8vIGlmIHBhcmVudCBpcyBhIGZpZWxkc2V0LCBnZXQgZmlsZXMgZnJvbSBwYXJlbnQgYnkgc2VsZWN0aW5nIGFsbCBpbnB1dCBmaWVsZHMgdGhhdCBhcmUgbm90IGZpbGUgdXBsb2FkIGZpZWxkc1xuICAgIC8vIHRoZXNlIHdpbGwgdGhlbiBiZSBhdXRvbWF0aWNhbGx5IHNldCB0byB0aGUgaW5pdGlhbCBmaWxlc1xuICAgIG1lcmdlZE9wdGlvbnMuZmlsZXMgPSAob3B0aW9ucy5maWxlcyB8fCBbXSkuY29uY2F0KFxuICAgICAgW11cbiAgICAgICAgLmNvbmNhdChcbiAgICAgICAgICB0b0NvbnN1bWFibGVBcnJheShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Om5vdChbdHlwZT1maWxlXSknKSlcbiAgICAgICAgKVxuICAgICAgICAubWFwKGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvdXJjZTogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIHR5cGU6IGlucHV0LmRhdGFzZXQudHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIGJ1aWxkIHBsdWdpblxuICAgIHZhciBhcHAgPSBjcmVhdGVBcHBPYmplY3QobWVyZ2VkT3B0aW9ucyk7XG5cbiAgICAvLyBhZGQgYWxyZWFkeSBzZWxlY3RlZCBmaWxlc1xuICAgIGlmIChlbGVtZW50LmZpbGVzKSB7XG4gICAgICBbXS5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkoZWxlbWVudC5maWxlcykpLmZvckVhY2goZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICBhcHAuYWRkRmlsZShmaWxlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHJlcGxhY2UgdGhlIHRhcmdldCBlbGVtZW50XG4gICAgYXBwLnJlcGxhY2VFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgLy8gZXhwb3NlXG4gICAgcmV0dXJuIGFwcDtcbiAgfTtcblxuICAvLyBpZiBhbiBlbGVtZW50IGlzIHBhc3NlZCwgd2UgY3JlYXRlIHRoZSBpbnN0YW5jZSBhdCB0aGF0IGVsZW1lbnQsIGlmIG5vdCwgd2UganVzdCBjcmVhdGUgYW4gdXAgb2JqZWN0XG4gIHZhciBjcmVhdGVBcHAgPSBmdW5jdGlvbiBjcmVhdGVBcHAoKSB7XG4gICAgcmV0dXJuIGlzTm9kZShhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0pXG4gICAgICA/IGNyZWF0ZUFwcEF0RWxlbWVudC5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cylcbiAgICAgIDogY3JlYXRlQXBwT2JqZWN0LmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgfTtcblxuICB2YXIgUFJJVkFURV9NRVRIT0RTJDEgPSBbJ2ZpcmUnLCAnX3JlYWQnLCAnX3dyaXRlJ107XG5cbiAgdmFyIGNyZWF0ZUFwcEFQSSA9IGZ1bmN0aW9uIGNyZWF0ZUFwcEFQSShhcHApIHtcbiAgICB2YXIgYXBpID0ge307XG5cbiAgICBjb3B5T2JqZWN0UHJvcGVydGllc1RvT2JqZWN0KGFwcCwgYXBpLCBQUklWQVRFX01FVEhPRFMkMSk7XG5cbiAgICByZXR1cm4gYXBpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBwbGFjZWhvbGRlcnMgaW4gZ2l2ZW4gc3RyaW5nIHdpdGggcmVwbGFjZW1lbnRzXG4gICAqIEBwYXJhbSBzdHJpbmcgLSBcIkZvbyB7YmFyfVwiXCJcbiAgICogQHBhcmFtIHJlcGxhY2VtZW50cyAtIHsgXCJiYXJcIjogMTAgfVxuICAgKi9cbiAgdmFyIHJlcGxhY2VJblN0cmluZyA9IGZ1bmN0aW9uIHJlcGxhY2VJblN0cmluZyhzdHJpbmcsIHJlcGxhY2VtZW50cykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKD86eyhbYS16XSspfSkvZywgZnVuY3Rpb24obWF0Y2gsIGdyb3VwKSB7XG4gICAgICByZXR1cm4gcmVwbGFjZW1lbnRzW2dyb3VwXTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgaW1hZ2VzID0gWydqcGcnLCAnanBlZycsICdwbmcnLCAnZ2lmJywgJ2JtcCcsICd3ZWJwJywgJ3N2ZycsICd0aWZmJ107XG4gIHZhciB0ZXh0JDEgPSBbJ2NzcycsICdjc3YnLCAnaHRtbCcsICd0eHQnXTtcbiAgdmFyIG1hcCA9IHtcbiAgICB6aXA6ICd6aXB8Y29tcHJlc3NlZCcsXG4gICAgZXB1YjogJ2FwcGxpY2F0aW9uL2VwdWIremlwJ1xuICB9O1xuXG4gIHZhciBndWVzc3RpbWF0ZU1pbWVUeXBlID0gZnVuY3Rpb24gZ3Vlc3N0aW1hdGVNaW1lVHlwZSgpIHtcbiAgICB2YXIgZXh0ZW5zaW9uID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG5cbiAgICBleHRlbnNpb24gPSBleHRlbnNpb24udG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoaW1hZ2VzLmluY2x1ZGVzKGV4dGVuc2lvbikpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICdpbWFnZS8nICtcbiAgICAgICAgKGV4dGVuc2lvbiA9PT0gJ2pwZydcbiAgICAgICAgICA/ICdqcGVnJ1xuICAgICAgICAgIDogZXh0ZW5zaW9uID09PSAnc3ZnJyA/ICdzdmcreG1sJyA6IGV4dGVuc2lvbilcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0ZXh0JDEuaW5jbHVkZXMoZXh0ZW5zaW9uKSkge1xuICAgICAgcmV0dXJuICd0ZXh0LycgKyBleHRlbnNpb247XG4gICAgfVxuICAgIHJldHVybiBtYXBbZXh0ZW5zaW9uXSB8fCBudWxsO1xuICB9O1xuXG4gIHZhciBjcmVhdGVXb3JrZXIgPSBmdW5jdGlvbiBjcmVhdGVXb3JrZXIoZm4pIHtcbiAgICB2YXIgd29ya2VyQmxvYiA9IG5ldyBCbG9iKFsnKCcsIGZuLnRvU3RyaW5nKCksICcpKCknXSwge1xuICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnXG4gICAgfSk7XG4gICAgdmFyIHdvcmtlclVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwod29ya2VyQmxvYik7XG4gICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIod29ya2VyVVJMKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2ZlcjogZnVuY3Rpb24gdHJhbnNmZXIobWVzc2FnZSwgY2IpIHt9LFxuICAgICAgcG9zdDogZnVuY3Rpb24gcG9zdChtZXNzYWdlLCBjYiwgdHJhbnNmZXJMaXN0KSB7XG4gICAgICAgIHZhciBpZCA9IGdldFVuaXF1ZUlkKCk7XG5cbiAgICAgICAgd29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBpZiAoZS5kYXRhLmlkID09PSBpZCkge1xuICAgICAgICAgICAgY2IoZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdHJhbnNmZXJMaXN0XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgdGVybWluYXRlOiBmdW5jdGlvbiB0ZXJtaW5hdGUoKSB7XG4gICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh3b3JrZXJVUkwpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGxvYWRJbWFnZSA9IGZ1bmN0aW9uIGxvYWRJbWFnZSh1cmwsIGNiKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKGltZyk7XG4gICAgICB9O1xuICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH07XG4gICAgICBpbWcuc3JjID0gdXJsO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBjb3B5RmlsZSA9IGZ1bmN0aW9uIGNvcHlGaWxlKGZpbGUpIHtcbiAgICByZXR1cm4gcmVuYW1lRmlsZShmaWxlLCBmaWxlLm5hbWUpO1xuICB9O1xuXG4gIC8vIHV0aWxpdGllcyBleHBvc2VkIHRvIHBsdWdpbnNcbiAgLy8gYWxyZWFkeSByZWdpc3RlcmVkIHBsdWdpbnMgKGNhbid0IHJlZ2lzdGVyIHR3aWNlKVxuICB2YXIgcmVnaXN0ZXJlZFBsdWdpbnMgPSBbXTtcblxuICAvLyBwYXNzIHV0aWxzIHRvIHBsdWdpblxuICB2YXIgY3JlYXRlQXBwUGx1Z2luID0gZnVuY3Rpb24gY3JlYXRlQXBwUGx1Z2luKHBsdWdpbikge1xuICAgIC8vIGFscmVhZHkgcmVnaXN0ZXJlZFxuICAgIGlmIChyZWdpc3RlcmVkUGx1Z2lucy5pbmNsdWRlcyhwbHVnaW4pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gcmVtZW1iZXIgdGhpcyBwbHVnaW5cbiAgICByZWdpc3RlcmVkUGx1Z2lucy5wdXNoKHBsdWdpbik7XG5cbiAgICAvLyBzZXR1cCFcbiAgICB2YXIgcGx1Z2luT3V0bGluZSA9IHBsdWdpbih7XG4gICAgICBhZGRGaWx0ZXI6IGFkZEZpbHRlcixcbiAgICAgIHV0aWxzOiB7XG4gICAgICAgIFR5cGU6IFR5cGUsXG4gICAgICAgIGZvcmluOiBmb3JpbixcbiAgICAgICAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICAgICAgICB0b05hdHVyYWxGaWxlU2l6ZTogdG9OYXR1cmFsRmlsZVNpemUsXG4gICAgICAgIHJlcGxhY2VJblN0cmluZzogcmVwbGFjZUluU3RyaW5nLFxuICAgICAgICBnZXRFeHRlbnNpb25Gcm9tRmlsZW5hbWU6IGdldEV4dGVuc2lvbkZyb21GaWxlbmFtZSxcbiAgICAgICAgZ2V0RmlsZW5hbWVXaXRob3V0RXh0ZW5zaW9uOiBnZXRGaWxlbmFtZVdpdGhvdXRFeHRlbnNpb24sXG4gICAgICAgIGd1ZXNzdGltYXRlTWltZVR5cGU6IGd1ZXNzdGltYXRlTWltZVR5cGUsXG4gICAgICAgIGdldEZpbGVGcm9tQmxvYjogZ2V0RmlsZUZyb21CbG9iLFxuICAgICAgICBnZXRGaWxlbmFtZUZyb21VUkw6IGdldEZpbGVuYW1lRnJvbVVSTCxcbiAgICAgICAgY3JlYXRlUm91dGU6IGNyZWF0ZVJvdXRlLFxuICAgICAgICBjcmVhdGVXb3JrZXI6IGNyZWF0ZVdvcmtlcixcbiAgICAgICAgY3JlYXRlVmlldzogY3JlYXRlVmlldyxcbiAgICAgICAgbG9hZEltYWdlOiBsb2FkSW1hZ2UsXG4gICAgICAgIGNvcHlGaWxlOiBjb3B5RmlsZSxcbiAgICAgICAgcmVuYW1lRmlsZTogcmVuYW1lRmlsZSxcbiAgICAgICAgYXBwbHlGaWx0ZXJDaGFpbjogYXBwbHlGaWx0ZXJDaGFpblxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gYWRkIHBsdWdpbiBvcHRpb25zIHRvIGRlZmF1bHQgb3B0aW9uc1xuICAgIGV4dGVuZERlZmF1bHRPcHRpb25zKHBsdWdpbk91dGxpbmUub3B0aW9ucyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBsdWdpbiBpbnRlcm5hbCBzdGF0ZSAob3ZlciBhbGwgaW5zdGFuY2VzKVxuICAgKi9cbiAgdmFyIHN0YXRlID0ge1xuICAgIC8vIGFjdGl2ZSBhcHAgaW5zdGFuY2VzLCB1c2VkIHRvIHJlZHJhdyB0aGUgYXBwcyBhbmQgdG8gZmluZCB0aGUgbGF0ZXJcbiAgICBhcHBzOiBbXVxuICB9O1xuXG4gIC8vIHBsdWdpbiBuYW1lXG4gIHZhciBuYW1lID0gJ2ZpbGVwb25kJztcblxuICAvLyBpcyBpbiBicm93c2VyXG4gIHZhciBoYXNOYXZpZ2F0b3IgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJztcblxuICAvLyBhcHAgcGFpbnRlciwgY2Fubm90IGJlIHBhdXNlZCBvciBzdG9wcGVkIGF0IHRoZSBtb21lbnRcbiAgdmFyIHBhaW50ZXIgPVxuICAgIGhhc05hdmlnYXRvciAmJlxuICAgIGNyZWF0ZVBhaW50ZXIoY3JlYXRlVXBkYXRlcihzdGF0ZS5hcHBzLCAnX3JlYWQnLCAnX3dyaXRlJyksIDYwKTtcblxuICAvLyBmaXJlIGxvYWQgZXZlbnRcbiAgaWYgKGhhc05hdmlnYXRvcikge1xuICAgIC8vIGZpcmUgbG9hZGVkIGV2ZW50IHNvIHdlIGtub3cgd2hlbiBGaWxlUG9uZCBpcyBhdmFpbGFibGVcbiAgICB2YXIgZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgIC8vIGxldCBvdGhlcnMga25vdyB3ZSBoYXZlIGFyZWEgcmVhZHlcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnRmlsZVBvbmQ6bG9hZGVkJywge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgc3VwcG9ydGVkOiBzdXBwb3J0ZWQsXG4gICAgICAgICAgICBjcmVhdGU6IGNyZWF0ZSxcbiAgICAgICAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICAgICAgICBwYXJzZTogcGFyc2UsXG4gICAgICAgICAgICBmaW5kOiBmaW5kLFxuICAgICAgICAgICAgcmVnaXN0ZXJQbHVnaW46IHJlZ2lzdGVyUGx1Z2luLFxuICAgICAgICAgICAgc2V0T3B0aW9uczogc2V0T3B0aW9ucyQkMVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIC8vIGNsZWFuIHVwIGV2ZW50XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZGlzcGF0Y2gpO1xuICAgIH07XG5cbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICAvLyBtb3ZlIHRvIGJhY2sgb2YgZXhlY3V0aW9uIHF1ZXVlLCBGaWxlUG9uZCBzaG91bGQgaGF2ZSBiZWVuIGV4cG9ydGVkIGJ5IHRoZW5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaCgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG5cbiAgLy8gdXBkYXRlcyB0aGUgT3B0aW9uVHlwZXMgb2JqZWN0IGJhc2VkIG9uIHRoZSBjdXJyZW50IG9wdGlvbnNcbiAgdmFyIHVwZGF0ZU9wdGlvblR5cGVzID0gZnVuY3Rpb24gdXBkYXRlT3B0aW9uVHlwZXMoKSB7XG4gICAgcmV0dXJuIGZvcmluKGdldE9wdGlvbnMkMSgpLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICBPcHRpb25UeXBlc1trZXldID0gdmFsdWVbMV07XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBQbHVnaW4gbWV0aG9kc1xuICAgKi9cbiAgdmFyIEZpbGVTdGF0dXMgPSBfZXh0ZW5kcyh7fSwgSXRlbVN0YXR1cyk7XG5cbiAgdmFyIE9wdGlvblR5cGVzID0ge307XG4gIHVwZGF0ZU9wdGlvblR5cGVzKCk7XG5cbiAgLy8gY3JlYXRlIG1ldGhvZCwgY3JlYXRlcyBhcHBzIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGFwcCBhcnJheVxuICB2YXIgY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBhcHAgPSBjcmVhdGVBcHAuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgIGFwcC5vbignZGVzdHJveScsIGRlc3Ryb3kpO1xuICAgIHN0YXRlLmFwcHMucHVzaChhcHApO1xuICAgIHJldHVybiBjcmVhdGVBcHBBUEkoYXBwKTtcbiAgfTtcblxuICAvLyBkZXN0cm95cyBhcHBzIGFuZCByZW1vdmVzIHRoZW0gZnJvbSB0aGUgYXBwIGFycmF5XG4gIHZhciBkZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveShob29rKSB7XG4gICAgLy8gcmV0dXJucyB0cnVlIGlmIHRoZSBhcHAgd2FzIGRlc3Ryb3llZCBzdWNjZXNzZnVsbHlcbiAgICB2YXIgaW5kZXhUb1JlbW92ZSA9IHN0YXRlLmFwcHMuZmluZEluZGV4KGZ1bmN0aW9uKGFwcCkge1xuICAgICAgcmV0dXJuIGFwcC5pc0F0dGFjaGVkVG8oaG9vayk7XG4gICAgfSk7XG4gICAgaWYgKGluZGV4VG9SZW1vdmUgPj0gMCkge1xuICAgICAgLy8gcmVtb3ZlIGZyb20gYXBwc1xuICAgICAgdmFyIGFwcCA9IHN0YXRlLmFwcHMuc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpWzBdO1xuXG4gICAgICAvLyByZXN0b3JlIG9yaWdpbmFsIGRvbSBlbGVtZW50XG4gICAgICBhcHAucmVzdG9yZUVsZW1lbnQoKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIHBhcnNlcyB0aGUgZ2l2ZW4gY29udGV4dCBmb3IgcGx1Z2lucyAoZG9lcyBub3QgaW5jbHVkZSB0aGUgY29udGV4dCBlbGVtZW50IGl0c2VsZilcbiAgdmFyIHBhcnNlID0gZnVuY3Rpb24gcGFyc2UoY29udGV4dCkge1xuICAgIC8vIGdldCBhbGwgcG9zc2libGUgaG9va3NcbiAgICB2YXIgbWF0Y2hlZEhvb2tzID0gW10uY29uY2F0KFxuICAgICAgdG9Db25zdW1hYmxlQXJyYXkoY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIG5hbWUpKVxuICAgICk7XG5cbiAgICAvLyBmaWx0ZXIgb3V0IGFscmVhZHkgYWN0aXZlIGhvb2tzXG4gICAgdmFyIG5ld0hvb2tzID0gbWF0Y2hlZEhvb2tzLmZpbHRlcihmdW5jdGlvbihuZXdIb29rKSB7XG4gICAgICByZXR1cm4gIXN0YXRlLmFwcHMuZmluZChmdW5jdGlvbihhcHApIHtcbiAgICAgICAgcmV0dXJuIGFwcC5pc0F0dGFjaGVkVG8obmV3SG9vayk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGNyZWF0ZSBuZXcgaW5zdGFuY2UgZm9yIGVhY2ggaG9va1xuICAgIHJldHVybiBuZXdIb29rcy5tYXAoZnVuY3Rpb24oaG9vaykge1xuICAgICAgcmV0dXJuIGNyZWF0ZShob29rKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyByZXR1cm5zIGFuIGFwcCBiYXNlZCBvbiB0aGUgZ2l2ZW4gZWxlbWVudCBob29rXG4gIHZhciBmaW5kID0gZnVuY3Rpb24gZmluZChob29rKSB7XG4gICAgdmFyIGFwcCA9IHN0YXRlLmFwcHMuZmluZChmdW5jdGlvbihhcHApIHtcbiAgICAgIHJldHVybiBhcHAuaXNBdHRhY2hlZFRvKGhvb2spO1xuICAgIH0pO1xuICAgIGlmICghYXBwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUFwcEFQSShhcHApO1xuICB9O1xuXG4gIC8vIHJldHVybnMgdHJ1ZSBpZiBwbHVnaW4gaXMgc3VwcG9ydGVkXG4gIHZhciBpc09wZXJhTWluaSA9IGZ1bmN0aW9uIGlzT3BlcmFNaW5pKCkge1xuICAgIHJldHVybiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2luZG93Lm9wZXJhbWluaSkgPT09ICdbb2JqZWN0IE9wZXJhTWluaV0nXG4gICAgKTtcbiAgfTtcbiAgdmFyIGhhc1Byb21pc2VzID0gZnVuY3Rpb24gaGFzUHJvbWlzZXMoKSB7XG4gICAgcmV0dXJuICdQcm9taXNlJyBpbiB3aW5kb3c7XG4gIH07XG4gIHZhciBoYXNCbG9iU2xpY2UgPSBmdW5jdGlvbiBoYXNCbG9iU2xpY2UoKSB7XG4gICAgcmV0dXJuICdzbGljZScgaW4gQmxvYi5wcm90b3R5cGU7XG4gIH07XG4gIHZhciBoYXNDcmVhdGVPYmplY3RVUkwgPSBmdW5jdGlvbiBoYXNDcmVhdGVPYmplY3RVUkwoKSB7XG4gICAgcmV0dXJuICdVUkwnIGluIHdpbmRvdyAmJiAnY3JlYXRlT2JqZWN0VVJMJyBpbiB3aW5kb3cuVVJMO1xuICB9O1xuICB2YXIgaGFzVmlzaWJpbGl0eSA9IGZ1bmN0aW9uIGhhc1Zpc2liaWxpdHkoKSB7XG4gICAgcmV0dXJuICd2aXNpYmlsaXR5U3RhdGUnIGluIGRvY3VtZW50O1xuICB9O1xuICB2YXIgaGFzVGltaW5nID0gZnVuY3Rpb24gaGFzVGltaW5nKCkge1xuICAgIHJldHVybiAncGVyZm9ybWFuY2UnIGluIHdpbmRvdztcbiAgfTsgLy8gaU9TIDgueFxuXG4gIHZhciBzdXBwb3J0ZWQgPSBmdW5jdGlvbiBzdXBwb3J0ZWQoKSB7XG4gICAgaWYgKCFoYXNOYXZpZ2F0b3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuICEoXG4gICAgICBpc09wZXJhTWluaSgpIHx8XG4gICAgICAhaGFzVmlzaWJpbGl0eSgpIHx8XG4gICAgICAhaGFzUHJvbWlzZXMoKSB8fFxuICAgICAgIWhhc0Jsb2JTbGljZSgpIHx8XG4gICAgICAhaGFzQ3JlYXRlT2JqZWN0VVJMKCkgfHxcbiAgICAgICFoYXNUaW1pbmcoKVxuICAgICk7XG4gIH07XG5cbiAgLy8gYWRkcyBhIHBsdWdpbiBleHRlbnNpb25cbiAgdmFyIHJlZ2lzdGVyUGx1Z2luID0gZnVuY3Rpb24gcmVnaXN0ZXJQbHVnaW4oKSB7XG4gICAgZm9yIChcbiAgICAgIHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGx1Z2lucyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDtcbiAgICAgIF9rZXkgPCBfbGVuO1xuICAgICAgX2tleSsrXG4gICAgKSB7XG4gICAgICBwbHVnaW5zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIC8vIHJlZ2lzdGVyIHBsdWdpbnNcbiAgICBwbHVnaW5zLmZvckVhY2goY3JlYXRlQXBwUGx1Z2luKTtcblxuICAgIC8vIHVwZGF0ZSBPcHRpb25UeXBlcywgZWFjaCBwbHVnaW4gbWlnaHQgaGF2ZSBleHRlbmRlZCB0aGUgZGVmYXVsdCBvcHRpb25zXG4gICAgdXBkYXRlT3B0aW9uVHlwZXMoKTtcbiAgfTtcblxuICB2YXIgZ2V0T3B0aW9ucyQkMSA9IGZ1bmN0aW9uIGdldE9wdGlvbnMkJDEoKSB7XG4gICAgdmFyIG9wdHMgPSB7fTtcbiAgICBmb3JpbihnZXRPcHRpb25zJDEoKSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgb3B0c1trZXldID0gdmFsdWVbMF07XG4gICAgfSk7XG4gICAgcmV0dXJuIG9wdHM7XG4gIH07XG5cbiAgdmFyIHNldE9wdGlvbnMkJDEgPSBmdW5jdGlvbiBzZXRPcHRpb25zJCQxKG9wdHMpIHtcbiAgICBpZiAoaXNPYmplY3Qob3B0cykpIHtcbiAgICAgIC8vIHVwZGF0ZSBleGlzdGluZyBwbHVnaW5zXG4gICAgICBzdGF0ZS5hcHBzLmZvckVhY2goZnVuY3Rpb24oYXBwKSB7XG4gICAgICAgIGFwcC5zZXRPcHRpb25zKG9wdHMpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIG92ZXJyaWRlIGRlZmF1bHRzXG4gICAgICBzZXRPcHRpb25zJDEob3B0cyk7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG5ldyBvcHRpb25zXG4gICAgcmV0dXJuIGdldE9wdGlvbnMkJDEoKTtcbiAgfTtcblxuICBleHBvcnRzLkZpbGVTdGF0dXMgPSBGaWxlU3RhdHVzO1xuICBleHBvcnRzLk9wdGlvblR5cGVzID0gT3B0aW9uVHlwZXM7XG4gIGV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuICBleHBvcnRzLmRlc3Ryb3kgPSBkZXN0cm95O1xuICBleHBvcnRzLnBhcnNlID0gcGFyc2U7XG4gIGV4cG9ydHMuZmluZCA9IGZpbmQ7XG4gIGV4cG9ydHMuc3VwcG9ydGVkID0gc3VwcG9ydGVkO1xuICBleHBvcnRzLnJlZ2lzdGVyUGx1Z2luID0gcmVnaXN0ZXJQbHVnaW47XG4gIGV4cG9ydHMuZ2V0T3B0aW9ucyA9IGdldE9wdGlvbnMkJDE7XG4gIGV4cG9ydHMuc2V0T3B0aW9ucyA9IHNldE9wdGlvbnMkJDE7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5qc1xuLy8gbW9kdWxlIGlkID0gMjExXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qXG4gKiBGaWxlUG9uZFBsdWdpbkZpbGVWYWxpZGF0ZVR5cGUgMS4wLjNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCwgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIFBsZWFzZSB2aXNpdCBodHRwczovL3BxaW5hLm5sL2ZpbGVwb25kIGZvciBkZXRhaWxzLlxuICovXG52YXIgcGx1Z2luJDEgPSAoeyBhZGRGaWx0ZXIsIHV0aWxzIH0pID0+IHtcbiAgLy8gZ2V0IHF1aWNrIHJlZmVyZW5jZSB0byBUeXBlIHV0aWxzXG4gIGNvbnN0IHtcbiAgICBUeXBlLFxuICAgIGlzU3RyaW5nLFxuICAgIGd1ZXNzdGltYXRlTWltZVR5cGUsXG4gICAgZ2V0RXh0ZW5zaW9uRnJvbUZpbGVuYW1lLFxuICAgIGdldEZpbGVuYW1lRnJvbVVSTFxuICB9ID0gdXRpbHM7XG5cbiAgY29uc3QgbWltZVR5cGVNYXRjaGVzV2lsZENhcmQgPSAobWltZVR5cGUsIHdpbGRjYXJkKSA9PiB7XG4gICAgY29uc3QgbWltZVR5cGVHcm91cCA9ICgvXlteL10rLy5leGVjKG1pbWVUeXBlKSB8fCBbXSkucG9wKCk7IC8vIGltYWdlL3BuZyAtPiBpbWFnZVxuICAgIGNvbnN0IHdpbGRjYXJkR3JvdXAgPSB3aWxkY2FyZC5zbGljZSgwLCAtMik7IC8vIGltYWdlLyogLT4gaW1hZ2VcbiAgICByZXR1cm4gbWltZVR5cGVHcm91cCA9PT0gd2lsZGNhcmRHcm91cDtcbiAgfTtcblxuICBjb25zdCBpc1ZhbGlkTUlNRVR5cGUgPSAoYWNjZXB0ZWRUeXBlcywgdXNlcklucHV0VHlwZSkgPT5cbiAgICBhY2NlcHRlZFR5cGVzLnNvbWUoYWNjZXB0ZWRUeXBlID0+IHtcbiAgICAgIC8vIGFjY2VwdGVkIGlzIHdpbGRjYXJkIG1pbWUgdHlwZVxuICAgICAgaWYgKC9cXCokLy50ZXN0KGFjY2VwdGVkVHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIG1pbWVUeXBlTWF0Y2hlc1dpbGRDYXJkKHVzZXJJbnB1dFR5cGUsIGFjY2VwdGVkVHlwZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzIG5vcm1hbCBtaW1lIHR5cGVcbiAgICAgIHJldHVybiBhY2NlcHRlZFR5cGUgPT09IHVzZXJJbnB1dFR5cGU7XG4gICAgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGVGaWxlID0gKGl0ZW0sIGFjY2VwdGVkRmlsZVR5cGVzKSA9PiB7XG4gICAgLy8gbm8gdHlwZXMgZGVmaW5lZCwgZXZlcnl0aGluZyBpcyBhbGxvd2VkIFxcby9cbiAgICBpZiAoYWNjZXB0ZWRGaWxlVHlwZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgaXRlbSBpcyBhIHVybCB3ZSBndWVzcyB0aGUgbWltZSB0eXBlIGJ5IHRoZSBleHRlbnNpb25cbiAgICBsZXQgdHlwZSA9ICcnO1xuICAgIGlmIChpc1N0cmluZyhpdGVtKSkge1xuICAgICAgY29uc3QgZmlsZW5hbWUgPSBnZXRGaWxlbmFtZUZyb21VUkwoaXRlbSk7XG4gICAgICBjb25zdCBleHRlbnNpb24gPSBnZXRFeHRlbnNpb25Gcm9tRmlsZW5hbWUoZmlsZW5hbWUpO1xuICAgICAgaWYgKGV4dGVuc2lvbikge1xuICAgICAgICB0eXBlID0gZ3Vlc3N0aW1hdGVNaW1lVHlwZShleHRlbnNpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGUgPSBpdGVtLnR5cGU7XG4gICAgfVxuXG4gICAgLy8gdmFsaWRhdGUgZmlsZSB0eXBlXG4gICAgcmV0dXJuIGlzVmFsaWRNSU1FVHlwZShhY2NlcHRlZEZpbGVUeXBlcywgdHlwZSk7XG4gIH07XG5cbiAgLy8gc2V0dXAgYXR0cmlidXRlIG1hcHBpbmcgZm9yIGFjY2VwdFxuICBhZGRGaWx0ZXIoJ1NFVF9BVFRSSUJVVEVfVE9fT1BUSU9OX01BUCcsIG1hcCA9PlxuICAgIE9iamVjdC5hc3NpZ24obWFwLCB7XG4gICAgICBhY2NlcHQ6ICdhY2NlcHRlZEZpbGVUeXBlcydcbiAgICB9KVxuICApO1xuXG4gIC8vIGZpbHRlcmluZyBpZiBhbiBpdGVtIGlzIGFsbG93ZWQgaW4gaG9wcGVyXG4gIGFkZEZpbHRlcignQUxMT1dfSE9QUEVSX0lURU0nLCAoZmlsZSwgeyBxdWVyeSB9KSA9PiB7XG4gICAgLy8gaWYgd2UgYXJlIG5vdCBkb2luZyBmaWxlIHR5cGUgdmFsaWRhdGlvbiBleGl0XG4gICAgaWYgKCFxdWVyeSgnR0VUX0FMTE9XX0ZJTEVfVFlQRV9WQUxJREFUSU9OJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIHdlIHZhbGlkYXRlIHRoZSBmaWxlIGFnYWluc3QgdGhlIGFjY2VwdGVkIGZpbGUgdHlwZXNcbiAgICByZXR1cm4gdmFsaWRhdGVGaWxlKGZpbGUsIHF1ZXJ5KCdHRVRfQUNDRVBURURfRklMRV9UWVBFUycpKTtcbiAgfSk7XG5cbiAgLy8gY2FsbGVkIGZvciBlYWNoIGZpbGUgdGhhdCBpcyBsb2FkZWRcbiAgLy8gcmlnaHQgYmVmb3JlIGl0IGlzIHNldCB0byB0aGUgaXRlbSBzdGF0ZVxuICAvLyBzaG91bGQgcmV0dXJuIGEgcHJvbWlzZVxuICBhZGRGaWx0ZXIoXG4gICAgJ0xPQURfRklMRScsXG4gICAgKGZpbGUsIHsgcXVlcnkgfSkgPT5cbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgYWxsb3dGaWxlVHlwZVZhbGlkYXRpb24gPSBxdWVyeSgnR0VUX0FMTE9XX0ZJTEVfVFlQRV9WQUxJREFUSU9OJyk7XG4gICAgICAgIGlmICghYWxsb3dGaWxlVHlwZVZhbGlkYXRpb24pIHtcbiAgICAgICAgICByZXNvbHZlKGZpbGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjY2VwdGVkRmlsZVR5cGVzID0gcXVlcnkoJ0dFVF9BQ0NFUFRFRF9GSUxFX1RZUEVTJyk7XG5cbiAgICAgICAgLy8gaWYgaW52YWxpZCwgZXhpdCBoZXJlXG4gICAgICAgIGlmICghdmFsaWRhdGVGaWxlKGZpbGUsIGFjY2VwdGVkRmlsZVR5cGVzKSkge1xuICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICAgICAgbWFpbjogcXVlcnkoJ0dFVF9MQUJFTF9GSUxFX1RZUEVfTk9UX0FMTE9XRUQnKSxcbiAgICAgICAgICAgICAgc3ViOiBxdWVyeSgnR0VUX0FDQ0VQVEVEX0ZJTEVfVFlQRVMnKS5qb2luKCcsICcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWxsIGZpbmVcbiAgICAgICAgcmVzb2x2ZShmaWxlKTtcbiAgICAgIH0pXG4gICk7XG5cbiAgLy8gZXhwb3NlIHBsdWdpblxuICByZXR1cm4ge1xuICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIC8vIEVuYWJsZSBvciBkaXNhYmxlIGZpbGUgdHlwZSB2YWxpZGF0aW9uXG4gICAgICBhbGxvd0ZpbGVUeXBlVmFsaWRhdGlvbjogW3RydWUsIFR5cGUuQk9PTEVBTl0sXG5cbiAgICAgIC8vIFdoYXQgZmlsZSB0eXBlcyB0byBhY2NlcHRcbiAgICAgIGFjY2VwdGVkRmlsZVR5cGVzOiBbW10sIFR5cGUuQVJSQVldLFxuICAgICAgLy8gLSBtdXN0IGJlIGNvbW1hIHNlcGFyYXRlZFxuICAgICAgLy8gLSBtaW1lIHR5cGVzOiBpbWFnZS9wbmcsIGltYWdlL2pwZWcsIGltYWdlL2dpZlxuICAgICAgLy8gLSBleHRlbnNpb25zOiAucG5nLCAuanBnLCAuanBlZ1xuICAgICAgLy8gLSB3aWxkY2FyZHM6IGltYWdlLypcblxuICAgICAgbGFiZWxGaWxlVHlwZU5vdEFsbG93ZWQ6IFsnRmlsZSBpcyBvZiBpbnZhbGlkIHR5cGUnLCBUeXBlLlNUUklOR11cbiAgICB9XG4gIH07XG5cbiAgLy8gcmVjZWl2ZXMgYWxsIGl0ZW1zIGFuZCByZXR1cm5zIHRydWUgb3IgZmFsc2UgZGVwZW5kaW5nIG9uIHdldGhlciB0aGUgaXRlbXMgYXJlIHZhbGlkXG4gIC8vIChhcyBpbiwgaXMgaG92ZXJlZCBvdmVyIGl0KVxuICAvLyBhZGRGaWx0ZXIoJ0FMTE9XX0hPUFBFUl9JVEVNJywgKCBpdGVtLCB7IHF1ZXJ5IH0pID0+IHtcbiAgLy8gIFRPRE86IGltcGxlbWVudCwgcGx1cyB0aHJvdyBlcnJvciBpbiBkcm9wem9uZSB0byBpbmRpY2F0ZSBpdGVtIGlzIG5vdCB2YWxpZFxuICAvLyB9KTtcbn07XG5cbmlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudCkge1xuICAvLyBwbHVnaW4gaGFzIGxvYWRlZFxuICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgIG5ldyBDdXN0b21FdmVudCgnRmlsZVBvbmQ6cGx1Z2lubG9hZGVkJywgeyBkZXRhaWw6IHBsdWdpbiQxIH0pXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsdWdpbiQxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQtcGx1Z2luLWZpbGUtdmFsaWRhdGUtdHlwZS9kaXN0L2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXR5cGUuZXNtLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLypcbiAqIEZpbGVQb25kUGx1Z2luSW1hZ2VQcmV2aWV3IDEuMC45XG4gKiBMaWNlbnNlZCB1bmRlciBNSVQsIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBQbGVhc2UgdmlzaXQgaHR0cHM6Ly9wcWluYS5ubC9maWxlcG9uZCBmb3IgZGV0YWlscy5cbiAqL1xuLy8gdGVzdCBpZiBmaWxlIGlzIG9mIHR5cGUgaW1hZ2UgYW5kIGNhbiBiZSB2aWV3ZWQgaW4gY2FudmFzXG5jb25zdCBpc1ByZXZpZXdhYmxlSW1hZ2UgPSBmaWxlID0+XG4gIC9eaW1hZ2UvLnRlc3QoZmlsZS50eXBlKSAmJiAhL3N2Zy8udGVzdChmaWxlLnR5cGUpO1xuXG5jb25zdCB0cmFuc2Zvcm1zID0ge1xuICAxOiAoKSA9PiBbMSwgMCwgMCwgMSwgMCwgMF0sXG4gIDI6IHdpZHRoID0+IFstMSwgMCwgMCwgMSwgd2lkdGgsIDBdLFxuICAzOiAod2lkdGgsIGhlaWdodCkgPT4gWy0xLCAwLCAwLCAtMSwgd2lkdGgsIGhlaWdodF0sXG4gIDQ6ICh3aWR0aCwgaGVpZ2h0KSA9PiBbMSwgMCwgMCwgLTEsIDAsIGhlaWdodF0sXG4gIDU6ICgpID0+IFswLCAxLCAxLCAwLCAwLCAwXSxcbiAgNjogKHdpZHRoLCBoZWlnaHQpID0+IFswLCAxLCAtMSwgMCwgaGVpZ2h0LCAwXSxcbiAgNzogKHdpZHRoLCBoZWlnaHQpID0+IFswLCAtMSwgLTEsIDAsIGhlaWdodCwgd2lkdGhdLFxuICA4OiB3aWR0aCA9PiBbMCwgLTEsIDEsIDAsIDAsIHdpZHRoXVxufTtcblxuY29uc3QgZml4SW1hZ2VPcmllbnRhdGlvbiA9IChjdHgsIHdpZHRoLCBoZWlnaHQsIG9yaWVudGF0aW9uKSA9PiB7XG4gIC8vIG5vIG9yaWVudGF0aW9uIHN1cHBsaWVkXG4gIGlmIChvcmllbnRhdGlvbiA9PT0gLTEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjdHgudHJhbnNmb3JtKC4uLnRyYW5zZm9ybXNbb3JpZW50YXRpb25dKHdpZHRoLCBoZWlnaHQpKTtcbn07XG5cbi8vIGRyYXdzIHRoZSBwcmV2aWV3IGltYWdlXG5jb25zdCBjcmVhdGVQcmV2aWV3SW1hZ2UgPSAoZGF0YSwgd2lkdGgsIGhlaWdodCwgb3JpZW50YXRpb24pID0+IHtcbiAgLy8gcm91bmRcbiAgd2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoKTtcbiAgaGVpZ2h0ID0gTWF0aC5yb3VuZChoZWlnaHQpO1xuXG4gIC8vIHdpZHRoIGFuZCBoZWlnaHQgaGF2ZSBhbHJlYWR5IGJlZW4gc3dhcHBlZCBlYXJsaWVyXG4gIC8vIGlmIG9yaWVudGF0aW9uIHdhcyBpbiByYW5nZSBiZWxvdywgbGV0J3Mgc3dhcCBiYWNrIHRvIG1ha2VcbiAgLy8gdGhpcyBjb2RlIGEgYml0IG1vcmUgcmVhZGFibGVcbiAgaWYgKG9yaWVudGF0aW9uID49IDUgJiYgb3JpZW50YXRpb24gPD0gOCkge1xuICAgIFt3aWR0aCwgaGVpZ2h0XSA9IFtoZWlnaHQsIHdpZHRoXTtcbiAgfVxuXG4gIC8vIGRyYXcgaW1hZ2VcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIC8vIGlmIGlzIHJvdGF0ZWQgaW5jb3JyZWN0bHkgc3dhcCB3aWR0aCBhbmQgaGVpZ2h0XG4gIGlmIChvcmllbnRhdGlvbiA+PSA1ICYmIG9yaWVudGF0aW9uIDw9IDgpIHtcbiAgICBjYW52YXMud2lkdGggPSBoZWlnaHQ7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpZHRoO1xuICB9IGVsc2Uge1xuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICAvLyBjb3JyZWN0IGltYWdlIG9yaWVudGF0aW9uXG4gIGN0eC5zYXZlKCk7XG4gIGZpeEltYWdlT3JpZW50YXRpb24oY3R4LCB3aWR0aCwgaGVpZ2h0LCBvcmllbnRhdGlvbik7XG5cbiAgLy8gZHJhdyB0aGUgaW1hZ2VcbiAgY3R4LmRyYXdJbWFnZShkYXRhLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAvLyBlbmQgZHJhdyBpbWFnZVxuICBjdHgucmVzdG9yZSgpO1xuXG4gIC8vIGRhdGEgaGFzIGJlZW4gdHJhbnNmZXJyZWQgdG8gY2FudmFzICggaWYgd2FzIEltYWdlQml0bWFwIClcbiAgaWYgKCdjbG9zZScgaW4gZGF0YSkge1xuICAgIGRhdGEuY2xvc2UoKTtcbiAgfVxuXG4gIHJldHVybiBjYW52YXM7XG59O1xuXG5jb25zdCBJTUFHRV9TQ0FMRV9TUFJJTkdfUFJPUFMgPSB7XG4gIHR5cGU6ICdzcHJpbmcnLFxuICBzdGlmZm5lc3M6IDAuNSxcbiAgZGFtcGluZzogMC40NSxcbiAgbWFzczogMTBcbn07XG5cbmNvbnN0IGNyZWF0ZUltYWdlVmlldyA9IGZwQVBJID0+XG4gIGZwQVBJLnV0aWxzLmNyZWF0ZVZpZXcoe1xuICAgIG5hbWU6ICdpbWFnZS1wcmV2aWV3JyxcbiAgICB0YWc6ICdkaXYnLFxuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgY3JlYXRlOiAoeyByb290LCBwcm9wcyB9KSA9PiB7XG4gICAgICByb290LnJlZi5jbGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQocm9vdC5yZWYuY2xpcCk7XG4gICAgfSxcbiAgICB3cml0ZTogZnBBUEkudXRpbHMuY3JlYXRlUm91dGUoe1xuICAgICAgRElEX0lNQUdFX1BSRVZJRVdfTE9BRDogKHsgcm9vdCwgcHJvcHMsIGFjdGlvbiB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IHByb3BzO1xuXG4gICAgICAgIC8vIGdldCBpdGVtXG4gICAgICAgIGNvbnN0IGl0ZW0gPSByb290LnF1ZXJ5KCdHRVRfSVRFTScsIHsgaWQ6IHByb3BzLmlkIH0pO1xuXG4gICAgICAgIC8vIG9yaWVudGF0aW9uIGluZm9cbiAgICAgICAgY29uc3QgZXhpZiA9IGl0ZW0uZ2V0TWV0YWRhdGEoJ2V4aWYnKSB8fCB7fTtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBleGlmLm9yaWVudGF0aW9uIHx8IC0xO1xuXG4gICAgICAgIC8vIGdldCB3aWR0aCBhbmQgaGVpZ2h0IGZyb20gYWN0aW9uLCBhbmQgc3dhcCBvZiBvcmllbnRhdGlvbiBpcyBpbmNvcnJlY3RcbiAgICAgICAgbGV0IHsgd2lkdGgsIGhlaWdodCB9ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA+PSA1ICYmIG9yaWVudGF0aW9uIDw9IDgpIHtcbiAgICAgICAgICBbd2lkdGgsIGhlaWdodF0gPSBbaGVpZ2h0LCB3aWR0aF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgaXRlbSBwcm9wc1xuICAgICAgICBjb25zdCBjcm9wID0gaXRlbS5nZXRNZXRhZGF0YSgnY3JvcCcpIHx8IHtcbiAgICAgICAgICByZWN0OiB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgaGVpZ2h0OiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhc3BlY3RSYXRpbzogaGVpZ2h0IC8gd2lkdGhcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzY2FsZSBjYW52YXMgYmFzZWQgb24gcGl4ZWwgZGVuc2l0eVxuICAgICAgICBjb25zdCBwaXhlbERlbnNpdHlGYWN0b3IgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblxuICAgICAgICAvLyB0aGUgbWF4IGhlaWdodCBvZiB0aGUgcHJldmlldyBjb250YWluZXJcbiAgICAgICAgY29uc3QgZml4ZWRQcmV2aWV3SGVpZ2h0ID0gcm9vdC5xdWVyeSgnR0VUX0lNQUdFX1BSRVZJRVdfSEVJR0hUJyk7XG4gICAgICAgIGNvbnN0IG1pblByZXZpZXdIZWlnaHQgPSByb290LnF1ZXJ5KCdHRVRfSU1BR0VfUFJFVklFV19NSU5fSEVJR0hUJyk7XG4gICAgICAgIGNvbnN0IG1heFByZXZpZXdIZWlnaHQgPSByb290LnF1ZXJ5KCdHRVRfSU1BR0VfUFJFVklFV19NQVhfSEVJR0hUJyk7XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHNjYWxlZCBwcmV2aWV3IGltYWdlIHNpemVcbiAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSByb290LnJlY3QuaW5uZXIud2lkdGg7XG4gICAgICAgIGNvbnN0IHByZXZpZXdJbWFnZVJhdGlvID0gaGVpZ2h0IC8gd2lkdGg7XG4gICAgICAgIGNvbnN0IHByZXZpZXdXaWR0aCA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgICBjb25zdCBwcmV2aWV3SGVpZ2h0ID0gY29udGFpbmVyV2lkdGggKiBwcmV2aWV3SW1hZ2VSYXRpbztcblxuICAgICAgICAvLyBjYWxjdWxhdGUgaW1hZ2UgcHJldmlldyBoZWlnaHQgYW5kIHdpZHRoXG4gICAgICAgIGNvbnN0IGltYWdlSGVpZ2h0ID1cbiAgICAgICAgICBmaXhlZFByZXZpZXdIZWlnaHQgIT09IG51bGxcbiAgICAgICAgICAgID8gZml4ZWRQcmV2aWV3SGVpZ2h0XG4gICAgICAgICAgICA6IE1hdGgubWF4KG1pblByZXZpZXdIZWlnaHQsIE1hdGgubWluKGhlaWdodCwgbWF4UHJldmlld0hlaWdodCkpO1xuICAgICAgICBjb25zdCBpbWFnZVdpZHRoID0gaW1hZ2VIZWlnaHQgLyBwcmV2aWV3SW1hZ2VSYXRpbztcblxuICAgICAgICAvLyByZW5kZXIgc2NhbGVkIHByZXZpZXcgaW1hZ2VcbiAgICAgICAgY29uc3QgcHJldmlld0ltYWdlID0gY3JlYXRlUHJldmlld0ltYWdlKFxuICAgICAgICAgIGFjdGlvbi5kYXRhLFxuICAgICAgICAgIGltYWdlV2lkdGggKiBwaXhlbERlbnNpdHlGYWN0b3IsXG4gICAgICAgICAgaW1hZ2VIZWlnaHQgKiBwaXhlbERlbnNpdHlGYWN0b3IsXG4gICAgICAgICAgb3JpZW50YXRpb25cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBjYWxjdWxhdGUgY3JvcCBjb250YWluZXIgc2l6ZVxuICAgICAgICBsZXQgY2xpcEhlaWdodCA9XG4gICAgICAgICAgZml4ZWRQcmV2aWV3SGVpZ2h0ICE9PSBudWxsXG4gICAgICAgICAgICA/IGZpeGVkUHJldmlld0hlaWdodFxuICAgICAgICAgICAgOiBNYXRoLm1heChcbiAgICAgICAgICAgICAgICBtaW5QcmV2aWV3SGVpZ2h0LFxuICAgICAgICAgICAgICAgIE1hdGgubWluKGNvbnRhaW5lcldpZHRoICogY3JvcC5hc3BlY3RSYXRpbywgbWF4UHJldmlld0hlaWdodClcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICBsZXQgY2xpcFdpZHRoID0gY2xpcEhlaWdodCAvIGNyb3AuYXNwZWN0UmF0aW87XG4gICAgICAgIGlmIChjbGlwV2lkdGggPiBwcmV2aWV3V2lkdGgpIHtcbiAgICAgICAgICBjbGlwV2lkdGggPSBwcmV2aWV3V2lkdGg7XG4gICAgICAgICAgY2xpcEhlaWdodCA9IGNsaXBXaWR0aCAqIGNyb3AuYXNwZWN0UmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxjdWxhdGUgc2NhbGFyIGJhc2VkIG9uIGlmIHRoZSBjbGlwIHJlY3RhbmdsZSBoYXMgYmVlbiBzY2FsZWQgZG93blxuICAgICAgICBjb25zdCBwcmV2aWV3U2NhbGFyID0gY2xpcEhlaWdodCAvIChwcmV2aWV3SGVpZ2h0ICogY3JvcC5yZWN0LmhlaWdodCk7XG5cbiAgICAgICAgd2lkdGggPSBwcmV2aWV3V2lkdGggKiBwcmV2aWV3U2NhbGFyO1xuICAgICAgICBoZWlnaHQgPSBwcmV2aWV3SGVpZ2h0ICogcHJldmlld1NjYWxhcjtcbiAgICAgICAgY29uc3QgeCA9IC1jcm9wLnJlY3QueCAqIHByZXZpZXdXaWR0aCAqIHByZXZpZXdTY2FsYXI7XG4gICAgICAgIGNvbnN0IHkgPSAtY3JvcC5yZWN0LnkgKiBwcmV2aWV3SGVpZ2h0ICogcHJldmlld1NjYWxhcjtcblxuICAgICAgICAvLyBhcHBseSBzdHlsZXNcbiAgICAgICAgcm9vdC5yZWYuY2xpcC5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHtNYXRoLnJvdW5kKGNsaXBXaWR0aCl9cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHtNYXRoLnJvdW5kKGNsaXBIZWlnaHQpfXB4O1xuICAgICAgICAgICAgICAgIGA7XG5cbiAgICAgICAgLy8gcG9zaXRpb24gaW1hZ2VcbiAgICAgICAgcHJldmlld0ltYWdlLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke01hdGgucm91bmQod2lkdGgpfXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7TWF0aC5yb3VuZChoZWlnaHQpfXB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgke01hdGgucm91bmQoeCl9cHgsICR7TWF0aC5yb3VuZChcbiAgICAgICAgICB5XG4gICAgICAgICl9cHgpIHJvdGF0ZVooMC4wMDAwMWRlZyk7XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgcm9vdC5yZWYuY2xpcC5hcHBlbmRDaGlsZChwcmV2aWV3SW1hZ2UpO1xuXG4gICAgICAgIC8vIGxldCBvdGhlcnMga25vdyBvZiBvdXIgZmFidWxvdXMgYWNoaWV2ZW1lbnQgKHNvIHRoZSBpbWFnZSBjYW4gYmUgZmFkZWQgaW4pXG4gICAgICAgIHJvb3QuZGlzcGF0Y2goJ0RJRF9JTUFHRV9QUkVWSUVXX0RSQVcnLCB7IGlkIH0pO1xuICAgICAgfVxuICAgIH0pLFxuICAgIG1peGluczoge1xuICAgICAgc3R5bGVzOiBbJ3NjYWxlWCcsICdzY2FsZVknLCAnb3BhY2l0eSddLFxuICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICBzY2FsZVg6IElNQUdFX1NDQUxFX1NQUklOR19QUk9QUyxcbiAgICAgICAgc2NhbGVZOiBJTUFHRV9TQ0FMRV9TUFJJTkdfUFJPUFMsXG4gICAgICAgIG9wYWNpdHk6IHsgdHlwZTogJ3R3ZWVuJywgZHVyYXRpb246IDc1MCB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuY29uc3QgYXBwbHlUZW1wbGF0ZSA9IChzb3VyY2UsIHRhcmdldCkgPT4ge1xuICAvLyBjb3B5IHdpZHRoIGFuZCBoZWlnaHRcbiAgdGFyZ2V0LndpZHRoID0gc291cmNlLndpZHRoO1xuICB0YXJnZXQuaGVpZ2h0ID0gc291cmNlLmhlaWdodDtcblxuICAvLyBkcmF3IHRoZSB0ZW1wbGF0ZVxuICBjb25zdCBjdHggPSB0YXJnZXQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY3R4LmRyYXdJbWFnZShzb3VyY2UsIDAsIDApO1xufTtcblxuY29uc3QgY3JlYXRlSW1hZ2VPdmVybGF5VmlldyA9IGZwQVBJID0+XG4gIGZwQVBJLnV0aWxzLmNyZWF0ZVZpZXcoe1xuICAgIG5hbWU6ICdpbWFnZS1wcmV2aWV3LW92ZXJsYXknLFxuICAgIHRhZzogJ2NhbnZhcycsXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICBjcmVhdGU6ICh7IHJvb3QsIHByb3BzIH0pID0+IHtcbiAgICAgIGFwcGx5VGVtcGxhdGUocHJvcHMudGVtcGxhdGUsIHJvb3QuZWxlbWVudCk7XG4gICAgfSxcbiAgICBtaXhpbnM6IHtcbiAgICAgIHN0eWxlczogWydvcGFjaXR5J10sXG4gICAgICBhbmltYXRpb25zOiB7XG4gICAgICAgIG9wYWNpdHk6IHsgdHlwZTogJ3NwcmluZycsIG1hc3M6IDI1IH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4vKipcbiAqIEJpdG1hcCBXb3JrZXJcbiAqL1xuY29uc3QgQml0bWFwV29ya2VyID0gZnVuY3Rpb24oKSB7XG4gIC8vIHJvdXRlIG1lc3NhZ2VzXG4gIHNlbGYub25tZXNzYWdlID0gZSA9PiB7XG4gICAgdG9CaXRtYXAoZS5kYXRhLm1lc3NhZ2UsIHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIGltYWdlQml0bWFwIGlzIHNlbnQgYmFjayBhcyB0cmFuc2ZlcmFibGVcbiAgICAgIHNlbGYucG9zdE1lc3NhZ2UoeyBpZDogZS5kYXRhLmlkLCBtZXNzYWdlOiByZXNwb25zZSB9LCBbcmVzcG9uc2VdKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyByZXNpemUgaW1hZ2UgZGF0YVxuICBjb25zdCB0b0JpdG1hcCA9IChvcHRpb25zLCBjYikgPT4ge1xuICAgIGZldGNoKG9wdGlvbnMuZmlsZSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSlcbiAgICAgIC50aGVuKGJsb2IgPT4gY3JlYXRlSW1hZ2VCaXRtYXAoYmxvYikpXG4gICAgICAudGhlbihpbWFnZUJpdG1hcCA9PiBjYihpbWFnZUJpdG1hcCkpO1xuICB9O1xufTtcblxuY29uc3QgZ2V0SW1hZ2VTaXplID0gKHVybCwgY2IpID0+IHtcbiAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IGltYWdlLm5hdHVyYWxXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0O1xuICAgIGltYWdlID0gbnVsbDtcbiAgICBjYih3aWR0aCwgaGVpZ2h0KTtcbiAgfTtcbiAgaW1hZ2Uuc3JjID0gdXJsO1xufTtcblxuY29uc3QgZWFzZUluT3V0U2luZSA9IHQgPT4gLTAuNSAqIChNYXRoLmNvcyhNYXRoLlBJICogdCkgLSAxKTtcblxuY29uc3QgYWRkR3JhZGllbnRTdGVwcyA9IChcbiAgZ3JhZGllbnQsXG4gIGNvbG9yLFxuICBhbHBoYSA9IDEsXG4gIGVhc2VGbiA9IGVhc2VJbk91dFNpbmUsXG4gIHN0ZXBzID0gMTAsXG4gIG9mZnNldCA9IDBcbikgPT4ge1xuICBjb25zdCByYW5nZSA9IDEgLSBvZmZzZXQ7XG4gIGNvbnN0IHJnYiA9IGNvbG9yLmpvaW4oJywnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IHAgPSBpIC8gc3RlcHM7XG4gICAgY29uc3Qgc3RvcCA9IG9mZnNldCArIHJhbmdlICogcDtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3Aoc3RvcCwgYHJnYmEoJHtyZ2J9LCAke2Vhc2VGbihwKSAqIGFscGhhfSlgKTtcbiAgfVxufTtcblxuY29uc3QgZHJhd1RlbXBsYXRlID0gKGNhbnZhcywgd2lkdGgsIGhlaWdodCwgY29sb3IsIGFscGhhVGFyZ2V0KSA9PiB7XG4gIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICBjb25zdCBob3Jpem9udGFsQ2VudGVyID0gd2lkdGggKiAwLjU7XG5cbiAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChcbiAgICBob3Jpem9udGFsQ2VudGVyLFxuICAgIGhlaWdodCArIDExMCxcbiAgICBoZWlnaHQgLSAxMDAsXG4gICAgaG9yaXpvbnRhbENlbnRlcixcbiAgICBoZWlnaHQgKyAxMTAsXG4gICAgaGVpZ2h0ICsgMTAwXG4gICk7XG5cbiAgYWRkR3JhZGllbnRTdGVwcyhncmFkLCBjb2xvciwgYWxwaGFUYXJnZXQsIHVuZGVmaW5lZCwgOCwgMC40KTtcblxuICBjdHguc2F2ZSgpO1xuICBjdHgudHJhbnNsYXRlKC13aWR0aCAqIDAuNSwgMCk7XG4gIGN0eC5zY2FsZSgyLCAxKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbmNvbnN0IGhhc05hdmlnYXRvciA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnO1xuXG5jb25zdCB3aWR0aCA9IDUwMDtcbmNvbnN0IGhlaWdodCA9IDIwMDtcblxuY29uc3Qgb3ZlcmxheVRlbXBsYXRlU2hhZG93ID0gaGFzTmF2aWdhdG9yICYmIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY29uc3Qgb3ZlcmxheVRlbXBsYXRlRXJyb3IgPSBoYXNOYXZpZ2F0b3IgJiYgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jb25zdCBvdmVybGF5VGVtcGxhdGVTdWNjZXNzID0gaGFzTmF2aWdhdG9yICYmIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXG5pZiAoaGFzTmF2aWdhdG9yKSB7XG4gIGRyYXdUZW1wbGF0ZShvdmVybGF5VGVtcGxhdGVTaGFkb3csIHdpZHRoLCBoZWlnaHQsIFs0MCwgNDAsIDQwXSwgMC44NSk7XG4gIGRyYXdUZW1wbGF0ZShvdmVybGF5VGVtcGxhdGVFcnJvciwgd2lkdGgsIGhlaWdodCwgWzE5NiwgNzgsIDcxXSwgMSk7XG4gIGRyYXdUZW1wbGF0ZShvdmVybGF5VGVtcGxhdGVTdWNjZXNzLCB3aWR0aCwgaGVpZ2h0LCBbNTQsIDE1MSwgOTldLCAxKTtcbn1cblxuY29uc3QgY3JlYXRlSW1hZ2VXcmFwcGVyVmlldyA9IGZwQVBJID0+IHtcbiAgLy8gY3JlYXRlIG92ZXJsYXkgdmlld1xuICBjb25zdCBvdmVybGF5ID0gY3JlYXRlSW1hZ2VPdmVybGF5VmlldyhmcEFQSSk7XG5cbiAgLyoqXG4gICAqIFdyaXRlIGhhbmRsZXIgZm9yIHdoZW4gcHJldmlldyBjb250YWluZXIgaGFzIGJlZW4gY3JlYXRlZFxuICAgKi9cbiAgY29uc3QgZGlkQ3JlYXRlUHJldmlld0NvbnRhaW5lciA9ICh7IHJvb3QsIHByb3BzLCBhY3Rpb24gfSkgPT4ge1xuICAgIGNvbnN0IHsgdXRpbHMsIHZpZXdzIH0gPSBmcEFQSTtcbiAgICBjb25zdCB7IGNyZWF0ZVZpZXcsIGNyZWF0ZVdvcmtlciwgbG9hZEltYWdlIH0gPSB1dGlscztcbiAgICBjb25zdCB7IGlkIH0gPSBwcm9wcztcblxuICAgIC8vIHdlIG5lZWQgdG8gZ2V0IHRoZSBmaWxlIGRhdGEgdG8gZGV0ZXJtaW5lIHRoZSBldmVudHVhbCBpbWFnZSBzaXplXG4gICAgY29uc3QgaXRlbSA9IHJvb3QucXVlcnkoJ0dFVF9JVEVNJywgaWQpO1xuXG4gICAgLy8gZ2V0IHVybCB0byBmaWxlICh3ZSdsbCByZXZva2UgaXQgbGF0ZXIgb24gd2hlbiBkb25lKVxuICAgIGNvbnN0IGZpbGVVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGl0ZW0uZmlsZSk7XG5cbiAgICAvLyBmYWxsYmFja1xuICAgIGNvbnN0IGxvYWRQcmV2aWV3RmFsbGJhY2sgPSAoaXRlbSwgd2lkdGgsIGhlaWdodCwgb3JpZW50YXRpb24pID0+IHtcbiAgICAgIC8vIGxldCdzIHNjYWxlIHRoZSBpbWFnZSBpbiB0aGUgbWFpbiB0aHJlYWQgOihcbiAgICAgIGxvYWRJbWFnZShmaWxlVVJMKS50aGVuKHByZXZpZXdJbWFnZUxvYWRlZCk7XG4gICAgfTtcblxuICAgIC8vIGltYWdlIGlzIG5vdyByZWFkeVxuICAgIGNvbnN0IHByZXZpZXdJbWFnZUxvYWRlZCA9IGRhdGEgPT4ge1xuICAgICAgLy8gdGhlIGZpbGUgdXJsIGlzIG5vIGxvbmdlciBuZWVkZWRcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoZmlsZVVSTCk7XG5cbiAgICAgIC8vIHRoZSBwcmV2aWV3IGlzIG5vdyByZWFkeSB0byBiZSBkcmF3blxuICAgICAgcm9vdC5kaXNwYXRjaCgnRElEX0lNQUdFX1BSRVZJRVdfTE9BRCcsIHtcbiAgICAgICAgaWQsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBkZXRlcm1pbmUgaW1hZ2Ugc2l6ZSBvZiB0aGlzIGl0ZW1cbiAgICBnZXRJbWFnZVNpemUoZmlsZVVSTCwgKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICAgIC8vIHdlIGNhbiBub3cgc2NhbGUgdGhlIHBhbmVsIHRvIHRoZSBmaW5hbCBzaXplXG4gICAgICByb290LmRpc3BhdGNoKCdESURfSU1BR0VfUFJFVklFV19DQUxDVUxBVEVfU0laRScsIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICAgIH0pO1xuXG4gICAgICAvLyBpZiB3ZSBzdXBwb3J0IHNjYWxpbmcgdXNpbmcgY3JlYXRlSW1hZ2VCaXRtYXAgd2UgdXNlIGEgd29ya2VyXG4gICAgICBpZiAoJ2NyZWF0ZUltYWdlQml0bWFwJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgLy8gbGV0J3Mgc2NhbGUgdGhlIGltYWdlIGluIGEgd29ya2VyXG4gICAgICAgIGNvbnN0IHdvcmtlciA9IGNyZWF0ZVdvcmtlcihCaXRtYXBXb3JrZXIpO1xuICAgICAgICB3b3JrZXIucG9zdChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxlOiBmaWxlVVJMXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbWFnZUJpdG1hcCA9PiB7XG4gICAgICAgICAgICAvLyBkZXN0cm95IHdvcmtlclxuICAgICAgICAgICAgd29ya2VyLnRlcm1pbmF0ZSgpO1xuXG4gICAgICAgICAgICAvLyBubyBiaXRtYXAgcmV0dXJuZWQsIG11c3QgYmUgc29tZXRoaW5nIHdyb25nLFxuICAgICAgICAgICAgLy8gdHJ5IHRoZSBvbGRzY2hvb2wgd2F5XG4gICAgICAgICAgICBpZiAoIWltYWdlQml0bWFwKSB7XG4gICAgICAgICAgICAgIGxvYWRQcmV2aWV3RmFsbGJhY2soaXRlbSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8geWF5IHdlIGdvdCBvdXIgYml0bWFwLCBsZXQncyBjb250aW51ZSBzaG93aW5nIHRoZSBwcmV2aWV3XG4gICAgICAgICAgICBwcmV2aWV3SW1hZ2VMb2FkZWQoaW1hZ2VCaXRtYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNyZWF0ZSBmYWxsYmFjayBwcmV2aWV3XG4gICAgICAgIGxvYWRQcmV2aWV3RmFsbGJhY2soaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFdyaXRlIGhhbmRsZXIgZm9yIHdoZW4gdGhlIHByZXZpZXcgaGFzIGJlZW4gbG9hZGVkXG4gICAqL1xuICBjb25zdCBkaWRMb2FkUHJldmlldyA9ICh7IHJvb3QsIHByb3BzIH0pID0+IHtcbiAgICByb290LnJlZi5vdmVybGF5U2hhZG93Lm9wYWNpdHkgPSAxO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXcml0ZSBoYW5kbGVyIGZvciB3aGVuIHRoZSBwcmV2aWV3IGltYWdlIGlzIHJlYWR5IHRvIGJlIGFuaW1hdGVkXG4gICAqL1xuICBjb25zdCBkaWREcmF3UHJldmlldyA9ICh7IHJvb3QsIHByb3BzIH0pID0+IHtcbiAgICBjb25zdCB7IGltYWdlIH0gPSByb290LnJlZjtcblxuICAgIC8vIHJldmVhbCBpbWFnZVxuICAgIGltYWdlLnNjYWxlWCA9IDEuMDtcbiAgICBpbWFnZS5zY2FsZVkgPSAxLjA7XG4gICAgaW1hZ2Uub3BhY2l0eSA9IDE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFdyaXRlIGhhbmRsZXIgZm9yIHdoZW4gdGhlIHByZXZpZXcgaGFzIGJlZW4gbG9hZGVkXG4gICAqL1xuICBjb25zdCByZXN0b3JlT3ZlcmxheSA9ICh7IHJvb3QgfSkgPT4ge1xuICAgIHJvb3QucmVmLm92ZXJsYXlTaGFkb3cub3BhY2l0eSA9IDE7XG4gICAgcm9vdC5yZWYub3ZlcmxheUVycm9yLm9wYWNpdHkgPSAwO1xuICAgIHJvb3QucmVmLm92ZXJsYXlTdWNjZXNzLm9wYWNpdHkgPSAwO1xuICB9O1xuXG4gIGNvbnN0IGRpZFRocm93RXJyb3IgPSAoeyByb290IH0pID0+IHtcbiAgICByb290LnJlZi5vdmVybGF5U2hhZG93Lm9wYWNpdHkgPSAwLjI1O1xuICAgIHJvb3QucmVmLm92ZXJsYXlFcnJvci5vcGFjaXR5ID0gMTtcbiAgfTtcblxuICBjb25zdCBkaWRDb21wbGV0ZVByb2Nlc3NpbmcgPSAoeyByb290IH0pID0+IHtcbiAgICByb290LnJlZi5vdmVybGF5U2hhZG93Lm9wYWNpdHkgPSAwLjI1O1xuICAgIHJvb3QucmVmLm92ZXJsYXlTdWNjZXNzLm9wYWNpdHkgPSAxO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3QgY3JlYXRlID0gKHsgcm9vdCwgcHJvcHMsIGRpc3BhdGNoIH0pID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUltYWdlVmlldyhmcEFQSSk7XG5cbiAgICAvLyBhcHBlbmQgaW1hZ2UgcHJlc2VudGVyXG4gICAgcm9vdC5yZWYuaW1hZ2UgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KGltYWdlLCB7XG4gICAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgICAgc2NhbGVYOiAxLjI1LFxuICAgICAgICBzY2FsZVk6IDEuMjUsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIGltYWdlIG92ZXJsYXlzXG4gICAgcm9vdC5yZWYub3ZlcmxheVNoYWRvdyA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcob3ZlcmxheSwge1xuICAgICAgICB0ZW1wbGF0ZTogb3ZlcmxheVRlbXBsYXRlU2hhZG93LFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KVxuICAgICk7XG5cbiAgICByb290LnJlZi5vdmVybGF5U3VjY2VzcyA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcob3ZlcmxheSwge1xuICAgICAgICB0ZW1wbGF0ZTogb3ZlcmxheVRlbXBsYXRlU3VjY2VzcyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcm9vdC5yZWYub3ZlcmxheUVycm9yID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhvdmVybGF5LCB7XG4gICAgICAgIHRlbXBsYXRlOiBvdmVybGF5VGVtcGxhdGVFcnJvcixcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBmcEFQSS51dGlscy5jcmVhdGVWaWV3KHtcbiAgICBuYW1lOiAnaW1hZ2UtcHJldmlldy13cmFwcGVyJyxcbiAgICBjcmVhdGUsXG4gICAgd3JpdGU6IGZwQVBJLnV0aWxzLmNyZWF0ZVJvdXRlKHtcbiAgICAgIC8vIGltYWdlIHByZXZpZXcgc3RhdGVkXG4gICAgICBESURfSU1BR0VfUFJFVklFV19MT0FEOiBkaWRMb2FkUHJldmlldyxcbiAgICAgIERJRF9JTUFHRV9QUkVWSUVXX0RSQVc6IGRpZERyYXdQcmV2aWV3LFxuICAgICAgRElEX0lNQUdFX1BSRVZJRVdfQ09OVEFJTkVSX0NSRUFURTogZGlkQ3JlYXRlUHJldmlld0NvbnRhaW5lcixcblxuICAgICAgLy8gZmlsZSBzdGF0ZXNcbiAgICAgIERJRF9USFJPV19JVEVNX0xPQURfRVJST1I6IGRpZFRocm93RXJyb3IsXG4gICAgICBESURfVEhST1dfSVRFTV9QUk9DRVNTSU5HX0VSUk9SOiBkaWRUaHJvd0Vycm9yLFxuICAgICAgRElEX1RIUk9XX0lURU1fSU5WQUxJRDogZGlkVGhyb3dFcnJvcixcbiAgICAgIERJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkc6IGRpZENvbXBsZXRlUHJvY2Vzc2luZyxcbiAgICAgIERJRF9TVEFSVF9JVEVNX1BST0NFU1NJTkc6IHJlc3RvcmVPdmVybGF5LFxuICAgICAgRElEX1JFVkVSVF9JVEVNX1BST0NFU1NJTkc6IHJlc3RvcmVPdmVybGF5XG4gICAgfSlcbiAgfSk7XG59O1xuXG4vKipcbiAqIEltYWdlIFByZXZpZXcgUGx1Z2luXG4gKi9cbnZhciBwbHVnaW4kMSA9IGZwQVBJID0+IHtcbiAgY29uc3QgeyBhZGRGaWx0ZXIsIHV0aWxzIH0gPSBmcEFQSTtcbiAgY29uc3QgeyBUeXBlLCBjcmVhdGVSb3V0ZSB9ID0gdXRpbHM7XG5cbiAgLy8gaW1hZ2VQcmV2aWV3Vmlld1xuICBjb25zdCBpbWFnZVByZXZpZXdWaWV3ID0gY3JlYXRlSW1hZ2VXcmFwcGVyVmlldyhmcEFQSSk7XG5cbiAgLy8gY2FsbGVkIGZvciBlYWNoIHZpZXcgdGhhdCBpcyBjcmVhdGVkIHJpZ2h0IGFmdGVyIHRoZSAnY3JlYXRlJyBtZXRob2RcbiAgYWRkRmlsdGVyKCdDUkVBVEVfVklFVycsIHZpZXdBUEkgPT4ge1xuICAgIC8vIGdldCByZWZlcmVuY2UgdG8gY3JlYXRlZCB2aWV3XG4gICAgY29uc3QgeyBpcywgdmlldywgcXVlcnkgfSA9IHZpZXdBUEk7XG5cbiAgICAvLyBvbmx5IGhvb2sgdXAgdG8gaXRlbSB2aWV3IGFuZCBvbmx5IGlmIGlzIGVuYWJsZWQgZm9yIHRoaXMgY3JvcHBlclxuICAgIGlmICghaXMoJ2ZpbGUnKSB8fCAhcXVlcnkoJ0dFVF9BTExPV19JTUFHRV9QUkVWSUVXJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgdGhlIGltYWdlIHByZXZpZXcgcGx1Z2luLCBidXQgb25seSBkbyBzbyBpZiB0aGUgaXRlbSBpcyBhbiBpbWFnZVxuICAgIGNvbnN0IGRpZExvYWRJdGVtID0gKHsgcm9vdCwgcHJvcHMsIGFjdGlvbnMgfSkgPT4ge1xuICAgICAgY29uc3QgeyBpZCB9ID0gcHJvcHM7XG4gICAgICBjb25zdCBpdGVtID0gcXVlcnkoJ0dFVF9JVEVNJywgaWQpO1xuXG4gICAgICAvLyBpdGVtIGNvdWxkIHRoZW9yZXRpY2FsbHkgaGF2ZSBiZWVuIHJlbW92ZWQgaW4gdGhlIG1lYW4gdGltZVxuICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZ2V0IHRoZSBmaWxlIG9iamVjdFxuICAgICAgY29uc3QgZmlsZSA9IGl0ZW0uZmlsZTtcblxuICAgICAgLy8gZXhpdCBpZiB0aGlzIGlzIG5vdCBhbiBpbWFnZVxuICAgICAgaWYgKCFpc1ByZXZpZXdhYmxlSW1hZ2UoZmlsZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBleGl0IGlmIGltYWdlIHNpemUgaXMgdG9vIGhpZ2ggYW5kIG5vIGNyZWF0ZUltYWdlQml0bWFwIHN1cHBvcnRcbiAgICAgIC8vIHRoaXMgd291bGQgc2ltcGx5IGJyaW5nIHRoZSBicm93c2VyIHRvIGl0cyBrbmVlcyBhbmQgdGhhdCBpcyBub3Qgd2hhdCB3ZSB3YW50XG4gICAgICBjb25zdCBzdXBwb3J0c0NyZWF0ZUltYWdlQml0bWFwID0gJ2NyZWF0ZUltYWdlQml0bWFwJyBpbiAod2luZG93IHx8IHt9KTtcbiAgICAgIGNvbnN0IG1heFByZXZpZXdGaWxlU2l6ZSA9IHF1ZXJ5KCdHRVRfSU1BR0VfUFJFVklFV19NQVhfRklMRV9TSVpFJyk7XG4gICAgICBpZiAoXG4gICAgICAgICFzdXBwb3J0c0NyZWF0ZUltYWdlQml0bWFwICYmXG4gICAgICAgIG1heFByZXZpZXdGaWxlU2l6ZSAmJlxuICAgICAgICBmaWxlLnNpemUgPiBtYXhQcmV2aWV3RmlsZVNpemVcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCBwcmV2aWV3IHZpZXdcbiAgICAgIHJvb3QucmVmLmltYWdlUHJldmlldyA9IHZpZXcuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgICB2aWV3LmNyZWF0ZUNoaWxkVmlldyhpbWFnZVByZXZpZXdWaWV3LCB7IGlkIH0pXG4gICAgICApO1xuXG4gICAgICAvLyBub3cgcmVhZHlcbiAgICAgIHJvb3QuZGlzcGF0Y2goJ0RJRF9JTUFHRV9QUkVWSUVXX0NPTlRBSU5FUl9DUkVBVEUnLCB7IGlkIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBkaWRDYWxjdWxhdGVQcmV2aWV3U2l6ZSA9ICh7IHJvb3QsIHByb3BzLCBhY3Rpb24gfSkgPT4ge1xuICAgICAgLy8gZ2V0IGl0ZW1cbiAgICAgIGNvbnN0IGl0ZW0gPSByb290LnF1ZXJ5KCdHRVRfSVRFTScsIHsgaWQ6IHByb3BzLmlkIH0pO1xuXG4gICAgICAvLyBvcmllbnRhdGlvbiBpbmZvXG4gICAgICBjb25zdCBleGlmID0gaXRlbS5nZXRNZXRhZGF0YSgnZXhpZicpIHx8IHt9O1xuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBleGlmLm9yaWVudGF0aW9uIHx8IC0xO1xuXG4gICAgICAvLyBnZXQgd2lkdGggYW5kIGhlaWdodCBmcm9tIGFjdGlvbiwgYW5kIHN3YXAgb2Ygb3JpZW50YXRpb24gaXMgaW5jb3JyZWN0XG4gICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0IH0gPSBhY3Rpb247XG4gICAgICBpZiAob3JpZW50YXRpb24gPj0gNSAmJiBvcmllbnRhdGlvbiA8PSA4KSB7XG4gICAgICAgIFt3aWR0aCwgaGVpZ2h0XSA9IFtoZWlnaHQsIHdpZHRoXTtcbiAgICAgIH1cblxuICAgICAgLy8gd2UgbmVlZCB0aGUgaXRlbSB0byBnZXQgdG8gdGhlIGNyb3Agc2l6ZVxuICAgICAgY29uc3QgY3JvcCA9IGl0ZW0uZ2V0TWV0YWRhdGEoJ2Nyb3AnKSB8fCB7XG4gICAgICAgIHJlY3Q6IHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgaGVpZ2h0OiAxXG4gICAgICAgIH0sXG4gICAgICAgIGFzcGVjdFJhdGlvOiBoZWlnaHQgLyB3aWR0aFxuICAgICAgfTtcblxuICAgICAgLy8gZ2V0IGhlaWdodCBtaW4gYW5kIG1heFxuICAgICAgY29uc3QgZml4ZWRQcmV2aWV3SGVpZ2h0ID0gcm9vdC5xdWVyeSgnR0VUX0lNQUdFX1BSRVZJRVdfSEVJR0hUJyk7XG4gICAgICBjb25zdCBtaW5QcmV2aWV3SGVpZ2h0ID0gcm9vdC5xdWVyeSgnR0VUX0lNQUdFX1BSRVZJRVdfTUlOX0hFSUdIVCcpO1xuICAgICAgY29uc3QgbWF4UHJldmlld0hlaWdodCA9IHJvb3QucXVlcnkoJ0dFVF9JTUFHRV9QUkVWSUVXX01BWF9IRUlHSFQnKTtcblxuICAgICAgLy8gY29uc3QgY3JvcCB3aWR0aFxuICAgICAgaGVpZ2h0ID1cbiAgICAgICAgZml4ZWRQcmV2aWV3SGVpZ2h0ICE9PSBudWxsXG4gICAgICAgICAgPyBmaXhlZFByZXZpZXdIZWlnaHRcbiAgICAgICAgICA6IE1hdGgubWF4KG1pblByZXZpZXdIZWlnaHQsIE1hdGgubWluKGhlaWdodCwgbWF4UHJldmlld0hlaWdodCkpO1xuXG4gICAgICB3aWR0aCA9IGhlaWdodCAvIGNyb3AuYXNwZWN0UmF0aW87XG4gICAgICBpZiAod2lkdGggPiByb290LnJlY3QuZWxlbWVudC53aWR0aCkge1xuICAgICAgICB3aWR0aCA9IHJvb3QucmVjdC5lbGVtZW50LndpZHRoO1xuICAgICAgICBoZWlnaHQgPSB3aWR0aCAqIGNyb3AuYXNwZWN0UmF0aW87XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCBoZWlnaHRcbiAgICAgIHJvb3QucmVmLmltYWdlUHJldmlldy5lbGVtZW50LnN0eWxlLmNzc1RleHQgPSBgaGVpZ2h0OiR7TWF0aC5yb3VuZChcbiAgICAgICAgaGVpZ2h0XG4gICAgICApfXB4YDtcbiAgICB9O1xuXG4gICAgLy8gc3RhcnQgd3JpdGluZ1xuICAgIHZpZXcucmVnaXN0ZXJXcml0ZXIoXG4gICAgICBjcmVhdGVSb3V0ZSh7XG4gICAgICAgIERJRF9MT0FEX0lURU06IGRpZExvYWRJdGVtLFxuICAgICAgICBESURfSU1BR0VfUFJFVklFV19DQUxDVUxBVEVfU0laRTogZGlkQ2FsY3VsYXRlUHJldmlld1NpemVcbiAgICAgIH0pXG4gICAgKTtcbiAgfSk7XG5cbiAgLy8gZXhwb3NlIHBsdWdpblxuICByZXR1cm4ge1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIC8vIEVuYWJsZSBvciBkaXNhYmxlIGltYWdlIHByZXZpZXdcbiAgICAgIGFsbG93SW1hZ2VQcmV2aWV3OiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSxcblxuICAgICAgLy8gRml4ZWQgcHJldmlldyBoZWlnaHRcbiAgICAgIGltYWdlUHJldmlld0hlaWdodDogW251bGwsIFR5cGUuSU5UXSxcblxuICAgICAgLy8gTWluIGltYWdlIGhlaWdodFxuICAgICAgaW1hZ2VQcmV2aWV3TWluSGVpZ2h0OiBbNDQsIFR5cGUuSU5UXSxcblxuICAgICAgLy8gTWF4IGltYWdlIGhlaWdodFxuICAgICAgaW1hZ2VQcmV2aWV3TWF4SGVpZ2h0OiBbMjU2LCBUeXBlLklOVF0sXG5cbiAgICAgIC8vIE1heCBzaXplIG9mIHByZXZpZXcgZmlsZSBmb3Igd2hlbiBjcmVhdGVJbWFnZUJpdG1hcCBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICBpbWFnZVByZXZpZXdNYXhGaWxlU2l6ZTogW251bGwsIFR5cGUuSU5UXVxuICAgIH1cbiAgfTtcbn07XG5cbmlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudCkge1xuICAvLyBwbHVnaW4gaGFzIGxvYWRlZFxuICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgIG5ldyBDdXN0b21FdmVudCgnRmlsZVBvbmQ6cGx1Z2lubG9hZGVkJywgeyBkZXRhaWw6IHBsdWdpbiQxIH0pXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsdWdpbiQxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcvZGlzdC9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5lc20uanNcbi8vIG1vZHVsZSBpZCA9IDIxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpbGVwb25kLm1pbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpbGVwb25kLm1pbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcG9uZC5taW4uY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9maWxlcG9uZC9kaXN0L2ZpbGVwb25kLm1pbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4gKiBGaWxlUG9uZCAxLjQuMFxcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCwgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcXG4gKiBQbGVhc2UgdmlzaXQgaHR0cHM6Ly9wcWluYS5ubC9maWxlcG9uZCBmb3IgZGV0YWlscy5cXG4gKi9cXG4uZmlsZXBvbmQtLWFzc2lzdGFudHtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47aGVpZ2h0OjFweDt3aWR0aDoxcHg7cGFkZGluZzowO2JvcmRlcjowO2NsaXA6cmVjdCgxcHgsMXB4LDFweCwxcHgpOy13ZWJraXQtY2xpcC1wYXRoOmluc2V0KDUwJSk7Y2xpcC1wYXRoOmluc2V0KDUwJSk7d2hpdGUtc3BhY2U6bm93cmFwfS5maWxlcG9uZC0tYnJvd3Nlcntwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW46MDtwYWRkaW5nOjA7bGVmdDoxZW07dG9wOjEuNzVlbTt3aWR0aDpjYWxjKDEwMCUgLSAyZW0pO29wYWNpdHk6MDtmb250LXNpemU6MH0uZmlsZXBvbmQtLWRyaXB7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7b3ZlcmZsb3c6aGlkZGVuO29wYWNpdHk6LjE7cG9pbnRlci1ldmVudHM6bm9uZTtib3JkZXItcmFkaXVzOi41ZW07YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wMSl9LmZpbGVwb25kLS1kcmlwLWJsb2J7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO2xlZnQ6MDt3aWR0aDo4ZW07aGVpZ2h0OjhlbTttYXJnaW4tbGVmdDotNGVtO21hcmdpbi10b3A6LTRlbTtiYWNrZ3JvdW5kOiMyOTI2MjU7Ym9yZGVyLXJhZGl1czo1MCV9LmZpbGVwb25kLS1kcmlwLWJsb2IsLmZpbGVwb25kLS1kcm9wLWxhYmVse3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5fS5maWxlcG9uZC0tZHJvcC1sYWJlbHtsZWZ0OjFlbTtyaWdodDoxZW07bWFyZ2luOjAgMCAxZW07Y29sb3I6IzRmNGY0Zn0uZmlsZXBvbmQtLWRyb3AtbGFiZWwgbGFiZWx7ZGlzcGxheTpibG9jaztwYWRkaW5nOjFlbSAwO21hcmdpbjowO2N1cnNvcjpkZWZhdWx0O2ZvbnQtc2l6ZTouODc1ZW07Zm9udC13ZWlnaHQ6NDAwO3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjEuNX0uZmlsZXBvbmQtLWxhYmVsLWFjdGlvbnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lOy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6aW5rO3RleHQtZGVjb3JhdGlvbi1za2lwOmluazstd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvcjojYTdhNGE0O3RleHQtZGVjb3JhdGlvbi1jb2xvcjojYTdhNGE0O2N1cnNvcjpwb2ludGVyfS5maWxlcG9uZC0tZmlsZS1hY3Rpb24tYnV0dG9ue2ZvbnQtc2l6ZToxZW07d2lkdGg6MS42MjVlbTtoZWlnaHQ6MS42MjVlbTtjdXJzb3I6YXV0bztmb250LWZhbWlseTppbmhlcml0O2xpbmUtaGVpZ2h0OmluaGVyaXQ7bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjpub25lO2NvbG9yOiNmZmY7b3V0bGluZTpub25lO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNSk7YmFja2dyb3VuZC1pbWFnZTpub25lO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5O2JveC1zaGFkb3c6MCAwIDAgMCBoc2xhKDAsMCUsMTAwJSwwKTt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjI1cyBlYXNlLWlufS5maWxlcG9uZC0tZmlsZS1hY3Rpb24tYnV0dG9uIHN2Z3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5maWxlcG9uZC0tZmlsZS1hY3Rpb24tYnV0dG9uOmZvY3VzLC5maWxlcG9uZC0tZmlsZS1hY3Rpb24tYnV0dG9uOmhvdmVye2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIGhzbGEoMCwwJSwxMDAlLC45KX0uZmlsZXBvbmQtLWZpbGUtaW5mb3twb3NpdGlvbjpzdGF0aWM7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDstbXMtZmxleDoxO2ZsZXg6MTttYXJnaW46MCAuNWVtIDAgMDttaW4td2lkdGg6MDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm0sb3BhY2l0eTtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uZmlsZXBvbmQtLWZpbGUtaW5mbyAqe21hcmdpbjowfS5maWxlcG9uZC0tZmlsZS1pbmZvIC5maWxlcG9uZC0tZmlsZS1pbmZvLW1haW57Zm9udC1zaXplOi43NWVtO2xpbmUtaGVpZ2h0OjEuMjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO292ZXJmbG93OmhpZGRlbjt3aGl0ZS1zcGFjZTpub3dyYXA7d2lkdGg6MTAwJX0uZmlsZXBvbmQtLWZpbGUtaW5mbyAuZmlsZXBvbmQtLWZpbGUtaW5mby1zdWJ7Zm9udC1zaXplOi42MjVlbTtvcGFjaXR5Oi41O3RyYW5zaXRpb246b3BhY2l0eSAuMjVzIGVhc2UtaW4tb3V0fS5maWxlcG9uZC0tZmlsZS1pbmZvIC5maWxlcG9uZC0tZmlsZS1pbmZvLXN1YjplbXB0eXtkaXNwbGF5Om5vbmV9LmZpbGVwb25kLS1maWxlLXN0YXR1c3twb3NpdGlvbjpzdGF0aWM7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtYWxpZ246ZW5kO2FsaWduLWl0ZW1zOmZsZXgtZW5kOy1tcy1mbGV4LXBvc2l0aXZlOjA7ZmxleC1ncm93OjA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowO21hcmdpbjowO21pbi13aWR0aDoyLjI1ZW07dGV4dC1hbGlnbjpyaWdodDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm0sb3BhY2l0eTtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uZmlsZXBvbmQtLWZpbGUtc3RhdHVzICp7bWFyZ2luOjA7d2hpdGUtc3BhY2U6bm93cmFwfS5maWxlcG9uZC0tZmlsZS1zdGF0dXMgLmZpbGVwb25kLS1maWxlLXN0YXR1cy1tYWlue2ZvbnQtc2l6ZTouNzVlbTtsaW5lLWhlaWdodDoxLjJ9LmZpbGVwb25kLS1maWxlLXN0YXR1cyAuZmlsZXBvbmQtLWZpbGUtc3RhdHVzLXN1Yntmb250LXNpemU6LjYyNWVtO29wYWNpdHk6LjU7dHJhbnNpdGlvbjpvcGFjaXR5IC4yNXMgZWFzZS1pbi1vdXR9LmZpbGVwb25kLS1maWxlLXdyYXBwZXJ7Ym9yZGVyOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowO21pbi13aWR0aDowO2hlaWdodDoxMDAlfS5maWxlcG9uZC0tZmlsZS13cmFwcGVyPmxlZ2VuZHtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47aGVpZ2h0OjFweDt3aWR0aDoxcHg7cGFkZGluZzowO2JvcmRlcjowO2NsaXA6cmVjdCgxcHgsMXB4LDFweCwxcHgpOy13ZWJraXQtY2xpcC1wYXRoOmluc2V0KDUwJSk7Y2xpcC1wYXRoOmluc2V0KDUwJSk7d2hpdGUtc3BhY2U6bm93cmFwfS5maWxlcG9uZC0tZmlsZXtwb3NpdGlvbjpzdGF0aWM7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7aGVpZ2h0OjEwMCU7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtwYWRkaW5nOi41NjI1ZW07Y29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOi41ZW19LmZpbGVwb25kLS1maWxlIC5maWxlcG9uZC0tZmlsZS1zdGF0dXN7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6Mi4yNWVtfS5maWxlcG9uZC0tZmlsZSAuZmlsZXBvbmQtLXByb2Nlc3NpbmctY29tcGxldGUtaW5kaWNhdG9ye3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6Mn0uZmlsZXBvbmQtLWZpbGUgLmZpbGVwb25kLS1maWxlLWFjdGlvbi1idXR0b24sLmZpbGVwb25kLS1maWxlIC5maWxlcG9uZC0tcHJvY2Vzc2luZy1jb21wbGV0ZS1pbmRpY2F0b3J7cG9zaXRpb246YWJzb2x1dGV9LmZpbGVwb25kLS1maWxlIC5maWxlcG9uZC0tcHJvZ3Jlc3MtaW5kaWNhdG9ye3Bvc2l0aW9uOmFic29sdXRlO3RvcDouNzVlbTtyaWdodDouNzVlbX0uZmlsZXBvbmQtLWZpbGUgLmZpbGVwb25kLS1hY3Rpb24tcmVtb3ZlLWl0ZW17bGVmdDouNTYyNWVtfS5maWxlcG9uZC0tZmlsZSAuZmlsZXBvbmQtLWZpbGUtYWN0aW9uLWJ1dHRvbjpub3QoLmZpbGVwb25kLS1hY3Rpb24tcmVtb3ZlLWl0ZW0pLC5maWxlcG9uZC0tZmlsZSAuZmlsZXBvbmQtLXByb2Nlc3NpbmctY29tcGxldGUtaW5kaWNhdG9ye3JpZ2h0Oi41NjI1ZW19W2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZSo9ZXJyb3JdIC5maWxlcG9uZC0tZmlsZS1pbmZvLFtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGUqPWludmFsaWRdIC5maWxlcG9uZC0tZmlsZS1pbmZvLFtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGU9Y2FuY2VsbGVkXSAuZmlsZXBvbmQtLWZpbGUtaW5mb3ttYXJnaW4tcmlnaHQ6Mi4yNWVtfVtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGU9cHJvY2Vzc2luZy1jb21wbGV0ZV0gLmZpbGVwb25kLS1hY3Rpb24tcmV2ZXJ0LWl0ZW0tcHJvY2Vzc2luZyBzdmd7LXdlYmtpdC1hbmltYXRpb246ZmFsbCAuNXMgLjEyNXMgbGluZWFyIGJvdGg7YW5pbWF0aW9uOmZhbGwgLjVzIC4xMjVzIGxpbmVhciBib3RofVtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGU9cHJvY2Vzc2luZy1jb21wbGV0ZV0gLmZpbGVwb25kLS1maWxlLWluZm8tc3ViLFtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGU9cHJvY2Vzc2luZy1jb21wbGV0ZV0gLmZpbGVwb25kLS1maWxlLXN0YXR1cy1zdWJ7b3BhY2l0eTowfVtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGU9cHJvY2Vzc2luZy1jb21wbGV0ZV0gLmZpbGVwb25kLS1hY3Rpb24tcmV2ZXJ0LWl0ZW0tcHJvY2Vzc2luZ34uZmlsZXBvbmQtLWZpbGUtaW5mbyAuZmlsZXBvbmQtLWZpbGUtaW5mby1zdWIsW2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZT1wcm9jZXNzaW5nLWNvbXBsZXRlXSAuZmlsZXBvbmQtLWFjdGlvbi1yZXZlcnQtaXRlbS1wcm9jZXNzaW5nfi5maWxlcG9uZC0tZmlsZS1zdGF0dXMgLmZpbGVwb25kLS1maWxlLXN0YXR1cy1zdWJ7b3BhY2l0eTouNX1bZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlKj1lcnJvcl0gLmZpbGVwb25kLS1maWxlLXdyYXBwZXIsW2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZSo9ZXJyb3JdIC5maWxlcG9uZC0tcGFuZWwsW2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZSo9aW52YWxpZF0gLmZpbGVwb25kLS1maWxlLXdyYXBwZXIsW2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZSo9aW52YWxpZF0gLmZpbGVwb25kLS1wYW5lbHstd2Via2l0LWFuaW1hdGlvbjpzaGFrZSAuNjVzIGxpbmVhciBib3RoO2FuaW1hdGlvbjpzaGFrZSAuNjVzIGxpbmVhciBib3RofVtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGUqPWJ1c3ldIC5maWxlcG9uZC0tcHJvZ3Jlc3MtaW5kaWNhdG9yIHN2Z3std2Via2l0LWFuaW1hdGlvbjpzcGluIDFzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246c3BpbiAxcyBsaW5lYXIgaW5maW5pdGV9QC13ZWJraXQta2V5ZnJhbWVzIHNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19QGtleWZyYW1lcyBzcGluezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fUAtd2Via2l0LWtleWZyYW1lcyBzaGFrZXsxMCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLS4wNjI1ZW0pO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0uMDYyNWVtKX0yMCUsODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLjEyNWVtKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCguMTI1ZW0pfTMwJSw1MCUsNzAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLS4yNWVtKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtLjI1ZW0pfTQwJSw2MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCguMjVlbSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLjI1ZW0pfX1Aa2V5ZnJhbWVzIHNoYWtlezEwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtLjA2MjVlbSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLS4wNjI1ZW0pfTIwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCguMTI1ZW0pO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC4xMjVlbSl9MzAlLDUwJSw3MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtLjI1ZW0pO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0uMjVlbSl9NDAlLDYwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC4yNWVtKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCguMjVlbSl9fUAtd2Via2l0LWtleWZyYW1lcyBmYWxsezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH03MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMSk7dHJhbnNmb3JtOnNjYWxlKDEuMSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXR9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0fX1Aa2V5ZnJhbWVzIGZhbGx7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0fTcwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xKTt0cmFuc2Zvcm06c2NhbGUoMS4xKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dH10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9fS5maWxlcG9uZC0taG9wcGVyW2RhdGEtaG9wcGVyLXN0YXRlPWRyYWctb3Zlcl0+Kntwb2ludGVyLWV2ZW50czpub25lfS5maWxlcG9uZC0tcHJvZ3Jlc3MtaW5kaWNhdG9ye3otaW5kZXg6MTAzfS5maWxlcG9uZC0tZmlsZS1hY3Rpb24tYnV0dG9ue3otaW5kZXg6MTAyfS5maWxlcG9uZC0tZmlsZS1zdGF0dXN7ei1pbmRleDoxMDF9LmZpbGVwb25kLS1maWxlLWluZm97ei1pbmRleDoxMDB9LmZpbGVwb25kLS1pdGVte3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO3BhZGRpbmc6MDttYXJnaW46MCAwIC41ZW07d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHl9LmZpbGVwb25kLS1pdGVtPi5maWxlcG9uZC0tcGFuZWx7ei1pbmRleDoxfS5maWxlcG9uZC0taXRlbT4uZmlsZXBvbmQtLXBhbmVsIC5maWxlcG9uZC0tcGFuZWwtYm90dG9te2JveC1zaGFkb3c6MCAuMDYyNWVtIC4xMjVlbSAtLjA2MjVlbSByZ2JhKDAsMCwwLC4yNSl9LmZpbGVwb25kLS1pdGVtPi5maWxlcG9uZC0tZmlsZS13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6Mn0uZmlsZXBvbmQtLWl0ZW0tcGFuZWx7YmFja2dyb3VuZC1jb2xvcjojNjQ2MDVlfVtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGU9cHJvY2Vzc2luZy1jb21wbGV0ZV0gLmZpbGVwb25kLS1pdGVtLXBhbmVse2JhY2tncm91bmQtY29sb3I6IzM2OTc2M31bZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlKj1lcnJvcl0gLmZpbGVwb25kLS1pdGVtLXBhbmVsLFtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGUqPWludmFsaWRdIC5maWxlcG9uZC0taXRlbS1wYW5lbHtiYWNrZ3JvdW5kLWNvbG9yOiNjNDRlNDd9LmZpbGVwb25kLS1pdGVtLXBhbmVse2JvcmRlci1yYWRpdXM6LjVlbTt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjI1c30uZmlsZXBvbmQtLWxpc3Qtc2Nyb2xsZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7bWFyZ2luOjA7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5maWxlcG9uZC0tbGlzdC1zY3JvbGxlcltkYXRhLXN0YXRlPW92ZXJmbG93XXtvdmVyZmxvdy15OnNjcm9sbDtvdmVyZmxvdy14OnZpc2libGU7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9LmZpbGVwb25kLS1saXN0LXNjcm9sbGVyW2RhdGEtc3RhdGU9b3ZlcmZsb3ddIC5maWxlcG9uZC0tbGlzdHtib3R0b206MDtyaWdodDowfS5maWxlcG9uZC0tbGlzdC1zY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXJ7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0uZmlsZXBvbmQtLWxpc3Qtc2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2Fse3dpZHRoOjFlbX0uZmlsZXBvbmQtLWxpc3Qtc2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyOmhvcml6b250YWx7aGVpZ2h0OjB9LmZpbGVwb25kLS1saXN0LXNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjMpO2JvcmRlci1yYWRpdXM6OTk5OTlweDtib3JkZXI6LjMxMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWNsaXA6Y29udGVudC1ib3h9LmZpbGVwb25kLS1saXN0e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MWVtO3JpZ2h0OjFlbTttYXJnaW46MDtwYWRkaW5nOjA7bGlzdC1zdHlsZS10eXBlOm5vbmU7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5maWxlcG9uZC0tcGFuZWwtcm9vdHtib3JkZXItcmFkaXVzOi41ZW07YmFja2dyb3VuZC1jb2xvcjojZjFmMGVmfS5maWxlcG9uZC0tcGFuZWx7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3JpZ2h0OjA7bWFyZ2luOjA7aGVpZ2h0OmF1dG8haW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOm5vbmV9LmZpbGVwb25kLS1wYW5lbFtkYXRhLXNjYWxhYmxlPXRydWVdey13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudDtib3JkZXI6bm9uZSFpbXBvcnRhbnR9LmZpbGVwb25kLS1wYW5lbFtkYXRhLXNjYWxhYmxlPWZhbHNlXXtib3R0b206MH0uZmlsZXBvbmQtLXBhbmVsW2RhdGEtc2NhbGFibGU9ZmFsc2VdPmRpdntkaXNwbGF5Om5vbmV9LmZpbGVwb25kLS1wYW5lbC1ib3R0b20sLmZpbGVwb25kLS1wYW5lbC1jZW50ZXIsLmZpbGVwb25kLS1wYW5lbC10b3B7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3JpZ2h0OjA7bWFyZ2luOjA7cGFkZGluZzowfS5maWxlcG9uZC0tcGFuZWwtYm90dG9tLC5maWxlcG9uZC0tcGFuZWwtdG9we2hlaWdodDouNWVtfS5maWxlcG9uZC0tcGFuZWwtdG9we2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MCFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MCFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbTpub25lIWltcG9ydGFudH0uZmlsZXBvbmQtLXBhbmVsLXRvcDphZnRlcntjb250ZW50OlxcXCJcXFwiO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoycHg7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOi0xcHg7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0fS5maWxlcG9uZC0tcGFuZWwtYm90dG9tLC5maWxlcG9uZC0tcGFuZWwtY2VudGVye3dpbGwtY2hhbmdlOnRyYW5zZm9ybTstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLjVlbSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwuNWVtLDApfS5maWxlcG9uZC0tcGFuZWwtYm90dG9te2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MCFpbXBvcnRhbnQ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MCFpbXBvcnRhbnQ7Ym9yZGVyLXRvcDpub25lIWltcG9ydGFudH0uZmlsZXBvbmQtLXBhbmVsLWJvdHRvbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MnB4O2xlZnQ6MDtyaWdodDowO3RvcDotMXB4O2JhY2tncm91bmQtY29sb3I6aW5oZXJpdH0uZmlsZXBvbmQtLXBhbmVsLWNlbnRlcntoZWlnaHQ6MTAwcHghaW1wb3J0YW50O2JvcmRlci10b3A6bm9uZSFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbTpub25lIWltcG9ydGFudDtib3JkZXItcmFkaXVzOjAhaW1wb3J0YW50fS5maWxlcG9uZC0tcGFuZWwtY2VudGVyOm5vdChbc3R5bGVdKXt2aXNpYmlsaXR5OmhpZGRlbn0uZmlsZXBvbmQtLXByb2dyZXNzLWluZGljYXRvcntwb3NpdGlvbjpzdGF0aWM7d2lkdGg6MS4yNWVtO2hlaWdodDoxLjI1ZW07Y29sb3I6I2ZmZjttYXJnaW46MDtwb2ludGVyLWV2ZW50czpub25lO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5fS5maWxlcG9uZC0tcHJvZ3Jlc3MtaW5kaWNhdG9yIHN2Z3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5maWxlcG9uZC0tcHJvZ3Jlc3MtaW5kaWNhdG9yIHBhdGh7ZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3J9LmZpbGVwb25kLS1saXN0LXNjcm9sbGVye3otaW5kZXg6Nn0uZmlsZXBvbmQtLWRyb3AtbGFiZWx7ei1pbmRleDo1fS5maWxlcG9uZC0tZHJpcHt6LWluZGV4OjN9LmZpbGVwb25kLS1yb290Pi5maWxlcG9uZC0tcGFuZWx7ei1pbmRleDoyfS5maWxlcG9uZC0tYnJvd3Nlcnt6LWluZGV4OjF9LmZpbGVwb25kLS1yb290e2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tYm90dG9tOjFlbTtwYWRkaW5nLXRvcDoxZW07Zm9udC1zaXplOjFyZW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtmb250LXdlaWdodDo0NTA7dGV4dC1hbGlnbjpsZWZ0O3RleHQtcmVuZGVyaW5nOm9wdGltaXplTGVnaWJpbGl0eTtkaXJlY3Rpb246bHRyO2NvbnRhaW46bGF5b3V0IHN0eWxlIHNpemV9LmZpbGVwb25kLS1yb290ICp7Zm9udC1zaXplOmluaGVyaXQ7Ym94LXNpemluZzppbmhlcml0O2xpbmUtaGVpZ2h0OmluaGVyaXR9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9maWxlcG9uZC9kaXN0L2ZpbGVwb25kLm1pbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3Lm1pbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3Lm1pbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5taW4uY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3Lm1pbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4gKiBGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlldyAxLjAuOVxcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCwgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcXG4gKiBQbGVhc2UgdmlzaXQgaHR0cHM6Ly9wcWluYS5ubC9maWxlcG9uZCBmb3IgZGV0YWlscy5cXG4gKi9cXG4uZmlsZXBvbmQtLWltYWdlLXByZXZpZXctd3JhcHBlcnt6LWluZGV4OjJ9LmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3LW92ZXJsYXl7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjVyZW07bWF4LWhlaWdodDo3cmVtO21hcmdpbjowO29wYWNpdHk6MDt6LWluZGV4OjE7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHk7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3LW92ZXJsYXk6bnRoLW9mLXR5cGUoMiksLmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3LW92ZXJsYXk6bnRoLW9mLXR5cGUoMyl7bWl4LWJsZW5kLW1vZGU6bm9ybWFsfUBzdXBwb3J0cyAoLXdlYmtpdC1tYXJxdWVlLXJlcGV0aXRpb246aW5maW5pdGUpIGFuZCAob2JqZWN0LWZpdDpmaWxsKXsuZmlsZXBvbmQtLWltYWdlLXByZXZpZXctb3ZlcmxheXttaXgtYmxlbmQtbW9kZTpub3JtYWx9fS5maWxlcG9uZC0taW1hZ2UtcHJldmlldy13cmFwcGVye3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3JpZ2h0OjA7bWFyZ2luOjA7Ym9yZGVyLXJhZGl1czouNDVlbTtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wMSl9LmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3e3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OmF1dG87cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7YmFja2dyb3VuZDojMjIyO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5fS5maWxlcG9uZC0taW1hZ2UtcHJldmlldyBkaXZ7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO21hcmdpbjowIGF1dG99LmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3IGNhbnZhc3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcvZGlzdC9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAyMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwiZGVwYXJ0bWVudHNcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNTAwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRlbGV0ZVdpbmRvdyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVdpbmRvdyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVsZXRlV2luZG93XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiYXR0ZW50aW9uXCIpKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1mbGV4XCIsIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGVsZXRlTXNnKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUNvbmZpcm0oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImVycm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlQ2FuY2VsKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI1MDBweFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVwYXJ0bWVudENyZWF0ZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlcGFydG1lbnRDcmVhdGUgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRlcGFydG1lbnRDcmVhdGVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0J3QvtCy0L7QtSDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtVwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kZXBhcnRtZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXBhcnRtZW50TmFtZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRlcGFydG1lbnROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZENvbmZpcm0oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcImVycm9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkQ2FuY2VsKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWRhdGEtdGFibGVcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWxldmF0aW9uLTFcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBfdm0uaGVhZGVycyxcbiAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLFxuICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgIFwibm8tcmVzdWx0cy10ZXh0XCI6IF92bS4kdChcIm5vX21hdGNoX2ZvdW5kXCIpLFxuICAgICAgICAgICAgICAgIFwicm93cy1wZXItcGFnZS10ZXh0XCI6IF92bS4kdChcInN0cmluZ3NcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uaWQpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1lZGl0LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLXZhbHVlXCI6IHByb3BzLml0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenk6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpyZXR1cm5WYWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChwcm9wcy5pdGVtLCBcInRpdGxlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW0udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRJdGVtKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLml0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQocHJvcHMuaXRlbSwgXCJ0aXRsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb3BzLml0ZW0udGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldFBvc2l0aW9ucyhwcm9wcy5pdGVtLmlkKS5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5nZXRFbXBsb3llZXMocHJvcHMuaXRlbS5pZCkubGVuZ3RoKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS5pZCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgIHsgc2xvdDogXCJuby1kYXRhXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IHRydWUsIGNvbG9yOiBcInJlZFwiLCBpY29uOiBcIndhcm5pbmdcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAg0J3QtdGCINC00LDQvdC90YvRhSA6KFxcclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlX19idXR0b25zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZhYjogXCJcIiwgZGFyazogXCJcIiwgbGFyZ2U6IFwiXCIsIGNvbG9yOiBcImN5YW5cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXBhcnRtZW50Q3JlYXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBkYXJrOiBcIlwiIH0gfSwgW192bS5fdihcImFkZFwiKV0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZW50ZXItYWN0aXZlLWNsYXNzXCI6IFwiYnV0dG9uRW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogXCJidXR0b25MZWF2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBcIm91dC1pblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZC5sZW5ndGggPiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVsZXRlLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZhYjogXCJcIiwgbGFyZ2U6IFwiXCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlRGlhbG9nKF92bS5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZGVsZXRlXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXNuYWNrYmFyXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGltZW91dDogX3ZtLnNuYWNrYmFyVGltZW91dCxcbiAgICAgICAgICAgICAgICB0b3A6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJtdWx0aS1saW5lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiaW5mb1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zbmFja2JhclNob3csXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNuYWNrYmFyU2hvdyA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzbmFja2JhclNob3dcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXHJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiZGVsZXRlX2RvbmVcIikpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxyXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInBpbmtcIiB9LFxuICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5zbmFja2JhclNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJva1wiKSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTFlZTY3MzVkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xZWU2NzM1ZFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=