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
  //following are the seeds for team domains
  try {
    await prisma.TeamDomains.deleteMany();
    console.log("All Team Domain destroyed!");
  } catch (error) {
    console.log("Error at Team Domain destroy!", error);
  }
  try {
    await prisma.TeamDomains.createMany({
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
    console.log("All Team Domains Added!");
  } catch (error) {
    console.log("Error at adding all Team Domains! ", error);
  }

  //following are the seeds for ticket pre-requisites
  try {
    await prisma.TicketStatus.deleteMany();
    console.log("All Ticket Status destroyed!");
  } catch (error) {
    console.log("Error at Ticket Status destroy!", error);
  }
  try {
    await prisma.TicketStatus.createMany({
      data: [
        {
          title: "Todo",
          description: "This ticket has not been started",
        },
        {
          title: "In-progress",
          description: "This ticket is activily being worked on",
        },
        {
          title: "Done",
          description: "This ticket has been completed",
        },
        {
          title: "Resolved",
          description: "This issue is resolved",
        },
        {
          title: "Tested but not resolved",
          description: "This issue still exist",
        },
        {
          title: "On Hold",
          description: "This issue will be resolved later",
        },
      ],
    });
    console.log("All Ticket Status Added!");
  } catch (error) {
    console.log("Error at adding all Ticket Status! ", error);
  }
  try {
    await prisma.TicketPiority.deleteMany();
    console.log("All Ticket Piority destroyed!");
  } catch (error) {
    console.log("Error at Ticket Piority destroy:", error);
  }
  try {
    await prisma.TicketPiority.createMany({
      data: [
        {
          title: "Urgent",
        },
        {
          title: "High",
        },
        {
          title: "Normal",
        },
        {
          title: "Low",
        },
      ],
    });
    console.log("All Ticket Piority Added!");
  } catch (error) {
    console.log("Error at adding all Ticket Piority: ", error);
  }
  try {
    await prisma.LogsOperations.deleteMany();
    console.log("All Logs Operations destroyed!");
  } catch (error) {
    console.log("Error at Logs Operations destroy:", error);
  }
  try {
    await prisma.LogsOperations.createMany({
      data: [
        {
          title: "Created Employee",
        },
        {
          title: "Updated Employee",
        },
        {
          title: "Deleted Employee",
        },
        {
          title: "Created Project",
        },
        {
          title: "Updated Project",
        },
        {
          title: "Deleted Project",
        },
        {
          title: "Assigned to Project",
        },
        {
          title: "Removed from Project",
        },
        {
          title: "Created Team",
        },
        {
          title: "Updated Team",
        },
        {
          title: "Deleted Team",
        },
        {
          title: "Assigned to Team",
        },
        {
          title: "Removed from Team",
        },
        {
          title: "Created Ticket",
        },
        {
          title: "Updated Ticket",
        },
        {
          title: "Deleted Ticket",
        },
        {
          title: "Assigned to Ticket",
        },
      ],
    });
    console.log("All Logs Operations Added!");
  } catch (error) {
    console.log("Error at adding Logs Operations: ", error);
  }
}

seed();
