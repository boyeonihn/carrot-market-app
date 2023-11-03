import { NextResponse } from 'next/server';
import client from '@/_libs/server/client';
import { sealData, unsealData } from 'iron-session';
import { cookies } from 'next/headers';

export const POST = async (req: Request) => {
  const res = await req.json();
  const { token } = res;

  // need to check whether token matches any of the tokens in the db
  const tokenObj = await client.token.findUnique({
    where: {
      payload: token,
    },
  });

  if (!tokenObj) {
    console.log('cookie didnt exist');
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const userId = tokenObj.userId;
  const userIdCookie = cookies().get('auth')?.value;
  const userIdEncrypted = await sealData(userId, {
    password: process.env.COOKIE_PW!,
  });

  // checking if the token matches the user currently stored in cookie
  const userIdCookieDecrypt = await unsealData(userIdCookie as string, {
    password: process.env.COOKIE_PW as string,
  });

  console.log('decrypted userid cookie', { userIdCookieDecrypt, userId });
  const userMatchesToken = userId == +userIdCookieDecrypt;

  if (!userMatchesToken) {
    console.log('token didn match');
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  console.log('user exists in cookie and token matches');
  const sessionUser = client.user.findUnique({
    where: {
      id: userId,
    },
  });

  const encryptedSession = await sealData(JSON.stringify(sessionUser), {
    password: process.env.COOKIE_PW!,
  });

  console.log(encryptedSession, 'encrypted session info here');

  cookies().set(process.env.COOKIE_AUTH!, encryptedSession);
  return NextResponse.json({ ok: true }, { status: 200 });
};
