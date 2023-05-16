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
exports.id = "pages/api/teams/get-team";
exports.ids = ["pages/api/teams/get-team"];
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

/***/ "(api)/./pages/api/teams/get-team.js":
/*!*************************************!*\
  !*** ./pages/api/teams/get-team.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    console.log(\"Get single Team End-point hit!\");\n    const { teamId  } = req.query;\n    if (!teamId) {\n        return res.status(500).json({\n            message: \"TeamId is required!\"\n        });\n    }\n    try {\n        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Teams.findUnique({\n            where: {\n                id: parseInt(teamId)\n            },\n            include: {\n                project: true\n            }\n        });\n        if (data) {\n            res.status(200).json({\n                data\n            });\n        } else {\n            res.status(404).json({\n                error: 404,\n                message: \"Team not found\"\n            });\n        }\n    } catch (error) {\n        console.log(\"Error while getting single Team at backend: \", error);\n        return res.status(422).json({\n            error: \"Error while getting single Team at backend: \",\n            error\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVhbXMvZ2V0LXRlYW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFNUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUM5QyxNQUFNLEVBQUVDLE1BQU0sR0FBRSxHQUFHUixHQUFHLENBQUNTLEtBQUs7SUFDNUIsSUFBSSxDQUFDRCxNQUFNLEVBQUU7UUFDWCxPQUFPUCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxxQkFBcUI7U0FBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNSyxJQUFJLEdBQUcsTUFBTVosb0VBQXlCLENBQUM7WUFDM0NlLEtBQUssRUFBRTtnQkFDTEMsRUFBRSxFQUFFQyxRQUFRLENBQUNQLE1BQU0sQ0FBQzthQUNyQjtZQUNEUSxPQUFPLEVBQUU7Z0JBQ1BDLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7U0FDRixDQUFDO1FBQ0YsSUFBSVAsSUFBSSxFQUFFO1lBQ1JULEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVNLElBQUk7YUFBRSxDQUFDLENBQUM7UUFDakMsT0FBTztZQUNMVCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFYyxLQUFLLEVBQUUsR0FBRztnQkFBRWIsT0FBTyxFQUFFLGdCQUFnQjthQUFFLENBQUMsQ0FBQztRQUNsRSxDQUFDO0lBQ0gsRUFBRSxPQUFPYSxLQUFLLEVBQUU7UUFDZFosT0FBTyxDQUFDQyxHQUFHLENBQUMsOENBQThDLEVBQUVXLEtBQUssQ0FBQyxDQUFDO1FBQ25FLE9BQU9qQixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQzFCYyxLQUFLLEVBQUUsOENBQThDO1lBQ3JEQSxLQUFLO1NBQ04sQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0b3JhdGUvLi9wYWdlcy9hcGkvdGVhbXMvZ2V0LXRlYW0uanM/ZDNjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJpc21hREIgZnJvbSBcIi4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJHRVRcIikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coXCJHZXQgc2luZ2xlIFRlYW0gRW5kLXBvaW50IGhpdCFcIik7XHJcbiAgY29uc3QgeyB0ZWFtSWQgfSA9IHJlcS5xdWVyeTtcclxuICBpZiAoIXRlYW1JZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJUZWFtSWQgaXMgcmVxdWlyZWQhXCIgfSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IFByaXNtYURCLlRlYW1zLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBwYXJzZUludCh0ZWFtSWQpLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgcHJvamVjdDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogNDA0LCBtZXNzYWdlOiBcIlRlYW0gbm90IGZvdW5kXCIgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgZ2V0dGluZyBzaW5nbGUgVGVhbSBhdCBiYWNrZW5kOiBcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcclxuICAgICAgZXJyb3I6IFwiRXJyb3Igd2hpbGUgZ2V0dGluZyBzaW5nbGUgVGVhbSBhdCBiYWNrZW5kOiBcIixcclxuICAgICAgZXJyb3IsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByaXNtYURCIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInRlYW1JZCIsInF1ZXJ5IiwiZGF0YSIsIlRlYW1zIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJwYXJzZUludCIsImluY2x1ZGUiLCJwcm9qZWN0IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/teams/get-team.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/teams/get-team.js"));
module.exports = __webpack_exports__;

})();