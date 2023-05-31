import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("Create Team End-point hit!");

  const reqBody = req.body;
  if (
    !reqBody.team_name ||
    !reqBody.description ||
    !reqBody.user_id ||
    !reqBody.project_id ||
    !reqBody.team_domain_id
  ) {
    return res.status(500).json({
      error: 500,
      message:
        "Team name, description, user id, project id & team domains id are madatory!",
    });
  }
  const LogsOperations = await PrismaDB.LogsOperations.findMany({});
  const TeamStatus = await PrismaDB.TeamStatus.findMany({});
  try {
    const data = await PrismaDB.Teams.create({
      data: {
        team_name: reqBody.team_name,
        description: reqBody.description,
        estimated_completion: reqBody.estimated_completion,
        user: {
          connect: {
            id: reqBody.user_id,
          },
        },
        project: {
          connect: {
            id: reqBody.project_id,
          },
        },
        TeamDomains: {
          connect: {
            id: reqBody.team_domain_id,
          },
        },
        TeamStatus: {
          connect: {
            id: TeamStatus.find((t) => t.title === "In-progress")?.id,
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
            operation: "Created Team",
            description: "Created Team during the Team creation phase",
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
                id: LogsOperations.find((t) => t.title === "Created Team")?.id,
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
    console.log("Error while add new Create Team at backend: ", error);
    return res
      .status(422)
      .json({ error: "Error while add new Create Team at backend:", error });
  }
}
