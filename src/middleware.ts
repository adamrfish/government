import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

const PUBLIC_PATHS = ["/"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths
  if (PUBLIC_PATHS.includes(pathname)) {
    // If logged in and visiting /, redirect to dashboard
    const token = request.cookies.get("session")?.value;
    if (token && (await verifyToken(token))) {
      return NextResponse.redirect(new URL("/start-here", request.url));
    }
    return NextResponse.next();
  }

  // Protect all other routes
  const token = request.cookies.get("session")?.value;
  if (!token || !(await verifyToken(token))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, sitemap.xml, robots.txt
     * - public folder assets
     */
    "/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.svg$|.*\\.png$|.*\\.webp$|.*\\.jpg$).*)",
  ],
};
