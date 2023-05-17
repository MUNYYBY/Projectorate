"use strict";
exports.id = 5329;
exports.ids = [5329];
exports.modules = {

/***/ 5329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ NotificationsContextProvider),
/* harmony export */   "y": () => (/* binding */ useNotificationsHandler)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);




const NotificationsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    notifications: null,
    setNotifications: ()=>{}
});
const useNotificationsHandler = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NotificationsContext);
const NotificationsContextProvider = ({ children  })=>{
    const { 0: notifications , 1: setNotifications  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [api, contextHolder] = antd__WEBPACK_IMPORTED_MODULE_3__.notification.useNotification(null);
    //   let openNotification;
    const openNotification = (placement, message, description, type)=>{
        if (type == "info") {
            api.info({
                message: message,
                description: description,
                placement
            });
        } else if (type == "sucess") {
            api.success({
                message: message,
                description: description,
                placement
            });
        } else if (type == "warning") {
            api.warning({
                message: message,
                description: description,
                placement
            });
        } else if (type == "error") {
            api.error({
                message: message,
                description: description,
                placement
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (notifications) {
            openNotification(notifications.placement, notifications.message, notifications.description, notifications.type);
            setNotifications(null);
        }
    }, [
        notifications
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NotificationsContext.Provider, {
        value: {
            notifications,
            setNotifications
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "Notifications",
                children: contextHolder
            }),
            children
        ]
    });
};


/***/ })

};
;