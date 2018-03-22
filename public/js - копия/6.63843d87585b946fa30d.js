webpackJsonp([6],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(194)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(196)
/* template */
var __vue_template__ = __webpack_require__(197)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5eb87cd0"
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
Component.options.__file = "resources\\assets\\js\\pages\\admin\\employees\\Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5eb87cd0", Component.options)
  } else {
    hotAPI.reload("data-v-5eb87cd0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("486c0640", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5eb87cd0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5eb87cd0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n\ttext-align: center;\n}\np[data-v-5eb87cd0],\n.employee[data-v-5eb87cd0],\n.avatar__overlay[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\np[data-v-5eb87cd0] {\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AAiMA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA,mBAAA;CACA;AAEA;;;CAIA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA","file":"Show.vue","sourcesContent":["<template>\n  <div class=\"employee\">\n  \t<h2>{{ $t('employee') }}</h2>\n  \t\t<div class=\"employee__avatar\">\n  \t\t\t<div class=\"employee__avatar-container\">\n  \t\t\t\t<div class=\"avatar__overlay\">\n  \t\t\t\t\t<upload-button :title=\"$t('change_image')\" :selectedCallback=\"uploadPhoto\"></upload-button>\n  \t\t\t\t</div>\n  \t\t\t\t<img :src=\"avatar\" :alt=\"item.first_name\">\n  \t\t\t</div>\t\n\t\t\t</div>\n\t  \t<div class=\"employee__descr\">\n\t  \t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('name')\"\n\t\t\t\t\t      v-model=\"item.first_name\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t\t    <v-text-field\n\t\t\t\t\t      :label=\"$t('last_name')\"\n\t\t\t\t\t      v-model=\"item.last_name\"\n\t\t\t\t\t      :rules=\"nameRules\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('patronymic')\"\n\t\t\t\t\t      v-model=\"item.patronymic\"\n\t\t\t\t\t      :rules=\"nameRules\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-select\n\t\t\t\t\t      :label=\"$t('position')\"\n\t\t\t\t\t      v-model=\"item.position\"\n\t\t\t\t\t      prepend-icon=\"card_travel\"\n\t\t\t\t\t      :items=\"positions\"\n\t\t\t\t\t      :rules=\"[v => !!v || 'Выберите должность']\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-select>\n\t  \t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('phone_number')\"\n\t\t\t\t\t      v-model=\"item.phone_number\"\n\t\t\t\t\t      prepend-icon=\"phone_iphone\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('salary')\"\n\t\t\t\t\t      v-model=\"item.salary\"\n\t\t\t\t\t      prepend-icon=\"attach_money\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('address')\"\n\t\t\t\t\t      v-model=\"item.address\"\n\t\t\t\t\t      prepend-icon=\"home\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-layout row wrap>\n\t\t\t\t\t<v-flex xs12>\n\t\t\t\t\t\t<v-menu\n\t\t\t\t\t\t  ref=\"menu\"\n\t\t\t\t\t\t  lazy\n\t\t\t\t\t\t  :close-on-content-click=\"false\"\n\t\t\t\t\t\t  v-model=\"menu\"\n\t\t\t\t\t\t  transition=\"scale-transition\"\n\t\t\t\t\t\t  offset-y\n\t\t\t\t\t\t  full-width\n\t\t\t\t\t\t  :nudge-right=\"40\"\n\t\t\t\t\t\t  min-width=\"290px\"\n\t\t\t\t\t\t  :return-value.sync=\"date\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t  <v-text-field\n\t\t\t\t\t\t    slot=\"activator\"\n\t\t\t\t\t\t    :label=\"$t('birthday')\"\n\t\t\t\t\t\t    v-model=\"item.birthday\"\n\t\t\t\t\t\t    prepend-icon=\"event\"\n\t\t\t\t\t\t    readonly\n\t\t\t\t\t\t    :disabled=\"disabled\"\n\t\t\t\t\t\t  ></v-text-field>\n\t\t\t\t\t\t  <v-date-picker v-if=\"!disabled\" v-model=\"item.birthday\" no-title scrollable>\n\t\t\t\t\t\t    <v-spacer></v-spacer>\n\t\t\t\t\t\t    <v-btn flat color=\"primary\" @click=\"menu = false\">{{ $t('cancel') }}</v-btn>\n\t\t\t\t\t\t    <v-btn flat color=\"primary\" @click=\"$refs.menu.save(date)\">{{ $t('ok') }}</v-btn>\n\t\t\t\t\t\t  </v-date-picker>\n\t\t\t\t\t\t</v-menu>\n\t\t\t\t\t</v-flex>\n\t\t\t\t</v-layout>\n\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t<v-btn large @click=\"buttonAction()\">\n\t\t\t\t\t{{ buttonText }}\n\t\t\t\t\t</v-btn>\n\t\t\t\t\t<v-btn large @click=\"back\">\n\t\t\t\t\tНазад\n\t\t\t\t\t</v-btn>\n\t\t\t\t</div>\n\t  \t\t\n\t  </div>\n  </div>\t\t\n</template>\n\n<script>\n\timport {mapActions, mapGetters} from 'vuex';\n\timport axios from 'axios';\n\texport default {\n\t\tprops: {\n\t\t\tid: {\n\t\t\t\ttype: [Number, String],\n\t\t\t\trequired: true\n\t\t\t}\n\t\t},\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\tdisabled: true,\n\t\t\t\tdate: null,\n\t      menu: false,\n\t      modal: false,\n\t      name: '',\n\t      valid: false,\n\t      defaultItem: {},\n\t      nameRules: [\n\t        v => !!v || 'Введите значение',\n\t        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',\n\t      ],\n\t      emailRules: [\n\t        v => !!v || 'Введите E-mail',\n\t        v => /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(v) || 'Не валидный E-mail'\n\t      ],\n\t      positions: [\n\t        'Старший сотрудник',\n\t        'Бухгалтер',\n\t        'Директор',\n\t        'Сотрудник'\n\t      ],\n\t\t\t}\n\t\t},\n\t\tcomputed: {\n\t\t\t...mapGetters({\n\t\t\t\titem: 'AdminEmployees/employee'\n\t\t\t}),\n\t\t\tbuttonText() {\n\t\t\t\treturn !this.disabled ? \"Обновить\" : \"Изменить данные\";\n\t\t\t},\n\t\t\tavatar() {\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"/storage/avatars/no-avatar.jpg\"\n\t\t\t}\n\t\t},\n\t\t// Загрузка пользователя перед монтированием компонента\n\t\tbeforeRouteEnter (to, from, next) {\n    \tnext(vm => vm.$store.dispatch('AdminEmployees/loadOne', vm.id));\n  \t},\n\t\tmethods: {\n\t\t\t...mapActions({\n\t\t\t\tchangeItem: 'AdminEmployees/edit',\n\t\t\t}),\n\t\t\tbuttonAction() {\n\t\t\t\tif (!this.disabled) {\n\t\t\t\t\tthis.changeItem(this.item);\n\t\t\t\t\tthis.defaultItem = Object.assign({}, this.item);\n\t\t\t\t}\n\t\t\t\tthis.disabled = !this.disabled;\t\t\n\t\t\t},\n\t\t\tback() {\t\n\t\t\t\tif (this.disabled) return this.$router.go(-1);\n\t\t\t\tthis.item = this.defaultItem;\n\t\t\t\tthis.disabled = !this.disabled;\t\t\t\t\t\t\n\t\t\t},\n\t\t\tasync uploadPhoto(e) {\n\t\t\t\tconst imagefile = document.getElementById('avatar-file').files[0];\n\t\t\t\tif (!imagefile) return;\n\t\t    try {\n\t\t    \tlet formData = new FormData();    \t\t\t\t    \t\n\t\t\t\t\tformData.append(\"image\", imagefile);\n\t\t\t\t\tconst { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {\n\t\t\t\t\t     headers: {\n\t\t\t\t\t       'Content-Type': 'multipart/form-data'\n\t\t\t\t\t     }\n\t\t\t\t\t });\n\t\t\t\t\tthis.item.avatar = data;\n    \t\t} catch (e) {\n      \t\tconsole.error('Не загрузился аватар', e)\n    \t\t}\t\n\t\t\t}\n\t\t}\n\t}\n</script>\n\n<style scoped>\n\t* {\n\t\tbox-sizing: border-box;;\n\t\tfont-family: 'Roboto', sans-serif;\n\t}\n\n\th2 {\n\t\tflex-basis: 100%;\n\t\ttext-align: center;\n\t}\n\n\tp,\n\t.employee,\n\t.avatar__overlay {\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: -o-flex;\n\t\tdisplay: flex;\n\t}\n\n\tp {\n\t\tjustify-content: space-between;\n\t\tmargin: 0;\n\t\tpadding: 10px;\n\t\ttransition: background-color .3s;\n\t}\n\n\tp:hover {\n\t\tbackground-color: rgba(255, 255, 255, .1);\n\t}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	props: {
		id: {
			type: [Number, String],
			required: true
		}
	},
	data: function data() {
		return {
			disabled: true,
			date: null,
			menu: false,
			modal: false,
			name: '',
			valid: false,
			defaultItem: {},
			nameRules: [function (v) {
				return !!v || 'Введите значение';
			}, function (v) {
				return v && v.length > 1 || 'Имя должно содержать минимум 2 буквы';
			}],
			emailRules: [function (v) {
				return !!v || 'Введите E-mail';
			}, function (v) {
				return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Не валидный E-mail'
				);
			}],
			positions: ['Старший сотрудник', 'Бухгалтер', 'Директор', 'Сотрудник']
		};
	},

	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
		item: 'AdminEmployees/employee'
	}), {
		buttonText: function buttonText() {
			return !this.disabled ? "Обновить" : "Изменить данные";
		},
		avatar: function avatar() {
			return this.item.avatar ? this.item.avatar : "/storage/avatars/no-avatar.jpg";
		}
	}),
	// Загрузка пользователя перед монтированием компонента
	beforeRouteEnter: function beforeRouteEnter(to, from, next) {
		next(function (vm) {
			return vm.$store.dispatch('AdminEmployees/loadOne', vm.id);
		});
	},

	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
		changeItem: 'AdminEmployees/edit'
	}), {
		buttonAction: function buttonAction() {
			if (!this.disabled) {
				this.changeItem(this.item);
				this.defaultItem = Object.assign({}, this.item);
			}
			this.disabled = !this.disabled;
		},
		back: function back() {
			if (this.disabled) return this.$router.go(-1);
			this.item = this.defaultItem;
			this.disabled = !this.disabled;
		},
		uploadPhoto: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(e) {
				var imagefile, formData, _ref2, data;

				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								imagefile = document.getElementById('avatar-file').files[0];

								if (imagefile) {
									_context.next = 3;
									break;
								}

								return _context.abrupt('return');

							case 3:
								_context.prev = 3;
								formData = new FormData();

								formData.append("image", imagefile);
								_context.next = 8;
								return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/employees/' + this.id + '/avatar', formData, {
									headers: {
										'Content-Type': 'multipart/form-data'
									}
								});

							case 8:
								_ref2 = _context.sent;
								data = _ref2.data;

								this.item.avatar = data;
								_context.next = 16;
								break;

							case 13:
								_context.prev = 13;
								_context.t0 = _context['catch'](3);

								console.error('Не загрузился аватар', _context.t0);

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this, [[3, 13]]);
			}));

			function uploadPhoto(_x) {
				return _ref.apply(this, arguments);
			}

			return uploadPhoto;
		}()
	})
});

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "employee" }, [
    _c("h2", [_vm._v(_vm._s(_vm.$t("employee")))]),
    _vm._v(" "),
    _c("div", { staticClass: "employee__avatar" }, [
      _c("div", { staticClass: "employee__avatar-container" }, [
        _c(
          "div",
          { staticClass: "avatar__overlay" },
          [
            _c("upload-button", {
              attrs: {
                title: _vm.$t("change_image"),
                selectedCallback: _vm.uploadPhoto
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("img", { attrs: { src: _vm.avatar, alt: _vm.item.first_name } })
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "employee__descr" },
      [
        _c("v-text-field", {
          attrs: {
            label: _vm.$t("name"),
            counter: 70,
            required: "",
            disabled: _vm.disabled
          },
          model: {
            value: _vm.item.first_name,
            callback: function($$v) {
              _vm.$set(_vm.item, "first_name", $$v)
            },
            expression: "item.first_name"
          }
        }),
        _vm._v(" "),
        _c("v-text-field", {
          attrs: {
            label: _vm.$t("last_name"),
            rules: _vm.nameRules,
            counter: 70,
            required: "",
            disabled: _vm.disabled
          },
          model: {
            value: _vm.item.last_name,
            callback: function($$v) {
              _vm.$set(_vm.item, "last_name", $$v)
            },
            expression: "item.last_name"
          }
        }),
        _vm._v(" "),
        _c("v-text-field", {
          attrs: {
            label: _vm.$t("patronymic"),
            rules: _vm.nameRules,
            counter: 70,
            disabled: _vm.disabled
          },
          model: {
            value: _vm.item.patronymic,
            callback: function($$v) {
              _vm.$set(_vm.item, "patronymic", $$v)
            },
            expression: "item.patronymic"
          }
        }),
        _vm._v(" "),
        _c("v-select", {
          attrs: {
            label: _vm.$t("position"),
            "prepend-icon": "card_travel",
            items: _vm.positions,
            rules: [
              function(v) {
                return !!v || "Выберите должность"
              }
            ],
            required: "",
            disabled: _vm.disabled
          },
          model: {
            value: _vm.item.position,
            callback: function($$v) {
              _vm.$set(_vm.item, "position", $$v)
            },
            expression: "item.position"
          }
        }),
        _vm._v(" "),
        _c("v-text-field", {
          attrs: {
            label: _vm.$t("phone_number"),
            "prepend-icon": "phone_iphone",
            required: "",
            disabled: _vm.disabled
          },
          model: {
            value: _vm.item.phone_number,
            callback: function($$v) {
              _vm.$set(_vm.item, "phone_number", $$v)
            },
            expression: "item.phone_number"
          }
        }),
        _vm._v(" "),
        _c("v-text-field", {
          attrs: {
            label: _vm.$t("salary"),
            "prepend-icon": "attach_money",
            required: "",
            disabled: _vm.disabled
          },
          model: {
            value: _vm.item.salary,
            callback: function($$v) {
              _vm.$set(_vm.item, "salary", $$v)
            },
            expression: "item.salary"
          }
        }),
        _vm._v(" "),
        _c("v-text-field", {
          attrs: {
            label: _vm.$t("address"),
            "prepend-icon": "home",
            required: "",
            disabled: _vm.disabled
          },
          model: {
            value: _vm.item.address,
            callback: function($$v) {
              _vm.$set(_vm.item, "address", $$v)
            },
            expression: "item.address"
          }
        }),
        _vm._v(" "),
        _c(
          "v-layout",
          { attrs: { row: "", wrap: "" } },
          [
            _c(
              "v-flex",
              { attrs: { xs12: "" } },
              [
                _c(
                  "v-menu",
                  {
                    ref: "menu",
                    attrs: {
                      lazy: "",
                      "close-on-content-click": false,
                      transition: "scale-transition",
                      "offset-y": "",
                      "full-width": "",
                      "nudge-right": 40,
                      "min-width": "290px",
                      "return-value": _vm.date
                    },
                    on: {
                      "update:returnValue": function($event) {
                        _vm.date = $event
                      }
                    },
                    model: {
                      value: _vm.menu,
                      callback: function($$v) {
                        _vm.menu = $$v
                      },
                      expression: "menu"
                    }
                  },
                  [
                    _c("v-text-field", {
                      attrs: {
                        slot: "activator",
                        label: _vm.$t("birthday"),
                        "prepend-icon": "event",
                        readonly: "",
                        disabled: _vm.disabled
                      },
                      slot: "activator",
                      model: {
                        value: _vm.item.birthday,
                        callback: function($$v) {
                          _vm.$set(_vm.item, "birthday", $$v)
                        },
                        expression: "item.birthday"
                      }
                    }),
                    _vm._v(" "),
                    !_vm.disabled
                      ? _c(
                          "v-date-picker",
                          {
                            attrs: { "no-title": "", scrollable: "" },
                            model: {
                              value: _vm.item.birthday,
                              callback: function($$v) {
                                _vm.$set(_vm.item, "birthday", $$v)
                              },
                              expression: "item.birthday"
                            }
                          },
                          [
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { flat: "", color: "primary" },
                                on: {
                                  click: function($event) {
                                    _vm.menu = false
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.$t("cancel")))]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { flat: "", color: "primary" },
                                on: {
                                  click: function($event) {
                                    _vm.$refs.menu.save(_vm.date)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.$t("ok")))]
                            )
                          ],
                          1
                        )
                      : _vm._e()
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
          "div",
          { staticClass: "buttons" },
          [
            _c(
              "v-btn",
              {
                attrs: { large: "" },
                on: {
                  click: function($event) {
                    _vm.buttonAction()
                  }
                }
              },
              [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.buttonText) + "\n\t\t\t\t\t")]
            ),
            _vm._v(" "),
            _c("v-btn", { attrs: { large: "" }, on: { click: _vm.back } }, [
              _vm._v("\n\t\t\t\t\tНазад\n\t\t\t\t\t")
            ])
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5eb87cd0", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwrQ0FBZ0QsbUNBQW1DLG9DQUFvQyxzQ0FBc0MsR0FBRyx1QkFBdUIs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QUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlDQUFpQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw2QkFBNkI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsNkJBQTZCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixTQUFTLFlBQVksT0FBTyxrQkFBa0IsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvNi42Mzg0M2Q4NzU4NWI5NDZmYTMwZC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi01ZWI4N2NkMFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGFkbWluXFxcXGVtcGxveWVlc1xcXFxTaG93LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZWI4N2NkMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlYjg3Y2QwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0ODZjMDY0MFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuKltkYXRhLXYtNWViODdjZDBdIHtcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0ICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OztcXG5cXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbmgyW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcblxcdCAgICBmbGV4LWJhc2lzOiAxMDAlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxucFtkYXRhLXYtNWViODdjZDBdLFxcbi5lbXBsb3llZVtkYXRhLXYtNWViODdjZDBdLFxcbi5hdmF0YXJfX292ZXJsYXlbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxucFtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcblxcdCAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvd2ViL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFpTUE7Q0FDQSwrQkFBQTtTQUFBLHVCQUFBO0NBQ0Esa0NBQUE7Q0FDQTtBQUVBO0NBQ0EsOEJBQUE7S0FBQSxpQkFBQTtDQUNBLG1CQUFBO0NBQ0E7QUFFQTs7O0NBSUEsbUJBQUE7Q0FDQSxrQkFBQTtDQUNBLGlCQUFBO0NBQ0EscUJBQUE7Q0FBQSxxQkFBQTtDQUFBLGNBQUE7Q0FDQTtBQUVBO0NBQ0EsMEJBQUE7S0FBQSx1QkFBQTtTQUFBLCtCQUFBO0NBQ0EsVUFBQTtDQUNBLGNBQUE7Q0FDQSx5Q0FBQTtDQUFBLGlDQUFBO0NBQ0E7QUFFQTtDQUNBLDBDQUFBO0NBQ0FcIixcImZpbGVcIjpcIlNob3cudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImVtcGxveWVlXFxcIj5cXG4gIFxcdDxoMj57eyAkdCgnZW1wbG95ZWUnKSB9fTwvaDI+XFxuICBcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fYXZhdGFyXFxcIj5cXG4gIFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXFxcIj5cXG4gIFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImF2YXRhcl9fb3ZlcmxheVxcXCI+XFxuICBcXHRcXHRcXHRcXHRcXHQ8dXBsb2FkLWJ1dHRvbiA6dGl0bGU9XFxcIiR0KCdjaGFuZ2VfaW1hZ2UnKVxcXCIgOnNlbGVjdGVkQ2FsbGJhY2s9XFxcInVwbG9hZFBob3RvXFxcIj48L3VwbG9hZC1idXR0b24+XFxuICBcXHRcXHRcXHRcXHQ8L2Rpdj5cXG4gIFxcdFxcdFxcdFxcdDxpbWcgOnNyYz1cXFwiYXZhdGFyXFxcIiA6YWx0PVxcXCJpdGVtLmZpcnN0X25hbWVcXFwiPlxcbiAgXFx0XFx0XFx0PC9kaXY+XFx0XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0ICBcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fZGVzY3JcXFwiPlxcblxcdCAgXFx0XFx0PHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ25hbWUnKVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmZpcnN0X25hbWVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmNvdW50ZXI9XFxcIjcwXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXG5cXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxuXFx0XFx0XFx0XFx0XFx0ICAgIDx2LXRleHQtZmllbGRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdsYXN0X25hbWUnKVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmxhc3RfbmFtZVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6cnVsZXM9XFxcIm5hbWVSdWxlc1xcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6Y291bnRlcj1cXFwiNzBcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcblxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXG5cXHRcXHRcXHRcXHQ8di10ZXh0LWZpZWxkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgncGF0cm9ueW1pYycpXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ucGF0cm9ueW1pY1xcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6cnVsZXM9XFxcIm5hbWVSdWxlc1xcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6Y291bnRlcj1cXFwiNzBcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXG5cXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxuXFx0XFx0XFx0XFx0PHYtc2VsZWN0XFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgncG9zaXRpb24nKVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLnBvc2l0aW9uXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiY2FyZF90cmF2ZWxcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOml0ZW1zPVxcXCJwb3NpdGlvbnNcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMJ11cXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcblxcdFxcdFxcdFxcdD48L3Ytc2VsZWN0PlxcblxcdCAgXFx0XFx0PHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3Bob25lX251bWJlcicpXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ucGhvbmVfbnVtYmVyXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwicGhvbmVfaXBob25lXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXG5cXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxuXFx0XFx0XFx0XFx0PHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3NhbGFyeScpXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0uc2FsYXJ5XFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiYXR0YWNoX21vbmV5XFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXG5cXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxuXFx0XFx0XFx0XFx0PHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ2FkZHJlc3MnKVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmFkZHJlc3NcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJob21lXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXG5cXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxuXFx0XFx0XFx0XFx0PHYtbGF5b3V0IHJvdyB3cmFwPlxcblxcdFxcdFxcdFxcdFxcdDx2LWZsZXggeHMxMj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8di1tZW51XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICByZWY9XFxcIm1lbnVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICBsYXp5XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA6Y2xvc2Utb24tY29udGVudC1jbGljaz1cXFwiZmFsc2VcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICB2LW1vZGVsPVxcXCJtZW51XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgdHJhbnNpdGlvbj1cXFwic2NhbGUtdHJhbnNpdGlvblxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIG9mZnNldC15XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICBmdWxsLXdpZHRoXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA6bnVkZ2UtcmlnaHQ9XFxcIjQwXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgbWluLXdpZHRoPVxcXCIyOTBweFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIDpyZXR1cm4tdmFsdWUuc3luYz1cXFwiZGF0ZVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA8di10ZXh0LWZpZWxkXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIHNsb3Q9XFxcImFjdGl2YXRvclxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgOmxhYmVsPVxcXCIkdCgnYmlydGhkYXknKVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgdi1tb2RlbD1cXFwiaXRlbS5iaXJ0aGRheVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgcHJlcGVuZC1pY29uPVxcXCJldmVudFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgcmVhZG9ubHlcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgID48L3YtdGV4dC1maWVsZD5cXG5cXHRcXHRcXHRcXHRcXHRcXHQgIDx2LWRhdGUtcGlja2VyIHYtaWY9XFxcIiFkaXNhYmxlZFxcXCIgdi1tb2RlbD1cXFwiaXRlbS5iaXJ0aGRheVxcXCIgbm8tdGl0bGUgc2Nyb2xsYWJsZT5cXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDx2LWJ0biBmbGF0IGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBAY2xpY2s9XFxcIm1lbnUgPSBmYWxzZVxcXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgPHYtYnRuIGZsYXQgY29sb3I9XFxcInByaW1hcnlcXFwiIEBjbGljaz1cXFwiJHJlZnMubWVudS5zYXZlKGRhdGUpXFxcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA8L3YtZGF0ZS1waWNrZXI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PC92LW1lbnU+XFxuXFx0XFx0XFx0XFx0XFx0PC92LWZsZXg+XFxuXFx0XFx0XFx0XFx0PC92LWxheW91dD5cXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJidXR0b25zXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8di1idG4gbGFyZ2UgQGNsaWNrPVxcXCJidXR0b25BY3Rpb24oKVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0e3sgYnV0dG9uVGV4dCB9fVxcblxcdFxcdFxcdFxcdFxcdDwvdi1idG4+XFxuXFx0XFx0XFx0XFx0XFx0PHYtYnRuIGxhcmdlIEBjbGljaz1cXFwiYmFja1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx00J3QsNC30LDQtFxcblxcdFxcdFxcdFxcdFxcdDwvdi1idG4+XFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0ICBcXHRcXHRcXG5cXHQgIDwvZGl2PlxcbiAgPC9kaXY+XFx0XFx0XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XFxuXFx0aW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcXG5cXHRleHBvcnQgZGVmYXVsdCB7XFxuXFx0XFx0cHJvcHM6IHtcXG5cXHRcXHRcXHRpZDoge1xcblxcdFxcdFxcdFxcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXFxuXFx0XFx0XFx0XFx0cmVxdWlyZWQ6IHRydWVcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHRkYXRhKCkge1xcblxcdFxcdFxcdHJldHVybiB7XFxuXFx0XFx0XFx0XFx0ZGlzYWJsZWQ6IHRydWUsXFxuXFx0XFx0XFx0XFx0ZGF0ZTogbnVsbCxcXG5cXHQgICAgICBtZW51OiBmYWxzZSxcXG5cXHQgICAgICBtb2RhbDogZmFsc2UsXFxuXFx0ICAgICAgbmFtZTogJycsXFxuXFx0ICAgICAgdmFsaWQ6IGZhbHNlLFxcblxcdCAgICAgIGRlZmF1bHRJdGVtOiB7fSxcXG5cXHQgICAgICBuYW1lUnVsZXM6IFtcXG5cXHQgICAgICAgIHYgPT4gISF2IHx8ICfQktCy0LXQtNC40YLQtSDQt9C90LDRh9C10L3QuNC1JyxcXG5cXHQgICAgICAgIHYgPT4gKHYgJiYgdi5sZW5ndGggPiAxKSB8fCAn0JjQvNGPINC00L7Qu9C20L3QviDRgdC+0LTQtdGA0LbQsNGC0Ywg0LzQuNC90LjQvNGD0LwgMiDQsdGD0LrQstGLJyxcXG5cXHQgICAgICBdLFxcblxcdCAgICAgIGVtYWlsUnVsZXM6IFtcXG5cXHQgICAgICAgIHYgPT4gISF2IHx8ICfQktCy0LXQtNC40YLQtSBFLW1haWwnLFxcblxcdCAgICAgICAgdiA9PiAvXlxcXFx3KyhbLi1dP1xcXFx3KykqQFxcXFx3KyhbLi1dP1xcXFx3KykqKFxcXFwuXFxcXHd7MiwzfSkrJC8udGVzdCh2KSB8fCAn0J3QtSDQstCw0LvQuNC00L3Ri9C5IEUtbWFpbCdcXG5cXHQgICAgICBdLFxcblxcdCAgICAgIHBvc2l0aW9uczogW1xcblxcdCAgICAgICAgJ9Ch0YLQsNGA0YjQuNC5INGB0L7RgtGA0YPQtNC90LjQuicsXFxuXFx0ICAgICAgICAn0JHRg9GF0LPQsNC70YLQtdGAJyxcXG5cXHQgICAgICAgICfQlNC40YDQtdC60YLQvtGAJyxcXG5cXHQgICAgICAgICfQodC+0YLRgNGD0LTQvdC40LonXFxuXFx0ICAgICAgXSxcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHRjb21wdXRlZDoge1xcblxcdFxcdFxcdC4uLm1hcEdldHRlcnMoe1xcblxcdFxcdFxcdFxcdGl0ZW06ICdBZG1pbkVtcGxveWVlcy9lbXBsb3llZSdcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRidXR0b25UZXh0KCkge1xcblxcdFxcdFxcdFxcdHJldHVybiAhdGhpcy5kaXNhYmxlZCA/IFxcXCLQntCx0L3QvtCy0LjRgtGMXFxcIiA6IFxcXCLQmNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtVxcXCI7XFxuXFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRhdmF0YXIoKSB7XFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcXFwiL3N0b3JhZ2UvYXZhdGFycy9uby1hdmF0YXIuanBnXFxcIlxcblxcdFxcdFxcdH1cXG5cXHRcXHR9LFxcblxcdFxcdC8vINCX0LDQs9GA0YPQt9C60LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0LXRgNC10LQg0LzQvtC90YLQuNGA0L7QstCw0L3QuNC10Lwg0LrQvtC80L/QvtC90LXQvdGC0LBcXG5cXHRcXHRiZWZvcmVSb3V0ZUVudGVyICh0bywgZnJvbSwgbmV4dCkge1xcbiAgICBcXHRuZXh0KHZtID0+IHZtLiRzdG9yZS5kaXNwYXRjaCgnQWRtaW5FbXBsb3llZXMvbG9hZE9uZScsIHZtLmlkKSk7XFxuICBcXHR9LFxcblxcdFxcdG1ldGhvZHM6IHtcXG5cXHRcXHRcXHQuLi5tYXBBY3Rpb25zKHtcXG5cXHRcXHRcXHRcXHRjaGFuZ2VJdGVtOiAnQWRtaW5FbXBsb3llZXMvZWRpdCcsXFxuXFx0XFx0XFx0fSksXFxuXFx0XFx0XFx0YnV0dG9uQWN0aW9uKCkge1xcblxcdFxcdFxcdFxcdGlmICghdGhpcy5kaXNhYmxlZCkge1xcblxcdFxcdFxcdFxcdFxcdHRoaXMuY2hhbmdlSXRlbSh0aGlzLml0ZW0pO1xcblxcdFxcdFxcdFxcdFxcdHRoaXMuZGVmYXVsdEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLml0ZW0pO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHR0aGlzLmRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQ7XFx0XFx0XFxuXFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRiYWNrKCkge1xcdFxcblxcdFxcdFxcdFxcdGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm4gdGhpcy4kcm91dGVyLmdvKC0xKTtcXG5cXHRcXHRcXHRcXHR0aGlzLml0ZW0gPSB0aGlzLmRlZmF1bHRJdGVtO1xcblxcdFxcdFxcdFxcdHRoaXMuZGlzYWJsZWQgPSAhdGhpcy5kaXNhYmxlZDtcXHRcXHRcXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHR9LFxcblxcdFxcdFxcdGFzeW5jIHVwbG9hZFBob3RvKGUpIHtcXG5cXHRcXHRcXHRcXHRjb25zdCBpbWFnZWZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhdGFyLWZpbGUnKS5maWxlc1swXTtcXG5cXHRcXHRcXHRcXHRpZiAoIWltYWdlZmlsZSkgcmV0dXJuO1xcblxcdFxcdCAgICB0cnkge1xcblxcdFxcdCAgICBcXHRsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsgICAgXFx0XFx0XFx0XFx0ICAgIFxcdFxcblxcdFxcdFxcdFxcdFxcdGZvcm1EYXRhLmFwcGVuZChcXFwiaW1hZ2VcXFwiLCBpbWFnZWZpbGUpO1xcblxcdFxcdFxcdFxcdFxcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQgKyAnL2F2YXRhcicsIGZvcm1EYXRhLCB7XFxuXFx0XFx0XFx0XFx0XFx0ICAgICBoZWFkZXJzOiB7XFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcXG5cXHRcXHRcXHRcXHRcXHQgICAgIH1cXG5cXHRcXHRcXHRcXHRcXHQgfSk7XFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5pdGVtLmF2YXRhciA9IGRhdGE7XFxuICAgIFxcdFxcdH0gY2F0Y2ggKGUpIHtcXG4gICAgICBcXHRcXHRjb25zb2xlLmVycm9yKCfQndC1INC30LDQs9GA0YPQt9C40LvRgdGPINCw0LLQsNGC0LDRgCcsIGUpXFxuICAgIFxcdFxcdH1cXHRcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcblxcdCoge1xcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcblxcdFxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHR9XFxuXFxuXFx0aDIge1xcblxcdFxcdGZsZXgtYmFzaXM6IDEwMCU7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXG5cXHRwLFxcblxcdC5lbXBsb3llZSxcXG5cXHQuYXZhdGFyX19vdmVybGF5IHtcXG5cXHRcXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdFxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdFxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHR9XFxuXFxuXFx0cCB7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHRcXHRwYWRkaW5nOiAxMHB4O1xcblxcdFxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcblxcdH1cXG5cXG5cXHRwOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXG5cXHR9XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJlbXBsb3llZVwiPlxuICBcdDxoMj57eyAkdCgnZW1wbG95ZWUnKSB9fTwvaDI+XG4gIFx0XHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2F2YXRhclwiPlxuICBcdFx0XHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcIj5cbiAgXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYXZhdGFyX19vdmVybGF5XCI+XG4gIFx0XHRcdFx0XHQ8dXBsb2FkLWJ1dHRvbiA6dGl0bGU9XCIkdCgnY2hhbmdlX2ltYWdlJylcIiA6c2VsZWN0ZWRDYWxsYmFjaz1cInVwbG9hZFBob3RvXCI+PC91cGxvYWQtYnV0dG9uPlxuICBcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHRcdDxpbWcgOnNyYz1cImF2YXRhclwiIDphbHQ9XCJpdGVtLmZpcnN0X25hbWVcIj5cbiAgXHRcdFx0PC9kaXY+XHRcblx0XHRcdDwvZGl2PlxuXHQgIFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19kZXNjclwiPlxuXHQgIFx0XHQ8di10ZXh0LWZpZWxkXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ25hbWUnKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0uZmlyc3RfbmFtZVwiXG5cdFx0XHRcdFx0ICAgICAgOmNvdW50ZXI9XCI3MFwiXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcblx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cblx0XHRcdFx0XHQgICAgPHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdsYXN0X25hbWUnKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ubGFzdF9uYW1lXCJcblx0XHRcdFx0XHQgICAgICA6cnVsZXM9XCJuYW1lUnVsZXNcIlxuXHRcdFx0XHRcdCAgICAgIDpjb3VudGVyPVwiNzBcIlxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXG5cdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XG5cdFx0XHRcdDx2LXRleHQtZmllbGRcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgncGF0cm9ueW1pYycpXCJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5wYXRyb255bWljXCJcblx0XHRcdFx0XHQgICAgICA6cnVsZXM9XCJuYW1lUnVsZXNcIlxuXHRcdFx0XHRcdCAgICAgIDpjb3VudGVyPVwiNzBcIlxuXHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxuXHRcdFx0XHQ8di1zZWxlY3Rcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgncG9zaXRpb24nKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucG9zaXRpb25cIlxuXHRcdFx0XHRcdCAgICAgIHByZXBlbmQtaWNvbj1cImNhcmRfdHJhdmVsXCJcblx0XHRcdFx0XHQgICAgICA6aXRlbXM9XCJwb3NpdGlvbnNcIlxuXHRcdFx0XHRcdCAgICAgIDpydWxlcz1cIlt2ID0+ICEhdiB8fCAn0JLRi9Cx0LXRgNC40YLQtSDQtNC+0LvQttC90L7RgdGC0YwnXVwiXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcblx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdD48L3Ytc2VsZWN0PlxuXHQgIFx0XHQ8di10ZXh0LWZpZWxkXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3Bob25lX251bWJlcicpXCJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5waG9uZV9udW1iZXJcIlxuXHRcdFx0XHRcdCAgICAgIHByZXBlbmQtaWNvbj1cInBob25lX2lwaG9uZVwiXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcblx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cblx0XHRcdFx0PHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdzYWxhcnknKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0uc2FsYXJ5XCJcblx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJhdHRhY2hfbW9uZXlcIlxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXG5cdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XG5cdFx0XHRcdDx2LXRleHQtZmllbGRcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnYWRkcmVzcycpXCJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5hZGRyZXNzXCJcblx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJob21lXCJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxuXHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxuXHRcdFx0XHQ8di1sYXlvdXQgcm93IHdyYXA+XG5cdFx0XHRcdFx0PHYtZmxleCB4czEyPlxuXHRcdFx0XHRcdFx0PHYtbWVudVxuXHRcdFx0XHRcdFx0ICByZWY9XCJtZW51XCJcblx0XHRcdFx0XHRcdCAgbGF6eVxuXHRcdFx0XHRcdFx0ICA6Y2xvc2Utb24tY29udGVudC1jbGljaz1cImZhbHNlXCJcblx0XHRcdFx0XHRcdCAgdi1tb2RlbD1cIm1lbnVcIlxuXHRcdFx0XHRcdFx0ICB0cmFuc2l0aW9uPVwic2NhbGUtdHJhbnNpdGlvblwiXG5cdFx0XHRcdFx0XHQgIG9mZnNldC15XG5cdFx0XHRcdFx0XHQgIGZ1bGwtd2lkdGhcblx0XHRcdFx0XHRcdCAgOm51ZGdlLXJpZ2h0PVwiNDBcIlxuXHRcdFx0XHRcdFx0ICBtaW4td2lkdGg9XCIyOTBweFwiXG5cdFx0XHRcdFx0XHQgIDpyZXR1cm4tdmFsdWUuc3luYz1cImRhdGVcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0ICA8di10ZXh0LWZpZWxkXG5cdFx0XHRcdFx0XHQgICAgc2xvdD1cImFjdGl2YXRvclwiXG5cdFx0XHRcdFx0XHQgICAgOmxhYmVsPVwiJHQoJ2JpcnRoZGF5JylcIlxuXHRcdFx0XHRcdFx0ICAgIHYtbW9kZWw9XCJpdGVtLmJpcnRoZGF5XCJcblx0XHRcdFx0XHRcdCAgICBwcmVwZW5kLWljb249XCJldmVudFwiXG5cdFx0XHRcdFx0XHQgICAgcmVhZG9ubHlcblx0XHRcdFx0XHRcdCAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHQgID48L3YtdGV4dC1maWVsZD5cblx0XHRcdFx0XHRcdCAgPHYtZGF0ZS1waWNrZXIgdi1pZj1cIiFkaXNhYmxlZFwiIHYtbW9kZWw9XCJpdGVtLmJpcnRoZGF5XCIgbm8tdGl0bGUgc2Nyb2xsYWJsZT5cblx0XHRcdFx0XHRcdCAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cblx0XHRcdFx0XHRcdCAgICA8di1idG4gZmxhdCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJtZW51ID0gZmFsc2VcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxuXHRcdFx0XHRcdFx0ICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIiRyZWZzLm1lbnUuc2F2ZShkYXRlKVwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cblx0XHRcdFx0XHRcdCAgPC92LWRhdGUtcGlja2VyPlxuXHRcdFx0XHRcdFx0PC92LW1lbnU+XG5cdFx0XHRcdFx0PC92LWZsZXg+XG5cdFx0XHRcdDwvdi1sYXlvdXQ+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG5cdFx0XHRcdFx0PHYtYnRuIGxhcmdlIEBjbGljaz1cImJ1dHRvbkFjdGlvbigpXCI+XG5cdFx0XHRcdFx0e3sgYnV0dG9uVGV4dCB9fVxuXHRcdFx0XHRcdDwvdi1idG4+XG5cdFx0XHRcdFx0PHYtYnRuIGxhcmdlIEBjbGljaz1cImJhY2tcIj5cblx0XHRcdFx0XHTQndCw0LfQsNC0XG5cdFx0XHRcdFx0PC92LWJ0bj5cblx0XHRcdFx0PC9kaXY+XG5cdCAgXHRcdFxuXHQgIDwvZGl2PlxuICA8L2Rpdj5cdFx0XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnO1xuXHRpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdGlkOiB7XG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGlzYWJsZWQ6IHRydWUsXG5cdFx0XHRcdGRhdGU6IG51bGwsXG5cdCAgICAgIG1lbnU6IGZhbHNlLFxuXHQgICAgICBtb2RhbDogZmFsc2UsXG5cdCAgICAgIG5hbWU6ICcnLFxuXHQgICAgICB2YWxpZDogZmFsc2UsXG5cdCAgICAgIGRlZmF1bHRJdGVtOiB7fSxcblx0ICAgICAgbmFtZVJ1bGVzOiBbXG5cdCAgICAgICAgdiA9PiAhIXYgfHwgJ9CS0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LUnLFxuXHQgICAgICAgIHYgPT4gKHYgJiYgdi5sZW5ndGggPiAxKSB8fCAn0JjQvNGPINC00L7Qu9C20L3QviDRgdC+0LTQtdGA0LbQsNGC0Ywg0LzQuNC90LjQvNGD0LwgMiDQsdGD0LrQstGLJyxcblx0ICAgICAgXSxcblx0ICAgICAgZW1haWxSdWxlczogW1xuXHQgICAgICAgIHYgPT4gISF2IHx8ICfQktCy0LXQtNC40YLQtSBFLW1haWwnLFxuXHQgICAgICAgIHYgPT4gL15cXHcrKFsuLV0/XFx3KykqQFxcdysoWy4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLnRlc3QodikgfHwgJ9Cd0LUg0LLQsNC70LjQtNC90YvQuSBFLW1haWwnXG5cdCAgICAgIF0sXG5cdCAgICAgIHBvc2l0aW9uczogW1xuXHQgICAgICAgICfQodGC0LDRgNGI0LjQuSDRgdC+0YLRgNGD0LTQvdC40LonLFxuXHQgICAgICAgICfQkdGD0YXQs9Cw0LvRgtC10YAnLFxuXHQgICAgICAgICfQlNC40YDQtdC60YLQvtGAJyxcblx0ICAgICAgICAn0KHQvtGC0YDRg9C00L3QuNC6J1xuXHQgICAgICBdLFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdC4uLm1hcEdldHRlcnMoe1xuXHRcdFx0XHRpdGVtOiAnQWRtaW5FbXBsb3llZXMvZW1wbG95ZWUnXG5cdFx0XHR9KSxcblx0XHRcdGJ1dHRvblRleHQoKSB7XG5cdFx0XHRcdHJldHVybiAhdGhpcy5kaXNhYmxlZCA/IFwi0J7QsdC90L7QstC40YLRjFwiIDogXCLQmNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtVwiO1xuXHRcdFx0fSxcblx0XHRcdGF2YXRhcigpIHtcblx0XHRcdFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcIi9zdG9yYWdlL2F2YXRhcnMvbm8tYXZhdGFyLmpwZ1wiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyDQl9Cw0LPRgNGD0LfQutCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQv9C10YDQtdC0INC80L7QvdGC0LjRgNC+0LLQsNC90LjQtdC8INC60L7QvNC/0L7QvdC10L3RgtCwXG5cdFx0YmVmb3JlUm91dGVFbnRlciAodG8sIGZyb20sIG5leHQpIHtcbiAgICBcdG5leHQodm0gPT4gdm0uJHN0b3JlLmRpc3BhdGNoKCdBZG1pbkVtcGxveWVlcy9sb2FkT25lJywgdm0uaWQpKTtcbiAgXHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC4uLm1hcEFjdGlvbnMoe1xuXHRcdFx0XHRjaGFuZ2VJdGVtOiAnQWRtaW5FbXBsb3llZXMvZWRpdCcsXG5cdFx0XHR9KSxcblx0XHRcdGJ1dHRvbkFjdGlvbigpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VJdGVtKHRoaXMuaXRlbSk7XG5cdFx0XHRcdFx0dGhpcy5kZWZhdWx0SXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5kaXNhYmxlZCA9ICF0aGlzLmRpc2FibGVkO1x0XHRcblx0XHRcdH0sXG5cdFx0XHRiYWNrKCkge1x0XG5cdFx0XHRcdGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm4gdGhpcy4kcm91dGVyLmdvKC0xKTtcblx0XHRcdFx0dGhpcy5pdGVtID0gdGhpcy5kZWZhdWx0SXRlbTtcblx0XHRcdFx0dGhpcy5kaXNhYmxlZCA9ICF0aGlzLmRpc2FibGVkO1x0XHRcdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdGFzeW5jIHVwbG9hZFBob3RvKGUpIHtcblx0XHRcdFx0Y29uc3QgaW1hZ2VmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YXRhci1maWxlJykuZmlsZXNbMF07XG5cdFx0XHRcdGlmICghaW1hZ2VmaWxlKSByZXR1cm47XG5cdFx0ICAgIHRyeSB7XG5cdFx0ICAgIFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7ICAgIFx0XHRcdFx0ICAgIFx0XG5cdFx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VmaWxlKTtcblx0XHRcdFx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkICsgJy9hdmF0YXInLCBmb3JtRGF0YSwge1xuXHRcdFx0XHRcdCAgICAgaGVhZGVyczoge1xuXHRcdFx0XHRcdCAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG5cdFx0XHRcdFx0ICAgICB9XG5cdFx0XHRcdFx0IH0pO1xuXHRcdFx0XHRcdHRoaXMuaXRlbS5hdmF0YXIgPSBkYXRhO1xuICAgIFx0XHR9IGNhdGNoIChlKSB7XG4gICAgICBcdFx0Y29uc29sZS5lcnJvcign0J3QtSDQt9Cw0LPRgNGD0LfQuNC70YHRjyDQsNCy0LDRgtCw0YAnLCBlKVxuICAgIFx0XHR9XHRcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXHQqIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94Oztcblx0XHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdH1cblxuXHRoMiB7XG5cdFx0ZmxleC1iYXNpczogMTAwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHRwLFxuXHQuZW1wbG95ZWUsXG5cdC5hdmF0YXJfX292ZXJsYXkge1xuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XG5cdFx0ZGlzcGxheTogLW1zLWZsZXg7XG5cdFx0ZGlzcGxheTogLW8tZmxleDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG5cblx0cCB7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xuXHR9XG5cblx0cDpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG5cdH1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVcIiB9LCBbXG4gICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJlbXBsb3llZVwiKSkpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX19hdmF0YXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYXZhdGFyX19vdmVybGF5XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInVwbG9hZC1idXR0b25cIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0uJHQoXCJjaGFuZ2VfaW1hZ2VcIiksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYWxsYmFjazogX3ZtLnVwbG9hZFBob3RvXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uYXZhdGFyLCBhbHQ6IF92bS5pdGVtLmZpcnN0X25hbWUgfSB9KVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2Rlc2NyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwibmFtZVwiKSxcbiAgICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmZpcnN0X25hbWUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImZpcnN0X25hbWVcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5maXJzdF9uYW1lXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJsYXN0X25hbWVcIiksXG4gICAgICAgICAgICBydWxlczogX3ZtLm5hbWVSdWxlcyxcbiAgICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmxhc3RfbmFtZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwibGFzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ubGFzdF9uYW1lXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwYXRyb255bWljXCIpLFxuICAgICAgICAgICAgcnVsZXM6IF92bS5uYW1lUnVsZXMsXG4gICAgICAgICAgICBjb3VudGVyOiA3MCxcbiAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ucGF0cm9ueW1pYyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwicGF0cm9ueW1pY1wiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnBhdHJvbnltaWNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicG9zaXRpb25cIiksXG4gICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImNhcmRfdHJhdmVsXCIsXG4gICAgICAgICAgICBpdGVtczogX3ZtLnBvc2l0aW9ucyxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISF2IHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQtNC+0LvQttC90L7RgdGC0YxcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnBvc2l0aW9uLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJwb3NpdGlvblwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnBvc2l0aW9uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwaG9uZV9udW1iZXJcIiksXG4gICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInBob25lX2lwaG9uZVwiLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnBob25lX251bWJlcixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwicGhvbmVfbnVtYmVyXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucGhvbmVfbnVtYmVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJzYWxhcnlcIiksXG4gICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImF0dGFjaF9tb25leVwiLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnNhbGFyeSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwic2FsYXJ5XCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uc2FsYXJ5XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJhZGRyZXNzXCIpLFxuICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJob21lXCIsXG4gICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uYWRkcmVzcyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiYWRkcmVzc1wiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmFkZHJlc3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1tZW51XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJtZW51XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGF6eTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImNsb3NlLW9uLWNvbnRlbnQtY2xpY2tcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJzY2FsZS10cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJvZmZzZXQteVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZnVsbC13aWR0aFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibnVkZ2UtcmlnaHRcIjogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgXCJtaW4td2lkdGhcIjogXCIyOTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLXZhbHVlXCI6IF92bS5kYXRlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cmV0dXJuVmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZSA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1lbnUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lbnUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWVudVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJiaXJ0aGRheVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmJpcnRoZGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJiaXJ0aGRheVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmJpcnRoZGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAhX3ZtLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWRhdGUtcGlja2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLXRpdGxlXCI6IFwiXCIsIHNjcm9sbGFibGU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmJpcnRoZGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJiaXJ0aGRheVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmJpcnRoZGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZW51ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjYW5jZWxcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcmVmcy5tZW51LnNhdmUoX3ZtLmRhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhcmdlOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmJ1dHRvbkFjdGlvbigpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIgKyBfdm0uX3MoX3ZtLmJ1dHRvblRleHQpICsgXCJcXG5cXHRcXHRcXHRcXHRcXHRcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidi1idG5cIiwgeyBhdHRyczogeyBsYXJnZTogXCJcIiB9LCBvbjogeyBjbGljazogX3ZtLmJhY2sgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdNCd0LDQt9Cw0LRcXG5cXHRcXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01ZWI4N2NkMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSA2Il0sInNvdXJjZVJvb3QiOiIifQ==