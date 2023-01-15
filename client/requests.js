import axios from "axios";

export async function createEmployee(payload) {
  try {
    const res = await axios.post("/api/employee/addEmployee", payload);
    return res.data;
  } catch (error) {
    console.log("Error While add employee: ", error);
  }
}
