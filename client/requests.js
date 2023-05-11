import axios from "axios";
import fileDownload from "js-file-download";

export async function createEmployee(payload) {
  try {
    const res = await axios.post("/api/employee/add-employee", payload);
    console.log("hello ", res.data);
    return res.data;
  } catch (error) {
    console.log("Error While add employee: ", error);
    return { error: error };
  }
}
export async function UpdateEmployeeAPI(payload) {
  try {
    const res = await axios.post("/api/employee/update-employee", payload);
    console.log("Updated employee: ", res.data);
    return res.data;
  } catch (error) {
    console.log("Error While add employee: ", error);
    return { error: error };
  }
}

export async function getEmployees() {
  try {
    const res = await axios.get("/api/employee/get-employees");
    return res.data;
  } catch (error) {
    console.log("Error While getting employee: ", error);
  }
}
export async function getEmployeeProfile(id) {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL +
        "/employee/get-employee-profile?employeeId=" +
        id
    );
    return res.data;
  } catch (error) {
    console.log("Error While getting Employee Profile: ", error);
    return { error: error.response };
  }
}
export async function getEmployeeInfo(id) {
  console.log(id);
  try {
    const res = await axios.get("/api/employee/get-employee-info?id=" + id);
    return res.data;
  } catch (error) {
    console.log("Error While getting employee info: ", error);
  }
}

export async function deleteEmployee(id, userId) {
  try {
    const res = await axios.delete(
      "/api/employee/delete-employees?id=" + id + "&userId=" + userId
    );
    return res;
  } catch (error) {
    console.log("Error While deleting employee: ", error);
    return error.response.data;
  }
}

//get all the designations in the database
export async function getDesignations() {
  try {
    const res = await axios.get("/api/designations/get-designations");
    return res.data;
  } catch (error) {
    console.log("Error While getting designations at front-end: ", error);
  }
}

//get all the roles in the database
export async function getRoles() {
  try {
    const res = await axios.get("/api/roles/get-roles");
    return res.data;
  } catch (error) {
    console.log("Error While getting roles at front-end: ", error);
  }
}
//get Analytics
export async function getAllEmployeesAnalytics() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "/analytics/all-employees"
    );
    return res.data;
  } catch (error) {
    console.log(
      "Error While getting all employees count at front-end: ",
      error
    );
  }
}
export async function getSeniorEmployeesAnalytics() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "/analytics/senior-employees"
    );
    return res.data;
  } catch (error) {
    console.log("Error While getting Senior Count at front-end: ", error);
  }
}
export async function getAssociateEmployeesAnalytics() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "/analytics/associate-employees"
    );
    return res.data;
  } catch (error) {
    console.log("Error While getting associate Count at front-end: ", error);
  }
}
export async function getInternEmployeesAnalytics() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "/analytics/interns-employees"
    );
    return res.data;
  } catch (error) {
    console.log("Error While getting intern Count at front-end: ", error);
  }
}
//get all the project domains in the database
export async function getProjectDomains() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "/project-domains/get-project-domains"
    );
    return res.data;
  } catch (error) {
    console.log("Error While getting project domains at front-end: ", error);
    return { error: error };
  }
}

//Projects api calls
export async function createProject(payload) {
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + "/projects/create-project",
      payload
    );
    return res.data;
  } catch (error) {
    console.log("Error While creating project: ", error);
    return { error: error };
  }
}
export async function UpdateProjectAPI(payload) {
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + "/projects/update-project",
      payload
    );
    return res;
  } catch (error) {
    console.log("Error While creating project: ", error);
    return { error: error };
  }
}
export async function getAllProjects() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "/projects/get-all-projects"
    );
    return res.data;
  } catch (error) {
    console.log("Error While getting projects: ", error);
  }
}

export async function GetSpecificProject(propjectId) {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL +
        "/projects/get-project?projectId=" +
        propjectId
    );
    return res.data;
  } catch (error) {
    console.log("Error While getting employee: ", error);
    return { error: error.response.data };
  }
}

export async function DeleteProject(projectId, user_id) {
  try {
    const res = await axios.delete(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/projects/delete-project?projectId=${projectId}&user_id=${user_id}`
    );
    return res;
  } catch (error) {
    console.log("Error While deleting employee from project: ", error);
    return { error: error.response.data };
  }
}

export async function getProjectEmployees(projectId) {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL +
        "/projects/get-project-employees?projectId=" +
        projectId
    );
    return res.data;
  } catch (error) {
    console.log("Error While getting employee: ", error);
    return { error: error.response.data };
  }
}
export async function getProjectTeams(projectId) {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL +
        "/teams/get-project-teams?projectId=" +
        projectId
    );
    return res.data;
  } catch (error) {
    console.log("Error While getting project teams: ", error);
    return { error: error.response.data };
  }
}

export async function DeleteEmployeeFromProject(
  employeeId,
  projectId,
  ownerId
) {
  try {
    const res = await axios.delete(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/projects/remove-employee-from-project?employeeId=${employeeId}&projectId=${projectId}&ownerId=${ownerId}`
    );
    return res;
  } catch (error) {
    console.log("Error While deleting employee from project: ", error);
    return { error: error.response.data };
  }
}

