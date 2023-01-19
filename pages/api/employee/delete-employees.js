import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { id } = req.query;

  if (!id) return res.status(422).json({ message: "Invalid id" });

  console.log("Delete Employee End-point hit!");
  try {
    const deleteUser = await PrismaDB.employee.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({ deleteUser });
  } catch (error) {
    console.log("Error while deleting employee at backend: ", error);
    return res
      .status(422)
      .json({ Message: "Error while deleting employee at backend: " });
  }
}
