import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export const authProvider = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
    ],
}

const handler = NextAuth(authProvider);

export {
    handler as GET, 
    handler as POST
}