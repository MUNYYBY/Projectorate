import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Delete User from Team End-point hit!");
  const { employeeId, teamId } = req.query;
  if (!employeeId || !teamId) {
    return res
      .status(500)
      .json({ message: "employeeId & teamId are both required!" });
  }
  try {
    const userTeams = await PrismaDB.userTeams
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
    if (userTeams) {
      const data = await PrismaDB.userTeams
        .delete({
          where: {
            team_id_employee_id: {
              team_id: parseInt(teamId),
              employee_id: parseInt(employeeId),
            },
          },
        })
        .then(async (result) => {
          if (result) {
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
