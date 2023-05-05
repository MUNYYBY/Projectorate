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
    }).then((result) => {
      if (!result) {
        res.status(404).json({
          error: 404,
          type: "Project",
          message: "Project does not exist!",
        });
      }
    });
    const data = await PrismaDB.Project.delete({
      where: {
        id: parseInt(projectId),
      },
    })
      .then(async (result) => {
        if (result) {
          res.status(200).json({
            code: 200,
            type: "Project and Userproject deletion!",
            message1: `Project successfully deleted with id: ${projectId}`,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          error: 500,
          type: "Project",
          message: `Error while deleting Project with id ${projectId}: ${err.message}`,
        });
      });
  } catch (error) {
    console.log("Delete while getting single project at backend: ", error);
    return res.status(422).json({
      error: "Delete while getting single project at backend: ",
      error,
    });
  }
}
