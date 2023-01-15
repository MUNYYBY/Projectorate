import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // `/admin` requires admin role
      const { pathname } = req.nextUrl;
      console.log(pathname);
      if (pathname.startsWith("/app")) {
        return token?.id;
      } else if (pathname.startsWith("/auth")) {
        return !token?.id;
      }
      // `/me` only requires the user to be logged in
      return !token;
    },
  },
});

export const config = {
  matcher: [
    "/auth",
    "/app",
    "/app/super-admin",
    "/app/super-admin/projects",
    "/app/super-admin/employees",
  ],
};
