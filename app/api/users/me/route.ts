import { readCookieFromStorageServerAction } from '@/_libs/server/serverActions';
import client from '@/_libs/server/client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  // bring logged in user's unique cookies
  const cookieFromStorage = await readCookieFromStorageServerAction();
  // console.log('api/users/me - checking cookies of logged in user', cookieFromStorage);
  const findProfile = await client.user.findUnique({
    where: { id: cookieFromStorage.user?.id },
  });
  // console.log("me에서 가져온 프로필", findProfile, typeof findProfile);
  const userInfo = JSON.parse(
    JSON.stringify(
      findProfile,
      (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
    )
  );
  return NextResponse.json({ ok: true, userInfo }, { status: 200 });
};
