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

/***/ "./components/Tickets/WorkSubmission/WorkSubmission.js":
/*!*************************************************************!*\
  !*** ./components/Tickets/WorkSubmission/WorkSubmission.js ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WorkSubmission; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n\n\n\n\nfunction WorkSubmission(props) {\n    var _this = this;\n    var downloadResource = function downloadResource(url) {\n        DownloadFile(url).then(function(res) {\n            if (!res.data) {\n                antd__WEBPACK_IMPORTED_MODULE_2__.message.error(\"Error while downloading work submission!\");\n                setDownloadLoading(false);\n            } else {\n                antd__WEBPACK_IMPORTED_MODULE_2__.message.success(\"work submission download started!\");\n                setDownloadLoading(false);\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Drawer, {\n        title: \"Work Submission\",\n        onClose: function() {\n            return props.setIsWorkSubmission(false);\n        },\n        open: props.isWorkSubmission,\n        bodyStyle: {\n            paddingBottom: 80\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-lg font-semibold\",\n                    children: \"Previous submissions\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Tickets\\\\WorkSubmission\\\\WorkSubmission.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm\",\n                    children: \"Following are all the work submitted against ticket\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Tickets\\\\WorkSubmission\\\\WorkSubmission.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                props.work.map(function(w, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4 mt-2 border-[1.5px] border-gray-500 bg-gray-800 rounded-md flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Submission Id: \",\n                                    w.id\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Tickets\\\\WorkSubmission\\\\WorkSubmission.js\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-gray-400 rounded-sm py-2 mt-2 flex justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiCloudDownload, {\n                                        size: 20,\n                                        color: \"black\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Tickets\\\\WorkSubmission\\\\WorkSubmission.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-black ml-2 font-semibold\",\n                                        children: \"Download Submitted Work\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Tickets\\\\WorkSubmission\\\\WorkSubmission.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Tickets\\\\WorkSubmission\\\\WorkSubmission.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Tickets\\\\WorkSubmission\\\\WorkSubmission.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, _this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Tickets\\\\WorkSubmission\\\\WorkSubmission.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Tickets\\\\WorkSubmission\\\\WorkSubmission.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = WorkSubmission;\nvar _c;\n$RefreshReg$(_c, \"WorkSubmission\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpY2tldHMvV29ya1N1Ym1pc3Npb24vV29ya1N1Ym1pc3Npb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXVDO0FBQ1M7QUFDQztBQUVsQyxTQUFTTSxjQUFjLENBQUNDLEtBQUssRUFBRTs7UUFDbkNDLGdCQUFnQixHQUF6QixTQUFTQSxnQkFBZ0IsQ0FBQ0MsR0FBRyxFQUFFO1FBQzdCQyxZQUFZLENBQUNELEdBQUcsQ0FBQyxDQUFDRSxJQUFJLENBQUMsU0FBQ0MsR0FBRyxFQUFLO1lBQzlCLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7Z0JBQ2JaLCtDQUFhLENBQUMsMENBQTBDLENBQUMsQ0FBQztnQkFDMURjLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLE9BQU87Z0JBQ0xkLGlEQUFlLENBQUMsbUNBQW1DLENBQUMsQ0FBQztnQkFDckRjLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxxQkFDRSw4REFBQ2Ysd0NBQU07UUFDTGlCLEtBQUssRUFBQyxpQkFBaUI7UUFDdkJDLE9BQU8sRUFBRTttQkFBTVgsS0FBSyxDQUFDWSxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7U0FBQTtRQUMvQ0MsSUFBSSxFQUFFYixLQUFLLENBQUNjLGdCQUFnQjtRQUM1QkMsU0FBUyxFQUFFO1lBQUVDLGFBQWEsRUFBRSxFQUFFO1NBQUU7a0JBRWhDLDRFQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxlQUFlOzs4QkFDNUIsOERBQUNDLElBQUU7b0JBQUNELFNBQVMsRUFBQyx1QkFBdUI7OEJBQUMsc0JBQW9COzs7Ozt3QkFBSzs4QkFDL0QsOERBQUNFLEdBQUM7b0JBQUNGLFNBQVMsRUFBQyxTQUFTOzhCQUFDLHFEQUV2Qjs7Ozs7d0JBQUk7Z0JBQ0hsQixLQUFLLENBQUNxQixJQUFJLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxDQUFDLEVBQUVDLEtBQUssRUFBSztvQkFDNUIscUJBQ0UsOERBQUNQLEtBQUc7d0JBQ0ZDLFNBQVMsRUFBQyw4RUFBOEU7OzBDQUd4Riw4REFBQ0UsR0FBQzs7b0NBQUMsaUJBQWU7b0NBQUNHLENBQUMsQ0FBQ0UsRUFBRTs7Ozs7O3FDQUFLOzBDQUM1Qiw4REFBQ0MsUUFBTTtnQ0FBQ1IsU0FBUyxFQUFDLHNEQUFzRDs7a0RBQ3RFLDhEQUFDcEIsMkRBQWU7d0NBQUM2QixJQUFJLEVBQUUsRUFBRTt3Q0FBRUMsS0FBSyxFQUFDLE9BQU87Ozs7OzZDQUFHO2tEQUMzQyw4REFBQ1IsR0FBQzt3Q0FBQ0YsU0FBUyxFQUFDLCtCQUErQjtrREFBQyx5QkFFN0M7Ozs7OzZDQUFJOzs7Ozs7cUNBQ0c7O3VCQVJKTSxLQUFLOzs7OzZCQVNOLENBQ047Z0JBQ0osQ0FBQyxDQUFDOzs7Ozs7Z0JBQ0U7Ozs7O1lBQ0MsQ0FDVDtBQUNKLENBQUM7QUEzQ3VCekIsS0FBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RpY2tldHMvV29ya1N1Ym1pc3Npb24vV29ya1N1Ym1pc3Npb24uanM/ZGMzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmF3ZXIsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCaUNsb3VkRG93bmxvYWQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtTdWJtaXNzaW9uKHByb3BzKSB7XHJcbiAgZnVuY3Rpb24gZG93bmxvYWRSZXNvdXJjZSh1cmwpIHtcclxuICAgIERvd25sb2FkRmlsZSh1cmwpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAoIXJlcy5kYXRhKSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihcIkVycm9yIHdoaWxlIGRvd25sb2FkaW5nIHdvcmsgc3VibWlzc2lvbiFcIik7XHJcbiAgICAgICAgc2V0RG93bmxvYWRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJ3b3JrIHN1Ym1pc3Npb24gZG93bmxvYWQgc3RhcnRlZCFcIik7XHJcbiAgICAgICAgc2V0RG93bmxvYWRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyXHJcbiAgICAgIHRpdGxlPVwiV29yayBTdWJtaXNzaW9uXCJcclxuICAgICAgb25DbG9zZT17KCkgPT4gcHJvcHMuc2V0SXNXb3JrU3VibWlzc2lvbihmYWxzZSl9XHJcbiAgICAgIG9wZW49e3Byb3BzLmlzV29ya1N1Ym1pc3Npb259XHJcbiAgICAgIGJvZHlTdHlsZT17eyBwYWRkaW5nQm90dG9tOiA4MCB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+UHJldmlvdXMgc3VibWlzc2lvbnM8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5cclxuICAgICAgICAgIEZvbGxvd2luZyBhcmUgYWxsIHRoZSB3b3JrIHN1Ym1pdHRlZCBhZ2FpbnN0IHRpY2tldFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICB7cHJvcHMud29yay5tYXAoKHcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IG10LTIgYm9yZGVyLVsxLjVweF0gYm9yZGVyLWdyYXktNTAwIGJnLWdyYXktODAwIHJvdW5kZWQtbWQgZmxleCBmbGV4LWNvbFwiXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwPlN1Ym1pc3Npb24gSWQ6IHt3LmlkfTwvcD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktNDAwIHJvdW5kZWQtc20gcHktMiBtdC0yIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCaUNsb3VkRG93bmxvYWQgc2l6ZT17MjB9IGNvbG9yPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBtbC0yIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgRG93bmxvYWQgU3VibWl0dGVkIFdvcmtcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkRyYXdlciIsIm1lc3NhZ2UiLCJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQmlDbG91ZERvd25sb2FkIiwiV29ya1N1Ym1pc3Npb24iLCJwcm9wcyIsImRvd25sb2FkUmVzb3VyY2UiLCJ1cmwiLCJEb3dubG9hZEZpbGUiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVycm9yIiwic2V0RG93bmxvYWRMb2FkaW5nIiwic3VjY2VzcyIsInRpdGxlIiwib25DbG9zZSIsInNldElzV29ya1N1Ym1pc3Npb24iLCJvcGVuIiwiaXNXb3JrU3VibWlzc2lvbiIsImJvZHlTdHlsZSIsInBhZGRpbmdCb3R0b20iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJ3b3JrIiwibWFwIiwidyIsImluZGV4IiwiaWQiLCJidXR0b24iLCJzaXplIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Tickets/WorkSubmission/WorkSubmission.js\n"));

/***/ })

});