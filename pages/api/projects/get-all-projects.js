import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get all projects End-point hit!");
  try {
    const data = await PrismaDB.Project.findMany();
    console.log("All Projects: ", data);
    res.status(200).json({ data });
  } catch (error) {
    console.log("Error while getting all Projects at backedn: ", error);
    return res
      .status(422)
      .json({ error: "Error while getting all Projects at backend: ", error });
  }
}
