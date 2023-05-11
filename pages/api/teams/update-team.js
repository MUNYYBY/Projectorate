import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("Update Team End-point hit!");

  const reqBody = req.body;
  if (
    !reqBody.team_name ||
    !reqBody.id ||
    !reqBody.description ||
    !reqBody.team_domain_id ||
    !reqBody.user_id
  ) {
    return res.status(500).json({
      error: 500,
      message:
        "Team name, description, user id, project id, user_id & team domains id are madatory!",
    });
  }
  const LogsOperations = await PrismaDB.LogsOperations.findMany({});
  try {
    const data = await PrismaDB.Teams.update({
      where: {
        id: parseInt(reqBody.id),
      },
      data: {
        team_name: reqBody.team_name,
        description: reqBody.description,
        TeamDomains: {
          connect: {
            id: reqBody.team_domain_id,
          },
        },
      },
      include: {
        project: true,
      },
    }).then(async (result) => {
      //** Record log */
      try {
        const response = await PrismaDB.Logs.create({
          data: {
            operation: "Updated Team",
            description: "Updated Team during the Team Updation phase",
            team_name: result.team_name,
            project_name: result.project.project_name,
            user: {
              connect: {
                id: reqBody.user_id,
              },
            },
            team: {
              connect: {
                id: result.id,
              },
            },
            project: {
              connect: {
                id: result.project.id,
              },
            },
            LogsOperations: {
              connect: {
                id: LogsOperations.find((t) => t.title === "Updated Team")?.id,
              },
            },
          },
        });
      } catch (error) {
        console.log("Error while creating log for team: ", error);
      }
      res.status(200).json(result);
    });
  } catch (error) {
    console.log("Error while updating Team at backend: ", error);
    return res
      .status(422)
      .json({ error: "Error while updating Team at backend:", error });
  }
}
