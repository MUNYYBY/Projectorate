const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
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
          title: "Super-admin",
        },
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
          title: "Intern",
        },
      ],
    });
    console.log("All Role Added!");
  } catch (error) {
    console.log("Error at adding all Role! ", error);
  }
  //following are the seeds for project domains
  try {
    await prisma.ProjectDomains.deleteMany();
    console.log("All ProjectDomains destroyed!");
  } catch (error) {
    console.log("Error at ProjectDomains destroy!", error);
  }
  try {
    await prisma.ProjectDomains.createMany({
      data: [
        {
          title: "Software Development",
        },
        {
          title: "Testing",
        },
        {
          title: "UI/UX Designing",
        },
        {
          title: "Quality Assaurance",
        },
      ],
    });
    console.log("All Project Domains Added!");
  } catch (error) {
    console.log("Error at adding all Project Domains! ", error);
  }
}
seed();
