import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get all Logs End-point hit!");
  try {
    const data = await PrismaDB.Logs.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      include: {
        user: {
          select: {
            id: true,
            employee: {
              select: {
                id: true,
                first_name: true,
                last_name: true,
              },
            },
          },
        },
        team: {
          select: {
            id: true,
            team_name: true,
          },
        },
        project: {
          select: {
            id: true,
            project_name: true,
          },
        },
        employee: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
          },
        },
        ticket: {
          select: {
            id: true,
            title: true,
          },
        },
        LogsOperations: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
    // console.log("All Tickets: ", data);
    res.status(200).json({ data });
  } catch (error) {
    console.log("Error while getting all Logs at backend: ", error);
    return res.status(422).json({
      error: "Error while getting all Logs at backend: " + error.message,
    });
  }
}
