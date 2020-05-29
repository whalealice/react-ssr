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

/***/ "./src/components/Home/component/index.js":
/*!************************************************!*\
  !*** ./src/components/Home/component/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../common/Header */ \"./src/components/common/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _action = __webpack_require__(/*! ../state/action */ \"./src/components/Home/state/action.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home(props) {\n    console.log('props', props);\n    var exchange = props.exchange;\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n            'div',\n            null,\n            '\\u8FD9\\u91CC\\u662Fstore\\u6570\\u636Ename: ',\n            props.name,\n            ' '\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    exchange(\"修改后名字AAA\");\n                } },\n            '\\u4FEE\\u6539\\u540D\\u5B57'\n        )\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return state.homeReducer;\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    var methods = {\n        exchange: _action.exchange\n    };\n    return _extends({}, (0, _redux.bindActionCreators)(methods, dispatch));\n};\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\n//# sourceURL=webpack:///./src/components/Home/component/index.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.exchange = exchange;\nvar GET_NAME = exports.GET_NAME = 'index => change from';\n\nfunction exchange(opts) {\n    return function (dispatch, getState) {\n        dispatch({\n            type: GET_NAME,\n            payload: opts\n        });\n    };\n}\n\n//# sourceURL=webpack:///./src/components/Home/state/action.js?");

/***/ }),

/***/ "./src/components/Home/state/reducer.js":
/*!**********************************************!*\
  !*** ./src/components/Home/state/reducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = homeReducer;\n\nvar _action = __webpack_require__(/*! ./action */ \"./src/components/Home/state/action.js\");\n\nvar createInitialState = function createInitialState() {\n    return {\n        name: 'baifan',\n        count: 0\n    };\n};\n\nfunction homeReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : createInitialState();\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _action.GET_NAME:\n            var _state = JSON.parse(JSON.stringify(state));\n            _state.name = action.payload;\n            console.log('_state', _state);\n            return _state;\n        default:\n            return state;\n    }\n}\n\n//# sourceURL=webpack:///./src/components/Home/state/reducer.js?");

/***/ }),

/***/ "./src/components/Login/ItemAge.js":
/*!*****************************************!*\
  !*** ./src/components/Login/ItemAge.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Login = __webpack_require__(/*! ./Login */ \"./src/components/Login/Login.js\");\n\nvar _action = __webpack_require__(/*! ./age/action */ \"./src/components/Login/age/action.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ItemLogin = function ItemLogin() {\n    var itemContext = (0, _react.useContext)(_Login.ageContext);\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            'div',\n            null,\n            '\\u6211\\u662F\\u5B50\\u7EC4\\u4EF6\\u5E74\\u9F84:',\n            itemContext.state.age\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    itemContext.dispatch((0, _action.exchangeAge)(6));\n                } },\n            '\\u5B50\\u7EC4\\u4EF6\\u4FEE\\u6539\\u5E74\\u9F846'\n        )\n    );\n};\n\nexports.default = ItemLogin;\n\n//# sourceURL=webpack:///./src/components/Login/ItemAge.js?");

/***/ }),

/***/ "./src/components/Login/ItemName.js":
/*!******************************************!*\
  !*** ./src/components/Login/ItemName.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Login = __webpack_require__(/*! ./Login */ \"./src/components/Login/Login.js\");\n\nvar _action = __webpack_require__(/*! ./name/action */ \"./src/components/Login/name/action.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ItemLogin = function ItemLogin() {\n    var itemContext = (0, _react.useContext)(_Login.NameContext);\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            'div',\n            null,\n            '\\u6211\\u662F\\u5B50\\u7EC4\\u4EF6\\u540D\\u5B57:',\n            itemContext.state.name\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    itemContext.dispatch((0, _action.exchange)('angel'));\n                } },\n            '\\u5B50\\u7EC4\\u4EF6\\u4FEE\\u6539\\u540D\\u5B57'\n        )\n    );\n};\n\nexports.default = ItemLogin;\n\n//# sourceURL=webpack:///./src/components/Login/ItemName.js?");

/***/ }),

