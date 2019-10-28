(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function createImg(src) {
  var onLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var img = new Image();
  img.onload = onLoad;
  img.src = src;
  return img;
}

function isElementInViewport(el) {
  if (!el || typeof window === 'undefined') {
    return false;
  }

  var rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

var LazyImage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(LazyImage, _Component);

  function LazyImage(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, LazyImage);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(LazyImage).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "loadImg", function () {
      // set visible
      _this.setState({
        visible: true
      }); // create img element


      _this.img = createImg(_this.props.src, _this.onLoad);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "onChange", function (_ref) {
      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref, 1),
          entry = _ref2[0];

      if (entry.isIntersecting) {
        // init & load img src
        _this.loadImg(); // stop observing and marks visible


        _this.observer.disconnect();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "onLoad", function () {
      _this.setState({
        loaded: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "getImgSrc", function (loaded) {
      var _this$props = _this.props,
          src = _this$props.src,
          placeholder = _this$props.placeholder;
      return loaded ? src : placeholder;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "getSrcSet", function (loaded) {
      if (!loaded) return undefined;
      var srcSet = _this.props.srcSet;
      return srcSet && srcSet.map(function (set) {
        return "".concat(set.src, " ").concat(set.width, "w");
      }).join(',');
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "getStyle", function (loaded) {
      var _this$props2 = _this.props,
          style = _this$props2.style,
          placeholderStyle = _this$props2.placeholderStyle;
      return loaded ? style : _objectSpread({}, style, {}, placeholderStyle);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "getClassName", function (loaded) {
      var _this$props3 = _this.props,
          className = _this$props3.className,
          placeholderClassName = _this$props3.placeholderClassName;
      return loaded ? className : className + ' ' + placeholderClassName;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "getImgProps", function () {
      var loaded = _this.state.loaded;

      var _this$props4 = _this.props,
          src = _this$props4.src,
          srcSet = _this$props4.srcSet,
          placeholder = _this$props4.placeholder,
          className = _this$props4.className,
          placeholderClassName = _this$props4.placeholderClassName,
          style = _this$props4.style,
          placeholderStyle = _this$props4.placeholderStyle,
          rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_this$props4, ["src", "srcSet", "placeholder", "className", "placeholderClassName", "style", "placeholderStyle"]);

      if (!_this.state.visible) {
        return _objectSpread({
          src: placeholder,
          style: _this.getStyle(false),
          className: _this.getClassName(false)
        }, rest);
      }

      return _objectSpread({
        src: _this.getImgSrc(loaded),
        srcSet: _this.getSrcSet(loaded),
        style: _this.getStyle(loaded),
        className: _this.getClassName(loaded)
      }, rest);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "setRef", function (node) {
      _this.target = node;
    });

    _this.state = {
      loaded: false,
      visible: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(LazyImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // small delay to ensures all variables are correct after page scrolled to top
      window.setTimeout(function () {
        // load img if IntersectionObserver is not supported OR element is already in viewport
        if (typeof window === 'undefined' || !('IntersectionObserver' in window) || isElementInViewport(_this2.target)) {
          _this2.loadImg();

          return;
        } // start observer


        _this2.observer = new IntersectionObserver(_this2.onChange, {
          root: null,
          rootMargin: '40px 0px 0px 0px',
          // TODO: make configurable
          threshold: [0]
        });

        _this2.observer.observe(_this2.target);
      }, 100);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.observer) this.observer.disconnect();
      if (this.img) this.img.remove();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        ref: this.setRef
      }, this.getImgProps()));
    }
  }]);

  return LazyImage;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(LazyImage, "defaultProps", {
  className: '',
  placeholderClassName: '',
  placeholderStyle: {
    // avoid bluring out of img frame
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    WebkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
  },
  srcSet: undefined
});

var LazyImage2 = function LazyImage2(_ref3) {
  var placeholder = _ref3.placeholder,
      preSrc = _ref3.preSrc,
      preview = _ref3.preview,
      trace = _ref3.trace,
      _ref3$clipPath = _ref3.clipPath,
      clipPath = _ref3$clipPath === void 0 ? true : _ref3$clipPath,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, ["placeholder", "preSrc", "preview", "trace", "clipPath"]);

  // `preSrc` is default key provided by lqip
  // `preview` is default key provided by sqip
  // `trace` is default key provided by image-trace-loader
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(LazyImage, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    placeholder: placeholder || preSrc || preview || trace
  }, rest, !clipPath ? {
    placeholderStyle: {
      clipPath: '',
      WebkitClipPath: ''
    }
  } : {}));
};

/* harmony default export */ __webpack_exports__["a"] = (LazyImage2);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("linaria");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(18);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(41)("" + id);
  }

  return __webpack_require__('' + id);
};

exports.default = requireById;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(40);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(42);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});
exports.default = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(24);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(43);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(18);

var _helpers = __webpack_require__(44);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        }).catch(function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2.default)(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2.default)(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)(module)))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var linaria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var linaria__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(linaria__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);





var schedule = [{
  highlighted: false,
  time: '08:00',
  title: 'Check-in'
}, {
  highlighted: false,
  time: '08:45',
  title: 'Welcome'
}, {
  highlighted: false,
  time: '09:00',
  title: 'Opening Keynote',
  content: 'End the wars with Tanuki - Multiple programming languages in single web application.',
  speaker: {
    avatar: ['https://media.licdn.com/dms/image/C5103AQEzEldCV1TSIQ/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=4O2RyC1E6yXRiE75H2BxD8LBUBCH3GF_diCU7kGbiyY'],
    name: 'Sau Sheong Chang',
    position: 'CEO Singapore Power Digital, founder GopherCon Singapore'
  } // link: 'https://ask.gophercon.vn/event/FEDN',

}, {
  highlighted: false,
  time: '09:45',
  title: 'An Introduction to SRE at Google (with DevOps Focus)',
  content: 'You may have heard about SRE - Site Reliability Engineering. But what is it actually? How is it related to DevOps and beneficial to Gopher community? My talk - An Introduction to SRE at Google (with DevOps Focus) will reveal the mystery about SRE world.',
  speaker: {
    avatar: ['https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/c269.60.425.425a/1924657_10152281666789761_245561942_n.jpg?_nc_cat=110&_nc_oc=AQlEXTBsAj3QmNSw5TfMa9__1KIeEdHWlKp17sBGdd4ZO2Etj-DPm_WA945BjeJAo3w&_nc_ht=scontent.fsgn5-3.fna&oh=932d1199b81e5b07a97acc6be518d3fc&oe=5E29FF6A'],
    name: 'Thang Le',
    position: 'SRE Engineer at Google'
  } // link: 'https://ask.gophercon.vn/event/VGAF',

}, {
  highlighted: false,
  time: '10:30',
  title: 'Flowing with Go Context',
  content: 'In this session, we will observe how a flowing context can help you optimize the resource usage of your server and enables context-based programming. We will dive deeper into how context package works and why it is present in the Go as a native package at first place. We will see different use cases of Context package and the do’s and don’ts being followed among the Gophers.',
  speaker: {
    avatar: ['https://media.licdn.com/dms/image/C5103AQGQAgRJIRimHw/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=6wZhbMHzhl3GliLbuuCntvAvR4NCOkomdHyPfnfmIO8'],
    name: 'Yashish Dua',
    position: 'Platform Engineer at Postman'
  } // link: 'https://ask.gophercon.vn/event/RDKD',

}, {
  highlighted: false,
  time: '11:00',
  title: 'A colorful journey of be from NodeJS to Go',
  content: 'Sooner or later, everyone of us, must face a beast, called legacy, the code maintained by someone not the author. Let me tell you how we face and beat it, a journey from a black hole 100k LOC monolithic application to 100+ microservices',
  speaker: {
    avatar: ['https://i.imgur.com/w7zzT6s.jpg'],
    name: 'Thach Le',
    position: 'Engineer Manager at BEGROUP'
  } // link: 'https://ask.gophercon.vn/event/KIRP',

}, {
  highlighted: false,
  time: '11:45',
  title: '[Lightning Talk] A practical way to generate unique id with Go',
  content: 'Unique ID generation is variant and not so simple to fit with what the system wants. In this talk, I’ll talk about how my team designed and implemented a custom Unique ID generation method, that fits our requirements, and powers all service-to-service request’s id in my company.',
  speaker: {
    avatar: ['https://s3-ap-southeast-1.amazonaws.com/kipalog.com/eudn8m23lh_IMG_1104.JPG'],
    name: 'Manh Dao',
    position: 'Software Engineer at Money Forward'
  } // link: 'https://ask.gophercon.vn/event/KIRP',

}, {
  highlighted: false,
  time: '12:00',
  title: 'Lunch'
}, {
  highlighted: false,
  time: '13:00',
  title: 'Introduction to NATS: A high-performance messaging system as a solution for communication between services',
  content: 'The NATS project has been around since 2010, but it has become more popular in recent years due to how well it fits into the paradigm of cloud-native applications, and microservices architectures. This talk will introduce NATS using Go and our stories using NATS in production at kumparan.',
  speaker: {
    avatar: ['https://media.licdn.com/dms/image/C5603AQHE52dBt6aMQg/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=fLYg1Yl3LOB1RU7OKrBml-ymOt-4eIEKnej856r7MPM'],
    name: 'Doni Rubiagatra',
    position: 'Software Engineer at kumparan, Cofounder Golang Surabya'
  } // link: 'https://ask.gophercon.vn/event/NXCE',

}, {
  highlighted: false,
  time: '13:45',
  title: 'How to leverage Gunk - the Go-derived syntax for Protocol Buffers to massively write microservices',
  content: 'Introduce how using Gunk, a modern frontend and syntax for Google’s Protocol Buffers that is instantly familiar and accessible to Go developers. Gunk builds on the venerable Go tooling – including versioning with Go modules, and a Go-derived syntax – to create streamlined, project-based workflows for building REST and gRPC services.',
  speaker: {
    avatar: ['https://media.licdn.com/dms/image/C5603AQEyhtpT6Gb2lg/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=6iHDm1mqwV4uF6JsKOJx-S4WEnrcNNraInjKSADmnN8'],
    name: 'Ken Shaw',
    position: 'CTO Brank.as'
  } // link: 'https://ask.gophercon.vn/event/VIOB',

}, {
  highlighted: false,
  time: '14:30',
  title: "\u0995\u09B0\u09CB: Translating Go to Other (Human) Languages, and Back Again",
  content: 'This talk shows the necessary steps for translating Go to other languages. It focuses mostly on the technical (compiler + toolchain) aspects, but it also highlights some techniques for localizing aspects like comments, documentation, and support mailing lists. This talk is also an excuse to show off Go’s support for UTF-8, as well as to highlight the unique way that Go handles bytes and strings under the hood. ',
  speaker: {
    avatar: ['https://media.licdn.com/dms/image/C4D03AQF2t2pUB7VIFA/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=zj2hM7Aa7kn0po57c8UpL4il4ncW473Llim2TvmEMs0'],
    name: 'Aditya Mukerjee',
    position: 'Software Engineer at Stripe'
  } // link: 'https://ask.gophercon.vn/event/YOXH',

}, {
  highlighted: false,
  time: '15:15',
  title: "Why you can't use GO ! (away from anti patterns)",
  content: 'We’ve seen Go being used widely in high performant backend applications, gRPC, embedded systems and so on. Not Choosing Go, needs more understanding and convincing. Obvious thing would be reflection, Will see use case and code, also will cover how go differs from our assumption.',
  speaker: {
    avatar: ['https://s3-ap-southeast-1.amazonaws.com/kipalog.com/d56qbrt37s_speaker.jpg', 'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/ciq7zh3b5p_PROFILE_PIC.jpg'],
    name: 'Dinesh Kumar and Maulik Soneji',
    position: 'Product Engineers at GoJek'
  } // link: 'https://ask.gophercon.vn/event/YOXH',

}, {
  highlighted: false,
  time: '16:00',
  title: 'Overcoming latency, How we build a Cloud Game service with Go',
  content: 'CloudGaming is the new buzzword recently with the participation of Google Stadia, Microsoft Xcloud. Behind Cloud Gaming is the art of super-low latency media streaming. Let’s find out how I can use Golang stack to create a Cloud Gaming platform that can bring the smoothest gaming experience.',
  speaker: {
    avatar: ['https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-1/50655434_1967490259964988_7169114008383913984_o.jpg?_nc_cat=103&_nc_oc=AQldMVbt1jIipW1PXSg2qbwtmxKPpoKvNnrpb7-AuQ6TL5HTp_A9sz7BpEFT5Ci0n80&_nc_ht=scontent.fsgn5-7.fna&oh=a934303008bbf151e3f92594acaab4a6&oe=5E2B6863', 'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/t3793ll1xn_72115278_2467426763537614_1520100230131875840_n.png'],
    name: 'Thanh Nguyen and Minh Tri',
    position: 'Software Engineer at Grab and Shopee'
  } // link: 'https://ask.gophercon.vn/event/KYMW',

}, {
  highlighted: true,
  time: '16:45',
  title: 'Closing talk' // desc:
  //   'Writing Microservices which can withstand the unpredictable nature of the production environment at scale is a non-trivial task. Certain practices can help make our systems 6 predictable, transparent and resilient. For developers this means more confident and continuous deployments.',
  // speaker: {
  //   avatar:
  //     'https://secure.gravatar.com/avatar/15a0a233d3bf86fea7bbaa525f33897d?s=500',
  //   name: 'Rajeev N Bharshetty',
  //   desc: 'Product Engineer @ GO-JEK',
  // },
  // link: 'https://ask.gophercon.vn/event/GYWJ',

}, {
  highlighted: false,
  time: '17:30',
  title: 'Closing'
}];

