import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const employeeData = req.body;
  //   console.log(employeeData);
  try {
    const data = await PrismaDB.user.create({
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
    });
    res.status(200).json(data);
  } catch (error) {
    console.log("Error while add new user at backend: ", error);
    return res
      .status(500)
      .json({ error: "Error while add new user at backend" });
  }
}
