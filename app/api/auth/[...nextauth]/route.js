import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // Custom login page
    error: "/login", // Redirect errors to login page
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      const allowedDomains = ["kmitl.ac.th"]; // Define your allowed domains

      if (user.email) {
        const userDomain = user.email.split("@")[1];
        if (allowedDomains.includes(userDomain)) {
          return true; // Allow sign-in
        }
      }
      return false; // Deny sign-in
    },
    async redirect({ url, baseUrl }) {
      // Always redirect to home page after successful login
      return baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
