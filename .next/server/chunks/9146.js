"use strict";
exports.id = 9146;
exports.ids = [9146];
exports.modules = {

/***/ 3588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TabDevider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function TabDevider({ width ="w-8" , opacity ="opacity-20" , color ="bg-gray-100" ,  }) {
    const classString = "Tab-Devider h-0.5 rounded-sm " + width + " " + opacity + " " + color;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classString
    });
}


/***/ }),

/***/ 9146:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EmployeeProfile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Devider_Devider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3588);
/* harmony import */ var _client_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(598);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3332);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _InformationTag_InformationTag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7597);
/* harmony import */ var _Projects_ProjectsContainer_ProjectsContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6166);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_requests__WEBPACK_IMPORTED_MODULE_4__]);
_client_requests__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















function EmployeeProfile(props) {
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: EmployeeInfo , 1: setEmployeeInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    //** Router Initialization */
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const { 0: windowSize , 1: setWindowSize  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        0,
        0
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleWindowResize = ()=>{
            setWindowSize([
                window.innerWidth,
                window.innerHeight
            ]);
        };
        window.addEventListener("resize", handleWindowResize);
        return ()=>{
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    //** Fetch all avaible employees */
    function handleEmployeeFetching() {
        if (props.isEmployeeProfile.id) {
            setLoading(true);
            (0,_client_requests__WEBPACK_IMPORTED_MODULE_4__/* .getEmployeeProfile */ .ws)(props.isEmployeeProfile.id).then((res)=>{
                if (!res.error) {
                    setEmployeeInfo(res.data);
                    setLoading(false);
                } else {
                    setLoading(false);
                    antd__WEBPACK_IMPORTED_MODULE_1__.message.error("Some error occoured while fetching project employees!");
                }
            });
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        handleEmployeeFetching();
    }, [
        props.isEmployeeProfile.id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Drawer, {
        title: "Employee Profile",
        onClose: ()=>props.setIsEmployeeProfile({
                id: null
            }),
        open: props.isEmployeeProfile.id,
        bodyStyle: {
            paddingBottom: 80
        },
        width: windowSize[0] > 1100 ? "70%" : "100%",
        children: loading || !EmployeeInfo ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                    active: true
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                        active: true
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                        active: true
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                        active: true
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                        active: true
                    })
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    className: "flex flex-col md:flex-row justify-between items-start",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row sm:flex-row-reverse md:flex-row justify-between md:justify-start items-start w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "h-44 w-44 bg-gray-900 bg-opacity-80 flex justify-center items-center rounded-3xl sm:flex hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[8rem] font-bold opacity-60",
                                        children: EmployeeInfo.first_name[0]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col md:pl-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-start items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaRegUser, {
                                                    size: 25
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    className: "text-3xl font-bold ml-2",
                                                    children: [
                                                        EmployeeInfo.first_name,
                                                        " ",
                                                        EmployeeInfo.last_name
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-start items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiMail, {
                                                    size: 20
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-lg ml-2",
                                                    children: EmployeeInfo.email
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-start items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlinePhone, {
                                                    size: 23
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-lg ml-2",
                                                    children: EmployeeInfo.phone_number
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-start items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsCalendarDate, {
                                                    size: 22
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-lg ml-2",
                                                    children: moment_moment__WEBPACK_IMPORTED_MODULE_9___default()(EmployeeInfo.date_of_birth).format("dddd, MMMM Do YYYY")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-start items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsGenderAmbiguous, {
                                                    size: 22
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-lg ml-2",
                                                    children: EmployeeInfo.gender
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col items-start md:items-end",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-row md:flex-col items-end",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mb-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InformationTag_InformationTag__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                title: EmployeeInfo.Role.title,
                                                type: "secondry",
                                                size: "lg"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mb-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InformationTag_InformationTag__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                title: EmployeeInfo.Designation.title,
                                                type: "pOrange",
                                                size: "lg"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mb-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InformationTag_InformationTag__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                title: EmployeeInfo.expertise,
                                                type: "base",
                                                size: "lg"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: "text-lg mb-2 mr-2 opacity-75 text-left md:text-right",
                                    children: [
                                        EmployeeInfo.years_of_experience,
                                        " years of Experience"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: "text-lg mb-2 mr-2 opacity-75 text-left md:text-right",
                                    children: [
                                        "Joined on",
                                        " ",
                                        moment_moment__WEBPACK_IMPORTED_MODULE_9___default()(EmployeeInfo.createdAt).format("dddd, MMMM Do YYYY")
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tabdevider h-[1.5px] my-4 bg-opacity-10 bg-white w-full rounded-lg"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-lg font-semibold",
                    children: "Projects Assigned "
                }),
                EmployeeInfo.userProjects.length == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Empty, {
                    image: antd__WEBPACK_IMPORTED_MODULE_1__.Empty.PRESENTED_IMAGE_SIMPLE,
                    description: "No Projects Assigned!"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "inline-grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4 w-full mt-4",
                    children: EmployeeInfo.userProjects.map((item)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "project_container cursor-pointer",
                            onClick: ()=>router.push({
                                    pathname: "/app/u/projects",
                                    query: {
                                        projectId: item.project.id,
                                        projectName: item.project.name
                                    },
                                    shallow: true
                                }),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Projects_ProjectsContainer_ProjectsContainer__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                ProjectName: item.project.project_name,
                                tagTitle: item.project.projectDomainsId,
                                type: "minimal"
                            })
                        }, item.id);
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-lg font-semibold mt-4",
                    children: "Teams Assigned "
                }),
                EmployeeInfo.UserTeams.length == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Empty, {
                    image: antd__WEBPACK_IMPORTED_MODULE_1__.Empty.PRESENTED_IMAGE_SIMPLE,
                    description: "No Teams Assigned!"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "inline-grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4 w-full mt-4",
                    children: EmployeeInfo.UserTeams.map((item)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "team_container cursor-pointer",
                            onClick: ()=>router.push({
                                    pathname: "/app/u/teams",
                                    query: {
                                        teamId: item.team.id,
                                        teamName: item.team.name
                                    },
                                    shallow: true
                                }),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Projects_ProjectsContainer_ProjectsContainer__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                ProjectName: item.team.team_name,
                                tagTitle: item.team.teamDomainsId,
                                type: "minimal"
                            })
                        }, item.id);
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InformationTag)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function InformationTag({ title ="Mobile App" , type ="primary" , size ="xs" ,  }) {
    var classStringParent = "mr-1 px-2 py-1 w-fit rounded-full flex flex-col justify-center items-center ";
    var classStringChild = "font-light text-" + size + " ";
    if (type == "primary") {
        classStringParent += "bg-primary bg-opacity-20";
        classStringChild += "text-primary";
    } else if (type == "secondry") {
        classStringParent += "bg-secondry bg-opacity-20";
        classStringChild += "text-secondry";
    } else if (type == "intermediate") {
        classStringParent += "bg-intermediate bg-opacity-20";
        classStringChild += "text-intermediate";
    } else if (type == "pOrange") {
        classStringParent += "bg-pOrange bg-opacity-20";
        classStringChild += "text-pOrange";
    } else if (type == "base") {
        classStringParent += "bg-gray-500 bg-opacity-20";
        classStringChild += "";
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classStringParent,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: classStringChild,
            children: title
        })
    });
}


