import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get Employees for Team End-point hit!");
  const { teamId } = req.query;
  if (!teamId) {
    return res.status(500).json({ message: "TeamId is required!" });
  }
  try {
    const team = await PrismaDB.Teams.findUnique({
      where: {
        id: parseInt(teamId),
      },
    })
      .then((result) => {
        if (!result) {
          res.status(404).json({
            error: 404,
            type: "Team",
            message: "Team does not exist!",
          });
        } else {
          return result;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    if (team) {
      const userTeams = PrismaDB.userTeams
        .findMany({
          where: {
            team_id: parseInt(teamId),
          },
          select: {
            employee_id: true,
          },
        })
        .then(async (result) => {
          if (!result) {
            res.status(404).json({
              error: 404,
              type: "User Team",
              message: "Team does not exist!",
            });
          } else {
            let response = [];
            result.map((item) => {
              response.push(item.employee_id);
            });
            await PrismaDB.employee
              .findMany({
                where: {
                  id: { in: response },
                },
                include: {
                  Designation: {
                    select: {
                      id: true,
                      title: true,
                    },
                  },
                },
              })
              .then((result) => {
                if (result) {
                  res.status(200).json({ result });
                } else {
                  res.status(404).json({
                    error: 404,
                    type: "Employees",
                    message: "Employees not found in Team!",
                  });
                }
              });
          }
        })
        .catch((err) => {
          console.log(err);
          return res.status(422).json({
            error:
              "Error while getting Team for project at backend: " + err.message,
          });
        });
    }
  } catch (error) {
    console.log("Error while getting Team for project at backend: ", error);
    return res.status(422).json({
      error: "Error while getting Team for project at backend: ",
    });
  }
}
