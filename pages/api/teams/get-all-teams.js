import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get all Teams End-point hit!");
  try {
    const data = await PrismaDB.Teams.findMany({});
    console.log("All Projects: ", data);
    res.status(200).json({ data });
  } catch (error) {
    console.log("Error while getting all Teams at backend: ", error);
    return res
      .status(422)
      .json({ error: "Error while getting all Teams at backend: ", error });
  }
}
