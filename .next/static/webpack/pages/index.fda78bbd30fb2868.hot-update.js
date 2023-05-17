"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/landing-page/components/ui/mobile-menu.js":
/*!**************************************************************!*\
  !*** ./components/landing-page/components/ui/mobile-menu.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MobileMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MobileMenu() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), mobileNavOpen = ref[0], setMobileNavOpen = ref[1];\n    var trigger = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var mobileNav = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // close the mobile menu on click outside\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var clickHandler = function(param) {\n            var target = param.target;\n            if (!mobileNav.current || !trigger.current) return;\n            if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;\n            setMobileNavOpen(false);\n        };\n        document.addEventListener(\"click\", clickHandler);\n        return function() {\n            return document.removeEventListener(\"click\", clickHandler);\n        };\n    });\n    // close the mobile menu if the esc key is pressed\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var keyHandler = function(param) {\n            var keyCode = param.keyCode;\n            if (!mobileNavOpen || keyCode !== 27) return;\n            setMobileNavOpen(false);\n        };\n        document.addEventListener(\"keydown\", keyHandler);\n        return function() {\n            return document.removeEventListener(\"keydown\", keyHandler);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex md:hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                ref: trigger,\n                className: \"hamburger \".concat(mobileNavOpen && \"active\"),\n                \"aria-controls\": \"mobile-nav\",\n                \"aria-expanded\": mobileNavOpen,\n                onClick: function() {\n                    return setMobileNavOpen(!mobileNavOpen);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"sr-only\",\n                        children: \"Menu\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\mobile-menu.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"w-6 h-6 fill-current text-gray-900\",\n                        viewBox: \"0 0 24 24\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                y: \"4\",\n                                width: \"24\",\n                                height: \"2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\mobile-menu.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                y: \"11\",\n                                width: \"24\",\n                                height: \"2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\mobile-menu.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                y: \"18\",\n                                width: \"24\",\n                                height: \"2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\mobile-menu.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\mobile-menu.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\mobile-menu.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: mobileNav,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {\n                    show: mobileNavOpen,\n                    as: \"nav\",\n                    id: \"mobile-nav\",\n                    className: \"absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white\",\n                    enter: \"transition ease-out duration-200 transform\",\n                    enterFrom: \"opacity-0 -translate-y-2\",\n                    enterTo: \"opacity-100 translate-y-0\",\n                    leave: \"transition ease-out duration-200\",\n                    leaveFrom: \"opacity-100\",\n                    leaveTo: \"opacity-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"px-5 py-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/auth\",\n                                className: \"flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center\",\n                                onClick: function() {\n                                    return setMobileNavOpen(false);\n                                },\n                                children: \"Sign in\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\mobile-menu.js\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\mobile-menu.js\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\mobile-menu.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\mobile-menu.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\mobile-menu.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\ui\\\\mobile-menu.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(MobileMenu, \"Gt//9KuO+4adQfmXy3wV1xQGZdM=\");\n_c = MobileMenu;\nvar _c;\n$RefreshReg$(_c, \"MobileMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xhbmRpbmctcGFnZS9jb21wb25lbnRzL3VpL21vYmlsZS1tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW9EO0FBQ0w7QUFDbEI7QUFFZCxTQUFTSyxVQUFVLEdBQUc7O0lBQ25DLElBQTBDTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQWxETSxhQUFhLEdBQXNCTixHQUFlLEdBQXJDLEVBQUVPLGdCQUFnQixHQUFJUCxHQUFlLEdBQW5CO0lBRXRDLElBQU1RLE9BQU8sR0FBR1AsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDNUIsSUFBTVEsU0FBUyxHQUFHUiw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUU5Qix5Q0FBeUM7SUFDekNDLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1RLFlBQVksR0FBRyxnQkFBZ0I7Z0JBQWJDLE1BQU0sU0FBTkEsTUFBTTtZQUM1QixJQUFJLENBQUNGLFNBQVMsQ0FBQ0csT0FBTyxJQUFJLENBQUNKLE9BQU8sQ0FBQ0ksT0FBTyxFQUFFLE9BQU87WUFDbkQsSUFDRSxDQUFDTixhQUFhLElBQ2RHLFNBQVMsQ0FBQ0csT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU0sQ0FBQyxJQUNsQ0gsT0FBTyxDQUFDSSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLEVBRWhDLE9BQU87WUFDVEosZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUNETyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUwsWUFBWSxDQUFDLENBQUM7UUFDakQsT0FBTzttQkFBTUksUUFBUSxDQUFDRSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUVOLFlBQVksQ0FBQztTQUFBLENBQUM7SUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFFSCxrREFBa0Q7SUFDbERSLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1lLFVBQVUsR0FBRyxnQkFBaUI7Z0JBQWRDLE9BQU8sU0FBUEEsT0FBTztZQUMzQixJQUFJLENBQUNaLGFBQWEsSUFBSVksT0FBTyxLQUFLLEVBQUUsRUFBRSxPQUFPO1lBQzdDWCxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0RPLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFFRSxVQUFVLENBQUMsQ0FBQztRQUNqRCxPQUFPO21CQUFNSCxRQUFRLENBQUNFLG1CQUFtQixDQUFDLFNBQVMsRUFBRUMsVUFBVSxDQUFDO1NBQUEsQ0FBQztJQUNuRSxDQUFDLENBQUMsQ0FBQztJQUVILHFCQUNFLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7OzBCQUU3Qiw4REFBQ0MsUUFBTTtnQkFDTEMsR0FBRyxFQUFFZCxPQUFPO2dCQUNaWSxTQUFTLEVBQUUsWUFBVyxDQUE0QixPQUExQmQsYUFBYSxJQUFJLFFBQVEsQ0FBRTtnQkFDbkRpQixlQUFhLEVBQUMsWUFBWTtnQkFDMUJDLGVBQWEsRUFBRWxCLGFBQWE7Z0JBQzVCbUIsT0FBTyxFQUFFOzJCQUFNbEIsZ0JBQWdCLENBQUMsQ0FBQ0QsYUFBYSxDQUFDO2lCQUFBOztrQ0FFL0MsOERBQUNvQixNQUFJO3dCQUFDTixTQUFTLEVBQUMsU0FBUztrQ0FBQyxNQUFJOzs7Ozs0QkFBTztrQ0FDckMsOERBQUNPLEtBQUc7d0JBQ0ZQLFNBQVMsRUFBQyxvQ0FBb0M7d0JBQzlDUSxPQUFPLEVBQUMsV0FBVzt3QkFDbkJDLEtBQUssRUFBQyw0QkFBNEI7OzBDQUVsQyw4REFBQ0MsTUFBSTtnQ0FBQ0MsQ0FBQyxFQUFDLEdBQUc7Z0NBQUNDLEtBQUssRUFBQyxJQUFJO2dDQUFDQyxNQUFNLEVBQUMsR0FBRzs7Ozs7b0NBQUc7MENBQ3BDLDhEQUFDSCxNQUFJO2dDQUFDQyxDQUFDLEVBQUMsSUFBSTtnQ0FBQ0MsS0FBSyxFQUFDLElBQUk7Z0NBQUNDLE1BQU0sRUFBQyxHQUFHOzs7OztvQ0FBRzswQ0FDckMsOERBQUNILE1BQUk7Z0NBQUNDLENBQUMsRUFBQyxJQUFJO2dDQUFDQyxLQUFLLEVBQUMsSUFBSTtnQ0FBQ0MsTUFBTSxFQUFDLEdBQUc7Ozs7O29DQUFHOzs7Ozs7NEJBQ2pDOzs7Ozs7b0JBQ0M7MEJBR1QsOERBQUNkLEtBQUc7Z0JBQUNHLEdBQUcsRUFBRWIsU0FBUzswQkFDakIsNEVBQUNOLHlEQUFVO29CQUNUK0IsSUFBSSxFQUFFNUIsYUFBYTtvQkFDbkI2QixFQUFFLEVBQUMsS0FBSztvQkFDUkMsRUFBRSxFQUFDLFlBQVk7b0JBQ2ZoQixTQUFTLEVBQUMsOEVBQThFO29CQUN4RmlCLEtBQUssRUFBQyw0Q0FBNEM7b0JBQ2xEQyxTQUFTLEVBQUMsMEJBQTBCO29CQUNwQ0MsT0FBTyxFQUFDLDJCQUEyQjtvQkFDbkNDLEtBQUssRUFBQyxrQ0FBa0M7b0JBQ3hDQyxTQUFTLEVBQUMsYUFBYTtvQkFDdkJDLE9BQU8sRUFBQyxXQUFXOzhCQUVuQiw0RUFBQ0MsSUFBRTt3QkFBQ3ZCLFNBQVMsRUFBQyxXQUFXO2tDQUN2Qiw0RUFBQ3dCLElBQUU7c0NBQ0QsNEVBQUN4QyxrREFBSTtnQ0FDSHlDLElBQUksRUFBQyxPQUFPO2dDQUNaekIsU0FBUyxFQUFDLCtFQUErRTtnQ0FDekZLLE9BQU8sRUFBRTsyQ0FBTWxCLGdCQUFnQixDQUFDLEtBQUssQ0FBQztpQ0FBQTswQ0FDdkMsU0FFRDs7Ozs7b0NBQU87Ozs7O2dDQUNKOzs7Ozs0QkFDRjs7Ozs7d0JBQ007Ozs7O29CQUNUOzs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztHQW5GdUJGLFVBQVU7QUFBVkEsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xhbmRpbmctcGFnZS9jb21wb25lbnRzL3VpL21vYmlsZS1tZW51LmpzP2NkZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9iaWxlTWVudSgpIHtcclxuICBjb25zdCBbbW9iaWxlTmF2T3Blbiwgc2V0TW9iaWxlTmF2T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbW9iaWxlTmF2ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAvLyBjbG9zZSB0aGUgbW9iaWxlIG1lbnUgb24gY2xpY2sgb3V0c2lkZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICBpZiAoIW1vYmlsZU5hdi5jdXJyZW50IHx8ICF0cmlnZ2VyLmN1cnJlbnQpIHJldHVybjtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFtb2JpbGVOYXZPcGVuIHx8XHJcbiAgICAgICAgbW9iaWxlTmF2LmN1cnJlbnQuY29udGFpbnModGFyZ2V0KSB8fFxyXG4gICAgICAgIHRyaWdnZXIuY3VycmVudC5jb250YWlucyh0YXJnZXQpXHJcbiAgICAgIClcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIHNldE1vYmlsZU5hdk9wZW4oZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBjbG9zZSB0aGUgbW9iaWxlIG1lbnUgaWYgdGhlIGVzYyBrZXkgaXMgcHJlc3NlZFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBrZXlIYW5kbGVyID0gKHsga2V5Q29kZSB9KSA9PiB7XHJcbiAgICAgIGlmICghbW9iaWxlTmF2T3BlbiB8fCBrZXlDb2RlICE9PSAyNykgcmV0dXJuO1xyXG4gICAgICBzZXRNb2JpbGVOYXZPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlIYW5kbGVyKTtcclxuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlIYW5kbGVyKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtZDpoaWRkZW5cIj5cclxuICAgICAgey8qIEhhbWJ1cmdlciBidXR0b24gKi99XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICByZWY9e3RyaWdnZXJ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgaGFtYnVyZ2VyICR7bW9iaWxlTmF2T3BlbiAmJiBcImFjdGl2ZVwifWB9XHJcbiAgICAgICAgYXJpYS1jb250cm9scz1cIm1vYmlsZS1uYXZcIlxyXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9e21vYmlsZU5hdk9wZW59XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTmF2T3BlbighbW9iaWxlTmF2T3Blbil9XHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TWVudTwvc3Bhbj5cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IGZpbGwtY3VycmVudCB0ZXh0LWdyYXktOTAwXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHJlY3QgeT1cIjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMlwiIC8+XHJcbiAgICAgICAgICA8cmVjdCB5PVwiMTFcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMlwiIC8+XHJcbiAgICAgICAgICA8cmVjdCB5PVwiMThcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMlwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgey8qTW9iaWxlIG5hdmlnYXRpb24gKi99XHJcbiAgICAgIDxkaXYgcmVmPXttb2JpbGVOYXZ9PlxyXG4gICAgICAgIDxUcmFuc2l0aW9uXHJcbiAgICAgICAgICBzaG93PXttb2JpbGVOYXZPcGVufVxyXG4gICAgICAgICAgYXM9XCJuYXZcIlxyXG4gICAgICAgICAgaWQ9XCJtb2JpbGUtbmF2XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1mdWxsIGgtc2NyZWVuIHBiLTE2IHotMjAgbGVmdC0wIHctZnVsbCBvdmVyZmxvdy1zY3JvbGwgYmctd2hpdGVcIlxyXG4gICAgICAgICAgZW50ZXI9XCJ0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTIwMCB0cmFuc2Zvcm1cIlxyXG4gICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIC10cmFuc2xhdGUteS0yXCJcclxuICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCJcclxuICAgICAgICAgIGxlYXZlPVwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInB4LTUgcHktMlwiPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvYXV0aFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZvbnQtbWVkaXVtIHctZnVsbCB0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS05MDAgcHktMiBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVOYXZPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJUcmFuc2l0aW9uIiwiTGluayIsIk1vYmlsZU1lbnUiLCJtb2JpbGVOYXZPcGVuIiwic2V0TW9iaWxlTmF2T3BlbiIsInRyaWdnZXIiLCJtb2JpbGVOYXYiLCJjbGlja0hhbmRsZXIiLCJ0YXJnZXQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia2V5SGFuZGxlciIsImtleUNvZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJyZWYiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsIm9uQ2xpY2siLCJzcGFuIiwic3ZnIiwidmlld0JveCIsInhtbG5zIiwicmVjdCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInNob3ciLCJhcyIsImlkIiwiZW50ZXIiLCJlbnRlckZyb20iLCJlbnRlclRvIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIiwidWwiLCJsaSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/landing-page/components/ui/mobile-menu.js\n"));

/***/ })

});