import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get All employees End-point hit!");
  try {
    const data = await PrismaDB.employee.count();
    console.log("All employees: ", data);
    res.status(200).json({ count: data });
  } catch (error) {
    console.log(
      "Error while getting all employees analytics info at backend: ",
      error
    );
    return res.status(422).json({
      error: "Error while getting all employees analytics info at backend",
    });
  }
}
