import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import fs from "fs";
import path from "path";

const from = "support@projectorate.org";
const subjects = {
  userOnBoard: "Projectorate - Welcome to the Team",
  userRevokedAccess: "Projectorate - Revoked acess to the system",
  UserAssignedToProject: "Projectorate - Assigned to a project",
  UserAssignedToTeam: "Projectorate - Assigned to a team",
};

// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: process.env.MAIL_USERNAME,
//     pass: process.env.MAIL_PASSWORD,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//   },
// });

let transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 587,
  auth: {
    user: "support@projectorate.org",
    pass: process.env.EMAIL_PASS,
  },
});

export const NewUserOnBoardEmail = (reciever, username, password) => {
  try {
    const __dirname = path.resolve();
    const filePath = path.join(__dirname, "/Templates/WelcomeToTeam.html");
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = Handlebars.compile(source);
    const replacements = {
      username: username,
      password: password,
    };
    const htmlToSend = template(replacements);
    transporter.sendMail(
      {
        from: from,
        to: reciever,
        subject: subjects.userOnBoard,
        html: htmlToSend,
      },
      function (err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully to the new user: " + username);
        }
      }
    );
  } catch (error) {
    console.log("Error while sending email: " + error);
  }
};
export const UserRevokedAccessEmail = (reciever, username) => {
  try {
    const __dirname = path.resolve();
    const filePath = path.join(__dirname, "/Templates/UserRevokedAccess.html");
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = Handlebars.compile(source);
    const replacements = {
      username: username,
    };
    const htmlToSend = template(replacements);
    transporter.sendMail(
      {
        from: from,
        to: reciever,
        subject: subjects.userRevokedAccess,
        html: htmlToSend,
      },
      function (err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully to the new user: " + username);
        }
      }
    );
  } catch (error) {
    console.log("Error while sending email: " + error);
  }
};
export const UserAssignedToProject = (
  reciever,
  username,
  projectName,
  projectDomain
) => {
  try {
    const __dirname = path.resolve();
    const filePath = path.join(
      __dirname,
      "/Templates/UserAssignedToProject.html"
    );
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = Handlebars.compile(source);
    const replacements = {
      username: username,
      projectName: projectName,
      projectDomain: projectDomain,
    };
    const htmlToSend = template(replacements);
    transporter.sendMail(
      {
        from: from,
        to: reciever,
        subject: subjects.UserAssignedToProject,
        html: htmlToSend,
      },
      function (err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully to the new user: " + username);
        }
      }
    );
  } catch (error) {
    console.log("Error while sending email: " + error);
  }
};
export const UserAssignedToTeam = (
  reciever,
  username,
  teamName,
  teamDomain,
  projectName
) => {
  try {
    const __dirname = path.resolve();
    const filePath = path.join(__dirname, "/Templates/UserAssignedToTeam.html");
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = Handlebars.compile(source);
    const replacements = {
      username: username,
      projectName: projectName,
      teamDomain: teamDomain,
      teamName: teamName,
    };
    const htmlToSend = template(replacements);
    transporter.sendMail(
      {
        from: from,
        to: reciever,
        subject: subjects.UserAssignedToTeam,
        html: htmlToSend,
      },
      function (err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully to the new user: " + username);
        }
      }
    );
  } catch (error) {
    console.log("Error while sending email: " + error);
  }
};
