webpackJsonp([4],{

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(224)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(226)
/* template */
var __vue_template__ = __webpack_require__(227)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6b816c8e"
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
Component.options.__file = "resources\\assets\\js\\pages\\Organization\\Positions\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b816c8e", Component.options)
  } else {
    hotAPI.reload("data-v-6b816c8e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    searchProp: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      // Поисковая строка
      search: '',
      // Удаление
      deleteWindow: false
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    positions: 'positions/positions',
    departments: 'departments/departments',
    employees: 'employees/employees'
  })),
  created: function created() {
    if (this.searchProp) {
      this.search = this.searchProp;
    }
    if (!this.headers) {
      throw new Error('You must to specify table headers!');
    }
    if (!this.items) {
      throw new Error('You must to specify table items!');
    }
  }
});

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(225);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("9725eae6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b816c8e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b816c8e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./styles.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n#positions[data-v-6b816c8e] {\n  position: relative;\n  max-width: 90%;\n  margin: 10px auto;\n}\n.mb-2.btn[data-v-6b816c8e] {\n  position: absolute;\n  bottom: -50px;\n}\n.card__title.t-head[data-v-6b816c8e] {\n  padding: 0 15px;\n}\nspan[data-v-6b816c8e] {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/Organization/Positions/styles.scss"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,eAAe;EACf,kBAAkB;CAAE;AAEtB;EACE,mBAAmB;EACnB,cAAc;CAAE;AAElB;EACE,gBAAgB;CAAE;AAEpB;EACE,gBAAgB;CAAE","file":"styles.scss","sourcesContent":["#positions {\n  position: relative;\n  max-width: 90%;\n  margin: 10px auto; }\n\n.mb-2.btn {\n  position: absolute;\n  bottom: -50px; }\n\n.card__title.t-head {\n  padding: 0 15px; }\n\nspan {\n  cursor: pointer; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_Organization__ = __webpack_require__(157);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/* harmony default export */ __webpack_exports__["default"] = ({
  middleware: ['auth', 'organisation'],
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_Organization__["a" /* default */]],
  data: function data() {
    return {
      // Диалог создания новой профессии
      dialog: false,
      deleteDenied: false,
      // Заголовки таблицы
      headers: [{ text: 'Номер', align: 'right', sortable: false, value: 'id' }, { text: 'Наименование', align: 'right', value: 'title' }, { text: 'Подразделение', align: 'right', value: 'department' }, { text: 'Сотрудников', align: 'right', value: 'employees' }, { text: 'Действия', align: 'right', value: 'title', sortable: false }],
      // Изменение профессии
      editedIndex: -1,
      editedItem: {
        id: '',
        title: '',
        department_id: ''
      },
      // Для возврата к дефолтным значениям
      defaultItem: {
        id: '',
        title: '',
        department_id: ''
      }
    };
  },

  computed: {
    items: function items() {
      var _this = this;

      var data = [];
      this.positions.forEach(function (el) {
        data.push(_extends({}, el, {
          department: _this.getDepartment(el.department_id),
          employees: _this.getPositionEmployees(el.id).length
        }));
      });
      return data;
    },
    deleteMsg: function deleteMsg() {
      return this.deleteDenied ? ' За данной должностью закреплены сотрудники. Пожалуйста, распределите их на другие должности прежде чем удалять текущую.' : ' Вы действительно хотите удалить данную должность?';
    },
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'Новая должность' : 'Изменить должность';
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
    add: 'positions/add',
    update: 'positions/edit',
    remove: 'positions/remove'
  }), {
    getDepartment: function getDepartment(department_id) {
      var department = this.departments.find(function (el) {
        return +el.id === +department_id;
      });
      return department ? department.title : 'Нет данных';
    },
    getPositionEmployees: function getPositionEmployees(id) {
      var employees = this.employees.filter(function (el) {
        return +el.position_id === +id;
      });
      return employees ? employees : 'Нет данных';
    },
    editItem: function editItem(id) {
      var item = this.positions.find(function (el) {
        return +el.id === +id;
      });
      this.editedItem = Object.assign({}, item);
      this.editedIndex = item.id;
      this.dialog = true;
      console.log(this.editedItem);
    },
    deleteItem: function deleteItem(item) {
      this.deleteWindow = true;
      if (this.getPositionEmployees(item.id).length) {
        this.deleteDenied = true;
      } else {
        this.deleteDenied = false;
        this.editedIndex = item.id;
      }
    },
    deleteConfirm: function deleteConfirm() {
      this.remove(this.editedIndex);
      this.deleteWindow = false;
      this.editedIndex = -1;
    },

    /**
     * Закрываем диалог изменения / добавления должности
     */
    close: function close() {
      var _this2 = this;

      this.dialog = false;
      setTimeout(function () {
        _this2.editedItem = Object.assign({}, _this2.defaultItem);
        _this2.editedIndex = -1;
      }, 300);
    },

    /**
     * Функция сохранения / добавления новой должности
     */
    save: function save() {
      if (this.editedIndex > -1) {
        this.update(this.editedItem);
      } else {
        this.add(this.editedItem);
      }
      this.close();
    }
  })
});

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (1:2016)\n    at Parser.pp$4.raise (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:2610:13)\n    at Parser.pp.unexpected (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:637:8)\n    at Parser.pp.expect (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:631:26)\n    at Parser.pp$3.parseExprList (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:2516:14)\n    at Parser.pp$3.parseSubscripts (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1983:29)\n    at Parser.pp$3.parseExprSubscripts (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1958:21)\n    at Parser.pp$3.parseMaybeUnary (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1932:17)\n    at Parser.pp$3.parseExprOps (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1874:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1857:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1832:19)\n    at Parser.pp$3.parseExpression (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1803:19)\n    at Parser.pp$1.parseStatement (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:797:45)\n    at Parser.pp$1.parseBlock (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1076:23)\n    at Parser.pp$3.parseFunctionBody (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:2466:22)\n    at Parser.pp$1.parseFunction (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1177:8)\n    at Parser.pp$3.parseExprAtom (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:2082:17)\n    at Parser.parseExprAtom (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:4372:24)\n    at Parser.pp$3.parseExprSubscripts (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1955:19)\n    at Parser.pp$3.parseMaybeUnary (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1932:17)\n    at Parser.pp$3.parseExprOps (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1874:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1857:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1832:19)\n    at Parser.pp$3.parsePropertyValue (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:2310:87)\n    at Parser.parseObj (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:4472:14)\n    at Parser.pp$3.parseExprAtom (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:2077:17)\n    at Parser.parseExprAtom (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:4372:24)\n    at Parser.pp$3.parseExprSubscripts (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1955:19)\n    at Parser.pp$3.parseMaybeUnary (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1932:17)\n    at Parser.pp$3.parseExprOps (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1874:19)\n    at Parser.pp$3.parseMaybeConditional (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1857:19)\n    at Parser.pp$3.parseMaybeAssign (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1832:19)\n    at Parser.pp$3.parsePropertyValue (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:2310:87)\n    at Parser.parseObj (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:4472:14)\n    at Parser.pp$3.parseExprAtom (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:2077:17)\n    at Parser.parseExprAtom (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:4372:24)\n    at Parser.pp$3.parseExprSubscripts (C:\\OSPanel\\domains\\crm\\node_modules\\vue-template-es2015-compiler\\buble.js:1955:19)");

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9Qb3NpdGlvbnMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL09yZ2FuaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9Qb3NpdGlvbnMvc3R5bGVzLnNjc3M/ZTk4NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9Qb3NpdGlvbnMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Pcmdhbml6YXRpb24vUG9zaXRpb25zL3NjcmlwdHMuanMiXSwibmFtZXMiOlsicHJvcHMiLCJzZWFyY2hQcm9wIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJkYXRhIiwic2VhcmNoIiwiZGVsZXRlV2luZG93IiwiY29tcHV0ZWQiLCJtYXBHZXR0ZXJzIiwicG9zaXRpb25zIiwiZGVwYXJ0bWVudHMiLCJlbXBsb3llZXMiLCJjcmVhdGVkIiwiaGVhZGVycyIsIkVycm9yIiwiaXRlbXMiLCJtaWRkbGV3YXJlIiwibWl4aW5zIiwiZGlhbG9nIiwiZGVsZXRlRGVuaWVkIiwidGV4dCIsImFsaWduIiwic29ydGFibGUiLCJ2YWx1ZSIsImVkaXRlZEluZGV4IiwiZWRpdGVkSXRlbSIsImlkIiwidGl0bGUiLCJkZXBhcnRtZW50X2lkIiwiZGVmYXVsdEl0ZW0iLCJmb3JFYWNoIiwicHVzaCIsImVsIiwiZGVwYXJ0bWVudCIsImdldERlcGFydG1lbnQiLCJnZXRQb3NpdGlvbkVtcGxveWVlcyIsImxlbmd0aCIsImRlbGV0ZU1zZyIsImZvcm1UaXRsZSIsIndhdGNoIiwidmFsIiwiY2xvc2UiLCJtZXRob2RzIiwibWFwQWN0aW9ucyIsImFkZCIsInVwZGF0ZSIsInJlbW92ZSIsImZpbmQiLCJmaWx0ZXIiLCJwb3NpdGlvbl9pZCIsImVkaXRJdGVtIiwiaXRlbSIsIk9iamVjdCIsImFzc2lnbiIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVJdGVtIiwiZGVsZXRlQ29uZmlybSIsInNldFRpbWVvdXQiLCJzYXZlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3TTtBQUN4TTtBQUNBO0FBQ0E7QUFDQSw0Q0FBZ1Q7QUFDaFQ7QUFDQSw4Q0FBcUw7QUFDckw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7QUM1Q0E7O0FBRUEseURBQWU7QUFDYkEsU0FBTztBQUNMQyxnQkFBWTtBQUNWQyxZQUFNQyxNQURJO0FBRVZDLGVBQVM7QUFGQztBQURQLEdBRE07QUFPYkMsTUFQYSxrQkFPTDtBQUNOLFdBQU87QUFDTDtBQUNBQyxjQUFRLEVBRkg7QUFHTDtBQUNBQyxvQkFBYztBQUpULEtBQVA7QUFNRCxHQWRZOztBQWViQyx5QkFDSyxnRUFBQUMsQ0FBVztBQUNaQyxlQUFXLHFCQURDO0FBRVpDLGlCQUFhLHlCQUZEO0FBR1pDLGVBQVc7QUFIQyxHQUFYLENBREwsQ0FmYTtBQXNCYkMsU0F0QmEscUJBc0JGO0FBQ1QsUUFBSSxLQUFLWixVQUFULEVBQXFCO0FBQ25CLFdBQUtLLE1BQUwsR0FBYyxLQUFLTCxVQUFuQjtBQUNEO0FBQ0QsUUFBRyxDQUFDLEtBQUthLE9BQVQsRUFBa0I7QUFDaEIsWUFBTSxJQUFJQyxLQUFKLENBQVUsb0NBQVYsQ0FBTjtBQUNEO0FBQ0QsUUFBRyxDQUFDLEtBQUtDLEtBQVQsRUFBZ0I7QUFDZCxZQUFNLElBQUlELEtBQUosQ0FB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QixZQUFMLEdBQW9CLElBQXBCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0EsWUFBTCxHQUFvQixLQUFwQjtBQUNBLGFBQUtLLFdBQUwsR0FBbUIyQixLQUFLekIsRUFBeEI7QUFDRDtBQUNGLEtBN0JIO0FBOEJFK0IsaUJBOUJGLDJCQThCbUI7QUFDZixXQUFLWCxNQUFMLENBQVksS0FBS3RCLFdBQWpCO0FBQ0EsV0FBS2xCLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxXQUFLa0IsV0FBTCxHQUFtQixDQUFDLENBQXBCO0FBQ0QsS0FsQ0g7O0FBbUNFOzs7QUFHQWlCLFNBdENGLG1CQXNDVTtBQUFBOztBQUNOLFdBQUt2QixNQUFMLEdBQWMsS0FBZDtBQUNBd0MsaUJBQVcsWUFBTTtBQUNmLGVBQUtqQyxVQUFMLEdBQWtCMkIsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsT0FBS3hCLFdBQXZCLENBQWxCO0FBQ0EsZUFBS0wsV0FBTCxHQUFtQixDQUFDLENBQXBCO0FBQ0QsT0FIRCxFQUdHLEdBSEg7QUFJRCxLQTVDSDs7QUE2Q0U7OztBQUdBbUMsUUFoREYsa0JBZ0RTO0FBQ0wsVUFBSSxLQUFLbkMsV0FBTCxHQUFtQixDQUFDLENBQXhCLEVBQTJCO0FBQ3pCLGFBQUtxQixNQUFMLENBQVksS0FBS3BCLFVBQWpCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS21CLEdBQUwsQ0FBUyxLQUFLbkIsVUFBZDtBQUNEO0FBQ0QsV0FBS2dCLEtBQUw7QUFDRDtBQXZESDtBQXhEYSxDQUFmLEUiLCJmaWxlIjoianMvNC4wZjFiM2IxM2Q2NjU5YjQzNjVjYy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmI4MTZjOGVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi9zdHlsZXMuc2Nzc1wiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi9zY3JpcHRzLmpzXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02YjgxNmM4ZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi02YjgxNmM4ZVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXE9yZ2FuaXphdGlvblxcXFxQb3NpdGlvbnNcXFxcaW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTZiODE2YzhlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmI4MTZjOGVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvT3JnYW5pemF0aW9uL1Bvc2l0aW9ucy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIHNlYXJjaFByb3A6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAvLyDQn9C+0LjRgdC60L7QstCw0Y8g0YHRgtGA0L7QutCwXHJcbiAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgIC8vINCj0LTQsNC70LXQvdC40LVcclxuICAgICAgZGVsZXRlV2luZG93OiBmYWxzZSxcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgcG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXHJcbiAgICAgIGRlcGFydG1lbnRzOiAnZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMnLFxyXG4gICAgICBlbXBsb3llZXM6ICdlbXBsb3llZXMvZW1wbG95ZWVzJ1xyXG4gICAgfSlcclxuICB9LFxyXG4gIGNyZWF0ZWQgKCkge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoUHJvcCkge1xyXG4gICAgICB0aGlzLnNlYXJjaCA9IHRoaXMuc2VhcmNoUHJvcDtcclxuICAgIH1cclxuICAgIGlmKCF0aGlzLmhlYWRlcnMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCB0byBzcGVjaWZ5IHRhYmxlIGhlYWRlcnMhJyk7XHJcbiAgICB9XHJcbiAgICBpZighdGhpcy5pdGVtcykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHRvIHNwZWNpZnkgdGFibGUgaXRlbXMhJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvT3JnYW5pemF0aW9uLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZiODE2YzhlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjk3MjVlYWU2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02YjgxNmM4ZVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTZiODE2YzhlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNmI4MTZjOGVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Pcmdhbml6YXRpb24vUG9zaXRpb25zL3N0eWxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMjRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbiNwb3NpdGlvbnNbZGF0YS12LTZiODE2YzhlXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXgtd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbn1cXG4ubWItMi5idG5bZGF0YS12LTZiODE2YzhlXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC01MHB4O1xcbn1cXG4uY2FyZF9fdGl0bGUudC1oZWFkW2RhdGEtdi02YjgxNmM4ZV0ge1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG5zcGFuW2RhdGEtdi02YjgxNmM4ZV0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL2NybS9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL09yZ2FuaXphdGlvbi9Qb3NpdGlvbnMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7Q0FBRTtBQUV0QjtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0NBQUU7QUFFbEI7RUFDRSxnQkFBZ0I7Q0FBRTtBQUVwQjtFQUNFLGdCQUFnQjtDQUFFXCIsXCJmaWxlXCI6XCJzdHlsZXMuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjcG9zaXRpb25zIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87IH1cXG5cXG4ubWItMi5idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtNTBweDsgfVxcblxcbi5jYXJkX190aXRsZS50LWhlYWQge1xcbiAgcGFkZGluZzogMCAxNXB4OyB9XFxuXFxuc3BhbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNmI4MTZjOGVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Pcmdhbml6YXRpb24vUG9zaXRpb25zL3N0eWxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMjVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xyXG5pbXBvcnQgT3JnYW5pemF0aW9uIGZyb20gJ34vbWl4aW5zL09yZ2FuaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbWlkZGxld2FyZTogWydhdXRoJywgJ29yZ2FuaXNhdGlvbiddLFxyXG4gIG1peGluczogWyBPcmdhbml6YXRpb24gXSxcclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8vINCU0LjQsNC70L7QsyDRgdC+0LfQtNCw0L3QuNGPINC90L7QstC+0Lkg0L/RgNC+0YTQtdGB0YHQuNC4XHJcbiAgICAgIGRpYWxvZzogZmFsc2UsXHJcbiAgICAgIGRlbGV0ZURlbmllZDogZmFsc2UsXHJcbiAgICAgIC8vINCX0LDQs9C+0LvQvtCy0LrQuCDRgtCw0LHQu9C40YbRi1xyXG4gICAgICBoZWFkZXJzOiBbXHJcbiAgICAgICAgeyB0ZXh0OiAn0J3QvtC80LXRgCcsIGFsaWduOiAncmlnaHQnLCBzb3J0YWJsZTogZmFsc2UsIHZhbHVlOiAnaWQnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1JywgYWxpZ246ICdyaWdodCcsIHZhbHVlOiAndGl0bGUnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAn0J/QvtC00YDQsNC30LTQtdC70LXQvdC40LUnLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICdkZXBhcnRtZW50JyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ9Ch0L7RgtGA0YPQtNC90LjQutC+0LInLCBhbGlnbjogJ3JpZ2h0JywgdmFsdWU6ICdlbXBsb3llZXMnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAn0JTQtdC50YHRgtCy0LjRjycsIGFsaWduOiAncmlnaHQnLCB2YWx1ZTogJ3RpdGxlJywgc29ydGFibGU6IGZhbHNlIH1cclxuICAgICAgXSxcclxuICAgICAgLy8g0JjQt9C80LXQvdC10L3QuNC1INC/0YDQvtGE0LXRgdGB0LjQuFxyXG4gICAgICBlZGl0ZWRJbmRleDogLTEsXHJcbiAgICAgIGVkaXRlZEl0ZW06IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIGRlcGFydG1lbnRfaWQ6ICcnLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyDQlNC70Y8g0LLQvtC30LLRgNCw0YLQsCDQuiDQtNC10YTQvtC70YLQvdGL0Lwg0LfQvdCw0YfQtdC90LjRj9C8XHJcbiAgICAgIGRlZmF1bHRJdGVtOiB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBkZXBhcnRtZW50X2lkOiAnJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGl0ZW1zICgpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICB0aGlzLnBvc2l0aW9ucy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBkYXRhLnB1c2goe1xyXG4gICAgICAgICAgLi4uZWwsXHJcbiAgICAgICAgICBkZXBhcnRtZW50OiB0aGlzLmdldERlcGFydG1lbnQoZWwuZGVwYXJ0bWVudF9pZCksXHJcbiAgICAgICAgICBlbXBsb3llZXM6IHRoaXMuZ2V0UG9zaXRpb25FbXBsb3llZXMoZWwuaWQpLmxlbmd0aFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sXHJcbiAgICBkZWxldGVNc2cgKCkge1xyXG4gICAgICByZXR1cm4gKHRoaXMuZGVsZXRlRGVuaWVkKSA/ICcg0JfQsCDQtNCw0L3QvdC+0Lkg0LTQvtC70LbQvdC+0YHRgtGM0Y4g0LfQsNC60YDQtdC/0LvQtdC90Ysg0YHQvtGC0YDRg9C00L3QuNC60LguINCf0L7QttCw0LvRg9C50YHRgtCwLCDRgNCw0YHQv9GA0LXQtNC10LvQuNGC0LUg0LjRhSDQvdCwINC00YDRg9Cz0LjQtSDQtNC+0LvQttC90L7RgdGC0Lgg0L/RgNC10LbQtNC1INGH0LXQvCDRg9C00LDQu9GP0YLRjCDRgtC10LrRg9GJ0YPRji4nIDpcclxuICAgICAgICAnINCS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINC00LDQvdC90YPRjiDQtNC+0LvQttC90L7RgdGC0Yw/JztcclxuICAgIH0sXHJcbiAgICBmb3JtVGl0bGUgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5lZGl0ZWRJbmRleCA9PT0gLTEgPyAn0J3QvtCy0LDRjyDQtNC+0LvQttC90L7RgdGC0YwnIDogJ9CY0LfQvNC10L3QuNGC0Ywg0LTQvtC70LbQvdC+0YHRgtGMJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGRpYWxvZyh2YWwpIHtcclxuICAgICAgdmFsIHx8IHRoaXMuY2xvc2UoKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLi4ubWFwQWN0aW9ucyh7XHJcbiAgICAgIGFkZDogJ3Bvc2l0aW9ucy9hZGQnLFxyXG4gICAgICB1cGRhdGU6ICdwb3NpdGlvbnMvZWRpdCcsXHJcbiAgICAgIHJlbW92ZTogJ3Bvc2l0aW9ucy9yZW1vdmUnXHJcbiAgICB9KSxcclxuICAgIGdldERlcGFydG1lbnQgKGRlcGFydG1lbnRfaWQpIHtcclxuICAgICAgY29uc3QgZGVwYXJ0bWVudCA9IHRoaXMuZGVwYXJ0bWVudHMuZmluZChlbCA9PiArZWwuaWQgPT09ICtkZXBhcnRtZW50X2lkKTtcclxuICAgICAgcmV0dXJuIChkZXBhcnRtZW50KSA/IGRlcGFydG1lbnQudGl0bGUgOiAn0J3QtdGCINC00LDQvdC90YvRhSc7XHJcbiAgICB9LFxyXG4gICAgZ2V0UG9zaXRpb25FbXBsb3llZXMgKGlkKSB7XHJcbiAgICAgIGNvbnN0IGVtcGxveWVlcyA9IHRoaXMuZW1wbG95ZWVzLmZpbHRlcihlbCA9PiArZWwucG9zaXRpb25faWQgPT09ICtpZCk7XHJcbiAgICAgIHJldHVybiAoZW1wbG95ZWVzKSA/IGVtcGxveWVlcyA6ICfQndC10YIg0LTQsNC90L3Ri9GFJztcclxuICAgIH0sXHJcbiAgICBlZGl0SXRlbSAoaWQpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMucG9zaXRpb25zLmZpbmQoZWwgPT4gK2VsLmlkID09PSAraWQpO1xyXG4gICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKTtcclxuICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IGl0ZW0uaWQ7XHJcbiAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5lZGl0ZWRJdGVtKTtcclxuICAgIH0sXHJcbiAgICBkZWxldGVJdGVtIChpdGVtKSB7XHJcbiAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gdHJ1ZTtcclxuICAgICAgaWYgKHRoaXMuZ2V0UG9zaXRpb25FbXBsb3llZXMoaXRlbS5pZCkubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVEZW5pZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlRGVuaWVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IGl0ZW0uaWQ7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZWxldGVDb25maXJtICgpIHtcclxuICAgICAgdGhpcy5yZW1vdmUodGhpcy5lZGl0ZWRJbmRleCk7XHJcbiAgICAgIHRoaXMuZGVsZXRlV2luZG93ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqINCX0LDQutGA0YvQstCw0LXQvCDQtNC40LDQu9C+0LMg0LjQt9C80LXQvdC10L3QuNGPIC8g0LTQvtCx0LDQstC70LXQvdC40Y8g0LTQvtC70LbQvdC+0YHRgtC4XHJcbiAgICAgKi9cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKTtcclxuICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTFcclxuICAgICAgfSwgMzAwKVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog0KTRg9C90LrRhtC40Y8g0YHQvtGF0YDQsNC90LXQvdC40Y8gLyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQvdC+0LLQvtC5INC00L7Qu9C20L3QvtGB0YLQuFxyXG4gICAgICovXHJcbiAgICBzYXZlKCkge1xyXG4gICAgICBpZiAodGhpcy5lZGl0ZWRJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGhpcy5lZGl0ZWRJdGVtKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuZWRpdGVkSXRlbSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICB9XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9Pcmdhbml6YXRpb24vUG9zaXRpb25zL3NjcmlwdHMuanMiXSwic291cmNlUm9vdCI6IiJ9