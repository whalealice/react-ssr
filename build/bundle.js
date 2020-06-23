/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/Home/component/style.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/Home/component/style.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._1luFr6g0CoEyJzWqG2VWrR {\\n    background: red;\\n    margin-top: 50px;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"test\": \"_1luFr6g0CoEyJzWqG2VWrR\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Home/component/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/Login/component/style.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/Login/component/style.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._2RZu85Co5sB4ap0fhMReL1 {\\n    background: red;\\n    margin-top: 50px;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"test\": \"_2RZu85Co5sB4ap0fhMReL1\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Login/component/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/common/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/common/style.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._1xVM183VXCfK-hozA_Rjk9{\\n    background: pink;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"test\": \"_1xVM183VXCfK-hozA_Rjk9\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/common/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */\n\nvar hasElementType = typeof Element !== 'undefined';\nvar hasMap = typeof Map === 'function';\nvar hasSet = typeof Set === 'function';\nvar hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;\n\n// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js\n\nfunction equal(a, b) {\n  // START: fast-deep-equal es6/index.js 3.1.1\n  if (a === b) return true;\n\n  if (a && b && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) == 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) == 'object') {\n    if (a.constructor !== b.constructor) return false;\n\n    var length, i, keys;\n    if (Array.isArray(a)) {\n      length = a.length;\n      if (length != b.length) return false;\n      for (i = length; i-- !== 0;) {\n        if (!equal(a[i], b[i])) return false;\n      }return true;\n    }\n\n    // START: Modifications:\n    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code\n    //    to co-exist with es5.\n    // 2. Replace `for of` with es5 compliant iteration using `for`.\n    //    Basically, take:\n    //\n    //    ```js\n    //    for (i of a.entries())\n    //      if (!b.has(i[0])) return false;\n    //    ```\n    //\n    //    ... and convert to:\n    //\n    //    ```js\n    //    it = a.entries();\n    //    while (!(i = it.next()).done)\n    //      if (!b.has(i.value[0])) return false;\n    //    ```\n    //\n    //    **Note**: `i` access switches to `i.value`.\n    var it;\n    if (hasMap && a instanceof Map && b instanceof Map) {\n      if (a.size !== b.size) return false;\n      it = a.entries();\n      while (!(i = it.next()).done) {\n        if (!b.has(i.value[0])) return false;\n      }it = a.entries();\n      while (!(i = it.next()).done) {\n        if (!equal(i.value[1], b.get(i.value[0]))) return false;\n      }return true;\n    }\n\n    if (hasSet && a instanceof Set && b instanceof Set) {\n      if (a.size !== b.size) return false;\n      it = a.entries();\n      while (!(i = it.next()).done) {\n        if (!b.has(i.value[0])) return false;\n      }return true;\n    }\n    // END: Modifications\n\n    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {\n      length = a.length;\n      if (length != b.length) return false;\n      for (i = length; i-- !== 0;) {\n        if (a[i] !== b[i]) return false;\n      }return true;\n    }\n\n    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;\n    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();\n    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();\n\n    keys = Object.keys(a);\n    length = keys.length;\n    if (length !== Object.keys(b).length) return false;\n\n    for (i = length; i-- !== 0;) {\n      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;\n    } // END: fast-deep-equal\n\n    // START: react-fast-compare\n    // custom handling for DOM elements\n    if (hasElementType && a instanceof Element) return false;\n\n    // custom handling for React/Preact\n    for (i = length; i-- !== 0;) {\n      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {\n        // React-specific: avoid traversing React elements' _owner\n        // Preact-specific: avoid traversing Preact elements' __v and __o\n        //    __v = $_original / $_vnode\n        //    __o = $_owner\n        // These properties contain circular references and are not needed when\n        // comparing the actual elements (and not their owners)\n        // .$$typeof and ._store on just reasonable markers of elements\n\n        continue;\n      }\n\n      // all other properties should be traversed as usual\n      if (!equal(a[keys[i]], b[keys[i]])) return false;\n    }\n    // END: react-fast-compare\n\n    // START: fast-deep-equal\n    return true;\n  }\n\n  return a !== a && b !== b;\n}\n// end fast-deep-equal\n\nmodule.exports = function isEqual(a, b) {\n  try {\n    return equal(a, b);\n  } catch (error) {\n    if ((error.message || '').match(/stack|recursion/i)) {\n      // warn on circular references, don't crash\n      // browsers give this different errors name and messages:\n      // chrome/safari: \"RangeError\", \"Maximum call stack size exceeded\"\n      // firefox: \"InternalError\", too much recursion\"\n      // edge: \"Error\", \"Out of stack space\"\n      console.warn('react-fast-compare cannot handle circular refs');\n      return false;\n    }\n    // some other error. we should definitely know about these\n    throw error;\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/react-fast-compare/index.js?");

/***/ }),

