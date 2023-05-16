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
exports.id = "pages/api/employee/search-employee";
exports.ids = ["pages/api/employee/search-employee"];
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

/***/ "(api)/./pages/api/employee/search-employee.js":
/*!***********************************************!*\
  !*** ./pages/api/employee/search-employee.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    console.log(\"Get Search Employee End-point hit!\");\n    const { search  } = req.query;\n    try {\n        const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].employee.findMany({\n            where: {\n                OR: [\n                    {\n                        first_name: {\n                            contains: search\n                        }\n                    },\n                    {\n                        last_name: {\n                            contains: search\n                        }\n                    },\n                    {\n                        email: {\n                            contains: search\n                        }\n                    }, \n                ],\n                user: {\n                    is: {\n                        status: \"Active\"\n                    }\n                }\n            }\n        }).then((result)=>{\n            res.status(200).json({\n                result\n            });\n        }).catch((err)=>{\n            return res.status(500).json({\n                error: 500,\n                message: \"Error while getting Search employees at backend: \" + err.message\n            });\n        });\n    } catch (error) {\n        console.log(\"Error while getting Search employees at backedn: \", error);\n        return res.status(422).json({\n            error: \"Error while getting Search employees at backend: \"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1wbG95ZWUvc2VhcmNoLWVtcGxveWVlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRTVCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLG9CQUFvQjtTQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFDbEQsTUFBTSxFQUFFQyxNQUFNLEdBQUUsR0FBR1IsR0FBRyxDQUFDUyxLQUFLO0lBQzVCLElBQUk7UUFDRixNQUFNQyxNQUFNLEdBQUcsTUFBTVoscUVBQ1YsQ0FBQztZQUNSZSxLQUFLLEVBQUU7Z0JBQ0xDLEVBQUUsRUFBRTtvQkFDRjt3QkFDRUMsVUFBVSxFQUFFOzRCQUNWQyxRQUFRLEVBQUVSLE1BQU07eUJBQ2pCO3FCQUNGO29CQUNEO3dCQUNFUyxTQUFTLEVBQUU7NEJBQ1RELFFBQVEsRUFBRVIsTUFBTTt5QkFDakI7cUJBQ0Y7b0JBQ0Q7d0JBQ0VVLEtBQUssRUFBRTs0QkFDTEYsUUFBUSxFQUFFUixNQUFNO3lCQUNqQjtxQkFDRjtpQkFDRjtnQkFDRFcsSUFBSSxFQUFFO29CQUNKQyxFQUFFLEVBQUU7d0JBQ0ZqQixNQUFNLEVBQUUsUUFBUTtxQkFDakI7aUJBQ0Y7YUFDRjtTQUNGLENBQUMsQ0FDRGtCLElBQUksQ0FBQyxDQUFDWCxNQUFNLEdBQUs7WUFDaEJULEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVNLE1BQU07YUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQ0RZLEtBQUssQ0FBQyxDQUFDQyxHQUFHLEdBQUs7WUFDZCxPQUFPdEIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFDMUJvQixLQUFLLEVBQUUsR0FBRztnQkFDVm5CLE9BQU8sRUFDTCxtREFBbUQsR0FBR2tCLEdBQUcsQ0FBQ2xCLE9BQU87YUFDcEUsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sRUFBRSxPQUFPbUIsS0FBSyxFQUFFO1FBQ2RsQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxtREFBbUQsRUFBRWlCLEtBQUssQ0FBQyxDQUFDO1FBQ3hFLE9BQU92QixHQUFHLENBQ1BFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDWEMsSUFBSSxDQUFDO1lBQUVvQixLQUFLLEVBQUUsbURBQW1EO1NBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdG9yYXRlLy4vcGFnZXMvYXBpL2VtcGxveWVlL3NlYXJjaC1lbXBsb3llZS5qcz9hMGEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlzbWFEQiBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIkdFVFwiKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwiIH0pO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhcIkdldCBTZWFyY2ggRW1wbG95ZWUgRW5kLXBvaW50IGhpdCFcIik7XHJcbiAgY29uc3QgeyBzZWFyY2ggfSA9IHJlcS5xdWVyeTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJpc21hREIuZW1wbG95ZWVcclxuICAgICAgLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgT1I6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGZpcnN0X25hbWU6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBzZWFyY2gsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhc3RfbmFtZToge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IHNlYXJjaCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZW1haWw6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBzZWFyY2gsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgIGlzOiB7XHJcbiAgICAgICAgICAgICAgc3RhdHVzOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICAgIGVycm9yOiA1MDAsXHJcbiAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICBcIkVycm9yIHdoaWxlIGdldHRpbmcgU2VhcmNoIGVtcGxveWVlcyBhdCBiYWNrZW5kOiBcIiArIGVyci5tZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBnZXR0aW5nIFNlYXJjaCBlbXBsb3llZXMgYXQgYmFja2VkbjogXCIsIGVycm9yKTtcclxuICAgIHJldHVybiByZXNcclxuICAgICAgLnN0YXR1cyg0MjIpXHJcbiAgICAgIC5qc29uKHsgZXJyb3I6IFwiRXJyb3Igd2hpbGUgZ2V0dGluZyBTZWFyY2ggZW1wbG95ZWVzIGF0IGJhY2tlbmQ6IFwiIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hREIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoIiwicXVlcnkiLCJyZXN1bHQiLCJlbXBsb3llZSIsImZpbmRNYW55Iiwid2hlcmUiLCJPUiIsImZpcnN0X25hbWUiLCJjb250YWlucyIsImxhc3RfbmFtZSIsImVtYWlsIiwidXNlciIsImlzIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/employee/search-employee.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/employee/search-employee.js"));
module.exports = __webpack_exports__;

})();