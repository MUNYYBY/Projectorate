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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardC; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment/moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n\n\n\n\n\nfunction StatusColor(title) {\n    return title == \"Todo\" ? \"#16A34A\" : title == \"In-progress\" ? \"#CA8A04\" : title == \"Done\" ? \"#7C3AED\" : title == \"Resolved\" ? \"#D97706\" : title == \"Tested but not resolved\" ? \"#BE185D\" : \"#2563ED\";\n}\n_c = StatusColor;\nfunction TicketContainer(param) {\n    var ticket = param.ticket, setIsTicketInfo = param.setIsTicketInfo;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ticket bg-gray-800 bg-opacity-90 border-[1.5px] border-gray-600 hover:border-primary transition-all cursor-pointer p-3 rounded-md w-full mb-2\",\n        onClick: function() {\n            return setIsTicketInfo({\n                id: ticket.id\n            });\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"ticket0-header flex flex-row justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-5 w-5 rounded-full border-[1.5px] border-opacity-50 mr-2 flex justify-center items-center\",\n                                style: {\n                                    borderColor: StatusColor(ticket.TicketStatus.title)\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-[4px] w-[4px] rounded-full\",\n                                    style: {\n                                        backgroundColor: StatusColor(ticket.TicketStatus.title)\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"team-name text-sm opacity-75\",\n                                children: [\n                                    ticket.team.team_name,\n                                    \" #\",\n                                    ticket.id\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {\n                        placement: \"top\",\n                        title: ticket.employee.first_name + \" \" + ticket.employee.last_name,\n                        mouseEnterDelay: 0.05,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-8 w-8 flex justify-center items-center rounded-full border-[1.5px] border-secondry border-opacity-20 hover:border-opacity-30 bg-secondry bg-opacity-10 text-secondry text-opacity-50 hover:bg-opacity-20 hover:text-opacity-100 transition-all\",\n                            children: ticket.employee.first_name[0]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"ticket-decription my-1 text-sm\",\n                children: ticket.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inline-flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-white text-opacity-60 px-2 mt-1 mr-1 py-1 border-[1.5px] bg-gray-800 border-gray-500 border-opacity-50 rounded-full text-xs \",\n                                children: ticket.TicketPiority.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-white text-opacity-60 px-2 mt-1 mr-1 py-1 border-[1.5px] bg-gray-800 border-gray-500 border-opacity-50 rounded-full text-xs \",\n                                children: moment_moment__WEBPACK_IMPORTED_MODULE_1___default()(ticket.deadline).format(\"DD/MM/YY\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inline-flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center text-white text-opacity-60 px-2 mt-1 mr-1 py-1 border-[1.5px] bg-gray-800 border-gray-500 border-opacity-50 rounded-full text-xs \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"mr-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoMdGitNetwork, {}, void 0, false, {\n                                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                ticket.project.project_name,\n                                \" / \",\n                                ticket.team.team_name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_c1 = TicketContainer;\nfunction BoardC(param) {\n    var data = param.data, tickets = param.tickets, setIsTicketInfo = param.setIsTicketInfo;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-1 !h-full overflow-y-auto !w-80 border-2 border-gray-600 border-opacity-60 rounded-md flex flex-col flex-shrink-0 bg-gray-900 bg-opacity-75 hover:bg-opacity-100 transition-all p-2 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex flex-col w-full p-2 fixed\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-4 w-4 mr-2  rounded-full\",\n                                style: {\n                                    backgroundColor: StatusColor(data.title)\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-base font-semibold opacity-80\",\n                                children: data.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm mt-1 opacity-50\",\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"mt-3 w-full\",\n                children: [\n                    tickets.map(function(ticket, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TicketContainer, {\n                                ticket: ticket,\n                                setIsTicketInfo: setIsTicketInfo\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, _this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, _this);\n                    }),\n                    tickets.map(function(ticket, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TicketContainer, {\n                                ticket: ticket,\n                                setIsTicketInfo: setIsTicketInfo\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                                lineNumber: 107,\n                                columnNumber: 15\n                            }, _this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, _this);\n                    }),\n                    tickets.length == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Empty, {\n                        image: antd__WEBPACK_IMPORTED_MODULE_3__.Empty.PRESENTED_IMAGE_SIMPLE,\n                        description: \"No tickets in \".concat(data.title)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_c2 = BoardC;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"StatusColor\");\n$RefreshReg$(_c1, \"TicketContainer\");\n$RefreshReg$(_c2, \"BoardC\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QnlCLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLFNBQUNoQyxNQUFNLEVBQUVpQyxLQUFLLEVBQUs7d0JBQzlCLHFCQUNFLDhEQUFDL0IsS0FBRzs0QkFBYUMsU0FBUyxFQUFDLEVBQUU7c0NBQzNCLDRFQUFDSixlQUFlO2dDQUNkQyxNQUFNLEVBQUVBLE1BQU07Z0NBQ2RDLGVBQWUsRUFBRUEsZUFBZTs7Ozs7cUNBQ2hDOzJCQUpNZ0MsS0FBSzs7OztpQ0FLVCxDQUNOO29CQUNKLENBQUMsQ0FBQztvQkFDREwsT0FBTyxDQUFDSSxHQUFHLENBQUMsU0FBQ2hDLE1BQU0sRUFBRWlDLEtBQUssRUFBSzt3QkFDOUIscUJBQ0UsOERBQUMvQixLQUFHOzRCQUFhQyxTQUFTLEVBQUMsRUFBRTtzQ0FDM0IsNEVBQUNKLGVBQWU7Z0NBQ2RDLE1BQU0sRUFBRUEsTUFBTTtnQ0FDZEMsZUFBZSxFQUFFQSxlQUFlOzs7OztxQ0FDaEM7MkJBSk1nQyxLQUFLOzs7O2lDQUtULENBQ047b0JBQ0osQ0FBQyxDQUFDO29CQUNETCxPQUFPLENBQUNNLE1BQU0sSUFBSSxDQUFDLGlCQUNsQiw4REFBQzFDLHVDQUFLO3dCQUNKMkMsS0FBSyxFQUFFM0MsOERBQTRCO3dCQUNuQ3VDLFdBQVcsRUFBRSxnQkFBZSxDQUFhLE9BQVhKLElBQUksQ0FBQzdCLEtBQUssQ0FBRTs7Ozs7NEJBQzFDLGlCQUVGLDZJQUFLOzs7Ozs7b0JBRUY7Ozs7OztZQUNILENBQ047QUFDSixDQUFDO0FBL0N1QjRCLE1BQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZC9ib2FyZC5qcz8wNDE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVtcHR5LCBUb29sdGlwIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50L21vbWVudFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElvTWRHaXROZXR3b3JrIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5mdW5jdGlvbiBTdGF0dXNDb2xvcih0aXRsZSkge1xyXG4gIHJldHVybiB0aXRsZSA9PSBcIlRvZG9cIlxyXG4gICAgPyBcIiMxNkEzNEFcIlxyXG4gICAgOiB0aXRsZSA9PSBcIkluLXByb2dyZXNzXCJcclxuICAgID8gXCIjQ0E4QTA0XCJcclxuICAgIDogdGl0bGUgPT0gXCJEb25lXCJcclxuICAgID8gXCIjN0MzQUVEXCJcclxuICAgIDogdGl0bGUgPT0gXCJSZXNvbHZlZFwiXHJcbiAgICA/IFwiI0Q5NzcwNlwiXHJcbiAgICA6IHRpdGxlID09IFwiVGVzdGVkIGJ1dCBub3QgcmVzb2x2ZWRcIlxyXG4gICAgPyBcIiNCRTE4NURcIlxyXG4gICAgOiBcIiMyNTYzRURcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gVGlja2V0Q29udGFpbmVyKHsgdGlja2V0LCBzZXRJc1RpY2tldEluZm8gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInRpY2tldCBiZy1ncmF5LTgwMCBiZy1vcGFjaXR5LTkwIGJvcmRlci1bMS41cHhdIGJvcmRlci1ncmF5LTYwMCBob3Zlcjpib3JkZXItcHJpbWFyeSB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciBwLTMgcm91bmRlZC1tZCB3LWZ1bGwgbWItMlwiXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzVGlja2V0SW5mbyh7IGlkOiB0aWNrZXQuaWQgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidGlja2V0MC1oZWFkZXIgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BoLTUgdy01IHJvdW5kZWQtZnVsbCBib3JkZXItWzEuNXB4XSBib3JkZXItb3BhY2l0eS01MCBtci0yIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyYH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogU3RhdHVzQ29sb3IodGlja2V0LlRpY2tldFN0YXR1cy50aXRsZSksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLVs0cHhdIHctWzRweF0gcm91bmRlZC1mdWxsYH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBTdGF0dXNDb2xvcih0aWNrZXQuVGlja2V0U3RhdHVzLnRpdGxlKSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1uYW1lIHRleHQtc20gb3BhY2l0eS03NVwiPlxyXG4gICAgICAgICAgICB7dGlja2V0LnRlYW0udGVhbV9uYW1lfSAje3RpY2tldC5pZH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgdGl0bGU9e3RpY2tldC5lbXBsb3llZS5maXJzdF9uYW1lICsgXCIgXCIgKyB0aWNrZXQuZW1wbG95ZWUubGFzdF9uYW1lfVxyXG4gICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjA1fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC04IHctOCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgYm9yZGVyLVsxLjVweF0gYm9yZGVyLXNlY29uZHJ5IGJvcmRlci1vcGFjaXR5LTIwIGhvdmVyOmJvcmRlci1vcGFjaXR5LTMwIGJnLXNlY29uZHJ5IGJnLW9wYWNpdHktMTAgdGV4dC1zZWNvbmRyeSB0ZXh0LW9wYWNpdHktNTAgaG92ZXI6Ymctb3BhY2l0eS0yMCBob3Zlcjp0ZXh0LW9wYWNpdHktMTAwIHRyYW5zaXRpb24tYWxsXCI+XHJcbiAgICAgICAgICAgIHt0aWNrZXQuZW1wbG95ZWUuZmlyc3RfbmFtZVswXX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInRpY2tldC1kZWNyaXB0aW9uIG15LTEgdGV4dC1zbVwiPnt0aWNrZXQudGl0bGV9PC9tYWluPlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1vcGFjaXR5LTYwIHB4LTIgbXQtMSBtci0xIHB5LTEgYm9yZGVyLVsxLjVweF0gYmctZ3JheS04MDAgYm9yZGVyLWdyYXktNTAwIGJvcmRlci1vcGFjaXR5LTUwIHJvdW5kZWQtZnVsbCB0ZXh0LXhzIFwiPlxyXG4gICAgICAgICAgICB7dGlja2V0LlRpY2tldFBpb3JpdHkudGl0bGV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LW9wYWNpdHktNjAgcHgtMiBtdC0xIG1yLTEgcHktMSBib3JkZXItWzEuNXB4XSBiZy1ncmF5LTgwMCBib3JkZXItZ3JheS01MDAgYm9yZGVyLW9wYWNpdHktNTAgcm91bmRlZC1mdWxsIHRleHQteHMgXCI+XHJcbiAgICAgICAgICAgIHttb21lbnQodGlja2V0LmRlYWRsaW5lKS5mb3JtYXQoXCJERC9NTS9ZWVwiKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LW9wYWNpdHktNjAgcHgtMiBtdC0xIG1yLTEgcHktMSBib3JkZXItWzEuNXB4XSBiZy1ncmF5LTgwMCBib3JkZXItZ3JheS01MDAgYm9yZGVyLW9wYWNpdHktNTAgcm91bmRlZC1mdWxsIHRleHQteHMgXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTFcIj5cclxuICAgICAgICAgICAgICA8SW9NZEdpdE5ldHdvcmsgLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICB7dGlja2V0LnByb2plY3QucHJvamVjdF9uYW1lfSAvIHt0aWNrZXQudGVhbS50ZWFtX25hbWV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZEMoeyBkYXRhLCB0aWNrZXRzLCBzZXRJc1RpY2tldEluZm8gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTEgIWgtZnVsbCBvdmVyZmxvdy15LWF1dG8gIXctODAgYm9yZGVyLTIgYm9yZGVyLWdyYXktNjAwIGJvcmRlci1vcGFjaXR5LTYwIHJvdW5kZWQtbWQgZmxleCBmbGV4LWNvbCBmbGV4LXNocmluay0wIGJnLWdyYXktOTAwIGJnLW9wYWNpdHktNzUgaG92ZXI6Ymctb3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1hbGwgcC0yIHJlbGF0aXZlXCI+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgcC0yIGZpeGVkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BoLTQgdy00IG1yLTIgIHJvdW5kZWQtZnVsbGB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBTdGF0dXNDb2xvcihkYXRhLnRpdGxlKSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBvcGFjaXR5LTgwXCI+e2RhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG10LTEgb3BhY2l0eS01MFwiPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm10LTMgdy1mdWxsXCI+XHJcbiAgICAgICAge3RpY2tldHMubWFwKCh0aWNrZXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxUaWNrZXRDb250YWluZXJcclxuICAgICAgICAgICAgICAgIHRpY2tldD17dGlja2V0fVxyXG4gICAgICAgICAgICAgICAgc2V0SXNUaWNrZXRJbmZvPXtzZXRJc1RpY2tldEluZm99XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIHt0aWNrZXRzLm1hcCgodGlja2V0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8VGlja2V0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICB0aWNrZXQ9e3RpY2tldH1cclxuICAgICAgICAgICAgICAgIHNldElzVGlja2V0SW5mbz17c2V0SXNUaWNrZXRJbmZvfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICB7dGlja2V0cy5sZW5ndGggPT0gMCA/IChcclxuICAgICAgICAgIDxFbXB0eVxyXG4gICAgICAgICAgICBpbWFnZT17RW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2BObyB0aWNrZXRzIGluICR7ZGF0YS50aXRsZX1gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD48Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJFbXB0eSIsIlRvb2x0aXAiLCJtb21lbnQiLCJSZWFjdCIsIklvTWRHaXROZXR3b3JrIiwiU3RhdHVzQ29sb3IiLCJ0aXRsZSIsIlRpY2tldENvbnRhaW5lciIsInRpY2tldCIsInNldElzVGlja2V0SW5mbyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpZCIsImhlYWRlciIsInN0eWxlIiwiYm9yZGVyQ29sb3IiLCJUaWNrZXRTdGF0dXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZWFtIiwidGVhbV9uYW1lIiwicGxhY2VtZW50IiwiZW1wbG95ZWUiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwibW91c2VFbnRlckRlbGF5IiwibWFpbiIsImZvb3RlciIsIlRpY2tldFBpb3JpdHkiLCJkZWFkbGluZSIsImZvcm1hdCIsInNwYW4iLCJwcm9qZWN0IiwicHJvamVjdF9uYW1lIiwiQm9hcmRDIiwiZGF0YSIsInRpY2tldHMiLCJoMSIsInAiLCJkZXNjcmlwdGlvbiIsIm1hcCIsImluZGV4IiwibGVuZ3RoIiwiaW1hZ2UiLCJQUkVTRU5URURfSU1BR0VfU0lNUExFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/board/board.js\n"));

/***/ })

});