const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Muneeb ur rehman",
        password: "admin1234",
        email: "munyyb@gmail.com",
        phone_number: "03401839004",
        role: "super-admin",
      },
      {
        name: "Areesha Ahmed",
        password: "admin1234",
        email: "areesha@gmail.com",
        phone_number: "03401839004",
        role: "super-admin",
      },
    ],
  });
}

seed();
