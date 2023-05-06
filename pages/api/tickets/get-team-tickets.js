import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get Team Tickets End-point hit!");
  const { teamId } = req.query;
  if (!teamId) {
    return res.status(500).json({ message: "teamId is required!" });
  }
  try {
    const data = await PrismaDB.Tickets.findMany({
      where: {
        teamId: parseInt(teamId),
      },
    })
      .then((result) => {
        if (result.length != 0) {
          res.status(200).json({ result });
        } else {
          res.status(404).json({
            error: 404,
            type: "Ticket",
            message: "No tickets found matching teamId!",
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          error: 500,
          type: "Ticket",
          message: "Error while fetching tickets!",
          errMessage: err.message,
        });
      });
  } catch (error) {
    console.log("Error while getting Team Tickets at backend: ", error);
    return res.status(422).json({
      error: "Error while getting Team Tickets at backend: " + error.message,
    });
  }
}