export async function SearchEmployee(search) {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/employee/search-employee?search=${search}`
    );
    return res;
  } catch (error) {
    console.log("Error While deleting employee from project: ", error);
    return { error: error.response };
  }
}

export async function AssignEmployeeToProject(projectId, employeeId, ownerId) {
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/projects/assign-project-to-employee?projectId=${projectId}&userId=${employeeId}&ownerId=${ownerId}`
    );
    return res;
  } catch (error) {
    console.log("Error While assigning employee to project: ", error);
    return { error: error.response };
  }
}
//get all the Team domains in the database
export async function getTeamDomains() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "/team-domains/get-team-domains"
    );
    return res.data;
  } catch (error) {
    console.log("Error While getting Team domains at front-end: ", error);
    return { error: error };
  }
}
export async function getAllTeams() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "/teams/get-all-teams"
    );
    return res.data;
  } catch (error) {
    console.log("Error While getting all teams: ", error);
    return { error: error.response.data };
  }
}
export async function createTeam(payload) {
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + "/teams/create-team",
      payload
    );
    return res.data;
  } catch (error) {
    console.log("Error While creating team: ", error);
    return { error: error };
  }
}
export async function UpdateTeamAPI(payload) {
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + "/teams/update-team",
      payload
    );
    return res;
  } catch (error) {
    console.log("Error While creating team: ", error);
    return { error: error };
  }
}

export async function GetSpecificTeam(teamId) {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "/teams/get-team?teamId=" + teamId
    );
    return res.data;
  } catch (error) {
    console.log("Error While getting specific team: ", error);
    return { error: error.response.data };
  }
}

export async function DeleteTeam(teamId, ownerId) {
  try {
    const res = await axios.delete(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/teams/delete-team?teamId=${teamId}&user_id=${ownerId}`
    );
    return res;
  } catch (error) {
    console.log("Error While deleting team: ", error);
    return { error: error.response.data };
  }
}

export async function getTeamEmployees(teamId) {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL +
        "/teams/get-team-employees?teamId=" +
        teamId
    );
    return res.data;
  } catch (error) {
    console.log("Error While getting employee: ", error);
    return { error: error.response.data };
  }
}
export async function DeleteEmployeeFromTeam(employeeId, teamId, ownerId) {
  try {
    const res = await axios.delete(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/teams/remove-employee-from-team?employeeId=${employeeId}&teamId=${teamId}&ownerId=${ownerId}`
    );
    return res;
  } catch (error) {
    console.log("Error While deleting employee from teams: ", error);
    return { error: error.response.data };
  }
}
export async function AssignEmployeeToTeam(teamId, employeeId, ownerId) {
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/teams/assign-team-to-employee?teamId=${teamId}&userId=${employeeId}&ownerId=${ownerId}`
    );
    return res;
  } catch (error) {
    console.log("Error While assigning employee to team: ", error);
    return { error: error.response };
  }
}
export async function CreateTicket(payload) {
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + `/tickets/create-ticket`,
      payload
    );
    return res;
  } catch (error) {
    console.log("Error While creating ticket to team: ", error);
    return { error: error.response };
  }
}
export async function GetTicketInfo(ticketId) {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/tickets/get-ticket-info?ticketId=` +
        ticketId
    );
    return res;
  } catch (error) {
    console.log("Error While getting ticket info at front-end: ", error);
    return { error: error.response };
  }
}
export async function getTicketsStatus() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + `/tickets-status/get-tickets-status`
    );
    return res;
  } catch (error) {
    console.log("Error While getting tickets status at front-end: ", error);
    return { error: error.response };
  }
}

export async function getTicketsPiority() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + `/tickets-piority/get-tickets-piority`
    );
    return res;
  } catch (error) {
    console.log("Error While getting tickets status at front-end: ", error);
    return { error: error.response };
  }
}
export async function getProjectTickets(projectId) {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/tickets/get-project-tickets?projectId=` +
        projectId
    );
    return res;
  } catch (error) {
    console.log("Error While getting project tickets at front-end: ", error);
    return { error: error.response };
  }
}
export async function getTeamTickets(teamId) {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/tickets/get-team-tickets?teamId=` +
        teamId
    );
    return res;
  } catch (error) {
    console.log("Error While getting project tickets at front-end: ", error);
    return { error: error.response };
  }
}
export async function getALlTickets() {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + `/tickets/get-all-tickets`
    );
    return res;
  } catch (error) {
    console.log("Error While getting all tickets at front-end: ", error);
    return { error: error.response };
  }
}

export async function ChangeTicketStatus(ticketId, statusId) {
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/tickets/change-ticket-status?ticketId=${ticketId}&statusId=${statusId}`
    );
    return res;
  } catch (error) {
    console.log("Error While getting project tickets at front-end: ", error);
    return { error: error.response };
  }
}

export async function DeleteTicket(ticketId) {
  try {
    const res = await axios.delete(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/tickets/delete-ticket?ticketId=` +
        ticketId
    );
    return res;
  } catch (error) {
    console.log("Error While getting deleting ticket at front-end: ", error);
    return { error: error.response };
  }
}

export async function UploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);
  const config = {
    headers: { "content-type": "multipart/form-data" },
    onUploadProgress: (event) => {
      console.log(
        `Current progress:`,
        Math.round((event.loaded * 100) / event.total)
      );
    },
  };
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + `/resources/upload`,
      formData
    );
    return res;
  } catch (error) {
    console.log("While uploading file:", error);
    return { error: error.response };
  }
}
export async function DownloadFile(url) {
  try {
    axios({
      url: process.env.NEXT_PUBLIC_BASE_URL + `/resources/download`,
      method: "GET",
      responseType: "blob", // Important
      params: {
        url: url, //which file to download?
      },
    }).then((response) => {
      console.log(response);
      fileDownload(response.data, `projectorate_resource_${url}`); //Change the image name to something usefull (maybe original)
    });
    return { data: true };
  } catch (error) {
    console.log("While uploading file:", error);
    return { error: error.response };
  }
}
