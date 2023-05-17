"use strict";
exports.id = 5905;
exports.ids = [5905];
exports.modules = {

/***/ 5905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchModule)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function SearchModule({ type ="projects" , title ="SEARCH" , description ="Take a dive in to the project and its attributes. Find anything you are looking for in this project" , data =[] , setFilteredData =[] ,  }) {
    function handleSearch(val) {
        const value = val.target.value;
        if (type == "projects") {
            setFilteredData(data.filter((e)=>{
                return e.project_name.toLowerCase().includes(value.toLowerCase());
            }));
        }
        if (type == "teams") {
            setFilteredData(data.filter((e)=>{
                return e.team_name.toLowerCase().includes(value.toLowerCase());
            }));
        } else if (type === "employees") {
            setFilteredData(data.filter((e)=>{
                return e.first_name.toLowerCase().includes(value.toLowerCase()) || e.last_name.toLowerCase().includes(value.toLowerCase());
            }));
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "Search-module",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "Search-contents",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "font-semibold text-xl opacity-80",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm opacity-60 mt-1",
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "Search-bar bg-gray-900 py-2 border-2 border-black rounded-md flex flex-row justify-between items-center px-4 mt-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        placeholder: `Search ${type}...`,
                        type: "text",
                        className: "bg-transparent md:w-4/6 sm:w-[8rem] w-[8rem] focus:outline-0",
                        onChange: handleSearch
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "bg-primary py-2 px-3 rounded-md",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "sm:flex hidden",
                                children: [
                                    "Find in “",
                                    type,
                                    "”"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "sm:hidden flex",
                                children: "Search"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;