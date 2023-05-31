"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/employee/add-employee";
exports.ids = ["pages/api/employee/add-employee"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "handlebars":
/*!*****************************!*\
  !*** external "handlebars" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("handlebars");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./client/emails.js":
/*!**************************!*\
  !*** ./client/emails.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NewUserOnBoardEmail\": () => (/* binding */ NewUserOnBoardEmail),\n/* harmony export */   \"UserAssignedToProject\": () => (/* binding */ UserAssignedToProject),\n/* harmony export */   \"UserAssignedToTeam\": () => (/* binding */ UserAssignedToTeam),\n/* harmony export */   \"UserRevokedAccessEmail\": () => (/* binding */ UserRevokedAccessEmail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! handlebars */ \"handlebars\");\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst from = \"hm.muneeb.u.r@gmail.com\";\nconst subjects = {\n    userOnBoard: \"Projectorate - Welcome to the Team\",\n    userRevokedAccess: \"Projectorate - Revoked acess to the system\",\n    UserAssignedToProject: \"Projectorate - Assigned to a project\",\n    UserAssignedToTeam: \"Projectorate - Assigned to a team\"\n};\nlet transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    service: \"gmail\",\n    auth: {\n        type: \"OAuth2\",\n        user: process.env.MAIL_USERNAME,\n        pass: process.env.MAIL_PASSWORD,\n        clientId: process.env.OAUTH_CLIENTID,\n        clientSecret: process.env.OAUTH_CLIENT_SECRET,\n        refreshToken: process.env.OAUTH_REFRESH_TOKEN\n    }\n});\nconst NewUserOnBoardEmail = (reciever, username, password)=>{\n    try {\n        const __dirname = path__WEBPACK_IMPORTED_MODULE_3___default().resolve();\n        const filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(__dirname, \"/Templates/WelcomeToTeam.html\");\n        const source = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf-8\").toString();\n        const template = handlebars__WEBPACK_IMPORTED_MODULE_1___default().compile(source);\n        const replacements = {\n            username: username,\n            password: password\n        };\n        const htmlToSend = template(replacements);\n        transporter.sendMail({\n            from: from,\n            to: reciever,\n            subject: subjects.userOnBoard,\n            html: htmlToSend\n        }, function(err, data) {\n            if (err) {\n                console.log(\"Error \" + err);\n            } else {\n                console.log(\"Email sent successfully to the new user: \" + username);\n            }\n        });\n    } catch (error) {\n        console.log(\"Error while sending email: \" + error);\n    }\n};\nconst UserRevokedAccessEmail = (reciever, username)=>{\n    try {\n        const __dirname = path__WEBPACK_IMPORTED_MODULE_3___default().resolve();\n        const filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(__dirname, \"/Templates/UserRevokedAccess.html\");\n        const source = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf-8\").toString();\n        const template = handlebars__WEBPACK_IMPORTED_MODULE_1___default().compile(source);\n        const replacements = {\n            username: username\n        };\n        const htmlToSend = template(replacements);\n        transporter.sendMail({\n            from: from,\n            to: reciever,\n            subject: subjects.userRevokedAccess,\n            html: htmlToSend\n        }, function(err, data) {\n            if (err) {\n                console.log(\"Error \" + err);\n            } else {\n                console.log(\"Email sent successfully to the new user: \" + username);\n            }\n        });\n    } catch (error) {\n        console.log(\"Error while sending email: \" + error);\n    }\n};\nconst UserAssignedToProject = (reciever, username, projectName, projectDomain)=>{\n    try {\n        const __dirname = path__WEBPACK_IMPORTED_MODULE_3___default().resolve();\n        const filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(__dirname, \"/Templates/UserAssignedToProject.html\");\n        const source = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf-8\").toString();\n        const template = handlebars__WEBPACK_IMPORTED_MODULE_1___default().compile(source);\n        const replacements = {\n            username: username,\n            projectName: projectName,\n            projectDomain: projectDomain\n        };\n        const htmlToSend = template(replacements);\n        transporter.sendMail({\n            from: from,\n            to: reciever,\n            subject: subjects.UserAssignedToProject,\n            html: htmlToSend\n        }, function(err, data) {\n            if (err) {\n                console.log(\"Error \" + err);\n            } else {\n                console.log(\"Email sent successfully to the new user: \" + username);\n            }\n        });\n    } catch (error) {\n        console.log(\"Error while sending email: \" + error);\n    }\n};\nconst UserAssignedToTeam = (reciever, username, teamName, teamDomain, projectName)=>{\n    try {\n        const __dirname = path__WEBPACK_IMPORTED_MODULE_3___default().resolve();\n        const filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(__dirname, \"/Templates/UserAssignedToTeam.html\");\n        const source = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf-8\").toString();\n        const template = handlebars__WEBPACK_IMPORTED_MODULE_1___default().compile(source);\n        const replacements = {\n            username: username,\n            projectName: projectName,\n            teamDomain: teamDomain,\n            teamName: teamName\n        };\n        const htmlToSend = template(replacements);\n        transporter.sendMail({\n            from: from,\n            to: reciever,\n            subject: subjects.UserAssignedToTeam,\n            html: htmlToSend\n        }, function(err, data) {\n            if (err) {\n                console.log(\"Error \" + err);\n            } else {\n                console.log(\"Email sent successfully to the new user: \" + username);\n            }\n        });\n    } catch (error) {\n        console.log(\"Error while sending email: \" + error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsRUFBRUEsUUFBUTtTQUNuQjtRQUNELE1BQU1iLFVBQVUsR0FBR0gsUUFBUSxDQUFDRSxZQUFZLENBQUM7UUFDekM5QixXQUFXLENBQUNnQyxRQUFRLENBQ2xCO1lBQ0V0QyxJQUFJLEVBQUVBLElBQUk7WUFDVnVDLEVBQUUsRUFBRWYsUUFBUTtZQUNaZ0IsT0FBTyxFQUFFdkMsUUFBUSxDQUFDSSxrQkFBa0I7WUFDcENvQyxJQUFJLEVBQUVKLFVBQVU7U0FDakIsRUFDRCxTQUFVSyxHQUFHLEVBQUVDLElBQUksRUFBRTtZQUNuQixJQUFJRCxHQUFHLEVBQUU7Z0JBQ1BFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsR0FBR0gsR0FBRyxDQUFDLENBQUM7WUFDOUIsT0FBTztnQkFDTEUsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkNBQTJDLEdBQUdwQixRQUFRLENBQUMsQ0FBQztZQUN0RSxDQUFDO1FBQ0gsQ0FBQyxDQUNGLENBQUM7SUFDSixFQUFFLE9BQU9xQixLQUFLLEVBQUU7UUFDZEYsT0FBTyxDQUFDQyxHQUFHLENBQUMsNkJBQTZCLEdBQUdDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0b3JhdGUvLi9jbGllbnQvZW1haWxzLmpzPzc1ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcclxuaW1wb3J0IEhhbmRsZWJhcnMgZnJvbSBcImhhbmRsZWJhcnNcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuY29uc3QgZnJvbSA9IFwiaG0ubXVuZWViLnUuckBnbWFpbC5jb21cIjtcclxuY29uc3Qgc3ViamVjdHMgPSB7XHJcbiAgdXNlck9uQm9hcmQ6IFwiUHJvamVjdG9yYXRlIC0gV2VsY29tZSB0byB0aGUgVGVhbVwiLFxyXG4gIHVzZXJSZXZva2VkQWNjZXNzOiBcIlByb2plY3RvcmF0ZSAtIFJldm9rZWQgYWNlc3MgdG8gdGhlIHN5c3RlbVwiLFxyXG4gIFVzZXJBc3NpZ25lZFRvUHJvamVjdDogXCJQcm9qZWN0b3JhdGUgLSBBc3NpZ25lZCB0byBhIHByb2plY3RcIixcclxuICBVc2VyQXNzaWduZWRUb1RlYW06IFwiUHJvamVjdG9yYXRlIC0gQXNzaWduZWQgdG8gYSB0ZWFtXCIsXHJcbn07XHJcblxyXG5sZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgc2VydmljZTogXCJnbWFpbFwiLFxyXG4gIGF1dGg6IHtcclxuICAgIHR5cGU6IFwiT0F1dGgyXCIsXHJcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5NQUlMX1VTRVJOQU1FLFxyXG4gICAgcGFzczogcHJvY2Vzcy5lbnYuTUFJTF9QQVNTV09SRCxcclxuICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5PQVVUSF9DTElFTlRJRCxcclxuICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuT0FVVEhfQ0xJRU5UX1NFQ1JFVCxcclxuICAgIHJlZnJlc2hUb2tlbjogcHJvY2Vzcy5lbnYuT0FVVEhfUkVGUkVTSF9UT0tFTixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBOZXdVc2VyT25Cb2FyZEVtYWlsID0gKHJlY2lldmVyLCB1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgX19kaXJuYW1lID0gcGF0aC5yZXNvbHZlKCk7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsIFwiL1RlbXBsYXRlcy9XZWxjb21lVG9UZWFtLmh0bWxcIik7XHJcbiAgICBjb25zdCBzb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIFwidXRmLThcIikudG9TdHJpbmcoKTtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHNvdXJjZSk7XHJcbiAgICBjb25zdCByZXBsYWNlbWVudHMgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGh0bWxUb1NlbmQgPSB0ZW1wbGF0ZShyZXBsYWNlbWVudHMpO1xyXG4gICAgdHJhbnNwb3J0ZXIuc2VuZE1haWwoXHJcbiAgICAgIHtcclxuICAgICAgICBmcm9tOiBmcm9tLFxyXG4gICAgICAgIHRvOiByZWNpZXZlcixcclxuICAgICAgICBzdWJqZWN0OiBzdWJqZWN0cy51c2VyT25Cb2FyZCxcclxuICAgICAgICBodG1sOiBodG1sVG9TZW5kLFxyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBcIiArIGVycik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgc2VudCBzdWNjZXNzZnVsbHkgdG8gdGhlIG5ldyB1c2VyOiBcIiArIHVzZXJuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgc2VuZGluZyBlbWFpbDogXCIgKyBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgVXNlclJldm9rZWRBY2Nlc3NFbWFpbCA9IChyZWNpZXZlciwgdXNlcm5hbWUpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgX19kaXJuYW1lID0gcGF0aC5yZXNvbHZlKCk7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsIFwiL1RlbXBsYXRlcy9Vc2VyUmV2b2tlZEFjY2Vzcy5odG1sXCIpO1xyXG4gICAgY29uc3Qgc291cmNlID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBcInV0Zi04XCIpLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShzb3VyY2UpO1xyXG4gICAgY29uc3QgcmVwbGFjZW1lbnRzID0ge1xyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaHRtbFRvU2VuZCA9IHRlbXBsYXRlKHJlcGxhY2VtZW50cyk7XHJcbiAgICB0cmFuc3BvcnRlci5zZW5kTWFpbChcclxuICAgICAge1xyXG4gICAgICAgIGZyb206IGZyb20sXHJcbiAgICAgICAgdG86IHJlY2lldmVyLFxyXG4gICAgICAgIHN1YmplY3Q6IHN1YmplY3RzLnVzZXJSZXZva2VkQWNjZXNzLFxyXG4gICAgICAgIGh0bWw6IGh0bWxUb1NlbmQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIFwiICsgZXJyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFbWFpbCBzZW50IHN1Y2Nlc3NmdWxseSB0byB0aGUgbmV3IHVzZXI6IFwiICsgdXNlcm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBzZW5kaW5nIGVtYWlsOiBcIiArIGVycm9yKTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBVc2VyQXNzaWduZWRUb1Byb2plY3QgPSAoXHJcbiAgcmVjaWV2ZXIsXHJcbiAgdXNlcm5hbWUsXHJcbiAgcHJvamVjdE5hbWUsXHJcbiAgcHJvamVjdERvbWFpblxyXG4pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgX19kaXJuYW1lID0gcGF0aC5yZXNvbHZlKCk7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihcclxuICAgICAgX19kaXJuYW1lLFxyXG4gICAgICBcIi9UZW1wbGF0ZXMvVXNlckFzc2lnbmVkVG9Qcm9qZWN0Lmh0bWxcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHNvdXJjZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGYtOFwiKS50b1N0cmluZygpO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoc291cmNlKTtcclxuICAgIGNvbnN0IHJlcGxhY2VtZW50cyA9IHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBwcm9qZWN0TmFtZTogcHJvamVjdE5hbWUsXHJcbiAgICAgIHByb2plY3REb21haW46IHByb2plY3REb21haW4sXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaHRtbFRvU2VuZCA9IHRlbXBsYXRlKHJlcGxhY2VtZW50cyk7XHJcbiAgICB0cmFuc3BvcnRlci5zZW5kTWFpbChcclxuICAgICAge1xyXG4gICAgICAgIGZyb206IGZyb20sXHJcbiAgICAgICAgdG86IHJlY2lldmVyLFxyXG4gICAgICAgIHN1YmplY3Q6IHN1YmplY3RzLlVzZXJBc3NpZ25lZFRvUHJvamVjdCxcclxuICAgICAgICBodG1sOiBodG1sVG9TZW5kLFxyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBcIiArIGVycik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgc2VudCBzdWNjZXNzZnVsbHkgdG8gdGhlIG5ldyB1c2VyOiBcIiArIHVzZXJuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgc2VuZGluZyBlbWFpbDogXCIgKyBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgVXNlckFzc2lnbmVkVG9UZWFtID0gKFxyXG4gIHJlY2lldmVyLFxyXG4gIHVzZXJuYW1lLFxyXG4gIHRlYW1OYW1lLFxyXG4gIHRlYW1Eb21haW4sXHJcbiAgcHJvamVjdE5hbWVcclxuKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IF9fZGlybmFtZSA9IHBhdGgucmVzb2x2ZSgpO1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi9UZW1wbGF0ZXMvVXNlckFzc2lnbmVkVG9UZWFtLmh0bWxcIik7XHJcbiAgICBjb25zdCBzb3VyY2UgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIFwidXRmLThcIikudG9TdHJpbmcoKTtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHNvdXJjZSk7XHJcbiAgICBjb25zdCByZXBsYWNlbWVudHMgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgcHJvamVjdE5hbWU6IHByb2plY3ROYW1lLFxyXG4gICAgICB0ZWFtRG9tYWluOiB0ZWFtRG9tYWluLFxyXG4gICAgICB0ZWFtTmFtZTogdGVhbU5hbWUsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaHRtbFRvU2VuZCA9IHRlbXBsYXRlKHJlcGxhY2VtZW50cyk7XHJcbiAgICB0cmFuc3BvcnRlci5zZW5kTWFpbChcclxuICAgICAge1xyXG4gICAgICAgIGZyb206IGZyb20sXHJcbiAgICAgICAgdG86IHJlY2lldmVyLFxyXG4gICAgICAgIHN1YmplY3Q6IHN1YmplY3RzLlVzZXJBc3NpZ25lZFRvVGVhbSxcclxuICAgICAgICBodG1sOiBodG1sVG9TZW5kLFxyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBcIiArIGVycik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgc2VudCBzdWNjZXNzZnVsbHkgdG8gdGhlIG5ldyB1c2VyOiBcIiArIHVzZXJuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgc2VuZGluZyBlbWFpbDogXCIgKyBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsibm9kZW1haWxlciIsIkhhbmRsZWJhcnMiLCJmcyIsInBhdGgiLCJmcm9tIiwic3ViamVjdHMiLCJ1c2VyT25Cb2FyZCIsInVzZXJSZXZva2VkQWNjZXNzIiwiVXNlckFzc2lnbmVkVG9Qcm9qZWN0IiwiVXNlckFzc2lnbmVkVG9UZWFtIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiYXV0aCIsInR5cGUiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIk1BSUxfVVNFUk5BTUUiLCJwYXNzIiwiTUFJTF9QQVNTV09SRCIsImNsaWVudElkIiwiT0FVVEhfQ0xJRU5USUQiLCJjbGllbnRTZWNyZXQiLCJPQVVUSF9DTElFTlRfU0VDUkVUIiwicmVmcmVzaFRva2VuIiwiT0FVVEhfUkVGUkVTSF9UT0tFTiIsIk5ld1VzZXJPbkJvYXJkRW1haWwiLCJyZWNpZXZlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJfX2Rpcm5hbWUiLCJyZXNvbHZlIiwiZmlsZVBhdGgiLCJqb2luIiwic291cmNlIiwicmVhZEZpbGVTeW5jIiwidG9TdHJpbmciLCJ0ZW1wbGF0ZSIsImNvbXBpbGUiLCJyZXBsYWNlbWVudHMiLCJodG1sVG9TZW5kIiwic2VuZE1haWwiLCJ0byIsInN1YmplY3QiLCJodG1sIiwiZXJyIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIlVzZXJSZXZva2VkQWNjZXNzRW1haWwiLCJwcm9qZWN0TmFtZSIsInByb2plY3REb21haW4iLCJ0ZWFtTmFtZSIsInRlYW1Eb21haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./client/emails.js\n");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nlet PrismaDB;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    PrismaDB = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrismaDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdCQUFnQjtBQUNzQztBQUV0RCxJQUFJRSxRQUFRO0FBRVosSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0wsSUFBSSxDQUFDQyxNQUFNLENBQUNKLE1BQU0sRUFBRTtRQUNsQkksTUFBTSxDQUFDSixNQUFNLEdBQUcsSUFBSUMsd0RBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDREMsUUFBUSxHQUFHRSxNQUFNLENBQUNKLE1BQU0sQ0FBQztBQUMzQixDQUFDO0FBRUQsaUVBQWVFLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RvcmF0ZS8uL2xpYi9wcmlzbWEuanM/NzUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvcHJpc21hLnRzXHJcbmltcG9ydCB7IHByaXNtYSwgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5sZXQgUHJpc21hREI7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgUHJpc21hREIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbn0gZWxzZSB7XHJcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XHJcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gIH1cclxuICBQcmlzbWFEQiA9IGdsb2JhbC5wcmlzbWE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaXNtYURCO1xyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50IiwiUHJpc21hREIiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/employee/add-employee.js":
