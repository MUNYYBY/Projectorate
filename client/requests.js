import axios from "axios";

export async function createEmployee(payload) {
  try {
    const res = await axios.post("/api/employee/add-employee", payload);
    return res.data;
  } catch (error) {
    console.log("Error While add employee: ", error);
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

export async function deleteEmployee(id) {
  try {
    const res = await axios.delete("/api/employee/delete-employees", { id });
  } catch (error) {
    console.log("Error While getting employee: ", error);
  }
}
