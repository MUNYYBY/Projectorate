"use strict";
(() => {
var exports = {};
exports.id = 5332;
exports.ids = [5332];
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

/***/ 8878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _client_emails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3430);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);


async function handler(req, res) {
    if (req.method !== "DELETE") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }
    const { id , userId  } = req.query;
    if (!id || !userId) return res.status(422).json({
        message: "EmployeeId and userId is mandatory!"
    });
    console.log("Delete Employee End-point hit!");
    try {
        const LogsOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].LogsOperations.findMany */ .Z.LogsOperations.findMany({});
        const deleteEmployee = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].employee.findUnique */ .Z.employee.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        const deleteUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].user.update */ .Z.user.update({
            where: {
                id: parseInt(deleteEmployee.id)
            },
            data: {
                status: "Block"
            }
        }).then(async (data)=>{
            try {
                const response = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Logs.create */ .Z.Logs.create({
                    data: {
                        operation: "Deleted employee",
                        description: "Deleted employee during the employee deletion phase",
                        employee_name: deleteEmployee.first_name + " " + deleteEmployee.last_name,
                        user: {
                            connect: {
                                id: parseInt(userId)
                            }
                        },
                        LogsOperations: {
                            connect: {
                                id: LogsOperations.find((t)=>t.title === "Deleted Employee")?.id
                            }
                        }
                    }
                });
            } catch (error) {
                console.log("Error while creating log for deletion of employee: " + error.message);
            }
            (0,_client_emails__WEBPACK_IMPORTED_MODULE_0__/* .UserRevokedAccessEmail */ .KX)(deleteEmployee.email, deleteEmployee.first_name);
            res.status(200).json({
                deleteEmployee
            });
        });
    } catch (error) {
        console.log("Error while deleting employee at backend: ", error);
        return res.status(422).json({
            error: "Error while deleting employee at backend: "
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
var __webpack_exports__ = __webpack_require__.X(0, [6053], () => (__webpack_exec__(8878)));
module.exports = __webpack_exports__;

})();