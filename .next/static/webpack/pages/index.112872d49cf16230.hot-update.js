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

/***/ "./components/landing-page/components/modal-video.js":
/*!***********************************************************!*\
  !*** ./components/landing-page/components/modal-video.js ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ModalVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ModalVideo(param) {\n    var thumb = param.thumb, thumbWidth = param.thumbWidth, thumbHeight = param.thumbHeight, thumbAlt = param.thumbAlt, video = param.video, videoWidth = param.videoWidth, videoHeight = param.videoHeight;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), modalOpen = ref[0], setModalOpen = ref[1];\n    var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex justify-center mb-8\",\n                    \"data-aos\": \"zoom-y-out\",\n                    \"data-aos-delay\": \"450\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: thumb,\n                                width: thumbWidth,\n                                height: thumbHeight,\n                                alt: thumbAlt\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg\",\n                            onClick: function() {\n                                setModalOpen(true);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: \"w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 shrink-0\",\n                                    viewBox: \"0 0 24 24\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M10 17l6-5-6-5z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-3\",\n                                    children: \"Watch the full video (3 min)\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {\n                show: modalOpen,\n                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                afterEnter: function() {\n                    var ref;\n                    return (ref = videoRef.current) === null || ref === void 0 ? void 0 : ref.play();\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {\n                    initialFocus: videoRef,\n                    onClose: function() {\n                        return setModalOpen(false);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {\n                            className: \"fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity\",\n                            enter: \"transition ease-out duration-200\",\n                            enterFrom: \"opacity-0\",\n                            enterTo: \"opacity-100\",\n                            leave: \"transition ease-out duration-100\",\n                            leaveFrom: \"opacity-100\",\n                            leaveTo: \"opacity-0\",\n                            \"aria-hidden\": \"true\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {\n                            className: \"fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6\",\n                            enter: \"transition ease-out duration-200\",\n                            enterFrom: \"opacity-0 scale-95\",\n                            enterTo: \"opacity-100 scale-100\",\n                            leave: \"ttransition ease-out duration-200\",\n                            leaveFrom: \"oopacity-100 scale-100\",\n                            leaveTo: \"opacity-0 scale-95\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-w-6xl mx-auto h-full flex items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Panel, {\n                                    className: \"w-full max-h-full aspect-video bg-black overflow-hidden\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                        ref: videoRef,\n                                        width: videoWidth,\n                                        height: videoHeight,\n                                        loop: true,\n                                        controls: true,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                                src: video,\n                                                type: \"video/mp4\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 19\n                                            }, this),\n                                            \"Your browser does not support the video tag.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\landing-page\\\\components\\\\modal-video.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(ModalVideo, \"eY2nhSwcQ+D+NyueI+tAnNjoqj8=\");\n_c = ModalVideo;\nvar _c;\n$RefreshReg$(_c, \"ModalVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xhbmRpbmctcGFnZS9jb21wb25lbnRzL21vZGFsLXZpZGVvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW1EO0FBQ047QUFDVTtBQUN4QjtBQUVoQixTQUFTTyxVQUFVLENBQUMsS0FRbEMsRUFBRTtRQVBEQyxLQUFLLEdBRDRCLEtBUWxDLENBUENBLEtBQUssRUFDTEMsVUFBVSxHQUZ1QixLQVFsQyxDQU5DQSxVQUFVLEVBQ1ZDLFdBQVcsR0FIc0IsS0FRbEMsQ0FMQ0EsV0FBVyxFQUNYQyxRQUFRLEdBSnlCLEtBUWxDLENBSkNBLFFBQVEsRUFDUkMsS0FBSyxHQUw0QixLQVFsQyxDQUhDQSxLQUFLLEVBQ0xDLFVBQVUsR0FOdUIsS0FRbEMsQ0FGQ0EsVUFBVSxFQUNWQyxXQUFXLEdBUHNCLEtBUWxDLENBRENBLFdBQVc7O0lBRVgsSUFBa0NkLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBMUNlLFNBQVMsR0FBa0JmLEdBQWUsR0FBakMsRUFBRWdCLFlBQVksR0FBSWhCLEdBQWUsR0FBbkI7SUFDOUIsSUFBTWlCLFFBQVEsR0FBR2hCLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBRTdCLHFCQUNFLDhEQUFDaUIsS0FBRzs7MEJBRUYsOERBQUNBLEtBQUc7MEJBQ0YsNEVBQUNBLEtBQUc7b0JBQ0ZDLFNBQVMsRUFBQyxtQ0FBbUM7b0JBQzdDQyxVQUFRLEVBQUMsWUFBWTtvQkFDckJDLGdCQUFjLEVBQUMsS0FBSzs7c0NBRXBCLDhEQUFDSCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsOEJBQThCO3NDQUMzQyw0RUFBQ2IsbURBQUs7Z0NBQ0pnQixHQUFHLEVBQUVkLEtBQUs7Z0NBQ1ZlLEtBQUssRUFBRWQsVUFBVTtnQ0FDakJlLE1BQU0sRUFBRWQsV0FBVztnQ0FDbkJlLEdBQUcsRUFBRWQsUUFBUTs7Ozs7b0NBQ2I7Ozs7O2dDQUNFO3NDQUNOLDhEQUFDZSxRQUFNOzRCQUNMUCxTQUFTLEVBQUMsc0hBQXNIOzRCQUNoSVEsT0FBTyxFQUFFLFdBQU07Z0NBQ2JYLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDckIsQ0FBQzs7OENBRUQsOERBQUNZLEtBQUc7b0NBQ0ZULFNBQVMsRUFBQyx1RUFBdUU7b0NBQ2pGVSxPQUFPLEVBQUMsV0FBVztvQ0FDbkJDLEtBQUssRUFBQyw0QkFBNEI7O3NEQUVsQyw4REFBQ0MsTUFBSTs0Q0FBQ0MsQ0FBQyxFQUFDLGlKQUFpSjs7Ozs7Z0RBQUc7c0RBQzVKLDhEQUFDRCxNQUFJOzRDQUFDQyxDQUFDLEVBQUMsaUJBQWlCOzs7OztnREFBRzs7Ozs7O3dDQUN4Qjs4Q0FDTiw4REFBQ0MsTUFBSTtvQ0FBQ2QsU0FBUyxFQUFDLE1BQU07OENBQUMsOEJBQTRCOzs7Ozt3Q0FBTzs7Ozs7O2dDQUNuRDs7Ozs7O3dCQUNMOzs7OztvQkFDRjswQkFHTiw4REFBQ2QseURBQVU7Z0JBQ1Q2QixJQUFJLEVBQUVuQixTQUFTO2dCQUNmb0IsRUFBRSxFQUFFakMsMkNBQVE7Z0JBQ1prQyxVQUFVLEVBQUU7d0JBQU1uQixHQUFnQjtvQkFBaEJBLE9BQUFBLENBQUFBLEdBQWdCLEdBQWhCQSxRQUFRLENBQUNvQixPQUFPLGNBQWhCcEIsR0FBZ0IsV0FBTSxHQUF0QkEsS0FBQUEsQ0FBc0IsR0FBdEJBLEdBQWdCLENBQUVxQixJQUFJLEVBQUU7aUJBQUE7MEJBRTFDLDRFQUFDbEMscURBQU07b0JBQUNtQyxZQUFZLEVBQUV0QixRQUFRO29CQUFFdUIsT0FBTyxFQUFFOytCQUFNeEIsWUFBWSxDQUFDLEtBQUssQ0FBQztxQkFBQTs7c0NBRWhFLDhEQUFDWCwrREFBZ0I7NEJBQ2ZjLFNBQVMsRUFBQyxtRUFBbUU7NEJBQzdFdUIsS0FBSyxFQUFDLGtDQUFrQzs0QkFDeENDLFNBQVMsRUFBQyxXQUFXOzRCQUNyQkMsT0FBTyxFQUFDLGFBQWE7NEJBQ3JCQyxLQUFLLEVBQUMsa0NBQWtDOzRCQUN4Q0MsU0FBUyxFQUFDLGFBQWE7NEJBQ3ZCQyxPQUFPLEVBQUMsV0FBVzs0QkFDbkJDLGFBQVcsRUFBQyxNQUFNOzs7OztnQ0FDbEI7c0NBSUYsOERBQUMzQywrREFBZ0I7NEJBQ2ZjLFNBQVMsRUFBQyxpR0FBaUc7NEJBQzNHdUIsS0FBSyxFQUFDLGtDQUFrQzs0QkFDeENDLFNBQVMsRUFBQyxvQkFBb0I7NEJBQzlCQyxPQUFPLEVBQUMsdUJBQXVCOzRCQUMvQkMsS0FBSyxFQUFDLG1DQUFtQzs0QkFDekNDLFNBQVMsRUFBQyx3QkFBd0I7NEJBQ2xDQyxPQUFPLEVBQUMsb0JBQW9CO3NDQUU1Qiw0RUFBQzdCLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyw0Q0FBNEM7MENBQ3pELDRFQUFDZiwyREFBWTtvQ0FBQ2UsU0FBUyxFQUFDLHlEQUF5RDs4Q0FDL0UsNEVBQUNQLE9BQUs7d0NBQ0pzQyxHQUFHLEVBQUVqQyxRQUFRO3dDQUNiTSxLQUFLLEVBQUVWLFVBQVU7d0NBQ2pCVyxNQUFNLEVBQUVWLFdBQVc7d0NBQ25CcUMsSUFBSTt3Q0FDSkMsUUFBUTs7MERBRVIsOERBQUNDLFFBQU07Z0RBQUMvQixHQUFHLEVBQUVWLEtBQUs7Z0RBQUUwQyxJQUFJLEVBQUMsV0FBVzs7Ozs7b0RBQUc7NENBQUEsOENBRXpDOzs7Ozs7NENBQVE7Ozs7O3dDQUNLOzs7OztvQ0FDWDs7Ozs7Z0NBQ1c7Ozs7Ozt3QkFFWjs7Ozs7b0JBQ0U7Ozs7OztZQUNULENBQ047QUFDSixDQUFDO0dBbEd1Qi9DLFVBQVU7QUFBVkEsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xhbmRpbmctcGFnZS9jb21wb25lbnRzL21vZGFsLXZpZGVvLmpzPzNkMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3RhdGljSW1hZ2VEYXRhIH0gZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgRGlhbG9nLCBUcmFuc2l0aW9uIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWxWaWRlbyh7XHJcbiAgdGh1bWIsXHJcbiAgdGh1bWJXaWR0aCxcclxuICB0aHVtYkhlaWdodCxcclxuICB0aHVtYkFsdCxcclxuICB2aWRlbyxcclxuICB2aWRlb1dpZHRoLFxyXG4gIHZpZGVvSGVpZ2h0LFxyXG59KSB7XHJcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiBWaWRlbyB0aHVtYm5haWwgKi99XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBtYi04XCJcclxuICAgICAgICAgIGRhdGEtYW9zPVwiem9vbS15LW91dFwiXHJcbiAgICAgICAgICBkYXRhLWFvcy1kZWxheT1cIjQ1MFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17dGh1bWJ9XHJcbiAgICAgICAgICAgICAgd2lkdGg9e3RodW1iV2lkdGh9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXt0aHVtYkhlaWdodH1cclxuICAgICAgICAgICAgICBhbHQ9e3RodW1iQWx0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBmb250LW1lZGl1bSBncm91cCBwLTQgc2hhZG93LWxnXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE1vZGFsT3Blbih0cnVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgZmlsbC1jdXJyZW50IHRleHQtZ3JheS00MDAgZ3JvdXAtaG92ZXI6dGV4dC1ibHVlLTYwMCBzaHJpbmstMFwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDIyYzUuNTIzIDAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTB6bTAgMkM1LjM3MyAyNCAwIDE4LjYyNyAwIDEyUzUuMzczIDAgMTIgMHMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMnpcIiAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgMTdsNi01LTYtNXpcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtM1wiPldhdGNoIHRoZSBmdWxsIHZpZGVvICgzIG1pbik8L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBFbmQ6IFZpZGVvIHRodW1ibmFpbCAqL31cclxuXHJcbiAgICAgIDxUcmFuc2l0aW9uXHJcbiAgICAgICAgc2hvdz17bW9kYWxPcGVufVxyXG4gICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICBhZnRlckVudGVyPXsoKSA9PiB2aWRlb1JlZi5jdXJyZW50Py5wbGF5KCl9XHJcbiAgICAgID5cclxuICAgICAgICA8RGlhbG9nIGluaXRpYWxGb2N1cz17dmlkZW9SZWZ9IG9uQ2xvc2U9eygpID0+IHNldE1vZGFsT3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgey8qIE1vZGFsIGJhY2tkcm9wICovfVxyXG4gICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LVs5OTk5OV0gYmctYmxhY2sgYmctb3BhY2l0eS03NSB0cmFuc2l0aW9uLW9wYWNpdHlcIlxyXG4gICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTEwMFwiXHJcbiAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIEVuZDogTW9kYWwgYmFja2Ryb3AgKi99XHJcblxyXG4gICAgICAgICAgey8qIE1vZGFsIGRpYWxvZyAqL31cclxuICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei1bOTk5OTldIG92ZXJmbG93LWhpZGRlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2Zvcm0gcHgtNCBzbTpweC02XCJcclxuICAgICAgICAgICAgZW50ZXI9XCJ0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICBsZWF2ZT1cInR0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9vcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8RGlhbG9nLlBhbmVsIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtaC1mdWxsIGFzcGVjdC12aWRlbyBiZy1ibGFjayBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgICAgICByZWY9e3ZpZGVvUmVmfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17dmlkZW9XaWR0aH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt2aWRlb0hlaWdodH1cclxuICAgICAgICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICAgICAgICBjb250cm9sc1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17dmlkZW99IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxyXG4gICAgICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICAgICAgICA8L0RpYWxvZy5QYW5lbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcbiAgICAgICAgICB7LyogRW5kOiBNb2RhbCBkaWFsb2cgKi99XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwiRnJhZ21lbnQiLCJTdGF0aWNJbWFnZURhdGEiLCJEaWFsb2ciLCJUcmFuc2l0aW9uIiwiSW1hZ2UiLCJNb2RhbFZpZGVvIiwidGh1bWIiLCJ0aHVtYldpZHRoIiwidGh1bWJIZWlnaHQiLCJ0aHVtYkFsdCIsInZpZGVvIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0IiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwidmlkZW9SZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhLWFvcyIsImRhdGEtYW9zLWRlbGF5Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwidmlld0JveCIsInhtbG5zIiwicGF0aCIsImQiLCJzcGFuIiwic2hvdyIsImFzIiwiYWZ0ZXJFbnRlciIsImN1cnJlbnQiLCJwbGF5IiwiaW5pdGlhbEZvY3VzIiwib25DbG9zZSIsIkNoaWxkIiwiZW50ZXIiLCJlbnRlckZyb20iLCJlbnRlclRvIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIiwiYXJpYS1oaWRkZW4iLCJQYW5lbCIsInJlZiIsImxvb3AiLCJjb250cm9scyIsInNvdXJjZSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/landing-page/components/modal-video.js\n"));

/***/ })

});