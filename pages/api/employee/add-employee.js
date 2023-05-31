import { NewUserOnBoardEmail } from "../../../client/emails";
import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const employeeData = req.body;
  //   console.log(employeeData);
  try {
    const user = await PrismaDB.user
      .findUnique({
        where: {
          email: employeeData.email,
        },
      })
      .then((result) => {
        if (result) {
          res.status(400).json({
            error: 400,
            type: "Employee",
            message: "Employee with similar email already exists!",
          });
        }
      });
    const LogsOperations = await PrismaDB.LogsOperations.findMany({});
    const data = await PrismaDB.user
      .create({
        data: {
          email: employeeData.email,
          password: employeeData.password,
          Role: {
            connect: {
              id: employeeData.role,
            },
          },
          status: "Active",
          employee: {
            create: {
              first_name: employeeData.firstName,
              last_name: employeeData.lastName,
              email: employeeData.email,
              phone_number: employeeData.phoneNumber,
              date_of_birth: employeeData.dateOfBirth,
              date_of_joining: employeeData.dateOfJoining,
              expertise: employeeData.expertise,
              Designation: {
                connect: {
                  id: employeeData.designation,
                },
              },
              Role: {
                connect: {
                  id: employeeData.role,
                },
              },
              gender: employeeData.gender,
              address: employeeData.address,
              years_of_experience: employeeData.yearsOfExperience,
            },
          },
        },
        include: {
          employee: true,
        },
      })
      .then(async (result) => {
        try {
          const response = await PrismaDB.Logs.create({
            data: {
              operation: "Created employee",
              description:
                "Created employee during the employee creation phase",
              employee_name:
                result.employee.first_name + " " + result.employee.last_name,
              employee: {
                connect: {
                  id: result.employee.id,
                },
              },
              user: {
                connect: {
                  id: employeeData.userId,
                },
              },
              LogsOperations: {
                connect: {
                  id: LogsOperations.find((t) => t.title === "Created Employee")
                    ?.id,
                },
              },
            },
          });
        } catch (error) {
          console.log(
            "Error while creating log for creation of employee: " +
              error.message
          );
        }
        NewUserOnBoardEmail(
          result.email,
          result.employee.first_name,
          result.password
        );
        res.status(200).json(result);
      });
  } catch (error) {
    console.log("Error while add new user at backend: ", error);
    return res
      .status(500)
      .json({ error: "Error while add new user at backend" });
  }
}
