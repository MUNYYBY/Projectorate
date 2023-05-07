import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get project Tickets End-point hit!");
  const { projectId } = req.query;
  if (!projectId) {
    return res.status(500).json({ message: "projectId is required!" });
  }
  try {
    const data = await PrismaDB.Tickets.findMany({
      where: {
        projectId: parseInt(projectId),
      },
      include: {
        project: {
          select: {
            project_name: true,
            id: true,
          },
        },
        team: {
          select: {
            team_name: true,
            id: true,
          },
        },
        employee: {
          select: {
            first_name: true,
            last_name: true,
            id: true,
          },
        },
        TicketStatus: {
          select: {
            title: true,
            id: true,
          },
        },
        TicketPiority: {
          select: {
            title: true,
            id: true,
          },
        },
      },
    })
      .then((result) => {
        res.status(200).json({ result });
      })
      .catch((err) => {
        res.status(404).json({
          error: 404,
          type: "Ticket",
          message: "Error while fetching tickets!",
          errMessage: err.message,
        });
      });
  } catch (error) {
    console.log("Error while getting project Tickets at backend: ", error);
    return res.status(422).json({
      error: "Error while getting project Tickets at backend: " + error.message,
    });
  }
}
