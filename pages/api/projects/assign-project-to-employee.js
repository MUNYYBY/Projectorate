import { UserAssignedToProject } from "../../../client/emails";
import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Assign project to employee End-point hit!");
  const { userId, projectId, ownerId } = req.query;
  if (!userId || !projectId || !ownerId) {
    return res
      .status(500)
      .json({ message: "ProjectId, ownerId and UserId are both required!" });
  }
  const LogsOperations = await PrismaDB.LogsOperations.findMany({});
  try {
    const project = await PrismaDB.project
      .findUnique({
        where: {
          id: parseInt(projectId),
        },
        include: {
          projectDomain: true,
        },
      })
      .then((result) => {
        if (!result) {
          res.status(404).json({
            error: 404,
            type: "Project",
            message: "Project does not exist!",
          });
        } else {
          return result;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    const user = await PrismaDB.employee
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
        } else {
          return result;
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
            .then(async (result) => {
              if (result) {
                //record log
                try {
                  const response = await PrismaDB.Logs.create({
                    data: {
                      operation: "Assigned to Project",
                      description:
                        "Assigned to Project during the assigning phase",
                      project_name: project.project_name,
                      employee_name: user.first_name + " " + user.last_name,
                      user: {
                        connect: {
                          id: parseInt(ownerId),
                        },
                      },
                      project: {
                        connect: {
                          id: project.id,
                        },
                      },
                      employee: {
                        connect: {
                          id: user.id,
                        },
                      },
                      LogsOperations: {
                        connect: {
                          id: LogsOperations.find(
                            (t) => t.title === "Assigned to Project"
                          )?.id,
                        },
                      },
                    },
                  });
                } catch (error) {
                  console.log(
                    "Error while creating log for assigning user to project: ",
                    error
                  );
                }
                //send email
                // console.log(project);
                try {
                  UserAssignedToProject(
                    user.email,
                    user.first_name,
                    project.project_name,
                    project.projectDomain.title
                  );
                } catch (error) {
                  console.log(error);
                }
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
