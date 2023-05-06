import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Delete single Ticket End-point hit!");
  const { ticketId } = req.query;
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
    })
      .then(async (result) => {
        if (result) {
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
