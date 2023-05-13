"use strict";
(() => {
var exports = {};
exports.id = 2177;
exports.ids = [2177];
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

/***/ 6234:
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
    console.log("Get Search Employee End-point hit!");
    const { search  } = req.query;
    try {
        const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].employee.findMany */ .Z.employee.findMany({
            where: {
                OR: [
                    {
                        first_name: {
                            contains: search
                        }
                    },
                    {
                        last_name: {
                            contains: search
                        }
                    },
                    {
                        email: {
                            contains: search
                        }
                    }, 
                ]
            }
        }).then((result)=>{
            res.status(200).json({
                result
            });
        }).catch((err)=>{
            return res.status(500).json({
                error: 500,
                message: "Error while getting Search employees at backend: " + err.message
            });
        });
    } catch (error) {
        console.log("Error while getting Search employees at backedn: ", error);
        return res.status(422).json({
            error: "Error while getting Search employees at backend: "
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
var __webpack_exports__ = (__webpack_exec__(6234));
module.exports = __webpack_exports__;

})();