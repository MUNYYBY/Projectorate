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
    //** get tickets status to evaluate the tickets query */
    const TicketsStatus = await PrismaDB.TicketStatus.findMany({});

    const allTickets = await PrismaDB.Tickets.count({
      where: {
        teamId: parseInt(teamId),
      },
    });

    //** get tickets individually for specified project */
    const todoTickets = await PrismaDB.Tickets.count({
      where: {
        AND: [
          { teamId: parseInt(teamId) },
          {
            TicketStatus: {
              id: TicketsStatus.find((t) => t.title === "Todo")?.id,
            },
          },
        ],
      },
    });
    const inProgressTickets = await PrismaDB.Tickets.count({
      where: {
        AND: [
          { teamId: parseInt(teamId) },
          {
            TicketStatus: {
              id: TicketsStatus.find((t) => t.title === "In-progress")?.id,
            },
          },
        ],
      },
    });
    const doneTickets = await PrismaDB.Tickets.count({
      where: {
        AND: [
          { teamId: parseInt(teamId) },
          {
            TicketStatus: {
              id: TicketsStatus.find((t) => t.title === "Done")?.id,
            },
          },
        ],
      },
    });
    const resolvedTickets = await PrismaDB.Tickets.count({
      where: {
        AND: [
          { teamId: parseInt(teamId) },
          {
            TicketStatus: {
              id: TicketsStatus.find((t) => t.title === "Resolved")?.id,
            },
          },
        ],
      },
    });
    const testedTickets = await PrismaDB.Tickets.count({
      where: {
        AND: [
          { teamId: parseInt(teamId) },
          {
            TicketStatus: {
              id: TicketsStatus.find(
                (t) => t.title === "Tested but not resolved"
              )?.id,
            },
          },
        ],
      },
    });
    const holdTickets = await PrismaDB.Tickets.count({
      where: {
        AND: [
          { teamId: parseInt(teamId) },
          {
            TicketStatus: {
              id: TicketsStatus.find((t) => t.title === "On Hold")?.id,
            },
          },
        ],
      },
    });
    const data = await PrismaDB.Teams.findUnique({
      where: {
        id: parseInt(teamId),
      },
      include: {
        project: true,
        TeamStatus: {
          select: {
            id: true,
            title: true,
          },
        },
        _count: {
          select: {
            UserTeams: true,
            Tickets: true,
          },
        },
      },
    });
    if (data) {
      res.status(200).json({
        data,
        Tickets: {
          all: allTickets,
          todo: todoTickets,
          inProgress: inProgressTickets,
          done: doneTickets,
          resolved: resolvedTickets,
          tested: testedTickets,
          hold: holdTickets,
        },
      });
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
