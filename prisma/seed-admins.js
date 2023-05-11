const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
async function seedAdmins() {
  //After every tables seeds, then seed users table
  try {
    await prisma.employee.deleteMany();
    await prisma.user.deleteMany();
    console.log("All users & employees destroyed!");
    const roleRes = await prisma.role.findFirst({
      where: {
        title: "Super-admin",
      },
    });
    const designationRes = await prisma.designation.findFirst({
      where: {
        title: "Senior",
      },
    });
    const LogsOperations = await prisma.LogsOperations.findMany({});
    const date = new Date();
    await prisma.user.create({
      data: {
        email: "munyyb@gmail.com",
        password: "admin1234",
        Role: {
          connect: {
            id: roleRes.id,
          },
        },
        status: "Active",
        employee: {
          create: {
            first_name: "Muneeb",
            last_name: "Ur rehman",
            email: "munyyb@gmail.com",
            phone_number: "03401839004",
            date_of_birth: "May 16th 2000",
            date_of_joining: `${date.getDate()}`,
            expertise: "CEO",
            Designation: {
              connect: {
                id: designationRes.id,
              },
            },
            Role: {
              connect: {
                id: roleRes.id,
              },
            },
            gender: "Male",
            address: "XYZ",
            years_of_experience: 10,
            Logs: {
              create: {
                operation: "Created employee",
                description: "Created super-admin at super-admin",
                employee_name: "Muneeb ur rehman",
                LogsOperations: {
                  connect: {
                    id: LogsOperations.find(
                      (t) => t.title === "Created Employee"
                    )?.id,
                  },
                },
              },
            },
          },
        },
      },
    });
    await prisma.user.create({
      data: {
        email: "areesha@gmail.com",
        password: "admin1234",
        Role: {
          connect: {
            id: roleRes.id,
          },
        },
        status: "Active",
        employee: {
          create: {
            first_name: "Areesha",
            last_name: "Ahmed",
            email: "areesha@gmail.com",
            phone_number: "03401839004",
            date_of_birth: "May 16th 2000",
            date_of_joining: `${date.getDate()}`,
            expertise: "CTO",
            Designation: {
              connect: {
                id: designationRes.id,
              },
            },
            Role: {
              connect: {
                id: roleRes.id,
              },
            },
            gender: "Female",
            address: "XYZ",
            years_of_experience: 10,
            Logs: {
              create: {
                operation: "Created employee",
                description: "Created super-admin at super-admin",
                employee_name: "Areesha Ahmed",
                LogsOperations: {
                  connect: {
                    id: LogsOperations.find(
                      (t) => t.title === "Created Employee"
                    )?.id,
                  },
                },
              },
            },
          },
        },
      },
    });
    console.log("Super-admins added!\n");
  } catch (error) {
    console.log(error);
  }
}
seedAdmins();
