exports.id = "main";
exports.modules = {

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/renderer */ "./src/utils/renderer.js");
/* harmony import */ var _utils_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/configureStore */ "./src/utils/configureStore.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./src/routes.js");
/* harmony import */ var _src_components_App_App_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/App/App.scss */ "./src/components/App/App.scss");
/* harmony import */ var _src_components_App_App_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_components_App_App_scss__WEBPACK_IMPORTED_MODULE_5__);






var server = express__WEBPACK_IMPORTED_MODULE_0___default()();
console.log('DEV MODE 👩‍💻');
server.disable('x-powered-by');
server.use(express__WEBPACK_IMPORTED_MODULE_0___default.a["static"]("C:\\Users\\Shakerdl\\Documents\\Projects\\claremont-web\\public"));
server.get('/*', function (req, res) {
  var store = Object(_utils_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Map over our routes, select our matching route and then call its loadData function, if it has one

  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["matchRoutes"])(_routes__WEBPACK_IMPORTED_MODULE_4__["default"], req.path).map(function (_ref) {
    var route = _ref.route;
    return route.component.loadData ? route.component.loadData(store, req) : Promise.resolve(null);
  }); // When our loadData fn resolves, set up the renderer helper and return our populated template

  Promise.all(promises).then(function () {
    var context = {};
    var content = Object(_utils_renderer__WEBPACK_IMPORTED_MODULE_2__["default"])(req, store, context);

    if (context.url) {
      return res.redirect(context.url);
    }

    res.status(context.statusCode || 200).send(content);
  })["catch"](function (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
      stack: error.stack
    });
  });
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=main.67f51b894bd99e8212a0.hot-update.js.map