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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(301)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/src/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-918e479e"
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
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "paddingTop": 100
	  },
	  "slider": {
	    "width": 400,
	    "height": 300,
	    "backgroundColor": "#C3413D",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "slider1": {
	    "backgroundColor": "#635147"
	  },
	  "slider2": {
	    "backgroundColor": "#FFC302"
	  },
	  "slider3": {
	    "backgroundColor": "#FF9090"
	  },
	  "slider4": {
	    "backgroundColor": "#546E7A"
	  }
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _weexUi = __webpack_require__(3);

	exports.default = {
	  components: { WxcEpSlider: _weexUi.WxcEpSlider },
	  data: function data() {
	    return {
	      sliderId: 1,
	      cardLength: 5,
	      cardSize: {
	        width: 400,
	        height: 300,
	        spacing: 0,
	        scale: 0.8
	      }
	    };
	  },
	  methods: {
	    wxcEpSliderCurrentIndexSelected: function wxcEpSliderCurrentIndexSelected(e) {
	      var index = e.currentIndex;
	      console.log(index);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WxcTag = exports.WxcTabBar = exports.WxcTabPage = exports.WxcStepper = exports.WxcSliderBar = exports.WxcSlideNav = exports.WxcSimpleFlow = exports.WxcSearchbar = exports.WxcSpecialRichText = exports.WxcRichText = exports.WxcResult = exports.WxcRadio = exports.WxcProgress = exports.WxcPopup = exports.WxcPageCalendar = exports.WxcOverlay = exports.WxcNoticebar = exports.WxcLotteryRain = exports.WxcMinibar = exports.WxcMask = exports.WxcPartLoading = exports.WxcLoading = exports.WxcLightbox = exports.WxcIndexlist = exports.WxcGridSelect = exports.WxcPanItem = exports.WxcEpSlider = exports.WxcDialog = exports.WxcCountdown = exports.WxcCheckboxList = exports.WxcCheckbox = exports.WxcCell = exports.WxcButton = exports.Utils = undefined;

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	var _wxcButton = __webpack_require__(87);

	var _wxcButton2 = _interopRequireDefault(_wxcButton);

	var _wxcCell = __webpack_require__(94);

	var _wxcCell2 = _interopRequireDefault(_wxcCell);

	var _wxcCheckbox = __webpack_require__(99);

	var _wxcCheckbox2 = _interopRequireDefault(_wxcCheckbox);

	var _wxcCheckboxList = __webpack_require__(105);

	var _wxcCheckboxList2 = _interopRequireDefault(_wxcCheckboxList);

	var _wxcCountdown = __webpack_require__(110);

	var _wxcCountdown2 = _interopRequireDefault(_wxcCountdown);

	var _wxcDialog = __webpack_require__(115);

	var _wxcDialog2 = _interopRequireDefault(_wxcDialog);

	var _wxcEpSlider = __webpack_require__(126);

	var _wxcEpSlider2 = _interopRequireDefault(_wxcEpSlider);

	var _wxcPanItem = __webpack_require__(131);

	var _wxcPanItem2 = _interopRequireDefault(_wxcPanItem);

	var _wxcGridSelect = __webpack_require__(135);

	var _wxcGridSelect2 = _interopRequireDefault(_wxcGridSelect);

	var _wxcIndexlist = __webpack_require__(144);

	var _wxcIndexlist2 = _interopRequireDefault(_wxcIndexlist);

	var _wxcLightbox = __webpack_require__(150);

	var _wxcLightbox2 = _interopRequireDefault(_wxcLightbox);

	var _wxcLoading = __webpack_require__(160);

	var _wxcLoading2 = _interopRequireDefault(_wxcLoading);

	var _wxcPartLoading = __webpack_require__(166);

	var _wxcPartLoading2 = _interopRequireDefault(_wxcPartLoading);

	var _wxcMask = __webpack_require__(154);

	var _wxcMask2 = _interopRequireDefault(_wxcMask);

	var _wxcMinibar = __webpack_require__(170);

	var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

	var _wxcLotteryRain = __webpack_require__(175);

	var _wxcLotteryRain2 = _interopRequireDefault(_wxcLotteryRain);

	var _wxcNoticebar = __webpack_require__(187);

	var _wxcNoticebar2 = _interopRequireDefault(_wxcNoticebar);

	var _wxcOverlay = __webpack_require__(119);

	var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

	var _wxcPageCalendar = __webpack_require__(193);

	var _wxcPageCalendar2 = _interopRequireDefault(_wxcPageCalendar);

	var _wxcPopup = __webpack_require__(209);

	var _wxcPopup2 = _interopRequireDefault(_wxcPopup);

	var _wxcProgress = __webpack_require__(214);

	var _wxcProgress2 = _interopRequireDefault(_wxcProgress);

	var _wxcRadio = __webpack_require__(219);

	var _wxcRadio2 = _interopRequireDefault(_wxcRadio);

	var _wxcResult = __webpack_require__(229);

	var _wxcResult2 = _interopRequireDefault(_wxcResult);

	var _wxcRichText = __webpack_require__(235);

	var _wxcRichText2 = _interopRequireDefault(_wxcRichText);

	var _wxcSpecialRichText = __webpack_require__(255);

	var _wxcSpecialRichText2 = _interopRequireDefault(_wxcSpecialRichText);

	var _wxcSearchbar = __webpack_require__(260);

	var _wxcSearchbar2 = _interopRequireDefault(_wxcSearchbar);

	var _wxcSimpleFlow = __webpack_require__(266);

	var _wxcSimpleFlow2 = _interopRequireDefault(_wxcSimpleFlow);

	var _wxcSlideNav = __webpack_require__(271);

	var _wxcSlideNav2 = _interopRequireDefault(_wxcSlideNav);

	var _wxcSliderBar = __webpack_require__(276);

	var _wxcSliderBar2 = _interopRequireDefault(_wxcSliderBar);

	var _wxcStepper = __webpack_require__(281);

	var _wxcStepper2 = _interopRequireDefault(_wxcStepper);

	var _wxcTabPage = __webpack_require__(286);

	var _wxcTabPage2 = _interopRequireDefault(_wxcTabPage);

	var _wxcTabBar = __webpack_require__(291);

	var _wxcTabBar2 = _interopRequireDefault(_wxcTabBar);

	var _wxcTag = __webpack_require__(296);

	var _wxcTag2 = _interopRequireDefault(_wxcTag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
	 * Created by Tw93 on 17/09/25
	 */

	exports.Utils = _utils2.default;
	exports.WxcButton = _wxcButton2.default;
	exports.WxcCell = _wxcCell2.default;
	exports.WxcCheckbox = _wxcCheckbox2.default;
	exports.WxcCheckboxList = _wxcCheckboxList2.default;
	exports.WxcCountdown = _wxcCountdown2.default;
	exports.WxcDialog = _wxcDialog2.default;
	exports.WxcEpSlider = _wxcEpSlider2.default;
	exports.WxcPanItem = _wxcPanItem2.default;
	exports.WxcGridSelect = _wxcGridSelect2.default;
	exports.WxcIndexlist = _wxcIndexlist2.default;
	exports.WxcLightbox = _wxcLightbox2.default;
	exports.WxcLoading = _wxcLoading2.default;
	exports.WxcPartLoading = _wxcPartLoading2.default;
	exports.WxcMask = _wxcMask2.default;
	exports.WxcMinibar = _wxcMinibar2.default;
	exports.WxcLotteryRain = _wxcLotteryRain2.default;
	exports.WxcNoticebar = _wxcNoticebar2.default;
	exports.WxcOverlay = _wxcOverlay2.default;
	exports.WxcPageCalendar = _wxcPageCalendar2.default;
	exports.WxcPopup = _wxcPopup2.default;
	exports.WxcProgress = _wxcProgress2.default;
	exports.WxcRadio = _wxcRadio2.default;
	exports.WxcResult = _wxcResult2.default;
	exports.WxcRichText = _wxcRichText2.default;
	exports.WxcSpecialRichText = _wxcSpecialRichText2.default;
	exports.WxcSearchbar = _wxcSearchbar2.default;
	exports.WxcSimpleFlow = _wxcSimpleFlow2.default;
	exports.WxcSlideNav = _wxcSlideNav2.default;
	exports.WxcSliderBar = _wxcSliderBar2.default;
	exports.WxcStepper = _wxcStepper2.default;
	exports.WxcTabPage = _wxcTabPage2.default;
	exports.WxcTabBar = _wxcTabBar2.default;
	exports.WxcTag = _wxcTag2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assign = __webpack_require__(24);

	var _assign2 = _interopRequireDefault(_assign);

	var _keys = __webpack_require__(46);

	var _keys2 = _interopRequireDefault(_keys);

	var _typeof3 = __webpack_require__(50);

	var _typeof4 = _interopRequireDefault(_typeof3);

	var _urlParse = __webpack_require__(84);

	var _urlParse2 = _interopRequireDefault(_urlParse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Utils = {
	  UrlParser: _urlParse2.default,
	  _typeof: function _typeof(obj) {
	    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
	  },
	  isPlainObject: function isPlainObject(obj) {
	    return Utils._typeof(obj) === 'object';
	  },
	  isString: function isString(obj) {
	    return typeof obj === 'string';
	  },
	  isNonEmptyArray: function isNonEmptyArray() {
	    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
	  },
	  isObject: function isObject(item) {
	    return item && (typeof item === 'undefined' ? 'undefined' : (0, _typeof4.default)(item)) === 'object' && !Array.isArray(item);
	  },
	  isEmptyObject: function isEmptyObject(obj) {
	    return (0, _keys2.default)(obj).length === 0 && obj.constructor === Object;
	  },
	  mergeDeep: function mergeDeep(target) {
	    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      sources[_key - 1] = arguments[_key];
	    }

	    if (!sources.length) return target;
	    var source = sources.shift();
	    if (Utils.isObject(target) && Utils.isObject(source)) {
	      for (var key in source) {
	        if (Utils.isObject(source[key])) {
	          if (!target[key]) {
	            (0, _assign2.default)(target, (0, _defineProperty3.default)({}, key, {}));
	          }
	          Utils.mergeDeep(target[key], source[key]);
	        } else {
	          (0, _assign2.default)(target, (0, _defineProperty3.default)({}, key, source[key]));
	        }
	      }
	    }
	    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
	  },
	  appendProtocol: function appendProtocol(url) {
	    if (/^\/\//.test(url)) {
	      var bundleUrl = weex.config.bundleUrl;

	      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
	    }
	    return url;
	  },
	  encodeURLParams: function encodeURLParams(url) {
	    var parsedUrl = new _urlParse2.default(url, true);
	    return parsedUrl.toString();
	  },
	  goToH5Page: function goToH5Page(jumpUrl) {
	    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	    var Navigator = weex.requireModule('navigator');
	    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
	    var url = Utils.appendProtocol(jumpUrlObj.toString());
	    Navigator.push({
	      url: Utils.encodeURLParams(url),
	      animated: animated
	    }, callback);
	  },

	  env: {
	    isTaobao: function isTaobao() {
	      var appName = weex.config.env.appName;

	      return (/(tb|taobao|淘宝)/i.test(appName)
	      );
	    },
	    isTrip: function isTrip() {
	      var appName = weex.config.env.appName;

	      return appName === 'LX';
	    },
	    isWeb: function isWeb() {
	      var platform = weex.config.env.platform;

	      return (typeof window === 'undefined' ? 'undefined' : (0, _typeof4.default)(window)) === 'object' && platform.toLowerCase() === 'web';
	    },
	    isIOS: function isIOS() {
	      var platform = weex.config.env.platform;

	      return platform.toLowerCase() === 'ios';
	    },

	    /**
	     * 是否为 iPhone X
	     * @returns {boolean}
	     */
	    isIPhoneX: function isIPhoneX() {
	      var deviceHeight = weex.config.env.deviceHeight;

	      if (Utils.env.isWeb()) {
	        return (typeof window === 'undefined' ? 'undefined' : (0, _typeof4.default)(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
	      }
	      return Utils.env.isIOS() && deviceHeight === 2436;
	    },
	    isAndroid: function isAndroid() {
	      var platform = weex.config.env.platform;

	      return platform.toLowerCase() === 'android';
	    },
	    isAlipay: function isAlipay() {
	      var appName = weex.config.env.appName;

	      return appName === 'AP';
	    },
	    isAlipayWeb: function isAlipayWeb() {
	      return Utils.env.isAlipay() && Utils.env.isWeb();
	    },
	    supportsEB: function supportsEB() {
	      var weexVersion = weex.config.env.weexVersion || '0';
	      var isHighWeex = Utils.compareVersion(weexVersion, '0.10.1.4') && (Utils.env.isIOS() || Utils.env.isAndroid());
	      var expressionBinding = weex.requireModule('expressionBinding');
	      return expressionBinding && expressionBinding.enableBinding && isHighWeex;
	    },


	    /**
	     * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
	     * @returns {boolean}
	     */
	    supportsEBForAndroid: function supportsEBForAndroid() {
	      return Utils.env.isAndroid() && Utils.env.supportsEB();
	    },


	    /**
	     * 判断IOS容器是否支持是否支持expressionBinding
	     * @returns {boolean}
	     */
	    supportsEBForIos: function supportsEBForIos() {
	      return Utils.env.isIOS() && Utils.env.supportsEB();
	    },


	    /**
	     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
	     * @returns {Number}
	     */
	    getPageHeight: function getPageHeight() {
	      var env = weex.config.env;

	      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
	      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
	    }
	  },

	  /**
	   * 版本号比较
	   * @memberOf Utils
	   * @param currVer {string}
	   * @param promoteVer {string}
	   * @returns {boolean}
	   * @example
	   *
	   * const { Utils } = require('@ali/wx-bridge');
	   * const { compareVersion } = Utils;
	   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
	   */
	  compareVersion: function compareVersion() {
	    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
	    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

	    if (currVer === promoteVer) return true;
	    var currVerArr = currVer.split('.');
	    var promoteVerArr = promoteVer.split('.');
	    var len = Math.max(currVerArr.length, promoteVerArr.length);
	    for (var i = 0; i < len; i++) {
	      var proVal = ~~promoteVerArr[i];
	      var curVal = ~~currVerArr[i];
	      if (proVal < curVal) {
	        return true;
	      } else if (proVal > curVal) {
	        return false;
	      }
	    }
	    return false;
	  },

	  /**
	   * 分割数组
	   * @param arr 被分割数组
	   * @param size 分割数组的长度
	   * @returns {Array}
	   */
	  arrayChunk: function arrayChunk() {
	    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

	    var groups = [];
	    if (arr && arr.length > 0) {
	      groups = arr.map(function (e, i) {
	        return i % size === 0 ? arr.slice(i, i + size) : null;
	      }).filter(function (e) {
	        return e;
	      });
	    }
	    return groups;
	  },
	  truncateString: function truncateString(str, len) {
	    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	    var newLength = 0;
	    var newStr = '';
	    var singleChar = '';
	    var chineseRegex = /[^\x00-\xff]/g;
	    var strLength = str.replace(chineseRegex, '**').length;
	    for (var i = 0; i < strLength; i++) {
	      singleChar = str.charAt(i).toString();
	      if (singleChar.match(chineseRegex) !== null) {
	        newLength += 2;
	      } else {
	        newLength++;
	      }
	      if (newLength > len) {
	        break;
	      }
	      newStr += singleChar;
	    }

	    if (hasDot && strLength > len) {
	      newStr += '...';
	    }
	    return newStr;
	  }
	}; /**
	    * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
	    * Created by Tw93 on 17/11/01
	    */

	exports.default = Utils;
	module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(6);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(8);
	var $Object = __webpack_require__(11).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(19), 'Object', { defineProperty: __webpack_require__(15).f });


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(10);
	var core = __webpack_require__(11);
	var ctx = __webpack_require__(12);
	var hide = __webpack_require__(14);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(13);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(15);
	var createDesc = __webpack_require__(23);
	module.exports = __webpack_require__(19) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(16);
	var IE8_DOM_DEFINE = __webpack_require__(18);
	var toPrimitive = __webpack_require__(22);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(19) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(19) && !__webpack_require__(20)(function () {
	  return Object.defineProperty(__webpack_require__(21)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(20)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17);
	var document = __webpack_require__(10).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(17);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(25), __esModule: true };

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(26);
	module.exports = __webpack_require__(11).Object.assign;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(9);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(27) });


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(28);
	var gOPS = __webpack_require__(43);
	var pIE = __webpack_require__(44);
	var toObject = __webpack_require__(45);
	var IObject = __webpack_require__(32);
	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(20)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(29);
	var enumBugKeys = __webpack_require__(42);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(30);
	var toIObject = __webpack_require__(31);
	var arrayIndexOf = __webpack_require__(35)(false);
	var IE_PROTO = __webpack_require__(39)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(32);
	var defined = __webpack_require__(34);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(33);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(31);
	var toLength = __webpack_require__(36);
	var toAbsoluteIndex = __webpack_require__(38);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(37);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(37);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(40)('keys');
	var uid = __webpack_require__(41);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(10);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(34);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(48);
	module.exports = __webpack_require__(11).Object.keys;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(45);
	var $keys = __webpack_require__(28);

	__webpack_require__(49)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(9);
	var core = __webpack_require__(11);
	var fails = __webpack_require__(20);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(51);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(71);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	__webpack_require__(66);
	module.exports = __webpack_require__(70).f('iterator');


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(54)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(55)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(37);
	var defined = __webpack_require__(34);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(56);
	var $export = __webpack_require__(9);
	var redefine = __webpack_require__(57);
	var hide = __webpack_require__(14);
	var has = __webpack_require__(30);
	var Iterators = __webpack_require__(58);
	var $iterCreate = __webpack_require__(59);
	var setToStringTag = __webpack_require__(63);
	var getPrototypeOf = __webpack_require__(65);
	var ITERATOR = __webpack_require__(64)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14);


/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(60);
	var descriptor = __webpack_require__(23);
	var setToStringTag = __webpack_require__(63);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(14)(IteratorPrototype, __webpack_require__(64)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(16);
	var dPs = __webpack_require__(61);
	var enumBugKeys = __webpack_require__(42);
	var IE_PROTO = __webpack_require__(39)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(21)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(62).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(15);
	var anObject = __webpack_require__(16);
	var getKeys = __webpack_require__(28);

	module.exports = __webpack_require__(19) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(10).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(15).f;
	var has = __webpack_require__(30);
	var TAG = __webpack_require__(64)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(40)('wks');
	var uid = __webpack_require__(41);
	var Symbol = __webpack_require__(10).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(30);
	var toObject = __webpack_require__(45);
	var IE_PROTO = __webpack_require__(39)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	var global = __webpack_require__(10);
	var hide = __webpack_require__(14);
	var Iterators = __webpack_require__(58);
	var TO_STRING_TAG = __webpack_require__(64)('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(68);
	var step = __webpack_require__(69);
	var Iterators = __webpack_require__(58);
	var toIObject = __webpack_require__(31);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(55)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 68 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(64);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(83);
	module.exports = __webpack_require__(11).Symbol;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(10);
	var has = __webpack_require__(30);
	var DESCRIPTORS = __webpack_require__(19);
	var $export = __webpack_require__(9);
	var redefine = __webpack_require__(57);
	var META = __webpack_require__(74).KEY;
	var $fails = __webpack_require__(20);
	var shared = __webpack_require__(40);
	var setToStringTag = __webpack_require__(63);
	var uid = __webpack_require__(41);
	var wks = __webpack_require__(64);
	var wksExt = __webpack_require__(70);
	var wksDefine = __webpack_require__(75);
	var enumKeys = __webpack_require__(76);
	var isArray = __webpack_require__(77);
	var anObject = __webpack_require__(16);
	var toIObject = __webpack_require__(31);
	var toPrimitive = __webpack_require__(22);
	var createDesc = __webpack_require__(23);
	var _create = __webpack_require__(60);
	var gOPNExt = __webpack_require__(78);
	var $GOPD = __webpack_require__(80);
	var $DP = __webpack_require__(15);
	var $keys = __webpack_require__(28);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(79).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(56)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(41)('meta');
	var isObject = __webpack_require__(17);
	var has = __webpack_require__(30);
	var setDesc = __webpack_require__(15).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(20)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(10);
	var core = __webpack_require__(11);
	var LIBRARY = __webpack_require__(56);
	var wksExt = __webpack_require__(70);
	var defineProperty = __webpack_require__(15).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(28);
	var gOPS = __webpack_require__(43);
	var pIE = __webpack_require__(44);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(33);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(31);
	var gOPN = __webpack_require__(79).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(29);
	var hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(44);
	var createDesc = __webpack_require__(23);
	var toIObject = __webpack_require__(31);
	var toPrimitive = __webpack_require__(22);
	var has = __webpack_require__(30);
	var IE8_DOM_DEFINE = __webpack_require__(18);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(19) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

	

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(75)('asyncIterator');


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(75)('observable');


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var required = __webpack_require__(85)
	  , qs = __webpack_require__(86)
	  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
	  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

	/**
	 * These are the parse rules for the URL parser, it informs the parser
	 * about:
	 *
	 * 0. The char it Needs to parse, if it's a string it should be done using
	 *    indexOf, RegExp using exec and NaN means set as current value.
	 * 1. The property we should set when parsing this value.
	 * 2. Indication if it's backwards or forward parsing, when set as number it's
	 *    the value of extra chars that should be split off.
	 * 3. Inherit from location if non existing in the parser.
	 * 4. `toLowerCase` the resulting value.
	 */
	var rules = [
	  ['#', 'hash'],                        // Extract from the back.
	  ['?', 'query'],                       // Extract from the back.
	  ['/', 'pathname'],                    // Extract from the back.
	  ['@', 'auth', 1],                     // Extract from the front.
	  [NaN, 'host', undefined, 1, 1],       // Set left over value.
	  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
	  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
	];

	/**
	 * These properties should not be copied or inherited from. This is only needed
	 * for all non blob URL's as a blob URL does not include a hash, only the
	 * origin.
	 *
	 * @type {Object}
	 * @private
	 */
	var ignore = { hash: 1, query: 1 };

	/**
	 * The location object differs when your code is loaded through a normal page,
	 * Worker or through a worker using a blob. And with the blobble begins the
	 * trouble as the location object will contain the URL of the blob, not the
	 * location of the page where our code is loaded in. The actual origin is
	 * encoded in the `pathname` so we can thankfully generate a good "default"
	 * location from it so we can generate proper relative URL's again.
	 *
	 * @param {Object|String} loc Optional default location object.
	 * @returns {Object} lolcation object.
	 * @api public
	 */
	function lolcation(loc) {
	  loc = loc || global.location || {};

	  var finaldestination = {}
	    , type = typeof loc
	    , key;

	  if ('blob:' === loc.protocol) {
	    finaldestination = new URL(unescape(loc.pathname), {});
	  } else if ('string' === type) {
	    finaldestination = new URL(loc, {});
	    for (key in ignore) delete finaldestination[key];
	  } else if ('object' === type) {
	    for (key in loc) {
	      if (key in ignore) continue;
	      finaldestination[key] = loc[key];
	    }

	    if (finaldestination.slashes === undefined) {
	      finaldestination.slashes = slashes.test(loc.href);
	    }
	  }

	  return finaldestination;
	}

	/**
	 * @typedef ProtocolExtract
	 * @type Object
	 * @property {String} protocol Protocol matched in the URL, in lowercase.
	 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
	 * @property {String} rest Rest of the URL that is not part of the protocol.
	 */

	/**
	 * Extract protocol information from a URL with/without double slash ("//").
	 *
	 * @param {String} address URL we want to extract from.
	 * @return {ProtocolExtract} Extracted information.
	 * @api private
	 */
	function extractProtocol(address) {
	  var match = protocolre.exec(address);

	  return {
	    protocol: match[1] ? match[1].toLowerCase() : '',
	    slashes: !!match[2],
	    rest: match[3]
	  };
	}

	/**
	 * Resolve a relative URL pathname against a base URL pathname.
	 *
	 * @param {String} relative Pathname of the relative URL.
	 * @param {String} base Pathname of the base URL.
	 * @return {String} Resolved pathname.
	 * @api private
	 */
	function resolve(relative, base) {
	  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
	    , i = path.length
	    , last = path[i - 1]
	    , unshift = false
	    , up = 0;

	  while (i--) {
	    if (path[i] === '.') {
	      path.splice(i, 1);
	    } else if (path[i] === '..') {
	      path.splice(i, 1);
	      up++;
	    } else if (up) {
	      if (i === 0) unshift = true;
	      path.splice(i, 1);
	      up--;
	    }
	  }

	  if (unshift) path.unshift('');
	  if (last === '.' || last === '..') path.push('');

	  return path.join('/');
	}

	/**
	 * The actual URL instance. Instead of returning an object we've opted-in to
	 * create an actual constructor as it's much more memory efficient and
	 * faster and it pleases my OCD.
	 *
	 * @constructor
	 * @param {String} address URL we want to parse.
	 * @param {Object|String} location Location defaults for relative paths.
	 * @param {Boolean|Function} parser Parser for the query string.
	 * @api public
	 */
	function URL(address, location, parser) {
	  if (!(this instanceof URL)) {
	    return new URL(address, location, parser);
	  }

	  var relative, extracted, parse, instruction, index, key
	    , instructions = rules.slice()
	    , type = typeof location
	    , url = this
	    , i = 0;

	  //
	  // The following if statements allows this module two have compatibility with
	  // 2 different API:
	  //
	  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
	  //    where the boolean indicates that the query string should also be parsed.
	  //
	  // 2. The `URL` interface of the browser which accepts a URL, object as
	  //    arguments. The supplied object will be used as default values / fall-back
	  //    for relative paths.
	  //
	  if ('object' !== type && 'string' !== type) {
	    parser = location;
	    location = null;
	  }

	  if (parser && 'function' !== typeof parser) parser = qs.parse;

	  location = lolcation(location);

	  //
	  // Extract protocol information before running the instructions.
	  //
	  extracted = extractProtocol(address || '');
	  relative = !extracted.protocol && !extracted.slashes;
	  url.slashes = extracted.slashes || relative && location.slashes;
	  url.protocol = extracted.protocol || location.protocol || '';
	  address = extracted.rest;

	  //
	  // When the authority component is absent the URL starts with a path
	  // component.
	  //
	  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

	  for (; i < instructions.length; i++) {
	    instruction = instructions[i];
	    parse = instruction[0];
	    key = instruction[1];

	    if (parse !== parse) {
	      url[key] = address;
	    } else if ('string' === typeof parse) {
	      if (~(index = address.indexOf(parse))) {
	        if ('number' === typeof instruction[2]) {
	          url[key] = address.slice(0, index);
	          address = address.slice(index + instruction[2]);
	        } else {
	          url[key] = address.slice(index);
	          address = address.slice(0, index);
	        }
	      }
	    } else if ((index = parse.exec(address))) {
	      url[key] = index[1];
	      address = address.slice(0, index.index);
	    }

	    url[key] = url[key] || (
	      relative && instruction[3] ? location[key] || '' : ''
	    );

	    //
	    // Hostname, host and protocol should be lowercased so they can be used to
	    // create a proper `origin`.
	    //
	    if (instruction[4]) url[key] = url[key].toLowerCase();
	  }

	  //
	  // Also parse the supplied query string in to an object. If we're supplied
	  // with a custom parser as function use that instead of the default build-in
	  // parser.
	  //
	  if (parser) url.query = parser(url.query);

	  //
	  // If the URL is relative, resolve the pathname against the base URL.
	  //
	  if (
	      relative
	    && location.slashes
	    && url.pathname.charAt(0) !== '/'
	    && (url.pathname !== '' || location.pathname !== '')
	  ) {
	    url.pathname = resolve(url.pathname, location.pathname);
	  }

	  //
	  // We should not add port numbers if they are already the default port number
	  // for a given protocol. As the host also contains the port number we're going
	  // override it with the hostname which contains no port number.
	  //
	  if (!required(url.port, url.protocol)) {
	    url.host = url.hostname;
	    url.port = '';
	  }

	  //
	  // Parse down the `auth` for the username and password.
	  //
	  url.username = url.password = '';
	  if (url.auth) {
	    instruction = url.auth.split(':');
	    url.username = instruction[0] || '';
	    url.password = instruction[1] || '';
	  }

	  url.origin = url.protocol && url.host && url.protocol !== 'file:'
	    ? url.protocol +'//'+ url.host
	    : 'null';

	  //
	  // The href is just the compiled result.
	  //
	  url.href = url.toString();
	}

	/**
	 * This is convenience method for changing properties in the URL instance to
	 * insure that they all propagate correctly.
	 *
	 * @param {String} part          Property we need to adjust.
	 * @param {Mixed} value          The newly assigned value.
	 * @param {Boolean|Function} fn  When setting the query, it will be the function
	 *                               used to parse the query.
	 *                               When setting the protocol, double slash will be
	 *                               removed from the final url if it is true.
	 * @returns {URL}
	 * @api public
	 */
	function set(part, value, fn) {
	  var url = this;

	  switch (part) {
	    case 'query':
	      if ('string' === typeof value && value.length) {
	        value = (fn || qs.parse)(value);
	      }

	      url[part] = value;
	      break;

	    case 'port':
	      url[part] = value;

	      if (!required(value, url.protocol)) {
	        url.host = url.hostname;
	        url[part] = '';
	      } else if (value) {
	        url.host = url.hostname +':'+ value;
	      }

	      break;

	    case 'hostname':
	      url[part] = value;

	      if (url.port) value += ':'+ url.port;
	      url.host = value;
	      break;

	    case 'host':
	      url[part] = value;

	      if (/:\d+$/.test(value)) {
	        value = value.split(':');
	        url.port = value.pop();
	        url.hostname = value.join(':');
	      } else {
	        url.hostname = value;
	        url.port = '';
	      }

	      break;

	    case 'protocol':
	      url.protocol = value.toLowerCase();
	      url.slashes = !fn;
	      break;

	    case 'pathname':
	      url.pathname = value.length && value.charAt(0) !== '/' ? '/' + value : value;

	      break;

	    default:
	      url[part] = value;
	  }

	  for (var i = 0; i < rules.length; i++) {
	    var ins = rules[i];

	    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
	  }

	  url.origin = url.protocol && url.host && url.protocol !== 'file:'
	    ? url.protocol +'//'+ url.host
	    : 'null';

	  url.href = url.toString();

	  return url;
	}

	/**
	 * Transform the properties back in to a valid and full URL string.
	 *
	 * @param {Function} stringify Optional query stringify function.
	 * @returns {String}
	 * @api public
	 */
	function toString(stringify) {
	  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

	  var query
	    , url = this
	    , protocol = url.protocol;

	  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

	  var result = protocol + (url.slashes ? '//' : '');

	  if (url.username) {
	    result += url.username;
	    if (url.password) result += ':'+ url.password;
	    result += '@';
	  }

	  result += url.host + url.pathname;

	  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
	  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

	  if (url.hash) result += url.hash;

	  return result;
	}

	URL.prototype = { set: set, toString: toString };

	//
	// Expose the URL parser and some additional properties that might be useful for
	// others or testing.
	//
	URL.extractProtocol = extractProtocol;
	URL.location = lolcation;
	URL.qs = qs;

	module.exports = URL;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Check if we're required to add a port number.
	 *
	 * @see https://url.spec.whatwg.org/#default-port
	 * @param {Number|String} port Port number we need to check
	 * @param {String} protocol Protocol we need to check against.
	 * @returns {Boolean} Is it a default port for the given protocol
	 * @api private
	 */
	module.exports = function required(port, protocol) {
	  protocol = protocol.split(':')[0];
	  port = +port;

	  if (!port) return false;

	  switch (protocol) {
	    case 'http':
	    case 'ws':
	    return port !== 80;

	    case 'https':
	    case 'wss':
	    return port !== 443;

	    case 'ftp':
	    return port !== 21;

	    case 'gopher':
	    return port !== 70;

	    case 'file':
	    return false;
	  }

	  return port !== 0;
	};


/***/ }),
/* 86 */
/***/ (function(module, exports) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	/**
	 * Decode a URI encoded string.
	 *
	 * @param {String} input The URI encoded string.
	 * @returns {String} The decoded string.
	 * @api private
	 */
	function decode(input) {
	  return decodeURIComponent(input.replace(/\+/g, ' '));
	}

	/**
	 * Simple query string parser.
	 *
	 * @param {String} query The query string that needs to be parsed.
	 * @returns {Object}
	 * @api public
	 */
	function querystring(query) {
	  var parser = /([^=?&]+)=?([^&]*)/g
	    , result = {}
	    , part;

	  //
	  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
	  // the lastIndex property so we can continue executing this loop until we've
	  // parsed all results.
	  //
	  for (;
	    part = parser.exec(query);
	    result[decode(part[1])] = decode(part[2])
	  );

	  return result;
	}

	/**
	 * Transform a query string to an object.
	 *
	 * @param {Object} obj Object that should be transformed.
	 * @param {String} prefix Optional prefix.
	 * @returns {String}
	 * @api public
	 */
	function querystringify(obj, prefix) {
	  prefix = prefix || '';

	  var pairs = [];

	  //
	  // Optionally prefix with a '?' if needed
	  //
	  if ('string' !== typeof prefix) prefix = '?';

	  for (var key in obj) {
	    if (has.call(obj, key)) {
	      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
	    }
	  }

	  return pairs.length ? prefix + pairs.join('&') : '';
	}

	//
	// Expose the module.
	//
	exports.stringify = querystringify;
	exports.parse = querystring;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(88);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(89)
	)

	/* script */
	__vue_exports__ = __webpack_require__(90)

	/* template */
	var __vue_template__ = __webpack_require__(93)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-button/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-9fe5ccd8"
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


/***/ }),
/* 89 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-btn": {
	    "width": 702,
	    "height": 88,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": 12
	  },
	  "btn-text": {
	    "textOverflow": "ellipsis",
	    "lines": 1,
	    "fontSize": 36,
	    "color": "#FFFFFF"
	  }
	}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(91);

	var _extends3 = _interopRequireDefault(_extends2);

	var _type = __webpack_require__(92);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {
	    text: {
	      type: String,
	      default: '确认'
	    },
	    type: {
	      type: String,
	      default: 'taobao'
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    btnStyle: Object,
	    textStyle: Object
	  },
	  computed: {
	    mrBtnStyle: function mrBtnStyle() {
	      var type = this.type,
	          disabled = this.disabled,
	          btnStyle = this.btnStyle;

	      var mrBtnStyle = (0, _extends3.default)({}, _type.STYLE_MAP[type], btnStyle);
	      return disabled ? (0, _extends3.default)({}, mrBtnStyle, {
	        backgroundColor: 'rgba(0, 0, 0, 0.1)',
	        borderWidth: 0
	      }) : mrBtnStyle;
	    },
	    mrTextStyle: function mrTextStyle() {
	      var type = this.type,
	          disabled = this.disabled,
	          textStyle = this.textStyle;

	      var mrTextStyle = (0, _extends3.default)({}, _type.TEXT_STYLE_MAP[type], textStyle);
	      return disabled ? (0, _extends3.default)({}, mrTextStyle, { color: '#FFFFFF' }) : mrTextStyle;
	    }
	  },
	  methods: {
	    onClicked: function onClicked(e) {
	      var type = this.type,
	          disabled = this.disabled;

	      this.$emit('wxcButtonClicked', { e: e, type: type, disabled: disabled });
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(24);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var STYLE_MAP = exports.STYLE_MAP = {
	  taobao: {
	    backgroundColor: '#FF5000'
	  },
	  fliggy: {
	    backgroundColor: '#FFC900'
	  },
	  normal: {
	    backgroundColor: '#FFFFFF',
	    borderColor: '#A5A5A5',
	    borderWidth: '1px'
	  },
	  highlight: {
	    backgroundColor: '#FFFFFF',
	    borderColor: '#EE9900',
	    borderWidth: '1px'
	  }
	};

	var TEXT_STYLE_MAP = exports.TEXT_STYLE_MAP = {
	  taobao: {
	    color: '#FFFFFF'
	  },
	  fliggy: {
	    color: '#3D3D3D'
	  },
	  normal: {
	    color: '#3D3D3D'
	  },
	  highlight: {
	    color: '#EE9900'
	  }
	};

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-btn"],
	    style: _vm.mrBtnStyle,
	    attrs: {
	      "accessible": true,
	      "ariaLabel": _vm.text
	    },
	    on: {
	      "click": _vm.onClicked
	    }
	  }, [_c('text', {
	    staticClass: ["btn-text"],
	    style: _vm.mrTextStyle
	  }, [_vm._v(_vm._s(_vm.text))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(95);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(96)
	)

	/* script */
	__vue_exports__ = __webpack_require__(97)

	/* template */
	var __vue_template__ = __webpack_require__(98)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-cell/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-c41774f8"
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


/***/ }),
/* 96 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-cell": {
	    "height": 100,
	    "position": "relative",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "paddingLeft": 24,
	    "paddingRight": 24,
	    "backgroundColor": "#ffffff"
	  },
	  "cell-margin": {
	    "marginBottom": 24
	  },
	  "cell-title": {
	    "flex": 1
	  },
	  "cell-indent": {
	    "paddingBottom": 30,
	    "paddingTop": 30
	  },
	  "has-desc": {
	    "paddingBottom": 18,
	    "paddingTop": 18
	  },
	  "cell-top-border": {
	    "borderTopColor": "#e2e2e2",
	    "borderTopWidth": 1
	  },
	  "cell-bottom-border": {
	    "borderBottomColor": "#e2e2e2",
	    "borderBottomWidth": 1
	  },
	  "cell-label-text": {
	    "fontSize": 30,
	    "color": "#666666",
	    "width": 188,
	    "marginRight": 10
	  },
	  "cell-arrow-icon": {
	    "width": 22,
	    "height": 22
	  },
	  "cell-content": {
	    "color": "#333333",
	    "fontSize": 30,
	    "lineHeight": 40
	  },
	  "cell-desc-text": {
	    "color": "#999999",
	    "fontSize": 24,
	    "lineHeight": 30,
	    "marginTop": 4
	  }
	}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {
	    label: {
	      type: String,
	      default: ''
	    },
	    title: {
	      type: String,
	      default: ''
	    },
	    desc: {
	      type: String,
	      default: ''
	    },
	    link: {
	      type: String,
	      default: ''
	    },
	    hasTopBorder: {
	      type: Boolean,
	      default: false
	    },
	    hasMargin: {
	      type: Boolean,
	      default: false
	    },
	    hasBottomBorder: {
	      type: Boolean,
	      default: true
	    },
	    hasArrow: {
	      type: Boolean,
	      default: false
	    },
	    arrowIcon: {
	      type: String,
	      default: 'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png'
	    },
	    hasVerticalIndent: {
	      type: Boolean,
	      default: true
	    },
	    cellStyle: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    autoAccessible: {
	      type: Boolean,
	      default: true
	    }
	  },
	  methods: {
	    cellClicked: function cellClicked(e) {
	      var link = this.link;
	      this.$emit('wxcCellClicked', { e: e });
	      link && _utils2.default.goToH5Page(link, true);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),
/* 98 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['wxc-cell', _vm.hasTopBorder && 'cell-top-border', _vm.hasBottomBorder && 'cell-bottom-border', _vm.hasMargin && 'cell-margin', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
	    style: _vm.cellStyle,
	    attrs: {
	      "accessible": _vm.autoAccessible,
	      "ariaLabel": (_vm.label + "," + _vm.title + "," + _vm.desc)
	    },
	    on: {
	      "click": _vm.cellClicked
	    }
	  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
	    staticClass: ["cell-label-text"]
	  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
	    staticClass: ["cell-title"]
	  }, [_vm._t("title", [_c('text', {
	    staticClass: ["cell-content"]
	  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
	    staticClass: ["cell-desc-text"]
	  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.hasArrow) ? _c('image', {
	    staticClass: ["cell-arrow-icon"],
	    attrs: {
	      "src": _vm.arrowIcon,
	      "ariaHidden": true
	    }
	  }) : _vm._e()], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(100);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(101)
	)

	/* script */
	__vue_exports__ = __webpack_require__(102)

	/* template */
	var __vue_template__ = __webpack_require__(104)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-checkbox/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0f8611b6"
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


