"use strict";
exports.id = 8046;
exports.ids = [8046];
exports.modules = {

/***/ 8046:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_userDataContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4514);
/* harmony import */ var _context_notificationContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5329);
/* harmony import */ var _components_Loading_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4670);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_userDataContext__WEBPACK_IMPORTED_MODULE_5__]);
_context_userDataContext__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function AppDashboard({ children  }) {
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();
    const { 0: check , 1: setCheck  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // this state wil check if all the initial data fetching has been done or not!
    const { userData , fetchUserInfo  } = (0,_context_userDataContext__WEBPACK_IMPORTED_MODULE_5__/* .useUserDataHandler */ .F)();
    const { setNotifications  } = (0,_context_notificationContext__WEBPACK_IMPORTED_MODULE_6__/* .useNotificationsHandler */ .y)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    async function getUserData(id) {
        const res = await fetchUserInfo(id);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (userData) {
            console.log("App fetch: ", userData);
            if (userData.data) {
                setCheck(true);
            } else {
                setNotifications({
                    placement: "bottomRight",
                    message: "Info",
                    description: "Something went wrong!",
                    type: "error"
                });
            }
        }
    }, [
        userData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("This is app component 1");
        console.log(status == "authenticated");
        console.log(!userData);
        if (status == "authenticated" && !userData) {
            const id = session.user.id;
            getUserData(id);
            router.replace("/app/u");
        }
    }, [
        status
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "App",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loading_loading__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;