var Schedule = function Schedule(_ref) {
  var rest = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

  var isRemoteSrc = function isRemoteSrc(path) {
    return String(path).substr(0, 4) === 'http';
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "page-section container pt-16 md:pt-24"
  }, rest), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row md:col text-grey"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "container font-bold text-3xl md:text-5xl text-primary border-b pb-10"
  }, "Schedule"), schedule.map(function (s, key) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: key,
      className: "container xs:flex xs:justify-start py-10 border-b"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "text-xl md:text-4xl font-bold w-1/4"
    }, s.time), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "xs:w-3/4 flex flex-col justify-center"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "text-xl md:text-2xl font-bold"
    }, s.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "text-base"
    }, s.content), s.speaker && s.speaker.avatar.length > 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "flex justify-between"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "flex flex-wrap items-center"
    }, s.speaker.avatar.map(function (avatar, index) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "mt-4",
        key: index
      }, !isRemoteSrc(avatar) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_LazyImage__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: "w-16 h-16 mr-4 flex-shrink-0 object-cover"
      }, __webpack_require__(25)("".concat(avatar, "")))), isRemoteSrc(avatar) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        className: "w-16 h-16 mr-4 rounded-full flex-shrink-0 object-cover",
        src: avatar
      }));
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "flex flex-col mt-4"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "font-bold"
    }, s.speaker.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, s.speaker.position))),  false && false)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
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

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(10);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ngochangjelly_Desktop_gophercon_landing_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _Users_ngochangjelly_Desktop_gophercon_landing_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ngochangjelly_Desktop_gophercon_landing_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "/Users/ngochangjelly/Desktop/gophercon-landing/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _Users_ngochangjelly_Desktop_gophercon_landing_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "/Users/ngochangjelly/Desktop/gophercon-landing/node_modules/react-static-plugin-favicons",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/ngochangjelly/Desktop/gophercon-landing",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("/Users/ngochangjelly/Desktop/gophercon-landing/node_modules/react-static/lib/browser");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_ngochangjelly_Desktop_gophercon_landing_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _Users_ngochangjelly_Desktop_gophercon_landing_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_ngochangjelly_Desktop_gophercon_landing_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);






Object(_Users_ngochangjelly_Desktop_gophercon_landing_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_ngochangjelly_Desktop_gophercon_landing_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/ngochangjelly/Desktop/gophercon-landing/src/pages/404 */).then(__webpack_require__.bind(null, 28))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return "Users/ngochangjelly/Desktop/gophercon-landing/src/pages/404";
  }
}), universalOptions);
t_0.template = '/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/404';
var t_1 = _Users_ngochangjelly_Desktop_gophercon_landing_node_modules_react_static_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home */).then(__webpack_require__.bind(null, 27))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return "Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home";
  }
}), universalOptions);
t_1.template = '/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/404': t_0,
  '/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home': t_1
}); // Not Found Template

var notFoundTemplate = "/Users/ngochangjelly/Desktop/gophercon-landing/src/pages/404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 12,
	"./": 12,
	"./Step": 26,
	"./Step.js": 26,
	"./images/ava.png": 51,
	"./images/ventures-logo.svg": 52,
	"./index": 12,
	"./index.js": 12
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 25;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var linaria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var linaria__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(linaria__WEBPACK_IMPORTED_MODULE_2__);




var Step = function Step(_ref) {
  var children = _ref.children,
      _ref$stepGuideClassNa = _ref.stepGuideClassName,
      stepGuideClassName = _ref$stepGuideClassNa === void 0 ? 'h-full' : _ref$stepGuideClassNa;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "relative"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-none",
    "aria-hidden": "true"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("absolute", "ddxdtc9", stepGuideClassName),
    "aria-hidden": "true"
  })), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Step);

__webpack_require__(50);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(9);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(1);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "linaria"
var external_linaria_ = __webpack_require__(5);

// EXTERNAL MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/components/LazyImage.js
var LazyImage = __webpack_require__(3);

// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/components/Schedule/index.js





var schedule = [{
  highlighted: false,
  time: '08:00',
  title: 'Check-in'
}, {
  highlighted: false,
  time: '08:45',
  title: 'Welcome'
}, {
  highlighted: false,
  time: '09:00',
  title: 'Opening Keynote',
  content: 'End the wars with Tanuki - Multiple programming languages in single web application.',
  speaker: {
    avatar: ['https://media.licdn.com/dms/image/C5103AQEzEldCV1TSIQ/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=4O2RyC1E6yXRiE75H2BxD8LBUBCH3GF_diCU7kGbiyY'],
    name: 'Sau Sheong Chang',
    position: 'CEO Singapore Power Digital, founder GopherCon Singapore'
  } // link: 'https://ask.gophercon.vn/event/FEDN',

}, {
  highlighted: false,
  time: '09:45',
  title: 'An Introduction to SRE at Google (with DevOps Focus)',
  content: 'You may have heard about SRE - Site Reliability Engineering. But what is it actually? How is it related to DevOps and beneficial to Gopher community? My talk - An Introduction to SRE at Google (with DevOps Focus) will reveal the mystery about SRE world.',
  speaker: {
    avatar: ['https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/c269.60.425.425a/1924657_10152281666789761_245561942_n.jpg?_nc_cat=110&_nc_oc=AQlEXTBsAj3QmNSw5TfMa9__1KIeEdHWlKp17sBGdd4ZO2Etj-DPm_WA945BjeJAo3w&_nc_ht=scontent.fsgn5-3.fna&oh=932d1199b81e5b07a97acc6be518d3fc&oe=5E29FF6A'],
    name: 'Thang Le',
    position: 'SRE Engineer at Google'
  } // link: 'https://ask.gophercon.vn/event/VGAF',

}, {
  highlighted: false,
  time: '10:30',
  title: 'Flowing with Go Context',
  content: 'In this session, we will observe how a flowing context can help you optimize the resource usage of your server and enables context-based programming. We will dive deeper into how context package works and why it is present in the Go as a native package at first place. We will see different use cases of Context package and the do’s and don’ts being followed among the Gophers.',
  speaker: {
    avatar: ['https://media.licdn.com/dms/image/C5103AQGQAgRJIRimHw/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=6wZhbMHzhl3GliLbuuCntvAvR4NCOkomdHyPfnfmIO8'],
    name: 'Yashish Dua',
    position: 'Platform Engineer at Postman'
  } // link: 'https://ask.gophercon.vn/event/RDKD',

}, {
  highlighted: false,
  time: '11:00',
  title: 'A colorful journey of be from NodeJS to Go',
  content: 'Sooner or later, everyone of us, must face a beast, called legacy, the code maintained by someone not the author. Let me tell you how we face and beat it, a journey from a black hole 100k LOC monolithic application to 100+ microservices',
  speaker: {
    avatar: ['https://i.imgur.com/w7zzT6s.jpg'],
    name: 'Thach Le',
    position: 'Engineer Manager at BEGROUP'
  } // link: 'https://ask.gophercon.vn/event/KIRP',

}, {
  highlighted: false,
  time: '11:45',
  title: '[Lightning Talk] A practical way to generate unique id with Go',
  content: 'Unique ID generation is variant and not so simple to fit with what the system wants. In this talk, I’ll talk about how my team designed and implemented a custom Unique ID generation method, that fits our requirements, and powers all service-to-service request’s id in my company.',
  speaker: {
    avatar: ['https://s3-ap-southeast-1.amazonaws.com/kipalog.com/eudn8m23lh_IMG_1104.JPG'],
    name: 'Manh Dao',
    position: 'Software Engineer at Money Forward'
  } // link: 'https://ask.gophercon.vn/event/KIRP',

}, {
  highlighted: false,
  time: '12:00',
  title: 'Lunch'
}, {
  highlighted: false,
  time: '13:00',
  title: 'Introduction to NATS: A high-performance messaging system as a solution for communication between services',
  content: 'The NATS project has been around since 2010, but it has become more popular in recent years due to how well it fits into the paradigm of cloud-native applications, and microservices architectures. This talk will introduce NATS using Go and our stories using NATS in production at kumparan.',
  speaker: {
    avatar: ['https://media.licdn.com/dms/image/C5603AQHE52dBt6aMQg/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=fLYg1Yl3LOB1RU7OKrBml-ymOt-4eIEKnej856r7MPM'],
    name: 'Doni Rubiagatra',
    position: 'Software Engineer at kumparan, Cofounder Golang Surabya'
  } // link: 'https://ask.gophercon.vn/event/NXCE',

}, {
  highlighted: false,
  time: '13:45',
  title: 'How to leverage Gunk - the Go-derived syntax for Protocol Buffers to massively write microservices',
  content: 'Introduce how using Gunk, a modern frontend and syntax for Google’s Protocol Buffers that is instantly familiar and accessible to Go developers. Gunk builds on the venerable Go tooling – including versioning with Go modules, and a Go-derived syntax – to create streamlined, project-based workflows for building REST and gRPC services.',
  speaker: {
    avatar: ['https://media.licdn.com/dms/image/C5603AQEyhtpT6Gb2lg/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=6iHDm1mqwV4uF6JsKOJx-S4WEnrcNNraInjKSADmnN8'],
    name: 'Ken Shaw',
    position: 'CTO Brank.as'
  } // link: 'https://ask.gophercon.vn/event/VIOB',

}, {
  highlighted: false,
  time: '14:30',
  title: "\u0995\u09B0\u09CB: Translating Go to Other (Human) Languages, and Back Again",
  content: 'This talk shows the necessary steps for translating Go to other languages. It focuses mostly on the technical (compiler + toolchain) aspects, but it also highlights some techniques for localizing aspects like comments, documentation, and support mailing lists. This talk is also an excuse to show off Go’s support for UTF-8, as well as to highlight the unique way that Go handles bytes and strings under the hood. ',
  speaker: {
    avatar: ['https://media.licdn.com/dms/image/C4D03AQF2t2pUB7VIFA/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=zj2hM7Aa7kn0po57c8UpL4il4ncW473Llim2TvmEMs0'],
    name: 'Aditya Mukerjee',
    position: 'Software Engineer at Stripe'
  } // link: 'https://ask.gophercon.vn/event/YOXH',

}, {
  highlighted: false,
  time: '15:15',
  title: "Why you can't use GO ! (away from anti patterns)",
  content: 'We’ve seen Go being used widely in high performant backend applications, gRPC, embedded systems and so on. Not Choosing Go, needs more understanding and convincing. Obvious thing would be reflection, Will see use case and code, also will cover how go differs from our assumption.',
  speaker: {
    avatar: ['https://s3-ap-southeast-1.amazonaws.com/kipalog.com/d56qbrt37s_speaker.jpg', 'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/ciq7zh3b5p_PROFILE_PIC.jpg'],
    name: 'Dinesh Kumar and Maulik Soneji',
    position: 'Product Engineers at GoJek'
  } // link: 'https://ask.gophercon.vn/event/YOXH',

}, {
  highlighted: false,
  time: '16:00',
  title: 'Overcoming latency, How we build a Cloud Game service with Go',
  content: 'CloudGaming is the new buzzword recently with the participation of Google Stadia, Microsoft Xcloud. Behind Cloud Gaming is the art of super-low latency media streaming. Let’s find out how I can use Golang stack to create a Cloud Gaming platform that can bring the smoothest gaming experience.',
  speaker: {
    avatar: ['https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-1/50655434_1967490259964988_7169114008383913984_o.jpg?_nc_cat=103&_nc_oc=AQldMVbt1jIipW1PXSg2qbwtmxKPpoKvNnrpb7-AuQ6TL5HTp_A9sz7BpEFT5Ci0n80&_nc_ht=scontent.fsgn5-7.fna&oh=a934303008bbf151e3f92594acaab4a6&oe=5E2B6863', 'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/t3793ll1xn_72115278_2467426763537614_1520100230131875840_n.png'],
    name: 'Thanh Nguyen and Minh Tri',
    position: 'Software Engineer at Grab and Shopee'
  } // link: 'https://ask.gophercon.vn/event/KYMW',

}, {
  highlighted: true,
  time: '16:45',
  title: 'Closing talk' // desc:
  //   'Writing Microservices which can withstand the unpredictable nature of the production environment at scale is a non-trivial task. Certain practices can help make our systems 6 predictable, transparent and resilient. For developers this means more confident and continuous deployments.',
  // speaker: {
  //   avatar:
  //     'https://secure.gravatar.com/avatar/15a0a233d3bf86fea7bbaa525f33897d?s=500',
  //   name: 'Rajeev N Bharshetty',
  //   desc: 'Product Engineer @ GO-JEK',
  // },
  // link: 'https://ask.gophercon.vn/event/GYWJ',

}, {
  highlighted: false,
  time: '17:30',
  title: 'Closing'
}];