/***/ }),
/* 101 */
/***/ (function(module, exports) {

	module.exports = {
	  "checkbox": {
	    "width": 48,
	    "height": 48
	  },
	  "title-text": {
	    "fontSize": 30
	  }
	}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _wxcCell = __webpack_require__(94);

	var _wxcCell2 = _interopRequireDefault(_wxcCell);

	var _type = __webpack_require__(103);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  components: { WxcCell: _wxcCell2.default },
	  props: {
	    hasTopBorder: {
	      type: Boolean,
	      default: false
	    },
	    title: {
	      type: String,
	      require: true
	    },
	    value: {
	      type: [String, Number, Object],
	      require: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    checked: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      icon: [_type.CHECKED, _type.UNCHECKED, _type.CHECKED_DISABLED, _type.UNCHECKED_DISABLED],
	      color: '#3D3D3D',
	      innerChecked: false
	    };
	  },
	  computed: {
	    checkIcon: function checkIcon() {
	      var icon = this.icon,
	          disabled = this.disabled,
	          innerChecked = this.innerChecked;

	      if (disabled) {
	        return icon[innerChecked ? 2 : 3];
	      } else {
	        return icon[innerChecked ? 0 : 1];
	      }
	    }
	  },
	  created: function created() {
	    var checked = this.checked,
	        disabled = this.disabled;

	    this.innerChecked = checked;
	    this.color = checked && !disabled ? '#EE9900' : '#3D3D3D';
	  },

	  methods: {
	    wxcCellClicked: function wxcCellClicked() {
	      var disabled = this.disabled,
	          innerChecked = this.innerChecked,
	          value = this.value;

	      if (!disabled) {
	        this.innerChecked = !innerChecked;
	        this.color = this.innerChecked ? '#EE9900' : '#3D3D3D';
	        this.$emit('wxcCheckBoxItemChecked', { value: value, checked: this.innerChecked });
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 103 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
	 * Created by Tw93 on 2017/10/21.
	 */

	var CHECKED = exports.CHECKED = 'https://gw.alicdn.com/tfs/TB14fp2pwMPMeJjy1XbXXcwxVXa-72-72.png';
	var UNCHECKED = exports.UNCHECKED = 'https://gw.alicdn.com/tfs/TB1U6SbpwMPMeJjy1XcXXXpppXa-72-72.png';
	var CHECKED_DISABLED = exports.CHECKED_DISABLED = 'https://gw.alicdn.com/tfs/TB1aPabpwMPMeJjy1XcXXXpppXa-72-72.png';
	var UNCHECKED_DISABLED = exports.UNCHECKED_DISABLED = 'https://gw.alicdn.com/tfs/TB1lTuzpwoQMeJjy0FoXXcShVXa-72-72.png';

/***/ }),
/* 104 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('wxc-cell', {
	    attrs: {
	      "hasTopBorder": _vm.hasTopBorder,
	      "accessible": true,
	      "ariaLabel": (_vm.title + ",状态为" + (_vm.checked ? '已选中' : '未选中') + "," + (_vm.disabled ? '不可更改' : '点击可切换'))
	    },
	    on: {
	      "wxcCellClicked": _vm.wxcCellClicked
	    }
	  }, [_c('text', {
	    staticClass: ["title-text"],
	    style: {
	      color: _vm.color
	    },
	    slot: "title"
	  }, [_vm._v(_vm._s(_vm.title))]), _c('image', {
	    staticClass: ["checkbox"],
	    attrs: {
	      "src": _vm.checkIcon
	    },
	    slot: "value"
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(106);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(107)
	)

	/* script */
	__vue_exports__ = __webpack_require__(108)

	/* template */
	var __vue_template__ = __webpack_require__(109)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-checkbox-list/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-72840448"
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


/***/ }),
/* 107 */
/***/ (function(module, exports) {

	module.exports = {}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(100);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: { WxcCheckbox: _index2.default },
	  props: {
	    list: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    }
	  },
	  data: function data() {
	    return {
	      checkedList: []
	    };
	  },
	  created: function created() {
	    var _this = this;

	    var list = this.list;

	    if (list && list.length > 0) {
	      list.forEach(function (item, i) {
	        item.checked && _this.checkedList.push(item.value);
	      });
	    }
	  },

	  methods: {
	    wxcCheckBoxItemChecked: function wxcCheckBoxItemChecked(e) {
	      if (e.checked) {
	        this.checkedList.push(e.value);
	      } else {
	        var index = this.checkedList.indexOf(e.value);
	        this.checkedList.splice(index, 1);
	      }
	      this.$emit('wxcCheckBoxListChecked', { checkedList: this.checkedList });
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', _vm._l((_vm.list), function(item, i) {
	    return _c('wxc-checkbox', _vm._b({
	      key: i,
	      on: {
	        "wxcCheckBoxItemChecked": _vm.wxcCheckBoxItemChecked
	      }
	    }, 'wxc-checkbox', item, false))
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(111);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(112)
	)

	/* script */
	__vue_exports__ = __webpack_require__(113)

	/* template */
	var __vue_template__ = __webpack_require__(114)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-countdown/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-33bbe8e5"
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


/***/ }),
/* 112 */
/***/ (function(module, exports) {

	module.exports = {
	  "time-dot-wrap": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  }
	}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(91);

	var _extends3 = _interopRequireDefault(_extends2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    // 时间戳
	    time: {
	      type: Number,
	      default: 1501200000000
	    },
	    // 倒计时的间隔,单位为"毫秒"
	    interval: {
	      type: Number,
	      default: 1000
	    },
	    tpl: {
	      type: String,
	      default: '{h}:{m}:{s}'
	    },
	    // 最外层包裹 style
	    timeWrapStyle: Object,
	    // 数字盒子 style
	    timeBoxStyle: Object,
	    // : 盒子Style
	    dotBoxStyle: Object,
	    // 数字文字 Style
	    timeTextStyle: Object,
	    // : 文字Style
	    dotTextStyle: Object
	  },
	  data: function data() {
	    return {
	      NOW_DATE: new Date().getTime(),
	      completed: false,
	      tplIndexOfDays: -1,
	      tplIndexOfHours: -1,
	      tplIndexOfMinutes: -1,
	      tplIndexOfSeconds: -1,
	      TIME_WRAP_STYLE: {
	        flexDirection: 'row',
	        alignItems: 'center',
	        marginLeft: '12px',
	        marginRight: '12px'
	      },
	      TIME_BOX_STYLE: {
	        flexDirection: 'row',
	        justifyContent: 'center',
	        alignItems: 'center',
	        backgroundColor: '#333333',
	        height: '30px',
	        width: '30px'
	      },
	      DOT_BOX_STYLE: {
	        width: '18px',
	        flexDirection: 'row',
	        justifyContent: 'center',
	        alignItems: 'center'
	      },
	      TIME_TEXT_STYLE: {
	        color: '#FFCC80',
	        fontSize: '18px'
	      },
	      DOT_TEXT_STYLE: {
	        color: '#333333',
	        fontSize: '18px',
	        fontWeight: 'bold'
	      }
	    };
	  },
	  mounted: function mounted() {
	    var _this = this;

	    setInterval(function () {
	      _this.NOW_DATE = new Date().getTime();
	    }, this.interval);

	    this.tplIndexOfDays = this.tpl.indexOf('d');
	    this.tplIndexOfHours = this.tpl.indexOf('h');
	    this.tplIndexOfMinutes = this.tpl.indexOf('m');
	    this.tplIndexOfSeconds = this.tpl.indexOf('s');
	  },

	  computed: {
	    mrTimeWrapStyle: function mrTimeWrapStyle() {
	      return (0, _extends3.default)({}, this.TIME_WRAP_STYLE, this.timeWrapStyle);
	    },
	    mrTimeBoxStyle: function mrTimeBoxStyle() {
	      return (0, _extends3.default)({}, this.TIME_BOX_STYLE, this.timeBoxStyle);
	    },
	    mrDotBoxStyle: function mrDotBoxStyle() {
	      return (0, _extends3.default)({}, this.DOT_BOX_STYLE, this.dotBoxStyle);
	    },
	    mrTimeTextStyle: function mrTimeTextStyle() {
	      return (0, _extends3.default)({}, this.TIME_TEXT_STYLE, this.timeTextStyle);
	    },
	    mrDotTextStyle: function mrDotTextStyle() {
	      return (0, _extends3.default)({}, this.DOT_TEXT_STYLE, this.dotTextStyle);
	    },
	    countDownData: function countDownData() {
	      var timeSpacing = this.time - this.NOW_DATE;

	      // 倒计时结束了
	      if (timeSpacing < 0) {
	        if (this.completed === false) {
	          this.$emit('wxcOnComplete');
	        }
	        this.completed = true;
	        return {
	          day: '00',
	          hour: '00',
	          minute: '00',
	          second: '00'
	        };
	      }

	      var day = 0;
	      var hour = 0;
	      var minute = 0;
	      var second = 0;

	      if (this.tplIndexOfDays !== -1) {
	        day = Math.floor(timeSpacing / (24 * 60 * 60 * 1000));
	        hour = Math.floor(timeSpacing % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
	      } else {
	        day = 0;
	        hour = Math.floor(timeSpacing / (60 * 60 * 1000));
	      }

	      if (this.tplIndexOfHours !== -1) {
	        hour = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000) / (60 * 60 * 1000));
	        minute = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000) % (60 * 60 * 1000) / (60 * 1000));
	      } else {
	        hour = 0;
	        minute = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000) / (60 * 1000));
	      }

	      if (this.tplIndexOfMinutes !== -1) {
	        minute = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000 - hour * 60 * 60 * 1000) / (60 * 1000));
	        second = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000 - hour * 60 * 60 * 1000) % (60 * 1000) / 1000);
	      } else {
	        minute = 0;
	        second = Math.floor((timeSpacing - day * 24 * 60 * 60 * 1000 - hour * 60 * 60 * 1000) / 1000);
	      }

	      return {
	        day: day < 10 ? '0' + day : '' + day,
	        hour: hour < 10 ? '0' + hour : '' + hour,
	        minute: minute < 10 ? '0' + minute : '' + minute,
	        second: second < 10 ? '0' + second : '' + second
	      };
	    }
	  },

	  methods: {
	    getDot: function getDot(prevTagIndex) {
	      var nextTagIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

	      if (nextTagIndex === -1) {
	        return this.tpl.slice(prevTagIndex + 2);
	      }
	      return this.tpl.slice(prevTagIndex + 2, nextTagIndex - 1);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 114 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    style: _vm.mrTimeWrapStyle
	  }, [_c('div', {
	    staticClass: ["time-dot-wrap"]
	  }, [(_vm.tplIndexOfDays !== -1) ? _c('div', {
	    style: _vm.mrTimeBoxStyle,
	    attrs: {
	      "accessible": true,
	      "ariaLabel": ((_vm.countDownData.day) + "天")
	    }
	  }, [_c('text', {
	    style: _vm.mrTimeTextStyle
	  }, [_vm._v(_vm._s(_vm.countDownData.day))])]) : _vm._e(), (_vm.tplIndexOfDays !== -1) ? _c('div', {
	    style: _vm.mrDotBoxStyle,
	    attrs: {
	      "ariaHidden": true
	    }
	  }, [_c('text', {
	    style: _vm.mrDotTextStyle
	  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfDays, _vm.tplIndexOfHours)))])]) : _vm._e(), (_vm.tplIndexOfHours !== -1) ? _c('div', {
	    style: _vm.mrTimeBoxStyle,
	    attrs: {
	      "accessible": true,
	      "ariaLabel": ((_vm.countDownData.hour) + "时")
	    }
	  }, [_c('text', {
	    style: _vm.mrTimeTextStyle
	  }, [_vm._v(_vm._s(_vm.countDownData.hour))])]) : _vm._e(), (_vm.tplIndexOfHours !== -1) ? _c('div', {
	    style: _vm.mrDotBoxStyle,
	    attrs: {
	      "ariaHidden": true
	    }
	  }, [_c('text', {
	    style: _vm.mrDotTextStyle
	  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfHours, _vm.tplIndexOfMinutes)))])]) : _vm._e(), (_vm.tplIndexOfMinutes !== -1) ? _c('div', {
	    style: _vm.mrTimeBoxStyle,
	    attrs: {
	      "accessible": true,
	      "ariaLabel": ((_vm.countDownData.minute) + "分")
	    }
	  }, [_c('text', {
	    style: _vm.mrTimeTextStyle
	  }, [_vm._v(_vm._s(_vm.countDownData.minute))])]) : _vm._e(), (_vm.tplIndexOfMinutes !== -1) ? _c('div', {
	    style: _vm.mrDotBoxStyle,
	    attrs: {
	      "ariaHidden": true
	    }
	  }, [_c('text', {
	    style: _vm.mrDotTextStyle
	  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfMinutes, _vm.tplIndexOfSeconds)))])]) : _vm._e(), (_vm.tplIndexOfSeconds !== -1) ? _c('div', {
	    style: _vm.mrTimeBoxStyle,
	    attrs: {
	      "accessible": true,
	      "ariaLabel": ((_vm.countDownData.second) + "秒")
	    }
	  }, [_c('text', {
	    style: _vm.mrTimeTextStyle
	  }, [_vm._v(_vm._s(_vm.countDownData.second))])]) : _vm._e(), (_vm.tplIndexOfSeconds !== -1) ? _c('div', {
	    style: _vm.mrDotBoxStyle,
	    attrs: {
	      "ariaHidden": true
	    }
	  }, [_c('text', {
	    style: _vm.mrDotTextStyle
	  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfSeconds, -1)))])]) : _vm._e()])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(116);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(117)
	)

	/* script */
	__vue_exports__ = __webpack_require__(118)

	/* template */
	var __vue_template__ = __webpack_require__(125)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-dialog/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-19ce67ac"
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


/***/ }),
/* 117 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "position": "fixed",
	    "width": 750,
	    "zIndex": 99999
	  },
	  "dialog-box": {
	    "position": "fixed",
	    "left": 96,
	    "width": 558,
	    "backgroundColor": "#FFFFFF"
	  },
	  "dialog-content": {
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "paddingLeft": 36,
	    "paddingRight": 36
	  },
	  "content-title": {
	    "color": "#333333",
	    "fontSize": 36,
	    "textAlign": "center",
	    "marginBottom": 24
	  },
	  "content-subtext": {
	    "color": "#666666",
	    "fontSize": 26,
	    "lineHeight": 36,
	    "textAlign": "center"
	  },
	  "dialog-footer": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "borderTopColor": "#F3F3F3",
	    "borderTopWidth": 1,
	    "borderTop": "1px solid #F3F3F3"
	  },
	  "footer-btn": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "flex": 1,
	    "height": 90
	  },
	  "cancel": {
	    "borderRightColor": "#F3F3F3",
	    "borderRightWidth": 1,
	    "borderRight": "1px solid #F3F3F3"
	  },
	  "btn-text": {
	    "fontSize": 36,
	    "color": "#666666"
	  },
	  "no-prompt": {
	    "width": 486,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "flexDirection": "row",
	    "marginTop": 24
	  },
	  "no-prompt-icon": {
	    "width": 24,
	    "height": 24,
	    "marginRight": 12
	  },
	  "no-prompt-text": {
	    "fontSize": 24,
	    "color": "#A5A5A5"
	  }
	}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _wxcOverlay = __webpack_require__(119);

	var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

	var _type = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  components: { WxcOverlay: _wxcOverlay2.default },
	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    single: {
	      type: Boolean,
	      default: false
	    },
	    title: {
	      type: String,
	      default: ''
	    },
	    content: {
	      type: String,
	      default: ''
	    },
	    top: {
	      type: Number,
	      default: 400
	    },
	    cancelText: {
	      type: String,
	      default: '取消'
	    },
	    confirmText: {
	      type: String,
	      default: '确定'
	    },
	    mainBtnColor: {
	      type: String,
	      default: '#EE9900'
	    },
	    secondBtnColor: {
	      type: String,
	      default: '#666666'
	    },
	    showNoPrompt: {
	      type: Boolean,
	      default: false
	    },
	    noPromptText: {
	      type: String,
	      default: '不再提示'
	    },
	    isChecked: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      noPromptIcon: _type.UN_CHECKED,
	      pageHeight: 1334
	    };
	  },
	  created: function created() {
	    var _weex$config$env = weex.config.env,
	        deviceHeight = _weex$config$env.deviceHeight,
	        deviceWidth = _weex$config$env.deviceWidth;

	    this.pageHeight = deviceHeight / deviceWidth * 750;
	  },

	  methods: {
	    secondaryClicked: function secondaryClicked() {
	      this.$emit('wxcDialogCancelBtnClicked', {
	        type: 'cancel'
	      });
	    },
	    primaryClicked: function primaryClicked(e) {
	      this.$emit('wxcDialogConfirmBtnClicked', {
	        type: 'confirm'
	      });
	    },
	    noPromptClicked: function noPromptClicked(e) {
	      var isChecked = !this.isChecked;
	      this.noPromptIcon = isChecked ? _type.CHECKED : _type.UN_CHECKED;
	      this.$emit('wxcDialogNoPromptClicked', { isChecked: isChecked });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(120);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(121)
	)

	/* script */
	__vue_exports__ = __webpack_require__(122)

	/* template */
	var __vue_template__ = __webpack_require__(123)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-overlay/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-c39f42f8"
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


/***/ }),
/* 121 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-overlay": {
	    "width": 750,
	    "position": "fixed",
	    "left": 0,
	    "top": 0,
	    "bottom": 0,
	    "right": 0
	  }
	}

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      default: true
	    },
	    hasAnimation: {
	      type: Boolean,
	      default: true
	    },
	    duration: {
	      type: [Number, String],
	      default: 300
	    },
	    timingFunction: {
	      type: Array,
	      default: function _default() {
	        return ['ease-in', 'ease-out'];
	      }
	    },
	    opacity: {
	      type: [Number, String],
	      default: 0.6
	    },
	    canAutoClose: {
	      type: Boolean,
	      default: true
	    }
	  },
	  computed: {
	    overlayStyle: function overlayStyle() {
	      return {
	        opacity: this.hasAnimation ? 0 : 1,
	        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
	      };
	    },
	    shouldShow: function shouldShow() {
	      var _this = this;

	      var show = this.show,
	          hasAnimation = this.hasAnimation;

	      hasAnimation && setTimeout(function () {
	        _this.appearOverlay(show);
	      }, 50);
	      return show;
	    }
	  },
	  methods: {
	    overlayClicked: function overlayClicked(e) {
	      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
	    },
	    appearOverlay: function appearOverlay(bool) {
	      var _this2 = this;

	      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
	      var hasAnimation = this.hasAnimation,
	          timingFunction = this.timingFunction,
	          canAutoClose = this.canAutoClose;

	      var needEmit = !bool && canAutoClose;
	      needEmit && this.$emit('wxcOverlayBodyClicking', {});
	      var overlayEl = this.$refs['wxc-overlay'];
	      if (hasAnimation && overlayEl) {
	        animation.transition(overlayEl, {
	          styles: {
	            opacity: bool ? 1 : 0
	          },
	          duration: duration,
	          timingFunction: timingFunction[bool ? 0 : 1],
	          delay: 0
	        }, function () {
	          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
	        });
	      } else {
	        needEmit && this.$emit('wxcOverlayBodyClicked', {});
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 123 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.show) ? _c('div', {
	    ref: "wxc-overlay",
	    staticClass: ["wxc-overlay"],
	    style: _vm.overlayStyle,
	    attrs: {
	      "hack": _vm.shouldShow
	    },
	    on: {
	      "click": _vm.overlayClicked
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 124 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
	 * Created by Tw93 on 2016/10/29.
	 */

	var CHECKED = exports.CHECKED = 'https://gw.alicdn.com/tfs/TB1UT3VpgMPMeJjy1XdXXasrXXa-42-42.png';
	var UN_CHECKED = exports.UN_CHECKED = 'https://gw.alicdn.com/tfs/TB1hE3VpgMPMeJjy1XdXXasrXXa-42-42.png';

/***/ }),
/* 125 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"]
	  }, [(_vm.show) ? _c('wxc-overlay', {
	    attrs: {
	      "show": true,
	      "hasAnimation": false
	    }
	  }) : _vm._e(), (_vm.show) ? _c('div', {
	    staticClass: ["dialog-box"],
	    style: {
	      top: _vm.top + 'px'
	    }
	  }, [_c('div', {
	    staticClass: ["dialog-content"]
	  }, [_vm._t("title", [_c('text', {
	    staticClass: ["content-title"]
	  }, [_vm._v(_vm._s(_vm.title))])]), _vm._t("content", [_c('text', {
	    staticClass: ["content-subtext"]
	  }, [_vm._v(_vm._s(_vm.content))])]), (_vm.showNoPrompt) ? _c('div', {
	    staticClass: ["no-prompt"],
	    on: {
	      "click": _vm.noPromptClicked
	    }
	  }, [_c('image', {
	    staticClass: ["no-prompt-icon"],
	    attrs: {
	      "src": _vm.noPromptIcon
	    }
	  }), _c('text', {
	    staticClass: ["no-prompt-text"]
	  }, [_vm._v(_vm._s(_vm.noPromptText))])]) : _vm._e()], 2), _c('div', {
	    staticClass: ["dialog-footer"]
	  }, [(!_vm.single) ? _c('div', {
	    staticClass: ["footer-btn", "cancel"],
	    on: {
	      "click": _vm.secondaryClicked
	    }
	  }, [_c('text', {
	    staticClass: ["btn-text"],
	    style: {
	      color: _vm.secondBtnColor
	    }
	  }, [_vm._v(_vm._s(_vm.cancelText))])]) : _vm._e(), _c('div', {
	    staticClass: ["footer-btn", "confirm"],
	    on: {
	      "click": _vm.primaryClicked
	    }
	  }, [_c('text', {
	    staticClass: ["btn-text"],
	    style: {
	      color: _vm.mainBtnColor
	    }
	  }, [_vm._v(_vm._s(_vm.confirmText))])])])]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(127);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(128)
	)

	/* script */
	__vue_exports__ = __webpack_require__(129)

	/* template */
	var __vue_template__ = __webpack_require__(130)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-ep-slider/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6fa2f477"
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


