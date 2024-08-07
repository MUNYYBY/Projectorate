"use strict";
(() => {
var exports = {};
exports.id = 5361;
exports.ids = [5361];
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

/***/ 2562:
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
    console.log("Get all Logs End-point hit!");
    try {
        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Logs.findMany */ .Z.Logs.findMany({
            orderBy: [
                {
                    createdAt: "desc"
                }, 
            ],
            include: {
                user: {
                    select: {
                        id: true,
                        employee: {
                            select: {
                                id: true,
                                first_name: true,
                                last_name: true
                            }
                        }
                    }
                },
                team: {
                    select: {
                        id: true,
                        team_name: true
                    }
                },
                project: {
                    select: {
                        id: true,
                        project_name: true
                    }
                },
                employee: {
                    select: {
                        id: true,
                        first_name: true,
                        last_name: true
                    }
                },
                ticket: {
                    select: {
                        id: true,
                        title: true
                    }
                },
                LogsOperations: {
                    select: {
                        id: true,
                        title: true
                    }
                }
            }
        });
        // console.log("All Tickets: ", data);
        res.status(200).json({
            data
        });
    } catch (error) {
        console.log("Error while getting all Logs at backend: ", error);
        return res.status(422).json({
            error: "Error while getting all Logs at backend: " + error.message
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
var __webpack_exports__ = (__webpack_exec__(2562));
module.exports = __webpack_exports__;

})();