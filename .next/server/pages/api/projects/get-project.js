"use strict";
(() => {
var exports = {};
exports.id = 5937;
exports.ids = [5937];
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

/***/ 622:
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
    console.log("Get single project End-point hit!");
    const { projectId  } = req.query;
    try {
        //** get tickets status to evaluate the tickets query */
        const TicketsStatus = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TicketStatus.findMany */ .Z.TicketStatus.findMany({});
        const allTickets = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Tickets.count */ .Z.Tickets.count({
            where: {
                projectId: parseInt(projectId)
            }
        });
        //** get tickets individually for specified project */
        const todoTickets = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Tickets.count */ .Z.Tickets.count({
            where: {
                AND: [
                    {
                        projectId: parseInt(projectId)
                    },
                    {
                        TicketStatus: {
                            id: TicketsStatus.find((t)=>t.title === "Todo")?.id
                        }
                    }, 
                ]
            }
        });
        const inProgressTickets = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Tickets.count */ .Z.Tickets.count({
            where: {
                AND: [
                    {
                        projectId: parseInt(projectId)
                    },
                    {
                        TicketStatus: {
                            id: TicketsStatus.find((t)=>t.title === "In-progress")?.id
                        }
                    }, 
                ]
            }
        });
        const doneTickets = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Tickets.count */ .Z.Tickets.count({
            where: {
                AND: [
                    {
                        projectId: parseInt(projectId)
                    },
                    {
                        TicketStatus: {
                            id: TicketsStatus.find((t)=>t.title === "Done")?.id
                        }
                    }, 
                ]
            }
        });
        const resolvedTickets = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Tickets.count */ .Z.Tickets.count({
            where: {
                AND: [
                    {
                        projectId: parseInt(projectId)
                    },
                    {
                        TicketStatus: {
                            id: TicketsStatus.find((t)=>t.title === "Resolved")?.id
                        }
                    }, 
                ]
            }
        });
        const testedTickets = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Tickets.count */ .Z.Tickets.count({
            where: {
                AND: [
                    {
                        projectId: parseInt(projectId)
                    },
                    {
                        TicketStatus: {
                            id: TicketsStatus.find((t)=>t.title === "Tested but not resolved")?.id
                        }
                    }, 
                ]
            }
        });
        const holdTickets = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Tickets.count */ .Z.Tickets.count({
            where: {
                AND: [
                    {
                        projectId: parseInt(projectId)
                    },
                    {
                        TicketStatus: {
                            id: TicketsStatus.find((t)=>t.title === "On Hold")?.id
                        }
                    }, 
                ]
            }
        });
        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Project.findUnique */ .Z.Project.findUnique({
            where: {
                id: parseInt(projectId)
            },
            include: {
                _count: {
                    select: {
                        userProjects: true,
                        Teams: true,
                        Tickets: true
                    }
                }
            }
        });
        if (data) {
            res.status(200).json({
                data,
                Tickets: {
                    all: allTickets,
                    todo: todoTickets,
                    inProgress: inProgressTickets,
                    done: doneTickets,
                    resolved: resolvedTickets,
                    tested: testedTickets,
                    hold: holdTickets
                }
            });
        } else {
            res.status(404).json({
                message: "Project not found"
            });
        }
    } catch (error) {
        console.log("Error while getting single project at backend: ", error);
        return res.status(422).json({
            error: "Error while getting single project at backend: ",
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
var __webpack_exports__ = (__webpack_exec__(622));
module.exports = __webpack_exports__;

})();