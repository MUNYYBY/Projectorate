"use strict";
(() => {
var exports = {};
exports.id = 719;
exports.ids = [719];
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

/***/ 9023:
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
    console.log("Delete single Team End-point hit!");
    const { teamId , user_id  } = req.query;
    const LogsOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].LogsOperations.findMany */ .Z.LogsOperations.findMany({});
    try {
        const checkget = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Teams.findUnique */ .Z.Teams.findUnique({
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
            }
        });
        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Teams["delete"] */ .Z.Teams["delete"]({
            where: {
                id: parseInt(teamId)
            },
            include: {
                project: true
            }
        }).then(async (result)=>{
            if (result) {
                //** Record log */
                try {
                    const response = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Logs.create */ .Z.Logs.create({
                        data: {
                            operation: "Deleted Team",
                            description: "Deleted Team during the Team deletion phase",
                            team_name: result.team_name,
                            project_name: result.project.project_name,
                            user: {
                                connect: {
                                    id: parseInt(user_id)
                                }
                            },
                            project: {
                                connect: {
                                    id: result.project.id
                                }
                            },
                            LogsOperations: {
                                connect: {
                                    id: LogsOperations.find((t)=>t.title === "Deleted Team")?.id
                                }
                            }
                        }
                    });
                } catch (error) {
                    console.log("Error while creating log for team: ", error);
                }
                res.status(200).json({
                    code: 200,
                    type: "Team and UserTeam deletion!",
                    message: `Team successfully deleted with id: ${teamId}`,
                    data: result
                });
            }
        }).catch((err)=>{
            res.status(500).json({
                error: 500,
                type: "Team",
                message: `Error while deleting Team with id ${teamId}: ${err.message}`
            });
        });
    } catch (error) {
        console.log("Delete while getting single Team at backend: ", error);
        return res.status(422).json({
            error: "Delete while getting single Team at backend: ",
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
var __webpack_exports__ = (__webpack_exec__(9023));
module.exports = __webpack_exports__;

})();