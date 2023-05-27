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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n\n\n\n\n\n\n\nvar DonutChart = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(DonutChart, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(DonutChart);\n    function DonutChart(props) {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, DonutChart);\n        var _this;\n        _this = _super.call(this, props);\n        console.log(props.Tickets);\n        _this.state = {\n            options: {\n                chart: {\n                    type: \"donut\"\n                },\n                plotOptions: {\n                    pie: {\n                        expandOnClick: false\n                    }\n                },\n                stroke: {\n                    show: false,\n                    width: 0\n                },\n                datasets: [\n                    {\n                        borderColor: [\n                            \"#ffff\"\n                        ]\n                    }, \n                ],\n                responsive: [\n                    {\n                        breakpoint: 480,\n                        options: {\n                            chart: {\n                                width: 200\n                            },\n                            legend: {\n                                position: \"bottom\"\n                            }\n                        }\n                    }, \n                ]\n            },\n            series: [\n                props.Tickets.all,\n                props.Tickets.todo,\n                props.Tickets.inProgress,\n                props.Tickets.done,\n                props.Tickets.resolved,\n                props.Tickets.tested,\n                props.Tickets.hold, \n            ],\n            labels: [\n                \"All\",\n                \"Todo\",\n                \"In-progress\",\n                \"Done\",\n                \"Resolved\",\n                \"Tested\",\n                \"Hold\", \n            ]\n        };\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(DonutChart, [\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"donut\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        options: this.state.options,\n                        series: this.state.series,\n                        type: \"donut\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\PieChart\\\\PieChart.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\PieChart\\\\PieChart.js\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return DonutChart;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (DonutChart);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BpZUNoYXJ0L1BpZUNoYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBeUM7QUFDSjtBQUVyQyxjQUFnQixpQkF3RWY7OzhFQXhFS0csVUFBVTsrRkFBVkEsVUFBVTthQUFWQSxVQUFVLENBQ0ZDLEtBQUs7Z0dBRGJELFVBQVU7O2tDQUVOQyxLQUFLLEVBQUU7UUFFYkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQ0csT0FBTyxDQUFDLENBQUM7UUFDM0IsTUFBS0MsS0FBSyxHQUFHO1lBQ1hDLE9BQU8sRUFBRTtnQkFDUEMsS0FBSyxFQUFFO29CQUNMQyxJQUFJLEVBQUUsT0FBTztpQkFDZDtnQkFDREMsV0FBVyxFQUFFO29CQUNYQyxHQUFHLEVBQUU7d0JBQ0hDLGFBQWEsRUFBRSxLQUFLO3FCQUNyQjtpQkFDRjtnQkFDREMsTUFBTSxFQUFFO29CQUNOQyxJQUFJLEVBQUUsS0FBSztvQkFDWEMsS0FBSyxFQUFFLENBQUM7aUJBQ1Q7Z0JBQ0RDLFFBQVEsRUFBRTtvQkFDUjt3QkFDRUMsV0FBVyxFQUFFOzRCQUFDLE9BQU87eUJBQUM7cUJBQ3ZCO2lCQUNGO2dCQUNEQyxVQUFVLEVBQUU7b0JBQ1Y7d0JBQ0VDLFVBQVUsRUFBRSxHQUFHO3dCQUNmWixPQUFPLEVBQUU7NEJBQ1BDLEtBQUssRUFBRTtnQ0FDTE8sS0FBSyxFQUFFLEdBQUc7NkJBQ1g7NEJBQ0RLLE1BQU0sRUFBRTtnQ0FDTkMsUUFBUSxFQUFFLFFBQVE7NkJBQ25CO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDREMsTUFBTSxFQUFFO2dCQUNOcEIsS0FBSyxDQUFDRyxPQUFPLENBQUNrQixHQUFHO2dCQUNqQnJCLEtBQUssQ0FBQ0csT0FBTyxDQUFDbUIsSUFBSTtnQkFDbEJ0QixLQUFLLENBQUNHLE9BQU8sQ0FBQ29CLFVBQVU7Z0JBQ3hCdkIsS0FBSyxDQUFDRyxPQUFPLENBQUNxQixJQUFJO2dCQUNsQnhCLEtBQUssQ0FBQ0csT0FBTyxDQUFDc0IsUUFBUTtnQkFDdEJ6QixLQUFLLENBQUNHLE9BQU8sQ0FBQ3VCLE1BQU07Z0JBQ3BCMUIsS0FBSyxDQUFDRyxPQUFPLENBQUN3QixJQUFJO2FBQ25CO1lBQ0RDLE1BQU0sRUFBRTtnQkFDTixLQUFLO2dCQUNMLE1BQU07Z0JBQ04sYUFBYTtnQkFDYixNQUFNO2dCQUNOLFVBQVU7Z0JBQ1YsUUFBUTtnQkFDUixNQUFNO2FBQ1A7U0FDRixDQUFDOzs7a0ZBeERBN0IsVUFBVTs7WUEyRGQ4QixHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxxQkFDRSw4REFBQ0MsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLE9BQU87OEJBQ3BCLDRFQUFDakMsd0RBQUs7d0JBQ0pPLE9BQU8sRUFBRSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsT0FBTzt3QkFDM0JlLE1BQU0sRUFBRSxJQUFJLENBQUNoQixLQUFLLENBQUNnQixNQUFNO3dCQUN6QmIsSUFBSSxFQUFDLE9BQU87Ozs7OzRCQUNaOzs7Ozt3QkFDRSxDQUNOO1lBQ0osQ0FBQzs7O1dBckVHUixVQUFVO0NBc0VmLENBdEV3QkYsNENBQVMsQ0FzRWpDO0FBRUQsK0RBQWVFLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BpZUNoYXJ0L1BpZUNoYXJ0LmpzPzkwMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcclxuXHJcbmNsYXNzIERvbnV0Q2hhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvcHMuVGlja2V0cyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgIHR5cGU6IFwiZG9udXRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgICBwaWU6IHtcclxuICAgICAgICAgICAgZXhwYW5kT25DbGljazogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFtcIiNmZmZmXCJdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlcmllczogW1xyXG4gICAgICAgIHByb3BzLlRpY2tldHMuYWxsLFxyXG4gICAgICAgIHByb3BzLlRpY2tldHMudG9kbyxcclxuICAgICAgICBwcm9wcy5UaWNrZXRzLmluUHJvZ3Jlc3MsXHJcbiAgICAgICAgcHJvcHMuVGlja2V0cy5kb25lLFxyXG4gICAgICAgIHByb3BzLlRpY2tldHMucmVzb2x2ZWQsXHJcbiAgICAgICAgcHJvcHMuVGlja2V0cy50ZXN0ZWQsXHJcbiAgICAgICAgcHJvcHMuVGlja2V0cy5ob2xkLFxyXG4gICAgICBdLFxyXG4gICAgICBsYWJlbHM6IFtcclxuICAgICAgICBcIkFsbFwiLFxyXG4gICAgICAgIFwiVG9kb1wiLFxyXG4gICAgICAgIFwiSW4tcHJvZ3Jlc3NcIixcclxuICAgICAgICBcIkRvbmVcIixcclxuICAgICAgICBcIlJlc29sdmVkXCIsXHJcbiAgICAgICAgXCJUZXN0ZWRcIixcclxuICAgICAgICBcIkhvbGRcIixcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbnV0XCI+XHJcbiAgICAgICAgPENoYXJ0XHJcbiAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLm9wdGlvbnN9XHJcbiAgICAgICAgICBzZXJpZXM9e3RoaXMuc3RhdGUuc2VyaWVzfVxyXG4gICAgICAgICAgdHlwZT1cImRvbnV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb251dENoYXJ0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDaGFydCIsIkRvbnV0Q2hhcnQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJUaWNrZXRzIiwic3RhdGUiLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwicGxvdE9wdGlvbnMiLCJwaWUiLCJleHBhbmRPbkNsaWNrIiwic3Ryb2tlIiwic2hvdyIsIndpZHRoIiwiZGF0YXNldHMiLCJib3JkZXJDb2xvciIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwibGVnZW5kIiwicG9zaXRpb24iLCJzZXJpZXMiLCJhbGwiLCJ0b2RvIiwiaW5Qcm9ncmVzcyIsImRvbmUiLCJyZXNvbHZlZCIsInRlc3RlZCIsImhvbGQiLCJsYWJlbHMiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PieChart/PieChart.js\n"));

/***/ })

});