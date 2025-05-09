import { Account, Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

interface BackendUser extends User {
  backendToken?: string;
}

const authOptions = {
  // client secret, this will help client identify whether the user is signed up or not, can change this to log out everyone
  secret: "random-secret",
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }: {user: User | BackendUser, account: Account | null}): Promise<boolean> {
      if (!account?.id_token) return false;
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/user/google_auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jwt: account.id_token,
          userIdentifier: account.providerAccountId,
          authCode: account.access_token
        }),
      });

      if (response.ok) {
        const data = await response.json();
        (user as BackendUser).backendToken = data?.data.authToken;
        return true;
      } else {
        return false;
      }
    },

    async jwt({ token, user }: {token: JWT, user: User | BackendUser}) {
      if (user) {
        token.backendToken = (user as BackendUser).backendToken;
        cookies().set("auth", token.backendToken as string);
      }
      return token;
    },

    async session({ session, token }: { session: Session, token: JWT }) {
      session.backendToken = token.backendToken as string;
      return session;
    },
  },
}

export default authOptions