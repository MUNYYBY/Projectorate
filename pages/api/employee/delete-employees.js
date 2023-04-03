import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { id } = req.query;

  if (!id) return res.status(422).json({ message: "Invalid id" });

  console.log("Delete Employee End-point hit!");
  try {
    const deleteEmployee = await PrismaDB.employee.delete({
      where: {
        id: parseInt(id),
      },
    });
    const deleteUser = await PrismaDB.user.delete({
      where: {
        id: parseInt(deleteEmployee.id),
      },
    });
    res.status(200).json({ deleteEmployee });
  } catch (error) {
    console.log("Error while deleting employee at backend: ", error);
    return res
      .status(422)
      .json({ error: "Error while deleting employee at backend: " });
  }
}
