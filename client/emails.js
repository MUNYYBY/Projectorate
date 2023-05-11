import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import fs from "fs";
import path from "path";

const from = "hm.muneeb.u.r@gmail.com";
const subjects = {
  userOnBoard: "Projectorate - Welcome to the Team",
  userRevokedAccess: "Projectorate - Revoked acess to the system",
};

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
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
