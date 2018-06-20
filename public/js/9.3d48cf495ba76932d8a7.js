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
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n\ttext-align: center;\n}\np[data-v-5eb87cd0],\n.employee[data-v-5eb87cd0],\n.avatar__overlay[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\np[data-v-5eb87cd0] {\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AAuMA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA,mBAAA;CACA;AAEA;;;CAIA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA","file":"Show.vue","sourcesContent":["<template>\r\n  <div class=\"employee\">\r\n  \t<h2>{{ $t('employee') }}</h2>\r\n  \t\t<div class=\"employee__avatar\">\r\n  \t\t\t<div class=\"employee__avatar-container\">\r\n  \t\t\t\t<div class=\"avatar__overlay\">\r\n  \t\t\t\t\t<upload-button :title=\"$t('change_image')\" :selectedCallback=\"uploadPhoto\"></upload-button>\r\n  \t\t\t\t</div>\r\n  \t\t\t\t<img :src=\"avatar\" :alt=\"item.first_name\">\r\n  \t\t\t</div>\t\r\n\t\t\t</div>\r\n\t  \t<div class=\"employee__descr\">\r\n\t  \t\t<v-form v-model=\"valid\"\r\n\t  \t\t        ref=\"form\"\r\n\t  \t\t        lazy-validation\r\n\t  \t\t        @submit.prevent=\"\">\r\n\t  \t\t\t<v-text-field\r\n\t\t\t\t\t      :label=\"$t('name')\"\r\n\t\t\t\t\t      v-model=\"item.first_name\"\r\n\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('last_name')\"\r\n\t\t\t\t\t\t      v-model=\"item.last_name\"\r\n\t\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('patronymic')\"\r\n\t\t\t\t\t\t      v-model=\"item.patronymic\"\r\n\t\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-select\r\n\t\t\t\t\t\t      :label=\"$t('position')\"\r\n\t\t\t\t\t\t      v-model=\"item.position_id\"\r\n\t\t\t\t\t\t      prepend-icon=\"card_travel\"\r\n\t\t\t\t\t\t      :items=\"positions\"\r\n\t\t\t\t\t\t      item-text=\"title\"\r\n\t          \t\t\titem-value=\"id\"\r\n\t\t\t\t\t\t      :rules=\"[v => !!v || 'Выберите должность']\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-select>\r\n\t\t  \t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('phone_number')\"\r\n\t\t\t\t\t\t      v-model=\"item.phone_number\"\r\n\t\t\t\t\t\t      prepend-icon=\"phone_iphone\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('salary')\"\r\n\t\t\t\t\t\t      v-model=\"item.salary\"\r\n\t\t\t\t\t\t      prepend-icon=\"attach_money\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('address')\"\r\n\t\t\t\t\t\t      v-model=\"item.address\"\r\n\t\t\t\t\t\t      prepend-icon=\"home\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-layout row wrap>\r\n\t\t\t\t\t\t<v-flex xs12>\r\n\t\t\t\t\t\t\t<v-menu\r\n\t\t\t\t\t\t\t  ref=\"menu\"\r\n\t\t\t\t\t\t\t  lazy\r\n\t\t\t\t\t\t\t  :close-on-content-click=\"false\"\r\n\t\t\t\t\t\t\t  v-model=\"menu\"\r\n\t\t\t\t\t\t\t  transition=\"scale-transition\"\r\n\t\t\t\t\t\t\t  offset-y\r\n\t\t\t\t\t\t\t  full-width\r\n\t\t\t\t\t\t\t  :nudge-right=\"40\"\r\n\t\t\t\t\t\t\t  min-width=\"290px\"\r\n\t\t\t\t\t\t\t  :return-value.sync=\"date\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</v-menu>\r\n\t\t\t\t\t\t</v-flex>\r\n\t\t\t\t\t</v-layout>\r\n\t\t\t\t\t<div class=\"buttons\">\r\n\t\t\t\t\t\t<v-btn large @click=\"buttonAction()\" :disabled=\"!valid\" type=\"submit\">\r\n\t\t\t\t\t\t{{ buttonText }}\r\n\t\t\t\t\t\t</v-btn>\r\n\t\t\t\t\t\t<v-btn large @click=\"back\">\r\n\t\t\t\t\t\tНазад\r\n\t\t\t\t\t\t</v-btn>\r\n\t\t\t\t\t</div>\r\n\t  \t\t</v-form>\t  \t\t\r\n\t  </div>\r\n  </div>\t\t\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\timport axios from 'axios';\r\n\texport default {\r\n\t\tmiddleware: ['auth', 'organisation'],\r\n\t\tprops: {\r\n\t\t\tid: {\r\n\t\t\t\ttype: [Number, String],\r\n\t\t\t\trequired: true\r\n\t\t\t}\r\n\t\t},\r\n\t\tdata() {\r\n\t\t\treturn {\r\n\t\t\t\tdisabled: true,\r\n\t\t\t\tdate: null,\r\n\t      menu: false,\r\n\t      modal: false,\r\n\t      name: '',\r\n\t      valid: true,\r\n\t      defaultItem: {},\r\n\t      nameRules: [\r\n\t        v => !!v || 'Введите значение',\r\n\t        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',\r\n\t      ],\r\n\t      emailRules: [\r\n\t        v => !!v || 'Введите E-mail',\r\n\t        v => /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(v) || 'Не валидный E-mail'\r\n\t      ]\r\n\t\t\t}\r\n\t\t},\r\n\t\tcomputed: {\r\n\t\t\t...mapGetters({\r\n\t\t\t\titems: 'employees/employees',\r\n\t\t\t\tpositions: 'positions/positions',\r\n\t\t\t\tuser: 'auth/user'\r\n\t\t\t}),\r\n      item() {\r\n        return this.items.find(el => el.id === +this.id) || {}\r\n      },\r\n\t\t\tbuttonText() {\r\n\t\t\t\treturn !this.disabled ? \"Обновить\" : \"Изменить данные\";\r\n\t\t\t},\r\n\t\t\tavatar() {\r\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"/storage/avatars/no-avatar.jpg\"\r\n\t\t\t}\r\n\t\t},\r\n\t\t// Загрузка пользователя перед монтированием компонента\r\n\t\tbeforeRouteEnter (to, from, next) {\r\n    \tnext(vm => vm.$store.dispatch('employees/loadOne', vm.id));\r\n  \t},\r\n\t\tmethods: {\r\n\t\t\t...mapActions({\r\n\t\t\t\tchangeItem: 'employees/edit',\r\n\t\t\t\tupdateUser: 'auth/updateUser'\r\n\t\t\t}),\r\n\t\t\tuserUpdate() {\r\n\t\t\t\tconst newUser = Object.assign({}, this.user);\r\n\t\t\t\tnewUser.name = this.item.first_name;\r\n\t\t\t\tthis.updateUser(newUser);\r\n\t\t\t},\r\n\t\t\tbuttonAction() {\r\n\t\t\t\tif (!this.disabled) {\r\n\t\t\t\t\tthis.changeItem(this.item);\r\n\t\t\t\t\tif (this.item.user_id == this.user.id) {\r\n\t\t\t\t\t\tthis.userUpdate()\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\tthis.defaultItem = Object.assign({}, this.item);\r\n\t\t\t\tthis.disabled = !this.disabled;\t\t\r\n\t\t\t},\r\n\t\t\tback() {\t\r\n\t\t\t\tif (this.disabled) return this.$router.go(-1);\r\n\t\t\t\tfor(let key in this.item) {\r\n\t\t\t\t\tthis.item[key] = this.defaultItem[key]\r\n\t\t\t\t}\r\n\t\t\t\tthis.disabled = !this.disabled;\t\t\t\t\t\t\r\n\t\t\t},\r\n\t\t\tasync uploadPhoto(e) {\r\n\t\t\t\tconst imagefile = document.getElementById('avatar-file').files[0];\r\n\t\t\t\tif (!imagefile) return;\r\n\t\t    try {\r\n\t\t    \tlet formData = new FormData();    \t\t\t\t    \t\r\n\t\t\t\t\tformData.append(\"image\", imagefile);\r\n\t\t\t\t\tconst { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {\r\n\t\t\t\t\t     headers: {\r\n\t\t\t\t\t       'Content-Type': 'multipart/form-data'\r\n\t\t\t\t\t     }\r\n\t\t\t\t\t });\r\n\t\t\t\t\tthis.item.avatar = data;\r\n\t\t\t\t\tthis.$store.commit('employees/edit', this.item)\r\n    \t\t} catch (e) {\r\n      \t\tconsole.error('Не загрузился аватар', e)\r\n    \t\t}\t\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t* {\r\n\t\tbox-sizing: border-box;;\r\n\t\tfont-family: 'Roboto', sans-serif;\r\n\t}\r\n\r\n\th2 {\r\n\t\tflex-basis: 100%;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\tp,\r\n\t.employee,\r\n\t.avatar__overlay {\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\tp {\r\n\t\tjustify-content: space-between;\r\n\t\tmargin: 0;\r\n\t\tpadding: 10px;\r\n\t\ttransition: background-color .3s;\r\n\t}\r\n\r\n\tp:hover {\r\n\t\tbackground-color: rgba(255, 255, 255, .1);\r\n\t}\r\n</style>\r\n"],"sourceRoot":""}]);

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
            on: {
              submit: function($event) {
                $event.preventDefault()
              }
            },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0Esa0VBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLCtDQUFnRCxtQ0FBbUMsb0NBQW9DLHNDQUFzQyxHQUFH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QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUyxvQkFBb0IsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyxXQUFXLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5QkFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0RBQWtEO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsWUFBWSxPQUFPLGtCQUFrQixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy85LjNkNDhjZjQ5NWJhNzY5MzJkOGE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTVlYjg3Y2QwXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZW1wbG95ZWVzXFxcXFNob3cudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlYjg3Y2QwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWViODdjZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDhcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjE0ZTRhMDNjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuKltkYXRhLXYtNWViODdjZDBdIHtcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0ICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OztcXG5cXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbmgyW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcblxcdCAgICBmbGV4LWJhc2lzOiAxMDAlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxucFtkYXRhLXYtNWViODdjZDBdLFxcbi5lbXBsb3llZVtkYXRhLXYtNWViODdjZDBdLFxcbi5hdmF0YXJfX292ZXJsYXlbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxucFtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcblxcdCAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvY3JtL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF1TUE7Q0FDQSwrQkFBQTtTQUFBLHVCQUFBO0NBQ0Esa0NBQUE7Q0FDQTtBQUVBO0NBQ0EsOEJBQUE7S0FBQSxpQkFBQTtDQUNBLG1CQUFBO0NBQ0E7QUFFQTs7O0NBSUEsbUJBQUE7Q0FDQSxrQkFBQTtDQUNBLGlCQUFBO0NBQ0EscUJBQUE7Q0FBQSxxQkFBQTtDQUFBLGNBQUE7Q0FDQTtBQUVBO0NBQ0EsMEJBQUE7S0FBQSx1QkFBQTtTQUFBLCtCQUFBO0NBQ0EsVUFBQTtDQUNBLGNBQUE7Q0FDQSx5Q0FBQTtDQUFBLGlDQUFBO0NBQ0E7QUFFQTtDQUNBLDBDQUFBO0NBQ0FcIixcImZpbGVcIjpcIlNob3cudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImVtcGxveWVlXFxcIj5cXHJcXG4gIFxcdDxoMj57eyAkdCgnZW1wbG95ZWUnKSB9fTwvaDI+XFxyXFxuICBcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fYXZhdGFyXFxcIj5cXHJcXG4gIFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXFxcIj5cXHJcXG4gIFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImF2YXRhcl9fb3ZlcmxheVxcXCI+XFxyXFxuICBcXHRcXHRcXHRcXHRcXHQ8dXBsb2FkLWJ1dHRvbiA6dGl0bGU9XFxcIiR0KCdjaGFuZ2VfaW1hZ2UnKVxcXCIgOnNlbGVjdGVkQ2FsbGJhY2s9XFxcInVwbG9hZFBob3RvXFxcIj48L3VwbG9hZC1idXR0b24+XFxyXFxuICBcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG4gIFxcdFxcdFxcdFxcdDxpbWcgOnNyYz1cXFwiYXZhdGFyXFxcIiA6YWx0PVxcXCJpdGVtLmZpcnN0X25hbWVcXFwiPlxcclxcbiAgXFx0XFx0XFx0PC9kaXY+XFx0XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0ICBcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fZGVzY3JcXFwiPlxcclxcblxcdCAgXFx0XFx0PHYtZm9ybSB2LW1vZGVsPVxcXCJ2YWxpZFxcXCJcXHJcXG5cXHQgIFxcdFxcdCAgICAgICAgcmVmPVxcXCJmb3JtXFxcIlxcclxcblxcdCAgXFx0XFx0ICAgICAgICBsYXp5LXZhbGlkYXRpb25cXHJcXG5cXHQgIFxcdFxcdCAgICAgICAgQHN1Ym1pdC5wcmV2ZW50PVxcXCJcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0PHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ25hbWUnKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmZpcnN0X25hbWVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmNvdW50ZXI9XFxcIjcwXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDx2LXRleHQtZmllbGRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdsYXN0X25hbWUnKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmxhc3RfbmFtZVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6cnVsZXM9XFxcIm5hbWVSdWxlc1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6Y291bnRlcj1cXFwiNzBcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8di10ZXh0LWZpZWxkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgncGF0cm9ueW1pYycpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ucGF0cm9ueW1pY1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6cnVsZXM9XFxcIm5hbWVSdWxlc1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6Y291bnRlcj1cXFwiNzBcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtc2VsZWN0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgncG9zaXRpb24nKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLnBvc2l0aW9uX2lkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiY2FyZF90cmF2ZWxcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOml0ZW1zPVxcXCJwb3NpdGlvbnNcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgaXRlbS10ZXh0PVxcXCJ0aXRsZVxcXCJcXHJcXG5cXHQgICAgICAgICAgXFx0XFx0XFx0aXRlbS12YWx1ZT1cXFwiaWRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMJ11cXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdD48L3Ytc2VsZWN0PlxcclxcblxcdFxcdCAgXFx0XFx0PHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3Bob25lX251bWJlcicpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ucGhvbmVfbnVtYmVyXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwicGhvbmVfaXBob25lXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3NhbGFyeScpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0uc2FsYXJ5XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiYXR0YWNoX21vbmV5XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ2FkZHJlc3MnKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmFkZHJlc3NcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJob21lXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtbGF5b3V0IHJvdyB3cmFwPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx2LWZsZXggeHMxMj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8di1tZW51XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICByZWY9XFxcIm1lbnVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICBsYXp5XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICA6Y2xvc2Utb24tY29udGVudC1jbGljaz1cXFwiZmFsc2VcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICB2LW1vZGVsPVxcXCJtZW51XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgdHJhbnNpdGlvbj1cXFwic2NhbGUtdHJhbnNpdGlvblxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgIG9mZnNldC15XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICBmdWxsLXdpZHRoXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICA6bnVkZ2UtcmlnaHQ9XFxcIjQwXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgbWluLXdpZHRoPVxcXCIyOTBweFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgIDpyZXR1cm4tdmFsdWUuc3luYz1cXFwiZGF0ZVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC92LW1lbnU+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC92LWZsZXg+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC92LWxheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJidXR0b25zXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8di1idG4gbGFyZ2UgQGNsaWNrPVxcXCJidXR0b25BY3Rpb24oKVxcXCIgOmRpc2FibGVkPVxcXCIhdmFsaWRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0e3sgYnV0dG9uVGV4dCB9fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvdi1idG4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHYtYnRuIGxhcmdlIEBjbGljaz1cXFwiYmFja1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx00J3QsNC30LDQtFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvdi1idG4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0ICBcXHRcXHQ8L3YtZm9ybT5cXHQgIFxcdFxcdFxcclxcblxcdCAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHRcXHRcXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuXFx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcXHJcXG5cXHRpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xcclxcblxcdGV4cG9ydCBkZWZhdWx0IHtcXHJcXG5cXHRcXHRtaWRkbGV3YXJlOiBbJ2F1dGgnLCAnb3JnYW5pc2F0aW9uJ10sXFxyXFxuXFx0XFx0cHJvcHM6IHtcXHJcXG5cXHRcXHRcXHRpZDoge1xcclxcblxcdFxcdFxcdFxcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXFxyXFxuXFx0XFx0XFx0XFx0cmVxdWlyZWQ6IHRydWVcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRkYXRhKCkge1xcclxcblxcdFxcdFxcdHJldHVybiB7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzYWJsZWQ6IHRydWUsXFxyXFxuXFx0XFx0XFx0XFx0ZGF0ZTogbnVsbCxcXHJcXG5cXHQgICAgICBtZW51OiBmYWxzZSxcXHJcXG5cXHQgICAgICBtb2RhbDogZmFsc2UsXFxyXFxuXFx0ICAgICAgbmFtZTogJycsXFxyXFxuXFx0ICAgICAgdmFsaWQ6IHRydWUsXFxyXFxuXFx0ICAgICAgZGVmYXVsdEl0ZW06IHt9LFxcclxcblxcdCAgICAgIG5hbWVSdWxlczogW1xcclxcblxcdCAgICAgICAgdiA9PiAhIXYgfHwgJ9CS0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LUnLFxcclxcblxcdCAgICAgICAgdiA9PiAodiAmJiB2Lmxlbmd0aCA+IDEpIHx8ICfQmNC80Y8g0LTQvtC70LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDQvNC40L3QuNC80YPQvCAyINCx0YPQutCy0YsnLFxcclxcblxcdCAgICAgIF0sXFxyXFxuXFx0ICAgICAgZW1haWxSdWxlczogW1xcclxcblxcdCAgICAgICAgdiA9PiAhIXYgfHwgJ9CS0LLQtdC00LjRgtC1IEUtbWFpbCcsXFxyXFxuXFx0ICAgICAgICB2ID0+IC9eXFxcXHcrKFsuLV0/XFxcXHcrKSpAXFxcXHcrKFsuLV0/XFxcXHcrKSooXFxcXC5cXFxcd3syLDN9KSskLy50ZXN0KHYpIHx8ICfQndC1INCy0LDQu9C40LTQvdGL0LkgRS1tYWlsJ1xcclxcblxcdCAgICAgIF1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRjb21wdXRlZDoge1xcclxcblxcdFxcdFxcdC4uLm1hcEdldHRlcnMoe1xcclxcblxcdFxcdFxcdFxcdGl0ZW1zOiAnZW1wbG95ZWVzL2VtcGxveWVlcycsXFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXFxyXFxuXFx0XFx0XFx0XFx0dXNlcjogJ2F1dGgvdXNlcidcXHJcXG5cXHRcXHRcXHR9KSxcXHJcXG4gICAgICBpdGVtKCkge1xcclxcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZChlbCA9PiBlbC5pZCA9PT0gK3RoaXMuaWQpIHx8IHt9XFxyXFxuICAgICAgfSxcXHJcXG5cXHRcXHRcXHRidXR0b25UZXh0KCkge1xcclxcblxcdFxcdFxcdFxcdHJldHVybiAhdGhpcy5kaXNhYmxlZCA/IFxcXCLQntCx0L3QvtCy0LjRgtGMXFxcIiA6IFxcXCLQmNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtVxcXCI7XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRhdmF0YXIoKSB7XFxyXFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcXFwiL3N0b3JhZ2UvYXZhdGFycy9uby1hdmF0YXIuanBnXFxcIlxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdC8vINCX0LDQs9GA0YPQt9C60LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0LXRgNC10LQg0LzQvtC90YLQuNGA0L7QstCw0L3QuNC10Lwg0LrQvtC80L/QvtC90LXQvdGC0LBcXHJcXG5cXHRcXHRiZWZvcmVSb3V0ZUVudGVyICh0bywgZnJvbSwgbmV4dCkge1xcclxcbiAgICBcXHRuZXh0KHZtID0+IHZtLiRzdG9yZS5kaXNwYXRjaCgnZW1wbG95ZWVzL2xvYWRPbmUnLCB2bS5pZCkpO1xcclxcbiAgXFx0fSxcXHJcXG5cXHRcXHRtZXRob2RzOiB7XFxyXFxuXFx0XFx0XFx0Li4ubWFwQWN0aW9ucyh7XFxyXFxuXFx0XFx0XFx0XFx0Y2hhbmdlSXRlbTogJ2VtcGxveWVlcy9lZGl0JyxcXHJcXG5cXHRcXHRcXHRcXHR1cGRhdGVVc2VyOiAnYXV0aC91cGRhdGVVc2VyJ1xcclxcblxcdFxcdFxcdH0pLFxcclxcblxcdFxcdFxcdHVzZXJVcGRhdGUoKSB7XFxyXFxuXFx0XFx0XFx0XFx0Y29uc3QgbmV3VXNlciA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudXNlcik7XFxyXFxuXFx0XFx0XFx0XFx0bmV3VXNlci5uYW1lID0gdGhpcy5pdGVtLmZpcnN0X25hbWU7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy51cGRhdGVVc2VyKG5ld1VzZXIpO1xcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0YnV0dG9uQWN0aW9uKCkge1xcclxcblxcdFxcdFxcdFxcdGlmICghdGhpcy5kaXNhYmxlZCkge1xcclxcblxcdFxcdFxcdFxcdFxcdHRoaXMuY2hhbmdlSXRlbSh0aGlzLml0ZW0pO1xcclxcblxcdFxcdFxcdFxcdFxcdGlmICh0aGlzLml0ZW0udXNlcl9pZCA9PSB0aGlzLnVzZXIuaWQpIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR0aGlzLnVzZXJVcGRhdGUoKVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5kZWZhdWx0SXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbSk7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5kaXNhYmxlZCA9ICF0aGlzLmRpc2FibGVkO1xcdFxcdFxcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0YmFjaygpIHtcXHRcXHJcXG5cXHRcXHRcXHRcXHRpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuIHRoaXMuJHJvdXRlci5nbygtMSk7XFxyXFxuXFx0XFx0XFx0XFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5pdGVtKSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5pdGVtW2tleV0gPSB0aGlzLmRlZmF1bHRJdGVtW2tleV1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5kaXNhYmxlZCA9ICF0aGlzLmRpc2FibGVkO1xcdFxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0YXN5bmMgdXBsb2FkUGhvdG8oZSkge1xcclxcblxcdFxcdFxcdFxcdGNvbnN0IGltYWdlZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmF0YXItZmlsZScpLmZpbGVzWzBdO1xcclxcblxcdFxcdFxcdFxcdGlmICghaW1hZ2VmaWxlKSByZXR1cm47XFxyXFxuXFx0XFx0ICAgIHRyeSB7XFxyXFxuXFx0XFx0ICAgIFxcdGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpOyAgICBcXHRcXHRcXHRcXHQgICAgXFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9ybURhdGEuYXBwZW5kKFxcXCJpbWFnZVxcXCIsIGltYWdlZmlsZSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCArICcvYXZhdGFyJywgZm9ybURhdGEsIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgIGhlYWRlcnM6IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgfVxcclxcblxcdFxcdFxcdFxcdFxcdCB9KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLml0ZW0uYXZhdGFyID0gZGF0YTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLiRzdG9yZS5jb21taXQoJ2VtcGxveWVlcy9lZGl0JywgdGhpcy5pdGVtKVxcclxcbiAgICBcXHRcXHR9IGNhdGNoIChlKSB7XFxyXFxuICAgICAgXFx0XFx0Y29uc29sZS5lcnJvcign0J3QtSDQt9Cw0LPRgNGD0LfQuNC70YHRjyDQsNCy0LDRgtCw0YAnLCBlKVxcclxcbiAgICBcXHRcXHR9XFx0XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG5cXHQqIHtcXHJcXG5cXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94OztcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGgyIHtcXHJcXG5cXHRcXHRmbGV4LWJhc2lzOiAxMDAlO1xcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0cCxcXHJcXG5cXHQuZW1wbG95ZWUsXFxyXFxuXFx0LmF2YXRhcl9fb3ZlcmxheSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1tb3otZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtbXMtZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtby1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdHAge1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0cDpob3ZlciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XFxyXFxuXFx0fVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTZcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJlbXBsb3llZVwiPlxyXG4gIFx0PGgyPnt7ICR0KCdlbXBsb3llZScpIH19PC9oMj5cclxuICBcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXJcIj5cclxuICBcdFx0XHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcIj5cclxuICBcdFx0XHRcdDxkaXYgY2xhc3M9XCJhdmF0YXJfX292ZXJsYXlcIj5cclxuICBcdFx0XHRcdFx0PHVwbG9hZC1idXR0b24gOnRpdGxlPVwiJHQoJ2NoYW5nZV9pbWFnZScpXCIgOnNlbGVjdGVkQ2FsbGJhY2s9XCJ1cGxvYWRQaG90b1wiPjwvdXBsb2FkLWJ1dHRvbj5cclxuICBcdFx0XHRcdDwvZGl2PlxyXG4gIFx0XHRcdFx0PGltZyA6c3JjPVwiYXZhdGFyXCIgOmFsdD1cIml0ZW0uZmlyc3RfbmFtZVwiPlxyXG4gIFx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdDwvZGl2PlxyXG5cdCAgXHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2Rlc2NyXCI+XHJcblx0ICBcdFx0PHYtZm9ybSB2LW1vZGVsPVwidmFsaWRcIlxyXG5cdCAgXHRcdCAgICAgICAgcmVmPVwiZm9ybVwiXHJcblx0ICBcdFx0ICAgICAgICBsYXp5LXZhbGlkYXRpb25cclxuXHQgIFx0XHQgICAgICAgIEBzdWJtaXQucHJldmVudD1cIlwiPlxyXG5cdCAgXHRcdFx0PHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ25hbWUnKVwiXHJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5maXJzdF9uYW1lXCJcclxuXHRcdFx0XHRcdCAgICAgIDpjb3VudGVyPVwiNzBcIlxyXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuXHRcdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cclxuXHRcdFx0XHRcdFx0ICAgIDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ2xhc3RfbmFtZScpXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ubGFzdF9uYW1lXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwibmFtZVJ1bGVzXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgOmNvdW50ZXI9XCI3MFwiXHJcblx0XHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuXHRcdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cclxuXHRcdFx0XHRcdDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3BhdHJvbnltaWMnKVwiXHJcblx0XHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLnBhdHJvbnltaWNcIlxyXG5cdFx0XHRcdFx0XHQgICAgICA6cnVsZXM9XCJuYW1lUnVsZXNcIlxyXG5cdFx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0PHYtc2VsZWN0XHJcblx0XHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdwb3NpdGlvbicpXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucG9zaXRpb25faWRcIlxyXG5cdFx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJjYXJkX3RyYXZlbFwiXHJcblx0XHRcdFx0XHRcdCAgICAgIDppdGVtcz1cInBvc2l0aW9uc1wiXHJcblx0XHRcdFx0XHRcdCAgICAgIGl0ZW0tdGV4dD1cInRpdGxlXCJcclxuXHQgICAgICAgICAgXHRcdFx0aXRlbS12YWx1ZT1cImlkXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwiW3YgPT4gISF2IHx8ICfQktGL0LHQtdGA0LjRgtC1INC00L7Qu9C20L3QvtGB0YLRjCddXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0Pjwvdi1zZWxlY3Q+XHJcblx0XHQgIFx0XHQ8di10ZXh0LWZpZWxkXHJcblx0XHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdwaG9uZV9udW1iZXInKVwiXHJcblx0XHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLnBob25lX251bWJlclwiXHJcblx0XHRcdFx0XHRcdCAgICAgIHByZXBlbmQtaWNvbj1cInBob25lX2lwaG9uZVwiXHJcblx0XHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuXHRcdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cclxuXHRcdFx0XHRcdDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3NhbGFyeScpXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0uc2FsYXJ5XCJcclxuXHRcdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwiYXR0YWNoX21vbmV5XCJcclxuXHRcdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0PHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnYWRkcmVzcycpXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0uYWRkcmVzc1wiXHJcblx0XHRcdFx0XHRcdCAgICAgIHByZXBlbmQtaWNvbj1cImhvbWVcIlxyXG5cdFx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcblx0XHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHQ8di1sYXlvdXQgcm93IHdyYXA+XHJcblx0XHRcdFx0XHRcdDx2LWZsZXggeHMxMj5cclxuXHRcdFx0XHRcdFx0XHQ8di1tZW51XHJcblx0XHRcdFx0XHRcdFx0ICByZWY9XCJtZW51XCJcclxuXHRcdFx0XHRcdFx0XHQgIGxhenlcclxuXHRcdFx0XHRcdFx0XHQgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHRcdCAgdi1tb2RlbD1cIm1lbnVcIlxyXG5cdFx0XHRcdFx0XHRcdCAgdHJhbnNpdGlvbj1cInNjYWxlLXRyYW5zaXRpb25cIlxyXG5cdFx0XHRcdFx0XHRcdCAgb2Zmc2V0LXlcclxuXHRcdFx0XHRcdFx0XHQgIGZ1bGwtd2lkdGhcclxuXHRcdFx0XHRcdFx0XHQgIDpudWRnZS1yaWdodD1cIjQwXCJcclxuXHRcdFx0XHRcdFx0XHQgIG1pbi13aWR0aD1cIjI5MHB4XCJcclxuXHRcdFx0XHRcdFx0XHQgIDpyZXR1cm4tdmFsdWUuc3luYz1cImRhdGVcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8L3YtbWVudT5cclxuXHRcdFx0XHRcdFx0PC92LWZsZXg+XHJcblx0XHRcdFx0XHQ8L3YtbGF5b3V0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuXHRcdFx0XHRcdFx0PHYtYnRuIGxhcmdlIEBjbGljaz1cImJ1dHRvbkFjdGlvbigpXCIgOmRpc2FibGVkPVwiIXZhbGlkXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG5cdFx0XHRcdFx0XHR7eyBidXR0b25UZXh0IH19XHJcblx0XHRcdFx0XHRcdDwvdi1idG4+XHJcblx0XHRcdFx0XHRcdDx2LWJ0biBsYXJnZSBAY2xpY2s9XCJiYWNrXCI+XHJcblx0XHRcdFx0XHRcdNCd0LDQt9Cw0LRcclxuXHRcdFx0XHRcdFx0PC92LWJ0bj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdCAgXHRcdDwvdi1mb3JtPlx0ICBcdFx0XHJcblx0ICA8L2Rpdj5cclxuICA8L2Rpdj5cdFx0XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XHJcblx0aW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRtaWRkbGV3YXJlOiBbJ2F1dGgnLCAnb3JnYW5pc2F0aW9uJ10sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRpZDoge1xyXG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZGlzYWJsZWQ6IHRydWUsXHJcblx0XHRcdFx0ZGF0ZTogbnVsbCxcclxuXHQgICAgICBtZW51OiBmYWxzZSxcclxuXHQgICAgICBtb2RhbDogZmFsc2UsXHJcblx0ICAgICAgbmFtZTogJycsXHJcblx0ICAgICAgdmFsaWQ6IHRydWUsXHJcblx0ICAgICAgZGVmYXVsdEl0ZW06IHt9LFxyXG5cdCAgICAgIG5hbWVSdWxlczogW1xyXG5cdCAgICAgICAgdiA9PiAhIXYgfHwgJ9CS0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LUnLFxyXG5cdCAgICAgICAgdiA9PiAodiAmJiB2Lmxlbmd0aCA+IDEpIHx8ICfQmNC80Y8g0LTQvtC70LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDQvNC40L3QuNC80YPQvCAyINCx0YPQutCy0YsnLFxyXG5cdCAgICAgIF0sXHJcblx0ICAgICAgZW1haWxSdWxlczogW1xyXG5cdCAgICAgICAgdiA9PiAhIXYgfHwgJ9CS0LLQtdC00LjRgtC1IEUtbWFpbCcsXHJcblx0ICAgICAgICB2ID0+IC9eXFx3KyhbLi1dP1xcdyspKkBcXHcrKFsuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLy50ZXN0KHYpIHx8ICfQndC1INCy0LDQu9C40LTQvdGL0LkgRS1tYWlsJ1xyXG5cdCAgICAgIF1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdC4uLm1hcEdldHRlcnMoe1xyXG5cdFx0XHRcdGl0ZW1zOiAnZW1wbG95ZWVzL2VtcGxveWVlcycsXHJcblx0XHRcdFx0cG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXHJcblx0XHRcdFx0dXNlcjogJ2F1dGgvdXNlcidcclxuXHRcdFx0fSksXHJcbiAgICAgIGl0ZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZChlbCA9PiBlbC5pZCA9PT0gK3RoaXMuaWQpIHx8IHt9XHJcbiAgICAgIH0sXHJcblx0XHRcdGJ1dHRvblRleHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuICF0aGlzLmRpc2FibGVkID8gXCLQntCx0L3QvtCy0LjRgtGMXCIgOiBcItCY0LfQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1XCI7XHJcblx0XHRcdH0sXHJcblx0XHRcdGF2YXRhcigpIHtcclxuXHRcdFx0XHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy5pdGVtLmF2YXRhciA6IFwiL3N0b3JhZ2UvYXZhdGFycy9uby1hdmF0YXIuanBnXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vINCX0LDQs9GA0YPQt9C60LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0LXRgNC10LQg0LzQvtC90YLQuNGA0L7QstCw0L3QuNC10Lwg0LrQvtC80L/QvtC90LXQvdGC0LBcclxuXHRcdGJlZm9yZVJvdXRlRW50ZXIgKHRvLCBmcm9tLCBuZXh0KSB7XHJcbiAgICBcdG5leHQodm0gPT4gdm0uJHN0b3JlLmRpc3BhdGNoKCdlbXBsb3llZXMvbG9hZE9uZScsIHZtLmlkKSk7XHJcbiAgXHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcclxuXHRcdFx0XHRjaGFuZ2VJdGVtOiAnZW1wbG95ZWVzL2VkaXQnLFxyXG5cdFx0XHRcdHVwZGF0ZVVzZXI6ICdhdXRoL3VwZGF0ZVVzZXInXHJcblx0XHRcdH0pLFxyXG5cdFx0XHR1c2VyVXBkYXRlKCkge1xyXG5cdFx0XHRcdGNvbnN0IG5ld1VzZXIgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnVzZXIpO1xyXG5cdFx0XHRcdG5ld1VzZXIubmFtZSA9IHRoaXMuaXRlbS5maXJzdF9uYW1lO1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlVXNlcihuZXdVc2VyKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YnV0dG9uQWN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VJdGVtKHRoaXMuaXRlbSk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5pdGVtLnVzZXJfaWQgPT0gdGhpcy51c2VyLmlkKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudXNlclVwZGF0ZSgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuZGVmYXVsdEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLml0ZW0pO1xyXG5cdFx0XHRcdHRoaXMuZGlzYWJsZWQgPSAhdGhpcy5kaXNhYmxlZDtcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdGJhY2soKSB7XHRcclxuXHRcdFx0XHRpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuIHRoaXMuJHJvdXRlci5nbygtMSk7XHJcblx0XHRcdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5pdGVtKSB7XHJcblx0XHRcdFx0XHR0aGlzLml0ZW1ba2V5XSA9IHRoaXMuZGVmYXVsdEl0ZW1ba2V5XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQ7XHRcdFx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIHVwbG9hZFBob3RvKGUpIHtcclxuXHRcdFx0XHRjb25zdCBpbWFnZWZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhdGFyLWZpbGUnKS5maWxlc1swXTtcclxuXHRcdFx0XHRpZiAoIWltYWdlZmlsZSkgcmV0dXJuO1xyXG5cdFx0ICAgIHRyeSB7XHJcblx0XHQgICAgXHRsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsgICAgXHRcdFx0XHQgICAgXHRcclxuXHRcdFx0XHRcdGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlZmlsZSk7XHJcblx0XHRcdFx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkICsgJy9hdmF0YXInLCBmb3JtRGF0YSwge1xyXG5cdFx0XHRcdFx0ICAgICBoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHQgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xyXG5cdFx0XHRcdFx0ICAgICB9XHJcblx0XHRcdFx0XHQgfSk7XHJcblx0XHRcdFx0XHR0aGlzLml0ZW0uYXZhdGFyID0gZGF0YTtcclxuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnZW1wbG95ZWVzL2VkaXQnLCB0aGlzLml0ZW0pXHJcbiAgICBcdFx0fSBjYXRjaCAoZSkge1xyXG4gICAgICBcdFx0Y29uc29sZS5lcnJvcign0J3QtSDQt9Cw0LPRgNGD0LfQuNC70YHRjyDQsNCy0LDRgtCw0YAnLCBlKVxyXG4gICAgXHRcdH1cdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0KiB7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94OztcclxuXHRcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHR9XHJcblxyXG5cdGgyIHtcclxuXHRcdGZsZXgtYmFzaXM6IDEwMCU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHRwLFxyXG5cdC5lbXBsb3llZSxcclxuXHQuYXZhdGFyX19vdmVybGF5IHtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tb3otZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW8tZmxleDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cclxuXHRwIHtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcclxuXHR9XHJcblxyXG5cdHA6aG92ZXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XHJcblx0fVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVcIiB9LCBbXG4gICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJlbXBsb3llZVwiKSkpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX19hdmF0YXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYXZhdGFyX19vdmVybGF5XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInVwbG9hZC1idXR0b25cIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0uJHQoXCJjaGFuZ2VfaW1hZ2VcIiksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYWxsYmFjazogX3ZtLnVwbG9hZFBob3RvXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uYXZhdGFyLCBhbHQ6IF92bS5pdGVtLmZpcnN0X25hbWUgfSB9KVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2Rlc2NyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2LWZvcm1cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgXCJsYXp5LXZhbGlkYXRpb25cIjogXCJcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS52YWxpZCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS52YWxpZCA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZhbGlkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICBjb3VudGVyOiA3MCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiZmlyc3RfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uZmlyc3RfbmFtZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwibGFzdF9uYW1lXCIpLFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBfdm0ubmFtZVJ1bGVzLFxuICAgICAgICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ubGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImxhc3RfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ubGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwYXRyb255bWljXCIpLFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBfdm0ubmFtZVJ1bGVzLFxuICAgICAgICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ucGF0cm9ueW1pYyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJwYXRyb255bWljXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5wYXRyb255bWljXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInBvc2l0aW9uXCIpLFxuICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiY2FyZF90cmF2ZWxcIixcbiAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnBvc2l0aW9ucyxcbiAgICAgICAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISF2IHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQtNC+0LvQttC90L7RgdGC0YxcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5wb3NpdGlvbl9pZCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJwb3NpdGlvbl9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucG9zaXRpb25faWRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInBob25lX251bWJlclwiKSxcbiAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInBob25lX2lwaG9uZVwiLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ucGhvbmVfbnVtYmVyLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInBob25lX251bWJlclwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucGhvbmVfbnVtYmVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJzYWxhcnlcIiksXG4gICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJhdHRhY2hfbW9uZXlcIixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnNhbGFyeSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJzYWxhcnlcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnNhbGFyeVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiYWRkcmVzc1wiKSxcbiAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImhvbWVcIixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiYWRkcmVzc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uYWRkcmVzc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1tZW51XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwibWVudVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXp5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZS1vbi1jb250ZW50LWNsaWNrXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJzY2FsZS10cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9mZnNldC15XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZ1bGwtd2lkdGhcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVkZ2UtcmlnaHRcIjogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1pbi13aWR0aFwiOiBcIjI5MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJldHVybi12YWx1ZVwiOiBfdm0uZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnJldHVyblZhbHVlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZSA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWVudSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lbnUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhcmdlOiBcIlwiLCBkaXNhYmxlZDogIV92bS52YWxpZCwgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5idXR0b25BY3Rpb24oKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5idXR0b25UZXh0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ2LWJ0blwiLCB7IGF0dHJzOiB7IGxhcmdlOiBcIlwiIH0sIG9uOiB7IGNsaWNrOiBfdm0uYmFjayB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdNCd0LDQt9Cw0LRcXG5cXHRcXHRcXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01ZWI4N2NkMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSA5Il0sInNvdXJjZVJvb3QiOiIifQ==