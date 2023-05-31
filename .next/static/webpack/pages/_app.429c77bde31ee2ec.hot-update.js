"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./layout/UserLayout.js":
/*!******************************!*\
  !*** ./layout/UserLayout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Config_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Config/User */ \"./Config/User.js\");\n/* harmony import */ var _components_Loading_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loading/loading */ \"./components/Loading/loading.js\");\n/* harmony import */ var _components_HorizontalLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/HorizontalLayout */ \"./layout/components/HorizontalLayout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction UserLayout(param) {\n    var children = param.children;\n    var _this = this;\n    _s();\n    //** States Initialization */\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), layoutType = ref[0], setLayoutType = ref[1];\n    //** Router Initializtion  */\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var Layout = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HorizontalLayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\layout\\\\UserLayout.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (router.asPath) {\n            var i = router.asPath.includes(\"app/u\");\n            if (i != layoutType) {\n                setLayoutType(i);\n            }\n        }\n    }, [\n        router.asPath\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            layoutType ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {}, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\layout\\\\UserLayout.js\",\n                lineNumber: 30,\n                columnNumber: 26\n            }, this) : children,\n            \" \"\n        ]\n    }, void 0, true);\n}\n_s(UserLayout, \"X0c1zbjw83lPN+7vmSImCDAVoD4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = UserLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserLayout);\nvar _c;\n$RefreshReg$(_c, \"UserLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvVXNlckxheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXlEO0FBQ2pCO0FBQ0Q7QUFDYTtBQUNTO0FBRTdELFNBQVNRLFVBQVUsQ0FBQyxLQUFZLEVBQUU7UUFBZCxRQUFVLEdBQVYsS0FBWSxDQUFWQyxRQUFROzs7SUFDNUIsNkJBQTZCO0lBQzdCLElBQW9DUCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQTNDUSxVQUFVLEdBQW1CUixHQUFjLEdBQWpDLEVBQUVTLGFBQWEsR0FBSVQsR0FBYyxHQUFsQjtJQUVoQyw2QkFBNkI7SUFDN0IsSUFBTVUsTUFBTSxHQUFHUixzREFBUyxFQUFFO0lBRTFCLElBQU1TLE1BQU0sR0FBRyxXQUFNO1FBQ25CLHFCQUNFO3NCQUNFLDRFQUFDTixvRUFBZ0I7MEJBQUVFLFFBQVE7Ozs7O3FCQUFvQjt5QkFDOUMsQ0FDSDtJQUNKLENBQUM7SUFFRFIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSVcsTUFBTSxDQUFDRSxNQUFNLEVBQUU7WUFDakIsSUFBTUMsQ0FBQyxHQUFHSCxNQUFNLENBQUNFLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUN6QyxJQUFJRCxDQUFDLElBQUlMLFVBQVUsRUFBRTtnQkFDbkJDLGFBQWEsQ0FBQ0ksQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEVBQUU7UUFBQ0gsTUFBTSxDQUFDRSxNQUFNO0tBQUMsQ0FBQyxDQUFDO0lBQ3BCLHFCQUFPOztZQUFHSixVQUFVLGlCQUFHLDhEQUFDRyxNQUFNOzs7O29CQUFHLEdBQUdKLFFBQVE7WUFBQyxHQUFDOztvQkFBRyxDQUFDO0FBQ3BELENBQUM7R0F4QlFELFVBQVU7O1FBS0ZKLGtEQUFTOzs7QUFMakJJLEtBQUFBLFVBQVU7QUEwQm5CLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L1VzZXJMYXlvdXQuanM/YjEyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVXNlcnMgfSBmcm9tIFwiLi4vQ29uZmlnL1VzZXJcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZy9sb2FkaW5nXCI7XHJcbmltcG9ydCBIb3Jpem9udGFsTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvSG9yaXpvbnRhbExheW91dFwiO1xyXG5cclxuZnVuY3Rpb24gVXNlckxheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICAvLyoqIFN0YXRlcyBJbml0aWFsaXphdGlvbiAqL1xyXG4gIGNvbnN0IFtsYXlvdXRUeXBlLCBzZXRMYXlvdXRUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyoqIFJvdXRlciBJbml0aWFsaXp0aW9uICAqL1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBMYXlvdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIb3Jpem9udGFsTGF5b3V0PntjaGlsZHJlbn08L0hvcml6b250YWxMYXlvdXQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5hc1BhdGgpIHtcclxuICAgICAgY29uc3QgaSA9IHJvdXRlci5hc1BhdGguaW5jbHVkZXMoXCJhcHAvdVwiKTtcclxuICAgICAgaWYgKGkgIT0gbGF5b3V0VHlwZSkge1xyXG4gICAgICAgIHNldExheW91dFR5cGUoaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcm91dGVyLmFzUGF0aF0pO1xyXG4gIHJldHVybiA8PntsYXlvdXRUeXBlID8gPExheW91dCAvPiA6IGNoaWxkcmVufSA8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibWVtbyIsInVzZVJvdXRlciIsIlVzZXJzIiwiTG9hZGluZyIsIkhvcml6b250YWxMYXlvdXQiLCJVc2VyTGF5b3V0IiwiY2hpbGRyZW4iLCJsYXlvdXRUeXBlIiwic2V0TGF5b3V0VHlwZSIsInJvdXRlciIsIkxheW91dCIsImFzUGF0aCIsImkiLCJpbmNsdWRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/UserLayout.js\n"));

/***/ })

});