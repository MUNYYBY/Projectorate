"use strict";
(() => {
var exports = {};
exports.id = 9943;
exports.ids = [9943];
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

/***/ 7737:
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
    console.log("Update Employee End-point hit!");
    const employeeData = req.body;
    const LogsOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].LogsOperations.findMany */ .Z.LogsOperations.findMany({});
    try {
        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.update */ .Z.user.update({
            where: {
                id: parseInt(employeeData.id)
            },
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
                    update: {
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
            // console.log(result);
            try {
                const response = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Logs.create */ .Z.Logs.create({
                    data: {
                        operation: "Updated employee",
                        description: "Updated employee during the employee update phase",
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
                                id: LogsOperations.find((t)=>t.title === "Updated Employee")?.id
                            }
                        }
                    }
                });
            } catch (error) {
                console.log("Error while creating log for Updated of employee: " + error.message);
            }
            res.status(200).json(result);
        }).catch((err)=>{
            console.log(err);
            res.status(500).json({
                error: err.message
            });
        });
    } catch (error) {
        console.log("Error while updating user at backend: ", error);
        return res.status(500).json({
            error: "Error while updating user at backend" + error.message
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
var __webpack_exports__ = (__webpack_exec__(7737));
module.exports = __webpack_exports__;

})();