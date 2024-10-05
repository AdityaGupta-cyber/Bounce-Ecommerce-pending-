import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";  
import GoogleProvider from "next-auth/providers/google";
import prisma from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // Check if user exists
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      // If user does not exist, create a new one
      if (!existingUser) {
        await prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            role: "USER", // Default role on sign-up
          },
        });
      }
      return true;
    },
    async jwt({ token, user }) {
      // Load user data if available
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email },
          select: { id: true, name: true, email: true, role: true },
        });

        // Add user data to token
        if (dbUser) {
          token.id = dbUser.id;
          token.role = dbUser.role;
        }
      }
      // Include image directly from user in the token if available
      if (user?.image) {
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      // Add token data to session
      session.user.id = token.id;
      session.user.role = token.role; // Add role from token
      session.user.image = token.image; // Add image from token
      return session;
    },
  },
});
