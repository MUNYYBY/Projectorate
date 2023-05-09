import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import PrismaDB from "../../../lib/prisma";

const authOptions = {
  adapter: PrismaAdapter(PrismaDB),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        console.log(credentials);
        const { email, password } = credentials;

        const user = await PrismaDB.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        if (user) {
          if (user.password != password || user.email !== email) {
            throw new Error("Email or Password Incorrect");
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
      },
    }),
  ],
  pages: {
    signIn: "/auth",
    signOut: "/auth",
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

    async session({ session, token, user }) {
      const userDatabase = await PrismaDB.user.findFirst({
        where: {
          email: session.user.email,
        },
        include: {
          employee: {
            select: {
              id: true,
            },
          },
          Role: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      });
      const userData = {
        id: userDatabase.id,
        employeeId: userDatabase.employee.id,
        status: userDatabase.status,
        email: userDatabase.email,
        role: userDatabase.role,
      }; // creating payload
      session.user = userData; //sending payload as session
      return Promise.resolve(session);
    },
  },
};

export default NextAuth(authOptions);
