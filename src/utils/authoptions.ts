import bcrypt from "bcrypt";
import connectDb from "../lib/db";
import GoogleProvider from "next-auth/providers/google"
import userModel, { IUserModel } from "../models/user-model"
import { AuthOptions, RequestInternal, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
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
        return null;
      }
    }),

    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    //   authorization: {
    //   },
    // })
  ],

  callbacks: {
    // Using the `...rest` parameter to be able to narrow down the type based on `trigger`
    async jwt({ token, trigger, session }) {
      if (trigger === "update" && session?.email) {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        token.email = session.email;
      }
      return token
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl
    }
  },
  pages: { signIn: "/join" },
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
}