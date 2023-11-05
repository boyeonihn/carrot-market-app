import { NextRequest, NextResponse } from 'next/server';
import {
  readCookieFromStorageServerAction,
  submitCookieToStorageServerAction,
} from '@/_libs/server/serverActions';
import client from '@/_libs/server/prismaClient';
import { confirmTokenUserMatch } from '@/_libs/server/session';

export const POST = async (req: NextRequest) => {
  const { token } = await req.json();

  // 세션 있는지 확인
  const oldCookieFromStorage = await readCookieFromStorageServerAction();

  // find token in db
  const foundToken = await client.token.findUnique({
    where: {
      payload: token,
    },
  });

  // 토큰 없을 시 return
  if (!foundToken) return NextResponse.json({ status: 404 });

  // 토큰 존재 시
  const { userId } = foundToken;
  // check if userInfo matches the userId of Token
  const userMatchesToken = confirmTokenUserMatch(userId);
  // const userIdCookie = cookies().get('auth')?.value;

  // if (!userIdCookie) return NextResponse.json({ status: 404 });
  // const userIdCookieDecrypt = await unsealData(userIdCookie as string, {
  //   password: process.env.COOKIE_PW as string,
  // });

  // const userMatchesToken = userId === +userIdCookieDecrypt;

  if (!userMatchesToken) {
    console.log('token didnt match');
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  console.log('user exists in cookiea nd token matches');
  await submitCookieToStorageServerAction(foundToken.userId);

  // 토큰의 userId와 같은 userId를 가진 token 전부 삭제
  await client.token.deleteMany({
    where: {
      userId: foundToken.userId,
    },
  });

  return NextResponse.json({ ok: true }, { status: 200 });
};