var Schedule_Schedule = function Schedule(_ref) {
  var rest = extends_default()({}, _ref);

  var isRemoteSrc = function isRemoteSrc(path) {
    return String(path).substr(0, 4) === 'http';
  };

  return external_react_default.a.createElement("div", extends_default()({
    className: "page-section container pt-16 md:pt-24"
  }, rest), external_react_default.a.createElement("div", {
    className: "row md:col text-grey"
  }, external_react_default.a.createElement("div", {
    className: "container font-bold text-3xl md:text-5xl text-primary border-b pb-10"
  }, "Schedule"), schedule.map(function (s, key) {
    return external_react_default.a.createElement("div", {
      key: key,
      className: "container xs:flex xs:justify-start py-10 border-b"
    }, external_react_default.a.createElement("div", {
      className: "text-xl md:text-4xl font-bold w-1/4"
    }, s.time), external_react_default.a.createElement("div", {
      className: "xs:w-3/4 flex flex-col justify-center"
    }, external_react_default.a.createElement("div", {
      className: "text-xl md:text-2xl font-bold"
    }, s.title), external_react_default.a.createElement("div", {
      className: "text-base"
    }, s.content), s.speaker && s.speaker.avatar.length > 0 && external_react_default.a.createElement("div", {
      className: "flex justify-between"
    }, external_react_default.a.createElement("div", {
      className: "flex flex-wrap items-center"
    }, s.speaker.avatar.map(function (avatar, index) {
      return external_react_default.a.createElement("div", {
        className: "mt-4",
        key: index
      }, !isRemoteSrc(avatar) && external_react_default.a.createElement(LazyImage["a" /* default */], extends_default()({
        className: "w-16 h-16 mr-4 flex-shrink-0 object-cover"
      }, __webpack_require__(25)("".concat(avatar, "")))), isRemoteSrc(avatar) && external_react_default.a.createElement("img", {
        className: "w-16 h-16 mr-4 rounded-full flex-shrink-0 object-cover",
        src: avatar
      }));
    }), external_react_default.a.createElement("div", {
      className: "flex flex-col mt-4"
    }, external_react_default.a.createElement("div", {
      className: "font-bold"
    }, s.speaker.name), external_react_default.a.createElement("div", null, s.speaker.position))),  false && false)));
  })));
};

/* harmony default export */ var components_Schedule = (Schedule_Schedule);
// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/components/Sponsors/index.js




var rows = [{
  name: 'Platinum',
  sponsors: [{
    href: 'https://www.chotot.com/',
    image: 'chotot'
  }, {
    href: 'https://www.be.xyz',
    image: 'be'
  }, {
    href: 'https://brank.as',
    image: 'brankas'
  }, {
    href: 'https://ghn.vn/',
    image: 'ghn'
  }]
}, {
  name: 'Gold',
  sponsors: [{
    href: 'https://global.axon.com/',
    image: 'axon'
  }, // {
  //   href: 'https://www.grab.com/',
  //   image: 'grab',
  // },
  {
    href: 'https://www.vng.com.vn/',
    image: 'vng'
  }, {
    href: 'https://www.ninjavan.co/vi-vn',
    image: 'ninja-van'
  }]
}, {
  name: 'Silver',
  sponsors: [{
    href: 'https://dwarves.foundation',
    image: 'dwarves'
  }, {
    href: 'https://corp.moneyforward.com/en/',
    image: 'money-forward'
  }]
}, {
  name: 'Supporters',
  sponsors: [{
    href: 'https://webuild.community',
    image: 'webuild'
  }, {
    href: 'https://gdgvietnam.com/',
    image: 'gdg'
  }, {
    href: 'http://www.coderschool.vn/',
    image: 'coderschool'
  }, {
    href: 'https://circo.co',
    image: 'circo'
  }, {
    href: 'https://www.grokking.org',
    image: 'grokking'
  }]
}];

var Sponsors_Sponsors = function Sponsors(_ref) {
  var rest = extends_default()({}, _ref);

  return external_react_default.a.createElement("div", extends_default()({
    className: "page-section py-16 md:py-24 lg:py-25"
  }, rest), external_react_default.a.createElement("div", {
    className: "container text-grey"
  }, external_react_default.a.createElement("div", {
    className: "mb-16 text-center  md:flex md:justify-between md:items-center"
  }, external_react_default.a.createElement("div", {
    className: external_classnames_default()('text-3xl text-center md:text-left md:text-5xl text-primary font-bold mb-4 md:mb-0')
  }, "Sponsors")), rows.map(function (_ref2) {
    var name = _ref2.name,
        sponsors = _ref2.sponsors;
    return external_react_default.a.createElement("div", {
      className: "container flex flex-wrap",
      key: name
    }, external_react_default.a.createElement("div", {
      className: "w-full"
    }, external_react_default.a.createElement("h4", {
      className: "font-bold mb-10 text-2xl text-center sm:text-left"
    }, name)), sponsors.map(function (_ref3) {
      var name = _ref3.name,
          href = _ref3.href,
          image = _ref3.image,
          key = _ref3.key;
      return external_react_default.a.createElement("div", {
        className: external_classnames_default()('col w-full sm:container sm:w-32 sm:h-32 md:w-1/5 sm:h-auto py-4 mb-8 flex items-center  border', key !== sponsors.length && 'sm:mr-4', "d15l8kms"),
        key: image
      }, external_react_default.a.createElement("a", {
        href: href,
        target: "__blank"
      }, external_react_default.a.createElement("img", {
        alt: name,
        className: "bw-hover object-fit",
        src: "/images/".concat(image, "_shrink.png"),
        srcSet: "/images/".concat(image, "@2x_shrink.png 2x")
      })));
    }));
  })));
};

/* harmony default export */ var components_Sponsors = (Sponsors_Sponsors);

__webpack_require__(53);
// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/components/Speakers/speakers.js



var speakers = [{
  avatar: function avatar(props) {
    return external_react_default.a.createElement(LazyImage["a" /* default */], extends_default()({}, props, __webpack_require__(54)));
  },
  name: 'Sau Sheong Chang',
  position: 'CEO Singapore Power Digital, founder GopherCon Singapore'
}, {
  avatar: function avatar(props) {
    return external_react_default.a.createElement(LazyImage["a" /* default */], extends_default()({}, props, __webpack_require__(55)));
  },
  name: 'Thang Le',
  position: 'SRE Engineer at Google'
}, {
  avatar: function avatar(props) {
    return external_react_default.a.createElement(LazyImage["a" /* default */], extends_default()({}, props, __webpack_require__(56)));
  },
  name: 'Yashish Dua',
  position: 'Platform Engineer at Postman'
}, {
  avatar: function avatar(props) {
    return external_react_default.a.createElement(LazyImage["a" /* default */], extends_default()({}, props, __webpack_require__(57)));
  },
  name: 'Thach Le',
  position: 'Engineer Manager at BEGROUP'
}, {
  avatar: function avatar(props) {
    return external_react_default.a.createElement(LazyImage["a" /* default */], extends_default()({}, props, __webpack_require__(58)));
  },
  name: 'Dinesh Kumar and Maulik Soneji',
  position: 'Product Engineers at GoJek'
}, {
  avatar: function avatar(props) {
    return external_react_default.a.createElement(LazyImage["a" /* default */], extends_default()({}, props, __webpack_require__(59)));
  },
  name: 'Doni Rubiagatra',
  position: 'Software Engineer at kumparan, Cofounder Golang Surabya'
}, {
  avatar: function avatar(props) {
    return external_react_default.a.createElement(LazyImage["a" /* default */], extends_default()({}, props, __webpack_require__(60)));
  },
  name: 'Ken Shaw',
  position: 'CTO Brank.as'
}, {
  avatar: function avatar(props) {
    return external_react_default.a.createElement(LazyImage["a" /* default */], extends_default()({}, props, __webpack_require__(61)));
  },
  name: 'Aditya Mukerjee',
  position: 'Software Engineer at Stripe'
}, {
  avatar: function avatar(props) {
    return external_react_default.a.createElement(LazyImage["a" /* default */], extends_default()({}, props, __webpack_require__(62)));
  },
  name: 'Thanh Nguyen',
  position: 'Software Engineer at Grab'
}, {
  avatar: function avatar(props) {
    return external_react_default.a.createElement(LazyImage["a" /* default */], extends_default()({}, props, __webpack_require__(63)));
  },
  name: 'Manh Dao',
  position: 'Software Engineer at Money Forward'
}];
/* harmony default export */ var Speakers_speakers = (speakers);
// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/components/Speakers/index.js






var Speakers_Speakers = function Speakers(_ref) {
  var rest = extends_default()({}, _ref);

  return external_react_default.a.createElement("div", extends_default()({
    className: 'page-section pt-16 md:pt-24 bg-primary'
  }, rest), external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: external_classnames_default()('mb-16 md:flex md:justify-between md:items-center')
  }, external_react_default.a.createElement("div", {
    className: external_classnames_default()('text-3xl md:text-5xl text-white font-bold mb-4 md:mb-0')
  }, "Speakers"))), external_react_default.a.createElement("div", {
    className: external_classnames_default()('w-full overflow-x-scroll', "dn09ay2")
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("ul", {
    className: "inline-flex",
    id: "flavoursContainer"
  }, Speakers_speakers && Speakers_speakers.map(function (s, key) {
    return external_react_default.a.createElement("li", {
      key: key,
      className: external_classnames_default()('text-white flex-none', "ljxc1ti", key !== Speakers_speakers.length - 1 && 'mr-6')
    }, external_react_default.a.createElement("div", {
      className: external_classnames_default()("d1ppw69u")
    }, external_react_default.a.createElement("div", {
      className: external_classnames_default()('absolute w-full h-full z-20 opacity-25', "dfuiiv6")
    }), external_react_default.a.createElement(s.avatar, {
      className: external_classnames_default()('w-full h-full object-cover', "s1i0dwc8")
    })), external_react_default.a.createElement("div", {
      className: "h-32 mt-10"
    }, external_react_default.a.createElement("h3", {
      className: "font-bold mb-4"
    }, s.name), external_react_default.a.createElement("div", null, s.position)));
  })))));
};

/* harmony default export */ var components_Speakers = (Speakers_Speakers);

__webpack_require__(64);
// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/components/Contact/index.js





var Contact_Contact = function Contact(_ref) {
  var rest = extends_default()({}, _ref);

  return external_react_default.a.createElement("div", extends_default()({
    id: "contact",
    className: "page-section bg-primary"
  }, rest), external_react_default.a.createElement("div", {
    className: external_classnames_default()('container py-16 md:py-24')
  }, external_react_default.a.createElement("div", {
    className: "text-3xl md:text-5xl font-bold text-white mb-4 md:mb-0"
  }, "Venue"), external_react_default.a.createElement("div", {
    className: "text-white mb-1"
  }, "GopherCon Viet Nam 2019 will be held at:"), external_react_default.a.createElement("div", {
    className: "font-bold text-white mb-12"
  }, "24 \u0110\u01B0\u1EDDng 3 Th\xE1ng 2, Ph\u01B0\u1EDDng 12, Qu\u1EADn 10, H\u1ED3 Ch\xED Minh 700000, Vi\u1EC7t Nam"), external_react_default.a.createElement("div", {
    className: "w-full venue-map"
  }, external_react_default.a.createElement("iframe", {
    className: external_classnames_default()('w-full', "iz13soz"),
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4423395466474!2d106.67857451506828!3d10.77739369232088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f266c79200b%3A0x3e85de751c03de9c!2sCAPELLA%20GALLERY%20HALL!5e0!3m2!1svi!2s!4v1570518160982!5m2!1svi!2s",
    frameBorder: "0",
    allowFullScreen: true
  }))));
};

