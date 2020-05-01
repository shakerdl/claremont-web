exports.id = "main";
exports.modules = {

/***/ "./src/utils/renderer.js":
/*!*******************************!*\
  !*** ./src/utils/renderer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet-async */ "react-helmet-async");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @loadable/server */ "@loadable/server");
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_App_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/App/App */ "./src/components/App/App.js");
var _jsxFileName = "C:\\Users\\Shakerdl\\Documents\\Projects\\claremont-web\\src\\utils\\renderer.js";











var renderer = function renderer(req, store, context) {
  var helmetContext = {}; // Create the server side style sheet

  var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_5__["ServerStyleSheet"]();
  var extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_7__["ChunkExtractor"]({
    statsFile: path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve('./build/loadable-stats.json'),
    entrypoints: ['client']
  }); // When the app is rendered collect the styles that are used inside it

  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(sheet.collectStyles( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loadable_server__WEBPACK_IMPORTED_MODULE_7__["ChunkExtractorManager"], {
    extractor: extractor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"], {
    context: context,
    location: req.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_4__["HelmetProvider"], {
    context: helmetContext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App_App__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }))))))); // Generate all the style tags so they can be rendered into the page

  var styleTags = sheet.getStyleTags(); // Receive the tags through the helmetContext

  var helmet = helmetContext.helmet;
  return "\n    <!doctype html>\n      <html lang=\"en\">\n      <head>\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <meta charset=\"utf-8\" />\n        ".concat(helmet.title.toString(), "\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        ").concat(helmet.meta.toString(), "\n        ").concat(extractor.getLinkTags(), "\n        ").concat(extractor.getStyleTags(), "\n      </head>\n      <body>\n        <div id=\"root\">").concat(markup, "</div>\n        <script>window.INITIAL_STATE = ").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_8___default()(store.getState()), "</script>\n        ").concat(styleTags, "\n        ").concat(extractor.getScriptTags(), "\n      </body>\n    </html>");
};

/* harmony default export */ __webpack_exports__["default"] = (renderer);

/***/ })

};
//# sourceMappingURL=main.52e2366ff017feec8752.hot-update.js.map