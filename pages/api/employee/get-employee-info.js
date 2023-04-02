import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { id } = req.query;
  console.log("Get Employee Info End-point hit!");
  try {
    const data = await PrismaDB.employee.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    console.log("Employee Info: ", data);
    res.status(200).json({ data });
  } catch (error) {
    console.log("Error while getting employee info at backend: ", error);
    return res
      .status(422)
      .json({ error: "Error while getting employee info at backend" });
  }
}
