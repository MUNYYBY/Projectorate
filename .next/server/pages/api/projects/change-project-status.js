"use strict";
(() => {
var exports = {};
exports.id = 1304;
exports.ids = [1304];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
// lib/prisma.ts

let PrismaDB;
if (true) {
    PrismaDB = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
} else {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrismaDB);


/***/ }),

/***/ 9951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);

async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }
    console.log("Update Project Status End-point hit!");
    const { projectId , statusId  } = req.query;
    if (!projectId || !statusId) {
        return res.status(500).json({
            message: "projectId & statusId is required!"
        });
    }
    try {
        const project = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Project.findUnique */ .Z.Project.findUnique({
            where: {
                id: parseInt(projectId)
            }
        }).then((result)=>{
            if (result) {
                return result;
            } else {
                res.status(404).json({
                    error: 404,
                    type: "Project",
                    message: "ProjectTicket Does not exists!"
                });
            }
        });
        const status = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].ProjectStatus.findUnique */ .Z.ProjectStatus.findUnique({
            where: {
                id: parseInt(statusId)
            }
        }).then((result)=>{
            if (result) {
                return result;
            } else {
                res.status(404).json({
                    error: 404,
                    type: "Status",
                    message: "Project status Does not exists!"
                });
            }
        });
        if (project && status) {
            const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Project.update */ .Z.Project.update({
                where: {
                    id: parseInt(projectId)
                },
                data: {
                    ProjectStatus: {
                        connect: {
                            id: parseInt(statusId)
                        }
                    }
                }
            }).then((result)=>{
                res.status(200).json({
                    result
                });
            }).catch((err)=>{
                res.status(500).json({
                    error: 500,
                    type: "Project",
                    message: "Error while Updating Project Status!",
                    errMessage: err.message
                });
            });
        }
    } catch (error) {
        console.log("Error while Updating Project Status at backend: ", error);
        return res.status(422).json({
            error: "Error while getting Updating Project Status at backend: " + error.message
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
var __webpack_exports__ = (__webpack_exec__(9951));
module.exports = __webpack_exports__;

})();