/***/ "./node_modules/react-helmet/es/Helmet.js":
/*!************************************************!*\
  !*** ./node_modules/react-helmet/es/Helmet.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Helmet = undefined;\n\nvar _typeof2 = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactSideEffect = __webpack_require__(/*! react-side-effect */ \"./node_modules/react-side-effect/lib/index.js\");\n\nvar _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);\n\nvar _reactFastCompare = __webpack_require__(/*! react-fast-compare */ \"./node_modules/react-fast-compare/index.js\");\n\nvar _reactFastCompare2 = _interopRequireDefault(_reactFastCompare);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _objectAssign = __webpack_require__(/*! object-assign */ \"object-assign\");\n\nvar _objectAssign2 = _interopRequireDefault(_objectAssign);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ATTRIBUTE_NAMES = {\n    BODY: \"bodyAttributes\",\n    HTML: \"htmlAttributes\",\n    TITLE: \"titleAttributes\"\n};\n\nvar TAG_NAMES = {\n    BASE: \"base\",\n    BODY: \"body\",\n    HEAD: \"head\",\n    HTML: \"html\",\n    LINK: \"link\",\n    META: \"meta\",\n    NOSCRIPT: \"noscript\",\n    SCRIPT: \"script\",\n    STYLE: \"style\",\n    TITLE: \"title\"\n};\n\nvar VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {\n    return TAG_NAMES[name];\n});\n\nvar TAG_PROPERTIES = {\n    CHARSET: \"charset\",\n    CSS_TEXT: \"cssText\",\n    HREF: \"href\",\n    HTTPEQUIV: \"http-equiv\",\n    INNER_HTML: \"innerHTML\",\n    ITEM_PROP: \"itemprop\",\n    NAME: \"name\",\n    PROPERTY: \"property\",\n    REL: \"rel\",\n    SRC: \"src\",\n    TARGET: \"target\"\n};\n\nvar REACT_TAG_MAP = {\n    accesskey: \"accessKey\",\n    charset: \"charSet\",\n    class: \"className\",\n    contenteditable: \"contentEditable\",\n    contextmenu: \"contextMenu\",\n    \"http-equiv\": \"httpEquiv\",\n    itemprop: \"itemProp\",\n    tabindex: \"tabIndex\"\n};\n\nvar HELMET_PROPS = {\n    DEFAULT_TITLE: \"defaultTitle\",\n    DEFER: \"defer\",\n    ENCODE_SPECIAL_CHARACTERS: \"encodeSpecialCharacters\",\n    ON_CHANGE_CLIENT_STATE: \"onChangeClientState\",\n    TITLE_TEMPLATE: \"titleTemplate\"\n};\n\nvar HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {\n    obj[REACT_TAG_MAP[key]] = key;\n    return obj;\n}, {});\n\nvar SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];\n\nvar HELMET_ATTRIBUTE = \"data-react-helmet\";\n\nvar _typeof = typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\" ? function (obj) {\n    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);\n} : function (obj) {\n    return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);\n};\n\nvar classCallCheck = function classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n};\n\nvar createClass = function () {\n    function defineProperties(target, props) {\n        for (var i = 0; i < props.length; i++) {\n            var descriptor = props[i];\n            descriptor.enumerable = descriptor.enumerable || false;\n            descriptor.configurable = true;\n            if (\"value\" in descriptor) descriptor.writable = true;\n            Object.defineProperty(target, descriptor.key, descriptor);\n        }\n    }\n\n    return function (Constructor, protoProps, staticProps) {\n        if (protoProps) defineProperties(Constructor.prototype, protoProps);\n        if (staticProps) defineProperties(Constructor, staticProps);\n        return Constructor;\n    };\n}();\n\nvar _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n        var source = arguments[i];\n\n        for (var key in source) {\n            if (Object.prototype.hasOwnProperty.call(source, key)) {\n                target[key] = source[key];\n            }\n        }\n    }\n\n    return target;\n};\n\nvar inherits = function inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));\n    }\n\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            enumerable: false,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n};\n\nvar objectWithoutProperties = function objectWithoutProperties(obj, keys) {\n    var target = {};\n\n    for (var i in obj) {\n        if (keys.indexOf(i) >= 0) continue;\n        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;\n        target[i] = obj[i];\n    }\n\n    return target;\n};\n\nvar possibleConstructorReturn = function possibleConstructorReturn(self, call) {\n    if (!self) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n\n    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === \"object\" || typeof call === \"function\") ? call : self;\n};\n\nvar encodeSpecialCharacters = function encodeSpecialCharacters(str) {\n    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n    if (encode === false) {\n        return String(str);\n    }\n\n    return String(str).replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\").replace(/>/g, \"&gt;\").replace(/\"/g, \"&quot;\").replace(/'/g, \"&#x27;\");\n};\n\nvar getTitleFromPropsList = function getTitleFromPropsList(propsList) {\n    var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);\n    var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);\n\n    if (innermostTemplate && innermostTitle) {\n        // use function arg to avoid need to escape $ characters\n        return innermostTemplate.replace(/%s/g, function () {\n            return Array.isArray(innermostTitle) ? innermostTitle.join(\"\") : innermostTitle;\n        });\n    }\n\n    var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);\n\n    return innermostTitle || innermostDefaultTitle || undefined;\n};\n\nvar getOnChangeClientState = function getOnChangeClientState(propsList) {\n    return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};\n};\n\nvar getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {\n    return propsList.filter(function (props) {\n        return typeof props[tagType] !== \"undefined\";\n    }).map(function (props) {\n        return props[tagType];\n    }).reduce(function (tagAttrs, current) {\n        return _extends({}, tagAttrs, current);\n    }, {});\n};\n\nvar getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {\n    return propsList.filter(function (props) {\n        return typeof props[TAG_NAMES.BASE] !== \"undefined\";\n    }).map(function (props) {\n        return props[TAG_NAMES.BASE];\n    }).reverse().reduce(function (innermostBaseTag, tag) {\n        if (!innermostBaseTag.length) {\n            var keys = Object.keys(tag);\n\n            for (var i = 0; i < keys.length; i++) {\n                var attributeKey = keys[i];\n                var lowerCaseAttributeKey = attributeKey.toLowerCase();\n\n                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {\n                    return innermostBaseTag.concat(tag);\n                }\n            }\n        }\n\n        return innermostBaseTag;\n    }, []);\n};\n\nvar getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {\n    // Calculate list of tags, giving priority innermost component (end of the propslist)\n    var approvedSeenTags = {};\n\n    return propsList.filter(function (props) {\n        if (Array.isArray(props[tagName])) {\n            return true;\n        }\n        if (typeof props[tagName] !== \"undefined\") {\n            warn(\"Helmet: \" + tagName + \" should be of type \\\"Array\\\". Instead found type \\\"\" + _typeof(props[tagName]) + \"\\\"\");\n        }\n        return false;\n    }).map(function (props) {\n        return props[tagName];\n    }).reverse().reduce(function (approvedTags, instanceTags) {\n        var instanceSeenTags = {};\n\n        instanceTags.filter(function (tag) {\n            var primaryAttributeKey = void 0;\n            var keys = Object.keys(tag);\n            for (var i = 0; i < keys.length; i++) {\n                var attributeKey = keys[i];\n                var lowerCaseAttributeKey = attributeKey.toLowerCase();\n\n                // Special rule with link tags, since rel and href are both primary tags, rel takes priority\n                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === \"canonical\") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === \"stylesheet\")) {\n                    primaryAttributeKey = lowerCaseAttributeKey;\n                }\n                // Special case for innerHTML which doesn't work lowercased\n                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === TAG_PROPERTIES.INNER_HTML || attributeKey === TAG_PROPERTIES.CSS_TEXT || attributeKey === TAG_PROPERTIES.ITEM_PROP)) {\n                    primaryAttributeKey = attributeKey;\n                }\n            }\n\n            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {\n                return false;\n            }\n\n            var value = tag[primaryAttributeKey].toLowerCase();\n\n            if (!approvedSeenTags[primaryAttributeKey]) {\n                approvedSeenTags[primaryAttributeKey] = {};\n            }\n\n            if (!instanceSeenTags[primaryAttributeKey]) {\n                instanceSeenTags[primaryAttributeKey] = {};\n            }\n\n            if (!approvedSeenTags[primaryAttributeKey][value]) {\n                instanceSeenTags[primaryAttributeKey][value] = true;\n                return true;\n            }\n\n            return false;\n        }).reverse().forEach(function (tag) {\n            return approvedTags.push(tag);\n        });\n\n        // Update seen tags with tags from this instance\n        var keys = Object.keys(instanceSeenTags);\n        for (var i = 0; i < keys.length; i++) {\n            var attributeKey = keys[i];\n            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);\n\n            approvedSeenTags[attributeKey] = tagUnion;\n        }\n\n        return approvedTags;\n    }, []).reverse();\n};\n\nvar getInnermostProperty = function getInnermostProperty(propsList, property) {\n    for (var i = propsList.length - 1; i >= 0; i--) {\n        var props = propsList[i];\n\n        if (props.hasOwnProperty(property)) {\n            return props[property];\n        }\n    }\n\n    return null;\n};\n\nvar reducePropsToState = function reducePropsToState(propsList) {\n    return {\n        baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),\n        bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),\n        defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),\n        encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),\n        htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),\n        linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),\n        metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),\n        noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),\n        onChangeClientState: getOnChangeClientState(propsList),\n        scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),\n        styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),\n        title: getTitleFromPropsList(propsList),\n        titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)\n    };\n};\n\nvar rafPolyfill = function () {\n    var clock = Date.now();\n\n    return function (callback) {\n        var currentTime = Date.now();\n\n        if (currentTime - clock > 16) {\n            clock = currentTime;\n            callback(currentTime);\n        } else {\n            setTimeout(function () {\n                rafPolyfill(callback);\n            }, 0);\n        }\n    };\n}();\n\nvar cafPolyfill = function cafPolyfill(id) {\n    return clearTimeout(id);\n};\n\nvar requestAnimationFrame = typeof window !== \"undefined\" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;\n\nvar cancelAnimationFrame = typeof window !== \"undefined\" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;\n\nvar warn = function warn(msg) {\n    return console && typeof console.warn === \"function\" && console.warn(msg);\n};\n\nvar _helmetCallback = null;\n\nvar handleClientStateChange = function handleClientStateChange(newState) {\n    if (_helmetCallback) {\n        cancelAnimationFrame(_helmetCallback);\n    }\n\n    if (newState.defer) {\n        _helmetCallback = requestAnimationFrame(function () {\n            commitTagChanges(newState, function () {\n                _helmetCallback = null;\n            });\n        });\n    } else {\n        commitTagChanges(newState);\n        _helmetCallback = null;\n    }\n};\n\nvar commitTagChanges = function commitTagChanges(newState, cb) {\n    var baseTag = newState.baseTag,\n        bodyAttributes = newState.bodyAttributes,\n        htmlAttributes = newState.htmlAttributes,\n        linkTags = newState.linkTags,\n        metaTags = newState.metaTags,\n        noscriptTags = newState.noscriptTags,\n        onChangeClientState = newState.onChangeClientState,\n        scriptTags = newState.scriptTags,\n        styleTags = newState.styleTags,\n        title = newState.title,\n        titleAttributes = newState.titleAttributes;\n\n    updateAttributes(TAG_NAMES.BODY, bodyAttributes);\n    updateAttributes(TAG_NAMES.HTML, htmlAttributes);\n\n    updateTitle(title, titleAttributes);\n\n    var tagUpdates = {\n        baseTag: updateTags(TAG_NAMES.BASE, baseTag),\n        linkTags: updateTags(TAG_NAMES.LINK, linkTags),\n        metaTags: updateTags(TAG_NAMES.META, metaTags),\n        noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),\n        scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),\n        styleTags: updateTags(TAG_NAMES.STYLE, styleTags)\n    };\n\n    var addedTags = {};\n    var removedTags = {};\n\n    Object.keys(tagUpdates).forEach(function (tagType) {\n        var _tagUpdates$tagType = tagUpdates[tagType],\n            newTags = _tagUpdates$tagType.newTags,\n            oldTags = _tagUpdates$tagType.oldTags;\n\n        if (newTags.length) {\n            addedTags[tagType] = newTags;\n        }\n        if (oldTags.length) {\n            removedTags[tagType] = tagUpdates[tagType].oldTags;\n        }\n    });\n\n    cb && cb();\n\n    onChangeClientState(newState, addedTags, removedTags);\n};\n\nvar flattenArray = function flattenArray(possibleArray) {\n    return Array.isArray(possibleArray) ? possibleArray.join(\"\") : possibleArray;\n};\n\nvar updateTitle = function updateTitle(title, attributes) {\n    if (typeof title !== \"undefined\" && document.title !== title) {\n        document.title = flattenArray(title);\n    }\n\n    updateAttributes(TAG_NAMES.TITLE, attributes);\n};\n\nvar updateAttributes = function updateAttributes(tagName, attributes) {\n    var elementTag = document.getElementsByTagName(tagName)[0];\n\n    if (!elementTag) {\n        return;\n    }\n\n    var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);\n    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(\",\") : [];\n    var attributesToRemove = [].concat(helmetAttributes);\n    var attributeKeys = Object.keys(attributes);\n\n    for (var i = 0; i < attributeKeys.length; i++) {\n        var attribute = attributeKeys[i];\n        var value = attributes[attribute] || \"\";\n\n        if (elementTag.getAttribute(attribute) !== value) {\n            elementTag.setAttribute(attribute, value);\n        }\n\n        if (helmetAttributes.indexOf(attribute) === -1) {\n            helmetAttributes.push(attribute);\n        }\n\n        var indexToSave = attributesToRemove.indexOf(attribute);\n        if (indexToSave !== -1) {\n            attributesToRemove.splice(indexToSave, 1);\n        }\n    }\n\n    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {\n        elementTag.removeAttribute(attributesToRemove[_i]);\n    }\n\n    if (helmetAttributes.length === attributesToRemove.length) {\n        elementTag.removeAttribute(HELMET_ATTRIBUTE);\n    } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(\",\")) {\n        elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(\",\"));\n    }\n};\n\nvar updateTags = function updateTags(type, tags) {\n    var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);\n    var tagNodes = headElement.querySelectorAll(type + \"[\" + HELMET_ATTRIBUTE + \"]\");\n    var oldTags = Array.prototype.slice.call(tagNodes);\n    var newTags = [];\n    var indexToDelete = void 0;\n\n    if (tags && tags.length) {\n        tags.forEach(function (tag) {\n            var newElement = document.createElement(type);\n\n            for (var attribute in tag) {\n                if (tag.hasOwnProperty(attribute)) {\n                    if (attribute === TAG_PROPERTIES.INNER_HTML) {\n                        newElement.innerHTML = tag.innerHTML;\n                    } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {\n                        if (newElement.styleSheet) {\n                            newElement.styleSheet.cssText = tag.cssText;\n                        } else {\n                            newElement.appendChild(document.createTextNode(tag.cssText));\n                        }\n                    } else {\n                        var value = typeof tag[attribute] === \"undefined\" ? \"\" : tag[attribute];\n                        newElement.setAttribute(attribute, value);\n                    }\n                }\n            }\n\n            newElement.setAttribute(HELMET_ATTRIBUTE, \"true\");\n\n            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.\n            if (oldTags.some(function (existingTag, index) {\n                indexToDelete = index;\n                return newElement.isEqualNode(existingTag);\n            })) {\n                oldTags.splice(indexToDelete, 1);\n            } else {\n                newTags.push(newElement);\n            }\n        });\n    }\n\n    oldTags.forEach(function (tag) {\n        return tag.parentNode.removeChild(tag);\n    });\n    newTags.forEach(function (tag) {\n        return headElement.appendChild(tag);\n    });\n\n    return {\n        oldTags: oldTags,\n        newTags: newTags\n    };\n};\n\nvar generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {\n    return Object.keys(attributes).reduce(function (str, key) {\n        var attr = typeof attributes[key] !== \"undefined\" ? key + \"=\\\"\" + attributes[key] + \"\\\"\" : \"\" + key;\n        return str ? str + \" \" + attr : attr;\n    }, \"\");\n};\n\nvar generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {\n    var attributeString = generateElementAttributesAsString(attributes);\n    var flattenedTitle = flattenArray(title);\n    return attributeString ? \"<\" + type + \" \" + HELMET_ATTRIBUTE + \"=\\\"true\\\" \" + attributeString + \">\" + encodeSpecialCharacters(flattenedTitle, encode) + \"</\" + type + \">\" : \"<\" + type + \" \" + HELMET_ATTRIBUTE + \"=\\\"true\\\">\" + encodeSpecialCharacters(flattenedTitle, encode) + \"</\" + type + \">\";\n};\n\nvar generateTagsAsString = function generateTagsAsString(type, tags, encode) {\n    return tags.reduce(function (str, tag) {\n        var attributeHtml = Object.keys(tag).filter(function (attribute) {\n            return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);\n        }).reduce(function (string, attribute) {\n            var attr = typeof tag[attribute] === \"undefined\" ? attribute : attribute + \"=\\\"\" + encodeSpecialCharacters(tag[attribute], encode) + \"\\\"\";\n            return string ? string + \" \" + attr : attr;\n        }, \"\");\n\n        var tagContent = tag.innerHTML || tag.cssText || \"\";\n\n        var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;\n\n        return str + \"<\" + type + \" \" + HELMET_ATTRIBUTE + \"=\\\"true\\\" \" + attributeHtml + (isSelfClosing ? \"/>\" : \">\" + tagContent + \"</\" + type + \">\");\n    }, \"\");\n};\n\nvar convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {\n    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    return Object.keys(attributes).reduce(function (obj, key) {\n        obj[REACT_TAG_MAP[key] || key] = attributes[key];\n        return obj;\n    }, initProps);\n};\n\nvar convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {\n    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    return Object.keys(props).reduce(function (obj, key) {\n        obj[HTML_TAG_MAP[key] || key] = props[key];\n        return obj;\n    }, initAttributes);\n};\n\nvar generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {\n    var _initProps;\n\n    // assigning into an array to define toString function on it\n    var initProps = (_initProps = {\n        key: title\n    }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);\n    var props = convertElementAttributestoReactProps(attributes, initProps);\n\n    return [_react2.default.createElement(TAG_NAMES.TITLE, props, title)];\n};\n\nvar generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {\n    return tags.map(function (tag, i) {\n        var _mappedTag;\n\n        var mappedTag = (_mappedTag = {\n            key: i\n        }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);\n\n        Object.keys(tag).forEach(function (attribute) {\n            var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;\n\n            if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {\n                var content = tag.innerHTML || tag.cssText;\n                mappedTag.dangerouslySetInnerHTML = { __html: content };\n            } else {\n                mappedTag[mappedAttribute] = tag[attribute];\n            }\n        });\n\n        return _react2.default.createElement(type, mappedTag);\n    });\n};\n\nvar getMethodsForTag = function getMethodsForTag(type, tags, encode) {\n    switch (type) {\n        case TAG_NAMES.TITLE:\n            return {\n                toComponent: function toComponent() {\n                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);\n                },\n                toString: function toString() {\n                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);\n                }\n            };\n        case ATTRIBUTE_NAMES.BODY:\n        case ATTRIBUTE_NAMES.HTML:\n            return {\n                toComponent: function toComponent() {\n                    return convertElementAttributestoReactProps(tags);\n                },\n                toString: function toString() {\n                    return generateElementAttributesAsString(tags);\n                }\n            };\n        default:\n            return {\n                toComponent: function toComponent() {\n                    return generateTagsAsReactComponent(type, tags);\n                },\n                toString: function toString() {\n                    return generateTagsAsString(type, tags, encode);\n                }\n            };\n    }\n};\n\nvar mapStateOnServer = function mapStateOnServer(_ref) {\n    var baseTag = _ref.baseTag,\n        bodyAttributes = _ref.bodyAttributes,\n        encode = _ref.encode,\n        htmlAttributes = _ref.htmlAttributes,\n        linkTags = _ref.linkTags,\n        metaTags = _ref.metaTags,\n        noscriptTags = _ref.noscriptTags,\n        scriptTags = _ref.scriptTags,\n        styleTags = _ref.styleTags,\n        _ref$title = _ref.title,\n        title = _ref$title === undefined ? \"\" : _ref$title,\n        titleAttributes = _ref.titleAttributes;\n    return {\n        base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),\n        bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),\n        htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),\n        link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),\n        meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),\n        noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),\n        script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),\n        style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),\n        title: getMethodsForTag(TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)\n    };\n};\n\nvar Helmet = function Helmet(Component) {\n    var _class, _temp;\n\n    return _temp = _class = function (_React$Component) {\n        inherits(HelmetWrapper, _React$Component);\n\n        function HelmetWrapper() {\n            classCallCheck(this, HelmetWrapper);\n            return possibleConstructorReturn(this, _React$Component.apply(this, arguments));\n        }\n\n        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {\n            return !(0, _reactFastCompare2.default)(this.props, nextProps);\n        };\n\n        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {\n            if (!nestedChildren) {\n                return null;\n            }\n\n            switch (child.type) {\n                case TAG_NAMES.SCRIPT:\n                case TAG_NAMES.NOSCRIPT:\n                    return {\n                        innerHTML: nestedChildren\n                    };\n\n                case TAG_NAMES.STYLE:\n                    return {\n                        cssText: nestedChildren\n                    };\n            }\n\n            throw new Error(\"<\" + child.type + \" /> elements are self-closing and can not contain children. Refer to our API for more information.\");\n        };\n\n        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {\n            var _babelHelpers$extends;\n\n            var child = _ref.child,\n                arrayTypeChildren = _ref.arrayTypeChildren,\n                newChildProps = _ref.newChildProps,\n                nestedChildren = _ref.nestedChildren;\n\n            return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));\n        };\n\n        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {\n            var _babelHelpers$extends2, _babelHelpers$extends3;\n\n            var child = _ref2.child,\n                newProps = _ref2.newProps,\n                newChildProps = _ref2.newChildProps,\n                nestedChildren = _ref2.nestedChildren;\n\n            switch (child.type) {\n                case TAG_NAMES.TITLE:\n                    return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));\n\n                case TAG_NAMES.BODY:\n                    return _extends({}, newProps, {\n                        bodyAttributes: _extends({}, newChildProps)\n                    });\n\n                case TAG_NAMES.HTML:\n                    return _extends({}, newProps, {\n                        htmlAttributes: _extends({}, newChildProps)\n                    });\n            }\n\n            return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));\n        };\n\n        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {\n            var newFlattenedProps = _extends({}, newProps);\n\n            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {\n                var _babelHelpers$extends4;\n\n                newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));\n            });\n\n            return newFlattenedProps;\n        };\n\n        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {\n            if (true) {\n                if (!VALID_TAG_NAMES.some(function (name) {\n                    return child.type === name;\n                })) {\n                    if (typeof child.type === \"function\") {\n                        return warn(\"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.\");\n                    }\n\n                    return warn(\"Only elements types \" + VALID_TAG_NAMES.join(\", \") + \" are allowed. Helmet does not support rendering <\" + child.type + \"> elements. Refer to our API for more information.\");\n                }\n\n                if (nestedChildren && typeof nestedChildren !== \"string\" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {\n                    return typeof nestedChild !== \"string\";\n                }))) {\n                    throw new Error(\"Helmet expects a string as a child of <\" + child.type + \">. Did you forget to wrap your children in braces? ( <\" + child.type + \">{``}</\" + child.type + \"> ) Refer to our API for more information.\");\n                }\n            }\n\n            return true;\n        };\n\n        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {\n            var _this2 = this;\n\n            var arrayTypeChildren = {};\n\n            _react2.default.Children.forEach(children, function (child) {\n                if (!child || !child.props) {\n                    return;\n                }\n\n                var _child$props = child.props,\n                    nestedChildren = _child$props.children,\n                    childProps = objectWithoutProperties(_child$props, [\"children\"]);\n\n                var newChildProps = convertReactPropstoHtmlAttributes(childProps);\n\n                _this2.warnOnInvalidChildren(child, nestedChildren);\n\n                switch (child.type) {\n                    case TAG_NAMES.LINK:\n                    case TAG_NAMES.META:\n                    case TAG_NAMES.NOSCRIPT:\n                    case TAG_NAMES.SCRIPT:\n                    case TAG_NAMES.STYLE:\n                        arrayTypeChildren = _this2.flattenArrayTypeChildren({\n                            child: child,\n                            arrayTypeChildren: arrayTypeChildren,\n                            newChildProps: newChildProps,\n                            nestedChildren: nestedChildren\n                        });\n                        break;\n\n                    default:\n                        newProps = _this2.mapObjectTypeChildren({\n                            child: child,\n                            newProps: newProps,\n                            newChildProps: newChildProps,\n                            nestedChildren: nestedChildren\n                        });\n                        break;\n                }\n            });\n\n            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);\n            return newProps;\n        };\n\n        HelmetWrapper.prototype.render = function render() {\n            var _props = this.props,\n                children = _props.children,\n                props = objectWithoutProperties(_props, [\"children\"]);\n\n            var newProps = _extends({}, props);\n\n            if (children) {\n                newProps = this.mapChildrenToProps(children, newProps);\n            }\n\n            return _react2.default.createElement(Component, newProps);\n        };\n\n        createClass(HelmetWrapper, null, [{\n            key: \"canUseDOM\",\n\n            // Component.peek comes from react-side-effect:\n            // For testing, you may use a static peek() method available on the returned component.\n            // It lets you get the current state without resetting the mounted instance stack.\n            // Don’t use it for anything other than testing.\n\n            /**\n             * @param {Object} base: {\"target\": \"_blank\", \"href\": \"http://mysite.com/\"}\n             * @param {Object} bodyAttributes: {\"className\": \"root\"}\n             * @param {String} defaultTitle: \"Default Title\"\n             * @param {Boolean} defer: true\n             * @param {Boolean} encodeSpecialCharacters: true\n             * @param {Object} htmlAttributes: {\"lang\": \"en\", \"amp\": undefined}\n             * @param {Array} link: [{\"rel\": \"canonical\", \"href\": \"http://mysite.com/example\"}]\n             * @param {Array} meta: [{\"name\": \"description\", \"content\": \"Test description\"}]\n             * @param {Array} noscript: [{\"innerHTML\": \"<img src='http://mysite.com/js/test.js'\"}]\n             * @param {Function} onChangeClientState: \"(newState) => console.log(newState)\"\n             * @param {Array} script: [{\"type\": \"text/javascript\", \"src\": \"http://mysite.com/js/test.js\"}]\n             * @param {Array} style: [{\"type\": \"text/css\", \"cssText\": \"div { display: block; color: blue; }\"}]\n             * @param {String} title: \"Title\"\n             * @param {Object} titleAttributes: {\"itemprop\": \"name\"}\n             * @param {String} titleTemplate: \"MySite.com - %s\"\n             */\n            set: function set$$1(canUseDOM) {\n                Component.canUseDOM = canUseDOM;\n            }\n        }]);\n        return HelmetWrapper;\n    }(_react2.default.Component), _class.propTypes = {\n        base: _propTypes2.default.object,\n        bodyAttributes: _propTypes2.default.object,\n        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),\n        defaultTitle: _propTypes2.default.string,\n        defer: _propTypes2.default.bool,\n        encodeSpecialCharacters: _propTypes2.default.bool,\n        htmlAttributes: _propTypes2.default.object,\n        link: _propTypes2.default.arrayOf(_propTypes2.default.object),\n        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),\n        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),\n        onChangeClientState: _propTypes2.default.func,\n        script: _propTypes2.default.arrayOf(_propTypes2.default.object),\n        style: _propTypes2.default.arrayOf(_propTypes2.default.object),\n        title: _propTypes2.default.string,\n        titleAttributes: _propTypes2.default.object,\n        titleTemplate: _propTypes2.default.string\n    }, _class.defaultProps = {\n        defer: true,\n        encodeSpecialCharacters: true\n    }, _class.peek = Component.peek, _class.rewind = function () {\n        var mappedState = Component.rewind();\n        if (!mappedState) {\n            // provide fallback if mappedState is undefined\n            mappedState = mapStateOnServer({\n                baseTag: [],\n                bodyAttributes: {},\n                encodeSpecialCharacters: true,\n                htmlAttributes: {},\n                linkTags: [],\n                metaTags: [],\n                noscriptTags: [],\n                scriptTags: [],\n                styleTags: [],\n                title: \"\",\n                titleAttributes: {}\n            });\n        }\n\n        return mappedState;\n    }, _temp;\n};\n\nvar NullComponent = function NullComponent() {\n    return null;\n};\n\nvar HelmetSideEffects = (0, _reactSideEffect2.default)(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);\n\nvar HelmetExport = Helmet(HelmetSideEffects);\nHelmetExport.renderStatic = HelmetExport.rewind;\n\nexports.default = HelmetExport;\nexports.Helmet = HelmetExport;\n\n//# sourceURL=webpack:///./node_modules/react-helmet/es/Helmet.js?");

