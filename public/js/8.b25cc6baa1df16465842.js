webpackJsonp([8],{

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
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n\ttext-align: center;\n}\np[data-v-5eb87cd0],\n.employee[data-v-5eb87cd0],\n.avatar__overlay[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\np[data-v-5eb87cd0] {\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AAiMA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA,mBAAA;CACA;AAEA;;;CAIA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA","file":"Show.vue","sourcesContent":["<template>\r\n  <div class=\"employee\">\r\n  \t<h2>{{ $t('employee') }}</h2>\r\n  \t\t<div class=\"employee__avatar\">\r\n  \t\t\t<div class=\"employee__avatar-container\">\r\n  \t\t\t\t<div class=\"avatar__overlay\">\r\n  \t\t\t\t\t<upload-button :title=\"$t('change_image')\" :selectedCallback=\"uploadPhoto\"></upload-button>\r\n  \t\t\t\t</div>\r\n  \t\t\t\t<img :src=\"avatar\" :alt=\"item.first_name\">\r\n  \t\t\t</div>\t\r\n\t\t\t</div>\r\n\t  \t<div class=\"employee__descr\">\r\n\t  \t\t<v-form v-model=\"valid\" ref=\"form\" lazy-validation>\r\n\t  \t\t\t<v-text-field\r\n\t\t\t\t\t      :label=\"$t('name')\"\r\n\t\t\t\t\t      v-model=\"item.first_name\"\r\n\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t      required\r\n\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t\t    <v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('last_name')\"\r\n\t\t\t\t\t\t      v-model=\"item.last_name\"\r\n\t\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('patronymic')\"\r\n\t\t\t\t\t\t      v-model=\"item.patronymic\"\r\n\t\t\t\t\t\t      :rules=\"nameRules\"\r\n\t\t\t\t\t\t      :counter=\"70\"\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-select\r\n\t\t\t\t\t\t      :label=\"$t('position')\"\r\n\t\t\t\t\t\t      v-model=\"item.position_id\"\r\n\t\t\t\t\t\t      prepend-icon=\"card_travel\"\r\n\t\t\t\t\t\t      :items=\"positions\"\r\n\t\t\t\t\t\t      item-text=\"title\"\r\n\t          \t\t\titem-value=\"id\"\r\n\t\t\t\t\t\t      :rules=\"[v => !!v || 'Выберите должность']\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-select>\r\n\t\t  \t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('phone_number')\"\r\n\t\t\t\t\t\t      v-model=\"item.phone_number\"\r\n\t\t\t\t\t\t      prepend-icon=\"phone_iphone\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('salary')\"\r\n\t\t\t\t\t\t      v-model=\"item.salary\"\r\n\t\t\t\t\t\t      prepend-icon=\"attach_money\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-text-field\r\n\t\t\t\t\t\t      :label=\"$t('address')\"\r\n\t\t\t\t\t\t      v-model=\"item.address\"\r\n\t\t\t\t\t\t      prepend-icon=\"home\"\r\n\t\t\t\t\t\t      required\r\n\t\t\t\t\t\t      :disabled=\"disabled\"\r\n\t\t\t\t\t></v-text-field>\r\n\t\t\t\t\t<v-layout row wrap>\r\n\t\t\t\t\t\t<v-flex xs12>\r\n\t\t\t\t\t\t\t<v-menu\r\n\t\t\t\t\t\t\t  ref=\"menu\"\r\n\t\t\t\t\t\t\t  lazy\r\n\t\t\t\t\t\t\t  :close-on-content-click=\"false\"\r\n\t\t\t\t\t\t\t  v-model=\"menu\"\r\n\t\t\t\t\t\t\t  transition=\"scale-transition\"\r\n\t\t\t\t\t\t\t  offset-y\r\n\t\t\t\t\t\t\t  full-width\r\n\t\t\t\t\t\t\t  :nudge-right=\"40\"\r\n\t\t\t\t\t\t\t  min-width=\"290px\"\r\n\t\t\t\t\t\t\t  :return-value.sync=\"date\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</v-menu>\r\n\t\t\t\t\t\t</v-flex>\r\n\t\t\t\t\t</v-layout>\r\n\t\t\t\t\t<div class=\"buttons\">\r\n\t\t\t\t\t\t<v-btn large @click=\"buttonAction()\" :disabled=\"!valid\">\r\n\t\t\t\t\t\t{{ buttonText }}\r\n\t\t\t\t\t\t</v-btn>\r\n\t\t\t\t\t\t<v-btn large @click=\"back\">\r\n\t\t\t\t\t\tНазад\r\n\t\t\t\t\t\t</v-btn>\r\n\t\t\t\t\t</div>\r\n\t  \t\t</v-form>\t  \t\t\r\n\t  </div>\r\n  </div>\t\t\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\timport axios from 'axios';\r\n\texport default {\r\n\t\tmiddleware: ['auth', 'organisation'],\r\n\t\tprops: {\r\n\t\t\tid: {\r\n\t\t\t\ttype: [Number, String],\r\n\t\t\t\trequired: true\r\n\t\t\t}\r\n\t\t},\r\n\t\tdata() {\r\n\t\t\treturn {\r\n\t\t\t\tdisabled: true,\r\n\t\t\t\tdate: null,\r\n\t      menu: false,\r\n\t      modal: false,\r\n\t      name: '',\r\n\t      valid: false,\r\n\t      defaultItem: {},\r\n\t      nameRules: [\r\n\t        v => !!v || 'Введите значение',\r\n\t        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',\r\n\t      ],\r\n\t      emailRules: [\r\n\t        v => !!v || 'Введите E-mail',\r\n\t        v => /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(v) || 'Не валидный E-mail'\r\n\t      ]\r\n\t\t\t}\r\n\t\t},\r\n\t\tcomputed: {\r\n\t\t\t...mapGetters({\r\n\t\t\t\titem: 'employees/employee',\r\n\t\t\t\tpositions: 'positions/positions',\r\n\t\t\t\tuser: 'auth/user'\r\n\t\t\t}),\r\n\t\t\tbuttonText() {\r\n\t\t\t\treturn !this.disabled ? \"Обновить\" : \"Изменить данные\";\r\n\t\t\t},\r\n\t\t\tavatar() {\r\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"/storage/avatars/no-avatar.jpg\"\r\n\t\t\t}\r\n\t\t},\r\n\t\t// Загрузка пользователя перед монтированием компонента\r\n\t\tbeforeRouteEnter (to, from, next) {\r\n    \tnext(vm => vm.$store.dispatch('employees/loadOne', vm.id));\r\n  \t},\r\n\t\tmethods: {\r\n\t\t\t...mapActions({\r\n\t\t\t\tchangeItem: 'employees/edit',\r\n\t\t\t\tupdateUser: 'auth/updateUser'\r\n\t\t\t}),\r\n\t\t\tuserUpdate() {\r\n\t\t\t\tconst newUser = Object.assign({}, this.user);\r\n\t\t\t\tnewUser.name = this.item.first_name;\r\n\t\t\t\tthis.updateUser(newUser);\r\n\t\t\t},\r\n\t\t\tbuttonAction() {\r\n\t\t\t\tif (!this.disabled) {\r\n\t\t\t\t\tthis.changeItem(this.item);\r\n\t\t\t\t\tif(this.item.user_id == this.user.id) {\r\n\t\t\t\t\t\tthis.userUpdate()\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\tthis.defaultItem = Object.assign({}, this.item);\r\n\t\t\t\tthis.disabled = !this.disabled;\t\t\r\n\t\t\t},\r\n\t\t\tback() {\t\r\n\t\t\t\tif (this.disabled) return this.$router.go(-1);\r\n\t\t\t\tfor(let key in this.item) {\r\n\t\t\t\t\tthis.item[key] = this.defaultItem[key]\r\n\t\t\t\t}\r\n\t\t\t\tthis.disabled = !this.disabled;\t\t\t\t\t\t\r\n\t\t\t},\r\n\t\t\tasync uploadPhoto(e) {\r\n\t\t\t\tconst imagefile = document.getElementById('avatar-file').files[0];\r\n\t\t\t\tif (!imagefile) return;\r\n\t\t    try {\r\n\t\t    \tlet formData = new FormData();    \t\t\t\t    \t\r\n\t\t\t\t\tformData.append(\"image\", imagefile);\r\n\t\t\t\t\tconst { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {\r\n\t\t\t\t\t     headers: {\r\n\t\t\t\t\t       'Content-Type': 'multipart/form-data'\r\n\t\t\t\t\t     }\r\n\t\t\t\t\t });\r\n\t\t\t\t\tthis.item.avatar = data;\r\n\t\t\t\t\tthis.$store.commit('employees/edit', this.item)\r\n    \t\t} catch (e) {\r\n      \t\tconsole.error('Не загрузился аватар', e)\r\n    \t\t}\t\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t* {\r\n\t\tbox-sizing: border-box;;\r\n\t\tfont-family: 'Roboto', sans-serif;\r\n\t}\r\n\r\n\th2 {\r\n\t\tflex-basis: 100%;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\tp,\r\n\t.employee,\r\n\t.avatar__overlay {\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\tp {\r\n\t\tjustify-content: space-between;\r\n\t\tmargin: 0;\r\n\t\tpadding: 10px;\r\n\t\ttransition: background-color .3s;\r\n\t}\r\n\r\n\tp:hover {\r\n\t\tbackground-color: rgba(255, 255, 255, .1);\r\n\t}\r\n</style>\r\n"],"sourceRoot":""}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0Esa0VBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLCtDQUFnRCxtQ0FBbUMsb0NBQW9DLHNDQUFzQyxHQUFH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QSxlQUFlLFNBQVMsb0JBQW9CLEVBQUU7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVMsV0FBVyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUJBQXlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtDQUFrQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixTQUFTLFlBQVksT0FBTyxrQkFBa0IsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvOC5iMjVjYzZiYWExZGYxNjQ2NTg0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi01ZWI4N2NkMFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXGFkbWluXFxcXGVtcGxveWVlc1xcXFxTaG93LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZWI4N2NkMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlYjg3Y2QwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIxNGU0YTAzY1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbipbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdCAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDs7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5oMltkYXRhLXYtNWViODdjZDBdIHtcXG5cXHQtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG5cXHQgICAgZmxleC1iYXNpczogMTAwJTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXSxcXG4uZW1wbG95ZWVbZGF0YS12LTVlYjg3Y2QwXSxcXG4uYXZhdGFyX19vdmVybGF5W2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG5cXHQgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcbn1cXG5wW2RhdGEtdi01ZWI4N2NkMF06aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL2NybS9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBaU1BO0NBQ0EsK0JBQUE7U0FBQSx1QkFBQTtDQUNBLGtDQUFBO0NBQ0E7QUFFQTtDQUNBLDhCQUFBO0tBQUEsaUJBQUE7Q0FDQSxtQkFBQTtDQUNBO0FBRUE7OztDQUlBLG1CQUFBO0NBQ0Esa0JBQUE7Q0FDQSxpQkFBQTtDQUNBLHFCQUFBO0NBQUEscUJBQUE7Q0FBQSxjQUFBO0NBQ0E7QUFFQTtDQUNBLDBCQUFBO0tBQUEsdUJBQUE7U0FBQSwrQkFBQTtDQUNBLFVBQUE7Q0FDQSxjQUFBO0NBQ0EseUNBQUE7Q0FBQSxpQ0FBQTtDQUNBO0FBRUE7Q0FDQSwwQ0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJTaG93LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZVxcXCI+XFxyXFxuICBcXHQ8aDI+e3sgJHQoJ2VtcGxveWVlJykgfX08L2gyPlxcclxcbiAgXFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2F2YXRhclxcXCI+XFxyXFxuICBcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lclxcXCI+XFxyXFxuICBcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJhdmF0YXJfX292ZXJsYXlcXFwiPlxcclxcbiAgXFx0XFx0XFx0XFx0XFx0PHVwbG9hZC1idXR0b24gOnRpdGxlPVxcXCIkdCgnY2hhbmdlX2ltYWdlJylcXFwiIDpzZWxlY3RlZENhbGxiYWNrPVxcXCJ1cGxvYWRQaG90b1xcXCI+PC91cGxvYWQtYnV0dG9uPlxcclxcbiAgXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuICBcXHRcXHRcXHRcXHQ8aW1nIDpzcmM9XFxcImF2YXRhclxcXCIgOmFsdD1cXFwiaXRlbS5maXJzdF9uYW1lXFxcIj5cXHJcXG4gIFxcdFxcdFxcdDwvZGl2PlxcdFxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdCAgXFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2Rlc2NyXFxcIj5cXHJcXG5cXHQgIFxcdFxcdDx2LWZvcm0gdi1tb2RlbD1cXFwidmFsaWRcXFwiIHJlZj1cXFwiZm9ybVxcXCIgbGF6eS12YWxpZGF0aW9uPlxcclxcblxcdCAgXFx0XFx0XFx0PHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ25hbWUnKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmZpcnN0X25hbWVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmNvdW50ZXI9XFxcIjcwXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIDx2LXRleHQtZmllbGRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCdsYXN0X25hbWUnKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmxhc3RfbmFtZVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6cnVsZXM9XFxcIm5hbWVSdWxlc1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6Y291bnRlcj1cXFwiNzBcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8di10ZXh0LWZpZWxkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgncGF0cm9ueW1pYycpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ucGF0cm9ueW1pY1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6cnVsZXM9XFxcIm5hbWVSdWxlc1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6Y291bnRlcj1cXFwiNzBcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtc2VsZWN0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgncG9zaXRpb24nKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLnBvc2l0aW9uX2lkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiY2FyZF90cmF2ZWxcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOml0ZW1zPVxcXCJwb3NpdGlvbnNcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgaXRlbS10ZXh0PVxcXCJ0aXRsZVxcXCJcXHJcXG5cXHQgICAgICAgICAgXFx0XFx0XFx0aXRlbS12YWx1ZT1cXFwiaWRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMJ11cXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdD48L3Ytc2VsZWN0PlxcclxcblxcdFxcdCAgXFx0XFx0PHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3Bob25lX251bWJlcicpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0ucGhvbmVfbnVtYmVyXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwicGhvbmVfaXBob25lXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3NhbGFyeScpXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0uc2FsYXJ5XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHByZXBlbmQtaWNvbj1cXFwiYXR0YWNoX21vbmV5XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtdGV4dC1maWVsZFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ2FkZHJlc3MnKVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLmFkZHJlc3NcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJob21lXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHYtbGF5b3V0IHJvdyB3cmFwPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx2LWZsZXggeHMxMj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8di1tZW51XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICByZWY9XFxcIm1lbnVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICBsYXp5XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICA6Y2xvc2Utb24tY29udGVudC1jbGljaz1cXFwiZmFsc2VcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICB2LW1vZGVsPVxcXCJtZW51XFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgdHJhbnNpdGlvbj1cXFwic2NhbGUtdHJhbnNpdGlvblxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgIG9mZnNldC15XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICBmdWxsLXdpZHRoXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ICA6bnVkZ2UtcmlnaHQ9XFxcIjQwXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdCAgbWluLXdpZHRoPVxcXCIyOTBweFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQgIDpyZXR1cm4tdmFsdWUuc3luYz1cXFwiZGF0ZVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC92LW1lbnU+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC92LWZsZXg+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC92LWxheW91dD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJidXR0b25zXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8di1idG4gbGFyZ2UgQGNsaWNrPVxcXCJidXR0b25BY3Rpb24oKVxcXCIgOmRpc2FibGVkPVxcXCIhdmFsaWRcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdHt7IGJ1dHRvblRleHQgfX1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L3YtYnRuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx2LWJ0biBsYXJnZSBAY2xpY2s9XFxcImJhY2tcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdNCd0LDQt9Cw0LRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L3YtYnRuPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdCAgXFx0XFx0PC92LWZvcm0+XFx0ICBcXHRcXHRcXHJcXG5cXHQgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFx0XFx0XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcblxcdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XFxyXFxuXFx0aW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcXHJcXG5cXHRleHBvcnQgZGVmYXVsdCB7XFxyXFxuXFx0XFx0bWlkZGxld2FyZTogWydhdXRoJywgJ29yZ2FuaXNhdGlvbiddLFxcclxcblxcdFxcdHByb3BzOiB7XFxyXFxuXFx0XFx0XFx0aWQ6IHtcXHJcXG5cXHRcXHRcXHRcXHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxcclxcblxcdFxcdFxcdFxcdHJlcXVpcmVkOiB0cnVlXFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0ZGF0YSgpIHtcXHJcXG5cXHRcXHRcXHRyZXR1cm4ge1xcclxcblxcdFxcdFxcdFxcdGRpc2FibGVkOiB0cnVlLFxcclxcblxcdFxcdFxcdFxcdGRhdGU6IG51bGwsXFxyXFxuXFx0ICAgICAgbWVudTogZmFsc2UsXFxyXFxuXFx0ICAgICAgbW9kYWw6IGZhbHNlLFxcclxcblxcdCAgICAgIG5hbWU6ICcnLFxcclxcblxcdCAgICAgIHZhbGlkOiBmYWxzZSxcXHJcXG5cXHQgICAgICBkZWZhdWx0SXRlbToge30sXFxyXFxuXFx0ICAgICAgbmFtZVJ1bGVzOiBbXFxyXFxuXFx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtScsXFxyXFxuXFx0ICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoID4gMSkgfHwgJ9CY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDIg0LHRg9C60LLRiycsXFxyXFxuXFx0ICAgICAgXSxcXHJcXG5cXHQgICAgICBlbWFpbFJ1bGVzOiBbXFxyXFxuXFx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUgRS1tYWlsJyxcXHJcXG5cXHQgICAgICAgIHYgPT4gL15cXFxcdysoWy4tXT9cXFxcdyspKkBcXFxcdysoWy4tXT9cXFxcdyspKihcXFxcLlxcXFx3ezIsM30pKyQvLnRlc3QodikgfHwgJ9Cd0LUg0LLQsNC70LjQtNC90YvQuSBFLW1haWwnXFxyXFxuXFx0ICAgICAgXVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdGNvbXB1dGVkOiB7XFxyXFxuXFx0XFx0XFx0Li4ubWFwR2V0dGVycyh7XFxyXFxuXFx0XFx0XFx0XFx0aXRlbTogJ2VtcGxveWVlcy9lbXBsb3llZScsXFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXFxyXFxuXFx0XFx0XFx0XFx0dXNlcjogJ2F1dGgvdXNlcidcXHJcXG5cXHRcXHRcXHR9KSxcXHJcXG5cXHRcXHRcXHRidXR0b25UZXh0KCkge1xcclxcblxcdFxcdFxcdFxcdHJldHVybiAhdGhpcy5kaXNhYmxlZCA/IFxcXCLQntCx0L3QvtCy0LjRgtGMXFxcIiA6IFxcXCLQmNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtVxcXCI7XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRhdmF0YXIoKSB7XFxyXFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcXFwiL3N0b3JhZ2UvYXZhdGFycy9uby1hdmF0YXIuanBnXFxcIlxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdC8vINCX0LDQs9GA0YPQt9C60LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0LXRgNC10LQg0LzQvtC90YLQuNGA0L7QstCw0L3QuNC10Lwg0LrQvtC80L/QvtC90LXQvdGC0LBcXHJcXG5cXHRcXHRiZWZvcmVSb3V0ZUVudGVyICh0bywgZnJvbSwgbmV4dCkge1xcclxcbiAgICBcXHRuZXh0KHZtID0+IHZtLiRzdG9yZS5kaXNwYXRjaCgnZW1wbG95ZWVzL2xvYWRPbmUnLCB2bS5pZCkpO1xcclxcbiAgXFx0fSxcXHJcXG5cXHRcXHRtZXRob2RzOiB7XFxyXFxuXFx0XFx0XFx0Li4ubWFwQWN0aW9ucyh7XFxyXFxuXFx0XFx0XFx0XFx0Y2hhbmdlSXRlbTogJ2VtcGxveWVlcy9lZGl0JyxcXHJcXG5cXHRcXHRcXHRcXHR1cGRhdGVVc2VyOiAnYXV0aC91cGRhdGVVc2VyJ1xcclxcblxcdFxcdFxcdH0pLFxcclxcblxcdFxcdFxcdHVzZXJVcGRhdGUoKSB7XFxyXFxuXFx0XFx0XFx0XFx0Y29uc3QgbmV3VXNlciA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudXNlcik7XFxyXFxuXFx0XFx0XFx0XFx0bmV3VXNlci5uYW1lID0gdGhpcy5pdGVtLmZpcnN0X25hbWU7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy51cGRhdGVVc2VyKG5ld1VzZXIpO1xcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0YnV0dG9uQWN0aW9uKCkge1xcclxcblxcdFxcdFxcdFxcdGlmICghdGhpcy5kaXNhYmxlZCkge1xcclxcblxcdFxcdFxcdFxcdFxcdHRoaXMuY2hhbmdlSXRlbSh0aGlzLml0ZW0pO1xcclxcblxcdFxcdFxcdFxcdFxcdGlmKHRoaXMuaXRlbS51c2VyX2lkID09IHRoaXMudXNlci5pZCkge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHRoaXMudXNlclVwZGF0ZSgpXFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRlZmF1bHRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pdGVtKTtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQ7XFx0XFx0XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRiYWNrKCkge1xcdFxcclxcblxcdFxcdFxcdFxcdGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm4gdGhpcy4kcm91dGVyLmdvKC0xKTtcXHJcXG5cXHRcXHRcXHRcXHRmb3IobGV0IGtleSBpbiB0aGlzLml0ZW0pIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLml0ZW1ba2V5XSA9IHRoaXMuZGVmYXVsdEl0ZW1ba2V5XVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQ7XFx0XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHRhc3luYyB1cGxvYWRQaG90byhlKSB7XFxyXFxuXFx0XFx0XFx0XFx0Y29uc3QgaW1hZ2VmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YXRhci1maWxlJykuZmlsZXNbMF07XFxyXFxuXFx0XFx0XFx0XFx0aWYgKCFpbWFnZWZpbGUpIHJldHVybjtcXHJcXG5cXHRcXHQgICAgdHJ5IHtcXHJcXG5cXHRcXHQgICAgXFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7ICAgIFxcdFxcdFxcdFxcdCAgICBcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRmb3JtRGF0YS5hcHBlbmQoXFxcImltYWdlXFxcIiwgaW1hZ2VmaWxlKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkICsgJy9hdmF0YXInLCBmb3JtRGF0YSwge1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgaGVhZGVyczoge1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgICB9XFxyXFxuXFx0XFx0XFx0XFx0XFx0IH0pO1xcclxcblxcdFxcdFxcdFxcdFxcdHRoaXMuaXRlbS5hdmF0YXIgPSBkYXRhO1xcclxcblxcdFxcdFxcdFxcdFxcdHRoaXMuJHN0b3JlLmNvbW1pdCgnZW1wbG95ZWVzL2VkaXQnLCB0aGlzLml0ZW0pXFxyXFxuICAgIFxcdFxcdH0gY2F0Y2ggKGUpIHtcXHJcXG4gICAgICBcXHRcXHRjb25zb2xlLmVycm9yKCfQndC1INC30LDQs9GA0YPQt9C40LvRgdGPINCw0LLQsNGC0LDRgCcsIGUpXFxyXFxuICAgIFxcdFxcdH1cXHRcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcblxcdCoge1xcclxcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0aDIge1xcclxcblxcdFxcdGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRwLFxcclxcblxcdC5lbXBsb3llZSxcXHJcXG5cXHQuYXZhdGFyX19vdmVybGF5IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogLW1vei1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1vLWZsZXg7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0cCB7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdG1hcmdpbjogMDtcXHJcXG5cXHRcXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdFxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRwOmhvdmVyIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXHJcXG5cXHR9XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImVtcGxveWVlXCI+XHJcbiAgXHQ8aDI+e3sgJHQoJ2VtcGxveWVlJykgfX08L2gyPlxyXG4gIFx0XHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2F2YXRhclwiPlxyXG4gIFx0XHRcdDxkaXYgY2xhc3M9XCJlbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lclwiPlxyXG4gIFx0XHRcdFx0PGRpdiBjbGFzcz1cImF2YXRhcl9fb3ZlcmxheVwiPlxyXG4gIFx0XHRcdFx0XHQ8dXBsb2FkLWJ1dHRvbiA6dGl0bGU9XCIkdCgnY2hhbmdlX2ltYWdlJylcIiA6c2VsZWN0ZWRDYWxsYmFjaz1cInVwbG9hZFBob3RvXCI+PC91cGxvYWQtYnV0dG9uPlxyXG4gIFx0XHRcdFx0PC9kaXY+XHJcbiAgXHRcdFx0XHQ8aW1nIDpzcmM9XCJhdmF0YXJcIiA6YWx0PVwiaXRlbS5maXJzdF9uYW1lXCI+XHJcbiAgXHRcdFx0PC9kaXY+XHRcclxuXHRcdFx0PC9kaXY+XHJcblx0ICBcdDxkaXYgY2xhc3M9XCJlbXBsb3llZV9fZGVzY3JcIj5cclxuXHQgIFx0XHQ8di1mb3JtIHYtbW9kZWw9XCJ2YWxpZFwiIHJlZj1cImZvcm1cIiBsYXp5LXZhbGlkYXRpb24+XHJcblx0ICBcdFx0XHQ8di10ZXh0LWZpZWxkXHJcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnbmFtZScpXCJcclxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLmZpcnN0X25hbWVcIlxyXG5cdFx0XHRcdFx0ICAgICAgOmNvdW50ZXI9XCI3MFwiXHJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxyXG5cdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0XHQgICAgPHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnbGFzdF9uYW1lJylcIlxyXG5cdFx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5sYXN0X25hbWVcIlxyXG5cdFx0XHRcdFx0XHQgICAgICA6cnVsZXM9XCJuYW1lUnVsZXNcIlxyXG5cdFx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0PHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgncGF0cm9ueW1pYycpXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucGF0cm9ueW1pY1wiXHJcblx0XHRcdFx0XHRcdCAgICAgIDpydWxlcz1cIm5hbWVSdWxlc1wiXHJcblx0XHRcdFx0XHRcdCAgICAgIDpjb3VudGVyPVwiNzBcIlxyXG5cdFx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcblx0XHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHQ8di1zZWxlY3RcclxuXHRcdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3Bvc2l0aW9uJylcIlxyXG5cdFx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5wb3NpdGlvbl9pZFwiXHJcblx0XHRcdFx0XHRcdCAgICAgIHByZXBlbmQtaWNvbj1cImNhcmRfdHJhdmVsXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgOml0ZW1zPVwicG9zaXRpb25zXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgaXRlbS10ZXh0PVwidGl0bGVcIlxyXG5cdCAgICAgICAgICBcdFx0XHRpdGVtLXZhbHVlPVwiaWRcIlxyXG5cdFx0XHRcdFx0XHQgICAgICA6cnVsZXM9XCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMJ11cIlxyXG5cdFx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcblx0XHRcdFx0XHQ+PC92LXNlbGVjdD5cclxuXHRcdCAgXHRcdDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3Bob25lX251bWJlcicpXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucGhvbmVfbnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwicGhvbmVfaXBob25lXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxyXG5cdFx0XHRcdFx0PHYtdGV4dC1maWVsZFxyXG5cdFx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnc2FsYXJ5JylcIlxyXG5cdFx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5zYWxhcnlcIlxyXG5cdFx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJhdHRhY2hfbW9uZXlcIlxyXG5cdFx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcblx0XHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XHJcblx0XHRcdFx0XHQ8di10ZXh0LWZpZWxkXHJcblx0XHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdhZGRyZXNzJylcIlxyXG5cdFx0XHRcdFx0XHQgICAgICB2LW1vZGVsPVwiaXRlbS5hZGRyZXNzXCJcclxuXHRcdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwiaG9tZVwiXHJcblx0XHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuXHRcdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cclxuXHRcdFx0XHRcdDx2LWxheW91dCByb3cgd3JhcD5cclxuXHRcdFx0XHRcdFx0PHYtZmxleCB4czEyPlxyXG5cdFx0XHRcdFx0XHRcdDx2LW1lbnVcclxuXHRcdFx0XHRcdFx0XHQgIHJlZj1cIm1lbnVcIlxyXG5cdFx0XHRcdFx0XHRcdCAgbGF6eVxyXG5cdFx0XHRcdFx0XHRcdCAgOmNsb3NlLW9uLWNvbnRlbnQtY2xpY2s9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdFx0ICB2LW1vZGVsPVwibWVudVwiXHJcblx0XHRcdFx0XHRcdFx0ICB0cmFuc2l0aW9uPVwic2NhbGUtdHJhbnNpdGlvblwiXHJcblx0XHRcdFx0XHRcdFx0ICBvZmZzZXQteVxyXG5cdFx0XHRcdFx0XHRcdCAgZnVsbC13aWR0aFxyXG5cdFx0XHRcdFx0XHRcdCAgOm51ZGdlLXJpZ2h0PVwiNDBcIlxyXG5cdFx0XHRcdFx0XHRcdCAgbWluLXdpZHRoPVwiMjkwcHhcIlxyXG5cdFx0XHRcdFx0XHRcdCAgOnJldHVybi12YWx1ZS5zeW5jPVwiZGF0ZVwiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDwvdi1tZW51PlxyXG5cdFx0XHRcdFx0XHQ8L3YtZmxleD5cclxuXHRcdFx0XHRcdDwvdi1sYXlvdXQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxyXG5cdFx0XHRcdFx0XHQ8di1idG4gbGFyZ2UgQGNsaWNrPVwiYnV0dG9uQWN0aW9uKClcIiA6ZGlzYWJsZWQ9XCIhdmFsaWRcIj5cclxuXHRcdFx0XHRcdFx0e3sgYnV0dG9uVGV4dCB9fVxyXG5cdFx0XHRcdFx0XHQ8L3YtYnRuPlxyXG5cdFx0XHRcdFx0XHQ8di1idG4gbGFyZ2UgQGNsaWNrPVwiYmFja1wiPlxyXG5cdFx0XHRcdFx0XHTQndCw0LfQsNC0XHJcblx0XHRcdFx0XHRcdDwvdi1idG4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHQgIFx0XHQ8L3YtZm9ybT5cdCAgXHRcdFxyXG5cdCAgPC9kaXY+XHJcbiAgPC9kaXY+XHRcdFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnO1xyXG5cdGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bWlkZGxld2FyZTogWydhdXRoJywgJ29yZ2FuaXNhdGlvbiddLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0aWQ6IHtcclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRpc2FibGVkOiB0cnVlLFxyXG5cdFx0XHRcdGRhdGU6IG51bGwsXHJcblx0ICAgICAgbWVudTogZmFsc2UsXHJcblx0ICAgICAgbW9kYWw6IGZhbHNlLFxyXG5cdCAgICAgIG5hbWU6ICcnLFxyXG5cdCAgICAgIHZhbGlkOiBmYWxzZSxcclxuXHQgICAgICBkZWZhdWx0SXRlbToge30sXHJcblx0ICAgICAgbmFtZVJ1bGVzOiBbXHJcblx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtScsXHJcblx0ICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoID4gMSkgfHwgJ9CY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDIg0LHRg9C60LLRiycsXHJcblx0ICAgICAgXSxcclxuXHQgICAgICBlbWFpbFJ1bGVzOiBbXHJcblx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUgRS1tYWlsJyxcclxuXHQgICAgICAgIHYgPT4gL15cXHcrKFsuLV0/XFx3KykqQFxcdysoWy4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLnRlc3QodikgfHwgJ9Cd0LUg0LLQsNC70LjQtNC90YvQuSBFLW1haWwnXHJcblx0ICAgICAgXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Li4ubWFwR2V0dGVycyh7XHJcblx0XHRcdFx0aXRlbTogJ2VtcGxveWVlcy9lbXBsb3llZScsXHJcblx0XHRcdFx0cG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucycsXHJcblx0XHRcdFx0dXNlcjogJ2F1dGgvdXNlcidcclxuXHRcdFx0fSksXHJcblx0XHRcdGJ1dHRvblRleHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuICF0aGlzLmRpc2FibGVkID8gXCLQntCx0L3QvtCy0LjRgtGMXCIgOiBcItCY0LfQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1XCI7XHJcblx0XHRcdH0sXHJcblx0XHRcdGF2YXRhcigpIHtcclxuXHRcdFx0XHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy5pdGVtLmF2YXRhciA6IFwiL3N0b3JhZ2UvYXZhdGFycy9uby1hdmF0YXIuanBnXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vINCX0LDQs9GA0YPQt9C60LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0LXRgNC10LQg0LzQvtC90YLQuNGA0L7QstCw0L3QuNC10Lwg0LrQvtC80L/QvtC90LXQvdGC0LBcclxuXHRcdGJlZm9yZVJvdXRlRW50ZXIgKHRvLCBmcm9tLCBuZXh0KSB7XHJcbiAgICBcdG5leHQodm0gPT4gdm0uJHN0b3JlLmRpc3BhdGNoKCdlbXBsb3llZXMvbG9hZE9uZScsIHZtLmlkKSk7XHJcbiAgXHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcclxuXHRcdFx0XHRjaGFuZ2VJdGVtOiAnZW1wbG95ZWVzL2VkaXQnLFxyXG5cdFx0XHRcdHVwZGF0ZVVzZXI6ICdhdXRoL3VwZGF0ZVVzZXInXHJcblx0XHRcdH0pLFxyXG5cdFx0XHR1c2VyVXBkYXRlKCkge1xyXG5cdFx0XHRcdGNvbnN0IG5ld1VzZXIgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnVzZXIpO1xyXG5cdFx0XHRcdG5ld1VzZXIubmFtZSA9IHRoaXMuaXRlbS5maXJzdF9uYW1lO1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlVXNlcihuZXdVc2VyKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YnV0dG9uQWN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VJdGVtKHRoaXMuaXRlbSk7XHJcblx0XHRcdFx0XHRpZih0aGlzLml0ZW0udXNlcl9pZCA9PSB0aGlzLnVzZXIuaWQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy51c2VyVXBkYXRlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5kZWZhdWx0SXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbSk7XHJcblx0XHRcdFx0dGhpcy5kaXNhYmxlZCA9ICF0aGlzLmRpc2FibGVkO1x0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0YmFjaygpIHtcdFxyXG5cdFx0XHRcdGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm4gdGhpcy4kcm91dGVyLmdvKC0xKTtcclxuXHRcdFx0XHRmb3IobGV0IGtleSBpbiB0aGlzLml0ZW0pIHtcclxuXHRcdFx0XHRcdHRoaXMuaXRlbVtrZXldID0gdGhpcy5kZWZhdWx0SXRlbVtrZXldXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuZGlzYWJsZWQgPSAhdGhpcy5kaXNhYmxlZDtcdFx0XHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgdXBsb2FkUGhvdG8oZSkge1xyXG5cdFx0XHRcdGNvbnN0IGltYWdlZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmF0YXItZmlsZScpLmZpbGVzWzBdO1xyXG5cdFx0XHRcdGlmICghaW1hZ2VmaWxlKSByZXR1cm47XHJcblx0XHQgICAgdHJ5IHtcclxuXHRcdCAgICBcdGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpOyAgICBcdFx0XHRcdCAgICBcdFxyXG5cdFx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VmaWxlKTtcclxuXHRcdFx0XHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQgKyAnL2F2YXRhcicsIGZvcm1EYXRhLCB7XHJcblx0XHRcdFx0XHQgICAgIGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdCAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcblx0XHRcdFx0XHQgICAgIH1cclxuXHRcdFx0XHRcdCB9KTtcclxuXHRcdFx0XHRcdHRoaXMuaXRlbS5hdmF0YXIgPSBkYXRhO1xyXG5cdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdlbXBsb3llZXMvZWRpdCcsIHRoaXMuaXRlbSlcclxuICAgIFx0XHR9IGNhdGNoIChlKSB7XHJcbiAgICAgIFx0XHRjb25zb2xlLmVycm9yKCfQndC1INC30LDQs9GA0YPQt9C40LvRgdGPINCw0LLQsNGC0LDRgCcsIGUpXHJcbiAgICBcdFx0fVx0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQqIHtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xyXG5cdFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdH1cclxuXHJcblx0aDIge1xyXG5cdFx0ZmxleC1iYXNpczogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdHAsXHJcblx0LmVtcGxveWVlLFxyXG5cdC5hdmF0YXJfX292ZXJsYXkge1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1vei1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1zLWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtby1mbGV4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdHAge1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xyXG5cdH1cclxuXHJcblx0cDpob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcclxuXHR9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZVwiIH0sIFtcbiAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImVtcGxveWVlXCIpKSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhdmF0YXJfX292ZXJsYXlcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidXBsb2FkLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IF92bS4kdChcImNoYW5nZV9pbWFnZVwiKSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhbGxiYWNrOiBfdm0udXBsb2FkUGhvdG9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5hdmF0YXIsIGFsdDogX3ZtLml0ZW0uZmlyc3RfbmFtZSB9IH0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fZGVzY3JcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogXCJmb3JtXCIsXG4gICAgICAgICAgICBhdHRyczogeyBcImxhenktdmFsaWRhdGlvblwiOiBcIlwiIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbGlkLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsaWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJmaXJzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5maXJzdF9uYW1lXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJsYXN0X25hbWVcIiksXG4gICAgICAgICAgICAgICAgcnVsZXM6IF92bS5uYW1lUnVsZXMsXG4gICAgICAgICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5sYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwibGFzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5sYXN0X25hbWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInBhdHJvbnltaWNcIiksXG4gICAgICAgICAgICAgICAgcnVsZXM6IF92bS5uYW1lUnVsZXMsXG4gICAgICAgICAgICAgICAgY291bnRlcjogNzAsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5wYXRyb255bWljLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInBhdHJvbnltaWNcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnBhdHJvbnltaWNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicG9zaXRpb25cIiksXG4gICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJjYXJkX3RyYXZlbFwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ucG9zaXRpb25zLFxuICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIXYgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC00L7Qu9C20L3QvtGB0YLRjFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLnBvc2l0aW9uX2lkLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInBvc2l0aW9uX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5wb3NpdGlvbl9pZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicGhvbmVfbnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwicGhvbmVfaXBob25lXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwicGhvbmVfbnVtYmVyXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5waG9uZV9udW1iZXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcInNhbGFyeVwiKSxcbiAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImF0dGFjaF9tb25leVwiLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uc2FsYXJ5LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInNhbGFyeVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uc2FsYXJ5XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJhZGRyZXNzXCIpLFxuICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiaG9tZVwiLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0uYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbSwgXCJhZGRyZXNzXCIsICQkdilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5hZGRyZXNzXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LW1lbnVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJtZW51XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhenk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsb3NlLW9uLWNvbnRlbnQtY2xpY2tcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcInNjYWxlLXRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2Zmc2V0LXlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZnVsbC13aWR0aFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudWRnZS1yaWdodFwiOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWluLXdpZHRoXCI6IFwiMjkwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmV0dXJuLXZhbHVlXCI6IF92bS5kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6cmV0dXJuVmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZW51LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVudSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFyZ2U6IFwiXCIsIGRpc2FibGVkOiAhX3ZtLnZhbGlkIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmJ1dHRvbkFjdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmJ1dHRvblRleHQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInYtYnRuXCIsIHsgYXR0cnM6IHsgbGFyZ2U6IFwiXCIgfSwgb246IHsgY2xpY2s6IF92bS5iYWNrIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx00J3QsNC30LDQtFxcblxcdFxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVlYjg3Y2QwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiXSwic291cmNlUm9vdCI6IiJ9