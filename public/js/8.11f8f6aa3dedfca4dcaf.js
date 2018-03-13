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
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n\ttext-align: center;\n}\np[data-v-5eb87cd0],\n.employee[data-v-5eb87cd0],\n.avatar__overlay[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\np[data-v-5eb87cd0] {\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AA4MA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA,mBAAA;CACA;AAEA;;;CAIA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA","file":"Show.vue","sourcesContent":["<template>\n  <div class=\"employee\">\n  \t<h2>{{ $t('employee') }}</h2>\n  \t\t<div class=\"employee__avatar\">\n  \t\t\t<div class=\"employee__avatar-container\">\n  \t\t\t\t<div class=\"avatar__overlay\">\n  \t\t\t\t\t<upload-button :title=\"$t('change_image')\" :selectedCallback=\"uploadPhoto\"></upload-button>\n  \t\t\t\t</div>\n  \t\t\t\t<img :src=\"avatar\" :alt=\"item.first_name\">\n  \t\t\t</div>\t\n\t\t\t</div>\n\t  \t<div class=\"employee__descr\">\n\t  \t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('name')\"\n\t\t\t\t\t      v-model=\"item.first_name\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t\t    <v-text-field\n\t\t\t\t\t      :label=\"$t('last_name')\"\n\t\t\t\t\t      v-model=\"item.last_name\"\n\t\t\t\t\t      :rules=\"nameRules\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('patronymic')\"\n\t\t\t\t\t      v-model=\"item.patronymic\"\n\t\t\t\t\t      :rules=\"nameRules\"\n\t\t\t\t\t      :counter=\"70\"\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n<!-- \t\t\t\t<select name=\"positions\">\n\t\t\t\t\t<option v-for=\"position in positions\" :value=\"position.id\">{{position.title}}</option>\n\t\t\t\t</select> -->\n\t\t\t\t<v-select\n\t\t\t\t\t      :label=\"$t('position')\"\n\t\t\t\t\t      v-model=\"newPosition\"\n\t\t\t\t\t      prepend-icon=\"card_travel\"\n\t\t\t\t\t      :items=\"positionsTitles\"\n\t\t\t\t\t      :rules=\"[v => !!v || 'Выберите должность']\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-select>\n\t  \t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('phone_number')\"\n\t\t\t\t\t      v-model=\"item.phone_number\"\n\t\t\t\t\t      prepend-icon=\"phone_iphone\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('salary')\"\n\t\t\t\t\t      v-model=\"item.salary\"\n\t\t\t\t\t      prepend-icon=\"attach_money\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-text-field\n\t\t\t\t\t      :label=\"$t('address')\"\n\t\t\t\t\t      v-model=\"item.address\"\n\t\t\t\t\t      prepend-icon=\"home\"\n\t\t\t\t\t      required\n\t\t\t\t\t      :disabled=\"disabled\"\n\t\t\t\t></v-text-field>\n\t\t\t\t<v-layout row wrap>\n\t\t\t\t\t<v-flex xs12>\n\t\t\t\t\t\t<v-menu\n\t\t\t\t\t\t  ref=\"menu\"\n\t\t\t\t\t\t  lazy\n\t\t\t\t\t\t  :close-on-content-click=\"false\"\n\t\t\t\t\t\t  v-model=\"menu\"\n\t\t\t\t\t\t  transition=\"scale-transition\"\n\t\t\t\t\t\t  offset-y\n\t\t\t\t\t\t  full-width\n\t\t\t\t\t\t  :nudge-right=\"40\"\n\t\t\t\t\t\t  min-width=\"290px\"\n\t\t\t\t\t\t  :return-value.sync=\"date\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t  <v-text-field\n\t\t\t\t\t\t    slot=\"activator\"\n\t\t\t\t\t\t    :label=\"$t('birthday')\"\n\t\t\t\t\t\t    v-model=\"item.birthday\"\n\t\t\t\t\t\t    prepend-icon=\"event\"\n\t\t\t\t\t\t    readonly\n\t\t\t\t\t\t    :disabled=\"disabled\"\n\t\t\t\t\t\t  ></v-text-field>\n\t\t\t\t\t\t  <v-date-picker v-if=\"!disabled\" v-model=\"item.birthday\" no-title scrollable>\n\t\t\t\t\t\t    <v-spacer></v-spacer>\n\t\t\t\t\t\t    <v-btn flat color=\"primary\" @click=\"menu = false\">{{ $t('cancel') }}</v-btn>\n\t\t\t\t\t\t    <v-btn flat color=\"primary\" @click=\"$refs.menu.save(date)\">{{ $t('ok') }}</v-btn>\n\t\t\t\t\t\t  </v-date-picker>\n\t\t\t\t\t\t</v-menu>\n\t\t\t\t\t</v-flex>\n\t\t\t\t</v-layout>\n\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t<v-btn large @click=\"buttonAction()\">\n\t\t\t\t\t{{ buttonText }}\n\t\t\t\t\t</v-btn>\n\t\t\t\t\t<v-btn large @click=\"back\">\n\t\t\t\t\tНазад\n\t\t\t\t\t</v-btn>\n\t\t\t\t</div>\n\t  \t\t\n\t  </div>\n  </div>\t\t\n</template>\n\n<script>\n\timport {mapActions, mapGetters} from 'vuex';\n\timport axios from 'axios';\n\texport default {\n\t\tmiddleware: 'auth',\n\t\tprops: {\n\t\t\tid: {\n\t\t\t\ttype: [Number, String],\n\t\t\t\trequired: true\n\t\t\t}\n\t\t},\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\tdisabled: true,\n\t\t\t\tdate: null,\n\t      menu: false,\n\t      modal: false,\n\t      name: '',\n\t      valid: false,\n\t      defaultItem: {},\n\t      newPosition: '',\n\t      nameRules: [\n\t        v => !!v || 'Введите значение',\n\t        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',\n\t      ],\n\t      emailRules: [\n\t        v => !!v || 'Введите E-mail',\n\t        v => /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/.test(v) || 'Не валидный E-mail'\n\t      ],\n\t\t\t}\n\t\t},\n\t\tcomputed: {\n\t\t\t...mapGetters({\n\t\t\t\titem: 'employees/employee',\n\t\t\t\tpositions: 'positions/positions'\n\t\t\t}),\n\t\t\tpositionsTitles() {\n\t\t\t\tlet arr = [];\n\t\t\t\tthis.positions.forEach( element => {\n\t\t\t\t\tarr.push(element.title)\n\t\t\t\t});\n\t\t\t\treturn arr;\n\t\t\t},\n\t\t\tbuttonText() {\n\t\t\t\treturn !this.disabled ? \"Обновить\" : \"Изменить данные\";\n\t\t\t},\n\t\t\tavatar() {\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"/storage/avatars/no-avatar.jpg\"\n\t\t\t}\n\t\t},\n\t\t// Загрузка пользователя перед монтированием компонента\n\t\tbeforeRouteEnter (to, from, next) {\n    \tnext(vm => vm.$store.dispatch('employees/loadOne', vm.id));\n  \t},\n\t\tmethods: {\n\t\t\t...mapActions({\n\t\t\t\tchangeItem: 'employees/edit',\n\t\t\t}),\n\t\t\tbuttonAction() {\n\t\t\t\tif (!this.disabled) {\n\t\t\t\t\tthis.item.position_id = this.positions.findIndex(el => el.title == this.newPosition);\n\t\t\t\t\tconsole.log(this.item.position_id)\n\t\t\t\t\t//this.changeItem(this.item);\n\t\t\t\t}\n\t\t\t\tthis.defaultItem = Object.assign({}, this.item);\n\t\t\t\tthis.disabled = !this.disabled;\t\t\n\t\t\t},\n\t\t\tback() {\t\n\t\t\t\tif (this.disabled) return this.$router.go(-1);\n\t\t\t\tfor(let key in this.item) {\n\t\t\t\t\tthis.item[key] = this.defaultItem[key]\n\t\t\t\t}\n\t\t\t\tthis.disabled = !this.disabled;\t\t\t\t\t\t\n\t\t\t},\n\t\t\tasync uploadPhoto(e) {\n\t\t\t\tconst imagefile = document.getElementById('avatar-file').files[0];\n\t\t\t\tif (!imagefile) return;\n\t\t    try {\n\t\t    \tlet formData = new FormData();    \t\t\t\t    \t\n\t\t\t\t\tformData.append(\"image\", imagefile);\n\t\t\t\t\tconst { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {\n\t\t\t\t\t     headers: {\n\t\t\t\t\t       'Content-Type': 'multipart/form-data'\n\t\t\t\t\t     }\n\t\t\t\t\t });\n\t\t\t\t\tthis.item.avatar = data;\n    \t\t} catch (e) {\n      \t\tconsole.error('Не загрузился аватар', e)\n    \t\t}\t\n\t\t\t}\n\t\t}\n\t}\n</script>\n\n<style scoped>\n\t* {\n\t\tbox-sizing: border-box;;\n\t\tfont-family: 'Roboto', sans-serif;\n\t}\n\n\th2 {\n\t\tflex-basis: 100%;\n\t\ttext-align: center;\n\t}\n\n\tp,\n\t.employee,\n\t.avatar__overlay {\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: -o-flex;\n\t\tdisplay: flex;\n\t}\n\n\tp {\n\t\tjustify-content: space-between;\n\t\tmargin: 0;\n\t\tpadding: 10px;\n\t\ttransition: background-color .3s;\n\t}\n\n\tp:hover {\n\t\tbackground-color: rgba(255, 255, 255, .1);\n\t}\n</style>\n"],"sourceRoot":""}]);

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
		positionsTitles: function positionsTitles() {
			var arr = [];
			this.positions.forEach(function (element) {
				arr.push(element.title);
			});
			return arr;
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
            items: _vm.positionsTitles,
            rules: [
              function(v) {
                return !!v || "Выберите должность"
              }
            ],
            required: "",
            disabled: _vm.disabled
          },
          model: {
            value: _vm.newPosition,
            callback: function($$v) {
              _vm.newPosition = $$v
            },
            expression: "newPosition"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixpRkFBaUY7QUFDN08scUtBQXFLLGlGQUFpRjtBQUN0UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwrQ0FBZ0QsbUNBQW1DLG9DQUFvQyxzQ0FBc0MsR0FBRyx1QkFBdUIs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ZGVkZmNhNGRjYWYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNWViODdjZDBcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxlbXBsb3llZXNcXFxcU2hvdy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWViODdjZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZWI4N2NkMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNDg2YzA2NDBcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTRcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbipbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdCAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDs7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5oMltkYXRhLXYtNWViODdjZDBdIHtcXG5cXHQtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG5cXHQgICAgZmxleC1iYXNpczogMTAwJTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXSxcXG4uZW1wbG95ZWVbZGF0YS12LTVlYjg3Y2QwXSxcXG4uYXZhdGFyX19vdmVybGF5W2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG5cXHQgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcbn1cXG5wW2RhdGEtdi01ZWI4N2NkMF06aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBNE1BO0NBQ0EsK0JBQUE7U0FBQSx1QkFBQTtDQUNBLGtDQUFBO0NBQ0E7QUFFQTtDQUNBLDhCQUFBO0tBQUEsaUJBQUE7Q0FDQSxtQkFBQTtDQUNBO0FBRUE7OztDQUlBLG1CQUFBO0NBQ0Esa0JBQUE7Q0FDQSxpQkFBQTtDQUNBLHFCQUFBO0NBQUEscUJBQUE7Q0FBQSxjQUFBO0NBQ0E7QUFFQTtDQUNBLDBCQUFBO0tBQUEsdUJBQUE7U0FBQSwrQkFBQTtDQUNBLFVBQUE7Q0FDQSxjQUFBO0NBQ0EseUNBQUE7Q0FBQSxpQ0FBQTtDQUNBO0FBRUE7Q0FDQSwwQ0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJTaG93LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZVxcXCI+XFxuICBcXHQ8aDI+e3sgJHQoJ2VtcGxveWVlJykgfX08L2gyPlxcbiAgXFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2F2YXRhclxcXCI+XFxuICBcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lclxcXCI+XFxuICBcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJhdmF0YXJfX292ZXJsYXlcXFwiPlxcbiAgXFx0XFx0XFx0XFx0XFx0PHVwbG9hZC1idXR0b24gOnRpdGxlPVxcXCIkdCgnY2hhbmdlX2ltYWdlJylcXFwiIDpzZWxlY3RlZENhbGxiYWNrPVxcXCJ1cGxvYWRQaG90b1xcXCI+PC91cGxvYWQtYnV0dG9uPlxcbiAgXFx0XFx0XFx0XFx0PC9kaXY+XFxuICBcXHRcXHRcXHRcXHQ8aW1nIDpzcmM9XFxcImF2YXRhclxcXCIgOmFsdD1cXFwiaXRlbS5maXJzdF9uYW1lXFxcIj5cXG4gIFxcdFxcdFxcdDwvZGl2PlxcdFxcblxcdFxcdFxcdDwvZGl2PlxcblxcdCAgXFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2Rlc2NyXFxcIj5cXG5cXHQgIFxcdFxcdDx2LXRleHQtZmllbGRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6bGFiZWw9XFxcIiR0KCduYW1lJylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5maXJzdF9uYW1lXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpjb3VudGVyPVxcXCI3MFxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuXFx0XFx0XFx0XFx0Pjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdFxcdCAgICA8di10ZXh0LWZpZWxkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgnbGFzdF9uYW1lJylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5sYXN0X25hbWVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJuYW1lUnVsZXNcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmNvdW50ZXI9XFxcIjcwXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHJlcXVpcmVkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXG5cXHRcXHRcXHRcXHQ+PC92LXRleHQtZmllbGQ+XFxuXFx0XFx0XFx0XFx0PHYtdGV4dC1maWVsZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3BhdHJvbnltaWMnKVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICB2LW1vZGVsPVxcXCJpdGVtLnBhdHJvbnltaWNcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOnJ1bGVzPVxcXCJuYW1lUnVsZXNcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmNvdW50ZXI9XFxcIjcwXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuXFx0XFx0XFx0XFx0Pjwvdi10ZXh0LWZpZWxkPlxcbjwhLS0gXFx0XFx0XFx0XFx0PHNlbGVjdCBuYW1lPVxcXCJwb3NpdGlvbnNcXFwiPlxcblxcdFxcdFxcdFxcdFxcdDxvcHRpb24gdi1mb3I9XFxcInBvc2l0aW9uIGluIHBvc2l0aW9uc1xcXCIgOnZhbHVlPVxcXCJwb3NpdGlvbi5pZFxcXCI+e3twb3NpdGlvbi50aXRsZX19PC9vcHRpb24+XFxuXFx0XFx0XFx0XFx0PC9zZWxlY3Q+IC0tPlxcblxcdFxcdFxcdFxcdDx2LXNlbGVjdFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpsYWJlbD1cXFwiJHQoJ3Bvc2l0aW9uJylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwibmV3UG9zaXRpb25cXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJjYXJkX3RyYXZlbFxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6aXRlbXM9XFxcInBvc2l0aW9uc1RpdGxlc1xcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6cnVsZXM9XFxcIlt2ID0+ICEhdiB8fCAn0JLRi9Cx0LXRgNC40YLQtSDQtNC+0LvQttC90L7RgdGC0YwnXVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICByZXF1aXJlZFxcblxcdFxcdFxcdFxcdFxcdCAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuXFx0XFx0XFx0XFx0Pjwvdi1zZWxlY3Q+XFxuXFx0ICBcXHRcXHQ8di10ZXh0LWZpZWxkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgncGhvbmVfbnVtYmVyJylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5waG9uZV9udW1iZXJcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJwaG9uZV9pcGhvbmVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcblxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXG5cXHRcXHRcXHRcXHQ8di10ZXh0LWZpZWxkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgnc2FsYXJ5JylcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgdi1tb2RlbD1cXFwiaXRlbS5zYWxhcnlcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcHJlcGVuZC1pY29uPVxcXCJhdHRhY2hfbW9uZXlcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcblxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXG5cXHRcXHRcXHRcXHQ8di10ZXh0LWZpZWxkXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgOmxhYmVsPVxcXCIkdCgnYWRkcmVzcycpXFxcIlxcblxcdFxcdFxcdFxcdFxcdCAgICAgIHYtbW9kZWw9XFxcIml0ZW0uYWRkcmVzc1xcXCJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICBwcmVwZW5kLWljb249XFxcImhvbWVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgcmVxdWlyZWRcXG5cXHRcXHRcXHRcXHRcXHQgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcblxcdFxcdFxcdFxcdD48L3YtdGV4dC1maWVsZD5cXG5cXHRcXHRcXHRcXHQ8di1sYXlvdXQgcm93IHdyYXA+XFxuXFx0XFx0XFx0XFx0XFx0PHYtZmxleCB4czEyPlxcblxcdFxcdFxcdFxcdFxcdFxcdDx2LW1lbnVcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIHJlZj1cXFwibWVudVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIGxhenlcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVxcXCJmYWxzZVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIHYtbW9kZWw9XFxcIm1lbnVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICB0cmFuc2l0aW9uPVxcXCJzY2FsZS10cmFuc2l0aW9uXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgb2Zmc2V0LXlcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIGZ1bGwtd2lkdGhcXG5cXHRcXHRcXHRcXHRcXHRcXHQgIDpudWRnZS1yaWdodD1cXFwiNDBcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICBtaW4td2lkdGg9XFxcIjI5MHB4XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgOnJldHVybi12YWx1ZS5zeW5jPVxcXCJkYXRlXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHRcXHRcXHQgIDx2LXRleHQtZmllbGRcXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgc2xvdD1cXFwiYWN0aXZhdG9yXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICA6bGFiZWw9XFxcIiR0KCdiaXJ0aGRheScpXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICB2LW1vZGVsPVxcXCJpdGVtLmJpcnRoZGF5XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICBwcmVwZW5kLWljb249XFxcImV2ZW50XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICByZWFkb25seVxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgPjwvdi10ZXh0LWZpZWxkPlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgPHYtZGF0ZS1waWNrZXIgdi1pZj1cXFwiIWRpc2FibGVkXFxcIiB2LW1vZGVsPVxcXCJpdGVtLmJpcnRoZGF5XFxcIiBuby10aXRsZSBzY3JvbGxhYmxlPlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQgICAgPHYtYnRuIGZsYXQgY29sb3I9XFxcInByaW1hcnlcXFwiIEBjbGljaz1cXFwibWVudSA9IGZhbHNlXFxcIj57eyAkdCgnY2FuY2VsJykgfX08L3YtYnRuPlxcblxcdFxcdFxcdFxcdFxcdFxcdCAgICA8di1idG4gZmxhdCBjb2xvcj1cXFwicHJpbWFyeVxcXCIgQGNsaWNrPVxcXCIkcmVmcy5tZW51LnNhdmUoZGF0ZSlcXFwiPnt7ICR0KCdvaycpIH19PC92LWJ0bj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQgIDwvdi1kYXRlLXBpY2tlcj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L3YtbWVudT5cXG5cXHRcXHRcXHRcXHRcXHQ8L3YtZmxleD5cXG5cXHRcXHRcXHRcXHQ8L3YtbGF5b3V0PlxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImJ1dHRvbnNcXFwiPlxcblxcdFxcdFxcdFxcdFxcdDx2LWJ0biBsYXJnZSBAY2xpY2s9XFxcImJ1dHRvbkFjdGlvbigpXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHR7eyBidXR0b25UZXh0IH19XFxuXFx0XFx0XFx0XFx0XFx0PC92LWJ0bj5cXG5cXHRcXHRcXHRcXHRcXHQ8di1idG4gbGFyZ2UgQGNsaWNrPVxcXCJiYWNrXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHTQndCw0LfQsNC0XFxuXFx0XFx0XFx0XFx0XFx0PC92LWJ0bj5cXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHQgIFxcdFxcdFxcblxcdCAgPC9kaXY+XFxuICA8L2Rpdj5cXHRcXHRcXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcXG5cXHRpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xcblxcdGV4cG9ydCBkZWZhdWx0IHtcXG5cXHRcXHRtaWRkbGV3YXJlOiAnYXV0aCcsXFxuXFx0XFx0cHJvcHM6IHtcXG5cXHRcXHRcXHRpZDoge1xcblxcdFxcdFxcdFxcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXFxuXFx0XFx0XFx0XFx0cmVxdWlyZWQ6IHRydWVcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHRkYXRhKCkge1xcblxcdFxcdFxcdHJldHVybiB7XFxuXFx0XFx0XFx0XFx0ZGlzYWJsZWQ6IHRydWUsXFxuXFx0XFx0XFx0XFx0ZGF0ZTogbnVsbCxcXG5cXHQgICAgICBtZW51OiBmYWxzZSxcXG5cXHQgICAgICBtb2RhbDogZmFsc2UsXFxuXFx0ICAgICAgbmFtZTogJycsXFxuXFx0ICAgICAgdmFsaWQ6IGZhbHNlLFxcblxcdCAgICAgIGRlZmF1bHRJdGVtOiB7fSxcXG5cXHQgICAgICBuZXdQb3NpdGlvbjogJycsXFxuXFx0ICAgICAgbmFtZVJ1bGVzOiBbXFxuXFx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtScsXFxuXFx0ICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoID4gMSkgfHwgJ9CY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDIg0LHRg9C60LLRiycsXFxuXFx0ICAgICAgXSxcXG5cXHQgICAgICBlbWFpbFJ1bGVzOiBbXFxuXFx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUgRS1tYWlsJyxcXG5cXHQgICAgICAgIHYgPT4gL15cXFxcdysoWy4tXT9cXFxcdyspKkBcXFxcdysoWy4tXT9cXFxcdyspKihcXFxcLlxcXFx3ezIsM30pKyQvLnRlc3QodikgfHwgJ9Cd0LUg0LLQsNC70LjQtNC90YvQuSBFLW1haWwnXFxuXFx0ICAgICAgXSxcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHRjb21wdXRlZDoge1xcblxcdFxcdFxcdC4uLm1hcEdldHRlcnMoe1xcblxcdFxcdFxcdFxcdGl0ZW06ICdlbXBsb3llZXMvZW1wbG95ZWUnLFxcblxcdFxcdFxcdFxcdHBvc2l0aW9uczogJ3Bvc2l0aW9ucy9wb3NpdGlvbnMnXFxuXFx0XFx0XFx0fSksXFxuXFx0XFx0XFx0cG9zaXRpb25zVGl0bGVzKCkge1xcblxcdFxcdFxcdFxcdGxldCBhcnIgPSBbXTtcXG5cXHRcXHRcXHRcXHR0aGlzLnBvc2l0aW9ucy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcXG5cXHRcXHRcXHRcXHRcXHRhcnIucHVzaChlbGVtZW50LnRpdGxlKVxcblxcdFxcdFxcdFxcdH0pO1xcblxcdFxcdFxcdFxcdHJldHVybiBhcnI7XFxuXFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRidXR0b25UZXh0KCkge1xcblxcdFxcdFxcdFxcdHJldHVybiAhdGhpcy5kaXNhYmxlZCA/IFxcXCLQntCx0L3QvtCy0LjRgtGMXFxcIiA6IFxcXCLQmNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtVxcXCI7XFxuXFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRhdmF0YXIoKSB7XFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcXFwiL3N0b3JhZ2UvYXZhdGFycy9uby1hdmF0YXIuanBnXFxcIlxcblxcdFxcdFxcdH1cXG5cXHRcXHR9LFxcblxcdFxcdC8vINCX0LDQs9GA0YPQt9C60LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0LXRgNC10LQg0LzQvtC90YLQuNGA0L7QstCw0L3QuNC10Lwg0LrQvtC80L/QvtC90LXQvdGC0LBcXG5cXHRcXHRiZWZvcmVSb3V0ZUVudGVyICh0bywgZnJvbSwgbmV4dCkge1xcbiAgICBcXHRuZXh0KHZtID0+IHZtLiRzdG9yZS5kaXNwYXRjaCgnZW1wbG95ZWVzL2xvYWRPbmUnLCB2bS5pZCkpO1xcbiAgXFx0fSxcXG5cXHRcXHRtZXRob2RzOiB7XFxuXFx0XFx0XFx0Li4ubWFwQWN0aW9ucyh7XFxuXFx0XFx0XFx0XFx0Y2hhbmdlSXRlbTogJ2VtcGxveWVlcy9lZGl0JyxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRidXR0b25BY3Rpb24oKSB7XFxuXFx0XFx0XFx0XFx0aWYgKCF0aGlzLmRpc2FibGVkKSB7XFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5pdGVtLnBvc2l0aW9uX2lkID0gdGhpcy5wb3NpdGlvbnMuZmluZEluZGV4KGVsID0+IGVsLnRpdGxlID09IHRoaXMubmV3UG9zaXRpb24pO1xcblxcdFxcdFxcdFxcdFxcdGNvbnNvbGUubG9nKHRoaXMuaXRlbS5wb3NpdGlvbl9pZClcXG5cXHRcXHRcXHRcXHRcXHQvL3RoaXMuY2hhbmdlSXRlbSh0aGlzLml0ZW0pO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHR0aGlzLmRlZmF1bHRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pdGVtKTtcXG5cXHRcXHRcXHRcXHR0aGlzLmRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQ7XFx0XFx0XFxuXFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRiYWNrKCkge1xcdFxcblxcdFxcdFxcdFxcdGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm4gdGhpcy4kcm91dGVyLmdvKC0xKTtcXG5cXHRcXHRcXHRcXHRmb3IobGV0IGtleSBpbiB0aGlzLml0ZW0pIHtcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLml0ZW1ba2V5XSA9IHRoaXMuZGVmYXVsdEl0ZW1ba2V5XVxcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHR0aGlzLmRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQ7XFx0XFx0XFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRhc3luYyB1cGxvYWRQaG90byhlKSB7XFxuXFx0XFx0XFx0XFx0Y29uc3QgaW1hZ2VmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YXRhci1maWxlJykuZmlsZXNbMF07XFxuXFx0XFx0XFx0XFx0aWYgKCFpbWFnZWZpbGUpIHJldHVybjtcXG5cXHRcXHQgICAgdHJ5IHtcXG5cXHRcXHQgICAgXFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7ICAgIFxcdFxcdFxcdFxcdCAgICBcXHRcXG5cXHRcXHRcXHRcXHRcXHRmb3JtRGF0YS5hcHBlbmQoXFxcImltYWdlXFxcIiwgaW1hZ2VmaWxlKTtcXG5cXHRcXHRcXHRcXHRcXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkICsgJy9hdmF0YXInLCBmb3JtRGF0YSwge1xcblxcdFxcdFxcdFxcdFxcdCAgICAgaGVhZGVyczoge1xcblxcdFxcdFxcdFxcdFxcdCAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXFxuXFx0XFx0XFx0XFx0XFx0ICAgICB9XFxuXFx0XFx0XFx0XFx0XFx0IH0pO1xcblxcdFxcdFxcdFxcdFxcdHRoaXMuaXRlbS5hdmF0YXIgPSBkYXRhO1xcbiAgICBcXHRcXHR9IGNhdGNoIChlKSB7XFxuICAgICAgXFx0XFx0Y29uc29sZS5lcnJvcign0J3QtSDQt9Cw0LPRgNGD0LfQuNC70YHRjyDQsNCy0LDRgtCw0YAnLCBlKVxcbiAgICBcXHRcXHR9XFx0XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG5cXHQqIHtcXG5cXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94OztcXG5cXHRcXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFx0fVxcblxcblxcdGgyIHtcXG5cXHRcXHRmbGV4LWJhc2lzOiAxMDAlO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0cCxcXG5cXHQuZW1wbG95ZWUsXFxuXFx0LmF2YXRhcl9fb3ZlcmxheSB7XFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcblxcdFxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRcXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRcXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0fVxcblxcblxcdHAge1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0XFx0cGFkZGluZzogMTBweDtcXG5cXHRcXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG5cXHR9XFxuXFxuXFx0cDpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XFxuXFx0fVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZW1wbG95ZWVcIj5cbiAgXHQ8aDI+e3sgJHQoJ2VtcGxveWVlJykgfX08L2gyPlxuICBcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXJcIj5cbiAgXHRcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXCI+XG4gIFx0XHRcdFx0PGRpdiBjbGFzcz1cImF2YXRhcl9fb3ZlcmxheVwiPlxuICBcdFx0XHRcdFx0PHVwbG9hZC1idXR0b24gOnRpdGxlPVwiJHQoJ2NoYW5nZV9pbWFnZScpXCIgOnNlbGVjdGVkQ2FsbGJhY2s9XCJ1cGxvYWRQaG90b1wiPjwvdXBsb2FkLWJ1dHRvbj5cbiAgXHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0XHQ8aW1nIDpzcmM9XCJhdmF0YXJcIiA6YWx0PVwiaXRlbS5maXJzdF9uYW1lXCI+XG4gIFx0XHRcdDwvZGl2Plx0XG5cdFx0XHQ8L2Rpdj5cblx0ICBcdDxkaXYgY2xhc3M9XCJlbXBsb3llZV9fZGVzY3JcIj5cblx0ICBcdFx0PHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCduYW1lJylcIlxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLmZpcnN0X25hbWVcIlxuXHRcdFx0XHRcdCAgICAgIDpjb3VudGVyPVwiNzBcIlxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXG5cdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XG5cdFx0XHRcdFx0ICAgIDx2LXRleHQtZmllbGRcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnbGFzdF9uYW1lJylcIlxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLmxhc3RfbmFtZVwiXG5cdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwibmFtZVJ1bGVzXCJcblx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxuXHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxuXHRcdFx0XHQ8di10ZXh0LWZpZWxkXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ3BhdHJvbnltaWMnKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucGF0cm9ueW1pY1wiXG5cdFx0XHRcdFx0ICAgICAgOnJ1bGVzPVwibmFtZVJ1bGVzXCJcblx0XHRcdFx0XHQgICAgICA6Y291bnRlcj1cIjcwXCJcblx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cbjwhLS0gXHRcdFx0XHQ8c2VsZWN0IG5hbWU9XCJwb3NpdGlvbnNcIj5cblx0XHRcdFx0XHQ8b3B0aW9uIHYtZm9yPVwicG9zaXRpb24gaW4gcG9zaXRpb25zXCIgOnZhbHVlPVwicG9zaXRpb24uaWRcIj57e3Bvc2l0aW9uLnRpdGxlfX08L29wdGlvbj5cblx0XHRcdFx0PC9zZWxlY3Q+IC0tPlxuXHRcdFx0XHQ8di1zZWxlY3Rcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgncG9zaXRpb24nKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIm5ld1Bvc2l0aW9uXCJcblx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJjYXJkX3RyYXZlbFwiXG5cdFx0XHRcdFx0ICAgICAgOml0ZW1zPVwicG9zaXRpb25zVGl0bGVzXCJcblx0XHRcdFx0XHQgICAgICA6cnVsZXM9XCJbdiA9PiAhIXYgfHwgJ9CS0YvQsdC10YDQuNGC0LUg0LTQvtC70LbQvdC+0YHRgtGMJ11cIlxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXG5cdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHQ+PC92LXNlbGVjdD5cblx0ICBcdFx0PHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdCAgICAgIDpsYWJlbD1cIiR0KCdwaG9uZV9udW1iZXInKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0ucGhvbmVfbnVtYmVyXCJcblx0XHRcdFx0XHQgICAgICBwcmVwZW5kLWljb249XCJwaG9uZV9pcGhvbmVcIlxuXHRcdFx0XHRcdCAgICAgIHJlcXVpcmVkXG5cdFx0XHRcdFx0ICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHQ+PC92LXRleHQtZmllbGQ+XG5cdFx0XHRcdDx2LXRleHQtZmllbGRcblx0XHRcdFx0XHQgICAgICA6bGFiZWw9XCIkdCgnc2FsYXJ5JylcIlxuXHRcdFx0XHRcdCAgICAgIHYtbW9kZWw9XCJpdGVtLnNhbGFyeVwiXG5cdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwiYXR0YWNoX21vbmV5XCJcblx0XHRcdFx0XHQgICAgICByZXF1aXJlZFxuXHRcdFx0XHRcdCAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0Pjwvdi10ZXh0LWZpZWxkPlxuXHRcdFx0XHQ8di10ZXh0LWZpZWxkXG5cdFx0XHRcdFx0ICAgICAgOmxhYmVsPVwiJHQoJ2FkZHJlc3MnKVwiXG5cdFx0XHRcdFx0ICAgICAgdi1tb2RlbD1cIml0ZW0uYWRkcmVzc1wiXG5cdFx0XHRcdFx0ICAgICAgcHJlcGVuZC1pY29uPVwiaG9tZVwiXG5cdFx0XHRcdFx0ICAgICAgcmVxdWlyZWRcblx0XHRcdFx0XHQgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdD48L3YtdGV4dC1maWVsZD5cblx0XHRcdFx0PHYtbGF5b3V0IHJvdyB3cmFwPlxuXHRcdFx0XHRcdDx2LWZsZXggeHMxMj5cblx0XHRcdFx0XHRcdDx2LW1lbnVcblx0XHRcdFx0XHRcdCAgcmVmPVwibWVudVwiXG5cdFx0XHRcdFx0XHQgIGxhenlcblx0XHRcdFx0XHRcdCAgOmNsb3NlLW9uLWNvbnRlbnQtY2xpY2s9XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHQgIHYtbW9kZWw9XCJtZW51XCJcblx0XHRcdFx0XHRcdCAgdHJhbnNpdGlvbj1cInNjYWxlLXRyYW5zaXRpb25cIlxuXHRcdFx0XHRcdFx0ICBvZmZzZXQteVxuXHRcdFx0XHRcdFx0ICBmdWxsLXdpZHRoXG5cdFx0XHRcdFx0XHQgIDpudWRnZS1yaWdodD1cIjQwXCJcblx0XHRcdFx0XHRcdCAgbWluLXdpZHRoPVwiMjkwcHhcIlxuXHRcdFx0XHRcdFx0ICA6cmV0dXJuLXZhbHVlLnN5bmM9XCJkYXRlXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdCAgPHYtdGV4dC1maWVsZFxuXHRcdFx0XHRcdFx0ICAgIHNsb3Q9XCJhY3RpdmF0b3JcIlxuXHRcdFx0XHRcdFx0ICAgIDpsYWJlbD1cIiR0KCdiaXJ0aGRheScpXCJcblx0XHRcdFx0XHRcdCAgICB2LW1vZGVsPVwiaXRlbS5iaXJ0aGRheVwiXG5cdFx0XHRcdFx0XHQgICAgcHJlcGVuZC1pY29uPVwiZXZlbnRcIlxuXHRcdFx0XHRcdFx0ICAgIHJlYWRvbmx5XG5cdFx0XHRcdFx0XHQgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdFx0ICA+PC92LXRleHQtZmllbGQ+XG5cdFx0XHRcdFx0XHQgIDx2LWRhdGUtcGlja2VyIHYtaWY9XCIhZGlzYWJsZWRcIiB2LW1vZGVsPVwiaXRlbS5iaXJ0aGRheVwiIG5vLXRpdGxlIHNjcm9sbGFibGU+XG5cdFx0XHRcdFx0XHQgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG5cdFx0XHRcdFx0XHQgICAgPHYtYnRuIGZsYXQgY29sb3I9XCJwcmltYXJ5XCIgQGNsaWNrPVwibWVudSA9IGZhbHNlXCI+e3sgJHQoJ2NhbmNlbCcpIH19PC92LWJ0bj5cblx0XHRcdFx0XHRcdCAgICA8di1idG4gZmxhdCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCIkcmVmcy5tZW51LnNhdmUoZGF0ZSlcIj57eyAkdCgnb2snKSB9fTwvdi1idG4+XG5cdFx0XHRcdFx0XHQgIDwvdi1kYXRlLXBpY2tlcj5cblx0XHRcdFx0XHRcdDwvdi1tZW51PlxuXHRcdFx0XHRcdDwvdi1mbGV4PlxuXHRcdFx0XHQ8L3YtbGF5b3V0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuXHRcdFx0XHRcdDx2LWJ0biBsYXJnZSBAY2xpY2s9XCJidXR0b25BY3Rpb24oKVwiPlxuXHRcdFx0XHRcdHt7IGJ1dHRvblRleHQgfX1cblx0XHRcdFx0XHQ8L3YtYnRuPlxuXHRcdFx0XHRcdDx2LWJ0biBsYXJnZSBAY2xpY2s9XCJiYWNrXCI+XG5cdFx0XHRcdFx00J3QsNC30LDQtFxuXHRcdFx0XHRcdDwvdi1idG4+XG5cdFx0XHRcdDwvZGl2PlxuXHQgIFx0XHRcblx0ICA8L2Rpdj5cbiAgPC9kaXY+XHRcdFxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4Jztcblx0aW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG1pZGRsZXdhcmU6ICdhdXRoJyxcblx0XHRwcm9wczoge1xuXHRcdFx0aWQ6IHtcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0XHRcdFx0ZGF0ZTogbnVsbCxcblx0ICAgICAgbWVudTogZmFsc2UsXG5cdCAgICAgIG1vZGFsOiBmYWxzZSxcblx0ICAgICAgbmFtZTogJycsXG5cdCAgICAgIHZhbGlkOiBmYWxzZSxcblx0ICAgICAgZGVmYXVsdEl0ZW06IHt9LFxuXHQgICAgICBuZXdQb3NpdGlvbjogJycsXG5cdCAgICAgIG5hbWVSdWxlczogW1xuXHQgICAgICAgIHYgPT4gISF2IHx8ICfQktCy0LXQtNC40YLQtSDQt9C90LDRh9C10L3QuNC1Jyxcblx0ICAgICAgICB2ID0+ICh2ICYmIHYubGVuZ3RoID4gMSkgfHwgJ9CY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDIg0LHRg9C60LLRiycsXG5cdCAgICAgIF0sXG5cdCAgICAgIGVtYWlsUnVsZXM6IFtcblx0ICAgICAgICB2ID0+ICEhdiB8fCAn0JLQstC10LTQuNGC0LUgRS1tYWlsJyxcblx0ICAgICAgICB2ID0+IC9eXFx3KyhbLi1dP1xcdyspKkBcXHcrKFsuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLy50ZXN0KHYpIHx8ICfQndC1INCy0LDQu9C40LTQvdGL0LkgRS1tYWlsJ1xuXHQgICAgICBdLFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdC4uLm1hcEdldHRlcnMoe1xuXHRcdFx0XHRpdGVtOiAnZW1wbG95ZWVzL2VtcGxveWVlJyxcblx0XHRcdFx0cG9zaXRpb25zOiAncG9zaXRpb25zL3Bvc2l0aW9ucydcblx0XHRcdH0pLFxuXHRcdFx0cG9zaXRpb25zVGl0bGVzKCkge1xuXHRcdFx0XHRsZXQgYXJyID0gW107XG5cdFx0XHRcdHRoaXMucG9zaXRpb25zLmZvckVhY2goIGVsZW1lbnQgPT4ge1xuXHRcdFx0XHRcdGFyci5wdXNoKGVsZW1lbnQudGl0bGUpXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gYXJyO1xuXHRcdFx0fSxcblx0XHRcdGJ1dHRvblRleHQoKSB7XG5cdFx0XHRcdHJldHVybiAhdGhpcy5kaXNhYmxlZCA/IFwi0J7QsdC90L7QstC40YLRjFwiIDogXCLQmNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtVwiO1xuXHRcdFx0fSxcblx0XHRcdGF2YXRhcigpIHtcblx0XHRcdFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcIi9zdG9yYWdlL2F2YXRhcnMvbm8tYXZhdGFyLmpwZ1wiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyDQl9Cw0LPRgNGD0LfQutCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQv9C10YDQtdC0INC80L7QvdGC0LjRgNC+0LLQsNC90LjQtdC8INC60L7QvNC/0L7QvdC10L3RgtCwXG5cdFx0YmVmb3JlUm91dGVFbnRlciAodG8sIGZyb20sIG5leHQpIHtcbiAgICBcdG5leHQodm0gPT4gdm0uJHN0b3JlLmRpc3BhdGNoKCdlbXBsb3llZXMvbG9hZE9uZScsIHZtLmlkKSk7XG4gIFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcblx0XHRcdFx0Y2hhbmdlSXRlbTogJ2VtcGxveWVlcy9lZGl0Jyxcblx0XHRcdH0pLFxuXHRcdFx0YnV0dG9uQWN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHR0aGlzLml0ZW0ucG9zaXRpb25faWQgPSB0aGlzLnBvc2l0aW9ucy5maW5kSW5kZXgoZWwgPT4gZWwudGl0bGUgPT0gdGhpcy5uZXdQb3NpdGlvbik7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5pdGVtLnBvc2l0aW9uX2lkKVxuXHRcdFx0XHRcdC8vdGhpcy5jaGFuZ2VJdGVtKHRoaXMuaXRlbSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5kZWZhdWx0SXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbSk7XG5cdFx0XHRcdHRoaXMuZGlzYWJsZWQgPSAhdGhpcy5kaXNhYmxlZDtcdFx0XG5cdFx0XHR9LFxuXHRcdFx0YmFjaygpIHtcdFxuXHRcdFx0XHRpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuIHRoaXMuJHJvdXRlci5nbygtMSk7XG5cdFx0XHRcdGZvcihsZXQga2V5IGluIHRoaXMuaXRlbSkge1xuXHRcdFx0XHRcdHRoaXMuaXRlbVtrZXldID0gdGhpcy5kZWZhdWx0SXRlbVtrZXldXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5kaXNhYmxlZCA9ICF0aGlzLmRpc2FibGVkO1x0XHRcdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdGFzeW5jIHVwbG9hZFBob3RvKGUpIHtcblx0XHRcdFx0Y29uc3QgaW1hZ2VmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YXRhci1maWxlJykuZmlsZXNbMF07XG5cdFx0XHRcdGlmICghaW1hZ2VmaWxlKSByZXR1cm47XG5cdFx0ICAgIHRyeSB7XG5cdFx0ICAgIFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7ICAgIFx0XHRcdFx0ICAgIFx0XG5cdFx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VmaWxlKTtcblx0XHRcdFx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkICsgJy9hdmF0YXInLCBmb3JtRGF0YSwge1xuXHRcdFx0XHRcdCAgICAgaGVhZGVyczoge1xuXHRcdFx0XHRcdCAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG5cdFx0XHRcdFx0ICAgICB9XG5cdFx0XHRcdFx0IH0pO1xuXHRcdFx0XHRcdHRoaXMuaXRlbS5hdmF0YXIgPSBkYXRhO1xuICAgIFx0XHR9IGNhdGNoIChlKSB7XG4gICAgICBcdFx0Y29uc29sZS5lcnJvcign0J3QtSDQt9Cw0LPRgNGD0LfQuNC70YHRjyDQsNCy0LDRgtCw0YAnLCBlKVxuICAgIFx0XHR9XHRcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXHQqIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94Oztcblx0XHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdH1cblxuXHRoMiB7XG5cdFx0ZmxleC1iYXNpczogMTAwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHRwLFxuXHQuZW1wbG95ZWUsXG5cdC5hdmF0YXJfX292ZXJsYXkge1xuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XG5cdFx0ZGlzcGxheTogLW1zLWZsZXg7XG5cdFx0ZGlzcGxheTogLW8tZmxleDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG5cblx0cCB7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xuXHR9XG5cblx0cDpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG5cdH1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVcIiB9LCBbXG4gICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJlbXBsb3llZVwiKSkpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX19hdmF0YXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYXZhdGFyX19vdmVybGF5XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInVwbG9hZC1idXR0b25cIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0uJHQoXCJjaGFuZ2VfaW1hZ2VcIiksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYWxsYmFjazogX3ZtLnVwbG9hZFBob3RvXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uYXZhdGFyLCBhbHQ6IF92bS5pdGVtLmZpcnN0X25hbWUgfSB9KVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2Rlc2NyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwibmFtZVwiKSxcbiAgICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmZpcnN0X25hbWUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImZpcnN0X25hbWVcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5maXJzdF9uYW1lXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJsYXN0X25hbWVcIiksXG4gICAgICAgICAgICBydWxlczogX3ZtLm5hbWVSdWxlcyxcbiAgICAgICAgICAgIGNvdW50ZXI6IDcwLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmxhc3RfbmFtZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwibGFzdF9uYW1lXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ubGFzdF9uYW1lXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJwYXRyb255bWljXCIpLFxuICAgICAgICAgICAgcnVsZXM6IF92bS5uYW1lUnVsZXMsXG4gICAgICAgICAgICBjb3VudGVyOiA3MCxcbiAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ucGF0cm9ueW1pYyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwicGF0cm9ueW1pY1wiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnBhdHJvbnltaWNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicG9zaXRpb25cIiksXG4gICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImNhcmRfdHJhdmVsXCIsXG4gICAgICAgICAgICBpdGVtczogX3ZtLnBvc2l0aW9uc1RpdGxlcyxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISF2IHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQtNC+0LvQttC90L7RgdGC0YxcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdQb3NpdGlvbixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLm5ld1Bvc2l0aW9uID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdQb3NpdGlvblwiXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicGhvbmVfbnVtYmVyXCIpLFxuICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJwaG9uZV9pcGhvbmVcIixcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInBob25lX251bWJlclwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnBob25lX251bWJlclwiXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwic2FsYXJ5XCIpLFxuICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJhdHRhY2hfbW9uZXlcIixcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5zYWxhcnksXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcInNhbGFyeVwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnNhbGFyeVwiXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiYWRkcmVzc1wiKSxcbiAgICAgICAgICAgIFwicHJlcGVuZC1pY29uXCI6IFwiaG9tZVwiLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5pdGVtLmFkZHJlc3MsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLCBcImFkZHJlc3NcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5hZGRyZXNzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtbWVudVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwibWVudVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhenk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbG9zZS1vbi1jb250ZW50LWNsaWNrXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwic2NhbGUtdHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwib2Zmc2V0LXlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImZ1bGwtd2lkdGhcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIm51ZGdlLXJpZ2h0XCI6IDQwLFxuICAgICAgICAgICAgICAgICAgICAgIFwibWluLXdpZHRoXCI6IFwiMjkwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInJldHVybi12YWx1ZVwiOiBfdm0uZGF0ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnJldHVyblZhbHVlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGUgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZW51LFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZW51ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiYmlydGhkYXlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5iaXJ0aGRheSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiYmlydGhkYXlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5iaXJ0aGRheVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgIV92bS5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1kYXRlLXBpY2tlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJuby10aXRsZVwiOiBcIlwiLCBzY3JvbGxhYmxlOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5iaXJ0aGRheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0sIFwiYmlydGhkYXlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5iaXJ0aGRheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVudSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiY2FuY2VsXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHJlZnMubWVudS5zYXZlKF92bS5kYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9rXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBsYXJnZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5idXR0b25BY3Rpb24oKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKF92bS5idXR0b25UZXh0KSArIFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInYtYnRuXCIsIHsgYXR0cnM6IHsgbGFyZ2U6IFwiXCIgfSwgb246IHsgY2xpY2s6IF92bS5iYWNrIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHTQndCw0LfQsNC0XFxuXFx0XFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNWViODdjZDBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk3XG4vLyBtb2R1bGUgY2h1bmtzID0gOCJdLCJzb3VyY2VSb290IjoiIn0=