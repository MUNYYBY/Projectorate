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

/***/ "./components/PieChart/Options.js":
/*!****************************************!*\
  !*** ./components/PieChart/Options.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"options\": function() { return /* binding */ options; }\n/* harmony export */ });\nvar options = {\n    chart: {\n        type: \"donut\",\n        foreColor: \"#d4d7dc\"\n    },\n    plotOptions: {\n        pie: {\n            expandOnClick: false,\n            donut: {\n                labels: {\n                    show: true,\n                    value: {\n                        show: true,\n                        fontSize: \"16px\",\n                        fontFamily: \"Helvetica, Arial, sans-serif\",\n                        fontWeight: 400,\n                        offsetY: 1,\n                        formatter: function formatter(val) {\n                            return val;\n                        }\n                    },\n                    total: {\n                        show: true,\n                        label: \"Total\",\n                        fontSize: \"14px\",\n                        formatter: function formatter(w) {\n                            return w.globals.seriesTotals.reduce(function(a, b) {\n                                return a + b;\n                            }, 0);\n                        }\n                    }\n                }\n            }\n        }\n    },\n    stroke: {\n        show: false,\n        width: 0\n    },\n    datasets: [\n        {\n            borderColor: [\n                \"#ffff\"\n            ]\n        }, \n    ],\n    responsive: [\n        {\n            breakpoint: 480,\n            options: {\n                chart: {\n                    width: 250\n                },\n                legend: {\n                    position: \"bottom\"\n                }\n            }\n        }, \n    ]\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BpZUNoYXJ0L09wdGlvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLElBQU1BLE9BQU8sR0FBRztJQUNyQkMsS0FBSyxFQUFFO1FBQ0xDLElBQUksRUFBRSxPQUFPO1FBQ2JDLFNBQVMsRUFBRSxTQUFTO0tBQ3JCO0lBQ0RDLFdBQVcsRUFBRTtRQUNYQyxHQUFHLEVBQUU7WUFDSEMsYUFBYSxFQUFFLEtBQUs7WUFDcEJDLEtBQUssRUFBRTtnQkFDTEMsTUFBTSxFQUFFO29CQUNOQyxJQUFJLEVBQUUsSUFBSTtvQkFDVkMsS0FBSyxFQUFFO3dCQUNMRCxJQUFJLEVBQUUsSUFBSTt3QkFDVkUsUUFBUSxFQUFFLE1BQU07d0JBQ2hCQyxVQUFVLEVBQUUsOEJBQThCO3dCQUMxQ0MsVUFBVSxFQUFFLEdBQUc7d0JBQ2ZDLE9BQU8sRUFBRSxDQUFDO3dCQUNWQyxTQUFTLEVBQUUsU0FBWEEsU0FBUyxDQUFZQyxHQUFHLEVBQUU7NEJBQ3hCLE9BQU9BLEdBQUcsQ0FBQzt3QkFDYixDQUFDO3FCQUNGO29CQUNEQyxLQUFLLEVBQUU7d0JBQ0xSLElBQUksRUFBRSxJQUFJO3dCQUNWUyxLQUFLLEVBQUUsT0FBTzt3QkFDZFAsUUFBUSxFQUFFLE1BQU07d0JBQ2hCSSxTQUFTLEVBQUUsU0FBWEEsU0FBUyxDQUFZSSxDQUFDLEVBQUU7NEJBQ3RCLE9BQU9BLENBQUMsQ0FBQ0MsT0FBTyxDQUFDQyxZQUFZLENBQUNDLE1BQU0sQ0FBQyxTQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBSztnQ0FDN0MsT0FBT0QsQ0FBQyxHQUFHQyxDQUFDLENBQUM7NEJBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNSLENBQUM7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7SUFDREMsTUFBTSxFQUFFO1FBQ05oQixJQUFJLEVBQUUsS0FBSztRQUNYaUIsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUNEQyxRQUFRLEVBQUU7UUFDUjtZQUNFQyxXQUFXLEVBQUU7Z0JBQUMsT0FBTzthQUFDO1NBQ3ZCO0tBQ0Y7SUFDREMsVUFBVSxFQUFFO1FBQ1Y7WUFDRUMsVUFBVSxFQUFFLEdBQUc7WUFDZjlCLE9BQU8sRUFBRTtnQkFDUEMsS0FBSyxFQUFFO29CQUNMeUIsS0FBSyxFQUFFLEdBQUc7aUJBQ1g7Z0JBQ0RLLE1BQU0sRUFBRTtvQkFDTkMsUUFBUSxFQUFFLFFBQVE7aUJBQ25CO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BpZUNoYXJ0L09wdGlvbnMuanM/NTdlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgb3B0aW9ucyA9IHtcclxuICBjaGFydDoge1xyXG4gICAgdHlwZTogXCJkb251dFwiLFxyXG4gICAgZm9yZUNvbG9yOiBcIiNkNGQ3ZGNcIixcclxuICB9LFxyXG4gIHBsb3RPcHRpb25zOiB7XHJcbiAgICBwaWU6IHtcclxuICAgICAgZXhwYW5kT25DbGljazogZmFsc2UsXHJcbiAgICAgIGRvbnV0OiB7XHJcbiAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAxLFxyXG4gICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRvdGFsOiB7XHJcbiAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlRvdGFsXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodykge1xyXG4gICAgICAgICAgICAgIHJldHVybiB3Lmdsb2JhbHMuc2VyaWVzVG90YWxzLnJlZHVjZSgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgKyBiO1xyXG4gICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHN0cm9rZToge1xyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgICB3aWR0aDogMCxcclxuICB9LFxyXG4gIGRhdGFzZXRzOiBbXHJcbiAgICB7XHJcbiAgICAgIGJvcmRlckNvbG9yOiBbXCIjZmZmZlwiXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICB3aWR0aDogMjUwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b21cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG4iXSwibmFtZXMiOlsib3B0aW9ucyIsImNoYXJ0IiwidHlwZSIsImZvcmVDb2xvciIsInBsb3RPcHRpb25zIiwicGllIiwiZXhwYW5kT25DbGljayIsImRvbnV0IiwibGFiZWxzIiwic2hvdyIsInZhbHVlIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsIm9mZnNldFkiLCJmb3JtYXR0ZXIiLCJ2YWwiLCJ0b3RhbCIsImxhYmVsIiwidyIsImdsb2JhbHMiLCJzZXJpZXNUb3RhbHMiLCJyZWR1Y2UiLCJhIiwiYiIsInN0cm9rZSIsIndpZHRoIiwiZGF0YXNldHMiLCJib3JkZXJDb2xvciIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwibGVnZW5kIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PieChart/Options.js\n"));

/***/ })

});