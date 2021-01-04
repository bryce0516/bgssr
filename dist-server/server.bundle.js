/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 341:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(297));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var About = function About() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, "this is about page"));
};

var _default = About;
exports.default = _default;

/***/ }),

/***/ 255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = App;

var _react = _interopRequireWildcard(__webpack_require__(297));

var _Home = _interopRequireDefault(__webpack_require__(33));

var _About = _interopRequireDefault(__webpack_require__(341));

var _styledComponents = _interopRequireDefault(__webpack_require__(914));

var _icon = _interopRequireDefault(__webpack_require__(103));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #aaaaaa;\n  border: 1px solid blue;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function App(_ref) {
  var gpage = _ref.gpage;

  var _useState = (0, _react.useState)(gpage),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      username = _useState4[0],
      setUsername = _useState4[1];

  (0, _react.useEffect)(function () {
    fetchUsername().then(function (data) {
      return setUsername(data);
    });
  }, []);
  (0, _react.useEffect)(function () {
    window.onpopstate = function (event) {
      setPage(event.state);
    };
  }, []);

  var onChangePage = function onChangePage(e) {
    var newPage = e.target.dataset.page;
    window.history.pushState(newPage, '', "/".concat(newPage));
    setPage(newPage);
  };

  var PageComponent = page === 'home' ? _Home["default"] : _About["default"];
  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    "data-page": "home",
    onClick: onChangePage
  }, "Home"), /*#__PURE__*/_react["default"].createElement("button", {
    "data-page": "about",
    onClick: onChangePage
  }, "About"), /*#__PURE__*/_react["default"].createElement(PageComponent, {
    username: username
  })), /*#__PURE__*/_react["default"].createElement("img", {
    src: _icon["default"]
  }));
}

var Container = _styledComponents["default"].div(_templateObject());

function fetchUsername() {
  var usernames = ['mike', 'june', 'jamie'];
  return new Promise(function (resolve) {
    var username = usernames[Math.floor(Math.random() * 3)];
    setTimeout(function () {
      return resolve(username);
    }, 100);
  });
}

/***/ }),

/***/ 33:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(297));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Home = function Home(_ref) {
  var username = _ref.username;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, "this is home function"), username && /*#__PURE__*/_react["default"].createElement("p", null, "".concat(username, " hi greeting!")));
};

var _default = Home;
exports.default = _default;

/***/ }),

/***/ 407:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.renderPage = renderPage;
exports.prerenderPages = void 0;

var _fs = _interopRequireDefault(__webpack_require__(747));

var _path = _interopRequireDefault(__webpack_require__(622));

var _server = __webpack_require__(250);

var _react = _interopRequireDefault(__webpack_require__(297));

var _App = _interopRequireDefault(__webpack_require__(255));

var _styledComponents = __webpack_require__(914);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var html = _fs["default"].readFileSync(_path["default"].resolve(__dirname, '../dist/index.html'), 'utf-8');

var prerenderPages = ['home'];
exports.prerenderPages = prerenderPages;

function renderPage(page) {
  var sheet = new _styledComponents.ServerStyleSheet();
  var renderString = (0, _server.renderToString)(sheet.collectStyles( /*#__PURE__*/_react["default"].createElement(_App["default"], {
    page: page
  })));
  var styles = sheet.getStyleTags();
  var result = html.replace('<div id="root"></div>', "<div id=\"root\">".concat(renderString, "</div>")).replace('__STYLE_FROM_SETVER__', styles);
  return result;
}

/***/ }),

/***/ 103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "4cd7e5306dbe99fc8224e2a3356926d6.png");

/***/ }),

/***/ 127:
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ 8:
/***/ ((module) => {

module.exports = require("lru-cache");;

/***/ }),

/***/ 622:
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ 250:
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ 413:
/***/ ((module) => {

module.exports = require("stream");;

/***/ }),

/***/ 914:
/***/ ((module) => {

module.exports = require("styled-components");;

/***/ }),

