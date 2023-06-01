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
exports.id = "pages/api/work-submission/download";
exports.ids = ["pages/api/work-submission/download"];
exports.modules = {

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/work-submission/download.js":
/*!***********************************************!*\
  !*** ./pages/api/work-submission/download.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst serverPath = (staticFilePath)=>{\n    return path__WEBPACK_IMPORTED_MODULE_1___default().join(String(next_config__WEBPACK_IMPORTED_MODULE_2___default()().serverRuntimeConfig.PROJECT_ROOT), staticFilePath, \"work\");\n};\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        res.status(405).json({\n            error: `Method '${req.method}' not allowed! ❌`\n        });\n    }\n    try {\n        const { url  } = req.query;\n        const rootDir = \"/public/uploads\";\n        const dir = serverPath(rootDir);\n        var fileUrl = dir + \"/\" + url;\n        console.log(\"Downloading work submitted \\uD83D\\uDE80: \", url);\n        const path = fileUrl;\n        const file = fs__WEBPACK_IMPORTED_MODULE_0___default().createReadStream(path);\n        res.setHeader(\"Content-Disposition\", \"attachment;filename=\" + url);\n        file.pipe(res);\n    } catch (error) {\n        console.log(error);\n        res.status(500).json({\n            error: \"Error while downloading file:\" + error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvd29yay1zdWJtaXNzaW9uL2Rvd25sb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0I7QUFDSTtBQUNZO0FBRXBDLE1BQU1HLFVBQVUsR0FBRyxDQUFDQyxjQUFjLEdBQUs7SUFDckMsT0FBT0gsZ0RBQVMsQ0FDZEssTUFBTSxDQUFDSixrREFBUyxFQUFFLENBQUNLLG1CQUFtQixDQUFDQyxZQUFZLENBQUMsRUFDcERKLGNBQWMsRUFDZCxNQUFNLENBQ1AsQ0FBQztBQUNKLENBQUM7QUFFYyxlQUFlSyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QkQsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUVMLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1NBQUUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxFQUFFSSxHQUFHLEdBQUUsR0FBR04sR0FBRyxDQUFDTyxLQUFLO1FBRXpCLE1BQU1DLE9BQU8sR0FBRyxpQkFBaUI7UUFDakMsTUFBTUMsR0FBRyxHQUFHaEIsVUFBVSxDQUFDZSxPQUFPLENBQUM7UUFDL0IsSUFBSUUsT0FBTyxHQUFHRCxHQUFHLEdBQUcsR0FBRyxHQUFHSCxHQUFHO1FBRTdCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQywyQ0FBZ0MsRUFBRU4sR0FBRyxDQUFDLENBQUM7UUFFbkQsTUFBTWYsSUFBSSxHQUFHbUIsT0FBTztRQUNwQixNQUFNRyxJQUFJLEdBQUd2QiwwREFBbUIsQ0FBQ0MsSUFBSSxDQUFDO1FBQ3RDVSxHQUFHLENBQUNjLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxzQkFBc0IsR0FBR1QsR0FBRyxDQUFDLENBQUM7UUFDbkVPLElBQUksQ0FBQ0csSUFBSSxDQUFDZixHQUFHLENBQUMsQ0FBQztJQUNqQixFQUFFLE9BQU9JLEtBQUssRUFBRTtRQUNkTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSyxDQUFDLENBQUM7UUFDbkJKLEdBQUcsQ0FDQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNYQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLCtCQUErQixHQUFHQSxLQUFLLENBQUNZLE9BQU87U0FBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0b3JhdGUvLi9wYWdlcy9hcGkvd29yay1zdWJtaXNzaW9uL2Rvd25sb2FkLmpzPzYwZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xyXG5cclxuY29uc3Qgc2VydmVyUGF0aCA9IChzdGF0aWNGaWxlUGF0aCkgPT4ge1xyXG4gIHJldHVybiBwYXRoLmpvaW4oXHJcbiAgICBTdHJpbmcoZ2V0Q29uZmlnKCkuc2VydmVyUnVudGltZUNvbmZpZy5QUk9KRUNUX1JPT1QpLFxyXG4gICAgc3RhdGljRmlsZVBhdGgsXHJcbiAgICBcIndvcmtcIlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiR0VUXCIpIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IGBNZXRob2QgJyR7cmVxLm1ldGhvZH0nIG5vdCBhbGxvd2VkISDinYxgIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdXJsIH0gPSByZXEucXVlcnk7XHJcblxyXG4gICAgY29uc3Qgcm9vdERpciA9IFwiL3B1YmxpYy91cGxvYWRzXCI7XHJcbiAgICBjb25zdCBkaXIgPSBzZXJ2ZXJQYXRoKHJvb3REaXIpO1xyXG4gICAgdmFyIGZpbGVVcmwgPSBkaXIgKyBcIi9cIiArIHVybDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkRvd25sb2FkaW5nIHdvcmsgc3VibWl0dGVkIPCfmoA6IFwiLCB1cmwpO1xyXG5cclxuICAgIGNvbnN0IHBhdGggPSBmaWxlVXJsO1xyXG4gICAgY29uc3QgZmlsZSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0ocGF0aCk7XHJcbiAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1EaXNwb3NpdGlvblwiLCBcImF0dGFjaG1lbnQ7ZmlsZW5hbWU9XCIgKyB1cmwpO1xyXG4gICAgZmlsZS5waXBlKHJlcyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJlc1xyXG4gICAgICAuc3RhdHVzKDUwMClcclxuICAgICAgLmpzb24oeyBlcnJvcjogXCJFcnJvciB3aGlsZSBkb3dubG9hZGluZyBmaWxlOlwiICsgZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImdldENvbmZpZyIsInNlcnZlclBhdGgiLCJzdGF0aWNGaWxlUGF0aCIsImpvaW4iLCJTdHJpbmciLCJzZXJ2ZXJSdW50aW1lQ29uZmlnIiwiUFJPSkVDVF9ST09UIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInVybCIsInF1ZXJ5Iiwicm9vdERpciIsImRpciIsImZpbGVVcmwiLCJjb25zb2xlIiwibG9nIiwiZmlsZSIsImNyZWF0ZVJlYWRTdHJlYW0iLCJzZXRIZWFkZXIiLCJwaXBlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/work-submission/download.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/work-submission/download.js"));
module.exports = __webpack_exports__;

})();