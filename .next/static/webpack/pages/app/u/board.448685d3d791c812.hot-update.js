"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/app/u/board",{

/***/ "./components/board/board.js":
/*!***********************************!*\
  !*** ./components/board/board.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardC; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction BoardC(param) {\n    var data = param.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-1 !h-full !w-72 flex flex-shrink-0 bg-gray-900 p-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"flex flex-col w-full p-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-4 w-4 mr-2 bg-green-600 rounded-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                            lineNumber: 8,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: data.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                            lineNumber: 9,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: data.description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = BoardC;\nvar _c;\n$RefreshReg$(_c, \"BoardC\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFFWCxTQUFTQyxNQUFNLENBQUMsS0FBUSxFQUFFO1FBQVYsSUFBTSxHQUFOLEtBQVEsQ0FBTkMsSUFBSTtJQUNuQyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsdURBQXVEO2tCQUNwRSw0RUFBQ0MsUUFBTTtZQUFDRCxTQUFTLEVBQUMsMEJBQTBCOzs4QkFDMUMsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxtQkFBbUI7O3NDQUNoQyw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHdDQUF3Qzs7Ozs7Z0NBQU87c0NBQzlELDhEQUFDRSxJQUFFO3NDQUFFSixJQUFJLENBQUNLLEtBQUs7Ozs7O2dDQUFNOzs7Ozs7d0JBQ2pCOzhCQUNOLDhEQUFDQyxHQUFDOzhCQUFFTixJQUFJLENBQUNPLFdBQVc7Ozs7O3dCQUFLOzs7Ozs7Z0JBQ2xCOzs7OztZQUNMLENBQ047QUFDSixDQUFDO0FBWnVCUixLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQuanM/MDQxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZEMoeyBkYXRhIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC0xICFoLWZ1bGwgIXctNzIgZmxleCBmbGV4LXNocmluay0wIGJnLWdyYXktOTAwIHAtMlwiPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIHAtMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yIGJnLWdyZWVuLTYwMCByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cclxuICAgICAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJvYXJkQyIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJoMSIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/board/board.js\n"));

/***/ })

});