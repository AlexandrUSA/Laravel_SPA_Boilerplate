webpackJsonp([9],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(195)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(197)
/* template */
var __vue_template__ = __webpack_require__(198)
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

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("14e4a03c", content, false, {});
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

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n\ttext-align: center;\n}\np[data-v-5eb87cd0],\n.employee[data-v-5eb87cd0],\n.avatar__overlay[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\np[data-v-5eb87cd0] {\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AAoMA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA,mBAAA;CACA;AAEA;;;CAIA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA","file":"Show.vue","sourcesContent":["<template>\r\n  <div class=\"employee\">\r\n  \t<h2>{{ $t('employee') }}</h2>\r\n  \t\t<div class=\"employee__avatar\">\r\n  \t\t\t<div class=\"employee__avatar-container\">\r\n  \t\t\t\t<div class=\"avatar__overlay\">\r\n  \t\t\t\t\t<upload-button :title=\"$t('change_image')\" :selectedCallback=\"uploadPhoto\"></upload-button>\r\n  \t\t\t\t</div>\r\n  \t\t\t\t<img :src=\"avatar\" :alt=\"item.first_name\">\r\n  \t\t\t</div>\t\r\n\t\t\t</div>\r\n\t  \t<div class=\"employee__descr\">\r\n\t  \t\t<v-form v-model=\"valid\" ref=\"form\" lazy-validation>\r\n\t  \t\t\t<v-text-field\r\n\t\t\t\t\t      :label=\"$t('name')\"\r\n\t\t\t\t\t      v-model=\"item.first_name\"\r\n\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('last_name')\"\r\n\t\t\t\t\t\t      v-model=\"item.last_name\"\r\n\t\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('patronymic')\"\r\n\t\t\t\t\t\t      v-model=\"item.patronymic\"\r\n\t\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-select\r\n\t\t\t\t\t\t      :label=\"$t('position')\"\r\n\t\t\t\t\t\t      v-model=\"item.position_id\"\r\n\t\t\t\t\t\t      prepend-icon=\"card_travel\"\r\n\t\t\t\t\t\t      :items=\"positions\"\r\n\t\t\t\t\t\t      item-text=\"title\"\r\n\t          \t\t\titem-value=\"id\"\r\n\t\t\t\t\t\t      :rules=\"[v => !!v || 'Выберите должность']\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-select>\r\n\t\t  \t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('phone_number')\"\r\n\t\t\t\t\t\t      v-model=\"item.phone_number\"\r\n\t\t\t\t\t\t      prepend-icon=\"phone_iphone\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('salary')\"\r\n\t\t\t\t\t\t      v-model=\"item.salary\"\r\n\t\t\t\t\t\t      prepend-icon=\"attach_money\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('address')\"\r\n\t\t\t\t\t\t      v-model=\"item.address\"\r\n\t\t\t\t\t\t      prepend-icon=\"home\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-layout row wrap>\r\n\t\t\t\t\t\t<v-flex xs12>\r\n\t\t\t\t\t\t\t<v-menu\r\n\t\t\t\t\t\t\t  ref=\"menu\"\r\n\t\t\t\t\t\t\t  lazy\r\n\t\t\t\t\t\t\t  :close-on-content-click=\"false\"\r\n\t\t\t\t\t\t\t  v-model=\"menu\"\r\n\t\t\t\t\t\t\t  transition=\"scale-transition\"\r\n\t\t\t\t\t\t\t  offset-y\r\n\t\t\t\t\t\t\t  full-width\r\n\t\t\t\t\t\t\t  :nudge-right=\"40\"\r\n\t\t\t\t\t\t\t  min-width=\"290px\"\r\n\t\t\t\t\t\t\t  :return-value.sync=\"date\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</v-menu>\r\n\t\t\t\t\t\t</v-flex>\r\n\t\t\t\t\t</v-layout>\r\n\t\t\t\t\t<div class=\"buttons\">\r\n\t\t\t\t\t\t<v-btn large @click=\"buttonAction()\" :disabled=\"!valid\" type=\"submit\">\r\n\t\t\t\t\t\t{{ buttonText }}\r\n\t\t\t\t\t\t</v-btn>\r\n\t\t\t\t\t\t<v-btn large @click=\"back\">\r\n\t\t\t\t\t\tНазад\r\n\t\t\t\t\t\t</v-btn>\r\n\t\t\t\t\t</div>\r\n\t  \t\t</v-form>\t  \t\t\r\n\t  </div>\r\n  </div>\t\t\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\timport axios from 'axios';\r\n\texport default {\r\n\t\tmiddleware: ['auth', 'organisation'],\r\n\t\tprops: {\r\n\t\t\tid: {\r\n\t\t\t\ttype: [Number, String],\r\n\t\t\t\trequired: true\r\n\t\t\t}\r\n\t\t},\r\n\t\tdata() {\r\n\t\t\treturn {\r\n\t\t\t\tdisabled: true,\r\n\t\t\t\tdate: null,\r\n\t      menu: false,\r\n\t      modal: false,\r\n\t      name: '',\r\n\t      valid: true,\r\n\t      defaultItem: {},\r\n\t      nameRules: [\r\n\t        v => !!v || 'Введите значение',\r\n\t        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',\r\n\t      ],\r\n\t      emailRules: [\r\n\t        v => !!v || 'Введите E-mail',\r\n\t        v => /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(v) || 'Не валидный E-mail'\r\n\t      ]\r\n\t\t\t}\r\n\t\t},\r\n\t\tcomputed: {\r\n\t\t\t...mapGetters({\r\n\t\t\t\titems: 'employees/employees',\r\n\t\t\t\tpositions: 'positions/positions',\r\n\t\t\t\tuser: 'auth/user'\r\n\t\t\t}),\r\n      item() {\r\n        return this.items.find(el => el.id === +this.id) || {}\r\n      },\r\n\t\t\tbuttonText() {\r\n\t\t\t\treturn !this.disabled ? \"Обновить\" : \"Изменить данные\";\r\n\t\t\t},\r\n\t\t\tavatar() {\r\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"/storage/avatars/no-avatar.jpg\"\r\n\t\t\t}\r\n\t\t},\r\n\t\t// Загрузка пользователя перед монтированием компонента\r\n\t\tbeforeRouteEnter (to, from, next) {\r\n    \tnext(vm => vm.$store.dispatch('employees/loadOne', vm.id));\r\n  \t},\r\n\t\tmethods: {\r\n\t\t\t...mapActions({\r\n\t\t\t\tchangeItem: 'employees/edit',\r\n\t\t\t\tupdateUser: 'auth/updateUser'\r\n\t\t\t}),\r\n\t\t\tuserUpdate() {\r\n\t\t\t\tconst newUser = Object.assign({}, this.user);\r\n\t\t\t\tnewUser.name = this.item.first_name;\r\n\t\t\t\tthis.updateUser(newUser);\r\n\t\t\t},\r\n\t\t\tbuttonAction() {\r\n\t\t\t\tif (!this.disabled) {\r\n\t\t\t\t\tthis.changeItem(this.item);\r\n\t\t\t\t\tif (this.item.user_id == this.user.id) {\r\n\t\t\t\t\t\tthis.userUpdate()\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\tthis.defaultItem = Object.assign({}, this.item);\r\n\t\t\t\tthis.disabled = !this.disabled;\t\t\r\n\t\t\t},\r\n\t\t\tback() {\t\r\n\t\t\t\tif (this.disabled) return this.$router.go(-1);\r\n\t\t\t\tfor(let key in this.item) {\r\n\t\t\t\t\tthis.item[key] = this.defaultItem[key]\r\n\t\t\t\t}\r\n\t\t\t\tthis.disabled = !this.disabled;\t\t\t\t\t\t\r\n\t\t\t},\r\n\t\t\tasync uploadPhoto(e) {\r\n\t\t\t\tconst imagefile = document.getElementById('avatar-file').files[0];\r\n\t\t\t\tif (!imagefile) return;\r\n\t\t    try {\r\n\t\t    \tlet formData = new FormData();    \t\t\t\t    \t\r\n\t\t\t\t\tformData.append(\"image\", imagefile);\r\n\t\t\t\t\tconst { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {\r\n\t\t\t\t\t     headers: {\r\n\t\t\t\t\t       'Content-Type': 'multipart/form-data'\r\n\t\t\t\t\t     }\r\n\t\t\t\t\t });\r\n\t\t\t\t\tthis.item.avatar = data;\r\n\t\t\t\t\tthis.$store.commit('employees/edit', this.item)\r\n    \t\t} catch (e) {\r\n      \t\tconsole.error('Не загрузился аватар', e)\r\n    \t\t}\t\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t* {\r\n\t\tbox-sizing: border-box;;\r\n\t\tfont-family: 'Roboto', sans-serif;\r\n\t}\r\n\r\n\th2 {\r\n\t\tflex-basis: 100%;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\tp,\r\n\t.employee,\r\n\t.avatar__overlay {\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\tp {\r\n\t\tjustify-content: space-between;\r\n\t\tmargin: 0;\r\n\t\tpadding: 10px;\r\n\t\ttransition: background-color .3s;\r\n\t}\r\n\r\n\tp:hover {\r\n\t\tbackground-color: rgba(255, 255, 255, .1);\r\n\t}\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 197:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	middleware: ['auth', 'organisation'],
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
			valid: true,
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
		};
	},

	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
		items: 'employees/employees',
		positions: 'positions/positions',
		user: 'auth/user'
	}), {
		item: function item() {
			var _this = this;

			return this.items.find(function (el) {
				return el.id === +_this.id;
			}) || {};
		},
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
		changeItem: 'employees/edit',
		updateUser: 'auth/updateUser'
	}), {
		userUpdate: function userUpdate() {
			var newUser = Object.assign({}, this.user);
			newUser.name = this.item.first_name;
			this.updateUser(newUser);
		},
		buttonAction: function buttonAction() {
			if (!this.disabled) {
				this.changeItem(this.item);
				if (this.item.user_id == this.user.id) {
					this.userUpdate();
				}
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
								this.$store.commit('employees/edit', this.item);
								_context.next = 17;
								break;

							case 14:
								_context.prev = 14;
								_context.t0 = _context['catch'](3);

								console.error('Не загрузился аватар', _context.t0);

							case 17:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this, [[3, 14]]);
			}));

			function uploadPhoto(_x) {
				return _ref.apply(this, arguments);
			}

			return uploadPhoto;
		}()
	})
});