/***/ }),
/* 128 */
/***/ (function(module, exports) {

	module.exports = {
	  "slider-content": {
	    "position": "relative"
	  },
	  "slider": {
	    "position": "absolute",
	    "top": 0
	  }
	}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var swipeBack = weex.requireModule('swipeBack');
	var expressionBinding = weex.requireModule('expressionBinding');
	var animation = weex.requireModule('animation');
	exports.default = {
	  props: {
	    sliderId: {
	      type: [String, Number],
	      default: 1
	    },
	    panOffset: {
	      type: Number,
	      default: 80
	    },
	    cardLength: {
	      type: Number,
	      default: 1
	    },
	    selectIndex: {
	      type: Number,
	      default: 0
	    },
	    enableSwipe: {
	      type: Boolean,
	      default: true
	    },
	    containerS: {
	      type: Object,
	      default: function _default() {
	        return {
	          position: 'relative',
	          width: 750,
	          height: 352,
	          overflow: 'hidden'
	        };
	      }
	    },
	    cardS: {
	      type: Object,
	      default: function _default() {
	        return {
	          width: 360,
	          height: 300,
	          spacing: 0,
	          scale: 0.75
	        };
	      }
	    },
	    autoPlay: {
	      type: Boolean,
	      default: false
	    },
	    interval: {
	      type: [Number, String],
	      default: 1200
	    }
	  },
	  data: function data() {
	    return {
	      moving: false,
	      startX: 0,
	      startTime: 0,
	      currentIndex: 0,
	      autoPlayTimer: null
	    };
	  },
	  computed: {
	    cardList: function cardList() {
	      return new Array(this.cardLength + 1).join().split('');
	    },
	    cardWidth: function cardWidth() {
	      return (this.cardLength - 1) * this.cardS.width + this.containerS.width + 235 + 'px';
	    }
	  },
	  created: function created() {
	    this.currentIndex = this.selectIndex;
	  },
	  mounted: function mounted() {
	    var _this = this;

	    // ios和页面返回冲突，组件里面将ios系统横滑返回禁止
	    if (swipeBack && swipeBack.forbidSwipeBack) {
	      swipeBack.forbidSwipeBack(true);
	    }
	    setTimeout(function () {
	      var sliderCtn = _this.$refs['sliderCtn_' + _this.sliderId];
	      if (_utils2.default.env.supportsEB() && sliderCtn && sliderCtn.ref) {
	        expressionBinding.enableBinding(sliderCtn.ref, 'pan');
	        _this.bindExp(sliderCtn);
	      }
	    }, 20);
	    this.checkNeedAutoPlay();
	  },

	  methods: {
	    onTouchStart: function onTouchStart(e) {
	      if (_utils2.default.env.supportsEB()) {
	        return;
	      }
	      this.clearAutoPlay();
	      this.startX = e.changedTouches[0].clientX;
	      this.startTime = Date.now();
	    },
	    onTouchMove: function onTouchMove(e) {
	      if (_utils2.default.env.supportsEB()) {
	        return;
	      }
	      var moveX = e.changedTouches[0].clientX - this.startX;
	      var index = this.loopedIndex(this.currentIndex, this.cardLength);
	      var cardLength = this.cardLength;
	      var currentCardLeft = this.currentIndex * (this.cardS.width + this.cardS.spacing);

	      var sliderCtn = this.$refs['sliderCtn_' + this.sliderId];
	      sliderCtn && animation.transition(sliderCtn, {
	        styles: {
	          transform: 'translateX(' + (moveX - currentCardLeft) + 'px)'
	        },
	        timingFunction: 'ease',
	        delay: 0,
	        duration: 0
	      }, function () {});

	      if (this.cardS.scale !== 1) {
	        var currentCard = this.$refs['card' + this.loopedIndex(index, cardLength) + '_' + this.sliderId][0];
	        currentCard && animation.transition(currentCard, {
	          styles: {
	            transform: 'scale(' + (1 - Math.abs(moveX) / this.cardS.width * (1 - this.cardS.scale)) + ')'
	          },
	          timingFunction: 'ease',
	          delay: 0,
	          duration: 0
	        }, function () {});
	        // 左边的卡片
	        var leftCard = this.$refs['card' + this.loopedIndex(index - 1, cardLength) + '_' + this.sliderId][0];
	        // loop 函数负数返回 0，这里有点冲突
	        if (leftCard && index !== 0) {
	          animation.transition(leftCard, {
	            styles: {
	              transform: 'scale(' + (1 - Math.abs(moveX - this.cardS.width) / this.cardS.width * (1 - this.cardS.scale)) + ')'
	            },
	            timingFunction: 'ease',
	            delay: 0,
	            duration: 0
	          }, function () {});
	        }
	        // 右边卡片
	        var rightCard = this.$refs['card' + this.loopedIndex(index + 1, cardLength) + '_' + this.sliderId][0];
	        rightCard && animation.transition(rightCard, {
	          styles: {
	            transform: 'scale(' + (1 - Math.abs(this.cardS.width + moveX) / this.cardS.width * (1 - this.cardS.scale)) + ')'
	          },
	          timingFunction: 'ease',
	          delay: 0,
	          duration: 0
	        }, function () {});
	      }
	    },
	    onTouchEnd: function onTouchEnd(e) {
	      var _this2 = this;

	      if (_utils2.default.env.supportsEB()) {
	        return;
	      }
	      this.moving = true;
	      var moveX = e.changedTouches[0].clientX - this.startX;
	      var originIndex = this.currentIndex;
	      var cardLength = this.cardLength;
	      var selectIndex = originIndex;
	      var panOffset = this.panOffset || this.cardS.width / 2;

	      if (moveX < -panOffset) {
	        if (this.loop || selectIndex !== cardLength - 1) {
	          selectIndex++;
	        }
	      } else if (moveX > panOffset) {
	        if (this.loop || selectIndex !== 0) {
	          selectIndex--;
	        }
	      }
	      this.slideTo(originIndex, selectIndex);
	      setTimeout(function () {
	        _this2.checkNeedAutoPlay();
	      }, 3000);
	    },
	    onEpTouchStart: function onEpTouchStart(e) {
	      var _this3 = this;

	      if (_utils2.default.env.supportsEB() && e.state === 'start') {
	        this.clearAutoPlay();
	        setTimeout(function () {
	          var sliderCtn = _this3.$refs['sliderCtn_' + _this3.sliderId];
	          _this3.bindExp(sliderCtn);
	        }, 0);
	      }
	    },
	    panEnd: function panEnd(e) {
	      var _this4 = this;

	      if (e.state === 'end' || e.state === 'cancel' || e.state === 'exit') {
	        this.moving = true;
	        var moveX = e.deltaX;
	        var originIndex = this.currentIndex;
	        var selectIndex = originIndex;
	        var duration = Date.now() - this.startTime;
	        var panOffset = this.panOffset || this.cardS.width / 2;
	        if (moveX < -panOffset || this.enableSwipe && moveX < -10 && duration < 200) {
	          if (selectIndex !== this.cardLength - 1) {
	            selectIndex++;
	          }
	        } else if (moveX > panOffset || this.enableSwipe && moveX > 10 && duration < 500) {
	          if (selectIndex !== 0) {
	            selectIndex--;
	          }
	        }
	        this.slideTo(originIndex, selectIndex);
	        setTimeout(function () {
	          _this4.checkNeedAutoPlay();
	        }, 3000);
	      }
	    },
	    slideTo: function slideTo(originIndex, selectIndex) {
	      var _this5 = this;

	      var currentCardScale = 1;
	      var rightCardScale = this.cardS.scale;
	      var leftCardScale = this.cardS.scale;
	      var duration = selectIndex === 0 && originIndex === this.cardLength - 1 ? 0.00001 : 300;
	      this.$emit('wxcEpSliderCurrentIndexSelected', { currentIndex: selectIndex });
	      if (originIndex < selectIndex) {
	        currentCardScale = this.cardS.scale;
	        rightCardScale = 1;
	      } else if (originIndex > selectIndex) {
	        currentCardScale = this.cardS.scale;
	        leftCardScale = 1;
	      }
	      var currentCard = this.$refs['card' + this.loopedIndex(originIndex, this.cardLength) + '_' + this.sliderId][0];
	      currentCard && animation.transition(currentCard, {
	        styles: {
	          transform: 'scale(' + currentCardScale + ')'
	        },
	        timingFunction: 'ease',
	        duration: duration
	      }, function () {});

	      var leftCard = this.$refs['card' + this.loopedIndex(originIndex - 1, this.cardLength) + '_' + this.sliderId][0];
	      if (this.moving && leftCard && originIndex !== 0) {
	        animation.transition(leftCard, {
	          styles: {
	            transform: 'scale(' + leftCardScale + ')'
	          },
	          timingFunction: 'ease',
	          duration: duration
	        }, function () {});
	      }
	      var rightCard = this.$refs['card' + this.loopedIndex(originIndex + 1, this.cardLength) + '_' + this.sliderId][0];
	      if (rightCard && originIndex !== this.cardLength - 1) {
	        animation.transition(rightCard, {
	          styles: {
	            transform: 'scale(' + rightCardScale + ')'
	          },
	          timingFunction: 'ease',
	          duration: duration
	        }, function () {});
	      }

	      var sliderCtn = this.$refs['sliderCtn_' + this.sliderId];
	      sliderCtn && animation.transition(sliderCtn, {
	        styles: {
	          transform: 'translateX(-' + selectIndex * (this.cardS.width + this.cardS.spacing) + 'px)'
	        },
	        timingFunction: 'ease',
	        duration: duration
	      }, function () {
	        _this5.moving = false;
	        if (originIndex !== selectIndex) {
	          _this5.currentIndex = selectIndex;
	        }
	      });
	    },

	    // 使index维持在0-length之间循环
	    loopedIndex: function loopedIndex(index, total) {
	      if (index < 0) {
	        index = index + (1 - index / total) * total;
	      }
	      return index % total;
	    },
	    bindExp: function bindExp(element) {
	      var _this6 = this;

	      if (element && element.ref && !this.moving) {
	        this.startTime = Date.now();
	        var index = this.loopedIndex(this.currentIndex, this.cardLength);
	        var sliderCtn = this.$refs['sliderCtn_' + this.sliderId];
	        var currentCard = this.$refs['card' + index + '_' + this.sliderId][0];
	        var rightCard = null;
	        var leftCard = null;
	        var currentCardLeft = this.currentIndex * (this.cardS.width + this.cardS.spacing);
	        // 卡片容器
	        // x - currentCardLeft
	        var sliderCtnExpOri = 'x - ' + currentCardLeft;
	        var sliderCtnExp = '{"type":"-","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":' + currentCardLeft + '}]}';
	        var args = [{
	          element: sliderCtn.ref,
	          property: 'transform.translateX',
	          expression: sliderCtnExp,
	          'ori_expression': sliderCtnExpOri
	        }];

	        if (this.cardS.scale !== 1) {
	          // 当前显示的卡片
	          // 1-abs(x)/588*${1-this.cardS.scale}
	          var currentCardExpOri = '1-abs(x)/' + this.cardS.width + '*' + (1 - this.cardS.scale);
	          var currentCardExp = '{"type":"-","children":[{"type":"NumericLiteral","value":1},{"type":"*","children":[{"type":"/","children":[{"type":"CallExpression","children":[{"type":"Identifier","value":"abs"},{"type":"Arguments","children":[{"type":"Identifier","value":"x"}]}]},{"type":"NumericLiteral","value":' + this.cardS.width + '}]},{"type":"NumericLiteral","value":' + (1 - this.cardS.scale) + '}]}]}';
	          args.push({
	            element: currentCard.ref,
	            property: 'transform.scale',
	            expression: currentCardExp,
	            'ori_expression': currentCardExpOri
	          });

	          if (index === 0 && this.$refs['card' + (index + 1) + '_' + this.sliderId]) {
	            // 右边卡片
	            rightCard = this.$refs['card' + (index + 1) + '_' + this.sliderId][0];
	            // 1-abs(588+x)/588*${1-this.cardS.scale}
	            var rightCardExpOri = '{sx: 1-abs(' + this.cardS.width + '+x)/' + this.cardS.width + '*' + (1 - this.cardS.scale) + ', sy: 1-abs(' + this.cardS.width + '+x)/' + this.cardS.width + '*' + (1 - this.cardS.scale) + '}';
	            var rightCardExp = '{"type":"-","children":[{"type":"NumericLiteral","value":1},{"type":"*","children":[{"type":"/","children":[{"type":"CallExpression","children":[{"type":"Identifier","value":"abs"},{"type":"Arguments","children":[{"type":"+","children":[{"type":"NumericLiteral","value":' + this.cardS.width + '},{"type":"Identifier","value":"x"}]}]}]},{"type":"NumericLiteral","value":' + this.cardS.width + '}]},{"type":"NumericLiteral","value":' + (1 - this.cardS.scale) + '}]}]}';
	            args.push({
	              element: rightCard.ref,
	              property: 'transform.scale',
	              expression: rightCardExp,
	              'ori_expression': rightCardExpOri
	            });
	          } else if (index === this.cardLength - 1 && this.$refs['card' + (index - 1) + '_' + this.sliderId]) {
	            // 左边的卡片
	            leftCard = this.$refs['card' + (index - 1) + '_' + this.sliderId][0];
	            // 1-abs(x-${this.cardS.width})/${this.cardS.width}*${1-this.cardS.scale}
	            var leftCardExpOri = '{sx: 1-abs(x-' + this.cardS.width + ')/' + this.cardS.width + '*' + (1 - this.cardS.scale) + ', sy: 1-abs(x-' + this.cardS.width + ')/' + this.cardS.width + '*' + (1 - this.cardS.scale) + '}';
	            var leftCardExp = '{"type":"-","children":[{"type":"NumericLiteral","value":1},{"type":"*","children":[{"type":"/","children":[{"type":"CallExpression","children":[{"type":"Identifier","value":"abs"},{"type":"Arguments","children":[{"type":"-","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":' + this.cardS.width + '}]}]}]},{"type":"NumericLiteral","value":' + this.cardS.width + '}]},{"type":"NumericLiteral","value":' + (1 - this.cardS.scale) + '}]}]}';
	            args.push({
	              element: leftCard.ref,
	              property: 'transform.scale',
	              expression: leftCardExp,
	              'ori_expression': leftCardExpOri
	            });
	          } else if (this.$refs['card' + (index - 1) + '_' + this.sliderId]) {
	            // 左边卡片
	            leftCard = this.$refs['card' + (index - 1) + '_' + this.sliderId][0];
	            // 1-abs(x-${this.cardS.width})/${this.cardS.width}*${1-this.cardS.scale}
	            var _leftCardExpOri = '{sx: 1-abs(x-' + this.cardS.width + ')/' + this.cardS.width + '*' + (1 - this.cardS.scale) + ', sy: 1-abs(x-' + this.cardS.width + ')/' + this.cardS.width + '*' + (1 - this.cardS.scale) + '}';
	            var _leftCardExp = '{"type":"-","children":[{"type":"NumericLiteral","value":1},{"type":"*","children":[{"type":"/","children":[{"type":"CallExpression","children":[{"type":"Identifier","value":"abs"},{"type":"Arguments","children":[{"type":"-","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":' + this.cardS.width + '}]}]}]},{"type":"NumericLiteral","value":' + this.cardS.width + '}]},{"type":"NumericLiteral","value":' + (1 - this.cardS.scale) + '}]}]}';

	            args.push({
	              element: leftCard.ref,
	              property: 'transform.scale',
	              expression: _leftCardExp,
	              'ori_expression': _leftCardExpOri
	            });

	            // 右边卡片
	            rightCard = this.$refs['card' + (index + 1) + '_' + this.sliderId][0];
	            // 1-abs(${this.cardS.width}+x)/${this.cardS.width}*${1-this.cardS.scale}
	            var _rightCardExpOri = '{sx: 1-abs(' + this.cardS.width + '+x)/' + this.cardS.width + '*' + (1 - this.cardS.scale) + ', sy: 1-abs(' + this.cardS.width + '+x)/' + this.cardS.width + '*' + (1 - this.cardS.scale) + '}';
	            var _rightCardExp = '{"type":"-","children":[{"type":"NumericLiteral","value":1},{"type":"*","children":[{"type":"/","children":[{"type":"CallExpression","children":[{"type":"Identifier","value":"abs"},{"type":"Arguments","children":[{"type":"+","children":[{"type":"NumericLiteral","value":' + this.cardS.width + '},{"type":"Identifier","value":"x"}]}]}]},{"type":"NumericLiteral","value":' + this.cardS.width + '}]},{"type":"NumericLiteral","value":' + (1 - this.cardS.scale) + '}]}]}';
	            args.push({
	              element: rightCard.ref,
	              property: 'transform.scale',
	              expression: _rightCardExp,
	              'ori_expression': _rightCardExpOri
	            });
	          }
	        }
	        expressionBinding.createBinding(element.ref, 'pan', '', args, function (e) {
	          if (!_this6.moving) {
	            _this6.panEnd(e);
	          }
	        });
	      }
	    },
	    checkNeedAutoPlay: function checkNeedAutoPlay() {
	      var _this7 = this;

	      if (this.autoPlay) {
	        this.clearAutoPlay();
	        this.autoPlayTimer = setInterval(function () {
	          _this7.slideTo(_this7.currentIndex, _this7.loopedIndex(_this7.currentIndex + 1, _this7.cardLength));
	        }, parseInt(this.interval));
	      }
	    },
	    clearAutoPlay: function clearAutoPlay() {
	      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
	    },

	    // ios下当放在list中，cell被回收后，再次出现的时候需要重新为容器绑定下pan事情
	    rebind: function rebind() {
	      var sliderCtn = this.$refs['sliderCtn_' + this.sliderId];
	      if (sliderCtn && sliderCtn.ref) {
	        expressionBinding.disableBinding(sliderCtn.ref, 'pan');
	        expressionBinding.enableBinding(sliderCtn.ref, 'pan');
	      }
	    },
	    manualSetPage: function manualSetPage(selectIndex) {
	      var _this8 = this;

	      this.clearAutoPlay();
	      var step = this.currentIndex < selectIndex ? 1 : -1;
	      this.slideTo(this.loopedIndex(selectIndex - step, this.cardLength), selectIndex);
	      setTimeout(function () {
	        _this8.checkNeedAutoPlay();
	      }, 3000);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 130 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    style: _vm.containerS
	  }, [_c('div', {
	    ref: ("sliderCtn_" + _vm.sliderId),
	    staticClass: ["slider-content"],
	    style: {
	      width: _vm.cardWidth + 'px',
	      height: _vm.cardS.height + 'px',
	      transform: ("translateX(-" + (_vm.currentIndex * (_vm.cardS.width + _vm.cardS.spacing)) + "px)")
	    },
	    attrs: {
	      "preventMoveEvent": true
	    },
	    on: {
	      "panstart": _vm.onTouchStart,
	      "panmove": _vm.onTouchMove,
	      "panend": _vm.onTouchEnd,
	      "horizontalpan": _vm.onEpTouchStart
	    }
	  }, _vm._l((_vm.cardList), function(v, index) {
	    return _c('div', {
	      ref: ("card" + index + "_" + _vm.sliderId),
	      refInFor: true,
	      staticClass: ["slider"],
	      style: {
	        transform: ("scale(" + (index===_vm.currentIndex ? 1 : _vm.cardS.scale) + ")"),
	        left: ((index * (_vm.cardS.width+_vm.cardS.spacing)) + "px"),
	        marginLeft: (((_vm.containerS.width - _vm.cardS.width) / 2) + "px"),
	        width: _vm.cardS.width + 'px',
	        height: _vm.cardS.height + 'px'
	      }
	    }, [_vm._t(("card" + index + "_" + _vm.sliderId))], 2)
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(132);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(133)

	/* template */
	var __vue_template__ = __webpack_require__(134)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-pan-item/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var expressionBinding = weex.requireModule('expressionBinding');
	exports.default = {
	  props: {
	    extId: {
	      type: [String, Number],
	      default: 0
	    },
	    url: {
	      type: String,
	      default: ''
	    }
	  },
	  data: function data() {
	    return {
	      isPanning: false,
	      appearMap: []
	    };
	  },
	  mounted: function mounted() {
	    var _this = this;

	    setTimeout(function () {
	      if (_utils2.default.env.supportsEBForAndroid()) {
	        var element = _this.$refs['wxc-pan-item'];
	        element && expressionBinding.enableBinding(element.ref, 'pan');
	      }
	    }, 300);
	  },

	  methods: {
	    itemClicked: function itemClicked() {
	      if (this.isPanning) {
	        return;
	      }
	      this.url && _utils2.default.goToH5Page(this.url, true);
	      this.$emit('wxcPanItemClicked', { extId: this.extId });
	    },
	    onItemAppear: function onItemAppear() {
	      var extId = this.extId;
	      if (!this.appearMap[extId] && _utils2.default.env.supportsEBForAndroid()) {
	        this.appearMap[extId] = true;
	        expressionBinding.enableBinding(this.$refs['wxc-pan-item-' + extId].ref, 'pan');
	      }
	    },
	    onItemDisAppear: function onItemDisAppear() {
	      var extId = this.extId;
	      if (this.appearMap[extId] && _utils2.default.env.supportsEBForAndroid()) {
	        this.appearMap[extId] = false;
	        expressionBinding.disableBinding(this.$refs['wxc-pan-item-' + extId].ref, 'pan');
	      }
	    },
	    dispatchPan: function dispatchPan(e) {
	      var _this2 = this;

	      var extId = this.extId;
	      if (_utils2.default.env.supportsEBForAndroid()) {
	        if (e.state === 'start') {
	          this.isPanning = true;
	          var element = this.$refs['wxc-pan-item-' + extId];
	          element && this.$emit('wxcPanItemPan', { element: element });
	        } else if (e.state === 'end') {
	          setTimeout(function () {
	            _this2.isPanning = false;
	          }, 50);
	        }
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 134 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: ("wxc-pan-item-" + _vm.extId),
	    attrs: {
	      "preventMoveEvent": true
	    },
	    on: {
	      "horizontalpan": _vm.dispatchPan,
	      "appear": _vm.onItemAppear,
	      "disappear": _vm.onItemDisAppear,
	      "click": _vm.itemClicked
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(136);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(137)
	)

	/* script */
	__vue_exports__ = __webpack_require__(138)

	/* template */
	var __vue_template__ = __webpack_require__(143)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-grid-select/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-aaaa3952"
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


/***/ }),
/* 137 */
/***/ (function(module, exports) {

	module.exports = {
	  "grid-select": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "flexWrap": "wrap"
	  }
	}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(91);

	var _extends3 = _interopRequireDefault(_extends2);

	var _option = __webpack_require__(139);

	var _option2 = _interopRequireDefault(_option);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: { Option: _option2.default },
	  props: {
	    // 列数
	    cols: {
	      type: Number,
	      default: 4
	    },
	    // 是否单选
	    single: {
	      type: Boolean,
	      default: false
	    },
	    // 数据
	    list: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    // 选择个数限制
	    limit: {
	      type: Number
	    },
	    // 用户自定义样式，用于个性化设置option样式
	    customStyles: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  data: function data() {
	    return {
	      dList: this.initList()
	    };
	  },

	  computed: {
	    cHackList: function cHackList() {
	      var list = this.list,
	          cols = this.cols;

	      var remainder = list.length % cols;
	      var len = remainder ? cols - remainder : 0;

	      return Array.apply(null, { length: len });
	    }
	  },
	  watch: {
	    list: function list() {
	      this.dList = this.initList();
	    }
	  },
	  created: function created() {
	    // 行间距
	    this.lineSpacing = this.customStyles.lineSpacing || '12px';
	  },

	  methods: {
	    onSelect: function onSelect(index) {
	      var checked = this.dList[index].checked;
	      if (this.limit <= this.checkedCount && !checked) {
	        this.$emit('overLimit', this.limit);
	      } else {
	        this.updateList(index);
	        this.$emit('select', {
	          selectIndex: index,
	          checked: !checked,
	          checkedList: this.dList.filter(function (item) {
	            return item.checked;
	          })
	        });
	      }
	    },
	    initList: function initList() {
	      var single = this.single;
	      var checkedCount = 0;

	      var dList = this.list.map(function (item, i) {
	        var checked = item.checked,
	            disabled = item.disabled;

	        disabled = !!disabled;
	        // disabled为true时认为checked无效，同时单选模式下只认为第一个checked为true的为有效值
	        checked = !disabled && !!checked && (!single || checkedCount === 0);
	        if (item.checked) checkedCount += 1;
	        return (0, _extends3.default)({}, item, {
	          checked: checked,
	          disabled: disabled
	        });
	      });

	      this.checkedCount = checkedCount;
	      return dList;
	    },
	    updateList: function updateList(index) {
	      var single = this.single;
	      var checkedCount = 0;
	      this.dList = this.dList.map(function (item, i) {
	        if (single) {
	          item.checked = index === i && !item.checked;
	        } else {
	          if (i === index) item.checked = !item.checked;
	        }
	        if (item.checked) checkedCount += 1;
	        return item;
	      });
	      this.checkedCount = checkedCount;
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(140)
	)

	/* script */
	__vue_exports__ = __webpack_require__(141)

	/* template */
	var __vue_template__ = __webpack_require__(142)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-grid-select/option.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5aaf5580"
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


/***/ }),
/* 140 */
/***/ (function(module, exports) {

	module.exports = {
	  "grid-option": {
	    "justifyContent": "center",
	    "borderRadius": 8,
	    "borderWidth": 2,
	    "paddingLeft": 6,
	    "paddingRight": 6
	  },
	  "text-title": {
	    "lines": 2,
	    "lineHeight": 30,
	    "textOverflow": "ellipsis",
	    "textAlign": "center",
	    "fontSize": 26
	  },
	  "image-checked": {
	    "position": "absolute",
	    "right": 0,
	    "bottom": 0,
	    "width": 38,
	    "height": 34
	  }
	}

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    index: {
	      type: Number,
	      default: -1
	    },
	    // 是否选中
	    checked: {
	      type: Boolean,
	      default: false
	    },
	    // 是否可选
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    // 标题
	    title: {
	      type: String,
	      default: ''
	    },
	    width: {
	      type: String,
	      default: '166px'
	    },
	    height: {
	      type: String,
	      default: '72px'
	    },
	    // 默认 x
	    icon: {
	      type: String,
	      default: 'https://gw.alicdn.com/tfs/TB1IAByhgMPMeJjy1XdXXasrXXa-38-34.png'
	    },
	    // 正常状态文字色值
	    color: {
	      type: String,
	      default: '#3d3d3d'
	    },
	    // 选中状态文字色值
	    checkedColor: {
	      type: String,
	      default: '#3d3d3d'
	    },
	    // 不可选状态文字色值
	    disabledColor: {
	      type: String,
	      default: '#9b9b9b'
	    },
	    // 正常状态边框色值
	    borderColor: {
	      type: String,
	      default: 'transparent'
	    },
	    // 选中状态边框色值
	    checkedBorderColor: {
	      type: String,
	      default: '#ffb200'
	    },
	    // 不可选状态边框色值
	    disabledBorderColor: {
	      type: String,
	      default: 'transparent'
	    },
	    // 正常状态背景色值
	    backgroundColor: {
	      type: String,
	      default: '#f6f6f6'
	    },
	    // 选中状态背景色值
	    checkedBackgroundColor: {
	      type: String,
	      default: '#fff'
	    },
	    // 不可选状态背景色值
	    disabledBackgroundColor: {
	      type: String,
	      default: '#f6f6f6'
	    }
	  },
	  computed: {
	    cWrapperStyle: function cWrapperStyle() {
	      var checked = this.checked,
	          disabled = this.disabled,
	          width = this.width,
	          height = this.height,
	          borderColor = this.borderColor,
	          checkedBorderColor = this.checkedBorderColor,
	          disabledBorderColor = this.disabledBorderColor,
	          backgroundColor = this.backgroundColor,
	          checkedBackgroundColor = this.checkedBackgroundColor,
	          disabledBackgroundColor = this.disabledBackgroundColor;

	      return {
	        width: width,
	        height: height,
	        borderColor: disabled ? disabledBorderColor : checked ? checkedBorderColor : borderColor,
	        backgroundColor: disabled ? disabledBackgroundColor : checked ? checkedBackgroundColor : backgroundColor
	      };
	    },
	    cTitleStyle: function cTitleStyle() {
	      var checked = this.checked,
	          disabled = this.disabled,
	          color = this.color,
	          checkedColor = this.checkedColor,
	          disabledColor = this.disabledColor;

	      return {
	        color: disabled ? disabledColor : checked ? checkedColor : color
	      };
	    }
	  },
	  methods: {
	    onClick: function onClick() {
	      if (!this.disabled) {
	        this.$emit('select', this.index);
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 142 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["grid-option"],
	    style: _vm.cWrapperStyle,
	    attrs: {
	      "accessible": true,
	      "ariaLabel": (_vm.title + "," + (_vm.checked?'已选中':'未选中'))
	    },
	    on: {
	      "click": _vm.onClick
	    }
	  }, [(_vm.title) ? _c('text', {
	    staticClass: ["text-title"],
	    style: _vm.cTitleStyle
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), (_vm.checked && _vm.icon) ? _c('image', {
	    staticClass: ["image-checked"],
	    attrs: {
	      "src": _vm.icon
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["grid-select"]
	  }, [_vm._l((_vm.dList), function(item, index) {
	    return _c('option', _vm._b({
	      key: index,
	      style: {
	        marginTop: index >= _vm.cols ? _vm.lineSpacing : null
	      },
	      attrs: {
	        "index": index
	      },
	      on: {
	        "select": function($event) {
	          _vm.onSelect(index)
	        }
	      }
	    }, 'option', Object.assign({}, _vm.customStyles, item), false))
	  }), _vm._l((_vm.cHackList), function(item, index) {
	    return _c('option', _vm._b({
	      key: index,
	      style: {
	        opacity: 0,
	        marginTop: _vm.dList.length >= _vm.cols ? _vm.lineSpacing : null
	      }
	    }, 'option', Object.assign({}, _vm.customStyles, item), false))
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(145);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(146)
	)

	/* script */
	__vue_exports__ = __webpack_require__(147)

	/* template */
	var __vue_template__ = __webpack_require__(149)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-indexlist/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-359f3064"
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


/***/ }),
/* 146 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-index-list": {
	    "position": "relative"
	  },
	  "index-list": {
	    "width": 750,
	    "height": 1334
	  },
	  "index-list-title": {
	    "borderBottomWidth": 1,
	    "borderColor": "rgba(32,35,37,0.15)",
	    "backgroundColor": "#FBFBFB",
	    "fontSize": 24,
	    "color": "#666666",
	    "paddingBottom": 14,
	    "paddingTop": 14,
	    "paddingLeft": 23,
	    "width": 750
	  },
	  "group-title": {
	    "borderBottomWidth": 0,
	    "paddingBottom": 0,
	    "paddingTop": 24
	  },
	  "index-list-item": {
	    "width": 750,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#e0e0e0",
	    "height": 92,
	    "paddingLeft": 24,
	    "paddingRight": 24,
	    "backgroundColor": "#FFFFFF"
	  },
	  "iphone-x": {
	    "height": 68,
	    "backgroundColor": "#ffffff"
	  },
	  "title": {
	    "fontSize": 32,
	    "color": "#3D3D3D"
	  },
	  "desc": {
	    "fontSize": 24,
	    "color": "#A5A5A5",
	    "marginLeft": 30
	  },
	  "index-list-nav": {
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "marginBottom": 60,
	    "marginTop": 60,
	    "paddingBottom": 20,
	    "paddingTop": 20,
	    "width": 70
	  },
	  "list-nav-key": {
	    "textAlign": "center",
	    "fontSize": 24,
	    "height": 40,
	    "color": "#666666"
	  },
	  "index-list-pop": {
	    "position": "fixed",
	    "top": 550,
	    "left": 316,
	    "width": 120,
	    "height": 120,
	    "textAlign": "center",
	    "justifyContent": "center",
	    "backgroundColor": "rgba(32,35,37,0.6)",
	    "borderBottomLeftRadius": 60,
	    "borderBottomRightRadius": 60,
	    "borderTopLeftRadius": 60,
	    "borderTopRightRadius": 60,
	    "paddingLeft": 0,
	    "paddingRight": 0,
	    "paddingTop": 35,
	    "paddingBottom": 35,
	    "color": "#ffffff"
	  },
	  "list-pop-text": {
	    "fontSize": 40,
	    "textAlign": "center",
	    "color": "#ffffff"
	  },
	  "group": {
	    "paddingBottom": 18,
	    "paddingRight": 70,
	    "backgroundColor": "#FBFBFB"
	  },
	  "group-list": {
	    "flexDirection": "row",
	    "marginLeft": 18,
	    "marginTop": 18,
	    "backgroundColor": "#FBFBFB"
	  },
	  "group-item": {
	    "width": 146,
	    "height": 64,
	    "borderWidth": 1,
	    "borderColor": "#e0e0e0",
	    "marginRight": 18,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "backgroundColor": "#FFFFFF"
	  },
	  "item-content": {
	    "flexDirection": "column"
	  },
	  "item-name": {
	    "fontSize": 24,
	    "lineHeight": 26,
	    "color": "#333333"
	  },
	  "item-desc": {
	    "marginTop": 2,
	    "color": "#999999",
	    "fontSize": 20,
	    "textAlign": "center"
	  },
	  "location-icon": {
	    "width": 32,
	    "height": 32,
	    "marginRight": 8
	  }
	}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _format = __webpack_require__(148);

	var Format = _interopRequireWildcard(_format);

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var dom = weex.requireModule('dom');
	exports.default = {
	  props: {
	    height: {
	      type: [Number, String],
	      default: _utils2.default.env.getPageHeight()
	    },
	    normalList: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    onlyShowList: {
	      type: Boolean,
	      default: false
	    },
	    showIndex: {
	      type: Boolean,
	      default: true
	    },
	    navStyle: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    hotListConfig: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    // 城市选择子组件 特殊情况支持
	    cityLocationConfig: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  created: function created() {
	    this.isIPhoneX = _utils2.default.env.isIPhoneX();
	  },

	  computed: {
	    formatList: function formatList() {
	      var normalList = this.normalList,
	          hotListConfig = this.hotListConfig,
	          cityLocationConfig = this.cityLocationConfig;

	      return Format.totalList(normalList, hotListConfig, cityLocationConfig);
	    }
	  },
	  data: function data() {
	    return {
	      popKeyShow: false,
	      popKey: '',
	      navOffsetY: 0,
	      timer: null
	    };
	  },
	  methods: {
	    itemClicked: function itemClicked(item) {
	      this.$emit('wxcIndexlistItemClicked', {
	        item: item
	      });
	    },
	    go2Key: function go2Key(key) {
	      var _this = this;

	      var keyEl = this.$refs['index-item-title-' + key][0];
	      keyEl && dom.scrollToElement(keyEl, {
	        offset: 0
	      });
	      this.popKey = key;
	      this.popKeyShow = true;
	      this.timer && clearTimeout(this.timer);
	      this.timer = setTimeout(function () {
	        _this.popKeyShow = false;
	      }, 600);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.totalList = totalList;
	exports.getSpecialData = getSpecialData;

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 根据26个字母取每一项首字母对数据进行排序,处理数据变换
	 * @return {[array]}
	 */
	function totalList(source, hotListConfig, cityLocationConfig) {
	  var LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	  var res = [];
	  LETTERS.split('').forEach(function (letter) {
	    var _data = source.filter(function (item) {
	      if (item.pinYin) {
	        return item.pinYin.slice(0, 1).toLowerCase() === letter.toLowerCase();
	      } else if (item.py) {
	        return item.py.slice(0, 1).toLowerCase() === letter.toLowerCase();
	      } else {
	        return false;
	      }
	    });
	    if (_data.length) {
	      res.push({
	        title: letter,
	        data: _data,
	        type: 'list'
	      });
	    }
	  });

	  // 处理热门数据
	  var hotList = getSpecialData(hotListConfig);
	  hotList && res.unshift(hotList);

	  // 处理特殊定位数据
	  var cityLocation = getSpecialData(cityLocationConfig);
	  cityLocation && res.unshift(cityLocation);

	  return res;
	} /**
	   * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
	   * Created by Tw93 on 17/11/01
	   */

	function getSpecialData(data) {
	  if (data && data.type && data.list && data.list.length > 0) {
	    var type = data.type,
	        title = data.title,
	        list = data.list;

	    return {
	      title: title,
	      type: type,
	      data: type === 'group' ? _utils2.default.arrayChunk(list) : list
	    };
	  } else {
	    return null;
	  }
	}

/***/ }),
/* 149 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-index-list"]
	  }, [_c('list', {
	    staticClass: ["index-list"],
	    style: {
	      height: _vm.height + 'px'
	    }
	  }, [_vm._l((_vm.formatList), function(v, i) {
	    return _c('cell', {
	      key: i,
	      ref: 'index-item-title-' + v.title,
	      refInFor: true,
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [(!_vm.onlyShowList) ? _c('text', {
	      class: ['index-list-title', v.type && v.type == 'group' && 'group-title']
	    }, [_vm._v(_vm._s(v.title))]) : _vm._e(), (v.type && v.type == 'group' && !_vm.onlyShowList) ? _c('div', {
	      staticClass: ["group"]
	    }, _vm._l((v.data), function(group, index) {
	      return _c('div', {
	        key: index,
	        staticClass: ["group-list"]
	      }, _vm._l((group), function(item, i) {
	        return _c('div', {
	          key: i,
	          staticClass: ["group-item"],
	          attrs: {
	            "accessible": true,
	            "ariaLabel": ((item.name) + "," + (item.desc?item.desc:''))
	          },
	          on: {
	            "click": function($event) {
	              _vm.itemClicked(item)
	            }
	          }
	        }, [(item.isLocation) ? _c('image', {
	          staticClass: ["location-icon"],
	          attrs: {
	            "src": "https://gw.alicdn.com/tfs/TB1JUiUPFXXXXXUXXXXXXXXXXXX-32-32.png"
	          }
	        }) : _vm._e(), _c('div', {
	          staticClass: ["item-content"]
	        }, [_c('text', {
	          staticClass: ["item-name"]
	        }, [_vm._v(_vm._s(item.name))]), (item.desc) ? _c('text', {
	          staticClass: ["item-desc"]
	        }, [_vm._v(_vm._s(item.desc))]) : _vm._e()])])
	      }))
	    })) : _vm._e(), (v.type === 'list') ? _c('div', _vm._l((v.data), function(item, index) {
	      return _c('div', {
	        key: index,
	        staticClass: ["index-list-item"],
	        attrs: {
	          "accessible": true,
	          "ariaLabel": ((item.name) + "," + (item.desc?item.desc:''))
	        },
	        on: {
	          "click": function($event) {
	            _vm.itemClicked(item)
	          }
	        }
	      }, [_c('text', {
	        staticClass: ["title"]
	      }, [_vm._v(_vm._s(item.name))]), _c('text', {
	        staticClass: ["desc"]
	      }, [_vm._v(_vm._s(item.desc))])])
	    })) : _vm._e()])
	  }), (_vm.isIPhoneX) ? _c('cell', {
	    staticClass: ["iphone-x"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }) : _vm._e()], 2), (_vm.showIndex && !_vm.onlyShowList) ? _c('div', {
	    staticClass: ["index-list-nav"],
	    style: _vm.navStyle
	  }, _vm._l((_vm.formatList), function(item, index) {
	    return _c('text', {
	      key: index,
	      staticClass: ["list-nav-key"],
	      attrs: {
	        "title": item.title
	      },
	      on: {
	        "click": function($event) {
	          _vm.go2Key(item.title)
	        }
	      }
	    }, [_vm._v(_vm._s(item.title))])
	  })) : _vm._e(), (_vm.popKeyShow) ? _c('div', {
	    staticClass: ["index-list-pop"]
	  }, [_c('text', {
	    staticClass: ["list-pop-text"]
	  }, [_vm._v(_vm._s(_vm.popKey))])]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(151);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(152)
	)

	/* script */
	__vue_exports__ = __webpack_require__(153)

	/* template */
	var __vue_template__ = __webpack_require__(159)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-lightbox/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-b17ea452"
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


/***/ }),
/* 152 */
/***/ (function(module, exports) {

	module.exports = {
	  "indicator": {
	    "position": "absolute",
	    "itemColor": "rgba(255, 195, 0, .5)",
	    "itemSelectedColor": "#ffc300",
	    "itemSize": 20,
	    "height": 20,
	    "bottom": 24
	  }
	}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(91);

	var _extends3 = _interopRequireDefault(_extends2);

	var _wxcMask = __webpack_require__(154);

	var _wxcMask2 = _interopRequireDefault(_wxcMask);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    WxcMask: _wxcMask2.default
	  },
	  props: {
	    width: {
	      type: [Number, String],
	      default: 750
	    },
	    height: {
	      type: [Number, String],
	      default: 750
	    },
	    show: {
	      type: Boolean,
	      default: false
	    },
	    imageList: Array,
	    indicatorColor: {
	      type: Object,
	      default: function _default() {
	        return {
	          'item-color': 'rgba(255, 195, 0, .5)',
	          'item-selected-color': '#ffc300',
	          'item-size': '20px'
	        };
	      }
	    }
	  },
	  computed: {
	    indicatorStyle: function indicatorStyle() {
	      return (0, _extends3.default)({
	        width: this.width + 'px'
	      }, this.indicatorColor);
	    }
	  },
	  methods: {
	    maskOverlayClick: function maskOverlayClick() {
	      this.$emit('wxcLightboxOverlayClicked', {});
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(155);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(156)
	)

	/* script */
	__vue_exports__ = __webpack_require__(157)

	/* template */
	var __vue_template__ = __webpack_require__(158)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-mask/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5788de8e"
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


/***/ }),
/* 156 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "position": "fixed",
	    "width": 750,
	    "zIndex": 99999
	  },
	  "wxc-mask": {
	    "position": "fixed",
	    "top": 300,
	    "left": 60,
	    "width": 702,
	    "height": 800
	  },
	  "mask-bottom": {
	    "width": 100,
	    "height": 100,
	    "backgroundColor": "rgba(0,0,0,0)",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "mask-close-icon": {
	    "width": 64,
	    "height": 64
	  }
	}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(50);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _extends2 = __webpack_require__(91);

	var _extends3 = _interopRequireDefault(_extends2);

	var _wxcOverlay = __webpack_require__(119);

	var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	exports.default = {
	  components: { WxcOverlay: _wxcOverlay2.default },
	  props: {
	    height: {
	      type: [String, Number],
	      default: 800
	    },
	    width: {
	      type: [String, Number],
	      default: 702
	    },
	    show: {
	      type: Boolean,
	      default: false
	    },
	    showClose: {
	      type: Boolean,
	      default: false
	    },
	    duration: {
	      type: [String, Number],
	      default: 300
	    },
	    hasOverlay: {
	      type: Boolean,
	      default: true
	    },
	    hasAnimation: {
	      type: Boolean,
	      default: true
	    },
	    timingFunction: {
	      type: Array,
	      default: function _default() {
	        return ['ease-in', 'ease-out'];
	      }
	    },
	    overlayCfg: {
	      type: Object,
	      default: function _default() {
	        return {
	          hasAnimation: true,
	          timingFunction: ['ease-in', 'ease-out'],
	          canAutoClose: true,
	          duration: 300,
	          opacity: 0.6
	        };
	      }
	    },
	    borderRadius: {
	      type: [String, Number],
	      default: 0
	    },
	    overlayCanClose: {
	      type: Boolean,
	      default: true
	    },
	    maskBgColor: {
	      type: String,
	      default: '#ffffff'
	    }
	  },
	  data: function data() {
	    return {
	      closeIcon: 'https://gw.alicdn.com/tfs/TB1qDJUpwMPMeJjy1XdXXasrXXa-64-64.png',
	      maskTop: 264,
	      opacity: 0
	    };
	  },
	  computed: {
	    mergeOverlayCfg: function mergeOverlayCfg() {
	      return (0, _extends3.default)({}, this.overlayCfg, {
	        hasAnimation: this.hasAnimation
	      });
	    },
	    maskStyle: function maskStyle() {
	      var width = this.width,
	          height = this.height,
	          showClose = this.showClose,
	          hasAnimation = this.hasAnimation,
	          opacity = this.opacity;

	      var newHeight = showClose ? height - 0 + 100 : height;
	      var _weex$config$env = weex.config.env,
	          deviceHeight = _weex$config$env.deviceHeight,
	          deviceWidth = _weex$config$env.deviceWidth,
	          platform = _weex$config$env.platform;

	      var _deviceHeight = deviceHeight || 1334;
	      var isWeb = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && platform.toLowerCase() === 'web';
	      var navHeight = isWeb ? 0 : 130;
	      var pageHeight = _deviceHeight / deviceWidth * 750 - navHeight;
	      return {
	        width: width + 'px',
	        height: newHeight + 'px',
	        left: (750 - width) / 2 + 'px',
	        top: (pageHeight - height) / 2 + 'px',
	        opacity: hasAnimation ? opacity : 1
	      };
	    },
	    contentStyle: function contentStyle() {
	      return {
	        width: this.width + 'px',
	        backgroundColor: this.maskBgColor,
	        height: this.height + 'px',
	        borderRadius: this.borderRadius + 'px'
	      };
	    },
	    shouldShow: function shouldShow() {
	      var _this = this;

	      var show = this.show,
	          hasAnimation = this.hasAnimation;

	      hasAnimation && setTimeout(function () {
	        _this.appearMask(show);
	      }, 50);
	      return show;
	    }
	  },
	  methods: {
	    closeIconClicked: function closeIconClicked() {
	      this.appearMask(false);
	    },
	    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
	      if (this.hasAnimation) {
	        this.appearMask(false);
	        this.$emit('wxcOverlayBodyClicking', {});
	      }
	    },
	    wxcOverlayBodyClicked: function wxcOverlayBodyClicked() {
	      if (!this.hasAnimation) {
	        this.appearMask(false);
	        this.$emit('wxcOverlayBodyClicked', {});
	      }
	    },
	    needEmit: function needEmit() {
	      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      !bool && this.$emit('wxcMaskSetHidden', {});
	    },
	    appearMask: function appearMask(bool) {
	      var _this2 = this;

	      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
	      var hasAnimation = this.hasAnimation,
	          timingFunction = this.timingFunction;

	      var maskEl = this.$refs['wxc-mask'];
	      if (hasAnimation && maskEl) {
	        animation.transition(maskEl, {
	          styles: {
	            opacity: bool ? 1 : 0
	          },
	          duration: duration,
	          timingFunction: timingFunction[bool ? 0 : 1],
	          delay: 0
	        }, function () {
	          _this2.needEmit(bool);
	        });
	      } else {
	        this.needEmit(bool);
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 158 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"]
	  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
	    attrs: {
	      "show": _vm.show && _vm.hasOverlay
	    },
	    on: {
	      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking,
	      "wxcOverlayBodyClicked": _vm.wxcOverlayBodyClicked
	    }
	  }, 'wxc-overlay', _vm.mergeOverlayCfg, false)) : _vm._e(), (_vm.show) ? _c('div', {
	    ref: "wxc-mask",
	    staticClass: ["wxc-mask"],
	    style: _vm.maskStyle,
	    attrs: {
	      "hack": _vm.shouldShow
	    }
	  }, [_c('div', {
	    style: _vm.contentStyle
	  }, [_vm._t("default")], 2), (_vm.showClose) ? _c('div', {
	    staticClass: ["mask-bottom"],
	    style: {
	      width: _vm.width + 'px'
	    },
	    on: {
	      "click": _vm.closeIconClicked
	    }
	  }, [_c('image', {
	    staticClass: ["mask-close-icon"],
	    attrs: {
	      "src": _vm.closeIcon,
	      "ariaLabel": "关闭"
	    }
	  })]) : _vm._e()]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 159 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('wxc-mask', {
	    attrs: {
	      "width": _vm.width,
	      "height": _vm.height,
	      "ariaHidden": "true",
	      "maskBgColor": "transparent",
	      "overlayOpacity": "0.8",
	      "show": _vm.show,
	      "showClose": false
	    },
	    on: {
	      "wxcMaskSetHidden": _vm.maskOverlayClick
	    }
	  }, [(_vm.show) ? _c('slider', {
	    style: {
	      height: _vm.height + 'px'
	    },
	    attrs: {
	      "autoPlay": "false"
	    }
	  }, [_vm._l((_vm.imageList), function(v, index) {
	    return _c('div', {
	      key: index,
	      style: {
	        height: _vm.height + 'px'
	      }
	    }, [_c('image', {
	      style: {
	        height: _vm.height + 'px',
	        width: _vm.width + 'px'
	      },
	      attrs: {
	        "resize": "cover",
	        "src": v.src
	      }
	    })])
	  }), _c('indicator', {
	    staticClass: ["indicator"],
	    style: _vm.indicatorStyle
	  })], 2) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(161);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(162)
	)

	/* script */
	__vue_exports__ = __webpack_require__(163)

	/* template */
	var __vue_template__ = __webpack_require__(165)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-loading/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3fe27720"
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


/***/ }),
/* 162 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-loading": {
	    "position": "fixed",
	    "left": 287,
	    "top": 500,
	    "zIndex": 9999
	  },
	  "loading-box": {
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": 20,
	    "width": 175,
	    "height": 175,
	    "backgroundColor": "rgba(0,0,0,0.8)"
	  },
	  "trip-loading": {
	    "backgroundColor": "rgba(0,0,0,0.2)"
	  },
	  "loading-trip-image": {
	    "height": 75,
	    "width": 75
	  },
	  "loading-text": {
	    "color": "#ffffff",
	    "fontSize": 24,
	    "lineHeight": 30,
	    "height": 30,
	    "marginTop": 8,
	    "textOverflow": "ellipsis",
	    "width": 140,
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _type = __webpack_require__(164);

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    loadingText: {
	      type: String,
	      default: ''
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    interval: {
	      type: [Number, String],
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      showLoading: false,
	      tid: 0
	    };
	  },
	  computed: {
	    showText: function showText() {
	      return this.loadingText;
	    },
	    loading: function loading() {
	      var loading = {};
	      switch (this.type) {
	        case 'trip':
	          loading = {
	            url: _type.GIF,
	            class: 'trip-loading'
	          };
	          break;
	        default:
	          loading = {
	            url: _type.BLACK_GIF,
	            class: 'default-loading'
	          };
	      }
	      return loading;
	    },
	    topPosition: function topPosition() {
	      return (_utils2.default.env.getPageHeight() - 200) / 2;
	    },
	    needShow: function needShow() {
	      this.setShow();
	      return this.show;
	    }
	  },
	  methods: {
	    setShow: function setShow() {
	      var _this = this;

	      var interval = this.interval,
	          show = this.show,
	          showLoading = this.showLoading;

	      var stInterval = parseInt(interval);
	      clearTimeout(this.tid);
	      if (show) {
	        if (showLoading) {
	          return;
	        }
	        if (stInterval === 0) {
	          this.showLoading = true;
	        } else {
	          this.tid = setTimeout(function () {
	            _this.showLoading = true;
	          }, stInterval);
	        }
	      } else {
	        this.showLoading = false;
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 164 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by Tw93 on 2016/10/29.
	 */

	var GIF = exports.GIF = 'https://img.alicdn.com/tfs/TB1aks3PpXXXXcXXFXXXXXXXXXX-150-150.gif';
	var BLACK_GIF = exports.BLACK_GIF = 'https://img.alicdn.com/tfs/TB1Ep_9NVXXXXb8XVXXXXXXXXXX-74-74.gif';
	var PNG = exports.PNG = 'https://gw.alicdn.com/tfs/TB1HwGTpwoQMeJjy0FpXXcTxpXa-75-75.png';
	var PART = exports.PART = 'https://gtms02.alicdn.com/tfs/TB1y4QbSXXXXXbgapXXXXXXXXXX-50-50.gif';

/***/ }),
/* 165 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "hackShow": _vm.needShow
	    }
	  }, [(_vm.showLoading) ? _c('div', {
	    staticClass: ["wxc-loading"],
	    style: {
	      top: _vm.topPosition + 'px'
	    }
	  }, [_c('div', {
	    class: ['loading-box', _vm.loading.class],
	    attrs: {
	      "ariaHidden": true
	    }
	  }, [_c('image', {
	    staticClass: ["loading-trip-image"],
	    attrs: {
	      "src": _vm.loading.url,
	      "resize": "contain",
	      "quality": "original"
	    }
	  }), (_vm.loadingText) ? _c('text', {
	    staticClass: ["loading-text"]
	  }, [_vm._v(_vm._s(_vm.loadingText))]) : _vm._e()])]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(167);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(168)

	/* template */
	var __vue_template__ = __webpack_require__(169)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-part-loading/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _type = __webpack_require__(164);

	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    width: {
	      type: [Number, String],
	      default: 36
	    },
	    height: {
	      type: [Number, String],
	      default: 36
	    }
	  },
	  data: function data() {
	    return {
	      PART: _type.PART
	    };
	  },
	  computed: {
	    loadingStyle: function loadingStyle() {
	      var height = this.height,
	          width = this.width;

	      return {
	        height: height + 'px',
	        width: width + 'px'
	      };
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.show) ? _c('image', {
	    style: _vm.loadingStyle,
	    attrs: {
	      "src": _vm.PART,
	      "resize": "contain",
	      "quality": "original"
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(171);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(172)
	)

	/* script */
	__vue_exports__ = __webpack_require__(173)

	/* template */
	var __vue_template__ = __webpack_require__(174)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-minibar/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5cffdf90"
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


/***/ }),
/* 172 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-minibar": {
	    "width": 750,
	    "height": 90,
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "backgroundColor": "#009ff0"
	  },
	  "left": {
	    "width": 90
	  },
	  "middle-title": {
	    "fontSize": 30,
	    "color": "#ffffff",
	    "height": 36,
	    "lineHeight": 34
	  },
	  "right": {
	    "width": 80
	  },
	  "left-button": {
	    "width": 21,
	    "height": 36,
	    "marginLeft": 40
	  },
	  "right-button": {
	    "width": 32,
	    "height": 32,
	    "marginRight": 16
	  },
	  "right-text": {
	    "width": 80,
	    "marginRight": 20,
	    "fontSize": 28,
	    "textAlign": "left",
	    "color": "#ffffff"
	  }
	}

/***/ }),
/* 173 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var Navigator = weex.requireModule('navigator');
	exports.default = {
	  props: {
	    backgroundColor: {
	      type: String,
	      default: '#FFC900'
	    },
	    leftButton: {
	      type: String,
	      default: 'https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png'
	    },
	    textColor: {
	      type: String,
	      default: '#3D3D3D'
	    },
	    rightButton: {
	      type: String,
	      default: ''
	    },
	    title: {
	      type: String,
	      default: '标题'
	    },
	    rightText: {
	      type: String,
	      default: ''
	    },
	    useDefaultReturn: {
	      type: Boolean,
	      default: true
	    },
	    show: {
	      type: Boolean,
	      default: true
	    }
	  },
	  methods: {
	    leftButtonClicked: function leftButtonClicked() {
	      var self = this;
	      if (self.useDefaultReturn) {
	        Navigator.pop({}, function (e) {});
	      }
	      self.$emit('wxcMinibarLeftButtonClicked', {});
	    },
	    rightButtonClicked: function rightButtonClicked() {
	      var self = this;
	      if (self.rightText || self.rightButton) {
	        self.$emit('wxcMinibarRightButtonClicked', {});
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 174 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.show) ? _c('div', {
	    staticClass: ["wxc-minibar"],
	    style: {
	      backgroundColor: _vm.backgroundColor
	    }
	  }, [_c('div', {
	    staticClass: ["left"],
	    attrs: {
	      "ariaLabel": "返回",
	      "accessible": true
	    },
	    on: {
	      "click": _vm.leftButtonClicked
	    }
	  }, [_c('image', {
	    staticClass: ["left-button"],
	    attrs: {
	      "src": _vm.leftButton
	    }
	  })]), _c('text', {
	    staticClass: ["middle-title"],
	    style: {
	      color: _vm.textColor
	    }
	  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
	    staticClass: ["right"],
	    on: {
	      "click": _vm.rightButtonClicked
	    }
	  }, [(_vm.rightText) ? _c('text', {
	    staticClass: ["right-text"],
	    style: {
	      color: _vm.textColor
	    }
	  }, [_vm._v(_vm._s(_vm.rightText))]) : _vm._e(), (_vm.rightButton) ? _c('image', {
	    staticClass: ["right-button"],
	    attrs: {
	      "src": _vm.rightButton,
	      "ariaHidden": true
	    }
	  }) : _vm._e()])]) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(176);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(177)
	)

	/* script */
	__vue_exports__ = __webpack_require__(178)

	/* template */
	var __vue_template__ = __webpack_require__(186)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-lottery-rain/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-dfcf958c"
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


/***/ }),
/* 177 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-lottery-rain": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "backgroundColor": "rgba(133,11,11,0.8)"
	  }
	}

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rainItem = __webpack_require__(179);

	var _rainItem2 = _interopRequireDefault(_rainItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: { RainItem: _rainItem2.default },
	  props: {
	    picList: Array,
	    config: Object,
	    wrapStyle: Object
	  },
	  methods: {
	    wxcLotteryRainCaught: function wxcLotteryRainCaught(e) {
	      this.$emit('wxcLotteryRainCaught', { rainId: e.rainId });
	    },
	    destroy: function destroy() {
	      var picList = this.picList;

	      var length = picList.length;
	      for (var i = 0; i < length; i++) {
	        this.$refs['rain-item-' + i][0].destroy();
	      }
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(180)
	)

	/* script */
	__vue_exports__ = __webpack_require__(181)

	/* template */
	var __vue_template__ = __webpack_require__(185)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-lottery-rain/rain-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2c0f9514"
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


/***/ }),
/* 180 */
/***/ (function(module, exports) {

	module.exports = {
	  "rain-item": {
	    "position": "absolute",
	    "opacity": 0
	  }
	}

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(91);

	var _extends3 = _interopRequireDefault(_extends2);

	var _animate = __webpack_require__(182);

	var Ani = _interopRequireWildcard(_animate);

	var _config = __webpack_require__(183);

	var CFG = _interopRequireWildcard(_config);

	var _region = __webpack_require__(184);

	var _region2 = _interopRequireDefault(_region);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {
	    src: String,
	    rainId: [String, Number],
	    config: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  computed: {
	    // 合并用户配置和默认
	    cfg: function cfg() {
	      return (0, _extends3.default)({}, CFG.DEFAULT, this.config);
	    }
	  },
	  data: function data() {
	    return {
	      showItem: false,
	      hiding: false,
	      pos: {},
	      showTimer: null,
	      hideTimer: null,
	      intervalTimer: null
	    };
	  },
	  created: function created() {
	    var _cfg = this.cfg,
	        width = _cfg.width,
	        height = _cfg.height;

	    this.pos = _region2.default.get(width, height);
	  },
	  mounted: function mounted() {
	    this.start();
	  },

	  methods: {
	    start: function start() {
	      var _this = this;

	      var cfg = this.cfg;

	      var random = Math.round(Math.random() * cfg.randomTime);
	      var showTime = cfg.showTime + random;
	      var intervalTime = Math.max(cfg.intervalTime, cfg.showAniTime + showTime + cfg.hideAniTime) + random;

	      this.onShow = function () {
	        _this.hideTimer = setTimeout(function () {
	          _this.hide();
	        }, showTime);
	      };

	      this.onHide = function () {
	        _region2.default.remove(_this.pos);
	        _this.pos = {};
	        _this.showItem = false;
	        _this.hiding = false;
	        var _cfg2 = _this.cfg,
	            width = _cfg2.width,
	            height = _cfg2.height;

	        _this.pos = _region2.default.get(width, height);
	      };

	      this.showTimer = setTimeout(function () {
	        _this.show();
	      }, random);

	      this.intervalTimer = setInterval(function () {
	        _this.show();
	      }, intervalTime);
	    },
	    hide: function hide() {
	      var cfg = this.cfg,
	          rainId = this.rainId;

	      this.hiding = true;
	      clearTimeout(this.showTimer);
	      clearTimeout(this.hideTimer);
	      Ani.hidePig(this.$refs['rain-item-' + rainId], cfg.hideAniTime, this.onHide);
	    },
	    show: function show() {
	      var cfg = this.cfg,
	          rainId = this.rainId;

	      this.showItem = true;
	      Ani.showPig(this.$refs['rain-item-' + rainId], cfg.showAniTime, this.onShow);
	    },
	    caught: function caught() {
	      var _this2 = this;

	      var rainId = this.rainId,
	          hiding = this.hiding;

	      if (hiding) return;
	      clearTimeout(this.showTimer);
	      clearTimeout(this.hideTimer);
	      Ani.shakePig(this.$refs['rain-item-' + rainId], function () {
	        _this2.hide();
	      });
	      this.$emit('wxcLotteryRainCaught', { rainId: rainId });
	    },
	    destroy: function destroy() {
	      _region2.default.remove(this.pos);
	      clearTimeout(this.showTimer);
	      clearTimeout(this.hideTimer);
	      clearInterval(this.intervalTimer);
	      this.showItem = false;
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.showPig = showPig;
	exports.hidePig = hidePig;
	exports.shakePig = shakePig;

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
	 * Created by Tw93 on 2017/09/06.
	 * 红包雨动画类
	 */

	var animation = weex.requireModule('animation');


	var isIos = _utils2.default.env.isIOS();

	function showPig(ref, duration, callback) {
	  ref && animation.transition(ref, {
	    styles: {
	      transform: 'translate(0, -140px)',
	      opacity: 1
	    },
	    duration: duration,
	    timingFunction: 'ease-in'
	  }, function () {
	    callback && callback();
	  });
	}

	function hidePig(ref, duration, callback) {
	  ref && animation.transition(ref, {
	    styles: {
	      transform: 'translate(0, 0)',
	      opacity: 0
	    },
	    duration: duration,
	    timingFunction: 'ease-out'
	  }, function () {
	    callback && callback();
	  });
	}

	function shakePig(ref, callback) {
	  var duration = isIos ? 20 : 10;
	  ref && animation.transition(ref, {
	    styles: {
	      transform: 'rotate(12deg) translate(0, -140px)'
	    },
	    duration: duration,
	    timingFunction: 'ease-in'
	  }, function () {
	    animation.transition(ref, {
	      styles: {
	        transform: 'rotate(0) translate(0, -140px)'
	      },
	      duration: duration,
	      timingFunction: 'ease-out'
	    }, function () {
	      animation.transition(ref, {
	        styles: {
	          transform: 'rotate(-12deg) translate(0, -140px)'
	        },
	        duration: duration,
	        timingFunction: 'ease-in'
	      }, function () {
	        animation.transition(ref, {
	          styles: {
	            transform: 'rotate(0) translate(0, -140px)'
	          },
	          duration: duration,
	          timingFunction: 'ease-out'
	        }, function () {
	          callback && callback();
	        });
	      });
	    });
	  });
	}

/***/ }),
/* 183 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DEFAULT = exports.DEFAULT = {
	  intervalTime: 400,
	  hideAniTime: 300,
	  showAniTime: 300,
	  showTime: 400,
	  randomTime: 300,
	  width: 241,
	  height: 206
	};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Region = {
	  regions: [],
	  isCross: function isCross(region) {
	    var regions = this.regions;


	    region.right = region.left + region.width;
	    region.bottom = region.top + region.height;

	    for (var i = 0; i < regions.length; i++) {
	      var curRegion = regions[i];
	      // 两区域相交
	      curRegion.right = curRegion.left + curRegion.width;
	      curRegion.bottom = curRegion.top + curRegion.height;
	      if (!(region.left > curRegion.right || region.right < curRegion.left || region.bottom < curRegion.top || region.top > curRegion.bottom)) {
	        return true;
	      }
	    }
	    return false;
	  },
	  get: function get(width, height) {
	    if (!width || !height) {
	      return;
	    }
	    var i = 1000;
	    var viewWidth = 750;
	    var viewHeight = _utils2.default.env.getPageHeight();
	    var wrapWidth = viewWidth - width;
	    var wrapHeight = viewHeight - height - 140;
	    wrapHeight = wrapHeight < 0 ? 0 : wrapHeight;
	    wrapWidth = wrapWidth < 0 ? 0 : wrapWidth;

	    var region = {
	      left: -9999,
	      top: -9999,
	      width: width,
	      height: height
	    };
	    while (i--) {
	      region.left = Math.round(Math.random() * wrapWidth);
	      region.top = Math.round(Math.random() * wrapHeight + height);
	      if (!this.isCross(region)) {
	        this.add(region);
	        return region;
	      }
	    }
	  },
	  buildRandom: function buildRandom() {
	    return new Date().getTime() + '_' + parseInt(Math.random() * 1000000);
	  },
	  add: function add(region) {
	    var regions = this.regions;

	    region.id = this.buildRandom();
	    regions.push(region);
	  },
	  remove: function remove(region) {
	    var regions = this.regions;

	    if (!region) return;
	    for (var i = 0; i < regions.length; i++) {
	      if (region.id === regions[i].id) {
	        regions.splice(i, 1);
	      }
	    }
	  }
	}; /**
	    * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
	    * Created by Tw93 on 2017/09/06.
	    * 红包雨区域检测类
	    */

	exports.default = Region;
	module.exports = exports['default'];

/***/ }),
/* 185 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.showItem && _vm.src) ? _c('image', {
	    ref: ("rain-item-" + _vm.rainId),
	    staticClass: ["rain-item"],
	    style: _vm.pos,
	    attrs: {
	      "src": _vm.src
	    },
	    on: {
	      "click": _vm.caught
	    }
	  }) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 186 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-lottery-rain"],
	    style: _vm.wrapStyle
	  }, _vm._l((_vm.picList), function(src, i) {
	    return _c('rain-item', {
	      key: "i",
	      ref: ("rain-item-" + i),
	      refInFor: true,
	      attrs: {
	        "src": src,
	        "rainId": i
	      },
	      on: {
	        "wxcLotteryRainCaught": _vm.wxcLotteryRainCaught
	      }
	    })
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(188);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(189)
	)

	/* script */
	__vue_exports__ = __webpack_require__(190)

	/* template */
	var __vue_template__ = __webpack_require__(192)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-noticebar/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6d043722"
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


/***/ }),
/* 189 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-noticebar": {
	    "width": 750,
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "paddingLeft": 24,
	    "backgroundColor": "#FFF7D6",
	    "borderBottomWidth": 1,
	    "borderTopWidth": 1,
	    "borderColor": "#FFEEAE",
	    "borderStyle": "solid",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "noticebar-content": {
	    "color": "#EE9900",
	    "fontSize": 26,
	    "lineHeight": 36,
	    "width": 592,
	    "textOverflow": "ellipsis"
	  },
	  "more-click-content": {
	    "width": 64,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "mode-ICON": {
	    "width": 32,
	    "height": 32
	  },
	  "type-ICON": {
	    "width": 32,
	    "height": 32
	  }
	}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _type = __webpack_require__(191);

	var _type2 = _interopRequireDefault(_type);

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    notice: {
	      type: String,
	      default: ''
	    },
	    noticeUrl: {
	      type: String,
	      default: ''
	    },
	    mode: {
	      type: String,
	      default: ''
	    },
	    lines: {
	      type: [Number, String],
	      default: 1
	    },
	    type: {
	      type: String,
	      default: ''
	    },
	    spm: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    contentWidth: function contentWidth() {
	      return this.mode ? 605 : 683;
	    },
	    modeIcon: function modeIcon() {
	      var modeIcon = void 0;
	      switch (this.mode) {
	        case 'link':
	          modeIcon = _type2.default.linkIcon;
	          break;
	        case 'closable':
	          modeIcon = _type2.default.closeIcon;
	          break;
	        default:
	          modeIcon = '';
	      }
	      return modeIcon;
	    },
	    typeIcon: function typeIcon() {
	      var typeIcon = void 0;
	      switch (this.type) {
	        case 'success':
	          typeIcon = _type2.default.successIcon;
	          break;
	        case 'error':
	          typeIcon = _type2.default.errorIcon;
	          break;
	        case 'info':
	          typeIcon = _type2.default.infoIcon;
	          break;
	        case 'question':
	          typeIcon = _type2.default.questionIcon;
	          break;
	        case 'warn':
	          typeIcon = _type2.default.warnIcon;
	          break;
	        case 'time':
	          typeIcon = _type2.default.timeIcon;
	          break;
	        case 'redbag':
	          typeIcon = _type2.default.redbag;
	          break;
	        default:
	          typeIcon = '';
	      }
	      return typeIcon;
	    }
	  },
	  data: function data() {
	    return {
	      show: true
	    };
	  },
	  methods: {
	    noticeBarClicked: function noticeBarClicked() {
	      var mode = this.mode,
	          noticeUrl = this.noticeUrl,
	          spm = this.spm;

	      if (mode === 'link' && noticeUrl) {
	        var ttid = weex.config.env.ttid;

	        _utils2.default.goToH5Page(noticeUrl, spm, ttid, true);
	        this.$emit('wxcNoticebarLinkClicked', { url: noticeUrl });
	      }
	    },
	    noticeIconClicked: function noticeIconClicked() {
	      var mode = this.mode;

	      if (mode === 'closable') {
	        this.show = false;
	        this.$emit('wxcNoticebarCloseClicked', {});
	      } else {
	        this.noticeBarClicked();
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 191 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by Tw93 on 2016/10/29.
	 */

	exports.default = {
	  closeIcon: 'https://gw.alicdn.com/tfs/TB1THvhpwMPMeJjy1XcXXXpppXa-32-32.png',
	  linkIcon: 'https://gw.alicdn.com/tfs/TB1utlZpwMPMeJjy1XdXXasrXXa-32-32.png',
	  infoIcon: 'https://gw.alicdn.com/tfs/TB1xdlZpwMPMeJjy1XdXXasrXXa-32-32.png',
	  warnIcon: 'https://gw.alicdn.com/tfs/TB1TCvhpwMPMeJjy1XcXXXpppXa-32-32.png',
	  successIcon: 'https://gw.alicdn.com/tfs/TB12Em8pwMPMeJjy1XbXXcwxVXa-32-32.png',
	  errorIcon: 'https://gw.alicdn.com/tfs/TB1UCvhpwMPMeJjy1XcXXXpppXa-32-32.png',
	  questionIcon: 'https://gw.alicdn.com/tfs/TB1vJlZpwMPMeJjy1XdXXasrXXa-32-32.png',
	  timeIcon: 'https://gw.alicdn.com/tfs/TB1eSzhpwMPMeJjy1XcXXXpppXa-30-30.png',
	  redbag: 'https://gw.alicdn.com/tfs/TB1dCzhpwMPMeJjy1XcXXXpppXa-32-32.png'
	};
	module.exports = exports['default'];

/***/ }),
/* 192 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.show) ? _c('div', {
	    staticClass: ["wxc-noticebar"],
	    attrs: {
	      "accessible": true,
	      "ariaLabel": _vm.notice
	    },
	    on: {
	      "click": _vm.noticeBarClicked
	    }
	  }, [(_vm.typeIcon) ? _c('image', {
	    staticClass: ["type-ICON"],
	    attrs: {
	      "src": _vm.typeIcon
	    }
	  }) : _vm._e(), _c('text', {
	    staticClass: ["noticebar-content"],
	    style: {
	      width: _vm.contentWidth + 'px',
	      lines: _vm.lines
	    }
	  }, [_vm._v(_vm._s(_vm.notice))]), (_vm.modeIcon) ? _c('div', {
	    staticClass: ["more-click-content"],
	    attrs: {
	      "mode": _vm.mode
	    },
	    on: {
	      "click": _vm.noticeIconClicked
	    }
	  }, [_c('image', {
	    staticClass: ["mode-ICON"],
	    attrs: {
	      "src": _vm.modeIcon
	    }
	  })]) : _vm._e()]) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(194);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(195)
	)

	/* script */
	__vue_exports__ = __webpack_require__(196)

	/* template */
	var __vue_template__ = __webpack_require__(208)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-page-calendar/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-63bacda0"
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


/***/ }),
/* 195 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-page-calendar": {
	    "position": "fixed",
	    "top": 0,
	    "bottom": 0,
	    "right": -750,
	    "width": 750,
	    "color": "#333333",
	    "backgroundColor": "#ffffff"
	  },
	  "flex-item": {
	    "flex": 1,
	    "textAlign": "center"
	  },
	  "calendar-weekday": {
	    "height": 60,
	    "backgroundColor": "#ffffff",
	    "borderBottomWidth": 1,
	    "borderTopWidth": 1,
	    "borderColor": "#e2e2e2",
	    "flexDirection": "row",
	    "justifyContent": "space-around",
	    "alignItems": "center"
	  },
	  "weekday-text": {
	    "color": "#000000",
	    "flex": 1,
	    "fontSize": 24,
	    "textAlign": "center"
	  },
	  "calendar-list": {
	    "flex": 1,
	    "flexDirection": "column"
	  },
	  "month-text": {
	    "fontSize": 32,
	    "height": 60,
	    "lineHeight": 60,
	    "width": 750,
	    "textAlign": "center",
	    "alignItems": "center",
	    "backgroundColor": "#f2f3f4"
	  },
	  "calendar-row": {
	    "height": 140,
	    "flexDirection": "row",
	    "backgroundColor": "#ffffff",
	    "borderBottomWidth": 1,
	    "borderColor": "#f2f3f4",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "position": "relative"
	  },
	  "row-item": {
	    "flex": 1,
	    "height": 140,
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "iphone-x": {
	    "height": 68
	  },
	  "calendar-note": {
	    "height": 36,
	    "lineHeight": 36,
	    "fontSize": 24,
	    "color": "#000000",
	    "textAlign": "center"
	  },
	  "calendar-day": {
	    "height": 48,
	    "lineHeight": 48,
	    "fontSize": 36,
	    "color": "#000000",
	    "textAlign": "center"
	  },
	  "calendar-ext": {
	    "height": 36,
	    "lineHeight": 36,
	    "color": "#999999",
	    "textAlign": "center",
	    "fontSize": 24,
	    "overflow": "hidden",
	    "textOverflow": "ellipsis"
	  },
	  "calendar-holiday": {
	    "color": "#FF5000"
	  },
	  "calendar-rest": {
	    "color": "#FF5000"
	  },
	  "item-row-selected": {
	    "color": "#ffffff",
	    "backgroundColor": "#FFC900",
	    "textAlign": "center"
	  },
	  "item-text-selected": {
	    "color": "#3d3d3d",
	    "textAlign": "center"
	  },
	  "calendar-disabled": {
	    "color": "#CCCCCC"
	  },
	  "cell-disabled": {
	    "backgroundColor": "#FBFBFB"
	  },
	  "calendar-day-include": {
	    "backgroundColor": "#FFF7D6"
	  }
	}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _format = __webpack_require__(197);

	var Format = _interopRequireWildcard(_format);

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	var _wxcMinibar = __webpack_require__(170);

	var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var isWeb = _utils2.default.env.isWeb();

	var animation = weex.requireModule('animation');
	var dom = weex.requireModule('dom');

	exports.default = {
	  components: { WxcMinibar: _wxcMinibar2.default },
	  props: {
	    selectedDate: Array,
	    dateRange: {
	      type: Array,
	      required: true,
	      default: function _default() {
	        return [];
	      }
	    },
	    minibarCfg: {
	      type: Object,
	      default: function _default() {
	        return {
	          'title': '选择日期',
	          'background-color': '#FFC900',
	          'text-color': '#3D3D3D'
	        };
	      }
	    },
	    showHeader: {
	      type: Boolean,
	      default: false
	    },
	    selectedNote: {
	      type: Array,
	      default: function _default() {
	        return ['开始', '到达', '往返'];
	      }
	    },
	    isRange: {
	      type: Boolean,
	      default: false
	    },
	    needDestroy: {
	      type: Boolean,
	      default: false
	    },
	    descList: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    }
	  },
	  data: function data() {
	    return {
	      isShow: false,
	      reSelect: true,
	      today: Format.getToDay(),
	      departDate: '',
	      arriveDate: ''
	    };
	  },
	  computed: {
	    monthsArray: function monthsArray() {
	      var range = this.dateRange,
	          today = this.today,
	          departDate = this.departDate,
	          arriveDate = this.arriveDate,
	          selectedNote = this.selectedNote,
	          descList = this.descList;

	      var param = { range: range, today: today, departDate: departDate, arriveDate: arriveDate, selectedNote: selectedNote, descList: descList };
	      return Format.generateDateCell(param);
	    }
	  },
	  created: function created() {
	    this.isIPhoneX = _utils2.default.env.isIPhoneX();
	    this.showTitle = isWeb || this.showHeader;
	    this.detectShow();
	  },
	  mounted: function mounted() {
	    var _this = this;

	    var needDestroy = this.needDestroy;

	    var hold = isWeb ? 700 : 100;
	    !needDestroy && setTimeout(function () {
	      _this.isShow = true;
	      _this.scrollToDate();
	    }, hold);
	  },

	  watch: {
	    needDestroy: function needDestroy(newVal, preVal) {
	      var _this2 = this;

	      if (!newVal && newVal !== preVal) {
	        setTimeout(function () {
	          _this2.isShow = true;
	        }, 200);
	      }
	    }
	  },
	  methods: {
	    minibarLeftButtonClick: function minibarLeftButtonClick() {
	      var _this3 = this;

	      setTimeout(function () {
	        _this3.hide();
	        _this3.$emit('wxcPageCalendarBackClicked', {});
	      }, 100);
	    },
	    onClickDate: function onClickDate(datConfig) {
	      var self = this;
	      if (datConfig.disabled || datConfig.isEmpty) return;

	      if (self.reSelect) {
	        self.departDate = '';
	        self.arriveDate = '';
	        self.reSelect = false;
	      }

	      if (self.isRange) {
	        if (self.departDate && Date.parse(self.departDate) <= Date.parse(datConfig.date)) {
	          self.arriveDate = datConfig.date;
	        } else {
	          self.departDate = datConfig.date;
	        }
	        if (self.departDate && self.arriveDate) {
	          self.dispatchDateChange([self.departDate, self.arriveDate]);
	        }
	      } else {
	        self.departDate = datConfig.date;
	        self.dispatchDateChange([self.departDate]);
	      }
	    },
	    scrollToDate: function scrollToDate() {
	      var _this4 = this;

	      setTimeout(function () {
	        if (_this4.departDate) {
	          var el = _this4.$refs.departDate[0];
	          el && dom.getComponentRect && dom.getComponentRect(el, function (e) {
	            if (e && e.result) {
	              var bottom = e.size.bottom;
	              var env = weex.config.env;
	              // 误差

	              var height = env.deviceHeight / env.deviceWidth * 750 - 50;
	              if (bottom > height || bottom === 0) {
	                dom.scrollToElement(el, { offset: -146, animated: false });
	              }
	            }
	          });
	        }
	      }, 10);
	    },
	    dispatchDateChange: function dispatchDateChange(dateArr) {
	      var _this5 = this;

	      var duration = isWeb ? 400 : 600;
	      setTimeout(function () {
	        _this5.hide();
	      }, duration);
	      this.$emit('wxcPageCalendarDateSelected', {
	        date: dateArr
	      });
	    },
	    detectShow: function detectShow() {
	      if (this.isRange && this.selectedDate.length >= 2) {
	        this.departDate = this.selectedDate[0];
	        this.arriveDate = this.selectedDate[1];
	      } else if (this.selectedDate.length >= 1) {
	        this.departDate = this.selectedDate[0];
	        this.arriveDate = '';
	      }
	    },
	    _animate: function _animate() {
	      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	      var duration = isWeb ? 200 : 300;
	      animation.transition(this.$refs.pageCalendar, {
	        styles: {
	          transform: 'translateX(' + -width + 'px)'
	        },
	        timingFunction: 'ease-out',
	        duration: duration
	      }, function () {});
	    },
	    show: function show() {
	      var needDestroy = this.needDestroy;

	      needDestroy && (this.isShow = true);
	      this.reSelect = true;
	      this.detectShow();
	      this._animate(750);
	      needDestroy && this.scrollToDate();
	    },
	    hide: function hide() {
	      this.needDestroy && (this.isShow = false);
	      this.reSelect = false;
	      this._animate(0);
	      this.$emit('wxcPageCalendarHide', {});
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GLOBAL_HOLIDAY = undefined;

	var _toConsumableArray2 = __webpack_require__(198);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _keys = __webpack_require__(46);

	var _keys2 = _interopRequireDefault(_keys);

	exports._getTraditionalHoliday = _getTraditionalHoliday;
	exports._isDate = _isDate;
	exports._checkHash = _checkHash;
	exports.getTime = getTime;
	exports._isInRange = _isInRange;
	exports._isInSelectRange = _isInSelectRange;
	exports._fixNum = _fixNum;
	exports._isWeekend = _isWeekend;
	exports._isToday = _isToday;
	exports._getMonthDays = _getMonthDays;
	exports._getPadding = _getPadding;
	exports._unique = _unique;
	exports.getToDay = getToDay;
	exports.getWeekRows = getWeekRows;
	exports.generateDateCell = generateDateCell;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
	 * Created by Tw93 on 2017/07/29.
	 */

	// 国际节日
	var GLOBAL_HOLIDAY = exports.GLOBAL_HOLIDAY = {
	  '01-01': '元旦',
	  '02-14': '情人',
	  '05-01': '劳动',
	  '06-01': '儿童',
	  '10-01': '国庆',
	  '12-25': '圣诞'
	};

	// 传统节日
	var TRADITIONAL_HOLIDAY = {
	  '除夕': ['2015-02-18', '2016-02-07', '2017-01-27', '2018-02-15', '2019-02-04', '2020-01-24'],
	  '春节': ['2015-02-19', '2016-02-08', '2017-01-28', '2018-02-16', '2019-02-05', '2020-01-25'],
	  '元宵': ['2015-03-05', '2016-02-22', '2017-02-11', '2018-03-02', '2019-02-19', '2020-02-08'],
	  '清明': ['2015-04-05', '2016-04-04', '2017-04-04', '2018-04-05', '2019-04-05', '2020-04-04'],
	  '端午': ['2015-06-20', '2016-06-09', '2017-05-30', '2018-06-18', '2019-06-07', '2020-06-25'],
	  '中秋': ['2015-09-27', '2016-09-15', '2017-10-04', '2018-09-24', '2019-09-13', '2020-10-01'],
	  '重阳': ['2015-10-21', '2016-10-09', '2017-10-28', '2018-10-17', '2019-10-07', '2020-10-25']
	};

	// 放假日
	var REST_DAYS = ['2017-10-01', '2017-10-02', '2017-10-03', '2017-10-04', '2017-10-05', '2017-10-06', '2017-10-07', '2017-10-08'];

	// 工作日
	var WORK_DAYS = ['2017-09-30'];

	function _getTraditionalHoliday() {
	  var HOLIDAY_TEMP = {};

	  var keys = (0, _keys2.default)(TRADITIONAL_HOLIDAY);
	  keys.forEach(function (k) {
	    var arr = TRADITIONAL_HOLIDAY[k];
	    arr.forEach(function (i) {
	      HOLIDAY_TEMP[i] = k;
	    });
	  });
	  return HOLIDAY_TEMP;
	}

	function _isDate(obj) {
	  var type = obj === null ? String(obj) : {}.toString.call(obj) || 'object';
	  return type === '[object date]';
	}

	/**
	 * 检测Hash
	 *
	 * @method _checkHash
	 * @private
	 */
	function _checkHash(url, hash) {
	  return url && url.match(/#/) && url.replace(/^.*#/, '') === hash;
	}

	/**
	 * 获取当前日期的毫秒数
	 * @method getTime
	 * @param {String} date
	 * @return {Number}
	 */
	function getTime(date) {
	  if (_isDate(date)) {
	    return new Date(date).getTime();
	  } else {
	    try {
	      return new Date(date.replace(/-/g, '/')).getTime();
	    } catch (e) {
	      return 0;
	    }
	  }
	}

	function _isInRange(range, date) {
	  var start = getTime(range[0]);
	  var end = getTime(range[1]);
	  var d = getTime(date);
	  return start <= d && end >= d;
	}

	function _isInSelectRange(range, date) {
	  var start = getTime(range[0]);
	  var end = getTime(range[1]);
	  var d = getTime(date);
	  return start < d && end > d;
	}

	function _fixNum(num) {
	  return (num < 10 ? '0' : '') + num;
	}

	/**
	 * 是否是周末
	 * @method isWeekend
	 * @param {String} date
	 * @return {Boolean}
	 */
	function _isWeekend(date) {
	  var day = new Date(date.replace(/-/g, '/')).getDay();
	  return day === 0 || day === 6;
	}

	/**
	 * 是否是今天
	 * @method isToday
	 * @param {String} date
	 * @return {Boolean}
	 */
	function _isToday(today, date) {
	  return getTime(today) === getTime(date);
	}

	/**
	 * 检查是否是闰年
	 * @method _checkLeapYear
	 * @param {Number} y 年份
	 * @param {Date} t today
	 * @protected
	 */
	function _getMonthDays(y, t) {
	  var MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	  var year = y || t.getFullYear();
	  var isLeapYear = false;

	  if (year % 100) {
	    isLeapYear = !(year % 4);
	  } else {
	    isLeapYear = !(year % 400);
	  }

	  if (isLeapYear) {
	    MONTH_DAYS[1] = 29;
	  } else {
	    MONTH_DAYS[1] = 28;
	  }
	  return MONTH_DAYS;
	}

	/**
	 * 当月1号前面有多少空格
	 * @method _getPadding
	 * @protected
	 */
	function _getPadding(year, month) {
	  var date = new Date(year + '/' + month + '/1');
	  return date.getDay();
	}

	function _unique(array) {
	  return Array.prototype.filter.call(array, function (item, index) {
	    return array.indexOf(item) === index;
	  });
	}

	function getToDay() {
	  return new Date().getFullYear() + '-' + _fixNum(new Date().getMonth() + 1) + '-' + _fixNum(new Date().getDate());
	}

	function getWeekRows(y, m, today, dateRange, departDate, arriveDate, selectedNote, descList) {
	  var monthDays = _getMonthDays(y, today);
	  var padding = _getPadding(y, m, 7);
	  var num = monthDays[m - 1] + padding;
	  var rows = Math.ceil(num / 7);
	  var remain = num % 7;
	  var rowsData = [];

	  for (var i = 1; i <= rows; i++) {
	    var cells = [];

	    for (var j = 1; j <= 7; j++) {
	      var cell = {};
	      // 前后空格
	      if (i === 1 && j <= padding || remain && i === rows && j > remain) {
	        cell.isEmpty = true;
	      } else {
	        (function () {
	          var d = (i - 1) * 7 + j - padding;
	          var date = y + '-' + _fixNum(m) + '-' + _fixNum(d);
	          var cls = [];
	          var ref = '';
	          var cellClass = [];
	          var isInRange = _isInRange(dateRange, date);
	          var disabled = false;
	          var global = _fixNum(m) + '-' + _fixNum(d);
	          var note = '';
	          var ext = '';

	          if (descList && descList.length > 0) {
	            var nowDesc = descList.filter(function (item) {
	              return item.date == date;
	            });
	            if (nowDesc && nowDesc.length > 0) {
	              ext = nowDesc[0].value;
	              if (nowDesc[0].emphasize) {
	                cls.push('calendar-holiday');
	              }
	            }
	          }

	          // 国际节日
	          if (GLOBAL_HOLIDAY[global]) {
	            note = GLOBAL_HOLIDAY[global];
	            cls.push('calendar-holiday');
	          }

	          var tHoliday = _getTraditionalHoliday()[date];

	          // 传统节日
	          if (tHoliday) {
	            note = tHoliday;
	            cls.push('calendar-holiday');
	          }
	          // 放假日
	          if (REST_DAYS.indexOf(date) > -1) {
	            cls.push('calendar-holiday');
	          }

	          // 工作日
	          if (WORK_DAYS.indexOf(date) > -1) {
	            cls.push('calendar-work');
	          }

	          // 周末
	          if (_isWeekend(date)) {
	            cls.push('calendar-holiday');
	          }

	          // 今天
	          if (_isToday(today, date)) {
	            cls.push('calendar-today');
	            note = '今天';
	          }

	          // 不在日期范围内
	          if (!isInRange) {
	            disabled = true;
	          }

	          if (disabled) {
	            cls = [];
	            cls.push('calendar-disabled');
	            cellClass.push('cell-disabled');
	          }

	          if (!ext && disabled && isInRange) {
	            ext = '不可选';
	          }

	          if (departDate === date || arriveDate === date) {
	            note = departDate === date ? selectedNote[0] : selectedNote[1];
	            ref = departDate === date ? 'departDate' : 'arriveDate';
	            if (departDate === arriveDate && selectedNote.length >= 3) {
	              note = selectedNote[2];
	            }
	            cls.push('item-text-selected');
	            cellClass.push('item-row-selected');
	          }

	          if (departDate && arriveDate && _isInSelectRange([departDate, arriveDate], date)) {
	            cellClass.push('calendar-day-include');
	          }

	          cell = {
	            isEmpty: false,
	            ref: ref,
	            cls: _unique(cls).join(' '),
	            cellClass: _unique(cellClass).join(' '),
	            note: note,
	            date: date,
	            ext: ext,
	            disabled: disabled,
	            text: d
	          };
	        })();
	      }
	      cells.push(cell);
	    }

	    rowsData.push(cells);
	  }

	  return rowsData;
	}

	function generateDateCell(_ref) {
	  var range = _ref.range,
	      today = _ref.today,
	      departDate = _ref.departDate,
	      arriveDate = _ref.arriveDate,
	      selectedNote = _ref.selectedNote,
	      descList = _ref.descList;

	  var start = new Date(range[0].replace(/-/g, '/'));
	  var end = new Date(range[1].replace(/-/g, '/'));
	  var startYear = start.getFullYear();
	  var startMonth = start.getMonth() + 1;
	  var endYear = end.getFullYear();
	  var endMonth = end.getMonth() + 1;

	  var l = (endYear - startYear) * 12 + endMonth - startMonth + 1;
	  var y = startYear;
	  var n = startMonth;
	  var months = [];

	  for (var i = 0; i < l; i++) {
	    if (n > 12) {
	      n = 1;
	      y++;
	    }
	    months.push.apply(months, [{ title: y + '-' + _fixNum(n) }].concat((0, _toConsumableArray3.default)(getWeekRows(y, n, today, range, departDate, arriveDate, selectedNote, descList))));
	    n++;
	  }
	  return months;
	}

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(199);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(200), __esModule: true };

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	__webpack_require__(201);
	module.exports = __webpack_require__(11).Array.from;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(12);
	var $export = __webpack_require__(9);
	var toObject = __webpack_require__(45);
	var call = __webpack_require__(202);
	var isArrayIter = __webpack_require__(203);
	var toLength = __webpack_require__(36);
	var createProperty = __webpack_require__(204);
	var getIterFn = __webpack_require__(205);

	$export($export.S + $export.F * !__webpack_require__(207)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(16);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(58);
	var ITERATOR = __webpack_require__(64)('iterator');
	var ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(15);
	var createDesc = __webpack_require__(23);

	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(206);
	var ITERATOR = __webpack_require__(64)('iterator');
	var Iterators = __webpack_require__(58);
	module.exports = __webpack_require__(11).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(33);
	var TAG = __webpack_require__(64)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(64)('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 208 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "pageCalendar",
	    staticClass: ["wxc-page-calendar"]
	  }, [_c('wxc-minibar', _vm._b({
	    attrs: {
	      "show": _vm.showTitle,
	      "useDefaultReturn": false
	    },
	    on: {
	      "wxcMinibarLeftButtonClicked": _vm.minibarLeftButtonClick
	    }
	  }, 'wxc-minibar', _vm.minibarCfg, false)), (_vm.isShow) ? _c('div', {
	    staticClass: ["calendar-weekday"]
	  }, _vm._l((['日', '一', '二', '三', '四', '五', '六']), function(week, k) {
	    return _c('text', {
	      key: k,
	      staticClass: ["flex-item", "weekday-text"],
	      attrs: {
	        "ariaLabel": ("周" + week)
	      }
	    }, [_vm._v(_vm._s(week))])
	  })) : _vm._e(), (_vm.isShow) ? _c('list', {
	    staticClass: ["calendar-list"]
	  }, [_vm._l((_vm.monthsArray), function(month, index) {
	    return _c('cell', {
	      key: index,
	      class: [!month.title && 'calendar-row'],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [(month.title) ? _c('text', {
	      staticClass: ["month-text"]
	    }, [_vm._v(_vm._s(month.title))]) : _vm._l((month), function(cell, rowIndex) {
	      return _c('div', {
	        key: (index + "-" + rowIndex),
	        ref: cell.ref,
	        refInFor: true,
	        class: ['row-item', cell.cellClass],
	        attrs: {
	          "accessible": true,
	          "ariaLabel": ((cell.text?cell.text:'') + "," + (cell.note?cell.note:'') + "," + (cell.ext?cell.ext:''))
	        },
	        on: {
	          "click": function($event) {
	            _vm.onClickDate(cell)
	          }
	        }
	      }, [_c('text', {
	        class: ['calendar-note', cell.cls]
	      }, [_vm._v(_vm._s(cell.note))]), _c('text', {
	        class: ['calendar-day', cell.cls]
	      }, [_vm._v(_vm._s(cell.text))]), _c('text', {
	        class: ['calendar-ext', cell.cls]
	      }, [_vm._v(_vm._s(cell.ext))])])
	    })], 2)
	  }), (_vm.isIPhoneX) ? _c('cell', {
	    staticClass: ["iphone-x"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }) : _vm._e()], 2) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(210);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(211)
	)

	/* script */
	__vue_exports__ = __webpack_require__(212)

	/* template */
	var __vue_template__ = __webpack_require__(213)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-popup/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5f9e8bc0"
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


/***/ }),
/* 211 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-popup": {
	    "position": "fixed",
	    "width": 750
	  },
	  "top": {
	    "left": 0,
	    "right": 0
	  },
	  "bottom": {
	    "left": 0,
	    "right": 0
	  },
	  "left": {
	    "bottom": 0,
	    "top": 0
	  },
	  "right": {
	    "bottom": 0,
	    "top": 0
	  }
	}

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(91);

	var _extends3 = _interopRequireDefault(_extends2);

	var _typeof2 = __webpack_require__(50);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _wxcOverlay = __webpack_require__(119);

	var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	var platform = weex.config.env.platform;

	var isWeb = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && platform.toLowerCase() === 'web';
	exports.default = {
	  components: { WxcOverlay: _wxcOverlay2.default },
	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    pos: {
	      type: String,
	      default: 'bottom'
	    },
	    popupColor: {
	      type: String,
	      default: '#FFFFFF'
	    },
	    overlayCfg: {
	      type: Object,
	      default: function _default() {
	        return {
	          hasAnimation: true,
	          timingFunction: ['ease-in', 'ease-out'],
	          duration: 300,
	          opacity: 0.6
	        };
	      }
	    },
	    height: {
	      type: [Number, String],
	      default: 840
	    },
	    standOut: {
	      type: [Number, String],
	      default: 0
	    },
	    width: {
	      type: [Number, String],
	      default: 750
	    },
	    animation: {
	      type: Object,
	      default: function _default() {
	        return {
	          timingFunction: 'ease-in'
	        };
	      }
	    }
	  },
	  data: function data() {
	    return {
	      haveOverlay: true,
	      isOverShow: true
	    };
	  },
	  computed: {
	    isNeedShow: function isNeedShow() {
	      var _this = this;

	      setTimeout(function () {
	        _this.appearPopup(_this.show);
	      }, 50);
	      return this.show;
	    },
	    _height: function _height() {
	      this.appearPopup(this.show, 150);
	      return this.height;
	    },
	    transformValue: function transformValue() {
	      return this.getTransform(this.pos, this.width, this.height, true);
	    },
	    padStyle: function padStyle() {
	      var pos = this.pos,
	          width = this.width,
	          height = this.height,
	          popupColor = this.popupColor;

	      var style = {
	        width: width + 'px',
	        backgroundColor: popupColor
	      };
	      pos === 'top' && (style = (0, _extends3.default)({}, style, {
	        top: -height + 'px',
	        height: height + 'px'
	      }));
	      pos === 'bottom' && (style = (0, _extends3.default)({}, style, {
	        bottom: -height + 'px',
	        height: height + 'px'
	      }));
	      pos === 'left' && (style = (0, _extends3.default)({}, style, {
	        left: -width + 'px'
	      }));
	      pos === 'right' && (style = (0, _extends3.default)({}, style, {
	        right: -width + 'px'
	      }));
	      return style;
	    }
	  },
	  methods: {
	    handleTouchEnd: function handleTouchEnd(e) {
	      // 在支付宝上面有点击穿透问题
	      var platform = weex.config.env.platform;

	      platform === 'Web' && e.preventDefault && e.preventDefault();
	    },
	    hide: function hide() {
	      this.appearPopup(false);
	      this.$refs.overlay.appearOverlay(false);
	    },
	    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
	      this.isShow && this.appearPopup(false);
	    },
	    appearPopup: function appearPopup(bool) {
	      var _this2 = this;

	      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

	      this.isShow = bool;
	      var popupEl = this.$refs['wxc-popup'];
	      if (!popupEl) {
	        return;
	      }
	      animation.transition(popupEl, (0, _extends3.default)({
	        styles: {
	          transform: this.getTransform(this.pos, this.width, this.height, !bool)
	        },
	        duration: duration,
	        delay: 0
	      }, this.animation), function () {
	        if (!bool) {
	          _this2.$emit('wxcPopupOverlayClicked', { pos: _this2.pos });
	        }
	      });
	    },
	    getTransform: function getTransform(pos, width, height, bool) {
	      var _size = pos === 'top' || pos === 'bottom' ? height : width;
	      var _transform = void 0;
	      if (isWeb) {
	        _size -= this.standOut;
	      }
	      bool && (_size = 0);
	      switch (pos) {
	        case 'top':
	          _transform = 'translateY(' + _size + 'px)';
	          break;
	        case 'bottom':
	          _transform = 'translateY(-' + _size + 'px)';
	          break;
	        case 'left':
	          _transform = 'translateX(' + _size + 'px)';
	          break;
	        case 'right':
	          _transform = 'translateX(-' + _size + 'px)';
	          break;
	      }
	      return _transform;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 213 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    on: {
	      "touchend": _vm.handleTouchEnd
	    }
	  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
	    ref: "overlay",
	    attrs: {
	      "show": _vm.haveOverlay && _vm.isOverShow
	    },
	    on: {
	      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking
	    }
	  }, 'wxc-overlay', _vm.overlayCfg, false)) : _vm._e()], 1), (_vm.show) ? _c('div', {
	    ref: "wxc-popup",
	    class: ['wxc-popup', _vm.pos],
	    style: _vm.padStyle,
	    attrs: {
	      "height": _vm._height,
	      "hack": _vm.isNeedShow
	    },
	    on: {
	      "click": function () {}
	    }
	  }, [_vm._t("default")], 2) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(215);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(216)
	)

	/* script */
	__vue_exports__ = __webpack_require__(217)

	/* template */
	var __vue_template__ = __webpack_require__(218)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-progress/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-ff5dbde2"
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


/***/ }),
/* 216 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-progress": {
	    "position": "relative",
	    "backgroundColor": "#f2f3f4"
	  },
	  "progress": {
	    "position": "absolute",
	    "backgroundColor": "#FFC900"
	  }
	}

/***/ }),
/* 217 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    barColor: {
	      type: String,
	      default: '#FFC900'
	    },
	    barWidth: {
	      type: Number,
	      default: 600
	    },
	    barHeight: {
	      type: Number,
	      default: 8
	    },
	    value: {
	      type: Number,
	      default: 0
	    }
	  },
	  computed: {
	    runWayStyle: function runWayStyle() {
	      var barWidth = this.barWidth,
	          barHeight = this.barHeight;

	      return {
	        width: barWidth + 'px',
	        height: barHeight + 'px'
	      };
	    },
	    progressStyle: function progressStyle() {
	      var value = this.value,
	          barWidth = this.barWidth,
	          barHeight = this.barHeight,
	          barColor = this.barColor;

	      var newValue = value < 0 ? 0 : value > 100 ? 100 : value;
	      return {
	        backgroundColor: barColor,
	        height: barHeight + 'px',
	        width: newValue / 100 * barWidth + 'px'
	      };
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 218 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-progress"],
	    style: _vm.runWayStyle,
	    attrs: {
	      "accessible": true,
	      "ariaLabel": ("进度为百分之" + _vm.value)
	    }
	  }, [_c('div', {
	    staticClass: ["progress"],
	    style: _vm.progressStyle
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(220);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(221)
	)

	/* script */
	__vue_exports__ = __webpack_require__(222)

	/* template */
	var __vue_template__ = __webpack_require__(228)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-radio/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0a69c6af"
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


