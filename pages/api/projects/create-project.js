import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("Create project End-point hit!");

  const reqData = req.body;
  console.log(reqData);
  const LogsOperations = await PrismaDB.LogsOperations.findMany({});
  const ProjectStatus = await PrismaDB.ProjectStatus.findMany({});
  try {
    const data = await PrismaDB.Project.create({
      data: {
        project_name: reqData.project_name,
        description: reqData.description,
        estimated_completion: reqData.estimated_completion,
        user: {
          connect: {
            id: reqData.user_id,
          },
        },
        projectDomain: {
          connect: {
            id: reqData.project_domain_id,
          },
        },
        ProjectStatus: {
          connect: {
            id: ProjectStatus.find((t) => t.title === "In-progress")?.id,
          },
        },
      },
    }).then(async (result) => {
      //** Record log */
      try {
        const response = await PrismaDB.Logs.create({
          data: {
            operation: "Created Project",
            description: "Created Project during the project creation phase",
            project_name: result.project_name,
            user: {
              connect: {
                id: reqData.user_id,
              },
            },
            project: {
              connect: {
                id: result.id,
              },
            },
            LogsOperations: {
              connect: {
                id: LogsOperations.find((t) => t.title === "Created Project")
                  ?.id,
              },
            },
          },
        });
      } catch (error) {
        console.log("Error while creating log for project: ", error);
      }
      res.status(200).json(result);
    });
  } catch (error) {
    console.log("Error while add new Create project at backend: ", error);
    return res
      .status(422)
      .json({ error: "Error while add new Create project at backend:", error });
  }
}
