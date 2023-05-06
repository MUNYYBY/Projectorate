import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get all Team Domains End-point hit!");
  try {
    const data = await PrismaDB.TeamDomains.findMany();
    res.status(200).json({ data });
  } catch (error) {
    console.log("Error while getting Team Domains at the backend: ", error);
    return res
      .status(422)
      .json({ error: "Error while Team Domains at backend" });
  }
}