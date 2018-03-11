webpackJsonp([6],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(186)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(188)
/* template */
var __vue_template__ = __webpack_require__(189)
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

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
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

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n}\np[data-v-5eb87cd0],\n.employee[data-v-5eb87cd0],\n.avatar__overlay[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\np[data-v-5eb87cd0] {\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n.employee[data-v-5eb87cd0] {\n\t-ms-flex-wrap: wrap;\n\t-o-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\twidth: 90%;\n\tmargin: 30px auto;\n\tpadding: 15px;\n\tborder-radius: 5px;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n}\n.employee[data-v-5eb87cd0]::before,\n.employee[data-v-5eb87cd0]::after {\n\tcontent: \"\";\n\tdisplay: block;\n\tclear: both;\n}\n.employee__avatar[data-v-5eb87cd0] {\t\n\twidth: 30%;\n}\n.employee__avatar-container[data-v-5eb87cd0] {\n\tposition: relative;\n\twidth: 100%;\n\tmargin: 0 auto;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\tborder-radius: 3px;\n\toverflow: hidden;\n}\n.avatar__overlay[data-v-5eb87cd0] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tbackground-color: rgba(0, 0, 0, .3);\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\t-webkit-transition: opacity .3s;\n\ttransition: opacity .3s;\n}\n.employee__avatar:hover .avatar__overlay[data-v-5eb87cd0]  {\n\topacity: 1;\n}\n.employee__avatar img[data-v-5eb87cd0] {\n\tdisplay: block;\n\twidth: 100%;\n\tmargin: 0 auto;\n}\n.employee__descr[data-v-5eb87cd0] {\n\twidth: 70%;\n\tpadding:  10px 45px;\n\tfont-size: 18px;\n}\n\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AA2GA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA;AAEA;;;CAIA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA;AACA;CAGA,oBAAA;CACA,mBAAA;CACA,gBAAA;CACA,WAAA;CACA,kBAAA;CACA,cAAA;CACA,mBAAA;CACA,+CAAA;SAAA,uCAAA;CACA;AACA;;CAEA,YAAA;CACA,eAAA;CACA,YAAA;CACA;AAEA;CACA,WAAA;CACA;AAEA;CACA,mBAAA;CACA,YAAA;CACA,eAAA;CACA,+CAAA;SAAA,uCAAA;CACA,mBAAA;CACA,iBAAA;CACA;AAEA;CACA,mBAAA;CACA,OAAA;CACA,QAAA;CACA,WAAA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,oBAAA;CACA,oCAAA;CACA,YAAA;CACA,aAAA;CACA,WAAA;CACA,gCAAA;CAAA,wBAAA;CACA;AACA;CACA,WAAA;CACA;AACA;CACA,eAAA;CACA,YAAA;CACA,eAAA;CACA;AAEA;CACA,WAAA;CACA,oBAAA;CACA,gBAAA;CACA","file":"Show.vue","sourcesContent":["<template>\n  <div class=\"employee\">\n  \t<h2>{{ $t('employee') }}</h2>\n  \t\t<div class=\"employee__avatar\">\n  \t\t\t<div class=\"employee__avatar-container\">\n  \t\t\t\t<div class=\"avatar__overlay\">\n  \t\t\t\t\t<upload-button :title=\"avatarMsg\" :selectedCallback=\"uploadPhoto\"></upload-button>\n  \t\t\t\t</div>\n  \t\t\t\t<img :src=\"item.avatar ? item.avatar : 'http://dragene.no/wp-content/uploads/2016/06/default1.jpg'\" alt=\"avatar\">\n  \t\t\t</div>\t\n\t\t\t</div>\n\t  \t<div class=\"employee__descr\">\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('name') }}:</b> <i>{{item.first_name}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('last_name') }}:</b> <i>{{item.last_name}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('patronymic') }}:</b> <i>{{item.patronymic ? item.patronymic : ''}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('position') }}:</b> <i>{{item.position}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('phone_number') }}:</b> <i>{{item.phone_number}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('salary') }}:</b> <i>{{item.salary}} руб.</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('address') }}:</b> <i>{{item.address}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('birthday') }}:</b> <i>{{item.birthday}}</i>\n\t  \t\t</p>\n\t  \t\t<v-btn\n\t\t\t\t    block\n\t\t\t\t    :to=\"{name: 'employeeEdit', params: {id: item.id, employee: item}}\"\n\t\t\t\t  >\n\t\t\t\t\t{{ $t('change_data') }}\n\t\t\t\t</v-btn>\n\t  </div>\n  </div>\t\t\n</template>\n\n<script>\n\timport {mapActions, mapGetters} from 'vuex';\n\timport axios from 'axios';\n\texport default {\n\t\tprops: {\n\t\t\tid: {\n\t\t\t\ttype: [Number, String],\n\t\t\t\trequired: true\n\t\t\t}\n\t\t},\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\titem: {}\n\t\t\t}\n\t\t},\n\t\tcomputed: {\n\t\t\tavatarMsg() {\n\t\t\t\treturn (this.item.avatar) ? this.$t('change_image') : this.$t('add_image');\n\t\t\t},\n\t\t\tavatar() {\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"http://dragene.no/wp-content/uploads/2016/06/default1.jpg\"\n\t\t\t}\n\t\t},\n\t\tcreated() {\n\t\t\tthis.load();\n\t\t},\n\t\tmethods: {\n\t\t\tasync load() {\n\t\t\t\tconst { data } = await axios.get('/api/employees/' + this.id);\n\t\t\t\tthis.item = data;\n\t\t\t},\n\t\t\tasync uploadPhoto(e) {\n\t\t    try {\n\t\t    \tlet formData = new FormData(),\n\t\t    \t\t\timagefile = document.getElementById('avatar-file').files[0];\n\t\t    \tif (!imagefile) return;\n\t\t\t\t\tformData.append(\"image\", imagefile);\n\n\t\t\t\t\tconst { data } = await axios.put('/api/employees/' + this.id, formData, {\n\t\t\t\t\t     headers: {\n\t\t\t\t\t       'Content-Type': 'multipart/form-data'\n\t\t\t\t\t     }\n\t\t\t\t\t });\n\t\t\t\t\tconsole.log(data)\n\t\t\t\t\t//this.item.avatar = data;\n    \t\t} catch (e) {\n      \t\tconsole.error('Не загрузился сотрудник', e)\n    \t\t}\t\n\t\t\t}\n\t\t}\n\t}\n</script>\n\n<style scoped>\n\t* {\n\t\tbox-sizing: border-box;;\n\t\tfont-family: 'Roboto', sans-serif;\n\t}\n\n\th2 {\n\t\tflex-basis: 100%;\n\t}\n\n\tp,\n\t.employee,\n\t.avatar__overlay {\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: -o-flex;\n\t\tdisplay: flex;\n\t}\n\n\tp {\n\t\tjustify-content: space-between;\n\t\tmargin: 0;\n\t\tpadding: 10px;\n\t\ttransition: background-color .3s;\n\t}\n\n\tp:hover {\n\t\tbackground-color: rgba(255, 255, 255, .1);\n\t}\n\t.employee {\n\t\t-webkit-flex-wrap: wrap;\n\t\t-moz-flex-wrap: wrap;\n\t\t-ms-flex-wrap: wrap;\n\t\t-o-flex-wrap: wrap;\n\t\tflex-wrap: wrap;\n\t\twidth: 90%;\n\t\tmargin: 30px auto;\n\t\tpadding: 15px;\n\t\tborder-radius: 5px;\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t}\n\t.employee::before,\n\t.employee::after {\n\t\tcontent: \"\";\n\t\tdisplay: block;\n\t\tclear: both;\n\t}\n\n\t.employee__avatar {\t\n\t\twidth: 30%;\n\t}\n\n\t.employee__avatar-container {\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\tmargin: 0 auto;\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t\tborder-radius: 3px;\n\t\toverflow: hidden;\n\t}\n\n\t.avatar__overlay {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tz-index: 1;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tbackground-color: rgba(0, 0, 0, .3);\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\topacity: 0;\n\t\ttransition: opacity .3s;\n\t}\n\t.employee__avatar:hover .avatar__overlay  {\n\t\topacity: 1;\n\t}\n\t.employee__avatar img {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmargin: 0 auto;\n\t}\n\n\t.employee__descr {\n\t\twidth: 70%;\n\t\tpadding:  10px 45px;\n\t\tfont-size: 18px;\n\t}\n\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
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
			var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(e) {
				var formData, imagefile, _ref4, data;

				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.prev = 0;
								formData = new FormData(), imagefile = document.getElementById('avatar-file').files[0];

								if (imagefile) {
									_context2.next = 4;
									break;
								}

								return _context2.abrupt('return');

							case 4:
								formData.append("image", imagefile);

								_context2.next = 7;
								return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.put('/api/employees/' + this.id, formData, {
									headers: {
										'Content-Type': 'multipart/form-data'
									}
								});

							case 7:
								_ref4 = _context2.sent;
								data = _ref4.data;

								console.log(data);
								//this.item.avatar = data;
								_context2.next = 15;
								break;

							case 12:
								_context2.prev = 12;
								_context2.t0 = _context2['catch'](0);

								console.error('Не загрузился сотрудник', _context2.t0);

							case 15:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this, [[0, 12]]);
			}));

			function uploadPhoto(_x) {
				return _ref3.apply(this, arguments);
			}

			return uploadPhoto;
		}()
	}
});

