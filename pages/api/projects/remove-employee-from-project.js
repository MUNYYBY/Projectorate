import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Delete User from project End-point hit!");
  const { employeeId, projectId, ownerId } = req.query;
  if (!employeeId || !projectId || !ownerId) {
    return res
      .status(500)
      .json({ message: "employeeId, ownerId & projectId are both required!" });
  }
  const LogsOperations = await PrismaDB.LogsOperations.findMany({});
  try {
    const data = await PrismaDB.userProjects
      .delete({
        where: {
          project_id_employee_id: {
            project_id: parseInt(projectId),
            employee_id: parseInt(employeeId),
          },
        },
        include: {
          project: true,
          employee: true,
        },
      })
      .then(async (result) => {
        if (result) {
          //record log
          try {
            const response = await PrismaDB.Logs.create({
              data: {
                operation: "Removed from Project",
                description: "Removed from Project during the removing phase",
                project_name: result.project.project_name,
                employee_name:
                  result.employee.first_name + " " + result.employee.last_name,
                user: {
                  connect: {
                    id: parseInt(ownerId),
                  },
                },
                project: {
                  connect: {
                    id: result.project.id,
                  },
                },
                employee: {
                  connect: {
                    id: result.employee.id,
                  },
                },
                LogsOperations: {
                  connect: {
                    id: LogsOperations.find(
                      (t) => t.title === "Removed from Project"
                    )?.id,
                  },
                },
              },
            });
          } catch (error) {
            console.log(
              "Error while creating log for Removing user from project: ",
              error
            );
          }
          res.status(200).json({
            code: 200,
            type: "User project deletion!",
            message: `User successfully deleted from project with id: ${employeeId}`,
            result,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: 500,
          type: "User Project",
          message: `Error while removing employee from Project with id ${employeeId}: ${err.message}`,
        });
      });
  } catch (error) {
    console.log(
      "Error while deleting employee form project at backend: ",
      error
    );
    return res.status(422).json({
      error: "Error while deleting employee form project at backend: ",
      error,
    });
  }
}
