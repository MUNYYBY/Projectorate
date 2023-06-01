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
exports.id = "pages/api/resources/download";
exports.ids = ["pages/api/resources/download"];
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

/***/ "(api)/./pages/api/resources/download.js":
/*!*****************************************!*\
  !*** ./pages/api/resources/download.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst serverPath = (staticFilePath)=>{\n    return path__WEBPACK_IMPORTED_MODULE_1___default().join(String(next_config__WEBPACK_IMPORTED_MODULE_2___default()().serverRuntimeConfig.PROJECT_ROOT), staticFilePath, \"resouces\");\n};\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        res.status(405).json({\n            error: `Method '${req.method}' not allowed! ❌`\n        });\n    }\n    try {\n        const { url  } = req.query;\n        const rootDir = \"/public/uploads\";\n        const dir = serverPath(rootDir);\n        var fileUrl = dir + \"/\" + url;\n        console.log(\"Downloading resource \\uD83D\\uDE80: \", url);\n        const path = fileUrl;\n        const file = fs__WEBPACK_IMPORTED_MODULE_0___default().createReadStream(path);\n        res.setHeader(\"Content-Disposition\", \"attachment;filename=\" + url);\n        file.pipe(res);\n    } catch (error) {\n        console.log(error);\n        res.status(500).json({\n            error: \"Error while downloading file:\" + error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVzb3VyY2VzL2Rvd25sb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0I7QUFDSTtBQUNZO0FBRXBDLE1BQU1HLFVBQVUsR0FBRyxDQUFDQyxjQUFjLEdBQUs7SUFDckMsT0FBT0gsZ0RBQVMsQ0FDZEssTUFBTSxDQUFDSixrREFBUyxFQUFFLENBQUNLLG1CQUFtQixDQUFDQyxZQUFZLENBQUMsRUFDcERKLGNBQWMsRUFDZCxVQUFVLENBQ1gsQ0FBQztBQUNKLENBQUM7QUFFYyxlQUFlSyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QkQsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUVMLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1NBQUUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxFQUFFSSxHQUFHLEdBQUUsR0FBR04sR0FBRyxDQUFDTyxLQUFLO1FBRXpCLE1BQU1DLE9BQU8sR0FBRyxpQkFBaUI7UUFDakMsTUFBTUMsR0FBRyxHQUFHaEIsVUFBVSxDQUFDZSxPQUFPLENBQUM7UUFDL0IsSUFBSUUsT0FBTyxHQUFHRCxHQUFHLEdBQUcsR0FBRyxHQUFHSCxHQUFHO1FBRTdCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBMEIsRUFBRU4sR0FBRyxDQUFDLENBQUM7UUFFN0MsTUFBTWYsSUFBSSxHQUFHbUIsT0FBTztRQUNwQixNQUFNRyxJQUFJLEdBQUd2QiwwREFBbUIsQ0FBQ0MsSUFBSSxDQUFDO1FBQ3RDVSxHQUFHLENBQUNjLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxzQkFBc0IsR0FBR1QsR0FBRyxDQUFDLENBQUM7UUFDbkVPLElBQUksQ0FBQ0csSUFBSSxDQUFDZixHQUFHLENBQUMsQ0FBQztJQUNqQixFQUFFLE9BQU9JLEtBQUssRUFBRTtRQUNkTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSyxDQUFDLENBQUM7UUFDbkJKLEdBQUcsQ0FDQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNYQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLCtCQUErQixHQUFHQSxLQUFLLENBQUNZLE9BQU87U0FBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0b3JhdGUvLi9wYWdlcy9hcGkvcmVzb3VyY2VzL2Rvd25sb2FkLmpzPzIwMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xyXG5cclxuY29uc3Qgc2VydmVyUGF0aCA9IChzdGF0aWNGaWxlUGF0aCkgPT4ge1xyXG4gIHJldHVybiBwYXRoLmpvaW4oXHJcbiAgICBTdHJpbmcoZ2V0Q29uZmlnKCkuc2VydmVyUnVudGltZUNvbmZpZy5QUk9KRUNUX1JPT1QpLFxyXG4gICAgc3RhdGljRmlsZVBhdGgsXHJcbiAgICBcInJlc291Y2VzXCJcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIkdFVFwiKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBgTWV0aG9kICcke3JlcS5tZXRob2R9JyBub3QgYWxsb3dlZCEg4p2MYCB9KTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHVybCB9ID0gcmVxLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IHJvb3REaXIgPSBcIi9wdWJsaWMvdXBsb2Fkc1wiO1xyXG4gICAgY29uc3QgZGlyID0gc2VydmVyUGF0aChyb290RGlyKTtcclxuICAgIHZhciBmaWxlVXJsID0gZGlyICsgXCIvXCIgKyB1cmw7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJEb3dubG9hZGluZyByZXNvdXJjZSDwn5qAOiBcIiwgdXJsKTtcclxuXHJcbiAgICBjb25zdCBwYXRoID0gZmlsZVVybDtcclxuICAgIGNvbnN0IGZpbGUgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKHBhdGgpO1xyXG4gICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtRGlzcG9zaXRpb25cIiwgXCJhdHRhY2htZW50O2ZpbGVuYW1lPVwiICsgdXJsKTtcclxuICAgIGZpbGUucGlwZShyZXMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXNcclxuICAgICAgLnN0YXR1cyg1MDApXHJcbiAgICAgIC5qc29uKHsgZXJyb3I6IFwiRXJyb3Igd2hpbGUgZG93bmxvYWRpbmcgZmlsZTpcIiArIGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJnZXRDb25maWciLCJzZXJ2ZXJQYXRoIiwic3RhdGljRmlsZVBhdGgiLCJqb2luIiwiU3RyaW5nIiwic2VydmVyUnVudGltZUNvbmZpZyIsIlBST0pFQ1RfUk9PVCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ1cmwiLCJxdWVyeSIsInJvb3REaXIiLCJkaXIiLCJmaWxlVXJsIiwiY29uc29sZSIsImxvZyIsImZpbGUiLCJjcmVhdGVSZWFkU3RyZWFtIiwic2V0SGVhZGVyIiwicGlwZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/resources/download.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/resources/download.js"));
module.exports = __webpack_exports__;

})();