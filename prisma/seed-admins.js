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
    const date = new Date();
    await prisma.user.create({
      data: {
        email: "munyyb@gmail.com",
        password: "admin1234",
        role: roleRes.id,
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
            designation: designationRes.id,
            role: roleRes.id,
            gender: "Male",
            address: "XYZ",
            years_of_experience: 10,
          },
        },
      },
    });
    await prisma.user.create({
      data: {
        email: "areesha@gmail.com",
        password: "admin1234",
        role: roleRes.id,
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
            designation: designationRes.id,
            role: roleRes.id,
            gender: "Female",
            address: "XYZ",
            years_of_experience: 10,
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
