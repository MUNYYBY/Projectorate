"use strict";
(() => {
var exports = {};
exports.id = 5116;
exports.ids = [5116];
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

/***/ 2034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);

async function handler(req, res) {
    if (req.method !== "DELETE") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }
    console.log("Delete single project End-point hit!");
    const { projectId , user_id  } = req.query;
    const LogsOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].LogsOperations.findMany */ .Z.LogsOperations.findMany({});
    try {
        const checkget = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Project.findUnique */ .Z.Project.findUnique({
            where: {
                id: parseInt(projectId)
            }
        }).then((result)=>{
            if (!result) {
                res.status(404).json({
                    error: 404,
                    type: "Project",
                    message: "Project does not exist!"
                });
            }
        });
        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Project["delete"] */ .Z.Project["delete"]({
            where: {
                id: parseInt(projectId)
            }
        }).then(async (result)=>{
            if (result) {
                try {
                    const response = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Logs.create */ .Z.Logs.create({
                        data: {
                            operation: "Deleted Project",
                            description: "Deleted Project during the project deletion phase",
                            project_name: result.project_name,
                            user: {
                                connect: {
                                    id: parseInt(user_id)
                                }
                            },
                            LogsOperations: {
                                connect: {
                                    id: LogsOperations.find((t)=>t.title === "Deleted Project")?.id
                                }
                            }
                        }
                    });
                } catch (error) {
                    console.log("Error while deleting log for project: ", error);
                }
                res.status(200).json({
                    code: 200,
                    type: "Project and Userproject deletion!",
                    message1: `Project successfully deleted with id: ${projectId}`
                });
            }
        }).catch((err)=>{
            res.status(500).json({
                error: 500,
                type: "Project",
                message: `Error while deleting Project with id ${projectId}: ${err.message}`
            });
        });
    } catch (error) {
        console.log("Delete while getting single project at backend: ", error);
        return res.status(422).json({
            error: "Delete while getting single project at backend: ",
            error
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
var __webpack_exports__ = (__webpack_exec__(2034));
module.exports = __webpack_exports__;

})();