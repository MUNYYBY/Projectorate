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

/***/ "./layout/components/HorizontalLayout.js":
/*!***********************************************!*\
  !*** ./layout/components/HorizontalLayout.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HorizontalLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SideBar/SideBar */ \"./components/SideBar/SideBar.js\");\n/* harmony import */ var _components_Sub_panel_SubPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Sub-panel/SubPanel */ \"./components/Sub-panel/SubPanel.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction HorizontalLayout(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isNavActive = ref[0], setIsNavActive = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app-layout Dashboard w-full min-h-[100vh]\",\n        style: {\n            backgroundColor: \"#2c2e33\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-0 top-0 z-50\",\n                children: isNavActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"nav-full relative flex flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\layout\\\\components\\\\HorizontalLayout.js\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"ml-[4.5rem] bg-black\",\n                            onClick: function() {\n                                return setIsNavActive(false);\n                            },\n                            children: \"Click\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\layout\\\\components\\\\HorizontalLayout.js\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\layout\\\\components\\\\HorizontalLayout.js\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"nav-collapsed\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-black\",\n                        onClick: function() {\n                            return setIsNavActive(true);\n                        },\n                        children: \"Click\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\layout\\\\components\\\\HorizontalLayout.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\layout\\\\components\\\\HorizontalLayout.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\layout\\\\components\\\\HorizontalLayout.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sidepanel md:visible invisible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sub_panel_SubPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\layout\\\\components\\\\HorizontalLayout.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\layout\\\\components\\\\HorizontalLayout.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:ml-[20.5rem]\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\layout\\\\components\\\\HorizontalLayout.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Dev\\\\Projectorate\\\\layout\\\\components\\\\HorizontalLayout.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_s(HorizontalLayout, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = HorizontalLayout;\nvar _c;\n$RefreshReg$(_c, \"HorizontalLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvY29tcG9uZW50cy9Ib3Jpem9udGFsTGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDZTtBQUNJO0FBRTVDLFNBQVNJLGdCQUFnQixDQUFDLEtBQVksRUFBRTtRQUFkLFFBQVUsR0FBVixLQUFZLENBQVZDLFFBQVE7O0lBQ2pELElBQXNDSixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQTlDSyxXQUFXLEdBQW9CTCxHQUFlLEdBQW5DLEVBQUVNLGNBQWMsR0FBSU4sR0FBZSxHQUFuQjtJQUNsQyxxQkFDRSw4REFBQ08sS0FBRztRQUNGQyxTQUFTLEVBQUMsMkNBQTJDO1FBQ3JEQyxLQUFLLEVBQUU7WUFBRUMsZUFBZSxFQUFFLFNBQVM7U0FBRTs7MEJBRXJDLDhEQUFDSCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsNEJBQTRCOzBCQUN4Q0gsV0FBVyxpQkFDViw4REFBQ0UsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGlDQUFpQzs7c0NBQzlDLDhEQUFDUCxtRUFBTzs7OztnQ0FBRztzQ0FDWCw4REFBQ1UsUUFBTTs0QkFDTEgsU0FBUyxFQUFDLHNCQUFzQjs0QkFDaENJLE9BQU8sRUFBRTt1Q0FBTU4sY0FBYyxDQUFDLEtBQUssQ0FBQzs2QkFBQTtzQ0FDckMsT0FFRDs7Ozs7Z0NBQVM7Ozs7Ozt3QkFDTCxpQkFFTiw4REFBQ0MsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGVBQWU7OEJBQzVCLDRFQUFDRyxRQUFNO3dCQUFDSCxTQUFTLEVBQUMsVUFBVTt3QkFBQ0ksT0FBTyxFQUFFO21DQUFNTixjQUFjLENBQUMsSUFBSSxDQUFDO3lCQUFBO2tDQUFFLE9BRWxFOzs7Ozs0QkFBUzs7Ozs7d0JBQ0w7Ozs7O29CQUVKOzBCQUNOLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZ0NBQWdDOzBCQUM3Qyw0RUFBQ04sc0VBQVE7Ozs7d0JBQUc7Ozs7O29CQUNSOzBCQUVOLDhEQUFDSyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsaUJBQWlCOzBCQUFFSixRQUFROzs7OztvQkFBTzs7Ozs7O1lBQzdDLENBQ047QUFDSixDQUFDO0dBakN1QkQsZ0JBQWdCO0FBQWhCQSxLQUFBQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L2NvbXBvbmVudHMvSG9yaXpvbnRhbExheW91dC5qcz80ZGM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXJcIjtcclxuaW1wb3J0IFN1YlBhbmVsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1N1Yi1wYW5lbC9TdWJQYW5lbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9yaXpvbnRhbExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbaXNOYXZBY3RpdmUsIHNldElzTmF2QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJhcHAtbGF5b3V0IERhc2hib2FyZCB3LWZ1bGwgbWluLWgtWzEwMHZoXVwiXHJcbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMmMyZTMzXCIgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLTAgei01MFwiPlxyXG4gICAgICAgIHtpc05hdkFjdGl2ZSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWZ1bGwgcmVsYXRpdmUgZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICA8U2lkZUJhciAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtWzQuNXJlbV0gYmctYmxhY2tcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2QWN0aXZlKGZhbHNlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENsaWNrXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbGxhcHNlZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsYWNrXCIgb25DbGljaz17KCkgPT4gc2V0SXNOYXZBY3RpdmUodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgIENsaWNrXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZXBhbmVsIG1kOnZpc2libGUgaW52aXNpYmxlXCI+XHJcbiAgICAgICAgPFN1YlBhbmVsIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDptbC1bMjAuNXJlbV1cIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU2lkZUJhciIsIlN1YlBhbmVsIiwiSG9yaXpvbnRhbExheW91dCIsImNoaWxkcmVuIiwiaXNOYXZBY3RpdmUiLCJzZXRJc05hdkFjdGl2ZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/components/HorizontalLayout.js\n"));

/***/ })

});