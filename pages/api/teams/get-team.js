import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get single Team End-point hit!");
  const { teamId } = req.query;
  if (!teamId) {
    return res.status(500).json({ message: "TeamId is required!" });
  }

  try {
    const data = await PrismaDB.Teams.findUnique({
      where: {
        id: parseInt(teamId),
      },
      include: {
        project: true,
      },
    });
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ error: 404, message: "Team not found" });
    }
  } catch (error) {
    console.log("Error while getting single Team at backend: ", error);
    return res.status(422).json({
      error: "Error while getting single Team at backend: ",
      error,
    });
  }
}
