"use strict";
(() => {
var exports = {};
exports.id = 7058;
exports.ids = [7058];
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

/***/ 4289:
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
    console.log("Delete User from project End-point hit!");
    const { employeeId , projectId , ownerId  } = req.query;
    if (!employeeId || !projectId || !ownerId) {
        return res.status(500).json({
            message: "employeeId, ownerId & projectId are both required!"
        });
    }
    const LogsOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].LogsOperations.findMany */ .Z.LogsOperations.findMany({});
    try {
        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].userProjects["delete"] */ .Z.userProjects["delete"]({
            where: {
                project_id_employee_id: {
                    project_id: parseInt(projectId),
                    employee_id: parseInt(employeeId)
                }
            },
            include: {
                project: true,
                employee: true
            }
        }).then(async (result)=>{
            if (result) {
                //record log
                try {
                    const response = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Logs.create */ .Z.Logs.create({
                        data: {
                            operation: "Removed from Project",
                            description: "Removed from Project during the removing phase",
                            project_name: result.project.project_name,
                            employee_name: result.employee.first_name + " " + result.employee.last_name,
                            user: {
                                connect: {
                                    id: parseInt(ownerId)
                                }
                            },
                            project: {
                                connect: {
                                    id: result.project.id
                                }
                            },
                            employee: {
                                connect: {
                                    id: result.employee.id
                                }
                            },
                            LogsOperations: {
                                connect: {
                                    id: LogsOperations.find((t)=>t.title === "Removed from Project")?.id
                                }
                            }
                        }
                    });
                } catch (error) {
                    console.log("Error while creating log for Removing user from project: ", error);
                }
                res.status(200).json({
                    code: 200,
                    type: "User project deletion!",
                    message: `User successfully deleted from project with id: ${employeeId}`,
                    result
                });
            }
        }).catch((err)=>{
            console.log(err);
            res.status(500).json({
                error: 500,
                type: "User Project",
                message: `Error while removing employee from Project with id ${employeeId}: ${err.message}`
            });
        });
    } catch (error) {
        console.log("Error while deleting employee form project at backend: ", error);
        return res.status(422).json({
            error: "Error while deleting employee form project at backend: ",
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
var __webpack_exports__ = (__webpack_exec__(4289));
module.exports = __webpack_exports__;

})();