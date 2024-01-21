import { jwtVerify } from "jose";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export const verifyAuth = async (req: NextRequest) => {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_JWT_SECRET,
  });

  if (!session) return null;

  return session;
};
