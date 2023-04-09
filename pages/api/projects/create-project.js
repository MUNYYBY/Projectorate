import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("Create project End-point hit!");

  const reqData = req.body;
  console.log(reqData);
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
    });
    res.status(200).json(data);
  } catch (error) {
    console.log("Error while add new Create project at backend: ", error);
    return res
      .status(422)
      .json({ error: "Error while add new Create project at backend:", error });
  }
}
