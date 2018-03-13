webpackJsonp([27],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(197)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(199)
/* template */
var __vue_template__ = __webpack_require__(200)
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

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("486c0640", content, false);
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

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n\ttext-align: center;\n}\np[data-v-5eb87cd0],\n.employee[data-v-5eb87cd0],\n.avatar__overlay[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\np[data-v-5eb87cd0] {\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AAoMA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA,mBAAA;CACA;AAEA;;;CAIA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA","file":"Show.vue","sourcesContent":["<template>\n  <div class=\"employee\">\n  \t<h2>{{ $t('employee') }}</h2>\n  \t\t<div class=\"employee__avatar\">\n  \t\t\t<div class=\"employee__avatar-container\">\n  \t\t\t\t<div class=\"avatar__overlay\">\n  \t\t\t\t\t<upload-button :title=\"$t('change_image')\" :selectedCallback=\"uploadPhoto\"></upload-button>\n  \t\t\t\t</div>\n  \t\t\t\t<img :src=\"avatar\" :alt=\"item.first_name\">\n  \t\t\t</div>\t\n\t\t\t</div>\n\t  \t<div class=\"employee__descr\">\n\t  \t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('name')\"\n\t\t\t\t\t      v-model=\"item.first_name\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t\t    <v-text-field\n\t\t\t\t\t      :label=\"$t('last_name')\"\n\t\t\t\t\t      v-model=\"item.last_name\"\n\t\t\t\t\t      :rules=\"nameRules\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('patronymic')\"\n\t\t\t\t\t      v-model=\"item.patronymic\"\n\t\t\t\t\t      :rules=\"nameRules\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-select\n\t\t\t\t\t      :label=\"$t('position')\"\n\t\t\t\t\t      v-model=\"item.position\"\n\t\t\t\t\t      prepend-icon=\"card_travel\"\n\t\t\t\t\t      :items=\"positions\"\n\t\t\t\t\t      :rules=\"[v => !!v || 'Выберите должность']\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-select>\n\t  \t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('phone_number')\"\n\t\t\t\t\t      v-model=\"item.phone_number\"\n\t\t\t\t\t      prepend-icon=\"phone_iphone\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('salary')\"\n\t\t\t\t\t      v-model=\"item.salary\"\n\t\t\t\t\t      prepend-icon=\"attach_money\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('address')\"\n\t\t\t\t\t      v-model=\"item.address\"\n\t\t\t\t\t      prepend-icon=\"home\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-layout row wrap>\n\t\t\t\t\t<v-flex xs12>\n\t\t\t\t\t\t<v-menu\n\t\t\t\t\t\t  ref=\"menu\"\n\t\t\t\t\t\t  lazy\n\t\t\t\t\t\t  :close-on-content-click=\"false\"\n\t\t\t\t\t\t  v-model=\"menu\"\n\t\t\t\t\t\t  transition=\"scale-transition\"\n\t\t\t\t\t\t  offset-y\n\t\t\t\t\t\t  full-width\n\t\t\t\t\t\t  :nudge-right=\"40\"\n\t\t\t\t\t\t  min-width=\"290px\"\n\t\t\t\t\t\t  :return-value.sync=\"date\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t  <v-text-field\n\t\t\t\t\t\t    slot=\"activator\"\n\t\t\t\t\t\t    :label=\"$t('birthday')\"\n\t\t\t\t\t\t    v-model=\"item.birthday\"\n\t\t\t\t\t\t    prepend-icon=\"event\"\n\t\t\t\t\t\t    readonly\n\t\t\t\t\t\t    :disabled=\"disabled\"\n\t\t\t\t\t\t  ></v-text-field>\n\t\t\t\t\t\t  <v-date-picker v-if=\"!disabled\" v-model=\"item.birthday\" no-title scrollable>\n\t\t\t\t\t\t    <v-spacer></v-spacer>\n\t\t\t\t\t\t    <v-btn flat color=\"primary\" @click=\"menu = false\">{{ $t('cancel') }}</v-btn>\n\t\t\t\t\t\t    <v-btn flat color=\"primary\" @click=\"$refs.menu.save(date)\">{{ $t('ok') }}</v-btn>\n\t\t\t\t\t\t  </v-date-picker>\n\t\t\t\t\t\t</v-menu>\n\t\t\t\t\t</v-flex>\n\t\t\t\t</v-layout>\n\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t<v-btn large @click=\"buttonAction()\">\n\t\t\t\t\t{{ buttonText }}\n\t\t\t\t\t</v-btn>\n\t\t\t\t\t<v-btn large @click=\"back\">\n\t\t\t\t\tНазад\n\t\t\t\t\t</v-btn>\n\t\t\t\t</div>\n\t  \t\t\n\t  </div>\n  </div>\t\t\n</template>\n\n<script>\n\timport {mapActions, mapGetters} from 'vuex';\n\timport axios from 'axios';\n\texport default {\n\t\tmiddleware: 'auth',\n\t\tprops: {\n\t\t\tid: {\n\t\t\t\ttype: [Number, String],\n\t\t\t\trequired: true\n\t\t\t}\n\t\t},\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\tdisabled: true,\n\t\t\t\tdate: null,\n\t      menu: false,\n\t      modal: false,\n\t      name: '',\n\t      valid: false,\n\t      defaultItem: {},\n\t      nameRules: [\n\t        v => !!v || 'Введите значение',\n\t        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',\n\t      ],\n\t      emailRules: [\n\t        v => !!v || 'Введите E-mail',\n\t        v => /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(v) || 'Не валидный E-mail'\n\t      ],\n\t      positions: [\n\t        'Старший сотрудник',\n\t        'Бухгалтер',\n\t        'Директор',\n\t        'Сотрудник'\n\t      ],\n\t\t\t}\n\t\t},\n\t\tcomputed: {\n\t\t\t...mapGetters({\n\t\t\t\titem: 'AdminEmployees/employee'\n\t\t\t}),\n\t\t\tbuttonText() {\n\t\t\t\treturn !this.disabled ? \"Обновить\" : \"Изменить данные\";\n\t\t\t},\n\t\t\tavatar() {\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"/storage/avatars/no-avatar.jpg\"\n\t\t\t}\n\t\t},\n\t\t// Загрузка пользователя перед монтированием компонента\n\t\tbeforeRouteEnter (to, from, next) {\n    \tnext(vm => vm.$store.dispatch('AdminEmployees/loadOne', vm.id));\n  \t},\n\t\tmethods: {\n\t\t\t...mapActions({\n\t\t\t\tchangeItem: 'AdminEmployees/edit',\n\t\t\t}),\n\t\t\tbuttonAction() {\n\t\t\t\tif (!this.disabled) {\n\t\t\t\t\tthis.changeItem(this.item);\n\t\t\t\t}\n\t\t\t\tthis.defaultItem = Object.assign({}, this.item);\n\t\t\t\tthis.disabled = !this.disabled;\t\t\n\t\t\t},\n\t\t\tback() {\t\n\t\t\t\tif (this.disabled) return this.$router.go(-1);\n\t\t\t\tfor(let key in this.item) {\n\t\t\t\t\tthis.item[key] = this.defaultItem[key]\n\t\t\t\t}\n\t\t\t\tthis.disabled = !this.disabled;\t\t\t\t\t\t\n\t\t\t},\n\t\t\tasync uploadPhoto(e) {\n\t\t\t\tconst imagefile = document.getElementById('avatar-file').files[0];\n\t\t\t\tif (!imagefile) return;\n\t\t    try {\n\t\t    \tlet formData = new FormData();    \t\t\t\t    \t\n\t\t\t\t\tformData.append(\"image\", imagefile);\n\t\t\t\t\tconst { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {\n\t\t\t\t\t     headers: {\n\t\t\t\t\t       'Content-Type': 'multipart/form-data'\n\t\t\t\t\t     }\n\t\t\t\t\t });\n\t\t\t\t\tthis.item.avatar = data;\n    \t\t} catch (e) {\n      \t\tconsole.error('Не загрузился аватар', e)\n    \t\t}\t\n\t\t\t}\n\t\t}\n\t}\n</script>\n\n<style scoped>\n\t* {\n\t\tbox-sizing: border-box;;\n\t\tfont-family: 'Roboto', sans-serif;\n\t}\n\n\th2 {\n\t\tflex-basis: 100%;\n\t\ttext-align: center;\n\t}\n\n\tp,\n\t.employee,\n\t.avatar__overlay {\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: -o-flex;\n\t\tdisplay: flex;\n\t}\n\n\tp {\n\t\tjustify-content: space-between;\n\t\tmargin: 0;\n\t\tpadding: 10px;\n\t\ttransition: background-color .3s;\n\t}\n\n\tp:hover {\n\t\tbackground-color: rgba(255, 255, 255, .1);\n\t}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 199:
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
	middleware: 'auth',
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
			}
			this.defaultItem = Object.assign({}, this.item);
			this.disabled = !this.disabled;
		},
		back: function back() {
			if (this.disabled) return this.$router.go(-1);
			for (var key in this.item) {
				this.item[key] = this.defaultItem[key];
			}
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

/***/ 200:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwrQ0FBZ0QsbUNBQW1DLG9DQUFvQyxzQ0FBc0MsR0FBRyx1QkFBdUIs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O0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpQ0FBaUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsNkJBQTZCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDZCQUE2QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseUJBQXlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUyxZQUFZLE9BQU8sa0JBQWtCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzI3LjI5ZDg3ZDAyYjNkNGE1ZGY4YzljLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTVlYjg3Y2QwXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZW1wbG95ZWVzXFxcXFNob3cudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlYjg3Y2QwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWViODdjZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAyNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0ODZjMDY0MFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDI3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbipbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdCAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDs7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5oMltkYXRhLXYtNWViODdjZDBdIHtcXG5cXHQtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG5cXHQgICAgZmxleC1iYXNpczogMTAwJTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXSxcXG4uZW1wbG95ZWVbZGF0YS12LTVlYjg3Y2QwXSxcXG4uYXZhdGFyX19vdmVybGF5W2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG5cXHQgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcbn1cXG5wW2RhdGEtdi01ZWI4N2NkMF06aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBb01BO0NBQ0EsK0JBQUE7U0FBQSx1QkFBQTtDQUNBLGtDQUFBO0NBQ0E7QUFFQTtDQUNBLDhCQUFBO0tBQUEsaUJBQUE7Q0FDQSxtQkFBQTtDQUNBO0FBRUE7OztDQUlBLG1CQUFBO0NBQ0Esa0JBQUE7Q0FDQSxpQkFBQTtDQUNBLHFCQUFBO0NBQUEscUJBQUE7Q0FBQSxjQUFBO0NBQ0E7QUFFQTtDQUNBLDBCQUFBO0tBQUEsdUJBQUE7U0FBQSwrQkFBQTtDQUNBLFVBQUE7Q0FDQSxjQUFBO0NBQ0EseUNBQUE7Q0FBQSxpQ0FBQTtDQUNBO0FBRUE7Q0FDQSwwQ0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJTaG93LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZVxcXCI+XFxuICBcXHQ8aDI+e3sgJHQoJ2VtcGxveWVlJykgfX08L2gyPlxcbiAgXFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2F2YXRhclxcXCI+XFxuICBcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lclxcXCI+XFxuICBcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJhdmF0YXJfX292ZXJsYXlcXFwiPlxcbiAgXFx0XFx0XFx0XFx0XFx0PHVwbG9hZC1idXR0b24gOnRpdGxlPVxcXCIkdCgnY2hhbmdlX2ltYWdlJylcXFwiIDpzZWxlY3RlZENhbGxiYWNrPVxcXCJ1cGxvYWRQaG90b1xcXCI+PC91cGxvYWQtYnV0dG9uPlxcbiAgXFx0XFx0XFx0XFx0PC9kaXY+XFxuICBcXHRcXHRcXHRcXHQ8aW1nIDpzcmM9XFxcImF2YXRhclxcXCIgOmFsdD1cXFwiaXRlbS5maXJzdF9uYW1lXFxcIj5cXG4gIFxcdFxcdFxcdDwvZGl2PlxcdFxcblxcdFxcdFxcdDwvZGl2PlxcblxcdCAgXFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2Rlc2NyXFxcIj5cXG5cXHQgIFxcdFxcdDx2LXRleHQtZmllbGRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCduYW1lJylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5maXJzdF9uYW1lXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCI3MFxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuXFx0XFx0XFx0XFx0Pjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdFxcdCAgICA8di10ZXh0LWZpZWxkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgnbGFzdF9uYW1lJylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5sYXN0X25hbWVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJuYW1lUnVsZXNcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmNvdW50ZXI9XFxcIjcwXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXG5cXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxuXFx0XFx0XFx0XFx0PHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3BhdHJvbnltaWMnKVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLnBhdHJvbnltaWNcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJuYW1lUnVsZXNcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmNvdW50ZXI9XFxcIjcwXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuXFx0XFx0XFx0XFx0Pjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdDx2LXNlbGVjdFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3Bvc2l0aW9uJylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5wb3NpdGlvblxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICBwcmVwZW5kLWljb249XFxcImNhcmRfdHJhdmVsXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDppdGVtcz1cXFwicG9zaXRpb25zXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwiW3YgPT4gISF2IHx8ICfQktGL0LHQtdGA0LjRgtC1INC00L7Qu9C20L3QvtGB0YLRjCddXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXG5cXHRcXHRcXHRcXHQ+PC92LXNlbGVjdD5cXG5cXHQgIFxcdFxcdDx2LXRleHQtZmllbGRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdwaG9uZV9udW1iZXInKVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLnBob25lX251bWJlclxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICBwcmVwZW5kLWljb249XFxcInBob25lX2lwaG9uZVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuXFx0XFx0XFx0XFx0Pjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdDx2LXRleHQtZmllbGRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdzYWxhcnknKVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLnNhbGFyeVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICBwcmVwZW5kLWljb249XFxcImF0dGFjaF9tb25leVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuXFx0XFx0XFx0XFx0Pjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdDx2LXRleHQtZmllbGRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdhZGRyZXNzJylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5hZGRyZXNzXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiaG9tZVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuXFx0XFx0XFx0XFx0Pjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdDx2LWxheW91dCByb3cgd3JhcD5cXG5cXHRcXHRcXHRcXHRcXHQ8di1mbGV4IHhzMTI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PHYtbWVudVxcblxcdFxcdFxcdFxcdFxcdFxcdCAgcmVmPVxcXCJtZW51XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgbGF6eVxcblxcdFxcdFxcdFxcdFxcdFxcdCAgOmNsb3NlLW9uLWNvbnRlbnQtY2xpY2s9XFxcImZhbHNlXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgdi1tb2RlbD1cXFwibWVudVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIHRyYW5zaXRpb249XFxcInNjYWxlLXRyYW5zaXRpb25cXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICBvZmZzZXQteVxcblxcdFxcdFxcdFxcdFxcdFxcdCAgZnVsbC13aWR0aFxcblxcdFxcdFxcdFxcdFxcdFxcdCAgOm51ZGdlLXJpZ2h0PVxcXCI0MFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIG1pbi13aWR0aD1cXFwiMjkwcHhcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA6cmV0dXJuLXZhbHVlLnN5bmM9XFxcImRhdGVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgPHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICBzbG90PVxcXCJhY3RpdmF0b3JcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDpsYWJlbD1cXFwiJHQoJ2JpcnRoZGF5JylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIHYtbW9kZWw9XFxcIml0ZW0uYmlydGhkYXlcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIHByZXBlbmQtaWNvbj1cXFwiZXZlbnRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIHJlYWRvbmx5XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA+PC92LXRleHQtZmllbGQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA8di1kYXRlLXBpY2tlciB2LWlmPVxcXCIhZGlzYWJsZWRcXFwiIHYtbW9kZWw9XFxcIml0ZW0uYmlydGhkYXlcXFwiIG5vLXRpdGxlIHNjcm9sbGFibGU+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICA8di1idG4gZmxhdCBjb2xvcj1cXFwicHJpbWFyeVxcXCIgQGNsaWNrPVxcXCJtZW51ID0gZmFsc2VcXFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDx2LWJ0biBmbGF0IGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBAY2xpY2s9XFxcIiRyZWZzLm1lbnUuc2F2ZShkYXRlKVxcXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgPC92LWRhdGUtcGlja2VyPlxcblxcdFxcdFxcdFxcdFxcdFxcdDwvdi1tZW51PlxcblxcdFxcdFxcdFxcdFxcdDwvdi1mbGV4PlxcblxcdFxcdFxcdFxcdDwvdi1sYXlvdXQ+XFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiYnV0dG9uc1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PHYtYnRuIGxhcmdlIEBjbGljaz1cXFwiYnV0dG9uQWN0aW9uKClcXFwiPlxcblxcdFxcdFxcdFxcdFxcdHt7IGJ1dHRvblRleHQgfX1cXG5cXHRcXHRcXHRcXHRcXHQ8L3YtYnRuPlxcblxcdFxcdFxcdFxcdFxcdDx2LWJ0biBsYXJnZSBAY2xpY2s9XFxcImJhY2tcXFwiPlxcblxcdFxcdFxcdFxcdFxcdNCd0LDQt9Cw0LRcXG5cXHRcXHRcXHRcXHRcXHQ8L3YtYnRuPlxcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdCAgXFx0XFx0XFxuXFx0ICA8L2Rpdj5cXG4gIDwvZGl2PlxcdFxcdFxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXHRpbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnO1xcblxcdGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XFxuXFx0ZXhwb3J0IGRlZmF1bHQge1xcblxcdFxcdG1pZGRsZXdhcmU6ICdhdXRoJyxcXG5cXHRcXHRwcm9wczoge1xcblxcdFxcdFxcdGlkOiB7XFxuXFx0XFx0XFx0XFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcXG5cXHRcXHRcXHRcXHRyZXF1aXJlZDogdHJ1ZVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9LFxcblxcdFxcdGRhdGEoKSB7XFxuXFx0XFx0XFx0cmV0dXJuIHtcXG5cXHRcXHRcXHRcXHRkaXNhYmxlZDogdHJ1ZSxcXG5cXHRcXHRcXHRcXHRkYXRlOiBudWxsLFxcblxcdCAgICAgIG1lbnU6IGZhbHNlLFxcblxcdCAgICAgIG1vZGFsOiBmYWxzZSxcXG5cXHQgICAgICBuYW1lOiAnJyxcXG5cXHQgICAgICB2YWxpZDogZmFsc2UsXFxuXFx0ICAgICAgZGVmYXVsdEl0ZW06IHt9LFxcblxcdCAgICAgIG5hbWVSdWxlczogW1xcblxcdCAgICAgICAgdiA9PiAhIXYgfHwgJ9CS0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LUnLFxcblxcdCAgICAgICAgdiA9PiAodiAmJiB2Lmxlbmd0aCA+IDEpIHx8ICfQmNC80Y8g0LTQvtC70LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDQvNC40L3QuNC80YPQvCAyINCx0YPQutCy0YsnLFxcblxcdCAgICAgIF0sXFxuXFx0ICAgICAgZW1haWxSdWxlczogW1xcblxcdCAgICAgICAgdiA9PiAhIXYgfHwgJ9CS0LLQtdC00LjRgtC1IEUtbWFpbCcsXFxuXFx0ICAgICAgICB2ID0+IC9eXFxcXHcrKFsuLV0/XFxcXHcrKSpAXFxcXHcrKFsuLV0/XFxcXHcrKSooXFxcXC5cXFxcd3syLDN9KSskLy50ZXN0KHYpIHx8ICfQndC1INCy0LDQu9C40LTQvdGL0LkgRS1tYWlsJ1xcblxcdCAgICAgIF0sXFxuXFx0ICAgICAgcG9zaXRpb25zOiBbXFxuXFx0ICAgICAgICAn0KHRgtCw0YDRiNC40Lkg0YHQvtGC0YDRg9C00L3QuNC6JyxcXG5cXHQgICAgICAgICfQkdGD0YXQs9Cw0LvRgtC10YAnLFxcblxcdCAgICAgICAgJ9CU0LjRgNC10LrRgtC+0YAnLFxcblxcdCAgICAgICAgJ9Ch0L7RgtGA0YPQtNC90LjQuidcXG5cXHQgICAgICBdLFxcblxcdFxcdFxcdH1cXG5cXHRcXHR9LFxcblxcdFxcdGNvbXB1dGVkOiB7XFxuXFx0XFx0XFx0Li4ubWFwR2V0dGVycyh7XFxuXFx0XFx0XFx0XFx0aXRlbTogJ0FkbWluRW1wbG95ZWVzL2VtcGxveWVlJ1xcblxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdGJ1dHRvblRleHQoKSB7XFxuXFx0XFx0XFx0XFx0cmV0dXJuICF0aGlzLmRpc2FibGVkID8gXFxcItCe0LHQvdC+0LLQuNGC0YxcXFwiIDogXFxcItCY0LfQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1XFxcIjtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdFxcdGF2YXRhcigpIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy5pdGVtLmF2YXRhciA6IFxcXCIvc3RvcmFnZS9hdmF0YXJzL25vLWF2YXRhci5qcGdcXFwiXFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0Ly8g0JfQsNCz0YDRg9C30LrQsCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0L/QtdGA0LXQtCDQvNC+0L3RgtC40YDQvtCy0LDQvdC40LXQvCDQutC+0LzQv9C+0L3QtdC90YLQsFxcblxcdFxcdGJlZm9yZVJvdXRlRW50ZXIgKHRvLCBmcm9tLCBuZXh0KSB7XFxuICAgIFxcdG5leHQodm0gPT4gdm0uJHN0b3JlLmRpc3BhdGNoKCdBZG1pbkVtcGxveWVlcy9sb2FkT25lJywgdm0uaWQpKTtcXG4gIFxcdH0sXFxuXFx0XFx0bWV0aG9kczoge1xcblxcdFxcdFxcdC4uLm1hcEFjdGlvbnMoe1xcblxcdFxcdFxcdFxcdGNoYW5nZUl0ZW06ICdBZG1pbkVtcGxveWVlcy9lZGl0JyxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRidXR0b25BY3Rpb24oKSB7XFxuXFx0XFx0XFx0XFx0aWYgKCF0aGlzLmRpc2FibGVkKSB7XFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5jaGFuZ2VJdGVtKHRoaXMuaXRlbSk7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdHRoaXMuZGVmYXVsdEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLml0ZW0pO1xcblxcdFxcdFxcdFxcdHRoaXMuZGlzYWJsZWQgPSAhdGhpcy5kaXNhYmxlZDtcXHRcXHRcXG5cXHRcXHRcXHR9LFxcblxcdFxcdFxcdGJhY2soKSB7XFx0XFxuXFx0XFx0XFx0XFx0aWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybiB0aGlzLiRyb3V0ZXIuZ28oLTEpO1xcblxcdFxcdFxcdFxcdGZvcihsZXQga2V5IGluIHRoaXMuaXRlbSkge1xcblxcdFxcdFxcdFxcdFxcdHRoaXMuaXRlbVtrZXldID0gdGhpcy5kZWZhdWx0SXRlbVtrZXldXFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdHRoaXMuZGlzYWJsZWQgPSAhdGhpcy5kaXNhYmxlZDtcXHRcXHRcXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHR9LFxcblxcdFxcdFxcdGFzeW5jIHVwbG9hZFBob3RvKGUpIHtcXG5cXHRcXHRcXHRcXHRjb25zdCBpbWFnZWZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhdGFyLWZpbGUnKS5maWxlc1swXTtcXG5cXHRcXHRcXHRcXHRpZiAoIWltYWdlZmlsZSkgcmV0dXJuO1xcblxcdFxcdCAgICB0cnkge1xcblxcdFxcdCAgICBcXHRsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsgICAgXFx0XFx0XFx0XFx0ICAgIFxcdFxcblxcdFxcdFxcdFxcdFxcdGZvcm1EYXRhLmFwcGVuZChcXFwiaW1hZ2VcXFwiLCBpbWFnZWZpbGUpO1xcblxcdFxcdFxcdFxcdFxcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQgKyAnL2F2YXRhcicsIGZvcm1EYXRhLCB7XFxuXFx0XFx0XFx0XFx0XFx0ICAgICBoZWFkZXJzOiB7XFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcXG5cXHRcXHRcXHRcXHRcXHQgICAgIH1cXG5cXHRcXHRcXHRcXHRcXHQgfSk7XFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5pdGVtLmF2YXRhciA9IGRhdGE7XFxuICAgIFxcdFxcdH0gY2F0Y2ggKGUpIHtcXG4gICAgICBcXHRcXHRjb25zb2xlLmVycm9yKCfQndC1INC30LDQs9GA0YPQt9C40LvRgdGPINCw0LLQsNGC0LDRgCcsIGUpXFxuICAgIFxcdFxcdH1cXHRcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcblxcdCoge1xcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcblxcdFxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHR9XFxuXFxuXFx0aDIge1xcblxcdFxcdGZsZXgtYmFzaXM6IDEwMCU7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXG5cXHRwLFxcblxcdC5lbXBsb3llZSxcXG5cXHQuYXZhdGFyX19vdmVybGF5IHtcXG5cXHRcXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdFxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdFxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHR9XFxuXFxuXFx0cCB7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHRcXHRwYWRkaW5nOiAxMHB4O1xcblxcdFxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcblxcdH1cXG5cXG5cXHRwOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXG5cXHR9XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDI3IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZW1wbG95ZWVcIj5cbiAgXHQ8aDI+e3sgJHQoJ2VtcGxveWVlJykgfX08L2gyPlxuICBcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXJcIj5cbiAgXHRcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXCI+XG4gIFx0XHRcdFx0PGRpdiBjbGFzcz1cImF2YXRhcl9fb3ZlcmxheVwiPlxuICBcdFx0XHRcdFx0PHVwbG9hZC1idXR0b24gOnRpdGxlPVwiJHQoJ2NoYW5nZV9pbWFnZScpXCIgOnNlbGVjdGVkQ2FsbGJhY2s9XCJ1cGxvYWRQaG90b1wiPjwvdXBsb2FkLWJ1dHRvbj5cbiAgXHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0XHQ8aW1nIDpzcmM9XCJhdmF0YXJcIiA6YWx0PVwiaXRlbS5maXJzdF9uYW1lXCI+XG4gIFx0XHRcdDwvZGl2Plx0XG5cdFx0XHQ8L2Rpdj5cblx0ICBcdDxkaXYgY2xhc3M9XCJlbXBsb3llZV9fZGVzY3JcIj5cblx0ICBcdFx0PHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCduYW1lJylcIlxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLmZpcnN0X25hbWVcIlxuXHRcdFx0XHRcdCAgICAgIDpjb3VudGVyPVwiNzBcIlxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXG5cdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XG5cdFx0XHRcdFx0ICAgIDx2LXRleHQtZmllbGRcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnbGFzdF9uYW1lJylcIlxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLmxhc3RfbmFtZVwiXG5cdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwibmFtZVJ1bGVzXCJcblx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxuXHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxuXHRcdFx0XHQ8di10ZXh0LWZpZWxkXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3BhdHJvbnltaWMnKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucGF0cm9ueW1pY1wiXG5cdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwibmFtZVJ1bGVzXCJcblx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcblx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cblx0XHRcdFx0PHYtc2VsZWN0XG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3Bvc2l0aW9uJylcIlxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLnBvc2l0aW9uXCJcblx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJjYXJkX3RyYXZlbFwiXG5cdFx0XHRcdFx0ICAgICAgOml0ZW1zPVwicG9zaXRpb25zXCJcblx0XHRcdFx0XHQgICAgICA6cnVsZXM9XCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMJ11cIlxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXG5cdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHQ+PC92LXNlbGVjdD5cblx0ICBcdFx0PHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdwaG9uZV9udW1iZXInKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucGhvbmVfbnVtYmVyXCJcblx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJwaG9uZV9pcGhvbmVcIlxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXG5cdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XG5cdFx0XHRcdDx2LXRleHQtZmllbGRcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnc2FsYXJ5JylcIlxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLnNhbGFyeVwiXG5cdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwiYXR0YWNoX21vbmV5XCJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxuXHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxuXHRcdFx0XHQ8di10ZXh0LWZpZWxkXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ2FkZHJlc3MnKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0uYWRkcmVzc1wiXG5cdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwiaG9tZVwiXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcblx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cblx0XHRcdFx0PHYtbGF5b3V0IHJvdyB3cmFwPlxuXHRcdFx0XHRcdDx2LWZsZXggeHMxMj5cblx0XHRcdFx0XHRcdDx2LW1lbnVcblx0XHRcdFx0XHRcdCAgcmVmPVwibWVudVwiXG5cdFx0XHRcdFx0XHQgIGxhenlcblx0XHRcdFx0XHRcdCAgOmNsb3NlLW9uLWNvbnRlbnQtY2xpY2s9XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHQgIHYtbW9kZWw9XCJtZW51XCJcblx0XHRcdFx0XHRcdCAgdHJhbnNpdGlvbj1cInNjYWxlLXRyYW5zaXRpb25cIlxuXHRcdFx0XHRcdFx0ICBvZmZzZXQteVxuXHRcdFx0XHRcdFx0ICBmdWxsLXdpZHRoXG5cdFx0XHRcdFx0XHQgIDpudWRnZS1yaWdodD1cIjQwXCJcblx0XHRcdFx0XHRcdCAgbWluLXdpZHRoPVwiMjkwcHhcIlxuXHRcdFx0XHRcdFx0ICA6cmV0dXJuLXZhbHVlLnN5bmM9XCJkYXRlXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdCAgPHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdFx0ICAgIHNsb3Q9XCJhY3RpdmF0b3JcIlxuXHRcdFx0XHRcdFx0ICAgIDpsYWJlbD1cIiR0KCdiaXJ0aGRheScpXCJcblx0XHRcdFx0XHRcdCAgICB2LW1vZGVsPVwiaXRlbS5iaXJ0aGRheVwiXG5cdFx0XHRcdFx0XHQgICAgcHJlcGVuZC1pY29uPVwiZXZlbnRcIlxuXHRcdFx0XHRcdFx0ICAgIHJlYWRvbmx5XG5cdFx0XHRcdFx0XHQgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdFx0ICA+PC92LXRleHQtZmllbGQ+XG5cdFx0XHRcdFx0XHQgIDx2LWRhdGUtcGlja2VyIHYtaWY9XCIhZGlzYWJsZWRcIiB2LW1vZGVsPVwiaXRlbS5iaXJ0aGRheVwiIG5vLXRpdGxlIHNjcm9sbGFibGU+XG5cdFx0XHRcdFx0XHQgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG5cdFx0XHRcdFx0XHQgICAgPHYtYnRuIGZsYXQgY29sb3I9XCJwcmltYXJ5XCIgQGNsaWNrPVwibWVudSA9IGZhbHNlXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj5cblx0XHRcdFx0XHRcdCAgICA8di1idG4gZmxhdCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCIkcmVmcy5tZW51LnNhdmUoZGF0ZSlcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XG5cdFx0XHRcdFx0XHQgIDwvdi1kYXRlLXBpY2tlcj5cblx0XHRcdFx0XHRcdDwvdi1tZW51PlxuXHRcdFx0XHRcdDwvdi1mbGV4PlxuXHRcdFx0XHQ8L3YtbGF5b3V0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuXHRcdFx0XHRcdDx2LWJ0biBsYXJnZSBAY2xpY2s9XCJidXR0b25BY3Rpb24oKVwiPlxuXHRcdFx0XHRcdHt7IGJ1dHRvblRleHQgfX1cblx0XHRcdFx0XHQ8L3YtYnRuPlxuXHRcdFx0XHRcdDx2LWJ0biBsYXJnZSBAY2xpY2s9XCJiYWNrXCI+XG5cdFx0XHRcdFx00J3QsNC30LDQtFxuXHRcdFx0XHRcdDwvdi1idG4+XG5cdFx0XHRcdDwvZGl2PlxuXHQgIFx0XHRcblx0ICA8L2Rpdj5cbiAgPC9kaXY+XHRcdFxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4Jztcblx0aW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG1pZGRsZXdhcmU6ICdhdXRoJyxcblx0XHRwcm9wczoge1xuXHRcdFx0aWQ6IHtcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0XHRcdFx0ZGF0ZTogbnVsbCxcblx0ICAgICAgbWVudTogZmFsc2UsXG5cdCAgICAgIG1vZGFsOiBmYWxzZSxcblx0ICAgICAgbmFtZTogJycsXG5cdCAgICAgIHZhbGlkOiBmYWxzZSxcblx0ICAgICAgZGVmYXVsdEl0ZW06IHt9LFxuXHQgICAgICBuYW1lUnVsZXM6IFtcblx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtScsXG5cdCAgICAgICAgdiA9PiAodiAmJiB2Lmxlbmd0aCA+IDEpIHx8ICfQmNC80Y8g0LTQvtC70LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDQvNC40L3QuNC80YPQvCAyINCx0YPQutCy0YsnLFxuXHQgICAgICBdLFxuXHQgICAgICBlbWFpbFJ1bGVzOiBbXG5cdCAgICAgICAgdiA9PiAhIXYgfHwgJ9CS0LLQtdC00LjRgtC1IEUtbWFpbCcsXG5cdCAgICAgICAgdiA9PiAvXlxcdysoWy4tXT9cXHcrKSpAXFx3KyhbLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8udGVzdCh2KSB8fCAn0J3QtSDQstCw0LvQuNC00L3Ri9C5IEUtbWFpbCdcblx0ICAgICAgXSxcblx0ICAgICAgcG9zaXRpb25zOiBbXG5cdCAgICAgICAgJ9Ch0YLQsNGA0YjQuNC5INGB0L7RgtGA0YPQtNC90LjQuicsXG5cdCAgICAgICAgJ9CR0YPRhdCz0LDQu9GC0LXRgCcsXG5cdCAgICAgICAgJ9CU0LjRgNC10LrRgtC+0YAnLFxuXHQgICAgICAgICfQodC+0YLRgNGD0LTQvdC40LonXG5cdCAgICAgIF0sXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0Li4ubWFwR2V0dGVycyh7XG5cdFx0XHRcdGl0ZW06ICdBZG1pbkVtcGxveWVlcy9lbXBsb3llZSdcblx0XHRcdH0pLFxuXHRcdFx0YnV0dG9uVGV4dCgpIHtcblx0XHRcdFx0cmV0dXJuICF0aGlzLmRpc2FibGVkID8gXCLQntCx0L3QvtCy0LjRgtGMXCIgOiBcItCY0LfQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1XCI7XG5cdFx0XHR9LFxuXHRcdFx0YXZhdGFyKCkge1xuXHRcdFx0XHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy5pdGVtLmF2YXRhciA6IFwiL3N0b3JhZ2UvYXZhdGFycy9uby1hdmF0YXIuanBnXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vINCX0LDQs9GA0YPQt9C60LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0LXRgNC10LQg0LzQvtC90YLQuNGA0L7QstCw0L3QuNC10Lwg0LrQvtC80L/QvtC90LXQvdGC0LBcblx0XHRiZWZvcmVSb3V0ZUVudGVyICh0bywgZnJvbSwgbmV4dCkge1xuICAgIFx0bmV4dCh2bSA9PiB2bS4kc3RvcmUuZGlzcGF0Y2goJ0FkbWluRW1wbG95ZWVzL2xvYWRPbmUnLCB2bS5pZCkpO1xuICBcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XG5cdFx0XHRcdGNoYW5nZUl0ZW06ICdBZG1pbkVtcGxveWVlcy9lZGl0Jyxcblx0XHRcdH0pLFxuXHRcdFx0YnV0dG9uQWN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZUl0ZW0odGhpcy5pdGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmRlZmF1bHRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pdGVtKTtcblx0XHRcdFx0dGhpcy5kaXNhYmxlZCA9ICF0aGlzLmRpc2FibGVkO1x0XHRcblx0XHRcdH0sXG5cdFx0XHRiYWNrKCkge1x0XG5cdFx0XHRcdGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm4gdGhpcy4kcm91dGVyLmdvKC0xKTtcblx0XHRcdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5pdGVtKSB7XG5cdFx0XHRcdFx0dGhpcy5pdGVtW2tleV0gPSB0aGlzLmRlZmF1bHRJdGVtW2tleV1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQ7XHRcdFx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgdXBsb2FkUGhvdG8oZSkge1xuXHRcdFx0XHRjb25zdCBpbWFnZWZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhdGFyLWZpbGUnKS5maWxlc1swXTtcblx0XHRcdFx0aWYgKCFpbWFnZWZpbGUpIHJldHVybjtcblx0XHQgICAgdHJ5IHtcblx0XHQgICAgXHRsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsgICAgXHRcdFx0XHQgICAgXHRcblx0XHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZWZpbGUpO1xuXHRcdFx0XHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQgKyAnL2F2YXRhcicsIGZvcm1EYXRhLCB7XG5cdFx0XHRcdFx0ICAgICBoZWFkZXJzOiB7XG5cdFx0XHRcdFx0ICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcblx0XHRcdFx0XHQgICAgIH1cblx0XHRcdFx0XHQgfSk7XG5cdFx0XHRcdFx0dGhpcy5pdGVtLmF2YXRhciA9IGRhdGE7XG4gICAgXHRcdH0gY2F0Y2ggKGUpIHtcbiAgICAgIFx0XHRjb25zb2xlLmVycm9yKCfQndC1INC30LDQs9GA0YPQt9C40LvRgdGPINCw0LLQsNGC0LDRgCcsIGUpXG4gICAgXHRcdH1cdFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cdCoge1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xuXHRcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblx0fVxuXG5cdGgyIHtcblx0XHRmbGV4LWJhc2lzOiAxMDAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdHAsXG5cdC5lbXBsb3llZSxcblx0LmF2YXRhcl9fb3ZlcmxheSB7XG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRcdGRpc3BsYXk6IC1tb3otZmxleDtcblx0XHRkaXNwbGF5OiAtbXMtZmxleDtcblx0XHRkaXNwbGF5OiAtby1mbGV4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdH1cblxuXHRwIHtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XG5cdH1cblxuXHRwOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcblx0fVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZVwiIH0sIFtcbiAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImVtcGxveWVlXCIpKSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhdmF0YXJfX292ZXJsYXlcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidXBsb2FkLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IF92bS4kdChcImNoYW5nZV9pbWFnZVwiKSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhbGxiYWNrOiBfdm0udXBsb2FkUGhvdG9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5hdmF0YXIsIGFsdDogX3ZtLml0ZW0uZmlyc3RfbmFtZSB9IH0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fZGVzY3JcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uZmlyc3RfbmFtZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiZmlyc3RfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmZpcnN0X25hbWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImxhc3RfbmFtZVwiKSxcbiAgICAgICAgICAgIHJ1bGVzOiBfdm0ubmFtZVJ1bGVzLFxuICAgICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ubGFzdF9uYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJsYXN0X25hbWVcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5sYXN0X25hbWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInBhdHJvbnltaWNcIiksXG4gICAgICAgICAgICBydWxlczogX3ZtLm5hbWVSdWxlcyxcbiAgICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5wYXRyb255bWljLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJwYXRyb255bWljXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucGF0cm9ueW1pY1wiXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwb3NpdGlvblwiKSxcbiAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiY2FyZF90cmF2ZWxcIixcbiAgICAgICAgICAgIGl0ZW1zOiBfdm0ucG9zaXRpb25zLFxuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIXYgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC00L7Qu9C20L3QvtGB0YLRjFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ucG9zaXRpb24sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInBvc2l0aW9uXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucG9zaXRpb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInBob25lX251bWJlclwiKSxcbiAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwicGhvbmVfaXBob25lXCIsXG4gICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ucGhvbmVfbnVtYmVyLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJwaG9uZV9udW1iZXJcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5waG9uZV9udW1iZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInNhbGFyeVwiKSxcbiAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiYXR0YWNoX21vbmV5XCIsXG4gICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uc2FsYXJ5LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJzYWxhcnlcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5zYWxhcnlcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImFkZHJlc3NcIiksXG4gICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImhvbWVcIixcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5hZGRyZXNzLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJhZGRyZXNzXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uYWRkcmVzc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LW1lbnVcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcIm1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYXp5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2Utb24tY29udGVudC1jbGlja1wiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInNjYWxlLXRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBcIm9mZnNldC15XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJmdWxsLXdpZHRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJudWRnZS1yaWdodFwiOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgICBcIm1pbi13aWR0aFwiOiBcIjI5MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm4tdmFsdWVcIjogX3ZtLmRhdGVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpyZXR1cm5WYWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWVudSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVudSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImJpcnRoZGF5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJldmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uYmlydGhkYXksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImJpcnRoZGF5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uYmlydGhkYXlcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICFfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZGF0ZS1waWNrZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tdGl0bGVcIjogXCJcIiwgc2Nyb2xsYWJsZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uYmlydGhkYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImJpcnRoZGF5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uYmlydGhkYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lbnUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRyZWZzLm1lbnUuc2F2ZShfdm0uZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJva1wiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFyZ2U6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uYnV0dG9uQWN0aW9uKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiArIF92bS5fcyhfdm0uYnV0dG9uVGV4dCkgKyBcIlxcblxcdFxcdFxcdFxcdFxcdFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ2LWJ0blwiLCB7IGF0dHJzOiB7IGxhcmdlOiBcIlwiIH0sIG9uOiB7IGNsaWNrOiBfdm0uYmFjayB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx00J3QsNC30LDQtFxcblxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVlYjg3Y2QwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDI3Il0sInNvdXJjZVJvb3QiOiIifQ==