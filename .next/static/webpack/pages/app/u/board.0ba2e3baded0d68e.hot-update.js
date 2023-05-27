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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardC; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction TicketContainer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ticket bg-gray-800 p-3 rounded-md w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"ticket0-header flex flex-row justify-between items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-8 w-8 flex justify-center items-center rounded-full bg-white bg-opacity-10\",\n                        children: \"M\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                        lineNumber: 8,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-2 team-name text-sm opacity-75\",\n                        children: \"Projectorate team #id\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = TicketContainer;\nfunction BoardC(param) {\n    var data = param.data;\n    var StatusColor = function StatusColor() {\n        var item = data;\n        return item.title == \"Todo\" ? \"bg-green-600\" : item.title == \"In-progress\" ? \"bg-yellow-600\" : item.title == \"Done\" ? \"bg-purple-600\" : item.title == \"Resolved\" ? \"bg-orange-600\" : item.title == \"Tested but not resolved\" ? \"bg-pink-700\" : \"bg-blue-600\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-1 !h-full !w-80 border-2 border-gray-600 border-opacity-60 rounded-md flex flex-shrink-0 bg-gray-900 p-2 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex flex-col w-full p-2 fixed\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-4 w-4 mr-2 \".concat(StatusColor(), \" rounded-full\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-base font-semibold opacity-80\",\n                                children: data.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm mt-1 opacity-50\",\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"mt-16 w-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_c1 = BoardC;\nvar _c, _c1;\n$RefreshReg$(_c, \"TicketContainer\");\n$RefreshReg$(_c1, \"BoardC\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFFMUIsU0FBU0MsZUFBZSxHQUFHO0lBQ3pCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQywwQ0FBMEM7a0JBQ3ZELDRFQUFDQyxRQUFNO1lBQUNELFNBQVMsRUFBQywyREFBMkQ7c0JBQzNFLDRFQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsbUJBQW1COztrQ0FDaEMsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw4RUFBOEU7a0NBQUMsR0FFOUY7Ozs7OzRCQUFNO2tDQUNOLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsbUNBQW1DO2tDQUFDLHVCQUVuRDs7Ozs7NEJBQU07Ozs7OztvQkFDRjs7Ozs7Z0JBQ0M7Ozs7O1lBQ0wsQ0FDTjtBQUNKLENBQUM7QUFmUUYsS0FBQUEsZUFBZTtBQWlCVCxTQUFTSSxNQUFNLENBQUMsS0FBUSxFQUFFO1FBQVYsSUFBTSxHQUFOLEtBQVEsQ0FBTkMsSUFBSTtRQUMxQkMsV0FBVyxHQUFwQixTQUFTQSxXQUFXLEdBQUc7UUFDckIsSUFBTUMsSUFBSSxHQUFHRixJQUFJO1FBQ2pCLE9BQU9FLElBQUksQ0FBQ0MsS0FBSyxJQUFJLE1BQU0sR0FDdkIsY0FBYyxHQUNkRCxJQUFJLENBQUNDLEtBQUssSUFBSSxhQUFhLEdBQzNCLGVBQWUsR0FDZkQsSUFBSSxDQUFDQyxLQUFLLElBQUksTUFBTSxHQUNwQixlQUFlLEdBQ2ZELElBQUksQ0FBQ0MsS0FBSyxJQUFJLFVBQVUsR0FDeEIsZUFBZSxHQUNmRCxJQUFJLENBQUNDLEtBQUssSUFBSSx5QkFBeUIsR0FDdkMsYUFBYSxHQUNiLGFBQWEsQ0FBQztJQUNwQixDQUFDO0lBQ0QscUJBQ0UsOERBQUNQLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHNIQUFzSDs7MEJBQ25JLDhEQUFDQyxRQUFNO2dCQUFDRCxTQUFTLEVBQUMsZ0NBQWdDOztrQ0FDaEQsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxtQkFBbUI7OzBDQUNoQyw4REFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFFLGVBQWMsQ0FBZ0IsTUFBYSxDQUEzQkksV0FBVyxFQUFFLEVBQUMsZUFBYSxDQUFDOzs7OztvQ0FBUTswQ0FDcEUsOERBQUNHLElBQUU7Z0NBQUNQLFNBQVMsRUFBQyxvQ0FBb0M7MENBQUVHLElBQUksQ0FBQ0csS0FBSzs7Ozs7b0NBQU07Ozs7Ozs0QkFDaEU7a0NBQ04sOERBQUNFLEdBQUM7d0JBQUNSLFNBQVMsRUFBQyx5QkFBeUI7a0NBQUVHLElBQUksQ0FBQ00sV0FBVzs7Ozs7NEJBQUs7Ozs7OztvQkFDdEQ7MEJBQ1QsOERBQUNDLE1BQUk7Z0JBQUNWLFNBQVMsRUFBQyxjQUFjOzs7OztvQkFBUTs7Ozs7O1lBQ2xDLENBQ047QUFDSixDQUFDO0FBM0J1QkUsTUFBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmpzPzA0MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gVGlja2V0Q29udGFpbmVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRpY2tldCBiZy1ncmF5LTgwMCBwLTMgcm91bmRlZC1tZCB3LWZ1bGxcIj5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ0aWNrZXQwLWhlYWRlciBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOCB3LTggZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLXdoaXRlIGJnLW9wYWNpdHktMTBcIj5cclxuICAgICAgICAgICAgTVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTIgdGVhbS1uYW1lIHRleHQtc20gb3BhY2l0eS03NVwiPlxyXG4gICAgICAgICAgICBQcm9qZWN0b3JhdGUgdGVhbSAjaWRcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkQyh7IGRhdGEgfSkge1xyXG4gIGZ1bmN0aW9uIFN0YXR1c0NvbG9yKCkge1xyXG4gICAgY29uc3QgaXRlbSA9IGRhdGE7XHJcbiAgICByZXR1cm4gaXRlbS50aXRsZSA9PSBcIlRvZG9cIlxyXG4gICAgICA/IFwiYmctZ3JlZW4tNjAwXCJcclxuICAgICAgOiBpdGVtLnRpdGxlID09IFwiSW4tcHJvZ3Jlc3NcIlxyXG4gICAgICA/IFwiYmcteWVsbG93LTYwMFwiXHJcbiAgICAgIDogaXRlbS50aXRsZSA9PSBcIkRvbmVcIlxyXG4gICAgICA/IFwiYmctcHVycGxlLTYwMFwiXHJcbiAgICAgIDogaXRlbS50aXRsZSA9PSBcIlJlc29sdmVkXCJcclxuICAgICAgPyBcImJnLW9yYW5nZS02MDBcIlxyXG4gICAgICA6IGl0ZW0udGl0bGUgPT0gXCJUZXN0ZWQgYnV0IG5vdCByZXNvbHZlZFwiXHJcbiAgICAgID8gXCJiZy1waW5rLTcwMFwiXHJcbiAgICAgIDogXCJiZy1ibHVlLTYwMFwiO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC0xICFoLWZ1bGwgIXctODAgYm9yZGVyLTIgYm9yZGVyLWdyYXktNjAwIGJvcmRlci1vcGFjaXR5LTYwIHJvdW5kZWQtbWQgZmxleCBmbGV4LXNocmluay0wIGJnLWdyYXktOTAwIHAtMiByZWxhdGl2ZVwiPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIHAtMiBmaXhlZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaC00IHctNCBtci0yICR7U3RhdHVzQ29sb3IoKX0gcm91bmRlZC1mdWxsYH0+PC9kaXY+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgb3BhY2l0eS04MFwiPntkYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtdC0xIG9wYWNpdHktNTBcIj57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtdC0xNiB3LWZ1bGxcIj48L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRpY2tldENvbnRhaW5lciIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIkJvYXJkQyIsImRhdGEiLCJTdGF0dXNDb2xvciIsIml0ZW0iLCJ0aXRsZSIsImgxIiwicCIsImRlc2NyaXB0aW9uIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/board/board.js\n"));

/***/ })

});