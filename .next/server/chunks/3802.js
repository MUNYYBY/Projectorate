"use strict";
exports.id = 3802;
exports.ids = [3802];
exports.modules = {

/***/ 3802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAuthority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5861);



const AuthorityCheck = (props)=>{
    const { grantPermissionFor , children  } = props;
    const roleMatched = (0,_useAuthority__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(grantPermissionFor);
    //   console.log("AuthorityCheck:", grantPermissionFor, roleMatched);
    return roleMatched ? children : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorityCheck);


/***/ }),

/***/ 5861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Permissions_useAuthority)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(9699);
;// CONCATENATED MODULE: ./Permissions/Permissions.js
//** You can define rules and persmissions which bound the users  access certain components and perform certain operations */
const USER_PERMISSIONS = [
    {
        user: "Super-admin",
        permissions: {
            manage_employees: true,
            manage_projects: true,
            manage_teams: true,
            manage_tickets: true,
            manage_logs: true
        }
    },
    {
        user: "Admin",
        permissions: {
            manage_employees: true,
            manage_projects: true,
            manage_teams: true,
            manage_tickets: true,
            manage_logs: true
        }
    },
    {
        user: "Operations Manager",
        permissions: {
            manage_employees: true,
            manage_projects: true,
            manage_teams: true,
            manage_tickets: true,
            manage_logs: false
        }
    },
    {
        user: "Project Manager",
        permissions: {
            manage_employees: false,
            manage_projects: true,
            manage_teams: true,
            manage_tickets: true,
            manage_logs: false
        }
    },
    {
        user: "Team Lead",
        permissions: {
            manage_employees: false,
            manage_projects: false,
            manage_teams: true,
            manage_tickets: true,
            manage_logs: false
        }
    },
    {
        user: "Team Member",
        permissions: {
            manage_employees: false,
            manage_projects: false,
            manage_teams: false,
            manage_tickets: false,
            manage_logs: false
        }
    }, 
];

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./Permissions/useAuthority.js




function useAuthority(grantPermissionFor) {
    //** Get active user role */
    const { data: session , status  } = (0,react_.useSession)();
    const roleMatched = (0,external_react_.useMemo)(()=>{
        if (session) {
            if (session.user.role) {
                const ACTIVE_USER = USER_PERMISSIONS.find((role)=>role.user == session.user.role);
                return ACTIVE_USER.permissions[grantPermissionFor] || false;
            }
        }
    }, [
        grantPermissionFor,
        session
    ]);
    if (status == "authenticated") {
        return roleMatched;
    } else {
        return false;
    }
}
/* harmony default export */ const Permissions_useAuthority = (useAuthority);


/***/ })

};
;