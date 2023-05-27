"use strict";
(() => {
var exports = {};
exports.id = 8523;
exports.ids = [8523];
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

/***/ 3228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
;// CONCATENATED MODULE: external "formidable"
const external_formidable_namespaceObject = require("formidable");
var external_formidable_default = /*#__PURE__*/__webpack_require__.n(external_formidable_namespaceObject);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1423);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(4558);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);
;// CONCATENATED MODULE: ./pages/api/resources/upload.js




// const sharp = require("sharp");
const serverPath = (staticFilePath)=>{
    return external_path_default().join(String(config_default()().serverRuntimeConfig.PROJECT_ROOT), staticFilePath, "resouces");
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
        if (!external_fs_default().existsSync(dir)) {
            external_fs_default().mkdirSync(dir);
        }
        // get data from request
        const data = await new Promise(function(resolve, reject) {
            // use formidable to get uploaded image and fields setting upload directory to the specified directory
            // this saves the image with a uuid to the specified directory but with no extension
            const form = new (external_formidable_default()).IncomingForm({
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
            imagePath: external_path_default().join(dir, newFileName)
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
var __webpack_exports__ = (__webpack_exec__(3228));
module.exports = __webpack_exports__;

})();