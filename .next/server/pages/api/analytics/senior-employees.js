"use strict";
(() => {
var exports = {};
exports.id = 9430;
exports.ids = [9430];
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

/***/ 1284:
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
    console.log("Get Senior employees End-point hit!");
    let designationRes = null;
    try {
        designationRes = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].designation.findFirst */ .Z.designation.findFirst({
            where: {
                title: "Senior"
            }
        });
    } catch (error) {
        console.log("Error while getting designation: ", error);
        return res.status(422).json({
            error: "Error while getting Senior employees analytics info at backend"
        });
    }
    try {
        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].employee.count */ .Z.employee.count({
            where: {
                designation: designationRes.id
            }
        });
        console.log("Senior employees: ", data);
        res.status(200).json({
            count: data
        });
    } catch (error1) {
        console.log("Error while getting Senior employees analytics info at backend: ", error1);
        return res.status(422).json({
            error: "Error while getting Senior employees analytics info at backend"
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
var __webpack_exports__ = (__webpack_exec__(1284));
module.exports = __webpack_exports__;

})();