/***/ }),
/* 221 */
/***/ (function(module, exports) {

	module.exports = {}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _item = __webpack_require__(223);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: { wxcRadio: _item2.default },
	  props: {
	    list: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    }
	  },
	  data: function data() {
	    return {
	      checkedIndex: -1
	    };
	  },
	  computed: {
	    updateList: function updateList() {
	      var checkedIndex = this.checkedIndex,
	          list = this.list;

	      var updateList = [];
	      list && list.forEach(function (item, i) {
	        item.checked = i === checkedIndex;
	        updateList.push(item);
	      });
	      return updateList;
	    }
	  },
	  created: function created() {
	    var _this = this;

	    var list = this.list;

	    if (list && list.length > 0) {
	      list.forEach(function (item, i) {
	        item.checked && (_this.checkedIndex = i);
	      });
	    }
	  },

	  methods: {
	    wxcRadioItemChecked: function wxcRadioItemChecked(i, e) {
	      var oldIndex = this.checkedIndex;
	      var _list$i = this.list[i],
	          value = _list$i.value,
	          title = _list$i.title;

	      this.checkedIndex = i;
	      this.$emit('wxcRadioListChecked', { value: value, title: title, oldIndex: oldIndex, index: i });
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(224)
	)

	/* script */
	__vue_exports__ = __webpack_require__(225)

	/* template */
	var __vue_template__ = __webpack_require__(227)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-radio/item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-362ca974"
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


/***/ }),
/* 224 */
/***/ (function(module, exports) {

	module.exports = {
	  "radio": {
	    "width": 48,
	    "height": 48
	  },
	  "title-text": {
	    "fontSize": 30
	  }
	}

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _wxcCell = __webpack_require__(94);

	var _wxcCell2 = _interopRequireDefault(_wxcCell);

	var _type = __webpack_require__(226);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  components: { WxcCell: _wxcCell2.default },
	  props: {
	    hasTopBorder: {
	      type: Boolean,
	      default: false
	    },
	    title: {
	      type: String,
	      require: true
	    },
	    value: {
	      type: [String, Number, Object],
	      require: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    checked: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      icon: [_type.CHECKED, _type.UNCHECKED]
	    };
	  },
	  computed: {
	    radioIcon: function radioIcon() {
	      var icon = this.icon,
	          disabled = this.disabled,
	          checked = this.checked;

	      return checked ? icon[disabled ? 1 : 0] : '';
	    },
	    backgroundColor: function backgroundColor() {
	      var disabled = this.disabled;

	      return disabled ? '#F2F3F4' : '#FFFFFF';
	    },
	    color: function color() {
	      var disabled = this.disabled,
	          checked = this.checked;

	      return checked && !disabled ? '#EE9900' : '#3D3D3D';
	    }
	  },
	  methods: {
	    wxcCellClicked: function wxcCellClicked() {
	      var disabled = this.disabled,
	          value = this.value;

	      if (!disabled) {
	        this.$emit('wxcRadioItemChecked', { value: value, disabled: disabled });
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 226 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CHECKED = exports.CHECKED = 'https://gw.alicdn.com/tfs/TB1Y9vlpwMPMeJjy1XcXXXpppXa-72-72.png';
	var UNCHECKED = exports.UNCHECKED = 'https://gw.alicdn.com/tfs/TB1PtN3pwMPMeJjy1XdXXasrXXa-72-72.png';

/***/ }),
/* 227 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('wxc-cell', {
	    attrs: {
	      "hasTopBorder": _vm.hasTopBorder,
	      "cellStyle": {
	        backgroundColor: _vm.backgroundColor
	      },
	      "accessible": true,
	      "ariaLabel": (_vm.title + ",状态为" + (_vm.checked?'已选中':'未选中') + "," + (_vm.disabled?'不可更改':''))
	    },
	    on: {
	      "wxcCellClicked": _vm.wxcCellClicked
	    }
	  }, [_c('text', {
	    staticClass: ["title-text"],
	    style: {
	      color: _vm.color
	    },
	    slot: "title"
	  }, [_vm._v(_vm._s(_vm.title))]), (_vm.radioIcon) ? _c('image', {
	    staticClass: ["radio"],
	    attrs: {
	      "src": _vm.radioIcon
	    },
	    slot: "value"
	  }) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 228 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', _vm._l((_vm.updateList), function(item, i) {
	    return _c('wxc-radio', _vm._b({
	      key: i,
	      on: {
	        "wxcRadioItemChecked": function($event) {
	          _vm.wxcRadioItemChecked(i, $event)
	        }
	      }
	    }, 'wxc-radio', item, false))
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(230);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(231)
	)

	/* script */
	__vue_exports__ = __webpack_require__(232)

	/* template */
	var __vue_template__ = __webpack_require__(234)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-result/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-c33e5e82"
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


/***/ }),
/* 231 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrap": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "wxc-result": {
	    "width": 750,
	    "flex": 1,
	    "alignItems": "center",
	    "backgroundColor": "#f2f3f4"
	  },
	  "result-image": {
	    "width": 320,
	    "height": 320
	  },
	  "result-content": {
	    "marginTop": 36,
	    "alignItems": "center"
	  },
	  "content-text": {
	    "fontSize": 30,
	    "color": "#A5A5A5",
	    "height": 42,
	    "lineHeight": 42,
	    "textAlign": "center"
	  },
	  "content-desc": {
	    "marginTop": 10
	  },
	  "result-button": {
	    "marginTop": 60,
	    "borderWidth": 1,
	    "borderColor": "#979797",
	    "backgroundColor": "#FFFFFF",
	    "borderRadius": 6,
	    "width": 240,
	    "height": 72,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "button-text": {
	    "color": "#666666",
	    "fontSize": 30
	  }
	}

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _type = __webpack_require__(233);

	var _type2 = _interopRequireDefault(_type);

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'errorPage'
	    },
	    show: {
	      type: Boolean,
	      default: true
	    },
	    wrapStyle: Object,
	    paddingTop: {
	      type: [Number, String],
	      default: 232
	    },
	    customSet: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  computed: {
	    resultType: function resultType() {
	      var type = this.type,
	          customSet = this.customSet;

	      var allTypes = _utils2.default.isEmptyObject(customSet) ? _type2.default : _utils2.default.mergeDeep(_type2.default, customSet);
	      var types = allTypes['errorPage'];
	      if (['errorPage', 'noGoods', 'noNetwork', 'errorLocation'].indexOf(type) > -1) {
	        types = allTypes[type];
	      }
	      return types;
	    },
	    setPaddingTop: function setPaddingTop() {
	      var paddingTop = this.paddingTop;
	      return paddingTop + 'px';
	    }
	  },
	  methods: {
	    handleTouchEnd: function handleTouchEnd(e) {
	      // web上面有点击穿透问题
	      var platform = weex.config.env.platform;

	      platform === 'Web' && e.preventDefault && e.preventDefault();
	    },
	    onClick: function onClick() {
	      var type = this.type;
	      this.$emit('wxcResultButtonClicked', { type: type });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 233 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
	 * Created by Tw93 on 2016/11/4.
	 */

	exports.default = {
	  errorPage: {
	    pic: 'https://gtms01.alicdn.com/tfs/TB1HH4TSpXXXXauXVXXXXXXXXXX-320-320.png',
	    content: '抱歉出错了，飞猪正在全力解决中',
	    button: '再试一次',
	    title: '出错啦'
	  },
	  noGoods: {
	    pic: 'https://gw.alicdn.com/tfs/TB1QXlEQXXXXXcNXFXXXXXXXXXX-320-320.png',
	    content: '主人，这里什么都没有找到',
	    button: '再试一次',
	    title: '暂无商品'
	  },
	  noNetwork: {
	    pic: 'https://gw.alicdn.com/tfs/TB1rs83QXXXXXcBXpXXXXXXXXXX-320-320.png',
	    content: '哎呀，没有网络了......',
	    button: '刷新一下',
	    title: '无网络'
	  },
	  errorLocation: {
	    pic: 'https://gw.alicdn.com/tfs/TB1rs83QXXXXXcBXpXXXXXXXXXX-320-320.png',
	    content: '哎呀，定位失败了......',
	    button: '刷新一下',
	    title: '定位失败'
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 234 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.show) ? _c('div', {
	    staticClass: ["wrap"],
	    style: _vm.wrapStyle
	  }, [_c('div', {
	    staticClass: ["wxc-result"],
	    style: {
	      paddingTop: _vm.setPaddingTop
	    }
	  }, [_c('image', {
	    staticClass: ["result-image"],
	    attrs: {
	      "ariaHidden": true,
	      "src": _vm.resultType.pic
	    }
	  }), (_vm.resultType.content) ? _c('div', {
	    staticClass: ["result-content"]
	  }, [_c('text', {
	    staticClass: ["content-text"]
	  }, [_vm._v(_vm._s(_vm.resultType.content))]), (_vm.resultType.desc) ? _c('text', {
	    staticClass: ["content-text", "content-desc"]
	  }, [_vm._v(_vm._s(_vm.resultType.desc))]) : _vm._e()]) : _vm._e(), (_vm.resultType.button) ? _c('div', {
	    staticClass: ["result-button"],
	    on: {
	      "touchend": _vm.handleTouchEnd,
	      "click": _vm.onClick
	    }
	  }, [_c('text', {
	    staticClass: ["button-text"]
	  }, [_vm._v(_vm._s(_vm.resultType.button))])]) : _vm._e()])]) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(236);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(237)
	)

	/* script */
	__vue_exports__ = __webpack_require__(238)

	/* template */
	var __vue_template__ = __webpack_require__(254)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-rich-text/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-15e13df2"
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


/***/ }),
/* 237 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-rich-text": {
	    "justifyContent": "flex-start",
	    "alignItems": "center",
	    "flexWrap": "wrap",
	    "flexDirection": "row",
	    "flexShrink": 1
	  },
	  "default-text": {
	    "color": "#A5A5A5",
	    "fontSize": 24,
	    "lineHeight": 30
	  }
	}

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    WxcRichTextText: __webpack_require__(239),
	    WxcRichTextLink: __webpack_require__(243),
	    WxcRichTextIcon: __webpack_require__(246),
	    WxcRichTextTag: __webpack_require__(250)
	  },
	  props: {
	    configList: {
	      type: [Array, String],
	      default: function _default() {
	        return [];
	      }
	    },
	    hasTextMargin: {
	      type: Boolean,
	      default: true
	    }
	  },
	  data: function data() {
	    return {};
	  },
	  computed: {
	    isNotEmptyArray: function isNotEmptyArray() {
	      return _utils2.default.isNonEmptyArray(this.configList);
	    },
	    isString: function isString() {
	      return _utils2.default.isString(this.configList);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(240)
	)

	/* script */
	__vue_exports__ = __webpack_require__(241)

	/* template */
	var __vue_template__ = __webpack_require__(242)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-text.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-43284e37"
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


