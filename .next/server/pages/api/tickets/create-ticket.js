"use strict";
(() => {
var exports = {};
exports.id = 9676;
exports.ids = [9676];
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

/***/ 2361:
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
    console.log("Create Ticket End-point hit!");
    const reqBody = req.body;
    if (!reqBody.userId || !reqBody.teamId || !reqBody.employeeId || !reqBody.ticketStatusId || !reqBody.ticketPiorityId || !reqBody.title || !reqBody.description || !reqBody.deadline) {
        return res.status(500).json({
            error: 500,
            message: "Title, description, deadline, userId, TeamId, employeeId, ticketStatusId, ticketPiorityId are madatory!"
        });
    }
    const LogsOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].LogsOperations.findMany */ .Z.LogsOperations.findMany({});
    try {
        const employee = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].employee.findUnique */ .Z.employee.findUnique({
            where: {
                id: parseInt(reqBody.employeeId)
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
        const team = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Teams.findUnique */ .Z.Teams.findUnique({
            where: {
                id: parseInt(reqBody.teamId)
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
        // ** Check if user is in the team which the ticket is going to be related to */
        // ** Please note that we are not checking for project relavence
        // ** as it is understood that if the user is related to
        // ** team then he/she will also be related to projec as well
        let userTeam = null;
        if (employee && team) {
            userTeam = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].userTeams.findUnique */ .Z.userTeams.findUnique({
                where: {
                    team_id_employee_id: {
                        team_id: parseInt(team.id),
                        employee_id: parseInt(employee.id)
                    }
                }
            }).then((result)=>{
                if (!result) {
                    res.status(404).json({
                        error: 404,
                        type: "Employee and Teams",
                        message: "Employee must join this team where adding to the team!"
                    });
                } else {
                    return result;
                }
            }).catch((err)=>{
                console.log(err);
            });
        }
        //** If all above checks completes then create a ticket */
        if (employee && team && userTeam) {
            await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Tickets.create */ .Z.Tickets.create({
                data: {
                    title: reqBody.title,
                    description: reqBody.description,
                    deadline: reqBody.deadline,
                    user: {
                        connect: {
                            id: parseInt(reqBody.userId)
                        }
                    },
                    team: {
                        connect: {
                            id: parseInt(reqBody.teamId)
                        }
                    },
                    project: {
                        connect: {
                            id: parseInt(team.projectId)
                        }
                    },
                    employee: {
                        connect: {
                            id: parseInt(reqBody.employeeId)
                        }
                    },
                    TicketStatus: {
                        connect: {
                            id: parseInt(reqBody.ticketStatusId)
                        }
                    },
                    TicketPiority: {
                        connect: {
                            id: parseInt(reqBody.ticketPiorityId)
                        }
                    },
                    Resource: {
                        create: {
                            url: reqBody.resource
                        }
                    }
                },
                include: {
                    team: true,
                    project: true,
                    employee: true
                }
            }).then(async (result)=>{
                if (!result) {
                    res.status(500).json({
                        error: 500,
                        type: "Ticket",
                        message: "Error while creating ticket!"
                    });
                } else {
                    //** Record log */
                    try {
                        const response = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Logs.create */ .Z.Logs.create({
                            data: {
                                operation: "Created Ticket",
                                description: "Created Ticket during the ticket creation phase",
                                team_name: result.team.team_name,
                                project_name: result.project.project_name,
                                employee_name: result.employee.first_name + " " + result.employee.last_name,
                                ticket_name: result.title,
                                user: {
                                    connect: {
                                        id: reqBody.userId
                                    }
                                },
                                team: {
                                    connect: {
                                        id: result.team.id
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
                                ticket: {
                                    connect: {
                                        id: result.id
                                    }
                                },
                                LogsOperations: {
                                    connect: {
                                        id: LogsOperations.find((t)=>t.title === "Created Ticket")?.id
                                    }
                                }
                            }
                        });
                    } catch (error) {
                        console.log("Error while creating log for tickets: ", error);
                    }
                    res.status(200).json({
                        result
                    });
                }
            }).catch((err)=>{
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
        }
    } catch (error) {
        console.log("Error while add new Create Ticket at backend: ", error);
        return res.status(422).json({
            error: "Error while add new Create Ticket at backend: " + error.message
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
var __webpack_exports__ = __webpack_require__.X(0, [6053], () => (__webpack_exec__(2361)));
module.exports = __webpack_exports__;

})();