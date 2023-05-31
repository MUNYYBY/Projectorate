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
exports.id = "pages/api/analytics/associate-employees";
exports.ids = ["pages/api/analytics/associate-employees"];
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

/***/ "(api)/./pages/api/analytics/associate-employees.js":
/*!****************************************************!*\
  !*** ./pages/api/analytics/associate-employees.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    let designationRes = null;\n    try {\n        designationRes = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].designation.findFirst({\n            where: {\n                title: \"Associate\"\n            }\n        });\n    } catch (error) {\n        console.log(\"Error while getting designation: \", error);\n        return res.status(422).json({\n            error: \"Error while getting associate employees analytics info at backend\"\n        });\n    }\n    console.log(\"Get associate employees End-point hit!\");\n    try {\n        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].employee.count({\n            where: {\n                designation: designationRes.id\n            }\n        });\n        console.log(\"associate employees: \", data);\n        res.status(200).json({\n            count: data\n        });\n    } catch (error1) {\n        console.log(\"Error while getting associate employees analytics info at backend: \", error1);\n        return res.status(422).json({\n            error: \"Error while getting associate employees analytics info at backend\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYW5hbHl0aWNzL2Fzc29jaWF0ZS1lbXBsb3llZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFNUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFDRCxJQUFJQyxjQUFjLEdBQUcsSUFBSTtJQUN6QixJQUFJO1FBQ0ZBLGNBQWMsR0FBRyxNQUFNUix5RUFBOEIsQ0FBQztZQUNwRFcsS0FBSyxFQUFFO2dCQUNMQyxLQUFLLEVBQUUsV0FBVzthQUNuQjtTQUNGLENBQUMsQ0FBQztJQUNMLEVBQUUsT0FBT0MsS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1DQUFtQyxFQUFFRixLQUFLLENBQUMsQ0FBQztRQUN4RCxPQUFPVixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQzFCTyxLQUFLLEVBQ0gsbUVBQW1FO1NBQ3RFLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUN0RCxJQUFJO1FBQ0YsTUFBTUMsSUFBSSxHQUFHLE1BQU1oQixrRUFBdUIsQ0FBQztZQUN6Q1csS0FBSyxFQUFFO2dCQUNMRixXQUFXLEVBQUVELGNBQWMsQ0FBQ1csRUFBRTthQUMvQjtTQUNGLENBQUM7UUFDRkwsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLEVBQUVDLElBQUksQ0FBQyxDQUFDO1FBQzNDYixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVZLEtBQUssRUFBRUYsSUFBSTtTQUFFLENBQUMsQ0FBQztJQUN4QyxFQUFFLE9BQU9ILE1BQUssRUFBRTtRQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FDVCxxRUFBcUUsRUFDckVGLE1BQUssQ0FDTixDQUFDO1FBQ0YsT0FBT1YsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQk8sS0FBSyxFQUNILG1FQUFtRTtTQUN0RSxDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RvcmF0ZS8uL3BhZ2VzL2FwaS9hbmFseXRpY3MvYXNzb2NpYXRlLWVtcGxveWVlcy5qcz8xNjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlzbWFEQiBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIkdFVFwiKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwiIH0pO1xyXG4gIH1cclxuICBsZXQgZGVzaWduYXRpb25SZXMgPSBudWxsO1xyXG4gIHRyeSB7XHJcbiAgICBkZXNpZ25hdGlvblJlcyA9IGF3YWl0IFByaXNtYURCLmRlc2lnbmF0aW9uLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdGl0bGU6IFwiQXNzb2NpYXRlXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBnZXR0aW5nIGRlc2lnbmF0aW9uOiBcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcclxuICAgICAgZXJyb3I6XHJcbiAgICAgICAgXCJFcnJvciB3aGlsZSBnZXR0aW5nIGFzc29jaWF0ZSBlbXBsb3llZXMgYW5hbHl0aWNzIGluZm8gYXQgYmFja2VuZFwiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKFwiR2V0IGFzc29jaWF0ZSBlbXBsb3llZXMgRW5kLXBvaW50IGhpdCFcIik7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQcmlzbWFEQi5lbXBsb3llZS5jb3VudCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgZGVzaWduYXRpb246IGRlc2lnbmF0aW9uUmVzLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImFzc29jaWF0ZSBlbXBsb3llZXM6IFwiLCBkYXRhKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY291bnQ6IGRhdGEgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBcIkVycm9yIHdoaWxlIGdldHRpbmcgYXNzb2NpYXRlIGVtcGxveWVlcyBhbmFseXRpY3MgaW5mbyBhdCBiYWNrZW5kOiBcIixcclxuICAgICAgZXJyb3JcclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oe1xyXG4gICAgICBlcnJvcjpcclxuICAgICAgICBcIkVycm9yIHdoaWxlIGdldHRpbmcgYXNzb2NpYXRlIGVtcGxveWVlcyBhbmFseXRpY3MgaW5mbyBhdCBiYWNrZW5kXCIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByaXNtYURCIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZGVzaWduYXRpb25SZXMiLCJkZXNpZ25hdGlvbiIsImZpbmRGaXJzdCIsIndoZXJlIiwidGl0bGUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZW1wbG95ZWUiLCJjb3VudCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/analytics/associate-employees.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/analytics/associate-employees.js"));
module.exports = __webpack_exports__;

})();