/***/ }),
/* 240 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-text": {
	    "fontSize": 24,
	    "color": "#3d3d3d"
	  },
	  "black": {
	    "color": "#3D3D3D"
	  },
	  "yellow": {
	    "color": "#EE9900"
	  },
	  "gray": {
	    "color": "#A5A5A5"
	  },
	  "red": {
	    "color": "#FF5000"
	  },
	  "margin-text": {
	    "marginRight": 6
	  }
	}

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(91);

	var _extends3 = _interopRequireDefault(_extends2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    textValue: {
	      type: String,
	      default: ''
	    },
	    textTheme: {
	      type: String,
	      default: 'gray'
	    },
	    textStyle: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    hasTextMargin: {
	      type: Boolean,
	      default: true
	    }
	  },
	  computed: {
	    themeStyle: function themeStyle() {
	      var style = {};
	      var textStyle = this.textStyle;
	      if (textStyle && textStyle.fontSize) {
	        style = (0, _extends3.default)({}, style, {
	          fontSize: textStyle.fontSize + 'px',
	          height: textStyle.fontSize * 1.2 + 'px'
	        });
	      }
	      if (textStyle && textStyle.color) {
	        style = (0, _extends3.default)({}, style, {
	          color: textStyle.color
	        });
	      }
	      return style;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 242 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('text', {
	    class: ['wxc-text', _vm.textTheme, _vm.hasTextMargin ? 'margin-text' : ''],
	    style: _vm.themeStyle
	  }, [_vm._v(_vm._s(_vm.textValue))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(244)

	/* template */
	var __vue_template__ = __webpack_require__(245)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-link.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	var _wxcRichTextText = __webpack_require__(239);

	var _wxcRichTextText2 = _interopRequireDefault(_wxcRichTextText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  components: { WxcRichTextText: _wxcRichTextText2.default },
	  props: {
	    linkValue: {
	      type: [String, Number],
	      default: ''
	    },
	    hasTextMargin: {
	      type: Boolean,
	      default: true
	    },
	    linkHref: {
	      type: String,
	      default: ''
	    },
	    linkTheme: {
	      type: String,
	      default: 'black'
	    },
	    linkStyle: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  data: function data() {
	    return {
	      defObj: {}
	    };
	  },
	  methods: {
	    onLinkClick: function onLinkClick(e) {
	      var self = this;
	      _utils2.default.goToH5Page(self.linkHref);
	      self.$emit('wxcRichTextLinkClick', { element: e, href: self.linkHref });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 245 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    on: {
	      "click": _vm.onLinkClick
	    }
	  }, [_c('wxc-rich-text-text', {
	    attrs: {
	      "textValue": _vm.linkValue,
	      "hasTextMargin": _vm.hasTextMargin,
	      "textStyle": _vm.linkStyle ? _vm.linkStyle : _vm.defObj,
	      "textTheme": _vm.linkTheme ? _vm.linkTheme : 'black'
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(247)
	)

	/* script */
	__vue_exports__ = __webpack_require__(248)

	/* template */
	var __vue_template__ = __webpack_require__(249)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-icon.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-52febf83"
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


/***/ }),
/* 247 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-image": {
	    "width": 90,
	    "height": 24,
	    "marginRight": 6
	  }
	}

/***/ }),
/* 248 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    iconSrc: {
	      type: String,
	      default: ''
	    },
	    iconStyle: {
	      type: Object,
	      default: function _default() {
	        return {
	          height: 24
	        };
	      }
	    }
	  },
	  data: function data() {
	    return {
	      width: 90
	    };
	  },
	  computed: {
	    computedStyle: function computedStyle() {
	      var width = this.width,
	          iconStyle = this.iconStyle;

	      if (iconStyle && iconStyle.width && iconStyle.height) {
	        return {
	          width: iconStyle.width + 'px',
	          height: iconStyle.height + 'px'
	        };
	      } else {
	        return {
	          width: width + 'px',
	          height: iconStyle.height + 'px'
	        };
	      }
	    }
	  },
	  methods: {
	    onLoad: function onLoad(e) {
	      if (e.success && e.size && e.size.naturalWidth > 0) {
	        var width = e.size.naturalWidth;
	        var height = e.size.naturalHeight;
	        this.width = width * (this.iconStyle.height / height);
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 249 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('image', {
	    staticClass: ["wxc-image"],
	    style: {
	      width: _vm.computedStyle.width,
	      height: _vm.computedStyle.height
	    },
	    attrs: {
	      "src": _vm.iconSrc,
	      "ariaHidden": true
	    },
	    on: {
	      "load": _vm.onLoad
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(251)
	)

	/* script */
	__vue_exports__ = __webpack_require__(252)

	/* template */
	var __vue_template__ = __webpack_require__(253)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-rich-text/wxc-rich-text-tag.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-f2a80c00"
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


/***/ }),
/* 251 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-tag": {
	    "borderColor": "#3d3d3d",
	    "borderWidth": 2,
	    "borderRadius": 4,
	    "marginRight": 6,
	    "backgroundColor": "rgba(0,0,0,0)",
	    "paddingLeft": 6,
	    "paddingRight": 6,
	    "height": 26,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "tag-text": {
	    "fontSize": 20,
	    "color": "#3d3d3d"
	  },
	  "black": {
	    "color": "#3D3D3D"
	  },
	  "yellow": {
	    "color": "#EE9900"
	  },
	  "blue": {
	    "color": "#30A0FF"
	  },
	  "gray": {
	    "color": "#A5A5A5"
	  },
	  "red": {
	    "color": "#FF5000"
	  },
	  "border-black": {
	    "borderColor": "#A5A5A5"
	  },
	  "border-yellow": {
	    "borderColor": "#EE9900"
	  },
	  "border-gray": {
	    "borderColor": "#A5A5A5"
	  },
	  "border-red": {
	    "borderColor": "#FF5000"
	  }
	}

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(91);

	var _extends3 = _interopRequireDefault(_extends2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    tagValue: {
	      type: [String, Number],
	      default: ''
	    },
	    tagTheme: {
	      type: String,
	      default: 'blue'
	    },
	    tagStyle: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  computed: {
	    newTheme: function newTheme() {
	      var tagStyle = this.tagStyle;
	      var tagValue = this.tagValue;
	      var divStyle = {};
	      var textStyle = {};
	      if (tagStyle && tagStyle.fontSize) {
	        textStyle = (0, _extends3.default)({}, textStyle, {
	          fontSize: tagStyle.fontSize + 'px'
	        });
	      }
	      if (tagStyle && tagStyle.color) {
	        textStyle = (0, _extends3.default)({}, textStyle, {
	          color: tagStyle.color
	        });
	      }

	      if (tagStyle && tagStyle.borderColor) {
	        divStyle = (0, _extends3.default)({}, divStyle, {
	          borderColor: tagStyle.borderColor
	        });
	      }

	      if (tagStyle && tagStyle.borderWidth) {
	        divStyle = (0, _extends3.default)({}, divStyle, {
	          borderWidth: tagStyle.borderWidth + 'px'
	        });
	      }

	      if (tagStyle && tagStyle.borderRadius) {
	        divStyle = (0, _extends3.default)({}, divStyle, {
	          borderRadius: tagStyle.borderRadius + 'px'
	        });
	      }

	      if (tagStyle && tagStyle.backgroundColor) {
	        divStyle = (0, _extends3.default)({}, divStyle, {
	          backgroundColor: tagStyle.backgroundColor
	        });
	      }

	      if (tagStyle && tagStyle.height) {
	        divStyle = (0, _extends3.default)({}, divStyle, {
	          height: tagStyle.height + 'px'
	        });
	      }

	      if (tagStyle && tagStyle.width) {
	        divStyle = (0, _extends3.default)({}, divStyle, {
	          width: tagStyle.width + 'px'
	        });
	      }

	      if (tagValue && tagValue.length === 1) {
	        divStyle = (0, _extends3.default)({}, divStyle, {
	          paddingLeft: 0,
	          paddingRight: 0
	        });
	      }

	      return {
	        divStyle: divStyle,
	        textStyle: textStyle
	      };
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 253 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['wxc-tag', 'border-' + _vm.tagTheme],
	    style: _vm.newTheme.divStyle
	  }, [_c('text', {
	    class: ['tag-text', _vm.tagTheme],
	    style: _vm.newTheme.textStyle
	  }, [_vm._v(_vm._s(_vm.tagValue))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 254 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.isNotEmptyArray) ? _c('div', {
	    staticClass: ["wxc-rich-text"]
	  }, _vm._l((_vm.configList), function(v) {
	    return _c('div', [(v.type == 'text' && v.value) ? _c('wxc-rich-text-text', {
	      attrs: {
	        "textValue": v.value,
	        "textStyle": v.style,
	        "hasTextMargin": _vm.hasTextMargin,
	        "textTheme": v.theme
	      }
	    }) : _vm._e(), (v.type == 'link' && v.href && v.value) ? _c('wxc-rich-text-link', {
	      attrs: {
	        "linkValue": v.value,
	        "linkHref": v.href,
	        "linkStyle": v.style,
	        "hasTextMargin": _vm.hasTextMargin,
	        "linkTheme": v.theme
	      }
	    }) : _vm._e(), (v.type == 'icon' && v.src) ? _c('wxc-rich-text-icon', {
	      attrs: {
	        "iconSrc": v.src,
	        "iconStyle": v.style
	      }
	    }) : _vm._e(), (v.type == 'tag' && v.value) ? _c('wxc-rich-text-tag', {
	      attrs: {
	        "tagValue": v.value,
	        "tagTheme": v.theme,
	        "tagStyle": v.style
	      }
	    }) : _vm._e()], 1)
	  })) : _vm._e(), (_vm.isString) ? _c('text', {
	    staticClass: ["default-text"]
	  }, [_vm._v(_vm._s(_vm.configList))]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(256);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(257)
	)

	/* script */
	__vue_exports__ = __webpack_require__(258)

	/* template */
	var __vue_template__ = __webpack_require__(259)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-special-rich-text/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1e56a444"
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


