import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";
import { notFound } from "next/navigation";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const payload = await verifyAuth(req);

  if (pathname.startsWith("/signin" || pathname.startsWith("/signup"))) {
    if (payload) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/dashboard")) {
    if (payload?.user.role === "admin") {
      return NextResponse.next();
    }
    return NextResponse.rewrite(new URL("/404", req.url));
  }

  return NextResponse.next();
}
