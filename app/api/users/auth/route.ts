import { NextResponse } from 'next/server';
import client from '@/_libs/server/client';

export const POST = async (req: Request) => {
  const res = await req.json();
  const { phone, email } = res;

  let user;
  user = await client.user.upsert({
    where: {
      phone: +phone,
    },
    create: {
      phone: +phone,
      name: 'Anonymous',
    },
    update: {},
  });
  return NextResponse.json({ res, message: 'ok' });
};
