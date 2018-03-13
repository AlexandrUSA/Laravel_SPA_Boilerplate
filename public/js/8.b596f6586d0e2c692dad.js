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
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n\ttext-align: center;\n}\np[data-v-5eb87cd0],\n.employee[data-v-5eb87cd0],\n.avatar__overlay[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\np[data-v-5eb87cd0] {\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AAuMA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA,mBAAA;CACA;AAEA;;;CAIA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA","file":"Show.vue","sourcesContent":["<template>\n  <div class=\"employee\">\n  \t<h2>{{ $t('employee') }}</h2>\n  \t\t<div class=\"employee__avatar\">\n  \t\t\t<div class=\"employee__avatar-container\">\n  \t\t\t\t<div class=\"avatar__overlay\">\n  \t\t\t\t\t<upload-button :title=\"$t('change_image')\" :selectedCallback=\"uploadPhoto\"></upload-button>\n  \t\t\t\t</div>\n  \t\t\t\t<img :src=\"avatar\" :alt=\"item.first_name\">\n  \t\t\t</div>\t\n\t\t\t</div>\n\t  \t<div class=\"employee__descr\">\n\t  \t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('name')\"\n\t\t\t\t\t      v-model=\"item.first_name\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t\t    <v-text-field\n\t\t\t\t\t      :label=\"$t('last_name')\"\n\t\t\t\t\t      v-model=\"item.last_name\"\n\t\t\t\t\t      :rules=\"nameRules\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('patronymic')\"\n\t\t\t\t\t      v-model=\"item.patronymic\"\n\t\t\t\t\t      :rules=\"nameRules\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n<!-- \t\t\t\t<select name=\"positions\">\n\t\t\t\t\t<option v-for=\"position in positions\" :value=\"position.id\">{{position.title}}</option>\n\t\t\t\t</select> -->\n\t\t\t\t<v-select\n\t\t\t\t\t      :label=\"$t('position')\"\n\t\t\t\t\t      v-model=\"this.item.position_id\"\n\t\t\t\t\t      prepend-icon=\"card_travel\"\n\t\t\t\t\t      :items=\"positions\"\n\t\t\t\t\t      item-text=\"title\"\n          \t\t\titem-value=\"id\"\n\t\t\t\t\t      :rules=\"[v => !!v || 'Выберите должность']\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-select>\n\t  \t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('phone_number')\"\n\t\t\t\t\t      v-model=\"item.phone_number\"\n\t\t\t\t\t      prepend-icon=\"phone_iphone\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('salary')\"\n\t\t\t\t\t      v-model=\"item.salary\"\n\t\t\t\t\t      prepend-icon=\"attach_money\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('address')\"\n\t\t\t\t\t      v-model=\"item.address\"\n\t\t\t\t\t      prepend-icon=\"home\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-layout row wrap>\n\t\t\t\t\t<v-flex xs12>\n\t\t\t\t\t\t<v-menu\n\t\t\t\t\t\t  ref=\"menu\"\n\t\t\t\t\t\t  lazy\n\t\t\t\t\t\t  :close-on-content-click=\"false\"\n\t\t\t\t\t\t  v-model=\"menu\"\n\t\t\t\t\t\t  transition=\"scale-transition\"\n\t\t\t\t\t\t  offset-y\n\t\t\t\t\t\t  full-width\n\t\t\t\t\t\t  :nudge-right=\"40\"\n\t\t\t\t\t\t  min-width=\"290px\"\n\t\t\t\t\t\t  :return-value.sync=\"date\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t  <v-text-field\n\t\t\t\t\t\t    slot=\"activator\"\n\t\t\t\t\t\t    :label=\"$t('birthday')\"\n\t\t\t\t\t\t    v-model=\"item.birthday\"\n\t\t\t\t\t\t    prepend-icon=\"event\"\n\t\t\t\t\t\t    readonly\n\t\t\t\t\t\t    :disabled=\"disabled\"\n\t\t\t\t\t\t  ></v-text-field>\n\t\t\t\t\t\t  <v-date-picker v-if=\"!disabled\" v-model=\"item.birthday\" no-title scrollable>\n\t\t\t\t\t\t    <v-spacer></v-spacer>\n\t\t\t\t\t\t    <v-btn flat color=\"primary\" @click=\"menu = false\">{{ $t('cancel') }}</v-btn>\n\t\t\t\t\t\t    <v-btn flat color=\"primary\" @click=\"$refs.menu.save(date)\">{{ $t('ok') }}</v-btn>\n\t\t\t\t\t\t  </v-date-picker>\n\t\t\t\t\t\t</v-menu>\n\t\t\t\t\t</v-flex>\n\t\t\t\t</v-layout>\n\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t<v-btn large @click=\"buttonAction()\">\n\t\t\t\t\t{{ buttonText }}\n\t\t\t\t\t</v-btn>\n\t\t\t\t\t<v-btn large @click=\"back\">\n\t\t\t\t\tНазад\n\t\t\t\t\t</v-btn>\n\t\t\t\t</div>\n\t  \t\t\n\t  </div>\n  </div>\t\t\n</template>\n\n<script>\n\timport {mapActions, mapGetters} from 'vuex';\n\timport axios from 'axios';\n\texport default {\n\t\tmiddleware: 'auth',\n\t\tprops: {\n\t\t\tid: {\n\t\t\t\ttype: [Number, String],\n\t\t\t\trequired: true\n\t\t\t}\n\t\t},\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\tdisabled: true,\n\t\t\t\tdate: null,\n\t      menu: false,\n\t      modal: false,\n\t      name: '',\n\t      valid: false,\n\t      defaultItem: {},\n\t      newPosition: '',\n\t      nameRules: [\n\t        v => !!v || 'Введите значение',\n\t        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',\n\t      ],\n\t      emailRules: [\n\t        v => !!v || 'Введите E-mail',\n\t        v => /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(v) || 'Не валидный E-mail'\n\t      ],\n\t\t\t}\n\t\t},\n\t\tcomputed: {\n\t\t\t...mapGetters({\n\t\t\t\titem: 'employees/employee',\n\t\t\t\tpositions: 'positions/positions'\n\t\t\t}),\n\t\t\tbuttonText() {\n\t\t\t\treturn !this.disabled ? \"Обновить\" : \"Изменить данные\";\n\t\t\t},\n\t\t\tavatar() {\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"/storage/avatars/no-avatar.jpg\"\n\t\t\t}\n\t\t},\n\t\t// Загрузка пользователя перед монтированием компонента\n\t\tbeforeRouteEnter (to, from, next) {\n    \tnext(vm => vm.$store.dispatch('employees/loadOne', vm.id));\n  \t},\n\t\tmethods: {\n\t\t\t...mapActions({\n\t\t\t\tchangeItem: 'employees/edit',\n\t\t\t}),\n\t\t\tbuttonAction() {\n\t\t\t\tif (!this.disabled) {\n\t\t\t\t\tthis.item.position_id = this.positions.findIndex(el => el.title == this.newPosition);\n\t\t\t\t\tconsole.log(this.item.position_id)\n\t\t\t\t\t//this.changeItem(this.item);\n\t\t\t\t}\n\t\t\t\tthis.defaultItem = Object.assign({}, this.item);\n\t\t\t\tthis.disabled = !this.disabled;\t\t\n\t\t\t},\n\t\t\tback() {\t\n\t\t\t\tif (this.disabled) return this.$router.go(-1);\n\t\t\t\tfor(let key in this.item) {\n\t\t\t\t\tthis.item[key] = this.defaultItem[key]\n\t\t\t\t}\n\t\t\t\tthis.disabled = !this.disabled;\t\t\t\t\t\t\n\t\t\t},\n\t\t\tasync uploadPhoto(e) {\n\t\t\t\tconst imagefile = document.getElementById('avatar-file').files[0];\n\t\t\t\tif (!imagefile) return;\n\t\t    try {\n\t\t    \tlet formData = new FormData();    \t\t\t\t    \t\n\t\t\t\t\tformData.append(\"image\", imagefile);\n\t\t\t\t\tconst { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {\n\t\t\t\t\t     headers: {\n\t\t\t\t\t       'Content-Type': 'multipart/form-data'\n\t\t\t\t\t     }\n\t\t\t\t\t });\n\t\t\t\t\tthis.item.avatar = data;\n    \t\t} catch (e) {\n      \t\tconsole.error('Не загрузился аватар', e)\n    \t\t}\t\n\t\t\t}\n\t\t}\n\t}\n</script>\n\n<style scoped>\n\t* {\n\t\tbox-sizing: border-box;;\n\t\tfont-family: 'Roboto', sans-serif;\n\t}\n\n\th2 {\n\t\tflex-basis: 100%;\n\t\ttext-align: center;\n\t}\n\n\tp,\n\t.employee,\n\t.avatar__overlay {\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: -o-flex;\n\t\tdisplay: flex;\n\t}\n\n\tp {\n\t\tjustify-content: space-between;\n\t\tmargin: 0;\n\t\tpadding: 10px;\n\t\ttransition: background-color .3s;\n\t}\n\n\tp:hover {\n\t\tbackground-color: rgba(255, 255, 255, .1);\n\t}\n</style>\n"],"sourceRoot":""}]);

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
			newPosition: '',
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
			var _this = this;

			if (!this.disabled) {
				this.item.position_id = this.positions.findIndex(function (el) {
					return el.title == _this.newPosition;
				});
				console.log(this.item.position_id);
				//this.changeItem(this.item);
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
            "item-text": "title",
            "item-value": "id",
            rules: [
              function(v) {
                return !!v || "Выберите должность"
              }
            ],
            required: "",
            disabled: _vm.disabled
          },
          model: {
            value: this.item.position_id,
            callback: function($$v) {
              _vm.$set(this.item, "position_id", $$v)
            },
            expression: "this.item.position_id"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwrQ0FBZ0QsbUNBQW1DLG9DQUFvQyxzQ0FBc0MsR0FBRyx1QkFBdUIs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QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUNBQWlDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDZCQUE2QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw2QkFBNkI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlCQUF5QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsWUFBWSxPQUFPLGtCQUFrQixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy84LmI1OTZmNjU4NmQwZTJjNjkyZGFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTVlYjg3Y2QwXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZW1wbG95ZWVzXFxcXFNob3cudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlYjg3Y2QwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWViODdjZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjQ4NmMwNjQwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4qW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuaDJbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuXFx0ICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5wW2RhdGEtdi01ZWI4N2NkMF0sXFxuLmVtcGxveWVlW2RhdGEtdi01ZWI4N2NkMF0sXFxuLmF2YXRhcl9fb3ZlcmxheVtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5wW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuXFx0ICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuXFx0ICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG59XFxucFtkYXRhLXYtNWViODdjZDBdOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXVNQTtDQUNBLCtCQUFBO1NBQUEsdUJBQUE7Q0FDQSxrQ0FBQTtDQUNBO0FBRUE7Q0FDQSw4QkFBQTtLQUFBLGlCQUFBO0NBQ0EsbUJBQUE7Q0FDQTtBQUVBOzs7Q0FJQSxtQkFBQTtDQUNBLGtCQUFBO0NBQ0EsaUJBQUE7Q0FDQSxxQkFBQTtDQUFBLHFCQUFBO0NBQUEsY0FBQTtDQUNBO0FBRUE7Q0FDQSwwQkFBQTtLQUFBLHVCQUFBO1NBQUEsK0JBQUE7Q0FDQSxVQUFBO0NBQ0EsY0FBQTtDQUNBLHlDQUFBO0NBQUEsaUNBQUE7Q0FDQTtBQUVBO0NBQ0EsMENBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiU2hvdy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVcXFwiPlxcbiAgXFx0PGgyPnt7ICR0KCdlbXBsb3llZScpIH19PC9oMj5cXG4gIFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19hdmF0YXJcXFwiPlxcbiAgXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcXFwiPlxcbiAgXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiYXZhdGFyX19vdmVybGF5XFxcIj5cXG4gIFxcdFxcdFxcdFxcdFxcdDx1cGxvYWQtYnV0dG9uIDp0aXRsZT1cXFwiJHQoJ2NoYW5nZV9pbWFnZScpXFxcIiA6c2VsZWN0ZWRDYWxsYmFjaz1cXFwidXBsb2FkUGhvdG9cXFwiPjwvdXBsb2FkLWJ1dHRvbj5cXG4gIFxcdFxcdFxcdFxcdDwvZGl2PlxcbiAgXFx0XFx0XFx0XFx0PGltZyA6c3JjPVxcXCJhdmF0YXJcXFwiIDphbHQ9XFxcIml0ZW0uZmlyc3RfbmFtZVxcXCI+XFxuICBcXHRcXHRcXHQ8L2Rpdj5cXHRcXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHQgIFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19kZXNjclxcXCI+XFxuXFx0ICBcXHRcXHQ8di10ZXh0LWZpZWxkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgnbmFtZScpXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0uZmlyc3RfbmFtZVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6Y291bnRlcj1cXFwiNzBcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcblxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXG5cXHRcXHRcXHRcXHRcXHQgICAgPHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ2xhc3RfbmFtZScpXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ubGFzdF9uYW1lXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwibmFtZVJ1bGVzXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCI3MFxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuXFx0XFx0XFx0XFx0Pjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdDx2LXRleHQtZmllbGRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdwYXRyb255bWljJylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5wYXRyb255bWljXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwibmFtZVJ1bGVzXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCI3MFxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcblxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXG48IS0tIFxcdFxcdFxcdFxcdDxzZWxlY3QgbmFtZT1cXFwicG9zaXRpb25zXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8b3B0aW9uIHYtZm9yPVxcXCJwb3NpdGlvbiBpbiBwb3NpdGlvbnNcXFwiIDp2YWx1ZT1cXFwicG9zaXRpb24uaWRcXFwiPnt7cG9zaXRpb24udGl0bGV9fTwvb3B0aW9uPlxcblxcdFxcdFxcdFxcdDwvc2VsZWN0PiAtLT5cXG5cXHRcXHRcXHRcXHQ8di1zZWxlY3RcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdwb3NpdGlvbicpXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcInRoaXMuaXRlbS5wb3NpdGlvbl9pZFxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICBwcmVwZW5kLWljb249XFxcImNhcmRfdHJhdmVsXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDppdGVtcz1cXFwicG9zaXRpb25zXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIGl0ZW0tdGV4dD1cXFwidGl0bGVcXFwiXFxuICAgICAgICAgIFxcdFxcdFxcdGl0ZW0tdmFsdWU9XFxcImlkXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwiW3YgPT4gISF2IHx8ICfQktGL0LHQtdGA0LjRgtC1INC00L7Qu9C20L3QvtGB0YLRjCddXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXG5cXHRcXHRcXHRcXHQ+PC92LXNlbGVjdD5cXG5cXHQgIFxcdFxcdDx2LXRleHQtZmllbGRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdwaG9uZV9udW1iZXInKVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLnBob25lX251bWJlclxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICBwcmVwZW5kLWljb249XFxcInBob25lX2lwaG9uZVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuXFx0XFx0XFx0XFx0Pjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdDx2LXRleHQtZmllbGRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdzYWxhcnknKVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLnNhbGFyeVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICBwcmVwZW5kLWljb249XFxcImF0dGFjaF9tb25leVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuXFx0XFx0XFx0XFx0Pjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdDx2LXRleHQtZmllbGRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdhZGRyZXNzJylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5hZGRyZXNzXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiaG9tZVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuXFx0XFx0XFx0XFx0Pjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdDx2LWxheW91dCByb3cgd3JhcD5cXG5cXHRcXHRcXHRcXHRcXHQ8di1mbGV4IHhzMTI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PHYtbWVudVxcblxcdFxcdFxcdFxcdFxcdFxcdCAgcmVmPVxcXCJtZW51XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgbGF6eVxcblxcdFxcdFxcdFxcdFxcdFxcdCAgOmNsb3NlLW9uLWNvbnRlbnQtY2xpY2s9XFxcImZhbHNlXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgdi1tb2RlbD1cXFwibWVudVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIHRyYW5zaXRpb249XFxcInNjYWxlLXRyYW5zaXRpb25cXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICBvZmZzZXQteVxcblxcdFxcdFxcdFxcdFxcdFxcdCAgZnVsbC13aWR0aFxcblxcdFxcdFxcdFxcdFxcdFxcdCAgOm51ZGdlLXJpZ2h0PVxcXCI0MFxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIG1pbi13aWR0aD1cXFwiMjkwcHhcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA6cmV0dXJuLXZhbHVlLnN5bmM9XFxcImRhdGVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgPHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICBzbG90PVxcXCJhY3RpdmF0b3JcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDpsYWJlbD1cXFwiJHQoJ2JpcnRoZGF5JylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIHYtbW9kZWw9XFxcIml0ZW0uYmlydGhkYXlcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIHByZXBlbmQtaWNvbj1cXFwiZXZlbnRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIHJlYWRvbmx5XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA+PC92LXRleHQtZmllbGQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICA8di1kYXRlLXBpY2tlciB2LWlmPVxcXCIhZGlzYWJsZWRcXFwiIHYtbW9kZWw9XFxcIml0ZW0uYmlydGhkYXlcXFwiIG5vLXRpdGxlIHNjcm9sbGFibGU+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICA8di1idG4gZmxhdCBjb2xvcj1cXFwicHJpbWFyeVxcXCIgQGNsaWNrPVxcXCJtZW51ID0gZmFsc2VcXFwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDx2LWJ0biBmbGF0IGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBAY2xpY2s9XFxcIiRyZWZzLm1lbnUuc2F2ZShkYXRlKVxcXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgPC92LWRhdGUtcGlja2VyPlxcblxcdFxcdFxcdFxcdFxcdFxcdDwvdi1tZW51PlxcblxcdFxcdFxcdFxcdFxcdDwvdi1mbGV4PlxcblxcdFxcdFxcdFxcdDwvdi1sYXlvdXQ+XFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiYnV0dG9uc1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PHYtYnRuIGxhcmdlIEBjbGljaz1cXFwiYnV0dG9uQWN0aW9uKClcXFwiPlxcblxcdFxcdFxcdFxcdFxcdHt7IGJ1dHRvblRleHQgfX1cXG5cXHRcXHRcXHRcXHRcXHQ8L3YtYnRuPlxcblxcdFxcdFxcdFxcdFxcdDx2LWJ0biBsYXJnZSBAY2xpY2s9XFxcImJhY2tcXFwiPlxcblxcdFxcdFxcdFxcdFxcdNCd0LDQt9Cw0LRcXG5cXHRcXHRcXHRcXHRcXHQ8L3YtYnRuPlxcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdCAgXFx0XFx0XFxuXFx0ICA8L2Rpdj5cXG4gIDwvZGl2PlxcdFxcdFxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXHRpbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnO1xcblxcdGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XFxuXFx0ZXhwb3J0IGRlZmF1bHQge1xcblxcdFxcdG1pZGRsZXdhcmU6ICdhdXRoJyxcXG5cXHRcXHRwcm9wczoge1xcblxcdFxcdFxcdGlkOiB7XFxuXFx0XFx0XFx0XFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcXG5cXHRcXHRcXHRcXHRyZXF1aXJlZDogdHJ1ZVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9LFxcblxcdFxcdGRhdGEoKSB7XFxuXFx0XFx0XFx0cmV0dXJuIHtcXG5cXHRcXHRcXHRcXHRkaXNhYmxlZDogdHJ1ZSxcXG5cXHRcXHRcXHRcXHRkYXRlOiBudWxsLFxcblxcdCAgICAgIG1lbnU6IGZhbHNlLFxcblxcdCAgICAgIG1vZGFsOiBmYWxzZSxcXG5cXHQgICAgICBuYW1lOiAnJyxcXG5cXHQgICAgICB2YWxpZDogZmFsc2UsXFxuXFx0ICAgICAgZGVmYXVsdEl0ZW06IHt9LFxcblxcdCAgICAgIG5ld1Bvc2l0aW9uOiAnJyxcXG5cXHQgICAgICBuYW1lUnVsZXM6IFtcXG5cXHQgICAgICAgIHYgPT4gISF2IHx8ICfQktCy0LXQtNC40YLQtSDQt9C90LDRh9C10L3QuNC1JyxcXG5cXHQgICAgICAgIHYgPT4gKHYgJiYgdi5sZW5ndGggPiAxKSB8fCAn0JjQvNGPINC00L7Qu9C20L3QviDRgdC+0LTQtdGA0LbQsNGC0Ywg0LzQuNC90LjQvNGD0LwgMiDQsdGD0LrQstGLJyxcXG5cXHQgICAgICBdLFxcblxcdCAgICAgIGVtYWlsUnVsZXM6IFtcXG5cXHQgICAgICAgIHYgPT4gISF2IHx8ICfQktCy0LXQtNC40YLQtSBFLW1haWwnLFxcblxcdCAgICAgICAgdiA9PiAvXlxcXFx3KyhbLi1dP1xcXFx3KykqQFxcXFx3KyhbLi1dP1xcXFx3KykqKFxcXFwuXFxcXHd7MiwzfSkrJC8udGVzdCh2KSB8fCAn0J3QtSDQstCw0LvQuNC00L3Ri9C5IEUtbWFpbCdcXG5cXHQgICAgICBdLFxcblxcdFxcdFxcdH1cXG5cXHRcXHR9LFxcblxcdFxcdGNvbXB1dGVkOiB7XFxuXFx0XFx0XFx0Li4ubWFwR2V0dGVycyh7XFxuXFx0XFx0XFx0XFx0aXRlbTogJ2VtcGxveWVlcy9lbXBsb3llZScsXFxuXFx0XFx0XFx0XFx0cG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucydcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRidXR0b25UZXh0KCkge1xcblxcdFxcdFxcdFxcdHJldHVybiAhdGhpcy5kaXNhYmxlZCA/IFxcXCLQntCx0L3QvtCy0LjRgtGMXFxcIiA6IFxcXCLQmNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtVxcXCI7XFxuXFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRhdmF0YXIoKSB7XFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcXFwiL3N0b3JhZ2UvYXZhdGFycy9uby1hdmF0YXIuanBnXFxcIlxcblxcdFxcdFxcdH1cXG5cXHRcXHR9LFxcblxcdFxcdC8vINCX0LDQs9GA0YPQt9C60LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0LXRgNC10LQg0LzQvtC90YLQuNGA0L7QstCw0L3QuNC10Lwg0LrQvtC80L/QvtC90LXQvdGC0LBcXG5cXHRcXHRiZWZvcmVSb3V0ZUVudGVyICh0bywgZnJvbSwgbmV4dCkge1xcbiAgICBcXHRuZXh0KHZtID0+IHZtLiRzdG9yZS5kaXNwYXRjaCgnZW1wbG95ZWVzL2xvYWRPbmUnLCB2bS5pZCkpO1xcbiAgXFx0fSxcXG5cXHRcXHRtZXRob2RzOiB7XFxuXFx0XFx0XFx0Li4ubWFwQWN0aW9ucyh7XFxuXFx0XFx0XFx0XFx0Y2hhbmdlSXRlbTogJ2VtcGxveWVlcy9lZGl0JyxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRidXR0b25BY3Rpb24oKSB7XFxuXFx0XFx0XFx0XFx0aWYgKCF0aGlzLmRpc2FibGVkKSB7XFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5pdGVtLnBvc2l0aW9uX2lkID0gdGhpcy5wb3NpdGlvbnMuZmluZEluZGV4KGVsID0+IGVsLnRpdGxlID09IHRoaXMubmV3UG9zaXRpb24pO1xcblxcdFxcdFxcdFxcdFxcdGNvbnNvbGUubG9nKHRoaXMuaXRlbS5wb3NpdGlvbl9pZClcXG5cXHRcXHRcXHRcXHRcXHQvL3RoaXMuY2hhbmdlSXRlbSh0aGlzLml0ZW0pO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHR0aGlzLmRlZmF1bHRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pdGVtKTtcXG5cXHRcXHRcXHRcXHR0aGlzLmRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQ7XFx0XFx0XFxuXFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRiYWNrKCkge1xcdFxcblxcdFxcdFxcdFxcdGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm4gdGhpcy4kcm91dGVyLmdvKC0xKTtcXG5cXHRcXHRcXHRcXHRmb3IobGV0IGtleSBpbiB0aGlzLml0ZW0pIHtcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLml0ZW1ba2V5XSA9IHRoaXMuZGVmYXVsdEl0ZW1ba2V5XVxcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHR0aGlzLmRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQ7XFx0XFx0XFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRhc3luYyB1cGxvYWRQaG90byhlKSB7XFxuXFx0XFx0XFx0XFx0Y29uc3QgaW1hZ2VmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YXRhci1maWxlJykuZmlsZXNbMF07XFxuXFx0XFx0XFx0XFx0aWYgKCFpbWFnZWZpbGUpIHJldHVybjtcXG5cXHRcXHQgICAgdHJ5IHtcXG5cXHRcXHQgICAgXFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7ICAgIFxcdFxcdFxcdFxcdCAgICBcXHRcXG5cXHRcXHRcXHRcXHRcXHRmb3JtRGF0YS5hcHBlbmQoXFxcImltYWdlXFxcIiwgaW1hZ2VmaWxlKTtcXG5cXHRcXHRcXHRcXHRcXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkICsgJy9hdmF0YXInLCBmb3JtRGF0YSwge1xcblxcdFxcdFxcdFxcdFxcdCAgICAgaGVhZGVyczoge1xcblxcdFxcdFxcdFxcdFxcdCAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXFxuXFx0XFx0XFx0XFx0XFx0ICAgICB9XFxuXFx0XFx0XFx0XFx0XFx0IH0pO1xcblxcdFxcdFxcdFxcdFxcdHRoaXMuaXRlbS5hdmF0YXIgPSBkYXRhO1xcbiAgICBcXHRcXHR9IGNhdGNoIChlKSB7XFxuICAgICAgXFx0XFx0Y29uc29sZS5lcnJvcign0J3QtSDQt9Cw0LPRgNGD0LfQuNC70YHRjyDQsNCy0LDRgtCw0YAnLCBlKVxcbiAgICBcXHRcXHR9XFx0XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG5cXHQqIHtcXG5cXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94OztcXG5cXHRcXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFx0fVxcblxcblxcdGgyIHtcXG5cXHRcXHRmbGV4LWJhc2lzOiAxMDAlO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0cCxcXG5cXHQuZW1wbG95ZWUsXFxuXFx0LmF2YXRhcl9fb3ZlcmxheSB7XFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcblxcdFxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRcXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRcXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0fVxcblxcblxcdHAge1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0XFx0cGFkZGluZzogMTBweDtcXG5cXHRcXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG5cXHR9XFxuXFxuXFx0cDpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XFxuXFx0fVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZW1wbG95ZWVcIj5cbiAgXHQ8aDI+e3sgJHQoJ2VtcGxveWVlJykgfX08L2gyPlxuICBcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXJcIj5cbiAgXHRcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXCI+XG4gIFx0XHRcdFx0PGRpdiBjbGFzcz1cImF2YXRhcl9fb3ZlcmxheVwiPlxuICBcdFx0XHRcdFx0PHVwbG9hZC1idXR0b24gOnRpdGxlPVwiJHQoJ2NoYW5nZV9pbWFnZScpXCIgOnNlbGVjdGVkQ2FsbGJhY2s9XCJ1cGxvYWRQaG90b1wiPjwvdXBsb2FkLWJ1dHRvbj5cbiAgXHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0XHQ8aW1nIDpzcmM9XCJhdmF0YXJcIiA6YWx0PVwiaXRlbS5maXJzdF9uYW1lXCI+XG4gIFx0XHRcdDwvZGl2Plx0XG5cdFx0XHQ8L2Rpdj5cblx0ICBcdDxkaXYgY2xhc3M9XCJlbXBsb3llZV9fZGVzY3JcIj5cblx0ICBcdFx0PHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCduYW1lJylcIlxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLmZpcnN0X25hbWVcIlxuXHRcdFx0XHRcdCAgICAgIDpjb3VudGVyPVwiNzBcIlxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXG5cdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XG5cdFx0XHRcdFx0ICAgIDx2LXRleHQtZmllbGRcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnbGFzdF9uYW1lJylcIlxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLmxhc3RfbmFtZVwiXG5cdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwibmFtZVJ1bGVzXCJcblx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxuXHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxuXHRcdFx0XHQ8di10ZXh0LWZpZWxkXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3BhdHJvbnltaWMnKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucGF0cm9ueW1pY1wiXG5cdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwibmFtZVJ1bGVzXCJcblx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcblx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cbjwhLS0gXHRcdFx0XHQ8c2VsZWN0IG5hbWU9XCJwb3NpdGlvbnNcIj5cblx0XHRcdFx0XHQ8b3B0aW9uIHYtZm9yPVwicG9zaXRpb24gaW4gcG9zaXRpb25zXCIgOnZhbHVlPVwicG9zaXRpb24uaWRcIj57e3Bvc2l0aW9uLnRpdGxlfX08L29wdGlvbj5cblx0XHRcdFx0PC9zZWxlY3Q+IC0tPlxuXHRcdFx0XHQ8di1zZWxlY3Rcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgncG9zaXRpb24nKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cInRoaXMuaXRlbS5wb3NpdGlvbl9pZFwiXG5cdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwiY2FyZF90cmF2ZWxcIlxuXHRcdFx0XHRcdCAgICAgIDppdGVtcz1cInBvc2l0aW9uc1wiXG5cdFx0XHRcdFx0ICAgICAgaXRlbS10ZXh0PVwidGl0bGVcIlxuICAgICAgICAgIFx0XHRcdGl0ZW0tdmFsdWU9XCJpZFwiXG5cdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwiW3YgPT4gISF2IHx8ICfQktGL0LHQtdGA0LjRgtC1INC00L7Qu9C20L3QvtGB0YLRjCddXCJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxuXHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0Pjwvdi1zZWxlY3Q+XG5cdCAgXHRcdDx2LXRleHQtZmllbGRcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgncGhvbmVfbnVtYmVyJylcIlxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLnBob25lX251bWJlclwiXG5cdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwicGhvbmVfaXBob25lXCJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxuXHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxuXHRcdFx0XHQ8di10ZXh0LWZpZWxkXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3NhbGFyeScpXCJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5zYWxhcnlcIlxuXHRcdFx0XHRcdCAgICAgIHByZXBlbmQtaWNvbj1cImF0dGFjaF9tb25leVwiXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcblx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cblx0XHRcdFx0PHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdhZGRyZXNzJylcIlxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLmFkZHJlc3NcIlxuXHRcdFx0XHRcdCAgICAgIHByZXBlbmQtaWNvbj1cImhvbWVcIlxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXG5cdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XG5cdFx0XHRcdDx2LWxheW91dCByb3cgd3JhcD5cblx0XHRcdFx0XHQ8di1mbGV4IHhzMTI+XG5cdFx0XHRcdFx0XHQ8di1tZW51XG5cdFx0XHRcdFx0XHQgIHJlZj1cIm1lbnVcIlxuXHRcdFx0XHRcdFx0ICBsYXp5XG5cdFx0XHRcdFx0XHQgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0ICB2LW1vZGVsPVwibWVudVwiXG5cdFx0XHRcdFx0XHQgIHRyYW5zaXRpb249XCJzY2FsZS10cmFuc2l0aW9uXCJcblx0XHRcdFx0XHRcdCAgb2Zmc2V0LXlcblx0XHRcdFx0XHRcdCAgZnVsbC13aWR0aFxuXHRcdFx0XHRcdFx0ICA6bnVkZ2UtcmlnaHQ9XCI0MFwiXG5cdFx0XHRcdFx0XHQgIG1pbi13aWR0aD1cIjI5MHB4XCJcblx0XHRcdFx0XHRcdCAgOnJldHVybi12YWx1ZS5zeW5jPVwiZGF0ZVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQgIDx2LXRleHQtZmllbGRcblx0XHRcdFx0XHRcdCAgICBzbG90PVwiYWN0aXZhdG9yXCJcblx0XHRcdFx0XHRcdCAgICA6bGFiZWw9XCIkdCgnYmlydGhkYXknKVwiXG5cdFx0XHRcdFx0XHQgICAgdi1tb2RlbD1cIml0ZW0uYmlydGhkYXlcIlxuXHRcdFx0XHRcdFx0ICAgIHByZXBlbmQtaWNvbj1cImV2ZW50XCJcblx0XHRcdFx0XHRcdCAgICByZWFkb25seVxuXHRcdFx0XHRcdFx0ICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRcdCAgPjwvdi10ZXh0LWZpZWxkPlxuXHRcdFx0XHRcdFx0ICA8di1kYXRlLXBpY2tlciB2LWlmPVwiIWRpc2FibGVkXCIgdi1tb2RlbD1cIml0ZW0uYmlydGhkYXlcIiBuby10aXRsZSBzY3JvbGxhYmxlPlxuXHRcdFx0XHRcdFx0ICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuXHRcdFx0XHRcdFx0ICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIm1lbnUgPSBmYWxzZVwiPnt7ICR0KCdjYW5jZWwnKSB9fTwvdi1idG4+XG5cdFx0XHRcdFx0XHQgICAgPHYtYnRuIGZsYXQgY29sb3I9XCJwcmltYXJ5XCIgQGNsaWNrPVwiJHJlZnMubWVudS5zYXZlKGRhdGUpXCI+e3sgJHQoJ29rJykgfX08L3YtYnRuPlxuXHRcdFx0XHRcdFx0ICA8L3YtZGF0ZS1waWNrZXI+XG5cdFx0XHRcdFx0XHQ8L3YtbWVudT5cblx0XHRcdFx0XHQ8L3YtZmxleD5cblx0XHRcdFx0PC92LWxheW91dD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cblx0XHRcdFx0XHQ8di1idG4gbGFyZ2UgQGNsaWNrPVwiYnV0dG9uQWN0aW9uKClcIj5cblx0XHRcdFx0XHR7eyBidXR0b25UZXh0IH19XG5cdFx0XHRcdFx0PC92LWJ0bj5cblx0XHRcdFx0XHQ8di1idG4gbGFyZ2UgQGNsaWNrPVwiYmFja1wiPlxuXHRcdFx0XHRcdNCd0LDQt9Cw0LRcblx0XHRcdFx0XHQ8L3YtYnRuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0ICBcdFx0XG5cdCAgPC9kaXY+XG4gIDwvZGl2Plx0XHRcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XG5cdGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRtaWRkbGV3YXJlOiAnYXV0aCcsXG5cdFx0cHJvcHM6IHtcblx0XHRcdGlkOiB7XG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGlzYWJsZWQ6IHRydWUsXG5cdFx0XHRcdGRhdGU6IG51bGwsXG5cdCAgICAgIG1lbnU6IGZhbHNlLFxuXHQgICAgICBtb2RhbDogZmFsc2UsXG5cdCAgICAgIG5hbWU6ICcnLFxuXHQgICAgICB2YWxpZDogZmFsc2UsXG5cdCAgICAgIGRlZmF1bHRJdGVtOiB7fSxcblx0ICAgICAgbmV3UG9zaXRpb246ICcnLFxuXHQgICAgICBuYW1lUnVsZXM6IFtcblx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtScsXG5cdCAgICAgICAgdiA9PiAodiAmJiB2Lmxlbmd0aCA+IDEpIHx8ICfQmNC80Y8g0LTQvtC70LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDQvNC40L3QuNC80YPQvCAyINCx0YPQutCy0YsnLFxuXHQgICAgICBdLFxuXHQgICAgICBlbWFpbFJ1bGVzOiBbXG5cdCAgICAgICAgdiA9PiAhIXYgfHwgJ9CS0LLQtdC00LjRgtC1IEUtbWFpbCcsXG5cdCAgICAgICAgdiA9PiAvXlxcdysoWy4tXT9cXHcrKSpAXFx3KyhbLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8udGVzdCh2KSB8fCAn0J3QtSDQstCw0LvQuNC00L3Ri9C5IEUtbWFpbCdcblx0ICAgICAgXSxcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHQuLi5tYXBHZXR0ZXJzKHtcblx0XHRcdFx0aXRlbTogJ2VtcGxveWVlcy9lbXBsb3llZScsXG5cdFx0XHRcdHBvc2l0aW9uczogJ3Bvc2l0aW9ucy9wb3NpdGlvbnMnXG5cdFx0XHR9KSxcblx0XHRcdGJ1dHRvblRleHQoKSB7XG5cdFx0XHRcdHJldHVybiAhdGhpcy5kaXNhYmxlZCA/IFwi0J7QsdC90L7QstC40YLRjFwiIDogXCLQmNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtVwiO1xuXHRcdFx0fSxcblx0XHRcdGF2YXRhcigpIHtcblx0XHRcdFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcIi9zdG9yYWdlL2F2YXRhcnMvbm8tYXZhdGFyLmpwZ1wiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyDQl9Cw0LPRgNGD0LfQutCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQv9C10YDQtdC0INC80L7QvdGC0LjRgNC+0LLQsNC90LjQtdC8INC60L7QvNC/0L7QvdC10L3RgtCwXG5cdFx0YmVmb3JlUm91dGVFbnRlciAodG8sIGZyb20sIG5leHQpIHtcbiAgICBcdG5leHQodm0gPT4gdm0uJHN0b3JlLmRpc3BhdGNoKCdlbXBsb3llZXMvbG9hZE9uZScsIHZtLmlkKSk7XG4gIFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcblx0XHRcdFx0Y2hhbmdlSXRlbTogJ2VtcGxveWVlcy9lZGl0Jyxcblx0XHRcdH0pLFxuXHRcdFx0YnV0dG9uQWN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHR0aGlzLml0ZW0ucG9zaXRpb25faWQgPSB0aGlzLnBvc2l0aW9ucy5maW5kSW5kZXgoZWwgPT4gZWwudGl0bGUgPT0gdGhpcy5uZXdQb3NpdGlvbik7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5pdGVtLnBvc2l0aW9uX2lkKVxuXHRcdFx0XHRcdC8vdGhpcy5jaGFuZ2VJdGVtKHRoaXMuaXRlbSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5kZWZhdWx0SXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbSk7XG5cdFx0XHRcdHRoaXMuZGlzYWJsZWQgPSAhdGhpcy5kaXNhYmxlZDtcdFx0XG5cdFx0XHR9LFxuXHRcdFx0YmFjaygpIHtcdFxuXHRcdFx0XHRpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuIHRoaXMuJHJvdXRlci5nbygtMSk7XG5cdFx0XHRcdGZvcihsZXQga2V5IGluIHRoaXMuaXRlbSkge1xuXHRcdFx0XHRcdHRoaXMuaXRlbVtrZXldID0gdGhpcy5kZWZhdWx0SXRlbVtrZXldXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5kaXNhYmxlZCA9ICF0aGlzLmRpc2FibGVkO1x0XHRcdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdGFzeW5jIHVwbG9hZFBob3RvKGUpIHtcblx0XHRcdFx0Y29uc3QgaW1hZ2VmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YXRhci1maWxlJykuZmlsZXNbMF07XG5cdFx0XHRcdGlmICghaW1hZ2VmaWxlKSByZXR1cm47XG5cdFx0ICAgIHRyeSB7XG5cdFx0ICAgIFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7ICAgIFx0XHRcdFx0ICAgIFx0XG5cdFx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VmaWxlKTtcblx0XHRcdFx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkICsgJy9hdmF0YXInLCBmb3JtRGF0YSwge1xuXHRcdFx0XHRcdCAgICAgaGVhZGVyczoge1xuXHRcdFx0XHRcdCAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG5cdFx0XHRcdFx0ICAgICB9XG5cdFx0XHRcdFx0IH0pO1xuXHRcdFx0XHRcdHRoaXMuaXRlbS5hdmF0YXIgPSBkYXRhO1xuICAgIFx0XHR9IGNhdGNoIChlKSB7XG4gICAgICBcdFx0Y29uc29sZS5lcnJvcign0J3QtSDQt9Cw0LPRgNGD0LfQuNC70YHRjyDQsNCy0LDRgtCw0YAnLCBlKVxuICAgIFx0XHR9XHRcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXHQqIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94Oztcblx0XHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdH1cblxuXHRoMiB7XG5cdFx0ZmxleC1iYXNpczogMTAwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHRwLFxuXHQuZW1wbG95ZWUsXG5cdC5hdmF0YXJfX292ZXJsYXkge1xuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XG5cdFx0ZGlzcGxheTogLW1zLWZsZXg7XG5cdFx0ZGlzcGxheTogLW8tZmxleDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG5cblx0cCB7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xuXHR9XG5cblx0cDpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG5cdH1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVcIiB9LCBbXG4gICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJlbXBsb3llZVwiKSkpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX19hdmF0YXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYXZhdGFyX19vdmVybGF5XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInVwbG9hZC1idXR0b25cIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0uJHQoXCJjaGFuZ2VfaW1hZ2VcIiksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYWxsYmFjazogX3ZtLnVwbG9hZFBob3RvXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uYXZhdGFyLCBhbHQ6IF92bS5pdGVtLmZpcnN0X25hbWUgfSB9KVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2Rlc2NyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwibmFtZVwiKSxcbiAgICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmZpcnN0X25hbWUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImZpcnN0X25hbWVcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5maXJzdF9uYW1lXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJsYXN0X25hbWVcIiksXG4gICAgICAgICAgICBydWxlczogX3ZtLm5hbWVSdWxlcyxcbiAgICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmxhc3RfbmFtZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwibGFzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ubGFzdF9uYW1lXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwYXRyb255bWljXCIpLFxuICAgICAgICAgICAgcnVsZXM6IF92bS5uYW1lUnVsZXMsXG4gICAgICAgICAgICBjb3VudGVyOiA3MCxcbiAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ucGF0cm9ueW1pYyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwicGF0cm9ueW1pY1wiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnBhdHJvbnltaWNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicG9zaXRpb25cIiksXG4gICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImNhcmRfdHJhdmVsXCIsXG4gICAgICAgICAgICBpdGVtczogX3ZtLnBvc2l0aW9ucyxcbiAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwidGl0bGVcIixcbiAgICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcImlkXCIsXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhdiB8fCBcItCS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLml0ZW0ucG9zaXRpb25faWQsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KHRoaXMuaXRlbSwgXCJwb3NpdGlvbl9pZFwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0aGlzLml0ZW0ucG9zaXRpb25faWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInBob25lX251bWJlclwiKSxcbiAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwicGhvbmVfaXBob25lXCIsXG4gICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ucGhvbmVfbnVtYmVyLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJwaG9uZV9udW1iZXJcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5waG9uZV9udW1iZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInNhbGFyeVwiKSxcbiAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiYXR0YWNoX21vbmV5XCIsXG4gICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uc2FsYXJ5LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJzYWxhcnlcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5zYWxhcnlcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImFkZHJlc3NcIiksXG4gICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImhvbWVcIixcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5hZGRyZXNzLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJhZGRyZXNzXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uYWRkcmVzc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LW1lbnVcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcIm1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYXp5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2Utb24tY29udGVudC1jbGlja1wiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInNjYWxlLXRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBcIm9mZnNldC15XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJmdWxsLXdpZHRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJudWRnZS1yaWdodFwiOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgICBcIm1pbi13aWR0aFwiOiBcIjI5MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm4tdmFsdWVcIjogX3ZtLmRhdGVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpyZXR1cm5WYWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWVudSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVudSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImJpcnRoZGF5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJldmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uYmlydGhkYXksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImJpcnRoZGF5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uYmlydGhkYXlcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICFfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZGF0ZS1waWNrZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tdGl0bGVcIjogXCJcIiwgc2Nyb2xsYWJsZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uYmlydGhkYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImJpcnRoZGF5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uYmlydGhkYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lbnUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhbmNlbFwiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRyZWZzLm1lbnUuc2F2ZShfdm0uZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJva1wiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFyZ2U6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uYnV0dG9uQWN0aW9uKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiArIF92bS5fcyhfdm0uYnV0dG9uVGV4dCkgKyBcIlxcblxcdFxcdFxcdFxcdFxcdFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ2LWJ0blwiLCB7IGF0dHJzOiB7IGxhcmdlOiBcIlwiIH0sIG9uOiB7IGNsaWNrOiBfdm0uYmFjayB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx00J3QsNC30LDQtFxcblxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVlYjg3Y2QwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDgiXSwic291cmNlUm9vdCI6IiJ9