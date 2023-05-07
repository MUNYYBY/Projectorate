import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Update Ticket Status End-point hit!");
  const { ticketId, statusId } = req.query;
  if (!ticketId || !statusId) {
    return res
      .status(500)
      .json({ message: "ticketId & statusId is required!" });
  }
  try {
    const ticket = await PrismaDB.Tickets.findUnique({
      where: {
        id: parseInt(ticketId),
      },
    }).then((result) => {
      if (result) {
        return result;
      } else {
        res.status(404).json({
          error: 404,
          type: "Ticket",
          message: "Ticket Does not exists!",
        });
      }
    });
    const status = await PrismaDB.TicketStatus.findUnique({
      where: {
        id: parseInt(statusId),
      },
    }).then((result) => {
      if (result) {
        return result;
      } else {
        res.status(404).json({
          error: 404,
          type: "Status",
          message: "Ticket status Does not exists!",
        });
      }
    });
    if (ticket && status) {
      const data = await PrismaDB.Tickets.update({
        where: {
          id: parseInt(ticketId),
        },
        data: {
          TicketStatus: {
            connect: {
              id: parseInt(statusId),
            },
          },
        },
      })
        .then((result) => {
          res.status(200).json({ result });
        })
        .catch((err) => {
          res.status(500).json({
            error: 500,
            type: "Ticket",
            message: "Error while Updating Ticket Status!",
            errMessage: err.message,
          });
        });
    }
  } catch (error) {
    console.log("Error while Updating Ticket Status at backend: ", error);
    return res.status(422).json({
      error:
        "Error while getting Updating Ticket Status at backend: " +
        error.message,
    });
  }
}