/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction _interopDefault(ex) {\n  return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;\n}\n\nvar React = __webpack_require__(/*! react */ \"react\");\nvar React__default = _interopDefault(React);\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  subClass.__proto__ = superClass;\n}\n\nvar canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);\nfunction withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {\n  if (typeof reducePropsToState !== 'function') {\n    throw new Error('Expected reducePropsToState to be a function.');\n  }\n\n  if (typeof handleStateChangeOnClient !== 'function') {\n    throw new Error('Expected handleStateChangeOnClient to be a function.');\n  }\n\n  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {\n    throw new Error('Expected mapStateOnServer to either be undefined or a function.');\n  }\n\n  function getDisplayName(WrappedComponent) {\n    return WrappedComponent.displayName || WrappedComponent.name || 'Component';\n  }\n\n  return function wrap(WrappedComponent) {\n    if (typeof WrappedComponent !== 'function') {\n      throw new Error('Expected WrappedComponent to be a React component.');\n    }\n\n    var mountedInstances = [];\n    var state;\n\n    function emitChange() {\n      state = reducePropsToState(mountedInstances.map(function (instance) {\n        return instance.props;\n      }));\n\n      if (SideEffect.canUseDOM) {\n        handleStateChangeOnClient(state);\n      } else if (mapStateOnServer) {\n        state = mapStateOnServer(state);\n      }\n    }\n\n    var SideEffect =\n    /*#__PURE__*/\n    function (_PureComponent) {\n      _inheritsLoose(SideEffect, _PureComponent);\n\n      function SideEffect() {\n        return _PureComponent.apply(this, arguments) || this;\n      }\n\n      // Try to use displayName of wrapped component\n      // Expose canUseDOM so tests can monkeypatch it\n      SideEffect.peek = function peek() {\n        return state;\n      };\n\n      SideEffect.rewind = function rewind() {\n        if (SideEffect.canUseDOM) {\n          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');\n        }\n\n        var recordedState = state;\n        state = undefined;\n        mountedInstances = [];\n        return recordedState;\n      };\n\n      var _proto = SideEffect.prototype;\n\n      _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {\n        mountedInstances.push(this);\n        emitChange();\n      };\n\n      _proto.componentDidUpdate = function componentDidUpdate() {\n        emitChange();\n      };\n\n      _proto.componentWillUnmount = function componentWillUnmount() {\n        var index = mountedInstances.indexOf(this);\n        mountedInstances.splice(index, 1);\n        emitChange();\n      };\n\n      _proto.render = function render() {\n        return React__default.createElement(WrappedComponent, this.props);\n      };\n\n      return SideEffect;\n    }(React.PureComponent);\n\n    _defineProperty(SideEffect, \"displayName\", \"SideEffect(\" + getDisplayName(WrappedComponent) + \")\");\n\n    _defineProperty(SideEffect, \"canUseDOM\", canUseDOM);\n\n    return SideEffect;\n  };\n}\n\nmodule.exports = withSideEffect;\n\n//# sourceURL=webpack:///./node_modules/react-side-effect/lib/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Header = __webpack_require__(/*! ./components/common/Header */ \"./src/components/common/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(props) {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, { staticContext: props.staticContext }),\n        (0, _reactRouterConfig.renderRoutes)(props.route.routes)\n    );\n};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _config = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = _axios2.default.create({\n    baseURL: '/',\n    params: {\n        secret: _config2.default.secret\n    }\n});\nexports.default = instance;\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Home/component/index.js":
/*!************************************************!*\
  !*** ./src/components/Home/component/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n\nvar _action = __webpack_require__(/*! ../state/action */ \"./src/components/Home/state/action.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/components/Home/component/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyles = __webpack_require__(/*! ../../hooks/withStyles */ \"./src/components/hooks/withStyles.js\");\n\nvar _withStyles2 = _interopRequireDefault(_withStyles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home(props) {\n    (0, _withStyles2.default)(props, _style2.default);\n    var exchange = props.exchange,\n        getHomeList = props.getHomeList,\n        changeLogin = props.changeLogin;\n\n    var homeList = props.homeList;\n    (0, _react.useEffect)(function () {\n        getHomeList();\n    }, []);\n\n    return _react2.default.createElement(\n        _react.Fragment,\n        null,\n        _react2.default.createElement(\n            _reactHelmet.Helmet,\n            null,\n            _react2.default.createElement(\n                'title',\n                null,\n                'JOJO\\u5B66\\u4E60ssr\\u7F51\\u7AD9-\\u4E30\\u5BCC\\u591A\\u5F69\\u7684\\u54A8\\u8BE2'\n            ),\n            _react2.default.createElement('meta', { name: 'description', content: 'JOJO\\u5B66\\u4E60ssr\\u7F51\\u7AD9-\\u4E30\\u5BCC\\u591A\\u5F69\\u7684\\u54A8\\u8BE2' })\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: _style2.default.test },\n            '\\u8FD9\\u91CC\\u662Fstore\\u6570\\u636Ename: ',\n            props.name,\n            ' '\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    exchange(\"修改后名字AAA\");\n                } },\n            '\\u4FEE\\u6539\\u540D\\u5B57'\n        ),\n        homeList && homeList.map(function (item, index) {\n            return _react2.default.createElement(\n                'div',\n                { key: item.key },\n                _react2.default.createElement(\n                    'span',\n                    null,\n                    item.key\n                ),\n                _react2.default.createElement(\n                    'span',\n                    { styles: { marginLeft: '10px' } },\n                    ' ',\n                    item.value\n                )\n            );\n        }),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    changeLogin(false);\n                } },\n            '\\u4FEE\\u6539login'\n        )\n    );\n};\nHome.loadData = function (store) {\n    // 负责在服务器端渲染之前，把这个路由需要的数据提前加载好\n    return store.dispatch((0, _action.getHomeList)());\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        name: state.homeReducer.name,\n        homeList: state.homeReducer.homeList,\n        isLogin: state.homeReducer.isLogin\n    };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    var methods = {\n        exchange: _action.exchange,\n        getHomeList: _action.getHomeList,\n        changeLogin: _action.changeLogin\n    };\n    return _extends({}, (0, _redux.bindActionCreators)(methods, dispatch));\n};\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\n//# sourceURL=webpack:///./src/components/Home/component/index.js?");

