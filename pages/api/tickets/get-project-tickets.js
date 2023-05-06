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
    })
      .then((result) => {
        if (result.length != 0) {
          res.status(200).json({ result });
        } else {
          res.status(404).json({
            error: 404,
            type: "Ticket",
            message: "No tickets found matching projectId!",
          });
        }
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
