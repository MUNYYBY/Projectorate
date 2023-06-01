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
exports.id = "pages/api/resources/upload";
exports.ids = ["pages/api/resources/upload"];
exports.modules = {

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

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

/***/ "(api)/./pages/api/resources/upload.js":
/*!***************************************!*\
  !*** ./pages/api/resources/upload.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// const sharp = require(\"sharp\");\nconst serverPath = (staticFilePath)=>{\n    return path__WEBPACK_IMPORTED_MODULE_2___default().join(String(next_config__WEBPACK_IMPORTED_MODULE_3___default()().serverRuntimeConfig.PROJECT_ROOT), staticFilePath, \"resouces\");\n};\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        res.status(405).json({\n            error: `Method '${req.method}' not allowed! ❌`\n        });\n    }\n    let newFileName = null;\n    let originalFileName = null;\n    try {\n        //Relative directories\n        const rootDir = \"/public/Uploads\";\n        // directory for saving images\n        let dir = serverPath(rootDir);\n        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(dir)) {\n            fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(dir);\n        }\n        // get data from request\n        const data = await new Promise(function(resolve, reject) {\n            // use formidable to get uploaded image and fields setting upload directory to the specified directory\n            // this saves the image with a uuid to the specified directory but with no extension\n            const form = new (formidable__WEBPACK_IMPORTED_MODULE_1___default().IncomingForm)({\n                keepExtensions: true,\n                uploadDir: dir\n            });\n            form.keepExtensions = true;\n            //Save image coming from req\n            form.parse(req, async function(err, fields, files) {\n                if (err) return reject(err);\n                console.log(\"Files:\", fields, files);\n                newFileName = files[\"file\"].newFilename;\n                originalFileName = files[\"file\"].originalFilename;\n                resolve({\n                    fields,\n                    files\n                });\n            });\n        });\n        const apiResponse = {\n            name: originalFileName,\n            newName: newFileName,\n            imagePath: path__WEBPACK_IMPORTED_MODULE_2___default().join(dir, newFileName)\n        };\n        res.status(200).json(apiResponse);\n    } catch (error) {\n        console.log(error);\n        res.status(500).json({\n            error: \"Error while upload file:\" + error.message\n        });\n    }\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVzb3VyY2VzL3VwbG9hZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW9CO0FBQ2dCO0FBQ1o7QUFDWTtBQUNwQyxrQ0FBa0M7QUFFbEMsTUFBTUksVUFBVSxHQUFHLENBQUNDLGNBQWMsR0FBSztJQUNyQyxPQUFPSCxnREFBUyxDQUNkSyxNQUFNLENBQUNKLGtEQUFTLEVBQUUsQ0FBQ0ssbUJBQW1CLENBQUNDLFlBQVksQ0FBQyxFQUNwREosY0FBYyxFQUNkLFVBQVUsQ0FDWCxDQUFDO0FBQ0osQ0FBQztBQUVjLGVBQWVLLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRUwsR0FBRyxDQUFDRSxNQUFNLENBQUMsZ0JBQWdCLENBQUM7U0FBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNELElBQUlJLFdBQVcsR0FBRyxJQUFJO0lBQ3RCLElBQUlDLGdCQUFnQixHQUFHLElBQUk7SUFDM0IsSUFBSTtRQUNGLHNCQUFzQjtRQUN0QixNQUFNQyxPQUFPLEdBQUcsaUJBQWlCO1FBRWpDLDhCQUE4QjtRQUM5QixJQUFJQyxHQUFHLEdBQUdoQixVQUFVLENBQUNlLE9BQU8sQ0FBQztRQUU3QixJQUFJLENBQUNuQixvREFBYSxDQUFDb0IsR0FBRyxDQUFDLEVBQUU7WUFDdkJwQixtREFBWSxDQUFDb0IsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUNELHdCQUF3QjtRQUN4QixNQUFNRyxJQUFJLEdBQUcsTUFBTSxJQUFJQyxPQUFPLENBQUMsU0FBVUMsT0FBTyxFQUFFQyxNQUFNLEVBQUU7WUFDeEQsc0dBQXNHO1lBQ3RHLG9GQUFvRjtZQUNwRixNQUFNQyxJQUFJLEdBQUcsSUFBSTFCLGdFQUF1QixDQUFDO2dCQUN2QzRCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQkMsU0FBUyxFQUFFVixHQUFHO2FBQ2YsQ0FBQztZQUNGTyxJQUFJLENBQUNFLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsNEJBQTRCO1lBQzVCRixJQUFJLENBQUNJLEtBQUssQ0FBQ3BCLEdBQUcsRUFBRSxlQUFnQnFCLEdBQUcsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUU7Z0JBQ2xELElBQUlGLEdBQUcsRUFBRSxPQUFPTixNQUFNLENBQUNNLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFSCxNQUFNLEVBQUVDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQ2pCLFdBQVcsR0FBR2lCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQ0csV0FBVyxDQUFDO2dCQUN4Q25CLGdCQUFnQixHQUFHZ0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDSSxnQkFBZ0IsQ0FBQztnQkFDbERiLE9BQU8sQ0FBQztvQkFBRVEsTUFBTTtvQkFBRUMsS0FBSztpQkFBRSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFDRixNQUFNSyxXQUFXLEdBQUc7WUFDbEJDLElBQUksRUFBRXRCLGdCQUFnQjtZQUN0QnVCLE9BQU8sRUFBRXhCLFdBQVc7WUFDcEJ5QixTQUFTLEVBQUV4QyxnREFBUyxDQUFDa0IsR0FBRyxFQUFFSCxXQUFXLENBQUM7U0FDdkM7UUFDREwsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ3dCLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLEVBQUUsT0FBT3ZCLEtBQUssRUFBRTtRQUNkbUIsT0FBTyxDQUFDQyxHQUFHLENBQUNwQixLQUFLLENBQUMsQ0FBQztRQUNuQkosR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsMEJBQTBCLEdBQUdBLEtBQUssQ0FBQzJCLE9BQU87U0FBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztBQUNILENBQUM7QUFDTSxNQUFNQyxNQUFNLEdBQUc7SUFDcEJDLEdBQUcsRUFBRTtRQUNIQyxVQUFVLEVBQUUsS0FBSztLQUNsQjtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0b3JhdGUvLi9wYWdlcy9hcGkvcmVzb3VyY2VzL3VwbG9hZC5qcz9hZmQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IGZvcm1pZGFibGUgZnJvbSBcImZvcm1pZGFibGVcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwibmV4dC9jb25maWdcIjtcclxuLy8gY29uc3Qgc2hhcnAgPSByZXF1aXJlKFwic2hhcnBcIik7XHJcblxyXG5jb25zdCBzZXJ2ZXJQYXRoID0gKHN0YXRpY0ZpbGVQYXRoKSA9PiB7XHJcbiAgcmV0dXJuIHBhdGguam9pbihcclxuICAgIFN0cmluZyhnZXRDb25maWcoKS5zZXJ2ZXJSdW50aW1lQ29uZmlnLlBST0pFQ1RfUk9PVCksXHJcbiAgICBzdGF0aWNGaWxlUGF0aCxcclxuICAgIFwicmVzb3VjZXNcIlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBgTWV0aG9kICcke3JlcS5tZXRob2R9JyBub3QgYWxsb3dlZCEg4p2MYCB9KTtcclxuICB9XHJcbiAgbGV0IG5ld0ZpbGVOYW1lID0gbnVsbDtcclxuICBsZXQgb3JpZ2luYWxGaWxlTmFtZSA9IG51bGw7XHJcbiAgdHJ5IHtcclxuICAgIC8vUmVsYXRpdmUgZGlyZWN0b3JpZXNcclxuICAgIGNvbnN0IHJvb3REaXIgPSBcIi9wdWJsaWMvVXBsb2Fkc1wiO1xyXG5cclxuICAgIC8vIGRpcmVjdG9yeSBmb3Igc2F2aW5nIGltYWdlc1xyXG4gICAgbGV0IGRpciA9IHNlcnZlclBhdGgocm9vdERpcik7XHJcblxyXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGRpcikpIHtcclxuICAgICAgZnMubWtkaXJTeW5jKGRpcik7XHJcbiAgICB9XHJcbiAgICAvLyBnZXQgZGF0YSBmcm9tIHJlcXVlc3RcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIC8vIHVzZSBmb3JtaWRhYmxlIHRvIGdldCB1cGxvYWRlZCBpbWFnZSBhbmQgZmllbGRzIHNldHRpbmcgdXBsb2FkIGRpcmVjdG9yeSB0byB0aGUgc3BlY2lmaWVkIGRpcmVjdG9yeVxyXG4gICAgICAvLyB0aGlzIHNhdmVzIHRoZSBpbWFnZSB3aXRoIGEgdXVpZCB0byB0aGUgc3BlY2lmaWVkIGRpcmVjdG9yeSBidXQgd2l0aCBubyBleHRlbnNpb25cclxuICAgICAgY29uc3QgZm9ybSA9IG5ldyBmb3JtaWRhYmxlLkluY29taW5nRm9ybSh7XHJcbiAgICAgICAga2VlcEV4dGVuc2lvbnM6IHRydWUsXHJcbiAgICAgICAgdXBsb2FkRGlyOiBkaXIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3JtLmtlZXBFeHRlbnNpb25zID0gdHJ1ZTtcclxuICAgICAgLy9TYXZlIGltYWdlIGNvbWluZyBmcm9tIHJlcVxyXG4gICAgICBmb3JtLnBhcnNlKHJlcSwgYXN5bmMgZnVuY3Rpb24gKGVyciwgZmllbGRzLCBmaWxlcykge1xyXG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGVzOlwiLCBmaWVsZHMsIGZpbGVzKTtcclxuICAgICAgICBuZXdGaWxlTmFtZSA9IGZpbGVzW1wiZmlsZVwiXS5uZXdGaWxlbmFtZTtcclxuICAgICAgICBvcmlnaW5hbEZpbGVOYW1lID0gZmlsZXNbXCJmaWxlXCJdLm9yaWdpbmFsRmlsZW5hbWU7XHJcbiAgICAgICAgcmVzb2x2ZSh7IGZpZWxkcywgZmlsZXMgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBhcGlSZXNwb25zZSA9IHtcclxuICAgICAgbmFtZTogb3JpZ2luYWxGaWxlTmFtZSxcclxuICAgICAgbmV3TmFtZTogbmV3RmlsZU5hbWUsXHJcbiAgICAgIGltYWdlUGF0aDogcGF0aC5qb2luKGRpciwgbmV3RmlsZU5hbWUpLFxyXG4gICAgfTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFwaVJlc3BvbnNlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJFcnJvciB3aGlsZSB1cGxvYWQgZmlsZTpcIiArIGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG4iXSwibmFtZXMiOlsiZnMiLCJmb3JtaWRhYmxlIiwicGF0aCIsImdldENvbmZpZyIsInNlcnZlclBhdGgiLCJzdGF0aWNGaWxlUGF0aCIsImpvaW4iLCJTdHJpbmciLCJzZXJ2ZXJSdW50aW1lQ29uZmlnIiwiUFJPSkVDVF9ST09UIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm5ld0ZpbGVOYW1lIiwib3JpZ2luYWxGaWxlTmFtZSIsInJvb3REaXIiLCJkaXIiLCJleGlzdHNTeW5jIiwibWtkaXJTeW5jIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZm9ybSIsIkluY29taW5nRm9ybSIsImtlZXBFeHRlbnNpb25zIiwidXBsb2FkRGlyIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJuZXdGaWxlbmFtZSIsIm9yaWdpbmFsRmlsZW5hbWUiLCJhcGlSZXNwb25zZSIsIm5hbWUiLCJuZXdOYW1lIiwiaW1hZ2VQYXRoIiwibWVzc2FnZSIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/resources/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/resources/upload.js"));
module.exports = __webpack_exports__;

})();