/***/ }),

/***/ 198:
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
        _c(
          "v-form",
          {
            ref: "form",
            attrs: { "lazy-validation": "" },
            model: {
              value: _vm.valid,
              callback: function($$v) {
                _vm.valid = $$v
              },
              expression: "valid"
            }
          },
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
                    _c("v-menu", {
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
                    })
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
                    attrs: { large: "", disabled: !_vm.valid, type: "submit" },
                    on: {
                      click: function($event) {
                        _vm.buttonAction()
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n\t\t\t\t\t\t" +
                        _vm._s(_vm.buttonText) +
                        "\n\t\t\t\t\t\t"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("v-btn", { attrs: { large: "" }, on: { click: _vm.back } }, [
                  _vm._v("\n\t\t\t\t\t\tНазад\n\t\t\t\t\t\t")
                ])
              ],
              1
            )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0Esa0VBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLCtDQUFnRCxtQ0FBbUMsb0NBQW9DLHNDQUFzQyxHQUFH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QUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUyxvQkFBb0IsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyxXQUFXLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5QkFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0RBQWtEO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsWUFBWSxPQUFPLGtCQUFrQixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy85LjUzMzY0YjFjZjhiZDM5Y2JkZTRjLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTVlYjg3Y2QwXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZW1wbG95ZWVzXFxcXFNob3cudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlYjg3Y2QwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWViODdjZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDhcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjE0ZTRhMDNjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuKltkYXRhLXYtNWViODdjZDBdIHtcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0ICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OztcXG5cXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbmgyW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcblxcdCAgICBmbGV4LWJhc2lzOiAxMDAlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxucFtkYXRhLXYtNWViODdjZDBdLFxcbi5lbXBsb3llZVtkYXRhLXYtNWViODdjZDBdLFxcbi5hdmF0YXJfX292ZXJsYXlbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxucFtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcblxcdCAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvY3JtL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFvTUE7Q0FDQSwrQkFBQTtTQUFBLHVCQUFBO0NBQ0Esa0NBQUE7Q0FDQTtBQUVBO0NBQ0EsOEJBQUE7S0FBQSxpQkFBQTtDQUNBLG1CQUFBO0NBQ0E7QUFFQTs7O0NBSUEsbUJBQUE7Q0FDQSxrQkFBQTtDQUNBLGlCQUFBO0NBQ0EscUJBQUE7Q0FBQSxxQkFBQTtDQUFBLGNBQUE7Q0FDQTtBQUVBO0NBQ0EsMEJBQUE7S0FBQSx1QkFBQTtTQUFBLCtCQUFBO0NBQ0EsVUFBQTtDQUNBLGNBQUE7Q0FDQSx5Q0FBQTtDQUFBLGlDQUFBO0NBQ0E7QUFFQTtDQUNBLDBDQUFBO0NBQ0FcIixcImZpbGVcIjpcIlNob3cudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImVtcGxveWVlXFxcIj5cXHJcXG4gIFxcdDxoMj57eyAkdCgnZW1wbG95ZWUnKSB9fTwvaDI+XFxyXFxuICBcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fYXZhdGFyXFxcIj5cXHJcXG4gIFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXFxcIj5cXHJcXG4gIFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImF2YXRhcl9fb3ZlcmxheVxcXCI+XFxyXFxuICBcXHRcXHRcXHRcXHRcXHQ8dXBsb2FkLWJ1dHRvbiA6dGl0bGU9XFxcIiR0KCdjaGFuZ2VfaW1hZ2UnKVxcXCIgOnNlbGVjdGVkQ2FsbGJhY2s9XFxcInVwbG9hZFBob3RvXFxcIj48L3VwbG9hZC1idXR0b24+XFxyXFxuICBcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG4gIFxcdFxcdFxcdFxcdDxpbWcgOnNyYz1cXFwiYXZhdGFyXFxcIiA6YWx0PVxcXCJpdGVtLmZpcnN0X25hbWVcXFwiPlxcclxcbiAgXFx0XFx0XFx0PC9kaXY+XFx0XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0ICBcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fZGVzY3JcXFwiPlxcclxcblxcdCAgXFx0XFx0PHYtZm9ybSB2LW1vZGVsPVxcXCJ2YWxpZFxcXCIgcmVmPVxcXCJmb3JtXFxcIiBsYXp5LXZhbGlkYXRpb24+XFxyXFxuXFx0ICBcXHRcXHRcXHQ8di10ZXh0LWZpZWxkXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgnbmFtZScpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0uZmlyc3RfbmFtZVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6Y291bnRlcj1cXFwiNzBcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgPHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ2xhc3RfbmFtZScpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ubGFzdF9uYW1lXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwibmFtZVJ1bGVzXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCI3MFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0Pjwvdi10ZXh0LWZpZWxkPlxcclxcblxcdFxcdFxcdFxcdFxcdDx2LXRleHQtZmllbGRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdwYXRyb255bWljJylcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5wYXRyb255bWljXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpydWxlcz1cXFwibmFtZVJ1bGVzXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCI3MFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8di1zZWxlY3RcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdwb3NpdGlvbicpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ucG9zaXRpb25faWRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJjYXJkX3RyYXZlbFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6aXRlbXM9XFxcInBvc2l0aW9uc1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICBpdGVtLXRleHQ9XFxcInRpdGxlXFxcIlxcclxcblxcdCAgICAgICAgICBcXHRcXHRcXHRpdGVtLXZhbHVlPVxcXCJpZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6cnVsZXM9XFxcIlt2ID0+ICEhdiB8fCAn0JLRi9Cx0LXRgNC40YLQtSDQtNC+0LvQttC90L7RgdGC0YwnXVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0Pjwvdi1zZWxlY3Q+XFxyXFxuXFx0XFx0ICBcXHRcXHQ8di10ZXh0LWZpZWxkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgncGhvbmVfbnVtYmVyJylcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5waG9uZV9udW1iZXJcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJwaG9uZV9pcGhvbmVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8di10ZXh0LWZpZWxkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgnc2FsYXJ5JylcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5zYWxhcnlcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJhdHRhY2hfbW9uZXlcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8di10ZXh0LWZpZWxkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgnYWRkcmVzcycpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0uYWRkcmVzc1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICBwcmVwZW5kLWljb249XFxcImhvbWVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8di1sYXlvdXQgcm93IHdyYXA+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHYtZmxleCB4czEyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDx2LW1lbnVcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgIHJlZj1cXFwibWVudVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgIGxhenlcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVxcXCJmYWxzZVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgIHYtbW9kZWw9XFxcIm1lbnVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICB0cmFuc2l0aW9uPVxcXCJzY2FsZS10cmFuc2l0aW9uXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgb2Zmc2V0LXlcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgIGZ1bGwtd2lkdGhcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgIDpudWRnZS1yaWdodD1cXFwiNDBcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICBtaW4td2lkdGg9XFxcIjI5MHB4XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgOnJldHVybi12YWx1ZS5zeW5jPVxcXCJkYXRlXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3YtbWVudT5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L3YtZmxleD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3YtbGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImJ1dHRvbnNcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx2LWJ0biBsYXJnZSBAY2xpY2s9XFxcImJ1dHRvbkFjdGlvbigpXFxcIiA6ZGlzYWJsZWQ9XFxcIiF2YWxpZFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR7eyBidXR0b25UZXh0IH19XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC92LWJ0bj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8di1idG4gbGFyZ2UgQGNsaWNrPVxcXCJiYWNrXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHTQndCw0LfQsNC0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC92LWJ0bj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHQgIFxcdFxcdDwvdi1mb3JtPlxcdCAgXFx0XFx0XFxyXFxuXFx0ICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcdFxcdFxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG5cXHRpbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnO1xcclxcblxcdGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XFxyXFxuXFx0ZXhwb3J0IGRlZmF1bHQge1xcclxcblxcdFxcdG1pZGRsZXdhcmU6IFsnYXV0aCcsICdvcmdhbmlzYXRpb24nXSxcXHJcXG5cXHRcXHRwcm9wczoge1xcclxcblxcdFxcdFxcdGlkOiB7XFxyXFxuXFx0XFx0XFx0XFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcXHJcXG5cXHRcXHRcXHRcXHRyZXF1aXJlZDogdHJ1ZVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdGRhdGEoKSB7XFxyXFxuXFx0XFx0XFx0cmV0dXJuIHtcXHJcXG5cXHRcXHRcXHRcXHRkaXNhYmxlZDogdHJ1ZSxcXHJcXG5cXHRcXHRcXHRcXHRkYXRlOiBudWxsLFxcclxcblxcdCAgICAgIG1lbnU6IGZhbHNlLFxcclxcblxcdCAgICAgIG1vZGFsOiBmYWxzZSxcXHJcXG5cXHQgICAgICBuYW1lOiAnJyxcXHJcXG5cXHQgICAgICB2YWxpZDogdHJ1ZSxcXHJcXG5cXHQgICAgICBkZWZhdWx0SXRlbToge30sXFxyXFxuXFx0ICAgICAgbmFtZVJ1bGVzOiBbXFxyXFxuXFx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtScsXFxyXFxuXFx0ICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoID4gMSkgfHwgJ9CY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDIg0LHRg9C60LLRiycsXFxyXFxuXFx0ICAgICAgXSxcXHJcXG5cXHQgICAgICBlbWFpbFJ1bGVzOiBbXFxyXFxuXFx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUgRS1tYWlsJyxcXHJcXG5cXHQgICAgICAgIHYgPT4gL15cXFxcdysoWy4tXT9cXFxcdyspKkBcXFxcdysoWy4tXT9cXFxcdyspKihcXFxcLlxcXFx3ezIsM30pKyQvLnRlc3QodikgfHwgJ9Cd0LUg0LLQsNC70LjQtNC90YvQuSBFLW1haWwnXFxyXFxuXFx0ICAgICAgXVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdGNvbXB1dGVkOiB7XFxyXFxuXFx0XFx0XFx0Li4ubWFwR2V0dGVycyh7XFxyXFxuXFx0XFx0XFx0XFx0aXRlbXM6ICdlbXBsb3llZXMvZW1wbG95ZWVzJyxcXHJcXG5cXHRcXHRcXHRcXHRwb3NpdGlvbnM6ICdwb3NpdGlvbnMvcG9zaXRpb25zJyxcXHJcXG5cXHRcXHRcXHRcXHR1c2VyOiAnYXV0aC91c2VyJ1xcclxcblxcdFxcdFxcdH0pLFxcclxcbiAgICAgIGl0ZW0oKSB7XFxyXFxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maW5kKGVsID0+IGVsLmlkID09PSArdGhpcy5pZCkgfHwge31cXHJcXG4gICAgICB9LFxcclxcblxcdFxcdFxcdGJ1dHRvblRleHQoKSB7XFxyXFxuXFx0XFx0XFx0XFx0cmV0dXJuICF0aGlzLmRpc2FibGVkID8gXFxcItCe0LHQvdC+0LLQuNGC0YxcXFwiIDogXFxcItCY0LfQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1XFxcIjtcXHJcXG5cXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdGF2YXRhcigpIHtcXHJcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy5pdGVtLmF2YXRhciA6IFxcXCIvc3RvcmFnZS9hdmF0YXJzL25vLWF2YXRhci5qcGdcXFwiXFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0Ly8g0JfQsNCz0YDRg9C30LrQsCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0L/QtdGA0LXQtCDQvNC+0L3RgtC40YDQvtCy0LDQvdC40LXQvCDQutC+0LzQv9C+0L3QtdC90YLQsFxcclxcblxcdFxcdGJlZm9yZVJvdXRlRW50ZXIgKHRvLCBmcm9tLCBuZXh0KSB7XFxyXFxuICAgIFxcdG5leHQodm0gPT4gdm0uJHN0b3JlLmRpc3BhdGNoKCdlbXBsb3llZXMvbG9hZE9uZScsIHZtLmlkKSk7XFxyXFxuICBcXHR9LFxcclxcblxcdFxcdG1ldGhvZHM6IHtcXHJcXG5cXHRcXHRcXHQuLi5tYXBBY3Rpb25zKHtcXHJcXG5cXHRcXHRcXHRcXHRjaGFuZ2VJdGVtOiAnZW1wbG95ZWVzL2VkaXQnLFxcclxcblxcdFxcdFxcdFxcdHVwZGF0ZVVzZXI6ICdhdXRoL3VwZGF0ZVVzZXInXFxyXFxuXFx0XFx0XFx0fSksXFxyXFxuXFx0XFx0XFx0dXNlclVwZGF0ZSgpIHtcXHJcXG5cXHRcXHRcXHRcXHRjb25zdCBuZXdVc2VyID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy51c2VyKTtcXHJcXG5cXHRcXHRcXHRcXHRuZXdVc2VyLm5hbWUgPSB0aGlzLml0ZW0uZmlyc3RfbmFtZTtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLnVwZGF0ZVVzZXIobmV3VXNlcik7XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRidXR0b25BY3Rpb24oKSB7XFxyXFxuXFx0XFx0XFx0XFx0aWYgKCF0aGlzLmRpc2FibGVkKSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5jaGFuZ2VJdGVtKHRoaXMuaXRlbSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0aWYgKHRoaXMuaXRlbS51c2VyX2lkID09IHRoaXMudXNlci5pZCkge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHRoaXMudXNlclVwZGF0ZSgpXFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRlZmF1bHRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pdGVtKTtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQ7XFx0XFx0XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRiYWNrKCkge1xcdFxcclxcblxcdFxcdFxcdFxcdGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm4gdGhpcy4kcm91dGVyLmdvKC0xKTtcXHJcXG5cXHRcXHRcXHRcXHRmb3IobGV0IGtleSBpbiB0aGlzLml0ZW0pIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLml0ZW1ba2V5XSA9IHRoaXMuZGVmYXVsdEl0ZW1ba2V5XVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQ7XFx0XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRhc3luYyB1cGxvYWRQaG90byhlKSB7XFxyXFxuXFx0XFx0XFx0XFx0Y29uc3QgaW1hZ2VmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YXRhci1maWxlJykuZmlsZXNbMF07XFxyXFxuXFx0XFx0XFx0XFx0aWYgKCFpbWFnZWZpbGUpIHJldHVybjtcXHJcXG5cXHRcXHQgICAgdHJ5IHtcXHJcXG5cXHRcXHQgICAgXFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7ICAgIFxcdFxcdFxcdFxcdCAgICBcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRmb3JtRGF0YS5hcHBlbmQoXFxcImltYWdlXFxcIiwgaW1hZ2VmaWxlKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkICsgJy9hdmF0YXInLCBmb3JtRGF0YSwge1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgaGVhZGVyczoge1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICB9XFxyXFxuXFx0XFx0XFx0XFx0XFx0IH0pO1xcclxcblxcdFxcdFxcdFxcdFxcdHRoaXMuaXRlbS5hdmF0YXIgPSBkYXRhO1xcclxcblxcdFxcdFxcdFxcdFxcdHRoaXMuJHN0b3JlLmNvbW1pdCgnZW1wbG95ZWVzL2VkaXQnLCB0aGlzLml0ZW0pXFxyXFxuICAgIFxcdFxcdH0gY2F0Y2ggKGUpIHtcXHJcXG4gICAgICBcXHRcXHRjb25zb2xlLmVycm9yKCfQndC1INC30LDQs9GA0YPQt9C40LvRgdGPINCw0LLQsNGC0LDRgCcsIGUpXFxyXFxuICAgIFxcdFxcdH1cXHRcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcblxcdCoge1xcclxcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0aDIge1xcclxcblxcdFxcdGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRwLFxcclxcblxcdC5lbXBsb3llZSxcXHJcXG5cXHQuYXZhdGFyX19vdmVybGF5IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogLW1vei1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1vLWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0cCB7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdG1hcmdpbjogMDtcXHJcXG5cXHRcXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdFxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRwOmhvdmVyIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXHJcXG5cXHR9XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImVtcGxveWVlXCI+XHJcbiAgXHQ8aDI+e3sgJHQoJ2VtcGxveWVlJykgfX08L2gyPlxyXG4gIFx0XHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2F2YXRhclwiPlxyXG4gIFx0XHRcdDxkaXYgY2xhc3M9XCJlbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lclwiPlxyXG4gIFx0XHRcdFx0PGRpdiBjbGFzcz1cImF2YXRhcl9fb3ZlcmxheVwiPlxyXG4gIFx0XHRcdFx0XHQ8dXBsb2FkLWJ1dHRvbiA6dGl0bGU9XCIkdCgnY2hhbmdlX2ltYWdlJylcIiA6c2VsZWN0ZWRDYWxsYmFjaz1cInVwbG9hZFBob3RvXCI+PC91cGxvYWQtYnV0dG9uPlxyXG4gIFx0XHRcdFx0PC9kaXY+XHJcbiAgXHRcdFx0XHQ8aW1nIDpzcmM9XCJhdmF0YXJcIiA6YWx0PVwiaXRlbS5maXJzdF9uYW1lXCI+XHJcbiAgXHRcdFx0PC9kaXY+XHRcclxuXHRcdFx0PC9kaXY+XHJcblx0ICBcdDxkaXYgY2xhc3M9XCJlbXBsb3llZV9fZGVzY3JcIj5cclxuXHQgIFx0XHQ8di1mb3JtIHYtbW9kZWw9XCJ2YWxpZFwiIHJlZj1cImZvcm1cIiBsYXp5LXZhbGlkYXRpb24+XHJcblx0ICBcdFx0XHQ8di10ZXh0LWZpZWxkXHJcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnbmFtZScpXCJcclxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLmZpcnN0X25hbWVcIlxyXG5cdFx0XHRcdFx0ICAgICAgOmNvdW50ZXI9XCI3MFwiXHJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxyXG5cdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0XHQgICAgPHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnbGFzdF9uYW1lJylcIlxyXG5cdFx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5sYXN0X25hbWVcIlxyXG5cdFx0XHRcdFx0XHQgICAgICA6cnVsZXM9XCJuYW1lUnVsZXNcIlxyXG5cdFx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0PHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgncGF0cm9ueW1pYycpXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucGF0cm9ueW1pY1wiXHJcblx0XHRcdFx0XHRcdCAgICAgIDpydWxlcz1cIm5hbWVSdWxlc1wiXHJcblx0XHRcdFx0XHRcdCAgICAgIDpjb3VudGVyPVwiNzBcIlxyXG5cdFx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcblx0XHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHQ8di1zZWxlY3RcclxuXHRcdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3Bvc2l0aW9uJylcIlxyXG5cdFx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5wb3NpdGlvbl9pZFwiXHJcblx0XHRcdFx0XHRcdCAgICAgIHByZXBlbmQtaWNvbj1cImNhcmRfdHJhdmVsXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgOml0ZW1zPVwicG9zaXRpb25zXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgaXRlbS10ZXh0PVwidGl0bGVcIlxyXG5cdCAgICAgICAgICBcdFx0XHRpdGVtLXZhbHVlPVwiaWRcIlxyXG5cdFx0XHRcdFx0XHQgICAgICA6cnVsZXM9XCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMJ11cIlxyXG5cdFx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcblx0XHRcdFx0XHQ+PC92LXNlbGVjdD5cclxuXHRcdCAgXHRcdDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3Bob25lX251bWJlcicpXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucGhvbmVfbnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwicGhvbmVfaXBob25lXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0PHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnc2FsYXJ5JylcIlxyXG5cdFx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5zYWxhcnlcIlxyXG5cdFx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJhdHRhY2hfbW9uZXlcIlxyXG5cdFx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcblx0XHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHQ8di10ZXh0LWZpZWxkXHJcblx0XHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdhZGRyZXNzJylcIlxyXG5cdFx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5hZGRyZXNzXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwiaG9tZVwiXHJcblx0XHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuXHRcdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cclxuXHRcdFx0XHRcdDx2LWxheW91dCByb3cgd3JhcD5cclxuXHRcdFx0XHRcdFx0PHYtZmxleCB4czEyPlxyXG5cdFx0XHRcdFx0XHRcdDx2LW1lbnVcclxuXHRcdFx0XHRcdFx0XHQgIHJlZj1cIm1lbnVcIlxyXG5cdFx0XHRcdFx0XHRcdCAgbGF6eVxyXG5cdFx0XHRcdFx0XHRcdCAgOmNsb3NlLW9uLWNvbnRlbnQtY2xpY2s9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdFx0ICB2LW1vZGVsPVwibWVudVwiXHJcblx0XHRcdFx0XHRcdFx0ICB0cmFuc2l0aW9uPVwic2NhbGUtdHJhbnNpdGlvblwiXHJcblx0XHRcdFx0XHRcdFx0ICBvZmZzZXQteVxyXG5cdFx0XHRcdFx0XHRcdCAgZnVsbC13aWR0aFxyXG5cdFx0XHRcdFx0XHRcdCAgOm51ZGdlLXJpZ2h0PVwiNDBcIlxyXG5cdFx0XHRcdFx0XHRcdCAgbWluLXdpZHRoPVwiMjkwcHhcIlxyXG5cdFx0XHRcdFx0XHRcdCAgOnJldHVybi12YWx1ZS5zeW5jPVwiZGF0ZVwiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDwvdi1tZW51PlxyXG5cdFx0XHRcdFx0XHQ8L3YtZmxleD5cclxuXHRcdFx0XHRcdDwvdi1sYXlvdXQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxyXG5cdFx0XHRcdFx0XHQ8di1idG4gbGFyZ2UgQGNsaWNrPVwiYnV0dG9uQWN0aW9uKClcIiA6ZGlzYWJsZWQ9XCIhdmFsaWRcIiB0eXBlPVwic3VibWl0XCI+XHJcblx0XHRcdFx0XHRcdHt7IGJ1dHRvblRleHQgfX1cclxuXHRcdFx0XHRcdFx0PC92LWJ0bj5cclxuXHRcdFx0XHRcdFx0PHYtYnRuIGxhcmdlIEBjbGljaz1cImJhY2tcIj5cclxuXHRcdFx0XHRcdFx00J3QsNC30LDQtFxyXG5cdFx0XHRcdFx0XHQ8L3YtYnRuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0ICBcdFx0PC92LWZvcm0+XHQgIFx0XHRcclxuXHQgIDwvZGl2PlxyXG4gIDwvZGl2Plx0XHRcclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcclxuXHRpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG1pZGRsZXdhcmU6IFsnYXV0aCcsICdvcmdhbmlzYXRpb24nXSxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGlkOiB7XHJcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcclxuXHRcdFx0XHRkYXRlOiBudWxsLFxyXG5cdCAgICAgIG1lbnU6IGZhbHNlLFxyXG5cdCAgICAgIG1vZGFsOiBmYWxzZSxcclxuXHQgICAgICBuYW1lOiAnJyxcclxuXHQgICAgICB2YWxpZDogdHJ1ZSxcclxuXHQgICAgICBkZWZhdWx0SXRlbToge30sXHJcblx0ICAgICAgbmFtZVJ1bGVzOiBbXHJcblx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtScsXHJcblx0ICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoID4gMSkgfHwgJ9CY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDIg0LHRg9C60LLRiycsXHJcblx0ICAgICAgXSxcclxuXHQgICAgICBlbWFpbFJ1bGVzOiBbXHJcblx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUgRS1tYWlsJyxcclxuXHQgICAgICAgIHYgPT4gL15cXHcrKFsuLV0/XFx3KykqQFxcdysoWy4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLnRlc3QodikgfHwgJ9Cd0LUg0LLQsNC70LjQtNC90YvQuSBFLW1haWwnXHJcblx0ICAgICAgXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Li4ubWFwR2V0dGVycyh7XHJcblx0XHRcdFx0aXRlbXM6ICdlbXBsb3llZXMvZW1wbG95ZWVzJyxcclxuXHRcdFx0XHRwb3NpdGlvbnM6ICdwb3NpdGlvbnMvcG9zaXRpb25zJyxcclxuXHRcdFx0XHR1c2VyOiAnYXV0aC91c2VyJ1xyXG5cdFx0XHR9KSxcclxuICAgICAgaXRlbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maW5kKGVsID0+IGVsLmlkID09PSArdGhpcy5pZCkgfHwge31cclxuICAgICAgfSxcclxuXHRcdFx0YnV0dG9uVGV4dCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gIXRoaXMuZGlzYWJsZWQgPyBcItCe0LHQvdC+0LLQuNGC0YxcIiA6IFwi0JjQt9C80LXQvdC40YLRjCDQtNCw0L3QvdGL0LVcIjtcclxuXHRcdFx0fSxcclxuXHRcdFx0YXZhdGFyKCkge1xyXG5cdFx0XHRcdHJldHVybiAodGhpcy5pdGVtLmF2YXRhcikgPyB0aGlzLml0ZW0uYXZhdGFyIDogXCIvc3RvcmFnZS9hdmF0YXJzL25vLWF2YXRhci5qcGdcIlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly8g0JfQsNCz0YDRg9C30LrQsCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0L/QtdGA0LXQtCDQvNC+0L3RgtC40YDQvtCy0LDQvdC40LXQvCDQutC+0LzQv9C+0L3QtdC90YLQsFxyXG5cdFx0YmVmb3JlUm91dGVFbnRlciAodG8sIGZyb20sIG5leHQpIHtcclxuICAgIFx0bmV4dCh2bSA9PiB2bS4kc3RvcmUuZGlzcGF0Y2goJ2VtcGxveWVlcy9sb2FkT25lJywgdm0uaWQpKTtcclxuICBcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC4uLm1hcEFjdGlvbnMoe1xyXG5cdFx0XHRcdGNoYW5nZUl0ZW06ICdlbXBsb3llZXMvZWRpdCcsXHJcblx0XHRcdFx0dXBkYXRlVXNlcjogJ2F1dGgvdXBkYXRlVXNlcidcclxuXHRcdFx0fSksXHJcblx0XHRcdHVzZXJVcGRhdGUoKSB7XHJcblx0XHRcdFx0Y29uc3QgbmV3VXNlciA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudXNlcik7XHJcblx0XHRcdFx0bmV3VXNlci5uYW1lID0gdGhpcy5pdGVtLmZpcnN0X25hbWU7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVVc2VyKG5ld1VzZXIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRidXR0b25BY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNoYW5nZUl0ZW0odGhpcy5pdGVtKTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLml0ZW0udXNlcl9pZCA9PSB0aGlzLnVzZXIuaWQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy51c2VyVXBkYXRlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5kZWZhdWx0SXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbSk7XHJcblx0XHRcdFx0dGhpcy5kaXNhYmxlZCA9ICF0aGlzLmRpc2FibGVkO1x0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0YmFjaygpIHtcdFxyXG5cdFx0XHRcdGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm4gdGhpcy4kcm91dGVyLmdvKC0xKTtcclxuXHRcdFx0XHRmb3IobGV0IGtleSBpbiB0aGlzLml0ZW0pIHtcclxuXHRcdFx0XHRcdHRoaXMuaXRlbVtrZXldID0gdGhpcy5kZWZhdWx0SXRlbVtrZXldXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuZGlzYWJsZWQgPSAhdGhpcy5kaXNhYmxlZDtcdFx0XHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgdXBsb2FkUGhvdG8oZSkge1xyXG5cdFx0XHRcdGNvbnN0IGltYWdlZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmF0YXItZmlsZScpLmZpbGVzWzBdO1xyXG5cdFx0XHRcdGlmICghaW1hZ2VmaWxlKSByZXR1cm47XHJcblx0XHQgICAgdHJ5IHtcclxuXHRcdCAgICBcdGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpOyAgICBcdFx0XHRcdCAgICBcdFxyXG5cdFx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VmaWxlKTtcclxuXHRcdFx0XHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQgKyAnL2F2YXRhcicsIGZvcm1EYXRhLCB7XHJcblx0XHRcdFx0XHQgICAgIGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdCAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcblx0XHRcdFx0XHQgICAgIH1cclxuXHRcdFx0XHRcdCB9KTtcclxuXHRcdFx0XHRcdHRoaXMuaXRlbS5hdmF0YXIgPSBkYXRhO1xyXG5cdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdlbXBsb3llZXMvZWRpdCcsIHRoaXMuaXRlbSlcclxuICAgIFx0XHR9IGNhdGNoIChlKSB7XHJcbiAgICAgIFx0XHRjb25zb2xlLmVycm9yKCfQndC1INC30LDQs9GA0YPQt9C40LvRgdGPINCw0LLQsNGC0LDRgCcsIGUpXHJcbiAgICBcdFx0fVx0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQqIHtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xyXG5cdFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdH1cclxuXHJcblx0aDIge1xyXG5cdFx0ZmxleC1iYXNpczogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdHAsXHJcblx0LmVtcGxveWVlLFxyXG5cdC5hdmF0YXJfX292ZXJsYXkge1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1vei1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1zLWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtby1mbGV4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdHAge1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xyXG5cdH1cclxuXHJcblx0cDpob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcclxuXHR9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZVwiIH0sIFtcbiAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImVtcGxveWVlXCIpKSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhdmF0YXJfX292ZXJsYXlcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidXBsb2FkLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IF92bS4kdChcImNoYW5nZV9pbWFnZVwiKSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhbGxiYWNrOiBfdm0udXBsb2FkUGhvdG9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5hdmF0YXIsIGFsdDogX3ZtLml0ZW0uZmlyc3RfbmFtZSB9IH0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fZGVzY3JcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogXCJmb3JtXCIsXG4gICAgICAgICAgICBhdHRyczogeyBcImxhenktdmFsaWRhdGlvblwiOiBcIlwiIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbGlkLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsaWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJmaXJzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5maXJzdF9uYW1lXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJsYXN0X25hbWVcIiksXG4gICAgICAgICAgICAgICAgcnVsZXM6IF92bS5uYW1lUnVsZXMsXG4gICAgICAgICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5sYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwibGFzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5sYXN0X25hbWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInBhdHJvbnltaWNcIiksXG4gICAgICAgICAgICAgICAgcnVsZXM6IF92bS5uYW1lUnVsZXMsXG4gICAgICAgICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5wYXRyb255bWljLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInBhdHJvbnltaWNcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnBhdHJvbnltaWNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicG9zaXRpb25cIiksXG4gICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJjYXJkX3RyYXZlbFwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ucG9zaXRpb25zLFxuICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIXYgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC00L7Qu9C20L3QvtGB0YLRjFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnBvc2l0aW9uX2lkLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInBvc2l0aW9uX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5wb3NpdGlvbl9pZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicGhvbmVfbnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwicGhvbmVfaXBob25lXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwicGhvbmVfbnVtYmVyXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5waG9uZV9udW1iZXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInNhbGFyeVwiKSxcbiAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImF0dGFjaF9tb25leVwiLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uc2FsYXJ5LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInNhbGFyeVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uc2FsYXJ5XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJhZGRyZXNzXCIpLFxuICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiaG9tZVwiLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJhZGRyZXNzXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5hZGRyZXNzXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LW1lbnVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJtZW51XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhenk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NlLW9uLWNvbnRlbnQtY2xpY2tcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInNjYWxlLXRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2Zmc2V0LXlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZnVsbC13aWR0aFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudWRnZS1yaWdodFwiOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWluLXdpZHRoXCI6IFwiMjkwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLXZhbHVlXCI6IF92bS5kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cmV0dXJuVmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZW51LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVudSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFyZ2U6IFwiXCIsIGRpc2FibGVkOiAhX3ZtLnZhbGlkLCB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmJ1dHRvbkFjdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmJ1dHRvblRleHQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInYtYnRuXCIsIHsgYXR0cnM6IHsgbGFyZ2U6IFwiXCIgfSwgb246IHsgY2xpY2s6IF92bS5iYWNrIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx00J3QsNC30LDQtFxcblxcdFxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVlYjg3Y2QwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiXSwic291cmNlUm9vdCI6IiJ9