import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const projects = await PrismaDB.Project.count({});
    const teams = await PrismaDB.Teams.count({});
    const tickets = await PrismaDB.Tickets.count({});
    res.status(200).json({ projects, teams, tickets });
  } catch (error) {
    console.log("Error while getting analytics info at backend: ", error);
    return res.status(422).json({
      error: "Error while getting analytics info at backend",
    });
  }
}