/***/ }),

/***/ "./src/components/Home/component/style.css":
/*!*************************************************!*\
  !*** ./src/components/Home/component/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/components/Home/component/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/Home/component/style.css?");

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.homeReducer = exports.Home = undefined;\n\nvar _component = __webpack_require__(/*! ./component */ \"./src/components/Home/component/index.js\");\n\nvar _component2 = _interopRequireDefault(_component);\n\nvar _reducer = __webpack_require__(/*! ./state/reducer */ \"./src/components/Home/state/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Home = _component2.default;\nexports.homeReducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/components/Home/index.js?");

/***/ }),

/***/ "./src/components/Home/state/action.js":
/*!*********************************************!*\
  !*** ./src/components/Home/state/action.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.changeLogin = changeLogin;\nexports.exchange = exchange;\nvar GET_NAME = exports.GET_NAME = 'index => change from';\nvar GET_HOME_LIST_SUCCESS = exports.GET_HOME_LIST_SUCCESS = 'index => get home list success';\nvar GET_HOME_CHANGE_LOGIN = exports.GET_HOME_CHANGE_LOGIN = 'index => get home change login';\n\nfunction changeLogin(opts) {\n    return function (dispatch, getState) {\n        dispatch({\n            type: GET_HOME_CHANGE_LOGIN,\n            payload: opts\n        });\n    };\n}\nfunction exchange(opts) {\n    return function (dispatch, getState) {\n        dispatch({\n            type: GET_NAME,\n            payload: opts\n        });\n    };\n}\nvar getHomeList = exports.getHomeList = function getHomeList() {\n    // http://route.showapi.com/341-2\n    // 浏览器运行\n    // /api/341-2 = http://localhost:5000/api/341-2\n    // 服务器运行\n    // /api/341-2 = 服务器根目录下/api/341-2 没有这个文件，始终获取不到\n\n    return function (dispatch, getSate, axiosInstance) {\n        return axiosInstance.get('/api/341-2').then(function (res) {\n            var data = [{\n                key: '1',\n                value: '极限挑战'\n            }, {\n                key: '2',\n                value: '向往的生活'\n            }];\n            dispatch({\n                type: GET_HOME_LIST_SUCCESS,\n                payload: data\n            });\n        });\n    };\n};\n\n//# sourceURL=webpack:///./src/components/Home/state/action.js?");

/***/ }),