/***/ }),

/***/ 6166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProjectsContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InformationTag_InformationTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7597);


function ProjectsContainer({ ProjectName ="Project Name" , tagTitle ="Software Dev" , employeesCount ="000" , teamsCount ="000" , ticketsCount ="000" , type ="normal" ,  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${type != "normal" ? "h-[6.5rem] w-full md:w-80" : "h-44 w-full md:w-96"} bg-gray-900 rounded-md shadow-sm p-6 flex flex-col justify-between`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "Project-main-Image rounded-lg w-14 h-14 bg-gray-700 flex justify-center items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "font-bold text-5xl",
                            children: ProjectName[0]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "projects-container-main-info ml-3 flex flex-col justify-center items-start",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "pb-1 text-xl font-semibold",
                                children: ProjectName
                            }),
                            type == "normal" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "project-tags flex flex-row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InformationTag_InformationTag__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    title: tagTitle,
                                    type: "intermediate"
                                })
                            }) : ""
                        ]
                    })
                ]
            }),
            type == "normal" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "projects-attributes flex flex-row justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-secondry font-bold text-2xl",
                                children: employeesCount == 0 ? "000" : employeesCount
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm opacity-80",
                                children: "Members"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-pOrange font-bold text-2xl",
                                children: teamsCount == 0 ? "000" : teamsCount
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm opacity-80",
                                children: "Teams"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-intermediate font-bold text-2xl",
                                children: ticketsCount == 0 ? "000" : ticketsCount
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm opacity-80",
                                children: "Tickets"
                            })
                        ]
                    })
                ]
            }) : ""
        ]
    });
}


/***/ })

};
;