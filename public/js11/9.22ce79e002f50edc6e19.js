webpackJsonp([9],{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(209)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(211)
/* template */
var __vue_template__ = __webpack_require__(212)
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

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(210);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("8a9b1322", content, false);
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

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n*[data-v-7375d975] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-7375d975] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n}\np[data-v-7375d975],\n.employee[data-v-7375d975],\n.avatar__overlay[data-v-7375d975] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\np[data-v-7375d975] {\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-7375d975]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n.employee[data-v-7375d975] {\n\t-ms-flex-wrap: wrap;\n\t-o-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\twidth: 90%;\n\tmargin: 30px auto;\n\tpadding: 15px;\n\tborder-radius: 5px;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n}\n.employee[data-v-7375d975]::before,\n.employee[data-v-7375d975]::after {\n\tcontent: \"\";\n\tdisplay: block;\n\tclear: both;\n}\n.employee__avatar[data-v-7375d975] {\t\n\twidth: 30%;\n}\n.employee__avatar-container[data-v-7375d975] {\n\tposition: relative;\n\twidth: 100%;\n\tmargin: 0 auto;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\tborder-radius: 3px;\n\toverflow: hidden;\n}\n.avatar__overlay[data-v-7375d975] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tbackground-color: rgba(0, 0, 0, .3);\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\t-webkit-transition: opacity .3s;\n\ttransition: opacity .3s;\n}\n.employee__avatar:hover .avatar__overlay[data-v-7375d975]  {\n\topacity: 1;\n}\n.employee__avatar img[data-v-7375d975] {\n\tdisplay: block;\n\twidth: 100%;\n\tmargin: 0 auto;\n}\n.employee__descr[data-v-7375d975] {\n\twidth: 70%;\n\tpadding:  10px 45px;\n\tfont-size: 18px;\n}\n\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/clients/resources/assets/js/pages/admin/clients/Show.vue"],"names":[],"mappings":";AAwGA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA;AAEA;;;CAIA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA;AACA;CAGA,oBAAA;CACA,mBAAA;CACA,gBAAA;CACA,WAAA;CACA,kBAAA;CACA,cAAA;CACA,mBAAA;CACA,+CAAA;SAAA,uCAAA;CACA;AACA;;CAEA,YAAA;CACA,eAAA;CACA,YAAA;CACA;AAEA;CACA,WAAA;CACA;AAEA;CACA,mBAAA;CACA,YAAA;CACA,eAAA;CACA,+CAAA;SAAA,uCAAA;CACA,mBAAA;CACA,iBAAA;CACA;AAEA;CACA,mBAAA;CACA,OAAA;CACA,QAAA;CACA,WAAA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,oBAAA;CACA,oCAAA;CACA,YAAA;CACA,aAAA;CACA,WAAA;CACA,gCAAA;CAAA,wBAAA;CACA;AACA;CACA,WAAA;CACA;AACA;CACA,eAAA;CACA,YAAA;CACA,eAAA;CACA;AAEA;CACA,WAAA;CACA,oBAAA;CACA,gBAAA;CACA","file":"Show.vue","sourcesContent":["<template>\n  <div class=\"employee\">\n  \t<h2>{{ $t('employee') }}</h2>\n  \t\t<div class=\"employee__avatar\">\n  \t\t\t<div class=\"employee__avatar-container\">\n  \t\t\t\t<div class=\"avatar__overlay\">\n  \t\t\t\t\t<upload-button :title=\"avatarMsg\" :selectedCallback=\"uploadPhoto\"></upload-button>\n  \t\t\t\t</div>\n  \t\t\t\t<img :src=\"item.avatar\" alt=\"avatar\">\n  \t\t\t</div>\t\n\t\t\t</div>\n\t  \t<div class=\"employee__descr\">\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('name') }}:</b> <i>{{item.first_name}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('last_name') }}:</b> <i>{{item.last_name}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('patronymic') }}:</b> <i>{{item.patronymic ? item.patronymic : ''}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('position') }}:</b> <i>{{item.position}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('phone_number') }}:</b> <i>{{item.phone_number}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('salary') }}:</b> <i>{{item.salary}} руб.</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('address') }}:</b> <i>{{item.address}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('birthday') }}:</b> <i>{{item.birthday}}</i>\n\t  \t\t</p>\n\t  \t\t<v-btn\n\t\t\t\t    block\n\t\t\t\t    :to=\"{name: 'employeeEdit', params: {id: item.id, employee: item}}\"\n\t\t\t\t  >\n\t\t\t\t\t{{ $t('change_data') }}\n\t\t\t\t</v-btn>\n\t  </div>\n  </div>\t\t\n</template>\n\n<script>\n\timport {mapActions, mapGetters} from 'vuex';\n\timport axios from 'axios';\n\texport default {\n\t\tprops: {\n\t\t\tid: {\n\t\t\t\ttype: [Number, String],\n\t\t\t\trequired: true\n\t\t\t}\n\t\t},\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\titem: {}\n\t\t\t}\n\t\t},\n\t\tcomputed: {\n\t\t\tavatarMsg() {\n\t\t\t\treturn (this.item.avatar) ? this.$t('change_image') : this.$t('add_image');\n\t\t\t},\n\t\t\tavatar() {\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"/storage/avatars/no-avatar.jpg\"\n\t\t\t}\n\t\t},\n\t\tcreated() {\n\t\t\tthis.load();\n\t\t},\n\t\tmethods: {\n\t\t\tasync load() {\n\t\t\t\tconst { data } = await axios.get('/api/employees/' + this.id);\n\t\t\t\tthis.item = data;\n\t\t\t},\n\t\t\tasync uploadPhoto(e) {\n\t\t\t\tconst imagefile = document.getElementById('avatar-file').files[0];\n\t\t\t\tif (!imagefile) return;\n\t\t    try {\n\t\t    \tlet formData = new FormData();    \t\t\t\t    \t\n\t\t\t\t\tformData.append(\"image\", imagefile);\n\t\t\t\t\tconst { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {\n\t\t\t\t\t     headers: {\n\t\t\t\t\t       'Content-Type': 'multipart/form-data'\n\t\t\t\t\t     }\n\t\t\t\t\t });\n\t\t\t\t\tthis.item.avatar = data;\n    \t\t} catch (e) {\n      \t\tconsole.error('Не загрузился аватар', e)\n    \t\t}\t\n\t\t\t}\n\t\t}\n\t}\n</script>\n\n<style scoped>\n\t* {\n\t\tbox-sizing: border-box;;\n\t\tfont-family: 'Roboto', sans-serif;\n\t}\n\n\th2 {\n\t\tflex-basis: 100%;\n\t}\n\n\tp,\n\t.employee,\n\t.avatar__overlay {\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: -o-flex;\n\t\tdisplay: flex;\n\t}\n\n\tp {\n\t\tjustify-content: space-between;\n\t\tmargin: 0;\n\t\tpadding: 10px;\n\t\ttransition: background-color .3s;\n\t}\n\n\tp:hover {\n\t\tbackground-color: rgba(255, 255, 255, .1);\n\t}\n\t.employee {\n\t\t-webkit-flex-wrap: wrap;\n\t\t-moz-flex-wrap: wrap;\n\t\t-ms-flex-wrap: wrap;\n\t\t-o-flex-wrap: wrap;\n\t\tflex-wrap: wrap;\n\t\twidth: 90%;\n\t\tmargin: 30px auto;\n\t\tpadding: 15px;\n\t\tborder-radius: 5px;\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t}\n\t.employee::before,\n\t.employee::after {\n\t\tcontent: \"\";\n\t\tdisplay: block;\n\t\tclear: both;\n\t}\n\n\t.employee__avatar {\t\n\t\twidth: 30%;\n\t}\n\n\t.employee__avatar-container {\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\tmargin: 0 auto;\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t\tborder-radius: 3px;\n\t\toverflow: hidden;\n\t}\n\n\t.avatar__overlay {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tz-index: 1;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tbackground-color: rgba(0, 0, 0, .3);\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\topacity: 0;\n\t\ttransition: opacity .3s;\n\t}\n\t.employee__avatar:hover .avatar__overlay  {\n\t\topacity: 1;\n\t}\n\t.employee__avatar img {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmargin: 0 auto;\n\t}\n\n\t.employee__descr {\n\t\twidth: 70%;\n\t\tpadding:  10px 45px;\n\t\tfont-size: 18px;\n\t}\n\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 211:
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

/***/ 212:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvU2hvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL1Nob3cudnVlPzBjNzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL1Nob3cudnVlPzU1MzEiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vY2xpZW50cy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvU2hvdy52dWU/ODU0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3TTtBQUN4TTtBQUNBO0FBQ0E7QUFDQSw0Q0FBZ1Q7QUFDaFQ7QUFDQSw4Q0FBcUw7QUFDckw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTs7QUFFQTtBQUNBLHFDQUE4TztBQUM5TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLCtDQUFnRCxtQ0FBbUMsb0NBQW9DLHNDQUFzQyxHQUFHLHVCQUF1QixrQ0FBa0MseUJB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QTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy85LjIyY2U3OWUwMDJmNTBlZGM2ZTE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03Mzc1ZDk3NVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03Mzc1ZDk3NVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTczNzVkOTc1XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcY2xpZW50c1xcXFxTaG93LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03Mzc1ZDk3NVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTczNzVkOTc1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzM3NWQ5NzVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiOGE5YjEzMjJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzM3NWQ5NzVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03Mzc1ZDk3NVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTczNzVkOTc1XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vY2xpZW50cy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA5XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4qW2RhdGEtdi03Mzc1ZDk3NV0ge1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuaDJbZGF0YS12LTczNzVkOTc1XSB7XFxuXFx0LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuXFx0ICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcbnBbZGF0YS12LTczNzVkOTc1XSxcXG4uZW1wbG95ZWVbZGF0YS12LTczNzVkOTc1XSxcXG4uYXZhdGFyX19vdmVybGF5W2RhdGEtdi03Mzc1ZDk3NV0ge1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcbnBbZGF0YS12LTczNzVkOTc1XSB7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG5cXHQgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcbn1cXG5wW2RhdGEtdi03Mzc1ZDk3NV06aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xcbn1cXG4uZW1wbG95ZWVbZGF0YS12LTczNzVkOTc1XSB7XFxuXFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcXG5cXHQtby1mbGV4LXdyYXA6IHdyYXA7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0bWFyZ2luOiAzMHB4IGF1dG87XFxuXFx0cGFkZGluZzogMTVweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbn1cXG4uZW1wbG95ZWVbZGF0YS12LTczNzVkOTc1XTo6YmVmb3JlLFxcbi5lbXBsb3llZVtkYXRhLXYtNzM3NWQ5NzVdOjphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y2xlYXI6IGJvdGg7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyW2RhdGEtdi03Mzc1ZDk3NV0ge1xcdFxcblxcdHdpZHRoOiAzMCU7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lcltkYXRhLXYtNzM3NWQ5NzVdIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uYXZhdGFyX19vdmVybGF5W2RhdGEtdi03Mzc1ZDk3NV0ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHR6LWluZGV4OiAxO1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG59XFxuLmVtcGxveWVlX19hdmF0YXI6aG92ZXIgLmF2YXRhcl9fb3ZlcmxheVtkYXRhLXYtNzM3NWQ5NzVdICB7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuLmVtcGxveWVlX19hdmF0YXIgaW1nW2RhdGEtdi03Mzc1ZDk3NV0ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uZW1wbG95ZWVfX2Rlc2NyW2RhdGEtdi03Mzc1ZDk3NV0ge1xcblxcdHdpZHRoOiA3MCU7XFxuXFx0cGFkZGluZzogIDEwcHggNDVweDtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxufVxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvd2ViL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vY2xpZW50cy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2NsaWVudHMvU2hvdy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXdHQTtDQUNBLCtCQUFBO1NBQUEsdUJBQUE7Q0FDQSxrQ0FBQTtDQUNBO0FBRUE7Q0FDQSw4QkFBQTtLQUFBLGlCQUFBO0NBQ0E7QUFFQTs7O0NBSUEsbUJBQUE7Q0FDQSxrQkFBQTtDQUNBLGlCQUFBO0NBQ0EscUJBQUE7Q0FBQSxxQkFBQTtDQUFBLGNBQUE7Q0FDQTtBQUVBO0NBQ0EsMEJBQUE7S0FBQSx1QkFBQTtTQUFBLCtCQUFBO0NBQ0EsVUFBQTtDQUNBLGNBQUE7Q0FDQSx5Q0FBQTtDQUFBLGlDQUFBO0NBQ0E7QUFFQTtDQUNBLDBDQUFBO0NBQ0E7QUFDQTtDQUdBLG9CQUFBO0NBQ0EsbUJBQUE7Q0FDQSxnQkFBQTtDQUNBLFdBQUE7Q0FDQSxrQkFBQTtDQUNBLGNBQUE7Q0FDQSxtQkFBQTtDQUNBLCtDQUFBO1NBQUEsdUNBQUE7Q0FDQTtBQUNBOztDQUVBLFlBQUE7Q0FDQSxlQUFBO0NBQ0EsWUFBQTtDQUNBO0FBRUE7Q0FDQSxXQUFBO0NBQ0E7QUFFQTtDQUNBLG1CQUFBO0NBQ0EsWUFBQTtDQUNBLGVBQUE7Q0FDQSwrQ0FBQTtTQUFBLHVDQUFBO0NBQ0EsbUJBQUE7Q0FDQSxpQkFBQTtDQUNBO0FBRUE7Q0FDQSxtQkFBQTtDQUNBLE9BQUE7Q0FDQSxRQUFBO0NBQ0EsV0FBQTtDQUNBLHlCQUFBO0tBQUEsc0JBQUE7U0FBQSx3QkFBQTtDQUNBLDBCQUFBO0tBQUEsdUJBQUE7U0FBQSxvQkFBQTtDQUNBLG9DQUFBO0NBQ0EsWUFBQTtDQUNBLGFBQUE7Q0FDQSxXQUFBO0NBQ0EsZ0NBQUE7Q0FBQSx3QkFBQTtDQUNBO0FBQ0E7Q0FDQSxXQUFBO0NBQ0E7QUFDQTtDQUNBLGVBQUE7Q0FDQSxZQUFBO0NBQ0EsZUFBQTtDQUNBO0FBRUE7Q0FDQSxXQUFBO0NBQ0Esb0JBQUE7Q0FDQSxnQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJTaG93LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZVxcXCI+XFxuICBcXHQ8aDI+e3sgJHQoJ2VtcGxveWVlJykgfX08L2gyPlxcbiAgXFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2F2YXRhclxcXCI+XFxuICBcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lclxcXCI+XFxuICBcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJhdmF0YXJfX292ZXJsYXlcXFwiPlxcbiAgXFx0XFx0XFx0XFx0XFx0PHVwbG9hZC1idXR0b24gOnRpdGxlPVxcXCJhdmF0YXJNc2dcXFwiIDpzZWxlY3RlZENhbGxiYWNrPVxcXCJ1cGxvYWRQaG90b1xcXCI+PC91cGxvYWQtYnV0dG9uPlxcbiAgXFx0XFx0XFx0XFx0PC9kaXY+XFxuICBcXHRcXHRcXHRcXHQ8aW1nIDpzcmM9XFxcIml0ZW0uYXZhdGFyXFxcIiBhbHQ9XFxcImF2YXRhclxcXCI+XFxuICBcXHRcXHRcXHQ8L2Rpdj5cXHRcXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHQgIFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19kZXNjclxcXCI+XFxuXFx0ICBcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0PGI+e3sgJHQoJ25hbWUnKSB9fTo8L2I+IDxpPnt7aXRlbS5maXJzdF9uYW1lfX08L2k+XFxuXFx0ICBcXHRcXHQ8L3A+XFxuXFx0ICBcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcblxcdCAgXFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXG5cXHQgIFxcdFxcdFxcdDxiPnt7ICR0KCdsYXN0X25hbWUnKSB9fTo8L2I+IDxpPnt7aXRlbS5sYXN0X25hbWV9fTwvaT5cXG5cXHQgIFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuXFx0ICBcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0PGI+e3sgJHQoJ3BhdHJvbnltaWMnKSB9fTo8L2I+IDxpPnt7aXRlbS5wYXRyb255bWljID8gaXRlbS5wYXRyb255bWljIDogJyd9fTwvaT5cXG5cXHQgIFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuXFx0ICBcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0PGI+e3sgJHQoJ3Bvc2l0aW9uJykgfX06PC9iPiA8aT57e2l0ZW0ucG9zaXRpb259fTwvaT5cXG5cXHQgIFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuXFx0ICBcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0PGI+e3sgJHQoJ3Bob25lX251bWJlcicpIH19OjwvYj4gPGk+e3tpdGVtLnBob25lX251bWJlcn19PC9pPlxcblxcdCAgXFx0XFx0PC9wPlxcblxcdCAgXFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXG5cXHQgIFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxuXFx0ICBcXHRcXHRcXHQ8Yj57eyAkdCgnc2FsYXJ5JykgfX06PC9iPiA8aT57e2l0ZW0uc2FsYXJ5fX0g0YDRg9CxLjwvaT5cXG5cXHQgIFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuXFx0ICBcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0PGI+e3sgJHQoJ2FkZHJlc3MnKSB9fTo8L2I+IDxpPnt7aXRlbS5hZGRyZXNzfX08L2k+XFxuXFx0ICBcXHRcXHQ8L3A+XFxuXFx0ICBcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcblxcdCAgXFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXG5cXHQgIFxcdFxcdFxcdDxiPnt7ICR0KCdiaXJ0aGRheScpIH19OjwvYj4gPGk+e3tpdGVtLmJpcnRoZGF5fX08L2k+XFxuXFx0ICBcXHRcXHQ8L3A+XFxuXFx0ICBcXHRcXHQ8di1idG5cXG5cXHRcXHRcXHRcXHQgICAgYmxvY2tcXG5cXHRcXHRcXHRcXHQgICAgOnRvPVxcXCJ7bmFtZTogJ2VtcGxveWVlRWRpdCcsIHBhcmFtczoge2lkOiBpdGVtLmlkLCBlbXBsb3llZTogaXRlbX19XFxcIlxcblxcdFxcdFxcdFxcdCAgPlxcblxcdFxcdFxcdFxcdFxcdHt7ICR0KCdjaGFuZ2VfZGF0YScpIH19XFxuXFx0XFx0XFx0XFx0PC92LWJ0bj5cXG5cXHQgIDwvZGl2PlxcbiAgPC9kaXY+XFx0XFx0XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XFxuXFx0aW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcXG5cXHRleHBvcnQgZGVmYXVsdCB7XFxuXFx0XFx0cHJvcHM6IHtcXG5cXHRcXHRcXHRpZDoge1xcblxcdFxcdFxcdFxcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXFxuXFx0XFx0XFx0XFx0cmVxdWlyZWQ6IHRydWVcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHRkYXRhKCkge1xcblxcdFxcdFxcdHJldHVybiB7XFxuXFx0XFx0XFx0XFx0aXRlbToge31cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHRjb21wdXRlZDoge1xcblxcdFxcdFxcdGF2YXRhck1zZygpIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy4kdCgnY2hhbmdlX2ltYWdlJykgOiB0aGlzLiR0KCdhZGRfaW1hZ2UnKTtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdFxcdGF2YXRhcigpIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy5pdGVtLmF2YXRhciA6IFxcXCIvc3RvcmFnZS9hdmF0YXJzL25vLWF2YXRhci5qcGdcXFwiXFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0Y3JlYXRlZCgpIHtcXG5cXHRcXHRcXHR0aGlzLmxvYWQoKTtcXG5cXHRcXHR9LFxcblxcdFxcdG1ldGhvZHM6IHtcXG5cXHRcXHRcXHRhc3luYyBsb2FkKCkge1xcblxcdFxcdFxcdFxcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCk7XFxuXFx0XFx0XFx0XFx0dGhpcy5pdGVtID0gZGF0YTtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdFxcdGFzeW5jIHVwbG9hZFBob3RvKGUpIHtcXG5cXHRcXHRcXHRcXHRjb25zdCBpbWFnZWZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhdGFyLWZpbGUnKS5maWxlc1swXTtcXG5cXHRcXHRcXHRcXHRpZiAoIWltYWdlZmlsZSkgcmV0dXJuO1xcblxcdFxcdCAgICB0cnkge1xcblxcdFxcdCAgICBcXHRsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsgICAgXFx0XFx0XFx0XFx0ICAgIFxcdFxcblxcdFxcdFxcdFxcdFxcdGZvcm1EYXRhLmFwcGVuZChcXFwiaW1hZ2VcXFwiLCBpbWFnZWZpbGUpO1xcblxcdFxcdFxcdFxcdFxcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQgKyAnL2F2YXRhcicsIGZvcm1EYXRhLCB7XFxuXFx0XFx0XFx0XFx0XFx0ICAgICBoZWFkZXJzOiB7XFxuXFx0XFx0XFx0XFx0XFx0ICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcXG5cXHRcXHRcXHRcXHRcXHQgICAgIH1cXG5cXHRcXHRcXHRcXHRcXHQgfSk7XFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5pdGVtLmF2YXRhciA9IGRhdGE7XFxuICAgIFxcdFxcdH0gY2F0Y2ggKGUpIHtcXG4gICAgICBcXHRcXHRjb25zb2xlLmVycm9yKCfQndC1INC30LDQs9GA0YPQt9C40LvRgdGPINCw0LLQsNGC0LDRgCcsIGUpXFxuICAgIFxcdFxcdH1cXHRcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcblxcdCoge1xcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcblxcdFxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHR9XFxuXFxuXFx0aDIge1xcblxcdFxcdGZsZXgtYmFzaXM6IDEwMCU7XFxuXFx0fVxcblxcblxcdHAsXFxuXFx0LmVtcGxveWVlLFxcblxcdC5hdmF0YXJfX292ZXJsYXkge1xcblxcdFxcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG5cXHRcXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdH1cXG5cXG5cXHRwIHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0XFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxuXFx0fVxcblxcblxcdHA6aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xcblxcdH1cXG5cXHQuZW1wbG95ZWUge1xcblxcdFxcdC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdC1tb3otZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0LW8tZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHR3aWR0aDogOTAlO1xcblxcdFxcdG1hcmdpbjogMzBweCBhdXRvO1xcblxcdFxcdHBhZGRpbmc6IDE1cHg7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdFxcdGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcblxcdH1cXG5cXHQuZW1wbG95ZWU6OmJlZm9yZSxcXG5cXHQuZW1wbG95ZWU6OmFmdGVyIHtcXG5cXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRjbGVhcjogYm90aDtcXG5cXHR9XFxuXFxuXFx0LmVtcGxveWVlX19hdmF0YXIge1xcdFxcblxcdFxcdHdpZHRoOiAzMCU7XFxuXFx0fVxcblxcblxcdC5lbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lciB7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcblxcdFxcdGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdH1cXG5cXG5cXHQuYXZhdGFyX19vdmVybGF5IHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0dG9wOiAwO1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0ei1pbmRleDogMTtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdFxcdHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcblxcdH1cXG5cXHQuZW1wbG95ZWVfX2F2YXRhcjpob3ZlciAuYXZhdGFyX19vdmVybGF5ICB7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxuXFx0LmVtcGxveWVlX19hdmF0YXIgaW1nIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXG5cXHR9XFxuXFxuXFx0LmVtcGxveWVlX19kZXNjciB7XFxuXFx0XFx0d2lkdGg6IDcwJTtcXG5cXHRcXHRwYWRkaW5nOiAgMTBweCA0NXB4O1xcblxcdFxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHR9XFxuXFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzM3NWQ5NzVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9jbGllbnRzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTBcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZW1wbG95ZWVcIj5cbiAgXHQ8aDI+e3sgJHQoJ2VtcGxveWVlJykgfX08L2gyPlxuICBcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXJcIj5cbiAgXHRcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXCI+XG4gIFx0XHRcdFx0PGRpdiBjbGFzcz1cImF2YXRhcl9fb3ZlcmxheVwiPlxuICBcdFx0XHRcdFx0PHVwbG9hZC1idXR0b24gOnRpdGxlPVwiYXZhdGFyTXNnXCIgOnNlbGVjdGVkQ2FsbGJhY2s9XCJ1cGxvYWRQaG90b1wiPjwvdXBsb2FkLWJ1dHRvbj5cbiAgXHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0XHQ8aW1nIDpzcmM9XCJpdGVtLmF2YXRhclwiIGFsdD1cImF2YXRhclwiPlxuICBcdFx0XHQ8L2Rpdj5cdFxuXHRcdFx0PC9kaXY+XG5cdCAgXHQ8ZGl2IGNsYXNzPVwiZW1wbG95ZWVfX2Rlc2NyXCI+XG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cblx0ICBcdFx0XHQ8Yj57eyAkdCgnbmFtZScpIH19OjwvYj4gPGk+e3tpdGVtLmZpcnN0X25hbWV9fTwvaT5cblx0ICBcdFx0PC9wPlxuXHQgIFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuXHQgIFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XG5cdCAgXHRcdFx0PGI+e3sgJHQoJ2xhc3RfbmFtZScpIH19OjwvYj4gPGk+e3tpdGVtLmxhc3RfbmFtZX19PC9pPlxuXHQgIFx0XHQ8L3A+XG5cdCAgXHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cblx0ICBcdFx0XHQ8Yj57eyAkdCgncGF0cm9ueW1pYycpIH19OjwvYj4gPGk+e3tpdGVtLnBhdHJvbnltaWMgPyBpdGVtLnBhdHJvbnltaWMgOiAnJ319PC9pPlxuXHQgIFx0XHQ8L3A+XG5cdCAgXHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cblx0ICBcdFx0XHQ8Yj57eyAkdCgncG9zaXRpb24nKSB9fTo8L2I+IDxpPnt7aXRlbS5wb3NpdGlvbn19PC9pPlxuXHQgIFx0XHQ8L3A+XG5cdCAgXHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cblx0ICBcdFx0XHQ8Yj57eyAkdCgncGhvbmVfbnVtYmVyJykgfX06PC9iPiA8aT57e2l0ZW0ucGhvbmVfbnVtYmVyfX08L2k+XG5cdCAgXHRcdDwvcD5cblx0ICBcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cblx0ICBcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxuXHQgIFx0XHRcdDxiPnt7ICR0KCdzYWxhcnknKSB9fTo8L2I+IDxpPnt7aXRlbS5zYWxhcnl9fSDRgNGD0LEuPC9pPlxuXHQgIFx0XHQ8L3A+XG5cdCAgXHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cblx0ICBcdFx0XHQ8Yj57eyAkdCgnYWRkcmVzcycpIH19OjwvYj4gPGk+e3tpdGVtLmFkZHJlc3N9fTwvaT5cblx0ICBcdFx0PC9wPlxuXHQgIFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuXHQgIFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XG5cdCAgXHRcdFx0PGI+e3sgJHQoJ2JpcnRoZGF5JykgfX06PC9iPiA8aT57e2l0ZW0uYmlydGhkYXl9fTwvaT5cblx0ICBcdFx0PC9wPlxuXHQgIFx0XHQ8di1idG5cblx0XHRcdFx0ICAgIGJsb2NrXG5cdFx0XHRcdCAgICA6dG89XCJ7bmFtZTogJ2VtcGxveWVlRWRpdCcsIHBhcmFtczoge2lkOiBpdGVtLmlkLCBlbXBsb3llZTogaXRlbX19XCJcblx0XHRcdFx0ICA+XG5cdFx0XHRcdFx0e3sgJHQoJ2NoYW5nZV9kYXRhJykgfX1cblx0XHRcdFx0PC92LWJ0bj5cblx0ICA8L2Rpdj5cbiAgPC9kaXY+XHRcdFxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4Jztcblx0aW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRpZDoge1xuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGl0ZW06IHt9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0YXZhdGFyTXNnKCkge1xuXHRcdFx0XHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy4kdCgnY2hhbmdlX2ltYWdlJykgOiB0aGlzLiR0KCdhZGRfaW1hZ2UnKTtcblx0XHRcdH0sXG5cdFx0XHRhdmF0YXIoKSB7XG5cdFx0XHRcdHJldHVybiAodGhpcy5pdGVtLmF2YXRhcikgPyB0aGlzLml0ZW0uYXZhdGFyIDogXCIvc3RvcmFnZS9hdmF0YXJzL25vLWF2YXRhci5qcGdcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3JlYXRlZCgpIHtcblx0XHRcdHRoaXMubG9hZCgpO1xuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0YXN5bmMgbG9hZCgpIHtcblx0XHRcdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkKTtcblx0XHRcdFx0dGhpcy5pdGVtID0gZGF0YTtcblx0XHRcdH0sXG5cdFx0XHRhc3luYyB1cGxvYWRQaG90byhlKSB7XG5cdFx0XHRcdGNvbnN0IGltYWdlZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmF0YXItZmlsZScpLmZpbGVzWzBdO1xuXHRcdFx0XHRpZiAoIWltYWdlZmlsZSkgcmV0dXJuO1xuXHRcdCAgICB0cnkge1xuXHRcdCAgICBcdGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpOyAgICBcdFx0XHRcdCAgICBcdFxuXHRcdFx0XHRcdGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlZmlsZSk7XG5cdFx0XHRcdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCArICcvYXZhdGFyJywgZm9ybURhdGEsIHtcblx0XHRcdFx0XHQgICAgIGhlYWRlcnM6IHtcblx0XHRcdFx0XHQgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuXHRcdFx0XHRcdCAgICAgfVxuXHRcdFx0XHRcdCB9KTtcblx0XHRcdFx0XHR0aGlzLml0ZW0uYXZhdGFyID0gZGF0YTtcbiAgICBcdFx0fSBjYXRjaCAoZSkge1xuICAgICAgXHRcdGNvbnNvbGUuZXJyb3IoJ9Cd0LUg0LfQsNCz0YDRg9C30LjQu9GB0Y8g0LDQstCw0YLQsNGAJywgZSlcbiAgICBcdFx0fVx0XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblx0KiB7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDs7XG5cdFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXHR9XG5cblx0aDIge1xuXHRcdGZsZXgtYmFzaXM6IDEwMCU7XG5cdH1cblxuXHRwLFxuXHQuZW1wbG95ZWUsXG5cdC5hdmF0YXJfX292ZXJsYXkge1xuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XG5cdFx0ZGlzcGxheTogLW1zLWZsZXg7XG5cdFx0ZGlzcGxheTogLW8tZmxleDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG5cblx0cCB7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xuXHR9XG5cblx0cDpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG5cdH1cblx0LmVtcGxveWVlIHtcblx0XHQtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcblx0XHQtbW96LWZsZXgtd3JhcDogd3JhcDtcblx0XHQtbXMtZmxleC13cmFwOiB3cmFwO1xuXHRcdC1vLWZsZXgtd3JhcDogd3JhcDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0d2lkdGg6IDkwJTtcblx0XHRtYXJnaW46IDMwcHggYXV0bztcblx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcblx0fVxuXHQuZW1wbG95ZWU6OmJlZm9yZSxcblx0LmVtcGxveWVlOjphZnRlciB7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjbGVhcjogYm90aDtcblx0fVxuXG5cdC5lbXBsb3llZV9fYXZhdGFyIHtcdFxuXHRcdHdpZHRoOiAzMCU7XG5cdH1cblxuXHQuZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXIge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcblx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuXG5cdC5hdmF0YXJfX292ZXJsYXkge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHR6LWluZGV4OiAxO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XG5cdH1cblx0LmVtcGxveWVlX19hdmF0YXI6aG92ZXIgLmF2YXRhcl9fb3ZlcmxheSAge1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblx0LmVtcGxveWVlX19hdmF0YXIgaW1nIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXG5cdC5lbXBsb3llZV9fZGVzY3Ige1xuXHRcdHdpZHRoOiA3MCU7XG5cdFx0cGFkZGluZzogIDEwcHggNDVweDtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdH1cblxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vY2xpZW50cy9TaG93LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZVwiIH0sIFtcbiAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImVtcGxveWVlXCIpKSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhdmF0YXJfX292ZXJsYXlcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidXBsb2FkLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBfdm0uYXZhdGFyTXNnLCBzZWxlY3RlZENhbGxiYWNrOiBfdm0udXBsb2FkUGhvdG8gfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5pdGVtLmF2YXRhciwgYWx0OiBcImF2YXRhclwiIH0gfSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX19kZXNjclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJuYW1lXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmZpcnN0X25hbWUpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImxhc3RfbmFtZVwiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5sYXN0X25hbWUpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInBhdHJvbnltaWNcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5wYXRyb255bWljID8gX3ZtLml0ZW0ucGF0cm9ueW1pYyA6IFwiXCIpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInBvc2l0aW9uXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnBvc2l0aW9uKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJwaG9uZV9udW1iZXJcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ucGhvbmVfbnVtYmVyKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJzYWxhcnlcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uc2FsYXJ5KSArIFwiINGA0YPQsS5cIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJhZGRyZXNzXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmFkZHJlc3MpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImJpcnRoZGF5XCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmJpcnRoZGF5KSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1wbG95ZWVFZGl0XCIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBfdm0uaXRlbS5pZCwgZW1wbG95ZWU6IF92bS5pdGVtIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKF92bS4kdChcImNoYW5nZV9kYXRhXCIpKSArIFwiXFxuXFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03Mzc1ZDk3NVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNzM3NWQ5NzVcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vY2xpZW50cy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjEyXG4vLyBtb2R1bGUgY2h1bmtzID0gOSJdLCJzb3VyY2VSb290IjoiIn0=