const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
  await prisma.superAdmin.create({
    data: [
      {
        email: "munyyb@gmail.com",
        first_name: "Muneeb",
        last_name: "Ur rehman",
        user: {
          create: {
            password: "admin1234",
            email: "munyyb@gmail.com",
          },
        },
      },
    ],
  });
}

seed();
