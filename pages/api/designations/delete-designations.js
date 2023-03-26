import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { id } = req.query;

  if (!id) return res.status(422).json({ message: "Invalid id" });

  console.log("Delete Designation End-point hit!");
  try {
    const deleteDesignation = await PrismaDB.Designation.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({ deleteDesignation });
  } catch (error) {
    console.log("Error while deleting Designation at backend: ", error);
    return res
      .status(422)
      .json({ error: "Error while deleting Designation at backend" });
  }
}
