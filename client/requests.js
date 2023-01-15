import axios from "axios";

export async function AddEmployee(payload) {
  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + "/employee/add-employee",
      payload
    );
    return res.data;
  } catch (error) {
    console.log("Error While add employee: ", error);
  }
}
