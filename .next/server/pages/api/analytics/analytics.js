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
exports.id = "pages/api/analytics/analytics";
exports.ids = ["pages/api/analytics/analytics"];
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

/***/ "(api)/./pages/api/analytics/analytics.js":
/*!******************************************!*\
  !*** ./pages/api/analytics/analytics.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    try {\n        const projects = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Project.count({});\n        const teams = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Teams.count({});\n        const tickets = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Tickets.count({});\n        res.status(200).json({\n            projects,\n            teams,\n            tickets\n        });\n    } catch (error) {\n        console.log(\"Error while getting analytics info at backend: \", error);\n        return res.status(422).json({\n            error: \"Error while getting analytics info at backend\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYW5hbHl0aWNzL2FuYWx5dGljcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUU1QixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELElBQUk7UUFDRixNQUFNQyxRQUFRLEdBQUcsTUFBTVIsaUVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ2pELE1BQU1XLEtBQUssR0FBRyxNQUFNWCwrREFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDNUMsTUFBTWEsT0FBTyxHQUFHLE1BQU1iLGlFQUFzQixDQUFDLEVBQUUsQ0FBQztRQUNoREcsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxRQUFRO1lBQUVHLEtBQUs7WUFBRUUsT0FBTztTQUFFLENBQUMsQ0FBQztJQUNyRCxFQUFFLE9BQU9FLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpREFBaUQsRUFBRUYsS0FBSyxDQUFDLENBQUM7UUFDdEUsT0FBT1osR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQlMsS0FBSyxFQUFFLCtDQUErQztTQUN2RCxDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RvcmF0ZS8uL3BhZ2VzL2FwaS9hbmFseXRpY3MvYW5hbHl0aWNzLmpzP2Q5MTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByaXNtYURCIGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiR0VUXCIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGF3YWl0IFByaXNtYURCLlByb2plY3QuY291bnQoe30pO1xyXG4gICAgY29uc3QgdGVhbXMgPSBhd2FpdCBQcmlzbWFEQi5UZWFtcy5jb3VudCh7fSk7XHJcbiAgICBjb25zdCB0aWNrZXRzID0gYXdhaXQgUHJpc21hREIuVGlja2V0cy5jb3VudCh7fSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHByb2plY3RzLCB0ZWFtcywgdGlja2V0cyB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBnZXR0aW5nIGFuYWx5dGljcyBpbmZvIGF0IGJhY2tlbmQ6IFwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oe1xyXG4gICAgICBlcnJvcjogXCJFcnJvciB3aGlsZSBnZXR0aW5nIGFuYWx5dGljcyBpbmZvIGF0IGJhY2tlbmRcIixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hREIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJwcm9qZWN0cyIsIlByb2plY3QiLCJjb3VudCIsInRlYW1zIiwiVGVhbXMiLCJ0aWNrZXRzIiwiVGlja2V0cyIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/analytics/analytics.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/analytics/analytics.js"));
module.exports = __webpack_exports__;

})();