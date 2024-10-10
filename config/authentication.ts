import type { SessionOptions } from 'iron-session';

export interface SessionData {
    user: string;

}

export const sessionOptions = {
  password: process.env.IRON_SESSION_PASSWORD as string,
  cookieName: 'secure-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
} satisfies SessionOptions;
