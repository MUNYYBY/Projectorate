"use strict";
(() => {
var exports = {};
exports.id = 5315;
exports.ids = [5315];
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

/***/ 657:
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
    console.log("Update project End-point hit!");
    const reqBody = req.body;
    const LogsOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].LogsOperations.findMany */ .Z.LogsOperations.findMany({});
    if (!reqBody.id || !reqBody.project_name || !reqBody.description || !reqBody.project_domain_id || !reqBody.user_id) {
        return res.status(500).json({
            error: 500,
            message: "Id, description, Project name, userId, and project domain id is required!"
        });
    }
    try {
        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Project.update */ .Z.Project.update({
            where: {
                id: parseInt(reqBody.id)
            },
            data: {
                project_name: reqBody.project_name,
                description: reqBody.description,
                projectDomain: {
                    connect: {
                        id: reqBody.project_domain_id
                    }
                }
            }
        }).then(async (result)=>{
            try {
                const response = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Logs.create */ .Z.Logs.create({
                    data: {
                        operation: "Updated Project",
                        description: "Updated Project during the update project phase",
                        project_name: result.project_name,
                        user: {
                            connect: {
                                id: reqBody.user_id
                            }
                        },
                        project: {
                            connect: {
                                id: result.id
                            }
                        },
                        LogsOperations: {
                            connect: {
                                id: LogsOperations.find((t)=>t.title === "Created Project")?.id
                            }
                        }
                    }
                });
            } catch (error) {
                console.log("Error while creating log for project: ", error);
            }
            res.status(200).json(result);
        });
    } catch (error) {
        console.log("Error while updating project at backend: ", error);
        return res.status(422).json({
            error: "Error while updating Create project at backend: " + error.message
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
var __webpack_exports__ = (__webpack_exec__(657));
module.exports = __webpack_exports__;

})();