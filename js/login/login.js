// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(92)
	)
	__vue_styles__.push(__webpack_require__(93)
	)

	/* script */
	__vue_exports__ = __webpack_require__(94)

	/* template */
	var __vue_template__ = __webpack_require__(96)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/jun/lyzzb_html/src/login/login.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4e7a12e2"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 92:
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  }
	}

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0
	  },
	  "logo-wrapper": {
	    "width": 200,
	    "height": 200,
	    "marginTop": 150,
	    "marginLeft": 275
	  },
	  "logo": {
	    "width": 200,
	    "height": 200
	  },
	  "login": {
	    "marginTop": 100
	  },
	  "input-wrapper": {
	    "width": 550,
	    "marginLeft": 100,
	    "marginRight": 100,
	    "marginBottom": 30
	  },
	  "input": {
	    "fontSize": 30,
	    "height": 80,
	    "width": 550,
	    "paddingLeft": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "borderWidth": 1,
	    "borderColor": "#e6e6e6",
	    "borderRadius": 40,
	    "outline": "none"
	  },
	  "input-img": {
	    "position": "absolute",
	    "top": 20,
	    "left": 20,
	    "color": "#1b82d2",
	    "fontSize": 40
	  },
	  "input-login": {
	    "height": 80,
	    "width": 550,
	    "backgroundColor": "#1b82d2",
	    "borderRadius": 40,
	    "marginTop": 40
	  },
	  "input-login-text": {
	    "height": 80,
	    "width": 550,
	    "textAlign": "center",
	    "lineHeight": 80,
	    "color": "#FFFFFF",
	    "fontSize": 35
	  },
	  "input-forget": {
	    "left": 30,
	    "fontSize": 30,
	    "color": "#1b82d2"
	  },
	  "input-register": {
	    "position": "absolute",
	    "right": 30,
	    "fontSize": 30,
	    "color": "#1b82d2",
	    "top": 0
	  }
	}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(95);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modal = weex.requireModule('modal'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator');
	exports.default = {
	    data: function data() {
	        return {};
	    },
	    created: function created() {
	        _util2.default.initIconFont();
	    },

	    methods: {
	        loginClicked: function loginClicked(e) {
	            var bundleUrl = this.$getConfig().bundleUrl;
	            modal.toast({
	                message: _util2.default.setBundleUrl(bundleUrl, 'index.js'),
	                duration: 0.3
	            });
	            navigator.pop({
	                url: _util2.default.setBundleUrl(bundleUrl, 'index.js'),
	                animated: "true"
	            }, function (event) {
	                modal.toast({ message: 'callback: ' + event });
	            });
	        },
	        forgetClicked: function forgetClicked(e) {
	            modal.toast({
	                message: "找回密码",
	                duration: 0.3
	            });
	        },
	        regClicked: function regClicked(e) {
	            modal.toast({
	                message: "注册",
	                duration: 0.3
	            });
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by zwwill on 2017/8/27.
	 */

	var utilFunc = {
	    initIconFont: function initIconFont() {
	        var domModule = weex.requireModule('dom');
	        domModule.addRule('fontFace', {
	            'fontFamily': "iconfont",
	            'src': "url(\'http://at.alicdn.com/t/font_131816_a1elrzg7495rvn29.ttf\')"
	        });
	    },
	    setBundleUrl: function setBundleUrl(url, jsFile) {
	        var bundleUrl = url;
	        var host = '';
	        var path = '';
	        var nativeBase = void 0;
	        var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
	        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('LYZZB_weex.app') > 0;
	        if (isAndroidAssets) {
	            nativeBase = 'file://assets/dist';
	        } else if (isiOSAssets) {
	            // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	            // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('js/') + 3);
	        } else {
	            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	            var matchFirstPath = /\/\/[^\/]+\/([^\s]+)\//.exec(bundleUrl);
	            if (matches && matches.length >= 2) {
	                host = matches[1];
	            }
	            if (matchFirstPath && matchFirstPath.length >= 2) {
	                path = matchFirstPath[1];
	            }
	            nativeBase = 'http://' + host + '/';
	        }

	        var newUrl = nativeBase + jsFile;
	        return newUrl;
	    },
	    getUrlSearch: function getUrlSearch(url, name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	        var r = url.slice(url.indexOf('?') + 1).match(reg);
	        if (r != null) {
	            try {
	                return decodeURIComponent(r[2]);
	            } catch (_e) {
	                return null;
	            }
	        }
	        return null;
	    }
	};

	exports.default = utilFunc;
	module.exports = exports['default'];

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_vm._m(0), _c('div', {
	    staticClass: ["login"]
	  }, [_vm._m(1), _vm._m(2), _c('div', {
	    staticClass: ["input-wrapper"]
	  }, [_c('div', {
	    staticClass: ["input-login"],
	    on: {
	      "click": _vm.loginClicked
	    }
	  }, [_c('text', {
	    staticClass: ["input-login-text"]
	  }, [_vm._v("登录")])])]), _c('div', {
	    staticClass: ["input-wrapper"]
	  }, [_c('text', {
	    staticClass: ["input-forget"],
	    on: {
	      "click": _vm.regClicked
	    }
	  }, [_vm._v("立即注册")]), _c('text', {
	    staticClass: ["input-register"],
	    on: {
	      "click": _vm.forgetClicked
	    }
	  }, [_vm._v("找回密码")])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["logo-wrapper"]
	  }, [_c('image', {
	    staticClass: ["logo"],
	    attrs: {
	      "src": "http://www.lyzzb.com/wap_themes/static/images/default/logo.png"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["input-wrapper"]
	  }, [_c('input', {
	    staticClass: ["input"],
	    attrs: {
	      "onchange": "onchangeUserNumber",
	      "type": "text",
	      "placeholder": "手机号",
	      "autofocus": "true",
	      "value": ""
	    }
	  }), _c('text', {
	    staticClass: ["input-img", "iconfont"]
	  }, [_vm._v("")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["input-wrapper"]
	  }, [_c('input', {
	    staticClass: ["input"],
	    attrs: {
	      "onchange": "onchangeUserPassword",
	      "type": "password",
	      "placeholder": "密码",
	      "value": ""
	    }
	  }), _c('text', {
	    staticClass: ["input-img", "iconfont"]
	  }, [_vm._v("")])])
	}]}
	module.exports.render._withStripped = true

/***/ })

/******/ });