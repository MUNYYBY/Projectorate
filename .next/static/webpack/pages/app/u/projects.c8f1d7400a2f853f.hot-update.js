"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/app/u/projects",{

/***/ "./components/PieChart/PieChart.js":
/*!*****************************************!*\
  !*** ./components/PieChart/PieChart.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n\n\n\n\n\n\n\nvar DonutChart = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(DonutChart, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(DonutChart);\n    function DonutChart(props) {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, DonutChart);\n        var _this;\n        _this = _super.call(this, props);\n        console.log(props.Tickets);\n        _this.state = {\n            series: [\n                props.Tickets.all,\n                props.Tickets.todo,\n                props.Tickets.inProgress,\n                props.Tickets.done,\n                props.Tickets.resolved,\n                props.Tickets.tested,\n                props.Tickets.hold, \n            ],\n            options: {\n                labels: [\n                    \"All\",\n                    \"Todo\",\n                    \"In-progress\",\n                    \"Done\",\n                    \"Resolved\",\n                    \"Tested\",\n                    \"Hold\", \n                ],\n                chart: {\n                    type: \"donut\",\n                    foreColor: \"#d4d7dc\"\n                },\n                plotOptions: {\n                    pie: {\n                        expandOnClick: false,\n                        donut: {\n                            labels: {\n                                show: true,\n                                total: {\n                                    show: false,\n                                    label: \"Total\",\n                                    fontSize: \"22px\",\n                                    fontFamily: \"Helvetica, Arial, sans-serif\",\n                                    fontWeight: 600,\n                                    color: \"#ffff\"\n                                }\n                            }\n                        }\n                    }\n                },\n                stroke: {\n                    show: false,\n                    width: 0\n                },\n                datasets: [\n                    {\n                        borderColor: [\n                            \"#ffff\"\n                        ]\n                    }, \n                ],\n                responsive: [\n                    {\n                        breakpoint: 480,\n                        options: {\n                            chart: {\n                                width: 250\n                            },\n                            legend: {\n                                position: \"bottom\"\n                            }\n                        }\n                    }, \n                ]\n            }\n        };\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(DonutChart, [\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"donut bg-gray-800 p-2 rounded-lg flex flex-col justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-400 font-semibold text-sm\",\n                            children: \"Tickets\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\PieChart\\\\PieChart.js\",\n                            lineNumber: 80,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            options: this.state.options,\n                            series: this.state.series,\n                            labels: this.state.labels,\n                            type: \"donut\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\PieChart\\\\PieChart.js\",\n                            lineNumber: 81,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\PieChart\\\\PieChart.js\",\n                    lineNumber: 79,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return DonutChart;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (DonutChart);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BpZUNoYXJ0L1BpZUNoYXJ0LmpzPzkwMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcclxuXHJcbmNsYXNzIERvbnV0Q2hhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvcHMuVGlja2V0cyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzZXJpZXM6IFtcclxuICAgICAgICBwcm9wcy5UaWNrZXRzLmFsbCxcclxuICAgICAgICBwcm9wcy5UaWNrZXRzLnRvZG8sXHJcbiAgICAgICAgcHJvcHMuVGlja2V0cy5pblByb2dyZXNzLFxyXG4gICAgICAgIHByb3BzLlRpY2tldHMuZG9uZSxcclxuICAgICAgICBwcm9wcy5UaWNrZXRzLnJlc29sdmVkLFxyXG4gICAgICAgIHByb3BzLlRpY2tldHMudGVzdGVkLFxyXG4gICAgICAgIHByb3BzLlRpY2tldHMuaG9sZCxcclxuICAgICAgXSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGxhYmVsczogW1xyXG4gICAgICAgICAgXCJBbGxcIixcclxuICAgICAgICAgIFwiVG9kb1wiLFxyXG4gICAgICAgICAgXCJJbi1wcm9ncmVzc1wiLFxyXG4gICAgICAgICAgXCJEb25lXCIsXHJcbiAgICAgICAgICBcIlJlc29sdmVkXCIsXHJcbiAgICAgICAgICBcIlRlc3RlZFwiLFxyXG4gICAgICAgICAgXCJIb2xkXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgdHlwZTogXCJkb251dFwiLFxyXG4gICAgICAgICAgZm9yZUNvbG9yOiBcIiNkNGQ3ZGNcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgICBwaWU6IHtcclxuICAgICAgICAgICAgZXhwYW5kT25DbGljazogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvbnV0OiB7XHJcbiAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IHtcclxuICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRvdGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIycHhcIixcclxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogW1wiI2ZmZmZcIl0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbnV0IGJnLWdyYXktODAwIHAtMiByb3VuZGVkLWxnIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBmb250LXNlbWlib2xkIHRleHQtc21cIj5UaWNrZXRzPC9wPlxyXG4gICAgICAgIDxDaGFydFxyXG4gICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5vcHRpb25zfVxyXG4gICAgICAgICAgc2VyaWVzPXt0aGlzLnN0YXRlLnNlcmllc31cclxuICAgICAgICAgIGxhYmVscz17dGhpcy5zdGF0ZS5sYWJlbHN9XHJcbiAgICAgICAgICB0eXBlPVwiZG9udXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvbnV0Q2hhcnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNoYXJ0IiwiRG9udXRDaGFydCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIlRpY2tldHMiLCJzdGF0ZSIsInNlcmllcyIsImFsbCIsInRvZG8iLCJpblByb2dyZXNzIiwiZG9uZSIsInJlc29sdmVkIiwidGVzdGVkIiwiaG9sZCIsIm9wdGlvbnMiLCJsYWJlbHMiLCJjaGFydCIsInR5cGUiLCJmb3JlQ29sb3IiLCJwbG90T3B0aW9ucyIsInBpZSIsImV4cGFuZE9uQ2xpY2siLCJkb251dCIsInNob3ciLCJ0b3RhbCIsImxhYmVsIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImNvbG9yIiwic3Ryb2tlIiwid2lkdGgiLCJkYXRhc2V0cyIsImJvcmRlckNvbG9yIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJsZWdlbmQiLCJwb3NpdGlvbiIsInJlbmRlciIsImRpdiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PieChart/PieChart.js\n"));

/***/ })

});