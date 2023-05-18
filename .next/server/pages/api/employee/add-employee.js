"use strict";
(() => {
var exports = {};
exports.id = 8896;
exports.ids = [8896];
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

/***/ 1744:
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
    const employeeData = req.body;
    //   console.log(employeeData);
    try {
        const LogsOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].LogsOperations.findMany */ .Z.LogsOperations.findMany({});
        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].user.create */ .Z.user.create({
            data: {
                email: employeeData.email,
                password: employeeData.password,
                Role: {
                    connect: {
                        id: employeeData.role
                    }
                },
                status: "Active",
                employee: {
                    create: {
                        first_name: employeeData.firstName,
                        last_name: employeeData.lastName,
                        email: employeeData.email,
                        phone_number: employeeData.phoneNumber,
                        date_of_birth: employeeData.dateOfBirth,
                        date_of_joining: employeeData.dateOfJoining,
                        expertise: employeeData.expertise,
                        Designation: {
                            connect: {
                                id: employeeData.designation
                            }
                        },
                        Role: {
                            connect: {
                                id: employeeData.role
                            }
                        },
                        gender: employeeData.gender,
                        address: employeeData.address,
                        years_of_experience: employeeData.yearsOfExperience
                    }
                }
            },
            include: {
                employee: true
            }
        }).then(async (result)=>{
            try {
                const response = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Logs.create */ .Z.Logs.create({
                    data: {
                        operation: "Created employee",
                        description: "Created employee during the employee creation phase",
                        employee_name: result.employee.first_name + " " + result.employee.last_name,
                        employee: {
                            connect: {
                                id: result.employee.id
                            }
                        },
                        user: {
                            connect: {
                                id: employeeData.userId
                            }
                        },
                        LogsOperations: {
                            connect: {
                                id: LogsOperations.find((t)=>t.title === "Created Employee")?.id
                            }
                        }
                    }
                });
            } catch (error) {
                console.log("Error while creating log for creation of employee: " + error.message);
            }
            (0,_client_emails__WEBPACK_IMPORTED_MODULE_0__/* .NewUserOnBoardEmail */ .u4)(result.email, result.employee.first_name, result.password);
            res.status(200).json(result);
        });
    } catch (error) {
        console.log("Error while add new user at backend: ", error);
        return res.status(500).json({
            error: "Error while add new user at backend"
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
var __webpack_exports__ = __webpack_require__.X(0, [6053], () => (__webpack_exec__(1744)));
module.exports = __webpack_exports__;

})();