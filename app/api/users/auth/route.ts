import { NextResponse } from 'next/server';
import client from '@/_libs/server/client';

export const POST = async (req: Request) => {
  const res = await req.json();
  const { phone, email } = res;

  const payload = phone ? { phone } : { email };

  console.log('paylod', payload);
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

  const token = await client.token.create({
    data: {
      payload: '1233334',
      user: {
        connectOrCreate: {
          where: {
            ...payload,
          },
          create: {
            name: 'Anonymous',
            ...payload,
          },
        },
      },
    },
  });

  console.log('token', token);

  return NextResponse.json({ res, message: 'ok' });
};
