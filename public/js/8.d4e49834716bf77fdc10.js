webpackJsonp([8],{

/***/ 147:
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

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n\ttext-align: center;\n}\np[data-v-5eb87cd0],\n.employee[data-v-5eb87cd0],\n.avatar__overlay[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\np[data-v-5eb87cd0] {\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AA0MA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA,mBAAA;CACA;AAEA;;;CAIA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA","file":"Show.vue","sourcesContent":["<template>\n  <div class=\"employee\">\n  \t<h2>{{ $t('employee') }}</h2>\n  \t\t<div class=\"employee__avatar\">\n  \t\t\t<div class=\"employee__avatar-container\">\n  \t\t\t\t<div class=\"avatar__overlay\">\n  \t\t\t\t\t<upload-button :title=\"$t('change_image')\" :selectedCallback=\"uploadPhoto\"></upload-button>\n  \t\t\t\t</div>\n  \t\t\t\t<img :src=\"avatar\" :alt=\"item.first_name\">\n  \t\t\t</div>\t\n\t\t\t</div>\n\t  \t<div class=\"employee__descr\">\n\t  \t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('name')\"\n\t\t\t\t\t      v-model=\"item.first_name\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t\t    <v-text-field\n\t\t\t\t\t      :label=\"$t('last_name')\"\n\t\t\t\t\t      v-model=\"item.last_name\"\n\t\t\t\t\t      :rules=\"nameRules\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('patronymic')\"\n\t\t\t\t\t      v-model=\"item.patronymic\"\n\t\t\t\t\t      :rules=\"nameRules\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n<!-- \t\t\t\t<select name=\"positions\">\n\t\t\t\t\t<option v-for=\"position in positions\" :value=\"position.id\">{{position.title}}</option>\n\t\t\t\t</select> -->\n\t\t\t\t<v-select\n\t\t\t\t\t      :label=\"$t('position')\"\n\t\t\t\t\t      v-model=\"item.position_id\"\n\t\t\t\t\t      prepend-icon=\"card_travel\"\n\t\t\t\t\t      :items=\"positions\"\n\t\t\t\t\t      :item-text=\"title\"\n\t\t\t\t\t      :item-value=\"id\"\n\t\t\t\t\t      :rules=\"[v => !!v || 'Выберите должность']\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-select>\n\t  \t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('phone_number')\"\n\t\t\t\t\t      v-model=\"item.phone_number\"\n\t\t\t\t\t      prepend-icon=\"phone_iphone\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('salary')\"\n\t\t\t\t\t      v-model=\"item.salary\"\n\t\t\t\t\t      prepend-icon=\"attach_money\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('address')\"\n\t\t\t\t\t      v-model=\"item.address\"\n\t\t\t\t\t      prepend-icon=\"home\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-layout row wrap>\n\t\t\t\t\t<v-flex xs12>\n\t\t\t\t\t\t<v-menu\n\t\t\t\t\t\t  ref=\"menu\"\n\t\t\t\t\t\t  lazy\n\t\t\t\t\t\t  :close-on-content-click=\"false\"\n\t\t\t\t\t\t  v-model=\"menu\"\n\t\t\t\t\t\t  transition=\"scale-transition\"\n\t\t\t\t\t\t  offset-y\n\t\t\t\t\t\t  full-width\n\t\t\t\t\t\t  :nudge-right=\"40\"\n\t\t\t\t\t\t  min-width=\"290px\"\n\t\t\t\t\t\t  :return-value.sync=\"date\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t  <v-text-field\n\t\t\t\t\t\t    slot=\"activator\"\n\t\t\t\t\t\t    :label=\"$t('birthday')\"\n\t\t\t\t\t\t    v-model=\"item.birthday\"\n\t\t\t\t\t\t    prepend-icon=\"event\"\n\t\t\t\t\t\t    readonly\n\t\t\t\t\t\t    :disabled=\"disabled\"\n\t\t\t\t\t\t  ></v-text-field>\n\t\t\t\t\t\t  <v-date-picker v-if=\"!disabled\" v-model=\"item.birthday\" no-title scrollable>\n\t\t\t\t\t\t    <v-spacer></v-spacer>\n\t\t\t\t\t\t    <v-btn flat color=\"primary\" @click=\"menu = false\">{{ $t('cancel') }}</v-btn>\n\t\t\t\t\t\t    <v-btn flat color=\"primary\" @click=\"$refs.menu.save(date)\">{{ $t('ok') }}</v-btn>\n\t\t\t\t\t\t  </v-date-picker>\n\t\t\t\t\t\t</v-menu>\n\t\t\t\t\t</v-flex>\n\t\t\t\t</v-layout>\n\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t<v-btn large @click=\"buttonAction()\">\n\t\t\t\t\t{{ buttonText }}\n\t\t\t\t\t</v-btn>\n\t\t\t\t\t<v-btn large @click=\"back\">\n\t\t\t\t\tНазад\n\t\t\t\t\t</v-btn>\n\t\t\t\t</div>\n\t  \t\t\n\t  </div>\n  </div>\t\t\n</template>\n\n<script>\n\timport {mapActions, mapGetters} from 'vuex';\n\timport axios from 'axios';\n\texport default {\n\t\tmiddleware: 'auth',\n\t\tprops: {\n\t\t\tid: {\n\t\t\t\ttype: [Number, String],\n\t\t\t\trequired: true\n\t\t\t}\n\t\t},\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\tdisabled: true,\n\t\t\t\tdate: null,\n\t      menu: false,\n\t      modal: false,\n\t      name: '',\n\t      valid: false,\n\t      defaultItem: {},\n\t      nameRules: [\n\t        v => !!v || 'Введите значение',\n\t        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',\n\t      ],\n\t      emailRules: [\n\t        v => !!v || 'Введите E-mail',\n\t        v => /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(v) || 'Не валидный E-mail'\n\t      ],\n\t      // positions: [\n\t      //   'Старший сотрудник',\n\t      //   'Бухгалтер',\n\t      //   'Директор',\n\t      //   'Сотрудник'\n\t      // ],\n\t\t\t}\n\t\t},\n\t\tcomputed: {\n\t\t\t...mapGetters({\n\t\t\t\titem: 'employees/employee',\n\t\t\t\tpositions: 'positions/positions'\n\t\t\t}),\n\t\t\tbuttonText() {\n\t\t\t\treturn !this.disabled ? \"Обновить\" : \"Изменить данные\";\n\t\t\t},\n\t\t\tavatar() {\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"/storage/avatars/no-avatar.jpg\"\n\t\t\t}\n\t\t},\n\t\t// Загрузка пользователя перед монтированием компонента\n\t\tbeforeRouteEnter (to, from, next) {\n    \tnext(vm => vm.$store.dispatch('employees/loadOne', vm.id));\n  \t},\n\t\tmethods: {\n\t\t\t...mapActions({\n\t\t\t\tchangeItem: 'employees/edit',\n\t\t\t}),\n\t\t\tbuttonAction() {\n\t\t\t\tif (!this.disabled) {\n\t\t\t\t\tthis.changeItem(this.item);\n\t\t\t\t}\n\t\t\t\tthis.defaultItem = Object.assign({}, this.item);\n\t\t\t\tthis.disabled = !this.disabled;\t\t\n\t\t\t},\n\t\t\tback() {\t\n\t\t\t\tif (this.disabled) return this.$router.go(-1);\n\t\t\t\tfor(let key in this.item) {\n\t\t\t\t\tthis.item[key] = this.defaultItem[key]\n\t\t\t\t}\n\t\t\t\tthis.disabled = !this.disabled;\t\t\t\t\t\t\n\t\t\t},\n\t\t\tasync uploadPhoto(e) {\n\t\t\t\tconst imagefile = document.getElementById('avatar-file').files[0];\n\t\t\t\tif (!imagefile) return;\n\t\t    try {\n\t\t    \tlet formData = new FormData();    \t\t\t\t    \t\n\t\t\t\t\tformData.append(\"image\", imagefile);\n\t\t\t\t\tconst { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {\n\t\t\t\t\t     headers: {\n\t\t\t\t\t       'Content-Type': 'multipart/form-data'\n\t\t\t\t\t     }\n\t\t\t\t\t });\n\t\t\t\t\tthis.item.avatar = data;\n    \t\t} catch (e) {\n      \t\tconsole.error('Не загрузился аватар', e)\n    \t\t}\t\n\t\t\t}\n\t\t}\n\t}\n</script>\n\n<style scoped>\n\t* {\n\t\tbox-sizing: border-box;;\n\t\tfont-family: 'Roboto', sans-serif;\n\t}\n\n\th2 {\n\t\tflex-basis: 100%;\n\t\ttext-align: center;\n\t}\n\n\tp,\n\t.employee,\n\t.avatar__overlay {\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: -o-flex;\n\t\tdisplay: flex;\n\t}\n\n\tp {\n\t\tjustify-content: space-between;\n\t\tmargin: 0;\n\t\tpadding: 10px;\n\t\ttransition: background-color .3s;\n\t}\n\n\tp:hover {\n\t\tbackground-color: rgba(255, 255, 255, .1);\n\t}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(6);
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
			}]
			// positions: [
			//   'Старший сотрудник',
			//   'Бухгалтер',
			//   'Директор',
			//   'Сотрудник'
			// ],
		};
	},

	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
		item: 'employees/employee',
		positions: 'positions/positions'
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
			return vm.$store.dispatch('employees/loadOne', vm.id);
		});
	},

	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
		changeItem: 'employees/edit'
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
            "item-text": _vm.title,
            "item-value": _vm.id,
            rules: [
              function(v) {
                return !!v || "Выберите должность"
              }
            ],
            required: "",
            disabled: _vm.disabled
          },
          model: {
            value: _vm.item.position_id,
            callback: function($$v) {
              _vm.$set(_vm.item, "position_id", $$v)
            },
            expression: "item.position_id"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwrQ0FBZ0QsbUNBQW1DLG9DQUFvQyxzQ0FBc0MsR0FBRyx1QkFBdUIs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Q0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUNBQWlDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDZCQUE2QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw2QkFBNkI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlCQUF5QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsWUFBWSxPQUFPLGtCQUFrQixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy84LmQ0ZTQ5ODM0NzE2YmY3N2ZkYzEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTVlYjg3Y2QwXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZW1wbG95ZWVzXFxcXFNob3cudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlYjg3Y2QwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWViODdjZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjQ4NmMwNjQwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4qW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuaDJbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuXFx0ICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5wW2RhdGEtdi01ZWI4N2NkMF0sXFxuLmVtcGxveWVlW2RhdGEtdi01ZWI4N2NkMF0sXFxuLmF2YXRhcl9fb3ZlcmxheVtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5wW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuXFx0ICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuXFx0ICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG59XFxucFtkYXRhLXYtNWViODdjZDBdOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTBNQTtDQUNBLCtCQUFBO1NBQUEsdUJBQUE7Q0FDQSxrQ0FBQTtDQUNBO0FBRUE7Q0FDQSw4QkFBQTtLQUFBLGlCQUFBO0NBQ0EsbUJBQUE7Q0FDQTtBQUVBOzs7Q0FJQSxtQkFBQTtDQUNBLGtCQUFBO0NBQ0EsaUJBQUE7Q0FDQSxxQkFBQTtDQUFBLHFCQUFBO0NBQUEsY0FBQTtDQUNBO0FBRUE7Q0FDQSwwQkFBQTtLQUFBLHVCQUFBO1NBQUEsK0JBQUE7Q0FDQSxVQUFBO0NBQ0EsY0FBQTtDQUNBLHlDQUFBO0NBQUEsaUNBQUE7Q0FDQTtBQUVBO0NBQ0EsMENBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiU2hvdy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVcXFwiPlxcbiAgXFx0PGgyPnt7ICR0KCdlbXBsb3llZScpIH19PC9oMj5cXG4gIFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19hdmF0YXJcXFwiPlxcbiAgXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcXFwiPlxcbiAgXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiYXZhdGFyX19vdmVybGF5XFxcIj5cXG4gIFxcdFxcdFxcdFxcdFxcdDx1cGxvYWQtYnV0dG9uIDp0aXRsZT1cXFwiJHQoJ2NoYW5nZV9pbWFnZScpXFxcIiA6c2VsZWN0ZWRDYWxsYmFjaz1cXFwidXBsb2FkUGhvdG9cXFwiPjwvdXBsb2FkLWJ1dHRvbj5cXG4gIFxcdFxcdFxcdFxcdDwvZGl2PlxcbiAgXFx0XFx0XFx0XFx0PGltZyA6c3JjPVxcXCJhdmF0YXJcXFwiIDphbHQ9XFxcIml0ZW0uZmlyc3RfbmFtZVxcXCI+XFxuICBcXHRcXHRcXHQ8L2Rpdj5cXHRcXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHQgIFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19kZXNjclxcXCI+XFxuXFx0ICBcXHRcXHQ8di10ZXh0LWZpZWxkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgnbmFtZScpXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0uZmlyc3RfbmFtZVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6Y291bnRlcj1cXFwiNzBcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcblxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXG5cXHRcXHRcXHRcXHRcXHQgICAgPHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ2xhc3RfbmFtZScpXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ubGFzdF9uYW1lXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwibmFtZVJ1bGVzXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCI3MFxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuXFx0XFx0XFx0XFx0Pjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdDx2LXRleHQtZmllbGRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdwYXRyb255bWljJylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5wYXRyb255bWljXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwibmFtZVJ1bGVzXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCI3MFxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcblxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXG48IS0tIFxcdFxcdFxcdFxcdDxzZWxlY3QgbmFtZT1cXFwicG9zaXRpb25zXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8b3B0aW9uIHYtZm9yPVxcXCJwb3NpdGlvbiBpbiBwb3NpdGlvbnNcXFwiIDp2YWx1ZT1cXFwicG9zaXRpb24uaWRcXFwiPnt7cG9zaXRpb24udGl0bGV9fTwvb3B0aW9uPlxcblxcdFxcdFxcdFxcdDwvc2VsZWN0PiAtLT5cXG5cXHRcXHRcXHRcXHQ8di1zZWxlY3RcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdwb3NpdGlvbicpXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ucG9zaXRpb25faWRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJjYXJkX3RyYXZlbFxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6aXRlbXM9XFxcInBvc2l0aW9uc1xcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6aXRlbS10ZXh0PVxcXCJ0aXRsZVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6aXRlbS12YWx1ZT1cXFwiaWRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMJ11cXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcblxcdFxcdFxcdFxcdD48L3Ytc2VsZWN0PlxcblxcdCAgXFx0XFx0PHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3Bob25lX251bWJlcicpXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ucGhvbmVfbnVtYmVyXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwicGhvbmVfaXBob25lXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXG5cXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxuXFx0XFx0XFx0XFx0PHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3NhbGFyeScpXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0uc2FsYXJ5XFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiYXR0YWNoX21vbmV5XFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXG5cXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxuXFx0XFx0XFx0XFx0PHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ2FkZHJlc3MnKVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmFkZHJlc3NcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJob21lXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXG5cXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxuXFx0XFx0XFx0XFx0PHYtbGF5b3V0IHJvdyB3cmFwPlxcblxcdFxcdFxcdFxcdFxcdDx2LWZsZXggeHMxMj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8di1tZW51XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICByZWY9XFxcIm1lbnVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICBsYXp5XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA6Y2xvc2Utb24tY29udGVudC1jbGljaz1cXFwiZmFsc2VcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICB2LW1vZGVsPVxcXCJtZW51XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgdHJhbnNpdGlvbj1cXFwic2NhbGUtdHJhbnNpdGlvblxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIG9mZnNldC15XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICBmdWxsLXdpZHRoXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA6bnVkZ2UtcmlnaHQ9XFxcIjQwXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgbWluLXdpZHRoPVxcXCIyOTBweFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIDpyZXR1cm4tdmFsdWUuc3luYz1cXFwiZGF0ZVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA8di10ZXh0LWZpZWxkXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIHNsb3Q9XFxcImFjdGl2YXRvclxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgOmxhYmVsPVxcXCIkdCgnYmlydGhkYXknKVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgdi1tb2RlbD1cXFwiaXRlbS5iaXJ0aGRheVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgcHJlcGVuZC1pY29uPVxcXCJldmVudFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgcmVhZG9ubHlcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgID48L3YtdGV4dC1maWVsZD5cXG5cXHRcXHRcXHRcXHRcXHRcXHQgIDx2LWRhdGUtcGlja2VyIHYtaWY9XFxcIiFkaXNhYmxlZFxcXCIgdi1tb2RlbD1cXFwiaXRlbS5iaXJ0aGRheVxcXCIgbm8tdGl0bGUgc2Nyb2xsYWJsZT5cXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDx2LWJ0biBmbGF0IGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBAY2xpY2s9XFxcIm1lbnUgPSBmYWxzZVxcXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgPHYtYnRuIGZsYXQgY29sb3I9XFxcInByaW1hcnlcXFwiIEBjbGljaz1cXFwiJHJlZnMubWVudS5zYXZlKGRhdGUpXFxcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA8L3YtZGF0ZS1waWNrZXI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PC92LW1lbnU+XFxuXFx0XFx0XFx0XFx0XFx0PC92LWZsZXg+XFxuXFx0XFx0XFx0XFx0PC92LWxheW91dD5cXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJidXR0b25zXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8di1idG4gbGFyZ2UgQGNsaWNrPVxcXCJidXR0b25BY3Rpb24oKVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0e3sgYnV0dG9uVGV4dCB9fVxcblxcdFxcdFxcdFxcdFxcdDwvdi1idG4+XFxuXFx0XFx0XFx0XFx0XFx0PHYtYnRuIGxhcmdlIEBjbGljaz1cXFwiYmFja1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx00J3QsNC30LDQtFxcblxcdFxcdFxcdFxcdFxcdDwvdi1idG4+XFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0ICBcXHRcXHRcXG5cXHQgIDwvZGl2PlxcbiAgPC9kaXY+XFx0XFx0XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XFxuXFx0aW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcXG5cXHRleHBvcnQgZGVmYXVsdCB7XFxuXFx0XFx0bWlkZGxld2FyZTogJ2F1dGgnLFxcblxcdFxcdHByb3BzOiB7XFxuXFx0XFx0XFx0aWQ6IHtcXG5cXHRcXHRcXHRcXHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxcblxcdFxcdFxcdFxcdHJlcXVpcmVkOiB0cnVlXFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0ZGF0YSgpIHtcXG5cXHRcXHRcXHRyZXR1cm4ge1xcblxcdFxcdFxcdFxcdGRpc2FibGVkOiB0cnVlLFxcblxcdFxcdFxcdFxcdGRhdGU6IG51bGwsXFxuXFx0ICAgICAgbWVudTogZmFsc2UsXFxuXFx0ICAgICAgbW9kYWw6IGZhbHNlLFxcblxcdCAgICAgIG5hbWU6ICcnLFxcblxcdCAgICAgIHZhbGlkOiBmYWxzZSxcXG5cXHQgICAgICBkZWZhdWx0SXRlbToge30sXFxuXFx0ICAgICAgbmFtZVJ1bGVzOiBbXFxuXFx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtScsXFxuXFx0ICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoID4gMSkgfHwgJ9CY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDIg0LHRg9C60LLRiycsXFxuXFx0ICAgICAgXSxcXG5cXHQgICAgICBlbWFpbFJ1bGVzOiBbXFxuXFx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUgRS1tYWlsJyxcXG5cXHQgICAgICAgIHYgPT4gL15cXFxcdysoWy4tXT9cXFxcdyspKkBcXFxcdysoWy4tXT9cXFxcdyspKihcXFxcLlxcXFx3ezIsM30pKyQvLnRlc3QodikgfHwgJ9Cd0LUg0LLQsNC70LjQtNC90YvQuSBFLW1haWwnXFxuXFx0ICAgICAgXSxcXG5cXHQgICAgICAvLyBwb3NpdGlvbnM6IFtcXG5cXHQgICAgICAvLyAgICfQodGC0LDRgNGI0LjQuSDRgdC+0YLRgNGD0LTQvdC40LonLFxcblxcdCAgICAgIC8vICAgJ9CR0YPRhdCz0LDQu9GC0LXRgCcsXFxuXFx0ICAgICAgLy8gICAn0JTQuNGA0LXQutGC0L7RgCcsXFxuXFx0ICAgICAgLy8gICAn0KHQvtGC0YDRg9C00L3QuNC6J1xcblxcdCAgICAgIC8vIF0sXFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0Y29tcHV0ZWQ6IHtcXG5cXHRcXHRcXHQuLi5tYXBHZXR0ZXJzKHtcXG5cXHRcXHRcXHRcXHRpdGVtOiAnZW1wbG95ZWVzL2VtcGxveWVlJyxcXG5cXHRcXHRcXHRcXHRwb3NpdGlvbnM6ICdwb3NpdGlvbnMvcG9zaXRpb25zJ1xcblxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdGJ1dHRvblRleHQoKSB7XFxuXFx0XFx0XFx0XFx0cmV0dXJuICF0aGlzLmRpc2FibGVkID8gXFxcItCe0LHQvdC+0LLQuNGC0YxcXFwiIDogXFxcItCY0LfQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1XFxcIjtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdFxcdGF2YXRhcigpIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy5pdGVtLmF2YXRhciA6IFxcXCIvc3RvcmFnZS9hdmF0YXJzL25vLWF2YXRhci5qcGdcXFwiXFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0Ly8g0JfQsNCz0YDRg9C30LrQsCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0L/QtdGA0LXQtCDQvNC+0L3RgtC40YDQvtCy0LDQvdC40LXQvCDQutC+0LzQv9C+0L3QtdC90YLQsFxcblxcdFxcdGJlZm9yZVJvdXRlRW50ZXIgKHRvLCBmcm9tLCBuZXh0KSB7XFxuICAgIFxcdG5leHQodm0gPT4gdm0uJHN0b3JlLmRpc3BhdGNoKCdlbXBsb3llZXMvbG9hZE9uZScsIHZtLmlkKSk7XFxuICBcXHR9LFxcblxcdFxcdG1ldGhvZHM6IHtcXG5cXHRcXHRcXHQuLi5tYXBBY3Rpb25zKHtcXG5cXHRcXHRcXHRcXHRjaGFuZ2VJdGVtOiAnZW1wbG95ZWVzL2VkaXQnLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdGJ1dHRvbkFjdGlvbigpIHtcXG5cXHRcXHRcXHRcXHRpZiAoIXRoaXMuZGlzYWJsZWQpIHtcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLmNoYW5nZUl0ZW0odGhpcy5pdGVtKTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0dGhpcy5kZWZhdWx0SXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbSk7XFxuXFx0XFx0XFx0XFx0dGhpcy5kaXNhYmxlZCA9ICF0aGlzLmRpc2FibGVkO1xcdFxcdFxcblxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0YmFjaygpIHtcXHRcXG5cXHRcXHRcXHRcXHRpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuIHRoaXMuJHJvdXRlci5nbygtMSk7XFxuXFx0XFx0XFx0XFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5pdGVtKSB7XFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5pdGVtW2tleV0gPSB0aGlzLmRlZmF1bHRJdGVtW2tleV1cXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0dGhpcy5kaXNhYmxlZCA9ICF0aGlzLmRpc2FibGVkO1xcdFxcdFxcdFxcdFxcdFxcdFxcblxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0YXN5bmMgdXBsb2FkUGhvdG8oZSkge1xcblxcdFxcdFxcdFxcdGNvbnN0IGltYWdlZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmF0YXItZmlsZScpLmZpbGVzWzBdO1xcblxcdFxcdFxcdFxcdGlmICghaW1hZ2VmaWxlKSByZXR1cm47XFxuXFx0XFx0ICAgIHRyeSB7XFxuXFx0XFx0ICAgIFxcdGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpOyAgICBcXHRcXHRcXHRcXHQgICAgXFx0XFxuXFx0XFx0XFx0XFx0XFx0Zm9ybURhdGEuYXBwZW5kKFxcXCJpbWFnZVxcXCIsIGltYWdlZmlsZSk7XFxuXFx0XFx0XFx0XFx0XFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCArICcvYXZhdGFyJywgZm9ybURhdGEsIHtcXG5cXHRcXHRcXHRcXHRcXHQgICAgIGhlYWRlcnM6IHtcXG5cXHRcXHRcXHRcXHRcXHQgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xcblxcdFxcdFxcdFxcdFxcdCAgICAgfVxcblxcdFxcdFxcdFxcdFxcdCB9KTtcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLml0ZW0uYXZhdGFyID0gZGF0YTtcXG4gICAgXFx0XFx0fSBjYXRjaCAoZSkge1xcbiAgICAgIFxcdFxcdGNvbnNvbGUuZXJyb3IoJ9Cd0LUg0LfQsNCz0YDRg9C30LjQu9GB0Y8g0LDQstCw0YLQsNGAJywgZSlcXG4gICAgXFx0XFx0fVxcdFxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuXFx0KiB7XFxuXFx0XFx0Ym94LXNpemluZzogYm9yZGVyLWJveDs7XFxuXFx0XFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcdH1cXG5cXG5cXHRoMiB7XFxuXFx0XFx0ZmxleC1iYXNpczogMTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcblxcdHAsXFxuXFx0LmVtcGxveWVlLFxcblxcdC5hdmF0YXJfX292ZXJsYXkge1xcblxcdFxcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG5cXHRcXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdH1cXG5cXG5cXHRwIHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0XFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxuXFx0fVxcblxcblxcdHA6aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xcblxcdH1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk1XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImVtcGxveWVlXCI+XG4gIFx0PGgyPnt7ICR0KCdlbXBsb3llZScpIH19PC9oMj5cbiAgXHRcdDxkaXYgY2xhc3M9XCJlbXBsb3llZV9fYXZhdGFyXCI+XG4gIFx0XHRcdDxkaXYgY2xhc3M9XCJlbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lclwiPlxuICBcdFx0XHRcdDxkaXYgY2xhc3M9XCJhdmF0YXJfX292ZXJsYXlcIj5cbiAgXHRcdFx0XHRcdDx1cGxvYWQtYnV0dG9uIDp0aXRsZT1cIiR0KCdjaGFuZ2VfaW1hZ2UnKVwiIDpzZWxlY3RlZENhbGxiYWNrPVwidXBsb2FkUGhvdG9cIj48L3VwbG9hZC1idXR0b24+XG4gIFx0XHRcdFx0PC9kaXY+XG4gIFx0XHRcdFx0PGltZyA6c3JjPVwiYXZhdGFyXCIgOmFsdD1cIml0ZW0uZmlyc3RfbmFtZVwiPlxuICBcdFx0XHQ8L2Rpdj5cdFxuXHRcdFx0PC9kaXY+XG5cdCAgXHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2Rlc2NyXCI+XG5cdCAgXHRcdDx2LXRleHQtZmllbGRcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnbmFtZScpXCJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5maXJzdF9uYW1lXCJcblx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxuXHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxuXHRcdFx0XHRcdCAgICA8di10ZXh0LWZpZWxkXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ2xhc3RfbmFtZScpXCJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5sYXN0X25hbWVcIlxuXHRcdFx0XHRcdCAgICAgIDpydWxlcz1cIm5hbWVSdWxlc1wiXG5cdFx0XHRcdFx0ICAgICAgOmNvdW50ZXI9XCI3MFwiXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcblx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cblx0XHRcdFx0PHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdwYXRyb255bWljJylcIlxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLnBhdHJvbnltaWNcIlxuXHRcdFx0XHRcdCAgICAgIDpydWxlcz1cIm5hbWVSdWxlc1wiXG5cdFx0XHRcdFx0ICAgICAgOmNvdW50ZXI9XCI3MFwiXG5cdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XG48IS0tIFx0XHRcdFx0PHNlbGVjdCBuYW1lPVwicG9zaXRpb25zXCI+XG5cdFx0XHRcdFx0PG9wdGlvbiB2LWZvcj1cInBvc2l0aW9uIGluIHBvc2l0aW9uc1wiIDp2YWx1ZT1cInBvc2l0aW9uLmlkXCI+e3twb3NpdGlvbi50aXRsZX19PC9vcHRpb24+XG5cdFx0XHRcdDwvc2VsZWN0PiAtLT5cblx0XHRcdFx0PHYtc2VsZWN0XG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3Bvc2l0aW9uJylcIlxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLnBvc2l0aW9uX2lkXCJcblx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJjYXJkX3RyYXZlbFwiXG5cdFx0XHRcdFx0ICAgICAgOml0ZW1zPVwicG9zaXRpb25zXCJcblx0XHRcdFx0XHQgICAgICA6aXRlbS10ZXh0PVwidGl0bGVcIlxuXHRcdFx0XHRcdCAgICAgIDppdGVtLXZhbHVlPVwiaWRcIlxuXHRcdFx0XHRcdCAgICAgIDpydWxlcz1cIlt2ID0+ICEhdiB8fCAn0JLRi9Cx0LXRgNC40YLQtSDQtNC+0LvQttC90L7RgdGC0YwnXVwiXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcblx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdD48L3Ytc2VsZWN0PlxuXHQgIFx0XHQ8di10ZXh0LWZpZWxkXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3Bob25lX251bWJlcicpXCJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5waG9uZV9udW1iZXJcIlxuXHRcdFx0XHRcdCAgICAgIHByZXBlbmQtaWNvbj1cInBob25lX2lwaG9uZVwiXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcblx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cblx0XHRcdFx0PHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdzYWxhcnknKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0uc2FsYXJ5XCJcblx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJhdHRhY2hfbW9uZXlcIlxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXG5cdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XG5cdFx0XHRcdDx2LXRleHQtZmllbGRcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnYWRkcmVzcycpXCJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5hZGRyZXNzXCJcblx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJob21lXCJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxuXHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxuXHRcdFx0XHQ8di1sYXlvdXQgcm93IHdyYXA+XG5cdFx0XHRcdFx0PHYtZmxleCB4czEyPlxuXHRcdFx0XHRcdFx0PHYtbWVudVxuXHRcdFx0XHRcdFx0ICByZWY9XCJtZW51XCJcblx0XHRcdFx0XHRcdCAgbGF6eVxuXHRcdFx0XHRcdFx0ICA6Y2xvc2Utb24tY29udGVudC1jbGljaz1cImZhbHNlXCJcblx0XHRcdFx0XHRcdCAgdi1tb2RlbD1cIm1lbnVcIlxuXHRcdFx0XHRcdFx0ICB0cmFuc2l0aW9uPVwic2NhbGUtdHJhbnNpdGlvblwiXG5cdFx0XHRcdFx0XHQgIG9mZnNldC15XG5cdFx0XHRcdFx0XHQgIGZ1bGwtd2lkdGhcblx0XHRcdFx0XHRcdCAgOm51ZGdlLXJpZ2h0PVwiNDBcIlxuXHRcdFx0XHRcdFx0ICBtaW4td2lkdGg9XCIyOTBweFwiXG5cdFx0XHRcdFx0XHQgIDpyZXR1cm4tdmFsdWUuc3luYz1cImRhdGVcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0ICA8di10ZXh0LWZpZWxkXG5cdFx0XHRcdFx0XHQgICAgc2xvdD1cImFjdGl2YXRvclwiXG5cdFx0XHRcdFx0XHQgICAgOmxhYmVsPVwiJHQoJ2JpcnRoZGF5JylcIlxuXHRcdFx0XHRcdFx0ICAgIHYtbW9kZWw9XCJpdGVtLmJpcnRoZGF5XCJcblx0XHRcdFx0XHRcdCAgICBwcmVwZW5kLWljb249XCJldmVudFwiXG5cdFx0XHRcdFx0XHQgICAgcmVhZG9ubHlcblx0XHRcdFx0XHRcdCAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHQgID48L3YtdGV4dC1maWVsZD5cblx0XHRcdFx0XHRcdCAgPHYtZGF0ZS1waWNrZXIgdi1pZj1cIiFkaXNhYmxlZFwiIHYtbW9kZWw9XCJpdGVtLmJpcnRoZGF5XCIgbm8tdGl0bGUgc2Nyb2xsYWJsZT5cblx0XHRcdFx0XHRcdCAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cblx0XHRcdFx0XHRcdCAgICA8di1idG4gZmxhdCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJtZW51ID0gZmFsc2VcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxuXHRcdFx0XHRcdFx0ICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIiRyZWZzLm1lbnUuc2F2ZShkYXRlKVwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cblx0XHRcdFx0XHRcdCAgPC92LWRhdGUtcGlja2VyPlxuXHRcdFx0XHRcdFx0PC92LW1lbnU+XG5cdFx0XHRcdFx0PC92LWZsZXg+XG5cdFx0XHRcdDwvdi1sYXlvdXQ+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG5cdFx0XHRcdFx0PHYtYnRuIGxhcmdlIEBjbGljaz1cImJ1dHRvbkFjdGlvbigpXCI+XG5cdFx0XHRcdFx0e3sgYnV0dG9uVGV4dCB9fVxuXHRcdFx0XHRcdDwvdi1idG4+XG5cdFx0XHRcdFx0PHYtYnRuIGxhcmdlIEBjbGljaz1cImJhY2tcIj5cblx0XHRcdFx0XHTQndCw0LfQsNC0XG5cdFx0XHRcdFx0PC92LWJ0bj5cblx0XHRcdFx0PC9kaXY+XG5cdCAgXHRcdFxuXHQgIDwvZGl2PlxuICA8L2Rpdj5cdFx0XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnO1xuXHRpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bWlkZGxld2FyZTogJ2F1dGgnLFxuXHRcdHByb3BzOiB7XG5cdFx0XHRpZDoge1xuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRpc2FibGVkOiB0cnVlLFxuXHRcdFx0XHRkYXRlOiBudWxsLFxuXHQgICAgICBtZW51OiBmYWxzZSxcblx0ICAgICAgbW9kYWw6IGZhbHNlLFxuXHQgICAgICBuYW1lOiAnJyxcblx0ICAgICAgdmFsaWQ6IGZhbHNlLFxuXHQgICAgICBkZWZhdWx0SXRlbToge30sXG5cdCAgICAgIG5hbWVSdWxlczogW1xuXHQgICAgICAgIHYgPT4gISF2IHx8ICfQktCy0LXQtNC40YLQtSDQt9C90LDRh9C10L3QuNC1Jyxcblx0ICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoID4gMSkgfHwgJ9CY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDIg0LHRg9C60LLRiycsXG5cdCAgICAgIF0sXG5cdCAgICAgIGVtYWlsUnVsZXM6IFtcblx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUgRS1tYWlsJyxcblx0ICAgICAgICB2ID0+IC9eXFx3KyhbLi1dP1xcdyspKkBcXHcrKFsuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLy50ZXN0KHYpIHx8ICfQndC1INCy0LDQu9C40LTQvdGL0LkgRS1tYWlsJ1xuXHQgICAgICBdLFxuXHQgICAgICAvLyBwb3NpdGlvbnM6IFtcblx0ICAgICAgLy8gICAn0KHRgtCw0YDRiNC40Lkg0YHQvtGC0YDRg9C00L3QuNC6Jyxcblx0ICAgICAgLy8gICAn0JHRg9GF0LPQsNC70YLQtdGAJyxcblx0ICAgICAgLy8gICAn0JTQuNGA0LXQutGC0L7RgCcsXG5cdCAgICAgIC8vICAgJ9Ch0L7RgtGA0YPQtNC90LjQuidcblx0ICAgICAgLy8gXSxcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHQuLi5tYXBHZXR0ZXJzKHtcblx0XHRcdFx0aXRlbTogJ2VtcGxveWVlcy9lbXBsb3llZScsXG5cdFx0XHRcdHBvc2l0aW9uczogJ3Bvc2l0aW9ucy9wb3NpdGlvbnMnXG5cdFx0XHR9KSxcblx0XHRcdGJ1dHRvblRleHQoKSB7XG5cdFx0XHRcdHJldHVybiAhdGhpcy5kaXNhYmxlZCA/IFwi0J7QsdC90L7QstC40YLRjFwiIDogXCLQmNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtVwiO1xuXHRcdFx0fSxcblx0XHRcdGF2YXRhcigpIHtcblx0XHRcdFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcIi9zdG9yYWdlL2F2YXRhcnMvbm8tYXZhdGFyLmpwZ1wiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyDQl9Cw0LPRgNGD0LfQutCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQv9C10YDQtdC0INC80L7QvdGC0LjRgNC+0LLQsNC90LjQtdC8INC60L7QvNC/0L7QvdC10L3RgtCwXG5cdFx0YmVmb3JlUm91dGVFbnRlciAodG8sIGZyb20sIG5leHQpIHtcbiAgICBcdG5leHQodm0gPT4gdm0uJHN0b3JlLmRpc3BhdGNoKCdlbXBsb3llZXMvbG9hZE9uZScsIHZtLmlkKSk7XG4gIFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcblx0XHRcdFx0Y2hhbmdlSXRlbTogJ2VtcGxveWVlcy9lZGl0Jyxcblx0XHRcdH0pLFxuXHRcdFx0YnV0dG9uQWN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZUl0ZW0odGhpcy5pdGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmRlZmF1bHRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pdGVtKTtcblx0XHRcdFx0dGhpcy5kaXNhYmxlZCA9ICF0aGlzLmRpc2FibGVkO1x0XHRcblx0XHRcdH0sXG5cdFx0XHRiYWNrKCkge1x0XG5cdFx0XHRcdGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm4gdGhpcy4kcm91dGVyLmdvKC0xKTtcblx0XHRcdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5pdGVtKSB7XG5cdFx0XHRcdFx0dGhpcy5pdGVtW2tleV0gPSB0aGlzLmRlZmF1bHRJdGVtW2tleV1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQ7XHRcdFx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgdXBsb2FkUGhvdG8oZSkge1xuXHRcdFx0XHRjb25zdCBpbWFnZWZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhdGFyLWZpbGUnKS5maWxlc1swXTtcblx0XHRcdFx0aWYgKCFpbWFnZWZpbGUpIHJldHVybjtcblx0XHQgICAgdHJ5IHtcblx0XHQgICAgXHRsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsgICAgXHRcdFx0XHQgICAgXHRcblx0XHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZWZpbGUpO1xuXHRcdFx0XHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQgKyAnL2F2YXRhcicsIGZvcm1EYXRhLCB7XG5cdFx0XHRcdFx0ICAgICBoZWFkZXJzOiB7XG5cdFx0XHRcdFx0ICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcblx0XHRcdFx0XHQgICAgIH1cblx0XHRcdFx0XHQgfSk7XG5cdFx0XHRcdFx0dGhpcy5pdGVtLmF2YXRhciA9IGRhdGE7XG4gICAgXHRcdH0gY2F0Y2ggKGUpIHtcbiAgICAgIFx0XHRjb25zb2xlLmVycm9yKCfQndC1INC30LDQs9GA0YPQt9C40LvRgdGPINCw0LLQsNGC0LDRgCcsIGUpXG4gICAgXHRcdH1cdFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cdCoge1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xuXHRcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblx0fVxuXG5cdGgyIHtcblx0XHRmbGV4LWJhc2lzOiAxMDAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdHAsXG5cdC5lbXBsb3llZSxcblx0LmF2YXRhcl9fb3ZlcmxheSB7XG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRcdGRpc3BsYXk6IC1tb3otZmxleDtcblx0XHRkaXNwbGF5OiAtbXMtZmxleDtcblx0XHRkaXNwbGF5OiAtby1mbGV4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdH1cblxuXHRwIHtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XG5cdH1cblxuXHRwOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcblx0fVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZVwiIH0sIFtcbiAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImVtcGxveWVlXCIpKSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhdmF0YXJfX292ZXJsYXlcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidXBsb2FkLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IF92bS4kdChcImNoYW5nZV9pbWFnZVwiKSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhbGxiYWNrOiBfdm0udXBsb2FkUGhvdG9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5hdmF0YXIsIGFsdDogX3ZtLml0ZW0uZmlyc3RfbmFtZSB9IH0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fZGVzY3JcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uZmlyc3RfbmFtZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiZmlyc3RfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmZpcnN0X25hbWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImxhc3RfbmFtZVwiKSxcbiAgICAgICAgICAgIHJ1bGVzOiBfdm0ubmFtZVJ1bGVzLFxuICAgICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ubGFzdF9uYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJsYXN0X25hbWVcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5sYXN0X25hbWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInBhdHJvbnltaWNcIiksXG4gICAgICAgICAgICBydWxlczogX3ZtLm5hbWVSdWxlcyxcbiAgICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5wYXRyb255bWljLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJwYXRyb255bWljXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucGF0cm9ueW1pY1wiXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwb3NpdGlvblwiKSxcbiAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiY2FyZF90cmF2ZWxcIixcbiAgICAgICAgICAgIGl0ZW1zOiBfdm0ucG9zaXRpb25zLFxuICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogX3ZtLnRpdGxlLFxuICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IF92bS5pZCxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISF2IHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQtNC+0LvQttC90L7RgdGC0YxcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnBvc2l0aW9uX2lkLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJwb3NpdGlvbl9pZFwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnBvc2l0aW9uX2lkXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwaG9uZV9udW1iZXJcIiksXG4gICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInBob25lX2lwaG9uZVwiLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnBob25lX251bWJlcixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwicGhvbmVfbnVtYmVyXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucGhvbmVfbnVtYmVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJzYWxhcnlcIiksXG4gICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImF0dGFjaF9tb25leVwiLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnNhbGFyeSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwic2FsYXJ5XCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uc2FsYXJ5XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJhZGRyZXNzXCIpLFxuICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJob21lXCIsXG4gICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uYWRkcmVzcyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiYWRkcmVzc1wiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmFkZHJlc3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1tZW51XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJtZW51XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGF6eTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImNsb3NlLW9uLWNvbnRlbnQtY2xpY2tcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJzY2FsZS10cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJvZmZzZXQteVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZnVsbC13aWR0aFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibnVkZ2UtcmlnaHRcIjogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgXCJtaW4td2lkdGhcIjogXCIyOTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLXZhbHVlXCI6IF92bS5kYXRlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cmV0dXJuVmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZSA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1lbnUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lbnUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWVudVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJiaXJ0aGRheVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmJpcnRoZGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJiaXJ0aGRheVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmJpcnRoZGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAhX3ZtLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWRhdGUtcGlja2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLXRpdGxlXCI6IFwiXCIsIHNjcm9sbGFibGU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmJpcnRoZGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJiaXJ0aGRheVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmJpcnRoZGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZW51ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjYW5jZWxcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcmVmcy5tZW51LnNhdmUoX3ZtLmRhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib2tcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhcmdlOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmJ1dHRvbkFjdGlvbigpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIgKyBfdm0uX3MoX3ZtLmJ1dHRvblRleHQpICsgXCJcXG5cXHRcXHRcXHRcXHRcXHRcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidi1idG5cIiwgeyBhdHRyczogeyBsYXJnZTogXCJcIiB9LCBvbjogeyBjbGljazogX3ZtLmJhY2sgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdNCd0LDQt9Cw0LRcXG5cXHRcXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01ZWI4N2NkMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSA4Il0sInNvdXJjZVJvb3QiOiIifQ==