"use strict";
(() => {
var exports = {};
exports.id = 2985;
exports.ids = [2985];
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

/***/ 5743:
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
    console.log("Get project Tickets End-point hit!");
    const { projectId  } = req.query;
    if (!projectId) {
        return res.status(500).json({
            message: "projectId is required!"
        });
    }
    try {
        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Tickets.findMany */ .Z.Tickets.findMany({
            where: {
                projectId: parseInt(projectId)
            },
            include: {
                project: {
                    select: {
                        project_name: true,
                        id: true
                    }
                },
                team: {
                    select: {
                        team_name: true,
                        id: true
                    }
                },
                employee: {
                    select: {
                        first_name: true,
                        last_name: true,
                        id: true
                    }
                },
                TicketStatus: {
                    select: {
                        title: true,
                        id: true
                    }
                },
                TicketPiority: {
                    select: {
                        title: true,
                        id: true
                    }
                }
            }
        }).then((result)=>{
            res.status(200).json({
                result
            });
        }).catch((err)=>{
            res.status(404).json({
                error: 404,
                type: "Ticket",
                message: "Error while fetching tickets!",
                errMessage: err.message
            });
        });
    } catch (error) {
        console.log("Error while getting project Tickets at backend: ", error);
        return res.status(422).json({
            error: "Error while getting project Tickets at backend: " + error.message
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
var __webpack_exports__ = (__webpack_exec__(5743));
module.exports = __webpack_exports__;

})();