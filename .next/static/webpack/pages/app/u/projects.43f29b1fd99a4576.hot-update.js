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

/***/ "./components/Projects/ProjectEmployees.js/ProjectEmployees.js":
/*!*********************************************************************!*\
  !*** ./components/Projects/ProjectEmployees.js/ProjectEmployees.js ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectEmployees; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../client/requests */ \"./client/requests.js\");\n/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Permissions_AuthorityCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Permissions/AuthorityCheck */ \"./Permissions/AuthorityCheck.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ProjectEmployees(param) {\n    var projectId = param.projectId, isNewEmployee = param.isNewEmployee, setisNewEmployee = param.setisNewEmployee, setIsEmployeeProfile = param.setIsEmployeeProfile, ownerId = param.ownerId;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), employeesData = ref[0], setEmployeesData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var columns = [\n        {\n            title: \"Name\",\n            width: 100,\n            render: function(_, param) {\n                var first_name = param.first_name, last_name = param.last_name, id = param.id;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"underline cursor-pointer\",\n                    onClick: function() {\n                        return setIsEmployeeProfile({\n                            id: id\n                        });\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            first_name,\n                            \" \",\n                            last_name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Projects\\\\ProjectEmployees.js\\\\ProjectEmployees.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Projects\\\\ProjectEmployees.js\\\\ProjectEmployees.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this);\n            },\n            key: \"name\",\n            fixed: \"left\"\n        },\n        {\n            title: \"Age\",\n            width: 100,\n            dataIndex: \"date_of_birth\",\n            key: \"age\",\n            sorter: true,\n            render: function(_, param) {\n                var date_of_birth = param.date_of_birth;\n                var age = moment_moment__WEBPACK_IMPORTED_MODULE_3___default()().diff(date_of_birth, \"years\", false);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        age,\n                        \" years\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Projects\\\\ProjectEmployees.js\\\\ProjectEmployees.js\",\n                    lineNumber: 47,\n                    columnNumber: 16\n                }, _this);\n            }\n        },\n        {\n            title: \"Gender\",\n            dataIndex: \"gender\",\n            key: \"gender\"\n        },\n        {\n            title: \"Email\",\n            dataIndex: \"email\",\n            key: \"email\"\n        },\n        {\n            title: \"Phone Number\",\n            dataIndex: \"phone_number\",\n            key: \"phone_number\"\n        },\n        {\n            title: \"Designation\",\n            dataIndex: \"designation\",\n            render: function(_, param) {\n                var Designation = param.Designation;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: Designation.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Projects\\\\ProjectEmployees.js\\\\ProjectEmployees.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Projects\\\\ProjectEmployees.js\\\\ProjectEmployees.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, _this);\n            }\n        },\n        // {\n        //   title: \"Role\",\n        //   dataIndex: \"role\",\n        //   key: \"role\",\n        // },\n        {\n            title: \"Expertise\",\n            dataIndex: \"expertise\",\n            key: \"expertise\"\n        },\n        {\n            title: \"Action\",\n            key: \"id\",\n            width: 100,\n            render: function(_, param) {\n                var id = param.id;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Permissions_AuthorityCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    grantPermissionFor: \"manage_projects\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Popconfirm, {\n                        title: \"Remove Employee from project\",\n                        description: \"Are you sure to remove this employee from projectorate?\",\n                        onConfirm: function() {\n                            confirm(id);\n                        },\n                        onCancel: cancel,\n                        okText: \"Confirm\",\n                        cancelText: \"No\",\n                        placement: \"topLeft\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"p-2 bg-red-500 rounded-md text-sm text-white\",\n                            children: \"Remove\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Projects\\\\ProjectEmployees.js\\\\ProjectEmployees.js\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Projects\\\\ProjectEmployees.js\\\\ProjectEmployees.js\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Projects\\\\ProjectEmployees.js\\\\ProjectEmployees.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, _this);\n            }\n        }, \n    ];\n    //This function get the new employees when\n    //CheckforNewEmployees gets true\n    var getEmployeesData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n            var res;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setLoading(true);\n                        return [\n                            4,\n                            (0,_client_requests__WEBPACK_IMPORTED_MODULE_2__.getProjectEmployees)(projectId).then(function(res) {\n                                var data = res.result;\n                                console.log(\"ProjectEmployeesData:\", data);\n                                if (data) {\n                                    setLoading(false);\n                                }\n                                setEmployeesData(data);\n                            })\n                        ];\n                    case 1:\n                        res = _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getEmployeesData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var confirm = function(id) {\n        (0,_client_requests__WEBPACK_IMPORTED_MODULE_2__.DeleteEmployeeFromProject)(id, projectId, ownerId).then(function(res) {\n            console.log(res);\n            if (!res.error) {\n                //if employees is sucessfully deleted reload all employees and show message\n                getEmployeesData();\n                antd__WEBPACK_IMPORTED_MODULE_5__.message.success(\"Sucessfully removed employee from project!\");\n            } else {\n                antd__WEBPACK_IMPORTED_MODULE_5__.message.error(\"Error while removing employee!\");\n            }\n        });\n    };\n    var cancel = function(e) {};\n    //fetch employee if a new employee has been added\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (isNewEmployee) {\n            getEmployeesData();\n            setisNewEmployee(false);\n        }\n    }, [\n        isNewEmployee\n    ]);\n    //Call the getNewEmployees function when needed\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getEmployeesData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center -mt-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"project_employees_data_table w-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Table, {\n                columns: columns,\n                dataSource: employeesData,\n                scroll: {\n                    x: 1000\n                },\n                className: \"rounded-none\",\n                style: {\n                    borderRadius: \"0 !impotant\"\n                },\n                loading: loading,\n                rowClassName: function() {\n                    return \"team-employees\";\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Projects\\\\ProjectEmployees.js\\\\ProjectEmployees.js\",\n                lineNumber: 153,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Projects\\\\ProjectEmployees.js\\\\ProjectEmployees.js\",\n            lineNumber: 152,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Dev\\\\Projectorate\\\\components\\\\Projects\\\\ProjectEmployees.js\\\\ProjectEmployees.js\",\n        lineNumber: 151,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectEmployees, \"9n6mr4zhVZGr/sc5c/HIuCa7T9w=\");\n_c = ProjectEmployees;\nvar _c;\n$RefreshReg$(_c, \"ProjectEmployees\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RFbXBsb3llZXMuanMvUHJvamVjdEVtcGxveWVlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUE2RDtBQUNqQjtBQUtWO0FBQ0M7QUFDNEI7QUFDRTtBQUVsRCxTQUFTWSxnQkFBZ0IsQ0FBQyxLQU14QyxFQUFFO1FBTERDLFNBQVMsR0FEOEIsS0FNeEMsQ0FMQ0EsU0FBUyxFQUNUQyxhQUFhLEdBRjBCLEtBTXhDLENBSkNBLGFBQWEsRUFDYkMsZ0JBQWdCLEdBSHVCLEtBTXhDLENBSENBLGdCQUFnQixFQUNoQkMsb0JBQW9CLEdBSm1CLEtBTXhDLENBRkNBLG9CQUFvQixFQUNwQkMsT0FBTyxHQUxnQyxLQU14QyxDQURDQSxPQUFPOzs7SUFFUCxJQUEwQ1osR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQTdDYSxhQUFhLEdBQXNCYixHQUFVLEdBQWhDLEVBQUVjLGdCQUFnQixHQUFJZCxHQUFVLEdBQWQ7SUFDdEMsSUFBOEJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBdENlLE9BQU8sR0FBZ0JmLElBQWUsR0FBL0IsRUFBRWdCLFVBQVUsR0FBSWhCLElBQWUsR0FBbkI7SUFFMUIsSUFBTWlCLE9BQU8sR0FBRztRQUNkO1lBQ0VDLEtBQUssRUFBRSxNQUFNO1lBQ2JDLEtBQUssRUFBRSxHQUFHO1lBQ1ZDLE1BQU0sRUFBRSxTQUFDQyxDQUFDO29CQUFJQyxVQUFVLFNBQVZBLFVBQVUsRUFBRUMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLEVBQUUsU0FBRkEsRUFBRTtxQ0FDckMsOERBQUNDLEtBQUc7b0JBQ0ZDLFNBQVMsRUFBQywwQkFBMEI7b0JBQ3BDQyxPQUFPLEVBQUU7K0JBQU1oQixvQkFBb0IsQ0FBQzs0QkFBRWEsRUFBRSxFQUFGQSxFQUFFO3lCQUFFLENBQUM7cUJBQUE7OEJBRTNDLDRFQUFDSSxJQUFFOzs0QkFDQU4sVUFBVTs0QkFBQyxHQUFDOzRC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bEQsNEVBQUMvQix1Q0FBSztnQkFDSnNCLE9BQU8sRUFBRUEsT0FBTztnQkFDaEJ5QyxVQUFVLEVBQUU3QyxhQUFhO2dCQUN6QjhDLE1BQU0sRUFBRTtvQkFDTkMsQ0FBQyxFQUFFLElBQUk7aUJBQ1I7Z0JBQ0RsQyxTQUFTLEVBQUMsY0FBYztnQkFDeEJtQyxLQUFLLEVBQUU7b0JBQUVDLFlBQVksRUFBRSxhQUFhO2lCQUFFO2dCQUN0Qy9DLE9BQU8sRUFBRUEsT0FBTztnQkFDaEJnRCxZQUFZLEVBQUU7MkJBQU0sZ0JBQWdCO2lCQUFBOzs7OztvQkFDcEM7Ozs7O2dCQUNFOzs7OztZQUNGLENBQ047QUFDSixDQUFDO0dBM0p1QnhELGdCQUFnQjtBQUFoQkEsS0FBQUEsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdEVtcGxveWVlcy5qcy9Qcm9qZWN0RW1wbG95ZWVzLmpzPzc2YTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUsIFNlZ21lbnRlZCwgbWVzc2FnZSwgUG9wY29uZmlybSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBEZWxldGVFbXBsb3llZUZyb21Qcm9qZWN0LFxyXG4gIGRlbGV0ZUVtcGxveWVlLFxyXG4gIGdldEVtcGxveWVlcyxcclxufSBmcm9tIFwiLi4vLi4vLi4vY2xpZW50L3JlcXVlc3RzXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudC9tb21lbnRcIjtcclxuaW1wb3J0IHsgZ2V0UHJvamVjdEVtcGxveWVlcyB9IGZyb20gXCIuLi8uLi8uLi9jbGllbnQvcmVxdWVzdHNcIjtcclxuaW1wb3J0IEF1dGhvcml0eUNoZWNrIGZyb20gXCIuLi8uLi8uLi9QZXJtaXNzaW9ucy9BdXRob3JpdHlDaGVja1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEVtcGxveWVlcyh7XHJcbiAgcHJvamVjdElkLFxyXG4gIGlzTmV3RW1wbG95ZWUsXHJcbiAgc2V0aXNOZXdFbXBsb3llZSxcclxuICBzZXRJc0VtcGxveWVlUHJvZmlsZSxcclxuICBvd25lcklkLFxyXG59KSB7XHJcbiAgY29uc3QgW2VtcGxveWVlc0RhdGEsIHNldEVtcGxveWVlc0RhdGFdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk5hbWVcIixcclxuICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgcmVuZGVyOiAoXywgeyBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIGlkIH0pID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNFbXBsb3llZVByb2ZpbGUoeyBpZCB9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgIHtmaXJzdF9uYW1lfSB7bGFzdF9uYW1lfVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSxcclxuICAgICAga2V5OiBcIm5hbWVcIixcclxuICAgICAgZml4ZWQ6IFwibGVmdFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQWdlXCIsXHJcbiAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgIGRhdGFJbmRleDogXCJkYXRlX29mX2JpcnRoXCIsXHJcbiAgICAgIGtleTogXCJhZ2VcIixcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICByZW5kZXI6IChfLCB7IGRhdGVfb2ZfYmlydGggfSkgPT4ge1xyXG4gICAgICAgIHZhciBhZ2UgPSBtb21lbnQoKS5kaWZmKGRhdGVfb2ZfYmlydGgsIFwieWVhcnNcIiwgZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiA8cD57YWdlfSB5ZWFyczwvcD47XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJHZW5kZXJcIixcclxuICAgICAgZGF0YUluZGV4OiBcImdlbmRlclwiLFxyXG4gICAgICBrZXk6IFwiZ2VuZGVyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJFbWFpbFwiLFxyXG4gICAgICBkYXRhSW5kZXg6IFwiZW1haWxcIixcclxuICAgICAga2V5OiBcImVtYWlsXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJQaG9uZSBOdW1iZXJcIixcclxuICAgICAgZGF0YUluZGV4OiBcInBob25lX251bWJlclwiLFxyXG4gICAgICBrZXk6IFwicGhvbmVfbnVtYmVyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJEZXNpZ25hdGlvblwiLFxyXG4gICAgICBkYXRhSW5kZXg6IFwiZGVzaWduYXRpb25cIixcclxuICAgICAgcmVuZGVyOiAoXywgeyBEZXNpZ25hdGlvbiB9KSA9PiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT57RGVzaWduYXRpb24udGl0bGV9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIHRpdGxlOiBcIlJvbGVcIixcclxuICAgIC8vICAgZGF0YUluZGV4OiBcInJvbGVcIixcclxuICAgIC8vICAga2V5OiBcInJvbGVcIixcclxuICAgIC8vIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkV4cGVydGlzZVwiLFxyXG4gICAgICBkYXRhSW5kZXg6IFwiZXhwZXJ0aXNlXCIsXHJcbiAgICAgIGtleTogXCJleHBlcnRpc2VcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkFjdGlvblwiLFxyXG4gICAgICBrZXk6IFwiaWRcIixcclxuICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgcmVuZGVyOiAoXywgeyBpZCB9KSA9PiAoXHJcbiAgICAgICAgPEF1dGhvcml0eUNoZWNrIGdyYW50UGVybWlzc2lvbkZvcj1cIm1hbmFnZV9wcm9qZWN0c1wiPlxyXG4gICAgICAgICAgPFBvcGNvbmZpcm1cclxuICAgICAgICAgICAgdGl0bGU9e2BSZW1vdmUgRW1wbG95ZWUgZnJvbSBwcm9qZWN0YH1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBcmUgeW91IHN1cmUgdG8gcmVtb3ZlIHRoaXMgZW1wbG95ZWUgZnJvbSBwcm9qZWN0b3JhdGU/XCJcclxuICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uZmlybShpZCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2FuY2VsPXtjYW5jZWx9XHJcbiAgICAgICAgICAgIG9rVGV4dD1cIkNvbmZpcm1cIlxyXG4gICAgICAgICAgICBjYW5jZWxUZXh0PVwiTm9cIlxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTIgYmctcmVkLTUwMCByb3VuZGVkLW1kIHRleHQtc20gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgIFJlbW92ZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICA8L0F1dGhvcml0eUNoZWNrPlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICAvL1RoaXMgZnVuY3Rpb24gZ2V0IHRoZSBuZXcgZW1wbG95ZWVzIHdoZW5cclxuICAvL0NoZWNrZm9yTmV3RW1wbG95ZWVzIGdldHMgdHJ1ZVxyXG4gIGNvbnN0IGdldEVtcGxveWVlc0RhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0UHJvamVjdEVtcGxveWVlcyhwcm9qZWN0SWQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVzLnJlc3VsdDtcclxuICAgICAgY29uc29sZS5sb2coXCJQcm9qZWN0RW1wbG95ZWVzRGF0YTpcIiwgZGF0YSk7XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0RW1wbG95ZWVzRGF0YShkYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm0gPSAoaWQpID0+IHtcclxuICAgIERlbGV0ZUVtcGxveWVlRnJvbVByb2plY3QoaWQsIHByb2plY3RJZCwgb3duZXJJZCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIGlmICghcmVzLmVycm9yKSB7XHJcbiAgICAgICAgLy9pZiBlbXBsb3llZXMgaXMgc3VjZXNzZnVsbHkgZGVsZXRlZCByZWxvYWQgYWxsIGVtcGxveWVlcyBhbmQgc2hvdyBtZXNzYWdlXHJcbiAgICAgICAgZ2V0RW1wbG95ZWVzRGF0YSgpO1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhgU3VjZXNzZnVsbHkgcmVtb3ZlZCBlbXBsb3llZSBmcm9tIHByb2plY3QhYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihgRXJyb3Igd2hpbGUgcmVtb3ZpbmcgZW1wbG95ZWUhYCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgY2FuY2VsID0gKGUpID0+IHt9O1xyXG5cclxuICAvL2ZldGNoIGVtcGxveWVlIGlmIGEgbmV3IGVtcGxveWVlIGhhcyBiZWVuIGFkZGVkXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc05ld0VtcGxveWVlKSB7XHJcbiAgICAgIGdldEVtcGxveWVlc0RhdGEoKTtcclxuICAgICAgc2V0aXNOZXdFbXBsb3llZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW2lzTmV3RW1wbG95ZWVdKTtcclxuXHJcbiAgLy9DYWxsIHRoZSBnZXROZXdFbXBsb3llZXMgZnVuY3Rpb24gd2hlbiBuZWVkZWRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RW1wbG95ZWVzRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAtbXQtNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RfZW1wbG95ZWVzX2RhdGFfdGFibGUgdy1mdWxsXCI+XHJcbiAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgZGF0YVNvdXJjZT17ZW1wbG95ZWVzRGF0YX1cclxuICAgICAgICAgIHNjcm9sbD17e1xyXG4gICAgICAgICAgICB4OiAxMDAwLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbm9uZVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiMCAhaW1wb3RhbnRcIiB9fVxyXG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgIHJvd0NsYXNzTmFtZT17KCkgPT4gXCJ0ZWFtLWVtcGxveWVlc1wifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiVGFibGUiLCJTZWdtZW50ZWQiLCJtZXNzYWdlIiwiUG9wY29uZmlybSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRGVsZXRlRW1wbG95ZWVGcm9tUHJvamVjdCIsImRlbGV0ZUVtcGxveWVlIiwiZ2V0RW1wbG95ZWVzIiwibW9tZW50IiwiZ2V0UHJvamVjdEVtcGxveWVlcyIsIkF1dGhvcml0eUNoZWNrIiwiUHJvamVjdEVtcGxveWVlcyIsInByb2plY3RJZCIsImlzTmV3RW1wbG95ZWUiLCJzZXRpc05ld0VtcGxveWVlIiwic2V0SXNFbXBsb3llZVByb2ZpbGUiLCJvd25lcklkIiwiZW1wbG95ZWVzRGF0YSIsInNldEVtcGxveWVlc0RhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvbHVtbnMiLCJ0aXRsZSIsIndpZHRoIiwicmVuZGVyIiwiXyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJoMSIsImtleSIsImZpeGVkIiwiZGF0YUluZGV4Iiwic29ydGVyIiwiZGF0ZV9vZl9iaXJ0aCIsImFnZSIsImRpZmYiLCJwIiwiRGVzaWduYXRpb24iLCJncmFudFBlcm1pc3Npb25Gb3IiLCJkZXNjcmlwdGlvbiIsIm9uQ29uZmlybSIsImNvbmZpcm0iLCJvbkNhbmNlbCIsImNhbmNlbCIsIm9rVGV4dCIsImNhbmNlbFRleHQiLCJwbGFjZW1lbnQiLCJidXR0b24iLCJnZXRFbXBsb3llZXNEYXRhIiwicmVzIiwidGhlbiIsImRhdGEiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzdWNjZXNzIiwiZSIsImRhdGFTb3VyY2UiLCJzY3JvbGwiLCJ4Iiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJyb3dDbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Projects/ProjectEmployees.js/ProjectEmployees.js\n"));

/***/ })

});