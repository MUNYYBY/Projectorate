import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Update Project Status End-point hit!");
  const { projectId, statusId } = req.query;
  if (!projectId || !statusId) {
    return res
      .status(500)
      .json({ message: "projectId & statusId is required!" });
  }
  try {
    const project = await PrismaDB.Project.findUnique({
      where: {
        id: parseInt(projectId),
      },
    }).then((result) => {
      if (result) {
        return result;
      } else {
        res.status(404).json({
          error: 404,
          type: "Project",
          message: "ProjectTicket Does not exists!",
        });
      }
    });
    const status = await PrismaDB.ProjectStatus.findUnique({
      where: {
        id: parseInt(statusId),
      },
    }).then((result) => {
      if (result) {
        return result;
      } else {
        res.status(404).json({
          error: 404,
          type: "Status",
          message: "Project status Does not exists!",
        });
      }
    });
    if (project && status) {
      const data = await PrismaDB.Project.update({
        where: {
          id: parseInt(projectId),
        },
        data: {
          ProjectStatus: {
            connect: {
              id: parseInt(statusId),
            },
          },
        },
      })
        .then((result) => {
          res.status(200).json({ result });
        })
        .catch((err) => {
          res.status(500).json({
            error: 500,
            type: "Project",
            message: "Error while Updating Project Status!",
            errMessage: err.message,
          });
        });
    }
  } catch (error) {
    console.log("Error while Updating Project Status at backend: ", error);
    return res.status(422).json({
      error:
        "Error while getting Updating Project Status at backend: " +
        error.message,
    });
  }
}
