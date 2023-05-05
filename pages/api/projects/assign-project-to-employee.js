import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Assign project to employee End-point hit!");
  const { userId, projectId } = req.query;
  if (!userId || !projectId) {
    return res
      .status(500)
      .json({ message: "ProjectId and UserId are both required!" });
  }
  try {
    const project = PrismaDB.project
      .findUnique({
        where: {
          id: parseInt(projectId),
        },
      })
      .then((result) => {
        if (!result) {
          res.status(404).json({
            error: 404,
            type: "Project",
            message: "Project does not exist!",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    const user = PrismaDB.employee
      .findUnique({
        where: {
          id: parseInt(userId),
        },
      })
      .then((result) => {
        if (!result) {
          res.status(404).json({
            error: 404,
            type: "Employee",
            message: "Employee does not exist!",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    const checkForExsistance = PrismaDB.userProjects
      .findUnique({
        where: {
          project_id_employee_id: {
            project_id: parseInt(projectId),
            employee_id: parseInt(userId),
          },
        },
      })
      .then((result) => {
        if (result) {
          res
            .status(403)
            .json({ message: "Employee is already added to the project" });
        } else {
          const data = PrismaDB.userProjects
            .create({
              data: {
                project_id: parseInt(projectId),
                employee_id: parseInt(userId),
              },
            })
            .then((result) => {
              if (result) {
                res.status(200).json({ result });
              } else {
                res.status(500).json({
                  message:
                    "Some problem Occoured while assigning user to a project!",
                });
              }
            })
            .catch((err) => {
              console.log(err);
              res
                .status(500)
                .json({ error: "Error Occoured", message: err.message });
            });
        }
      });
  } catch (error) {
    console.log(
      "Error while Assigning project to employee at backend: ",
      error
    );
    return res.status(422).json({
      error: "Error while Assigning project to employee at backend: ",
      error,
    });
  }
}
