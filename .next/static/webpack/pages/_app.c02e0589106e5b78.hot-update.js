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

/***/ "./components/Sub-panel/ProjectsTabs/ProjectTabsContainer.js":
/*!*******************************************************************!*\
  !*** ./components/Sub-panel/ProjectsTabs/ProjectTabsContainer.js ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectsTabContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ProjectsTabContainer(param) {\n    var _CompanyName = param.CompanyName, CompanyName = _CompanyName === void 0 ? \"Company Name\" : _CompanyName, projectId = param.projectId;\n    _s();\n    //** Router Initialization */\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"bg-gray-700\"), color = ref[0], setColor = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (router.query.projectId && router.query.projectName) {\n            if (projectId == router.query.projectId && router.query.projectName == CompanyName) {\n                setColor(\"bg-gray-900\");\n            } else {\n                setColor(\"bg-gray-700\");\n            }\n        }\n    }, [\n        router.query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-16 \".concat(color, \" px-4 mt-2 flex flex-col justify-center cursor-pointer\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"Project-Image h-12 w-12 flex justify-center items-center bg-gray-500 bg-opacity-25 rounded-lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-semibold\",\n                        children: CompanyName[0].toUpperCase()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Sub-panel\\\\ProjectsTabs\\\\ProjectTabsContainer.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Sub-panel\\\\ProjectsTabs\\\\ProjectTabsContainer.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"projects-container-info ml-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-sm font-semibold\",\n                        children: CompanyName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Sub-panel\\\\ProjectsTabs\\\\ProjectTabsContainer.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Sub-panel\\\\ProjectsTabs\\\\ProjectTabsContainer.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Sub-panel\\\\ProjectsTabs\\\\ProjectTabsContainer.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Sub-panel\\\\ProjectsTabs\\\\ProjectTabsContainer.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectsTabContainer, \"K3sog+2LGr3U3ONsmDdnWNC5Jfo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProjectsTabContainer;\nvar _c;\n$RefreshReg$(_c, \"ProjectsTabContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1Yi1wYW5lbC9Qcm9qZWN0c1RhYnMvUHJvamVjdFRhYnNDb250YWluZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNJO0FBRTdCLFNBQVNHLG9CQUFvQixDQUFDLEtBRzVDLEVBQUU7dUJBSDBDLEtBRzVDLENBRkNDLFdBQVcsRUFBWEEsV0FBVyw2QkFBRyxjQUFjLGlCQUM1QkMsU0FBUyxHQUZrQyxLQUc1QyxDQURDQSxTQUFTOztJQUVULDZCQUE2QjtJQUM3QixJQUFNQyxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUIsSUFBMEJDLEdBQXVCLEdBQXZCQSwrQ0FBUSxDQUFDLGFBQWEsQ0FBQyxFQUExQ00sS0FBSyxHQUFjTixHQUF1QixHQUFyQyxFQUFFTyxRQUFRLEdBQUlQLEdBQXVCLEdBQTNCO0lBRXRCQyxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJSSxNQUFNLENBQUNHLEtBQUssQ0FBQ0osU0FBUyxJQUFJQyxNQUFNLENBQUNHLEtBQUssQ0FBQ0MsV0FBVyxFQUFFO1lBQ3RELElBQ0VMLFNBQVMsSUFBSUMsTUFBTSxDQUFDRyxLQUFLLENBQUNKLFNBQVMsSUFDbkNDLE1BQU0sQ0FBQ0csS0FBSyxDQUFDQyxXQUFXLElBQUlOLFdBQVcsRUFDdkM7Z0JBQ0FJLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxQixPQUFPO2dCQUNMQSxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEVBQUU7UUFBQ0YsTUFBTSxDQUFDRyxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBQ25CLHFCQUNFLDhEQUFDRSxLQUFHO1FBQ0ZDLFNBQVMsRUFBRSxjQUFhLENBQVEsTUFBc0QsQ0FBNURMLEtBQUssRUFBQyx3REFBc0QsQ0FBQztrQkFFdkYsNEVBQUNJLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLDRCQUE0Qjs7OEJBQ3pDLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsK0ZBQStGOzhCQUM1Ryw0RUFBQ0MsSUFBRTt3QkFBQ0QsU0FBUyxFQUFDLHdCQUF3QjtrQ0FDbkNSLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ1UsV0FBVyxFQUFFOzs7Ozs0QkFDMUI7Ozs7O3dCQUNEOzhCQUNOLDhEQUFDSCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsOEJBQThCOzhCQUMzQyw0RUFBQ0csSUFBRTt3QkFBQ0gsU0FBUyxFQUFDLHVCQUF1QjtrQ0FBRVIsV0FBVzs7Ozs7NEJBQU07Ozs7O3dCQUNwRDs7Ozs7O2dCQUNGOzs7OztZQUNGLENBQ047QUFDSixDQUFDO0dBcEN1QkQsb0JBQW9COztRQUszQkgsa0RBQVM7OztBQUxGRyxLQUFBQSxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdWItcGFuZWwvUHJvamVjdHNUYWJzL1Byb2plY3RUYWJzQ29udGFpbmVyLmpzP2MxYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzVGFiQ29udGFpbmVyKHtcclxuICBDb21wYW55TmFtZSA9IFwiQ29tcGFueSBOYW1lXCIsXHJcbiAgcHJvamVjdElkLFxyXG59KSB7XHJcbiAgLy8qKiBSb3V0ZXIgSW5pdGlhbGl6YXRpb24gKi9cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiYmctZ3JheS03MDBcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LnByb2plY3RJZCAmJiByb3V0ZXIucXVlcnkucHJvamVjdE5hbWUpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHByb2plY3RJZCA9PSByb3V0ZXIucXVlcnkucHJvamVjdElkICYmXHJcbiAgICAgICAgcm91dGVyLnF1ZXJ5LnByb2plY3ROYW1lID09IENvbXBhbnlOYW1lXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNldENvbG9yKFwiYmctZ3JheS05MDBcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0Q29sb3IoXCJiZy1ncmF5LTcwMFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnldKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC0xNiAke2NvbG9yfSBweC00IG10LTIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlcmB9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2plY3QtSW1hZ2UgaC0xMiB3LTEyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWdyYXktNTAwIGJnLW9wYWNpdHktMjUgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAge0NvbXBhbnlOYW1lWzBdLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtY29udGFpbmVyLWluZm8gbWwtM1wiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZFwiPntDb21wYW55TmFtZX08L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUHJvamVjdHNUYWJDb250YWluZXIiLCJDb21wYW55TmFtZSIsInByb2plY3RJZCIsInJvdXRlciIsImNvbG9yIiwic2V0Q29sb3IiLCJxdWVyeSIsInByb2plY3ROYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0b1VwcGVyQ2FzZSIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sub-panel/ProjectsTabs/ProjectTabsContainer.js\n"));

/***/ })

});