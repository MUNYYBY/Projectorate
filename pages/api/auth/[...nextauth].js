import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const NEXT_OPTIONS = {
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60 // 30 days
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            credentials: {},
            async authorize(credentials, req){
                const { email, password } = credentials;
                if(!email != "munyyb@gmail.com" || password != "1234"){
                    throw new Error("Invalid Credentials")
                }

                return {
                    id: 1234,
                    name: "Muneeb",
                    Email: "Munyyb@gmail.com",
                },

            }
        })
    ],
    pages: {
        signIn: "/auth",
      },
}

export default function NextAuth(NEXT_OPTIONS);
