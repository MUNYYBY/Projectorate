import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const employeeData = req.body;
  console.log(employeeData);
  try {
  } catch (error) {
    console.log("Error while add new user at backend: ", error);
    return res
      .status(422)
      .json({ Message: "Error while add new user at backend: " });
  }
}
