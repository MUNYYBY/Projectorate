"use strict";
exports.id = 6053;
exports.ids = [6053];
exports.modules = {

/***/ 3430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KX": () => (/* binding */ UserRevokedAccessEmail),
/* harmony export */   "bQ": () => (/* binding */ UserAssignedToTeam),
/* harmony export */   "ov": () => (/* binding */ UserAssignedToProject),
/* harmony export */   "u4": () => (/* binding */ NewUserOnBoardEmail)
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2097);
/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1423);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);




const from = "hm.muneeb.u.r@gmail.com";
const subjects = {
    userOnBoard: "Projectorate - Welcome to the Team",
    userRevokedAccess: "Projectorate - Revoked acess to the system",
    UserAssignedToProject: "Projectorate - Assigned to a project",
    UserAssignedToTeam: "Projectorate - Assigned to a team"
};
let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});
const NewUserOnBoardEmail = (reciever, username, password)=>{
    try {
        const __dirname = path__WEBPACK_IMPORTED_MODULE_3___default().resolve();
        const filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(__dirname, "/Templates/WelcomeToTeam.html");
        const source = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, "utf-8").toString();
        const template = handlebars__WEBPACK_IMPORTED_MODULE_1___default().compile(source);
        const replacements = {
            username: username,
            password: password
        };
        const htmlToSend = template(replacements);
        transporter.sendMail({
            from: from,
            to: reciever,
            subject: subjects.userOnBoard,
            html: htmlToSend
        }, function(err, data) {
            if (err) {
                console.log("Error " + err);
            } else {
                console.log("Email sent successfully to the new user: " + username);
            }
        });
    } catch (error) {
        console.log("Error while sending email: " + error);
    }
};
const UserRevokedAccessEmail = (reciever, username)=>{
    try {
        const __dirname = path__WEBPACK_IMPORTED_MODULE_3___default().resolve();
        const filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(__dirname, "/Templates/UserRevokedAccess.html");
        const source = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, "utf-8").toString();
        const template = handlebars__WEBPACK_IMPORTED_MODULE_1___default().compile(source);
        const replacements = {
            username: username
        };
        const htmlToSend = template(replacements);
        transporter.sendMail({
            from: from,
            to: reciever,
            subject: subjects.userRevokedAccess,
            html: htmlToSend
        }, function(err, data) {
            if (err) {
                console.log("Error " + err);
            } else {
                console.log("Email sent successfully to the new user: " + username);
            }
        });
    } catch (error) {
        console.log("Error while sending email: " + error);
    }
};
const UserAssignedToProject = (reciever, username, projectName, projectDomain)=>{
    try {
        const __dirname = path__WEBPACK_IMPORTED_MODULE_3___default().resolve();
        const filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(__dirname, "/Templates/UserAssignedToProject.html");
        const source = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, "utf-8").toString();
        const template = handlebars__WEBPACK_IMPORTED_MODULE_1___default().compile(source);
        const replacements = {
            username: username,
            projectName: projectName,
            projectDomain: projectDomain
        };
        const htmlToSend = template(replacements);
        transporter.sendMail({
            from: from,
            to: reciever,
            subject: subjects.UserAssignedToProject,
            html: htmlToSend
        }, function(err, data) {
            if (err) {
                console.log("Error " + err);
            } else {
                console.log("Email sent successfully to the new user: " + username);
            }
        });
    } catch (error) {
        console.log("Error while sending email: " + error);
    }
};
const UserAssignedToTeam = (reciever, username, teamName, teamDomain, projectName)=>{
    try {
        const __dirname = path__WEBPACK_IMPORTED_MODULE_3___default().resolve();
        const filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(__dirname, "/Templates/UserAssignedToTeam.html");
        const source = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, "utf-8").toString();
        const template = handlebars__WEBPACK_IMPORTED_MODULE_1___default().compile(source);
        const replacements = {
            username: username,
            projectName: projectName,
            teamDomain: teamDomain,
            teamName: teamName
        };
        const htmlToSend = template(replacements);
        transporter.sendMail({
            from: from,
            to: reciever,
            subject: subjects.UserAssignedToTeam,
            html: htmlToSend
        }, function(err, data) {
            if (err) {
                console.log("Error " + err);
            } else {
                console.log("Email sent successfully to the new user: " + username);
            }
        });
    } catch (error) {
        console.log("Error while sending email: " + error);
    }
};


/***/ }),

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
// lib/prisma.ts

let PrismaDB;
if (true) {
    PrismaDB = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
} else {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrismaDB);


/***/ })

};
;