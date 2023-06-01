"use strict";
(() => {
var exports = {};
exports.id = 4425;
exports.ids = [4425];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 2097:
/***/ ((module) => {

module.exports = require("handlebars");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 1423:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 95:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _client_emails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3430);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);


async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }
    console.log("Assign Team to employee End-point hit!");
    const { userId , teamId , ownerId  } = req.query;
    if (!userId || !teamId) {
        return res.status(500).json({
            message: "TeamId, ownerId and UserId are both required!"
        });
    }
    const LogsOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].LogsOperations.findMany */ .Z.LogsOperations.findMany({});
    try {
        const team = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Teams.findUnique */ .Z.Teams.findUnique({
            where: {
                id: parseInt(teamId)
            },
            include: {
                TeamDomains: true
            }
        }).then((result)=>{
            if (!result) {
                res.status(404).json({
                    error: 404,
                    type: "Team",
                    message: "Team does not exist!"
                });
            } else {
                return result;
            }
        }).catch((err)=>{
            console.log(err);
        });
        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].employee.findUnique */ .Z.employee.findUnique({
            where: {
                id: parseInt(userId)
            }
        }).then((result)=>{
            if (!result) {
                res.status(404).json({
                    error: 404,
                    type: "Employee",
                    message: "Employee does not exist!"
                });
            } else {
                return result;
            }
        }).catch((err)=>{
            console.log(err);
        });
        let project = null;
        //** Check if user is in the project for which the team is related to */
        if (user && team) {
            project = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].userProjects.findUnique */ .Z.userProjects.findUnique({
                where: {
                    project_id_employee_id: {
                        project_id: parseInt(team.projectId),
                        employee_id: parseInt(user.id)
                    }
                },
                include: {
                    project: true
                }
            }).then((result)=>{
                if (!result) {
                    res.status(404).json({
                        error: 404,
                        type: "Employee and Projects",
                        message: "Employee must join this team's project where adding to the team!"
                    });
                } else {
                    return result;
                }
            }).catch((err)=>{
                console.log(err);
            });
        }
        if (user && team && project) {
            const checkForExsistance = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].UserTeams.findUnique */ .Z.UserTeams.findUnique({
                where: {
                    team_id_employee_id: {
                        team_id: parseInt(teamId),
                        employee_id: parseInt(userId)
                    }
                }
            }).then(async (result)=>{
                if (result) {
                    res.status(403).json({
                        error: 403,
                        type: "Employee already in team",
                        message: "Employee is already added to the Team"
                    });
                } else {
                    const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].userTeams.create */ .Z.userTeams.create({
                        data: {
                            team_id: parseInt(teamId),
                            employee_id: parseInt(userId)
                        }
                    }).then(async (result)=>{
                        if (result) {
                            //** Record log */
                            try {
                                const response = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Logs.create */ .Z.Logs.create({
                                    data: {
                                        operation: "Assigned to Team",
                                        description: "Assigned to Team during the Team Assigning phase",
                                        team_name: team.team_name,
                                        project_name: project.project.project_name,
                                        employee_name: user.first_name + " " + user.last_name,
                                        user: {
                                            connect: {
                                                id: parseInt(ownerId)
                                            }
                                        },
                                        team: {
                                            connect: {
                                                id: team.id
                                            }
                                        },
                                        project: {
                                            connect: {
                                                id: project.project.id
                                            }
                                        },
                                        employee: {
                                            connect: {
                                                id: user.id
                                            }
                                        },
                                        LogsOperations: {
                                            connect: {
                                                id: LogsOperations.find((t)=>t.title === "Assigned to Team")?.id
                                            }
                                        }
                                    }
                                });
                            } catch (error) {
                                console.log("Error while creating log for team: ", error);
                            }
                            (0,_client_emails__WEBPACK_IMPORTED_MODULE_0__/* .UserAssignedToTeam */ .bQ)(user.email, user.first_name, team.team_name, team.TeamDomains.title, project.project_name);
                            res.status(200).json({
                                result
                            });
                        } else {
                            res.status(500).json({
                                message: "Some problem Occoured while assigning user to a Team!"
                            });
                        }
                    }).catch((err)=>{
                        console.log(err);
                        res.status(500).json({
                            error: "Error Occoured",
                            message: err.message
                        });
                    });
                }
            });
        }
    } catch (error) {
        console.log("Error while Assigning Team to employee at backend: ", error);
        return res.status(422).json({
            error: "Error while Assigning Team to employee at backend: ",
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
var __webpack_exports__ = __webpack_require__.X(0, [6053], () => (__webpack_exec__(95)));
module.exports = __webpack_exports__;

})();