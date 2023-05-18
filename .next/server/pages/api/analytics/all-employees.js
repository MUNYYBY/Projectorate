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
exports.id = "pages/api/analytics/all-employees";
exports.ids = ["pages/api/analytics/all-employees"];
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

/***/ "(api)/./pages/api/analytics/all-employees.js":
/*!**********************************************!*\
  !*** ./pages/api/analytics/all-employees.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    console.log(\"Get All employees End-point hit!\");\n    try {\n        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].employee.count();\n        console.log(\"All employees: \", data);\n        res.status(200).json({\n            count: data\n        });\n    } catch (error) {\n        console.log(\"Error while getting all employees analytics info at backend: \", error);\n        return res.status(422).json({\n            error: \"Error while getting all employees analytics info at backend\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYW5hbHl0aWNzL2FsbC1lbXBsb3llZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFNUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUNoRCxJQUFJO1FBQ0YsTUFBTUMsSUFBSSxHQUFHLE1BQU1WLGtFQUF1QixFQUFFO1FBQzVDUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFDckNQLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRU0sS0FBSyxFQUFFRixJQUFJO1NBQUUsQ0FBQyxDQUFDO0lBQ3hDLEVBQUUsT0FBT0csS0FBSyxFQUFFO1FBQ2RMLE9BQU8sQ0FBQ0MsR0FBRyxDQUNULCtEQUErRCxFQUMvREksS0FBSyxDQUNOLENBQUM7UUFDRixPQUFPVixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQzFCTyxLQUFLLEVBQUUsNkRBQTZEO1NBQ3JFLENBQUMsQ0FBQztJQUNMLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdG9yYXRlLy4vcGFnZXMvYXBpL2FuYWx5dGljcy9hbGwtZW1wbG95ZWVzLmpzPzIxNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByaXNtYURCIGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiR0VUXCIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKFwiR2V0IEFsbCBlbXBsb3llZXMgRW5kLXBvaW50IGhpdCFcIik7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQcmlzbWFEQi5lbXBsb3llZS5jb3VudCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJBbGwgZW1wbG95ZWVzOiBcIiwgZGF0YSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGNvdW50OiBkYXRhIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgXCJFcnJvciB3aGlsZSBnZXR0aW5nIGFsbCBlbXBsb3llZXMgYW5hbHl0aWNzIGluZm8gYXQgYmFja2VuZDogXCIsXHJcbiAgICAgIGVycm9yXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcclxuICAgICAgZXJyb3I6IFwiRXJyb3Igd2hpbGUgZ2V0dGluZyBhbGwgZW1wbG95ZWVzIGFuYWx5dGljcyBpbmZvIGF0IGJhY2tlbmRcIixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hREIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVtcGxveWVlIiwiY291bnQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/analytics/all-employees.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/analytics/all-employees.js"));
module.exports = __webpack_exports__;

})();