/***/ "./src/components/Home/state/reducer.js":
/*!**********************************************!*\
  !*** ./src/components/Home/state/reducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = homeReducer;\n\nvar _immutable = __webpack_require__(/*! immutable */ \"immutable\");\n\nvar _immutable2 = _interopRequireDefault(_immutable);\n\nvar _action = __webpack_require__(/*! ./action */ \"./src/components/Home/state/action.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createInitialState = function createInitialState() {\n    return {\n        name: 'baifan',\n        homeList: [],\n        isLogin: true\n    };\n};\n\nfunction homeReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : createInitialState();\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _action.GET_NAME:\n            var newState = Object.assign({}, state, { name: action.payload });\n            return newState;\n        case _action.GET_HOME_LIST_SUCCESS:\n            var newList = Object.assign({}, state, { homeList: action.payload });\n            return newList;\n        case _action.GET_HOME_CHANGE_LOGIN:\n            return Object.assign({}, state, { isLogin: action.payload });\n        default:\n            return state;\n    }\n}\n\n//# sourceURL=webpack:///./src/components/Home/state/reducer.js?");

/***/ }),

/***/ "./src/components/Login/age/action.js":
/*!********************************************!*\
  !*** ./src/components/Login/age/action.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar GET_AGE = exports.GET_AGE = 'index => get age';\n\nvar exchangeAge = exports.exchangeAge = function exchangeAge(count) {\n    return {\n        type: GET_AGE,\n        payload: count\n    };\n};\n\n//# sourceURL=webpack:///./src/components/Login/age/action.js?");

/***/ }),

