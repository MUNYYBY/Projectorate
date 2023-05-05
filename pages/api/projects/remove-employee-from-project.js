import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Delete User from project End-point hit!");
  const { employeeId, projectId } = req.query;
  if (!employeeId || !projectId) {
    return res
      .status(500)
      .json({ message: "employeeId & projectId are both required!" });
  }
  try {
    const data = await PrismaDB.userProjects
      .delete({
        where: {
          project_id_employee_id: {
            project_id: parseInt(projectId),
            employee_id: parseInt(employeeId),
          },
        },
      })
      .then(async (result) => {
        if (result) {
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
