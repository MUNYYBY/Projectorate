"use strict";
exports.id = 598;
exports.ids = [598];
exports.modules = {

/***/ 598:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$L": () => (/* binding */ createProject),
/* harmony export */   "AF": () => (/* binding */ ChangeTicketStatus),
/* harmony export */   "B1": () => (/* binding */ getTeamStatus),
/* harmony export */   "Cm": () => (/* binding */ createTeam),
/* harmony export */   "Cv": () => (/* binding */ ChangeProjectStatus),
/* harmony export */   "D6": () => (/* binding */ getProjectTickets),
/* harmony export */   "F3": () => (/* binding */ getRoles),
/* harmony export */   "FD": () => (/* binding */ UploadWork),
/* harmony export */   "G1": () => (/* binding */ UploadFile),
/* harmony export */   "G6": () => (/* binding */ getAllLogs),
/* harmony export */   "GV": () => (/* binding */ getTeamTickets),
/* harmony export */   "Gc": () => (/* binding */ ChangeTeamStatus),
/* harmony export */   "HO": () => (/* binding */ CreateTicket),
/* harmony export */   "I3": () => (/* binding */ getSeniorEmployeesAnalytics),
/* harmony export */   "Jh": () => (/* binding */ UpdateProjectAPI),
/* harmony export */   "Ko": () => (/* binding */ getAssociateEmployeesAnalytics),
/* harmony export */   "L": () => (/* binding */ getTicketsStatus),
/* harmony export */   "Nw": () => (/* binding */ DownloadWork),
/* harmony export */   "P6": () => (/* binding */ deleteEmployee),
/* harmony export */   "Q4": () => (/* binding */ GetTicketInfo),
/* harmony export */   "Qo": () => (/* binding */ DeleteProject),
/* harmony export */   "RW": () => (/* binding */ UpdateEmployeeAPI),
/* harmony export */   "T8": () => (/* binding */ getProjectTeams),
/* harmony export */   "Xd": () => (/* binding */ getTicketsPiority),
/* harmony export */   "Y": () => (/* binding */ getEmployeeInfo),
/* harmony export */   "YH": () => (/* binding */ getTeamDomains),
/* harmony export */   "Yw": () => (/* binding */ getAllProjects),
/* harmony export */   "ah": () => (/* binding */ DeleteEmployeeFromProject),
/* harmony export */   "cc": () => (/* binding */ DeleteTicket),
/* harmony export */   "fN": () => (/* binding */ getEmployees),
/* harmony export */   "fo": () => (/* binding */ UpdateTeamAPI),
/* harmony export */   "g8": () => (/* binding */ SearchEmployee),
/* harmony export */   "gA": () => (/* binding */ getProjectDomains),
/* harmony export */   "gf": () => (/* binding */ SetTicketWorkSubmission),
/* harmony export */   "jQ": () => (/* binding */ GetUserTickets),
/* harmony export */   "lU": () => (/* binding */ getProjectEmployees),
/* harmony export */   "mX": () => (/* binding */ GetSpecificProject),
/* harmony export */   "nU": () => (/* binding */ getInternEmployeesAnalytics),
/* harmony export */   "nn": () => (/* binding */ getProjectStatus),
/* harmony export */   "oZ": () => (/* binding */ DeleteEmployeeFromTeam),
/* harmony export */   "pH": () => (/* binding */ GetSpecificTeam),
/* harmony export */   "ps": () => (/* binding */ DeleteTeam),
/* harmony export */   "qI": () => (/* binding */ getDesignations),
/* harmony export */   "qX": () => (/* binding */ getAllTeams),
/* harmony export */   "qs": () => (/* binding */ getTeamEmployees),
/* harmony export */   "r2": () => (/* binding */ AssignEmployeeToProject),
/* harmony export */   "r8": () => (/* binding */ createEmployee),
/* harmony export */   "rk": () => (/* binding */ GetAnalytics),
/* harmony export */   "uL": () => (/* binding */ getAllEmployeesAnalytics),
/* harmony export */   "uw": () => (/* binding */ AssignEmployeeToTeam),
/* harmony export */   "ws": () => (/* binding */ getEmployeeProfile),
/* harmony export */   "xn": () => (/* binding */ DownloadFile)
/* harmony export */ });
/* unused harmony export getALlTickets */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2124);
/* harmony import */ var js_file_download__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_file_download__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function createEmployee(payload) {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://projectorate.org:3000/api" + "/employee/add-employee", payload);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://projectorate.org:3000/api" + "/employee/update-employee", payload);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/employee/get-employees");
        return res.data;
    } catch (error) {
        console.log("Error While getting employee: ", error);
    }
}
async function getEmployeeProfile(id) {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/employee/get-employee-profile?employeeId=" + id);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/employee/get-employee-info?id=" + id);
        return res.data;
    } catch (error) {
        console.log("Error While getting employee info: ", error);
    }
}
async function deleteEmployee(id, userId) {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("http://projectorate.org:3000/api" + "/employee/delete-employees?id=" + id + "&userId=" + userId);
        return res;
    } catch (error) {
        console.log("Error While deleting employee: ", error);
        return error.response.data;
    }
}
//get all the designations in the database
async function getDesignations() {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/designations/get-designations");
        return res.data;
    } catch (error) {
        console.log("Error While getting designations at front-end: ", error);
    }
}
//get all the roles in the database
async function getRoles() {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/roles/get-roles");
        return res.data;
    } catch (error) {
        console.log("Error While getting roles at front-end: ", error);
    }
}
//get Analytics
async function getAllEmployeesAnalytics() {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/analytics/all-employees");
        return res.data;
    } catch (error) {
        console.log("Error While getting all employees count at front-end: ", error);
    }
}
async function GetAnalytics() {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/analytics/analytics");
        return res.data;
    } catch (error) {
        console.log("Error While getting analytics at front-end: ", error);
    }
}
async function getSeniorEmployeesAnalytics() {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/analytics/senior-employees");
        return res.data;
    } catch (error) {
        console.log("Error While getting Senior Count at front-end: ", error);
    }
}
async function getAssociateEmployeesAnalytics() {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/analytics/associate-employees");
        return res.data;
    } catch (error) {
        console.log("Error While getting associate Count at front-end: ", error);
    }
}
async function getInternEmployeesAnalytics() {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/analytics/interns-employees");
        return res.data;
    } catch (error) {
        console.log("Error While getting intern Count at front-end: ", error);
    }
}
//get all the project domains in the database
async function getProjectDomains() {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/project-domains/get-project-domains");
        return res.data;
    } catch (error) {
        console.log("Error While getting project domains at front-end: ", error);
        return {
            error: error
        };
    }
}
//get all the project status in the database
async function getProjectStatus() {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/projects/get-project-status");
        return res.data;
    } catch (error) {
        console.log("Error While getting project status at front-end: ", error);
        return {
            error: error
        };
    }
}
//Projects api calls
async function createProject(payload) {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://projectorate.org:3000/api" + "/projects/create-project", payload);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://projectorate.org:3000/api" + "/projects/update-project", payload);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/projects/get-all-projects");
        return res.data;
    } catch (error) {
        console.log("Error While getting projects: ", error);
    }
}
async function GetSpecificProject(propjectId) {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/projects/get-project?projectId=" + propjectId);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("http://projectorate.org:3000/api" + `/projects/delete-project?projectId=${projectId}&user_id=${user_id}`);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/projects/get-project-employees?projectId=" + projectId);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/teams/get-project-teams?projectId=" + projectId);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("http://projectorate.org:3000/api" + `/projects/remove-employee-from-project?employeeId=${employeeId}&projectId=${projectId}&ownerId=${ownerId}`);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + `/employee/search-employee?search=${search}`);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://projectorate.org:3000/api" + `/projects/assign-project-to-employee?projectId=${projectId}&userId=${employeeId}&ownerId=${ownerId}`);
        return res;
    } catch (error) {
        console.log("Error While assigning employee to project: ", error);
        return {
            error: error.response
        };
    }
}
async function ChangeProjectStatus(projectId, statusId) {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://projectorate.org:3000/api" + `/projects/change-project-status?projectId=${projectId}&statusId=${statusId}`);
        return res;
    } catch (error) {
        console.log("Error While changing project status: ", error);
        return {
            error: error.response
        };
    }
}
//get all the Team domains in the database
async function getTeamDomains() {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/team-domains/get-team-domains");
        return res.data;
    } catch (error) {
        console.log("Error While getting Team domains at front-end: ", error);
        return {
            error: error
        };
    }
}
//get all the team status in the database
async function getTeamStatus() {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/teams/get-team-status");
        return res.data;
    } catch (error) {
        console.log("Error While getting team status at front-end: ", error);
        return {
            error: error
        };
    }
}
async function getAllTeams() {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/teams/get-all-teams");
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://projectorate.org:3000/api" + "/teams/create-team", payload);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://projectorate.org:3000/api" + "/teams/update-team", payload);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/teams/get-team?teamId=" + teamId);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("http://projectorate.org:3000/api" + `/teams/delete-team?teamId=${teamId}&user_id=${ownerId}`);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/teams/get-team-employees?teamId=" + teamId);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("http://projectorate.org:3000/api" + `/teams/remove-employee-from-team?employeeId=${employeeId}&teamId=${teamId}&ownerId=${ownerId}`);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://projectorate.org:3000/api" + `/teams/assign-team-to-employee?teamId=${teamId}&userId=${employeeId}&ownerId=${ownerId}`);
        return res;
    } catch (error) {
        console.log("Error While assigning employee to team: ", error);
        return {
            error: error.response
        };
    }
}
async function ChangeTeamStatus(teamId, statusId) {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://projectorate.org:3000/api" + `/teams/change-team-status?teamId=${teamId}&statusId=${statusId}`);
        return res;
    } catch (error) {
        console.log("Error While changing project status: ", error);
        return {
            error: error.response
        };
    }
}
async function CreateTicket(payload) {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://projectorate.org:3000/api" + `/tickets/create-ticket`, payload);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + `/tickets/get-ticket-info?ticketId=` + ticketId);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + `/tickets-status/get-tickets-status`);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + `/tickets-piority/get-tickets-piority`);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + `/tickets/get-project-tickets?projectId=` + projectId);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + `/tickets/get-user-tickets?userId=` + userId);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + `/tickets/get-team-tickets?teamId=` + teamId);
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
        const res = await axios.get("http://projectorate.org:3000/api" + `/tickets/get-all-tickets`);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://projectorate.org:3000/api" + `/tickets/change-ticket-status?ticketId=${ticketId}&statusId=${statusId}`);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("http://projectorate.org:3000/api" + `/tickets/delete-ticket?ticketId=` + ticketId + `&ownerId=` + ownerId);
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://projectorate.org:3000/api" + `/resources/upload`, formData);
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
        (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: "http://projectorate.org:3000/api" + `/resources/download`,
            method: "GET",
            responseType: "blob",
            params: {
                url: url
            }
        }).then((response)=>{
            console.log(response);
            js_file_download__WEBPACK_IMPORTED_MODULE_1___default()(response.data, `projectorate_resource_${url}`); //Change the image name to something usefull (maybe original)
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://projectorate.org:3000/api" + "/logs/get-all-logs");
        return res.data;
    } catch (error) {
        console.log("Error While getting projects: ", error);
    }
}
//** work submission */
async function UploadWork(file) {
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
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://projectorate.org:3000/api" + `/work-submission/upload`, formData);
        return res;
    } catch (error) {
        console.log("While uploading file:", error);
        return {
            error: error.response
        };
    }
}
async function DownloadWork(url) {
    try {
        (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: "http://projectorate.org:3000/api" + `/work-submission/download`,
            method: "GET",
            responseType: "blob",
            params: {
                url: url
            }
        }).then((response)=>{
            console.log(response);
            js_file_download__WEBPACK_IMPORTED_MODULE_1___default()(response.data, `projectorate_work_submission_${url}`); //Change the image name to something usefull (maybe original)
        });
        return {
            data: true
        };
    } catch (error) {
        console.log("While downloading work file:", error);
        return {
            error: error.response
        };
    }
}
async function SetTicketWorkSubmission(payload) {
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://projectorate.org:3000/api" + `/tickets/update-work-submission`, payload);
        return res;
    } catch (error) {
        console.log("Error While updating ticket work submission: ", error);
        return {
            error: error.response
        };
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;