/*!********************************************!*\
  !*** ./pages/api/employee/add-employee.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _client_emails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../client/emails */ \"(api)/./client/emails.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    const employeeData = req.body;\n    //   console.log(employeeData);\n    try {\n        const LogsOperations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LogsOperations.findMany({});\n        const data = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.create({\n            data: {\n                email: employeeData.email,\n                password: employeeData.password,\n                Role: {\n                    connect: {\n                        id: employeeData.role\n                    }\n                },\n                status: \"Active\",\n                employee: {\n                    create: {\n                        first_name: employeeData.firstName,\n                        last_name: employeeData.lastName,\n                        email: employeeData.email,\n                        phone_number: employeeData.phoneNumber,\n                        date_of_birth: employeeData.dateOfBirth,\n                        date_of_joining: employeeData.dateOfJoining,\n                        expertise: employeeData.expertise,\n                        Designation: {\n                            connect: {\n                                id: employeeData.designation\n                            }\n                        },\n                        Role: {\n                            connect: {\n                                id: employeeData.role\n                            }\n                        },\n                        gender: employeeData.gender,\n                        address: employeeData.address,\n                        years_of_experience: employeeData.yearsOfExperience\n                    }\n                }\n            },\n            include: {\n                employee: true\n            }\n        }).then(async (result)=>{\n            try {\n                const response = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Logs.create({\n                    data: {\n                        operation: \"Created employee\",\n                        description: \"Created employee during the employee creation phase\",\n                        employee_name: result.employee.first_name + \" \" + result.employee.last_name,\n                        employee: {\n                            connect: {\n                                id: result.employee.id\n                            }\n                        },\n                        user: {\n                            connect: {\n                                id: employeeData.userId\n                            }\n                        },\n                        LogsOperations: {\n                            connect: {\n                                id: LogsOperations.find((t)=>t.title === \"Created Employee\")?.id\n                            }\n                        }\n                    }\n                });\n            } catch (error) {\n                console.log(\"Error while creating log for creation of employee: \" + error.message);\n            }\n            (0,_client_emails__WEBPACK_IMPORTED_MODULE_0__.NewUserOnBoardEmail)(result.email, result.employee.first_name, result.password);\n            res.status(200).json(result);\n        });\n    } catch (error) {\n        console.log(\"Error while add new user at backend: \", error);\n        return res.status(500).json({\n            error: \"Error while add new user at backend\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1wbG95ZWUvYWRkLWVtcGxveWVlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2RDtBQUNsQjtBQUU1QixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELE1BQU1DLFlBQVksR0FBR04sR0FBRyxDQUFDTyxJQUFJO0lBQzdCLCtCQUErQjtJQUMvQixJQUFJO1FBQ0YsTUFBTUMsY0FBYyxHQUFHLE1BQU1WLDJFQUFnQyxDQUFDLEVBQUUsQ0FBQztRQUNqRSxNQUFNWSxJQUFJLEdBQUcsTUFBTVosK0RBQ1YsQ0FBQztZQUNOWSxJQUFJLEVBQUU7Z0JBQ0pHLEtBQUssRUFBRVAsWUFBWSxDQUFDTyxLQUFLO2dCQUN6QkMsUUFBUSxFQUFFUixZQUFZLENBQUNRLFFBQVE7Z0JBQy9CQyxJQUFJLEVBQUU7b0JBQ0pDLE9BQU8sRUFBRTt3QkFDUEMsRUFBRSxFQUFFWCxZQUFZLENBQUNZLElBQUk7cUJBQ3RCO2lCQUNGO2dCQUNEZixNQUFNLEVBQUUsUUFBUTtnQkFDaEJnQixRQUFRLEVBQUU7b0JBQ1JQLE1BQU0sRUFBRTt3QkFDTlEsVUFBVSxFQUFFZCxZQUFZLENBQUNlLFNBQVM7d0JBQ2xDQyxTQUFTLEVBQUVoQixZQUFZLENBQUNpQixRQUFRO3dCQUNoQ1YsS0FBSyxFQUFFUCxZQUFZLENBQUNPLEtBQUs7d0JBQ3pCVyxZQUFZLEVBQUVsQixZQUFZLENBQUNtQixXQUFXO3dCQUN0Q0MsYUFBYSxFQUFFcEIsWUFBWSxDQUFDcUIsV0FBVzt3QkFDdkNDLGVBQWUsRUFBRXRCLFlBQVksQ0FBQ3VCLGFBQWE7d0JBQzNDQyxTQUFTLEVBQUV4QixZQUFZLENBQUN3QixTQUFTO3dCQUNqQ0MsV0FBVyxFQUFFOzRCQUNYZixPQUFPLEVBQUU7Z0NBQ1BDLEVBQUUsRUFBRVgsWUFBWSxDQUFDMEIsV0FBVzs2QkFDN0I7eUJBQ0Y7d0JBQ0RqQixJQUFJLEVBQUU7NEJBQ0pDLE9BQU8sRUFBRTtnQ0FDUEMsRUFBRSxFQUFFWCxZQUFZLENBQUNZLElBQUk7NkJBQ3RCO3lCQUNGO3dCQUNEZSxNQUFNLEVBQUUzQixZQUFZLENBQUMyQixNQUFNO3dCQUMzQkMsT0FBTyxFQUFFNUIsWUFBWSxDQUFDNEIsT0FBTzt3QkFDN0JDLG1CQUFtQixFQUFFN0IsWUFBWSxDQUFDOEIsaUJBQWlCO3FCQUNwRDtpQkFDRjthQUNGO1lBQ0RDLE9BQU8sRUFBRTtnQkFDUGxCLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7U0FDRixDQUFDLENBQ0RtQixJQUFJLENBQUMsT0FBT0MsTUFBTSxHQUFLO1lBQ3RCLElBQUk7Z0JBQ0YsTUFBTUMsUUFBUSxHQUFHLE1BQU0xQywrREFBb0IsQ0FBQztvQkFDMUNZLElBQUksRUFBRTt3QkFDSmdDLFNBQVMsRUFBRSxrQkFBa0I7d0JBQzdCQyxXQUFXLEVBQ1QscURBQXFEO3dCQUN2REMsYUFBYSxFQUNYTCxNQUFNLENBQUNwQixRQUFRLENBQUNDLFVBQVUsR0FBRyxHQUFHLEdBQUdtQixNQUFNLENBQUNwQixRQUFRLENBQUNHLFNBQVM7d0JBQzlESCxRQUFRLEVBQUU7NEJBQ1JILE9BQU8sRUFBRTtnQ0FDUEMsRUFBRSxFQUFFc0IsTUFBTSxDQUFDcEIsUUFBUSxDQUFDRixFQUFFOzZCQUN2Qjt5QkFDRjt3QkFDRE4sSUFBSSxFQUFFOzRCQUNKSyxPQUFPLEVBQUU7Z0NBQ1BDLEVBQUUsRUFBRVgsWUFBWSxDQUFDdUMsTUFBTTs2QkFDeEI7eUJBQ0Y7d0JBQ0RyQyxjQUFjLEVBQUU7NEJBQ2RRLE9BQU8sRUFBRTtnQ0FDUEMsRUFBRSxFQUFFVCxjQUFjLENBQUNzQyxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxHQUFLQSxDQUFDLENBQUNDLEtBQUssS0FBSyxrQkFBa0IsQ0FBQyxFQUMxRC9CLEVBQUU7NkJBQ1A7eUJBQ0Y7cUJBQ0Y7aUJBQ0YsQ0FBQztZQUNKLEVBQUUsT0FBT2dDLEtBQUssRUFBRTtnQkFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQ1QscURBQXFELEdBQ25ERixLQUFLLENBQUM1QyxPQUFPLENBQ2hCLENBQUM7WUFDSixDQUFDO1lBQ0RSLG1FQUFtQixDQUNqQjBDLE1BQU0sQ0FBQzFCLEtBQUssRUFDWjBCLE1BQU0sQ0FBQ3BCLFFBQVEsQ0FBQ0MsVUFBVSxFQUMxQm1CLE1BQU0sQ0FBQ3pCLFFBQVEsQ0FDaEIsQ0FBQztZQUNGYixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDbUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDO0lBQ04sRUFBRSxPQUFPVSxLQUFLLEVBQUU7UUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUNBQXVDLEVBQUVGLEtBQUssQ0FBQyxDQUFDO1FBQzVELE9BQU9oRCxHQUFHLENBQ1BFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDWEMsSUFBSSxDQUFDO1lBQUU2QyxLQUFLLEVBQUUscUNBQXFDO1NBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdG9yYXRlLy4vcGFnZXMvYXBpL2VtcGxveWVlL2FkZC1lbXBsb3llZS5qcz8yZTE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5ld1VzZXJPbkJvYXJkRW1haWwgfSBmcm9tIFwiLi4vLi4vLi4vY2xpZW50L2VtYWlsc1wiO1xyXG5pbXBvcnQgUHJpc21hREIgZnJvbSBcIi4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBlbXBsb3llZURhdGEgPSByZXEuYm9keTtcclxuICAvLyAgIGNvbnNvbGUubG9nKGVtcGxveWVlRGF0YSk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IExvZ3NPcGVyYXRpb25zID0gYXdhaXQgUHJpc21hREIuTG9nc09wZXJhdGlvbnMuZmluZE1hbnkoe30pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IFByaXNtYURCLnVzZXJcclxuICAgICAgLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgZW1haWw6IGVtcGxveWVlRGF0YS5lbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiBlbXBsb3llZURhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgICBSb2xlOiB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Q6IHtcclxuICAgICAgICAgICAgICBpZDogZW1wbG95ZWVEYXRhLnJvbGUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3RhdHVzOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgZW1wbG95ZWU6IHtcclxuICAgICAgICAgICAgY3JlYXRlOiB7XHJcbiAgICAgICAgICAgICAgZmlyc3RfbmFtZTogZW1wbG95ZWVEYXRhLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICBsYXN0X25hbWU6IGVtcGxveWVlRGF0YS5sYXN0TmFtZSxcclxuICAgICAgICAgICAgICBlbWFpbDogZW1wbG95ZWVEYXRhLmVtYWlsLFxyXG4gICAgICAgICAgICAgIHBob25lX251bWJlcjogZW1wbG95ZWVEYXRhLnBob25lTnVtYmVyLFxyXG4gICAgICAgICAgICAgIGRhdGVfb2ZfYmlydGg6IGVtcGxveWVlRGF0YS5kYXRlT2ZCaXJ0aCxcclxuICAgICAgICAgICAgICBkYXRlX29mX2pvaW5pbmc6IGVtcGxveWVlRGF0YS5kYXRlT2ZKb2luaW5nLFxyXG4gICAgICAgICAgICAgIGV4cGVydGlzZTogZW1wbG95ZWVEYXRhLmV4cGVydGlzZSxcclxuICAgICAgICAgICAgICBEZXNpZ25hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdDoge1xyXG4gICAgICAgICAgICAgICAgICBpZDogZW1wbG95ZWVEYXRhLmRlc2lnbmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFJvbGU6IHtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IGVtcGxveWVlRGF0YS5yb2xlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGdlbmRlcjogZW1wbG95ZWVEYXRhLmdlbmRlcixcclxuICAgICAgICAgICAgICBhZGRyZXNzOiBlbXBsb3llZURhdGEuYWRkcmVzcyxcclxuICAgICAgICAgICAgICB5ZWFyc19vZl9leHBlcmllbmNlOiBlbXBsb3llZURhdGEueWVhcnNPZkV4cGVyaWVuY2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgZW1wbG95ZWU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFByaXNtYURCLkxvZ3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIG9wZXJhdGlvbjogXCJDcmVhdGVkIGVtcGxveWVlXCIsXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICAgICBcIkNyZWF0ZWQgZW1wbG95ZWUgZHVyaW5nIHRoZSBlbXBsb3llZSBjcmVhdGlvbiBwaGFzZVwiLFxyXG4gICAgICAgICAgICAgIGVtcGxveWVlX25hbWU6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZW1wbG95ZWUuZmlyc3RfbmFtZSArIFwiIFwiICsgcmVzdWx0LmVtcGxveWVlLmxhc3RfbmFtZSxcclxuICAgICAgICAgICAgICBlbXBsb3llZToge1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdDoge1xyXG4gICAgICAgICAgICAgICAgICBpZDogcmVzdWx0LmVtcGxveWVlLmlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IGVtcGxveWVlRGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgTG9nc09wZXJhdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IExvZ3NPcGVyYXRpb25zLmZpbmQoKHQpID0+IHQudGl0bGUgPT09IFwiQ3JlYXRlZCBFbXBsb3llZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgID8uaWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIFwiRXJyb3Igd2hpbGUgY3JlYXRpbmcgbG9nIGZvciBjcmVhdGlvbiBvZiBlbXBsb3llZTogXCIgK1xyXG4gICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE5ld1VzZXJPbkJvYXJkRW1haWwoXHJcbiAgICAgICAgICByZXN1bHQuZW1haWwsXHJcbiAgICAgICAgICByZXN1bHQuZW1wbG95ZWUuZmlyc3RfbmFtZSxcclxuICAgICAgICAgIHJlc3VsdC5wYXNzd29yZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KTtcclxuICAgICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgYWRkIG5ldyB1c2VyIGF0IGJhY2tlbmQ6IFwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgICAgIC5zdGF0dXMoNTAwKVxyXG4gICAgICAuanNvbih7IGVycm9yOiBcIkVycm9yIHdoaWxlIGFkZCBuZXcgdXNlciBhdCBiYWNrZW5kXCIgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXdVc2VyT25Cb2FyZEVtYWlsIiwiUHJpc21hREIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlbXBsb3llZURhdGEiLCJib2R5IiwiTG9nc09wZXJhdGlvbnMiLCJmaW5kTWFueSIsImRhdGEiLCJ1c2VyIiwiY3JlYXRlIiwiZW1haWwiLCJwYXNzd29yZCIsIlJvbGUiLCJjb25uZWN0IiwiaWQiLCJyb2xlIiwiZW1wbG95ZWUiLCJmaXJzdF9uYW1lIiwiZmlyc3ROYW1lIiwibGFzdF9uYW1lIiwibGFzdE5hbWUiLCJwaG9uZV9udW1iZXIiLCJwaG9uZU51bWJlciIsImRhdGVfb2ZfYmlydGgiLCJkYXRlT2ZCaXJ0aCIsImRhdGVfb2Zfam9pbmluZyIsImRhdGVPZkpvaW5pbmciLCJleHBlcnRpc2UiLCJEZXNpZ25hdGlvbiIsImRlc2lnbmF0aW9uIiwiZ2VuZGVyIiwiYWRkcmVzcyIsInllYXJzX29mX2V4cGVyaWVuY2UiLCJ5ZWFyc09mRXhwZXJpZW5jZSIsImluY2x1ZGUiLCJ0aGVuIiwicmVzdWx0IiwicmVzcG9uc2UiLCJMb2dzIiwib3BlcmF0aW9uIiwiZGVzY3JpcHRpb24iLCJlbXBsb3llZV9uYW1lIiwidXNlcklkIiwiZmluZCIsInQiLCJ0aXRsZSIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/employee/add-employee.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/employee/add-employee.js"));
module.exports = __webpack_exports__;

})();