/***/ }),

/***/ 189:
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
        _c("img", {
          attrs: {
            src: _vm.item.avatar
              ? _vm.item.avatar
              : "http://dragene.no/wp-content/uploads/2016/06/default1.jpg",
            alt: "avatar"
          }
        })
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
    require("vue-hot-reload-api")      .rerender("data-v-5eb87cd0", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0Esa0VBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLCtDQUFnRCxtQ0FBbUMsb0NBQW9DLHNDQUFzQyxHQUFH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QixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy82LmQyZmVhMGQ0NDMzYjQ3MzQ0YmFjLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTVlYjg3Y2QwXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcZW1wbG95ZWVzXFxcXFNob3cudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVlYjg3Y2QwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWViODdjZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjE0ZTRhMDNjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZWI4N2NkMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuKltkYXRhLXYtNWViODdjZDBdIHtcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0ICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OztcXG5cXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbmgyW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcblxcdCAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbn1cXG5wW2RhdGEtdi01ZWI4N2NkMF0sXFxuLmVtcGxveWVlW2RhdGEtdi01ZWI4N2NkMF0sXFxuLmF2YXRhcl9fb3ZlcmxheVtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5wW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuXFx0ICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuXFx0ICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG59XFxucFtkYXRhLXYtNWViODdjZDBdOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXG59XFxuLmVtcGxveWVlW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuXFx0LW8tZmxleC13cmFwOiB3cmFwO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG1hcmdpbjogMzBweCBhdXRvO1xcblxcdHBhZGRpbmc6IDE1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuXFx0ICAgICAgICBib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG59XFxuLmVtcGxveWVlW2RhdGEtdi01ZWI4N2NkMF06OmJlZm9yZSxcXG4uZW1wbG95ZWVbZGF0YS12LTVlYjg3Y2QwXTo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNsZWFyOiBib3RoO1xcbn1cXG4uZW1wbG95ZWVfX2F2YXRhcltkYXRhLXYtNWViODdjZDBdIHtcXHRcXG5cXHR3aWR0aDogMzAlO1xcbn1cXG4uZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuXFx0ICAgICAgICBib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmF2YXRhcl9fb3ZlcmxheVtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0ei1pbmRleDogMTtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyOmhvdmVyIC5hdmF0YXJfX292ZXJsYXlbZGF0YS12LTVlYjg3Y2QwXSAge1xcblxcdG9wYWNpdHk6IDE7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyIGltZ1tkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG59XFxuLmVtcGxveWVlX19kZXNjcltkYXRhLXYtNWViODdjZDBdIHtcXG5cXHR3aWR0aDogNzAlO1xcblxcdHBhZGRpbmc6ICAxMHB4IDQ1cHg7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMkdBO0NBQ0EsK0JBQUE7U0FBQSx1QkFBQTtDQUNBLGtDQUFBO0NBQ0E7QUFFQTtDQUNBLDhCQUFBO0tBQUEsaUJBQUE7Q0FDQTtBQUVBOzs7Q0FJQSxtQkFBQTtDQUNBLGtCQUFBO0NBQ0EsaUJBQUE7Q0FDQSxxQkFBQTtDQUFBLHFCQUFBO0NBQUEsY0FBQTtDQUNBO0FBRUE7Q0FDQSwwQkFBQTtLQUFBLHVCQUFBO1NBQUEsK0JBQUE7Q0FDQSxVQUFBO0NBQ0EsY0FBQTtDQUNBLHlDQUFBO0NBQUEsaUNBQUE7Q0FDQTtBQUVBO0NBQ0EsMENBQUE7Q0FDQTtBQUNBO0NBR0Esb0JBQUE7Q0FDQSxtQkFBQTtDQUNBLGdCQUFBO0NBQ0EsV0FBQTtDQUNBLGtCQUFBO0NBQ0EsY0FBQTtDQUNBLG1CQUFBO0NBQ0EsK0NBQUE7U0FBQSx1Q0FBQTtDQUNBO0FBQ0E7O0NBRUEsWUFBQTtDQUNBLGVBQUE7Q0FDQSxZQUFBO0NBQ0E7QUFFQTtDQUNBLFdBQUE7Q0FDQTtBQUVBO0NBQ0EsbUJBQUE7Q0FDQSxZQUFBO0NBQ0EsZUFBQTtDQUNBLCtDQUFBO1NBQUEsdUNBQUE7Q0FDQSxtQkFBQTtDQUNBLGlCQUFBO0NBQ0E7QUFFQTtDQUNBLG1CQUFBO0NBQ0EsT0FBQTtDQUNBLFFBQUE7Q0FDQSxXQUFBO0NBQ0EseUJBQUE7S0FBQSxzQkFBQTtTQUFBLHdCQUFBO0NBQ0EsMEJBQUE7S0FBQSx1QkFBQTtTQUFBLG9CQUFBO0NBQ0Esb0NBQUE7Q0FDQSxZQUFBO0NBQ0EsYUFBQTtDQUNBLFdBQUE7Q0FDQSxnQ0FBQTtDQUFBLHdCQUFBO0NBQ0E7QUFDQTtDQUNBLFdBQUE7Q0FDQTtBQUNBO0NBQ0EsZUFBQTtDQUNBLFlBQUE7Q0FDQSxlQUFBO0NBQ0E7QUFFQTtDQUNBLFdBQUE7Q0FDQSxvQkFBQTtDQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlNob3cudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImVtcGxveWVlXFxcIj5cXG4gIFxcdDxoMj57eyAkdCgnZW1wbG95ZWUnKSB9fTwvaDI+XFxuICBcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fYXZhdGFyXFxcIj5cXG4gIFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXFxcIj5cXG4gIFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImF2YXRhcl9fb3ZlcmxheVxcXCI+XFxuICBcXHRcXHRcXHRcXHRcXHQ8dXBsb2FkLWJ1dHRvbiA6dGl0bGU9XFxcImF2YXRhck1zZ1xcXCIgOnNlbGVjdGVkQ2FsbGJhY2s9XFxcInVwbG9hZFBob3RvXFxcIj48L3VwbG9hZC1idXR0b24+XFxuICBcXHRcXHRcXHRcXHQ8L2Rpdj5cXG4gIFxcdFxcdFxcdFxcdDxpbWcgOnNyYz1cXFwiaXRlbS5hdmF0YXIgPyBpdGVtLmF2YXRhciA6ICdodHRwOi8vZHJhZ2VuZS5uby93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNi9kZWZhdWx0MS5qcGcnXFxcIiBhbHQ9XFxcImF2YXRhclxcXCI+XFxuICBcXHRcXHRcXHQ8L2Rpdj5cXHRcXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHQgIFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19kZXNjclxcXCI+XFxuXFx0ICBcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0PGI+e3sgJHQoJ25hbWUnKSB9fTo8L2I+IDxpPnt7aXRlbS5maXJzdF9uYW1lfX08L2k+XFxuXFx0ICBcXHRcXHQ8L3A+XFxuXFx0ICBcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcblxcdCAgXFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXG5cXHQgIFxcdFxcdFxcdDxiPnt7ICR0KCdsYXN0X25hbWUnKSB9fTo8L2I+IDxpPnt7aXRlbS5sYXN0X25hbWV9fTwvaT5cXG5cXHQgIFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuXFx0ICBcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0PGI+e3sgJHQoJ3BhdHJvbnltaWMnKSB9fTo8L2I+IDxpPnt7aXRlbS5wYXRyb255bWljID8gaXRlbS5wYXRyb255bWljIDogJyd9fTwvaT5cXG5cXHQgIFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuXFx0ICBcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0PGI+e3sgJHQoJ3Bvc2l0aW9uJykgfX06PC9iPiA8aT57e2l0ZW0ucG9zaXRpb259fTwvaT5cXG5cXHQgIFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuXFx0ICBcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0PGI+e3sgJHQoJ3Bob25lX251bWJlcicpIH19OjwvYj4gPGk+e3tpdGVtLnBob25lX251bWJlcn19PC9pPlxcblxcdCAgXFx0XFx0PC9wPlxcblxcdCAgXFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXG5cXHQgIFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxuXFx0ICBcXHRcXHRcXHQ8Yj57eyAkdCgnc2FsYXJ5JykgfX06PC9iPiA8aT57e2l0ZW0uc2FsYXJ5fX0g0YDRg9CxLjwvaT5cXG5cXHQgIFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuXFx0ICBcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0PGI+e3sgJHQoJ2FkZHJlc3MnKSB9fTo8L2I+IDxpPnt7aXRlbS5hZGRyZXNzfX08L2k+XFxuXFx0ICBcXHRcXHQ8L3A+XFxuXFx0ICBcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcblxcdCAgXFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXG5cXHQgIFxcdFxcdFxcdDxiPnt7ICR0KCdiaXJ0aGRheScpIH19OjwvYj4gPGk+e3tpdGVtLmJpcnRoZGF5fX08L2k+XFxuXFx0ICBcXHRcXHQ8L3A+XFxuXFx0ICBcXHRcXHQ8di1idG5cXG5cXHRcXHRcXHRcXHQgICAgYmxvY2tcXG5cXHRcXHRcXHRcXHQgICAgOnRvPVxcXCJ7bmFtZTogJ2VtcGxveWVlRWRpdCcsIHBhcmFtczoge2lkOiBpdGVtLmlkLCBlbXBsb3llZTogaXRlbX19XFxcIlxcblxcdFxcdFxcdFxcdCAgPlxcblxcdFxcdFxcdFxcdFxcdHt7ICR0KCdjaGFuZ2VfZGF0YScpIH19XFxuXFx0XFx0XFx0XFx0PC92LWJ0bj5cXG5cXHQgIDwvZGl2PlxcbiAgPC9kaXY+XFx0XFx0XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XFxuXFx0aW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcXG5cXHRleHBvcnQgZGVmYXVsdCB7XFxuXFx0XFx0cHJvcHM6IHtcXG5cXHRcXHRcXHRpZDoge1xcblxcdFxcdFxcdFxcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXFxuXFx0XFx0XFx0XFx0cmVxdWlyZWQ6IHRydWVcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHRkYXRhKCkge1xcblxcdFxcdFxcdHJldHVybiB7XFxuXFx0XFx0XFx0XFx0aXRlbToge31cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHRjb21wdXRlZDoge1xcblxcdFxcdFxcdGF2YXRhck1zZygpIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy4kdCgnY2hhbmdlX2ltYWdlJykgOiB0aGlzLiR0KCdhZGRfaW1hZ2UnKTtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdFxcdGF2YXRhcigpIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy5pdGVtLmF2YXRhciA6IFxcXCJodHRwOi8vZHJhZ2VuZS5uby93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNi9kZWZhdWx0MS5qcGdcXFwiXFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0Y3JlYXRlZCgpIHtcXG5cXHRcXHRcXHR0aGlzLmxvYWQoKTtcXG5cXHRcXHR9LFxcblxcdFxcdG1ldGhvZHM6IHtcXG5cXHRcXHRcXHRhc3luYyBsb2FkKCkge1xcblxcdFxcdFxcdFxcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCk7XFxuXFx0XFx0XFx0XFx0dGhpcy5pdGVtID0gZGF0YTtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdFxcdGFzeW5jIHVwbG9hZFBob3RvKGUpIHtcXG5cXHRcXHQgICAgdHJ5IHtcXG5cXHRcXHQgICAgXFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCksXFxuXFx0XFx0ICAgIFxcdFxcdFxcdGltYWdlZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmF0YXItZmlsZScpLmZpbGVzWzBdO1xcblxcdFxcdCAgICBcXHRpZiAoIWltYWdlZmlsZSkgcmV0dXJuO1xcblxcdFxcdFxcdFxcdFxcdGZvcm1EYXRhLmFwcGVuZChcXFwiaW1hZ2VcXFwiLCBpbWFnZWZpbGUpO1xcblxcblxcdFxcdFxcdFxcdFxcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucHV0KCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCwgZm9ybURhdGEsIHtcXG5cXHRcXHRcXHRcXHRcXHQgICAgIGhlYWRlcnM6IHtcXG5cXHRcXHRcXHRcXHRcXHQgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xcblxcdFxcdFxcdFxcdFxcdCAgICAgfVxcblxcdFxcdFxcdFxcdFxcdCB9KTtcXG5cXHRcXHRcXHRcXHRcXHRjb25zb2xlLmxvZyhkYXRhKVxcblxcdFxcdFxcdFxcdFxcdC8vdGhpcy5pdGVtLmF2YXRhciA9IGRhdGE7XFxuICAgIFxcdFxcdH0gY2F0Y2ggKGUpIHtcXG4gICAgICBcXHRcXHRjb25zb2xlLmVycm9yKCfQndC1INC30LDQs9GA0YPQt9C40LvRgdGPINGB0L7RgtGA0YPQtNC90LjQuicsIGUpXFxuICAgIFxcdFxcdH1cXHRcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcblxcdCoge1xcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcblxcdFxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHR9XFxuXFxuXFx0aDIge1xcblxcdFxcdGZsZXgtYmFzaXM6IDEwMCU7XFxuXFx0fVxcblxcblxcdHAsXFxuXFx0LmVtcGxveWVlLFxcblxcdC5hdmF0YXJfX292ZXJsYXkge1xcblxcdFxcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG5cXHRcXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdH1cXG5cXG5cXHRwIHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0XFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxuXFx0fVxcblxcblxcdHA6aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xcblxcdH1cXG5cXHQuZW1wbG95ZWUge1xcblxcdFxcdC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdC1tb3otZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0LW8tZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHR3aWR0aDogOTAlO1xcblxcdFxcdG1hcmdpbjogMzBweCBhdXRvO1xcblxcdFxcdHBhZGRpbmc6IDE1cHg7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdFxcdGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcblxcdH1cXG5cXHQuZW1wbG95ZWU6OmJlZm9yZSxcXG5cXHQuZW1wbG95ZWU6OmFmdGVyIHtcXG5cXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRjbGVhcjogYm90aDtcXG5cXHR9XFxuXFxuXFx0LmVtcGxveWVlX19hdmF0YXIge1xcdFxcblxcdFxcdHdpZHRoOiAzMCU7XFxuXFx0fVxcblxcblxcdC5lbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lciB7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcblxcdFxcdGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdH1cXG5cXG5cXHQuYXZhdGFyX19vdmVybGF5IHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0dG9wOiAwO1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0ei1pbmRleDogMTtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdFxcdHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcblxcdH1cXG5cXHQuZW1wbG95ZWVfX2F2YXRhcjpob3ZlciAuYXZhdGFyX19vdmVybGF5ICB7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxuXFx0LmVtcGxveWVlX19hdmF0YXIgaW1nIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXG5cXHR9XFxuXFxuXFx0LmVtcGxveWVlX19kZXNjciB7XFxuXFx0XFx0d2lkdGg6IDcwJTtcXG5cXHRcXHRwYWRkaW5nOiAgMTBweCA0NXB4O1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHR9XFxuXFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJlbXBsb3llZVwiPlxuICBcdDxoMj57eyAkdCgnZW1wbG95ZWUnKSB9fTwvaDI+XG4gIFx0XHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2F2YXRhclwiPlxuICBcdFx0XHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcIj5cbiAgXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYXZhdGFyX19vdmVybGF5XCI+XG4gIFx0XHRcdFx0XHQ8dXBsb2FkLWJ1dHRvbiA6dGl0bGU9XCJhdmF0YXJNc2dcIiA6c2VsZWN0ZWRDYWxsYmFjaz1cInVwbG9hZFBob3RvXCI+PC91cGxvYWQtYnV0dG9uPlxuICBcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHRcdDxpbWcgOnNyYz1cIml0ZW0uYXZhdGFyID8gaXRlbS5hdmF0YXIgOiAnaHR0cDovL2RyYWdlbmUubm8vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDYvZGVmYXVsdDEuanBnJ1wiIGFsdD1cImF2YXRhclwiPlxuICBcdFx0XHQ8L2Rpdj5cdFxuXHRcdFx0PC9kaXY+XG5cdCAgXHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2Rlc2NyXCI+XG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cblx0ICBcdFx0XHQ8Yj57eyAkdCgnbmFtZScpIH19OjwvYj4gPGk+e3tpdGVtLmZpcnN0X25hbWV9fTwvaT5cblx0ICBcdFx0PC9wPlxuXHQgIFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuXHQgIFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XG5cdCAgXHRcdFx0PGI+e3sgJHQoJ2xhc3RfbmFtZScpIH19OjwvYj4gPGk+e3tpdGVtLmxhc3RfbmFtZX19PC9pPlxuXHQgIFx0XHQ8L3A+XG5cdCAgXHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cblx0ICBcdFx0XHQ8Yj57eyAkdCgncGF0cm9ueW1pYycpIH19OjwvYj4gPGk+e3tpdGVtLnBhdHJvbnltaWMgPyBpdGVtLnBhdHJvbnltaWMgOiAnJ319PC9pPlxuXHQgIFx0XHQ8L3A+XG5cdCAgXHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cblx0ICBcdFx0XHQ8Yj57eyAkdCgncG9zaXRpb24nKSB9fTo8L2I+IDxpPnt7aXRlbS5wb3NpdGlvbn19PC9pPlxuXHQgIFx0XHQ8L3A+XG5cdCAgXHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cblx0ICBcdFx0XHQ8Yj57eyAkdCgncGhvbmVfbnVtYmVyJykgfX06PC9iPiA8aT57e2l0ZW0ucGhvbmVfbnVtYmVyfX08L2k+XG5cdCAgXHRcdDwvcD5cblx0ICBcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cblx0ICBcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxuXHQgIFx0XHRcdDxiPnt7ICR0KCdzYWxhcnknKSB9fTo8L2I+IDxpPnt7aXRlbS5zYWxhcnl9fSDRgNGD0LEuPC9pPlxuXHQgIFx0XHQ8L3A+XG5cdCAgXHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cblx0ICBcdFx0XHQ8Yj57eyAkdCgnYWRkcmVzcycpIH19OjwvYj4gPGk+e3tpdGVtLmFkZHJlc3N9fTwvaT5cblx0ICBcdFx0PC9wPlxuXHQgIFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuXHQgIFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XG5cdCAgXHRcdFx0PGI+e3sgJHQoJ2JpcnRoZGF5JykgfX06PC9iPiA8aT57e2l0ZW0uYmlydGhkYXl9fTwvaT5cblx0ICBcdFx0PC9wPlxuXHQgIFx0XHQ8di1idG5cblx0XHRcdFx0ICAgIGJsb2NrXG5cdFx0XHRcdCAgICA6dG89XCJ7bmFtZTogJ2VtcGxveWVlRWRpdCcsIHBhcmFtczoge2lkOiBpdGVtLmlkLCBlbXBsb3llZTogaXRlbX19XCJcblx0XHRcdFx0ICA+XG5cdFx0XHRcdFx0e3sgJHQoJ2NoYW5nZV9kYXRhJykgfX1cblx0XHRcdFx0PC92LWJ0bj5cblx0ICA8L2Rpdj5cbiAgPC9kaXY+XHRcdFxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4Jztcblx0aW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRpZDoge1xuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGl0ZW06IHt9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0YXZhdGFyTXNnKCkge1xuXHRcdFx0XHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy4kdCgnY2hhbmdlX2ltYWdlJykgOiB0aGlzLiR0KCdhZGRfaW1hZ2UnKTtcblx0XHRcdH0sXG5cdFx0XHRhdmF0YXIoKSB7XG5cdFx0XHRcdHJldHVybiAodGhpcy5pdGVtLmF2YXRhcikgPyB0aGlzLml0ZW0uYXZhdGFyIDogXCJodHRwOi8vZHJhZ2VuZS5uby93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNi9kZWZhdWx0MS5qcGdcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3JlYXRlZCgpIHtcblx0XHRcdHRoaXMubG9hZCgpO1xuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0YXN5bmMgbG9hZCgpIHtcblx0XHRcdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkKTtcblx0XHRcdFx0dGhpcy5pdGVtID0gZGF0YTtcblx0XHRcdH0sXG5cdFx0XHRhc3luYyB1cGxvYWRQaG90byhlKSB7XG5cdFx0ICAgIHRyeSB7XG5cdFx0ICAgIFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCksXG5cdFx0ICAgIFx0XHRcdGltYWdlZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmF0YXItZmlsZScpLmZpbGVzWzBdO1xuXHRcdCAgICBcdGlmICghaW1hZ2VmaWxlKSByZXR1cm47XG5cdFx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VmaWxlKTtcblxuXHRcdFx0XHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucHV0KCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCwgZm9ybURhdGEsIHtcblx0XHRcdFx0XHQgICAgIGhlYWRlcnM6IHtcblx0XHRcdFx0XHQgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuXHRcdFx0XHRcdCAgICAgfVxuXHRcdFx0XHRcdCB9KTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxuXHRcdFx0XHRcdC8vdGhpcy5pdGVtLmF2YXRhciA9IGRhdGE7XG4gICAgXHRcdH0gY2F0Y2ggKGUpIHtcbiAgICAgIFx0XHRjb25zb2xlLmVycm9yKCfQndC1INC30LDQs9GA0YPQt9C40LvRgdGPINGB0L7RgtGA0YPQtNC90LjQuicsIGUpXG4gICAgXHRcdH1cdFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cdCoge1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xuXHRcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblx0fVxuXG5cdGgyIHtcblx0XHRmbGV4LWJhc2lzOiAxMDAlO1xuXHR9XG5cblx0cCxcblx0LmVtcGxveWVlLFxuXHQuYXZhdGFyX19vdmVybGF5IHtcblx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG5cdFx0ZGlzcGxheTogLW1vei1mbGV4O1xuXHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xuXHRcdGRpc3BsYXk6IC1vLWZsZXg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0fVxuXG5cdHAge1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMTBweDtcblx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcblx0fVxuXG5cdHA6aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xuXHR9XG5cdC5lbXBsb3llZSB7XG5cdFx0LXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG5cdFx0LW1vei1mbGV4LXdyYXA6IHdyYXA7XG5cdFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcblx0XHQtby1mbGV4LXdyYXA6IHdyYXA7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdHdpZHRoOiA5MCU7XG5cdFx0bWFyZ2luOiAzMHB4IGF1dG87XG5cdFx0cGFkZGluZzogMTVweDtcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0Ym94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XG5cdH1cblx0LmVtcGxveWVlOjpiZWZvcmUsXG5cdC5lbXBsb3llZTo6YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Y2xlYXI6IGJvdGg7XG5cdH1cblxuXHQuZW1wbG95ZWVfX2F2YXRhciB7XHRcblx0XHR3aWR0aDogMzAlO1xuXHR9XG5cblx0LmVtcGxveWVlX19hdmF0YXItY29udGFpbmVyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0Ym94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XG5cdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdH1cblxuXHQuYXZhdGFyX19vdmVybGF5IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0ei1pbmRleDogMTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xuXHR9XG5cdC5lbXBsb3llZV9fYXZhdGFyOmhvdmVyIC5hdmF0YXJfX292ZXJsYXkgIHtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cdC5lbXBsb3llZV9fYXZhdGFyIGltZyB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdH1cblxuXHQuZW1wbG95ZWVfX2Rlc2NyIHtcblx0XHR3aWR0aDogNzAlO1xuXHRcdHBhZGRpbmc6ICAxMHB4IDQ1cHg7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHR9XG5cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZVwiIH0sIFtcbiAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImVtcGxveWVlXCIpKSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhdmF0YXJfX292ZXJsYXlcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidXBsb2FkLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBfdm0uYXZhdGFyTXNnLCBzZWxlY3RlZENhbGxiYWNrOiBfdm0udXBsb2FkUGhvdG8gfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBzcmM6IF92bS5pdGVtLmF2YXRhclxuICAgICAgICAgICAgICA/IF92bS5pdGVtLmF2YXRhclxuICAgICAgICAgICAgICA6IFwiaHR0cDovL2RyYWdlbmUubm8vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDYvZGVmYXVsdDEuanBnXCIsXG4gICAgICAgICAgICBhbHQ6IFwiYXZhdGFyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fZGVzY3JcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwibmFtZVwiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5maXJzdF9uYW1lKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJsYXN0X25hbWVcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ubGFzdF9uYW1lKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJwYXRyb255bWljXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLml0ZW0ucGF0cm9ueW1pYyA/IF92bS5pdGVtLnBhdHJvbnltaWMgOiBcIlwiKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJwb3NpdGlvblwiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5wb3NpdGlvbikpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwicGhvbmVfbnVtYmVyXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnBob25lX251bWJlcikpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwic2FsYXJ5XCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnNhbGFyeSkgKyBcIiDRgNGD0LEuXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidi1kaXZpZGVyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fdGV4dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiYWRkcmVzc1wiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5hZGRyZXNzKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJiaXJ0aGRheVwiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5iaXJ0aGRheSkpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImVtcGxveWVlRWRpdFwiLFxuICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogX3ZtLml0ZW0uaWQsIGVtcGxveWVlOiBfdm0uaXRlbSB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiArIF92bS5fcyhfdm0uJHQoXCJjaGFuZ2VfZGF0YVwiKSkgKyBcIlxcblxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNWViODdjZDBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJzb3VyY2VSb290IjoiIn0=