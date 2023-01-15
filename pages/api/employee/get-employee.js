import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const data = await PrismaDB.employee.findMany({
      where: {
        id: {
          not: null,
        },
      },
    });
    res.status(200).json(data);
  } catch (error) {
    console.log("Error while getting employees at backedn: ", error);
    return res
      .status(422)
      .json({ Message: "Error while getting employees at backend: " });
  }
}