/* harmony default export */ var components_Contact = (Contact_Contact);

__webpack_require__(65);
// EXTERNAL MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(8);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home/images/horizontal-arrow.svg?svgr
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var horizontal_arrowsvgr_ref =
/*#__PURE__*/
external_react_default.a.createElement("path", {
  d: "M2.943 1.24a1.228 1.228 0 00-1.272-.114A1.2 1.2 0 001 2.2v21.6c0 .455.26.87.671 1.074a1.236 1.236 0 001.272-.114l14.571-10.8a1.193 1.193 0 000-1.92L2.943 1.24z",
  stroke: "#FFF",
  strokeWidth: 1.2,
  fill: "none",
  fillRule: "evenodd"
});

var horizontal_arrowsvgr_SvgHorizontalArrow = function SvgHorizontalArrow(props) {
  return external_react_default.a.createElement("svg", _extends({
    width: 19,
    height: 26
  }, props), horizontal_arrowsvgr_ref);
};

/* harmony default export */ var horizontal_arrowsvgr = (horizontal_arrowsvgr_SvgHorizontalArrow);
// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home/AnimatedMenuIcon.js



var AnimatedMenuIcon_AnimatedMenuIcon = function AnimatedMenuIcon(_ref) {
  var isActive = _ref.isActive,
      toggleActive = _ref.toggleActive;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    onClick: toggleActive,
    className: external_classnames_default()('hamburger', isActive && 'is-active'),
    id: "hamburger-1"
  }, external_react_default.a.createElement("span", {
    className: "line"
  }), external_react_default.a.createElement("span", {
    className: "line"
  }), external_react_default.a.createElement("span", {
    className: "line"
  })));
};

/* harmony default export */ var home_AnimatedMenuIcon = (AnimatedMenuIcon_AnimatedMenuIcon);
// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home/HamburgerMenu.js






var HamburgerMenu_HamburgerMenu = function HamburgerMenu(_ref) {
  var className = _ref.className,
      active = _ref.active,
      _ref$menuItems = _ref.menuItems,
      menuItems = _ref$menuItems === void 0 ? [] : _ref$menuItems;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  if (isActive) {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  if (!isActive) {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }

  var toggleActive = function toggleActive() {
    setIsActive(!isActive);
  };

  var labelRef = external_react_default.a.useRef(null);
  var id = external_react_default.a.useMemo(function () {
    return Math.random().toString(36).substr(2, 5);
  }, []);

  var handleClick = function handleClick(menuItem) {
    if (typeof document !== 'undefined') {
      document.getElementById(menuItem).scrollIntoView({
        behavior: 'smooth'
      });
    }

    toggleActive();
    labelRef.current.click();
  };

  return external_react_default.a.createElement("div", {
    className: external_classnames_default()('relative block flex items-center md:hidden', className)
  }, external_react_default.a.createElement("input", {
    "aria-hidden": "true",
    tabIndex: "-1",
    type: "checkbox",
    id: id,
    className: external_classnames_default()('hidden', "i23wnem")
  }), external_react_default.a.createElement("label", {
    ref: labelRef,
    tabIndex: "0",
    role: "button",
    htmlFor: id,
    className: external_classnames_default()('h-full inline-flex items-center focus:outline-none select-none', "l179enuq"),
    "aria-label": "menu"
  }, external_react_default.a.createElement(home_AnimatedMenuIcon, {
    toggleActive: toggleActive,
    isActive: isActive
  })), external_react_default.a.createElement("ul", {
    className: "relative bg-white flex-col justify-center items-center"
  }, menuItems.map(function (e, i) {
    return external_react_default.a.createElement("li", {
      key: i,
      className: "flex items-center text-base font-semibold px-5 text-grey"
    }, external_react_default.a.createElement("a", {
      href: e.href,
      className: external_classnames_default()('inline-block text-center text-2xl font-medium flex-auto py-3 capitalize', typeof window !== 'undefined' && window.location.hash === e.href && 'text-blue'),
      onClick: function onClick() {
        return handleClick(e.name);
      }
    }, e.name));
  }), external_react_default.a.createElement("div", {
    className: external_classnames_default()("d1ki44au")
  })));
};

/* harmony default export */ var home_HamburgerMenu = (HamburgerMenu_HamburgerMenu);

__webpack_require__(66);
// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home/Header.js






var menu = [{
  name: 'home',
  href: '#home'
}, {
  name: 'schedule',
  href: '#schedule'
}, {
  name: 'speakers',
  href: '#speakers'
}, {
  name: 'sponsors',
  href: '#sponsors'
}];

var Header_Header = function Header(_ref) {
  var active = _ref.active;

  var handleClick = function handleClick(id) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return external_react_default.a.createElement("div", {
    id: "header",
    className: "bg-primary w-screen fixed top-0 z-30"
  }, external_react_default.a.createElement("header", {
    className: external_classnames_default()('container xs:col text-right flex justify-between items-center text-white bg-primary', "h1prri2d")
  }, external_react_default.a.createElement(LazyImage["a" /* default */], extends_default()({}, __webpack_require__(67), {
    alt: "header logo",
    className: external_classnames_default()("lt2oau5")
  })), external_react_default.a.createElement("nav", {
    className: external_classnames_default()('h-full hidden sm:visible md:block', "nasdsj3")
  }, external_react_default.a.createElement("ul", {
    id: "top-menu",
    className: external_classnames_default()('h-full flex items-center', "ucqd1ta")
  }, menu.map(function (e, i) {
    return external_react_default.a.createElement("li", {
      key: i,
      className: "inline-flex items-center text-base font-semibold px-5 capitalize"
    }, external_react_default.a.createElement("a", {
      onClick: function onClick() {
        handleClick(e.name);
      },
      href: e.href,
      className: external_classnames_default()('hover:text-blue inline-block flex-auto', active === e.name && 'text-blue')
    }, e.name));
  }))), external_react_default.a.createElement(home_HamburgerMenu, {
    menuItems: menu,
    active: active
  })));
};

/* harmony default export */ var home_Header = (Header_Header);

__webpack_require__(68);
// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home/HeroSection.js









var HeroSection_HeroSection = function HeroSection(_ref) {
  var active = _ref.active,
      rest = objectWithoutProperties_default()(_ref, ["active"]);

  return external_react_default.a.createElement("section", extends_default()({
    className: external_classnames_default()('md:pt-24 page-section bg-primary relative', "s1m6tdth")
  }, rest), external_react_default.a.createElement(home_Header, {
    active: active
  }), external_react_default.a.createElement("div", {
    className: external_classnames_default()('container w-full pt-24 md:pt-32 lg:pt-48', "d15n3xca")
  }, external_react_default.a.createElement("div", {
    className: "mb-10 md:w-1/2"
  }, external_react_default.a.createElement("div", {
    className: "font-bold text-2xl md:text-4xl lg:text-6xl text-white text-center md:text-left mb-6"
  }, "Gophercon ", external_react_default.a.createElement("br", null), " Vietnam ", external_react_default.a.createElement("span", {
    className: "text-blue"
  }, "2019")), external_react_default.a.createElement("div", {
    className: "font-semibold text-2xl text-white flex items-center justify-center md:justify-start"
  }, external_react_default.a.createElement(horizontal_arrowsvgr, {
    className: "mr-4 md:mr-6"
  }), "November 2nd")), external_react_default.a.createElement("div", {
    className: external_classnames_default()('flex md:w-1/2', "ddapylv")
  }, external_react_default.a.createElement(LazyImage["a" /* default */], extends_default()({
    className: external_classnames_default()('flex', "l1ql4s40")
  }, __webpack_require__(69)))), external_react_default.a.createElement("div", {
    className: external_classnames_default()("dcmbdvy")
  })));
};

/* harmony default export */ var home_HeroSection = (HeroSection_HeroSection);

__webpack_require__(70);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(36);

// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home/Footer.js



var Footer_Footer = function Footer() {
  return external_react_default.a.createElement("footer", {
    className: "bg-secondary py-5"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row flex sm:flex-row items-center flex-wrap flex-col flex-col-reverse"
  }, external_react_default.a.createElement("div", {
    className: "col sm:w-1/2"
  }, external_react_default.a.createElement("p", {
    className: "text-white font-medium"
  }, "\xA9 2019 GopherCon Vietnam")), external_react_default.a.createElement("div", {
    className: "col sm:w-1/2 sm:mb-0 mb-4 leading-none"
  }, external_react_default.a.createElement("a", {
    href: "https://facebook.com/golang.org.vn",
    className: "flex items-center justify-end "
  }, external_react_default.a.createElement(fa_["FaFacebookF"], {
    className: "text-white"
  }), external_react_default.a.createElement("span", {
    className: "ml-2 text-blue font-medium"
  }, "@gophercon.vn"))))));
};

/* harmony default export */ var home_Footer = (Footer_Footer);
// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/components/FloatingButton.js

