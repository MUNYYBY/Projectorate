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

/***/ "./layout/UserLayout.js":
/*!******************************!*\
  !*** ./layout/UserLayout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Config_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Config/User */ \"./Config/User.js\");\n/* harmony import */ var _components_Loading_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loading/loading */ \"./components/Loading/loading.js\");\n/* harmony import */ var _components_HorizontalLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/HorizontalLayout */ \"./layout/components/HorizontalLayout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction UserLayout(param) {\n    var children = param.children;\n    var _this = this;\n    _s();\n    //** States Initialization */\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1), layoutType = ref[0], setLayoutType = ref[1];\n    //** Router Initializtion  */\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var Layout = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HorizontalLayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\layout\\\\UserLayout.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (router.asPath) {\n            var i = router.asPath.includes(\"app/u\");\n            if (i > -1) {\n                setLayoutType(i);\n            } else {\n                setLayoutType(-1);\n            }\n        }\n    }, [\n        router.asPath\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            layoutType > -1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {}, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\layout\\\\UserLayout.js\",\n                lineNumber: 32,\n                columnNumber: 31\n            }, this) : children,\n            \" \"\n        ]\n    }, void 0, true);\n}\n_s(UserLayout, \"PzvJhhGLHEsuBOmsUOxFRa+N1OY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = UserLayout;\nvar _c;\n$RefreshReg$(_c, \"UserLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvVXNlckxheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW1EO0FBQ1g7QUFDRDtBQUNhO0FBQ1M7QUFFOUMsU0FBU08sVUFBVSxDQUFDLEtBQVksRUFBRTtRQUFkLFFBQVUsR0FBVixLQUFZLENBQVZDLFFBQVE7OztJQUMzQyw2QkFBNkI7SUFDN0IsSUFBb0NOLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUF6Q08sVUFBVSxHQUFtQlAsR0FBWSxHQUEvQixFQUFFUSxhQUFhLEdBQUlSLEdBQVksR0FBaEI7SUFFaEMsNkJBQTZCO0lBQzdCLElBQU1TLE1BQU0sR0FBR1Isc0RBQVMsRUFBRTtJQUUxQixJQUFNUyxNQUFNLEdBQUcsV0FBTTtRQUNuQixxQkFDRTtzQkFDRSw0RUFBQ04sb0VBQWdCOzBCQUFFRSxRQUFROzs7OztxQkFBb0I7eUJBQzlDLENBQ0g7SUFDSixDQUFDO0lBRURQLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlVLE1BQU0sQ0FBQ0UsTUFBTSxFQUFFO1lBQ2pCLElBQU1DLENBQUMsR0FBR0gsTUFBTSxDQUFDRSxNQUFNLENBQUNFLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDekMsSUFBSUQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNWSixhQUFhLENBQUNJLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE9BQU87Z0JBQ0xKLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQyxFQUFFO1FBQUNDLE1BQU0sQ0FBQ0UsTUFBTTtLQUFDLENBQUMsQ0FBQztJQUNwQixxQkFBTzs7WUFBR0osVUFBVSxHQUFHLENBQUMsQ0FBQyxpQkFBRyw4REFBQ0csTUFBTTs7OztvQkFBRyxHQUFHSixRQUFRO1lBQUMsR0FBQzs7b0JBQUcsQ0FBQztBQUN6RCxDQUFDO0dBMUJ1QkQsVUFBVTs7UUFLakJKLGtEQUFTOzs7QUFMRkksS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9sYXlvdXQvVXNlckxheW91dC5qcz9iMTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBVc2VycyB9IGZyb20gXCIuLi9Db25maWcvVXNlclwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nL2xvYWRpbmdcIjtcclxuaW1wb3J0IEhvcml6b250YWxMYXlvdXQgZnJvbSBcIi4vY29tcG9uZW50cy9Ib3Jpem9udGFsTGF5b3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIC8vKiogU3RhdGVzIEluaXRpYWxpemF0aW9uICovXHJcbiAgY29uc3QgW2xheW91dFR5cGUsIHNldExheW91dFR5cGVdID0gdXNlU3RhdGUoLTEpO1xyXG5cclxuICAvLyoqIFJvdXRlciBJbml0aWFsaXp0aW9uICAqL1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBMYXlvdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIb3Jpem9udGFsTGF5b3V0PntjaGlsZHJlbn08L0hvcml6b250YWxMYXlvdXQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5hc1BhdGgpIHtcclxuICAgICAgY29uc3QgaSA9IHJvdXRlci5hc1BhdGguaW5jbHVkZXMoXCJhcHAvdVwiKTtcclxuICAgICAgaWYgKGkgPiAtMSkge1xyXG4gICAgICAgIHNldExheW91dFR5cGUoaSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TGF5b3V0VHlwZSgtMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcm91dGVyLmFzUGF0aF0pO1xyXG4gIHJldHVybiA8PntsYXlvdXRUeXBlID4gLTEgPyA8TGF5b3V0IC8+IDogY2hpbGRyZW59IDwvPjtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlVzZXJzIiwiTG9hZGluZyIsIkhvcml6b250YWxMYXlvdXQiLCJVc2VyTGF5b3V0IiwiY2hpbGRyZW4iLCJsYXlvdXRUeXBlIiwic2V0TGF5b3V0VHlwZSIsInJvdXRlciIsIkxheW91dCIsImFzUGF0aCIsImkiLCJpbmNsdWRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/UserLayout.js\n"));

/***/ })

});