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
exports.id = "pages/api/employee/get-employee-profile";
exports.ids = ["pages/api/employee/get-employee-profile"];
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

/***/ "(api)/./pages/api/employee/get-employee-profile.js":
/*!****************************************************!*\
  !*** ./pages/api/employee/get-employee-profile.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    console.log(\"Get Employee Profile End-point hit!\");\n    const { employeeId  } = req.query;\n    try {\n        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].employee.findUnique({\n            where: {\n                id: parseInt(employeeId)\n            },\n            include: {\n                userProjects: {\n                    select: {\n                        project_id: true,\n                        project: true\n                    }\n                },\n                UserTeams: {\n                    select: {\n                        team_id: true,\n                        team: true\n                    }\n                },\n                Designation: true,\n                Role: true\n            }\n        });\n        console.log(\"Employee Profile: \", data);\n        res.status(200).json({\n            data\n        });\n    } catch (error) {\n        console.log(\"Error while getting Employee Profile at backedn: \", error);\n        return res.status(422).json({\n            error: \"Error while getting Employee Profile at backend: \" + error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1wbG95ZWUvZ2V0LWVtcGxveWVlLXByb2ZpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFNUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUVuRCxNQUFNLEVBQUVDLFVBQVUsR0FBRSxHQUFHUixHQUFHLENBQUNTLEtBQUs7SUFDaEMsSUFBSTtRQUNGLE1BQU1DLElBQUksR0FBRyxNQUFNWix1RUFBNEIsQ0FBQztZQUM5Q2UsS0FBSyxFQUFFO2dCQUNMQyxFQUFFLEVBQUVDLFFBQVEsQ0FBQ1AsVUFBVSxDQUFDO2FBQ3pCO1lBQ0RRLE9BQU8sRUFBRTtnQkFDUEMsWUFBWSxFQUFFO29CQUNaQyxNQUFNLEVBQUU7d0JBQ05DLFVBQVUsRUFBRSxJQUFJO3dCQUNoQkMsT0FBTyxFQUFFLElBQUk7cUJBQ2Q7aUJBQ0Y7Z0JBQ0RDLFNBQVMsRUFBRTtvQkFDVEgsTUFBTSxFQUFFO3dCQUNOSSxPQUFPLEVBQUUsSUFBSTt3QkFDYkMsSUFBSSxFQUFFLElBQUk7cUJBQ1g7aUJBQ0Y7Z0JBQ0RDLFdBQVcsRUFBRSxJQUFJO2dCQUNqQkMsSUFBSSxFQUFFLElBQUk7YUFDWDtTQUNGLENBQUM7UUFDRm5CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixFQUFFRyxJQUFJLENBQUMsQ0FBQztRQUN4Q1QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFTSxJQUFJO1NBQUUsQ0FBQyxDQUFDO0lBQ2pDLEVBQUUsT0FBT2dCLEtBQUssRUFBRTtRQUNkcEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsbURBQW1ELEVBQUVtQixLQUFLLENBQUMsQ0FBQztRQUN4RSxPQUFPekIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQnNCLEtBQUssRUFDSCxtREFBbUQsR0FBR0EsS0FBSyxDQUFDckIsT0FBTztTQUN0RSxDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RvcmF0ZS8uL3BhZ2VzL2FwaS9lbXBsb3llZS9nZXQtZW1wbG95ZWUtcHJvZmlsZS5qcz82MjY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlzbWFEQiBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIkdFVFwiKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwiIH0pO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhcIkdldCBFbXBsb3llZSBQcm9maWxlIEVuZC1wb2ludCBoaXQhXCIpO1xyXG5cclxuICBjb25zdCB7IGVtcGxveWVlSWQgfSA9IHJlcS5xdWVyeTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IFByaXNtYURCLmVtcGxveWVlLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBwYXJzZUludChlbXBsb3llZUlkKSxcclxuICAgICAgfSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIHVzZXJQcm9qZWN0czoge1xyXG4gICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgIHByb2plY3RfaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHByb2plY3Q6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVXNlclRlYW1zOiB7XHJcbiAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgdGVhbV9pZDogdHJ1ZSxcclxuICAgICAgICAgICAgdGVhbTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBEZXNpZ25hdGlvbjogdHJ1ZSxcclxuICAgICAgICBSb2xlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVtcGxveWVlIFByb2ZpbGU6IFwiLCBkYXRhKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBnZXR0aW5nIEVtcGxveWVlIFByb2ZpbGUgYXQgYmFja2VkbjogXCIsIGVycm9yKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7XHJcbiAgICAgIGVycm9yOlxyXG4gICAgICAgIFwiRXJyb3Igd2hpbGUgZ2V0dGluZyBFbXBsb3llZSBQcm9maWxlIGF0IGJhY2tlbmQ6IFwiICsgZXJyb3IubWVzc2FnZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hREIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiZW1wbG95ZWVJZCIsInF1ZXJ5IiwiZGF0YSIsImVtcGxveWVlIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJwYXJzZUludCIsImluY2x1ZGUiLCJ1c2VyUHJvamVjdHMiLCJzZWxlY3QiLCJwcm9qZWN0X2lkIiwicHJvamVjdCIsIlVzZXJUZWFtcyIsInRlYW1faWQiLCJ0ZWFtIiwiRGVzaWduYXRpb24iLCJSb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/employee/get-employee-profile.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/employee/get-employee-profile.js"));
module.exports = __webpack_exports__;

})();