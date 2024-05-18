import bcrypt from "bcrypt";
import connectDb from "./lib/db";
import GoogleProvider from "next-auth/providers/google"
import userModel, { IUserModel } from "./models/user-model"
import NextAuth, { RequestInternal, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      authorize: async function (
        credentials: Record<"username" | "password", string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Promise<User | null> {
        await connectDb();
        try {
          if (!credentials?.username || !credentials?.password) throw new Error("Please, enter the required fields.");
          const user = await userModel.findOne<IUserModel>({ email: credentials.username });
          if (!user) throw new Error("Invalid credentials! Please, try again.");
          
          const isCorrectPassword = await bcrypt.compare(credentials.password, user.password);
          if (!isCorrectPassword) throw new Error("Invalid credentials! Please, try again.");

          return user as User;
        } catch (err: any) {
          console.error('Authorization error:', err.message);
          return null;
        }
      }
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
      },
    })
  ],


  callbacks: {},
  pages: {},
  session: {},
  secret: process.env.NEXTAUTH_SECRET as string,
  debug: process.env.NODE_ENV === "development",
})