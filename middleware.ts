import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuthorized = !!token
  const isLoginPage = request.nextUrl.pathname.startsWith("/login")

  if (isLoginPage) {
    if (isAuthorized) {
      return NextResponse.redirect(new URL("/dashboard/snippets", request.url))
    }
    return null
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
}
// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/dashboard/snippets", request.url))
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/dashboard/:path*", "/login"],
// }
