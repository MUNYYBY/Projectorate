import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get Project Teams End-point hit!");
  const { projectId } = req.query;
  if (!projectId) {
    return res.status(500).json({ message: "ProjectId is required!" });
  }
  try {
    const data = await PrismaDB.Teams.findMany({
      where: {
        projectId: parseInt(projectId),
      },
      include: {
        _count: { select: { UserTeams: true, Tickets: true } },
      },
    });
    console.log("All Projects: ", data);
    res.status(200).json({ data });
  } catch (error) {
    console.log("Error while getting Project Teams at backend: ", error);
    return res.status(422).json({
      error: "Error while getting Project Teams at backend: ",
      error,
    });
  }
}
