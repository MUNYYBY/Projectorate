import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Delete single project End-point hit!");
  const { projectId } = req.query;
  try {
    const checkget = await PrismaDB.Project.findUnique({
      where: {
        id: parseInt(projectId),
      },
    });
    if (checkget) {
      const data = await PrismaDB.Project.delete({
        where: {
          id: parseInt(projectId),
        },
      });
      if (data) {
        res.status(200).json({
          message: `Project successfully deleted with id: ${projectId}`,
          data,
        });
      } else {
        res.status(500).json({
          message: `Error while deleting with id: ${projectId}`,
        });
      }
    } else {
      res.status(404).json({
        message: `Project not found`,
      });
    }
  } catch (error) {
    console.log("Delete while getting single project at backend: ", error);
    return res.status(422).json({
      error: "Delete while getting single project at backend: ",
      error,
    });
  }
}
