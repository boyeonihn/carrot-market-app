import { NextResponse } from 'next/server';
import client from '@/_libs/server/client';

export const POST = async (req: Request) => {
  const res = await req.json();
  const { phone, email } = res;

  const payload = phone ? { phone: +phone } : { email };
  const user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: 'Anonymous',
      ...payload,
    },
    update: {},
  });
  return NextResponse.json({ res, message: 'ok' });
};
