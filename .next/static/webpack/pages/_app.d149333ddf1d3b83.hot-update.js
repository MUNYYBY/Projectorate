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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectsTabContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ProjectsTabContainer(param) {\n    var _CompanyName = param.CompanyName, CompanyName = _CompanyName === void 0 ? \"Company Name\" : _CompanyName, projectId = param.projectId;\n    _s();\n    //** Router Initialization */\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"bg-gray-900 bg-opacity-60\"), color = ref[0], setColor = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (router.query.projectId && router.query.projectName) {\n            if (projectId == router.query.projectId && router.query.projectName == CompanyName) {\n                setColor(\"bg-gray-900\");\n            } else {\n                setColor(\"bg-gray-900 bg-opacity-60\");\n            }\n        }\n    }, [\n        router.query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-16 \".concat(color, \" px-4 mt-2 flex flex-col justify-center cursor-pointer\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"Project-Image h-12 w-12 flex justify-center items-center bg-gray-500 bg-opacity-25 rounded-lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-semibold\",\n                        children: CompanyName[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Sub-panel\\\\ProjectsTabs\\\\ProjectTabsContainer.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Sub-panel\\\\ProjectsTabs\\\\ProjectTabsContainer.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"projects-container-info ml-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"\",\n                        children: CompanyName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Sub-panel\\\\ProjectsTabs\\\\ProjectTabsContainer.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Sub-panel\\\\ProjectsTabs\\\\ProjectTabsContainer.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Sub-panel\\\\ProjectsTabs\\\\ProjectTabsContainer.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Sub-panel\\\\ProjectsTabs\\\\ProjectTabsContainer.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectsTabContainer, \"lpMHRk7TAmllHDizKD61GADNJzY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProjectsTabContainer;\nvar _c;\n$RefreshReg$(_c, \"ProjectsTabContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1Yi1wYW5lbC9Qcm9qZWN0c1RhYnMvUHJvamVjdFRhYnNDb250YWluZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNJO0FBRTdCLFNBQVNHLG9CQUFvQixDQUFDLEtBRzVDLEVBQUU7dUJBSDBDLEtBRzVDLENBRkNDLFdBQVcsRUFBWEEsV0FBVyw2QkFBRyxjQUFjLGlCQUM1QkMsU0FBUyxHQUZrQyxLQUc1QyxDQURDQSxTQUFTOztJQUVULDZCQUE2QjtJQUM3QixJQUFNQyxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUIsSUFBMEJDLEdBQXFDLEdBQXJDQSwrQ0FBUSxDQUFDLDJCQUEyQixDQUFDLEVBQXhETSxLQUFLLEdBQWNOLEdBQXFDLEdBQW5ELEVBQUVPLFFBQVEsR0FBSVAsR0FBcUMsR0FBekM7SUFFdEJDLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlJLE1BQU0sQ0FBQ0csS0FBSyxDQUFDSixTQUFTLElBQUlDLE1BQU0sQ0FBQ0csS0FBSyxDQUFDQyxXQUFXLEVBQUU7WUFDdEQsSUFDRUwsU0FBUyxJQUFJQyxNQUFNLENBQUNHLEtBQUssQ0FBQ0osU0FBUyxJQUNuQ0MsTUFBTSxDQUFDRyxLQUFLLENBQUNDLFdBQVcsSUFBSU4sV0FBVyxFQUN2QztnQkFDQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFCLE9BQU87Z0JBQ0xBLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQyxFQUFFO1FBQUNGLE1BQU0sQ0FBQ0csS0FBSztLQUFDLENBQUMsQ0FBQztJQUNuQixxQkFDRSw4REFBQ0UsS0FBRztRQUNGQyxTQUFTLEVBQUUsY0FBYSxDQUFRLE1BQXNELENBQTVETCxLQUFLLEVBQUMsd0RBQXNELENBQUM7a0JBRXZGLDRFQUFDSSxLQUFHO1lBQUNDLFNBQVMsRUFBQyw0QkFBNEI7OzhCQUN6Qyw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLCtGQUErRjs4QkFDNUcsNEVBQUNDLElBQUU7d0JBQUNELFNBQVMsRUFBQyx3QkFBd0I7a0NBQUVSLFdBQVcsQ0FBQyxDQUFDLENBQUM7Ozs7OzRCQUFNOzs7Ozt3QkFDeEQ7OEJBQ04sOERBQUNPLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyw4QkFBOEI7OEJBQzNDLDRFQUFDRSxJQUFFO3dCQUFDRixTQUFTLEVBQUMsRUFBRTtrQ0FBRVIsV0FBVzs7Ozs7NEJBQU07Ozs7O3dCQUMvQjs7Ozs7O2dCQUNGOzs7OztZQUNGLENBQ047QUFDSixDQUFDO0dBbEN1QkQsb0JBQW9COztRQUszQkgsa0RBQVM7OztBQUxGRyxLQUFBQSxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdWItcGFuZWwvUHJvamVjdHNUYWJzL1Byb2plY3RUYWJzQ29udGFpbmVyLmpzP2MxYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzVGFiQ29udGFpbmVyKHtcclxuICBDb21wYW55TmFtZSA9IFwiQ29tcGFueSBOYW1lXCIsXHJcbiAgcHJvamVjdElkLFxyXG59KSB7XHJcbiAgLy8qKiBSb3V0ZXIgSW5pdGlhbGl6YXRpb24gKi9cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiYmctZ3JheS05MDAgYmctb3BhY2l0eS02MFwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIucXVlcnkucHJvamVjdElkICYmIHJvdXRlci5xdWVyeS5wcm9qZWN0TmFtZSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgcHJvamVjdElkID09IHJvdXRlci5xdWVyeS5wcm9qZWN0SWQgJiZcclxuICAgICAgICByb3V0ZXIucXVlcnkucHJvamVjdE5hbWUgPT0gQ29tcGFueU5hbWVcclxuICAgICAgKSB7XHJcbiAgICAgICAgc2V0Q29sb3IoXCJiZy1ncmF5LTkwMFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRDb2xvcihcImJnLWdyYXktOTAwIGJnLW9wYWNpdHktNjBcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtMTYgJHtjb2xvcn0gcHgtNCBtdC0yIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXJgfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9qZWN0LUltYWdlIGgtMTIgdy0xMiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1ncmF5LTUwMCBiZy1vcGFjaXR5LTI1IHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkXCI+e0NvbXBhbnlOYW1lWzBdfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1jb250YWluZXItaW5mbyBtbC0zXCI+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiXCI+e0NvbXBhbnlOYW1lfTwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9qZWN0c1RhYkNvbnRhaW5lciIsIkNvbXBhbnlOYW1lIiwicHJvamVjdElkIiwicm91dGVyIiwiY29sb3IiLCJzZXRDb2xvciIsInF1ZXJ5IiwicHJvamVjdE5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sub-panel/ProjectsTabs/ProjectTabsContainer.js\n"));

/***/ })

});