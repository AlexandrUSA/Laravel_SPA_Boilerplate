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
exports.push([module.i, "\n#departments[data-v-1ee6735d] {\n  position: relative;\n  width: 90%;\n  max-width: 1000px;\n  margin: 10px auto;\n}\nspan[data-v-1ee6735d] {\n  cursor: pointer;\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/admin/departments/resources/assets/js/pages/admin/departments/List.vue"],"names":[],"mappings":";AAwPA;EACA,mBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;CACA;AAEA;EACA,gBAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n  <div id=\"departments\">\r\n    \r\n    <v-dialog v-model=\"deleteWindow\" max-width=\"500px\">\r\n      <v-card>\r\n        <v-card-title>\r\n          <span class=\"headline\">{{ $t('attention') }}</span>\r\n        </v-card-title>\r\n        <v-card-text>\r\n          <v-flex xs12>{{deleteMsg}}</v-flex>\r\n        </v-card-text>\r\n        <v-card-actions>\r\n          <v-btn v-show=\"!deleteDenied\" outline color=\"info\" @click.native=\"deleteConfirm\">{{ $t('ok') }}</v-btn>\r\n          <v-btn outline color=\"error\" @click.native=\"deleteCancel\">{{ $t('cancel') }}</v-btn>\r\n        </v-card-actions>\r\n      </v-card>\r\n    </v-dialog>\r\n    \r\n    <v-dialog v-model=\"departmentCreate\" max-width=\"500px\">\r\n      <v-card>\r\n        <v-card-title>\r\n          <span class=\"headline\">Новое подразделение</span>\r\n        </v-card-title>\r\n        <v-card-text>\r\n          <v-flex xs12>\r\n            <v-text-field label=\"Наименование\" v-model=\"departmentName\"></v-text-field>\r\n          </v-flex>\r\n        </v-card-text>\r\n        <v-card-actions>\r\n          <v-btn outline color=\"info\" @click.native=\"addConfirm\">{{ $t('ok') }}</v-btn>\r\n          <v-btn outline color=\"error\" @click.native=\"addCancel\">{{ $t('cancel') }}</v-btn>\r\n        </v-card-actions>\r\n      </v-card>\r\n    </v-dialog>\r\n    \r\n    <v-card>\r\n      <v-data-table\r\n        :headers=\"headers\"\r\n        :items=\"items\"\r\n        item-key=\"id\"\r\n        :no-results-text=\"$t('no_match_found')\"\r\n        :rows-per-page-text=\"$t('strings')\"\r\n        class=\"elevation-1\">\r\n        <template slot=\"items\" slot-scope=\"props\">\r\n          <td>{{ props.item.id }}</td>\r\n          <td>\r\n            <v-edit-dialog\r\n              :return-value.sync=\"props.item.title\"\r\n              lazy\r\n            > {{ props.item.title }}\r\n              <v-text-field\r\n                slot=\"input\"\r\n                label=\"Edit\"\r\n                v-model=\"props.item.title\"\r\n                single-line\r\n                counter\r\n                @change=\"editItem(props.item)\"\r\n              ></v-text-field>\r\n            </v-edit-dialog>\r\n          </td>\r\n          <td>{{ getPositions(props.item.id).length }}</td>\r\n          <td>\r\n            <router-link tag=\"span\"\r\n                         :to=\"{name: 'employees', params: {\r\n                                 searchProp: props.item.title\r\n                               }}\">\r\n              {{ getEmployees(props.item.id).length }}\r\n            </router-link>\r\n          </td>\r\n          <td>\r\n            <v-btn icon class=\"mx-0\" @click=\"editItem(props.item.id)\">\r\n              <v-icon color=\"teal\">edit</v-icon>\r\n            </v-btn>\r\n            <v-btn icon class=\"mx-0\" @click=\"deleteItem(props.item.id)\">\r\n              <v-icon color=\"pink\">delete</v-icon>\r\n            </v-btn>\r\n          </td>\r\n        </template>\r\n        <template slot=\"no-data\">\r\n          <v-alert :value=\"true\" color=\"red\" icon=\"warning\">\r\n            Нет данных :(\r\n          </v-alert>\r\n        </template>\r\n      </v-data-table>\r\n      <v-btn color=\"primary\" dark slot=\"activator\" class=\"mb-2\" @click=\"departmentCreate = true\">Добавить подразделение</v-btn>\r\n      \r\n      <v-snackbar :timeout=\"snackbarTimeout\" top v-model=\"snackbarShow\" multi-line color=\"info\">\r\n        {{ $t('delete_done') }}\r\n        <v-btn flat color=\"pink\" @click.native=\"snackbarShow = false\">{{ $t('ok') }}</v-btn>\r\n      </v-snackbar>\r\n    \r\n    </v-card>\r\n  </div>\r\n  <!--\r\n  <file-pond\r\n          name=\"test\"\r\n          ref=\"pond\"\r\n          class-name=\"my-pond\"\r\n          label-idle=\"Перекиньте файлы сюда\"\r\n          labelFileTypeNotAllowed=\"Данный формат не поддерживается\"\r\n          allow-multiple=\"true\"\r\n          accepted-file-types=\"image/jpeg, image/png, application/msword\"\r\n          v-bind:files=\"myFiles\"\r\n          v-on:init=\"handleFilePondInit\"/>\r\n  -->\r\n</template>\r\n\r\n<script>\r\n  import {mapActions, mapGetters} from 'vuex';\r\n  import vueFilePond from 'vue-filepond';\r\n  import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';\r\n  import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';\r\n  // Import styles\r\n  import 'filepond/dist/filepond.min.css';\r\n  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';\r\n\r\n  const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);\r\n\r\n\r\n  export default {\r\n    middleware: ['auth', 'organisation'],\r\n    data: () => ({\r\n      myFiles: ['index.html'],\r\n      //Подробности\r\n      showInfo: false,\r\n      selectedEmployees: [],\r\n      selectedPositions: [],\r\n      // Всплывашки\r\n      snackbarShow: false,\r\n      snackbarTimeout: 10000,\r\n      // Поиск / Выборка\r\n      search: '',\r\n      selected: [],\r\n      dialog: false,\r\n      // Удаление\r\n      deleteIndex: null,\r\n      deleteWindow: false,\r\n      deleteDenied: false,\r\n      delErrMessage: [],\r\n      //Создание\r\n      departmentCreate: false,\r\n      departmentName: '',\r\n      // Заголовки таблицы\r\n      headers: [{\r\n        text: 'Номер',\r\n        align: 'left',\r\n        sortable: false\r\n      },\r\n        {\r\n          text: 'Наименование',\r\n          value: 'name'\r\n        },\r\n        {\r\n          text: 'Должностей',\r\n          value: 'positions'\r\n        },\r\n        {\r\n          text: 'Сотрудников',\r\n          value: 'employees'\r\n        },\r\n        {\r\n          text: 'Действия',\r\n          value: 'action'\r\n        }\r\n      ]\r\n    }),\r\n    computed: {\r\n      deleteMsg() {\r\n        return (this.deleteDenied) ? 'За данным отлелом закреплены сотрудники' :\r\n          'Вы действительно хотите расформировать данный отдел?';\r\n      },\r\n      ...mapGetters({\r\n        items: 'departments/departments',\r\n        positions: 'positions/positions',\r\n        employees: 'employees/employees'\r\n      })\r\n    },\r\n//    components: {\r\n//        FilePond\r\n//    },\r\n    methods: {\r\n//      handleFilePondInit: function() {\r\n//        console.log('FilePond has initialized');\r\n//        this.$refs.pond.getFiles();\r\n//      },\r\n      getPositions(id) {\r\n        let positions = [];\r\n\r\n        this.positions.forEach(el => {\r\n          if (+el.department_id === +id) positions.push(el);\r\n        });\r\n\r\n        return positions;\r\n      },\r\n      getEmployees(id) {\r\n        let employees = [],\r\n          positions = this.getPositions(id);\r\n\r\n        positions.forEach(pos => {\r\n          this.employees.forEach(el => {\r\n            if (+el.position_id === +pos.id) employees.push(el);\r\n          });\r\n        });\r\n        return employees;\r\n      },\r\n      addConfirm() {\r\n        this.addItem({\r\n          'title': this.departmentName\r\n        });\r\n        this.departmentCreate = false;\r\n      },\r\n      addCancel() {\r\n        this.departmentCreate = false;\r\n      },\r\n      _hasEmployees(id) {\r\n        console.log(this.getEmployees(id))\r\n        return this.getEmployees(id).length\r\n      },\r\n      deleteItem(id) {\r\n        this.deleteWindow = true;\r\n        if (this._hasEmployees(id)) {\r\n          this.deleteDenied = true;\r\n        } else {\r\n          this.deleteIndex = id;\r\n          this.deleteDenied = false;\r\n        }\r\n      },\r\n      deleteConfirm() {\r\n        this.deleteWindow = false;\r\n        this.remove(this.deleteIndex)\r\n        this.deleteIndex = null\r\n      },\r\n      deleteCancel() {\r\n        this.deleteWindow = false;\r\n        this.deleteIndex = null\r\n      },\r\n      ...mapActions({\r\n        loadItems: 'departments/load',\r\n        addItem: 'departments/add',\r\n        editItem: 'departments/edit',\r\n        remove: 'departments/remove'\r\n      })\r\n    }\r\n  }\r\n\r\n</script>\r\n\r\n<style scoped>\r\n  #departments {\r\n    position: relative;\r\n    width: 90%;\r\n    max-width: 1000px;\r\n    margin: 10px auto;\r\n  }\r\n  \r\n  span {\r\n    cursor: pointer;\r\n  }\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

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
      deleteIndex: null,
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
      }, {
        text: 'Действия',
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
  //    components: {
  //        FilePond
  //    },
  methods: _extends({
    //      handleFilePondInit: function() {
    //        console.log('FilePond has initialized');
    //        this.$refs.pond.getFiles();
    //      },
    getPositions: function getPositions(id) {
      var positions = [];

      this.positions.forEach(function (el) {
        if (+el.department_id === +id) positions.push(el);
      });

      return positions;
    },
    getEmployees: function getEmployees(id) {
      var _this = this;

      var employees = [],
          positions = this.getPositions(id);

      positions.forEach(function (pos) {
        _this.employees.forEach(function (el) {
          if (+el.position_id === +pos.id) employees.push(el);
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
    _hasEmployees: function _hasEmployees(id) {
      console.log(this.getEmployees(id));
      return this.getEmployees(id).length;
    },
    deleteItem: function deleteItem(id) {
      this.deleteWindow = true;
      if (this._hasEmployees(id)) {
        this.deleteDenied = true;
      } else {
        this.deleteIndex = id;
        this.deleteDenied = false;
      }
    },
    deleteConfirm: function deleteConfirm() {
      this.deleteWindow = false;
      this.remove(this.deleteIndex);
      this.deleteIndex = null;
    },
    deleteCancel: function deleteCancel() {
      this.deleteWindow = false;
      this.deleteIndex = null;
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
                                  "\n            "
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
                      _c(
                        "td",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                tag: "span",
                                to: {
                                  name: "employees",
                                  params: {
                                    searchProp: props.item.title
                                  }
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(
                                    _vm.getEmployees(props.item.id).length
                                  ) +
                                  "\n          "
                              )
                            ]
                          )
                        ],
                        1
                      ),
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
            "v-btn",
            {
              staticClass: "mb-2",
              attrs: { slot: "activator", color: "primary", dark: "" },
              on: {
                click: function($event) {
                  _vm.departmentCreate = true
                }
              },
              slot: "activator"
            },
            [_vm._v("Добавить подразделение")]
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
    require("vue-hot-reload-api")      .rerender("data-v-1ee6735d", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWU/OTg2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlPzkxMzYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1maWxlcG9uZC9kaXN0L3Z1ZS1maWxlcG9uZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQtcGx1Z2luLWZpbGUtdmFsaWRhdGUtdHlwZS9kaXN0L2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXR5cGUuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5taW4uY3NzP2ZkMmMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGVwb25kL2Rpc3QvZmlsZXBvbmQubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcvZGlzdC9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5taW4uY3NzPzZlNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3L2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlP2JhMjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0Esa0VBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLDBEQUEyRCx1QkFBdUIsZUFBZSxzQkFBc0Isc0JBQXNCLEdBQUcseUJBQXlCLG9CQUFvQixHQUFHLFlBQVksMEtBQTBLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVywrT0FBK08sbUJBQW1CLHdGQUF3RixXQUFXLHNLQUFzSyxZQUFZLHNGQUFzRixnQkFBZ0IseWtCQUF5a0IsWUFBWSxtRkFBbUYsZ0JBQWdCLHVhQUF1YSxpQkFBaUIsd0pBQXdKLG9CQUFvQiwwV0FBMFcsc0NBQXNDLG9HQUFvRyw0QkFBNEIsc0dBQXNHLHVCQUF1QixzQ0FBc0MsdzRCQUF3NEIscUJBQXFCLGdGQUFnRixZQUFZLGtqQkFBa2pCLHVCQUF1QixhQUFhLDZDQUE2QyxxSUFBcUksdUhBQXVILG9FQUFvRSx3RkFBd0YsbUdBQW1HLDhCQUE4QixtRUFBbUUsd2xCQUF3bEIsMEZBQTBGLGNBQWMsMkVBQTJFLGNBQWMsOEVBQThFLGNBQWMsK0VBQStFLGNBQWMseUVBQXlFLG9CQUFvQixxQkFBcUIsdUJBQXVCLHlKQUF5SixXQUFXLDBCQUEwQixpSkFBaUosVUFBVSx3QkFBd0IsaUNBQWlDLG1CQUFtQiw0Q0FBNEMsc0RBQXNELHlDQUF5QyxhQUFhLDZCQUE2QiwrQkFBK0IsOENBQThDLGdFQUFnRSxhQUFhLEVBQUUsaUNBQWlDLFdBQVcsNkJBQTZCLCtFQUErRSwwQ0FBMEMsNENBQTRDLG9FQUFvRSxlQUFlLEVBQUUsYUFBYSxFQUFFLDZCQUE2QixXQUFXLHlCQUF5QiwwQkFBMEIsdURBQXVELEVBQUUsMENBQTBDLFdBQVcsd0JBQXdCLDBDQUEwQyxXQUFXLDhCQUE4Qix3R0FBd0csMkJBQTJCLHFDQUFxQyx5Q0FBeUMsdUNBQXVDLGFBQWEsT0FBTyxvQ0FBb0Msd0NBQXdDLGFBQWEsV0FBVyw0QkFBNEIsc0NBQXNDLHVGQUF1RiwyQkFBMkIsc0NBQXNDLDhDQUE4QywwQkFBMEIsNktBQTZLLFVBQVUsT0FBTywyREFBMkQsMkJBQTJCLG1CQUFtQiwwQkFBMEIsMEJBQTBCLE9BQU8sa0JBQWtCLHdCQUF3QixPQUFPLHVDQUF1Qzs7QUFFbndSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzt3TUFHQTs7O3VCQUVBOzs7Z0JBRUE7QUFDQTtnQkFDQTt5QkFDQTt5QkFDQTtBQUNBO29CQUNBO3VCQUNBO0FBQ0E7Y0FDQTtnQkFDQTtjQUNBO0FBQ0E7bUJBQ0E7b0JBQ0E7b0JBQ0E7cUJBQ0E7QUFDQTt3QkFDQTtzQkFDQTtBQUNBOztjQUVBO2VBQ0E7a0JBRUE7QUFKQTtjQU1BO2VBRUE7QUFIQTtjQUtBO2VBRUE7QUFIQTtjQUtBO2VBRUE7QUFIQTtjQUtBO2VBSUE7QUFMQTtBQXZDQTs7QUE2Q0E7b0NBQ0E7aUNBQ0EsNENBQ0E7QUFDQTs7V0FFQTtlQUNBO2VBRUE7QUFKQTtBQUtBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs0Q0FDQTtzQkFFQTs7MkNBQ0E7c0RBQ0E7QUFFQTs7YUFDQTtBQUNBOztBQUNBOztzQkFDQTt3Q0FFQTs7dUNBQ0E7OENBQ0E7MERBQ0E7QUFDQTtBQUNBO2FBQ0E7QUFDQTtzQ0FDQTs7c0JBR0E7QUFGQTs4QkFHQTtBQUNBO29DQUNBOzhCQUNBO0FBQ0E7OENBQ0E7b0NBQ0E7bUNBQ0E7QUFDQTt3Q0FDQTswQkFDQTtrQ0FDQTs0QkFDQTthQUNBOzJCQUNBOzRCQUNBO0FBQ0E7QUFDQTs0Q0FDQTswQkFDQTt1QkFDQTt5QkFDQTtBQUNBOzBDQUNBOzBCQUNBO3lCQUNBO0FBQ0E7O2VBRUE7YUFDQTtjQUNBO1lBR0E7QUFOQTtBQXJIQSxHOzs7Ozs7OztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GLGFBQWE7QUFDaEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLElBQUk7O0FBRWpCO0FBQ0Esd0NBQXdDOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7OztBQzFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyxnQkFBZ0I7QUFDL0Q7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDBDQUEwQztBQUMxQywwQ0FBMEM7QUFDMUMsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw2Q0FBNkM7QUFDN0M7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNkNBQTZDO0FBQzdDO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGLEVBQUUsZUFBZSxzQkFBc0I7QUFDdkMsRUFBRSxlQUFlLEtBQUssc0JBQXNCLEVBQUU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsOENBQThDO0FBQ3pFLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLDhCQUE4QixvQkFBb0I7QUFDbEQsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSx1Q0FBdUMsNEJBQTRCO0FBQ25FO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7O0FBRVg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQW1CO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHdCQUF3QiwyQkFBMkI7QUFDL0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywwQ0FBMEM7QUFDMUMsa0NBQWtDO0FBQ2xDLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNLEVBQUUsa0NBQWtDLE9BQU8sNkVBQTZFO0FBQy9JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCLHdCQUF3QjtBQUNoRCxtQkFBbUIsbUJBQW1CO0FBQ3RDLG1CQUFtQixtQkFBbUI7QUFDdEMsZUFBZSxlQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLG9EQUFvRDtBQUNwRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsMkJBQTJCO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BELFNBQVM7O0FBRVQ7QUFDQSw0Q0FBNEMsU0FBUztBQUNyRCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBLHdEQUF3RCxVQUFVLFNBQVM7QUFDM0UsU0FBUzs7QUFFVDtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZUFBZTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxpREFBaUQsU0FBUztBQUMxRCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pELFdBQVc7QUFDWDtBQUNBLG1EQUFtRCxTQUFTO0FBQzVEOztBQUVBO0FBQ0EsOENBQThDLFlBQVk7QUFDMUQsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQsV0FBVztBQUNYLG9EQUFvRCxTQUFTO0FBQzdEO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsZUFBZTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLGNBQWM7QUFDekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBLGlEQUFpRCxTQUFTOztBQUUxRCxrQ0FBa0MsY0FBYztBQUNoRCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxtQkFBbUIsMENBQTBDO0FBQzdELFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLDZDQUE2QyxjQUFjO0FBQzNELE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLHFCQUFxQjs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFCQUFxQjs7QUFFdEQ7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtCQUErQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixzQkFBc0IsaUJBQWlCLEVBQUU7QUFDckU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSw2Q0FBNkM7O0FBRTFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsNkNBQTZDOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtCQUErQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsNkNBQTZDOztBQUUxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLG1EQUFtRDtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLG9DQUFvQztBQUNwQyxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUNsQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asa0NBQWtDO0FBQ2xDLDRDQUE0QztBQUM1QyxrQ0FBa0M7QUFDbEMsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsVUFBVSxtQkFBbUI7QUFDOUU7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxtQkFBbUI7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxxQkFBcUI7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDZDQUE2Qzs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBSTs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixJQUFJO0FBQy9CLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsK0JBQStCLFNBQVM7QUFDeEM7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMEJBQTBCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8yLmQxMjE3Njc1MzMzMjI1NzE5Zjg3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWU2NzM1ZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWU2NzM1ZFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTGlzdC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTFlZTY3MzVkXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZGVwYXJ0bWVudHNcXFxcTGlzdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWVlNjczNWRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xZWU2NzM1ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWU2NzM1ZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIwMzc3MmYxOFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWVlNjczNWRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MaXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWU2NzM1ZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xpc3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTFlZTY3MzVkXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI2RlcGFydG1lbnRzW2RhdGEtdi0xZWU2NzM1ZF0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcbnNwYW5bZGF0YS12LTFlZTY3MzVkXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvY3JtL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9kZXBhcnRtZW50cy9MaXN0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBd1BBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtDQUNBO0FBRUE7RUFDQSxnQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJMaXN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8ZGl2IGlkPVxcXCJkZXBhcnRtZW50c1xcXCI+XFxyXFxuICAgIFxcclxcbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cXFwiZGVsZXRlV2luZG93XFxcIiBtYXgtd2lkdGg9XFxcIjUwMHB4XFxcIj5cXHJcXG4gICAgICA8di1jYXJkPlxcclxcbiAgICAgICAgPHYtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRsaW5lXFxcIj57eyAkdCgnYXR0ZW50aW9uJykgfX08L3NwYW4+XFxyXFxuICAgICAgICA8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgIDx2LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgPHYtZmxleCB4czEyPnt7ZGVsZXRlTXNnfX08L3YtZmxleD5cXHJcXG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XFxyXFxuICAgICAgICA8di1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgICAgIDx2LWJ0biB2LXNob3c9XFxcIiFkZWxldGVEZW5pZWRcXFwiIG91dGxpbmUgY29sb3I9XFxcImluZm9cXFwiIEBjbGljay5uYXRpdmU9XFxcImRlbGV0ZUNvbmZpcm1cXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XFxcImVycm9yXFxcIiBAY2xpY2submF0aXZlPVxcXCJkZWxldGVDYW5jZWxcXFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxcclxcbiAgICAgIDwvdi1jYXJkPlxcclxcbiAgICA8L3YtZGlhbG9nPlxcclxcbiAgICBcXHJcXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XFxcImRlcGFydG1lbnRDcmVhdGVcXFwiIG1heC13aWR0aD1cXFwiNTAwcHhcXFwiPlxcclxcbiAgICAgIDx2LWNhcmQ+XFxyXFxuICAgICAgICA8di1jYXJkLXRpdGxlPlxcclxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGxpbmVcXFwiPtCd0L7QstC+0LUg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40LU8L3NwYW4+XFxyXFxuICAgICAgICA8L3YtY2FyZC10aXRsZT5cXHJcXG4gICAgICAgIDx2LWNhcmQtdGV4dD5cXHJcXG4gICAgICAgICAgPHYtZmxleCB4czEyPlxcclxcbiAgICAgICAgICAgIDx2LXRleHQtZmllbGQgbGFiZWw9XFxcItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtVxcXCIgdi1tb2RlbD1cXFwiZGVwYXJ0bWVudE5hbWVcXFwiPjwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgICAgICA8L3YtZmxleD5cXHJcXG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XFxyXFxuICAgICAgICA8di1jYXJkLWFjdGlvbnM+XFxyXFxuICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVxcXCJpbmZvXFxcIiBAY2xpY2submF0aXZlPVxcXCJhZGRDb25maXJtXFxcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XFxyXFxuICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVxcXCJlcnJvclxcXCIgQGNsaWNrLm5hdGl2ZT1cXFwiYWRkQ2FuY2VsXFxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxcclxcbiAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cXHJcXG4gICAgICA8L3YtY2FyZD5cXHJcXG4gICAgPC92LWRpYWxvZz5cXHJcXG4gICAgXFxyXFxuICAgIDx2LWNhcmQ+XFxyXFxuICAgICAgPHYtZGF0YS10YWJsZVxcclxcbiAgICAgICAgOmhlYWRlcnM9XFxcImhlYWRlcnNcXFwiXFxyXFxuICAgICAgICA6aXRlbXM9XFxcIml0ZW1zXFxcIlxcclxcbiAgICAgICAgaXRlbS1rZXk9XFxcImlkXFxcIlxcclxcbiAgICAgICAgOm5vLXJlc3VsdHMtdGV4dD1cXFwiJHQoJ25vX21hdGNoX2ZvdW5kJylcXFwiXFxyXFxuICAgICAgICA6cm93cy1wZXItcGFnZS10ZXh0PVxcXCIkdCgnc3RyaW5ncycpXFxcIlxcclxcbiAgICAgICAgY2xhc3M9XFxcImVsZXZhdGlvbi0xXFxcIj5cXHJcXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJpdGVtc1xcXCIgc2xvdC1zY29wZT1cXFwicHJvcHNcXFwiPlxcclxcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICA8di1lZGl0LWRpYWxvZ1xcclxcbiAgICAgICAgICAgICAgOnJldHVybi12YWx1ZS5zeW5jPVxcXCJwcm9wcy5pdGVtLnRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgbGF6eVxcclxcbiAgICAgICAgICAgID4ge3sgcHJvcHMuaXRlbS50aXRsZSB9fVxcclxcbiAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxcclxcbiAgICAgICAgICAgICAgICBzbG90PVxcXCJpbnB1dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgbGFiZWw9XFxcIkVkaXRcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInByb3BzLml0ZW0udGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHNpbmdsZS1saW5lXFxyXFxuICAgICAgICAgICAgICAgIGNvdW50ZXJcXHJcXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cXFwiZWRpdEl0ZW0ocHJvcHMuaXRlbSlcXFwiXFxyXFxuICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XFxyXFxuICAgICAgICAgICAgPC92LWVkaXQtZGlhbG9nPlxcclxcbiAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICA8dGQ+e3sgZ2V0UG9zaXRpb25zKHByb3BzLml0ZW0uaWQpLmxlbmd0aCB9fTwvdGQ+XFxyXFxuICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgdGFnPVxcXCJzcGFuXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICA6dG89XFxcIntuYW1lOiAnZW1wbG95ZWVzJywgcGFyYW1zOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUHJvcDogcHJvcHMuaXRlbS50aXRsZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxcXCI+XFxyXFxuICAgICAgICAgICAgICB7eyBnZXRFbXBsb3llZXMocHJvcHMuaXRlbS5pZCkubGVuZ3RoIH19XFxyXFxuICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgIDx2LWJ0biBpY29uIGNsYXNzPVxcXCJteC0wXFxcIiBAY2xpY2s9XFxcImVkaXRJdGVtKHByb3BzLml0ZW0uaWQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XFxcInRlYWxcXFwiPmVkaXQ8L3YtaWNvbj5cXHJcXG4gICAgICAgICAgICA8L3YtYnRuPlxcclxcbiAgICAgICAgICAgIDx2LWJ0biBpY29uIGNsYXNzPVxcXCJteC0wXFxcIiBAY2xpY2s9XFxcImRlbGV0ZUl0ZW0ocHJvcHMuaXRlbS5pZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cXFwicGlua1xcXCI+ZGVsZXRlPC92LWljb24+XFxyXFxuICAgICAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwibm8tZGF0YVxcXCI+XFxyXFxuICAgICAgICAgIDx2LWFsZXJ0IDp2YWx1ZT1cXFwidHJ1ZVxcXCIgY29sb3I9XFxcInJlZFxcXCIgaWNvbj1cXFwid2FybmluZ1xcXCI+XFxyXFxuICAgICAgICAgICAg0J3QtdGCINC00LDQvdC90YvRhSA6KFxcclxcbiAgICAgICAgICA8L3YtYWxlcnQ+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgIDwvdi1kYXRhLXRhYmxlPlxcclxcbiAgICAgIDx2LWJ0biBjb2xvcj1cXFwicHJpbWFyeVxcXCIgZGFyayBzbG90PVxcXCJhY3RpdmF0b3JcXFwiIGNsYXNzPVxcXCJtYi0yXFxcIiBAY2xpY2s9XFxcImRlcGFydG1lbnRDcmVhdGUgPSB0cnVlXFxcIj7QlNC+0LHQsNCy0LjRgtGMINC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1PC92LWJ0bj5cXHJcXG4gICAgICBcXHJcXG4gICAgICA8di1zbmFja2JhciA6dGltZW91dD1cXFwic25hY2tiYXJUaW1lb3V0XFxcIiB0b3Agdi1tb2RlbD1cXFwic25hY2tiYXJTaG93XFxcIiBtdWx0aS1saW5lIGNvbG9yPVxcXCJpbmZvXFxcIj5cXHJcXG4gICAgICAgIHt7ICR0KCdkZWxldGVfZG9uZScpIH19XFxyXFxuICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cXFwicGlua1xcXCIgQGNsaWNrLm5hdGl2ZT1cXFwic25hY2tiYXJTaG93ID0gZmFsc2VcXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXHJcXG4gICAgICA8L3Ytc25hY2tiYXI+XFxyXFxuICAgIFxcclxcbiAgICA8L3YtY2FyZD5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPCEtLVxcclxcbiAgPGZpbGUtcG9uZFxcclxcbiAgICAgICAgICBuYW1lPVxcXCJ0ZXN0XFxcIlxcclxcbiAgICAgICAgICByZWY9XFxcInBvbmRcXFwiXFxyXFxuICAgICAgICAgIGNsYXNzLW5hbWU9XFxcIm15LXBvbmRcXFwiXFxyXFxuICAgICAgICAgIGxhYmVsLWlkbGU9XFxcItCf0LXRgNC10LrQuNC90YzRgtC1INGE0LDQudC70Ysg0YHRjtC00LBcXFwiXFxyXFxuICAgICAgICAgIGxhYmVsRmlsZVR5cGVOb3RBbGxvd2VkPVxcXCLQlNCw0L3QvdGL0Lkg0YTQvtGA0LzQsNGCINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRj1xcXCJcXHJcXG4gICAgICAgICAgYWxsb3ctbXVsdGlwbGU9XFxcInRydWVcXFwiXFxyXFxuICAgICAgICAgIGFjY2VwdGVkLWZpbGUtdHlwZXM9XFxcImltYWdlL2pwZWcsIGltYWdlL3BuZywgYXBwbGljYXRpb24vbXN3b3JkXFxcIlxcclxcbiAgICAgICAgICB2LWJpbmQ6ZmlsZXM9XFxcIm15RmlsZXNcXFwiXFxyXFxuICAgICAgICAgIHYtb246aW5pdD1cXFwiaGFuZGxlRmlsZVBvbmRJbml0XFxcIi8+XFxyXFxuICAtLT5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICBpbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnO1xcclxcbiAgaW1wb3J0IHZ1ZUZpbGVQb25kIGZyb20gJ3Z1ZS1maWxlcG9uZCc7XFxyXFxuICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5GaWxlVmFsaWRhdGVUeXBlIGZyb20gJ2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXR5cGUvZGlzdC9maWxlcG9uZC1wbHVnaW4tZmlsZS12YWxpZGF0ZS10eXBlLmVzbS5qcyc7XFxyXFxuICBpbXBvcnQgRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcgZnJvbSAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcvZGlzdC9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy5lc20uanMnO1xcclxcbiAgLy8gSW1wb3J0IHN0eWxlc1xcclxcbiAgaW1wb3J0ICdmaWxlcG9uZC9kaXN0L2ZpbGVwb25kLm1pbi5jc3MnO1xcclxcbiAgaW1wb3J0ICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3Lm1pbi5jc3MnO1xcclxcblxcclxcbiAgY29uc3QgRmlsZVBvbmQgPSB2dWVGaWxlUG9uZChGaWxlUG9uZFBsdWdpbkZpbGVWYWxpZGF0ZVR5cGUsIEZpbGVQb25kUGx1Z2luSW1hZ2VQcmV2aWV3KTtcXHJcXG5cXHJcXG5cXHJcXG4gIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgbWlkZGxld2FyZTogWydhdXRoJywgJ29yZ2FuaXNhdGlvbiddLFxcclxcbiAgICBkYXRhOiAoKSA9PiAoe1xcclxcbiAgICAgIG15RmlsZXM6IFsnaW5kZXguaHRtbCddLFxcclxcbiAgICAgIC8v0J/QvtC00YDQvtCx0L3QvtGB0YLQuFxcclxcbiAgICAgIHNob3dJbmZvOiBmYWxzZSxcXHJcXG4gICAgICBzZWxlY3RlZEVtcGxveWVlczogW10sXFxyXFxuICAgICAgc2VsZWN0ZWRQb3NpdGlvbnM6IFtdLFxcclxcbiAgICAgIC8vINCS0YHQv9C70YvQstCw0YjQutC4XFxyXFxuICAgICAgc25hY2tiYXJTaG93OiBmYWxzZSxcXHJcXG4gICAgICBzbmFja2JhclRpbWVvdXQ6IDEwMDAwLFxcclxcbiAgICAgIC8vINCf0L7QuNGB0LogLyDQktGL0LHQvtGA0LrQsFxcclxcbiAgICAgIHNlYXJjaDogJycsXFxyXFxuICAgICAgc2VsZWN0ZWQ6IFtdLFxcclxcbiAgICAgIGRpYWxvZzogZmFsc2UsXFxyXFxuICAgICAgLy8g0KPQtNCw0LvQtdC90LjQtVxcclxcbiAgICAgIGRlbGV0ZUluZGV4OiBudWxsLFxcclxcbiAgICAgIGRlbGV0ZVdpbmRvdzogZmFsc2UsXFxyXFxuICAgICAgZGVsZXRlRGVuaWVkOiBmYWxzZSxcXHJcXG4gICAgICBkZWxFcnJNZXNzYWdlOiBbXSxcXHJcXG4gICAgICAvL9Ch0L7Qt9C00LDQvdC40LVcXHJcXG4gICAgICBkZXBhcnRtZW50Q3JlYXRlOiBmYWxzZSxcXHJcXG4gICAgICBkZXBhcnRtZW50TmFtZTogJycsXFxyXFxuICAgICAgLy8g0JfQsNCz0L7Qu9C+0LLQutC4INGC0LDQsdC70LjRhtGLXFxyXFxuICAgICAgaGVhZGVyczogW3tcXHJcXG4gICAgICAgIHRleHQ6ICfQndC+0LzQtdGAJyxcXHJcXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXFxyXFxuICAgICAgICBzb3J0YWJsZTogZmFsc2VcXHJcXG4gICAgICB9LFxcclxcbiAgICAgICAge1xcclxcbiAgICAgICAgICB0ZXh0OiAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1JyxcXHJcXG4gICAgICAgICAgdmFsdWU6ICduYW1lJ1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHtcXHJcXG4gICAgICAgICAgdGV4dDogJ9CU0L7Qu9C20L3QvtGB0YLQtdC5JyxcXHJcXG4gICAgICAgICAgdmFsdWU6ICdwb3NpdGlvbnMnXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAge1xcclxcbiAgICAgICAgICB0ZXh0OiAn0KHQvtGC0YDRg9C00L3QuNC60L7QsicsXFxyXFxuICAgICAgICAgIHZhbHVlOiAnZW1wbG95ZWVzJ1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHtcXHJcXG4gICAgICAgICAgdGV4dDogJ9CU0LXQudGB0YLQstC40Y8nLFxcclxcbiAgICAgICAgICB2YWx1ZTogJ2FjdGlvbidcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICBdXFxyXFxuICAgIH0pLFxcclxcbiAgICBjb21wdXRlZDoge1xcclxcbiAgICAgIGRlbGV0ZU1zZygpIHtcXHJcXG4gICAgICAgIHJldHVybiAodGhpcy5kZWxldGVEZW5pZWQpID8gJ9CX0LAg0LTQsNC90L3Ri9C8INC+0YLQu9C10LvQvtC8INC30LDQutGA0LXQv9C70LXQvdGLINGB0L7RgtGA0YPQtNC90LjQutC4JyA6XFxyXFxuICAgICAgICAgICfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRgNCw0YHRhNC+0YDQvNC40YDQvtCy0LDRgtGMINC00LDQvdC90YvQuSDQvtGC0LTQtdC7Pyc7XFxyXFxuICAgICAgfSxcXHJcXG4gICAgICAuLi5tYXBHZXR0ZXJzKHtcXHJcXG4gICAgICAgIGl0ZW1zOiAnZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMnLFxcclxcbiAgICAgICAgcG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXFxyXFxuICAgICAgICBlbXBsb3llZXM6ICdlbXBsb3llZXMvZW1wbG95ZWVzJ1xcclxcbiAgICAgIH0pXFxyXFxuICAgIH0sXFxyXFxuLy8gICAgY29tcG9uZW50czoge1xcclxcbi8vICAgICAgICBGaWxlUG9uZFxcclxcbi8vICAgIH0sXFxyXFxuICAgIG1ldGhvZHM6IHtcXHJcXG4vLyAgICAgIGhhbmRsZUZpbGVQb25kSW5pdDogZnVuY3Rpb24oKSB7XFxyXFxuLy8gICAgICAgIGNvbnNvbGUubG9nKCdGaWxlUG9uZCBoYXMgaW5pdGlhbGl6ZWQnKTtcXHJcXG4vLyAgICAgICAgdGhpcy4kcmVmcy5wb25kLmdldEZpbGVzKCk7XFxyXFxuLy8gICAgICB9LFxcclxcbiAgICAgIGdldFBvc2l0aW9ucyhpZCkge1xcclxcbiAgICAgICAgbGV0IHBvc2l0aW9ucyA9IFtdO1xcclxcblxcclxcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMuZm9yRWFjaChlbCA9PiB7XFxyXFxuICAgICAgICAgIGlmICgrZWwuZGVwYXJ0bWVudF9pZCA9PT0gK2lkKSBwb3NpdGlvbnMucHVzaChlbCk7XFxyXFxuICAgICAgICB9KTtcXHJcXG5cXHJcXG4gICAgICAgIHJldHVybiBwb3NpdGlvbnM7XFxyXFxuICAgICAgfSxcXHJcXG4gICAgICBnZXRFbXBsb3llZXMoaWQpIHtcXHJcXG4gICAgICAgIGxldCBlbXBsb3llZXMgPSBbXSxcXHJcXG4gICAgICAgICAgcG9zaXRpb25zID0gdGhpcy5nZXRQb3NpdGlvbnMoaWQpO1xcclxcblxcclxcbiAgICAgICAgcG9zaXRpb25zLmZvckVhY2gocG9zID0+IHtcXHJcXG4gICAgICAgICAgdGhpcy5lbXBsb3llZXMuZm9yRWFjaChlbCA9PiB7XFxyXFxuICAgICAgICAgICAgaWYgKCtlbC5wb3NpdGlvbl9pZCA9PT0gK3Bvcy5pZCkgZW1wbG95ZWVzLnB1c2goZWwpO1xcclxcbiAgICAgICAgICB9KTtcXHJcXG4gICAgICAgIH0pO1xcclxcbiAgICAgICAgcmV0dXJuIGVtcGxveWVlcztcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGFkZENvbmZpcm0oKSB7XFxyXFxuICAgICAgICB0aGlzLmFkZEl0ZW0oe1xcclxcbiAgICAgICAgICAndGl0bGUnOiB0aGlzLmRlcGFydG1lbnROYW1lXFxyXFxuICAgICAgICB9KTtcXHJcXG4gICAgICAgIHRoaXMuZGVwYXJ0bWVudENyZWF0ZSA9IGZhbHNlO1xcclxcbiAgICAgIH0sXFxyXFxuICAgICAgYWRkQ2FuY2VsKCkge1xcclxcbiAgICAgICAgdGhpcy5kZXBhcnRtZW50Q3JlYXRlID0gZmFsc2U7XFxyXFxuICAgICAgfSxcXHJcXG4gICAgICBfaGFzRW1wbG95ZWVzKGlkKSB7XFxyXFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldEVtcGxveWVlcyhpZCkpXFxyXFxuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbXBsb3llZXMoaWQpLmxlbmd0aFxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVsZXRlSXRlbShpZCkge1xcclxcbiAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSB0cnVlO1xcclxcbiAgICAgICAgaWYgKHRoaXMuX2hhc0VtcGxveWVlcyhpZCkpIHtcXHJcXG4gICAgICAgICAgdGhpcy5kZWxldGVEZW5pZWQgPSB0cnVlO1xcclxcbiAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgdGhpcy5kZWxldGVJbmRleCA9IGlkO1xcclxcbiAgICAgICAgICB0aGlzLmRlbGV0ZURlbmllZCA9IGZhbHNlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgZGVsZXRlQ29uZmlybSgpIHtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XFxyXFxuICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLmRlbGV0ZUluZGV4KVxcclxcbiAgICAgICAgdGhpcy5kZWxldGVJbmRleCA9IG51bGxcXHJcXG4gICAgICB9LFxcclxcbiAgICAgIGRlbGV0ZUNhbmNlbCgpIHtcXHJcXG4gICAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XFxyXFxuICAgICAgICB0aGlzLmRlbGV0ZUluZGV4ID0gbnVsbFxcclxcbiAgICAgIH0sXFxyXFxuICAgICAgLi4ubWFwQWN0aW9ucyh7XFxyXFxuICAgICAgICBsb2FkSXRlbXM6ICdkZXBhcnRtZW50cy9sb2FkJyxcXHJcXG4gICAgICAgIGFkZEl0ZW06ICdkZXBhcnRtZW50cy9hZGQnLFxcclxcbiAgICAgICAgZWRpdEl0ZW06ICdkZXBhcnRtZW50cy9lZGl0JyxcXHJcXG4gICAgICAgIHJlbW92ZTogJ2RlcGFydG1lbnRzL3JlbW92ZSdcXHJcXG4gICAgICB9KVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gICNkZXBhcnRtZW50cyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBzcGFuIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTFlZTY3MzVkXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZGVwYXJ0bWVudHMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cImRlcGFydG1lbnRzXCI+XHJcbiAgICBcclxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGVsZXRlV2luZG93XCIgbWF4LXdpZHRoPVwiNTAwcHhcIj5cclxuICAgICAgPHYtY2FyZD5cclxuICAgICAgICA8di1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkbGluZVwiPnt7ICR0KCdhdHRlbnRpb24nKSB9fTwvc3Bhbj5cclxuICAgICAgICA8L3YtY2FyZC10aXRsZT5cclxuICAgICAgICA8di1jYXJkLXRleHQ+XHJcbiAgICAgICAgICA8di1mbGV4IHhzMTI+e3tkZWxldGVNc2d9fTwvdi1mbGV4PlxyXG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XHJcbiAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgPHYtYnRuIHYtc2hvdz1cIiFkZWxldGVEZW5pZWRcIiBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIEBjbGljay5uYXRpdmU9XCJkZWxldGVDb25maXJtXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG4gICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XCJlcnJvclwiIEBjbGljay5uYXRpdmU9XCJkZWxldGVDYW5jZWxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxyXG4gICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwvdi1jYXJkPlxyXG4gICAgPC92LWRpYWxvZz5cclxuICAgIFxyXG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkZXBhcnRtZW50Q3JlYXRlXCIgbWF4LXdpZHRoPVwiNTAwcHhcIj5cclxuICAgICAgPHYtY2FyZD5cclxuICAgICAgICA8di1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkbGluZVwiPtCd0L7QstC+0LUg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40LU8L3NwYW4+XHJcbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPHYtY2FyZC10ZXh0PlxyXG4gICAgICAgICAgPHYtZmxleCB4czEyPlxyXG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkIGxhYmVsPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1XCIgdi1tb2RlbD1cImRlcGFydG1lbnROYW1lXCI+PC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgICA8L3YtZmxleD5cclxuICAgICAgICA8L3YtY2FyZC10ZXh0PlxyXG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgIDx2LWJ0biBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiIEBjbGljay5uYXRpdmU9XCJhZGRDb25maXJtXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxyXG4gICAgICAgICAgPHYtYnRuIG91dGxpbmUgY29sb3I9XCJlcnJvclwiIEBjbGljay5uYXRpdmU9XCJhZGRDYW5jZWxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxyXG4gICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwvdi1jYXJkPlxyXG4gICAgPC92LWRpYWxvZz5cclxuICAgIFxyXG4gICAgPHYtY2FyZD5cclxuICAgICAgPHYtZGF0YS10YWJsZVxyXG4gICAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXHJcbiAgICAgICAgOml0ZW1zPVwiaXRlbXNcIlxyXG4gICAgICAgIGl0ZW0ta2V5PVwiaWRcIlxyXG4gICAgICAgIDpuby1yZXN1bHRzLXRleHQ9XCIkdCgnbm9fbWF0Y2hfZm91bmQnKVwiXHJcbiAgICAgICAgOnJvd3MtcGVyLXBhZ2UtdGV4dD1cIiR0KCdzdHJpbmdzJylcIlxyXG4gICAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTFcIj5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1zXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XHJcbiAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIDx2LWVkaXQtZGlhbG9nXHJcbiAgICAgICAgICAgICAgOnJldHVybi12YWx1ZS5zeW5jPVwicHJvcHMuaXRlbS50aXRsZVwiXHJcbiAgICAgICAgICAgICAgbGF6eVxyXG4gICAgICAgICAgICA+IHt7IHByb3BzLml0ZW0udGl0bGUgfX1cclxuICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgICAgICAgICBzbG90PVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFZGl0XCJcclxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9wcy5pdGVtLnRpdGxlXCJcclxuICAgICAgICAgICAgICAgIHNpbmdsZS1saW5lXHJcbiAgICAgICAgICAgICAgICBjb3VudGVyXHJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVwiZWRpdEl0ZW0ocHJvcHMuaXRlbSlcIlxyXG4gICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cclxuICAgICAgICAgICAgPC92LWVkaXQtZGlhbG9nPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZD57eyBnZXRQb3NpdGlvbnMocHJvcHMuaXRlbS5pZCkubGVuZ3RoIH19PC90ZD5cclxuICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgPHJvdXRlci1saW5rIHRhZz1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgOnRvPVwie25hbWU6ICdlbXBsb3llZXMnLCBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUHJvcDogcHJvcHMuaXRlbS50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cIj5cclxuICAgICAgICAgICAgICB7eyBnZXRFbXBsb3llZXMocHJvcHMuaXRlbS5pZCkubGVuZ3RoIH19XHJcbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cIm14LTBcIiBAY2xpY2s9XCJlZGl0SXRlbShwcm9wcy5pdGVtLmlkKVwiPlxyXG4gICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJ0ZWFsXCI+ZWRpdDwvdi1pY29uPlxyXG4gICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICA8di1idG4gaWNvbiBjbGFzcz1cIm14LTBcIiBAY2xpY2s9XCJkZWxldGVJdGVtKHByb3BzLml0ZW0uaWQpXCI+XHJcbiAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInBpbmtcIj5kZWxldGU8L3YtaWNvbj5cclxuICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5vLWRhdGFcIj5cclxuICAgICAgICAgIDx2LWFsZXJ0IDp2YWx1ZT1cInRydWVcIiBjb2xvcj1cInJlZFwiIGljb249XCJ3YXJuaW5nXCI+XHJcbiAgICAgICAgICAgINCd0LXRgiDQtNCw0L3QvdGL0YUgOihcclxuICAgICAgICAgIDwvdi1hbGVydD5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3YtZGF0YS10YWJsZT5cclxuICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIGRhcmsgc2xvdD1cImFjdGl2YXRvclwiIGNsYXNzPVwibWItMlwiIEBjbGljaz1cImRlcGFydG1lbnRDcmVhdGUgPSB0cnVlXCI+0JTQvtCx0LDQstC40YLRjCDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtTwvdi1idG4+XHJcbiAgICAgIFxyXG4gICAgICA8di1zbmFja2JhciA6dGltZW91dD1cInNuYWNrYmFyVGltZW91dFwiIHRvcCB2LW1vZGVsPVwic25hY2tiYXJTaG93XCIgbXVsdGktbGluZSBjb2xvcj1cImluZm9cIj5cclxuICAgICAgICB7eyAkdCgnZGVsZXRlX2RvbmUnKSB9fVxyXG4gICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicGlua1wiIEBjbGljay5uYXRpdmU9XCJzbmFja2JhclNob3cgPSBmYWxzZVwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cclxuICAgICAgPC92LXNuYWNrYmFyPlxyXG4gICAgXHJcbiAgICA8L3YtY2FyZD5cclxuICA8L2Rpdj5cclxuICA8IS0tXHJcbiAgPGZpbGUtcG9uZFxyXG4gICAgICAgICAgbmFtZT1cInRlc3RcIlxyXG4gICAgICAgICAgcmVmPVwicG9uZFwiXHJcbiAgICAgICAgICBjbGFzcy1uYW1lPVwibXktcG9uZFwiXHJcbiAgICAgICAgICBsYWJlbC1pZGxlPVwi0J/QtdGA0LXQutC40L3RjNGC0LUg0YTQsNC50LvRiyDRgdGO0LTQsFwiXHJcbiAgICAgICAgICBsYWJlbEZpbGVUeXBlTm90QWxsb3dlZD1cItCU0LDQvdC90YvQuSDRhNC+0YDQvNCw0YIg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YLRgdGPXCJcclxuICAgICAgICAgIGFsbG93LW11bHRpcGxlPVwidHJ1ZVwiXHJcbiAgICAgICAgICBhY2NlcHRlZC1maWxlLXR5cGVzPVwiaW1hZ2UvanBlZywgaW1hZ2UvcG5nLCBhcHBsaWNhdGlvbi9tc3dvcmRcIlxyXG4gICAgICAgICAgdi1iaW5kOmZpbGVzPVwibXlGaWxlc1wiXHJcbiAgICAgICAgICB2LW9uOmluaXQ9XCJoYW5kbGVGaWxlUG9uZEluaXRcIi8+XHJcbiAgLS0+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XHJcbiAgaW1wb3J0IHZ1ZUZpbGVQb25kIGZyb20gJ3Z1ZS1maWxlcG9uZCc7XHJcbiAgaW1wb3J0IEZpbGVQb25kUGx1Z2luRmlsZVZhbGlkYXRlVHlwZSBmcm9tICdmaWxlcG9uZC1wbHVnaW4tZmlsZS12YWxpZGF0ZS10eXBlL2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWZpbGUtdmFsaWRhdGUtdHlwZS5lc20uanMnO1xyXG4gIGltcG9ydCBGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlldyBmcm9tICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3LmVzbS5qcyc7XHJcbiAgLy8gSW1wb3J0IHN0eWxlc1xyXG4gIGltcG9ydCAnZmlsZXBvbmQvZGlzdC9maWxlcG9uZC5taW4uY3NzJztcclxuICBpbXBvcnQgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3L2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcubWluLmNzcyc7XHJcblxyXG4gIGNvbnN0IEZpbGVQb25kID0gdnVlRmlsZVBvbmQoRmlsZVBvbmRQbHVnaW5GaWxlVmFsaWRhdGVUeXBlLCBGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlldyk7XHJcblxyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBtaWRkbGV3YXJlOiBbJ2F1dGgnLCAnb3JnYW5pc2F0aW9uJ10sXHJcbiAgICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgICBteUZpbGVzOiBbJ2luZGV4Lmh0bWwnXSxcclxuICAgICAgLy/Qn9C+0LTRgNC+0LHQvdC+0YHRgtC4XHJcbiAgICAgIHNob3dJbmZvOiBmYWxzZSxcclxuICAgICAgc2VsZWN0ZWRFbXBsb3llZXM6IFtdLFxyXG4gICAgICBzZWxlY3RlZFBvc2l0aW9uczogW10sXHJcbiAgICAgIC8vINCS0YHQv9C70YvQstCw0YjQutC4XHJcbiAgICAgIHNuYWNrYmFyU2hvdzogZmFsc2UsXHJcbiAgICAgIHNuYWNrYmFyVGltZW91dDogMTAwMDAsXHJcbiAgICAgIC8vINCf0L7QuNGB0LogLyDQktGL0LHQvtGA0LrQsFxyXG4gICAgICBzZWFyY2g6ICcnLFxyXG4gICAgICBzZWxlY3RlZDogW10sXHJcbiAgICAgIGRpYWxvZzogZmFsc2UsXHJcbiAgICAgIC8vINCj0LTQsNC70LXQvdC40LVcclxuICAgICAgZGVsZXRlSW5kZXg6IG51bGwsXHJcbiAgICAgIGRlbGV0ZVdpbmRvdzogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZURlbmllZDogZmFsc2UsXHJcbiAgICAgIGRlbEVyck1lc3NhZ2U6IFtdLFxyXG4gICAgICAvL9Ch0L7Qt9C00LDQvdC40LVcclxuICAgICAgZGVwYXJ0bWVudENyZWF0ZTogZmFsc2UsXHJcbiAgICAgIGRlcGFydG1lbnROYW1lOiAnJyxcclxuICAgICAgLy8g0JfQsNCz0L7Qu9C+0LLQutC4INGC0LDQsdC70LjRhtGLXHJcbiAgICAgIGhlYWRlcnM6IFt7XHJcbiAgICAgICAgdGV4dDogJ9Cd0L7QvNC10YAnLFxyXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgc29ydGFibGU6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtScsXHJcbiAgICAgICAgICB2YWx1ZTogJ25hbWUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0JTQvtC70LbQvdC+0YHRgtC10LknLFxyXG4gICAgICAgICAgdmFsdWU6ICdwb3NpdGlvbnMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAn0KHQvtGC0YDRg9C00L3QuNC60L7QsicsXHJcbiAgICAgICAgICB2YWx1ZTogJ2VtcGxveWVlcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICfQlNC10LnRgdGC0LLQuNGPJyxcclxuICAgICAgICAgIHZhbHVlOiAnYWN0aW9uJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSksXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICBkZWxldGVNc2coKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmRlbGV0ZURlbmllZCkgPyAn0JfQsCDQtNCw0L3QvdGL0Lwg0L7RgtC70LXQu9C+0Lwg0LfQsNC60YDQtdC/0LvQtdC90Ysg0YHQvtGC0YDRg9C00L3QuNC60LgnIDpcclxuICAgICAgICAgICfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRgNCw0YHRhNC+0YDQvNC40YDQvtCy0LDRgtGMINC00LDQvdC90YvQuSDQvtGC0LTQtdC7Pyc7XHJcbiAgICAgIH0sXHJcbiAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICAgIGl0ZW1zOiAnZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMnLFxyXG4gICAgICAgIHBvc2l0aW9uczogJ3Bvc2l0aW9ucy9wb3NpdGlvbnMnLFxyXG4gICAgICAgIGVtcGxveWVlczogJ2VtcGxveWVlcy9lbXBsb3llZXMnXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4vLyAgICBjb21wb25lbnRzOiB7XHJcbi8vICAgICAgICBGaWxlUG9uZFxyXG4vLyAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4vLyAgICAgIGhhbmRsZUZpbGVQb25kSW5pdDogZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZygnRmlsZVBvbmQgaGFzIGluaXRpYWxpemVkJyk7XHJcbi8vICAgICAgICB0aGlzLiRyZWZzLnBvbmQuZ2V0RmlsZXMoKTtcclxuLy8gICAgICB9LFxyXG4gICAgICBnZXRQb3NpdGlvbnMoaWQpIHtcclxuICAgICAgICBsZXQgcG9zaXRpb25zID0gW107XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgaWYgKCtlbC5kZXBhcnRtZW50X2lkID09PSAraWQpIHBvc2l0aW9ucy5wdXNoKGVsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9ucztcclxuICAgICAgfSxcclxuICAgICAgZ2V0RW1wbG95ZWVzKGlkKSB7XHJcbiAgICAgICAgbGV0IGVtcGxveWVlcyA9IFtdLFxyXG4gICAgICAgICAgcG9zaXRpb25zID0gdGhpcy5nZXRQb3NpdGlvbnMoaWQpO1xyXG5cclxuICAgICAgICBwb3NpdGlvbnMuZm9yRWFjaChwb3MgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lbXBsb3llZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGlmICgrZWwucG9zaXRpb25faWQgPT09ICtwb3MuaWQpIGVtcGxveWVlcy5wdXNoKGVsKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBlbXBsb3llZXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZENvbmZpcm0oKSB7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKHtcclxuICAgICAgICAgICd0aXRsZSc6IHRoaXMuZGVwYXJ0bWVudE5hbWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRlcGFydG1lbnRDcmVhdGUgPSBmYWxzZTtcclxuICAgICAgfSxcclxuICAgICAgYWRkQ2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMuZGVwYXJ0bWVudENyZWF0ZSA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICBfaGFzRW1wbG95ZWVzKGlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXRFbXBsb3llZXMoaWQpKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEVtcGxveWVlcyhpZCkubGVuZ3RoXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZUl0ZW0oaWQpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hhc0VtcGxveWVlcyhpZCkpIHtcclxuICAgICAgICAgIHRoaXMuZGVsZXRlRGVuaWVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5kZWxldGVJbmRleCA9IGlkO1xyXG4gICAgICAgICAgdGhpcy5kZWxldGVEZW5pZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZUNvbmZpcm0oKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVXaW5kb3cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLmRlbGV0ZUluZGV4KVxyXG4gICAgICAgIHRoaXMuZGVsZXRlSW5kZXggPSBudWxsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZUNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZVdpbmRvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlSW5kZXggPSBudWxsXHJcbiAgICAgIH0sXHJcbiAgICAgIC4uLm1hcEFjdGlvbnMoe1xyXG4gICAgICAgIGxvYWRJdGVtczogJ2RlcGFydG1lbnRzL2xvYWQnLFxyXG4gICAgICAgIGFkZEl0ZW06ICdkZXBhcnRtZW50cy9hZGQnLFxyXG4gICAgICAgIGVkaXRJdGVtOiAnZGVwYXJ0bWVudHMvZWRpdCcsXHJcbiAgICAgICAgcmVtb3ZlOiAnZGVwYXJ0bWVudHMvcmVtb3ZlJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAjZGVwYXJ0bWVudHMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNwYW4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlIiwiLyohXG4gKiB2dWUtZmlsZXBvbmQgdjIuMC4wXG4gKiBBIGhhbmR5IEZpbGVQb25kIGFkYXB0ZXIgY29tcG9uZW50IGZvciBWdWVcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE4IFBRSU5BXG4gKiBodHRwczovL3BxaW5hLm5sL2ZpbGVwb25kXG4gKiBcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF92dWUgPSByZXF1aXJlKCd2dWUnKTtcblxudmFyIF92dWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdnVlKTtcblxudmFyIF9maWxlcG9uZCA9IHJlcXVpcmUoJ2ZpbGVwb25kJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIE1ldGhvZHMgbm90IG1hZGUgYXZhaWxhYmxlIHRvIHRoZSBjb21wb25lbnRcbnZhciBmaWx0ZXJlZENvbXBvbmVudE1ldGhvZHMgPSBbJ3NldE9wdGlvbnMnLCAnb24nLCAnb2ZmJywgJ29uT25jZScsICdhcHBlbmRUbycsICdpbnNlcnRBZnRlcicsICdpbnNlcnRCZWZvcmUnLCAnaXNBdHRhY2hlZFRvJywgJ3JlcGxhY2VFbGVtZW50JywgJ3Jlc3RvcmVFbGVtZW50JywgJ2Rlc3Ryb3knXTtcblxuLy8gVGVzdCBpZiBpcyBzdXBwb3J0ZWQgb24gdGhpcyBjbGllbnRcbnZhciBpc1N1cHBvcnRlZCA9ICgwLCBfZmlsZXBvbmQuc3VwcG9ydGVkKSgpO1xuXG4vLyBTZXR1cCBpbml0aWFsIHByb3AgdHlwZXMgYW5kIHVwZGF0ZSB3aGVuIHBsdWdpbnMgYXJlIGFkZGVkXG52YXIgZ2V0TmF0aXZlQ29uc3RydWN0b3JGcm9tVHlwZSA9IGZ1bmN0aW9uIGdldE5hdGl2ZUNvbnN0cnVjdG9yRnJvbVR5cGUodHlwZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0cmluZzogU3RyaW5nLFxuICAgICAgICBib29sZWFuOiBCb29sZWFuLFxuICAgICAgICBhcnJheTogQXJyYXksXG4gICAgICAgIGZ1bmN0aW9uOiBGdW5jdGlvbixcbiAgICAgICAgaW50OiBOdW1iZXIsXG4gICAgICAgIHNlcnZlcmFwaTogT2JqZWN0XG4gICAgfVt0eXBlXTtcbn07XG5cbi8vIEFjdGl2YXRlZCBwcm9wc1xudmFyIHByb3BzID0ge307XG5cbi8vIEV2ZW50cyB0aGF0IG5lZWQgdG8gYmUgbWFwcGVkIHRvIGVtaXR0ZXJzXG52YXIgZXZlbnRzID0gW107XG5cbi8vIFByb3BzIHRvIHdhdGNoXG52YXIgd2F0Y2ggPSB7fTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gcmVnaXN0ZXIgcGx1Z2lucyBpbiBGaWxlUG9uZFxuICAgIF9maWxlcG9uZC5yZWdpc3RlclBsdWdpbi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG5cbiAgICAvLyBidWlsZCBldmVudHMgYW5kIHByb3BzIGFycmF5XG4gICAgZXZlbnRzLmxlbmd0aCA9IDA7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChwcm9wKSB7XG4gICAgICAgIC8vIGRvbid0IGFkZCBldmVudHMgdG8gdGhlIHByb3BzIGFycmF5XG4gICAgICAgIGlmICgvXm9uLy50ZXN0KHByb3ApKSB7XG4gICAgICAgICAgICBldmVudHMucHVzaChwcm9wKTtcbiAgICAgICAgICAgIHJldHVybiAnY29udGludWUnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IHByb3BlcnR5IHR5cGUgKCBjYW4gYmUgZWl0aGVyIGEgU3RyaW5nIG9yIHRoZSB0eXBlIGRlZmluZWQgd2l0aGluIEZpbGVQb25kIClcbiAgICAgICAgcHJvcHNbcHJvcF0gPSBbU3RyaW5nLCBnZXROYXRpdmVDb25zdHJ1Y3RvckZyb21UeXBlKF9maWxlcG9uZC5PcHRpb25UeXBlc1twcm9wXSldO1xuXG4gICAgICAgIC8vIHNldHVwIHdhdGNoZXJcbiAgICAgICAgd2F0Y2hbcHJvcF0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3BvbmRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiBfZmlsZXBvbmQuT3B0aW9uVHlwZXMpIHtcbiAgICAgICAgdmFyIF9yZXQgPSBfbG9vcChwcm9wKTtcblxuICAgICAgICBpZiAoX3JldCA9PT0gJ2NvbnRpbnVlJykgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIFxuICAgIHJldHVybiBfdnVlMi5kZWZhdWx0LmNvbXBvbmVudCgnRmlsZVBvbmQnLCB7XG4gICAgICAgIG5hbWU6ICdGaWxlUG9uZCcsXG4gICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgd2F0Y2g6IHdhdGNoLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihoKSB7XG4gICAgICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgICdjbGFzcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZpbGVwb25kLS13cmFwcGVyJzogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFtoKCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6IHRoaXMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdGhpcy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IHRoaXMuYWxsb3dNdWx0aXBsZSxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0OiB0aGlzLmFjY2VwdGVkRmlsZVR5cGVzLFxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlOiB0aGlzLmNhcHR1cmVNZXRob2RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KV0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFdpbGwgc2V0dXAgRmlsZVBvbmQgaW5zdGFuY2Ugd2hlbiBtb3VudGVkXG4gICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICAvLyBleGl0IGhlcmUgaWYgbm90IHN1cHBvcnRlZFxuICAgICAgICAgICAgaWYgKCFpc1N1cHBvcnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZ2V0IHBvbmQgZWxlbWVudFxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgIC8vIE1hcCBGaWxlUG9uZCBjYWxsYmFjayBtZXRob2RzIHRvIFZ1ZSAkZW1pdHRlcnNcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gZXZlbnRzLnJlZHVjZShmdW5jdGlvbiAob2JqLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIG9ialt2YWx1ZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVtaXQuYXBwbHkoX3RoaXMsIFt2YWx1ZS5zdWJzdHIoMildLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgICAvLyBTY29vcCB1cCBhdHRyaWJ1dGVzIHRoYXQgbWlnaHQgbm90IGhhdmUgYmVlbiBjYXVnaHQgYnkgVnVlICggYmVjYXVzZSB0aGUgcHJvcHMgb2JqZWN0IGlzIGV4dGVuZGVkIGR5bmFtaWNhbGx5IClcbiAgICAgICAgICAgIHZhciBhdHRycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuJGF0dHJzKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIG91ciBwb25kXG4gICAgICAgICAgICB0aGlzLl9wb25kID0gKDAsIF9maWxlcG9uZC5jcmVhdGUpKHRoaXMuX2VsZW1lbnQsIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgYXR0cnMsIHRoaXMuJG9wdGlvbnMucHJvcHNEYXRhKSk7XG5cbiAgICAgICAgICAgIC8vIENvcHkgaW5zdGFuY2UgbWV0aG9kIHJlZmVyZW5jZXMgdG8gY29tcG9uZW50IGluc3RhbmNlXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9wb25kKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhZmlsdGVyZWRDb21wb25lbnRNZXRob2RzLmluY2x1ZGVzKGtleSk7XG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBfdGhpc1trZXldID0gX3RoaXMuX3BvbmRba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG5cbiAgICAgICAgLy8gV2lsbCBjbGVhbiB1cCBGaWxlUG9uZCBpbnN0YW5jZSB3aGVuIHVubW91bnRlZFxuICAgICAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICAgICAgLy8gZXhpdCB3aGVuIG5vIHBvbmQgZGVmaW5lZFxuICAgICAgICAgICAgaWYgKCF0aGlzLl9wb25kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9wb25kLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtZmlsZXBvbmQvZGlzdC92dWUtZmlsZXBvbmQuanNcbi8vIG1vZHVsZSBpZCA9IDIxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKlxuICogRmlsZVBvbmQgMS40LjBcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCwgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIFBsZWFzZSB2aXNpdCBodHRwczovL3BxaW5hLm5sL2ZpbGVwb25kIGZvciBkZXRhaWxzLlxuICovXG4oZnVuY3Rpb24oZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgID8gZmFjdG9yeShleHBvcnRzKVxuICAgIDogdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kXG4gICAgICA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSlcbiAgICAgIDogZmFjdG9yeSgoZ2xvYmFsLkZpbGVQb25kID0ge30pKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBpc05vZGUgPSBmdW5jdGlvbiBpc05vZGUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfTtcblxuICB2YXIgX3R5cGVvZiA9XG4gICAgdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJ1xuICAgICAgPyBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICAgICAgfVxuICAgICAgOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICByZXR1cm4gb2JqICYmXG4gICAgICAgICAgICB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJlxuICAgICAgICAgICAgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlXG4gICAgICAgICAgICA/ICdzeW1ib2wnXG4gICAgICAgICAgICA6IHR5cGVvZiBvYmo7XG4gICAgICAgIH07XG5cbiAgdmFyIGFzeW5jR2VuZXJhdG9yID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEF3YWl0VmFsdWUodmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBBc3luY0dlbmVyYXRvcihnZW4pIHtcbiAgICAgIHZhciBmcm9udCwgYmFjaztcblxuICAgICAgZnVuY3Rpb24gc2VuZChrZXksIGFyZykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIGFyZzogYXJnLFxuICAgICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICAgICAgbmV4dDogbnVsbFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoYmFjaykge1xuICAgICAgICAgICAgYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3Q7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyb250ID0gYmFjayA9IHJlcXVlc3Q7XG4gICAgICAgICAgICByZXN1bWUoa2V5LCBhcmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlc3VtZShrZXksIGFyZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcblxuICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0VmFsdWUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZS52YWx1ZSkudGhlbihcbiAgICAgICAgICAgICAgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgICAgICAgICAgcmVzdW1lKCduZXh0JywgYXJnKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgICAgICAgICAgcmVzdW1lKCd0aHJvdycsIGFyZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldHRsZShyZXN1bHQuZG9uZSA/ICdyZXR1cm4nIDogJ25vcm1hbCcsIHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBzZXR0bGUoJ3Rocm93JywgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZXR0bGUodHlwZSwgdmFsdWUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAncmV0dXJuJzpcbiAgICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICd0aHJvdyc6XG4gICAgICAgICAgICBmcm9udC5yZWplY3QodmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmcm9udCA9IGZyb250Lm5leHQ7XG5cbiAgICAgICAgaWYgKGZyb250KSB7XG4gICAgICAgICAgcmVzdW1lKGZyb250LmtleSwgZnJvbnQuYXJnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBiYWNrID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gICAgICBpZiAodHlwZW9mIGdlbi5yZXR1cm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZXR1cm4gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgICAgIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuICAgIH1cblxuICAgIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW52b2tlKCduZXh0JywgYXJnKTtcbiAgICB9O1xuXG4gICAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnRocm93ID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW52b2tlKCd0aHJvdycsIGFyZyk7XG4gICAgfTtcblxuICAgIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5yZXR1cm4gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbnZva2UoJ3JldHVybicsIGFyZyk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICB3cmFwOiBmdW5jdGlvbihmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBBc3luY0dlbmVyYXRvcihmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBhd2FpdDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBd2FpdFZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpO1xuXG4gIHZhciBfZXh0ZW5kcyA9XG4gICAgT2JqZWN0LmFzc2lnbiB8fFxuICAgIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcblxuICB2YXIgdG9Db25zdW1hYmxlQXJyYXkgPSBmdW5jdGlvbihhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKVxuICAgICAgICBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgICByZXR1cm4gYXJyMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVN0b3JlID0gZnVuY3Rpb24gY3JlYXRlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdmFyIHF1ZXJpZXMgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTtcbiAgICB2YXIgYWN0aW9ucyA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuXG4gICAgLy8gaW50ZXJuYWwgc3RhdGVcbiAgICB2YXIgc3RhdGUgPSBfZXh0ZW5kcyh7fSwgaW5pdGlhbFN0YXRlKTtcblxuICAgIC8vIGNvbnRhaW5zIGFsbCBhY3Rpb25zIGZvciBuZXh0IGZyYW1lLCBpcyBjbGVhciB3aGVuIGFjdGlvbnMgYXJlIHJlcXVlc3RlZFxuICAgIHZhciBhY3Rpb25RdWV1ZSA9IFtdO1xuICAgIHZhciBkaXNwYXRjaFF1ZXVlID0gW107XG5cbiAgICAvLyByZXR1cm5zIGEgZHVwbGljYXRlIG9mIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgdmFyIGdldFN0YXRlID0gZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlKTtcbiAgICB9O1xuXG4gICAgLy8gcmV0dXJucyBhIGR1cGxpY2F0ZSBvZiB0aGUgYWN0aW9ucyBhcnJheSBhbmQgY2xlYXJzIHRoZSBhY3Rpb25zIGFycmF5XG4gICAgdmFyIHByb2Nlc3NBY3Rpb25RdWV1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NBY3Rpb25RdWV1ZSgpIHtcbiAgICAgIC8vIGNyZWF0ZSBjb3B5IG9mIGFjdGlvbnMgcXVldWVcbiAgICAgIHZhciBxdWV1ZSA9IFtdLmNvbmNhdChhY3Rpb25RdWV1ZSk7XG5cbiAgICAgIC8vIGNsZWFyIGFjdGlvbnMgcXVldWUgKHdlIGRvbid0IHdhbnQgbm8gZG91YmxlIGFjdGlvbnMpXG4gICAgICBhY3Rpb25RdWV1ZS5sZW5ndGggPSAwO1xuXG4gICAgICByZXR1cm4gcXVldWU7XG4gICAgfTtcblxuICAgIC8vIHByb2Nlc3NlcyBhY3Rpb25zIHRoYXQgbWlnaHQgYmxvY2sgdGhlIG1haW4gVUkgdGhyZWFkXG4gICAgdmFyIHByb2Nlc3NEaXNwYXRjaFF1ZXVlID0gZnVuY3Rpb24gcHJvY2Vzc0Rpc3BhdGNoUXVldWUoKSB7XG4gICAgICAvLyBjcmVhdGUgY29weSBvZiBhY3Rpb25zIHF1ZXVlXG4gICAgICB2YXIgcXVldWUgPSBbXS5jb25jYXQoZGlzcGF0Y2hRdWV1ZSk7XG5cbiAgICAgIC8vIGNsZWFyIGFjdGlvbnMgcXVldWUgKHdlIGRvbid0IHdhbnQgbm8gZG91YmxlIGFjdGlvbnMpXG4gICAgICBkaXNwYXRjaFF1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIG5vdyBkaXNwYXRjaCB0aGVzZSBhY3Rpb25zXG4gICAgICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uKF9yZWYpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YTtcblxuICAgICAgICBkaXNwYXRjaCh0eXBlLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBhZGRzIGEgbmV3IGFjdGlvbiwgY2FsbHMgaXRzIGhhbmRsZXIgYW5kXG4gICAgdmFyIGRpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2godHlwZSwgZGF0YSwgaXNCbG9ja2luZykge1xuICAgICAgLy8gaXMgYmxvY2tpbmcgYWN0aW9uXG4gICAgICBpZiAoaXNCbG9ja2luZykge1xuICAgICAgICBkaXNwYXRjaFF1ZXVlLnB1c2goe1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiB0aGlzIGFjdGlvbiBoYXMgYSBoYW5kbGVyLCBoYW5kbGUgdGhlIGFjdGlvblxuICAgICAgaWYgKGFjdGlvbkhhbmRsZXJzW3R5cGVdKSB7XG4gICAgICAgIGFjdGlvbkhhbmRsZXJzW3R5cGVdKGRhdGEpO1xuICAgICAgfVxuXG4gICAgICAvLyBub3cgYWRkIGFjdGlvblxuICAgICAgYWN0aW9uUXVldWUucHVzaCh7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgcXVlcnkgPSBmdW5jdGlvbiBxdWVyeShzdHIpIHtcbiAgICAgIHZhciBfcXVlcnlIYW5kbGVzO1xuXG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgICAgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSxcbiAgICAgICAgICBfa2V5ID0gMTtcbiAgICAgICAgX2tleSA8IF9sZW47XG4gICAgICAgIF9rZXkrK1xuICAgICAgKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcXVlcnlIYW5kbGVzW3N0cl1cbiAgICAgICAgPyAoX3F1ZXJ5SGFuZGxlcyA9IHF1ZXJ5SGFuZGxlcylbc3RyXS5hcHBseShfcXVlcnlIYW5kbGVzLCBhcmdzKVxuICAgICAgICA6IG51bGw7XG4gICAgfTtcblxuICAgIHZhciBhcGkgPSB7XG4gICAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgICBwcm9jZXNzQWN0aW9uUXVldWU6IHByb2Nlc3NBY3Rpb25RdWV1ZSxcbiAgICAgIHByb2Nlc3NEaXNwYXRjaFF1ZXVlOiBwcm9jZXNzRGlzcGF0Y2hRdWV1ZSxcbiAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgIH07XG5cbiAgICB2YXIgcXVlcnlIYW5kbGVzID0ge307XG4gICAgcXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICBxdWVyeUhhbmRsZXMgPSBfZXh0ZW5kcyh7fSwgcXVlcnkoc3RhdGUpLCBxdWVyeUhhbmRsZXMpO1xuICAgIH0pO1xuXG4gICAgdmFyIGFjdGlvbkhhbmRsZXJzID0ge307XG4gICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgYWN0aW9uSGFuZGxlcnMgPSBfZXh0ZW5kcyhcbiAgICAgICAge30sXG4gICAgICAgIGFjdGlvbihkaXNwYXRjaCwgcXVlcnksIHN0YXRlKSxcbiAgICAgICAgYWN0aW9uSGFuZGxlcnNcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXBpO1xuICB9O1xuXG4gIHZhciBkZWZpbmVQcm9wZXJ0eSQxID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkkJDEob2JqLCBwcm9wZXJ0eSwgZGVmaW5pdGlvbikge1xuICAgIGlmICh0eXBlb2YgZGVmaW5pdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2JqW3Byb3BlcnR5XSA9IGRlZmluaXRpb247XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3BlcnR5LCBfZXh0ZW5kcyh7fSwgZGVmaW5pdGlvbikpO1xuICB9O1xuXG4gIHZhciBmb3JpbiA9IGZ1bmN0aW9uIGZvcmluKG9iaiwgY2IpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjYihrZXksIG9ialtrZXldKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNyZWF0ZU9iamVjdCA9IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdChkZWZpbml0aW9uKSB7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvcmluKGRlZmluaXRpb24sIGZ1bmN0aW9uKHByb3BlcnR5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSQxKG9iaiwgcHJvcGVydHksIGRlZmluaXRpb25bcHJvcGVydHldKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIHZhciBhdHRyID0gZnVuY3Rpb24gYXR0cihub2RlLCBuYW1lKSB7XG4gICAgdmFyIHZhbHVlID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5vZGUuZ2V0QXR0cmlidXRlKG5hbWUpIHx8IG5vZGUuaGFzQXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH07XG5cbiAgdmFyIG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgdmFyIHN2Z0VsZW1lbnRzID0gWydzdmcnLCAncGF0aCddOyAvLyBvbmx5IHN2ZyBlbGVtZW50cyB1c2VkXG5cbiAgdmFyIGlzU1ZHRWxlbWVudCA9IGZ1bmN0aW9uIGlzU1ZHRWxlbWVudCh0YWcpIHtcbiAgICByZXR1cm4gc3ZnRWxlbWVudHMuaW5jbHVkZXModGFnKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWUpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gICAgaWYgKFxuICAgICAgKHR5cGVvZiBjbGFzc05hbWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGNsYXNzTmFtZSkpID09PVxuICAgICAgJ29iamVjdCdcbiAgICApIHtcbiAgICAgIGF0dHJpYnV0ZXMgPSBjbGFzc05hbWU7XG4gICAgICBjbGFzc05hbWUgPSBudWxsO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IGlzU1ZHRWxlbWVudCh0YWcpXG4gICAgICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgdGFnKVxuICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgaWYgKGlzU1ZHRWxlbWVudCh0YWcpKSB7XG4gICAgICAgIGF0dHIoZWxlbWVudCwgJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3JpbihhdHRyaWJ1dGVzLCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgYXR0cihlbGVtZW50LCBuYW1lLCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgdmFyIGFwcGVuZENoaWxkID0gZnVuY3Rpb24gYXBwZW5kQ2hpbGQocGFyZW50KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNoaWxkLCBpbmRleCkge1xuICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ3VuZGVmaW5lZCcgJiYgcGFyZW50LmNoaWxkcmVuW2luZGV4XSkge1xuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCBwYXJlbnQuY2hpbGRyZW5baW5kZXhdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgYXBwZW5kQ2hpbGRWaWV3ID0gZnVuY3Rpb24gYXBwZW5kQ2hpbGRWaWV3KHBhcmVudCwgY2hpbGRWaWV3cykge1xuICAgIHJldHVybiBmdW5jdGlvbih2aWV3LCBpbmRleCkge1xuICAgICAgLy8gdG9kbzogZXhwYW5kIHdpdGggbG9jYXRpb24gYW5kIHRhcmdldCBvcHRpb24gKGNoaWxkLCAnYmVmb3JlJywgdGFyZ2V0KVxuXG4gICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjaGlsZFZpZXdzLnNwbGljZShpbmRleCwgMCwgdmlldyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZFZpZXdzLnB1c2godmlldyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2aWV3O1xuICAgIH07XG4gIH07XG5cbiAgdmFyIHJlbW92ZUNoaWxkVmlldyA9IGZ1bmN0aW9uIHJlbW92ZUNoaWxkVmlldyhwYXJlbnQsIGNoaWxkVmlld3MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odmlldykge1xuICAgICAgLy8gcmVtb3ZlIGZyb20gY2hpbGQgdmlld3NcbiAgICAgIGNoaWxkVmlld3Muc3BsaWNlKGNoaWxkVmlld3MuaW5kZXhPZih2aWV3KSwgMSk7XG5cbiAgICAgIC8vIHJlbW92ZSB0aGUgZWxlbWVudFxuICAgICAgaWYgKHZpZXcuZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh2aWV3LmVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmlldztcbiAgICB9O1xuICB9O1xuXG4gIHZhciBnZXRWaWV3UmVjdCA9IGZ1bmN0aW9uIGdldFZpZXdSZWN0KFxuICAgIGVsZW1lbnRSZWN0LFxuICAgIGNoaWxkVmlld3MsXG4gICAgb2Zmc2V0LFxuICAgIHNjYWxlXG4gICkge1xuICAgIHZhciBsZWZ0ID0gb2Zmc2V0WzBdIHx8IGVsZW1lbnRSZWN0LmxlZnQ7XG4gICAgdmFyIHRvcCA9IG9mZnNldFsxXSB8fCBlbGVtZW50UmVjdC50b3A7XG4gICAgdmFyIHJpZ2h0ID0gbGVmdCArIGVsZW1lbnRSZWN0LndpZHRoO1xuICAgIHZhciBib3R0b20gPSB0b3AgKyBlbGVtZW50UmVjdC5oZWlnaHQgKiAoc2NhbGVbMV0gfHwgMSk7XG5cbiAgICB2YXIgcmVjdCA9IHtcbiAgICAgIC8vIHRoZSByZWN0YW5nbGUgb2YgdGhlIGVsZW1lbnQgaXRzZWxmXG4gICAgICBlbGVtZW50OiBfZXh0ZW5kcyh7fSwgZWxlbWVudFJlY3QpLFxuXG4gICAgICAvLyB0aGUgcmVjdGFuZ2xlIG9mIHRoZSBlbGVtZW50IGV4cGFuZGVkIHRvIGNvbnRhaW4gaXRzIGNoaWxkcmVuLCBkb2VzIG5vdCBpbmNsdWRlIGFueSBtYXJnaW5zXG4gICAgICBpbm5lcjoge1xuICAgICAgICBsZWZ0OiBlbGVtZW50UmVjdC5sZWZ0LFxuICAgICAgICB0b3A6IGVsZW1lbnRSZWN0LnRvcCxcbiAgICAgICAgcmlnaHQ6IGVsZW1lbnRSZWN0LnJpZ2h0LFxuICAgICAgICBib3R0b206IGVsZW1lbnRSZWN0LmJvdHRvbVxuICAgICAgfSxcblxuICAgICAgLy8gdGhlIHJlY3RhbmdsZSBvZiB0aGUgZWxlbWVudCBleHBhbmRlZCB0byBjb250YWluIGl0cyBjaGlsZHJlbiBpbmNsdWRpbmcgb3duIG1hcmdpbiBhbmQgY2hpbGQgbWFyZ2luc1xuICAgICAgLy8gbWFyZ2lucyB3aWxsIGJlIGFkZGVkIGFmdGVyIHdlJ3ZlIHJlY2FsY3VsYXRlZCB0aGUgc2l6ZVxuICAgICAgb3V0ZXI6IHtcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIHJpZ2h0OiByaWdodCxcbiAgICAgICAgYm90dG9tOiBib3R0b21cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZXhwYW5kIHJlY3QgdG8gZml0IGFsbCBjaGlsZCByZWN0YW5nbGVzXG4gICAgY2hpbGRWaWV3c1xuICAgICAgLmZpbHRlcihmdW5jdGlvbihjaGlsZFZpZXcpIHtcbiAgICAgICAgcmV0dXJuICFjaGlsZFZpZXcuaXNSZWN0SWdub3JlZCgpO1xuICAgICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24oY2hpbGRWaWV3KSB7XG4gICAgICAgIHJldHVybiBjaGlsZFZpZXcucmVjdDtcbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbihjaGlsZFZpZXdSZWN0KSB7XG4gICAgICAgIGV4cGFuZFJlY3QocmVjdC5pbm5lciwgX2V4dGVuZHMoe30sIGNoaWxkVmlld1JlY3QuaW5uZXIpKTtcbiAgICAgICAgZXhwYW5kUmVjdChyZWN0Lm91dGVyLCBfZXh0ZW5kcyh7fSwgY2hpbGRWaWV3UmVjdC5vdXRlcikpO1xuICAgICAgfSk7XG5cbiAgICAvLyBjYWxjdWxhdGUgaW5uZXIgd2lkdGggYW5kIGhlaWdodFxuICAgIGNhbGN1bGF0ZVJlY3RTaXplKHJlY3QuaW5uZXIpO1xuXG4gICAgLy8gYXBwZW5kIGFkZGl0aW9uYWwgbWFyZ2luICh0b3AgYW5kIGxlZnQgbWFyZ2lucyBhcmUgaW5jbHVkZWQgaW4gdG9wIGFuZCBsZWZ0IGF1dG9tYXRpY2FsbHkpXG4gICAgcmVjdC5vdXRlci5ib3R0b20gKz0gcmVjdC5lbGVtZW50Lm1hcmdpbkJvdHRvbTtcbiAgICByZWN0Lm91dGVyLnJpZ2h0ICs9IHJlY3QuZWxlbWVudC5tYXJnaW5SaWdodDtcblxuICAgIC8vIGNhbGN1bGF0ZSBvdXRlciB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgY2FsY3VsYXRlUmVjdFNpemUocmVjdC5vdXRlcik7XG5cbiAgICByZXR1cm4gcmVjdDtcbiAgfTtcblxuICB2YXIgZXhwYW5kUmVjdCA9IGZ1bmN0aW9uIGV4cGFuZFJlY3QocGFyZW50LCBjaGlsZCkge1xuICAgIC8vIGFkanVzdCBmb3IgcGFyZW50IG9mZnNldFxuICAgIGNoaWxkLnRvcCArPSBwYXJlbnQudG9wO1xuICAgIGNoaWxkLnJpZ2h0ICs9IHBhcmVudC5sZWZ0O1xuICAgIGNoaWxkLmJvdHRvbSArPSBwYXJlbnQudG9wO1xuICAgIGNoaWxkLmxlZnQgKz0gcGFyZW50LmxlZnQ7XG5cbiAgICBpZiAoY2hpbGQuYm90dG9tID4gcGFyZW50LmJvdHRvbSkge1xuICAgICAgcGFyZW50LmJvdHRvbSA9IGNoaWxkLmJvdHRvbTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGQucmlnaHQgPiBwYXJlbnQucmlnaHQpIHtcbiAgICAgIHBhcmVudC5yaWdodCA9IGNoaWxkLnJpZ2h0O1xuICAgIH1cbiAgfTtcblxuICB2YXIgY2FsY3VsYXRlUmVjdFNpemUgPSBmdW5jdGlvbiBjYWxjdWxhdGVSZWN0U2l6ZShyZWN0KSB7XG4gICAgcmVjdC53aWR0aCA9IHJlY3QucmlnaHQgLSByZWN0LmxlZnQ7XG4gICAgcmVjdC5oZWlnaHQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuICB9O1xuXG4gIHZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG4gIH07XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgcG9zaXRpb24gaXMgYXQgZGVzdGluYXRpb25cbiAgICogQHBhcmFtIHBvc2l0aW9uXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvblxuICAgKiBAcGFyYW0gdmVsb2NpdHlcbiAgICogQHBhcmFtIGVycm9yTWFyZ2luXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIHRoZXJlWWV0ID0gZnVuY3Rpb24gdGhlcmVZZXQocG9zaXRpb24sIGRlc3RpbmF0aW9uLCB2ZWxvY2l0eSkge1xuICAgIHZhciBlcnJvck1hcmdpbiA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDAuMDAxO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIE1hdGguYWJzKHBvc2l0aW9uIC0gZGVzdGluYXRpb24pIDwgZXJyb3JNYXJnaW4gJiZcbiAgICAgIE1hdGguYWJzKHZlbG9jaXR5KSA8IGVycm9yTWFyZ2luXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogU3ByaW5nIGFuaW1hdGlvblxuICAgKi9cbiAgdmFyIHNwcmluZyA9XG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgZnVuY3Rpb24gc3ByaW5nKCkgLy8gbWV0aG9kIGRlZmluaXRpb25cbiAgICB7XG4gICAgICB2YXIgX3JlZiA9XG4gICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdXG4gICAgICAgICAgICA6IHt9LFxuICAgICAgICBfcmVmJHN0aWZmbmVzcyA9IF9yZWYuc3RpZmZuZXNzLFxuICAgICAgICBzdGlmZm5lc3MgPSBfcmVmJHN0aWZmbmVzcyA9PT0gdW5kZWZpbmVkID8gMC41IDogX3JlZiRzdGlmZm5lc3MsXG4gICAgICAgIF9yZWYkZGFtcGluZyA9IF9yZWYuZGFtcGluZyxcbiAgICAgICAgZGFtcGluZyA9IF9yZWYkZGFtcGluZyA9PT0gdW5kZWZpbmVkID8gMC43NSA6IF9yZWYkZGFtcGluZyxcbiAgICAgICAgX3JlZiRtYXNzID0gX3JlZi5tYXNzLFxuICAgICAgICBtYXNzID0gX3JlZiRtYXNzID09PSB1bmRlZmluZWQgPyAxMCA6IF9yZWYkbWFzcztcblxuICAgICAgdmFyIHRhcmdldCA9IG51bGw7XG4gICAgICB2YXIgcG9zaXRpb24gPSBudWxsO1xuICAgICAgdmFyIHZlbG9jaXR5ID0gMDtcbiAgICAgIHZhciByZXN0aW5nID0gZmFsc2U7XG5cbiAgICAgIC8vIHVwZGF0ZXMgc3ByaW5nIHN0YXRlXG4gICAgICB2YXIgaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiBpbnRlcnBvbGF0ZSgpIHtcbiAgICAgICAgLy8gaW4gcmVzdCwgZG9uJ3QgYW5pbWF0ZVxuICAgICAgICBpZiAocmVzdGluZykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5lZWQgYXQgbGVhc3QgYSB0YXJnZXQgb3IgcG9zaXRpb24gdG8gZG8gc3ByaW5neSB0aGluZ3NcbiAgICAgICAgaWYgKCEoaXNOdW1iZXIodGFyZ2V0KSAmJiBpc051bWJlcihwb3NpdGlvbikpKSB7XG4gICAgICAgICAgcmVzdGluZyA9IHRydWU7XG4gICAgICAgICAgdmVsb2NpdHkgPSAwO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBzcHJpbmcgZm9yY2VcbiAgICAgICAgdmFyIGYgPSAtKHBvc2l0aW9uIC0gdGFyZ2V0KSAqIHN0aWZmbmVzcztcblxuICAgICAgICAvLyB1cGRhdGUgdmVsb2NpdHkgYnkgYWRkaW5nIGZvcmNlIGJhc2VkIG9uIG1hc3NcbiAgICAgICAgdmVsb2NpdHkgKz0gZiAvIG1hc3M7XG5cbiAgICAgICAgLy8gdXBkYXRlIHBvc2l0aW9uIGJ5IGFkZGluZyB2ZWxvY2l0eVxuICAgICAgICBwb3NpdGlvbiArPSB2ZWxvY2l0eTtcblxuICAgICAgICAvLyBzbG93IGRvd24gYmFzZWQgb24gYW1vdW50IG9mIGRhbXBpbmdcbiAgICAgICAgdmVsb2NpdHkgKj0gZGFtcGluZztcblxuICAgICAgICAvLyB3ZSd2ZSBhcnJpdmVkIGlmIHdlJ3JlIG5lYXIgdGFyZ2V0IGFuZCBvdXIgdmVsb2NpdHkgaXMgbmVhciB6ZXJvXG4gICAgICAgIGlmICh0aGVyZVlldChwb3NpdGlvbiwgdGFyZ2V0LCB2ZWxvY2l0eSkpIHtcbiAgICAgICAgICBwb3NpdGlvbiA9IHRhcmdldDtcbiAgICAgICAgICB2ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgcmVzdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAvLyB3ZSBkb25lXG4gICAgICAgICAgYXBpLm9udXBkYXRlKHBvc2l0aW9uKTtcbiAgICAgICAgICBhcGkub25jb21wbGV0ZShwb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gcHJvZ3Jlc3MgdXBkYXRlXG4gICAgICAgICAgYXBpLm9udXBkYXRlKHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgbmV3IHRhcmdldCB2YWx1ZVxuICAgICAgICogQHBhcmFtIHZhbHVlXG4gICAgICAgKi9cbiAgICAgIHZhciBzZXRUYXJnZXQgPSBmdW5jdGlvbiBzZXRUYXJnZXQodmFsdWUpIHtcbiAgICAgICAgLy8gaWYgY3VycmVudGx5IGhhcyBubyBwb3NpdGlvbiwgc2V0IHRhcmdldCBhbmQgcG9zaXRpb24gdG8gdGhpcyB2YWx1ZVxuICAgICAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmICFpc051bWJlcihwb3NpdGlvbikpIHtcbiAgICAgICAgICBwb3NpdGlvbiA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGV0IHN0YXJ0IG1vdmluZyB0byB0YXJnZXRcbiAgICAgICAgdGFyZ2V0ID0gdmFsdWU7XG5cbiAgICAgICAgLy8gYWxyZWFkeSBhdCB0YXJnZXRcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSB0YXJnZXQgfHwgdHlwZW9mIHRhcmdldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBub3cgcmVzdGluZyBhcyB0YXJnZXQgaXMgY3VycmVudCBwb3NpdGlvbiwgc3RvcCBtb3ZpbmdcbiAgICAgICAgICByZXN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICB2ZWxvY2l0eSA9IDA7XG5cbiAgICAgICAgICAvLyBkb25lIVxuICAgICAgICAgIGFwaS5vbnVwZGF0ZShwb3NpdGlvbik7XG4gICAgICAgICAgYXBpLm9uY29tcGxldGUocG9zaXRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdGluZyA9IGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgLy8gbmVlZCAnYXBpJyB0byBjYWxsIG9udXBkYXRlIGNhbGxiYWNrXG4gICAgICB2YXIgYXBpID0gY3JlYXRlT2JqZWN0KHtcbiAgICAgICAgaW50ZXJwb2xhdGU6IGludGVycG9sYXRlLFxuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICBzZXQ6IHNldFRhcmdldCxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXN0aW5nOiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdGluZztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9udXBkYXRlOiBmdW5jdGlvbiBvbnVwZGF0ZSh2YWx1ZSkge30sXG4gICAgICAgIG9uY29tcGxldGU6IGZ1bmN0aW9uIG9uY29tcGxldGUodmFsdWUpIHt9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGFwaTtcbiAgICB9O1xuXG4gIHZhciBlYXNlSW5PdXRRdWFkID0gZnVuY3Rpb24gZWFzZUluT3V0UXVhZCh0KSB7XG4gICAgcmV0dXJuIHQgPCAwLjUgPyAyICogdCAqIHQgOiAtMSArICg0IC0gMiAqIHQpICogdDtcbiAgfTtcblxuICB2YXIgdHdlZW4gPVxuICAgIC8vIGRlZmF1bHQgdmFsdWVzXG4gICAgZnVuY3Rpb24gdHdlZW4oKSAvLyBtZXRob2QgZGVmaW5pdGlvblxuICAgIHtcbiAgICAgIHZhciBfcmVmID1cbiAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF1cbiAgICAgICAgICAgIDoge30sXG4gICAgICAgIF9yZWYkZHVyYXRpb24gPSBfcmVmLmR1cmF0aW9uLFxuICAgICAgICBkdXJhdGlvbiA9IF9yZWYkZHVyYXRpb24gPT09IHVuZGVmaW5lZCA/IDUwMCA6IF9yZWYkZHVyYXRpb24sXG4gICAgICAgIF9yZWYkZWFzaW5nID0gX3JlZi5lYXNpbmcsXG4gICAgICAgIGVhc2luZyA9IF9yZWYkZWFzaW5nID09PSB1bmRlZmluZWQgPyBlYXNlSW5PdXRRdWFkIDogX3JlZiRlYXNpbmcsXG4gICAgICAgIF9yZWYkZGVsYXkgPSBfcmVmLmRlbGF5LFxuICAgICAgICBkZWxheSA9IF9yZWYkZGVsYXkgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJGRlbGF5O1xuXG4gICAgICB2YXIgc3RhcnQgPSBudWxsO1xuICAgICAgdmFyIHQgPSB2b2lkIDA7XG4gICAgICB2YXIgcCA9IHZvaWQgMDtcbiAgICAgIHZhciByZXN0aW5nID0gdHJ1ZTtcbiAgICAgIHZhciByZXZlcnNlID0gZmFsc2U7XG4gICAgICB2YXIgdGFyZ2V0ID0gbnVsbDtcblxuICAgICAgdmFyIGludGVycG9sYXRlID0gZnVuY3Rpb24gaW50ZXJwb2xhdGUodHMpIHtcbiAgICAgICAgaWYgKHJlc3RpbmcgfHwgdGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0ID09PSBudWxsKSB7XG4gICAgICAgICAgc3RhcnQgPSB0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cyAtIHN0YXJ0IDwgZGVsYXkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0ID0gdHMgLSBzdGFydCAtIGRlbGF5O1xuXG4gICAgICAgIGlmICh0IDwgZHVyYXRpb24pIHtcbiAgICAgICAgICBwID0gdCAvIGR1cmF0aW9uO1xuICAgICAgICAgIGFwaS5vbnVwZGF0ZSgodCA+PSAwID8gZWFzaW5nKHJldmVyc2UgPyAxIC0gcCA6IHApIDogMCkgKiB0YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHQgPSAxO1xuICAgICAgICAgIHJlc3RpbmcgPSB0cnVlO1xuICAgICAgICAgIHAgPSByZXZlcnNlID8gMCA6IDE7XG4gICAgICAgICAgYXBpLm9udXBkYXRlKHAgKiB0YXJnZXQpO1xuICAgICAgICAgIGFwaS5vbmNvbXBsZXRlKHAgKiB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBuZWVkICdhcGknIHRvIGNhbGwgb251cGRhdGUgY2FsbGJhY2tcbiAgICAgIHZhciBhcGkgPSBjcmVhdGVPYmplY3Qoe1xuICAgICAgICBpbnRlcnBvbGF0ZTogaW50ZXJwb2xhdGUsXG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHJldmVyc2UgPyAwIDogdGFyZ2V0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgIC8vIGlzIGluaXRpYWwgdmFsdWVcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWU7XG4gICAgICAgICAgICAgIGFwaS5vbnVwZGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgIGFwaS5vbmNvbXBsZXRlKHZhbHVlKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3YW50IHRvIHR3ZWVuIHRvIGEgc21hbGxlciB2YWx1ZSBhbmQgaGF2ZSBhIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IHRhcmdldCkge1xuICAgICAgICAgICAgICB0YXJnZXQgPSAxO1xuICAgICAgICAgICAgICByZXZlcnNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIG5vdCB0d2VlbmluZyB0byBhIHNtYWxsZXIgdmFsdWVcbiAgICAgICAgICAgICAgcmV2ZXJzZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbGV0J3MgZ28hXG4gICAgICAgICAgICByZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBzdGFydCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXN0aW5nOiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdGluZztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9udXBkYXRlOiBmdW5jdGlvbiBvbnVwZGF0ZSh2YWx1ZSkge30sXG4gICAgICAgIG9uY29tcGxldGU6IGZ1bmN0aW9uIG9uY29tcGxldGUodmFsdWUpIHt9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGFwaTtcbiAgICB9O1xuXG4gIHZhciBhbmltYXRvciA9IHtcbiAgICBzcHJpbmc6IHNwcmluZyxcbiAgICB0d2VlbjogdHdlZW5cbiAgfTtcblxuICAvKlxuIHsgdHlwZTogJ3NwcmluZycsIHN0aWZmbmVzczogLjUsIGRhbXBpbmc6IC43NSwgbWFzczogMTAgfTtcbiB7IHRyYW5zbGF0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCAuLi4gfSwgLi4uIH1cbiB7IHRyYW5zbGF0aW9uOiB7IHg6IHsgdHlwZTogJ3NwcmluZycsIC4uLiB9IH0gfVxuKi9cbiAgdmFyIGNyZWF0ZUFuaW1hdG9yID0gZnVuY3Rpb24gY3JlYXRlQW5pbWF0b3IoZGVmaW5pdGlvbiwgY2F0ZWdvcnksIHByb3BlcnR5KSB7XG4gICAgLy8gZGVmYXVsdCBpcyBzaW5nbGUgZGVmaW5pdGlvblxuICAgIC8vIHdlIGNoZWNrIGlmIHRyYW5zZm9ybSBpcyBzZXQsIGlmIHNvLCB3ZSBjaGVjayBpZiBwcm9wZXJ0eSBpcyBzZXRcbiAgICB2YXIgZGVmID1cbiAgICAgIGRlZmluaXRpb25bY2F0ZWdvcnldICYmXG4gICAgICBfdHlwZW9mKGRlZmluaXRpb25bY2F0ZWdvcnldW3Byb3BlcnR5XSkgPT09ICdvYmplY3QnXG4gICAgICAgID8gZGVmaW5pdGlvbltjYXRlZ29yeV1bcHJvcGVydHldXG4gICAgICAgIDogZGVmaW5pdGlvbltjYXRlZ29yeV0gfHwgZGVmaW5pdGlvbjtcblxuICAgIHZhciB0eXBlID0gdHlwZW9mIGRlZiA9PT0gJ3N0cmluZycgPyBkZWYgOiBkZWYudHlwZTtcbiAgICB2YXIgcHJvcHMgPVxuICAgICAgKHR5cGVvZiBkZWYgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRlZikpID09PSAnb2JqZWN0J1xuICAgICAgICA/IF9leHRlbmRzKHt9LCBkZWYpXG4gICAgICAgIDoge307XG5cbiAgICByZXR1cm4gYW5pbWF0b3JbdHlwZV0gPyBhbmltYXRvclt0eXBlXShwcm9wcykgOiBudWxsO1xuICB9O1xuXG4gIHZhciBhZGRHZXRTZXQgPSBmdW5jdGlvbiBhZGRHZXRTZXQoa2V5cywgb2JqLCBwcm9wcykge1xuICAgIHZhciBvdmVyd3JpdGUgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBmYWxzZTtcblxuICAgIG9iaiA9IEFycmF5LmlzQXJyYXkob2JqKSA/IG9iaiA6IFtvYmpdO1xuICAgIG9iai5mb3JFYWNoKGZ1bmN0aW9uKG8pIHtcbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBrZXk7XG4gICAgICAgIHZhciBnZXR0ZXIgPSBmdW5jdGlvbiBnZXR0ZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzW2tleV07XG4gICAgICAgIH07XG4gICAgICAgIHZhciBzZXR0ZXIgPSBmdW5jdGlvbiBzZXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gKHByb3BzW2tleV0gPSB2YWx1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICh0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihrZXkpKSA9PT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbmFtZSA9IGtleS5rZXk7XG4gICAgICAgICAgZ2V0dGVyID0ga2V5LmdldHRlciB8fCBnZXR0ZXI7XG4gICAgICAgICAgc2V0dGVyID0ga2V5LnNldHRlciB8fCBzZXR0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob1tuYW1lXSAmJiAhb3ZlcndyaXRlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb1tuYW1lXSA9IHtcbiAgICAgICAgICBnZXQ6IGdldHRlcixcbiAgICAgICAgICBzZXQ6IHNldHRlclxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGlzRW1wdHkgPSBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGw7XG4gIH07XG5cbiAgdmFyIGlzRGVmaW5lZCA9IGZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNFbXB0eSh2YWx1ZSk7XG4gIH07XG5cbiAgLy8gYWRkIHRvIHN0YXRlLFxuICAvLyBhZGQgZ2V0dGVycyBhbmQgc2V0dGVycyB0byBpbnRlcm5hbCBhbmQgZXh0ZXJuYWwgYXBpIChpZiBub3Qgc2V0KVxuICAvLyBzZXR1cCBhbmltYXRvcnNcblxuICB2YXIgYW5pbWF0aW9ucyA9IGZ1bmN0aW9uIGFuaW1hdGlvbnMoX3JlZikge1xuICAgIHZhciBtaXhpbkNvbmZpZyA9IF9yZWYubWl4aW5Db25maWcsXG4gICAgICB2aWV3UHJvcHMgPSBfcmVmLnZpZXdQcm9wcyxcbiAgICAgIHZpZXdJbnRlcm5hbEFQSSA9IF9yZWYudmlld0ludGVybmFsQVBJLFxuICAgICAgdmlld0V4dGVybmFsQVBJID0gX3JlZi52aWV3RXh0ZXJuYWxBUEk7XG5cbiAgICAvLyBpbml0aWFsIHByb3BlcnRpZXNcbiAgICB2YXIgaW5pdGlhbFByb3BzID0gX2V4dGVuZHMoe30sIHZpZXdQcm9wcyk7XG5cbiAgICAvLyBsaXN0IG9mIGFsbCBhY3RpdmUgYW5pbWF0aW9uc1xuICAgIHZhciBhbmltYXRpb25zID0gW107XG5cbiAgICAvLyBhY3RpdmUgYW5pbWF0aW9uIGNvdW50ZXJcbiAgICB2YXIgYWN0aXZlQW5pbWF0b3JzID0gMDtcblxuICAgIC8vIHNldHVwIGFuaW1hdG9yc1xuICAgIGZvcmluKG1peGluQ29uZmlnLCBmdW5jdGlvbihwcm9wZXJ0eSwgYW5pbWF0aW9uKSB7XG4gICAgICB2YXIgYW5pbWF0b3IgPSBjcmVhdGVBbmltYXRvcihhbmltYXRpb24pO1xuICAgICAgaWYgKCFhbmltYXRvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHdoZW4gdGhlIGFuaW1hdG9yIHVwZGF0ZXMsIHVwZGF0ZSB0aGUgdmlldyBzdGF0ZSB2YWx1ZVxuICAgICAgYW5pbWF0b3Iub251cGRhdGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB2aWV3UHJvcHNbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB9O1xuXG4gICAgICBhbmltYXRvci5vbmNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGFjdGl2ZUFuaW1hdG9ycy0tO1xuICAgICAgfTtcblxuICAgICAgLy8gc2V0IGFuaW1hdG9yIHRhcmdldFxuICAgICAgYWN0aXZlQW5pbWF0b3JzKys7XG4gICAgICBhbmltYXRvci50YXJnZXQgPSBpbml0aWFsUHJvcHNbcHJvcGVydHldO1xuXG4gICAgICAvLyB3aGVuIHZhbHVlIGlzIHNldCwgc2V0IHRoZSBhbmltYXRvciB0YXJnZXQgdmFsdWVcbiAgICAgIHZhciBwcm9wID0ge1xuICAgICAgICBrZXk6IHByb3BlcnR5LFxuICAgICAgICBzZXR0ZXI6IGZ1bmN0aW9uIHNldHRlcih2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbmltYXRvci50YXJnZXQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhbmltYXRvci5yZXN0aW5nKSB7XG4gICAgICAgICAgICBhY3RpdmVBbmltYXRvcnMrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgYW5pbWF0b3IudGFyZ2V0ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldHRlcjogZnVuY3Rpb24gZ2V0dGVyKCkge1xuICAgICAgICAgIHJldHVybiB2aWV3UHJvcHNbcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBhZGQgZ2V0dGVycyBhbmQgc2V0dGVyc1xuICAgICAgYWRkR2V0U2V0KFtwcm9wXSwgW3ZpZXdJbnRlcm5hbEFQSSwgdmlld0V4dGVybmFsQVBJXSwgdmlld1Byb3BzLCB0cnVlKTtcblxuICAgICAgLy8gYWRkIGl0IHRvIHRoZSBsaXN0IGZvciBlYXN5IHVwZGF0aW5nIGZyb20gdGhlIF93cml0ZSBtZXRob2RcbiAgICAgIGFuaW1hdGlvbnMucHVzaChhbmltYXRvcik7XG4gICAgfSk7XG5cbiAgICAvLyBleHBvc2UgaW50ZXJuYWwgd3JpdGUgYXBpXG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSh0cykge1xuICAgICAgICBhbmltYXRpb25zLmZvckVhY2goZnVuY3Rpb24oYW5pbWF0aW9uKSB7XG4gICAgICAgICAgYW5pbWF0aW9uLmludGVycG9sYXRlKHRzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGlmIGFuaW1hdG9ycyBhcmUgYWN0aXZlLCB3ZSdyZSBidXN5XG4gICAgICAgIHJldHVybiBhY3RpdmVBbmltYXRvcnMgPT09IDA7XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHt9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgYWRkRXZlbnQgPSBmdW5jdGlvbiBhZGRFdmVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHR5cGUsIGZuKSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIHJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBmdW5jdGlvbih0eXBlLCBmbikge1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIG1peGluXG4gIHZhciBsaXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoX3JlZikge1xuICAgIHZhciBtaXhpbkNvbmZpZyA9IF9yZWYubWl4aW5Db25maWcsXG4gICAgICB2aWV3UHJvcHMgPSBfcmVmLnZpZXdQcm9wcyxcbiAgICAgIHZpZXdJbnRlcm5hbEFQSSA9IF9yZWYudmlld0ludGVybmFsQVBJLFxuICAgICAgdmlld0V4dGVybmFsQVBJID0gX3JlZi52aWV3RXh0ZXJuYWxBUEksXG4gICAgICB2aWV3U3RhdGUgPSBfcmVmLnZpZXdTdGF0ZSxcbiAgICAgIHZpZXcgPSBfcmVmLnZpZXc7XG5cbiAgICB2YXIgZXZlbnRzID0gW107XG5cbiAgICB2YXIgYWRkID0gYWRkRXZlbnQodmlldy5lbGVtZW50KTtcbiAgICB2YXIgcmVtb3ZlID0gcmVtb3ZlRXZlbnQodmlldy5lbGVtZW50KTtcblxuICAgIHZpZXdFeHRlcm5hbEFQSS5vbiA9IGZ1bmN0aW9uKHR5cGUsIGZuKSB7XG4gICAgICBldmVudHMucHVzaCh7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGZuOiBmblxuICAgICAgfSk7XG4gICAgICBhZGQodHlwZSwgZm4pO1xuICAgIH07XG5cbiAgICB2aWV3RXh0ZXJuYWxBUEkub2ZmID0gZnVuY3Rpb24odHlwZSwgZm4pIHtcbiAgICAgIGV2ZW50cy5zcGxpY2UoXG4gICAgICAgIGV2ZW50cy5maW5kSW5kZXgoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gZXZlbnQudHlwZSA9PT0gdHlwZSAmJiBldmVudC5mbiA9PT0gZm47XG4gICAgICAgIH0pLFxuICAgICAgICAxXG4gICAgICApO1xuICAgICAgcmVtb3ZlKHR5cGUsIGZuKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHtcbiAgICAgICAgLy8gbm90IGJ1c3lcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICByZW1vdmUoZXZlbnQudHlwZSwgZXZlbnQuZm4pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIGFkZCB0byBleHRlcm5hbCBhcGkgYW5kIGxpbmsgdG8gcHJvcHNcblxuICB2YXIgYXBpcyA9IGZ1bmN0aW9uIGFwaXMoX3JlZikge1xuICAgIHZhciBtaXhpbkNvbmZpZyA9IF9yZWYubWl4aW5Db25maWcsXG4gICAgICB2aWV3UHJvcHMgPSBfcmVmLnZpZXdQcm9wcyxcbiAgICAgIHZpZXdFeHRlcm5hbEFQSSA9IF9yZWYudmlld0V4dGVybmFsQVBJO1xuXG4gICAgYWRkR2V0U2V0KG1peGluQ29uZmlnLCB2aWV3RXh0ZXJuYWxBUEksIHZpZXdQcm9wcyk7XG4gIH07XG5cbiAgLy8gYWRkIHRvIHN0YXRlLFxuICAvLyBhZGQgZ2V0dGVycyBhbmQgc2V0dGVycyB0byBpbnRlcm5hbCBhbmQgZXh0ZXJuYWwgYXBpIChpZiBub3Qgc2V0KVxuICAvLyBzZXQgaW5pdGlhbCBzdGF0ZSBiYXNlZCBvbiBwcm9wcyBpbiB2aWV3UHJvcHNcbiAgLy8gYXBwbHkgYXMgdHJhbnNmb3JtcyBlYWNoIGZyYW1lXG5cbiAgdmFyIGRlZmF1bHRzJDEgPSB7XG4gICAgb3BhY2l0eTogMSxcbiAgICBzY2FsZVg6IDEsXG4gICAgc2NhbGVZOiAxLFxuICAgIHRyYW5zbGF0ZVg6IDAsXG4gICAgdHJhbnNsYXRlWTogMCxcbiAgICByb3RhdGVYOiAwLFxuICAgIHJvdGF0ZVk6IDAsXG4gICAgcm90YXRlWjogMFxuICB9O1xuXG4gIHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXMoX3JlZikge1xuICAgIHZhciBtaXhpbkNvbmZpZyA9IF9yZWYubWl4aW5Db25maWcsXG4gICAgICB2aWV3UHJvcHMgPSBfcmVmLnZpZXdQcm9wcyxcbiAgICAgIHZpZXdJbnRlcm5hbEFQSSA9IF9yZWYudmlld0ludGVybmFsQVBJLFxuICAgICAgdmlld0V4dGVybmFsQVBJID0gX3JlZi52aWV3RXh0ZXJuYWxBUEksXG4gICAgICB2aWV3ID0gX3JlZi52aWV3O1xuXG4gICAgLy8gaW5pdGlhbCBwcm9wc1xuICAgIHZhciBpbml0aWFsUHJvcHMgPSBfZXh0ZW5kcyh7fSwgdmlld1Byb3BzKTtcblxuICAgIC8vIGN1cnJlbnQgcHJvcHNcbiAgICB2YXIgY3VycmVudFByb3BzID0ge307XG5cbiAgICAvLyB3ZSB3aWxsIGFkZCB0aG9zZSBwcm9wZXJ0aWVzIHRvIHRoZSBleHRlcm5hbCBBUEkgYW5kIGxpbmsgdGhlbSB0byB0aGUgdmlld1N0YXRlXG4gICAgYWRkR2V0U2V0KG1peGluQ29uZmlnLCBbdmlld0ludGVybmFsQVBJLCB2aWV3RXh0ZXJuYWxBUEldLCB2aWV3UHJvcHMpO1xuXG4gICAgLy8gb3ZlcnJpZGUgcmVjdCBvbiBpbnRlcm5hbCBhbmQgZXh0ZXJuYWwgcmVjdCBnZXR0ZXIgc28gaXQgdGFrZXMgaW4gYWNjb3VudCB0cmFuc2Zvcm1zXG4gICAgdmFyIGdldE9mZnNldCA9IGZ1bmN0aW9uIGdldE9mZnNldCgpIHtcbiAgICAgIHJldHVybiBbdmlld1Byb3BzWyd0cmFuc2xhdGVYJ10gfHwgMCwgdmlld1Byb3BzWyd0cmFuc2xhdGVZJ10gfHwgMF07XG4gICAgfTtcbiAgICB2YXIgZ2V0U2NhbGUgPSBmdW5jdGlvbiBnZXRTY2FsZSgpIHtcbiAgICAgIHJldHVybiBbdmlld1Byb3BzWydzY2FsZVgnXSB8fCAwLCB2aWV3UHJvcHNbJ3NjYWxlWSddIHx8IDBdO1xuICAgIH07XG4gICAgdmFyIGdldFJlY3QgPSBmdW5jdGlvbiBnZXRSZWN0KCkge1xuICAgICAgcmV0dXJuIHZpZXcucmVjdFxuICAgICAgICA/IGdldFZpZXdSZWN0KHZpZXcucmVjdCwgdmlldy5jaGlsZFZpZXdzLCBnZXRPZmZzZXQoKSwgZ2V0U2NhbGUoKSlcbiAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgdmlld0ludGVybmFsQVBJLnJlY3QgPSB7IGdldDogZ2V0UmVjdCB9O1xuICAgIHZpZXdFeHRlcm5hbEFQSS5yZWN0ID0geyBnZXQ6IGdldFJlY3QgfTtcblxuICAgIC8vIGFwcGx5IHZpZXcgcHJvcHNcbiAgICBtaXhpbkNvbmZpZy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmlld1Byb3BzW2tleV0gPVxuICAgICAgICB0eXBlb2YgaW5pdGlhbFByb3BzW2tleV0gPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgPyBkZWZhdWx0cyQxW2tleV1cbiAgICAgICAgICA6IGluaXRpYWxQcm9wc1trZXldO1xuICAgIH0pO1xuXG4gICAgLy8gZXhwb3NlIGFwaVxuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7XG4gICAgICAgIC8vIHNlZSBpZiBwcm9wcyBoYXZlIGNoYW5nZWRcbiAgICAgICAgaWYgKCFwcm9wc0hhdmVDaGFuZ2VkKGN1cnJlbnRQcm9wcywgdmlld1Byb3BzKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vdmVzIGVsZW1lbnQgdG8gY29ycmVjdCBwb3NpdGlvbiBvbiBzY3JlZW5cbiAgICAgICAgYXBwbHlTdHlsZXModmlldy5lbGVtZW50LCB2aWV3UHJvcHMpO1xuXG4gICAgICAgIC8vIHN0b3JlIG5ldyB0cmFuc2Zvcm1zXG4gICAgICAgIE9iamVjdC5hc3NpZ24uYXBwbHkoXG4gICAgICAgICAgT2JqZWN0LFxuICAgICAgICAgIFtjdXJyZW50UHJvcHNdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheSh2aWV3UHJvcHMpKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIG5vIGxvbmdlciBidXN5XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7fVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHByb3BzSGF2ZUNoYW5nZWQgPSBmdW5jdGlvbiBwcm9wc0hhdmVDaGFuZ2VkKGN1cnJlbnRQcm9wcywgbmV3UHJvcHMpIHtcbiAgICAvLyBkaWZmZXJlbnQgYW1vdW50IG9mIGtleXNcbiAgICBpZiAoT2JqZWN0LmtleXMoY3VycmVudFByb3BzKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKG5ld1Byb3BzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGxldHMgYW5hbHl6ZSB0aGUgaW5kaXZpZHVhbCBwcm9wc1xuICAgIGZvciAodmFyIHByb3AgaW4gbmV3UHJvcHMpIHtcbiAgICAgIGlmIChuZXdQcm9wc1twcm9wXSAhPT0gY3VycmVudFByb3BzW3Byb3BdKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICB2YXIgYXBwbHlTdHlsZXMgPSBmdW5jdGlvbiBhcHBseVN0eWxlcyhlbGVtZW50LCBfcmVmMikge1xuICAgIHZhciBvcGFjaXR5ID0gX3JlZjIub3BhY2l0eSxcbiAgICAgIHRyYW5zbGF0ZVggPSBfcmVmMi50cmFuc2xhdGVYLFxuICAgICAgdHJhbnNsYXRlWSA9IF9yZWYyLnRyYW5zbGF0ZVksXG4gICAgICBzY2FsZVggPSBfcmVmMi5zY2FsZVgsXG4gICAgICBzY2FsZVkgPSBfcmVmMi5zY2FsZVksXG4gICAgICByb3RhdGVYID0gX3JlZjIucm90YXRlWCxcbiAgICAgIHJvdGF0ZVkgPSBfcmVmMi5yb3RhdGVZLFxuICAgICAgcm90YXRlWiA9IF9yZWYyLnJvdGF0ZVosXG4gICAgICBoZWlnaHQgPSBfcmVmMi5oZWlnaHQ7XG5cbiAgICB2YXIgdHJhbnNmb3JtcyA9IFtdO1xuICAgIHZhciBzdHlsZXMgPSBbXTtcblxuICAgIC8vIHRyYW5zZm9ybSBvcmRlciBpcyByZWxldmFudFxuXG4gICAgLy8gMS4gdHJhbnNsYXRlXG4gICAgaWYgKGlzRGVmaW5lZCh0cmFuc2xhdGVYKSB8fCBpc0RlZmluZWQodHJhbnNsYXRlWSkpIHtcbiAgICAgIHRyYW5zZm9ybXMucHVzaChcbiAgICAgICAgJ3RyYW5zbGF0ZTNkKCcgK1xuICAgICAgICAgICh0cmFuc2xhdGVYIHx8IDApICtcbiAgICAgICAgICAncHgsICcgK1xuICAgICAgICAgICh0cmFuc2xhdGVZIHx8IDApICtcbiAgICAgICAgICAncHgsIDApJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyAyLiBzY2FsZVxuICAgIGlmIChpc0RlZmluZWQoc2NhbGVYKSB8fCBpc0RlZmluZWQoc2NhbGVZKSkge1xuICAgICAgdHJhbnNmb3Jtcy5wdXNoKFxuICAgICAgICAnc2NhbGUzZCgnICtcbiAgICAgICAgICAoaXNEZWZpbmVkKHNjYWxlWCkgPyBzY2FsZVggOiAxKSArXG4gICAgICAgICAgJywgJyArXG4gICAgICAgICAgKGlzRGVmaW5lZChzY2FsZVkpID8gc2NhbGVZIDogMSkgK1xuICAgICAgICAgICcsIDEpJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyAzLiByb3RhdGVcbiAgICBpZiAoaXNEZWZpbmVkKHJvdGF0ZVopIHx8IGlzRGVmaW5lZChyb3RhdGVZKSB8fCBpc0RlZmluZWQocm90YXRlWCkpIHtcbiAgICAgIHRyYW5zZm9ybXMucHVzaChcbiAgICAgICAgJ3JvdGF0ZTNkKCcgK1xuICAgICAgICAgIChyb3RhdGVYIHx8IDApICtcbiAgICAgICAgICAnLCAnICtcbiAgICAgICAgICAocm90YXRlWSB8fCAwKSArXG4gICAgICAgICAgJywgJyArXG4gICAgICAgICAgKHJvdGF0ZVogfHwgMCkgK1xuICAgICAgICAgICcsIDM2MGRlZyknXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGFkZCB0cmFuc2Zvcm1zXG4gICAgaWYgKHRyYW5zZm9ybXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZXMucHVzaCgndHJhbnNmb3JtOicgKyB0cmFuc2Zvcm1zLmpvaW4oJyAnKSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIG9wYWNpdHlcbiAgICBpZiAoaXNEZWZpbmVkKG9wYWNpdHkpKSB7XG4gICAgICBzdHlsZXMucHVzaCgnb3BhY2l0eTonICsgb3BhY2l0eSk7XG5cbiAgICAgIC8vIGlmIHdlIHJlYWNoIHplcm8sIHdlIG1ha2UgdGhlIGVsZW1lbnQgaW5hY2Nlc3NpYmxlXG4gICAgICBpZiAob3BhY2l0eSA9PT0gMCkge1xuICAgICAgICBzdHlsZXMucHVzaCgndmlzaWJpbGl0eTpoaWRkZW4nKTtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgd2UncmUgYmVsb3cgMTAwJSBvcGFjaXR5IHRoaXMgZWxlbWVudCBjYW4ndCBiZSBjbGlja2VkXG4gICAgICBpZiAob3BhY2l0eSA8IDEpIHtcbiAgICAgICAgc3R5bGVzLnB1c2goJ3BvaW50ZXItZXZlbnRzOm5vbmU7Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIGhlaWdodFxuICAgIGlmIChpc0RlZmluZWQoaGVpZ2h0KSkge1xuICAgICAgc3R5bGVzLnB1c2goJ2hlaWdodDonICsgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgc3R5bGVzXG4gICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJztcbiAgICB2YXIgbmV3U3R5bGVzID0gc3R5bGVzLmpvaW4oJzsnKTtcblxuICAgIC8vIGlmIG5ldyBzdHlsZXMgZG9lcyBub3QgbWF0Y2ggY3VycmVudCBzdHlsZXMsIGxldHMgdXBkYXRlIVxuICAgIGlmIChcbiAgICAgIG5ld1N0eWxlcy5sZW5ndGggIT09IGN1cnJlbnRTdHlsZXMubGVuZ3RoIHx8XG4gICAgICBuZXdTdHlsZXMgIT09IGN1cnJlbnRTdHlsZXNcbiAgICApIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIG5ld1N0eWxlcyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBNaXhpbnMgPSB7XG4gICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgYW5pbWF0aW9uczogYW5pbWF0aW9ucyxcbiAgICBhcGlzOiBhcGlzXG4gIH07XG5cbiAgdmFyIHVwZGF0ZVJlY3QgPSBmdW5jdGlvbiB1cGRhdGVSZWN0KCkge1xuICAgIHZhciByZWN0ID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIGVsZW1lbnQgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgc3R5bGUgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIHJlY3QucGFkZGluZ1RvcCA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdUb3AsIDEwKSB8fCAwO1xuICAgIHJlY3QubWFyZ2luVG9wID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luVG9wLCAxMCkgfHwgMDtcbiAgICByZWN0Lm1hcmdpblJpZ2h0ID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luUmlnaHQsIDEwKSB8fCAwO1xuICAgIHJlY3QubWFyZ2luQm90dG9tID0gcGFyc2VJbnQoc3R5bGUubWFyZ2luQm90dG9tLCAxMCkgfHwgMDtcbiAgICByZWN0Lm1hcmdpbkxlZnQgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0LCAxMCkgfHwgMDtcblxuICAgIHJlY3QubGVmdCA9IGVsZW1lbnQub2Zmc2V0TGVmdCB8fCAwO1xuICAgIHJlY3QudG9wID0gZWxlbWVudC5vZmZzZXRUb3AgfHwgMDtcbiAgICByZWN0LndpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwO1xuICAgIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMDtcblxuICAgIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyByZWN0LndpZHRoO1xuICAgIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyByZWN0LmhlaWdodDtcblxuICAgIHJlY3Quc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgICByZWN0LmhpZGRlbiA9IGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsO1xuXG4gICAgcmV0dXJuIHJlY3Q7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVZpZXcgPVxuICAgIC8vIGRlZmF1bHQgdmlldyBkZWZpbml0aW9uXG4gICAgZnVuY3Rpb24gY3JlYXRlVmlldygpIHtcbiAgICAgIHZhciBfcmVmID1cbiAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF1cbiAgICAgICAgICAgIDoge30sXG4gICAgICAgIF9yZWYkdGFnID0gX3JlZi50YWcsXG4gICAgICAgIHRhZyA9IF9yZWYkdGFnID09PSB1bmRlZmluZWQgPyAnZGl2JyA6IF9yZWYkdGFnLFxuICAgICAgICBfcmVmJG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgIG5hbWUgPSBfcmVmJG5hbWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfcmVmJG5hbWUsXG4gICAgICAgIF9yZWYkYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgICAgYXR0cmlidXRlcyA9IF9yZWYkYXR0cmlidXRlcyA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmJGF0dHJpYnV0ZXMsXG4gICAgICAgIF9yZWYkcmVhZCA9IF9yZWYucmVhZCxcbiAgICAgICAgcmVhZCA9IF9yZWYkcmVhZCA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24oKSB7fSA6IF9yZWYkcmVhZCxcbiAgICAgICAgX3JlZiR3cml0ZSA9IF9yZWYud3JpdGUsXG4gICAgICAgIHdyaXRlID0gX3JlZiR3cml0ZSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24oKSB7fSA6IF9yZWYkd3JpdGUsXG4gICAgICAgIF9yZWYkY3JlYXRlID0gX3JlZi5jcmVhdGUsXG4gICAgICAgIGNyZWF0ZSA9IF9yZWYkY3JlYXRlID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbigpIHt9IDogX3JlZiRjcmVhdGUsXG4gICAgICAgIF9yZWYkZGVzdHJveSA9IF9yZWYuZGVzdHJveSxcbiAgICAgICAgZGVzdHJveSA9IF9yZWYkZGVzdHJveSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24oKSB7fSA6IF9yZWYkZGVzdHJveSxcbiAgICAgICAgX3JlZiRmaWx0ZXJGcmFtZUFjdGlvID0gX3JlZi5maWx0ZXJGcmFtZUFjdGlvbnNGb3JDaGlsZCxcbiAgICAgICAgZmlsdGVyRnJhbWVBY3Rpb25zRm9yQ2hpbGQgPVxuICAgICAgICAgIF9yZWYkZmlsdGVyRnJhbWVBY3RpbyA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGZ1bmN0aW9uKGNoaWxkLCBhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogX3JlZiRmaWx0ZXJGcmFtZUFjdGlvLFxuICAgICAgICBfcmVmJGRpZENyZWF0ZVZpZXcgPSBfcmVmLmRpZENyZWF0ZVZpZXcsXG4gICAgICAgIGRpZENyZWF0ZVZpZXcgPVxuICAgICAgICAgIF9yZWYkZGlkQ3JlYXRlVmlldyA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24oKSB7fSA6IF9yZWYkZGlkQ3JlYXRlVmlldyxcbiAgICAgICAgX3JlZiRpZ25vcmVSZWN0ID0gX3JlZi5pZ25vcmVSZWN0LFxuICAgICAgICBpZ25vcmVSZWN0ID0gX3JlZiRpZ25vcmVSZWN0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkaWdub3JlUmVjdCxcbiAgICAgICAgX3JlZiRtaXhpbnMgPSBfcmVmLm1peGlucyxcbiAgICAgICAgbWl4aW5zID0gX3JlZiRtaXhpbnMgPT09IHVuZGVmaW5lZCA/IFtdIDogX3JlZiRtaXhpbnM7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihcbiAgICAgICAgLy8gZWFjaCB2aWV3IHJlcXVpcmVzIHJlZmVyZW5jZSB0byBzdG9yZVxuICAgICAgICBzdG9yZVxuICAgICAgKSB7XG4gICAgICAgIHZhciBwcm9wcyA9XG4gICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzFdXG4gICAgICAgICAgICA6IHt9O1xuXG4gICAgICAgIC8vIHJvb3QgZWxlbWVudCBzaG91bGQgbm90IGJlIGNoYW5nZWRcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KHRhZywgJ2ZpbGVwb25kLS0nICsgbmFtZSwgYXR0cmlidXRlcyk7XG5cbiAgICAgICAgLy8gc3R5bGUgcmVmZXJlbmNlIHNob3VsZCBhbHNvIG5vdCBiZSBjaGFuZ2VkXG4gICAgICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuXG4gICAgICAgIC8vIGVsZW1lbnQgcmVjdGFuZ2xlXG4gICAgICAgIHZhciByZWN0ID0gdXBkYXRlUmVjdCgpO1xuICAgICAgICB2YXIgZnJhbWVSZWN0ID0gbnVsbDtcblxuICAgICAgICAvLyBwcmV0dHkgc2VsZiBleHBsYW5hdG9yeVxuICAgICAgICB2YXIgY2hpbGRWaWV3cyA9IFtdO1xuXG4gICAgICAgIC8vIGxvYWRlZCBtaXhpbnNcbiAgICAgICAgdmFyIGFjdGl2ZU1peGlucyA9IFtdO1xuXG4gICAgICAgIC8vIHJlZmVyZW5jZXMgdG8gY3JlYXRlZCBjaGlsZHJlblxuICAgICAgICB2YXIgcmVmID0ge307XG5cbiAgICAgICAgLy8gc3RhdGUgdXNlZCBmb3IgZWFjaCBpbnN0YW5jZVxuICAgICAgICB2YXIgc3RhdGUgPSB7fTtcblxuICAgICAgICAvLyBsaXN0IG9mIHdyaXRlcnMgdGhhdCB3aWxsIGJlIGNhbGxlZCB0byB1cGRhdGUgdGhpcyB2aWV3XG4gICAgICAgIHZhciB3cml0ZXJzID0gW1xuICAgICAgICAgIHdyaXRlIC8vIGRlZmF1bHQgd3JpdGVyXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFyIHJlYWRlcnMgPSBbXG4gICAgICAgICAgcmVhZCAvLyBkZWZhdWx0IHJlYWRlclxuICAgICAgICBdO1xuXG4gICAgICAgIHZhciBkZXN0cm95ZXJzID0gW1xuICAgICAgICAgIGRlc3Ryb3kgLy8gZGVmYXVsdCBkZXN0cm95XG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gY29yZSB2aWV3IG1ldGhvZHNcbiAgICAgICAgdmFyIGdldEVsZW1lbnQgPSBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZ2V0Q2hpbGRWaWV3cyA9IGZ1bmN0aW9uIGdldENoaWxkVmlld3MoKSB7XG4gICAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChjaGlsZFZpZXdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdldFJlZmVyZW5jZSA9IGZ1bmN0aW9uIGdldFJlZmVyZW5jZSgpIHtcbiAgICAgICAgICByZXR1cm4gcmVmO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY3JlYXRlQ2hpbGRWaWV3ID0gZnVuY3Rpb24gY3JlYXRlQ2hpbGRWaWV3KHN0b3JlKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZpZXcsIHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gdmlldyhzdG9yZSwgcHJvcHMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXRSZWN0ID0gZnVuY3Rpb24gZ2V0UmVjdCgpIHtcbiAgICAgICAgICBpZiAoZnJhbWVSZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gZnJhbWVSZWN0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmcmFtZVJlY3QgPSBnZXRWaWV3UmVjdChyZWN0LCBjaGlsZFZpZXdzLCBbMCwgMF0sIFsxLCAxXSk7XG4gICAgICAgICAgcmV0dXJuIGZyYW1lUmVjdDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdldFN0eWxlID0gZnVuY3Rpb24gZ2V0U3R5bGUoKSB7XG4gICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkIGRhdGEgZnJvbSBET01cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHZhciBfcmVhZCA9IGZ1bmN0aW9uIF9yZWFkKCkge1xuICAgICAgICAgIGZyYW1lUmVjdCA9IG51bGw7XG5cbiAgICAgICAgICAvLyByZWFkIGNoaWxkIHZpZXdzXG4gICAgICAgICAgY2hpbGRWaWV3cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQuX3JlYWQoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIHVwZGF0ZSBteSByZWN0YW5nbGVcbiAgICAgICAgICB1cGRhdGVSZWN0KHJlY3QsIGVsZW1lbnQsIHN0eWxlKTtcblxuICAgICAgICAgIC8vIHdyaXRlcnNcbiAgICAgICAgICByZWFkZXJzLmZvckVhY2goZnVuY3Rpb24ocmVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhZGVyKHsgcm9vdDogaW50ZXJuYWxBUEksIHByb3BzOiBwcm9wcywgcmVjdDogcmVjdCB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JpdGUgZGF0YSB0byBET01cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHZhciBfd3JpdGUgPSBmdW5jdGlvbiBfd3JpdGUodHMpIHtcbiAgICAgICAgICB2YXIgZnJhbWVBY3Rpb25zID1cbiAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gYXJndW1lbnRzWzFdXG4gICAgICAgICAgICAgIDogW107XG5cbiAgICAgICAgICAvLyBpZiBubyBhY3Rpb25zLCB3ZSBhc3N1bWUgdGhhdCB0aGUgdmlldyBpcyByZXN0aW5nXG4gICAgICAgICAgdmFyIHJlc3RpbmcgPSBmcmFtZUFjdGlvbnMubGVuZ3RoID09PSAwO1xuXG4gICAgICAgICAgLy8gd3JpdGVyc1xuICAgICAgICAgIHdyaXRlcnMuZm9yRWFjaChmdW5jdGlvbih3cml0ZXIpIHtcbiAgICAgICAgICAgIHZhciB3cml0ZXJSZXN0aW5nID0gd3JpdGVyKHtcbiAgICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICAgICAgICByb290OiBpbnRlcm5hbEFQSSxcbiAgICAgICAgICAgICAgYWN0aW9uczogZnJhbWVBY3Rpb25zLFxuICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh3cml0ZXJSZXN0aW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBydW4gbWl4aW5zXG4gICAgICAgICAgYWN0aXZlTWl4aW5zLmZvckVhY2goZnVuY3Rpb24obWl4aW4pIHtcbiAgICAgICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgbWl4aW5zIGlzIHN0aWxsIGJ1c3kgYWZ0ZXIgd3JpdGUgb3BlcmF0aW9uLCB3ZSBhcmUgbm90IHJlc3RpbmdcbiAgICAgICAgICAgIHZhciBtaXhpblJlc3RpbmcgPSBtaXhpbi53cml0ZSh0cyk7XG4gICAgICAgICAgICBpZiAobWl4aW5SZXN0aW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyB1cGRhdGVzIGNoaWxkIHZpZXdzIHRoYXQgYXJlIGN1cnJlbnRseSBhdHRhY2hlZCB0byB0aGUgRE9NXG4gICAgICAgICAgY2hpbGRWaWV3c1xuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICAgICAgICByZXR1cm4gISFjaGlsZC5lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgICAgICAgLy8gaWYgYSBjaGlsZCB2aWV3IGlzIG5vdCByZXN0aW5nLCB3ZSBhcmUgbm90IHJlc3RpbmdcbiAgICAgICAgICAgICAgdmFyIGNoaWxkUmVzdGluZyA9IGNoaWxkLl93cml0ZShcbiAgICAgICAgICAgICAgICB0cyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJGcmFtZUFjdGlvbnNGb3JDaGlsZChjaGlsZCwgZnJhbWVBY3Rpb25zKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoIWNoaWxkUmVzdGluZykge1xuICAgICAgICAgICAgICAgIHJlc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBhcHBlbmQgbmV3IGVsZW1lbnRzIHRvIERPTSBhbmQgdXBkYXRlIHRob3NlXG4gICAgICAgICAgY2hpbGRWaWV3c1xuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICAgICAgICByZXR1cm4gIWNoaWxkLmVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgLy8gYXBwZW5kIHRvIERPTVxuICAgICAgICAgICAgICBpbnRlcm5hbEFQSS5hcHBlbmRDaGlsZChjaGlsZC5lbGVtZW50LCBpbmRleCk7XG5cbiAgICAgICAgICAgICAgLy8gY2FsbCByZWFkIChuZWVkIHRvIGtub3cgdGhlIHNpemUgb2YgdGhlc2UgZWxlbWVudHMpXG4gICAgICAgICAgICAgIGNoaWxkLl9yZWFkKCk7XG5cbiAgICAgICAgICAgICAgLy8gcmUtY2FsbCB3cml0ZVxuICAgICAgICAgICAgICBjaGlsZC5fd3JpdGUodHMsIGZpbHRlckZyYW1lQWN0aW9uc0ZvckNoaWxkKGNoaWxkLCBmcmFtZUFjdGlvbnMpKTtcblxuICAgICAgICAgICAgICAvLyB3ZSBqdXN0IGFkZGVkIHNvbXRoaW5nIHRvIHRoZSBkb20sIG5vIHJlc3RcbiAgICAgICAgICAgICAgcmVzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBsZXQgcGFyZW50IGtub3cgaWYgd2UgYXJlIHJlc3RpbmdcbiAgICAgICAgICByZXR1cm4gcmVzdGluZztcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgX2Rlc3Ryb3kgPSBmdW5jdGlvbiBfZGVzdHJveSgpIHtcbiAgICAgICAgICBhY3RpdmVNaXhpbnMuZm9yRWFjaChmdW5jdGlvbihtaXhpbikge1xuICAgICAgICAgICAgcmV0dXJuIG1peGluLmRlc3Ryb3koKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkZXN0cm95ZXJzLmZvckVhY2goZnVuY3Rpb24oZGVzdHJveWVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVzdHJveWVyKHsgcm9vdDogaW50ZXJuYWxBUEkgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY2hpbGRWaWV3cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQuX2Rlc3Ryb3koKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzaGFyZWRBUElcbiAgICAgICAgdmFyIHNoYXJlZEFQSURlZmluaXRpb24gPSB7XG4gICAgICAgICAgZWxlbWVudDoge1xuICAgICAgICAgICAgZ2V0OiBnZXRFbGVtZW50XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZ2V0OiBnZXRTdHlsZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRWaWV3czoge1xuICAgICAgICAgICAgZ2V0OiBnZXRDaGlsZFZpZXdzXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHByaXZhdGUgQVBJIGRlZmluaXRpb25cbiAgICAgICAgdmFyIGludGVybmFsQVBJRGVmaW5pdGlvbiA9IF9leHRlbmRzKHt9LCBzaGFyZWRBUElEZWZpbml0aW9uLCB7XG4gICAgICAgICAgcmVjdDoge1xuICAgICAgICAgICAgZ2V0OiBnZXRSZWN0XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIC8vIGFjY2VzcyB0byBjdXN0b20gY2hpbGRyZW4gcmVmZXJlbmNlc1xuICAgICAgICAgIHJlZjoge1xuICAgICAgICAgICAgZ2V0OiBnZXRSZWZlcmVuY2VcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLy8gZG9tIG1vZGlmaWVyc1xuICAgICAgICAgIGlzOiBmdW5jdGlvbiBpcyhuZWVkbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lID09PSBuZWVkbGU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcHBlbmRDaGlsZDogYXBwZW5kQ2hpbGQoZWxlbWVudCksXG4gICAgICAgICAgY3JlYXRlQ2hpbGRWaWV3OiBjcmVhdGVDaGlsZFZpZXcoc3RvcmUpLFxuICAgICAgICAgIGFwcGVuZENoaWxkVmlldzogYXBwZW5kQ2hpbGRWaWV3KGVsZW1lbnQsIGNoaWxkVmlld3MpLFxuICAgICAgICAgIHJlbW92ZUNoaWxkVmlldzogcmVtb3ZlQ2hpbGRWaWV3KGVsZW1lbnQsIGNoaWxkVmlld3MpLFxuICAgICAgICAgIHJlZ2lzdGVyV3JpdGVyOiBmdW5jdGlvbiByZWdpc3RlcldyaXRlcih3cml0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3cml0ZXJzLnB1c2god3JpdGVyKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyUmVhZGVyOiBmdW5jdGlvbiByZWdpc3RlclJlYWRlcihyZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFkZXJzLnB1c2gocmVhZGVyKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLy8gYWNjZXNzIHRvIGRhdGEgc3RvcmVcbiAgICAgICAgICBkaXNwYXRjaDogc3RvcmUuZGlzcGF0Y2gsXG4gICAgICAgICAgcXVlcnk6IHN0b3JlLnF1ZXJ5XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHB1YmxpYyB2aWV3IEFQSSBtZXRob2RzXG4gICAgICAgIHZhciBleHRlcm5hbEFQSURlZmluaXRpb24gPSB7XG4gICAgICAgICAgZWxlbWVudDoge1xuICAgICAgICAgICAgZ2V0OiBnZXRFbGVtZW50XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGlsZFZpZXdzOiB7XG4gICAgICAgICAgICBnZXQ6IGdldENoaWxkVmlld3NcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlY3Q6IHtcbiAgICAgICAgICAgIGdldDogZ2V0UmVjdFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNSZWN0SWdub3JlZDogZnVuY3Rpb24gaXNSZWN0SWdub3JlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBpZ25vcmVSZWN0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgX3JlYWQ6IF9yZWFkLFxuICAgICAgICAgIF93cml0ZTogX3dyaXRlLFxuICAgICAgICAgIF9kZXN0cm95OiBfZGVzdHJveVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIG1peGluIEFQSSBtZXRob2RzXG4gICAgICAgIHZhciBtaXhpbkFQSURlZmluaXRpb24gPSBfZXh0ZW5kcyh7fSwgc2hhcmVkQVBJRGVmaW5pdGlvbiwge1xuICAgICAgICAgIHJlY3Q6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZCBtaXhpbiBmdW5jdGlvbmFsaXR5XG4gICAgICAgIGZvcmluKG1peGlucywgZnVuY3Rpb24obmFtZSwgY29uZmlnKSB7XG4gICAgICAgICAgdmFyIG1peGluQVBJID0gTWl4aW5zW25hbWVdKHtcbiAgICAgICAgICAgIG1peGluQ29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICB2aWV3UHJvcHM6IHByb3BzLFxuICAgICAgICAgICAgdmlld1N0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIHZpZXdJbnRlcm5hbEFQSTogaW50ZXJuYWxBUElEZWZpbml0aW9uLFxuICAgICAgICAgICAgdmlld0V4dGVybmFsQVBJOiBleHRlcm5hbEFQSURlZmluaXRpb24sXG4gICAgICAgICAgICB2aWV3OiBjcmVhdGVPYmplY3QobWl4aW5BUElEZWZpbml0aW9uKVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG1peGluQVBJKSB7XG4gICAgICAgICAgICBhY3RpdmVNaXhpbnMucHVzaChtaXhpbkFQSSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zdHJ1Y3QgcHJpdmF0ZSBhcGlcbiAgICAgICAgdmFyIGludGVybmFsQVBJID0gY3JlYXRlT2JqZWN0KGludGVybmFsQVBJRGVmaW5pdGlvbik7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSB2aWV3XG4gICAgICAgIGNyZWF0ZSh7XG4gICAgICAgICAgcm9vdDogaW50ZXJuYWxBUEksXG4gICAgICAgICAgcHJvcHM6IHByb3BzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFwcGVuZCBjcmVhdGVkIGNoaWxkIHZpZXdzIHRvIHJvb3Qgbm9kZVxuICAgICAgICB2YXIgY2hpbGRDb3VudCA9IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyAvLyBuZWVkIHRvIGtub3cgdGhlIGN1cnJlbnQgY2hpbGQgY291bnQgc28gYXBwZW5kaW5nIGhhcHBlbnMgaW4gY29ycmVjdCBvcmRlclxuICAgICAgICBjaGlsZFZpZXdzLmZvckVhY2goZnVuY3Rpb24oY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgaW50ZXJuYWxBUEkuYXBwZW5kQ2hpbGQoY2hpbGQuZWxlbWVudCwgY2hpbGRDb3VudCArIGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2FsbCBkaWQgY3JlYXRlXG4gICAgICAgIGRpZENyZWF0ZVZpZXcoaW50ZXJuYWxBUEkpO1xuXG4gICAgICAgIC8vIGV4cG9zZSBwdWJsaWMgYXBpXG4gICAgICAgIHJldHVybiBjcmVhdGVPYmplY3QoZXh0ZXJuYWxBUElEZWZpbml0aW9uLCBwcm9wcyk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgdmFyIGNyZWF0ZVBhaW50ZXIgPSBmdW5jdGlvbiBjcmVhdGVQYWludGVyKHVwZGF0ZSkge1xuICAgIHZhciBmcHMgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiA2MDtcblxuICAgIHZhciBpbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gICAgdmFyIGxhc3QgPSBudWxsO1xuICAgIHZhciBmcmFtZSA9IG51bGw7XG5cbiAgICB2YXIgdGljayA9IGZ1bmN0aW9uIHRpY2sodHMpIHtcbiAgICAgIC8vIHF1ZXVlIG5leHQgdGlja1xuICAgICAgZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuXG4gICAgICAvLyBsaW1pdCBmcHNcbiAgICAgIGlmICghbGFzdCkge1xuICAgICAgICBsYXN0ID0gdHM7XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWx0YSA9IHRzIC0gbGFzdDtcblxuICAgICAgaWYgKGRlbHRhIDw9IGludGVydmFsKSB7XG4gICAgICAgIC8vIHNraXAgZnJhbWVcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhbGlnbiBuZXh0IGZyYW1lXG4gICAgICBsYXN0ID0gdHMgLSBkZWx0YSAlIGludGVydmFsO1xuXG4gICAgICAvLyB1cGRhdGUgdmlld1xuICAgICAgdXBkYXRlKHRzKTtcbiAgICB9O1xuXG4gICAgdGljayhwZXJmb3JtYW5jZS5ub3coKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGF1c2U6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVVwZGF0ZXIgPSBmdW5jdGlvbiBjcmVhdGVVcGRhdGVyKGFwcHMsIHJlYWRlciwgd3JpdGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRzKSB7XG4gICAgICAvLyBhbGwgcmVhZHMgZmlyc3QgKGFzIHRoZXNlIGFyZSBmcmVlIGF0IHRoZSBzdGFydCBvZiB0aGUgZnJhbWUpXG4gICAgICBhcHBzLmZvckVhY2goZnVuY3Rpb24oYXBwKSB7XG4gICAgICAgIHJldHVybiBhcHBbcmVhZGVyXSgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIG5vdyB1cGRhdGUgdGhlIERPTVxuICAgICAgYXBwcy5mb3JFYWNoKGZ1bmN0aW9uKGFwcCkge1xuICAgICAgICByZXR1cm4gYXBwW3dyaXRlcl0odHMpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY3JlYXRlUm91dGUgPSBmdW5jdGlvbiBjcmVhdGVSb3V0ZShyb3V0ZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oX3JlZikge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmLnJvb3QsXG4gICAgICAgIHByb3BzID0gX3JlZi5wcm9wcyxcbiAgICAgICAgX3JlZiRhY3Rpb25zID0gX3JlZi5hY3Rpb25zLFxuICAgICAgICBhY3Rpb25zID0gX3JlZiRhY3Rpb25zID09PSB1bmRlZmluZWQgPyBbXSA6IF9yZWYkYWN0aW9ucztcblxuICAgICAgYWN0aW9uc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICAgIHJldHVybiByb3V0ZXNbYWN0aW9uLnR5cGVdO1xuICAgICAgICB9KVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gcm91dGVzW2FjdGlvbi50eXBlXSh7XG4gICAgICAgICAgICByb290OiByb290LFxuICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24uZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBpbnNlcnRCZWZvcmUgPSBmdW5jdGlvbiBpbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xuICAgIHJldHVybiByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpO1xuICB9O1xuXG4gIHZhciBpbnNlcnRBZnRlciA9IGZ1bmN0aW9uIGluc2VydEFmdGVyKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpIHtcbiAgICByZXR1cm4gcmVmZXJlbmNlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgIG5ld05vZGUsXG4gICAgICByZWZlcmVuY2VOb2RlLm5leHRTaWJsaW5nXG4gICAgKTtcbiAgfTtcblxuICB2YXIgaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gIH07XG5cbiAgdmFyIHRyaW0gPSBmdW5jdGlvbiB0cmltKHN0cikge1xuICAgIHJldHVybiBzdHIudHJpbSgpO1xuICB9O1xuXG4gIHZhciB0b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuICcnICsgdmFsdWU7XG4gIH07XG5cbiAgdmFyIHRvQXJyYXkkMSA9IGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgICB2YXIgc3BsaXR0ZXIgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnLCc7XG5cbiAgICBpZiAoaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0b1N0cmluZyh2YWx1ZSlcbiAgICAgIC5zcGxpdChzcGxpdHRlcilcbiAgICAgIC5tYXAodHJpbSlcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIubGVuZ3RoO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdmFyIGlzQm9vbGVhbiA9IGZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbiAgfTtcblxuICB2YXIgdG9Cb29sZWFuID0gZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzQm9vbGVhbih2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlID09PSAndHJ1ZSc7XG4gIH07XG5cbiAgdmFyIGlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgfTtcblxuICB2YXIgdG9OdW1iZXIgPSBmdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiBpc051bWJlcih2YWx1ZSlcbiAgICAgID8gdmFsdWVcbiAgICAgIDogaXNTdHJpbmcodmFsdWUpID8gdG9TdHJpbmcodmFsdWUpLnJlcGxhY2UoL1thLXpdKy9naSwgJycpIDogMDtcbiAgfTtcblxuICB2YXIgdG9JbnQgPSBmdW5jdGlvbiB0b0ludCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh0b051bWJlcih2YWx1ZSksIDEwKTtcbiAgfTtcblxuICB2YXIgdG9GbG9hdCA9IGZ1bmN0aW9uIHRvRmxvYXQodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh0b051bWJlcih2YWx1ZSkpO1xuICB9O1xuXG4gIHZhciBpc0ludCA9IGZ1bmN0aW9uIGlzSW50KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiBpc0Zpbml0ZSh2YWx1ZSkgJiYgTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlO1xuICB9O1xuXG4gIHZhciB0b0J5dGVzID0gZnVuY3Rpb24gdG9CeXRlcyh2YWx1ZSkge1xuICAgIC8vIGlzIGluIGJ5dGVzXG4gICAgaWYgKGlzSW50KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8vIGlzIG5hdHVyYWwgZmlsZSBzaXplXG4gICAgdmFyIG5hdHVyYWxGaWxlU2l6ZSA9IHRvU3RyaW5nKHZhbHVlKS50cmltKCk7XG5cbiAgICAvLyBpZiBpcyB2YWx1ZSBpbiBtZWdhYnl0ZXNcbiAgICBpZiAoL01CJC9pLnRlc3QobmF0dXJhbEZpbGVTaXplKSkge1xuICAgICAgbmF0dXJhbEZpbGVTaXplID0gbmF0dXJhbEZpbGVTaXplLnJlcGxhY2UoL01CJGkvLCAnJykudHJpbSgpO1xuICAgICAgcmV0dXJuIHRvSW50KG5hdHVyYWxGaWxlU2l6ZSkgKiAxMDAwICogMTAwMDtcbiAgICB9XG5cbiAgICAvLyBpZiBpcyB2YWx1ZSBpbiBraWxvYnl0ZXNcbiAgICBpZiAoL0tCL2kudGVzdChuYXR1cmFsRmlsZVNpemUpKSB7XG4gICAgICBuYXR1cmFsRmlsZVNpemUgPSBuYXR1cmFsRmlsZVNpemUucmVwbGFjZSgvS0IkaS8sICcnKS50cmltKCk7XG4gICAgICByZXR1cm4gdG9JbnQobmF0dXJhbEZpbGVTaXplKSAqIDEwMDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvSW50KG5hdHVyYWxGaWxlU2l6ZSk7XG4gIH07XG5cbiAgdmFyIHRvRnVuY3Rpb25SZWZlcmVuY2UgPSBmdW5jdGlvbiB0b0Z1bmN0aW9uUmVmZXJlbmNlKHN0cmluZykge1xuICAgIHZhciByZWYgPSBzZWxmO1xuICAgIHZhciBsZXZlbHMgPSBzdHJpbmcuc3BsaXQoJy4nKTtcbiAgICB2YXIgbGV2ZWwgPSBudWxsO1xuICAgIHdoaWxlICgobGV2ZWwgPSBsZXZlbHMuc2hpZnQoKSkpIHtcbiAgICAgIHJlZiA9IHJlZltsZXZlbF07XG4gICAgICBpZiAoIXJlZikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlZjtcbiAgfTtcblxuICB2YXIgbWV0aG9kcyA9IHtcbiAgICBwcm9jZXNzOiAnUE9TVCcsXG4gICAgcmV2ZXJ0OiAnREVMRVRFJyxcbiAgICBmZXRjaDogJ0dFVCcsXG4gICAgcmVzdG9yZTogJ0dFVCcsXG4gICAgbG9hZDogJ0dFVCdcbiAgfTtcblxuICB2YXIgY3JlYXRlU2VydmVyQVBJID0gZnVuY3Rpb24gY3JlYXRlU2VydmVyQVBJKG91dGxpbmUpIHtcbiAgICB2YXIgYXBpID0ge307XG5cbiAgICBhcGkudXJsID0gaXNTdHJpbmcob3V0bGluZSkgPyBvdXRsaW5lIDogb3V0bGluZS51cmwgfHwgJyc7XG4gICAgYXBpLnRpbWVvdXQgPSBvdXRsaW5lLnRpbWVvdXQgPyBwYXJzZUludChvdXRsaW5lLnRpbWVvdXQsIDEwKSA6IDcwMDA7XG5cbiAgICBmb3JpbihtZXRob2RzLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgIGFwaVtrZXldID0gY3JlYXRlQWN0aW9uKGtleSwgb3V0bGluZVtrZXldLCBtZXRob2RzW2tleV0sIGFwaS50aW1lb3V0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhcGk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbihuYW1lLCBvdXRsaW5lLCBtZXRob2QsIHRpbWVvdXQpIHtcbiAgICAvLyBpcyBleHBsaWNpdGVseSBzZXQgdG8gbnVsbCBzbyBkaXNhYmxlXG4gICAgaWYgKG91dGxpbmUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGlmIGlzIGN1c3RvbSBmdW5jdGlvbiwgZG9uZSEgRGV2IGhhbmRsZXMgZXZlcnl0aGluZy5cbiAgICBpZiAodHlwZW9mIG91dGxpbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBvdXRsaW5lO1xuICAgIH1cblxuICAgIC8vIGJ1aWxkIGFjdGlvbiBvYmplY3RcbiAgICB2YXIgYWN0aW9uID0ge1xuICAgICAgdXJsOiBtZXRob2QgPT09ICdHRVQnID8gJz8nICsgbmFtZSArICc9JyA6ICcnLFxuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICBoZWFkZXJzOiB7fSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgICB0aW1lb3V0OiB0aW1lb3V0XG4gICAgfTtcblxuICAgIC8vIGlzIGEgc2luZ2xlIHVybFxuICAgIGlmIChpc1N0cmluZyhvdXRsaW5lKSkge1xuICAgICAgYWN0aW9uLnVybCA9IG91dGxpbmU7XG4gICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH1cblxuICAgIC8vIG92ZXJ3cml0ZVxuICAgIE9iamVjdC5hc3NpZ24oYWN0aW9uLCBvdXRsaW5lKTtcblxuICAgIC8vIHNlZSBpZiBzaG91bGQgcmVmb3JtYXQgaGVhZGVycztcbiAgICBpZiAoaXNTdHJpbmcoYWN0aW9uLmhlYWRlcnMpKSB7XG4gICAgICB2YXIgcGFydHMgPSBhY3Rpb24uaGVhZGVycy5zcGxpdCgvOiguKykvKTtcbiAgICAgIGFjdGlvbi5oZWFkZXJzID0ge1xuICAgICAgICBoZWFkZXI6IHBhcnRzWzBdLFxuICAgICAgICB2YWx1ZTogcGFydHNbMV1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gaWYgaXMgYm9vbCB3aXRoQ3JlZGVudGlhbHNcbiAgICBhY3Rpb24ud2l0aENyZWRlbnRpYWxzID0gdG9Cb29sZWFuKGFjdGlvbi53aXRoQ3JlZGVudGlhbHMpO1xuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfTtcblxuICB2YXIgdG9TZXJ2ZXJBUEkgPSBmdW5jdGlvbiB0b1NlcnZlckFQSSh2YWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVTZXJ2ZXJBUEkodmFsdWUpO1xuICB9O1xuXG4gIHZhciBpc051bGwgPSBmdW5jdGlvbiBpc051bGwodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG4gIH07XG5cbiAgdmFyIGlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSA9PT1cbiAgICAgICAgJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGxcbiAgICApO1xuICB9O1xuXG4gIHZhciBpc0FQSSA9IGZ1bmN0aW9uIGlzQVBJKHZhbHVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGlzT2JqZWN0KHZhbHVlKSAmJlxuICAgICAgaXNTdHJpbmcodmFsdWUudXJsKSAmJlxuICAgICAgaXNPYmplY3QodmFsdWUucHJvY2VzcykgJiZcbiAgICAgIGlzT2JqZWN0KHZhbHVlLnJldmVydCkgJiZcbiAgICAgIGlzT2JqZWN0KHZhbHVlLnJlc3RvcmUpICYmXG4gICAgICBpc09iamVjdCh2YWx1ZS5mZXRjaClcbiAgICApO1xuICB9O1xuXG4gIHZhciBnZXRUeXBlID0gZnVuY3Rpb24gZ2V0VHlwZSh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgfVxuXG4gICAgaWYgKGlzSW50KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICdpbnQnO1xuICAgIH1cblxuICAgIGlmICgvXlswLTldKyA/KD86R0J8TUJ8S0IpJC9naS50ZXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICdieXRlcyc7XG4gICAgfVxuXG4gICAgaWYgKGlzQVBJKHZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcGknO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKTtcbiAgfTtcblxuICB2YXIgY29udmVyc2lvblRhYmxlID0ge1xuICAgIGFycmF5OiB0b0FycmF5JDEsXG4gICAgYm9vbGVhbjogdG9Cb29sZWFuLFxuICAgIGludDogZnVuY3Rpb24gaW50KHZhbHVlKSB7XG4gICAgICByZXR1cm4gZ2V0VHlwZSh2YWx1ZSkgPT09ICdieXRlcycgPyB0b0J5dGVzKHZhbHVlKSA6IHRvSW50KHZhbHVlKTtcbiAgICB9LFxuICAgIGZsb2F0OiB0b0Zsb2F0LFxuICAgIGJ5dGVzOiB0b0J5dGVzLFxuICAgIHN0cmluZzogdG9TdHJpbmcsXG4gICAgc2VydmVyYXBpOiB0b1NlcnZlckFQSSxcbiAgICBmdW5jdGlvbjogZnVuY3Rpb24gX2Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdG9GdW5jdGlvblJlZmVyZW5jZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjb252ZXJ0VG8gPSBmdW5jdGlvbiBjb252ZXJ0VG8odmFsdWUsIHR5cGUpIHtcbiAgICByZXR1cm4gY29udmVyc2lvblRhYmxlW3R5cGVdKHZhbHVlKTtcbiAgfTtcblxuICB2YXIgZ2V0VmFsdWVCeVR5cGUgPSBmdW5jdGlvbiBnZXRWYWx1ZUJ5VHlwZShcbiAgICBuZXdWYWx1ZSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgdmFsdWVUeXBlXG4gICkge1xuICAgIC8vIGNhbiBhbHdheXMgYXNzaWduIGRlZmF1bHQgdmFsdWVcbiAgICBpZiAobmV3VmFsdWUgPT09IGRlZmF1bHRWYWx1ZSkge1xuICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIC8vIGdldCB0aGUgdHlwZSBvZiB0aGUgbmV3IHZhbHVlXG4gICAgdmFyIG5ld1ZhbHVlVHlwZSA9IGdldFR5cGUobmV3VmFsdWUpO1xuXG4gICAgLy8gaXMgdmFsaWQgdHlwZT9cbiAgICBpZiAobmV3VmFsdWVUeXBlICE9PSB2YWx1ZVR5cGUpIHtcbiAgICAgIC8vIGlzIHN0cmluZyBpbnB1dCwgbGV0J3MgYXR0ZW1wdCB0byBjb252ZXJ0XG4gICAgICB2YXIgY29udmVydGVkVmFsdWUgPSBjb252ZXJ0VG8obmV3VmFsdWUsIHZhbHVlVHlwZSk7XG5cbiAgICAgIC8vIHdoYXQgaXMgdGhlIHR5cGUgbm93XG4gICAgICBuZXdWYWx1ZVR5cGUgPSBnZXRUeXBlKGNvbnZlcnRlZFZhbHVlKTtcblxuICAgICAgLy8gbm8gdmFsaWQgY29udmVyc2lvbnMgZm91bmRcbiAgICAgIGlmIChjb252ZXJ0ZWRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyAnVHJ5aW5nIHRvIGFzc2lnbiB2YWx1ZSB3aXRoIGluY29ycmVjdCB0eXBlIHRvIFwiJyArXG4gICAgICAgICAgb3B0aW9uICtcbiAgICAgICAgICAnXCIsIGFsbG93ZWQgdHlwZTogXCInICtcbiAgICAgICAgICB2YWx1ZVR5cGUgK1xuICAgICAgICAgICdcIic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IGNvbnZlcnRlZFZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFzc2lnbiBuZXcgdmFsdWVcbiAgICByZXR1cm4gbmV3VmFsdWU7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZU9wdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZU9wdGlvbihvcHRpb24sIGRlZmF1bHRWYWx1ZSwgdmFsdWVUeXBlKSB7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuICAgIHJldHVybiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdWYWx1ZSkge1xuICAgICAgICBjdXJyZW50VmFsdWUgPSBnZXRWYWx1ZUJ5VHlwZShuZXdWYWx1ZSwgZGVmYXVsdFZhbHVlLCB2YWx1ZVR5cGUpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGNyZWF0ZU9wdGlvbnMgPSBmdW5jdGlvbiBjcmVhdGVPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB2YXIgb2JqID0ge307XG4gICAgZm9yaW4ob3B0aW9ucywgZnVuY3Rpb24ocHJvcCkge1xuICAgICAgdmFyIG9wdGlvbkRlZmluaXRpb24gPSBvcHRpb25zW3Byb3BdO1xuICAgICAgb2JqW3Byb3BdID0gY3JlYXRlT3B0aW9uKHByb3AsIG9wdGlvbkRlZmluaXRpb25bMF0sIG9wdGlvbkRlZmluaXRpb25bMV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBjcmVhdGVPYmplY3Qob2JqKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlSW5pdGlhbFN0YXRlID0gZnVuY3Rpb24gY3JlYXRlSW5pdGlhbFN0YXRlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gbW9kZWxcbiAgICAgIGl0ZW1zOiBbXSxcblxuICAgICAgLy8gb3B0aW9uc1xuICAgICAgb3B0aW9uczogY3JlYXRlT3B0aW9ucyhvcHRpb25zKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGZyb21DYW1lbHMgPSBmdW5jdGlvbiBmcm9tQ2FtZWxzKHN0cmluZykge1xuICAgIHZhciBzZXBhcmF0b3IgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnLSc7XG4gICAgcmV0dXJuIHN0cmluZ1xuICAgICAgLnNwbGl0KC8oPz1bQS1aXSkvKVxuICAgICAgLm1hcChmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgIHJldHVybiBwYXJ0LnRvTG93ZXJDYXNlKCk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oc2VwYXJhdG9yKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlT3B0aW9uQVBJID0gZnVuY3Rpb24gY3JlYXRlT3B0aW9uQVBJKHN0b3JlLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvcmluKG9wdGlvbnMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgb2JqW2tleV0gPSB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBzdG9yZS5nZXRTdGF0ZSgpLm9wdGlvbnNba2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaCgnU0VUXycgKyBmcm9tQ2FtZWxzKGtleSwgJ18nKS50b1VwcGVyQ2FzZSgpLCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIHZhciBjcmVhdGVPcHRpb25BY3Rpb25zID0gZnVuY3Rpb24gY3JlYXRlT3B0aW9uQWN0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoLCBxdWVyeSwgc3RhdGUpIHtcbiAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgIGZvcmluKG9wdGlvbnMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgbmFtZSA9IGZyb21DYW1lbHMoa2V5LCAnXycpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIG9ialsnU0VUXycgKyBuYW1lXSA9IGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdGF0ZS5vcHRpb25zW2tleV0gPSBhY3Rpb24udmFsdWU7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAvLyBub3BlLCBmYWlsZWRcblxuICAgICAgICAgIC8vIHdlIHN1Y2Nlc3NmdWxseSBzZXQgdGhlIHZhbHVlIG9mIHRoaXMgb3B0aW9uXG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9TRVRfJyArIG5hbWUsIHsgdmFsdWU6IHN0YXRlLm9wdGlvbnNba2V5XSB9KTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBjcmVhdGVPcHRpb25RdWVyaWVzID0gZnVuY3Rpb24gY3JlYXRlT3B0aW9uUXVlcmllcyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICB2YXIgb2JqID0ge307XG4gICAgICBmb3JpbihvcHRpb25zLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgb2JqWydHRVRfJyArIGZyb21DYW1lbHMoa2V5LCAnXycpLnRvVXBwZXJDYXNlKCldID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm9wdGlvbnNba2V5XTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBJbnRlcmFjdGlvbk1ldGhvZCA9IHtcbiAgICBBUEk6IDEsXG4gICAgRFJPUDogMixcbiAgICBCUk9XU0U6IDMsXG4gICAgUEFTVEU6IDQsXG4gICAgTk9ORTogNVxuICB9O1xuXG4gIHZhciBnZXRVbmlxdWVJZCA9IGZ1bmN0aW9uIGdldFVuaXF1ZUlkKCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpXG4gICAgICAudG9TdHJpbmcoMzYpXG4gICAgICAuc3Vic3RyKDIsIDkpO1xuICB9O1xuXG4gIHZhciBmb3JFYWNoRGVsYXllZCA9IGZ1bmN0aW9uIGZvckVhY2hEZWxheWVkKGl0ZW1zLCBjYikge1xuICAgIHZhciBkZWxheSA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDc1O1xuICAgIHJldHVybiBpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjYihpdGVtKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sIGRlbGF5ICogaW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGFycmF5UmVtb3ZlID0gZnVuY3Rpb24gYXJyYXlSZW1vdmUoYXJyLCBpbmRleCkge1xuICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICB2YXIgb24gPSBmdW5jdGlvbiBvbigpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgdmFyIG9mZiA9IGZ1bmN0aW9uIG9mZihldmVudCwgY2IpIHtcbiAgICAgIGFycmF5UmVtb3ZlKFxuICAgICAgICBsaXN0ZW5lcnMsXG4gICAgICAgIGxpc3RlbmVycy5maW5kSW5kZXgoZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXIuZXZlbnQgPT09IGV2ZW50ICYmIChsaXN0ZW5lci5jYiA9PT0gY2IgfHwgIWNiKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgZmlyZTogZnVuY3Rpb24gZmlyZShldmVudCkge1xuICAgICAgICBmb3IgKFxuICAgICAgICAgIHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksXG4gICAgICAgICAgICBfa2V5ID0gMTtcbiAgICAgICAgICBfa2V5IDwgX2xlbjtcbiAgICAgICAgICBfa2V5KytcbiAgICAgICAgKSB7XG4gICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxpc3RlbmVyc1xuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgICAgICAgICByZXR1cm4gbGlzdGVuZXIuZXZlbnQgPT09IGV2ZW50O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmNiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGNiKSB7XG4gICAgICAgICAgICAgIGNiLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9LFxuICAgICAgb246IGZ1bmN0aW9uIG9uKGV2ZW50LCBjYikge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaCh7IGV2ZW50OiBldmVudCwgY2I6IGNiIH0pO1xuICAgICAgfSxcbiAgICAgIG9uT25jZTogZnVuY3Rpb24gb25PbmNlKGV2ZW50LCBfY2IpIHtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICBjYjogZnVuY3Rpb24gY2IoKSB7XG4gICAgICAgICAgICBvZmYoZXZlbnQsIF9jYik7XG4gICAgICAgICAgICBfY2IuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb2ZmOiBvZmZcbiAgICB9O1xuICB9O1xuXG4gIHZhciBjb3B5T2JqZWN0UHJvcGVydGllc1RvT2JqZWN0ID0gZnVuY3Rpb24gY29weU9iamVjdFByb3BlcnRpZXNUb09iamVjdChcbiAgICBzcmMsXG4gICAgdGFyZ2V0LFxuICAgIGV4Y2x1ZGVkXG4gICkge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNyYylcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuICFleGNsdWRlZC5pbmNsdWRlcyhwcm9wZXJ0eSk7XG4gICAgICB9KVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgIGtleSxcbiAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNyYywga2V5KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdmFyIFBSSVZBVEVfTUVUSE9EUyA9IFtcbiAgICAnZmlyZScsXG4gICAgJ3Byb2Nlc3MnLFxuICAgICdyZXZlcnQnLFxuICAgICdsb2FkJyxcbiAgICAnb24nLFxuICAgICdvZmYnLFxuICAgICdvbk9uY2UnLFxuICAgICdyZXRyeUxvYWQnXG4gIF07XG5cbiAgdmFyIGNyZWF0ZUl0ZW1BUEkgPSBmdW5jdGlvbiBjcmVhdGVJdGVtQVBJKGl0ZW0pIHtcbiAgICB2YXIgYXBpID0ge307XG4gICAgY29weU9iamVjdFByb3BlcnRpZXNUb09iamVjdChpdGVtLCBhcGksIFBSSVZBVEVfTUVUSE9EUyk7XG4gICAgcmV0dXJuIGFwaTtcbiAgfTtcblxuICB2YXIgZ2V0Tm9uTnVtZXJpYyA9IGZ1bmN0aW9uIGdldE5vbk51bWVyaWMoc3RyKSB7XG4gICAgcmV0dXJuIC9bXjAtOV0rLy5leGVjKHN0cik7XG4gIH07XG5cbiAgdmFyIGdldERlY2ltYWxTZXBhcmF0b3IgPSBmdW5jdGlvbiBnZXREZWNpbWFsU2VwYXJhdG9yKCkge1xuICAgIHJldHVybiBnZXROb25OdW1lcmljKCgxLjEpLnRvTG9jYWxlU3RyaW5nKCkpWzBdO1xuICB9O1xuXG4gIHZhciBnZXRUaG91c2FuZHNTZXBhcmF0b3IgPSBmdW5jdGlvbiBnZXRUaG91c2FuZHNTZXBhcmF0b3IoKSB7XG4gICAgLy8gQWRkZWQgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHJldHVybiB0aGUgdGhvdXNhbmRzIHNlcGFyYXRvciAoaGFwcGVuZCBvbiBuYXRpdmUgYnJvd3NlciBBbmRyb2lkIDQuNC40KVxuICAgIC8vIFdlIGNoZWNrIGFnYWluc3QgdGhlIG5vcm1hbCB0b1N0cmluZyBvdXRwdXQgYW5kIGlmIHRoZXkncmUgdGhlIHNhbWUgcmV0dXJuIGEgY29tbWEgd2hlbiBkZWNpbWFsIHNlcGFyYXRvciBpcyBhIGRvdFxuICAgIHZhciBkZWNpbWFsU2VwYXJhdG9yID0gZ2V0RGVjaW1hbFNlcGFyYXRvcigpO1xuICAgIHZhciB0aG91c2FuZHNTdHJpbmdXaXRoU2VwYXJhdG9yID0gKDEwMDAuMCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICB2YXIgdGhvdXNhbmRzU3RyaW5nV2l0aG91dFNlcGFyYXRvciA9ICgxMDAwLjApLnRvU3RyaW5nKCk7XG4gICAgaWYgKHRob3VzYW5kc1N0cmluZ1dpdGhTZXBhcmF0b3IgIT09IHRob3VzYW5kc1N0cmluZ1dpdGhvdXRTZXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiBnZXROb25OdW1lcmljKHRob3VzYW5kc1N0cmluZ1dpdGhTZXBhcmF0b3IpWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZGVjaW1hbFNlcGFyYXRvciA9PT0gJy4nID8gJywnIDogJy4nO1xuICB9O1xuXG4gIHZhciBUeXBlID0ge1xuICAgIEJPT0xFQU46ICdib29sZWFuJyxcbiAgICBJTlQ6ICdpbnQnLFxuICAgIFNUUklORzogJ3N0cmluZycsXG4gICAgQVJSQVk6ICdhcnJheScsXG4gICAgT0JKRUNUOiAnb2JqZWN0JyxcbiAgICBGVU5DVElPTjogJ2Z1bmN0aW9uJyxcbiAgICBBQ1RJT046ICdhY3Rpb24nLFxuICAgIFNFUlZFUl9BUEk6ICdzZXJ2ZXJhcGknLFxuICAgIFJFR0VYOiAncmVnZXgnXG4gIH07XG5cbiAgLy8gYWxsIHJlZ2lzdGVyZWQgZmlsdGVyc1xuICB2YXIgZmlsdGVycyA9IFtdO1xuXG4gIC8vIGxvb3BzIG92ZXIgbWF0Y2hpbmcgZmlsdGVycyBhbmQgcGFzc2VzIG9wdGlvbnMgdG8gZWFjaCBmaWx0ZXIsIHJldHVybmluZyB0aGUgbWFwcGVkIHJlc3VsdHNcbiAgdmFyIGFwcGx5RmlsdGVyQ2hhaW4gPSBmdW5jdGlvbiBhcHBseUZpbHRlckNoYWluKGtleSwgdmFsdWUsIHV0aWxzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLy8gZmluZCBtYXRjaGluZyBmaWx0ZXJzIGZvciB0aGlzIGtleVxuICAgICAgdmFyIG1hdGNoaW5nRmlsdGVycyA9IGZpbHRlcnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbihmKSB7XG4gICAgICAgICAgcmV0dXJuIGYua2V5ID09PSBrZXk7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24oZikge1xuICAgICAgICAgIHJldHVybiBmLmNiO1xuICAgICAgICB9KTtcblxuICAgICAgLy8gcmVzb2x2ZSBub3dcbiAgICAgIGlmIChtYXRjaGluZ0ZpbHRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGZpcnN0IGZpbHRlciB0byBraWNrIHRoaW5ncyBvZlxuICAgICAgdmFyIGluaXRpYWxGaWx0ZXIgPSBtYXRjaGluZ0ZpbHRlcnMuc2hpZnQoKTtcblxuICAgICAgLy8gY2hhaW4gZmlsdGVyc1xuICAgICAgbWF0Y2hpbmdGaWx0ZXJzXG4gICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgLy8gbG9vcCBvdmVyIHByb21pc2VzIHBhc3NpbmcgdmFsdWUgdG8gbmV4dCBwcm9taXNlXG4gICAgICAgICAgZnVuY3Rpb24oY3VycmVudCwgbmV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dCh2YWx1ZSwgdXRpbHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIC8vIGNhbGwgaW5pdGlhbCBmaWx0ZXIsIHdpbGwgcmV0dXJuIGEgcHJvbWlzZVxuICAgICAgICAgIGluaXRpYWxGaWx0ZXIodmFsdWUsIHV0aWxzKVxuXG4gICAgICAgICAgLy8gYWxsIGV4ZWN1dGVkXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgYXBwbHlGaWx0ZXJzID0gZnVuY3Rpb24gYXBwbHlGaWx0ZXJzKGtleSwgdmFsdWUsIHV0aWxzKSB7XG4gICAgcmV0dXJuIGZpbHRlcnNcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24oZikge1xuICAgICAgICByZXR1cm4gZi5rZXkgPT09IGtleTtcbiAgICAgIH0pXG4gICAgICAubWFwKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgcmV0dXJuIGYuY2IodmFsdWUsIHV0aWxzKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIC8vIGFkZHMgYSBuZXcgZmlsdGVyIHRvIHRoZSBsaXN0XG4gIHZhciBhZGRGaWx0ZXIgPSBmdW5jdGlvbiBhZGRGaWx0ZXIoa2V5LCBjYikge1xuICAgIHJldHVybiBmaWx0ZXJzLnB1c2goeyBrZXk6IGtleSwgY2I6IGNiIH0pO1xuICB9O1xuXG4gIHZhciBleHRlbmREZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uIGV4dGVuZERlZmF1bHRPcHRpb25zKGFkZGl0aW9uYWxPcHRpb25zKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIGFkZGl0aW9uYWxPcHRpb25zKTtcbiAgfTtcblxuICB2YXIgZ2V0T3B0aW9ucyQxID0gZnVuY3Rpb24gZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zKTtcbiAgfTtcblxuICB2YXIgc2V0T3B0aW9ucyQxID0gZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRzKSB7XG4gICAgZm9yaW4ob3B0cywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgLy8ga2V5IGRvZXMgbm90IGV4aXN0LCBzbyB0aGlzIG9wdGlvbiBjYW5ub3QgYmUgc2V0XG4gICAgICBpZiAoIWRlZmF1bHRPcHRpb25zW2tleV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGVmYXVsdE9wdGlvbnNba2V5XVswXSA9IGdldFZhbHVlQnlUeXBlKFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgZGVmYXVsdE9wdGlvbnNba2V5XVswXSxcbiAgICAgICAgZGVmYXVsdE9wdGlvbnNba2V5XVsxXVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBkZWZhdWx0IG9wdGlvbnMgb24gYXBwXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAvLyB0aGUgaWQgdG8gYWRkIHRvIHRoZSByb290IGVsZW1lbnRcbiAgICBpZDogW251bGwsIFR5cGUuU1RSSU5HXSxcblxuICAgIC8vIGlucHV0IGZpZWxkIG5hbWUgdG8gdXNlXG4gICAgbmFtZTogWydmaWxlcG9uZCcsIFR5cGUuU1RSSU5HXSxcblxuICAgIC8vIGNsYXNzbmFtZSB0byBwdXQgb24gd3JhcHBlclxuICAgIGNsYXNzTmFtZTogW251bGwsIFR5cGUuU1RSSU5HXSxcblxuICAgIC8vIGlzIHRoZSBmaWVsZCByZXF1aXJlZFxuICAgIHJlcXVpcmVkOiBbZmFsc2UsIFR5cGUuQk9PTEVBTl0sXG5cbiAgICAvLyBBbGxvdyBtZWRpYSBjYXB0dXJlIHdoZW4gdmFsdWUgaXMgc2V0XG4gICAgY2FwdHVyZU1ldGhvZDogW251bGwsIFR5cGUuU1RSSU5HXSxcbiAgICAvLyAtIFwiY2FtZXJhXCIsIFwibWljcm9waG9uZVwiIG9yIFwiY2FtY29yZGVyXCIsXG4gICAgLy8gLSBEb2VzIG5vdCB3b3JrIHdpdGggbXVsdGlwbGUgb24gYXBwbGUgZGV2aWNlc1xuICAgIC8vIC0gSWYgc2V0LCBhY2NlcHRlZEZpbGVUeXBlcyBtdXN0IGJlIG1hZGUgdG8gbWF0Y2ggd2l0aCBtZWRpYSB3aWxkY2FyZCBcImltYWdlLypcIiwgXCJhdWRpby8qXCIgb3IgXCJ2aWRlby8qXCJcblxuICAgIC8vIEZlYXR1cmUgdG9nZ2xlc1xuICAgIGFsbG93RHJvcDogW3RydWUsIFR5cGUuQk9PTEVBTl0sIC8vIEFsbG93IGRyb3BwaW5nIG9mIGZpbGVzXG4gICAgYWxsb3dCcm93c2U6IFt0cnVlLCBUeXBlLkJPT0xFQU5dLCAvLyBBbGxvdyBicm93c2luZyB0aGUgZmlsZSBzeXN0ZW1cbiAgICBhbGxvd1Bhc3RlOiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSwgLy8gQWxsb3cgcGFzdGluZyBmaWxlc1xuICAgIGFsbG93TXVsdGlwbGU6IFtmYWxzZSwgVHlwZS5CT09MRUFOXSwgLy8gQWxsb3cgbXVsdGlwbGUgZmlsZXMgKGRpc2FibGVkIGJ5IGRlZmF1bHQsIGFzIG11bHRpcGxlIGF0dHJpYnV0ZSBpcyBhbHNvIHJlcXVpcmVkIG9uIGlucHV0IHRvIGFsbG93IG11bHRpcGxlKVxuICAgIGFsbG93UmVwbGFjZTogW3RydWUsIFR5cGUuQk9PTEVBTl0sIC8vIEFsbG93IGRyb3BwaW5nIGEgZmlsZSBvbiBvdGhlciBmaWxlIHRvIHJlcGxhY2UgaXQgKG9ubHkgd29ya3Mgd2hlbiBtdWx0aXBsZSBpcyBzZXQgdG8gZmFsc2UpXG4gICAgYWxsb3dSZXZlcnQ6IFt0cnVlLCBUeXBlLkJPT0xFQU5dLCAvLyBBbGxvd3MgdXNlciB0byByZXZlcnQgZmlsZSB1cGxvYWRcbiAgICAvLyBUT0RPOiBhbGxvd0RyYWc6IFt0cnVlLCBUeXBlLkJPT0xFQU5dLFx0XHRcdFx0XHQvLyBBbGxvdyBkcmFnZ2luZyBmaWxlc1xuICAgIC8vIFRPRE86IGFsbG93U3dpcGU6IFt0cnVlLCBUeXBlLkJPT0xFQU5dLFx0XHRcdFx0XHQvLyBBbGxvdyBzd2lwZSB0byByZW1vdmUgZmlsZXNcbiAgICAvLyBUT0RPOiBhbGxvd1JlbW92ZUFsbDogW3RydWUsIFR5cGUuQk9PTEVBTl0sXHRcdFx0XHQvLyBBbGxvdyByZW1vdmluZyBhbGwgaXRlbXMgYXQgb25jZVxuICAgIC8vIFRPRE86IGFsbG93VXBsb2FkQWxsOiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSxcdFx0XHRcdC8vIEFsbG93IHVwbG9hZGluZyBhbGwgaXRlbXMgYXQgb25jZVxuXG4gICAgLy8gSW5wdXQgcmVxdWlyZW1lbnRzXG4gICAgbWF4RmlsZXM6IFtudWxsLCBUeXBlLklOVF0sIC8vIE1heCBudW1iZXIgb2YgZmlsZXNcblxuICAgIC8vIERyYWcgJ24gRHJvcCByZWxhdGVkXG4gICAgZHJvcE9uUGFnZTogW2ZhbHNlLCBUeXBlLkJPT0xFQU5dLCAvLyBBbGxvdyBkcm9wcGluZyBvZiBmaWxlcyBhbnl3aGVyZSBvbiBwYWdlIChwcmV2ZW50cyBicm93c2VyIGZyb20gb3BlbmluZyBmaWxlIGlmIGRyb3BwZWQgb3V0c2lkZSBvZiBVcClcbiAgICBkcm9wT25FbGVtZW50OiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSwgLy8gRHJvcCBuZWVkcyB0byBoYXBwZW4gb24gZWxlbWVudCAoc2V0IHRvIGZhbHNlIHRvIGFsc28gbG9hZCBkcm9wcyBvdXRzaWRlIG9mIFVwKVxuICAgIGRyb3BWYWxpZGF0aW9uOiBbZmFsc2UsIFR5cGUuQk9PTEVBTl0sIC8vIEVuYWJsZSBvciBkaXNhYmxlIHZhbGlkYXRpbmcgZmlsZXMgb24gZHJvcFxuICAgIGlnbm9yZWRGaWxlczogW1snLmRzX3N0b3JlJywgJ3RodW1icy5kYicsICdkZXNrdG9wLmluaSddLCBUeXBlLkFSUkFZXSxcbiAgICAvLyBjYXRjaERpcmVjdG9yaWVzOiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSxcdFx0XHRcdFx0Ly8gQWxsb3cgZHJvcHBpbmcgZGlyZWN0b3JpZXMgaW4gbW9kZXJuIGJyb3dzZXJzXG5cbiAgICAvLyBVcGxvYWQgcmVsYXRlZFxuICAgIGluc3RhbnRVcGxvYWQ6IFt0cnVlLCBUeXBlLkJPT0xFQU5dLCAvLyBTaG91bGQgdXBsb2FkIGZpbGVzIGltbWlkaWF0ZWx5IG9uIGRyb3BcbiAgICAvLyBUT0RPOiBwYXJhbGxlbDogWzEsIFR5cGUuSU5UXSxcdFx0XHRcdFx0XHRcdC8vIE1heGltdW0gZmlsZXMgdG8gdXBsb2FkIGluIHBhcmFsbGVsXG4gICAgLy8gVE9ETzogY2h1bmtzOiBbZmFsc2UsIFR5cGUuQk9PTEVBTl0sXHRcdFx0XHRcdFx0Ly8gVXNlIGNodW5rIHVwbG9hZGluZ1xuICAgIC8vIFRPRE86IGNodW5rU2l6ZTogWy41ICogKDEwMjQgKiAxMDI0KSwgVHlwZS5JTlRdLFx0XHRcdC8vIFVwbG9hZCBpbiA1MTJLQiBjaHVua3NcblxuICAgIC8vIGJ5IGRlZmF1bHQgbm8gYXN5bmMgYXBpIGlzIHN1cHBsaWVkXG4gICAgLyogZXhwZWN0ZWQgZm9ybWF0XG4gICAge1xuICAgIHVybDogJycsXG4gICAgdGltZW91dDogMTAwMCxcbiAgICBwcm9jZXNzOiB7XG4gICAgdXJsOiAnJyxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgIGhlYWRlcnM6IHt9XG4gICAgfSxcbiAgICByZXZlcnQ6IHtcbiAgICB1cmw6ICcnLFxuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICBoZWFkZXJzOiB7fVxuICAgIH0sXG4gICAgZmV0Y2g6IHtcbiAgICB1cmw6ICcnLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICBoZWFkZXJzOiB7fVxuICAgIH0sXG4gICAgcmVzdG9yZToge1xuICAgIHVybDogJycsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgIGhlYWRlcnM6IHt9XG4gICAgfVxuICAgIH1cbiAgICAqL1xuICAgIHNlcnZlcjogW251bGwsIFR5cGUuU0VSVkVSX0FQSV0sXG5cbiAgICAvLyBMYWJlbHMgYW5kIHN0YXR1cyBtZXNzYWdlc1xuICAgIGxhYmVsRGVjaW1hbFNlcGFyYXRvcjogW2dldERlY2ltYWxTZXBhcmF0b3IoKSwgVHlwZS5TVFJJTkddLCAvLyBEZWZhdWx0IGlzIGxvY2FsZSBzZXBhcmF0b3JcbiAgICBsYWJlbFRob3VzYW5kc1NlcGFyYXRvcjogW2dldFRob3VzYW5kc1NlcGFyYXRvcigpLCBUeXBlLlNUUklOR10sIC8vIERlZmF1bHQgaXMgbG9jYWxlIHNlcGFyYXRvclxuXG4gICAgbGFiZWxJZGxlOiBbXG4gICAgICAnRHJhZyAmIERyb3AgeW91ciBmaWxlcyBvciA8c3BhbiBjbGFzcz1cImZpbGVwb25kLS1sYWJlbC1hY3Rpb25cIj5Ccm93c2U8L3NwYW4+JyxcbiAgICAgIFR5cGUuU1RSSU5HXG4gICAgXSxcblxuICAgIGxhYmVsRmlsZVdhaXRpbmdGb3JTaXplOiBbJ1dhaXRpbmcgZm9yIHNpemUnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxGaWxlU2l6ZU5vdEF2YWlsYWJsZTogWydTaXplIG5vdCBhdmFpbGFibGUnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxGaWxlQ291bnRTaW5ndWxhcjogWydmaWxlIGluIGxpc3QnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxGaWxlQ291bnRQbHVyYWw6IFsnZmlsZXMgaW4gbGlzdCcsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEZpbGVMb2FkaW5nOiBbJ0xvYWRpbmcnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxGaWxlQWRkZWQ6IFsnQWRkZWQnLCBUeXBlLlNUUklOR10sIC8vIGFzc2lzdGl2ZSBvbmx5XG4gICAgbGFiZWxGaWxlUmVtb3ZlZDogWydSZW1vdmVkJywgVHlwZS5TVFJJTkddLCAvLyBhc3Npc3RpdmUgb25seVxuICAgIGxhYmVsRmlsZUxvYWRFcnJvcjogWydFcnJvciBkdXJpbmcgbG9hZCcsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEZpbGVQcm9jZXNzaW5nOiBbJ1VwbG9hZGluZycsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEZpbGVQcm9jZXNzaW5nQ29tcGxldGU6IFsnVXBsb2FkIGNvbXBsZXRlJywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsRmlsZVByb2Nlc3NpbmdBYm9ydGVkOiBbJ1VwbG9hZCBjYW5jZWxsZWQnLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxGaWxlUHJvY2Vzc2luZ0Vycm9yOiBbJ0Vycm9yIGR1cmluZyB1cGxvYWQnLCBUeXBlLlNUUklOR10sXG4gICAgLy8gbGFiZWxGaWxlUHJvY2Vzc2luZ1BhdXNlZDogWydVcGxvYWQgcGF1c2VkJywgVHlwZS5TVFJJTkddLFxuXG4gICAgbGFiZWxUYXBUb0NhbmNlbDogWyd0YXAgdG8gY2FuY2VsJywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsVGFwVG9SZXRyeTogWyd0YXAgdG8gcmV0cnknLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxUYXBUb1VuZG86IFsndGFwIHRvIHVuZG8nLCBUeXBlLlNUUklOR10sXG4gICAgLy8gbGFiZWxUYXBUb1BhdXNlOiBbJ3RhcCB0byBwYXVzZScsIFR5cGUuU1RSSU5HXSxcbiAgICAvLyBsYWJlbFRhcFRvUmVzdW1lOiBbJ3RhcCB0byByZXN1bWUnLCBUeXBlLlNUUklOR10sXG5cbiAgICBsYWJlbEJ1dHRvblJlbW92ZUl0ZW06IFsnUmVtb3ZlJywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsQnV0dG9uQWJvcnRJdGVtTG9hZDogWydBYm9ydCcsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEJ1dHRvblJldHJ5SXRlbUxvYWQ6IFsnUmV0cnknLCBUeXBlLlNUUklOR10sXG4gICAgbGFiZWxCdXR0b25BYm9ydEl0ZW1Qcm9jZXNzaW5nOiBbJ0NhbmNlbCcsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEJ1dHRvblVuZG9JdGVtUHJvY2Vzc2luZzogWydVbmRvJywgVHlwZS5TVFJJTkddLFxuICAgIGxhYmVsQnV0dG9uUmV0cnlJdGVtUHJvY2Vzc2luZzogWydSZXRyeScsIFR5cGUuU1RSSU5HXSxcbiAgICBsYWJlbEJ1dHRvblByb2Nlc3NJdGVtOiBbJ1VwbG9hZCcsIFR5cGUuU1RSSU5HXSxcblxuICAgIC8vIG1ha2Ugc3VyZSB3aWR0aCBhbmQgaGVpZ2h0IHBsdXMgdmlld3BveCBhcmUgZXZlbiBudW1iZXJzIHNvIGljb25zIGFyZSBuaWNlbHkgY2VudGVyZWRcbiAgICBpY29uUmVtb3ZlOiBbXG4gICAgICAnPHN2ZyB3aWR0aD1cIjI2XCIgaGVpZ2h0PVwiMjZcIiB2aWV3Qm94PVwiMCAwIDI2IDI2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTEuNTg2IDEzbC0yLjI5MyAyLjI5M2ExIDEgMCAwIDAgMS40MTQgMS40MTRMMTMgMTQuNDE0bDIuMjkzIDIuMjkzYTEgMSAwIDAgMCAxLjQxNC0xLjQxNEwxNC40MTQgMTNsMi4yOTMtMi4yOTNhMSAxIDAgMCAwLTEuNDE0LTEuNDE0TDEzIDExLjU4NmwtMi4yOTMtMi4yOTNhMSAxIDAgMCAwLTEuNDE0IDEuNDE0TDExLjU4NiAxM3pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz48L3N2Zz4nLFxuICAgICAgVHlwZS5TVFJJTkdcbiAgICBdLFxuICAgIGljb25Qcm9jZXNzOiBbXG4gICAgICAnPHN2ZyB3aWR0aD1cIjI2XCIgaGVpZ2h0PVwiMjZcIiB2aWV3Qm94PVwiMCAwIDI2IDI2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTQgMTAuNDE0djMuNTg1YTEgMSAwIDAgMS0yIDB2LTMuNTg1bC0xLjI5MyAxLjI5M2ExIDEgMCAwIDEtMS40MTQtMS40MTVsMy0zYTEgMSAwIDAgMSAxLjQxNCAwbDMgM2ExIDEgMCAwIDEtMS40MTQgMS40MTVMMTQgMTAuNDE0ek05IDE4YTEgMSAwIDAgMSAwLTJoOGExIDEgMCAwIDEgMCAySDl6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JyxcbiAgICAgIFR5cGUuU1RSSU5HXG4gICAgXSxcbiAgICBpY29uUmV0cnk6IFtcbiAgICAgICc8c3ZnIHdpZHRoPVwiMjZcIiBoZWlnaHQ9XCIyNlwiIHZpZXdCb3g9XCIwIDAgMjYgMjZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xMC44MSA5LjE4NWwtLjAzOC4wMkE0Ljk5NyA0Ljk5NyAwIDAgMCA4IDEzLjY4M2E1IDUgMCAwIDAgNSA1IDUgNSAwIDAgMCA1LTUgMSAxIDAgMCAxIDIgMEE3IDcgMCAxIDEgOS43MjIgNy40OTZsLS44NDItLjIxYS45OTkuOTk5IDAgMSAxIC40ODQtMS45NGwzLjIzLjgwNmMuNTM1LjEzMy44Ni42NzUuNzMgMS4yMWwtLjgwNCAzLjIzM2EuOTk3Ljk5NyAwIDAgMS0xLjIxLjczLjk5Ny45OTcgMCAwIDEtLjczLTEuMjFsLjIzLS45Mjh2LS4wMDJ6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+PC9zdmc+JyxcbiAgICAgIFR5cGUuU1RSSU5HXG4gICAgXSxcbiAgICBpY29uVW5kbzogW1xuICAgICAgJzxzdmcgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjI2XCIgdmlld0JveD1cIjAgMCAyNiAyNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTkuMTg1IDEwLjgxbC4wMi0uMDM4QTQuOTk3IDQuOTk3IDAgMCAxIDEzLjY4MyA4YTUgNSAwIDAgMSA1IDUgNSA1IDAgMCAxLTUgNSAxIDEgMCAwIDAgMCAyQTcgNyAwIDEgMCA3LjQ5NiA5LjcyMmwtLjIxLS44NDJhLjk5OS45OTkgMCAxIDAtMS45NC40ODRsLjgwNiAzLjIzYy4xMzMuNTM1LjY3NS44NiAxLjIxLjczbDMuMjMzLS44MDNhLjk5Ny45OTcgMCAwIDAgLjczLTEuMjEuOTk3Ljk5NyAwIDAgMC0xLjIxLS43M2wtLjkyOC4yMy0uMDAyLS4wMDF6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+PC9zdmc+JyxcbiAgICAgIFR5cGUuU1RSSU5HXG4gICAgXSxcbiAgICBpY29uRG9uZTogW1xuICAgICAgJzxzdmcgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjI2XCIgdmlld0JveD1cIjAgMCAyNiAyNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE4LjI5MyA5LjI5M2ExIDEgMCAwIDEgMS40MTQgMS40MTRsLTcuMDAyIDdhMSAxIDAgMCAxLTEuNDE0IDBsLTMuOTk4LTRhMSAxIDAgMSAxIDEuNDE0LTEuNDE0TDEyIDE1LjU4Nmw2LjI5NC02LjI5M3pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz48L3N2Zz4nLFxuICAgICAgVHlwZS5TVFJJTkdcbiAgICBdLFxuXG4gICAgLy8gZXZlbnQgaGFuZGxlcnNcbiAgICBvbmluaXQ6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbndhcm5pbmc6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbmVycm9yOiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25hZGRmaWxlc3RhcnQ6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbmFkZGZpbGVwcm9ncmVzczogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIG9uYWRkZmlsZTogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIG9ucHJvY2Vzc2ZpbGVzdGFydDogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIG9ucHJvY2Vzc2ZpbGVwcm9ncmVzczogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIG9ucHJvY2Vzc2ZpbGVhYm9ydDogW251bGwsIFR5cGUuRlVOQ1RJT05dLFxuICAgIG9ucHJvY2Vzc2ZpbGVyZXZlcnQ6IFtudWxsLCBUeXBlLkZVTkNUSU9OXSxcbiAgICBvbnByb2Nlc3NmaWxlOiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG4gICAgb25yZW1vdmVmaWxlOiBbbnVsbCwgVHlwZS5GVU5DVElPTl0sXG5cbiAgICAvLyBjdXN0b20gaW5pdGlhbCBmaWxlcyBhcnJheVxuICAgIGZpbGVzOiBbW10sIFR5cGUuQVJSQVldXG4gIH07XG5cbiAgdmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfTtcblxuICB2YXIgZ2V0SXRlbUJ5UXVlcnkgPSBmdW5jdGlvbiBnZXRJdGVtQnlRdWVyeShpdGVtcywgcXVlcnkpIHtcbiAgICAvLyBqdXN0IHJldHVybiBmaXJzdCBpbmRleFxuICAgIGlmIChpc0VtcHR5KHF1ZXJ5KSkge1xuICAgICAgcmV0dXJuIGl0ZW1zWzBdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgLy8gcXVlcnkgaXMgaW5kZXhcbiAgICBpZiAoaXNJbnQocXVlcnkpKSB7XG4gICAgICByZXR1cm4gaXRlbXNbcXVlcnldIHx8IG51bGw7XG4gICAgfVxuXG4gICAgLy8gaWYgcXVlcnkgaXMgaXRlbSwgZ2V0IHRoZSBpZFxuICAgIGlmIChcbiAgICAgICh0eXBlb2YgcXVlcnkgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHF1ZXJ5KSkgPT09ICdvYmplY3QnXG4gICAgKSB7XG4gICAgICBxdWVyeSA9IHF1ZXJ5LmlkO1xuICAgIH1cblxuICAgIC8vIGFzc3VtZSBxdWVyeSBpcyBhIHN0cmluZyBhbmQgcmV0dXJuIGl0ZW0gYnkgaWRcbiAgICByZXR1cm4gKFxuICAgICAgaXRlbXMuZmluZChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmlkID09PSBxdWVyeTtcbiAgICAgIH0pIHx8IG51bGxcbiAgICApO1xuICB9O1xuXG4gIHZhciBxdWVyaWVzID0gZnVuY3Rpb24gcXVlcmllcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBHRVRfSVRFTTogZnVuY3Rpb24gR0VUX0lURU0ocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIGdldEl0ZW1CeVF1ZXJ5KHN0YXRlLml0ZW1zLCBxdWVyeSk7XG4gICAgICB9LFxuXG4gICAgICBHRVRfSVRFTVM6IGZ1bmN0aW9uIEdFVF9JVEVNUyhxdWVyeSkge1xuICAgICAgICByZXR1cm4gW10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KHN0YXRlLml0ZW1zKSk7XG4gICAgICB9LFxuXG4gICAgICBHRVRfSVRFTV9OQU1FOiBmdW5jdGlvbiBHRVRfSVRFTV9OQU1FKHF1ZXJ5KSB7XG4gICAgICAgIHZhciBpdGVtID0gZ2V0SXRlbUJ5UXVlcnkoc3RhdGUuaXRlbXMsIHF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmZpbGVuYW1lIDogbnVsbDtcbiAgICAgIH0sXG5cbiAgICAgIEdFVF9JVEVNX1NJWkU6IGZ1bmN0aW9uIEdFVF9JVEVNX1NJWkUocXVlcnkpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBnZXRJdGVtQnlRdWVyeShzdGF0ZS5pdGVtcywgcXVlcnkpO1xuICAgICAgICByZXR1cm4gaXRlbSA/IGl0ZW0uZmlsZVNpemUgOiBudWxsO1xuICAgICAgfSxcblxuICAgICAgR0VUX1RPVEFMX0lURU1TOiBmdW5jdGlvbiBHRVRfVE9UQUxfSVRFTVMoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5pdGVtcy5sZW5ndGg7XG4gICAgICB9LFxuXG4gICAgICBJU19BU1lOQzogZnVuY3Rpb24gSVNfQVNZTkMoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgaXNPYmplY3Qoc3RhdGUub3B0aW9ucy5zZXJ2ZXIpICYmXG4gICAgICAgICAgKGlzT2JqZWN0KHN0YXRlLm9wdGlvbnMuc2VydmVyLnByb2Nlc3MpIHx8XG4gICAgICAgICAgICBpc0Z1bmN0aW9uKHN0YXRlLm9wdGlvbnMuc2VydmVyLnByb2Nlc3MpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGdldEl0ZW1JbmRleEJ5UXVlcnkgPSBmdW5jdGlvbiBnZXRJdGVtSW5kZXhCeVF1ZXJ5KGl0ZW1zLCBxdWVyeSkge1xuICAgIC8vIGp1c3QgcmV0dXJuIGZpcnN0IGluZGV4XG4gICAgaWYgKGlzRW1wdHkocXVlcnkpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyBpbnZhbGlkIHF1ZXJpZXNcbiAgICBpZiAoIWlzU3RyaW5nKHF1ZXJ5KSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBpdGVtIGJ5IGlkIChvciAtMSBpZiBub3QgZm91bmQpXG4gICAgcmV0dXJuIGl0ZW1zLmZpbmRJbmRleChmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5pZCA9PT0gcXVlcnk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlbW92ZUluZGV4ID0gZnVuY3Rpb24gcmVtb3ZlSW5kZXgoYXJyLCBpbmRleCkge1xuICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICB2YXIgaGFzUm9vbUZvckl0ZW0gPSBmdW5jdGlvbiBoYXNSb29tRm9ySXRlbShzdGF0ZSkge1xuICAgIHZhciBjb3VudCA9IHN0YXRlLml0ZW1zLmxlbmd0aDtcblxuICAgIC8vIGlmIGNhbm5vdCBoYXZlIG11bHRpcGxlIGl0ZW1zLCB0byBhZGQgb25lIGl0ZW0gaXQgc2hvdWxkIGN1cnJlbnRseSBub3QgY29udGFpbiBpdGVtc1xuICAgIGlmICghc3RhdGUub3B0aW9ucy5hbGxvd011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gY291bnQgPT09IDA7XG4gICAgfVxuXG4gICAgLy8gaWYgYWxsb3dzIG11bHRpcGxlIGl0ZW1zLCB3ZSBjaGVjayBpZiBhIG1heCBpdGVtIGNvdW50IGhhcyBiZWVuIHNldCwgaWYgbm90LCB0aGVyZSdzIG5vIGxpbWl0XG4gICAgdmFyIG1heEZpbGVDb3VudCA9IHN0YXRlLm9wdGlvbnMubWF4RmlsZXM7XG4gICAgaWYgKG1heEZpbGVDb3VudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gd2UgY2hlY2sgaWYgdGhlIGN1cnJlbnQgY291bnQgaXMgc21hbGxlciB0aGFuIHRoZSBtYXggY291bnQsIGlmIHNvLCBhbm90aGVyIGZpbGUgY2FuIHN0aWxsIGJlIGFkZGVkXG4gICAgaWYgKGNvdW50IDwgbWF4RmlsZUNvdW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBubyBtb3JlIHJvb20gZm9yIGFub3RoZXIgZmlsZVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICB2YXIgbGltaXQgPSBmdW5jdGlvbiBsaW1pdCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4obWF4LCB2YWx1ZSksIG1pbik7XG4gIH07XG5cbiAgdmFyIGFycmF5SW5zZXJ0ID0gZnVuY3Rpb24gYXJyYXlJbnNlcnQoYXJyLCBpbmRleCwgaXRlbSkge1xuICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgfTtcblxuICB2YXIgaW5zZXJ0SXRlbSA9IGZ1bmN0aW9uIGluc2VydEl0ZW0oaXRlbXMsIGl0ZW0sIGluZGV4KSB7XG4gICAgaWYgKGlzRW1wdHkoaXRlbSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGlmIGluZGV4IGlzIHVuZGVmaW5lZCwgYXBwZW5kXG4gICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICAvLyBsaW1pdCB0aGUgaW5kZXggdG8gdGhlIHNpemUgb2YgdGhlIGl0ZW1zIGFycmF5XG4gICAgaW5kZXggPSBsaW1pdChpbmRleCwgMCwgaXRlbXMubGVuZ3RoKTtcblxuICAgIC8vIGFkZCBpdGVtIHRvIGFycmF5XG4gICAgYXJyYXlJbnNlcnQoaXRlbXMsIGluZGV4LCBpdGVtKTtcblxuICAgIC8vIGV4cG9zZVxuICAgIHJldHVybiBpdGVtO1xuICB9O1xuXG4gIHZhciBsZWZ0UGFkID0gZnVuY3Rpb24gbGVmdFBhZCh2YWx1ZSkge1xuICAgIHZhciBwYWRkaW5nID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG4gICAgcmV0dXJuIChwYWRkaW5nICsgdmFsdWUpLnNsaWNlKC1wYWRkaW5nLmxlbmd0aCk7XG4gIH07XG5cbiAgdmFyIGdldERhdGVTdHJpbmcgPSBmdW5jdGlvbiBnZXREYXRlU3RyaW5nKCkge1xuICAgIHZhciBkYXRlID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gYXJndW1lbnRzWzBdXG4gICAgICAgIDogbmV3IERhdGUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpICtcbiAgICAgICctJyArXG4gICAgICBsZWZ0UGFkKGRhdGUuZ2V0TW9udGgoKSArIDEsICcwMCcpICtcbiAgICAgICctJyArXG4gICAgICBsZWZ0UGFkKGRhdGUuZ2V0RGF0ZSgpLCAnMDAnKSArXG4gICAgICAnXycgK1xuICAgICAgbGVmdFBhZChkYXRlLmdldEhvdXJzKCksICcwMCcpICtcbiAgICAgICctJyArXG4gICAgICBsZWZ0UGFkKGRhdGUuZ2V0TWludXRlcygpLCAnMDAnKSArXG4gICAgICAnLScgK1xuICAgICAgbGVmdFBhZChkYXRlLmdldFNlY29uZHMoKSwgJzAwJylcbiAgICApO1xuICB9O1xuXG4gIHZhciBpc0Jhc2U2NERhdGFVUkkgPSBmdW5jdGlvbiBpc0Jhc2U2NERhdGFVUkkoc3RyKSB7XG4gICAgcmV0dXJuIC9eXFxzKmRhdGE6KFthLXpdK1xcL1thLXowLTktKy5dKyg7W2Etei1dKz1bYS16MC05LV0rKT8pPyg7YmFzZTY0KT8sKFthLXowLTkhJCYnLCgpKis7PVxcLS5ffjpAXFwvPyVcXHNdKilcXHMqJC9pLnRlc3QoXG4gICAgICBzdHJcbiAgICApO1xuICB9O1xuXG4gIHZhciBnZXRGaWxlbmFtZUZyb21VUkwgPSBmdW5jdGlvbiBnZXRGaWxlbmFtZUZyb21VUkwodXJsKSB7XG4gICAgcmV0dXJuIHVybFxuICAgICAgLnNwbGl0KCcvJylcbiAgICAgIC5wb3AoKVxuICAgICAgLnNwbGl0KCc/JylcbiAgICAgIC5zaGlmdCgpO1xuICB9O1xuXG4gIHZhciBnZXRFeHRlbnNpb25Gcm9tRmlsZW5hbWUgPSBmdW5jdGlvbiBnZXRFeHRlbnNpb25Gcm9tRmlsZW5hbWUobmFtZSkge1xuICAgIHJldHVybiBuYW1lLnNwbGl0KCcuJykucG9wKCk7XG4gIH07XG5cbiAgdmFyIGd1ZXNzdGltYXRlRXh0ZW5zaW9uID0gZnVuY3Rpb24gZ3Vlc3N0aW1hdGVFeHRlbnNpb24odHlwZSkge1xuICAgIC8vIGlmIG5vIGV4dGVuc2lvbiBzdXBwbGllZCwgZXhpdCBoZXJlXG4gICAgaWYgKHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8vIGdldCBzdWJ0eXBlXG4gICAgdmFyIHN1YnR5cGUgPSB0eXBlLnNwbGl0KCcvJykucG9wKCk7XG5cbiAgICAvLyBpcyBzdmcgc3VidHlwZVxuICAgIGlmICgvc3ZnLy50ZXN0KHN1YnR5cGUpKSB7XG4gICAgICByZXR1cm4gJ3N2Zyc7XG4gICAgfVxuXG4gICAgaWYgKC96aXB8Y29tcHJlc3NlZC8udGVzdChzdWJ0eXBlKSkge1xuICAgICAgcmV0dXJuICd6aXAnO1xuICAgIH1cblxuICAgIGlmICgvcGxhaW4vLnRlc3Qoc3VidHlwZSkpIHtcbiAgICAgIHJldHVybiAndHh0JztcbiAgICB9XG5cbiAgICBpZiAoL21zd29yZC8udGVzdChzdWJ0eXBlKSkge1xuICAgICAgcmV0dXJuICdkb2MnO1xuICAgIH1cblxuICAgIC8vIGlmIGlzIHZhbGlkIHN1YnR5cGVcbiAgICBpZiAoL1thLXpdKy8udGVzdChzdWJ0eXBlKSkge1xuICAgICAgLy8gYWx3YXlzIHVzZSBqcGcgZXh0ZW5zaW9uXG4gICAgICBpZiAoc3VidHlwZSA9PT0gJ2pwZWcnKSB7XG4gICAgICAgIHJldHVybiAnanBnJztcbiAgICAgIH1cblxuICAgICAgLy8gcmV0dXJuIHN1YnR5cGVcbiAgICAgIHJldHVybiBzdWJ0eXBlO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfTtcblxuICB2YXIgZ2V0RmlsZUZyb21CbG9iID0gZnVuY3Rpb24gZ2V0RmlsZUZyb21CbG9iKGJsb2IsIGZpbGVuYW1lKSB7XG4gICAgdmFyIHR5cGUgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICAgIHZhciBleHRlbnNpb24gPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBudWxsO1xuXG4gICAgdmFyIGZpbGUgPVxuICAgICAgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgID8gYmxvYi5zbGljZSgwLCBibG9iLnNpemUsIHR5cGUpXG4gICAgICAgIDogYmxvYi5zbGljZSgwLCBibG9iLnNpemUsIGJsb2IudHlwZSk7XG4gICAgZmlsZS5sYXN0TW9kaWZpZWREYXRlID0gbmV3IERhdGUoKTtcblxuICAgIC8vIGlmIGZpbGVuYW1lIHN1cHBsaWVkIGJ1dCBubyBleHRlbnNpb24gYW5kIGZpbGVuYW1lIGhhcyBleHRlbnNpb25cbiAgICBpZiAoZmlsZW5hbWUgJiYgZXh0ZW5zaW9uID09PSBudWxsICYmIGdldEV4dGVuc2lvbkZyb21GaWxlbmFtZShmaWxlbmFtZSkpIHtcbiAgICAgIGZpbGUubmFtZSA9IGZpbGVuYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHRlbnNpb24gPSBleHRlbnNpb24gfHwgZ3Vlc3N0aW1hdGVFeHRlbnNpb24oZmlsZS50eXBlKTtcbiAgICAgIGZpbGUubmFtZSA9IGZpbGVuYW1lICsgKGV4dGVuc2lvbiA/ICcuJyArIGV4dGVuc2lvbiA6ICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGU7XG4gIH07XG5cbiAgdmFyIGdldEJsb2JCdWlsZGVyID0gZnVuY3Rpb24gZ2V0QmxvYkJ1aWxkZXIoKSB7XG4gICAgcmV0dXJuICh3aW5kb3cuQmxvYkJ1aWxkZXIgPVxuICAgICAgd2luZG93LkJsb2JCdWlsZGVyIHx8XG4gICAgICB3aW5kb3cuV2ViS2l0QmxvYkJ1aWxkZXIgfHxcbiAgICAgIHdpbmRvdy5Nb3pCbG9iQnVpbGRlciB8fFxuICAgICAgd2luZG93Lk1TQmxvYkJ1aWxkZXIpO1xuICB9O1xuXG4gIHZhciBjcmVhdGVCbG9iID0gZnVuY3Rpb24gY3JlYXRlQmxvYihhcnJheUJ1ZmZlciwgbWltZVR5cGUpIHtcbiAgICB2YXIgQkIgPSBnZXRCbG9iQnVpbGRlcigpO1xuXG4gICAgaWYgKEJCKSB7XG4gICAgICB2YXIgYmIgPSBuZXcgQkIoKTtcbiAgICAgIGJiLmFwcGVuZChhcnJheUJ1ZmZlcik7XG4gICAgICByZXR1cm4gYmIuZ2V0QmxvYihtaW1lVHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0sIHtcbiAgICAgIHR5cGU6IG1pbWVUeXBlXG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGdldEJsb2JGcm9tQnl0ZVN0cmluZ1dpdGhNaW1lVHlwZSA9IGZ1bmN0aW9uIGdldEJsb2JGcm9tQnl0ZVN0cmluZ1dpdGhNaW1lVHlwZShcbiAgICBieXRlU3RyaW5nLFxuICAgIG1pbWVUeXBlXG4gICkge1xuICAgIHZhciBhYiA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgdmFyIGlhID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpYVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQmxvYihhYiwgbWltZVR5cGUpO1xuICB9O1xuXG4gIHZhciBnZXRNaW1lVHlwZUZyb21CYXNlNjREYXRhVVJJID0gZnVuY3Rpb24gZ2V0TWltZVR5cGVGcm9tQmFzZTY0RGF0YVVSSShcbiAgICBkYXRhVVJJXG4gICkge1xuICAgIHJldHVybiAoL15kYXRhOiguKyk7Ly5leGVjKGRhdGFVUkkpIHx8IFtdKVsxXSB8fCBudWxsO1xuICB9O1xuXG4gIHZhciBnZXRCYXNlNjREYXRhRnJvbUJhc2U2NERhdGFVUkkgPSBmdW5jdGlvbiBnZXRCYXNlNjREYXRhRnJvbUJhc2U2NERhdGFVUkkoXG4gICAgZGF0YVVSSVxuICApIHtcbiAgICAvLyBnZXQgZGF0YSBwYXJ0IG9mIHN0cmluZyAocmVtb3ZlIGRhdGE6aW1hZ2UvanBlZy4uLiwpXG4gICAgdmFyIGRhdGEgPSBkYXRhVVJJLnNwbGl0KCcsJylbMV07XG5cbiAgICAvLyByZW1vdmUgYW55IHdoaXRlc3BhY2UgYXMgdGhhdCBjYXVzZXMgSW52YWxpZENoYXJhY3RlckVycm9yIGluIElFXG4gICAgcmV0dXJuIGRhdGEucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgfTtcblxuICB2YXIgZ2V0Qnl0ZVN0cmluZ0Zyb21CYXNlNjREYXRhVVJJID0gZnVuY3Rpb24gZ2V0Qnl0ZVN0cmluZ0Zyb21CYXNlNjREYXRhVVJJKFxuICAgIGRhdGFVUklcbiAgKSB7XG4gICAgcmV0dXJuIGF0b2IoZ2V0QmFzZTY0RGF0YUZyb21CYXNlNjREYXRhVVJJKGRhdGFVUkkpKTtcbiAgfTtcblxuICB2YXIgZ2V0QmxvYkZyb21CYXNlNjREYXRhVVJJID0gZnVuY3Rpb24gZ2V0QmxvYkZyb21CYXNlNjREYXRhVVJJKGRhdGFVUkkpIHtcbiAgICB2YXIgbWltZVR5cGUgPSBnZXRNaW1lVHlwZUZyb21CYXNlNjREYXRhVVJJKGRhdGFVUkkpO1xuICAgIHZhciBieXRlU3RyaW5nID0gZ2V0Qnl0ZVN0cmluZ0Zyb21CYXNlNjREYXRhVVJJKGRhdGFVUkkpO1xuXG4gICAgcmV0dXJuIGdldEJsb2JGcm9tQnl0ZVN0cmluZ1dpdGhNaW1lVHlwZShieXRlU3RyaW5nLCBtaW1lVHlwZSk7XG4gIH07XG5cbiAgdmFyIGdldEZpbGVGcm9tQmFzZTY0RGF0YVVSSSA9IGZ1bmN0aW9uIGdldEZpbGVGcm9tQmFzZTY0RGF0YVVSSShcbiAgICBkYXRhVVJJLFxuICAgIGZpbGVuYW1lLFxuICAgIGV4dGVuc2lvblxuICApIHtcbiAgICByZXR1cm4gZ2V0RmlsZUZyb21CbG9iKFxuICAgICAgZ2V0QmxvYkZyb21CYXNlNjREYXRhVVJJKGRhdGFVUkkpLFxuICAgICAgZmlsZW5hbWUsXG4gICAgICBudWxsLFxuICAgICAgZXh0ZW5zaW9uXG4gICAgKTtcbiAgfTtcblxuICB2YXIgZ2V0RmlsZW5hbWVGcm9tSGVhZGVycyA9IGZ1bmN0aW9uIGdldEZpbGVuYW1lRnJvbUhlYWRlcnMoaGVhZGVycykge1xuICAgIHZhciByb3dzID0gaGVhZGVycy5zcGxpdCgnXFxuJyk7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgX2l0ZXJhdG9yID0gcm93c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwO1xuICAgICAgICAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTtcbiAgICAgICAgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWVcbiAgICAgICkge1xuICAgICAgICB2YXIgaGVhZGVyID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgdmFyIGRpcnR5RmlsZW5hbWUgPSBoZWFkZXIuc3BsaXQoJ2ZpbGVuYW1lPScpWzFdO1xuICAgICAgICBpZiAoIWRpcnR5RmlsZW5hbWUpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlydHlGaWxlbmFtZS5yZXBsYWNlKC9bXCInXSsvZywgJycpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHZhciByZW5hbWVGaWxlID0gZnVuY3Rpb24gcmVuYW1lRmlsZShmaWxlLCBuYW1lKSB7XG4gICAgdmFyIHJlbmFtZWRGaWxlID0gZmlsZS5zbGljZSgwLCBmaWxlLnNpemUsIGZpbGUudHlwZSk7XG4gICAgcmVuYW1lZEZpbGUubGFzdE1vZGlmaWVkRGF0ZSA9IGZpbGUubGFzdE1vZGlmaWVkRGF0ZTtcbiAgICByZW5hbWVkRmlsZS5uYW1lID0gbmFtZTtcbiAgICByZXR1cm4gcmVuYW1lZEZpbGU7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUZpbGVMb2FkZXIgPSBmdW5jdGlvbiBjcmVhdGVGaWxlTG9hZGVyKGZldGNoRm4pIHtcbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBzb3VyY2U6IG51bGwsXG4gICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICBwcm9ncmVzczogMCxcbiAgICAgIHNpemU6IG51bGwsXG4gICAgICB0aW1lc3RhbXA6IG51bGwsXG4gICAgICBkdXJhdGlvbjogMCxcbiAgICAgIHJlcXVlc3Q6IG51bGxcbiAgICB9O1xuXG4gICAgdmFyIGdldFByb2dyZXNzID0gZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MoKSB7XG4gICAgICByZXR1cm4gc3RhdGUucHJvZ3Jlc3M7XG4gICAgfTtcbiAgICB2YXIgYWJvcnQgPSBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICAgIGlmICghc3RhdGUucmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzdGF0ZS5yZXF1ZXN0LmFib3J0KCk7XG4gICAgfTtcblxuICAgIC8vIGxvYWQgc291cmNlXG4gICAgdmFyIGxvYWQgPSBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgLy8gZ2V0IHF1aWNrIHJlZmVyZW5jZVxuICAgICAgdmFyIHNvdXJjZSA9IHN0YXRlLnNvdXJjZTtcblxuICAgICAgYXBpLmZpcmUoJ2luaXQnLCBzb3VyY2UpO1xuXG4gICAgICAvLyBMb2FkIEZpbGVzXG4gICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgICBhcGkuZmlyZSgnbG9hZCcsIHNvdXJjZSk7XG4gICAgICB9IGVsc2UgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgLy8gTG9hZCBibG9icywgc2V0IGRlZmF1bHQgbmFtZSB0byBjdXJyZW50IGRhdGVcbiAgICAgICAgYXBpLmZpcmUoJ2xvYWQnLCBnZXRGaWxlRnJvbUJsb2Ioc291cmNlLCBnZXREYXRlU3RyaW5nKCkpKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNCYXNlNjREYXRhVVJJKHNvdXJjZSkpIHtcbiAgICAgICAgLy8gTG9hZCBiYXNlIDY0LCBzZXQgZGVmYXVsdCBuYW1lIHRvIGN1cnJlbnQgZGF0ZVxuICAgICAgICBhcGkuZmlyZSgnbG9hZCcsIGdldEZpbGVGcm9tQmFzZTY0RGF0YVVSSShzb3VyY2UsIGdldERhdGVTdHJpbmcoKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRGVhbCBhcyBpZiBpcyBleHRlcm5hbCBVUkwsIGxldCdzIGxvYWQgaXQhXG4gICAgICAgIGxvYWRVUkwoc291cmNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gbG9hZHMgYSB1cmxcbiAgICB2YXIgbG9hZFVSTCA9IGZ1bmN0aW9uIGxvYWRVUkwodXJsKSB7XG4gICAgICAvLyBpcyByZW1vdGUgdXJsIGFuZCBubyBmZXRjaCBtZXRob2Qgc3VwcGxpZWRcbiAgICAgIGlmICghZmV0Y2hGbikge1xuICAgICAgICBhcGkuZmlyZSgnZXJyb3InLCB7XG4gICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICBib2R5OiBcIkNhbid0IGxvYWQgVVJMXCIsXG4gICAgICAgICAgY29kZTogNDAwXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCByZXF1ZXN0IHN0YXJ0XG4gICAgICBzdGF0ZS50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgICAvLyBsb2FkIGZpbGVcbiAgICAgIHN0YXRlLnJlcXVlc3QgPSBmZXRjaEZuKFxuICAgICAgICB1cmwsXG4gICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgLy8gdXBkYXRlIGR1cmF0aW9uXG4gICAgICAgICAgc3RhdGUuZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gc3RhdGUudGltZXN0YW1wO1xuXG4gICAgICAgICAgLy8gZG9uZSFcbiAgICAgICAgICBzdGF0ZS5jb21wbGV0ZSA9IHRydWU7XG5cbiAgICAgICAgICAvLyB0dXJuIGJsb2IgcmVzcG9uc2UgaW50byBhIGZpbGVcbiAgICAgICAgICBpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGdldEZpbGVGcm9tQmxvYihcbiAgICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICAgIGdldEZpbGVuYW1lRnJvbVVSTCh1cmwpIHx8IGdldERhdGVTdHJpbmcoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcGkuZmlyZSgnbG9hZCcsIHJlc3BvbnNlIGluc3RhbmNlb2YgQmxvYiA/IHJlc3BvbnNlIDogcmVzcG9uc2UuYm9keSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgYXBpLmZpcmUoXG4gICAgICAgICAgICAnZXJyb3InLFxuICAgICAgICAgICAgdHlwZW9mIGVycm9yID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICBjb2RlOiAwLFxuICAgICAgICAgICAgICAgICAgYm9keTogZXJyb3JcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogZXJyb3JcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbihjb21wdXRhYmxlLCBjdXJyZW50LCB0b3RhbCkge1xuICAgICAgICAgIC8vIGNvbGxlY3RlZCBzb21lIG1ldGEgZGF0YSBhbHJlYWR5XG4gICAgICAgICAgaWYgKHRvdGFsKSB7XG4gICAgICAgICAgICBzdGF0ZS5zaXplID0gdG90YWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gdXBkYXRlIGR1cmF0aW9uXG4gICAgICAgICAgc3RhdGUuZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gc3RhdGUudGltZXN0YW1wO1xuXG4gICAgICAgICAgLy8gaWYgd2UgY2FuJ3QgY29tcHV0ZSBwcm9ncmVzcywgd2UncmUgbm90IGdvaW5nIHRvIGZpcmUgcHJvZ3Jlc3MgZXZlbnRzXG4gICAgICAgICAgaWYgKCFjb21wdXRhYmxlKSB7XG4gICAgICAgICAgICBzdGF0ZS5wcm9ncmVzcyA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gdXBkYXRlIHByb2dyZXNzIHBlcmNlbnRhZ2VcbiAgICAgICAgICBzdGF0ZS5wcm9ncmVzcyA9IGN1cnJlbnQgLyB0b3RhbDtcblxuICAgICAgICAgIC8vIGV4cG9zZVxuICAgICAgICAgIGFwaS5maXJlKCdwcm9ncmVzcycsIHN0YXRlLnByb2dyZXNzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYXBpLmZpcmUoJ2Fib3J0Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgYXBpLmZpcmUoJ21ldGEnLCB7XG4gICAgICAgICAgICBzaXplOiBzdGF0ZS5zaXplLFxuICAgICAgICAgICAgZmlsZW5hbWU6IGdldEZpbGVuYW1lRnJvbUhlYWRlcnMoXG4gICAgICAgICAgICAgIHR5cGVvZiByZXNwb25zZSA9PT0gJ3N0cmluZycgPyByZXNwb25zZSA6IHJlc3BvbnNlLmhlYWRlcnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgdmFyIGFwaSA9IF9leHRlbmRzKHt9LCBvbigpLCB7XG4gICAgICBzZXRTb3VyY2U6IGZ1bmN0aW9uIHNldFNvdXJjZShzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIChzdGF0ZS5zb3VyY2UgPSBzb3VyY2UpO1xuICAgICAgfSxcbiAgICAgIGdldFByb2dyZXNzOiBnZXRQcm9ncmVzcywgLy8gZmlsZSBsb2FkIHByb2dyZXNzXG4gICAgICBhYm9ydDogYWJvcnQsIC8vIGFib3J0IGZpbGUgbG9hZFxuICAgICAgbG9hZDogbG9hZCAvLyBzdGFydCBsb2FkXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXBpO1xuICB9O1xuXG4gIHZhciBjcmVhdGVSZXNwb25zZSA9IGZ1bmN0aW9uIGNyZWF0ZVJlc3BvbnNlKHR5cGUsIGNvZGUsIGJvZHksIGhlYWRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGNvZGU6IGNvZGUsXG4gICAgICBib2R5OiBib2R5LFxuICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgIH07XG4gIH07XG5cbiAgdmFyIHNlbmRSZXF1ZXN0ID0gZnVuY3Rpb24gc2VuZFJlcXVlc3QoZGF0YSwgdXJsLCBvcHRpb25zKSB7XG4gICAgdmFyIGFwaSA9IHtcbiAgICAgIG9uaGVhZGVyczogZnVuY3Rpb24gb25oZWFkZXJzKCkge30sXG4gICAgICBvbnByb2dyZXNzOiBmdW5jdGlvbiBvbnByb2dyZXNzKCkge30sXG4gICAgICBvbmxvYWQ6IGZ1bmN0aW9uIG9ubG9hZCgpIHt9LFxuICAgICAgb25lcnJvcjogZnVuY3Rpb24gb25lcnJvcigpIHt9LFxuICAgICAgb25hYm9ydDogZnVuY3Rpb24gb25hYm9ydCgpIHt9LFxuICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIHRpbWVvdXQgaWRlbnRpZmllciwgb25seSB1c2VkIHdoZW4gdGltZW91dCBpcyBkZWZpbmVkXG4gICAgdmFyIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgdmFyIHRpbWVkT3V0ID0gZmFsc2U7XG4gICAgdmFyIGFib3J0ZWQgPSBmYWxzZTtcbiAgICB2YXIgaGVhZGVyc1JlY2VpdmVkID0gZmFsc2U7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9ucyA9IF9leHRlbmRzKFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2VcbiAgICAgIH0sXG4gICAgICBvcHRpb25zXG4gICAgKTtcblxuICAgIC8vIGlmIG1ldGhvZCBpcyBHRVQsIGFkZCBhbnkgcmVjZWl2ZWQgZGF0YSB0byB1cmxcbiAgICBpZiAoL0dFVC9pLnRlc3Qob3B0aW9ucy5tZXRob2QpICYmIGRhdGEpIHtcbiAgICAgIC8vdXJsID0gYCR7IHVybCB9JHsgaGFzUXVlcnlTdHJpbmcodXJsKSA/ICcmJyA6ICc/JyB9ZGF0YT0keyBlbmNvZGVVUklDb21wb25lbnQodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnID8gZGF0YSA6IEpTT04uc3RyaW5naWZ5KGRhdGEpKSB9YDtcbiAgICAgIHVybCA9XG4gICAgICAgICcnICtcbiAgICAgICAgdXJsICtcbiAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyA/IGRhdGEgOiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSByZXF1ZXN0XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gcHJvZ3Jlc3Mgb2YgbG9hZFxuICAgIHZhciBwcm9jZXNzID0gL0dFVC9pLnRlc3Qob3B0aW9ucy5tZXRob2QpID8geGhyIDogeGhyLnVwbG9hZDtcbiAgICBwcm9jZXNzLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbihlKSB7XG4gICAgICAvLyBwcm9ncmVzcyBldmVudCByZWNlaXZlZCwgdGltZW91dCBubyBsb25nZXIgbmVlZGVkXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcblxuICAgICAgLy8gbm8gcHJvZ3Jlc3MgZXZlbnQgd2hlbiBhYm9ydGVkICggb25wcm9ncmVzcyBpcyBjYWxsZWQgb25jZSBhZnRlciBhYm9ydCgpIClcbiAgICAgIGlmIChhYm9ydGVkIHx8IHRpbWVkT3V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLm9ucHJvZ3Jlc3MoZS5sZW5ndGhDb21wdXRhYmxlLCBlLmxvYWRlZCwgZS50b3RhbCk7XG4gICAgfTtcblxuICAgIC8vIHRyaWVzIHRvIGdldCBoZWFkZXIgaW5mbyB0byB0aGUgYXBwIGFzIGZhc3QgYXMgcG9zc2libGVcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBub3QgaW50ZXJlc3RpbmcgaW4gdGhlc2Ugc3RhdGVzICgndW5zZW50JyBhbmQgJ29wZW5lbmQnIGFzIHRoZXkgZG9uJ3QgZ2l2ZSB1cyBhbnkgYWRkaXRpb25hbCBpbmZvKVxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlIDwgMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIG5vIHNlcnZlciByZXNwb25zZVxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB0aW1lb3V0IG5vIGxvbmdlciBuZWVkZWQgYXMgY29ubmVjdGlvbiBpcyBzZXR1cFxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG5cbiAgICAgIGlmIChoZWFkZXJzUmVjZWl2ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBoZWFkZXJzUmVjZWl2ZWQgPSB0cnVlO1xuXG4gICAgICAvLyB3ZSd2ZSBwcm9iYWJseSByZWNlaXZlZCBzb21lIHVzZWZ1bCBkYXRhIGluIHJlc3BvbnNlIGhlYWRlcnNcbiAgICAgIGFwaS5vbmhlYWRlcnMoXG4gICAgICAgIGNyZWF0ZVJlc3BvbnNlKCdoZWFkZXJzJywgeGhyLnN0YXR1cywgbnVsbCwgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gbG9hZCBzdWNjZXNzZnVsXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gaXMgY2xhc3NpZmllZCBhcyB2YWxpZCByZXNwb25zZVxuICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgYXBpLm9ubG9hZChcbiAgICAgICAgICBjcmVhdGVSZXNwb25zZShcbiAgICAgICAgICAgICdsb2FkJyxcbiAgICAgICAgICAgIHhoci5zdGF0dXMsXG4gICAgICAgICAgICB4aHIucmVzcG9uc2UsXG4gICAgICAgICAgICB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3QgYSB2YWxpZCByZXNwb25zZVxuICAgICAgICBhcGkub25lcnJvcihjcmVhdGVSZXNwb25zZSgnZXJyb3InLCB4aHIuc3RhdHVzLCB4aHIuc3RhdHVzVGV4dCkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBlcnJvciBkdXJpbmcgbG9hZFxuICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICBhcGkub25lcnJvcihjcmVhdGVSZXNwb25zZSgnZXJyb3InLCB4aHIuc3RhdHVzLCB4aHIuc3RhdHVzVGV4dCkpO1xuICAgIH07XG5cbiAgICAvLyByZXF1ZXN0IGFib3J0ZWRcbiAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRpbWVkT3V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFib3J0ZWQgPSB0cnVlO1xuICAgICAgYXBpLm9uYWJvcnQoKTtcbiAgICB9O1xuXG4gICAgLy8gc2V0IHRpbWVvdXQgaWYgZGVmaW5lZFxuICAgIGlmIChpc0ludChvcHRpb25zLnRpbWVvdXQpKSB7XG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB0aW1lZE91dCA9IHRydWU7XG4gICAgICAgIGFwaS5vbmVycm9yKGNyZWF0ZVJlc3BvbnNlKCdlcnJvcicsIDAsICd0aW1lb3V0JykpO1xuICAgICAgICBhcGkuYWJvcnQoKTtcbiAgICAgIH0sIG9wdGlvbnMudGltZW91dCk7XG4gICAgfVxuXG4gICAgLy8gYWRkIGhlYWRlcnNcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICB9KTtcblxuICAgIC8vIHNldCB0eXBlIG9mIHJlc3BvbnNlXG4gICAgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgfVxuXG4gICAgLy8gc2V0IGNyZWRlbnRpYWxzXG4gICAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBsZXQncyBzZW5kIG91ciBkYXRhXG4gICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICByZXR1cm4gYXBpO1xuICB9O1xuXG4gIHZhciBjcmVhdGVGZXRjaEZ1bmN0aW9uID0gZnVuY3Rpb24gY3JlYXRlRmV0Y2hGdW5jdGlvbigpIHtcbiAgICB2YXIgYXBpVXJsID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIGN1c3RvbSBoYW5kbGVyIChzaG91bGQgYWxzbyBoYW5kbGUgZmlsZSwgbG9hZCwgZXJyb3IsIHByb2dyZXNzIGFuZCBhYm9ydClcbiAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG5cbiAgICAvLyBubyBhY3Rpb24gc3VwcGxpZWRcbiAgICBpZiAoIWFjdGlvbiB8fCAhaXNTdHJpbmcoYWN0aW9uLnVybCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGludGVybmFsIGhhbmRsZXJcbiAgICByZXR1cm4gZnVuY3Rpb24odXJsLCBsb2FkLCBlcnJvciwgcHJvZ3Jlc3MsIGFib3J0LCBoZWFkZXJzKSB7XG4gICAgICAvLyBkbyBsb2NhbCBvciByZW1vdGUgcmVxdWVzdCBiYXNlZCBvbiBpZiB0aGUgdXJsIGlzIGV4dGVybmFsXG4gICAgICB2YXIgcmVxdWVzdCA9IHNlbmRSZXF1ZXN0KFxuICAgICAgICB1cmwsXG4gICAgICAgIGFwaVVybCArIGFjdGlvbi51cmwsXG4gICAgICAgIF9leHRlbmRzKHt9LCBhY3Rpb24sIHtcbiAgICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgLy8gdHVybiBibG9iIGludG8gYSBmaWxlXG4gICAgICAgIHJlc3BvbnNlLmJvZHkgPSBnZXRGaWxlRnJvbUJsb2IoXG4gICAgICAgICAgcmVzcG9uc2UuYm9keSxcbiAgICAgICAgICBnZXRGaWxlbmFtZUZyb21IZWFkZXJzKHJlc3BvbnNlLmhlYWRlcnMpIHx8XG4gICAgICAgICAgICBnZXRGaWxlbmFtZUZyb21VUkwodXJsKSB8fFxuICAgICAgICAgICAgZ2V0RGF0ZVN0cmluZygpXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gcGFzcyB1cGRhdGVkIHJlc3BvbnNlIHRvIGhhbmRsZXIgbWV0aG9kXG4gICAgICAgIGxvYWQocmVzcG9uc2UpO1xuICAgICAgfTtcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGVycm9yO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICByZXF1ZXN0Lm9uYWJvcnQgPSBhYm9ydDtcbiAgICAgIHJlcXVlc3Qub25oZWFkZXJzID0gaGVhZGVycztcblxuICAgICAgLy8gc2hvdWxkIHJldHVybiByZXF1ZXN0XG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9O1xuICB9O1xuXG4gIC8qXG5mdW5jdGlvbiBzaWduYXR1cmU6XG4gIChkYXRhLCBsb2FkLCBlcnJvciwgcHJvZ3Jlc3MsIGFib3J0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICBhYm9ydDooKSA9PiB7fVxuICB9XG59XG4qL1xuICB2YXIgY3JlYXRlUHJvY2Vzc29yRnVuY3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVQcm9jZXNzb3JGdW5jdGlvbigpIHtcbiAgICB2YXIgYXBpVXJsID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcbiAgICB2YXIgbmFtZSA9IGFyZ3VtZW50c1syXTtcblxuICAgIC8vIGN1c3RvbSBoYW5kbGVyIChzaG91bGQgYWxzbyBoYW5kbGUgZmlsZSwgbG9hZCwgZXJyb3IsIHByb2dyZXNzIGFuZCBhYm9ydClcbiAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKFxuICAgICAgICAgIHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwO1xuICAgICAgICAgIF9rZXkgPCBfbGVuO1xuICAgICAgICAgIF9rZXkrK1xuICAgICAgICApIHtcbiAgICAgICAgICBwYXJhbXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aW9uLmFwcGx5KHVuZGVmaW5lZCwgW25hbWVdLmNvbmNhdChwYXJhbXMpKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gbm8gYWN0aW9uIHN1cHBsaWVkXG4gICAgaWYgKCFhY3Rpb24gfHwgIWlzU3RyaW5nKGFjdGlvbi51cmwpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBpbnRlcm5hbCBoYW5kbGVyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGZpbGUsIG1ldGFkYXRhLCBsb2FkLCBlcnJvciwgcHJvZ3Jlc3MsIGFib3J0KSB7XG4gICAgICAvLyBubyBmaWxlIHJlY2VpdmVkXG4gICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBjcmVhdGUgZm9ybWRhdGEgb2JqZWN0XG4gICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLCBmaWxlLCBmaWxlLm5hbWUpO1xuXG4gICAgICAvLyBhZGQgbWV0YWRhdGEgdWRlciBzYW1lIG5hbWVcbiAgICAgIGlmIChpc09iamVjdChtZXRhZGF0YSkpIHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKG5hbWUsIEpTT04uc3RyaW5naWZ5KG1ldGFkYXRhKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNlbmQgcmVxdWVzdCBvYmplY3RcbiAgICAgIHZhciByZXF1ZXN0ID0gc2VuZFJlcXVlc3QoZm9ybURhdGEsIGFwaVVybCArIGFjdGlvbi51cmwsIGFjdGlvbik7XG4gICAgICByZXF1ZXN0Lm9ubG9hZCA9IGxvYWQ7XG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBlcnJvcjtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgcmVxdWVzdC5vbmFib3J0ID0gYWJvcnQ7XG5cbiAgICAgIC8vIHNob3VsZCByZXR1cm4gcmVxdWVzdFxuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfTtcbiAgfTtcblxuICAvKlxuIGZ1bmN0aW9uIHNpZ25hdHVyZTpcbiAodW5pcXVlRmlsZUlkLCBsb2FkLCBlcnJvcikgPT4geyB9XG4gKi9cbiAgdmFyIGNyZWF0ZVJldmVydEZ1bmN0aW9uID0gZnVuY3Rpb24gY3JlYXRlUmV2ZXJ0RnVuY3Rpb24oKSB7XG4gICAgdmFyIGFwaVVybCA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgICAvLyBpcyBjdXN0b20gaW1wbGVtZW50YXRpb25cbiAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG5cbiAgICAvLyBubyBhY3Rpb24gc3VwcGxpZWQsIHJldHVybiBzdHViIGZ1bmN0aW9uLCBpbnRlcmZhY2Ugd2lsbCB3b3JrLCBidXQgZmlsZSB3b24ndCBiZSByZW1vdmVkXG4gICAgaWYgKCFhY3Rpb24gfHwgIWlzU3RyaW5nKGFjdGlvbi51cmwpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odW5pcXVlRmlsZUlkLCBsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIGludGVybmFsIGltcGxlbWVudGF0aW9uXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHVuaXF1ZUZpbGVJZCwgbG9hZCwgZXJyb3IpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gc2VuZFJlcXVlc3QoXG4gICAgICAgIHVuaXF1ZUZpbGVJZCxcbiAgICAgICAgYXBpVXJsICsgYWN0aW9uLnVybCxcbiAgICAgICAgYWN0aW9uIC8vIGNvbnRhaW5zIG1ldGhvZCwgaGVhZGVycyBhbmQgd2l0aENyZWRlbnRpYWxzIHByb3BlcnRpZXNcbiAgICAgICk7XG4gICAgICByZXF1ZXN0Lm9ubG9hZCA9IGxvYWQ7XG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBlcnJvcjtcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGdldFJhbmRvbU51bWJlciA9IGZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcigpIHtcbiAgICB2YXIgbWluID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICB2YXIgbWF4ID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcbiAgICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xuICB9O1xuXG4gIHZhciBjcmVhdGVQZXJjZWl2ZWRQZXJmb3JtYW5jZVVwZGF0ZXIgPSBmdW5jdGlvbiBjcmVhdGVQZXJjZWl2ZWRQZXJmb3JtYW5jZVVwZGF0ZXIoXG4gICAgY2JcbiAgKSB7XG4gICAgdmFyIGR1cmF0aW9uID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTAwMDtcbiAgICB2YXIgdGlja01pbiA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDI1O1xuICAgIHZhciB0aWNrTWF4ID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogMjUwO1xuXG4gICAgdmFyIHRpbWVvdXQgPSBudWxsO1xuICAgIHZhciBzdGFydCA9IERhdGUubm93KCk7XG5cbiAgICB2YXIgdGljayA9IGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgICB2YXIgcnVudGltZSA9IERhdGUubm93KCkgLSBzdGFydDtcbiAgICAgIHZhciBkZWxheSA9IGdldFJhbmRvbU51bWJlcih0aWNrTWluLCB0aWNrTWF4KTtcblxuICAgICAgaWYgKHJ1bnRpbWUgKyBkZWxheSA+IGR1cmF0aW9uKSB7XG4gICAgICAgIGRlbGF5ID0gcnVudGltZSArIGRlbGF5IC0gZHVyYXRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9ncmVzcyA9IHJ1bnRpbWUgLyBkdXJhdGlvbjtcbiAgICAgIGlmIChwcm9ncmVzcyA+PSAxKSB7XG4gICAgICAgIGNiKDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNiKHByb2dyZXNzKTtcblxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQodGljaywgZGVsYXkpO1xuICAgIH07XG5cbiAgICB0aWNrKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY3JlYXRlRmlsZVByb2Nlc3NvciA9IGZ1bmN0aW9uIGNyZWF0ZUZpbGVQcm9jZXNzb3IocHJvY2Vzc0ZuKSB7XG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgcGVyY2VpdmVkUHJvZ3Jlc3M6IDAsXG4gICAgICBwZXJjZWl2ZWRQZXJmb3JtYW5jZVVwZGF0ZXI6IG51bGwsXG4gICAgICBwcm9ncmVzczogbnVsbCxcbiAgICAgIHRpbWVzdGFtcDogbnVsbCxcbiAgICAgIHBlcmNlaXZlZER1cmF0aW9uOiAwLFxuICAgICAgZHVyYXRpb246IDAsXG4gICAgICByZXF1ZXN0OiBudWxsLFxuICAgICAgcmVzcG9uc2U6IG51bGxcbiAgICB9O1xuXG4gICAgdmFyIHByb2Nlc3MgPSBmdW5jdGlvbiBwcm9jZXNzKGZpbGUsIG1ldGFkYXRhKSB7XG4gICAgICB2YXIgcHJvZ3Jlc3NGbiA9IGZ1bmN0aW9uIHByb2dyZXNzRm4oKSB7XG4gICAgICAgIC8vIHdlJ3ZlIG5vdCB5ZXQgc3RhcnRlZCB0aGUgcmVhbCBkb3dubG9hZCwgc3RvcCBoZXJlXG4gICAgICAgIC8vIHRoZSByZXF1ZXN0IG1pZ2h0IG5vdCBnbyB0aHJvdWdoLCBzZXJ2ZXIgdHJvdWJsZSwgc3R1ZmYgbGlrZSB0aGF0XG4gICAgICAgIC8vIGlmIHN0YXRlLnByb2dyZXNzIGlzIG51bGwsIHRoZSBzZXJ2ZXIgZG9lcyBub3QgYWxsb3cgY29tcHV0aW5nIHByb2dyZXNzXG4gICAgICAgIGlmIChzdGF0ZS5kdXJhdGlvbiA9PT0gMCB8fCBzdGF0ZS5wcm9ncmVzcyA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFzIHdlJ3JlIG5vdyBwcm9jZXNzaW5nLCBmaXJlIHRoZSBwcm9ncmVzcyBldmVudFxuICAgICAgICBhcGkuZmlyZSgncHJvZ3Jlc3MnLCBhcGkuZ2V0UHJvZ3Jlc3MoKSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgY29tcGxldGVGbiA9IGZ1bmN0aW9uIGNvbXBsZXRlRm4oKSB7XG4gICAgICAgIHN0YXRlLmNvbXBsZXRlID0gdHJ1ZTtcblxuICAgICAgICBhcGkuZmlyZSgnbG9hZCcsIHN0YXRlLnJlc3BvbnNlLmJvZHkpO1xuICAgICAgfTtcblxuICAgICAgLy8gbGV0J3Mgc3RhcnQgcHJvY2Vzc2luZ1xuICAgICAgYXBpLmZpcmUoJ3N0YXJ0Jyk7XG5cbiAgICAgIC8vIHNldCByZXF1ZXN0IHN0YXJ0XG4gICAgICBzdGF0ZS50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgICAvLyBjcmVhdGUgcGVyY2VpdmVkIHBlcmZvcm1hbmNlIHByb2dyZXNzIGluZGljYXRvclxuICAgICAgc3RhdGUucGVyY2VpdmVkUGVyZm9ybWFuY2VVcGRhdGVyID0gY3JlYXRlUGVyY2VpdmVkUGVyZm9ybWFuY2VVcGRhdGVyKFxuICAgICAgICBmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICAgIHN0YXRlLnBlcmNlaXZlZFByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgICAgc3RhdGUucGVyY2VpdmVkRHVyYXRpb24gPSBEYXRlLm5vdygpIC0gc3RhdGUudGltZXN0YW1wO1xuXG4gICAgICAgICAgcHJvZ3Jlc3NGbigpO1xuXG4gICAgICAgICAgLy8gaWYgZmFrZSBwcm9ncmVzcyBpcyBkb25lLCBhbmQgYSByZXNwb25zZSBoYXMgYmVlbiByZWNlaXZlZCxcbiAgICAgICAgICAvLyBhbmQgd2UndmUgbm90IHlldCBjYWxsZWQgdGhlIGNvbXBsZXRlIG1ldGhvZFxuICAgICAgICAgIGlmIChwcm9ncmVzcyA9PT0gMSAmJiBzdGF0ZS5yZXNwb25zZSAmJiAhc3RhdGUuY29tcGxldGUpIHtcbiAgICAgICAgICAgIGNvbXBsZXRlRm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHJhbmRvbSBkZWxheSBhcyBpbiBhIGxpc3Qgb2YgZmlsZXMgeW91IHN0YXJ0IG5vdGljaW5nXG4gICAgICAgIC8vIGZpbGVzIHVwbG9hZGluZyBhdCB0aGUgZXhhY3Qgc2FtZSBzcGVlZFxuICAgICAgICBnZXRSYW5kb21OdW1iZXIoNzUwLCAxNTAwKVxuICAgICAgKTtcblxuICAgICAgLy8gcmVtZW1iZXIgcmVxdWVzdCBzbyB3ZSBjYW4gYWJvcnQgaXQgbGF0ZXJcbiAgICAgIHN0YXRlLnJlcXVlc3QgPSBwcm9jZXNzRm4oXG4gICAgICAgIC8vIHRoZSBmaWxlIHRvIHByb2Nlc3NcbiAgICAgICAgZmlsZSxcblxuICAgICAgICAvLyB0aGUgbWV0YWRhdGEgdG8gc2VuZCBhbG9uZ1xuICAgICAgICBtZXRhZGF0YSxcblxuICAgICAgICAvLyBjYWxsYmFja3MgKGxvYWQsIGVycm9yLCBwcm9ncmVzcywgYWJvcnQpXG4gICAgICAgIC8vIGxvYWQgZXhwZWN0cyB0aGUgYm9keSB0byBiZSBhIHNlcnZlciBpZCBpZlxuICAgICAgICAvLyB5b3Ugd2FudCB0byBtYWtlIHVzZSBvZiByZXZlcnRcbiAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAvLyB3ZSBwdXQgdGhlIHJlc3BvbnNlIGluIHN0YXRlIHNvIHdlIGNhbiBhY2Nlc3NcbiAgICAgICAgICAvLyBpdCBvdXRzaWRlIG9mIHRoaXMgbWV0aG9kXG4gICAgICAgICAgc3RhdGUucmVzcG9uc2UgPVxuICAgICAgICAgICAgdHlwZW9mIHJlc3BvbnNlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdsb2FkJyxcbiAgICAgICAgICAgICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHJlc3BvbnNlLFxuICAgICAgICAgICAgICAgICAgaGVhZGVyczoge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogcmVzcG9uc2U7XG5cbiAgICAgICAgICAvLyB1cGRhdGUgZHVyYXRpb25cbiAgICAgICAgICBzdGF0ZS5kdXJhdGlvbiA9IERhdGUubm93KCkgLSBzdGF0ZS50aW1lc3RhbXA7XG5cbiAgICAgICAgICAvLyBmb3JjZSBwcm9ncmVzcyB0byAxIGFzIHdlJ3JlIG5vdyBkb25lXG4gICAgICAgICAgc3RhdGUucHJvZ3Jlc3MgPSAxO1xuXG4gICAgICAgICAgLy8gd2UgYXJlIHJlYWxseSBkb25lXG4gICAgICAgICAgLy8gaWYgcGVyY2VpdmVkIHByb2dyZXNzIGlzIDEgKCB3YWl0IGZvciBwZXJjZWl2ZWQgcHJvZ3Jlc3MgdG8gY29tcGxldGUgKVxuICAgICAgICAgIC8vIG9yIGlmIHNlcnZlciBkb2VzIG5vdCBzdXBwb3J0IHByb2dyZXNzICggbnVsbCApXG4gICAgICAgICAgaWYgKHN0YXRlLnBlcmNlaXZlZFByb2dyZXNzID09PSAxKSB7XG4gICAgICAgICAgICBjb21wbGV0ZUZuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGVycm9yIGlzIGV4cGVjdGVkIHRvIGJlIGFuIG9iamVjdCB3aXRoIHR5cGUsIGNvZGUsIGJvZHlcbiAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBjYW5jZWwgdXBkYXRlclxuICAgICAgICAgIHN0YXRlLnBlcmNlaXZlZFBlcmZvcm1hbmNlVXBkYXRlci5jbGVhcigpO1xuXG4gICAgICAgICAgLy8gdXBkYXRlIG90aGVycyBhYm91dCB0aGlzIGVycm9yXG4gICAgICAgICAgYXBpLmZpcmUoXG4gICAgICAgICAgICAnZXJyb3InLFxuICAgICAgICAgICAgdHlwZW9mIGVycm9yID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICBjb2RlOiAwLFxuICAgICAgICAgICAgICAgICAgYm9keTogZXJyb3JcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogZXJyb3JcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGFjdHVhbCBwcm9jZXNzaW5nIHByb2dyZXNzXG4gICAgICAgIGZ1bmN0aW9uKGNvbXB1dGFibGUsIGN1cnJlbnQsIHRvdGFsKSB7XG4gICAgICAgICAgLy8gdXBkYXRlIGFjdHVhbCBkdXJhdGlvblxuICAgICAgICAgIHN0YXRlLmR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHN0YXRlLnRpbWVzdGFtcDtcblxuICAgICAgICAgIC8vIHVwZGF0ZSBhY3R1YWwgcHJvZ3Jlc3NcbiAgICAgICAgICBzdGF0ZS5wcm9ncmVzcyA9IGNvbXB1dGFibGUgPyBjdXJyZW50IC8gdG90YWwgOiBudWxsO1xuXG4gICAgICAgICAgcHJvZ3Jlc3NGbigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGFib3J0IGRvZXMgbm90IGV4cGVjdCBhIHZhbHVlXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHN0b3AgdXBkYXRlclxuICAgICAgICAgIHN0YXRlLnBlcmNlaXZlZFBlcmZvcm1hbmNlVXBkYXRlci5jbGVhcigpO1xuXG4gICAgICAgICAgLy8gZmlyZSB0aGUgYWJvcnQgZXZlbnQgc28gd2UgY2FuIHN3aXRjaCB2aXN1YWxzXG4gICAgICAgICAgYXBpLmZpcmUoJ2Fib3J0Jyk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIHZhciBhYm9ydCA9IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgLy8gbm8gcmVxdWVzdCBydW5uaW5nLCBjYW4ndCBhYm9ydFxuICAgICAgaWYgKCFzdGF0ZS5yZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gc3RvcCB1cGRhdGVyXG4gICAgICBzdGF0ZS5wZXJjZWl2ZWRQZXJmb3JtYW5jZVVwZGF0ZXIuY2xlYXIoKTtcblxuICAgICAgLy8gYWJvcnQgYWN0dWFsIHJlcXVlc3RcbiAgICAgIHN0YXRlLnJlcXVlc3QuYWJvcnQoKTtcblxuICAgICAgLy8gaWYgaGFzIHJlc3BvbnNlIG9iamVjdCwgd2UndmUgY29tcGxldGVkIHRoZSByZXF1ZXN0XG4gICAgICBzdGF0ZS5jb21wbGV0ZSA9IHRydWU7XG5cbiAgICAgIC8vIG5vdyBhYm9ydGVkLCBpZiBzZXJ2ZXIgcmV0dXJuZWQgYSByZXNwb25zZSwgbGV0J3MgcGFzcyBpdCBhbG9uZ1xuICAgICAgYXBpLmZpcmUoJ2Fib3J0Jywgc3RhdGUucmVzcG9uc2UgPyBzdGF0ZS5yZXNwb25zZS5ib2R5IDogbnVsbCk7XG4gICAgfTtcblxuICAgIHZhciByZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgYWJvcnQoKTtcbiAgICAgIHN0YXRlLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICBzdGF0ZS5wZXJjZWl2ZWRQcm9ncmVzcyA9IDA7XG4gICAgICBzdGF0ZS5wcm9ncmVzcyA9IDA7XG4gICAgICBzdGF0ZS50aW1lc3RhbXAgPSBudWxsO1xuICAgICAgc3RhdGUucGVyY2VpdmVkRHVyYXRpb24gPSAwO1xuICAgICAgc3RhdGUuZHVyYXRpb24gPSAwO1xuICAgICAgc3RhdGUucmVxdWVzdCA9IG51bGw7XG4gICAgICBzdGF0ZS5yZXNwb25zZSA9IG51bGw7XG4gICAgfTtcblxuICAgIHZhciBnZXRQcm9ncmVzcyA9IGZ1bmN0aW9uIGdldFByb2dyZXNzKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnByb2dyZXNzXG4gICAgICAgID8gTWF0aC5taW4oc3RhdGUucHJvZ3Jlc3MsIHN0YXRlLnBlcmNlaXZlZFByb2dyZXNzKVxuICAgICAgICA6IG51bGw7XG4gICAgfTtcbiAgICB2YXIgZ2V0RHVyYXRpb24gPSBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbihzdGF0ZS5kdXJhdGlvbiwgc3RhdGUucGVyY2VpdmVkRHVyYXRpb24pO1xuICAgIH07XG5cbiAgICB2YXIgYXBpID0gX2V4dGVuZHMoe30sIG9uKCksIHtcbiAgICAgIHByb2Nlc3M6IHByb2Nlc3MsIC8vIHN0YXJ0IHByb2Nlc3NpbmcgZmlsZVxuICAgICAgYWJvcnQ6IGFib3J0LCAvLyBhYm9ydCBhY3RpdmUgcHJvY2VzcyByZXF1ZXN0XG4gICAgICBnZXRQcm9ncmVzczogZ2V0UHJvZ3Jlc3MsXG4gICAgICBnZXREdXJhdGlvbjogZ2V0RHVyYXRpb24sXG4gICAgICByZXNldDogcmVzZXRcbiAgICB9KTtcblxuICAgIHJldHVybiBhcGk7XG4gIH07XG5cbiAgdmFyIGdldEZpbGVuYW1lV2l0aG91dEV4dGVuc2lvbiA9IGZ1bmN0aW9uIGdldEZpbGVuYW1lV2l0aG91dEV4dGVuc2lvbihuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUuc3Vic3RyKDAsIG5hbWUubGFzdEluZGV4T2YoJy4nKSkgfHwgbmFtZTtcbiAgfTtcblxuICB2YXIgSXRlbVN0YXR1cyA9IHtcbiAgICBJTklUOiAxLFxuICAgIElETEU6IDIsXG4gICAgUFJPQ0VTU0lORzogMyxcbiAgICBQUk9DRVNTSU5HX1BBVVNFRDogNCxcbiAgICBQUk9DRVNTSU5HX0NPTVBMRVRFOiA1LFxuICAgIFBST0NFU1NJTkdfRVJST1I6IDYsXG4gICAgTE9BRElORzogNyxcbiAgICBMT0FEX0VSUk9SOiA4XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUZpbGVTdHViID0gZnVuY3Rpb24gY3JlYXRlRmlsZVN0dWIoc291cmNlKSB7XG4gICAgdmFyIGRhdGEgPSBbc291cmNlLm5hbWUsIHNvdXJjZS5zaXplLCBzb3VyY2UudHlwZV07XG5cbiAgICAvLyBpcyBibG9iIG9yIGJhc2U2NCwgdGhlbiB3ZSBuZWVkIHRvIHNldCB0aGUgbmFtZVxuICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBCbG9iIHx8IGlzQmFzZTY0RGF0YVVSSShzb3VyY2UpKSB7XG4gICAgICBkYXRhWzBdID0gZ2V0RGF0ZVN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAoaXNCYXNlNjREYXRhVVJJKHNvdXJjZSkpIHtcbiAgICAgIC8vIGlmIGlzIGJhc2U2NCBkYXRhIHVyaSB3ZSBuZWVkIHRvIGRldGVybWluZSB0aGUgYXZlcmFnZSBzaXplIGFuZCB0eXBlXG4gICAgICBkYXRhWzFdID0gc291cmNlLmxlbmd0aDtcbiAgICAgIGRhdGFbMl0gPSBnZXRNaW1lVHlwZUZyb21CYXNlNjREYXRhVVJJKHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICghKHNvdXJjZSBpbnN0YW5jZW9mIEZpbGUpKSB7XG4gICAgICAvLyB1cmxcbiAgICAgIGRhdGFbMF0gPSBnZXRGaWxlbmFtZUZyb21VUkwoc291cmNlKTtcbiAgICAgIGRhdGFbMV0gPSAwO1xuICAgICAgZGF0YVsyXSA9ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBkYXRhWzBdLFxuICAgICAgc2l6ZTogZGF0YVsxXSxcbiAgICAgIHR5cGU6IGRhdGFbMl1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBjcmVhdGVJdGVtID0gZnVuY3Rpb24gY3JlYXRlSXRlbSgpIHtcbiAgICB2YXIgc2VydmVyRmlsZVJlZmVyZW5jZSA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG5cbiAgICAvLyB1bmlxdWUgaWQgZm9yIHRoaXMgaXRlbSwgaXMgdXNlZCB0byBpZGVudGlmeSB0aGUgaXRlbSBhY3Jvc3Mgdmlld3NcbiAgICB2YXIgaWQgPSBnZXRVbmlxdWVJZCgpO1xuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgaXRlbSBzdGF0ZVxuICAgICAqL1xuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIC8vIG9yaWdpbmFsIHNvdXJjZVxuICAgICAgc291cmNlOiBudWxsLFxuXG4gICAgICAvLyBmaWxlIG1vZGVsIHJlZmVyZW5jZVxuICAgICAgZmlsZTogbnVsbCxcblxuICAgICAgLy8gaWQgb2YgZmlsZSBvbiBzZXJ2ZXJcbiAgICAgIHNlcnZlckZpbGVSZWZlcmVuY2U6IHNlcnZlckZpbGVSZWZlcmVuY2UsXG5cbiAgICAgIC8vIGN1cnJlbnQgaXRlbSBzdGF0dXNcbiAgICAgIHN0YXR1czogc2VydmVyRmlsZVJlZmVyZW5jZVxuICAgICAgICA/IEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19DT01QTEVURVxuICAgICAgICA6IEl0ZW1TdGF0dXMuSU5JVCxcblxuICAgICAgLy8gYWN0aXZlIHByb2Nlc3Nlc1xuICAgICAgYWN0aXZlTG9hZGVyOiBudWxsLFxuICAgICAgYWN0aXZlUHJvY2Vzc29yOiBudWxsXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEV4dGVybmFsbHkgYWRkZWQgaXRlbSBtZXRhZGF0YVxuICAgICAqL1xuICAgIHZhciBtZXRhZGF0YSA9IHt9O1xuXG4gICAgLy8gaXRlbSBkYXRhXG4gICAgdmFyIHNldFN0YXR1cyA9IGZ1bmN0aW9uIHNldFN0YXR1cyhzdGF0dXMpIHtcbiAgICAgIHJldHVybiAoc3RhdGUuc3RhdHVzID0gc3RhdHVzKTtcbiAgICB9O1xuXG4gICAgLy8gZmlsZSBkYXRhXG4gICAgdmFyIGdldEZpbGVFeHRlbnNpb24gPSBmdW5jdGlvbiBnZXRGaWxlRXh0ZW5zaW9uKCkge1xuICAgICAgcmV0dXJuIGdldEV4dGVuc2lvbkZyb21GaWxlbmFtZShzdGF0ZS5maWxlLm5hbWUpO1xuICAgIH07XG4gICAgdmFyIGdldEZpbGVUeXBlID0gZnVuY3Rpb24gZ2V0RmlsZVR5cGUoKSB7XG4gICAgICByZXR1cm4gc3RhdGUuZmlsZS50eXBlO1xuICAgIH07XG4gICAgdmFyIGdldEZpbGVTaXplID0gZnVuY3Rpb24gZ2V0RmlsZVNpemUoKSB7XG4gICAgICByZXR1cm4gc3RhdGUuZmlsZS5zaXplO1xuICAgIH07XG4gICAgdmFyIGdldEZpbGUgPSBmdW5jdGlvbiBnZXRGaWxlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmZpbGU7XG4gICAgfTtcblxuICAgIC8vIGxvYWRzIGZpbGVzXG4gICAgdmFyIGxvYWQgPSBmdW5jdGlvbiBsb2FkKHNvdXJjZSwgbG9hZGVyLCBvbmxvYWQpIHtcbiAgICAgIC8vIHJlbWVtYmVyIHRoZSBvcmlnaW5hbCBpdGVtIHNvdXJjZVxuICAgICAgc3RhdGUuc291cmNlID0gc291cmNlO1xuXG4gICAgICAvLyBzZXQgYSBzdHViIGZpbGUgb2JqZWN0IHdoaWxlIGxvYWRpbmcgdGhlIGFjdHVhbCBkYXRhXG4gICAgICBzdGF0ZS5maWxlID0gY3JlYXRlRmlsZVN0dWIoc291cmNlKTtcblxuICAgICAgLy8gc3RhcnRzIGxvYWRpbmdcbiAgICAgIGxvYWRlci5vbignaW5pdCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBhcGkuZmlyZSgnbG9hZC1pbml0Jyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gd2UnZXZlIHJlY2VpdmVkIGEgc2l6ZSBpbmRpY2F0aW9uLCBsZXQncyB1cGRhdGUgdGhlIHN0dWJcbiAgICAgIGxvYWRlci5vbignbWV0YScsIGZ1bmN0aW9uKG1ldGEpIHtcbiAgICAgICAgLy8gc2V0IHNpemUgb2YgZmlsZSBzdHViXG4gICAgICAgIHN0YXRlLmZpbGUuc2l6ZSA9IG1ldGEuc2l6ZTtcblxuICAgICAgICAvLyBzZXQgbmFtZSBvZiBmaWxlIHN0dWJcbiAgICAgICAgc3RhdGUuZmlsZS5maWxlbmFtZSA9IG1ldGEuZmlsZW5hbWU7XG5cbiAgICAgICAgLy8gc2l6ZSBoYXMgYmVlbiB1cGRhdGVkXG4gICAgICAgIGFwaS5maXJlKCdsb2FkLW1ldGEnKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyB0aGUgZmlsZSBpcyBub3cgbG9hZGluZyB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgcHJvZ3Jlc3MgaW5kaWNhdG9yc1xuICAgICAgbG9hZGVyLm9uKCdwcm9ncmVzcycsIGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICAgIHNldFN0YXR1cyhJdGVtU3RhdHVzLkxPQURJTkcpO1xuXG4gICAgICAgIGFwaS5maXJlKCdsb2FkLXByb2dyZXNzJywgcHJvZ3Jlc3MpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGFuIGVycm9yIHdhcyB0aHJvd24gd2hpbGUgbG9hZGluZyB0aGUgZmlsZSwgd2UgbmVlZCB0byBzd2l0Y2ggdG8gZXJyb3Igc3RhdGVcbiAgICAgIGxvYWRlci5vbignZXJyb3InLCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBzZXRTdGF0dXMoSXRlbVN0YXR1cy5MT0FEX0VSUk9SKTtcblxuICAgICAgICBhcGkuZmlyZSgnbG9hZC1yZXF1ZXN0LWVycm9yJywgZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHVzZXIgb3IgYW5vdGhlciBwcm9jZXNzIGFib3J0ZWQgdGhlIGZpbGUgbG9hZCAoY2Fubm90IHJldHJ5KVxuICAgICAgbG9hZGVyLm9uKCdhYm9ydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRTdGF0dXMoSXRlbVN0YXR1cy5JTklUKTtcblxuICAgICAgICBhcGkuZmlyZSgnbG9hZC1hYm9ydCcpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGRvbmUgbG9hZGluZ1xuICAgICAgbG9hZGVyLm9uKCdsb2FkJywgZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAvLyBhcyB3ZSd2ZSBub3cgbG9hZGVkIHRoZSBmaWxlIHRoZSBsb2FkZXIgaXMgbm8gbG9uZ2VyIHJlcXVpcmVkXG4gICAgICAgIHN0YXRlLmFjdGl2ZUxvYWRlciA9IG51bGw7XG5cbiAgICAgICAgLy8gY2FsbGVkIHdoZW4gZmlsZSBoYXMgbG9hZGVkIHN1Y2Nlc2Z1bGx5XG4gICAgICAgIHZhciBzdWNjZXNzID0gZnVuY3Rpb24gc3VjY2VzcyhyZXN1bHQpIHtcbiAgICAgICAgICAvLyBzZXQgKHBvc3NpYmx5KSB0cmFuc2Zvcm1lZCBmaWxlXG4gICAgICAgICAgc3RhdGUuZmlsZSA9IHJlc3VsdDtcblxuICAgICAgICAgIC8vIGZpbGUgcmVjZWl2ZWRcbiAgICAgICAgICBzZXRTdGF0dXMoSXRlbVN0YXR1cy5JRExFKTtcbiAgICAgICAgICBhcGkuZmlyZSgnbG9hZCcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBlcnJvciA9IGZ1bmN0aW9uIGVycm9yKHJlc3VsdCkge1xuICAgICAgICAgIC8vIHNldCBvcmlnaW5hbCBmaWxlXG4gICAgICAgICAgc3RhdGUuZmlsZSA9IGZpbGU7XG4gICAgICAgICAgYXBpLmZpcmUoJ2xvYWQtbWV0YScpO1xuXG4gICAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuTE9BRF9FUlJPUik7XG4gICAgICAgICAgYXBpLmZpcmUoJ2xvYWQtZmlsZS1lcnJvcicsIHJlc3VsdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gaWYgd2UgYWxyZWFkeSBoYXZlIGEgc2VydmVyIGZpbGUgcmVmZXJlbmNlLCB3ZSBkb24ndCBuZWVkIHRvIGNhbGwgdGhlIG9ubG9hZCBtZXRob2RcbiAgICAgICAgaWYgKHN0YXRlLnNlcnZlckZpbGVSZWZlcmVuY2UpIHtcbiAgICAgICAgICBzdWNjZXNzKGZpbGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vIHNlcnZlciBpZCwgbGV0J3MgZ2l2ZSB0aGlzIGZpbGUgdGhlIGZ1bGwgdHJlYXRtZW50XG4gICAgICAgIG9ubG9hZChmaWxlLCBzdWNjZXNzLCBlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gc2V0IGxvYWRlciBzb3VyY2UgZGF0YVxuICAgICAgbG9hZGVyLnNldFNvdXJjZShzb3VyY2UpO1xuXG4gICAgICAvLyBzZXQgYXMgYWN0aXZlIGxvYWRlclxuICAgICAgc3RhdGUuYWN0aXZlTG9hZGVyID0gbG9hZGVyO1xuXG4gICAgICAvLyBsb2FkIHRoZSBzb3VyY2UgZGF0YVxuICAgICAgbG9hZGVyLmxvYWQoKTtcbiAgICB9O1xuXG4gICAgLy8gZmlsZSBwcm9jZXNzb3JcbiAgICB2YXIgcHJvY2VzcyA9IGZ1bmN0aW9uIHByb2Nlc3MocHJvY2Vzc29yLCBvbnByb2Nlc3MpIHtcbiAgICAgIC8vIGlmIG5vIGZpbGUgbG9hZGVkIHdlJ2xsIHdhaXQgZm9yIHRoZSBsb2FkIGV2ZW50XG4gICAgICBpZiAoIShzdGF0ZS5maWxlIGluc3RhbmNlb2YgQmxvYikpIHtcbiAgICAgICAgYXBpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcHJvY2Vzcyhwcm9jZXNzb3IsIG9ucHJvY2Vzcyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHNldHVwIHByb2Nlc3NvclxuXG4gICAgICBwcm9jZXNzb3Iub24oJ2xvYWQnLCBmdW5jdGlvbihzZXJ2ZXJGaWxlUmVmZXJlbmNlKSB7XG4gICAgICAgIC8vIG5vIGxvbmdlciByZXF1aXJlZFxuICAgICAgICBzdGF0ZS5hY3RpdmVQcm9jZXNzb3IgPSBudWxsO1xuXG4gICAgICAgIC8vIG5lZWQgdGhpcyBpZCB0byBiZSBhYmxlIHRvIHJldmVyIHRoZSB1cGxvYWRcbiAgICAgICAgc3RhdGUuc2VydmVyRmlsZVJlZmVyZW5jZSA9IHNlcnZlckZpbGVSZWZlcmVuY2U7XG5cbiAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuUFJPQ0VTU0lOR19DT01QTEVURSk7XG4gICAgICAgIGFwaS5maXJlKCdwcm9jZXNzLWNvbXBsZXRlJywgc2VydmVyRmlsZVJlZmVyZW5jZSk7XG4gICAgICB9KTtcblxuICAgICAgcHJvY2Vzc29yLm9uKCdzdGFydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBhcGkuZmlyZSgncHJvY2Vzcy1zdGFydCcpO1xuICAgICAgfSk7XG5cbiAgICAgIHByb2Nlc3Nvci5vbignZXJyb3InLCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBzdGF0ZS5hY3RpdmVQcm9jZXNzb3IgPSBudWxsO1xuICAgICAgICBzZXRTdGF0dXMoSXRlbVN0YXR1cy5QUk9DRVNTSU5HX0VSUk9SKTtcbiAgICAgICAgYXBpLmZpcmUoJ3Byb2Nlc3MtZXJyb3InLCBlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgcHJvY2Vzc29yLm9uKCdhYm9ydCcsIGZ1bmN0aW9uKHNlcnZlckZpbGVSZWZlcmVuY2UpIHtcbiAgICAgICAgc3RhdGUuYWN0aXZlUHJvY2Vzc29yID0gbnVsbDtcblxuICAgICAgICAvLyBpZiBmaWxlIHdhcyB1cGxvYWRlZCBidXQgcHJvY2Vzc2luZyB3YXMgY2FuY2VsbGVkIGR1cmluZyBwZXJjZWl2ZWQgcHJvY2Vzc29yIHRpbWUgc3RvcmUgZmlsZSByZWZlcmVuY2VcbiAgICAgICAgc3RhdGUuc2VydmVyRmlsZVJlZmVyZW5jZSA9IHNlcnZlckZpbGVSZWZlcmVuY2U7XG5cbiAgICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuSURMRSk7XG4gICAgICAgIGFwaS5maXJlKCdwcm9jZXNzLWFib3J0Jyk7XG4gICAgICB9KTtcblxuICAgICAgcHJvY2Vzc29yLm9uKCdwcm9ncmVzcycsIGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICAgIHNldFN0YXR1cyhJdGVtU3RhdHVzLlBST0NFU1NJTkcpO1xuICAgICAgICBhcGkuZmlyZSgncHJvY2Vzcy1wcm9ncmVzcycsIHByb2dyZXNzKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyB3aGVuIHN1Y2Nlc3NmdWxseSB0cmFuc2Zvcm1lZFxuICAgICAgdmFyIHN1Y2Nlc3MgPSBmdW5jdGlvbiBzdWNjZXNzKGZpbGUpIHtcbiAgICAgICAgcHJvY2Vzc29yLnByb2Nlc3MoZmlsZSwgX2V4dGVuZHMoe30sIG1ldGFkYXRhKSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgdHJhbnNmb3JtIHBoYXNlXG4gICAgICB2YXIgZXJyb3IgPSBmdW5jdGlvbiBlcnJvcihyZXN1bHQpIHt9O1xuXG4gICAgICAvLyBzdGFydCBwcm9jZXNzaW5nIHRoZSBmaWxlXG4gICAgICBvbnByb2Nlc3Moc3RhdGUuZmlsZSwgc3VjY2VzcywgZXJyb3IpO1xuXG4gICAgICAvLyBzZXQgYXMgYWN0aXZlIHByb2Nlc3NvclxuICAgICAgc3RhdGUuYWN0aXZlUHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIH07XG5cbiAgICB2YXIgcmV2ZXJ0ID0gZnVuY3Rpb24gcmV2ZXJ0KHJldmVydEZpbGVVcGxvYWQpIHtcbiAgICAgIC8vIGNhbm5vdCByZXZlcnQgd2l0aG91dCBhIHNlcnZlciBpZCBmb3IgdGhpcyBwcm9jZXNzXG4gICAgICBpZiAoc3RhdGUuc2VydmVyRmlsZVJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHJldmVydCB0aGUgdXBsb2FkIChmaXJlIGFuZCBmb3JnZXQpXG4gICAgICByZXZlcnRGaWxlVXBsb2FkKFxuICAgICAgICBzdGF0ZS5zZXJ2ZXJGaWxlUmVmZXJlbmNlLFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyByZXNldCBmaWxlIHNlcnZlciBpZCBhcyBub3cgaXQncyBubyBhdmFpbGFibGUgb24gdGhlIHNlcnZlclxuICAgICAgICAgIHN0YXRlLnNlcnZlckZpbGVSZWZlcmVuY2UgPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIFRPRE86IGhhbmRsZSByZXZlcnQgZXJyb3JcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgLy8gZmlyZSBldmVudFxuICAgICAgc2V0U3RhdHVzKEl0ZW1TdGF0dXMuSURMRSk7XG4gICAgICBhcGkuZmlyZSgncHJvY2Vzcy1yZXZlcnQnKTtcbiAgICB9O1xuXG4gICAgdmFyIGFib3J0TG9hZCA9IGZ1bmN0aW9uIGFib3J0TG9hZCgpIHtcbiAgICAgIGlmICghc3RhdGUuYWN0aXZlTG9hZGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmFjdGl2ZUxvYWRlci5hYm9ydCgpO1xuICAgIH07XG5cbiAgICB2YXIgcmV0cnlMb2FkID0gZnVuY3Rpb24gcmV0cnlMb2FkKCkge1xuICAgICAgaWYgKCFzdGF0ZS5hY3RpdmVMb2FkZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3RhdGUuYWN0aXZlTG9hZGVyLmxvYWQoKTtcbiAgICB9O1xuXG4gICAgdmFyIGFib3J0UHJvY2Vzc2luZyA9IGZ1bmN0aW9uIGFib3J0UHJvY2Vzc2luZygpIHtcbiAgICAgIGlmICghc3RhdGUuYWN0aXZlUHJvY2Vzc29yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmFjdGl2ZVByb2Nlc3Nvci5hYm9ydCgpO1xuICAgIH07XG5cbiAgICAvLyBleHBvc2VkIG1ldGhvZHNcblxuICAgIHZhciBhcGkgPSBfZXh0ZW5kcyhcbiAgICAgIHtcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZlcklkOiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuc2VydmVyRmlsZVJlZmVyZW5jZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnN0YXR1cztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZpbGVuYW1lOiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuZmlsZS5uYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmlsZW5hbWVXaXRob3V0RXh0ZW5zaW9uOiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZW5hbWVXaXRob3V0RXh0ZW5zaW9uKHN0YXRlLmZpbGUubmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmaWxlRXh0ZW5zaW9uOiB7IGdldDogZ2V0RmlsZUV4dGVuc2lvbiB9LFxuICAgICAgICBmaWxlVHlwZTogeyBnZXQ6IGdldEZpbGVUeXBlIH0sXG4gICAgICAgIGZpbGVTaXplOiB7IGdldDogZ2V0RmlsZVNpemUgfSxcbiAgICAgICAgZmlsZTogeyBnZXQ6IGdldEZpbGUgfSxcbiAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuc291cmNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXRNZXRhZGF0YTogZnVuY3Rpb24gZ2V0TWV0YWRhdGEobmFtZSkge1xuICAgICAgICAgIHJldHVybiBuYW1lID8gbWV0YWRhdGFbbmFtZV0gOiBfZXh0ZW5kcyh7fSwgbWV0YWRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRNZXRhZGF0YTogZnVuY3Rpb24gc2V0TWV0YWRhdGEobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gKG1ldGFkYXRhW25hbWVdID0gdmFsdWUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFib3J0TG9hZDogYWJvcnRMb2FkLFxuICAgICAgICByZXRyeUxvYWQ6IHJldHJ5TG9hZCxcbiAgICAgICAgYWJvcnRQcm9jZXNzaW5nOiBhYm9ydFByb2Nlc3NpbmcsXG5cbiAgICAgICAgbG9hZDogbG9hZCxcbiAgICAgICAgcHJvY2VzczogcHJvY2VzcyxcbiAgICAgICAgcmV2ZXJ0OiByZXZlcnRcbiAgICAgIH0sXG4gICAgICBvbigpXG4gICAgKTtcblxuICAgIHJldHVybiBjcmVhdGVPYmplY3QoYXBpKTtcbiAgfTtcblxuICB2YXIgZ2V0SXRlbUJ5SWQgPSBmdW5jdGlvbiBnZXRJdGVtQnlJZChpdGVtcywgaXRlbUlkKSB7XG4gICAgdmFyIGluZGV4ID0gZ2V0SXRlbUluZGV4QnlRdWVyeShpdGVtcywgaXRlbUlkKTtcbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBpdGVtc1tpbmRleF0gfHwgbnVsbDtcbiAgfTtcblxuICB2YXIgcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oaXRlbXMsIG5lZWRsZSkge1xuICAgIC8vIGdldCBpbmRleCBvZiBpdGVtXG4gICAgdmFyIGluZGV4ID0gaXRlbXMuZmluZEluZGV4KGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtID09PSBuZWVkbGU7XG4gICAgfSk7XG5cbiAgICAvLyByZW1vdmUgaXQgZnJvbSBhcnJheVxuICAgIHJlbW92ZUluZGV4KGl0ZW1zLCBpbmRleCk7XG5cbiAgICAvLyByZXR1cm4gcmVtb3ZlZCBpdGVtXG4gICAgcmV0dXJuIG5lZWRsZTtcbiAgfTtcblxuICB2YXIgZmV0Y2hMb2NhbCA9IGZ1bmN0aW9uIGZldGNoTG9jYWwoXG4gICAgdXJsLFxuICAgIGxvYWQsXG4gICAgZXJyb3IsXG4gICAgcHJvZ3Jlc3MsXG4gICAgYWJvcnQsXG4gICAgaGVhZGVyc1xuICApIHtcbiAgICB2YXIgcmVxdWVzdCA9IHNlbmRSZXF1ZXN0KG51bGwsIHVybCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgfSk7XG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgLy8gdHVybiBibG9iIGludG8gYSBmaWxlXG4gICAgICByZXNwb25zZS5ib2R5ID0gZ2V0RmlsZUZyb21CbG9iKFxuICAgICAgICByZXNwb25zZS5ib2R5LFxuICAgICAgICBnZXRGaWxlbmFtZUZyb21IZWFkZXJzKHJlc3BvbnNlLmhlYWRlcnMpIHx8XG4gICAgICAgICAgZ2V0RmlsZW5hbWVGcm9tVVJMKHVybCkgfHxcbiAgICAgICAgICBnZXREYXRlU3RyaW5nKClcbiAgICAgICk7XG5cbiAgICAgIC8vIHBhc3MgdXBkYXRlZCByZXNwb25zZSB0byBoYW5kbGVyIG1ldGhvZFxuICAgICAgbG9hZChyZXNwb25zZSk7XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBlcnJvcjtcbiAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBhYm9ydDtcbiAgICByZXF1ZXN0Lm9uaGVhZGVycyA9IGhlYWRlcnM7XG5cbiAgICAvLyBzaG91bGQgcmV0dXJuIHJlcXVlc3RcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfTtcblxuICB2YXIgZ2V0RG9tYWluRnJvbVVSTCA9IGZ1bmN0aW9uIGdldERvbWFpbkZyb21VUkwodXJsKSB7XG4gICAgaWYgKHVybC5pbmRleE9mKCcvLycpID09PSAwKSB7XG4gICAgICB1cmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIHVybDtcbiAgICB9XG4gICAgcmV0dXJuIHVybFxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5yZXBsYWNlKC8oW2Etel0pPzpcXC9cXC8vLCAnJDEnKVxuICAgICAgLnNwbGl0KCcvJylbMF07XG4gIH07XG5cbiAgdmFyIGlzRXh0ZXJuYWxVUkwgPSBmdW5jdGlvbiBpc0V4dGVybmFsVVJMKHVybCkge1xuICAgIHJldHVybiAoXG4gICAgICAodXJsLmluZGV4T2YoJzonKSA+IC0xIHx8IHVybC5pbmRleE9mKCcvLycpID4gLTEpICYmXG4gICAgICBnZXREb21haW5Gcm9tVVJMKGxvY2F0aW9uLmhyZWYpICE9PSBnZXREb21haW5Gcm9tVVJMKHVybClcbiAgICApO1xuICB9O1xuXG4gIC8vIHJldHVybnMgaXRlbSBiYXNlZCBvbiBzdGF0ZVxuICB2YXIgZ2V0SXRlbUJ5UXVlcnlGcm9tU3RhdGUgPSBmdW5jdGlvbiBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZShcbiAgICBzdGF0ZSxcbiAgICBpdGVtSGFuZGxlclxuICApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX3JlZiA9XG4gICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdXG4gICAgICAgICAgICA6IHt9LFxuICAgICAgICBxdWVyeSA9IF9yZWYucXVlcnksXG4gICAgICAgIF9yZWYkc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcbiAgICAgICAgc3VjY2VzcyA9IF9yZWYkc3VjY2VzcyA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24oKSB7fSA6IF9yZWYkc3VjY2VzcyxcbiAgICAgICAgX3JlZiRmYWlsdXJlID0gX3JlZi5mYWlsdXJlLFxuICAgICAgICBmYWlsdXJlID0gX3JlZiRmYWlsdXJlID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbigpIHt9IDogX3JlZiRmYWlsdXJlO1xuXG4gICAgICB2YXIgaXRlbSA9IGdldEl0ZW1CeVF1ZXJ5KHN0YXRlLml0ZW1zLCBxdWVyeSk7XG4gICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgZmFpbHVyZSh7XG4gICAgICAgICAgZXJyb3I6IGNyZWF0ZVJlc3BvbnNlKCdlcnJvcicsIDAsICdJdGVtIG5vdCBmb3VuZCcpLFxuICAgICAgICAgIGZpbGU6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGl0ZW1IYW5kbGVyKGl0ZW0sIHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGFjdGlvbnMgPSBmdW5jdGlvbiBhY3Rpb25zKGRpc3BhdGNoLCBxdWVyeSwgc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBBYm9ydHMgYWxsIG9uZ29pbmcgcHJvY2Vzc2VzXG4gICAgICAgKi9cbiAgICAgIEFCT1JUX0FMTDogZnVuY3Rpb24gQUJPUlRfQUxMKCkge1xuICAgICAgICBxdWVyeSgnR0VUX0lURU1TJykuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgaXRlbS5hYm9ydExvYWQoKTtcbiAgICAgICAgICBpdGVtLmFib3J0UHJvY2Vzc2luZygpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0cyBpbml0aWFsIGZpbGVzXG4gICAgICAgKi9cbiAgICAgIERJRF9TRVRfRklMRVM6IGZ1bmN0aW9uIERJRF9TRVRfRklMRVMoX3JlZjIpIHtcbiAgICAgICAgdmFyIF9yZWYyJHZhbHVlID0gX3JlZjIudmFsdWUsXG4gICAgICAgICAgdmFsdWUgPSBfcmVmMiR2YWx1ZSA9PT0gdW5kZWZpbmVkID8gW10gOiBfcmVmMiR2YWx1ZTtcblxuICAgICAgICAvLyBtYXAgdmFsdWVzIHRvIGZpbGUgb2JqZWN0c1xuICAgICAgICB2YXIgZmlsZXMgPSB2YWx1ZS5tYXAoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzb3VyY2U6IGZpbGUuc291cmNlID8gZmlsZS5zb3VyY2UgOiBmaWxlLFxuICAgICAgICAgICAgb3B0aW9uczogZmlsZS5vcHRpb25zXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbG9vcCBvdmVyIGZpbGVzLCBpZiBmaWxlIGlzIGluIGxpc3QsIGxlYXZlIGl0IGJlLCBpZiBub3QsIHJlbW92ZVxuXG4gICAgICAgIC8vIHRlc3QgaWYgaXRlbXMgc2hvdWxkIGJlIG1vdmVkXG4gICAgICAgIFtdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShzdGF0ZS5pdGVtcykpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIC8vIGlmIGl0ZW0gbm90IGlzIGluIG5ldyB2YWx1ZSwgcmVtb3ZlXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWZpbGVzLmZpbmQoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmlsZS5zb3VyY2UgPT09IGl0ZW0uc291cmNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdSRU1PVkVfSVRFTScsIHsgcXVlcnk6IGl0ZW0gfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgbmV3IGZpbGVzXG4gICAgICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24oZmlsZSwgaW5kZXgpIHtcbiAgICAgICAgICAvLyBpZiBmaWxlIGlzIGFscmVhZHkgaW4gbGlzdFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIFtdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShzdGF0ZS5pdGVtcykpLmZpbmQoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbS5zb3VyY2UgPT09IGZpbGUuc291cmNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBub3QgaW4gbGlzdCwgYWRkXG4gICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICAnQUREX0lURU0nLFxuICAgICAgICAgICAgX2V4dGVuZHMoe30sIGZpbGUsIHtcbiAgICAgICAgICAgICAgaW50ZXJhY3Rpb25NZXRob2Q6IEludGVyYWN0aW9uTWV0aG9kLk5PTkUsXG4gICAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHNvdXJjZVxuICAgICAgICogQHBhcmFtIGluZGV4XG4gICAgICAgKiBAcGFyYW0gaW50ZXJhY3Rpb25NZXRob2RcbiAgICAgICAqL1xuICAgICAgQUREX0lURU06IGZ1bmN0aW9uIEFERF9JVEVNKF9yZWYzKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBfcmVmMy5zb3VyY2UsXG4gICAgICAgICAgaW5kZXggPSBfcmVmMy5pbmRleCxcbiAgICAgICAgICBpbnRlcmFjdGlvbk1ldGhvZCA9IF9yZWYzLmludGVyYWN0aW9uTWV0aG9kLFxuICAgICAgICAgIF9yZWYzJHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxuICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMyRzdWNjZXNzID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbigpIHt9IDogX3JlZjMkc3VjY2VzcyxcbiAgICAgICAgICBfcmVmMyRmYWlsdXJlID0gX3JlZjMuZmFpbHVyZSxcbiAgICAgICAgICBmYWlsdXJlID0gX3JlZjMkZmFpbHVyZSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24oKSB7fSA6IF9yZWYzJGZhaWx1cmUsXG4gICAgICAgICAgX3JlZjMkb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG4gICAgICAgICAgb3B0aW9ucyA9IF9yZWYzJG9wdGlvbnMgPT09IHVuZGVmaW5lZCA/IHt9IDogX3JlZjMkb3B0aW9ucztcblxuICAgICAgICAvLyBpZiBubyBzb3VyY2Ugc3VwcGxpZWRcbiAgICAgICAgaWYgKGlzRW1wdHkoc291cmNlKSkge1xuICAgICAgICAgIGZhaWx1cmUoe1xuICAgICAgICAgICAgZXJyb3I6IGNyZWF0ZVJlc3BvbnNlKCdlcnJvcicsIDAsICdObyBzb3VyY2UnKSxcbiAgICAgICAgICAgIGZpbGU6IG51bGxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaWx0ZXIgb3V0IGludmFsaWQgZmlsZSBpdGVtcywgdXNlZCB0byBmaWx0ZXIgZHJvcHBlZCBkaXJlY3RvcnkgY29udGVudHNcbiAgICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgICBpZiAoc3RhdGUub3B0aW9ucy5pZ25vcmVkRmlsZXMuaW5jbHVkZXMoc291cmNlLm5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIC8vIGZhaWwgc2lsZW50bHlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0ZXN0IGlmIHRoZXJlJ3Mgc3RpbGwgcm9vbSBpbiB0aGUgbGlzdCBvZiBmaWxlc1xuICAgICAgICBpZiAoIWhhc1Jvb21Gb3JJdGVtKHN0YXRlKSkge1xuICAgICAgICAgIC8vIGlmIG11bHRpcGxlIGFsbG93ZWQsIHdlIGNhbid0IHJlcGxhY2VcbiAgICAgICAgICAvLyBvciBpZiBvbmx5IGEgc2luZ2xlIGl0ZW0gaXMgYWxsb3dlZCBidXQgd2UncmUgbm90IGFsbG93ZWQgdG8gcmVwbGFjZSBpdCB3ZSBleGl0XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgc3RhdGUub3B0aW9ucy5hbGxvd011bHRpcGxlIHx8XG4gICAgICAgICAgICAoIXN0YXRlLm9wdGlvbnMuYWxsb3dNdWx0aXBsZSAmJiAhc3RhdGUub3B0aW9ucy5hbGxvd1JlcGxhY2UpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBjcmVhdGVSZXNwb25zZSgnd2FybmluZycsIDAsICdNYXggZmlsZXMnKTtcblxuICAgICAgICAgICAgZGlzcGF0Y2goJ0RJRF9USFJPV19NQVhfRklMRVMnLCB7XG4gICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmYWlsdXJlKHsgZXJyb3I6IGVycm9yLCBmaWxlOiBudWxsIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHJlbW92ZSBmaXJzdCBpdGVtIGFzIGl0IHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhpcyBpdGVtXG4gICAgICAgICAgZGlzcGF0Y2goJ1JFTU9WRV9JVEVNJywgeyBxdWVyeTogc3RhdGUuaXRlbXNbMF0uaWQgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0ZXN0IGlmIHNlcnZlciBmaWxlIHJlZmVyZW5jZSBpcyBzdXBwbGllZFxuICAgICAgICAvLyB0eXBlIGlzIGVpdGhlciAnbmV3JywgJ2xvY2FsJyBvciAnbGltYm8nICgncmVtb3RlJyBpcyBmb3IgbmV3IGZpbGVzKVxuICAgICAgICB2YXIgaXNMb2NhbFNlcnZlckZpbGUgPSBvcHRpb25zLnR5cGUgPT09ICdsb2NhbCc7XG4gICAgICAgIHZhciBpc0xpbWJvU2VydmVyRmlsZSA9IG9wdGlvbnMudHlwZSA9PT0gJ2xpbWJvJztcbiAgICAgICAgdmFyIGlzU2VydmVyRmlsZSA9IGlzTG9jYWxTZXJ2ZXJGaWxlIHx8IGlzTGltYm9TZXJ2ZXJGaWxlO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBibGFuayBpdGVtXG4gICAgICAgIHZhciBpdGVtID0gY3JlYXRlSXRlbShpc1NlcnZlckZpbGUgPyBzb3VyY2UgOiBudWxsKTtcblxuICAgICAgICAvLyBhZGQgaXRlbSB0byBsaXN0XG4gICAgICAgIGluc2VydEl0ZW0oc3RhdGUuaXRlbXMsIGl0ZW0sIGluZGV4KTtcblxuICAgICAgICAvLyBnZXQgYSBxdWljayByZWZlcmVuY2UgdG8gdGhlIGl0ZW0gaWRcbiAgICAgICAgdmFyIGlkID0gaXRlbS5pZDtcblxuICAgICAgICAvLyBvYnNlcnZlIGl0ZW0gZXZlbnRzXG4gICAgICAgIGl0ZW0ub24oJ2xvYWQtaW5pdCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRpc3BhdGNoKCdESURfU1RBUlRfSVRFTV9MT0FEJywgeyBpZDogaWQgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ2xvYWQtbWV0YScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRpc3BhdGNoKCdESURfVVBEQVRFX0lURU1fTUVUQScsIHsgaWQ6IGlkIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdsb2FkLXByb2dyZXNzJywgZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX1VQREFURV9JVEVNX0xPQURfUFJPR1JFU1MnLCB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBwcm9ncmVzczogcHJvZ3Jlc3NcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5vbignbG9hZC1yZXF1ZXN0LWVycm9yJywgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBpcyBjbGllbnQgZXJyb3IsIG5vIHdheSB0byByZWNvdmVyXG4gICAgICAgICAgaWYgKGVycm9yLmNvZGUgPj0gNDAwICYmIGVycm9yLmNvZGUgPCA1MDApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdESURfVEhST1dfSVRFTV9JTlZBTElEJywge1xuICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgICAgICAgbWFpbjogc3RhdGUub3B0aW9ucy5sYWJlbEZpbGVMb2FkRXJyb3IsXG4gICAgICAgICAgICAgICAgc3ViOiBlcnJvci5jb2RlICsgJyAoJyArIGVycm9yLmJvZHkgKyAnKSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHJlamVjdCB0aGUgZmlsZSBzbyBjYW4gYmUgZGVhbHQgd2l0aCB0aHJvdWdoIEFQSVxuICAgICAgICAgICAgZmFpbHVyZSh7IGVycm9yOiBlcnJvciwgZmlsZTogY3JlYXRlSXRlbUFQSShpdGVtKSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBpcyBwb3NzaWJsZSBzZXJ2ZXIgZXJyb3IsIHNvIG1pZ2h0IGJlIHBvc3NpYmxlIHRvIHJldHJ5XG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9USFJPV19JVEVNX0xPQURfRVJST1InLCB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICAgICAgbWFpbjogc3RhdGUub3B0aW9ucy5sYWJlbEZpbGVMb2FkRXJyb3IsXG4gICAgICAgICAgICAgIHN1Yjogc3RhdGUub3B0aW9ucy5sYWJlbFRhcFRvUmV0cnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5vbignbG9hZC1maWxlLWVycm9yJywgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX1RIUk9XX0lURU1fSU5WQUxJRCcsIF9leHRlbmRzKHt9LCBlcnJvciwgeyBpZDogaWQgfSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdsb2FkLWFib3J0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ1JFTU9WRV9JVEVNJywgeyBxdWVyeTogaWQgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBpdGVtIGxvYWRlZCwgYWxsb3cgcGx1Z2lucyB0b1xuICAgICAgICAgIC8vIC0gcmVhZCBkYXRhIChxdWlja2x5KVxuICAgICAgICAgIC8vIC0gYWRkIG1ldGFkYXRhXG4gICAgICAgICAgYXBwbHlGaWx0ZXJDaGFpbignRElEX0xPQURfSVRFTScsIGl0ZW0sIHsgcXVlcnk6IHF1ZXJ5IH0pLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgLy8gbGV0IHBsdWdpbnMgZGVjaWRlIGlmIHRoZSBvdXRwdXQgZGF0YSBzaG91bGQgYmUgcHJlcGFyZWQgYXQgdGhpcyBwb2ludFxuICAgICAgICAgICAgICAvLyBtZWFucyB3ZSdsbCBkbyB0aGlzIGFuZCB3YWl0IGZvciBpZGxlIHN0YXRlXG4gICAgICAgICAgICAgIGFwcGx5RmlsdGVyQ2hhaW4oJ1NIT1VMRF9QUkVQQVJFX09VVFBVVCcsIGZhbHNlLCB7XG4gICAgICAgICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnlcbiAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihzaG91bGRQcmVwYXJlT3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICBpc1NlcnZlckZpbGU6IGlzU2VydmVyRmlsZSxcbiAgICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgICAgICAgaXNMb2NhbFNlcnZlckZpbGU6IGlzTG9jYWxTZXJ2ZXJGaWxlLFxuICAgICAgICAgICAgICAgICAgaXNMaW1ib1NlcnZlckZpbGU6IGlzTGltYm9TZXJ2ZXJGaWxlLFxuICAgICAgICAgICAgICAgICAgc3VjY2Vzczogc3VjY2Vzc1xuXG4gICAgICAgICAgICAgICAgICAvLyBleGl0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUHJlcGFyZU91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgaWRsZSBzdGF0ZSBhbmQgdGhlbiBydW4gUFJFUEFSRV9PVVRQVVRcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgICAgICAgICAnUkVRVUVTVF9QUkVQQVJFX0xPQURfSVRFTScsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnQ09NUExFVEVfTE9BRF9JVEVNJywge1xuICAgICAgICAgICAgICAgICAgcXVlcnk6IGlkLFxuICAgICAgICAgICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5vbigncHJvY2Vzcy1zdGFydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRpc3BhdGNoKCdESURfU1RBUlRfSVRFTV9QUk9DRVNTSU5HJywgeyBpZDogaWQgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ3Byb2Nlc3MtcHJvZ3Jlc3MnLCBmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICAgIGRpc3BhdGNoKCdESURfVVBEQVRFX0lURU1fUFJPQ0VTU19QUk9HUkVTUycsIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHByb2dyZXNzOiBwcm9ncmVzc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdwcm9jZXNzLWVycm9yJywgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICBkaXNwYXRjaCgnRElEX1RIUk9XX0lURU1fUFJPQ0VTU0lOR19FUlJPUicsIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIHN0YXR1czoge1xuICAgICAgICAgICAgICBtYWluOiBzdGF0ZS5vcHRpb25zLmxhYmVsRmlsZVByb2Nlc3NpbmdFcnJvcixcbiAgICAgICAgICAgICAgc3ViOiBzdGF0ZS5vcHRpb25zLmxhYmVsVGFwVG9SZXRyeVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLm9uKCdwcm9jZXNzLWFib3J0JywgZnVuY3Rpb24oc2VydmVyRmlsZVJlZmVyZW5jZSkge1xuICAgICAgICAgIC8vIGlmIHdlJ3JlIGluc3RhbnQgdXBsb2FkaW5nLCB0aGUgaXRlbSBpcyByZW1vdmVkXG4gICAgICAgICAgaWYgKHN0YXRlLm9wdGlvbnMuaW5zdGFudFVwbG9hZCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ1JFTU9WRV9JVEVNJywgeyBxdWVyeTogaWQgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHdlIHN0b3BwZWQgcHJvY2Vzc2luZ1xuICAgICAgICAgICAgZGlzcGF0Y2goJ0RJRF9BQk9SVF9JVEVNX1BST0NFU1NJTkcnLCB7IGlkOiBpZCB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB3ZSdsbCByZXZlcnQgYW55IHByb2Nlc3NlZCBpdGVtc1xuICAgICAgICAgIGRpc3BhdGNoKCdSRVZFUlRfSVRFTV9QUk9DRVNTSU5HJywgeyBxdWVyeTogaWQgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0ub24oJ3Byb2Nlc3MtY29tcGxldGUnLCBmdW5jdGlvbihzZXJ2ZXJGaWxlUmVmZXJlbmNlKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ0RJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkcnLCB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIHNlcnZlckZpbGVSZWZlcmVuY2U6IHNlcnZlckZpbGVSZWZlcmVuY2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5vbigncHJvY2Vzcy1yZXZlcnQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBpZiBpcyBpbnN0YW50IHVwbG9hZCByZW1vdmUgdGhlIGl0ZW1cbiAgICAgICAgICBpZiAoc3RhdGUub3B0aW9ucy5pbnN0YW50VXBsb2FkKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgnUkVNT1ZFX0lURU0nLCB7IHF1ZXJ5OiBpZCB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ0RJRF9SRVZFUlRfSVRFTV9QUk9DRVNTSU5HJywgeyBpZDogaWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBsZXQgdmlldyBrbm93IHRoZSBpdGVtIGhhcyBiZWVuIGluc2VydGVkXG4gICAgICAgIGRpc3BhdGNoKCdESURfQUREX0lURU0nLCB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBpbnRlcmFjdGlvbk1ldGhvZDogaW50ZXJhY3Rpb25NZXRob2RcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc3RhcnQgbG9hZGluZyB0aGUgc291cmNlXG5cbiAgICAgICAgdmFyIF9yZWY0ID0gc3RhdGUub3B0aW9ucy5zZXJ2ZXIgfHwge30sXG4gICAgICAgICAgdXJsID0gX3JlZjQudXJsLFxuICAgICAgICAgIGxvYWQgPSBfcmVmNC5sb2FkLFxuICAgICAgICAgIHJlc3RvcmUgPSBfcmVmNC5yZXN0b3JlLFxuICAgICAgICAgIGZldGNoID0gX3JlZjQuZmV0Y2g7XG5cbiAgICAgICAgaXRlbS5sb2FkKFxuICAgICAgICAgIHNvdXJjZSxcblxuICAgICAgICAgIC8vIHRoaXMgY3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbG9hZHMgdGhlIGZpbGUgYmFzZWQgb24gdGhlIHR5cGUgb2YgZmlsZSAoc3RyaW5nLCBiYXNlNjQsIGJsb2IsIGZpbGUpIGFuZCBsb2NhdGlvbiBvZiBmaWxlIChsb2NhbCwgcmVtb3RlLCBsaW1ibylcbiAgICAgICAgICBjcmVhdGVGaWxlTG9hZGVyKFxuICAgICAgICAgICAgaXNTZXJ2ZXJGaWxlXG4gICAgICAgICAgICAgID8gb3B0aW9ucy50eXBlID09PSAnbGltYm8nXG4gICAgICAgICAgICAgICAgPyBjcmVhdGVGZXRjaEZ1bmN0aW9uKHVybCwgcmVzdG9yZSlcbiAgICAgICAgICAgICAgICA6IGNyZWF0ZUZldGNoRnVuY3Rpb24odXJsLCBsb2FkKVxuICAgICAgICAgICAgICA6IGlzU3RyaW5nKHNvdXJjZSkgJiYgaXNFeHRlcm5hbFVSTChzb3VyY2UpXG4gICAgICAgICAgICAgICAgPyBjcmVhdGVGZXRjaEZ1bmN0aW9uKHVybCwgZmV0Y2gpXG4gICAgICAgICAgICAgICAgOiBmZXRjaExvY2FsXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIC8vIGNhbGxlZCB3aGVuIHRoZSBmaWxlIGlzIGxvYWRlZCBzbyBpdCBjYW4gYmUgcGlwZWQgdGhyb3VnaCB0aGUgZmlsdGVyc1xuICAgICAgICAgIGZ1bmN0aW9uKGZpbGUsIHN1Y2Nlc3MsIGVycm9yKSB7XG4gICAgICAgICAgICAvLyBsZXQncyBwcm9jZXNzIHRoZSBmaWxlXG4gICAgICAgICAgICBhcHBseUZpbHRlckNoYWluKCdMT0FEX0ZJTEUnLCBmaWxlLCB7IHF1ZXJ5OiBxdWVyeSB9KVxuICAgICAgICAgICAgICAudGhlbihzdWNjZXNzKVxuICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0sXG5cbiAgICAgIFJFUVVFU1RfUFJFUEFSRV9MT0FEX0lURU06IGZ1bmN0aW9uIFJFUVVFU1RfUFJFUEFSRV9MT0FEX0lURU0oX3JlZjUpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBfcmVmNS5pdGVtLFxuICAgICAgICAgIGRhdGEgPSBfcmVmNS5kYXRhO1xuXG4gICAgICAgIC8vIGFsbG93IHBsdWdpbnMgdG8gYWx0ZXIgdGhlIGZpbGUgZGF0YVxuICAgICAgICBhcHBseUZpbHRlckNoYWluKCdQUkVQQVJFX09VVFBVVCcsIGl0ZW0uZmlsZSwge1xuICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICBpdGVtOiBpdGVtXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgYXBwbHlGaWx0ZXJDaGFpbignQ09NUExFVEVfUFJFUEFSRV9PVVRQVVQnLCByZXN1bHQsIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgICAgIGl0ZW06IGl0ZW1cbiAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ0NPTVBMRVRFX0xPQURfSVRFTScsIHtcbiAgICAgICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgQ09NUExFVEVfTE9BRF9JVEVNOiBmdW5jdGlvbiBDT01QTEVURV9MT0FEX0lURU0oX3JlZjYpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBfcmVmNi5pdGVtLFxuICAgICAgICAgIGRhdGEgPSBfcmVmNi5kYXRhO1xuICAgICAgICB2YXIgc3VjY2VzcyA9IGRhdGEuc3VjY2VzcyxcbiAgICAgICAgICBpc1NlcnZlckZpbGUgPSBkYXRhLmlzU2VydmVyRmlsZSxcbiAgICAgICAgICBzb3VyY2UgPSBkYXRhLnNvdXJjZSxcbiAgICAgICAgICBpc0xvY2FsU2VydmVyRmlsZSA9IGRhdGEuaXNMb2NhbFNlcnZlckZpbGUsXG4gICAgICAgICAgaXNMaW1ib1NlcnZlckZpbGUgPSBkYXRhLmlzTGltYm9TZXJ2ZXJGaWxlO1xuXG4gICAgICAgIC8vIGxldCBpbnRlcmZhY2Uga25vdyB0aGUgaXRlbSBoYXMgbG9hZGVkXG5cbiAgICAgICAgZGlzcGF0Y2goJ0RJRF9MT0FEX0lURU0nLCB7XG4gICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgc2VydmVyRmlsZVJlZmVyZW5jZTogaXNTZXJ2ZXJGaWxlID8gc291cmNlIDogbnVsbFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBpdGVtIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBsb2FkZWQgYW5kIGFkZGVkIHRvIHRoZVxuICAgICAgICAvLyBsaXN0IG9mIGl0ZW1zIHNvIGNhbiBub3cgYmUgc2FmZWx5IHJldHVybmVkIGZvciB1c2VcbiAgICAgICAgc3VjY2VzcyhjcmVhdGVJdGVtQVBJKGl0ZW0pKTtcblxuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgbG9jYWwgc2VydmVyIGZpbGUgd2UgbmVlZCB0byBzaG93IGEgZGlmZmVyZW50IHN0YXRlXG4gICAgICAgIGlmIChpc0xvY2FsU2VydmVyRmlsZSkge1xuICAgICAgICAgIGRpc3BhdGNoKCdESURfTE9BRF9MT0NBTF9JVEVNJywgeyBpZDogaXRlbS5pZCB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBpcyBhIHRlbXAgc2VydmVyIGZpbGUgd2UgcHJldmVudCBhc3luYyB1cGxvYWQgY2FsbCBoZXJlIChhcyB0aGUgZmlsZSBpcyBhbHJlYWR5IG9uIHRoZSBzZXJ2ZXIpXG4gICAgICAgIGlmIChpc0xpbWJvU2VydmVyRmlsZSkge1xuICAgICAgICAgIGRpc3BhdGNoKCdESURfQ09NUExFVEVfSVRFTV9QUk9DRVNTSU5HJywge1xuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIHNlcnZlckZpbGVSZWZlcmVuY2U6IHNvdXJjZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlkIHdlIGFyZSBhbGxvd2VkIHRvIHVwbG9hZCB0aGUgZmlsZSBpbW1pZGlhdGVseSwgbGV0cyBkbyBpdFxuICAgICAgICBpZiAocXVlcnkoJ0lTX0FTWU5DJykgJiYgc3RhdGUub3B0aW9ucy5pbnN0YW50VXBsb2FkKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ1JFUVVFU1RfSVRFTV9QUk9DRVNTSU5HJywgeyBxdWVyeTogaXRlbS5pZCB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgUkVUUllfSVRFTV9MT0FEOiBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZShzdGF0ZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAvLyB0cnkgbG9hZGluZyB0aGUgc291cmNlIG9uZSBtb3JlIHRpbWVcbiAgICAgICAgaXRlbS5yZXRyeUxvYWQoKTtcbiAgICAgIH0pLFxuXG4gICAgICBSRVFVRVNUX0lURU1fUFJPQ0VTU0lORzogZ2V0SXRlbUJ5UXVlcnlGcm9tU3RhdGUoc3RhdGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIGlkID0gaXRlbS5pZDtcblxuICAgICAgICBkaXNwYXRjaCgnRElEX1JFUVVFU1RfSVRFTV9QUk9DRVNTSU5HJywgeyBpZDogaWQgfSk7XG5cbiAgICAgICAgZGlzcGF0Y2goJ1BST0NFU1NfSVRFTScsIHsgcXVlcnk6IGl0ZW0gfSwgdHJ1ZSk7XG4gICAgICB9KSxcblxuICAgICAgUFJPQ0VTU19JVEVNOiBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZShzdGF0ZSwgZnVuY3Rpb24oXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHN1Y2Nlc3MsXG4gICAgICAgIGZhaWx1cmVcbiAgICAgICkge1xuICAgICAgICAvLyB3ZSBkb25lIGZ1bmN0aW9uXG4gICAgICAgIGl0ZW0ub25PbmNlKCdwcm9jZXNzLWNvbXBsZXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc3VjY2VzcyhjcmVhdGVJdGVtQVBJKGl0ZW0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gd2UgZXJyb3IgZnVuY3Rpb25cbiAgICAgICAgaXRlbS5vbk9uY2UoJ3Byb2Nlc3MtZXJyb3InLCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIGZhaWx1cmUoeyBlcnJvcjogZXJyb3IsIGZpbGU6IGNyZWF0ZUl0ZW1BUEkoaXRlbSkgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHN0YXJ0IGZpbGUgcHJvY2Vzc2luZ1xuICAgICAgICBpdGVtLnByb2Nlc3MoXG4gICAgICAgICAgY3JlYXRlRmlsZVByb2Nlc3NvcihcbiAgICAgICAgICAgIGNyZWF0ZVByb2Nlc3NvckZ1bmN0aW9uKFxuICAgICAgICAgICAgICBzdGF0ZS5vcHRpb25zLnNlcnZlci51cmwsXG4gICAgICAgICAgICAgIHN0YXRlLm9wdGlvbnMuc2VydmVyLnByb2Nlc3MsXG4gICAgICAgICAgICAgIHN0YXRlLm9wdGlvbnMubmFtZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgLy8gY2FsbGVkIHdoZW4gdGhlIGZpbGUgaXMgYWJvdXQgdG8gYmUgcHJvY2Vzc2VkIHNvIGl0IGNhbiBiZSBwaXBlZCB0aHJvdWdoIHRoZSB0cmFuc2Zvcm0gZmlsdGVyc1xuICAgICAgICAgIGZ1bmN0aW9uKGZpbGUsIHN1Y2Nlc3MsIGVycm9yKSB7XG4gICAgICAgICAgICAvLyBhbGxvdyBwbHVnaW5zIHRvIGFsdGVyIHRoZSBmaWxlIGRhdGFcbiAgICAgICAgICAgIGFwcGx5RmlsdGVyQ2hhaW4oJ1BSRVBBUkVfT1VUUFVUJywgZmlsZSwge1xuICAgICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICAgIGl0ZW06IGl0ZW1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3MpXG4gICAgICAgICAgICAgIC5jYXRjaChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSksXG5cbiAgICAgIFJFVFJZX0lURU1fUFJPQ0VTU0lORzogZ2V0SXRlbUJ5UXVlcnlGcm9tU3RhdGUoc3RhdGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgZGlzcGF0Y2goJ1JFUVVFU1RfSVRFTV9QUk9DRVNTSU5HJywgeyBxdWVyeTogaXRlbSB9KTtcbiAgICAgIH0pLFxuXG4gICAgICBSRU1PVkVfSVRFTTogZ2V0SXRlbUJ5UXVlcnlGcm9tU3RhdGUoc3RhdGUsIGZ1bmN0aW9uKGl0ZW0sIHN1Y2Nlc3MpIHtcbiAgICAgICAgLy8gZ2V0IGlkIHJlZmVyZW5jZVxuICAgICAgICB2YXIgaWQgPSBpdGVtLmlkO1xuXG4gICAgICAgIC8vIHRlbGwgdGhlIHZpZXcgdGhlIGl0ZW0gaGFzIGJlZW4gcmVtb3ZlZFxuICAgICAgICBkaXNwYXRjaCgnRElEX1JFTU9WRV9JVEVNJywgeyBpZDogaWQsIGl0ZW06IGl0ZW0gfSk7XG5cbiAgICAgICAgLy8gbm93IHJlbW92ZSBpdCBmcm9tIHRoZSBpdGVtIGxpc3QsXG4gICAgICAgIC8vIHdlIHJlbW92ZSBpdCBmcm9tIHRoZSBsaXN0IGFmdGVyIHRoZSB2aWV3IGhhcyBiZWVuIHVwZGF0ZWRcbiAgICAgICAgLy8gdG8gbWFrZSBzdXJlIHRoZSBpdGVtIGlzIGF2YWlsYWJsZSBmb3IgdmlldyByZW5kZXJpbmcgdGlsbCByZW1vdmVkXG4gICAgICAgIGRpc3BhdGNoKCdTUExJQ0VfSVRFTScsIHsgaWQ6IGlkLCBpdGVtOiBpdGVtIH0pO1xuXG4gICAgICAgIC8vIGNvcnJlY3RseSByZW1vdmVkXG4gICAgICAgIHN1Y2Nlc3MoY3JlYXRlSXRlbUFQSShpdGVtKSk7XG4gICAgICB9KSxcblxuICAgICAgLy8gcHJpdmF0ZSBhY3Rpb24gZm9yIHRpbWluZyB0aGUgcmVtb3ZhbCBvZiBhbiBpdGVtIGZyb20gdGhlIGl0ZW1zIGxpc3RcbiAgICAgIFNQTElDRV9JVEVNOiBmdW5jdGlvbiBTUExJQ0VfSVRFTShfcmVmNykge1xuICAgICAgICB2YXIgaWQgPSBfcmVmNy5pZDtcbiAgICAgICAgcmV0dXJuIHJlbW92ZUl0ZW0oc3RhdGUuaXRlbXMsIGdldEl0ZW1CeUlkKHN0YXRlLml0ZW1zLCBpZCkpO1xuICAgICAgfSxcblxuICAgICAgQUJPUlRfSVRFTV9MT0FEOiBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZShzdGF0ZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAvLyBzdG9wIGxvYWRpbmcgdGhpcyBmaWxlXG4gICAgICAgIGl0ZW0uYWJvcnRMb2FkKCk7XG5cbiAgICAgICAgLy8gdGhlIGZpbGUgd2lsbCB0aHJvdyBhbiBldmVudCBhbmQgdGhhdCB3aWxsIHRha2VcbiAgICAgICAgLy8gY2FyZSBvZiByZW1vdmluZyB0aGUgaXRlbSBmcm9tIHRoZSBsaXN0XG4gICAgICB9KSxcblxuICAgICAgQUJPUlRfSVRFTV9QUk9DRVNTSU5HOiBnZXRJdGVtQnlRdWVyeUZyb21TdGF0ZShzdGF0ZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAvLyBzdG9wIHByb2Nlc3NpbmcgdGhpcyBmaWxlXG4gICAgICAgIGl0ZW0uYWJvcnRQcm9jZXNzaW5nKCk7XG5cbiAgICAgICAgLy8gdGhlIGZpbGUgd2lsbCB0aHJvdyBhbiBldmVudCBhbmQgdGhhdCB3aWxsIHRha2VcbiAgICAgICAgLy8gY2FyZSBvZiByZW1vdmluZyB0aGUgaXRlbSBmcm9tIHRoZSBsaXN0XG4gICAgICB9KSxcblxuICAgICAgUkVWRVJUX0lURU1fUFJPQ0VTU0lORzogZ2V0SXRlbUJ5UXVlcnlGcm9tU3RhdGUoc3RhdGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgLy8gcmVtb3ZlIGZyb20gc2VydmVyXG4gICAgICAgIGl0ZW0ucmV2ZXJ0KFxuICAgICAgICAgIGNyZWF0ZVJldmVydEZ1bmN0aW9uKFxuICAgICAgICAgICAgc3RhdGUub3B0aW9ucy5zZXJ2ZXIudXJsLFxuICAgICAgICAgICAgc3RhdGUub3B0aW9ucy5zZXJ2ZXIucmV2ZXJ0XG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSksXG5cbiAgICAgIFNFVF9PUFRJT05TOiBmdW5jdGlvbiBTRVRfT1BUSU9OUyhfcmVmOCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IF9yZWY4Lm9wdGlvbnM7XG5cbiAgICAgICAgZm9yaW4ob3B0aW9ucywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIGRpc3BhdGNoKCdTRVRfJyArIGZyb21DYW1lbHMoa2V5LCAnXycpLnRvVXBwZXJDYXNlKCksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBjcmVhdGVFbGVtZW50JDEgPSBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgfTtcblxuICB2YXIgZm9ybWF0RmlsZW5hbWUgPSBmdW5jdGlvbiBmb3JtYXRGaWxlbmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSShuYW1lKTtcbiAgfTtcblxuICB2YXIgdGV4dCA9IGZ1bmN0aW9uIHRleHQobm9kZSwgdmFsdWUpIHtcbiAgICB2YXIgdGV4dE5vZGUgPSBub2RlLmNoaWxkTm9kZXNbMF07XG4gICAgaWYgKCF0ZXh0Tm9kZSkge1xuICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSB0ZXh0Tm9kZS5ub2RlVmFsdWUpIHtcbiAgICAgIHRleHROb2RlLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcG9sYXJUb0NhcnRlc2lhbiA9IGZ1bmN0aW9uIHBvbGFyVG9DYXJ0ZXNpYW4oXG4gICAgY2VudGVyWCxcbiAgICBjZW50ZXJZLFxuICAgIHJhZGl1cyxcbiAgICBhbmdsZUluRGVncmVlc1xuICApIHtcbiAgICB2YXIgYW5nbGVJblJhZGlhbnMgPSAoYW5nbGVJbkRlZ3JlZXMgJSAzNjAgLSA5MCkgKiBNYXRoLlBJIC8gMTgwLjA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGNlbnRlclggKyByYWRpdXMgKiBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyksXG4gICAgICB5OiBjZW50ZXJZICsgcmFkaXVzICogTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpXG4gICAgfTtcbiAgfTtcblxuICB2YXIgZGVzY3JpYmVBcmMgPSBmdW5jdGlvbiBkZXNjcmliZUFyYyhcbiAgICB4LFxuICAgIHksXG4gICAgcmFkaXVzLFxuICAgIHN0YXJ0QW5nbGUsXG4gICAgZW5kQW5nbGUsXG4gICAgYXJjU3dlZXBcbiAgKSB7XG4gICAgdmFyIHN0YXJ0ID0gcG9sYXJUb0NhcnRlc2lhbih4LCB5LCByYWRpdXMsIGVuZEFuZ2xlKTtcbiAgICB2YXIgZW5kID0gcG9sYXJUb0NhcnRlc2lhbih4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUpO1xuICAgIHJldHVybiBbXG4gICAgICAnTScsXG4gICAgICBzdGFydC54LFxuICAgICAgc3RhcnQueSxcbiAgICAgICdBJyxcbiAgICAgIHJhZGl1cyxcbiAgICAgIHJhZGl1cyxcbiAgICAgIDAsXG4gICAgICBhcmNTd2VlcCxcbiAgICAgIDAsXG4gICAgICBlbmQueCxcbiAgICAgIGVuZC55XG4gICAgXS5qb2luKCcgJyk7XG4gIH07XG5cbiAgdmFyIHBlcmNlbnRhZ2VBcmMgPSBmdW5jdGlvbiBwZXJjZW50YWdlQXJjKHgsIHksIHJhZGl1cywgZnJvbSwgdG8pIHtcbiAgICB2YXIgYXJjU3dlZXAgPSAxO1xuICAgIGlmICh0byA+IGZyb20gJiYgdG8gLSBmcm9tIDw9IDAuNSkge1xuICAgICAgYXJjU3dlZXAgPSAwO1xuICAgIH1cbiAgICBpZiAoZnJvbSA+IHRvICYmIGZyb20gLSB0byA+PSAwLjUpIHtcbiAgICAgIGFyY1N3ZWVwID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2NyaWJlQXJjKFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICByYWRpdXMsXG4gICAgICBNYXRoLm1pbigwLjk5OTksIGZyb20pICogMzYwLFxuICAgICAgTWF0aC5taW4oMC45OTk5LCB0bykgKiAzNjAsXG4gICAgICBhcmNTd2VlcFxuICAgICk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZSQ3ID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcblxuICAgIC8vIHN0YXJ0IGF0IDBcbiAgICBwcm9wcy5zcGluID0gZmFsc2U7XG4gICAgcHJvcHMucHJvZ3Jlc3MgPSAwO1xuICAgIHByb3BzLm9wYWNpdHkgPSAwO1xuXG4gICAgLy8gc3ZnXG4gICAgdmFyIHN2ZyA9IGNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgIHJvb3QucmVmLnBhdGggPSBjcmVhdGVFbGVtZW50KCdwYXRoJywge1xuICAgICAgJ3N0cm9rZS13aWR0aCc6IDIsXG4gICAgICAnc3Ryb2tlLWxpbmVjYXAnOiAncm91bmQnXG4gICAgfSk7XG4gICAgc3ZnLmFwcGVuZENoaWxkKHJvb3QucmVmLnBhdGgpO1xuXG4gICAgcm9vdC5yZWYuc3ZnID0gc3ZnO1xuXG4gICAgcm9vdC5hcHBlbmRDaGlsZChzdmcpO1xuICB9O1xuXG4gIHZhciB3cml0ZSQ1ID0gZnVuY3Rpb24gd3JpdGUoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYyLnByb3BzO1xuXG4gICAgaWYgKHByb3BzLm9wYWNpdHkgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBnZXQgd2lkdGggb2Ygc3Ryb2tlXG4gICAgdmFyIHJpbmdTdHJva2VXaWR0aCA9IHBhcnNlSW50KGF0dHIocm9vdC5yZWYucGF0aCwgJ3N0cm9rZS13aWR0aCcpLCAxMCk7XG5cbiAgICAvLyBjYWxjdWxhdGUgc2l6ZSBvZiByaW5nXG4gICAgdmFyIHNpemUgPSByb290LnJlY3QuZWxlbWVudC53aWR0aCAqIDAuNTtcblxuICAgIC8vIHJpbmcgc3RhdGVcbiAgICB2YXIgcmluZ0Zyb20gPSAwO1xuICAgIHZhciByaW5nVG8gPSAwO1xuXG4gICAgLy8gbm93IGluIGJ1c3kgbW9kZVxuICAgIGlmIChwcm9wcy5zcGluKSB7XG4gICAgICByaW5nRnJvbSA9IDA7XG4gICAgICByaW5nVG8gPSAwLjU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJpbmdGcm9tID0gMDtcbiAgICAgIHJpbmdUbyA9IHByb3BzLnByb2dyZXNzO1xuICAgIH1cblxuICAgIC8vIGdldCBhcmMgcGF0aFxuICAgIHZhciBjb29yZGluYXRlcyA9IHBlcmNlbnRhZ2VBcmMoXG4gICAgICBzaXplLFxuICAgICAgc2l6ZSxcbiAgICAgIHNpemUgLSByaW5nU3Ryb2tlV2lkdGgsXG4gICAgICByaW5nRnJvbSxcbiAgICAgIHJpbmdUb1xuICAgICk7XG5cbiAgICAvLyB1cGRhdGUgcHJvZ3Jlc3MgYmFyXG4gICAgYXR0cihyb290LnJlZi5wYXRoLCAnZCcsIGNvb3JkaW5hdGVzKTtcblxuICAgIC8vIGhpZGUgd2hpbGUgY29udGFpbnMgMCB2YWx1ZVxuICAgIGF0dHIoXG4gICAgICByb290LnJlZi5wYXRoLFxuICAgICAgJ3N0cm9rZS1vcGFjaXR5JyxcbiAgICAgIHByb3BzLnNwaW4gfHwgcHJvcHMucHJvZ3Jlc3MgPiAwID8gMSA6IDBcbiAgICApO1xuICB9O1xuXG4gIHZhciBwcm9ncmVzc0luZGljYXRvciA9IGNyZWF0ZVZpZXcoe1xuICAgIHRhZzogJ2RpdicsXG4gICAgbmFtZTogJ3Byb2dyZXNzLWluZGljYXRvcicsXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICBjcmVhdGU6IGNyZWF0ZSQ3LFxuICAgIHdyaXRlOiB3cml0ZSQ1LFxuICAgIG1peGluczoge1xuICAgICAgYXBpczogWydwcm9ncmVzcycsICdzcGluJ10sXG4gICAgICBzdHlsZXM6IFsnb3BhY2l0eSddLFxuICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICBvcGFjaXR5OiB7IHR5cGU6ICd0d2VlbicsIGR1cmF0aW9uOiA1MDAgfSxcbiAgICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgICB0eXBlOiAnc3ByaW5nJyxcbiAgICAgICAgICBzdGlmZm5lc3M6IDAuOTUsXG4gICAgICAgICAgZGFtcGluZzogMC42NSxcbiAgICAgICAgICBtYXNzOiAxMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB2YXIgY3JlYXRlJDggPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gICAgcm9vdC5lbGVtZW50LnRpdGxlID0gcHJvcHMubGFiZWw7XG4gICAgcm9vdC5lbGVtZW50LmlubmVySFRNTCA9IHByb3BzLmljb24gfHwgJyc7XG4gICAgcHJvcHMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfTtcblxuICB2YXIgd3JpdGUkNiA9IGZ1bmN0aW9uIHdyaXRlKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcztcblxuICAgIGlmIChwcm9wcy5vcGFjaXR5ID09PSAwICYmICFwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgcHJvcHMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgYXR0cihyb290LmVsZW1lbnQsICdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH0gZWxzZSBpZiAocHJvcHMub3BhY2l0eSA+IDAgJiYgcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHByb3BzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICByb290LmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZmlsZUFjdGlvbkJ1dHRvbiA9IGNyZWF0ZVZpZXcoe1xuICAgIHRhZzogJ2J1dHRvbicsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgdHlwZTogJ2J1dHRvbidcbiAgICB9LFxuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgbmFtZTogJ2ZpbGUtYWN0aW9uLWJ1dHRvbicsXG4gICAgbWl4aW5zOiB7XG4gICAgICBhcGlzOiBbJ2xhYmVsJ10sXG4gICAgICBzdHlsZXM6IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnb3BhY2l0eSddLFxuICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICBzY2FsZVg6ICdzcHJpbmcnLFxuICAgICAgICBzY2FsZVk6ICdzcHJpbmcnLFxuICAgICAgICB0cmFuc2xhdGVYOiAnc3ByaW5nJyxcbiAgICAgICAgdHJhbnNsYXRlWTogJ3NwcmluZycsXG4gICAgICAgIG9wYWNpdHk6IHsgdHlwZTogJ3R3ZWVuJywgZHVyYXRpb246IDI1MCB9XG4gICAgICB9LFxuICAgICAgbGlzdGVuZXJzOiB0cnVlXG4gICAgfSxcbiAgICBjcmVhdGU6IGNyZWF0ZSQ4LFxuICAgIHdyaXRlOiB3cml0ZSQ2XG4gIH0pO1xuXG4gIHZhciB0b05hdHVyYWxGaWxlU2l6ZSA9IGZ1bmN0aW9uIHRvTmF0dXJhbEZpbGVTaXplKGJ5dGVzKSB7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnLic7XG5cbiAgICAvLyBub3BlLCBubyBuZWdhdGl2ZSBieXRlIHNpemVzXG4gICAgYnl0ZXMgPSBNYXRoLnJvdW5kKE1hdGguYWJzKGJ5dGVzKSk7XG5cbiAgICAvLyBqdXN0IGJ5dGVzXG4gICAgaWYgKGJ5dGVzIDwgMTAwMCkge1xuICAgICAgcmV0dXJuIGJ5dGVzICsgJyBieXRlcyc7XG4gICAgfVxuXG4gICAgLy8ga2lsb2J5dGVzXG4gICAgaWYgKGJ5dGVzIDwgTUIpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGJ5dGVzIC8gS0IpICsgJyBLQic7XG4gICAgfVxuXG4gICAgLy8gbWVnYWJ5dGVzXG4gICAgaWYgKGJ5dGVzIDwgR0IpIHtcbiAgICAgIHJldHVybiByZW1vdmVEZWNpbWFsc1doZW5aZXJvKGJ5dGVzIC8gTUIsIDEsIGRlY2ltYWxTZXBhcmF0b3IpICsgJyBNQic7XG4gICAgfVxuXG4gICAgLy8gZ2lnYWJ5dGVzXG4gICAgcmV0dXJuIHJlbW92ZURlY2ltYWxzV2hlblplcm8oYnl0ZXMgLyBHQiwgMiwgZGVjaW1hbFNlcGFyYXRvcikgKyAnIEdCJztcbiAgfTtcblxuICB2YXIgS0IgPSAxMDAwO1xuICB2YXIgTUIgPSAxMDAwMDAwO1xuICB2YXIgR0IgPSAxMDAwMDAwMDAwO1xuXG4gIHZhciByZW1vdmVEZWNpbWFsc1doZW5aZXJvID0gZnVuY3Rpb24gcmVtb3ZlRGVjaW1hbHNXaGVuWmVybyhcbiAgICB2YWx1ZSxcbiAgICBkZWNpbWFsQ291bnQsXG4gICAgc2VwYXJhdG9yXG4gICkge1xuICAgIHJldHVybiB2YWx1ZVxuICAgICAgLnRvRml4ZWQoZGVjaW1hbENvdW50KVxuICAgICAgLnNwbGl0KCcuJylcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24ocGFydCkge1xuICAgICAgICByZXR1cm4gcGFydCAhPT0gJzAnO1xuICAgICAgfSlcbiAgICAgIC5qb2luKHNlcGFyYXRvcik7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZSQ5ID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcblxuICAgIC8vIGZpbGVuYW1lXG4gICAgdmFyIGZpbGVOYW1lID0gY3JlYXRlRWxlbWVudCQxKCdzcGFuJyk7XG4gICAgZmlsZU5hbWUuY2xhc3NOYW1lID0gJ2ZpbGVwb25kLS1maWxlLWluZm8tbWFpbic7XG4gICAgLy8gaGlkZSBmb3Igc2NyZWVucmVhZGVyc1xuICAgIC8vIHRoZSBmaWxlIGlzIGNvbnRhaW5lZCBpbiBhIGZpZWxkc2V0IHdpdGggbGVnZW5kIHRoYXQgY29udGFpbnMgdGhlIGZpbGVuYW1lXG4gICAgLy8gbm8gbmVlZCB0byByZWFkIGl0IHR3aWNlXG4gICAgYXR0cihmaWxlTmFtZSwgJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICByb290LmFwcGVuZENoaWxkKGZpbGVOYW1lKTtcbiAgICByb290LnJlZi5maWxlTmFtZSA9IGZpbGVOYW1lO1xuXG4gICAgLy8gZmlsZXNpemVcbiAgICB2YXIgZmlsZVNpemUgPSBjcmVhdGVFbGVtZW50JDEoJ3NwYW4nKTtcbiAgICBmaWxlU2l6ZS5jbGFzc05hbWUgPSAnZmlsZXBvbmQtLWZpbGUtaW5mby1zdWInO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoZmlsZVNpemUpO1xuICAgIHJvb3QucmVmLmZpbGVTaXplID0gZmlsZVNpemU7XG5cbiAgICAvLyBzZXQgaW5pdGlhbCB2YWx1ZXNcbiAgICB0ZXh0KGZpbGVTaXplLCByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9XQUlUSU5HX0ZPUl9TSVpFJykpO1xuICAgIHRleHQoZmlsZU5hbWUsIGZvcm1hdEZpbGVuYW1lKHJvb3QucXVlcnkoJ0dFVF9JVEVNX05BTUUnLCBwcm9wcy5pZCkpKTtcbiAgfTtcblxuICB2YXIgdXBkYXRlRmlsZSA9IGZ1bmN0aW9uIHVwZGF0ZUZpbGUoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYyLnByb3BzO1xuXG4gICAgdGV4dChcbiAgICAgIHJvb3QucmVmLmZpbGVTaXplLFxuICAgICAgdG9OYXR1cmFsRmlsZVNpemUocm9vdC5xdWVyeSgnR0VUX0lURU1fU0laRScsIHByb3BzLmlkKSlcbiAgICApO1xuICAgIHRleHQoXG4gICAgICByb290LnJlZi5maWxlTmFtZSxcbiAgICAgIGZvcm1hdEZpbGVuYW1lKHJvb3QucXVlcnkoJ0dFVF9JVEVNX05BTUUnLCBwcm9wcy5pZCkpXG4gICAgKTtcbiAgfTtcblxuICB2YXIgdXBkYXRlRmlsZVNpemVPbkVycm9yID0gZnVuY3Rpb24gdXBkYXRlRmlsZVNpemVPbkVycm9yKF9yZWYzKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMy5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmMy5wcm9wcztcblxuICAgIC8vIGlmIHNpemUgaXMgYXZhaWxhYmxlIGRvbid0IGZhbGxiYWNrIHRvIHVua25vd24gc2l6ZSBtZXNzYWdlXG4gICAgaWYgKGlzSW50KHJvb3QucXVlcnkoJ0dFVF9JVEVNX1NJWkUnLCBwcm9wcy5pZCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGV4dChyb290LnJlZi5maWxlU2l6ZSwgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfU0laRV9OT1RfQVZBSUxBQkxFJykpO1xuICB9O1xuXG4gIHZhciBmaWxlSW5mbyA9IGNyZWF0ZVZpZXcoe1xuICAgIG5hbWU6ICdmaWxlLWluZm8nLFxuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgd3JpdGU6IGNyZWF0ZVJvdXRlKHtcbiAgICAgIERJRF9MT0FEX0lURU06IHVwZGF0ZUZpbGUsXG4gICAgICBESURfVVBEQVRFX0lURU1fTUVUQTogdXBkYXRlRmlsZSxcbiAgICAgIERJRF9USFJPV19JVEVNX0xPQURfRVJST1I6IHVwZGF0ZUZpbGVTaXplT25FcnJvcixcbiAgICAgIERJRF9USFJPV19JVEVNX0lOVkFMSUQ6IHVwZGF0ZUZpbGVTaXplT25FcnJvclxuICAgIH0pLFxuICAgIGNyZWF0ZTogY3JlYXRlJDksXG4gICAgbWl4aW5zOiB7XG4gICAgICBzdHlsZXM6IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJ10sXG4gICAgICBhbmltYXRpb25zOiB7XG4gICAgICAgIHRyYW5zbGF0ZVg6ICdzcHJpbmcnLFxuICAgICAgICB0cmFuc2xhdGVZOiAnc3ByaW5nJ1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHRvUGVyY2VudGFnZSA9IGZ1bmN0aW9uIHRvUGVyY2VudGFnZSh2YWx1ZSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMTAwKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlJDEwID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdDtcblxuICAgIC8vIG1haW4gc3RhdHVzXG4gICAgdmFyIG1haW4gPSBjcmVhdGVFbGVtZW50JDEoJ3NwYW4nKTtcbiAgICBtYWluLmNsYXNzTmFtZSA9ICdmaWxlcG9uZC0tZmlsZS1zdGF0dXMtbWFpbic7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICByb290LnJlZi5tYWluID0gbWFpbjtcblxuICAgIC8vIHN1YiBzdGF0dXNcbiAgICB2YXIgc3ViID0gY3JlYXRlRWxlbWVudCQxKCdzcGFuJyk7XG4gICAgc3ViLmNsYXNzTmFtZSA9ICdmaWxlcG9uZC0tZmlsZS1zdGF0dXMtc3ViJztcbiAgICByb290LmFwcGVuZENoaWxkKHN1Yik7XG4gICAgcm9vdC5yZWYuc3ViID0gc3ViO1xuXG4gICAgZGlkU2V0SXRlbUxvYWRQcm9ncmVzcyh7IHJvb3Q6IHJvb3QsIGFjdGlvbjogeyBwcm9ncmVzczogbnVsbCB9IH0pO1xuICB9O1xuXG4gIHZhciBkaWRTZXRJdGVtTG9hZFByb2dyZXNzID0gZnVuY3Rpb24gZGlkU2V0SXRlbUxvYWRQcm9ncmVzcyhfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYyLmFjdGlvbjtcblxuICAgIHZhciB0aXRsZSA9XG4gICAgICBhY3Rpb24ucHJvZ3Jlc3MgPT09IG51bGxcbiAgICAgICAgPyByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9MT0FESU5HJylcbiAgICAgICAgOiByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9MT0FESU5HJykgK1xuICAgICAgICAgICcgJyArXG4gICAgICAgICAgdG9QZXJjZW50YWdlKGFjdGlvbi5wcm9ncmVzcykgK1xuICAgICAgICAgICclJztcbiAgICB0ZXh0KHJvb3QucmVmLm1haW4sIHRpdGxlKTtcbiAgICB0ZXh0KHJvb3QucmVmLnN1Yiwgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX1RBUF9UT19DQU5DRUwnKSk7XG4gIH07XG5cbiAgdmFyIGRpZFNldEl0ZW1Qcm9jZXNzUHJvZ3Jlc3MgPSBmdW5jdGlvbiBkaWRTZXRJdGVtUHJvY2Vzc1Byb2dyZXNzKF9yZWYzKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMy5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjMuYWN0aW9uO1xuXG4gICAgdmFyIHRpdGxlID1cbiAgICAgIGFjdGlvbi5wcm9ncmVzcyA9PT0gbnVsbFxuICAgICAgICA/IHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX1BST0NFU1NJTkcnKVxuICAgICAgICA6IHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX1BST0NFU1NJTkcnKSArXG4gICAgICAgICAgJyAnICtcbiAgICAgICAgICB0b1BlcmNlbnRhZ2UoYWN0aW9uLnByb2dyZXNzKSArXG4gICAgICAgICAgJyUnO1xuICAgIHRleHQocm9vdC5yZWYubWFpbiwgdGl0bGUpO1xuICAgIHRleHQocm9vdC5yZWYuc3ViLCByb290LnF1ZXJ5KCdHRVRfTEFCRUxfVEFQX1RPX0NBTkNFTCcpKTtcbiAgfTtcblxuICB2YXIgZGlkUmVxdWVzdEl0ZW1Qcm9jZXNzaW5nID0gZnVuY3Rpb24gZGlkUmVxdWVzdEl0ZW1Qcm9jZXNzaW5nKF9yZWY0KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNC5yb290O1xuXG4gICAgdGV4dChyb290LnJlZi5tYWluLCByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9QUk9DRVNTSU5HJykpO1xuICAgIHRleHQocm9vdC5yZWYuc3ViLCByb290LnF1ZXJ5KCdHRVRfTEFCRUxfVEFQX1RPX0NBTkNFTCcpKTtcbiAgfTtcblxuICB2YXIgZGlkQWJvcnRJdGVtUHJvY2Vzc2luZyA9IGZ1bmN0aW9uIGRpZEFib3J0SXRlbVByb2Nlc3NpbmcoX3JlZjUpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY1LnJvb3Q7XG5cbiAgICB0ZXh0KHJvb3QucmVmLm1haW4sIHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX1BST0NFU1NJTkdfQUJPUlRFRCcpKTtcbiAgICB0ZXh0KHJvb3QucmVmLnN1Yiwgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX1RBUF9UT19SRVRSWScpKTtcbiAgfTtcblxuICB2YXIgZGlkQ29tcGxldGVJdGVtUHJvY2Vzc2luZyQxID0gZnVuY3Rpb24gZGlkQ29tcGxldGVJdGVtUHJvY2Vzc2luZyhfcmVmNikge1xuICAgIHZhciByb290ID0gX3JlZjYucm9vdDtcblxuICAgIHRleHQocm9vdC5yZWYubWFpbiwgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfUFJPQ0VTU0lOR19DT01QTEVURScpKTtcbiAgICB0ZXh0KHJvb3QucmVmLnN1Yiwgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX1RBUF9UT19VTkRPJykpO1xuXG4gICAgLy9jb25zdCBhbGxvd1JldmVydCA9IHJvb3QucXVlcnkoJ0dFVF9BTExPV19SRVZFUlQnKTtcbiAgICAvL3RleHQocm9vdC5yZWYuc3ViLCBhbGxvd1JldmVydCA/IHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9UQVBfVE9fVU5ETycpIDogJycpO1xuICB9O1xuXG4gIHZhciBjbGVhciA9IGZ1bmN0aW9uIGNsZWFyKF9yZWY3KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNy5yb290O1xuXG4gICAgdGV4dChyb290LnJlZi5tYWluLCAnJyk7XG4gICAgdGV4dChyb290LnJlZi5zdWIsICcnKTtcbiAgfTtcblxuICB2YXIgZXJyb3IgPSBmdW5jdGlvbiBlcnJvcihfcmVmOCkge1xuICAgIHZhciByb290ID0gX3JlZjgucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWY4LmFjdGlvbjtcblxuICAgIHRleHQocm9vdC5yZWYubWFpbiwgYWN0aW9uLnN0YXR1cy5tYWluKTtcbiAgICB0ZXh0KHJvb3QucmVmLnN1YiwgYWN0aW9uLnN0YXR1cy5zdWIpO1xuICB9O1xuXG4gIHZhciBmaWxlU3RhdHVzID0gY3JlYXRlVmlldyh7XG4gICAgbmFtZTogJ2ZpbGUtc3RhdHVzJyxcbiAgICBpZ25vcmVSZWN0OiB0cnVlLFxuICAgIHdyaXRlOiBjcmVhdGVSb3V0ZSh7XG4gICAgICBESURfTE9BRF9JVEVNOiBjbGVhcixcbiAgICAgIERJRF9SRVZFUlRfSVRFTV9QUk9DRVNTSU5HOiBjbGVhcixcbiAgICAgIERJRF9SRVFVRVNUX0lURU1fUFJPQ0VTU0lORzogZGlkUmVxdWVzdEl0ZW1Qcm9jZXNzaW5nLFxuICAgICAgRElEX0FCT1JUX0lURU1fUFJPQ0VTU0lORzogZGlkQWJvcnRJdGVtUHJvY2Vzc2luZyxcbiAgICAgIERJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkc6IGRpZENvbXBsZXRlSXRlbVByb2Nlc3NpbmckMSxcbiAgICAgIERJRF9VUERBVEVfSVRFTV9QUk9DRVNTX1BST0dSRVNTOiBkaWRTZXRJdGVtUHJvY2Vzc1Byb2dyZXNzLFxuICAgICAgRElEX1VQREFURV9JVEVNX0xPQURfUFJPR1JFU1M6IGRpZFNldEl0ZW1Mb2FkUHJvZ3Jlc3MsXG4gICAgICBESURfVEhST1dfSVRFTV9MT0FEX0VSUk9SOiBlcnJvcixcbiAgICAgIERJRF9USFJPV19JVEVNX0lOVkFMSUQ6IGVycm9yLFxuICAgICAgRElEX1RIUk9XX0lURU1fUFJPQ0VTU0lOR19FUlJPUjogZXJyb3JcbiAgICB9KSxcbiAgICBjcmVhdGU6IGNyZWF0ZSQxMCxcbiAgICBtaXhpbnM6IHtcbiAgICAgIHN0eWxlczogWyd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAnb3BhY2l0eSddLFxuICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICBvcGFjaXR5OiB7IHR5cGU6ICd0d2VlbicsIGR1cmF0aW9uOiAyNTAgfSxcbiAgICAgICAgdHJhbnNsYXRlWDogJ3NwcmluZycsXG4gICAgICAgIHRyYW5zbGF0ZVk6ICdzcHJpbmcnXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogQnV0dG9uIGRlZmluaXRpb25zIGZvciB0aGUgZmlsZSB2aWV3XG4gICAqL1xuICB2YXIgQnV0dG9ucyA9IHtcbiAgICBBYm9ydEl0ZW1Mb2FkOiB7XG4gICAgICBsYWJlbDogJ0dFVF9MQUJFTF9CVVRUT05fQUJPUlRfSVRFTV9MT0FEJyxcbiAgICAgIGFjdGlvbjogJ0FCT1JUX0lURU1fTE9BRCcsXG4gICAgICBjbGFzc05hbWU6ICdmaWxlcG9uZC0tYWN0aW9uLWFib3J0LWl0ZW0tbG9hZCdcbiAgICB9LFxuICAgIFJldHJ5SXRlbUxvYWQ6IHtcbiAgICAgIGxhYmVsOiAnR0VUX0xBQkVMX0JVVFRPTl9SRVRSWV9JVEVNX0xPQUQnLFxuICAgICAgYWN0aW9uOiAnUkVUUllfSVRFTV9MT0FEJyxcbiAgICAgIGljb246ICdHRVRfSUNPTl9SRVRSWScsXG4gICAgICBjbGFzc05hbWU6ICdmaWxlcG9uZC0tYWN0aW9uLXJldHJ5LWl0ZW0tbG9hZCdcbiAgICB9LFxuICAgIFJlbW92ZUl0ZW06IHtcbiAgICAgIGxhYmVsOiAnR0VUX0xBQkVMX0JVVFRPTl9SRU1PVkVfSVRFTScsXG4gICAgICBhY3Rpb246ICdSRU1PVkVfSVRFTScsXG4gICAgICBpY29uOiAnR0VUX0lDT05fUkVNT1ZFJyxcbiAgICAgIGNsYXNzTmFtZTogJ2ZpbGVwb25kLS1hY3Rpb24tcmVtb3ZlLWl0ZW0nXG4gICAgfSxcbiAgICBQcm9jZXNzSXRlbToge1xuICAgICAgbGFiZWw6ICdHRVRfTEFCRUxfQlVUVE9OX1BST0NFU1NfSVRFTScsXG4gICAgICBhY3Rpb246ICdSRVFVRVNUX0lURU1fUFJPQ0VTU0lORycsXG4gICAgICBpY29uOiAnR0VUX0lDT05fUFJPQ0VTUycsXG4gICAgICBjbGFzc05hbWU6ICdmaWxlcG9uZC0tYWN0aW9uLXByb2Nlc3MtaXRlbSdcbiAgICB9LFxuICAgIEFib3J0SXRlbVByb2Nlc3Npbmc6IHtcbiAgICAgIGxhYmVsOiAnR0VUX0xBQkVMX0JVVFRPTl9BQk9SVF9JVEVNX1BST0NFU1NJTkcnLFxuICAgICAgYWN0aW9uOiAnQUJPUlRfSVRFTV9QUk9DRVNTSU5HJyxcbiAgICAgIGNsYXNzTmFtZTogJ2ZpbGVwb25kLS1hY3Rpb24tYWJvcnQtaXRlbS1wcm9jZXNzaW5nJ1xuICAgIH0sXG4gICAgUmV0cnlJdGVtUHJvY2Vzc2luZzoge1xuICAgICAgbGFiZWw6ICdHRVRfTEFCRUxfQlVUVE9OX1JFVFJZX0lURU1fUFJPQ0VTU0lORycsXG4gICAgICBhY3Rpb246ICdSRVRSWV9JVEVNX1BST0NFU1NJTkcnLFxuICAgICAgaWNvbjogJ0dFVF9JQ09OX1JFVFJZJyxcbiAgICAgIGNsYXNzTmFtZTogJ2ZpbGVwb25kLS1hY3Rpb24tcmV0cnktaXRlbS1wcm9jZXNzaW5nJ1xuICAgIH0sXG4gICAgUmV2ZXJ0SXRlbVByb2Nlc3Npbmc6IHtcbiAgICAgIGxhYmVsOiAnR0VUX0xBQkVMX0JVVFRPTl9VTkRPX0lURU1fUFJPQ0VTU0lORycsXG4gICAgICBhY3Rpb246ICdSRVZFUlRfSVRFTV9QUk9DRVNTSU5HJyxcbiAgICAgIGljb246ICdHRVRfSUNPTl9VTkRPJyxcbiAgICAgIGNsYXNzTmFtZTogJ2ZpbGVwb25kLS1hY3Rpb24tcmV2ZXJ0LWl0ZW0tcHJvY2Vzc2luZydcbiAgICB9XG4gIH07XG5cbiAgLy8gbWFrZSBhIGxpc3Qgb2YgYnV0dG9ucywgd2UgY2FuIHRoZW4gcmVtb3ZlIGJ1dHRvbnMgZnJvbSB0aGlzIGxpc3QgaWYgdGhleSdyZSBkaXNhYmxlZFxuICB2YXIgQnV0dG9uS2V5cyA9IFtdO1xuICBmb3JpbihCdXR0b25zLCBmdW5jdGlvbihrZXkpIHtcbiAgICBCdXR0b25LZXlzLnB1c2goa2V5KTtcbiAgfSk7XG5cbiAgdmFyIGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0ID0gZnVuY3Rpb24gY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQocm9vdCkge1xuICAgIHJldHVybiAoXG4gICAgICByb290LnJlZi5idXR0b25SZW1vdmVJdGVtLnJlY3QuZWxlbWVudC53aWR0aCArXG4gICAgICByb290LnJlZi5idXR0b25SZW1vdmVJdGVtLnJlY3QuZWxlbWVudC5sZWZ0XG4gICAgKTtcbiAgfTtcblxuICAvLyBGb3JjZSBvbiBmdWxsIHBpeGVscyBzbyB0ZXh0IHN0YXlzIGNyaXBzXG4gIHZhciBjYWxjdWxhdGVGaWxlVmVydGljYWxDZW50ZXJPZmZzZXQgPSBmdW5jdGlvbiBjYWxjdWxhdGVGaWxlVmVydGljYWxDZW50ZXJPZmZzZXQoXG4gICAgcm9vdFxuICApIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihyb290LnJlZi5idXR0b25SZW1vdmVJdGVtLnJlY3QuZWxlbWVudC5oZWlnaHQgLyA0KTtcbiAgfTtcbiAgdmFyIGNhbGN1bGF0ZUZpbGVIb3Jpem9udGFsQ2VudGVyT2Zmc2V0ID0gZnVuY3Rpb24gY2FsY3VsYXRlRmlsZUhvcml6b250YWxDZW50ZXJPZmZzZXQoXG4gICAgcm9vdFxuICApIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihyb290LnJlZi5idXR0b25SZW1vdmVJdGVtLnJlY3QuZWxlbWVudC5sZWZ0IC8gMik7XG4gIH07XG5cbiAgdmFyIERlZmF1bHRTdHlsZSA9IHtcbiAgICBidXR0b25BYm9ydEl0ZW1Mb2FkOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBidXR0b25SZXRyeUl0ZW1Mb2FkOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBidXR0b25SZW1vdmVJdGVtOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBidXR0b25Qcm9jZXNzSXRlbTogeyBvcGFjaXR5OiAwIH0sXG4gICAgYnV0dG9uQWJvcnRJdGVtUHJvY2Vzc2luZzogeyBvcGFjaXR5OiAwIH0sXG4gICAgYnV0dG9uUmV0cnlJdGVtUHJvY2Vzc2luZzogeyBvcGFjaXR5OiAwIH0sXG4gICAgYnV0dG9uUmV2ZXJ0SXRlbVByb2Nlc3Npbmc6IHsgb3BhY2l0eTogMCB9LFxuICAgIGxvYWRQcm9ncmVzc0luZGljYXRvcjogeyBvcGFjaXR5OiAwIH0sXG4gICAgcHJvY2Vzc1Byb2dyZXNzSW5kaWNhdG9yOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBwcm9jZXNzaW5nQ29tcGxldGVJbmRpY2F0b3I6IHsgb3BhY2l0eTogMCwgc2NhbGVYOiAwLjc1LCBzY2FsZVk6IDAuNzUgfSxcbiAgICBpbmZvOiB7IHRyYW5zbGF0ZVg6IDAsIHRyYW5zbGF0ZVk6IDAsIG9wYWNpdHk6IDAgfSxcbiAgICBzdGF0dXM6IHsgdHJhbnNsYXRlWDogMCwgdHJhbnNsYXRlWTogMCwgb3BhY2l0eTogMCB9XG4gIH07XG5cbiAgdmFyIElkbGVTdHlsZSA9IHtcbiAgICBidXR0b25SZW1vdmVJdGVtOiB7IG9wYWNpdHk6IDEgfSxcbiAgICBidXR0b25Qcm9jZXNzSXRlbTogeyBvcGFjaXR5OiAxIH0sXG4gICAgaW5mbzogeyB0cmFuc2xhdGVYOiBjYWxjdWxhdGVGaWxlSW5mb09mZnNldCB9LFxuICAgIHN0YXR1czogeyB0cmFuc2xhdGVYOiBjYWxjdWxhdGVGaWxlSW5mb09mZnNldCB9XG4gIH07XG5cbiAgdmFyIFByb2Nlc3NpbmdTdHlsZSA9IHtcbiAgICBidXR0b25BYm9ydEl0ZW1Qcm9jZXNzaW5nOiB7IG9wYWNpdHk6IDEgfSxcbiAgICBwcm9jZXNzUHJvZ3Jlc3NJbmRpY2F0b3I6IHsgb3BhY2l0eTogMSB9LFxuICAgIHN0YXR1czogeyBvcGFjaXR5OiAxIH1cbiAgfTtcblxuICB2YXIgU3R5bGVNYXAgPSB7XG4gICAgRElEX1RIUk9XX0lURU1fSU5WQUxJRDoge1xuICAgICAgYnV0dG9uUmVtb3ZlSXRlbTogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBpbmZvOiB7IHRyYW5zbGF0ZVg6IGNhbGN1bGF0ZUZpbGVJbmZvT2Zmc2V0IH0sXG4gICAgICBzdGF0dXM6IHsgdHJhbnNsYXRlWDogY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQsIG9wYWNpdHk6IDEgfVxuICAgIH0sXG4gICAgRElEX1NUQVJUX0lURU1fTE9BRDoge1xuICAgICAgYnV0dG9uQWJvcnRJdGVtTG9hZDogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBsb2FkUHJvZ3Jlc3NJbmRpY2F0b3I6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgc3RhdHVzOiB7IG9wYWNpdHk6IDEgfVxuICAgIH0sXG4gICAgRElEX1RIUk9XX0lURU1fTE9BRF9FUlJPUjoge1xuICAgICAgYnV0dG9uUmV0cnlJdGVtTG9hZDogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBidXR0b25SZW1vdmVJdGVtOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGluZm86IHsgdHJhbnNsYXRlWDogY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQgfSxcbiAgICAgIHN0YXR1czogeyBvcGFjaXR5OiAxIH1cbiAgICB9LFxuICAgIERJRF9MT0FEX0lURU06IElkbGVTdHlsZSxcbiAgICBESURfTE9BRF9MT0NBTF9JVEVNOiB7XG4gICAgICBidXR0b25SZW1vdmVJdGVtOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGluZm86IHsgdHJhbnNsYXRlWDogY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQgfSxcbiAgICAgIHN0YXR1czogeyB0cmFuc2xhdGVYOiBjYWxjdWxhdGVGaWxlSW5mb09mZnNldCB9XG4gICAgfSxcbiAgICBESURfU1RBUlRfSVRFTV9QUk9DRVNTSU5HOiBQcm9jZXNzaW5nU3R5bGUsXG4gICAgRElEX1JFUVVFU1RfSVRFTV9QUk9DRVNTSU5HOiBQcm9jZXNzaW5nU3R5bGUsXG4gICAgRElEX1VQREFURV9JVEVNX1BST0NFU1NfUFJPR1JFU1M6IFByb2Nlc3NpbmdTdHlsZSxcbiAgICBESURfQ09NUExFVEVfSVRFTV9QUk9DRVNTSU5HOiB7XG4gICAgICBidXR0b25SZXZlcnRJdGVtUHJvY2Vzc2luZzogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBpbmZvOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIHN0YXR1czogeyBvcGFjaXR5OiAxIH1cbiAgICB9LFxuICAgIERJRF9USFJPV19JVEVNX1BST0NFU1NJTkdfRVJST1I6IHtcbiAgICAgIGJ1dHRvblJlbW92ZUl0ZW06IHsgb3BhY2l0eTogMSB9LFxuICAgICAgYnV0dG9uUmV0cnlJdGVtUHJvY2Vzc2luZzogeyBvcGFjaXR5OiAxIH0sXG4gICAgICBzdGF0dXM6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgaW5mbzogeyB0cmFuc2xhdGVYOiBjYWxjdWxhdGVGaWxlSW5mb09mZnNldCB9XG4gICAgfSxcbiAgICBESURfQUJPUlRfSVRFTV9QUk9DRVNTSU5HOiB7XG4gICAgICBidXR0b25SZW1vdmVJdGVtOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGJ1dHRvblByb2Nlc3NJdGVtOiB7IG9wYWNpdHk6IDEgfSxcbiAgICAgIGluZm86IHsgdHJhbnNsYXRlWDogY2FsY3VsYXRlRmlsZUluZm9PZmZzZXQgfSxcbiAgICAgIHN0YXR1czogeyBvcGFjaXR5OiAxIH1cbiAgICB9LFxuICAgIERJRF9SRVZFUlRfSVRFTV9QUk9DRVNTSU5HOiBJZGxlU3R5bGVcbiAgfTtcblxuICAvLyBjb21wbGV0ZSBpbmRpY2F0b3Igdmlld1xuICB2YXIgcHJvY2Vzc2luZ0NvbXBsZXRlSW5kaWNhdG9yVmlldyA9IGNyZWF0ZVZpZXcoe1xuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICAgIHZhciByb290ID0gX3JlZi5yb290O1xuXG4gICAgICByb290LmVsZW1lbnQuaW5uZXJIVE1MID0gcm9vdC5xdWVyeSgnR0VUX0lDT05fRE9ORScpO1xuICAgIH0sXG4gICAgbmFtZTogJ3Byb2Nlc3NpbmctY29tcGxldGUtaW5kaWNhdG9yJyxcbiAgICBpZ25vcmVSZWN0OiB0cnVlLFxuICAgIG1peGluczoge1xuICAgICAgc3R5bGVzOiBbJ3NjYWxlWCcsICdzY2FsZVknLCAnb3BhY2l0eSddLFxuICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICBzY2FsZVg6ICdzcHJpbmcnLFxuICAgICAgICBzY2FsZVk6ICdzcHJpbmcnLFxuICAgICAgICBvcGFjaXR5OiB7IHR5cGU6ICd0d2VlbicsIGR1cmF0aW9uOiAyNTAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGZpbGUgdmlld1xuICAgKi9cbiAgdmFyIGNyZWF0ZSQ2ID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcztcblxuICAgIC8vIGFsbG93IHJldmVydGluZyB1cGxvYWRcbiAgICB2YXIgYWxsb3dSZXZlcnQgPSByb290LnF1ZXJ5KCdHRVRfQUxMT1dfUkVWRVJUJyk7XG5cbiAgICAvLyBlbmFibGVkIGJ1dHRvbnMgYXJyYXlcbiAgICB2YXIgZW5hYmxlZEJ1dHRvbnMgPSByb290LnF1ZXJ5KCdJU19BU1lOQycpXG4gICAgICA/IEJ1dHRvbktleXMuY29uY2F0KClcbiAgICAgIDogQnV0dG9uS2V5cy5maWx0ZXIoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgcmV0dXJuICEvUHJvY2Vzcy8udGVzdChrZXkpO1xuICAgICAgICB9KTtcblxuICAgIC8vIHJlbW92ZSBsYXN0IGJ1dHRvbiAocmV2ZXJ0KSBpZiBub3QgYWxsb3dlZFxuICAgIGlmICghYWxsb3dSZXZlcnQpIHtcbiAgICAgIGVuYWJsZWRCdXR0b25zLnNwbGljZSgtMSwgMSk7XG4gICAgICB2YXIgbWFwID0gU3R5bGVNYXBbJ0RJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkcnXTtcbiAgICAgIG1hcC5pbmZvLnRyYW5zbGF0ZVggPSBjYWxjdWxhdGVGaWxlSG9yaXpvbnRhbENlbnRlck9mZnNldDtcbiAgICAgIG1hcC5pbmZvLnRyYW5zbGF0ZVkgPSBjYWxjdWxhdGVGaWxlVmVydGljYWxDZW50ZXJPZmZzZXQ7XG4gICAgICBtYXAuc3RhdHVzLnRyYW5zbGF0ZVkgPSBjYWxjdWxhdGVGaWxlVmVydGljYWxDZW50ZXJPZmZzZXQ7XG4gICAgICBtYXAucHJvY2Vzc2luZ0NvbXBsZXRlSW5kaWNhdG9yID0geyBvcGFjaXR5OiAxLCBzY2FsZVg6IDEsIHNjYWxlWTogMSB9O1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSB0aGUgYnV0dG9uIHZpZXdzXG4gICAgZm9yaW4oQnV0dG9ucywgZnVuY3Rpb24oa2V5LCBkZWZpbml0aW9uKSB7XG4gICAgICAvLyBjcmVhdGUgYnV0dG9uXG4gICAgICB2YXIgYnV0dG9uVmlldyA9IHJvb3QuY3JlYXRlQ2hpbGRWaWV3KGZpbGVBY3Rpb25CdXR0b24sIHtcbiAgICAgICAgbGFiZWw6IHJvb3QucXVlcnkoZGVmaW5pdGlvbi5sYWJlbCksXG4gICAgICAgIGljb246IHJvb3QucXVlcnkoZGVmaW5pdGlvbi5pY29uKSxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSk7XG5cbiAgICAgIC8vIHNob3VsZCBiZSBhcHBlbmRlZD9cbiAgICAgIGlmIChlbmFibGVkQnV0dG9ucy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGRWaWV3KGJ1dHRvblZpZXcpO1xuICAgICAgfVxuXG4gICAgICAvLyBhZGQgY2xhc3NcbiAgICAgIGJ1dHRvblZpZXcuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGRlZmluaXRpb24uY2xhc3NOYW1lKTtcblxuICAgICAgLy8gaGFuZGxlIGludGVyYWN0aW9uc1xuICAgICAgYnV0dG9uVmlldy5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcm9vdC5kaXNwYXRjaChkZWZpbml0aW9uLmFjdGlvbiwgeyBxdWVyeTogcHJvcHMuaWQgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gc2V0IHJlZmVyZW5jZVxuICAgICAgcm9vdC5yZWZbJ2J1dHRvbicgKyBrZXldID0gYnV0dG9uVmlldztcbiAgICB9KTtcblxuICAgIC8vIGNyZWF0ZSBmaWxlIGluZm8gdmlld1xuICAgIHJvb3QucmVmLmluZm8gPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KGZpbGVJbmZvLCB7IGlkOiBwcm9wcy5pZCB9KVxuICAgICk7XG5cbiAgICAvLyBjcmVhdGUgZmlsZSBzdGF0dXMgdmlld1xuICAgIHJvb3QucmVmLnN0YXR1cyA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcoZmlsZVN0YXR1cywgeyBpZDogcHJvcHMuaWQgfSlcbiAgICApO1xuXG4gICAgLy8gY2hlY2ttYXJrXG4gICAgcm9vdC5yZWYucHJvY2Vzc2luZ0NvbXBsZXRlSW5kaWNhdG9yID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhwcm9jZXNzaW5nQ29tcGxldGVJbmRpY2F0b3JWaWV3KVxuICAgICk7XG5cbiAgICAvLyBhZGQgcHJvZ3Jlc3MgaW5kaWNhdG9yc1xuICAgIHJvb3QucmVmLmxvYWRQcm9ncmVzc0luZGljYXRvciA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcocHJvZ3Jlc3NJbmRpY2F0b3IsIHsgb3BhY2l0eTogMCB9KVxuICAgICk7XG4gICAgcm9vdC5yZWYubG9hZFByb2dyZXNzSW5kaWNhdG9yLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgICdmaWxlcG9uZC0tbG9hZC1pbmRpY2F0b3InXG4gICAgKTtcblxuICAgIHJvb3QucmVmLnByb2Nlc3NQcm9ncmVzc0luZGljYXRvciA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcocHJvZ3Jlc3NJbmRpY2F0b3IsIHsgb3BhY2l0eTogMCB9KVxuICAgICk7XG5cbiAgICByb290LnJlZi5wcm9jZXNzUHJvZ3Jlc3NJbmRpY2F0b3IuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFxuICAgICAgJ2ZpbGVwb25kLS1wcm9jZXNzLWluZGljYXRvcidcbiAgICApO1xuICB9O1xuXG4gIHZhciB3cml0ZSQ0ID0gZnVuY3Rpb24gd3JpdGUoX3JlZjMpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYzLnJvb3QsXG4gICAgICBhY3Rpb25zID0gX3JlZjMuYWN0aW9ucyxcbiAgICAgIHByb3BzID0gX3JlZjMucHJvcHM7XG5cbiAgICAvLyByb3V0ZSBhY3Rpb25zXG4gICAgcm91dGUkMyh7IHJvb3Q6IHJvb3QsIGFjdGlvbnM6IGFjdGlvbnMsIHByb3BzOiBwcm9wcyB9KTtcblxuICAgIC8vIHNlbGVjdCBsYXN0IHN0YXRlIGNoYW5nZSBhY3Rpb25cbiAgICB2YXIgYWN0aW9uID0gW11cbiAgICAgIC5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkoYWN0aW9ucykpXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICByZXR1cm4gL15ESURfLy50ZXN0KGFjdGlvbi50eXBlKTtcbiAgICAgIH0pXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZmluZChmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIFN0eWxlTWFwW2FjdGlvbi50eXBlXTtcbiAgICAgIH0pO1xuXG4gICAgLy8gbm8gbmVlZCB0byBzZXQgc2FtZSBzdGF0ZSB0d2ljZVxuICAgIGlmICghYWN0aW9uIHx8IChhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IHByb3BzLmN1cnJlbnRTdHlsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzZXQgY3VycmVudCBzdGF0ZVxuICAgIHByb3BzLmN1cnJlbnRTdHlsZSA9IGFjdGlvbi50eXBlO1xuICAgIHZhciBuZXdTdHlsZXMgPSBTdHlsZU1hcFtwcm9wcy5jdXJyZW50U3R5bGVdO1xuXG4gICAgZm9yaW4oRGVmYXVsdFN0eWxlLCBmdW5jdGlvbihuYW1lLCBkZWZhdWx0U3R5bGVzKSB7XG4gICAgICAvLyBnZXQgcmVmZXJlbmNlIHRvIGNvbnRyb2xcbiAgICAgIHZhciBjb250cm9sID0gcm9vdC5yZWZbbmFtZV07XG5cbiAgICAgIC8vIGxvb3Agb3ZlciBhbGwgc3R5bGVzIGZvciB0aGlzIGNvbnRyb2xcbiAgICAgIGZvcmluKGRlZmF1bHRTdHlsZXMsIGZ1bmN0aW9uKGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9XG4gICAgICAgICAgbmV3U3R5bGVzW25hbWVdICYmIHR5cGVvZiBuZXdTdHlsZXNbbmFtZV1ba2V5XSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gbmV3U3R5bGVzW25hbWVdW2tleV1cbiAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlO1xuICAgICAgICBjb250cm9sW2tleV0gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZShyb290KSA6IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJvdXRlJDMgPSBjcmVhdGVSb3V0ZSh7XG4gICAgRElEX1NFVF9MQUJFTF9CVVRUT05fQUJPUlRfSVRFTV9QUk9DRVNTSU5HOiBmdW5jdGlvbiBESURfU0VUX0xBQkVMX0JVVFRPTl9BQk9SVF9JVEVNX1BST0NFU1NJTkcoXG4gICAgICBfcmVmNFxuICAgICkge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmNC5yb290LFxuICAgICAgICBhY3Rpb24gPSBfcmVmNC5hY3Rpb247XG5cbiAgICAgIHJvb3QucmVmLmJ1dHRvbkFib3J0SXRlbVByb2Nlc3NpbmcubGFiZWwgPSBhY3Rpb24udmFsdWU7XG4gICAgfSxcbiAgICBESURfU0VUX0xBQkVMX0JVVFRPTl9BQk9SVF9JVEVNX0xPQUQ6IGZ1bmN0aW9uIERJRF9TRVRfTEFCRUxfQlVUVE9OX0FCT1JUX0lURU1fTE9BRChcbiAgICAgIF9yZWY1XG4gICAgKSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWY1LnJvb3QsXG4gICAgICAgIGFjdGlvbiA9IF9yZWY1LmFjdGlvbjtcblxuICAgICAgcm9vdC5yZWYuYnV0dG9uQWJvcnRJdGVtTG9hZC5sYWJlbCA9IGFjdGlvbi52YWx1ZTtcbiAgICB9LFxuICAgIERJRF9SRVFVRVNUX0lURU1fUFJPQ0VTU0lORzogZnVuY3Rpb24gRElEX1JFUVVFU1RfSVRFTV9QUk9DRVNTSU5HKF9yZWY2KSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWY2LnJvb3Q7XG5cbiAgICAgIHJvb3QucmVmLnByb2Nlc3NQcm9ncmVzc0luZGljYXRvci5zcGluID0gdHJ1ZTtcbiAgICAgIHJvb3QucmVmLnByb2Nlc3NQcm9ncmVzc0luZGljYXRvci5wcm9ncmVzcyA9IDA7XG4gICAgfSxcbiAgICBESURfU1RBUlRfSVRFTV9MT0FEOiBmdW5jdGlvbiBESURfU1RBUlRfSVRFTV9MT0FEKF9yZWY3KSB7XG4gICAgICB2YXIgcm9vdCA9IF9yZWY3LnJvb3Q7XG5cbiAgICAgIHJvb3QucmVmLmxvYWRQcm9ncmVzc0luZGljYXRvci5zcGluID0gdHJ1ZTtcbiAgICAgIHJvb3QucmVmLmxvYWRQcm9ncmVzc0luZGljYXRvci5wcm9ncmVzcyA9IDA7XG4gICAgfSxcbiAgICBESURfVVBEQVRFX0lURU1fTE9BRF9QUk9HUkVTUzogZnVuY3Rpb24gRElEX1VQREFURV9JVEVNX0xPQURfUFJPR1JFU1MoXG4gICAgICBfcmVmOFxuICAgICkge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmOC5yb290LFxuICAgICAgICBhY3Rpb24gPSBfcmVmOC5hY3Rpb247XG5cbiAgICAgIHJvb3QucmVmLmxvYWRQcm9ncmVzc0luZGljYXRvci5zcGluID0gZmFsc2U7XG4gICAgICByb290LnJlZi5sb2FkUHJvZ3Jlc3NJbmRpY2F0b3IucHJvZ3Jlc3MgPSBhY3Rpb24ucHJvZ3Jlc3M7XG4gICAgfSxcbiAgICBESURfVVBEQVRFX0lURU1fUFJPQ0VTU19QUk9HUkVTUzogZnVuY3Rpb24gRElEX1VQREFURV9JVEVNX1BST0NFU1NfUFJPR1JFU1MoXG4gICAgICBfcmVmOVxuICAgICkge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmOS5yb290LFxuICAgICAgICBhY3Rpb24gPSBfcmVmOS5hY3Rpb247XG5cbiAgICAgIHJvb3QucmVmLnByb2Nlc3NQcm9ncmVzc0luZGljYXRvci5zcGluID0gZmFsc2U7XG4gICAgICByb290LnJlZi5wcm9jZXNzUHJvZ3Jlc3NJbmRpY2F0b3IucHJvZ3Jlc3MgPSBhY3Rpb24ucHJvZ3Jlc3M7XG4gICAgfVxuICB9KTtcblxuICB2YXIgZmlsZSA9IGNyZWF0ZVZpZXcoe1xuICAgIGNyZWF0ZTogY3JlYXRlJDYsXG4gICAgd3JpdGU6IHdyaXRlJDQsXG4gICAgZGlkQ3JlYXRlVmlldzogZnVuY3Rpb24gZGlkQ3JlYXRlVmlldyhyb290KSB7XG4gICAgICBhcHBseUZpbHRlcnMoJ0NSRUFURV9WSUVXJywgX2V4dGVuZHMoe30sIHJvb3QsIHsgdmlldzogcm9vdCB9KSk7XG4gICAgfSxcbiAgICBuYW1lOiAnZmlsZSdcbiAgfSk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGZpbGUgdmlld1xuICAgKi9cbiAgdmFyIGNyZWF0ZSQ1ID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcblxuICAgIC8vIGZpbGVuYW1lXG4gICAgcm9vdC5yZWYuZmlsZU5hbWUgPSBjcmVhdGVFbGVtZW50JDEoJ2xlZ2VuZCcpO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQocm9vdC5yZWYuZmlsZU5hbWUpO1xuXG4gICAgLy8gZmlsZSB2aWV3XG4gICAgcm9vdC5yZWYuZmlsZSA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcoZmlsZSwgeyBpZDogcHJvcHMuaWQgfSlcbiAgICApO1xuXG4gICAgLy8gY3JlYXRlIGRhdGEgY29udGFpbmVyXG4gICAgdmFyIGRhdGFDb250YWluZXIgPSBjcmVhdGVFbGVtZW50JDEoJ2lucHV0Jyk7XG4gICAgZGF0YUNvbnRhaW5lci50eXBlID0gJ2hpZGRlbic7XG4gICAgZGF0YUNvbnRhaW5lci5uYW1lID0gcm9vdC5xdWVyeSgnR0VUX05BTUUnKTtcbiAgICByb290LnJlZi5kYXRhID0gZGF0YUNvbnRhaW5lcjtcbiAgICByb290LmFwcGVuZENoaWxkKGRhdGFDb250YWluZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEYXRhIHN0b3JhZ2VcbiAgICovXG4gIHZhciBkaWRMb2FkSXRlbSA9IGZ1bmN0aW9uIGRpZExvYWRJdGVtKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjIuYWN0aW9uLFxuICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcztcblxuICAgIHJvb3QucmVmLmRhdGEudmFsdWUgPSBhY3Rpb24uc2VydmVyRmlsZVJlZmVyZW5jZTtcblxuICAgIC8vIHVwZGF0ZXMgdGhlIGxlZ2VuZCBvZiB0aGUgZmllbGRzZXQgc28gc2NyZWVucmVhZGVycyBjYW4gYmV0dGVyIGdyb3VwIGJ1dHRvbnNcbiAgICB0ZXh0KFxuICAgICAgcm9vdC5yZWYuZmlsZU5hbWUsXG4gICAgICBmb3JtYXRGaWxlbmFtZShyb290LnF1ZXJ5KCdHRVRfSVRFTV9OQU1FJywgcHJvcHMuaWQpKVxuICAgICk7XG4gIH07XG5cbiAgdmFyIGRpZFJlbW92ZUl0ZW0gPSBmdW5jdGlvbiBkaWRSZW1vdmVJdGVtKF9yZWYzKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMy5yb290O1xuXG4gICAgcm9vdC5yZWYuZGF0YS5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH07XG5cbiAgdmFyIGRpZENvbXBsZXRlSXRlbVByb2Nlc3NpbmcgPSBmdW5jdGlvbiBkaWRDb21wbGV0ZUl0ZW1Qcm9jZXNzaW5nKF9yZWY0KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNC5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjQuYWN0aW9uO1xuXG4gICAgcm9vdC5yZWYuZGF0YS52YWx1ZSA9IGFjdGlvbi5zZXJ2ZXJGaWxlUmVmZXJlbmNlO1xuICB9O1xuXG4gIHZhciBkaWRSZXZlcnRJdGVtUHJvY2Vzc2luZyA9IGZ1bmN0aW9uIGRpZFJldmVydEl0ZW1Qcm9jZXNzaW5nKF9yZWY1KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNS5yb290O1xuXG4gICAgcm9vdC5yZWYuZGF0YS5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH07XG5cbiAgdmFyIGZpbGVXcmFwcGVyID0gY3JlYXRlVmlldyh7XG4gICAgY3JlYXRlOiBjcmVhdGUkNSxcbiAgICB3cml0ZTogY3JlYXRlUm91dGUoe1xuICAgICAgRElEX0xPQURfSVRFTTogZGlkTG9hZEl0ZW0sXG4gICAgICBESURfUkVNT1ZFX0lURU06IGRpZFJlbW92ZUl0ZW0sXG4gICAgICBESURfQ09NUExFVEVfSVRFTV9QUk9DRVNTSU5HOiBkaWRDb21wbGV0ZUl0ZW1Qcm9jZXNzaW5nLFxuICAgICAgRElEX1JFVkVSVF9JVEVNX1BST0NFU1NJTkc6IGRpZFJldmVydEl0ZW1Qcm9jZXNzaW5nXG4gICAgfSksXG4gICAgZGlkQ3JlYXRlVmlldzogZnVuY3Rpb24gZGlkQ3JlYXRlVmlldyhyb290KSB7XG4gICAgICBhcHBseUZpbHRlcnMoJ0NSRUFURV9WSUVXJywgX2V4dGVuZHMoe30sIHJvb3QsIHsgdmlldzogcm9vdCB9KSk7XG4gICAgfSxcbiAgICB0YWc6ICdmaWVsZHNldCcsXG4gICAgbmFtZTogJ2ZpbGUtd3JhcHBlcidcbiAgfSk7XG5cbiAgdmFyIFBBTkVMX1NQUklOR19QUk9QUyA9IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDAuNiwgbWFzczogNyB9O1xuXG4gIHZhciBjcmVhdGUkMTEgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gICAgW1xuICAgICAge1xuICAgICAgICBuYW1lOiAndG9wJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2NlbnRlcicsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdHJhbnNsYXRlWTogbnVsbCxcbiAgICAgICAgICBzY2FsZVk6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgbWl4aW5zOiB7XG4gICAgICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICAgICAgc2NhbGVZOiBQQU5FTF9TUFJJTkdfUFJPUFNcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0eWxlczogWyd0cmFuc2xhdGVZJywgJ3NjYWxlWSddXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdib3R0b20nLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHRyYW5zbGF0ZVk6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgbWl4aW5zOiB7XG4gICAgICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICAgICAgdHJhbnNsYXRlWTogUEFORUxfU1BSSU5HX1BST1BTXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdHlsZXM6IFsndHJhbnNsYXRlWSddXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLmZvckVhY2goZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgY3JlYXRlU2VjdGlvbihyb290LCBzZWN0aW9uLCBwcm9wcy5uYW1lKTtcbiAgICB9KTtcblxuICAgIHJvb3QuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaWxlcG9uZC0tJyArIHByb3BzLm5hbWUpO1xuICB9O1xuXG4gIHZhciBjcmVhdGVTZWN0aW9uID0gZnVuY3Rpb24gY3JlYXRlU2VjdGlvbihyb290LCBzZWN0aW9uLCBjbGFzc05hbWUpIHtcbiAgICB2YXIgdmlld0NvbnN0cnVjdG9yID0gY3JlYXRlVmlldyh7XG4gICAgICBuYW1lOiAncGFuZWwtJyArIHNlY3Rpb24ubmFtZSArICcgZmlsZXBvbmQtLScgKyBjbGFzc05hbWUsXG4gICAgICBtaXhpbnM6IHNlY3Rpb24ubWl4aW5zXG4gICAgfSk7XG5cbiAgICB2YXIgdmlldyA9IHJvb3QuY3JlYXRlQ2hpbGRWaWV3KHZpZXdDb25zdHJ1Y3Rvciwgc2VjdGlvbi5wcm9wcyk7XG5cbiAgICByb290LnJlZltzZWN0aW9uLm5hbWVdID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcodmlldyk7XG4gIH07XG5cbiAgdmFyIHdyaXRlJDcgPSBmdW5jdGlvbiB3cml0ZShfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZjIucHJvcHM7XG5cbiAgICBpZiAoIXByb3BzLmhlaWdodCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNhbiBpdCBzY2FsZT9cbiAgICByb290LmVsZW1lbnQuZGF0YXNldC5zY2FsYWJsZSA9IGlzQm9vbGVhbihwcm9wcy5zY2FsYWJsZSlcbiAgICAgID8gcHJvcHMuc2NhbGFibGVcbiAgICAgIDogdHJ1ZTtcblxuICAgIC8vIGdldCBjaGlsZCByZWN0c1xuICAgIHZhciB0b3BSZWN0ID0gcm9vdC5yZWYudG9wLnJlY3QuZWxlbWVudDtcbiAgICB2YXIgYm90dG9tUmVjdCA9IHJvb3QucmVmLmJvdHRvbS5yZWN0LmVsZW1lbnQ7XG5cbiAgICAvLyBtYWtlIHN1cmUgaGVpZ2h0IG5ldmVyIGlzIHNtYWxsZXIgdGhhbiBib3R0b20gYW5kIHRvcCBzZWNpdG9uIGhlaWdodHMgY29tYmluZWQgKHdpbGwgcHJvYmFibHkgbmV2ZXIgaGFwcGVuLCBidXQgd2hvIGtub3dzKVxuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1heCh0b3BSZWN0LmhlaWdodCArIGJvdHRvbVJlY3QuaGVpZ2h0LCBwcm9wcy5oZWlnaHQpO1xuXG4gICAgLy8gb2Zmc2V0IGNlbnRlciBwYXJ0XG4gICAgcm9vdC5yZWYuY2VudGVyLnRyYW5zbGF0ZVkgPSB0b3BSZWN0LmhlaWdodDtcblxuICAgIC8vIHNjYWxlIGNlbnRlciBwYXJ0XG4gICAgLy8gdXNlIG1hdGggY2VpbCB0byBwcmV2ZW50IHRyYW5zcGFyZW50IGxpbmVzIGJlY2F1c2Ugb2Ygcm91bmRpbmcgZXJyb3JzXG4gICAgcm9vdC5yZWYuY2VudGVyLnNjYWxlWSA9XG4gICAgICAoaGVpZ2h0IC0gdG9wUmVjdC5oZWlnaHQgLSBib3R0b21SZWN0LmhlaWdodCkgLyAxMDA7XG5cbiAgICAvLyBvZmZzZXQgYm90dG9tIHBhcnRcbiAgICByb290LnJlZi5ib3R0b20udHJhbnNsYXRlWSA9IGhlaWdodCAtIGJvdHRvbVJlY3QuaGVpZ2h0O1xuICB9O1xuXG4gIHZhciBwYW5lbCA9IGNyZWF0ZVZpZXcoe1xuICAgIG5hbWU6ICdwYW5lbCcsXG4gICAgd3JpdGU6IHdyaXRlJDcsXG4gICAgY3JlYXRlOiBjcmVhdGUkMTEsXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICBtaXhpbnM6IHtcbiAgICAgIGFwaXM6IFsnaGVpZ2h0JywgJ3NjYWxhYmxlJ11cbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBmaWxlIHZpZXdcbiAgICovXG4gIHZhciBjcmVhdGUkNCA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG5cbiAgICAvLyBmaWxlIHZpZXdcbiAgICByb290LnJlZi5jb250cm9scyA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcoZmlsZVdyYXBwZXIsIHsgaWQ6IHByb3BzLmlkIH0pXG4gICAgKTtcblxuICAgIC8vIGZpbGUgcGFuZWxcbiAgICByb290LnJlZi5wYW5lbCA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcocGFuZWwsIHsgbmFtZTogJ2l0ZW0tcGFuZWwnIH0pXG4gICAgKTtcblxuICAgIC8vIGRlZmF1bHQgc3RhcnQgaGVpZ2h0XG4gICAgcm9vdC5yZWYucGFuZWwuaGVpZ2h0ID0gMDtcblxuICAgIC8vIGJ5IGRlZmF1bHQgbm90IG1hcmtlZCBmb3IgcmVtb3ZhbFxuICAgIHByb3BzLm1hcmtlZEZvclJlbW92YWwgPSBmYWxzZTtcbiAgfTtcblxuICB2YXIgU3RhdGVNYXAgPSB7XG4gICAgRElEX1NUQVJUX0lURU1fTE9BRDogJ2J1c3knLFxuICAgIERJRF9VUERBVEVfSVRFTV9MT0FEX1BST0dSRVNTOiAnbG9hZGluZycsXG4gICAgRElEX1RIUk9XX0lURU1fSU5WQUxJRDogJ2xvYWQtaW52YWxpZCcsXG4gICAgRElEX1RIUk9XX0lURU1fTE9BRF9FUlJPUjogJ2xvYWQtZXJyb3InLFxuICAgIERJRF9TVEFSVF9JVEVNX1BST0NFU1NJTkc6ICdidXN5JyxcbiAgICBESURfUkVRVUVTVF9JVEVNX1BST0NFU1NJTkc6ICdidXN5JyxcbiAgICBESURfVVBEQVRFX0lURU1fUFJPQ0VTU19QUk9HUkVTUzogJ3Byb2Nlc3NpbmcnLFxuICAgIERJRF9DT01QTEVURV9JVEVNX1BST0NFU1NJTkc6ICdwcm9jZXNzaW5nLWNvbXBsZXRlJyxcbiAgICBESURfVEhST1dfSVRFTV9QUk9DRVNTSU5HX0VSUk9SOiAncHJvY2Vzc2luZy1lcnJvcicsXG4gICAgRElEX0FCT1JUX0lURU1fUFJPQ0VTU0lORzogJ2NhbmNlbGxlZCcsXG4gICAgRElEX1JFVkVSVF9JVEVNX1BST0NFU1NJTkc6ICdpZGxlJ1xuICB9O1xuXG4gIHZhciB3cml0ZSQzID0gZnVuY3Rpb24gd3JpdGUoX3JlZjIpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYyLnJvb3QsXG4gICAgICBhY3Rpb25zID0gX3JlZjIuYWN0aW9ucyxcbiAgICAgIHByb3BzID0gX3JlZjIucHJvcHM7XG5cbiAgICAvLyB1cGRhdGUgcGFuZWwgaGVpZ2h0XG4gICAgcm9vdC5yZWYucGFuZWwuaGVpZ2h0ID0gcm9vdC5yZWYuY29udHJvbHMucmVjdC5pbm5lci5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgcGFuZWwgaGVpZ2h0XG4gICAgcm9vdC5oZWlnaHQgPSByb290LnJlZi5jb250cm9scy5yZWN0LmlubmVyLmhlaWdodDtcblxuICAgIC8vIHNlbGVjdCBsYXN0IHN0YXRlIGNoYW5nZSBhY3Rpb25cbiAgICB2YXIgYWN0aW9uID0gW11cbiAgICAgIC5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkoYWN0aW9ucykpXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICByZXR1cm4gL15ESURfLy50ZXN0KGFjdGlvbi50eXBlKTtcbiAgICAgIH0pXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZmluZChmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIFN0YXRlTWFwW2FjdGlvbi50eXBlXTtcbiAgICAgIH0pO1xuXG4gICAgLy8gbm8gbmVlZCB0byBzZXQgc2FtZSBzdGF0ZSB0d2ljZVxuICAgIGlmICghYWN0aW9uIHx8IChhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IHByb3BzLmN1cnJlbnRTdGF0ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzZXQgY3VycmVudCBzdGF0ZVxuICAgIHByb3BzLmN1cnJlbnRTdGF0ZSA9IGFjdGlvbi50eXBlO1xuXG4gICAgLy8gc2V0IHN0YXRlXG4gICAgcm9vdC5lbGVtZW50LmRhdGFzZXQuZmlsZXBvbmRJdGVtU3RhdGUgPSBTdGF0ZU1hcFtwcm9wcy5jdXJyZW50U3RhdGVdIHx8ICcnO1xuICB9O1xuXG4gIHZhciBpdGVtID0gY3JlYXRlVmlldyh7XG4gICAgY3JlYXRlOiBjcmVhdGUkNCxcbiAgICB3cml0ZTogd3JpdGUkMyxcbiAgICB0YWc6ICdsaScsXG4gICAgbmFtZTogJ2l0ZW0nLFxuICAgIG1peGluczoge1xuICAgICAgYXBpczogWydpZCcsICdtYXJrZWRGb3JSZW1vdmFsJ10sXG4gICAgICBzdHlsZXM6IFtcbiAgICAgICAgJ3RyYW5zbGF0ZVgnLFxuICAgICAgICAndHJhbnNsYXRlWScsXG4gICAgICAgICdzY2FsZVgnLFxuICAgICAgICAnc2NhbGVZJyxcbiAgICAgICAgJ29wYWNpdHknLFxuICAgICAgICAnaGVpZ2h0J1xuICAgICAgXSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgc2NhbGVYOiAnc3ByaW5nJyxcbiAgICAgICAgc2NhbGVZOiAnc3ByaW5nJyxcbiAgICAgICAgdHJhbnNsYXRlWDogJ3NwcmluZycsXG4gICAgICAgIHRyYW5zbGF0ZVk6ICdzcHJpbmcnLFxuICAgICAgICBvcGFjaXR5OiB7IHR5cGU6ICd0d2VlbicsIGR1cmF0aW9uOiAyNTAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGNyZWF0ZSQzID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdDtcblxuICAgIC8vIG5lZWQgdG8gc2V0IHJvbGUgdG8gbGlzdCBhcyBvdGhlcndpc2UgaXQgd29uJ3QgYmUgcmVhZCBhcyBhIGxpc3QgYnkgVm9pY2VPdmVyXG4gICAgYXR0cihyb290LmVsZW1lbnQsICdyb2xlJywgJ2xpc3QnKTtcbiAgfTtcblxuICAvKipcbiAgICogSW5zZXJ0cyBhIG5ldyBpdGVtXG4gICAqIEBwYXJhbSByb290XG4gICAqIEBwYXJhbSBhY3Rpb25cbiAgICovXG4gIHZhciBhZGRJdGVtVmlldyA9IGZ1bmN0aW9uIGFkZEl0ZW1WaWV3KF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjIuYWN0aW9uO1xuICAgIHZhciBpZCA9IGFjdGlvbi5pZCxcbiAgICAgIGluZGV4ID0gYWN0aW9uLmluZGV4LFxuICAgICAgaW50ZXJhY3Rpb25NZXRob2QgPSBhY3Rpb24uaW50ZXJhY3Rpb25NZXRob2Q7XG5cbiAgICB2YXIgYW5pbWF0aW9uID0ge1xuICAgICAgb3BhY2l0eTogMFxuICAgIH07XG5cbiAgICBpZiAoaW50ZXJhY3Rpb25NZXRob2QgPT09IEludGVyYWN0aW9uTWV0aG9kLk5PTkUpIHtcbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaW50ZXJhY3Rpb25NZXRob2QgPT09IEludGVyYWN0aW9uTWV0aG9kLkRST1ApIHtcbiAgICAgIGFuaW1hdGlvbi5zY2FsZVggPSAwLjg7XG4gICAgICBhbmltYXRpb24uc2NhbGVZID0gMC44O1xuICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChpbnRlcmFjdGlvbk1ldGhvZCA9PT0gSW50ZXJhY3Rpb25NZXRob2QuQlJPV1NFKSB7XG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlWSA9IC0zMDtcbiAgICB9XG5cbiAgICBpZiAoaW50ZXJhY3Rpb25NZXRob2QgPT09IEludGVyYWN0aW9uTWV0aG9kLkFQSSkge1xuICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVggPSAtMTAwO1xuICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkgPSBudWxsO1xuICAgIH1cblxuICAgIHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcoXG4gICAgICAgIC8vIHZpZXcgdHlwZVxuICAgICAgICBpdGVtLFxuXG4gICAgICAgIC8vIHByb3BzXG4gICAgICAgIF9leHRlbmRzKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYW5pbWF0aW9uXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBpbmRleFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZXhpc3RpbmcgaXRlbVxuICAgKiBAcGFyYW0gcm9vdFxuICAgKiBAcGFyYW0gYWN0aW9uXG4gICAqL1xuICB2YXIgcmVtb3ZlSXRlbVZpZXcgPSBmdW5jdGlvbiByZW1vdmVJdGVtVmlldyhfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYzLmFjdGlvbjtcbiAgICB2YXIgaWQgPSBhY3Rpb24uaWQ7XG5cbiAgICAvLyBnZXQgdGhlIHZpZXcgbWF0Y2hpbmcgdGhlIGdpdmVuIGlkXG5cbiAgICB2YXIgdmlldyA9IHJvb3QuY2hpbGRWaWV3cy5maW5kKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQuaWQgPT09IGlkO1xuICAgIH0pO1xuXG4gICAgLy8gaWYgbm8gdmlldyBmb3VuZCwgZXhpdFxuICAgIGlmICghdmlldykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFuaW1hdGUgdmlldyBvdXQgb2Ygdmlld1xuICAgIHZpZXcuc2NhbGVYID0gMC45O1xuICAgIHZpZXcuc2NhbGVZID0gMC45O1xuICAgIHZpZXcub3BhY2l0eSA9IDA7XG5cbiAgICAvLyBtYXJrIGZvciByZW1vdmFsXG4gICAgdmlldy5tYXJrZWRGb3JSZW1vdmFsID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0dXAgYWN0aW9uIHJvdXRlc1xuICAgKi9cbiAgdmFyIHJvdXRlJDIgPSBjcmVhdGVSb3V0ZSh7XG4gICAgRElEX0FERF9JVEVNOiBhZGRJdGVtVmlldyxcbiAgICBESURfUkVNT1ZFX0lURU06IHJlbW92ZUl0ZW1WaWV3XG4gIH0pO1xuXG4gIHZhciBkcmFnVHJhbnNsYXRpb24gPSBmdW5jdGlvbiBkcmFnVHJhbnNsYXRpb24oXG4gICAgY2hpbGRJbmRleCxcbiAgICBkcmFnSW5kZXgsXG4gICAgaXRlbU1hcmdpblxuICApIHtcbiAgICBpZiAoY2hpbGRJbmRleCAtIDEgPT09IGRyYWdJbmRleCkge1xuICAgICAgcmV0dXJuIGl0ZW1NYXJnaW4gLyA2O1xuICAgIH1cblxuICAgIGlmIChjaGlsZEluZGV4ID09PSBkcmFnSW5kZXgpIHtcbiAgICAgIHJldHVybiBpdGVtTWFyZ2luIC8gMjtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGRJbmRleCArIDEgPT09IGRyYWdJbmRleCkge1xuICAgICAgcmV0dXJuIC1pdGVtTWFyZ2luIC8gMjtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGRJbmRleCArIDIgPT09IGRyYWdJbmRleCkge1xuICAgICAgcmV0dXJuIC1pdGVtTWFyZ2luIC8gNjtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICAvKipcbiAgICogV3JpdGUgdG8gdmlld1xuICAgKiBAcGFyYW0gcm9vdFxuICAgKiBAcGFyYW0gYWN0aW9uc1xuICAgKiBAcGFyYW0gcHJvcHNcbiAgICovXG4gIHZhciB3cml0ZSQyID0gZnVuY3Rpb24gd3JpdGUoX3JlZjQpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY0LnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWY0LnByb3BzLFxuICAgICAgYWN0aW9ucyA9IF9yZWY0LmFjdGlvbnM7XG5cbiAgICAvLyByb3V0ZSBhY3Rpb25zXG4gICAgcm91dGUkMih7IHJvb3Q6IHJvb3QsIHByb3BzOiBwcm9wcywgYWN0aW9uczogYWN0aW9ucyB9KTtcblxuICAgIHZhciByZXN0aW5nID0gdHJ1ZTtcblxuICAgIC8vIHVwZGF0ZSBpdGVtIHBvc2l0aW9uc1xuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHJvb3QuY2hpbGRWaWV3c1xuICAgICAgLmZpbHRlcihmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQucmVjdC5vdXRlci5oZWlnaHQ7XG4gICAgICB9KVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24oY2hpbGQsIGNoaWxkSW5kZXgpIHtcbiAgICAgICAgdmFyIGNoaWxkUmVjdCA9IGNoaWxkLnJlY3Q7XG5cbiAgICAgICAgLy8gc2V0IHRoaXMgY2hpbGQgb2Zmc2V0XG4gICAgICAgIGNoaWxkLnRyYW5zbGF0ZVggPSAwO1xuICAgICAgICBjaGlsZC50cmFuc2xhdGVZID1cbiAgICAgICAgICBvZmZzZXQgK1xuICAgICAgICAgIChwcm9wcy5kcmFnSW5kZXggPiAtMVxuICAgICAgICAgICAgPyBkcmFnVHJhbnNsYXRpb24oY2hpbGRJbmRleCwgcHJvcHMuZHJhZ0luZGV4LCAxMClcbiAgICAgICAgICAgIDogMCk7XG5cbiAgICAgICAgLy8gc2hvdyBjaGlsZCBpZiBpdCdzIG5vdCBtYXJrZWQgZm9yIHJlbW92YWxcbiAgICAgICAgaWYgKCFjaGlsZC5tYXJrZWRGb3JSZW1vdmFsKSB7XG4gICAgICAgICAgY2hpbGQuc2NhbGVYID0gMTtcbiAgICAgICAgICBjaGlsZC5zY2FsZVkgPSAxO1xuICAgICAgICAgIGNoaWxkLm9wYWNpdHkgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIG5leHQgY2hpbGQgb2Zmc2V0IChyZWR1Y2UgaGVpZ2h0IGJ5IHkgc2NhbGUgZm9yIHZpZXdzIHRoYXQgYXJlIGJlaW5nIHJlbW92ZWQpXG4gICAgICAgIG9mZnNldCArPSBjaGlsZFJlY3Qub3V0ZXIuaGVpZ2h0O1xuICAgICAgfSk7XG5cbiAgICAvLyByZW1vdmUgbWFya2VkIHZpZXdzXG4gICAgcm9vdC5jaGlsZFZpZXdzXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKHZpZXcpIHtcbiAgICAgICAgcmV0dXJuIHZpZXcubWFya2VkRm9yUmVtb3ZhbCAmJiB2aWV3Lm9wYWNpdHkgPT09IDA7XG4gICAgICB9KVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24odmlldykge1xuICAgICAgICByb290LnJlbW92ZUNoaWxkVmlldyh2aWV3KTtcbiAgICAgICAgcmVzdGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdGluZztcbiAgfTtcblxuICAvKipcbiAgICogRmlsdGVycyBhY3Rpb25zIHRoYXQgYXJlIG1lYW50IHNwZWNpZmljYWxseSBmb3IgYSBjZXJ0YWluIGNoaWxkIG9mIHRoZSBsaXN0XG4gICAqIEBwYXJhbSBjaGlsZFxuICAgKiBAcGFyYW0gYWN0aW9uc1xuICAgKi9cbiAgdmFyIGZpbHRlclNldEl0ZW1BY3Rpb25zID0gZnVuY3Rpb24gZmlsdGVyU2V0SXRlbUFjdGlvbnMoY2hpbGQsIGFjdGlvbnMpIHtcbiAgICByZXR1cm4gYWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAvLyBpZiBhY3Rpb24gaGFzIGFuIGlkLCBmaWx0ZXIgb3V0IGFjdGlvbnMgdGhhdCBkb24ndCBoYXZlIHRoaXMgY2hpbGQgaWRcbiAgICAgIGlmIChhY3Rpb24uZGF0YSAmJiBhY3Rpb24uZGF0YS5pZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQuaWQgPT09IGFjdGlvbi5kYXRhLmlkO1xuICAgICAgfVxuXG4gICAgICAvLyBhbGxvdyBhbGwgb3RoZXIgYWN0aW9uc1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGxpc3QgPSBjcmVhdGVWaWV3KHtcbiAgICBjcmVhdGU6IGNyZWF0ZSQzLFxuICAgIHdyaXRlOiB3cml0ZSQyLFxuICAgIHRhZzogJ3VsJyxcbiAgICBuYW1lOiAnbGlzdCcsXG4gICAgZmlsdGVyRnJhbWVBY3Rpb25zRm9yQ2hpbGQ6IGZpbHRlclNldEl0ZW1BY3Rpb25zLFxuICAgIG1peGluczoge1xuICAgICAgYXBpczogWydkcmFnSW5kZXgnXVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGdldEl0ZW1JbmRleEJ5UG9zaXRpb24gPSBmdW5jdGlvbiBnZXRJdGVtSW5kZXhCeVBvc2l0aW9uKFxuICAgIHZpZXcsXG4gICAgcG9zaXRpb25JblZpZXdcbiAgKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBjaGlsZFZpZXdzID0gdmlldy5jaGlsZFZpZXdzO1xuICAgIHZhciBsID0gY2hpbGRWaWV3cy5sZW5ndGg7XG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gY2hpbGRWaWV3c1tpXTtcbiAgICAgIHZhciBpdGVtUmVjdCA9IGl0ZW0ucmVjdC5vdXRlcjtcbiAgICAgIHZhciBpdGVtUmVjdE1pZCA9IGl0ZW1SZWN0LnRvcCArIGl0ZW1SZWN0LmhlaWdodCAqIDAuNTtcblxuICAgICAgaWYgKHBvc2l0aW9uSW5WaWV3LnRvcCA8IGl0ZW1SZWN0TWlkKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsO1xuICB9O1xuXG4gIHZhciBjcmVhdGUkMiA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG5cbiAgICByb290LnJlZi5saXN0ID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcocm9vdC5jcmVhdGVDaGlsZFZpZXcobGlzdCkpO1xuXG4gICAgcHJvcHMuZHJhZ0Nvb3JkaW5hdGVzID0gbnVsbDtcbiAgICBwcm9wcy5vdmVyZmxvd2luZyA9IGZhbHNlO1xuICB9O1xuXG4gIHZhciBzdG9yZURyYWdDb29yZGluYXRlcyA9IGZ1bmN0aW9uIHN0b3JlRHJhZ0Nvb3JkaW5hdGVzKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcyxcbiAgICAgIGFjdGlvbiA9IF9yZWYyLmFjdGlvbjtcblxuICAgIHByb3BzLmRyYWdDb29yZGluYXRlcyA9IHtcbiAgICAgIGxlZnQ6IGFjdGlvbi5wb3NpdGlvbi5zY29wZUxlZnQsXG4gICAgICB0b3A6XG4gICAgICAgIGFjdGlvbi5wb3NpdGlvbi5zY29wZVRvcCAtXG4gICAgICAgIHJvb3QucmVjdC5vdXRlci50b3AgK1xuICAgICAgICByb290LnJlY3QuZWxlbWVudC5zY3JvbGxUb3BcbiAgICB9O1xuICB9O1xuXG4gIHZhciBjbGVhckRyYWdDb29yZGluYXRlcyA9IGZ1bmN0aW9uIGNsZWFyRHJhZ0Nvb3JkaW5hdGVzKF9yZWYzKSB7XG4gICAgdmFyIHByb3BzID0gX3JlZjMucHJvcHM7XG5cbiAgICBwcm9wcy5kcmFnQ29vcmRpbmF0ZXMgPSBudWxsO1xuICB9O1xuXG4gIHZhciByb3V0ZSQxID0gY3JlYXRlUm91dGUoe1xuICAgIERJRF9EUkFHOiBzdG9yZURyYWdDb29yZGluYXRlcyxcbiAgICBESURfRU5EX0RSQUc6IGNsZWFyRHJhZ0Nvb3JkaW5hdGVzXG4gIH0pO1xuXG4gIHZhciB3cml0ZSQxID0gZnVuY3Rpb24gd3JpdGUoX3JlZjQpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY0LnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWY0LnByb3BzLFxuICAgICAgYWN0aW9ucyA9IF9yZWY0LmFjdGlvbnM7XG5cbiAgICAvLyByb3V0ZSBhY3Rpb25zXG4gICAgcm91dGUkMSh7IHJvb3Q6IHJvb3QsIHByb3BzOiBwcm9wcywgYWN0aW9uczogYWN0aW9ucyB9KTtcblxuICAgIC8vIGN1cnJlbnQgZHJhZyBwb3NpdGlvblxuICAgIHJvb3QucmVmLmxpc3QuZHJhZ0luZGV4ID0gcHJvcHMuZHJhZ0Nvb3JkaW5hdGVzXG4gICAgICA/IGdldEl0ZW1JbmRleEJ5UG9zaXRpb24ocm9vdC5yZWYubGlzdCwgcHJvcHMuZHJhZ0Nvb3JkaW5hdGVzKVxuICAgICAgOiAtMTtcblxuICAgIC8vIGlmIGN1cnJlbnRseSBvdmVyZmxvd2luZyBidXQgbm8gbG9uZ2VyIHJlY2VpdmVkIG92ZXJmbG93XG4gICAgaWYgKHByb3BzLm92ZXJmbG93aW5nICYmICFwcm9wcy5vdmVyZmxvdykge1xuICAgICAgcHJvcHMub3ZlcmZsb3dpbmcgPSBmYWxzZTtcblxuICAgICAgLy8gcmVzZXQgb3ZlcmZsb3cgc3RhdGVcbiAgICAgIHJvb3QuZWxlbWVudC5kYXRhc2V0LnN0YXRlID0gJyc7XG4gICAgICByb290LmhlaWdodCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gaWYgaXMgbm90IG92ZXJmbG93aW5nIGN1cnJlbnRseSBidXQgZG9lcyByZWNlaXZlIG92ZXJmbG93IHZhbHVlXG4gICAgaWYgKCFwcm9wcy5vdmVyZmxvd2luZyAmJiBwcm9wcy5vdmVyZmxvdykge1xuICAgICAgcHJvcHMub3ZlcmZsb3dpbmcgPSB0cnVlO1xuICAgICAgcm9vdC5lbGVtZW50LmRhdGFzZXQuc3RhdGUgPSAnb3ZlcmZsb3cnO1xuICAgICAgcm9vdC5oZWlnaHQgPSBwcm9wcy5vdmVyZmxvdyAtIHJvb3QudHJhbnNsYXRlWTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGxpc3RTY3JvbGxlciA9IGNyZWF0ZVZpZXcoe1xuICAgIGNyZWF0ZTogY3JlYXRlJDIsXG4gICAgd3JpdGU6IHdyaXRlJDEsXG4gICAgbmFtZTogJ2xpc3Qtc2Nyb2xsZXInLFxuICAgIG1peGluczoge1xuICAgICAgYXBpczogWydvdmVyZmxvdyddLFxuICAgICAgc3R5bGVzOiBbJ2hlaWdodCcsICd0cmFuc2xhdGVZJ11cbiAgICB9XG4gIH0pO1xuXG4gIHZhciBhdHRyVG9nZ2xlID0gZnVuY3Rpb24gYXR0clRvZ2dsZShlbGVtZW50LCBuYW1lLCBzdGF0ZSkge1xuICAgIHZhciBlbmFibGVkVmFsdWUgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAnJztcblxuICAgIGlmIChzdGF0ZSkge1xuICAgICAgYXR0cihlbGVtZW50LCBuYW1lLCBlbmFibGVkVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJlc2V0RmlsZUlucHV0ID0gZnVuY3Rpb24gcmVzZXRGaWxlSW5wdXQoaW5wdXQpIHtcbiAgICAvLyBubyB2YWx1ZSwgbm8gbmVlZCB0byByZXNldFxuICAgIGlmICghaW5wdXQgfHwgaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIGZvciBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gICAgLy8gZm9yIElFMTBcbiAgICBpZiAoaW5wdXQudmFsdWUpIHtcbiAgICAgIC8vIHF1aWNrbHkgYXBwZW5kIGlucHV0IHRvIHRlbXAgZm9ybSBhbmQgcmVzZXQgZm9ybVxuICAgICAgdmFyIGZvcm0gPSBjcmVhdGVFbGVtZW50JDEoJ2Zvcm0nKTtcbiAgICAgIHZhciBwYXJlbnROb2RlID0gaW5wdXQucGFyZW50Tm9kZTtcbiAgICAgIHZhciByZWYgPSBpbnB1dC5uZXh0U2libGluZztcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgZm9ybS5yZXNldCgpO1xuXG4gICAgICAvLyByZS1pbmplY3QgaW5wdXQgd2hlcmUgaXQgb3JpZ2luYWxseSB3YXNcbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaW5wdXQsIHJlZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGNyZWF0ZSQxMiA9IGZ1bmN0aW9uIGNyZWF0ZShfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG5cbiAgICAvLyBzZXQgaWQgc28gY2FuIGJlIHJlZmVyZW5jZWQgZnJvbSBvdXRzaWRlIGxhYmVsc1xuICAgIHJvb3QuZWxlbWVudC5pZCA9ICdmaWxlcG9uZC0tYnJvd3Nlci0nICsgcHJvcHMuaWQ7XG5cbiAgICAvLyB3ZSBoYXZlIHRvIGxpbmsgdGhpcyBlbGVtZW50IHRvIHRoZSBzdGF0dXMgZWxlbWVudFxuICAgIGF0dHIocm9vdC5lbGVtZW50LCAnYXJpYS1jb250cm9scycsICdmaWxlcG9uZC0tYXNzaXN0YW50LScgKyBwcm9wcy5pZCk7XG5cbiAgICAvLyBzZXQgbGFiZWwsIHdlIHVzZSBsYWJlbGxlZCBieSBhcyBvdGhlcndpc2UgdGhlIHNjcmVlbnJlYWRlciBkb2VzIG5vdCByZWFkIHRoZSBcImJyb3dzZVwiIHRleHQgaW4gdGhlIGxhYmVsIChhcyBpdCBoYXMgdGFiaW5kZXg6IDApXG4gICAgYXR0cihyb290LmVsZW1lbnQsICdhcmlhLWxhYmVsbGVkYnknLCAnZmlsZXBvbmQtLWRyb3AtbGFiZWwtJyArIHByb3BzLmlkKTtcblxuICAgIC8vIGhhbmRsZSBjaGFuZ2VzIHRvIHRoZSBpbnB1dCBmaWVsZFxuICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghcm9vdC5lbGVtZW50LnZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZXh0cmFjdCBmaWxlc1xuICAgICAgdmFyIGZpbGVzID0gW10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KHJvb3QuZWxlbWVudC5maWxlcykpO1xuXG4gICAgICAvLyB3ZSBhZGQgYSBsaXR0bGUgZGVsYXkgc28gdGhlIE9TIGZpbGUgc2VsZWN0IHdpbmRvdyBjYW4gbW92ZSBvdXQgb2YgdGhlIHdheSBiZWZvcmUgd2UgYWRkIG91ciBmaWxlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBsb2FkIGZpbGVzXG4gICAgICAgIHByb3BzLm9ubG9hZChmaWxlcyk7XG5cbiAgICAgICAgLy8gcmVzZXQgaW5wdXQsIGl0J3MganVzdCBmb3IgZXhwb3NpbmcgYSBtZXRob2QgdG8gZHJvcCBmaWxlcywgc2hvdWxkIG5vdCByZXRhaW4gYW55IHN0YXRlXG4gICAgICAgIHJlc2V0RmlsZUlucHV0KHJvb3QuZWxlbWVudCk7XG4gICAgICB9LCAyNTApO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBzZXRBY2NlcHRlZEZpbGVUeXBlcyA9IGZ1bmN0aW9uIHNldEFjY2VwdGVkRmlsZVR5cGVzKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjIuYWN0aW9uO1xuXG4gICAgYXR0clRvZ2dsZShcbiAgICAgIHJvb3QuZWxlbWVudCxcbiAgICAgICdhY2NlcHQnLFxuICAgICAgISFhY3Rpb24udmFsdWUsXG4gICAgICBhY3Rpb24udmFsdWUgPyBhY3Rpb24udmFsdWUuam9pbignLCcpIDogJydcbiAgICApO1xuICB9O1xuXG4gIHZhciB0b2dnbGVBbGxvd011bHRpcGxlID0gZnVuY3Rpb24gdG9nZ2xlQWxsb3dNdWx0aXBsZShfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYzLmFjdGlvbjtcblxuICAgIGF0dHJUb2dnbGUocm9vdC5lbGVtZW50LCAnbXVsdGlwbGUnLCBhY3Rpb24udmFsdWUpO1xuICB9O1xuXG4gIHZhciB0b2dnbGVBbGxvd0Jyb3dzZSQxID0gZnVuY3Rpb24gdG9nZ2xlQWxsb3dCcm93c2UoX3JlZjQpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY0LnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmNC5hY3Rpb247XG5cbiAgICBhdHRyVG9nZ2xlKHJvb3QuZWxlbWVudCwgJ2Rpc2FibGVkJywgIWFjdGlvbi52YWx1ZSk7XG4gIH07XG5cbiAgdmFyIHRvZ2dsZVJlcXVpcmVkID0gZnVuY3Rpb24gdG9nZ2xlUmVxdWlyZWQoX3JlZjUpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY1LnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmNS5hY3Rpb247XG5cbiAgICAvLyB3YW50IHRvIHJlbW92ZSByZXF1aXJlZCwgYWx3YXlzIHBvc3NpYmxlXG4gICAgaWYgKCFhY3Rpb24udmFsdWUpIHtcbiAgICAgIGF0dHJUb2dnbGUocm9vdC5lbGVtZW50LCAncmVxdWlyZWQnLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChyb290LnF1ZXJ5KCdHRVRfVE9UQUxfSVRFTVMnKSA9PT0gMCkge1xuICAgICAgLy8gaWYgd2FudCB0byBtYWtlIHJlcXVpcmVkLCBvbmx5IHBvc3NpYmxlIHdoZW4gemVybyBpdGVtc1xuICAgICAgYXR0clRvZ2dsZShyb290LmVsZW1lbnQsICdyZXF1aXJlZCcsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgc2V0Q2FwdHVyZU1ldGhvZCA9IGZ1bmN0aW9uIHNldENhcHR1cmVNZXRob2QoX3JlZjYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY2LnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmNi5hY3Rpb247XG5cbiAgICBhdHRyVG9nZ2xlKFxuICAgICAgcm9vdC5lbGVtZW50LFxuICAgICAgJ2NhcHR1cmUnLFxuICAgICAgISFhY3Rpb24udmFsdWUsXG4gICAgICBhY3Rpb24udmFsdWUgPT09IHRydWUgPyAnJyA6IGFjdGlvbi52YWx1ZVxuICAgICk7XG4gIH07XG5cbiAgdmFyIHVwZGF0ZVJlcXVpcmVkU3RhdHVzID0gZnVuY3Rpb24gdXBkYXRlUmVxdWlyZWRTdGF0dXMoX3JlZjgpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY4LnJvb3Q7XG5cbiAgICAvLyBhbHdheXMgcmVtb3ZlIHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUgd2hlbiBtb3JlIHRoYW4gemVybyBpdGVtc1xuICAgIGlmIChyb290LnF1ZXJ5KCdHRVRfVE9UQUxfSVRFTVMnKSA+IDApIHtcbiAgICAgIGF0dHJUb2dnbGUocm9vdC5lbGVtZW50LCAncmVxdWlyZWQnLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChyb290LnF1ZXJ5KCdHRVRfUkVRVUlSRUQnKSkge1xuICAgICAgLy8gaWYgemVybyBpdGVtcywgd2Ugb25seSBhZGQgaXQgaWYgdGhlIGZpZWxkIGlzIHJlcXVpcmVkXG4gICAgICBhdHRyVG9nZ2xlKHJvb3QuZWxlbWVudCwgJ3JlcXVpcmVkJywgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBicm93c2VyID0gY3JlYXRlVmlldyh7XG4gICAgdGFnOiAnaW5wdXQnLFxuICAgIG5hbWU6ICdicm93c2VyJyxcbiAgICBpZ25vcmVSZWN0OiB0cnVlLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIHR5cGU6ICdmaWxlJ1xuICAgIH0sXG4gICAgY3JlYXRlOiBjcmVhdGUkMTIsXG4gICAgd3JpdGU6IGNyZWF0ZVJvdXRlKHtcbiAgICAgIERJRF9BRERfSVRFTTogdXBkYXRlUmVxdWlyZWRTdGF0dXMsXG4gICAgICBESURfUkVNT1ZFX0lURU06IHVwZGF0ZVJlcXVpcmVkU3RhdHVzLFxuICAgICAgRElEX1NFVF9BTExPV19CUk9XU0U6IHRvZ2dsZUFsbG93QnJvd3NlJDEsXG4gICAgICBESURfU0VUX0FMTE9XX01VTFRJUExFOiB0b2dnbGVBbGxvd011bHRpcGxlLFxuICAgICAgRElEX1NFVF9BQ0NFUFRFRF9GSUxFX1RZUEVTOiBzZXRBY2NlcHRlZEZpbGVUeXBlcyxcbiAgICAgIERJRF9TRVRfQ0FQVFVSRV9NRVRIT0Q6IHNldENhcHR1cmVNZXRob2QsXG4gICAgICBESURfU0VUX1JFUVVJUkVEOiB0b2dnbGVSZXF1aXJlZFxuICAgIH0pXG4gIH0pO1xuXG4gIHZhciBLZXkgPSB7XG4gICAgRU5URVI6IDEzLFxuICAgIFNQQUNFOiAzMlxuICB9O1xuXG4gIHZhciBjcmVhdGUkMTMgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBsYWJlbCBhbmQgbGluayBpdCB0byB0aGUgZmlsZSBicm93c2VyXG4gICAgdmFyIGxhYmVsID0gY3JlYXRlRWxlbWVudCQxKCdsYWJlbCcpO1xuICAgIGF0dHIobGFiZWwsICdmb3InLCAnZmlsZXBvbmQtLWJyb3dzZXItJyArIHByb3BzLmlkKTtcblxuICAgIC8vIHVzZSBmb3IgbGFiZWxpbmcgZmlsZSBpbnB1dCAoYXJpYS1sYWJlbGxlZGJ5IG9uIGZpbGUgaW5wdXQpXG4gICAgYXR0cihsYWJlbCwgJ2lkJywgJ2ZpbGVwb25kLS1kcm9wLWxhYmVsLScgKyBwcm9wcy5pZCk7XG5cbiAgICAvLyBoaWRlIHRoZSBsYWJlbCBmcm9tIHNjcmVlbnJlYWRlcnMsIHRoZSBpbnB1dCBlbGVtZW50IGhhcyBhbiBhcmlhLWxhYmVsXG4gICAgYXR0cihsYWJlbCwgJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgIC8vIGhhbmRsZSBrZXlzXG4gICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleS5FTlRFUiB8fCBlLmtleUNvZGUgPT09IEtleS5TUEFDRSkge1xuICAgICAgICAvLyBzdG9wcyBmcm9tIHRyaWdnZXJpbmcgdGhlIGVsZW1lbnQgYSBzZWNvbmQgdGltZVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gY2xpY2sgbGluayAod2lsbCB0aGVuIGluIHR1cm4gYWN0aXZhdGUgZmlsZSBpbnB1dClcbiAgICAgICAgcm9vdC5yZWYubGFiZWwuY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGFkZCFcbiAgICByb290LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICByb290LnJlZi5sYWJlbCA9IGxhYmVsO1xuICB9O1xuXG4gIHZhciB1cGRhdGVMYWJlbFZhbHVlID0gZnVuY3Rpb24gdXBkYXRlTGFiZWxWYWx1ZShsYWJlbCwgdmFsdWUpIHtcbiAgICBsYWJlbC5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICB2YXIgY2xpY2thYmxlID0gbGFiZWwucXVlcnlTZWxlY3RvcignLmZpbGVwb25kLS1sYWJlbC1hY3Rpb24nKTtcbiAgICBpZiAoY2xpY2thYmxlKSB7XG4gICAgICBhdHRyKGNsaWNrYWJsZSwgJ3RhYmluZGV4JywgJzAnKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIHZhciBkcm9wTGFiZWwgPSBjcmVhdGVWaWV3KHtcbiAgICBuYW1lOiAnZHJvcC1sYWJlbCcsXG4gICAgY3JlYXRlOiBjcmVhdGUkMTMsXG4gICAgd3JpdGU6IGNyZWF0ZVJvdXRlKHtcbiAgICAgIERJRF9TRVRfTEFCRUxfSURMRTogZnVuY3Rpb24gRElEX1NFVF9MQUJFTF9JRExFKF9yZWYyKSB7XG4gICAgICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgICAgICBhY3Rpb24gPSBfcmVmMi5hY3Rpb24sXG4gICAgICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcztcblxuICAgICAgICBwcm9wcy5jYXB0aW9uID0gdXBkYXRlTGFiZWxWYWx1ZShyb290LnJlZi5sYWJlbCwgYWN0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9KSxcbiAgICBtaXhpbnM6IHtcbiAgICAgIGFwaXM6IFsnY2FwdGlvbiddLFxuICAgICAgc3R5bGVzOiBbJ29wYWNpdHknLCAndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJ10sXG4gICAgICBhbmltYXRpb25zOiB7XG4gICAgICAgIG9wYWNpdHk6IHsgdHlwZTogJ3R3ZWVuJywgZHVyYXRpb246IDE1MCB9LFxuICAgICAgICB0cmFuc2xhdGVYOiAnc3ByaW5nJyxcbiAgICAgICAgdHJhbnNsYXRlWTogJ3NwcmluZydcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHZhciBibG9iID0gY3JlYXRlVmlldyh7XG4gICAgbmFtZTogJ2RyaXAtYmxvYicsXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICBtaXhpbnM6IHtcbiAgICAgIHN0eWxlczogWyd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAnc2NhbGVYJywgJ3NjYWxlWScsICdvcGFjaXR5J10sXG4gICAgICBhbmltYXRpb25zOiB7XG4gICAgICAgIHNjYWxlWDogJ3NwcmluZycsXG4gICAgICAgIHNjYWxlWTogJ3NwcmluZycsXG4gICAgICAgIHRyYW5zbGF0ZVg6ICdzcHJpbmcnLFxuICAgICAgICB0cmFuc2xhdGVZOiAnc3ByaW5nJyxcbiAgICAgICAgb3BhY2l0eTogeyB0eXBlOiAndHdlZW4nLCBkdXJhdGlvbjogMjUwIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHZhciBhZGRCbG9iID0gZnVuY3Rpb24gYWRkQmxvYihfcmVmKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmLnJvb3Q7XG5cbiAgICB2YXIgY2VudGVyWCA9IHJvb3QucmVjdC5lbGVtZW50LndpZHRoICogMC41O1xuICAgIHZhciBjZW50ZXJZID0gcm9vdC5yZWN0LmVsZW1lbnQuaGVpZ2h0ICogMC41O1xuXG4gICAgcm9vdC5yZWYuYmxvYiA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcoYmxvYiwge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBzY2FsZVg6IDIuNSxcbiAgICAgICAgc2NhbGVZOiAyLjUsXG4gICAgICAgIHRyYW5zbGF0ZVg6IGNlbnRlclgsXG4gICAgICAgIHRyYW5zbGF0ZVk6IGNlbnRlcllcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICB2YXIgbW92ZUJsb2IgPSBmdW5jdGlvbiBtb3ZlQmxvYihfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYyLmFjdGlvbjtcblxuICAgIGlmICghcm9vdC5yZWYuYmxvYikge1xuICAgICAgYWRkQmxvYih7IHJvb3Q6IHJvb3QgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcm9vdC5yZWYuYmxvYi50cmFuc2xhdGVYID0gYWN0aW9uLnBvc2l0aW9uLnNjb3BlTGVmdDtcbiAgICByb290LnJlZi5ibG9iLnRyYW5zbGF0ZVkgPSBhY3Rpb24ucG9zaXRpb24uc2NvcGVUb3A7XG4gICAgcm9vdC5yZWYuYmxvYi5zY2FsZVggPSAxO1xuICAgIHJvb3QucmVmLmJsb2Iuc2NhbGVZID0gMTtcbiAgICByb290LnJlZi5ibG9iLm9wYWNpdHkgPSAxO1xuICB9O1xuXG4gIHZhciBoaWRlQmxvYiA9IGZ1bmN0aW9uIGhpZGVCbG9iKF9yZWYzKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMy5yb290O1xuXG4gICAgaWYgKCFyb290LnJlZi5ibG9iKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJvb3QucmVmLmJsb2Iub3BhY2l0eSA9IDA7XG4gIH07XG5cbiAgdmFyIGV4cGxvZGVCbG9iID0gZnVuY3Rpb24gZXhwbG9kZUJsb2IoX3JlZjQpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY0LnJvb3Q7XG5cbiAgICBpZiAoIXJvb3QucmVmLmJsb2IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcm9vdC5yZWYuYmxvYi5zY2FsZVggPSAyLjU7XG4gICAgcm9vdC5yZWYuYmxvYi5zY2FsZVkgPSAyLjU7XG4gICAgcm9vdC5yZWYuYmxvYi5vcGFjaXR5ID0gMDtcbiAgfTtcblxuICB2YXIgd3JpdGUkOCA9IGZ1bmN0aW9uIHdyaXRlKF9yZWY1KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNS5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmNS5wcm9wcyxcbiAgICAgIGFjdGlvbnMgPSBfcmVmNS5hY3Rpb25zO1xuXG4gICAgcm91dGUkNCh7IHJvb3Q6IHJvb3QsIHByb3BzOiBwcm9wcywgYWN0aW9uczogYWN0aW9ucyB9KTtcblxuICAgIHZhciBibG9iJCQxID0gcm9vdC5yZWYuYmxvYjtcblxuICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMCAmJiBibG9iJCQxICYmIGJsb2IkJDEub3BhY2l0eSA9PT0gMCkge1xuICAgICAgcm9vdC5yZW1vdmVDaGlsZFZpZXcoYmxvYiQkMSk7XG4gICAgICByb290LnJlZi5ibG9iID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJvdXRlJDQgPSBjcmVhdGVSb3V0ZSh7XG4gICAgRElEX0RSQUc6IG1vdmVCbG9iLFxuICAgIERJRF9EUk9QOiBleHBsb2RlQmxvYixcbiAgICBESURfRU5EX0RSQUc6IGhpZGVCbG9iXG4gIH0pO1xuXG4gIHZhciBkcmlwID0gY3JlYXRlVmlldyh7XG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICBuYW1lOiAnZHJpcCcsXG4gICAgd3JpdGU6IHdyaXRlJDhcbiAgfSk7XG5cbiAgdmFyIGdldFJvb3ROb2RlID0gZnVuY3Rpb24gZ2V0Um9vdE5vZGUoZWxlbWVudCkge1xuICAgIHJldHVybiAnZ2V0Um9vdE5vZGUnIGluIGVsZW1lbnQgPyBlbGVtZW50LmdldFJvb3ROb2RlKCkgOiBkb2N1bWVudDtcbiAgfTtcblxuICB2YXIgcmVxdWVzdERhdGFUcmFuc2Zlckl0ZW1zID0gZnVuY3Rpb24gcmVxdWVzdERhdGFUcmFuc2Zlckl0ZW1zKFxuICAgIGRhdGFUcmFuc2ZlclxuICApIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvLyB0cnkgdG8gZ2V0IGxpbmtzIGZyb20gdHJhbnNmZXIsIGlmIGZvdW5kLCB3ZSdsbCBleGl0IGltbWlkaWF0ZWx5XG4gICAgICAvLyBhcyBvbmx5IG9uZSBsaW5rIGNhbiBiZSBkcmFnZ2VkIGF0IG9uY2VcbiAgICAgIHZhciBsaW5rcyA9IGdldExpbmtzKGRhdGFUcmFuc2Zlcik7XG4gICAgICBpZiAobGlua3MubGVuZ3RoKSB7XG4gICAgICAgIHJlc29sdmUobGlua3MpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHRyeSB0byBnZXQgZmlsZXMgZnJvbSB0aGUgdHJhbnNmZXJcbiAgICAgIGdldEZpbGVzKGRhdGFUcmFuc2ZlcikudGhlbihyZXNvbHZlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogRXh0cmFjdHMgZmlsZXMgZnJvbSBhIERhdGFUcmFuc2ZlciBvYmplY3RcbiAgICovXG4gIHZhciBnZXRGaWxlcyA9IGZ1bmN0aW9uIGdldEZpbGVzKGRhdGFUcmFuc2Zlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8vIGdldCB0aGUgdHJhbnNmZXIgaXRlbXMgYXMgcHJvbWlzZXNcbiAgICAgIHZhciBwcm9taXNlZEZpbGVzID0gKGRhdGFUcmFuc2Zlci5pdGVtc1xuICAgICAgICA/IFtdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShkYXRhVHJhbnNmZXIuaXRlbXMpKVxuICAgICAgICA6IFtdXG4gICAgICApXG4gICAgICAgIC8vIG9ubHkga2VlcCBmaWxlIHN5c3RlbSBpdGVtcyAoZmlsZXMgYW5kIGRpcmVjdG9yaWVzKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXNGaWxlU3lzdGVtSXRlbShpdGVtKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBtYXAgZWFjaCBpdGVtIHRvIHByb21pc2VcbiAgICAgICAgLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGdldEZpbGVzRnJvbUl0ZW0oaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBpZiBpcyBlbXB0eSwgc2VlIGlmIHdlIGNhbiBleHRyYWN0IHNvbWUgaW5mbyBmcm9tIHRoZSBmaWxlcyBwcm9wZXJ0eSBhcyBhIGZhbGxiYWNrXG4gICAgICBpZiAoIXByb21pc2VkRmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIFRPRE86IHRlc3QgZm9yIGRpcmVjdG9yaWVzIChzaG91bGQgbm90IGJlIGFsbG93ZWQpXG4gICAgICAgIC8vIFVzZSBGaWxlUmVhZGVyLCBwcm9ibGVtIGlzIHRoYXQgdGhlIGZpbGVzIHByb3BlcnR5IGdldHMgbG9zdCBpbiB0aGUgcHJvY2Vzc1xuXG4gICAgICAgIHJlc29sdmUoW10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KGRhdGFUcmFuc2Zlci5maWxlcykpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBkb25lIVxuICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZWRGaWxlcykudGhlbihmdW5jdGlvbihyZXR1cmVuZEZpbGVHcm91cHMpIHtcbiAgICAgICAgLy8gZmxhdHRlbiBncm91cHNcbiAgICAgICAgdmFyIGZpbGVzID0gW107XG4gICAgICAgIHJldHVyZW5kRmlsZUdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgICAgZmlsZXMucHVzaC5hcHBseShmaWxlcywgdG9Db25zdW1hYmxlQXJyYXkoZ3JvdXApKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZG9uZSAoZmlsdGVyIG91dCBlbXB0eSBmaWxlcykhXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgZmlsZXMuZmlsdGVyKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWxlO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgaXNGaWxlU3lzdGVtSXRlbSA9IGZ1bmN0aW9uIGlzRmlsZVN5c3RlbUl0ZW0oaXRlbSkge1xuICAgIGlmIChpc0VudHJ5KGl0ZW0pKSB7XG4gICAgICB2YXIgZW50cnkgPSBnZXRBc0VudHJ5KGl0ZW0pO1xuICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiBlbnRyeS5pc0ZpbGUgfHwgZW50cnkuaXNEaXJlY3Rvcnk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpdGVtLmtpbmQgPT09ICdmaWxlJztcbiAgfTtcblxuICB2YXIgZ2V0RmlsZXNGcm9tSXRlbSA9IGZ1bmN0aW9uIGdldEZpbGVzRnJvbUl0ZW0oaXRlbSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmIChpc0RpcmVjdG9yeUVudHJ5KGl0ZW0pKSB7XG4gICAgICAgIGdldEZpbGVzSW5EaXJlY3RvcnkoZ2V0QXNFbnRyeShpdGVtKSkudGhlbihyZXNvbHZlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXNvbHZlKFtpdGVtLmdldEFzRmlsZSgpXSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGdldEZpbGVzSW5EaXJlY3RvcnkgPSBmdW5jdGlvbiBnZXRGaWxlc0luRGlyZWN0b3J5KGVudHJ5KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGZpbGVzID0gW107XG5cbiAgICAgIC8vIHRoZSB0b3RhbCBlbnRyaWVzIHRvIHJlYWRcbiAgICAgIHZhciB0b3RhbEZpbGVzRm91bmQgPSAwO1xuXG4gICAgICAvLyB0aGUgcmVjdXJzaXZlIGZ1bmN0aW9uXG4gICAgICB2YXIgcmVhZEVudHJpZXMgPSBmdW5jdGlvbiByZWFkRW50cmllcyhkaXJFbnRyeSkge1xuICAgICAgICB2YXIgZGlyZWN0b3J5UmVhZGVyID0gZGlyRW50cnkuY3JlYXRlUmVhZGVyKCk7XG4gICAgICAgIGRpcmVjdG9yeVJlYWRlci5yZWFkRW50cmllcyhmdW5jdGlvbihlbnRyaWVzKSB7XG4gICAgICAgICAgZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICAvLyByZWN1cnNpdmVseSByZWFkIG1vcmUgZGlyZWN0b3JpZXNcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSkge1xuICAgICAgICAgICAgICByZWFkRW50cmllcyhlbnRyeSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyByZWFkIGFzIGZpbGVcbiAgICAgICAgICAgICAgdG90YWxGaWxlc0ZvdW5kKys7XG4gICAgICAgICAgICAgIGVudHJ5LmZpbGUoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgICAgIGZpbGVzLnB1c2goZmlsZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodG90YWxGaWxlc0ZvdW5kID09PSBmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmlsZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgLy8gZ28hXG4gICAgICByZWFkRW50cmllcyhlbnRyeSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGlzRGlyZWN0b3J5RW50cnkgPSBmdW5jdGlvbiBpc0RpcmVjdG9yeUVudHJ5KGl0ZW0pIHtcbiAgICByZXR1cm4gaXNFbnRyeShpdGVtKSAmJiAoZ2V0QXNFbnRyeShpdGVtKSB8fCB7fSkuaXNEaXJlY3Rvcnk7XG4gIH07XG5cbiAgdmFyIGlzRW50cnkgPSBmdW5jdGlvbiBpc0VudHJ5KGl0ZW0pIHtcbiAgICByZXR1cm4gJ3dlYmtpdEdldEFzRW50cnknIGluIGl0ZW07XG4gIH07XG5cbiAgdmFyIGdldEFzRW50cnkgPSBmdW5jdGlvbiBnZXRBc0VudHJ5KGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS53ZWJraXRHZXRBc0VudHJ5KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIGxpbmtzIGZyb20gYSBEYXRhVHJhbnNmZXIgb2JqZWN0XG4gICAqL1xuICB2YXIgZ2V0TGlua3MgPSBmdW5jdGlvbiBnZXRMaW5rcyhkYXRhVHJhbnNmZXIpIHtcbiAgICB2YXIgbGlua3MgPSBbXTtcbiAgICB0cnkge1xuICAgICAgLy8gbG9vayBpbiBtZXRhIGRhdGEgcHJvcGVydHlcbiAgICAgIGxpbmtzID0gZ2V0TGlua3NGcm9tVHJhbnNmZXJNZXRhRGF0YShkYXRhVHJhbnNmZXIpO1xuICAgICAgaWYgKGxpbmtzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbGlua3M7XG4gICAgICB9XG4gICAgICBsaW5rcyA9IGdldExpbmtzRnJvbVRyYW5zZmVyVVJMRGF0YShkYXRhVHJhbnNmZXIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIG5vcGUgbm9wZSBub3BlIChwcm9iYWJseSBJRSB0cm91YmxlKVxuICAgIH1cbiAgICByZXR1cm4gbGlua3M7XG4gIH07XG5cbiAgdmFyIGdldExpbmtzRnJvbVRyYW5zZmVyVVJMRGF0YSA9IGZ1bmN0aW9uIGdldExpbmtzRnJvbVRyYW5zZmVyVVJMRGF0YShcbiAgICBkYXRhVHJhbnNmZXJcbiAgKSB7XG4gICAgdmFyIGRhdGEgPSBkYXRhVHJhbnNmZXIuZ2V0RGF0YSgndXJsJyk7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtkYXRhXTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9O1xuXG4gIHZhciBnZXRMaW5rc0Zyb21UcmFuc2Zlck1ldGFEYXRhID0gZnVuY3Rpb24gZ2V0TGlua3NGcm9tVHJhbnNmZXJNZXRhRGF0YShcbiAgICBkYXRhVHJhbnNmZXJcbiAgKSB7XG4gICAgdmFyIGRhdGEgPSBkYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9odG1sJyk7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgdmFyIG1hdGNoZXMgPSBkYXRhLm1hdGNoKC9zcmNcXHMqPVxccypcIiguKz8pXCIvKTtcbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiBbbWF0Y2hlc1sxXV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfTtcblxuICB2YXIgZHJhZ05Ecm9wT2JzZXJ2ZXJzID0gW107XG5cbiAgdmFyIGV2ZW50UG9zaXRpb24gPSBmdW5jdGlvbiBldmVudFBvc2l0aW9uKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZUxlZnQ6IGUucGFnZVgsXG4gICAgICBwYWdlVG9wOiBlLnBhZ2VZLFxuICAgICAgc2NvcGVMZWZ0OiBlLmxheWVyWCB8fCBlLm9mZnNldFgsXG4gICAgICBzY29wZVRvcDogZS5sYXllclkgfHwgZS5vZmZzZXRZXG4gICAgfTtcbiAgfTtcblxuICB2YXIgY3JlYXRlRHJhZ05Ecm9wQ2xpZW50ID0gZnVuY3Rpb24gY3JlYXRlRHJhZ05Ecm9wQ2xpZW50KFxuICAgIGVsZW1lbnQsXG4gICAgc2NvcGVUb09ic2VydmUsXG4gICAgZmlsdGVyRWxlbWVudFxuICApIHtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBnZXREcmFnTkRyb3BPYnNlcnZlcihzY29wZVRvT2JzZXJ2ZSk7XG5cbiAgICB2YXIgY2xpZW50ID0ge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIGZpbHRlckVsZW1lbnQ6IGZpbHRlckVsZW1lbnQsXG4gICAgICBzdGF0ZTogbnVsbCxcbiAgICAgIG9uZHJvcDogZnVuY3Rpb24gb25kcm9wKCkge30sXG4gICAgICBvbmVudGVyOiBmdW5jdGlvbiBvbmVudGVyKCkge30sXG4gICAgICBvbmRyYWc6IGZ1bmN0aW9uIG9uZHJhZygpIHt9LFxuICAgICAgb25leGl0OiBmdW5jdGlvbiBvbmV4aXQoKSB7fSxcbiAgICAgIG9ubG9hZDogZnVuY3Rpb24gb25sb2FkKCkge30sXG4gICAgICBhbGxvd2Ryb3A6IGZ1bmN0aW9uIGFsbG93ZHJvcCgpIHt9XG4gICAgfTtcblxuICAgIGNsaWVudC5kZXN0cm95ID0gb2JzZXJ2ZXIuYWRkTGlzdGVuZXIoY2xpZW50KTtcblxuICAgIHJldHVybiBjbGllbnQ7XG4gIH07XG5cbiAgdmFyIGdldERyYWdORHJvcE9ic2VydmVyID0gZnVuY3Rpb24gZ2V0RHJhZ05Ecm9wT2JzZXJ2ZXIoZWxlbWVudCkge1xuICAgIC8vIHNlZSBpZiBhbHJlYWR5IGV4aXN0cywgaWYgc28sIHJldHVyblxuICAgIHZhciBvYnNlcnZlciA9IGRyYWdORHJvcE9ic2VydmVycy5maW5kKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmVsZW1lbnQgPT09IGVsZW1lbnQ7XG4gICAgfSk7XG4gICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2ZXI7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIG5ldyBvYnNlcnZlciwgZG9lcyBub3QgeWV0IGV4aXN0IGZvciB0aGlzIGVsZW1lbnRcbiAgICB2YXIgbmV3T2JzZXJ2ZXIgPSBjcmVhdGVEcmFnTkRyb3BPYnNlcnZlcihlbGVtZW50KTtcbiAgICBkcmFnTkRyb3BPYnNlcnZlcnMucHVzaChuZXdPYnNlcnZlcik7XG4gICAgcmV0dXJuIG5ld09ic2VydmVyO1xuICB9O1xuXG4gIHZhciBjcmVhdGVEcmFnTkRyb3BPYnNlcnZlciA9IGZ1bmN0aW9uIGNyZWF0ZURyYWdORHJvcE9ic2VydmVyKGVsZW1lbnQpIHtcbiAgICB2YXIgY2xpZW50cyA9IFtdO1xuXG4gICAgdmFyIHJvdXRlcyA9IHtcbiAgICAgIGRyYWdlbnRlcjogZHJhZ2VudGVyLFxuICAgICAgZHJhZ292ZXI6IGRyYWdvdmVyLFxuICAgICAgZHJhZ2xlYXZlOiBkcmFnbGVhdmUsXG4gICAgICBkcm9wOiBkcm9wXG4gICAgfTtcblxuICAgIHZhciBoYW5kbGVycyA9IHt9O1xuXG4gICAgZm9yaW4ocm91dGVzLCBmdW5jdGlvbihldmVudCwgY3JlYXRlSGFuZGxlcikge1xuICAgICAgaGFuZGxlcnNbZXZlbnRdID0gY3JlYXRlSGFuZGxlcihlbGVtZW50LCBjbGllbnRzKTtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcnNbZXZlbnRdLCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICB2YXIgb2JzZXJ2ZXIgPSB7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgYWRkTGlzdGVuZXI6IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGNsaWVudCkge1xuICAgICAgICAvLyBhZGQgYXMgY2xpZW50XG4gICAgICAgIGNsaWVudHMucHVzaChjbGllbnQpO1xuXG4gICAgICAgIC8vIHJldHVybiByZW1vdmVMaXN0ZW5lciBmdW5jdGlvblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gcmVtb3ZlIGNsaWVudFxuICAgICAgICAgIGNsaWVudHMuc3BsaWNlKGNsaWVudHMuaW5kZXhPZihjbGllbnQpLCAxKTtcblxuICAgICAgICAgIC8vIGlmIG5vIG1vcmUgY2xpZW50cywgY2xlYW4gdXAgb2JzZXJ2ZXJcbiAgICAgICAgICBpZiAoY2xpZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRyYWdORHJvcE9ic2VydmVycy5zcGxpY2UoZHJhZ05Ecm9wT2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpLCAxKTtcblxuICAgICAgICAgICAgZm9yaW4ocm91dGVzLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXJzW2V2ZW50XSwgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gb2JzZXJ2ZXI7XG4gIH07XG5cbiAgdmFyIGlzRXZlbnRUYXJnZXQgPSBmdW5jdGlvbiBpc0V2ZW50VGFyZ2V0KGUsIHRhcmdldCkge1xuICAgIC8vIGdldCByb290XG4gICAgdmFyIHJvb3QgPSBnZXRSb290Tm9kZSh0YXJnZXQpO1xuXG4gICAgLy8gZ2V0IGVsZW1lbnQgYXQgcG9zaXRpb25cbiAgICB2YXIgZWxlbWVudEF0UG9zaXRpb24gPSByb290LmVsZW1lbnRGcm9tUG9pbnQoXG4gICAgICBlLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgZS5wYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICk7XG5cbiAgICAvLyB0ZXN0IGlmIHRhcmdldCBpcyB0aGUgZWxlbWVudCBvciBpZiBvbmUgb2YgaXRzIGNoaWxkcmVuIGlzXG4gICAgcmV0dXJuIGVsZW1lbnRBdFBvc2l0aW9uID09PSB0YXJnZXQgfHwgdGFyZ2V0LmNvbnRhaW5zKGVsZW1lbnRBdFBvc2l0aW9uKTtcbiAgfTtcblxuICB2YXIgaW5pdGlhbFRhcmdldCA9IG51bGw7XG5cbiAgdmFyIHNldERyb3BFZmZlY3QgPSBmdW5jdGlvbiBzZXREcm9wRWZmZWN0KGRhdGFUcmFuc2ZlciwgZWZmZWN0KSB7XG4gICAgLy8gaXMgaW4gdHJ5IGNhdGNoIGFzIElFMTEgd2lsbCB0aHJvdyBlcnJvciBpZiBub3RcbiAgICB0cnkge1xuICAgICAgZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBlZmZlY3Q7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfTtcblxuICB2YXIgZHJhZ2VudGVyID0gZnVuY3Rpb24gZHJhZ2VudGVyKHJvb3QsIGNsaWVudHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpbml0aWFsVGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICAgIGNsaWVudHMuZm9yRWFjaChmdW5jdGlvbihjbGllbnQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBjbGllbnQuZWxlbWVudCxcbiAgICAgICAgICBvbmVudGVyID0gY2xpZW50Lm9uZW50ZXI7XG5cbiAgICAgICAgaWYgKGlzRXZlbnRUYXJnZXQoZSwgZWxlbWVudCkpIHtcbiAgICAgICAgICBjbGllbnQuc3RhdGUgPSAnZW50ZXInO1xuXG4gICAgICAgICAgLy8gZmlyZSBlbnRlciBldmVudFxuICAgICAgICAgIG9uZW50ZXIoZXZlbnRQb3NpdGlvbihlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGRyYWdvdmVyID0gZnVuY3Rpb24gZHJhZ292ZXIocm9vdCwgY2xpZW50cykge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHZhciBkYXRhVHJhbnNmZXIgPSBlLmRhdGFUcmFuc2ZlcjtcblxuICAgICAgcmVxdWVzdERhdGFUcmFuc2Zlckl0ZW1zKGRhdGFUcmFuc2ZlcikudGhlbihmdW5jdGlvbihpdGVtcykge1xuICAgICAgICB2YXIgb3ZlckRyb3BUYXJnZXQgPSBmYWxzZTtcblxuICAgICAgICBjbGllbnRzLnNvbWUoZnVuY3Rpb24oY2xpZW50KSB7XG4gICAgICAgICAgdmFyIGZpbHRlckVsZW1lbnQgPSBjbGllbnQuZmlsdGVyRWxlbWVudCxcbiAgICAgICAgICAgIGVsZW1lbnQgPSBjbGllbnQuZWxlbWVudCxcbiAgICAgICAgICAgIG9uZW50ZXIgPSBjbGllbnQub25lbnRlcixcbiAgICAgICAgICAgIG9uZXhpdCA9IGNsaWVudC5vbmV4aXQsXG4gICAgICAgICAgICBvbmRyYWcgPSBjbGllbnQub25kcmFnLFxuICAgICAgICAgICAgYWxsb3dkcm9wID0gY2xpZW50LmFsbG93ZHJvcDtcblxuICAgICAgICAgIC8vIGJ5IGRlZmF1bHQgd2UgY2FuIGRyb3BcblxuICAgICAgICAgIHNldERyb3BFZmZlY3QoZGF0YVRyYW5zZmVyLCAnY29weScpO1xuXG4gICAgICAgICAgLy8gYWxsb3cgdHJhbnNmZXIgb2YgdGhlc2UgaXRlbXNcbiAgICAgICAgICB2YXIgYWxsb3dzVHJhbnNmZXIgPSBhbGxvd2Ryb3AoaXRlbXMpO1xuXG4gICAgICAgICAgLy8gb25seSB1c2VkIHdoZW4gY2FuIGJlIGRyb3BwZWQgb24gcGFnZVxuICAgICAgICAgIGlmICghYWxsb3dzVHJhbnNmZXIpIHtcbiAgICAgICAgICAgIHNldERyb3BFZmZlY3QoZGF0YVRyYW5zZmVyLCAnbm9uZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHRhcmdldHRpbmcgdGhpcyBjbGllbnRcbiAgICAgICAgICBpZiAoaXNFdmVudFRhcmdldChlLCBlbGVtZW50KSkge1xuICAgICAgICAgICAgb3ZlckRyb3BUYXJnZXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBoYWQgbm8gcHJldmlvdXMgc3RhdGUsIG1lYW5zIHdlIGFyZSBlbnRlcmluZyB0aGlzIGNsaWVudFxuICAgICAgICAgICAgaWYgKGNsaWVudC5zdGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBjbGllbnQuc3RhdGUgPSAnZW50ZXInO1xuICAgICAgICAgICAgICBvbmVudGVyKGV2ZW50UG9zaXRpb24oZSkpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5vdyBvdmVyIGVsZW1lbnQgKG5vIG1hdHRlciBpZiBpdCBhbGxvd3MgdGhlIGRyb3Agb3Igbm90KVxuICAgICAgICAgICAgY2xpZW50LnN0YXRlID0gJ292ZXInO1xuXG4gICAgICAgICAgICAvLyBuZWVkcyB0byBhbGxvdyB0cmFuc2ZlclxuICAgICAgICAgICAgaWYgKGZpbHRlckVsZW1lbnQgJiYgIWFsbG93c1RyYW5zZmVyKSB7XG4gICAgICAgICAgICAgIHNldERyb3BFZmZlY3QoZGF0YVRyYW5zZmVyLCAnbm9uZScpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRyYWdnaW5nXG4gICAgICAgICAgICBvbmRyYWcoZXZlbnRQb3NpdGlvbihlKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNob3VsZCBiZSBvdmVyIGFuIGVsZW1lbnQgdG8gZHJvcFxuICAgICAgICAgICAgaWYgKGZpbHRlckVsZW1lbnQgJiYgIW92ZXJEcm9wVGFyZ2V0KSB7XG4gICAgICAgICAgICAgIHNldERyb3BFZmZlY3QoZGF0YVRyYW5zZmVyLCAnbm9uZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBtaWdodCBoYXZlIGp1c3QgbGVmdCB0aGlzIGNsaWVudD9cbiAgICAgICAgICAgIGlmIChjbGllbnQuc3RhdGUpIHtcbiAgICAgICAgICAgICAgY2xpZW50LnN0YXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgb25leGl0KGV2ZW50UG9zaXRpb24oZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBkcm9wID0gZnVuY3Rpb24gZHJvcChyb290LCBjbGllbnRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdmFyIGRhdGFUcmFuc2ZlciA9IGUuZGF0YVRyYW5zZmVyO1xuICAgICAgcmVxdWVzdERhdGFUcmFuc2Zlckl0ZW1zKGRhdGFUcmFuc2ZlcikudGhlbihmdW5jdGlvbihpdGVtcykge1xuICAgICAgICBjbGllbnRzLmZvckVhY2goZnVuY3Rpb24oY2xpZW50KSB7XG4gICAgICAgICAgdmFyIGZpbHRlckVsZW1lbnQgPSBjbGllbnQuZmlsdGVyRWxlbWVudCxcbiAgICAgICAgICAgIGVsZW1lbnQgPSBjbGllbnQuZWxlbWVudCxcbiAgICAgICAgICAgIG9uZHJvcCA9IGNsaWVudC5vbmRyb3AsXG4gICAgICAgICAgICBvbmV4aXQgPSBjbGllbnQub25leGl0LFxuICAgICAgICAgICAgYWxsb3dkcm9wID0gY2xpZW50LmFsbG93ZHJvcDtcblxuICAgICAgICAgIGNsaWVudC5zdGF0ZSA9IG51bGw7XG5cbiAgICAgICAgICB2YXIgYWxsb3dzVHJhbnNmZXIgPSBhbGxvd2Ryb3AoaXRlbXMpO1xuXG4gICAgICAgICAgLy8gbm8gdHJhbnNmZXIgZm9yIHRoaXMgY2xpZW50XG4gICAgICAgICAgaWYgKCFhbGxvd3NUcmFuc2Zlcikge1xuICAgICAgICAgICAgb25leGl0KGV2ZW50UG9zaXRpb24oZSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGlmIHdlJ3JlIGZpbHRlcmluZyBvbiBlbGVtZW50IHdlIG5lZWQgdG8gYmUgb3ZlciB0aGUgZWxlbWVudCB0byBkcm9wXG4gICAgICAgICAgaWYgKGZpbHRlckVsZW1lbnQgJiYgIWlzRXZlbnRUYXJnZXQoZSwgZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvbmRyb3AoZXZlbnRQb3NpdGlvbihlKSwgaXRlbXMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGRyYWdsZWF2ZSA9IGZ1bmN0aW9uIGRyYWdsZWF2ZShyb290LCBjbGllbnRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChpbml0aWFsVGFyZ2V0ICE9PSBlLnRhcmdldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsaWVudHMuZm9yRWFjaChmdW5jdGlvbihjbGllbnQpIHtcbiAgICAgICAgdmFyIG9uZXhpdCA9IGNsaWVudC5vbmV4aXQ7XG5cbiAgICAgICAgY2xpZW50LnN0YXRlID0gbnVsbDtcblxuICAgICAgICBvbmV4aXQoZXZlbnRQb3NpdGlvbihlKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBjcmVhdGVIb3BwZXIgPSBmdW5jdGlvbiBjcmVhdGVIb3BwZXIoc2NvcGUsIHZhbGlkYXRlSXRlbXMsIG9wdGlvbnMpIHtcbiAgICAvLyBpcyBub3cgaG9wcGVyIHNjb3BlXG4gICAgc2NvcGUuY2xhc3NMaXN0LmFkZCgnZmlsZXBvbmQtLWhvcHBlcicpO1xuXG4gICAgLy8gc2hvcnRjdXRzXG4gICAgdmFyIGNhdGNoZXNEcm9wc09uUGFnZSA9IG9wdGlvbnMuY2F0Y2hlc0Ryb3BzT25QYWdlLFxuICAgICAgcmVxdWlyZXNEcm9wT25FbGVtZW50ID0gb3B0aW9ucy5yZXF1aXJlc0Ryb3BPbkVsZW1lbnQ7XG5cbiAgICAvLyBjcmVhdGUgYSBkbmQgY2xpZW50XG5cbiAgICB2YXIgY2xpZW50ID0gY3JlYXRlRHJhZ05Ecm9wQ2xpZW50KFxuICAgICAgc2NvcGUsXG4gICAgICBjYXRjaGVzRHJvcHNPblBhZ2UgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBzY29wZSxcbiAgICAgIHJlcXVpcmVzRHJvcE9uRWxlbWVudFxuICAgICk7XG5cbiAgICAvLyBjdXJyZW50IGNsaWVudCBzdGF0ZVxuICAgIHZhciBsYXN0U3RhdGUgPSAnJztcbiAgICB2YXIgY3VycmVudFN0YXRlID0gJyc7XG5cbiAgICAvLyBkZXRlcm1pbmVzIGlmIGEgZmlsZSBtYXkgYmUgZHJvcHBlZFxuICAgIGNsaWVudC5hbGxvd2Ryb3AgPSBmdW5jdGlvbihpdGVtcykge1xuICAgICAgLy8gVE9ETzogaWYgd2UgY2FuLCB0aHJvdyBlcnJvciB0byBpbmRpY2F0ZSB0aGUgaXRlbXMgY2Fubm90IGJ5IGRyb3BwZWRcblxuICAgICAgcmV0dXJuIHZhbGlkYXRlSXRlbXMoaXRlbXMpO1xuICAgIH07XG5cbiAgICBjbGllbnQub25kcm9wID0gZnVuY3Rpb24ocG9zaXRpb24sIGl0ZW1zKSB7XG4gICAgICBpZiAoIXZhbGlkYXRlSXRlbXMoaXRlbXMpKSB7XG4gICAgICAgIGFwaS5vbmRyYWdlbmQocG9zaXRpb24pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRTdGF0ZSA9ICdkcmFnLWRyb3AnO1xuXG4gICAgICBhcGkub25sb2FkKGl0ZW1zLCBwb3NpdGlvbik7XG4gICAgfTtcblxuICAgIGNsaWVudC5vbmRyYWcgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgYXBpLm9uZHJhZyhwb3NpdGlvbik7XG4gICAgfTtcblxuICAgIGNsaWVudC5vbmVudGVyID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9ICdkcmFnLW92ZXInO1xuXG4gICAgICBhcGkub25kcmFnc3RhcnQocG9zaXRpb24pO1xuICAgIH07XG5cbiAgICBjbGllbnQub25leGl0ID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9ICdkcmFnLWV4aXQnO1xuXG4gICAgICBhcGkub25kcmFnZW5kKHBvc2l0aW9uKTtcbiAgICB9O1xuXG4gICAgdmFyIGFwaSA9IHtcbiAgICAgIHVwZGF0ZUhvcHBlclN0YXRlOiBmdW5jdGlvbiB1cGRhdGVIb3BwZXJTdGF0ZSgpIHtcbiAgICAgICAgaWYgKGxhc3RTdGF0ZSAhPT0gY3VycmVudFN0YXRlKSB7XG4gICAgICAgICAgc2NvcGUuZGF0YXNldC5ob3BwZXJTdGF0ZSA9IGN1cnJlbnRTdGF0ZTtcbiAgICAgICAgICBsYXN0U3RhdGUgPSBjdXJyZW50U3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbmxvYWQ6IGZ1bmN0aW9uIG9ubG9hZCgpIHt9LFxuICAgICAgb25kcmFnc3RhcnQ6IGZ1bmN0aW9uIG9uZHJhZ3N0YXJ0KCkge30sXG4gICAgICBvbmRyYWc6IGZ1bmN0aW9uIG9uZHJhZygpIHt9LFxuICAgICAgb25kcmFnZW5kOiBmdW5jdGlvbiBvbmRyYWdlbmQoKSB7fSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vIGRlc3Ryb3kgY2xpZW50XG4gICAgICAgIGNsaWVudC5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBhcGk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbmluZyA9IGZhbHNlO1xuICB2YXIgbGlzdGVuZXJzJDEgPSBbXTtcblxuICB2YXIgaGFuZGxlUGFzdGUgPSBmdW5jdGlvbiBoYW5kbGVQYXN0ZShlKSB7XG4gICAgcmVxdWVzdERhdGFUcmFuc2Zlckl0ZW1zKGUuY2xpcGJvYXJkRGF0YSkudGhlbihmdW5jdGlvbihmaWxlcykge1xuICAgICAgLy8gbm8gZmlsZXMgcmVjZWl2ZWRcbiAgICAgIGlmICghZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gbm90aWZ5IGxpc3RlbmVycyBvZiByZWNlaXZlZCBmaWxlc1xuICAgICAgbGlzdGVuZXJzJDEuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXIoZmlsZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbihjYikge1xuICAgIC8vIGNhbid0IGFkZCB0d2ljZVxuICAgIGlmIChsaXN0ZW5lcnMkMS5pbmNsdWRlcyhjYikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhZGQgaW5pdGlhbCBsaXN0ZW5lclxuICAgIGxpc3RlbmVycyQxLnB1c2goY2IpO1xuXG4gICAgLy8gc2V0dXAgcGFzdGUgbGlzdGVuZXIgZm9yIGVudGlyZSBwYWdlXG4gICAgaWYgKGxpc3RlbmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxpc3RlbmluZyA9IHRydWU7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBoYW5kbGVQYXN0ZSk7XG4gIH07XG5cbiAgdmFyIHVubGlzdGVuID0gZnVuY3Rpb24gdW5saXN0ZW4obGlzdGVuZXIpIHtcbiAgICBhcnJheVJlbW92ZShsaXN0ZW5lcnMkMSwgbGlzdGVuZXJzJDEuaW5kZXhPZihsaXN0ZW5lcikpO1xuXG4gICAgLy8gY2xlYW4gdXBcbiAgICBpZiAobGlzdGVuZXJzJDEubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXN0ZScsIGhhbmRsZVBhc3RlKTtcbiAgICAgIGxpc3RlbmluZyA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY3JlYXRlUGFzdGVyID0gZnVuY3Rpb24gY3JlYXRlUGFzdGVyKCkge1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uIGNiKGZpbGVzKSB7XG4gICAgICBhcGkub25sb2FkKGZpbGVzKTtcbiAgICB9O1xuXG4gICAgdmFyIGFwaSA9IHtcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHVubGlzdGVuKGNiKTtcbiAgICAgIH0sXG4gICAgICBvbmxvYWQ6IGZ1bmN0aW9uIG9ubG9hZCgpIHt9XG4gICAgfTtcblxuICAgIGxpc3RlbihjYik7XG5cbiAgICByZXR1cm4gYXBpO1xuICB9O1xuXG4gIHZhciBkZWJvdW5jZSA9IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMpIHtcbiAgICB2YXIgaW50ZXJ2YWwgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxNjtcbiAgICB2YXIgaW1taWRpYXRlT25seSA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG5cbiAgICB2YXIgbGFzdCA9IERhdGUubm93KCk7XG4gICAgdmFyIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgZm9yIChcbiAgICAgICAgdmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwO1xuICAgICAgICBfa2V5IDwgX2xlbjtcbiAgICAgICAgX2tleSsrXG4gICAgICApIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgICB2YXIgZGlzdCA9IERhdGUubm93KCkgLSBsYXN0O1xuXG4gICAgICB2YXIgZm4gPSBmdW5jdGlvbiBmbigpIHtcbiAgICAgICAgbGFzdCA9IERhdGUubm93KCk7XG4gICAgICAgIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChkaXN0IDwgaW50ZXJ2YWwpIHtcbiAgICAgICAgLy8gd2UgbmVlZCB0byBkZWxheSBieSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGludGVydmFsIGFuZCBkaXN0XG4gICAgICAgIC8vIGZvciBleGFtcGxlOiBpZiBkaXN0YW5jZSBpcyAxMCBtcyBhbmQgaW50ZXJ2YWwgaXMgMTYgbXMsXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gd2FpdCBhbiBhZGRpdGlvbmFsIDZtcyBiZWZvcmUgY2FsbGluZyB0aGUgZnVuY3Rpb24pXG4gICAgICAgIGlmICghaW1taWRpYXRlT25seSkge1xuICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZuLCBpbnRlcnZhbCAtIGRpc3QpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBnbyFcbiAgICAgICAgZm4oKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBmaWxlIHZpZXdcbiAgICovXG4gIHZhciBjcmVhdGUkMTQgPSBmdW5jdGlvbiBjcmVhdGUoX3JlZikge1xuICAgIHZhciByb290ID0gX3JlZi5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gICAgcm9vdC5lbGVtZW50LmlkID0gJ2ZpbGVwb25kLS1hc3Npc3RhbnQtJyArIHByb3BzLmlkO1xuICAgIGF0dHIocm9vdC5lbGVtZW50LCAncm9sZScsICdzdGF0dXMnKTtcbiAgICBhdHRyKHJvb3QuZWxlbWVudCwgJ2FyaWEtbGl2ZScsICdwb2xpdGUnKTtcbiAgICBhdHRyKHJvb3QuZWxlbWVudCwgJ2FyaWEtcmVsZXZhbnQnLCAnYWRkaXRpb25zJyk7XG4gIH07XG5cbiAgdmFyIGFkZEZpbGVzTm90aWZpY2F0aW9uVGltZW91dCA9IG51bGw7XG4gIHZhciBub3RpZmljYXRpb25DbGVhclRpbWVvdXQgPSBudWxsO1xuXG4gIHZhciBmaWxlbmFtZXMgPSBbXTtcblxuICB2YXIgYXNzaXN0ID0gZnVuY3Rpb24gYXNzaXN0KHJvb3QsIG1lc3NhZ2UpIHtcbiAgICByb290LmVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICB9O1xuXG4gIHZhciBjbGVhciQxID0gZnVuY3Rpb24gY2xlYXIocm9vdCkge1xuICAgIHJvb3QuZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICB9O1xuXG4gIHZhciBsaXN0TW9kaWZpZWQgPSBmdW5jdGlvbiBsaXN0TW9kaWZpZWQocm9vdCwgZmlsZW5hbWUsIGxhYmVsKSB7XG4gICAgdmFyIHRvdGFsID0gcm9vdC5xdWVyeSgnR0VUX1RPVEFMX0lURU1TJyk7XG4gICAgYXNzaXN0KFxuICAgICAgcm9vdCxcbiAgICAgIGxhYmVsICtcbiAgICAgICAgJyAnICtcbiAgICAgICAgZmlsZW5hbWUgK1xuICAgICAgICAnLCAnICtcbiAgICAgICAgdG90YWwgK1xuICAgICAgICAnICcgK1xuICAgICAgICAodG90YWwgPT09IDFcbiAgICAgICAgICA/IHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX0NPVU5UX1NJTkdVTEFSJylcbiAgICAgICAgICA6IHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX0NPVU5UX1BMVVJBTCcpKVxuICAgICk7XG5cbiAgICAvLyBjbGVhciBncm91cCBhZnRlciBzZXQgYW1vdW50IG9mIHRpbWUgc28gdGhlIHN0YXR1cyBpcyBub3QgcmVhZCB0d2ljZVxuICAgIGNsZWFyVGltZW91dChub3RpZmljYXRpb25DbGVhclRpbWVvdXQpO1xuICAgIG5vdGlmaWNhdGlvbkNsZWFyVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBjbGVhciQxKHJvb3QpO1xuICAgIH0sIDE1MDApO1xuICB9O1xuXG4gIHZhciBpc1VzaW5nRmlsZVBvbmQgPSBmdW5jdGlvbiBpc1VzaW5nRmlsZVBvbmQocm9vdCkge1xuICAgIHJldHVybiByb290LmVsZW1lbnQucGFyZW50Tm9kZS5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgfTtcblxuICB2YXIgaXRlbUFkZGVkID0gZnVuY3Rpb24gaXRlbUFkZGVkKF9yZWYyKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMi5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjIuYWN0aW9uO1xuXG4gICAgaWYgKCFpc1VzaW5nRmlsZVBvbmQocm9vdCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByb290LmVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICB2YXIgaXRlbSA9IHJvb3QucXVlcnkoJ0dFVF9JVEVNJywgYWN0aW9uLmlkKTtcbiAgICBmaWxlbmFtZXMucHVzaChpdGVtLmZpbGVuYW1lKTtcblxuICAgIGNsZWFyVGltZW91dChhZGRGaWxlc05vdGlmaWNhdGlvblRpbWVvdXQpO1xuICAgIGFkZEZpbGVzTm90aWZpY2F0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBsaXN0TW9kaWZpZWQoXG4gICAgICAgIHJvb3QsXG4gICAgICAgIGZpbGVuYW1lcy5qb2luKCcsICcpLFxuICAgICAgICByb290LnF1ZXJ5KCdHRVRfTEFCRUxfRklMRV9BRERFRCcpXG4gICAgICApO1xuICAgICAgZmlsZW5hbWVzLmxlbmd0aCA9IDA7XG4gICAgfSwgNzUwKTtcbiAgfTtcblxuICB2YXIgaXRlbVJlbW92ZWQgPSBmdW5jdGlvbiBpdGVtUmVtb3ZlZChfcmVmMykge1xuICAgIHZhciByb290ID0gX3JlZjMucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWYzLmFjdGlvbjtcblxuICAgIGlmICghaXNVc2luZ0ZpbGVQb25kKHJvb3QpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGl0ZW0gPSBhY3Rpb24uaXRlbTtcbiAgICBsaXN0TW9kaWZpZWQocm9vdCwgaXRlbS5maWxlbmFtZSwgcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfUkVNT1ZFRCcpKTtcbiAgfTtcblxuICB2YXIgaXRlbVByb2Nlc3NlZCA9IGZ1bmN0aW9uIGl0ZW1Qcm9jZXNzZWQoX3JlZjQpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY0LnJvb3QsXG4gICAgICBhY3Rpb24gPSBfcmVmNC5hY3Rpb247XG5cbiAgICAvLyB3aWxsIGFsc28gbm90aWZ5IHRoZSB1c2VyIHdoZW4gRmlsZVBvbmQgaXMgbm90IGJlaW5nIHVzZWQsIGFzIHRoZSB1c2VyIG1pZ2h0IGJlIG9jY3VwaWVkIHdpdGggb3RoZXIgYWN0aXZpdGllcyB3aGlsZSB1cGxvYWRpbmcgYSBmaWxlXG5cbiAgICB2YXIgaXRlbSA9IHJvb3QucXVlcnkoJ0dFVF9JVEVNJywgYWN0aW9uLmlkKTtcbiAgICB2YXIgZmlsZW5hbWUgPSBpdGVtLmZpbGVuYW1lO1xuICAgIHZhciBsYWJlbCA9IHJvb3QucXVlcnkoJ0dFVF9MQUJFTF9GSUxFX1BST0NFU1NJTkdfQ09NUExFVEUnKTtcblxuICAgIGFzc2lzdChyb290LCBmaWxlbmFtZSArICcgJyArIGxhYmVsKTtcbiAgfTtcblxuICB2YXIgaXRlbVByb2Nlc3NlZFVuZG8gPSBmdW5jdGlvbiBpdGVtUHJvY2Vzc2VkVW5kbyhfcmVmNSkge1xuICAgIHZhciByb290ID0gX3JlZjUucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWY1LmFjdGlvbjtcblxuICAgIHZhciBpdGVtID0gcm9vdC5xdWVyeSgnR0VUX0lURU0nLCBhY3Rpb24uaWQpO1xuICAgIHZhciBmaWxlbmFtZSA9IGl0ZW0uZmlsZW5hbWU7XG4gICAgdmFyIGxhYmVsID0gcm9vdC5xdWVyeSgnR0VUX0xBQkVMX0ZJTEVfUFJPQ0VTU0lOR19BQk9SVEVEJyk7XG5cbiAgICBhc3Npc3Qocm9vdCwgZmlsZW5hbWUgKyAnICcgKyBsYWJlbCk7XG4gIH07XG5cbiAgdmFyIGl0ZW1FcnJvciA9IGZ1bmN0aW9uIGl0ZW1FcnJvcihfcmVmNikge1xuICAgIHZhciByb290ID0gX3JlZjYucm9vdCxcbiAgICAgIGFjdGlvbiA9IF9yZWY2LmFjdGlvbjtcblxuICAgIHZhciBpdGVtID0gcm9vdC5xdWVyeSgnR0VUX0lURU0nLCBhY3Rpb24uaWQpO1xuICAgIHZhciBmaWxlbmFtZSA9IGl0ZW0uZmlsZW5hbWU7XG5cbiAgICAvLyB3aWxsIGFsc28gbm90aWZ5IHRoZSB1c2VyIHdoZW4gRmlsZVBvbmQgaXMgbm90IGJlaW5nIHVzZWQsIGFzIHRoZSB1c2VyIG1pZ2h0IGJlIG9jY3VwaWVkIHdpdGggb3RoZXIgYWN0aXZpdGllcyB3aGlsZSB1cGxvYWRpbmcgYSBmaWxlXG5cbiAgICBhc3Npc3Qocm9vdCwgYWN0aW9uLnN0YXR1cy5tYWluICsgJyAnICsgZmlsZW5hbWUgKyAnICcgKyBhY3Rpb24uc3RhdHVzLnN1Yik7XG4gIH07XG5cbiAgdmFyIGFzc2lzdGFudCA9IGNyZWF0ZVZpZXcoe1xuICAgIGNyZWF0ZTogY3JlYXRlJDE0LFxuICAgIGlnbm9yZVJlY3Q6IHRydWUsXG4gICAgd3JpdGU6IGNyZWF0ZVJvdXRlKHtcbiAgICAgIERJRF9MT0FEX0lURU06IGl0ZW1BZGRlZCxcbiAgICAgIERJRF9SRU1PVkVfSVRFTTogaXRlbVJlbW92ZWQsXG4gICAgICBESURfQ09NUExFVEVfSVRFTV9QUk9DRVNTSU5HOiBpdGVtUHJvY2Vzc2VkLFxuXG4gICAgICBESURfQUJPUlRfSVRFTV9QUk9DRVNTSU5HOiBpdGVtUHJvY2Vzc2VkVW5kbyxcbiAgICAgIERJRF9SRVZFUlRfSVRFTV9QUk9DRVNTSU5HOiBpdGVtUHJvY2Vzc2VkVW5kbyxcblxuICAgICAgRElEX1RIUk9XX0lURU1fTE9BRF9FUlJPUjogaXRlbUVycm9yLFxuICAgICAgRElEX1RIUk9XX0lURU1fSU5WQUxJRDogaXRlbUVycm9yLFxuICAgICAgRElEX1RIUk9XX0lURU1fUFJPQ0VTU0lOR19FUlJPUjogaXRlbUVycm9yXG4gICAgfSksXG4gICAgdGFnOiAnc3BhbicsXG4gICAgbmFtZTogJ2Fzc2lzdGFudCdcbiAgfSk7XG5cbiAgdmFyIGNyZWF0ZSQxID0gZnVuY3Rpb24gY3JlYXRlKF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcztcblxuICAgIC8vIEFkZCBpZFxuICAgIHZhciBpZCA9IHJvb3QucXVlcnkoJ0dFVF9JRCcpO1xuICAgIGlmIChpZCkge1xuICAgICAgcm9vdC5lbGVtZW50LmlkID0gaWQ7XG4gICAgfVxuXG4gICAgLy8gQWRkIGNsYXNzTmFtZVxuICAgIHZhciBjbGFzc05hbWUgPSByb290LnF1ZXJ5KCdHRVRfQ0xBU1NfTkFNRScpO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByb290LmVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZpZWxkIGxhYmVsXG4gICAgcm9vdC5yZWYubGFiZWwgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KGRyb3BMYWJlbCwgX2V4dGVuZHMoe30sIHByb3BzLCB7IHRyYW5zbGF0ZVk6IG51bGwgfSkpXG4gICAgKTtcblxuICAgIC8vIExpc3Qgb2YgaXRlbXNcbiAgICByb290LnJlZi5saXN0ID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhsaXN0U2Nyb2xsZXIsIHsgdHJhbnNsYXRlWTogbnVsbCB9KVxuICAgICk7XG5cbiAgICAvLyBCYWNrZ3JvdW5kIHBhbmVsXG4gICAgcm9vdC5yZWYucGFuZWwgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KHBhbmVsLCB7IG5hbWU6ICdwYW5lbC1yb290JyB9KVxuICAgICk7XG5cbiAgICAvLyBBc3Npc3RhbnQgbm90aWZpZXMgYXNzaXN0aXZlIHRlY2ggd2hlbiBjb250ZW50IGNoYW5nZXNcbiAgICByb290LnJlZi5hc3Npc3RhbnQgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KGFzc2lzdGFudCwgX2V4dGVuZHMoe30sIHByb3BzKSlcbiAgICApO1xuXG4gICAgLy8gTWVhc3VyZSAodGVzdHMgaWYgZml4ZWQgaGVpZ2h0IHdhcyBzZXQpXG4gICAgLy8gRE9DVFlQRSBuZWVkcyB0byBiZSBzZXQgZm9yIHRoaXMgdG8gd29ya1xuICAgIHJvb3QucmVmLm1lYXN1cmUgPSBjcmVhdGVFbGVtZW50JDEoJ2RpdicpO1xuICAgIHJvb3QucmVmLm1lYXN1cmUuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHJvb3QuZWxlbWVudC5hcHBlbmRDaGlsZChyb290LnJlZi5tZWFzdXJlKTtcbiAgfTtcblxuICB2YXIgd3JpdGUgPSBmdW5jdGlvbiB3cml0ZShfcmVmMikge1xuICAgIHZhciByb290ID0gX3JlZjIucm9vdCxcbiAgICAgIHByb3BzID0gX3JlZjIucHJvcHMsXG4gICAgICBhY3Rpb25zID0gX3JlZjIuYWN0aW9ucztcblxuICAgIC8vIHJvdXRlIGFjdGlvbnNcbiAgICByb3V0ZSh7IHJvb3Q6IHJvb3QsIHByb3BzOiBwcm9wcywgYWN0aW9uczogYWN0aW9ucyB9KTtcblxuICAgIC8vIGdldCBxdWljayByZWZlcmVuY2VzIHRvIHZhcmlvdXMgaGlnaCBsZXZlbCBwYXJ0cyBvZiB0aGUgdXBsb2FkIHRvb2xcbiAgICB2YXIgX3Jvb3QkcmVmID0gcm9vdC5yZWYsXG4gICAgICBob3BwZXIgPSBfcm9vdCRyZWYuaG9wcGVyLFxuICAgICAgbGFiZWwgPSBfcm9vdCRyZWYubGFiZWwsXG4gICAgICBsaXN0ID0gX3Jvb3QkcmVmLmxpc3QsXG4gICAgICBwYW5lbCQkMSA9IF9yb290JHJlZi5wYW5lbDtcblxuICAgIC8vIGJvb2wgdG8gaW5kaWNhdGUgaWYgd2UncmUgZnVsbCBvciBub3RcblxuICAgIHZhciBpc011bHRpSXRlbSA9IHJvb3QucXVlcnkoJ0dFVF9BTExPV19NVUxUSVBMRScpO1xuICAgIHZhciB0b3RhbEl0ZW1zID0gcm9vdC5xdWVyeSgnR0VUX1RPVEFMX0lURU1TJyk7XG4gICAgdmFyIG1heEl0ZW1zID0gcm9vdC5xdWVyeSgnR0VUX01BWF9GSUxFUycpO1xuICAgIHZhciBhdE1heENhcGFjaXR5ID0gaXNNdWx0aUl0ZW1cbiAgICAgID8gdG90YWxJdGVtcyA9PT0gbWF4SXRlbXNcbiAgICAgIDogdG90YWxJdGVtcyA9PT0gMTtcblxuICAgIC8vIHZpZXdzIG5vdCB1c2VkIGluIGhlaWdodCBjYWxjdWxhdGlvblxuICAgIHZhciBjaGlsZHJlblVzZWRGb3JCb3VuZGluZ0NhbGN1bGF0aW9uID0gW10uY29uY2F0KFxuICAgICAgdG9Db25zdW1hYmxlQXJyYXkobGlzdC5jaGlsZFZpZXdzWzBdLmNoaWxkVmlld3MpXG4gICAgKTtcblxuICAgIC8vIHZpZXdzIHVzZWQgdG8gY2FsY3VsYXRlIHRoZSB2aXN1YWwgaGVpZ2h0IG9mIHRoZSBjb250YWluZXIgKHdoaWNoIGlzIHBhc3NlZCB0byBwYW5lbClcbiAgICB2YXIgY2hpbGRyZW5Vc2VkRm9yVmlzdWFsSGVpZ2h0Q2FsY3VsYXRpb24gPSBbbGlzdF07XG5cbiAgICAvLyBhY3Rpb24gdXNlZCB0byBhZGQgaXRlbVxuICAgIHZhciBhZGRBY3Rpb24gPSBhY3Rpb25zLmZpbmQoZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLnR5cGUgPT09ICdESURfQUREX0lURU0nO1xuICAgIH0pO1xuXG4gICAgLy8gaWYgYXQgbWF4IGNhcGFjaXR5IGhpZGUgdGhlIGxhYmVsXG4gICAgaWYgKGF0TWF4Q2FwYWNpdHkgJiYgYWRkQWN0aW9uKSB7XG4gICAgICAvLyBnZXQgaW50ZXJhY3Rpb24gdHlwZVxuICAgICAgdmFyIGludGVyYWN0aW9uTWV0aG9kID0gYWRkQWN0aW9uLmRhdGEuaW50ZXJhY3Rpb25NZXRob2Q7XG5cbiAgICAgIC8vIGhpZGUgbGFiZWxcbiAgICAgIGxhYmVsLm9wYWNpdHkgPSAwO1xuXG4gICAgICAvLyBpZiBpcyBtdWx0aS1pdGVtLCB0aGUgbGFiZWwgaXMgYWx3YXlzIG1vdmVkIHVwd2FyZHNcbiAgICAgIGlmIChpc011bHRpSXRlbSkge1xuICAgICAgICBsYWJlbC50cmFuc2xhdGVZID0gLWxhYmVsLnJlY3QuZWxlbWVudC5oZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBiYXNlZCBvbiBpbnRlcmFjdGlvbiBtZXRob2Qgd2UgbW92ZSBsYWJlbCBpbiBkaWZmZXJlbnQgZGlyZWN0aW9uc1xuICAgICAgICBpZiAoaW50ZXJhY3Rpb25NZXRob2QgPT09IEludGVyYWN0aW9uTWV0aG9kLkFQSSkge1xuICAgICAgICAgIGxhYmVsLnRyYW5zbGF0ZVggPSA0MDtcbiAgICAgICAgfSBlbHNlIGlmIChpbnRlcmFjdGlvbk1ldGhvZCA9PT0gSW50ZXJhY3Rpb25NZXRob2QuQlJPV1NFKSB7XG4gICAgICAgICAgbGFiZWwudHJhbnNsYXRlWSA9IDQwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhYmVsLnRyYW5zbGF0ZVkgPSAtNDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFhdE1heENhcGFjaXR5KSB7XG4gICAgICAvLyByZXZlYWwgbGFiZWxcbiAgICAgIGxhYmVsLm9wYWNpdHkgPSAxO1xuICAgICAgbGFiZWwudHJhbnNsYXRlWSA9IHJvb3QucmVjdC5lbGVtZW50LnBhZGRpbmdUb3A7XG4gICAgICBsYWJlbC50cmFuc2xhdGVYID0gMDtcblxuICAgICAgLy8gd2UgdXNlIGxhYmVsIGZvciBib3VuZGluZyBib3hcbiAgICAgIGNoaWxkcmVuVXNlZEZvclZpc3VhbEhlaWdodENhbGN1bGF0aW9uLnB1c2gobGFiZWwpO1xuICAgICAgY2hpbGRyZW5Vc2VkRm9yQm91bmRpbmdDYWxjdWxhdGlvbi5wdXNoKGxhYmVsKTtcbiAgICB9XG5cbiAgICAvLyBzZXRzIGNvcnJlY3Qgc3RhdGUgdG8gaG9wcGVyIHNjb3BlXG4gICAgaWYgKGhvcHBlcikge1xuICAgICAgaG9wcGVyLnVwZGF0ZUhvcHBlclN0YXRlKCk7XG4gICAgfVxuXG4gICAgLy8gbmVlZCBhIGxhYmVsIHRvIGRvIGFueXRoaW5nXG4gICAgaWYgKCFsYWJlbC5jYXB0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gbGluayBsaXN0IHRvIGxhYmVsIGJvdHRvbSBwb3NpdGlvbiAoaW5jbHVkaW5nIGJvdHRvbSBtYXJnaW4pXG4gICAgbGlzdC50cmFuc2xhdGVZID0gaXNNdWx0aUl0ZW1cbiAgICAgID8gbGFiZWwucmVjdC5vdXRlci5ib3R0b21cbiAgICAgIDogcm9vdC5yZWN0LmVsZW1lbnQucGFkZGluZ1RvcDtcblxuICAgIC8vIHVwZGF0ZSBib3VuZGluZyBib3ggaWYgaGFzIGNoYW5nZWRcbiAgICB2YXIgYm94Qm91bmRpbmcgPSBjYWxjdWxhdGVSb290Qm91bmRpbmdCb3hIZWlnaHQocm9vdCwgcHJvcHMpO1xuICAgIHZhciBjaGlsZHJlbkJvdW5kaW5nSGVpZ2h0ID0gY2FsY3VsYXRlQ2hpbGRyZW5Cb3VuZGluZ0JveEhlaWdodChcbiAgICAgIGNoaWxkcmVuVXNlZEZvckJvdW5kaW5nQ2FsY3VsYXRpb25cbiAgICApO1xuICAgIHZhciB2aXN1YWxIZWlnaHQgPSBjYWxjdWxhdGVDaGlsZHJlblZpc3VhbEhlaWdodChcbiAgICAgIGNoaWxkcmVuVXNlZEZvclZpc3VhbEhlaWdodENhbGN1bGF0aW9uXG4gICAgKTtcbiAgICB2YXIgYm90dG9tUGFkZGluZyA9IHRvdGFsSXRlbXMgPiAwID8gcm9vdC5yZWN0LmVsZW1lbnQucGFkZGluZ1RvcCAqIDAuNSA6IDA7XG5cbiAgICBpZiAoYm94Qm91bmRpbmcuZml4ZWRIZWlnaHQpIHtcbiAgICAgIC8vIGZpeGVkIGhlaWdodFxuXG4gICAgICAvLyBmaXhlZCBoZWlnaHQgcGFuZWxcbiAgICAgIHBhbmVsJCQxLnNjYWxhYmxlID0gZmFsc2U7XG5cbiAgICAgIC8vIGxpbmsgcGFuZWwgaGVpZ2h0IHRvIGJveCBib3VuZGluZ1xuICAgICAgcGFuZWwkJDEuaGVpZ2h0ID0gYm94Qm91bmRpbmcuZml4ZWRIZWlnaHQgKyByb290LnJlY3QuZWxlbWVudC5wYWRkaW5nVG9wO1xuXG4gICAgICAvLyBzZXQgb3ZlcmZsb3dcbiAgICAgIGxpc3Qub3ZlcmZsb3cgPVxuICAgICAgICBjaGlsZHJlbkJvdW5kaW5nSGVpZ2h0ID4gcGFuZWwkJDEuaGVpZ2h0ICYmIGlzTXVsdGlJdGVtXG4gICAgICAgICAgPyBwYW5lbCQkMS5oZWlnaHRcbiAgICAgICAgICA6IG51bGw7XG4gICAgfSBlbHNlIGlmIChib3hCb3VuZGluZy5jYXBwZWRIZWlnaHQpIHtcbiAgICAgIC8vIG1heC1oZWlnaHRcblxuICAgICAgLy8gbm90IGEgZml4ZWQgaGVpZ2h0IHBhbmVsXG4gICAgICBwYW5lbCQkMS5zY2FsYWJsZSA9IHRydWU7XG5cbiAgICAgIC8vIGxpbWl0IGNoaWxkcmVuIGJvdW5kaW5nIGhlaWdodCB0byB0aGUgc2V0IGNhcHBlZCBoZWlnaHRcbiAgICAgIHZhciBjYXBwZWRDaGlsZHJlbkJvdW5kaW5nSGVpZ2h0ID0gTWF0aC5taW4oXG4gICAgICAgIGJveEJvdW5kaW5nLmNhcHBlZEhlaWdodCxcbiAgICAgICAgY2hpbGRyZW5Cb3VuZGluZ0hlaWdodFxuICAgICAgKTtcblxuICAgICAgLy8gdXBkYXRlIHJvb3QgaGVpZ2h0XG4gICAgICByb290LmhlaWdodCA9IGNhcHBlZENoaWxkcmVuQm91bmRpbmdIZWlnaHQgKyBib3R0b21QYWRkaW5nO1xuXG4gICAgICAvLyBzZXQgdmlzdWFsIGhlaWdodFxuICAgICAgcGFuZWwkJDEuaGVpZ2h0ID0gTWF0aC5taW4oXG4gICAgICAgIGJveEJvdW5kaW5nLmNhcHBlZEhlaWdodCArIHJvb3QucmVjdC5lbGVtZW50LnBhZGRpbmdUb3AsXG4gICAgICAgIHZpc3VhbEhlaWdodCArIGJvdHRvbVBhZGRpbmdcbiAgICAgICk7XG5cbiAgICAgIC8vIGlmIGNhbiBvdmVyZmxvdywgdGVzdCBpZiBpcyBjdXJyZW50bHkgb3ZlcmZsb3dpbmdcbiAgICAgIGxpc3Qub3ZlcmZsb3cgPVxuICAgICAgICBjaGlsZHJlbkJvdW5kaW5nSGVpZ2h0ID4gcGFuZWwkJDEuaGVpZ2h0ICYmIGlzTXVsdGlJdGVtXG4gICAgICAgICAgPyBwYW5lbCQkMS5oZWlnaHRcbiAgICAgICAgICA6IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZsZXhpYmxlIGhlaWdodFxuXG4gICAgICAvLyBub3QgYSBmaXhlZCBoZWlnaHQgcGFuZWxcbiAgICAgIHBhbmVsJCQxLnNjYWxhYmxlID0gdHJ1ZTtcblxuICAgICAgLy8gc2V0IHRvIG5ldyBib3VuZGluZ1xuICAgICAgcm9vdC5oZWlnaHQgPVxuICAgICAgICBjaGlsZHJlbkJvdW5kaW5nSGVpZ2h0ICsgYm90dG9tUGFkZGluZyArIHJvb3QucmVjdC5lbGVtZW50LnBhZGRpbmdUb3A7XG5cbiAgICAgIC8vIHNldCBoZWlnaHQgdG8gbmV3IHZpc3VhbCBoZWlnaHRcbiAgICAgIHBhbmVsJCQxLmhlaWdodCA9IHZpc3VhbEhlaWdodCArIGJvdHRvbVBhZGRpbmc7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjYWxjdWxhdGVDaGlsZHJlblZpc3VhbEhlaWdodCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUNoaWxkcmVuVmlzdWFsSGVpZ2h0KFxuICAgIGNoaWxkcmVuXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICBjaGlsZHJlblxuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgdG90YWwgaGVpZ2h0IG9jY3VwaWVkIGJ5IGFsbCBjaGlsZHJlblxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKG1heCwgY2hpbGQpIHtcbiAgICAgICAgICB2YXIgYm90dG9tID0gY2hpbGQucmVjdC5vdXRlci5ib3R0b207XG5cbiAgICAgICAgICBpZiAoYm90dG9tID4gbWF4KSB7XG4gICAgICAgICAgICBtYXggPSBib3R0b207XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgICAgfSwgMClcbiAgICApO1xuICB9O1xuXG4gIHZhciBjYWxjdWxhdGVSb290Qm91bmRpbmdCb3hIZWlnaHQgPSBmdW5jdGlvbiBjYWxjdWxhdGVSb290Qm91bmRpbmdCb3hIZWlnaHQoXG4gICAgcm9vdCxcbiAgICBwcm9wc1xuICApIHtcbiAgICAvLyBvbmx5IGNhbGN1bGF0ZSBmaXJzdCB0aW1lXG4gICAgaWYgKHByb3BzLmJveEJvdW5kaW5nKSB7XG4gICAgICByZXR1cm4gcHJvcHMuYm94Qm91bmRpbmc7XG4gICAgfVxuXG4gICAgdmFyIGhlaWdodCA9IHJvb3QucmVmLm1lYXN1cmVIZWlnaHQgfHwgbnVsbDtcbiAgICB2YXIgY2FwcGVkSGVpZ2h0ID0gcGFyc2VJbnQocm9vdC5zdHlsZS5tYXhIZWlnaHQsIDEwKSB8fCBudWxsO1xuICAgIHZhciBmaXhlZEhlaWdodCA9IGhlaWdodCA9PT0gMCA/IG51bGwgOiBoZWlnaHQ7XG5cbiAgICBwcm9wcy5ib3hCb3VuZGluZyA9IHtcbiAgICAgIGNhcHBlZEhlaWdodDogY2FwcGVkSGVpZ2h0LFxuICAgICAgZml4ZWRIZWlnaHQ6IGZpeGVkSGVpZ2h0XG4gICAgfTtcblxuICAgIC8vIGRlc3Ryb3kgbWVhc3VyZSBlbGVtZW50XG4gICAgcm9vdC5lbGVtZW50LnJlbW92ZUNoaWxkKHJvb3QucmVmLm1lYXN1cmUpO1xuICAgIHJvb3QucmVmLm1lYXN1cmUgPSBudWxsO1xuXG4gICAgLy8gZG9uZSFcbiAgICByZXR1cm4gcHJvcHMuYm94Qm91bmRpbmc7XG4gIH07XG5cbiAgdmFyIGNhbGN1bGF0ZUNoaWxkcmVuQm91bmRpbmdCb3hIZWlnaHQgPSBmdW5jdGlvbiBjYWxjdWxhdGVDaGlsZHJlbkJvdW5kaW5nQm94SGVpZ2h0KFxuICAgIGNoaWxkcmVuXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICBjaGlsZHJlblxuXG4gICAgICAgIC8vIG5vIHVzZSBvZiBvdXRlciBhbmQgaW5uZXIgYXMgdGhhdCBpbmNsdWRlcyB0cmFuc2xhdGlvbnNcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihoZWlnaHQsIGNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGhlaWdodCArIGNoaWxkLnJlY3QuaW5uZXIuYm90dG9tICsgY2hpbGQucmVjdC5lbGVtZW50Lm1hcmdpbkJvdHRvbVxuICAgICAgICAgICk7XG4gICAgICAgIH0sIDApXG4gICAgKTtcbiAgfTtcblxuICB2YXIgdG9nZ2xlQWxsb3dEcm9wID0gZnVuY3Rpb24gdG9nZ2xlQWxsb3dEcm9wKF9yZWYzKSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmMy5yb290LFxuICAgICAgcHJvcHMgPSBfcmVmMy5wcm9wcyxcbiAgICAgIGFjdGlvbiA9IF9yZWYzLmFjdGlvbjtcblxuICAgIGlmIChhY3Rpb24udmFsdWUgJiYgIXJvb3QucmVmLmhvcHBlcikge1xuICAgICAgdmFyIGhvcHBlciA9IGNyZWF0ZUhvcHBlcihcbiAgICAgICAgcm9vdC5lbGVtZW50LFxuICAgICAgICBmdW5jdGlvbihpdGVtcykge1xuICAgICAgICAgIHZhciBhbGxvd1JlcGxhY2UgPSByb290LnF1ZXJ5KCdHRVRfQUxMT1dfUkVQTEFDRScpO1xuICAgICAgICAgIHZhciBhbGxvd011bHRpcGxlID0gcm9vdC5xdWVyeSgnR0VUX0FMTE9XX01VTFRJUExFJyk7XG4gICAgICAgICAgdmFyIHRvdGFsSXRlbXMgPSByb290LnF1ZXJ5KCdHRVRfVE9UQUxfSVRFTVMnKTtcbiAgICAgICAgICB2YXIgZHJvcFZhbGlkYXRpb24gPSByb290LnF1ZXJ5KCdHRVRfRFJPUF9WQUxJREFUSU9OJyk7XG4gICAgICAgICAgdmFyIG1heEl0ZW1zID0gcm9vdC5xdWVyeSgnR0VUX01BWF9UT1RBTF9JVEVNUycpO1xuXG4gICAgICAgICAgLy8gdG90YWwgYW1vdW50IG9mIGl0ZW1zIGJlaW5nIGRyYWdnZWRcbiAgICAgICAgICB2YXIgdG90YWxEcmFnSXRlbXMgPSBpdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgICAvLyBpZiBkb2VzIG5vdCBhbGxvdyBtdWx0aXBsZSBpdGVtcyBhbmQgZHJhZ2dpbmcgbW9yZSB0aGFuIG9uZSBpdGVtXG4gICAgICAgICAgaWYgKCFhbGxvd011bHRpcGxlICYmIHRvdGFsRHJhZ0l0ZW1zID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGxpbWl0IG1heCBpdGVtcyB0byBvbmUgaWYgbm90IGFsbG93ZWQgdG8gZHJvcCBtdWx0aXBsZSBpdGVtc1xuICAgICAgICAgIG1heEl0ZW1zID0gYWxsb3dNdWx0aXBsZSA/IG1heEl0ZW1zIDogYWxsb3dSZXBsYWNlID8gbWF4SXRlbXMgOiAxO1xuXG4gICAgICAgICAgLy8gbm8gbW9yZSByb29tP1xuICAgICAgICAgIHZhciBoYXNNYXhJdGVtcyA9IGlzSW50KG1heEl0ZW1zKTtcbiAgICAgICAgICBpZiAoaGFzTWF4SXRlbXMgJiYgdG90YWxJdGVtcyArIHRvdGFsRHJhZ0l0ZW1zID4gbWF4SXRlbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBhbGwgaXRlbXMgc2hvdWxkIGJlIHZhbGlkYXRlZCBieSBhbGwgZmlsdGVycyBhcyB2YWxpZFxuICAgICAgICAgIHJldHVybiBkcm9wVmFsaWRhdGlvblxuICAgICAgICAgICAgPyBpdGVtcy5ldmVyeShmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwcGx5RmlsdGVycygnQUxMT1dfSE9QUEVSX0lURU0nLCBpdGVtLCB7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogcm9vdC5xdWVyeVxuICAgICAgICAgICAgICAgIH0pLmV2ZXJ5KGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNhdGNoZXNEcm9wc09uUGFnZTogcm9vdC5xdWVyeSgnR0VUX0RST1BfT05fUEFHRScpLFxuICAgICAgICAgIHJlcXVpcmVzRHJvcE9uRWxlbWVudDogcm9vdC5xdWVyeSgnR0VUX0RST1BfT05fRUxFTUVOVCcpXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIGhvcHBlci5vbmxvYWQgPSBmdW5jdGlvbihpdGVtcywgcG9zaXRpb24pIHtcbiAgICAgICAgdmFyIGl0ZW1MaXN0ID0gcm9vdC5yZWYubGlzdC5jaGlsZFZpZXdzWzBdO1xuICAgICAgICB2YXIgaW5kZXggPSBnZXRJdGVtSW5kZXhCeVBvc2l0aW9uKGl0ZW1MaXN0LCB7XG4gICAgICAgICAgbGVmdDogcG9zaXRpb24uc2NvcGVMZWZ0LFxuICAgICAgICAgIHRvcDpcbiAgICAgICAgICAgIHBvc2l0aW9uLnNjb3BlVG9wIC1cbiAgICAgICAgICAgIHJvb3QucmVmLmxpc3QucmVjdC5vdXRlci50b3AgK1xuICAgICAgICAgICAgcm9vdC5yZWYubGlzdC5lbGVtZW50LnNjcm9sbFRvcFxuICAgICAgICB9KTtcblxuICAgICAgICBmb3JFYWNoRGVsYXllZChpdGVtcywgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICAgICAgcm9vdC5kaXNwYXRjaCgnQUREX0lURU0nLCB7XG4gICAgICAgICAgICBpbnRlcmFjdGlvbk1ldGhvZDogSW50ZXJhY3Rpb25NZXRob2QuRFJPUCxcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJvb3QuZGlzcGF0Y2goJ0RJRF9EUk9QJywgeyBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG5cbiAgICAgICAgcm9vdC5kaXNwYXRjaCgnRElEX0VORF9EUkFHJywgeyBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG4gICAgICB9O1xuXG4gICAgICBob3BwZXIub25kcmFnc3RhcnQgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICByb290LmRpc3BhdGNoKCdESURfU1RBUlRfRFJBRycsIHsgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuICAgICAgfTtcblxuICAgICAgaG9wcGVyLm9uZHJhZyA9IGRlYm91bmNlKGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHJvb3QuZGlzcGF0Y2goJ0RJRF9EUkFHJywgeyBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG4gICAgICB9KTtcblxuICAgICAgaG9wcGVyLm9uZHJhZ2VuZCA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHJvb3QuZGlzcGF0Y2goJ0RJRF9FTkRfRFJBRycsIHsgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuICAgICAgfTtcblxuICAgICAgcm9vdC5yZWYuaG9wcGVyID0gaG9wcGVyO1xuXG4gICAgICByb290LnJlZi5kcmlwID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcocm9vdC5jcmVhdGVDaGlsZFZpZXcoZHJpcCkpO1xuICAgIH0gZWxzZSBpZiAoIWFjdGlvbi52YWx1ZSAmJiByb290LnJlZi5ob3BwZXIpIHtcbiAgICAgIHJvb3QucmVmLmhvcHBlci5kZXN0cm95KCk7XG4gICAgICByb290LnJlZi5ob3BwZXIgPSBudWxsO1xuICAgICAgcm9vdC5yZW1vdmVDaGlsZFZpZXcocm9vdC5yZWYuZHJpcCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBicm93c2UgZnVuY3Rpb25hbGl0eVxuICAgKi9cbiAgdmFyIHRvZ2dsZUFsbG93QnJvd3NlID0gZnVuY3Rpb24gdG9nZ2xlQWxsb3dCcm93c2UoX3JlZjQpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWY0LnJvb3QsXG4gICAgICBwcm9wcyA9IF9yZWY0LnByb3BzLFxuICAgICAgYWN0aW9uID0gX3JlZjQuYWN0aW9uO1xuXG4gICAgaWYgKGFjdGlvbi52YWx1ZSkge1xuICAgICAgcm9vdC5yZWYuYnJvd3NlciA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhcbiAgICAgICAgICBicm93c2VyLFxuICAgICAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICAgICAgb25sb2FkOiBmdW5jdGlvbiBvbmxvYWQoaXRlbXMpIHtcbiAgICAgICAgICAgICAgZm9yRWFjaERlbGF5ZWQoaXRlbXMsIGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJvb3QuZGlzcGF0Y2goJ0FERF9JVEVNJywge1xuICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25NZXRob2Q6IEludGVyYWN0aW9uTWV0aG9kLkJST1dTRSxcbiAgICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgICAgICAgaW5kZXg6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHJvb3QucmVmLmJyb3dzZXIpIHtcbiAgICAgIHJvb3QucmVtb3ZlQ2hpbGRWaWV3KHJvb3QucmVmLmJyb3dzZXIpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgcGFzdGUgZnVuY3Rpb25hbGl0eVxuICAgKi9cbiAgdmFyIHRvZ2dsZUFsbG93UGFzdGUgPSBmdW5jdGlvbiB0b2dnbGVBbGxvd1Bhc3RlKF9yZWY1KSB7XG4gICAgdmFyIHJvb3QgPSBfcmVmNS5yb290LFxuICAgICAgYWN0aW9uID0gX3JlZjUuYWN0aW9uO1xuXG4gICAgaWYgKGFjdGlvbi52YWx1ZSkge1xuICAgICAgcm9vdC5yZWYucGFzdGVyID0gY3JlYXRlUGFzdGVyKCk7XG4gICAgICByb290LnJlZi5wYXN0ZXIub25sb2FkID0gZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgICAgZm9yRWFjaERlbGF5ZWQoaXRlbXMsIGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICAgIHJvb3QuZGlzcGF0Y2goJ0FERF9JVEVNJywge1xuICAgICAgICAgICAgaW50ZXJhY3Rpb25NZXRob2Q6IEludGVyYWN0aW9uTWV0aG9kLlBBU1RFLFxuICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICBpbmRleDogMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChyb290LnJlZi5wYXN0ZXIpIHtcbiAgICAgIHJvb3QucmVmLnBhc3Rlci5kZXN0cm95KCk7XG4gICAgICByb290LnJlZi5wYXN0ZXIgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUm91dGUgYWN0aW9uc1xuICAgKi9cbiAgdmFyIHJvdXRlID0gY3JlYXRlUm91dGUoe1xuICAgIERJRF9TRVRfQUxMT1dfQlJPV1NFOiB0b2dnbGVBbGxvd0Jyb3dzZSxcbiAgICBESURfU0VUX0FMTE9XX0RST1A6IHRvZ2dsZUFsbG93RHJvcCxcbiAgICBESURfU0VUX0FMTE9XX1BBU1RFOiB0b2dnbGVBbGxvd1Bhc3RlXG4gIH0pO1xuXG4gIHZhciByb290ID0gY3JlYXRlVmlldyh7XG4gICAgbmFtZTogJ3Jvb3QnLFxuICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoX3JlZjYpIHtcbiAgICAgIHZhciByb290ID0gX3JlZjYucm9vdDtcblxuICAgICAgaWYgKHJvb3QucmVmLm1lYXN1cmUpIHtcbiAgICAgICAgcm9vdC5yZWYubWVhc3VyZUhlaWdodCA9IHJvb3QucmVmLm1lYXN1cmUub2Zmc2V0SGVpZ2h0O1xuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlOiBjcmVhdGUkMSxcbiAgICB3cml0ZTogd3JpdGUsXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShfcmVmNykge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmNy5yb290O1xuXG4gICAgICBpZiAocm9vdC5yZWYucGFzdGVyKSB7XG4gICAgICAgIHJvb3QucmVmLnBhc3Rlci5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICBpZiAocm9vdC5yZWYuaG9wcGVyKSB7XG4gICAgICAgIHJvb3QucmVmLmhvcHBlci5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBtaXhpbnM6IHtcbiAgICAgIHN0eWxlczogWydoZWlnaHQnXVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gZGVmYXVsdHNcbiAgLy8gdmlld1xuICAvLyBjcmVhdGVzIHRoZSBhcHBcbiAgdmFyIGNyZWF0ZUFwcCQxID0gZnVuY3Rpb24gY3JlYXRlQXBwKCkge1xuICAgIHZhciBpbml0aWFsT3B0aW9ucyA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgLy8gbGV0IGVsZW1lbnRcbiAgICB2YXIgb3JpZ2luYWxFbGVtZW50ID0gbnVsbDtcblxuICAgIC8vIGdldCBkZWZhdWx0IG9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMkJDEgPSBnZXRPcHRpb25zJDEoKTtcblxuICAgIC8vIGNyZWF0ZSB0aGUgZGF0YSBzdG9yZSwgdGhpcyB3aWxsIGNvbnRhaW4gYWxsIG91ciBhcHAgaW5mb1xuICAgIHZhciBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgICAgLy8gaW5pdGlhbCBzdGF0ZSAoc2hvdWxkIGJlIHNlcmlhbGl6YWJsZSlcbiAgICAgIGNyZWF0ZUluaXRpYWxTdGF0ZShkZWZhdWx0T3B0aW9ucyQkMSksXG5cbiAgICAgIC8vIHF1ZXJpZXNcbiAgICAgIFtxdWVyaWVzLCBjcmVhdGVPcHRpb25RdWVyaWVzKGRlZmF1bHRPcHRpb25zJCQxKV0sXG5cbiAgICAgIC8vIGFjdGlvbiBoYW5kbGVyc1xuICAgICAgW2FjdGlvbnMsIGNyZWF0ZU9wdGlvbkFjdGlvbnMoZGVmYXVsdE9wdGlvbnMkJDEpXVxuICAgICk7XG5cbiAgICAvLyBzZXQgaW5pdGlhbCBvcHRpb25zXG4gICAgc3RvcmUuZGlzcGF0Y2goJ1NFVF9PUFRJT05TJywgeyBvcHRpb25zOiBpbml0aWFsT3B0aW9ucyB9KTtcblxuICAgIC8vIHJlbmRlciBpbml0aWFsIHZpZXdcbiAgICB2YXIgdmlldyA9IHJvb3Qoc3RvcmUsIHsgaWQ6IGdldFVuaXF1ZUlkKCkgfSk7XG5cbiAgICAvL1xuICAgIC8vIFBSSVZBVEUgQVBJIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIHZhciByZXN0aW5nID0gZmFsc2U7XG4gICAgdmFyIGhpZGRlbiA9IGZhbHNlO1xuICAgIHZhciByZWFkV3JpdGVBcGkgPSB7XG4gICAgICAvLyBuZWNlc3NhcnkgZm9yIHVwZGF0ZSBsb29wXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVhZHMgZnJvbSBkb20gKG5ldmVyIGNhbGwgbWFudWFsbHkpXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfcmVhZDogZnVuY3Rpb24gX3JlYWQoKSB7XG4gICAgICAgIC8vIGlmIHJlc3RpbmcsIG5vIG5lZWQgdG8gcmVhZCBhcyBudW1iZXJzIHdpbGwgc3RpbGwgYWxsIGJlIGNvcnJlY3RcbiAgICAgICAgaWYgKHJlc3RpbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZWFkIHZpZXcgZGF0YVxuICAgICAgICB2aWV3Ll9yZWFkKCk7XG5cbiAgICAgICAgLy8gaWYgcm9vdCBpcyBoaWRkZW5cbiAgICAgICAgaGlkZGVuID0gdmlldy5yZWN0LmVsZW1lbnQuaGlkZGVuO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXcml0ZXMgdG8gZG9tIChuZXZlciBjYWxsIG1hbnVhbGx5KVxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgX3dyaXRlOiBmdW5jdGlvbiBfd3JpdGUodHMpIHtcbiAgICAgICAgLy8gZG9uJ3QgZG8gYW55dGhpbmcgd2hpbGUgaGlkZGVuXG4gICAgICAgIGlmIChoaWRkZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgYWxsIGFjdGlvbnMgZnJvbSBzdG9yZVxuICAgICAgICB2YXIgYWN0aW9ucyQkMSA9IHN0b3JlXG4gICAgICAgICAgLnByb2Nlc3NBY3Rpb25RdWV1ZSgpXG5cbiAgICAgICAgICAvLyBmaWx0ZXIgb3V0IHNldCBhY3Rpb25zICh3aWxsIHRyaWdnZXIgRElEX1NFVClcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuICEvXlNFVF8vLnRlc3QoYWN0aW9uLnR5cGUpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGlmIHdhcyBpZGxpbmcgYW5kIG5vIGFjdGlvbnMgc3RvcCBoZXJlXG4gICAgICAgIGlmIChyZXN0aW5nICYmICFhY3Rpb25zJCQxLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNvbWUgYWN0aW9ucyBtaWdodCB0cmlnZ2VyIGV2ZW50c1xuICAgICAgICByb3V0ZUFjdGlvbnNUb0V2ZW50cyhhY3Rpb25zJCQxKTtcblxuICAgICAgICAvLyB1cGRhdGUgdGhlIHZpZXdcbiAgICAgICAgcmVzdGluZyA9IHZpZXcuX3dyaXRlKHRzLCBhY3Rpb25zJCQxKTtcblxuICAgICAgICAvLyBub3cgaWRsaW5nXG4gICAgICAgIGlmIChyZXN0aW5nKSB7XG4gICAgICAgICAgc3RvcmUucHJvY2Vzc0Rpc3BhdGNoUXVldWUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvL1xuICAgIC8vIEVYUE9TRSBFVkVOVFMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgdmFyIGNyZWF0ZUV2ZW50ID0gZnVuY3Rpb24gY3JlYXRlRXZlbnQobmFtZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgLy8gY3JlYXRlIGRlZmF1bHQgZXZlbnRcbiAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgIHR5cGU6IG5hbWVcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBubyBkYXRhIHRvIGFkZFxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb3B5IHJlbGV2YW50IHByb3BzXG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdlcnJvcicpKSB7XG4gICAgICAgICAgZXZlbnQuZXJyb3IgPSBkYXRhLmVycm9yID8gX2V4dGVuZHMoe30sIGRhdGEuZXJyb3IpIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cykge1xuICAgICAgICAgIGV2ZW50LnN0YXR1cyA9IF9leHRlbmRzKHt9LCBkYXRhLnN0YXR1cyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbmx5IHNvdXJjZSBpcyBhdmFpbGFibGUsIGVsc2UgYWRkIGl0ZW0gaWYgcG9zc2libGVcbiAgICAgICAgaWYgKGRhdGEuc291cmNlKSB7XG4gICAgICAgICAgZXZlbnQuZmlsZSA9IGRhdGEuc291cmNlO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuaXRlbSB8fCBkYXRhLmlkKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBkYXRhLml0ZW0gPyBkYXRhLml0ZW0gOiBzdG9yZS5xdWVyeSgnR0VUX0lURU0nLCBkYXRhLmlkKTtcbiAgICAgICAgICBldmVudC5maWxlID0gaXRlbSA/IGNyZWF0ZUl0ZW1BUEkoaXRlbSkgOiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHByb2dyZXNzIGV2ZW50IGFkZCB0aGUgcHJvZ3Jlc3MgYW1vdW50XG4gICAgICAgIGlmICgvcHJvZ3Jlc3MvLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICBldmVudC5wcm9ncmVzcyA9IGRhdGEucHJvZ3Jlc3M7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICB2YXIgZXZlbnRSb3V0ZXMgPSB7XG4gICAgICBESURfREVTVFJPWTogY3JlYXRlRXZlbnQoJ2Rlc3Ryb3knKSxcblxuICAgICAgRElEX0lOSVQ6IGNyZWF0ZUV2ZW50KCdpbml0JyksXG5cbiAgICAgIERJRF9USFJPV19NQVhfRklMRVM6IGNyZWF0ZUV2ZW50KCd3YXJuaW5nJyksXG5cbiAgICAgIERJRF9TVEFSVF9JVEVNX0xPQUQ6IGNyZWF0ZUV2ZW50KCdhZGRmaWxlc3RhcnQnKSxcbiAgICAgIERJRF9VUERBVEVfSVRFTV9MT0FEX1BST0dSRVNTOiBjcmVhdGVFdmVudCgnYWRkZmlsZXByb2dyZXNzJyksXG4gICAgICBESURfTE9BRF9JVEVNOiBjcmVhdGVFdmVudCgnYWRkZmlsZScpLFxuXG4gICAgICBESURfVEhST1dfSVRFTV9JTlZBTElEOiBbY3JlYXRlRXZlbnQoJ2Vycm9yJyksIGNyZWF0ZUV2ZW50KCdhZGRmaWxlJyldLFxuXG4gICAgICBESURfVEhST1dfSVRFTV9MT0FEX0VSUk9SOiBbY3JlYXRlRXZlbnQoJ2Vycm9yJyksIGNyZWF0ZUV2ZW50KCdhZGRmaWxlJyldLFxuXG4gICAgICBESURfU1RBUlRfSVRFTV9QUk9DRVNTSU5HOiBjcmVhdGVFdmVudCgncHJvY2Vzc2ZpbGVzdGFydCcpLFxuICAgICAgRElEX1VQREFURV9JVEVNX1BST0NFU1NfUFJPR1JFU1M6IGNyZWF0ZUV2ZW50KCdwcm9jZXNzZmlsZXByb2dyZXNzJyksXG4gICAgICBESURfQUJPUlRfSVRFTV9QUk9DRVNTSU5HOiBjcmVhdGVFdmVudCgncHJvY2Vzc2ZpbGVhYm9ydCcpLFxuICAgICAgRElEX0NPTVBMRVRFX0lURU1fUFJPQ0VTU0lORzogY3JlYXRlRXZlbnQoJ3Byb2Nlc3NmaWxlJyksXG4gICAgICBESURfUkVWRVJUX0lURU1fUFJPQ0VTU0lORzogY3JlYXRlRXZlbnQoJ3Byb2Nlc3NmaWxlcmV2ZXJ0JyksXG5cbiAgICAgIERJRF9USFJPV19JVEVNX1BST0NFU1NJTkdfRVJST1I6IFtcbiAgICAgICAgY3JlYXRlRXZlbnQoJ2Vycm9yJyksXG4gICAgICAgIGNyZWF0ZUV2ZW50KCdwcm9jZXNzZmlsZScpXG4gICAgICBdLFxuXG4gICAgICBTUExJQ0VfSVRFTTogY3JlYXRlRXZlbnQoJ3JlbW92ZWZpbGUnKVxuICAgIH07XG5cbiAgICB2YXIgZXhwb3NlRXZlbnQgPSBmdW5jdGlvbiBleHBvc2VFdmVudChldmVudCkge1xuICAgICAgLy8gY3JlYXRlIGV2ZW50IG9iamVjdCB0byBiZSBkaXNwYXRjaGVkXG4gICAgICB2YXIgZGV0YWlsID0gX2V4dGVuZHMoeyBwb25kOiBleHBvcnRzIH0sIGV2ZW50KTtcbiAgICAgIGRlbGV0ZSBkZXRhaWwudHlwZTtcbiAgICAgIHZpZXcuZWxlbWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ0ZpbGVQb25kOicgKyBldmVudC50eXBlLCB7XG4gICAgICAgICAgLy8gZXZlbnQgaW5mb1xuICAgICAgICAgIGRldGFpbDogZGV0YWlsLFxuXG4gICAgICAgICAgLy8gZXZlbnQgYmVoYXZpb3VyXG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbXBvc2VkOiB0cnVlIC8vIHRyaWdnZXJzIGxpc3RlbmVycyBvdXRzaWRlIG9mIHNoYWRvdyByb290XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICAvLyBldmVudCBvYmplY3QgdG8gcGFyYW1zIHVzZWQgZm9yIGBvbigpYCBldmVudCBoYW5kbGVycyBhbmQgY2FsbGJhY2tzIGBvbmluaXQoKWBcbiAgICAgIHZhciBwYXJhbXMgPSBbXTtcblxuICAgICAgLy8gaWYgaXMgcG9zc2libGUgZXJyb3IgZXZlbnQsIG1ha2UgaXQgdGhlIGZpcnN0IHBhcmFtXG4gICAgICBpZiAoZXZlbnQuaGFzT3duUHJvcGVydHkoJ2Vycm9yJykpIHtcbiAgICAgICAgcGFyYW1zLnB1c2goZXZlbnQuZXJyb3IpO1xuICAgICAgfVxuICAgICAgLy8gZmlsZSBpcyBhbHdheXMgc2VjdGlvblxuICAgICAgaWYgKGV2ZW50Lmhhc093blByb3BlcnR5KCdmaWxlJykpIHtcbiAgICAgICAgcGFyYW1zLnB1c2goZXZlbnQuZmlsZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFwcGVuZCBvdGhlcnAgcHJvcHNcbiAgICAgIHZhciBmaWx0ZXJlZCA9IFsndHlwZScsICdlcnJvcicsICdmaWxlJ107XG4gICAgICBPYmplY3Qua2V5cyhldmVudClcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICByZXR1cm4gIWZpbHRlcmVkLmluY2x1ZGVzKGtleSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgIHJldHVybiBwYXJhbXMucHVzaChldmVudFtrZXldKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIG9uKHR5cGUsICgpID0+IHsgfSlcbiAgICAgIGV4cG9ydHMuZmlyZS5hcHBseShleHBvcnRzLCBbZXZlbnQudHlwZV0uY29uY2F0KHBhcmFtcykpO1xuXG4gICAgICAvLyBvbmluaXQgPSAoKSA9PiB7fVxuICAgICAgdmFyIGhhbmRsZXIgPSBzdG9yZS5xdWVyeSgnR0VUX09OJyArIGV2ZW50LnR5cGUudG9VcHBlckNhc2UoKSk7XG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHVuZGVmaW5lZCwgcGFyYW1zKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJvdXRlQWN0aW9uc1RvRXZlbnRzID0gZnVuY3Rpb24gcm91dGVBY3Rpb25zVG9FdmVudHMoYWN0aW9ucyQkMSkge1xuICAgICAgaWYgKCFhY3Rpb25zJCQxLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFjdGlvbnMkJDEuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgaWYgKCFldmVudFJvdXRlc1thY3Rpb24udHlwZV0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJvdXRlcyA9IGV2ZW50Um91dGVzW2FjdGlvbi50eXBlXTtcbiAgICAgICAgKEFycmF5LmlzQXJyYXkocm91dGVzKSA/IHJvdXRlcyA6IFtyb3V0ZXNdKS5mb3JFYWNoKGZ1bmN0aW9uKHJvdXRlKSB7XG4gICAgICAgICAgZXhwb3NlRXZlbnQocm91dGUoYWN0aW9uLmRhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy9cbiAgICAvLyBQVUJMSUMgQVBJIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIHZhciBzZXRPcHRpb25zID0gZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goJ1NFVF9PUFRJT05TJywgeyBvcHRpb25zOiBvcHRpb25zIH0pO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0RmlsZSA9IGZ1bmN0aW9uIGdldEZpbGUocXVlcnkpIHtcbiAgICAgIHJldHVybiBzdG9yZS5xdWVyeSgnR0VUX0lURU0nLCBxdWVyeSk7XG4gICAgfTtcblxuICAgIHZhciBhZGRGaWxlID0gZnVuY3Rpb24gYWRkRmlsZShzb3VyY2UpIHtcbiAgICAgIHZhciBvcHRpb25zID1cbiAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ0FERF9JVEVNJywge1xuICAgICAgICAgIGludGVyYWN0aW9uTWV0aG9kOiBJbnRlcmFjdGlvbk1ldGhvZC5BUEksXG4gICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgaW5kZXg6IG9wdGlvbnMuaW5kZXgsXG4gICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgICAgICBmYWlsdXJlOiByZWplY3RcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHJlbW92ZUZpbGUgPSBmdW5jdGlvbiByZW1vdmVGaWxlKHF1ZXJ5KSB7XG4gICAgICAvLyByZXF1ZXN0IGl0ZW0gcmVtb3ZhbFxuICAgICAgc3RvcmUuZGlzcGF0Y2goJ1JFTU9WRV9JVEVNJywgeyBxdWVyeTogcXVlcnkgfSk7XG5cbiAgICAgIC8vIHNlZSBpZiBpdGVtIGhhcyBiZWVuIHJlbW92ZWRcbiAgICAgIHJldHVybiBzdG9yZS5xdWVyeSgnR0VUX0lURU0nLCBxdWVyeSkgPT09IG51bGw7XG4gICAgfTtcblxuICAgIHZhciBhZGRGaWxlcyA9IGZ1bmN0aW9uIGFkZEZpbGVzKCkge1xuICAgICAgZm9yIChcbiAgICAgICAgdmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwO1xuICAgICAgICBfa2V5IDwgX2xlbjtcbiAgICAgICAgX2tleSsrXG4gICAgICApIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgc291cmNlcyA9IFtdO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHt9O1xuXG4gICAgICAgIC8vIHVzZXIgcGFzc2VkIGEgc291cmNlcyBhcnJheVxuICAgICAgICBpZiAoaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgICAgIHNvdXJjZXMucHVzaC5hcHBseShzb3VyY2VzLCB0b0NvbnN1bWFibGVBcnJheShhcmdzWzBdKSk7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCBhcmdzWzFdIHx8IHt9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB1c2VyIHBhc3NlZCBzb3VyY2VzIGFzIGFyZ3VtZW50cywgbGFzdCBvbmUgbWlnaHQgYmUgb3B0aW9ucyBvYmplY3RcbiAgICAgICAgICB2YXIgbGFzdEFyZ3VtZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICh0eXBlb2YgbGFzdEFyZ3VtZW50ID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICA/ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgIDogX3R5cGVvZihsYXN0QXJndW1lbnQpKSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgICEobGFzdEFyZ3VtZW50IGluc3RhbmNlb2YgQmxvYilcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgYXJncy5wb3AoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gYWRkIHJlc3QgdG8gc291cmNlc1xuICAgICAgICAgIHNvdXJjZXMucHVzaC5hcHBseShzb3VyY2VzLCBhcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzb3VyY2VQcm9taXNlcyA9IFtdO1xuICAgICAgICB2YXIgZGVsYXlQcm9taXNlcyA9IGZvckVhY2hEZWxheWVkKHNvdXJjZXMsIGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICAgIHNvdXJjZVByb21pc2VzLnB1c2goYWRkRmlsZShzb3VyY2UsIG9wdGlvbnMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgUHJvbWlzZS5hbGwoZGVsYXlQcm9taXNlcykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICBQcm9taXNlLmFsbChzb3VyY2VQcm9taXNlcykudGhlbihmdW5jdGlvbihyZXN1bHRzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0RmlsZXMgPSBmdW5jdGlvbiBnZXRGaWxlcygpIHtcbiAgICAgIHJldHVybiBzdG9yZS5xdWVyeSgnR0VUX0lURU1TJyk7XG4gICAgfTtcblxuICAgIHZhciBwcm9jZXNzRmlsZSA9IGZ1bmN0aW9uIHByb2Nlc3NGaWxlKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKCdQUk9DRVNTX0lURU0nLCB7XG4gICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgICAgZmFpbHVyZTogcmVqZWN0XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBwcm9jZXNzRmlsZXMgPSBmdW5jdGlvbiBwcm9jZXNzRmlsZXMoKSB7XG4gICAgICBmb3IgKFxuICAgICAgICB2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7XG4gICAgICAgIF9rZXkyIDwgX2xlbjI7XG4gICAgICAgIF9rZXkyKytcbiAgICAgICkge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHZhciBxdWVyaWVzJCQxID0gQXJyYXkuaXNBcnJheShhcmdzWzBdKSA/IGFyZ3NbMF0gOiBhcmdzO1xuICAgICAgaWYgKCFxdWVyaWVzJCQxLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZ2V0RmlsZXMoKS5tYXAocHJvY2Vzc0ZpbGUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChxdWVyaWVzJCQxLm1hcChwcm9jZXNzRmlsZSkpO1xuICAgIH07XG5cbiAgICB2YXIgcmVtb3ZlRmlsZXMgPSBmdW5jdGlvbiByZW1vdmVGaWxlcygpIHtcbiAgICAgIGZvciAoXG4gICAgICAgIHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDtcbiAgICAgICAgX2tleTMgPCBfbGVuMztcbiAgICAgICAgX2tleTMrK1xuICAgICAgKSB7XG4gICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgdmFyIHF1ZXJpZXMkJDEgPSBBcnJheS5pc0FycmF5KGFyZ3NbMF0pID8gYXJnc1swXSA6IGFyZ3M7XG4gICAgICB2YXIgZmlsZXMgPSBnZXRGaWxlcygpO1xuXG4gICAgICBpZiAoIXF1ZXJpZXMkJDEubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChmaWxlcy5tYXAocmVtb3ZlRmlsZSkpO1xuICAgICAgfVxuXG4gICAgICAvLyB3aGVuIHJlbW92aW5nIGJ5IGluZGV4IHRoZSBpbmRleGVzIHNoaWZ0IGFmdGVyIGVhY2ggZmlsZSByZW1vdmFsIHNvIHdlIG5lZWQgdG8gY29udmVydCBpbmRleGVzIHRvIGlkc1xuICAgICAgdmFyIG1hcHBlZFF1ZXJpZXMgPSBxdWVyaWVzJCQxXG4gICAgICAgIC5tYXAoZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgICByZXR1cm4gaXNOdW1iZXIocXVlcnkpXG4gICAgICAgICAgICA/IGZpbGVzW3F1ZXJ5XSA/IGZpbGVzW3F1ZXJ5XS5pZCA6IG51bGxcbiAgICAgICAgICAgIDogcXVlcnk7XG4gICAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbWFwcGVkUXVlcmllcy5tYXAocmVtb3ZlRmlsZSk7XG4gICAgfTtcblxuICAgIHZhciBleHBvcnRzID0gX2V4dGVuZHMoXG4gICAgICB7fSxcbiAgICAgIG9uKCksXG4gICAgICByZWFkV3JpdGVBcGksXG4gICAgICBjcmVhdGVPcHRpb25BUEkoc3RvcmUsIGRlZmF1bHRPcHRpb25zJCQxKSxcbiAgICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE92ZXJyaWRlIG9wdGlvbnMgZGVmaW5lZCBpbiBvcHRpb25zIG9iamVjdFxuICAgICAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgc2V0T3B0aW9uczogc2V0T3B0aW9ucyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9hZCB0aGUgZ2l2ZW4gZmlsZVxuICAgICAgICAgKiBAcGFyYW0gc291cmNlIC0gdGhlIHNvdXJjZSBvZiB0aGUgZmlsZSAoZWl0aGVyIGEgRmlsZSwgYmFzZTY0IGRhdGEgdXJpIG9yIHVybClcbiAgICAgICAgICogQHBhcmFtIG9wdGlvbnMgLSBvYmplY3QsIHsgaW5kZXg6IDAgfVxuICAgICAgICAgKi9cbiAgICAgICAgYWRkRmlsZTogYWRkRmlsZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9hZCB0aGUgZ2l2ZW4gZmlsZXNcbiAgICAgICAgICogQHBhcmFtIHNvdXJjZXMgLSB0aGUgc291cmNlcyBvZiB0aGUgZmlsZXMgdG8gbG9hZFxuICAgICAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIG9iamVjdCwgeyBpbmRleDogMCB9XG4gICAgICAgICAqL1xuICAgICAgICBhZGRGaWxlczogYWRkRmlsZXMsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGZpbGUgb2JqZWN0cyBtYXRjaGluZyB0aGUgZ2l2ZW4gcXVlcnlcbiAgICAgICAgICogQHBhcmFtIHF1ZXJ5IHsgc3RyaW5nLCBudW1iZXIsIG51bGwgfVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0RmlsZTogZ2V0RmlsZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVXBsb2FkIGZpbGUgd2l0aCBnaXZlbiBuYW1lXG4gICAgICAgICAqIEBwYXJhbSBxdWVyeSB7IHN0cmluZywgbnVtYmVyLCBudWxsICB9XG4gICAgICAgICAqL1xuICAgICAgICBwcm9jZXNzRmlsZTogcHJvY2Vzc0ZpbGUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgYSBmaWxlIGJ5IGl0cyBuYW1lXG4gICAgICAgICAqIEBwYXJhbSBxdWVyeSB7IHN0cmluZywgbnVtYmVyLCBudWxsICB9XG4gICAgICAgICAqL1xuICAgICAgICByZW1vdmVGaWxlOiByZW1vdmVGaWxlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGFsbCBmaWxlcyAod3JhcHBlZCBpbiBwdWJsaWMgYXBpKVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0RmlsZXM6IGdldEZpbGVzLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGFydHMgdXBsb2FkaW5nIGFsbCBmaWxlc1xuICAgICAgICAgKi9cbiAgICAgICAgcHJvY2Vzc0ZpbGVzOiBwcm9jZXNzRmlsZXMsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsZWFycyBhbGwgZmlsZXMgZnJvbSB0aGUgZmlsZXMgbGlzdFxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlRmlsZXM6IHJlbW92ZUZpbGVzLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCcm93c2UgdGhlIGZpbGUgc3lzdGVtIGZvciBhIGZpbGVcbiAgICAgICAgICovXG4gICAgICAgIGJyb3dzZTogZnVuY3Rpb24gYnJvd3NlKCkge1xuICAgICAgICAgIC8vIG5lZWRzIHRvIGJlIHRyaWdnZXIgZGlyZWN0bHkgYXMgdXNlciBhY3Rpb24gbmVlZHMgdG8gYmUgdHJhY2VhYmxlIChpcyBub3QgdHJhY2VhYmxlIGluIHJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgICAgICB2YXIgaW5wdXQgPSB2aWV3LmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1maWxlXScpO1xuICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgaW5wdXQuY2xpY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlc3Ryb3lzIHRoZSBhcHBcbiAgICAgICAgICovXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgLy8gcmVxdWVzdCBkZXN0cnVjdGlvblxuICAgICAgICAgIGV4cG9ydHMuZmlyZSgnZGVzdHJveScsIHZpZXcuZWxlbWVudCk7XG5cbiAgICAgICAgICAvLyBzdG9wIGFjdGl2ZSBwcm9jZXNzZXMgKGZpbGUgdXBsb2FkcywgZmV0Y2hlcywgc3R1ZmYgbGlrZSB0aGF0KVxuICAgICAgICAgIC8vIGxvb3Agb3ZlciBpdGVtcyBhbmQgZGVwZW5kaW5nIG9uIHN0YXRlcyBjYWxsIGFib3J0IGZvciBvbmdvaW5nIHByb2Nlc3Nlc1xuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKCdBQk9SVF9BTEwnKTtcblxuICAgICAgICAgIC8vIGRlc3Ryb3kgdmlld1xuICAgICAgICAgIHZpZXcuX2Rlc3Ryb3koKTtcblxuICAgICAgICAgIC8vIGRpc3BhdGNoIGRlc3Ryb3lcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaCgnRElEX0RFU1RST1knKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5zZXJ0cyB0aGUgcGx1Z2luIGJlZm9yZSB0aGUgdGFyZ2V0IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGluc2VydEJlZm9yZTogZnVuY3Rpb24gaW5zZXJ0QmVmb3JlJCQxKGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gaW5zZXJ0QmVmb3JlKHZpZXcuZWxlbWVudCwgZWxlbWVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluc2VydHMgdGhlIHBsdWdpbiBhZnRlciB0aGUgdGFyZ2V0IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGluc2VydEFmdGVyOiBmdW5jdGlvbiBpbnNlcnRBZnRlciQkMShlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGluc2VydEFmdGVyKHZpZXcuZWxlbWVudCwgZWxlbWVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFwcGVuZHMgdGhlIHBsdWdpbiB0byB0aGUgdGFyZ2V0IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGFwcGVuZFRvOiBmdW5jdGlvbiBhcHBlbmRUbyhlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQuYXBwZW5kQ2hpbGQodmlldy5lbGVtZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVwbGFjZXMgYW4gZWxlbWVudCB3aXRoIHRoZSBhcHBcbiAgICAgICAgICovXG4gICAgICAgIHJlcGxhY2VFbGVtZW50OiBmdW5jdGlvbiByZXBsYWNlRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgICAgLy8gaW5zZXJ0IHRoZSBhcHAgYmVmb3JlIHRoZSBlbGVtZW50XG4gICAgICAgICAgaW5zZXJ0QmVmb3JlKHZpZXcuZWxlbWVudCwgZWxlbWVudCk7XG5cbiAgICAgICAgICAvLyByZW1vdmUgdGhlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAgICAgICAvLyByZW1lbWJlciBvcmlnaW5hbCBlbGVtZW50XG4gICAgICAgICAgb3JpZ2luYWxFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzdG9yZXMgdGhlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHJlc3RvcmVFbGVtZW50OiBmdW5jdGlvbiByZXN0b3JlRWxlbWVudCgpIHtcbiAgICAgICAgICBpZiAoIW9yaWdpbmFsRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuOyAvLyBubyBlbGVtZW50IHRvIHJlc3RvcmVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyByZXN0b3JlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgICBpbnNlcnRBZnRlcihvcmlnaW5hbEVsZW1lbnQsIHZpZXcuZWxlbWVudCk7XG5cbiAgICAgICAgICAvLyByZW1vdmUgb3VyIGVsZW1lbnRcbiAgICAgICAgICB2aWV3LmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh2aWV3LmVsZW1lbnQpO1xuXG4gICAgICAgICAgLy8gcmVtb3ZlIHJlZmVyZW5jZVxuICAgICAgICAgIG9yaWdpbmFsRWxlbWVudCA9IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYXBwIHJvb3QgaXMgYXR0YWNoZWQgdG8gZ2l2ZW4gZWxlbWVudFxuICAgICAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgaXNBdHRhY2hlZFRvOiBmdW5jdGlvbiBpc0F0dGFjaGVkVG8oZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB2aWV3LmVsZW1lbnQgPT09IGVsZW1lbnQgfHwgb3JpZ2luYWxFbGVtZW50ID09PSBlbGVtZW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSByb290IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGVsZW1lbnQ6IHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgICAgIHJldHVybiB2aWV3LmVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIERvbmUhXG4gICAgc3RvcmUuZGlzcGF0Y2goJ0RJRF9JTklUJyk7XG5cbiAgICAvLyBjcmVhdGUgYWN0dWFsIGFwaSBvYmplY3RcbiAgICByZXR1cm4gY3JlYXRlT2JqZWN0KGV4cG9ydHMpO1xuICB9O1xuXG4gIHZhciBjcmVhdGVBcHBPYmplY3QgPSBmdW5jdGlvbiBjcmVhdGVBcHBPYmplY3QoKSB7XG4gICAgdmFyIGN1c3RvbU9wdGlvbnMgPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgIHZhciBkZWZhdWx0T3B0aW9ucyQkMSA9IHt9O1xuICAgIGZvcmluKGdldE9wdGlvbnMkMSgpLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICBkZWZhdWx0T3B0aW9ucyQkMVtrZXldID0gdmFsdWVbMF07XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgYXBwIG9wdGlvbnNcbiAgICB2YXIgYXBwID0gY3JlYXRlQXBwJDEoX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zJCQxLCBjdXN0b21PcHRpb25zKSk7XG5cbiAgICAvLyByZXR1cm4gdGhlIHBsdWdpbiBpbnN0YW5jZVxuICAgIHJldHVybiBhcHA7XG4gIH07XG5cbiAgdmFyIHRvQ2FtZWxzID0gZnVuY3Rpb24gdG9DYW1lbHMoc3RyaW5nKSB7XG4gICAgdmFyIHNlcGFyYXRvciA9XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICctJztcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UobmV3IFJlZ0V4cChzZXBhcmF0b3IgKyAnLicsICdnJyksIGZ1bmN0aW9uKHN1Yikge1xuICAgICAgcmV0dXJuIHN1Yi5jaGFyQXQoMSkudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgbG93ZXJDYXNlRmlyc3RMZXR0ZXIgPSBmdW5jdGlvbiBsb3dlckNhc2VGaXJzdExldHRlcihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICB9O1xuXG4gIHZhciBhdHRyaWJ1dGVOYW1lVG9Qcm9wZXJ0eU5hbWUgPSBmdW5jdGlvbiBhdHRyaWJ1dGVOYW1lVG9Qcm9wZXJ0eU5hbWUoXG4gICAgYXR0cmlidXRlTmFtZVxuICApIHtcbiAgICByZXR1cm4gdG9DYW1lbHMoYXR0cmlidXRlTmFtZS5yZXBsYWNlKC9eZGF0YS0vLCAnJykpO1xuICB9O1xuXG4gIHZhciBtYXBPYmplY3QgPSBmdW5jdGlvbiBtYXBPYmplY3Qob2JqZWN0LCBwcm9wZXJ0eU1hcCkge1xuICAgIC8vIHJlbW92ZSB1bndhbnRlZFxuICAgIGZvcmluKHByb3BlcnR5TWFwLCBmdW5jdGlvbihzZWxlY3RvciwgbWFwcGluZykge1xuICAgICAgZm9yaW4ob2JqZWN0LCBmdW5jdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgLy8gY3JlYXRlIHJlZ2V4cCBzaG9ydGN1dFxuICAgICAgICB2YXIgc2VsZWN0b3JSZWdFeHAgPSBuZXcgUmVnRXhwKHNlbGVjdG9yKTtcblxuICAgICAgICAvLyB0ZXN0cyBpZlxuICAgICAgICB2YXIgbWF0Y2hlcyA9IHNlbGVjdG9yUmVnRXhwLnRlc3QocHJvcGVydHkpO1xuXG4gICAgICAgIC8vIG5vIG1hdGNoLCBza2lwXG4gICAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRoZXJlJ3MgYSBtYXBwaW5nLCB0aGUgb3JpZ2luYWwgcHJvcGVydHkgaXMgYWx3YXlzIHJlbW92ZWRcbiAgICAgICAgZGVsZXRlIG9iamVjdFtwcm9wZXJ0eV07XG5cbiAgICAgICAgLy8gc2hvdWxkIG9ubHkgcmVtb3ZlLCB3ZSBkb25lIVxuICAgICAgICBpZiAobWFwcGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb3ZlIHZhbHVlIHRvIG5ldyBwcm9wZXJ0eVxuICAgICAgICBpZiAoaXNTdHJpbmcobWFwcGluZykpIHtcbiAgICAgICAgICBvYmplY3RbbWFwcGluZ10gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb3ZlIHRvIGdyb3VwXG4gICAgICAgIHZhciBncm91cCA9IG1hcHBpbmcuZ3JvdXA7XG4gICAgICAgIGlmIChpc09iamVjdChtYXBwaW5nKSAmJiAhb2JqZWN0W2dyb3VwXSkge1xuICAgICAgICAgIG9iamVjdFtncm91cF0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iamVjdFtncm91cF1bXG4gICAgICAgICAgbG93ZXJDYXNlRmlyc3RMZXR0ZXIocHJvcGVydHkucmVwbGFjZShzZWxlY3RvclJlZ0V4cCwgJycpKVxuICAgICAgICBdID0gdmFsdWU7XG4gICAgICB9KTtcblxuICAgICAgLy8gZG8gc3VibWFwcGluZ1xuICAgICAgaWYgKG1hcHBpbmcubWFwcGluZykge1xuICAgICAgICBtYXBPYmplY3Qob2JqZWN0W21hcHBpbmcuZ3JvdXBdLCBtYXBwaW5nLm1hcHBpbmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBnZXRBdHRyaWJ1dGVzQXNPYmplY3QgPSBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVzQXNPYmplY3Qobm9kZSkge1xuICAgIHZhciBhdHRyaWJ1dGVNYXBwaW5nID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAvLyB0dXJuIGF0dHJpYnV0ZXMgaW50byBvYmplY3RcbiAgICB2YXIgb3V0cHV0ID0gW11cbiAgICAgIC5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkobm9kZS5hdHRyaWJ1dGVzKSlcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24ob2JqLCBhdHRyaWJ1dGUpIHtcbiAgICAgICAgb2JqW2F0dHJpYnV0ZU5hbWVUb1Byb3BlcnR5TmFtZShhdHRyaWJ1dGUubmFtZSldID0gYXR0cihcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIGF0dHJpYnV0ZS5uYW1lXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICB9LCB7fSk7XG5cbiAgICAvLyBkbyBtYXBwaW5nIG9mIG9iamVjdCBwcm9wZXJ0aWVzXG4gICAgbWFwT2JqZWN0KG91dHB1dCwgYXR0cmlidXRlTWFwcGluZyk7XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuXG4gIHZhciBjcmVhdGVBcHBBdEVsZW1lbnQgPSBmdW5jdGlvbiBjcmVhdGVBcHBBdEVsZW1lbnQoZWxlbWVudCkge1xuICAgIHZhciBvcHRpb25zID1cbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAvLyBob3cgYXR0cmlidXRlcyBvZiB0aGUgaW5wdXQgZWxlbWVudCBhcmUgbWFwcGVkIHRvIHRoZSBvcHRpb25zIGZvciB0aGUgcGx1Z2luXG4gICAgdmFyIGF0dHJpYnV0ZU1hcHBpbmcgPSB7XG4gICAgICAvLyB0cmFuc2xhdGUgdG8gb3RoZXIgbmFtZVxuICAgICAgJ15jbGFzcyQnOiAnY2xhc3NOYW1lJyxcbiAgICAgICdebXVsdGlwbGUkJzogJ2FsbG93TXVsdGlwbGUnLFxuICAgICAgJ15jYXB0dXJlJCc6ICdjYXB0dXJlTWV0aG9kJyxcblxuICAgICAgLy8gZ3JvdXAgdW5kZXIgc2luZ2xlIHByb3BlcnR5XG4gICAgICAnXnNlcnZlcic6IHtcbiAgICAgICAgZ3JvdXA6ICdzZXJ2ZXInLFxuICAgICAgICBtYXBwaW5nOiB7XG4gICAgICAgICAgJ15wcm9jZXNzJzoge1xuICAgICAgICAgICAgZ3JvdXA6ICdwcm9jZXNzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ15yZXZlcnQnOiB7XG4gICAgICAgICAgICBncm91cDogJ3JldmVydCdcbiAgICAgICAgICB9LFxuICAgICAgICAgICdeZmV0Y2gnOiB7XG4gICAgICAgICAgICBncm91cDogJ2ZldGNoJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ15yZXN0b3JlJzoge1xuICAgICAgICAgICAgZ3JvdXA6ICdyZXN0b3JlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ15sb2FkJzoge1xuICAgICAgICAgICAgZ3JvdXA6ICdsb2FkJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLy8gZG9uJ3QgaW5jbHVkZSBpbiBvYmplY3RcbiAgICAgICdedHlwZSQnOiBmYWxzZSxcbiAgICAgICdeZmlsZXMkJzogZmFsc2VcbiAgICB9O1xuXG4gICAgLy8gYWRkIGFkZGl0aW9uYWwgb3B0aW9uIHRyYW5zbGF0b3JzXG4gICAgYXBwbHlGaWx0ZXJzKCdTRVRfQVRUUklCVVRFX1RPX09QVElPTl9NQVAnLCBhdHRyaWJ1dGVNYXBwaW5nKTtcblxuICAgIC8vIGNyZWF0ZSBmaW5hbCBvcHRpb25zIG9iamVjdCBieSBleHRyYWN0aW5nIG9wdGlvbnMgZnJvbSBlbGVtZW50XG4gICAgLy8gYW5kIHRoZW4gb3ZlcnJpZGluZyB3aXRoIG9wdGlvbnMgb2JqZWN0XG4gICAgdmFyIG1lcmdlZE9wdGlvbnMgPSBfZXh0ZW5kcyhcbiAgICAgIHt9LFxuICAgICAgZ2V0QXR0cmlidXRlc0FzT2JqZWN0KFxuICAgICAgICBlbGVtZW50Lm5vZGVOYW1lID09PSAnRklFTERTRVQnXG4gICAgICAgICAgPyBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9ZmlsZV0nKVxuICAgICAgICAgIDogZWxlbWVudCxcbiAgICAgICAgYXR0cmlidXRlTWFwcGluZ1xuICAgICAgKSxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuXG4gICAgLy8gaWYgcGFyZW50IGlzIGEgZmllbGRzZXQsIGdldCBmaWxlcyBmcm9tIHBhcmVudCBieSBzZWxlY3RpbmcgYWxsIGlucHV0IGZpZWxkcyB0aGF0IGFyZSBub3QgZmlsZSB1cGxvYWQgZmllbGRzXG4gICAgLy8gdGhlc2Ugd2lsbCB0aGVuIGJlIGF1dG9tYXRpY2FsbHkgc2V0IHRvIHRoZSBpbml0aWFsIGZpbGVzXG4gICAgbWVyZ2VkT3B0aW9ucy5maWxlcyA9IChvcHRpb25zLmZpbGVzIHx8IFtdKS5jb25jYXQoXG4gICAgICBbXVxuICAgICAgICAuY29uY2F0KFxuICAgICAgICAgIHRvQ29uc3VtYWJsZUFycmF5KGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6bm90KFt0eXBlPWZpbGVdKScpKVxuICAgICAgICApXG4gICAgICAgIC5tYXAoZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc291cmNlOiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgdHlwZTogaW5wdXQuZGF0YXNldC50eXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gYnVpbGQgcGx1Z2luXG4gICAgdmFyIGFwcCA9IGNyZWF0ZUFwcE9iamVjdChtZXJnZWRPcHRpb25zKTtcblxuICAgIC8vIGFkZCBhbHJlYWR5IHNlbGVjdGVkIGZpbGVzXG4gICAgaWYgKGVsZW1lbnQuZmlsZXMpIHtcbiAgICAgIFtdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShlbGVtZW50LmZpbGVzKSkuZm9yRWFjaChmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgIGFwcC5hZGRGaWxlKGZpbGUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSB0aGUgdGFyZ2V0IGVsZW1lbnRcbiAgICBhcHAucmVwbGFjZUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAvLyBleHBvc2VcbiAgICByZXR1cm4gYXBwO1xuICB9O1xuXG4gIC8vIGlmIGFuIGVsZW1lbnQgaXMgcGFzc2VkLCB3ZSBjcmVhdGUgdGhlIGluc3RhbmNlIGF0IHRoYXQgZWxlbWVudCwgaWYgbm90LCB3ZSBqdXN0IGNyZWF0ZSBhbiB1cCBvYmplY3RcbiAgdmFyIGNyZWF0ZUFwcCA9IGZ1bmN0aW9uIGNyZWF0ZUFwcCgpIHtcbiAgICByZXR1cm4gaXNOb2RlKGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXSlcbiAgICAgID8gY3JlYXRlQXBwQXRFbGVtZW50LmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKVxuICAgICAgOiBjcmVhdGVBcHBPYmplY3QuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHZhciBQUklWQVRFX01FVEhPRFMkMSA9IFsnZmlyZScsICdfcmVhZCcsICdfd3JpdGUnXTtcblxuICB2YXIgY3JlYXRlQXBwQVBJID0gZnVuY3Rpb24gY3JlYXRlQXBwQVBJKGFwcCkge1xuICAgIHZhciBhcGkgPSB7fTtcblxuICAgIGNvcHlPYmplY3RQcm9wZXJ0aWVzVG9PYmplY3QoYXBwLCBhcGksIFBSSVZBVEVfTUVUSE9EUyQxKTtcblxuICAgIHJldHVybiBhcGk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHBsYWNlaG9sZGVycyBpbiBnaXZlbiBzdHJpbmcgd2l0aCByZXBsYWNlbWVudHNcbiAgICogQHBhcmFtIHN0cmluZyAtIFwiRm9vIHtiYXJ9XCJcIlxuICAgKiBAcGFyYW0gcmVwbGFjZW1lbnRzIC0geyBcImJhclwiOiAxMCB9XG4gICAqL1xuICB2YXIgcmVwbGFjZUluU3RyaW5nID0gZnVuY3Rpb24gcmVwbGFjZUluU3RyaW5nKHN0cmluZywgcmVwbGFjZW1lbnRzKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oPzp7KFthLXpdKyl9KS9nLCBmdW5jdGlvbihtYXRjaCwgZ3JvdXApIHtcbiAgICAgIHJldHVybiByZXBsYWNlbWVudHNbZ3JvdXBdO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBpbWFnZXMgPSBbJ2pwZycsICdqcGVnJywgJ3BuZycsICdnaWYnLCAnYm1wJywgJ3dlYnAnLCAnc3ZnJywgJ3RpZmYnXTtcbiAgdmFyIHRleHQkMSA9IFsnY3NzJywgJ2NzdicsICdodG1sJywgJ3R4dCddO1xuICB2YXIgbWFwID0ge1xuICAgIHppcDogJ3ppcHxjb21wcmVzc2VkJyxcbiAgICBlcHViOiAnYXBwbGljYXRpb24vZXB1Yit6aXAnXG4gIH07XG5cbiAgdmFyIGd1ZXNzdGltYXRlTWltZVR5cGUgPSBmdW5jdGlvbiBndWVzc3RpbWF0ZU1pbWVUeXBlKCkge1xuICAgIHZhciBleHRlbnNpb24gPVxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcblxuICAgIGV4dGVuc2lvbiA9IGV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChpbWFnZXMuaW5jbHVkZXMoZXh0ZW5zaW9uKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgJ2ltYWdlLycgK1xuICAgICAgICAoZXh0ZW5zaW9uID09PSAnanBnJ1xuICAgICAgICAgID8gJ2pwZWcnXG4gICAgICAgICAgOiBleHRlbnNpb24gPT09ICdzdmcnID8gJ3N2Zyt4bWwnIDogZXh0ZW5zaW9uKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRleHQkMS5pbmNsdWRlcyhleHRlbnNpb24pKSB7XG4gICAgICByZXR1cm4gJ3RleHQvJyArIGV4dGVuc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIG1hcFtleHRlbnNpb25dIHx8IG51bGw7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVdvcmtlciA9IGZ1bmN0aW9uIGNyZWF0ZVdvcmtlcihmbikge1xuICAgIHZhciB3b3JrZXJCbG9iID0gbmV3IEJsb2IoWycoJywgZm4udG9TdHJpbmcoKSwgJykoKSddLCB7XG4gICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCdcbiAgICB9KTtcbiAgICB2YXIgd29ya2VyVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh3b3JrZXJCbG9iKTtcbiAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcih3b3JrZXJVUkwpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZmVyOiBmdW5jdGlvbiB0cmFuc2ZlcihtZXNzYWdlLCBjYikge30sXG4gICAgICBwb3N0OiBmdW5jdGlvbiBwb3N0KG1lc3NhZ2UsIGNiLCB0cmFuc2Zlckxpc3QpIHtcbiAgICAgICAgdmFyIGlkID0gZ2V0VW5pcXVlSWQoKTtcblxuICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGlmIChlLmRhdGEuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICBjYihlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0cmFuc2Zlckxpc3RcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uIHRlcm1pbmF0ZSgpIHtcbiAgICAgICAgd29ya2VyLnRlcm1pbmF0ZSgpO1xuICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHdvcmtlclVSTCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgbG9hZEltYWdlID0gZnVuY3Rpb24gbG9hZEltYWdlKHVybCwgY2IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUoaW1nKTtcbiAgICAgIH07XG4gICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfTtcbiAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGNvcHlGaWxlID0gZnVuY3Rpb24gY29weUZpbGUoZmlsZSkge1xuICAgIHJldHVybiByZW5hbWVGaWxlKGZpbGUsIGZpbGUubmFtZSk7XG4gIH07XG5cbiAgLy8gdXRpbGl0aWVzIGV4cG9zZWQgdG8gcGx1Z2luc1xuICAvLyBhbHJlYWR5IHJlZ2lzdGVyZWQgcGx1Z2lucyAoY2FuJ3QgcmVnaXN0ZXIgdHdpY2UpXG4gIHZhciByZWdpc3RlcmVkUGx1Z2lucyA9IFtdO1xuXG4gIC8vIHBhc3MgdXRpbHMgdG8gcGx1Z2luXG4gIHZhciBjcmVhdGVBcHBQbHVnaW4gPSBmdW5jdGlvbiBjcmVhdGVBcHBQbHVnaW4ocGx1Z2luKSB7XG4gICAgLy8gYWxyZWFkeSByZWdpc3RlcmVkXG4gICAgaWYgKHJlZ2lzdGVyZWRQbHVnaW5zLmluY2x1ZGVzKHBsdWdpbikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyByZW1lbWJlciB0aGlzIHBsdWdpblxuICAgIHJlZ2lzdGVyZWRQbHVnaW5zLnB1c2gocGx1Z2luKTtcblxuICAgIC8vIHNldHVwIVxuICAgIHZhciBwbHVnaW5PdXRsaW5lID0gcGx1Z2luKHtcbiAgICAgIGFkZEZpbHRlcjogYWRkRmlsdGVyLFxuICAgICAgdXRpbHM6IHtcbiAgICAgICAgVHlwZTogVHlwZSxcbiAgICAgICAgZm9yaW46IGZvcmluLFxuICAgICAgICBpc1N0cmluZzogaXNTdHJpbmcsXG4gICAgICAgIHRvTmF0dXJhbEZpbGVTaXplOiB0b05hdHVyYWxGaWxlU2l6ZSxcbiAgICAgICAgcmVwbGFjZUluU3RyaW5nOiByZXBsYWNlSW5TdHJpbmcsXG4gICAgICAgIGdldEV4dGVuc2lvbkZyb21GaWxlbmFtZTogZ2V0RXh0ZW5zaW9uRnJvbUZpbGVuYW1lLFxuICAgICAgICBnZXRGaWxlbmFtZVdpdGhvdXRFeHRlbnNpb246IGdldEZpbGVuYW1lV2l0aG91dEV4dGVuc2lvbixcbiAgICAgICAgZ3Vlc3N0aW1hdGVNaW1lVHlwZTogZ3Vlc3N0aW1hdGVNaW1lVHlwZSxcbiAgICAgICAgZ2V0RmlsZUZyb21CbG9iOiBnZXRGaWxlRnJvbUJsb2IsXG4gICAgICAgIGdldEZpbGVuYW1lRnJvbVVSTDogZ2V0RmlsZW5hbWVGcm9tVVJMLFxuICAgICAgICBjcmVhdGVSb3V0ZTogY3JlYXRlUm91dGUsXG4gICAgICAgIGNyZWF0ZVdvcmtlcjogY3JlYXRlV29ya2VyLFxuICAgICAgICBjcmVhdGVWaWV3OiBjcmVhdGVWaWV3LFxuICAgICAgICBsb2FkSW1hZ2U6IGxvYWRJbWFnZSxcbiAgICAgICAgY29weUZpbGU6IGNvcHlGaWxlLFxuICAgICAgICByZW5hbWVGaWxlOiByZW5hbWVGaWxlLFxuICAgICAgICBhcHBseUZpbHRlckNoYWluOiBhcHBseUZpbHRlckNoYWluXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgcGx1Z2luIG9wdGlvbnMgdG8gZGVmYXVsdCBvcHRpb25zXG4gICAgZXh0ZW5kRGVmYXVsdE9wdGlvbnMocGx1Z2luT3V0bGluZS5vcHRpb25zKTtcbiAgfTtcblxuICAvKipcbiAgICogUGx1Z2luIGludGVybmFsIHN0YXRlIChvdmVyIGFsbCBpbnN0YW5jZXMpXG4gICAqL1xuICB2YXIgc3RhdGUgPSB7XG4gICAgLy8gYWN0aXZlIGFwcCBpbnN0YW5jZXMsIHVzZWQgdG8gcmVkcmF3IHRoZSBhcHBzIGFuZCB0byBmaW5kIHRoZSBsYXRlclxuICAgIGFwcHM6IFtdXG4gIH07XG5cbiAgLy8gcGx1Z2luIG5hbWVcbiAgdmFyIG5hbWUgPSAnZmlsZXBvbmQnO1xuXG4gIC8vIGlzIGluIGJyb3dzZXJcbiAgdmFyIGhhc05hdmlnYXRvciA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnO1xuXG4gIC8vIGFwcCBwYWludGVyLCBjYW5ub3QgYmUgcGF1c2VkIG9yIHN0b3BwZWQgYXQgdGhlIG1vbWVudFxuICB2YXIgcGFpbnRlciA9XG4gICAgaGFzTmF2aWdhdG9yICYmXG4gICAgY3JlYXRlUGFpbnRlcihjcmVhdGVVcGRhdGVyKHN0YXRlLmFwcHMsICdfcmVhZCcsICdfd3JpdGUnKSwgNjApO1xuXG4gIC8vIGZpcmUgbG9hZCBldmVudFxuICBpZiAoaGFzTmF2aWdhdG9yKSB7XG4gICAgLy8gZmlyZSBsb2FkZWQgZXZlbnQgc28gd2Uga25vdyB3aGVuIEZpbGVQb25kIGlzIGF2YWlsYWJsZVxuICAgIHZhciBkaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgLy8gbGV0IG90aGVycyBrbm93IHdlIGhhdmUgYXJlYSByZWFkeVxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdGaWxlUG9uZDpsb2FkZWQnLCB7XG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICBzdXBwb3J0ZWQ6IHN1cHBvcnRlZCxcbiAgICAgICAgICAgIGNyZWF0ZTogY3JlYXRlLFxuICAgICAgICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgICAgICAgIHBhcnNlOiBwYXJzZSxcbiAgICAgICAgICAgIGZpbmQ6IGZpbmQsXG4gICAgICAgICAgICByZWdpc3RlclBsdWdpbjogcmVnaXN0ZXJQbHVnaW4sXG4gICAgICAgICAgICBzZXRPcHRpb25zOiBzZXRPcHRpb25zJCQxXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgLy8gY2xlYW4gdXAgZXZlbnRcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBkaXNwYXRjaCk7XG4gICAgfTtcblxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgIC8vIG1vdmUgdG8gYmFjayBvZiBleGVjdXRpb24gcXVldWUsIEZpbGVQb25kIHNob3VsZCBoYXZlIGJlZW4gZXhwb3J0ZWQgYnkgdGhlblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKCk7XG4gICAgICB9LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cblxuICAvLyB1cGRhdGVzIHRoZSBPcHRpb25UeXBlcyBvYmplY3QgYmFzZWQgb24gdGhlIGN1cnJlbnQgb3B0aW9uc1xuICB2YXIgdXBkYXRlT3B0aW9uVHlwZXMgPSBmdW5jdGlvbiB1cGRhdGVPcHRpb25UeXBlcygpIHtcbiAgICByZXR1cm4gZm9yaW4oZ2V0T3B0aW9ucyQxKCksIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIE9wdGlvblR5cGVzW2tleV0gPSB2YWx1ZVsxXTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIFBsdWdpbiBtZXRob2RzXG4gICAqL1xuICB2YXIgRmlsZVN0YXR1cyA9IF9leHRlbmRzKHt9LCBJdGVtU3RhdHVzKTtcblxuICB2YXIgT3B0aW9uVHlwZXMgPSB7fTtcbiAgdXBkYXRlT3B0aW9uVHlwZXMoKTtcblxuICAvLyBjcmVhdGUgbWV0aG9kLCBjcmVhdGVzIGFwcHMgYW5kIGFkZHMgdGhlbSB0byB0aGUgYXBwIGFycmF5XG4gIHZhciBjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIGFwcCA9IGNyZWF0ZUFwcC5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgYXBwLm9uKCdkZXN0cm95JywgZGVzdHJveSk7XG4gICAgc3RhdGUuYXBwcy5wdXNoKGFwcCk7XG4gICAgcmV0dXJuIGNyZWF0ZUFwcEFQSShhcHApO1xuICB9O1xuXG4gIC8vIGRlc3Ryb3lzIGFwcHMgYW5kIHJlbW92ZXMgdGhlbSBmcm9tIHRoZSBhcHAgYXJyYXlcbiAgdmFyIGRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KGhvb2spIHtcbiAgICAvLyByZXR1cm5zIHRydWUgaWYgdGhlIGFwcCB3YXMgZGVzdHJveWVkIHN1Y2Nlc3NmdWxseVxuICAgIHZhciBpbmRleFRvUmVtb3ZlID0gc3RhdGUuYXBwcy5maW5kSW5kZXgoZnVuY3Rpb24oYXBwKSB7XG4gICAgICByZXR1cm4gYXBwLmlzQXR0YWNoZWRUbyhob29rKTtcbiAgICB9KTtcbiAgICBpZiAoaW5kZXhUb1JlbW92ZSA+PSAwKSB7XG4gICAgICAvLyByZW1vdmUgZnJvbSBhcHBzXG4gICAgICB2YXIgYXBwID0gc3RhdGUuYXBwcy5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSlbMF07XG5cbiAgICAgIC8vIHJlc3RvcmUgb3JpZ2luYWwgZG9tIGVsZW1lbnRcbiAgICAgIGFwcC5yZXN0b3JlRWxlbWVudCgpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gcGFyc2VzIHRoZSBnaXZlbiBjb250ZXh0IGZvciBwbHVnaW5zIChkb2VzIG5vdCBpbmNsdWRlIHRoZSBjb250ZXh0IGVsZW1lbnQgaXRzZWxmKVxuICB2YXIgcGFyc2UgPSBmdW5jdGlvbiBwYXJzZShjb250ZXh0KSB7XG4gICAgLy8gZ2V0IGFsbCBwb3NzaWJsZSBob29rc1xuICAgIHZhciBtYXRjaGVkSG9va3MgPSBbXS5jb25jYXQoXG4gICAgICB0b0NvbnN1bWFibGVBcnJheShjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgbmFtZSkpXG4gICAgKTtcblxuICAgIC8vIGZpbHRlciBvdXQgYWxyZWFkeSBhY3RpdmUgaG9va3NcbiAgICB2YXIgbmV3SG9va3MgPSBtYXRjaGVkSG9va3MuZmlsdGVyKGZ1bmN0aW9uKG5ld0hvb2spIHtcbiAgICAgIHJldHVybiAhc3RhdGUuYXBwcy5maW5kKGZ1bmN0aW9uKGFwcCkge1xuICAgICAgICByZXR1cm4gYXBwLmlzQXR0YWNoZWRUbyhuZXdIb29rKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gY3JlYXRlIG5ldyBpbnN0YW5jZSBmb3IgZWFjaCBob29rXG4gICAgcmV0dXJuIG5ld0hvb2tzLm1hcChmdW5jdGlvbihob29rKSB7XG4gICAgICByZXR1cm4gY3JlYXRlKGhvb2spO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIHJldHVybnMgYW4gYXBwIGJhc2VkIG9uIHRoZSBnaXZlbiBlbGVtZW50IGhvb2tcbiAgdmFyIGZpbmQgPSBmdW5jdGlvbiBmaW5kKGhvb2spIHtcbiAgICB2YXIgYXBwID0gc3RhdGUuYXBwcy5maW5kKGZ1bmN0aW9uKGFwcCkge1xuICAgICAgcmV0dXJuIGFwcC5pc0F0dGFjaGVkVG8oaG9vayk7XG4gICAgfSk7XG4gICAgaWYgKCFhcHApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQXBwQVBJKGFwcCk7XG4gIH07XG5cbiAgLy8gcmV0dXJucyB0cnVlIGlmIHBsdWdpbiBpcyBzdXBwb3J0ZWRcbiAgdmFyIGlzT3BlcmFNaW5pID0gZnVuY3Rpb24gaXNPcGVyYU1pbmkoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aW5kb3cub3BlcmFtaW5pKSA9PT0gJ1tvYmplY3QgT3BlcmFNaW5pXSdcbiAgICApO1xuICB9O1xuICB2YXIgaGFzUHJvbWlzZXMgPSBmdW5jdGlvbiBoYXNQcm9taXNlcygpIHtcbiAgICByZXR1cm4gJ1Byb21pc2UnIGluIHdpbmRvdztcbiAgfTtcbiAgdmFyIGhhc0Jsb2JTbGljZSA9IGZ1bmN0aW9uIGhhc0Jsb2JTbGljZSgpIHtcbiAgICByZXR1cm4gJ3NsaWNlJyBpbiBCbG9iLnByb3RvdHlwZTtcbiAgfTtcbiAgdmFyIGhhc0NyZWF0ZU9iamVjdFVSTCA9IGZ1bmN0aW9uIGhhc0NyZWF0ZU9iamVjdFVSTCgpIHtcbiAgICByZXR1cm4gJ1VSTCcgaW4gd2luZG93ICYmICdjcmVhdGVPYmplY3RVUkwnIGluIHdpbmRvdy5VUkw7XG4gIH07XG4gIHZhciBoYXNWaXNpYmlsaXR5ID0gZnVuY3Rpb24gaGFzVmlzaWJpbGl0eSgpIHtcbiAgICByZXR1cm4gJ3Zpc2liaWxpdHlTdGF0ZScgaW4gZG9jdW1lbnQ7XG4gIH07XG4gIHZhciBoYXNUaW1pbmcgPSBmdW5jdGlvbiBoYXNUaW1pbmcoKSB7XG4gICAgcmV0dXJuICdwZXJmb3JtYW5jZScgaW4gd2luZG93O1xuICB9OyAvLyBpT1MgOC54XG5cbiAgdmFyIHN1cHBvcnRlZCA9IGZ1bmN0aW9uIHN1cHBvcnRlZCgpIHtcbiAgICBpZiAoIWhhc05hdmlnYXRvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gIShcbiAgICAgIGlzT3BlcmFNaW5pKCkgfHxcbiAgICAgICFoYXNWaXNpYmlsaXR5KCkgfHxcbiAgICAgICFoYXNQcm9taXNlcygpIHx8XG4gICAgICAhaGFzQmxvYlNsaWNlKCkgfHxcbiAgICAgICFoYXNDcmVhdGVPYmplY3RVUkwoKSB8fFxuICAgICAgIWhhc1RpbWluZygpXG4gICAgKTtcbiAgfTtcblxuICAvLyBhZGRzIGEgcGx1Z2luIGV4dGVuc2lvblxuICB2YXIgcmVnaXN0ZXJQbHVnaW4gPSBmdW5jdGlvbiByZWdpc3RlclBsdWdpbigpIHtcbiAgICBmb3IgKFxuICAgICAgdmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwbHVnaW5zID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwO1xuICAgICAgX2tleSA8IF9sZW47XG4gICAgICBfa2V5KytcbiAgICApIHtcbiAgICAgIHBsdWdpbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgLy8gcmVnaXN0ZXIgcGx1Z2luc1xuICAgIHBsdWdpbnMuZm9yRWFjaChjcmVhdGVBcHBQbHVnaW4pO1xuXG4gICAgLy8gdXBkYXRlIE9wdGlvblR5cGVzLCBlYWNoIHBsdWdpbiBtaWdodCBoYXZlIGV4dGVuZGVkIHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAgICB1cGRhdGVPcHRpb25UeXBlcygpO1xuICB9O1xuXG4gIHZhciBnZXRPcHRpb25zJCQxID0gZnVuY3Rpb24gZ2V0T3B0aW9ucyQkMSgpIHtcbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIGZvcmluKGdldE9wdGlvbnMkMSgpLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICBvcHRzW2tleV0gPSB2YWx1ZVswXTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3B0cztcbiAgfTtcblxuICB2YXIgc2V0T3B0aW9ucyQkMSA9IGZ1bmN0aW9uIHNldE9wdGlvbnMkJDEob3B0cykge1xuICAgIGlmIChpc09iamVjdChvcHRzKSkge1xuICAgICAgLy8gdXBkYXRlIGV4aXN0aW5nIHBsdWdpbnNcbiAgICAgIHN0YXRlLmFwcHMuZm9yRWFjaChmdW5jdGlvbihhcHApIHtcbiAgICAgICAgYXBwLnNldE9wdGlvbnMob3B0cyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gb3ZlcnJpZGUgZGVmYXVsdHNcbiAgICAgIHNldE9wdGlvbnMkMShvcHRzKTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gbmV3IG9wdGlvbnNcbiAgICByZXR1cm4gZ2V0T3B0aW9ucyQkMSgpO1xuICB9O1xuXG4gIGV4cG9ydHMuRmlsZVN0YXR1cyA9IEZpbGVTdGF0dXM7XG4gIGV4cG9ydHMuT3B0aW9uVHlwZXMgPSBPcHRpb25UeXBlcztcbiAgZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG4gIGV4cG9ydHMuZGVzdHJveSA9IGRlc3Ryb3k7XG4gIGV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbiAgZXhwb3J0cy5maW5kID0gZmluZDtcbiAgZXhwb3J0cy5zdXBwb3J0ZWQgPSBzdXBwb3J0ZWQ7XG4gIGV4cG9ydHMucmVnaXN0ZXJQbHVnaW4gPSByZWdpc3RlclBsdWdpbjtcbiAgZXhwb3J0cy5nZXRPcHRpb25zID0gZ2V0T3B0aW9ucyQkMTtcbiAgZXhwb3J0cy5zZXRPcHRpb25zID0gc2V0T3B0aW9ucyQkMTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9maWxlcG9uZC9kaXN0L2ZpbGVwb25kLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLypcbiAqIEZpbGVQb25kUGx1Z2luRmlsZVZhbGlkYXRlVHlwZSAxLjAuM1xuICogTGljZW5zZWQgdW5kZXIgTUlULCBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogUGxlYXNlIHZpc2l0IGh0dHBzOi8vcHFpbmEubmwvZmlsZXBvbmQgZm9yIGRldGFpbHMuXG4gKi9cbnZhciBwbHVnaW4kMSA9ICh7IGFkZEZpbHRlciwgdXRpbHMgfSkgPT4ge1xuICAvLyBnZXQgcXVpY2sgcmVmZXJlbmNlIHRvIFR5cGUgdXRpbHNcbiAgY29uc3Qge1xuICAgIFR5cGUsXG4gICAgaXNTdHJpbmcsXG4gICAgZ3Vlc3N0aW1hdGVNaW1lVHlwZSxcbiAgICBnZXRFeHRlbnNpb25Gcm9tRmlsZW5hbWUsXG4gICAgZ2V0RmlsZW5hbWVGcm9tVVJMXG4gIH0gPSB1dGlscztcblxuICBjb25zdCBtaW1lVHlwZU1hdGNoZXNXaWxkQ2FyZCA9IChtaW1lVHlwZSwgd2lsZGNhcmQpID0+IHtcbiAgICBjb25zdCBtaW1lVHlwZUdyb3VwID0gKC9eW14vXSsvLmV4ZWMobWltZVR5cGUpIHx8IFtdKS5wb3AoKTsgLy8gaW1hZ2UvcG5nIC0+IGltYWdlXG4gICAgY29uc3Qgd2lsZGNhcmRHcm91cCA9IHdpbGRjYXJkLnNsaWNlKDAsIC0yKTsgLy8gaW1hZ2UvKiAtPiBpbWFnZVxuICAgIHJldHVybiBtaW1lVHlwZUdyb3VwID09PSB3aWxkY2FyZEdyb3VwO1xuICB9O1xuXG4gIGNvbnN0IGlzVmFsaWRNSU1FVHlwZSA9IChhY2NlcHRlZFR5cGVzLCB1c2VySW5wdXRUeXBlKSA9PlxuICAgIGFjY2VwdGVkVHlwZXMuc29tZShhY2NlcHRlZFR5cGUgPT4ge1xuICAgICAgLy8gYWNjZXB0ZWQgaXMgd2lsZGNhcmQgbWltZSB0eXBlXG4gICAgICBpZiAoL1xcKiQvLnRlc3QoYWNjZXB0ZWRUeXBlKSkge1xuICAgICAgICByZXR1cm4gbWltZVR5cGVNYXRjaGVzV2lsZENhcmQodXNlcklucHV0VHlwZSwgYWNjZXB0ZWRUeXBlKTtcbiAgICAgIH1cblxuICAgICAgLy8gaXMgbm9ybWFsIG1pbWUgdHlwZVxuICAgICAgcmV0dXJuIGFjY2VwdGVkVHlwZSA9PT0gdXNlcklucHV0VHlwZTtcbiAgICB9KTtcblxuICBjb25zdCB2YWxpZGF0ZUZpbGUgPSAoaXRlbSwgYWNjZXB0ZWRGaWxlVHlwZXMpID0+IHtcbiAgICAvLyBubyB0eXBlcyBkZWZpbmVkLCBldmVyeXRoaW5nIGlzIGFsbG93ZWQgXFxvL1xuICAgIGlmIChhY2NlcHRlZEZpbGVUeXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSBpdGVtIGlzIGEgdXJsIHdlIGd1ZXNzIHRoZSBtaW1lIHR5cGUgYnkgdGhlIGV4dGVuc2lvblxuICAgIGxldCB0eXBlID0gJyc7XG4gICAgaWYgKGlzU3RyaW5nKGl0ZW0pKSB7XG4gICAgICBjb25zdCBmaWxlbmFtZSA9IGdldEZpbGVuYW1lRnJvbVVSTChpdGVtKTtcbiAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGdldEV4dGVuc2lvbkZyb21GaWxlbmFtZShmaWxlbmFtZSk7XG4gICAgICBpZiAoZXh0ZW5zaW9uKSB7XG4gICAgICAgIHR5cGUgPSBndWVzc3RpbWF0ZU1pbWVUeXBlKGV4dGVuc2lvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZSA9IGl0ZW0udHlwZTtcbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0ZSBmaWxlIHR5cGVcbiAgICByZXR1cm4gaXNWYWxpZE1JTUVUeXBlKGFjY2VwdGVkRmlsZVR5cGVzLCB0eXBlKTtcbiAgfTtcblxuICAvLyBzZXR1cCBhdHRyaWJ1dGUgbWFwcGluZyBmb3IgYWNjZXB0XG4gIGFkZEZpbHRlcignU0VUX0FUVFJJQlVURV9UT19PUFRJT05fTUFQJywgbWFwID0+XG4gICAgT2JqZWN0LmFzc2lnbihtYXAsIHtcbiAgICAgIGFjY2VwdDogJ2FjY2VwdGVkRmlsZVR5cGVzJ1xuICAgIH0pXG4gICk7XG5cbiAgLy8gZmlsdGVyaW5nIGlmIGFuIGl0ZW0gaXMgYWxsb3dlZCBpbiBob3BwZXJcbiAgYWRkRmlsdGVyKCdBTExPV19IT1BQRVJfSVRFTScsIChmaWxlLCB7IHF1ZXJ5IH0pID0+IHtcbiAgICAvLyBpZiB3ZSBhcmUgbm90IGRvaW5nIGZpbGUgdHlwZSB2YWxpZGF0aW9uIGV4aXRcbiAgICBpZiAoIXF1ZXJ5KCdHRVRfQUxMT1dfRklMRV9UWVBFX1ZBTElEQVRJT04nKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gd2UgdmFsaWRhdGUgdGhlIGZpbGUgYWdhaW5zdCB0aGUgYWNjZXB0ZWQgZmlsZSB0eXBlc1xuICAgIHJldHVybiB2YWxpZGF0ZUZpbGUoZmlsZSwgcXVlcnkoJ0dFVF9BQ0NFUFRFRF9GSUxFX1RZUEVTJykpO1xuICB9KTtcblxuICAvLyBjYWxsZWQgZm9yIGVhY2ggZmlsZSB0aGF0IGlzIGxvYWRlZFxuICAvLyByaWdodCBiZWZvcmUgaXQgaXMgc2V0IHRvIHRoZSBpdGVtIHN0YXRlXG4gIC8vIHNob3VsZCByZXR1cm4gYSBwcm9taXNlXG4gIGFkZEZpbHRlcihcbiAgICAnTE9BRF9GSUxFJyxcbiAgICAoZmlsZSwgeyBxdWVyeSB9KSA9PlxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxvd0ZpbGVUeXBlVmFsaWRhdGlvbiA9IHF1ZXJ5KCdHRVRfQUxMT1dfRklMRV9UWVBFX1ZBTElEQVRJT04nKTtcbiAgICAgICAgaWYgKCFhbGxvd0ZpbGVUeXBlVmFsaWRhdGlvbikge1xuICAgICAgICAgIHJlc29sdmUoZmlsZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWNjZXB0ZWRGaWxlVHlwZXMgPSBxdWVyeSgnR0VUX0FDQ0VQVEVEX0ZJTEVfVFlQRVMnKTtcblxuICAgICAgICAvLyBpZiBpbnZhbGlkLCBleGl0IGhlcmVcbiAgICAgICAgaWYgKCF2YWxpZGF0ZUZpbGUoZmlsZSwgYWNjZXB0ZWRGaWxlVHlwZXMpKSB7XG4gICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgIHN0YXR1czoge1xuICAgICAgICAgICAgICBtYWluOiBxdWVyeSgnR0VUX0xBQkVMX0ZJTEVfVFlQRV9OT1RfQUxMT1dFRCcpLFxuICAgICAgICAgICAgICBzdWI6IHF1ZXJ5KCdHRVRfQUNDRVBURURfRklMRV9UWVBFUycpLmpvaW4oJywgJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhbGwgZmluZVxuICAgICAgICByZXNvbHZlKGZpbGUpO1xuICAgICAgfSlcbiAgKTtcblxuICAvLyBleHBvc2UgcGx1Z2luXG4gIHJldHVybiB7XG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9uczoge1xuICAgICAgLy8gRW5hYmxlIG9yIGRpc2FibGUgZmlsZSB0eXBlIHZhbGlkYXRpb25cbiAgICAgIGFsbG93RmlsZVR5cGVWYWxpZGF0aW9uOiBbdHJ1ZSwgVHlwZS5CT09MRUFOXSxcblxuICAgICAgLy8gV2hhdCBmaWxlIHR5cGVzIHRvIGFjY2VwdFxuICAgICAgYWNjZXB0ZWRGaWxlVHlwZXM6IFtbXSwgVHlwZS5BUlJBWV0sXG4gICAgICAvLyAtIG11c3QgYmUgY29tbWEgc2VwYXJhdGVkXG4gICAgICAvLyAtIG1pbWUgdHlwZXM6IGltYWdlL3BuZywgaW1hZ2UvanBlZywgaW1hZ2UvZ2lmXG4gICAgICAvLyAtIGV4dGVuc2lvbnM6IC5wbmcsIC5qcGcsIC5qcGVnXG4gICAgICAvLyAtIHdpbGRjYXJkczogaW1hZ2UvKlxuXG4gICAgICBsYWJlbEZpbGVUeXBlTm90QWxsb3dlZDogWydGaWxlIGlzIG9mIGludmFsaWQgdHlwZScsIFR5cGUuU1RSSU5HXVxuICAgIH1cbiAgfTtcblxuICAvLyByZWNlaXZlcyBhbGwgaXRlbXMgYW5kIHJldHVybnMgdHJ1ZSBvciBmYWxzZSBkZXBlbmRpbmcgb24gd2V0aGVyIHRoZSBpdGVtcyBhcmUgdmFsaWRcbiAgLy8gKGFzIGluLCBpcyBob3ZlcmVkIG92ZXIgaXQpXG4gIC8vIGFkZEZpbHRlcignQUxMT1dfSE9QUEVSX0lURU0nLCAoIGl0ZW0sIHsgcXVlcnkgfSkgPT4ge1xuICAvLyAgVE9ETzogaW1wbGVtZW50LCBwbHVzIHRocm93IGVycm9yIGluIGRyb3B6b25lIHRvIGluZGljYXRlIGl0ZW0gaXMgbm90IHZhbGlkXG4gIC8vIH0pO1xufTtcblxuaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50KSB7XG4gIC8vIHBsdWdpbiBoYXMgbG9hZGVkXG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgbmV3IEN1c3RvbUV2ZW50KCdGaWxlUG9uZDpwbHVnaW5sb2FkZWQnLCB7IGRldGFpbDogcGx1Z2luJDEgfSlcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luJDE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9maWxlcG9uZC1wbHVnaW4tZmlsZS12YWxpZGF0ZS10eXBlL2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWZpbGUtdmFsaWRhdGUtdHlwZS5lc20uanNcbi8vIG1vZHVsZSBpZCA9IDIxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKlxuICogRmlsZVBvbmRQbHVnaW5JbWFnZVByZXZpZXcgMS4wLjlcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCwgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIFBsZWFzZSB2aXNpdCBodHRwczovL3BxaW5hLm5sL2ZpbGVwb25kIGZvciBkZXRhaWxzLlxuICovXG4vLyB0ZXN0IGlmIGZpbGUgaXMgb2YgdHlwZSBpbWFnZSBhbmQgY2FuIGJlIHZpZXdlZCBpbiBjYW52YXNcbmNvbnN0IGlzUHJldmlld2FibGVJbWFnZSA9IGZpbGUgPT5cbiAgL15pbWFnZS8udGVzdChmaWxlLnR5cGUpICYmICEvc3ZnLy50ZXN0KGZpbGUudHlwZSk7XG5cbmNvbnN0IHRyYW5zZm9ybXMgPSB7XG4gIDE6ICgpID0+IFsxLCAwLCAwLCAxLCAwLCAwXSxcbiAgMjogd2lkdGggPT4gWy0xLCAwLCAwLCAxLCB3aWR0aCwgMF0sXG4gIDM6ICh3aWR0aCwgaGVpZ2h0KSA9PiBbLTEsIDAsIDAsIC0xLCB3aWR0aCwgaGVpZ2h0XSxcbiAgNDogKHdpZHRoLCBoZWlnaHQpID0+IFsxLCAwLCAwLCAtMSwgMCwgaGVpZ2h0XSxcbiAgNTogKCkgPT4gWzAsIDEsIDEsIDAsIDAsIDBdLFxuICA2OiAod2lkdGgsIGhlaWdodCkgPT4gWzAsIDEsIC0xLCAwLCBoZWlnaHQsIDBdLFxuICA3OiAod2lkdGgsIGhlaWdodCkgPT4gWzAsIC0xLCAtMSwgMCwgaGVpZ2h0LCB3aWR0aF0sXG4gIDg6IHdpZHRoID0+IFswLCAtMSwgMSwgMCwgMCwgd2lkdGhdXG59O1xuXG5jb25zdCBmaXhJbWFnZU9yaWVudGF0aW9uID0gKGN0eCwgd2lkdGgsIGhlaWdodCwgb3JpZW50YXRpb24pID0+IHtcbiAgLy8gbm8gb3JpZW50YXRpb24gc3VwcGxpZWRcbiAgaWYgKG9yaWVudGF0aW9uID09PSAtMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGN0eC50cmFuc2Zvcm0oLi4udHJhbnNmb3Jtc1tvcmllbnRhdGlvbl0od2lkdGgsIGhlaWdodCkpO1xufTtcblxuLy8gZHJhd3MgdGhlIHByZXZpZXcgaW1hZ2VcbmNvbnN0IGNyZWF0ZVByZXZpZXdJbWFnZSA9IChkYXRhLCB3aWR0aCwgaGVpZ2h0LCBvcmllbnRhdGlvbikgPT4ge1xuICAvLyByb3VuZFxuICB3aWR0aCA9IE1hdGgucm91bmQod2lkdGgpO1xuICBoZWlnaHQgPSBNYXRoLnJvdW5kKGhlaWdodCk7XG5cbiAgLy8gd2lkdGggYW5kIGhlaWdodCBoYXZlIGFscmVhZHkgYmVlbiBzd2FwcGVkIGVhcmxpZXJcbiAgLy8gaWYgb3JpZW50YXRpb24gd2FzIGluIHJhbmdlIGJlbG93LCBsZXQncyBzd2FwIGJhY2sgdG8gbWFrZVxuICAvLyB0aGlzIGNvZGUgYSBiaXQgbW9yZSByZWFkYWJsZVxuICBpZiAob3JpZW50YXRpb24gPj0gNSAmJiBvcmllbnRhdGlvbiA8PSA4KSB7XG4gICAgW3dpZHRoLCBoZWlnaHRdID0gW2hlaWdodCwgd2lkdGhdO1xuICB9XG5cbiAgLy8gZHJhdyBpbWFnZVxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgLy8gaWYgaXMgcm90YXRlZCBpbmNvcnJlY3RseSBzd2FwIHdpZHRoIGFuZCBoZWlnaHRcbiAgaWYgKG9yaWVudGF0aW9uID49IDUgJiYgb3JpZW50YXRpb24gPD0gOCkge1xuICAgIGNhbnZhcy53aWR0aCA9IGhlaWdodDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIC8vIGNvcnJlY3QgaW1hZ2Ugb3JpZW50YXRpb25cbiAgY3R4LnNhdmUoKTtcbiAgZml4SW1hZ2VPcmllbnRhdGlvbihjdHgsIHdpZHRoLCBoZWlnaHQsIG9yaWVudGF0aW9uKTtcblxuICAvLyBkcmF3IHRoZSBpbWFnZVxuICBjdHguZHJhd0ltYWdlKGRhdGEsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXG4gIC8vIGVuZCBkcmF3IGltYWdlXG4gIGN0eC5yZXN0b3JlKCk7XG5cbiAgLy8gZGF0YSBoYXMgYmVlbiB0cmFuc2ZlcnJlZCB0byBjYW52YXMgKCBpZiB3YXMgSW1hZ2VCaXRtYXAgKVxuICBpZiAoJ2Nsb3NlJyBpbiBkYXRhKSB7XG4gICAgZGF0YS5jbG9zZSgpO1xuICB9XG5cbiAgcmV0dXJuIGNhbnZhcztcbn07XG5cbmNvbnN0IElNQUdFX1NDQUxFX1NQUklOR19QUk9QUyA9IHtcbiAgdHlwZTogJ3NwcmluZycsXG4gIHN0aWZmbmVzczogMC41LFxuICBkYW1waW5nOiAwLjQ1LFxuICBtYXNzOiAxMFxufTtcblxuY29uc3QgY3JlYXRlSW1hZ2VWaWV3ID0gZnBBUEkgPT5cbiAgZnBBUEkudXRpbHMuY3JlYXRlVmlldyh7XG4gICAgbmFtZTogJ2ltYWdlLXByZXZpZXcnLFxuICAgIHRhZzogJ2RpdicsXG4gICAgaWdub3JlUmVjdDogdHJ1ZSxcbiAgICBjcmVhdGU6ICh7IHJvb3QsIHByb3BzIH0pID0+IHtcbiAgICAgIHJvb3QucmVmLmNsaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvb3QuZWxlbWVudC5hcHBlbmRDaGlsZChyb290LnJlZi5jbGlwKTtcbiAgICB9LFxuICAgIHdyaXRlOiBmcEFQSS51dGlscy5jcmVhdGVSb3V0ZSh7XG4gICAgICBESURfSU1BR0VfUFJFVklFV19MT0FEOiAoeyByb290LCBwcm9wcywgYWN0aW9uIH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gcHJvcHM7XG5cbiAgICAgICAgLy8gZ2V0IGl0ZW1cbiAgICAgICAgY29uc3QgaXRlbSA9IHJvb3QucXVlcnkoJ0dFVF9JVEVNJywgeyBpZDogcHJvcHMuaWQgfSk7XG5cbiAgICAgICAgLy8gb3JpZW50YXRpb24gaW5mb1xuICAgICAgICBjb25zdCBleGlmID0gaXRlbS5nZXRNZXRhZGF0YSgnZXhpZicpIHx8IHt9O1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IGV4aWYub3JpZW50YXRpb24gfHwgLTE7XG5cbiAgICAgICAgLy8gZ2V0IHdpZHRoIGFuZCBoZWlnaHQgZnJvbSBhY3Rpb24sIGFuZCBzd2FwIG9mIG9yaWVudGF0aW9uIGlzIGluY29ycmVjdFxuICAgICAgICBsZXQgeyB3aWR0aCwgaGVpZ2h0IH0gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID49IDUgJiYgb3JpZW50YXRpb24gPD0gOCkge1xuICAgICAgICAgIFt3aWR0aCwgaGVpZ2h0XSA9IFtoZWlnaHQsIHdpZHRoXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCBpdGVtIHByb3BzXG4gICAgICAgIGNvbnN0IGNyb3AgPSBpdGVtLmdldE1ldGFkYXRhKCdjcm9wJykgfHwge1xuICAgICAgICAgIHJlY3Q6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICBoZWlnaHQ6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFzcGVjdFJhdGlvOiBoZWlnaHQgLyB3aWR0aFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNjYWxlIGNhbnZhcyBiYXNlZCBvbiBwaXhlbCBkZW5zaXR5XG4gICAgICAgIGNvbnN0IHBpeGVsRGVuc2l0eUZhY3RvciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXG4gICAgICAgIC8vIHRoZSBtYXggaGVpZ2h0IG9mIHRoZSBwcmV2aWV3IGNvbnRhaW5lclxuICAgICAgICBjb25zdCBmaXhlZFByZXZpZXdIZWlnaHQgPSByb290LnF1ZXJ5KCdHRVRfSU1BR0VfUFJFVklFV19IRUlHSFQnKTtcbiAgICAgICAgY29uc3QgbWluUHJldmlld0hlaWdodCA9IHJvb3QucXVlcnkoJ0dFVF9JTUFHRV9QUkVWSUVXX01JTl9IRUlHSFQnKTtcbiAgICAgICAgY29uc3QgbWF4UHJldmlld0hlaWdodCA9IHJvb3QucXVlcnkoJ0dFVF9JTUFHRV9QUkVWSUVXX01BWF9IRUlHSFQnKTtcblxuICAgICAgICAvLyBjYWxjdWxhdGUgc2NhbGVkIHByZXZpZXcgaW1hZ2Ugc2l6ZVxuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IHJvb3QucmVjdC5pbm5lci53aWR0aDtcbiAgICAgICAgY29uc3QgcHJldmlld0ltYWdlUmF0aW8gPSBoZWlnaHQgLyB3aWR0aDtcbiAgICAgICAgY29uc3QgcHJldmlld1dpZHRoID0gY29udGFpbmVyV2lkdGg7XG4gICAgICAgIGNvbnN0IHByZXZpZXdIZWlnaHQgPSBjb250YWluZXJXaWR0aCAqIHByZXZpZXdJbWFnZVJhdGlvO1xuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBpbWFnZSBwcmV2aWV3IGhlaWdodCBhbmQgd2lkdGhcbiAgICAgICAgY29uc3QgaW1hZ2VIZWlnaHQgPVxuICAgICAgICAgIGZpeGVkUHJldmlld0hlaWdodCAhPT0gbnVsbFxuICAgICAgICAgICAgPyBmaXhlZFByZXZpZXdIZWlnaHRcbiAgICAgICAgICAgIDogTWF0aC5tYXgobWluUHJldmlld0hlaWdodCwgTWF0aC5taW4oaGVpZ2h0LCBtYXhQcmV2aWV3SGVpZ2h0KSk7XG4gICAgICAgIGNvbnN0IGltYWdlV2lkdGggPSBpbWFnZUhlaWdodCAvIHByZXZpZXdJbWFnZVJhdGlvO1xuXG4gICAgICAgIC8vIHJlbmRlciBzY2FsZWQgcHJldmlldyBpbWFnZVxuICAgICAgICBjb25zdCBwcmV2aWV3SW1hZ2UgPSBjcmVhdGVQcmV2aWV3SW1hZ2UoXG4gICAgICAgICAgYWN0aW9uLmRhdGEsXG4gICAgICAgICAgaW1hZ2VXaWR0aCAqIHBpeGVsRGVuc2l0eUZhY3RvcixcbiAgICAgICAgICBpbWFnZUhlaWdodCAqIHBpeGVsRGVuc2l0eUZhY3RvcixcbiAgICAgICAgICBvcmllbnRhdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBjcm9wIGNvbnRhaW5lciBzaXplXG4gICAgICAgIGxldCBjbGlwSGVpZ2h0ID1cbiAgICAgICAgICBmaXhlZFByZXZpZXdIZWlnaHQgIT09IG51bGxcbiAgICAgICAgICAgID8gZml4ZWRQcmV2aWV3SGVpZ2h0XG4gICAgICAgICAgICA6IE1hdGgubWF4KFxuICAgICAgICAgICAgICAgIG1pblByZXZpZXdIZWlnaHQsXG4gICAgICAgICAgICAgICAgTWF0aC5taW4oY29udGFpbmVyV2lkdGggKiBjcm9wLmFzcGVjdFJhdGlvLCBtYXhQcmV2aWV3SGVpZ2h0KVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgIGxldCBjbGlwV2lkdGggPSBjbGlwSGVpZ2h0IC8gY3JvcC5hc3BlY3RSYXRpbztcbiAgICAgICAgaWYgKGNsaXBXaWR0aCA+IHByZXZpZXdXaWR0aCkge1xuICAgICAgICAgIGNsaXBXaWR0aCA9IHByZXZpZXdXaWR0aDtcbiAgICAgICAgICBjbGlwSGVpZ2h0ID0gY2xpcFdpZHRoICogY3JvcC5hc3BlY3RSYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBzY2FsYXIgYmFzZWQgb24gaWYgdGhlIGNsaXAgcmVjdGFuZ2xlIGhhcyBiZWVuIHNjYWxlZCBkb3duXG4gICAgICAgIGNvbnN0IHByZXZpZXdTY2FsYXIgPSBjbGlwSGVpZ2h0IC8gKHByZXZpZXdIZWlnaHQgKiBjcm9wLnJlY3QuaGVpZ2h0KTtcblxuICAgICAgICB3aWR0aCA9IHByZXZpZXdXaWR0aCAqIHByZXZpZXdTY2FsYXI7XG4gICAgICAgIGhlaWdodCA9IHByZXZpZXdIZWlnaHQgKiBwcmV2aWV3U2NhbGFyO1xuICAgICAgICBjb25zdCB4ID0gLWNyb3AucmVjdC54ICogcHJldmlld1dpZHRoICogcHJldmlld1NjYWxhcjtcbiAgICAgICAgY29uc3QgeSA9IC1jcm9wLnJlY3QueSAqIHByZXZpZXdIZWlnaHQgKiBwcmV2aWV3U2NhbGFyO1xuXG4gICAgICAgIC8vIGFwcGx5IHN0eWxlc1xuICAgICAgICByb290LnJlZi5jbGlwLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke01hdGgucm91bmQoY2xpcFdpZHRoKX1weDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAke01hdGgucm91bmQoY2xpcEhlaWdodCl9cHg7XG4gICAgICAgICAgICAgICAgYDtcblxuICAgICAgICAvLyBwb3NpdGlvbiBpbWFnZVxuICAgICAgICBwcmV2aWV3SW1hZ2Uuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7TWF0aC5yb3VuZCh3aWR0aCl9cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHtNYXRoLnJvdW5kKGhlaWdodCl9cHg7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCR7TWF0aC5yb3VuZCh4KX1weCwgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgIHlcbiAgICAgICAgKX1weCkgcm90YXRlWigwLjAwMDAxZGVnKTtcbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICByb290LnJlZi5jbGlwLmFwcGVuZENoaWxkKHByZXZpZXdJbWFnZSk7XG5cbiAgICAgICAgLy8gbGV0IG90aGVycyBrbm93IG9mIG91ciBmYWJ1bG91cyBhY2hpZXZlbWVudCAoc28gdGhlIGltYWdlIGNhbiBiZSBmYWRlZCBpbilcbiAgICAgICAgcm9vdC5kaXNwYXRjaCgnRElEX0lNQUdFX1BSRVZJRVdfRFJBVycsIHsgaWQgfSk7XG4gICAgICB9XG4gICAgfSksXG4gICAgbWl4aW5zOiB7XG4gICAgICBzdHlsZXM6IFsnc2NhbGVYJywgJ3NjYWxlWScsICdvcGFjaXR5J10sXG4gICAgICBhbmltYXRpb25zOiB7XG4gICAgICAgIHNjYWxlWDogSU1BR0VfU0NBTEVfU1BSSU5HX1BST1BTLFxuICAgICAgICBzY2FsZVk6IElNQUdFX1NDQUxFX1NQUklOR19QUk9QUyxcbiAgICAgICAgb3BhY2l0eTogeyB0eXBlOiAndHdlZW4nLCBkdXJhdGlvbjogNzUwIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5jb25zdCBhcHBseVRlbXBsYXRlID0gKHNvdXJjZSwgdGFyZ2V0KSA9PiB7XG4gIC8vIGNvcHkgd2lkdGggYW5kIGhlaWdodFxuICB0YXJnZXQud2lkdGggPSBzb3VyY2Uud2lkdGg7XG4gIHRhcmdldC5oZWlnaHQgPSBzb3VyY2UuaGVpZ2h0O1xuXG4gIC8vIGRyYXcgdGhlIHRlbXBsYXRlXG4gIGNvbnN0IGN0eCA9IHRhcmdldC5nZXRDb250ZXh0KCcyZCcpO1xuICBjdHguZHJhd0ltYWdlKHNvdXJjZSwgMCwgMCk7XG59O1xuXG5jb25zdCBjcmVhdGVJbWFnZU92ZXJsYXlWaWV3ID0gZnBBUEkgPT5cbiAgZnBBUEkudXRpbHMuY3JlYXRlVmlldyh7XG4gICAgbmFtZTogJ2ltYWdlLXByZXZpZXctb3ZlcmxheScsXG4gICAgdGFnOiAnY2FudmFzJyxcbiAgICBpZ25vcmVSZWN0OiB0cnVlLFxuICAgIGNyZWF0ZTogKHsgcm9vdCwgcHJvcHMgfSkgPT4ge1xuICAgICAgYXBwbHlUZW1wbGF0ZShwcm9wcy50ZW1wbGF0ZSwgcm9vdC5lbGVtZW50KTtcbiAgICB9LFxuICAgIG1peGluczoge1xuICAgICAgc3R5bGVzOiBbJ29wYWNpdHknXSxcbiAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgb3BhY2l0eTogeyB0eXBlOiAnc3ByaW5nJywgbWFzczogMjUgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbi8qKlxuICogQml0bWFwIFdvcmtlclxuICovXG5jb25zdCBCaXRtYXBXb3JrZXIgPSBmdW5jdGlvbigpIHtcbiAgLy8gcm91dGUgbWVzc2FnZXNcbiAgc2VsZi5vbm1lc3NhZ2UgPSBlID0+IHtcbiAgICB0b0JpdG1hcChlLmRhdGEubWVzc2FnZSwgcmVzcG9uc2UgPT4ge1xuICAgICAgLy8gaW1hZ2VCaXRtYXAgaXMgc2VudCBiYWNrIGFzIHRyYW5zZmVyYWJsZVxuICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IGlkOiBlLmRhdGEuaWQsIG1lc3NhZ2U6IHJlc3BvbnNlIH0sIFtyZXNwb25zZV0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIHJlc2l6ZSBpbWFnZSBkYXRhXG4gIGNvbnN0IHRvQml0bWFwID0gKG9wdGlvbnMsIGNiKSA9PiB7XG4gICAgZmV0Y2gob3B0aW9ucy5maWxlKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYmxvYigpKVxuICAgICAgLnRoZW4oYmxvYiA9PiBjcmVhdGVJbWFnZUJpdG1hcChibG9iKSlcbiAgICAgIC50aGVuKGltYWdlQml0bWFwID0+IGNiKGltYWdlQml0bWFwKSk7XG4gIH07XG59O1xuXG5jb25zdCBnZXRJbWFnZVNpemUgPSAodXJsLCBjYikgPT4ge1xuICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gaW1hZ2UubmF0dXJhbFdpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IGltYWdlLm5hdHVyYWxIZWlnaHQ7XG4gICAgaW1hZ2UgPSBudWxsO1xuICAgIGNiKHdpZHRoLCBoZWlnaHQpO1xuICB9O1xuICBpbWFnZS5zcmMgPSB1cmw7XG59O1xuXG5jb25zdCBlYXNlSW5PdXRTaW5lID0gdCA9PiAtMC41ICogKE1hdGguY29zKE1hdGguUEkgKiB0KSAtIDEpO1xuXG5jb25zdCBhZGRHcmFkaWVudFN0ZXBzID0gKFxuICBncmFkaWVudCxcbiAgY29sb3IsXG4gIGFscGhhID0gMSxcbiAgZWFzZUZuID0gZWFzZUluT3V0U2luZSxcbiAgc3RlcHMgPSAxMCxcbiAgb2Zmc2V0ID0gMFxuKSA9PiB7XG4gIGNvbnN0IHJhbmdlID0gMSAtIG9mZnNldDtcbiAgY29uc3QgcmdiID0gY29sb3Iuam9pbignLCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgY29uc3QgcCA9IGkgLyBzdGVwcztcbiAgICBjb25zdCBzdG9wID0gb2Zmc2V0ICsgcmFuZ2UgKiBwO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChzdG9wLCBgcmdiYSgke3JnYn0sICR7ZWFzZUZuKHApICogYWxwaGF9KWApO1xuICB9XG59O1xuXG5jb25zdCBkcmF3VGVtcGxhdGUgPSAoY2FudmFzLCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgYWxwaGFUYXJnZXQpID0+IHtcbiAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIGNvbnN0IGhvcml6b250YWxDZW50ZXIgPSB3aWR0aCAqIDAuNTtcblxuICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KFxuICAgIGhvcml6b250YWxDZW50ZXIsXG4gICAgaGVpZ2h0ICsgMTEwLFxuICAgIGhlaWdodCAtIDEwMCxcbiAgICBob3Jpem9udGFsQ2VudGVyLFxuICAgIGhlaWdodCArIDExMCxcbiAgICBoZWlnaHQgKyAxMDBcbiAgKTtcblxuICBhZGRHcmFkaWVudFN0ZXBzKGdyYWQsIGNvbG9yLCBhbHBoYVRhcmdldCwgdW5kZWZpbmVkLCA4LCAwLjQpO1xuXG4gIGN0eC5zYXZlKCk7XG4gIGN0eC50cmFuc2xhdGUoLXdpZHRoICogMC41LCAwKTtcbiAgY3R4LnNjYWxlKDIsIDEpO1xuICBjdHguZmlsbFN0eWxlID0gZ3JhZDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICBjdHgucmVzdG9yZSgpO1xufTtcblxuY29uc3QgaGFzTmF2aWdhdG9yID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCc7XG5cbmNvbnN0IHdpZHRoID0gNTAwO1xuY29uc3QgaGVpZ2h0ID0gMjAwO1xuXG5jb25zdCBvdmVybGF5VGVtcGxhdGVTaGFkb3cgPSBoYXNOYXZpZ2F0b3IgJiYgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5jb25zdCBvdmVybGF5VGVtcGxhdGVFcnJvciA9IGhhc05hdmlnYXRvciAmJiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNvbnN0IG92ZXJsYXlUZW1wbGF0ZVN1Y2Nlc3MgPSBoYXNOYXZpZ2F0b3IgJiYgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cbmlmIChoYXNOYXZpZ2F0b3IpIHtcbiAgZHJhd1RlbXBsYXRlKG92ZXJsYXlUZW1wbGF0ZVNoYWRvdywgd2lkdGgsIGhlaWdodCwgWzQwLCA0MCwgNDBdLCAwLjg1KTtcbiAgZHJhd1RlbXBsYXRlKG92ZXJsYXlUZW1wbGF0ZUVycm9yLCB3aWR0aCwgaGVpZ2h0LCBbMTk2LCA3OCwgNzFdLCAxKTtcbiAgZHJhd1RlbXBsYXRlKG92ZXJsYXlUZW1wbGF0ZVN1Y2Nlc3MsIHdpZHRoLCBoZWlnaHQsIFs1NCwgMTUxLCA5OV0sIDEpO1xufVxuXG5jb25zdCBjcmVhdGVJbWFnZVdyYXBwZXJWaWV3ID0gZnBBUEkgPT4ge1xuICAvLyBjcmVhdGUgb3ZlcmxheSB2aWV3XG4gIGNvbnN0IG92ZXJsYXkgPSBjcmVhdGVJbWFnZU92ZXJsYXlWaWV3KGZwQVBJKTtcblxuICAvKipcbiAgICogV3JpdGUgaGFuZGxlciBmb3Igd2hlbiBwcmV2aWV3IGNvbnRhaW5lciBoYXMgYmVlbiBjcmVhdGVkXG4gICAqL1xuICBjb25zdCBkaWRDcmVhdGVQcmV2aWV3Q29udGFpbmVyID0gKHsgcm9vdCwgcHJvcHMsIGFjdGlvbiB9KSA9PiB7XG4gICAgY29uc3QgeyB1dGlscywgdmlld3MgfSA9IGZwQVBJO1xuICAgIGNvbnN0IHsgY3JlYXRlVmlldywgY3JlYXRlV29ya2VyLCBsb2FkSW1hZ2UgfSA9IHV0aWxzO1xuICAgIGNvbnN0IHsgaWQgfSA9IHByb3BzO1xuXG4gICAgLy8gd2UgbmVlZCB0byBnZXQgdGhlIGZpbGUgZGF0YSB0byBkZXRlcm1pbmUgdGhlIGV2ZW50dWFsIGltYWdlIHNpemVcbiAgICBjb25zdCBpdGVtID0gcm9vdC5xdWVyeSgnR0VUX0lURU0nLCBpZCk7XG5cbiAgICAvLyBnZXQgdXJsIHRvIGZpbGUgKHdlJ2xsIHJldm9rZSBpdCBsYXRlciBvbiB3aGVuIGRvbmUpXG4gICAgY29uc3QgZmlsZVVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoaXRlbS5maWxlKTtcblxuICAgIC8vIGZhbGxiYWNrXG4gICAgY29uc3QgbG9hZFByZXZpZXdGYWxsYmFjayA9IChpdGVtLCB3aWR0aCwgaGVpZ2h0LCBvcmllbnRhdGlvbikgPT4ge1xuICAgICAgLy8gbGV0J3Mgc2NhbGUgdGhlIGltYWdlIGluIHRoZSBtYWluIHRocmVhZCA6KFxuICAgICAgbG9hZEltYWdlKGZpbGVVUkwpLnRoZW4ocHJldmlld0ltYWdlTG9hZGVkKTtcbiAgICB9O1xuXG4gICAgLy8gaW1hZ2UgaXMgbm93IHJlYWR5XG4gICAgY29uc3QgcHJldmlld0ltYWdlTG9hZGVkID0gZGF0YSA9PiB7XG4gICAgICAvLyB0aGUgZmlsZSB1cmwgaXMgbm8gbG9uZ2VyIG5lZWRlZFxuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChmaWxlVVJMKTtcblxuICAgICAgLy8gdGhlIHByZXZpZXcgaXMgbm93IHJlYWR5IHRvIGJlIGRyYXduXG4gICAgICByb290LmRpc3BhdGNoKCdESURfSU1BR0VfUFJFVklFV19MT0FEJywge1xuICAgICAgICBpZCxcbiAgICAgICAgZGF0YVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGRldGVybWluZSBpbWFnZSBzaXplIG9mIHRoaXMgaXRlbVxuICAgIGdldEltYWdlU2l6ZShmaWxlVVJMLCAod2lkdGgsIGhlaWdodCkgPT4ge1xuICAgICAgLy8gd2UgY2FuIG5vdyBzY2FsZSB0aGUgcGFuZWwgdG8gdGhlIGZpbmFsIHNpemVcbiAgICAgIHJvb3QuZGlzcGF0Y2goJ0RJRF9JTUFHRV9QUkVWSUVXX0NBTENVTEFURV9TSVpFJywge1xuICAgICAgICBpZCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgICAgfSk7XG5cbiAgICAgIC8vIGlmIHdlIHN1cHBvcnQgc2NhbGluZyB1c2luZyBjcmVhdGVJbWFnZUJpdG1hcCB3ZSB1c2UgYSB3b3JrZXJcbiAgICAgIGlmICgnY3JlYXRlSW1hZ2VCaXRtYXAnIGluIHdpbmRvdykge1xuICAgICAgICAvLyBsZXQncyBzY2FsZSB0aGUgaW1hZ2UgaW4gYSB3b3JrZXJcbiAgICAgICAgY29uc3Qgd29ya2VyID0gY3JlYXRlV29ya2VyKEJpdG1hcFdvcmtlcik7XG4gICAgICAgIHdvcmtlci5wb3N0KFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpbGU6IGZpbGVVUkxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGltYWdlQml0bWFwID0+IHtcbiAgICAgICAgICAgIC8vIGRlc3Ryb3kgd29ya2VyXG4gICAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XG5cbiAgICAgICAgICAgIC8vIG5vIGJpdG1hcCByZXR1cm5lZCwgbXVzdCBiZSBzb21ldGhpbmcgd3JvbmcsXG4gICAgICAgICAgICAvLyB0cnkgdGhlIG9sZHNjaG9vbCB3YXlcbiAgICAgICAgICAgIGlmICghaW1hZ2VCaXRtYXApIHtcbiAgICAgICAgICAgICAgbG9hZFByZXZpZXdGYWxsYmFjayhpdGVtKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB5YXkgd2UgZ290IG91ciBiaXRtYXAsIGxldCdzIGNvbnRpbnVlIHNob3dpbmcgdGhlIHByZXZpZXdcbiAgICAgICAgICAgIHByZXZpZXdJbWFnZUxvYWRlZChpbWFnZUJpdG1hcCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlIGZhbGxiYWNrIHByZXZpZXdcbiAgICAgICAgbG9hZFByZXZpZXdGYWxsYmFjayhpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogV3JpdGUgaGFuZGxlciBmb3Igd2hlbiB0aGUgcHJldmlldyBoYXMgYmVlbiBsb2FkZWRcbiAgICovXG4gIGNvbnN0IGRpZExvYWRQcmV2aWV3ID0gKHsgcm9vdCwgcHJvcHMgfSkgPT4ge1xuICAgIHJvb3QucmVmLm92ZXJsYXlTaGFkb3cub3BhY2l0eSA9IDE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFdyaXRlIGhhbmRsZXIgZm9yIHdoZW4gdGhlIHByZXZpZXcgaW1hZ2UgaXMgcmVhZHkgdG8gYmUgYW5pbWF0ZWRcbiAgICovXG4gIGNvbnN0IGRpZERyYXdQcmV2aWV3ID0gKHsgcm9vdCwgcHJvcHMgfSkgPT4ge1xuICAgIGNvbnN0IHsgaW1hZ2UgfSA9IHJvb3QucmVmO1xuXG4gICAgLy8gcmV2ZWFsIGltYWdlXG4gICAgaW1hZ2Uuc2NhbGVYID0gMS4wO1xuICAgIGltYWdlLnNjYWxlWSA9IDEuMDtcbiAgICBpbWFnZS5vcGFjaXR5ID0gMTtcbiAgfTtcblxuICAvKipcbiAgICogV3JpdGUgaGFuZGxlciBmb3Igd2hlbiB0aGUgcHJldmlldyBoYXMgYmVlbiBsb2FkZWRcbiAgICovXG4gIGNvbnN0IHJlc3RvcmVPdmVybGF5ID0gKHsgcm9vdCB9KSA9PiB7XG4gICAgcm9vdC5yZWYub3ZlcmxheVNoYWRvdy5vcGFjaXR5ID0gMTtcbiAgICByb290LnJlZi5vdmVybGF5RXJyb3Iub3BhY2l0eSA9IDA7XG4gICAgcm9vdC5yZWYub3ZlcmxheVN1Y2Nlc3Mub3BhY2l0eSA9IDA7XG4gIH07XG5cbiAgY29uc3QgZGlkVGhyb3dFcnJvciA9ICh7IHJvb3QgfSkgPT4ge1xuICAgIHJvb3QucmVmLm92ZXJsYXlTaGFkb3cub3BhY2l0eSA9IDAuMjU7XG4gICAgcm9vdC5yZWYub3ZlcmxheUVycm9yLm9wYWNpdHkgPSAxO1xuICB9O1xuXG4gIGNvbnN0IGRpZENvbXBsZXRlUHJvY2Vzc2luZyA9ICh7IHJvb3QgfSkgPT4ge1xuICAgIHJvb3QucmVmLm92ZXJsYXlTaGFkb3cub3BhY2l0eSA9IDAuMjU7XG4gICAgcm9vdC5yZWYub3ZlcmxheVN1Y2Nlc3Mub3BhY2l0eSA9IDE7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdCBjcmVhdGUgPSAoeyByb290LCBwcm9wcywgZGlzcGF0Y2ggfSkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlSW1hZ2VWaWV3KGZwQVBJKTtcblxuICAgIC8vIGFwcGVuZCBpbWFnZSBwcmVzZW50ZXJcbiAgICByb290LnJlZi5pbWFnZSA9IHJvb3QuYXBwZW5kQ2hpbGRWaWV3KFxuICAgICAgcm9vdC5jcmVhdGVDaGlsZFZpZXcoaW1hZ2UsIHtcbiAgICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgICBzY2FsZVg6IDEuMjUsXG4gICAgICAgIHNjYWxlWTogMS4yNSxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gaW1hZ2Ugb3ZlcmxheXNcbiAgICByb290LnJlZi5vdmVybGF5U2hhZG93ID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhvdmVybGF5LCB7XG4gICAgICAgIHRlbXBsYXRlOiBvdmVybGF5VGVtcGxhdGVTaGFkb3csXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHJvb3QucmVmLm92ZXJsYXlTdWNjZXNzID0gcm9vdC5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICByb290LmNyZWF0ZUNoaWxkVmlldyhvdmVybGF5LCB7XG4gICAgICAgIHRlbXBsYXRlOiBvdmVybGF5VGVtcGxhdGVTdWNjZXNzLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KVxuICAgICk7XG5cbiAgICByb290LnJlZi5vdmVybGF5RXJyb3IgPSByb290LmFwcGVuZENoaWxkVmlldyhcbiAgICAgIHJvb3QuY3JlYXRlQ2hpbGRWaWV3KG92ZXJsYXksIHtcbiAgICAgICAgdGVtcGxhdGU6IG92ZXJsYXlUZW1wbGF0ZUVycm9yLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIGZwQVBJLnV0aWxzLmNyZWF0ZVZpZXcoe1xuICAgIG5hbWU6ICdpbWFnZS1wcmV2aWV3LXdyYXBwZXInLFxuICAgIGNyZWF0ZSxcbiAgICB3cml0ZTogZnBBUEkudXRpbHMuY3JlYXRlUm91dGUoe1xuICAgICAgLy8gaW1hZ2UgcHJldmlldyBzdGF0ZWRcbiAgICAgIERJRF9JTUFHRV9QUkVWSUVXX0xPQUQ6IGRpZExvYWRQcmV2aWV3LFxuICAgICAgRElEX0lNQUdFX1BSRVZJRVdfRFJBVzogZGlkRHJhd1ByZXZpZXcsXG4gICAgICBESURfSU1BR0VfUFJFVklFV19DT05UQUlORVJfQ1JFQVRFOiBkaWRDcmVhdGVQcmV2aWV3Q29udGFpbmVyLFxuXG4gICAgICAvLyBmaWxlIHN0YXRlc1xuICAgICAgRElEX1RIUk9XX0lURU1fTE9BRF9FUlJPUjogZGlkVGhyb3dFcnJvcixcbiAgICAgIERJRF9USFJPV19JVEVNX1BST0NFU1NJTkdfRVJST1I6IGRpZFRocm93RXJyb3IsXG4gICAgICBESURfVEhST1dfSVRFTV9JTlZBTElEOiBkaWRUaHJvd0Vycm9yLFxuICAgICAgRElEX0NPTVBMRVRFX0lURU1fUFJPQ0VTU0lORzogZGlkQ29tcGxldGVQcm9jZXNzaW5nLFxuICAgICAgRElEX1NUQVJUX0lURU1fUFJPQ0VTU0lORzogcmVzdG9yZU92ZXJsYXksXG4gICAgICBESURfUkVWRVJUX0lURU1fUFJPQ0VTU0lORzogcmVzdG9yZU92ZXJsYXlcbiAgICB9KVxuICB9KTtcbn07XG5cbi8qKlxuICogSW1hZ2UgUHJldmlldyBQbHVnaW5cbiAqL1xudmFyIHBsdWdpbiQxID0gZnBBUEkgPT4ge1xuICBjb25zdCB7IGFkZEZpbHRlciwgdXRpbHMgfSA9IGZwQVBJO1xuICBjb25zdCB7IFR5cGUsIGNyZWF0ZVJvdXRlIH0gPSB1dGlscztcblxuICAvLyBpbWFnZVByZXZpZXdWaWV3XG4gIGNvbnN0IGltYWdlUHJldmlld1ZpZXcgPSBjcmVhdGVJbWFnZVdyYXBwZXJWaWV3KGZwQVBJKTtcblxuICAvLyBjYWxsZWQgZm9yIGVhY2ggdmlldyB0aGF0IGlzIGNyZWF0ZWQgcmlnaHQgYWZ0ZXIgdGhlICdjcmVhdGUnIG1ldGhvZFxuICBhZGRGaWx0ZXIoJ0NSRUFURV9WSUVXJywgdmlld0FQSSA9PiB7XG4gICAgLy8gZ2V0IHJlZmVyZW5jZSB0byBjcmVhdGVkIHZpZXdcbiAgICBjb25zdCB7IGlzLCB2aWV3LCBxdWVyeSB9ID0gdmlld0FQSTtcblxuICAgIC8vIG9ubHkgaG9vayB1cCB0byBpdGVtIHZpZXcgYW5kIG9ubHkgaWYgaXMgZW5hYmxlZCBmb3IgdGhpcyBjcm9wcGVyXG4gICAgaWYgKCFpcygnZmlsZScpIHx8ICFxdWVyeSgnR0VUX0FMTE9XX0lNQUdFX1BSRVZJRVcnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSB0aGUgaW1hZ2UgcHJldmlldyBwbHVnaW4sIGJ1dCBvbmx5IGRvIHNvIGlmIHRoZSBpdGVtIGlzIGFuIGltYWdlXG4gICAgY29uc3QgZGlkTG9hZEl0ZW0gPSAoeyByb290LCBwcm9wcywgYWN0aW9ucyB9KSA9PiB7XG4gICAgICBjb25zdCB7IGlkIH0gPSBwcm9wcztcbiAgICAgIGNvbnN0IGl0ZW0gPSBxdWVyeSgnR0VUX0lURU0nLCBpZCk7XG5cbiAgICAgIC8vIGl0ZW0gY291bGQgdGhlb3JldGljYWxseSBoYXZlIGJlZW4gcmVtb3ZlZCBpbiB0aGUgbWVhbiB0aW1lXG4gICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBnZXQgdGhlIGZpbGUgb2JqZWN0XG4gICAgICBjb25zdCBmaWxlID0gaXRlbS5maWxlO1xuXG4gICAgICAvLyBleGl0IGlmIHRoaXMgaXMgbm90IGFuIGltYWdlXG4gICAgICBpZiAoIWlzUHJldmlld2FibGVJbWFnZShmaWxlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGV4aXQgaWYgaW1hZ2Ugc2l6ZSBpcyB0b28gaGlnaCBhbmQgbm8gY3JlYXRlSW1hZ2VCaXRtYXAgc3VwcG9ydFxuICAgICAgLy8gdGhpcyB3b3VsZCBzaW1wbHkgYnJpbmcgdGhlIGJyb3dzZXIgdG8gaXRzIGtuZWVzIGFuZCB0aGF0IGlzIG5vdCB3aGF0IHdlIHdhbnRcbiAgICAgIGNvbnN0IHN1cHBvcnRzQ3JlYXRlSW1hZ2VCaXRtYXAgPSAnY3JlYXRlSW1hZ2VCaXRtYXAnIGluICh3aW5kb3cgfHwge30pO1xuICAgICAgY29uc3QgbWF4UHJldmlld0ZpbGVTaXplID0gcXVlcnkoJ0dFVF9JTUFHRV9QUkVWSUVXX01BWF9GSUxFX1NJWkUnKTtcbiAgICAgIGlmIChcbiAgICAgICAgIXN1cHBvcnRzQ3JlYXRlSW1hZ2VCaXRtYXAgJiZcbiAgICAgICAgbWF4UHJldmlld0ZpbGVTaXplICYmXG4gICAgICAgIGZpbGUuc2l6ZSA+IG1heFByZXZpZXdGaWxlU2l6ZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IHByZXZpZXcgdmlld1xuICAgICAgcm9vdC5yZWYuaW1hZ2VQcmV2aWV3ID0gdmlldy5hcHBlbmRDaGlsZFZpZXcoXG4gICAgICAgIHZpZXcuY3JlYXRlQ2hpbGRWaWV3KGltYWdlUHJldmlld1ZpZXcsIHsgaWQgfSlcbiAgICAgICk7XG5cbiAgICAgIC8vIG5vdyByZWFkeVxuICAgICAgcm9vdC5kaXNwYXRjaCgnRElEX0lNQUdFX1BSRVZJRVdfQ09OVEFJTkVSX0NSRUFURScsIHsgaWQgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRpZENhbGN1bGF0ZVByZXZpZXdTaXplID0gKHsgcm9vdCwgcHJvcHMsIGFjdGlvbiB9KSA9PiB7XG4gICAgICAvLyBnZXQgaXRlbVxuICAgICAgY29uc3QgaXRlbSA9IHJvb3QucXVlcnkoJ0dFVF9JVEVNJywgeyBpZDogcHJvcHMuaWQgfSk7XG5cbiAgICAgIC8vIG9yaWVudGF0aW9uIGluZm9cbiAgICAgIGNvbnN0IGV4aWYgPSBpdGVtLmdldE1ldGFkYXRhKCdleGlmJykgfHwge307XG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IGV4aWYub3JpZW50YXRpb24gfHwgLTE7XG5cbiAgICAgIC8vIGdldCB3aWR0aCBhbmQgaGVpZ2h0IGZyb20gYWN0aW9uLCBhbmQgc3dhcCBvZiBvcmllbnRhdGlvbiBpcyBpbmNvcnJlY3RcbiAgICAgIGxldCB7IHdpZHRoLCBoZWlnaHQgfSA9IGFjdGlvbjtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA+PSA1ICYmIG9yaWVudGF0aW9uIDw9IDgpIHtcbiAgICAgICAgW3dpZHRoLCBoZWlnaHRdID0gW2hlaWdodCwgd2lkdGhdO1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSBuZWVkIHRoZSBpdGVtIHRvIGdldCB0byB0aGUgY3JvcCBzaXplXG4gICAgICBjb25zdCBjcm9wID0gaXRlbS5nZXRNZXRhZGF0YSgnY3JvcCcpIHx8IHtcbiAgICAgICAgcmVjdDoge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICBoZWlnaHQ6IDFcbiAgICAgICAgfSxcbiAgICAgICAgYXNwZWN0UmF0aW86IGhlaWdodCAvIHdpZHRoXG4gICAgICB9O1xuXG4gICAgICAvLyBnZXQgaGVpZ2h0IG1pbiBhbmQgbWF4XG4gICAgICBjb25zdCBmaXhlZFByZXZpZXdIZWlnaHQgPSByb290LnF1ZXJ5KCdHRVRfSU1BR0VfUFJFVklFV19IRUlHSFQnKTtcbiAgICAgIGNvbnN0IG1pblByZXZpZXdIZWlnaHQgPSByb290LnF1ZXJ5KCdHRVRfSU1BR0VfUFJFVklFV19NSU5fSEVJR0hUJyk7XG4gICAgICBjb25zdCBtYXhQcmV2aWV3SGVpZ2h0ID0gcm9vdC5xdWVyeSgnR0VUX0lNQUdFX1BSRVZJRVdfTUFYX0hFSUdIVCcpO1xuXG4gICAgICAvLyBjb25zdCBjcm9wIHdpZHRoXG4gICAgICBoZWlnaHQgPVxuICAgICAgICBmaXhlZFByZXZpZXdIZWlnaHQgIT09IG51bGxcbiAgICAgICAgICA/IGZpeGVkUHJldmlld0hlaWdodFxuICAgICAgICAgIDogTWF0aC5tYXgobWluUHJldmlld0hlaWdodCwgTWF0aC5taW4oaGVpZ2h0LCBtYXhQcmV2aWV3SGVpZ2h0KSk7XG5cbiAgICAgIHdpZHRoID0gaGVpZ2h0IC8gY3JvcC5hc3BlY3RSYXRpbztcbiAgICAgIGlmICh3aWR0aCA+IHJvb3QucmVjdC5lbGVtZW50LndpZHRoKSB7XG4gICAgICAgIHdpZHRoID0gcm9vdC5yZWN0LmVsZW1lbnQud2lkdGg7XG4gICAgICAgIGhlaWdodCA9IHdpZHRoICogY3JvcC5hc3BlY3RSYXRpbztcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IGhlaWdodFxuICAgICAgcm9vdC5yZWYuaW1hZ2VQcmV2aWV3LmVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGBoZWlnaHQ6JHtNYXRoLnJvdW5kKFxuICAgICAgICBoZWlnaHRcbiAgICAgICl9cHhgO1xuICAgIH07XG5cbiAgICAvLyBzdGFydCB3cml0aW5nXG4gICAgdmlldy5yZWdpc3RlcldyaXRlcihcbiAgICAgIGNyZWF0ZVJvdXRlKHtcbiAgICAgICAgRElEX0xPQURfSVRFTTogZGlkTG9hZEl0ZW0sXG4gICAgICAgIERJRF9JTUFHRV9QUkVWSUVXX0NBTENVTEFURV9TSVpFOiBkaWRDYWxjdWxhdGVQcmV2aWV3U2l6ZVxuICAgICAgfSlcbiAgICApO1xuICB9KTtcblxuICAvLyBleHBvc2UgcGx1Z2luXG4gIHJldHVybiB7XG4gICAgb3B0aW9uczoge1xuICAgICAgLy8gRW5hYmxlIG9yIGRpc2FibGUgaW1hZ2UgcHJldmlld1xuICAgICAgYWxsb3dJbWFnZVByZXZpZXc6IFt0cnVlLCBUeXBlLkJPT0xFQU5dLFxuXG4gICAgICAvLyBGaXhlZCBwcmV2aWV3IGhlaWdodFxuICAgICAgaW1hZ2VQcmV2aWV3SGVpZ2h0OiBbbnVsbCwgVHlwZS5JTlRdLFxuXG4gICAgICAvLyBNaW4gaW1hZ2UgaGVpZ2h0XG4gICAgICBpbWFnZVByZXZpZXdNaW5IZWlnaHQ6IFs0NCwgVHlwZS5JTlRdLFxuXG4gICAgICAvLyBNYXggaW1hZ2UgaGVpZ2h0XG4gICAgICBpbWFnZVByZXZpZXdNYXhIZWlnaHQ6IFsyNTYsIFR5cGUuSU5UXSxcblxuICAgICAgLy8gTWF4IHNpemUgb2YgcHJldmlldyBmaWxlIGZvciB3aGVuIGNyZWF0ZUltYWdlQml0bWFwIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgIGltYWdlUHJldmlld01heEZpbGVTaXplOiBbbnVsbCwgVHlwZS5JTlRdXG4gICAgfVxuICB9O1xufTtcblxuaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50KSB7XG4gIC8vIHBsdWdpbiBoYXMgbG9hZGVkXG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgbmV3IEN1c3RvbUV2ZW50KCdGaWxlUG9uZDpwbHVnaW5sb2FkZWQnLCB7IGRldGFpbDogcGx1Z2luJDEgfSlcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luJDE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3LmVzbS5qc1xuLy8gbW9kdWxlIGlkID0gMjEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBvbmQubWluLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBvbmQubWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpbGVwb25kLm1pbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZpbGVwb25kL2Rpc3QvZmlsZXBvbmQubWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMjE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAqIEZpbGVQb25kIDEuNC4wXFxuICogTGljZW5zZWQgdW5kZXIgTUlULCBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxcbiAqIFBsZWFzZSB2aXNpdCBodHRwczovL3BxaW5hLm5sL2ZpbGVwb25kIGZvciBkZXRhaWxzLlxcbiAqL1xcbi5maWxlcG9uZC0tYXNzaXN0YW50e3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OmhpZGRlbjtoZWlnaHQ6MXB4O3dpZHRoOjFweDtwYWRkaW5nOjA7Ym9yZGVyOjA7Y2xpcDpyZWN0KDFweCwxcHgsMXB4LDFweCk7LXdlYmtpdC1jbGlwLXBhdGg6aW5zZXQoNTAlKTtjbGlwLXBhdGg6aW5zZXQoNTAlKTt3aGl0ZS1zcGFjZTpub3dyYXB9LmZpbGVwb25kLS1icm93c2Vye3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbjowO3BhZGRpbmc6MDtsZWZ0OjFlbTt0b3A6MS43NWVtO3dpZHRoOmNhbGMoMTAwJSAtIDJlbSk7b3BhY2l0eTowO2ZvbnQtc2l6ZTowfS5maWxlcG9uZC0tZHJpcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtvdmVyZmxvdzpoaWRkZW47b3BhY2l0eTouMTtwb2ludGVyLWV2ZW50czpub25lO2JvcmRlci1yYWRpdXM6LjVlbTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjAxKX0uZmlsZXBvbmQtLWRyaXAtYmxvYnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7bGVmdDowO3dpZHRoOjhlbTtoZWlnaHQ6OGVtO21hcmdpbi1sZWZ0Oi00ZW07bWFyZ2luLXRvcDotNGVtO2JhY2tncm91bmQ6IzI5MjYyNTtib3JkZXItcmFkaXVzOjUwJX0uZmlsZXBvbmQtLWRyaXAtYmxvYiwuZmlsZXBvbmQtLWRyb3AtbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHl9LmZpbGVwb25kLS1kcm9wLWxhYmVse2xlZnQ6MWVtO3JpZ2h0OjFlbTttYXJnaW46MCAwIDFlbTtjb2xvcjojNGY0ZjRmfS5maWxlcG9uZC0tZHJvcC1sYWJlbCBsYWJlbHtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MWVtIDA7bWFyZ2luOjA7Y3Vyc29yOmRlZmF1bHQ7Zm9udC1zaXplOi44NzVlbTtmb250LXdlaWdodDo0MDA7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MS41fS5maWxlcG9uZC0tbGFiZWwtYWN0aW9ue3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDppbms7dGV4dC1kZWNvcmF0aW9uLXNraXA6aW5rOy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiNhN2E0YTQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiNhN2E0YTQ7Y3Vyc29yOnBvaW50ZXJ9LmZpbGVwb25kLS1maWxlLWFjdGlvbi1idXR0b257Zm9udC1zaXplOjFlbTt3aWR0aDoxLjYyNWVtO2hlaWdodDoxLjYyNWVtO2N1cnNvcjphdXRvO2ZvbnQtZmFtaWx5OmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdDttYXJnaW46MDtwYWRkaW5nOjA7Ym9yZGVyOm5vbmU7Y29sb3I6I2ZmZjtvdXRsaW5lOm5vbmU7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC41KTtiYWNrZ3JvdW5kLWltYWdlOm5vbmU7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHk7Ym94LXNoYWRvdzowIDAgMCAwIGhzbGEoMCwwJSwxMDAlLDApO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuMjVzIGVhc2UtaW59LmZpbGVwb25kLS1maWxlLWFjdGlvbi1idXR0b24gc3Zne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmZpbGVwb25kLS1maWxlLWFjdGlvbi1idXR0b246Zm9jdXMsLmZpbGVwb25kLS1maWxlLWFjdGlvbi1idXR0b246aG92ZXJ7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDEwMCUsLjkpfS5maWxlcG9uZC0tZmlsZS1pbmZve3Bvc2l0aW9uOnN0YXRpYztkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0Oy1tcy1mbGV4OjE7ZmxleDoxO21hcmdpbjowIC41ZW0gMCAwO21pbi13aWR0aDowO3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5O3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5maWxlcG9uZC0tZmlsZS1pbmZvICp7bWFyZ2luOjB9LmZpbGVwb25kLS1maWxlLWluZm8gLmZpbGVwb25kLS1maWxlLWluZm8tbWFpbntmb250LXNpemU6Ljc1ZW07bGluZS1oZWlnaHQ6MS4yO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3c6aGlkZGVuO3doaXRlLXNwYWNlOm5vd3JhcDt3aWR0aDoxMDAlfS5maWxlcG9uZC0tZmlsZS1pbmZvIC5maWxlcG9uZC0tZmlsZS1pbmZvLXN1Yntmb250LXNpemU6LjYyNWVtO29wYWNpdHk6LjU7dHJhbnNpdGlvbjpvcGFjaXR5IC4yNXMgZWFzZS1pbi1vdXR9LmZpbGVwb25kLS1maWxlLWluZm8gLmZpbGVwb25kLS1maWxlLWluZm8tc3ViOmVtcHR5e2Rpc3BsYXk6bm9uZX0uZmlsZXBvbmQtLWZpbGUtc3RhdHVze3Bvc2l0aW9uOnN0YXRpYztkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1hbGlnbjplbmQ7YWxpZ24taXRlbXM6ZmxleC1lbmQ7LW1zLWZsZXgtcG9zaXRpdmU6MDtmbGV4LWdyb3c6MDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7bWFyZ2luOjA7bWluLXdpZHRoOjIuMjVlbTt0ZXh0LWFsaWduOnJpZ2h0O3dpbGwtY2hhbmdlOnRyYW5zZm9ybSxvcGFjaXR5O3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5maWxlcG9uZC0tZmlsZS1zdGF0dXMgKnttYXJnaW46MDt3aGl0ZS1zcGFjZTpub3dyYXB9LmZpbGVwb25kLS1maWxlLXN0YXR1cyAuZmlsZXBvbmQtLWZpbGUtc3RhdHVzLW1haW57Zm9udC1zaXplOi43NWVtO2xpbmUtaGVpZ2h0OjEuMn0uZmlsZXBvbmQtLWZpbGUtc3RhdHVzIC5maWxlcG9uZC0tZmlsZS1zdGF0dXMtc3Vie2ZvbnQtc2l6ZTouNjI1ZW07b3BhY2l0eTouNTt0cmFuc2l0aW9uOm9wYWNpdHkgLjI1cyBlYXNlLWluLW91dH0uZmlsZXBvbmQtLWZpbGUtd3JhcHBlcntib3JkZXI6bm9uZTttYXJnaW46MDtwYWRkaW5nOjA7bWluLXdpZHRoOjA7aGVpZ2h0OjEwMCV9LmZpbGVwb25kLS1maWxlLXdyYXBwZXI+bGVnZW5ke3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OmhpZGRlbjtoZWlnaHQ6MXB4O3dpZHRoOjFweDtwYWRkaW5nOjA7Ym9yZGVyOjA7Y2xpcDpyZWN0KDFweCwxcHgsMXB4LDFweCk7LXdlYmtpdC1jbGlwLXBhdGg6aW5zZXQoNTAlKTtjbGlwLXBhdGg6aW5zZXQoNTAlKTt3aGl0ZS1zcGFjZTpub3dyYXB9LmZpbGVwb25kLS1maWxle3Bvc2l0aW9uOnN0YXRpYztkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtoZWlnaHQ6MTAwJTstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3BhZGRpbmc6LjU2MjVlbTtjb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6LjVlbX0uZmlsZXBvbmQtLWZpbGUgLmZpbGVwb25kLS1maWxlLXN0YXR1c3ttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDoyLjI1ZW19LmZpbGVwb25kLS1maWxlIC5maWxlcG9uZC0tcHJvY2Vzc2luZy1jb21wbGV0ZS1pbmRpY2F0b3J7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoyfS5maWxlcG9uZC0tZmlsZSAuZmlsZXBvbmQtLWZpbGUtYWN0aW9uLWJ1dHRvbiwuZmlsZXBvbmQtLWZpbGUgLmZpbGVwb25kLS1wcm9jZXNzaW5nLWNvbXBsZXRlLWluZGljYXRvcntwb3NpdGlvbjphYnNvbHV0ZX0uZmlsZXBvbmQtLWZpbGUgLmZpbGVwb25kLS1wcm9ncmVzcy1pbmRpY2F0b3J7cG9zaXRpb246YWJzb2x1dGU7dG9wOi43NWVtO3JpZ2h0Oi43NWVtfS5maWxlcG9uZC0tZmlsZSAuZmlsZXBvbmQtLWFjdGlvbi1yZW1vdmUtaXRlbXtsZWZ0Oi41NjI1ZW19LmZpbGVwb25kLS1maWxlIC5maWxlcG9uZC0tZmlsZS1hY3Rpb24tYnV0dG9uOm5vdCguZmlsZXBvbmQtLWFjdGlvbi1yZW1vdmUtaXRlbSksLmZpbGVwb25kLS1maWxlIC5maWxlcG9uZC0tcHJvY2Vzc2luZy1jb21wbGV0ZS1pbmRpY2F0b3J7cmlnaHQ6LjU2MjVlbX1bZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlKj1lcnJvcl0gLmZpbGVwb25kLS1maWxlLWluZm8sW2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZSo9aW52YWxpZF0gLmZpbGVwb25kLS1maWxlLWluZm8sW2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZT1jYW5jZWxsZWRdIC5maWxlcG9uZC0tZmlsZS1pbmZve21hcmdpbi1yaWdodDoyLjI1ZW19W2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZT1wcm9jZXNzaW5nLWNvbXBsZXRlXSAuZmlsZXBvbmQtLWFjdGlvbi1yZXZlcnQtaXRlbS1wcm9jZXNzaW5nIHN2Z3std2Via2l0LWFuaW1hdGlvbjpmYWxsIC41cyAuMTI1cyBsaW5lYXIgYm90aDthbmltYXRpb246ZmFsbCAuNXMgLjEyNXMgbGluZWFyIGJvdGh9W2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZT1wcm9jZXNzaW5nLWNvbXBsZXRlXSAuZmlsZXBvbmQtLWZpbGUtaW5mby1zdWIsW2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZT1wcm9jZXNzaW5nLWNvbXBsZXRlXSAuZmlsZXBvbmQtLWZpbGUtc3RhdHVzLXN1YntvcGFjaXR5OjB9W2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZT1wcm9jZXNzaW5nLWNvbXBsZXRlXSAuZmlsZXBvbmQtLWFjdGlvbi1yZXZlcnQtaXRlbS1wcm9jZXNzaW5nfi5maWxlcG9uZC0tZmlsZS1pbmZvIC5maWxlcG9uZC0tZmlsZS1pbmZvLXN1YixbZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlPXByb2Nlc3NpbmctY29tcGxldGVdIC5maWxlcG9uZC0tYWN0aW9uLXJldmVydC1pdGVtLXByb2Nlc3Npbmd+LmZpbGVwb25kLS1maWxlLXN0YXR1cyAuZmlsZXBvbmQtLWZpbGUtc3RhdHVzLXN1YntvcGFjaXR5Oi41fVtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGUqPWVycm9yXSAuZmlsZXBvbmQtLWZpbGUtd3JhcHBlcixbZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlKj1lcnJvcl0gLmZpbGVwb25kLS1wYW5lbCxbZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlKj1pbnZhbGlkXSAuZmlsZXBvbmQtLWZpbGUtd3JhcHBlcixbZGF0YS1maWxlcG9uZC1pdGVtLXN0YXRlKj1pbnZhbGlkXSAuZmlsZXBvbmQtLXBhbmVsey13ZWJraXQtYW5pbWF0aW9uOnNoYWtlIC42NXMgbGluZWFyIGJvdGg7YW5pbWF0aW9uOnNoYWtlIC42NXMgbGluZWFyIGJvdGh9W2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZSo9YnVzeV0gLmZpbGVwb25kLS1wcm9ncmVzcy1pbmRpY2F0b3Igc3Zney13ZWJraXQtYW5pbWF0aW9uOnNwaW4gMXMgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpzcGluIDFzIGxpbmVhciBpbmZpbml0ZX1ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1Aa2V5ZnJhbWVzIHNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19QC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlezEwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtLjA2MjVlbSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLS4wNjI1ZW0pfTIwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCguMTI1ZW0pO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC4xMjVlbSl9MzAlLDUwJSw3MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtLjI1ZW0pO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0uMjVlbSl9NDAlLDYwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC4yNWVtKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCguMjVlbSl9fUBrZXlmcmFtZXMgc2hha2V7MTAlLDkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0uMDYyNWVtKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtLjA2MjVlbSl9MjAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC4xMjVlbSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLjEyNWVtKX0zMCUsNTAlLDcwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0uMjVlbSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLS4yNWVtKX00MCUsNjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLjI1ZW0pO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC4yNWVtKX19QC13ZWJraXQta2V5ZnJhbWVzIGZhbGx7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0fTcwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xKTt0cmFuc2Zvcm06c2NhbGUoMS4xKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dH10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9fUBrZXlmcmFtZXMgZmFsbHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9NzAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjEpO3RyYW5zZm9ybTpzY2FsZSgxLjEpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH19LmZpbGVwb25kLS1ob3BwZXJbZGF0YS1ob3BwZXItc3RhdGU9ZHJhZy1vdmVyXT4qe3BvaW50ZXItZXZlbnRzOm5vbmV9LmZpbGVwb25kLS1wcm9ncmVzcy1pbmRpY2F0b3J7ei1pbmRleDoxMDN9LmZpbGVwb25kLS1maWxlLWFjdGlvbi1idXR0b257ei1pbmRleDoxMDJ9LmZpbGVwb25kLS1maWxlLXN0YXR1c3t6LWluZGV4OjEwMX0uZmlsZXBvbmQtLWZpbGUtaW5mb3t6LWluZGV4OjEwMH0uZmlsZXBvbmQtLWl0ZW17cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7cGFkZGluZzowO21hcmdpbjowIDAgLjVlbTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm0sb3BhY2l0eX0uZmlsZXBvbmQtLWl0ZW0+LmZpbGVwb25kLS1wYW5lbHt6LWluZGV4OjF9LmZpbGVwb25kLS1pdGVtPi5maWxlcG9uZC0tcGFuZWwgLmZpbGVwb25kLS1wYW5lbC1ib3R0b217Ym94LXNoYWRvdzowIC4wNjI1ZW0gLjEyNWVtIC0uMDYyNWVtIHJnYmEoMCwwLDAsLjI1KX0uZmlsZXBvbmQtLWl0ZW0+LmZpbGVwb25kLS1maWxlLXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyfS5maWxlcG9uZC0taXRlbS1wYW5lbHtiYWNrZ3JvdW5kLWNvbG9yOiM2NDYwNWV9W2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZT1wcm9jZXNzaW5nLWNvbXBsZXRlXSAuZmlsZXBvbmQtLWl0ZW0tcGFuZWx7YmFja2dyb3VuZC1jb2xvcjojMzY5NzYzfVtkYXRhLWZpbGVwb25kLWl0ZW0tc3RhdGUqPWVycm9yXSAuZmlsZXBvbmQtLWl0ZW0tcGFuZWwsW2RhdGEtZmlsZXBvbmQtaXRlbS1zdGF0ZSo9aW52YWxpZF0gLmZpbGVwb25kLS1pdGVtLXBhbmVse2JhY2tncm91bmQtY29sb3I6I2M0NGU0N30uZmlsZXBvbmQtLWl0ZW0tcGFuZWx7Ym9yZGVyLXJhZGl1czouNWVtO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMjVzfS5maWxlcG9uZC0tbGlzdC1zY3JvbGxlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDttYXJnaW46MDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LmZpbGVwb25kLS1saXN0LXNjcm9sbGVyW2RhdGEtc3RhdGU9b3ZlcmZsb3dde292ZXJmbG93LXk6c2Nyb2xsO292ZXJmbG93LXg6dmlzaWJsZTstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH0uZmlsZXBvbmQtLWxpc3Qtc2Nyb2xsZXJbZGF0YS1zdGF0ZT1vdmVyZmxvd10gLmZpbGVwb25kLS1saXN0e2JvdHRvbTowO3JpZ2h0OjB9LmZpbGVwb25kLS1saXN0LXNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhcntiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fS5maWxlcG9uZC0tbGlzdC1zY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWx7d2lkdGg6MWVtfS5maWxlcG9uZC0tbGlzdC1zY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbHtoZWlnaHQ6MH0uZmlsZXBvbmQtLWxpc3Qtc2Nyb2xsZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMyk7Ym9yZGVyLXJhZGl1czo5OTk5OXB4O2JvcmRlcjouMzEyNWVtIHNvbGlkIHRyYW5zcGFyZW50O2JhY2tncm91bmQtY2xpcDpjb250ZW50LWJveH0uZmlsZXBvbmQtLWxpc3R7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDoxZW07cmlnaHQ6MWVtO21hcmdpbjowO3BhZGRpbmc6MDtsaXN0LXN0eWxlLXR5cGU6bm9uZTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LmZpbGVwb25kLS1wYW5lbC1yb290e2JvcmRlci1yYWRpdXM6LjVlbTtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYwZWZ9LmZpbGVwb25kLS1wYW5lbHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7cmlnaHQ6MDttYXJnaW46MDtoZWlnaHQ6YXV0byFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZX0uZmlsZXBvbmQtLXBhbmVsW2RhdGEtc2NhbGFibGU9dHJ1ZV17LXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O2JvcmRlcjpub25lIWltcG9ydGFudH0uZmlsZXBvbmQtLXBhbmVsW2RhdGEtc2NhbGFibGU9ZmFsc2Vde2JvdHRvbTowfS5maWxlcG9uZC0tcGFuZWxbZGF0YS1zY2FsYWJsZT1mYWxzZV0+ZGl2e2Rpc3BsYXk6bm9uZX0uZmlsZXBvbmQtLXBhbmVsLWJvdHRvbSwuZmlsZXBvbmQtLXBhbmVsLWNlbnRlciwuZmlsZXBvbmQtLXBhbmVsLXRvcHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7cmlnaHQ6MDttYXJnaW46MDtwYWRkaW5nOjB9LmZpbGVwb25kLS1wYW5lbC1ib3R0b20sLmZpbGVwb25kLS1wYW5lbC10b3B7aGVpZ2h0Oi41ZW19LmZpbGVwb25kLS1wYW5lbC10b3B7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowIWltcG9ydGFudDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowIWltcG9ydGFudDtib3JkZXItYm90dG9tOm5vbmUhaW1wb3J0YW50fS5maWxlcG9uZC0tcGFuZWwtdG9wOmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjJweDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206LTFweDtiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXR9LmZpbGVwb25kLS1wYW5lbC1ib3R0b20sLmZpbGVwb25kLS1wYW5lbC1jZW50ZXJ7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwuNWVtLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC41ZW0sMCl9LmZpbGVwb25kLS1wYW5lbC1ib3R0b217Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowIWltcG9ydGFudDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowIWltcG9ydGFudDtib3JkZXItdG9wOm5vbmUhaW1wb3J0YW50fS5maWxlcG9uZC0tcGFuZWwtYm90dG9tOmJlZm9yZXtjb250ZW50OlxcXCJcXFwiO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoycHg7bGVmdDowO3JpZ2h0OjA7dG9wOi0xcHg7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0fS5maWxlcG9uZC0tcGFuZWwtY2VudGVye2hlaWdodDoxMDBweCFpbXBvcnRhbnQ7Ym9yZGVyLXRvcDpub25lIWltcG9ydGFudDtib3JkZXItYm90dG9tOm5vbmUhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MCFpbXBvcnRhbnR9LmZpbGVwb25kLS1wYW5lbC1jZW50ZXI6bm90KFtzdHlsZV0pe3Zpc2liaWxpdHk6aGlkZGVufS5maWxlcG9uZC0tcHJvZ3Jlc3MtaW5kaWNhdG9ye3Bvc2l0aW9uOnN0YXRpYzt3aWR0aDoxLjI1ZW07aGVpZ2h0OjEuMjVlbTtjb2xvcjojZmZmO21hcmdpbjowO3BvaW50ZXItZXZlbnRzOm5vbmU7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHl9LmZpbGVwb25kLS1wcm9ncmVzcy1pbmRpY2F0b3Igc3Zne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmZpbGVwb25kLS1wcm9ncmVzcy1pbmRpY2F0b3IgcGF0aHtmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcn0uZmlsZXBvbmQtLWxpc3Qtc2Nyb2xsZXJ7ei1pbmRleDo2fS5maWxlcG9uZC0tZHJvcC1sYWJlbHt6LWluZGV4OjV9LmZpbGVwb25kLS1kcmlwe3otaW5kZXg6M30uZmlsZXBvbmQtLXJvb3Q+LmZpbGVwb25kLS1wYW5lbHt6LWluZGV4OjJ9LmZpbGVwb25kLS1icm93c2Vye3otaW5kZXg6MX0uZmlsZXBvbmQtLXJvb3R7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi1ib3R0b206MWVtO3BhZGRpbmctdG9wOjFlbTtmb250LXNpemU6MXJlbTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6LWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtd2VpZ2h0OjQ1MDt0ZXh0LWFsaWduOmxlZnQ7dGV4dC1yZW5kZXJpbmc6b3B0aW1pemVMZWdpYmlsaXR5O2RpcmVjdGlvbjpsdHI7Y29udGFpbjpsYXlvdXQgc3R5bGUgc2l6ZX0uZmlsZXBvbmQtLXJvb3QgKntmb250LXNpemU6aW5oZXJpdDtib3gtc2l6aW5nOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdH1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2ZpbGVwb25kL2Rpc3QvZmlsZXBvbmQubWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMjE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcubWluLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcubWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3Lm1pbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3L2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcubWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMjE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAqIEZpbGVQb25kUGx1Z2luSW1hZ2VQcmV2aWV3IDEuMC45XFxuICogTGljZW5zZWQgdW5kZXIgTUlULCBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxcbiAqIFBsZWFzZSB2aXNpdCBodHRwczovL3BxaW5hLm5sL2ZpbGVwb25kIGZvciBkZXRhaWxzLlxcbiAqL1xcbi5maWxlcG9uZC0taW1hZ2UtcHJldmlldy13cmFwcGVye3otaW5kZXg6Mn0uZmlsZXBvbmQtLWltYWdlLXByZXZpZXctb3ZlcmxheXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6NXJlbTttYXgtaGVpZ2h0OjdyZW07bWFyZ2luOjA7b3BhY2l0eTowO3otaW5kZXg6MTttaXgtYmxlbmQtbW9kZTptdWx0aXBseTtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uZmlsZXBvbmQtLWltYWdlLXByZXZpZXctb3ZlcmxheTpudGgtb2YtdHlwZSgyKSwuZmlsZXBvbmQtLWltYWdlLXByZXZpZXctb3ZlcmxheTpudGgtb2YtdHlwZSgzKXttaXgtYmxlbmQtbW9kZTpub3JtYWx9QHN1cHBvcnRzICgtd2Via2l0LW1hcnF1ZWUtcmVwZXRpdGlvbjppbmZpbml0ZSkgYW5kIChvYmplY3QtZml0OmZpbGwpey5maWxlcG9uZC0taW1hZ2UtcHJldmlldy1vdmVybGF5e21peC1ibGVuZC1tb2RlOm5vcm1hbH19LmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3LXdyYXBwZXJ7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7cmlnaHQ6MDttYXJnaW46MDtib3JkZXItcmFkaXVzOi40NWVtO292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjAxKX0uZmlsZXBvbmQtLWltYWdlLXByZXZpZXd7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6YXV0bztwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjtiYWNrZ3JvdW5kOiMyMjI7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHl9LmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3IGRpdntwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47bWFyZ2luOjAgYXV0b30uZmlsZXBvbmQtLWltYWdlLXByZXZpZXcgY2FudmFze3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3Lm1pbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJkZXBhcnRtZW50c1wiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI1MDBweFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVsZXRlV2luZG93LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGVsZXRlV2luZG93ID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkZWxldGVXaW5kb3dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJhdHRlbnRpb25cIikpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWZsZXhcIiwgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kZWxldGVNc2cpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5kZWxldGVEZW5pZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWRlbGV0ZURlbmllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJpbmZvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlQ29uZmlybSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJva1wiKSkpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiZXJyb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVDYW5jZWwoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiY2FuY2VsXCIpKSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kZXBhcnRtZW50Q3JlYXRlLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGVwYXJ0bWVudENyZWF0ZSA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVwYXJ0bWVudENyZWF0ZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLQndC+0LLQvtC1INC/0L7QtNGA0LDQt9C00LXQu9C10L3QuNC1XCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRlcGFydG1lbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlcGFydG1lbnROYW1lID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVwYXJ0bWVudE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJpbmZvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkQ29uZmlybSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJva1wiKSkpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwiZXJyb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hZGRDYW5jZWwoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiY2FuY2VsXCIpKSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZGF0YS10YWJsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgXCJpdGVtLWtleVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgXCJuby1yZXN1bHRzLXRleHRcIjogX3ZtLiR0KFwibm9fbWF0Y2hfZm91bmRcIiksXG4gICAgICAgICAgICAgICAgXCJyb3dzLXBlci1wYWdlLXRleHRcIjogX3ZtLiR0KFwic3RyaW5nc1wiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaXRlbXNcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5pZCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWVkaXQtZGlhbG9nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm4tdmFsdWVcIjogcHJvcHMuaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF6eTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnJldHVyblZhbHVlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KHByb3BzLml0ZW0sIFwidGl0bGVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpbmdsZS1saW5lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdEl0ZW0ocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcHMuaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChwcm9wcy5pdGVtLCBcInRpdGxlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvcHMuaXRlbS50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZ2V0UG9zaXRpb25zKHByb3BzLml0ZW0uaWQpLmxlbmd0aCkpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFByb3A6IHByb3BzLml0ZW0udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldEVtcGxveWVlcyhwcm9wcy5pdGVtLmlkKS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJteC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRJdGVtKHByb3BzLml0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwidGVhbFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlZGl0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXgtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVJdGVtKHByb3BzLml0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwicGlua1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJkZWxldGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgIHsgc2xvdDogXCJuby1kYXRhXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IHRydWUsIGNvbG9yOiBcInJlZFwiLCBpY29uOiBcIndhcm5pbmdcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAg0J3QtdGCINC00LDQvdC90YvRhSA6KFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImFjdGl2YXRvclwiLCBjb2xvcjogXCJwcmltYXJ5XCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uZGVwYXJ0bWVudENyZWF0ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi0JTQvtCx0LDQstC40YLRjCDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtVwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtc25hY2tiYXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBfdm0uc25hY2tiYXJUaW1lb3V0LFxuICAgICAgICAgICAgICAgIHRvcDogXCJcIixcbiAgICAgICAgICAgICAgICBcIm11bHRpLWxpbmVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmZvXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNuYWNrYmFyU2hvdyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc25hY2tiYXJTaG93ID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNuYWNrYmFyU2hvd1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChcImRlbGV0ZV9kb25lXCIpKSArIFwiXFxuICAgICAgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicGlua1wiIH0sXG4gICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNuYWNrYmFyU2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMWVlNjczNWRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTFlZTY3MzVkXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2RlcGFydG1lbnRzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMThcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==