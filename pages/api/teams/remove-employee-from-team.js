import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Delete User from Team End-point hit!");
  const { employeeId, teamId, ownerId } = req.query;
  if (!employeeId || !teamId || !ownerId) {
    return res
      .status(500)
      .json({ message: "employeeId, ownerId & teamId are both required!" });
  }
  const LogsOperations = await PrismaDB.LogsOperations.findMany({});
  try {
    const teams = await PrismaDB.userTeams
      .findUnique({
        where: {
          team_id_employee_id: {
            team_id: parseInt(teamId),
            employee_id: parseInt(employeeId),
          },
        },
      })
      .then(async (result) => {
        if (!result) {
          res.status(404).json({
            code: 404,
            type: "User team",
            message: `User does not exists in team with id: ${employeeId}`,
          });
        } else {
          return result;
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: 500,
          type: "User Team",
          message: `Error while checking for employee in team with id ${employeeId}: ${err.message}`,
        });
      });
    if (teams) {
      const data = await PrismaDB.userTeams
        .delete({
          where: {
            team_id_employee_id: {
              team_id: parseInt(teamId),
              employee_id: parseInt(employeeId),
            },
          },
          include: {
            employee: true,
            team: {
              include: {
                project: true,
              },
            },
          },
        })
        .then(async (result) => {
          if (result) {
            //** Record log */
            try {
              const response = await PrismaDB.Logs.create({
                data: {
                  operation: "Removed from Team",
                  description:
                    "Removed from Team during the Team removing phase",
                  team_name: result.team.team_name,
                  project_name: result.team.project.project_name,
                  employee_name:
                    result.employee.first_name +
                    " " +
                    result.employee.last_name,
                  user: {
                    connect: {
                      id: parseInt(ownerId),
                    },
                  },
                  team: {
                    connect: {
                      id: result.team.id,
                    },
                  },
                  project: {
                    connect: {
                      id: result.team.project.id,
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
                        (t) => t.title === "Removed from Team"
                      )?.id,
                    },
                  },
                },
              });
            } catch (error) {
              console.log("Error while creating log for team: ", error);
            }
            res.status(200).json({
              code: 200,
              type: "User Team deletion!",
              message: `User successfully deleted from Team with id: ${employeeId}`,
              result,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: 500,
            type: "User Team",
            message: `Error while removing employee from Team with id ${employeeId}: ${err.message}`,
          });
        });
    }
  } catch (error) {
    console.log("Error while deleting employee form Team at backend: ", error);
    return res.status(422).json({
      error: "Error while deleting employee form Team at backend: ",
      error,
    });
  }
}