/***/ "./src/components/Login/age/reducer.js":
/*!*********************************************!*\
  !*** ./src/components/Login/age/reducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.createOtherInitialState = undefined;\nexports.default = ageReducer;\n\nvar _action = __webpack_require__(/*! ./action */ \"./src/components/Login/age/action.js\");\n\nvar createOtherInitialState = exports.createOtherInitialState = function createOtherInitialState() {\n    return {\n        age: 18\n    };\n};\nfunction ageReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : createInitialState();\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _action.GET_AGE:\n            var _state = JSON.parse(JSON.stringify(state));\n            _state.age = action.payload;\n            return _state;\n        default:\n            return state;\n    }\n}\n\n//# sourceURL=webpack:///./src/components/Login/age/reducer.js?");

/***/ }),

/***/ "./src/components/Login/component/ItemAge.js":
/*!***************************************************!*\
  !*** ./src/components/Login/component/ItemAge.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ = __webpack_require__(/*! . */ \"./src/components/Login/component/index.js\");\n\nvar _action = __webpack_require__(/*! ../age/action */ \"./src/components/Login/age/action.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ItemLogin = function ItemLogin() {\n    var itemContext = (0, _react.useContext)(_.ageContext);\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            'div',\n            null,\n            '\\u6211\\u662F\\u5B50\\u7EC4\\u4EF6\\u5E74\\u9F84:',\n            itemContext.state.age\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    itemContext.dispatch((0, _action.exchangeAge)(6));\n                } },\n            '\\u5B50\\u7EC4\\u4EF6\\u4FEE\\u6539\\u5E74\\u9F846'\n        )\n    );\n};\n\nexports.default = ItemLogin;\n\n//# sourceURL=webpack:///./src/components/Login/component/ItemAge.js?");

/***/ }),

/***/ "./src/components/Login/component/ItemName.js":
/*!****************************************************!*\
  !*** ./src/components/Login/component/ItemName.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ = __webpack_require__(/*! . */ \"./src/components/Login/component/index.js\");\n\nvar _action = __webpack_require__(/*! ../name/action */ \"./src/components/Login/name/action.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ItemLogin = function ItemLogin() {\n    var itemContext = (0, _react.useContext)(_.NameContext);\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            'div',\n            null,\n            '\\u6211\\u662F\\u5B50\\u7EC4\\u4EF6\\u540D\\u5B57:',\n            itemContext.state.name\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    itemContext.dispatch((0, _action.exchange)('angel'));\n                } },\n            '\\u5B50\\u7EC4\\u4EF6\\u4FEE\\u6539\\u540D\\u5B57'\n        )\n    );\n};\n\nexports.default = ItemLogin;\n\n//# sourceURL=webpack:///./src/components/Login/component/ItemName.js?");

