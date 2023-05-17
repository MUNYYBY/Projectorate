"use strict";
(() => {
var exports = {};
exports.id = 3262;
exports.ids = [3262];
exports.modules = {

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 1423:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 9595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1423);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);



const serverPath = (staticFilePath)=>{
    return path__WEBPACK_IMPORTED_MODULE_1___default().join(String(next_config__WEBPACK_IMPORTED_MODULE_2___default()().serverRuntimeConfig.PROJECT_ROOT), staticFilePath, "resouces");
};
async function handler(req, res) {
    if (req.method !== "GET") {
        res.status(405).json({
            error: `Method '${req.method}' not allowed! ❌`
        });
    }
    try {
        const { url  } = req.query;
        const rootDir = "/public/uploads";
        const dir = serverPath(rootDir);
        var fileUrl = dir + "/" + url;
        console.log("Downloading \uD83D\uDE80: ", url);
        const path = fileUrl;
        const file = fs__WEBPACK_IMPORTED_MODULE_0___default().createReadStream(path);
        res.setHeader("Content-Disposition", "attachment;filename=" + url);
        file.pipe(res);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error while downloading file:" + error.message
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9595));
module.exports = __webpack_exports__;

})();