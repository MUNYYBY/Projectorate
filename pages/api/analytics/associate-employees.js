import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  let designationRes = null;
  try {
    designationRes = await PrismaDB.designation.findFirst({
      where: {
        title: "Associate",
      },
    });
  } catch (error) {
    console.log("Error while getting designation: ", error);
    return res.status(422).json({
      error:
        "Error while getting associate employees analytics info at backend",
    });
  }
  console.log("Get associate employees End-point hit!");
  try {
    const data = await PrismaDB.employee.count({
      where: {
        designation: designationRes.id,
      },
    });
    console.log("associate employees: ", data);
    res.status(200).json({ count: data });
  } catch (error) {
    console.log(
      "Error while getting associate employees analytics info at backend: ",
      error
    );
    return res.status(422).json({
      error:
        "Error while getting associate employees analytics info at backend",
    });
  }
}
