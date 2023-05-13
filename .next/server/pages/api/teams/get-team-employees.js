"use strict";
(() => {
var exports = {};
exports.id = 1030;
exports.ids = [1030];
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

/***/ 9339:
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
    console.log("Get Employees for Team End-point hit!");
    const { teamId  } = req.query;
    if (!teamId) {
        return res.status(500).json({
            message: "TeamId is required!"
        });
    }
    try {
        const team = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Teams.findUnique */ .Z.Teams.findUnique({
            where: {
                id: parseInt(teamId)
            }
        }).then((result)=>{
            if (!result) {
                res.status(404).json({
                    error: 404,
                    type: "Team",
                    message: "Team does not exist!"
                });
            } else {
                return result;
            }
        }).catch((err)=>{
            console.log(err);
        });
        if (team) {
            const userTeams = _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].userTeams.findMany */ .Z.userTeams.findMany({
                where: {
                    team_id: parseInt(teamId)
                },
                select: {
                    employee_id: true
                }
            }).then(async (result)=>{
                if (!result) {
                    res.status(404).json({
                        error: 404,
                        type: "User Team",
                        message: "Team does not exist!"
                    });
                } else {
                    let response = [];
                    result.map((item)=>{
                        response.push(item.employee_id);
                    });
                    await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].employee.findMany */ .Z.employee.findMany({
                        where: {
                            id: {
                                in: response
                            }
                        }
                    }).then((result)=>{
                        if (result) {
                            res.status(200).json({
                                result
                            });
                        } else {
                            res.status(404).json({
                                error: 404,
                                type: "Employees",
                                message: "Employees not found in Team!"
                            });
                        }
                    });
                }
            }).catch((err)=>{
                console.log(err);
                return res.status(422).json({
                    error: "Error while getting Team for project at backend: " + err.message
                });
            });
        }
    } catch (error) {
        console.log("Error while getting Team for project at backend: ", error);
        return res.status(422).json({
            error: "Error while getting Team for project at backend: "
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
var __webpack_exports__ = (__webpack_exec__(9339));
module.exports = __webpack_exports__;

})();