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
exports.id = "pages/api/analytics/interns-employees";
exports.ids = ["pages/api/analytics/interns-employees"];
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

/***/ "(api)/./pages/api/analytics/interns-employees.js":
/*!**************************************************!*\
  !*** ./pages/api/analytics/interns-employees.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    console.log(\"Get Intern employees End-point hit!\");\n    let designationRes = null;\n    try {\n        designationRes = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].designation.findFirst({\n            where: {\n                title: \"Intern\"\n            }\n        });\n    } catch (error) {\n        console.log(\"Error while getting designation: \", error);\n        return res.status(422).json({\n            error: \"Error while getting Intern employees analytics info at backend\"\n        });\n    }\n    try {\n        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].employee.count({\n            where: {\n                designation: designationRes.id\n            }\n        });\n        console.log(\"Intern employees: \", data);\n        res.status(200).json({\n            count: data\n        });\n    } catch (error1) {\n        console.log(\"Error while getting Intern employees analytics info at backend: \", error1);\n        return res.status(422).json({\n            error: \"Error while getting Intern employees analytics info at backend\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYW5hbHl0aWNzL2ludGVybnMtZW1wbG95ZWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRTVCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLG9CQUFvQjtTQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDbkQsSUFBSUMsY0FBYyxHQUFHLElBQUk7SUFDekIsSUFBSTtRQUNGQSxjQUFjLEdBQUcsTUFBTVYseUVBQThCLENBQUM7WUFDcERhLEtBQUssRUFBRTtnQkFDTEMsS0FBSyxFQUFFLFFBQVE7YUFDaEI7U0FDRixDQUFDLENBQUM7SUFDTCxFQUFFLE9BQU9DLEtBQUssRUFBRTtRQUNkUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRU0sS0FBSyxDQUFDLENBQUM7UUFDeEQsT0FBT1osR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQlMsS0FBSyxFQUFFLGdFQUFnRTtTQUN4RSxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsSUFBSTtRQUNGLE1BQU1DLElBQUksR0FBRyxNQUFNaEIsa0VBQXVCLENBQUM7WUFDekNhLEtBQUssRUFBRTtnQkFDTEYsV0FBVyxFQUFFRCxjQUFjLENBQUNTLEVBQUU7YUFDL0I7U0FDRixDQUFDO1FBQ0ZYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixFQUFFTyxJQUFJLENBQUMsQ0FBQztRQUN4Q2IsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFWSxLQUFLLEVBQUVGLElBQUk7U0FBRSxDQUFDLENBQUM7SUFDeEMsRUFBRSxPQUFPRCxNQUFLLEVBQUU7UUFDZFAsT0FBTyxDQUFDQyxHQUFHLENBQ1Qsa0VBQWtFLEVBQ2xFTSxNQUFLLENBQ04sQ0FBQztRQUNGLE9BQU9aLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDMUJTLEtBQUssRUFBRSxnRUFBZ0U7U0FDeEUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0b3JhdGUvLi9wYWdlcy9hcGkvYW5hbHl0aWNzL2ludGVybnMtZW1wbG95ZWVzLmpzPzM0NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByaXNtYURCIGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiR0VUXCIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKFwiR2V0IEludGVybiBlbXBsb3llZXMgRW5kLXBvaW50IGhpdCFcIik7XHJcbiAgbGV0IGRlc2lnbmF0aW9uUmVzID0gbnVsbDtcclxuICB0cnkge1xyXG4gICAgZGVzaWduYXRpb25SZXMgPSBhd2FpdCBQcmlzbWFEQi5kZXNpZ25hdGlvbi5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHRpdGxlOiBcIkludGVyblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgZ2V0dGluZyBkZXNpZ25hdGlvbjogXCIsIGVycm9yKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQyMikuanNvbih7XHJcbiAgICAgIGVycm9yOiBcIkVycm9yIHdoaWxlIGdldHRpbmcgSW50ZXJuIGVtcGxveWVlcyBhbmFseXRpY3MgaW5mbyBhdCBiYWNrZW5kXCIsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQcmlzbWFEQi5lbXBsb3llZS5jb3VudCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgZGVzaWduYXRpb246IGRlc2lnbmF0aW9uUmVzLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkludGVybiBlbXBsb3llZXM6IFwiLCBkYXRhKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY291bnQ6IGRhdGEgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBcIkVycm9yIHdoaWxlIGdldHRpbmcgSW50ZXJuIGVtcGxveWVlcyBhbmFseXRpY3MgaW5mbyBhdCBiYWNrZW5kOiBcIixcclxuICAgICAgZXJyb3JcclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oe1xyXG4gICAgICBlcnJvcjogXCJFcnJvciB3aGlsZSBnZXR0aW5nIEludGVybiBlbXBsb3llZXMgYW5hbHl0aWNzIGluZm8gYXQgYmFja2VuZFwiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFEQiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJkZXNpZ25hdGlvblJlcyIsImRlc2lnbmF0aW9uIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJ0aXRsZSIsImVycm9yIiwiZGF0YSIsImVtcGxveWVlIiwiY291bnQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/analytics/interns-employees.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/analytics/interns-employees.js"));
module.exports = __webpack_exports__;

})();