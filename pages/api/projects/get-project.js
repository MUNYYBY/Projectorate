import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get single project End-point hit!");
  const { projectId } = req.query;
  try {
    //** get tickets status to evaluate the tickets query */
    const TicketsStatus = await PrismaDB.TicketStatus.findMany({});

    const allTickets = await PrismaDB.Tickets.count({
      where: {
        projectId: parseInt(projectId),
      },
    });

    //** get tickets individually for specified project */
    const todoTickets = await PrismaDB.Tickets.count({
      where: {
        AND: [
          { projectId: parseInt(projectId) },
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
          { projectId: parseInt(projectId) },
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
          { projectId: parseInt(projectId) },
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
          { projectId: parseInt(projectId) },
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
          { projectId: parseInt(projectId) },
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
          { projectId: parseInt(projectId) },
          {
            TicketStatus: {
              id: TicketsStatus.find((t) => t.title === "On Hold")?.id,
            },
          },
        ],
      },
    });

    const data = await PrismaDB.Project.findUnique({
      where: {
        id: parseInt(projectId),
      },
      include: {
        _count: {
          select: {
            userProjects: true,
            Teams: true,
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
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    console.log("Error while getting single project at backend: ", error);
    return res.status(422).json({
      error: "Error while getting single project at backend: ",
      error,
    });
  }
}
