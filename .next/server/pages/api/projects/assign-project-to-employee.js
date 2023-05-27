"use strict";
(() => {
var exports = {};
exports.id = 9801;
exports.ids = [9801];
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

/***/ 4552:
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
    console.log("Assign project to employee End-point hit!");
    const { userId , projectId , ownerId  } = req.query;
    if (!userId || !projectId || !ownerId) {
        return res.status(500).json({
            message: "ProjectId, ownerId and UserId are both required!"
        });
    }
    const LogsOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].LogsOperations.findMany */ .Z.LogsOperations.findMany({});
    try {
        const project = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].project.findUnique */ .Z.project.findUnique({
            where: {
                id: parseInt(projectId)
            },
            include: {
                projectDomain: true
            }
        }).then((result)=>{
            if (!result) {
                res.status(404).json({
                    error: 404,
                    type: "Project",
                    message: "Project does not exist!"
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
        const checkForExsistance = _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].userProjects.findUnique */ .Z.userProjects.findUnique({
            where: {
                project_id_employee_id: {
                    project_id: parseInt(projectId),
                    employee_id: parseInt(userId)
                }
            }
        }).then((result)=>{
            if (result) {
                res.status(403).json({
                    message: "Employee is already added to the project"
                });
            } else {
                const data = _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].userProjects.create */ .Z.userProjects.create({
                    data: {
                        project_id: parseInt(projectId),
                        employee_id: parseInt(userId)
                    }
                }).then(async (result)=>{
                    if (result) {
                        //record log
                        try {
                            const response = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Logs.create */ .Z.Logs.create({
                                data: {
                                    operation: "Assigned to Project",
                                    description: "Assigned to Project during the assigning phase",
                                    project_name: project.project_name,
                                    employee_name: user.first_name + " " + user.last_name,
                                    user: {
                                        connect: {
                                            id: parseInt(ownerId)
                                        }
                                    },
                                    project: {
                                        connect: {
                                            id: project.id
                                        }
                                    },
                                    employee: {
                                        connect: {
                                            id: user.id
                                        }
                                    },
                                    LogsOperations: {
                                        connect: {
                                            id: LogsOperations.find((t)=>t.title === "Assigned to Project")?.id
                                        }
                                    }
                                }
                            });
                        } catch (error) {
                            console.log("Error while creating log for assigning user to project: ", error);
                        }
                        //send email
                        // console.log(project);
                        try {
                            (0,_client_emails__WEBPACK_IMPORTED_MODULE_0__/* .UserAssignedToProject */ .ov)(user.email, user.first_name, project.project_name, project.projectDomain.title);
                        } catch (error1) {
                            console.log(error1);
                        }
                        res.status(200).json({
                            result
                        });
                    } else {
                        res.status(500).json({
                            message: "Some problem Occoured while assigning user to a project!"
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
    } catch (error) {
        console.log("Error while Assigning project to employee at backend: ", error);
        return res.status(422).json({
            error: "Error while Assigning project to employee at backend: ",
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
var __webpack_exports__ = __webpack_require__.X(0, [6053], () => (__webpack_exec__(4552)));
module.exports = __webpack_exports__;

})();