/***/ }),

/***/ "./src/components/Login/component/index.js":
/*!*************************************************!*\
  !*** ./src/components/Login/component/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.ageContext = exports.NameContext = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n\nvar _ItemName = __webpack_require__(/*! ./ItemName */ \"./src/components/Login/component/ItemName.js\");\n\nvar _ItemName2 = _interopRequireDefault(_ItemName);\n\nvar _ItemAge = __webpack_require__(/*! ./ItemAge */ \"./src/components/Login/component/ItemAge.js\");\n\nvar _ItemAge2 = _interopRequireDefault(_ItemAge);\n\nvar _reducer = __webpack_require__(/*! ../name/reducer */ \"./src/components/Login/name/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _action = __webpack_require__(/*! ../name/action */ \"./src/components/Login/name/action.js\");\n\nvar _reducer3 = __webpack_require__(/*! ../age/reducer */ \"./src/components/Login/age/reducer.js\");\n\nvar _reducer4 = _interopRequireDefault(_reducer3);\n\nvar _action2 = __webpack_require__(/*! ../age/action */ \"./src/components/Login/age/action.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/components/Login/component/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyles = __webpack_require__(/*! ../../hooks/withStyles */ \"./src/components/hooks/withStyles.js\");\n\nvar _withStyles2 = _interopRequireDefault(_withStyles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NameContext = exports.NameContext = (0, _react.createContext)(null);\nvar ageContext = exports.ageContext = (0, _react.createContext)(null);\n\nvar initialState = { count: 0 };\nfunction countReducer(state, action) {\n    switch (action.type) {\n        case 'increment':\n            return { count: state.count + 1 };\n        case 'decrement':\n            return { count: state.count - 1 };\n        default:\n            throw new Error();\n    }\n}\n\nvar Login = function Login(props) {\n    (0, _withStyles2.default)(props, _style2.default);\n\n    var _useState = (0, _react.useState)(18),\n        _useState2 = _slicedToArray(_useState, 2),\n        age = _useState2[0],\n        setAge = _useState2[1];\n\n    var _useReducer = (0, _react.useReducer)(countReducer, initialState),\n        _useReducer2 = _slicedToArray(_useReducer, 2),\n        countState = _useReducer2[0],\n        countDispatch = _useReducer2[1];\n\n    var _useReducer3 = (0, _react.useReducer)(_reducer2.default, (0, _reducer.createInitialState)()),\n        _useReducer4 = _slicedToArray(_useReducer3, 2),\n        nameState = _useReducer4[0],\n        nameDispatch = _useReducer4[1];\n\n    var _useReducer5 = (0, _react.useReducer)(_reducer4.default, (0, _reducer3.createOtherInitialState)()),\n        _useReducer6 = _slicedToArray(_useReducer5, 2),\n        ageState = _useReducer6[0],\n        ageDispatch = _useReducer6[1];\n\n    (0, _react.useEffect)(function () {\n        // document.title = `You clicked ${countState.count} times`;\n        setAge(countState.count);\n    }, [countState.count]);\n\n    var onChangeAge = function onChangeAge() {\n        setAge(28);\n    };\n    return _react2.default.createElement(\n        _react.Fragment,\n        null,\n        _react2.default.createElement(\n            _reactHelmet.Helmet,\n            null,\n            _react2.default.createElement(\n                'title',\n                null,\n                'JOJO-\\u4E30\\u5BCC\\u591A\\u5F69\\u7684\\u54A8\\u8BE2'\n            ),\n            _react2.default.createElement('meta', { name: 'description', content: 'JOJO\\u5B66\\u4E60ssr\\u7F51\\u7AD9-\\u4E30\\u5BCC\\u591A\\u5F69\\u7684\\u54A8\\u8BE2' })\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: _style2.default.test },\n            'Login'\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            '\\u5E74\\u9F84:',\n            age\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: onChangeAge },\n            '\\u8BBE\\u7F6E\\u65B0\\u7684\\u5E74\\u9F84'\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n            'div',\n            null,\n            '\\u8BA1\\u6570\\u5668\\uFF1A',\n            countState.count\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    return countDispatch({ type: 'increment' });\n                } },\n            '+'\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    return countDispatch({ type: 'decrement' });\n                } },\n            '-'\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n            'div',\n            null,\n            '\\u540D\\u5B57\\uFF1A',\n            nameState.name\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    nameDispatch((0, _action.exchange)('柏帆'));\n                } },\n            '\\u7236\\u7EC4\\u4EF6\\u4FEE\\u6539\\u540D\\u5B57'\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n            NameContext.Provider,\n            { value: { state: nameState, dispatch: nameDispatch } },\n            _react2.default.createElement(_ItemName2.default, null)\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n            'div',\n            null,\n            '\\u5E74\\u9F84\\uFF1A',\n            ageState.age\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    ageDispatch((0, _action2.exchangeAge)(8));\n                } },\n            '\\u7236\\u7EC4\\u4EF6\\u4FEE\\u6539\\u5E74\\u9F848'\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n            ageContext.Provider,\n            { value: { state: { age: age }, dispatch: ageDispatch } },\n            _react2.default.createElement(_ItemAge2.default, null)\n        )\n    );\n};\n\nexports.default = Login;\n\n//# sourceURL=webpack:///./src/components/Login/component/index.js?");

/***/ }),

/***/ "./src/components/Login/component/style.css":
/*!**************************************************!*\
  !*** ./src/components/Login/component/style.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/components/Login/component/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/Login/component/style.css?");

/***/ }),

/***/ "./src/components/Login/index.js":
/*!***************************************!*\
  !*** ./src/components/Login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Login = undefined;\n\nvar _component = __webpack_require__(/*! ./component */ \"./src/components/Login/component/index.js\");\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Login = _component2.default;\n\n//# sourceURL=webpack:///./src/components/Login/index.js?");

/***/ }),

/***/ "./src/components/Login/name/action.js":
/*!*********************************************!*\
  !*** ./src/components/Login/name/action.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar GET_NAMES = exports.GET_NAMES = 'index => get names';\n\nvar exchange = exports.exchange = function exchange(count) {\n    return {\n        type: GET_NAMES,\n        payload: count\n    };\n};\n\n//# sourceURL=webpack:///./src/components/Login/name/action.js?");

/***/ }),

/***/ "./src/components/Login/name/reducer.js":
/*!**********************************************!*\
  !*** ./src/components/Login/name/reducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.createInitialState = undefined;\nexports.default = nameReducer;\n\nvar _action = __webpack_require__(/*! ./action */ \"./src/components/Login/name/action.js\");\n\nvar createInitialState = exports.createInitialState = function createInitialState() {\n    return {\n        name: 'baifan11'\n    };\n};\nfunction nameReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : createInitialState();\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _action.GET_NAMES:\n            var _state = JSON.parse(JSON.stringify(state));\n            _state.name = action.payload;\n            return _state;\n        default:\n            return state;\n    }\n}\n\n//# sourceURL=webpack:///./src/components/Login/name/reducer.js?");

/***/ }),

/***/ "./src/components/Main/index.js":
/*!**************************************!*\
  !*** ./src/components/Main/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Main = function (_Component) {\n  _inherits(Main, _Component);\n\n  function Main() {\n    _classCallCheck(this, Main);\n\n    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));\n\n    _this.state = {\n      val: 0,\n      isLogin: false\n    };\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: 'render',\n    value: function render() {\n      if (!this.state.isLogin) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n      }\n      return _react2.default.createElement(\n        'div',\n        null,\n        '1111'\n      );\n    }\n  }]);\n\n  return Main;\n}(_react.Component);\n\n;\nexports.default = Main;\n\n//# sourceURL=webpack:///./src/components/Main/index.js?");

/***/ }),