/***/ }),
/* 257 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-special-rich-text": {
	    "position": "relative"
	  },
	  "tag-div": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "color": "#A5A5A5",
	    "fontSize": 24,
	    "lineHeight": 30
	  },
	  "wxc-text": {
	    "fontSize": 24,
	    "color": "#3d3d3d",
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "overflow": "hidden"
	  },
	  "black": {
	    "color": "#3D3D3D"
	  },
	  "yellow": {
	    "color": "#EE9900"
	  },
	  "gray": {
	    "color": "#A5A5A5"
	  },
	  "red": {
	    "color": "#FF5000"
	  },
	  "margin-text": {
	    "marginRight": 6
	  }
	}

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(91);

	var _extends3 = _interopRequireDefault(_extends2);

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	var _wxcRichTextText = __webpack_require__(239);

	var _wxcRichTextText2 = _interopRequireDefault(_wxcRichTextText);

	var _wxcRichTextIcon = __webpack_require__(246);

	var _wxcRichTextIcon2 = _interopRequireDefault(_wxcRichTextIcon);

	var _wxcRichTextTag = __webpack_require__(250);

	var _wxcRichTextTag2 = _interopRequireDefault(_wxcRichTextTag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  components: {
	    WxcRichTextText: _wxcRichTextText2.default,
	    WxcRichTextIcon: _wxcRichTextIcon2.default,
	    WxcRichTextTag: _wxcRichTextTag2.default
	  },
	  props: {
	    configList: {
	      type: [Array, String],
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  computed: {
	    newList: function newList() {
	      var configList = this.configList;

	      if (_utils2.default.isNonEmptyArray(configList) && configList.length === 2) {
	        var r1 = configList[0];
	        var r2 = configList[1];
	        var iconStyle = r1.style;
	        var textStyle = r2.style;
	        var style = {};
	        var fontSize = 24;
	        var tagWidth = iconStyle && iconStyle.width ? iconStyle.width : 24;

	        if (textStyle && textStyle.fontSize) {
	          fontSize = textStyle.fontSize;
	          style = {
	            fontSize: textStyle.fontSize + 'px',
	            lineHeight: textStyle.fontSize * 1.4 + 'px'
	          };
	        }

	        if (textStyle && textStyle.color) {
	          style = (0, _extends3.default)({}, style, {
	            color: textStyle.color
	          });
	        }

	        if (r1.type === 'tag' && iconStyle && iconStyle.width) {
	          r1 = (0, _extends3.default)({}, r1, {
	            style: (0, _extends3.default)({}, iconStyle, { width: null })
	          });
	        }
	        var newValue = r2.value ? new Array(Math.ceil(tagWidth / fontSize) + 1).join('    ') + (' ' + r2.value) : '';
	        r2 = (0, _extends3.default)({}, r2, {
	          style: style,
	          value: newValue
	        });
	        return [r1, r2];
	      } else {
	        return [];
	      }
	    },
	    top: function top() {
	      var configList = this.configList;

	      if (_utils2.default.isNonEmptyArray(configList) && configList.length === 2) {
	        var iconStyle = configList[0].style;
	        var textStyle = configList[1].style;
	        var fontSize = 24;
	        var tagHeight = iconStyle && iconStyle.height ? iconStyle.height : 26;
	        if (textStyle && textStyle.fontSize) {
	          fontSize = textStyle.fontSize;
	        }
	        return Math.ceil((fontSize * 1.3 - tagHeight) / 2);
	      } else {
	        return 0;
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 259 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-special-rich-text"]
	  }, [_c('div', {
	    staticClass: ["tag-div"],
	    style: {
	      top: _vm.top + 'px'
	    }
	  }, [(_vm.newList[0].type == 'icon' && _vm.newList[0].src) ? _c('wxc-rich-text-icon', {
	    attrs: {
	      "iconSrc": _vm.newList[0].src,
	      "iconStyle": _vm.newList[0].style
	    }
	  }) : _vm._e(), (_vm.newList[0].type == 'tag' && _vm.newList[0].value) ? _c('wxc-rich-text-tag', {
	    attrs: {
	      "tagValue": _vm.newList[0].value,
	      "tagTheme": _vm.newList[0].theme,
	      "tagStyle": _vm.newList[0].style
	    }
	  }) : _vm._e()], 1), (_vm.newList[1].value) ? _c('text', {
	    class: ['wxc-text', _vm.newList[1].theme],
	    style: _vm.newList[1].style
	  }, [_vm._v(_vm._s(_vm.newList[1].value))]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(261);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(262)
	)

	/* script */
	__vue_exports__ = __webpack_require__(263)

	/* template */
	var __vue_template__ = __webpack_require__(265)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-searchbar/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-9184b0c2"
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


