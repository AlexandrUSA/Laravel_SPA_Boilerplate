webpackJsonp([12],{

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(223)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(225)
/* template */
var __vue_template__ = __webpack_require__(226)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7375d975"
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
Component.options.__file = "resources\\assets\\js\\pages\\admin\\clients\\Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7375d975", Component.options)
  } else {
    hotAPI.reload("data-v-7375d975", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(224);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("596e2da4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7375d975\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7375d975\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n*[data-v-7375d975] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-7375d975] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n}\np[data-v-7375d975],\n.employee[data-v-7375d975],\n.avatar__overlay[data-v-7375d975] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\np[data-v-7375d975] {\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-7375d975]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n.employee[data-v-7375d975] {\n\t-ms-flex-wrap: wrap;\n\t-o-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\twidth: 90%;\n\tmargin: 30px auto;\n\tpadding: 15px;\n\tborder-radius: 5px;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n}\n.employee[data-v-7375d975]::before,\n.employee[data-v-7375d975]::after {\n\tcontent: \"\";\n\tdisplay: block;\n\tclear: both;\n}\n.employee__avatar[data-v-7375d975] {\t\n\twidth: 30%;\n}\n.employee__avatar-container[data-v-7375d975] {\n\tposition: relative;\n\twidth: 100%;\n\tmargin: 0 auto;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\tborder-radius: 3px;\n\toverflow: hidden;\n}\n.avatar__overlay[data-v-7375d975] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tbackground-color: rgba(0, 0, 0, .3);\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\t-webkit-transition: opacity .3s;\n\ttransition: opacity .3s;\n}\n.employee__avatar:hover .avatar__overlay[data-v-7375d975]  {\n\topacity: 1;\n}\n.employee__avatar img[data-v-7375d975] {\n\tdisplay: block;\n\twidth: 100%;\n\tmargin: 0 auto;\n}\n.employee__descr[data-v-7375d975] {\n\twidth: 70%;\n\tpadding:  10px 45px;\n\tfont-size: 18px;\n}\n\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/admin/clients/resources/assets/js/pages/admin/clients/Show.vue"],"names":[],"mappings":";AAyGA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA;AAEA;;;CAIA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA;AACA;CAGA,oBAAA;CACA,mBAAA;CACA,gBAAA;CACA,WAAA;CACA,kBAAA;CACA,cAAA;CACA,mBAAA;CACA,+CAAA;SAAA,uCAAA;CACA;AACA;;CAEA,YAAA;CACA,eAAA;CACA,YAAA;CACA;AAEA;CACA,WAAA;CACA;AAEA;CACA,mBAAA;CACA,YAAA;CACA,eAAA;CACA,+CAAA;SAAA,uCAAA;CACA,mBAAA;CACA,iBAAA;CACA;AAEA;CACA,mBAAA;CACA,OAAA;CACA,QAAA;CACA,WAAA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,oBAAA;CACA,oCAAA;CACA,YAAA;CACA,aAAA;CACA,WAAA;CACA,gCAAA;CAAA,wBAAA;CACA;AACA;CACA,WAAA;CACA;AACA;CACA,eAAA;CACA,YAAA;CACA,eAAA;CACA;AAEA;CACA,WAAA;CACA,oBAAA;CACA,gBAAA;CACA","file":"Show.vue","sourcesContent":["<template>\r\n  <div class=\"employee\">\r\n  \t<h2>{{ $t('employee') }}</h2>\r\n  \t\t<div class=\"employee__avatar\">\r\n  \t\t\t<div class=\"employee__avatar-container\">\r\n  \t\t\t\t<div class=\"avatar__overlay\">\r\n  \t\t\t\t\t<upload-button :title=\"avatarMsg\" :selectedCallback=\"uploadPhoto\"></upload-button>\r\n  \t\t\t\t</div>\r\n  \t\t\t\t<img :src=\"item.avatar\" alt=\"avatar\">\r\n  \t\t\t</div>\t\r\n\t\t\t</div>\r\n\t  \t<div class=\"employee__descr\">\r\n\t  \t\t<p class=\"employee__text\">\r\n\t  \t\t\t<b>{{ $t('name') }}:</b> <i>{{item.first_name}}</i>\r\n\t  \t\t</p>\r\n\t  \t\t<v-divider></v-divider>\r\n\t  \t\t<p class=\"employee__text\">\r\n\t  \t\t\t<b>{{ $t('last_name') }}:</b> <i>{{item.last_name}}</i>\r\n\t  \t\t</p>\r\n\t  \t\t<v-divider></v-divider>\r\n\t  \t\t<p class=\"employee__text\">\r\n\t  \t\t\t<b>{{ $t('patronymic') }}:</b> <i>{{item.patronymic ? item.patronymic : ''}}</i>\r\n\t  \t\t</p>\r\n\t  \t\t<v-divider></v-divider>\r\n\t  \t\t<p class=\"employee__text\">\r\n\t  \t\t\t<b>{{ $t('position') }}:</b> <i>{{item.position}}</i>\r\n\t  \t\t</p>\r\n\t  \t\t<v-divider></v-divider>\r\n\t  \t\t<p class=\"employee__text\">\r\n\t  \t\t\t<b>{{ $t('phone_number') }}:</b> <i>{{item.phone_number}}</i>\r\n\t  \t\t</p>\r\n\t  \t\t<v-divider></v-divider>\r\n\t  \t\t<p class=\"employee__text\">\r\n\t  \t\t\t<b>{{ $t('salary') }}:</b> <i>{{item.salary}} руб.</i>\r\n\t  \t\t</p>\r\n\t  \t\t<v-divider></v-divider>\r\n\t  \t\t<p class=\"employee__text\">\r\n\t  \t\t\t<b>{{ $t('address') }}:</b> <i>{{item.address}}</i>\r\n\t  \t\t</p>\r\n\t  \t\t<v-divider></v-divider>\r\n\t  \t\t<p class=\"employee__text\">\r\n\t  \t\t\t<b>{{ $t('birthday') }}:</b> <i>{{item.birthday}}</i>\r\n\t  \t\t</p>\r\n\t  \t\t<v-btn\r\n\t\t\t\t    block\r\n\t\t\t\t    :to=\"{name: 'employeeEdit', params: {id: item.id, employee: item}}\"\r\n\t\t\t\t  >\r\n\t\t\t\t\t{{ $t('change_data') }}\r\n\t\t\t\t</v-btn>\r\n\t  </div>\r\n  </div>\t\t\r\n</template>\r\n\r\n<script>\r\n\timport {mapActions, mapGetters} from 'vuex';\r\n\timport axios from 'axios';\r\n\texport default {\r\n\t\tprops: {\r\n\t\t\tid: {\r\n\t\t\t\ttype: [Number, String],\r\n\t\t\t\trequired: true\r\n\t\t\t}\r\n\t\t},\r\n\t\tdata() {\r\n\t\t\treturn {\r\n\t\t\t\titem: {}\r\n\t\t\t}\r\n\t\t},\r\n\t\tcomputed: {\r\n\t\t\tavatarMsg() {\r\n\t\t\t\treturn (this.item.avatar) ? this.$t('change_image') : this.$t('add_image');\r\n\t\t\t},\r\n\t\t\tavatar() {\r\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"/storage/avatars/no-avatar.jpg\"\r\n\t\t\t}\r\n\t\t},\r\n\t\tcreated() {\r\n\t\t\tthis.load();\r\n\t\t},\r\n\t\tmethods: {\r\n\t\t\tasync load() {\r\n\t\t\t\tconst { data } = await axios.get('/api/employees/' + this.id);\r\n\t\t\t\tthis.item = data;\r\n\t\t\t},\r\n\t\t\tasync uploadPhoto(e) {\r\n\t\t\t\tconst imagefile = document.getElementById('avatar-file').files[0];\r\n\t\t\t\tif (!imagefile) return;\r\n\t\t    try {\r\n\t\t    \tlet formData = new FormData();    \t\t\t\t    \t\r\n\t\t\t\t\tformData.append(\"image\", imagefile);\r\n\t\t\t\t\tconst { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {\r\n\t\t\t\t\t     headers: {\r\n\t\t\t\t\t       'Content-Type': 'multipart/form-data'\r\n\t\t\t\t\t     }\r\n\t\t\t\t\t });\r\n\t\t\t\t\tthis.item.avatar = data;\r\n    \t\t} catch (e) {\r\n      \t\tconsole.error('Не загрузился аватар', e)\r\n    \t\t}\t\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</script>\r\n\r\n<style scoped>\r\n\t* {\r\n\t\tbox-sizing: border-box;;\r\n\t\tfont-family: 'Roboto', sans-serif;\r\n\t}\r\n\r\n\th2 {\r\n\t\tflex-basis: 100%;\r\n\t}\r\n\r\n\tp,\r\n\t.employee,\r\n\t.avatar__overlay {\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -moz-flex;\r\n\t\tdisplay: -ms-flex;\r\n\t\tdisplay: -o-flex;\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\tp {\r\n\t\tjustify-content: space-between;\r\n\t\tmargin: 0;\r\n\t\tpadding: 10px;\r\n\t\ttransition: background-color .3s;\r\n\t}\r\n\r\n\tp:hover {\r\n\t\tbackground-color: rgba(255, 255, 255, .1);\r\n\t}\r\n\t.employee {\r\n\t\t-webkit-flex-wrap: wrap;\r\n\t\t-moz-flex-wrap: wrap;\r\n\t\t-ms-flex-wrap: wrap;\r\n\t\t-o-flex-wrap: wrap;\r\n\t\tflex-wrap: wrap;\r\n\t\twidth: 90%;\r\n\t\tmargin: 30px auto;\r\n\t\tpadding: 15px;\r\n\t\tborder-radius: 5px;\r\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\r\n\t}\r\n\t.employee::before,\r\n\t.employee::after {\r\n\t\tcontent: \"\";\r\n\t\tdisplay: block;\r\n\t\tclear: both;\r\n\t}\r\n\r\n\t.employee__avatar {\t\r\n\t\twidth: 30%;\r\n\t}\r\n\r\n\t.employee__avatar-container {\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\r\n\t\tmargin: 0 auto;\r\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\r\n\t\tborder-radius: 3px;\r\n\t\toverflow: hidden;\r\n\t}\r\n\r\n\t.avatar__overlay {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tz-index: 1;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tbackground-color: rgba(0, 0, 0, .3);\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\topacity: 0;\r\n\t\ttransition: opacity .3s;\r\n\t}\r\n\t.employee__avatar:hover .avatar__overlay  {\r\n\t\topacity: 1;\r\n\t}\r\n\t.employee__avatar img {\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t.employee__descr {\r\n\t\twidth: 70%;\r\n\t\tpadding:  10px 45px;\r\n\t\tfont-size: 18px;\r\n\t}\r\n\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(6);
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
			return this.item.avatar ? this.item.avatar : "/storage/avatars/no-avatar.jpg";
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
			var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(e) {
				var imagefile, formData, _ref4, data;

				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								imagefile = document.getElementById('avatar-file').files[0];

								if (imagefile) {
									_context2.next = 3;
									break;
								}

								return _context2.abrupt('return');

							case 3:
								_context2.prev = 3;
								formData = new FormData();

								formData.append("image", imagefile);
								_context2.next = 8;
								return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/employees/' + this.id + '/avatar', formData, {
									headers: {
										'Content-Type': 'multipart/form-data'
									}
								});

							case 8:
								_ref4 = _context2.sent;
								data = _ref4.data;

								this.item.avatar = data;
								_context2.next = 16;
								break;

							case 13:
								_context2.prev = 13;
								_context2.t0 = _context2['catch'](3);

								console.error('Не загрузился аватар', _context2.t0);

							case 16:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this, [[3, 13]]);
			}));

			function uploadPhoto(_x) {
				return _ref3.apply(this, arguments);
			}

			return uploadPhoto;
		}()
	}
});

