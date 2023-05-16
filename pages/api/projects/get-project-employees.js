import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get Employee for project End-point hit!");
  const { projectId } = req.query;
  if (!projectId) {
    return res.status(500).json({ message: "ProjectId is required!" });
  }
  try {
    const project = PrismaDB.project
      .findUnique({
        where: {
          id: parseInt(projectId),
        },
      })
      .then((result) => {
        if (!result) {
          res.status(404).json({
            error: 404,
            type: "Project",
            message: "Project does not exist!",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    const userProjects = PrismaDB.userProjects
      .findMany({
        where: {
          project_id: parseInt(projectId),
        },
        select: {
          employee_id: true,
        },
      })
      .then(async (result) => {
        if (!result) {
          res.status(404).json({
            error: 404,
            type: "User Project",
            message: "Project does not exist!",
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
                  message: "Employees not found in project!",
                });
              }
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(
      "Error while getting employees for project at backend: ",
      error
    );
    return res.status(422).json({
      error: "Error while getting employees for project at backend: ",
    });
  }
}