/***/ }),
/* 262 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-search-bar": {
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "backgroundColor": "#ffffff",
	    "width": 750,
	    "height": 84,
	    "flexDirection": "row"
	  },
	  "wxc-search-bar-yellow": {
	    "backgroundColor": "#ffc900"
	  },
	  "search-bar-input": {
	    "position": "absolute",
	    "top": 10,
	    "paddingTop": 0,
	    "paddingBottom": 0,
	    "paddingRight": 40,
	    "paddingLeft": 60,
	    "fontSize": 26,
	    "width": 624,
	    "height": 64,
	    "lineHeight": 64,
	    "backgroundColor": "#E5E5E5",
	    "outline": "none",
	    "borderRadius": 6
	  },
	  "search-bar-input-yellow": {
	    "backgroundColor": "#fff6d6",
	    "placeholderColor": "#666666"
	  },
	  "search-bar-ICON": {
	    "position": "absolute",
	    "width": 30,
	    "height": 30,
	    "left": 34,
	    "top": 28
	  },
	  "search-bar-close": {
	    "position": "absolute",
	    "width": 30,
	    "height": 30,
	    "right": 120,
	    "top": 28
	  },
	  "search-bar-button": {
	    "width": 94,
	    "height": 36,
	    "fontSize": 30,
	    "textAlign": "center",
	    "backgroundColor": "#ffffff",
	    "marginTop": 16,
	    "marginRight": 0,
	    "color": "#333333",
	    "position": "absolute",
	    "right": 8,
	    "top": 9
	  },
	  "search-bar-button-yellow": {
	    "backgroundColor": "#FFC900"
	  },
	  "input-has-dep": {
	    "paddingLeft": 240,
	    "width": 710
	  },
	  "bar-dep": {
	    "width": 170,
	    "paddingRight": 12,
	    "paddingLeft": 12,
	    "height": 42,
	    "alignItems": "center",
	    "flexDirection": "row",
	    "position": "absolute",
	    "left": 24,
	    "top": 22,
	    "borderRightStyle": "solid",
	    "borderRightWidth": 1,
	    "borderRightColor": "#C7C7C7"
	  },
	  "bar-dep-yellow": {
	    "borderRightColor": "#C7C7C7"
	  },
	  "dep-text": {
	    "flex": 1,
	    "textAlign": "center",
	    "fontSize": 26,
	    "color": "#666666",
	    "marginRight": 6,
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  },
	  "dep-arrow": {
	    "width": 24,
	    "height": 24
	  },
	  "ICON-has-dep": {
	    "left": 214
	  },
	  "disabled-input": {
	    "width": 750,
	    "height": 64,
	    "position": "absolute",
	    "left": 0,
	    "backgroundColor": "rgba(0,0,0,0)"
	  },
	  "has-dep-disabled": {
	    "width": 550,
	    "left": 200
	  }
	}

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _type = __webpack_require__(264);

	exports.default = {
	  props: {
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    alwaysShowCancel: {
	      type: Boolean,
	      default: false
	    },
	    inputType: {
	      type: String,
	      default: 'text'
	    },
	    mod: {
	      type: String,
	      default: 'default'
	    },
	    autofocus: {
	      type: Boolean,
	      default: false
	    },
	    theme: {
	      type: String,
	      default: 'gray'
	    },
	    defaultValue: {
	      type: String,
	      default: ''
	    },
	    placeholder: {
	      type: String,
	      default: '搜索'
	    },
	    depName: {
	      type: String,
	      default: '杭州'
	    }
	  },
	  computed: {
	    needShowCancel: function needShowCancel() {
	      return this.alwaysShowCancel || this.showCancel;
	    }
	  },
	  data: function data() {
	    return {
	      inputIcon: _type.INPUT_ICON,
	      closeIcon: _type.CLOSE_ICON,
	      arrowIcon: _type.ARROW_ICON,
	      showCancel: false,
	      showClose: false,
	      value: ''
	    };
	  },
	  created: function created() {
	    this.defaultValue && (this.value = this.defaultValue);
	    if (this.disabled) {
	      this.showCancel = false;
	      this.showClose = false;
	    }
	  },

	  methods: {
	    onBlur: function onBlur() {
	      var self = this;
	      setTimeout(function () {
	        self.showCancel = false;
	        self.detectShowClose();
	        self.$emit('wxcSearchbarInputOnBlur', { value: self.value });
	      }, 10);
	    },
	    autoBlur: function autoBlur() {
	      this.$refs['search-input'].blur();
	    },
	    onFocus: function onFocus() {
	      this.showCancel = true;
	      this.detectShowClose();
	      this.$emit('wxcSearchbarInputOnFocus', { value: this.value });
	    },
	    closeClicked: function closeClicked() {
	      this.value = '';
	      this.showCancel && (this.showCancel = false);
	      this.showClose && (this.showClose = false);
	      this.$emit('wxcSearchbarCloseClicked', { value: this.value });
	      this.$emit('wxcSearchbarInputOnInput', { value: this.value });
	    },
	    onInput: function onInput(e) {
	      this.value = e.value;
	      this.showCancel = true;
	      this.detectShowClose();
	      this.$emit('wxcSearchbarInputOnInput', { value: this.value });
	    },
	    onSubmit: function onSubmit(e) {
	      this.onBlur();
	      this.value = e.value;
	      this.showCancel = true;
	      this.detectShowClose();
	      this.$emit('wxcSearchbarInputReturned', { value: this.value });
	    },
	    cancelClicked: function cancelClicked() {
	      this.showCancel && (this.showCancel = false);
	      this.showClose && (this.showClose = false);
	      this.$emit('wxcSearchbarCancelClicked', { value: this.value });
	    },
	    detectShowClose: function detectShowClose() {
	      this.showClose = this.value.length > 0 && this.showCancel;
	    },
	    depClicked: function depClicked() {
	      this.$emit('wxcSearchbarDepChooseClicked', {});
	    },
	    inputDisabledClicked: function inputDisabledClicked() {
	      this.$emit('wxcSearchbarInputDisabledClicked', {});
	    },
	    setValue: function setValue(value) {
	      this.value = value;
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),
/* 264 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
	 * Created by Tw93 on 2016/10/31.
	 */

	var INPUT_ICON = exports.INPUT_ICON = "https://gw.alicdn.com/tfs/TB1FZB.pwMPMeJjy1XdXXasrXXa-30-30.png";
	var CLOSE_ICON = exports.CLOSE_ICON = "https://gw.alicdn.com/tfs/TB1sZB.pwMPMeJjy1XdXXasrXXa-24-24.png";
	var ARROW_ICON = exports.ARROW_ICON = "https://gw.alicdn.com/tfs/TB1vZB.pwMPMeJjy1XdXXasrXXa-24-24.png";

/***/ }),
/* 265 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.mod === 'default') ? _c('div', {
	    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme]
	  }, [_c('input', {
	    ref: "search-input",
	    class: ['search-bar-input', 'search-bar-input-' + _vm.theme],
	    style: {
	      width: _vm.needShowCancel ? '624px' : '710px'
	    },
	    attrs: {
	      "autofocus": _vm.autofocus,
	      "disabled": _vm.disabled,
	      "value": _vm.value,
	      "type": _vm.inputType,
	      "placeholder": _vm.placeholder
	    },
	    on: {
	      "blur": _vm.onBlur,
	      "focus": _vm.onFocus,
	      "input": _vm.onInput,
	      "return": _vm.onSubmit
	    }
	  }), (_vm.disabled) ? _c('div', {
	    staticClass: ["disabled-input"],
	    on: {
	      "click": _vm.inputDisabledClicked
	    }
	  }) : _vm._e(), _c('image', {
	    staticClass: ["search-bar-ICON"],
	    attrs: {
	      "ariaHidden": true,
	      "src": _vm.inputIcon
	    }
	  }), (_vm.showClose) ? _c('image', {
	    staticClass: ["search-bar-close"],
	    attrs: {
	      "ariaHidden": true,
	      "src": _vm.closeIcon
	    },
	    on: {
	      "click": _vm.closeClicked
	    }
	  }) : _vm._e(), (_vm.needShowCancel) ? _c('text', {
	    class: ['search-bar-button', 'search-bar-button-' + _vm.theme],
	    on: {
	      "click": _vm.cancelClicked
	    }
	  }, [_vm._v("取消 ")]) : _vm._e()]) : _vm._e(), (_vm.mod === 'hasDep') ? _c('div', {
	    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme]
	  }, [_c('input', {
	    class: ['search-bar-input', 'input-has-dep', 'search-bar-input-' + _vm.theme],
	    attrs: {
	      "disabled": _vm.disabled,
	      "autofocus": _vm.autofocus,
	      "value": _vm.value,
	      "type": _vm.inputType,
	      "placeholder": _vm.placeholder
	    },
	    on: {
	      "blur": _vm.onBlur,
	      "focus": _vm.onFocus,
	      "input": _vm.onInput,
	      "return": _vm.onSubmit
	    }
	  }), (_vm.disabled) ? _c('div', {
	    staticClass: ["disabled-input", "has-dep-disabled"],
	    on: {
	      "click": _vm.inputDisabledClicked
	    }
	  }) : _vm._e(), _c('div', {
	    class: ['bar-dep', '.bar-dep-' + _vm.theme],
	    on: {
	      "click": _vm.depClicked
	    }
	  }, [_c('text', {
	    staticClass: ["dep-text"]
	  }, [_vm._v(_vm._s(_vm.depName))]), _c('image', {
	    staticClass: ["dep-arrow"],
	    attrs: {
	      "src": _vm.arrowIcon,
	      "ariaHidden": true
	    }
	  })]), _c('image', {
	    staticClass: ["search-bar-ICON", "ICON-has-dep"],
	    attrs: {
	      "ariaHidden": true,
	      "src": _vm.inputIcon
	    }
	  })]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(267);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(268)
	)

	/* script */
	__vue_exports__ = __webpack_require__(269)

	/* template */
	var __vue_template__ = __webpack_require__(270)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-simple-flow/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-8842ea46"
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


/***/ }),
/* 268 */
/***/ (function(module, exports) {

	module.exports = {
	  "flex-row": {
	    "flexDirection": "row"
	  },
	  "full-rest": {
	    "flex": 1
	  },
	  "root": {
	    "paddingTop": 28,
	    "paddingBottom": 24,
	    "backgroundColor": "#ffffff"
	  },
	  "title": {
	    "height": 40,
	    "paddingLeft": 70,
	    "paddingRight": 70
	  },
	  "content": {
	    "paddingTop": 9,
	    "paddingBottom": 42,
	    "paddingLeft": 70,
	    "paddingRight": 70
	  },
	  "last-one-content": {
	    "paddingBottom": 0
	  },
	  "line": {
	    "position": "absolute",
	    "top": 0,
	    "bottom": 0,
	    "left": 38,
	    "width": 2,
	    "backgroundColor": "#FFC300"
	  },
	  "first-one-title-line": {
	    "top": 20
	  },
	  "last-one-title-line": {
	    "bottom": 20
	  },
	  "last-one-content-line": {
	    "width": 0
	  },
	  "point": {
	    "position": "absolute",
	    "top": 13,
	    "left": 32,
	    "width": 14,
	    "height": 14,
	    "backgroundColor": "#FFF0BD",
	    "borderStyle": "solid",
	    "borderWidth": 2,
	    "borderColor": "#EE9900",
	    "borderRadius": 100
	  },
	  "highlight-point": {
	    "top": 7,
	    "left": 26,
	    "width": 26,
	    "height": 26,
	    "backgroundColor": "#EE9900",
	    "borderStyle": "solid",
	    "borderWidth": 6,
	    "borderColor": "#FFE78D"
	  },
	  "text-title": {
	    "fontSize": 30,
	    "color": "#3d3d3d"
	  },
	  "text-highlight-title": {
	    "color": "#EE9900"
	  },
	  "text-desc": {
	    "fontSize": 24,
	    "color": "#a5a5a5",
	    "marginBottom": 12
	  },
	  "text-date": {
	    "fontSize": 24,
	    "color": "#a5a5a5"
	  }
	}

/***/ }),
/* 269 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    list: {
	      type: Array,
	      required: true
	    },
	    themeColor: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  computed: {
	    cItems: function cItems() {
	      return this.adapter(this.list);
	    }
	  },
	  methods: {
	    adapter: function adapter(items) {
	      var _themeColor = this.themeColor,
	          lineColor = _themeColor.lineColor,
	          pointInnerColor = _themeColor.pointInnerColor,
	          pointBorderColor = _themeColor.pointBorderColor,
	          highlightTitleColor = _themeColor.highlightTitleColor,
	          highlightPointInnerColor = _themeColor.highlightPointInnerColor,
	          highlightPointBorderColor = _themeColor.highlightPointBorderColor;

	      var len = items.length;
	      var pre = Date.now();

	      return items.map(function (item, index) {
	        item.key = pre + '_' + index;
	        item.__titleLineClass__ = [];
	        item.__contentClass__ = [];
	        item.__contentLineClass__ = [];
	        item.__pointClass__ = [];
	        item.__titleTextClass__ = [];
	        item.__pointStyle__ = {};
	        item.__lineStyle__ = {};
	        item.__titleStyle__ = {};

	        if (lineColor) item.__lineStyle__.backgroundColor = lineColor;
	        if (pointInnerColor) item.__pointStyle__.backgroundColor = pointInnerColor;
	        if (pointBorderColor) item.__pointStyle__.borderColor = pointBorderColor;

	        if (index === 0) {
	          item.__titleLineClass__.push('first-one-title-line');
	        }

	        if (index === len - 1) {
	          item.__titleLineClass__.push('last-one-title-line');
	          item.__contentClass__.push('last-one-content');
	          item.__contentLineClass__.push('last-one-content-line');
	        }

	        if (item.highlight) {
	          item.__pointClass__.push('highlight-point');
	          item.__titleTextClass__.push('text-highlight-title');
	          if (highlightTitleColor) item.__titleStyle__.color = highlightTitleColor;
	          if (highlightPointInnerColor) item.__pointStyle__.backgroundColor = highlightPointInnerColor;
	          if (highlightPointBorderColor) item.__pointStyle__.borderColor = highlightPointBorderColor;
	        }
	        return item;
	      });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 270 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["root"]
	  }, _vm._l((_vm.cItems), function(item, index) {
	    return _c('div', {
	      key: item.key,
	      attrs: {
	        "accessible": true,
	        "ariaLabel": ((item.title) + "," + (item.desc?item.desc:'') + "," + (item.date?item.date:'') + "," + (item.highlight?'已完成':'等待完成'))
	      }
	    }, [_c('div', {
	      staticClass: ["title", "flex-row"]
	    }, [_c('div', {
	      staticClass: ["line"],
	      class: item.__titleLineClass__,
	      style: item.__lineStyle__
	    }), _c('div', {
	      staticClass: ["point"],
	      class: item.__pointClass__,
	      style: item.__pointStyle__
	    }), _c('text', {
	      staticClass: ["text-title", "full-rest"],
	      class: item.__titleTextClass__,
	      style: item.__titleStyle__
	    }, [_vm._v(_vm._s(item.title))])]), _c('div', {
	      staticClass: ["content", "flex-row"],
	      class: item.__contentClass__
	    }, [_c('div', {
	      staticClass: ["line"],
	      class: item.__contentLineClass__,
	      style: item.__lineStyle__
	    }), _c('div', {
	      staticClass: ["full-rest"]
	    }, [(item.desc) ? _c('text', {
	      staticClass: ["text-desc"]
	    }, [_vm._v(_vm._s(item.desc))]) : _vm._e(), (item.date) ? _c('text', {
	      staticClass: ["text-date"]
	    }, [_vm._v(_vm._s(item.date))]) : _vm._e()])])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(272);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(273)
	)

	/* script */
	__vue_exports__ = __webpack_require__(274)

	/* template */
	var __vue_template__ = __webpack_require__(275)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-slide-nav/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6de01a3b"
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


/***/ }),
/* 273 */
/***/ (function(module, exports) {

	module.exports = {
	  "slide-nav": {
	    "position": "absolute",
	    "zIndex": 1000
	  }
	}

/***/ }),
/* 274 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var DOM = weex.requireModule('dom');
	var Animation = weex.requireModule('animation');
	var OFFSET_ACCURACY = 10;
	var SCALE = weex.config.env.platform.toLowerCase() === 'web' ? 2 : 1;

	function _toNum(str) {
	  return typeof str === 'number' ? str : parseFloat((str || '').replace(/px$/i, ''));
	}

	function _getHeight(element, callback) {
	  if (!element) {
	    return;
	  }
	  if (element.__cacheHeight) {
	    element.__cacheHeight && callback && callback(element.__cacheHeight);
	  } else {
	    DOM.getComponentRect(element, function (res) {
	      var height = (parseFloat(res && res.size && res.size.height) || 0) / SCALE;
	      height && callback && callback(element.__cacheHeight = height);
	    });
	  }
	}

	exports.default = {

	  props: {
	    position: {
	      'type': String,
	      'default': 'top'
	    },

	    height: [String, Number]
	  },

	  data: function data() {
	    return {
	      visible: true
	    };
	  },


	  watch: {
	    visible: function visible(newVal) {
	      newVal ? this._slideIn() : this._slideOut();
	    }
	  },

	  created: function created() {
	    this._height = _toNum(this.height) || 0;
	    this._isBottom = this.position === 'bottom';
	    this._direction = this._isBottom ? 1 : -1;
	  },


	  methods: {
	    _slideOut: function _slideOut() {
	      var _this = this;

	      this.getHeight(function (height) {
	        _this.$emit('slideOut');
	        _this.slideY(height * _this._direction * SCALE, function () {
	          _this.$emit('slideOutEnd');
	        });
	      });
	    },
	    _slideIn: function _slideIn() {
	      var _this2 = this;

	      this.getHeight(function (height) {
	        _this2.$emit('slideIn');
	        _this2.slideY(0, function () {
	          _this2.$emit('slideInEnd');
	        });
	      });
	    },
	    getHeight: function getHeight(callback) {
	      return _getHeight(this.$refs.wrapper, callback);
	    },
	    slideOut: function slideOut() {
	      this.visible = false;
	    },
	    slideIn: function slideIn() {
	      this.visible = true;
	    },
	    slideY: function slideY(y, callback) {
	      Animation.transition(this.$refs.wrapper, {
	        styles: { transform: 'translateY(' + y + 'px)' },
	        duration: 150, //ms
	        timingFunction: 'ease',
	        delay: 0 //ms
	      }, callback);
	    }
	  },

	  handleTouchStart: function handleTouchStart(e) {
	    var touch = e.changedTouches[0];
	    this._touchParams = {
	      pageY: touch.screenY,
	      startY: touch.screenY,
	      lastPageY: touch.screenY,
	      timeStamp: e.timeStamp,
	      direction: -1
	    };
	  },
	  handleTouchMove: function handleTouchMove(e, bottomNav) {
	    var tp = this._touchParams;
	    var touch = e.changedTouches[0];
	    var offsetY = void 0;

	    // 安卓下滚动的时候经常不触发touchstart事件
	    if (!tp || tp.hasEnd) {
	      return this._touchParams = {
	        pageY: touch.screenY,
	        startY: touch.screenY,
	        lastPageY: touch.screenY,
	        timeStamp: e.timeStamp,
	        direction: -1
	      };
	    }

	    offsetY = touch.screenY - tp.pageY;

	    tp.lastPageY = tp.pageY;
	    tp.lastDirection = tp.direction;
	    tp.direction = offsetY > 0 ? 1 : -1;

	    if (tp.lastDirection !== tp.direction) {
	      tp.startY = tp.lastPageY;
	    }

	    tp.pageY = touch.screenY;
	    tp.offsetY = tp.pageY - tp.startY;

	    if (!this.__scrollable && bottomNav) {
	      if (tp.offsetY <= -OFFSET_ACCURACY) {
	        bottomNav.slideOut();
	      } else if (tp.offsetY >= OFFSET_ACCURACY) {
	        bottomNav.slideIn();
	      }
	    }
	  },
	  handleTouchEnd: function handleTouchEnd() {
	    var tp = this._touchParams;
	    tp && (tp.hasEnd = true);
	  },
	  handleScroll: function handleScroll(e, scroller, topNav, bottomNav, startThreshold) {
	    var _this3 = this;

	    var moveThreshold = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5;

	    var scrollY = e.contentOffset.y;
	    var nav = topNav || bottomNav;
	    var scrollFn = function scrollFn(maxScrollY) {
	      if (-scrollY > maxScrollY) {
	        return;
	      }
	      maxScrollY = Math.abs(maxScrollY);
	      if (Math.abs(scrollY) < startThreshold) {
	        if (Math.abs(scrollY) >= maxScrollY - OFFSET_ACCURACY) {
	          var tp = _this3._touchParams;
	          if (!tp) {
	            return;
	          }
	          var offsetY = tp.offsetY;
	          if (offsetY < -OFFSET_ACCURACY) {
	            bottomNav && bottomNav.slideOut();
	          } else if (offsetY > OFFSET_ACCURACY) {
	            bottomNav && bottomNav.slideIn();
	          }
	        } else {
	          topNav && topNav.slideIn();
	          bottomNav && bottomNav.slideIn();
	        }
	      } else {
	        var _tp = _this3._touchParams;
	        if (!_tp) {
	          return;
	        }
	        var _offsetY = _tp.offsetY;
	        if (Math.abs(_offsetY) >= moveThreshold) {
	          if (_offsetY > 0) {
	            topNav && topNav.slideIn();
	            bottomNav && bottomNav.slideIn();
	          } else {
	            topNav && topNav.slideOut();
	            bottomNav && bottomNav.slideOut();
	          }
	        }
	      }
	    };

	    var maxScrollYCheck = function maxScrollYCheck(maxScrollY) {
	      if (!_this3.__scrollable) {
	        return;
	      }
	      if (startThreshold) {
	        scrollFn(maxScrollY);
	      } else {
	        nav.getHeight(function (navHeight) {
	          startThreshold = navHeight;
	          scrollFn(maxScrollY);
	        });
	      }
	    };

	    if (!nav) {
	      return;
	    }

	    _getHeight(scroller, function (scrollerHeight) {
	      var maxScrollY = e.contentSize.height - scrollerHeight;
	      _this3.__scrollable = maxScrollY >= OFFSET_ACCURACY;

	      if (bottomNav) {
	        bottomNav.getHeight(function (height) {
	          _this3.__scrollable = maxScrollY >= height;
	          maxScrollYCheck(maxScrollY);
	        });
	      } else {
	        maxScrollYCheck(maxScrollY);
	      }
	    });
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 275 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "wrapper",
	    staticClass: ["slide-nav"]
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(277);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(278)
	)

	/* script */
	__vue_exports__ = __webpack_require__(279)

	/* template */
	var __vue_template__ = __webpack_require__(280)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-slider-bar/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1d98cc6e"
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


/***/ }),
/* 278 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-slider-bar": {
	    "userSelect": "none"
	  },
	  "slider-bar-container": {
	    "height": 56,
	    "display": "flex",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "value-bar": {
	    "height": 4
	  },
	  "slide-block": {
	    "width": 56,
	    "height": 56,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 28,
	    "borderWidth": 1,
	    "borderColor": "rgba(0,0,0,0.1)",
	    "boxShadow": "0 6px 12px rgba(0, 0, 0, 0.05)",
	    "position": "absolute",
	    "left": 0,
	    "bottom": 0
	  }
	}

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EB = weex.requireModule('expressionBinding'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	var dom = weex.requireModule('dom');

	exports.default = {
	  data: function data() {
	    return {
	      env: 'weex',
	      diffX1: 0,
	      diffX2: 0,
	      barWidth: 0,
	      preventMoveEvent: true,
	      timeout: 100,
	      minDiffX: 0,
	      selectRange: [0, 0]
	    };
	  },
	  props: {
	    length: {
	      type: Number,
	      default: 500
	    },
	    height: {
	      type: Number,
	      default: 4
	    },
	    // 是否双滑块模式
	    range: {
	      type: Boolean,
	      default: false
	    },
	    // 最小值
	    min: {
	      type: Number,
	      default: 0
	    },
	    // 最大值
	    max: {
	      type: Number,
	      default: 100
	    },
	    // 最小取值范围，用于范围选择范围最小差值
	    minDiff: {
	      type: Number,
	      default: 5
	    },
	    // 设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]
	    value: {
	      type: [Number, Array],
	      default: 0
	    },
	    // 设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]
	    defaultValue: {
	      type: [Number, Array],
	      default: 0
	    },
	    // 值为 true 时，滑块为禁用状态
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    invalidColor: {
	      type: String,
	      default: '#E0E0E0'
	    },
	    validColor: {
	      type: String,
	      default: '#EE9900'
	    },
	    disabledColor: {
	      type: String,
	      default: '#AAA'
	    }
	  },
	  created: function created() {
	    if (_utils2.default.env.isWeb()) {
	      this.env = 'web';
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.block1 = this.$refs['slide-block-1']; // 左侧滑块
	    this.block2 = this.$refs['slide-block-2']; // 右侧滑块
	    this.valueBar = this.$refs['value-bar']; // 黄色值条
	    this.barContainer = this.$refs['bar-container']; // 滚动条容器

	    if (!this.range) {
	      this.diffX1 = this._getDiffX(this.value || this.defaultValue);
	    } else {
	      this.diffX1 = this._getDiffX(this.value[0] || this.defaultValue[0]);
	      this.diffX2 = this._getDiffX(this.value[1] || this.defaultValue[1]);
	      this.barWidth = this.diffX2 - this.diffX1;
	    }
	    // 是否支持expresstionBinding
	    if (_utils2.default.env.supportsEB()) {
	      this.block1 && EB.enableBinding(this.block1.ref, 'pan');
	      this.block2 && EB.enableBinding(this.block2.ref, 'pan');
	      this.valueBar && EB.enableBinding(this.valueBar.ref, 'pan');
	    }
	    if (_utils2.default.env.isAndroid()) {
	      this.timeout = 250;
	    }
	    if (this.range) {
	      this.selectRange = this.value || this.defaultValue; // 初始化范围选择返回数据
	      this.minDiffX = this.minDiff / (this.max - this.min) * this.length; // 滑块1、2之前最小间距
	    }
	    // 由于weex在mounted后渲染是异步的不能确保元素渲染完成，需要异步执行
	    setTimeout(function () {
	      dom.getComponentRect(_this.barContainer, function (option) {
	        var left = option.size.left;

	        _this.leftDiffX = left;
	      });
	    }, 100);

	    this.bindExp();
	  },

	  computed: {
	    containerStyle: function containerStyle() {
	      return {
	        width: this.length + 56 + 'px',
	        height: '56px'
	      };
	    },
	    rangeBarStyle: function rangeBarStyle() {
	      return {
	        width: this.length + 'px',
	        height: this.height + 'px',
	        flexDirection: 'row',
	        backgroundColor: this.invalidColor,
	        overflow: 'hidden'
	      };
	    },
	    valueBarStyle: function valueBarStyle() {
	      var left = 0;
	      var width = 0;
	      if (!this.range) {
	        width = this.diffX1;
	      } else {
	        left = this.diffX1;
	        width = this.diffX2 - this.diffX1;
	      }
	      return {
	        width: width + 'px',
	        height: this.height + 'px',
	        transform: 'translateX(' + left + 'px)',
	        backgroundColor: this.disabled ? this.disabledColor : this.validColor
	      };
	    },
	    blockStyle1: function blockStyle1() {
	      return {
	        transform: 'translateX(' + this.diffX1 + 'px)'
	      };
	    },
	    blockStyle2: function blockStyle2() {
	      return {
	        transform: 'translateX(' + this.diffX2 + 'px)'
	      };
	    }
	  },
	  methods: {
	    dispatchPan: function dispatchPan() {},


	    // 更新单选值或最小值
	    _weexStartHandler1: function _weexStartHandler1() {
	      var _this2 = this;

	      this.firstInterval = setInterval(function () {
	        if (!_this2.range) {
	          dom.getComponentRect(_this2.valueBar, function (option) {
	            var width = option.size.width;

	            var value = _this2._getValue(width);
	            _this2.$emit('updateValue', value);
	          });
	        } else {
	          dom.getComponentRect(_this2.block1, function (option) {
	            var left = option.size.left;

	            _this2.selectRange[0] = _this2._getValue(left - _this2.leftDiffX);
	            _this2.$emit('updateValue', _this2.selectRange);
	          });
	        }
	      }, this.timeout);
	    },


	    // 更新最大值
	    _weexStartHandler2: function _weexStartHandler2() {
	      var _this3 = this;

	      this.secondInterval = setInterval(function () {
	        dom.getComponentRect(_this3.block2, function (option) {
	          var left = option.size.left;

	          _this3.selectRange[1] = _this3._getValue(left - _this3.leftDiffX);
	          _this3.$emit('updateValue', _this3.selectRange);
	        });
	      }, this.timeout);
	    },


	    // 清除定时器
	    _weexEndHandler: function _weexEndHandler() {
	      this.firstInterval && clearInterval(this.firstInterval);
	      this.secondInterval && clearInterval(this.secondInterval);
	    },
	    _webStartHandler: function _webStartHandler(e) {
	      if (this.env === 'weex') {
	        return;
	      }
	      this.startX = e.touch.clientX;
	      this.startDiffX1 = this.diffX1;
	      this.startDiffX2 = this.diffX2;
	    },
	    _webMoveHandler1: function _webMoveHandler1(e) {
	      if (this.env === 'weex' || this.disabled) {
	        return;
	      }
	      var deltaX = e.touch.clientX - this.startX;
	      var diff = this.startDiffX1 + deltaX;
	      var max = this.length;
	      if (this.range) {
	        max = this.diffX2 - this.minDiffX;
	      }
	      if (diff > 0 && diff < max) {
	        this.diffX1 = diff;
	        animation.transition(this.block1, {
	          styles: {
	            transform: 'translateX(' + this.diffX1 + 'px)'
	          }
	        }, function () {});
	        if (!this.range) {
	          this.$emit('updateValue', this._getValue(this.diffX1));
	        } else {
	          this.selectRange[0] = this._getValue(this.diffX1);
	          this.$emit('updateValue', this.selectRange);
	        }
	      }
	    },
	    _webMoveHandler2: function _webMoveHandler2(e) {
	      if (this.env === 'weex' || this.disabled) {
	        return;
	      }
	      var deltaX = e.touch.clientX - this.startX;
	      var diff = this.startDiffX2 + deltaX;
	      var min = this.diffX1 + this.minDiffX;
	      var max = this.length;
	      if (diff > min && diff < max) {
	        this.diffX2 = diff;
	        animation.transition(this.block2, {
	          styles: {
	            transform: 'translateX(' + this.diffX2 + 'px)'
	          }
	        }, function () {});
	        if (!this.range) {
	          this.$emit('updateValue', this._getValue(this.diffX2));
	        } else {
	          this.selectRange[1] = this._getValue(this.diffX2);
	          this.$emit('updateValue', this.selectRange);
	        }
	      }
	    },
	    bindExp: function bindExp() {
	      var self = this;

	      // 如果禁用，不行进行表达式绑定
	      if (self.disabled) {
	        return;
	      }

	      // 初始化按钮&条的大小范围
	      var blockMax1 = 0;
	      if (self.range) {
	        blockMax1 = self.diffX2 - self.minDiffX;
	      } else {
	        blockMax1 = self.length;
	      }

	      var blockMax2 = self.length;
	      var blockMin2 = self.diffX1 + self.minDiffX;
	      var barMax1 = self.diffX2;
	      var barMax2 = self.length - self.diffX1;

	      // 滑块1表达式
	      var expBlock1 = '{"type":"CallExpression","children":[{"type":"Identifier","value":"min"},{"type":"Arguments","children":[{"type":"NumericLiteral","value":' + blockMax1 + '},{"type":"CallExpression","children":[{"type":"Identifier","value":"max"},{"type":"Arguments","children":[{"type":"+","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":' + self.diffX1 + '}]},{"type":"NumericLiteral","value":0}]}]}]}]}';
	      // 滑块2表达式
	      var expBlock2 = '{"type":"CallExpression","children":[{"type":"Identifier","value":"min"},{"type":"Arguments","children":[{"type":"NumericLiteral","value":' + blockMax2 + '},{"type":"CallExpression","children":[{"type":"Identifier","value":"max"},{"type":"Arguments","children":[{"type":"+","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":' + self.diffX2 + '}]},{"type":"NumericLiteral","value":' + blockMin2 + '}]}]}]}]}';
	      // valuebar表达式
	      var expBar1 = '{"type":"CallExpression","children":[{"type":"Identifier","value":"min"},{"type":"Arguments","children":[{"type":"NumericLiteral","value":' + barMax1 + '},{"type":"CallExpression","children":[{"type":"Identifier","value":"max"},{"type":"Arguments","children":[{"type":"NumericLiteral","value":0},{"type":"-","children":[{"type":"NumericLiteral","value":' + self.barWidth + '},{"type":"Identifier","value":"x"}]}]}]}]}]}';
	      // valuebar 范围表达式
	      var expBar2 = '{"type":"CallExpression","children":[{"type":"Identifier","value":"min"},{"type":"Arguments","children":[{"type":"NumericLiteral","value":' + barMax2 + '},{"type":"CallExpression","children":[{"type":"Identifier","value":"max"},{"type":"Arguments","children":[{"type":"NumericLiteral","value":0},{"type":"+","children":[{"type":"NumericLiteral","value":' + self.barWidth + '},{"type":"Identifier","value":"x"}]}]}]}]}]}';

	      if (!self.range) {
	        // 单选
	        var args = [{
	          element: self.block1.ref,
	          property: 'transform.translateX',
	          expression: expBlock1
	        }, {
	          element: self.valueBar.ref,
	          property: 'width',
	          expression: expBlock1
	        }];
	        EB && EB.createBinding(self.block1.ref, 'pan', '', args, function (e) {
	          if (e.state === 'end') {
	            var range = self.getRange();
	            // 限制diffX1范围
	            self.diffX1 = self._restrictValue(range.rangeX1, self.diffX1 + e.deltaX);
	            self.bindExp();
	          }
	        });
	      } else {
	        // 选范围
	        var _args = [{
	          element: self.block1.ref,
	          property: 'transform.translateX',
	          expression: expBlock1
	        }, {
	          element: self.valueBar.ref,
	          property: 'transform.translateX',
	          expression: expBlock1
	        }, {
	          element: self.valueBar.ref,
	          property: 'width',
	          expression: expBar1
	        }];

	        var args2 = [{
	          element: self.block2.ref,
	          property: 'transform.translateX',
	          expression: expBlock2
	        }, {
	          element: self.valueBar.ref,
	          property: 'width',
	          expression: expBar2
	        }];

	        EB && EB.createBinding(self.block1.ref, 'pan', '', _args, function (e) {
	          if (e.state === 'end') {
	            var range = self.getRange();
	            self.barWidth = self._restrictValue(range.rangeX1, self.barWidth - e.deltaX);
	            self.diffX1 = self._restrictValue(range.rangeX1, self.diffX1 + e.deltaX);
	            self.bindExp();
	          }
	        });

	        EB && EB.createBinding(self.block2.ref, 'pan', '', args2, function (e) {
	          if (e.state === 'end') {
	            var range = self.getRange();
	            self.diffX2 = self._restrictValue(range.rangeX2, self.diffX2 + e.deltaX);
	            self.barWidth = self._restrictValue([0, self.length - self.diffX1], self.barWidth + e.deltaX);
	            self.bindExp();
	          }
	        });
	      }
	    },


	    // 获取diffx1 diffx2 取值范围
	    getRange: function getRange(deltaX) {
	      if (!this.range) {
	        return {
	          rangeX1: [0, this.length]
	        };
	      } else {
	        return {
	          rangeX1: [0, this.diffX2 - this.minDiffX],
	          rangeX2: [this.diffX1 + this.minDiffX, this.length]
	        };
	      }
	    },


	    // 限制取值范围
	    _restrictValue: function _restrictValue(range, value) {
	      if (range && range.length && range.length === 2) {
	        if (value < range[0]) {
	          return range[0];
	        } else if (value > range[1]) {
	          return range[1];
	        } else {
	          return value;
	        }
	      }
	      return;
	    },


	    // 根据x方向偏移量计算value
	    _getValue: function _getValue(diffX) {
	      return Math.round(diffX / this.length * (this.max - this.min) + this.min);
	    },


	    // 根据value和length计算x方向偏移值
	    _getDiffX: function _getDiffX(value) {
	      return (value - this.min) / (this.max - this.min) * this.length;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 280 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-slider-bar"]
	  }, [_c('div', {
	    ref: "bar-container",
	    staticClass: ["slider-bar-container"],
	    style: _vm.containerStyle
	  }, [_c('div', {
	    staticClass: ["range-bar"],
	    style: _vm.rangeBarStyle
	  }, [_c('div', {
	    ref: "value-bar",
	    staticClass: ["value-bar"],
	    style: _vm.valueBarStyle
	  }, [_c('div')])]), _c('div', {
	    ref: "slide-block-1",
	    staticClass: ["slide-block"],
	    style: _vm.blockStyle1,
	    attrs: {
	      "preventMoveEvent": _vm.preventMoveEvent
	    },
	    on: {
	      "touchstart": _vm._weexStartHandler1,
	      "panstart": _vm._webStartHandler,
	      "panmove": _vm._webMoveHandler1,
	      "touchend": _vm._weexEndHandler,
	      "horizontalpan": _vm.dispatchPan
	    }
	  }, [_c('div')]), (_vm.range) ? _c('div', {
	    ref: "slide-block-2",
	    staticClass: ["slide-block"],
	    style: _vm.blockStyle2,
	    attrs: {
	      "preventMoveEvent": _vm.preventMoveEvent
	    },
	    on: {
	      "touchstart": _vm._weexStartHandler2,
	      "panstart": _vm._webStartHandler,
	      "panmove": _vm._webMoveHandler2,
	      "touchend": _vm._weexEndHandler,
	      "horizontalpan": _vm.dispatchPan
	    }
	  }, [_c('div')]) : _vm._e()])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(282);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(283)
	)

	/* script */
	__vue_exports__ = __webpack_require__(284)

	/* template */
	var __vue_template__ = __webpack_require__(285)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-stepper/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-208a53c5"
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


