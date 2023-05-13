"use strict";
(() => {
var exports = {};
exports.id = 4446;
exports.ids = [4446];
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

/***/ 2898:
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
    console.log("Delete User from Team End-point hit!");
    const { employeeId , teamId , ownerId  } = req.query;
    if (!employeeId || !teamId || !ownerId) {
        return res.status(500).json({
            message: "employeeId, ownerId & teamId are both required!"
        });
    }
    const LogsOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].LogsOperations.findMany */ .Z.LogsOperations.findMany({});
    try {
        const teams = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].userTeams.findUnique */ .Z.userTeams.findUnique({
            where: {
                team_id_employee_id: {
                    team_id: parseInt(teamId),
                    employee_id: parseInt(employeeId)
                }
            }
        }).then(async (result)=>{
            if (!result) {
                res.status(404).json({
                    code: 404,
                    type: "User team",
                    message: `User does not exists in team with id: ${employeeId}`
                });
            } else {
                return result;
            }
        }).catch((err)=>{
            console.log(err);
            res.status(500).json({
                error: 500,
                type: "User Team",
                message: `Error while checking for employee in team with id ${employeeId}: ${err.message}`
            });
        });
        if (teams) {
            const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].userTeams["delete"] */ .Z.userTeams["delete"]({
                where: {
                    team_id_employee_id: {
                        team_id: parseInt(teamId),
                        employee_id: parseInt(employeeId)
                    }
                },
                include: {
                    employee: true,
                    team: {
                        include: {
                            project: true
                        }
                    }
                }
            }).then(async (result)=>{
                if (result) {
                    //** Record log */
                    try {
                        const response = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Logs.create */ .Z.Logs.create({
                            data: {
                                operation: "Removed from Team",
                                description: "Removed from Team during the Team removing phase",
                                team_name: result.team.team_name,
                                project_name: result.team.project.project_name,
                                employee_name: result.employee.first_name + " " + result.employee.last_name,
                                user: {
                                    connect: {
                                        id: parseInt(ownerId)
                                    }
                                },
                                team: {
                                    connect: {
                                        id: result.team.id
                                    }
                                },
                                project: {
                                    connect: {
                                        id: result.team.project.id
                                    }
                                },
                                employee: {
                                    connect: {
                                        id: result.employee.id
                                    }
                                },
                                LogsOperations: {
                                    connect: {
                                        id: LogsOperations.find((t)=>t.title === "Removed from Team")?.id
                                    }
                                }
                            }
                        });
                    } catch (error) {
                        console.log("Error while creating log for team: ", error);
                    }
                    res.status(200).json({
                        code: 200,
                        type: "User Team deletion!",
                        message: `User successfully deleted from Team with id: ${employeeId}`,
                        result
                    });
                }
            }).catch((err)=>{
                console.log(err);
                res.status(500).json({
                    error: 500,
                    type: "User Team",
                    message: `Error while removing employee from Team with id ${employeeId}: ${err.message}`
                });
            });
        }
    } catch (error) {
        console.log("Error while deleting employee form Team at backend: ", error);
        return res.status(422).json({
            error: "Error while deleting employee form Team at backend: ",
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
var __webpack_exports__ = (__webpack_exec__(2898));
module.exports = __webpack_exports__;

})();