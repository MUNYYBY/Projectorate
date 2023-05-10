import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("Update project End-point hit!");

  const reqBody = req.body;
  console.log(reqBody);
  if (
    !reqBody.id ||
    !reqBody.project_name ||
    !reqBody.description ||
    !reqBody.project_domain_id
  ) {
    return res.status(500).json({
      error: 500,
      message:
        "Id, description, Project name, and project domain id is required!",
    });
  }
  try {
    const data = await PrismaDB.Project.update({
      where: {
        id: parseInt(reqBody.id),
      },
      data: {
        project_name: reqBody.project_name,
        description: reqBody.description,
        projectDomain: {
          connect: {
            id: reqBody.project_domain_id,
          },
        },
      },
    });
    res.status(200).json(data);
  } catch (error) {
    console.log("Error while updating project at backend: ", error);
    return res.status(422).json({
      error: "Error while updating Create project at backend: " + error.message,
    });
  }
}