function FloatingButton(props) {
  return external_react_default.a.createElement("div", {
    className: "container absolute z-50"
  }, external_react_default.a.createElement("a", props, external_react_default.a.createElement("button", {
    className: "fixed bottom-0 right-0 m-5 border border-solid border-gray-200 rounded-full w-20 h-20 flex items-center justify-center bg-white",
    style: {
      animation: 'shadow-pulse 3s infinite',
      zIndex: 10
    }
  }, external_react_default.a.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.001 512.001",
    className: "w-12 h-12 fill-current text-secondary",
    style: {
      transform: 'rotate(-25deg)',
      animation: 'wave-animation 3s infinite'
    }
  }, external_react_default.a.createElement("g", null, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    d: "M501.388,273.415c-8.446-1.493-14.576-8.818-14.576-17.416s6.129-15.922,14.575-17.415 c6.149-1.088,10.613-6.41,10.613-12.653v-59.196c0-6.408-4.738-11.884-11.023-12.737c-12.751-1.73-22.366-12.758-22.366-25.693 c0.006-3.493-1.341-6.769-3.794-9.224c-2.419-2.423-5.639-3.759-9.063-3.759H46.244c-3.425,0-6.644,1.335-9.063,3.759 c-2.451,2.455-3.799,5.731-3.793,9.268c0,12.893-9.615,23.92-22.366,25.65C4.739,154.852,0,160.327,0,166.735v59.196 c0,6.244,4.463,11.565,10.613,12.653c8.446,1.493,14.576,8.818,14.576,17.416s-6.13,15.923-14.576,17.416 C4.463,274.504,0,279.825,0,286.069v59.196c0,6.408,4.739,11.884,11.023,12.737c12.751,1.73,22.366,12.758,22.366,25.693 c-0.006,3.493,1.341,6.769,3.793,9.224c2.419,2.423,5.639,3.759,9.063,3.759h73.402c4.143,0,7.501-3.358,7.501-7.501 c0-4.144-3.359-7.501-7.501-7.501H48.342c-0.914-18.844-14.815-34.781-33.339-38.224v-55.628 c14.7-3.44,25.189-16.546,25.189-31.824c0-15.278-10.489-28.384-25.189-31.825v-55.628c18.505-3.439,32.396-19.347,33.337-38.224 h415.319c0.914,18.844,14.815,34.781,33.34,38.224v55.628c-14.701,3.439-25.19,16.545-25.19,31.824 c0,15.279,10.488,28.385,25.19,31.824v55.628c-18.506,3.438-32.397,19.347-33.337,38.224H166.319 c-4.143,0-7.501,3.358-7.501,7.501c0,4.144,3.359,7.501,7.501,7.501h299.436c3.425,0,6.644-1.335,9.063-3.759 c2.452-2.455,3.8-5.731,3.794-9.267c0-12.893,9.615-23.92,22.367-25.65c6.283-0.854,11.022-6.329,11.022-12.737v-59.196 C512.001,279.825,507.537,274.503,501.388,273.415z"
  }))), external_react_default.a.createElement("g", null, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    d: "M426.554,151.11h-95.042c-4.144,0-7.501,3.357-7.501,7.501s3.358,7.501,7.501,7.501h92.542v179.776H87.946V166.112 h196.058c4.144,0,7.501-3.357,7.501-7.501s-3.358-7.501-7.501-7.501H85.445c-6.894,0-12.502,5.608-12.502,12.502v184.777 c0,6.894,5.608,12.502,12.502,12.502h341.109c6.894,0,12.502-5.608,12.502-12.502V163.612 C439.056,156.718,433.449,151.11,426.554,151.11z"
  }))), external_react_default.a.createElement("g", null, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    d: "M146.436,217.077h-33.843c-3.747,0-6.795,3.164-6.795,7.052s3.048,7.052,6.795,7.052h9.87v51.49 c0,3.923,3.068,6.881,7.138,6.881c4.002,0,7.137-3.022,7.137-6.881v-51.49h9.699c3.875,0,6.796-3.068,6.796-7.137 C153.232,220.137,150.247,217.077,146.436,217.077z"
  }))), external_react_default.a.createElement("g", null, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    d: "M169.084,217.077c-4.069,0-7.138,2.921-7.138,6.796v58.798c0,3.858,3.135,6.881,7.138,6.881 c4.069,0,7.137-2.958,7.137-6.881v-58.798C176.221,219.999,173.152,217.077,169.084,217.077z"
  }))), external_react_default.a.createElement("g", null, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    d: "M227.027,263.312c-3.81,0-6.6,2.461-7.012,6.149c-0.649,4.056-1.099,6.499-7.517,6.499c-6.293,0-8.416-2.231-8.416-8.844 v-27.091c0.001-5.6,1.336-8.843,8.161-8.843c6.395,0,7.52,3.006,7.735,5.983c0.107,3.826,3.075,6.58,7.135,6.58 c3.451,0,7.137-2.054,7.137-7.82c0-9.365-7.559-18.847-22.008-18.847c-13.838,0-22.436,8.793-22.436,22.949v27.091 c0,14.154,8.498,22.948,22.179,22.948c14.616,0,22.265-9.481,22.265-18.846C234.25,265.389,230.519,263.312,227.027,263.312z"
  }))), external_react_default.a.createElement("g", null, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    d: "M290.601,278.551l-19.355-29.187l16.55-20.631c1.121-1.144,1.75-2.715,1.75-4.433c0-3.849-3.416-7.224-7.309-7.224 c-2.199,0-4.215,0.995-5.45,2.677l-17.239,21.731v-17.612c0-3.875-3.068-6.796-7.137-6.796c-4.069,0-7.138,2.921-7.138,6.796 v58.798c0,3.858,3.135,6.881,7.138,6.881c4.069,0,7.137-2.958,7.137-6.881v-18.665l2.321-2.888l16.862,25.225 c1.327,2.064,3.494,3.294,5.814,3.294c4.008,0,7.394-3.268,7.394-7.137C291.939,281.025,291.468,279.647,290.601,278.551z"
  }))), external_react_default.a.createElement("g", null, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    d: "M337.36,275.448H314.16v-15.21h8.587c3.812,0,6.796-3.021,6.796-6.88c0-3.955-2.984-7.052-6.796-7.052h-8.587V231.18 h23.201v0.001c3.812,0,6.796-3.135,6.796-7.137c0-3.972-2.921-6.967-6.796-6.967h-30.425c-3.955,0-7.052,3.022-7.052,6.882v58.712 c0,3.858,3.097,6.881,7.052,6.881h30.425c3.875,0,6.796-2.995,6.796-6.967C344.156,278.583,341.172,275.448,337.36,275.448z"
  }))), external_react_default.a.createElement("g", null, external_react_default.a.createElement("g", null, external_react_default.a.createElement("path", {
    d: "M388.724,217.077h-33.843c-3.748,0-6.796,3.164-6.796,7.052s3.048,7.052,6.796,7.052h9.87v51.49 c0,3.923,3.068,6.881,7.137,6.881c4.003,0,7.138-3.022,7.138-6.881v-51.49h9.698c3.875,0,6.796-3.068,6.796-7.137 C395.521,220.137,392.535,217.077,388.724,217.077z"
  })))))));
}
// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/components/Join/index.js





var Join_Join = function Join(_ref) {
  var rest = extends_default()({}, _ref);

  return external_react_default.a.createElement("div", extends_default()({
    className: 'page-section pt-16 md:pt-24 '
  }, rest), external_react_default.a.createElement("div", {
    className: "container text-grey"
  }, external_react_default.a.createElement("div", {
    className: external_classnames_default()('mb-16 md:flex md:justify-between md:items-center')
  }, external_react_default.a.createElement("div", {
    className: external_classnames_default()('text-3xl text-center md:text-left md:text-5xl text-primary font-bold mb-4 md:mb-0')
  }, "Join the Conference"), external_react_default.a.createElement("div", {
    className: "text-center"
  }, external_react_default.a.createElement("a", {
    className: "font-medium w-64 text-base px-5 py-2 text-white bg-primary inline-block",
    href: "https://ticketbox.vn/event/gophercon-vietnam-2019-77299"
  }, "Buy a ticket")))));
};

/* harmony default export */ var components_Join = (Join_Join);
// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/utils/debounce.js
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/* harmony default export */ var utils_debounce = (debounce);
// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home/getCurrentSection.js
function getCurrentSection(top) {
  var elem1, elem2, elem3, elem4, elem5;

  if (typeof window !== 'undefined') {
    if (typeof document !== 'undefined') {
      elem1 = document.getElementById('home').offsetTop;
      elem2 = document.getElementById('schedule').offsetTop;
      elem3 = document.getElementById('join').offsetTop;
      elem4 = document.getElementById('speakers').offsetTop;
      elem5 = document.getElementById('sponsors').offsetTop;
    }
  }

  if (top < elem2) {
    return 'home';
  }

  if ((elem2 < top || top === elem2) && top < elem3) {
    return 'schedule';
  }

  if ((elem3 < top || top === elem3) && top < elem4) {
    return 'join';
  }

  if ((elem4 < top || top === elem4) && top < elem5) {
    return 'speakers';
  }

  if (top === elem5 || top > elem5) {
    return 'sponsors';
  }
}

/* harmony default export */ var home_getCurrentSection = (getCurrentSection);
// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/pages/home/index.js













function Home() {
  var _useState = Object(external_react_["useState"])('home'),
      _useState2 = slicedToArray_default()(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    var top, currentSection;

    if (typeof document !== 'undefined') {
      utils_debounce(document.addEventListener('scroll', function () {
        if (typeof window !== 'undefined') {
          top = window.pageYOffset;
        }

        currentSection = home_getCurrentSection(top);
        currentSection && setActive(currentSection);
        history.replaceState(null, null, "#".concat(currentSection));
      }), 300);
    }
  }, []);
  return external_react_default.a.createElement("div", {
    className: "relative"
  }, external_react_default.a.createElement(home_HeroSection, {
    active: active,
    id: "home"
  }), external_react_default.a.createElement(components_Schedule, {
    id: "schedule"
  }), external_react_default.a.createElement(components_Join, {
    id: "join"
  }), external_react_default.a.createElement(components_Speakers, {
    id: "speakers"
  }), external_react_default.a.createElement(components_Sponsors, {
    id: "sponsors"
  }), external_react_default.a.createElement(components_Contact, null), external_react_default.a.createElement(home_Footer, null), external_react_default.a.createElement(FloatingButton, {
    href: "https://ticketbox.vn/event/gophercon-vietnam-2019-77299",
    target: "_blank",
    rel: "noopener noreferrer"
  }));
}

/* harmony default export */ var home = __webpack_exports__["default"] = (Home);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(16);

// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/components/Link.js


// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/pages/404.js



var _404_NotFound = function NotFound(props) {
  return external_react_default.a.createElement("div", {
    className: "w-screen min-h-screen flex flex-col justify-center pt-32 pb-16"
  }, external_react_default.a.createElement("h1", null, "404"));
};

/* harmony default export */ var _404 = __webpack_exports__["default"] = (_404_NotFound);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(7);

var _router = __webpack_require__(16);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

exports.siteRoot = function () {
  // handles conditional `siteRoot` on Netlify environment
  function getSiteRoot() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    // get Netlify deploy urls
    switch (context) {
      default:
        return process.env.URL;

      case 'production':
        return process.env.URL;

      case 'branch-deploy':
      case 'deploy-preview':
        return process.env.DEPLOY_PRIME_URL;
    }
  }

  return getSiteRoot(process.env.CONTEXT) || process.env.SITE_ROOT || '';
}();

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
__webpack_require__(39);
module.exports = __webpack_require__(45);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(20)["default"];

var _require = __webpack_require__(21),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/ngochangjelly/Desktop/gophercon-landing/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(20)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)(module)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(21),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(22),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/ngochangjelly/Desktop/gophercon-landing/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(22),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)(module)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
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

exports.default = requireUniversalModule;

