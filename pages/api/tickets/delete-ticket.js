import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Delete single Ticket End-point hit!");
  const { ticketId, ownerId } = req.query;
  if (!ticketId || !ownerId) {
    return res.status(500).json({
      error: 500,
      message: "ticketId & ownerId are madatory!",
    });
  }
  const LogsOperations = await PrismaDB.LogsOperations.findMany({});
  try {
    const checkget = await PrismaDB.Tickets.findUnique({
      where: {
        id: parseInt(ticketId),
      },
    }).then((result) => {
      if (!result) {
        res.status(404).json({
          error: 404,
          type: "Ticket",
          message: "Ticket does not exist!",
        });
      }
    });
    const data = await PrismaDB.Tickets.delete({
      where: {
        id: parseInt(ticketId),
      },
      include: {
        team: true,
        project: true,
        employee: true,
      },
    })
      .then(async (result) => {
        if (result) {
          //** Record log */
          try {
            const response = await PrismaDB.Logs.create({
              data: {
                operation: "Deleted Ticket",
                description: "Deleted Ticket during the ticket delete phase",
                team_name: result.team.team_name,
                project_name: result.project.project_name,
                employee_name:
                  result.employee.first_name + " " + result.employee.last_name,
                ticket_name: result.title,
                user: {
                  connect: {
                    id: parseInt(ownerId),
                  },
                },
                team: {
                  connect: {
                    id: result.team.id,
                  },
                },
                project: {
                  connect: {
                    id: result.project.id,
                  },
                },
                employee: {
                  connect: {
                    id: result.employee.id,
                  },
                },
                LogsOperations: {
                  connect: {
                    id: LogsOperations.find((t) => t.title === "Deleted Ticket")
                      ?.id,
                  },
                },
              },
            });
          } catch (error) {
            console.log("Error while creating log for tickets: ", error);
          }
          res.status(200).json({
            code: 200,
            type: "Ticket",
            message: `Ticket successfully deleted with id: ${ticketId}`,
            data: result,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          error: 500,
          type: "Ticket",
          message: `Error while deleting Ticket with id ${ticketId}: ${err.message}`,
        });
      });
  } catch (error) {
    console.log("Delete while getting single Ticket at backend: ", error);
    return res.status(422).json({
      error: "Delete while getting single Ticket at backend: " + error.message,
    });
  }
}
