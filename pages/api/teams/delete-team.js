import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Delete single Team End-point hit!");
  const { teamId } = req.query;
  try {
    const checkget = await PrismaDB.Teams.findUnique({
      where: {
        id: parseInt(teamId),
      },
    }).then((result) => {
      if (!result) {
        res.status(404).json({
          error: 404,
          type: "Team",
          message: "Team does not exist!",
        });
      }
    });
    const data = await PrismaDB.Teams.delete({
      where: {
        id: parseInt(teamId),
      },
    })
      .then(async (result) => {
        if (result) {
          res.status(200).json({
            code: 200,
            type: "Team and UserTeam deletion!",
            message: `Team successfully deleted with id: ${teamId}`,
            data: result,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          error: 500,
          type: "Team",
          message: `Error while deleting Team with id ${teamId}: ${err.message}`,
        });
      });
  } catch (error) {
    console.log("Delete while getting single Team at backend: ", error);
    return res.status(422).json({
      error: "Delete while getting single Team at backend: ",
      error,
    });
  }
}
