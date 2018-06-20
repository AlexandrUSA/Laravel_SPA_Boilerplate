webpackJsonp([15],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(188)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(190)
/* template */
var __vue_template__ = __webpack_require__(191)
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

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("290e3550", content, false, {});
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

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\nh2 {\n  font-size: 22px;\n  font-weight: normal;\n  text-align: center;\n}\n.application .application--wrap {\n  position: relative;\n  min-height: auto;\n}\n.card__title {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.title__icon {\n  font-size: 35px;\n  margin: 0 10px;\n}\n.input-group__details .input-group__error {\n  display: block;\n  -webkit-box-flex:0;\n      -ms-flex:none;\n          flex:none;\n}\n.buttons {\n  width: 100%;\n  height: 70px;\n  margin-top: 40px;\n  text-align: center;\n}\n.routerEnter {\n  -webkit-animation: routerEnter .6s;\n          animation: routerEnter .6s;\n}\n.routerLeave {\n  -webkit-animation: routerLeave .6s;\n          animation: routerLeave .6s;\n}\n.buttonEnter {\n  -webkit-animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n          animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\n}\n.buttonLeave {\n  -webkit-animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n          animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\n}\n@-webkit-keyframes routerEnter {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@keyframes routerEnter {\n0% {opacity: 0;\n}\n100% {opacity: 1;\n}\n}\n@-webkit-keyframes routerLeave {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@keyframes routerLeave {\n0% {opacity: 1;\n}\n100% {opacity: 0;\n}\n}\n@-webkit-keyframes buttonEnter {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@keyframes buttonEnter {\n0% {-webkit-transform: scale(0);transform: scale(0);\n}\n100% {-webkit-transform: scale(1);transform: scale(1);\n}\n}\n@-webkit-keyframes buttonLeave {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n@keyframes buttonLeave {\n0% {-webkit-transform: scale(1);transform: scale(1);\n}\n100% {-webkit-transform: scale(0);transform: scale(0);\n}\n}\n\n", "", {"version":3,"sources":["C:/OSPanel/domains/crm/resources/assets/js/pages/admin/resources/assets/js/pages/admin/Dashboard.vue"],"names":[],"mappings":";AA0BA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;CACA;AAEA;EACA,mBAAA;EACA,iBAAA;CACA;AAEA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;CACA;AAEA;EACA,gBAAA;EACA,eAAA;CACA;AAEA;EACA,eAAA;EACA,mBAAA;MAAA,cAAA;UAAA,UAAA;CACA;AAEA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;CACA;AACA;EACA,mCAAA;UAAA,2BAAA;CACA;AAEA;EACA,mCAAA;UAAA,2BAAA;CACA;AAEA;EACA,iEAAA;UAAA,yDAAA;CACA;AAEA;EACA,qEAAA;UAAA,6DAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAHA;AACA,IAAA,WAAA;CAAA;AACA,MAAA,WAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAEA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA;AAHA;AACA,IAAA,4BAAA,oBAAA;CAAA;AACA,MAAA,4BAAA,oBAAA;CAAA;CACA","file":"Dashboard.vue","sourcesContent":["<template>\r\n  <div id=\"admin\">\r\n    <!-- Основной контент -->\r\n      <transition  enter-active-class=\"routerEnter\" leave-active-class=\"routerLeave\" mode=\"out-in\">\r\n        <router-view></router-view>\r\n      </transition>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport { mapGetters } from 'vuex'\r\nexport default {\r\n  data () {\r\n    return {\r\n      \r\n    }\r\n  },\r\n  computed: mapGetters({\r\n    user: 'auth/user',\r\n    drawer: 'theme/drawer'\r\n  })\r\n}\r\n</script>\r\n\r\n\r\n<style>\r\n  h2 {\r\n    font-size: 22px;\r\n    font-weight: normal;\r\n    text-align: center;\r\n  }\r\n\r\n  .application .application--wrap {\r\n    position: relative;\r\n    min-height: auto;\r\n  }\r\n\r\n  .card__title {\r\n    justify-content: center;\r\n  }\r\n\r\n  .title__icon {\r\n    font-size: 35px;\r\n    margin: 0 10px;\r\n  }\r\n\r\n  .input-group__details .input-group__error {\r\n    display: block;\r\n    flex:none;\r\n  }\r\n  \r\n  .buttons {\r\n    width: 100%;\r\n    height: 70px;\r\n    margin-top: 40px;\r\n    text-align: center;\r\n  }\r\n  .routerEnter {\r\n    animation: routerEnter .6s;\r\n  }\r\n\r\n  .routerLeave {\r\n    animation: routerLeave .6s;\r\n  }\r\n\r\n  .buttonEnter {\r\n    animation: buttonEnter .3s cubic-bezier(.09,.9,.48,1.64);\r\n  }\r\n\r\n  .buttonLeave {\r\n    animation: buttonLeave .3s cubic-bezier(.52,-0.44,.88,-0.45);\r\n  }\r\n\r\n  @keyframes routerEnter {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n  }\r\n\r\n  @keyframes routerLeave {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n  }\r\n\r\n  @keyframes buttonEnter {\r\n    0% {transform: scale(0);}\r\n    100% {transform: scale(1);}\r\n  }\r\n\r\n  @keyframes buttonLeave {\r\n    0% {transform: scale(1);}\r\n    100% {transform: scale(0);}\r\n  }\r\n \r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(8);
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

/***/ 191:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlPzVmMWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlPzU5ZWYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vRGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWU/NGUxOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUFzTTtBQUN0TTtBQUNBO0FBQ0E7QUFDQSw0Q0FBZ1Q7QUFDaFQ7QUFDQSw4Q0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTs7QUFFQTtBQUNBLHFDQUF5TztBQUN6TztBQUNBO0FBQ0E7QUFDQSxrRUFBMkg7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSkFBc0osa0ZBQWtGO0FBQ3hPLCtKQUErSixrRkFBa0Y7QUFDalA7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EsK0JBQWdDLG9CQUFvQix3QkFBd0IsdUJBQXVCLEdBQUcsbUNBQW1DLHVCQUF1QixxQkFBcUIsR0FBRyxnQkFBZ0IsNkJBQTZCLDhCQUE4QixvQ0FBb0MsR0FBRyxnQkFBZ0Isb0JBQW9CLG1CQUFtQixHQUFHLDZDQUE2QyxtQkFBbUIsdUJBQXVCLHNCQUFzQixzQkFBc0IsR0FBRyxZQUFZLGdCQUFnQixpQkFBaUIscUJBQXFCLHVCQUF1QixHQUFHLGdCQUFnQix1Q0FBdUMsdUNBQXVDLEdBQUcsZ0JBQWdCLHVDQUF1Qyx1Q0FBdUMsR0FBRyxnQkFBZ0IscUVBQXFFLHFFQUFxRSxHQUFHLGdCQUFnQix5RUFBeUUseUVBQXlFLEdBQUcsa0NBQWtDLE1BQU0sV0FBVyxHQUFHLFFBQVEsV0FBVyxHQUFHLEdBQUcsMEJBQTBCLE1BQU0sV0FBVyxHQUFHLFFBQVEsV0FBVyxHQUFHLEdBQUcsa0NBQWtDLE1BQU0sV0FBVyxHQUFHLFFBQVEsV0FBVyxHQUFHLEdBQUcsMEJBQTBCLE1BQU0sV0FBVyxHQUFHLFFBQVEsV0FBVyxHQUFHLEdBQUcsa0NBQWtDLE1BQU0sNEJBQTRCLG9CQUFvQixHQUFHLFFBQVEsNEJBQTRCLG9CQUFvQixHQUFHLEdBQUcsMEJBQTBCLE1BQU0sNEJBQTRCLG9CQUFvQixHQUFHLFFBQVEsNEJBQTRCLG9CQUFvQixHQUFHLEdBQUcsa0NBQWtDLE1BQU0sNEJBQTRCLG9CQUFvQixHQUFHLFFBQVEsNEJBQTRCLG9CQUFvQixHQUFHLEdBQUcsMEJBQTBCLE1BQU0sNEJBQTRCLG9CQUFvQixHQUFHLFFBQVEsNEJBQTRCLG9CQUFvQixHQUFHLEdBQUcsWUFBWSx1SkFBdUosTUFBTSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLGVBQWUsS0FBSyxlQUFlLEtBQUssS0FBSyxLQUFLLGVBQWUsS0FBSyxlQUFlLEtBQUssS0FBSyxLQUFLLGVBQWUsS0FBSyxlQUFlLEtBQUssS0FBSyxLQUFLLGVBQWUsS0FBSyxlQUFlLEtBQUssS0FBSyxLQUFLLHNCQUFzQixLQUFLLHNCQUFzQixLQUFLLEtBQUssS0FBSyxzQkFBc0IsS0FBSyxzQkFBc0IsS0FBSyxLQUFLLEtBQUssc0JBQXNCLEtBQUssc0JBQXNCLEtBQUssS0FBSyxLQUFLLHNCQUFzQixLQUFLLHNCQUFzQixLQUFLLHVWQUF1VixhQUFhLGdDQUFnQyxlQUFlLGdCQUFnQixtQkFBbUIsT0FBTyw2QkFBNkIsK0RBQStELE1BQU0sMENBQTBDLHdCQUF3Qiw0QkFBNEIsMkJBQTJCLE9BQU8sMkNBQTJDLDJCQUEyQix5QkFBeUIsT0FBTyx3QkFBd0IsZ0NBQWdDLE9BQU8sd0JBQXdCLHdCQUF3Qix1QkFBdUIsT0FBTyxxREFBcUQsdUJBQXVCLGtCQUFrQixPQUFPLHNCQUFzQixvQkFBb0IscUJBQXFCLHlCQUF5QiwyQkFBMkIsT0FBTyxvQkFBb0IsbUNBQW1DLE9BQU8sd0JBQXdCLG1DQUFtQyxPQUFPLHdCQUF3QixpRUFBaUUsT0FBTyx3QkFBd0IscUVBQXFFLE9BQU8sa0NBQWtDLFlBQVksWUFBWSxjQUFjLFlBQVksT0FBTyxrQ0FBa0MsWUFBWSxZQUFZLGNBQWMsWUFBWSxPQUFPLGtDQUFrQyxZQUFZLHFCQUFxQixjQUFjLHFCQUFxQixPQUFPLGtDQUFrQyxZQUFZLHFCQUFxQixjQUFjLHFCQUFxQixPQUFPLG9DQUFvQzs7QUFFdHhKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHQTtBQUNBO3dCQUVBO1dBR0E7QUFDQTs7O1VBRUE7WUFFQTtBQUhBO0FBTkEsRzs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxjQUFjLEVBQUU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8xNS43OTYzMTIxNTY2NTQzMGM3YTk3My5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTZhNmI4YzBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vRGFzaGJvYXJkLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9EYXNoYm9hcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01NmE2YjhjMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcYWRtaW5cXFxcRGFzaGJvYXJkLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NmE2YjhjMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU2YTZiOGMwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE1IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU2YTZiOGMwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjI5MGUzNTUwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01NmE2YjhjMFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXNoYm9hcmQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU2YTZiOGMwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNTZhNmI4YzBcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vRGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaDIge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFwcGxpY2F0aW9uIC5hcHBsaWNhdGlvbi0td3JhcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiBhdXRvO1xcbn1cXG4uY2FyZF9fdGl0bGUge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50aXRsZV9faWNvbiB7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuLmlucHV0LWdyb3VwX19kZXRhaWxzIC5pbnB1dC1ncm91cF9fZXJyb3Ige1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1mbGV4OjA7XFxuICAgICAgLW1zLWZsZXg6bm9uZTtcXG4gICAgICAgICAgZmxleDpub25lO1xcbn1cXG4uYnV0dG9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzBweDtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5yb3V0ZXJFbnRlciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcm91dGVyRW50ZXIgLjZzO1xcbiAgICAgICAgICBhbmltYXRpb246IHJvdXRlckVudGVyIC42cztcXG59XFxuLnJvdXRlckxlYXZlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3V0ZXJMZWF2ZSAuNnM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcm91dGVyTGVhdmUgLjZzO1xcbn1cXG4uYnV0dG9uRW50ZXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBidXR0b25FbnRlciAuM3MgY3ViaWMtYmV6aWVyKC4wOSwuOSwuNDgsMS42NCk7XFxufVxcbi5idXR0b25MZWF2ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYnV0dG9uTGVhdmUgLjNzIGN1YmljLWJlemllciguNTIsLTAuNDQsLjg4LC0wLjQ1KTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBidXR0b25MZWF2ZSAuM3MgY3ViaWMtYmV6aWVyKC41MiwtMC40NCwuODgsLTAuNDUpO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm91dGVyRW50ZXIge1xcbjAlIHtvcGFjaXR5OiAwO1xcbn1cXG4xMDAlIHtvcGFjaXR5OiAxO1xcbn1cXG59XFxuQGtleWZyYW1lcyByb3V0ZXJFbnRlciB7XFxuMCUge29wYWNpdHk6IDA7XFxufVxcbjEwMCUge29wYWNpdHk6IDE7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm91dGVyTGVhdmUge1xcbjAlIHtvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtvcGFjaXR5OiAwO1xcbn1cXG59XFxuQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XFxuMCUge29wYWNpdHk6IDE7XFxufVxcbjEwMCUge29wYWNpdHk6IDA7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnV0dG9uRW50ZXIge1xcbjAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO3RyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcXG4wJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO3RyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbjEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJ1dHRvbkxlYXZlIHtcXG4wJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO3RyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbjEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTt0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG59XFxuQGtleWZyYW1lcyBidXR0b25MZWF2ZSB7XFxuMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTt0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4xMDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9PU1BhbmVsL2RvbWFpbnMvY3JtL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEwQkE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7Q0FDQTtBQUVBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtDQUNBO0FBRUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsd0JBQUE7Q0FDQTtBQUVBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0NBQ0E7QUFFQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtNQUFBLGNBQUE7VUFBQSxVQUFBO0NBQ0E7QUFFQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtDQUNBO0FBQ0E7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0NBQ0E7QUFFQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7Q0FDQTtBQUVBO0VBQ0EsaUVBQUE7VUFBQSx5REFBQTtDQUNBO0FBRUE7RUFDQSxxRUFBQTtVQUFBLDZEQUFBO0NBQ0E7QUFFQTtBQUNBLElBQUEsV0FBQTtDQUFBO0FBQ0EsTUFBQSxXQUFBO0NBQUE7Q0FDQTtBQUhBO0FBQ0EsSUFBQSxXQUFBO0NBQUE7QUFDQSxNQUFBLFdBQUE7Q0FBQTtDQUNBO0FBRUE7QUFDQSxJQUFBLFdBQUE7Q0FBQTtBQUNBLE1BQUEsV0FBQTtDQUFBO0NBQ0E7QUFIQTtBQUNBLElBQUEsV0FBQTtDQUFBO0FBQ0EsTUFBQSxXQUFBO0NBQUE7Q0FDQTtBQUVBO0FBQ0EsSUFBQSw0QkFBQSxvQkFBQTtDQUFBO0FBQ0EsTUFBQSw0QkFBQSxvQkFBQTtDQUFBO0NBQ0E7QUFIQTtBQUNBLElBQUEsNEJBQUEsb0JBQUE7Q0FBQTtBQUNBLE1BQUEsNEJBQUEsb0JBQUE7Q0FBQTtDQUNBO0FBRUE7QUFDQSxJQUFBLDRCQUFBLG9CQUFBO0NBQUE7QUFDQSxNQUFBLDRCQUFBLG9CQUFBO0NBQUE7Q0FDQTtBQUhBO0FBQ0EsSUFBQSw0QkFBQSxvQkFBQTtDQUFBO0FBQ0EsTUFBQSw0QkFBQSxvQkFBQTtDQUFBO0NBQ0FcIixcImZpbGVcIjpcIkRhc2hib2FyZC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBpZD1cXFwiYWRtaW5cXFwiPlxcclxcbiAgICA8IS0tINCe0YHQvdC+0LLQvdC+0Lkg0LrQvtC90YLQtdC90YIgLS0+XFxyXFxuICAgICAgPHRyYW5zaXRpb24gIGVudGVyLWFjdGl2ZS1jbGFzcz1cXFwicm91dGVyRW50ZXJcXFwiIGxlYXZlLWFjdGl2ZS1jbGFzcz1cXFwicm91dGVyTGVhdmVcXFwiIG1vZGU9XFxcIm91dC1pblxcXCI+XFxyXFxuICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXHJcXG4gICAgICA8L3RyYW5zaXRpb24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcXHJcXG5leHBvcnQgZGVmYXVsdCB7XFxyXFxuICBkYXRhICgpIHtcXHJcXG4gICAgcmV0dXJuIHtcXHJcXG4gICAgICBcXHJcXG4gICAgfVxcclxcbiAgfSxcXHJcXG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKHtcXHJcXG4gICAgdXNlcjogJ2F1dGgvdXNlcicsXFxyXFxuICAgIGRyYXdlcjogJ3RoZW1lL2RyYXdlcidcXHJcXG4gIH0pXFxyXFxufVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcblxcclxcbjxzdHlsZT5cXHJcXG4gIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYXBwbGljYXRpb24gLmFwcGxpY2F0aW9uLS13cmFwIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmRfX3RpdGxlIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGVfX2ljb24ge1xcclxcbiAgICBmb250LXNpemU6IDM1cHg7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmlucHV0LWdyb3VwX19kZXRhaWxzIC5pbnB1dC1ncm91cF9fZXJyb3Ige1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZmxleDpub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnV0dG9ucyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5yb3V0ZXJFbnRlciB7XFxyXFxuICAgIGFuaW1hdGlvbjogcm91dGVyRW50ZXIgLjZzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJvdXRlckxlYXZlIHtcXHJcXG4gICAgYW5pbWF0aW9uOiByb3V0ZXJMZWF2ZSAuNnM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnV0dG9uRW50ZXIge1xcclxcbiAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idXR0b25MZWF2ZSB7XFxyXFxuICAgIGFuaW1hdGlvbjogYnV0dG9uTGVhdmUgLjNzIGN1YmljLWJlemllciguNTIsLTAuNDQsLjg4LC0wLjQ1KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBrZXlmcmFtZXMgcm91dGVyRW50ZXIge1xcclxcbiAgICAwJSB7b3BhY2l0eTogMDt9XFxyXFxuICAgIDEwMCUge29wYWNpdHk6IDE7fVxcclxcbiAgfVxcclxcblxcclxcbiAgQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAxO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAa2V5ZnJhbWVzIGJ1dHRvbkVudGVyIHtcXHJcXG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxcclxcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBrZXlmcmFtZXMgYnV0dG9uTGVhdmUge1xcclxcbiAgICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XFxyXFxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxcclxcbiAgfVxcclxcbiBcXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01NmE2YjhjMFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxODlcbi8vIG1vZHVsZSBjaHVua3MgPSAxNSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGlkPVwiYWRtaW5cIj5cclxuICAgIDwhLS0g0J7RgdC90L7QstC90L7QuSDQutC+0L3RgtC10L3RgiAtLT5cclxuICAgICAgPHRyYW5zaXRpb24gIGVudGVyLWFjdGl2ZS1jbGFzcz1cInJvdXRlckVudGVyXCIgbGVhdmUtYWN0aXZlLWNsYXNzPVwicm91dGVyTGVhdmVcIiBtb2RlPVwib3V0LWluXCI+XHJcbiAgICAgICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XHJcbiAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoe1xyXG4gICAgdXNlcjogJ2F1dGgvdXNlcicsXHJcbiAgICBkcmF3ZXI6ICd0aGVtZS9kcmF3ZXInXHJcbiAgfSlcclxufVxyXG48L3NjcmlwdD5cclxuXHJcblxyXG48c3R5bGU+XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5hcHBsaWNhdGlvbiAuYXBwbGljYXRpb24tLXdyYXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jYXJkX190aXRsZSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC50aXRsZV9faWNvbiB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1ncm91cF9fZGV0YWlscyAuaW5wdXQtZ3JvdXBfX2Vycm9yIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxleDpub25lO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9ucyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5yb3V0ZXJFbnRlciB7XHJcbiAgICBhbmltYXRpb246IHJvdXRlckVudGVyIC42cztcclxuICB9XHJcblxyXG4gIC5yb3V0ZXJMZWF2ZSB7XHJcbiAgICBhbmltYXRpb246IHJvdXRlckxlYXZlIC42cztcclxuICB9XHJcblxyXG4gIC5idXR0b25FbnRlciB7XHJcbiAgICBhbmltYXRpb246IGJ1dHRvbkVudGVyIC4zcyBjdWJpYy1iZXppZXIoLjA5LC45LC40OCwxLjY0KTtcclxuICB9XHJcblxyXG4gIC5idXR0b25MZWF2ZSB7XHJcbiAgICBhbmltYXRpb246IGJ1dHRvbkxlYXZlIC4zcyBjdWJpYy1iZXppZXIoLjUyLC0wLjQ0LC44OCwtMC40NSk7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHJvdXRlckVudGVyIHtcclxuICAgIDAlIHtvcGFjaXR5OiAwO31cclxuICAgIDEwMCUge29wYWNpdHk6IDE7fVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyByb3V0ZXJMZWF2ZSB7XHJcbiAgICAwJSB7b3BhY2l0eTogMTt9XHJcbiAgICAxMDAlIHtvcGFjaXR5OiAwO31cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgYnV0dG9uRW50ZXIge1xyXG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxyXG4gICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGJ1dHRvbkxlYXZlIHtcclxuICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cclxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7fVxyXG4gIH1cclxuIFxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL0Rhc2hib2FyZC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJhZG1pblwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJyb3V0ZXJFbnRlclwiLFxuICAgICAgICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogXCJyb3V0ZXJMZWF2ZVwiLFxuICAgICAgICAgICAgbW9kZTogXCJvdXQtaW5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwicm91dGVyLXZpZXdcIildLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNTZhNmI4YzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTU2YTZiOGMwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9EYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxNSJdLCJzb3VyY2VSb290IjoiIn0=