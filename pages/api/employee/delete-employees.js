import { UserRevokedAccessEmail } from "../../../client/emails";
import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { id, userId } = req.query;

  if (!id || !userId)
    return res
      .status(422)
      .json({ message: "EmployeeId and userId is mandatory!" });

  console.log("Delete Employee End-point hit!");
  try {
    const LogsOperations = await PrismaDB.LogsOperations.findMany({});
    const deleteEmployee = await PrismaDB.employee.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    const deleteUser = await PrismaDB.user
      .update({
        where: {
          id: parseInt(deleteEmployee.id),
        },
        data: {
          status: "Block",
        },
      })
      .then(async (data) => {
        try {
          const response = await PrismaDB.Logs.create({
            data: {
              operation: "Deleted employee",
              description:
                "Deleted employee during the employee deletion phase",
              employee_name:
                deleteEmployee.first_name + " " + deleteEmployee.last_name,
              user: {
                connect: {
                  id: parseInt(userId),
                },
              },
              LogsOperations: {
                connect: {
                  id: LogsOperations.find((t) => t.title === "Deleted Employee")
                    ?.id,
                },
              },
            },
          });
        } catch (error) {
          console.log(
            "Error while creating log for deletion of employee: " +
              error.message
          );
        }

        UserRevokedAccessEmail(deleteEmployee.email, deleteEmployee.first_name);
        res.status(200).json({ deleteEmployee });
      });
  } catch (error) {
    console.log("Error while deleting employee at backend: ", error);
    return res
      .status(422)
      .json({ error: "Error while deleting employee at backend: " });
  }
}
