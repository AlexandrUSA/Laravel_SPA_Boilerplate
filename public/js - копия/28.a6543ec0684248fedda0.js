webpackJsonp([28],{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(189)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(191)
/* template */
var __vue_template__ = __webpack_require__(192)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources\\assets\\js\\pages\\admin\\Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56a6b8c0", Component.options)
  } else {
    hotAPI.reload("data-v-56a6b8c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(190);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("c5058984", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-56a6b8c0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-56a6b8c0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\nh2 {\n  font-size: 22px;\n  font-weight: normal;\n  text-align: center;\n}\n.application .application--wrap {\n  position: relative;\n  min-height: auto;\n}\n.card__title {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.title__icon {\n  font-size: 35px;\n  margin: 0 10px;\n}\n.input-group__details .input-group__error {\n  display: block;\n  -webkit-box-flex:0;\n      -ms-flex:none;\n          flex:none;\n}\n.buttons {\n  width: 100%;\n  height: 70px;\n  margin-top: 40px;\n  text-align: center;\n}\n.routerEnter {\n  -webkit-animation: routerEnter .6s;\n          animation: routerEnter .6s;\n}\n.routerLeave {\n  -webkit-animation: routerLeave .6s;\n          animation: routerLeave .6s;\n}\n.buttonEnter {\n  -webkit-animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n          animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n}\n.buttonLeave {\n  -webkit-animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n          animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n}\n@-webkit-keyframes routerEnter {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@keyframes routerEnter {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@-webkit-keyframes routerLeave {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@keyframes routerLeave {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@-webkit-keyframes buttonEnter {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@keyframes buttonEnter {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@-webkit-keyframes buttonLeave {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n@keyframes buttonLeave {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/admin/resources/assets/js/pages/admin/Dashboard.vue"],"names":[],"mappings":";AA2BA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;CACA;AAEA;EACA,mBAAA;EACA,iBAAA;CACA;AAEA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;CACA;AAEA;EACA,gBAAA;EACA,eAAA;CACA;AAEA;EACA,eAAA;EACA,mBAAA;MAAA,cAAA;UAAA,UAAA;CACA;AAEA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;CACA;AACA;EACA,mCAAA;UAAA,2BAAA;CACA;AAEA;EACA,mCAAA;UAAA,2BAAA;CACA;AAEA;EACA,iEAAA;UAAA,yDAAA;CACA;AAEA;EACA,qEAAA;UAAA,6DAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA","file":"Dashboard.vue","sourcesContent":["<template>\n  <div id=\"admin\">\n    <!-- Основной контент -->\n      <transition  enter-active-class=\"routerEnter\" leave-active-class=\"routerLeave\" mode=\"out-in\">\n        <router-view></router-view>\n      </transition>\n    </div>\n</template>\n\n<script>\nimport { mapGetters } from 'vuex'\nexport default {\n  data () {\n    return {\n      \n\n      \n    }\n  },\n  computed: mapGetters({\n    user: 'auth/user',\n    drawer: 'theme/drawer'\n  })\n}\n</script>\n\n\n<style>\n  h2 {\n    font-size: 22px;\n    font-weight: normal;\n    text-align: center;\n  }\n\n  .application .application--wrap {\n    position: relative;\n    min-height: auto;\n  }\n\n  .card__title {\n    justify-content: center;\n  }\n\n  .title__icon {\n    font-size: 35px;\n    margin: 0 10px;\n  }\n\n  .input-group__details .input-group__error {\n    display: block;\n    flex:none;\n  }\n  \n  .buttons {\n    width: 100%;\n    height: 70px;\n    margin-top: 40px;\n    text-align: center;\n  }\n  .routerEnter {\n    animation: routerEnter .6s;\n  }\n\n  .routerLeave {\n    animation: routerLeave .6s;\n  }\n\n  .buttonEnter {\n    animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n  }\n\n  .buttonLeave {\n    animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n  }\n\n  @keyframes routerEnter {\n    0% {opacity: 0;}\n    100% {opacity: 1;}\n  }\n\n  @keyframes routerLeave {\n    0% {opacity: 1;}\n    100% {opacity: 0;}\n  }\n\n  @keyframes buttonEnter {\n    0% {transform: scale(0);}\n    100% {transform: scale(1);}\n  }\n\n  @keyframes buttonLeave {\n    0% {transform: scale(1);}\n    100% {transform: scale(0);}\n  }\n \n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(7);
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
  data: function data() {
    return {};
  },

  computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/user',
    drawer: 'theme/drawer'
  })
});

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "admin" } },
    [
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "routerEnter",
            "leave-active-class": "routerLeave",
            mode: "out-in"
          }
        },
        [_c("router-view")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-56a6b8c0", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlPzVmMWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlPzU5ZWYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vRGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWU/NGUxOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUFzTTtBQUN0TTtBQUNBO0FBQ0E7QUFDQSw0Q0FBZ1Q7QUFDaFQ7QUFDQSw4Q0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTs7QUFFQTtBQUNBLHFDQUF5TztBQUN6TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLGtGQUFrRjtBQUN4TywrSkFBK0osa0ZBQWtGO0FBQ2pQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLCtCQUFnQyxvQkFBb0Isd0JBQXdCLHVCQUF1QixHQUFHLG1DQUFtQyx1QkFBdUIscUJBQXFCLEdBQUcsZ0JBQWdC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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzI4LmE2NTQzZWMwNjg0MjQ4ZmVkZGEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01NmE2YjhjMFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmQudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTU2YTZiOGMwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRGFzaGJvYXJkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxhZG1pblxcXFxEYXNoYm9hcmQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU2YTZiOGMwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTZhNmI4YzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vRGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMjgiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTZhNmI4YzBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYzUwNTg5ODRcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTZhNmI4YzBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01NmE2YjhjMFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmQudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTU2YTZiOGMwXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDI4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hcHBsaWNhdGlvbiAuYXBwbGljYXRpb24tLXdyYXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogYXV0bztcXG59XFxuLmNhcmRfX3RpdGxlIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udGl0bGVfX2ljb24ge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxufVxcbi5pbnB1dC1ncm91cF9fZGV0YWlscyAuaW5wdXQtZ3JvdXBfX2Vycm9yIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtZmxleDowO1xcbiAgICAgIC1tcy1mbGV4Om5vbmU7XFxuICAgICAgICAgIGZsZXg6bm9uZTtcXG59XFxuLmJ1dHRvbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucm91dGVyRW50ZXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdXRlckVudGVyIC42cztcXG4gICAgICAgICAgYW5pbWF0aW9uOiByb3V0ZXJFbnRlciAuNnM7XFxufVxcbi5yb3V0ZXJMZWF2ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcm91dGVyTGVhdmUgLjZzO1xcbiAgICAgICAgICBhbmltYXRpb246IHJvdXRlckxlYXZlIC42cztcXG59XFxuLmJ1dHRvbkVudGVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidXR0b25FbnRlciAuM3MgY3ViaWMtYmV6aWVyKC4wOSwuOSwuNDgsMS42NCk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogYnV0dG9uRW50ZXIgLjNzIGN1YmljLWJlemllciguMDksLjksLjQ4LDEuNjQpO1xcbn1cXG4uYnV0dG9uTGVhdmUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1dHRvbkxlYXZlIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUgLjNzIGN1YmljLWJlemllciguNTIsLTAuNDQsLjg4LC0wLjQ1KTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdXRlckVudGVyIHtcXG4wJSB7b3BhY2l0eTogMDtcXG59XFxuMTAwJSB7b3BhY2l0eTogMTtcXG59XFxufVxcbkBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xcbjAlIHtvcGFjaXR5OiAwO1xcbn1cXG4xMDAlIHtvcGFjaXR5OiAxO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdXRlckxlYXZlIHtcXG4wJSB7b3BhY2l0eTogMTtcXG59XFxuMTAwJSB7b3BhY2l0eTogMDtcXG59XFxufVxcbkBrZXlmcmFtZXMgcm91dGVyTGVhdmUge1xcbjAlIHtvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtvcGFjaXR5OiAwO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcXG4wJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO3RyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbjEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBidXR0b25FbnRlciB7XFxuMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTt0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4xMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBidXR0b25MZWF2ZSB7XFxuMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4xMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xcbjAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO3RyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vRGFzaGJvYXJkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMkJBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0NBQ0E7QUFFQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7Q0FDQTtBQUVBO0VBQ0EseUJBQUE7TUFBQSxzQkFBQTtVQUFBLHdCQUFBO0NBQ0E7QUFFQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtDQUNBO0FBRUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7TUFBQSxjQUFBO1VBQUEsVUFBQTtDQUNBO0FBRUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7Q0FDQTtBQUNBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtDQUNBO0FBRUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0NBQ0E7QUFFQTtFQUNBLGlFQUFBO1VBQUEseURBQUE7Q0FDQTtBQUVBO0VBQ0EscUVBQUE7VUFBQSw2REFBQTtDQUNBO0FBRUE7QUFDQSxJQUFBLFdBQUE7Q0FBQTtBQUNBLE1BQUEsV0FBQTtDQUFBO0NBQ0E7QUFIQTtBQUNBLElBQUEsV0FBQTtDQUFBO0FBQ0EsTUFBQSxXQUFBO0NBQUE7Q0FDQTtBQUVBO0FBQ0EsSUFBQSxXQUFBO0NBQUE7QUFDQSxNQUFBLFdBQUE7Q0FBQTtDQUNBO0FBSEE7QUFDQSxJQUFBLFdBQUE7Q0FBQTtBQUNBLE1BQUEsV0FBQTtDQUFBO0NBQ0E7QUFFQTtBQUNBLElBQUEsNEJBQUEsb0JBQUE7Q0FBQTtBQUNBLE1BQUEsNEJBQUEsb0JBQUE7Q0FBQTtDQUNBO0FBSEE7QUFDQSxJQUFBLDRCQUFBLG9CQUFBO0NBQUE7QUFDQSxNQUFBLDRCQUFBLG9CQUFBO0NBQUE7Q0FDQTtBQUVBO0FBQ0EsSUFBQSw0QkFBQSxvQkFBQTtDQUFBO0FBQ0EsTUFBQSw0QkFBQSxvQkFBQTtDQUFBO0NBQ0E7QUFIQTtBQUNBLElBQUEsNEJBQUEsb0JBQUE7Q0FBQTtBQUNBLE1BQUEsNEJBQUEsb0JBQUE7Q0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJEYXNoYm9hcmQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgaWQ9XFxcImFkbWluXFxcIj5cXG4gICAgPCEtLSDQntGB0L3QvtCy0L3QvtC5INC60L7QvdGC0LXQvdGCIC0tPlxcbiAgICAgIDx0cmFuc2l0aW9uICBlbnRlci1hY3RpdmUtY2xhc3M9XFxcInJvdXRlckVudGVyXFxcIiBsZWF2ZS1hY3RpdmUtY2xhc3M9XFxcInJvdXRlckxlYXZlXFxcIiBtb2RlPVxcXCJvdXQtaW5cXFwiPlxcbiAgICAgICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XFxuICAgICAgPC90cmFuc2l0aW9uPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgZGF0YSAoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgXFxuXFxuICAgICAgXFxuICAgIH1cXG4gIH0sXFxuICBjb21wdXRlZDogbWFwR2V0dGVycyh7XFxuICAgIHVzZXI6ICdhdXRoL3VzZXInLFxcbiAgICBkcmF3ZXI6ICd0aGVtZS9kcmF3ZXInXFxuICB9KVxcbn1cXG48L3NjcmlwdD5cXG5cXG5cXG48c3R5bGU+XFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFwcGxpY2F0aW9uIC5hcHBsaWNhdGlvbi0td3JhcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIC5jYXJkX190aXRsZSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLnRpdGxlX19pY29uIHtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG4gIH1cXG5cXG4gIC5pbnB1dC1ncm91cF9fZGV0YWlscyAuaW5wdXQtZ3JvdXBfX2Vycm9yIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZsZXg6bm9uZTtcXG4gIH1cXG4gIFxcbiAgLmJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAucm91dGVyRW50ZXIge1xcbiAgICBhbmltYXRpb246IHJvdXRlckVudGVyIC42cztcXG4gIH1cXG5cXG4gIC5yb3V0ZXJMZWF2ZSB7XFxuICAgIGFuaW1hdGlvbjogcm91dGVyTGVhdmUgLjZzO1xcbiAgfVxcblxcbiAgLmJ1dHRvbkVudGVyIHtcXG4gICAgYW5pbWF0aW9uOiBidXR0b25FbnRlciAuM3MgY3ViaWMtYmV6aWVyKC4wOSwuOSwuNDgsMS42NCk7XFxuICB9XFxuXFxuICAuYnV0dG9uTGVhdmUge1xcbiAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHJvdXRlckVudGVyIHtcXG4gICAgMCUge29wYWNpdHk6IDA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgcm91dGVyTGVhdmUge1xcbiAgICAwJSB7b3BhY2l0eTogMTt9XFxuICAgIDEwMCUge29wYWNpdHk6IDA7fVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBidXR0b25FbnRlciB7XFxuICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cXG4gICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlIHtcXG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDApO31cXG4gIH1cXG4gXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNTZhNmI4YzBcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vRGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMjgiLCI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhZG1pblwiPlxuICAgIDwhLS0g0J7RgdC90L7QstC90L7QuSDQutC+0L3RgtC10L3RgiAtLT5cbiAgICAgIDx0cmFuc2l0aW9uICBlbnRlci1hY3RpdmUtY2xhc3M9XCJyb3V0ZXJFbnRlclwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cInJvdXRlckxlYXZlXCIgbW9kZT1cIm91dC1pblwiPlxuICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cbiAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFxuXG4gICAgICBcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcbiAgICB1c2VyOiAnYXV0aC91c2VyJyxcbiAgICBkcmF3ZXI6ICd0aGVtZS9kcmF3ZXInXG4gIH0pXG59XG48L3NjcmlwdD5cblxuXG48c3R5bGU+XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYXBwbGljYXRpb24gLmFwcGxpY2F0aW9uLS13cmFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5jYXJkX190aXRsZSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAudGl0bGVfX2ljb24ge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuXG4gIC5pbnB1dC1ncm91cF9fZGV0YWlscyAuaW5wdXQtZ3JvdXBfX2Vycm9yIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbGV4Om5vbmU7XG4gIH1cbiAgXG4gIC5idXR0b25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnJvdXRlckVudGVyIHtcbiAgICBhbmltYXRpb246IHJvdXRlckVudGVyIC42cztcbiAgfVxuXG4gIC5yb3V0ZXJMZWF2ZSB7XG4gICAgYW5pbWF0aW9uOiByb3V0ZXJMZWF2ZSAuNnM7XG4gIH1cblxuICAuYnV0dG9uRW50ZXIge1xuICAgIGFuaW1hdGlvbjogYnV0dG9uRW50ZXIgLjNzIGN1YmljLWJlemllciguMDksLjksLjQ4LDEuNjQpO1xuICB9XG5cbiAgLmJ1dHRvbkxlYXZlIHtcbiAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XG4gIH1cblxuICBAa2V5ZnJhbWVzIHJvdXRlckVudGVyIHtcbiAgICAwJSB7b3BhY2l0eTogMDt9XG4gICAgMTAwJSB7b3BhY2l0eTogMTt9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHJvdXRlckxlYXZlIHtcbiAgICAwJSB7b3BhY2l0eTogMTt9XG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcbiAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XG4gICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlIHtcbiAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XG4gICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XG4gIH1cbiBcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vRGFzaGJvYXJkLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImFkbWluXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcInJvdXRlckVudGVyXCIsXG4gICAgICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcInJvdXRlckxlYXZlXCIsXG4gICAgICAgICAgICBtb2RlOiBcIm91dC1pblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJyb3V0ZXItdmlld1wiKV0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01NmE2YjhjMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNTZhNmI4YzBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDI4Il0sInNvdXJjZVJvb3QiOiIifQ==