import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ token, req }) => {
      const { pathname } = req.nextUrl;

      if (pathname === "/login" || pathname.startsWith("/api/auth")) {
        return true;
      }

      return !!token;
    },
  },
  pages: {
    signIn: "/login", // Redirect to /login when unauthorized
  },
});

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};