/***/ "./src/components/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/components/NotFound/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFound = function NotFound(props) {\n  var staticContext = props.staticContext;\n\n  staticContext && (staticContext.NOT_FOUND = true);\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    '404, sorry!'\n  );\n};\nexports.default = NotFound;\n\n//# sourceURL=webpack:///./src/components/NotFound/index.js?");

/***/ }),

/***/ "./src/components/common/Header.js":
/*!*****************************************!*\
  !*** ./src/components/common/Header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/components/common/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyles = __webpack_require__(/*! ../hooks/withStyles */ \"./src/components/hooks/withStyles.js\");\n\nvar _withStyles2 = _interopRequireDefault(_withStyles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header(props) {\n    (0, _withStyles2.default)(props, _style2.default);\n    return _react2.default.createElement(\n        'div',\n        { className: _style2.default.test },\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/' },\n            'Home222'\n        ),\n        '  +++++++',\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/login' },\n            'Login'\n        )\n    );\n};\n\nexports.default = Header;\n\n//# sourceURL=webpack:///./src/components/common/Header.js?");

/***/ }),

/***/ "./src/components/common/style.css":
/*!*****************************************!*\
  !*** ./src/components/common/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/components/common/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/common/style.css?");

/***/ }),

/***/ "./src/components/hooks/withStyles.js":
/*!********************************************!*\
  !*** ./src/components/hooks/withStyles.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar withStyles = function withStyles(props, styles) {\n    console.log('3333', props, styles);\n    if (props.staticContext) {\n        props.staticContext.css.push(styles._getCss());\n    }\n    return null;\n};\nexports.default = withStyles;\n\n//# sourceURL=webpack:///./src/components/hooks/withStyles.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    secret: 'abs5555'\n};\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _Main = __webpack_require__(/*! ./components/Main */ \"./src/components/Main/index.js\");\n\nvar _Main2 = _interopRequireDefault(_Main);\n\nvar _NotFound = __webpack_require__(/*! ./components/NotFound */ \"./src/components/NotFound/index.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nvar _Home = __webpack_require__(/*! ./components/Home */ \"./src/components/Home/index.js\");\n\nvar _Login = __webpack_require__(/*! ./components/Login */ \"./src/components/Login/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n    path: '/',\n    component: _App2.default,\n    routes: [{\n        path: '/',\n        component: _Home.Home,\n        exact: true,\n        loadData: _Home.Home.loadData,\n        key: 'home'\n        // routes: [\n        //     {\n        //         path:'/test',\n        //         component: Login,\n        //         key: 'test',\n        //         exact: true,\n        //     }\n        // ]\n    }, {\n        path: '/login',\n        component: _Login.Login,\n        exact: true,\n        loadData: _Home.Home.loadData,\n        key: 'login'\n    }, {\n        path: '/main',\n        component: _Main2.default,\n        exact: true\n    }, {\n        component: _NotFound2.default\n    }]\n}];\n\n// export default (\n//     <div>\n//         <Route path='/' exact component={Home}></Route>\n//         <Route path='/login' exact component={Login}></Route>\n//     </div>\n// )\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _index = __webpack_require__(/*! ../store/index */ \"./src/store/index.js\");\n\nvar _router = __webpack_require__(/*! ../router */ \"./src/router.js\");\n\nvar _router2 = _interopRequireDefault(_router);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// es modules语法\n// const express = require('express')\n// const path = require('path'); //系统路径模块\n// const fs = require('fs'); //文件模块\n// const Home = require('./src/Home')\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static('public')); // 发现加载静态文件就去根目录下的public文件里面找\napp.use('/api', (0, _expressHttpProxy2.default)('http://route.showapi.com', {\n    proxyReqPathResolver: function proxyReqPathResolver(req) {\n        return req.url;\n    }\n}));\n// * 所有路由都会走\napp.get('*', function (req, res) {\n    var store = (0, _index.getStore)(req);\n    // 如果在这里，可以拿到异步数据，并填充到store中\n    // store里面填充什么，需要结合用户请求地址和路由\n    // 如果访问 / 路径，拿到Home组件的异步数据\n    // 如果访问 /login 路径，拿到Login组件的异步数据\n\n    // 根据路由路径，往store里面加数据\n    var _matchRoutes = (0, _reactRouterConfig.matchRoutes)(_router2.default, req.path);\n    // 问题一：matchRoutes空数组\n    // matchRoutes打印出来两个，第二个是个空数组，这是在请求favicon.ico，在public里面存放给一个favicon.ico即可\n    // 问题二：嵌套路由\n    // 使用react-router-config里面的matchRoutes\n\n    // 让matchRoutes里所有组件对用的loadData都执行一次，并改变store\n\n\n    // 一个页面要加载A,B,C,D四个组件，这四个组件都要服务器加载数据\n    // 假设A组件加载失败\n    // 1、假设B,C,D组件已经加载完成\n    // 2、假设B,C,D组件接口比较慢，没有加载完成就会直接走到catch，这样就会都渲染不出来\n    var promises = [];\n    _matchRoutes.forEach(function (item) {\n        if (item.route.loadData) {\n            var promise = new Promise(function (resolve, reject) {\n                item.route.loadData(store).then(resolve).catch(resolve);\n            });\n            promises.push(promise);\n        }\n    });\n\n    Promise.all(promises).then(function () {\n        var context = { css: [] };\n        var html = (0, _utils.render)(store, _router2.default, req, context);\n        console.log('context', context);\n        if (context.action === 'REPLACE') {\n            res.redirect(301, context.url);\n        } else if (context.NOT_FOUND) {\n            res.status(404);\n            res.send(html);\n        } else {\n            res.send(html);\n        }\n    }).catch(function (err) {\n        console.log('err+++++++++', err);\n        res.end('sorry, request error');\n    });\n});\n\nconsole.log('node 成功');\n\napp.listen(5000);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _config = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createInstance = function createInstance(req) {\n    var instance = _axios2.default.create({\n        baseURL: 'http://route.showapi.com',\n        headers: {\n            cookie: req.get('cookie') ? req.get('cookie') : null\n        },\n        params: {\n            secret: _config2.default.secret\n        }\n    });\n    return instance;\n};\n\nexports.default = createInstance;\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(store, routes, req, context) {\n\n    var content = (0, _server.renderToString)(_react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: req.path, context: context },\n            _react2.default.createElement(\n                'div',\n                null,\n                (0, _reactRouterConfig.renderRoutes)(routes)\n            )\n        )\n    ));\n    var helmet = _reactHelmet.Helmet.renderStatic();\n    var cssStr = context.css.length ? context.css.join('\\n') : '';\n    return '<html>\\n            <head>\\n                ' + helmet.title.toString() + '\\n                ' + helmet.meta.toString() + '\\n                <style>' + cssStr + '</style>\\n            </head>\\n            <body>\\n                <div id=\"root\">' + content + '</div>\\n                <script>\\n                    window.context = {\\n                        state: ' + JSON.stringify(store.getState()) + '\\n                    }\\n                </script>\\n                <script src=\"./index.js\"></script>\\n              \\n            </body>\\n        </html>';\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _Home = __webpack_require__(/*! ./../components/Home */ \"./src/components/Home/index.js\");\n\nvar _request = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _request3 = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\nvar _request4 = _interopRequireDefault(_request3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducers = (0, _redux.combineReducers)({\n    homeReducer: _Home.homeReducer\n});\nvar getStore = exports.getStore = function getStore(req) {\n    return (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument((0, _request4.default)(req))));\n};\n\nvar getClientStore = exports.getClientStore = function getClientStore() {\n    var defaultState = window.context.state;\n    return (0, _redux.createStore)(reducers, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.default)));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immutable\");\n\n//# sourceURL=webpack:///external_%22immutable%22?");

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"object-assign\");\n\n//# sourceURL=webpack:///external_%22object-assign%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });