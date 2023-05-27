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

/***/ "./pages/app/u/board.js":
/*!******************************!*\
  !*** ./pages/app/u/board.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _client_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../client/requests */ \"./client/requests.js\");\n/* harmony import */ var _components_board_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/board/board */ \"./components/board/board.js\");\n/* harmony import */ var _Meta_Heads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Meta/Heads */ \"./Meta/Heads.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Board() {\n    _s();\n    //**States */\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), allTickets = ref[0], setAllTickets = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), ticketsStatus = ref1[0], setTicketsStatus = ref1[1];\n    function handleFetching() {\n        return _handleFetching.apply(this, arguments);\n    }\n    function _handleFetching() {\n        _handleFetching = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var allTickets, status;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,_client_requests__WEBPACK_IMPORTED_MODULE_2__.getALlTickets)()\n                        ];\n                    case 1:\n                        allTickets = _state.sent();\n                        return [\n                            4,\n                            (0,_client_requests__WEBPACK_IMPORTED_MODULE_2__.getTicketsStatus)()\n                        ];\n                    case 2:\n                        status = _state.sent();\n                        setAllTickets(allTickets.data);\n                        setTicketsStatus(status.data);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _handleFetching.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        handleFetching();\n    }, []);\n    //** Screen size dynamic */\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        window.innerWidth,\n        window.innerHeight, \n    ]), windowSize = ref2[0], setWindowSize = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleWindowResize = function() {\n            setWindowSize([\n                window.innerWidth,\n                window.innerHeight\n            ]);\n        };\n        window.addEventListener(\"resize\", handleWindowResize);\n        return function() {\n            window.removeEventListener(\"resize\", handleWindowResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Meta_Heads__WEBPACK_IMPORTED_MODULE_4__.BoardHeadMeta, {}, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"board h-full w-full overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-2 relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"teams-panel-icon mr-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiOutlineViewBoards, {\n                                            size: 26\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-lg font-bold\",\n                                        children: \"Board Panel\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"help-icon px-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_cg__WEBPACK_IMPORTED_MODULE_8__.CgInbox, {\n                                            size: 24\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"inbox-icon px-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_9__.IoIosHelpCircle, {\n                                            size: 26\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-4 my-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-bold text-2xl\",\n                                    children: \"Tickets\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"opacity-50\",\n                                    children: \"This board shows all the tickets\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"board-penel flex h-72 w-[\".concat(windowSize[0], \"px] overflow-x-scroll\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Board, \"1W0v/7ObOtdy6gu3Hxm+9Rr8V/A=\");\n_c = Board;\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEVBQUN2QiwyREFBZTs0Q0FBQ3lCLElBQUksRUFBRSxFQUFFOzs7OztnREFBSTs7Ozs7NENBQ3pCOzs7Ozs7b0NBQ0Y7Ozs7Ozs0QkFDQztrQ0FDVCw4REFBQ0gsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLFdBQVc7a0NBQ3hCLDRFQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsZUFBZTs7OENBQzVCLDhEQUFDRyxJQUFFO29DQUFDSCxTQUFTLEVBQUMsb0JBQW9COzhDQUFDLFNBQU87Ozs7O3dDQUFLOzhDQUMvQyw4REFBQ0ksR0FBQztvQ0FBQ0osU0FBUyxFQUFDLFlBQVk7OENBQUMsa0NBQWdDOzs7Ozt3Q0FBSTs7Ozs7O2dDQUMxRDs7Ozs7NEJBQ0Y7a0NBQ04sOERBQUNELEtBQUc7d0JBQ0ZDLFNBQVMsRUFBRSwyQkFBMEIsQ0FBZ0IsTUFBcUIsQ0FBbkNOLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyx1QkFBcUIsQ0FBQzs7MENBRTNFLDhEQUFDYiwrREFBTTs7OztvQ0FBRzswQ0FDViw4REFBQ0EsK0RBQU07Ozs7b0NBQUc7MENBQ1YsOERBQUNBLCtEQUFNOzs7O29DQUFHOzBDQUNWLDhEQUFDQSwrREFBTTs7OztvQ0FBRzswQ0FDViw4REFBQ0EsK0RBQU07Ozs7b0NBQUc7MENBQ1YsOERBQUNBLCtEQUFNOzs7O29DQUFHOzBDQUNWLDhEQUFDQSwrREFBTTs7OztvQ0FBRzs7Ozs7OzRCQUNOOzs7Ozs7b0JBQ0Y7O29CQUNMLENBQ0g7QUFDSixDQUFDO0dBeEV1QkUsS0FBSztBQUFMQSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FwcC91L2JvYXJkLmpzP2M2MWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2dJbmJveCB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xyXG5pbXBvcnQgeyBJb0lvc0hlbHBDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IHsgSGlPdXRsaW5lVmlld0JvYXJkcyB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5pbXBvcnQgeyBnZXRBTGxUaWNrZXRzLCBnZXRUaWNrZXRzU3RhdHVzIH0gZnJvbSBcIi4uLy4uLy4uL2NsaWVudC9yZXF1ZXN0c1wiO1xyXG5pbXBvcnQgQm9hcmRDIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2JvYXJkL2JvYXJkXCI7XHJcbmltcG9ydCB7IEJvYXJkSGVhZE1ldGEgfSBmcm9tIFwiLi4vLi4vLi4vTWV0YS9IZWFkc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmQoKSB7XHJcbiAgLy8qKlN0YXRlcyAqL1xyXG4gIGNvbnN0IFthbGxUaWNrZXRzLCBzZXRBbGxUaWNrZXRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdGlja2V0c1N0YXR1cywgc2V0VGlja2V0c1N0YXR1c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZldGNoaW5nKCkge1xyXG4gICAgY29uc3QgYWxsVGlja2V0cyA9IGF3YWl0IGdldEFMbFRpY2tldHMoKTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IGdldFRpY2tldHNTdGF0dXMoKTtcclxuICAgIHNldEFsbFRpY2tldHMoYWxsVGlja2V0cy5kYXRhKTtcclxuICAgIHNldFRpY2tldHNTdGF0dXMoc3RhdHVzLmRhdGEpO1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaGFuZGxlRmV0Y2hpbmcoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vKiogU2NyZWVuIHNpemUgZHluYW1pYyAqL1xyXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKFtcclxuICAgIHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgd2luZG93LmlubmVySGVpZ2h0LFxyXG4gIF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzZXRXaW5kb3dTaXplKFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1Jlc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93UmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Qm9hcmRIZWFkTWV0YSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWItMiBib3JkZXItYi1ncmF5LTkwMCBweC00IHB5LTIgcmVsYXRpdmVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtcy1wYW5lbC1pY29uIG1yLTNcIj5cclxuICAgICAgICAgICAgICA8SGlPdXRsaW5lVmlld0JvYXJkcyBzaXplPXsyNn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPkJvYXJkIFBhbmVsPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHAtaWNvbiBweC0yXCI+XHJcbiAgICAgICAgICAgICAgPENnSW5ib3ggc2l6ZT17MjR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluYm94LWljb24gcHgtMlwiPlxyXG4gICAgICAgICAgICAgIDxJb0lvc0hlbHBDaXJjbGUgc2l6ZT17MjZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG15LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsXCI+VGlja2V0czwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wYWNpdHktNTBcIj5UaGlzIGJvYXJkIHNob3dzIGFsbCB0aGUgdGlja2V0czwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGJvYXJkLXBlbmVsIGZsZXggaC03MiB3LVske3dpbmRvd1NpemVbMF19cHhdIG92ZXJmbG93LXgtc2Nyb2xsYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Qm9hcmRDIC8+XHJcbiAgICAgICAgICA8Qm9hcmRDIC8+XHJcbiAgICAgICAgICA8Qm9hcmRDIC8+XHJcbiAgICAgICAgICA8Qm9hcmRDIC8+XHJcbiAgICAgICAgICA8Qm9hcmRDIC8+XHJcbiAgICAgICAgICA8Qm9hcmRDIC8+XHJcbiAgICAgICAgICA8Qm9hcmRDIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNnSW5ib3giLCJJb0lvc0hlbHBDaXJjbGUiLCJIaU91dGxpbmVWaWV3Qm9hcmRzIiwiZ2V0QUxsVGlja2V0cyIsImdldFRpY2tldHNTdGF0dXMiLCJCb2FyZEMiLCJCb2FyZEhlYWRNZXRhIiwiQm9hcmQiLCJhbGxUaWNrZXRzIiwic2V0QWxsVGlja2V0cyIsInRpY2tldHNTdGF0dXMiLCJzZXRUaWNrZXRzU3RhdHVzIiwiaGFuZGxlRmV0Y2hpbmciLCJzdGF0dXMiLCJkYXRhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsInNpemUiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/app/u/board.js\n"));

/***/ })

});