"use strict";
(() => {
var exports = {};
exports.id = 8523;
exports.ids = [8523];
exports.modules = {

/***/ 2616:
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

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

/***/ 8682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2616);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1423);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);




// const sharp = require("sharp");
const serverPath = (staticFilePath)=>{
    return path__WEBPACK_IMPORTED_MODULE_2___default().join(String(next_config__WEBPACK_IMPORTED_MODULE_3___default()().serverRuntimeConfig.PROJECT_ROOT), staticFilePath, "resouces");
};
async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({
            error: `Method '${req.method}' not allowed! ❌`
        });
    }
    let newFileName = null;
    let originalFileName = null;
    try {
        //Relative directories
        const rootDir = "/public/Uploads";
        // directory for saving images
        let dir = serverPath(rootDir);
        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(dir)) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(dir);
        }
        // get data from request
        const data = await new Promise(function(resolve, reject) {
            // use formidable to get uploaded image and fields setting upload directory to the specified directory
            // this saves the image with a uuid to the specified directory but with no extension
            const form = new (formidable__WEBPACK_IMPORTED_MODULE_1___default().IncomingForm)({
                keepExtensions: true,
                uploadDir: dir
            });
            form.keepExtensions = true;
            //Save image coming from req
            form.parse(req, async function(err, fields, files) {
                if (err) return reject(err);
                console.log("Files:", fields, files);
                newFileName = files["file"].newFilename;
                originalFileName = files["file"].originalFilename;
                resolve({
                    fields,
                    files
                });
            });
        });
        const apiResponse = {
            name: originalFileName,
            newName: newFileName,
            imagePath: path__WEBPACK_IMPORTED_MODULE_2___default().join(dir, newFileName)
        };
        res.status(200).json(apiResponse);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error while upload file:" + error.message
        });
    }
}
const config = {
    api: {
        bodyParser: false
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8682));
module.exports = __webpack_exports__;

})();