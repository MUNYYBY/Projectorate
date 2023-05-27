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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _client_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../client/requests */ \"./client/requests.js\");\n/* harmony import */ var _components_board_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/board/board */ \"./components/board/board.js\");\n/* harmony import */ var _Meta_Heads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Meta/Heads */ \"./Meta/Heads.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Board() {\n    _s();\n    //**States */\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), allTickets = ref[0], setAllTickets = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), ticketsStatus = ref1[0], setTicketsStatus = ref1[1];\n    function handleFetching() {\n        return _handleFetching.apply(this, arguments);\n    }\n    function _handleFetching() {\n        _handleFetching = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var allTickets, status;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,_client_requests__WEBPACK_IMPORTED_MODULE_2__.getALlTickets)()\n                        ];\n                    case 1:\n                        allTickets = _state.sent();\n                        return [\n                            4,\n                            (0,_client_requests__WEBPACK_IMPORTED_MODULE_2__.getTicketsStatus)()\n                        ];\n                    case 2:\n                        status = _state.sent();\n                        setAllTickets(allTickets.data);\n                        setTicketsStatus(status.data);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _handleFetching.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        handleFetching();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Meta_Heads__WEBPACK_IMPORTED_MODULE_4__.BoardHeadMeta, {}, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"board h-full w-full overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-2 relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"teams-panel-icon mr-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiOutlineViewBoards, {\n                                            size: 26\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-lg font-bold\",\n                                        children: \"Board Panel\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"help-icon px-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_cg__WEBPACK_IMPORTED_MODULE_8__.CgInbox, {\n                                            size: 24\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"inbox-icon px-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_9__.IoIosHelpCircle, {\n                                            size: 26\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-4 my-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-bold text-2xl\",\n                                    children: \"Tickets\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"opacity-50\",\n                                    children: \"This board shows all the tickets\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"board-penel flex h-full overflow-x-scroll whitespace-nowrap flex-nowrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-72 mx-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-72 mx-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-72 mx-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-72 mx-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-72 mx-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-72 mx-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-72 mx-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-72 mx-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-72 mx-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\pages\\\\app\\\\u\\\\board.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Board, \"q6SQlJ/iF1m3MjZnOaQqY4kTJYI=\");\n_c = Board;\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtEQUFNOzs7O3dDQUFHOzs7OztvQ0FDTjswQ0FDTiw4REFBQ1UsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLFdBQVc7MENBQ3hCLDRFQUFDWCwrREFBTTs7Ozt3Q0FBRzs7Ozs7b0NBQ047MENBRU4sOERBQUNVLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxXQUFXOzBDQUN4Qiw0RUFBQ1gsK0RBQU07Ozs7d0NBQUc7Ozs7O29DQUNOOzBDQUVOLDhEQUFDVSxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsV0FBVzswQ0FDeEIsNEVBQUNYLCtEQUFNOzs7O3dDQUFHOzs7OztvQ0FDTjswQ0FFTiw4REFBQ1UsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLFdBQVc7MENBQ3hCLDRFQUFDWCwrREFBTTs7Ozt3Q0FBRzs7Ozs7b0NBQ047MENBRU4sOERBQUNVLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxXQUFXOzBDQUN4Qiw0RUFBQ1gsK0RBQU07Ozs7d0NBQUc7Ozs7O29DQUNOOzBDQUVOLDhEQUFDVSxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsV0FBVzswQ0FDeEIsNEVBQUNYLCtEQUFNOzs7O3dDQUFHOzs7OztvQ0FDTjswQ0FFTiw4REFBQ1UsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLFdBQVc7MENBQ3hCLDRFQUFDWCwrREFBTTs7Ozt3Q0FBRzs7Ozs7b0NBQ047Ozs7Ozs0QkFDRjs7Ozs7O29CQUNGOztvQkFDTCxDQUNIO0FBQ0osQ0FBQztHQS9FdUJFLEtBQUs7QUFBTEEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcHAvdS9ib2FyZC5qcz9jNjFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENnSW5ib3ggfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIjtcclxuaW1wb3J0IHsgSW9Jb3NIZWxwQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCB7IEhpT3V0bGluZVZpZXdCb2FyZHMgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcclxuaW1wb3J0IHsgZ2V0QUxsVGlja2V0cywgZ2V0VGlja2V0c1N0YXR1cyB9IGZyb20gXCIuLi8uLi8uLi9jbGllbnQvcmVxdWVzdHNcIjtcclxuaW1wb3J0IEJvYXJkQyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9ib2FyZC9ib2FyZFwiO1xyXG5pbXBvcnQgeyBCb2FyZEhlYWRNZXRhIH0gZnJvbSBcIi4uLy4uLy4uL01ldGEvSGVhZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkKCkge1xyXG4gIC8vKipTdGF0ZXMgKi9cclxuICBjb25zdCBbYWxsVGlja2V0cywgc2V0QWxsVGlja2V0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RpY2tldHNTdGF0dXMsIHNldFRpY2tldHNTdGF0dXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGZXRjaGluZygpIHtcclxuICAgIGNvbnN0IGFsbFRpY2tldHMgPSBhd2FpdCBnZXRBTGxUaWNrZXRzKCk7XHJcbiAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBnZXRUaWNrZXRzU3RhdHVzKCk7XHJcbiAgICBzZXRBbGxUaWNrZXRzKGFsbFRpY2tldHMuZGF0YSk7XHJcbiAgICBzZXRUaWNrZXRzU3RhdHVzKHN0YXR1cy5kYXRhKTtcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhhbmRsZUZldGNoaW5nKCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Qm9hcmRIZWFkTWV0YSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWItMiBib3JkZXItYi1ncmF5LTkwMCBweC00IHB5LTIgcmVsYXRpdmVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtcy1wYW5lbC1pY29uIG1yLTNcIj5cclxuICAgICAgICAgICAgICA8SGlPdXRsaW5lVmlld0JvYXJkcyBzaXplPXsyNn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPkJvYXJkIFBhbmVsPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHAtaWNvbiBweC0yXCI+XHJcbiAgICAgICAgICAgICAgPENnSW5ib3ggc2l6ZT17MjR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluYm94LWljb24gcHgtMlwiPlxyXG4gICAgICAgICAgICAgIDxJb0lvc0hlbHBDaXJjbGUgc2l6ZT17MjZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG15LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsXCI+VGlja2V0czwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wYWNpdHktNTBcIj5UaGlzIGJvYXJkIHNob3dzIGFsbCB0aGUgdGlja2V0czwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcGVuZWwgZmxleCBoLWZ1bGwgb3ZlcmZsb3cteC1zY3JvbGwgd2hpdGVzcGFjZS1ub3dyYXAgZmxleC1ub3dyYXBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy03MiBteC0yXCI+XHJcbiAgICAgICAgICAgIDxCb2FyZEMgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy03MiBteC0yXCI+XHJcbiAgICAgICAgICAgIDxCb2FyZEMgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyIG14LTJcIj5cclxuICAgICAgICAgICAgPEJvYXJkQyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyIG14LTJcIj5cclxuICAgICAgICAgICAgPEJvYXJkQyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyIG14LTJcIj5cclxuICAgICAgICAgICAgPEJvYXJkQyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyIG14LTJcIj5cclxuICAgICAgICAgICAgPEJvYXJkQyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyIG14LTJcIj5cclxuICAgICAgICAgICAgPEJvYXJkQyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyIG14LTJcIj5cclxuICAgICAgICAgICAgPEJvYXJkQyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyIG14LTJcIj5cclxuICAgICAgICAgICAgPEJvYXJkQyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNnSW5ib3giLCJJb0lvc0hlbHBDaXJjbGUiLCJIaU91dGxpbmVWaWV3Qm9hcmRzIiwiZ2V0QUxsVGlja2V0cyIsImdldFRpY2tldHNTdGF0dXMiLCJCb2FyZEMiLCJCb2FyZEhlYWRNZXRhIiwiQm9hcmQiLCJhbGxUaWNrZXRzIiwic2V0QWxsVGlja2V0cyIsInRpY2tldHNTdGF0dXMiLCJzZXRUaWNrZXRzU3RhdHVzIiwiaGFuZGxlRmV0Y2hpbmciLCJzdGF0dXMiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwic2l6ZSIsImgxIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/app/u/board.js\n"));

/***/ })

});