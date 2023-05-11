import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("Update Employee End-point hit!");
  const employeeData = req.body;
  const LogsOperations = await PrismaDB.LogsOperations.findMany({});
  try {
    const data = await PrismaDB.user
      .update({
        where: {
          id: parseInt(employeeData.id),
        },
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
            update: {
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
        // console.log(result);
        try {
          const response = await PrismaDB.Logs.create({
            data: {
              operation: "Updated employee",
              description: "Updated employee during the employee update phase",
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
                  id: LogsOperations.find((t) => t.title === "Updated Employee")
                    ?.id,
                },
              },
            },
          });
        } catch (error) {
          console.log(
            "Error while creating log for Updated of employee: " + error.message
          );
        }
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err.message });
      });
  } catch (error) {
    console.log("Error while updating user at backend: ", error);
    return res
      .status(500)
      .json({ error: "Error while updating user at backend" + error.message });
  }
}
