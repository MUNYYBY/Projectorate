"use strict";
exports.id = 973;
exports.ids = [973];
exports.modules = {

/***/ 8555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PieChart_ProjectTicketsChart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/PieChart/Options.js
const options = {
    chart: {
        type: "donut",
        foreColor: "#d4d7dc"
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: true,
                    value: {
                        show: true,
                        fontSize: "16px",
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                        offsetY: 1,
                        formatter: function(val) {
                            return val;
                        }
                    },
                    total: {
                        show: true,
                        label: "Total",
                        fontSize: "14px",
                        formatter: function(w) {
                            return w.globals.seriesTotals.reduce((a, b)=>{
                                return a + b;
                            }, 0);
                        }
                    }
                }
            }
        }
    },
    stroke: {
        show: false,
        width: 0
    },
    datasets: [
        {
            borderColor: [
                "#ffff"
            ]
        }, 
    ],
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 250
                },
                legend: {
                    position: "bottom"
                }
            }
        }, 
    ]
};

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/PieChart/ProjectTicketsChart.js


// import Chart from "react-apexcharts";


const Chart = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\PieChart\\ProjectTicketsChart.js -> " + "react-apexcharts"
        ]
    },
    ssr: false
});
class ProjectTicketsChart extends external_react_.Component {
    constructor(props){
        super(props);
        console.log(props.Tickets);
        this.state = {
            series: [
                props.Tickets.todo,
                props.Tickets.inProgress,
                props.Tickets.done,
                props.Tickets.resolved,
                props.Tickets.tested,
                props.Tickets.hold, 
            ],
            options: {
                ...options,
                labels: [
                    "Todo",
                    "In-progress",
                    "Done",
                    "Resolved",
                    "Tested",
                    "Hold"
                ]
            }
        };
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "donut bg-gray-800 p-2 rounded-lg flex flex-col justify-center items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-gray-400 font-semibold text-sm",
                    children: "Tickets"
                }),
                 false && /*#__PURE__*/ 0
            ]
        });
    }
}
/* harmony default export */ const PieChart_ProjectTicketsChart = (ProjectTicketsChart);


/***/ }),

/***/ 1072:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AllTickets)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(598);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3332);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _InformationTag_InformationTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7597);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_requests__WEBPACK_IMPORTED_MODULE_3__]);
_client_requests__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function AllTickets({ projectId =null , teamId =null , isNewEmployee , setisNewEmployee , setIsTicketInfo ,  }) {
    const { 0: ticketsData , 1: setTicketsData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const columns = [
        {
            title: "Title",
            width: 150,
            render: (_, { title , id  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "underline cursor-pointer",
                    onClick: ()=>setIsTicketInfo({
                            id
                        }),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: title
                    })
                }),
            key: "title"
        },
        {
            title: "Description",
            dataIndex: "description",
            width: 300,
            key: "description"
        },
        {
            title: "Project",
            render: (_, { project  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InformationTag_InformationTag__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: project.project_name,
                    type: "secondry",
                    size: "md"
                }),
            key: "projectId"
        },
        {
            title: "Team",
            render: (_, { team  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InformationTag_InformationTag__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: team.team_name,
                    type: "pOrange",
                    size: "md"
                }),
            key: "teamId"
        },
        {
            title: "Assigned to",
            render: (_, { employee  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InformationTag_InformationTag__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: employee.first_name + " " + employee.last_name,
                    type: "base",
                    size: "md"
                }),
            key: "AssignedTo"
        },
        {
            title: "Status",
            render: (_, { TicketStatus  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: TicketStatus.title
                }),
            key: "TicketStatus"
        },
        {
            title: "Piority",
            render: (_, { TicketPiority  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: TicketPiority.title
                }),
            key: "TicketStatus"
        },
        {
            title: "Deadline",
            render: (_, { deadline  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(deadline).format("MMMM Do YYYY")
                }),
            key: "Deadline"
        }, 
    ];
    //This function get the new employees when
    //CheckforNewEmployees gets true
    const getTicktsData = async ()=>{
        setLoading(true);
        if (projectId) {
            const res = await (0,_client_requests__WEBPACK_IMPORTED_MODULE_3__/* .getProjectTickets */ .D6)(projectId).then((res)=>{
                if (res.data) {
                    setLoading(false);
                    setTicketsData(res.data.result);
                } else {
                    console.log(res);
                    setLoading(false);
                    antd__WEBPACK_IMPORTED_MODULE_1__.message.error("Error while fetching project tickets!");
                }
            });
        } else if (teamId) {
            const res1 = await (0,_client_requests__WEBPACK_IMPORTED_MODULE_3__/* .getTeamTickets */ .GV)(teamId).then((res)=>{
                if (res.data) {
                    setLoading(false);
                    setTicketsData(res.data.result);
                } else {
                    console.log(res);
                    setLoading(false);
                    antd__WEBPACK_IMPORTED_MODULE_1__.message.error("Error while fetching team tickets!");
                }
            });
        }
    };
    //fetch employee if a new employee has been added
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isNewEmployee) {
            getTicktsData();
            setisNewEmployee(false);
        }
    }, [
        isNewEmployee
    ]);
    //Call the getNewEmployees function when needed
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getTicktsData();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col justify-center items-center -mt-4",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "project_employees_data_table w-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Table, {
                columns: columns,
                dataSource: ticketsData,
                scroll: {
                    x: 1000
                },
                className: "rounded-none",
                style: {
                    borderRadius: "0 !impotant"
                },
                loading: loading
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;