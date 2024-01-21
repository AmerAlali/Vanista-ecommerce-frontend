import NextAuth from "next-auth";
import { DefaultJWT, DefaultUser, DefaultSession } from "next-auth";
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    user: {
      token: string;
      _id: string;
      role: string;
      name: string;
      email: string;
    };
  }
  interface User extends DefaultUser {
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    user: {
      token: string;
      _id: string;
      role: string;
      name: string;
      email: string;
    };
  }
}
