import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"  
import Google from "next-auth/providers/google"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import prisma from "./db"

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  // adapter: PrismaAdapter (prisma),
  // we wouldnt use edge
})