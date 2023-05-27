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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardC; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction BoardC(param) {\n    var data = param.data;\n    var StatusColor = function StatusColor() {\n        var item = data;\n        return item.title == \"Todo\" ? \"bg-green-600\" : item.title == \"In-progress\" ? \"bg-yellow-600\" : item.title == \"Done\" ? \"bg-purple-600\" : item.title == \"Resolved\" ? \"bg-orange-600\" : item.title == \"Tested but not resolved\" ? \"bg-pink-700\" : \"bg-blue-600\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-1 !h-full !w-80 border-2 border-gray-600 border-opacity-60 rounded-md flex flex-shrink-0 bg-gray-900 p-2 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex flex-col w-full p-2 fixed\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-4 w-4 mr-2 \".concat(StatusColor(), \" rounded-full\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-base font-semibold opacity-80\",\n                                children: data.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm mt-1 opacity-50\",\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"mt-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ticket bg-gray-700\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"ticket0-header flex flex-row justify-between items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-8 w-8 flex justify-center items-center rounded-full bg-white bg-opacity-10\",\n                                    children: \"M\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"team-name\",\n                                    children: \"Projectorate team\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = BoardC;\nvar _c;\n$RefreshReg$(_c, \"BoardC\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFFWCxTQUFTQyxNQUFNLENBQUMsS0FBUSxFQUFFO1FBQVYsSUFBTSxHQUFOLEtBQVEsQ0FBTkMsSUFBSTtRQUMxQkMsV0FBVyxHQUFwQixTQUFTQSxXQUFXLEdBQUc7UUFDckIsSUFBTUMsSUFBSSxHQUFHRixJQUFJO1FBQ2pCLE9BQU9FLElBQUksQ0FBQ0MsS0FBSyxJQUFJLE1BQU0sR0FDdkIsY0FBYyxHQUNkRCxJQUFJLENBQUNDLEtBQUssSUFBSSxhQUFhLEdBQzNCLGVBQWUsR0FDZkQsSUFBSSxDQUFDQyxLQUFLLElBQUksTUFBTSxHQUNwQixlQUFlLEdBQ2ZELElBQUksQ0FBQ0MsS0FBSyxJQUFJLFVBQVUsR0FDeEIsZUFBZSxHQUNmRCxJQUFJLENBQUNDLEtBQUssSUFBSSx5QkFBeUIsR0FDdkMsYUFBYSxHQUNiLGFBQWEsQ0FBQztJQUNwQixDQUFDO0lBQ0QscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHNIQUFzSDs7MEJBQ25JLDhEQUFDQyxRQUFNO2dCQUFDRCxTQUFTLEVBQUMsZ0NBQWdDOztrQ0FDaEQsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxtQkFBbUI7OzBDQUNoQyw4REFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFFLGVBQWMsQ0FBZ0IsTUFBYSxDQUEzQkosV0FBVyxFQUFFLEVBQUMsZUFBYSxDQUFDOzs7OztvQ0FBUTswQ0FDcEUsOERBQUNNLElBQUU7Z0NBQUNGLFNBQVMsRUFBQyxvQ0FBb0M7MENBQUVMLElBQUksQ0FBQ0csS0FBSzs7Ozs7b0NBQU07Ozs7Ozs0QkFDaEU7a0NBQ04sOERBQUNLLEdBQUM7d0JBQUNILFNBQVMsRUFBQyx5QkFBeUI7a0NBQUVMLElBQUksQ0FBQ1MsV0FBVzs7Ozs7NEJBQUs7Ozs7OztvQkFDdEQ7MEJBQ1QsOERBQUNDLE1BQUk7Z0JBQUNMLFNBQVMsRUFBQyxPQUFPOzBCQUNyQiw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjs4QkFDakMsNEVBQUNDLFFBQU07d0JBQUNELFNBQVMsRUFBQywyREFBMkQ7a0NBQzNFLDRFQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsbUJBQW1COzs4Q0FDaEMsOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyw4RUFBOEU7OENBQUMsR0FFOUY7Ozs7O3dDQUFNOzhDQUNOLDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsV0FBVzs4Q0FBQyxtQkFBaUI7Ozs7O3dDQUFNOzs7Ozs7Z0NBQzlDOzs7Ozs0QkFDQzs7Ozs7d0JBQ0w7Ozs7O29CQUNEOzs7Ozs7WUFDSCxDQUNOO0FBQ0osQ0FBQztBQXRDdUJOLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZC9ib2FyZC5qcz8wNDE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkQyh7IGRhdGEgfSkge1xyXG4gIGZ1bmN0aW9uIFN0YXR1c0NvbG9yKCkge1xyXG4gICAgY29uc3QgaXRlbSA9IGRhdGE7XHJcbiAgICByZXR1cm4gaXRlbS50aXRsZSA9PSBcIlRvZG9cIlxyXG4gICAgICA/IFwiYmctZ3JlZW4tNjAwXCJcclxuICAgICAgOiBpdGVtLnRpdGxlID09IFwiSW4tcHJvZ3Jlc3NcIlxyXG4gICAgICA/IFwiYmcteWVsbG93LTYwMFwiXHJcbiAgICAgIDogaXRlbS50aXRsZSA9PSBcIkRvbmVcIlxyXG4gICAgICA/IFwiYmctcHVycGxlLTYwMFwiXHJcbiAgICAgIDogaXRlbS50aXRsZSA9PSBcIlJlc29sdmVkXCJcclxuICAgICAgPyBcImJnLW9yYW5nZS02MDBcIlxyXG4gICAgICA6IGl0ZW0udGl0bGUgPT0gXCJUZXN0ZWQgYnV0IG5vdCByZXNvbHZlZFwiXHJcbiAgICAgID8gXCJiZy1waW5rLTcwMFwiXHJcbiAgICAgIDogXCJiZy1ibHVlLTYwMFwiO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC0xICFoLWZ1bGwgIXctODAgYm9yZGVyLTIgYm9yZGVyLWdyYXktNjAwIGJvcmRlci1vcGFjaXR5LTYwIHJvdW5kZWQtbWQgZmxleCBmbGV4LXNocmluay0wIGJnLWdyYXktOTAwIHAtMiByZWxhdGl2ZVwiPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIHAtMiBmaXhlZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaC00IHctNCBtci0yICR7U3RhdHVzQ29sb3IoKX0gcm91bmRlZC1mdWxsYH0+PC9kaXY+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgb3BhY2l0eS04MFwiPntkYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtdC0xIG9wYWNpdHktNTBcIj57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtdC0xNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlja2V0IGJnLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInRpY2tldDAtaGVhZGVyIGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTggdy04IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBiZy1vcGFjaXR5LTEwXCI+XHJcbiAgICAgICAgICAgICAgICBNXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLW5hbWVcIj5Qcm9qZWN0b3JhdGUgdGVhbTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJvYXJkQyIsImRhdGEiLCJTdGF0dXNDb2xvciIsIml0ZW0iLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImgxIiwicCIsImRlc2NyaXB0aW9uIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/board/board.js\n"));

/***/ })

});