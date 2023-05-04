import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get single project End-point hit!");
  const { projectId } = req.query;
  try {
    const data = await PrismaDB.Project.findUnique({
      where: {
        id: parseInt(projectId),
      },
    });
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    console.log("Error while getting single project at backend: ", error);
    return res.status(422).json({
      error: "Error while getting single project at backend: ",
      error,
    });
  }
}
