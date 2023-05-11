import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("Create project End-point hit!");

  const reqData = req.body;
  const LogsOperations = await PrismaDB.LogsOperations.findMany({});
  try {
    const data = await PrismaDB.Project.create({
      data: {
        project_name: reqData.project_name,
        description: reqData.description,
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
      },
    }).then(async (result) => {
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
