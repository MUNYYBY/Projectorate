import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get Intern employees End-point hit!");
  let designationRes = null;
  try {
    designationRes = await PrismaDB.designation.findFirst({
      where: {
        title: "Intern",
      },
    });
  } catch (error) {
    console.log("Error while getting designation: ", error);
    return res.status(422).json({
      error: "Error while getting Intern employees analytics info at backend",
    });
  }
  try {
    const data = await PrismaDB.employee.count({
      where: {
        designation: designationRes.id,
      },
    });
    console.log("Intern employees: ", data);
    res.status(200).json({ count: data });
  } catch (error) {
    console.log(
      "Error while getting Intern employees analytics info at backend: ",
      error
    );
    return res.status(422).json({
      error: "Error while getting Intern employees analytics info at backend",
    });
  }
}
