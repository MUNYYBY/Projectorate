"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/landing-page/components/ui/header.js":
/*!*********************************************************!*\
  !*** ./components/landing-page/components/ui/header.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo */ \"./components/landing-page/components/ui/logo.js\");\n/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-menu */ \"./components/landing-page/components/ui/mobile-menu.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), top = ref[0], setTop = ref[1];\n    // detect whether user has scrolled the page down by 10px\n    var scrollHandler = function() {\n        window.pageYOffset > 10 ? setTop(false) : setTop(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        scrollHandler();\n        window.addEventListener(\"scroll\", scrollHandler);\n        return function() {\n            return window.removeEventListener(\"scroll\", scrollHandler);\n        };\n    }, [\n        top\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed w-full z-30 bg-gray-900 md:bg-opacity-90 transition duration-300 ease-in-out \".concat(!top ? \"bg-gray-800 backdrop-blur-sm shadow-lg\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-6xl mx-auto px-5 sm:px-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between h-16 md:h-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"shrink-0 mr-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\header.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\header.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"hidden md:flex md:grow\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex grow justify-end flex-wrap items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/signup\",\n                                    className: \"text-gray-900 bg-gray-300 hover:bg-gray-100 ml-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Sign up\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\header.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                className: \"w-3 h-3 fill-current text-gray-900 shrink-0 ml-2 -mr-1\",\n                                                viewBox: \"0 0 12 12\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    d: \"M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z\",\n                                                    fillRule: \"nonzero\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\header.js\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\header.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\header.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\header.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\header.js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\header.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\header.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mobile_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\header.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\header.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\header.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\header.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"3+L5C4BXCkvfI+CLvYAvKVZ7bm8=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xhbmRpbmctcGFnZS9jb21wb25lbnRzL3VpL2hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFFZjtBQUNIO0FBQ2E7QUFFeEIsU0FBU0ssTUFBTSxHQUFHOztJQUMvQixJQUFzQkwsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUE3Qk0sR0FBRyxHQUFZTixHQUFjLEdBQTFCLEVBQUVPLE1BQU0sR0FBSVAsR0FBYyxHQUFsQjtJQUVsQix5REFBeUQ7SUFDekQsSUFBTVEsYUFBYSxHQUFHLFdBQU07UUFDMUJDLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLEVBQUUsR0FBR0gsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHQSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVETixnREFBUyxDQUFDLFdBQU07UUFDZE8sYUFBYSxFQUFFLENBQUM7UUFDaEJDLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsUUFBUSxFQUFFSCxhQUFhLENBQUMsQ0FBQztRQUNqRCxPQUFPO21CQUFNQyxNQUFNLENBQUNHLG1CQUFtQixDQUFDLFFBQVEsRUFBRUosYUFBYSxDQUFDO1NBQUEsQ0FBQztJQUNuRSxDQUFDLEVBQUU7UUFBQ0YsR0FBRztLQUFDLENBQUMsQ0FBQztJQUVWLHFCQUNFLDhEQUFDTyxRQUFNO1FBQ0xDLFNBQVMsRUFBRSxxRkFBb0YsQ0FFOUYsT0FEQyxDQUFDUixHQUFHLEdBQUcsd0NBQXdDLEdBQUcsRUFBRSxDQUNwRDtrQkFFRiw0RUFBQ1MsS0FBRztZQUFDRCxTQUFTLEVBQUMsZ0NBQWdDO3NCQUM3Qyw0RUFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLGdEQUFnRDs7a0NBRTdELDhEQUFDQyxLQUFHO3dCQUFDRCxTQUFTLEVBQUMsZUFBZTtrQ0FDNUIsNEVBQUNYLDZDQUFJOzs7O2dDQUFHOzs7Ozs0QkFDSjtrQ0FHTiw4REFBQ2EsS0FBRzt3QkFBQ0YsU0FBUyxFQUFDLHdCQUF3QjtrQ0FFckMsNEVBQUNHLElBQUU7NEJBQUNILFNBQVMsRUFBQyw4Q0FBOEM7c0NBQzFELDRFQUFDSSxJQUFFOzBDQUNELDRFQUFDaEIsa0RBQUk7b0NBQ0hpQixJQUFJLEVBQUMsU0FBUztvQ0FDZEwsU0FBUyxFQUFDLGtEQUFrRDs4Q0FFNUQsNEVBQUNDLEtBQUc7d0NBQUNELFNBQVMsRUFBQyxrQ0FBa0M7OzBEQUMvQyw4REFBQ00sTUFBSTswREFBQyxTQUFPOzs7OztvREFBTzswREFDcEIsOERBQUNDLEtBQUc7Z0RBQ0ZQLFNBQVMsRUFBQyx3REFBd0Q7Z0RBQ2xFUSxPQUFPLEVBQUMsV0FBVzswREFFbkIsNEVBQUNDLE1BQUk7b0RBQ0hDLENBQUMsRUFBQyx1RkFBdUY7b0RBQ3pGQyxRQUFRLEVBQUMsU0FBUzs7Ozs7d0RBQ2xCOzs7OztvREFDRTs7Ozs7OzRDQUNGOzs7Ozt3Q0FDRDs7Ozs7b0NBQ0o7Ozs7O2dDQUNGOzs7Ozs0QkFDRDtrQ0FFTiw4REFBQ3JCLG9EQUFVOzs7OzRCQUFHOzs7Ozs7b0JBQ1Y7Ozs7O2dCQUNGOzs7OztZQUNDLENBQ1Q7QUFDSixDQUFDO0dBMUR1QkMsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvdWkvaGVhZGVyLmpzP2VmNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvXCI7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gXCIuL21vYmlsZS1tZW51XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW3RvcCwgc2V0VG9wXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAvLyBkZXRlY3Qgd2hldGhlciB1c2VyIGhhcyBzY3JvbGxlZCB0aGUgcGFnZSBkb3duIGJ5IDEwcHhcclxuICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnBhZ2VZT2Zmc2V0ID4gMTAgPyBzZXRUb3AoZmFsc2UpIDogc2V0VG9wKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzY3JvbGxIYW5kbGVyKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcclxuICB9LCBbdG9wXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyXHJcbiAgICAgIGNsYXNzTmFtZT17YGZpeGVkIHctZnVsbCB6LTMwIGJnLWdyYXktOTAwIG1kOmJnLW9wYWNpdHktOTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgJHtcclxuICAgICAgICAhdG9wID8gXCJiZy1ncmF5LTgwMCBiYWNrZHJvcC1ibHVyLXNtIHNoYWRvdy1sZ1wiIDogXCJcIlxyXG4gICAgICB9YH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBweC01IHNtOnB4LTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTE2IG1kOmgtMjBcIj5cclxuICAgICAgICAgIHsvKiBTaXRlIGJyYW5kaW5nICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaHJpbmstMCBtci00XCI+XHJcbiAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogRGVza3RvcCBuYXZpZ2F0aW9uICovfVxyXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBtZDpncm93XCI+XHJcbiAgICAgICAgICAgIHsvKiBEZXNrdG9wIHNpZ24gaW4gbGlua3MgKi99XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGdyb3cganVzdGlmeS1lbmQgZmxleC13cmFwIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2lnbnVwXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBiZy1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBtbC0zXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlNpZ24gdXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zIGgtMyBmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LTkwMCBzaHJpbmstMCBtbC0yIC1tci0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTIgMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTEuNzA3IDUuMjkzTDcgLjU4NiA1LjU4NiAybDMgM0gwdjJoOC41ODZsLTMgM0w3IDExLjQxNGw0LjcwNy00LjcwN2ExIDEgMCAwMDAtMS40MTR6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJub256ZXJvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICA8TW9iaWxlTWVudSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIkxvZ28iLCJNb2JpbGVNZW51IiwiSGVhZGVyIiwidG9wIiwic2V0VG9wIiwic2Nyb2xsSGFuZGxlciIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJuYXYiLCJ1bCIsImxpIiwiaHJlZiIsInNwYW4iLCJzdmciLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJmaWxsUnVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/landing-page/components/ui/header.js\n"));

/***/ })

});