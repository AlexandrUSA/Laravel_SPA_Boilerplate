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
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n\ttext-align: center;\n}\np[data-v-5eb87cd0],\n.employee[data-v-5eb87cd0],\n.avatar__overlay[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\np[data-v-5eb87cd0] {\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AAiMA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA,mBAAA;CACA;AAEA;;;CAIA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA","file":"Show.vue","sourcesContent":["<template>\r\n  <div class=\"employee\">\r\n  \t<h2>{{ $t('employee') }}</h2>\r\n  \t\t<div class=\"employee__avatar\">\r\n  \t\t\t<div class=\"employee__avatar-container\">\r\n  \t\t\t\t<div class=\"avatar__overlay\">\r\n  \t\t\t\t\t<upload-button :title=\"$t('change_image')\" :selectedCallback=\"uploadPhoto\"></upload-button>\r\n  \t\t\t\t</div>\r\n  \t\t\t\t<img :src=\"avatar\" :alt=\"item.first_name\">\r\n  \t\t\t</div>\t\r\n\t\t\t</div>\r\n\t  \t<div class=\"employee__descr\">\r\n\t  \t\t<v-form v-model=\"valid\" ref=\"form\" lazy-validation>\r\n\t  \t\t\t<v-text-field\r\n\t\t\t\t\t      :label=\"$t('name')\"\r\n\t\t\t\t\t      v-model=\"item.first_name\"\r\n\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('last_name')\"\r\n\t\t\t\t\t\t      v-model=\"item.last_name\"\r\n\t\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('patronymic')\"\r\n\t\t\t\t\t\t      v-model=\"item.patronymic\"\r\n\t\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-select\r\n\t\t\t\t\t\t      :label=\"$t('position')\"\r\n\t\t\t\t\t\t      v-model=\"item.position_id\"\r\n\t\t\t\t\t\t      prepend-icon=\"card_travel\"\r\n\t\t\t\t\t\t      :items=\"positions\"\r\n\t\t\t\t\t\t      item-text=\"title\"\r\n\t          \t\t\titem-value=\"id\"\r\n\t\t\t\t\t\t      :rules=\"[v => !!v || 'Выберите должность']\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-select>\r\n\t\t  \t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('phone_number')\"\r\n\t\t\t\t\t\t      v-model=\"item.phone_number\"\r\n\t\t\t\t\t\t      prepend-icon=\"phone_iphone\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('salary')\"\r\n\t\t\t\t\t\t      v-model=\"item.salary\"\r\n\t\t\t\t\t\t      prepend-icon=\"attach_money\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('address')\"\r\n\t\t\t\t\t\t      v-model=\"item.address\"\r\n\t\t\t\t\t\t      prepend-icon=\"home\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-layout row wrap>\r\n\t\t\t\t\t\t<v-flex xs12>\r\n\t\t\t\t\t\t\t<v-menu\r\n\t\t\t\t\t\t\t  ref=\"menu\"\r\n\t\t\t\t\t\t\t  lazy\r\n\t\t\t\t\t\t\t  :close-on-content-click=\"false\"\r\n\t\t\t\t\t\t\t  v-model=\"menu\"\r\n\t\t\t\t\t\t\t  transition=\"scale-transition\"\r\n\t\t\t\t\t\t\t  offset-y\r\n\t\t\t\t\t\t\t  full-width\r\n\t\t\t\t\t\t\t  :nudge-right=\"40\"\r\n\t\t\t\t\t\t\t  min-width=\"290px\"\r\n\t\t\t\t\t\t\t  :return-value.sync=\"date\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</v-menu>\r\n\t\t\t\t\t\t</v-flex>\r\n\t\t\t\t\t</v-layout>\r\n\t\t\t\t\t<div class=\"buttons\">\r\n\t\t\t\t\t\t<v-btn large @click=\"buttonAction()\" :disabled=\"!valid\">\r\n\t\t\t\t\t\t{{ buttonText }}\r\n\t\t\t\t\t\t</v-btn>\r\n\t\t\t\t\t\t<v-btn large @click=\"back\">\r\n\t\t\t\t\t\tНазад\r\n\t\t\t\t\t\t</v-btn>\r\n\t\t\t\t\t</div>\r\n\t  \t\t</v-form>\t  \t\t\r\n\t  </div>\r\n  </div>\t\t\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\timport axios from 'axios';\r\n\texport default {\r\n\t\tmiddleware: ['auth', 'organisation'],\r\n\t\tprops: {\r\n\t\t\tid: {\r\n\t\t\t\ttype: [Number, String],\r\n\t\t\t\trequired: true\r\n\t\t\t}\r\n\t\t},\r\n\t\tdata() {\r\n\t\t\treturn {\r\n\t\t\t\tdisabled: true,\r\n\t\t\t\tdate: null,\r\n\t      menu: false,\r\n\t      modal: false,\r\n\t      name: '',\r\n\t      valid: false,\r\n\t      defaultItem: {},\r\n\t      nameRules: [\r\n\t        v => !!v || 'Введите значение',\r\n\t        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',\r\n\t      ],\r\n\t      emailRules: [\r\n\t        v => !!v || 'Введите E-mail',\r\n\t        v => /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(v) || 'Не валидный E-mail'\r\n\t      ]\r\n\t\t\t}\r\n\t\t},\r\n\t\tcomputed: {\r\n\t\t\t...mapGetters({\r\n\t\t\t\titem: 'employees/employee',\r\n\t\t\t\tpositions: 'positions/positions',\r\n\t\t\t\tuser: 'auth/user'\r\n\t\t\t}),\r\n\t\t\tbuttonText() {\r\n\t\t\t\treturn !this.disabled ? \"Обновить\" : \"Изменить данные\";\r\n\t\t\t},\r\n\t\t\tavatar() {\r\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"/storage/avatars/no-avatar.jpg\"\r\n\t\t\t}\r\n\t\t},\r\n\t\t// Загрузка пользователя перед монтированием компонента\r\n\t\tbeforeRouteEnter (to, from, next) {\r\n    \tnext(vm => vm.$store.dispatch('employees/loadOne', vm.id));\r\n  \t},\r\n\t\tmethods: {\r\n\t\t\t...mapActions({\r\n\t\t\t\tchangeItem: 'employees/edit',\r\n\t\t\t\tupdateUser: 'auth/updateUser'\r\n\t\t\t}),\r\n\t\t\tuserUpdate() {\r\n\t\t\t\tconst newUser = Object.assign({}, this.user);\r\n\t\t\t\tnewUser.name = this.item.first_name;\r\n\t\t\t\tthis.updateUser(newUser);\r\n\t\t\t},\r\n\t\t\tbuttonAction() {\r\n\t\t\t\tif (!this.disabled) {\r\n\t\t\t\t\tthis.changeItem(this.item);\r\n\t\t\t\t\tif (this.item.user_id == this.user.id) {\r\n\t\t\t\t\t\tthis.userUpdate()\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\tthis.defaultItem = Object.assign({}, this.item);\r\n\t\t\t\tthis.disabled = !this.disabled;\t\t\r\n\t\t\t},\r\n\t\t\tback() {\t\r\n\t\t\t\tif (this.disabled) return this.$router.go(-1);\r\n\t\t\t\tfor(let key in this.item) {\r\n\t\t\t\t\tthis.item[key] = this.defaultItem[key]\r\n\t\t\t\t}\r\n\t\t\t\tthis.disabled = !this.disabled;\t\t\t\t\t\t\r\n\t\t\t},\r\n\t\t\tasync uploadPhoto(e) {\r\n\t\t\t\tconst imagefile = document.getElementById('avatar-file').files[0];\r\n\t\t\t\tif (!imagefile) return;\r\n\t\t    try {\r\n\t\t    \tlet formData = new FormData();    \t\t\t\t    \t\r\n\t\t\t\t\tformData.append(\"image\", imagefile);\r\n\t\t\t\t\tconst { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {\r\n\t\t\t\t\t     headers: {\r\n\t\t\t\t\t       'Content-Type': 'multipart/form-data'\r\n\t\t\t\t\t     }\r\n\t\t\t\t\t });\r\n\t\t\t\t\tthis.item.avatar = data;\r\n\t\t\t\t\tthis.$store.commit('employees/edit', this.item)\r\n    \t\t} catch (e) {\r\n      \t\tconsole.error('Не загрузился аватар', e)\r\n    \t\t}\t\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t* {\r\n\t\tbox-sizing: border-box;;\r\n\t\tfont-family: 'Roboto', sans-serif;\r\n\t}\r\n\r\n\th2 {\r\n\t\tflex-basis: 100%;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\tp,\r\n\t.employee,\r\n\t.avatar__overlay {\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\tp {\r\n\t\tjustify-content: space-between;\r\n\t\tmargin: 0;\r\n\t\tpadding: 10px;\r\n\t\ttransition: background-color .3s;\r\n\t}\r\n\r\n\tp:hover {\r\n\t\tbackground-color: rgba(255, 255, 255, .1);\r\n\t}\r\n</style>\r\n"],"sourceRoot":""}]);

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
		};
	},

	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
		item: 'employees/employee',
		positions: 'positions/positions',
		user: 'auth/user'
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
                    attrs: { large: "", disabled: !_vm.valid },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0Esa0VBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLCtDQUFnRCxtQ0FBbUMsb0NBQW9DLHNDQUFzQyxHQUFH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QSxlQUFlLFNBQVMsb0JBQW9CLEVBQUU7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVMsV0FBVyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUJBQXlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtDQUFrQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixTQUFTLFlBQVksT0FBTyxrQkFBa0IsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvOS5hZTAxNGEyZTU1M2Q5ODQzMjMzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi01ZWI4N2NkMFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGFkbWluXFxcXGVtcGxveWVlc1xcXFxTaG93LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZWI4N2NkMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlYjg3Y2QwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIxNGU0YTAzY1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTVcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbipbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdCAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDs7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5oMltkYXRhLXYtNWViODdjZDBdIHtcXG5cXHQtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG5cXHQgICAgZmxleC1iYXNpczogMTAwJTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXSxcXG4uZW1wbG95ZWVbZGF0YS12LTVlYjg3Y2QwXSxcXG4uYXZhdGFyX19vdmVybGF5W2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG5cXHQgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcbn1cXG5wW2RhdGEtdi01ZWI4N2NkMF06aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL2NybS9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBaU1BO0NBQ0EsK0JBQUE7U0FBQSx1QkFBQTtDQUNBLGtDQUFBO0NBQ0E7QUFFQTtDQUNBLDhCQUFBO0tBQUEsaUJBQUE7Q0FDQSxtQkFBQTtDQUNBO0FBRUE7OztDQUlBLG1CQUFBO0NBQ0Esa0JBQUE7Q0FDQSxpQkFBQTtDQUNBLHFCQUFBO0NBQUEscUJBQUE7Q0FBQSxjQUFBO0NBQ0E7QUFFQTtDQUNBLDBCQUFBO0tBQUEsdUJBQUE7U0FBQSwrQkFBQTtDQUNBLFVBQUE7Q0FDQSxjQUFBO0NBQ0EseUNBQUE7Q0FBQSxpQ0FBQTtDQUNBO0FBRUE7Q0FDQSwwQ0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJTaG93LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZVxcXCI+XFxyXFxuICBcXHQ8aDI+e3sgJHQoJ2VtcGxveWVlJykgfX08L2gyPlxcclxcbiAgXFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2F2YXRhclxcXCI+XFxyXFxuICBcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lclxcXCI+XFxyXFxuICBcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJhdmF0YXJfX292ZXJsYXlcXFwiPlxcclxcbiAgXFx0XFx0XFx0XFx0XFx0PHVwbG9hZC1idXR0b24gOnRpdGxlPVxcXCIkdCgnY2hhbmdlX2ltYWdlJylcXFwiIDpzZWxlY3RlZENhbGxiYWNrPVxcXCJ1cGxvYWRQaG90b1xcXCI+PC91cGxvYWQtYnV0dG9uPlxcclxcbiAgXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuICBcXHRcXHRcXHRcXHQ8aW1nIDpzcmM9XFxcImF2YXRhclxcXCIgOmFsdD1cXFwiaXRlbS5maXJzdF9uYW1lXFxcIj5cXHJcXG4gIFxcdFxcdFxcdDwvZGl2PlxcdFxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdCAgXFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2Rlc2NyXFxcIj5cXHJcXG5cXHQgIFxcdFxcdDx2LWZvcm0gdi1tb2RlbD1cXFwidmFsaWRcXFwiIHJlZj1cXFwiZm9ybVxcXCIgbGF6eS12YWxpZGF0aW9uPlxcclxcblxcdCAgXFx0XFx0XFx0PHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ25hbWUnKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmZpcnN0X25hbWVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmNvdW50ZXI9XFxcIjcwXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDx2LXRleHQtZmllbGRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdsYXN0X25hbWUnKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmxhc3RfbmFtZVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6cnVsZXM9XFxcIm5hbWVSdWxlc1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6Y291bnRlcj1cXFwiNzBcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8di10ZXh0LWZpZWxkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgncGF0cm9ueW1pYycpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ucGF0cm9ueW1pY1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6cnVsZXM9XFxcIm5hbWVSdWxlc1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6Y291bnRlcj1cXFwiNzBcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtc2VsZWN0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgncG9zaXRpb24nKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLnBvc2l0aW9uX2lkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiY2FyZF90cmF2ZWxcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOml0ZW1zPVxcXCJwb3NpdGlvbnNcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgaXRlbS10ZXh0PVxcXCJ0aXRsZVxcXCJcXHJcXG5cXHQgICAgICAgICAgXFx0XFx0XFx0aXRlbS12YWx1ZT1cXFwiaWRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMJ11cXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdD48L3Ytc2VsZWN0PlxcclxcblxcdFxcdCAgXFx0XFx0PHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3Bob25lX251bWJlcicpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ucGhvbmVfbnVtYmVyXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwicGhvbmVfaXBob25lXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3NhbGFyeScpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0uc2FsYXJ5XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiYXR0YWNoX21vbmV5XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ2FkZHJlc3MnKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmFkZHJlc3NcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJob21lXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtbGF5b3V0IHJvdyB3cmFwPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx2LWZsZXggeHMxMj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8di1tZW51XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICByZWY9XFxcIm1lbnVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICBsYXp5XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICA6Y2xvc2Utb24tY29udGVudC1jbGljaz1cXFwiZmFsc2VcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICB2LW1vZGVsPVxcXCJtZW51XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgdHJhbnNpdGlvbj1cXFwic2NhbGUtdHJhbnNpdGlvblxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgIG9mZnNldC15XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICBmdWxsLXdpZHRoXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICA6bnVkZ2UtcmlnaHQ9XFxcIjQwXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgbWluLXdpZHRoPVxcXCIyOTBweFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgIDpyZXR1cm4tdmFsdWUuc3luYz1cXFwiZGF0ZVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC92LW1lbnU+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC92LWZsZXg+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC92LWxheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJidXR0b25zXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8di1idG4gbGFyZ2UgQGNsaWNrPVxcXCJidXR0b25BY3Rpb24oKVxcXCIgOmRpc2FibGVkPVxcXCIhdmFsaWRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdHt7IGJ1dHRvblRleHQgfX1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L3YtYnRuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx2LWJ0biBsYXJnZSBAY2xpY2s9XFxcImJhY2tcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdNCd0LDQt9Cw0LRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L3YtYnRuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdCAgXFx0XFx0PC92LWZvcm0+XFx0ICBcXHRcXHRcXHJcXG5cXHQgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFx0XFx0XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcblxcdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XFxyXFxuXFx0aW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcXHJcXG5cXHRleHBvcnQgZGVmYXVsdCB7XFxyXFxuXFx0XFx0bWlkZGxld2FyZTogWydhdXRoJywgJ29yZ2FuaXNhdGlvbiddLFxcclxcblxcdFxcdHByb3BzOiB7XFxyXFxuXFx0XFx0XFx0aWQ6IHtcXHJcXG5cXHRcXHRcXHRcXHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxcclxcblxcdFxcdFxcdFxcdHJlcXVpcmVkOiB0cnVlXFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0ZGF0YSgpIHtcXHJcXG5cXHRcXHRcXHRyZXR1cm4ge1xcclxcblxcdFxcdFxcdFxcdGRpc2FibGVkOiB0cnVlLFxcclxcblxcdFxcdFxcdFxcdGRhdGU6IG51bGwsXFxyXFxuXFx0ICAgICAgbWVudTogZmFsc2UsXFxyXFxuXFx0ICAgICAgbW9kYWw6IGZhbHNlLFxcclxcblxcdCAgICAgIG5hbWU6ICcnLFxcclxcblxcdCAgICAgIHZhbGlkOiBmYWxzZSxcXHJcXG5cXHQgICAgICBkZWZhdWx0SXRlbToge30sXFxyXFxuXFx0ICAgICAgbmFtZVJ1bGVzOiBbXFxyXFxuXFx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtScsXFxyXFxuXFx0ICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoID4gMSkgfHwgJ9CY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDIg0LHRg9C60LLRiycsXFxyXFxuXFx0ICAgICAgXSxcXHJcXG5cXHQgICAgICBlbWFpbFJ1bGVzOiBbXFxyXFxuXFx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUgRS1tYWlsJyxcXHJcXG5cXHQgICAgICAgIHYgPT4gL15cXFxcdysoWy4tXT9cXFxcdyspKkBcXFxcdysoWy4tXT9cXFxcdyspKihcXFxcLlxcXFx3ezIsM30pKyQvLnRlc3QodikgfHwgJ9Cd0LUg0LLQsNC70LjQtNC90YvQuSBFLW1haWwnXFxyXFxuXFx0ICAgICAgXVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdGNvbXB1dGVkOiB7XFxyXFxuXFx0XFx0XFx0Li4ubWFwR2V0dGVycyh7XFxyXFxuXFx0XFx0XFx0XFx0aXRlbTogJ2VtcGxveWVlcy9lbXBsb3llZScsXFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXFxyXFxuXFx0XFx0XFx0XFx0dXNlcjogJ2F1dGgvdXNlcidcXHJcXG5cXHRcXHRcXHR9KSxcXHJcXG5cXHRcXHRcXHRidXR0b25UZXh0KCkge1xcclxcblxcdFxcdFxcdFxcdHJldHVybiAhdGhpcy5kaXNhYmxlZCA/IFxcXCLQntCx0L3QvtCy0LjRgtGMXFxcIiA6IFxcXCLQmNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtVxcXCI7XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRhdmF0YXIoKSB7XFxyXFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcXFwiL3N0b3JhZ2UvYXZhdGFycy9uby1hdmF0YXIuanBnXFxcIlxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdC8vINCX0LDQs9GA0YPQt9C60LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0LXRgNC10LQg0LzQvtC90YLQuNGA0L7QstCw0L3QuNC10Lwg0LrQvtC80L/QvtC90LXQvdGC0LBcXHJcXG5cXHRcXHRiZWZvcmVSb3V0ZUVudGVyICh0bywgZnJvbSwgbmV4dCkge1xcclxcbiAgICBcXHRuZXh0KHZtID0+IHZtLiRzdG9yZS5kaXNwYXRjaCgnZW1wbG95ZWVzL2xvYWRPbmUnLCB2bS5pZCkpO1xcclxcbiAgXFx0fSxcXHJcXG5cXHRcXHRtZXRob2RzOiB7XFxyXFxuXFx0XFx0XFx0Li4ubWFwQWN0aW9ucyh7XFxyXFxuXFx0XFx0XFx0XFx0Y2hhbmdlSXRlbTogJ2VtcGxveWVlcy9lZGl0JyxcXHJcXG5cXHRcXHRcXHRcXHR1cGRhdGVVc2VyOiAnYXV0aC91cGRhdGVVc2VyJ1xcclxcblxcdFxcdFxcdH0pLFxcclxcblxcdFxcdFxcdHVzZXJVcGRhdGUoKSB7XFxyXFxuXFx0XFx0XFx0XFx0Y29uc3QgbmV3VXNlciA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudXNlcik7XFxyXFxuXFx0XFx0XFx0XFx0bmV3VXNlci5uYW1lID0gdGhpcy5pdGVtLmZpcnN0X25hbWU7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy51cGRhdGVVc2VyKG5ld1VzZXIpO1xcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0YnV0dG9uQWN0aW9uKCkge1xcclxcblxcdFxcdFxcdFxcdGlmICghdGhpcy5kaXNhYmxlZCkge1xcclxcblxcdFxcdFxcdFxcdFxcdHRoaXMuY2hhbmdlSXRlbSh0aGlzLml0ZW0pO1xcclxcblxcdFxcdFxcdFxcdFxcdGlmICh0aGlzLml0ZW0udXNlcl9pZCA9PSB0aGlzLnVzZXIuaWQpIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR0aGlzLnVzZXJVcGRhdGUoKVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5kZWZhdWx0SXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbSk7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5kaXNhYmxlZCA9ICF0aGlzLmRpc2FibGVkO1xcdFxcdFxcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0YmFjaygpIHtcXHRcXHJcXG5cXHRcXHRcXHRcXHRpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuIHRoaXMuJHJvdXRlci5nbygtMSk7XFxyXFxuXFx0XFx0XFx0XFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5pdGVtKSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5pdGVtW2tleV0gPSB0aGlzLmRlZmF1bHRJdGVtW2tleV1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5kaXNhYmxlZCA9ICF0aGlzLmRpc2FibGVkO1xcdFxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0YXN5bmMgdXBsb2FkUGhvdG8oZSkge1xcclxcblxcdFxcdFxcdFxcdGNvbnN0IGltYWdlZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmF0YXItZmlsZScpLmZpbGVzWzBdO1xcclxcblxcdFxcdFxcdFxcdGlmICghaW1hZ2VmaWxlKSByZXR1cm47XFxyXFxuXFx0XFx0ICAgIHRyeSB7XFxyXFxuXFx0XFx0ICAgIFxcdGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpOyAgICBcXHRcXHRcXHRcXHQgICAgXFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9ybURhdGEuYXBwZW5kKFxcXCJpbWFnZVxcXCIsIGltYWdlZmlsZSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCArICcvYXZhdGFyJywgZm9ybURhdGEsIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgIGhlYWRlcnM6IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgfVxcclxcblxcdFxcdFxcdFxcdFxcdCB9KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLml0ZW0uYXZhdGFyID0gZGF0YTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLiRzdG9yZS5jb21taXQoJ2VtcGxveWVlcy9lZGl0JywgdGhpcy5pdGVtKVxcclxcbiAgICBcXHRcXHR9IGNhdGNoIChlKSB7XFxyXFxuICAgICAgXFx0XFx0Y29uc29sZS5lcnJvcign0J3QtSDQt9Cw0LPRgNGD0LfQuNC70YHRjyDQsNCy0LDRgtCw0YAnLCBlKVxcclxcbiAgICBcXHRcXHR9XFx0XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG5cXHQqIHtcXHJcXG5cXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94OztcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGgyIHtcXHJcXG5cXHRcXHRmbGV4LWJhc2lzOiAxMDAlO1xcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0cCxcXHJcXG5cXHQuZW1wbG95ZWUsXFxyXFxuXFx0LmF2YXRhcl9fb3ZlcmxheSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1tb3otZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtbXMtZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtby1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdHAge1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0cDpob3ZlciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XFxyXFxuXFx0fVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTZcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJlbXBsb3llZVwiPlxyXG4gIFx0PGgyPnt7ICR0KCdlbXBsb3llZScpIH19PC9oMj5cclxuICBcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXJcIj5cclxuICBcdFx0XHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcIj5cclxuICBcdFx0XHRcdDxkaXYgY2xhc3M9XCJhdmF0YXJfX292ZXJsYXlcIj5cclxuICBcdFx0XHRcdFx0PHVwbG9hZC1idXR0b24gOnRpdGxlPVwiJHQoJ2NoYW5nZV9pbWFnZScpXCIgOnNlbGVjdGVkQ2FsbGJhY2s9XCJ1cGxvYWRQaG90b1wiPjwvdXBsb2FkLWJ1dHRvbj5cclxuICBcdFx0XHRcdDwvZGl2PlxyXG4gIFx0XHRcdFx0PGltZyA6c3JjPVwiYXZhdGFyXCIgOmFsdD1cIml0ZW0uZmlyc3RfbmFtZVwiPlxyXG4gIFx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdDwvZGl2PlxyXG5cdCAgXHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2Rlc2NyXCI+XHJcblx0ICBcdFx0PHYtZm9ybSB2LW1vZGVsPVwidmFsaWRcIiByZWY9XCJmb3JtXCIgbGF6eS12YWxpZGF0aW9uPlxyXG5cdCAgXHRcdFx0PHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ25hbWUnKVwiXHJcblx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5maXJzdF9uYW1lXCJcclxuXHRcdFx0XHRcdCAgICAgIDpjb3VudGVyPVwiNzBcIlxyXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuXHRcdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cclxuXHRcdFx0XHRcdFx0ICAgIDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ2xhc3RfbmFtZScpXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ubGFzdF9uYW1lXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwibmFtZVJ1bGVzXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgOmNvdW50ZXI9XCI3MFwiXHJcblx0XHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuXHRcdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cclxuXHRcdFx0XHRcdDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3BhdHJvbnltaWMnKVwiXHJcblx0XHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLnBhdHJvbnltaWNcIlxyXG5cdFx0XHRcdFx0XHQgICAgICA6cnVsZXM9XCJuYW1lUnVsZXNcIlxyXG5cdFx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0PHYtc2VsZWN0XHJcblx0XHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdwb3NpdGlvbicpXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucG9zaXRpb25faWRcIlxyXG5cdFx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJjYXJkX3RyYXZlbFwiXHJcblx0XHRcdFx0XHRcdCAgICAgIDppdGVtcz1cInBvc2l0aW9uc1wiXHJcblx0XHRcdFx0XHRcdCAgICAgIGl0ZW0tdGV4dD1cInRpdGxlXCJcclxuXHQgICAgICAgICAgXHRcdFx0aXRlbS12YWx1ZT1cImlkXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwiW3YgPT4gISF2IHx8ICfQktGL0LHQtdGA0LjRgtC1INC00L7Qu9C20L3QvtGB0YLRjCddXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0Pjwvdi1zZWxlY3Q+XHJcblx0XHQgIFx0XHQ8di10ZXh0LWZpZWxkXHJcblx0XHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdwaG9uZV9udW1iZXInKVwiXHJcblx0XHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLnBob25lX251bWJlclwiXHJcblx0XHRcdFx0XHRcdCAgICAgIHByZXBlbmQtaWNvbj1cInBob25lX2lwaG9uZVwiXHJcblx0XHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuXHRcdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cclxuXHRcdFx0XHRcdDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3NhbGFyeScpXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0uc2FsYXJ5XCJcclxuXHRcdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwiYXR0YWNoX21vbmV5XCJcclxuXHRcdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0PHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnYWRkcmVzcycpXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0uYWRkcmVzc1wiXHJcblx0XHRcdFx0XHRcdCAgICAgIHByZXBlbmQtaWNvbj1cImhvbWVcIlxyXG5cdFx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcblx0XHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHQ8di1sYXlvdXQgcm93IHdyYXA+XHJcblx0XHRcdFx0XHRcdDx2LWZsZXggeHMxMj5cclxuXHRcdFx0XHRcdFx0XHQ8di1tZW51XHJcblx0XHRcdFx0XHRcdFx0ICByZWY9XCJtZW51XCJcclxuXHRcdFx0XHRcdFx0XHQgIGxhenlcclxuXHRcdFx0XHRcdFx0XHQgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHRcdCAgdi1tb2RlbD1cIm1lbnVcIlxyXG5cdFx0XHRcdFx0XHRcdCAgdHJhbnNpdGlvbj1cInNjYWxlLXRyYW5zaXRpb25cIlxyXG5cdFx0XHRcdFx0XHRcdCAgb2Zmc2V0LXlcclxuXHRcdFx0XHRcdFx0XHQgIGZ1bGwtd2lkdGhcclxuXHRcdFx0XHRcdFx0XHQgIDpudWRnZS1yaWdodD1cIjQwXCJcclxuXHRcdFx0XHRcdFx0XHQgIG1pbi13aWR0aD1cIjI5MHB4XCJcclxuXHRcdFx0XHRcdFx0XHQgIDpyZXR1cm4tdmFsdWUuc3luYz1cImRhdGVcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8L3YtbWVudT5cclxuXHRcdFx0XHRcdFx0PC92LWZsZXg+XHJcblx0XHRcdFx0XHQ8L3YtbGF5b3V0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuXHRcdFx0XHRcdFx0PHYtYnRuIGxhcmdlIEBjbGljaz1cImJ1dHRvbkFjdGlvbigpXCIgOmRpc2FibGVkPVwiIXZhbGlkXCI+XHJcblx0XHRcdFx0XHRcdHt7IGJ1dHRvblRleHQgfX1cclxuXHRcdFx0XHRcdFx0PC92LWJ0bj5cclxuXHRcdFx0XHRcdFx0PHYtYnRuIGxhcmdlIEBjbGljaz1cImJhY2tcIj5cclxuXHRcdFx0XHRcdFx00J3QsNC30LDQtFxyXG5cdFx0XHRcdFx0XHQ8L3YtYnRuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0ICBcdFx0PC92LWZvcm0+XHQgIFx0XHRcclxuXHQgIDwvZGl2PlxyXG4gIDwvZGl2Plx0XHRcclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcclxuXHRpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG1pZGRsZXdhcmU6IFsnYXV0aCcsICdvcmdhbmlzYXRpb24nXSxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGlkOiB7XHJcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcclxuXHRcdFx0XHRkYXRlOiBudWxsLFxyXG5cdCAgICAgIG1lbnU6IGZhbHNlLFxyXG5cdCAgICAgIG1vZGFsOiBmYWxzZSxcclxuXHQgICAgICBuYW1lOiAnJyxcclxuXHQgICAgICB2YWxpZDogZmFsc2UsXHJcblx0ICAgICAgZGVmYXVsdEl0ZW06IHt9LFxyXG5cdCAgICAgIG5hbWVSdWxlczogW1xyXG5cdCAgICAgICAgdiA9PiAhIXYgfHwgJ9CS0LLQtdC00LjRgtC1INC30L3QsNGH0LXQvdC40LUnLFxyXG5cdCAgICAgICAgdiA9PiAodiAmJiB2Lmxlbmd0aCA+IDEpIHx8ICfQmNC80Y8g0LTQvtC70LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDQvNC40L3QuNC80YPQvCAyINCx0YPQutCy0YsnLFxyXG5cdCAgICAgIF0sXHJcblx0ICAgICAgZW1haWxSdWxlczogW1xyXG5cdCAgICAgICAgdiA9PiAhIXYgfHwgJ9CS0LLQtdC00LjRgtC1IEUtbWFpbCcsXHJcblx0ICAgICAgICB2ID0+IC9eXFx3KyhbLi1dP1xcdyspKkBcXHcrKFsuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLy50ZXN0KHYpIHx8ICfQndC1INCy0LDQu9C40LTQvdGL0LkgRS1tYWlsJ1xyXG5cdCAgICAgIF1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdC4uLm1hcEdldHRlcnMoe1xyXG5cdFx0XHRcdGl0ZW06ICdlbXBsb3llZXMvZW1wbG95ZWUnLFxyXG5cdFx0XHRcdHBvc2l0aW9uczogJ3Bvc2l0aW9ucy9wb3NpdGlvbnMnLFxyXG5cdFx0XHRcdHVzZXI6ICdhdXRoL3VzZXInXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRidXR0b25UZXh0KCkge1xyXG5cdFx0XHRcdHJldHVybiAhdGhpcy5kaXNhYmxlZCA/IFwi0J7QsdC90L7QstC40YLRjFwiIDogXCLQmNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtVwiO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhdmF0YXIoKSB7XHJcblx0XHRcdFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcIi9zdG9yYWdlL2F2YXRhcnMvbm8tYXZhdGFyLmpwZ1wiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvLyDQl9Cw0LPRgNGD0LfQutCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQv9C10YDQtdC0INC80L7QvdGC0LjRgNC+0LLQsNC90LjQtdC8INC60L7QvNC/0L7QvdC10L3RgtCwXHJcblx0XHRiZWZvcmVSb3V0ZUVudGVyICh0bywgZnJvbSwgbmV4dCkge1xyXG4gICAgXHRuZXh0KHZtID0+IHZtLiRzdG9yZS5kaXNwYXRjaCgnZW1wbG95ZWVzL2xvYWRPbmUnLCB2bS5pZCkpO1xyXG4gIFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XHJcblx0XHRcdFx0Y2hhbmdlSXRlbTogJ2VtcGxveWVlcy9lZGl0JyxcclxuXHRcdFx0XHR1cGRhdGVVc2VyOiAnYXV0aC91cGRhdGVVc2VyJ1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0dXNlclVwZGF0ZSgpIHtcclxuXHRcdFx0XHRjb25zdCBuZXdVc2VyID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy51c2VyKTtcclxuXHRcdFx0XHRuZXdVc2VyLm5hbWUgPSB0aGlzLml0ZW0uZmlyc3RfbmFtZTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVVzZXIobmV3VXNlcik7XHJcblx0XHRcdH0sXHJcblx0XHRcdGJ1dHRvbkFjdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuY2hhbmdlSXRlbSh0aGlzLml0ZW0pO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuaXRlbS51c2VyX2lkID09IHRoaXMudXNlci5pZCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJVcGRhdGUoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmRlZmF1bHRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pdGVtKTtcclxuXHRcdFx0XHR0aGlzLmRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQ7XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRiYWNrKCkge1x0XHJcblx0XHRcdFx0aWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybiB0aGlzLiRyb3V0ZXIuZ28oLTEpO1xyXG5cdFx0XHRcdGZvcihsZXQga2V5IGluIHRoaXMuaXRlbSkge1xyXG5cdFx0XHRcdFx0dGhpcy5pdGVtW2tleV0gPSB0aGlzLmRlZmF1bHRJdGVtW2tleV1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5kaXNhYmxlZCA9ICF0aGlzLmRpc2FibGVkO1x0XHRcdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyB1cGxvYWRQaG90byhlKSB7XHJcblx0XHRcdFx0Y29uc3QgaW1hZ2VmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YXRhci1maWxlJykuZmlsZXNbMF07XHJcblx0XHRcdFx0aWYgKCFpbWFnZWZpbGUpIHJldHVybjtcclxuXHRcdCAgICB0cnkge1xyXG5cdFx0ICAgIFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7ICAgIFx0XHRcdFx0ICAgIFx0XHJcblx0XHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZWZpbGUpO1xyXG5cdFx0XHRcdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCArICcvYXZhdGFyJywgZm9ybURhdGEsIHtcclxuXHRcdFx0XHRcdCAgICAgaGVhZGVyczoge1xyXG5cdFx0XHRcdFx0ICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuXHRcdFx0XHRcdCAgICAgfVxyXG5cdFx0XHRcdFx0IH0pO1xyXG5cdFx0XHRcdFx0dGhpcy5pdGVtLmF2YXRhciA9IGRhdGE7XHJcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ2VtcGxveWVlcy9lZGl0JywgdGhpcy5pdGVtKVxyXG4gICAgXHRcdH0gY2F0Y2ggKGUpIHtcclxuICAgICAgXHRcdGNvbnNvbGUuZXJyb3IoJ9Cd0LUg0LfQsNCz0YDRg9C30LjQu9GB0Y8g0LDQstCw0YLQsNGAJywgZSlcclxuICAgIFx0XHR9XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdCoge1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDs7XHJcblx0XHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblx0fVxyXG5cclxuXHRoMiB7XHJcblx0XHRmbGV4LWJhc2lzOiAxMDAlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0cCxcclxuXHQuZW1wbG95ZWUsXHJcblx0LmF2YXRhcl9fb3ZlcmxheSB7XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtbXMtZmxleDtcclxuXHRcdGRpc3BsYXk6IC1vLWZsZXg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcblx0cCB7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XHJcblx0fVxyXG5cclxuXHRwOmhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xyXG5cdH1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlXCIgfSwgW1xuICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiZW1wbG95ZWVcIikpKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fYXZhdGFyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImF2YXRhcl9fb3ZlcmxheVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1cGxvYWQtYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLiR0KFwiY2hhbmdlX2ltYWdlXCIpLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2FsbGJhY2s6IF92bS51cGxvYWRQaG90b1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmF2YXRhciwgYWx0OiBfdm0uaXRlbS5maXJzdF9uYW1lIH0gfSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX19kZXNjclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidi1mb3JtXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVmOiBcImZvcm1cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IFwibGF6eS12YWxpZGF0aW9uXCI6IFwiXCIgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsaWQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0udmFsaWQgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5maXJzdF9uYW1lLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImZpcnN0X25hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmZpcnN0X25hbWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImxhc3RfbmFtZVwiKSxcbiAgICAgICAgICAgICAgICBydWxlczogX3ZtLm5hbWVSdWxlcyxcbiAgICAgICAgICAgICAgICBjb3VudGVyOiA3MCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJsYXN0X25hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicGF0cm9ueW1pY1wiKSxcbiAgICAgICAgICAgICAgICBydWxlczogX3ZtLm5hbWVSdWxlcyxcbiAgICAgICAgICAgICAgICBjb3VudGVyOiA3MCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnBhdHJvbnltaWMsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwicGF0cm9ueW1pY1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucGF0cm9ueW1pY1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwb3NpdGlvblwiKSxcbiAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImNhcmRfdHJhdmVsXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5wb3NpdGlvbnMsXG4gICAgICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhdiB8fCBcItCS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ucG9zaXRpb25faWQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwicG9zaXRpb25faWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnBvc2l0aW9uX2lkXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwaG9uZV9udW1iZXJcIiksXG4gICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJwaG9uZV9pcGhvbmVcIixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnBob25lX251bWJlcixcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJwaG9uZV9udW1iZXJcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnBob25lX251bWJlclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwic2FsYXJ5XCIpLFxuICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiYXR0YWNoX21vbmV5XCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5zYWxhcnksXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwic2FsYXJ5XCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5zYWxhcnlcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImFkZHJlc3NcIiksXG4gICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJob21lXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImFkZHJlc3NcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmFkZHJlc3NcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtbWVudVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcIm1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF6eTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvc2Utb24tY29udGVudC1jbGlja1wiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwic2NhbGUtdHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZmZzZXQteVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmdWxsLXdpZHRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51ZGdlLXJpZ2h0XCI6IDQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW4td2lkdGhcIjogXCIyOTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXR1cm4tdmFsdWVcIjogX3ZtLmRhdGVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpyZXR1cm5WYWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGUgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1lbnUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZW51ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYXJnZTogXCJcIiwgZGlzYWJsZWQ6ICFfdm0udmFsaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uYnV0dG9uQWN0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uYnV0dG9uVGV4dCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidi1idG5cIiwgeyBhdHRyczogeyBsYXJnZTogXCJcIiB9LCBvbjogeyBjbGljazogX3ZtLmJhY2sgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHTQndCw0LfQsNC0XFxuXFx0XFx0XFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNWViODdjZDBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gOSJdLCJzb3VyY2VSb290IjoiIn0=