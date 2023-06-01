import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const body = req.body;
  if (!body.work || !body.ticketId) {
    return res.status(500).json({ message: "ticketId & work is required!" });
  }
  console.log("Update Ticket work submission End-point hit!");
  try {
    const ticket = await PrismaDB.Tickets.findUnique({
      where: {
        id: parseInt(body.ticketId),
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
    if (ticket) {
      const data = await PrismaDB.Tickets.update({
        where: {
          id: parseInt(body.ticketId),
        },
        data: {
          WorkSubmission: {
            create: {
              url: body.work,
            },
          },
        },
      })
        .then((result) => {
          res.status(200).json({ result });
        })
        .catch((err) => {
          consol.log(err);
          res.status(500).json({
            error: 500,
            type: "Ticket",
            message: "Error while submitting work!",
            errMessage: err.message,
          });
        });
    }
  } catch (error) {
    console.log(
      "Error while Updating Ticket for work submission at backend: ",
      error
    );
    return res.status(422).json({
      error:
        "Error while getting Updating Ticket for work submission at backend: " +
        error.message,
    });
  }
}
