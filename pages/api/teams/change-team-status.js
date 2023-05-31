import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Update Team Status End-point hit!");
  const { teamId, statusId } = req.query;
  if (!teamId || !statusId) {
    return res.status(500).json({ message: "teamId & statusId is required!" });
  }
  try {
    const team = await PrismaDB.Teams.findUnique({
      where: {
        id: parseInt(teamId),
      },
    }).then((result) => {
      if (result) {
        return result;
      } else {
        res.status(404).json({
          error: 404,
          type: "Team",
          message: "Team Does not exists!",
        });
      }
    });
    const status = await PrismaDB.TeamStatus.findUnique({
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
          message: "Team status Does not exists!",
        });
      }
    });
    if (team && status) {
      const data = await PrismaDB.Teams.update({
        where: {
          id: parseInt(teamId),
        },
        data: {
          TeamStatus: {
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
            type: "Team",
            message: "Error while Updating team Status!",
            errMessage: err.message,
          });
        });
    }
  } catch (error) {
    console.log("Error while Updating team Status at backend: ", error);
    return res.status(422).json({
      error:
        "Error while getting Updating team Status at backend: " + error.message,
    });
  }
}
