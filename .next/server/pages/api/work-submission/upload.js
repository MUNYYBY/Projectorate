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
exports.id = "pages/api/work-submission/upload";
exports.ids = ["pages/api/work-submission/upload"];
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

/***/ "(api)/./pages/api/work-submission/upload.js":
/*!*********************************************!*\
  !*** ./pages/api/work-submission/upload.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// const sharp = require(\"sharp\");\nconst serverPath = (staticFilePath)=>{\n    return path__WEBPACK_IMPORTED_MODULE_2___default().join(String(next_config__WEBPACK_IMPORTED_MODULE_3___default()().serverRuntimeConfig.PROJECT_ROOT), staticFilePath, \"work\");\n};\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        res.status(405).json({\n            error: `Method '${req.method}' not allowed! ❌`\n        });\n    }\n    let newFileName = null;\n    let originalFileName = null;\n    try {\n        //Relative directories\n        const rootDir = \"/public/Uploads\";\n        // directory for saving images\n        let dir = serverPath(rootDir);\n        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(dir)) {\n            fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(dir);\n        }\n        // get data from request\n        const data = await new Promise(function(resolve, reject) {\n            // use formidable to get uploaded image and fields setting upload directory to the specified directory\n            // this saves the image with a uuid to the specified directory but with no extension\n            const form = new (formidable__WEBPACK_IMPORTED_MODULE_1___default().IncomingForm)({\n                keepExtensions: true,\n                uploadDir: dir\n            });\n            form.keepExtensions = true;\n            //Save image coming from req\n            form.parse(req, async function(err, fields, files) {\n                if (err) return reject(err);\n                console.log(\"Files:\", fields, files);\n                newFileName = files[\"file\"].newFilename;\n                originalFileName = files[\"file\"].originalFilename;\n                resolve({\n                    fields,\n                    files\n                });\n            });\n        });\n        const apiResponse = {\n            name: originalFileName,\n            newName: newFileName,\n            imagePath: path__WEBPACK_IMPORTED_MODULE_2___default().join(dir, newFileName)\n        };\n        res.status(200).json(apiResponse);\n    } catch (error) {\n        console.log(error);\n        res.status(500).json({\n            error: \"Error while upload file:\" + error.message\n        });\n    }\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvd29yay1zdWJtaXNzaW9uL3VwbG9hZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW9CO0FBQ2dCO0FBQ1o7QUFDWTtBQUNwQyxrQ0FBa0M7QUFFbEMsTUFBTUksVUFBVSxHQUFHLENBQUNDLGNBQWMsR0FBSztJQUNyQyxPQUFPSCxnREFBUyxDQUNkSyxNQUFNLENBQUNKLGtEQUFTLEVBQUUsQ0FBQ0ssbUJBQW1CLENBQUNDLFlBQVksQ0FBQyxFQUNwREosY0FBYyxFQUNkLE1BQU0sQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQUVjLGVBQWVLLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRUwsR0FBRyxDQUFDRSxNQUFNLENBQUMsZ0JBQWdCLENBQUM7U0FBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNELElBQUlJLFdBQVcsR0FBRyxJQUFJO0lBQ3RCLElBQUlDLGdCQUFnQixHQUFHLElBQUk7SUFDM0IsSUFBSTtRQUNGLHNCQUFzQjtRQUN0QixNQUFNQyxPQUFPLEdBQUcsaUJBQWlCO1FBRWpDLDhCQUE4QjtRQUM5QixJQUFJQyxHQUFHLEdBQUdoQixVQUFVLENBQUNlLE9BQU8sQ0FBQztRQUU3QixJQUFJLENBQUNuQixvREFBYSxDQUFDb0IsR0FBRyxDQUFDLEVBQUU7WUFDdkJwQixtREFBWSxDQUFDb0IsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUNELHdCQUF3QjtRQUN4QixNQUFNRyxJQUFJLEdBQUcsTUFBTSxJQUFJQyxPQUFPLENBQUMsU0FBVUMsT0FBTyxFQUFFQyxNQUFNLEVBQUU7WUFDeEQsc0dBQXNHO1lBQ3RHLG9GQUFvRjtZQUNwRixNQUFNQyxJQUFJLEdBQUcsSUFBSTFCLGdFQUF1QixDQUFDO2dCQUN2QzRCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQkMsU0FBUyxFQUFFVixHQUFHO2FBQ2YsQ0FBQztZQUNGTyxJQUFJLENBQUNFLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsNEJBQTRCO1lBQzVCRixJQUFJLENBQUNJLEtBQUssQ0FBQ3BCLEdBQUcsRUFBRSxlQUFnQnFCLEdBQUcsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUU7Z0JBQ2xELElBQUlGLEdBQUcsRUFBRSxPQUFPTixNQUFNLENBQUNNLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFSCxNQUFNLEVBQUVDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQ2pCLFdBQVcsR0FBR2lCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQ0csV0FBVyxDQUFDO2dCQUN4Q25CLGdCQUFnQixHQUFHZ0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDSSxnQkFBZ0IsQ0FBQztnQkFDbERiLE9BQU8sQ0FBQztvQkFBRVEsTUFBTTtvQkFBRUMsS0FBSztpQkFBRSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFDRixNQUFNSyxXQUFXLEdBQUc7WUFDbEJDLElBQUksRUFBRXRCLGdCQUFnQjtZQUN0QnVCLE9BQU8sRUFBRXhCLFdBQVc7WUFDcEJ5QixTQUFTLEVBQUV4QyxnREFBUyxDQUFDa0IsR0FBRyxFQUFFSCxXQUFXLENBQUM7U0FDdkM7UUFDREwsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ3dCLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLEVBQUUsT0FBT3ZCLEtBQUssRUFBRTtRQUNkbUIsT0FBTyxDQUFDQyxHQUFHLENBQUNwQixLQUFLLENBQUMsQ0FBQztRQUNuQkosR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsMEJBQTBCLEdBQUdBLEtBQUssQ0FBQzJCLE9BQU87U0FBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztBQUNILENBQUM7QUFDTSxNQUFNQyxNQUFNLEdBQUc7SUFDcEJDLEdBQUcsRUFBRTtRQUNIQyxVQUFVLEVBQUUsS0FBSztLQUNsQjtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0b3JhdGUvLi9wYWdlcy9hcGkvd29yay1zdWJtaXNzaW9uL3VwbG9hZC5qcz8yOTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IGZvcm1pZGFibGUgZnJvbSBcImZvcm1pZGFibGVcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwibmV4dC9jb25maWdcIjtcclxuLy8gY29uc3Qgc2hhcnAgPSByZXF1aXJlKFwic2hhcnBcIik7XHJcblxyXG5jb25zdCBzZXJ2ZXJQYXRoID0gKHN0YXRpY0ZpbGVQYXRoKSA9PiB7XHJcbiAgcmV0dXJuIHBhdGguam9pbihcclxuICAgIFN0cmluZyhnZXRDb25maWcoKS5zZXJ2ZXJSdW50aW1lQ29uZmlnLlBST0pFQ1RfUk9PVCksXHJcbiAgICBzdGF0aWNGaWxlUGF0aCxcclxuICAgIFwid29ya1wiXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IGBNZXRob2QgJyR7cmVxLm1ldGhvZH0nIG5vdCBhbGxvd2VkISDinYxgIH0pO1xyXG4gIH1cclxuICBsZXQgbmV3RmlsZU5hbWUgPSBudWxsO1xyXG4gIGxldCBvcmlnaW5hbEZpbGVOYW1lID0gbnVsbDtcclxuICB0cnkge1xyXG4gICAgLy9SZWxhdGl2ZSBkaXJlY3Rvcmllc1xyXG4gICAgY29uc3Qgcm9vdERpciA9IFwiL3B1YmxpYy9VcGxvYWRzXCI7XHJcblxyXG4gICAgLy8gZGlyZWN0b3J5IGZvciBzYXZpbmcgaW1hZ2VzXHJcbiAgICBsZXQgZGlyID0gc2VydmVyUGF0aChyb290RGlyKTtcclxuXHJcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZGlyKSkge1xyXG4gICAgICBmcy5ta2RpclN5bmMoZGlyKTtcclxuICAgIH1cclxuICAgIC8vIGdldCBkYXRhIGZyb20gcmVxdWVzdFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgLy8gdXNlIGZvcm1pZGFibGUgdG8gZ2V0IHVwbG9hZGVkIGltYWdlIGFuZCBmaWVsZHMgc2V0dGluZyB1cGxvYWQgZGlyZWN0b3J5IHRvIHRoZSBzcGVjaWZpZWQgZGlyZWN0b3J5XHJcbiAgICAgIC8vIHRoaXMgc2F2ZXMgdGhlIGltYWdlIHdpdGggYSB1dWlkIHRvIHRoZSBzcGVjaWZpZWQgZGlyZWN0b3J5IGJ1dCB3aXRoIG5vIGV4dGVuc2lvblxyXG4gICAgICBjb25zdCBmb3JtID0gbmV3IGZvcm1pZGFibGUuSW5jb21pbmdGb3JtKHtcclxuICAgICAgICBrZWVwRXh0ZW5zaW9uczogdHJ1ZSxcclxuICAgICAgICB1cGxvYWREaXI6IGRpcixcclxuICAgICAgfSk7XHJcbiAgICAgIGZvcm0ua2VlcEV4dGVuc2lvbnMgPSB0cnVlO1xyXG4gICAgICAvL1NhdmUgaW1hZ2UgY29taW5nIGZyb20gcmVxXHJcbiAgICAgIGZvcm0ucGFyc2UocmVxLCBhc3luYyBmdW5jdGlvbiAoZXJyLCBmaWVsZHMsIGZpbGVzKSB7XHJcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZXM6XCIsIGZpZWxkcywgZmlsZXMpO1xyXG4gICAgICAgIG5ld0ZpbGVOYW1lID0gZmlsZXNbXCJmaWxlXCJdLm5ld0ZpbGVuYW1lO1xyXG4gICAgICAgIG9yaWdpbmFsRmlsZU5hbWUgPSBmaWxlc1tcImZpbGVcIl0ub3JpZ2luYWxGaWxlbmFtZTtcclxuICAgICAgICByZXNvbHZlKHsgZmllbGRzLCBmaWxlcyB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGFwaVJlc3BvbnNlID0ge1xyXG4gICAgICBuYW1lOiBvcmlnaW5hbEZpbGVOYW1lLFxyXG4gICAgICBuZXdOYW1lOiBuZXdGaWxlTmFtZSxcclxuICAgICAgaW1hZ2VQYXRoOiBwYXRoLmpvaW4oZGlyLCBuZXdGaWxlTmFtZSksXHJcbiAgICB9O1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oYXBpUmVzcG9uc2UpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkVycm9yIHdoaWxlIHVwbG9hZCBmaWxlOlwiICsgZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBhcGk6IHtcclxuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJmcyIsImZvcm1pZGFibGUiLCJwYXRoIiwiZ2V0Q29uZmlnIiwic2VydmVyUGF0aCIsInN0YXRpY0ZpbGVQYXRoIiwiam9pbiIsIlN0cmluZyIsInNlcnZlclJ1bnRpbWVDb25maWciLCJQUk9KRUNUX1JPT1QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibmV3RmlsZU5hbWUiLCJvcmlnaW5hbEZpbGVOYW1lIiwicm9vdERpciIsImRpciIsImV4aXN0c1N5bmMiLCJta2RpclN5bmMiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmb3JtIiwiSW5jb21pbmdGb3JtIiwia2VlcEV4dGVuc2lvbnMiLCJ1cGxvYWREaXIiLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsIm5ld0ZpbGVuYW1lIiwib3JpZ2luYWxGaWxlbmFtZSIsImFwaVJlc3BvbnNlIiwibmFtZSIsIm5ld05hbWUiLCJpbWFnZVBhdGgiLCJtZXNzYWdlIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/work-submission/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/work-submission/upload.js"));
module.exports = __webpack_exports__;

})();