webpackJsonp([7],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(186)
}
var normalizeComponent = __webpack_require__(1)
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

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\n*[data-v-5eb87cd0] {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;;\n\tfont-family: 'Roboto', sans-serif;\n}\nh2[data-v-5eb87cd0] {\n\t-ms-flex-preferred-size: 100%;\n\t    flex-basis: 100%;\n}\np[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\tmargin: 0;\n\tpadding: 10px;\n\t-webkit-transition: background-color .3s;\n\ttransition: background-color .3s;\n}\np[data-v-5eb87cd0]:hover {\n\tbackground-color: rgba(255, 255, 255, .1);\n}\n.employee[data-v-5eb87cd0] {\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t-o-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\twidth: 90%;\n\tmargin: 30px auto;\n\tpadding: 15px;\n\tborder-radius: 5px;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n}\n.employee[data-v-5eb87cd0]::before,\n.employee[data-v-5eb87cd0]::after {\n\tcontent: \"\";\n\tdisplay: block;\n\tclear: both;\n}\n.employee__avatar[data-v-5eb87cd0] {\t\n\twidth: 30%;\n}\n.employee__avatar-container[data-v-5eb87cd0] {\n\tposition: relative;\n\twidth: 316px;\n\theight: 316px;\n\tmargin: 0 auto;\n\t-webkit-box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t        box-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\tborder-radius: 3px;\n\toverflow: hidden;\n}\n.avatar__overlay[data-v-5eb87cd0] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\tdisplay: -moz-flex;\n\tdisplay: -ms-flex;\n\tdisplay: -o-flex;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tbackground-color: rgba(0, 0, 0, .3);\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n\t-webkit-transition: opacity .3s;\n\ttransition: opacity .3s;\n}\n.employee__avatar:hover .avatar__overlay[data-v-5eb87cd0]  {\n\topacity: 1;\n}\n.employee__avatar img[data-v-5eb87cd0] {\n\tdisplay: block;\n\twidth: 100%;\n\tmax-width: 316px;\n\tmargin: 0 auto;\n}\n.employee__descr[data-v-5eb87cd0] {\n\twidth: 70%;\n\tpadding:  10px 45px;\n\tfont-size: 18px;\n}\n\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/employees/resources/assets/js/pages/admin/employees/Show.vue"],"names":[],"mappings":";AA+FA;CACA,+BAAA;SAAA,uBAAA;CACA,kCAAA;CACA;AAEA;CACA,8BAAA;KAAA,iBAAA;CACA;AAEA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,+BAAA;CACA,UAAA;CACA,cAAA;CACA,yCAAA;CAAA,iCAAA;CACA;AAEA;CACA,0CAAA;CACA;AACA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CAGA,oBAAA;CACA,mBAAA;CACA,gBAAA;CACA,WAAA;CACA,kBAAA;CACA,cAAA;CACA,mBAAA;CACA,+CAAA;SAAA,uCAAA;CACA;AACA;;CAEA,YAAA;CACA,eAAA;CACA,YAAA;CACA;AAEA;CACA,WAAA;CACA;AAEA;CACA,mBAAA;CACA,aAAA;CACA,cAAA;CACA,eAAA;CACA,+CAAA;SAAA,uCAAA;CACA,mBAAA;CACA,iBAAA;CACA;AAEA;CACA,mBAAA;CACA,OAAA;CACA,QAAA;CACA,WAAA;CAEA,mBAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CAAA,qBAAA;CAAA,cAAA;CACA,yBAAA;KAAA,sBAAA;SAAA,wBAAA;CACA,0BAAA;KAAA,uBAAA;SAAA,oBAAA;CACA,oCAAA;CACA,YAAA;CACA,aAAA;CACA,WAAA;CACA,gCAAA;CAAA,wBAAA;CACA;AACA;CACA,WAAA;CACA;AACA;CACA,eAAA;CACA,YAAA;CACA,iBAAA;CACA,eAAA;CACA;AAEA;CACA,WAAA;CACA,oBAAA;CACA,gBAAA;CACA","file":"Show.vue","sourcesContent":["<template>\n  \t\t\t<div class=\"employee\">\n  \t\t\t\t<h2>{{ $t('employee') }}</h2>\n  \t\t\t\t<div class=\"employee__avatar\">\n  \t\t\t\t\t<div class=\"employee__avatar-container\">\n  \t\t\t\t\t\t<div class=\"avatar__overlay\">\n  \t\t\t\t\t\t\t<v-btn depressed large>{{avatarMsg}}</v-btn>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t\t<img :src=\"avatar\" alt=\"avatar\">\n  \t\t\t\t\t</div>\t\t\t\n  \t\t\t\t\t\n  \t\t\t\t</div>\n\t  \t\t\t<div class=\"employee__descr\">\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('name') }}:</b> <i>{{item.first_name}}</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-divider></v-divider>\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('last_name') }}:</b> <i>{{item.last_name}}</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-divider></v-divider>\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('patronymic') }}:</b> <i>{{item.patronymic ? item.patronymic : ''}}</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-divider></v-divider>\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('position') }}:</b> <i>{{item.position}}</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-divider></v-divider>\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('phone_number') }}:</b> <i>{{item.phone_number}}</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-divider></v-divider>\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('salary') }}:</b> <i>{{item.salary}} руб.</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-divider></v-divider>\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('address') }}:</b> <i>{{item.address}}</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-divider></v-divider>\n\t  \t\t\t\t<p class=\"employee__text\">\n\t  \t\t\t\t\t<b>{{ $t('birthday') }}:</b> <i>{{item.birthday}}</i>\n\t  \t\t\t\t</p>\n\t  \t\t\t\t<v-btn\n\t\t\t\t      block\n\t\t\t\t      :to=\"{name: 'employeeEdit', params: {id: item.id, employee: item}}\"\n\t\t\t\t    >\n\t\t\t\t      {{ $t('change_data') }}\n\t\t\t\t    </v-btn>\n\t  \t\t\t</div>\n  \t\t\t</div>\t\t\n</template>\n\n<script>\n\timport {mapActions, mapGetters} from 'vuex';\n\texport default {\n\t\tprops: {\n\t\t\tid: {\n\t\t\t\ttype: [Number, String],\n\t\t\t\trequired: true\n\t\t\t}\n\t\t},\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\titem: {}\n\t\t\t}\n\t\t},\n\t\tcomputed: {\n\t\t\tavatarMsg() {\n\t\t\t\treturn (this.item.avatar) ? this.$t('change_image') : this.$t('add_image');\n\t\t\t},\n\t\t\tavatar() {\n\t\t\t\treturn (this.item.avatar) ? this.item.avatar : \"http://dragene.no/wp-content/uploads/2016/06/default1.jpg\"\n\t\t\t}\n\t\t},\n\t\tcreated() {\n\t\t\tthis.load();\n\t\t},\n\t\tmethods: {\n\t\t\tasync load() {\n\t\t\t\tconst { data } = await axios.get('/api/employees' + this.id);\n\t\t\t\tthis.item = data;\n\n\t\t\t// \tfetch('/api/employees/' + this.id, {\n\t\t\t// \tmethod: 'GET'\n\t\t\t// })\n\t\t\t//   .then(response => response.json())\n\t\t\t// \t\t.then(data => this.item = data)\n\t\t\t// }\n\t\t}\n\t}\n</script>\n\n<style scoped>\n\t* {\n\t\tbox-sizing: border-box;;\n\t\tfont-family: 'Roboto', sans-serif;\n\t}\n\n\th2 {\n\t\tflex-basis: 100%;\n\t}\n\n\tp {\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: -o-flex;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tmargin: 0;\n\t\tpadding: 10px;\n\t\ttransition: background-color .3s;\n\t}\n\n\tp:hover {\n\t\tbackground-color: rgba(255, 255, 255, .1);\n\t}\n\t.employee {\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: -o-flex;\n\t\tdisplay: flex;\n\t\t-webkit-flex-wrap: wrap;\n\t\t-moz-flex-wrap: wrap;\n\t\t-ms-flex-wrap: wrap;\n\t\t-o-flex-wrap: wrap;\n\t\tflex-wrap: wrap;\n\t\twidth: 90%;\n\t\tmargin: 30px auto;\n\t\tpadding: 15px;\n\t\tborder-radius: 5px;\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t}\n\t.employee::before,\n\t.employee::after {\n\t\tcontent: \"\";\n\t\tdisplay: block;\n\t\tclear: both;\n\t}\n\n\t.employee__avatar {\t\n\t\twidth: 30%;\n\t}\n\n\t.employee__avatar-container {\n\t\tposition: relative;\n\t\twidth: 316px;\n\t\theight: 316px;\n\t\tmargin: 0 auto;\n\t\tbox-shadow: 0 0 13px rgba(0, 0, 0, .5);\n\t\tborder-radius: 3px;\n\t\toverflow: hidden;\n\t}\n\n\t.avatar__overlay {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tz-index: 1;\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: -o-flex;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tbackground-color: rgba(0, 0, 0, .3);\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\topacity: 0;\n\t\ttransition: opacity .3s;\n\t}\n\t.employee__avatar:hover .avatar__overlay  {\n\t\topacity: 1;\n\t}\n\t.employee__avatar img {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmax-width: 316px;\n\t\tmargin: 0 auto;\n\t}\n\n\t.employee__descr {\n\t\twidth: 70%;\n\t\tpadding:  10px 45px;\n\t\tfont-size: 18px;\n\t}\n\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 188:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/OSPanel/domains/web/resources/assets/js/pages/admin/employees/Show.vue: Unexpected token, expected , (93:0)\n\n\u001b[0m \u001b[90m 91 | \u001b[39m\t}\n \u001b[90m 92 | \u001b[39m}\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 93 | \u001b[39m\n \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n");

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
            _c("v-btn", { attrs: { depressed: "", large: "" } }, [
              _vm._v(_vm._s(_vm.avatarMsg))
            ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZT80NTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlPzMyNTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWU/YzEwYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3TTtBQUN4TTtBQUNBO0FBQ0E7QUFDQSw0Q0FBZ1Q7QUFDaFQ7QUFDQSw4Q0FBcUw7QUFDckw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTs7QUFFQTtBQUNBLHFDQUE4TztBQUM5TztBQUNBO0FBQ0E7QUFDQSxrRUFBOEg7QUFDOUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SkFBNEosaUZBQWlGO0FBQzdPLHFLQUFxSyxpRkFBaUY7QUFDdFA7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EsK0NBQWdELG1DQUFtQyxvQ0FBb0Msc0NBQXNDLEdBQUcsdUJBQXVCLGtDQUFrQyx5QkFBeUIsR0FBRyxzQkFBc0IsdUJBQXVCLHNCQUFzQixxQkFBcUIseUJBQXlCLHlC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Z0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzcuNGM3YjA1MDVlZTQ5MWRjMGUxY2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNWViODdjZDBcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxlbXBsb3llZXNcXFxcU2hvdy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWViODdjZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZWI4N2NkMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMTRlNGEwM2NcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYjg3Y2QwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWViODdjZDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2VtcGxveWVlcy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4qW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHQgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuaDJbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuXFx0ICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0ZGlzcGxheTogLW1vei1mbGV4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4O1xcblxcdGRpc3BsYXk6IC1vLWZsZXg7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcblxcdCAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XFxufVxcbnBbZGF0YS12LTVlYjg3Y2QwXTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XFxufVxcbi5lbXBsb3llZVtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuXFx0LW8tZmxleC13cmFwOiB3cmFwO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG1hcmdpbjogMzBweCBhdXRvO1xcblxcdHBhZGRpbmc6IDE1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuXFx0ICAgICAgICBib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG59XFxuLmVtcGxveWVlW2RhdGEtdi01ZWI4N2NkMF06OmJlZm9yZSxcXG4uZW1wbG95ZWVbZGF0YS12LTVlYjg3Y2QwXTo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNsZWFyOiBib3RoO1xcbn1cXG4uZW1wbG95ZWVfX2F2YXRhcltkYXRhLXYtNWViODdjZDBdIHtcXHRcXG5cXHR3aWR0aDogMzAlO1xcbn1cXG4uZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiAzMTZweDtcXG5cXHRoZWlnaHQ6IDMxNnB4O1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuXFx0ICAgICAgICBib3gtc2hhZG93OiAwIDAgMTNweCByZ2JhKDAsIDAsIDAsIC41KTtcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmF2YXRhcl9fb3ZlcmxheVtkYXRhLXYtNWViODdjZDBdIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0ei1pbmRleDogMTtcXG5cXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcblxcdCAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG59XFxuLmVtcGxveWVlX19hdmF0YXI6aG92ZXIgLmF2YXRhcl9fb3ZlcmxheVtkYXRhLXYtNWViODdjZDBdICB7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuLmVtcGxveWVlX19hdmF0YXIgaW1nW2RhdGEtdi01ZWI4N2NkMF0ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMzE2cHg7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxufVxcbi5lbXBsb3llZV9fZGVzY3JbZGF0YS12LTVlYjg3Y2QwXSB7XFxuXFx0d2lkdGg6IDcwJTtcXG5cXHRwYWRkaW5nOiAgMTBweCA0NXB4O1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQStGQTtDQUNBLCtCQUFBO1NBQUEsdUJBQUE7Q0FDQSxrQ0FBQTtDQUNBO0FBRUE7Q0FDQSw4QkFBQTtLQUFBLGlCQUFBO0NBQ0E7QUFFQTtDQUVBLG1CQUFBO0NBQ0Esa0JBQUE7Q0FDQSxpQkFBQTtDQUNBLHFCQUFBO0NBQUEscUJBQUE7Q0FBQSxjQUFBO0NBQ0EsMEJBQUE7S0FBQSx1QkFBQTtTQUFBLCtCQUFBO0NBQ0EsVUFBQTtDQUNBLGNBQUE7Q0FDQSx5Q0FBQTtDQUFBLGlDQUFBO0NBQ0E7QUFFQTtDQUNBLDBDQUFBO0NBQ0E7QUFDQTtDQUVBLG1CQUFBO0NBQ0Esa0JBQUE7Q0FDQSxpQkFBQTtDQUNBLHFCQUFBO0NBQUEscUJBQUE7Q0FBQSxjQUFBO0NBR0Esb0JBQUE7Q0FDQSxtQkFBQTtDQUNBLGdCQUFBO0NBQ0EsV0FBQTtDQUNBLGtCQUFBO0NBQ0EsY0FBQTtDQUNBLG1CQUFBO0NBQ0EsK0NBQUE7U0FBQSx1Q0FBQTtDQUNBO0FBQ0E7O0NBRUEsWUFBQTtDQUNBLGVBQUE7Q0FDQSxZQUFBO0NBQ0E7QUFFQTtDQUNBLFdBQUE7Q0FDQTtBQUVBO0NBQ0EsbUJBQUE7Q0FDQSxhQUFBO0NBQ0EsY0FBQTtDQUNBLGVBQUE7Q0FDQSwrQ0FBQTtTQUFBLHVDQUFBO0NBQ0EsbUJBQUE7Q0FDQSxpQkFBQTtDQUNBO0FBRUE7Q0FDQSxtQkFBQTtDQUNBLE9BQUE7Q0FDQSxRQUFBO0NBQ0EsV0FBQTtDQUVBLG1CQUFBO0NBQ0Esa0JBQUE7Q0FDQSxpQkFBQTtDQUNBLHFCQUFBO0NBQUEscUJBQUE7Q0FBQSxjQUFBO0NBQ0EseUJBQUE7S0FBQSxzQkFBQTtTQUFBLHdCQUFBO0NBQ0EsMEJBQUE7S0FBQSx1QkFBQTtTQUFBLG9CQUFBO0NBQ0Esb0NBQUE7Q0FDQSxZQUFBO0NBQ0EsYUFBQTtDQUNBLFdBQUE7Q0FDQSxnQ0FBQTtDQUFBLHdCQUFBO0NBQ0E7QUFDQTtDQUNBLFdBQUE7Q0FDQTtBQUNBO0NBQ0EsZUFBQTtDQUNBLFlBQUE7Q0FDQSxpQkFBQTtDQUNBLGVBQUE7Q0FDQTtBQUVBO0NBQ0EsV0FBQTtDQUNBLG9CQUFBO0NBQ0EsZ0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiU2hvdy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVcXFwiPlxcbiAgXFx0XFx0XFx0XFx0PGgyPnt7ICR0KCdlbXBsb3llZScpIH19PC9oMj5cXG4gIFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImVtcGxveWVlX19hdmF0YXJcXFwiPlxcbiAgXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZW1wbG95ZWVfX2F2YXRhci1jb250YWluZXJcXFwiPlxcbiAgXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiYXZhdGFyX19vdmVybGF5XFxcIj5cXG4gIFxcdFxcdFxcdFxcdFxcdFxcdFxcdDx2LWJ0biBkZXByZXNzZWQgbGFyZ2U+e3thdmF0YXJNc2d9fTwvdi1idG4+XFxuICBcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG4gIFxcdFxcdFxcdFxcdFxcdFxcdDxpbWcgOnNyYz1cXFwiYXZhdGFyXFxcIiBhbHQ9XFxcImF2YXRhclxcXCI+XFxuICBcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHRcXHRcXHRcXG4gIFxcdFxcdFxcdFxcdFxcdFxcbiAgXFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0ICBcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJlbXBsb3llZV9fZGVzY3JcXFwiPlxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPnt7ICR0KCduYW1lJykgfX06PC9iPiA8aT57e2l0ZW0uZmlyc3RfbmFtZX19PC9pPlxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcblxcdCAgXFx0XFx0XFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXG5cXHQgIFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxuXFx0ICBcXHRcXHRcXHRcXHRcXHQ8Yj57eyAkdCgnbGFzdF9uYW1lJykgfX06PC9iPiA8aT57e2l0ZW0ubGFzdF9uYW1lfX08L2k+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPnt7ICR0KCdwYXRyb255bWljJykgfX06PC9iPiA8aT57e2l0ZW0ucGF0cm9ueW1pYyA/IGl0ZW0ucGF0cm9ueW1pYyA6ICcnfX08L2k+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPnt7ICR0KCdwb3NpdGlvbicpIH19OjwvYj4gPGk+e3tpdGVtLnBvc2l0aW9ufX08L2k+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPnt7ICR0KCdwaG9uZV9udW1iZXInKSB9fTo8L2I+IDxpPnt7aXRlbS5waG9uZV9udW1iZXJ9fTwvaT5cXG5cXHQgIFxcdFxcdFxcdFxcdDwvcD5cXG5cXHQgIFxcdFxcdFxcdFxcdDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZW1wbG95ZWVfX3RleHRcXFwiPlxcblxcdCAgXFx0XFx0XFx0XFx0XFx0PGI+e3sgJHQoJ3NhbGFyeScpIH19OjwvYj4gPGk+e3tpdGVtLnNhbGFyeX19INGA0YPQsS48L2k+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8L3A+XFxuXFx0ICBcXHRcXHRcXHRcXHQ8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcblxcdCAgXFx0XFx0XFx0XFx0PHAgY2xhc3M9XFxcImVtcGxveWVlX190ZXh0XFxcIj5cXG5cXHQgIFxcdFxcdFxcdFxcdFxcdDxiPnt7ICR0KCdhZGRyZXNzJykgfX06PC9iPiA8aT57e2l0ZW0uYWRkcmVzc319PC9pPlxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcblxcdCAgXFx0XFx0XFx0XFx0PHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cXG5cXHQgIFxcdFxcdFxcdFxcdDxwIGNsYXNzPVxcXCJlbXBsb3llZV9fdGV4dFxcXCI+XFxuXFx0ICBcXHRcXHRcXHRcXHRcXHQ8Yj57eyAkdCgnYmlydGhkYXknKSB9fTo8L2I+IDxpPnt7aXRlbS5iaXJ0aGRheX19PC9pPlxcblxcdCAgXFx0XFx0XFx0XFx0PC9wPlxcblxcdCAgXFx0XFx0XFx0XFx0PHYtYnRuXFxuXFx0XFx0XFx0XFx0ICAgICAgYmxvY2tcXG5cXHRcXHRcXHRcXHQgICAgICA6dG89XFxcIntuYW1lOiAnZW1wbG95ZWVFZGl0JywgcGFyYW1zOiB7aWQ6IGl0ZW0uaWQsIGVtcGxveWVlOiBpdGVtfX1cXFwiXFxuXFx0XFx0XFx0XFx0ICAgID5cXG5cXHRcXHRcXHRcXHQgICAgICB7eyAkdCgnY2hhbmdlX2RhdGEnKSB9fVxcblxcdFxcdFxcdFxcdCAgICA8L3YtYnRuPlxcblxcdCAgXFx0XFx0XFx0PC9kaXY+XFxuICBcXHRcXHRcXHQ8L2Rpdj5cXHRcXHRcXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFx0aW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcXG5cXHRleHBvcnQgZGVmYXVsdCB7XFxuXFx0XFx0cHJvcHM6IHtcXG5cXHRcXHRcXHRpZDoge1xcblxcdFxcdFxcdFxcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXFxuXFx0XFx0XFx0XFx0cmVxdWlyZWQ6IHRydWVcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHRkYXRhKCkge1xcblxcdFxcdFxcdHJldHVybiB7XFxuXFx0XFx0XFx0XFx0aXRlbToge31cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHRjb21wdXRlZDoge1xcblxcdFxcdFxcdGF2YXRhck1zZygpIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy4kdCgnY2hhbmdlX2ltYWdlJykgOiB0aGlzLiR0KCdhZGRfaW1hZ2UnKTtcXG5cXHRcXHRcXHR9LFxcblxcdFxcdFxcdGF2YXRhcigpIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm4gKHRoaXMuaXRlbS5hdmF0YXIpID8gdGhpcy5pdGVtLmF2YXRhciA6IFxcXCJodHRwOi8vZHJhZ2VuZS5uby93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNi9kZWZhdWx0MS5qcGdcXFwiXFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0Y3JlYXRlZCgpIHtcXG5cXHRcXHRcXHR0aGlzLmxvYWQoKTtcXG5cXHRcXHR9LFxcblxcdFxcdG1ldGhvZHM6IHtcXG5cXHRcXHRcXHRhc3luYyBsb2FkKCkge1xcblxcdFxcdFxcdFxcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VtcGxveWVlcycgKyB0aGlzLmlkKTtcXG5cXHRcXHRcXHRcXHR0aGlzLml0ZW0gPSBkYXRhO1xcblxcblxcdFxcdFxcdC8vIFxcdGZldGNoKCcvYXBpL2VtcGxveWVlcy8nICsgdGhpcy5pZCwge1xcblxcdFxcdFxcdC8vIFxcdG1ldGhvZDogJ0dFVCdcXG5cXHRcXHRcXHQvLyB9KVxcblxcdFxcdFxcdC8vICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxcblxcdFxcdFxcdC8vIFxcdFxcdC50aGVuKGRhdGEgPT4gdGhpcy5pdGVtID0gZGF0YSlcXG5cXHRcXHRcXHQvLyB9XFxuXFx0XFx0fVxcblxcdH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcblxcdCoge1xcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7O1xcblxcdFxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHR9XFxuXFxuXFx0aDIge1xcblxcdFxcdGZsZXgtYmFzaXM6IDEwMCU7XFxuXFx0fVxcblxcblxcdHAge1xcblxcdFxcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG5cXHRcXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0XFx0cGFkZGluZzogMTBweDtcXG5cXHRcXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcXG5cXHR9XFxuXFxuXFx0cDpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XFxuXFx0fVxcblxcdC5lbXBsb3llZSB7XFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcblxcdFxcdGRpc3BsYXk6IC1tb3otZmxleDtcXG5cXHRcXHRkaXNwbGF5OiAtbXMtZmxleDtcXG5cXHRcXHRkaXNwbGF5OiAtby1mbGV4O1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0LXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0LW1vei1mbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHQtby1mbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdHdpZHRoOiA5MCU7XFxuXFx0XFx0bWFyZ2luOiAzMHB4IGF1dG87XFxuXFx0XFx0cGFkZGluZzogMTVweDtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0XFx0Ym94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuXFx0fVxcblxcdC5lbXBsb3llZTo6YmVmb3JlLFxcblxcdC5lbXBsb3llZTo6YWZ0ZXIge1xcblxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdGNsZWFyOiBib3RoO1xcblxcdH1cXG5cXG5cXHQuZW1wbG95ZWVfX2F2YXRhciB7XFx0XFxuXFx0XFx0d2lkdGg6IDMwJTtcXG5cXHR9XFxuXFxuXFx0LmVtcGxveWVlX19hdmF0YXItY29udGFpbmVyIHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0d2lkdGg6IDMxNnB4O1xcblxcdFxcdGhlaWdodDogMzE2cHg7XFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0XFx0Ym94LXNoYWRvdzogMCAwIDEzcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0fVxcblxcblxcdC5hdmF0YXJfX292ZXJsYXkge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHR0b3A6IDA7XFxuXFx0XFx0bGVmdDogMDtcXG5cXHRcXHR6LWluZGV4OiAxO1xcblxcdFxcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG5cXHRcXHRkaXNwbGF5OiAtbW96LWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogLW1zLWZsZXg7XFxuXFx0XFx0ZGlzcGxheTogLW8tZmxleDtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0XFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxuXFx0fVxcblxcdC5lbXBsb3llZV9fYXZhdGFyOmhvdmVyIC5hdmF0YXJfX292ZXJsYXkgIHtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG5cXHQuZW1wbG95ZWVfX2F2YXRhciBpbWcge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdG1heC13aWR0aDogMzE2cHg7XFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0fVxcblxcblxcdC5lbXBsb3llZV9fZGVzY3Ige1xcblxcdFxcdHdpZHRoOiA3MCU7XFxuXFx0XFx0cGFkZGluZzogIDEwcHggNDVweDtcXG5cXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0fVxcblxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVlYjg3Y2QwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vZW1wbG95ZWVzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxODdcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlXCIgfSwgW1xuICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiZW1wbG95ZWVcIikpKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fYXZhdGFyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXBsb3llZV9fYXZhdGFyLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImF2YXRhcl9fb3ZlcmxheVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ2LWJ0blwiLCB7IGF0dHJzOiB7IGRlcHJlc3NlZDogXCJcIiwgbGFyZ2U6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmF2YXRhck1zZykpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmF2YXRhciwgYWx0OiBcImF2YXRhclwiIH0gfSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX19kZXNjclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJuYW1lXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmZpcnN0X25hbWUpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImxhc3RfbmFtZVwiKSkgKyBcIjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5sYXN0X25hbWUpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInBhdHJvbnltaWNcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5wYXRyb255bWljID8gX3ZtLml0ZW0ucGF0cm9ueW1pYyA6IFwiXCIpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInBvc2l0aW9uXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnBvc2l0aW9uKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJwaG9uZV9udW1iZXJcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ucGhvbmVfbnVtYmVyKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJzYWxhcnlcIikpICsgXCI6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0uc2FsYXJ5KSArIFwiINGA0YPQsS5cIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImVtcGxveWVlX190ZXh0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJhZGRyZXNzXCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmFkZHJlc3MpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wbG95ZWVfX3RleHRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImJpcnRoZGF5XCIpKSArIFwiOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmJpcnRoZGF5KSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1wbG95ZWVFZGl0XCIsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBfdm0uaXRlbS5pZCwgZW1wbG95ZWU6IF92bS5pdGVtIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdCAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiY2hhbmdlX2RhdGFcIikpICtcbiAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdCAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVlYjg3Y2QwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZWI4N2NkMFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9lbXBsb3llZXMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwic291cmNlUm9vdCI6IiJ9