/***/ "./src/components/Login/Login.js":
/*!***************************************!*\
  !*** ./src/components/Login/Login.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.ageContext = exports.NameContext = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../common/Header */ \"./src/components/common/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _ItemName = __webpack_require__(/*! ./ItemName */ \"./src/components/Login/ItemName.js\");\n\nvar _ItemName2 = _interopRequireDefault(_ItemName);\n\nvar _ItemAge = __webpack_require__(/*! ./ItemAge */ \"./src/components/Login/ItemAge.js\");\n\nvar _ItemAge2 = _interopRequireDefault(_ItemAge);\n\nvar _reducer = __webpack_require__(/*! ./name/reducer */ \"./src/components/Login/name/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _action = __webpack_require__(/*! ./name/action */ \"./src/components/Login/name/action.js\");\n\nvar _reducer3 = __webpack_require__(/*! ./age/reducer */ \"./src/components/Login/age/reducer.js\");\n\nvar _reducer4 = _interopRequireDefault(_reducer3);\n\nvar _action2 = __webpack_require__(/*! ./age/action */ \"./src/components/Login/age/action.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NameContext = exports.NameContext = (0, _react.createContext)(null);\nvar ageContext = exports.ageContext = (0, _react.createContext)(null);\n\nvar initialState = { count: 0 };\nfunction countReducer(state, action) {\n    switch (action.type) {\n        case 'increment':\n            return { count: state.count + 1 };\n        case 'decrement':\n            return { count: state.count - 1 };\n        default:\n            throw new Error();\n    }\n}\n\nvar Login = function Login() {\n    var _useState = (0, _react.useState)(18),\n        _useState2 = _slicedToArray(_useState, 2),\n        age = _useState2[0],\n        setAge = _useState2[1];\n\n    var _useReducer = (0, _react.useReducer)(countReducer, initialState),\n        _useReducer2 = _slicedToArray(_useReducer, 2),\n        countState = _useReducer2[0],\n        countDispatch = _useReducer2[1];\n\n    var _useReducer3 = (0, _react.useReducer)(_reducer2.default, (0, _reducer.createInitialState)()),\n        _useReducer4 = _slicedToArray(_useReducer3, 2),\n        nameState = _useReducer4[0],\n        nameDispatch = _useReducer4[1];\n\n    var _useReducer5 = (0, _react.useReducer)(_reducer4.default, (0, _reducer3.createOtherInitialState)()),\n        _useReducer6 = _slicedToArray(_useReducer5, 2),\n        ageState = _useReducer6[0],\n        ageDispatch = _useReducer6[1];\n\n    (0, _react.useEffect)(function () {\n        document.title = 'You clicked ' + countState.count + ' times';\n        setAge(countState.count);\n    }, [countState.count]);\n\n    var onChageAge = function onChageAge() {\n        setAge(28);\n    };\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n            'div',\n            null,\n            'Login'\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            '\\u5E74\\u9F84:',\n            age\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: onChageAge },\n            '\\u8BBE\\u7F6E\\u65B0\\u7684\\u5E74\\u9F84'\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n            'div',\n            null,\n            '\\u8BA1\\u6570\\u5668\\uFF1A',\n            countState.count\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    return countDispatch({ type: 'increment' });\n                } },\n            '+'\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    return countDispatch({ type: 'decrement' });\n                } },\n            '-'\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n            'div',\n            null,\n            '\\u540D\\u5B57\\uFF1A',\n            nameState.name\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    nameDispatch((0, _action.exchange)('柏帆'));\n                } },\n            '\\u7236\\u7EC4\\u4EF6\\u4FEE\\u6539\\u540D\\u5B57'\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n            NameContext.Provider,\n            { value: { state: nameState, dispatch: nameDispatch } },\n            _react2.default.createElement(_ItemName2.default, null)\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n            'div',\n            null,\n            '\\u5E74\\u9F84\\uFF1A',\n            ageState.age\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    ageDispatch((0, _action2.exchangeAge)(8));\n                } },\n            '\\u7236\\u7EC4\\u4EF6\\u4FEE\\u6539\\u5E74\\u9F848'\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n            ageContext.Provider,\n            { value: { state: { age: age }, dispatch: ageDispatch } },\n            _react2.default.createElement(_ItemAge2.default, null)\n        )\n    );\n};\n\nexports.default = Login;\n\n//# sourceURL=webpack:///./src/components/Login/Login.js?");

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

/***/ "./src/components/common/Header.js":
/*!*****************************************!*\
  !*** ./src/components/common/Header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header(props) {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/' },\n            'Home'\n        ),\n        '  |$',\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/login' },\n            'Login'\n        )\n    );\n};\n\nexports.default = Header;\n\n//# sourceURL=webpack:///./src/components/common/Header.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./components/Home */ \"./src/components/Home/index.js\");\n\nvar _Login = __webpack_require__(/*! ./components/Login/Login */ \"./src/components/Login/Login.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Home.Home }),\n    _react2.default.createElement(_reactRouterDom.Route, { path: '/login', exact: true, component: _Login2.default })\n);\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _router = __webpack_require__(/*! ../router */ \"./src/router.js\");\n\nvar _router2 = _interopRequireDefault(_router);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _index = __webpack_require__(/*! ../store/index */ \"./src/store/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)(); // es modules语法\n// const express = require('express')\n// const path = require('path'); //系统路径模块\n// const fs = require('fs'); //文件模块\n// const Home = require('./src/Home')\n\napp.use(_express2.default.static('public')); // 发现加载静态文件就去根目录下的public文件里面找\n\n// * 所有路由都会走\napp.get('*', function (request, response) {\n\n    var context = (0, _server.renderToString)(_react2.default.createElement(\n        _reactRedux.Provider,\n        { store: (0, _index2.default)() },\n        _react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: request.path, context: {} },\n            _router2.default\n        )\n    ));\n    response.send('<html>\\n            <head>\\n                <title>react server</title>\\n            </head>\\n            <body>\\n                <div id=\"root\">' + context + '</div>\\n                <script src=\"./index.js\"></script>\\n               \\n            </body>\\n        </html>');\n    // response.end()\n});\n\nconsole.log('node 成功');\n\napp.listen(5000);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _Home = __webpack_require__(/*! ./../components/Home */ \"./src/components/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducers = (0, _redux.combineReducers)({\n    homeReducer: _Home2.default\n});\nvar getStore = function getStore() {\n    return (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n};\n\nexports.default = getStore;\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

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