/***/ }),

/***/ 226:
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
              attrs: { title: _vm.avatarMsg, selectedCallback: _vm.uploadPhoto }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("img", { attrs: { src: _vm.item.avatar, alt: "avatar" } })
      ])
    ]),
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
              "\n\t\t\t\t\t" + _vm._s(_vm.$t("change_data")) + "\n\t\t\t\t"
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
    require("vue-hot-reload-api")      .rerender("data-v-7375d975", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvU2hvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL1Nob3cudnVlPzBjNzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL1Nob3cudnVlPzU1MzEiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vY2xpZW50cy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvU2hvdy52dWU/ODU0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3TTtBQUN4TTtBQUNBO0FBQ0E7QUFDQSw0Q0FBZ1Q7QUFDaFQ7QUFDQSw4Q0FBcUw7QUFDckw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTs7QUFFQTtBQUNBLHFDQUE4TztBQUM5TztBQUNBO0FBQ0E7QUFDQSxrRUFBOEg7QUFDOUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SkFBNEosaUZBQWlGO0FBQzdPLHFLQUFxSyxpRkFBaUY7QUFDdFA7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EsK0NBQWdELG1DQUFtQyxvQ0FBb0Msc0NBQXNDLEdBQUcsdUJBQXVCLGtD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Q2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMTIuMDdhNTU4ZDEyMTgzYjY3YzNlMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTczNzVkOTc1XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTczNzVkOTc1XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNzM3NWQ5NzVcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxjbGllbnRzXFxcXFNob3cudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTczNzVkOTc1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzM3NWQ5NzVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vY2xpZW50cy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzM3NWQ5NzVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNTk2ZTJkYTRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTczNzVkOTc1XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzM3NWQ5NzVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03Mzc1ZDk3NVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDIyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbipbZGF0YS12LTczNzVkOTc1XSB7XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdCAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDs7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5oMltkYXRhLXYtNzM3NWQ5NzVdIHtcXG5cXHQtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcXG5cXHQgICAgZmxleC1iYXNpczogMTAwJTtcXG59XFxucFtkYXRhLXYtNzM3NWQ5NzVdLFxcbi5lbXBsb3llZVtkYXRhLXYtNzM3NWQ5NzVdLFxcbi5hdmF0YXJfX292ZXJsYXlbZGF0YS12LTczNzVkOTc1XSB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxucFtkYXRhLXYtNzM3NWQ5NzVdIHtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcblxcdCAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxufVxcbnBbZGF0YS12LTczNzVkOTc1XTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XFxufVxcbi5lbXBsb3llZVtkYXRhLXYtNzM3NWQ5NzVdIHtcXG5cXHQtbXMtZmxleC13cmFwOiB3cmFwO1xcblxcdC1vLWZsZXgtd3JhcDogd3JhcDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHRtYXJnaW46IDMwcHggYXV0bztcXG5cXHRwYWRkaW5nOiAxNXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcblxcdCAgICAgICAgYm94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxufVxcbi5lbXBsb3llZVtkYXRhLXYtNzM3NWQ5NzVdOjpiZWZvcmUsXFxuLmVtcGxveWVlW2RhdGEtdi03Mzc1ZDk3NV06OmFmdGVyIHtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjbGVhcjogYm90aDtcXG59XFxuLmVtcGxveWVlX19hdmF0YXJbZGF0YS12LTczNzVkOTc1XSB7XFx0XFxuXFx0d2lkdGg6IDMwJTtcXG59XFxuLmVtcGxveWVlX19hdmF0YXItY29udGFpbmVyW2RhdGEtdi03Mzc1ZDk3NV0ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcblxcdCAgICAgICAgYm94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5hdmF0YXJfX292ZXJsYXlbZGF0YS12LTczNzVkOTc1XSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuXFx0ICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcbn1cXG4uZW1wbG95ZWVfX2F2YXRhcjpob3ZlciAuYXZhdGFyX19vdmVybGF5W2RhdGEtdi03Mzc1ZDk3NV0gIHtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4uZW1wbG95ZWVfX2F2YXRhciBpbWdbZGF0YS12LTczNzVkOTc1XSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxufVxcbi5lbXBsb3llZV9fZGVzY3JbZGF0YS12LTczNzVkOTc1XSB7XFxuXFx0d2lkdGg6IDcwJTtcXG5cXHRwYWRkaW5nOiAgMTBweCA0NXB4O1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy9jcm0vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vY2xpZW50cy9TaG93LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBeUdBO0NBQ0EsK0JBQUE7U0FBQSx1QkFBQTtDQUNBLGtDQUFBO0NBQ0E7QUFFQTtDQUNBLDhCQUFBO0tBQUEsaUJBQUE7Q0FDQTtBQUVBOzs7Q0FJQSxtQkFBQTtDQUNBLGtCQUFBO0NBQ0EsaUJBQUE7Q0FDQSxxQkFBQTtDQUFBLHFCQUFBO0NBQUEsY0FBQTtDQUNBO0FBRUE7Q0FDQSwwQkFBQTtLQUFBLHVCQUFBO1NBQUEsK0JBQUE7Q0FDQSxVQUFBO0NBQ0EsY0FBQTtDQUNBLHlDQUFBO0NBQUEsaUNBQUE7Q0FDQTtBQUVBO0NBQ0EsMENBQUE7Q0FDQTtBQUNBO0NBR0Esb0JBQUE7Q0FDQSxtQkFBQTtDQUNBLGdCQUFBO0NBQ0EsV0FBQTtDQUNBLGtCQUFBO0NBQ0EsY0FBQTtDQUNBLG1CQUFBO0NBQ0EsK0NBQUE7U0FBQSx1Q0FBQTtDQUNBO0FBQ0E7O0NBRUEsWUFBQTtDQUNBLGVBQUE7Q0FDQSxZQUFBO0NBQ0E7QUFFQTtDQUNBLFdBQUE7Q0FDQTtBQUVBO0NBQ0EsbUJBQUE7Q0FDQSxZQUFBO0NBQ0EsZUFBQTtDQUNBLCtDQUFBO1NBQUEsdUNBQUE7Q0FDQSxtQkFBQTtDQUNBLGlCQUFBO0NBQ0E7QUFFQTtDQUNBLG1CQUFBO0NBQ0EsT0FBQTtDQUNBLFFBQUE7Q0FDQSxXQUFBO0NBQ0EseUJBQUE7S0FBQSxzQkFBQTtTQUFBLHdCQUFBO0NBQ0EsMEJBQUE7S0FBQSx1QkFBQTtTQUFBLG9CQUFBO0NBQ0Esb0NBQUE7Q0FDQSxZQUFBO0NBQ0EsYUFBQTtDQUNBLFdBQUE7Q0FDQSxnQ0FBQTtDQUFBLHdCQUFBO0NBQ0E7QUFDQTtDQUNBLFdBQUE7Q0FDQTtBQUNBO0NBQ0EsZUFBQTtDQUNBLFlBQUE7Q0FDQSxlQUFBO0NBQ0E7QUFFQTtDQUNBLFdBQUE7Q0FDQSxvQkFBQTtDQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlNob3cudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImVtcGxveWVlXFxcIj5cXHJcXG4gIFxcdDxoMj57eyAkdCgnZW1wbG95ZWUnKSB9fTwvaDI+XFxyXFxuICBcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fYXZhdGFyXFxcIj5cXHJcXG4gIFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXFxcIj5cXHJcXG4gIFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImF2YXRhcl9fb3ZlcmxheVxcXCI+XFxyXFxuICBcXHRcXHRcXHRcXHRcXHQ8dXBsb2FkLWJ1dHRvbiA6dGl0bGU9XFxcImF2YXRhck1zZ1xcXCIgOnNlbGVjdGVkQ2FsbGJhY2s9XFxcInVwbG9hZFBob3RvXFxcIj48L3VwbG9hZC1idXR0b24+XFxyXFxuICBcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG4gIFxcdFxcdFxcdFxcdDxpbWcgOnNyYz1cXFwiaXRlbS5hdmF0YXJcXFwiIGFsdD1cXFwiYXZhdGFyXFxcIj5cXHJcXG4gIFxcdFxcdFxcdDwvZGl2PlxcdFxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdCAgXFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2Rlc2NyXFxcIj5cXHJcXG5cXHQgIFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHQ8Yj57eyAkdCgnbmFtZScpIH19OjwvYj4gPGk+e3tpdGVtLmZpcnN0X25hbWV9fTwvaT5cXHJcXG5cXHQgIFxcdFxcdDwvcD5cXHJcXG5cXHQgIFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxyXFxuXFx0ICBcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0PGI+e3sgJHQoJ2xhc3RfbmFtZScpIH19OjwvYj4gPGk+e3tpdGVtLmxhc3RfbmFtZX19PC9pPlxcclxcblxcdCAgXFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXHJcXG5cXHQgIFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHQ8Yj57eyAkdCgncGF0cm9ueW1pYycpIH19OjwvYj4gPGk+e3tpdGVtLnBhdHJvbnltaWMgPyBpdGVtLnBhdHJvbnltaWMgOiAnJ319PC9pPlxcclxcblxcdCAgXFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXHJcXG5cXHQgIFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHQ8Yj57eyAkdCgncG9zaXRpb24nKSB9fTo8L2I+IDxpPnt7aXRlbS5wb3NpdGlvbn19PC9pPlxcclxcblxcdCAgXFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXHJcXG5cXHQgIFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHQ8Yj57eyAkdCgncGhvbmVfbnVtYmVyJykgfX06PC9iPiA8aT57e2l0ZW0ucGhvbmVfbnVtYmVyfX08L2k+XFxyXFxuXFx0ICBcXHRcXHQ8L3A+XFxyXFxuXFx0ICBcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcclxcblxcdCAgXFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXHJcXG5cXHQgIFxcdFxcdFxcdDxiPnt7ICR0KCdzYWxhcnknKSB9fTo8L2I+IDxpPnt7aXRlbS5zYWxhcnl9fSDRgNGD0LEuPC9pPlxcclxcblxcdCAgXFx0XFx0PC9wPlxcclxcblxcdCAgXFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXHJcXG5cXHQgIFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxyXFxuXFx0ICBcXHRcXHRcXHQ8Yj57eyAkdCgnYWRkcmVzcycpIH19OjwvYj4gPGk+e3tpdGVtLmFkZHJlc3N9fTwvaT5cXHJcXG5cXHQgIFxcdFxcdDwvcD5cXHJcXG5cXHQgIFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxyXFxuXFx0ICBcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcclxcblxcdCAgXFx0XFx0XFx0PGI+e3sgJHQoJ2JpcnRoZGF5JykgfX06PC9iPiA8aT57e2l0ZW0uYmlydGhkYXl9fTwvaT5cXHJcXG5cXHQgIFxcdFxcdDwvcD5cXHJcXG5cXHQgIFxcdFxcdDx2LWJ0blxcclxcblxcdFxcdFxcdFxcdCAgICBibG9ja1xcclxcblxcdFxcdFxcdFxcdCAgICA6dG89XFxcIntuYW1lOiAnZW1wbG95ZWVFZGl0JywgcGFyYW1zOiB7aWQ6IGl0ZW0uaWQsIGVtcGxveWVlOiBpdGVtfX1cXFwiXFxyXFxuXFx0XFx0XFx0XFx0ICA+XFxyXFxuXFx0XFx0XFx0XFx0XFx0e3sgJHQoJ2NoYW5nZV9kYXRhJykgfX1cXHJcXG5cXHRcXHRcXHRcXHQ8L3YtYnRuPlxcclxcblxcdCAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHRcXHRcXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuXFx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcXHJcXG5cXHRpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xcclxcblxcdGV4cG9ydCBkZWZhdWx0IHtcXHJcXG5cXHRcXHRwcm9wczoge1xcclxcblxcdFxcdFxcdGlkOiB7XFxyXFxuXFx0XFx0XFx0XFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcXHJcXG5cXHRcXHRcXHRcXHRyZXF1aXJlZDogdHJ1ZVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdGRhdGEoKSB7XFxyXFxuXFx0XFx0XFx0cmV0dXJuIHtcXHJcXG5cXHRcXHRcXHRcXHRpdGVtOiB7fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdGNvbXB1dGVkOiB7XFxyXFxuXFx0XFx0XFx0YXZhdGFyTXNnKCkge1xcclxcblxcdFxcdFxcdFxcdHJldHVybiAodGhpcy5pdGVtLmF2YXRhcikgPyB0aGlzLiR0KCdjaGFuZ2VfaW1hZ2UnKSA6IHRoaXMuJHQoJ2FkZF9pbWFnZScpO1xcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0YXZhdGFyKCkge1xcclxcblxcdFxcdFxcdFxcdHJldHVybiAodGhpcy5pdGVtLmF2YXRhcikgPyB0aGlzLml0ZW0uYXZhdGFyIDogXFxcIi9zdG9yYWdlL2F2YXRhcnMvbm8tYXZhdGFyLmpwZ1xcXCJcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHRcXHRjcmVhdGVkKCkge1xcclxcblxcdFxcdFxcdHRoaXMubG9hZCgpO1xcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0bWV0aG9kczoge1xcclxcblxcdFxcdFxcdGFzeW5jIGxvYWQoKSB7XFxyXFxuXFx0XFx0XFx0XFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkKTtcXHJcXG5cXHRcXHRcXHRcXHR0aGlzLml0ZW0gPSBkYXRhO1xcclxcblxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0YXN5bmMgdXBsb2FkUGhvdG8oZSkge1xcclxcblxcdFxcdFxcdFxcdGNvbnN0IGltYWdlZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmF0YXItZmlsZScpLmZpbGVzWzBdO1xcclxcblxcdFxcdFxcdFxcdGlmICghaW1hZ2VmaWxlKSByZXR1cm47XFxyXFxuXFx0XFx0ICAgIHRyeSB7XFxyXFxuXFx0XFx0ICAgIFxcdGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpOyAgICBcXHRcXHRcXHRcXHQgICAgXFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9ybURhdGEuYXBwZW5kKFxcXCJpbWFnZVxcXCIsIGltYWdlZmlsZSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCArICcvYXZhdGFyJywgZm9ybURhdGEsIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgIGhlYWRlcnM6IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICAgfVxcclxcblxcdFxcdFxcdFxcdFxcdCB9KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLml0ZW0uYXZhdGFyID0gZGF0YTtcXHJcXG4gICAgXFx0XFx0fSBjYXRjaCAoZSkge1xcclxcbiAgICAgIFxcdFxcdGNvbnNvbGUuZXJyb3IoJ9Cd0LUg0LfQsNCz0YDRg9C30LjQu9GB0Y8g0LDQstCw0YLQsNGAJywgZSlcXHJcXG4gICAgXFx0XFx0fVxcdFxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuXFx0KiB7XFxyXFxuXFx0XFx0Ym94LXNpemluZzogYm9yZGVyLWJveDs7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRoMiB7XFxyXFxuXFx0XFx0ZmxleC1iYXNpczogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0cCxcXHJcXG5cXHQuZW1wbG95ZWUsXFxyXFxuXFx0LmF2YXRhcl9fb3ZlcmxheSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IC1tb3otZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtbXMtZmxleDtcXHJcXG5cXHRcXHRkaXNwbGF5OiAtby1mbGV4O1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdHAge1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0cDpob3ZlciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XFxyXFxuXFx0fVxcclxcblxcdC5lbXBsb3llZSB7XFxyXFxuXFx0XFx0LXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0LW1vei1mbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRcXHQtby1mbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdFxcdHdpZHRoOiA5MCU7XFxyXFxuXFx0XFx0bWFyZ2luOiAzMHB4IGF1dG87XFxyXFxuXFx0XFx0cGFkZGluZzogMTVweDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxyXFxuXFx0fVxcclxcblxcdC5lbXBsb3llZTo6YmVmb3JlLFxcclxcblxcdC5lbXBsb3llZTo6YWZ0ZXIge1xcclxcblxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdGNsZWFyOiBib3RoO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZW1wbG95ZWVfX2F2YXRhciB7XFx0XFxyXFxuXFx0XFx0d2lkdGg6IDMwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmVtcGxveWVlX19hdmF0YXItY29udGFpbmVyIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5hdmF0YXJfX292ZXJsYXkge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHR6LWluZGV4OiAxO1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxyXFxuXFx0fVxcclxcblxcdC5lbXBsb3llZV9fYXZhdGFyOmhvdmVyIC5hdmF0YXJfX292ZXJsYXkgIHtcXHJcXG5cXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdH1cXHJcXG5cXHQuZW1wbG95ZWVfX2F2YXRhciBpbWcge1xcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZW1wbG95ZWVfX2Rlc2NyIHtcXHJcXG5cXHRcXHR3aWR0aDogNzAlO1xcclxcblxcdFxcdHBhZGRpbmc6ICAxMHB4IDQ1cHg7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03Mzc1ZDk3NVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDIyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJlbXBsb3llZVwiPlxyXG4gIFx0PGgyPnt7ICR0KCdlbXBsb3llZScpIH19PC9oMj5cclxuICBcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXJcIj5cclxuICBcdFx0XHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcIj5cclxuICBcdFx0XHRcdDxkaXYgY2xhc3M9XCJhdmF0YXJfX292ZXJsYXlcIj5cclxuICBcdFx0XHRcdFx0PHVwbG9hZC1idXR0b24gOnRpdGxlPVwiYXZhdGFyTXNnXCIgOnNlbGVjdGVkQ2FsbGJhY2s9XCJ1cGxvYWRQaG90b1wiPjwvdXBsb2FkLWJ1dHRvbj5cclxuICBcdFx0XHRcdDwvZGl2PlxyXG4gIFx0XHRcdFx0PGltZyA6c3JjPVwiaXRlbS5hdmF0YXJcIiBhbHQ9XCJhdmF0YXJcIj5cclxuICBcdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHQgIFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19kZXNjclwiPlxyXG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cclxuXHQgIFx0XHRcdDxiPnt7ICR0KCduYW1lJykgfX06PC9iPiA8aT57e2l0ZW0uZmlyc3RfbmFtZX19PC9pPlxyXG5cdCAgXHRcdDwvcD5cclxuXHQgIFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cclxuXHQgIFx0XHRcdDxiPnt7ICR0KCdsYXN0X25hbWUnKSB9fTo8L2I+IDxpPnt7aXRlbS5sYXN0X25hbWV9fTwvaT5cclxuXHQgIFx0XHQ8L3A+XHJcblx0ICBcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cclxuXHQgIFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XHJcblx0ICBcdFx0XHQ8Yj57eyAkdCgncGF0cm9ueW1pYycpIH19OjwvYj4gPGk+e3tpdGVtLnBhdHJvbnltaWMgPyBpdGVtLnBhdHJvbnltaWMgOiAnJ319PC9pPlxyXG5cdCAgXHRcdDwvcD5cclxuXHQgIFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cclxuXHQgIFx0XHRcdDxiPnt7ICR0KCdwb3NpdGlvbicpIH19OjwvYj4gPGk+e3tpdGVtLnBvc2l0aW9ufX08L2k+XHJcblx0ICBcdFx0PC9wPlxyXG5cdCAgXHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XHJcblx0ICBcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxyXG5cdCAgXHRcdFx0PGI+e3sgJHQoJ3Bob25lX251bWJlcicpIH19OjwvYj4gPGk+e3tpdGVtLnBob25lX251bWJlcn19PC9pPlxyXG5cdCAgXHRcdDwvcD5cclxuXHQgIFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cclxuXHQgIFx0XHRcdDxiPnt7ICR0KCdzYWxhcnknKSB9fTo8L2I+IDxpPnt7aXRlbS5zYWxhcnl9fSDRgNGD0LEuPC9pPlxyXG5cdCAgXHRcdDwvcD5cclxuXHQgIFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cclxuXHQgIFx0XHRcdDxiPnt7ICR0KCdhZGRyZXNzJykgfX06PC9iPiA8aT57e2l0ZW0uYWRkcmVzc319PC9pPlxyXG5cdCAgXHRcdDwvcD5cclxuXHQgIFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxyXG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cclxuXHQgIFx0XHRcdDxiPnt7ICR0KCdiaXJ0aGRheScpIH19OjwvYj4gPGk+e3tpdGVtLmJpcnRoZGF5fX08L2k+XHJcblx0ICBcdFx0PC9wPlxyXG5cdCAgXHRcdDx2LWJ0blxyXG5cdFx0XHRcdCAgICBibG9ja1xyXG5cdFx0XHRcdCAgICA6dG89XCJ7bmFtZTogJ2VtcGxveWVlRWRpdCcsIHBhcmFtczoge2lkOiBpdGVtLmlkLCBlbXBsb3llZTogaXRlbX19XCJcclxuXHRcdFx0XHQgID5cclxuXHRcdFx0XHRcdHt7ICR0KCdjaGFuZ2VfZGF0YScpIH19XHJcblx0XHRcdFx0PC92LWJ0bj5cclxuXHQgIDwvZGl2PlxyXG4gIDwvZGl2Plx0XHRcclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcclxuXHRpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGlkOiB7XHJcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpdGVtOiB7fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0YXZhdGFyTXNnKCkge1xyXG5cdFx0XHRcdHJldHVybiAodGhpcy5pdGVtLmF2YXRhcikgPyB0aGlzLiR0KCdjaGFuZ2VfaW1hZ2UnKSA6IHRoaXMuJHQoJ2FkZF9pbWFnZScpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhdmF0YXIoKSB7XHJcblx0XHRcdFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuaXRlbS5hdmF0YXIgOiBcIi9zdG9yYWdlL2F2YXRhcnMvbm8tYXZhdGFyLmpwZ1wiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHR0aGlzLmxvYWQoKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGFzeW5jIGxvYWQoKSB7XHJcblx0XHRcdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkKTtcclxuXHRcdFx0XHR0aGlzLml0ZW0gPSBkYXRhO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyB1cGxvYWRQaG90byhlKSB7XHJcblx0XHRcdFx0Y29uc3QgaW1hZ2VmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YXRhci1maWxlJykuZmlsZXNbMF07XHJcblx0XHRcdFx0aWYgKCFpbWFnZWZpbGUpIHJldHVybjtcclxuXHRcdCAgICB0cnkge1xyXG5cdFx0ICAgIFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7ICAgIFx0XHRcdFx0ICAgIFx0XHJcblx0XHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZWZpbGUpO1xyXG5cdFx0XHRcdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCArICcvYXZhdGFyJywgZm9ybURhdGEsIHtcclxuXHRcdFx0XHRcdCAgICAgaGVhZGVyczoge1xyXG5cdFx0XHRcdFx0ICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuXHRcdFx0XHRcdCAgICAgfVxyXG5cdFx0XHRcdFx0IH0pO1xyXG5cdFx0XHRcdFx0dGhpcy5pdGVtLmF2YXRhciA9IGRhdGE7XHJcbiAgICBcdFx0fSBjYXRjaCAoZSkge1xyXG4gICAgICBcdFx0Y29uc29sZS5lcnJvcign0J3QtSDQt9Cw0LPRgNGD0LfQuNC70YHRjyDQsNCy0LDRgtCw0YAnLCBlKVxyXG4gICAgXHRcdH1cdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0KiB7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94OztcclxuXHRcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHR9XHJcblxyXG5cdGgyIHtcclxuXHRcdGZsZXgtYmFzaXM6IDEwMCU7XHJcblx0fVxyXG5cclxuXHRwLFxyXG5cdC5lbXBsb3llZSxcclxuXHQuYXZhdGFyX19vdmVybGF5IHtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tb3otZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW8tZmxleDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cclxuXHRwIHtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcclxuXHR9XHJcblxyXG5cdHA6aG92ZXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XHJcblx0fVxyXG5cdC5lbXBsb3llZSB7XHJcblx0XHQtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuXHRcdC1tb3otZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcclxuXHRcdC1vLWZsZXgtd3JhcDogd3JhcDtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdHdpZHRoOiA5MCU7XHJcblx0XHRtYXJnaW46IDMwcHggYXV0bztcclxuXHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHR9XHJcblx0LmVtcGxveWVlOjpiZWZvcmUsXHJcblx0LmVtcGxveWVlOjphZnRlciB7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRjbGVhcjogYm90aDtcclxuXHR9XHJcblxyXG5cdC5lbXBsb3llZV9fYXZhdGFyIHtcdFxyXG5cdFx0d2lkdGg6IDMwJTtcclxuXHR9XHJcblxyXG5cdC5lbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0Ym94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHJcblx0LmF2YXRhcl9fb3ZlcmxheSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XHJcblx0fVxyXG5cdC5lbXBsb3llZV9fYXZhdGFyOmhvdmVyIC5hdmF0YXJfX292ZXJsYXkgIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cdC5lbXBsb3llZV9fYXZhdGFyIGltZyB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0fVxyXG5cclxuXHQuZW1wbG95ZWVfX2Rlc2NyIHtcclxuXHRcdHdpZHRoOiA3MCU7XHJcblx0XHRwYWRkaW5nOiAgMTBweCA0NXB4O1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdH1cclxuXHJcblxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL1Nob3cudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlXCIgfSwgW1xuICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiZW1wbG95ZWVcIikpKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fYXZhdGFyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImF2YXRhcl9fb3ZlcmxheVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1cGxvYWQtYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS5hdmF0YXJNc2csIHNlbGVjdGVkQ2FsbGJhY2s6IF92bS51cGxvYWRQaG90byB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLml0ZW0uYXZhdGFyLCBhbHQ6IFwiYXZhdGFyXCIgfSB9KVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2Rlc2NyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm5hbWVcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uZmlyc3RfbmFtZSkpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwibGFzdF9uYW1lXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmxhc3RfbmFtZSkpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwicGF0cm9ueW1pY1wiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnBhdHJvbnltaWMgPyBfdm0uaXRlbS5wYXRyb255bWljIDogXCJcIikpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwicG9zaXRpb25cIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ucG9zaXRpb24pKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInBob25lX251bWJlclwiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5waG9uZV9udW1iZXIpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInNhbGFyeVwiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5zYWxhcnkpICsgXCIg0YDRg9CxLlwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImFkZHJlc3NcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uYWRkcmVzcykpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiYmlydGhkYXlcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uYmlydGhkYXkpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZUVkaXRcIixcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IF92bS5pdGVtLmlkLCBlbXBsb3llZTogX3ZtLml0ZW0gfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIgKyBfdm0uX3MoX3ZtLiR0KFwiY2hhbmdlX2RhdGFcIikpICsgXCJcXG5cXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTczNzVkOTc1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03Mzc1ZDk3NVwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiJdLCJzb3VyY2VSb290IjoiIn0=