/***/ 835:
/***/ ((module) => {

module.exports = require("url");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _express = _interopRequireDefault(__webpack_require__(127));

var _fs = _interopRequireDefault(__webpack_require__(747));

var _path = _interopRequireDefault(__webpack_require__(622));

var _server = __webpack_require__(250);

var _react = _interopRequireDefault(__webpack_require__(297));

var _App = _interopRequireDefault(__webpack_require__(255));

var url = _interopRequireWildcard(__webpack_require__(835));

var _styledComponents = __webpack_require__(914);

var _common = __webpack_require__(407);

var _lruCache = _interopRequireDefault(__webpack_require__(8));

var _stream = __webpack_require__(413);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createCacheStream(cacheKey, prefix, postfix) {
  var chunks = [];
  return new _stream.Transform({
    transform: function transform(data, _, callback) {
      chunks.push(data);
      callback(null, data);
    },
    flush: function flush(callback) {
      var data = [prefix, Buffer.concat(chunks).toString(), postfix];
      ssrCache.set(cacheKey, data.join(''));
      callback();
    }
  });
}

var ssrCache = new _lruCache["default"]({
  max: 100,
  maxAge: 1000 * 60
});
var app = (0, _express["default"])();
var prerenderHtml = {};

var _iterator = _createForOfIteratorHelper(_common.prerenderPages),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var page = _step.value;

    var pageHtml = _fs["default"].readFileSync(_path["default"].resolve(__dirname, "../dist/".concat(page, ".html")), 'utf-8');

    prerenderHtml[page] = pageHtml;
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var html = _fs["default"].readFileSync(_path["default"].resolve(__dirname, '../dist/index.html'), 'utf8').replace('__STYLE_FROM_SERVER__', '');

app.use('/dist', _express["default"]["static"]('dist'));
app.get('/favicon.ico', function (req, res) {
  return res.sendStatus(204);
});
app.get('*', function (req, res) {
  var parsedUrl = url.parse(req.url, true);
  var page = parsedUrl.pathname ? parsedUrl.pathname.substr(1) : "home";
  var initialData = {
    page: page
  };
  var cacheKey = parsedUrl.path;

  if (ssrCache.has(cacheKey)) {
    console.log('use cache');
    res.send(ssrCache.get(cacheKey));
    return;
  } // const pageHtml = prerenderPages.includes(page)
  //   ? prerenderHtml[page]
  //   : renderPage(page);
  // const result = pageHtml.replace(
  //   '__DATA_FROM_SERVER__',
  //   JSON.stringify(initialData),
  // );


  var sheet = new _styledComponents.ServerStyleSheet();
  var renderString = (0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_App["default"], {
    page: "home"
  }));
  var styles = sheet.getStyleTags();

  var isPrerender = _common.prerenderPages.includes(page);

  var result = (isPrerender ? prerenderHtml[page] : html).replace('__DATA_FROM_SERVER__', JSON.stringify(initialData));

  if (isPrerender) {
    ssrCache.set(cacheKey, result);
    res.send(result);
  } else {
    var ROOT_TEXT = '<div id="root">';
    var prefix = result.substr(0, result.indexOf(ROOT_TEXT) + ROOT_TEXT.length);
    var postfix = result.substr(0, result.indexOf(ROOT_TEXT) + ROOT_TEXT.length);
    res.write(prefix);
    var reactElement = sheet.collectStyles( /*#__PURE__*/_react["default"].createElement(_App["default"], {
      page: page
    }));
    var renderStream = sheet.interleaveWithNodeStream((0, _server.renderToNodeStream)(reactElement)); // renderStream.pipe(
    //   res,
    //   { end: false }
    // )

    renderStream.on('end', function () {
      res.end(postfix);
    });
    var cacheStream = createCacheStream(cacheKey, prefix, postfix);
    cacheStream.pipe(res);
    renderStream.pipe(cacheStream, {
      end: false
    });
  } // const result = html
  // .replace(
  //   '<div id="root"></div>',
  //   `<div id="root">${renderString}</div>`,)
  // .replace('__DATA_FROM_SERVER__', JSON.stringify(initialData))
  // .replace('__STYLE_FROM_SERVER__', styles);
  // ssrCache.set(cacheKey, result);
  // res.send(result);

});
app.listen(3000);
})();

/******/ })()
;