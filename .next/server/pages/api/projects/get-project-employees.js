"use strict";
(() => {
var exports = {};
exports.id = 7883;
exports.ids = [7883];
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

/***/ 257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);

async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }
    console.log("Get Employee for project End-point hit!");
    const { projectId  } = req.query;
    if (!projectId) {
        return res.status(500).json({
            message: "ProjectId is required!"
        });
    }
    try {
        const project = _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].project.findUnique */ .Z.project.findUnique({
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
        }).catch((err)=>{
            console.log(err);
        });
        const userProjects = _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].userProjects.findMany */ .Z.userProjects.findMany({
            where: {
                project_id: parseInt(projectId)
            },
            select: {
                employee_id: true
            }
        }).then(async (result)=>{
            if (!result) {
                res.status(404).json({
                    error: 404,
                    type: "User Project",
                    message: "Project does not exist!"
                });
            } else {
                let response = [];
                result.map((item)=>{
                    response.push(item.employee_id);
                });
                await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].employee.findMany */ .Z.employee.findMany({
                    where: {
                        id: {
                            in: response
                        },
                        user: {
                            is: {
                                status: "Active"
                            }
                        }
                    },
                    include: {
                        Designation: {
                            select: {
                                id: true,
                                title: true
                            }
                        }
                    }
                }).then((result)=>{
                    if (result) {
                        res.status(200).json({
                            result
                        });
                    } else {
                        res.status(404).json({
                            error: 404,
                            type: "Employees",
                            message: "Employees not found in project!"
                        });
                    }
                });
            }
        }).catch((err)=>{
            console.log(err);
        });
    } catch (error) {
        console.log("Error while getting employees for project at backend: ", error);
        return res.status(422).json({
            error: "Error while getting employees for project at backend: "
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
var __webpack_exports__ = (__webpack_exec__(257));
module.exports = __webpack_exports__;

})();