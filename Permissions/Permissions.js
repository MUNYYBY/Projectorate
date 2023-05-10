//** You can define rules and persmissions which bound the users  access certain components and perform certain operations */

export const USER_PERMISSIONS = [
  {
    user: "Super-admin",
    permissions: {
      manage_employees: true,
      manage_projects: true,
      manage_teams: true,
      manage_tickets: true,
      manage_logs: true,
    },
  },
  {
    user: "Admin",
    permissions: {
      manage_employees: true,
      manage_projects: true,
      manage_teams: true,
      manage_tickets: true,
      manage_logs: true,
    },
  },
  {
    user: "Operations Manager",
    permissions: {
      manage_employees: true,
      manage_projects: true,
      manage_teams: true,
      manage_tickets: true,
      manage_logs: false,
    },
  },
  {
    user: "Project Manager",
    permissions: {
      manage_employees: false,
      manage_projects: true,
      manage_teams: true,
      manage_tickets: true,
      manage_logs: false,
    },
  },
  {
    user: "Team Lead",
    permissions: {
      manage_employees: false,
      manage_projects: false,
      manage_teams: true,
      manage_tickets: true,
      manage_logs: false,
    },
  },
  {
    user: "Team Member",
    permissions: {
      manage_employees: false,
      manage_projects: false,
      manage_teams: false,
      manage_tickets: false,
      manage_logs: false,
    },
  },
];
