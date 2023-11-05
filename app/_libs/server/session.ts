import {
  IronSessionOptions,
  getIronSession,
  IronSessionData,
  getServerActionIronSession,
  unsealData,
} from 'iron-session';

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

// session object options
export const sessionOptions: IronSessionOptions = {
  password: process.env.COOKIE_PW!,
  cookieName: process.env.COOKIE_AUTH!,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

// API route handler that uses getIronSession and returns response that needs to be called from client-side
const getSession = async (req: NextRequest, res: NextResponse) => {
  const session = getIronSession<IronSessionData>(req, res, sessionOptions);
  return session;
};

// uses cookies() function from next/headers to set cookies so that Iron session can be used in nextJS server actions and react server components
const getServerActionSession = async () => {
  const session = getServerActionIronSession<IronSessionData>(
    sessionOptions,
    cookies()
  );
  return session;
};

const confirmTokenUserMatch = async (userId: number) => {
  const userIdCookie = cookies().get('auth')?.value;
  if (!userIdCookie) return false;

  const userIdCookieDecrypt = await unsealData(userIdCookie as string, {
    password: process.env.COOKIE_PW as string,
  });

  return userId === +userIdCookieDecrypt;
};

// const session = async () => {
//   const cookieStore = cookies();
//   const encryptedSession = cookieStore.get(process.env.COOKIE_AUTH!)?.value;

//   const sessionState = encryptedSession
//     ? await unsealData(encryptedSession, {
//         password: process.env.COOKIE_PW!,
//       })
//     : null;

//   return sessionState;
// };

// export default session;

export { getSession, getServerActionSession, confirmTokenUserMatch };
