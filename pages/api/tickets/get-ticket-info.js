import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get ticket info End-point hit!");
  const { ticketId } = req.query;
  if (!ticketId) {
    return res.status(500).json({ message: "ticketId is required!" });
  }

  try {
    const data = await PrismaDB.Tickets.findUnique({
      where: {
        id: parseInt(ticketId),
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
        user: {
          select: {
            employee: {
              select: {
                first_name: true,
                last_name: true,
                id: true,
              },
            },
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
    });
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ error: 404, message: "Ticket not found" });
    }
  } catch (error) {
    console.log("Error while getting ticket info at backend: ", error);
    return res.status(422).json({
      error: "Error while getting ticket info at backend: " + error.message,
      error,
    });
  }
}