var _utils = __webpack_require__(18);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 10,
	"./": 10,
	"./index": 10,
	"./index.js": 10
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 41;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(24);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2.default)(_index2.default, mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(46);

var _interopRequireDefault = __webpack_require__(47);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(2));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(8));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(48);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(71)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("/Users/ngochangjelly/Desktop/gophercon-landing/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 49 */
/***/ (function(module, exports) {



/***/ }),
/* 50 */
/***/ (function(module, exports) {



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "adc72e8b010872282772cd8137125efa.png" , "preview": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='12' /%3E%3C/filter%3E%3Cpath fill='%23927363' d='M0 0h100v100H0z'/%3E%3Cg filter='url(%23b)' transform='translate(.5 .5)' fill-opacity='.5'%3E%3Cellipse fill='%23ffe3d6' rx='1' ry='1' transform='matrix(-14.59652 -33.73058 22.63398 -9.7946 27.5 60.5)'/%3E%3Cpath d='M57.2-21.2l-74.7 65-19.7-22.6 74.7-65zm-87.7 91.5l12.7-14.1 68.3 61.5-12.7 14.1z'/%3E%3Cpath d='M135.3 74.7l-71.2 68.8-19.4-20.2 71.2-68.8zM58.2-6.6l13.5-16.1 42.1 35.3-13.5 16.1z'/%3E%3Cpath fill='%23fdceaa' d='M86.2 65l18.3-12.5-13.7-32.6-39-27z'/%3E%3Cpath fill='%23351200' d='M66.1 24.6l-47.9 7.2L36.8 7.2 60 11.5z'/%3E%3Cpath d='M-16 40l11 64 39 11zM115-2L64-16l46 62zM10.9-24.4l18.7 11.7-34.5 55-18.7-11.6zM66 99l35.7-24L118 99l-35.6 24z'/%3E%3Cellipse fill='%23fffae5' cx='43' cy='31' rx='8' ry='8'/%3E%3Cpath fill='%23dd8756' d='M47 46h47v31H47z'/%3E%3Cpath fill='%23fbd7b9' d='M16.3 12.5L80.5-16 30.2 11.6-6.5 51z'/%3E%3Cpath fill='%23bec6e8' d='M89 84l-42 5 12 9z'/%3E%3Cpath fill='%2346364d' d='M72.9 80.9l-35 2.3 10 22.7 16.3-38.7z'/%3E%3Cpath d='M74 112l31-11 10-69zm-77.6 3l72.3-5.1-45.9-17.2L-6.9 66z'/%3E%3Cpath fill='%23210a00' d='M20.2 17.5l36.2 4.8 9.4 19.9-.6-24.6z'/%3E%3Cpath fill='%23ffd9c8' d='M49.6 66.6L17.3 88.4l-12.9-19 32.3-21.8z'/%3E%3C/g%3E%3C/svg%3E", "dimensions": {"width":100,"height":100,"type":"png"} };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "927ce5aceafa88985b316f1c58a8aac7.svg";

/***/ }),
/* 53 */
/***/ (function(module, exports) {



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "68a5b8db8de02cbb6b2f2ad772b68927.png" , "preview": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 356 356'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='12' /%3E%3C/filter%3E%3Cpath fill='%238a9999' d='M0 0h356v356H0z'/%3E%3Cg filter='url(%23b)' transform='translate(.7 .7) scale(1.39063)' fill-opacity='.5'%3E%3Cellipse fill='%23003744' cx='255' cy='155' rx='116' ry='116'/%3E%3Cellipse fill='%23fff0da' rx='1' ry='1' transform='rotate(142.5 18.7 60.8) scale(94.27465 110.04198)'/%3E%3Cellipse fill='%23000047' rx='1' ry='1' transform='matrix(-9.16913 -37.7613 55.18274 -13.39938 61.3 244.8)'/%3E%3Cellipse fill='%23000516' rx='1' ry='1' transform='rotate(-89.1 98.4 -53.7) scale(13.21461 67.10479)'/%3E%3Cellipse fill='%23fff' cx='255' cy='22' rx='115' ry='14'/%3E%3Cellipse fill='%23fff' rx='1' ry='1' transform='matrix(32.33378 35.82736 -10.72599 9.68008 131.7 229)'/%3E%3Cellipse cx='197' cy='2' rx='63' ry='8'/%3E%3Cellipse fill='%23001925' rx='1' ry='1' transform='rotate(120.1 88.6 101.5) scale(33.72384 44.92248)'/%3E%3Cellipse rx='1' ry='1' transform='matrix(-40.37574 -14.69557 8.188 -22.49633 215.2 251.7)'/%3E%3Cellipse fill='%2300014a' rx='1' ry='1' transform='matrix(-12.87817 -.53976 .79295 -18.91916 77.8 202)'/%3E%3Cpath fill='%23fff' d='M40 89L26-16 139 1z'/%3E%3Cpath fill='%233ad3e8' d='M221 236l23-135 27 134z'/%3E%3Cellipse fill='%23fffff5' rx='1' ry='1' transform='rotate(-58.5 176 32.6) scale(54.97487 24.6639)'/%3E%3Cellipse fill='%2364e0f5' rx='1' ry='1' transform='matrix(13.46562 1.67646 -5.7887 46.49606 177.8 191.7)'/%3E%3Cellipse fill='%23c67554' rx='1' ry='1' transform='matrix(18.41353 -81.04744 23.39494 5.3152 154 137)'/%3E%3Cpath fill='%23fff' d='M124.8 56L52.9 98.5l89.5-4L178.5 83z'/%3E%3Cellipse fill='%23001d2e' rx='1' ry='1' transform='matrix(12.1236 -1.2101 12.813 128.36962 207.9 177.1)'/%3E%3Cpath fill='%2338394b' d='M148.6 40.3l-69.8 37-9.4-17.6 69.8-37z'/%3E%3Cellipse fill='%23002557' rx='1' ry='1' transform='matrix(27.69724 -8.06615 13.71806 47.10458 86 242)'/%3E%3Cpath fill='%23faffe5' d='M9.5 199.7l51.7 3.1-77.2 35.9L8.9-7.6z'/%3E%3C/g%3E%3C/svg%3E", "dimensions": {"height":356,"width":356,"type":"jpg"} };

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "f40d37e64eecfcfdf32db6339596d247.png" , "preview": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 425 425'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='12' /%3E%3C/filter%3E%3Cpath fill='%2388777b' d='M0 0h425v425H0z'/%3E%3Cg filter='url(%23b)' transform='translate(.8 .8) scale(1.66016)' fill-opacity='.5'%3E%3Cpath fill='%2356000e' d='M263 233l-279-7 287-103z'/%3E%3Cellipse fill='%23c3e6ee' rx='1' ry='1' transform='matrix(51.47517 -14.85754 21.18403 73.3938 216.7 63.7)'/%3E%3Cellipse fill='%23b0e0f2' rx='1' ry='1' transform='matrix(-46.74474 -8.83813 16.26203 -86.00958 35.5 48.1)'/%3E%3Cellipse rx='1' ry='1' transform='matrix(1.5396 -18.94216 67.5408 5.48967 53.1 158.1)'/%3E%3Cellipse fill='%23fff' rx='1' ry='1' transform='matrix(22.86484 -20.95177 18.28837 19.95825 157 255)'/%3E%3Cpath fill='%230c0a12' d='M118 119L82 39 65 271z'/%3E%3Cellipse fill='%23ffc299' rx='1' ry='1' transform='matrix(17.58138 11.9373 -38.93274 57.34058 141.4 154)'/%3E%3Cellipse fill='%2300041a' cx='203' cy='229' rx='19' ry='97'/%3E%3Cellipse cx='119' cy='47' rx='32' ry='14'/%3E%3Cellipse fill='%23ff0b2a' rx='1' ry='1' transform='matrix(-17.86082 6.96364 -13.64615 -35.00056 239 228)'/%3E%3Cpath fill='%23fff2b1' d='M97.2 97.3l-3-28.8 54.6-5.8 3 28.8z'/%3E%3Cellipse fill='%23a6c7d8' rx='1' ry='1' transform='matrix(68.07971 12.8829 -4.05937 21.45175 133.9 15.8)'/%3E%3Cpath fill='%2300192e' d='M194 193l-33-58 110 3z'/%3E%3Cellipse fill='%23ff1537' rx='1' ry='1' transform='matrix(-8.32708 -5.40147 31.5175 -48.5884 145 208.2)'/%3E%3Cellipse fill='%23000013' rx='1' ry='1' transform='matrix(12.13113 4.88402 -19.19374 47.67425 66.5 237)'/%3E%3Cellipse cx='137' cy='105' rx='16' ry='13'/%3E%3Cellipse rx='1' ry='1' transform='matrix(-8.51681 4.54513 -11.38158 -21.32716 152.5 66.9)'/%3E%3Cellipse fill='%237a2c26' rx='1' ry='1' transform='rotate(-10.2 973.1 -551.2) scale(14.65513 37.11699)'/%3E%3Cpath fill='%23ffdec3' d='M212 117l-92 40-4-40z'/%3E%3Cpath fill='%239cd2e4' d='M25 136h57l-4-44z'/%3E%3C/g%3E%3C/svg%3E", "dimensions": {"height":425,"width":425,"type":"jpg"} };

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "b4f8e165ae6ec4e0caa04616f5b2e54c.png" , "preview": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='12' /%3E%3C/filter%3E%3Cpath fill='%2348543c' d='M0 0h800v800H0z'/%3E%3Cg filter='url(%23b)' transform='translate(1.6 1.6) scale(3.125)' fill-opacity='.5'%3E%3Cellipse fill='%23fff' cx='130' cy='190' rx='75' ry='75'/%3E%3Cellipse cx='29' cy='55' rx='69' ry='111'/%3E%3Cellipse cx='235' cy='61' rx='93' ry='93'/%3E%3Cellipse fill='%23f5ecf4' rx='1' ry='1' transform='matrix(49.39279 -41.75227 28.71037 33.96427 139.6 179.8)'/%3E%3Cellipse fill='%23fff' rx='1' ry='1' transform='matrix(17.4997 -3.85251 5.01486 22.77958 139 6.8)'/%3E%3Cellipse fill='%23ffb995' cx='117' cy='81' rx='21' ry='32'/%3E%3Cellipse fill='%23001000' rx='1' ry='1' transform='matrix(-40.82838 5.49712 -30.39642 -225.76102 17.2 175.2)'/%3E%3Cellipse fill='%23030' cx='230' cy='164' rx='34' ry='255'/%3E%3Cpath d='M99-16l66 89L12 4z'/%3E%3Cpath fill='%23d4ccce' d='M199.3 271L91.6 125l-29.2 18-8.4 49.4z'/%3E%3Cellipse fill='%23170800' rx='1' ry='1' transform='matrix(8.78318 -13.26931 41.804 27.67079 89.9 113.1)'/%3E%3Cellipse fill='%23af7f6a' cx='83' cy='222' rx='20' ry='39'/%3E%3Cellipse fill='%23eeedf2' rx='1' ry='1' transform='matrix(-8.69072 18.6373 -32.75159 -15.27232 172.2 167.3)'/%3E%3Cellipse fill='%23001200' rx='1' ry='1' transform='rotate(-146.3 42.7 17.8) scale(27.47937 88.05497)'/%3E%3Cpath fill='%23001900' d='M139 31h117v90H139z'/%3E%3Cpath fill='%23d48258' d='M190.1 260.5l-27.8-3.4 7.6-61.6 27.8 3.4z'/%3E%3Cpath fill='%23c58a5c' d='M141.5 109.2l-1.8 32.7-72.7-6.8 36.5-7.9z'/%3E%3Cpath fill='%23e8e8ee' d='M121 0h36v24h-36z'/%3E%3Cpath fill='%2323550d' d='M195 189h58v67h-58z'/%3E%3Cpath d='M126 52l15-2-2-39z'/%3E%3C/g%3E%3C/svg%3E", "dimensions": {"height":800,"width":800,"type":"jpg"} };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "804df743d23b6e556ddb519cadfbfeed.png" , "preview": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 476 595'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='12' /%3E%3C/filter%3E%3Cpath fill='%23cacabe' d='M0 0h474v595H0z'/%3E%3Cg filter='url(%23b)' transform='translate(1.2 1.2) scale(2.32422)' fill-opacity='.5'%3E%3Cellipse fill='%23484c16' cx='98' cy='207' rx='81' ry='81'/%3E%3Cellipse rx='1' ry='1' transform='matrix(-2.1636 -22.88843 32.83727 -3.10404 101.3 68.7)'/%3E%3Cellipse fill='%23fff' rx='1' ry='1' transform='matrix(44.01272 184.11604 -45.1184 10.7855 185.3 99)'/%3E%3Cellipse fill='%23fff' rx='1' ry='1' transform='matrix(68.7183 -191.01517 45.01517 16.19435 21.6 67.7)'/%3E%3Cellipse fill='%23fff' rx='1' ry='1' transform='matrix(-.00798 27.54907 -189.6402 -.05493 109.1 21.3)'/%3E%3Cellipse fill='%23fff' cx='172' cy='93' rx='42' ry='58'/%3E%3Cpath fill='%23fff' d='M63-16l7 143-86 48z'/%3E%3Cellipse fill='%23764905' rx='1' ry='1' transform='matrix(-14.2292 1.87373 -5.3936 -40.9593 41.5 222.2)'/%3E%3Cellipse fill='%23ffa' cx='127' cy='255' rx='79' ry='5'/%3E%3Cpath fill='%23001a56' d='M52 158l28-41 10 37z'/%3E%3Cellipse fill='%23212a2c' cx='101' cy='67' rx='34' ry='18'/%3E%3Cellipse fill='%23000041' cx='88' cy='235' rx='60' ry='3'/%3E%3Cellipse fill='%23829a8b' cx='143' cy='170' rx='31' ry='31'/%3E%3Cellipse fill='%2300002f' cx='100' cy='223' rx='70' ry='3'/%3E%3Cellipse fill='%23fff' rx='1' ry='1' transform='matrix(29.3043 -200.87374 20.1834 2.94444 7.6 138.2)'/%3E%3Cellipse fill='%23ffff73' cx='95' cy='218' rx='64' ry='3'/%3E%3Cellipse fill='%23eaa480' cx='97' cy='116' rx='19' ry='39'/%3E%3Cellipse fill='%23003' cx='100' cy='212' rx='72' ry='3'/%3E%3Cellipse fill='%23000888' rx='1' ry='1' transform='matrix(5.2021 -14.52892 7.59182 2.71827 121.4 145.2)'/%3E%3Cellipse fill='%2300003c' cx='102' cy='248' rx='45' ry='3'/%3E%3C/g%3E%3C/svg%3E", "dimensions": {"height":595,"width":476,"type":"jpg"} };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "d010982f7ecdd03005f0b9a2872915c0.png" , "preview": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 280'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='12' /%3E%3C/filter%3E%3Cpath fill='%23939fb6' d='M0 0h280v280H0z'/%3E%3Cg filter='url(%23b)' transform='translate(.5 .5) scale(1.09375)' fill-opacity='.5'%3E%3Cellipse fill='%231a0600' rx='1' ry='1' transform='rotate(-178.2 61.3 7) scale(36.00335 13.86077)'/%3E%3Cellipse fill='%23f5edcd' cx='42' cy='25' rx='38' ry='97'/%3E%3Cellipse fill='%23000046' rx='1' ry='1' transform='matrix(-18.21893 8.05005 -14.6294 -33.10937 81.8 249.8)'/%3E%3Cpath fill='%23fffffa' d='M160.1 46.5L238.9 69l-11 38.4L149.1 85z'/%3E%3Cellipse fill='%232241cd' cx='203' cy='156' rx='29' ry='55'/%3E%3Cellipse fill='%23957161' cx='119' cy='66' rx='46' ry='46'/%3E%3Cpath fill='%23fff' d='M103.8 56l-9.5-18.7L128.2 20l9.5 18.7z'/%3E%3Cellipse fill='%23cce3ff' rx='1' ry='1' transform='matrix(6.86161 30.0323 -37.57905 8.58585 143.7 139.3)'/%3E%3Cellipse fill='%235271d1' rx='1' ry='1' transform='matrix(-28.63752 -4.2799 10.68674 -71.50665 64.4 170.2)'/%3E%3Cellipse fill='%23ade0ff' rx='1' ry='1' transform='matrix(5.92339 -41.10548 24.58311 3.54248 30.5 225.2)'/%3E%3Cellipse fill='%23ffffe0' rx='1' ry='1' transform='rotate(-114.6 177.8 45.2) scale(15.33935 22.97475)'/%3E%3Cpath fill='%23fffff9' d='M100 96l-7-26-94 38z'/%3E%3Cpath fill='%23000005' d='M87 53h50v11H87z'/%3E%3Cellipse fill='%23130e0f' rx='1' ry='1' transform='matrix(9.6211 -.92619 2.16206 22.45915 147 32.3)'/%3E%3Cpath fill='%23354485' d='M199 154l-41 30 27 80z'/%3E%3Cellipse fill='%23b4b684' rx='1' ry='1' transform='matrix(82.4821 49.91527 -19.36003 31.99133 226.2 31.4)'/%3E%3Cpath fill='%230e0c11' d='M85 23v23l53-40z'/%3E%3Cpath fill='%23112305' d='M185.8 257.7l18.3-21.1 18.1 15.7-18.3 21.1z'/%3E%3Cpath fill='%23141730' d='M105.2 118.4l43.3-36.6 30.9 22.2-26.2-5.1z'/%3E%3Cellipse fill='%23404d3a' rx='1' ry='1' transform='matrix(22.60368 4.98766 -2.9826 13.5169 0 67.7)'/%3E%3C/g%3E%3C/svg%3E", "dimensions": {"height":280,"width":280,"type":"jpg"} };

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "0e181ee5bf59a091ce08fc6dd4cf59ee.png" , "preview": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 592 592'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='12' /%3E%3C/filter%3E%3Cpath fill='%238b7c6f' d='M0 0h592v592H0z'/%3E%3Cg filter='url(%23b)' transform='translate(1.2 1.2) scale(2.3125)' fill-opacity='.5'%3E%3Cellipse rx='1' ry='1' transform='matrix(41.70045 -10.56827 34.21418 135.0029 96.7 200.7)'/%3E%3Cellipse fill='%23fff' cx='16' cy='149' rx='24' ry='132'/%3E%3Cellipse fill='%23daf0f7' rx='1' ry='1' transform='matrix(1.236 -36.78513 104.1179 3.49842 211.5 94.2)'/%3E%3Cellipse fill='%23fff' rx='1' ry='1' transform='matrix(13.98105 -79.64887 18.20253 3.19516 249.2 168.6)'/%3E%3Cellipse fill='%23f60' cx='189' cy='200' rx='41' ry='77'/%3E%3Cellipse fill='%2300020f' cx='67' cy='13' rx='46' ry='27'/%3E%3Cellipse cx='81' cy='224' rx='26' ry='92'/%3E%3Cellipse fill='%23711a00' rx='1' ry='1' transform='matrix(43.66091 -23.6579 10.62129 19.6017 144 156.8)'/%3E%3Cellipse fill='%23000003' cx='203' cy='36' rx='14' ry='21'/%3E%3Cellipse fill='%23c4cccc' rx='1' ry='1' transform='matrix(-62.247 147.35928 -10.9644 -4.63154 32 87.5)'/%3E%3Cpath fill='%23a8b6bd' d='M193 27l-42 102-70 10z'/%3E%3Cellipse fill='%23fff' rx='1' ry='1' transform='rotate(95.3 34.6 206.2) scale(57.6669 13.93312)'/%3E%3Cellipse fill='%23fbffff' cx='47' cy='229' rx='8' ry='37'/%3E%3Cellipse fill='%23d6de59' rx='1' ry='1' transform='matrix(-.89236 36.5131 -24.07771 -.58845 194.8 209.9)'/%3E%3Cellipse cx='73' cy='173' rx='31' ry='31'/%3E%3Cpath d='M87 80l7-77-28 28z'/%3E%3Cpath fill='%23e63e00' d='M160 131h71v47h-71z'/%3E%3Cellipse fill='%23704339' rx='1' ry='1' transform='matrix(-7.22578 89.64352 -27.33882 -2.20367 129 224.5)'/%3E%3Cellipse fill='%238d9fad' cx='146' cy='58' rx='49' ry='36'/%3E%3Cellipse fill='%237d95b1' rx='1' ry='1' transform='rotate(85.9 107.6 144) scale(51.24462 31.1034)'/%3E%3C/g%3E%3C/svg%3E", "dimensions": {"height":592,"width":592,"type":"jpg"} };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "bddbc091a996df9a44e48357c0854247.png" , "preview": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 260'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='12' /%3E%3C/filter%3E%3Cpath fill='%23c0bec6' d='M0 0h260v260H0z'/%3E%3Cg filter='url(%23b)' transform='translate(.5 .5) scale(1.01563)' fill-opacity='.5'%3E%3Cellipse fill='%2333272b' rx='1' ry='1' transform='matrix(4.65047 -89.5418 37.91217 1.96902 137.4 113.7)'/%3E%3Cellipse fill='%2331351e' rx='1' ry='1' transform='rotate(-55.4 234.3 99.4) scale(58.4213 40.87864)'/%3E%3Cellipse fill='%23fff' cx='223' cy='60' rx='49' ry='130'/%3E%3Cellipse fill='%23fff' cx='34' cy='54' rx='47' ry='148'/%3E%3Cellipse fill='%23fff' cx='101' cy='12' rx='255' ry='17'/%3E%3Cellipse fill='%23695757' rx='1' ry='1' transform='rotate(-75.3 95.2 -32.6) scale(39.29998 26.81396)'/%3E%3Cellipse fill='%23808ea1' cx='187' cy='249' rx='77' ry='77'/%3E%3Cellipse fill='%23fff' rx='1' ry='1' transform='rotate(10.3 -560 1201.2) scale(40.79441 52.20845)'/%3E%3Cellipse fill='%23fff' rx='1' ry='1' transform='matrix(44.7974 32.22739 -16.83085 23.39557 61.4 141.6)'/%3E%3Cellipse fill='%234d5567' rx='1' ry='1' transform='matrix(-6.41804 -2.41609 17.67869 -46.96119 94.5 217.7)'/%3E%3Cellipse fill='%23e2dce2' cx='107' cy='67' rx='19' ry='19'/%3E%3Cellipse fill='%23fff' cx='23' cy='74' rx='51' ry='51'/%3E%3Cpath fill='%23fff' d='M271-11L136 0l134 196z'/%3E%3Cellipse fill='%233d3438' rx='1' ry='1' transform='matrix(9.95283 -11.73598 27.54046 23.35601 148.2 52.3)'/%3E%3Cpath fill='%234b595b' d='M82 184l-52 87 17-88z'/%3E%3Cellipse fill='%233e373c' rx='1' ry='1' transform='matrix(5.36606 32.45414 -20.5918 3.4047 135.9 147.5)'/%3E%3Cpath fill='%232e1c1c' d='M77.7 61l11.6-22.6 20.1-11.8-32.8 60.8z'/%3E%3Cellipse fill='%233f2c35' cx='169' cy='82' rx='7' ry='33'/%3E%3Cellipse fill='%23c6b1b8' cx='110' cy='106' rx='32' ry='9'/%3E%3Cpath fill='%23fcf8ff' d='M2-16l-18 188 135 2z'/%3E%3C/g%3E%3C/svg%3E", "dimensions": {"height":260,"width":260,"type":"jpg"} };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "7f2f00cf5159becae9fe12f6aa3deba8.png" , "preview": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 242 242'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='12' /%3E%3C/filter%3E%3Cpath fill='%23967d67' d='M0 0h242v242H0z'/%3E%3Cg filter='url(%23b)' transform='translate(.5 .5)' fill-opacity='.5'%3E%3Cellipse fill='%23552008' rx='1' ry='1' transform='rotate(157.1 51.6 86.3) scale(52.08401 75.82014)'/%3E%3Cellipse fill='%230d0000' cx='114' cy='35' rx='55' ry='22'/%3E%3Cellipse fill='%23ffe8c1' cx='230' cy='48' rx='49' ry='49'/%3E%3Cellipse rx='1' ry='1' transform='matrix(-16.836 4.63472 -10.54779 -38.31566 169.7 66.3)'/%3E%3Cellipse fill='%23fffbe7' rx='1' ry='1' transform='rotate(125.3 39 156.6) scale(33.04915 22.9011)'/%3E%3Cellipse fill='%23f9e2bc' rx='1' ry='1' transform='matrix(-30.33055 -3.9931 6.6149 -50.24509 19.5 83.3)'/%3E%3Cellipse rx='1' ry='1' transform='matrix(-3.7574 38.60409 -18.87536 -1.83717 229 232.8)'/%3E%3Cellipse fill='%23ffffef' rx='1' ry='1' transform='matrix(12.06547 -7.22607 14.73574 24.60448 119.4 229.2)'/%3E%3Cellipse fill='%23f69a65' rx='1' ry='1' transform='rotate(59.2 5 130) scale(16.67957 32.37504)'/%3E%3Cellipse fill='%23b3ad9b' cy='181' rx='83' ry='83'/%3E%3Cellipse fill='%23f2a174' rx='1' ry='1' transform='matrix(47.3167 -14.95648 2.86689 9.06976 122.9 121)'/%3E%3Cellipse fill='%23b5bfbf' rx='1' ry='1' transform='matrix(-22.35278 -17.39277 23.8974 -30.71238 221.2 126.7)'/%3E%3Cellipse fill='%230a0000' rx='1' ry='1' transform='rotate(-117.5 71.6 33.5) scale(13.59641 16.76048)'/%3E%3Cellipse fill='%23060000' rx='1' ry='1' transform='matrix(-26.35128 22.79803 -9.21403 -10.6501 86.3 36.4)'/%3E%3Cellipse fill='%23eee3cb' rx='1' ry='1' transform='rotate(171.1 20.7 8.4) scale(81.38487 7.60277)'/%3E%3Cellipse fill='%23362417' rx='1' ry='1' transform='matrix(16.50813 18.02368 -24.50016 22.44004 153.3 193.1)'/%3E%3Cellipse fill='%23040602' rx='1' ry='1' transform='matrix(14.8135 -9.11415 6.52821 10.6105 88.4 240.4)'/%3E%3Cellipse fill='%230e1307' cx='71' cy='211' rx='4' ry='32'/%3E%3Cellipse fill='%23ffa463' rx='1' ry='1' transform='matrix(18.81612 -7.37396 6.54982 16.71317 73.7 78)'/%3E%3Cellipse fill='%232b2c1a' cx='26' cy='188' rx='51' ry='4'/%3E%3C/g%3E%3C/svg%3E", "dimensions": {"height":242,"width":242,"type":"jpg"} };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "1cc1716e00202530a96b5c8714c6ba40.png" , "preview": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1224 1224'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='12' /%3E%3C/filter%3E%3Cpath fill='%23647581' d='M0 0h1224v1224H0z'/%3E%3Cg filter='url(%23b)' transform='translate(2.4 2.4) scale(4.78125)' fill-opacity='.5'%3E%3Cellipse fill='%23e8ffff' rx='1' ry='1' transform='matrix(183.1644 -8.0233 2.87637 65.66492 161.2 21)'/%3E%3Cellipse fill='%23000001' rx='1' ry='1' transform='rotate(30 -368.7 359.7) scale(255 84.5928)'/%3E%3Cpath fill='%233a1612' d='M117 41h46v94h-46z'/%3E%3Cpath fill='%23bdffff' d='M35 11l22.2-72.6L301 12.9l-22.2 72.7z'/%3E%3Cellipse fill='%23bcffff' cx='68' cy='34' rx='50' ry='69'/%3E%3Cellipse fill='%23a5e1ff' rx='1' ry='1' transform='matrix(-11.36346 18.7633 -38.1992 -23.13425 237.4 174.2)'/%3E%3Cpath fill='%2386c3ff' d='M258.3 252.3l-19 19-39.6-39.6 19-19z'/%3E%3Cpath d='M222 105l-21 37 70 9z'/%3E%3Cellipse rx='1' ry='1' transform='matrix(76.48231 -25.44228 11.47543 34.49642 133.7 254.4)'/%3E%3Cellipse fill='%23797ca2' rx='1' ry='1' transform='matrix(-21.07918 -6.3715 18.72718 -61.95613 115.5 171)'/%3E%3Cellipse fill='%23ffcb7f' cx='179' cy='142' rx='26' ry='12'/%3E%3Cpath d='M117.9 89.6L85.4 103l6.9-2.8L64.4 271z'/%3E%3Cpath fill='%2382772a' d='M83 106.2l-15.6 22L1.1 81.9l15.5-22z'/%3E%3Cellipse fill='%233a3135' rx='1' ry='1' transform='matrix(-12.36979 -5.3017 21.0498 -49.11288 160.5 112.5)'/%3E%3Cellipse rx='1' ry='1' transform='matrix(11.83099 14.95345 -5.30643 4.19838 151.1 54.4)'/%3E%3Cpath fill='%239ee5ff' d='M191 220l-14.7-19.2-9-17.9 20.8 15.4z'/%3E%3Cellipse fill='%23c1f0ff' cx='225' cy='32' rx='71' ry='44'/%3E%3Cellipse cx='14' cy='128' rx='61' ry='11'/%3E%3Cellipse fill='%23b88165' rx='1' ry='1' transform='matrix(-12.10548 13.83313 -20.67483 -18.0927 134.7 76.8)'/%3E%3Cellipse fill='%237e9bb5' rx='1' ry='1' transform='matrix(-42.3454 -8.46516 4.3776 -21.89813 201 86.5)'/%3E%3C/g%3E%3C/svg%3E", "dimensions": {"height":1224,"width":1224,"type":"jpg"} };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "bb58e7b2875619abca4f40b94cdb0e5c.png" , "preview": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1508 1488'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='12' /%3E%3C/filter%3E%3Cpath fill='%23aba399' d='M0 0h1508v1484H0z'/%3E%3Cg filter='url(%23b)' transform='translate(3 3) scale(5.89063)' fill-opacity='.5'%3E%3Cellipse fill='%23290c06' rx='1' ry='1' transform='matrix(-48.2476 10.60792 -30.42043 -138.36004 159.8 199.2)'/%3E%3Cellipse fill='%230020a5' cx='133' cy='237' rx='98' ry='41'/%3E%3Cellipse fill='%23fff' rx='1' ry='1' transform='matrix(-43.97814 171.28353 -59.88552 -15.37599 25 107)'/%3E%3Cellipse fill='%23ffbf83' cx='116' cy='147' rx='18' ry='58'/%3E%3Cellipse fill='%23fff3d3' rx='1' ry='1' transform='rotate(5.8 -230.9 2011.7) scale(146.62085 42.6597)'/%3E%3Cellipse fill='%233f0800' rx='1' ry='1' transform='matrix(-13.13111 -20.35367 28.92802 -18.66282 118 92)'/%3E%3Cellipse fill='%23cea965' cx='212' cy='160' rx='54' ry='50'/%3E%3Cellipse fill='%230059ca' rx='1' ry='1' transform='matrix(-10.92333 -32.52367 43.20641 -14.51122 79.6 241)'/%3E%3Cellipse fill='%23601500' rx='1' ry='1' transform='matrix(22.42037 3.11108 -6.7956 48.97324 152 122.3)'/%3E%3Cellipse fill='%23f6ede8' cx='67' cy='167' rx='51' ry='33'/%3E%3Cellipse fill='%23fb9b54' rx='1' ry='1' transform='matrix(-5.8134 -16.65272 21.86504 -7.63299 117.8 106.4)'/%3E%3Cellipse fill='%23004182' cx='193' cy='251' rx='41' ry='41'/%3E%3Cpath fill='%239b3a00' d='M132.4 231.6l-19.7-11.8 30.9-51.4 19.7 11.8z'/%3E%3Cellipse cx='128' cy='79' rx='30' ry='12'/%3E%3Cpath fill='%23ffbd95' d='M136 194.3l-8.9 22.6L77.4 126l28.4 2.7z'/%3E%3Cellipse fill='%23004ca0' rx='1' ry='1' transform='matrix(-10.03618 44.67248 -23.55408 -5.2917 94.2 236.5)'/%3E%3Cpath fill='%23050000' d='M87.9 85l80.7-3.1h-66.2L90 145.1z'/%3E%3Cpath fill='%23e4c891' d='M271 80L148 67l118 89z'/%3E%3Cellipse fill='%23003c82' cx='168' cy='246' rx='67' ry='32'/%3E%3Cpath d='M168.6 131L133 62l34.7 23 5.3 18.7z'/%3E%3C/g%3E%3C/svg%3E", "dimensions": {"height":1488,"width":1508,"type":"jpg"} };

/***/ }),
/* 64 */
/***/ (function(module, exports) {



/***/ }),
/* 65 */
/***/ (function(module, exports) {



/***/ }),
/* 66 */
/***/ (function(module, exports) {



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "b97aa12264dd0d610094ef7a5bc461f4.png" , "preview": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 374 112'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='12' /%3E%3C/filter%3E%3Cpath fill='%2350657a' d='M0 0h374v111H0z'/%3E%3Cg filter='url(%23b)' transform='translate(.7 .7) scale(1.46094)' fill-opacity='.5'%3E%3Cellipse fill='%2377fdff' cx='166' cy='64' rx='83' ry='23'/%3E%3Cellipse rx='1' ry='1' transform='matrix(13.61557 -.4221 3.44254 111.04448 11.3 57.3)'/%3E%3Cellipse fill='%23fff' cx='44' cy='27' rx='24' ry='18'/%3E%3Cellipse cx='179' rx='205' ry='14'/%3E%3Cellipse fill='%23dab2f4' cx='134' cy='24' rx='60' ry='11'/%3E%3Cellipse rx='1' ry='1' transform='rotate(-99.4 51 -15.2) scale(76.99093 6.88975)'/%3E%3Cellipse cx='172' cy='39' rx='106' ry='5'/%3E%3Cpath fill='%23cfaee0' d='M178 15h77v20h-77z'/%3E%3Cellipse fill='%23e1f3ff' cx='158' cy='61' rx='68' ry='6'/%3E%3Cpath d='M-14 118.5L-32.5 2.9 14-4.5l18.3 115.6z'/%3E%3Cellipse cx='185' rx='133' ry='12'/%3E%3Cpath d='M250.5 50.5l1 40.5 18.8-59-46.2 8.6zM92 63L66-16l6 107z'/%3E%3Cpath fill='%23fff' d='M19 20h36v12H19z'/%3E%3Cpath fill='%23dcc3ff' d='M206 6l14 9-27-1z'/%3E%3Cellipse fill='%23c5b3e2' cx='92' cy='21' rx='13' ry='15'/%3E%3Cpath fill='%2355cdeb' d='M85 69l2-19 47-18z'/%3E%3Cpath d='M195 33l-4-15-3 22z'/%3E%3Cellipse fill='%230a779a' cx='166' cy='73' rx='80' ry='7'/%3E%3Cpath fill='%238697c0' d='M153.3 8.3L104.1 72l22.8-48.2 13.8-15.1z'/%3E%3C/g%3E%3C/svg%3E", "dimensions": {"width":374,"height":112,"type":"png"} };

/***/ }),
/* 68 */
/***/ (function(module, exports) {



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "src": __webpack_require__.p + "b6724e4e0f2ca83a98fc4abe3152aa3a.png" , "preview": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 882 834'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='12' /%3E%3C/filter%3E%3Cpath fill='%23595560' d='M0 0h882v833H0z'/%3E%3Cg filter='url(%23b)' transform='translate(1.7 1.7) scale(3.44531)' fill-opacity='.5'%3E%3Cellipse fill='%23faffff' rx='1' ry='1' transform='matrix(9.24178 -49.0482 67.40665 12.70093 129.1 77.3)'/%3E%3Cellipse fill='%23ffffd3' rx='1' ry='1' transform='matrix(107.6557 -2.6586 .46836 18.9657 124.1 221)'/%3E%3Cellipse rx='1' ry='1' transform='rotate(-94.3 146 -73.7) scale(179.67717 38.22694)'/%3E%3Cellipse cx='16' cy='58' rx='46' ry='96'/%3E%3Cellipse cx='233' cy='61' rx='39' ry='117'/%3E%3Cellipse rx='1' ry='1' transform='rotate(51.3 -7.7 58.3) scale(36.16498 56.72554)'/%3E%3Cellipse cx='41' cy='116' rx='40' ry='36'/%3E%3Cellipse fill='%23b0f9f5' rx='1' ry='1' transform='rotate(87.4 26.3 104.9) scale(50.71376 60.95241)'/%3E%3Cpath fill='%23ffe387' d='M253.8 186.7L202.3 244l-14.1-12.7 51.5-57.3z'/%3E%3Cellipse fill='%235339c5' rx='1' ry='1' transform='matrix(1.12323 -42.26572 64.06823 1.70265 134.4 162.6)'/%3E%3Cellipse fill='%23ffb581' cx='39' cy='199' rx='19' ry='50'/%3E%3Cellipse cx='4' cy='241' rx='18' ry='50'/%3E%3Cellipse fill='%23fff' rx='1' ry='1' transform='matrix(6.33903 -19.39026 19.7457 6.45523 77 71.6)'/%3E%3Cpath d='M292 57.6l-47.6 42.8L140-15.6l47.6-42.8z'/%3E%3Cpath fill='%23fff' d='M78 195h43v17H78z'/%3E%3Cpath fill='%23ff5872' d='M3.3 76.6l3.4 1 36.9-22L47 85.2z'/%3E%3Cellipse fill='%23fff' cx='143' cy='77' rx='23' ry='22'/%3E%3Cpath d='M75 212l2-32-25 29z'/%3E%3Cpath fill='%23ffdbac' d='M201 150.2l-8.7 47.1-130.3 42 133.4-1.5z'/%3E%3Cpath d='M236.7 196.8l-16.4 34.4-77.8 25.8L271 240z'/%3E%3C/g%3E%3C/svg%3E", "dimensions": {"width":882,"height":834,"type":"png"} };

/***/ }),
/* 70 */
/***/ (function(module, exports) {



/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(19);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(7);

// EXTERNAL MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/config.js
var config = __webpack_require__(30);

// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/components/PageHead.js



var siteName = 'GopherCon Vietnam 2019';
var defaultTitle = 'GopherCon Vietnam 2019';
var defaultDesc = "GopherCon Vietnam 2019 is the second Golang conference held in Vietnam. Join us and have fun. We believe this GopherCon will help to build a better connection between Vietnam gophers and bring values to the Tech community.";
var defaultKeywords = ['gopher', 'gophercon', 'golang', 'conference', 'commutity', 'connect', 'developer', 'vietnam'].join(',');

var PageHead_PageHead = function PageHead(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? defaultTitle : _ref$title,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? defaultDesc : _ref$description,
      _ref$keywords = _ref.keywords,
      keywords = _ref$keywords === void 0 ? defaultKeywords : _ref$keywords,
      _ref$url = _ref.url,
      url = _ref$url === void 0 ? config["siteRoot"] : _ref$url;
  return external_react_default.a.createElement(external_react_static_["Head"], null, external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), external_react_default.a.createElement("meta", {
    content: "width=device-width,initial-scale=1",
    name: "viewport"
  }), external_react_default.a.createElement("title", null, title), external_react_default.a.createElement("meta", {
    name: "description",
    content: description
  }), external_react_default.a.createElement("meta", {
    name: "keywords",
    content: keywords
  }), external_react_default.a.createElement("meta", {
    property: "og:type",
    content: "website"
  }), external_react_default.a.createElement("meta", {
    property: "og:url",
    content: url
  }), external_react_default.a.createElement("meta", {
    property: "og:title",
    content: title
  }), external_react_default.a.createElement("meta", {
    property: "og:description",
    content: description
  }), external_react_default.a.createElement("meta", {
    property: "og:site_name",
    content: siteName
  }), external_react_default.a.createElement("meta", {
    property: "og:locale",
    content: "en_US"
  }), external_react_default.a.createElement("meta", {
    property: "ia:markup_url",
    content: url
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap",
    rel: "stylesheet"
  }), children);
};

/* harmony default export */ var components_PageHead = (PageHead_PageHead);
// EXTERNAL MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/css/tailwind.scss
var tailwind = __webpack_require__(49);

// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/App.js





var App_App = function App() {
  return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement(components_PageHead, null), external_react_default.a.createElement("main", {
    className: "font-sans font-normal text-black leading-normal"
  }, external_react_default.a.createElement(external_react_["Suspense"], {
    fallback: external_react_default.a.createElement("div", null)
  }, external_react_default.a.createElement(external_react_static_["Routes"], null))));
};

/* harmony default export */ var src_App = (App_App);
// CONCATENATED MODULE: /Users/ngochangjelly/Desktop/gophercon-landing/src/index.js

 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ var src = __webpack_exports__["default"] = (src_App); // Render your app

if (typeof document !== 'undefined') {
  var renderMethod =  false ? undefined : external_react_dom_default.a.hydrate || external_react_dom_default.a.render;

  var src_render = function render(Comp) {
    renderMethod(external_react_default.a.createElement(Comp, null), document.getElementById('root'));
  }; // Render!


  src_render(src_App); // Hot Module Replacement

  if (false) {}
}

/***/ })
/******/ ]);
});