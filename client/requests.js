import axios from "axios";

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

export async function getEmployees() {
  try {
    const res = await axios.get("/api/employee/get-employees");
    return res.data;
  } catch (error) {
    console.log("Error While getting employee: ", error);
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

export async function deleteEmployee(id) {
  try {
    const res = await axios.delete("/api/employee/delete-employees?id=" + id);
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
