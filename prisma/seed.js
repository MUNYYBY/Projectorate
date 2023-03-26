const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.user.deleteMany();
    console.log("All users destroyed!");
    await prisma.user.createMany({
      data: [
        {
          email: "munyyb@gmail.com",
          password: "admin1234",
        },
        {
          email: "areesha@gmail.com",
          password: "admin1234",
        },
      ],
    });
    console.log("Users Added in super-admin!\n");
  } catch (error) {
    console.log(error);
  }
  //the following code seeds the roles
  try {
    await prisma.Role.deleteMany();
    console.log("All Role destroyed!");
  } catch (error) {
    console.log("Error at Role destroy!", error);
  }
  try {
    await prisma.Role.createMany({
      data: [
        {
          title: "Admin",
        },
        {
          title: "Operations Manager",
        },
        {
          title: "Project Manager",
        },
        {
          title: "Team Lead",
        },
        {
          title: "Team Member",
        },
      ],
    });
    console.log("All Role Added!");
  } catch (error) {
    console.log("Error at adding all Role! ", error);
  }
  //the following code seeds the designations
  try {
    await prisma.Designation.deleteMany();
    console.log("All Designation destroyed!");
  } catch (error) {
    console.log("Error at Designation destroy!", error);
  }
  try {
    await prisma.Designation.createMany({
      data: [
        {
          title: "Senior",
        },
        {
          title: "Associate",
        },
        {
          title: "Beginner",
        },
        {
          title: "Intern",
        },
      ],
    });
    console.log("All Role Added!");
  } catch (error) {
    console.log("Error at adding all Role! ", error);
  }
}
seed();
