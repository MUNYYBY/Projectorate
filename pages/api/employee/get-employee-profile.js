import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get Employee Profile End-point hit!");

  const { employeeId } = req.query;
  try {
    const data = await PrismaDB.employee.findUnique({
      where: {
        id: parseInt(employeeId),
      },
      include: {
        userProjects: {
          select: {
            project_id: true,
          },
        },
        UserTeams: {
          select: {
            team_id: true,
          },
        },
        Designations: true,
      },
    });
    console.log("Employee Profile: ", data);
    res.status(200).json({ data });
  } catch (error) {
    console.log("Error while getting Employee Profile at backedn: ", error);
    return res.status(422).json({
      error:
        "Error while getting Employee Profile at backend: " + error.message,
    });
  }
}
