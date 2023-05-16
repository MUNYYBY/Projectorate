"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/employee/get-employees";
exports.ids = ["pages/api/employee/get-employees"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nlet PrismaDB;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    PrismaDB = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrismaDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdCQUFnQjtBQUNzQztBQUV0RCxJQUFJRSxRQUFRO0FBRVosSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0wsSUFBSSxDQUFDQyxNQUFNLENBQUNKLE1BQU0sRUFBRTtRQUNsQkksTUFBTSxDQUFDSixNQUFNLEdBQUcsSUFBSUMsd0RBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDREMsUUFBUSxHQUFHRSxNQUFNLENBQUNKLE1BQU0sQ0FBQztBQUMzQixDQUFDO0FBRUQsaUVBQWVFLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RvcmF0ZS8uL2xpYi9wcmlzbWEuanM/NzUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvcHJpc21hLnRzXHJcbmltcG9ydCB7IHByaXNtYSwgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5sZXQgUHJpc21hREI7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgUHJpc21hREIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbn0gZWxzZSB7XHJcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XHJcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gIH1cclxuICBQcmlzbWFEQiA9IGdsb2JhbC5wcmlzbWE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaXNtYURCO1xyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50IiwiUHJpc21hREIiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/employee/get-employees.js":
/*!*********************************************!*\
  !*** ./pages/api/employee/get-employees.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    console.log(\"Get Employee End-point hit!\");\n    try {\n        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].employee.findMany({\n            where: {\n                user: {\n                    is: {\n                        status: \"Active\"\n                    }\n                }\n            },\n            include: {\n                user: {\n                    select: {\n                        id: true,\n                        status: true\n                    }\n                },\n                userProjects: {\n                    select: {\n                        project_id: true\n                    }\n                },\n                UserTeams: {\n                    select: {\n                        team_id: true\n                    }\n                },\n                Designation: {\n                    select: {\n                        id: true,\n                        title: true\n                    }\n                },\n                Role: {\n                    select: {\n                        id: true,\n                        title: true\n                    }\n                }\n            }\n        });\n        // console.log(\"All employees: \", data);\n        res.status(200).json({\n            data\n        });\n    } catch (error) {\n        console.log(\"Error while getting employees at backedn: \", error);\n        return res.status(422).json({\n            error: \"Error while getting employees at backend: \" + error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1wbG95ZWUvZ2V0LWVtcGxveWVlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUU1QixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQzNDLElBQUk7UUFDRixNQUFNQyxJQUFJLEdBQUcsTUFBTVYscUVBQTBCLENBQUM7WUFDNUNhLEtBQUssRUFBRTtnQkFDTEMsSUFBSSxFQUFFO29CQUNKQyxFQUFFLEVBQUU7d0JBQ0ZWLE1BQU0sRUFBRSxRQUFRO3FCQUNqQjtpQkFDRjthQUNGO1lBQ0RXLE9BQU8sRUFBRTtnQkFDUEYsSUFBSSxFQUFFO29CQUNKRyxNQUFNLEVBQUU7d0JBQ05DLEVBQUUsRUFBRSxJQUFJO3dCQUNSYixNQUFNLEVBQUUsSUFBSTtxQkFDYjtpQkFDRjtnQkFDRGMsWUFBWSxFQUFFO29CQUNaRixNQUFNLEVBQUU7d0JBQ05HLFVBQVUsRUFBRSxJQUFJO3FCQUNqQjtpQkFDRjtnQkFDREMsU0FBUyxFQUFFO29CQUNUSixNQUFNLEVBQUU7d0JBQ05LLE9BQU8sRUFBRSxJQUFJO3FCQUNkO2lCQUNGO2dCQUNEQyxXQUFXLEVBQUU7b0JBQ1hOLE1BQU0sRUFBRTt3QkFDTkMsRUFBRSxFQUFFLElBQUk7d0JBQ1JNLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2dCQUNEQyxJQUFJLEVBQUU7b0JBQ0pSLE1BQU0sRUFBRTt3QkFDTkMsRUFBRSxFQUFFLElBQUk7d0JBQ1JNLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO1FBQ0Ysd0NBQXdDO1FBQ3hDckIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFSSxJQUFJO1NBQUUsQ0FBQyxDQUFDO0lBQ2pDLEVBQUUsT0FBT2dCLEtBQUssRUFBRTtRQUNkbEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsNENBQTRDLEVBQUVpQixLQUFLLENBQUMsQ0FBQztRQUNqRSxPQUFPdkIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQm9CLEtBQUssRUFBRSw0Q0FBNEMsR0FBR0EsS0FBSyxDQUFDbkIsT0FBTztTQUNwRSxDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RvcmF0ZS8uL3BhZ2VzL2FwaS9lbXBsb3llZS9nZXQtZW1wbG95ZWVzLmpzPzlkNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByaXNtYURCIGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiR0VUXCIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKFwiR2V0IEVtcGxveWVlIEVuZC1wb2ludCBoaXQhXCIpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgUHJpc21hREIuZW1wbG95ZWUuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIGlzOiB7XHJcbiAgICAgICAgICAgIHN0YXR1czogXCJBY3RpdmVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVzZXJQcm9qZWN0czoge1xyXG4gICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgIHByb2plY3RfaWQ6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVXNlclRlYW1zOiB7XHJcbiAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgdGVhbV9pZDogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBEZXNpZ25hdGlvbjoge1xyXG4gICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgIGlkOiB0cnVlLFxyXG4gICAgICAgICAgICB0aXRsZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBSb2xlOiB7XHJcbiAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHRpdGxlOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkFsbCBlbXBsb3llZXM6IFwiLCBkYXRhKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBnZXR0aW5nIGVtcGxveWVlcyBhdCBiYWNrZWRuOiBcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcclxuICAgICAgZXJyb3I6IFwiRXJyb3Igd2hpbGUgZ2V0dGluZyBlbXBsb3llZXMgYXQgYmFja2VuZDogXCIgKyBlcnJvci5tZXNzYWdlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFEQiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZW1wbG95ZWUiLCJmaW5kTWFueSIsIndoZXJlIiwidXNlciIsImlzIiwiaW5jbHVkZSIsInNlbGVjdCIsImlkIiwidXNlclByb2plY3RzIiwicHJvamVjdF9pZCIsIlVzZXJUZWFtcyIsInRlYW1faWQiLCJEZXNpZ25hdGlvbiIsInRpdGxlIiwiUm9sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/employee/get-employees.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/employee/get-employees.js"));
module.exports = __webpack_exports__;

})();