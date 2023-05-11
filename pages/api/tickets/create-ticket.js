import {
  CreateTicketSendEmail,
  NewUserOnBoardEmail,
  sendMailToUser,
} from "../../../client/emails";
import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("Create Ticket End-point hit!");

  const reqBody = req.body;
  console.log(reqBody);
  if (
    !reqBody.userId ||
    !reqBody.teamId ||
    !reqBody.employeeId ||
    !reqBody.ticketStatusId ||
    !reqBody.ticketPiorityId ||
    !reqBody.title ||
    !reqBody.description ||
    !reqBody.deadline
  ) {
    return res.status(500).json({
      error: 500,
      message:
        "Title, description, deadline, userId, TeamId, employeeId, ticketStatusId, ticketPiorityId are madatory!",
    });
  }
  try {
    const employee = await PrismaDB.employee
      .findUnique({
        where: {
          id: parseInt(reqBody.employeeId),
        },
      })
      .then((result) => {
        if (!result) {
          res.status(404).json({
            error: 404,
            type: "Employee",
            message: "Employee does not exist!",
          });
        } else {
          return result;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    const team = await PrismaDB.Teams.findUnique({
      where: {
        id: parseInt(reqBody.teamId),
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

    // ** Check if user is in the team which the ticket is going to be related to */
    // ** Please note that we are not checking for project relavence
    // ** as it is understood that if the user is related to
    // ** team then he/she will also be related to projec as well

    let userTeam = null;

    if (employee && team) {
      userTeam = await PrismaDB.userTeams
        .findUnique({
          where: {
            team_id_employee_id: {
              team_id: parseInt(team.id),
              employee_id: parseInt(employee.id),
            },
          },
        })
        .then((result) => {
          if (!result) {
            res.status(404).json({
              error: 404,
              type: "Employee and Teams",
              message: "Employee must join this team where adding to the team!",
            });
          } else {
            return result;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //** If all above checks completes then create a ticket */

    if (employee && team && userTeam) {
      await PrismaDB.Tickets.create({
        data: {
          title: reqBody.title,
          description: reqBody.description,
          deadline: reqBody.deadline,
          user: {
            connect: {
              id: parseInt(reqBody.userId),
            },
          },
          team: {
            connect: {
              id: parseInt(reqBody.teamId),
            },
          },
          project: {
            connect: {
              id: parseInt(team.projectId),
            },
          },
          employee: {
            connect: {
              id: parseInt(reqBody.employeeId),
            },
          },
          TicketStatus: {
            connect: {
              id: parseInt(reqBody.ticketStatusId),
            },
          },
          TicketPiority: {
            connect: {
              id: parseInt(reqBody.ticketPiorityId),
            },
          },
          Resource: {
            create: {
              url: reqBody.resource,
            },
          },
        },
      })
        .then((result) => {
          if (!result) {
            res.status(500).json({
              error: 500,
              type: "Ticket",
              message: "Error while creating ticket!",
            });
          } else {
            NewUserOnBoardEmail(
              "muneeburryhman@gmail.com",
              "Munyyb",
              "12345678"
            );
            res.status(200).json({ result });
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: err });
        });
    }
  } catch (error) {
    console.log("Error while add new Create Ticket at backend: ", error);
    return res.status(422).json({
      error: "Error while add new Create Ticket at backend: " + error.message,
    });
  }
}
