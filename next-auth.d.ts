// next-auth.d.ts (in your types directory or directly in the root)
import NextAuth, { DefaultSession, DefaultJWT } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    // Add custom properties here
    user: {
      userId: string;
      username: string;
    } & DefaultSession['user'];
  }

  interface JWT {
    // Add custom JWT properties here
    email: string;
    picture: string;
    userId: string;
    username: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    // Add properties to the token
    email: string;
    picture: string;
    userId: string;
    username: string;
  }
}
