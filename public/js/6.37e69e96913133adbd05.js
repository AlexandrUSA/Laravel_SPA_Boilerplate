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
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n}\np[data-v-5eb87cd0],\n.employee[data-v-5eb87cd0],\n.avatar__overlay[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\np[data-v-5eb87cd0] {\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n.employee[data-v-5eb87cd0] {\n\t-ms-flex-wrap: wrap;\n\t-o-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\twidth: 90%;\n\tmargin: 30px auto;\n\tpadding: 15px;\n\tborder-radius: 5px;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n}\n.employee[data-v-5eb87cd0]::before,\n.employee[data-v-5eb87cd0]::after {\n\tcontent: \"\";\n\tdisplay: block;\n\tclear: both;\n}\n.employee__avatar[data-v-5eb87cd0] {\t\n\twidth: 30%;\n}\n.employee__avatar-container[data-v-5eb87cd0] {\n\tposition: relative;\n\twidth: 100%;\n\tmargin: 0 auto;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\tborder-radius: 3px;\n\toverflow: hidden;\n}\n.avatar__overlay[data-v-5eb87cd0] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tbackground-color: rgba(0, 0, 0, .3);\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\t-webkit-transition: opacity .3s;\n\ttransition: opacity .3s;\n}\n.employee__avatar:hover .avatar__overlay[data-v-5eb87cd0]  {\n\topacity: 1;\n}\n.employee__avatar img[data-v-5eb87cd0] {\n\tdisplay: block;\n\twidth: 100%;\n\tmargin: 0 auto;\n}\n.employee__descr[data-v-5eb87cd0] {\n\twidth: 70%;\n\tpadding:  10px 45px;\n\tfont-size: 18px;\n}\n\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AAmIA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA;AAEA;;;CAIA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA;AAEA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA;AACA;CAGA,oBAAA;CACA,mBAAA;CACA,gBAAA;CACA,WAAA;CACA,kBAAA;CACA,cAAA;CACA,mBAAA;CACA,+CAAA;SAAA,uCAAA;CACA;AACA;;CAEA,YAAA;CACA,eAAA;CACA,YAAA;CACA;AAEA;CACA,WAAA;CACA;AAEA;CACA,mBAAA;CACA,YAAA;CACA,eAAA;CACA,+CAAA;SAAA,uCAAA;CACA,mBAAA;CACA,iBAAA;CACA;AAEA;CACA,mBAAA;CACA,OAAA;CACA,QAAA;CACA,WAAA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,oBAAA;CACA,oCAAA;CACA,YAAA;CACA,aAAA;CACA,WAAA;CACA,gCAAA;CAAA,wBAAA;CACA;AACA;CACA,WAAA;CACA;AACA;CACA,eAAA;CACA,YAAA;CACA,eAAA;CACA;AAEA;CACA,WAAA;CACA,oBAAA;CACA,gBAAA;CACA","file":"Show.vue","sourcesContent":["<template>\n  <div class=\"employee\">\n  \t<h2>{{ $t('employee') }}</h2>\n  \t\t<div class=\"employee__avatar\">\n  \t\t\t<div class=\"employee__avatar-container\">\n  \t\t\t\t<div class=\"avatar__overlay\">\n  \t\t\t\t\t<upload-button :title=\"avatarMsg\" :selectedCallback=\"uploadPhoto\"></upload-button>\n  \t\t\t\t</div>\n  \t\t\t\t<img :src=\"avatar\" alt=\"avatar\">\n  \t\t\t</div>\t\n\t\t\t</div>\n\t  \t<div class=\"employee__descr\">\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('name') }}:</b> <i>{{item.first_name}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('last_name') }}:</b> <i>{{item.last_name}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('patronymic') }}:</b> <i>{{item.patronymic ? item.patronymic : ''}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('position') }}:</b> <i>{{item.position}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('phone_number') }}:</b> <i>{{item.phone_number}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('salary') }}:</b> <i>{{item.salary}} руб.</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('address') }}:</b> <i>{{item.address}}</i>\n\t  \t\t</p>\n\t  \t\t<v-divider></v-divider>\n\t  \t\t<p class=\"employee__text\">\n\t  \t\t\t<b>{{ $t('birthday') }}:</b> <i>{{item.birthday}}</i>\n\t  \t\t</p>\n\t  \t\t<v-btn\n\t\t\t\t    block\n\t\t\t\t    :to=\"{name: 'employeeEdit', params: {id: item.id, employee: item}}\"\n\t\t\t\t  >\n\t\t\t\t\t{{ $t('change_data') }}\n\t\t\t\t</v-btn>\n\t  </div>\n  </div>\t\t\n</template>\n\n<script>\n\timport {mapActions, mapGetters} from 'vuex';\n\timport axios from 'axios';\n\texport default {\n\t\tprops: {\n\t\t\tid: {\n\t\t\t\ttype: [Number, String],\n\t\t\t\trequired: true\n\t\t\t}\n\t\t},\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\titem: {}\n\t\t\t}\n\t\t},\n\t\tcomputed: {\n\t\t\tavatarMsg() {\n\t\t\t\treturn (this.item.avatar) ? this.$t('change_image') : this.$t('add_image');\n\t\t\t},\n\t\t\tavatar() {\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"http://dragene.no/wp-content/uploads/2016/06/default1.jpg\"\n\t\t\t}\n\t\t},\n\t\tcreated() {\n\t\t\tthis.load();\n\t\t},\n\t\tmethods: {\n\t\t\tasync load() {\n\t\t\t\tconst { data } = await axios.get('/api/employees/' + this.id);\n\t\t\t\tthis.item = data;\n\t\t\t},\n\t\t\tasync uploadPhoto(e) {\n\t\t    //try {\n\t\t    \tlet formData = new FormData(),\n\t\t    \t\t\timagefile = document.getElementById('avatar-file').files[0];\n\t\t    \tif (!imagefile) return;\n\t\t\t\t\tformData.append(\"image\", imagefile);\n\t\t\t\t\t\n\t\t\t\t\t// fetch('/api/employees/' + this.id + '/avatar', {\n\t\t\t\t\t// \tmethod: 'POST',\n\t\t\t\t\t// \theaders: {\n\t\t\t\t\t//     'Content-Type': 'multipart/form-data; boundary=\"another cool boundary'\n\t\t\t\t\t//   },\n\t\t\t\t\t// \tbody: formData\n\t\t\t\t\t// })\n\t\t\t\t\t// .then(response => response.text())\n\t\t\t\t\t// .then(data => {\t\n\t\t\t\t\t//   console.log(data)\n\t\t\t\t\t// });\n\n\n\t\t\t\t\t axios.post('/api/employees/' + this.id + '/avatar', formData, {\n\t\t\t\t\t     headers: {\n\t\t\t\t\t       'Content-Type': 'multipart/form-data'\n\t\t\t\t\t     }\n\t\t\t\t\t })\n\t\t\t\t\t .then(response => console.log(response.data))\n\t\t\t\t\t .catch(function (error) {\n\t\t\t\t\t    console.log(error);\n\t\t\t\t\t  });\n\t\t\t\t\t// const { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {\n\t\t\t\t\t//     headers: {\n\t\t\t\t\t//       'Content-Type': 'multipart/form-data'\n\t\t\t\t\t//     }\n\t\t\t\t\t// });\n\t\t\t\t\t \t\t\n     //  \t\tthis.item.avatar = data;\n     //  \t\tconsole.log(this.item.avatar); \n    \t//\t} catch (e) {\n      //\t\tconsole.error('Не загрузился сотрудник', e)\n    //\t\t}\t\n\t\t//\t}\n\t\t}\n\t}\n}\n</script>\n\n<style scoped>\n\t* {\n\t\tbox-sizing: border-box;;\n\t\tfont-family: 'Roboto', sans-serif;\n\t}\n\n\th2 {\n\t\tflex-basis: 100%;\n\t}\n\n\tp,\n\t.employee,\n\t.avatar__overlay {\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: -o-flex;\n\t\tdisplay: flex;\n\t}\n\n\tp {\n\t\tjustify-content: space-between;\n\t\tmargin: 0;\n\t\tpadding: 10px;\n\t\ttransition: background-color .3s;\n\t}\n\n\tp:hover {\n\t\tbackground-color: rgba(255, 255, 255, .1);\n\t}\n\t.employee {\n\t\t-webkit-flex-wrap: wrap;\n\t\t-moz-flex-wrap: wrap;\n\t\t-ms-flex-wrap: wrap;\n\t\t-o-flex-wrap: wrap;\n\t\tflex-wrap: wrap;\n\t\twidth: 90%;\n\t\tmargin: 30px auto;\n\t\tpadding: 15px;\n\t\tborder-radius: 5px;\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t}\n\t.employee::before,\n\t.employee::after {\n\t\tcontent: \"\";\n\t\tdisplay: block;\n\t\tclear: both;\n\t}\n\n\t.employee__avatar {\t\n\t\twidth: 30%;\n\t}\n\n\t.employee__avatar-container {\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\tmargin: 0 auto;\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t\tborder-radius: 3px;\n\t\toverflow: hidden;\n\t}\n\n\t.avatar__overlay {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tz-index: 1;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tbackground-color: rgba(0, 0, 0, .3);\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\topacity: 0;\n\t\ttransition: opacity .3s;\n\t}\n\t.employee__avatar:hover .avatar__overlay  {\n\t\topacity: 1;\n\t}\n\t.employee__avatar img {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmargin: 0 auto;\n\t}\n\n\t.employee__descr {\n\t\twidth: 70%;\n\t\tpadding:  10px 45px;\n\t\tfont-size: 18px;\n\t}\n\n\n</style>\n"],"sourceRoot":""}]);

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
				var formData, imagefile;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								//try {
								formData = new FormData(), imagefile = document.getElementById('avatar-file').files[0];

								if (imagefile) {
									_context2.next = 3;
									break;
								}

								return _context2.abrupt('return');

							case 3:
								formData.append("image", imagefile);

								// fetch('/api/employees/' + this.id + '/avatar', {
								// 	method: 'POST',
								// 	headers: {
								//     'Content-Type': 'multipart/form-data; boundary="another cool boundary'
								//   },
								// 	body: formData
								// })
								// .then(response => response.text())
								// .then(data => {	
								//   console.log(data)
								// });


								__WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/employees/' + this.id + '/avatar', formData, {
									headers: {
										'Content-Type': 'multipart/form-data'
									}
								}).then(function (response) {
									return console.log(response.data);
								}).catch(function (error) {
									console.log(error);
								});
								// const { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {
								//     headers: {
								//       'Content-Type': 'multipart/form-data'
								//     }
								// });

								//  		this.item.avatar = data;
								//  		console.log(this.item.avatar); 
								//	} catch (e) {
								//		console.error('Не загрузился сотрудник', e)
								//		}	
								//	}

							case 5:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
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
        _c("img", { attrs: { src: _vm.avatar, alt: "avatar" } })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlP2MxMGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBOE87QUFDOU87QUFDQTtBQUNBO0FBQ0Esa0VBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGlGQUFpRjtBQUM3TyxxS0FBcUssaUZBQWlGO0FBQ3RQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLCtDQUFnRCxtQ0FBbUMsb0NBQW9DLHNDQUFzQyxHQUFH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QUFDQTtBQUNBLGVBQWUsa0NBQWtDO0FBQ2pELGlCQUFpQiw0Q0FBNEM7QUFDN0Q7QUFDQTtBQUNBLFdBQVcsaUNBQWlDO0FBQzVDO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVMsaUNBQWlDLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUNBQWlDO0FBQ3hDO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzYuMzdlNjllOTY5MTMxMzNhZGJkMDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNWViODdjZDBcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxlbXBsb3llZXNcXFxcU2hvdy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWViODdjZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZWI4N2NkMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMTRlNGEwM2NcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4qW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuaDJbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuXFx0ICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXSxcXG4uZW1wbG95ZWVbZGF0YS12LTVlYjg3Y2QwXSxcXG4uYXZhdGFyX19vdmVybGF5W2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG5cXHQgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcbn1cXG5wW2RhdGEtdi01ZWI4N2NkMF06aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xcbn1cXG4uZW1wbG95ZWVbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcXG5cXHQtby1mbGV4LXdyYXA6IHdyYXA7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0bWFyZ2luOiAzMHB4IGF1dG87XFxuXFx0cGFkZGluZzogMTVweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbn1cXG4uZW1wbG95ZWVbZGF0YS12LTVlYjg3Y2QwXTo6YmVmb3JlLFxcbi5lbXBsb3llZVtkYXRhLXYtNWViODdjZDBdOjphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y2xlYXI6IGJvdGg7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyW2RhdGEtdi01ZWI4N2NkMF0ge1xcdFxcblxcdHdpZHRoOiAzMCU7XFxufVxcbi5lbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lcltkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxM3B4IHJnYmEoMCwgMCwgMCwgLjUpO1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uYXZhdGFyX19vdmVybGF5W2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHR6LWluZGV4OiAxO1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG59XFxuLmVtcGxveWVlX19hdmF0YXI6aG92ZXIgLmF2YXRhcl9fb3ZlcmxheVtkYXRhLXYtNWViODdjZDBdICB7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuLmVtcGxveWVlX19hdmF0YXIgaW1nW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uZW1wbG95ZWVfX2Rlc2NyW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdHdpZHRoOiA3MCU7XFxuXFx0cGFkZGluZzogIDEwcHggNDVweDtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxufVxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvd2ViL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFtSUE7Q0FDQSwrQkFBQTtTQUFBLHVCQUFBO0NBQ0Esa0NBQUE7Q0FDQTtBQUVBO0NBQ0EsOEJBQUE7S0FBQSxpQkFBQTtDQUNBO0FBRUE7OztDQUlBLG1CQUFBO0NBQ0Esa0JBQUE7Q0FDQSxpQkFBQTtDQUNBLHFCQUFBO0NBQUEscUJBQUE7Q0FBQSxjQUFBO0NBQ0E7QUFFQTtDQUNBLDBCQUFBO0tBQUEsdUJBQUE7U0FBQSwrQkFBQTtDQUNBLFVBQUE7Q0FDQSxjQUFBO0NBQ0EseUNBQUE7Q0FBQSxpQ0FBQTtDQUNBO0FBRUE7Q0FDQSwwQ0FBQTtDQUNBO0FBQ0E7Q0FHQSxvQkFBQTtDQUNBLG1CQUFBO0NBQ0EsZ0JBQUE7Q0FDQSxXQUFBO0NBQ0Esa0JBQUE7Q0FDQSxjQUFBO0NBQ0EsbUJBQUE7Q0FDQSwrQ0FBQTtTQUFBLHVDQUFBO0NBQ0E7QUFDQTs7Q0FFQSxZQUFBO0NBQ0EsZUFBQTtDQUNBLFlBQUE7Q0FDQTtBQUVBO0NBQ0EsV0FBQTtDQUNBO0FBRUE7Q0FDQSxtQkFBQTtDQUNBLFlBQUE7Q0FDQSxlQUFBO0NBQ0EsK0NBQUE7U0FBQSx1Q0FBQTtDQUNBLG1CQUFBO0NBQ0EsaUJBQUE7Q0FDQTtBQUVBO0NBQ0EsbUJBQUE7Q0FDQSxPQUFBO0NBQ0EsUUFBQTtDQUNBLFdBQUE7Q0FDQSx5QkFBQTtLQUFBLHNCQUFBO1NBQUEsd0JBQUE7Q0FDQSwwQkFBQTtLQUFBLHVCQUFBO1NBQUEsb0JBQUE7Q0FDQSxvQ0FBQTtDQUNBLFlBQUE7Q0FDQSxhQUFBO0NBQ0EsV0FBQTtDQUNBLGdDQUFBO0NBQUEsd0JBQUE7Q0FDQTtBQUNBO0NBQ0EsV0FBQTtDQUNBO0FBQ0E7Q0FDQSxlQUFBO0NBQ0EsWUFBQTtDQUNBLGVBQUE7Q0FDQTtBQUVBO0NBQ0EsV0FBQTtDQUNBLG9CQUFBO0NBQ0EsZ0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiU2hvdy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVcXFwiPlxcbiAgXFx0PGgyPnt7ICR0KCdlbXBsb3llZScpIH19PC9oMj5cXG4gIFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19hdmF0YXJcXFwiPlxcbiAgXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcXFwiPlxcbiAgXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiYXZhdGFyX19vdmVybGF5XFxcIj5cXG4gIFxcdFxcdFxcdFxcdFxcdDx1cGxvYWQtYnV0dG9uIDp0aXRsZT1cXFwiYXZhdGFyTXNnXFxcIiA6c2VsZWN0ZWRDYWxsYmFjaz1cXFwidXBsb2FkUGhvdG9cXFwiPjwvdXBsb2FkLWJ1dHRvbj5cXG4gIFxcdFxcdFxcdFxcdDwvZGl2PlxcbiAgXFx0XFx0XFx0XFx0PGltZyA6c3JjPVxcXCJhdmF0YXJcXFwiIGFsdD1cXFwiYXZhdGFyXFxcIj5cXG4gIFxcdFxcdFxcdDwvZGl2PlxcdFxcblxcdFxcdFxcdDwvZGl2PlxcblxcdCAgXFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2Rlc2NyXFxcIj5cXG5cXHQgIFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxuXFx0ICBcXHRcXHRcXHQ8Yj57eyAkdCgnbmFtZScpIH19OjwvYj4gPGk+e3tpdGVtLmZpcnN0X25hbWV9fTwvaT5cXG5cXHQgIFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuXFx0ICBcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0PGI+e3sgJHQoJ2xhc3RfbmFtZScpIH19OjwvYj4gPGk+e3tpdGVtLmxhc3RfbmFtZX19PC9pPlxcblxcdCAgXFx0XFx0PC9wPlxcblxcdCAgXFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXG5cXHQgIFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxuXFx0ICBcXHRcXHRcXHQ8Yj57eyAkdCgncGF0cm9ueW1pYycpIH19OjwvYj4gPGk+e3tpdGVtLnBhdHJvbnltaWMgPyBpdGVtLnBhdHJvbnltaWMgOiAnJ319PC9pPlxcblxcdCAgXFx0XFx0PC9wPlxcblxcdCAgXFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXG5cXHQgIFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxuXFx0ICBcXHRcXHRcXHQ8Yj57eyAkdCgncG9zaXRpb24nKSB9fTo8L2I+IDxpPnt7aXRlbS5wb3NpdGlvbn19PC9pPlxcblxcdCAgXFx0XFx0PC9wPlxcblxcdCAgXFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXG5cXHQgIFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxuXFx0ICBcXHRcXHRcXHQ8Yj57eyAkdCgncGhvbmVfbnVtYmVyJykgfX06PC9iPiA8aT57e2l0ZW0ucGhvbmVfbnVtYmVyfX08L2k+XFxuXFx0ICBcXHRcXHQ8L3A+XFxuXFx0ICBcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcblxcdCAgXFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXG5cXHQgIFxcdFxcdFxcdDxiPnt7ICR0KCdzYWxhcnknKSB9fTo8L2I+IDxpPnt7aXRlbS5zYWxhcnl9fSDRgNGD0LEuPC9pPlxcblxcdCAgXFx0XFx0PC9wPlxcblxcdCAgXFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXG5cXHQgIFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxuXFx0ICBcXHRcXHRcXHQ8Yj57eyAkdCgnYWRkcmVzcycpIH19OjwvYj4gPGk+e3tpdGVtLmFkZHJlc3N9fTwvaT5cXG5cXHQgIFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuXFx0ICBcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0PGI+e3sgJHQoJ2JpcnRoZGF5JykgfX06PC9iPiA8aT57e2l0ZW0uYmlydGhkYXl9fTwvaT5cXG5cXHQgIFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdDx2LWJ0blxcblxcdFxcdFxcdFxcdCAgICBibG9ja1xcblxcdFxcdFxcdFxcdCAgICA6dG89XFxcIntuYW1lOiAnZW1wbG95ZWVFZGl0JywgcGFyYW1zOiB7aWQ6IGl0ZW0uaWQsIGVtcGxveWVlOiBpdGVtfX1cXFwiXFxuXFx0XFx0XFx0XFx0ICA+XFxuXFx0XFx0XFx0XFx0XFx0e3sgJHQoJ2NoYW5nZV9kYXRhJykgfX1cXG5cXHRcXHRcXHRcXHQ8L3YtYnRuPlxcblxcdCAgPC9kaXY+XFxuICA8L2Rpdj5cXHRcXHRcXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcXG5cXHRpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xcblxcdGV4cG9ydCBkZWZhdWx0IHtcXG5cXHRcXHRwcm9wczoge1xcblxcdFxcdFxcdGlkOiB7XFxuXFx0XFx0XFx0XFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcXG5cXHRcXHRcXHRcXHRyZXF1aXJlZDogdHJ1ZVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9LFxcblxcdFxcdGRhdGEoKSB7XFxuXFx0XFx0XFx0cmV0dXJuIHtcXG5cXHRcXHRcXHRcXHRpdGVtOiB7fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9LFxcblxcdFxcdGNvbXB1dGVkOiB7XFxuXFx0XFx0XFx0YXZhdGFyTXNnKCkge1xcblxcdFxcdFxcdFxcdHJldHVybiAodGhpcy5pdGVtLmF2YXRhcikgPyB0aGlzLiR0KCdjaGFuZ2VfaW1hZ2UnKSA6IHRoaXMuJHQoJ2FkZF9pbWFnZScpO1xcblxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0YXZhdGFyKCkge1xcblxcdFxcdFxcdFxcdHJldHVybiAodGhpcy5pdGVtLmF2YXRhcikgPyB0aGlzLml0ZW0uYXZhdGFyIDogXFxcImh0dHA6Ly9kcmFnZW5lLm5vL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA2L2RlZmF1bHQxLmpwZ1xcXCJcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHRjcmVhdGVkKCkge1xcblxcdFxcdFxcdHRoaXMubG9hZCgpO1xcblxcdFxcdH0sXFxuXFx0XFx0bWV0aG9kczoge1xcblxcdFxcdFxcdGFzeW5jIGxvYWQoKSB7XFxuXFx0XFx0XFx0XFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkKTtcXG5cXHRcXHRcXHRcXHR0aGlzLml0ZW0gPSBkYXRhO1xcblxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0YXN5bmMgdXBsb2FkUGhvdG8oZSkge1xcblxcdFxcdCAgICAvL3RyeSB7XFxuXFx0XFx0ICAgIFxcdGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpLFxcblxcdFxcdCAgICBcXHRcXHRcXHRpbWFnZWZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhdGFyLWZpbGUnKS5maWxlc1swXTtcXG5cXHRcXHQgICAgXFx0aWYgKCFpbWFnZWZpbGUpIHJldHVybjtcXG5cXHRcXHRcXHRcXHRcXHRmb3JtRGF0YS5hcHBlbmQoXFxcImltYWdlXFxcIiwgaW1hZ2VmaWxlKTtcXG5cXHRcXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHRcXHRcXHQvLyBmZXRjaCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQgKyAnL2F2YXRhcicsIHtcXG5cXHRcXHRcXHRcXHRcXHQvLyBcXHRtZXRob2Q6ICdQT1NUJyxcXG5cXHRcXHRcXHRcXHRcXHQvLyBcXHRoZWFkZXJzOiB7XFxuXFx0XFx0XFx0XFx0XFx0Ly8gICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9XFxcImFub3RoZXIgY29vbCBib3VuZGFyeSdcXG5cXHRcXHRcXHRcXHRcXHQvLyAgIH0sXFxuXFx0XFx0XFx0XFx0XFx0Ly8gXFx0Ym9keTogZm9ybURhdGFcXG5cXHRcXHRcXHRcXHRcXHQvLyB9KVxcblxcdFxcdFxcdFxcdFxcdC8vIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcXG5cXHRcXHRcXHRcXHRcXHQvLyAudGhlbihkYXRhID0+IHtcXHRcXG5cXHRcXHRcXHRcXHRcXHQvLyAgIGNvbnNvbGUubG9nKGRhdGEpXFxuXFx0XFx0XFx0XFx0XFx0Ly8gfSk7XFxuXFxuXFxuXFx0XFx0XFx0XFx0XFx0IGF4aW9zLnBvc3QoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkICsgJy9hdmF0YXInLCBmb3JtRGF0YSwge1xcblxcdFxcdFxcdFxcdFxcdCAgICAgaGVhZGVyczoge1xcblxcdFxcdFxcdFxcdFxcdCAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXFxuXFx0XFx0XFx0XFx0XFx0ICAgICB9XFxuXFx0XFx0XFx0XFx0XFx0IH0pXFxuXFx0XFx0XFx0XFx0XFx0IC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpKVxcblxcdFxcdFxcdFxcdFxcdCAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XFxuXFx0XFx0XFx0XFx0XFx0ICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXG5cXHRcXHRcXHRcXHRcXHQgIH0pO1xcblxcdFxcdFxcdFxcdFxcdC8vIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQgKyAnL2F2YXRhcicsIGZvcm1EYXRhLCB7XFxuXFx0XFx0XFx0XFx0XFx0Ly8gICAgIGhlYWRlcnM6IHtcXG5cXHRcXHRcXHRcXHRcXHQvLyAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXFxuXFx0XFx0XFx0XFx0XFx0Ly8gICAgIH1cXG5cXHRcXHRcXHRcXHRcXHQvLyB9KTtcXG5cXHRcXHRcXHRcXHRcXHQgXFx0XFx0XFxuICAgICAvLyAgXFx0XFx0dGhpcy5pdGVtLmF2YXRhciA9IGRhdGE7XFxuICAgICAvLyAgXFx0XFx0Y29uc29sZS5sb2codGhpcy5pdGVtLmF2YXRhcik7IFxcbiAgICBcXHQvL1xcdH0gY2F0Y2ggKGUpIHtcXG4gICAgICAvL1xcdFxcdGNvbnNvbGUuZXJyb3IoJ9Cd0LUg0LfQsNCz0YDRg9C30LjQu9GB0Y8g0YHQvtGC0YDRg9C00L3QuNC6JywgZSlcXG4gICAgLy9cXHRcXHR9XFx0XFxuXFx0XFx0Ly9cXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG5cXHQqIHtcXG5cXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94OztcXG5cXHRcXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFx0fVxcblxcblxcdGgyIHtcXG5cXHRcXHRmbGV4LWJhc2lzOiAxMDAlO1xcblxcdH1cXG5cXG5cXHRwLFxcblxcdC5lbXBsb3llZSxcXG5cXHQuYXZhdGFyX19vdmVybGF5IHtcXG5cXHRcXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdFxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdFxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHR9XFxuXFxuXFx0cCB7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHRcXHRwYWRkaW5nOiAxMHB4O1xcblxcdFxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xcblxcdH1cXG5cXG5cXHRwOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXG5cXHR9XFxuXFx0LmVtcGxveWVlIHtcXG5cXHRcXHQtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHQtbW96LWZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHQtbXMtZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdC1vLWZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0d2lkdGg6IDkwJTtcXG5cXHRcXHRtYXJnaW46IDMwcHggYXV0bztcXG5cXHRcXHRwYWRkaW5nOiAxNXB4O1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRcXHRib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG5cXHR9XFxuXFx0LmVtcGxveWVlOjpiZWZvcmUsXFxuXFx0LmVtcGxveWVlOjphZnRlciB7XFxuXFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0Y2xlYXI6IGJvdGg7XFxuXFx0fVxcblxcblxcdC5lbXBsb3llZV9fYXZhdGFyIHtcXHRcXG5cXHRcXHR3aWR0aDogMzAlO1xcblxcdH1cXG5cXG5cXHQuZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXIge1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXG5cXHRcXHRib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR9XFxuXFxuXFx0LmF2YXRhcl9fb3ZlcmxheSB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdHRvcDogMDtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdHotaW5kZXg6IDE7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG5cXHR9XFxuXFx0LmVtcGxveWVlX19hdmF0YXI6aG92ZXIgLmF2YXRhcl9fb3ZlcmxheSAge1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcblxcdC5lbXBsb3llZV9fYXZhdGFyIGltZyB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0fVxcblxcblxcdC5lbXBsb3llZV9fZGVzY3Ige1xcblxcdFxcdHdpZHRoOiA3MCU7XFxuXFx0XFx0cGFkZGluZzogIDEwcHggNDVweDtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0fVxcblxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxODdcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZW1wbG95ZWVcIj5cbiAgXHQ8aDI+e3sgJHQoJ2VtcGxveWVlJykgfX08L2gyPlxuICBcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXJcIj5cbiAgXHRcdFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19hdmF0YXItY29udGFpbmVyXCI+XG4gIFx0XHRcdFx0PGRpdiBjbGFzcz1cImF2YXRhcl9fb3ZlcmxheVwiPlxuICBcdFx0XHRcdFx0PHVwbG9hZC1idXR0b24gOnRpdGxlPVwiYXZhdGFyTXNnXCIgOnNlbGVjdGVkQ2FsbGJhY2s9XCJ1cGxvYWRQaG90b1wiPjwvdXBsb2FkLWJ1dHRvbj5cbiAgXHRcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0XHQ8aW1nIDpzcmM9XCJhdmF0YXJcIiBhbHQ9XCJhdmF0YXJcIj5cbiAgXHRcdFx0PC9kaXY+XHRcblx0XHRcdDwvZGl2PlxuXHQgIFx0PGRpdiBjbGFzcz1cImVtcGxveWVlX19kZXNjclwiPlxuXHQgIFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XG5cdCAgXHRcdFx0PGI+e3sgJHQoJ25hbWUnKSB9fTo8L2I+IDxpPnt7aXRlbS5maXJzdF9uYW1lfX08L2k+XG5cdCAgXHRcdDwvcD5cblx0ICBcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cblx0ICBcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxuXHQgIFx0XHRcdDxiPnt7ICR0KCdsYXN0X25hbWUnKSB9fTo8L2I+IDxpPnt7aXRlbS5sYXN0X25hbWV9fTwvaT5cblx0ICBcdFx0PC9wPlxuXHQgIFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuXHQgIFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XG5cdCAgXHRcdFx0PGI+e3sgJHQoJ3BhdHJvbnltaWMnKSB9fTo8L2I+IDxpPnt7aXRlbS5wYXRyb255bWljID8gaXRlbS5wYXRyb255bWljIDogJyd9fTwvaT5cblx0ICBcdFx0PC9wPlxuXHQgIFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuXHQgIFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XG5cdCAgXHRcdFx0PGI+e3sgJHQoJ3Bvc2l0aW9uJykgfX06PC9iPiA8aT57e2l0ZW0ucG9zaXRpb259fTwvaT5cblx0ICBcdFx0PC9wPlxuXHQgIFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuXHQgIFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XG5cdCAgXHRcdFx0PGI+e3sgJHQoJ3Bob25lX251bWJlcicpIH19OjwvYj4gPGk+e3tpdGVtLnBob25lX251bWJlcn19PC9pPlxuXHQgIFx0XHQ8L3A+XG5cdCAgXHRcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG5cdCAgXHRcdDxwIGNsYXNzPVwiZW1wbG95ZWVfX3RleHRcIj5cblx0ICBcdFx0XHQ8Yj57eyAkdCgnc2FsYXJ5JykgfX06PC9iPiA8aT57e2l0ZW0uc2FsYXJ5fX0g0YDRg9CxLjwvaT5cblx0ICBcdFx0PC9wPlxuXHQgIFx0XHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuXHQgIFx0XHQ8cCBjbGFzcz1cImVtcGxveWVlX190ZXh0XCI+XG5cdCAgXHRcdFx0PGI+e3sgJHQoJ2FkZHJlc3MnKSB9fTo8L2I+IDxpPnt7aXRlbS5hZGRyZXNzfX08L2k+XG5cdCAgXHRcdDwvcD5cblx0ICBcdFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cblx0ICBcdFx0PHAgY2xhc3M9XCJlbXBsb3llZV9fdGV4dFwiPlxuXHQgIFx0XHRcdDxiPnt7ICR0KCdiaXJ0aGRheScpIH19OjwvYj4gPGk+e3tpdGVtLmJpcnRoZGF5fX08L2k+XG5cdCAgXHRcdDwvcD5cblx0ICBcdFx0PHYtYnRuXG5cdFx0XHRcdCAgICBibG9ja1xuXHRcdFx0XHQgICAgOnRvPVwie25hbWU6ICdlbXBsb3llZUVkaXQnLCBwYXJhbXM6IHtpZDogaXRlbS5pZCwgZW1wbG95ZWU6IGl0ZW19fVwiXG5cdFx0XHRcdCAgPlxuXHRcdFx0XHRcdHt7ICR0KCdjaGFuZ2VfZGF0YScpIH19XG5cdFx0XHRcdDwvdi1idG4+XG5cdCAgPC9kaXY+XG4gIDwvZGl2Plx0XHRcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSAndnVleCc7XG5cdGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczoge1xuXHRcdFx0aWQ6IHtcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpdGVtOiB7fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdGF2YXRhck1zZygpIHtcblx0XHRcdFx0cmV0dXJuICh0aGlzLml0ZW0uYXZhdGFyKSA/IHRoaXMuJHQoJ2NoYW5nZV9pbWFnZScpIDogdGhpcy4kdCgnYWRkX2ltYWdlJyk7XG5cdFx0XHR9LFxuXHRcdFx0YXZhdGFyKCkge1xuXHRcdFx0XHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy5pdGVtLmF2YXRhciA6IFwiaHR0cDovL2RyYWdlbmUubm8vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDYvZGVmYXVsdDEuanBnXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHR0aGlzLmxvYWQoKTtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGFzeW5jIGxvYWQoKSB7XG5cdFx0XHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCk7XG5cdFx0XHRcdHRoaXMuaXRlbSA9IGRhdGE7XG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgdXBsb2FkUGhvdG8oZSkge1xuXHRcdCAgICAvL3RyeSB7XG5cdFx0ICAgIFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCksXG5cdFx0ICAgIFx0XHRcdGltYWdlZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmF0YXItZmlsZScpLmZpbGVzWzBdO1xuXHRcdCAgICBcdGlmICghaW1hZ2VmaWxlKSByZXR1cm47XG5cdFx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VmaWxlKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyBmZXRjaCgnL2FwaS9lbXBsb3llZXMvJyArIHRoaXMuaWQgKyAnL2F2YXRhcicsIHtcblx0XHRcdFx0XHQvLyBcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRcdC8vIFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdC8vICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PVwiYW5vdGhlciBjb29sIGJvdW5kYXJ5J1xuXHRcdFx0XHRcdC8vICAgfSxcblx0XHRcdFx0XHQvLyBcdGJvZHk6IGZvcm1EYXRhXG5cdFx0XHRcdFx0Ly8gfSlcblx0XHRcdFx0XHQvLyAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG5cdFx0XHRcdFx0Ly8gLnRoZW4oZGF0YSA9PiB7XHRcblx0XHRcdFx0XHQvLyAgIGNvbnNvbGUubG9nKGRhdGEpXG5cdFx0XHRcdFx0Ly8gfSk7XG5cblxuXHRcdFx0XHRcdCBheGlvcy5wb3N0KCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCArICcvYXZhdGFyJywgZm9ybURhdGEsIHtcblx0XHRcdFx0XHQgICAgIGhlYWRlcnM6IHtcblx0XHRcdFx0XHQgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuXHRcdFx0XHRcdCAgICAgfVxuXHRcdFx0XHRcdCB9KVxuXHRcdFx0XHRcdCAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKSlcblx0XHRcdFx0XHQgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHRcdCAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdFx0ICB9KTtcblx0XHRcdFx0XHQvLyBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvZW1wbG95ZWVzLycgKyB0aGlzLmlkICsgJy9hdmF0YXInLCBmb3JtRGF0YSwge1xuXHRcdFx0XHRcdC8vICAgICBoZWFkZXJzOiB7XG5cdFx0XHRcdFx0Ly8gICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuXHRcdFx0XHRcdC8vICAgICB9XG5cdFx0XHRcdFx0Ly8gfSk7XG5cdFx0XHRcdFx0IFx0XHRcbiAgICAgLy8gIFx0XHR0aGlzLml0ZW0uYXZhdGFyID0gZGF0YTtcbiAgICAgLy8gIFx0XHRjb25zb2xlLmxvZyh0aGlzLml0ZW0uYXZhdGFyKTsgXG4gICAgXHQvL1x0fSBjYXRjaCAoZSkge1xuICAgICAgLy9cdFx0Y29uc29sZS5lcnJvcign0J3QtSDQt9Cw0LPRgNGD0LfQuNC70YHRjyDRgdC+0YLRgNGD0LTQvdC40LonLCBlKVxuICAgIC8vXHRcdH1cdFxuXHRcdC8vXHR9XG5cdFx0fVxuXHR9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblx0KiB7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDs7XG5cdFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXHR9XG5cblx0aDIge1xuXHRcdGZsZXgtYmFzaXM6IDEwMCU7XG5cdH1cblxuXHRwLFxuXHQuZW1wbG95ZWUsXG5cdC5hdmF0YXJfX292ZXJsYXkge1xuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcblx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XG5cdFx0ZGlzcGxheTogLW1zLWZsZXg7XG5cdFx0ZGlzcGxheTogLW8tZmxleDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG5cblx0cCB7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xuXHR9XG5cblx0cDpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG5cdH1cblx0LmVtcGxveWVlIHtcblx0XHQtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcblx0XHQtbW96LWZsZXgtd3JhcDogd3JhcDtcblx0XHQtbXMtZmxleC13cmFwOiB3cmFwO1xuXHRcdC1vLWZsZXgtd3JhcDogd3JhcDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0d2lkdGg6IDkwJTtcblx0XHRtYXJnaW46IDMwcHggYXV0bztcblx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcblx0fVxuXHQuZW1wbG95ZWU6OmJlZm9yZSxcblx0LmVtcGxveWVlOjphZnRlciB7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjbGVhcjogYm90aDtcblx0fVxuXG5cdC5lbXBsb3llZV9fYXZhdGFyIHtcdFxuXHRcdHdpZHRoOiAzMCU7XG5cdH1cblxuXHQuZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXIge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcblx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuXG5cdC5hdmF0YXJfX292ZXJsYXkge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHR6LWluZGV4OiAxO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XG5cdH1cblx0LmVtcGxveWVlX19hdmF0YXI6aG92ZXIgLmF2YXRhcl9fb3ZlcmxheSAge1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblx0LmVtcGxveWVlX19hdmF0YXIgaW1nIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXG5cdC5lbXBsb3llZV9fZGVzY3Ige1xuXHRcdHdpZHRoOiA3MCU7XG5cdFx0cGFkZGluZzogIDEwcHggNDVweDtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdH1cblxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlXCIgfSwgW1xuICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiZW1wbG95ZWVcIikpKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fYXZhdGFyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImF2YXRhcl9fb3ZlcmxheVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ1cGxvYWQtYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS5hdmF0YXJNc2csIHNlbGVjdGVkQ2FsbGJhY2s6IF92bS51cGxvYWRQaG90byB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmF2YXRhciwgYWx0OiBcImF2YXRhclwiIH0gfSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX19kZXNjclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJuYW1lXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmZpcnN0X25hbWUpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImxhc3RfbmFtZVwiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5sYXN0X25hbWUpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInBhdHJvbnltaWNcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5wYXRyb255bWljID8gX3ZtLml0ZW0ucGF0cm9ueW1pYyA6IFwiXCIpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInBvc2l0aW9uXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnBvc2l0aW9uKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJwaG9uZV9udW1iZXJcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ucGhvbmVfbnVtYmVyKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJzYWxhcnlcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uc2FsYXJ5KSArIFwiINGA0YPQsS5cIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJhZGRyZXNzXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmFkZHJlc3MpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImJpcnRoZGF5XCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmJpcnRoZGF5KSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1wbG95ZWVFZGl0XCIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBfdm0uaXRlbS5pZCwgZW1wbG95ZWU6IF92bS5pdGVtIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKF92bS4kdChcImNoYW5nZV9kYXRhXCIpKSArIFwiXFxuXFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01ZWI4N2NkMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWViODdjZDBcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxODlcbi8vIG1vZHVsZSBjaHVua3MgPSA2Il0sInNvdXJjZVJvb3QiOiIifQ==