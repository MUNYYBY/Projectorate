"use strict";
(() => {
var exports = {};
exports.id = 5763;
exports.ids = [5763];
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

/***/ 335:
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
    console.log("Update Ticket Status End-point hit!");
    const { ticketId , statusId  } = req.query;
    if (!ticketId || !statusId) {
        return res.status(500).json({
            message: "ticketId & statusId is required!"
        });
    }
    try {
        const ticket = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Tickets.findUnique */ .Z.Tickets.findUnique({
            where: {
                id: parseInt(ticketId)
            }
        }).then((result)=>{
            if (result) {
                return result;
            } else {
                res.status(404).json({
                    error: 404,
                    type: "Ticket",
                    message: "Ticket Does not exists!"
                });
            }
        });
        const status = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TicketStatus.findUnique */ .Z.TicketStatus.findUnique({
            where: {
                id: parseInt(statusId)
            }
        }).then((result)=>{
            if (result) {
                return result;
            } else {
                res.status(404).json({
                    error: 404,
                    type: "Status",
                    message: "Ticket status Does not exists!"
                });
            }
        });
        if (ticket && status) {
            const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Tickets.update */ .Z.Tickets.update({
                where: {
                    id: parseInt(ticketId)
                },
                data: {
                    TicketStatus: {
                        connect: {
                            id: parseInt(statusId)
                        }
                    }
                }
            }).then((result)=>{
                res.status(200).json({
                    result
                });
            }).catch((err)=>{
                res.status(500).json({
                    error: 500,
                    type: "Ticket",
                    message: "Error while Updating Ticket Status!",
                    errMessage: err.message
                });
            });
        }
    } catch (error) {
        console.log("Error while Updating Ticket Status at backend: ", error);
        return res.status(422).json({
            error: "Error while getting Updating Ticket Status at backend: " + error.message
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
var __webpack_exports__ = (__webpack_exec__(335));
module.exports = __webpack_exports__;

})();