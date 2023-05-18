"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

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


/***/ }),

/***/ 8209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: external "@next-auth/prisma-adapter"
const prisma_adapter_namespaceObject = require("@next-auth/prisma-adapter");
// EXTERNAL MODULE: ./lib/prisma.js
var prisma = __webpack_require__(36);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js




const authOptions = {
    adapter: (0,prisma_adapter_namespaceObject.PrismaAdapter)(prisma/* default */.Z),
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        credentials_default()({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            credentials: {},
            async authorize (credentials, req) {
                console.log(credentials);
                const { email , password  } = credentials;
                const user = await prisma/* default.user.findFirst */.Z.user.findFirst({
                    where: {
                        email: credentials.email
                    }
                });
                if (user) {
                    if (user.password != password || user.email !== email) {
                        throw new Error("Email or Password Incorrect");
                    } else if (user.status == "Block") {
                        throw new Error("Your credentials has been revoked");
                    } else {
                        delete user["password"];
                        // Any object returned will be saved in `user` property of the JWT
                        return user;
                    }
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    throw new Error("Email or Password Incorrect");
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }), 
    ],
    pages: {
        signIn: "/auth",
        signOut: "/auth"
    },
    callbacks: {
        // async redirect({ user, url, baseUrl }) {
        //   // Allows relative callback URLs
        //   if (user) {
        //     if (!user.id) {
        //       if (url.startsWith("/auth")) return "/app";
        //     }
        //   } else if (new URL(url).origin === baseUrl) return url;
        //   return baseUrl;
        //   //  Allows callback URLs on the same origin
        // },
        async session ({ session , token , user  }) {
            const userDatabase = await prisma/* default.user.findFirst */.Z.user.findFirst({
                where: {
                    email: session.user.email
                },
                include: {
                    employee: {
                        select: {
                            id: true
                        }
                    },
                    Role: {
                        select: {
                            id: true,
                            title: true
                        }
                    }
                }
            });
            const userData = {
                id: userDatabase.id,
                employeeId: userDatabase.employee.id,
                status: userDatabase.status,
                email: userDatabase.email,
                role: userDatabase.Role.title
            }; // creating payload
            console.log(userData);
            session.user = userData; //sending payload as session
            return Promise.resolve(session);
        }
    }
};
/* harmony default export */ const _nextauth_ = (external_next_auth_default()(authOptions));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8209));
module.exports = __webpack_exports__;

})();