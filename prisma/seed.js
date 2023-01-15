const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        email: "munyyb@gmail.com",
        password: "admin1234",
      },
    ],
  });
  try {
    await prisma.Designation.deleteMany();
    console.log("All designations destroyed!");
  } catch (error) {
    console.log("Error at designations destroy!", error);
  }
  try {
    await prisma.Designation.createMany({
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
    console.log("All Designation Added!");
  } catch (error) {
    console.log("Error at adding all designations! ", error);
  }
}
seed();
