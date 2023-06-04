"use strict";
(() => {
var exports = {};
exports.id = 5099;
exports.ids = [5099];
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

/***/ 3018:
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
    console.log("Update Team Status End-point hit!");
    const { teamId , statusId  } = req.query;
    if (!teamId || !statusId) {
        return res.status(500).json({
            message: "teamId & statusId is required!"
        });
    }
    try {
        const team = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Teams.findUnique */ .Z.Teams.findUnique({
            where: {
                id: parseInt(teamId)
            }
        }).then((result)=>{
            if (result) {
                return result;
            } else {
                res.status(404).json({
                    error: 404,
                    type: "Team",
                    message: "Team Does not exists!"
                });
            }
        });
        const status = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TeamStatus.findUnique */ .Z.TeamStatus.findUnique({
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
                    message: "Team status Does not exists!"
                });
            }
        });
        if (team && status) {
            const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Teams.update */ .Z.Teams.update({
                where: {
                    id: parseInt(teamId)
                },
                data: {
                    TeamStatus: {
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
                    type: "Team",
                    message: "Error while Updating team Status!",
                    errMessage: err.message
                });
            });
        }
    } catch (error) {
        console.log("Error while Updating team Status at backend: ", error);
        return res.status(422).json({
            error: "Error while getting Updating team Status at backend: " + error.message
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
var __webpack_exports__ = (__webpack_exec__(3018));
module.exports = __webpack_exports__;

})();