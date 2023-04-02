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
