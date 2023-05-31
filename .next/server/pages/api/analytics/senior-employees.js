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
exports.id = "pages/api/analytics/senior-employees";
exports.ids = ["pages/api/analytics/senior-employees"];
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

/***/ "(api)/./pages/api/analytics/senior-employees.js":
/*!*************************************************!*\
  !*** ./pages/api/analytics/senior-employees.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    console.log(\"Get Senior employees End-point hit!\");\n    let designationRes = null;\n    try {\n        designationRes = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].designation.findFirst({\n            where: {\n                title: \"Senior\"\n            }\n        });\n    } catch (error) {\n        console.log(\"Error while getting designation: \", error);\n        return res.status(422).json({\n            error: \"Error while getting Senior employees analytics info at backend\"\n        });\n    }\n    try {\n        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].employee.count({\n            where: {\n                designation: designationRes.id\n            }\n        });\n        console.log(\"Senior employees: \", data);\n        res.status(200).json({\n            count: data\n        });\n    } catch (error1) {\n        console.log(\"Error while getting Senior employees analytics info at backend: \", error1);\n        return res.status(422).json({\n            error: \"Error while getting Senior employees analytics info at backend\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYW5hbHl0aWNzL3Nlbmlvci1lbXBsb3llZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFNUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUNuRCxJQUFJQyxjQUFjLEdBQUcsSUFBSTtJQUN6QixJQUFJO1FBQ0ZBLGNBQWMsR0FBRyxNQUFNVix5RUFBOEIsQ0FBQztZQUNwRGEsS0FBSyxFQUFFO2dCQUNMQyxLQUFLLEVBQUUsUUFBUTthQUNoQjtTQUNGLENBQUMsQ0FBQztJQUNMLEVBQUUsT0FBT0MsS0FBSyxFQUFFO1FBQ2RQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1DQUFtQyxFQUFFTSxLQUFLLENBQUMsQ0FBQztRQUN4RCxPQUFPWixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQzFCUyxLQUFLLEVBQUUsZ0VBQWdFO1NBQ3hFLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJO1FBQ0YsTUFBTUMsSUFBSSxHQUFHLE1BQU1oQixrRUFBdUIsQ0FBQztZQUN6Q2EsS0FBSyxFQUFFO2dCQUNMRixXQUFXLEVBQUVELGNBQWMsQ0FBQ1MsRUFBRTthQUMvQjtTQUNGLENBQUM7UUFDRlgsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLEVBQUVPLElBQUksQ0FBQyxDQUFDO1FBQ3hDYixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVZLEtBQUssRUFBRUYsSUFBSTtTQUFFLENBQUMsQ0FBQztJQUN4QyxFQUFFLE9BQU9ELE1BQUssRUFBRTtRQUNkUCxPQUFPLENBQUNDLEdBQUcsQ0FDVCxrRUFBa0UsRUFDbEVNLE1BQUssQ0FDTixDQUFDO1FBQ0YsT0FBT1osR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQlMsS0FBSyxFQUFFLGdFQUFnRTtTQUN4RSxDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RvcmF0ZS8uL3BhZ2VzL2FwaS9hbmFseXRpY3Mvc2VuaW9yLWVtcGxveWVlcy5qcz8xMDY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlzbWFEQiBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIkdFVFwiKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwiIH0pO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhcIkdldCBTZW5pb3IgZW1wbG95ZWVzIEVuZC1wb2ludCBoaXQhXCIpO1xyXG4gIGxldCBkZXNpZ25hdGlvblJlcyA9IG51bGw7XHJcbiAgdHJ5IHtcclxuICAgIGRlc2lnbmF0aW9uUmVzID0gYXdhaXQgUHJpc21hREIuZGVzaWduYXRpb24uZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICB0aXRsZTogXCJTZW5pb3JcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGdldHRpbmcgZGVzaWduYXRpb246IFwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjIpLmpzb24oe1xyXG4gICAgICBlcnJvcjogXCJFcnJvciB3aGlsZSBnZXR0aW5nIFNlbmlvciBlbXBsb3llZXMgYW5hbHl0aWNzIGluZm8gYXQgYmFja2VuZFwiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgUHJpc21hREIuZW1wbG95ZWUuY291bnQoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGRlc2lnbmF0aW9uOiBkZXNpZ25hdGlvblJlcy5pZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJTZW5pb3IgZW1wbG95ZWVzOiBcIiwgZGF0YSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGNvdW50OiBkYXRhIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgXCJFcnJvciB3aGlsZSBnZXR0aW5nIFNlbmlvciBlbXBsb3llZXMgYW5hbHl0aWNzIGluZm8gYXQgYmFja2VuZDogXCIsXHJcbiAgICAgIGVycm9yXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcclxuICAgICAgZXJyb3I6IFwiRXJyb3Igd2hpbGUgZ2V0dGluZyBTZW5pb3IgZW1wbG95ZWVzIGFuYWx5dGljcyBpbmZvIGF0IGJhY2tlbmRcIixcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hREIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiZGVzaWduYXRpb25SZXMiLCJkZXNpZ25hdGlvbiIsImZpbmRGaXJzdCIsIndoZXJlIiwidGl0bGUiLCJlcnJvciIsImRhdGEiLCJlbXBsb3llZSIsImNvdW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/analytics/senior-employees.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/analytics/senior-employees.js"));
module.exports = __webpack_exports__;

})();