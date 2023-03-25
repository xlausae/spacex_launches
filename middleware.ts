import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/launches")) {
    const user = {
      name: "User",
      authenticated: true,
    };

    if (!user.authenticated) {
      return NextResponse.redirect(new URL("login", request.url));
    }
  }
}
