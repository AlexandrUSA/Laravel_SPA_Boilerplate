webpackJsonp([19],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(181)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(183)
/* template */
var __vue_template__ = __webpack_require__(184)
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

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(182);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("aeb956b0", content, false);
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

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(true);
// imports


// module
exports.push([module.i, "\n.settings-card .card-body[data-v-74dfe770] {\n  padding: 0;\n}\n.settings__content[data-v-74dfe770] {\n  display: inline-block;\n  width: 70%;\n  max-width: 890px;\n  margin: 20px 0 0 40px;\n}\n.navigation-drawer[data-v-74dfe770] {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 20px !important;\n  padding-bottom: 0;\n}\n.input-group--selection-controls[data-v-74dfe770] {\n  padding: 0 16px;\n}\n.card[data-v-74dfe770] {\n  padding: 30px;\n}\n.user-settings[data-v-74dfe770] {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", "", {"version":3,"sources":["C:/OSPanel/domains/web/resources/assets/js/pages/settings/resources/assets/js/pages/settings/index.vue"],"names":[],"mappings":";AA2HA;EACA,WAAA;CACA;AAEA;EACA,sBAAA;EACA,WAAA;EACA,iBAAA;EACA,sBAAA;CACA;AAEA;EACA,sBAAA;EACA,oBAAA;EACA,4BAAA;EACA,kBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,cAAA;CACA;AAEA;EAEA,mBAAA;EACA,kBAAA;EACA,iBAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n   <div>\n    <v-tabs\n      v-model=\"active\"\n      color=\"cyan\"\n      dark\n      slider-color=\"yellow\"\n    >\n      <v-tab\n        v-for=\"n in 3\"\n        :key=\"n\"\n        ripple\n      >\n        Item {{ n }}\n      </v-tab>\n      <v-tab-item\n        v-for=\"n in 3\"\n        :key=\"n\"\n      >\n        <v-card flat>\n          <v-card-text>{{ text }}</v-card-text>\n        </v-card>\n      </v-tab-item>\n    </v-tabs>\n\n    <div class=\"text-xs-center mt-3\">\n      <v-btn @click.native=\"next\">next tab</v-btn>\n    </div>\n  </div>\n  <!-- <v-content>\n    <v-navigation-drawer stateless permanent floating value=\"true\">\n      <v-toolbar flat class=\"transparent\">\n        <v-list class=\"pa-0\">\n          <v-list-tile avatar>\n            <v-list-tile-avatar>\n              <img :src=\"user.photo_url\">\n            </v-list-tile-avatar>\n            <v-list-tile-content>\n              <v-list-tile-title>{{ user.name }}</v-list-tile-title>\n            </v-list-tile-content>\n          </v-list-tile>\n        </v-list>\n      </v-toolbar>\n      <v-list dense class=\"pt-0\">\n        <v-divider></v-divider>\n        <v-list-tile v-for=\"tab in tabs\" :key=\"tab.id\" :to=\"{ name: tab.route }\">\n          <v-list-tile-action>\n            <v-icon>{{ tab.icon }}</v-icon>\n          </v-list-tile-action>\n          <v-list-tile-content>\n            <v-list-tile-title>{{ tab.name }}</v-list-tile-title>\n          </v-list-tile-content>\n        </v-list-tile>\n      </v-list>\n      \n    <div id=\"theme-switcher\">\n      <v-switch\n        :label=\"$t('dark_theme')\"\n        v-model=\"dark\"\n      ></v-switch>\n    </div> \n    </v-navigation-drawer>\n    <div class=\"settings__content card\">\n      <transition name=\"fade\" mode=\"out-in\">\n        <router-view/>\n      </transition>\n    </div>\n  </v-content>   -->  \n\n</template>\n\n<script>\nimport { mapGetters, mapActions } from 'vuex';\n\nexport default {\n  middleware: 'auth',\n  data () {\n    return {\n      dark: null,\n      right: null\n    }\n  },\n  computed: {\n    ...mapGetters({\n      user: 'auth/user',\n      theme: 'theme/dark'\n    }),\n    tabs () {\n      return [\n        {\n          id: 0,\n          icon: 'person',\n          name: this.$t('profile'),\n          route: 'settings.profile'\n        },\n        {\n          id: 1,\n          icon: 'lock',\n          name: this.$t('password'),\n          route: 'settings.password'\n        }\n      ]\n    },\n    image() {\n      return (this.user) ? this.user.photo_url : false;\n    }\n  },\n  created() {\n    this.dark = this.theme;\n  },\n  watch: {\n    dark() {\n      this.switchTheme(this.dark)\n    }\n  },\n  methods: {\n    ...mapActions({\n      switchTheme: 'theme/switchTheme'\n    })\n  }\n}\n</script>\n\n<style scoped>\n.settings-card .card-body {\n  padding: 0;\n}\n\n.settings__content {\n  display: inline-block;\n  width: 70%;\n  max-width: 890px;\n  margin: 20px 0 0 40px;\n}\n\n.navigation-drawer {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 20px !important;\n  padding-bottom: 0;\n}\n\n.input-group--selection-controls {\n  padding: 0 16px;\n}\n\n.card {\n  padding: 30px;\n}\n\n.user-settings {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  justify-content: center;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 183:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-tabs",
        {
          attrs: { color: "cyan", dark: "", "slider-color": "yellow" },
          model: {
            value: _vm.active,
            callback: function($$v) {
              _vm.active = $$v
            },
            expression: "active"
          }
        },
        [
          _vm._l(3, function(n) {
            return _c("v-tab", { key: n, attrs: { ripple: "" } }, [
              _vm._v("\n      Item " + _vm._s(n) + "\n    ")
            ])
          }),
          _vm._v(" "),
          _vm._l(3, function(n) {
            return _c(
              "v-tab-item",
              { key: n },
              [
                _c(
                  "v-card",
                  { attrs: { flat: "" } },
                  [_c("v-card-text", [_vm._v(_vm._s(_vm.text))])],
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
        { staticClass: "text-xs-center mt-3" },
        [
          _c(
            "v-btn",
            {
              nativeOn: {
                click: function($event) {
                  _vm.next($event)
                }
              }
            },
            [_vm._v("next tab")]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZT9hMmYzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlPzk3YmUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlP2M1NDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBcU07QUFDck07QUFDQTtBQUNBO0FBQ0EsNENBQWdUO0FBQ2hUO0FBQ0EsOENBQWtMO0FBQ2xMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxxQ0FBd087QUFDeE87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixpRkFBaUY7QUFDdk8sK0pBQStKLGlGQUFpRjtBQUNoUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSx1RUFBd0UsZUFBZSxHQUFHLHVDQUF1QywwQkFBMEIsZUFBZSxxQkFBcUIsMEJBQTBCLEdBQUcsdUNBQXVDLDBCQUEwQix3QkFBd0IsZ0NBQWdDLHNCQUFzQixHQUFHLHFEQUFxRCxvQkFBb0IsR0FBRywwQkFBMEIsa0JBQWtCLEdBQUcsbUNBQW1DLHVCQUF1QixzQkFBc0IscUJBQXFCLHlCQUF5Qix5QkFBeUIsa0JBQWtCLDZCQUE2Qiw4QkFBOEIsb0NBQW9DLEdBQUcsVUFBVSx5SkFBeUosTUFBTSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxxUkFBcVIsS0FBSyw0SUFBNEksUUFBUSxna0JBQWdrQixhQUFhLG1RQUFtUSxrQkFBa0IsMkRBQTJELFlBQVksOEdBQThHLFlBQVkseWVBQXllLHlCQUF5QixhQUFhLG9CQUFvQixvQ0FBb0MsY0FBYyw2Q0FBNkMsS0FBSyxnQkFBZ0IscUJBQXFCLDREQUE0RCxpQkFBaUIsMkJBQTJCLGtJQUFrSSxZQUFZLGtJQUFrSSxnQkFBZ0IsZ0JBQWdCLHlEQUF5RCxPQUFPLEtBQUssZ0JBQWdCLDZCQUE2QixLQUFLLGFBQWEsY0FBYywwQ0FBMEMsS0FBSyxlQUFlLHFCQUFxQiwrQ0FBK0MsTUFBTSxHQUFHLDBEQUEwRCxlQUFlLEdBQUcsd0JBQXdCLDBCQUEwQixlQUFlLHFCQUFxQiwwQkFBMEIsR0FBRyx3QkFBd0IsMEJBQTBCLHdCQUF3QixnQ0FBZ0Msc0JBQXNCLEdBQUcsc0NBQXNDLG9CQUFvQixHQUFHLFdBQVcsa0JBQWtCLEdBQUcsb0JBQW9CLDBCQUEwQix1QkFBdUIsc0JBQXNCLHFCQUFxQixrQkFBa0IsNEJBQTRCLEdBQUcsK0JBQStCOztBQUV4ako7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNnRUE7O0FBRUE7Y0FFQTt3QkFDQTs7WUFFQTthQUVBO0FBSEE7QUFJQTs7QUFDQTtVQUVBO1dBRUE7QUFIQTswQkFJQTs7WUFHQTtjQUNBO3NCQUNBO2VBRUE7QUFMQSxPQURBO1lBUUE7Y0FDQTtzQkFDQTtlQUdBO0FBTkE7QUFPQTs0QkFDQTsrQ0FDQTtBQUVBOzs4QkFDQTtxQkFDQTtBQUNBOzs7MEJBRUE7NEJBQ0E7QUFFQTtBQUpBO0FBS0E7aUJBSUE7QUFIQTtBQTFDQSxHOzs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFvRDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCLGFBQWEsRUFBRTtBQUNoRTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLFdBQVcsRUFBRTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxQ0FBcUM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMTkuMjk0NGEyZmQ3ZGZmYmEzNWRlMzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc0ZGZlNzcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzRkZmU3NzBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNzRkZmU3NzBcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxzZXR0aW5nc1xcXFxpbmRleC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzRkZmU3NzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03NGRmZTc3MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDE5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc0ZGZlNzcwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJhZWI5NTZiMFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03NGRmZTc3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03NGRmZTc3MFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03NGRmZTc3MFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTkiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNldHRpbmdzLWNhcmQgLmNhcmQtYm9keVtkYXRhLXYtNzRkZmU3NzBdIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5zZXR0aW5nc19fY29udGVudFtkYXRhLXYtNzRkZmU3NzBdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXgtd2lkdGg6IDg5MHB4O1xcbiAgbWFyZ2luOiAyMHB4IDAgMCA0MHB4O1xcbn1cXG4ubmF2aWdhdGlvbi1kcmF3ZXJbZGF0YS12LTc0ZGZlNzcwXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcbi5pbnB1dC1ncm91cC0tc2VsZWN0aW9uLWNvbnRyb2xzW2RhdGEtdi03NGRmZTc3MF0ge1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbn1cXG4uY2FyZFtkYXRhLXYtNzRkZmU3NzBdIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcbi51c2VyLXNldHRpbmdzW2RhdGEtdi03NGRmZTc3MF0ge1xcbiAgZGlzcGxheTogLW1vei1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXg7XFxuICBkaXNwbGF5OiAtby1mbGV4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L09TUGFuZWwvZG9tYWlucy93ZWIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMkhBO0VBQ0EsV0FBQTtDQUNBO0FBRUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0NBQ0E7QUFFQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0NBQ0E7QUFFQTtFQUNBLGdCQUFBO0NBQ0E7QUFFQTtFQUNBLGNBQUE7Q0FDQTtBQUVBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFBQSxxQkFBQTtFQUFBLGNBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsd0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiaW5kZXgudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICA8ZGl2PlxcbiAgICA8di10YWJzXFxuICAgICAgdi1tb2RlbD1cXFwiYWN0aXZlXFxcIlxcbiAgICAgIGNvbG9yPVxcXCJjeWFuXFxcIlxcbiAgICAgIGRhcmtcXG4gICAgICBzbGlkZXItY29sb3I9XFxcInllbGxvd1xcXCJcXG4gICAgPlxcbiAgICAgIDx2LXRhYlxcbiAgICAgICAgdi1mb3I9XFxcIm4gaW4gM1xcXCJcXG4gICAgICAgIDprZXk9XFxcIm5cXFwiXFxuICAgICAgICByaXBwbGVcXG4gICAgICA+XFxuICAgICAgICBJdGVtIHt7IG4gfX1cXG4gICAgICA8L3YtdGFiPlxcbiAgICAgIDx2LXRhYi1pdGVtXFxuICAgICAgICB2LWZvcj1cXFwibiBpbiAzXFxcIlxcbiAgICAgICAgOmtleT1cXFwiblxcXCJcXG4gICAgICA+XFxuICAgICAgICA8di1jYXJkIGZsYXQ+XFxuICAgICAgICAgIDx2LWNhcmQtdGV4dD57eyB0ZXh0IH19PC92LWNhcmQtdGV4dD5cXG4gICAgICAgIDwvdi1jYXJkPlxcbiAgICAgIDwvdi10YWItaXRlbT5cXG4gICAgPC92LXRhYnM+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInRleHQteHMtY2VudGVyIG10LTNcXFwiPlxcbiAgICAgIDx2LWJ0biBAY2xpY2submF0aXZlPVxcXCJuZXh0XFxcIj5uZXh0IHRhYjwvdi1idG4+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIDx2LWNvbnRlbnQ+XFxuICAgIDx2LW5hdmlnYXRpb24tZHJhd2VyIHN0YXRlbGVzcyBwZXJtYW5lbnQgZmxvYXRpbmcgdmFsdWU9XFxcInRydWVcXFwiPlxcbiAgICAgIDx2LXRvb2xiYXIgZmxhdCBjbGFzcz1cXFwidHJhbnNwYXJlbnRcXFwiPlxcbiAgICAgICAgPHYtbGlzdCBjbGFzcz1cXFwicGEtMFxcXCI+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZSBhdmF0YXI+XFxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLWF2YXRhcj5cXG4gICAgICAgICAgICAgIDxpbWcgOnNyYz1cXFwidXNlci5waG90b191cmxcXFwiPlxcbiAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtYXZhdGFyPlxcbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICAgICAgPHYtbGlzdC10aWxlLXRpdGxlPnt7IHVzZXIubmFtZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICAgICAgPC92LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICA8L3YtbGlzdC10aWxlPlxcbiAgICAgICAgPC92LWxpc3Q+XFxuICAgICAgPC92LXRvb2xiYXI+XFxuICAgICAgPHYtbGlzdCBkZW5zZSBjbGFzcz1cXFwicHQtMFxcXCI+XFxuICAgICAgICA8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxcbiAgICAgICAgPHYtbGlzdC10aWxlIHYtZm9yPVxcXCJ0YWIgaW4gdGFic1xcXCIgOmtleT1cXFwidGFiLmlkXFxcIiA6dG89XFxcInsgbmFtZTogdGFiLnJvdXRlIH1cXFwiPlxcbiAgICAgICAgICA8di1saXN0LXRpbGUtYWN0aW9uPlxcbiAgICAgICAgICAgIDx2LWljb24+e3sgdGFiLmljb24gfX08L3YtaWNvbj5cXG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XFxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxcbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS10aXRsZT57eyB0YWIubmFtZSB9fTwvdi1saXN0LXRpbGUtdGl0bGU+XFxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cXG4gICAgICAgIDwvdi1saXN0LXRpbGU+XFxuICAgICAgPC92LWxpc3Q+XFxuICAgICAgXFxuICAgIDxkaXYgaWQ9XFxcInRoZW1lLXN3aXRjaGVyXFxcIj5cXG4gICAgICA8di1zd2l0Y2hcXG4gICAgICAgIDpsYWJlbD1cXFwiJHQoJ2RhcmtfdGhlbWUnKVxcXCJcXG4gICAgICAgIHYtbW9kZWw9XFxcImRhcmtcXFwiXFxuICAgICAgPjwvdi1zd2l0Y2g+XFxuICAgIDwvZGl2PiBcXG4gICAgPC92LW5hdmlnYXRpb24tZHJhd2VyPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fY29udGVudCBjYXJkXFxcIj5cXG4gICAgICA8dHJhbnNpdGlvbiBuYW1lPVxcXCJmYWRlXFxcIiBtb2RlPVxcXCJvdXQtaW5cXFwiPlxcbiAgICAgICAgPHJvdXRlci12aWV3Lz5cXG4gICAgICA8L3RyYW5zaXRpb24+XFxuICAgIDwvZGl2PlxcbiAgPC92LWNvbnRlbnQ+ICAgLS0+ICBcXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIG1pZGRsZXdhcmU6ICdhdXRoJyxcXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGRhcms6IG51bGwsXFxuICAgICAgcmlnaHQ6IG51bGxcXG4gICAgfVxcbiAgfSxcXG4gIGNvbXB1dGVkOiB7XFxuICAgIC4uLm1hcEdldHRlcnMoe1xcbiAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxcbiAgICAgIHRoZW1lOiAndGhlbWUvZGFyaydcXG4gICAgfSksXFxuICAgIHRhYnMgKCkge1xcbiAgICAgIHJldHVybiBbXFxuICAgICAgICB7XFxuICAgICAgICAgIGlkOiAwLFxcbiAgICAgICAgICBpY29uOiAncGVyc29uJyxcXG4gICAgICAgICAgbmFtZTogdGhpcy4kdCgncHJvZmlsZScpLFxcbiAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLnByb2ZpbGUnXFxuICAgICAgICB9LFxcbiAgICAgICAge1xcbiAgICAgICAgICBpZDogMSxcXG4gICAgICAgICAgaWNvbjogJ2xvY2snLFxcbiAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdwYXNzd29yZCcpLFxcbiAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLnBhc3N3b3JkJ1xcbiAgICAgICAgfVxcbiAgICAgIF1cXG4gICAgfSxcXG4gICAgaW1hZ2UoKSB7XFxuICAgICAgcmV0dXJuICh0aGlzLnVzZXIpID8gdGhpcy51c2VyLnBob3RvX3VybCA6IGZhbHNlO1xcbiAgICB9XFxuICB9LFxcbiAgY3JlYXRlZCgpIHtcXG4gICAgdGhpcy5kYXJrID0gdGhpcy50aGVtZTtcXG4gIH0sXFxuICB3YXRjaDoge1xcbiAgICBkYXJrKCkge1xcbiAgICAgIHRoaXMuc3dpdGNoVGhlbWUodGhpcy5kYXJrKVxcbiAgICB9XFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICAuLi5tYXBBY3Rpb25zKHtcXG4gICAgICBzd2l0Y2hUaGVtZTogJ3RoZW1lL3N3aXRjaFRoZW1lJ1xcbiAgICB9KVxcbiAgfVxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbi5zZXR0aW5ncy1jYXJkIC5jYXJkLWJvZHkge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNldHRpbmdzX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXgtd2lkdGg6IDg5MHB4O1xcbiAgbWFyZ2luOiAyMHB4IDAgMCA0MHB4O1xcbn1cXG5cXG4ubmF2aWdhdGlvbi1kcmF3ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAtLXNlbGVjdGlvbi1jb250cm9scyB7XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi51c2VyLXNldHRpbmdzIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xcbiAgZGlzcGxheTogLW8tZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzRkZmU3NzBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDE5IiwiPHRlbXBsYXRlPlxuICAgPGRpdj5cbiAgICA8di10YWJzXG4gICAgICB2LW1vZGVsPVwiYWN0aXZlXCJcbiAgICAgIGNvbG9yPVwiY3lhblwiXG4gICAgICBkYXJrXG4gICAgICBzbGlkZXItY29sb3I9XCJ5ZWxsb3dcIlxuICAgID5cbiAgICAgIDx2LXRhYlxuICAgICAgICB2LWZvcj1cIm4gaW4gM1wiXG4gICAgICAgIDprZXk9XCJuXCJcbiAgICAgICAgcmlwcGxlXG4gICAgICA+XG4gICAgICAgIEl0ZW0ge3sgbiB9fVxuICAgICAgPC92LXRhYj5cbiAgICAgIDx2LXRhYi1pdGVtXG4gICAgICAgIHYtZm9yPVwibiBpbiAzXCJcbiAgICAgICAgOmtleT1cIm5cIlxuICAgICAgPlxuICAgICAgICA8di1jYXJkIGZsYXQ+XG4gICAgICAgICAgPHYtY2FyZC10ZXh0Pnt7IHRleHQgfX08L3YtY2FyZC10ZXh0PlxuICAgICAgICA8L3YtY2FyZD5cbiAgICAgIDwvdi10YWItaXRlbT5cbiAgICA8L3YtdGFicz5cblxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlciBtdC0zXCI+XG4gICAgICA8di1idG4gQGNsaWNrLm5hdGl2ZT1cIm5leHRcIj5uZXh0IHRhYjwvdi1idG4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8IS0tIDx2LWNvbnRlbnQ+XG4gICAgPHYtbmF2aWdhdGlvbi1kcmF3ZXIgc3RhdGVsZXNzIHBlcm1hbmVudCBmbG9hdGluZyB2YWx1ZT1cInRydWVcIj5cbiAgICAgIDx2LXRvb2xiYXIgZmxhdCBjbGFzcz1cInRyYW5zcGFyZW50XCI+XG4gICAgICAgIDx2LWxpc3QgY2xhc3M9XCJwYS0wXCI+XG4gICAgICAgICAgPHYtbGlzdC10aWxlIGF2YXRhcj5cbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1hdmF0YXI+XG4gICAgICAgICAgICAgIDxpbWcgOnNyYz1cInVzZXIucGhvdG9fdXJsXCI+XG4gICAgICAgICAgICA8L3YtbGlzdC10aWxlLWF2YXRhcj5cbiAgICAgICAgICAgIDx2LWxpc3QtdGlsZS1jb250ZW50PlxuICAgICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgdXNlci5uYW1lIH19PC92LWxpc3QtdGlsZS10aXRsZT5cbiAgICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgICA8L3YtbGlzdC10aWxlPlxuICAgICAgICA8L3YtbGlzdD5cbiAgICAgIDwvdi10b29sYmFyPlxuICAgICAgPHYtbGlzdCBkZW5zZSBjbGFzcz1cInB0LTBcIj5cbiAgICAgICAgPHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cbiAgICAgICAgPHYtbGlzdC10aWxlIHYtZm9yPVwidGFiIGluIHRhYnNcIiA6a2V5PVwidGFiLmlkXCIgOnRvPVwieyBuYW1lOiB0YWIucm91dGUgfVwiPlxuICAgICAgICAgIDx2LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgICA8di1pY29uPnt7IHRhYi5pY29uIH19PC92LWljb24+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZS1hY3Rpb24+XG4gICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICA8di1saXN0LXRpbGUtdGl0bGU+e3sgdGFiLm5hbWUgfX08L3YtbGlzdC10aWxlLXRpdGxlPlxuICAgICAgICAgIDwvdi1saXN0LXRpbGUtY29udGVudD5cbiAgICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICAgIDwvdi1saXN0PlxuICAgICAgXG4gICAgPGRpdiBpZD1cInRoZW1lLXN3aXRjaGVyXCI+XG4gICAgICA8di1zd2l0Y2hcbiAgICAgICAgOmxhYmVsPVwiJHQoJ2RhcmtfdGhlbWUnKVwiXG4gICAgICAgIHYtbW9kZWw9XCJkYXJrXCJcbiAgICAgID48L3Ytc3dpdGNoPlxuICAgIDwvZGl2PiBcbiAgICA8L3YtbmF2aWdhdGlvbi1kcmF3ZXI+XG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzX19jb250ZW50IGNhcmRcIj5cbiAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCIgbW9kZT1cIm91dC1pblwiPlxuICAgICAgICA8cm91dGVyLXZpZXcvPlxuICAgICAgPC90cmFuc2l0aW9uPlxuICAgIDwvZGl2PlxuICA8L3YtY29udGVudD4gICAtLT4gIFxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1pZGRsZXdhcmU6ICdhdXRoJyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhcms6IG51bGwsXG4gICAgICByaWdodDogbnVsbFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxuICAgICAgdGhlbWU6ICd0aGVtZS9kYXJrJ1xuICAgIH0pLFxuICAgIHRhYnMgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgIGljb246ICdwZXJzb24nLFxuICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3Byb2ZpbGUnKSxcbiAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLnByb2ZpbGUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBpY29uOiAnbG9jaycsXG4gICAgICAgICAgbmFtZTogdGhpcy4kdCgncGFzc3dvcmQnKSxcbiAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLnBhc3N3b3JkJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBpbWFnZSgpIHtcbiAgICAgIHJldHVybiAodGhpcy51c2VyKSA/IHRoaXMudXNlci5waG90b191cmwgOiBmYWxzZTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5kYXJrID0gdGhpcy50aGVtZTtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBkYXJrKCkge1xuICAgICAgdGhpcy5zd2l0Y2hUaGVtZSh0aGlzLmRhcmspXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyh7XG4gICAgICBzd2l0Y2hUaGVtZTogJ3RoZW1lL3N3aXRjaFRoZW1lJ1xuICAgIH0pXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnNldHRpbmdzLWNhcmQgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zZXR0aW5nc19fY29udGVudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDcwJTtcbiAgbWF4LXdpZHRoOiA4OTBweDtcbiAgbWFyZ2luOiAyMHB4IDAgMCA0MHB4O1xufVxuXG4ubmF2aWdhdGlvbi1kcmF3ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5pbnB1dC1ncm91cC0tc2VsZWN0aW9uLWNvbnRyb2xzIHtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi51c2VyLXNldHRpbmdzIHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xuICBkaXNwbGF5OiAtby1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi10YWJzXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJjeWFuXCIsIGRhcms6IFwiXCIsIFwic2xpZGVyLWNvbG9yXCI6IFwieWVsbG93XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5hY3RpdmUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5hY3RpdmUgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImFjdGl2ZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKDMsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcInYtdGFiXCIsIHsga2V5OiBuLCBhdHRyczogeyByaXBwbGU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIEl0ZW0gXCIgKyBfdm0uX3MobikgKyBcIlxcbiAgICBcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woMywgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcInYtdGFiLWl0ZW1cIixcbiAgICAgICAgICAgICAgeyBrZXk6IG4gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxhdDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJ2LWNhcmQtdGV4dFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGV4dCkpXSldLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXIgbXQtM1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0ubmV4dCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIm5leHQgdGFiXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTc0ZGZlNzcwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03NGRmZTc3MFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDE5Il0sInNvdXJjZVJvb3QiOiIifQ==