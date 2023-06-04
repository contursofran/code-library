import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req })
    const isAuthorized = !!token
    const isLoginPage = req.nextUrl.pathname === "/login"

    if (isLoginPage) {
      if (isAuthorized) {
        return NextResponse.redirect(new URL("/dashboard", req.url))
      }
      return null
    }

    if (!isAuthorized) {
      return NextResponse.redirect(new URL("/login", req.url))
    }
  },
  {
    callbacks: {
      // work-around for handling redirect on login page.
      async authorized() {
        return true
      },
    },
  }
)

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
}
