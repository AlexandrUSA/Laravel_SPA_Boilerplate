webpackJsonp([6],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(175)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(177)
/* template */
var __vue_template__ = __webpack_require__(178)
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

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("14e4a03c", content, false, {});
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

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n}\np[data-v-5eb87cd0],\n.employee[data-v-5eb87cd0],\n.avatar__overlay[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\np[data-v-5eb87cd0] {\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n.employee[data-v-5eb87cd0] {\n\t-ms-flex-wrap: wrap;\n\t-o-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\twidth: 90%;\n\tmargin: 30px auto;\n\tpadding: 15px;\n\tborder-radius: 5px;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n}\n.employee[data-v-5eb87cd0]::before,\n.employee[data-v-5eb87cd0]::after {\n\tcontent: \"\";\n\tdisplay: block;\n\tclear: both;\n}\n.employee__avatar[data-v-5eb87cd0] {\t\n\twidth: 30%;\n}\n.employee__avatar-container[data-v-5eb87cd0] {\n\tposition: relative;\n\twidth: 316px;\n\theight: 316px;\n\tmargin: 0 auto;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\tborder-radius: 3px;\n\toverflow: hidden;\n}\n.avatar__overlay[data-v-5eb87cd0] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tbackground-color: rgba(0, 0, 0, .3);\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\t-webkit-transition: opacity .3s;\n\ttransition: opacity .3s;\n}\n.employee__avatar:hover .avatar__overlay[data-v-5eb87cd0]  {\n\topacity: 1;\n}\n.employee__avatar img[data-v-5eb87cd0] {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 316px;\n\tmargin: 0 auto;\n}\n.employee__descr[data-v-5eb87cd0] {\n\twidth: 70%;\n\tpadding:  10px 45px;\n\tfont-size: 18px;\n}\n\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AAqGA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA;AAEA;;;CAIA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA;AACA;CAGA,oBAAA;CACA,mBAAA;CACA,gBAAA;CACA,WAAA;CACA,kBAAA;CACA,cAAA;CACA,mBAAA;CACA,+CAAA;SAAA,uCAAA;CACA;AACA;;CAEA,YAAA;CACA,eAAA;CACA,YAAA;CACA;AAEA;CACA,WAAA;CACA;AAEA;CACA,mBAAA;CACA,aAAA;CACA,cAAA;CACA,eAAA;CACA,+CAAA;SAAA,uCAAA;CACA,mBAAA;CACA,iBAAA;CACA;AAEA;CACA,mBAAA;CACA,OAAA;CACA,QAAA;CACA,WAAA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,oBAAA;CACA,oCAAA;CACA,YAAA;CACA,aAAA;CACA,WAAA;CACA,gCAAA;CAAA,wBAAA;CACA;AACA;CACA,WAAA;CACA;AACA;CACA,eAAA;CACA,YAAA;CACA,iBAAA;CACA,eAAA;CACA;AAEA;CACA,WAAA;CACA,oBAAA;CACA,gBAAA;CACA","file":"Show.vue","sourcesContent":["<template>\n  \t\t\t<div class=\"employee\">\n  \t\t\t\t<h2>{{ $t('employee') }}</h2>\n  \t\t\t\t<div class=\"employee__avatar\">\n  \t\t\t\t\t<div class=\"employee__avatar-container\">\n  \t\t\t\t\t\t<div class=\"avatar__overlay\">\n  \t\t\t\t\t\t\t<v-btn depressed large>{{avatarMsg}}</v-btn>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t\t<img :src=\"avatar\" alt=\"avatar\">\n  \t\t\t\t\t</div>\t\t\t\n  \t\t\t\t\t<upload-button :title=\"avatarMsg\"/>\n  \t\t\t\t</div>\n\t  \t\t\t<div class=\"employee__descr\">\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('name') }}:</b> <i>{{item.first_name}}</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-divider></v-divider>\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('last_name') }}:</b> <i>{{item.last_name}}</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-divider></v-divider>\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('patronymic') }}:</b> <i>{{item.patronymic ? item.patronymic : ''}}</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-divider></v-divider>\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('position') }}:</b> <i>{{item.position}}</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-divider></v-divider>\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('phone_number') }}:</b> <i>{{item.phone_number}}</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-divider></v-divider>\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('salary') }}:</b> <i>{{item.salary}} руб.</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-divider></v-divider>\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('address') }}:</b> <i>{{item.address}}</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-divider></v-divider>\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('birthday') }}:</b> <i>{{item.birthday}}</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-btn\n\t\t\t\t      block\n\t\t\t\t      :to=\"{name: 'employeeEdit', params: {id: item.id, employee: item}}\"\n\t\t\t\t    >\n\t\t\t\t      {{ $t('change_data') }}\n\t\t\t\t    </v-btn>\n\t  \t\t\t</div>\n  \t\t\t</div>\t\t\n</template>\n\n<script>\n\timport {mapActions, mapGetters} from 'vuex';\n\timport axios from 'axios';\n\texport default {\n\t\tprops: {\n\t\t\tid: {\n\t\t\t\ttype: [Number, String],\n\t\t\t\trequired: true\n\t\t\t}\n\t\t},\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\titem: {}\n\t\t\t}\n\t\t},\n\t\tcomputed: {\n\t\t\tavatarMsg() {\n\t\t\t\treturn (this.item.avatar) ? this.$t('change_image') : this.$t('add_image');\n\t\t\t},\n\t\t\tavatar() {\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"http://dragene.no/wp-content/uploads/2016/06/default1.jpg\"\n\t\t\t}\n\t\t},\n\t\tcreated() {\n\t\t\tthis.load();\n\t\t},\n\t\tmethods: {\n\t\t\tasync load() {\n\t\t\t\tconst { data } = await axios.get('/api/employees/' + this.id);\n\t\t\t\tthis.item = data;\n\t\t\t},\n\t\t\tasync uploadPhoto() {\n\t\t  \tif (this.id) {\n\t\t    \ttry {\n      \t\t\tconst { data } = await axios.post('/api/employees/' + this.id + '/avatar');\n      \t\t\tthis.item = data;\n    \t\t\t} catch (e) {\n      \t\t\tconsole.error('Не загрузился сотрудник', e)\n    \t\t\t}\t\n\t\t \t  }\n\t\t\t}\n\t\t}\n\t}\n\n</script>\n\n<style scoped>\n\t* {\n\t\tbox-sizing: border-box;;\n\t\tfont-family: 'Roboto', sans-serif;\n\t}\n\n\th2 {\n\t\tflex-basis: 100%;\n\t}\n\n\tp,\n\t.employee,\n\t.avatar__overlay {\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: -o-flex;\n\t\tdisplay: flex;\n\t}\n\n\tp {\n\t\tjustify-content: space-between;\n\t\tmargin: 0;\n\t\tpadding: 10px;\n\t\ttransition: background-color .3s;\n\t}\n\n\tp:hover {\n\t\tbackground-color: rgba(255, 255, 255, .1);\n\t}\n\t.employee {\n\t\t-webkit-flex-wrap: wrap;\n\t\t-moz-flex-wrap: wrap;\n\t\t-ms-flex-wrap: wrap;\n\t\t-o-flex-wrap: wrap;\n\t\tflex-wrap: wrap;\n\t\twidth: 90%;\n\t\tmargin: 30px auto;\n\t\tpadding: 15px;\n\t\tborder-radius: 5px;\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t}\n\t.employee::before,\n\t.employee::after {\n\t\tcontent: \"\";\n\t\tdisplay: block;\n\t\tclear: both;\n\t}\n\n\t.employee__avatar {\t\n\t\twidth: 30%;\n\t}\n\n\t.employee__avatar-container {\n\t\tposition: relative;\n\t\twidth: 316px;\n\t\theight: 316px;\n\t\tmargin: 0 auto;\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t\tborder-radius: 3px;\n\t\toverflow: hidden;\n\t}\n\n\t.avatar__overlay {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tz-index: 1;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tbackground-color: rgba(0, 0, 0, .3);\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\topacity: 0;\n\t\ttransition: opacity .3s;\n\t}\n\t.employee__avatar:hover .avatar__overlay  {\n\t\topacity: 1;\n\t}\n\t.employee__avatar img {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmax-width: 316px;\n\t\tmargin: 0 auto;\n\t}\n\n\t.employee__descr {\n\t\twidth: 70%;\n\t\tpadding:  10px 45px;\n\t\tfont-size: 18px;\n\t}\n\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);


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



/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		id: {
			type: [Number, String],
			required: true
		}
	},
	data: function data() {
		return {
			item: {}
		};
	},

	computed: {
		avatarMsg: function avatarMsg() {
			return this.item.avatar ? this.$t('change_image') : this.$t('add_image');
		},
		avatar: function avatar() {
			return this.item.avatar ? this.item.avatar : "http://dragene.no/wp-content/uploads/2016/06/default1.jpg";
		}
	},
	created: function created() {
		this.load();
	},

	methods: {
		load: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
				var _ref2, data;

				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('/api/employees/' + this.id);

							case 2:
								_ref2 = _context.sent;
								data = _ref2.data;

								this.item = data;

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function load() {
				return _ref.apply(this, arguments);
			}

			return load;
		}(),
		uploadPhoto: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
				var _ref4, data;

				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								if (!this.id) {
									_context2.next = 12;
									break;
								}

								_context2.prev = 1;
								_context2.next = 4;
								return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/employees/' + this.id + '/avatar');

							case 4:
								_ref4 = _context2.sent;
								data = _ref4.data;

								this.item = data;
								_context2.next = 12;
								break;

							case 9:
								_context2.prev = 9;
								_context2.t0 = _context2['catch'](1);

								console.error('Не загрузился сотрудник', _context2.t0);

							case 12:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this, [[1, 9]]);
			}));

			function uploadPhoto() {
				return _ref3.apply(this, arguments);
			}

			return uploadPhoto;
		}()
	}
});

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "employee" }, [
    _c("h2", [_vm._v(_vm._s(_vm.$t("employee")))]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "employee__avatar" },
      [
        _c("div", { staticClass: "employee__avatar-container" }, [
          _c(
            "div",
            { staticClass: "avatar__overlay" },
            [
              _c("v-btn", { attrs: { depressed: "", large: "" } }, [
                _vm._v(_vm._s(_vm.avatarMsg))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("img", { attrs: { src: _vm.avatar, alt: "avatar" } })
        ]),
        _vm._v(" "),
        _c("upload-button", { attrs: { title: _vm.avatarMsg } })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "employee__descr" },
      [
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v(_vm._s(_vm.$t("name")) + ":")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.first_name))])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v(_vm._s(_vm.$t("last_name")) + ":")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.last_name))])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v(_vm._s(_vm.$t("patronymic")) + ":")]),
          _vm._v(" "),
          _c("i", [
            _vm._v(_vm._s(_vm.item.patronymic ? _vm.item.patronymic : ""))
          ])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v(_vm._s(_vm.$t("position")) + ":")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.position))])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v(_vm._s(_vm.$t("phone_number")) + ":")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.phone_number))])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v(_vm._s(_vm.$t("salary")) + ":")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.salary) + " руб.")])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v(_vm._s(_vm.$t("address")) + ":")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.address))])
        ]),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("p", { staticClass: "employee__text" }, [
          _c("b", [_vm._v(_vm._s(_vm.$t("birthday")) + ":")]),
          _vm._v(" "),
          _c("i", [_vm._v(_vm._s(_vm.item.birthday))])
        ]),
        _vm._v(" "),
        _c(
          "v-btn",
          {
            attrs: {
              block: "",
              to: {
                name: "employeeEdit",
                params: { id: _vm.item.id, employee: _vm.item }
              }
            }
          },
          [
            _vm._v(
              "\n\t\t\t\t      " +
                _vm._s(_vm.$t("change_data")) +
                "\n\t\t\t\t    "
            )
          ]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0Esa0VBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLCtDQUFnRCxtQ0FBbUMsb0NBQW9DLHNDQUFzQyxHQUFH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QTtBQUNBLE9BQU8saUNBQWlDO0FBQ3hDO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy82LjE1ZGJkOWQ4YjQ4YjFjMzMwMWNiLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTVlYjg3Y2QwXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZW1wbG95ZWVzXFxcXFNob3cudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlYjg3Y2QwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWViODdjZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjE0ZTRhMDNjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuKltkYXRhLXYtNWViODdjZDBdIHtcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0ICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OztcXG5cXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbmgyW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcblxcdCAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbn1cXG5wW2RhdGEtdi01ZWI4N2NkMF0sXFxuLmVtcGxveWVlW2RhdGEtdi01ZWI4N2NkMF0sXFxuLmF2YXRhcl9fb3ZlcmxheVtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5wW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuXFx0ICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuXFx0ICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG59XFxucFtkYXRhLXYtNWViODdjZDBdOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXG59XFxuLmVtcGxveWVlW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuXFx0LW8tZmxleC13cmFwOiB3cmFwO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG1hcmdpbjogMzBweCBhdXRvO1xcblxcdHBhZGRpbmc6IDE1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuXFx0ICAgICAgICBib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG59XFxuLmVtcGxveWVlW2RhdGEtdi01ZWI4N2NkMF06OmJlZm9yZSxcXG4uZW1wbG95ZWVbZGF0YS12LTVlYjg3Y2QwXTo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNsZWFyOiBib3RoO1xcbn1cXG4uZW1wbG95ZWVfX2F2YXRhcltkYXRhLXYtNWViODdjZDBdIHtcXHRcXG5cXHR3aWR0aDogMzAlO1xcbn1cXG4uZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiAzMTZweDtcXG5cXHRoZWlnaHQ6IDMxNnB4O1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuXFx0ICAgICAgICBib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmF2YXRhcl9fb3ZlcmxheVtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0ei1pbmRleDogMTtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyOmhvdmVyIC5hdmF0YXJfX292ZXJsYXlbZGF0YS12LTVlYjg3Y2QwXSAge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyIGltZ1tkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDMxNnB4O1xcblxcdG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uZW1wbG95ZWVfX2Rlc2NyW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdHdpZHRoOiA3MCU7XFxuXFx0cGFkZGluZzogIDEwcHggNDVweDtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxufVxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvd2ViL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFxR0E7Q0FDQSwrQkFBQTtTQUFBLHVCQUFBO0NBQ0Esa0NBQUE7Q0FDQTtBQUVBO0NBQ0EsOEJBQUE7S0FBQSxpQkFBQTtDQUNBO0FBRUE7OztDQUlBLG1CQUFBO0NBQ0Esa0JBQUE7Q0FDQSxpQkFBQTtDQUNBLHFCQUFBO0NBQUEscUJBQUE7Q0FBQSxjQUFBO0NBQ0E7QUFFQTtDQUNBLDBCQUFBO0tBQUEsdUJBQUE7U0FBQSwrQkFBQTtDQUNBLFVBQUE7Q0FDQSxjQUFBO0NBQ0EseUNBQUE7Q0FBQSxpQ0FBQTtDQUNBO0FBRUE7Q0FDQSwwQ0FBQTtDQUNBO0FBQ0E7Q0FHQSxvQkFBQTtDQUNBLG1CQUFBO0NBQ0EsZ0JBQUE7Q0FDQSxXQUFBO0NBQ0Esa0JBQUE7Q0FDQSxjQUFBO0NBQ0EsbUJBQUE7Q0FDQSwrQ0FBQTtTQUFBLHVDQUFBO0NBQ0E7QUFDQTs7Q0FFQSxZQUFBO0NBQ0EsZUFBQTtDQUNBLFlBQUE7Q0FDQTtBQUVBO0NBQ0EsV0FBQTtDQUNBO0FBRUE7Q0FDQSxtQkFBQTtDQUNBLGFBQUE7Q0FDQSxjQUFBO0NBQ0EsZUFBQTtDQUNBLCtDQUFBO1NBQUEsdUNBQUE7Q0FDQSxtQkFBQTtDQUNBLGlCQUFBO0NBQ0E7QUFFQTtDQUNBLG1CQUFBO0NBQ0EsT0FBQTtDQUNBLFFBQUE7Q0FDQSxXQUFBO0NBQ0EseUJBQUE7S0FBQSxzQkFBQTtTQUFBLHdCQUFBO0NBQ0EsMEJBQUE7S0FBQSx1QkFBQTtTQUFBLG9CQUFBO0NBQ0Esb0NBQUE7Q0FDQSxZQUFBO0NBQ0EsYUFBQTtDQUNBLFdBQUE7Q0FDQSxnQ0FBQTtDQUFBLHdCQUFBO0NBQ0E7QUFDQTtDQUNBLFdBQUE7Q0FDQTtBQUNBO0NBQ0EsZUFBQTtDQUNBLFlBQUE7Q0FDQSxpQkFBQTtDQUNBLGVBQUE7Q0FDQTtBQUVBO0NBQ0EsV0FBQTtDQUNBLG9CQUFBO0NBQ0EsZ0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiU2hvdy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVcXFwiPlxcbiAgXFx0XFx0XFx0XFx0PGgyPnt7ICR0KCdlbXBsb3llZScpIH19PC9oMj5cXG4gIFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19hdmF0YXJcXFwiPlxcbiAgXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcXFwiPlxcbiAgXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiYXZhdGFyX19vdmVybGF5XFxcIj5cXG4gIFxcdFxcdFxcdFxcdFxcdFxcdFxcdDx2LWJ0biBkZXByZXNzZWQgbGFyZ2U+e3thdmF0YXJNc2d9fTwvdi1idG4+XFxuICBcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG4gIFxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgOnNyYz1cXFwiYXZhdGFyXFxcIiBhbHQ9XFxcImF2YXRhclxcXCI+XFxuICBcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHRcXHRcXHRcXG4gIFxcdFxcdFxcdFxcdFxcdDx1cGxvYWQtYnV0dG9uIDp0aXRsZT1cXFwiYXZhdGFyTXNnXFxcIi8+XFxuICBcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHQgIFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19kZXNjclxcXCI+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+e3sgJHQoJ25hbWUnKSB9fTo8L2I+IDxpPnt7aXRlbS5maXJzdF9uYW1lfX08L2k+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPnt7ICR0KCdsYXN0X25hbWUnKSB9fTo8L2I+IDxpPnt7aXRlbS5sYXN0X25hbWV9fTwvaT5cXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+e3sgJHQoJ3BhdHJvbnltaWMnKSB9fTo8L2I+IDxpPnt7aXRlbS5wYXRyb255bWljID8gaXRlbS5wYXRyb255bWljIDogJyd9fTwvaT5cXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+e3sgJHQoJ3Bvc2l0aW9uJykgfX06PC9iPiA8aT57e2l0ZW0ucG9zaXRpb259fTwvaT5cXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+e3sgJHQoJ3Bob25lX251bWJlcicpIH19OjwvYj4gPGk+e3tpdGVtLnBob25lX251bWJlcn19PC9pPlxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcblxcdCAgXFx0XFx0XFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXG5cXHQgIFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxuXFx0ICBcXHRcXHRcXHRcXHRcXHQ8Yj57eyAkdCgnc2FsYXJ5JykgfX06PC9iPiA8aT57e2l0ZW0uc2FsYXJ5fX0g0YDRg9CxLjwvaT5cXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+e3sgJHQoJ2FkZHJlc3MnKSB9fTo8L2I+IDxpPnt7aXRlbS5hZGRyZXNzfX08L2k+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPnt7ICR0KCdiaXJ0aGRheScpIH19OjwvYj4gPGk+e3tpdGVtLmJpcnRoZGF5fX08L2k+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1idG5cXG5cXHRcXHRcXHRcXHQgICAgICBibG9ja1xcblxcdFxcdFxcdFxcdCAgICAgIDp0bz1cXFwie25hbWU6ICdlbXBsb3llZUVkaXQnLCBwYXJhbXM6IHtpZDogaXRlbS5pZCwgZW1wbG95ZWU6IGl0ZW19fVxcXCJcXG5cXHRcXHRcXHRcXHQgICAgPlxcblxcdFxcdFxcdFxcdCAgICAgIHt7ICR0KCdjaGFuZ2VfZGF0YScpIH19XFxuXFx0XFx0XFx0XFx0ICAgIDwvdi1idG4+XFxuXFx0ICBcXHRcXHRcXHQ8L2Rpdj5cXG4gIFxcdFxcdFxcdDwvZGl2PlxcdFxcdFxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXHRpbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnO1xcblxcdGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XFxuXFx0ZXhwb3J0IGRlZmF1bHQge1xcblxcdFxcdHByb3BzOiB7XFxuXFx0XFx0XFx0aWQ6IHtcXG5cXHRcXHRcXHRcXHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxcblxcdFxcdFxcdFxcdHJlcXVpcmVkOiB0cnVlXFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0ZGF0YSgpIHtcXG5cXHRcXHRcXHRyZXR1cm4ge1xcblxcdFxcdFxcdFxcdGl0ZW06IHt9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0Y29tcHV0ZWQ6IHtcXG5cXHRcXHRcXHRhdmF0YXJNc2coKSB7XFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuJHQoJ2NoYW5nZV9pbWFnZScpIDogdGhpcy4kdCgnYWRkX2ltYWdlJyk7XFxuXFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRhdmF0YXIoKSB7XFxuXFx0XFx0XFx0XFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcXFwiaHR0cDovL2RyYWdlbmUubm8vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDYvZGVmYXVsdDEuanBnXFxcIlxcblxcdFxcdFxcdH1cXG5cXHRcXHR9LFxcblxcdFxcdGNyZWF0ZWQoKSB7XFxuXFx0XFx0XFx0dGhpcy5sb2FkKCk7XFxuXFx0XFx0fSxcXG5cXHRcXHRtZXRob2RzOiB7XFxuXFx0XFx0XFx0YXN5bmMgbG9hZCgpIHtcXG5cXHRcXHRcXHRcXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQpO1xcblxcdFxcdFxcdFxcdHRoaXMuaXRlbSA9IGRhdGE7XFxuXFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRhc3luYyB1cGxvYWRQaG90bygpIHtcXG5cXHRcXHQgIFxcdGlmICh0aGlzLmlkKSB7XFxuXFx0XFx0ICAgIFxcdHRyeSB7XFxuICAgICAgXFx0XFx0XFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCArICcvYXZhdGFyJyk7XFxuICAgICAgXFx0XFx0XFx0dGhpcy5pdGVtID0gZGF0YTtcXG4gICAgXFx0XFx0XFx0fSBjYXRjaCAoZSkge1xcbiAgICAgIFxcdFxcdFxcdGNvbnNvbGUuZXJyb3IoJ9Cd0LUg0LfQsNCz0YDRg9C30LjQu9GB0Y8g0YHQvtGC0YDRg9C00L3QuNC6JywgZSlcXG4gICAgXFx0XFx0XFx0fVxcdFxcblxcdFxcdCBcXHQgIH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcblxcdCoge1xcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcblxcdFxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHR9XFxuXFxuXFx0aDIge1xcblxcdFxcdGZsZXgtYmFzaXM6IDEwMCU7XFxuXFx0fVxcblxcblxcdHAsXFxuXFx0LmVtcGxveWVlLFxcblxcdC5hdmF0YXJfX292ZXJsYXkge1xcblxcdFxcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG5cXHRcXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdH1cXG5cXG5cXHRwIHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0XFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxuXFx0fVxcblxcblxcdHA6aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xcblxcdH1cXG5cXHQuZW1wbG95ZWUge1xcblxcdFxcdC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdC1tb3otZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0LW8tZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHR3aWR0aDogOTAlO1xcblxcdFxcdG1hcmdpbjogMzBweCBhdXRvO1xcblxcdFxcdHBhZGRpbmc6IDE1cHg7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdFxcdGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcblxcdH1cXG5cXHQuZW1wbG95ZWU6OmJlZm9yZSxcXG5cXHQuZW1wbG95ZWU6OmFmdGVyIHtcXG5cXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRjbGVhcjogYm90aDtcXG5cXHR9XFxuXFxuXFx0LmVtcGxveWVlX19hdmF0YXIge1xcdFxcblxcdFxcdHdpZHRoOiAzMCU7XFxuXFx0fVxcblxcblxcdC5lbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lciB7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdHdpZHRoOiAzMTZweDtcXG5cXHRcXHRoZWlnaHQ6IDMxNnB4O1xcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcblxcdFxcdGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdH1cXG5cXG5cXHQuYXZhdGFyX19vdmVybGF5IHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0dG9wOiAwO1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0ei1pbmRleDogMTtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdFxcdHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcblxcdH1cXG5cXHQuZW1wbG95ZWVfX2F2YXRhcjpob3ZlciAuYXZhdGFyX19vdmVybGF5ICB7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxuXFx0LmVtcGxveWVlX19hdmF0YXIgaW1nIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRtYXgtd2lkdGg6IDMxNnB4O1xcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcblxcdH1cXG5cXG5cXHQuZW1wbG95ZWVfX2Rlc2NyIHtcXG5cXHRcXHR3aWR0aDogNzAlO1xcblxcdFxcdHBhZGRpbmc6ICAxMHB4IDQ1cHg7XFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdH1cXG5cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTc2XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIjx0ZW1wbGF0ZT5cbiAgXHRcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlXCI+XG4gIFx0XHRcdFx0PGgyPnt7ICR0KCdlbXBsb3llZScpIH19PC9oMj5cbiAgXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2F2YXRhclwiPlxuICBcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXCI+XG4gIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhdmF0YXJfX292ZXJsYXlcIj5cbiAgXHRcdFx0XHRcdFx0XHQ8di1idG4gZGVwcmVzc2VkIGxhcmdlPnt7YXZhdGFyTXNnfX08L3YtYnRuPlxuICBcdFx0XHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0XHRcdFx0PGltZyA6c3JjPVwiYXZhdGFyXCIgYWx0PVwiYXZhdGFyXCI+XG4gIFx0XHRcdFx0XHQ8L2Rpdj5cdFx0XHRcbiAgXHRcdFx0XHRcdDx1cGxvYWQtYnV0dG9uIDp0aXRsZT1cImF2YXRhck1zZ1wiLz5cbiAgXHRcdFx0XHQ8L2Rpdj5cblx0ICBcdFx0XHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2Rlc2NyXCI+XG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XG5cdCAgXHRcdFx0XHRcdDxiPnt7ICR0KCduYW1lJykgfX06PC9iPiA8aT57e2l0ZW0uZmlyc3RfbmFtZX19PC9pPlxuXHQgIFx0XHRcdFx0PC9wPlxuXHQgIFx0XHRcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cblx0ICBcdFx0XHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cblx0ICBcdFx0XHRcdFx0PGI+e3sgJHQoJ2xhc3RfbmFtZScpIH19OjwvYj4gPGk+e3tpdGVtLmxhc3RfbmFtZX19PC9pPlxuXHQgIFx0XHRcdFx0PC9wPlxuXHQgIFx0XHRcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cblx0ICBcdFx0XHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cblx0ICBcdFx0XHRcdFx0PGI+e3sgJHQoJ3BhdHJvbnltaWMnKSB9fTo8L2I+IDxpPnt7aXRlbS5wYXRyb255bWljID8gaXRlbS5wYXRyb255bWljIDogJyd9fTwvaT5cblx0ICBcdFx0XHRcdDwvcD5cblx0ICBcdFx0XHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XG5cdCAgXHRcdFx0XHRcdDxiPnt7ICR0KCdwb3NpdGlvbicpIH19OjwvYj4gPGk+e3tpdGVtLnBvc2l0aW9ufX08L2k+XG5cdCAgXHRcdFx0XHQ8L3A+XG5cdCAgXHRcdFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuXHQgIFx0XHRcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxuXHQgIFx0XHRcdFx0XHQ8Yj57eyAkdCgncGhvbmVfbnVtYmVyJykgfX06PC9iPiA8aT57e2l0ZW0ucGhvbmVfbnVtYmVyfX08L2k+XG5cdCAgXHRcdFx0XHQ8L3A+XG5cdCAgXHRcdFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuXHQgIFx0XHRcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxuXHQgIFx0XHRcdFx0XHQ8Yj57eyAkdCgnc2FsYXJ5JykgfX06PC9iPiA8aT57e2l0ZW0uc2FsYXJ5fX0g0YDRg9CxLjwvaT5cblx0ICBcdFx0XHRcdDwvcD5cblx0ICBcdFx0XHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG5cdCAgXHRcdFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XG5cdCAgXHRcdFx0XHRcdDxiPnt7ICR0KCdhZGRyZXNzJykgfX06PC9iPiA8aT57e2l0ZW0uYWRkcmVzc319PC9pPlxuXHQgIFx0XHRcdFx0PC9wPlxuXHQgIFx0XHRcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cblx0ICBcdFx0XHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cblx0ICBcdFx0XHRcdFx0PGI+e3sgJHQoJ2JpcnRoZGF5JykgfX06PC9iPiA8aT57e2l0ZW0uYmlydGhkYXl9fTwvaT5cblx0ICBcdFx0XHRcdDwvcD5cblx0ICBcdFx0XHRcdDx2LWJ0blxuXHRcdFx0XHQgICAgICBibG9ja1xuXHRcdFx0XHQgICAgICA6dG89XCJ7bmFtZTogJ2VtcGxveWVlRWRpdCcsIHBhcmFtczoge2lkOiBpdGVtLmlkLCBlbXBsb3llZTogaXRlbX19XCJcblx0XHRcdFx0ICAgID5cblx0XHRcdFx0ICAgICAge3sgJHQoJ2NoYW5nZV9kYXRhJykgfX1cblx0XHRcdFx0ICAgIDwvdi1idG4+XG5cdCAgXHRcdFx0PC9kaXY+XG4gIFx0XHRcdDwvZGl2Plx0XHRcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XG5cdGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczoge1xuXHRcdFx0aWQ6IHtcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpdGVtOiB7fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdGF2YXRhck1zZygpIHtcblx0XHRcdFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuJHQoJ2NoYW5nZV9pbWFnZScpIDogdGhpcy4kdCgnYWRkX2ltYWdlJyk7XG5cdFx0XHR9LFxuXHRcdFx0YXZhdGFyKCkge1xuXHRcdFx0XHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy5pdGVtLmF2YXRhciA6IFwiaHR0cDovL2RyYWdlbmUubm8vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDYvZGVmYXVsdDEuanBnXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHR0aGlzLmxvYWQoKTtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGFzeW5jIGxvYWQoKSB7XG5cdFx0XHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCk7XG5cdFx0XHRcdHRoaXMuaXRlbSA9IGRhdGE7XG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgdXBsb2FkUGhvdG8oKSB7XG5cdFx0ICBcdGlmICh0aGlzLmlkKSB7XG5cdFx0ICAgIFx0dHJ5IHtcbiAgICAgIFx0XHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQgKyAnL2F2YXRhcicpO1xuICAgICAgXHRcdFx0dGhpcy5pdGVtID0gZGF0YTtcbiAgICBcdFx0XHR9IGNhdGNoIChlKSB7XG4gICAgICBcdFx0XHRjb25zb2xlLmVycm9yKCfQndC1INC30LDQs9GA0YPQt9C40LvRgdGPINGB0L7RgtGA0YPQtNC90LjQuicsIGUpXG4gICAgXHRcdFx0fVx0XG5cdFx0IFx0ICB9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXHQqIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94Oztcblx0XHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdH1cblxuXHRoMiB7XG5cdFx0ZmxleC1iYXNpczogMTAwJTtcblx0fVxuXG5cdHAsXG5cdC5lbXBsb3llZSxcblx0LmF2YXRhcl9fb3ZlcmxheSB7XG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRcdGRpc3BsYXk6IC1tb3otZmxleDtcblx0XHRkaXNwbGF5OiAtbXMtZmxleDtcblx0XHRkaXNwbGF5OiAtby1mbGV4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdH1cblxuXHRwIHtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XG5cdH1cblxuXHRwOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcblx0fVxuXHQuZW1wbG95ZWUge1xuXHRcdC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuXHRcdC1tb3otZmxleC13cmFwOiB3cmFwO1xuXHRcdC1tcy1mbGV4LXdyYXA6IHdyYXA7XG5cdFx0LW8tZmxleC13cmFwOiB3cmFwO1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHR3aWR0aDogOTAlO1xuXHRcdG1hcmdpbjogMzBweCBhdXRvO1xuXHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xuXHR9XG5cdC5lbXBsb3llZTo6YmVmb3JlLFxuXHQuZW1wbG95ZWU6OmFmdGVyIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGNsZWFyOiBib3RoO1xuXHR9XG5cblx0LmVtcGxveWVlX19hdmF0YXIge1x0XG5cdFx0d2lkdGg6IDMwJTtcblx0fVxuXG5cdC5lbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lciB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdpZHRoOiAzMTZweDtcblx0XHRoZWlnaHQ6IDMxNnB4O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHR9XG5cblx0LmF2YXRhcl9fb3ZlcmxheSB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdHotaW5kZXg6IDE7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0b3BhY2l0eTogMDtcblx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcblx0fVxuXHQuZW1wbG95ZWVfX2F2YXRhcjpob3ZlciAuYXZhdGFyX19vdmVybGF5ICB7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXHQuZW1wbG95ZWVfX2F2YXRhciBpbWcge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogMzE2cHg7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdH1cblxuXHQuZW1wbG95ZWVfX2Rlc2NyIHtcblx0XHR3aWR0aDogNzAlO1xuXHRcdHBhZGRpbmc6ICAxMHB4IDQ1cHg7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHR9XG5cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZVwiIH0sIFtcbiAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImVtcGxveWVlXCIpKSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhdmF0YXJfX292ZXJsYXlcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtYnRuXCIsIHsgYXR0cnM6IHsgZGVwcmVzc2VkOiBcIlwiLCBsYXJnZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5hdmF0YXJNc2cpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5hdmF0YXIsIGFsdDogXCJhdmF0YXJcIiB9IH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInVwbG9hZC1idXR0b25cIiwgeyBhdHRyczogeyB0aXRsZTogX3ZtLmF2YXRhck1zZyB9IH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX19kZXNjclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJuYW1lXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmZpcnN0X25hbWUpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImxhc3RfbmFtZVwiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5sYXN0X25hbWUpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInBhdHJvbnltaWNcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5wYXRyb255bWljID8gX3ZtLml0ZW0ucGF0cm9ueW1pYyA6IFwiXCIpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInBvc2l0aW9uXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnBvc2l0aW9uKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJwaG9uZV9udW1iZXJcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ucGhvbmVfbnVtYmVyKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJzYWxhcnlcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uc2FsYXJ5KSArIFwiINGA0YPQsS5cIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJhZGRyZXNzXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmFkZHJlc3MpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImJpcnRoZGF5XCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmJpcnRoZGF5KSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1wbG95ZWVFZGl0XCIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBfdm0uaXRlbS5pZCwgZW1wbG95ZWU6IF92bS5pdGVtIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdCAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiY2hhbmdlX2RhdGFcIikpICtcbiAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdCAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVlYjg3Y2QwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiXSwic291cmNlUm9vdCI6IiJ9