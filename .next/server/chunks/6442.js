"use strict";
exports.id = 6442;
exports.ids = [6442];
exports.modules = {

/***/ 5936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CreateTicketBtn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);



function CreateTicketBtn() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "bg-intermediate bg-opacity-70 hover:bg-opacity-100 transition-all py-2 px-4 rounded-md flex flex-row justify-center items-center drop-shadow-2xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosAdd, {
                size: 26
            }),
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Create Ticket"
            })
        ]
    });
}


/***/ }),

/***/ 1026:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CreateTicketModel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(598);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5452);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_rx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Devider_Devider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3588);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6197);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_requests__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_11__]);
([_client_requests__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function CreateTicketModel({ teamsData =[] , setIsCreateTicket ,  }) {
    //** States */
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
    const { 0: teams , 1: setTeams  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(teamsData);
    const { 0: employees , 1: setEmployees  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: ticketStatus , 1: setTicketStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: ticketPiority , 1: setTicketPiority  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: isSubmitted , 1: setIsSubmitted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: selectedTeam , 1: setSelectedTeam  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: resource , 1: setResource  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    //** Ant Design */
    const { TextArea  } = antd__WEBPACK_IMPORTED_MODULE_4__.Input;
    //** Form initialitzation */
    const [form] = antd__WEBPACK_IMPORTED_MODULE_4__.Form.useForm();
    //** Form submission */
    function onFinish(values) {
        const payload = {
            title: values.title,
            description: values.description,
            deadline: values.deadline,
            userId: session.user.id,
            teamId: values.team,
            employeeId: values.employee,
            ticketStatusId: values.ticket_status,
            ticketPiorityId: values.ticket_piority,
            resource: ""
        };
        setLoading(true);
        if (resource) {
            (0,_client_requests__WEBPACK_IMPORTED_MODULE_2__/* .UploadFile */ .G1)(resource).then((res)=>{
                if (!res.error) {
                    payload.resource = res.data.newName;
                    (0,_client_requests__WEBPACK_IMPORTED_MODULE_2__/* .CreateTicket */ .HO)(payload).then((res)=>{
                        if (!res.error) {
                            setLoading(false);
                            antd__WEBPACK_IMPORTED_MODULE_4__.message.success(`Created and assigned a ticket to an employee!`);
                            setIsCreateTicket(false);
                        } else {
                            antd__WEBPACK_IMPORTED_MODULE_4__.message.error(`Error while Creating and assigning a ticket to an employee!`);
                            setLoading(false);
                        }
                    });
                } else {
                    antd__WEBPACK_IMPORTED_MODULE_4__.message.error(`Error while uploading resource for ticket!`);
                    setLoading(false);
                }
            }).catch((err)=>{
                console.log(err);
                setLoading(false);
            });
        } else {
            (0,_client_requests__WEBPACK_IMPORTED_MODULE_2__/* .CreateTicket */ .HO)(payload).then((res)=>{
                if (!res.error) {
                    setLoading(false);
                    antd__WEBPACK_IMPORTED_MODULE_4__.message.success(`Created and assigned a ticket to an employee!`);
                    setIsCreateTicket(false);
                } else {
                    antd__WEBPACK_IMPORTED_MODULE_4__.message.error(`Error while Creating and assigning a ticket to an employee!`);
                    setLoading(false);
                }
            });
        }
    }
    //** Check which among states are empty and fetch those */
    async function handleFetching() {
        if (teams.length == 0) {
            setLoading(true);
            await (0,_client_requests__WEBPACK_IMPORTED_MODULE_2__/* .getAllTeams */ .qX)().then((res)=>{
                if (!res.error) {
                    setTeams(res.data);
                    setLoading(false);
                } else {
                    antd__WEBPACK_IMPORTED_MODULE_4__.message.error("Error while getting all teams!");
                }
            });
        }
        if (employees.length == 0) {
            setLoading(true);
            await (0,_client_requests__WEBPACK_IMPORTED_MODULE_2__/* .getEmployees */ .fN)().then((res)=>{
                if (!res.error) {
                    setEmployees(res.data);
                    setLoading(false);
                } else {
                    antd__WEBPACK_IMPORTED_MODULE_4__.message.error("Error while getting all employees!");
                }
            });
        }
        if (ticketStatus.length == 0) {
            setLoading(true);
            await (0,_client_requests__WEBPACK_IMPORTED_MODULE_2__/* .getTicketsStatus */ .L)().then((res)=>{
                if (!res.error) {
                    setTicketStatus(res.data.data);
                    setLoading(false);
                } else {
                    antd__WEBPACK_IMPORTED_MODULE_4__.message.error("Error while getting tickets status!");
                }
            });
        }
        if (ticketPiority.length == 0) {
            setLoading(true);
            await (0,_client_requests__WEBPACK_IMPORTED_MODULE_2__/* .getTicketsPiority */ .Xd)().then((res)=>{
                if (!res.error) {
                    setTicketPiority(res.data.data);
                    setLoading(false);
                } else {
                    antd__WEBPACK_IMPORTED_MODULE_4__.message.error("Error while getting tickets piority!");
                }
            });
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleFetching();
    }, []);
    const hiddenFileInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleChooseFileBtn = (event)=>{
        hiddenFileInput.current.click();
    };
    const handleFileInputChange = (e)=>{
        console.log(e.target.files[0]);
        setResource(e.target.files[0]);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
        initial: {
            y: 10,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.15,
            ease: "easeIn"
        },
        className: "flex flex-col items-center z-10 w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "create-ticket-model mb-4",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-gray-900 p-4 rounded-md drop-shadow-lg flex flex-col justify-between items-center w-[22rem] sm:w-[35rem]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "flex flex-row justify-between items-center w-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-center items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsWindowDock, {
                                        size: 24
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "ml-2 font-semibold text-lg",
                                        children: "Create Ticket"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row justify-center items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                                        placement: "top",
                                        title: "Add resource",
                                        mouseEnterDelay: 0.05,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-white bg-opacity-10 hover:bg-opacity-20 transition-all cursor-pointer p-2 rounded-full mr-3",
                                            onClick: ()=>handleChooseFileBtn(),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineFileAdd, {
                                                    size: 18
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "file",
                                                    className: "hidden",
                                                    multiple: false,
                                                    placeholder: "Choose file",
                                                    ref: hiddenFileInput,
                                                    onChange: handleFileInputChange
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "cancel-btn opacity-60 hover:opacity-100",
                                        onClick: ()=>setIsCreateTicket(false),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_rx__WEBPACK_IMPORTED_MODULE_5__.RxCross1, {
                                            size: 24
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "my-4 w-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Devider_Devider__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            color: "bg-gray-800",
                            width: "w-full",
                            opacity: "opacity-1"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Form, {
                        form: form,
                        layout: "vertical",
                        name: "create project - part 1",
                        onFinish: onFinish,
                        style: {
                            width: "100%"
                        },
                        scrollToFirstError: true,
                        disabled: loading,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {
                                name: "title",
                                label: "Title",
                                rules: [
                                    {
                                        required: true,
                                        message: "Ticket title is required!"
                                    },
                                    {
                                        min: 5,
                                        message: "Ticket title must be atleast 5 characters long!"
                                    },
                                    {
                                        whitespace: true,
                                        message: "Ticket title must be atleast 1 non-whitespace character!"
                                    }, 
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Input, {
                                    placeholder: "Enter a ticket title"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {
                                name: "description",
                                label: "Description",
                                rules: [
                                    {
                                        required: true,
                                        message: "Description title is required!"
                                    },
                                    {
                                        min: 5,
                                        message: "Ticket Description must be atleast 5 characters long!"
                                    },
                                    {
                                        whitespace: true,
                                        message: "Ticket Description must be atleast 1 non-whitespace character!"
                                    }, 
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextArea, {
                                    rows: 4,
                                    placeholder: "Enter a description"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {
                                        name: "team",
                                        label: "Team",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Please select a team!"
                                            }, 
                                        ],
                                        className: "w-full",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Select, {
                                            placeholder: "Select team",
                                            onChange: (item)=>{
                                                console.log(item);
                                                setSelectedTeam(item);
                                            },
                                            children: teams.map((item)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Select.Option, {
                                                    value: item.id,
                                                    children: item.team_name
                                                }, item.id);
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {
                                        name: "employee",
                                        label: "Assignee Employee",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Please select a Assignee Employee!"
                                            }, 
                                        ],
                                        className: "w-full ml-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Select, {
                                            disabled: !selectedTeam,
                                            placeholder: "Select employee",
                                            children: employees.map((item)=>{
                                                if (item.UserTeams.find((team)=>team.team_id == selectedTeam)) {
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Select.Option, {
                                                        value: item.id,
                                                        children: [
                                                            item.first_name,
                                                            " ",
                                                            item.last_name
                                                        ]
                                                    }, item.id);
                                                }
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {
                                        name: "ticket_status",
                                        label: "Ticket status",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Please select a ticket status!"
                                            }, 
                                        ],
                                        className: "w-full",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Select, {
                                            placeholder: "Select a status",
                                            children: ticketStatus.map((item)=>{
                                                const color = item.title == "Todo" ? "green" : item.title == "In-progress" ? "orange" : item.title == "Done" ? "purple" : item.title == "Resolved" ? "blue" : item.title == "Tested but not resolved" ? "red" : "white";
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Select.Option, {
                                                    value: item.id,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-start items-center -mb-7",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "h-3 w-3 rounded-full opacity-30 mr-2",
                                                                style: {
                                                                    backgroundColor: color
                                                                }
                                                            }),
                                                            item.title
                                                        ]
                                                    })
                                                }, item.id);
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {
                                        name: "ticket_piority",
                                        label: "Ticket piority",
                                        rules: [
                                            {
                                                required: true,
                                                message: "Please give a ticket piority!"
                                            }, 
                                        ],
                                        className: "w-full ml-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Select, {
                                            placeholder: "Select a piority",
                                            children: ticketPiority.map((item)=>{
                                                const color = item.title == "Urgent" ? "red" : item.title == "High" ? "yellow" : item.title == "Normal" ? "green" : "white";
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Select.Option, {
                                                    value: item.id,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-start items-center -mb-7",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaFlag, {
                                                                color: color,
                                                                className: "mr-2"
                                                            }),
                                                            item.title
                                                        ]
                                                    })
                                                }, item.id);
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {
                                name: "deadline",
                                label: "Ticket Deadline",
                                rules: [
                                    {
                                        required: true,
                                        message: "Ticket Deadline is required!"
                                    }, 
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.DatePicker, {
                                    className: "w-full",
                                    disabledDate: (current)=>{
                                        return moment__WEBPACK_IMPORTED_MODULE_10___default()().add(-1, "days") >= current || moment__WEBPACK_IMPORTED_MODULE_10___default()().add(1, "month") <= current;
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "bg-primary h-12 p-2 rounded-md flex flex-row justify-center items-center w-full text-lg font-semibold mt-4 disabled:opacity-50",
                                disabled: loading,
                                children: loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                    class: "animate-spin -ml-1 h-5 w-5 text-white",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                            class: "opacity-25",
                                            cx: "12",
                                            cy: "12",
                                            r: "10",
                                            stroke: "currentColor",
                                            "stroke-width": "4"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            class: "opacity-75",
                                            fill: "currentColor",
                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Create"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7153:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TicketInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Devider_Devider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3588);
/* harmony import */ var _client_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(598);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Permissions_AuthorityCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3802);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_requests__WEBPACK_IMPORTED_MODULE_4__]);
_client_requests__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















function TicketInfo(props) {
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: downloadloading , 1: setDownloadLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: ticketInfo , 1: setTicketInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: ticketStatus , 1: setTicketStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_12__.useSession)();
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
    function AssignEmployeeConfirm(employeeId) {}
    function OnAssignEmployeeCancel() {}
    //** Fetch all avaible employees */
    function handleTicketFetching() {
        if (props.isTicketInfo.id) {
            setLoading(true);
            (0,_client_requests__WEBPACK_IMPORTED_MODULE_4__/* .GetTicketInfo */ .Q4)(props.isTicketInfo.id).then((res)=>{
                if (!res.error) {
                    setTicketInfo(res.data.data);
                    setLoading(false);
                } else {
                    setLoading(false);
                    antd__WEBPACK_IMPORTED_MODULE_1__.message.error("Some error occoured while fetching project employees!");
                }
            });
            (0,_client_requests__WEBPACK_IMPORTED_MODULE_4__/* .getTicketsStatus */ .L)().then((res)=>{
                if (!res.error) {
                    setTicketStatus(res.data.data);
                } else {
                    antd__WEBPACK_IMPORTED_MODULE_1__.message.error("Some error occoured while fetching project employees!");
                }
            });
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        handleTicketFetching();
    }, [
        props.isTicketInfo.id
    ]);
    //** Handle when ticket status changes */
    function handleStatusChange(id) {
        (0,_client_requests__WEBPACK_IMPORTED_MODULE_4__/* .ChangeTicketStatus */ .AF)(ticketInfo.id, id).then((res)=>{
            if (!res.error) {
                antd__WEBPACK_IMPORTED_MODULE_1__.message.success("Ticket status has been changed!");
                handleTicketFetching();
            } else {
                antd__WEBPACK_IMPORTED_MODULE_1__.message.error("Error while changing status of ticket!");
            }
        });
    }
    //** Handle Ticket Delete */
    function handleTicketDelete() {
        setLoading(true);
        (0,_client_requests__WEBPACK_IMPORTED_MODULE_4__/* .DeleteTicket */ .cc)(ticketInfo.id, session.user.id).then((res)=>{
            if (!res.error) {
                antd__WEBPACK_IMPORTED_MODULE_1__.message.success("Ticket status has been deleted!");
                props.setIsTicketInfo({
                    id: null
                });
            } else {
                antd__WEBPACK_IMPORTED_MODULE_1__.message.error("Error while changing status of ticket!");
                setLoading(false);
            }
        });
    }
    //** check for ticket status */
    const TicketStatus = (status)=>{
        let color = "orange";
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `rounded-full text-lg bg-opacity-25`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                style: {
                    color: color
                },
                children: status
            })
        });
    };
    function downloadResource(url) {
        setDownloadLoading(true);
        (0,_client_requests__WEBPACK_IMPORTED_MODULE_4__/* .DownloadFile */ .xn)(url).then((res)=>{
            if (!res.data) {
                antd__WEBPACK_IMPORTED_MODULE_1__.message.error("Error while downloading resouce!");
                setDownloadLoading(false);
            } else {
                antd__WEBPACK_IMPORTED_MODULE_1__.message.success("Resource download started!");
                setDownloadLoading(false);
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Drawer, {
        title: "Ticket",
        onClose: ()=>props.setIsTicketInfo({
                id: null
            }),
        open: props.isTicketInfo.id,
        bodyStyle: {
            paddingBottom: 80
        },
        width: windowSize[0] > 1100 ? "70%" : "100%",
        children: loading || !ticketInfo ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                    className: "mt-56",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                        active: true
                    })
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "tickets-info",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: "flex flex-row justify-between",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col w-full",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col md:flex-row justify-between items-start md:items-center w-full",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row items-center opacity-75",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-6",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiTask, {
                                                        size: 28
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-xl md:text-3xl font-semibold ml-2",
                                                    children: ticketInfo.title
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "md:m-0 m-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                                defaultValue: ()=>{
                                                    const compute = ticketStatus.find((status)=>status.id == ticketInfo.ticketStatusId);
                                                    return compute?.title;
                                                },
                                                style: {
                                                    width: 200
                                                },
                                                onChange: (id)=>handleStatusChange(id),
                                                children: ticketStatus.map((item)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select.Option, {
                                                        value: item.id,
                                                        children: item.title
                                                    }, item.id);
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-lg flex flex-row items-center",
                                    children: [
                                        TicketStatus(ticketInfo.TicketStatus.title),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "ml-2",
                                            children: [
                                                ticketInfo.user.employee.first_name,
                                                " ",
                                                ticketInfo.user.employee.last_name
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "opacity-50 ml-2",
                                            children: [
                                                "Opened on",
                                                " ",
                                                moment__WEBPACK_IMPORTED_MODULE_6___default()(ticketInfo.createdAt).format("MMMM Do YYYY")
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "tabdevider h-[1.5px] my-4 bg-opacity-10 bg-white w-full rounded-lg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "border-2 border-gray-600 rounded-lg p-4 h-full",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "h-[20rem]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "italic mb-4 font-bold opacity-30",
                                    children: "Description"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: ticketInfo.description
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "tabdevider h-[1.5px] my-4 bg-opacity-10 bg-white w-full rounded-lg"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col md:flex-row justify-between w-full h-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col w-full md:w-1/2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between w-full text-base mb-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "opacity-50",
                                                children: "Assigned to"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__.RiAccountCircleFill, {
                                                        size: 22,
                                                        className: "mr-2"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        className: "",
                                                        children: [
                                                            ticketInfo.employee.first_name,
                                                            " ",
                                                            ticketInfo.employee.last_name
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between w-full text-base mb-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "opacity-50",
                                                children: "Project"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "",
                                                children: ticketInfo.project.project_name
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between w-full text-base mb-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "opacity-50",
                                                children: "Team"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "",
                                                children: ticketInfo.team.team_name
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between w-full text-base mb-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "opacity-50",
                                                children: "Deadline"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "",
                                                children: moment__WEBPACK_IMPORTED_MODULE_6___default()(ticketInfo.deadline).format("MMMM Do YYYY")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between w-full text-base mb-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "opacity-50",
                                                children: "Piority"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaFlag, {
                                                        className: "mr-2"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "",
                                                        children: ticketInfo.TicketPiority.title
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tabdevider w-[1.5px] md:flex hidden h-[10rem] mx-4 bg-opacity-10 bg-white rounded-lg"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full md:w-1/2 flex flex-col",
                                children: [
                                    ticketInfo.Resource[0].url ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: "py-2 mb-4 bg-green-600 bg-opacity-20 hover:bg-opacity-30 transition-all w-full rounded-lg flex flex-row justify-center items-center disabled:opacity-50",
                                        onClick: ()=>downloadResource(ticketInfo.Resource[0].url),
                                        disabled: downloadloading,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsWindowDock, {
                                                color: "green",
                                                size: 20
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-green-600 tex-xl font-bold ml-2",
                                                children: "Downlaod Resource"
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "py-2 mb-4 bg-white bg-opacity-10 transition-all w-full rounded-lg flex flex-row justify-center items-center disabled:opacity-50",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsWindowDock, {
                                                    color: "white",
                                                    size: 20
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-white-600 tex-xl font-bold ml-2",
                                                    children: "No resource added!"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Permissions_AuthorityCheck__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        grantPermissionFor: "manage_tickets",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Popconfirm, {
                                            title: `Are you sure you want to delete this ticket?`,
                                            onConfirm: ()=>{
                                                handleTicketDelete();
                                            },
                                            //   onCancel={cancel}
                                            okText: "Confirm",
                                            cancelText: "No",
                                            placement: "top",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: "py-2 bg-red-600 bg-opacity-20 hover:bg-opacity-30 transition-all w-full rounded-lg flex flex-row justify-center items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiTrash2, {
                                                        color: "red",
                                                        size: 20
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-red-600 tex-xl font-bold ml-2",
                                                        children: "Delete Ticket"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;