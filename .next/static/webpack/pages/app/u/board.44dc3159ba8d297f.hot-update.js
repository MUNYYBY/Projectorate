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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardC; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction BoardC(param) {\n    var data = param.data;\n    var StatusColor = function StatusColor() {\n        return item.title == \"Todo\" ? \"green\" : item.title == \"In-progress\" ? \"orange\" : item.title == \"Done\" ? \"purple\" : item.title == \"Resolved\" ? \"blue\" : item.title == \"Tested but not resolved\" ? \"red\" : \"white\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-1 !h-full rounded-md !w-72 flex flex-shrink-0 bg-gray-900 p-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"flex flex-col w-full p-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-4 w-4 mr-2 bg-green-600 rounded-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-base font-semibold opacity-80\",\n                            children: data.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm mt-1 opacity-50\",\n                    children: data.description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\board\\\\board.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = BoardC;\nvar _c;\n$RefreshReg$(_c, \"BoardC\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFFWCxTQUFTQyxNQUFNLENBQUMsS0FBUSxFQUFFO1FBQVYsSUFBTSxHQUFOLEtBQVEsQ0FBTkMsSUFBSTtRQUMxQkMsV0FBVyxHQUFwQixTQUFTQSxXQUFXLEdBQUc7UUFDckIsT0FBT0MsSUFBSSxDQUFDQyxLQUFLLElBQUksTUFBTSxHQUN2QixPQUFPLEdBQ1BELElBQUksQ0FBQ0MsS0FBSyxJQUFJLGFBQWEsR0FDM0IsUUFBUSxHQUNSRCxJQUFJLENBQUNDLEtBQUssSUFBSSxNQUFNLEdBQ3BCLFFBQVEsR0FDUkQsSUFBSSxDQUFDQyxLQUFLLElBQUksVUFBVSxHQUN4QixNQUFNLEdBQ05ELElBQUksQ0FBQ0MsS0FBSyxJQUFJLHlCQUF5QixHQUN2QyxLQUFLLEdBQ0wsT0FBTyxDQUFDO0lBQ2QsQ0FBQztJQUNELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxrRUFBa0U7a0JBQy9FLDRFQUFDQyxRQUFNO1lBQUNELFNBQVMsRUFBQywwQkFBMEI7OzhCQUMxQyw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLG1CQUFtQjs7c0NBQ2hDLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsd0NBQXdDOzs7OztnQ0FBTztzQ0FDOUQsOERBQUNFLElBQUU7NEJBQUNGLFNBQVMsRUFBQyxvQ0FBb0M7c0NBQUVMLElBQUksQ0FBQ0csS0FBSzs7Ozs7Z0NBQU07Ozs7Ozt3QkFDaEU7OEJBQ04sOERBQUNLLEdBQUM7b0JBQUNILFNBQVMsRUFBQyx5QkFBeUI7OEJBQUVMLElBQUksQ0FBQ1MsV0FBVzs7Ozs7d0JBQUs7Ozs7OztnQkFDdEQ7Ozs7O1lBQ0wsQ0FDTjtBQUNKLENBQUM7QUF6QnVCVixLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQuanM/MDQxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZEMoeyBkYXRhIH0pIHtcclxuICBmdW5jdGlvbiBTdGF0dXNDb2xvcigpIHtcclxuICAgIHJldHVybiBpdGVtLnRpdGxlID09IFwiVG9kb1wiXHJcbiAgICAgID8gXCJncmVlblwiXHJcbiAgICAgIDogaXRlbS50aXRsZSA9PSBcIkluLXByb2dyZXNzXCJcclxuICAgICAgPyBcIm9yYW5nZVwiXHJcbiAgICAgIDogaXRlbS50aXRsZSA9PSBcIkRvbmVcIlxyXG4gICAgICA/IFwicHVycGxlXCJcclxuICAgICAgOiBpdGVtLnRpdGxlID09IFwiUmVzb2x2ZWRcIlxyXG4gICAgICA/IFwiYmx1ZVwiXHJcbiAgICAgIDogaXRlbS50aXRsZSA9PSBcIlRlc3RlZCBidXQgbm90IHJlc29sdmVkXCJcclxuICAgICAgPyBcInJlZFwiXHJcbiAgICAgIDogXCJ3aGl0ZVwiO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC0xICFoLWZ1bGwgcm91bmRlZC1tZCAhdy03MiBmbGV4IGZsZXgtc2hyaW5rLTAgYmctZ3JheS05MDAgcC0yXCI+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgcC0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgdy00IG1yLTIgYmctZ3JlZW4tNjAwIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIG9wYWNpdHktODBcIj57ZGF0YS50aXRsZX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXQtMSBvcGFjaXR5LTUwXCI+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm9hcmRDIiwiZGF0YSIsIlN0YXR1c0NvbG9yIiwiaXRlbSIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaDEiLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/board/board.js\n"));

/***/ })

});