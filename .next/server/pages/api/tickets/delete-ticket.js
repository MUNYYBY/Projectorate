"use strict";
(() => {
var exports = {};
exports.id = 7787;
exports.ids = [7787];
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

/***/ 3720:
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
    console.log("Delete single Ticket End-point hit!");
    const { ticketId , ownerId  } = req.query;
    if (!ticketId || !ownerId) {
        return res.status(500).json({
            error: 500,
            message: "ticketId & ownerId are madatory!"
        });
    }
    const LogsOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].LogsOperations.findMany */ .Z.LogsOperations.findMany({});
    try {
        const checkget = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Tickets.findUnique */ .Z.Tickets.findUnique({
            where: {
                id: parseInt(ticketId)
            }
        }).then((result)=>{
            if (!result) {
                res.status(404).json({
                    error: 404,
                    type: "Ticket",
                    message: "Ticket does not exist!"
                });
            }
        });
        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Tickets["delete"] */ .Z.Tickets["delete"]({
            where: {
                id: parseInt(ticketId)
            },
            include: {
                team: true,
                project: true,
                employee: true
            }
        }).then(async (result)=>{
            if (result) {
                //** Record log */
                try {
                    const response = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Logs.create */ .Z.Logs.create({
                        data: {
                            operation: "Deleted Ticket",
                            description: "Deleted Ticket during the ticket delete phase",
                            team_name: result.team.team_name,
                            project_name: result.project.project_name,
                            employee_name: result.employee.first_name + " " + result.employee.last_name,
                            ticket_name: result.title,
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
                                    id: LogsOperations.find((t)=>t.title === "Deleted Ticket")?.id
                                }
                            }
                        }
                    });
                } catch (error) {
                    console.log("Error while creating log for tickets: ", error);
                }
                res.status(200).json({
                    code: 200,
                    type: "Ticket",
                    message: `Ticket successfully deleted with id: ${ticketId}`,
                    data: result
                });
            }
        }).catch((err)=>{
            res.status(500).json({
                error: 500,
                type: "Ticket",
                message: `Error while deleting Ticket with id ${ticketId}: ${err.message}`
            });
        });
    } catch (error) {
        console.log("Delete while getting single Ticket at backend: ", error);
        return res.status(422).json({
            error: "Delete while getting single Ticket at backend: " + error.message
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
var __webpack_exports__ = (__webpack_exec__(3720));
module.exports = __webpack_exports__;

})();