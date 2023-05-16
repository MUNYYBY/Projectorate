"use strict";
(() => {
var exports = {};
exports.id = 2031;
exports.ids = [2031];
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

/***/ 8862:
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
    console.log("Create project End-point hit!");
    const reqData = req.body;
    const LogsOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].LogsOperations.findMany */ .Z.LogsOperations.findMany({});
    try {
        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Project.create */ .Z.Project.create({
            data: {
                project_name: reqData.project_name,
                description: reqData.description,
                user: {
                    connect: {
                        id: reqData.user_id
                    }
                },
                projectDomain: {
                    connect: {
                        id: reqData.project_domain_id
                    }
                }
            }
        }).then(async (result)=>{
            //** Record log */
            try {
                const response = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Logs.create */ .Z.Logs.create({
                    data: {
                        operation: "Created Project",
                        description: "Created Project during the project creation phase",
                        project_name: result.project_name,
                        user: {
                            connect: {
                                id: reqData.user_id
                            }
                        },
                        project: {
                            connect: {
                                id: result.id
                            }
                        },
                        LogsOperations: {
                            connect: {
                                id: LogsOperations.find((t)=>t.title === "Created Project")?.id
                            }
                        }
                    }
                });
            } catch (error) {
                console.log("Error while creating log for project: ", error);
            }
            res.status(200).json(result);
        });
    } catch (error) {
        console.log("Error while add new Create project at backend: ", error);
        return res.status(422).json({
            error: "Error while add new Create project at backend:",
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
var __webpack_exports__ = (__webpack_exec__(8862));
module.exports = __webpack_exports__;

})();