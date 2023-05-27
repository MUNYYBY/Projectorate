"use strict";
(() => {
var exports = {};
exports.id = 6959;
exports.ids = [6959];
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

/***/ 9731:
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
    console.log("Create Team End-point hit!");
    const reqBody = req.body;
    if (!reqBody.team_name || !reqBody.description || !reqBody.user_id || !reqBody.project_id || !reqBody.team_domain_id) {
        return res.status(500).json({
            error: 500,
            message: "Team name, description, user id, project id & team domains id are madatory!"
        });
    }
    const LogsOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].LogsOperations.findMany */ .Z.LogsOperations.findMany({});
    try {
        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Teams.create */ .Z.Teams.create({
            data: {
                team_name: reqBody.team_name,
                description: reqBody.description,
                user: {
                    connect: {
                        id: reqBody.user_id
                    }
                },
                project: {
                    connect: {
                        id: reqBody.project_id
                    }
                },
                TeamDomains: {
                    connect: {
                        id: reqBody.team_domain_id
                    }
                }
            },
            include: {
                project: true
            }
        }).then(async (result)=>{
            //** Record log */
            try {
                const response = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Logs.create */ .Z.Logs.create({
                    data: {
                        operation: "Created Team",
                        description: "Created Team during the Team creation phase",
                        team_name: result.team_name,
                        project_name: result.project.project_name,
                        user: {
                            connect: {
                                id: reqBody.user_id
                            }
                        },
                        team: {
                            connect: {
                                id: result.id
                            }
                        },
                        project: {
                            connect: {
                                id: result.project.id
                            }
                        },
                        LogsOperations: {
                            connect: {
                                id: LogsOperations.find((t)=>t.title === "Created Team")?.id
                            }
                        }
                    }
                });
            } catch (error) {
                console.log("Error while creating log for team: ", error);
            }
            res.status(200).json(result);
        });
    } catch (error) {
        console.log("Error while add new Create Team at backend: ", error);
        return res.status(422).json({
            error: "Error while add new Create Team at backend:",
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
var __webpack_exports__ = (__webpack_exec__(9731));
module.exports = __webpack_exports__;

})();