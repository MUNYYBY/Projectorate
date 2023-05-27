"use strict";
(() => {
var exports = {};
exports.id = 1575;
exports.ids = [1575];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 2124:
/***/ ((module) => {

module.exports = require("js-file-download");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 8374:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports createEmployee, UpdateEmployeeAPI, getEmployees, getEmployeeProfile, getEmployeeInfo, deleteEmployee, getDesignations, getRoles, getAllEmployeesAnalytics, GetAnalytics, getSeniorEmployeesAnalytics, getAssociateEmployeesAnalytics, getInternEmployeesAnalytics, getProjectDomains, createProject, UpdateProjectAPI, getAllProjects, GetSpecificProject, DeleteProject, getProjectEmployees, getProjectTeams, DeleteEmployeeFromProject, SearchEmployee, AssignEmployeeToProject, getTeamDomains, getAllTeams, createTeam, UpdateTeamAPI, GetSpecificTeam, DeleteTeam, getTeamEmployees, DeleteEmployeeFromTeam, AssignEmployeeToTeam, CreateTicket, GetTicketInfo, getTicketsStatus, getTicketsPiority, getProjectTickets, GetUserTickets, getTeamTickets, getALlTickets, ChangeTicketStatus, DeleteTicket, UploadFile, DownloadFile, getAllLogs */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2124);
/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_file_download__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function createEmployee(payload) {
    try {
        const res = await axios.post("http://projectorate.org/api" + "/employee/add-employee", payload);
        console.log("hello ", res.data);
        return res.data;
    } catch (error) {
        console.log("Error While add employee: ", error);
        return {
            error: error
        };
    }
}
async function UpdateEmployeeAPI(payload) {
    try {
        const res = await axios.post("http://projectorate.org/api" + "/employee/update-employee", payload);
        console.log("Updated employee: ", res.data);
        return res.data;
    } catch (error) {
        console.log("Error While add employee: ", error);
        return {
            error: error
        };
    }
}
async function getEmployees() {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/employee/get-employees");
        return res.data;
    } catch (error) {
        console.log("Error While getting employee: ", error);
    }
}
async function getEmployeeProfile(id) {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/employee/get-employee-profile?employeeId=" + id);
        return res.data;
    } catch (error) {
        console.log("Error While getting Employee Profile: ", error);
        return {
            error: error.response
        };
    }
}
async function getEmployeeInfo(id) {
    console.log(id);
    try {
        const res = await axios.get("http://projectorate.org/api" + "/employee/get-employee-info?id=" + id);
        return res.data;
    } catch (error) {
        console.log("Error While getting employee info: ", error);
    }
}
async function deleteEmployee(id, userId) {
    try {
        const res = await axios.delete("http://projectorate.org/api" + "/employee/delete-employees?id=" + id + "&userId=" + userId);
        return res;
    } catch (error) {
        console.log("Error While deleting employee: ", error);
        return error.response.data;
    }
}
//get all the designations in the database
async function getDesignations() {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/designations/get-designations");
        return res.data;
    } catch (error) {
        console.log("Error While getting designations at front-end: ", error);
    }
}
//get all the roles in the database
async function getRoles() {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/roles/get-roles");
        return res.data;
    } catch (error) {
        console.log("Error While getting roles at front-end: ", error);
    }
}
//get Analytics
async function getAllEmployeesAnalytics() {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/analytics/all-employees");
        return res.data;
    } catch (error) {
        console.log("Error While getting all employees count at front-end: ", error);
    }
}
async function GetAnalytics() {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/analytics/analytics");
        return res.data;
    } catch (error) {
        console.log("Error While getting analytics at front-end: ", error);
    }
}
async function getSeniorEmployeesAnalytics() {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/analytics/senior-employees");
        return res.data;
    } catch (error) {
        console.log("Error While getting Senior Count at front-end: ", error);
    }
}
async function getAssociateEmployeesAnalytics() {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/analytics/associate-employees");
        return res.data;
    } catch (error) {
        console.log("Error While getting associate Count at front-end: ", error);
    }
}
async function getInternEmployeesAnalytics() {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/analytics/interns-employees");
        return res.data;
    } catch (error) {
        console.log("Error While getting intern Count at front-end: ", error);
    }
}
//get all the project domains in the database
async function getProjectDomains() {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/project-domains/get-project-domains");
        return res.data;
    } catch (error) {
        console.log("Error While getting project domains at front-end: ", error);
        return {
            error: error
        };
    }
}
//Projects api calls
async function createProject(payload) {
    try {
        const res = await axios.post("http://projectorate.org/api" + "/projects/create-project", payload);
        return res.data;
    } catch (error) {
        console.log("Error While creating project: ", error);
        return {
            error: error
        };
    }
}
async function UpdateProjectAPI(payload) {
    try {
        const res = await axios.post("http://projectorate.org/api" + "/projects/update-project", payload);
        return res;
    } catch (error) {
        console.log("Error While creating project: ", error);
        return {
            error: error
        };
    }
}
async function getAllProjects() {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/projects/get-all-projects");
        return res.data;
    } catch (error) {
        console.log("Error While getting projects: ", error);
    }
}
async function GetSpecificProject(propjectId) {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/projects/get-project?projectId=" + propjectId);
        return res.data;
    } catch (error) {
        console.log("Error While getting employee: ", error);
        return {
            error: error.response.data
        };
    }
}
async function DeleteProject(projectId, user_id) {
    try {
        const res = await axios.delete("http://projectorate.org/api" + `/projects/delete-project?projectId=${projectId}&user_id=${user_id}`);
        return res;
    } catch (error) {
        console.log("Error While deleting employee from project: ", error);
        return {
            error: error.response.data
        };
    }
}
async function getProjectEmployees(projectId) {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/projects/get-project-employees?projectId=" + projectId);
        return res.data;
    } catch (error) {
        console.log("Error While getting employee: ", error);
        return {
            error: error.response.data
        };
    }
}
async function getProjectTeams(projectId) {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/teams/get-project-teams?projectId=" + projectId);
        return res.data;
    } catch (error) {
        console.log("Error While getting project teams: ", error);
        return {
            error: error.response.data
        };
    }
}
async function DeleteEmployeeFromProject(employeeId, projectId, ownerId) {
    try {
        const res = await axios.delete("http://projectorate.org/api" + `/projects/remove-employee-from-project?employeeId=${employeeId}&projectId=${projectId}&ownerId=${ownerId}`);
        return res;
    } catch (error) {
        console.log("Error While deleting employee from project: ", error);
        return {
            error: error.response.data
        };
    }
}
async function SearchEmployee(search) {
    try {
        const res = await axios.get("http://projectorate.org/api" + `/employee/search-employee?search=${search}`);
        return res;
    } catch (error) {
        console.log("Error While deleting employee from project: ", error);
        return {
            error: error.response
        };
    }
}
async function AssignEmployeeToProject(projectId, employeeId, ownerId) {
    try {
        const res = await axios.post("http://projectorate.org/api" + `/projects/assign-project-to-employee?projectId=${projectId}&userId=${employeeId}&ownerId=${ownerId}`);
        return res;
    } catch (error) {
        console.log("Error While assigning employee to project: ", error);
        return {
            error: error.response
        };
    }
}
//get all the Team domains in the database
async function getTeamDomains() {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/team-domains/get-team-domains");
        return res.data;
    } catch (error) {
        console.log("Error While getting Team domains at front-end: ", error);
        return {
            error: error
        };
    }
}
async function getAllTeams() {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/teams/get-all-teams");
        return res.data;
    } catch (error) {
        console.log("Error While getting all teams: ", error);
        return {
            error: error.response.data
        };
    }
}
async function createTeam(payload) {
    try {
        const res = await axios.post("http://projectorate.org/api" + "/teams/create-team", payload);
        return res.data;
    } catch (error) {
        console.log("Error While creating team: ", error);
        return {
            error: error
        };
    }
}
async function UpdateTeamAPI(payload) {
    try {
        const res = await axios.post("http://projectorate.org/api" + "/teams/update-team", payload);
        return res;
    } catch (error) {
        console.log("Error While creating team: ", error);
        return {
            error: error
        };
    }
}
async function GetSpecificTeam(teamId) {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/teams/get-team?teamId=" + teamId);
        return res.data;
    } catch (error) {
        console.log("Error While getting specific team: ", error);
        return {
            error: error.response.data
        };
    }
}
async function DeleteTeam(teamId, ownerId) {
    try {
        const res = await axios.delete("http://projectorate.org/api" + `/teams/delete-team?teamId=${teamId}&user_id=${ownerId}`);
        return res;
    } catch (error) {
        console.log("Error While deleting team: ", error);
        return {
            error: error.response.data
        };
    }
}
async function getTeamEmployees(teamId) {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/teams/get-team-employees?teamId=" + teamId);
        return res.data;
    } catch (error) {
        console.log("Error While getting employee: ", error);
        return {
            error: error.response.data
        };
    }
}
async function DeleteEmployeeFromTeam(employeeId, teamId, ownerId) {
    try {
        const res = await axios.delete("http://projectorate.org/api" + `/teams/remove-employee-from-team?employeeId=${employeeId}&teamId=${teamId}&ownerId=${ownerId}`);
        return res;
    } catch (error) {
        console.log("Error While deleting employee from teams: ", error);
        return {
            error: error.response.data
        };
    }
}
async function AssignEmployeeToTeam(teamId, employeeId, ownerId) {
    try {
        const res = await axios.post("http://projectorate.org/api" + `/teams/assign-team-to-employee?teamId=${teamId}&userId=${employeeId}&ownerId=${ownerId}`);
        return res;
    } catch (error) {
        console.log("Error While assigning employee to team: ", error);
        return {
            error: error.response
        };
    }
}
async function CreateTicket(payload) {
    try {
        const res = await axios.post("http://projectorate.org/api" + `/tickets/create-ticket`, payload);
        return res;
    } catch (error) {
        console.log("Error While creating ticket to team: ", error);
        return {
            error: error.response
        };
    }
}
async function GetTicketInfo(ticketId) {
    try {
        const res = await axios.get("http://projectorate.org/api" + `/tickets/get-ticket-info?ticketId=` + ticketId);
        return res;
    } catch (error) {
        console.log("Error While getting ticket info at front-end: ", error);
        return {
            error: error.response
        };
    }
}
async function getTicketsStatus() {
    try {
        const res = await axios.get("http://projectorate.org/api" + `/tickets-status/get-tickets-status`);
        return res;
    } catch (error) {
        console.log("Error While getting tickets status at front-end: ", error);
        return {
            error: error.response
        };
    }
}
async function getTicketsPiority() {
    try {
        const res = await axios.get("http://projectorate.org/api" + `/tickets-piority/get-tickets-piority`);
        return res;
    } catch (error) {
        console.log("Error While getting tickets status at front-end: ", error);
        return {
            error: error.response
        };
    }
}
async function getProjectTickets(projectId) {
    try {
        const res = await axios.get("http://projectorate.org/api" + `/tickets/get-project-tickets?projectId=` + projectId);
        return res;
    } catch (error) {
        console.log("Error While getting project tickets at front-end: ", error);
        return {
            error: error.response
        };
    }
}
async function GetUserTickets(userId) {
    try {
        const res = await axios.get("http://projectorate.org/api" + `/tickets/get-user-tickets?userId=` + userId);
        return res;
    } catch (error) {
        console.log("Error While getting user tickets at front-end: ", error);
        return {
            error: error.response
        };
    }
}
async function getTeamTickets(teamId) {
    try {
        const res = await axios.get("http://projectorate.org/api" + `/tickets/get-team-tickets?teamId=` + teamId);
        return res;
    } catch (error) {
        console.log("Error While getting project tickets at front-end: ", error);
        return {
            error: error.response
        };
    }
}
async function getALlTickets() {
    try {
        const res = await axios.get("http://projectorate.org/api" + `/tickets/get-all-tickets`);
        return res;
    } catch (error) {
        console.log("Error While getting all tickets at front-end: ", error);
        return {
            error: error.response
        };
    }
}
async function ChangeTicketStatus(ticketId, statusId) {
    try {
        const res = await axios.post("http://projectorate.org/api" + `/tickets/change-ticket-status?ticketId=${ticketId}&statusId=${statusId}`);
        return res;
    } catch (error) {
        console.log("Error While getting project tickets at front-end: ", error);
        return {
            error: error.response
        };
    }
}
async function DeleteTicket(ticketId, ownerId) {
    try {
        const res = await axios.delete("http://projectorate.org/api" + `/tickets/delete-ticket?ticketId=` + ticketId + `&ownerId=` + ownerId);
        return res;
    } catch (error) {
        console.log("Error While getting deleting ticket at front-end: ", error);
        return {
            error: error.response
        };
    }
}
async function UploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    const config = {
        headers: {
            "content-type": "multipart/form-data"
        },
        onUploadProgress: (event)=>{
            console.log(`Current progress:`, Math.round(event.loaded * 100 / event.total));
        }
    };
    try {
        const res = await axios.post("http://projectorate.org/api" + `/resources/upload`, formData);
        return res;
    } catch (error) {
        console.log("While uploading file:", error);
        return {
            error: error.response
        };
    }
}
async function DownloadFile(url) {
    try {
        axios({
            url: "http://projectorate.org/api" + `/resources/download`,
            method: "GET",
            responseType: "blob",
            params: {
                url: url
            }
        }).then((response)=>{
            console.log(response);
            fileDownload(response.data, `projectorate_resource_${url}`); //Change the image name to something usefull (maybe original)
        });
        return {
            data: true
        };
    } catch (error) {
        console.log("While uploading file:", error);
        return {
            error: error.response
        };
    }
}
async function getAllLogs() {
    try {
        const res = await axios.get("http://projectorate.org/api" + "/logs/get-all-logs");
        return res.data;
    } catch (error) {
        console.log("Error While getting projects: ", error);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 5138:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _client_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8374);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_requests__WEBPACK_IMPORTED_MODULE_0__]);
_client_requests__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }
    console.log("Get Project Teams End-point hit!");
    const { projectId  } = req.query;
    if (!projectId) {
        return res.status(500).json({
            message: "ProjectId is required!"
        });
    }
    try {
        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Teams.findMany */ .Z.Teams.findMany({
            where: {
                projectId: parseInt(projectId)
            },
            include: {
                project: {
                    select: {
                        project_name: true,
                        id: true
                    }
                },
                TeamDomains: {
                    select: {
                        title: true,
                        id: true
                    }
                },
                _count: {
                    select: {
                        UserTeams: true,
                        Tickets: true
                    }
                }
            }
        });
        console.log("All Projec Domains: ", data);
        res.status(200).json({
            data
        });
    } catch (error) {
        console.log("Error while getting Project Teams at backend: ", error);
        return res.status(422).json({
            error: "Error while getting Project Teams at backend: ",
            error
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5138));
module.exports = __webpack_exports__;

})();