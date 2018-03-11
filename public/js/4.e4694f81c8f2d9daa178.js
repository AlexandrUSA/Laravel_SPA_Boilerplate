webpackJsonp([4],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(170)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(172)
/* template */
var __vue_template__ = __webpack_require__(173)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74dfe770"
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
Component.options.__file = "resources\\assets\\js\\pages\\settings\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74dfe770", Component.options)
  } else {
    hotAPI.reload("data-v-74dfe770", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("2b5e8cbc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74dfe770\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74dfe770\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.navigation-drawer[data-v-74dfe770] {\n  display: inline-block;\n  vertical-align: top;\n  height: auto;\n  margin-top: 20px !important;\n  padding-bottom: 0;\n}\n.input-group--selection-controls[data-v-74dfe770] {\n  padding: 0 16px;\n}\n.card[data-v-74dfe770] {\n  padding: 30px;\n}\n.user-settings[data-v-74dfe770] {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/settings/resources/assets/js/pages/settings/index.vue"],"names":[],"mappings":";AAgGA;EACA,sBAAA;EACA,oBAAA;EACA,aAAA;EACA,4BAAA;EACA,kBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,cAAA;CACA;AAEA;EAEA,mBAAA;EACA,kBAAA;EACA,iBAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <v-content>\n    <v-navigation-drawer stateless permanent floating value=\"true\">\n      <v-toolbar flat class=\"transparent\">\n        <v-list class=\"pa-0\">\n          <v-list-tile avatar>\n            <v-list-tile-avatar>\n              <img :src=\"user.photo_url\">\n            </v-list-tile-avatar>\n            <v-list-tile-content>\n              <v-list-tile-title>{{ user.name }}</v-list-tile-title>\n            </v-list-tile-content>\n          </v-list-tile>\n        </v-list>\n      </v-toolbar>\n      <v-list dense class=\"pt-0\">\n        <v-divider></v-divider>\n        <v-list-tile v-for=\"tab in tabs\" :key=\"tab.id\" :to=\"{ name: tab.route }\">\n          <v-list-tile-action>\n            <v-icon>{{ tab.icon }}</v-icon>\n          </v-list-tile-action>\n          <v-list-tile-content>\n            <v-list-tile-title>{{ tab.name }}</v-list-tile-title>\n          </v-list-tile-content>\n        </v-list-tile>\n      </v-list>\n    <div id=\"theme-switcher\">\n      <v-switch\n        :label=\"'Темная тема'\"\n        v-model=\"dark\"\n      ></v-switch>\n    </div> \n    </v-navigation-drawer>\n    <div class=\"settings__content card\">\n      <transition name=\"fade\" mode=\"out-in\">\n        <router-view/>\n      </transition>\n    </div>\n  </v-content>    \n\n</template>\n\n<script>\nimport { mapGetters, mapActions } from 'vuex';\n\nexport default {\n  middleware: 'auth',\n  data () {\n    return {\n      dark: null,\n      right: null\n    }\n  },\n  computed: {\n    ...mapGetters({\n      user: 'auth/user',\n      theme: 'theme/dark'\n    }),\n    tabs () {\n      return [\n        {\n          id: 0,\n          icon: 'person',\n          name: this.$t('profile'),\n          route: 'settings.profile'\n        },\n        {\n          id: 1,\n          icon: 'lock',\n          name: this.$t('password'),\n          route: 'settings.password'\n        }\n      ]\n    },\n    image() {\n      return (this.user) ? this.user.photo_url : false;\n    }\n  },\n  created() {\n    this.dark = this.theme;\n  },\n  watch: {\n    dark() {\n      this.switchTheme(this.dark)\n    }\n  },\n  methods: {\n    ...mapActions({\n      switchTheme: 'theme/switchTheme'\n    })\n  }\n}\n</script>\n\n<style scoped>\n\n.navigation-drawer {\n  display: inline-block;\n  vertical-align: top;\n  height: auto;\n  margin-top: 20px !important;\n  padding-bottom: 0;\n}\n\n.input-group--selection-controls {\n  padding: 0 16px;\n}\n\n.card {\n  padding: 30px;\n}\n\n.user-settings {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  justify-content: center;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(7);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      dark: null,
      right: null
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/user',
    theme: 'theme/dark'
  }), {
    tabs: function tabs() {
      return [{
        id: 0,
        icon: 'person',
        name: this.$t('profile'),
        route: 'settings.profile'
      }, {
        id: 1,
        icon: 'lock',
        name: this.$t('password'),
        route: 'settings.password'
      }];
    },
    image: function image() {
      return this.user ? this.user.photo_url : false;
    }
  }),
  created: function created() {
    this.dark = this.theme;
  },

  watch: {
    dark: function dark() {
      this.switchTheme(this.dark);
    }
  },
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
    switchTheme: 'theme/switchTheme'
  }))
});

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: { stateless: "", permanent: "", floating: "", value: "true" }
        },
        [
          _c(
            "v-toolbar",
            { staticClass: "transparent", attrs: { flat: "" } },
            [
              _c(
                "v-list",
                { staticClass: "pa-0" },
                [
                  _c(
                    "v-list-tile",
                    { attrs: { avatar: "" } },
                    [
                      _c("v-list-tile-avatar", [
                        _c("img", { attrs: { src: _vm.user.photo_url } })
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [
                          _c("v-list-tile-title", [
                            _vm._v(_vm._s(_vm.user.name))
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list",
            { staticClass: "pt-0", attrs: { dense: "" } },
            [
              _c("v-divider"),
              _vm._v(" "),
              _vm._l(_vm.tabs, function(tab) {
                return _c(
                  "v-list-tile",
                  { key: tab.id, attrs: { to: { name: tab.route } } },
                  [
                    _c(
                      "v-list-tile-action",
                      [_c("v-icon", [_vm._v(_vm._s(tab.icon))])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-tile-content",
                      [_c("v-list-tile-title", [_vm._v(_vm._s(tab.name))])],
                      1
                    )
                  ],
                  1
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { id: "theme-switcher" } },
            [
              _c("v-switch", {
                attrs: { label: "Темная тема" },
                model: {
                  value: _vm.dark,
                  callback: function($$v) {
                    _vm.dark = $$v
                  },
                  expression: "dark"
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
        { staticClass: "settings__content card" },
        [
          _c(
            "transition",
            { attrs: { name: "fade", mode: "out-in" } },
            [_c("router-view")],
            1
          )
        ],
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
    require("vue-hot-reload-api")      .rerender("data-v-74dfe770", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZT9hMmYzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlPzk3YmUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlP2M1NDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBcU07QUFDck07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQWtMO0FBQ2xMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBd087QUFDeE87QUFDQTtBQUNBO0FBQ0Esa0VBQTJIO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLGlGQUFpRjtBQUN2TywrSkFBK0osaUZBQWlGO0FBQ2hQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLGdFQUFpRSwwQkFBMEIsd0JBQXdCLGlCQUFpQixnQ0FBZ0Msc0JBQXNCLEdBQUcscURBQXFELG9CQUFvQixH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aWxlIjoianMvNC5lNDY5NGY4MWM4ZjJkOWRhYTE3OC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzRkZmU3NzBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03NGRmZTc3MFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi03NGRmZTc3MFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXHNldHRpbmdzXFxcXGluZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03NGRmZTc3MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc0ZGZlNzcwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03NGRmZTc3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMmI1ZThjYmNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc0ZGZlNzcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc0ZGZlNzcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTc0ZGZlNzcwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzBcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5uYXZpZ2F0aW9uLWRyYXdlcltkYXRhLXYtNzRkZmU3NzBdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLmlucHV0LWdyb3VwLS1zZWxlY3Rpb24tY29udHJvbHNbZGF0YS12LTc0ZGZlNzcwXSB7XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxufVxcbi5jYXJkW2RhdGEtdi03NGRmZTc3MF0ge1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuLnVzZXItc2V0dGluZ3NbZGF0YS12LTc0ZGZlNzcwXSB7XFxuICBkaXNwbGF5OiAtbW96LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleDtcXG4gIGRpc3BsYXk6IC1vLWZsZXg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovT1NQYW5lbC9kb21haW5zL3dlYi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFnR0E7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7Q0FDQTtBQUVBO0VBQ0EsZ0JBQUE7Q0FDQTtBQUVBO0VBQ0EsY0FBQTtDQUNBO0FBRUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUFBLHFCQUFBO0VBQUEsY0FBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSx3QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJpbmRleC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPHYtY29udGVudD5cXG4gICAgPHYtbmF2aWdhdGlvbi1kcmF3ZXIgc3RhdGVsZXNzIHBlcm1hbmVudCBmbG9hdGluZyB2YWx1ZT1cXFwidHJ1ZVxcXCI+XFxuICAgICAgPHYtdG9vbGJhciBmbGF0IGNsYXNzPVxcXCJ0cmFuc3BhcmVudFxcXCI+XFxuICAgICAgICA8di1saXN0IGNsYXNzPVxcXCJwYS0wXFxcIj5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlIGF2YXRhcj5cXG4gICAgICAgICAgICA8di1saXN0LXRpbGUtYXZhdGFyPlxcbiAgICAgICAgICAgICAgPGltZyA6c3JjPVxcXCJ1c2VyLnBob3RvX3VybFxcXCI+XFxuICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1hdmF0YXI+XFxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgdXNlci5uYW1lIH19PC92LWxpc3QtdGlsZS10aXRsZT5cXG4gICAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgICAgIDwvdi1saXN0LXRpbGU+XFxuICAgICAgICA8L3YtbGlzdD5cXG4gICAgICA8L3YtdG9vbGJhcj5cXG4gICAgICA8di1saXN0IGRlbnNlIGNsYXNzPVxcXCJwdC0wXFxcIj5cXG4gICAgICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XFxuICAgICAgICA8di1saXN0LXRpbGUgdi1mb3I9XFxcInRhYiBpbiB0YWJzXFxcIiA6a2V5PVxcXCJ0YWIuaWRcXFwiIDp0bz1cXFwieyBuYW1lOiB0YWIucm91dGUgfVxcXCI+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgICAgPHYtaWNvbj57eyB0YWIuaWNvbiB9fTwvdi1pY29uPlxcbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWFjdGlvbj5cXG4gICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XFxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHRhYi5uYW1lIH19PC92LWxpc3QtdGlsZS10aXRsZT5cXG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgPC92LWxpc3QtdGlsZT5cXG4gICAgICA8L3YtbGlzdD5cXG4gICAgPGRpdiBpZD1cXFwidGhlbWUtc3dpdGNoZXJcXFwiPlxcbiAgICAgIDx2LXN3aXRjaFxcbiAgICAgICAgOmxhYmVsPVxcXCIn0KLQtdC80L3QsNGPINGC0LXQvNCwJ1xcXCJcXG4gICAgICAgIHYtbW9kZWw9XFxcImRhcmtcXFwiXFxuICAgICAgPjwvdi1zd2l0Y2g+XFxuICAgIDwvZGl2PiBcXG4gICAgPC92LW5hdmlnYXRpb24tZHJhd2VyPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fY29udGVudCBjYXJkXFxcIj5cXG4gICAgICA8dHJhbnNpdGlvbiBuYW1lPVxcXCJmYWRlXFxcIiBtb2RlPVxcXCJvdXQtaW5cXFwiPlxcbiAgICAgICAgPHJvdXRlci12aWV3Lz5cXG4gICAgICA8L3RyYW5zaXRpb24+XFxuICAgIDwvZGl2PlxcbiAgPC92LWNvbnRlbnQ+ICAgIFxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgbWlkZGxld2FyZTogJ2F1dGgnLFxcbiAgZGF0YSAoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgZGFyazogbnVsbCxcXG4gICAgICByaWdodDogbnVsbFxcbiAgICB9XFxuICB9LFxcbiAgY29tcHV0ZWQ6IHtcXG4gICAgLi4ubWFwR2V0dGVycyh7XFxuICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXFxuICAgICAgdGhlbWU6ICd0aGVtZS9kYXJrJ1xcbiAgICB9KSxcXG4gICAgdGFicyAoKSB7XFxuICAgICAgcmV0dXJuIFtcXG4gICAgICAgIHtcXG4gICAgICAgICAgaWQ6IDAsXFxuICAgICAgICAgIGljb246ICdwZXJzb24nLFxcbiAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdwcm9maWxlJyksXFxuICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3MucHJvZmlsZSdcXG4gICAgICAgIH0sXFxuICAgICAgICB7XFxuICAgICAgICAgIGlkOiAxLFxcbiAgICAgICAgICBpY29uOiAnbG9jaycsXFxuICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3Bhc3N3b3JkJyksXFxuICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3MucGFzc3dvcmQnXFxuICAgICAgICB9XFxuICAgICAgXVxcbiAgICB9LFxcbiAgICBpbWFnZSgpIHtcXG4gICAgICByZXR1cm4gKHRoaXMudXNlcikgPyB0aGlzLnVzZXIucGhvdG9fdXJsIDogZmFsc2U7XFxuICAgIH1cXG4gIH0sXFxuICBjcmVhdGVkKCkge1xcbiAgICB0aGlzLmRhcmsgPSB0aGlzLnRoZW1lO1xcbiAgfSxcXG4gIHdhdGNoOiB7XFxuICAgIGRhcmsoKSB7XFxuICAgICAgdGhpcy5zd2l0Y2hUaGVtZSh0aGlzLmRhcmspXFxuICAgIH1cXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuICAgIC4uLm1hcEFjdGlvbnMoe1xcbiAgICAgIHN3aXRjaFRoZW1lOiAndGhlbWUvc3dpdGNoVGhlbWUnXFxuICAgIH0pXFxuICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuXFxuLm5hdmlnYXRpb24tZHJhd2VyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuXFxuLmlucHV0LWdyb3VwLS1zZWxlY3Rpb24tY29udHJvbHMge1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4udXNlci1zZXR0aW5ncyB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleDtcXG4gIGRpc3BsYXk6IC1vLWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTc0ZGZlNzcwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzFcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiPHRlbXBsYXRlPlxuICA8di1jb250ZW50PlxuICAgIDx2LW5hdmlnYXRpb24tZHJhd2VyIHN0YXRlbGVzcyBwZXJtYW5lbnQgZmxvYXRpbmcgdmFsdWU9XCJ0cnVlXCI+XG4gICAgICA8di10b29sYmFyIGZsYXQgY2xhc3M9XCJ0cmFuc3BhcmVudFwiPlxuICAgICAgICA8di1saXN0IGNsYXNzPVwicGEtMFwiPlxuICAgICAgICAgIDx2LWxpc3QtdGlsZSBhdmF0YXI+XG4gICAgICAgICAgICA8di1saXN0LXRpbGUtYXZhdGFyPlxuICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJ1c2VyLnBob3RvX3VybFwiPlxuICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1hdmF0YXI+XG4gICAgICAgICAgICA8di1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHVzZXIubmFtZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XG4gICAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICAgICAgPC92LWxpc3Q+XG4gICAgICA8L3YtdG9vbGJhcj5cbiAgICAgIDx2LWxpc3QgZGVuc2UgY2xhc3M9XCJwdC0wXCI+XG4gICAgICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG4gICAgICAgIDx2LWxpc3QtdGlsZSB2LWZvcj1cInRhYiBpbiB0YWJzXCIgOmtleT1cInRhYi5pZFwiIDp0bz1cInsgbmFtZTogdGFiLnJvdXRlIH1cIj5cbiAgICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgICAgPHYtaWNvbj57eyB0YWIuaWNvbiB9fTwvdi1pY29uPlxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtYWN0aW9uPlxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHRhYi5uYW1lIH19PC92LWxpc3QtdGlsZS10aXRsZT5cbiAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgIDwvdi1saXN0LXRpbGU+XG4gICAgICA8L3YtbGlzdD5cbiAgICA8ZGl2IGlkPVwidGhlbWUtc3dpdGNoZXJcIj5cbiAgICAgIDx2LXN3aXRjaFxuICAgICAgICA6bGFiZWw9XCIn0KLQtdC80L3QsNGPINGC0LXQvNCwJ1wiXG4gICAgICAgIHYtbW9kZWw9XCJkYXJrXCJcbiAgICAgID48L3Ytc3dpdGNoPlxuICAgIDwvZGl2PiBcbiAgICA8L3YtbmF2aWdhdGlvbi1kcmF3ZXI+XG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzX19jb250ZW50IGNhcmRcIj5cbiAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCIgbW9kZT1cIm91dC1pblwiPlxuICAgICAgICA8cm91dGVyLXZpZXcvPlxuICAgICAgPC90cmFuc2l0aW9uPlxuICAgIDwvZGl2PlxuICA8L3YtY29udGVudD4gICAgXG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWlkZGxld2FyZTogJ2F1dGgnLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGFyazogbnVsbCxcbiAgICAgIHJpZ2h0OiBudWxsXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXG4gICAgICB0aGVtZTogJ3RoZW1lL2RhcmsnXG4gICAgfSksXG4gICAgdGFicyAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgaWNvbjogJ3BlcnNvbicsXG4gICAgICAgICAgbmFtZTogdGhpcy4kdCgncHJvZmlsZScpLFxuICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3MucHJvZmlsZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIGljb246ICdsb2NrJyxcbiAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdwYXNzd29yZCcpLFxuICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3MucGFzc3dvcmQnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGltYWdlKCkge1xuICAgICAgcmV0dXJuICh0aGlzLnVzZXIpID8gdGhpcy51c2VyLnBob3RvX3VybCA6IGZhbHNlO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmRhcmsgPSB0aGlzLnRoZW1lO1xuICB9LFxuICB3YXRjaDoge1xuICAgIGRhcmsoKSB7XG4gICAgICB0aGlzLnN3aXRjaFRoZW1lKHRoaXMuZGFyaylcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKHtcbiAgICAgIHN3aXRjaFRoZW1lOiAndGhlbWUvc3dpdGNoVGhlbWUnXG4gICAgfSlcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbi5uYXZpZ2F0aW9uLWRyYXdlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uaW5wdXQtZ3JvdXAtLXNlbGVjdGlvbi1jb250cm9scyB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuLmNhcmQge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4udXNlci1zZXR0aW5ncyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgZGlzcGxheTogLW8tZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGVudFwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtbmF2aWdhdGlvbi1kcmF3ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHN0YXRlbGVzczogXCJcIiwgcGVybWFuZW50OiBcIlwiLCBmbG9hdGluZzogXCJcIiwgdmFsdWU6IFwidHJ1ZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidHJhbnNwYXJlbnRcIiwgYXR0cnM6IHsgZmxhdDogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1saXN0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYS0wXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZVwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGF2YXRhcjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtbGlzdC10aWxlLWF2YXRhclwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLnVzZXIucGhvdG9fdXJsIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1saXN0LXRpbGUtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnVzZXIubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1saXN0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInB0LTBcIiwgYXR0cnM6IHsgZGVuc2U6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJzLCBmdW5jdGlvbih0YWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlXCIsXG4gICAgICAgICAgICAgICAgICB7IGtleTogdGFiLmlkLCBhdHRyczogeyB0bzogeyBuYW1lOiB0YWIucm91dGUgfSB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGUtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoX3ZtLl9zKHRhYi5pY29uKSldKV0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtbGlzdC10aWxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWxpc3QtdGlsZS10aXRsZVwiLCBbX3ZtLl92KF92bS5fcyh0YWIubmFtZSkpXSldLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGlkOiBcInRoZW1lLXN3aXRjaGVyXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtc3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLQotC10LzQvdCw0Y8g0YLQtdC80LBcIiB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhcmssXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5kYXJrID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXJrXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5nc19fY29udGVudCBjYXJkXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiLCBtb2RlOiBcIm91dC1pblwiIH0gfSxcbiAgICAgICAgICAgIFtfYyhcInJvdXRlci12aWV3XCIpXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03NGRmZTc3MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNzRkZmU3NzBcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzNcbi8vIG1vZHVsZSBjaHVua3MgPSA0Il0sInNvdXJjZVJvb3QiOiIifQ==