/***/ }),
/* 283 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-stepper": {
	    "flexDirection": "row"
	  },
	  "stepper-plus": {
	    "width": 56,
	    "height": 56,
	    "backgroundColor": "#ededed",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": 6
	  },
	  "stepper-minus": {
	    "width": 56,
	    "height": 56,
	    "backgroundColor": "#ededed",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderRadius": 6
	  },
	  "stepper-input": {
	    "borderWidth": 0,
	    "outline": "none",
	    "textAlign": "center",
	    "color": "#3d3d3d",
	    "fontSize": 30,
	    "lineHeight": 56,
	    "width": 86
	  },
	  "stepper-icon": {
	    "fontSize": 36,
	    "color": "#666666",
	    "marginTop": -4
	  }
	}

/***/ }),
/* 284 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    min: {
	      type: [String, Number],
	      default: 1
	    },
	    max: {
	      type: [String, Number],
	      default: 100
	    },
	    step: {
	      type: [String, Number],
	      default: 1
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    defaultValue: {
	      type: [String, Number],
	      default: 1
	    },
	    readOnly: {
	      type: Boolean,
	      default: false
	    }
	  },
	  computed: {
	    disableStyle: function disableStyle() {
	      if (this.disabled) {
	        return {
	          color: '#cccccc'
	        };
	      }
	    },
	    valueString: function valueString() {
	      return this.value.toString();
	    }
	  },
	  data: function data() {
	    return {
	      value: 1,
	      isLess: false,
	      isOver: false
	    };
	  },
	  created: function created() {
	    var self = this;
	    self.value = parseInt(self.defaultValue, 10);
	    if (self.disabled) {
	      self.isLess = true;
	      self.isOver = true;
	    }
	  },

	  methods: {
	    minusClicked: function minusClicked() {
	      var self = this;
	      if (self.disabled) {
	        return;
	      }
	      var isMinOver = self.value <= self.min;
	      var nowNum = self.value - parseInt(self.step, 10);
	      if (isMinOver) {
	        self.$emit('wxcStepperValueIsMinOver', { value: self.value });
	      } else {
	        self.value = nowNum;
	        self.resetDisabledStyle();
	      }
	      // 由于此处已经减step
	      if (nowNum <= self.min) {
	        self.value = parseInt(self.min, 10);
	        self.isLess = true;
	      }
	      self.$emit('wxcStepperValueChanged', { value: self.value });
	    },
	    plusClicked: function plusClicked() {
	      var self = this;
	      if (self.disabled) {
	        return;
	      }
	      var isMaxOver = self.value >= self.max;
	      var nowNum = self.value + parseInt(self.step, 10);
	      if (isMaxOver) {
	        self.$emit('wxcStepperValueIsMaxOver', { value: self.value });
	      } else {
	        self.value = nowNum;
	        self.resetDisabledStyle();
	      }
	      // 由于此处已经加step
	      if (nowNum >= self.max) {
	        self.value = parseInt(self.max, 10);
	        self.isOver = true;
	      }
	      self.$emit('wxcStepperValueChanged', { value: self.value });
	    },
	    onInput: function onInput(e) {
	      this.correctInputValue(e.value);
	    },
	    onBlur: function onBlur(e) {
	      this.correctInputValue(e.value);
	    },
	    correctInputValue: function correctInputValue(v) {
	      var self = this;
	      if (/^[1-9]\d{0,}$/.test(v) && parseInt(v, 10) >= self.min && parseInt(v, 10) <= self.max) {
	        self.value = parseInt(v, 10);
	      }
	      self.$emit('wxcStepperValueChanged', { value: self.value });
	    },
	    resetDisabledStyle: function resetDisabledStyle() {
	      this.isLess = false;
	      this.isOver = false;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 285 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-stepper"]
	  }, [_c('div', {
	    staticClass: ["stepper-minus"],
	    attrs: {
	      "ariaLabel": "减数",
	      "accessible": true
	    },
	    on: {
	      "click": _vm.minusClicked
	    }
	  }, [_c('text', {
	    staticClass: ["stepper-icon"],
	    style: {
	      color: _vm.isLess ? '#cccccc' : '#666666'
	    }
	  }, [_vm._v("-")])]), _c('input', {
	    staticClass: ["stepper-input"],
	    style: _vm.disableStyle,
	    attrs: {
	      "type": "number",
	      "value": _vm.valueString,
	      "disabled": _vm.disabled || _vm.readOnly
	    },
	    on: {
	      "input": _vm.onInput,
	      "blur": _vm.onBlur
	    }
	  }), _c('div', {
	    staticClass: ["stepper-plus"],
	    attrs: {
	      "ariaLabel": "加数",
	      "accessible": true
	    },
	    on: {
	      "click": _vm.plusClicked
	    }
	  }, [_c('text', {
	    staticClass: ["stepper-icon"],
	    style: {
	      color: _vm.isOver ? '#cccccc' : '#666666'
	    }
	  }, [_vm._v("+")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(287);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(288)
	)

	/* script */
	__vue_exports__ = __webpack_require__(289)

	/* template */
	var __vue_template__ = __webpack_require__(290)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-tab-page/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-68956029"
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


/***/ }),
/* 288 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-tab-page": {
	    "width": 750,
	    "flexDirection": "column"
	  },
	  "tab-title-list": {
	    "flexDirection": "row"
	  },
	  "title-item": {
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "column",
	    "borderBottomStyle": "solid",
	    "position": "relative"
	  },
	  "border-bottom": {
	    "position": "absolute",
	    "bottom": 0
	  },
	  "tab-page-wrap": {
	    "width": 750,
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "tab-container": {
	    "flex": 1,
	    "flexDirection": "row",
	    "position": "absolute"
	  },
	  "tab-text": {
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  }
	}

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(4);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var dom = weex.requireModule('dom');
	var animation = weex.requireModule('animation');
	var swipeBack = weex.requireModule('swipeBack');
	var expressionBinding = weex.requireModule('expressionBinding');

	var supportsEB = _utils2.default.env.supportsEB();
	var supportsEBForIos = _utils2.default.env.supportsEBForIos();
	var isIos = _utils2.default.env.isIOS();

	exports.default = {
	  props: {
	    tabTitles: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    panDist: {
	      type: Number,
	      default: 200
	    },
	    spmC: {
	      type: [String, Number],
	      default: ''
	    },
	    titleUseSlot: {
	      type: Boolean,
	      default: false
	    },
	    tabStyles: {
	      type: Object,
	      default: function _default() {
	        return {
	          bgColor: '#FFFFFF',
	          titleColor: '#666666',
	          activeTitleColor: '#3D3D3D',
	          activeBgColor: '#FFFFFF',
	          isActiveTitleBold: true,
	          iconWidth: 70,
	          iconHeight: 70,
	          width: 160,
	          height: 120,
	          fontSize: 24,
	          hasActiveBottom: true,
	          activeBottomColor: '#FFC900',
	          activeBottomWidth: 120,
	          activeBottomHeight: 6,
	          textPaddingLeft: 10,
	          textPaddingRight: 10,
	          leftOffset: 0
	        };
	      }
	    },
	    titleType: {
	      type: String,
	      default: 'icon'
	    },
	    tabPageHeight: {
	      type: [String, Number],
	      default: 1334
	    },
	    isTabView: {
	      type: Boolean,
	      default: true
	    },
	    needSlider: {
	      type: Boolean,
	      default: true
	    },
	    duration: {
	      type: [Number, String],
	      default: 300
	    },
	    timingFunction: {
	      type: String,
	      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
	    },
	    wrapBgColor: {
	      type: String,
	      default: '#f2f3f4'
	    }
	  },
	  data: function data() {
	    return {
	      currentPage: 0,
	      isMoving: false,
	      startTime: 0,
	      deltaX: 0,
	      translateX: 0,
	      startPosX: 0,
	      startPosY: 0,
	      judge: 'INITIAL'
	    };
	  },
	  mounted: function mounted() {
	    var _this = this;

	    if (swipeBack && swipeBack.forbidSwipeBack) {
	      swipeBack.forbidSwipeBack(true);
	    }
	    if (supportsEBForIos && this.needSlider && this.isTabView) {
	      setTimeout(function () {
	        var tabPageEl = _this.$refs['tab-page-wrap'];
	        if (tabPageEl && tabPageEl.ref) {
	          expressionBinding.enableBinding(tabPageEl.ref, 'pan');
	          _this.bindExp(tabPageEl);
	        }
	      }, 20);
	    }
	  },

	  methods: {
	    next: function next() {
	      var page = this.currentPage;
	      if (page < this.tabTitles.length - 1) {
	        page++;
	      }
	      this.setPage(page);
	    },
	    prev: function prev() {
	      var page = this.currentPage;
	      if (page > 0) {
	        page--;
	      }
	      this.setPage(page);
	    },
	    startHandler: function startHandler(e) {
	      var _this2 = this;

	      if (supportsEBForIos && e.state === 'start' && this.isTabView && this.needSlider) {
	        // list下拉和到最下面问题修复
	        setTimeout(function () {
	          _this2.bindExp(_this2.$refs['tab-page-wrap']);
	        }, 0);
	      }
	    },
	    bindExp: function bindExp(element) {
	      var _this3 = this;

	      if (!this.isMoving && element && element.ref) {
	        var tabElement = this.$refs['tab-container'];
	        var currentPage = this.currentPage,
	            panDist = this.panDist;

	        var dist = currentPage * 750;
	        // x-dist
	        var args = [{
	          element: tabElement.ref,
	          property: 'transform.translateX',
	          expression: '{"type":"-","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":' + dist + '}]}'
	        }];
	        expressionBinding.createBinding(element.ref, 'pan', '', args, function (e) {
	          var deltaX = e.deltaX,
	              state = e.state;

	          if (state === 'end') {
	            if (deltaX < -panDist) {
	              _this3.next();
	            } else if (deltaX > panDist) {
	              _this3.prev();
	            } else {
	              _this3.setPage(currentPage);
	            }
	          }
	        });
	      }
	    },
	    setPage: function setPage(page) {
	      var _this4 = this;

	      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	      if (!this.isTabView) {
	        this.jumpOut(url);
	        return;
	      }
	      if (this.isMoving === true) {
	        return;
	      }
	      this.isMoving = true;
	      var previousPage = this.currentPage;
	      var currentTabEl = this.$refs['wxc-tab-title-' + page][0];
	      var width = this.tabStyles.width;

	      var appearNum = parseInt(750 / width);
	      var tabsNum = this.tabTitles.length;
	      var offset = page > appearNum ? -(750 - width) / 2 : -width * 2;

	      if (appearNum < tabsNum) {
	        (previousPage > appearNum || page > 1) && dom.scrollToElement(currentTabEl, {
	          offset: offset, animated: animated
	        });

	        page <= 1 && previousPage > page && dom.scrollToElement(currentTabEl, {
	          offset: -width * page,
	          animated: animated
	        });
	      }

	      this.isMoving = false;
	      this.currentPage = page;

	      if (isIos) {
	        // 高版本ios 手淘上面会有不固定情况，hack一下
	        setTimeout(function () {
	          _this4._animateTransformX(page, animated);
	          _this4.$emit('wxcTabPageCurrentTabSelected', { page: page });
	        }, 10);
	      } else {
	        this._animateTransformX(page, animated);
	        this.$emit('wxcTabPageCurrentTabSelected', { page: page });
	      }
	    },
	    jumpOut: function jumpOut(url) {
	      url && _utils2.default.goToH5Page(url);
	    },
	    _animateTransformX: function _animateTransformX(page, animated) {
	      var duration = this.duration,
	          timingFunction = this.timingFunction;

	      var computedDur = animated ? duration : 0.00001;
	      var containerEl = this.$refs['tab-container'];
	      var dist = page * 750;
	      animation.transition(containerEl, {
	        styles: {
	          transform: 'translateX(' + -dist + 'px)'
	        },
	        duration: computedDur,
	        timingFunction: timingFunction,
	        delay: 0
	      }, function () {});
	    },
	    _onTouchStart: function _onTouchStart(e) {
	      if (supportsEB || !this.isTabView || !this.needSlider) {
	        return;
	      }
	      this.startPosX = this._getTouchXPos(e);
	      this.startPosY = this._getTouchYPos(e);
	      this.deltaX = 0;
	      this.startTime = new Date().getTime();
	    },
	    _onTouchMove: function _onTouchMove(e) {
	      if (supportsEB || !this.isTabView || !this.needSlider) {
	        return;
	      }
	      this.deltaX = this._getTouchXPos(e) - this.startPosX;
	      this.deltaY = Math.abs(this._getTouchYPos(e) - this.startPosY + 1);
	      if (this.judge === 'INITIAL' && Math.abs(this.deltaX) / this.deltaY > 1.73) {
	        this.judge = 'SLIDE_ING';
	      }
	    },
	    _onTouchEnd: function _onTouchEnd() {
	      if (supportsEB || !this.isTabView || !this.needSlider) {
	        return;
	      }
	      if (this.judge === 'SLIDE_ING') {
	        if (this.deltaX < -50) {
	          this.next();
	        } else if (this.deltaX > 50) {
	          this.prev();
	        }
	      }
	      this.judge = 'INITIAL';
	    },
	    _getTouchXPos: function _getTouchXPos(e) {
	      return e.changedTouches[0]['pageX'];
	    },
	    _getTouchYPos: function _getTouchYPos(e) {
	      return e.changedTouches[0]['pageY'];
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 290 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-tab-page"],
	    style: {
	      height: (_vm.tabPageHeight) + 'px',
	      backgroundColor: _vm.wrapBgColor
	    }
	  }, [_c('scroller', {
	    ref: "tab-title-list",
	    staticClass: ["tab-title-list"],
	    style: {
	      backgroundColor: _vm.tabStyles.bgColor,
	      height: (_vm.tabStyles.height) + 'px',
	      paddingLeft: _vm.tabStyles.leftOffset + 'px'
	    },
	    attrs: {
	      "showScrollbar": false,
	      "scrollDirection": "horizontal",
	      "dataSpm": _vm.spmC
	    }
	  }, _vm._l((_vm.tabTitles), function(v, index) {
	    return _c('div', {
	      key: index,
	      ref: 'wxc-tab-title-' + index,
	      refInFor: true,
	      staticClass: ["title-item"],
	      style: {
	        width: _vm.tabStyles.width + 'px',
	        height: _vm.tabStyles.height + 'px',
	        backgroundColor: _vm.currentPage == index ? _vm.tabStyles.activeBgColor : _vm.tabStyles.bgColor
	      },
	      attrs: {
	        "accessible": true,
	        "ariaLabel": ("" + (v.title?v.title:'标签'+index))
	      },
	      on: {
	        "click": function($event) {
	          _vm.setPage(index, v.url)
	        }
	      }
	    }, [(_vm.titleType === 'icon' && !_vm.titleUseSlot) ? _c('image', {
	      style: {
	        width: _vm.tabStyles.iconWidth + 'px',
	        height: _vm.tabStyles.iconHeight + 'px'
	      },
	      attrs: {
	        "src": _vm.currentPage == index ? v.activeIcon : v.icon
	      }
	    }) : _vm._e(), (!_vm.titleUseSlot) ? _c('text', {
	      staticClass: ["tab-text"],
	      style: {
	        fontSize: _vm.tabStyles.fontSize + 'px',
	        fontWeight: (_vm.currentPage == index && _vm.tabStyles.isActiveTitleBold) ? 'bold' : 'normal',
	        color: _vm.currentPage == index ? _vm.tabStyles.activeTitleColor : _vm.tabStyles.titleColor,
	        paddingLeft: _vm.tabStyles.textPaddingLeft + 'px',
	        paddingRight: _vm.tabStyles.textPaddingRight + 'px'
	      }
	    }, [_vm._v(_vm._s(v.title))]) : _vm._e(), (_vm.tabStyles.hasActiveBottom && !_vm.titleUseSlot) ? _c('div', {
	      staticClass: ["border-bottom"],
	      style: {
	        width: _vm.tabStyles.activeBottomWidth + 'px',
	        left: (_vm.tabStyles.width - _vm.tabStyles.activeBottomWidth) / 2 + 'px',
	        height: _vm.tabStyles.activeBottomHeight + 'px',
	        backgroundColor: _vm.currentPage == index ? _vm.tabStyles.activeBottomColor : 'transparent'
	      }
	    }) : _vm._e(), (_vm.titleUseSlot) ? _vm._t(("tab-title-" + index)) : _vm._e()], 2)
	  })), _c('div', {
	    ref: "tab-page-wrap",
	    staticClass: ["tab-page-wrap"],
	    style: {
	      height: (_vm.tabPageHeight - _vm.tabStyles.height) + 'px'
	    },
	    attrs: {
	      "preventMoveEvent": true
	    },
	    on: {
	      "panstart": _vm._onTouchStart,
	      "panmove": _vm._onTouchMove,
	      "panend": _vm._onTouchEnd,
	      "horizontalpan": _vm.startHandler
	    }
	  }, [_c('div', {
	    ref: "tab-container",
	    staticClass: ["tab-container"]
	  }, [_vm._t("default")], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(292);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(293)
	)

	/* script */
	__vue_exports__ = __webpack_require__(294)

	/* template */
	var __vue_template__ = __webpack_require__(295)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-tab-bar/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5ed1c64f"
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


/***/ }),
/* 293 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-tab-page": {
	    "width": 750,
	    "flexDirection": "column"
	  },
	  "tab-title-list": {
	    "flexDirection": "row",
	    "justifyContent": "space-around"
	  },
	  "title-item": {
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "column",
	    "borderBottomStyle": "solid",
	    "position": "relative"
	  },
	  "tab-page-wrap": {
	    "width": 750,
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "tab-container": {
	    "flex": 1,
	    "flexDirection": "row",
	    "position": "absolute"
	  },
	  "tab-text": {
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  }
	}

/***/ }),
/* 294 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var dom = weex.requireModule('dom');
	var animation = weex.requireModule('animation');

	exports.default = {
	  props: {
	    tabTitles: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    tabStyles: {
	      type: Object,
	      default: function _default() {
	        return {
	          bgColor: '#FFFFFF',
	          titleColor: '#666666',
	          activeTitleColor: '#3D3D3D',
	          activeBgColor: '#FFFFFF',
	          isActiveTitleBold: true,
	          iconWidth: 70,
	          iconHeight: 70,
	          width: 160,
	          height: 120,
	          fontSize: 24,
	          activeBottomColor: '#FFC900',
	          activeBottomWidth: 120,
	          activeBottomHeight: 6,
	          textPaddingLeft: 10,
	          textPaddingRight: 10
	        };
	      }
	    },
	    titleType: {
	      type: String,
	      default: 'icon'
	    },
	    tabPageHeight: {
	      type: [String, Number],
	      default: 1334
	    },
	    isTabView: {
	      type: Boolean,
	      default: true
	    },
	    duration: {
	      type: [Number, String],
	      default: 300
	    },
	    timingFunction: {
	      type: String,
	      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
	    },
	    wrapBgColor: {
	      type: String,
	      default: '#f2f3f4'
	    }
	  },
	  data: function data() {
	    return {
	      currentPage: 0,
	      translateX: 0
	    };
	  },
	  methods: {
	    next: function next() {
	      var page = this.currentPage;
	      if (page < this.tabTitles.length - 1) {
	        page++;
	      }
	      this.setPage(page);
	    },
	    prev: function prev() {
	      var page = this.currentPage;
	      if (page > 0) {
	        page--;
	      }
	      this.setPage(page);
	    },
	    setPage: function setPage(page) {
	      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	      if (!this.isTabView) {
	        this.jumpOut(url);
	        return;
	      }
	      var previousPage = this.currentPage;
	      var currentTabEl = this.$refs['wxc-tab-title-' + page][0];
	      var width = this.tabStyles.width;

	      var appearNum = parseInt(750 / width);
	      var tabsNum = this.tabTitles.length;
	      var offset = page > appearNum ? -(750 - width) / 2 : -width * 2;

	      if (appearNum < tabsNum) {
	        (previousPage > appearNum || page > 1) && dom.scrollToElement(currentTabEl, {
	          offset: offset, animated: animated
	        });

	        page <= 1 && previousPage > page && dom.scrollToElement(currentTabEl, {
	          offset: -width * page,
	          animated: animated
	        });
	      }

	      this.currentPage = page;
	      this._animateTransformX(page, animated);
	      this.$emit('wxcTabBarCurrentTabSelected', { page: page });
	    },
	    jumpOut: function jumpOut(url) {
	      url && Utils.goToH5Page(url);
	    },
	    _animateTransformX: function _animateTransformX(page, animated) {
	      var duration = this.duration,
	          timingFunction = this.timingFunction;

	      var computedDur = animated ? duration : 0.00001;
	      var containerEl = this.$refs['tab-container'];
	      var dist = page * 750;
	      animation.transition(containerEl, {
	        styles: {
	          transform: 'translateX(' + -dist + 'px)'
	        },
	        duration: computedDur,
	        timingFunction: timingFunction,
	        delay: 0
	      }, function () {});
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 295 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-tab-page"],
	    style: {
	      height: (_vm.tabPageHeight) + 'px',
	      backgroundColor: _vm.wrapBgColor
	    }
	  }, [_c('div', {
	    ref: "tab-page-wrap",
	    staticClass: ["tab-page-wrap"],
	    style: {
	      height: (_vm.tabPageHeight - _vm.tabStyles.height) + 'px'
	    }
	  }, [_c('div', {
	    ref: "tab-container",
	    staticClass: ["tab-container"]
	  }, [_vm._t("default")], 2)]), _c('div', {
	    staticClass: ["tab-title-list"],
	    style: {
	      backgroundColor: _vm.tabStyles.bgColor,
	      height: (_vm.tabStyles.height) + 'px'
	    }
	  }, _vm._l((_vm.tabTitles), function(v, index) {
	    return _c('div', {
	      key: index,
	      ref: 'wxc-tab-title-' + index,
	      refInFor: true,
	      staticClass: ["title-item"],
	      style: {
	        width: _vm.tabStyles.width + 'px',
	        height: _vm.tabStyles.height + 'px',
	        backgroundColor: _vm.currentPage == index ? _vm.tabStyles.activeBgColor : _vm.tabStyles.bgColor
	      },
	      attrs: {
	        "accessible": true,
	        "ariaLabel": ("" + (v.title?v.title:'标签'+index))
	      },
	      on: {
	        "click": function($event) {
	          _vm.setPage(index, v.url)
	        }
	      }
	    }, [(_vm.titleType === 'icon') ? _c('image', {
	      style: {
	        width: _vm.tabStyles.iconWidth + 'px',
	        height: _vm.tabStyles.iconHeight + 'px'
	      },
	      attrs: {
	        "src": _vm.currentPage == index ? v.activeIcon : v.icon
	      }
	    }) : _vm._e(), _c('text', {
	      staticClass: ["tab-text"],
	      style: {
	        fontSize: _vm.tabStyles.fontSize + 'px',
	        fontWeight: (_vm.currentPage == index && _vm.tabStyles.isActiveTitleBold) ? 'bold' : 'normal',
	        color: _vm.currentPage == index ? _vm.tabStyles.activeTitleColor : _vm.tabStyles.titleColor,
	        paddingLeft: _vm.tabStyles.textPaddingLeft + 'px',
	        paddingRight: _vm.tabStyles.textPaddingRight + 'px'
	      }
	    }, [_vm._v(_vm._s(v.title))])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(297);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(298)
	)

	/* script */
	__vue_exports__ = __webpack_require__(299)

	/* template */
	var __vue_template__ = __webpack_require__(300)
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
	__vue_options__.__file = "/Users/jun/lyzzb_html/node_modules/weex-ui/packages/wxc-tag/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-eb258c64"
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


/***/ }),
/* 298 */
/***/ (function(module, exports) {

	module.exports = {
	  "wxc-tag": {
	    "alignItems": "flex-start"
	  },
	  "tag-item": {
	    "height": 24,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "overflow": "hidden",
	    "paddingBottom": 2
	  },
	  "tag-border": {
	    "borderBottomLeftRadius": 4,
	    "borderBottomRightRadius": 4,
	    "borderTopLeftRadius": 4,
	    "borderTopRightRadius": 4
	  },
	  "tag-hollow": {
	    "borderWidth": 1
	  },
	  "tag-image": {
	    "height": 24
	  },
	  "tag-special": {
	    "borderWidth": 1,
	    "flexDirection": "row"
	  },
	  "left-image": {
	    "width": 20,
	    "height": 20
	  },
	  "tag-left": {
	    "width": 24,
	    "height": 24,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "tag-text": {
	    "fontSize": 20,
	    "height": 22,
	    "lineHeight": 22,
	    "paddingLeft": 6,
	    "paddingRight": 6
	  }
	}

/***/ }),
/* 299 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'solid'
	    },
	    value: {
	      type: [String, Number],
	      default: '测试测试'
	    },
	    tagColor: {
	      type: String,
	      default: '#ff5000'
	    },
	    fontColor: {
	      type: String,
	      default: '#333'
	    },
	    specialIcon: {
	      type: String,
	      default: ''
	    },
	    img: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    showSolid: function showSolid() {
	      var type = this.type,
	          value = this.value;

	      return type === 'solid' && value !== '';
	    },
	    showHollow: function showHollow() {
	      var type = this.type,
	          value = this.value;

	      return type === 'hollow' && value !== '';
	    },
	    showSpecial: function showSpecial() {
	      var type = this.type,
	          value = this.value,
	          specialIcon = this.specialIcon;

	      return type === 'special' && value !== '' && specialIcon !== '';
	    },
	    showImage: function showImage() {
	      var type = this.type,
	          img = this.img;

	      return type === 'image' && img !== '';
	    },
	    tagTextStyle: function tagTextStyle() {
	      var tagColor = this.tagColor,
	          showSolid = this.showSolid;

	      return showSolid ? { backgroundColor: tagColor } : { borderColor: tagColor };
	    }
	  },
	  data: function data() {
	    return {
	      imgWidth: 90
	    };
	  },
	  methods: {
	    onLoad: function onLoad(e) {
	      if (e.success && e.size && e.size.naturalWidth > 0) {
	        var width = e.size.naturalWidth;
	        var height = e.size.naturalHeight;
	        this.imgWidth = width * (24 / height);
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 300 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wxc-tag"]
	  }, [(_vm.showSolid || _vm.showHollow) ? _c('div', {
	    class: ['tag-item', 'tag-border', _vm.showHollow && 'tag-hollow'],
	    style: _vm.tagTextStyle
	  }, [_c('text', {
	    staticClass: ["tag-text"],
	    style: {
	      color: _vm.fontColor
	    }
	  }, [_vm._v(_vm._s(_vm.value))])]) : _vm._e(), (_vm.showImage) ? _c('image', {
	    staticClass: ["tag-image"],
	    style: {
	      width: _vm.imgWidth
	    },
	    attrs: {
	      "src": _vm.img,
	      "ariaHidden": true
	    },
	    on: {
	      "load": _vm.onLoad
	    }
	  }) : _vm._e(), (_vm.showSpecial) ? _c('div', {
	    staticClass: ["tag-special", "tag-border"],
	    style: {
	      borderColor: _vm.tagColor
	    },
	    attrs: {
	      "accessible": true,
	      "ariaLabel": _vm.value
	    }
	  }, [_c('div', {
	    staticClass: ["tag-left"],
	    style: {
	      backgroundColor: _vm.tagColor
	    }
	  }, [_c('image', {
	    staticClass: ["left-image"],
	    attrs: {
	      "src": _vm.specialIcon
	    }
	  })]), _c('text', {
	    staticClass: ["tag-text"],
	    style: {
	      color: _vm.fontColor
	    }
	  }, [_vm._v(_vm._s(_vm.value))])]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 301 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('wxc-ep-slider', {
	    attrs: {
	      "sliderId": _vm.sliderId,
	      "cardLength": _vm.cardLength,
	      "cardS": _vm.cardSize,
	      "selectIndex": 0,
	      "enableSwipe": true
	    },
	    on: {
	      "wxcEpSliderCurrentIndexSelected": _vm.wxcEpSliderCurrentIndexSelected
	    }
	  }, _vm._l(([1, 2, 3, 4, 5]), function(v, index) {
	    return _c('div', {
	      key: index,
	      class: ['slider', ("slider" + index)],
	      slot: ("card" + index + "_" + _vm.sliderId)
	    }, [_c('text', [_vm._v("这里是第" + _vm._s(index + 1) + "个滑块")])])
	  }))], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);