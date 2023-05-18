"use strict";
(() => {
var exports = {};
exports.id = 1388;
exports.ids = [1388];
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

/***/ 9330:
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
    const { id  } = req.query;
    if (!id) return res.status(422).json({
        message: "Invalid id"
    });
    console.log("Delete Designation End-point hit!");
    try {
        const deleteDesignation = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Designation["delete"] */ .Z.Designation["delete"]({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json({
            deleteDesignation
        });
    } catch (error) {
        console.log("Error while deleting Designation at backend: ", error);
        return res.status(422).json({
            error: "Error while deleting Designation at backend"
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
var __webpack_exports__ = (__webpack_exec__(9330));
module.exports = __webpack_exports__;

})();