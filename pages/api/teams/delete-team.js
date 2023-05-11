import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Delete single Team End-point hit!");
  const { teamId, user_id } = req.query;
  const LogsOperations = await PrismaDB.LogsOperations.findMany({});
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
      include: {
        project: true,
      },
    })
      .then(async (result) => {
        if (result) {
          //** Record log */
          try {
            const response = await PrismaDB.Logs.create({
              data: {
                operation: "Deleted Team",
                description: "Deleted Team during the Team deletion phase",
                team_name: result.team_name,
                project_name: result.project.project_name,
                user: {
                  connect: {
                    id: parseInt(user_id),
                  },
                },
                project: {
                  connect: {
                    id: result.project.id,
                  },
                },
                LogsOperations: {
                  connect: {
                    id: LogsOperations.find((t) => t.title === "Deleted Team")
                      ?.id,
                  },
                },
              },
            });
          } catch (error) {
            console.log("Error while creating log for team: ", error);
          }
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
